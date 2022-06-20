/* eslint-disable dot-notation */
/* eslint-disable prefer-destructuring */
import './style.css';

class dayWeatherData
{
    constructor(temp, humidity, pressure, description, windSpeed)
    {
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.description = description;
        this.windSpeed = windSpeed;
    }
}

async function getWeatherData(location, units)
{
    let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=7532cb4e49752099509e49e9180a8b49`);

    if (weatherData.ok === false)
    {
        return false;
    }
    weatherData = await weatherData.json();
    let time = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=1d2dafb861f34d198eec33f885b8ce9f&lat=${weatherData.coord.lat}&long=${weatherData.coord.lon}`);
    weatherData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&units=${units}&appid=7532cb4e49752099509e49e9180a8b49`);
    weatherData = await weatherData.json();
    time = await time.json();
    weatherData['date_time_txt'] = time.date_time_txt;
    return weatherData;
}

async function separateData(weatherData)
{
    weatherData = await weatherData;
    const daysSeparated = [];
    let currentObject;
    for (let day = 0, data = 0; day < 5; day++)
    {
        daysSeparated[day] = [];
        for (let hour = 0; hour <= 21; hour += 3)
        {
            currentObject = weatherData.list[data];
            if (+(currentObject.dt_txt.slice(11, 13)) == hour)
            {
                daysSeparated[day].push(new dayWeatherData(
                    currentObject.main.temp,
                    currentObject.main.humidity,
                    currentObject.main.pressure,
                    currentObject.weather[0].description,
                    currentObject.wind.speed,
                ));
                data++;
            }
            else
            {
                daysSeparated[day].push(null);
            }
        }
        daysSeparated[day].push(weatherData.list[data - 1].dt_txt.slice(0, 10));
    }
    return daysSeparated;
}

async function generateData(daysSeparated, units)
{
    daysSeparated = await daysSeparated;
    const tables = document.querySelector('.weather-tables').querySelectorAll('table');
    let unitSymbolTemp;
    let unitSymbolWS;
    switch (units)
    {
        case 'metric':
            {
                unitSymbolTemp = '°C';
                unitSymbolWS = 'm/s';
            } break;
        case 'standard':
            {
                unitSymbolTemp = 'K';
                unitSymbolWS = 'm/s';
            } break;
        case 'imperial':
            {
                unitSymbolTemp = '°F';
                unitSymbolWS = 'm/h';
            } break;
    }

    for (let i = 0; i < 5; i++)
    {
        const table = tables[i];
        const rows = Array.from(table.querySelectorAll('tr')).slice(1, 9);
        const day = daysSeparated[i];
        table.closest('.date-table-container').querySelector('.date-header').textContent = day[8];

        for (let j = 0; j < 8; j++)
        {
            const row = rows[j];
            const fileds = Array.from(row.querySelectorAll('td')).slice(1, 6);

            if (day[j] != null)
            {
                fileds[0].textContent = day[j].description;
                fileds[1].textContent = `${day[j].temp} ${unitSymbolTemp}`;
                fileds[2].textContent = `${day[j].humidity}%`;
                fileds[3].textContent = `${day[j].pressure} hPa`;
                fileds[4].textContent = `${day[j].windSpeed} ${unitSymbolWS}`;
            }
            else
            {
                for (let k = 0; k < 4; k++)
                {
                    fileds[k].textContent = '-';
                }
            }
        }
    }
}

function slideTable(slideTo)
{
    const slider = document.querySelector(`.side-nav-arrow.${slideTo}`);
    const currentlyDisplayed = document.querySelector('.currently-displayed');
    if (!(slider.classList.contains('disabled')))
    {
        let id = parseInt(currentlyDisplayed.getAttribute('data-id'), 10);
        id = slideTo === 'left' ? id - 1 : id + 1;
        currentlyDisplayed.classList.remove('currently-displayed');
        document.querySelector('.currently-displayed').classList.remove('currently-displayed');
        document.querySelector(`[data-id='${id}']`).classList.add('currently-displayed');
        document.querySelector(`[data-idnav='${id}']`).classList.add('currently-displayed');
        setSlideAccessability(id);
    }
}

function setSlideAccessability(id)
{
    if (document.querySelector('.not-accessible') != null)
    {
        document.querySelector('.not-accessible').classList.remove('not-accessible');
    }
    if (+id === 0)
    {
        const nav = document.querySelector('.side-nav-arrow.left');
        nav.classList.add('not-accessible');
    }
    else if (+id === 4)
    {
        const nav = document.querySelector('.side-nav-arrow.right');
        nav.classList.add('not-accessible');
    }
}

async function getTimeAndGenerate(lat, long, location)
{
    let time = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=1d2dafb861f34d198eec33f885b8ce9f&lat=${lat}&long=${long}`);
    time = await time.json();
    document.querySelector('.location-data').textContent = `${location} -  ${time.timezone}, ${time.date_time}`;
}

let units = 'metric';

async function sumDataAndGenerate()
{
    const location = document.querySelector('#location').value;
    if (location == '')
    {
        setInputWrong(document.querySelector('.location-input'), 'Required');
    }
    else
    {
        units = document.querySelector('#unit').value;
        document.querySelector('.loading-screen').style.setProperty('display', 'flex');
        const data = await getWeatherData(location, units);
        if (data !== false)
        {
            const dataSeparated = await separateData(data);

            await getTimeAndGenerate(data.city.coord.lat, data.city.coord.lon, location);
            await generateData(dataSeparated, units);
            if (document.querySelector('.blocked') !== null)
            {
                document.querySelectorAll('.blocked').forEach((item) =>
                {
                    item.classList.remove('blocked');
                });
                document.querySelector('.table-placeholder').style.setProperty('display', 'none');
                document.querySelectorAll('.not-accessible').forEach((item) =>
                {
                    item.classList.remove('not-accessible');
                });
                setSlideAccessability(0);
            }
        }
        else
        {
            setInputWrong(document.querySelector('.location-input'), 'City not found!');
        }
    }

    document.querySelector('.loading-screen').style.setProperty('display', 'none');
}

function setInputWrong(input, message)
{
    input.value = '';
    input.placeholder = message;
    input.classList.add('wrong-input');
}

document.querySelector('.submit-button-weather').addEventListener('click', () =>
{
    sumDataAndGenerate();
});
document.querySelector('.location-input').addEventListener('click', () =>
{
    const input = document.querySelector('.location-input');
    if (input.classList.contains('wrong-input'))
    {
        input.placeholder = '';
        input.classList.remove('wrong-input');
    }
});

document.querySelector('.side-nav-arrow.left').addEventListener('click', () =>
{
    slideTable('left');
});

document.querySelector('.side-nav-arrow.right').addEventListener('click', () =>
{
    slideTable('right');
});

document.querySelectorAll('.table-bottom-nav').forEach((nav) =>
{
    nav.addEventListener('click', () =>
    {
        const id = nav.getAttribute('data-idnav');
        document.querySelectorAll('.currently-displayed').forEach((element) =>
        {
            element.classList.remove('currently-displayed');
        });
        document.querySelector(`[data-id='${id}']`).classList.add('currently-displayed');
        nav.classList.add('currently-displayed');
        setSlideAccessability(id);
    });
});

document.querySelectorAll('.weather-data-checkbox').forEach((checkbox) =>
{
    checkbox.addEventListener('change', () =>
    {
        let display;
        if (checkbox.checked === false)
        {
            display = 'none';
            checkbox.removeAttribute('checked');
        }
        else
        {
            display = 'table-cell';
            checkbox.setAttribute('checked', '');
        }
        const value = checkbox.value;
        document.querySelectorAll(`[data-td='${value}']`).forEach((td) =>
        {
            td.style.setProperty('display', display);
        });
    });
});

document.querySelectorAll('[data-td="5"]').forEach((td) =>
{
    td.style.setProperty('display', 'none');
});

const windowHeight = Math.max(
    document.querySelector('body').scrollHeight,
    document.querySelector('body').offsetHeight,
    document.querySelector('html').clientHeight,
    document.querySelector('html').scrollHeight,
    document.querySelector('html').offsetHeight,
);

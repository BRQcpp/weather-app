import './style.css';

class dayWeatherData
{
    constructor(temp, humidity, pressure, description)
    {
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.description = description;
    }
}

async function getWeatherData(location, units)
{
    let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=7532cb4e49752099509e49e9180a8b49`);

    if (weatherData.ok === false)
    {
        if (weatherData.status === 404)
        {
            alert('City was not found');
        }
        return false;
    }
    weatherData = await weatherData.json();

    weatherData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&units=metric&appid=7532cb4e49752099509e49e9180a8b49`);
    weatherData = await weatherData.json();
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

async function generateData(daysSeparated)
{
    daysSeparated = await daysSeparated;
    const tables = document.querySelector('.weather-tables').querySelectorAll('table');
    let unitSymbol;
    if (units === 'metric')
    {
        unitSymbol = '°C';
    }
    else if (units === 'standard')
    {
        unitSymbol = 'K';
    }
    else
    {
        unitSymbol = '°F';
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
            const fileds = Array.from(row.querySelectorAll('td')).slice(1, 5);

            if (day[j] != null)
            {
                fileds[0].textContent = day[j].description;
                fileds[1].textContent = `${day[j].temp} ${unitSymbol}`;
                fileds[2].textContent = `${day[j].humidity}%`;
                fileds[3].textContent = `${day[j].pressure} hPa`;
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

let location = 'London';
let units = 'metric';

document.querySelector('.submit-button-weather').addEventListener('click', () =>
{
    location = document.querySelector('#location').value;
    units = document.querySelector('#unit').value;

    generateData(separateData(getWeatherData(location, units)));
});

document.querySelector('.location-input').addEventListener('click', () =>
{
    const input = document.querySelector('.location-input');
    input.value = '';
    input.style.removeProperty('color');
}, { once: true });

generateData(separateData(getWeatherData(location, units)));

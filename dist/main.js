/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Quicksand/Quicksand-VariableFont_wght.ttf */ "./fonts/Quicksand/Quicksand-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* main section */\n\n@font-face {\n    font-family: Quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    color: inherit;\n    font-family: inherit;\n}\n\nhtml {\n    min-width: 100%;\n}\n\nbody {\n    font-family: Quicksand;\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: #232323;\n    color: white;\n    gap: 40px;\n}\n\n    /* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n    /* Track */\n::-webkit-scrollbar-track {\n    background: #333333;\n}\n\n    /* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(96, 96, 96);\n}\n\n    /* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: rgb(112, 112, 112);\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: transparent;\n    border: none;\n}\n\n.loading-screen {\n    background-color: #1f1f1fcc;    \n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    z-index: 1;\n    gap: 10px;\n    top: 0;\n}\n\n.loading-gif {\n    height: 70px;\n}\n\n.loading-text {\n    font-size: 80px;\n    text-align: center;\n}\n\n.blocked {\n    display: none !important;\n}\n\n/* User input section */\n\n.user-input {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    transition: 0.3s;\n    flex-wrap: wrap;\n}\n\n.group-input {\n    width: 284px;\n    height: 269px;\n    border: 2px solid black;\n    border-radius: 8px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    background-color: #1f1f1f;\n}\n\n.input {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.input > label {\n    font-size: 30px;\n}\n\n.location-input, .unit-select {\n    text-align: center;\n    border-radius: 30px;\n    outline: none;\n    border: none;\n    background-color: #4f4f4f;\n}\n\n.location-input {\n    font-size: 23px;\n    height: 35px;\n    width: 240px;\n    padding: 10px;\n}\n\n.location-input::placeholder {\n    color: red;\n}\n\n.location-input.wrong-input {\n    border: 1px solid red;\n}\n\n.unit-select {\n    height: 30px;\n    width: 180px;\n    font-size: 18px;\n}\n\n.checkbox-input {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.checkbox-input > .caption {\n    font-size: 30px;\n}\n\n.checkboxes {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.checkbox {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.weather-data-checkbox {\n    appearance: none;\n    -webkit-animation: none;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: white;\n    border: 2px solid #4e4879;\n    transition: 0.5s;\n}\n\n.weather-data-checkbox[checked]::before {\n    position: relative;\n    left: 25%;\n    content: '🗸';\n}\n\n.weather-data-checkbox[checked] {\n    background-color: #262a58;\n}\n\n.weather-data-checkbox:hover {\n    opacity: 0.3;\n    background-color: #262a58;\n}\n\n.checkbox > .label{\n    font-size: 20px;\n}\n\n.submit-button-weather {\n    width: 90px;\n    height: 40px;\n    background-color: #4f4f4f;\n    border: none;\n    border-radius: 20px;\n    transition: 0.3s;\n}\n\n.submit-button-weather:hover {\n    transform: scale(0.95);\n    border: 1px solid black;\n}\n\n\n/* Weather-data tables section*/\n\n.top-section, .bottom-section {\n    transition: 0.3s;\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.bottom-section {\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    overflow-y: hidden;\n}\n\n.location-data {\n    margin: auto;\n}\n\n.weather-tables {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;    \n    margin: 0 auto;\n    gap: 8px;\n}\n\n.tables {\n    overflow: hidden;\n    display: flex;\n    height: fit-content;    \n    border-radius: 10px;\n    flex-shrink: 0;\n}\n\n.tables-with-side-nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.side-nav {\n    width: 70px;\n}\n\n.side-nav-arrow {\n    transition: 0.4s;\n}\n\n.side-nav-arrow:hover {\n    transform: scale(0.93);\n}\n\n.not-accessible {\n    opacity: 0.3;\n    pointer-events: none;\n}\n\n.tables-bottom-nav {\n    margin: 0 auto;\n    display: flex;\n    height: 30px;\n    width: 320px;\n    justify-content: space-around;\n}\n\n.table-bottom-nav {\n    width: 15px;\n    height: 15px;\n    background-color: black;\n    border: 2px solid white;\n    border-radius: 50%;\n    transition: 0.3s;\n}\n\n.table-bottom-nav:hover {\n    background-color: #2b2d42;\n    transform: scale(0.95);\n}\n\n.table-bottom-nav.currently-displayed {\n    background-color: rgb(38 42 88);\n}\n\n.roll-up {\n    transform: translateY(0px);\n}\n\n.date-table-container {\n    display: none;\n    flex-shrink: 0;\n    height: 430px;\n    flex-direction: column;\n    color: white;\n}\n\n.date-table-container.currently-displayed {\n    display: flex !important;\n}\n\n.table-placeholder {\n    background-color: rgb(38 42 88);\n    height: 430px;\n    width: 430px;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.placeholder-text {\n    text-align: center;\n    font-size: 22px;\n    padding: 10px;\n}\n\n.date-table-container > table {\n    height: 100%;\n    width: 100%;\n    background-color: rgb(38 42 88);\n    border-spacing: 0;\n}\n\n.date-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(53 60 113 / 80%);\n    height: 40px;\n    width: 100%;\n}\n\n.date-table-container > table > tbody > tr:nth-child(2n){\n    background-color: rgb(38 32 88);\n}\n\n.date-table-container > table > tbody > tr > th:first-child{\n    padding-left: 15px;\n}\n\n.date-table-container > table > tbody > tr > td {\n    padding: 0 5px;\n    text-align: center;\n}\n\n.date-table-container > table > tbody > tr > th {\n    padding: 5px;\n}\n\n.date-table-container > table > tbody > tr > td:first-child {\n    padding-left: 15px;\n}\n\n.date-table-container > table > tbody > tr > td:last-child {\n    padding-right: 15px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* main section */\n\n@font-face {\n    font-family: Quicksand;\n    src: url(../fonts/Quicksand/Quicksand-VariableFont_wght.ttf);\n}\n\n* {\n    color: inherit;\n    font-family: inherit;\n}\n\nhtml {\n    min-width: 100%;\n}\n\nbody {\n    font-family: Quicksand;\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: #232323;\n    color: white;\n    gap: 40px;\n}\n\n    /* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n    /* Track */\n::-webkit-scrollbar-track {\n    background: #333333;\n}\n\n    /* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(96, 96, 96);\n}\n\n    /* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: rgb(112, 112, 112);\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: transparent;\n    border: none;\n}\n\n.loading-screen {\n    background-color: #1f1f1fcc;    \n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    z-index: 1;\n    gap: 10px;\n    top: 0;\n}\n\n.loading-gif {\n    height: 70px;\n}\n\n.loading-text {\n    font-size: 80px;\n    text-align: center;\n}\n\n.blocked {\n    display: none !important;\n}\n\n/* User input section */\n\n.user-input {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    transition: 0.3s;\n    flex-wrap: wrap;\n}\n\n.group-input {\n    width: 284px;\n    height: 269px;\n    border: 2px solid black;\n    border-radius: 8px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    background-color: #1f1f1f;\n}\n\n.input {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.input > label {\n    font-size: 30px;\n}\n\n.location-input, .unit-select {\n    text-align: center;\n    border-radius: 30px;\n    outline: none;\n    border: none;\n    background-color: #4f4f4f;\n}\n\n.location-input {\n    font-size: 23px;\n    height: 35px;\n    width: 240px;\n    padding: 10px;\n}\n\n.location-input::placeholder {\n    color: red;\n}\n\n.location-input.wrong-input {\n    border: 1px solid red;\n}\n\n.unit-select {\n    height: 30px;\n    width: 180px;\n    font-size: 18px;\n}\n\n.checkbox-input {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.checkbox-input > .caption {\n    font-size: 30px;\n}\n\n.checkboxes {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.checkbox {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.weather-data-checkbox {\n    appearance: none;\n    -webkit-animation: none;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: white;\n    border: 2px solid #4e4879;\n    transition: 0.5s;\n}\n\n.weather-data-checkbox[checked]::before {\n    position: relative;\n    left: 25%;\n    content: '🗸';\n}\n\n.weather-data-checkbox[checked] {\n    background-color: #262a58;\n}\n\n.weather-data-checkbox:hover {\n    opacity: 0.3;\n    background-color: #262a58;\n}\n\n.checkbox > .label{\n    font-size: 20px;\n}\n\n.submit-button-weather {\n    width: 90px;\n    height: 40px;\n    background-color: #4f4f4f;\n    border: none;\n    border-radius: 20px;\n    transition: 0.3s;\n}\n\n.submit-button-weather:hover {\n    transform: scale(0.95);\n    border: 1px solid black;\n}\n\n\n/* Weather-data tables section*/\n\n.top-section, .bottom-section {\n    transition: 0.3s;\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.bottom-section {\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    overflow-y: hidden;\n}\n\n.location-data {\n    margin: auto;\n}\n\n.weather-tables {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;    \n    margin: 0 auto;\n    gap: 8px;\n}\n\n.tables {\n    overflow: hidden;\n    display: flex;\n    height: fit-content;    \n    border-radius: 10px;\n    flex-shrink: 0;\n}\n\n.tables-with-side-nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.side-nav {\n    width: 70px;\n}\n\n.side-nav-arrow {\n    transition: 0.4s;\n}\n\n.side-nav-arrow:hover {\n    transform: scale(0.93);\n}\n\n.not-accessible {\n    opacity: 0.3;\n    pointer-events: none;\n}\n\n.tables-bottom-nav {\n    margin: 0 auto;\n    display: flex;\n    height: 30px;\n    width: 320px;\n    justify-content: space-around;\n}\n\n.table-bottom-nav {\n    width: 15px;\n    height: 15px;\n    background-color: black;\n    border: 2px solid white;\n    border-radius: 50%;\n    transition: 0.3s;\n}\n\n.table-bottom-nav:hover {\n    background-color: #2b2d42;\n    transform: scale(0.95);\n}\n\n.table-bottom-nav.currently-displayed {\n    background-color: rgb(38 42 88);\n}\n\n.roll-up {\n    transform: translateY(0px);\n}\n\n.date-table-container {\n    display: none;\n    flex-shrink: 0;\n    height: 430px;\n    flex-direction: column;\n    color: white;\n}\n\n.date-table-container.currently-displayed {\n    display: flex !important;\n}\n\n.table-placeholder {\n    background-color: rgb(38 42 88);\n    height: 430px;\n    width: 430px;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.placeholder-text {\n    text-align: center;\n    font-size: 22px;\n    padding: 10px;\n}\n\n.date-table-container > table {\n    height: 100%;\n    width: 100%;\n    background-color: rgb(38 42 88);\n    border-spacing: 0;\n}\n\n.date-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(53 60 113 / 80%);\n    height: 40px;\n    width: 100%;\n}\n\n.date-table-container > table > tbody > tr:nth-child(2n){\n    background-color: rgb(38 32 88);\n}\n\n.date-table-container > table > tbody > tr > th:first-child{\n    padding-left: 15px;\n}\n\n.date-table-container > table > tbody > tr > td {\n    padding: 0 5px;\n    text-align: center;\n}\n\n.date-table-container > table > tbody > tr > th {\n    padding: 5px;\n}\n\n.date-table-container > table > tbody > tr > td:first-child {\n    padding-left: 15px;\n}\n\n.date-table-container > table > tbody > tr > td:last-child {\n    padding-right: 15px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./fonts/Quicksand/Quicksand-VariableFont_wght.ttf":
/*!*********************************************************!*\
  !*** ./fonts/Quicksand/Quicksand-VariableFont_wght.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92e1d0f3321b53e20d2b.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/source.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable dot-notation */

/* eslint-disable prefer-destructuring */


var dayWeatherData = /*#__PURE__*/_createClass(function dayWeatherData(temp, humidity, pressure, description, windSpeed) {
  _classCallCheck(this, dayWeatherData);

  this.temp = temp;
  this.humidity = humidity;
  this.pressure = pressure;
  this.description = description;
  this.windSpeed = windSpeed;
});

function getWeatherData(_x, _x2) {
  return _getWeatherData.apply(this, arguments);
}

function _getWeatherData() {
  _getWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(location, units) {
    var weatherData, time;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(location, "&APPID=7532cb4e49752099509e49e9180a8b49"));

          case 2:
            weatherData = _context.sent;

            if (!(weatherData.ok === false)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", false);

          case 5:
            _context.next = 7;
            return weatherData.json();

          case 7:
            weatherData = _context.sent;
            _context.next = 10;
            return fetch("https://api.ipgeolocation.io/timezone?apiKey=1d2dafb861f34d198eec33f885b8ce9f&lat=".concat(weatherData.coord.lat, "&long=").concat(weatherData.coord.lon));

          case 10:
            time = _context.sent;
            _context.next = 13;
            return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(weatherData.coord.lat, "&lon=").concat(weatherData.coord.lon, "&units=").concat(units, "&appid=7532cb4e49752099509e49e9180a8b49"));

          case 13:
            weatherData = _context.sent;
            _context.next = 16;
            return weatherData.json();

          case 16:
            weatherData = _context.sent;
            _context.next = 19;
            return time.json();

          case 19:
            time = _context.sent;
            weatherData['date_time_txt'] = time.date_time_txt;
            return _context.abrupt("return", weatherData);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getWeatherData.apply(this, arguments);
}

function separateData(_x3) {
  return _separateData.apply(this, arguments);
}

function _separateData() {
  _separateData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(weatherData) {
    var daysSeparated, currentObject, day, data, hour;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return weatherData;

          case 2:
            weatherData = _context2.sent;
            daysSeparated = [];

            for (day = 0, data = 0; day < 5; day++) {
              daysSeparated[day] = [];

              for (hour = 0; hour <= 21; hour += 3) {
                currentObject = weatherData.list[data];

                if (+currentObject.dt_txt.slice(11, 13) == hour) {
                  daysSeparated[day].push(new dayWeatherData(currentObject.main.temp, currentObject.main.humidity, currentObject.main.pressure, currentObject.weather[0].description, currentObject.wind.speed));
                  data++;
                } else {
                  daysSeparated[day].push(null);
                }
              }

              daysSeparated[day].push(weatherData.list[data - 1].dt_txt.slice(0, 10));
            }

            return _context2.abrupt("return", daysSeparated);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _separateData.apply(this, arguments);
}

function generateData(_x4, _x5) {
  return _generateData.apply(this, arguments);
}

function _generateData() {
  _generateData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(daysSeparated, units) {
    var tables, unitSymbolTemp, unitSymbolWS, i, table, rows, day, j, row, fileds, k;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return daysSeparated;

          case 2:
            daysSeparated = _context3.sent;
            tables = document.querySelector('.weather-tables').querySelectorAll('table');
            _context3.t0 = units;
            _context3.next = _context3.t0 === 'metric' ? 7 : _context3.t0 === 'standard' ? 10 : _context3.t0 === 'imperial' ? 13 : 16;
            break;

          case 7:
            unitSymbolTemp = '°C';
            unitSymbolWS = 'm/s';
            return _context3.abrupt("break", 16);

          case 10:
            unitSymbolTemp = 'K';
            unitSymbolWS = 'm/s';
            return _context3.abrupt("break", 16);

          case 13:
            unitSymbolTemp = '°F';
            unitSymbolWS = 'm/h';
            return _context3.abrupt("break", 16);

          case 16:
            for (i = 0; i < 5; i++) {
              table = tables[i];
              rows = Array.from(table.querySelectorAll('tr')).slice(1, 9);
              day = daysSeparated[i];
              table.closest('.date-table-container').querySelector('.date-header').textContent = day[8];

              for (j = 0; j < 8; j++) {
                row = rows[j];
                fileds = Array.from(row.querySelectorAll('td')).slice(1, 6);

                if (day[j] != null) {
                  fileds[0].textContent = day[j].description;
                  fileds[1].textContent = "".concat(day[j].temp, " ").concat(unitSymbolTemp);
                  fileds[2].textContent = "".concat(day[j].humidity, "%");
                  fileds[3].textContent = "".concat(day[j].pressure, " hPa");
                  fileds[4].textContent = "".concat(day[j].windSpeed, " ").concat(unitSymbolWS);
                } else {
                  for (k = 0; k < 4; k++) {
                    fileds[k].textContent = '-';
                  }
                }
              }
            }

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _generateData.apply(this, arguments);
}

function slideTable(slideTo) {
  var slider = document.querySelector(".side-nav-arrow.".concat(slideTo));
  var currentlyDisplayed = document.querySelector('.currently-displayed');

  if (!slider.classList.contains('disabled')) {
    var id = parseInt(currentlyDisplayed.getAttribute('data-id'), 10);
    id = slideTo === 'left' ? id - 1 : id + 1;
    currentlyDisplayed.classList.remove('currently-displayed');
    document.querySelector('.currently-displayed').classList.remove('currently-displayed');
    document.querySelector("[data-id='".concat(id, "']")).classList.add('currently-displayed');
    document.querySelector("[data-idnav='".concat(id, "']")).classList.add('currently-displayed');
    setSlideAccessability(id);
  }
}

function setSlideAccessability(id) {
  if (document.querySelector('.not-accessible') != null) {
    document.querySelector('.not-accessible').classList.remove('not-accessible');
  }

  if (+id === 0) {
    var nav = document.querySelector('.side-nav-arrow.left');
    nav.classList.add('not-accessible');
  } else if (+id === 4) {
    var _nav = document.querySelector('.side-nav-arrow.right');

    _nav.classList.add('not-accessible');
  }
}

function getTimeAndGenerate(_x6, _x7, _x8) {
  return _getTimeAndGenerate.apply(this, arguments);
}

function _getTimeAndGenerate() {
  _getTimeAndGenerate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(lat, long, location) {
    var time;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("https://api.ipgeolocation.io/timezone?apiKey=1d2dafb861f34d198eec33f885b8ce9f&lat=".concat(lat, "&long=").concat(long));

          case 2:
            time = _context4.sent;
            _context4.next = 5;
            return time.json();

          case 5:
            time = _context4.sent;
            document.querySelector('.location-data').textContent = "".concat(location, " -  ").concat(time.timezone, ", ").concat(time.date_time);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getTimeAndGenerate.apply(this, arguments);
}

var units = 'metric';

function sumDataAndGenerate() {
  return _sumDataAndGenerate.apply(this, arguments);
}

function _sumDataAndGenerate() {
  _sumDataAndGenerate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var location, data, dataSeparated;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            location = document.querySelector('#location').value;

            if (!(location == '')) {
              _context5.next = 5;
              break;
            }

            setInputWrong(document.querySelector('.location-input'), 'Required');
            _context5.next = 22;
            break;

          case 5:
            units = document.querySelector('#unit').value;
            document.querySelector('.loading-screen').style.setProperty('display', 'flex');
            _context5.next = 9;
            return getWeatherData(location, units);

          case 9:
            data = _context5.sent;

            if (!(data !== false)) {
              _context5.next = 21;
              break;
            }

            _context5.next = 13;
            return separateData(data);

          case 13:
            dataSeparated = _context5.sent;
            _context5.next = 16;
            return getTimeAndGenerate(data.city.coord.lat, data.city.coord.lon, location);

          case 16:
            _context5.next = 18;
            return generateData(dataSeparated, units);

          case 18:
            if (document.querySelector('.blocked') !== null) {
              document.querySelectorAll('.blocked').forEach(function (item) {
                item.classList.remove('blocked');
              });
              document.querySelector('.table-placeholder').style.setProperty('display', 'none');
              document.querySelectorAll('.not-accessible').forEach(function (item) {
                item.classList.remove('not-accessible');
              });
              setSlideAccessability(0);
            }

            _context5.next = 22;
            break;

          case 21:
            setInputWrong(document.querySelector('.location-input'), 'City not found!');

          case 22:
            document.querySelector('.loading-screen').style.setProperty('display', 'none');

          case 23:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _sumDataAndGenerate.apply(this, arguments);
}

function setInputWrong(input, message) {
  input.value = '';
  input.placeholder = message;
  input.classList.add('wrong-input');
}

document.querySelector('.submit-button-weather').addEventListener('click', function () {
  sumDataAndGenerate();
});
document.querySelector('.location-input').addEventListener('click', function () {
  var input = document.querySelector('.location-input');

  if (input.classList.contains('wrong-input')) {
    input.placeholder = '';
    input.classList.remove('wrong-input');
  }
});
document.querySelector('.side-nav-arrow.left').addEventListener('click', function () {
  slideTable('left');
});
document.querySelector('.side-nav-arrow.right').addEventListener('click', function () {
  slideTable('right');
});
document.querySelectorAll('.table-bottom-nav').forEach(function (nav) {
  nav.addEventListener('click', function () {
    var id = nav.getAttribute('data-idnav');
    document.querySelectorAll('.currently-displayed').forEach(function (element) {
      element.classList.remove('currently-displayed');
    });
    document.querySelector("[data-id='".concat(id, "']")).classList.add('currently-displayed');
    nav.classList.add('currently-displayed');
    setSlideAccessability(id);
  });
});
document.querySelectorAll('.weather-data-checkbox').forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    var display;

    if (checkbox.checked === false) {
      display = 'none';
      checkbox.removeAttribute('checked');
    } else {
      display = 'table-cell';
      checkbox.setAttribute('checked', '');
    }

    var value = checkbox.value;
    document.querySelectorAll("[data-td='".concat(value, "']")).forEach(function (td) {
      td.style.setProperty('display', display);
    });
  });
});
document.querySelectorAll('[data-td="5"]').forEach(function (td) {
  td.style.setProperty('display', 'none');
});
var windowHeight = Math.max(document.querySelector('body').scrollHeight, document.querySelector('body').offsetHeight, document.querySelector('html').clientHeight, document.querySelector('html').scrollHeight, document.querySelector('html').offsetHeight);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDREQUE0RCw2QkFBNkIsbUVBQW1FLEdBQUcsT0FBTyxxQkFBcUIsMkJBQTJCLEdBQUcsVUFBVSxzQkFBc0IsR0FBRyxVQUFVLDZCQUE2Qix3QkFBd0IsZ0JBQWdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDZCQUE2QixnQ0FBZ0MsbUJBQW1CLGdCQUFnQixHQUFHLDBDQUEwQyxrQkFBa0IsR0FBRyxnREFBZ0QsMEJBQTBCLEdBQUcsaURBQWlELGtDQUFrQyxHQUFHLGdFQUFnRSxxQ0FBcUMsR0FBRyxZQUFZLCtCQUErQix1QkFBdUIsb0NBQW9DLG1CQUFtQixHQUFHLHFCQUFxQixzQ0FBc0MseUJBQXlCLG1CQUFtQixrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkJBQTZCLGlCQUFpQixnQkFBZ0IsYUFBYSxHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyxtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLGNBQWMsK0JBQStCLEdBQUcsNkNBQTZDLG9CQUFvQixnQkFBZ0IsMEJBQTBCLDhCQUE4QixrQkFBa0IsdUJBQXVCLHNCQUFzQixHQUFHLGtCQUFrQixtQkFBbUIsb0JBQW9CLDhCQUE4Qix5QkFBeUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsZ0NBQWdDLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsbUNBQW1DLHlCQUF5QiwwQkFBMEIsb0JBQW9CLG1CQUFtQixnQ0FBZ0MsR0FBRyxxQkFBcUIsc0JBQXNCLG1CQUFtQixtQkFBbUIsb0JBQW9CLEdBQUcsa0NBQWtDLGlCQUFpQixHQUFHLGlDQUFpQyw0QkFBNEIsR0FBRyxrQkFBa0IsbUJBQW1CLG1CQUFtQixzQkFBc0IsR0FBRyxxQkFBcUIsb0JBQW9CLDhCQUE4Qiw2QkFBNkIsMEJBQTBCLEdBQUcsZ0NBQWdDLHNCQUFzQixHQUFHLGlCQUFpQixvQkFBb0IsOEJBQThCLDZCQUE2QixHQUFHLGVBQWUsb0JBQW9CLDBCQUEwQixlQUFlLEdBQUcsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsOEJBQThCLGdDQUFnQyx1QkFBdUIsR0FBRyw2Q0FBNkMseUJBQXlCLGdCQUFnQixvQkFBb0IsR0FBRyxxQ0FBcUMsZ0NBQWdDLEdBQUcsa0NBQWtDLG1CQUFtQixnQ0FBZ0MsR0FBRyx1QkFBdUIsc0JBQXNCLEdBQUcsNEJBQTRCLGtCQUFrQixtQkFBbUIsZ0NBQWdDLG1CQUFtQiwwQkFBMEIsdUJBQXVCLEdBQUcsa0NBQWtDLDZCQUE2Qiw4QkFBOEIsR0FBRyx5RUFBeUUsdUJBQXVCLGtCQUFrQixvQkFBb0IsMEJBQTBCLEdBQUcscUJBQXFCLDZCQUE2QixnQkFBZ0IsMEJBQTBCLHlCQUF5QixHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIscUJBQXFCLGVBQWUsR0FBRyxhQUFhLHVCQUF1QixvQkFBb0IsOEJBQThCLDBCQUEwQixxQkFBcUIsR0FBRywyQkFBMkIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyxxQkFBcUIsdUJBQXVCLEdBQUcsMkJBQTJCLDZCQUE2QixHQUFHLHFCQUFxQixtQkFBbUIsMkJBQTJCLEdBQUcsd0JBQXdCLHFCQUFxQixvQkFBb0IsbUJBQW1CLG1CQUFtQixvQ0FBb0MsR0FBRyx1QkFBdUIsa0JBQWtCLG1CQUFtQiw4QkFBOEIsOEJBQThCLHlCQUF5Qix1QkFBdUIsR0FBRyw2QkFBNkIsZ0NBQWdDLDZCQUE2QixHQUFHLDJDQUEyQyxzQ0FBc0MsR0FBRyxjQUFjLGlDQUFpQyxHQUFHLDJCQUEyQixvQkFBb0IscUJBQXFCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLEdBQUcsK0NBQStDLCtCQUErQixHQUFHLHdCQUF3QixzQ0FBc0Msb0JBQW9CLG1CQUFtQiwwQkFBMEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyx1QkFBdUIseUJBQXlCLHNCQUFzQixvQkFBb0IsR0FBRyxtQ0FBbUMsbUJBQW1CLGtCQUFrQixzQ0FBc0Msd0JBQXdCLEdBQUcsa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDZDQUE2QyxtQkFBbUIsa0JBQWtCLEdBQUcsNkRBQTZELHNDQUFzQyxHQUFHLGdFQUFnRSx5QkFBeUIsR0FBRyxxREFBcUQscUJBQXFCLHlCQUF5QixHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRyxpRUFBaUUseUJBQXlCLEdBQUcsZ0VBQWdFLDBCQUEwQixHQUFHLHVCQUF1QjtBQUM3dGY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OytDQ0NBOzs7Ozs7Ozs7Ozs7QUFEQTs7QUFDQTtBQUNBOztJQUVNQSwyQ0FFRix3QkFBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEJDLFFBQTVCLEVBQXNDQyxXQUF0QyxFQUFtREMsU0FBbkQsRUFDQTtFQUFBOztFQUNJLEtBQUtKLElBQUwsR0FBWUEsSUFBWjtFQUNBLEtBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0EsS0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7RUFDQSxLQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtFQUNBLEtBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0g7O1NBR1VDOzs7OzsrRUFBZixpQkFBOEJDLFFBQTlCLEVBQXdDQyxLQUF4QztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBLE9BRTRCQyxLQUFLLDZEQUFzREYsUUFBdEQsNkNBRmpDOztVQUFBO1lBRVFHLFdBRlI7O1lBQUEsTUFJUUEsV0FBVyxDQUFDQyxFQUFaLEtBQW1CLEtBSjNCO2NBQUE7Y0FBQTtZQUFBOztZQUFBLGlDQU1lLEtBTmY7O1VBQUE7WUFBQTtZQUFBLE9BUXdCRCxXQUFXLENBQUNFLElBQVosRUFSeEI7O1VBQUE7WUFRSUYsV0FSSjtZQUFBO1lBQUEsT0FTcUJELEtBQUssNkZBQXNGQyxXQUFXLENBQUNHLEtBQVosQ0FBa0JDLEdBQXhHLG1CQUFvSEosV0FBVyxDQUFDRyxLQUFaLENBQWtCRSxHQUF0SSxFQVQxQjs7VUFBQTtZQVNRQyxJQVRSO1lBQUE7WUFBQSxPQVV3QlAsS0FBSyxnRUFBeURDLFdBQVcsQ0FBQ0csS0FBWixDQUFrQkMsR0FBM0Usa0JBQXNGSixXQUFXLENBQUNHLEtBQVosQ0FBa0JFLEdBQXhHLG9CQUFxSFAsS0FBckgsNkNBVjdCOztVQUFBO1lBVUlFLFdBVko7WUFBQTtZQUFBLE9BV3dCQSxXQUFXLENBQUNFLElBQVosRUFYeEI7O1VBQUE7WUFXSUYsV0FYSjtZQUFBO1lBQUEsT0FZaUJNLElBQUksQ0FBQ0osSUFBTCxFQVpqQjs7VUFBQTtZQVlJSSxJQVpKO1lBYUlOLFdBQVcsQ0FBQyxlQUFELENBQVgsR0FBK0JNLElBQUksQ0FBQ0MsYUFBcEM7WUFiSixpQ0FjV1AsV0FkWDs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztTQWlCZVE7Ozs7OzZFQUFmLGtCQUE0QlIsV0FBNUI7SUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7WUFBQSxPQUV3QkEsV0FGeEI7O1VBQUE7WUFFSUEsV0FGSjtZQUdVUyxhQUhWLEdBRzBCLEVBSDFCOztZQUtJLEtBQVNDLEdBQVQsR0FBZSxDQUFmLEVBQWtCQyxJQUFsQixHQUF5QixDQUF6QixFQUE0QkQsR0FBRyxHQUFHLENBQWxDLEVBQXFDQSxHQUFHLEVBQXhDLEVBQ0E7Y0FDSUQsYUFBYSxDQUFDQyxHQUFELENBQWIsR0FBcUIsRUFBckI7O2NBQ0EsS0FBU0UsSUFBVCxHQUFnQixDQUFoQixFQUFtQkEsSUFBSSxJQUFJLEVBQTNCLEVBQStCQSxJQUFJLElBQUksQ0FBdkMsRUFDQTtnQkFDSUMsYUFBYSxHQUFHYixXQUFXLENBQUNjLElBQVosQ0FBaUJILElBQWpCLENBQWhCOztnQkFDQSxJQUFJLENBQUVFLGFBQWEsQ0FBQ0UsTUFBZCxDQUFxQkMsS0FBckIsQ0FBMkIsRUFBM0IsRUFBK0IsRUFBL0IsQ0FBRixJQUF5Q0osSUFBN0MsRUFDQTtrQkFDSUgsYUFBYSxDQUFDQyxHQUFELENBQWIsQ0FBbUJPLElBQW5CLENBQXdCLElBQUkzQixjQUFKLENBQ3BCdUIsYUFBYSxDQUFDSyxJQUFkLENBQW1CM0IsSUFEQyxFQUVwQnNCLGFBQWEsQ0FBQ0ssSUFBZCxDQUFtQjFCLFFBRkMsRUFHcEJxQixhQUFhLENBQUNLLElBQWQsQ0FBbUJ6QixRQUhDLEVBSXBCb0IsYUFBYSxDQUFDTSxPQUFkLENBQXNCLENBQXRCLEVBQXlCekIsV0FKTCxFQUtwQm1CLGFBQWEsQ0FBQ08sSUFBZCxDQUFtQkMsS0FMQyxDQUF4QjtrQkFPQVYsSUFBSTtnQkFDUCxDQVZELE1BWUE7a0JBQ0lGLGFBQWEsQ0FBQ0MsR0FBRCxDQUFiLENBQW1CTyxJQUFuQixDQUF3QixJQUF4QjtnQkFDSDtjQUNKOztjQUNEUixhQUFhLENBQUNDLEdBQUQsQ0FBYixDQUFtQk8sSUFBbkIsQ0FBd0JqQixXQUFXLENBQUNjLElBQVosQ0FBaUJILElBQUksR0FBRyxDQUF4QixFQUEyQkksTUFBM0IsQ0FBa0NDLEtBQWxDLENBQXdDLENBQXhDLEVBQTJDLEVBQTNDLENBQXhCO1lBQ0g7O1lBNUJMLGtDQTZCV1AsYUE3Qlg7O1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUE7Ozs7U0FnQ2VhOzs7Ozs2RUFBZixrQkFBNEJiLGFBQTVCLEVBQTJDWCxLQUEzQztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBLE9BRTBCVyxhQUYxQjs7VUFBQTtZQUVJQSxhQUZKO1lBR1VjLE1BSFYsR0FHbUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENDLGdCQUExQyxDQUEyRCxPQUEzRCxDQUhuQjtZQUFBLGVBTVk1QixLQU5aO1lBQUEsa0NBUWEsUUFSYix3QkFhYSxVQWJiLHlCQWtCYSxVQWxCYjtZQUFBOztVQUFBO1lBVWdCNkIsY0FBYyxHQUFHLElBQWpCO1lBQ0FDLFlBQVksR0FBRyxLQUFmO1lBWGhCOztVQUFBO1lBZWdCRCxjQUFjLEdBQUcsR0FBakI7WUFDQUMsWUFBWSxHQUFHLEtBQWY7WUFoQmhCOztVQUFBO1lBb0JnQkQsY0FBYyxHQUFHLElBQWpCO1lBQ0FDLFlBQVksR0FBRyxLQUFmO1lBckJoQjs7VUFBQTtZQXlCSSxLQUFTQyxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQ0E7Y0FDVUMsS0FEVixHQUNrQlAsTUFBTSxDQUFDTSxDQUFELENBRHhCO2NBRVVFLElBRlYsR0FFaUJDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxLQUFLLENBQUNKLGdCQUFOLENBQXVCLElBQXZCLENBQVgsRUFBeUNWLEtBQXpDLENBQStDLENBQS9DLEVBQWtELENBQWxELENBRmpCO2NBR1VOLEdBSFYsR0FHZ0JELGFBQWEsQ0FBQ29CLENBQUQsQ0FIN0I7Y0FJSUMsS0FBSyxDQUFDSSxPQUFOLENBQWMsdUJBQWQsRUFBdUNULGFBQXZDLENBQXFELGNBQXJELEVBQXFFVSxXQUFyRSxHQUFtRnpCLEdBQUcsQ0FBQyxDQUFELENBQXRGOztjQUVBLEtBQVMwQixDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQ0E7Z0JBQ1VDLEdBRFYsR0FDZ0JOLElBQUksQ0FBQ0ssQ0FBRCxDQURwQjtnQkFFVUUsTUFGVixHQUVtQk4sS0FBSyxDQUFDQyxJQUFOLENBQVdJLEdBQUcsQ0FBQ1gsZ0JBQUosQ0FBcUIsSUFBckIsQ0FBWCxFQUF1Q1YsS0FBdkMsQ0FBNkMsQ0FBN0MsRUFBZ0QsQ0FBaEQsQ0FGbkI7O2dCQUlJLElBQUlOLEdBQUcsQ0FBQzBCLENBQUQsQ0FBSCxJQUFVLElBQWQsRUFDQTtrQkFDSUUsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSCxXQUFWLEdBQXdCekIsR0FBRyxDQUFDMEIsQ0FBRCxDQUFILENBQU8xQyxXQUEvQjtrQkFDQTRDLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUgsV0FBVixhQUEyQnpCLEdBQUcsQ0FBQzBCLENBQUQsQ0FBSCxDQUFPN0MsSUFBbEMsY0FBMENvQyxjQUExQztrQkFDQVcsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSCxXQUFWLGFBQTJCekIsR0FBRyxDQUFDMEIsQ0FBRCxDQUFILENBQU81QyxRQUFsQztrQkFDQThDLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUgsV0FBVixhQUEyQnpCLEdBQUcsQ0FBQzBCLENBQUQsQ0FBSCxDQUFPM0MsUUFBbEM7a0JBQ0E2QyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVILFdBQVYsYUFBMkJ6QixHQUFHLENBQUMwQixDQUFELENBQUgsQ0FBT3pDLFNBQWxDLGNBQStDaUMsWUFBL0M7Z0JBQ0gsQ0FQRCxNQVNBO2tCQUNJLEtBQVNXLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFDQTtvQkFDSUQsTUFBTSxDQUFDQyxDQUFELENBQU4sQ0FBVUosV0FBVixHQUF3QixHQUF4QjtrQkFDSDtnQkFDSjtjQUNKO1lBQ0o7O1VBckRMO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBOzs7O0FBd0RBLFNBQVNLLFVBQVQsQ0FBb0JDLE9BQXBCLEVBQ0E7RUFDSSxJQUFNQyxNQUFNLEdBQUdsQixRQUFRLENBQUNDLGFBQVQsMkJBQTBDZ0IsT0FBMUMsRUFBZjtFQUNBLElBQU1FLGtCQUFrQixHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUEzQjs7RUFDQSxJQUFJLENBQUVpQixNQUFNLENBQUNFLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCLFVBQTFCLENBQU4sRUFDQTtJQUNJLElBQUlDLEVBQUUsR0FBR0MsUUFBUSxDQUFDSixrQkFBa0IsQ0FBQ0ssWUFBbkIsQ0FBZ0MsU0FBaEMsQ0FBRCxFQUE2QyxFQUE3QyxDQUFqQjtJQUNBRixFQUFFLEdBQUdMLE9BQU8sS0FBSyxNQUFaLEdBQXFCSyxFQUFFLEdBQUcsQ0FBMUIsR0FBOEJBLEVBQUUsR0FBRyxDQUF4QztJQUNBSCxrQkFBa0IsQ0FBQ0MsU0FBbkIsQ0FBNkJLLE1BQTdCLENBQW9DLHFCQUFwQztJQUNBekIsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixFQUErQ21CLFNBQS9DLENBQXlESyxNQUF6RCxDQUFnRSxxQkFBaEU7SUFDQXpCLFFBQVEsQ0FBQ0MsYUFBVCxxQkFBb0NxQixFQUFwQyxTQUE0Q0YsU0FBNUMsQ0FBc0RNLEdBQXRELENBQTBELHFCQUExRDtJQUNBMUIsUUFBUSxDQUFDQyxhQUFULHdCQUF1Q3FCLEVBQXZDLFNBQStDRixTQUEvQyxDQUF5RE0sR0FBekQsQ0FBNkQscUJBQTdEO0lBQ0FDLHFCQUFxQixDQUFDTCxFQUFELENBQXJCO0VBQ0g7QUFDSjs7QUFFRCxTQUFTSyxxQkFBVCxDQUErQkwsRUFBL0IsRUFDQTtFQUNJLElBQUl0QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEtBQTZDLElBQWpELEVBQ0E7SUFDSUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ21CLFNBQTFDLENBQW9ESyxNQUFwRCxDQUEyRCxnQkFBM0Q7RUFDSDs7RUFDRCxJQUFJLENBQUNILEVBQUQsS0FBUSxDQUFaLEVBQ0E7SUFDSSxJQUFNTSxHQUFHLEdBQUc1QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQVo7SUFDQTJCLEdBQUcsQ0FBQ1IsU0FBSixDQUFjTSxHQUFkLENBQWtCLGdCQUFsQjtFQUNILENBSkQsTUFLSyxJQUFJLENBQUNKLEVBQUQsS0FBUSxDQUFaLEVBQ0w7SUFDSSxJQUFNTSxJQUFHLEdBQUc1QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQVo7O0lBQ0EyQixJQUFHLENBQUNSLFNBQUosQ0FBY00sR0FBZCxDQUFrQixnQkFBbEI7RUFDSDtBQUNKOztTQUVjRzs7Ozs7bUZBQWYsa0JBQWtDakQsR0FBbEMsRUFBdUNrRCxJQUF2QyxFQUE2Q3pELFFBQTdDO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO1lBQUEsT0FFcUJFLEtBQUssNkZBQXNGSyxHQUF0RixtQkFBa0drRCxJQUFsRyxFQUYxQjs7VUFBQTtZQUVRaEQsSUFGUjtZQUFBO1lBQUEsT0FHaUJBLElBQUksQ0FBQ0osSUFBTCxFQUhqQjs7VUFBQTtZQUdJSSxJQUhKO1lBSUlrQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDVSxXQUF6QyxhQUEwRHRDLFFBQTFELGlCQUF5RVMsSUFBSSxDQUFDaUQsUUFBOUUsZUFBMkZqRCxJQUFJLENBQUNrRCxTQUFoRzs7VUFKSjtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztBQU9BLElBQUkxRCxLQUFLLEdBQUcsUUFBWjs7U0FFZTJEOzs7OzttRkFBZjtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFFVTVELFFBRlYsR0FFcUIyQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0NpQyxLQUZ6RDs7WUFBQSxNQUdRN0QsUUFBUSxJQUFJLEVBSHBCO2NBQUE7Y0FBQTtZQUFBOztZQUtROEQsYUFBYSxDQUFDbkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFELEVBQTRDLFVBQTVDLENBQWI7WUFMUjtZQUFBOztVQUFBO1lBU1EzQixLQUFLLEdBQUcwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NpQyxLQUF4QztZQUNBbEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ21DLEtBQTFDLENBQWdEQyxXQUFoRCxDQUE0RCxTQUE1RCxFQUF1RSxNQUF2RTtZQVZSO1lBQUEsT0FXMkJqRSxjQUFjLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxDQVh6Qzs7VUFBQTtZQVdjYSxJQVhkOztZQUFBLE1BWVlBLElBQUksS0FBSyxLQVpyQjtjQUFBO2NBQUE7WUFBQTs7WUFBQTtZQUFBLE9BY3dDSCxZQUFZLENBQUNHLElBQUQsQ0FkcEQ7O1VBQUE7WUFja0JtRCxhQWRsQjtZQUFBO1lBQUEsT0FnQmtCVCxrQkFBa0IsQ0FBQzFDLElBQUksQ0FBQ29ELElBQUwsQ0FBVTVELEtBQVYsQ0FBZ0JDLEdBQWpCLEVBQXNCTyxJQUFJLENBQUNvRCxJQUFMLENBQVU1RCxLQUFWLENBQWdCRSxHQUF0QyxFQUEyQ1IsUUFBM0MsQ0FoQnBDOztVQUFBO1lBQUE7WUFBQSxPQWlCa0J5QixZQUFZLENBQUN3QyxhQUFELEVBQWdCaEUsS0FBaEIsQ0FqQjlCOztVQUFBO1lBa0JZLElBQUkwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsTUFBdUMsSUFBM0MsRUFDQTtjQUNJRCxRQUFRLENBQUNFLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDc0MsT0FBdEMsQ0FBOEMsVUFBQ0MsSUFBRCxFQUM5QztnQkFDSUEsSUFBSSxDQUFDckIsU0FBTCxDQUFlSyxNQUFmLENBQXNCLFNBQXRCO2NBQ0gsQ0FIRDtjQUlBekIsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixFQUE2Q21DLEtBQTdDLENBQW1EQyxXQUFuRCxDQUErRCxTQUEvRCxFQUEwRSxNQUExRTtjQUNBckMsUUFBUSxDQUFDRSxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNzQyxPQUE3QyxDQUFxRCxVQUFDQyxJQUFELEVBQ3JEO2dCQUNJQSxJQUFJLENBQUNyQixTQUFMLENBQWVLLE1BQWYsQ0FBc0IsZ0JBQXRCO2NBQ0gsQ0FIRDtjQUlBRSxxQkFBcUIsQ0FBQyxDQUFELENBQXJCO1lBQ0g7O1lBOUJiO1lBQUE7O1VBQUE7WUFrQ1lRLGFBQWEsQ0FBQ25DLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBRCxFQUE0QyxpQkFBNUMsQ0FBYjs7VUFsQ1o7WUFzQ0lELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENtQyxLQUExQyxDQUFnREMsV0FBaEQsQ0FBNEQsU0FBNUQsRUFBdUUsTUFBdkU7O1VBdENKO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBOzs7O0FBeUNBLFNBQVNGLGFBQVQsQ0FBdUJPLEtBQXZCLEVBQThCQyxPQUE5QixFQUNBO0VBQ0lELEtBQUssQ0FBQ1IsS0FBTixHQUFjLEVBQWQ7RUFDQVEsS0FBSyxDQUFDRSxXQUFOLEdBQW9CRCxPQUFwQjtFQUNBRCxLQUFLLENBQUN0QixTQUFOLENBQWdCTSxHQUFoQixDQUFvQixhQUFwQjtBQUNIOztBQUVEMUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixFQUFpRDRDLGdCQUFqRCxDQUFrRSxPQUFsRSxFQUEyRSxZQUMzRTtFQUNJWixrQkFBa0I7QUFDckIsQ0FIRDtBQUlBakMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQzRDLGdCQUExQyxDQUEyRCxPQUEzRCxFQUFvRSxZQUNwRTtFQUNJLElBQU1ILEtBQUssR0FBRzFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBZDs7RUFDQSxJQUFJeUMsS0FBSyxDQUFDdEIsU0FBTixDQUFnQkMsUUFBaEIsQ0FBeUIsYUFBekIsQ0FBSixFQUNBO0lBQ0lxQixLQUFLLENBQUNFLFdBQU4sR0FBb0IsRUFBcEI7SUFDQUYsS0FBSyxDQUFDdEIsU0FBTixDQUFnQkssTUFBaEIsQ0FBdUIsYUFBdkI7RUFDSDtBQUNKLENBUkQ7QUFVQXpCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQkFBdkIsRUFBK0M0QyxnQkFBL0MsQ0FBZ0UsT0FBaEUsRUFBeUUsWUFDekU7RUFDSTdCLFVBQVUsQ0FBQyxNQUFELENBQVY7QUFDSCxDQUhEO0FBS0FoQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLEVBQWdENEMsZ0JBQWhELENBQWlFLE9BQWpFLEVBQTBFLFlBQzFFO0VBQ0k3QixVQUFVLENBQUMsT0FBRCxDQUFWO0FBQ0gsQ0FIRDtBQUtBaEIsUUFBUSxDQUFDRSxnQkFBVCxDQUEwQixtQkFBMUIsRUFBK0NzQyxPQUEvQyxDQUF1RCxVQUFDWixHQUFELEVBQ3ZEO0VBQ0lBLEdBQUcsQ0FBQ2lCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQzlCO0lBQ0ksSUFBTXZCLEVBQUUsR0FBR00sR0FBRyxDQUFDSixZQUFKLENBQWlCLFlBQWpCLENBQVg7SUFDQXhCLFFBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsc0JBQTFCLEVBQWtEc0MsT0FBbEQsQ0FBMEQsVUFBQ00sT0FBRCxFQUMxRDtNQUNJQSxPQUFPLENBQUMxQixTQUFSLENBQWtCSyxNQUFsQixDQUF5QixxQkFBekI7SUFDSCxDQUhEO0lBSUF6QixRQUFRLENBQUNDLGFBQVQscUJBQW9DcUIsRUFBcEMsU0FBNENGLFNBQTVDLENBQXNETSxHQUF0RCxDQUEwRCxxQkFBMUQ7SUFDQUUsR0FBRyxDQUFDUixTQUFKLENBQWNNLEdBQWQsQ0FBa0IscUJBQWxCO0lBQ0FDLHFCQUFxQixDQUFDTCxFQUFELENBQXJCO0VBQ0gsQ0FWRDtBQVdILENBYkQ7QUFlQXRCLFFBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsd0JBQTFCLEVBQW9Ec0MsT0FBcEQsQ0FBNEQsVUFBQ08sUUFBRCxFQUM1RDtFQUNJQSxRQUFRLENBQUNGLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQ3BDO0lBQ0ksSUFBSUcsT0FBSjs7SUFDQSxJQUFJRCxRQUFRLENBQUNFLE9BQVQsS0FBcUIsS0FBekIsRUFDQTtNQUNJRCxPQUFPLEdBQUcsTUFBVjtNQUNBRCxRQUFRLENBQUNHLGVBQVQsQ0FBeUIsU0FBekI7SUFDSCxDQUpELE1BTUE7TUFDSUYsT0FBTyxHQUFHLFlBQVY7TUFDQUQsUUFBUSxDQUFDSSxZQUFULENBQXNCLFNBQXRCLEVBQWlDLEVBQWpDO0lBQ0g7O0lBQ0QsSUFBTWpCLEtBQUssR0FBR2EsUUFBUSxDQUFDYixLQUF2QjtJQUNBbEMsUUFBUSxDQUFDRSxnQkFBVCxxQkFBdUNnQyxLQUF2QyxTQUFrRE0sT0FBbEQsQ0FBMEQsVUFBQ1ksRUFBRCxFQUMxRDtNQUNJQSxFQUFFLENBQUNoQixLQUFILENBQVNDLFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0NXLE9BQWhDO0lBQ0gsQ0FIRDtFQUlILENBbEJEO0FBbUJILENBckJEO0FBdUJBaEQsUUFBUSxDQUFDRSxnQkFBVCxDQUEwQixlQUExQixFQUEyQ3NDLE9BQTNDLENBQW1ELFVBQUNZLEVBQUQsRUFDbkQ7RUFDSUEsRUFBRSxDQUFDaEIsS0FBSCxDQUFTQyxXQUFULENBQXFCLFNBQXJCLEVBQWdDLE1BQWhDO0FBQ0gsQ0FIRDtBQUtBLElBQU1nQixZQUFZLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUNqQnZELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQnVELFlBRGQsRUFFakJ4RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0J3RCxZQUZkLEVBR2pCekQsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCeUQsWUFIZCxFQUlqQjFELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQnVELFlBSmQsRUFLakJ4RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0J3RCxZQUxkLENBQXJCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9zb3VyY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1F1aWNrc2FuZC9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogbWFpbiBzZWN0aW9uICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuICAgIC8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4gICAgLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcXG59XFxuXFxuICAgIC8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOTYsIDk2LCA5Nik7XFxufVxcblxcbiAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDExMiwgMTEyLCAxMTIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWZjYzsgICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGdhcDogMTBweDtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4ubG9hZGluZy1naWYge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5sb2FkaW5nLXRleHQge1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJsb2NrZWQge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFVzZXIgaW5wdXQgc2VjdGlvbiAqL1xcblxcbi51c2VyLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmdyb3VwLWlucHV0IHtcXG4gICAgd2lkdGg6IDI4NHB4O1xcbiAgICBoZWlnaHQ6IDI2OXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbnB1dCA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQsIC51bml0LXNlbGVjdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZjRmO1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQge1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0Lndyb25nLWlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4udW5pdC1zZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0ID4gLmNhcHRpb24ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5jaGVja2JveGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ud2VhdGhlci1kYXRhLWNoZWNrYm94IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0ZTQ4Nzk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY2hlY2tib3hbY2hlY2tlZF06OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMjUlO1xcbiAgICBjb250ZW50OiAn8J+XuCc7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY2hlY2tib3hbY2hlY2tlZF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYTU4O1xcbn1cXG5cXG4ud2VhdGhlci1kYXRhLWNoZWNrYm94OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYTU4O1xcbn1cXG5cXG4uY2hlY2tib3ggPiAubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24td2VhdGhlciB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjRmNGY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24td2VhdGhlcjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4vKiBXZWF0aGVyLWRhdGEgdGFibGVzIHNlY3Rpb24qL1xcblxcbi50b3Atc2VjdGlvbiwgLmJvdHRvbS1zZWN0aW9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib3R0b20tc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4ubG9jYXRpb24tZGF0YSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLndlYXRoZXItdGFibGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDsgICAgXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnRhYmxlcyB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7ICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnRhYmxlcy13aXRoLXNpZGUtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgd2lkdGg6IDcwcHg7XFxufVxcblxcbi5zaWRlLW5hdi1hcnJvdyB7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zaWRlLW5hdi1hcnJvdzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Myk7XFxufVxcblxcbi5ub3QtYWNjZXNzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YWJsZXMtYm90dG9tLW5hdiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50YWJsZS1ib3R0b20tbmF2IHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi50YWJsZS1ib3R0b20tbmF2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmQ0MjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLnRhYmxlLWJvdHRvbS1uYXYuY3VycmVudGx5LWRpc3BsYXllZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCA0MiA4OCk7XFxufVxcblxcbi5yb2xsLXVwIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBoZWlnaHQ6IDQzMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lci5jdXJyZW50bHktZGlzcGxheWVkIHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFibGUtcGxhY2Vob2xkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzggNDIgODgpO1xcbiAgICBoZWlnaHQ6IDQzMHB4O1xcbiAgICB3aWR0aDogNDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXItdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCA0MiA4OCk7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4uZGF0ZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzIDYwIDExMyAvIDgwJSk7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lciA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoMm4pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzggMzIgODgpO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0aDpmaXJzdC1jaGlsZHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lciA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRoIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCOztBQUVqQjtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBNEQ7QUFDaEU7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFNBQVM7QUFDYjs7SUFFSSxVQUFVO0FBQ2Q7SUFDSSxXQUFXO0FBQ2Y7O0lBRUksVUFBVTtBQUNkO0lBQ0ksbUJBQW1CO0FBQ3ZCOztJQUVJLFdBQVc7QUFDZjtJQUNJLDJCQUEyQjtBQUMvQjs7SUFFSSxvQkFBb0I7QUFDeEI7SUFDSSw4QkFBOEI7QUFDbEM7O0FB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Q2QsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIG1haW4gc2VjdGlvbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBzcmM6IHVybCguLi9mb250cy9RdWlja3NhbmQvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbioge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbiAgICAvKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuICAgIC8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XFxufVxcblxcbiAgICAvKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDk2LCA5NiwgOTYpO1xcbn1cXG5cXG4gICAgLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMTIsIDExMiwgMTEyKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubG9hZGluZy1zY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmY2M7ICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLmxvYWRpbmctZ2lmIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4ubG9hZGluZy10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ibG9ja2VkIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBVc2VyIGlucHV0IHNlY3Rpb24gKi9cXG5cXG4udXNlci1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ncm91cC1pbnB1dCB7XFxuICAgIHdpZHRoOiAyODRweDtcXG4gICAgaGVpZ2h0OiAyNjlweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZjtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaW5wdXQgPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0LCAudW5pdC1zZWxlY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGY0ZjtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dC53cm9uZy1pbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnVuaXQtc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCA+IC5jYXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uY2hlY2tib3hlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLndlYXRoZXItZGF0YS1jaGVja2JveCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNGU0ODc5O1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4ud2VhdGhlci1kYXRhLWNoZWNrYm94W2NoZWNrZWRdOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgY29udGVudDogJ/Cfl7gnO1xcbn1cXG5cXG4ud2VhdGhlci1kYXRhLWNoZWNrYm94W2NoZWNrZWRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MmE1ODtcXG59XFxuXFxuLndlYXRoZXItZGF0YS1jaGVja2JveDpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MmE1ODtcXG59XFxuXFxuLmNoZWNrYm94ID4gLmxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLXdlYXRoZXIge1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZjRmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLXdlYXRoZXI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLyogV2VhdGhlci1kYXRhIHRhYmxlcyBzZWN0aW9uKi9cXG5cXG4udG9wLXNlY3Rpb24sIC5ib3R0b20tc2VjdGlvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm90dG9tLXNlY3Rpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmxvY2F0aW9uLWRhdGEge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi53ZWF0aGVyLXRhYmxlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7ICAgIFxcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi50YWJsZXMge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50OyAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi50YWJsZXMtd2l0aC1zaWRlLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbn1cXG5cXG4uc2lkZS1uYXYtYXJyb3cge1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2lkZS1uYXYtYXJyb3c6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTMpO1xcbn1cXG5cXG4ubm90LWFjY2Vzc2libGUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGFibGVzLWJvdHRvbS1uYXYge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udGFibGUtYm90dG9tLW5hdiB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4udGFibGUtYm90dG9tLW5hdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJkNDI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi50YWJsZS1ib3R0b20tbmF2LmN1cnJlbnRseS1kaXNwbGF5ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzggNDIgODgpO1xcbn1cXG5cXG4ucm9sbC11cCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIuY3VycmVudGx5LWRpc3BsYXllZCB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLnRhYmxlLXBsYWNlaG9sZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4IDQyIDg4KTtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgd2lkdGg6IDQzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlaG9sZGVyLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzggNDIgODgpO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLmRhdGUtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MyA2MCAxMTMgLyA4MCUpO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDJuKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4IDMyIDg4KTtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGg6Zmlyc3QtY2hpbGR7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0aCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lciA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGVzbGludC1kaXNhYmxlIGRvdC1ub3RhdGlvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jbGFzcyBkYXlXZWF0aGVyRGF0YVxue1xuICAgIGNvbnN0cnVjdG9yKHRlbXAsIGh1bWlkaXR5LCBwcmVzc3VyZSwgZGVzY3JpcHRpb24sIHdpbmRTcGVlZClcbiAgICB7XG4gICAgICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMud2luZFNwZWVkID0gd2luZFNwZWVkO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXRzKVxue1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPTc1MzJjYjRlNDk3NTIwOTk1MDllNDllOTE4MGE4YjQ5YCk7XG5cbiAgICBpZiAod2VhdGhlckRhdGEub2sgPT09IGZhbHNlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhLmpzb24oKTtcbiAgICBsZXQgdGltZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5pcGdlb2xvY2F0aW9uLmlvL3RpbWV6b25lP2FwaUtleT0xZDJkYWZiODYxZjM0ZDE5OGVlYzMzZjg4NWI4Y2U5ZiZsYXQ9JHt3ZWF0aGVyRGF0YS5jb29yZC5sYXR9Jmxvbmc9JHt3ZWF0aGVyRGF0YS5jb29yZC5sb259YCk7XG4gICAgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke3dlYXRoZXJEYXRhLmNvb3JkLmxhdH0mbG9uPSR7d2VhdGhlckRhdGEuY29vcmQubG9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD03NTMyY2I0ZTQ5NzUyMDk5NTA5ZTQ5ZTkxODBhOGI0OWApO1xuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckRhdGEuanNvbigpO1xuICAgIHRpbWUgPSBhd2FpdCB0aW1lLmpzb24oKTtcbiAgICB3ZWF0aGVyRGF0YVsnZGF0ZV90aW1lX3R4dCddID0gdGltZS5kYXRlX3RpbWVfdHh0O1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VwYXJhdGVEYXRhKHdlYXRoZXJEYXRhKVxue1xuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckRhdGE7XG4gICAgY29uc3QgZGF5c1NlcGFyYXRlZCA9IFtdO1xuICAgIGxldCBjdXJyZW50T2JqZWN0O1xuICAgIGZvciAobGV0IGRheSA9IDAsIGRhdGEgPSAwOyBkYXkgPCA1OyBkYXkrKylcbiAgICB7XG4gICAgICAgIGRheXNTZXBhcmF0ZWRbZGF5XSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBob3VyID0gMDsgaG91ciA8PSAyMTsgaG91ciArPSAzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0ID0gd2VhdGhlckRhdGEubGlzdFtkYXRhXTtcbiAgICAgICAgICAgIGlmICgrKGN1cnJlbnRPYmplY3QuZHRfdHh0LnNsaWNlKDExLCAxMykpID09IGhvdXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF5c1NlcGFyYXRlZFtkYXldLnB1c2gobmV3IGRheVdlYXRoZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JqZWN0Lm1haW4udGVtcCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9iamVjdC5tYWluLmh1bWlkaXR5LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JqZWN0Lm1haW4ucHJlc3N1cmUsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9iamVjdC53aW5kLnNwZWVkLFxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgIGRhdGErKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXlzU2VwYXJhdGVkW2RheV0ucHVzaChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXlzU2VwYXJhdGVkW2RheV0ucHVzaCh3ZWF0aGVyRGF0YS5saXN0W2RhdGEgLSAxXS5kdF90eHQuc2xpY2UoMCwgMTApKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheXNTZXBhcmF0ZWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlRGF0YShkYXlzU2VwYXJhdGVkLCB1bml0cylcbntcbiAgICBkYXlzU2VwYXJhdGVkID0gYXdhaXQgZGF5c1NlcGFyYXRlZDtcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci10YWJsZXMnKS5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZScpO1xuICAgIGxldCB1bml0U3ltYm9sVGVtcDtcbiAgICBsZXQgdW5pdFN5bWJvbFdTO1xuICAgIHN3aXRjaCAodW5pdHMpXG4gICAge1xuICAgICAgICBjYXNlICdtZXRyaWMnOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaXRTeW1ib2xUZW1wID0gJ8KwQyc7XG4gICAgICAgICAgICAgICAgdW5pdFN5bWJvbFdTID0gJ20vcyc7XG4gICAgICAgICAgICB9IGJyZWFrO1xuICAgICAgICBjYXNlICdzdGFuZGFyZCc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pdFN5bWJvbFRlbXAgPSAnSyc7XG4gICAgICAgICAgICAgICAgdW5pdFN5bWJvbFdTID0gJ20vcyc7XG4gICAgICAgICAgICB9IGJyZWFrO1xuICAgICAgICBjYXNlICdpbXBlcmlhbCc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pdFN5bWJvbFRlbXAgPSAnwrBGJztcbiAgICAgICAgICAgICAgICB1bml0U3ltYm9sV1MgPSAnbS9oJztcbiAgICAgICAgICAgIH0gYnJlYWs7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspXG4gICAge1xuICAgICAgICBjb25zdCB0YWJsZSA9IHRhYmxlc1tpXTtcbiAgICAgICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20odGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKSkuc2xpY2UoMSwgOSk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRheXNTZXBhcmF0ZWRbaV07XG4gICAgICAgIHRhYmxlLmNsb3Nlc3QoJy5kYXRlLXRhYmxlLWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWhlYWRlcicpLnRleHRDb250ZW50ID0gZGF5WzhdO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2pdO1xuICAgICAgICAgICAgY29uc3QgZmlsZWRzID0gQXJyYXkuZnJvbShyb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKSkuc2xpY2UoMSwgNik7XG5cbiAgICAgICAgICAgIGlmIChkYXlbal0gIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWxlZHNbMF0udGV4dENvbnRlbnQgPSBkYXlbal0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgZmlsZWRzWzFdLnRleHRDb250ZW50ID0gYCR7ZGF5W2pdLnRlbXB9ICR7dW5pdFN5bWJvbFRlbXB9YDtcbiAgICAgICAgICAgICAgICBmaWxlZHNbMl0udGV4dENvbnRlbnQgPSBgJHtkYXlbal0uaHVtaWRpdHl9JWA7XG4gICAgICAgICAgICAgICAgZmlsZWRzWzNdLnRleHRDb250ZW50ID0gYCR7ZGF5W2pdLnByZXNzdXJlfSBoUGFgO1xuICAgICAgICAgICAgICAgIGZpbGVkc1s0XS50ZXh0Q29udGVudCA9IGAke2RheVtqXS53aW5kU3BlZWR9ICR7dW5pdFN5bWJvbFdTfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWxlZHNba10udGV4dENvbnRlbnQgPSAnLSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzbGlkZVRhYmxlKHNsaWRlVG8pXG57XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGUtbmF2LWFycm93LiR7c2xpZGVUb31gKTtcbiAgICBjb25zdCBjdXJyZW50bHlEaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudGx5LWRpc3BsYXllZCcpO1xuICAgIGlmICghKHNsaWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKVxuICAgIHtcbiAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQoY3VycmVudGx5RGlzcGxheWVkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLCAxMCk7XG4gICAgICAgIGlkID0gc2xpZGVUbyA9PT0gJ2xlZnQnID8gaWQgLSAxIDogaWQgKyAxO1xuICAgICAgICBjdXJyZW50bHlEaXNwbGF5ZWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudGx5LWRpc3BsYXllZCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudGx5LWRpc3BsYXllZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRseS1kaXNwbGF5ZWQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J11gKS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50bHktZGlzcGxheWVkJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkbmF2PScke2lkfSddYCkuY2xhc3NMaXN0LmFkZCgnY3VycmVudGx5LWRpc3BsYXllZCcpO1xuICAgICAgICBzZXRTbGlkZUFjY2Vzc2FiaWxpdHkoaWQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0U2xpZGVBY2Nlc3NhYmlsaXR5KGlkKVxue1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90LWFjY2Vzc2libGUnKSAhPSBudWxsKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdC1hY2Nlc3NpYmxlJykuY2xhc3NMaXN0LnJlbW92ZSgnbm90LWFjY2Vzc2libGUnKTtcbiAgICB9XG4gICAgaWYgKCtpZCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLW5hdi1hcnJvdy5sZWZ0Jyk7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdub3QtYWNjZXNzaWJsZScpO1xuICAgIH1cbiAgICBlbHNlIGlmICgraWQgPT09IDQpXG4gICAge1xuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1uYXYtYXJyb3cucmlnaHQnKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25vdC1hY2Nlc3NpYmxlJyk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUaW1lQW5kR2VuZXJhdGUobGF0LCBsb25nLCBsb2NhdGlvbilcbntcbiAgICBsZXQgdGltZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5pcGdlb2xvY2F0aW9uLmlvL3RpbWV6b25lP2FwaUtleT0xZDJkYWZiODYxZjM0ZDE5OGVlYzMzZjg4NWI4Y2U5ZiZsYXQ9JHtsYXR9Jmxvbmc9JHtsb25nfWApO1xuICAgIHRpbWUgPSBhd2FpdCB0aW1lLmpzb24oKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24tZGF0YScpLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb259IC0gICR7dGltZS50aW1lem9uZX0sICR7dGltZS5kYXRlX3RpbWV9YDtcbn1cblxubGV0IHVuaXRzID0gJ21ldHJpYyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHN1bURhdGFBbmRHZW5lcmF0ZSgpXG57XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKS52YWx1ZTtcbiAgICBpZiAobG9jYXRpb24gPT0gJycpXG4gICAge1xuICAgICAgICBzZXRJbnB1dFdyb25nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1pbnB1dCcpLCAnUmVxdWlyZWQnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdCcpLnZhbHVlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1zY3JlZW4nKS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdHMpO1xuICAgICAgICBpZiAoZGF0YSAhPT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTZXBhcmF0ZWQgPSBhd2FpdCBzZXBhcmF0ZURhdGEoZGF0YSk7XG5cbiAgICAgICAgICAgIGF3YWl0IGdldFRpbWVBbmRHZW5lcmF0ZShkYXRhLmNpdHkuY29vcmQubGF0LCBkYXRhLmNpdHkuY29vcmQubG9uLCBsb2NhdGlvbik7XG4gICAgICAgICAgICBhd2FpdCBnZW5lcmF0ZURhdGEoZGF0YVNlcGFyYXRlZCwgdW5pdHMpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9ja2VkJykgIT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2NrZWQnKS5mb3JFYWNoKChpdGVtKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja2VkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLXBsYWNlaG9sZGVyJykuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3QtYWNjZXNzaWJsZScpLmZvckVhY2goKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1hY2Nlc3NpYmxlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0U2xpZGVBY2Nlc3NhYmlsaXR5KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgc2V0SW5wdXRXcm9uZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24taW5wdXQnKSwgJ0NpdHkgbm90IGZvdW5kIScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctc2NyZWVuJykuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dFdyb25nKGlucHV0LCBtZXNzYWdlKVxue1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBtZXNzYWdlO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3dyb25nLWlucHV0Jyk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnV0dG9uLXdlYXRoZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG57XG4gICAgc3VtRGF0YUFuZEdlbmVyYXRlKCk7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbntcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1pbnB1dCcpO1xuICAgIGlmIChpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ3dyb25nLWlucHV0JykpXG4gICAge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCd3cm9uZy1pbnB1dCcpO1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1uYXYtYXJyb3cubGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbntcbiAgICBzbGlkZVRhYmxlKCdsZWZ0Jyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtbmF2LWFycm93LnJpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9Plxue1xuICAgIHNsaWRlVGFibGUoJ3JpZ2h0Jyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlLWJvdHRvbS1uYXYnKS5mb3JFYWNoKChuYXYpID0+XG57XG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IGlkID0gbmF2LmdldEF0dHJpYnV0ZSgnZGF0YS1pZG5hdicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VycmVudGx5LWRpc3BsYXllZCcpLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudGx5LWRpc3BsYXllZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J11gKS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50bHktZGlzcGxheWVkJyk7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50bHktZGlzcGxheWVkJyk7XG4gICAgICAgIHNldFNsaWRlQWNjZXNzYWJpbGl0eShpZCk7XG4gICAgfSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXItZGF0YS1jaGVja2JveCcpLmZvckVhY2goKGNoZWNrYm94KSA9Plxue1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAge1xuICAgICAgICBsZXQgZGlzcGxheTtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBkaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgY2hlY2tib3gucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBkaXNwbGF5ID0gJ3RhYmxlLWNlbGwnO1xuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY2hlY2tib3gudmFsdWU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRkPScke3ZhbHVlfSddYCkuZm9yRWFjaCgodGQpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRkLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgZGlzcGxheSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRkPVwiNVwiXScpLmZvckVhY2goKHRkKSA9Plxue1xuICAgIHRkLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbn0pO1xuXG5jb25zdCB3aW5kb3dIZWlnaHQgPSBNYXRoLm1heChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2Nyb2xsSGVpZ2h0LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsaWVudEhlaWdodCxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc2Nyb2xsSGVpZ2h0LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5vZmZzZXRIZWlnaHQsXG4pO1xuIl0sIm5hbWVzIjpbImRheVdlYXRoZXJEYXRhIiwidGVtcCIsImh1bWlkaXR5IiwicHJlc3N1cmUiLCJkZXNjcmlwdGlvbiIsIndpbmRTcGVlZCIsImdldFdlYXRoZXJEYXRhIiwibG9jYXRpb24iLCJ1bml0cyIsImZldGNoIiwid2VhdGhlckRhdGEiLCJvayIsImpzb24iLCJjb29yZCIsImxhdCIsImxvbiIsInRpbWUiLCJkYXRlX3RpbWVfdHh0Iiwic2VwYXJhdGVEYXRhIiwiZGF5c1NlcGFyYXRlZCIsImRheSIsImRhdGEiLCJob3VyIiwiY3VycmVudE9iamVjdCIsImxpc3QiLCJkdF90eHQiLCJzbGljZSIsInB1c2giLCJtYWluIiwid2VhdGhlciIsIndpbmQiLCJzcGVlZCIsImdlbmVyYXRlRGF0YSIsInRhYmxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1bml0U3ltYm9sVGVtcCIsInVuaXRTeW1ib2xXUyIsImkiLCJ0YWJsZSIsInJvd3MiLCJBcnJheSIsImZyb20iLCJjbG9zZXN0IiwidGV4dENvbnRlbnQiLCJqIiwicm93IiwiZmlsZWRzIiwiayIsInNsaWRlVGFibGUiLCJzbGlkZVRvIiwic2xpZGVyIiwiY3VycmVudGx5RGlzcGxheWVkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpZCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiYWRkIiwic2V0U2xpZGVBY2Nlc3NhYmlsaXR5IiwibmF2IiwiZ2V0VGltZUFuZEdlbmVyYXRlIiwibG9uZyIsInRpbWV6b25lIiwiZGF0ZV90aW1lIiwic3VtRGF0YUFuZEdlbmVyYXRlIiwidmFsdWUiLCJzZXRJbnB1dFdyb25nIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImRhdGFTZXBhcmF0ZWQiLCJjaXR5IiwiZm9yRWFjaCIsIml0ZW0iLCJpbnB1dCIsIm1lc3NhZ2UiLCJwbGFjZWhvbGRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiY2hlY2tib3giLCJkaXNwbGF5IiwiY2hlY2tlZCIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInRkIiwid2luZG93SGVpZ2h0IiwiTWF0aCIsIm1heCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=
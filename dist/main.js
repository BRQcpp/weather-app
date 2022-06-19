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
___CSS_LOADER_EXPORT___.push([module.id, "/* main section */\n\n@font-face {\n    font-family: Quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    color: inherit;\n    font-family: inherit;\n}\n\nbody {\n    font-family: Quicksand;\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: #232323;\n    color: white;\n    gap: 40px;\n}\n\n    /* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n    /* Track */\n::-webkit-scrollbar-track {\n    background: #333333;\n}\n\n    /* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(96, 96, 96);\n}\n\n    /* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: rgb(112, 112, 112);\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: transparent;\n    border: none;\n}\n\n\n/* User input section */\n\n.user-input {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    transition: 0.3s;\n    flex-wrap: wrap;\n}\n\n.group-input {\n    width: 284px;\n    height: 269px;\n    border: 2px solid black;\n    border-radius: 8px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    background-color: #1f1f1f;\n}\n\n.input {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.input > label {\n    font-size: 30px;\n}\n\n.location-input, .unit-select {\n    text-align: center;\n    border-radius: 30px;\n    outline: none;\n    border: none;\n    background-color: #4f4f4f;\n}\n\n.location-input {\n    font-size: 23px;\n    height: 35px;\n    width: 240px;\n    padding: 10px;\n}\n\n.unit-select {\n    height: 30px;\n    width: 180px;\n    font-size: 18px;\n}\n\n.checkbox-input {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.checkbox-input > .caption {\n    font-size: 30px;\n}\n\n.checkboxes {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.checkbox {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.weather-data-checkbox {\n    appearance: none;\n    -webkit-animation: none;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: white;\n    border: 2px solid #4e4879;\n    transition: 0.3s;\n}\n\n.weather-data-checkbox[checked]::before {\n    position: relative;\n    left: 25%;\n    content: '🗸';\n}\n\n.weather-data-checkbox[checked] {\n    background-color: #262a58;\n}\n\n.weather-data-checkbox:hover {\n    opacity: 0.3;\n    background-color: #262a58;\n}\n\n.checkbox > .label{\n    font-size: 20px;\n}\n\n.submit-button-weather {\n    width: 90px;\n    height: 40px;\n    background-color: #4f4f4f;\n    border: none;\n    border-radius: 20px;\n    transition: 0.3s;\n}\n\n.submit-button-weather:hover {\n    transform: scale(0.95);\n}\n\n\n/* Weather-data tables section*/\n\n.top-section {\n    transition: 0.3s;\n    position: relative;\n    width: 100%;\n    display: flex;\n    align-items: center;\n   /* transform: translateY(50%); */\n}\n\n.bottom-section {\n    transition: 0.3s;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    overflow: auto;\n\n   /* transform: translateY(500px); */\n}\n\n.weather-tables {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;    \n    margin: 0 auto;\n    gap: 8px;\n}\n\n.tables {\n    overflow: hidden;\n    display: flex;\n    height: fit-content;    \n    border-radius: 10px;\n    flex-shrink: 0;\n}\n\n.tables-with-side-nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.side-nav {\n    width: 70px;\n}\n\n.side-nav-arrow {\n    transition: 0.4s;\n}\n\n.side-nav-arrow:hover {\n    transform: scale(0.93);\n}\n\n.not-accessible {\n    opacity: 0.3;\n    pointer-events: none;\n}\n\n.tables-bottom-nav {\n    margin: 0 auto;\n    display: flex;\n    height: 30px;\n    width: 320px;\n    justify-content: space-around;\n}\n\n.table-bottom-nav {\n    width: 15px;\n    height: 15px;\n    background-color: black;\n    border: 2px solid white;\n    border-radius: 50%;\n    transition: 0.3s;\n}\n\n.table-bottom-nav:hover {\n    background-color: #2b2d42;\n    transform: scale(0.95);\n}\n\n.table-bottom-nav.currently-displayed {\n    background-color: rgb(38 42 88);\n}\n\n.roll-up {\n    transform: translateY(0px);\n}\n\n.date-table-container {\n    display: none;\n    flex-shrink: 0;\n    height: 430px;\n    flex-direction: column;\n    color: white;\n}\n\n.date-table-container.currently-displayed {\n    display: flex !important;\n}\n\n.date-table-container > table {\n    height: 100%;\n    width: 100%;\n    background-color: rgb(38 42 88);\n    border-spacing: 0;\n}\n\n.date-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(53 60 113 / 80%);\n    height: 40px;\n    width: 100%;\n}\n\n.date-table-container > table > tbody > tr:nth-child(2n){\n    background-color: rgb(38 32 88);\n}\n\n.date-table-container > table > tbody > tr > th:first-child{\n    padding-left: 15px;\n}\n\n.date-table-container > table > tbody > tr > td {\n    padding: 0 5px;\n    text-align: center;\n}\n\n.date-table-container > table > tbody > tr > th {\n    padding: 5px;\n}\n\n.date-table-container > table > tbody > tr > td:first-child {\n    padding-left: 15px;\n}\n\n.date-table-container > table > tbody > tr > td:last-child {\n    padding-right: 15px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* main section */\n\n@font-face {\n    font-family: Quicksand;\n    src: url(../fonts/Quicksand/Quicksand-VariableFont_wght.ttf);\n}\n\n* {\n    color: inherit;\n    font-family: inherit;\n}\n\nbody {\n    font-family: Quicksand;\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: #232323;\n    color: white;\n    gap: 40px;\n}\n\n    /* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n    /* Track */\n::-webkit-scrollbar-track {\n    background: #333333;\n}\n\n    /* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(96, 96, 96);\n}\n\n    /* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: rgb(112, 112, 112);\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: transparent;\n    border: none;\n}\n\n\n/* User input section */\n\n.user-input {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    transition: 0.3s;\n    flex-wrap: wrap;\n}\n\n.group-input {\n    width: 284px;\n    height: 269px;\n    border: 2px solid black;\n    border-radius: 8px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    background-color: #1f1f1f;\n}\n\n.input {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.input > label {\n    font-size: 30px;\n}\n\n.location-input, .unit-select {\n    text-align: center;\n    border-radius: 30px;\n    outline: none;\n    border: none;\n    background-color: #4f4f4f;\n}\n\n.location-input {\n    font-size: 23px;\n    height: 35px;\n    width: 240px;\n    padding: 10px;\n}\n\n.unit-select {\n    height: 30px;\n    width: 180px;\n    font-size: 18px;\n}\n\n.checkbox-input {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.checkbox-input > .caption {\n    font-size: 30px;\n}\n\n.checkboxes {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.checkbox {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.weather-data-checkbox {\n    appearance: none;\n    -webkit-animation: none;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: white;\n    border: 2px solid #4e4879;\n    transition: 0.3s;\n}\n\n.weather-data-checkbox[checked]::before {\n    position: relative;\n    left: 25%;\n    content: '🗸';\n}\n\n.weather-data-checkbox[checked] {\n    background-color: #262a58;\n}\n\n.weather-data-checkbox:hover {\n    opacity: 0.3;\n    background-color: #262a58;\n}\n\n.checkbox > .label{\n    font-size: 20px;\n}\n\n.submit-button-weather {\n    width: 90px;\n    height: 40px;\n    background-color: #4f4f4f;\n    border: none;\n    border-radius: 20px;\n    transition: 0.3s;\n}\n\n.submit-button-weather:hover {\n    transform: scale(0.95);\n}\n\n\n/* Weather-data tables section*/\n\n.top-section {\n    transition: 0.3s;\n    position: relative;\n    width: 100%;\n    display: flex;\n    align-items: center;\n   /* transform: translateY(50%); */\n}\n\n.bottom-section {\n    transition: 0.3s;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    overflow: auto;\n\n   /* transform: translateY(500px); */\n}\n\n.weather-tables {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;    \n    margin: 0 auto;\n    gap: 8px;\n}\n\n.tables {\n    overflow: hidden;\n    display: flex;\n    height: fit-content;    \n    border-radius: 10px;\n    flex-shrink: 0;\n}\n\n.tables-with-side-nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.side-nav {\n    width: 70px;\n}\n\n.side-nav-arrow {\n    transition: 0.4s;\n}\n\n.side-nav-arrow:hover {\n    transform: scale(0.93);\n}\n\n.not-accessible {\n    opacity: 0.3;\n    pointer-events: none;\n}\n\n.tables-bottom-nav {\n    margin: 0 auto;\n    display: flex;\n    height: 30px;\n    width: 320px;\n    justify-content: space-around;\n}\n\n.table-bottom-nav {\n    width: 15px;\n    height: 15px;\n    background-color: black;\n    border: 2px solid white;\n    border-radius: 50%;\n    transition: 0.3s;\n}\n\n.table-bottom-nav:hover {\n    background-color: #2b2d42;\n    transform: scale(0.95);\n}\n\n.table-bottom-nav.currently-displayed {\n    background-color: rgb(38 42 88);\n}\n\n.roll-up {\n    transform: translateY(0px);\n}\n\n.date-table-container {\n    display: none;\n    flex-shrink: 0;\n    height: 430px;\n    flex-direction: column;\n    color: white;\n}\n\n.date-table-container.currently-displayed {\n    display: flex !important;\n}\n\n.date-table-container > table {\n    height: 100%;\n    width: 100%;\n    background-color: rgb(38 42 88);\n    border-spacing: 0;\n}\n\n.date-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(53 60 113 / 80%);\n    height: 40px;\n    width: 100%;\n}\n\n.date-table-container > table > tbody > tr:nth-child(2n){\n    background-color: rgb(38 32 88);\n}\n\n.date-table-container > table > tbody > tr > th:first-child{\n    padding-left: 15px;\n}\n\n.date-table-container > table > tbody > tr > td {\n    padding: 0 5px;\n    text-align: center;\n}\n\n.date-table-container > table > tbody > tr > th {\n    padding: 5px;\n}\n\n.date-table-container > table > tbody > tr > td:first-child {\n    padding-left: 15px;\n}\n\n.date-table-container > table > tbody > tr > td:last-child {\n    padding-right: 15px;\n}\n\n"],"sourceRoot":""}]);
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
    var weatherData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(location, "&APPID=7532cb4e49752099509e49e9180a8b49"));

          case 2:
            weatherData = _context.sent;

            if (!(weatherData.ok === false)) {
              _context.next = 6;
              break;
            }

            if (weatherData.status === 404) {
              alert('City was not found');
            }

            return _context.abrupt("return", false);

          case 6:
            _context.next = 8;
            return weatherData.json();

          case 8:
            weatherData = _context.sent;
            _context.next = 11;
            return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(weatherData.coord.lat, "&lon=").concat(weatherData.coord.lon, "&units=metric&appid=7532cb4e49752099509e49e9180a8b49"));

          case 11:
            weatherData = _context.sent;
            _context.next = 14;
            return weatherData.json();

          case 14:
            weatherData = _context.sent;
            return _context.abrupt("return", weatherData);

          case 16:
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

function generateData(_x4) {
  return _generateData.apply(this, arguments);
}

function _generateData() {
  _generateData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(daysSeparated) {
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

var location = 'London';
var units = 'metric';
document.querySelector('.submit-button-weather').addEventListener('click', function () {
  location = document.querySelector('#location').value;
  units = document.querySelector('#unit').value;
  generateData(separateData(getWeatherData(location, units)));
});
document.querySelector('.submit-button-weather').addEventListener('click', function () {
  var topSection = document.querySelector('.top-section');
  var bottomSection = document.querySelector('.bottom-section');

  if (document.querySelector('.location-input').value !== '') {
    bottomSection.style.removeProperty('transform');
    bottomSection.classList.add('roll-up');
    bottomSection.classList.add('roll-up');
    topSection.classList.add('roll-up');
  }
});
document.querySelector('.location-input').addEventListener('click', function () {
  var input = document.querySelector('.location-input');
  input.value = '';
  input.style.removeProperty('color');
}, {
  once: true
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
generateData(separateData(getWeatherData(location, units)));
setSlideAccessability(0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9zb3VyY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1F1aWNrc2FuZC9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogbWFpbiBzZWN0aW9uICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuICAgIC8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4gICAgLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcXG59XFxuXFxuICAgIC8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOTYsIDk2LCA5Nik7XFxufVxcblxcbiAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDExMiwgMTEyLCAxMTIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcblxcbi8qIFVzZXIgaW5wdXQgc2VjdGlvbiAqL1xcblxcbi51c2VyLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmdyb3VwLWlucHV0IHtcXG4gICAgd2lkdGg6IDI4NHB4O1xcbiAgICBoZWlnaHQ6IDI2OXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbnB1dCA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQsIC51bml0LXNlbGVjdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZjRmO1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQge1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udW5pdC1zZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0ID4gLmNhcHRpb24ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5jaGVja2JveGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ud2VhdGhlci1kYXRhLWNoZWNrYm94IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0ZTQ4Nzk7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY2hlY2tib3hbY2hlY2tlZF06OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMjUlO1xcbiAgICBjb250ZW50OiAn8J+XuCc7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY2hlY2tib3hbY2hlY2tlZF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYTU4O1xcbn1cXG5cXG4ud2VhdGhlci1kYXRhLWNoZWNrYm94OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYTU4O1xcbn1cXG5cXG4uY2hlY2tib3ggPiAubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24td2VhdGhlciB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjRmNGY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24td2VhdGhlcjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcblxcbi8qIFdlYXRoZXItZGF0YSB0YWJsZXMgc2VjdGlvbiovXFxuXFxuLnRvcC1zZWN0aW9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTsgKi9cXG59XFxuXFxuLmJvdHRvbS1zZWN0aW9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MDBweCk7ICovXFxufVxcblxcbi53ZWF0aGVyLXRhYmxlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7ICAgIFxcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi50YWJsZXMge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50OyAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi50YWJsZXMtd2l0aC1zaWRlLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbn1cXG5cXG4uc2lkZS1uYXYtYXJyb3cge1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2lkZS1uYXYtYXJyb3c6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTMpO1xcbn1cXG5cXG4ubm90LWFjY2Vzc2libGUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGFibGVzLWJvdHRvbS1uYXYge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udGFibGUtYm90dG9tLW5hdiB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4udGFibGUtYm90dG9tLW5hdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJkNDI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi50YWJsZS1ib3R0b20tbmF2LmN1cnJlbnRseS1kaXNwbGF5ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzggNDIgODgpO1xcbn1cXG5cXG4ucm9sbC11cCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIuY3VycmVudGx5LWRpc3BsYXllZCB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzggNDIgODgpO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLmRhdGUtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MyA2MCAxMTMgLyA4MCUpO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDJuKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4IDMyIDg4KTtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGg6Zmlyc3QtY2hpbGR7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0aCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lciA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjs7QUFFakI7SUFDSSxzQkFBc0I7SUFDdEIsNENBQTREO0FBQ2hFOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFNBQVM7QUFDYjs7SUFFSSxV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Z0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBtYWluIHNlY3Rpb24gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvUXVpY2tzYW5kL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG4qIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4gICAgLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbiAgICAvKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xcbn1cXG5cXG4gICAgLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig5NiwgOTYsIDk2KTtcXG59XFxuXFxuICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTEyLCAxMTIsIDExMik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLyogVXNlciBpbnB1dCBzZWN0aW9uICovXFxuXFxuLnVzZXItaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZ3JvdXAtaW5wdXQge1xcbiAgICB3aWR0aDogMjg0cHg7XFxuICAgIGhlaWdodDogMjY5cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmlucHV0ID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCwgLnVuaXQtc2VsZWN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjRmNGY7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi51bml0LXNlbGVjdCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtaW5wdXQgPiAuY2FwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmNoZWNrYm94ZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY2hlY2tib3gge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzRlNDg3OTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLndlYXRoZXItZGF0YS1jaGVja2JveFtjaGVja2VkXTo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAyNSU7XFxuICAgIGNvbnRlbnQ6ICfwn5e4JztcXG59XFxuXFxuLndlYXRoZXItZGF0YS1jaGVja2JveFtjaGVja2VkXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJhNTg7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY2hlY2tib3g6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJhNTg7XFxufVxcblxcbi5jaGVja2JveCA+IC5sYWJlbHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbi13ZWF0aGVyIHtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGY0ZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbi13ZWF0aGVyOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuXFxuLyogV2VhdGhlci1kYXRhIHRhYmxlcyBzZWN0aW9uKi9cXG5cXG4udG9wLXNlY3Rpb24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpOyAqL1xcbn1cXG5cXG4uYm90dG9tLXNlY3Rpb24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwMHB4KTsgKi9cXG59XFxuXFxuLndlYXRoZXItdGFibGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDsgICAgXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnRhYmxlcyB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7ICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnRhYmxlcy13aXRoLXNpZGUtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgd2lkdGg6IDcwcHg7XFxufVxcblxcbi5zaWRlLW5hdi1hcnJvdyB7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zaWRlLW5hdi1hcnJvdzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Myk7XFxufVxcblxcbi5ub3QtYWNjZXNzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YWJsZXMtYm90dG9tLW5hdiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50YWJsZS1ib3R0b20tbmF2IHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi50YWJsZS1ib3R0b20tbmF2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmQ0MjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLnRhYmxlLWJvdHRvbS1uYXYuY3VycmVudGx5LWRpc3BsYXllZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCA0MiA4OCk7XFxufVxcblxcbi5yb2xsLXVwIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBoZWlnaHQ6IDQzMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lci5jdXJyZW50bHktZGlzcGxheWVkIHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCA0MiA4OCk7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4uZGF0ZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzIDYwIDExMyAvIDgwJSk7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lciA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoMm4pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzggMzIgODgpO1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0aDpmaXJzdC1jaGlsZHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlLXRhYmxlLWNvbnRhaW5lciA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRoIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGF0ZS10YWJsZS1jb250YWluZXIgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuLmRhdGUtdGFibGUtY29udGFpbmVyID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jbGFzcyBkYXlXZWF0aGVyRGF0YVxue1xuICAgIGNvbnN0cnVjdG9yKHRlbXAsIGh1bWlkaXR5LCBwcmVzc3VyZSwgZGVzY3JpcHRpb24sIHdpbmRTcGVlZClcbiAgICB7XG4gICAgICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMud2luZFNwZWVkID0gd2luZFNwZWVkO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXRzKVxue1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPTc1MzJjYjRlNDk3NTIwOTk1MDllNDllOTE4MGE4YjQ5YCk7XG5cbiAgICBpZiAod2VhdGhlckRhdGEub2sgPT09IGZhbHNlKVxuICAgIHtcbiAgICAgICAgaWYgKHdlYXRoZXJEYXRhLnN0YXR1cyA9PT0gNDA0KVxuICAgICAgICB7XG4gICAgICAgICAgICBhbGVydCgnQ2l0eSB3YXMgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhLmpzb24oKTtcblxuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHt3ZWF0aGVyRGF0YS5jb29yZC5sYXR9Jmxvbj0ke3dlYXRoZXJEYXRhLmNvb3JkLmxvbn0mdW5pdHM9bWV0cmljJmFwcGlkPTc1MzJjYjRlNDk3NTIwOTk1MDllNDllOTE4MGE4YjQ5YCk7XG4gICAgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyRGF0YS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXBhcmF0ZURhdGEod2VhdGhlckRhdGEpXG57XG4gICAgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyRGF0YTtcbiAgICBjb25zdCBkYXlzU2VwYXJhdGVkID0gW107XG4gICAgbGV0IGN1cnJlbnRPYmplY3Q7XG4gICAgZm9yIChsZXQgZGF5ID0gMCwgZGF0YSA9IDA7IGRheSA8IDU7IGRheSsrKVxuICAgIHtcbiAgICAgICAgZGF5c1NlcGFyYXRlZFtkYXldID0gW107XG4gICAgICAgIGZvciAobGV0IGhvdXIgPSAwOyBob3VyIDw9IDIxOyBob3VyICs9IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QgPSB3ZWF0aGVyRGF0YS5saXN0W2RhdGFdO1xuICAgICAgICAgICAgaWYgKCsoY3VycmVudE9iamVjdC5kdF90eHQuc2xpY2UoMTEsIDEzKSkgPT0gaG91cilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXlzU2VwYXJhdGVkW2RheV0ucHVzaChuZXcgZGF5V2VhdGhlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPYmplY3QubWFpbi50ZW1wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JqZWN0Lm1haW4uaHVtaWRpdHksXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPYmplY3QubWFpbi5wcmVzc3VyZSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JqZWN0LndpbmQuc3BlZWQsXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgZGF0YSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRheXNTZXBhcmF0ZWRbZGF5XS5wdXNoKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRheXNTZXBhcmF0ZWRbZGF5XS5wdXNoKHdlYXRoZXJEYXRhLmxpc3RbZGF0YSAtIDFdLmR0X3R4dC5zbGljZSgwLCAxMCkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5c1NlcGFyYXRlZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVEYXRhKGRheXNTZXBhcmF0ZWQpXG57XG4gICAgZGF5c1NlcGFyYXRlZCA9IGF3YWl0IGRheXNTZXBhcmF0ZWQ7XG4gICAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItdGFibGVzJykucXVlcnlTZWxlY3RvckFsbCgndGFibGUnKTtcbiAgICBsZXQgdW5pdFN5bWJvbFRlbXA7XG4gICAgbGV0IHVuaXRTeW1ib2xXUztcbiAgICBzd2l0Y2ggKHVuaXRzKVxuICAgIHtcbiAgICAgICAgY2FzZSAnbWV0cmljJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bml0U3ltYm9sVGVtcCA9ICfCsEMnO1xuICAgICAgICAgICAgICAgIHVuaXRTeW1ib2xXUyA9ICdtL3MnO1xuICAgICAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnc3RhbmRhcmQnOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaXRTeW1ib2xUZW1wID0gJ0snO1xuICAgICAgICAgICAgICAgIHVuaXRTeW1ib2xXUyA9ICdtL3MnO1xuICAgICAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnaW1wZXJpYWwnOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaXRTeW1ib2xUZW1wID0gJ8KwRic7XG4gICAgICAgICAgICAgICAgdW5pdFN5bWJvbFdTID0gJ20vaCc7XG4gICAgICAgICAgICB9IGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGFibGUgPSB0YWJsZXNbaV07XG4gICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJykpLnNsaWNlKDEsIDkpO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXlzU2VwYXJhdGVkW2ldO1xuICAgICAgICB0YWJsZS5jbG9zZXN0KCcuZGF0ZS10YWJsZS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1oZWFkZXInKS50ZXh0Q29udGVudCA9IGRheVs4XTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tqXTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVkcyA9IEFycmF5LmZyb20ocm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJykpLnNsaWNlKDEsIDYpO1xuXG4gICAgICAgICAgICBpZiAoZGF5W2pdICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZWRzWzBdLnRleHRDb250ZW50ID0gZGF5W2pdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIGZpbGVkc1sxXS50ZXh0Q29udGVudCA9IGAke2RheVtqXS50ZW1wfSAke3VuaXRTeW1ib2xUZW1wfWA7XG4gICAgICAgICAgICAgICAgZmlsZWRzWzJdLnRleHRDb250ZW50ID0gYCR7ZGF5W2pdLmh1bWlkaXR5fSVgO1xuICAgICAgICAgICAgICAgIGZpbGVkc1szXS50ZXh0Q29udGVudCA9IGAke2RheVtqXS5wcmVzc3VyZX0gaFBhYDtcbiAgICAgICAgICAgICAgICBmaWxlZHNbNF0udGV4dENvbnRlbnQgPSBgJHtkYXlbal0ud2luZFNwZWVkfSAke3VuaXRTeW1ib2xXU31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZWRzW2tdLnRleHRDb250ZW50ID0gJy0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2xpZGVUYWJsZShzbGlkZVRvKVxue1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaWRlLW5hdi1hcnJvdy4ke3NsaWRlVG99YCk7XG4gICAgY29uc3QgY3VycmVudGx5RGlzcGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRseS1kaXNwbGF5ZWQnKTtcbiAgICBpZiAoIShzbGlkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSlcbiAgICB7XG4gICAgICAgIGxldCBpZCA9IHBhcnNlSW50KGN1cnJlbnRseURpc3BsYXllZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSwgMTApO1xuICAgICAgICBpZCA9IHNsaWRlVG8gPT09ICdsZWZ0JyA/IGlkIC0gMSA6IGlkICsgMTtcbiAgICAgICAgY3VycmVudGx5RGlzcGxheWVkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRseS1kaXNwbGF5ZWQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRseS1kaXNwbGF5ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50bHktZGlzcGxheWVkJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSddYCkuY2xhc3NMaXN0LmFkZCgnY3VycmVudGx5LWRpc3BsYXllZCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZG5hdj0nJHtpZH0nXWApLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRseS1kaXNwbGF5ZWQnKTtcbiAgICAgICAgc2V0U2xpZGVBY2Nlc3NhYmlsaXR5KGlkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFNsaWRlQWNjZXNzYWJpbGl0eShpZClcbntcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdC1hY2Nlc3NpYmxlJykgIT0gbnVsbClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3QtYWNjZXNzaWJsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1hY2Nlc3NpYmxlJyk7XG4gICAgfVxuICAgIGlmICgraWQgPT09IDApXG4gICAge1xuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1uYXYtYXJyb3cubGVmdCcpO1xuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbm90LWFjY2Vzc2libGUnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoK2lkID09PSA0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtbmF2LWFycm93LnJpZ2h0Jyk7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdub3QtYWNjZXNzaWJsZScpO1xuICAgIH1cbn1cblxubGV0IGxvY2F0aW9uID0gJ0xvbmRvbic7XG5sZXQgdW5pdHMgPSAnbWV0cmljJztcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idXR0b24td2VhdGhlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbntcbiAgICBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpLnZhbHVlO1xuICAgIHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQnKS52YWx1ZTtcblxuICAgIGdlbmVyYXRlRGF0YShzZXBhcmF0ZURhdGEoZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXRzKSkpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnV0dG9uLXdlYXRoZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG57XG4gICAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3Atc2VjdGlvbicpO1xuICAgIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tLXNlY3Rpb24nKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLWlucHV0JykudmFsdWUgIT09ICcnKVxuICAgIHtcbiAgICAgICAgYm90dG9tU2VjdGlvbi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgICAgIGJvdHRvbVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncm9sbC11cCcpO1xuICAgICAgICBib3R0b21TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3JvbGwtdXAnKTtcbiAgICAgICAgdG9wU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdyb2xsLXVwJyk7XG4gICAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbntcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1pbnB1dCcpO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgaW5wdXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2NvbG9yJyk7XG59LCB7IG9uY2U6IHRydWUgfSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLW5hdi1hcnJvdy5sZWZ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9Plxue1xuICAgIHNsaWRlVGFibGUoJ2xlZnQnKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1uYXYtYXJyb3cucmlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG57XG4gICAgc2xpZGVUYWJsZSgncmlnaHQnKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGUtYm90dG9tLW5hdicpLmZvckVhY2goKG5hdikgPT5cbntcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgaWQgPSBuYXYuZ2V0QXR0cmlidXRlKCdkYXRhLWlkbmF2Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJyZW50bHktZGlzcGxheWVkJykuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50bHktZGlzcGxheWVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nXWApLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRseS1kaXNwbGF5ZWQnKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRseS1kaXNwbGF5ZWQnKTtcbiAgICAgICAgc2V0U2xpZGVBY2Nlc3NhYmlsaXR5KGlkKTtcbiAgICB9KTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlci1kYXRhLWNoZWNrYm94JykuZm9yRWFjaCgoY2hlY2tib3gpID0+XG57XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICB7XG4gICAgICAgIGxldCBkaXNwbGF5O1xuICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBjaGVja2JveC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpc3BsYXkgPSAndGFibGUtY2VsbCc7XG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBjaGVja2JveC52YWx1ZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdGQ9JyR7dmFsdWV9J11gKS5mb3JFYWNoKCh0ZCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgdGQuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCBkaXNwbGF5KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGQ9XCI1XCJdJykuZm9yRWFjaCgodGQpID0+XG57XG4gICAgdGQuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xufSk7XG5cbmdlbmVyYXRlRGF0YShzZXBhcmF0ZURhdGEoZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXRzKSkpO1xuc2V0U2xpZGVBY2Nlc3NhYmlsaXR5KDApO1xuIl0sIm5hbWVzIjpbImRheVdlYXRoZXJEYXRhIiwidGVtcCIsImh1bWlkaXR5IiwicHJlc3N1cmUiLCJkZXNjcmlwdGlvbiIsIndpbmRTcGVlZCIsImdldFdlYXRoZXJEYXRhIiwibG9jYXRpb24iLCJ1bml0cyIsImZldGNoIiwid2VhdGhlckRhdGEiLCJvayIsInN0YXR1cyIsImFsZXJ0IiwianNvbiIsImNvb3JkIiwibGF0IiwibG9uIiwic2VwYXJhdGVEYXRhIiwiZGF5c1NlcGFyYXRlZCIsImRheSIsImRhdGEiLCJob3VyIiwiY3VycmVudE9iamVjdCIsImxpc3QiLCJkdF90eHQiLCJzbGljZSIsInB1c2giLCJtYWluIiwid2VhdGhlciIsIndpbmQiLCJzcGVlZCIsImdlbmVyYXRlRGF0YSIsInRhYmxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1bml0U3ltYm9sVGVtcCIsInVuaXRTeW1ib2xXUyIsImkiLCJ0YWJsZSIsInJvd3MiLCJBcnJheSIsImZyb20iLCJjbG9zZXN0IiwidGV4dENvbnRlbnQiLCJqIiwicm93IiwiZmlsZWRzIiwiayIsInNsaWRlVGFibGUiLCJzbGlkZVRvIiwic2xpZGVyIiwiY3VycmVudGx5RGlzcGxheWVkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpZCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiYWRkIiwic2V0U2xpZGVBY2Nlc3NhYmlsaXR5IiwibmF2IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwidG9wU2VjdGlvbiIsImJvdHRvbVNlY3Rpb24iLCJzdHlsZSIsInJlbW92ZVByb3BlcnR5IiwiaW5wdXQiLCJvbmNlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjaGVja2JveCIsImRpc3BsYXkiLCJjaGVja2VkIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidGQiLCJzZXRQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=
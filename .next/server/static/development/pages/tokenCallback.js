module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FestivSpotifyUserToken.js":
/*!**********************************************!*\
  !*** ./components/FestivSpotifyUserToken.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/raysosseh/Documents/projects/festiv/components/FestivSpotifyUserToken.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //landing page for spotify api user token generation\n//pings main app w user token on redirect.\n\nclass FestivSpotifyUserToken extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  componentDidMount() {\n    if (window.opener) {\n      window.opener.postMessage(window.location.href.split('?code=')[1], \"*\");\n      window.close();\n    }\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 4\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FestivSpotifyUserToken);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zlc3RpdlNwb3RpZnlVc2VyVG9rZW4uanM/ODE5MiJdLCJuYW1lcyI6WyJGZXN0aXZTcG90aWZ5VXNlclRva2VuIiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJvcGVuZXIiLCJwb3N0TWVzc2FnZSIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwiY2xvc2UiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0NBR0E7QUFDQTs7QUFDQSxNQUFNQSxzQkFBTixTQUFxQ0MsK0NBQXJDLENBQThDO0FBQzFDQyxtQkFBaUIsR0FBRTtBQUNmLFFBQUdDLE1BQU0sQ0FBQ0MsTUFBVixFQUFpQjtBQUNiRCxZQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBZCxDQUEwQkYsTUFBTSxDQUFDRyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkIsUUFBM0IsRUFBcUMsQ0FBckMsQ0FBMUIsRUFBbUUsR0FBbkU7QUFDQUwsWUFBTSxDQUFDTSxLQUFQO0FBQ0g7QUFDSjs7QUFDSkMsUUFBTSxHQUFFO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQ7QUFHQTs7QUFYNEM7O0FBYy9CVixxRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmVzdGl2U3BvdGlmeVVzZXJUb2tlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cblxuLy9sYW5kaW5nIHBhZ2UgZm9yIHNwb3RpZnkgYXBpIHVzZXIgdG9rZW4gZ2VuZXJhdGlvblxuLy9waW5ncyBtYWluIGFwcCB3IHVzZXIgdG9rZW4gb24gcmVkaXJlY3QuXG5jbGFzcyBGZXN0aXZTcG90aWZ5VXNlclRva2VuIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGlmKHdpbmRvdy5vcGVuZXIpe1xuICAgICAgICAgICAgd2luZG93Lm9wZW5lci5wb3N0TWVzc2FnZSh3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnP2NvZGU9JylbMV0sIFwiKlwiKVxuICAgICAgICAgICAgd2luZG93LmNsb3NlKClcbiAgICAgICAgfVxuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj48L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlc3RpdlNwb3RpZnlVc2VyVG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FestivSpotifyUserToken.js\n");

/***/ }),

/***/ "./pages/tokenCallback.js":
/*!********************************!*\
  !*** ./pages/tokenCallback.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FestivSpotifyUserToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FestivSpotifyUserToken */ \"./components/FestivSpotifyUserToken.js\");\nvar _jsxFileName = \"/Users/raysosseh/Documents/projects/festiv/pages/tokenCallback.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nclass TokenCallback extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return __jsx(_components_FestivSpotifyUserToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 13\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenCallback);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90b2tlbkNhbGxiYWNrLmpzP2RjNWQiXSwibmFtZXMiOlsiVG9rZW5DYWxsYmFjayIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGFBQU4sU0FBNEJDLDRDQUFLLENBQUNDLFNBQWxDLENBQTJDO0FBQ3ZDQyxRQUFNLEdBQUU7QUFDSixXQUNJLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKO0FBR0g7O0FBTHNDOztBQVE1QkgsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy90b2tlbkNhbGxiYWNrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGZXN0aXZTcG90aWZ5VXNlclRva2VuIGZyb20gJy4uL2NvbXBvbmVudHMvRmVzdGl2U3BvdGlmeVVzZXJUb2tlbic7XG5cbmNsYXNzIFRva2VuQ2FsbGJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxGZXN0aXZTcG90aWZ5VXNlclRva2VuIC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuQ2FsbGJhY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tokenCallback.js\n");

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./pages/tokenCallback.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raysosseh/Documents/projects/festiv/pages/tokenCallback.js */"./pages/tokenCallback.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
webpackHotUpdate("static/development/pages/tokenCallback.js",{

/***/ "./components/FestivSpotifyUserToken.js":
/*!**********************************************!*\
  !*** ./components/FestivSpotifyUserToken.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/raysosseh/Documents/projects/festiv/components/FestivSpotifyUserToken.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n //landing page for spotify api user token generation\n//pings main app w user token on redirect.\n\nvar FestivSpotifyUserToken = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(FestivSpotifyUserToken, _Component);\n\n  var _super = _createSuper(FestivSpotifyUserToken);\n\n  function FestivSpotifyUserToken() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, FestivSpotifyUserToken);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(FestivSpotifyUserToken, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (window.opener) {\n        console.log(window.location.href.split('?code=')[1]);\n        window.opener.postMessage(window.location.hash.substring(1), \"*\"); // window.close()\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 4\n        }\n      });\n    }\n  }]);\n\n  return FestivSpotifyUserToken;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FestivSpotifyUserToken);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zlc3RpdlNwb3RpZnlVc2VyVG9rZW4uanM/ODE5MiJdLCJuYW1lcyI6WyJGZXN0aXZTcG90aWZ5VXNlclRva2VuIiwid2luZG93Iiwib3BlbmVyIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwicG9zdE1lc3NhZ2UiLCJoYXNoIiwic3Vic3RyaW5nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUdBO0FBQ0E7O0lBQ01BLHNCOzs7Ozs7Ozs7Ozs7O3dDQUNpQjtBQUNmLFVBQUdDLE1BQU0sQ0FBQ0MsTUFBVixFQUFpQjtBQUNiQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkIsUUFBM0IsRUFBcUMsQ0FBckMsQ0FBWjtBQUNBTixjQUFNLENBQUNDLE1BQVAsQ0FBY00sV0FBZCxDQUEwQlAsTUFBTSxDQUFDSSxRQUFQLENBQWdCSSxJQUFoQixDQUFxQkMsU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBMUIsRUFBNkQsR0FBN0QsRUFGYSxDQUdiO0FBQ0g7QUFDSjs7OzZCQUNJO0FBQ1AsYUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFHQTs7OztFQVptQ0MsK0M7O0FBZXRCWCxxRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmVzdGl2U3BvdGlmeVVzZXJUb2tlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cblxuLy9sYW5kaW5nIHBhZ2UgZm9yIHNwb3RpZnkgYXBpIHVzZXIgdG9rZW4gZ2VuZXJhdGlvblxuLy9waW5ncyBtYWluIGFwcCB3IHVzZXIgdG9rZW4gb24gcmVkaXJlY3QuXG5jbGFzcyBGZXN0aXZTcG90aWZ5VXNlclRva2VuIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGlmKHdpbmRvdy5vcGVuZXIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz9jb2RlPScpWzFdKTtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuZXIucG9zdE1lc3NhZ2Uod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpLCBcIipcIilcbiAgICAgICAgICAgIC8vIHdpbmRvdy5jbG9zZSgpXG4gICAgICAgIH1cbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZXN0aXZTcG90aWZ5VXNlclRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FestivSpotifyUserToken.js\n");

/***/ })

})
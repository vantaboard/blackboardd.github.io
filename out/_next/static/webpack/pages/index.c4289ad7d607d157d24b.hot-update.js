webpackHotUpdate_N_E("pages/index",{

/***/ "./styles/hero.ts":
/*!************************!*\
  !*** ./styles/hero.ts ***!
  \************************/
/*! exports provided: Content, Wrapper, Welcome, Tagline, HeroBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome", function() { return Welcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tagline", function() { return Tagline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroBox", function() { return HeroBox; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _public_images_background_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/background.jpg */ "./public/images/background.jpg");
/* harmony import */ var _public_images_background_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_background_jpg__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;




var Content = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n"])));
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  scroll-behavior: smooth;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: -10px;\n    right: -8px;\n    left: -8px;\n    bottom: 0;\n    background-image: url(", ");\n    background-size: cover;\n    background-position: top center;\n    opacity: 0.25;\n}\n  }\n"])), _public_images_background_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
var Welcome = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Typography"])(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 2rem;\n  text-align: center;\n  line-height: 1.3;\n  @media (max-width: 1000px) {\n    font-size: 1.5rem;\n  }\n"])));
var Tagline = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Typography"])(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-transform: uppercase;\n  font-size: 1.3rem;\n  @media (max-width: 1000px) {\n    padding-top: 2.5em;\n    font-size: 1rem;\n  }\n"])));
var HeroBox = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Box"])(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  @media (max-width: 768px) {\n    padding-top: 2rem;\n    padding-bottom: 3rem;\n  }\n\n  @media (min-width: 768px) {\n    padding-top: 2rem;\n    padding-bottom: 0rem;\n  }\n\n  flex-direction: row;\n  @media (max-width: 1000px) {\n    flex-direction: column;\n  }\n"])));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2hlcm8udHMiXSwibmFtZXMiOlsiQ29udGVudCIsInN0eWxlZCIsImRpdiIsIldyYXBwZXIiLCJiYWNrZ3JvdW5kIiwiV2VsY29tZSIsIlR5cG9ncmFwaHkiLCJUYWdsaW5lIiwiSGVyb0JveCIsIkJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVix3S0FBYjtBQUlBLElBQU1DLE9BQU8sR0FBR0YsdURBQU0sQ0FBQ0MsR0FBViw4Z0JBY1FFLG9FQWRSLENBQWI7QUFzQkEsSUFBTUMsT0FBTyxHQUFHSiwrREFBTSxDQUFDSyx3REFBRCxDQUFULGdSQUFiO0FBU0EsSUFBTUMsT0FBTyxHQUFHTiwrREFBTSxDQUFDSyx3REFBRCxDQUFULDJSQUFiO0FBU0EsSUFBTUUsT0FBTyxHQUFHUCwrREFBTSxDQUFDUSxpREFBRCxDQUFULDZlQUFiIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM0Mjg5YWQ3ZDYwN2QxNTdkMjRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2JhY2tncm91bmQuanBnJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgbGVmdDogLThweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2JhY2tncm91bmR9KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC4yNTtcclxufVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBXZWxjb21lID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnbGluZSA9IHN0eWxlZChUeXBvZ3JhcGh5KWBcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0JveCA9IHN0eWxlZChCb3gpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./styles/project.ts":
/*!***************************!*\
  !*** ./styles/project.ts ***!
  \***************************/
/*! exports provided: Wrapper, ImgWrapper, ItemHeader, ItemWrapper, ShowcaseHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrapper", function() { return ImgWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemHeader", function() { return ItemHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseHeader", function() { return ShowcaseHeader; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;



var Wrapper = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Box"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transition: margin-top 0.2s ease-in-out;\n  transition: margin-left 0.2s ease-in-out;\n\n  padding-left: 1.5rem;\n  padding-bottom: 1.85rem;\n  border-left: 1px solid #beb4b4;\n\n  &:before {\n    transition: top 0.2s ease-in-out;\n\n    content: '';\n    left: -31px;\n    position: relative; /*makes left effective*/\n    display: table-cell;\n    top: 16px;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    border: 1px solid #949494;\n    background-color: #fff;\n  }\n\n  @media (min-width: 1500px) {\n    margin-top: 3.5rem;\n    margin-left: 3.5rem;\n    &:before {\n      top: 50px;\n    }\n  }\n"])));
var ImgWrapper = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Box"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  -webkit-mask-image: linear-gradient(to top, transparent 2%, black 15%);\n  mask-image: linear-gradient(to top, transparent 2%, black 15%);\n\n  @media (max-width: 1500px) {\n    margin-bottom: -3rem;\n  }\n  @media (min-width: 1500px) {\n    margin-top: -3rem;\n  }\n  padding-left: calc(1.5rem + (25vw - 768px) * 0.25);\n  padding-right: 0.5rem;\n"])));
var ItemHeader = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Typography"])(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transition: text-align 0.2s ease-in-out;\n  transition: font-size 0.2s ease-in-out;\n  transition: margin-top 0.2s ease-in-out;\n  transition: margin-bottom 0.2s ease-in-out;\n\n  color: #575757;\n  font-weight: bold;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 1.2rem;\n  margin-left: -0.45rem;\n\n  @media (min-width: 1500px) {\n    text-align: center;\n    font-size: 1.5rem;\n    margin-top: -9rem;\n    margin-bottom: 1rem;\n  }\n"])));
var ItemWrapper = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Box"])(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
var ShowcaseHeader = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Typography"])(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transition: margin-top 0.2s ease-in-out;\n  transition: margin-left 0.2s ease-in-out;\n\n  color: #949494;\n  font-weight: bold;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  padding-bottom: 0.5rem;\n\n  @media (min-width: 1500px) {\n    margin-top: 2rem;\n    margin-left: -9rem;\n  }\n"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2plY3QudHMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsIkJveCIsIkltZ1dyYXBwZXIiLCJJdGVtSGVhZGVyIiwiVHlwb2dyYXBoeSIsIkl0ZW1XcmFwcGVyIiwiU2hvd2Nhc2VIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MsK0RBQU0sQ0FBQ0MsaURBQUQsQ0FBVCxnd0JBQWI7QUFnQ0EsSUFBTUMsVUFBVSxHQUFHRiwrREFBTSxDQUFDQyxpREFBRCxDQUFULGlmQUFoQjtBQWNBLElBQU1FLFVBQVUsR0FBR0gsK0RBQU0sQ0FBQ0ksd0RBQUQsQ0FBVCw2bEJBQWhCO0FBcUJBLElBQU1DLFdBQVcsR0FBR0wsK0RBQU0sQ0FBQ0MsaURBQUQsQ0FBVCxxTkFBakI7QUFNQSxJQUFNSyxjQUFjLEdBQUdOLCtEQUFNLENBQUNJLHdEQUFELENBQVQsOGJBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcxOWVhMzE2OTJjNjkzMGJkZWEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoQm94KWBcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuODVyZW07XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYmViNGI0O1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGxlZnQ6IC0zMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKm1ha2VzIGxlZnQgZWZmZWN0aXZlKi9cclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NDk0OTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkKEJveClgXHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAyJSwgYmxhY2sgMTUlKTtcclxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAyJSwgYmxhY2sgMTUlKTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IC0zcmVtO1xyXG4gIH1cclxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS41cmVtICsgKDI1dncgLSA3NjhweCkgKiAwLjI1KTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbUhlYWRlciA9IHN0eWxlZChUeXBvZ3JhcGh5KWBcclxuICB0cmFuc2l0aW9uOiB0ZXh0LWFsaWduIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1ib3R0b20gMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgY29sb3I6ICM1NzU3NTc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMC40NXJlbTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAtOXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1XcmFwcGVyID0gc3R5bGVkKEJveClgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd2Nhc2VIZWFkZXIgPSBzdHlsZWQoVHlwb2dyYXBoeSlgXHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIGNvbG9yOiAjOTQ5NDk0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTlyZW07XHJcbiAgfVxyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
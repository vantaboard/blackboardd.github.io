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
var ImgWrapper = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Box"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  -webkit-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -webkit-mask-image: linear-gradient(to top, transparent 2%, black 25%);\n  mask-image: linear-gradient(to top, transparent 2%, black 25%);\n\n  @media (max-width: 1500px) {\n    margin-bottom: -3rem;\n  }\n  @media (min-width: 1500px) {\n    margin-top: -3rem;\n  }\n  padding-left: calc(1.5rem + (25vw - 768px) * 0.25);\n  padding-right: 0.5rem;\n"])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2plY3QudHMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsIkJveCIsIkltZ1dyYXBwZXIiLCJJdGVtSGVhZGVyIiwiVHlwb2dyYXBoeSIsIkl0ZW1XcmFwcGVyIiwiU2hvd2Nhc2VIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MsK0RBQU0sQ0FBQ0MsaURBQUQsQ0FBVCxnd0JBQWI7QUFnQ0EsSUFBTUMsVUFBVSxHQUFHRiwrREFBTSxDQUFDQyxpREFBRCxDQUFULGlqQkFBaEI7QUFnQkEsSUFBTUUsVUFBVSxHQUFHSCwrREFBTSxDQUFDSSx3REFBRCxDQUFULDZsQkFBaEI7QUFxQkEsSUFBTUMsV0FBVyxHQUFHTCwrREFBTSxDQUFDQyxpREFBRCxDQUFULHFOQUFqQjtBQU1BLElBQU1LLGNBQWMsR0FBR04sK0RBQU0sQ0FBQ0ksd0RBQUQsQ0FBVCw4YkFBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmNhMTcxYzE3OWUxNjI3NmI2M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZChCb3gpYFxyXG4gIHRyYW5zaXRpb246IG1hcmdpbi10b3AgMC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS44NXJlbTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZWI0YjQ7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgbGVmdDogLTMxcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qbWFrZXMgbGVmdCBlZmZlY3RpdmUqL1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk0OTQ5NDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB0b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQoQm94KWBcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMiUsIGJsYWNrIDI1JSk7XHJcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMiUsIGJsYWNrIDI1JSk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3JlbTtcclxuICB9XHJcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuNXJlbSArICgyNXZ3IC0gNzY4cHgpICogMC4yNSk7XHJcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1IZWFkZXIgPSBzdHlsZWQoVHlwb2dyYXBoeSlgXHJcbiAgdHJhbnNpdGlvbjogdGV4dC1hbGlnbiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi10b3AgMC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tYm90dG9tIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIGNvbG9yOiAjNTc1NzU3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW4tbGVmdDogLTAuNDVyZW07XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTlyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtV3JhcHBlciA9IHN0eWxlZChCb3gpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3djYXNlSGVhZGVyID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxyXG4gIHRyYW5zaXRpb246IG1hcmdpbi10b3AgMC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBjb2xvcjogIzk0OTQ5NDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC05cmVtO1xyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
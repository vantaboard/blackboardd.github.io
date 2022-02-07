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
var ImgWrapper = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Box"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  -webkit-border-radius: 10px;\n  -webkit-mask-image: linear-gradient(to top, transparent 2%, black 25%);\n  mask-image: linear-gradient(to top, transparent 2%, black 25%);\n\n  @media (max-width: 1500px) {\n    margin-bottom: -3rem;\n  }\n  @media (min-width: 1500px) {\n    margin-top: -3rem;\n  }\n  padding-left: calc(1.5rem + (25vw - 768px) * 0.25);\n  padding-right: 0.5rem;\n"])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2plY3QudHMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsIkJveCIsIkltZ1dyYXBwZXIiLCJJdGVtSGVhZGVyIiwiVHlwb2dyYXBoeSIsIkl0ZW1XcmFwcGVyIiwiU2hvd2Nhc2VIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MsK0RBQU0sQ0FBQ0MsaURBQUQsQ0FBVCxnd0JBQWI7QUFnQ0EsSUFBTUMsVUFBVSxHQUFHRiwrREFBTSxDQUFDQyxpREFBRCxDQUFULGloQkFBaEI7QUFlQSxJQUFNRSxVQUFVLEdBQUdILCtEQUFNLENBQUNJLHdEQUFELENBQVQsNmxCQUFoQjtBQXFCQSxJQUFNQyxXQUFXLEdBQUdMLCtEQUFNLENBQUNDLGlEQUFELENBQVQscU5BQWpCO0FBTUEsSUFBTUssY0FBYyxHQUFHTiwrREFBTSxDQUFDSSx3REFBRCxDQUFULDhiQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mODkxNmJjNGNmYmZhNzllMjRlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkKEJveClgXHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjg1cmVtO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2JlYjRiNDtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBsZWZ0OiAtMzFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyptYWtlcyBsZWZ0IGVmZmVjdGl2ZSovXHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTQ5NDk0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRvcDogNTBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZChCb3gpYFxyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDIlLCBibGFjayAyNSUpO1xyXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDIlLCBibGFjayAyNSUpO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogLTNyZW07XHJcbiAgfVxyXG4gIHBhZGRpbmctbGVmdDogY2FsYygxLjVyZW0gKyAoMjV2dyAtIDc2OHB4KSAqIDAuMjUpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtSGVhZGVyID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxyXG4gIHRyYW5zaXRpb246IHRleHQtYWxpZ24gMC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWJvdHRvbSAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBjb2xvcjogIzU3NTc1NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0wLjQ1cmVtO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IC05cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbVdyYXBwZXIgPSBzdHlsZWQoQm94KWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93Y2FzZUhlYWRlciA9IHN0eWxlZChUeXBvZ3JhcGh5KWBcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOXJlbTtcclxuICB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["Alerting feature toggle page"],{

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavModel": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/alerting/FeatureTogglePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeatureTogglePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;






function FeatureTogglePage() {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_2__.useNavModel)('alert-list');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        children: "Alerting is not enabled"
      }), "To enable alerting, enable it in the Grafana config:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("pre", {
          children: `[unified_alerting]
enable = true
`
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["For legacy alerting", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("pre", {
          children: `[alerting]
enable = true
`
        })]
      })]
    }))
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRpbmcgZmVhdHVyZSB0b2dnbGUgcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR08sTUFBTUUsV0FBVyxHQUFJQyxFQUFELElBQTBCO0FBQ25ELFFBQU1DLFFBQVEsR0FBR0osd0RBQVcsQ0FBRUssS0FBRCxJQUF1QkEsS0FBSyxDQUFDRCxRQUE5QixDQUE1QjtBQUNBLFNBQU9ILGdFQUFXLENBQUNHLFFBQUQsRUFBV0QsRUFBWCxDQUFsQjtBQUNELENBSE07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFA7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSyxpQkFBVCxHQUE2QjtBQUMxQyxRQUFNQyxRQUFRLEdBQUdQLHVFQUFXLENBQUMsWUFBRCxDQUE1QjtBQUVBLHNCQUNFLHVEQUFDLHFFQUFEO0FBQU0sWUFBUSxFQUFFTyxRQUFoQjtBQUFBLCtEQUNFLHdEQUFDLDhFQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBLFFBREYsdUVBR0U7QUFBQSwrQkFDRTtBQUFBLG9CQUNJO0FBQ2Q7QUFDQTtBQUhVO0FBREYsUUFIRixlQVVFO0FBQUEsdURBRUU7QUFBQSxvQkFDSTtBQUNkO0FBQ0E7QUFIVSxVQUZGO0FBQUEsUUFWRjtBQUFBLE1BREY7QUFBQSxJQURGO0FBdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9ob29rcy91c2VOYXZNb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9GZWF0dXJlVG9nZ2xlUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCB1c2VOYXZNb2RlbCA9IChpZDogc3RyaW5nKTogTmF2TW9kZWwgPT4ge1xuICBjb25zdCBuYXZJbmRleCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpO1xuICByZXR1cm4gZ2V0TmF2TW9kZWwobmF2SW5kZXgsIGlkKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgdXNlTmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VOYXZNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVUb2dnbGVQYWdlKCkge1xuICBjb25zdCBuYXZNb2RlbCA9IHVzZU5hdk1vZGVsKCdhbGVydC1saXN0Jyk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxoMT5BbGVydGluZyBpcyBub3QgZW5hYmxlZDwvaDE+XG4gICAgICAgIFRvIGVuYWJsZSBhbGVydGluZywgZW5hYmxlIGl0IGluIHRoZSBHcmFmYW5hIGNvbmZpZzpcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAge2BbdW5pZmllZF9hbGVydGluZ11cbmVuYWJsZSA9IHRydWVcbmB9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIEZvciBsZWdhY3kgYWxlcnRpbmdcbiAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAge2BbYWxlcnRpbmddXG5lbmFibGUgPSB0cnVlXG5gfVxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJnZXROYXZNb2RlbCIsInVzZU5hdk1vZGVsIiwiaWQiLCJuYXZJbmRleCIsInN0YXRlIiwiUmVhY3QiLCJQYWdlIiwiRmVhdHVyZVRvZ2dsZVBhZ2UiLCJuYXZNb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=
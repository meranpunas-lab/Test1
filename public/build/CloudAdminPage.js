"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["CloudAdminPage"],{

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

/***/ "./public/app/features/live/pages/CloudAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudAdminPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function CloudAdminPage() {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_4__.useNavModel)('live-cloud');
  const [cloud, setCloud] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`api/live/write-configs`).then(data => {
      setCloud(data.writeConfigs);
    }).catch(e => {
      if (e.data) {
        setError(JSON.stringify(e.data, null, 2));
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
        children: error
      }), !cloud && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: "Loading cloud definitions"
      }), cloud && cloud.map(v => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            children: v.uid
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
            className: styles.row,
            children: JSON.stringify(v.settings, null, 2)
          })]
        }, v.uid);
      })]
    })
  });
}

const getStyles = theme => {
  return {
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_5__.css`
      cursor: pointer;
    `
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRBZG1pblBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdPLE1BQU1FLFdBQVcsR0FBSUMsRUFBRCxJQUEwQjtBQUNuRCxRQUFNQyxRQUFRLEdBQUdKLHdEQUFXLENBQUVLLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ0QsUUFBOUIsQ0FBNUI7QUFDQSxTQUFPSCxnRUFBVyxDQUFDRyxRQUFELEVBQVdELEVBQVgsQ0FBbEI7QUFDRCxDQUhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJZSxTQUFTVSxjQUFULEdBQTBCO0FBQ3ZDLFFBQU1DLFFBQVEsR0FBR1osdUVBQVcsQ0FBQyxZQUFELENBQTVCO0FBQ0EsUUFBTSxDQUFDYSxLQUFELEVBQVFDLFFBQVIsSUFBb0JSLCtDQUFRLENBQXdCLEVBQXhCLENBQWxDO0FBQ0EsUUFBTSxDQUFDUyxLQUFELEVBQVFDLFFBQVIsSUFBb0JWLCtDQUFRLEVBQWxDO0FBQ0EsUUFBTVcsTUFBTSxHQUFHVCxzREFBUyxDQUFDVSxTQUFELENBQXhCO0FBRUFiLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkRSxJQUFBQSwrREFBYSxHQUNWWSxHQURILENBQ1Esd0JBRFIsRUFFR0MsSUFGSCxDQUVTQyxJQUFELElBQVU7QUFDZFAsTUFBQUEsUUFBUSxDQUFDTyxJQUFJLENBQUNDLFlBQU4sQ0FBUjtBQUNELEtBSkgsRUFLR0MsS0FMSCxDQUtVQyxDQUFELElBQU87QUFDWixVQUFJQSxDQUFDLENBQUNILElBQU4sRUFBWTtBQUNWTCxRQUFBQSxRQUFRLENBQUNTLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixDQUFDLENBQUNILElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCLENBQUQsQ0FBUjtBQUNEO0FBQ0YsS0FUSDtBQVVELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxzQkFDRSx1REFBQyxxRUFBRDtBQUFNLFlBQVEsRUFBRVQsUUFBaEI7QUFBQSwyQkFDRSx3REFBQyw4RUFBRDtBQUFBLGlCQUNHRyxLQUFLLGlCQUFJO0FBQUEsa0JBQU1BO0FBQU4sUUFEWixFQUVHLENBQUNGLEtBQUQsaUJBQVU7QUFBQTtBQUFBLFFBRmIsRUFHR0EsS0FBSyxJQUNKQSxLQUFLLENBQUNjLEdBQU4sQ0FBV0MsQ0FBRCxJQUFPO0FBQ2YsNEJBQ0U7QUFBQSxrQ0FDRTtBQUFBLHNCQUFLQSxDQUFDLENBQUNDO0FBQVAsWUFERixlQUVFO0FBQUsscUJBQVMsRUFBRVosTUFBTSxDQUFDYSxHQUF2QjtBQUFBLHNCQUE2QkwsSUFBSSxDQUFDQyxTQUFMLENBQWVFLENBQUMsQ0FBQ0csUUFBakIsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakM7QUFBN0IsWUFGRjtBQUFBLFdBQVVILENBQUMsQ0FBQ0MsR0FBWixDQURGO0FBTUQsT0FQRCxDQUpKO0FBQUE7QUFERixJQURGO0FBaUJEOztBQUVELE1BQU1YLFNBQVMsR0FBSWMsS0FBRCxJQUF5QjtBQUN6QyxTQUFPO0FBQ0xGLElBQUFBLEdBQUcsRUFBRXBCLDZDQUFJO0FBQ2I7QUFDQTtBQUhTLEdBQVA7QUFLRCxDQU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9ob29rcy91c2VOYXZNb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saXZlL3BhZ2VzL0Nsb3VkQWRtaW5QYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IHVzZU5hdk1vZGVsID0gKGlkOiBzdHJpbmcpOiBOYXZNb2RlbCA9PiB7XG4gIGNvbnN0IG5hdkluZGV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCk7XG4gIHJldHVybiBnZXROYXZNb2RlbChuYXZJbmRleCwgaWQpO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgdXNlTmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VOYXZNb2RlbCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBHcmFmYW5hQ2xvdWRCYWNrZW5kIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkQWRtaW5QYWdlKCkge1xuICBjb25zdCBuYXZNb2RlbCA9IHVzZU5hdk1vZGVsKCdsaXZlLWNsb3VkJyk7XG4gIGNvbnN0IFtjbG91ZCwgc2V0Q2xvdWRdID0gdXNlU3RhdGU8R3JhZmFuYUNsb3VkQmFja2VuZFtdPihbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmdldChgYXBpL2xpdmUvd3JpdGUtY29uZmlnc2ApXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDbG91ZChkYXRhLndyaXRlQ29uZmlncyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmRhdGEpIHtcbiAgICAgICAgICBzZXRFcnJvcihKU09OLnN0cmluZ2lmeShlLmRhdGEsIG51bGwsIDIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAge2Vycm9yICYmIDxwcmU+e2Vycm9yfTwvcHJlPn1cbiAgICAgICAgeyFjbG91ZCAmJiA8PkxvYWRpbmcgY2xvdWQgZGVmaW5pdGlvbnM8Lz59XG4gICAgICAgIHtjbG91ZCAmJlxuICAgICAgICAgIGNsb3VkLm1hcCgodikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3YudWlkfT5cbiAgICAgICAgICAgICAgICA8aDI+e3YudWlkfTwvaDI+XG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PntKU09OLnN0cmluZ2lmeSh2LnNldHRpbmdzLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3c6IGNzc2BcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsImdldE5hdk1vZGVsIiwidXNlTmF2TW9kZWwiLCJpZCIsIm5hdkluZGV4Iiwic3RhdGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QmFja2VuZFNydiIsInVzZVN0eWxlcyIsIlBhZ2UiLCJjc3MiLCJDbG91ZEFkbWluUGFnZSIsIm5hdk1vZGVsIiwiY2xvdWQiLCJzZXRDbG91ZCIsImVycm9yIiwic2V0RXJyb3IiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsIndyaXRlQ29uZmlncyIsImNhdGNoIiwiZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXAiLCJ2IiwidWlkIiwicm93Iiwic2V0dGluZ3MiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=
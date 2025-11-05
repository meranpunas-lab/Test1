"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServiceAccountCreatePage"],{

/***/ "./public/app/features/serviceaccounts/ServiceAccountCreatePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Button;












const createServiceAccount = async sa => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/serviceaccounts/', sa);

const ServiceAccountCreatePage = ({
  navModel
}) => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data => {
    await createServiceAccount(data);
    history.push('/org/serviceaccounts/');
  }, [history]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
        children: "Create service account"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: onSubmit,
        validateOn: "onBlur",
        children: ({
          register,
          errors
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Display name",
              required: true,
              invalid: !!errors.name,
              error: errors.name ? 'Display name is required' : undefined,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "display-name-input"
              }, register('name', {
                required: true
              })))
            }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              children: "Create"
            }))]
          });
        }
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, 'serviceaccounts')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ServiceAccountCreatePage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZUFjY291bnRDcmVhdGVQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBU0EsTUFBTVcsb0JBQW9CLEdBQUcsTUFBT0MsRUFBUCxJQUFpQ0wsK0RBQWEsR0FBR00sSUFBaEIsQ0FBcUIsdUJBQXJCLEVBQThDRCxFQUE5QyxDQUE5RDs7QUFFQSxNQUFNRSx3QkFBaUUsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUMxRixRQUFNQyxPQUFPLEdBQUdOLDREQUFVLEVBQTFCO0FBRUEsUUFBTU8sUUFBUSxHQUFHaEIsa0RBQVcsQ0FDMUIsTUFBT2lCLElBQVAsSUFBbUM7QUFDakMsVUFBTVAsb0JBQW9CLENBQUNPLElBQUQsQ0FBMUI7QUFDQUYsSUFBQUEsT0FBTyxDQUFDRyxJQUFSLENBQWEsdUJBQWI7QUFDRCxHQUp5QixFQUsxQixDQUFDSCxPQUFELENBTDBCLENBQTVCO0FBUUEsc0JBQ0UsdURBQUMscUVBQUQ7QUFBTSxZQUFRLEVBQUVELFFBQWhCO0FBQUEsMkJBQ0Usd0RBQUMsOEVBQUQ7QUFBQSwwQ0FDRTtBQUFBO0FBQUEsUUFERixnQkFFRSx1REFBQyw2Q0FBRDtBQUFNLGdCQUFRLEVBQUVFLFFBQWhCO0FBQTBCLGtCQUFVLEVBQUMsUUFBckM7QUFBQSxrQkFDRyxDQUFDO0FBQUVHLFVBQUFBLFFBQUY7QUFBWUMsVUFBQUE7QUFBWixTQUFELEtBQTBCO0FBQ3pCLDhCQUNFO0FBQUEsb0NBQ0UsdURBQUMsOENBQUQ7QUFDRSxtQkFBSyxFQUFDLGNBRFI7QUFFRSxzQkFBUSxNQUZWO0FBR0UscUJBQU8sRUFBRSxDQUFDLENBQUNBLE1BQU0sQ0FBQ0MsSUFIcEI7QUFJRSxtQkFBSyxFQUFFRCxNQUFNLENBQUNDLElBQVAsR0FBYywwQkFBZCxHQUEyQ0MsU0FKcEQ7QUFBQSxxQ0FNRSx1REFBQyw4Q0FBRDtBQUFPLGtCQUFFLEVBQUM7QUFBVixpQkFBbUNILFFBQVEsQ0FBQyxNQUFELEVBQVM7QUFBRUksZ0JBQUFBLFFBQVEsRUFBRTtBQUFaLGVBQVQsQ0FBM0M7QUFORixjQURGLHFDQVNFLHVEQUFDLCtDQUFEO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQSxjQVRGO0FBQUEsWUFERjtBQWFEO0FBZkgsUUFGRjtBQUFBO0FBREYsSUFERjtBQXdCRCxDQW5DRDs7QUFxQ0EsTUFBTUMsZUFBZSxHQUFJQyxLQUFELEtBQXdCO0FBQzlDWCxFQUFBQSxRQUFRLEVBQUVQLHFFQUFXLENBQUNrQixLQUFLLENBQUNDLFFBQVAsRUFBaUIsaUJBQWpCO0FBRHlCLENBQXhCLENBQXhCOztBQUlBLGlFQUFlekIsb0RBQU8sQ0FBQ3VCLGVBQUQsQ0FBUCxDQUF5Qlgsd0JBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZXJ2aWNlYWNjb3VudHMvU2VydmljZUFjY291bnRDcmVhdGVQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgRmllbGQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbnRlcmZhY2UgU2VydmljZUFjY291bnRDcmVhdGVQYWdlUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5pbnRlcmZhY2UgU2VydmljZUFjY291bnREVE8ge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGNyZWF0ZVNlcnZpY2VBY2NvdW50ID0gYXN5bmMgKHNhOiBTZXJ2aWNlQWNjb3VudERUTykgPT4gZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvc2VydmljZWFjY291bnRzLycsIHNhKTtcblxuY29uc3QgU2VydmljZUFjY291bnRDcmVhdGVQYWdlOiBSZWFjdC5GQzxTZXJ2aWNlQWNjb3VudENyZWF0ZVBhZ2VQcm9wcz4gPSAoeyBuYXZNb2RlbCB9KSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZGF0YTogU2VydmljZUFjY291bnREVE8pID0+IHtcbiAgICAgIGF3YWl0IGNyZWF0ZVNlcnZpY2VBY2NvdW50KGRhdGEpO1xuICAgICAgaGlzdG9yeS5wdXNoKCcvb3JnL3NlcnZpY2VhY2NvdW50cy8nKTtcbiAgICB9LFxuICAgIFtoaXN0b3J5XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8aDE+Q3JlYXRlIHNlcnZpY2UgYWNjb3VudDwvaDE+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gdmFsaWRhdGVPbj1cIm9uQmx1clwiPlxuICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc3BsYXkgbmFtZVwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubmFtZSA/ICdEaXNwbGF5IG5hbWUgaXMgcmVxdWlyZWQnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cImRpc3BsYXktbmFtZS1pbnB1dFwiIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3NlcnZpY2VhY2NvdW50cycpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZXJ2aWNlQWNjb3VudENyZWF0ZVBhZ2UpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJjb25uZWN0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiRmllbGQiLCJnZXRCYWNrZW5kU3J2IiwiZ2V0TmF2TW9kZWwiLCJQYWdlIiwidXNlSGlzdG9yeSIsImNyZWF0ZVNlcnZpY2VBY2NvdW50Iiwic2EiLCJwb3N0IiwiU2VydmljZUFjY291bnRDcmVhdGVQYWdlIiwibmF2TW9kZWwiLCJoaXN0b3J5Iiwib25TdWJtaXQiLCJkYXRhIiwicHVzaCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwibmFtZSIsInVuZGVmaW5lZCIsInJlcXVpcmVkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=
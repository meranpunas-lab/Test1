"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserCreatePage"],{

/***/ "./public/app/features/admin/UserCreatePage.tsx":
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












const createUser = async user => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/admin/users', user);

const UserCreatePage = ({
  navModel
}) => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data => {
    await createUser(data);
    history.push('/admin/users');
  }, [history]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
        children: "Add new user"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: onSubmit,
        validateOn: "onBlur",
        children: ({
          register,
          errors
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Name",
              required: true,
              invalid: !!errors.name,
              error: errors.name ? 'Name is required' : undefined,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "name-input"
              }, register('name', {
                required: true
              })))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Email",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "email-input"
              }, register('email')))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Username",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "username-input"
              }, register('login')))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Password",
              required: true,
              invalid: !!errors.password,
              error: errors.password ? 'Password is required and must contain at least 4 characters' : undefined,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "password-input"
              }, register('password', {
                validate: value => value.trim() !== '' && value.length >= 4
              }), {
                type: "password"
              }))
            }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              children: "Create user"
            }))]
          });
        }
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, 'global-users')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(UserCreatePage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXhCLENBQXhCOztBQUlBLGlFQUFlOUIsb0RBQU8sQ0FBQzRCLGVBQUQsQ0FBUCxDQUF5QmhCLGNBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9Vc2VyQ3JlYXRlUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW50ZXJmYWNlIFVzZXJDcmVhdGVQYWdlUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5pbnRlcmZhY2UgVXNlckRUTyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIGxvZ2luPzogc3RyaW5nO1xufVxuXG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHVzZXI6IFVzZXJEVE8pID0+IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FkbWluL3VzZXJzJywgdXNlcik7XG5cbmNvbnN0IFVzZXJDcmVhdGVQYWdlOiBSZWFjdC5GQzxVc2VyQ3JlYXRlUGFnZVByb3BzPiA9ICh7IG5hdk1vZGVsIH0pID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChkYXRhOiBVc2VyRFRPKSA9PiB7XG4gICAgICBhd2FpdCBjcmVhdGVVc2VyKGRhdGEpO1xuICAgICAgaGlzdG9yeS5wdXNoKCcvYWRtaW4vdXNlcnMnKTtcbiAgICB9LFxuICAgIFtoaXN0b3J5XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8aDE+QWRkIG5ldyB1c2VyPC9oMT5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSB2YWxpZGF0ZU9uPVwib25CbHVyXCI+XG4gICAgICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubmFtZSA/ICdOYW1lIGlzIHJlcXVpcmVkJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJuYW1lLWlucHV0XCIgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiRW1haWxcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cImVtYWlsLWlucHV0XCIgey4uLnJlZ2lzdGVyKCdlbWFpbCcpfSAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJVc2VybmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwidXNlcm5hbWUtaW5wdXRcIiB7Li4ucmVnaXN0ZXIoJ2xvZ2luJyl9IC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5wYXNzd29yZCA/ICdQYXNzd29yZCBpcyByZXF1aXJlZCBhbmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDQgY2hhcmFjdGVycycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IHZhbHVlLnRyaW0oKSAhPT0gJycgJiYgdmFsdWUubGVuZ3RoID49IDQsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSB1c2VyPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdnbG9iYWwtdXNlcnMnKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVXNlckNyZWF0ZVBhZ2UpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJjb25uZWN0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiRmllbGQiLCJnZXRCYWNrZW5kU3J2IiwiZ2V0TmF2TW9kZWwiLCJQYWdlIiwidXNlSGlzdG9yeSIsImNyZWF0ZVVzZXIiLCJ1c2VyIiwicG9zdCIsIlVzZXJDcmVhdGVQYWdlIiwibmF2TW9kZWwiLCJoaXN0b3J5Iiwib25TdWJtaXQiLCJkYXRhIiwicHVzaCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwibmFtZSIsInVuZGVmaW5lZCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJ2YWxpZGF0ZSIsInZhbHVlIiwidHJpbSIsImxlbmd0aCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiXSwic291cmNlUm9vdCI6IiJ9
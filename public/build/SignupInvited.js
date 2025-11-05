"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SignupInvited"],{

/***/ "./public/app/features/invites/SignupInvited.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupInvitedPage": () => (/* binding */ SignupInvitedPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _Button;











const navModel = {
  main: {
    icon: 'grafana',
    text: 'Invite',
    subTitle: 'Register your Grafana account',
    breadcrumbs: [{
      title: 'Login',
      url: 'login'
    }]
  },
  node: {
    text: ''
  }
};
const SignupInvitedPage = ({
  match
}) => {
  const code = match.params.code;
  const [initFormModel, setInitFormModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [greeting, setGreeting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [invitedBy, setInvitedBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(async () => {
    const invite = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/user/invite/${code}`);
    setInitFormModel({
      email: invite.email,
      name: invite.name,
      username: invite.email
    });
    setGreeting(invite.name || invite.email || invite.username);
    setInvitedBy(invite.invitedBy);
  }, [code]);

  const onSubmit = async formData => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post('/api/user/invite/complete', Object.assign({}, formData, {
      inviteCode: code
    }));
    window.location.href = (0,app_core_config__WEBPACK_IMPORTED_MODULE_5__.getConfig)().appSubUrl + '/';
  };

  if (!initFormModel) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
        className: "page-sub-heading",
        children: ["Hello ", greeting || 'there', "."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "modal-tagline p-b-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("em", {
          children: invitedBy || 'Someone'
        }), " has invited you to join Grafana and the organization", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "highlight-word",
          children: app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.user.orgName
        }), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), "Please complete the following and choose a password to accept your invitation and continue:"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        defaultValues: initFormModel,
        onSubmit: onSubmit,
        children: ({
          register,
          errors
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.email,
            error: errors.email && errors.email.message,
            label: "Email",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
              placeholder: "email@example.com"
            }, register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/,
                message: 'Email is invalid'
              }
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.name,
            error: errors.name && errors.name.message,
            label: "Name",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
              placeholder: "Name (optional)"
            }, register('name')))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.username,
            error: errors.username && errors.username.message,
            label: "Username",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('username', {
              required: 'Username is required'
            }), {
              placeholder: "Username"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.password,
            error: errors.password && errors.password.message,
            label: "Password",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('password', {
              required: 'Password is required'
            }), {
              type: "password",
              placeholder: "Password"
            }))
          }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Sign up"
          }))]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupInvitedPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRSxDQUFDLENBQUNGLE1BQU0sQ0FBQ0ssUUFBekI7QUFBbUMsaUJBQUssRUFBRUwsTUFBTSxDQUFDSyxRQUFQLElBQW1CTCxNQUFNLENBQUNLLFFBQVAsQ0FBZ0JKLE9BQTdFO0FBQXNGLGlCQUFLLEVBQUMsVUFBNUY7QUFBQSxtQ0FDRSx1REFBQyw4Q0FBRCxvQkFDTUYsUUFBUSxDQUFDLFVBQUQsRUFBYTtBQUFFRyxjQUFBQSxRQUFRLEVBQUU7QUFBWixhQUFiLENBRGQ7QUFFRSxrQkFBSSxFQUFDLFVBRlA7QUFHRSx5QkFBVyxFQUFDO0FBSGQ7QUFERixZQW5CRixxQ0EyQkUsdURBQUMsK0NBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBLFlBM0JGO0FBQUE7QUFGSixRQVRGO0FBQUE7QUFERixJQURGO0FBK0NELENBM0VNO0FBNkVQLGlFQUFlNUIsaUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9pbnZpdGVzL1NpZ251cEludml0ZWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIEZpZWxkLCBGb3JtLCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuXG5pbnRlcmZhY2UgRm9ybU1vZGVsIHtcbiAgZW1haWw6IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IG5hdk1vZGVsID0ge1xuICBtYWluOiB7XG4gICAgaWNvbjogJ2dyYWZhbmEnLFxuICAgIHRleHQ6ICdJbnZpdGUnLFxuICAgIHN1YlRpdGxlOiAnUmVnaXN0ZXIgeW91ciBHcmFmYW5hIGFjY291bnQnLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ0xvZ2luJywgdXJsOiAnbG9naW4nIH1dLFxuICB9LFxuICBub2RlOiB7XG4gICAgdGV4dDogJycsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyBjb2RlOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IGNvbnN0IFNpZ251cEludml0ZWRQYWdlOiBGQzxQcm9wcz4gPSAoeyBtYXRjaCB9KSA9PiB7XG4gIGNvbnN0IGNvZGUgPSBtYXRjaC5wYXJhbXMuY29kZTtcbiAgY29uc3QgW2luaXRGb3JtTW9kZWwsIHNldEluaXRGb3JtTW9kZWxdID0gdXNlU3RhdGU8Rm9ybU1vZGVsPigpO1xuICBjb25zdCBbZ3JlZXRpbmcsIHNldEdyZWV0aW5nXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2ludml0ZWRCeSwgc2V0SW52aXRlZEJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuICB1c2VBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaW52aXRlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS91c2VyL2ludml0ZS8ke2NvZGV9YCk7XG5cbiAgICBzZXRJbml0Rm9ybU1vZGVsKHtcbiAgICAgIGVtYWlsOiBpbnZpdGUuZW1haWwsXG4gICAgICBuYW1lOiBpbnZpdGUubmFtZSxcbiAgICAgIHVzZXJuYW1lOiBpbnZpdGUuZW1haWwsXG4gICAgfSk7XG5cbiAgICBzZXRHcmVldGluZyhpbnZpdGUubmFtZSB8fCBpbnZpdGUuZW1haWwgfHwgaW52aXRlLnVzZXJuYW1lKTtcbiAgICBzZXRJbnZpdGVkQnkoaW52aXRlLmludml0ZWRCeSk7XG4gIH0sIFtjb2RlXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZm9ybURhdGE6IEZvcm1Nb2RlbCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3VzZXIvaW52aXRlL2NvbXBsZXRlJywgeyAuLi5mb3JtRGF0YSwgaW52aXRlQ29kZTogY29kZSB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldENvbmZpZygpLmFwcFN1YlVybCArICcvJztcbiAgfTtcblxuICBpZiAoIWluaXRGb3JtTW9kZWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPkhlbGxvIHtncmVldGluZyB8fCAndGhlcmUnfS48L2gzPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtdGFnbGluZSBwLWItMlwiPlxuICAgICAgICAgIDxlbT57aW52aXRlZEJ5IHx8ICdTb21lb25lJ308L2VtPiBoYXMgaW52aXRlZCB5b3UgdG8gam9pbiBHcmFmYW5hIGFuZCB0aGUgb3JnYW5pemF0aW9ueycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHQtd29yZFwiPntjb250ZXh0U3J2LnVzZXIub3JnTmFtZX08L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgUGxlYXNlIGNvbXBsZXRlIHRoZSBmb2xsb3dpbmcgYW5kIGNob29zZSBhIHBhc3N3b3JkIHRvIGFjY2VwdCB5b3VyIGludml0YXRpb24gYW5kIGNvbnRpbnVlOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17aW5pdEZvcm1Nb2RlbH0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMuZW1haWx9IGVycm9yPXtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLm1lc3NhZ2V9IGxhYmVsPVwiRW1haWxcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFbWFpbCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogL15cXFMrQFxcUyskLyxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRW1haWwgaXMgaW52YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMubmFtZX0gZXJyb3I9e2Vycm9ycy5uYW1lICYmIGVycm9ycy5uYW1lLm1lc3NhZ2V9IGxhYmVsPVwiTmFtZVwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWUgKG9wdGlvbmFsKVwiIHsuLi5yZWdpc3RlcignbmFtZScpfSAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMudXNlcm5hbWV9IGVycm9yPXtlcnJvcnMudXNlcm5hbWUgJiYgZXJyb3JzLnVzZXJuYW1lLm1lc3NhZ2V9IGxhYmVsPVwiVXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCd1c2VybmFtZScsIHsgcmVxdWlyZWQ6ICdVc2VybmFtZSBpcyByZXF1aXJlZCcgfSl9IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMucGFzc3dvcmR9IGVycm9yPXtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9IGxhYmVsPVwiUGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cEludml0ZWRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRCYWNrZW5kU3J2IiwiQnV0dG9uIiwiRmllbGQiLCJGb3JtIiwiSW5wdXQiLCJ1c2VBc3luYyIsIlBhZ2UiLCJjb250ZXh0U3J2IiwiZ2V0Q29uZmlnIiwibmF2TW9kZWwiLCJtYWluIiwiaWNvbiIsInRleHQiLCJzdWJUaXRsZSIsImJyZWFkY3J1bWJzIiwidGl0bGUiLCJ1cmwiLCJub2RlIiwiU2lnbnVwSW52aXRlZFBhZ2UiLCJtYXRjaCIsImNvZGUiLCJwYXJhbXMiLCJpbml0Rm9ybU1vZGVsIiwic2V0SW5pdEZvcm1Nb2RlbCIsImdyZWV0aW5nIiwic2V0R3JlZXRpbmciLCJpbnZpdGVkQnkiLCJzZXRJbnZpdGVkQnkiLCJpbnZpdGUiLCJnZXQiLCJlbWFpbCIsIm5hbWUiLCJ1c2VybmFtZSIsIm9uU3VibWl0IiwiZm9ybURhdGEiLCJwb3N0IiwiaW52aXRlQ29kZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFwcFN1YlVybCIsInVzZXIiLCJvcmdOYW1lIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=
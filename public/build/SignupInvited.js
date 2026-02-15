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











// NOTE: use `img` instead of `icon` to show a custom image in the page header.
const navModel = {
  main: {
    // This URL maps to the file at /workspaces/Test2/grafana/public/img/fav32.png
    img: 'public/img/fav32.png',
    text: 'Invite',
    subTitle: 'Register your AKMind account',
    breadcrumbs: [{
      title: 'Login',
      url: 'login'
    }]
  },
  node: {
    text: 'Invite'
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
        }), " has invited you to join AKMind and the organization", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "highlight-word",
          style: {
            color: '#52C1C4'
          },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUUseUJBQVcsRUFBQztBQUZkO0FBREYsWUFoQkYsZUFzQkUsdURBQUMsOENBQUQ7QUFBTyxtQkFBTyxFQUFFLENBQUMsQ0FBQ0YsTUFBTSxDQUFDSyxRQUF6QjtBQUFtQyxpQkFBSyxFQUFFTCxNQUFNLENBQUNLLFFBQVAsSUFBbUJMLE1BQU0sQ0FBQ0ssUUFBUCxDQUFnQkosT0FBN0U7QUFBc0YsaUJBQUssRUFBQyxVQUE1RjtBQUFBLG1DQUNFLHVEQUFDLDhDQUFELG9CQUNNRixRQUFRLENBQUMsVUFBRCxFQUFhO0FBQUVHLGNBQUFBLFFBQVEsRUFBRTtBQUFaLGFBQWIsQ0FEZDtBQUVFLGtCQUFJLEVBQUMsVUFGUDtBQUdFLHlCQUFXLEVBQUM7QUFIZDtBQURGLFlBdEJGLHFDQStCRSx1REFBQywrQ0FBRDtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUZKLFFBVkY7QUFBQTtBQURGLElBREY7QUFvREQsQ0F6Rk07QUE0RlAsaUVBQWU3QixpQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2ludml0ZXMvU2lnbnVwSW52aXRlZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZvcm0sIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5cblxuaW50ZXJmYWNlIEZvcm1Nb2RlbCB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xufVxuXG5cbi8vIE5PVEU6IHVzZSBgaW1nYCBpbnN0ZWFkIG9mIGBpY29uYCB0byBzaG93IGEgY3VzdG9tIGltYWdlIGluIHRoZSBwYWdlIGhlYWRlci5cbmNvbnN0IG5hdk1vZGVsID0ge1xuICBtYWluOiB7XG4gICAgLy8gVGhpcyBVUkwgbWFwcyB0byB0aGUgZmlsZSBhdCAvd29ya3NwYWNlcy9UZXN0Mi9ncmFmYW5hL3B1YmxpYy9pbWcvZmF2MzIucG5nXG4gICAgaW1nOiAncHVibGljL2ltZy9mYXYzMi5wbmcnLFxuICAgIHRleHQ6ICdJbnZpdGUnLFxuICAgIHN1YlRpdGxlOiAnUmVnaXN0ZXIgeW91ciBBS01pbmQgYWNjb3VudCcsXG4gICAgYnJlYWRjcnVtYnM6IFt7IHRpdGxlOiAnTG9naW4nLCB1cmw6ICdsb2dpbicgfV0sXG4gIH0sXG4gIG5vZGU6IHtcbiAgICB0ZXh0OiAnSW52aXRlJyxcbiAgfSxcbn07XG5cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgY29kZTogc3RyaW5nIH0+IHt9XG5cblxuZXhwb3J0IGNvbnN0IFNpZ251cEludml0ZWRQYWdlOiBGQzxQcm9wcz4gPSAoeyBtYXRjaCB9KSA9PiB7XG4gIGNvbnN0IGNvZGUgPSBtYXRjaC5wYXJhbXMuY29kZTtcbiAgY29uc3QgW2luaXRGb3JtTW9kZWwsIHNldEluaXRGb3JtTW9kZWxdID0gdXNlU3RhdGU8Rm9ybU1vZGVsPigpO1xuICBjb25zdCBbZ3JlZXRpbmcsIHNldEdyZWV0aW5nXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2ludml0ZWRCeSwgc2V0SW52aXRlZEJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuXG4gIHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBpbnZpdGUgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3VzZXIvaW52aXRlLyR7Y29kZX1gKTtcblxuXG4gICAgc2V0SW5pdEZvcm1Nb2RlbCh7XG4gICAgICBlbWFpbDogaW52aXRlLmVtYWlsLFxuICAgICAgbmFtZTogaW52aXRlLm5hbWUsXG4gICAgICB1c2VybmFtZTogaW52aXRlLmVtYWlsLFxuICAgIH0pO1xuXG5cbiAgICBzZXRHcmVldGluZyhpbnZpdGUubmFtZSB8fCBpbnZpdGUuZW1haWwgfHwgaW52aXRlLnVzZXJuYW1lKTtcbiAgICBzZXRJbnZpdGVkQnkoaW52aXRlLmludml0ZWRCeSk7XG4gIH0sIFtjb2RlXSk7XG5cblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChmb3JtRGF0YTogRm9ybU1vZGVsKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvdXNlci9pbnZpdGUvY29tcGxldGUnLCB7XG4gICAgICAuLi5mb3JtRGF0YSxcbiAgICAgIGludml0ZUNvZGU6IGNvZGUsXG4gICAgfSk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBnZXRDb25maWcoKS5hcHBTdWJVcmwgKyAnLyc7XG4gIH07XG5cblxuICBpZiAoIWluaXRGb3JtTW9kZWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+SGVsbG8ge2dyZWV0aW5nIHx8ICd0aGVyZSd9LjwvaDM+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXRhZ2xpbmUgcC1iLTJcIj5cbiAgICAgICAgICA8ZW0+e2ludml0ZWRCeSB8fCAnU29tZW9uZSd9PC9lbT4gaGFzIGludml0ZWQgeW91IHRvIGpvaW4gQUtNaW5kIGFuZCB0aGUgb3JnYW5pemF0aW9ueycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHQtd29yZFwiIHN0eWxlPXt7IGNvbG9yOiAnIzUyQzFDNCcgfX0+e2NvbnRleHRTcnYudXNlci5vcmdOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBQbGVhc2UgY29tcGxldGUgdGhlIGZvbGxvd2luZyBhbmQgY2hvb3NlIGEgcGFzc3dvcmQgdG8gYWNjZXB0IHlvdXIgaW52aXRhdGlvbiBhbmQgY29udGludWU6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybSBkZWZhdWx0VmFsdWVzPXtpbml0Rm9ybU1vZGVsfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy5lbWFpbH0gZXJyb3I9e2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwubWVzc2FnZX0gbGFiZWw9XCJFbWFpbFwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VtYWlsIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAvXlxcUytAXFxTKyQvLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbWFpbCBpcyBpbnZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy5uYW1lfSBlcnJvcj17ZXJyb3JzLm5hbWUgJiYgZXJyb3JzLm5hbWUubWVzc2FnZX0gbGFiZWw9XCJOYW1lXCI+XG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZSAob3B0aW9uYWwpXCIgey4uLnJlZ2lzdGVyKCduYW1lJyl9IC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy51c2VybmFtZX0gZXJyb3I9e2Vycm9ycy51c2VybmFtZSAmJiBlcnJvcnMudXNlcm5hbWUubWVzc2FnZX0gbGFiZWw9XCJVc2VybmFtZVwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCd1c2VybmFtZScsIHsgcmVxdWlyZWQ6ICdVc2VybmFtZSBpcyByZXF1aXJlZCcgfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMucGFzc3dvcmR9IGVycm9yPXtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9IGxhYmVsPVwiUGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cblxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBJbnZpdGVkUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2V0QmFja2VuZFNydiIsIkJ1dHRvbiIsIkZpZWxkIiwiRm9ybSIsIklucHV0IiwidXNlQXN5bmMiLCJQYWdlIiwiY29udGV4dFNydiIsImdldENvbmZpZyIsIm5hdk1vZGVsIiwibWFpbiIsImltZyIsInRleHQiLCJzdWJUaXRsZSIsImJyZWFkY3J1bWJzIiwidGl0bGUiLCJ1cmwiLCJub2RlIiwiU2lnbnVwSW52aXRlZFBhZ2UiLCJtYXRjaCIsImNvZGUiLCJwYXJhbXMiLCJpbml0Rm9ybU1vZGVsIiwic2V0SW5pdEZvcm1Nb2RlbCIsImdyZWV0aW5nIiwic2V0R3JlZXRpbmciLCJpbnZpdGVkQnkiLCJzZXRJbnZpdGVkQnkiLCJpbnZpdGUiLCJnZXQiLCJlbWFpbCIsIm5hbWUiLCJ1c2VybmFtZSIsIm9uU3VibWl0IiwiZm9ybURhdGEiLCJwb3N0IiwiaW52aXRlQ29kZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFwcFN1YlVybCIsImNvbG9yIiwidXNlciIsIm9yZ05hbWUiLCJyZWdpc3RlciIsImVycm9ycyIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJ2YWx1ZSIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==
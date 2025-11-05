"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SendResetMailPage"],{

/***/ "./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgottenPassword": () => (/* binding */ ForgottenPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _Container, _Legend, _Button;










const paragraphStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  color: ${theme.colors.formDescription};
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.regular};
  margin-top: ${theme.spacing.sm};
  display: block;
`;

const ForgottenPassword = () => {
  var _HorizontalGroup, _p2;

  const [emailSent, setEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(paragraphStyles);
  const loginHref = `${app_core_config__WEBPACK_IMPORTED_MODULE_4__["default"].appSubUrl}/login`;

  const sendEmail = async formModel => {
    const res = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/user/password/send-reset-email', formModel);

    if (res) {
      setEmailSent(true);
    }
  };

  if (emailSent) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: "An email with a reset link has been sent to the email address. You should receive it shortly."
      })), _Container || (_Container = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Container, {
        margin: "md"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        variant: "primary",
        href: loginHref,
        children: "Back to login"
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: sendEmail,
    children: ({
      register,
      errors
    }) => {
      var _errors$userOrEmail;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Legend, {
          children: "Reset password"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: "User",
          description: "Enter your information to get a reset link sent to you",
          invalid: !!errors.userOrEmail,
          error: errors === null || errors === void 0 ? void 0 : (_errors$userOrEmail = errors.userOrEmail) === null || _errors$userOrEmail === void 0 ? void 0 : _errors$userOrEmail.message,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
            id: "user-input",
            placeholder: "Email or username"
          }, register('userOrEmail', {
            required: 'Email or username is required'
          })))
        }), _HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            children: "Send reset email"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
            fill: "text",
            href: loginHref,
            children: "Back to login"
          })]
        })), _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: styles,
          children: "Did you forget your username or email? Contact your Grafana administrator."
        }))]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/core/components/ForgottenPassword/SendResetMailPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendResetMailPage": () => (/* binding */ SendResetMailPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoginLayout;





const SendResetMailPage = () => _LoginLayout || (_LoginLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.LoginLayout, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.InnerBox, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__.ForgottenPassword, {})
  })
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendResetMailPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9Gb3Jnb3R0ZW5QYXNzd29yZC9Gb3Jnb3R0ZW5QYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0ZvcmdvdHRlblBhc3N3b3JkL1NlbmRSZXNldE1haWxQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgRmllbGQsIElucHV0LCBCdXR0b24sIExlZ2VuZCwgQ29udGFpbmVyLCB1c2VTdHlsZXMsIEhvcml6b250YWxHcm91cCwgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuaW50ZXJmYWNlIEVtYWlsRFRPIHtcbiAgdXNlck9yRW1haWw6IHN0cmluZztcbn1cblxuY29uc3QgcGFyYWdyYXBoU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IGNzc2BcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmZvcm1EZXNjcmlwdGlvbn07XG4gIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LndlaWdodC5yZWd1bGFyfTtcbiAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9yZ290dGVuUGFzc3dvcmQ6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWxTZW50LCBzZXRFbWFpbFNlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMocGFyYWdyYXBoU3R5bGVzKTtcbiAgY29uc3QgbG9naW5IcmVmID0gYCR7Y29uZmlnLmFwcFN1YlVybH0vbG9naW5gO1xuXG4gIGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jIChmb3JtTW9kZWw6IEVtYWlsRFRPKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvdXNlci9wYXNzd29yZC9zZW5kLXJlc2V0LWVtYWlsJywgZm9ybU1vZGVsKTtcbiAgICBpZiAocmVzKSB7XG4gICAgICBzZXRFbWFpbFNlbnQodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChlbWFpbFNlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+QW4gZW1haWwgd2l0aCBhIHJlc2V0IGxpbmsgaGFzIGJlZW4gc2VudCB0byB0aGUgZW1haWwgYWRkcmVzcy4gWW91IHNob3VsZCByZWNlaXZlIGl0IHNob3J0bHkuPC9wPlxuICAgICAgICA8Q29udGFpbmVyIG1hcmdpbj1cIm1kXCIgLz5cbiAgICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBocmVmPXtsb2dpbkhyZWZ9PlxuICAgICAgICAgIEJhY2sgdG8gbG9naW5cbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtzZW5kRW1haWx9PlxuICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMgfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMZWdlbmQ+UmVzZXQgcGFzc3dvcmQ8L0xlZ2VuZD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlclwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkVudGVyIHlvdXIgaW5mb3JtYXRpb24gdG8gZ2V0IGEgcmVzZXQgbGluayBzZW50IHRvIHlvdVwiXG4gICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy51c2VyT3JFbWFpbH1cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LnVzZXJPckVtYWlsPy5tZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cInVzZXItaW5wdXRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIG9yIHVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCd1c2VyT3JFbWFpbCcsIHsgcmVxdWlyZWQ6ICdFbWFpbCBvciB1c2VybmFtZSBpcyByZXF1aXJlZCcgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDxCdXR0b24+U2VuZCByZXNldCBlbWFpbDwvQnV0dG9uPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZmlsbD1cInRleHRcIiBocmVmPXtsb2dpbkhyZWZ9PlxuICAgICAgICAgICAgICBCYWNrIHRvIGxvZ2luXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc30+RGlkIHlvdSBmb3JnZXQgeW91ciB1c2VybmFtZSBvciBlbWFpbD8gQ29udGFjdCB5b3VyIEdyYWZhbmEgYWRtaW5pc3RyYXRvci48L3A+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMb2dpbkxheW91dCwgSW5uZXJCb3ggfSBmcm9tICcuLi9Mb2dpbi9Mb2dpbkxheW91dCc7XG5pbXBvcnQgeyBGb3Jnb3R0ZW5QYXNzd29yZCB9IGZyb20gJy4vRm9yZ290dGVuUGFzc3dvcmQnO1xuXG5leHBvcnQgY29uc3QgU2VuZFJlc2V0TWFpbFBhZ2U6IEZDID0gKCkgPT4gKFxuICA8TG9naW5MYXlvdXQ+XG4gICAgPElubmVyQm94PlxuICAgICAgPEZvcmdvdHRlblBhc3N3b3JkIC8+XG4gICAgPC9Jbm5lckJveD5cbiAgPC9Mb2dpbkxheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbmRSZXNldE1haWxQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiRmllbGQiLCJJbnB1dCIsIkJ1dHRvbiIsIkxlZ2VuZCIsIkNvbnRhaW5lciIsInVzZVN0eWxlcyIsIkhvcml6b250YWxHcm91cCIsIkxpbmtCdXR0b24iLCJnZXRCYWNrZW5kU3J2IiwiY3NzIiwiY29uZmlnIiwicGFyYWdyYXBoU3R5bGVzIiwidGhlbWUiLCJjb2xvcnMiLCJmb3JtRGVzY3JpcHRpb24iLCJ0eXBvZ3JhcGh5Iiwic2l6ZSIsInNtIiwid2VpZ2h0IiwicmVndWxhciIsInNwYWNpbmciLCJGb3Jnb3R0ZW5QYXNzd29yZCIsImVtYWlsU2VudCIsInNldEVtYWlsU2VudCIsInN0eWxlcyIsImxvZ2luSHJlZiIsImFwcFN1YlVybCIsInNlbmRFbWFpbCIsImZvcm1Nb2RlbCIsInJlcyIsInBvc3QiLCJyZWdpc3RlciIsImVycm9ycyIsInVzZXJPckVtYWlsIiwibWVzc2FnZSIsInJlcXVpcmVkIiwiTG9naW5MYXlvdXQiLCJJbm5lckJveCIsIlNlbmRSZXNldE1haWxQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_components_Signup_VerifyEmailPage_tsx"],{

/***/ "./public/app/core/components/Signup/VerifyEmail.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmail": () => (/* binding */ VerifyEmail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _Container, _Legend, _Button;









const VerifyEmail = () => {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();
  const [emailSent, setEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onSubmit = formModel => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/user/signup', formModel).then(() => {
      setEmailSent(true);
    }).catch(err => {
      var _err$data;

      const msg = ((_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.message) || err;
      notifyApp.warning(msg);
    });
  };

  if (emailSent) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: "An email with a verification link has been sent to the email address. You should receive it shortly."
      })), _Container || (_Container = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Container, {
        margin: "md"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        variant: "primary",
        href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/signup',
        children: "Complete Signup"
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmit,
    children: ({
      register,
      errors
    }) => {
      var _errors$email;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Legend, {
          children: "Verify Email"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: "Email",
          description: "Enter your email address to get a verification link sent to you",
          invalid: !!errors.email,
          error: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
            id: "email"
          }, register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/,
              message: 'Email is invalid'
            }
          }), {
            placeholder: "Email"
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            children: "Send verification email"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
            fill: "text",
            href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/login',
            children: "Back to login"
          })]
        })]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/core/components/Signup/VerifyEmailPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPage": () => (/* binding */ VerifyEmailPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _VerifyEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Signup/VerifyEmail.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoginLayout;





const VerifyEmailPage = () => {
  return _LoginLayout || (_LoginLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.LoginLayout, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.InnerBox, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_VerifyEmail__WEBPACK_IMPORTED_MODULE_2__.VerifyEmail, {})
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyEmailPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9jb3JlX2NvbXBvbmVudHNfU2lnbnVwX1ZlcmlmeUVtYWlsUGFnZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQU1PLE1BQU1hLFdBQWUsR0FBRyxNQUFNO0FBQ25DLFFBQU1DLFNBQVMsR0FBR0YsaUZBQWtCLEVBQXBDO0FBQ0EsUUFBTSxDQUFDRyxTQUFELEVBQVlDLFlBQVosSUFBNEJmLCtDQUFRLENBQUMsS0FBRCxDQUExQzs7QUFFQSxRQUFNZ0IsUUFBUSxHQUFJQyxTQUFELElBQXlCO0FBQ3hDUixJQUFBQSwrREFBYSxHQUNWUyxJQURILENBQ1Esa0JBRFIsRUFDNEJELFNBRDVCLEVBRUdFLElBRkgsQ0FFUSxNQUFNO0FBQ1ZKLE1BQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxLQUpILEVBS0dLLEtBTEgsQ0FLVUMsR0FBRCxJQUFTO0FBQUE7O0FBQ2QsWUFBTUMsR0FBRyxHQUFHLGNBQUFELEdBQUcsQ0FBQ0UsSUFBSix3REFBVUMsT0FBVixLQUFxQkgsR0FBakM7QUFDQVIsTUFBQUEsU0FBUyxDQUFDWSxPQUFWLENBQWtCSCxHQUFsQjtBQUNELEtBUkg7QUFTRCxHQVZEOztBQVlBLE1BQUlSLFNBQUosRUFBZTtBQUNiLHdCQUNFO0FBQUEsMENBQ0U7QUFBQTtBQUFBLFFBREYsNENBRUUsdURBQUMsa0RBQUQ7QUFBVyxjQUFNLEVBQUM7QUFBbEIsUUFGRixnQkFHRSx1REFBQyxtREFBRDtBQUFZLGVBQU8sRUFBQyxTQUFwQjtBQUE4QixZQUFJLEVBQUVKLDBEQUFTLEdBQUdnQixTQUFaLEdBQXdCLFNBQTVEO0FBQUE7QUFBQSxRQUhGO0FBQUEsTUFERjtBQVNEOztBQUVELHNCQUNFLHVEQUFDLDZDQUFEO0FBQU0sWUFBUSxFQUFFVixRQUFoQjtBQUFBLGNBQ0csQ0FBQztBQUFFVyxNQUFBQSxRQUFGO0FBQVlDLE1BQUFBO0FBQVosS0FBRDtBQUFBOztBQUFBLDBCQUNDO0FBQUEsc0RBQ0UsdURBQUMsK0NBQUQ7QUFBQTtBQUFBLFVBREYsZ0JBRUUsdURBQUMsOENBQUQ7QUFDRSxlQUFLLEVBQUMsT0FEUjtBQUVFLHFCQUFXLEVBQUMsaUVBRmQ7QUFHRSxpQkFBTyxFQUFFLENBQUMsQ0FBQ0EsTUFBTSxDQUFDQyxLQUhwQjtBQUlFLGVBQUssbUJBQUVELE1BQU0sQ0FBQ0MsS0FBVCxrREFBRSxjQUFjTCxPQUp2QjtBQUFBLGlDQU1FLHVEQUFDLDhDQUFEO0FBQ0UsY0FBRSxFQUFDO0FBREwsYUFFTUcsUUFBUSxDQUFDLE9BQUQsRUFBVTtBQUNwQkcsWUFBQUEsUUFBUSxFQUFFLG1CQURVO0FBRXBCQyxZQUFBQSxPQUFPLEVBQUU7QUFDUEMsY0FBQUEsS0FBSyxFQUFFLFdBREE7QUFFUFIsY0FBQUEsT0FBTyxFQUFFO0FBRkY7QUFGVyxXQUFWLENBRmQ7QUFTRSx1QkFBVyxFQUFDO0FBVGQ7QUFORixVQUZGLGVBb0JFLHdEQUFDLHdEQUFEO0FBQUEsd0RBQ0UsdURBQUMsK0NBQUQ7QUFBQTtBQUFBLFlBREYsZ0JBRUUsdURBQUMsbURBQUQ7QUFBWSxnQkFBSSxFQUFDLE1BQWpCO0FBQXdCLGdCQUFJLEVBQUVkLDBEQUFTLEdBQUdnQixTQUFaLEdBQXdCLFFBQXREO0FBQUE7QUFBQSxZQUZGO0FBQUEsVUFwQkY7QUFBQSxRQUREO0FBQUE7QUFESCxJQURGO0FBaUNELENBN0RNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUDtBQUVBO0FBQ0E7O0FBRU8sTUFBTVMsZUFBbUIsR0FBRyxNQUFNO0FBQ3ZDLHNEQUNFLHVEQUFDLDJEQUFEO0FBQUEsMkJBQ0UsdURBQUMsd0RBQUQ7QUFBQSw2QkFDRSx1REFBQyxxREFBRDtBQURGO0FBREYsSUFERjtBQU9ELENBUk07QUFVUCxpRUFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9TaWdudXAvVmVyaWZ5RW1haWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9TaWdudXAvVmVyaWZ5RW1haWxQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgRmllbGQsIElucHV0LCBCdXR0b24sIExlZ2VuZCwgQ29udGFpbmVyLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgdXNlQXBwTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuXG5pbnRlcmZhY2UgRW1haWxEVE8ge1xuICBlbWFpbDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVmVyaWZ5RW1haWw6IEZDID0gKCkgPT4ge1xuICBjb25zdCBub3RpZnlBcHAgPSB1c2VBcHBOb3RpZmljYXRpb24oKTtcbiAgY29uc3QgW2VtYWlsU2VudCwgc2V0RW1haWxTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChmb3JtTW9kZWw6IEVtYWlsRFRPKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAucG9zdCgnL2FwaS91c2VyL3NpZ251cCcsIGZvcm1Nb2RlbClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0RW1haWxTZW50KHRydWUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnN0IG1zZyA9IGVyci5kYXRhPy5tZXNzYWdlIHx8IGVycjtcbiAgICAgICAgbm90aWZ5QXBwLndhcm5pbmcobXNnKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGlmIChlbWFpbFNlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+QW4gZW1haWwgd2l0aCBhIHZlcmlmaWNhdGlvbiBsaW5rIGhhcyBiZWVuIHNlbnQgdG8gdGhlIGVtYWlsIGFkZHJlc3MuIFlvdSBzaG91bGQgcmVjZWl2ZSBpdCBzaG9ydGx5LjwvcD5cbiAgICAgICAgPENvbnRhaW5lciBtYXJnaW49XCJtZFwiIC8+XG4gICAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaHJlZj17Z2V0Q29uZmlnKCkuYXBwU3ViVXJsICsgJy9zaWdudXAnfT5cbiAgICAgICAgICBDb21wbGV0ZSBTaWdudXBcbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGVnZW5kPlZlcmlmeSBFbWFpbDwvTGVnZW5kPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzcyB0byBnZXQgYSB2ZXJpZmljYXRpb24gbGluayBzZW50IHRvIHlvdVwiXG4gICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZW1haWw/Lm1lc3NhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRW1haWwgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAvXlxcUytAXFxTKyQvLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0VtYWlsIGlzIGludmFsaWQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPEJ1dHRvbj5TZW5kIHZlcmlmaWNhdGlvbiBlbWFpbDwvQnV0dG9uPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZmlsbD1cInRleHRcIiBocmVmPXtnZXRDb25maWcoKS5hcHBTdWJVcmwgKyAnL2xvZ2luJ30+XG4gICAgICAgICAgICAgIEJhY2sgdG8gbG9naW5cbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExvZ2luTGF5b3V0LCBJbm5lckJveCB9IGZyb20gJy4uL0xvZ2luL0xvZ2luTGF5b3V0JztcbmltcG9ydCB7IFZlcmlmeUVtYWlsIH0gZnJvbSAnLi9WZXJpZnlFbWFpbCc7XG5cbmV4cG9ydCBjb25zdCBWZXJpZnlFbWFpbFBhZ2U6IEZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMb2dpbkxheW91dD5cbiAgICAgIDxJbm5lckJveD5cbiAgICAgICAgPFZlcmlmeUVtYWlsIC8+XG4gICAgICA8L0lubmVyQm94PlxuICAgIDwvTG9naW5MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZXJpZnlFbWFpbFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJGaWVsZCIsIklucHV0IiwiQnV0dG9uIiwiTGVnZW5kIiwiQ29udGFpbmVyIiwiSG9yaXpvbnRhbEdyb3VwIiwiTGlua0J1dHRvbiIsImdldEJhY2tlbmRTcnYiLCJnZXRDb25maWciLCJ1c2VBcHBOb3RpZmljYXRpb24iLCJWZXJpZnlFbWFpbCIsIm5vdGlmeUFwcCIsImVtYWlsU2VudCIsInNldEVtYWlsU2VudCIsIm9uU3VibWl0IiwiZm9ybU1vZGVsIiwicG9zdCIsInRoZW4iLCJjYXRjaCIsImVyciIsIm1zZyIsImRhdGEiLCJtZXNzYWdlIiwid2FybmluZyIsImFwcFN1YlVybCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiZW1haWwiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJ2YWx1ZSIsIkxvZ2luTGF5b3V0IiwiSW5uZXJCb3giLCJWZXJpZnlFbWFpbFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9
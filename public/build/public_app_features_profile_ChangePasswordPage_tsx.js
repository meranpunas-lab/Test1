"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_profile_ChangePasswordPage_tsx"],{

/***/ "./public/app/features/profile/ChangePasswordForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordForm": () => (/* binding */ ChangePasswordForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2;









const ChangePasswordForm = ({
  user,
  onChangePassword,
  isSaving
}) => {
  var _user$authLabels, _Button;

  const {
    ldapEnabled,
    authProxyEnabled,
    disableLoginForm
  } = app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"];
  const authSource = ((_user$authLabels = user.authLabels) === null || _user$authLabels === void 0 ? void 0 : _user$authLabels.length) && user.authLabels[0];

  if (ldapEnabled || authProxyEnabled) {
    return _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "You cannot change password when LDAP or auth proxy authentication is enabled."
    }));
  }

  if (authSource && disableLoginForm) {
    return _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "Password cannot be changed here."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
        max-width: 400px;
      `,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: onChangePassword,
      children: ({
        register,
        errors,
        getValues
      }) => {
        var _errors$oldPassword, _errors$newPassword, _errors$confirmNew;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Old password",
            invalid: !!errors.oldPassword,
            error: errors === null || errors === void 0 ? void 0 : (_errors$oldPassword = errors.oldPassword) === null || _errors$oldPassword === void 0 ? void 0 : _errors$oldPassword.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_4__.PasswordField, Object.assign({
              id: "current-password",
              autoComplete: "current-password"
            }, register('oldPassword', {
              required: 'Old password is required'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "New password",
            invalid: !!errors.newPassword,
            error: errors === null || errors === void 0 ? void 0 : (_errors$newPassword = errors.newPassword) === null || _errors$newPassword === void 0 ? void 0 : _errors$newPassword.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_4__.PasswordField, Object.assign({
              id: "new-password",
              autoComplete: "new-password"
            }, register('newPassword', {
              required: 'New password is required',
              validate: {
                confirm: v => v === getValues().confirmNew || 'Passwords must match',
                old: v => v !== getValues().oldPassword || `New password can't be the same as the old one.`
              }
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Confirm password",
            invalid: !!errors.confirmNew,
            error: errors === null || errors === void 0 ? void 0 : (_errors$confirmNew = errors.confirmNew) === null || _errors$confirmNew === void 0 ? void 0 : _errors$confirmNew.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_4__.PasswordField, Object.assign({
              id: "confirm-new-password",
              autoComplete: "new-password"
            }, register('confirmNew', {
              required: 'New password confirmation is required',
              validate: v => v === getValues().newPassword || 'Passwords must match'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              variant: "primary",
              disabled: isSaving,
              children: "Change Password"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
              variant: "secondary",
              href: `${app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].appSubUrl}/profile`,
              fill: "outline",
              children: "Cancel"
            })]
          })]
        });
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/profile/ChangePasswordPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/profile/ChangePasswordForm.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/profile/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;












function mapStateToProps(state) {
  const userState = state.user;
  const {
    isUpdating,
    user
  } = userState;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__.getNavModel)(state.navIndex, `change-password`),
    isUpdating,
    user
  };
}

const mapDispatchToProps = {
  loadUser: _state_actions__WEBPACK_IMPORTED_MODULE_5__.loadUser,
  changePassword: _state_actions__WEBPACK_IMPORTED_MODULE_5__.changePassword
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function ChangePasswordPage({
  navModel,
  loadUser,
  isUpdating,
  user,
  changePassword
}) {
  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(() => loadUser());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      isLoading: !Boolean(user),
      children: user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          className: "page-heading",
          children: "Change Your Password"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordForm, {
          user: user,
          onChangePassword: changePassword,
          isSaving: isUpdating
        })]
      }) : null
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(ChangePasswordPage));

/***/ }),

/***/ "./public/app/features/profile/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePassword": () => (/* binding */ changePassword),
/* harmony export */   "changeUserOrg": () => (/* binding */ changeUserOrg),
/* harmony export */   "initUserProfilePage": () => (/* binding */ initUserProfilePage),
/* harmony export */   "loadUser": () => (/* binding */ loadUser),
/* harmony export */   "revokeUserSession": () => (/* binding */ revokeUserSession),
/* harmony export */   "updateUserProfile": () => (/* binding */ updateUserProfile)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/profile/api.ts");



function changePassword(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_2__.api.changePassword(payload);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: false
    }));
  };
}
function initUserProfilePage() {
  return async function (dispatch) {
    await dispatch(loadUser());
    dispatch(loadTeams());
    dispatch(loadOrgs());
    dispatch(loadSessions());
  };
}
function loadUser() {
  return async function (dispatch) {
    const user = await _api__WEBPACK_IMPORTED_MODULE_2__.api.loadUser();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.userLoaded)({
      user
    }));
  };
}

function loadTeams() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.initLoadTeams)());
    const teams = await _api__WEBPACK_IMPORTED_MODULE_2__.api.loadTeams();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.teamsLoaded)({
      teams
    }));
  };
}

function loadOrgs() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.initLoadOrgs)());
    const orgs = await _api__WEBPACK_IMPORTED_MODULE_2__.api.loadOrgs();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.orgsLoaded)({
      orgs
    }));
  };
}

function loadSessions() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.initLoadSessions)());
    const sessions = await _api__WEBPACK_IMPORTED_MODULE_2__.api.loadSessions();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.sessionsLoaded)({
      sessions
    }));
  };
}

function revokeUserSession(tokenId) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_2__.api.revokeUserSession(tokenId);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.userSessionRevoked)({
      tokenId
    }));
  };
}
function changeUserOrg(org) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_2__.api.setUserOrg(org);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.appSubUrl + '/profile';
  };
}
function updateUserProfile(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_2__.api.updateUserProfile(payload);
    await dispatch(loadUser());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setUpdating)({
      updating: false
    }));
  };
}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19wcm9maWxlX0NoYW5nZVBhc3N3b3JkUGFnZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQTs7OztBQVFPLE1BQU1TLGtCQUE2QixHQUFHLENBQUM7QUFBRUMsRUFBQUEsSUFBRjtBQUFRQyxFQUFBQSxnQkFBUjtBQUEwQkMsRUFBQUE7QUFBMUIsQ0FBRCxLQUEwQztBQUFBOztBQUNyRixRQUFNO0FBQUVDLElBQUFBLFdBQUY7QUFBZUMsSUFBQUEsZ0JBQWY7QUFBaUNDLElBQUFBO0FBQWpDLE1BQXNEUix1REFBNUQ7QUFDQSxRQUFNUyxVQUFVLEdBQUcscUJBQUFOLElBQUksQ0FBQ08sVUFBTCxzRUFBaUJDLE1BQWpCLEtBQTJCUixJQUFJLENBQUNPLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBOUM7O0FBRUEsTUFBSUosV0FBVyxJQUFJQyxnQkFBbkIsRUFBcUM7QUFDbkMsb0NBQU87QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFDRCxNQUFJRSxVQUFVLElBQUlELGdCQUFsQixFQUFvQztBQUNsQyxzQ0FBTztBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQ0UsYUFBUyxFQUFFZCw2Q0FBSTtBQUNyQjtBQUNBLE9BSEk7QUFBQSwyQkFLRSx1REFBQyw2Q0FBRDtBQUFNLGNBQVEsRUFBRVUsZ0JBQWhCO0FBQUEsZ0JBQ0csQ0FBQztBQUFFUSxRQUFBQSxRQUFGO0FBQVlDLFFBQUFBLE1BQVo7QUFBb0JDLFFBQUFBO0FBQXBCLE9BQUQsS0FBcUM7QUFBQTs7QUFDcEMsNEJBQ0U7QUFBQSxrQ0FDRSx1REFBQyw4Q0FBRDtBQUFPLGlCQUFLLEVBQUMsY0FBYjtBQUE0QixtQkFBTyxFQUFFLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRSxXQUE5QztBQUEyRCxpQkFBSyxFQUFFRixNQUFGLGFBQUVBLE1BQUYsOENBQUVBLE1BQU0sQ0FBRUUsV0FBVix3REFBRSxvQkFBcUJD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S0FBSztBQUNMO0FBQ0EsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcHJvZmlsZS9DaGFuZ2VQYXNzd29yZEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvQ2hhbmdlUGFzc3dvcmRQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wcm9maWxlL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXVzZS12aXJ0dWFsLTAwMzI2ZTcwYmEvMC9jYWNoZS9yZWFjdC11c2UtbnBtLTE3LjMuMi1hMDMyY2JlYjAxLTczNzk0NjBmNTEuemlwL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU1vdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBCdXR0b24sIEZpZWxkLCBGb3JtLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IFVzZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRGaWVsZHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFBhc3N3b3JkRmllbGQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFzc3dvcmRGaWVsZC9QYXNzd29yZEZpZWxkJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXI6IFVzZXJEVE87XG4gIGlzU2F2aW5nOiBib29sZWFuO1xuICBvbkNoYW5nZVBhc3N3b3JkOiAocGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRGaWVsZHMpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFuZ2VQYXNzd29yZEZvcm06IEZDPFByb3BzPiA9ICh7IHVzZXIsIG9uQ2hhbmdlUGFzc3dvcmQsIGlzU2F2aW5nIH0pID0+IHtcbiAgY29uc3QgeyBsZGFwRW5hYmxlZCwgYXV0aFByb3h5RW5hYmxlZCwgZGlzYWJsZUxvZ2luRm9ybSB9ID0gY29uZmlnO1xuICBjb25zdCBhdXRoU291cmNlID0gdXNlci5hdXRoTGFiZWxzPy5sZW5ndGggJiYgdXNlci5hdXRoTGFiZWxzWzBdO1xuXG4gIGlmIChsZGFwRW5hYmxlZCB8fCBhdXRoUHJveHlFbmFibGVkKSB7XG4gICAgcmV0dXJuIDxwPllvdSBjYW5ub3QgY2hhbmdlIHBhc3N3b3JkIHdoZW4gTERBUCBvciBhdXRoIHByb3h5IGF1dGhlbnRpY2F0aW9uIGlzIGVuYWJsZWQuPC9wPjtcbiAgfVxuICBpZiAoYXV0aFNvdXJjZSAmJiBkaXNhYmxlTG9naW5Gb3JtKSB7XG4gICAgcmV0dXJuIDxwPlBhc3N3b3JkIGNhbm5vdCBiZSBjaGFuZ2VkIGhlcmUuPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvbkNoYW5nZVBhc3N3b3JkfT5cbiAgICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMsIGdldFZhbHVlcyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIk9sZCBwYXNzd29yZFwiIGludmFsaWQ9eyEhZXJyb3JzLm9sZFBhc3N3b3JkfSBlcnJvcj17ZXJyb3JzPy5vbGRQYXNzd29yZD8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkRmllbGRcbiAgICAgICAgICAgICAgICAgIGlkPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3Rlcignb2xkUGFzc3dvcmQnLCB7IHJlcXVpcmVkOiAnT2xkIHBhc3N3b3JkIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIk5ldyBwYXNzd29yZFwiIGludmFsaWQ9eyEhZXJyb3JzLm5ld1Bhc3N3b3JkfSBlcnJvcj17ZXJyb3JzPy5uZXdQYXNzd29yZD8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkRmllbGRcbiAgICAgICAgICAgICAgICAgIGlkPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25ld1Bhc3N3b3JkJywge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uZmlybTogKHYpID0+IHYgPT09IGdldFZhbHVlcygpLmNvbmZpcm1OZXcgfHwgJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBvbGQ6ICh2KSA9PiB2ICE9PSBnZXRWYWx1ZXMoKS5vbGRQYXNzd29yZCB8fCBgTmV3IHBhc3N3b3JkIGNhbid0IGJlIHRoZSBzYW1lIGFzIHRoZSBvbGQgb25lLmAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkNvbmZpcm0gcGFzc3dvcmRcIiBpbnZhbGlkPXshIWVycm9ycy5jb25maXJtTmV3fSBlcnJvcj17ZXJyb3JzPy5jb25maXJtTmV3Py5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRGaWVsZFxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLW5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdjb25maXJtTmV3Jywge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ05ldyBwYXNzd29yZCBjb25maXJtYXRpb24gaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHYpID0+IHYgPT09IGdldFZhbHVlcygpLm5ld1Bhc3N3b3JkIHx8ICdQYXNzd29yZHMgbXVzdCBtYXRjaCcsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBkaXNhYmxlZD17aXNTYXZpbmd9PlxuICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGhyZWY9e2Ake2NvbmZpZy5hcHBTdWJVcmx9L3Byb2ZpbGVgfSBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1vdW50IH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEZvcm0gfSBmcm9tICcuL0NoYW5nZVBhc3N3b3JkRm9ybSc7XG5pbXBvcnQgeyBjaGFuZ2VQYXNzd29yZCwgbG9hZFVzZXIgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE93blByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUpIHtcbiAgY29uc3QgdXNlclN0YXRlID0gc3RhdGUudXNlcjtcbiAgY29uc3QgeyBpc1VwZGF0aW5nLCB1c2VyIH0gPSB1c2VyU3RhdGU7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCBgY2hhbmdlLXBhc3N3b3JkYCksXG4gICAgaXNVcGRhdGluZyxcbiAgICB1c2VyLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRVc2VyLFxuICBjaGFuZ2VQYXNzd29yZCxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFuZ2VQYXNzd29yZFBhZ2UoeyBuYXZNb2RlbCwgbG9hZFVzZXIsIGlzVXBkYXRpbmcsIHVzZXIsIGNoYW5nZVBhc3N3b3JkIH06IFByb3BzKSB7XG4gIHVzZU1vdW50KCgpID0+IGxvYWRVc2VyKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17IUJvb2xlYW4odXNlcil9PlxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPkNoYW5nZSBZb3VyIFBhc3N3b3JkPC9oMz5cbiAgICAgICAgICAgIDxDaGFuZ2VQYXNzd29yZEZvcm0gdXNlcj17dXNlcn0gb25DaGFuZ2VQYXNzd29yZD17Y2hhbmdlUGFzc3dvcmR9IGlzU2F2aW5nPXtpc1VwZGF0aW5nfSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihDaGFuZ2VQYXNzd29yZFBhZ2UpO1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRmllbGRzLCBQcm9maWxlVXBkYXRlRmllbGRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVGh1bmtSZXN1bHQsIFVzZXJPcmcgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQge1xuICBpbml0TG9hZE9yZ3MsXG4gIGluaXRMb2FkU2Vzc2lvbnMsXG4gIGluaXRMb2FkVGVhbXMsXG4gIG9yZ3NMb2FkZWQsXG4gIHNlc3Npb25zTG9hZGVkLFxuICBzZXRVcGRhdGluZyxcbiAgdGVhbXNMb2FkZWQsXG4gIHVzZXJMb2FkZWQsXG4gIHVzZXJTZXNzaW9uUmV2b2tlZCxcbn0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGknO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmQocGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRGaWVsZHMpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiB0cnVlIH0pKTtcbiAgICBhd2FpdCBhcGkuY2hhbmdlUGFzc3dvcmQocGF5bG9hZCk7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogZmFsc2UgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVzZXJQcm9maWxlUGFnZSgpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkVXNlcigpKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbXMoKSk7XG4gICAgZGlzcGF0Y2gobG9hZE9yZ3MoKSk7XG4gICAgZGlzcGF0Y2gobG9hZFNlc3Npb25zKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFVzZXIoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGFwaS5sb2FkVXNlcigpO1xuICAgIGRpc3BhdGNoKHVzZXJMb2FkZWQoeyB1c2VyIH0pKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZFRlYW1zKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKGluaXRMb2FkVGVhbXMoKSk7XG4gICAgY29uc3QgdGVhbXMgPSBhd2FpdCBhcGkubG9hZFRlYW1zKCk7XG4gICAgZGlzcGF0Y2godGVhbXNMb2FkZWQoeyB0ZWFtcyB9KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRPcmdzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKGluaXRMb2FkT3JncygpKTtcbiAgICBjb25zdCBvcmdzID0gYXdhaXQgYXBpLmxvYWRPcmdzKCk7XG4gICAgZGlzcGF0Y2gob3Jnc0xvYWRlZCh7IG9yZ3MgfSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBsb2FkU2Vzc2lvbnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goaW5pdExvYWRTZXNzaW9ucygpKTtcbiAgICBjb25zdCBzZXNzaW9ucyA9IGF3YWl0IGFwaS5sb2FkU2Vzc2lvbnMoKTtcbiAgICBkaXNwYXRjaChzZXNzaW9uc0xvYWRlZCh7IHNlc3Npb25zIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldm9rZVVzZXJTZXNzaW9uKHRva2VuSWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IHRydWUgfSkpO1xuICAgIGF3YWl0IGFwaS5yZXZva2VVc2VyU2Vzc2lvbih0b2tlbklkKTtcbiAgICBkaXNwYXRjaCh1c2VyU2Vzc2lvblJldm9rZWQoeyB0b2tlbklkIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVVzZXJPcmcob3JnOiBVc2VyT3JnKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogdHJ1ZSB9KSk7XG4gICAgYXdhaXQgYXBpLnNldFVzZXJPcmcob3JnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbmZpZy5hcHBTdWJVcmwgKyAnL3Byb2ZpbGUnO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUocGF5bG9hZDogUHJvZmlsZVVwZGF0ZUZpZWxkcyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IHRydWUgfSkpO1xuICAgIGF3YWl0IGFwaS51cGRhdGVVc2VyUHJvZmlsZShwYXlsb2FkKTtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkVXNlcigpKTtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiBmYWxzZSB9KSk7XG4gIH07XG59XG4iLCJpbXBvcnQgdXNlRWZmZWN0T25jZSBmcm9tICcuL3VzZUVmZmVjdE9uY2UnO1xudmFyIHVzZU1vdW50ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdXNlRWZmZWN0T25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTW91bnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjc3MiLCJCdXR0b24iLCJGaWVsZCIsIkZvcm0iLCJIb3Jpem9udGFsR3JvdXAiLCJMaW5rQnV0dG9uIiwiY29uZmlnIiwiUGFzc3dvcmRGaWVsZCIsIkNoYW5nZVBhc3N3b3JkRm9ybSIsInVzZXIiLCJvbkNoYW5nZVBhc3N3b3JkIiwiaXNTYXZpbmciLCJsZGFwRW5hYmxlZCIsImF1dGhQcm94eUVuYWJsZWQiLCJkaXNhYmxlTG9naW5Gb3JtIiwiYXV0aFNvdXJjZSIsImF1dGhMYWJlbHMiLCJsZW5ndGgiLCJyZWdpc3RlciIsImVycm9ycyIsImdldFZhbHVlcyIsIm9sZFBhc3N3b3JkIiwibWVzc2FnZSIsInJlcXVpcmVkIiwibmV3UGFzc3dvcmQiLCJ2YWxpZGF0ZSIsImNvbmZpcm0iLCJ2IiwiY29uZmlybU5ldyIsIm9sZCIsImFwcFN1YlVybCIsInVzZU1vdW50IiwiY29ubmVjdCIsImdldE5hdk1vZGVsIiwiUGFnZSIsImNoYW5nZVBhc3N3b3JkIiwibG9hZFVzZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJTdGF0ZSIsImlzVXBkYXRpbmciLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiQ2hhbmdlUGFzc3dvcmRQYWdlIiwiQm9vbGVhbiIsImluaXRMb2FkT3JncyIsImluaXRMb2FkU2Vzc2lvbnMiLCJpbml0TG9hZFRlYW1zIiwib3Jnc0xvYWRlZCIsInNlc3Npb25zTG9hZGVkIiwic2V0VXBkYXRpbmciLCJ0ZWFtc0xvYWRlZCIsInVzZXJMb2FkZWQiLCJ1c2VyU2Vzc2lvblJldm9rZWQiLCJhcGkiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJ1cGRhdGluZyIsImluaXRVc2VyUHJvZmlsZVBhZ2UiLCJsb2FkVGVhbXMiLCJsb2FkT3JncyIsImxvYWRTZXNzaW9ucyIsInRlYW1zIiwib3JncyIsInNlc3Npb25zIiwicmV2b2tlVXNlclNlc3Npb24iLCJ0b2tlbklkIiwiY2hhbmdlVXNlck9yZyIsIm9yZyIsInNldFVzZXJPcmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1cGRhdGVVc2VyUHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=
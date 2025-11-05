"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserInvitePage"],{

/***/ "./public/app/features/org/UserInviteForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInviteForm": () => (/* binding */ UserInviteForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _invites_state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/invites/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button;

const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const roles = [{
  label: 'Viewer',
  value: app_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Viewer
}, {
  label: 'Editor',
  value: app_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Editor
}, {
  label: 'Admin',
  value: app_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Admin
}];
const defaultValues = {
  name: '',
  email: '',
  role: app_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Editor,
  sendEmail: true
};
const UserInviteForm = () => {
  const dispatch = (0,app_types__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  const onSubmit = async formData => {
    await dispatch((0,_invites_state_actions__WEBPACK_IMPORTED_MODULE_6__.addInvitee)(formData)).unwrap();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/org/users/');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
    defaultValues: defaultValues,
    onSubmit: onSubmit,
    children: ({
      register,
      control,
      errors
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          invalid: !!errors.loginOrEmail,
          error: !!errors.loginOrEmail ? 'Email or username is required' : undefined,
          label: "Email or username",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('loginOrEmail', {
            required: true
          }), {
            placeholder: "email@example.com"
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          invalid: !!errors.name,
          label: "Name",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('name'), {
            placeholder: "(optional)"
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          invalid: !!errors.role,
          label: "Role",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
            render: _ref => {
              let {} = _ref,
                  field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, Object.assign({}, field, {
                options: roles
              }));
            },
            control: control,
            name: "role"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          label: "Send invite email",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, Object.assign({
            id: "send-email-switch"
          }, register('sendEmail')))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            type: "submit",
            children: "Submit"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
            href: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.locationUtil.assureBaseUrl((0,app_core_config__WEBPACK_IMPORTED_MODULE_4__.getConfig)().appSubUrl + '/org/users'),
            variant: "secondary",
            children: "Back"
          })]
        })]
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInviteForm);

/***/ }),

/***/ "./public/app/features/org/UserInvitePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInvitePage": () => (/* binding */ UserInvitePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _UserInviteForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/org/UserInviteForm.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _UserInviteForm;









const UserInvitePage = ({
  navModel
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "page-sub-heading",
        children: "Invite user"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "p-b-2",
        children: ["Send invitation or add existing Grafana user to the organization.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          className: "highlight-word",
          children: [" ", app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.user.orgName]
        })]
      }), _UserInviteForm || (_UserInviteForm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UserInviteForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}))]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, 'users')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(UserInvitePage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckludml0ZVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTWdCLEtBQUssR0FBRyxDQUNaO0FBQUVDLEVBQUFBLEtBQUssRUFBRSxRQUFUO0FBQW1CQyxFQUFBQSxLQUFLLEVBQUVMLHFEQUFjTTtBQUF4QyxDQURZLEVBRVo7QUFBRUYsRUFBQUEsS0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEVBQUFBLEtBQUssRUFBRUwscURBQWNPO0FBQXhDLENBRlksRUFHWjtBQUFFSCxFQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsRUFBQUEsS0FBSyxFQUFFTCxvREFBYVE7QUFBdEMsQ0FIWSxDQUFkO0FBY0EsTUFBTUMsYUFBd0IsR0FBRztBQUMvQkMsRUFBQUEsSUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxFQUFBQSxLQUFLLEVBQUUsRUFGd0I7QUFHL0JDLEVBQUFBLElBQUksRUFBRVoscURBSHlCO0FBSS9CYSxFQUFBQSxTQUFTLEVBQUU7QUFKb0IsQ0FBakM7QUFPTyxNQUFNQyxjQUFjLEdBQUcsTUFBTTtBQUNsQyxRQUFNQyxRQUFRLEdBQUdkLHNEQUFXLEVBQTVCOztBQUVBLFFBQU1lLFFBQVEsR0FBRyxNQUFPQyxRQUFQLElBQStCO0FBQzlDLFVBQU1GLFFBQVEsQ0FBQ2Isa0VBQVUsQ0FBQ2UsUUFBRCxDQUFYLENBQVIsQ0FBK0JDLE1BQS9CLEVBQU47QUFDQXJCLElBQUFBLGtFQUFBLENBQXFCLGFBQXJCO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSx1REFBQyw2Q0FBRDtBQUFNLGlCQUFhLEVBQUVZLGFBQXJCO0FBQW9DLFlBQVEsRUFBRU8sUUFBOUM7QUFBQSxjQUNHLENBQUM7QUFBRUksTUFBQUEsUUFBRjtBQUFZQyxNQUFBQSxPQUFaO0FBQXFCQyxNQUFBQTtBQUFyQixLQUFELEtBQW1DO0FBQ2xDLDBCQUNFO0FBQUEsZ0NBQ0UsdURBQUMsOENBQUQ7QUFDRSxpQkFBTyxFQUFFLENBQUMsQ0FBQ0EsTUFBTSxDQUFDQyxZQURwQjtBQUVFLGVBQUssRUFBRSxDQUFDLENBQUNELE1BQU0sQ0FBQ0MsWUFBVCxHQUF3QiwrQkFBeEIsR0FBMERDLFNBRm5FO0FBR0UsZUFBSyxFQUFDLG1CQUhSO0FBQUEsaUNBS0UsdURBQUMsOENBQUQsb0JBQVdKLFFBQVEsQ0FBQyxjQUFELEVBQWlCO0FBQUVLLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQWpCLENBQW5CO0FBQXlELHVCQUFXLEVBQUM7QUFBckU7QUFMRixVQURGLGVBUUUsdURBQUMsOENBQUQ7QUFBTyxpQkFBTyxFQUFFLENBQUMsQ0FBQ0gsTUFBTSxDQUFDWixJQUF6QjtBQUErQixlQUFLLEVBQUMsTUFBckM7QUFBQSxpQ0FDRSx1REFBQyw4Q0FBRCxvQkFBV1UsUUFBUSxDQUFDLE1BQUQsQ0FBbkI7QUFBNkIsdUJBQVcsRUFBQztBQUF6QztBQURGLFVBUkYsZUFXRSx1REFBQyw4Q0FBRDtBQUFPLGlCQUFPLEVBQUUsQ0FBQyxDQUFDRSxNQUFNLENBQUNWLElBQXpCO0FBQStCLGVBQUssRUFBQyxNQUFyQztBQUFBLGlDQUNFLHVEQUFDLHFEQUFEO0FBQ0Usa0JBQU0sRUFBRTtBQUFBLGtCQUFDLEVBQUQ7QUFBQSxrQkFBb0JjLEtBQXBCLHNDQUFHQSxLQUFIOztBQUFBLGtDQUFrQyx1REFBQyx5REFBRCxvQkFBc0JBLEtBQXRCO0FBQTZCLHVCQUFPLEVBQUV2QjtBQUF0QyxpQkFBbEM7QUFBQSxhQURWO0FBRUUsbUJBQU8sRUFBRWtCLE9BRlg7QUFHRSxnQkFBSSxFQUFDO0FBSFA7QUFERixVQVhGLGVBa0JFLHVEQUFDLDhDQUFEO0FBQU8sZUFBSyxFQUFDLG1CQUFiO0FBQUEsaUNBQ0UsdURBQUMsK0NBQUQ7QUFBUSxjQUFFLEVBQUM7QUFBWCxhQUFtQ0QsUUFBUSxDQUFDLFdBQUQsQ0FBM0M7QUFERixVQWxCRixlQXFCRSx3REFBQyx3REFBRDtBQUFBLHdEQUNFLHVEQUFDLCtDQUFEO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQSxZQURGLGdCQUVFLHVEQUFDLG1EQUFEO0FBQVksZ0JBQUksRUFBRXRCLHFFQUFBLENBQTJCQywwREFBUyxHQUFHNkIsU0FBWixHQUF3QixZQUFuRCxDQUFsQjtBQUFvRixtQkFBTyxFQUFDLFdBQTVGO0FBQUE7QUFBQSxZQUZGO0FBQUEsVUFyQkY7QUFBQSxRQURGO0FBOEJEO0FBaENILElBREY7QUFvQ0QsQ0E1Q007QUE4Q1AsaUVBQWVkLGNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQU9PLE1BQU1tQixjQUF5QixHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQ3pELHNCQUNFLHVEQUFDLHFFQUFEO0FBQU0sWUFBUSxFQUFFQSxRQUFoQjtBQUFBLDJCQUNFLHdEQUFDLDhFQUFEO0FBQUEsMENBQ0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQSxRQURGLGdCQUVFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEscUdBRUU7QUFBTSxtQkFBUyxFQUFDLGdCQUFoQjtBQUFBLDBCQUFtQ0osa0VBQW5DO0FBQUEsVUFGRjtBQUFBLFFBRkYscURBTUUsdURBQUMsdURBQUQsS0FORjtBQUFBO0FBREYsSUFERjtBQVlELENBYk07O0FBZVAsTUFBTU8sZUFBZSxHQUFJQyxLQUFELEtBQXdCO0FBQzlDSixFQUFBQSxRQUFRLEVBQUVILHdFQUFXLENBQUNPLEtBQUssQ0FBQ0MsUUFBUCxFQUFpQixPQUFqQjtBQUR5QixDQUF4QixDQUF4Qjs7QUFJQSxpRUFBZVYsb0RBQU8sQ0FBQ1EsZUFBRCxDQUFQLENBQXlCSixjQUF6QixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvb3JnL1VzZXJJbnZpdGVGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9vcmcvVXNlckludml0ZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBIb3Jpem9udGFsR3JvdXAsXG4gIEJ1dHRvbixcbiAgTGlua0J1dHRvbixcbiAgSW5wdXQsXG4gIFN3aXRjaCxcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgRm9ybSxcbiAgRmllbGQsXG4gIElucHV0Q29udHJvbCxcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBsb2NhdGlvblV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBPcmdSb2xlLCB1c2VEaXNwYXRjaCB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBhZGRJbnZpdGVlIH0gZnJvbSAnLi4vaW52aXRlcy9zdGF0ZS9hY3Rpb25zJztcblxuY29uc3Qgcm9sZXMgPSBbXG4gIHsgbGFiZWw6ICdWaWV3ZXInLCB2YWx1ZTogT3JnUm9sZS5WaWV3ZXIgfSxcbiAgeyBsYWJlbDogJ0VkaXRvcicsIHZhbHVlOiBPcmdSb2xlLkVkaXRvciB9LFxuICB7IGxhYmVsOiAnQWRtaW4nLCB2YWx1ZTogT3JnUm9sZS5BZG1pbiB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtTW9kZWwge1xuICByb2xlOiBPcmdSb2xlO1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvZ2luT3JFbWFpbD86IHN0cmluZztcbiAgc2VuZEVtYWlsOiBib29sZWFuO1xuICBlbWFpbDogc3RyaW5nO1xufVxuXG5jb25zdCBkZWZhdWx0VmFsdWVzOiBGb3JtTW9kZWwgPSB7XG4gIG5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIHJvbGU6IE9yZ1JvbGUuRWRpdG9yLFxuICBzZW5kRW1haWw6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgVXNlckludml0ZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChmb3JtRGF0YTogRm9ybU1vZGVsKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2goYWRkSW52aXRlZShmb3JtRGF0YSkpLnVud3JhcCgpO1xuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvb3JnL3VzZXJzLycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17ZGVmYXVsdFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIHsoeyByZWdpc3RlciwgY29udHJvbCwgZXJyb3JzIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmxvZ2luT3JFbWFpbH1cbiAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmxvZ2luT3JFbWFpbCA/ICdFbWFpbCBvciB1c2VybmFtZSBpcyByZXF1aXJlZCcgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgb3IgdXNlcm5hbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCdsb2dpbk9yRW1haWwnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBwbGFjZWhvbGRlcj1cImVtYWlsQGV4YW1wbGUuY29tXCIgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMubmFtZX0gbGFiZWw9XCJOYW1lXCI+XG4gICAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnKX0gcGxhY2Vob2xkZXI9XCIob3B0aW9uYWwpXCIgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMucm9sZX0gbGFiZWw9XCJSb2xlXCI+XG4gICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiA8UmFkaW9CdXR0b25Hcm91cCB7Li4uZmllbGR9IG9wdGlvbnM9e3JvbGVzfSAvPn1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb2xlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJTZW5kIGludml0ZSBlbWFpbFwiPlxuICAgICAgICAgICAgICA8U3dpdGNoIGlkPVwic2VuZC1lbWFpbC1zd2l0Y2hcIiB7Li4ucmVnaXN0ZXIoJ3NlbmRFbWFpbCcpfSAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXtsb2NhdGlvblV0aWwuYXNzdXJlQmFzZVVybChnZXRDb25maWcoKS5hcHBTdWJVcmwgKyAnL29yZy91c2VycycpfSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckludml0ZUZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFVzZXJJbnZpdGVGb3JtIGZyb20gJy4vVXNlckludml0ZUZvcm0nO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5cbmV4cG9ydCBjb25zdCBVc2VySW52aXRlUGFnZTogRkM8UHJvcHM+ID0gKHsgbmF2TW9kZWwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5JbnZpdGUgdXNlcjwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1iLTJcIj5cbiAgICAgICAgICBTZW5kIGludml0YXRpb24gb3IgYWRkIGV4aXN0aW5nIEdyYWZhbmEgdXNlciB0byB0aGUgb3JnYW5pemF0aW9uLlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodC13b3JkXCI+IHtjb250ZXh0U3J2LnVzZXIub3JnTmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VXNlckludml0ZUZvcm0gLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3VzZXJzJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFVzZXJJbnZpdGVQYWdlKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhvcml6b250YWxHcm91cCIsIkJ1dHRvbiIsIkxpbmtCdXR0b24iLCJJbnB1dCIsIlN3aXRjaCIsIlJhZGlvQnV0dG9uR3JvdXAiLCJGb3JtIiwiRmllbGQiLCJJbnB1dENvbnRyb2wiLCJsb2NhdGlvblNlcnZpY2UiLCJsb2NhdGlvblV0aWwiLCJnZXRDb25maWciLCJPcmdSb2xlIiwidXNlRGlzcGF0Y2giLCJhZGRJbnZpdGVlIiwicm9sZXMiLCJsYWJlbCIsInZhbHVlIiwiVmlld2VyIiwiRWRpdG9yIiwiQWRtaW4iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImVtYWlsIiwicm9sZSIsInNlbmRFbWFpbCIsIlVzZXJJbnZpdGVGb3JtIiwiZGlzcGF0Y2giLCJvblN1Ym1pdCIsImZvcm1EYXRhIiwidW53cmFwIiwicHVzaCIsInJlZ2lzdGVyIiwiY29udHJvbCIsImVycm9ycyIsImxvZ2luT3JFbWFpbCIsInVuZGVmaW5lZCIsInJlcXVpcmVkIiwiZmllbGQiLCJhc3N1cmVCYXNlVXJsIiwiYXBwU3ViVXJsIiwiY29ubmVjdCIsImNvbnRleHRTcnYiLCJnZXROYXZNb2RlbCIsIlBhZ2UiLCJVc2VySW52aXRlUGFnZSIsIm5hdk1vZGVsIiwidXNlciIsIm9yZ05hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==
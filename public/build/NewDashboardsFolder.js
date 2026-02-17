"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewDashboardsFolder"],{

/***/ "./public/app/features/folders/components/NewDashboardsFolder.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewDashboardsFolder": () => (/* binding */ NewDashboardsFolder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _manage_dashboards_services_ValidationSrv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Button;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'manage-dashboards')
});

const mapDispatchToProps = {
  createNewFolder: _state_actions__WEBPACK_IMPORTED_MODULE_4__.createNewFolder
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const initialFormModel = {
  folderName: ''
};
class NewDashboardsFolder extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", formData => {
      this.props.createNewFolder(formData.folderName);
    });

    _defineProperty(this, "validateFolderName", folderName => {
      return _manage_dashboards_services_ValidationSrv__WEBPACK_IMPORTED_MODULE_6__.validationSrv.validateNewFolderName(folderName).then(() => {
        return true;
      }).catch(e => {
        return e.message;
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: this.props.navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
          children: "New dashboard folder"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
          defaultValues: initialFormModel,
          onSubmit: this.onSubmit,
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Folder name",
              invalid: !!errors.folderName,
              error: errors.folderName && errors.folderName.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "folder-name-input"
              }, register('folderName', {
                required: 'Folder name is required.',
                validate: async v => await this.validateFolderName(v)
              })))
            }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              children: "Create"
            }))]
          })
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewDashboardsFolder));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3RGFzaGJvYXJkc0ZvbGRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUVBLE1BQU1XLGVBQWUsR0FBSUMsS0FBRCxLQUF3QjtBQUM5Q0MsRUFBQUEsUUFBUSxFQUFFSix3RUFBVyxDQUFDRyxLQUFLLENBQUNFLFFBQVAsRUFBaUIsbUJBQWpCO0FBRHlCLENBQXhCLENBQXhCOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHO0FBQ3pCUCxFQUFBQSxlQUFlQSw2REFBQUE7QUFEVSxDQUEzQjtBQUlBLE1BQU1RLFNBQVMsR0FBR2Qsb0RBQU8sQ0FBQ1MsZUFBRCxFQUFrQkksa0JBQWxCLENBQXpCO0FBUUEsTUFBTUUsZ0JBQTJCLEdBQUc7QUFBRUMsRUFBQUEsVUFBVSxFQUFFO0FBQWQsQ0FBcEM7QUFJTyxNQUFNQyxtQkFBTixTQUFrQ2xCLGdEQUFsQyxDQUF1RDtBQUFBO0FBQUE7O0FBQUEsc0NBQ2hEbUIsUUFBRCxJQUF5QjtBQUNsQyxXQUFLQyxLQUFMLENBQVdiLGVBQVgsQ0FBMkJZLFFBQVEsQ0FBQ0YsVUFBcEM7QUFDRCxLQUgyRDs7QUFBQSxnREFLdENBLFVBQUQsSUFBd0I7QUFDM0MsYUFBT1IsMEdBQUEsQ0FDa0JRLFVBRGxCLEVBRUpLLElBRkksQ0FFQyxNQUFNO0FBQ1YsZUFBTyxJQUFQO0FBQ0QsT0FKSSxFQUtKQyxLQUxJLENBS0dDLENBQUQsSUFBTztBQUNaLGVBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNELE9BUEksQ0FBUDtBQVFELEtBZDJEO0FBQUE7O0FBZ0I1REMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsdURBQUMscUVBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBS04sS0FBTCxDQUFXUixRQUEzQjtBQUFBLDZCQUNFLHdEQUFDLDhFQUFEO0FBQUEsNENBQ0U7QUFBQTtBQUFBLFVBREYsZ0JBRUUsdURBQUMsNkNBQUQ7QUFBTSx1QkFBYSxFQUFFSSxnQkFBckI7QUFBdUMsa0JBQVEsRUFBRSxLQUFLVyxRQUF0RDtBQUFBLG9CQUNHLENBQUM7QUFBRUMsWUFBQUEsUUFBRjtBQUFZQyxZQUFBQTtBQUFaLFdBQUQsa0JBQ0M7QUFBQSxvQ0FDRSx1REFBQyw4Q0FBRDtBQUNFLG1CQUFLLEVBQUMsYUFEUjtBQUVFLHFCQUFPLEVBQUUsQ0FBQyxDQUFDQSxNQUFNLENBQUNaLFVBRnBCO0FBR0UsbUJBQUssRUFBRVksTUFBTSxDQUFDWixVQUFQLElBQXFCWSxNQUFNLENBQUNaLFVBQVAsQ0FBa0JRLE9BSGhEO0FBQUEscUNBS0UsdURBQUMsOENBQUQ7QUFDRSxrQkFBRSxFQUFDO0FBREwsaUJBRU1HLFFBQVEsQ0FBQyxZQUFELEVBQWU7QUFDekJFLGdCQUFBQSxRQUFRLEVBQUUsMEJBRGU7QUFFekJDLGdCQUFBQSxRQUFRLEVBQUUsTUFBT0MsQ0FBUCxJQUFhLE1BQU0sS0FBS0Msa0JBQUwsQ0FBd0JELENBQXhCO0FBRkosZUFBZixDQUZkO0FBTEYsY0FERixxQ0FjRSx1REFBQywrQ0FBRDtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBRkosVUFGRjtBQUFBO0FBREYsTUFERjtBQTJCRDs7QUE1QzJEO0FBK0M5RCxpRUFBZWpCLFNBQVMsQ0FBQ0csbUJBQUQsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9mb2xkZXJzL2NvbXBvbmVudHMvTmV3RGFzaGJvYXJkc0ZvbGRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIEZvcm0sIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlTmV3Rm9sZGVyIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IHZhbGlkYXRpb25TcnYgfSBmcm9tICcuLi8uLi9tYW5hZ2UtZGFzaGJvYXJkcy9zZXJ2aWNlcy9WYWxpZGF0aW9uU3J2JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdtYW5hZ2UtZGFzaGJvYXJkcycpLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgY3JlYXRlTmV3Rm9sZGVyLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyB7fVxuXG5pbnRlcmZhY2UgRm9ybU1vZGVsIHtcbiAgZm9sZGVyTmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBpbml0aWFsRm9ybU1vZGVsOiBGb3JtTW9kZWwgPSB7IGZvbGRlck5hbWU6ICcnIH07XG5cbnR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY2xhc3MgTmV3RGFzaGJvYXJkc0ZvbGRlciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgb25TdWJtaXQgPSAoZm9ybURhdGE6IEZvcm1Nb2RlbCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY3JlYXRlTmV3Rm9sZGVyKGZvcm1EYXRhLmZvbGRlck5hbWUpO1xuICB9O1xuXG4gIHZhbGlkYXRlRm9sZGVyTmFtZSA9IChmb2xkZXJOYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGlvblNydlxuICAgICAgLnZhbGlkYXRlTmV3Rm9sZGVyTmFtZShmb2xkZXJOYW1lKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGUubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e3RoaXMucHJvcHMubmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgICA8aDM+TmV3IGRhc2hib2FyZCBmb2xkZXI8L2gzPlxuICAgICAgICAgIDxGb3JtIGRlZmF1bHRWYWx1ZXM9e2luaXRpYWxGb3JtTW9kZWx9IG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9sZGVyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZm9sZGVyTmFtZX1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZm9sZGVyTmFtZSAmJiBlcnJvcnMuZm9sZGVyTmFtZS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cImZvbGRlci1uYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdmb2xkZXJOYW1lJywge1xuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRm9sZGVyIG5hbWUgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogYXN5bmMgKHYpID0+IGF3YWl0IHRoaXMudmFsaWRhdGVGb2xkZXJOYW1lKHYpLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKE5ld0Rhc2hib2FyZHNGb2xkZXIpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJCdXR0b24iLCJJbnB1dCIsIkZvcm0iLCJGaWVsZCIsIlBhZ2UiLCJjcmVhdGVOZXdGb2xkZXIiLCJnZXROYXZNb2RlbCIsInZhbGlkYXRpb25TcnYiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJpbml0aWFsRm9ybU1vZGVsIiwiZm9sZGVyTmFtZSIsIk5ld0Rhc2hib2FyZHNGb2xkZXIiLCJmb3JtRGF0YSIsInByb3BzIiwidmFsaWRhdGVOZXdGb2xkZXJOYW1lIiwidGhlbiIsImNhdGNoIiwiZSIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJvblN1Ym1pdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsInYiLCJ2YWxpZGF0ZUZvbGRlck5hbWUiXSwic291cmNlUm9vdCI6IiJ9
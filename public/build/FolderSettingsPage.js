"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderSettingsPage"],{

/***/ "./public/app/features/folders/FolderSettingsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderSettingsPage": () => (/* binding */ FolderSettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/folders/state/reducers.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _label;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Input
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;










const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, `folder-settings-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_7__.getLoadingNav)(2)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_6__.getFolderByUid,
  saveFolder: _state_actions__WEBPACK_IMPORTED_MODULE_6__.saveFolder,
  setFolderTitle: _state_reducers__WEBPACK_IMPORTED_MODULE_8__.setFolderTitle,
  deleteFolder: _state_actions__WEBPACK_IMPORTED_MODULE_6__.deleteFolder
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class FolderSettingsPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onTitleChange", evt => {
      this.props.setFolderTitle(evt.target.value);
    });

    _defineProperty(this, "onSave", async evt => {
      evt.preventDefault();
      evt.stopPropagation();
      this.setState({
        isLoading: true
      });
      await this.props.saveFolder(this.props.folder);
      this.setState({
        isLoading: false
      });
    });

    _defineProperty(this, "onDelete", evt => {
      evt.stopPropagation();
      evt.preventDefault();
      const confirmationText = `Do you want to delete this folder and all its dashboards and alerts?`;
      app_core_app_events__WEBPACK_IMPORTED_MODULE_4__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_9__.ShowConfirmModalEvent({
        title: 'Delete',
        text: confirmationText,
        icon: 'trash-alt',
        yesText: 'Delete',
        onConfirm: () => {
          this.props.deleteFolder(this.props.folder.uid);
        }
      }));
    });

    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.props.getFolderByUid(this.props.folderUid);
  }

  render() {
    const {
      navModel,
      folder
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        isLoading: this.state.isLoading,
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
          className: "page-sub-heading",
          children: "Folder settings"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "section gf-form-group",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
            name: "folderSettingsForm",
            onSubmit: this.onSave,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "gf-form",
              children: [_label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                className: "gf-form-label width-7",
                children: "Name"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Input, {
                type: "text",
                className: "gf-form-input width-30",
                value: folder.title,
                onChange: this.onTitleChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "gf-form-button-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                disabled: !folder.canSave || !folder.hasChanged,
                children: "Save"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "destructive",
                onClick: this.onDelete,
                disabled: !folder.canDelete,
                children: "Delete"
              })]
            })]
          })
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderSettingsPage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQVEsRUFBRUksUUFBaEI7QUFBQSw2QkFDRSx5REFBQyw4RUFBRDtBQUFlLGlCQUFTLEVBQUUsS0FBS0wsS0FBTCxDQUFXbUIsU0FBckM7QUFBQSw0Q0FDRTtBQUFJLG1CQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBLFVBREYsZ0JBR0U7QUFBSyxtQkFBUyxFQUFDLHVCQUFmO0FBQUEsaUNBQ0U7QUFBTSxnQkFBSSxFQUFDLG9CQUFYO0FBQWdDLG9CQUFRLEVBQUUsS0FBS1UsTUFBL0M7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBLDBEQUNFO0FBQU8seUJBQVMsRUFBQyx1QkFBakI7QUFBQTtBQUFBLGdCQURGLGdCQUVFLHdEQUFDLEtBQUQ7QUFDRSxvQkFBSSxFQUFDLE1BRFA7QUFFRSx5QkFBUyxFQUFDLHdCQUZaO0FBR0UscUJBQUssRUFBRXJCLE1BQU0sQ0FBQ2MsS0FIaEI7QUFJRSx3QkFBUSxFQUFFLEtBQUtRO0FBSmpCLGdCQUZGO0FBQUEsY0FERixlQVVFO0FBQUssdUJBQVMsRUFBQyxvQkFBZjtBQUFBLHNDQUNFLHdEQUFDLCtDQUFEO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQXNCLHdCQUFRLEVBQUUsQ0FBQ3RCLE1BQU0sQ0FBQ3VCLE9BQVIsSUFBbUIsQ0FBQ3ZCLE1BQU0sQ0FBQ3dCLFVBQTNEO0FBQUE7QUFBQSxnQkFERixlQUlFLHdEQUFDLCtDQUFEO0FBQVEsdUJBQU8sRUFBQyxhQUFoQjtBQUE4Qix1QkFBTyxFQUFFLEtBQUtDLFFBQTVDO0FBQXNELHdCQUFRLEVBQUUsQ0FBQ3pCLE1BQU0sQ0FBQzBCLFNBQXhFO0FBQUE7QUFBQSxnQkFKRjtBQUFBLGNBVkY7QUFBQTtBQURGLFVBSEY7QUFBQTtBQURGLE1BREY7QUE2QkQ7O0FBMUVpRTtBQTZFcEUsaUVBQWV4QixTQUFTLENBQUNDLGtCQUFELENBQXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZm9sZGVycy9Gb2xkZXJTZXR0aW5nc1BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCdXR0b24sIExlZ2FjeUZvcm1zIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuY29uc3QgeyBJbnB1dCB9ID0gTGVnYWN5Rm9ybXM7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBkZWxldGVGb2xkZXIsIGdldEZvbGRlckJ5VWlkLCBzYXZlRm9sZGVyIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldExvYWRpbmdOYXYgfSBmcm9tICcuL3N0YXRlL25hdk1vZGVsJztcbmltcG9ydCB7IHNldEZvbGRlclRpdGxlIH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBTaG93Q29uZmlybU1vZGFsRXZlbnQgfSBmcm9tICcuLi8uLi90eXBlcy9ldmVudHMnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogT3duUHJvcHMpID0+IHtcbiAgY29uc3QgdWlkID0gcHJvcHMubWF0Y2gucGFyYW1zLnVpZDtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsIGBmb2xkZXItc2V0dGluZ3MtJHt1aWR9YCwgZ2V0TG9hZGluZ05hdigyKSksXG4gICAgZm9sZGVyVWlkOiB1aWQsXG4gICAgZm9sZGVyOiBzdGF0ZS5mb2xkZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldEZvbGRlckJ5VWlkLFxuICBzYXZlRm9sZGVyLFxuICBzZXRGb2xkZXJUaXRsZSxcbiAgZGVsZXRlRm9sZGVyLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEZvbGRlclNldHRpbmdzUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRGb2xkZXJCeVVpZCh0aGlzLnByb3BzLmZvbGRlclVpZCk7XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLnNldEZvbGRlclRpdGxlKGV2dC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIG9uU2F2ZSA9IGFzeW5jIChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgYXdhaXQgdGhpcy5wcm9wcy5zYXZlRm9sZGVyKHRoaXMucHJvcHMuZm9sZGVyKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkRlbGV0ZSA9IChldnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY29uZmlybWF0aW9uVGV4dCA9IGBEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBmb2xkZXIgYW5kIGFsbCBpdHMgZGFzaGJvYXJkcyBhbmQgYWxlcnRzP2A7XG4gICAgYXBwRXZlbnRzLnB1Ymxpc2goXG4gICAgICBuZXcgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50KHtcbiAgICAgICAgdGl0bGU6ICdEZWxldGUnLFxuICAgICAgICB0ZXh0OiBjb25maXJtYXRpb25UZXh0LFxuICAgICAgICBpY29uOiAndHJhc2gtYWx0JyxcbiAgICAgICAgeWVzVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuZGVsZXRlRm9sZGVyKHRoaXMucHJvcHMuZm9sZGVyLnVpZCk7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIGZvbGRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e3RoaXMuc3RhdGUuaXNMb2FkaW5nfT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPkZvbGRlciBzZXR0aW5nczwvaDM+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cImZvbGRlclNldHRpbmdzRm9ybVwiIG9uU3VibWl0PXt0aGlzLm9uU2F2ZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTdcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0taW5wdXQgd2lkdGgtMzBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZvbGRlci50aXRsZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGl0bGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFmb2xkZXIuY2FuU2F2ZSB8fCAhZm9sZGVyLmhhc0NoYW5nZWR9PlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17dGhpcy5vbkRlbGV0ZX0gZGlzYWJsZWQ9eyFmb2xkZXIuY2FuRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKEZvbGRlclNldHRpbmdzUGFnZSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsIkJ1dHRvbiIsIkxlZ2FjeUZvcm1zIiwiSW5wdXQiLCJQYWdlIiwiYXBwRXZlbnRzIiwiZ2V0TmF2TW9kZWwiLCJkZWxldGVGb2xkZXIiLCJnZXRGb2xkZXJCeVVpZCIsInNhdmVGb2xkZXIiLCJnZXRMb2FkaW5nTmF2Iiwic2V0Rm9sZGVyVGl0bGUiLCJTaG93Q29uZmlybU1vZGFsRXZlbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb3BzIiwidWlkIiwibWF0Y2giLCJwYXJhbXMiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiZm9sZGVyVWlkIiwiZm9sZGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiRm9sZGVyU2V0dGluZ3NQYWdlIiwiY29uc3RydWN0b3IiLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2V0U3RhdGUiLCJpc0xvYWRpbmciLCJjb25maXJtYXRpb25UZXh0IiwicHVibGlzaCIsInRpdGxlIiwidGV4dCIsImljb24iLCJ5ZXNUZXh0Iiwib25Db25maXJtIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJvblNhdmUiLCJvblRpdGxlQ2hhbmdlIiwiY2FuU2F2ZSIsImhhc0NoYW5nZWQiLCJvbkRlbGV0ZSIsImNhbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=
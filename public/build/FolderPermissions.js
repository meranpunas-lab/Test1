"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderPermissions"],{

/***/ "./public/app/features/folders/AccessControlFolderPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessControlFolderPermissions": () => (/* binding */ AccessControlFolderPermissions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/AccessControl/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function mapStateToProps(state, props) {
  const uid = props.match.params.uid;
  return {
    uid: uid,
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, `folder-permissions-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_6__.getLoadingNav)(1))
  };
}

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_8__.getFolderByUid
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
const AccessControlFolderPermissions = ({
  uid,
  getFolderByUid,
  navModel
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getFolderByUid(uid);
  }, [getFolderByUid, uid]);
  const canListUsers = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.OrgUsersRead);
  const canSetPermissions = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.FoldersPermissionsWrite);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_1__.Permissions, {
        resource: "folders",
        resourceId: uid,
        canListUsers: canListUsers,
        canSetPermissions: canSetPermissions
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(AccessControlFolderPermissions));

/***/ }),

/***/ "./public/app/features/folders/FolderPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPermissions": () => (/* binding */ FolderPermissions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var app_core_components_PermissionList_PermissionList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/PermissionList/PermissionList.tsx");
/* harmony import */ var app_core_components_PermissionList_AddPermission__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/PermissionList/AddPermission.tsx");
/* harmony import */ var app_core_components_PermissionList_PermissionsInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/PermissionList/PermissionsInfo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _h, _Tooltip, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, `folder-permissions-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_7__.getLoadingNav)(1)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_6__.getFolderByUid,
  getFolderPermissions: _state_actions__WEBPACK_IMPORTED_MODULE_6__.getFolderPermissions,
  updateFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_6__.updateFolderPermission,
  removeFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_6__.removeFolderPermission,
  addFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_6__.addFolderPermission
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class FolderPermissions extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onOpenAddPermissions", () => {
      this.setState({
        isAdding: true
      });
    });

    _defineProperty(this, "onRemoveItem", item => {
      this.props.removeFolderPermission(item);
    });

    _defineProperty(this, "onPermissionChanged", (item, level) => {
      this.props.updateFolderPermission(item, level);
    });

    _defineProperty(this, "onAddPermission", newItem => {
      return this.props.addFolderPermission(newItem);
    });

    _defineProperty(this, "onCancelAddPermission", () => {
      this.setState({
        isAdding: false
      });
    });

    this.state = {
      isAdding: false
    };
  }

  componentDidMount() {
    this.props.getFolderByUid(this.props.folderUid);
    this.props.getFolderPermissions(this.props.folderUid);
  }

  render() {
    const {
      navModel,
      folder
    } = this.props;
    const {
      isAdding
    } = this.state;

    if (folder.id === 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        navModel: navModel,
        children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
          isLoading: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {})
        }))
      });
    }

    const folderInfo = {
      title: folder.title,
      url: folder.url,
      id: folder.id
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "page-action-bar",
          children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
            className: "page-sub-heading",
            children: "Folder Permissions"
          })), _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
            placement: "auto",
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PermissionList_PermissionsInfo__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              className: "icon--has-hover page-sub-heading-icon",
              name: "question-circle"
            })
          })), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "pull-right",
            onClick: this.onOpenAddPermissions,
            disabled: isAdding,
            children: "Add Permission"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_4__.SlideDown, {
          in: isAdding,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PermissionList_AddPermission__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onAddPermission: this.onAddPermission,
            onCancel: this.onCancelAddPermission
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PermissionList_PermissionList__WEBPACK_IMPORTED_MODULE_8__["default"], {
          items: folder.permissions,
          onRemoveItem: this.onRemoveItem,
          onPermissionChanged: this.onPermissionChanged,
          isFetching: false,
          folderInfo: folderInfo
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderPermissions));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZDtBQUtFLG9CQUFVLEVBQUVSO0FBTGQsVUFkRjtBQUFBO0FBREYsTUFERjtBQTBCRDs7QUE1RWdFO0FBK0VuRSxpRUFBZS9CLFNBQVMsQ0FBQ3FCLGlCQUFELENBQXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZm9sZGVycy9BY2Nlc3NDb250cm9sRm9sZGVyUGVybWlzc2lvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2ZvbGRlcnMvRm9sZGVyUGVybWlzc2lvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQZXJtaXNzaW9ucyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgZ2V0TG9hZGluZ05hdiB9IGZyb20gJy4vc3RhdGUvbmF2TW9kZWwnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Rm9sZGVyQnlVaWQgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuXG5pbnRlcmZhY2UgUm91dGVQcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogUm91dGVQcm9wcykge1xuICBjb25zdCB1aWQgPSBwcm9wcy5tYXRjaC5wYXJhbXMudWlkO1xuICByZXR1cm4ge1xuICAgIHVpZDogdWlkLFxuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgYGZvbGRlci1wZXJtaXNzaW9ucy0ke3VpZH1gLCBnZXRMb2FkaW5nTmF2KDEpKSxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRGb2xkZXJCeVVpZCxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuZXhwb3J0IHR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNvbnN0IEFjY2Vzc0NvbnRyb2xGb2xkZXJQZXJtaXNzaW9ucyA9ICh7IHVpZCwgZ2V0Rm9sZGVyQnlVaWQsIG5hdk1vZGVsIH06IFByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Rm9sZGVyQnlVaWQodWlkKTtcbiAgfSwgW2dldEZvbGRlckJ5VWlkLCB1aWRdKTtcblxuICBjb25zdCBjYW5MaXN0VXNlcnMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JlYWQpO1xuICBjb25zdCBjYW5TZXRQZXJtaXNzaW9ucyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkZvbGRlcnNQZXJtaXNzaW9uc1dyaXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPFBlcm1pc3Npb25zXG4gICAgICAgICAgcmVzb3VyY2U9XCJmb2xkZXJzXCJcbiAgICAgICAgICByZXNvdXJjZUlkPXt1aWR9XG4gICAgICAgICAgY2FuTGlzdFVzZXJzPXtjYW5MaXN0VXNlcnN9XG4gICAgICAgICAgY2FuU2V0UGVybWlzc2lvbnM9e2NhblNldFBlcm1pc3Npb25zfVxuICAgICAgICAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihBY2Nlc3NDb250cm9sRm9sZGVyUGVybWlzc2lvbnMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFRvb2x0aXAsIEljb24sIEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNsaWRlRG93biB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9TbGlkZURvd24nO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRBY2wsIFBlcm1pc3Npb25MZXZlbCwgTmV3RGFzaGJvYXJkQWNsSXRlbSB9IGZyb20gJ2FwcC90eXBlcy9hY2wnO1xuaW1wb3J0IHtcbiAgZ2V0Rm9sZGVyQnlVaWQsXG4gIGdldEZvbGRlclBlcm1pc3Npb25zLFxuICB1cGRhdGVGb2xkZXJQZXJtaXNzaW9uLFxuICByZW1vdmVGb2xkZXJQZXJtaXNzaW9uLFxuICBhZGRGb2xkZXJQZXJtaXNzaW9uLFxufSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0TG9hZGluZ05hdiB9IGZyb20gJy4vc3RhdGUvbmF2TW9kZWwnO1xuaW1wb3J0IFBlcm1pc3Npb25MaXN0IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGVybWlzc2lvbkxpc3QvUGVybWlzc2lvbkxpc3QnO1xuaW1wb3J0IEFkZFBlcm1pc3Npb24gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QZXJtaXNzaW9uTGlzdC9BZGRQZXJtaXNzaW9uJztcbmltcG9ydCBQZXJtaXNzaW9uc0luZm8gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QZXJtaXNzaW9uTGlzdC9QZXJtaXNzaW9uc0luZm8nO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogT3duUHJvcHMpID0+IHtcbiAgY29uc3QgdWlkID0gcHJvcHMubWF0Y2gucGFyYW1zLnVpZDtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsIGBmb2xkZXItcGVybWlzc2lvbnMtJHt1aWR9YCwgZ2V0TG9hZGluZ05hdigxKSksXG4gICAgZm9sZGVyVWlkOiB1aWQsXG4gICAgZm9sZGVyOiBzdGF0ZS5mb2xkZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldEZvbGRlckJ5VWlkLFxuICBnZXRGb2xkZXJQZXJtaXNzaW9ucyxcbiAgdXBkYXRlRm9sZGVyUGVybWlzc2lvbixcbiAgcmVtb3ZlRm9sZGVyUGVybWlzc2lvbixcbiAgYWRkRm9sZGVyUGVybWlzc2lvbixcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBpc0FkZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEZvbGRlclBlcm1pc3Npb25zIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQWRkaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRGb2xkZXJCeVVpZCh0aGlzLnByb3BzLmZvbGRlclVpZCk7XG4gICAgdGhpcy5wcm9wcy5nZXRGb2xkZXJQZXJtaXNzaW9ucyh0aGlzLnByb3BzLmZvbGRlclVpZCk7XG4gIH1cblxuICBvbk9wZW5BZGRQZXJtaXNzaW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBZGRpbmc6IHRydWUgfSk7XG4gIH07XG5cbiAgb25SZW1vdmVJdGVtID0gKGl0ZW06IERhc2hib2FyZEFjbCkgPT4ge1xuICAgIHRoaXMucHJvcHMucmVtb3ZlRm9sZGVyUGVybWlzc2lvbihpdGVtKTtcbiAgfTtcblxuICBvblBlcm1pc3Npb25DaGFuZ2VkID0gKGl0ZW06IERhc2hib2FyZEFjbCwgbGV2ZWw6IFBlcm1pc3Npb25MZXZlbCkgPT4ge1xuICAgIHRoaXMucHJvcHMudXBkYXRlRm9sZGVyUGVybWlzc2lvbihpdGVtLCBsZXZlbCk7XG4gIH07XG5cbiAgb25BZGRQZXJtaXNzaW9uID0gKG5ld0l0ZW06IE5ld0Rhc2hib2FyZEFjbEl0ZW0pID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5hZGRGb2xkZXJQZXJtaXNzaW9uKG5ld0l0ZW0pO1xuICB9O1xuXG4gIG9uQ2FuY2VsQWRkUGVybWlzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBZGRpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBmb2xkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc0FkZGluZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChmb2xkZXIuaWQgPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXt0cnVlfT5cbiAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgICA8L1BhZ2U+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGZvbGRlckluZm8gPSB7IHRpdGxlOiBmb2xkZXIudGl0bGUsIHVybDogZm9sZGVyLnVybCwgaWQ6IGZvbGRlci5pZCB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPkZvbGRlciBQZXJtaXNzaW9uczwvaDM+XG4gICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJhdXRvXCIgY29udGVudD17PFBlcm1pc3Npb25zSW5mbyAvPn0+XG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImljb24tLWhhcy1ob3ZlciBwYWdlLXN1Yi1oZWFkaW5nLWljb25cIiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgLz5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyX19zcGFjZXJcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIgb25DbGljaz17dGhpcy5vbk9wZW5BZGRQZXJtaXNzaW9uc30gZGlzYWJsZWQ9e2lzQWRkaW5nfT5cbiAgICAgICAgICAgICAgQWRkIFBlcm1pc3Npb25cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTbGlkZURvd24gaW49e2lzQWRkaW5nfT5cbiAgICAgICAgICAgIDxBZGRQZXJtaXNzaW9uIG9uQWRkUGVybWlzc2lvbj17dGhpcy5vbkFkZFBlcm1pc3Npb259IG9uQ2FuY2VsPXt0aGlzLm9uQ2FuY2VsQWRkUGVybWlzc2lvbn0gLz5cbiAgICAgICAgICA8L1NsaWRlRG93bj5cbiAgICAgICAgICA8UGVybWlzc2lvbkxpc3RcbiAgICAgICAgICAgIGl0ZW1zPXtmb2xkZXIucGVybWlzc2lvbnN9XG4gICAgICAgICAgICBvblJlbW92ZUl0ZW09e3RoaXMub25SZW1vdmVJdGVtfVxuICAgICAgICAgICAgb25QZXJtaXNzaW9uQ2hhbmdlZD17dGhpcy5vblBlcm1pc3Npb25DaGFuZ2VkfVxuICAgICAgICAgICAgaXNGZXRjaGluZz17ZmFsc2V9XG4gICAgICAgICAgICBmb2xkZXJJbmZvPXtmb2xkZXJJbmZvfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihGb2xkZXJQZXJtaXNzaW9ucyk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJQZXJtaXNzaW9ucyIsImNvbm5lY3QiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJjb250ZXh0U3J2IiwiZ2V0TG9hZGluZ05hdiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJnZXRGb2xkZXJCeVVpZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvcHMiLCJ1aWQiLCJtYXRjaCIsInBhcmFtcyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJBY2Nlc3NDb250cm9sRm9sZGVyUGVybWlzc2lvbnMiLCJjYW5MaXN0VXNlcnMiLCJoYXNQZXJtaXNzaW9uIiwiT3JnVXNlcnNSZWFkIiwiY2FuU2V0UGVybWlzc2lvbnMiLCJGb2xkZXJzUGVybWlzc2lvbnNXcml0ZSIsIlB1cmVDb21wb25lbnQiLCJUb29sdGlwIiwiSWNvbiIsIkJ1dHRvbiIsIlNsaWRlRG93biIsImdldEZvbGRlclBlcm1pc3Npb25zIiwidXBkYXRlRm9sZGVyUGVybWlzc2lvbiIsInJlbW92ZUZvbGRlclBlcm1pc3Npb24iLCJhZGRGb2xkZXJQZXJtaXNzaW9uIiwiUGVybWlzc2lvbkxpc3QiLCJBZGRQZXJtaXNzaW9uIiwiUGVybWlzc2lvbnNJbmZvIiwiZm9sZGVyVWlkIiwiZm9sZGVyIiwiRm9sZGVyUGVybWlzc2lvbnMiLCJjb25zdHJ1Y3RvciIsInNldFN0YXRlIiwiaXNBZGRpbmciLCJpdGVtIiwibGV2ZWwiLCJuZXdJdGVtIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJpZCIsImZvbGRlckluZm8iLCJ0aXRsZSIsInVybCIsIm9uT3BlbkFkZFBlcm1pc3Npb25zIiwib25BZGRQZXJtaXNzaW9uIiwib25DYW5jZWxBZGRQZXJtaXNzaW9uIiwicGVybWlzc2lvbnMiLCJvblJlbW92ZUl0ZW0iLCJvblBlcm1pc3Npb25DaGFuZ2VkIl0sInNvdXJjZVJvb3QiOiIifQ==
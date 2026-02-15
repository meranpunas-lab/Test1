"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AdminListOrgsPage"],{

/***/ "./public/app/features/admin/AdminListOrgsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminListOrgsPages)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _AdminOrgsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/AdminOrgsTable.tsx");
/* harmony import */ var react_use_lib_useAsyncFn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsyncFn.js");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;















const deleteOrg = async orgId => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getBackendSrv)().delete('/api/orgs/' + orgId);
};

const getOrgs = async () => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getBackendSrv)().get('/api/orgs');
};

const getErrorMessage = error => {
  var _error$data;

  return (error === null || error === void 0 ? void 0 : (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.message) || 'An unexpected error happened.';
};

function AdminListOrgsPages() {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.navIndex);
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, 'global-orgs');
  const [state, fetchOrgs] = (0,react_use_lib_useAsyncFn__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => await getOrgs(), []);
  const canCreateOrg = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.OrgsCreate);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchOrgs();
  }, [fetchOrgs]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "page-action-bar",
          children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
            icon: "plus",
            href: "org/new",
            disabled: !canCreateOrg,
            children: "New org"
          })]
        }), state.error && getErrorMessage(state.error), state.loading && 'Fetching organizations', state.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AdminOrgsTable__WEBPACK_IMPORTED_MODULE_6__.AdminOrgsTable, {
          orgs: state.value,
          onDelete: orgId => {
            deleteOrg(orgId).then(() => fetchOrgs());
          }
        })]
      })
    })
  });
}

/***/ }),

/***/ "./public/app/features/admin/AdminOrgsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminOrgsTable": () => (/* binding */ AdminOrgsTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _br, _small;







function AdminOrgsTable({
  orgs,
  onDelete
}) {
  const canDeleteOrgs = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.OrgsDelete);
  const [deleteOrg, setDeleteOrg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
    className: "filter-table form-inline filter-table--hover",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "ID"
        })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "Name"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          style: {
            width: '1%'
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
      children: orgs.map(org => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "link-td",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: `admin/orgs/edit/${org.id}`,
            children: org.id
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "link-td",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: `admin/orgs/edit/${org.id}`,
            children: org.name
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "text-right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "destructive",
            size: "sm",
            icon: "times",
            onClick: () => setDeleteOrg(org),
            "aria-label": "Delete org",
            disabled: !canDeleteOrgs
          })
        })]
      }, `${org.id}-${org.name}`))
    }), deleteOrg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
      isOpen: true,
      icon: "trash-alt",
      title: "Delete",
      body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: ["Are you sure you want to delete '", deleteOrg.name, "'?", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {})), " ", _small || (_small = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
          children: "All dashboards for this organization will be removed!"
        }))]
      }),
      confirmText: "Delete",
      onDismiss: () => setDeleteOrg(undefined),
      onConfirm: () => {
        onDelete(deleteOrg.id);
        setDeleteOrg(undefined);
      }
    })]
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQUFBLFlBQVksQ0FBQ00sU0FBRCxDQUFaO0FBQ0Q7QUFmSCxNQS9CSjtBQUFBLElBREY7QUFvREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9BZG1pbkxpc3RPcmdzUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vQWRtaW5PcmdzVGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuaW1wb3J0IHsgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEFkbWluT3Jnc1RhYmxlIH0gZnJvbSAnLi9BZG1pbk9yZ3NUYWJsZSc7XG5pbXBvcnQgdXNlQXN5bmNGbiBmcm9tICdyZWFjdC11c2UvbGliL3VzZUFzeW5jRm4nO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5jb25zdCBkZWxldGVPcmcgPSBhc3luYyAob3JnSWQ6IG51bWJlcikgPT4ge1xuICByZXR1cm4gYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZSgnL2FwaS9vcmdzLycgKyBvcmdJZCk7XG59O1xuXG5jb25zdCBnZXRPcmdzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9vcmdzJyk7XG59O1xuXG5jb25zdCBnZXRFcnJvck1lc3NhZ2UgPSAoZXJyb3I6IGFueSkgPT4ge1xuICByZXR1cm4gZXJyb3I/LmRhdGE/Lm1lc3NhZ2UgfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWQuJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluTGlzdE9yZ3NQYWdlcygpIHtcbiAgY29uc3QgbmF2SW5kZXggPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KTtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChuYXZJbmRleCwgJ2dsb2JhbC1vcmdzJyk7XG4gIGNvbnN0IFtzdGF0ZSwgZmV0Y2hPcmdzXSA9IHVzZUFzeW5jRm4oYXN5bmMgKCkgPT4gYXdhaXQgZ2V0T3JncygpLCBbXSk7XG4gIGNvbnN0IGNhbkNyZWF0ZU9yZyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ3NDcmVhdGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hPcmdzKCk7XG4gIH0sIFtmZXRjaE9yZ3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJfX3NwYWNlclwiIC8+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBpY29uPVwicGx1c1wiIGhyZWY9XCJvcmcvbmV3XCIgZGlzYWJsZWQ9eyFjYW5DcmVhdGVPcmd9PlxuICAgICAgICAgICAgICBOZXcgb3JnXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3N0YXRlLmVycm9yICYmIGdldEVycm9yTWVzc2FnZShzdGF0ZS5lcnJvcil9XG4gICAgICAgICAge3N0YXRlLmxvYWRpbmcgJiYgJ0ZldGNoaW5nIG9yZ2FuaXphdGlvbnMnfVxuICAgICAgICAgIHtzdGF0ZS52YWx1ZSAmJiAoXG4gICAgICAgICAgICA8QWRtaW5PcmdzVGFibGVcbiAgICAgICAgICAgICAgb3Jncz17c3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgIG9uRGVsZXRlPXsob3JnSWQpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGVPcmcob3JnSWQpLnRoZW4oKCkgPT4gZmV0Y2hPcmdzKCkpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBPcmdhbml6YXRpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9yZ3M6IE9yZ2FuaXphdGlvbltdO1xuICBvbkRlbGV0ZTogKG9yZ0lkOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBZG1pbk9yZ3NUYWJsZSh7IG9yZ3MsIG9uRGVsZXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IGNhbkRlbGV0ZU9yZ3MgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdzRGVsZXRlKTtcblxuICBjb25zdCBbZGVsZXRlT3JnLCBzZXREZWxldGVPcmddID0gdXNlU3RhdGU8T3JnYW5pemF0aW9uPigpO1xuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGUgZm9ybS1pbmxpbmUgZmlsdGVyLXRhYmxlLS1ob3ZlclwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMSUnIH19PjwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7b3Jncy5tYXAoKG9yZykgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e2Ake29yZy5pZH0tJHtvcmcubmFtZX1gfT5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2BhZG1pbi9vcmdzL2VkaXQvJHtvcmcuaWR9YH0+e29yZy5pZH08L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17YGFkbWluL29yZ3MvZWRpdC8ke29yZy5pZH1gfT57b3JnLm5hbWV9PC9hPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREZWxldGVPcmcob3JnKX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIG9yZ1wiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5EZWxldGVPcmdzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApKX1cbiAgICAgIDwvdGJvZHk+XG4gICAgICB7ZGVsZXRlT3JnICYmIChcbiAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgIGlzT3BlblxuICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlXCJcbiAgICAgICAgICBib2R5PXtcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJmFwb3M7e2RlbGV0ZU9yZy5uYW1lfSZhcG9zOz9cbiAgICAgICAgICAgICAgPGJyIC8+IDxzbWFsbD5BbGwgZGFzaGJvYXJkcyBmb3IgdGhpcyBvcmdhbml6YXRpb24gd2lsbCBiZSByZW1vdmVkITwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uZmlybVRleHQ9XCJEZWxldGVcIlxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RGVsZXRlT3JnKHVuZGVmaW5lZCl9XG4gICAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XG4gICAgICAgICAgICBvbkRlbGV0ZShkZWxldGVPcmcuaWQpO1xuICAgICAgICAgICAgc2V0RGVsZXRlT3JnKHVuZGVmaW5lZCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC90YWJsZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImdldE5hdk1vZGVsIiwiUGFnZSIsInVzZVNlbGVjdG9yIiwiTGlua0J1dHRvbiIsImdldEJhY2tlbmRTcnYiLCJBZG1pbk9yZ3NUYWJsZSIsInVzZUFzeW5jRm4iLCJjb250ZXh0U3J2IiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImRlbGV0ZU9yZyIsIm9yZ0lkIiwiZGVsZXRlIiwiZ2V0T3JncyIsImdldCIsImdldEVycm9yTWVzc2FnZSIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJBZG1pbkxpc3RPcmdzUGFnZXMiLCJuYXZJbmRleCIsInN0YXRlIiwibmF2TW9kZWwiLCJmZXRjaE9yZ3MiLCJjYW5DcmVhdGVPcmciLCJoYXNQZXJtaXNzaW9uIiwiT3Jnc0NyZWF0ZSIsImxvYWRpbmciLCJ2YWx1ZSIsInRoZW4iLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsIm9yZ3MiLCJvbkRlbGV0ZSIsImNhbkRlbGV0ZU9yZ3MiLCJPcmdzRGVsZXRlIiwic2V0RGVsZXRlT3JnIiwid2lkdGgiLCJtYXAiLCJvcmciLCJpZCIsIm5hbWUiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9
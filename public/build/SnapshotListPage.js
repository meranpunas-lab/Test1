"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SnapshotListPage"],{

/***/ "./public/app/features/manage-dashboards/SnapshotListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnapshotListPage": () => (/* binding */ SnapshotListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _components_SnapshotListTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/manage-dashboards/components/SnapshotListTable.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;







const SnapshotListPage = ({
  navModel,
  location
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_SnapshotListTable__WEBPACK_IMPORTED_MODULE_3__.SnapshotListTable, {})
    }))
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, 'snapshots')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(SnapshotListPage));

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/SnapshotListTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnapshotListTable": () => (/* binding */ SnapshotListTable),
/* harmony export */   "getSnapshots": () => (/* binding */ getSnapshots)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _span;







function getSnapshots() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get('/api/dashboard/snapshots').then(result => {
    return result.map(snapshot => Object.assign({}, snapshot, {
      url: `/dashboard/snapshot/${snapshot.key}`
    }));
  });
}
const SnapshotListTable = () => {
  const [snapshots, setSnapshots] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [removeSnapshot, setRemoveSnapshot] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.getLocation().pathname;
  const fullUrl = window.location.href;
  const baseUrl = fullUrl.substring(0, fullUrl.indexOf(currentPath));
  (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    const response = await getSnapshots();
    setSnapshots(response);
  }, [setSnapshots]);
  const doRemoveSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async snapshot => {
    const filteredSnapshots = snapshots.filter(ss => ss.key !== snapshot.key);
    setSnapshots(filteredSnapshots);
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().delete(`/api/snapshots/${snapshot.key}`).catch(() => {
      setSnapshots(snapshots);
    });
  }, [snapshots]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      className: "filter-table",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "Name"
            })
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "Snapshot url"
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            style: {
              width: '70px'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            style: {
              width: '30px'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            style: {
              width: '25px'
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
        children: snapshots.map(snapshot => {
          const url = snapshot.externalUrl || snapshot.url;
          const fullUrl = snapshot.externalUrl || `${baseUrl}${snapshot.url}`;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: url,
                children: snapshot.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: url,
                children: fullUrl
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: snapshot.external && (_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "query-keyword",
                children: "External"
              })))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
                href: url,
                variant: "secondary",
                size: "sm",
                icon: "eye",
                children: "View"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "text-right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "destructive",
                size: "sm",
                icon: "times",
                onClick: () => setRemoveSnapshot(snapshot)
              })
            })]
          }, snapshot.key);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
      isOpen: !!removeSnapshot,
      icon: "trash-alt",
      title: "Delete",
      body: `Are you sure you want to delete '${removeSnapshot === null || removeSnapshot === void 0 ? void 0 : removeSnapshot.name}'?`,
      confirmText: "Delete",
      onDismiss: () => setRemoveSnapshot(undefined),
      onConfirm: () => {
        doRemoveSnapshot(removeSnapshot);
        setRemoveSnapshot(undefined);
      }
    })]
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REYsY0FiRjtBQUFBLGFBQVNBLFFBQVEsQ0FBQ0UsR0FBbEIsQ0FERjtBQW1CRCxTQXRCQTtBQURILFFBZEY7QUFBQSxNQURGLGVBMENFLHVEQUFDLHFEQUFEO0FBQ0UsWUFBTSxFQUFFLENBQUMsQ0FBQ0csY0FEWjtBQUVFLFVBQUksRUFBQyxXQUZQO0FBR0UsV0FBSyxFQUFDLFFBSFI7QUFJRSxVQUFJLEVBQUcsb0NBQW1DQSxjQUFwQyxhQUFvQ0EsY0FBcEMsdUJBQW9DQSxjQUFjLENBQUVvQixJQUFLLElBSmpFO0FBS0UsaUJBQVcsRUFBQyxRQUxkO0FBTUUsZUFBUyxFQUFFLE1BQU1uQixpQkFBaUIsQ0FBQ3FCLFNBQUQsQ0FOcEM7QUFPRSxlQUFTLEVBQUUsTUFBTTtBQUNmVixRQUFBQSxnQkFBZ0IsQ0FBQ1osY0FBRCxDQUFoQjtBQUNBQyxRQUFBQSxpQkFBaUIsQ0FBQ3FCLFNBQUQsQ0FBakI7QUFDRDtBQVZILE1BMUNGO0FBQUEsSUFERjtBQXlERCxDQWxGTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL21hbmFnZS1kYXNoYm9hcmRzL1NuYXBzaG90TGlzdFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL21hbmFnZS1kYXNoYm9hcmRzL2NvbXBvbmVudHMvU25hcHNob3RMaXN0VGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcFN0YXRlVG9Qcm9wcywgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IFNuYXBzaG90TGlzdFRhYmxlIH0gZnJvbSAnLi9jb21wb25lbnRzL1NuYXBzaG90TGlzdFRhYmxlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcblxuaW50ZXJmYWNlIENvbm5lY3RlZFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQ29ubmVjdGVkUHJvcHMsIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBTbmFwc2hvdExpc3RQYWdlOiBGQzxQcm9wcz4gPSAoeyBuYXZNb2RlbCwgbG9jYXRpb24gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPFNuYXBzaG90TGlzdFRhYmxlIC8+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzOiBNYXBTdGF0ZVRvUHJvcHM8Q29ubmVjdGVkUHJvcHMsIHt9LCBTdG9yZVN0YXRlPiA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnc25hcHNob3RzJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNuYXBzaG90TGlzdFBhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25maXJtTW9kYWwsIEJ1dHRvbiwgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgU25hcHNob3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgdXNlQXN5bmMgZnJvbSAncmVhY3QtdXNlL2xpYi91c2VBc3luYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTbmFwc2hvdHMoKSB7XG4gIHJldHVybiBnZXRCYWNrZW5kU3J2KClcbiAgICAuZ2V0KCcvYXBpL2Rhc2hib2FyZC9zbmFwc2hvdHMnKVxuICAgIC50aGVuKChyZXN1bHQ6IFNuYXBzaG90W10pID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQubWFwKChzbmFwc2hvdCkgPT4gKHtcbiAgICAgICAgLi4uc25hcHNob3QsXG4gICAgICAgIHVybDogYC9kYXNoYm9hcmQvc25hcHNob3QvJHtzbmFwc2hvdC5rZXl9YCxcbiAgICAgIH0pKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBTbmFwc2hvdExpc3RUYWJsZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzbmFwc2hvdHMsIHNldFNuYXBzaG90c10gPSB1c2VTdGF0ZTxTbmFwc2hvdFtdPihbXSk7XG4gIGNvbnN0IFtyZW1vdmVTbmFwc2hvdCwgc2V0UmVtb3ZlU25hcHNob3RdID0gdXNlU3RhdGU8U25hcHNob3QgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkucGF0aG5hbWU7XG4gIGNvbnN0IGZ1bGxVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgY29uc3QgYmFzZVVybCA9IGZ1bGxVcmwuc3Vic3RyaW5nKDAsIGZ1bGxVcmwuaW5kZXhPZihjdXJyZW50UGF0aCkpO1xuXG4gIHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFNuYXBzaG90cygpO1xuICAgIHNldFNuYXBzaG90cyhyZXNwb25zZSk7XG4gIH0sIFtzZXRTbmFwc2hvdHNdKTtcblxuICBjb25zdCBkb1JlbW92ZVNuYXBzaG90ID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHNuYXBzaG90OiBTbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRTbmFwc2hvdHMgPSBzbmFwc2hvdHMuZmlsdGVyKChzcykgPT4gc3Mua2V5ICE9PSBzbmFwc2hvdC5rZXkpO1xuICAgICAgc2V0U25hcHNob3RzKGZpbHRlcmVkU25hcHNob3RzKTtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZGVsZXRlKGAvYXBpL3NuYXBzaG90cy8ke3NuYXBzaG90LmtleX1gKVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHNldFNuYXBzaG90cyhzbmFwc2hvdHMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtzbmFwc2hvdHNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICA8c3Ryb25nPk5hbWU8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgIDxzdHJvbmc+U25hcHNob3QgdXJsPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnNzBweCcgfX0+PC90aD5cbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzMwcHgnIH19PjwvdGg+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcyNXB4JyB9fT48L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7c25hcHNob3RzLm1hcCgoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHNuYXBzaG90LmV4dGVybmFsVXJsIHx8IHNuYXBzaG90LnVybDtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxVcmwgPSBzbmFwc2hvdC5leHRlcm5hbFVybCB8fCBgJHtiYXNlVXJsfSR7c25hcHNob3QudXJsfWA7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtzbmFwc2hvdC5rZXl9PlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0+e3NuYXBzaG90Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsfT57ZnVsbFVybH08L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3NuYXBzaG90LmV4dGVybmFsICYmIDxzcGFuIGNsYXNzTmFtZT1cInF1ZXJ5LWtleXdvcmRcIj5FeHRlcm5hbDwvc3Bhbj59PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e3VybH0gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIGljb249XCJleWVcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlld1xuICAgICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgc2l6ZT1cInNtXCIgaWNvbj1cInRpbWVzXCIgb25DbGljaz17KCkgPT4gc2V0UmVtb3ZlU25hcHNob3Qoc25hcHNob3QpfSAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICBpc09wZW49eyEhcmVtb3ZlU25hcHNob3R9XG4gICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXG4gICAgICAgIGJvZHk9e2BBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICcke3JlbW92ZVNuYXBzaG90Py5uYW1lfSc/YH1cbiAgICAgICAgY29uZmlybVRleHQ9XCJEZWxldGVcIlxuICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFJlbW92ZVNuYXBzaG90KHVuZGVmaW5lZCl9XG4gICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICAgIGRvUmVtb3ZlU25hcHNob3QocmVtb3ZlU25hcHNob3QhKTtcbiAgICAgICAgICBzZXRSZW1vdmVTbmFwc2hvdCh1bmRlZmluZWQpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiUGFnZSIsIlNuYXBzaG90TGlzdFRhYmxlIiwiZ2V0TmF2TW9kZWwiLCJTbmFwc2hvdExpc3RQYWdlIiwibmF2TW9kZWwiLCJsb2NhdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiQ29uZmlybU1vZGFsIiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsImdldEJhY2tlbmRTcnYiLCJsb2NhdGlvblNlcnZpY2UiLCJ1c2VBc3luYyIsImdldFNuYXBzaG90cyIsImdldCIsInRoZW4iLCJyZXN1bHQiLCJtYXAiLCJzbmFwc2hvdCIsInVybCIsImtleSIsInNuYXBzaG90cyIsInNldFNuYXBzaG90cyIsInJlbW92ZVNuYXBzaG90Iiwic2V0UmVtb3ZlU25hcHNob3QiLCJjdXJyZW50UGF0aCIsImdldExvY2F0aW9uIiwicGF0aG5hbWUiLCJmdWxsVXJsIiwid2luZG93IiwiaHJlZiIsImJhc2VVcmwiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicmVzcG9uc2UiLCJkb1JlbW92ZVNuYXBzaG90IiwiZmlsdGVyZWRTbmFwc2hvdHMiLCJmaWx0ZXIiLCJzcyIsImRlbGV0ZSIsImNhdGNoIiwid2lkdGgiLCJleHRlcm5hbFVybCIsIm5hbWUiLCJleHRlcm5hbCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=
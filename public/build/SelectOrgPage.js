"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SelectOrgPage"],{

/***/ "./public/app/features/org/SelectOrgPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectOrgPage": () => (/* binding */ SelectOrgPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/org/state/actions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;










const navModel = {
  main: {
    icon: 'grafana',
    subTitle: 'Preferences',
    text: 'Select active organization'
  },
  node: {
    text: 'Select active organization'
  }
};

const mapStateToProps = state => {
  return {
    userOrgs: state.organization.userOrgs
  };
};

const mapDispatchToProps = {
  setUserOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_4__.setUserOrganization,
  getUserOrganizations: _state_actions__WEBPACK_IMPORTED_MODULE_4__.getUserOrganizations
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, mapDispatchToProps);
const SelectOrgPage = ({
  setUserOrganization,
  getUserOrganizations,
  userOrgs
}) => {
  const setUserOrg = async org => {
    await setUserOrganization(org.orgId);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.appSubUrl + '/';
  };

  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    getUserOrganizations();
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: "You have been invited to another organization! Please select which organization that you want to use right now. You can change this later at any time."
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          wrap: true,
          children: userOrgs && userOrgs.map(org => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            icon: "signin",
            onClick: () => setUserOrg(org),
            children: org.name
          }, org.orgId))
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SelectOrgPage));

/***/ }),

/***/ "./public/app/features/org/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOrganization": () => (/* binding */ createOrganization),
/* harmony export */   "getUserOrganizations": () => (/* binding */ getUserOrganizations),
/* harmony export */   "loadOrganization": () => (/* binding */ loadOrganization),
/* harmony export */   "setUserOrganization": () => (/* binding */ setUserOrganization),
/* harmony export */   "updateOrganization": () => (/* binding */ updateOrganization)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/org/state/reducers.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");



function loadOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().get('/api/org');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.organizationLoaded)(organizationResponse));
    return organizationResponse;
  };
}
function updateOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async (dispatch, getStore) => {
    const organization = getStore().organization.organization;
    await dependencies.getBackendSrv().put('/api/org', {
      name: organization.name
    });
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateConfigurationSubtitle)(organization.name));
    dispatch(loadOrganization(dependencies));
  };
}
function setUserOrganization(orgId, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().post('/api/user/using/' + orgId);
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateConfigurationSubtitle)(organizationResponse.name));
  };
}
function createOrganization(newOrg, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().post('/api/orgs/', newOrg);
    dispatch(setUserOrganization(result.orgId));
  };
}
function getUserOrganizations(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().get('/api/user/orgs');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.userOrganizationsLoaded)(result));
    return result;
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekIsVUFBTVMsTUFBTSxHQUFHLE1BQU1WLFlBQVksQ0FBQ0wsYUFBYixHQUE2QlEsR0FBN0IsQ0FBaUMsZ0JBQWpDLENBQXJCO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQ0osa0VBQXVCLENBQUNhLE1BQUQsQ0FBeEIsQ0FBUjtBQUVBLFdBQU9BLE1BQVA7QUFDRCxHQUxEO0FBTUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9vcmcvU2VsZWN0T3JnUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvb3JnL3N0YXRlL2FjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlLCBVc2VyT3JnIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IHVzZUVmZmVjdE9uY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBnZXRVc2VyT3JnYW5pemF0aW9ucywgc2V0VXNlck9yZ2FuaXphdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgbmF2TW9kZWwgPSB7XG4gIG1haW46IHtcbiAgICBpY29uOiAnZ3JhZmFuYScsXG4gICAgc3ViVGl0bGU6ICdQcmVmZXJlbmNlcycsXG4gICAgdGV4dDogJ1NlbGVjdCBhY3RpdmUgb3JnYW5pemF0aW9uJyxcbiAgfSxcbiAgbm9kZToge1xuICAgIHRleHQ6ICdTZWxlY3QgYWN0aXZlIG9yZ2FuaXphdGlvbicsXG4gIH0sXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyT3Jnczogc3RhdGUub3JnYW5pemF0aW9uLnVzZXJPcmdzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBzZXRVc2VyT3JnYW5pemF0aW9uLFxuICBnZXRVc2VyT3JnYW5pemF0aW9ucyxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG50eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RPcmdQYWdlOiBGQzxQcm9wcz4gPSAoeyBzZXRVc2VyT3JnYW5pemF0aW9uLCBnZXRVc2VyT3JnYW5pemF0aW9ucywgdXNlck9yZ3MgfSkgPT4ge1xuICBjb25zdCBzZXRVc2VyT3JnID0gYXN5bmMgKG9yZzogVXNlck9yZykgPT4ge1xuICAgIGF3YWl0IHNldFVzZXJPcmdhbml6YXRpb24ob3JnLm9yZ0lkKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbmZpZy5hcHBTdWJVcmwgKyAnLyc7XG4gIH07XG5cbiAgdXNlRWZmZWN0T25jZSgoKSA9PiB7XG4gICAgZ2V0VXNlck9yZ2FuaXphdGlvbnMoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBZb3UgaGF2ZSBiZWVuIGludml0ZWQgdG8gYW5vdGhlciBvcmdhbml6YXRpb24hIFBsZWFzZSBzZWxlY3Qgd2hpY2ggb3JnYW5pemF0aW9uIHRoYXQgeW91IHdhbnQgdG8gdXNlIHJpZ2h0XG4gICAgICAgICAgICBub3cuIFlvdSBjYW4gY2hhbmdlIHRoaXMgbGF0ZXIgYXQgYW55IHRpbWUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgd3JhcD5cbiAgICAgICAgICAgIHt1c2VyT3JncyAmJlxuICAgICAgICAgICAgICB1c2VyT3Jncy5tYXAoKG9yZykgPT4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtvcmcub3JnSWR9IGljb249XCJzaWduaW5cIiBvbkNsaWNrPXsoKSA9PiBzZXRVc2VyT3JnKG9yZyl9PlxuICAgICAgICAgICAgICAgICAge29yZy5uYW1lfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKFNlbGVjdE9yZ1BhZ2UpO1xuIiwiaW1wb3J0IHsgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgb3JnYW5pemF0aW9uTG9hZGVkLCB1c2VyT3JnYW5pemF0aW9uc0xvYWRlZCB9IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgdXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5cbnR5cGUgT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiB0eXBlb2YgZ2V0QmFja2VuZFNydiB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE9yZ2FuaXphdGlvbihcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb25SZXNwb25zZSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL29yZycpO1xuICAgIGRpc3BhdGNoKG9yZ2FuaXphdGlvbkxvYWRlZChvcmdhbml6YXRpb25SZXNwb25zZSkpO1xuXG4gICAgcmV0dXJuIG9yZ2FuaXphdGlvblJlc3BvbnNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3JnYW5pemF0aW9uKFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb24gPSBnZXRTdG9yZSgpLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb247XG5cbiAgICBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLnB1dCgnL2FwaS9vcmcnLCB7IG5hbWU6IG9yZ2FuaXphdGlvbi5uYW1lIH0pO1xuXG4gICAgZGlzcGF0Y2godXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlKG9yZ2FuaXphdGlvbi5uYW1lKSk7XG4gICAgZGlzcGF0Y2gobG9hZE9yZ2FuaXphdGlvbihkZXBlbmRlbmNpZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJPcmdhbml6YXRpb24oXG4gIG9yZ0lkOiBudW1iZXIsXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uUmVzcG9uc2UgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvdXNlci91c2luZy8nICsgb3JnSWQpO1xuXG4gICAgZGlzcGF0Y2godXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlKG9yZ2FuaXphdGlvblJlc3BvbnNlLm5hbWUpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9yZ2FuaXphdGlvbihcbiAgbmV3T3JnOiB7IG5hbWU6IHN0cmluZyB9LFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9vcmdzLycsIG5ld09yZyk7XG5cbiAgICBkaXNwYXRjaChzZXRVc2VyT3JnYW5pemF0aW9uKHJlc3VsdC5vcmdJZCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck9yZ2FuaXphdGlvbnMoXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvdXNlci9vcmdzJyk7XG4gICAgZGlzcGF0Y2godXNlck9yZ2FuaXphdGlvbnNMb2FkZWQocmVzdWx0KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnZSIsImNvbmZpZyIsInVzZUVmZmVjdE9uY2UiLCJCdXR0b24iLCJIb3Jpem9udGFsR3JvdXAiLCJnZXRVc2VyT3JnYW5pemF0aW9ucyIsInNldFVzZXJPcmdhbml6YXRpb24iLCJjb25uZWN0IiwibmF2TW9kZWwiLCJtYWluIiwiaWNvbiIsInN1YlRpdGxlIiwidGV4dCIsIm5vZGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJPcmdzIiwib3JnYW5pemF0aW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiU2VsZWN0T3JnUGFnZSIsInNldFVzZXJPcmciLCJvcmciLCJvcmdJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFwcFN1YlVybCIsIm1hcCIsIm5hbWUiLCJnZXRCYWNrZW5kU3J2Iiwib3JnYW5pemF0aW9uTG9hZGVkIiwidXNlck9yZ2FuaXphdGlvbnNMb2FkZWQiLCJ1cGRhdGVDb25maWd1cmF0aW9uU3VidGl0bGUiLCJsb2FkT3JnYW5pemF0aW9uIiwiZGVwZW5kZW5jaWVzIiwiZGlzcGF0Y2giLCJvcmdhbml6YXRpb25SZXNwb25zZSIsImdldCIsInVwZGF0ZU9yZ2FuaXphdGlvbiIsImdldFN0b3JlIiwicHV0IiwicG9zdCIsImNyZWF0ZU9yZ2FuaXphdGlvbiIsIm5ld09yZyIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertAmRoutes"],{

/***/ "./public/app/core/hooks/useCleanup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCleanup": () => (/* binding */ useCleanup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");



function useCleanup(stateSelector) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); //bit of a hack to unburden user from having to wrap stateSelcetor in a useCallback. Otherwise cleanup would happen on every render

  const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateSelector);
  selectorRef.current = stateSelector;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__.cleanUpAction)({
        stateSelector: selectorRef.current
      }));
    };
  }, [dispatch]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/AmRoutes.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _components_amroutes_AmRootRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRootRoute.tsx");
/* harmony import */ var _components_amroutes_AmSpecificRouting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmSpecificRouting.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _components_amroutes_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Redirect, _LoadingPlaceholder;






















const AmRoutes = () => {
  var _config$receivers;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [isRootRouteEditMode, setIsRootRouteEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_9__.useAlertManagerSourceName)();
  const readOnly = alertManagerSourceName ? (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName) : true;
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_10__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const fetchConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchConfig();
  }, [fetchConfig]);
  const {
    result,
    loading: resultLoading,
    error: resultError
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_13__.initialAsyncRequestState;
  const config = result === null || result === void 0 ? void 0 : result.alertmanager_config;
  const [rootRoute, id2ExistingRoute] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_12__.amRouteToFormAmRoute)(config === null || config === void 0 ? void 0 : config.route), [config === null || config === void 0 ? void 0 : config.route]);
  const receivers = (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_12__.stringsToSelectableValues)(((_config$receivers = config === null || config === void 0 ? void 0 : config.receivers) !== null && _config$receivers !== void 0 ? _config$receivers : []).map(receiver => receiver.name));

  const enterRootRouteEditMode = () => {
    setIsRootRouteEditMode(true);
  };

  const exitRootRouteEditMode = () => {
    setIsRootRouteEditMode(false);
  };

  (0,_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);

  const handleSave = data => {
    if (!result) {
      return;
    }

    const newData = (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_12__.formAmRouteToAmRoute)(alertManagerSourceName, Object.assign({}, rootRoute, data), id2ExistingRoute);

    if (isRootRouteEditMode) {
      exitRootRouteEditMode();
    }

    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.updateAlertManagerConfigAction)({
      newConfig: Object.assign({}, result, {
        alertmanager_config: Object.assign({}, result.alertmanager_config, {
          route: newData
        })
      }),
      oldConfig: result,
      alertManagerSourceName: alertManagerSourceName,
      successMessage: 'Saved',
      refetch: true
    }));
  };

  if (!alertManagerSourceName) {
    return _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Redirect, {
      to: "/alerting/routes"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertingPageWrapper, {
    pageId: "am-routes",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_6__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName
    }), resultError && !resultLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager config",
      children: resultError.message || 'Unknown error.'
    }), resultLoading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
      text: "Loading Alertmanager config..."
    }))), result && !resultLoading && !resultError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_amroutes_AmRootRoute__WEBPACK_IMPORTED_MODULE_7__.AmRootRoute, {
        alertManagerSourceName: alertManagerSourceName,
        isEditMode: isRootRouteEditMode,
        onSave: handleSave,
        onEnterEditMode: enterRootRouteEditMode,
        onExitEditMode: exitRootRouteEditMode,
        receivers: receivers,
        routes: rootRoute
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_amroutes_AmSpecificRouting__WEBPACK_IMPORTED_MODULE_8__.AmSpecificRouting, {
        alertManagerSourceName: alertManagerSourceName,
        onChange: handleSave,
        readOnly: readOnly,
        onRootRouteEdit: enterRootRouteEditMode,
        receivers: receivers,
        routes: rootRoute
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_amroutes_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_15__.MuteTimingsTable, {
        alertManagerSourceName: alertManagerSourceName
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(AmRoutes, {
  style: 'page'
}));

const getStyles = theme => ({
  break: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    width: 100%;
    height: 0;
    margin-bottom: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertingPageWrapper": () => (/* binding */ AlertingPageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = ({
  children,
  pageId,
  isLoading
}) => {
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_2__.getNavModel)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.navIndex), pageId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Authorize.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authorize": () => (/* binding */ Authorize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Authorize = ({
  actions,
  children,
  fallback = true
}) => {
  if (actions.some(action => app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__.contextSrv.hasAccess(action, fallback))) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  } else {
    return null;
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/EmptyArea.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyArea": () => (/* binding */ EmptyArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const EmptyArea = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.container,
    children: children
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      background-color: ${theme.colors.bg2};
      color: ${theme.colors.textSemiWeak};
      padding: ${theme.spacing.xl};
      text-align: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyAreaWithCTA": () => (/* binding */ EmptyAreaWithCTA)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const EmptyAreaWithCTA = ({
  buttonIcon,
  buttonLabel,
  buttonSize = 'lg',
  buttonVariant = 'primary',
  onButtonClick,
  text,
  href,
  showButton = true
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  const commonProps = {
    className: styles.button,
    icon: buttonIcon,
    size: buttonSize,
    variant: buttonVariant
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_3__.EmptyArea, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: styles.text,
        children: text
      }), showButton && (href ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, Object.assign({
        href: href,
        type: "button"
      }, commonProps, {
        children: buttonLabel
      })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, Object.assign({
        onClick: onButtonClick,
        type: "button"
      }, commonProps, {
        children: buttonLabel
      })))]
    })
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      background-color: ${theme.colors.bg2};
      color: ${theme.colors.textSemiWeak};
      padding: ${theme.spacing.xl};
      text-align: center;
    `,
    text: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-bottom: ${theme.spacing.md};
    `,
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin: ${theme.spacing.md} 0 ${theme.spacing.sm};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatcherFilter": () => (/* binding */ MatcherFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/0/cache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span, _div;







const MatcherFilter = ({
  className,
  onFilterChange,
  defaultQueryString,
  queryString
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);

  const handleSearchChange = e => {
    const target = e.target;
    onFilterChange(target.value);
  };

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        gap: 0.5,
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: "Search by label"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
          content: _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: ["Filter alerts using label querying, ex:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
              children: `{severity="critical", instance=~"cluster-us-.+"}`
            })]
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            className: styles.icon,
            name: "info-circle",
            size: "sm"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
      placeholder: "Search",
      defaultValue: defaultQueryString,
      value: queryString,
      onChange: handleSearchChange,
      "data-testid": "search-query-input",
      prefix: searchIcon,
      className: styles.inputWidth
    })]
  });
};

const getStyles = theme => ({
  icon: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-right: ${theme.spacing(0.5)};
  `,
  inputWidth: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    width: 340px;
    flex-grow: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRootRoute.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRootRoute": () => (/* binding */ AmRootRoute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AmRootRouteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRootRouteForm.tsx");
/* harmony import */ var _AmRootRouteRead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRootRouteRead.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _i, _p;











const AmRootRoute = ({
  isEditMode,
  onSave,
  onEnterEditMode,
  onExitEditMode,
  receivers,
  routes,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_7__.getNotificationsPermissions)(alertManagerSourceName);
  const isReadOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.container,
    "data-testid": "am-root-route-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: styles.titleContainer,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h5", {
        className: styles.title,
        children: ["Root policy - ", _i || (_i = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
          children: "default for all alerts"
        }))]
      }), !isEditMode && !isReadOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_6__.Authorize, {
        actions: [permissions.update],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          icon: "pen",
          onClick: onEnterEditMode,
          size: "sm",
          type: "button",
          variant: "secondary",
          children: "Edit"
        })
      })]
    }), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      children: "All alerts will go to the default contact point, unless you set additional matchers in the specific routing area."
    })), isEditMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AmRootRouteForm__WEBPACK_IMPORTED_MODULE_3__.AmRootRouteForm, {
      alertManagerSourceName: alertManagerSourceName,
      onCancel: onExitEditMode,
      onSave: onSave,
      receivers: receivers,
      routes: routes
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AmRootRouteRead__WEBPACK_IMPORTED_MODULE_4__.AmRootRouteRead, {
      routes: routes
    })]
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      background-color: ${theme.colors.background.secondary};
      color: ${theme.colors.text.secondary};
      padding: ${theme.spacing(2)};
    `,
    titleContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.text.primary};
      display: flex;
      flex-flow: row nowrap;
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      flex: 100%;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRootRouteForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRootRouteForm": () => (/* binding */ AmRootRouteForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _formStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/formStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _Button;

const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"],
      _excluded3 = ["onChange", "ref"],
      _excluded4 = ["onChange", "ref"],
      _excluded5 = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const AmRootRouteForm = ({
  alertManagerSourceName,
  onCancel,
  onSave,
  receivers,
  routes
}) => {
  var _Button2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_formStyles__WEBPACK_IMPORTED_MODULE_6__.getFormStyles);
  const [isTimingOptionsExpanded, setIsTimingOptionsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [groupByOptions, setGroupByOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.stringsToSelectableValues)(routes.groupBy));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
    defaultValues: routes,
    onSubmit: onSave,
    children: ({
      control,
      errors,
      setValue
    }) => {
      var _errors$receiver, _errors$groupWaitValu, _errors$groupInterval, _errors$repeatInterva;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Default contact point",
          invalid: !!errors.receiver,
          error: (_errors$receiver = errors.receiver) === null || _errors$receiver === void 0 ? void 0 : _errors$receiver.message,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: styles.container,
              "data-testid": "am-receiver-select",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                render: _ref => {
                  let {
                    field: {
                      onChange
                    }
                  } = _ref,
                      field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                    "aria-label": "Default contact point"
                  }, field, {
                    className: styles.input,
                    onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                    options: receivers,
                    menuShouldPortal: true
                  }));
                },
                control: control,
                name: "receiver",
                rules: {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }
              }), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "or"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
                className: styles.linkText,
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.makeAMLink)('/alerting/notifications/receivers/new', alertManagerSourceName),
                children: "Create a contact point"
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Group by",
          description: "Group alerts when you receive a notification based on labels.",
          "data-testid": "am-group-select",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref2 => {
              let {
                field: {
                  onChange
                }
              } = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
                "aria-label": "Group by",
                menuShouldPortal: true
              }, field, {
                allowCustomValue: true,
                className: styles.input,
                onCreateOption: opt => {
                  setGroupByOptions(opts => [...opts, (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.stringToSelectableValue)(opt)]); // @ts-ignore-check: react-hook-form made me do this

                  setValue('groupBy', [...field.value, opt]);
                },
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapMultiSelectValueToStrings)(value)),
                options: groupByOptions
              }));
            },
            control: control,
            name: "groupBy"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
          collapsible: true,
          className: styles.collapse,
          isOpen: isTimingOptionsExpanded,
          label: "Timing options",
          onToggle: setIsTimingOptionsExpanded,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group wait",
            description: "The waiting time until the initial notification is sent for a new group created by an incoming alert. Default 30 seconds.",
            invalid: !!errors.groupWaitValue,
            error: (_errors$groupWaitValu = errors.groupWaitValue) === null || _errors$groupWaitValu === void 0 ? void 0 : _errors$groupWaitValu.message,
            "data-testid": "am-group-wait",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: styles.smallInput,
                    invalid: invalid,
                    placeholder: 'Default 30 seconds'
                  })),
                  control: control,
                  name: "groupWaitValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref3 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref3,
                        field = _objectWithoutPropertiesLoose(_ref3.field, _excluded3);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                      menuShouldPortal: true
                    }, field, {
                      className: styles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
                      "aria-label": "Group wait type"
                    }));
                  },
                  control: control,
                  name: "groupWaitValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group interval",
            description: "The waiting time to send a batch of new alerts for that group after the first notification was sent. Default 5 minutes.",
            invalid: !!errors.groupIntervalValue,
            error: (_errors$groupInterval = errors.groupIntervalValue) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            "data-testid": "am-group-interval",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: styles.smallInput,
                    invalid: invalid,
                    placeholder: 'Default 5 minutes'
                  })),
                  control: control,
                  name: "groupIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref4 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref4,
                        field = _objectWithoutPropertiesLoose(_ref4.field, _excluded4);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                      menuShouldPortal: true
                    }, field, {
                      className: styles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
                      "aria-label": "Group interval type"
                    }));
                  },
                  control: control,
                  name: "groupIntervalValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Repeat interval",
            description: "The waiting time to resend an alert after they have successfully been sent. Default 4 hours.",
            invalid: !!errors.repeatIntervalValue,
            error: (_errors$repeatInterva = errors.repeatIntervalValue) === null || _errors$repeatInterva === void 0 ? void 0 : _errors$repeatInterva.message,
            "data-testid": "am-repeat-interval",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: styles.smallInput,
                    invalid: invalid,
                    placeholder: "Default 4 hours"
                  })),
                  control: control,
                  name: "repeatIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref5 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref5,
                        field = _objectWithoutPropertiesLoose(_ref5.field, _excluded5);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                      menuShouldPortal: true
                    }, field, {
                      className: styles.input,
                      menuPlacement: "top",
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
                      "aria-label": "Repeat interval type"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValueType"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: styles.container,
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Save"
          })), _Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: onCancel,
            type: "reset",
            variant: "secondary",
            fill: "outline",
            children: "Cancel"
          }))]
        })]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRootRouteRead.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRootRouteRead": () => (/* binding */ AmRootRouteRead)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _gridStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/gridStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AmRootRouteRead = ({
  routes
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_gridStyles__WEBPACK_IMPORTED_MODULE_2__.getGridStyles);
  const receiver = routes.receiver || '-';
  const groupBy = routes.groupBy.join(', ') || '-';
  const groupWait = routes.groupWaitValue ? `${routes.groupWaitValue}${routes.groupWaitValueType}` : '-';
  const groupInterval = routes.groupIntervalValue ? `${routes.groupIntervalValue}${routes.groupIntervalValueType}` : '-';
  const repeatInterval = routes.repeatIntervalValue ? `${routes.repeatIntervalValue}${routes.repeatIntervalValueType}` : '-';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.titleCell,
      children: "Contact point"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-receiver",
      children: receiver
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.titleCell,
      children: "Group by"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-group-by",
      children: groupBy
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.titleCell,
      children: "Timings"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-timings",
      children: ["Group wait: ", groupWait, " | Group interval: ", groupInterval, " | Repeat interval: ", repeatInterval]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRoutesExpandedForm": () => (/* binding */ AmRoutesExpandedForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _formStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/formStyles.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _hooks_useMuteTimingOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useMuteTimingOptions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"],
      _excluded3 = ["onChange", "ref"],
      _excluded4 = ["onChange", "ref"],
      _excluded5 = ["onChange", "ref"],
      _excluded6 = ["onChange", "ref"],
      _excluded7 = ["onChange", "ref"];

var _div, _Button;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const AmRoutesExpandedForm = ({
  onCancel,
  onSave,
  receivers,
  routes
}) => {
  var _Button2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const formStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_formStyles__WEBPACK_IMPORTED_MODULE_5__.getFormStyles);
  const [overrideGrouping, setOverrideGrouping] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(routes.groupBy.length > 0);
  const [overrideTimings, setOverrideTimings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!routes.groupWaitValue || !!routes.groupIntervalValue || !!routes.repeatIntervalValue);
  const [groupByOptions, setGroupByOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.stringsToSelectableValues)(routes.groupBy));
  const muteTimingOptions = (0,_hooks_useMuteTimingOptions__WEBPACK_IMPORTED_MODULE_7__.useMuteTimingOptions)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
    defaultValues: routes,
    onSubmit: onSave,
    children: ({
      control,
      register,
      errors,
      setValue
    }) => {
      var _errors$groupWaitValu, _errors$groupInterval, _errors$repeatInterva;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", Object.assign({
          type: "hidden"
        }, register('id'))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldArray, {
          name: "object_matchers",
          control: control,
          children: ({
            fields,
            append,
            remove
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
              justify: "flex-start",
              spacing: "md",
              children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                children: "Matching labels"
              })), fields.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                color: "orange",
                className: styles.noMatchersWarning,
                icon: "exclamation-triangle",
                text: "If no matchers are specified, this notification policy will handle all alert instances."
              }), fields.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: styles.matchersContainer,
                children: fields.map((field, index) => {
                  var _errors$object_matche, _errors$object_matche2, _errors$object_matche3, _errors$object_matche4, _errors$object_matche5, _errors$object_matche6, _errors$object_matche7, _errors$object_matche8, _errors$object_matche9, _errors$object_matche10;

                  const localPath = `object_matchers[${index}]`;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
                    align: "flex-start",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      label: "Label",
                      invalid: !!((_errors$object_matche = errors.object_matchers) !== null && _errors$object_matche !== void 0 && (_errors$object_matche2 = _errors$object_matche[index]) !== null && _errors$object_matche2 !== void 0 && _errors$object_matche2.name),
                      error: (_errors$object_matche3 = errors.object_matchers) === null || _errors$object_matche3 === void 0 ? void 0 : (_errors$object_matche4 = _errors$object_matche3[index]) === null || _errors$object_matche4 === void 0 ? void 0 : (_errors$object_matche5 = _errors$object_matche4.name) === null || _errors$object_matche5 === void 0 ? void 0 : _errors$object_matche5.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register(`${localPath}.name`, {
                        required: 'Field is required'
                      }), {
                        defaultValue: field.name,
                        placeholder: "label"
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      label: 'Operator',
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                        render: _ref => {
                          let {
                            field: {
                              onChange
                            }
                          } = _ref,
                              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                            className: styles.matchersOperator,
                            onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value),
                            options: _utils_alertmanager__WEBPACK_IMPORTED_MODULE_6__.matcherFieldOptions,
                            "aria-label": "Operator",
                            menuShouldPortal: true
                          }));
                        },
                        defaultValue: field.operator,
                        control: control,
                        name: `${localPath}.operator`,
                        rules: {
                          required: {
                            value: true,
                            message: 'Required.'
                          }
                        }
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      label: "Value",
                      invalid: !!((_errors$object_matche6 = errors.object_matchers) !== null && _errors$object_matche6 !== void 0 && (_errors$object_matche7 = _errors$object_matche6[index]) !== null && _errors$object_matche7 !== void 0 && _errors$object_matche7.value),
                      error: (_errors$object_matche8 = errors.object_matchers) === null || _errors$object_matche8 === void 0 ? void 0 : (_errors$object_matche9 = _errors$object_matche8[index]) === null || _errors$object_matche9 === void 0 ? void 0 : (_errors$object_matche10 = _errors$object_matche9.value) === null || _errors$object_matche10 === void 0 ? void 0 : _errors$object_matche10.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register(`${localPath}.value`, {
                        required: 'Field is required'
                      }), {
                        defaultValue: field.value,
                        placeholder: "value"
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                      className: styles.removeButton,
                      tooltip: "Remove matcher",
                      name: 'trash-alt',
                      onClick: () => remove(index),
                      children: "Remove"
                    })]
                  }, field.id);
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                className: styles.addMatcherBtn,
                icon: "plus",
                onClick: () => append(_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.emptyArrayFieldMatcher),
                variant: "secondary",
                type: "button",
                children: "Add matcher"
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Contact point",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref2 => {
              let {
                field: {
                  onChange
                }
              } = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                "aria-label": "Contact point"
              }, field, {
                className: formStyles.input,
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                options: receivers,
                menuShouldPortal: true
              }));
            },
            control: control,
            name: "receiver"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Continue matching subsequent sibling nodes",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, Object.assign({
            id: "continue-toggle"
          }, register('continue')))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Override grouping",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
            id: "override-grouping-toggle",
            value: overrideGrouping,
            onChange: () => setOverrideGrouping(overrideGrouping => !overrideGrouping)
          })
        }), overrideGrouping && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Group by",
          description: "Group alerts when you receive a notification based on labels.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref3 => {
              let {
                field: {
                  onChange
                }
              } = _ref3,
                  field = _objectWithoutPropertiesLoose(_ref3.field, _excluded3);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
                "aria-label": "Group by",
                menuShouldPortal: true
              }, field, {
                allowCustomValue: true,
                className: formStyles.input,
                onCreateOption: opt => {
                  setGroupByOptions(opts => [...opts, (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.stringToSelectableValue)(opt)]); // @ts-ignore-check: react-hook-form made me do this

                  setValue('groupBy', [...field.value, opt]);
                },
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapMultiSelectValueToStrings)(value)),
                options: groupByOptions
              }));
            },
            control: control,
            name: "groupBy"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Override general timings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
            id: "override-timings-toggle",
            value: overrideTimings,
            onChange: () => setOverrideTimings(overrideTimings => !overrideTimings)
          })
        }), overrideTimings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group wait",
            description: "The waiting time until the initial notification is sent for a new group created by an incoming alert.",
            invalid: !!errors.groupWaitValue,
            error: (_errors$groupWaitValu = errors.groupWaitValue) === null || _errors$groupWaitValu === void 0 ? void 0 : _errors$groupWaitValu.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: formStyles.smallInput,
                    invalid: invalid,
                    placeholder: "Time",
                    "aria-label": "Group wait value"
                  })),
                  control: control,
                  name: "groupWaitValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref4 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref4,
                        field = _objectWithoutPropertiesLoose(_ref4.field, _excluded4);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                      menuShouldPortal: true
                    }, field, {
                      className: formStyles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_4__.timeOptions,
                      "aria-label": "Group wait type"
                    }));
                  },
                  control: control,
                  name: "groupWaitValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group interval",
            description: "The waiting time to send a batch of new alerts for that group after the first notification was sent.",
            invalid: !!errors.groupIntervalValue,
            error: (_errors$groupInterval = errors.groupIntervalValue) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: formStyles.smallInput,
                    invalid: invalid,
                    placeholder: "Time",
                    "aria-label": "Group interval value"
                  })),
                  control: control,
                  name: "groupIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref5 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref5,
                        field = _objectWithoutPropertiesLoose(_ref5.field, _excluded5);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                      menuShouldPortal: true
                    }, field, {
                      className: formStyles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_4__.timeOptions,
                      "aria-label": "Group interval type"
                    }));
                  },
                  control: control,
                  name: "groupIntervalValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Repeat interval",
            description: "The waiting time to resend an alert after they have successfully been sent.",
            invalid: !!errors.repeatIntervalValue,
            error: (_errors$repeatInterva = errors.repeatIntervalValue) === null || _errors$repeatInterva === void 0 ? void 0 : _errors$repeatInterva.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: formStyles.smallInput,
                    invalid: invalid,
                    placeholder: "Time",
                    "aria-label": "Repeat interval value"
                  })),
                  control: control,
                  name: "repeatIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref6 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref6,
                        field = _objectWithoutPropertiesLoose(_ref6.field, _excluded6);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                      menuShouldPortal: true
                    }, field, {
                      className: formStyles.input,
                      menuPlacement: "top",
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_4__.timeOptions,
                      "aria-label": "Repeat interval type"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValueType"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Mute timings",
          "data-testid": "am-mute-timing-select",
          description: "Add mute timing to policy",
          invalid: !!errors.muteTimeIntervals,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref7 => {
              let {
                field: {
                  onChange
                }
              } = _ref7,
                  field = _objectWithoutPropertiesLoose(_ref7.field, _excluded7);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
                "aria-label": "Mute timings",
                menuShouldPortal: true
              }, field, {
                className: formStyles.input,
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapMultiSelectValueToStrings)(value)),
                options: muteTimingOptions
              }));
            },
            control: control,
            name: "muteTimeIntervals"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: styles.buttonGroup,
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Save policy"
          })), _Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: onCancel,
            fill: "outline",
            type: "button",
            variant: "secondary",
            children: "Cancel"
          }))]
        })]
      });
    }
  });
};

const getStyles = theme => {
  const commonSpacing = theme.spacing(3.5);
  return {
    addMatcherBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-bottom: ${commonSpacing};
    `,
    matchersContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      background-color: ${theme.colors.background.secondary};
      margin: ${theme.spacing(1, 0)};
      padding: ${theme.spacing(1, 4.6, 1, 1.5)};
      width: fit-content;
    `,
    matchersOperator: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      min-width: 140px;
    `,
    nestedPolicies: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-top: ${commonSpacing};
    `,
    removeButton: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-left: ${theme.spacing(1)};
      margin-top: ${theme.spacing(2.5)};
    `,
    buttonGroup: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin: ${theme.spacing(6)} 0 ${commonSpacing};

      & > * + * {
        margin-left: ${theme.spacing(1.5)};
      }
    `,
    noMatchersWarning: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      padding: ${theme.spacing(1)} ${theme.spacing(2)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedRead.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRoutesExpandedRead": () => (/* binding */ AmRoutesExpandedRead)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _AmRoutesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx");
/* harmony import */ var _gridStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/gridStyles.ts");
/* harmony import */ var _MuteTimingsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;












const AmRoutesExpandedRead = ({
  onChange,
  receivers,
  routes,
  readOnly = false,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const gridStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_gridStyles__WEBPACK_IMPORTED_MODULE_5__.getGridStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_8__.getNotificationsPermissions)(alertManagerSourceName);
  const groupWait = routes.groupWaitValue ? `${routes.groupWaitValue}${routes.groupWaitValueType}` : '-';
  const groupInterval = routes.groupIntervalValue ? `${routes.groupIntervalValue}${routes.groupIntervalValueType}` : '-';
  const repeatInterval = routes.repeatIntervalValue ? `${routes.repeatIntervalValue}${routes.repeatIntervalValueType}` : '-';
  const [subroutes, setSubroutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(routes.routes);
  const [isAddMode, setIsAddMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: gridStyles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Group wait"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: groupWait
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Group interval"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: groupInterval
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Repeat interval"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: repeatInterval
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Nested policies"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: gridStyles.valueCell,
      children: [!!subroutes.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AmRoutesTable__WEBPACK_IMPORTED_MODULE_4__.AmRoutesTable, {
        isAddMode: isAddMode,
        onCancelAdd: () => {
          setIsAddMode(false);
          setSubroutes(subroutes => {
            const newSubroutes = [...subroutes];
            newSubroutes.pop();
            return newSubroutes;
          });
        },
        onChange: newRoutes => {
          onChange(Object.assign({}, routes, {
            routes: newRoutes
          }));

          if (isAddMode) {
            setIsAddMode(false);
          }
        },
        receivers: receivers,
        routes: subroutes,
        alertManagerSourceName: alertManagerSourceName
      }) : _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        children: "No nested policies configured."
      })), !isAddMode && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_7__.Authorize, {
        actions: [permissions.create],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: styles.addNestedRoutingBtn,
          icon: "plus",
          onClick: () => {
            setSubroutes(subroutes => [...subroutes, _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.emptyRoute]);
            setIsAddMode(true);
          },
          variant: "secondary",
          type: "button",
          children: "Add nested policy"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Mute timings"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_6__.MuteTimingsTable, {
        alertManagerSourceName: alertManagerSourceName,
        muteTimingNames: routes.muteTimeIntervals,
        hideActions: true
      })
    })]
  });
};

const getStyles = theme => {
  return {
    addNestedRoutingBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRoutesTable": () => (/* binding */ AmRoutesTable),
/* harmony export */   "deleteRoute": () => (/* binding */ deleteRoute),
/* harmony export */   "getFilteredRoutes": () => (/* binding */ getFilteredRoutes),
/* harmony export */   "updatedRoute": () => (/* binding */ updatedRoute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_dynamicTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/dynamicTable.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _AmRoutesExpandedForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedForm.tsx");
/* harmony import */ var _AmRoutesExpandedRead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedRead.tsx");
/* harmony import */ var _silences_Matchers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/Matchers.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _EmptyArea;
















const getFilteredRoutes = (routes, labelMatcherQuery, contactPointQuery) => {
  const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.parseMatchers)(labelMatcherQuery !== null && labelMatcherQuery !== void 0 ? labelMatcherQuery : '');
  let filteredRoutes = routes;

  if (matchers.length) {
    filteredRoutes = routes.filter(route => {
      const routeMatchers = route.object_matchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.matcherFieldToMatcher);
      return (0,lodash__WEBPACK_IMPORTED_MODULE_8__.intersectionWith)(routeMatchers, matchers, lodash__WEBPACK_IMPORTED_MODULE_8__.isEqual).length > 0;
    });
  }

  if (contactPointQuery && contactPointQuery.length > 0) {
    filteredRoutes = filteredRoutes.filter(route => route.receiver.toLowerCase().includes(contactPointQuery.toLowerCase()));
  }

  return filteredRoutes;
};
const updatedRoute = (routes, updatedRoute) => {
  const newRoutes = [...routes];
  const editIndex = newRoutes.findIndex(route => route.id === updatedRoute.id);

  if (editIndex >= 0) {
    newRoutes[editIndex] = Object.assign({}, newRoutes[editIndex], updatedRoute);
  }

  return newRoutes;
};
const deleteRoute = (routes, routeToRemove) => {
  return routes.filter(route => route.id !== routeToRemove.id);
};
const AmRoutesTable = ({
  isAddMode,
  onCancelAdd,
  onChange,
  receivers,
  routes,
  filters,
  readOnly = false,
  alertManagerSourceName
}) => {
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [expandedId, setExpandedId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_11__.getNotificationsPermissions)(alertManagerSourceName);
  const canEditRoutes = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermission(permissions.update);
  const canDeleteRoutes = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermission(permissions.delete);
  const showActions = !readOnly && (canEditRoutes || canDeleteRoutes);
  const expandItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => setExpandedId(item.id), []);
  const collapseItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setExpandedId(undefined), []);
  const cols = [{
    id: 'matchingCriteria',
    label: 'Matching labels',
    // eslint-disable-next-line react/display-name
    renderCell: item => {
      return item.data.object_matchers.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_silences_Matchers__WEBPACK_IMPORTED_MODULE_6__.Matchers, {
        matchers: item.data.object_matchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.matcherFieldToMatcher)
      }) : _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
        children: "Matches all alert instances"
      }));
    },
    size: 10
  }, {
    id: 'groupBy',
    label: 'Group by',
    renderCell: item => item.data.groupBy.join(', ') || '-',
    size: 5
  }, {
    id: 'receiverChannel',
    label: 'Contact point',
    renderCell: item => item.data.receiver || '-',
    size: 5
  }, {
    id: 'muteTimings',
    label: 'Mute timings',
    renderCell: item => item.data.muteTimeIntervals.join(', ') || '-',
    size: 5
  }, ...(!showActions ? [] : [{
    id: 'actions',
    label: 'Actions',
    // eslint-disable-next-line react/display-name
    renderCell: item => {
      if (item.renderExpandedContent) {
        return null;
      }

      const expandWithCustomContent = () => {
        expandItem(item);
        setEditMode(true);
      };

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            "aria-label": "Edit route",
            icon: "pen",
            onClick: expandWithCustomContent,
            size: "sm",
            type: "button",
            variant: "secondary",
            children: "Edit"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
            "aria-label": "Delete route",
            name: "trash-alt",
            onClick: () => {
              setShowDeleteModal(true);
            },
            type: "button"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
          isOpen: showDeleteModal,
          title: "Delete notification policy",
          body: "Deleting this notification policy will permanently remove it. Are you sure you want to delete this policy?",
          confirmText: "Yes, delete",
          icon: "exclamation-triangle",
          onConfirm: () => {
            const newRoutes = deleteRoute(routes, item.data);
            onChange(newRoutes);
          },
          onDismiss: () => setShowDeleteModal(false)
        })]
      });
    },
    size: '100px'
  }])];
  const filteredRoutes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getFilteredRoutes(routes, filters === null || filters === void 0 ? void 0 : filters.queryString, filters === null || filters === void 0 ? void 0 : filters.contactPoint), [routes, filters]);
  const dynamicTableRoutes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_dynamicTable__WEBPACK_IMPORTED_MODULE_2__.prepareItems)(isAddMode ? routes : filteredRoutes), [isAddMode, routes, filteredRoutes]); // expand the last item when adding or reset when the length changed

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isAddMode && dynamicTableRoutes.length) {
      setExpandedId(dynamicTableRoutes[dynamicTableRoutes.length - 1].id);
    }

    if (!isAddMode && dynamicTableRoutes.length) {
      setExpandedId(undefined);
    }
  }, [isAddMode, dynamicTableRoutes]);

  if (routes.length > 0 && filteredRoutes.length === 0) {
    return _EmptyArea || (_EmptyArea = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_9__.EmptyArea, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
        children: "No policies found"
      })
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_3__.DynamicTable, {
    cols: cols,
    isExpandable: true,
    items: dynamicTableRoutes,
    testIdGenerator: () => 'am-routes-row',
    onCollapse: collapseItem,
    onExpand: expandItem,
    isExpanded: item => expandedId === item.id,
    renderExpandedContent: item => isAddMode || editMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AmRoutesExpandedForm__WEBPACK_IMPORTED_MODULE_4__.AmRoutesExpandedForm, {
      onCancel: () => {
        if (isAddMode) {
          onCancelAdd();
        }

        setEditMode(false);
      },
      onSave: data => {
        const newRoutes = updatedRoute(routes, data);
        setEditMode(false);
        onChange(newRoutes);
      },
      receivers: receivers,
      routes: item.data
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AmRoutesExpandedRead__WEBPACK_IMPORTED_MODULE_5__.AmRoutesExpandedRead, {
      onChange: data => {
        const newRoutes = updatedRoute(routes, data);
        onChange(newRoutes);
      },
      receivers: receivers,
      routes: item.data,
      readOnly: readOnly,
      alertManagerSourceName: alertManagerSourceName
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmSpecificRouting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmSpecificRouting": () => (/* binding */ AmSpecificRouting)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");
/* harmony import */ var _EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx");
/* harmony import */ var _AmRoutesTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _EmptyArea, _Label, _Icon, _EmptyArea2;


















const AmSpecificRouting = ({
  alertManagerSourceName,
  onChange,
  onRootRouteEdit,
  receivers,
  routes,
  readOnly = false
}) => {
  var _filters$queryString, _filters$contactPoint;

  const [actualRoutes, setActualRoutes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([...routes.routes]);
  const [isAddMode, setIsAddMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_12__.getNotificationsPermissions)(alertManagerSourceName);
  const canCreateNotifications = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__.contextSrv.hasPermission(permissions.create);
  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_3__.useURLSearchParams)();
  const {
    queryString,
    contactPoint
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.getNotificationPoliciesFilters)(searchParams);
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    queryString,
    contactPoint
  });
  (0,react_use__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    setSearchParams({
      queryString: filters.queryString,
      contactPoint: filters.contactPoint
    });
  }, 400, [filters]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);

  const clearFilters = () => {
    setFilters({
      queryString: undefined,
      contactPoint: undefined
    });
    setSearchParams({
      queryString: undefined,
      contactPoint: undefined
    });
  };

  const addNewRoute = () => {
    clearFilters();
    setIsAddMode(true);
    setActualRoutes(() => [...routes.routes, Object.assign({}, _utils_amroutes__WEBPACK_IMPORTED_MODULE_4__.emptyRoute, {
      matchers: [_utils_amroutes__WEBPACK_IMPORTED_MODULE_4__.emptyArrayFieldMatcher]
    })]);
  };

  const onCancelAdd = () => {
    setIsAddMode(false);
    setActualRoutes([...routes.routes]);
  };

  const onTableRouteChange = newRoutes => {
    onChange(Object.assign({}, routes, {
      routes: newRoutes
    }));

    if (isAddMode) {
      setIsAddMode(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: styles.container,
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h5", {
      children: "Specific routing"
    })), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      children: "Send specific alerts to chosen contact points, based on matching criteria"
    })), !routes.receiver ? readOnly ? _EmptyArea || (_EmptyArea = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_7__.EmptyArea, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        children: "There is no default contact point configured for the root route."
      })
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_8__.EmptyAreaWithCTA, {
      buttonIcon: "rocket",
      buttonLabel: "Set a default contact point",
      onButtonClick: onRootRouteEdit,
      text: "You haven't set a default contact point for the root route yet.",
      showButton: canCreateNotifications
    }) : actualRoutes.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [!isAddMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: styles.searchContainer,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_6__.MatcherFilter, {
            onFilterChange: filter => setFilters(currentFilters => Object.assign({}, currentFilters, {
              queryString: filter
            })),
            queryString: (_filters$queryString = filters.queryString) !== null && _filters$queryString !== void 0 ? _filters$queryString : '',
            className: styles.filterInput
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: styles.filterInput,
            children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
              children: "Search by contact point"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
              onChange: ({
                currentTarget
              }) => setFilters(currentFilters => Object.assign({}, currentFilters, {
                contactPoint: currentTarget.value
              })),
              value: (_filters$contactPoint = filters.contactPoint) !== null && _filters$contactPoint !== void 0 ? _filters$contactPoint : '',
              placeholder: "Search by contact point",
              "data-testid": "search-query-input",
              prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                name: 'search'
              }))
            })]
          }), (queryString || contactPoint) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "secondary",
            icon: "times",
            onClick: clearFilters,
            className: styles.clearFilterBtn,
            children: "Clear filters"
          })]
        }), !isAddMode && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_10__.Authorize, {
          actions: [permissions.create],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: styles.addMatcherBtnRow,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              className: styles.addMatcherBtn,
              icon: "plus",
              onClick: addNewRoute,
              type: "button",
              children: "New policy"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_AmRoutesTable__WEBPACK_IMPORTED_MODULE_9__.AmRoutesTable, {
        isAddMode: isAddMode,
        readOnly: readOnly,
        onCancelAdd: onCancelAdd,
        onChange: onTableRouteChange,
        receivers: receivers,
        routes: actualRoutes,
        filters: {
          queryString,
          contactPoint
        },
        alertManagerSourceName: alertManagerSourceName
      })]
    }) : readOnly ? _EmptyArea2 || (_EmptyArea2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_7__.EmptyArea, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        children: "There are no specific policies configured."
      })
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_8__.EmptyAreaWithCTA, {
      buttonIcon: "plus",
      buttonLabel: "New specific policy",
      onButtonClick: addNewRoute,
      text: "You haven't created any specific policies yet.",
      showButton: canCreateNotifications
    })]
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-flow: column wrap;
    `,
    searchContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-flow: row nowrap;
      padding-bottom: ${theme.spacing(2)};
      border-bottom: 1px solid ${theme.colors.border.strong};
    `,
    clearFilterBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: flex-end;
      margin-left: ${theme.spacing(1)};
    `,
    filterInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 340px;
      & + & {
        margin-left: ${theme.spacing(1)};
      }
    `,
    addMatcherBtnRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-flow: column nowrap;
      padding: ${theme.spacing(2)} 0;
    `,
    addMatcherBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: flex-end;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuteTimingsTable": () => (/* binding */ MuteTimingsTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _p2, _IconButton, _br, _br2;

















const MuteTimingsTable = ({
  alertManagerSourceName,
  muteTimingNames,
  hideActions
}) => {
  var _result$alertmanager_3;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_13__.getNotificationsPermissions)(alertManagerSourceName);
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const [muteTimingName, setMuteTimingName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    result
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_7__.initialAsyncRequestState;
  const items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _result$alertmanager_, _result$alertmanager_2;

    const muteTimings = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : (_result$alertmanager_2 = result.alertmanager_config) === null || _result$alertmanager_2 === void 0 ? void 0 : _result$alertmanager_2.mute_time_intervals) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : [];
    return muteTimings.filter(({
      name
    }) => muteTimingNames ? muteTimingNames.includes(name) : true).map(mute => {
      return {
        id: mute.name,
        data: mute
      };
    });
  }, [result === null || result === void 0 ? void 0 : (_result$alertmanager_3 = result.alertmanager_config) === null || _result$alertmanager_3 === void 0 ? void 0 : _result$alertmanager_3.mute_time_intervals, muteTimingNames]);
  const columns = useColumns(alertManagerSourceName, hideActions, setMuteTimingName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: styles.container,
    children: [!hideActions && (_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h5", {
      children: "Mute timings"
    }))), !hideActions && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
      children: "Mute timings are a named interval of time that may be referenced in the notification policy tree to mute particular notification policies for specific times of the day."
    }))), !hideActions && items.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, {
      actions: [permissions.create],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        className: styles.addMuteButton,
        icon: "plus",
        variant: "primary",
        href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeAMLink)('alerting/routes/mute-timing/new', alertManagerSourceName),
        children: "New mute timing"
      })
    }), items.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_8__.DynamicTable, {
      items: items,
      cols: columns
    }) : !hideActions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_10__.EmptyAreaWithCTA, {
      text: "You haven't created any mute timings yet",
      buttonLabel: "Add mute timing",
      buttonIcon: "plus",
      buttonSize: "lg",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeAMLink)('alerting/routes/mute-timing/new', alertManagerSourceName),
      showButton: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.hasPermission(permissions.create)
    }) : _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
      children: "No mute timings configured"
    })), !hideActions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
      isOpen: !!muteTimingName,
      title: "Delete mute timing",
      body: `Are you sure you would like to delete "${muteTimingName}"`,
      confirmText: "Delete",
      onConfirm: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__.deleteMuteTimingAction)(alertManagerSourceName, muteTimingName)),
      onDismiss: () => setMuteTimingName('')
    })]
  });
};

function useColumns(alertManagerSourceName, hideActions = false, setMuteTimingName) {
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_13__.getNotificationsPermissions)(alertManagerSourceName);
  const userHasEditPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.hasPermission(permissions.update);
  const userHasDeletePermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.hasPermission(permissions.delete);
  const showActions = !hideActions && (userHasEditPermissions || userHasDeletePermissions);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const columns = [{
      id: 'name',
      label: 'Name',
      renderCell: function renderName({
        data
      }) {
        return data.name;
      },
      size: '250px'
    }, {
      id: 'timeRange',
      label: 'Time range',
      renderCell: ({
        data
      }) => renderTimeIntervals(data.time_intervals)
    }];

    if (showActions) {
      columns.push({
        id: 'actions',
        label: 'Actions',
        renderCell: function renderActions({
          data
        }) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, {
              actions: [permissions.update],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeAMLink)(`/alerting/routes/mute-timing/edit`, alertManagerSourceName, {
                  muteName: data.name
                }),
                children: _IconButton || (_IconButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                  name: "edit",
                  title: "Edit mute timing"
                }))
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, {
              actions: [permissions.delete],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                name: 'trash-alt',
                title: "Delete mute timing",
                onClick: () => setMuteTimingName(data.name)
              })
            })]
          });
        },
        size: '100px'
      });
    }

    return columns;
  }, [alertManagerSourceName, setMuteTimingName, showActions, permissions]);
}

function renderTimeIntervals(timeIntervals) {
  return timeIntervals.map((interval, index) => {
    const {
      times,
      weekdays,
      days_of_month,
      months,
      years
    } = interval;
    const timeString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getTimeString)(times);
    const weekdayString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getWeekdayString)(weekdays);
    const daysString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getDaysOfMonthString)(days_of_month);
    const monthsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getMonthsString)(months);
    const yearsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getYearsString)(years);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [`${timeString} ${weekdayString}`, _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("br", {})), [daysString, monthsString, yearsString].join(' | '), _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("br", {}))]
    }, JSON.stringify(interval) + index);
  });
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    display: flex;
    flex-flow: column nowrap;
  `,
  addMuteButton: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-bottom: ${theme.spacing(2)};
    align-self: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/formStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormStyles": () => (/* binding */ getFormStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getFormStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-items: center;
      display: flex;
      flex-flow: row nowrap;

      & > * + * {
        margin-left: ${theme.spacing(1)};
      }
    `,
    input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1;
    `,
    timingContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: ${theme.spacing(33)};
    `,
    smallInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: ${theme.spacing(6.5)};
    `,
    linkText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-decoration: underline;
    `,
    collapse: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: none;
      background: none;
      color: ${theme.colors.text.primary};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/gridStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGridStyles": () => (/* binding */ getGridStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getGridStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: grid;
      font-style: ${theme.typography.fontSize};
      grid-template-columns: ${theme.spacing(15.5)} auto;

      ${theme.breakpoints.down('md')} {
        grid-template-columns: 100%;
      }
    `,
    titleCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.primary};
    `,
    valueCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      margin-bottom: ${theme.spacing(1)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/Matchers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matchers": () => (/* binding */ Matchers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Matchers = ({
  matchers
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TagList, {
      className: styles.tags,
      tags: matchers.map(matcher => `${matcher.name}${(0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_3__.matcherToOperator)(matcher)}${matcher.value}`)
    })
  });
};

const getStyles = () => ({
  tags: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    justify-content: flex-start;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertManagerSourceName": () => (/* binding */ useAlertManagerSourceName)
/* harmony export */ });
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");






function isAlertManagerSource(alertManagerSourceName) {
  return alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME || !!(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.getAlertManagerDataSources)().find(ds => ds.name === alertManagerSourceName);
}
/* this will return am name either from query params or from local storage or a default (grafana).
 *
 * fallbackUrl - if provided, will redirect to this url if alertmanager provided in query no longer
 */


function useAlertManagerSourceName() {
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_0__.useQueryParams)();
  const update = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerSource(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME) {
      app_core_store__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_1__["default"].set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: alertManagerSourceName
      });
    }
  }, [updateQueryParams]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerSource(querySource)) {
      return [querySource, update];
    } else {
      // non existing alertmanager
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerSource(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useMuteTimingOptions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMuteTimingOptions": () => (/* binding */ useMuteTimingOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useMuteTimingOptions() {
  const [alertManagerSourceName] = (0,_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_3__.useAlertManagerSourceName)();
  const amConfigs = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.amConfigs);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _result$alertmanager_, _config$mute_time_int, _config$mute_time_int2;

    const {
      result
    } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_2__.initialAsyncRequestState;
    const config = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : result.alertmanager_config) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : {};
    const muteTimingsOptions = (_config$mute_time_int = config === null || config === void 0 ? void 0 : (_config$mute_time_int2 = config.mute_time_intervals) === null || _config$mute_time_int2 === void 0 ? void 0 : _config$mute_time_int2.map(value => ({
      value: value.name,
      label: value.name,
      description: value.time_intervals.map(interval => (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_1__.timeIntervalToString)(interval)).join(', AND ')
    }))) !== null && _config$mute_time_int !== void 0 ? _config$mute_time_int : [];
    return muteTimingsOptions;
  }, [alertManagerSourceName, amConfigs]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useURLSearchParams.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useURLSearchParams": () => (/* binding */ useURLSearchParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");



function useURLSearchParams() {
  const {
    search
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new URLSearchParams(search), [search]);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((searchValues, replace) => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial(searchValues, replace);
  }, []);
  return [queryParams, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/amroutes.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amRouteToFormAmRoute": () => (/* binding */ amRouteToFormAmRoute),
/* harmony export */   "emptyArrayFieldMatcher": () => (/* binding */ emptyArrayFieldMatcher),
/* harmony export */   "emptyRoute": () => (/* binding */ emptyRoute),
/* harmony export */   "formAmRouteToAmRoute": () => (/* binding */ formAmRouteToAmRoute),
/* harmony export */   "mapMultiSelectValueToStrings": () => (/* binding */ mapMultiSelectValueToStrings),
/* harmony export */   "mapSelectValueToString": () => (/* binding */ mapSelectValueToString),
/* harmony export */   "optionalPositiveInteger": () => (/* binding */ optionalPositiveInteger),
/* harmony export */   "stringToSelectableValue": () => (/* binding */ stringToSelectableValue),
/* harmony export */   "stringsToSelectableValues": () => (/* binding */ stringsToSelectableValues)
/* harmony export */ });
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alertmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");





const defaultValueAndType = ['', _time__WEBPACK_IMPORTED_MODULE_1__.timeOptions[0].value];

const matchersToArrayFieldMatchers = (matchers, isRegex) => Object.entries(matchers !== null && matchers !== void 0 ? matchers : {}).reduce((acc, [name, value]) => [...acc, {
  name,
  value,
  operator: isRegex ? app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.MatcherOperator.regex : app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.MatcherOperator.equal
}], []);

const intervalToValueAndType = strValue => {
  if (!strValue) {
    return defaultValueAndType;
  }

  const [value, valueType] = strValue ? (0,_time__WEBPACK_IMPORTED_MODULE_1__.parseInterval)(strValue) : [undefined, undefined];
  const timeOption = _time__WEBPACK_IMPORTED_MODULE_1__.timeOptions.find(opt => opt.value === valueType);

  if (!value || !timeOption) {
    return defaultValueAndType;
  }

  return [String(value), timeOption.value];
};

const selectableValueToString = selectableValue => selectableValue.value;

const selectableValuesToStrings = arr => (arr !== null && arr !== void 0 ? arr : []).map(selectableValueToString);

const emptyArrayFieldMatcher = {
  name: '',
  value: '',
  operator: app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.MatcherOperator.equal
};
const emptyRoute = {
  id: '',
  groupBy: [],
  object_matchers: [],
  routes: [],
  continue: false,
  receiver: '',
  groupWaitValue: '',
  groupWaitValueType: _time__WEBPACK_IMPORTED_MODULE_1__.timeOptions[0].value,
  groupIntervalValue: '',
  groupIntervalValueType: _time__WEBPACK_IMPORTED_MODULE_1__.timeOptions[0].value,
  repeatIntervalValue: '',
  repeatIntervalValueType: _time__WEBPACK_IMPORTED_MODULE_1__.timeOptions[0].value,
  muteTimeIntervals: []
}; //returns route, and a record mapping id to existing route route

const amRouteToFormAmRoute = route => {
  var _route$routes, _route$matchers$map, _route$matchers, _route$object_matcher, _route$object_matcher2, _route$continue, _route$receiver, _route$group_by, _route$mute_time_inte;

  if (!route || Object.keys(route).length === 0) {
    return [emptyRoute, {}];
  }

  const [groupWaitValue, groupWaitValueType] = intervalToValueAndType(route.group_wait);
  const [groupIntervalValue, groupIntervalValueType] = intervalToValueAndType(route.group_interval);
  const [repeatIntervalValue, repeatIntervalValueType] = intervalToValueAndType(route.repeat_interval);
  const id = String(Math.random());
  const id2route = {
    [id]: route
  };
  const formRoutes = [];
  (_route$routes = route.routes) === null || _route$routes === void 0 ? void 0 : _route$routes.forEach(subRoute => {
    const [subFormRoute, subId2Route] = amRouteToFormAmRoute(subRoute);
    formRoutes.push(subFormRoute);
    Object.assign(id2route, subId2Route);
  }); // Frontend migration to use object_matchers instead of matchers

  const matchers = route.matchers ? (_route$matchers$map = (_route$matchers = route.matchers) === null || _route$matchers === void 0 ? void 0 : _route$matchers.map(matcher => (0,_alertmanager__WEBPACK_IMPORTED_MODULE_3__.matcherToMatcherField)((0,_alertmanager__WEBPACK_IMPORTED_MODULE_3__.parseMatcher)(matcher)))) !== null && _route$matchers$map !== void 0 ? _route$matchers$map : [] : (_route$object_matcher = (_route$object_matcher2 = route.object_matchers) === null || _route$object_matcher2 === void 0 ? void 0 : _route$object_matcher2.map(matcher => ({
    name: matcher[0],
    operator: matcher[1],
    value: matcher[2]
  }))) !== null && _route$object_matcher !== void 0 ? _route$object_matcher : [];
  return [{
    id,
    object_matchers: [...matchers, ...matchersToArrayFieldMatchers(route.match, false), ...matchersToArrayFieldMatchers(route.match_re, true)],
    continue: (_route$continue = route.continue) !== null && _route$continue !== void 0 ? _route$continue : false,
    receiver: (_route$receiver = route.receiver) !== null && _route$receiver !== void 0 ? _route$receiver : '',
    groupBy: (_route$group_by = route.group_by) !== null && _route$group_by !== void 0 ? _route$group_by : [],
    groupWaitValue,
    groupWaitValueType,
    groupIntervalValue,
    groupIntervalValueType,
    repeatIntervalValue,
    repeatIntervalValueType,
    routes: formRoutes,
    muteTimeIntervals: (_route$mute_time_inte = route.mute_time_intervals) !== null && _route$mute_time_inte !== void 0 ? _route$mute_time_inte : []
  }, id2route];
};
const formAmRouteToAmRoute = (alertManagerSourceName, formAmRoute, id2ExistingRoute) => {
  const existing = id2ExistingRoute[formAmRoute.id];
  const amRoute = Object.assign({}, existing !== null && existing !== void 0 ? existing : {}, {
    continue: formAmRoute.continue,
    group_by: formAmRoute.groupBy,
    object_matchers: formAmRoute.object_matchers.length ? formAmRoute.object_matchers.map(matcher => [matcher.name, matcher.operator, matcher.value]) : undefined,
    match: undefined,
    match_re: undefined,
    group_wait: formAmRoute.groupWaitValue ? `${formAmRoute.groupWaitValue}${formAmRoute.groupWaitValueType}` : undefined,
    group_interval: formAmRoute.groupIntervalValue ? `${formAmRoute.groupIntervalValue}${formAmRoute.groupIntervalValueType}` : undefined,
    repeat_interval: formAmRoute.repeatIntervalValue ? `${formAmRoute.repeatIntervalValue}${formAmRoute.repeatIntervalValueType}` : undefined,
    routes: formAmRoute.routes.map(subRoute => formAmRouteToAmRoute(alertManagerSourceName, subRoute, id2ExistingRoute)),
    mute_time_intervals: formAmRoute.muteTimeIntervals
  });

  if (alertManagerSourceName !== _datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME) {
    amRoute.matchers = formAmRoute.object_matchers.map(({
      name,
      operator,
      value
    }) => `${name}${operator}${value}`);
    amRoute.object_matchers = undefined;
  } else {
    amRoute.matchers = undefined;
  }

  if (formAmRoute.receiver) {
    amRoute.receiver = formAmRoute.receiver;
  }

  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omitBy)(amRoute, lodash__WEBPACK_IMPORTED_MODULE_2__.isUndefined);
};
const stringToSelectableValue = str => ({
  label: str,
  value: str
});
const stringsToSelectableValues = arr => (arr !== null && arr !== void 0 ? arr : []).map(stringToSelectableValue);
const mapSelectValueToString = selectableValue => {
  var _selectableValueToStr;

  if (!selectableValue) {
    return '';
  }

  return (_selectableValueToStr = selectableValueToString(selectableValue)) !== null && _selectableValueToStr !== void 0 ? _selectableValueToStr : '';
};
const mapMultiSelectValueToStrings = selectableValues => {
  if (!selectableValues) {
    return [];
  }

  return selectableValuesToStrings(selectableValues);
};
const optionalPositiveInteger = value => {
  if (!value) {
    return undefined;
  }

  return !/^\d+$/.test(value) ? 'Must be a positive integer.' : undefined;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/dynamicTable.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareItems": () => (/* binding */ prepareItems)
/* harmony export */ });
const prepareItems = (items, idCreator) => items.map((item, index) => {
  var _idCreator;

  return {
    id: (_idCreator = idCreator === null || idCreator === void 0 ? void 0 : idCreator(item)) !== null && _idCreator !== void 0 ? _idCreator : index,
    data: item
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUQsRUFBTzdELEtBQVA7QUFBQTs7QUFBQSxTQUFrQjtBQUMxQk0sSUFBQUEsRUFBRSxnQkFBRTZNLFNBQUYsYUFBRUEsU0FBRix1QkFBRUEsU0FBUyxDQUFHdEosSUFBSCxDQUFYLG1EQUF1QjdELEtBREM7QUFFMUI1SixJQUFBQSxJQUFJLEVBQUV5TjtBQUZvQixHQUFsQjtBQUFBLENBQVYsQ0FKSyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL0FtUm91dGVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0F1dGhvcml6ZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0VtcHR5QXJlYS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0VtcHR5QXJlYVdpdGhDVEEudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL0FtUm9vdFJvdXRlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb290Um91dGVGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb290Um91dGVSZWFkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb3V0ZXNFeHBhbmRlZEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9BbVJvdXRlc0V4cGFuZGVkUmVhZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL0FtUm91dGVzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9BbVNwZWNpZmljUm91dGluZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9mb3JtU3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9ncmlkU3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9NYXRjaGVycy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlTXV0ZVRpbWluZ09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VVUkxTZWFyY2hQYXJhbXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9hbXJvdXRlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL2R5bmFtaWNUYWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiwgU3RhdGVTZWxlY3RvciB9IGZyb20gJy4uL2FjdGlvbnMvY2xlYW5VcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDbGVhbnVwPFQ+KHN0YXRlU2VsZWN0b3I6IFN0YXRlU2VsZWN0b3I8VD4pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAvL2JpdCBvZiBhIGhhY2sgdG8gdW5idXJkZW4gdXNlciBmcm9tIGhhdmluZyB0byB3cmFwIHN0YXRlU2VsY2V0b3IgaW4gYSB1c2VDYWxsYmFjay4gT3RoZXJ3aXNlIGNsZWFudXAgd291bGQgaGFwcGVuIG9uIGV2ZXJ5IHJlbmRlclxuICBjb25zdCBzZWxlY3RvclJlZiA9IHVzZVJlZihzdGF0ZVNlbGVjdG9yKTtcbiAgc2VsZWN0b3JSZWYuY3VycmVudCA9IHN0YXRlU2VsZWN0b3I7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yOiBzZWxlY3RvclJlZi5jdXJyZW50IH0pKTtcbiAgICB9O1xuICB9LCBbZGlzcGF0Y2hdKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIExvYWRpbmdQbGFjZWhvbGRlciwgdXNlU3R5bGVzMiwgd2l0aEVycm9yQm91bmRhcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBSZWNlaXZlciB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IHVzZUNsZWFudXAgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuaW1wb3J0IHsgQWxlcnRpbmdQYWdlV3JhcHBlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydGluZ1BhZ2VXcmFwcGVyJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydE1hbmFnZXJQaWNrZXInO1xuaW1wb3J0IHsgQW1Sb290Um91dGUgfSBmcm9tICcuL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb290Um91dGUnO1xuaW1wb3J0IHsgQW1TcGVjaWZpY1JvdXRpbmcgfSBmcm9tICcuL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1TcGVjaWZpY1JvdXRpbmcnO1xuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9IGZyb20gJy4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24sIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBBbVJvdXRlUmVjZWl2ZXIsIEZvcm1BbVJvdXRlIH0gZnJvbSAnLi90eXBlcy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBhbVJvdXRlVG9Gb3JtQW1Sb3V0ZSwgZm9ybUFtUm91dGVUb0FtUm91dGUsIHN0cmluZ3NUb1NlbGVjdGFibGVWYWx1ZXMgfSBmcm9tICcuL3V0aWxzL2Ftcm91dGVzJztcbmltcG9ydCB7IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4vdXRpbHMvcmVkdXgnO1xuaW1wb3J0IHsgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgTXV0ZVRpbWluZ3NUYWJsZSB9IGZyb20gJy4vY29tcG9uZW50cy9hbXJvdXRlcy9NdXRlVGltaW5nc1RhYmxlJztcblxuY29uc3QgQW1Sb3V0ZXM6IEZDID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW2lzUm9vdFJvdXRlRWRpdE1vZGUsIHNldElzUm9vdFJvdXRlRWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKCk7XG5cbiAgY29uc3QgcmVhZE9ubHkgPSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lID8gaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkgOiB0cnVlO1xuXG4gIGNvbnN0IGFtQ29uZmlncyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1Db25maWdzKTtcblxuICBjb25zdCBmZXRjaENvbmZpZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpO1xuICAgIH1cbiAgfSwgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGRpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaENvbmZpZygpO1xuICB9LCBbZmV0Y2hDb25maWddKTtcblxuICBjb25zdCB7XG4gICAgcmVzdWx0LFxuICAgIGxvYWRpbmc6IHJlc3VsdExvYWRpbmcsXG4gICAgZXJyb3I6IHJlc3VsdEVycm9yLFxuICB9ID0gKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgYW1Db25maWdzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgY29uZmlnID0gcmVzdWx0Py5hbGVydG1hbmFnZXJfY29uZmlnO1xuICBjb25zdCBbcm9vdFJvdXRlLCBpZDJFeGlzdGluZ1JvdXRlXSA9IHVzZU1lbW8oKCkgPT4gYW1Sb3V0ZVRvRm9ybUFtUm91dGUoY29uZmlnPy5yb3V0ZSksIFtjb25maWc/LnJvdXRlXSk7XG5cbiAgY29uc3QgcmVjZWl2ZXJzID0gc3RyaW5nc1RvU2VsZWN0YWJsZVZhbHVlcyhcbiAgICAoY29uZmlnPy5yZWNlaXZlcnMgPz8gW10pLm1hcCgocmVjZWl2ZXI6IFJlY2VpdmVyKSA9PiByZWNlaXZlci5uYW1lKVxuICApIGFzIEFtUm91dGVSZWNlaXZlcltdO1xuXG4gIGNvbnN0IGVudGVyUm9vdFJvdXRlRWRpdE1vZGUgPSAoKSA9PiB7XG4gICAgc2V0SXNSb290Um91dGVFZGl0TW9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBleGl0Um9vdFJvdXRlRWRpdE1vZGUgPSAoKSA9PiB7XG4gICAgc2V0SXNSb290Um91dGVFZGl0TW9kZShmYWxzZSk7XG4gIH07XG5cbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5zYXZlQU1Db25maWcpO1xuICBjb25zdCBoYW5kbGVTYXZlID0gKGRhdGE6IFBhcnRpYWw8Rm9ybUFtUm91dGU+KSA9PiB7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gZm9ybUFtUm91dGVUb0FtUm91dGUoXG4gICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICAgICAge1xuICAgICAgICAuLi5yb290Um91dGUsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICB9LFxuICAgICAgaWQyRXhpc3RpbmdSb3V0ZVxuICAgICk7XG5cbiAgICBpZiAoaXNSb290Um91dGVFZGl0TW9kZSkge1xuICAgICAgZXhpdFJvb3RSb3V0ZUVkaXRNb2RlKCk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goXG4gICAgICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oe1xuICAgICAgICBuZXdDb25maWc6IHtcbiAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgYWxlcnRtYW5hZ2VyX2NvbmZpZzoge1xuICAgICAgICAgICAgLi4ucmVzdWx0LmFsZXJ0bWFuYWdlcl9jb25maWcsXG4gICAgICAgICAgICByb3V0ZTogbmV3RGF0YSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvbGRDb25maWc6IHJlc3VsdCxcbiAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogYWxlcnRNYW5hZ2VyU291cmNlTmFtZSEsXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiAnU2F2ZWQnLFxuICAgICAgICByZWZldGNoOiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGlmICghYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvYWxlcnRpbmcvcm91dGVzXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBbGVydGluZ1BhZ2VXcmFwcGVyIHBhZ2VJZD1cImFtLXJvdXRlc1wiPlxuICAgICAgPEFsZXJ0TWFuYWdlclBpY2tlciBjdXJyZW50PXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBvbkNoYW5nZT17c2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz5cbiAgICAgIHtyZXN1bHRFcnJvciAmJiAhcmVzdWx0TG9hZGluZyAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBsb2FkaW5nIEFsZXJ0bWFuYWdlciBjb25maWdcIj5cbiAgICAgICAgICB7cmVzdWx0RXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvci4nfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIHtyZXN1bHRMb2FkaW5nICYmIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcgQWxlcnRtYW5hZ2VyIGNvbmZpZy4uLlwiIC8+fVxuICAgICAge3Jlc3VsdCAmJiAhcmVzdWx0TG9hZGluZyAmJiAhcmVzdWx0RXJyb3IgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxBbVJvb3RSb3V0ZVxuICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAgIGlzRWRpdE1vZGU9e2lzUm9vdFJvdXRlRWRpdE1vZGV9XG4gICAgICAgICAgICBvblNhdmU9e2hhbmRsZVNhdmV9XG4gICAgICAgICAgICBvbkVudGVyRWRpdE1vZGU9e2VudGVyUm9vdFJvdXRlRWRpdE1vZGV9XG4gICAgICAgICAgICBvbkV4aXRFZGl0TW9kZT17ZXhpdFJvb3RSb3V0ZUVkaXRNb2RlfVxuICAgICAgICAgICAgcmVjZWl2ZXJzPXtyZWNlaXZlcnN9XG4gICAgICAgICAgICByb3V0ZXM9e3Jvb3RSb3V0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJlYWt9IC8+XG4gICAgICAgICAgPEFtU3BlY2lmaWNSb3V0aW5nXG4gICAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNhdmV9XG4gICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICBvblJvb3RSb3V0ZUVkaXQ9e2VudGVyUm9vdFJvdXRlRWRpdE1vZGV9XG4gICAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgIHJvdXRlcz17cm9vdFJvdXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5icmVha30gLz5cbiAgICAgICAgICA8TXV0ZVRpbWluZ3NUYWJsZSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9BbGVydGluZ1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVycm9yQm91bmRhcnkoQW1Sb3V0ZXMsIHsgc3R5bGU6ICdwYWdlJyB9KTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBicmVhazogY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYWdlSWQ6IHN0cmluZztcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0aW5nUGFnZVdyYXBwZXI6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCBwYWdlSWQsIGlzTG9hZGluZyB9KSA9PiB7XG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwoXG4gICAgdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCksXG4gICAgcGFnZUlkXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PntjaGlsZHJlbn08L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxudHlwZSBQcm9wcyA9IHtcbiAgYWN0aW9uczogQWNjZXNzQ29udHJvbEFjdGlvbltdO1xuICBmYWxsYmFjaz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgQXV0aG9yaXplOiBGQzxQcm9wcz4gPSAoeyBhY3Rpb25zLCBjaGlsZHJlbiwgZmFsbGJhY2sgPSB0cnVlIH0pID0+IHtcbiAgaWYgKGFjdGlvbnMuc29tZSgoYWN0aW9uKSA9PiBjb250ZXh0U3J2Lmhhc0FjY2VzcyhhY3Rpb24sIGZhbGxiYWNrKSkpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgY29uc3QgRW1wdHlBcmVhOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJnMn07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFNlbWlXZWFrfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQnV0dG9uSFRNTEF0dHJpYnV0ZXMsIEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25WYXJpYW50LCBJY29uTmFtZSwgTGlua0J1dHRvbiwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRW1wdHlBcmVhIH0gZnJvbSAnLi9FbXB0eUFyZWEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtcHR5QXJlYVdpdGhDVEFQcm9wcyB7XG4gIGJ1dHRvbkxhYmVsOiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIG9uQnV0dG9uQ2xpY2s/OiBCdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD5bJ29uQ2xpY2snXTtcbiAgdGV4dDogc3RyaW5nO1xuXG4gIGJ1dHRvbkljb24/OiBJY29uTmFtZTtcbiAgYnV0dG9uU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZyc7XG4gIGJ1dHRvblZhcmlhbnQ/OiBCdXR0b25WYXJpYW50O1xuICBzaG93QnV0dG9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEVtcHR5QXJlYVdpdGhDVEE6IEZDPEVtcHR5QXJlYVdpdGhDVEFQcm9wcz4gPSAoe1xuICBidXR0b25JY29uLFxuICBidXR0b25MYWJlbCxcbiAgYnV0dG9uU2l6ZSA9ICdsZycsXG4gIGJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeScsXG4gIG9uQnV0dG9uQ2xpY2ssXG4gIHRleHQsXG4gIGhyZWYsXG4gIHNob3dCdXR0b24gPSB0cnVlLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBjb21tb25Qcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5idXR0b24sXG4gICAgaWNvbjogYnV0dG9uSWNvbixcbiAgICBzaXplOiBidXR0b25TaXplLFxuICAgIHZhcmlhbnQ6IGJ1dHRvblZhcmlhbnQsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlBcmVhPlxuICAgICAgPD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxuICAgICAgICB7c2hvd0J1dHRvbiAmJlxuICAgICAgICAgIChocmVmID8gKFxuICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17aHJlZn0gdHlwZT1cImJ1dHRvblwiIHsuLi5jb21tb25Qcm9wc30+XG4gICAgICAgICAgICAgIHtidXR0b25MYWJlbH1cbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfSB0eXBlPVwiYnV0dG9uXCIgey4uLmNvbW1vblByb3BzfT5cbiAgICAgICAgICAgICAge2J1dHRvbkxhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICA8L0VtcHR5QXJlYT5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iZzJ9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcueGx9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGAsXG4gICAgdGV4dDogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIGJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcubWR9IDAgJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYWJlbCwgVG9vbHRpcCwgSW5wdXQsIEljb24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHF1ZXJ5U3RyaW5nPzogc3RyaW5nO1xuICBkZWZhdWx0UXVlcnlTdHJpbmc/OiBzdHJpbmc7XG4gIG9uRmlsdGVyQ2hhbmdlOiAoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNYXRjaGVyRmlsdGVyID0gKHsgY2xhc3NOYW1lLCBvbkZpbHRlckNoYW5nZSwgZGVmYXVsdFF1ZXJ5U3RyaW5nLCBxdWVyeVN0cmluZyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIG9uRmlsdGVyQ2hhbmdlKHRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHNlYXJjaEljb24gPSA8SWNvbiBuYW1lPXsnc2VhcmNoJ30gLz47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGFiZWw+XG4gICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgPHNwYW4+U2VhcmNoIGJ5IGxhYmVsPC9zcGFuPlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBGaWx0ZXIgYWxlcnRzIHVzaW5nIGxhYmVsIHF1ZXJ5aW5nLCBleDpcbiAgICAgICAgICAgICAgICA8cHJlPntge3NldmVyaXR5PVwiY3JpdGljYWxcIiwgaW5zdGFuY2U9flwiY2x1c3Rlci11cy0uK1wifWB9PC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IG5hbWU9XCJpbmZvLWNpcmNsZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFF1ZXJ5U3RyaW5nfVxuICAgICAgICB2YWx1ZT17cXVlcnlTdHJpbmd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoLXF1ZXJ5LWlucHV0XCJcbiAgICAgICAgcHJlZml4PXtzZWFyY2hJY29ufVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdpZHRofVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgaWNvbjogY3NzYFxuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICBgLFxuICBpbnB1dFdpZHRoOiBjc3NgXG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFtUm91dGVSZWNlaXZlciwgRm9ybUFtUm91dGUgfSBmcm9tICcuLi8uLi90eXBlcy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBBbVJvb3RSb3V0ZUZvcm0gfSBmcm9tICcuL0FtUm9vdFJvdXRlRm9ybSc7XG5pbXBvcnQgeyBBbVJvb3RSb3V0ZVJlYWQgfSBmcm9tICcuL0FtUm9vdFJvdXRlUmVhZCc7XG5pbXBvcnQgeyBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BdXRob3JpemUnO1xuaW1wb3J0IHsgZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuZXhwb3J0IGludGVyZmFjZSBBbVJvb3RSb3V0ZVByb3BzIHtcbiAgaXNFZGl0TW9kZTogYm9vbGVhbjtcbiAgb25FbnRlckVkaXRNb2RlOiAoKSA9PiB2b2lkO1xuICBvbkV4aXRFZGl0TW9kZTogKCkgPT4gdm9pZDtcbiAgb25TYXZlOiAoZGF0YTogUGFydGlhbDxGb3JtQW1Sb3V0ZT4pID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGU7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFtUm9vdFJvdXRlOiBGQzxBbVJvb3RSb3V0ZVByb3BzPiA9ICh7XG4gIGlzRWRpdE1vZGUsXG4gIG9uU2F2ZSxcbiAgb25FbnRlckVkaXRNb2RlLFxuICBvbkV4aXRFZGl0TW9kZSxcbiAgcmVjZWl2ZXJzLFxuICByb3V0ZXMsXG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3QgaXNSZWFkT25seSA9IGlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGRhdGEtdGVzdGlkPVwiYW0tcm9vdC1yb3V0ZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxuICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFJvb3QgcG9saWN5IC0gPGk+ZGVmYXVsdCBmb3IgYWxsIGFsZXJ0czwvaT5cbiAgICAgICAgPC9oNT5cbiAgICAgICAgeyFpc0VkaXRNb2RlICYmICFpc1JlYWRPbmx5ICYmIChcbiAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy51cGRhdGVdfT5cbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBlblwiIG9uQ2xpY2s9e29uRW50ZXJFZGl0TW9kZX0gc2l6ZT1cInNtXCIgdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPlxuICAgICAgICBBbGwgYWxlcnRzIHdpbGwgZ28gdG8gdGhlIGRlZmF1bHQgY29udGFjdCBwb2ludCwgdW5sZXNzIHlvdSBzZXQgYWRkaXRpb25hbCBtYXRjaGVycyBpbiB0aGUgc3BlY2lmaWMgcm91dGluZ1xuICAgICAgICBhcmVhLlxuICAgICAgPC9wPlxuICAgICAge2lzRWRpdE1vZGUgPyAoXG4gICAgICAgIDxBbVJvb3RSb3V0ZUZvcm1cbiAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkV4aXRFZGl0TW9kZX1cbiAgICAgICAgICBvblNhdmU9e29uU2F2ZX1cbiAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICByb3V0ZXM9e3JvdXRlc31cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBbVJvb3RSb3V0ZVJlYWQgcm91dGVzPXtyb3V0ZXN9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIHRpdGxlQ29udGFpbmVyOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5wcmltYXJ5fTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgZmxleDogMTAwJTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBCdXR0b24sIENvbGxhcHNlLCBGaWVsZCwgRm9ybSwgSW5wdXQsIElucHV0Q29udHJvbCwgTGluaywgTXVsdGlTZWxlY3QsIFNlbGVjdCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFtUm91dGVSZWNlaXZlciwgRm9ybUFtUm91dGUgfSBmcm9tICcuLi8uLi90eXBlcy9hbXJvdXRlcyc7XG5pbXBvcnQge1xuICBtYXBNdWx0aVNlbGVjdFZhbHVlVG9TdHJpbmdzLFxuICBtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nLFxuICBvcHRpb25hbFBvc2l0aXZlSW50ZWdlcixcbiAgc3RyaW5nVG9TZWxlY3RhYmxlVmFsdWUsXG4gIHN0cmluZ3NUb1NlbGVjdGFibGVWYWx1ZXMsXG59IGZyb20gJy4uLy4uL3V0aWxzL2Ftcm91dGVzJztcbmltcG9ydCB7IG1ha2VBTUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IHRpbWVPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgeyBnZXRGb3JtU3R5bGVzIH0gZnJvbSAnLi9mb3JtU3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbVJvb3RSb3V0ZUZvcm1Qcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG4gIG9uU2F2ZTogKGRhdGE6IEZvcm1BbVJvdXRlKSA9PiB2b2lkO1xuICByZWNlaXZlcnM6IEFtUm91dGVSZWNlaXZlcltdO1xuICByb3V0ZXM6IEZvcm1BbVJvdXRlO1xufVxuXG5leHBvcnQgY29uc3QgQW1Sb290Um91dGVGb3JtOiBGQzxBbVJvb3RSb3V0ZUZvcm1Qcm9wcz4gPSAoe1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICBvbkNhbmNlbCxcbiAgb25TYXZlLFxuICByZWNlaXZlcnMsXG4gIHJvdXRlcyxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRGb3JtU3R5bGVzKTtcbiAgY29uc3QgW2lzVGltaW5nT3B0aW9uc0V4cGFuZGVkLCBzZXRJc1RpbWluZ09wdGlvbnNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtncm91cEJ5T3B0aW9ucywgc2V0R3JvdXBCeU9wdGlvbnNdID0gdXNlU3RhdGUoc3RyaW5nc1RvU2VsZWN0YWJsZVZhbHVlcyhyb3V0ZXMuZ3JvdXBCeSkpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17cm91dGVzfSBvblN1Ym1pdD17b25TYXZlfT5cbiAgICAgIHsoeyBjb250cm9sLCBlcnJvcnMsIHNldFZhbHVlIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJEZWZhdWx0IGNvbnRhY3QgcG9pbnRcIiBpbnZhbGlkPXshIWVycm9ycy5yZWNlaXZlcn0gZXJyb3I9e2Vycm9ycy5yZWNlaXZlcj8ubWVzc2FnZX0+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZGF0YS10ZXN0aWQ9XCJhbS1yZWNlaXZlci1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgY29udGFjdCBwb2ludFwiXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyZWNlaXZlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVjZWl2ZXJcIlxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0gfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPm9yPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5rVGV4dH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoJy9hbGVydGluZy9ub3RpZmljYXRpb25zL3JlY2VpdmVycy9uZXcnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDcmVhdGUgYSBjb250YWN0IHBvaW50XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIkdyb3VwIGJ5XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR3JvdXAgYWxlcnRzIHdoZW4geW91IHJlY2VpdmUgYSBub3RpZmljYXRpb24gYmFzZWQgb24gbGFiZWxzLlwiXG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImFtLWdyb3VwLXNlbGVjdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIEB0cy1pZ25vcmUtY2hlY2s6IHJlYWN0LWhvb2stZm9ybSBtYWRlIG1lIGRvIHRoaXMgKi99XG4gICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR3JvdXAgYnlcIlxuICAgICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBvbkNyZWF0ZU9wdGlvbj17KG9wdDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEdyb3VwQnlPcHRpb25zKChvcHRzKSA9PiBbLi4ub3B0cywgc3RyaW5nVG9TZWxlY3RhYmxlVmFsdWUob3B0KV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUtY2hlY2s6IHJlYWN0LWhvb2stZm9ybSBtYWRlIG1lIGRvIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoJ2dyb3VwQnknLCBbLi4uZmllbGQudmFsdWUsIG9wdF0pO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcE11bHRpU2VsZWN0VmFsdWVUb1N0cmluZ3ModmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dyb3VwQnlPcHRpb25zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIG5hbWU9XCJncm91cEJ5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8Q29sbGFwc2VcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZX1cbiAgICAgICAgICAgIGlzT3Blbj17aXNUaW1pbmdPcHRpb25zRXhwYW5kZWR9XG4gICAgICAgICAgICBsYWJlbD1cIlRpbWluZyBvcHRpb25zXCJcbiAgICAgICAgICAgIG9uVG9nZ2xlPXtzZXRJc1RpbWluZ09wdGlvbnNFeHBhbmRlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJHcm91cCB3YWl0XCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgd2FpdGluZyB0aW1lIHVudGlsIHRoZSBpbml0aWFsIG5vdGlmaWNhdGlvbiBpcyBzZW50IGZvciBhIG5ldyBncm91cCBjcmVhdGVkIGJ5IGFuIGluY29taW5nIGFsZXJ0LiBEZWZhdWx0IDMwIHNlY29uZHMuXCJcbiAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZ3JvdXBXYWl0VmFsdWV9XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ3JvdXBXYWl0VmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYW0tZ3JvdXAtd2FpdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250YWluZXIsIHN0eWxlcy50aW1pbmdDb250YWluZXIpfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCwgZmllbGRTdGF0ZTogeyBpbnZhbGlkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0RlZmF1bHQgMzAgc2Vjb25kcyd9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwV2FpdFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogb3B0aW9uYWxQb3NpdGl2ZUludGVnZXIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UobWFwU2VsZWN0VmFsdWVUb1N0cmluZyh2YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGltZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR3JvdXAgd2FpdCB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3JvdXBXYWl0VmFsdWVUeXBlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIkdyb3VwIGludGVydmFsXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgd2FpdGluZyB0aW1lIHRvIHNlbmQgYSBiYXRjaCBvZiBuZXcgYWxlcnRzIGZvciB0aGF0IGdyb3VwIGFmdGVyIHRoZSBmaXJzdCBub3RpZmljYXRpb24gd2FzIHNlbnQuIERlZmF1bHQgNSBtaW51dGVzLlwiXG4gICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmdyb3VwSW50ZXJ2YWxWYWx1ZX1cbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5ncm91cEludGVydmFsVmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYW0tZ3JvdXAtaW50ZXJ2YWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGFpbmVyLCBzdHlsZXMudGltaW5nQ29udGFpbmVyKX0+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQsIGZpZWxkU3RhdGU6IHsgaW52YWxpZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydEZWZhdWx0IDUgbWludXRlcyd9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwSW50ZXJ2YWxWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IG9wdGlvbmFsUG9zaXRpdmVJbnRlZ2VyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIGludGVydmFsIHR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cEludGVydmFsVmFsdWVUeXBlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBpbnRlcnZhbFwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHdhaXRpbmcgdGltZSB0byByZXNlbmQgYW4gYWxlcnQgYWZ0ZXIgdGhleSBoYXZlIHN1Y2Nlc3NmdWxseSBiZWVuIHNlbnQuIERlZmF1bHQgNCBob3Vycy5cIlxuICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5yZXBlYXRJbnRlcnZhbFZhbHVlfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnJlcGVhdEludGVydmFsVmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYW0tcmVwZWF0LWludGVydmFsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRhaW5lciwgc3R5bGVzLnRpbWluZ0NvbnRhaW5lcil9PlxuICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlOiB7IGludmFsaWQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxJbnB1dH0gaW52YWxpZD17aW52YWxpZH0gcGxhY2Vob2xkZXI9XCJEZWZhdWx0IDQgaG91cnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVwZWF0SW50ZXJ2YWxWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IG9wdGlvbmFsUG9zaXRpdmVJbnRlZ2VyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UobWFwU2VsZWN0VmFsdWVUb1N0cmluZyh2YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGltZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVwZWF0IGludGVydmFsIHR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBlYXRJbnRlcnZhbFZhbHVlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2FuY2VsfSB0eXBlPVwicmVzZXRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgZmlsbD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRm9ybUFtUm91dGUgfSBmcm9tICcuLi8uLi90eXBlcy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBnZXRHcmlkU3R5bGVzIH0gZnJvbSAnLi9ncmlkU3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbVJvb3RSb3V0ZVJlYWRQcm9wcyB7XG4gIHJvdXRlczogRm9ybUFtUm91dGU7XG59XG5cbmV4cG9ydCBjb25zdCBBbVJvb3RSb3V0ZVJlYWQ6IEZDPEFtUm9vdFJvdXRlUmVhZFByb3BzPiA9ICh7IHJvdXRlcyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0R3JpZFN0eWxlcyk7XG5cbiAgY29uc3QgcmVjZWl2ZXIgPSByb3V0ZXMucmVjZWl2ZXIgfHwgJy0nO1xuICBjb25zdCBncm91cEJ5ID0gcm91dGVzLmdyb3VwQnkuam9pbignLCAnKSB8fCAnLSc7XG4gIGNvbnN0IGdyb3VwV2FpdCA9IHJvdXRlcy5ncm91cFdhaXRWYWx1ZSA/IGAke3JvdXRlcy5ncm91cFdhaXRWYWx1ZX0ke3JvdXRlcy5ncm91cFdhaXRWYWx1ZVR5cGV9YCA6ICctJztcbiAgY29uc3QgZ3JvdXBJbnRlcnZhbCA9IHJvdXRlcy5ncm91cEludGVydmFsVmFsdWVcbiAgICA/IGAke3JvdXRlcy5ncm91cEludGVydmFsVmFsdWV9JHtyb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlVHlwZX1gXG4gICAgOiAnLSc7XG4gIGNvbnN0IHJlcGVhdEludGVydmFsID0gcm91dGVzLnJlcGVhdEludGVydmFsVmFsdWVcbiAgICA/IGAke3JvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlfSR7cm91dGVzLnJlcGVhdEludGVydmFsVmFsdWVUeXBlfWBcbiAgICA6ICctJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDZWxsfT5Db250YWN0IHBvaW50PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlQ2VsbH0gZGF0YS10ZXN0aWQ9XCJhbS1yb3V0ZXMtcm9vdC1yZWNlaXZlclwiPlxuICAgICAgICB7cmVjZWl2ZXJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDZWxsfT5Hcm91cCBieTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUNlbGx9IGRhdGEtdGVzdGlkPVwiYW0tcm91dGVzLXJvb3QtZ3JvdXAtYnlcIj5cbiAgICAgICAge2dyb3VwQnl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDZWxsfT5UaW1pbmdzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlQ2VsbH0gZGF0YS10ZXN0aWQ9XCJhbS1yb3V0ZXMtcm9vdC10aW1pbmdzXCI+XG4gICAgICAgIEdyb3VwIHdhaXQ6IHtncm91cFdhaXR9IHwgR3JvdXAgaW50ZXJ2YWw6IHtncm91cEludGVydmFsfSB8IFJlcGVhdCBpbnRlcnZhbDoge3JlcGVhdEludGVydmFsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGaWVsZCxcbiAgRmllbGRBcnJheSxcbiAgRm9ybSxcbiAgSG9yaXpvbnRhbEdyb3VwLFxuICBJY29uQnV0dG9uLFxuICBJbnB1dCxcbiAgSW5wdXRDb250cm9sLFxuICBNdWx0aVNlbGVjdCxcbiAgU2VsZWN0LFxuICBTd2l0Y2gsXG4gIHVzZVN0eWxlczIsXG4gIEJhZGdlLFxuICBWZXJ0aWNhbEdyb3VwLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbVJvdXRlUmVjZWl2ZXIsIEZvcm1BbVJvdXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMvYW1yb3V0ZXMnO1xuaW1wb3J0IHtcbiAgZW1wdHlBcnJheUZpZWxkTWF0Y2hlcixcbiAgbWFwTXVsdGlTZWxlY3RWYWx1ZVRvU3RyaW5ncyxcbiAgbWFwU2VsZWN0VmFsdWVUb1N0cmluZyxcbiAgb3B0aW9uYWxQb3NpdGl2ZUludGVnZXIsXG4gIHN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlLFxuICBzdHJpbmdzVG9TZWxlY3RhYmxlVmFsdWVzLFxufSBmcm9tICcuLi8uLi91dGlscy9hbXJvdXRlcyc7XG5pbXBvcnQgeyB0aW1lT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3RpbWUnO1xuaW1wb3J0IHsgZ2V0Rm9ybVN0eWxlcyB9IGZyb20gJy4vZm9ybVN0eWxlcyc7XG5pbXBvcnQgeyBtYXRjaGVyRmllbGRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IHVzZU11dGVUaW1pbmdPcHRpb25zIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTXV0ZVRpbWluZ09wdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtUm91dGVzRXhwYW5kZWRGb3JtUHJvcHMge1xuICBvbkNhbmNlbDogKCkgPT4gdm9pZDtcbiAgb25TYXZlOiAoZGF0YTogRm9ybUFtUm91dGUpID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGU7XG59XG5cbmV4cG9ydCBjb25zdCBBbVJvdXRlc0V4cGFuZGVkRm9ybTogRkM8QW1Sb3V0ZXNFeHBhbmRlZEZvcm1Qcm9wcz4gPSAoeyBvbkNhbmNlbCwgb25TYXZlLCByZWNlaXZlcnMsIHJvdXRlcyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZm9ybVN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0Rm9ybVN0eWxlcyk7XG4gIGNvbnN0IFtvdmVycmlkZUdyb3VwaW5nLCBzZXRPdmVycmlkZUdyb3VwaW5nXSA9IHVzZVN0YXRlKHJvdXRlcy5ncm91cEJ5Lmxlbmd0aCA+IDApO1xuICBjb25zdCBbb3ZlcnJpZGVUaW1pbmdzLCBzZXRPdmVycmlkZVRpbWluZ3NdID0gdXNlU3RhdGUoXG4gICAgISFyb3V0ZXMuZ3JvdXBXYWl0VmFsdWUgfHwgISFyb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlIHx8ICEhcm91dGVzLnJlcGVhdEludGVydmFsVmFsdWVcbiAgKTtcbiAgY29uc3QgW2dyb3VwQnlPcHRpb25zLCBzZXRHcm91cEJ5T3B0aW9uc10gPSB1c2VTdGF0ZShzdHJpbmdzVG9TZWxlY3RhYmxlVmFsdWVzKHJvdXRlcy5ncm91cEJ5KSk7XG4gIGNvbnN0IG11dGVUaW1pbmdPcHRpb25zID0gdXNlTXV0ZVRpbWluZ09wdGlvbnMoKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIGRlZmF1bHRWYWx1ZXM9e3JvdXRlc30gb25TdWJtaXQ9e29uU2F2ZX0+XG4gICAgICB7KHsgY29udHJvbCwgcmVnaXN0ZXIsIGVycm9ycywgc2V0VmFsdWUgfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiBAdHMtaWdub3JlLWNoZWNrOiByZWFjdC1ob29rLWZvcm0gbWFkZSBtZSBkbyB0aGlzICovfVxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgey4uLnJlZ2lzdGVyKCdpZCcpfSAvPlxuICAgICAgICAgIHsvKiBAdHMtaWdub3JlLWNoZWNrOiByZWFjdC1ob29rLWZvcm0gbWFkZSBtZSBkbyB0aGlzICovfVxuICAgICAgICAgIDxGaWVsZEFycmF5IG5hbWU9XCJvYmplY3RfbWF0Y2hlcnNcIiBjb250cm9sPXtjb250cm9sfT5cbiAgICAgICAgICAgIHsoeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0pID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VmVydGljYWxHcm91cCBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIHNwYWNpbmc9XCJtZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5NYXRjaGluZyBsYWJlbHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtmaWVsZHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5vTWF0Y2hlcnNXYXJuaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIklmIG5vIG1hdGNoZXJzIGFyZSBzcGVjaWZpZWQsIHRoaXMgbm90aWZpY2F0aW9uIHBvbGljeSB3aWxsIGhhbmRsZSBhbGwgYWxlcnQgaW5zdGFuY2VzLlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge2ZpZWxkcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXRjaGVyc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxQYXRoID0gYG9iamVjdF9tYXRjaGVyc1ske2luZGV4fV1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cCBrZXk9e2ZpZWxkLmlkfSBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMub2JqZWN0X21hdGNoZXJzPy5baW5kZXhdPy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5vYmplY3RfbWF0Y2hlcnM/LltpbmRleF0/Lm5hbWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHtsb2NhbFBhdGh9Lm5hbWVgLCB7IHJlcXVpcmVkOiAnRmllbGQgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD17J09wZXJhdG9yJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWF0Y2hlcnNPcGVyYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlPy52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXttYXRjaGVyRmllbGRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkLm9wZXJhdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgJHtsb2NhbFBhdGh9Lm9wZXJhdG9yYCBhcyBjb25zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMub2JqZWN0X21hdGNoZXJzPy5baW5kZXhdPy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMub2JqZWN0X21hdGNoZXJzPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGAke2xvY2FsUGF0aH0udmFsdWVgLCB7IHJlcXVpcmVkOiAnRmllbGQgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIlJlbW92ZSBtYXRjaGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyd0cmFzaC1hbHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRNYXRjaGVyQnRufVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGVuZChlbXB0eUFycmF5RmllbGRNYXRjaGVyKX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgbWF0Y2hlclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GaWVsZEFycmF5PlxuICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkNvbnRhY3QgcG9pbnRcIj5cbiAgICAgICAgICAgIHsvKiBAdHMtaWdub3JlLWNoZWNrOiByZWFjdC1ob29rLWZvcm0gbWFkZSBtZSBkbyB0aGlzICovfVxuICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDb250YWN0IHBvaW50XCJcbiAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICBuYW1lPVwicmVjZWl2ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkNvbnRpbnVlIG1hdGNoaW5nIHN1YnNlcXVlbnQgc2libGluZyBub2Rlc1wiPlxuICAgICAgICAgICAgPFN3aXRjaCBpZD1cImNvbnRpbnVlLXRvZ2dsZVwiIHsuLi5yZWdpc3RlcignY29udGludWUnKX0gLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIk92ZXJyaWRlIGdyb3VwaW5nXCI+XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIGlkPVwib3ZlcnJpZGUtZ3JvdXBpbmctdG9nZ2xlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e292ZXJyaWRlR3JvdXBpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRPdmVycmlkZUdyb3VwaW5nKChvdmVycmlkZUdyb3VwaW5nKSA9PiAhb3ZlcnJpZGVHcm91cGluZyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAge292ZXJyaWRlR3JvdXBpbmcgJiYgKFxuICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiR3JvdXAgYnlcIiBkZXNjcmlwdGlvbj1cIkdyb3VwIGFsZXJ0cyB3aGVuIHlvdSByZWNlaXZlIGEgbm90aWZpY2F0aW9uIGJhc2VkIG9uIGxhYmVscy5cIj5cbiAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIGJ5XCJcbiAgICAgICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmb3JtU3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZU9wdGlvbj17KG9wdDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0R3JvdXBCeU9wdGlvbnMoKG9wdHMpID0+IFsuLi5vcHRzLCBzdHJpbmdUb1NlbGVjdGFibGVWYWx1ZShvcHQpXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlLWNoZWNrOiByZWFjdC1ob29rLWZvcm0gbWFkZSBtZSBkbyB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoJ2dyb3VwQnknLCBbLi4uZmllbGQudmFsdWUsIG9wdF0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBNdWx0aVNlbGVjdFZhbHVlVG9TdHJpbmdzKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dyb3VwQnlPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwQnlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIk92ZXJyaWRlIGdlbmVyYWwgdGltaW5nc1wiPlxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBpZD1cIm92ZXJyaWRlLXRpbWluZ3MtdG9nZ2xlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e292ZXJyaWRlVGltaW5nc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldE92ZXJyaWRlVGltaW5ncygob3ZlcnJpZGVUaW1pbmdzKSA9PiAhb3ZlcnJpZGVUaW1pbmdzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICB7b3ZlcnJpZGVUaW1pbmdzICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiR3JvdXAgd2FpdFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgd2FpdGluZyB0aW1lIHVudGlsIHRoZSBpbml0aWFsIG5vdGlmaWNhdGlvbiBpcyBzZW50IGZvciBhIG5ldyBncm91cCBjcmVhdGVkIGJ5IGFuIGluY29taW5nIGFsZXJ0LlwiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZ3JvdXBXYWl0VmFsdWV9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5ncm91cFdhaXRWYWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goZm9ybVN0eWxlcy5jb250YWluZXIsIGZvcm1TdHlsZXMudGltaW5nQ29udGFpbmVyKX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlOiB7IGludmFsaWQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuc21hbGxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIHdhaXQgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwV2FpdFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IG9wdGlvbmFsUG9zaXRpdmVJbnRlZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmb3JtU3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR3JvdXAgd2FpdCB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cFdhaXRWYWx1ZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiR3JvdXAgaW50ZXJ2YWxcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHdhaXRpbmcgdGltZSB0byBzZW5kIGEgYmF0Y2ggb2YgbmV3IGFsZXJ0cyBmb3IgdGhhdCBncm91cCBhZnRlciB0aGUgZmlyc3Qgbm90aWZpY2F0aW9uIHdhcyBzZW50LlwiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZ3JvdXBJbnRlcnZhbFZhbHVlfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ3JvdXBJbnRlcnZhbFZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChmb3JtU3R5bGVzLmNvbnRhaW5lciwgZm9ybVN0eWxlcy50aW1pbmdDb250YWluZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQsIGZpZWxkU3RhdGU6IHsgaW52YWxpZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5zbWFsbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR3JvdXAgaW50ZXJ2YWwgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwSW50ZXJ2YWxWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBvcHRpb25hbFBvc2l0aXZlSW50ZWdlcixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UobWFwU2VsZWN0VmFsdWVUb1N0cmluZyh2YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aW1lT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIGludGVydmFsIHR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVwZWF0IGludGVydmFsXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSB3YWl0aW5nIHRpbWUgdG8gcmVzZW5kIGFuIGFsZXJ0IGFmdGVyIHRoZXkgaGF2ZSBzdWNjZXNzZnVsbHkgYmVlbiBzZW50LlwiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMucmVwZWF0SW50ZXJ2YWxWYWx1ZX1cbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnJlcGVhdEludGVydmFsVmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KGZvcm1TdHlsZXMuY29udGFpbmVyLCBmb3JtU3R5bGVzLnRpbWluZ0NvbnRhaW5lcil9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCwgZmllbGRTdGF0ZTogeyBpbnZhbGlkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmb3JtU3R5bGVzLnNtYWxsSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZXBlYXQgaW50ZXJ2YWwgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlcGVhdEludGVydmFsVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogb3B0aW9uYWxQb3NpdGl2ZUludGVnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVwZWF0IGludGVydmFsIHR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlcGVhdEludGVydmFsVmFsdWVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiTXV0ZSB0aW1pbmdzXCJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYW0tbXV0ZS10aW1pbmctc2VsZWN0XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWRkIG11dGUgdGltaW5nIHRvIHBvbGljeVwiXG4gICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5tdXRlVGltZUludGVydmFsc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTXV0ZSB0aW1pbmdzXCJcbiAgICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcE11bHRpU2VsZWN0VmFsdWVUb1N0cmluZ3ModmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e211dGVUaW1pbmdPcHRpb25zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIG5hbWU9XCJtdXRlVGltZUludGVydmFsc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIHBvbGljeTwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbH0gZmlsbD1cIm91dGxpbmVcIiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIGNvbnN0IGNvbW1vblNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nKDMuNSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXRjaGVyQnRuOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke2NvbW1vblNwYWNpbmd9O1xuICAgIGAsXG4gICAgbWF0Y2hlcnNDb250YWluZXI6IGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDApfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxLCA0LjYsIDEsIDEuNSl9O1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGAsXG4gICAgbWF0Y2hlcnNPcGVyYXRvcjogY3NzYFxuICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICBgLFxuICAgIG5lc3RlZFBvbGljaWVzOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke2NvbW1vblNwYWNpbmd9O1xuICAgIGAsXG4gICAgcmVtb3ZlQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyLjUpfTtcbiAgICBgLFxuICAgIGJ1dHRvbkdyb3VwOiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg2KX0gMCAke2NvbW1vblNwYWNpbmd9O1xuXG4gICAgICAmID4gKiArICoge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEuNSl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgbm9NYXRjaGVyc1dhcm5pbmc6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxKX0gJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQW1Sb3V0ZVJlY2VpdmVyLCBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2Ftcm91dGVzJztcbmltcG9ydCB7IGVtcHR5Um91dGUgfSBmcm9tICcuLi8uLi91dGlscy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBBbVJvdXRlc1RhYmxlIH0gZnJvbSAnLi9BbVJvdXRlc1RhYmxlJztcbmltcG9ydCB7IGdldEdyaWRTdHlsZXMgfSBmcm9tICcuL2dyaWRTdHlsZXMnO1xuaW1wb3J0IHsgTXV0ZVRpbWluZ3NUYWJsZSB9IGZyb20gJy4vTXV0ZVRpbWluZ3NUYWJsZSc7XG5pbXBvcnQgeyBBdXRob3JpemUgfSBmcm9tICcuLi9BdXRob3JpemUnO1xuaW1wb3J0IHsgZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtUm91dGVzRXhwYW5kZWRSZWFkUHJvcHMge1xuICBvbkNoYW5nZTogKHJvdXRlczogRm9ybUFtUm91dGUpID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGU7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQW1Sb3V0ZXNFeHBhbmRlZFJlYWQ6IEZDPEFtUm91dGVzRXhwYW5kZWRSZWFkUHJvcHM+ID0gKHtcbiAgb25DaGFuZ2UsXG4gIHJlY2VpdmVycyxcbiAgcm91dGVzLFxuICByZWFkT25seSA9IGZhbHNlLFxuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGdyaWRTdHlsZXMgPSB1c2VTdHlsZXMyKGdldEdyaWRTdHlsZXMpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICBjb25zdCBncm91cFdhaXQgPSByb3V0ZXMuZ3JvdXBXYWl0VmFsdWUgPyBgJHtyb3V0ZXMuZ3JvdXBXYWl0VmFsdWV9JHtyb3V0ZXMuZ3JvdXBXYWl0VmFsdWVUeXBlfWAgOiAnLSc7XG4gIGNvbnN0IGdyb3VwSW50ZXJ2YWwgPSByb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlXG4gICAgPyBgJHtyb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlfSR7cm91dGVzLmdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGV9YFxuICAgIDogJy0nO1xuICBjb25zdCByZXBlYXRJbnRlcnZhbCA9IHJvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlXG4gICAgPyBgJHtyb3V0ZXMucmVwZWF0SW50ZXJ2YWxWYWx1ZX0ke3JvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlVHlwZX1gXG4gICAgOiAnLSc7XG5cbiAgY29uc3QgW3N1YnJvdXRlcywgc2V0U3Vicm91dGVzXSA9IHVzZVN0YXRlKHJvdXRlcy5yb3V0ZXMpO1xuICBjb25zdCBbaXNBZGRNb2RlLCBzZXRJc0FkZE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkU3R5bGVzLnRpdGxlQ2VsbH0+R3JvdXAgd2FpdDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudmFsdWVDZWxsfT57Z3JvdXBXYWl0fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudGl0bGVDZWxsfT5Hcm91cCBpbnRlcnZhbDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudmFsdWVDZWxsfT57Z3JvdXBJbnRlcnZhbH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkU3R5bGVzLnRpdGxlQ2VsbH0+UmVwZWF0IGludGVydmFsPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy52YWx1ZUNlbGx9PntyZXBlYXRJbnRlcnZhbH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkU3R5bGVzLnRpdGxlQ2VsbH0+TmVzdGVkIHBvbGljaWVzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy52YWx1ZUNlbGx9PlxuICAgICAgICB7ISFzdWJyb3V0ZXMubGVuZ3RoID8gKFxuICAgICAgICAgIDxBbVJvdXRlc1RhYmxlXG4gICAgICAgICAgICBpc0FkZE1vZGU9e2lzQWRkTW9kZX1cbiAgICAgICAgICAgIG9uQ2FuY2VsQWRkPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzQWRkTW9kZShmYWxzZSk7XG4gICAgICAgICAgICAgIHNldFN1YnJvdXRlcygoc3Vicm91dGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3Vicm91dGVzID0gWy4uLnN1YnJvdXRlc107XG4gICAgICAgICAgICAgICAgbmV3U3Vicm91dGVzLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N1YnJvdXRlcztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdSb3V0ZXMpID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnJvdXRlcyxcbiAgICAgICAgICAgICAgICByb3V0ZXM6IG5ld1JvdXRlcyxcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKGlzQWRkTW9kZSkge1xuICAgICAgICAgICAgICAgIHNldElzQWRkTW9kZShmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgIHJvdXRlcz17c3Vicm91dGVzfVxuICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPk5vIG5lc3RlZCBwb2xpY2llcyBjb25maWd1cmVkLjwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpc0FkZE1vZGUgJiYgIXJlYWRPbmx5ICYmIChcbiAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy5jcmVhdGVdfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTmVzdGVkUm91dGluZ0J0bn1cbiAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3Vicm91dGVzKChzdWJyb3V0ZXMpID0+IFsuLi5zdWJyb3V0ZXMsIGVtcHR5Um91dGVdKTtcbiAgICAgICAgICAgICAgICBzZXRJc0FkZE1vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkIG5lc3RlZCBwb2xpY3lcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy50aXRsZUNlbGx9Pk11dGUgdGltaW5nczwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudmFsdWVDZWxsfT5cbiAgICAgICAgPE11dGVUaW1pbmdzVGFibGVcbiAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lIX1cbiAgICAgICAgICBtdXRlVGltaW5nTmFtZXM9e3JvdXRlcy5tdXRlVGltZUludGVydmFsc31cbiAgICAgICAgICBoaWRlQWN0aW9uc1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGROZXN0ZWRSb3V0aW5nQnRuOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgQ29uZmlybU1vZGFsLCBIb3Jpem9udGFsR3JvdXAsIEljb25CdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbVJvdXRlUmVjZWl2ZXIsIEZvcm1BbVJvdXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgcHJlcGFyZUl0ZW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHluYW1pY1RhYmxlJztcbmltcG9ydCB7IER5bmFtaWNUYWJsZSwgRHluYW1pY1RhYmxlQ29sdW1uUHJvcHMsIER5bmFtaWNUYWJsZUl0ZW1Qcm9wcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZSc7XG5pbXBvcnQgeyBBbVJvdXRlc0V4cGFuZGVkRm9ybSB9IGZyb20gJy4vQW1Sb3V0ZXNFeHBhbmRlZEZvcm0nO1xuaW1wb3J0IHsgQW1Sb3V0ZXNFeHBhbmRlZFJlYWQgfSBmcm9tICcuL0FtUm91dGVzRXhwYW5kZWRSZWFkJztcbmltcG9ydCB7IE1hdGNoZXJzIH0gZnJvbSAnLi4vc2lsZW5jZXMvTWF0Y2hlcnMnO1xuaW1wb3J0IHsgbWF0Y2hlckZpZWxkVG9NYXRjaGVyLCBwYXJzZU1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IGludGVyc2VjdGlvbldpdGgsIGlzRXF1YWwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRW1wdHlBcmVhIH0gZnJvbSAnLi4vRW1wdHlBcmVhJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1Sb3V0ZXNUYWJsZVByb3BzIHtcbiAgaXNBZGRNb2RlOiBib29sZWFuO1xuICBvbkNoYW5nZTogKHJvdXRlczogRm9ybUFtUm91dGVbXSkgPT4gdm9pZDtcbiAgb25DYW5jZWxBZGQ6ICgpID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGVbXTtcbiAgZmlsdGVycz86IHsgcXVlcnlTdHJpbmc/OiBzdHJpbmc7IGNvbnRhY3RQb2ludD86IHN0cmluZyB9O1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxudHlwZSBSb3V0ZVRhYmxlQ29sdW1uUHJvcHMgPSBEeW5hbWljVGFibGVDb2x1bW5Qcm9wczxGb3JtQW1Sb3V0ZT47XG50eXBlIFJvdXRlVGFibGVJdGVtUHJvcHMgPSBEeW5hbWljVGFibGVJdGVtUHJvcHM8Rm9ybUFtUm91dGU+O1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyZWRSb3V0ZXMgPSAocm91dGVzOiBGb3JtQW1Sb3V0ZVtdLCBsYWJlbE1hdGNoZXJRdWVyeT86IHN0cmluZywgY29udGFjdFBvaW50UXVlcnk/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hlcnMgPSBwYXJzZU1hdGNoZXJzKGxhYmVsTWF0Y2hlclF1ZXJ5ID8/ICcnKTtcblxuICBsZXQgZmlsdGVyZWRSb3V0ZXMgPSByb3V0ZXM7XG5cbiAgaWYgKG1hdGNoZXJzLmxlbmd0aCkge1xuICAgIGZpbHRlcmVkUm91dGVzID0gcm91dGVzLmZpbHRlcigocm91dGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2hlcnMgPSByb3V0ZS5vYmplY3RfbWF0Y2hlcnMubWFwKG1hdGNoZXJGaWVsZFRvTWF0Y2hlcik7XG4gICAgICByZXR1cm4gaW50ZXJzZWN0aW9uV2l0aChyb3V0ZU1hdGNoZXJzLCBtYXRjaGVycywgaXNFcXVhbCkubGVuZ3RoID4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjb250YWN0UG9pbnRRdWVyeSAmJiBjb250YWN0UG9pbnRRdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgZmlsdGVyZWRSb3V0ZXMgPSBmaWx0ZXJlZFJvdXRlcy5maWx0ZXIoKHJvdXRlKSA9PlxuICAgICAgcm91dGUucmVjZWl2ZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjb250YWN0UG9pbnRRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRSb3V0ZXM7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlZFJvdXRlID0gKHJvdXRlczogRm9ybUFtUm91dGVbXSwgdXBkYXRlZFJvdXRlOiBGb3JtQW1Sb3V0ZSk6IEZvcm1BbVJvdXRlW10gPT4ge1xuICBjb25zdCBuZXdSb3V0ZXMgPSBbLi4ucm91dGVzXTtcbiAgY29uc3QgZWRpdEluZGV4ID0gbmV3Um91dGVzLmZpbmRJbmRleCgocm91dGUpID0+IHJvdXRlLmlkID09PSB1cGRhdGVkUm91dGUuaWQpO1xuXG4gIGlmIChlZGl0SW5kZXggPj0gMCkge1xuICAgIG5ld1JvdXRlc1tlZGl0SW5kZXhdID0ge1xuICAgICAgLi4ubmV3Um91dGVzW2VkaXRJbmRleF0sXG4gICAgICAuLi51cGRhdGVkUm91dGUsXG4gICAgfTtcbiAgfVxuICByZXR1cm4gbmV3Um91dGVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJvdXRlID0gKHJvdXRlczogRm9ybUFtUm91dGVbXSwgcm91dGVUb1JlbW92ZTogRm9ybUFtUm91dGUpOiBGb3JtQW1Sb3V0ZVtdID0+IHtcbiAgcmV0dXJuIHJvdXRlcy5maWx0ZXIoKHJvdXRlKSA9PiByb3V0ZS5pZCAhPT0gcm91dGVUb1JlbW92ZS5pZCk7XG59O1xuXG5leHBvcnQgY29uc3QgQW1Sb3V0ZXNUYWJsZTogRkM8QW1Sb3V0ZXNUYWJsZVByb3BzPiA9ICh7XG4gIGlzQWRkTW9kZSxcbiAgb25DYW5jZWxBZGQsXG4gIG9uQ2hhbmdlLFxuICByZWNlaXZlcnMsXG4gIHJvdXRlcyxcbiAgZmlsdGVycyxcbiAgcmVhZE9ubHkgPSBmYWxzZSxcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbn0pID0+IHtcbiAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93RGVsZXRlTW9kYWwsIHNldFNob3dEZWxldGVNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtleHBhbmRlZElkLCBzZXRFeHBhbmRlZElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bWJlcj4oKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gIGNvbnN0IGNhbkVkaXRSb3V0ZXMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMudXBkYXRlKTtcbiAgY29uc3QgY2FuRGVsZXRlUm91dGVzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zLmRlbGV0ZSk7XG5cbiAgY29uc3Qgc2hvd0FjdGlvbnMgPSAhcmVhZE9ubHkgJiYgKGNhbkVkaXRSb3V0ZXMgfHwgY2FuRGVsZXRlUm91dGVzKTtcblxuICBjb25zdCBleHBhbmRJdGVtID0gdXNlQ2FsbGJhY2soKGl0ZW06IFJvdXRlVGFibGVJdGVtUHJvcHMpID0+IHNldEV4cGFuZGVkSWQoaXRlbS5pZCksIFtdKTtcbiAgY29uc3QgY29sbGFwc2VJdGVtID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0RXhwYW5kZWRJZCh1bmRlZmluZWQpLCBbXSk7XG5cbiAgY29uc3QgY29sczogUm91dGVUYWJsZUNvbHVtblByb3BzW10gPSBbXG4gICAge1xuICAgICAgaWQ6ICdtYXRjaGluZ0NyaXRlcmlhJyxcbiAgICAgIGxhYmVsOiAnTWF0Y2hpbmcgbGFiZWxzJyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICAgIHJlbmRlckNlbGw6IChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLmRhdGEub2JqZWN0X21hdGNoZXJzLmxlbmd0aCA/IChcbiAgICAgICAgICA8TWF0Y2hlcnMgbWF0Y2hlcnM9e2l0ZW0uZGF0YS5vYmplY3RfbWF0Y2hlcnMubWFwKG1hdGNoZXJGaWVsZFRvTWF0Y2hlcil9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4+TWF0Y2hlcyBhbGwgYWxlcnQgaW5zdGFuY2VzPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHNpemU6IDEwLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdncm91cEJ5JyxcbiAgICAgIGxhYmVsOiAnR3JvdXAgYnknLFxuICAgICAgcmVuZGVyQ2VsbDogKGl0ZW0pID0+IGl0ZW0uZGF0YS5ncm91cEJ5LmpvaW4oJywgJykgfHwgJy0nLFxuICAgICAgc2l6ZTogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmVjZWl2ZXJDaGFubmVsJyxcbiAgICAgIGxhYmVsOiAnQ29udGFjdCBwb2ludCcsXG4gICAgICByZW5kZXJDZWxsOiAoaXRlbSkgPT4gaXRlbS5kYXRhLnJlY2VpdmVyIHx8ICctJyxcbiAgICAgIHNpemU6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ211dGVUaW1pbmdzJyxcbiAgICAgIGxhYmVsOiAnTXV0ZSB0aW1pbmdzJyxcbiAgICAgIHJlbmRlckNlbGw6IChpdGVtKSA9PiBpdGVtLmRhdGEubXV0ZVRpbWVJbnRlcnZhbHMuam9pbignLCAnKSB8fCAnLScsXG4gICAgICBzaXplOiA1LFxuICAgIH0sXG4gICAgLi4uKCFzaG93QWN0aW9uc1xuICAgICAgPyBbXVxuICAgICAgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdhY3Rpb25zJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQWN0aW9ucycsXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgICAgICByZW5kZXJDZWxsOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5yZW5kZXJFeHBhbmRlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGV4cGFuZFdpdGhDdXN0b21Db250ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGFuZEl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgc2V0RWRpdE1vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFZGl0IHJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtleHBhbmRXaXRoQ3VzdG9tQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIHJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e3Nob3dEZWxldGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGUgbm90aWZpY2F0aW9uIHBvbGljeVwiXG4gICAgICAgICAgICAgICAgICAgIGJvZHk9XCJEZWxldGluZyB0aGlzIG5vdGlmaWNhdGlvbiBwb2xpY3kgd2lsbCBwZXJtYW5lbnRseSByZW1vdmUgaXQuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwb2xpY3k/XCJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ9XCJZZXMsIGRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JvdXRlcyA9IGRlbGV0ZVJvdXRlKHJvdXRlcywgaXRlbS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShuZXdSb3V0ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dEZWxldGVNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpemU6ICcxMDBweCcsXG4gICAgICAgICAgfSBhcyBSb3V0ZVRhYmxlQ29sdW1uUHJvcHMsXG4gICAgICAgIF0pLFxuICBdO1xuXG4gIGNvbnN0IGZpbHRlcmVkUm91dGVzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZXRGaWx0ZXJlZFJvdXRlcyhyb3V0ZXMsIGZpbHRlcnM/LnF1ZXJ5U3RyaW5nLCBmaWx0ZXJzPy5jb250YWN0UG9pbnQpLFxuICAgIFtyb3V0ZXMsIGZpbHRlcnNdXG4gICk7XG5cbiAgY29uc3QgZHluYW1pY1RhYmxlUm91dGVzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBwcmVwYXJlSXRlbXMoaXNBZGRNb2RlID8gcm91dGVzIDogZmlsdGVyZWRSb3V0ZXMpLFxuICAgIFtpc0FkZE1vZGUsIHJvdXRlcywgZmlsdGVyZWRSb3V0ZXNdXG4gICk7XG5cbiAgLy8gZXhwYW5kIHRoZSBsYXN0IGl0ZW0gd2hlbiBhZGRpbmcgb3IgcmVzZXQgd2hlbiB0aGUgbGVuZ3RoIGNoYW5nZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNBZGRNb2RlICYmIGR5bmFtaWNUYWJsZVJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIHNldEV4cGFuZGVkSWQoZHluYW1pY1RhYmxlUm91dGVzW2R5bmFtaWNUYWJsZVJvdXRlcy5sZW5ndGggLSAxXS5pZCk7XG4gICAgfVxuICAgIGlmICghaXNBZGRNb2RlICYmIGR5bmFtaWNUYWJsZVJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIHNldEV4cGFuZGVkSWQodW5kZWZpbmVkKTtcbiAgICB9XG4gIH0sIFtpc0FkZE1vZGUsIGR5bmFtaWNUYWJsZVJvdXRlc10pO1xuXG4gIGlmIChyb3V0ZXMubGVuZ3RoID4gMCAmJiBmaWx0ZXJlZFJvdXRlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVtcHR5QXJlYT5cbiAgICAgICAgPHA+Tm8gcG9saWNpZXMgZm91bmQ8L3A+XG4gICAgICA8L0VtcHR5QXJlYT5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RHluYW1pY1RhYmxlXG4gICAgICBjb2xzPXtjb2xzfVxuICAgICAgaXNFeHBhbmRhYmxlPXt0cnVlfVxuICAgICAgaXRlbXM9e2R5bmFtaWNUYWJsZVJvdXRlc31cbiAgICAgIHRlc3RJZEdlbmVyYXRvcj17KCkgPT4gJ2FtLXJvdXRlcy1yb3cnfVxuICAgICAgb25Db2xsYXBzZT17Y29sbGFwc2VJdGVtfVxuICAgICAgb25FeHBhbmQ9e2V4cGFuZEl0ZW19XG4gICAgICBpc0V4cGFuZGVkPXsoaXRlbSkgPT4gZXhwYW5kZWRJZCA9PT0gaXRlbS5pZH1cbiAgICAgIHJlbmRlckV4cGFuZGVkQ29udGVudD17KGl0ZW06IFJvdXRlVGFibGVJdGVtUHJvcHMpID0+XG4gICAgICAgIGlzQWRkTW9kZSB8fCBlZGl0TW9kZSA/IChcbiAgICAgICAgICA8QW1Sb3V0ZXNFeHBhbmRlZEZvcm1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc0FkZE1vZGUpIHtcbiAgICAgICAgICAgICAgICBvbkNhbmNlbEFkZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblNhdmU9eyhkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1JvdXRlcyA9IHVwZGF0ZWRSb3V0ZShyb3V0ZXMsIGRhdGEpO1xuXG4gICAgICAgICAgICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgb25DaGFuZ2UobmV3Um91dGVzKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgIHJvdXRlcz17aXRlbS5kYXRhfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEFtUm91dGVzRXhwYW5kZWRSZWFkXG4gICAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3Um91dGVzID0gdXBkYXRlZFJvdXRlKHJvdXRlcywgZGF0YSk7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld1JvdXRlcyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVjZWl2ZXJzPXtyZWNlaXZlcnN9XG4gICAgICAgICAgICByb3V0ZXM9e2l0ZW0uZGF0YX1cbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgSW5wdXQsIExhYmVsLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IHVzZVVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVSTFNlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyBBbVJvdXRlUmVjZWl2ZXIsIEZvcm1BbVJvdXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgZW1wdHlBcnJheUZpZWxkTWF0Y2hlciwgZW1wdHlSb3V0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Ftcm91dGVzJztcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvblBvbGljaWVzRmlsdGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgTWF0Y2hlckZpbHRlciB9IGZyb20gJy4uL2FsZXJ0LWdyb3Vwcy9NYXRjaGVyRmlsdGVyJztcbmltcG9ydCB7IEVtcHR5QXJlYSB9IGZyb20gJy4uL0VtcHR5QXJlYSc7XG5pbXBvcnQgeyBFbXB0eUFyZWFXaXRoQ1RBIH0gZnJvbSAnLi4vRW1wdHlBcmVhV2l0aENUQSc7XG5pbXBvcnQgeyBBbVJvdXRlc1RhYmxlIH0gZnJvbSAnLi9BbVJvdXRlc1RhYmxlJztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXV0aG9yaXplJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1TcGVjaWZpY1JvdXRpbmdQcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgb25DaGFuZ2U6IChyb3V0ZXM6IEZvcm1BbVJvdXRlKSA9PiB2b2lkO1xuICBvblJvb3RSb3V0ZUVkaXQ6ICgpID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGU7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEZpbHRlcnMge1xuICBxdWVyeVN0cmluZz86IHN0cmluZztcbiAgY29udGFjdFBvaW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQW1TcGVjaWZpY1JvdXRpbmc6IEZDPEFtU3BlY2lmaWNSb3V0aW5nUHJvcHM+ID0gKHtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbiAgb25DaGFuZ2UsXG4gIG9uUm9vdFJvdXRlRWRpdCxcbiAgcmVjZWl2ZXJzLFxuICByb3V0ZXMsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IFthY3R1YWxSb3V0ZXMsIHNldEFjdHVhbFJvdXRlc10gPSB1c2VTdGF0ZShbLi4ucm91dGVzLnJvdXRlc10pO1xuICBjb25zdCBbaXNBZGRNb2RlLCBzZXRJc0FkZE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3QgY2FuQ3JlYXRlTm90aWZpY2F0aW9ucyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihwZXJtaXNzaW9ucy5jcmVhdGUpO1xuXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VVUkxTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgeyBxdWVyeVN0cmluZywgY29udGFjdFBvaW50IH0gPSBnZXROb3RpZmljYXRpb25Qb2xpY2llc0ZpbHRlcnMoc2VhcmNoUGFyYW1zKTtcblxuICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZTxGaWx0ZXJzPih7IHF1ZXJ5U3RyaW5nLCBjb250YWN0UG9pbnQgfSk7XG5cbiAgdXNlRGVib3VuY2UoXG4gICAgKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUGFyYW1zKHsgcXVlcnlTdHJpbmc6IGZpbHRlcnMucXVlcnlTdHJpbmcsIGNvbnRhY3RQb2ludDogZmlsdGVycy5jb250YWN0UG9pbnQgfSk7XG4gICAgfSxcbiAgICA0MDAsXG4gICAgW2ZpbHRlcnNdXG4gICk7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGNsZWFyRmlsdGVycyA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJzKHsgcXVlcnlTdHJpbmc6IHVuZGVmaW5lZCwgY29udGFjdFBvaW50OiB1bmRlZmluZWQgfSk7XG4gICAgc2V0U2VhcmNoUGFyYW1zKHsgcXVlcnlTdHJpbmc6IHVuZGVmaW5lZCwgY29udGFjdFBvaW50OiB1bmRlZmluZWQgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTmV3Um91dGUgPSAoKSA9PiB7XG4gICAgY2xlYXJGaWx0ZXJzKCk7XG4gICAgc2V0SXNBZGRNb2RlKHRydWUpO1xuICAgIHNldEFjdHVhbFJvdXRlcygoKSA9PiBbXG4gICAgICAuLi5yb3V0ZXMucm91dGVzLFxuICAgICAge1xuICAgICAgICAuLi5lbXB0eVJvdXRlLFxuICAgICAgICBtYXRjaGVyczogW2VtcHR5QXJyYXlGaWVsZE1hdGNoZXJdLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBvbkNhbmNlbEFkZCA9ICgpID0+IHtcbiAgICBzZXRJc0FkZE1vZGUoZmFsc2UpO1xuICAgIHNldEFjdHVhbFJvdXRlcyhbLi4ucm91dGVzLnJvdXRlc10pO1xuICB9O1xuXG4gIGNvbnN0IG9uVGFibGVSb3V0ZUNoYW5nZSA9IChuZXdSb3V0ZXM6IEZvcm1BbVJvdXRlW10pOiB2b2lkID0+IHtcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5yb3V0ZXMsXG4gICAgICByb3V0ZXM6IG5ld1JvdXRlcyxcbiAgICB9KTtcblxuICAgIGlmIChpc0FkZE1vZGUpIHtcbiAgICAgIHNldElzQWRkTW9kZShmYWxzZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoNT5TcGVjaWZpYyByb3V0aW5nPC9oNT5cbiAgICAgIDxwPlNlbmQgc3BlY2lmaWMgYWxlcnRzIHRvIGNob3NlbiBjb250YWN0IHBvaW50cywgYmFzZWQgb24gbWF0Y2hpbmcgY3JpdGVyaWE8L3A+XG4gICAgICB7IXJvdXRlcy5yZWNlaXZlciA/IChcbiAgICAgICAgcmVhZE9ubHkgPyAoXG4gICAgICAgICAgPEVtcHR5QXJlYT5cbiAgICAgICAgICAgIDxwPlRoZXJlIGlzIG5vIGRlZmF1bHQgY29udGFjdCBwb2ludCBjb25maWd1cmVkIGZvciB0aGUgcm9vdCByb3V0ZS48L3A+XG4gICAgICAgICAgPC9FbXB0eUFyZWE+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEVtcHR5QXJlYVdpdGhDVEFcbiAgICAgICAgICAgIGJ1dHRvbkljb249XCJyb2NrZXRcIlxuICAgICAgICAgICAgYnV0dG9uTGFiZWw9XCJTZXQgYSBkZWZhdWx0IGNvbnRhY3QgcG9pbnRcIlxuICAgICAgICAgICAgb25CdXR0b25DbGljaz17b25Sb290Um91dGVFZGl0fVxuICAgICAgICAgICAgdGV4dD1cIllvdSBoYXZlbid0IHNldCBhIGRlZmF1bHQgY29udGFjdCBwb2ludCBmb3IgdGhlIHJvb3Qgcm91dGUgeWV0LlwiXG4gICAgICAgICAgICBzaG93QnV0dG9uPXtjYW5DcmVhdGVOb3RpZmljYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgICkgOiBhY3R1YWxSb3V0ZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyFpc0FkZE1vZGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPE1hdGNoZXJGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXsoZmlsdGVyKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXJzKChjdXJyZW50RmlsdGVycykgPT4gKHsgLi4uY3VycmVudEZpbHRlcnMsIHF1ZXJ5U3RyaW5nOiBmaWx0ZXIgfSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZz17ZmlsdGVycy5xdWVyeVN0cmluZyA/PyAnJ31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklucHV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJJbnB1dH0+XG4gICAgICAgICAgICAgICAgICA8TGFiZWw+U2VhcmNoIGJ5IGNvbnRhY3QgcG9pbnQ8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0IH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVycygoY3VycmVudEZpbHRlcnMpID0+ICh7IC4uLmN1cnJlbnRGaWx0ZXJzLCBjb250YWN0UG9pbnQ6IGN1cnJlbnRUYXJnZXQudmFsdWUgfSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlcnMuY29udGFjdFBvaW50ID8/ICcnfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBjb250YWN0IHBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzZWFyY2gtcXVlcnktaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg9ezxJY29uIG5hbWU9eydzZWFyY2gnfSAvPn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyhxdWVyeVN0cmluZyB8fCBjb250YWN0UG9pbnQpICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGljb249XCJ0aW1lc1wiIG9uQ2xpY2s9e2NsZWFyRmlsdGVyc30gY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJGaWx0ZXJCdG59PlxuICAgICAgICAgICAgICAgICAgICBDbGVhciBmaWx0ZXJzXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshaXNBZGRNb2RlICYmICFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLmNyZWF0ZV19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTWF0Y2hlckJ0blJvd30+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZE1hdGNoZXJCdG59IGljb249XCJwbHVzXCIgb25DbGljaz17YWRkTmV3Um91dGV9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgTmV3IHBvbGljeVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QW1Sb3V0ZXNUYWJsZVxuICAgICAgICAgICAgaXNBZGRNb2RlPXtpc0FkZE1vZGV9XG4gICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICBvbkNhbmNlbEFkZD17b25DYW5jZWxBZGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25UYWJsZVJvdXRlQ2hhbmdlfVxuICAgICAgICAgICAgcmVjZWl2ZXJzPXtyZWNlaXZlcnN9XG4gICAgICAgICAgICByb3V0ZXM9e2FjdHVhbFJvdXRlc31cbiAgICAgICAgICAgIGZpbHRlcnM9e3sgcXVlcnlTdHJpbmcsIGNvbnRhY3RQb2ludCB9fVxuICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiByZWFkT25seSA/IChcbiAgICAgICAgPEVtcHR5QXJlYT5cbiAgICAgICAgICA8cD5UaGVyZSBhcmUgbm8gc3BlY2lmaWMgcG9saWNpZXMgY29uZmlndXJlZC48L3A+XG4gICAgICAgIDwvRW1wdHlBcmVhPlxuICAgICAgKSA6IChcbiAgICAgICAgPEVtcHR5QXJlYVdpdGhDVEFcbiAgICAgICAgICBidXR0b25JY29uPVwicGx1c1wiXG4gICAgICAgICAgYnV0dG9uTGFiZWw9XCJOZXcgc3BlY2lmaWMgcG9saWN5XCJcbiAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXthZGROZXdSb3V0ZX1cbiAgICAgICAgICB0ZXh0PVwiWW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgc3BlY2lmaWMgcG9saWNpZXMgeWV0LlwiXG4gICAgICAgICAgc2hvd0J1dHRvbj17Y2FuQ3JlYXRlTm90aWZpY2F0aW9uc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIGAsXG4gICAgc2VhcmNoQ29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLnN0cm9uZ307XG4gICAgYCxcbiAgICBjbGVhckZpbHRlckJ0bjogY3NzYFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGZpbHRlcklucHV0OiBjc3NgXG4gICAgICB3aWR0aDogMzQwcHg7XG4gICAgICAmICsgJiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgYWRkTWF0Y2hlckJ0blJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX0gMDtcbiAgICBgLFxuICAgIGFkZE1hdGNoZXJCdG46IGNzc2BcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uQnV0dG9uLCBMaW5rQnV0dG9uLCBMaW5rLCB1c2VTdHlsZXMyLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcsIE11dGVUaW1lSW50ZXJ2YWwsIFRpbWVJbnRlcnZhbCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBkZWxldGVNdXRlVGltaW5nQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBBc3luY1JlcXVlc3RTdGF0ZSwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgnO1xuaW1wb3J0IHsgRHluYW1pY1RhYmxlLCBEeW5hbWljVGFibGVJdGVtUHJvcHMsIER5bmFtaWNUYWJsZUNvbHVtblByb3BzIH0gZnJvbSAnLi4vRHluYW1pY1RhYmxlJztcbmltcG9ydCB7XG4gIGdldFRpbWVTdHJpbmcsXG4gIGdldFdlZWtkYXlTdHJpbmcsXG4gIGdldERheXNPZk1vbnRoU3RyaW5nLFxuICBnZXRNb250aHNTdHJpbmcsXG4gIGdldFllYXJzU3RyaW5nLFxufSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgRW1wdHlBcmVhV2l0aENUQSB9IGZyb20gJy4uL0VtcHR5QXJlYVdpdGhDVEEnO1xuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BdXRob3JpemUnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xuICBtdXRlVGltaW5nTmFtZXM/OiBzdHJpbmdbXTtcbiAgaGlkZUFjdGlvbnM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTXV0ZVRpbWluZ3NUYWJsZTogRkM8UHJvcHM+ID0gKHsgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgbXV0ZVRpbWluZ05hbWVzLCBoaWRlQWN0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3QgYW1Db25maWdzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbUNvbmZpZ3MpO1xuICBjb25zdCBbbXV0ZVRpbWluZ05hbWUsIHNldE11dGVUaW1pbmdOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCB7IHJlc3VsdCB9OiBBc3luY1JlcXVlc3RTdGF0ZTxBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc+ID1cbiAgICAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAmJiBhbUNvbmZpZ3NbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0pIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcblxuICBjb25zdCBpdGVtcyA9IHVzZU1lbW8oKCk6IEFycmF5PER5bmFtaWNUYWJsZUl0ZW1Qcm9wczxNdXRlVGltZUludGVydmFsPj4gPT4ge1xuICAgIGNvbnN0IG11dGVUaW1pbmdzID0gcmVzdWx0Py5hbGVydG1hbmFnZXJfY29uZmlnPy5tdXRlX3RpbWVfaW50ZXJ2YWxzID8/IFtdO1xuICAgIHJldHVybiBtdXRlVGltaW5nc1xuICAgICAgLmZpbHRlcigoeyBuYW1lIH0pID0+IChtdXRlVGltaW5nTmFtZXMgPyBtdXRlVGltaW5nTmFtZXMuaW5jbHVkZXMobmFtZSkgOiB0cnVlKSlcbiAgICAgIC5tYXAoKG11dGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogbXV0ZS5uYW1lLFxuICAgICAgICAgIGRhdGE6IG11dGUsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgfSwgW3Jlc3VsdD8uYWxlcnRtYW5hZ2VyX2NvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscywgbXV0ZVRpbWluZ05hbWVzXSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IHVzZUNvbHVtbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgaGlkZUFjdGlvbnMsIHNldE11dGVUaW1pbmdOYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHshaGlkZUFjdGlvbnMgJiYgPGg1Pk11dGUgdGltaW5nczwvaDU+fVxuICAgICAgeyFoaWRlQWN0aW9ucyAmJiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIE11dGUgdGltaW5ncyBhcmUgYSBuYW1lZCBpbnRlcnZhbCBvZiB0aW1lIHRoYXQgbWF5IGJlIHJlZmVyZW5jZWQgaW4gdGhlIG5vdGlmaWNhdGlvbiBwb2xpY3kgdHJlZSB0byBtdXRlXG4gICAgICAgICAgcGFydGljdWxhciBub3RpZmljYXRpb24gcG9saWNpZXMgZm9yIHNwZWNpZmljIHRpbWVzIG9mIHRoZSBkYXkuXG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgICB7IWhpZGVBY3Rpb25zICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy5jcmVhdGVdfT5cbiAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTXV0ZUJ1dHRvbn1cbiAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoJ2FsZXJ0aW5nL3JvdXRlcy9tdXRlLXRpbWluZy9uZXcnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXcgbXV0ZSB0aW1pbmdcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgKX1cbiAgICAgIHtpdGVtcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8RHluYW1pY1RhYmxlIGl0ZW1zPXtpdGVtc30gY29scz17Y29sdW1uc30gLz5cbiAgICAgICkgOiAhaGlkZUFjdGlvbnMgPyAoXG4gICAgICAgIDxFbXB0eUFyZWFXaXRoQ1RBXG4gICAgICAgICAgdGV4dD1cIllvdSBoYXZlbid0IGNyZWF0ZWQgYW55IG11dGUgdGltaW5ncyB5ZXRcIlxuICAgICAgICAgIGJ1dHRvbkxhYmVsPVwiQWRkIG11dGUgdGltaW5nXCJcbiAgICAgICAgICBidXR0b25JY29uPVwicGx1c1wiXG4gICAgICAgICAgYnV0dG9uU2l6ZT1cImxnXCJcbiAgICAgICAgICBocmVmPXttYWtlQU1MaW5rKCdhbGVydGluZy9yb3V0ZXMvbXV0ZS10aW1pbmcvbmV3JywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgc2hvd0J1dHRvbj17Y29udGV4dFNydi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zLmNyZWF0ZSl9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8cD5ObyBtdXRlIHRpbWluZ3MgY29uZmlndXJlZDwvcD5cbiAgICAgICl9XG4gICAgICB7IWhpZGVBY3Rpb25zICYmIChcbiAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgIGlzT3Blbj17ISFtdXRlVGltaW5nTmFtZX1cbiAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBtdXRlIHRpbWluZ1wiXG4gICAgICAgICAgYm9keT17YEFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUgXCIke211dGVUaW1pbmdOYW1lfVwiYH1cbiAgICAgICAgICBjb25maXJtVGV4dD1cIkRlbGV0ZVwiXG4gICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkaXNwYXRjaChkZWxldGVNdXRlVGltaW5nQWN0aW9uKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIG11dGVUaW1pbmdOYW1lKSl9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRNdXRlVGltaW5nTmFtZSgnJyl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gdXNlQ29sdW1ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcsIGhpZGVBY3Rpb25zID0gZmFsc2UsIHNldE11dGVUaW1pbmdOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKSB7XG4gIGNvbnN0IHBlcm1pc3Npb25zID0gZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuXG4gIGNvbnN0IHVzZXJIYXNFZGl0UGVybWlzc2lvbnMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMudXBkYXRlKTtcbiAgY29uc3QgdXNlckhhc0RlbGV0ZVBlcm1pc3Npb25zID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zLmRlbGV0ZSk7XG4gIGNvbnN0IHNob3dBY3Rpb25zID0gIWhpZGVBY3Rpb25zICYmICh1c2VySGFzRWRpdFBlcm1pc3Npb25zIHx8IHVzZXJIYXNEZWxldGVQZXJtaXNzaW9ucyk7XG4gIHJldHVybiB1c2VNZW1vKCgpOiBBcnJheTxEeW5hbWljVGFibGVDb2x1bW5Qcm9wczxNdXRlVGltZUludGVydmFsPj4gPT4ge1xuICAgIGNvbnN0IGNvbHVtbnM6IEFycmF5PER5bmFtaWNUYWJsZUNvbHVtblByb3BzPE11dGVUaW1lSW50ZXJ2YWw+PiA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICduYW1lJyxcbiAgICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgICAgcmVuZGVyQ2VsbDogZnVuY3Rpb24gcmVuZGVyTmFtZSh7IGRhdGEgfSkge1xuICAgICAgICAgIHJldHVybiBkYXRhLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6ICcyNTBweCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3RpbWVSYW5nZScsXG4gICAgICAgIGxhYmVsOiAnVGltZSByYW5nZScsXG4gICAgICAgIHJlbmRlckNlbGw6ICh7IGRhdGEgfSkgPT4gcmVuZGVyVGltZUludGVydmFscyhkYXRhLnRpbWVfaW50ZXJ2YWxzKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBpZiAoc2hvd0FjdGlvbnMpIHtcbiAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgIGlkOiAnYWN0aW9ucycsXG4gICAgICAgIGxhYmVsOiAnQWN0aW9ucycsXG4gICAgICAgIHJlbmRlckNlbGw6IGZ1bmN0aW9uIHJlbmRlckFjdGlvbnMoeyBkYXRhIH0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMudXBkYXRlXX0+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoYC9hbGVydGluZy9yb3V0ZXMvbXV0ZS10aW1pbmcvZWRpdGAsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0ZU5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG5hbWU9XCJlZGl0XCIgdGl0bGU9XCJFZGl0IG11dGUgdGltaW5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy5kZWxldGVdfT5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgbmFtZT17J3RyYXNoLWFsdCd9XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBtdXRlIHRpbWluZ1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNdXRlVGltaW5nTmFtZShkYXRhLm5hbWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogJzEwMHB4JyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfSwgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIHNldE11dGVUaW1pbmdOYW1lLCBzaG93QWN0aW9ucywgcGVybWlzc2lvbnNdKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZUludGVydmFscyh0aW1lSW50ZXJ2YWxzOiBUaW1lSW50ZXJ2YWxbXSkge1xuICByZXR1cm4gdGltZUludGVydmFscy5tYXAoKGludGVydmFsLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgdGltZXMsIHdlZWtkYXlzLCBkYXlzX29mX21vbnRoLCBtb250aHMsIHllYXJzIH0gPSBpbnRlcnZhbDtcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gZ2V0VGltZVN0cmluZyh0aW1lcyk7XG4gICAgY29uc3Qgd2Vla2RheVN0cmluZyA9IGdldFdlZWtkYXlTdHJpbmcod2Vla2RheXMpO1xuICAgIGNvbnN0IGRheXNTdHJpbmcgPSBnZXREYXlzT2ZNb250aFN0cmluZyhkYXlzX29mX21vbnRoKTtcbiAgICBjb25zdCBtb250aHNTdHJpbmcgPSBnZXRNb250aHNTdHJpbmcobW9udGhzKTtcbiAgICBjb25zdCB5ZWFyc1N0cmluZyA9IGdldFllYXJzU3RyaW5nKHllYXJzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtKU09OLnN0cmluZ2lmeShpbnRlcnZhbCkgKyBpbmRleH0+XG4gICAgICAgIHtgJHt0aW1lU3RyaW5nfSAke3dlZWtkYXlTdHJpbmd9YH1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtbZGF5c1N0cmluZywgbW9udGhzU3RyaW5nLCB5ZWFyc1N0cmluZ10uam9pbignIHwgJyl9XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9KTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgYCxcbiAgYWRkTXV0ZUJ1dHRvbjogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBnZXRGb3JtU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcblxuICAgICAgJiA+ICogKyAqIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgICB9XG4gICAgYCxcbiAgICBpbnB1dDogY3NzYFxuICAgICAgZmxleDogMTtcbiAgICBgLFxuICAgIHRpbWluZ0NvbnRhaW5lcjogY3NzYFxuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLnNwYWNpbmcoMzMpfTtcbiAgICBgLFxuICAgIHNtYWxsSW5wdXQ6IGNzc2BcbiAgICAgIHdpZHRoOiAke3RoZW1lLnNwYWNpbmcoNi41KX07XG4gICAgYCxcbiAgICBsaW5rVGV4dDogY3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgYCxcbiAgICBjb2xsYXBzZTogY3NzYFxuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IGdldEdyaWRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBmb250LXN0eWxlOiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFNpemV9O1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAke3RoZW1lLnNwYWNpbmcoMTUuNSl9IGF1dG87XG5cbiAgICAgICR7dGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKX0ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICB9XG4gICAgYCxcbiAgICB0aXRsZUNlbGw6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgIGAsXG4gICAgdmFsdWVDZWxsOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBUYWdMaXN0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTWF0Y2hlciB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IG1hdGNoZXJUb09wZXJhdG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcblxudHlwZSBNYXRjaGVyc1Byb3BzID0geyBtYXRjaGVyczogTWF0Y2hlcltdIH07XG5cbmV4cG9ydCBjb25zdCBNYXRjaGVyczogRkM8TWF0Y2hlcnNQcm9wcz4gPSAoeyBtYXRjaGVycyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRhZ0xpc3RcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFnc31cbiAgICAgICAgdGFncz17bWF0Y2hlcnMubWFwKChtYXRjaGVyKSA9PiBgJHttYXRjaGVyLm5hbWV9JHttYXRjaGVyVG9PcGVyYXRvcihtYXRjaGVyKX0ke21hdGNoZXIudmFsdWV9YCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgdGFnczogY3NzYFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnYXBwL2NvcmUvc3RvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzLCBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmZ1bmN0aW9uIGlzQWxlcnRNYW5hZ2VyU291cmNlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfHxcbiAgICAhIWdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzKCkuZmluZCgoZHMpID0+IGRzLm5hbWUgPT09IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpXG4gICk7XG59XG5cbi8qIHRoaXMgd2lsbCByZXR1cm4gYW0gbmFtZSBlaXRoZXIgZnJvbSBxdWVyeSBwYXJhbXMgb3IgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIGEgZGVmYXVsdCAoZ3JhZmFuYSkuXG4gKlxuICogZmFsbGJhY2tVcmwgLSBpZiBwcm92aWRlZCwgd2lsbCByZWRpcmVjdCB0byB0aGlzIHVybCBpZiBhbGVydG1hbmFnZXIgcHJvdmlkZWQgaW4gcXVlcnkgbm8gbG9uZ2VyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKCk6IFtzdHJpbmcgfCB1bmRlZmluZWQsIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHZvaWRdIHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zLCB1cGRhdGVRdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghaXNBbGVydE1hbmFnZXJTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpIHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogbnVsbCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLnNldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdXBkYXRlUXVlcnlQYXJhbXNdXG4gICk7XG5cbiAgY29uc3QgcXVlcnlTb3VyY2UgPSBxdWVyeVBhcmFtc1tBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldO1xuXG4gIGlmIChxdWVyeVNvdXJjZSAmJiB0eXBlb2YgcXVlcnlTb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlzQWxlcnRNYW5hZ2VyU291cmNlKHF1ZXJ5U291cmNlKSkge1xuICAgICAgcmV0dXJuIFtxdWVyeVNvdXJjZSwgdXBkYXRlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uIGV4aXN0aW5nIGFsZXJ0bWFuYWdlclxuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG4gICAgfVxuICB9XG4gIGNvbnN0IHN0b3JlU291cmNlID0gc3RvcmUuZ2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgaWYgKHN0b3JlU291cmNlICYmIHR5cGVvZiBzdG9yZVNvdXJjZSA9PT0gJ3N0cmluZycgJiYgaXNBbGVydE1hbmFnZXJTb3VyY2Uoc3RvcmVTb3VyY2UpKSB7XG4gICAgdXBkYXRlKHN0b3JlU291cmNlKTtcbiAgICByZXR1cm4gW3N0b3JlU291cmNlLCB1cGRhdGVdO1xuICB9XG5cbiAgcmV0dXJuIFtHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FLCB1cGRhdGVdO1xufVxuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydG1hbmFnZXJDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdGltZUludGVydmFsVG9TdHJpbmcgfSBmcm9tICcuLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9IGZyb20gJy4vdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTXV0ZVRpbWluZ09wdGlvbnMoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+IHtcbiAgY29uc3QgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdID0gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSgpO1xuICBjb25zdCBhbUNvbmZpZ3MgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFtQ29uZmlncyk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0IH0gPSAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAmJiBhbUNvbmZpZ3NbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0pIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcbiAgICBjb25zdCBjb25maWc6IEFsZXJ0bWFuYWdlckNvbmZpZyA9IHJlc3VsdD8uYWxlcnRtYW5hZ2VyX2NvbmZpZyA/PyB7fTtcblxuICAgIGNvbnN0IG11dGVUaW1pbmdzT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID1cbiAgICAgIGNvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscz8ubWFwKCh2YWx1ZSkgPT4gKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLm5hbWUsXG4gICAgICAgIGxhYmVsOiB2YWx1ZS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdmFsdWUudGltZV9pbnRlcnZhbHMubWFwKChpbnRlcnZhbCkgPT4gdGltZUludGVydmFsVG9TdHJpbmcoaW50ZXJ2YWwpKS5qb2luKCcsIEFORCAnKSxcbiAgICAgIH0pKSA/PyBbXTtcblxuICAgIHJldHVybiBtdXRlVGltaW5nc09wdGlvbnM7XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBhbUNvbmZpZ3NdKTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVVJMU2VhcmNoUGFyYW1zKCk6IFtcbiAgVVJMU2VhcmNoUGFyYW1zLFxuICAoc2VhcmNoVmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZD4sIHJlcGxhY2U/OiBib29sZWFuKSA9PiB2b2lkXG5dIHtcbiAgY29uc3QgeyBzZWFyY2ggfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdXNlTWVtbygoKSA9PiBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCksIFtzZWFyY2hdKTtcblxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjaygoc2VhcmNoVmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZD4sIHJlcGxhY2U/OiBib29sZWFuKSA9PiB7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoc2VhcmNoVmFsdWVzLCByZXBsYWNlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbcXVlcnlQYXJhbXMsIHVwZGF0ZV07XG59XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFZhbGlkYXRlIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IE1hdGNoZXJPcGVyYXRvciwgUm91dGUgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgeyBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uL3R5cGVzL2Ftcm91dGVzJztcbmltcG9ydCB7IHBhcnNlSW50ZXJ2YWwsIHRpbWVPcHRpb25zIH0gZnJvbSAnLi90aW1lJztcbmltcG9ydCB7IGlzVW5kZWZpbmVkLCBvbWl0QnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTWF0Y2hlckZpZWxkVmFsdWUgfSBmcm9tICcuLi90eXBlcy9zaWxlbmNlLWZvcm0nO1xuaW1wb3J0IHsgbWF0Y2hlclRvTWF0Y2hlckZpZWxkLCBwYXJzZU1hdGNoZXIgfSBmcm9tICcuL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi9kYXRhc291cmNlJztcblxuY29uc3QgZGVmYXVsdFZhbHVlQW5kVHlwZTogW3N0cmluZywgc3RyaW5nXSA9IFsnJywgdGltZU9wdGlvbnNbMF0udmFsdWVdO1xuXG5jb25zdCBtYXRjaGVyc1RvQXJyYXlGaWVsZE1hdGNoZXJzID0gKFxuICBtYXRjaGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZCxcbiAgaXNSZWdleDogYm9vbGVhblxuKTogTWF0Y2hlckZpZWxkVmFsdWVbXSA9PlxuICBPYmplY3QuZW50cmllcyhtYXRjaGVycyA/PyB7fSkucmVkdWNlPE1hdGNoZXJGaWVsZFZhbHVlW10+KFxuICAgIChhY2MsIFtuYW1lLCB2YWx1ZV0pID0+IFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9wZXJhdG9yOiBpc1JlZ2V4ID8gTWF0Y2hlck9wZXJhdG9yLnJlZ2V4IDogTWF0Y2hlck9wZXJhdG9yLmVxdWFsLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtdIGFzIE1hdGNoZXJGaWVsZFZhbHVlW11cbiAgKTtcblxuY29uc3QgaW50ZXJ2YWxUb1ZhbHVlQW5kVHlwZSA9IChzdHJWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogW3N0cmluZywgc3RyaW5nXSA9PiB7XG4gIGlmICghc3RyVmFsdWUpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlQW5kVHlwZTtcbiAgfVxuXG4gIGNvbnN0IFt2YWx1ZSwgdmFsdWVUeXBlXSA9IHN0clZhbHVlID8gcGFyc2VJbnRlcnZhbChzdHJWYWx1ZSkgOiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xuXG4gIGNvbnN0IHRpbWVPcHRpb24gPSB0aW1lT3B0aW9ucy5maW5kKChvcHQpID0+IG9wdC52YWx1ZSA9PT0gdmFsdWVUeXBlKTtcblxuICBpZiAoIXZhbHVlIHx8ICF0aW1lT3B0aW9uKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZUFuZFR5cGU7XG4gIH1cblxuICByZXR1cm4gW1N0cmluZyh2YWx1ZSksIHRpbWVPcHRpb24udmFsdWVdO1xufTtcblxuY29uc3Qgc2VsZWN0YWJsZVZhbHVlVG9TdHJpbmcgPSAoc2VsZWN0YWJsZVZhbHVlOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPik6IHN0cmluZyA9PiBzZWxlY3RhYmxlVmFsdWUudmFsdWUhO1xuXG5jb25zdCBzZWxlY3RhYmxlVmFsdWVzVG9TdHJpbmdzID0gKGFycjogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+IHwgdW5kZWZpbmVkKTogc3RyaW5nW10gPT5cbiAgKGFyciA/PyBbXSkubWFwKHNlbGVjdGFibGVWYWx1ZVRvU3RyaW5nKTtcblxuZXhwb3J0IGNvbnN0IGVtcHR5QXJyYXlGaWVsZE1hdGNoZXI6IE1hdGNoZXJGaWVsZFZhbHVlID0ge1xuICBuYW1lOiAnJyxcbiAgdmFsdWU6ICcnLFxuICBvcGVyYXRvcjogTWF0Y2hlck9wZXJhdG9yLmVxdWFsLFxufTtcblxuZXhwb3J0IGNvbnN0IGVtcHR5Um91dGU6IEZvcm1BbVJvdXRlID0ge1xuICBpZDogJycsXG4gIGdyb3VwQnk6IFtdLFxuICBvYmplY3RfbWF0Y2hlcnM6IFtdLFxuICByb3V0ZXM6IFtdLFxuICBjb250aW51ZTogZmFsc2UsXG4gIHJlY2VpdmVyOiAnJyxcbiAgZ3JvdXBXYWl0VmFsdWU6ICcnLFxuICBncm91cFdhaXRWYWx1ZVR5cGU6IHRpbWVPcHRpb25zWzBdLnZhbHVlLFxuICBncm91cEludGVydmFsVmFsdWU6ICcnLFxuICBncm91cEludGVydmFsVmFsdWVUeXBlOiB0aW1lT3B0aW9uc1swXS52YWx1ZSxcbiAgcmVwZWF0SW50ZXJ2YWxWYWx1ZTogJycsXG4gIHJlcGVhdEludGVydmFsVmFsdWVUeXBlOiB0aW1lT3B0aW9uc1swXS52YWx1ZSxcbiAgbXV0ZVRpbWVJbnRlcnZhbHM6IFtdLFxufTtcblxuLy9yZXR1cm5zIHJvdXRlLCBhbmQgYSByZWNvcmQgbWFwcGluZyBpZCB0byBleGlzdGluZyByb3V0ZSByb3V0ZVxuZXhwb3J0IGNvbnN0IGFtUm91dGVUb0Zvcm1BbVJvdXRlID0gKHJvdXRlOiBSb3V0ZSB8IHVuZGVmaW5lZCk6IFtGb3JtQW1Sb3V0ZSwgUmVjb3JkPHN0cmluZywgUm91dGU+XSA9PiB7XG4gIGlmICghcm91dGUgfHwgT2JqZWN0LmtleXMocm91dGUpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbZW1wdHlSb3V0ZSwge31dO1xuICB9XG5cbiAgY29uc3QgW2dyb3VwV2FpdFZhbHVlLCBncm91cFdhaXRWYWx1ZVR5cGVdID0gaW50ZXJ2YWxUb1ZhbHVlQW5kVHlwZShyb3V0ZS5ncm91cF93YWl0KTtcbiAgY29uc3QgW2dyb3VwSW50ZXJ2YWxWYWx1ZSwgZ3JvdXBJbnRlcnZhbFZhbHVlVHlwZV0gPSBpbnRlcnZhbFRvVmFsdWVBbmRUeXBlKHJvdXRlLmdyb3VwX2ludGVydmFsKTtcbiAgY29uc3QgW3JlcGVhdEludGVydmFsVmFsdWUsIHJlcGVhdEludGVydmFsVmFsdWVUeXBlXSA9IGludGVydmFsVG9WYWx1ZUFuZFR5cGUocm91dGUucmVwZWF0X2ludGVydmFsKTtcblxuICBjb25zdCBpZCA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgY29uc3QgaWQycm91dGUgPSB7XG4gICAgW2lkXTogcm91dGUsXG4gIH07XG4gIGNvbnN0IGZvcm1Sb3V0ZXM6IEZvcm1BbVJvdXRlW10gPSBbXTtcbiAgcm91dGUucm91dGVzPy5mb3JFYWNoKChzdWJSb3V0ZSkgPT4ge1xuICAgIGNvbnN0IFtzdWJGb3JtUm91dGUsIHN1YklkMlJvdXRlXSA9IGFtUm91dGVUb0Zvcm1BbVJvdXRlKHN1YlJvdXRlKTtcbiAgICBmb3JtUm91dGVzLnB1c2goc3ViRm9ybVJvdXRlKTtcbiAgICBPYmplY3QuYXNzaWduKGlkMnJvdXRlLCBzdWJJZDJSb3V0ZSk7XG4gIH0pO1xuXG4gIC8vIEZyb250ZW5kIG1pZ3JhdGlvbiB0byB1c2Ugb2JqZWN0X21hdGNoZXJzIGluc3RlYWQgb2YgbWF0Y2hlcnNcbiAgY29uc3QgbWF0Y2hlcnMgPSByb3V0ZS5tYXRjaGVyc1xuICAgID8gcm91dGUubWF0Y2hlcnM/Lm1hcCgobWF0Y2hlcikgPT4gbWF0Y2hlclRvTWF0Y2hlckZpZWxkKHBhcnNlTWF0Y2hlcihtYXRjaGVyKSkpID8/IFtdXG4gICAgOiByb3V0ZS5vYmplY3RfbWF0Y2hlcnM/Lm1hcChcbiAgICAgICAgKG1hdGNoZXIpID0+ICh7IG5hbWU6IG1hdGNoZXJbMF0sIG9wZXJhdG9yOiBtYXRjaGVyWzFdLCB2YWx1ZTogbWF0Y2hlclsyXSB9IGFzIE1hdGNoZXJGaWVsZFZhbHVlKVxuICAgICAgKSA/PyBbXTtcblxuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkLFxuICAgICAgb2JqZWN0X21hdGNoZXJzOiBbXG4gICAgICAgIC4uLm1hdGNoZXJzLFxuICAgICAgICAuLi5tYXRjaGVyc1RvQXJyYXlGaWVsZE1hdGNoZXJzKHJvdXRlLm1hdGNoLCBmYWxzZSksXG4gICAgICAgIC4uLm1hdGNoZXJzVG9BcnJheUZpZWxkTWF0Y2hlcnMocm91dGUubWF0Y2hfcmUsIHRydWUpLFxuICAgICAgXSxcbiAgICAgIGNvbnRpbnVlOiByb3V0ZS5jb250aW51ZSA/PyBmYWxzZSxcbiAgICAgIHJlY2VpdmVyOiByb3V0ZS5yZWNlaXZlciA/PyAnJyxcbiAgICAgIGdyb3VwQnk6IHJvdXRlLmdyb3VwX2J5ID8/IFtdLFxuICAgICAgZ3JvdXBXYWl0VmFsdWUsXG4gICAgICBncm91cFdhaXRWYWx1ZVR5cGUsXG4gICAgICBncm91cEludGVydmFsVmFsdWUsXG4gICAgICBncm91cEludGVydmFsVmFsdWVUeXBlLFxuICAgICAgcmVwZWF0SW50ZXJ2YWxWYWx1ZSxcbiAgICAgIHJlcGVhdEludGVydmFsVmFsdWVUeXBlLFxuICAgICAgcm91dGVzOiBmb3JtUm91dGVzLFxuICAgICAgbXV0ZVRpbWVJbnRlcnZhbHM6IHJvdXRlLm11dGVfdGltZV9pbnRlcnZhbHMgPz8gW10sXG4gICAgfSxcbiAgICBpZDJyb3V0ZSxcbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtQW1Sb3V0ZVRvQW1Sb3V0ZSA9IChcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBmb3JtQW1Sb3V0ZTogRm9ybUFtUm91dGUsXG4gIGlkMkV4aXN0aW5nUm91dGU6IFJlY29yZDxzdHJpbmcsIFJvdXRlPlxuKTogUm91dGUgPT4ge1xuICBjb25zdCBleGlzdGluZzogUm91dGUgfCB1bmRlZmluZWQgPSBpZDJFeGlzdGluZ1JvdXRlW2Zvcm1BbVJvdXRlLmlkXTtcbiAgY29uc3QgYW1Sb3V0ZTogUm91dGUgPSB7XG4gICAgLi4uKGV4aXN0aW5nID8/IHt9KSxcbiAgICBjb250aW51ZTogZm9ybUFtUm91dGUuY29udGludWUsXG4gICAgZ3JvdXBfYnk6IGZvcm1BbVJvdXRlLmdyb3VwQnksXG4gICAgb2JqZWN0X21hdGNoZXJzOiBmb3JtQW1Sb3V0ZS5vYmplY3RfbWF0Y2hlcnMubGVuZ3RoXG4gICAgICA/IGZvcm1BbVJvdXRlLm9iamVjdF9tYXRjaGVycy5tYXAoKG1hdGNoZXIpID0+IFttYXRjaGVyLm5hbWUsIG1hdGNoZXIub3BlcmF0b3IsIG1hdGNoZXIudmFsdWVdKVxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgbWF0Y2g6IHVuZGVmaW5lZCxcbiAgICBtYXRjaF9yZTogdW5kZWZpbmVkLFxuICAgIGdyb3VwX3dhaXQ6IGZvcm1BbVJvdXRlLmdyb3VwV2FpdFZhbHVlXG4gICAgICA/IGAke2Zvcm1BbVJvdXRlLmdyb3VwV2FpdFZhbHVlfSR7Zm9ybUFtUm91dGUuZ3JvdXBXYWl0VmFsdWVUeXBlfWBcbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIGdyb3VwX2ludGVydmFsOiBmb3JtQW1Sb3V0ZS5ncm91cEludGVydmFsVmFsdWVcbiAgICAgID8gYCR7Zm9ybUFtUm91dGUuZ3JvdXBJbnRlcnZhbFZhbHVlfSR7Zm9ybUFtUm91dGUuZ3JvdXBJbnRlcnZhbFZhbHVlVHlwZX1gXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICByZXBlYXRfaW50ZXJ2YWw6IGZvcm1BbVJvdXRlLnJlcGVhdEludGVydmFsVmFsdWVcbiAgICAgID8gYCR7Zm9ybUFtUm91dGUucmVwZWF0SW50ZXJ2YWxWYWx1ZX0ke2Zvcm1BbVJvdXRlLnJlcGVhdEludGVydmFsVmFsdWVUeXBlfWBcbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIHJvdXRlczogZm9ybUFtUm91dGUucm91dGVzLm1hcCgoc3ViUm91dGUpID0+XG4gICAgICBmb3JtQW1Sb3V0ZVRvQW1Sb3V0ZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBzdWJSb3V0ZSwgaWQyRXhpc3RpbmdSb3V0ZSlcbiAgICApLFxuICAgIG11dGVfdGltZV9pbnRlcnZhbHM6IGZvcm1BbVJvdXRlLm11dGVUaW1lSW50ZXJ2YWxzLFxuICB9O1xuXG4gIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lICE9PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSB7XG4gICAgYW1Sb3V0ZS5tYXRjaGVycyA9IGZvcm1BbVJvdXRlLm9iamVjdF9tYXRjaGVycy5tYXAoKHsgbmFtZSwgb3BlcmF0b3IsIHZhbHVlIH0pID0+IGAke25hbWV9JHtvcGVyYXRvcn0ke3ZhbHVlfWApO1xuICAgIGFtUm91dGUub2JqZWN0X21hdGNoZXJzID0gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIGFtUm91dGUubWF0Y2hlcnMgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZm9ybUFtUm91dGUucmVjZWl2ZXIpIHtcbiAgICBhbVJvdXRlLnJlY2VpdmVyID0gZm9ybUFtUm91dGUucmVjZWl2ZXI7XG4gIH1cblxuICByZXR1cm4gb21pdEJ5KGFtUm91dGUsIGlzVW5kZWZpbmVkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdUb1NlbGVjdGFibGVWYWx1ZSA9IChzdHI6IHN0cmluZyk6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+ID0+ICh7XG4gIGxhYmVsOiBzdHIsXG4gIHZhbHVlOiBzdHIsXG59KTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3NUb1NlbGVjdGFibGVWYWx1ZXMgPSAoYXJyOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9PlxuICAoYXJyID8/IFtdKS5tYXAoc3RyaW5nVG9TZWxlY3RhYmxlVmFsdWUpO1xuXG5leHBvcnQgY29uc3QgbWFwU2VsZWN0VmFsdWVUb1N0cmluZyA9IChzZWxlY3RhYmxlVmFsdWU6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KTogc3RyaW5nID0+IHtcbiAgaWYgKCFzZWxlY3RhYmxlVmFsdWUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gc2VsZWN0YWJsZVZhbHVlVG9TdHJpbmcoc2VsZWN0YWJsZVZhbHVlKSA/PyAnJztcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBNdWx0aVNlbGVjdFZhbHVlVG9TdHJpbmdzID0gKFxuICBzZWxlY3RhYmxlVmFsdWVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gfCB1bmRlZmluZWRcbik6IHN0cmluZ1tdID0+IHtcbiAgaWYgKCFzZWxlY3RhYmxlVmFsdWVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGFibGVWYWx1ZXNUb1N0cmluZ3Moc2VsZWN0YWJsZVZhbHVlcyk7XG59O1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uYWxQb3NpdGl2ZUludGVnZXI6IFZhbGlkYXRlPHN0cmluZz4gPSAodmFsdWUpID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gIS9eXFxkKyQvLnRlc3QodmFsdWUpID8gJ011c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLicgOiB1bmRlZmluZWQ7XG59O1xuIiwiaW1wb3J0IHsgRHluYW1pY1RhYmxlSXRlbVByb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9EeW5hbWljVGFibGUnO1xuXG5leHBvcnQgY29uc3QgcHJlcGFyZUl0ZW1zID0gPFQgPSB1bmtub3duPihcbiAgaXRlbXM6IFRbXSxcbiAgaWRDcmVhdG9yPzogKGl0ZW06IFQpID0+IG51bWJlciB8IHN0cmluZ1xuKTogQXJyYXk8RHluYW1pY1RhYmxlSXRlbVByb3BzPFQ+PiA9PlxuICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgIGlkOiBpZENyZWF0b3I/LihpdGVtKSA/PyBpbmRleCxcbiAgICBkYXRhOiBpdGVtLFxuICB9KSk7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwidXNlQ2xlYW51cCIsInN0YXRlU2VsZWN0b3IiLCJkaXNwYXRjaCIsInNlbGVjdG9yUmVmIiwiY3VycmVudCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJjc3MiLCJBbGVydCIsIkxvYWRpbmdQbGFjZWhvbGRlciIsInVzZVN0eWxlczIiLCJ3aXRoRXJyb3JCb3VuZGFyeSIsIlJlZGlyZWN0IiwiQWxlcnRpbmdQYWdlV3JhcHBlciIsIkFsZXJ0TWFuYWdlclBpY2tlciIsIkFtUm9vdFJvdXRlIiwiQW1TcGVjaWZpY1JvdXRpbmciLCJ1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsInVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsImFtUm91dGVUb0Zvcm1BbVJvdXRlIiwiZm9ybUFtUm91dGVUb0FtUm91dGUiLCJzdHJpbmdzVG9TZWxlY3RhYmxlVmFsdWVzIiwiaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIiwiaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UiLCJNdXRlVGltaW5nc1RhYmxlIiwiQW1Sb3V0ZXMiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJpc1Jvb3RSb3V0ZUVkaXRNb2RlIiwic2V0SXNSb290Um91dGVFZGl0TW9kZSIsImFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwicmVhZE9ubHkiLCJhbUNvbmZpZ3MiLCJzdGF0ZSIsImZldGNoQ29uZmlnIiwicmVzdWx0IiwibG9hZGluZyIsInJlc3VsdExvYWRpbmciLCJlcnJvciIsInJlc3VsdEVycm9yIiwiY29uZmlnIiwiYWxlcnRtYW5hZ2VyX2NvbmZpZyIsInJvb3RSb3V0ZSIsImlkMkV4aXN0aW5nUm91dGUiLCJyb3V0ZSIsInJlY2VpdmVycyIsIm1hcCIsInJlY2VpdmVyIiwibmFtZSIsImVudGVyUm9vdFJvdXRlRWRpdE1vZGUiLCJleGl0Um9vdFJvdXRlRWRpdE1vZGUiLCJ1bmlmaWVkQWxlcnRpbmciLCJzYXZlQU1Db25maWciLCJoYW5kbGVTYXZlIiwiZGF0YSIsIm5ld0RhdGEiLCJuZXdDb25maWciLCJvbGRDb25maWciLCJzdWNjZXNzTWVzc2FnZSIsInJlZmV0Y2giLCJtZXNzYWdlIiwiYnJlYWsiLCJzdHlsZSIsInRoZW1lIiwic3BhY2luZyIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsInVzZVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJwYWdlSWQiLCJpc0xvYWRpbmciLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiY29udGV4dFNydiIsIkF1dGhvcml6ZSIsImFjdGlvbnMiLCJmYWxsYmFjayIsInNvbWUiLCJhY3Rpb24iLCJoYXNBY2Nlc3MiLCJ1c2VTdHlsZXMiLCJFbXB0eUFyZWEiLCJjb250YWluZXIiLCJjb2xvcnMiLCJiZzIiLCJ0ZXh0U2VtaVdlYWsiLCJ4bCIsIkJ1dHRvbiIsIkxpbmtCdXR0b24iLCJFbXB0eUFyZWFXaXRoQ1RBIiwiYnV0dG9uSWNvbiIsImJ1dHRvbkxhYmVsIiwiYnV0dG9uU2l6ZSIsImJ1dHRvblZhcmlhbnQiLCJvbkJ1dHRvbkNsaWNrIiwidGV4dCIsImhyZWYiLCJzaG93QnV0dG9uIiwiY29tbW9uUHJvcHMiLCJjbGFzc05hbWUiLCJidXR0b24iLCJpY29uIiwic2l6ZSIsInZhcmlhbnQiLCJtZCIsInNtIiwiTGFiZWwiLCJUb29sdGlwIiwiSW5wdXQiLCJJY29uIiwiU3RhY2siLCJNYXRjaGVyRmlsdGVyIiwib25GaWx0ZXJDaGFuZ2UiLCJkZWZhdWx0UXVlcnlTdHJpbmciLCJxdWVyeVN0cmluZyIsImhhbmRsZVNlYXJjaENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaEljb24iLCJpbnB1dFdpZHRoIiwiQW1Sb290Um91dGVGb3JtIiwiQW1Sb290Um91dGVSZWFkIiwiZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIiwiaXNFZGl0TW9kZSIsIm9uU2F2ZSIsIm9uRW50ZXJFZGl0TW9kZSIsIm9uRXhpdEVkaXRNb2RlIiwicm91dGVzIiwicGVybWlzc2lvbnMiLCJpc1JlYWRPbmx5IiwidGl0bGVDb250YWluZXIiLCJ0aXRsZSIsInVwZGF0ZSIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJwcmltYXJ5IiwiY3giLCJDb2xsYXBzZSIsIkZpZWxkIiwiRm9ybSIsIklucHV0Q29udHJvbCIsIkxpbmsiLCJNdWx0aVNlbGVjdCIsIlNlbGVjdCIsIm1hcE11bHRpU2VsZWN0VmFsdWVUb1N0cmluZ3MiLCJtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nIiwib3B0aW9uYWxQb3NpdGl2ZUludGVnZXIiLCJzdHJpbmdUb1NlbGVjdGFibGVWYWx1ZSIsIm1ha2VBTUxpbmsiLCJ0aW1lT3B0aW9ucyIsImdldEZvcm1TdHlsZXMiLCJvbkNhbmNlbCIsImlzVGltaW5nT3B0aW9uc0V4cGFuZGVkIiwic2V0SXNUaW1pbmdPcHRpb25zRXhwYW5kZWQiLCJncm91cEJ5T3B0aW9ucyIsInNldEdyb3VwQnlPcHRpb25zIiwiZ3JvdXBCeSIsImNvbnRyb2wiLCJlcnJvcnMiLCJzZXRWYWx1ZSIsImZpZWxkIiwib25DaGFuZ2UiLCJpbnB1dCIsInJlcXVpcmVkIiwibGlua1RleHQiLCJvcHQiLCJvcHRzIiwiY29sbGFwc2UiLCJncm91cFdhaXRWYWx1ZSIsInRpbWluZ0NvbnRhaW5lciIsImZpZWxkU3RhdGUiLCJpbnZhbGlkIiwic21hbGxJbnB1dCIsInZhbGlkYXRlIiwiZ3JvdXBJbnRlcnZhbFZhbHVlIiwicmVwZWF0SW50ZXJ2YWxWYWx1ZSIsImdldEdyaWRTdHlsZXMiLCJqb2luIiwiZ3JvdXBXYWl0IiwiZ3JvdXBXYWl0VmFsdWVUeXBlIiwiZ3JvdXBJbnRlcnZhbCIsImdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGUiLCJyZXBlYXRJbnRlcnZhbCIsInJlcGVhdEludGVydmFsVmFsdWVUeXBlIiwidGl0bGVDZWxsIiwidmFsdWVDZWxsIiwiRmllbGRBcnJheSIsIkhvcml6b250YWxHcm91cCIsIkljb25CdXR0b24iLCJTd2l0Y2giLCJCYWRnZSIsIlZlcnRpY2FsR3JvdXAiLCJlbXB0eUFycmF5RmllbGRNYXRjaGVyIiwibWF0Y2hlckZpZWxkT3B0aW9ucyIsInVzZU11dGVUaW1pbmdPcHRpb25zIiwiQW1Sb3V0ZXNFeHBhbmRlZEZvcm0iLCJmb3JtU3R5bGVzIiwib3ZlcnJpZGVHcm91cGluZyIsInNldE92ZXJyaWRlR3JvdXBpbmciLCJsZW5ndGgiLCJvdmVycmlkZVRpbWluZ3MiLCJzZXRPdmVycmlkZVRpbWluZ3MiLCJtdXRlVGltaW5nT3B0aW9ucyIsInJlZ2lzdGVyIiwiZmllbGRzIiwiYXBwZW5kIiwicmVtb3ZlIiwibm9NYXRjaGVyc1dhcm5pbmciLCJtYXRjaGVyc0NvbnRhaW5lciIsImluZGV4IiwibG9jYWxQYXRoIiwib2JqZWN0X21hdGNoZXJzIiwibWF0Y2hlcnNPcGVyYXRvciIsIm9wZXJhdG9yIiwicmVtb3ZlQnV0dG9uIiwiaWQiLCJhZGRNYXRjaGVyQnRuIiwibXV0ZVRpbWVJbnRlcnZhbHMiLCJidXR0b25Hcm91cCIsImNvbW1vblNwYWNpbmciLCJuZXN0ZWRQb2xpY2llcyIsImVtcHR5Um91dGUiLCJBbVJvdXRlc1RhYmxlIiwiQW1Sb3V0ZXNFeHBhbmRlZFJlYWQiLCJncmlkU3R5bGVzIiwic3Vicm91dGVzIiwic2V0U3Vicm91dGVzIiwiaXNBZGRNb2RlIiwic2V0SXNBZGRNb2RlIiwibmV3U3Vicm91dGVzIiwicG9wIiwibmV3Um91dGVzIiwiY3JlYXRlIiwiYWRkTmVzdGVkUm91dGluZ0J0biIsIkNvbmZpcm1Nb2RhbCIsInByZXBhcmVJdGVtcyIsIkR5bmFtaWNUYWJsZSIsIk1hdGNoZXJzIiwibWF0Y2hlckZpZWxkVG9NYXRjaGVyIiwicGFyc2VNYXRjaGVycyIsImludGVyc2VjdGlvbldpdGgiLCJpc0VxdWFsIiwiZ2V0RmlsdGVyZWRSb3V0ZXMiLCJsYWJlbE1hdGNoZXJRdWVyeSIsImNvbnRhY3RQb2ludFF1ZXJ5IiwibWF0Y2hlcnMiLCJmaWx0ZXJlZFJvdXRlcyIsImZpbHRlciIsInJvdXRlTWF0Y2hlcnMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidXBkYXRlZFJvdXRlIiwiZWRpdEluZGV4IiwiZmluZEluZGV4IiwiZGVsZXRlUm91dGUiLCJyb3V0ZVRvUmVtb3ZlIiwib25DYW5jZWxBZGQiLCJmaWx0ZXJzIiwiZWRpdE1vZGUiLCJzZXRFZGl0TW9kZSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImV4cGFuZGVkSWQiLCJzZXRFeHBhbmRlZElkIiwiY2FuRWRpdFJvdXRlcyIsImhhc1Blcm1pc3Npb24iLCJjYW5EZWxldGVSb3V0ZXMiLCJkZWxldGUiLCJzaG93QWN0aW9ucyIsImV4cGFuZEl0ZW0iLCJpdGVtIiwiY29sbGFwc2VJdGVtIiwidW5kZWZpbmVkIiwiY29scyIsImxhYmVsIiwicmVuZGVyQ2VsbCIsInJlbmRlckV4cGFuZGVkQ29udGVudCIsImV4cGFuZFdpdGhDdXN0b21Db250ZW50IiwiY29udGFjdFBvaW50IiwiZHluYW1pY1RhYmxlUm91dGVzIiwidXNlRGVib3VuY2UiLCJ1c2VVUkxTZWFyY2hQYXJhbXMiLCJnZXROb3RpZmljYXRpb25Qb2xpY2llc0ZpbHRlcnMiLCJvblJvb3RSb3V0ZUVkaXQiLCJhY3R1YWxSb3V0ZXMiLCJzZXRBY3R1YWxSb3V0ZXMiLCJjYW5DcmVhdGVOb3RpZmljYXRpb25zIiwic2VhcmNoUGFyYW1zIiwic2V0U2VhcmNoUGFyYW1zIiwic2V0RmlsdGVycyIsImNsZWFyRmlsdGVycyIsImFkZE5ld1JvdXRlIiwib25UYWJsZVJvdXRlQ2hhbmdlIiwic2VhcmNoQ29udGFpbmVyIiwiY3VycmVudEZpbHRlcnMiLCJmaWx0ZXJJbnB1dCIsImN1cnJlbnRUYXJnZXQiLCJjbGVhckZpbHRlckJ0biIsImFkZE1hdGNoZXJCdG5Sb3ciLCJib3JkZXIiLCJzdHJvbmciLCJkZWxldGVNdXRlVGltaW5nQWN0aW9uIiwiZ2V0VGltZVN0cmluZyIsImdldFdlZWtkYXlTdHJpbmciLCJnZXREYXlzT2ZNb250aFN0cmluZyIsImdldE1vbnRoc1N0cmluZyIsImdldFllYXJzU3RyaW5nIiwibXV0ZVRpbWluZ05hbWVzIiwiaGlkZUFjdGlvbnMiLCJtdXRlVGltaW5nTmFtZSIsInNldE11dGVUaW1pbmdOYW1lIiwiaXRlbXMiLCJtdXRlVGltaW5ncyIsIm11dGVfdGltZV9pbnRlcnZhbHMiLCJtdXRlIiwiY29sdW1ucyIsInVzZUNvbHVtbnMiLCJhZGRNdXRlQnV0dG9uIiwidXNlckhhc0VkaXRQZXJtaXNzaW9ucyIsInVzZXJIYXNEZWxldGVQZXJtaXNzaW9ucyIsInJlbmRlck5hbWUiLCJyZW5kZXJUaW1lSW50ZXJ2YWxzIiwidGltZV9pbnRlcnZhbHMiLCJwdXNoIiwicmVuZGVyQWN0aW9ucyIsIm11dGVOYW1lIiwidGltZUludGVydmFscyIsImludGVydmFsIiwidGltZXMiLCJ3ZWVrZGF5cyIsImRheXNfb2ZfbW9udGgiLCJtb250aHMiLCJ5ZWFycyIsInRpbWVTdHJpbmciLCJ3ZWVrZGF5U3RyaW5nIiwiZGF5c1N0cmluZyIsIm1vbnRoc1N0cmluZyIsInllYXJzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cG9ncmFwaHkiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwiZG93biIsIlRhZ0xpc3QiLCJtYXRjaGVyVG9PcGVyYXRvciIsInRhZ3MiLCJtYXRjaGVyIiwidXNlUXVlcnlQYXJhbXMiLCJzdG9yZSIsIkFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZIiwiQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIiwiZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXMiLCJHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIiwiaXNBbGVydE1hbmFnZXJTb3VyY2UiLCJmaW5kIiwiZHMiLCJxdWVyeVBhcmFtcyIsInVwZGF0ZVF1ZXJ5UGFyYW1zIiwic2V0IiwicXVlcnlTb3VyY2UiLCJzdG9yZVNvdXJjZSIsImdldCIsInRpbWVJbnRlcnZhbFRvU3RyaW5nIiwibXV0ZVRpbWluZ3NPcHRpb25zIiwiZGVzY3JpcHRpb24iLCJ1c2VMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZSIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaFZhbHVlcyIsInJlcGxhY2UiLCJwYXJ0aWFsIiwiTWF0Y2hlck9wZXJhdG9yIiwicGFyc2VJbnRlcnZhbCIsImlzVW5kZWZpbmVkIiwib21pdEJ5IiwibWF0Y2hlclRvTWF0Y2hlckZpZWxkIiwicGFyc2VNYXRjaGVyIiwiZGVmYXVsdFZhbHVlQW5kVHlwZSIsIm1hdGNoZXJzVG9BcnJheUZpZWxkTWF0Y2hlcnMiLCJpc1JlZ2V4IiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsInJlZ2V4IiwiZXF1YWwiLCJpbnRlcnZhbFRvVmFsdWVBbmRUeXBlIiwic3RyVmFsdWUiLCJ2YWx1ZVR5cGUiLCJ0aW1lT3B0aW9uIiwiU3RyaW5nIiwic2VsZWN0YWJsZVZhbHVlVG9TdHJpbmciLCJzZWxlY3RhYmxlVmFsdWUiLCJzZWxlY3RhYmxlVmFsdWVzVG9TdHJpbmdzIiwiYXJyIiwiY29udGludWUiLCJrZXlzIiwiZ3JvdXBfd2FpdCIsImdyb3VwX2ludGVydmFsIiwicmVwZWF0X2ludGVydmFsIiwiTWF0aCIsInJhbmRvbSIsImlkMnJvdXRlIiwiZm9ybVJvdXRlcyIsImZvckVhY2giLCJzdWJSb3V0ZSIsInN1YkZvcm1Sb3V0ZSIsInN1YklkMlJvdXRlIiwiYXNzaWduIiwibWF0Y2giLCJtYXRjaF9yZSIsImdyb3VwX2J5IiwiZm9ybUFtUm91dGUiLCJleGlzdGluZyIsImFtUm91dGUiLCJzdHIiLCJzZWxlY3RhYmxlVmFsdWVzIiwidGVzdCIsImlkQ3JlYXRvciJdLCJzb3VyY2VSb290IjoiIn0=
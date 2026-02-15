"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertSilences"],{

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

/***/ "./public/app/features/alerting/unified/Silences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_silences_SilencesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencesTable.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _components_silences_SilencesEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencesEditor.tsx");
/* harmony import */ var _components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Redirect, _LoadingPlaceholder;



















const Silences = () => {
  var _alertsRequest$error, _alertsRequest$result;

  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__.useAlertManagerSourceName)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const silences = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.silences);
  const alertsRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.amAlerts);
  const alertsRequest = alertManagerSourceName ? alertsRequests[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_9__.initialAsyncRequestState : undefined;
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation)();
  const isRoot = location.pathname.endsWith('/alerting/silences');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchAll() {
      if (alertManagerSourceName) {
        dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchSilencesAction)(alertManagerSourceName));
        dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchAmAlertsAction)(alertManagerSourceName));
      }
    }

    fetchAll();
    const interval = setInterval(() => fetchAll, _utils_constants__WEBPACK_IMPORTED_MODULE_8__.SILENCES_POLL_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, [alertManagerSourceName, dispatch]);
  const {
    result,
    loading,
    error
  } = alertManagerSourceName && silences[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_9__.initialAsyncRequestState;
  const getSilenceById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => result && result.find(silence => silence.id === id), [result]);

  if (!alertManagerSourceName) {
    return _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Redirect, {
      to: "/alerting/silences"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_3__.AlertingPageWrapper, {
    pageId: "silences",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_13__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_12__.AccessControlAction.AlertingInstancesExternalRead],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_11__.AlertManagerPicker, {
        disabled: !isRoot,
        current: alertManagerSourceName,
        onChange: setAlertManagerSourceName
      })
    }), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "error",
      title: "Error loading silences",
      children: error.message || 'Unknown error.'
    }), (alertsRequest === null || alertsRequest === void 0 ? void 0 : alertsRequest.error) && !(alertsRequest !== null && alertsRequest !== void 0 && alertsRequest.loading) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager alerts",
      children: ((_alertsRequest$error = alertsRequest.error) === null || _alertsRequest$error === void 0 ? void 0 : _alertsRequest$error.message) || 'Unknown error.'
    }), loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
      text: "loading silences..."
    }))), result && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        exact: true,
        path: "/alerting/silences",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_silences_SilencesTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
          silences: result,
          alertManagerAlerts: (_alertsRequest$result = alertsRequest === null || alertsRequest === void 0 ? void 0 : alertsRequest.result) !== null && _alertsRequest$result !== void 0 ? _alertsRequest$result : [],
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        exact: true,
        path: "/alerting/silence/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_silences_SilencesEditor__WEBPACK_IMPORTED_MODULE_10__["default"], {
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        exact: true,
        path: "/alerting/silence/:id/edit",
        children: ({
          match
        }) => {
          return (match === null || match === void 0 ? void 0 : match.params.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_silences_SilencesEditor__WEBPACK_IMPORTED_MODULE_10__["default"], {
            silence: getSilenceById(match.params.id),
            alertManagerSourceName: alertManagerSourceName
          });
        }
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.withErrorBoundary)(Silences, {
  style: 'page'
}));

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

/***/ "./public/app/features/alerting/unified/components/rules/ActionButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionButton": () => (/* binding */ ActionButton),
/* harmony export */   "getStyle": () => (/* binding */ getStyle)
/* harmony export */ });
/* harmony import */ var _grafana_ui_src_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/components/Button/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["className"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ActionButton = _ref => {
  let {
    className
  } = _ref,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui_src_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button, Object.assign({
    variant: "secondary",
    size: "xs",
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyle), className)
  }, restProps));
};
const getStyle = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  height: 24px;
  font-size: ${theme.typography.size.sm};
`;

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionIcon": () => (/* binding */ ActionIcon)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["tooltip", "icon", "to", "target", "onClick", "className", "tooltipPlacement"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ActionIcon = _ref => {
  let {
    tooltip,
    icon,
    to,
    target,
    onClick,
    className,
    tooltipPlacement = 'top'
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const ariaLabel = typeof tooltip === 'string' ? tooltip : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
    content: tooltip,
    placement: tooltipPlacement,
    children: to ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.LinkButton, Object.assign({
      variant: "secondary",
      fill: "text",
      icon: icon,
      href: to,
      size: "sm",
      target: target
    }, rest, {
      "aria-label": ariaLabel
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Button, Object.assign({
      className: className,
      variant: "secondary",
      fill: "text",
      size: "sm",
      icon: icon,
      type: "button",
      onClick: onClick
    }, rest, {
      "aria-label": ariaLabel
    }))
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmAlertStateTag": () => (/* binding */ AmAlertStateTag)
/* harmony export */ });
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _StateTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const alertStateToState = {
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.AlertState.Active]: 'bad',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.AlertState.Unprocessed]: 'neutral',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.AlertState.Suppressed]: 'info'
};
const AmAlertStateTag = ({
  state
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StateTag__WEBPACK_IMPORTED_MODULE_2__.StateTag, {
  state: alertStateToState[state],
  children: state
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/MatchedSilencedRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchedSilencedRules": () => (/* binding */ MatchedSilencedRules)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _rules_AlertStateTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;


















const MatchedSilencedRules = () => {
  var _matchedAlertRules$sl;

  const [matchedAlertRules, setMatchedAlertRules] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const formApi = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    watch
  } = formApi;
  const matchers = watch('matchers');
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const columns = useColumns();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.fetchAllPromAndRulerRulesAction)());
  }, [dispatch]);
  const combinedNamespaces = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_7__.useCombinedRuleNamespaces)();
  (0,react_use__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    const matchedInstances = combinedNamespaces.flatMap(namespace => {
      return namespace.groups.flatMap(group => {
        return group.rules.map(combinedRule => combinedRule.promRule).filter(rule => (0,_utils_rules__WEBPACK_IMPORTED_MODULE_10__.isAlertingRule)(rule)).flatMap(rule => {
          var _rule$alerts;

          return (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_8__.findAlertInstancesWithMatchers)((_rule$alerts = rule.alerts) !== null && _rule$alerts !== void 0 ? _rule$alerts : [], matchers);
        });
      });
    });
    setMatchedAlertRules(matchedInstances);
  }, 500, [combinedNamespaces, matchers]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("h4", {
      className: styles.title,
      children: ["Affected alert instances", matchedAlertRules.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge, {
        className: styles.badge,
        color: "blue",
        text: matchedAlertRules.length
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: styles.table,
      children: matchers.every(matcher => !matcher.value && !matcher.name) ? _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        children: "Add a valid matcher to see affected alerts"
      })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_6__.DynamicTable, {
          items: (_matchedAlertRules$sl = matchedAlertRules.slice(0, 5)) !== null && _matchedAlertRules$sl !== void 0 ? _matchedAlertRules$sl : [],
          isExpandable: false,
          cols: columns
        }), matchedAlertRules.length > 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: styles.moreMatches,
          children: ["and ", matchedAlertRules.length - 5, " more"]
        })]
      })
    })]
  });
};

function useColumns() {
  return [{
    id: 'state',
    label: 'State',
    renderCell: function renderStateTag({
      data: {
        matchedInstance
      }
    }) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_rules_AlertStateTag__WEBPACK_IMPORTED_MODULE_11__.AlertStateTag, {
        state: matchedInstance.state
      });
    },
    size: '160px'
  }, {
    id: 'labels',
    label: 'Labels',
    renderCell: function renderName({
      data: {
        matchedInstance
      }
    }) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_12__.AlertLabels, {
        labels: matchedInstance.labels
      });
    },
    size: '250px'
  }, {
    id: 'created',
    label: 'Created',
    renderCell: function renderSummary({
      data: {
        matchedInstance
      }
    }) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: matchedInstance.activeAt.startsWith('0001') ? '-' : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTime)(matchedInstance.activeAt).format('YYYY-MM-DD HH:mm:ss')
      });
    },
    size: '400px'
  }];
}

const getStyles = theme => ({
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    max-width: ${theme.breakpoints.values.lg}px;
  `,
  moreMatches: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-top: ${theme.spacing(1)};
  `,
  title: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    display: flex;
    align-items: center;
  `,
  badge: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-left: ${theme.spacing(1)};
  `
});

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

/***/ "./public/app/features/alerting/unified/components/silences/MatchersField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const MatchersField = ({
  className
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const formApi = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const {
    control,
    register,
    formState: {
      errors
    }
  } = formApi;
  const {
    fields: matchers = [],
    append,
    remove
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFieldArray)({
    name: 'matchers'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(className, styles.wrapper),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Matching labels",
      required: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: styles.matchers,
          children: matchers.map((matcher, index) => {
            var _errors$matchers, _errors$matchers$inde, _errors$matchers2, _errors$matchers2$ind, _errors$matchers2$ind2, _errors$matchers3, _errors$matchers3$ind, _errors$matchers4, _errors$matchers4$ind, _errors$matchers4$ind2;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: styles.row,
              "data-testid": "matcher",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                label: "Label",
                invalid: !!(errors !== null && errors !== void 0 && (_errors$matchers = errors.matchers) !== null && _errors$matchers !== void 0 && (_errors$matchers$inde = _errors$matchers[index]) !== null && _errors$matchers$inde !== void 0 && _errors$matchers$inde.name),
                error: errors === null || errors === void 0 ? void 0 : (_errors$matchers2 = errors.matchers) === null || _errors$matchers2 === void 0 ? void 0 : (_errors$matchers2$ind = _errors$matchers2[index]) === null || _errors$matchers2$ind === void 0 ? void 0 : (_errors$matchers2$ind2 = _errors$matchers2$ind.name) === null || _errors$matchers2$ind2 === void 0 ? void 0 : _errors$matchers2$ind2.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`matchers.${index}.name`, {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }), {
                  defaultValue: matcher.name,
                  placeholder: "label"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                label: 'Operator',
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
                  control: control,
                  render: _ref => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref,
                        field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({}, field, {
                      menuShouldPortal: true,
                      onChange: value => onChange(value.value),
                      className: styles.matcherOptions,
                      options: _utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.matcherFieldOptions,
                      "aria-label": "operator"
                    }));
                  },
                  defaultValue: matcher.operator || _utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.matcherFieldOptions[0].value,
                  name: `matchers.${index}.operator`,
                  rules: {
                    required: {
                      value: true,
                      message: 'Required.'
                    }
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                label: "Value",
                invalid: !!(errors !== null && errors !== void 0 && (_errors$matchers3 = errors.matchers) !== null && _errors$matchers3 !== void 0 && (_errors$matchers3$ind = _errors$matchers3[index]) !== null && _errors$matchers3$ind !== void 0 && _errors$matchers3$ind.value),
                error: errors === null || errors === void 0 ? void 0 : (_errors$matchers4 = errors.matchers) === null || _errors$matchers4 === void 0 ? void 0 : (_errors$matchers4$ind = _errors$matchers4[index]) === null || _errors$matchers4$ind === void 0 ? void 0 : (_errors$matchers4$ind2 = _errors$matchers4$ind.value) === null || _errors$matchers4$ind2 === void 0 ? void 0 : _errors$matchers4$ind2.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`matchers.${index}.value`, {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }), {
                  defaultValue: matcher.value,
                  placeholder: "value"
                }))
              }), matchers.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                className: styles.removeButton,
                tooltip: "Remove matcher",
                name: 'trash-alt',
                onClick: () => remove(index),
                children: "Remove"
              })]
            }, `${matcher.id}`);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "button",
          icon: "plus",
          variant: "secondary",
          onClick: () => {
            const newMatcher = {
              name: '',
              value: '',
              operator: app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_4__.MatcherOperator.equal
            };
            append(newMatcher);
          },
          children: "Add matcher"
        })]
      })
    })
  });
};

const getStyles = theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin-top: ${theme.spacing(2)};
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${theme.colors.background.secondary};
      padding: ${theme.spacing(1)} ${theme.spacing(1)} 0 ${theme.spacing(1)};
      & > * + * {
        margin-left: ${theme.spacing(2)};
      }
    `,
    removeButton: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin-left: ${theme.spacing(1)};
      margin-top: ${theme.spacing(2.5)};
    `,
    matcherOptions: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      min-width: 140px;
    `,
    matchers: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      max-width: ${theme.breakpoints.values.sm}px;
      margin: ${theme.spacing(1)} 0;
      padding-top: ${theme.spacing(0.5)};
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MatchersField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/NoSilencesCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoSilencesSplash": () => (/* binding */ NoSilencesSplash)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _CallToActionCard;








const NoSilencesSplash = ({
  alertManagerSourceName
}) => {
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_4__.getInstancesPermissions)(alertManagerSourceName);

  if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasAccess(permissions.create, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.isEditor)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "You haven't created any silences yet",
      buttonIcon: "bell-slash",
      buttonLink: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.makeAMLink)('alerting/silence/new', alertManagerSourceName),
      buttonTitle: "New silence"
    });
  }

  return _CallToActionCard || (_CallToActionCard = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.CallToActionCard, {
    callToActionElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {}),
    message: "No silences found."
  }));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilenceDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilenceDetails": () => (/* binding */ SilenceDetails)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _SilencedAlertsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencedAlertsTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const SilenceDetails = ({
  silence
}) => {
  const {
    startsAt,
    endsAt,
    comment,
    createdBy,
    silencedAlerts
  } = silence;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dateDisplayFormat = 'YYYY-MM-DD HH:mm';
  const startsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(startsAt);
  const endsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(endsAt);
  const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.intervalToAbbreviatedDurationString)({
    start: new Date(startsAt),
    end: new Date(endsAt)
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Comment"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: comment
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Schedule"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: `${startsAtDate === null || startsAtDate === void 0 ? void 0 : startsAtDate.format(dateDisplayFormat)} - ${endsAtDate === null || endsAtDate === void 0 ? void 0 : endsAtDate.format(dateDisplayFormat)}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Duration"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [" ", duration]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Created by"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [" ", createdBy]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Affected alerts"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SilencedAlertsTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      silencedAlerts: silencedAlerts
    })]
  });
};

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-row-gap: 1rem;
  `,
  title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.primary};
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(1, 0)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencePeriod.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilencePeriod": () => (/* binding */ SilencePeriod)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const SilencePeriod = () => {
  const {
    control,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  const {
    field: {
      onChange: onChangeStartsAt,
      value: startsAt
    },
    fieldState: {
      invalid: startsAtInvalid
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useController)({
    name: 'startsAt',
    control,
    rules: {
      validate: value => getValues().endsAt > value
    }
  });
  const {
    field: {
      onChange: onChangeEndsAt,
      value: endsAt
    },
    fieldState: {
      invalid: endsAtInvalid
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useController)({
    name: 'endsAt',
    control,
    rules: {
      validate: value => getValues().startsAt < value
    }
  });
  const {
    field: {
      onChange: onChangeTimeZone,
      value: timeZone
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useController)({
    name: 'timeZone',
    control
  });
  const invalid = startsAtInvalid || endsAtInvalid;
  const from = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTime)(startsAt);
  const to = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTime)(endsAt);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
    className: styles.timeRange,
    label: "Silence start and end",
    error: invalid ? 'To is before or the same as from' : '',
    invalid: invalid,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TimeRangeInput, {
      value: {
        from,
        to,
        raw: {
          from,
          to
        }
      },
      timeZone: timeZone,
      onChange: newValue => {
        onChangeStartsAt((0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTime)(newValue.from));
        onChangeEndsAt((0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTime)(newValue.to));
      },
      onChangeTimeZone: newValue => onChangeTimeZone(newValue),
      hideTimeZone: false,
      hideQuickRanges: true,
      placeholder: 'Select time range'
    })
  });
};

const getStyles = theme => ({
  timeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 400px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilenceStateTag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilenceStateTag": () => (/* binding */ SilenceStateTag)
/* harmony export */ });
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _StateTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const silenceStateToState = {
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.SilenceState.Active]: 'good',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.SilenceState.Expired]: 'neutral',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.SilenceState.Pending]: 'neutral'
};
const SilenceStateTag = ({
  state
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StateTag__WEBPACK_IMPORTED_MODULE_2__.StateTag, {
  state: silenceStateToState[state],
  children: state
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencedAlertsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _SilencedAlertsTableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencedAlertsTableRow.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _col, _thead;









const SilencedAlertsTable = ({
  silencedAlerts
}) => {
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_1__.getAlertTableStyles);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (!!silencedAlerts.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_4__.cx)(tableStyles.table, styles.tableMargin),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("colgroup", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("col", {
          className: tableStyles.colExpand
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("col", {
          className: styles.colState
        }), _col || (_col = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("col", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("col", {
          className: styles.colName
        })]
      }), _thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
            children: "State"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
            children: "Alert name"
          })]
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
        children: silencedAlerts.map((alert, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SilencedAlertsTableRow__WEBPACK_IMPORTED_MODULE_3__.SilencedAlertsTableRow, {
            alert: alert,
            className: index % 2 === 0 ? tableStyles.evenRow : ''
          }, alert.fingerprint);
        })
      })]
    });
  } else {
    return null;
  }
};

const getStyles = theme => ({
  tableMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
    margin-bottom: ${theme.spacing(1)};
  `,
  colState: _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
    width: 110px;
  `,
  colName: _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
    width: 65%;
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilencedAlertsTable);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencedAlertsTableRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilencedAlertsTableRow": () => (/* binding */ SilencedAlertsTableRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _AmAlertStateTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;









const SilencedAlertsTableRow = ({
  alert,
  className
}) => {
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.intervalToAbbreviatedDurationString)({
    start: new Date(alert.startsAt),
    end: new Date(alert.endsAt)
  });
  const alertName = Object.entries(alert.labels).reduce((name, [labelKey, labelValue]) => {
    if (labelKey === 'alertname' || labelKey === '__alert_rule_title__') {
      name = labelValue;
    }

    return name;
  }, '');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
      className: className,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_1__.CollapseToggle, {
          isCollapsed: isCollapsed,
          onToggle: collapsed => setIsCollapsed(collapsed)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_4__.AmAlertStateTag, {
          state: alert.status.state
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
        children: ["for ", duration, " seconds"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
        children: alertName
      })]
    }), !isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
      className: className,
      children: [_td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
        colSpan: 5,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, {
          labels: alert.labels
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencesEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilencesEditor": () => (/* binding */ SilencesEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MatchersField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/MatchersField.tsx");
/* harmony import */ var _MatchedSilencedRules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/MatchedSilencedRules.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _SilencePeriod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencePeriod.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _SilencePeriod, _MatchersField, _MatchedSilencedRules, _Button, _Button2;
























const defaultsFromQuery = searchParams => {
  const defaults = {};
  const comment = searchParams.get('comment');
  const matchers = searchParams.getAll('matcher');
  const formMatchers = (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_16__.parseQueryParamMatchers)(matchers);

  if (formMatchers.length) {
    defaults.matchers = formMatchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_17__.matcherToMatcherField);
  }

  if (comment) {
    defaults.comment = comment;
  }

  return defaults;
};

const getDefaultFormValues = (searchParams, silence) => {
  const now = new Date();

  if (silence) {
    var _silence$matchers;

    const isExpired = Date.parse(silence.endsAt) < Date.now();
    const interval = isExpired ? {
      start: now,
      end: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.addDurationToDate)(now, {
        hours: 2
      })
    } : {
      start: new Date(silence.startsAt),
      end: new Date(silence.endsAt)
    };
    return {
      id: silence.id,
      startsAt: interval.start.toISOString(),
      endsAt: interval.end.toISOString(),
      comment: silence.comment,
      createdBy: silence.createdBy,
      duration: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.intervalToAbbreviatedDurationString)(interval),
      isRegex: false,
      matchers: ((_silence$matchers = silence.matchers) === null || _silence$matchers === void 0 ? void 0 : _silence$matchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_17__.matcherToMatcherField)) || [],
      matcherName: '',
      matcherValue: '',
      timeZone: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DefaultTimeZone
    };
  } else {
    const endsAt = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.addDurationToDate)(now, {
      hours: 2
    }); // Default time period is now + 2h

    return Object.assign({
      id: '',
      startsAt: now.toISOString(),
      endsAt: endsAt.toISOString(),
      comment: `created ${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)().format('YYYY-MM-DD HH:mm')}`,
      createdBy: _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.bootData.user.name,
      duration: '2h',
      isRegex: false,
      matchers: [{
        name: '',
        value: '',
        operator: app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.MatcherOperator.equal
      }],
      matcherName: '',
      matcherValue: '',
      timeZone: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DefaultTimeZone
    }, defaultsFromQuery(searchParams));
  }
};

const SilencesEditor = ({
  silence,
  alertManagerSourceName
}) => {
  var _formState$errors$com;

  const [urlSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_18__.useURLSearchParams)();
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => getDefaultFormValues(urlSearchParams, silence), [silence, urlSearchParams]);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
    defaultValues
  });
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    loading
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_13__.useUnifiedAlertingSelector)(state => state.updateSilence);
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_15__.useCleanup)(state => state.unifiedAlerting.updateSilence);
  const {
    register,
    handleSubmit,
    formState,
    watch,
    setValue,
    clearErrors
  } = formAPI;

  const onSubmit = data => {
    const {
      id,
      startsAt,
      endsAt,
      comment,
      createdBy,
      matchers: matchersFields
    } = data;
    const matchers = matchersFields.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_17__.matcherFieldToMatcher);
    const payload = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.pickBy)({
      id,
      startsAt,
      endsAt,
      comment,
      createdBy,
      matchers
    }, value => !!value);
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.createOrUpdateSilenceAction)({
      alertManagerSourceName,
      payload,
      exitOnSave: true,
      successMessage: `Silence ${payload.id ? 'updated' : 'created'}`
    }));
  };

  const duration = watch('duration');
  const startsAt = watch('startsAt');
  const endsAt = watch('endsAt'); // Keep duration and endsAt in sync

  const [prevDuration, setPrevDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(duration);
  (0,react_use__WEBPACK_IMPORTED_MODULE_20__["default"])(() => {
    if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(startsAt) && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(endsAt)) {
      if (duration !== prevDuration) {
        setValue('endsAt', (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.addDurationToDate)(new Date(startsAt), (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.parseDuration)(duration))).toISOString());
        setPrevDuration(duration);
      } else {
        const startValue = new Date(startsAt).valueOf();
        const endValue = new Date(endsAt).valueOf();

        if (endValue > startValue) {
          const nextDuration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.intervalToAbbreviatedDurationString)({
            start: new Date(startsAt),
            end: new Date(endsAt)
          });
          setValue('duration', nextDuration);
          setPrevDuration(nextDuration);
        }
      }
    }
  }, 700, [clearErrors, duration, endsAt, prevDuration, setValue, startsAt]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.FormProvider, Object.assign({}, formAPI, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
        label: `${silence ? 'Recreate silence' : 'Create silence'}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_12__.cx)(styles.flexRow, styles.silencePeriod),
          children: [_SilencePeriod || (_SilencePeriod = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_SilencePeriod__WEBPACK_IMPORTED_MODULE_11__.SilencePeriod, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Duration",
            invalid: !!formState.errors.duration,
            error: formState.errors.duration && (formState.errors.duration.type === 'required' ? 'Required field' : formState.errors.duration.message),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
              className: styles.createdBy
            }, register('duration', {
              validate: value => Object.keys((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.parseDuration)(value)).length === 0 ? 'Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)' : undefined
            }), {
              id: "duration"
            }))
          })]
        }), _MatchersField || (_MatchersField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_MatchersField__WEBPACK_IMPORTED_MODULE_6__["default"], {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_12__.cx)(styles.field, styles.textArea),
          label: "Comment",
          required: true,
          error: (_formState$errors$com = formState.errors.comment) === null || _formState$errors$com === void 0 ? void 0 : _formState$errors$com.message,
          invalid: !!formState.errors.comment,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TextArea, Object.assign({}, register('comment', {
            required: {
              value: true,
              message: 'Required.'
            }
          }), {
            rows: 5,
            placeholder: "Details about the silence"
          }))
        }), _MatchedSilencedRules || (_MatchedSilencedRules = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_MatchedSilencedRules__WEBPACK_IMPORTED_MODULE_7__.MatchedSilencedRules, {}))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: styles.flexRow,
        children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          disabled: true,
          icon: "fa fa-spinner",
          variant: "primary",
          children: "Saving..."
        }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "submit",
          children: "Submit"
        }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeAMLink)('alerting/silences', alertManagerSourceName),
          variant: 'secondary',
          fill: "outline",
          children: "Cancel"
        })]
      })]
    })
  }));
};

const getStyles = theme => ({
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_12__.css`
    margin: ${theme.spacing(1, 0)};
  `,
  textArea: _emotion_css__WEBPACK_IMPORTED_MODULE_12__.css`
    max-width: ${theme.breakpoints.values.sm}px;
  `,
  createdBy: _emotion_css__WEBPACK_IMPORTED_MODULE_12__.css`
    width: 200px;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_12__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${theme.spacing(1)};
    }
  `,
  silencePeriod: _emotion_css__WEBPACK_IMPORTED_MODULE_12__.css`
    max-width: ${theme.breakpoints.values.sm}px;
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilencesEditor);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencesFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilencesFilter": () => (/* binding */ SilencesFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/0/cache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _Icon;












const stateOptions = Object.entries(app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_5__.SilenceState).map(([key, value]) => ({
  label: key,
  value
}));

const getQueryStringKey = () => (0,lodash__WEBPACK_IMPORTED_MODULE_7__.uniqueId)('query-string-');

const SilencesFilter = () => {
  const [queryStringKey, setQueryStringKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getQueryStringKey());
  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__.useQueryParams)();
  const {
    queryString,
    silenceState
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.getSilenceFiltersFromUrlParams)(queryParams);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const handleQueryStringChange = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.debounce)(e => {
    const target = e.target;
    setQueryParams({
      queryString: target.value || null
    });
  }, 400);

  const handleSilenceStateChange = state => {
    setQueryParams({
      silenceState: state
    });
  };

  const clearFilters = () => {
    setQueryParams({
      queryString: null,
      silenceState: null
    });
    setTimeout(() => setQueryStringKey(getQueryStringKey()));
  };

  const inputInvalid = queryString && queryString.length > 3 ? (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_6__.parseMatchers)(queryString).length === 0 : false;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: styles.flexRow,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      className: styles.rowChild,
      label: _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_8__.Stack, {
          gap: 0.5,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            children: "Search by matchers"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              children: ["Filter silences by matchers using a comma separated list of matchers, ie:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("pre", {
                children: `severity=critical, instance=~cluster-us-.+`
              })]
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "info-circle",
              size: "sm"
            })
          })]
        })
      })),
      invalid: inputInvalid,
      error: inputInvalid ? 'Query must use valid matcher syntax' : null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
        className: styles.searchInput,
        prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "search"
        })),
        onChange: handleQueryStringChange,
        defaultValue: queryString !== null && queryString !== void 0 ? queryString : '',
        placeholder: "Search",
        "data-testid": "search-query-input"
      }, queryStringKey)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      className: styles.rowChild,
      label: "State",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
        options: stateOptions,
        value: silenceState,
        onChange: handleSilenceStateChange
      })
    }), (queryString || silenceState) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.rowChild,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        icon: "times",
        onClick: clearFilters,
        children: "Clear filters"
      })
    })]
  });
};

const getStyles = theme => ({
  searchInput: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    width: 360px;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${theme.spacing(2)};
    border-bottom: 1px solid ${theme.colors.border.strong};
  `,
  rowChild: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-right: ${theme.spacing(1)};
    margin-bottom: 0;
    max-height: 52px;
  `,
  fieldLabel: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    font-size: 12px;
    font-weight: 500;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _NoSilencesCTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/NoSilencesCTA.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _SilencesFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencesFilter.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _SilenceStateTag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilenceStateTag.tsx");
/* harmony import */ var _Matchers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/Matchers.tsx");
/* harmony import */ var _rules_ActionButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionButton.tsx");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _SilenceDetails__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilenceDetails.tsx");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/0/cache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _SilencesFilter, _span, _br, _ActionButton;



























const SilencesTable = ({
  silences,
  alertManagerAlerts,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_8__.useQueryParams)();
  const filteredSilences = useFilteredSilences(silences);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_21__.getInstancesPermissions)(alertManagerSourceName);
  const {
    silenceState
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.getSilenceFiltersFromUrlParams)(queryParams);
  const showExpiredSilencesBanner = !!filteredSilences.length && (silenceState === undefined || silenceState === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_4__.SilenceState.Expired);
  const columns = useColumns(alertManagerSourceName);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const findSilencedAlerts = id => {
      return alertManagerAlerts.filter(alert => alert.status.silencedBy.includes(id));
    };

    return filteredSilences.map(silence => {
      const silencedAlerts = findSilencedAlerts(silence.id);
      return {
        id: silence.id,
        data: Object.assign({}, silence, {
          silencedAlerts
        })
      };
    });
  }, [filteredSilences, alertManagerAlerts]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
    "data-testid": "silences-table",
    children: [!!silences.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
      children: [_SilencesFilter || (_SilencesFilter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_SilencesFilter__WEBPACK_IMPORTED_MODULE_9__.SilencesFilter, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_20__.Authorize, {
        actions: [permissions.create],
        fallback: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.isEditor,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: styles.topButtonContainer,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeAMLink)('/alerting/silence/new', alertManagerSourceName),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              className: styles.addNewSilence,
              icon: "plus",
              children: "New Silence"
            })
          })
        })
      }), !!items.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_11__.DynamicTable, {
          items: items,
          cols: columns,
          isExpandable: true,
          renderExpandedContent: ({
            data
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_SilenceDetails__WEBPACK_IMPORTED_MODULE_18__.SilenceDetails, {
            silence: data
          })
        }), showExpiredSilencesBanner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
          className: styles.callout,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            className: styles.calloutIcon,
            name: "info-circle"
          }), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
            children: "Expired silences are automatically deleted after 5 days."
          }))]
        })]
      }) : 'No matching silences found']
    }), !silences.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_NoSilencesCTA__WEBPACK_IMPORTED_MODULE_5__.NoSilencesSplash, {
      alertManagerSourceName: alertManagerSourceName
    })]
  });
};

const useFilteredSilences = silences => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_8__.useQueryParams)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const {
      queryString,
      silenceState
    } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.getSilenceFiltersFromUrlParams)(queryParams);
    const silenceIdsString = queryParams === null || queryParams === void 0 ? void 0 : queryParams.silenceIds;
    return silences.filter(silence => {
      if (typeof silenceIdsString === 'string') {
        const idsIncluded = silenceIdsString.split(',').includes(silence.id);

        if (!idsIncluded) {
          return false;
        }
      }

      if (queryString) {
        const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_10__.parseMatchers)(queryString);
        const matchersMatch = matchers.every(matcher => {
          var _silence$matchers;

          return (_silence$matchers = silence.matchers) === null || _silence$matchers === void 0 ? void 0 : _silence$matchers.some(({
            name,
            value,
            isEqual,
            isRegex
          }) => matcher.name === name && matcher.value === value && matcher.isEqual === isEqual && matcher.isRegex === isRegex);
        });

        if (!matchersMatch) {
          return false;
        }
      }

      if (silenceState) {
        const stateMatches = silence.status.state === silenceState;

        if (!stateMatches) {
          return false;
        }
      }

      return true;
    });
  }, [queryParams, silences]);
};

const getStyles = theme => ({
  topButtonContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,
  addNewSilence: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin: ${theme.spacing(2, 0)};
  `,
  callout: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    background-color: ${theme.colors.background.secondary};
    border-top: 3px solid ${theme.colors.info.border};
    border-radius: 2px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${theme.spacing(2)};

    & > * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  calloutIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    color: ${theme.colors.info.text};
  `,
  editButton: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-left: ${theme.spacing(0.5)};
  `
});

function useColumns(alertManagerSourceName) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_21__.getInstancesPermissions)(alertManagerSourceName);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const handleExpireSilenceClick = id => {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_17__.expireSilenceAction)(alertManagerSourceName, id));
    };

    const showActions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasAccess(permissions.update, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.isEditor);
    const columns = [{
      id: 'state',
      label: 'State',
      renderCell: function renderStateTag({
        data: {
          status
        }
      }) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_SilenceStateTag__WEBPACK_IMPORTED_MODULE_12__.SilenceStateTag, {
          state: status.state
        });
      },
      size: '88px'
    }, {
      id: 'matchers',
      label: 'Matching labels',
      renderCell: function renderMatchers({
        data: {
          matchers
        }
      }) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Matchers__WEBPACK_IMPORTED_MODULE_13__.Matchers, {
          matchers: matchers || []
        });
      },
      size: 9
    }, {
      id: 'alerts',
      label: 'Alerts',
      renderCell: function renderSilencedAlerts({
        data: {
          silencedAlerts
        }
      }) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
          "data-testid": "alerts",
          children: silencedAlerts.length
        });
      },
      size: 1
    }, {
      id: 'schedule',
      label: 'Schedule',
      renderCell: function renderSchedule({
        data: {
          startsAt,
          endsAt
        }
      }) {
        const startsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(startsAt);
        const endsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(endsAt);
        const dateDisplayFormat = 'YYYY-MM-DD HH:mm';
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
          children: [' ', startsAtDate === null || startsAtDate === void 0 ? void 0 : startsAtDate.format(dateDisplayFormat), " ", '-', _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("br", {})), endsAtDate === null || endsAtDate === void 0 ? void 0 : endsAtDate.format(dateDisplayFormat)]
        });
      },
      size: '150px'
    }];

    if (showActions) {
      columns.push({
        id: 'actions',
        label: 'Actions',
        renderCell: function renderActions({
          data: silence
        }) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_19__.Stack, {
            gap: 0.5,
            children: [silence.status.state === 'expired' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
              href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeAMLink)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
              children: _ActionButton || (_ActionButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_rules_ActionButton__WEBPACK_IMPORTED_MODULE_14__.ActionButton, {
                icon: "sync",
                children: "Recreate"
              }))
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_rules_ActionButton__WEBPACK_IMPORTED_MODULE_14__.ActionButton, {
              icon: "bell",
              onClick: () => handleExpireSilenceClick(silence.id),
              children: "Unsilence"
            }), silence.status.state !== 'expired' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
              className: styles.editButton,
              to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeAMLink)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
              icon: "pen",
              tooltip: "edit"
            })]
          });
        },
        size: '147px'
      });
    }

    return columns;
  }, [alertManagerSourceName, dispatch, styles, permissions]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilencesTable);

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

/***/ "./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flattenGrafanaManagedRules": () => (/* binding */ flattenGrafanaManagedRules),
/* harmony export */   "sortRulesByName": () => (/* binding */ sortRulesByName),
/* harmony export */   "useCombinedRuleNamespaces": () => (/* binding */ useCombinedRuleNamespaces)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




// this little monster combines prometheus rules and ruler rules to produce a unified data structure
// can limit to a single rules source
function useCombinedRuleNamespaces(rulesSourceName) {
  const promRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.rulerRules); // cache results per rules source, so we only recalculate those for which results have actually changed

  const cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const rulesSources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (rulesSourceName) {
      const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getRulesSourceByName)(rulesSourceName);

      if (!rulesSource) {
        throw new Error(`Unknown rules source: ${rulesSourceName}`);
      }

      return [rulesSource];
    }

    return (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getAllRulesSources)();
  }, [rulesSourceName]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => rulesSources.map(rulesSource => {
    var _promRulesResponses$r, _rulerRulesResponses$;

    const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isCloudRulesSource)(rulesSource) ? rulesSource.name : rulesSource;
    const promRules = (_promRulesResponses$r = promRulesResponses[rulesSourceName]) === null || _promRulesResponses$r === void 0 ? void 0 : _promRulesResponses$r.result;
    const rulerRules = (_rulerRulesResponses$ = rulerRulesResponses[rulesSourceName]) === null || _rulerRulesResponses$ === void 0 ? void 0 : _rulerRulesResponses$.result;
    const cached = cache.current[rulesSourceName];

    if (cached && cached.promRules === promRules && cached.rulerRules === rulerRules) {
      return cached.result;
    }

    const namespaces = {}; // first get all the ruler rules in

    Object.entries(rulerRules || {}).forEach(([namespaceName, groups]) => {
      const namespace = {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      namespaces[namespaceName] = namespace;
      addRulerGroupsToCombinedNamespace(namespace, groups);
    }); // then correlate with prometheus rules

    promRules === null || promRules === void 0 ? void 0 : promRules.forEach(({
      name: namespaceName,
      groups
    }) => {
      const ns = namespaces[namespaceName] = namespaces[namespaceName] || {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      addPromGroupsToCombinedNamespace(ns, groups);
    });
    const result = Object.values(namespaces);
    cache.current[rulesSourceName] = {
      promRules,
      rulerRules,
      result
    };
    return result;
  }).flat(), [promRulesResponses, rulerRulesResponses, rulesSources]);
} // merge all groups in case of grafana managed, essentially treating namespaces (folders) as groups

function flattenGrafanaManagedRules(namespaces) {
  return namespaces.map(namespace => {
    const newNamespace = Object.assign({}, namespace, {
      groups: []
    }); // add default group with ungrouped rules

    newNamespace.groups.push({
      name: 'default',
      rules: sortRulesByName(namespace.groups.flatMap(group => group.rules))
    });
    return newNamespace;
  });
}
function sortRulesByName(rules) {
  return rules.sort((a, b) => a.name.localeCompare(b.name));
}

function addRulerGroupsToCombinedNamespace(namespace, groups) {
  namespace.groups = groups.map(group => {
    const combinedGroup = {
      name: group.name,
      interval: group.interval,
      source_tenants: group.source_tenants,
      rules: []
    };
    combinedGroup.rules = group.rules.map(rule => rulerRuleToCombinedRule(rule, namespace, combinedGroup));
    return combinedGroup;
  });
}

function addPromGroupsToCombinedNamespace(namespace, groups) {
  groups.forEach(group => {
    var _group$rules;

    let combinedGroup = namespace.groups.find(g => g.name === group.name);

    if (!combinedGroup) {
      combinedGroup = {
        name: group.name,
        rules: []
      };
      namespace.groups.push(combinedGroup);
    }

    ((_group$rules = group.rules) !== null && _group$rules !== void 0 ? _group$rules : []).forEach(rule => {
      const existingRule = getExistingRuleInGroup(rule, combinedGroup, namespace.rulesSource);

      if (existingRule) {
        existingRule.promRule = rule;
      } else {
        combinedGroup.rules.push(promRuleToCombinedRule(rule, namespace, combinedGroup));
      }
    });
  });
}

function promRuleToCombinedRule(rule, namespace, group) {
  return {
    name: rule.name,
    query: rule.query,
    labels: rule.labels || {},
    annotations: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {},
    promRule: rule,
    namespace: namespace,
    group
  };
}

function rulerRuleToCombinedRule(rule, namespace, group) {
  return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRulerRule)(rule) ? {
    name: rule.alert,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  } : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isRecordingRulerRule)(rule) ? {
    name: rule.record,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: {},
    rulerRule: rule,
    namespace,
    group
  } : {
    name: rule.grafana_alert.title,
    query: '',
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  };
} // find existing rule in group that matches the given prom rule


function getExistingRuleInGroup(rule, group, rulesSource) {
  var _rules$find;

  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isGrafanaRulesSource)(rulesSource)) {
    // assume grafana groups have only the one rule. check name anyway because paranoid
    return group.rules.find(existingRule => existingRule.name === rule.name);
  }

  return (// try finding a rule that matches name, labels, annotations and query
    (_rules$find = group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, true))) !== null && _rules$find !== void 0 ? _rules$find : // if that fails, try finding a rule that only matches name, labels and annotations.
    // loki & prom can sometimes modify the query so it doesnt match, eg `2 > 1` becomes `1`
    group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, false))
  );
}

function isCombinedRuleEqualToPromRule(combinedRule, rule, checkQuery = true) {
  if (combinedRule.name === rule.name) {
    return JSON.stringify([checkQuery ? hashQuery(combinedRule.query) : '', combinedRule.labels, combinedRule.annotations]) === JSON.stringify([checkQuery ? hashQuery(rule.query) : '', rule.labels || {}, (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {}]);
  }

  return false;
} // there can be slight differences in how prom & ruler render a query, this will hash them accounting for the differences


function hashQuery(query) {
  // one of them might be wrapped in parens
  if (query.length > 1 && query[0] === '(' && query[query.length - 1] === ')') {
    query = query.slice(1, -1);
  } // whitespace could be added or removed


  query = query.replace(/\s|\n/g, ''); // labels matchers can be reordered, so sort the enitre string, esentially comparing just the character counts

  return query.split('').sort().join('');
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

/***/ "./public/app/features/alerting/unified/styles/table.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlertTableStyles": () => (/* binding */ getAlertTableStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getAlertTableStyles = theme => ({
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    border-radius: ${theme.shape.borderRadius()};
    border: solid 1px ${theme.colors.border.weak};
    background-color: ${theme.colors.background.secondary};

    th {
      padding: ${theme.spacing(1)};
    }

    td {
      padding: 0 ${theme.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,
  evenRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.primary};
  `,
  colExpand: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 36px;
  `,
  actionsCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${theme.spacing(0.5)};
    }
  `
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEVBQUVwRSw2Q0FBSTtBQUNiO0FBQ0EscUJBQXFCTyxLQUFLLENBQUNvWCxLQUFOLENBQVlDLFlBQVosRUFBMkI7QUFDaEQsd0JBQXdCclgsS0FBSyxDQUFDa0gsTUFBTixDQUFhNkosTUFBYixDQUFvQnVHLElBQUs7QUFDakQsd0JBQXdCdFgsS0FBSyxDQUFDa0gsTUFBTixDQUFhQyxVQUFiLENBQXdCQyxTQUFVO0FBQzFEO0FBQ0E7QUFDQSxpQkFBaUJwSCxLQUFLLENBQUNrRixPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUJsRixLQUFLLENBQUNrRixPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FsQjhEO0FBbUI1RDZGLEVBQUFBLE9BQU8sRUFBRXRMLDZDQUFJO0FBQ2Ysd0JBQXdCTyxLQUFLLENBQUNrSCxNQUFOLENBQWFDLFVBQWIsQ0FBd0I2QixPQUFRO0FBQ3hELEdBckI4RDtBQXNCNUQyQixFQUFBQSxTQUFTLEVBQUVsTCw2Q0FBSTtBQUNqQjtBQUNBLEdBeEI4RDtBQXlCNUQ4WCxFQUFBQSxXQUFXLEVBQUU5WCw2Q0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCTyxLQUFLLENBQUNrRixPQUFOLENBQWMsR0FBZCxDQUFtQjtBQUN4QztBQUNBO0FBakM4RCxDQUEzQixDQUE1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL1NpbGVuY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0F1dGhvcml6ZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FjdGlvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FjdGlvbkljb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9BbUFsZXJ0U3RhdGVUYWcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9NYXRjaGVkU2lsZW5jZWRSdWxlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL01hdGNoZXJzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvc2lsZW5jZXMvTWF0Y2hlcnNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL05vU2lsZW5jZXNDVEEudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9TaWxlbmNlRGV0YWlscy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL1NpbGVuY2VQZXJpb2QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9TaWxlbmNlU3RhdGVUYWcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9TaWxlbmNlZEFsZXJ0c1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvc2lsZW5jZXMvU2lsZW5jZWRBbGVydHNUYWJsZVJvdy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL1NpbGVuY2VzRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvc2lsZW5jZXMvU2lsZW5jZXNGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9TaWxlbmNlc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlVVJMU2VhcmNoUGFyYW1zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvc3R5bGVzL3RhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjbGVhblVwQWN0aW9uLCBTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vYWN0aW9ucy9jbGVhblVwJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNsZWFudXA8VD4oc3RhdGVTZWxlY3RvcjogU3RhdGVTZWxlY3RvcjxUPikge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIC8vYml0IG9mIGEgaGFjayB0byB1bmJ1cmRlbiB1c2VyIGZyb20gaGF2aW5nIHRvIHdyYXAgc3RhdGVTZWxjZXRvciBpbiBhIHVzZUNhbGxiYWNrLiBPdGhlcndpc2UgY2xlYW51cCB3b3VsZCBoYXBwZW4gb24gZXZlcnkgcmVuZGVyXG4gIGNvbnN0IHNlbGVjdG9yUmVmID0gdXNlUmVmKHN0YXRlU2VsZWN0b3IpO1xuICBzZWxlY3RvclJlZi5jdXJyZW50ID0gc3RhdGVTZWxlY3RvcjtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goY2xlYW5VcEFjdGlvbih7IHN0YXRlU2VsZWN0b3I6IHNlbGVjdG9yUmVmLmN1cnJlbnQgfSkpO1xuICAgIH07XG4gIH0sIFtkaXNwYXRjaF0pO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQsIExvYWRpbmdQbGFjZWhvbGRlciwgd2l0aEVycm9yQm91bmRhcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlLCBSb3V0ZUNoaWxkcmVuUHJvcHMsIFN3aXRjaCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEFsZXJ0aW5nUGFnZVdyYXBwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlcic7XG5pbXBvcnQgU2lsZW5jZXNUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvc2lsZW5jZXMvU2lsZW5jZXNUYWJsZSc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBmZXRjaEFtQWxlcnRzQWN0aW9uLCBmZXRjaFNpbGVuY2VzQWN0aW9uIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IFNJTEVOQ0VTX1BPTExfSU5URVJWQUxfTVMgfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBc3luY1JlcXVlc3RTdGF0ZSwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgU2lsZW5jZXNFZGl0b3IgZnJvbSAnLi9jb21wb25lbnRzL3NpbGVuY2VzL1NpbGVuY2VzRWRpdG9yJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydE1hbmFnZXJQaWNrZXInO1xuaW1wb3J0IHsgU2lsZW5jZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi9jb21wb25lbnRzL0F1dGhvcml6ZSc7XG5cbmNvbnN0IFNpbGVuY2VzOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIHNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWVdID0gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSgpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHNpbGVuY2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaWxlbmNlcyk7XG4gIGNvbnN0IGFsZXJ0c1JlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbUFsZXJ0cyk7XG4gIGNvbnN0IGFsZXJ0c1JlcXVlc3QgPSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lXG4gICAgPyBhbGVydHNSZXF1ZXN0c1thbGVydE1hbmFnZXJTb3VyY2VOYW1lXSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGVcbiAgICA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IGlzUm9vdCA9IGxvY2F0aW9uLnBhdGhuYW1lLmVuZHNXaXRoKCcvYWxlcnRpbmcvc2lsZW5jZXMnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGZldGNoQWxsKCkge1xuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpIHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTaWxlbmNlc0FjdGlvbihhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSk7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQW1BbGVydHNBY3Rpb24oYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaEFsbCgpO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gZmV0Y2hBbGwsIFNJTEVOQ0VTX1BPTExfSU5URVJWQUxfTVMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgZGlzcGF0Y2hdKTtcblxuICBjb25zdCB7IHJlc3VsdCwgbG9hZGluZywgZXJyb3IgfTogQXN5bmNSZXF1ZXN0U3RhdGU8U2lsZW5jZVtdPiA9XG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgc2lsZW5jZXNbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0pIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcblxuICBjb25zdCBnZXRTaWxlbmNlQnlJZCA9IHVzZUNhbGxiYWNrKChpZDogc3RyaW5nKSA9PiByZXN1bHQgJiYgcmVzdWx0LmZpbmQoKHNpbGVuY2UpID0+IHNpbGVuY2UuaWQgPT09IGlkKSwgW3Jlc3VsdF0pO1xuXG4gIGlmICghYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvYWxlcnRpbmcvc2lsZW5jZXNcIiAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFsZXJ0aW5nUGFnZVdyYXBwZXIgcGFnZUlkPVwic2lsZW5jZXNcIj5cbiAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W0FjY2Vzc0NvbnRyb2xBY3Rpb24uQWxlcnRpbmdJbnN0YW5jZXNFeHRlcm5hbFJlYWRdfT5cbiAgICAgICAgPEFsZXJ0TWFuYWdlclBpY2tlciBkaXNhYmxlZD17IWlzUm9vdH0gY3VycmVudD17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gb25DaGFuZ2U9e3NldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IC8+XG4gICAgICA8L0F1dGhvcml6ZT5cbiAgICAgIHtlcnJvciAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBsb2FkaW5nIHNpbGVuY2VzXCI+XG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3IuJ31cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICl9XG4gICAgICB7YWxlcnRzUmVxdWVzdD8uZXJyb3IgJiYgIWFsZXJ0c1JlcXVlc3Q/LmxvYWRpbmcgJiYgKFxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiIHRpdGxlPVwiRXJyb3IgbG9hZGluZyBBbGVydG1hbmFnZXIgYWxlcnRzXCI+XG4gICAgICAgICAge2FsZXJ0c1JlcXVlc3QuZXJyb3I/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3IuJ31cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICl9XG4gICAgICB7bG9hZGluZyAmJiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJsb2FkaW5nIHNpbGVuY2VzLi4uXCIgLz59XG4gICAgICB7cmVzdWx0ICYmICFlcnJvciAmJiAoXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYWxlcnRpbmcvc2lsZW5jZXNcIj5cbiAgICAgICAgICAgIDxTaWxlbmNlc1RhYmxlXG4gICAgICAgICAgICAgIHNpbGVuY2VzPXtyZXN1bHR9XG4gICAgICAgICAgICAgIGFsZXJ0TWFuYWdlckFsZXJ0cz17YWxlcnRzUmVxdWVzdD8ucmVzdWx0ID8/IFtdfVxuICAgICAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FsZXJ0aW5nL3NpbGVuY2UvbmV3XCI+XG4gICAgICAgICAgICA8U2lsZW5jZXNFZGl0b3IgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FsZXJ0aW5nL3NpbGVuY2UvOmlkL2VkaXRcIj5cbiAgICAgICAgICAgIHsoeyBtYXRjaCB9OiBSb3V0ZUNoaWxkcmVuUHJvcHM8eyBpZDogc3RyaW5nIH0+KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgbWF0Y2g/LnBhcmFtcy5pZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8U2lsZW5jZXNFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgc2lsZW5jZT17Z2V0U2lsZW5jZUJ5SWQobWF0Y2gucGFyYW1zLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICl9XG4gICAgPC9BbGVydGluZ1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVycm9yQm91bmRhcnkoU2lsZW5jZXMsIHsgc3R5bGU6ICdwYWdlJyB9KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VJZDogc3RyaW5nO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRpbmdQYWdlV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VJZCwgaXNMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChcbiAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KSxcbiAgICBwYWdlSWRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+e2NoaWxkcmVufTwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuXG50eXBlIFByb3BzID0ge1xuICBhY3Rpb25zOiBBY2Nlc3NDb250cm9sQWN0aW9uW107XG4gIGZhbGxiYWNrPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBBdXRob3JpemU6IEZDPFByb3BzPiA9ICh7IGFjdGlvbnMsIGNoaWxkcmVuLCBmYWxsYmFjayA9IHRydWUgfSkgPT4ge1xuICBpZiAoYWN0aW9ucy5zb21lKChhY3Rpb24pID0+IGNvbnRleHRTcnYuaGFzQWNjZXNzKGFjdGlvbiwgZmFsbGJhY2spKSkge1xuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBCdXR0b24sIEJ1dHRvblByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbnR5cGUgUHJvcHMgPSBPbWl0PEJ1dHRvblByb3BzLCAndmFyaWFudCcgfCAnc2l6ZSc+O1xuXG5leHBvcnQgY29uc3QgQWN0aW9uQnV0dG9uOiBGQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUsIC4uLnJlc3RQcm9wcyB9KSA9PiAoXG4gIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJ4c1wiIGNsYXNzTmFtZT17Y3godXNlU3R5bGVzKGdldFN0eWxlKSwgY2xhc3NOYW1lKX0gey4uLnJlc3RQcm9wc30gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZSA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiBjc3NgXG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG5gO1xuIiwiaW1wb3J0IHsgSWNvbk5hbWUsIFRvb2x0aXAsIExpbmtCdXR0b24sIEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFBvcG92ZXJDb250ZW50LCBUb29sdGlwUGxhY2VtZW50IH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvVG9vbHRpcCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRvb2x0aXA6IFBvcG92ZXJDb250ZW50O1xuICBpY29uOiBJY29uTmFtZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB0b29sdGlwUGxhY2VtZW50PzogVG9vbHRpcFBsYWNlbWVudDtcbiAgdG8/OiBzdHJpbmc7XG4gIHRhcmdldD86IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gICdkYXRhLXRlc3RpZCc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25JY29uOiBGQzxQcm9wcz4gPSAoe1xuICB0b29sdGlwLFxuICBpY29uLFxuICB0byxcbiAgdGFyZ2V0LFxuICBvbkNsaWNrLFxuICBjbGFzc05hbWUsXG4gIHRvb2x0aXBQbGFjZW1lbnQgPSAndG9wJyxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICBjb25zdCBhcmlhTGFiZWwgPSB0eXBlb2YgdG9vbHRpcCA9PT0gJ3N0cmluZycgPyB0b29sdGlwIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXAgY29udGVudD17dG9vbHRpcH0gcGxhY2VtZW50PXt0b29sdGlwUGxhY2VtZW50fT5cbiAgICAgIHt0byA/IChcbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBocmVmPXt0b31cbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIHRhcmdldD17dGFyZ2V0fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgQWxlcnRTdGF0ZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0YXRlLCBTdGF0ZVRhZyB9IGZyb20gJy4uL1N0YXRlVGFnJztcblxuY29uc3QgYWxlcnRTdGF0ZVRvU3RhdGU6IFJlY29yZDxBbGVydFN0YXRlLCBTdGF0ZT4gPSB7XG4gIFtBbGVydFN0YXRlLkFjdGl2ZV06ICdiYWQnLFxuICBbQWxlcnRTdGF0ZS5VbnByb2Nlc3NlZF06ICduZXV0cmFsJyxcbiAgW0FsZXJ0U3RhdGUuU3VwcHJlc3NlZF06ICdpbmZvJyxcbn07XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHN0YXRlOiBBbGVydFN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgQW1BbGVydFN0YXRlVGFnOiBGQzxQcm9wcz4gPSAoeyBzdGF0ZSB9KSA9PiA8U3RhdGVUYWcgc3RhdGU9e2FsZXJ0U3RhdGVUb1N0YXRlW3N0YXRlXX0+e3N0YXRlfTwvU3RhdGVUYWc+O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBkYXRlVGltZSwgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGUsIER5bmFtaWNUYWJsZUNvbHVtblByb3BzLCBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9EeW5hbWljVGFibGUnO1xuaW1wb3J0IHsgdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMnO1xuaW1wb3J0IHsgZmluZEFsZXJ0SW5zdGFuY2VzV2l0aE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2hlcnMnO1xuaW1wb3J0IHsgZmV0Y2hBbGxQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQWxlcnQsIEFsZXJ0aW5nUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IE1hdGNoZXJGaWVsZFZhbHVlLCBTaWxlbmNlRm9ybUZpZWxkcyB9IGZyb20gJy4uLy4uL3R5cGVzL3NpbGVuY2UtZm9ybSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IEFsZXJ0U3RhdGVUYWcgfSBmcm9tICcuLi9ydWxlcy9BbGVydFN0YXRlVGFnJztcbmltcG9ydCB7IEFsZXJ0TGFiZWxzIH0gZnJvbSAnLi4vQWxlcnRMYWJlbHMnO1xuXG50eXBlIE1hdGNoZWRSdWxlc1RhYmxlSXRlbVByb3BzID0gRHluYW1pY1RhYmxlSXRlbVByb3BzPHtcbiAgbWF0Y2hlZEluc3RhbmNlOiBBbGVydDtcbn0+O1xudHlwZSBNYXRjaGVkUnVsZXNUYWJsZUNvbHVtblByb3BzID0gRHluYW1pY1RhYmxlQ29sdW1uUHJvcHM8eyBtYXRjaGVkSW5zdGFuY2U6IEFsZXJ0IH0+O1xuXG5leHBvcnQgY29uc3QgTWF0Y2hlZFNpbGVuY2VkUnVsZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFttYXRjaGVkQWxlcnRSdWxlcywgc2V0TWF0Y2hlZEFsZXJ0UnVsZXNdID0gdXNlU3RhdGU8TWF0Y2hlZFJ1bGVzVGFibGVJdGVtUHJvcHNbXT4oW10pO1xuICBjb25zdCBmb3JtQXBpID0gdXNlRm9ybUNvbnRleHQ8U2lsZW5jZUZvcm1GaWVsZHM+KCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyB3YXRjaCB9ID0gZm9ybUFwaTtcbiAgY29uc3QgbWF0Y2hlcnM6IE1hdGNoZXJGaWVsZFZhbHVlW10gPSB3YXRjaCgnbWF0Y2hlcnMnKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBjb2x1bW5zID0gdXNlQ29sdW1ucygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hBbGxQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbigpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3QgY29tYmluZWROYW1lc3BhY2VzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcygpO1xuICB1c2VEZWJvdW5jZShcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVkSW5zdGFuY2VzID0gY29tYmluZWROYW1lc3BhY2VzLmZsYXRNYXAoKG5hbWVzcGFjZSkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZXNwYWNlLmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4ge1xuICAgICAgICAgIHJldHVybiBncm91cC5ydWxlc1xuICAgICAgICAgICAgLm1hcCgoY29tYmluZWRSdWxlKSA9PiBjb21iaW5lZFJ1bGUucHJvbVJ1bGUpXG4gICAgICAgICAgICAuZmlsdGVyKChydWxlKTogcnVsZSBpcyBBbGVydGluZ1J1bGUgPT4gaXNBbGVydGluZ1J1bGUocnVsZSkpXG4gICAgICAgICAgICAuZmxhdE1hcCgocnVsZSkgPT4gZmluZEFsZXJ0SW5zdGFuY2VzV2l0aE1hdGNoZXJzKHJ1bGUuYWxlcnRzID8/IFtdLCBtYXRjaGVycykpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0TWF0Y2hlZEFsZXJ0UnVsZXMobWF0Y2hlZEluc3RhbmNlcyk7XG4gICAgfSxcbiAgICA1MDAsXG4gICAgW2NvbWJpbmVkTmFtZXNwYWNlcywgbWF0Y2hlcnNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgQWZmZWN0ZWQgYWxlcnQgaW5zdGFuY2VzXG4gICAgICAgIHttYXRjaGVkQWxlcnRSdWxlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxCYWRnZSBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0gY29sb3I9XCJibHVlXCIgdGV4dD17bWF0Y2hlZEFsZXJ0UnVsZXMubGVuZ3RofSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgICAge21hdGNoZXJzLmV2ZXJ5KChtYXRjaGVyKSA9PiAhbWF0Y2hlci52YWx1ZSAmJiAhbWF0Y2hlci5uYW1lKSA/IChcbiAgICAgICAgICA8c3Bhbj5BZGQgYSB2YWxpZCBtYXRjaGVyIHRvIHNlZSBhZmZlY3RlZCBhbGVydHM8L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEeW5hbWljVGFibGUgaXRlbXM9e21hdGNoZWRBbGVydFJ1bGVzLnNsaWNlKDAsIDUpID8/IFtdfSBpc0V4cGFuZGFibGU9e2ZhbHNlfSBjb2xzPXtjb2x1bW5zfSAvPlxuICAgICAgICAgICAge21hdGNoZWRBbGVydFJ1bGVzLmxlbmd0aCA+IDUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vcmVNYXRjaGVzfT5hbmQge21hdGNoZWRBbGVydFJ1bGVzLmxlbmd0aCAtIDV9IG1vcmU8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZUNvbHVtbnMoKTogTWF0Y2hlZFJ1bGVzVGFibGVDb2x1bW5Qcm9wc1tdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZDogJ3N0YXRlJyxcbiAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgcmVuZGVyQ2VsbDogZnVuY3Rpb24gcmVuZGVyU3RhdGVUYWcoeyBkYXRhOiB7IG1hdGNoZWRJbnN0YW5jZSB9IH0pIHtcbiAgICAgICAgcmV0dXJuIDxBbGVydFN0YXRlVGFnIHN0YXRlPXttYXRjaGVkSW5zdGFuY2Uuc3RhdGV9IC8+O1xuICAgICAgfSxcbiAgICAgIHNpemU6ICcxNjBweCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2xhYmVscycsXG4gICAgICBsYWJlbDogJ0xhYmVscycsXG4gICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJOYW1lKHsgZGF0YTogeyBtYXRjaGVkSW5zdGFuY2UgfSB9KSB7XG4gICAgICAgIHJldHVybiA8QWxlcnRMYWJlbHMgbGFiZWxzPXttYXRjaGVkSW5zdGFuY2UubGFiZWxzfSAvPjtcbiAgICAgIH0sXG4gICAgICBzaXplOiAnMjUwcHgnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjcmVhdGVkJyxcbiAgICAgIGxhYmVsOiAnQ3JlYXRlZCcsXG4gICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJTdW1tYXJ5KHsgZGF0YTogeyBtYXRjaGVkSW5zdGFuY2UgfSB9KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHttYXRjaGVkSW5zdGFuY2UuYWN0aXZlQXQuc3RhcnRzV2l0aCgnMDAwMScpXG4gICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgIDogZGF0ZVRpbWUobWF0Y2hlZEluc3RhbmNlLmFjdGl2ZUF0KS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBzaXplOiAnNDAwcHgnLFxuICAgIH0sXG4gIF07XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgdGFibGU6IGNzc2BcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLmxnfXB4O1xuICBgLFxuICBtb3JlTWF0Y2hlczogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHRpdGxlOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBgLFxuICBiYWRnZTogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgVGFnTGlzdCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE1hdGNoZXIgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgeyBtYXRjaGVyVG9PcGVyYXRvciB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5cbnR5cGUgTWF0Y2hlcnNQcm9wcyA9IHsgbWF0Y2hlcnM6IE1hdGNoZXJbXSB9O1xuXG5leHBvcnQgY29uc3QgTWF0Y2hlcnM6IEZDPE1hdGNoZXJzUHJvcHM+ID0gKHsgbWF0Y2hlcnMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUYWdMaXN0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9XG4gICAgICAgIHRhZ3M9e21hdGNoZXJzLm1hcCgobWF0Y2hlcikgPT4gYCR7bWF0Y2hlci5uYW1lfSR7bWF0Y2hlclRvT3BlcmF0b3IobWF0Y2hlcil9JHttYXRjaGVyLnZhbHVlfWApfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gIHRhZ3M6IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIElucHV0LCBJY29uQnV0dG9uLCBJbnB1dENvbnRyb2wsIHVzZVN0eWxlczIsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIHVzZUZpZWxkQXJyYXkgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgU2lsZW5jZUZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi90eXBlcy9zaWxlbmNlLWZvcm0nO1xuaW1wb3J0IHsgTWF0Y2hlck9wZXJhdG9yIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgbWF0Y2hlckZpZWxkT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgTWF0Y2hlcnNGaWVsZDogRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBmb3JtQXBpID0gdXNlRm9ybUNvbnRleHQ8U2lsZW5jZUZvcm1GaWVsZHM+KCk7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sLFxuICAgIHJlZ2lzdGVyLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IGZvcm1BcGk7XG5cbiAgY29uc3QgeyBmaWVsZHM6IG1hdGNoZXJzID0gW10sIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5PFNpbGVuY2VGb3JtRmllbGRzPih7IG5hbWU6ICdtYXRjaGVycycgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCBzdHlsZXMud3JhcHBlcil9PlxuICAgICAgPEZpZWxkIGxhYmVsPVwiTWF0Y2hpbmcgbGFiZWxzXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXRjaGVyc30+XG4gICAgICAgICAgICB7bWF0Y2hlcnMubWFwKChtYXRjaGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fSBrZXk9e2Ake21hdGNoZXIuaWR9YH0gZGF0YS10ZXN0aWQ9XCJtYXRjaGVyXCI+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzPy5tYXRjaGVycz8uW2luZGV4XT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8ubWF0Y2hlcnM/LltpbmRleF0/Lm5hbWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgbWF0Y2hlcnMuJHtpbmRleH0ubmFtZWAgYXMgY29uc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWF0Y2hlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD17J09wZXJhdG9yJ30+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZS52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hdGNoZXJPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXttYXRjaGVyRmllbGRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWF0Y2hlci5vcGVyYXRvciB8fCBtYXRjaGVyRmllbGRPcHRpb25zWzBdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BtYXRjaGVycy4ke2luZGV4fS5vcGVyYXRvcmAgYXMgY29uc3R9XG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0gfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzPy5tYXRjaGVycz8uW2luZGV4XT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/Lm1hdGNoZXJzPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGBtYXRjaGVycy4ke2luZGV4fS52YWx1ZWAgYXMgY29uc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWF0Y2hlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICB7bWF0Y2hlcnMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJSZW1vdmUgbWF0Y2hlclwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17J3RyYXNoLWFsdCd9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3TWF0Y2hlciA9IHsgbmFtZTogJycsIHZhbHVlOiAnJywgb3BlcmF0b3I6IE1hdGNoZXJPcGVyYXRvci5lcXVhbCB9O1xuICAgICAgICAgICAgICBhcHBlbmQobmV3TWF0Y2hlcik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBtYXRjaGVyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GaWVsZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXBwZXI6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9ICR7dGhlbWUuc3BhY2luZygxKX0gMCAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgJiA+ICogKyAqIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICB9XG4gICAgYCxcbiAgICByZW1vdmVCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIuNSl9O1xuICAgIGAsXG4gICAgbWF0Y2hlck9wdGlvbnM6IGNzc2BcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7XG4gICAgYCxcbiAgICBtYXRjaGVyczogY3NzYFxuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5zbX1weDtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEpfSAwO1xuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hlcnNGaWVsZDtcbiIsImltcG9ydCB7IENhbGxUb0FjdGlvbkNhcmQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0SW5zdGFuY2VzUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBOb1NpbGVuY2VzU3BsYXNoOiBGQzxQcm9wcz4gPSAoeyBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0pID0+IHtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXRJbnN0YW5jZXNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICBpZiAoY29udGV4dFNydi5oYXNBY2Nlc3MocGVybWlzc2lvbnMuY3JlYXRlLCBjb250ZXh0U3J2LmlzRWRpdG9yKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgIHRpdGxlPVwiWW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgc2lsZW5jZXMgeWV0XCJcbiAgICAgICAgYnV0dG9uSWNvbj1cImJlbGwtc2xhc2hcIlxuICAgICAgICBidXR0b25MaW5rPXttYWtlQU1MaW5rKCdhbGVydGluZy9zaWxlbmNlL25ldycsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpfVxuICAgICAgICBidXR0b25UaXRsZT1cIk5ldyBzaWxlbmNlXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gPENhbGxUb0FjdGlvbkNhcmQgY2FsbFRvQWN0aW9uRWxlbWVudD17PGRpdiAvPn0gbWVzc2FnZT1cIk5vIHNpbGVuY2VzIGZvdW5kLlwiIC8+O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBkYXRlTWF0aCwgR3JhZmFuYVRoZW1lMiwgaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmcgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFNpbGVuY2VkQWxlcnRzVGFibGUgZnJvbSAnLi9TaWxlbmNlZEFsZXJ0c1RhYmxlJztcblxuaW1wb3J0IHsgU2lsZW5jZVRhYmxlSXRlbSB9IGZyb20gJy4vU2lsZW5jZXNUYWJsZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpbGVuY2U6IFNpbGVuY2VUYWJsZUl0ZW07XG59XG5cbmV4cG9ydCBjb25zdCBTaWxlbmNlRGV0YWlscyA9ICh7IHNpbGVuY2UgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdGFydHNBdCwgZW5kc0F0LCBjb21tZW50LCBjcmVhdGVkQnksIHNpbGVuY2VkQWxlcnRzIH0gPSBzaWxlbmNlO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgZGF0ZURpc3BsYXlGb3JtYXQgPSAnWVlZWS1NTS1ERCBISDptbSc7XG4gIGNvbnN0IHN0YXJ0c0F0RGF0ZSA9IGRhdGVNYXRoLnBhcnNlKHN0YXJ0c0F0KTtcbiAgY29uc3QgZW5kc0F0RGF0ZSA9IGRhdGVNYXRoLnBhcnNlKGVuZHNBdCk7XG4gIGNvbnN0IGR1cmF0aW9uID0gaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmcoeyBzdGFydDogbmV3IERhdGUoc3RhcnRzQXQpLCBlbmQ6IG5ldyBEYXRlKGVuZHNBdCkgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Q29tbWVudDwvZGl2PlxuICAgICAgPGRpdj57Y29tbWVudH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlNjaGVkdWxlPC9kaXY+XG4gICAgICA8ZGl2PntgJHtzdGFydHNBdERhdGU/LmZvcm1hdChkYXRlRGlzcGxheUZvcm1hdCl9IC0gJHtlbmRzQXREYXRlPy5mb3JtYXQoZGF0ZURpc3BsYXlGb3JtYXQpfWB9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5EdXJhdGlvbjwvZGl2PlxuICAgICAgPGRpdj4ge2R1cmF0aW9ufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Q3JlYXRlZCBieTwvZGl2PlxuICAgICAgPGRpdj4ge2NyZWF0ZWRCeX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkFmZmVjdGVkIGFsZXJ0czwvZGl2PlxuICAgICAgPFNpbGVuY2VkQWxlcnRzVGFibGUgc2lsZW5jZWRBbGVydHM9e3NpbGVuY2VkQWxlcnRzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDlmcjtcbiAgICBncmlkLXJvdy1nYXA6IDFyZW07XG4gIGAsXG4gIHRpdGxlOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gIGAsXG4gIHJvdzogY3NzYFxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDApfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGRhdGVUaW1lLCBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBUaW1lUmFuZ2VJbnB1dCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IFNpbGVuY2VGb3JtRmllbGRzIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2lsZW5jZS1mb3JtJztcblxuZXhwb3J0IGNvbnN0IFNpbGVuY2VQZXJpb2QgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29udHJvbCwgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtQ29udGV4dDxTaWxlbmNlRm9ybUZpZWxkcz4oKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IHtcbiAgICBmaWVsZDogeyBvbkNoYW5nZTogb25DaGFuZ2VTdGFydHNBdCwgdmFsdWU6IHN0YXJ0c0F0IH0sXG4gICAgZmllbGRTdGF0ZTogeyBpbnZhbGlkOiBzdGFydHNBdEludmFsaWQgfSxcbiAgfSA9IHVzZUNvbnRyb2xsZXIoe1xuICAgIG5hbWU6ICdzdGFydHNBdCcsXG4gICAgY29udHJvbCxcbiAgICBydWxlczoge1xuICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT4gZ2V0VmFsdWVzKCkuZW5kc0F0ID4gdmFsdWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIGZpZWxkOiB7IG9uQ2hhbmdlOiBvbkNoYW5nZUVuZHNBdCwgdmFsdWU6IGVuZHNBdCB9LFxuICAgIGZpZWxkU3RhdGU6IHsgaW52YWxpZDogZW5kc0F0SW52YWxpZCB9LFxuICB9ID0gdXNlQ29udHJvbGxlcih7XG4gICAgbmFtZTogJ2VuZHNBdCcsXG4gICAgY29udHJvbCxcbiAgICBydWxlczoge1xuICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT4gZ2V0VmFsdWVzKCkuc3RhcnRzQXQgPCB2YWx1ZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB7XG4gICAgZmllbGQ6IHsgb25DaGFuZ2U6IG9uQ2hhbmdlVGltZVpvbmUsIHZhbHVlOiB0aW1lWm9uZSB9LFxuICB9ID0gdXNlQ29udHJvbGxlcih7XG4gICAgbmFtZTogJ3RpbWVab25lJyxcbiAgICBjb250cm9sLFxuICB9KTtcblxuICBjb25zdCBpbnZhbGlkID0gc3RhcnRzQXRJbnZhbGlkIHx8IGVuZHNBdEludmFsaWQ7XG5cbiAgY29uc3QgZnJvbSA9IGRhdGVUaW1lKHN0YXJ0c0F0KTtcbiAgY29uc3QgdG8gPSBkYXRlVGltZShlbmRzQXQpO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy50aW1lUmFuZ2V9XG4gICAgICBsYWJlbD1cIlNpbGVuY2Ugc3RhcnQgYW5kIGVuZFwiXG4gICAgICBlcnJvcj17aW52YWxpZCA/ICdUbyBpcyBiZWZvcmUgb3IgdGhlIHNhbWUgYXMgZnJvbScgOiAnJ31cbiAgICAgIGludmFsaWQ9e2ludmFsaWR9XG4gICAgPlxuICAgICAgPFRpbWVSYW5nZUlucHV0XG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgZnJvbSxcbiAgICAgICAgICB0byxcbiAgICAgICAgICByYXc6IHtcbiAgICAgICAgICAgIGZyb20sXG4gICAgICAgICAgICB0byxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICB0aW1lWm9uZT17dGltZVpvbmV9XG4gICAgICAgIG9uQ2hhbmdlPXsobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZVN0YXJ0c0F0KGRhdGVUaW1lKG5ld1ZhbHVlLmZyb20pKTtcbiAgICAgICAgICBvbkNoYW5nZUVuZHNBdChkYXRlVGltZShuZXdWYWx1ZS50bykpO1xuICAgICAgICB9fVxuICAgICAgICBvbkNoYW5nZVRpbWVab25lPXsobmV3VmFsdWUpID0+IG9uQ2hhbmdlVGltZVpvbmUobmV3VmFsdWUpfVxuICAgICAgICBoaWRlVGltZVpvbmU9e2ZhbHNlfVxuICAgICAgICBoaWRlUXVpY2tSYW5nZXM9e3RydWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXsnU2VsZWN0IHRpbWUgcmFuZ2UnfVxuICAgICAgLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIHRpbWVSYW5nZTogY3NzYFxuICAgIHdpZHRoOiA0MDBweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgU2lsZW5jZVN0YXRlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3RhdGUsIFN0YXRlVGFnIH0gZnJvbSAnLi4vU3RhdGVUYWcnO1xuXG5jb25zdCBzaWxlbmNlU3RhdGVUb1N0YXRlOiBSZWNvcmQ8U2lsZW5jZVN0YXRlLCBTdGF0ZT4gPSB7XG4gIFtTaWxlbmNlU3RhdGUuQWN0aXZlXTogJ2dvb2QnLFxuICBbU2lsZW5jZVN0YXRlLkV4cGlyZWRdOiAnbmV1dHJhbCcsXG4gIFtTaWxlbmNlU3RhdGUuUGVuZGluZ106ICduZXV0cmFsJyxcbn07XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHN0YXRlOiBTaWxlbmNlU3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBTaWxlbmNlU3RhdGVUYWc6IEZDPFByb3BzPiA9ICh7IHN0YXRlIH0pID0+IChcbiAgPFN0YXRlVGFnIHN0YXRlPXtzaWxlbmNlU3RhdGVUb1N0YXRlW3N0YXRlXX0+e3N0YXRlfTwvU3RhdGVUYWc+XG4pO1xuIiwiaW1wb3J0IHsgQWxlcnRtYW5hZ2VyQWxlcnQgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRBbGVydFRhYmxlU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RhYmxlJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTaWxlbmNlZEFsZXJ0c1RhYmxlUm93IH0gZnJvbSAnLi9TaWxlbmNlZEFsZXJ0c1RhYmxlUm93JztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaWxlbmNlZEFsZXJ0czogQWxlcnRtYW5hZ2VyQWxlcnRbXTtcbn1cblxuY29uc3QgU2lsZW5jZWRBbGVydHNUYWJsZTogRkM8UHJvcHM+ID0gKHsgc2lsZW5jZWRBbGVydHMgfSkgPT4ge1xuICBjb25zdCB0YWJsZVN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0QWxlcnRUYWJsZVN0eWxlcyk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBpZiAoISFzaWxlbmNlZEFsZXJ0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17Y3godGFibGVTdHlsZXMudGFibGUsIHN0eWxlcy50YWJsZU1hcmdpbil9PlxuICAgICAgICA8Y29sZ3JvdXA+XG4gICAgICAgICAgPGNvbCBjbGFzc05hbWU9e3RhYmxlU3R5bGVzLmNvbEV4cGFuZH0gLz5cbiAgICAgICAgICA8Y29sIGNsYXNzTmFtZT17c3R5bGVzLmNvbFN0YXRlfSAvPlxuICAgICAgICAgIDxjb2wgLz5cbiAgICAgICAgICA8Y29sIGNsYXNzTmFtZT17c3R5bGVzLmNvbE5hbWV9IC8+XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgIDx0aD5TdGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgIDx0aD5BbGVydCBuYW1lPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3NpbGVuY2VkQWxlcnRzLm1hcCgoYWxlcnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U2lsZW5jZWRBbGVydHNUYWJsZVJvd1xuICAgICAgICAgICAgICAgIGtleT17YWxlcnQuZmluZ2VycHJpbnR9XG4gICAgICAgICAgICAgICAgYWxlcnQ9e2FsZXJ0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggJSAyID09PSAwID8gdGFibGVTdHlsZXMuZXZlblJvdyA6ICcnfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB0YWJsZU1hcmdpbjogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIGNvbFN0YXRlOiBjc3NgXG4gICAgd2lkdGg6IDExMHB4O1xuICBgLFxuICBjb2xOYW1lOiBjc3NgXG4gICAgd2lkdGg6IDY1JTtcbiAgYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWxlbmNlZEFsZXJ0c1RhYmxlO1xuIiwiaW1wb3J0IHsgQWxlcnRtYW5hZ2VyQWxlcnQgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGUgfSBmcm9tICcuLi9Db2xsYXBzZVRvZ2dsZSc7XG5pbXBvcnQgeyBpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnRMYWJlbHMgfSBmcm9tICcuLi9BbGVydExhYmVscyc7XG5pbXBvcnQgeyBBbUFsZXJ0U3RhdGVUYWcgfSBmcm9tICcuL0FtQWxlcnRTdGF0ZVRhZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsZXJ0OiBBbGVydG1hbmFnZXJBbGVydDtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU2lsZW5jZWRBbGVydHNUYWJsZVJvdzogRkM8UHJvcHM+ID0gKHsgYWxlcnQsIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZHVyYXRpb24gPSBpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyh7XG4gICAgc3RhcnQ6IG5ldyBEYXRlKGFsZXJ0LnN0YXJ0c0F0KSxcbiAgICBlbmQ6IG5ldyBEYXRlKGFsZXJ0LmVuZHNBdCksXG4gIH0pO1xuICBjb25zdCBhbGVydE5hbWUgPSBPYmplY3QuZW50cmllcyhhbGVydC5sYWJlbHMpLnJlZHVjZSgobmFtZSwgW2xhYmVsS2V5LCBsYWJlbFZhbHVlXSkgPT4ge1xuICAgIGlmIChsYWJlbEtleSA9PT0gJ2FsZXJ0bmFtZScgfHwgbGFiZWxLZXkgPT09ICdfX2FsZXJ0X3J1bGVfdGl0bGVfXycpIHtcbiAgICAgIG5hbWUgPSBsYWJlbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZTtcbiAgfSwgJycpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dHIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPENvbGxhcHNlVG9nZ2xlIGlzQ29sbGFwc2VkPXtpc0NvbGxhcHNlZH0gb25Ub2dnbGU9eyhjb2xsYXBzZWQpID0+IHNldElzQ29sbGFwc2VkKGNvbGxhcHNlZCl9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8QW1BbGVydFN0YXRlVGFnIHN0YXRlPXthbGVydC5zdGF0dXMuc3RhdGV9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5mb3Ige2R1cmF0aW9ufSBzZWNvbmRzPC90ZD5cbiAgICAgICAgPHRkPnthbGVydE5hbWV9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICB7IWlzQ29sbGFwc2VkICYmIChcbiAgICAgICAgPHRyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICA8dGQgY29sU3Bhbj17NX0+XG4gICAgICAgICAgICA8QWxlcnRMYWJlbHMgbGFiZWxzPXthbGVydC5sYWJlbHN9IC8+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgTWF0Y2hlck9wZXJhdG9yLCBTaWxlbmNlLCBTaWxlbmNlQ3JlYXRlUGF5bG9hZCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIEZpZWxkLCBGaWVsZFNldCwgSW5wdXQsIExpbmtCdXR0b24sIFRleHRBcmVhLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHtcbiAgRGVmYXVsdFRpbWVab25lLFxuICBwYXJzZUR1cmF0aW9uLFxuICBpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyxcbiAgYWRkRHVyYXRpb25Ub0RhdGUsXG4gIGRhdGVUaW1lLFxuICBpc1ZhbGlkRGF0ZSxcbiAgR3JhZmFuYVRoZW1lMixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHBpY2tCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgTWF0Y2hlcnNGaWVsZCBmcm9tICcuL01hdGNoZXJzRmllbGQnO1xuaW1wb3J0IHsgTWF0Y2hlZFNpbGVuY2VkUnVsZXMgfSBmcm9tICcuL01hdGNoZWRTaWxlbmNlZFJ1bGVzJztcbmltcG9ydCB7IHVzZUZvcm0sIEZvcm1Qcm92aWRlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBTaWxlbmNlRm9ybUZpZWxkcyB9IGZyb20gJy4uLy4uL3R5cGVzL3NpbGVuY2UtZm9ybSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZU9yVXBkYXRlU2lsZW5jZUFjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgU2lsZW5jZVBlcmlvZCB9IGZyb20gJy4vU2lsZW5jZVBlcmlvZCc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgdXNlQ2xlYW51cCB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuaW1wb3J0IHsgcGFyc2VRdWVyeVBhcmFtTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaGVycyc7XG5pbXBvcnQgeyBtYXRjaGVyVG9NYXRjaGVyRmllbGQsIG1hdGNoZXJGaWVsZFRvTWF0Y2hlciB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyB1c2VVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVUkxTZWFyY2hQYXJhbXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaWxlbmNlPzogU2lsZW5jZTtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBkZWZhdWx0c0Zyb21RdWVyeSA9IChzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyk6IFBhcnRpYWw8U2lsZW5jZUZvcm1GaWVsZHM+ID0+IHtcbiAgY29uc3QgZGVmYXVsdHM6IFBhcnRpYWw8U2lsZW5jZUZvcm1GaWVsZHM+ID0ge307XG5cbiAgY29uc3QgY29tbWVudCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2NvbW1lbnQnKTtcbiAgY29uc3QgbWF0Y2hlcnMgPSBzZWFyY2hQYXJhbXMuZ2V0QWxsKCdtYXRjaGVyJyk7XG5cbiAgY29uc3QgZm9ybU1hdGNoZXJzID0gcGFyc2VRdWVyeVBhcmFtTWF0Y2hlcnMobWF0Y2hlcnMpO1xuICBpZiAoZm9ybU1hdGNoZXJzLmxlbmd0aCkge1xuICAgIGRlZmF1bHRzLm1hdGNoZXJzID0gZm9ybU1hdGNoZXJzLm1hcChtYXRjaGVyVG9NYXRjaGVyRmllbGQpO1xuICB9XG5cbiAgaWYgKGNvbW1lbnQpIHtcbiAgICBkZWZhdWx0cy5jb21tZW50ID0gY29tbWVudDtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0cztcbn07XG5cbmNvbnN0IGdldERlZmF1bHRGb3JtVmFsdWVzID0gKHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zLCBzaWxlbmNlPzogU2lsZW5jZSk6IFNpbGVuY2VGb3JtRmllbGRzID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgaWYgKHNpbGVuY2UpIHtcbiAgICBjb25zdCBpc0V4cGlyZWQgPSBEYXRlLnBhcnNlKHNpbGVuY2UuZW5kc0F0KSA8IERhdGUubm93KCk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBpc0V4cGlyZWRcbiAgICAgID8ge1xuICAgICAgICAgIHN0YXJ0OiBub3csXG4gICAgICAgICAgZW5kOiBhZGREdXJhdGlvblRvRGF0ZShub3csIHsgaG91cnM6IDIgfSksXG4gICAgICAgIH1cbiAgICAgIDogeyBzdGFydDogbmV3IERhdGUoc2lsZW5jZS5zdGFydHNBdCksIGVuZDogbmV3IERhdGUoc2lsZW5jZS5lbmRzQXQpIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBzaWxlbmNlLmlkLFxuICAgICAgc3RhcnRzQXQ6IGludGVydmFsLnN0YXJ0LnRvSVNPU3RyaW5nKCksXG4gICAgICBlbmRzQXQ6IGludGVydmFsLmVuZC50b0lTT1N0cmluZygpLFxuICAgICAgY29tbWVudDogc2lsZW5jZS5jb21tZW50LFxuICAgICAgY3JlYXRlZEJ5OiBzaWxlbmNlLmNyZWF0ZWRCeSxcbiAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyhpbnRlcnZhbCksXG4gICAgICBpc1JlZ2V4OiBmYWxzZSxcbiAgICAgIG1hdGNoZXJzOiBzaWxlbmNlLm1hdGNoZXJzPy5tYXAobWF0Y2hlclRvTWF0Y2hlckZpZWxkKSB8fCBbXSxcbiAgICAgIG1hdGNoZXJOYW1lOiAnJyxcbiAgICAgIG1hdGNoZXJWYWx1ZTogJycsXG4gICAgICB0aW1lWm9uZTogRGVmYXVsdFRpbWVab25lLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZW5kc0F0ID0gYWRkRHVyYXRpb25Ub0RhdGUobm93LCB7IGhvdXJzOiAyIH0pOyAvLyBEZWZhdWx0IHRpbWUgcGVyaW9kIGlzIG5vdyArIDJoXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiAnJyxcbiAgICAgIHN0YXJ0c0F0OiBub3cudG9JU09TdHJpbmcoKSxcbiAgICAgIGVuZHNBdDogZW5kc0F0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjb21tZW50OiBgY3JlYXRlZCAke2RhdGVUaW1lKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJyl9YCxcbiAgICAgIGNyZWF0ZWRCeTogY29uZmlnLmJvb3REYXRhLnVzZXIubmFtZSxcbiAgICAgIGR1cmF0aW9uOiAnMmgnLFxuICAgICAgaXNSZWdleDogZmFsc2UsXG4gICAgICBtYXRjaGVyczogW3sgbmFtZTogJycsIHZhbHVlOiAnJywgb3BlcmF0b3I6IE1hdGNoZXJPcGVyYXRvci5lcXVhbCB9XSxcbiAgICAgIG1hdGNoZXJOYW1lOiAnJyxcbiAgICAgIG1hdGNoZXJWYWx1ZTogJycsXG4gICAgICB0aW1lWm9uZTogRGVmYXVsdFRpbWVab25lLFxuICAgICAgLi4uZGVmYXVsdHNGcm9tUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgU2lsZW5jZXNFZGl0b3I6IEZDPFByb3BzPiA9ICh7IHNpbGVuY2UsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSkgPT4ge1xuICBjb25zdCBbdXJsU2VhcmNoUGFyYW1zXSA9IHVzZVVSTFNlYXJjaFBhcmFtcygpO1xuXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB1c2VNZW1vKCgpID0+IGdldERlZmF1bHRGb3JtVmFsdWVzKHVybFNlYXJjaFBhcmFtcywgc2lsZW5jZSksIFtzaWxlbmNlLCB1cmxTZWFyY2hQYXJhbXNdKTtcbiAgY29uc3QgZm9ybUFQSSA9IHVzZUZvcm0oeyBkZWZhdWx0VmFsdWVzIH0pO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXBkYXRlU2lsZW5jZSk7XG5cbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy51cGRhdGVTaWxlbmNlKTtcblxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZSwgd2F0Y2gsIHNldFZhbHVlLCBjbGVhckVycm9ycyB9ID0gZm9ybUFQSTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBTaWxlbmNlRm9ybUZpZWxkcykgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHN0YXJ0c0F0LCBlbmRzQXQsIGNvbW1lbnQsIGNyZWF0ZWRCeSwgbWF0Y2hlcnM6IG1hdGNoZXJzRmllbGRzIH0gPSBkYXRhO1xuICAgIGNvbnN0IG1hdGNoZXJzID0gbWF0Y2hlcnNGaWVsZHMubWFwKG1hdGNoZXJGaWVsZFRvTWF0Y2hlcik7XG4gICAgY29uc3QgcGF5bG9hZCA9IHBpY2tCeShcbiAgICAgIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHN0YXJ0c0F0LFxuICAgICAgICBlbmRzQXQsXG4gICAgICAgIGNvbW1lbnQsXG4gICAgICAgIGNyZWF0ZWRCeSxcbiAgICAgICAgbWF0Y2hlcnMsXG4gICAgICB9LFxuICAgICAgKHZhbHVlKSA9PiAhIXZhbHVlXG4gICAgKSBhcyBTaWxlbmNlQ3JlYXRlUGF5bG9hZDtcbiAgICBkaXNwYXRjaChcbiAgICAgIGNyZWF0ZU9yVXBkYXRlU2lsZW5jZUFjdGlvbih7XG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIGV4aXRPblNhdmU6IHRydWUsXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiBgU2lsZW5jZSAke3BheWxvYWQuaWQgPyAndXBkYXRlZCcgOiAnY3JlYXRlZCd9YCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkdXJhdGlvbiA9IHdhdGNoKCdkdXJhdGlvbicpO1xuICBjb25zdCBzdGFydHNBdCA9IHdhdGNoKCdzdGFydHNBdCcpO1xuICBjb25zdCBlbmRzQXQgPSB3YXRjaCgnZW5kc0F0Jyk7XG5cbiAgLy8gS2VlcCBkdXJhdGlvbiBhbmQgZW5kc0F0IGluIHN5bmNcbiAgY29uc3QgW3ByZXZEdXJhdGlvbiwgc2V0UHJldkR1cmF0aW9uXSA9IHVzZVN0YXRlKGR1cmF0aW9uKTtcbiAgdXNlRGVib3VuY2UoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKGlzVmFsaWREYXRlKHN0YXJ0c0F0KSAmJiBpc1ZhbGlkRGF0ZShlbmRzQXQpKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiAhPT0gcHJldkR1cmF0aW9uKSB7XG4gICAgICAgICAgc2V0VmFsdWUoJ2VuZHNBdCcsIGRhdGVUaW1lKGFkZER1cmF0aW9uVG9EYXRlKG5ldyBEYXRlKHN0YXJ0c0F0KSwgcGFyc2VEdXJhdGlvbihkdXJhdGlvbikpKS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICBzZXRQcmV2RHVyYXRpb24oZHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0VmFsdWUgPSBuZXcgRGF0ZShzdGFydHNBdCkudmFsdWVPZigpO1xuICAgICAgICAgIGNvbnN0IGVuZFZhbHVlID0gbmV3IERhdGUoZW5kc0F0KS52YWx1ZU9mKCk7XG4gICAgICAgICAgaWYgKGVuZFZhbHVlID4gc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgbmV4dER1cmF0aW9uID0gaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmcoe1xuICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoc3RhcnRzQXQpLFxuICAgICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKGVuZHNBdCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFZhbHVlKCdkdXJhdGlvbicsIG5leHREdXJhdGlvbik7XG4gICAgICAgICAgICBzZXRQcmV2RHVyYXRpb24obmV4dER1cmF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIDcwMCxcbiAgICBbY2xlYXJFcnJvcnMsIGR1cmF0aW9uLCBlbmRzQXQsIHByZXZEdXJhdGlvbiwgc2V0VmFsdWUsIHN0YXJ0c0F0XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Qcm92aWRlciB7Li4uZm9ybUFQSX0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgIDxGaWVsZFNldCBsYWJlbD17YCR7c2lsZW5jZSA/ICdSZWNyZWF0ZSBzaWxlbmNlJyA6ICdDcmVhdGUgc2lsZW5jZSd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93LCBzdHlsZXMuc2lsZW5jZVBlcmlvZCl9PlxuICAgICAgICAgICAgPFNpbGVuY2VQZXJpb2QgLz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIkR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgaW52YWxpZD17ISFmb3JtU3RhdGUuZXJyb3JzLmR1cmF0aW9ufVxuICAgICAgICAgICAgICBlcnJvcj17XG4gICAgICAgICAgICAgICAgZm9ybVN0YXRlLmVycm9ycy5kdXJhdGlvbiAmJlxuICAgICAgICAgICAgICAgIChmb3JtU3RhdGUuZXJyb3JzLmR1cmF0aW9uLnR5cGUgPT09ICdyZXF1aXJlZCcgPyAnUmVxdWlyZWQgZmllbGQnIDogZm9ybVN0YXRlLmVycm9ycy5kdXJhdGlvbi5tZXNzYWdlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZWRCeX1cbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2R1cmF0aW9uJywge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyc2VEdXJhdGlvbih2YWx1ZSkpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gJ0ludmFsaWQgZHVyYXRpb24uIFZhbGlkIGV4YW1wbGU6IDFkIDRoIChBdmFpbGFibGUgdW5pdHM6IHksIE0sIHcsIGQsIGgsIG0sIHMpJ1xuICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIGlkPVwiZHVyYXRpb25cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxNYXRjaGVyc0ZpZWxkIC8+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5maWVsZCwgc3R5bGVzLnRleHRBcmVhKX1cbiAgICAgICAgICAgIGxhYmVsPVwiQ29tbWVudFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZXJyb3I9e2Zvcm1TdGF0ZS5lcnJvcnMuY29tbWVudD8ubWVzc2FnZX1cbiAgICAgICAgICAgIGludmFsaWQ9eyEhZm9ybVN0YXRlLmVycm9ycy5jb21tZW50fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2NvbW1lbnQnLCB7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9IH0pfVxuICAgICAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRldGFpbHMgYWJvdXQgdGhlIHNpbGVuY2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxNYXRjaGVkU2lsZW5jZWRSdWxlcyAvPlxuICAgICAgICA8L0ZpZWxkU2V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9IGljb249XCJmYSBmYS1zcGlubmVyXCIgdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgU2F2aW5nLi4uXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshbG9hZGluZyAmJiA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj59XG4gICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoJ2FsZXJ0aW5nL3NpbGVuY2VzJywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgICB2YXJpYW50PXsnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvRm9ybVByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBmaWVsZDogY3NzYFxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDApfTtcbiAgYCxcbiAgdGV4dEFyZWE6IGNzc2BcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnNtfXB4O1xuICBgLFxuICBjcmVhdGVkQnk6IGNzc2BcbiAgICB3aWR0aDogMjAwcHg7XG4gIGAsXG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgJiA+ICoge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbiAgc2lsZW5jZVBlcmlvZDogY3NzYFxuICAgIG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy52YWx1ZXMuc219cHg7XG4gIGAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2lsZW5jZXNFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBMYWJlbCwgSWNvbiwgSW5wdXQsIFRvb2x0aXAsIFJhZGlvQnV0dG9uR3JvdXAsIHVzZVN0eWxlczIsIEJ1dHRvbiwgRmllbGQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHsgZ2V0U2lsZW5jZUZpbHRlcnNGcm9tVXJsUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBTaWxlbmNlU3RhdGUgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgeyBwYXJzZU1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IGRlYm91bmNlLCB1bmlxdWVJZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5cbmNvbnN0IHN0YXRlT3B0aW9uczogU2VsZWN0YWJsZVZhbHVlW10gPSBPYmplY3QuZW50cmllcyhTaWxlbmNlU3RhdGUpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICBsYWJlbDoga2V5LFxuICB2YWx1ZSxcbn0pKTtcblxuY29uc3QgZ2V0UXVlcnlTdHJpbmdLZXkgPSAoKSA9PiB1bmlxdWVJZCgncXVlcnktc3RyaW5nLScpO1xuXG5leHBvcnQgY29uc3QgU2lsZW5jZXNGaWx0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWVyeVN0cmluZ0tleSwgc2V0UXVlcnlTdHJpbmdLZXldID0gdXNlU3RhdGUoZ2V0UXVlcnlTdHJpbmdLZXkoKSk7XG4gIGNvbnN0IFtxdWVyeVBhcmFtcywgc2V0UXVlcnlQYXJhbXNdID0gdXNlUXVlcnlQYXJhbXMoKTtcbiAgY29uc3QgeyBxdWVyeVN0cmluZywgc2lsZW5jZVN0YXRlIH0gPSBnZXRTaWxlbmNlRmlsdGVyc0Zyb21VcmxQYXJhbXMocXVlcnlQYXJhbXMpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgaGFuZGxlUXVlcnlTdHJpbmdDaGFuZ2UgPSBkZWJvdW5jZSgoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IHF1ZXJ5U3RyaW5nOiB0YXJnZXQudmFsdWUgfHwgbnVsbCB9KTtcbiAgfSwgNDAwKTtcblxuICBjb25zdCBoYW5kbGVTaWxlbmNlU3RhdGVDaGFuZ2UgPSAoc3RhdGU6IHN0cmluZykgPT4ge1xuICAgIHNldFF1ZXJ5UGFyYW1zKHsgc2lsZW5jZVN0YXRlOiBzdGF0ZSB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckZpbHRlcnMgPSAoKSA9PiB7XG4gICAgc2V0UXVlcnlQYXJhbXMoe1xuICAgICAgcXVlcnlTdHJpbmc6IG51bGwsXG4gICAgICBzaWxlbmNlU3RhdGU6IG51bGwsXG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRRdWVyeVN0cmluZ0tleShnZXRRdWVyeVN0cmluZ0tleSgpKSk7XG4gIH07XG5cbiAgY29uc3QgaW5wdXRJbnZhbGlkID0gcXVlcnlTdHJpbmcgJiYgcXVlcnlTdHJpbmcubGVuZ3RoID4gMyA/IHBhcnNlTWF0Y2hlcnMocXVlcnlTdHJpbmcpLmxlbmd0aCA9PT0gMCA6IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgIDxGaWVsZFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH1cbiAgICAgICAgbGFiZWw9e1xuICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCBieSBtYXRjaGVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEZpbHRlciBzaWxlbmNlcyBieSBtYXRjaGVycyB1c2luZyBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIG1hdGNoZXJzLCBpZTpcbiAgICAgICAgICAgICAgICAgICAgPHByZT57YHNldmVyaXR5PWNyaXRpY2FsLCBpbnN0YW5jZT1+Y2x1c3Rlci11cy0uK2B9PC9wcmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaW5mby1jaXJjbGVcIiBzaXplPVwic21cIiAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgIH1cbiAgICAgICAgaW52YWxpZD17aW5wdXRJbnZhbGlkfVxuICAgICAgICBlcnJvcj17aW5wdXRJbnZhbGlkID8gJ1F1ZXJ5IG11c3QgdXNlIHZhbGlkIG1hdGNoZXIgc3ludGF4JyA6IG51bGx9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGtleT17cXVlcnlTdHJpbmdLZXl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9XG4gICAgICAgICAgcHJlZml4PXs8SWNvbiBuYW1lPVwic2VhcmNoXCIgLz59XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1ZXJ5U3RyaW5nQ2hhbmdlfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cXVlcnlTdHJpbmcgPz8gJyd9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoLXF1ZXJ5LWlucHV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQgY2xhc3NOYW1lPXtzdHlsZXMucm93Q2hpbGR9IGxhYmVsPVwiU3RhdGVcIj5cbiAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXAgb3B0aW9ucz17c3RhdGVPcHRpb25zfSB2YWx1ZT17c2lsZW5jZVN0YXRlfSBvbkNoYW5nZT17aGFuZGxlU2lsZW5jZVN0YXRlQ2hhbmdlfSAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIHsocXVlcnlTdHJpbmcgfHwgc2lsZW5jZVN0YXRlKSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93Q2hpbGR9PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGljb249XCJ0aW1lc1wiIG9uQ2xpY2s9e2NsZWFyRmlsdGVyc30+XG4gICAgICAgICAgICBDbGVhciBmaWx0ZXJzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgc2VhcmNoSW5wdXQ6IGNzc2BcbiAgICB3aWR0aDogMzYwcHg7XG4gIGAsXG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIuc3Ryb25nfTtcbiAgYCxcbiAgcm93Q2hpbGQ6IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MnB4O1xuICBgLFxuICBmaWVsZExhYmVsOiBjc3NgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGRhdGVNYXRoIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCB1c2VTdHlsZXMyLCBMaW5rLCBCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQWxlcnRtYW5hZ2VyQWxlcnQsIFNpbGVuY2UsIFNpbGVuY2VTdGF0ZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IE5vU2lsZW5jZXNTcGxhc2ggfSBmcm9tICcuL05vU2lsZW5jZXNDVEEnO1xuaW1wb3J0IHsgZ2V0U2lsZW5jZUZpbHRlcnNGcm9tVXJsUGFyYW1zLCBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgeyBTaWxlbmNlc0ZpbHRlciB9IGZyb20gJy4vU2lsZW5jZXNGaWx0ZXInO1xuaW1wb3J0IHsgcGFyc2VNYXRjaGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBEeW5hbWljVGFibGUsIER5bmFtaWNUYWJsZUNvbHVtblByb3BzLCBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9EeW5hbWljVGFibGUnO1xuaW1wb3J0IHsgU2lsZW5jZVN0YXRlVGFnIH0gZnJvbSAnLi9TaWxlbmNlU3RhdGVUYWcnO1xuaW1wb3J0IHsgTWF0Y2hlcnMgfSBmcm9tICcuL01hdGNoZXJzJztcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbiB9IGZyb20gJy4uL3J1bGVzL0FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgeyBBY3Rpb25JY29uIH0gZnJvbSAnLi4vcnVsZXMvQWN0aW9uSWNvbic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGV4cGlyZVNpbGVuY2VBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IFNpbGVuY2VEZXRhaWxzIH0gZnJvbSAnLi9TaWxlbmNlRGV0YWlscyc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyBBdXRob3JpemUgfSBmcm9tICcuLi9BdXRob3JpemUnO1xuaW1wb3J0IHsgZ2V0SW5zdGFuY2VzUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lsZW5jZVRhYmxlSXRlbSBleHRlbmRzIFNpbGVuY2Uge1xuICBzaWxlbmNlZEFsZXJ0czogQWxlcnRtYW5hZ2VyQWxlcnRbXTtcbn1cblxudHlwZSBTaWxlbmNlVGFibGVDb2x1bW5Qcm9wcyA9IER5bmFtaWNUYWJsZUNvbHVtblByb3BzPFNpbGVuY2VUYWJsZUl0ZW0+O1xudHlwZSBTaWxlbmNlVGFibGVJdGVtUHJvcHMgPSBEeW5hbWljVGFibGVJdGVtUHJvcHM8U2lsZW5jZVRhYmxlSXRlbT47XG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaWxlbmNlczogU2lsZW5jZVtdO1xuICBhbGVydE1hbmFnZXJBbGVydHM6IEFsZXJ0bWFuYWdlckFsZXJ0W107XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgU2lsZW5jZXNUYWJsZTogRkM8UHJvcHM+ID0gKHsgc2lsZW5jZXMsIGFsZXJ0TWFuYWdlckFsZXJ0cywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IGZpbHRlcmVkU2lsZW5jZXMgPSB1c2VGaWx0ZXJlZFNpbGVuY2VzKHNpbGVuY2VzKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXRJbnN0YW5jZXNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICBjb25zdCB7IHNpbGVuY2VTdGF0ZSB9ID0gZ2V0U2lsZW5jZUZpbHRlcnNGcm9tVXJsUGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICBjb25zdCBzaG93RXhwaXJlZFNpbGVuY2VzQmFubmVyID1cbiAgICAhIWZpbHRlcmVkU2lsZW5jZXMubGVuZ3RoICYmIChzaWxlbmNlU3RhdGUgPT09IHVuZGVmaW5lZCB8fCBzaWxlbmNlU3RhdGUgPT09IFNpbGVuY2VTdGF0ZS5FeHBpcmVkKTtcblxuICBjb25zdCBjb2x1bW5zID0gdXNlQ29sdW1ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICBjb25zdCBpdGVtcyA9IHVzZU1lbW8oKCk6IFNpbGVuY2VUYWJsZUl0ZW1Qcm9wc1tdID0+IHtcbiAgICBjb25zdCBmaW5kU2lsZW5jZWRBbGVydHMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGFsZXJ0TWFuYWdlckFsZXJ0cy5maWx0ZXIoKGFsZXJ0KSA9PiBhbGVydC5zdGF0dXMuc2lsZW5jZWRCeS5pbmNsdWRlcyhpZCkpO1xuICAgIH07XG4gICAgcmV0dXJuIGZpbHRlcmVkU2lsZW5jZXMubWFwKChzaWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBzaWxlbmNlZEFsZXJ0cyA9IGZpbmRTaWxlbmNlZEFsZXJ0cyhzaWxlbmNlLmlkKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBzaWxlbmNlLmlkLFxuICAgICAgICBkYXRhOiB7IC4uLnNpbGVuY2UsIHNpbGVuY2VkQWxlcnRzIH0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbZmlsdGVyZWRTaWxlbmNlcywgYWxlcnRNYW5hZ2VyQWxlcnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtdGVzdGlkPVwic2lsZW5jZXMtdGFibGVcIj5cbiAgICAgIHshIXNpbGVuY2VzLmxlbmd0aCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNpbGVuY2VzRmlsdGVyIC8+XG4gICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMuY3JlYXRlXX0gZmFsbGJhY2s9e2NvbnRleHRTcnYuaXNFZGl0b3J9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BCdXR0b25Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXttYWtlQU1MaW5rKCcvYWxlcnRpbmcvc2lsZW5jZS9uZXcnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGROZXdTaWxlbmNlfSBpY29uPVwicGx1c1wiPlxuICAgICAgICAgICAgICAgICAgTmV3IFNpbGVuY2VcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgeyEhaXRlbXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPER5bmFtaWNUYWJsZVxuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBjb2xzPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgIGlzRXhwYW5kYWJsZVxuICAgICAgICAgICAgICAgIHJlbmRlckV4cGFuZGVkQ29udGVudD17KHsgZGF0YSB9KSA9PiA8U2lsZW5jZURldGFpbHMgc2lsZW5jZT17ZGF0YX0gLz59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzaG93RXhwaXJlZFNpbGVuY2VzQmFubmVyICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGxvdXR9PlxuICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtzdHlsZXMuY2FsbG91dEljb259IG5hbWU9XCJpbmZvLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5FeHBpcmVkIHNpbGVuY2VzIGFyZSBhdXRvbWF0aWNhbGx5IGRlbGV0ZWQgYWZ0ZXIgNSBkYXlzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAnTm8gbWF0Y2hpbmcgc2lsZW5jZXMgZm91bmQnXG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgeyFzaWxlbmNlcy5sZW5ndGggJiYgPE5vU2lsZW5jZXNTcGxhc2ggYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB1c2VGaWx0ZXJlZFNpbGVuY2VzID0gKHNpbGVuY2VzOiBTaWxlbmNlW10pID0+IHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJ5U3RyaW5nLCBzaWxlbmNlU3RhdGUgfSA9IGdldFNpbGVuY2VGaWx0ZXJzRnJvbVVybFBhcmFtcyhxdWVyeVBhcmFtcyk7XG4gICAgY29uc3Qgc2lsZW5jZUlkc1N0cmluZyA9IHF1ZXJ5UGFyYW1zPy5zaWxlbmNlSWRzO1xuICAgIHJldHVybiBzaWxlbmNlcy5maWx0ZXIoKHNpbGVuY2UpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygc2lsZW5jZUlkc1N0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgaWRzSW5jbHVkZWQgPSBzaWxlbmNlSWRzU3RyaW5nLnNwbGl0KCcsJykuaW5jbHVkZXMoc2lsZW5jZS5pZCk7XG4gICAgICAgIGlmICghaWRzSW5jbHVkZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgICBjb25zdCBtYXRjaGVycyA9IHBhcnNlTWF0Y2hlcnMocXVlcnlTdHJpbmcpO1xuICAgICAgICBjb25zdCBtYXRjaGVyc01hdGNoID0gbWF0Y2hlcnMuZXZlcnkoKG1hdGNoZXIpID0+XG4gICAgICAgICAgc2lsZW5jZS5tYXRjaGVycz8uc29tZShcbiAgICAgICAgICAgICh7IG5hbWUsIHZhbHVlLCBpc0VxdWFsLCBpc1JlZ2V4IH0pID0+XG4gICAgICAgICAgICAgIG1hdGNoZXIubmFtZSA9PT0gbmFtZSAmJlxuICAgICAgICAgICAgICBtYXRjaGVyLnZhbHVlID09PSB2YWx1ZSAmJlxuICAgICAgICAgICAgICBtYXRjaGVyLmlzRXF1YWwgPT09IGlzRXF1YWwgJiZcbiAgICAgICAgICAgICAgbWF0Y2hlci5pc1JlZ2V4ID09PSBpc1JlZ2V4XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIW1hdGNoZXJzTWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzaWxlbmNlU3RhdGUpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVNYXRjaGVzID0gc2lsZW5jZS5zdGF0dXMuc3RhdGUgPT09IHNpbGVuY2VTdGF0ZTtcbiAgICAgICAgaWYgKCFzdGF0ZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9LCBbcXVlcnlQYXJhbXMsIHNpbGVuY2VzXSk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHRvcEJ1dHRvbkNvbnRhaW5lcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBgLFxuICBhZGROZXdTaWxlbmNlOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMiwgMCl9O1xuICBgLFxuICBjYWxsb3V0OiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5pbmZvLmJvcmRlcn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogNjJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuXG4gICAgJiA+ICoge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuICBgLFxuICBjYWxsb3V0SWNvbjogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5pbmZvLnRleHR9O1xuICBgLFxuICBlZGl0QnV0dG9uOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgYCxcbn0pO1xuXG5mdW5jdGlvbiB1c2VDb2x1bW5zKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXRJbnN0YW5jZXNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgcmV0dXJuIHVzZU1lbW8oKCk6IFNpbGVuY2VUYWJsZUNvbHVtblByb3BzW10gPT4ge1xuICAgIGNvbnN0IGhhbmRsZUV4cGlyZVNpbGVuY2VDbGljayA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgICBkaXNwYXRjaChleHBpcmVTaWxlbmNlQWN0aW9uKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGlkKSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93QWN0aW9ucyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKHBlcm1pc3Npb25zLnVwZGF0ZSwgY29udGV4dFNydi5pc0VkaXRvcik7XG4gICAgY29uc3QgY29sdW1uczogU2lsZW5jZVRhYmxlQ29sdW1uUHJvcHNbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzdGF0ZScsXG4gICAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJTdGF0ZVRhZyh7IGRhdGE6IHsgc3RhdHVzIH0gfSkge1xuICAgICAgICAgIHJldHVybiA8U2lsZW5jZVN0YXRlVGFnIHN0YXRlPXtzdGF0dXMuc3RhdGV9IC8+O1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiAnODhweCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ21hdGNoZXJzJyxcbiAgICAgICAgbGFiZWw6ICdNYXRjaGluZyBsYWJlbHMnLFxuICAgICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJNYXRjaGVycyh7IGRhdGE6IHsgbWF0Y2hlcnMgfSB9KSB7XG4gICAgICAgICAgcmV0dXJuIDxNYXRjaGVycyBtYXRjaGVycz17bWF0Y2hlcnMgfHwgW119IC8+O1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiA5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdhbGVydHMnLFxuICAgICAgICBsYWJlbDogJ0FsZXJ0cycsXG4gICAgICAgIHJlbmRlckNlbGw6IGZ1bmN0aW9uIHJlbmRlclNpbGVuY2VkQWxlcnRzKHsgZGF0YTogeyBzaWxlbmNlZEFsZXJ0cyB9IH0pIHtcbiAgICAgICAgICByZXR1cm4gPHNwYW4gZGF0YS10ZXN0aWQ9XCJhbGVydHNcIj57c2lsZW5jZWRBbGVydHMubGVuZ3RofTwvc3Bhbj47XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3NjaGVkdWxlJyxcbiAgICAgICAgbGFiZWw6ICdTY2hlZHVsZScsXG4gICAgICAgIHJlbmRlckNlbGw6IGZ1bmN0aW9uIHJlbmRlclNjaGVkdWxlKHsgZGF0YTogeyBzdGFydHNBdCwgZW5kc0F0IH0gfSkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0c0F0RGF0ZSA9IGRhdGVNYXRoLnBhcnNlKHN0YXJ0c0F0KTtcbiAgICAgICAgICBjb25zdCBlbmRzQXREYXRlID0gZGF0ZU1hdGgucGFyc2UoZW5kc0F0KTtcbiAgICAgICAgICBjb25zdCBkYXRlRGlzcGxheUZvcm1hdCA9ICdZWVlZLU1NLUREIEhIOm1tJztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAge3N0YXJ0c0F0RGF0ZT8uZm9ybWF0KGRhdGVEaXNwbGF5Rm9ybWF0KX0geyctJ31cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtlbmRzQXREYXRlPy5mb3JtYXQoZGF0ZURpc3BsYXlGb3JtYXQpfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogJzE1MHB4JyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBpZiAoc2hvd0FjdGlvbnMpIHtcbiAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgIGlkOiAnYWN0aW9ucycsXG4gICAgICAgIGxhYmVsOiAnQWN0aW9ucycsXG4gICAgICAgIHJlbmRlckNlbGw6IGZ1bmN0aW9uIHJlbmRlckFjdGlvbnMoeyBkYXRhOiBzaWxlbmNlIH0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0YWNrIGdhcD17MC41fT5cbiAgICAgICAgICAgICAge3NpbGVuY2Uuc3RhdHVzLnN0YXRlID09PSAnZXhwaXJlZCcgPyAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bWFrZUFNTGluayhgL2FsZXJ0aW5nL3NpbGVuY2UvJHtzaWxlbmNlLmlkfS9lZGl0YCwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9PlxuICAgICAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBpY29uPVwic3luY1wiPlJlY3JlYXRlPC9BY3Rpb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gaWNvbj1cImJlbGxcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFeHBpcmVTaWxlbmNlQ2xpY2soc2lsZW5jZS5pZCl9PlxuICAgICAgICAgICAgICAgICAgVW5zaWxlbmNlXG4gICAgICAgICAgICAgICAgPC9BY3Rpb25CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtzaWxlbmNlLnN0YXR1cy5zdGF0ZSAhPT0gJ2V4cGlyZWQnICYmIChcbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIHRvPXttYWtlQU1MaW5rKGAvYWxlcnRpbmcvc2lsZW5jZS8ke3NpbGVuY2UuaWR9L2VkaXRgLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX1cbiAgICAgICAgICAgICAgICAgIGljb249XCJwZW5cIlxuICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cImVkaXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6ICcxNDdweCcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBkaXNwYXRjaCwgc3R5bGVzLCBwZXJtaXNzaW9uc10pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWxlbmNlc1RhYmxlO1xuIiwiaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnYXBwL2NvcmUvc3RvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzLCBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmZ1bmN0aW9uIGlzQWxlcnRNYW5hZ2VyU291cmNlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfHxcbiAgICAhIWdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzKCkuZmluZCgoZHMpID0+IGRzLm5hbWUgPT09IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpXG4gICk7XG59XG5cbi8qIHRoaXMgd2lsbCByZXR1cm4gYW0gbmFtZSBlaXRoZXIgZnJvbSBxdWVyeSBwYXJhbXMgb3IgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIGEgZGVmYXVsdCAoZ3JhZmFuYSkuXG4gKlxuICogZmFsbGJhY2tVcmwgLSBpZiBwcm92aWRlZCwgd2lsbCByZWRpcmVjdCB0byB0aGlzIHVybCBpZiBhbGVydG1hbmFnZXIgcHJvdmlkZWQgaW4gcXVlcnkgbm8gbG9uZ2VyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKCk6IFtzdHJpbmcgfCB1bmRlZmluZWQsIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHZvaWRdIHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zLCB1cGRhdGVRdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghaXNBbGVydE1hbmFnZXJTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpIHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogbnVsbCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLnNldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdXBkYXRlUXVlcnlQYXJhbXNdXG4gICk7XG5cbiAgY29uc3QgcXVlcnlTb3VyY2UgPSBxdWVyeVBhcmFtc1tBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldO1xuXG4gIGlmIChxdWVyeVNvdXJjZSAmJiB0eXBlb2YgcXVlcnlTb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlzQWxlcnRNYW5hZ2VyU291cmNlKHF1ZXJ5U291cmNlKSkge1xuICAgICAgcmV0dXJuIFtxdWVyeVNvdXJjZSwgdXBkYXRlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uIGV4aXN0aW5nIGFsZXJ0bWFuYWdlclxuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG4gICAgfVxuICB9XG4gIGNvbnN0IHN0b3JlU291cmNlID0gc3RvcmUuZ2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgaWYgKHN0b3JlU291cmNlICYmIHR5cGVvZiBzdG9yZVNvdXJjZSA9PT0gJ3N0cmluZycgJiYgaXNBbGVydE1hbmFnZXJTb3VyY2Uoc3RvcmVTb3VyY2UpKSB7XG4gICAgdXBkYXRlKHN0b3JlU291cmNlKTtcbiAgICByZXR1cm4gW3N0b3JlU291cmNlLCB1cGRhdGVdO1xuICB9XG5cbiAgcmV0dXJuIFtHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FLCB1cGRhdGVdO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tYmluZWRSdWxlLFxuICBDb21iaW5lZFJ1bGVHcm91cCxcbiAgQ29tYmluZWRSdWxlTmFtZXNwYWNlLFxuICBSdWxlLFxuICBSdWxlR3JvdXAsXG4gIFJ1bGVOYW1lc3BhY2UsXG4gIFJ1bGVzU291cmNlLFxufSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8sIFJ1bGVyUnVsZUdyb3VwRFRPLCBSdWxlclJ1bGVzQ29uZmlnRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIGdldEFsbFJ1bGVzU291cmNlcyxcbiAgZ2V0UnVsZXNTb3VyY2VCeU5hbWUsXG4gIGlzQ2xvdWRSdWxlc1NvdXJjZSxcbiAgaXNHcmFmYW5hUnVsZXNTb3VyY2UsXG59IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzQWxlcnRpbmdSdWxlclJ1bGUsIGlzUmVjb3JkaW5nUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuaW50ZXJmYWNlIENhY2hlVmFsdWUge1xuICBwcm9tUnVsZXM/OiBSdWxlTmFtZXNwYWNlW107XG4gIHJ1bGVyUnVsZXM/OiBSdWxlclJ1bGVzQ29uZmlnRFRPIHwgbnVsbDtcbiAgcmVzdWx0OiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXTtcbn1cblxuLy8gdGhpcyBsaXR0bGUgbW9uc3RlciBjb21iaW5lcyBwcm9tZXRoZXVzIHJ1bGVzIGFuZCBydWxlciBydWxlcyB0byBwcm9kdWNlIGEgdW5pZmllZCBkYXRhIHN0cnVjdHVyZVxuLy8gY2FuIGxpbWl0IHRvIGEgc2luZ2xlIHJ1bGVzIHNvdXJjZVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMocnVsZXNTb3VyY2VOYW1lPzogc3RyaW5nKTogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10ge1xuICBjb25zdCBwcm9tUnVsZXNSZXNwb25zZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb21SdWxlcyk7XG4gIGNvbnN0IHJ1bGVyUnVsZXNSZXNwb25zZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJ1bGVyUnVsZXMpO1xuXG4gIC8vIGNhY2hlIHJlc3VsdHMgcGVyIHJ1bGVzIHNvdXJjZSwgc28gd2Ugb25seSByZWNhbGN1bGF0ZSB0aG9zZSBmb3Igd2hpY2ggcmVzdWx0cyBoYXZlIGFjdHVhbGx5IGNoYW5nZWRcbiAgY29uc3QgY2FjaGUgPSB1c2VSZWY8UmVjb3JkPHN0cmluZywgQ2FjaGVWYWx1ZT4+KHt9KTtcblxuICBjb25zdCBydWxlc1NvdXJjZXMgPSB1c2VNZW1vKCgpOiBSdWxlc1NvdXJjZVtdID0+IHtcbiAgICBpZiAocnVsZXNTb3VyY2VOYW1lKSB7XG4gICAgICBjb25zdCBydWxlc1NvdXJjZSA9IGdldFJ1bGVzU291cmNlQnlOYW1lKHJ1bGVzU291cmNlTmFtZSk7XG4gICAgICBpZiAoIXJ1bGVzU291cmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBydWxlcyBzb3VyY2U6ICR7cnVsZXNTb3VyY2VOYW1lfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtydWxlc1NvdXJjZV07XG4gICAgfVxuICAgIHJldHVybiBnZXRBbGxSdWxlc1NvdXJjZXMoKTtcbiAgfSwgW3J1bGVzU291cmNlTmFtZV0pO1xuXG4gIHJldHVybiB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBydWxlc1NvdXJjZXNcbiAgICAgICAgLm1hcCgocnVsZXNTb3VyY2UpOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZXNTb3VyY2VOYW1lID0gaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSA/IHJ1bGVzU291cmNlLm5hbWUgOiBydWxlc1NvdXJjZTtcbiAgICAgICAgICBjb25zdCBwcm9tUnVsZXMgPSBwcm9tUnVsZXNSZXNwb25zZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuICAgICAgICAgIGNvbnN0IHJ1bGVyUnVsZXMgPSBydWxlclJ1bGVzUmVzcG9uc2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdDtcblxuICAgICAgICAgIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmN1cnJlbnRbcnVsZXNTb3VyY2VOYW1lXTtcbiAgICAgICAgICBpZiAoY2FjaGVkICYmIGNhY2hlZC5wcm9tUnVsZXMgPT09IHByb21SdWxlcyAmJiBjYWNoZWQucnVsZXJSdWxlcyA9PT0gcnVsZXJSdWxlcykge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZC5yZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVzcGFjZXM6IFJlY29yZDxzdHJpbmcsIENvbWJpbmVkUnVsZU5hbWVzcGFjZT4gPSB7fTtcblxuICAgICAgICAgIC8vIGZpcnN0IGdldCBhbGwgdGhlIHJ1bGVyIHJ1bGVzIGluXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMocnVsZXJSdWxlcyB8fCB7fSkuZm9yRWFjaCgoW25hbWVzcGFjZU5hbWUsIGdyb3Vwc10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlID0ge1xuICAgICAgICAgICAgICBydWxlc1NvdXJjZSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZXNwYWNlTmFtZSxcbiAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdID0gbmFtZXNwYWNlO1xuICAgICAgICAgICAgYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5hbWVzcGFjZSwgZ3JvdXBzKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHRoZW4gY29ycmVsYXRlIHdpdGggcHJvbWV0aGV1cyBydWxlc1xuICAgICAgICAgIHByb21SdWxlcz8uZm9yRWFjaCgoeyBuYW1lOiBuYW1lc3BhY2VOYW1lLCBncm91cHMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnMgPSAobmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSA9IG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gfHwge1xuICAgICAgICAgICAgICBydWxlc1NvdXJjZSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZXNwYWNlTmFtZSxcbiAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShucywgZ3JvdXBzKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC52YWx1ZXMobmFtZXNwYWNlcyk7XG5cbiAgICAgICAgICBjYWNoZS5jdXJyZW50W3J1bGVzU291cmNlTmFtZV0gPSB7IHByb21SdWxlcywgcnVsZXJSdWxlcywgcmVzdWx0IH07XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSlcbiAgICAgICAgLmZsYXQoKSxcbiAgICBbcHJvbVJ1bGVzUmVzcG9uc2VzLCBydWxlclJ1bGVzUmVzcG9uc2VzLCBydWxlc1NvdXJjZXNdXG4gICk7XG59XG5cbi8vIG1lcmdlIGFsbCBncm91cHMgaW4gY2FzZSBvZiBncmFmYW5hIG1hbmFnZWQsIGVzc2VudGlhbGx5IHRyZWF0aW5nIG5hbWVzcGFjZXMgKGZvbGRlcnMpIGFzIGdyb3Vwc1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5HcmFmYW5hTWFuYWdlZFJ1bGVzKG5hbWVzcGFjZXM6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdKSB7XG4gIHJldHVybiBuYW1lc3BhY2VzLm1hcCgobmFtZXNwYWNlKSA9PiB7XG4gICAgY29uc3QgbmV3TmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgPSB7XG4gICAgICAuLi5uYW1lc3BhY2UsXG4gICAgICBncm91cHM6IFtdLFxuICAgIH07XG5cbiAgICAvLyBhZGQgZGVmYXVsdCBncm91cCB3aXRoIHVuZ3JvdXBlZCBydWxlc1xuICAgIG5ld05hbWVzcGFjZS5ncm91cHMucHVzaCh7XG4gICAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgICBydWxlczogc29ydFJ1bGVzQnlOYW1lKG5hbWVzcGFjZS5ncm91cHMuZmxhdE1hcCgoZ3JvdXApID0+IGdyb3VwLnJ1bGVzKSksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3TmFtZXNwYWNlO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRSdWxlc0J5TmFtZShydWxlczogQ29tYmluZWRSdWxlW10pIHtcbiAgcmV0dXJuIHJ1bGVzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xufVxuXG5mdW5jdGlvbiBhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwczogUnVsZXJSdWxlR3JvdXBEVE9bXSk6IHZvaWQge1xuICBuYW1lc3BhY2UuZ3JvdXBzID0gZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICBjb25zdCBjb21iaW5lZEdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCA9IHtcbiAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXG4gICAgICBpbnRlcnZhbDogZ3JvdXAuaW50ZXJ2YWwsXG4gICAgICBzb3VyY2VfdGVuYW50czogZ3JvdXAuc291cmNlX3RlbmFudHMsXG4gICAgICBydWxlczogW10sXG4gICAgfTtcbiAgICBjb21iaW5lZEdyb3VwLnJ1bGVzID0gZ3JvdXAucnVsZXMubWFwKChydWxlKSA9PiBydWxlclJ1bGVUb0NvbWJpbmVkUnVsZShydWxlLCBuYW1lc3BhY2UsIGNvbWJpbmVkR3JvdXApKTtcbiAgICByZXR1cm4gY29tYmluZWRHcm91cDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cHM6IFJ1bGVHcm91cFtdKTogdm9pZCB7XG4gIGdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgIGxldCBjb21iaW5lZEdyb3VwID0gbmFtZXNwYWNlLmdyb3Vwcy5maW5kKChnKSA9PiBnLm5hbWUgPT09IGdyb3VwLm5hbWUpO1xuICAgIGlmICghY29tYmluZWRHcm91cCkge1xuICAgICAgY29tYmluZWRHcm91cCA9IHtcbiAgICAgICAgbmFtZTogZ3JvdXAubmFtZSxcbiAgICAgICAgcnVsZXM6IFtdLFxuICAgICAgfTtcbiAgICAgIG5hbWVzcGFjZS5ncm91cHMucHVzaChjb21iaW5lZEdyb3VwKTtcbiAgICB9XG5cbiAgICAoZ3JvdXAucnVsZXMgPz8gW10pLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUnVsZSA9IGdldEV4aXN0aW5nUnVsZUluR3JvdXAocnVsZSwgY29tYmluZWRHcm91cCEsIG5hbWVzcGFjZS5ydWxlc1NvdXJjZSk7XG4gICAgICBpZiAoZXhpc3RpbmdSdWxlKSB7XG4gICAgICAgIGV4aXN0aW5nUnVsZS5wcm9tUnVsZSA9IHJ1bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21iaW5lZEdyb3VwIS5ydWxlcy5wdXNoKHByb21SdWxlVG9Db21iaW5lZFJ1bGUocnVsZSwgbmFtZXNwYWNlLCBjb21iaW5lZEdyb3VwISkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvbVJ1bGVUb0NvbWJpbmVkUnVsZShydWxlOiBSdWxlLCBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwKTogQ29tYmluZWRSdWxlIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBydWxlLm5hbWUsXG4gICAgcXVlcnk6IHJ1bGUucXVlcnksXG4gICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICBhbm5vdGF0aW9uczogaXNBbGVydGluZ1J1bGUocnVsZSkgPyBydWxlLmFubm90YXRpb25zIHx8IHt9IDoge30sXG4gICAgcHJvbVJ1bGU6IHJ1bGUsXG4gICAgbmFtZXNwYWNlOiBuYW1lc3BhY2UsXG4gICAgZ3JvdXAsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlKFxuICBydWxlOiBSdWxlclJ1bGVEVE8sXG4gIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLFxuICBncm91cDogQ29tYmluZWRSdWxlR3JvdXBcbik6IENvbWJpbmVkUnVsZSB7XG4gIHJldHVybiBpc0FsZXJ0aW5nUnVsZXJSdWxlKHJ1bGUpXG4gICAgPyB7XG4gICAgICAgIG5hbWU6IHJ1bGUuYWxlcnQsXG4gICAgICAgIHF1ZXJ5OiBydWxlLmV4cHIsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiBydWxlLmFubm90YXRpb25zIHx8IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9XG4gICAgOiBpc1JlY29yZGluZ1J1bGVyUnVsZShydWxlKVxuICAgID8ge1xuICAgICAgICBuYW1lOiBydWxlLnJlY29yZCxcbiAgICAgICAgcXVlcnk6IHJ1bGUuZXhwcixcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9XG4gICAgOiB7XG4gICAgICAgIG5hbWU6IHJ1bGUuZ3JhZmFuYV9hbGVydC50aXRsZSxcbiAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczogcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfTtcbn1cblxuLy8gZmluZCBleGlzdGluZyBydWxlIGluIGdyb3VwIHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gcHJvbSBydWxlXG5mdW5jdGlvbiBnZXRFeGlzdGluZ1J1bGVJbkdyb3VwKFxuICBydWxlOiBSdWxlLFxuICBncm91cDogQ29tYmluZWRSdWxlR3JvdXAsXG4gIHJ1bGVzU291cmNlOiBSdWxlc1NvdXJjZVxuKTogQ29tYmluZWRSdWxlIHwgdW5kZWZpbmVkIHtcbiAgaWYgKGlzR3JhZmFuYVJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgIC8vIGFzc3VtZSBncmFmYW5hIGdyb3VwcyBoYXZlIG9ubHkgdGhlIG9uZSBydWxlLiBjaGVjayBuYW1lIGFueXdheSBiZWNhdXNlIHBhcmFub2lkXG4gICAgcmV0dXJuIGdyb3VwIS5ydWxlcy5maW5kKChleGlzdGluZ1J1bGUpID0+IGV4aXN0aW5nUnVsZS5uYW1lID09PSBydWxlLm5hbWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgLy8gdHJ5IGZpbmRpbmcgYSBydWxlIHRoYXQgbWF0Y2hlcyBuYW1lLCBsYWJlbHMsIGFubm90YXRpb25zIGFuZCBxdWVyeVxuICAgIGdyb3VwIS5ydWxlcy5maW5kKFxuICAgICAgKGV4aXN0aW5nUnVsZSkgPT4gIWV4aXN0aW5nUnVsZS5wcm9tUnVsZSAmJiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShleGlzdGluZ1J1bGUsIHJ1bGUsIHRydWUpXG4gICAgKSA/P1xuICAgIC8vIGlmIHRoYXQgZmFpbHMsIHRyeSBmaW5kaW5nIGEgcnVsZSB0aGF0IG9ubHkgbWF0Y2hlcyBuYW1lLCBsYWJlbHMgYW5kIGFubm90YXRpb25zLlxuICAgIC8vIGxva2kgJiBwcm9tIGNhbiBzb21ldGltZXMgbW9kaWZ5IHRoZSBxdWVyeSBzbyBpdCBkb2VzbnQgbWF0Y2gsIGVnIGAyID4gMWAgYmVjb21lcyBgMWBcbiAgICBncm91cCEucnVsZXMuZmluZChcbiAgICAgIChleGlzdGluZ1J1bGUpID0+ICFleGlzdGluZ1J1bGUucHJvbVJ1bGUgJiYgaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoZXhpc3RpbmdSdWxlLCBydWxlLCBmYWxzZSlcbiAgICApXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGNvbWJpbmVkUnVsZTogQ29tYmluZWRSdWxlLCBydWxlOiBSdWxlLCBjaGVja1F1ZXJ5ID0gdHJ1ZSk6IGJvb2xlYW4ge1xuICBpZiAoY29tYmluZWRSdWxlLm5hbWUgPT09IHJ1bGUubmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIGNoZWNrUXVlcnkgPyBoYXNoUXVlcnkoY29tYmluZWRSdWxlLnF1ZXJ5KSA6ICcnLFxuICAgICAgICBjb21iaW5lZFJ1bGUubGFiZWxzLFxuICAgICAgICBjb21iaW5lZFJ1bGUuYW5ub3RhdGlvbnMsXG4gICAgICBdKSA9PT1cbiAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgY2hlY2tRdWVyeSA/IGhhc2hRdWVyeShydWxlLnF1ZXJ5KSA6ICcnLFxuICAgICAgICBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgaXNBbGVydGluZ1J1bGUocnVsZSkgPyBydWxlLmFubm90YXRpb25zIHx8IHt9IDoge30sXG4gICAgICBdKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyB0aGVyZSBjYW4gYmUgc2xpZ2h0IGRpZmZlcmVuY2VzIGluIGhvdyBwcm9tICYgcnVsZXIgcmVuZGVyIGEgcXVlcnksIHRoaXMgd2lsbCBoYXNoIHRoZW0gYWNjb3VudGluZyBmb3IgdGhlIGRpZmZlcmVuY2VzXG5mdW5jdGlvbiBoYXNoUXVlcnkocXVlcnk6IHN0cmluZykge1xuICAvLyBvbmUgb2YgdGhlbSBtaWdodCBiZSB3cmFwcGVkIGluIHBhcmVuc1xuICBpZiAocXVlcnkubGVuZ3RoID4gMSAmJiBxdWVyeVswXSA9PT0gJygnICYmIHF1ZXJ5W3F1ZXJ5Lmxlbmd0aCAtIDFdID09PSAnKScpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKDEsIC0xKTtcbiAgfVxuICAvLyB3aGl0ZXNwYWNlIGNvdWxkIGJlIGFkZGVkIG9yIHJlbW92ZWRcbiAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC9cXHN8XFxuL2csICcnKTtcbiAgLy8gbGFiZWxzIG1hdGNoZXJzIGNhbiBiZSByZW9yZGVyZWQsIHNvIHNvcnQgdGhlIGVuaXRyZSBzdHJpbmcsIGVzZW50aWFsbHkgY29tcGFyaW5nIGp1c3QgdGhlIGNoYXJhY3RlciBjb3VudHNcbiAgcmV0dXJuIHF1ZXJ5LnNwbGl0KCcnKS5zb3J0KCkuam9pbignJyk7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVSTFNlYXJjaFBhcmFtcygpOiBbXG4gIFVSTFNlYXJjaFBhcmFtcyxcbiAgKHNlYXJjaFZhbHVlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ+LCByZXBsYWNlPzogYm9vbGVhbikgPT4gdm9pZFxuXSB7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IHVzZU1lbW8oKCkgPT4gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLCBbc2VhcmNoXSk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soKHNlYXJjaFZhbHVlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ+LCByZXBsYWNlPzogYm9vbGVhbikgPT4ge1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHNlYXJjaFZhbHVlcywgcmVwbGFjZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW3F1ZXJ5UGFyYW1zLCB1cGRhdGVdO1xufVxuIiwiaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuZXhwb3J0IGNvbnN0IGdldEFsZXJ0VGFibGVTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHRhYmxlOiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJHt0aGVtZS5jb2xvcnMuYm9yZGVyLndlYWt9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcblxuICAgIHRoIHtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cblxuICAgIHRyIHtcbiAgICAgIGhlaWdodDogMzhweDtcbiAgICB9XG4gIGAsXG4gIGV2ZW5Sb3c6IGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnByaW1hcnl9O1xuICBgLFxuICBjb2xFeHBhbmQ6IGNzc2BcbiAgICB3aWR0aDogMzZweDtcbiAgYCxcbiAgYWN0aW9uc0NlbGw6IGNzc2BcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogMSU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICYgPiAqICsgKiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIH1cbiAgYCxcbn0pO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURpc3BhdGNoIiwiY2xlYW5VcEFjdGlvbiIsInVzZUNsZWFudXAiLCJzdGF0ZVNlbGVjdG9yIiwiZGlzcGF0Y2giLCJzZWxlY3RvclJlZiIsImN1cnJlbnQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwiQWxlcnQiLCJMb2FkaW5nUGxhY2Vob2xkZXIiLCJ3aXRoRXJyb3JCb3VuZGFyeSIsIlJlZGlyZWN0IiwiUm91dGUiLCJTd2l0Y2giLCJ1c2VMb2NhdGlvbiIsIkFsZXJ0aW5nUGFnZVdyYXBwZXIiLCJTaWxlbmNlc1RhYmxlIiwidXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIiwiZmV0Y2hBbUFsZXJ0c0FjdGlvbiIsImZldGNoU2lsZW5jZXNBY3Rpb24iLCJTSUxFTkNFU19QT0xMX0lOVEVSVkFMX01TIiwiaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIiwiU2lsZW5jZXNFZGl0b3IiLCJBbGVydE1hbmFnZXJQaWNrZXIiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiQXV0aG9yaXplIiwiU2lsZW5jZXMiLCJhbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwic2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInNpbGVuY2VzIiwic3RhdGUiLCJhbGVydHNSZXF1ZXN0cyIsImFtQWxlcnRzIiwiYWxlcnRzUmVxdWVzdCIsInVuZGVmaW5lZCIsImxvY2F0aW9uIiwiaXNSb290IiwicGF0aG5hbWUiLCJlbmRzV2l0aCIsImZldGNoQWxsIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZXN1bHQiLCJsb2FkaW5nIiwiZXJyb3IiLCJnZXRTaWxlbmNlQnlJZCIsImlkIiwiZmluZCIsInNpbGVuY2UiLCJBbGVydGluZ0luc3RhbmNlc0V4dGVybmFsUmVhZCIsIm1lc3NhZ2UiLCJtYXRjaCIsInBhcmFtcyIsInN0eWxlIiwiUGFnZSIsImdldE5hdk1vZGVsIiwidXNlU2VsZWN0b3IiLCJjaGlsZHJlbiIsInBhZ2VJZCIsImlzTG9hZGluZyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJjb250ZXh0U3J2IiwiYWN0aW9ucyIsImZhbGxiYWNrIiwic29tZSIsImFjdGlvbiIsImhhc0FjY2VzcyIsIkJ1dHRvbiIsImNzcyIsImN4IiwidXNlU3R5bGVzIiwiQWN0aW9uQnV0dG9uIiwiY2xhc3NOYW1lIiwicmVzdFByb3BzIiwiZ2V0U3R5bGUiLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJzaXplIiwic20iLCJUb29sdGlwIiwiTGlua0J1dHRvbiIsIkFjdGlvbkljb24iLCJ0b29sdGlwIiwiaWNvbiIsInRvIiwidGFyZ2V0Iiwib25DbGljayIsInRvb2x0aXBQbGFjZW1lbnQiLCJyZXN0IiwiYXJpYUxhYmVsIiwiQWxlcnRTdGF0ZSIsIlN0YXRlVGFnIiwiYWxlcnRTdGF0ZVRvU3RhdGUiLCJBY3RpdmUiLCJVbnByb2Nlc3NlZCIsIlN1cHByZXNzZWQiLCJBbUFsZXJ0U3RhdGVUYWciLCJ1c2VTdGF0ZSIsInVzZUZvcm1Db250ZXh0IiwidXNlRGVib3VuY2UiLCJkYXRlVGltZSIsIkJhZGdlIiwidXNlU3R5bGVzMiIsIkR5bmFtaWNUYWJsZSIsInVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMiLCJmaW5kQWxlcnRJbnN0YW5jZXNXaXRoTWF0Y2hlcnMiLCJmZXRjaEFsbFByb21BbmRSdWxlclJ1bGVzQWN0aW9uIiwiaXNBbGVydGluZ1J1bGUiLCJBbGVydFN0YXRlVGFnIiwiQWxlcnRMYWJlbHMiLCJNYXRjaGVkU2lsZW5jZWRSdWxlcyIsIm1hdGNoZWRBbGVydFJ1bGVzIiwic2V0TWF0Y2hlZEFsZXJ0UnVsZXMiLCJmb3JtQXBpIiwid2F0Y2giLCJtYXRjaGVycyIsInN0eWxlcyIsImdldFN0eWxlcyIsImNvbHVtbnMiLCJ1c2VDb2x1bW5zIiwiY29tYmluZWROYW1lc3BhY2VzIiwibWF0Y2hlZEluc3RhbmNlcyIsImZsYXRNYXAiLCJuYW1lc3BhY2UiLCJncm91cHMiLCJncm91cCIsInJ1bGVzIiwibWFwIiwiY29tYmluZWRSdWxlIiwicHJvbVJ1bGUiLCJmaWx0ZXIiLCJydWxlIiwiYWxlcnRzIiwidGl0bGUiLCJsZW5ndGgiLCJiYWRnZSIsInRhYmxlIiwiZXZlcnkiLCJtYXRjaGVyIiwidmFsdWUiLCJuYW1lIiwic2xpY2UiLCJtb3JlTWF0Y2hlcyIsImxhYmVsIiwicmVuZGVyQ2VsbCIsInJlbmRlclN0YXRlVGFnIiwiZGF0YSIsIm1hdGNoZWRJbnN0YW5jZSIsInJlbmRlck5hbWUiLCJsYWJlbHMiLCJyZW5kZXJTdW1tYXJ5IiwiYWN0aXZlQXQiLCJzdGFydHNXaXRoIiwiZm9ybWF0IiwiYnJlYWtwb2ludHMiLCJ2YWx1ZXMiLCJsZyIsInNwYWNpbmciLCJUYWdMaXN0IiwibWF0Y2hlclRvT3BlcmF0b3IiLCJNYXRjaGVycyIsInRhZ3MiLCJGaWVsZCIsIklucHV0IiwiSWNvbkJ1dHRvbiIsIklucHV0Q29udHJvbCIsIlNlbGVjdCIsInVzZUZpZWxkQXJyYXkiLCJNYXRjaGVyT3BlcmF0b3IiLCJtYXRjaGVyRmllbGRPcHRpb25zIiwiTWF0Y2hlcnNGaWVsZCIsImNvbnRyb2wiLCJyZWdpc3RlciIsImZvcm1TdGF0ZSIsImVycm9ycyIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsIndyYXBwZXIiLCJpbmRleCIsInJvdyIsInJlcXVpcmVkIiwiZmllbGQiLCJvbkNoYW5nZSIsIm1hdGNoZXJPcHRpb25zIiwib3BlcmF0b3IiLCJyZW1vdmVCdXR0b24iLCJuZXdNYXRjaGVyIiwiZXF1YWwiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwic2Vjb25kYXJ5IiwiQ2FsbFRvQWN0aW9uQ2FyZCIsIkVtcHR5TGlzdENUQSIsImdldEluc3RhbmNlc1Blcm1pc3Npb25zIiwibWFrZUFNTGluayIsIk5vU2lsZW5jZXNTcGxhc2giLCJwZXJtaXNzaW9ucyIsImNyZWF0ZSIsImlzRWRpdG9yIiwiZGF0ZU1hdGgiLCJpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyIsIlNpbGVuY2VkQWxlcnRzVGFibGUiLCJTaWxlbmNlRGV0YWlscyIsInN0YXJ0c0F0IiwiZW5kc0F0IiwiY29tbWVudCIsImNyZWF0ZWRCeSIsInNpbGVuY2VkQWxlcnRzIiwiZGF0ZURpc3BsYXlGb3JtYXQiLCJzdGFydHNBdERhdGUiLCJwYXJzZSIsImVuZHNBdERhdGUiLCJkdXJhdGlvbiIsInN0YXJ0IiwiRGF0ZSIsImVuZCIsImNvbnRhaW5lciIsInRleHQiLCJwcmltYXJ5IiwiVGltZVJhbmdlSW5wdXQiLCJ1c2VDb250cm9sbGVyIiwiU2lsZW5jZVBlcmlvZCIsImdldFZhbHVlcyIsIm9uQ2hhbmdlU3RhcnRzQXQiLCJmaWVsZFN0YXRlIiwiaW52YWxpZCIsInN0YXJ0c0F0SW52YWxpZCIsInZhbGlkYXRlIiwib25DaGFuZ2VFbmRzQXQiLCJlbmRzQXRJbnZhbGlkIiwib25DaGFuZ2VUaW1lWm9uZSIsInRpbWVab25lIiwiZnJvbSIsInRpbWVSYW5nZSIsInJhdyIsIm5ld1ZhbHVlIiwiU2lsZW5jZVN0YXRlIiwic2lsZW5jZVN0YXRlVG9TdGF0ZSIsIkV4cGlyZWQiLCJQZW5kaW5nIiwiU2lsZW5jZVN0YXRlVGFnIiwiZ2V0QWxlcnRUYWJsZVN0eWxlcyIsIlNpbGVuY2VkQWxlcnRzVGFibGVSb3ciLCJ0YWJsZVN0eWxlcyIsInRhYmxlTWFyZ2luIiwiY29sRXhwYW5kIiwiY29sU3RhdGUiLCJjb2xOYW1lIiwiYWxlcnQiLCJldmVuUm93IiwiZmluZ2VycHJpbnQiLCJDb2xsYXBzZVRvZ2dsZSIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJhbGVydE5hbWUiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwibGFiZWxLZXkiLCJsYWJlbFZhbHVlIiwiY29sbGFwc2VkIiwic3RhdHVzIiwidXNlTWVtbyIsIkZpZWxkU2V0IiwiVGV4dEFyZWEiLCJEZWZhdWx0VGltZVpvbmUiLCJwYXJzZUR1cmF0aW9uIiwiYWRkRHVyYXRpb25Ub0RhdGUiLCJpc1ZhbGlkRGF0ZSIsImNvbmZpZyIsInBpY2tCeSIsInVzZUZvcm0iLCJGb3JtUHJvdmlkZXIiLCJjcmVhdGVPclVwZGF0ZVNpbGVuY2VBY3Rpb24iLCJwYXJzZVF1ZXJ5UGFyYW1NYXRjaGVycyIsIm1hdGNoZXJUb01hdGNoZXJGaWVsZCIsIm1hdGNoZXJGaWVsZFRvTWF0Y2hlciIsInVzZVVSTFNlYXJjaFBhcmFtcyIsImRlZmF1bHRzRnJvbVF1ZXJ5Iiwic2VhcmNoUGFyYW1zIiwiZGVmYXVsdHMiLCJnZXQiLCJnZXRBbGwiLCJmb3JtTWF0Y2hlcnMiLCJnZXREZWZhdWx0Rm9ybVZhbHVlcyIsIm5vdyIsImlzRXhwaXJlZCIsImhvdXJzIiwidG9JU09TdHJpbmciLCJpc1JlZ2V4IiwibWF0Y2hlck5hbWUiLCJtYXRjaGVyVmFsdWUiLCJib290RGF0YSIsInVzZXIiLCJ1cmxTZWFyY2hQYXJhbXMiLCJkZWZhdWx0VmFsdWVzIiwiZm9ybUFQSSIsInVwZGF0ZVNpbGVuY2UiLCJ1bmlmaWVkQWxlcnRpbmciLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsImNsZWFyRXJyb3JzIiwib25TdWJtaXQiLCJtYXRjaGVyc0ZpZWxkcyIsInBheWxvYWQiLCJleGl0T25TYXZlIiwic3VjY2Vzc01lc3NhZ2UiLCJwcmV2RHVyYXRpb24iLCJzZXRQcmV2RHVyYXRpb24iLCJzdGFydFZhbHVlIiwidmFsdWVPZiIsImVuZFZhbHVlIiwibmV4dER1cmF0aW9uIiwiZmxleFJvdyIsInNpbGVuY2VQZXJpb2QiLCJ0eXBlIiwia2V5cyIsInRleHRBcmVhIiwiTGFiZWwiLCJJY29uIiwiUmFkaW9CdXR0b25Hcm91cCIsInVzZVF1ZXJ5UGFyYW1zIiwiZ2V0U2lsZW5jZUZpbHRlcnNGcm9tVXJsUGFyYW1zIiwicGFyc2VNYXRjaGVycyIsImRlYm91bmNlIiwidW5pcXVlSWQiLCJTdGFjayIsInN0YXRlT3B0aW9ucyIsImtleSIsImdldFF1ZXJ5U3RyaW5nS2V5IiwiU2lsZW5jZXNGaWx0ZXIiLCJxdWVyeVN0cmluZ0tleSIsInNldFF1ZXJ5U3RyaW5nS2V5IiwicXVlcnlQYXJhbXMiLCJzZXRRdWVyeVBhcmFtcyIsInF1ZXJ5U3RyaW5nIiwic2lsZW5jZVN0YXRlIiwiaGFuZGxlUXVlcnlTdHJpbmdDaGFuZ2UiLCJlIiwiaGFuZGxlU2lsZW5jZVN0YXRlQ2hhbmdlIiwiY2xlYXJGaWx0ZXJzIiwic2V0VGltZW91dCIsImlucHV0SW52YWxpZCIsInJvd0NoaWxkIiwic2VhcmNoSW5wdXQiLCJib3JkZXIiLCJzdHJvbmciLCJmaWVsZExhYmVsIiwiTGluayIsImV4cGlyZVNpbGVuY2VBY3Rpb24iLCJhbGVydE1hbmFnZXJBbGVydHMiLCJmaWx0ZXJlZFNpbGVuY2VzIiwidXNlRmlsdGVyZWRTaWxlbmNlcyIsInNob3dFeHBpcmVkU2lsZW5jZXNCYW5uZXIiLCJpdGVtcyIsImZpbmRTaWxlbmNlZEFsZXJ0cyIsInNpbGVuY2VkQnkiLCJpbmNsdWRlcyIsInRvcEJ1dHRvbkNvbnRhaW5lciIsImFkZE5ld1NpbGVuY2UiLCJjYWxsb3V0IiwiY2FsbG91dEljb24iLCJzaWxlbmNlSWRzU3RyaW5nIiwic2lsZW5jZUlkcyIsImlkc0luY2x1ZGVkIiwic3BsaXQiLCJtYXRjaGVyc01hdGNoIiwiaXNFcXVhbCIsInN0YXRlTWF0Y2hlcyIsImluZm8iLCJlZGl0QnV0dG9uIiwiaGFuZGxlRXhwaXJlU2lsZW5jZUNsaWNrIiwic2hvd0FjdGlvbnMiLCJ1cGRhdGUiLCJyZW5kZXJNYXRjaGVycyIsInJlbmRlclNpbGVuY2VkQWxlcnRzIiwicmVuZGVyU2NoZWR1bGUiLCJwdXNoIiwicmVuZGVyQWN0aW9ucyIsInN0b3JlIiwiQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkiLCJBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVkiLCJnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlcyIsIkdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUiLCJpc0FsZXJ0TWFuYWdlclNvdXJjZSIsImRzIiwidXBkYXRlUXVlcnlQYXJhbXMiLCJkZWxldGUiLCJzZXQiLCJxdWVyeVNvdXJjZSIsInN0b3JlU291cmNlIiwiZ2V0QWxsUnVsZXNTb3VyY2VzIiwiZ2V0UnVsZXNTb3VyY2VCeU5hbWUiLCJpc0Nsb3VkUnVsZXNTb3VyY2UiLCJpc0dyYWZhbmFSdWxlc1NvdXJjZSIsImlzQWxlcnRpbmdSdWxlclJ1bGUiLCJpc1JlY29yZGluZ1J1bGVyUnVsZSIsInJ1bGVzU291cmNlTmFtZSIsInByb21SdWxlc1Jlc3BvbnNlcyIsInByb21SdWxlcyIsInJ1bGVyUnVsZXNSZXNwb25zZXMiLCJydWxlclJ1bGVzIiwiY2FjaGUiLCJydWxlc1NvdXJjZXMiLCJydWxlc1NvdXJjZSIsIkVycm9yIiwiY2FjaGVkIiwibmFtZXNwYWNlcyIsImZvckVhY2giLCJuYW1lc3BhY2VOYW1lIiwiYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlIiwibnMiLCJhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsImZsYXQiLCJmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyIsIm5ld05hbWVzcGFjZSIsInNvcnRSdWxlc0J5TmFtZSIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJjb21iaW5lZEdyb3VwIiwic291cmNlX3RlbmFudHMiLCJydWxlclJ1bGVUb0NvbWJpbmVkUnVsZSIsImciLCJleGlzdGluZ1J1bGUiLCJnZXRFeGlzdGluZ1J1bGVJbkdyb3VwIiwicHJvbVJ1bGVUb0NvbWJpbmVkUnVsZSIsInF1ZXJ5IiwiYW5ub3RhdGlvbnMiLCJleHByIiwicnVsZXJSdWxlIiwicmVjb3JkIiwiZ3JhZmFuYV9hbGVydCIsImlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlIiwiY2hlY2tRdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYXNoUXVlcnkiLCJyZXBsYWNlIiwiam9pbiIsImxvY2F0aW9uU2VydmljZSIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaFZhbHVlcyIsInBhcnRpYWwiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsIndlYWsiLCJhY3Rpb25zQ2VsbCJdLCJzb3VyY2VSb290IjoiIn0=
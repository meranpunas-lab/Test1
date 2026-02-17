"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRuleForm"],{

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

/***/ "./public/app/features/alerting/unified/RuleEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _components_rule_editor_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AlertRuleForm.tsx");
/* harmony import */ var _hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _AlertWarning, _AlertWarning2, _AlertWarning3, _AlertWarning4, _Page$Contents2, _AlertRuleForm, _LinkButton;

















const ExistingRuleEditor = ({
  identifier
}) => {
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_3__.useCleanup)(state => state.unifiedAlerting.ruleForm.existingRule);
  const {
    loading,
    result,
    error,
    dispatched
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__.useUnifiedAlertingSelector)(state => state.ruleForm.existingRule);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    isEditable
  } = (0,_hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_7__.useIsRuleEditable)(_utils_rule_id__WEBPACK_IMPORTED_MODULE_11__.ruleIdentifierToRuleSourceName(identifier), result === null || result === void 0 ? void 0 : result.rule);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!dispatched) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.fetchEditableRuleAction)(identifier));
    }
  }, [dispatched, dispatch, identifier]);

  if (loading || isEditable === undefined) {
    return _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
        severity: "error",
        title: "Failed to load rule",
        children: error.message
      })
    });
  }

  if (!result) {
    return _AlertWarning || (_AlertWarning = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Rule not found",
      children: "Sorry! This rule does not exist."
    }));
  }

  if (isEditable === false) {
    return _AlertWarning2 || (_AlertWarning2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Cannot edit rule",
      children: "Sorry! You do not have permission to edit this rule."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_rule_editor_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__.AlertRuleForm, {
    existing: result
  });
};

const RuleEditor = ({
  match
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    id
  } = match.params;
  const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_11__.tryParse(id, true);
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_13__["default"])(async () => {
    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.fetchAllPromBuildInfoAction)());
  }, [dispatch]);
  const {
    canCreateGrafanaRules,
    canCreateCloudRules,
    canEditRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_10__.useRulesAccess)();

  if (!canCreateGrafanaRules && !canCreateCloudRules) {
    return _AlertWarning3 || (_AlertWarning3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Cannot create rules",
      children: "Sorry! You are not allowed to create rules."
    }));
  }

  if (identifier && !canEditRules(identifier.ruleSourceName)) {
    return _AlertWarning4 || (_AlertWarning4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Cannot edit rules",
      children: "Sorry! You are not allowed to edit rules."
    }));
  }

  if (loading) {
    return _Page$Contents2 || (_Page$Contents2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: "Loading..."
      })
    }));
  }

  if (identifier) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ExistingRuleEditor, {
      identifier: identifier
    }, id);
  }

  return _AlertRuleForm || (_AlertRuleForm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_rule_editor_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__.AlertRuleForm, {}));
};

const AlertWarning = ({
  title,
  children
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  className: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(warningStyles).warning,
  severity: "warning",
  title: title,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
    children: children
  }), _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
    href: "alerting/list",
    children: "To rule list"
  }))]
});

const warningStyles = theme => ({
  warning: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(4)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.withErrorBoundary)(RuleEditor, {
  style: 'page'
}));

/***/ }),

/***/ "./public/app/features/alerting/unified/api/preview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewAlertRule": () => (/* binding */ previewAlertRule)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var _types_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/types/preview.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");






function previewAlertRule(request) {
  if ((0,_types_preview__WEBPACK_IMPORTED_MODULE_2__.isCloudPreviewRequest)(request)) {
    return previewCloudAlertRule(request);
  }

  if ((0,_types_preview__WEBPACK_IMPORTED_MODULE_2__.isGrafanaPreviewRequest)(request)) {
    return previewGrafanaAlertRule(request);
  }

  throw new Error('unsupported preview rule request');
}

function previewGrafanaAlertRule(request) {
  const type = _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.grafana;
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.withLoadingIndicator)({
    whileLoading: createResponse(type),
    source: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      method: 'POST',
      url: `/api/v1/rule/test/grafana`,
      data: request
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
      data
    }) => {
      return createResponse(type, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
        series: data.instances.map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dataFrameFromJSON)
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(createResponse(type, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error,
        error: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryError)(error)
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)())
  });
}

function createResponse(ruleType, data = {}) {
  return {
    ruleType,
    data: Object.assign({
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
      series: [],
      timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)()
    }, data)
  };
}

function previewCloudAlertRule(request) {
  throw new Error('preview for cloud alerting rules is not implemented');
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelPluginsButtonGroup": () => (/* binding */ PanelPluginsButtonGroup)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PanelPluginsButtonGroup(props) {
  const {
    value,
    onChange,
    size = 'md'
  } = props;
  const panels = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => getSupportedPanels(), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
    options: panels,
    value: value,
    onChange: onChange,
    size: size
  });
}

function getSupportedPanels() {
  return Object.values(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.panels).reduce((panels, panel) => {
    if (isSupportedPanelPlugin(panel.id)) {
      panels.push({
        value: panel.id,
        label: panel.name,
        imgUrl: panel.info.logos.small
      });
    }

    return panels;
  }, []);
}

function isSupportedPanelPlugin(id) {
  switch (id) {
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.TIMESERIES:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.TABLE:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STAT:
      return true;

    default:
      return false;
  }
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AlertRuleForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertRuleForm": () => (/* binding */ AlertRuleForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _AlertTypeStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AlertTypeStep.tsx");
/* harmony import */ var _DetailsStep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/DetailsStep.tsx");
/* harmony import */ var _QueryStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryStep.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/0/cache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _CloudConditionsStep__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudConditionsStep.tsx");
/* harmony import */ var _GrafanaConditionsStep__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaConditionsStep.tsx");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _RuleInspector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleInspector.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _QueryStep, _GrafanaConditionsSte, _CloudConditionsStep, _DetailsStep;

























const AlertRuleForm = ({
  existing
}) => {
  var _ref;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_15__.useAppNotification)();
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_14__.useQueryParams)();
  const [showEditYaml, setShowEditYaml] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const returnTo = (_ref = queryParams['returnTo']) !== null && _ref !== void 0 ? _ref : '/alerting/list';
  const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (existing) {
      return (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_13__.rulerRuleToFormValues)(existing);
    }

    return Object.assign({}, (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_13__.getDefaultFormValues)(), {
      queries: (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_13__.getDefaultQueries)()
    }, queryParams['defaults'] ? JSON.parse(queryParams['defaults']) : {}, {
      type: _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.grafana
    });
  }, [existing, queryParams]);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
    mode: 'onSubmit',
    defaultValues,
    shouldFocusError: true
  });
  const {
    handleSubmit,
    watch
  } = formAPI;
  const type = watch('type');
  const dataSourceName = watch('dataSourceName');
  const showStep2 = Boolean(type && (type === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.grafana || !!dataSourceName));
  const submitState = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__.useUnifiedAlertingSelector)(state => state.ruleForm.saveRule) || _utils_redux__WEBPACK_IMPORTED_MODULE_9__.initialAsyncRequestState;
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_12__.useCleanup)(state => state.unifiedAlerting.ruleForm.saveRule);

  const submit = (values, exitOnSave) => {
    var _values$annotations$m, _values$annotations, _values$labels$map$fi, _values$labels;

    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.saveRuleFormAction)({
      values: Object.assign({}, defaultValues, values, {
        annotations: (_values$annotations$m = (_values$annotations = values.annotations) === null || _values$annotations === void 0 ? void 0 : _values$annotations.map(({
          key,
          value
        }) => ({
          key: key.trim(),
          value: value.trim()
        })).filter(({
          key,
          value
        }) => !!key && !!value)) !== null && _values$annotations$m !== void 0 ? _values$annotations$m : [],
        labels: (_values$labels$map$fi = (_values$labels = values.labels) === null || _values$labels === void 0 ? void 0 : _values$labels.map(({
          key,
          value
        }) => ({
          key: key.trim(),
          value: value.trim()
        })).filter(({
          key
        }) => !!key)) !== null && _values$labels$map$fi !== void 0 ? _values$labels$map$fi : []
      }),
      existing,
      redirectOnSave: exitOnSave ? returnTo : undefined
    }));
  };

  const deleteRule = () => {
    if (existing) {
      const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_18__.fromRulerRule(existing.ruleSourceName, existing.namespace, existing.group.name, existing.rule);
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.deleteRuleAction)(identifier, {
        navigateTo: '/alerting/list'
      }));
    }
  };

  const onInvalid = () => {
    notifyApp.error('There are errors in the form. Please correct them and try again!');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.FormProvider, Object.assign({}, formAPI, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("form", {
      onSubmit: e => e.preventDefault(),
      className: styles.form,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.PageToolbar, {
        title: `${existing ? 'Edit' : 'Create'} alert rule`,
        pageIcon: "bell",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
          to: returnTo,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "secondary",
            disabled: submitState.loading,
            type: "button",
            fill: "outline",
            children: "Cancel"
          })
        }), existing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "destructive",
          type: "button",
          onClick: () => setShowDeleteModal(true),
          children: "Delete"
        }) : null, isCortexLokiOrRecordingRule(watch) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "secondary",
          type: "button",
          onClick: () => setShowEditYaml(true),
          disabled: submitState.loading,
          children: "Edit yaml"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "primary",
          type: "button",
          onClick: handleSubmit(values => submit(values, false), onInvalid),
          disabled: submitState.loading,
          children: [submitState.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
            className: styles.buttonSpinner,
            inline: true
          }), "Save"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "primary",
          type: "button",
          onClick: handleSubmit(values => submit(values, true), onInvalid),
          disabled: submitState.loading,
          children: [submitState.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
            className: styles.buttonSpinner,
            inline: true
          }), "Save and exit"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
        className: styles.contentOuter,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CustomScrollbar, {
          autoHeightMin: "100%",
          hideHorizontalTrack: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: styles.contentInner,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_AlertTypeStep__WEBPACK_IMPORTED_MODULE_3__.AlertTypeStep, {
              editingExistingRule: !!existing
            }), showStep2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
              children: [_QueryStep || (_QueryStep = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_QueryStep__WEBPACK_IMPORTED_MODULE_5__.QueryStep, {})), type === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.grafana ? _GrafanaConditionsSte || (_GrafanaConditionsSte = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_GrafanaConditionsStep__WEBPACK_IMPORTED_MODULE_17__.GrafanaConditionsStep, {})) : _CloudConditionsStep || (_CloudConditionsStep = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_CloudConditionsStep__WEBPACK_IMPORTED_MODULE_16__.CloudConditionsStep, {})), _DetailsStep || (_DetailsStep = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_DetailsStep__WEBPACK_IMPORTED_MODULE_4__.DetailsStep, {}))]
            })]
          })
        })
      })]
    }), showDeleteModal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
      isOpen: true,
      title: "Delete rule",
      body: "Deleting this rule will permanently remove it. Are you sure you want to delete this rule?",
      confirmText: "Yes, delete",
      icon: "exclamation-triangle",
      onConfirm: deleteRule,
      onDismiss: () => setShowDeleteModal(false)
    }) : null, showEditYaml ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_RuleInspector__WEBPACK_IMPORTED_MODULE_19__.RuleInspector, {
      onClose: () => setShowEditYaml(false)
    }) : null]
  }));
};

const isCortexLokiOrRecordingRule = watch => {
  const [ruleType, dataSourceName] = watch(['type', 'dataSourceName']);
  return (ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudAlerting || ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudRecording) && dataSourceName !== '';
};

const getStyles = theme => {
  return {
    buttonSpinner: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin-right: ${theme.spacing(1)};
    `,
    form: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    `,
    contentInner: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      flex: 1;
      padding: ${theme.spacing(2)};
    `,
    contentOuter: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.weak};
      border-radius: ${theme.shape.borderRadius()};
      margin: ${theme.spacing(0, 2, 2)};
      overflow: hidden;
      flex: 1;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AlertTypeStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertTypeStep": () => (/* binding */ AlertTypeStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _RuleFolderPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleFolderPicker.tsx");
/* harmony import */ var _GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GroupAndNamespaceFields.tsx");
/* harmony import */ var _CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var _rule_types_RuleTypePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleTypePicker.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/0/cache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label;

const _excluded = ["onChange", "ref"],
      _excluded2 = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const recordingRuleNameValidationPattern = {
  message: 'Recording rule name must be valid metric name. It may only contain letters, numbers, and colons. It may not contain whitespace.',
  value: /^[a-zA-Z_:][a-zA-Z0-9_:]*$/
};
const AlertTypeStep = ({
  editingExistingRule
}) => {
  var _errors$type, _errors$type2, _errors$name, _errors$name2, _errors$dataSourceNam, _errors$dataSourceNam2, _errors$folder, _errors$folder2, _errors$group, _errors$group2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const {
    enabledRuleTypes,
    defaultRuleType
  } = getAvailableRuleTypes();
  const {
    register,
    control,
    watch,
    formState: {
      errors
    },
    setValue,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const ruleFormType = watch('type');
  const dataSourceName = watch('dataSourceName');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_3__.RuleEditorSection, {
    stepNo: 1,
    title: "Rule type",
    children: [!editingExistingRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      error: (_errors$type = errors.type) === null || _errors$type === void 0 ? void 0 : _errors$type.message,
      invalid: !!((_errors$type2 = errors.type) !== null && _errors$type2 !== void 0 && _errors$type2.message),
      "data-testid": "alert-type-picker",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        render: ({
          field: {
            onChange
          }
        }) => {
          var _getValues;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_rule_types_RuleTypePicker__WEBPACK_IMPORTED_MODULE_10__.RuleTypePicker, {
            "aria-label": "Rule type",
            selected: (_getValues = getValues('type')) !== null && _getValues !== void 0 ? _getValues : defaultRuleType,
            onChange: onChange,
            enabledTypes: enabledRuleTypes
          });
        },
        name: "type",
        control: control,
        rules: {
          required: {
            value: true,
            message: 'Please select alert type'
          }
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      className: styles.formInput,
      label: "Rule name",
      error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
      invalid: !!((_errors$name2 = errors.name) !== null && _errors$name2 !== void 0 && _errors$name2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
        id: "name"
      }, register('name', {
        required: {
          value: true,
          message: 'Must enter an alert name'
        },
        pattern: ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording ? recordingRuleNameValidationPattern : undefined,
        validate: {
          pathSeparator: value => {
            // we use the alert rule name as the "groupname" for Grafana managed alerts, so we can't allow path separators
            if (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.grafana) {
              return (0,_util__WEBPACK_IMPORTED_MODULE_9__.checkForPathSeparator)(value);
            }

            return true;
          }
        }
      }), {
        autoFocus: true
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: styles.flexRow,
      children: (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording || ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudAlerting) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        className: styles.formInput,
        label: "Select data source",
        error: (_errors$dataSourceNam = errors.dataSourceName) === null || _errors$dataSourceNam === void 0 ? void 0 : _errors$dataSourceNam.message,
        invalid: !!((_errors$dataSourceNam2 = errors.dataSourceName) !== null && _errors$dataSourceNam2 !== void 0 && _errors$dataSourceNam2.message),
        "data-testid": "datasource-picker",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
          render: _ref => {
            let {
              field: {
                onChange
              }
            } = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_8__.CloudRulesSourcePicker, Object.assign({}, field, {
              onChange: ds => {
                var _ds$name;

                // reset location if switching data sources, as different rules source will have different groups and namespaces
                setValue('location', undefined);
                onChange((_ds$name = ds === null || ds === void 0 ? void 0 : ds.name) !== null && _ds$name !== void 0 ? _ds$name : null);
              }
            }));
          },
          name: "dataSourceName",
          control: control,
          rules: {
            required: {
              value: true,
              message: 'Please select a data source'
            }
          }
        })
      })
    }), (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording || ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudAlerting) && dataSourceName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_7__.GroupAndNamespaceFields, {
      rulesSourceName: dataSourceName
    }), ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.grafana && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: styles.flexRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
          htmlFor: "folder",
          description: 'Select a folder to store your rule.',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_13__.Stack, {
            gap: 0.5,
            children: ["Folder", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
              placement: "top",
              content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                children: "Each folder has unique folder permission. When you store multiple rules in a folder, the folder access permissions get assigned to the rules."
              }),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                name: "info-circle",
                size: "xs"
              })
            })]
          })
        })),
        className: styles.formInput,
        error: (_errors$folder = errors.folder) === null || _errors$folder === void 0 ? void 0 : _errors$folder.message,
        invalid: !!((_errors$folder2 = errors.folder) !== null && _errors$folder2 !== void 0 && _errors$folder2.message),
        "data-testid": "folder-picker",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
          render: _ref2 => {
            let {} = _ref2,
                field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_RuleFolderPicker__WEBPACK_IMPORTED_MODULE_6__.RuleFolderPicker, Object.assign({
              inputId: "folder"
            }, field, {
              enableCreateNew: true,
              enableReset: true
            }));
          },
          name: "folder",
          rules: {
            required: {
              value: true,
              message: 'Please select a folder'
            },
            validate: {
              pathSeparator: folder => (0,_util__WEBPACK_IMPORTED_MODULE_9__.checkForPathSeparator)(folder.title)
            }
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Group",
        "data-testid": "group-picker",
        description: "Rules within the same group are evaluated after the same time interval.",
        className: styles.formInput,
        error: (_errors$group = errors.group) === null || _errors$group === void 0 ? void 0 : _errors$group.message,
        invalid: !!((_errors$group2 = errors.group) !== null && _errors$group2 !== void 0 && _errors$group2.message),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
          id: "group"
        }, register('group', {
          required: {
            value: true,
            message: 'Must enter a group name'
          }
        })))
      })]
    })]
  });
};

function getAvailableRuleTypes() {
  const canCreateGrafanaRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_12__.AccessControlAction.AlertingRuleCreate);
  const canCreateCloudRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_12__.AccessControlAction.AlertingRuleExternalWrite);
  const defaultRuleType = canCreateGrafanaRules ? _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.grafana : _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudAlerting;
  const enabledRuleTypes = [];

  if (canCreateGrafanaRules) {
    enabledRuleTypes.push(_types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.grafana);
  }

  if (canCreateCloudRules) {
    enabledRuleTypes.push(_types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudAlerting, _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording);
  }

  return {
    enabledRuleTypes,
    defaultRuleType
  };
}

const getStyles = theme => ({
  formInput: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    width: 330px;
    & + & {
      margin-left: ${theme.spacing(3)};
    }
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationKeyInput": () => (/* binding */ AnnotationKeyInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _SelectWIthAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value", "existingKeys", "aria-label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const AnnotationKeyInput = _ref => {
  let {
    value,
    existingKeys,
    'aria-label': ariaLabel
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const annotationOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.Annotation).filter(key => !existingKeys.includes(key)) // remove keys already taken in other annotations
  .map(key => ({
    value: key,
    label: _utils_constants__WEBPACK_IMPORTED_MODULE_2__.annotationLabels[key]
  })), [existingKeys]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_1__.SelectWithAdd, Object.assign({
    "aria-label": ariaLabel,
    value: value,
    options: annotationOptions,
    custom: !!value && !Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.Annotation).includes(value)
  }, rest));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

var _Label;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const AnnotationsField = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);
  const {
    control,
    register,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const annotations = watch('annotations');
  const existingKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => annotations.filter((_, idx) => idx !== index).map(({
    key
  }) => key), [annotations]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
      children: "Summary and annotations"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldArray, {
      name: 'annotations',
      control: control,
      children: ({
        fields,
        append,
        remove
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: styles.flexColumn,
          children: [fields.map((field, index) => {
            var _annotations$index, _annotations$index$ke, _errors$annotations, _errors$annotations$i, _errors$annotations$i2, _errors$annotations2, _errors$annotations2$, _errors$annotations2$2, _annotations$index2, _errors$annotations3, _errors$annotations3$, _errors$annotations3$2, _errors$annotations4, _errors$annotations4$, _errors$annotations4$2;

            const isUrl = (_annotations$index = annotations[index]) === null || _annotations$index === void 0 ? void 0 : (_annotations$index$ke = _annotations$index.key) === null || _annotations$index$ke === void 0 ? void 0 : _annotations$index$ke.toLocaleLowerCase().endsWith('url');
            const ValueInputComponent = isUrl ? _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input : _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: styles.flexRow,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                className: styles.field,
                invalid: !!((_errors$annotations = errors.annotations) !== null && _errors$annotations !== void 0 && (_errors$annotations$i = _errors$annotations[index]) !== null && _errors$annotations$i !== void 0 && (_errors$annotations$i2 = _errors$annotations$i.key) !== null && _errors$annotations$i2 !== void 0 && _errors$annotations$i2.message),
                error: (_errors$annotations2 = errors.annotations) === null || _errors$annotations2 === void 0 ? void 0 : (_errors$annotations2$ = _errors$annotations2[index]) === null || _errors$annotations2$ === void 0 ? void 0 : (_errors$annotations2$2 = _errors$annotations2$.key) === null || _errors$annotations2$2 === void 0 ? void 0 : _errors$annotations2$2.message,
                "data-testid": `annotation-key-${index}`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
                  name: `annotations[${index}].key`,
                  render: _ref => {
                    let {} = _ref,
                        field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__.AnnotationKeyInput, Object.assign({}, field, {
                      "aria-label": `Annotation detail ${index + 1}`,
                      existingKeys: existingKeys(index),
                      width: 18
                    }));
                  },
                  control: control,
                  rules: {
                    required: {
                      value: !!((_annotations$index2 = annotations[index]) !== null && _annotations$index2 !== void 0 && _annotations$index2.value),
                      message: 'Required.'
                    }
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.flexRowItemMargin, styles.field),
                invalid: !!((_errors$annotations3 = errors.annotations) !== null && _errors$annotations3 !== void 0 && (_errors$annotations3$ = _errors$annotations3[index]) !== null && _errors$annotations3$ !== void 0 && (_errors$annotations3$2 = _errors$annotations3$.value) !== null && _errors$annotations3$2 !== void 0 && _errors$annotations3$2.message),
                error: (_errors$annotations4 = errors.annotations) === null || _errors$annotations4 === void 0 ? void 0 : (_errors$annotations4$ = _errors$annotations4[index]) === null || _errors$annotations4$ === void 0 ? void 0 : (_errors$annotations4$2 = _errors$annotations4$.value) === null || _errors$annotations4$2 === void 0 ? void 0 : _errors$annotations4$2.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ValueInputComponent, Object.assign({
                  "data-testid": `annotation-value-${index}`,
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.annotationValueInput, {
                    [styles.textarea]: !isUrl
                  })
                }, register(`annotations[${index}].value`), {
                  placeholder: isUrl ? 'https://' : `Text`,
                  defaultValue: field.value
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                type: "button",
                className: styles.flexRowItemMargin,
                "aria-label": "delete annotation",
                icon: "trash-alt",
                variant: "secondary",
                onClick: () => remove(index)
              })]
            }, field.id);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            className: styles.addAnnotationsButton,
            icon: "plus-circle",
            type: "button",
            variant: "secondary",
            onClick: () => {
              append({
                key: '',
                value: ''
              });
            },
            children: "Add info"
          })]
        });
      }
    })]
  });
};

const getStyles = theme => ({
  annotationValueInput: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    width: 426px;
  `,
  textarea: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    height: 76px;
  `,
  addAnnotationsButton: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    flex-grow: 0;
    align-self: flex-start;
    margin-left: 148px;
  `,
  flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;
    flex-direction: column;
  `,
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-bottom: ${theme.spacing.xs};
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  flexRowItemMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-left: ${theme.spacing.xs};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudConditionsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudConditionsStep": () => (/* binding */ CloudConditionsStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _PreviewRule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _PreviewRule;

const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const CloudConditionsStep = () => {
  var _errors$forTime, _errors$forTime2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const type = watch('type'); // cloud recording rules do not have alert conditions

  if (type === _types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.cloudRecording) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_6__.RuleEditorSection, {
    stepNo: 3,
    title: "Define alert conditions",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: "For",
      description: "Expression has to be true for this long for the alert to be fired.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          invalid: !!((_errors$forTime = errors.forTime) !== null && _errors$forTime !== void 0 && _errors$forTime.message),
          error: (_errors$forTime2 = errors.forTime) === null || _errors$forTime2 === void 0 ? void 0 : _errors$forTime2.message,
          className: styles.inlineField,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('forTime', {
            pattern: {
              value: /^\d+$/,
              message: 'Must be a positive integer.'
            }
          }), {
            width: 8
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
          name: "forTimeUnit",
          render: _ref => {
            let {
              field: {
                onChange
              }
            } = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
              menuShouldPortal: true
            }, field, {
              options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
              onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value),
              width: 15,
              className: styles.timeUnit
            }));
          },
          control: control
        })]
      })
    }), _PreviewRule || (_PreviewRule = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PreviewRule__WEBPACK_IMPORTED_MODULE_7__.PreviewRule, {}))]
  });
};

const getStyles = theme => ({
  inlineField: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-bottom: 0;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  timeUnit: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-left: ${theme.spacing.xs};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudRulesSourcePicker": () => (/* binding */ CloudRulesSourcePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function CloudRulesSourcePicker(_ref) {
  let {
    value
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const rulesSourcesWithRuler = (0,_hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_2__.useRulesSourcesWithRuler)();
  const dataSourceFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(ds => {
    return !!rulesSourcesWithRuler.find(({
      id
    }) => id === ds.id);
  }, [rulesSourcesWithRuler]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourcePicker, Object.assign({
    noDefault: true,
    alerting: true,
    filter: dataSourceFilter,
    current: value
  }, props));
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/ConditionField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionField": () => (/* binding */ ConditionField)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ConditionField = () => {
  var _errors$condition, _errors$condition2;

  const {
    watch,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const queries = watch('queries');
  const condition = watch('condition');
  const options = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => queries.filter(q => !!q.refId).map(q => ({
    value: q.refId,
    label: q.refId
  })), [queries]); // reset condition if option no longer exists or if it is unset, but there are options available

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const expressions = queries.filter(query => query.datasourceUid === app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_1__.ExpressionDatasourceUID);

    if (condition && !options.find(({
      value
    }) => value === condition)) {
      setValue('condition', expressions.length ? expressions[expressions.length - 1].refId : null);
    } else if (!condition && expressions.length) {
      setValue('condition', expressions[expressions.length - 1].refId);
    }
  }, [condition, options, queries, setValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Field, {
    label: "Condition",
    description: "The query or expression that will be alerted on",
    error: (_errors$condition = errors.condition) === null || _errors$condition === void 0 ? void 0 : _errors$condition.message,
    invalid: !!((_errors$condition2 = errors.condition) !== null && _errors$condition2 !== void 0 && _errors$condition2.message),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.InputControl, {
      name: "condition",
      render: _ref => {
        let {
          field: {
            onChange
          }
        } = _ref,
            field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, Object.assign({
          menuShouldPortal: true,
          "aria-label": "Condition"
        }, field, {
          width: 42,
          options: options,
          onChange: v => {
            var _v$value;

            return onChange((_v$value = v === null || v === void 0 ? void 0 : v.value) !== null && _v$value !== void 0 ? _v$value : null);
          },
          noOptionsMessage: "No queries defined"
        }));
      },
      rules: {
        required: {
          value: true,
          message: 'Please select the condition to alert on'
        }
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/DetailsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsStep": () => (/* binding */ DetailsStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _LabelsField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx");
/* harmony import */ var _AnnotationsField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _AnnotationsField, _LabelsField;









const DetailsStep = () => {
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const type = watch('type');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_3__.RuleEditorSection, {
    stepNo: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording ? 3 : 4,
    title: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording ? 'Add details for your recording rule' : 'Add details for your alert',
    description: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording ? 'Add labels to help you better manage your rules' : 'Write a summary and add labels to help you better manage your alerts',
    children: [type !== _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording && (_AnnotationsField || (_AnnotationsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AnnotationsField__WEBPACK_IMPORTED_MODULE_2__["default"], {}))), _LabelsField || (_LabelsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LabelsField__WEBPACK_IMPORTED_MODULE_1__["default"], {}))]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/ExpressionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressionEditor": () => (/* binding */ ExpressionEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;








const ExpressionEditor = ({
  value,
  onChange,
  dataSourceName
}) => {
  var _dataSource$component, _dataSource$component2;

  const {
    mapToValue,
    mapToQuery
  } = useQueryMappers(dataSourceName);
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(mapToQuery({
    refId: 'A',
    hide: false
  }, value));
  const {
    error,
    loading,
    value: dataSource
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().get(dataSourceName);
  }, [dataSourceName]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(query => {
    setQuery(query);
    onChange(mapToValue(query));
  }, [onChange, mapToValue]);

  if (loading || (dataSource === null || dataSource === void 0 ? void 0 : dataSource.name) !== dataSourceName) {
    return null;
  }

  if (error || !dataSource || !(dataSource !== null && dataSource !== void 0 && (_dataSource$component = dataSource.components) !== null && _dataSource$component !== void 0 && _dataSource$component.QueryEditor)) {
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) || 'Data source plugin does not export any Query Editor component';
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: ["Could not load query editor due to: ", errorMessage]
    }));
  }

  const QueryEditor = dataSource === null || dataSource === void 0 ? void 0 : (_dataSource$component2 = dataSource.components) === null || _dataSource$component2 === void 0 ? void 0 : _dataSource$component2.QueryEditor;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(QueryEditor, {
    query: query,
    queries: [query],
    app: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.CloudAlerting,
    onChange: onChangeQuery,
    onRunQuery: lodash__WEBPACK_IMPORTED_MODULE_1__.noop,
    datasource: dataSource
  });
};

function useQueryMappers(dataSourceName) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const settings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().getInstanceSettings(dataSourceName);

    switch (settings === null || settings === void 0 ? void 0 : settings.type) {
      case 'loki':
      case 'prometheus':
        return {
          mapToValue: query => query.expr,
          mapToQuery: (existing, value) => Object.assign({}, existing, {
            expr: value
          })
        };

      default:
        throw new Error(`${dataSourceName} is not supported as an expression editor`);
    }
  }, [dataSourceName]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaAlertStatePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaAlertStatePicker": () => (/* binding */ GrafanaAlertStatePicker)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["includeNoData", "includeError"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const options = [{
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.GrafanaAlertStateDecision.Alerting,
  label: 'Alerting'
}, {
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.GrafanaAlertStateDecision.NoData,
  label: 'No Data'
}, {
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.GrafanaAlertStateDecision.OK,
  label: 'OK'
}, {
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.GrafanaAlertStateDecision.Error,
  label: 'Error'
}];
const GrafanaAlertStatePicker = _ref => {
  let {
    includeNoData,
    includeError
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const opts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!includeNoData) {
      return options.filter(opt => opt.value !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.GrafanaAlertStateDecision.NoData);
    }

    if (!includeError) {
      return options.filter(opt => opt.value !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.GrafanaAlertStateDecision.Error);
    }

    return options;
  }, [includeNoData, includeError]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, Object.assign({
    menuShouldPortal: true,
    options: opts
  }, props));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaConditionEvalWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaConditionEvalWarning": () => (/* binding */ GrafanaConditionEvalWarning)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;







// a warning that will be shown if a problematic yet technically valid combination of "evaluate every" and "evaluate for" is enetered
const GrafanaConditionEvalWarning = () => {
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const evaluateFor = watch('evaluateFor');
  const evaluateEvery = watch('evaluateEvery');

  if (evaluateFor === '0') {
    return null;
  }

  const durationFor = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.parseDuration)(evaluateFor);
  const durationEvery = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.parseDuration)(evaluateEvery);

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(durationFor) || (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(durationEvery)) {
    return null;
  }

  const millisFor = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.durationToMilliseconds)(durationFor);
  const millisEvery = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.durationToMilliseconds)(durationEvery);

  if (millisFor && millisEvery && millisFor <= millisEvery) {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "warning",
      title: "",
      children: "Setting a \"for\" duration that is less than or equal to the evaluation interval will result in the evaluation interval being used to calculate when an alert that has stopped receiving data will be closed."
    }));
  }

  return null;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaConditionsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaConditionsStep": () => (/* binding */ GrafanaConditionsStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _ConditionField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/ConditionField.tsx");
/* harmony import */ var _GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaAlertStatePicker.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _PreviewRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx");
/* harmony import */ var _GrafanaConditionEvalWarning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaConditionEvalWarning.tsx");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"];

var _ConditionField, _GrafanaConditionEval, _PreviewRule;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















const MIN_TIME_RANGE_STEP_S = 10; // 10 seconds

const forValidationOptions = {
  required: {
    value: true,
    message: 'Required.'
  },
  pattern: _utils_time__WEBPACK_IMPORTED_MODULE_5__.durationValidationPattern
};
const evaluateEveryValidationOptions = {
  required: {
    value: true,
    message: 'Required.'
  },
  pattern: _utils_time__WEBPACK_IMPORTED_MODULE_5__.positiveDurationValidationPattern,
  validate: value => {
    const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.parseDuration)(value);

    if (Object.keys(duration).length) {
      const diff = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.durationToMilliseconds)(duration);

      if (diff < MIN_TIME_RANGE_STEP_S * 1000) {
        return `Cannot be less than ${MIN_TIME_RANGE_STEP_S} seconds.`;
      }

      if (diff % (MIN_TIME_RANGE_STEP_S * 1000) !== 0) {
        return `Must be a multiple of ${MIN_TIME_RANGE_STEP_S} seconds.`;
      }
    }

    return true;
  }
};
const GrafanaConditionsStep = () => {
  var _errors$evaluateFor, _errors$evaluateFor2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const [showErrorHandling, setShowErrorHandling] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    register,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const evaluateEveryId = 'eval-every-input';
  const evaluateForId = 'eval-for-input';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_8__.RuleEditorSection, {
    stepNo: 3,
    title: "Define alert conditions",
    children: [_ConditionField || (_ConditionField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ConditionField__WEBPACK_IMPORTED_MODULE_6__.ConditionField, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
      label: "Evaluate",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
          htmlFor: evaluateEveryId,
          width: 16,
          tooltip: "How often the alert will be evaluated to see if it fires",
          children: "Evaluate every"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "Evaluate",
          description: "Evaluation internal applies to every rule within a group. It can overwrite the interval of an existing alert rule.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
            id: evaluateEveryId,
            width: 8
          }, register('evaluateEvery', evaluateEveryValidationOptions)))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
          htmlFor: evaluateForId,
          width: 7,
          tooltip: "Once condition is breached, alert will go into pending state. If it is pending for longer than the \"for\" value, it will become a firing alert.",
          children: "for"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          className: styles.inlineField,
          error: (_errors$evaluateFor = errors.evaluateFor) === null || _errors$evaluateFor === void 0 ? void 0 : _errors$evaluateFor.message,
          invalid: !!((_errors$evaluateFor2 = errors.evaluateFor) !== null && _errors$evaluateFor2 !== void 0 && _errors$evaluateFor2.message),
          validationMessageHorizontalOverflow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
            id: evaluateForId,
            width: 8
          }, register('evaluateFor', forValidationOptions)))
        })]
      })
    }), _GrafanaConditionEval || (_GrafanaConditionEval = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_GrafanaConditionEvalWarning__WEBPACK_IMPORTED_MODULE_10__.GrafanaConditionEvalWarning, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_11__.CollapseToggle, {
      isCollapsed: !showErrorHandling,
      onToggle: collapsed => setShowErrorHandling(!collapsed),
      text: "Configure no data and error handling",
      className: styles.collapseToggle
    }), showErrorHandling && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
        htmlFor: "no-data-state-input",
        label: "Alert state if no data or all values are null",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
          render: _ref => {
            let {
              field: {
                onChange
              }
            } = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_7__.GrafanaAlertStatePicker, Object.assign({}, field, {
              inputId: "no-data-state-input",
              width: 42,
              includeNoData: true,
              includeError: false,
              onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
            }));
          },
          name: "noDataState"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
        htmlFor: "exec-err-state-input",
        label: "Alert state if execution error or timeout",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
          render: _ref2 => {
            let {
              field: {
                onChange
              }
            } = _ref2,
                field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_7__.GrafanaAlertStatePicker, Object.assign({}, field, {
              inputId: "exec-err-state-input",
              width: 42,
              includeNoData: false,
              includeError: true,
              onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
            }));
          },
          name: "execErrState"
        })
      })]
    }), _PreviewRule || (_PreviewRule = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PreviewRule__WEBPACK_IMPORTED_MODULE_9__.PreviewRule, {}))]
  });
};

const getStyles = theme => ({
  inlineField: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-bottom: 0;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  collapseToggle: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin: ${theme.spacing(2, 0, 2, -1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GroupAndNamespaceFields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupAndNamespaceFields": () => (/* binding */ GroupAndNamespaceFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _SelectWIthAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"],
      _excluded2 = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const GroupAndNamespaceFields = ({
  rulesSourceName
}) => {
  var _rulerRequests$rulesS, _errors$namespace, _errors$namespace2, _errors$group, _errors$group2;

  const {
    control,
    watch,
    formState: {
      errors
    },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyle);
  const [customGroup, setCustomGroup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const rulerRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_3__.fetchRulerRulesAction)({
      rulesSourceName
    }));
  }, [rulesSourceName, dispatch]);
  const rulesConfig = (_rulerRequests$rulesS = rulerRequests[rulesSourceName]) === null || _rulerRequests$rulesS === void 0 ? void 0 : _rulerRequests$rulesS.result;
  const namespace = watch('namespace');
  const namespaceOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => rulesConfig ? Object.keys(rulesConfig).map(namespace => ({
    label: namespace,
    value: namespace
  })) : [], [rulesConfig]);
  const groupOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _rulesConfig$namespac;

    return namespace && (rulesConfig === null || rulesConfig === void 0 ? void 0 : (_rulesConfig$namespac = rulesConfig[namespace]) === null || _rulesConfig$namespac === void 0 ? void 0 : _rulesConfig$namespac.map(group => ({
      label: group.name,
      value: group.name
    }))) || [];
  }, [namespace, rulesConfig]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: style.flexRow,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
      "data-testid": "namespace-picker",
      label: "Namespace",
      error: (_errors$namespace = errors.namespace) === null || _errors$namespace === void 0 ? void 0 : _errors$namespace.message,
      invalid: !!((_errors$namespace2 = errors.namespace) !== null && _errors$namespace2 !== void 0 && _errors$namespace2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InputControl, {
        render: _ref => {
          let {
            field: {
              onChange
            }
          } = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_5__.SelectWithAdd, Object.assign({}, field, {
            className: style.input,
            onChange: value => {
              setValue('group', ''); //reset if namespace changes

              onChange(value);
            },
            onCustomChange: custom => {
              custom && setCustomGroup(true);
            },
            options: namespaceOptions,
            width: 42
          }));
        },
        name: "namespace",
        control: control,
        rules: {
          required: {
            value: true,
            message: 'Required.'
          },
          validate: {
            pathSeparator: _util__WEBPACK_IMPORTED_MODULE_8__.checkForPathSeparator
          }
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
      "data-testid": "group-picker",
      label: "Group",
      error: (_errors$group = errors.group) === null || _errors$group === void 0 ? void 0 : _errors$group.message,
      invalid: !!((_errors$group2 = errors.group) !== null && _errors$group2 !== void 0 && _errors$group2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InputControl, {
        render: _ref2 => {
          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_5__.SelectWithAdd, Object.assign({}, field, {
            options: groupOptions,
            width: 42,
            custom: customGroup,
            className: style.input
          }));
        },
        name: "group",
        control: control,
        rules: {
          required: {
            value: true,
            message: 'Required.'
          },
          validate: {
            pathSeparator: _util__WEBPACK_IMPORTED_MODULE_8__.checkForPathSeparator
          }
        }
      })
    })]
  });
};

const getStyle = theme => ({
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_7__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * + * {
      margin-left: ${theme.spacing(3)};
    }
  `,
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_7__.css`
    width: 330px !important;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _InlineLabel;









const LabelsField = ({
  className
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const labels = watch('labels');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(className, styles.wrapper),
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
      children: "Custom Labels"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldArray, {
      control: control,
      name: "labels",
      children: ({
        fields,
        append,
        remove
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.flexRow,
            children: [_InlineLabel || (_InlineLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineLabel, {
              width: 18,
              children: "Labels"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: styles.flexColumn,
              children: [fields.map((field, index) => {
                var _errors$labels, _errors$labels$index, _errors$labels$index$, _errors$labels2, _errors$labels2$index, _errors$labels2$index2, _labels$index, _errors$labels3, _errors$labels3$index, _errors$labels3$index2, _errors$labels4, _errors$labels4$index, _errors$labels4$index2, _labels$index2;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.flexRow, styles.centerAlignRow),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels = errors.labels) !== null && _errors$labels !== void 0 && (_errors$labels$index = _errors$labels[index]) !== null && _errors$labels$index !== void 0 && (_errors$labels$index$ = _errors$labels$index.key) !== null && _errors$labels$index$ !== void 0 && _errors$labels$index$.message),
                      error: (_errors$labels2 = errors.labels) === null || _errors$labels2 === void 0 ? void 0 : (_errors$labels2$index = _errors$labels2[index]) === null || _errors$labels2$index === void 0 ? void 0 : (_errors$labels2$index2 = _errors$labels2$index.key) === null || _errors$labels2$index2 === void 0 ? void 0 : _errors$labels2$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`labels[${index}].key`, {
                        required: {
                          value: !!((_labels$index = labels[index]) !== null && _labels$index !== void 0 && _labels$index.value),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "key",
                        "data-testid": `label-key-${index}`,
                        defaultValue: field.key
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineLabel, {
                      className: styles.equalSign,
                      children: "="
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels3 = errors.labels) !== null && _errors$labels3 !== void 0 && (_errors$labels3$index = _errors$labels3[index]) !== null && _errors$labels3$index !== void 0 && (_errors$labels3$index2 = _errors$labels3$index.value) !== null && _errors$labels3$index2 !== void 0 && _errors$labels3$index2.message),
                      error: (_errors$labels4 = errors.labels) === null || _errors$labels4 === void 0 ? void 0 : (_errors$labels4$index = _errors$labels4[index]) === null || _errors$labels4$index === void 0 ? void 0 : (_errors$labels4$index2 = _errors$labels4$index.value) === null || _errors$labels4$index2 === void 0 ? void 0 : _errors$labels4$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`labels[${index}].value`, {
                        required: {
                          value: !!((_labels$index2 = labels[index]) !== null && _labels$index2 !== void 0 && _labels$index2.key),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "value",
                        "data-testid": `label-value-${index}`,
                        defaultValue: field.value
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      className: styles.deleteLabelButton,
                      "aria-label": "delete label",
                      icon: "trash-alt",
                      variant: "secondary",
                      onClick: () => {
                        remove(index);
                      }
                    })]
                  })
                }, field.id);
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                className: styles.addLabelButton,
                icon: "plus-circle",
                type: "button",
                variant: "secondary",
                onClick: () => {
                  append({});
                },
                children: "Add label"
              })]
            })]
          })
        });
      }
    })]
  });
};

const getStyles = theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin-top: ${theme.spacing.md};
    `,
    flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      flex-direction: column;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      & + button {
        margin-left: ${theme.spacing.xs};
      }
    `,
    deleteLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin-left: ${theme.spacing.xs};
      align-self: flex-start;
    `,
    addLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      flex-grow: 0;
      align-self: flex-start;
    `,
    centerAlignRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      align-items: baseline;
    `,
    equalSign: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      align-self: flex-start;
      width: 28px;
      justify-content: center;
      margin-left: ${theme.spacing.xs};
    `,
    labelInput: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      width: 183px;
      margin-bottom: ${theme.spacing.sm};
      & + & {
        margin-left: ${theme.spacing.sm};
      }
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewRule": () => (/* binding */ PreviewRule)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js");
/* harmony import */ var _api_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/api/preview.ts");
/* harmony import */ var _hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _PreviewRuleResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRuleResult.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;














const fields = ['type', 'dataSourceName', 'condition', 'queries', 'expression'];
function PreviewRule() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [preview, onPreview] = usePreview();
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const [type, condition, queries] = watch(['type', 'condition', 'queries']);
  const {
    allDataSourcesAvailable
  } = (0,_hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_6__.useAlertQueriesStatus)(queries);

  if (type === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudRecording || type === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudAlerting) {
    return null;
  }

  const isPreviewAvailable = Boolean(condition) && allDataSourcesAvailable;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      children: [allDataSourcesAvailable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        disabled: !isPreviewAvailable,
        type: "button",
        variant: "primary",
        onClick: onPreview,
        children: "Preview alerts"
      }), !allDataSourcesAvailable && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: "Preview is not available",
        severity: "warning",
        children: "Cannot display the query preview. Some of the data sources used in the queries are not available."
      })))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PreviewRuleResult__WEBPACK_IMPORTED_MODULE_8__.PreviewRuleResult, {
      preview: preview
    })]
  });
}

function usePreview() {
  const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const {
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const isMounted = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const onPreview = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    const values = getValues(fields);
    const request = createPreviewRequest(values);
    (0,_api_preview__WEBPACK_IMPORTED_MODULE_5__.previewAlertRule)(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeWhile)(response => !isCompleted(response), true)).subscribe(response => {
      if (!isMounted()) {
        return;
      }

      setPreview(response);
    });
  }, [getValues, isMounted]);
  return [preview, onPreview];
}

function createPreviewRequest(values) {
  const [type, dataSourceName, condition, queries, expression] = values;

  switch (type) {
    case _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudAlerting:
      return {
        dataSourceName,
        expr: expression
      };

    case _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.grafana:
      return {
        grafana_condition: {
          condition,
          data: queries,
          now: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeFormatISO)(Date.now())
        }
      };

    default:
      throw new Error(`Alert type ${type} not supported by preview.`);
  }
}

function isCompleted(response) {
  switch (response.data.state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Error:
      return true;

    default:
      return false;
  }
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
      max-width: ${theme.breakpoints.values.xxl}px;
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/PreviewRuleResult.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewRuleResult": () => (/* binding */ PreviewRuleResult)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;











function PreviewRuleResult(props) {
  const {
    preview
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const fieldConfig = {
    defaults: {},
    overrides: [{
      matcher: {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldMatcherID.byName,
        options: 'Info'
      },
      properties: [{
        id: 'custom.displayMode',
        value: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TableCellDisplayMode.JSONView
      }]
    }]
  };

  if (!preview) {
    return null;
  }

  const {
    data,
    ruleType
  } = preview;

  if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        children: "Loading preview..."
      }))
    });
  }

  if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: data.error ? (0,_utils_redux__WEBPACK_IMPORTED_MODULE_7__.messageFromError)(data.error) : 'Failed to preview alert rule'
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
      children: ["Preview based on the result of running the query, for this moment.", ' ', ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana ? 'Configuration for `no data` and `error handling` is not applied.' : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.table,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: ({
          width,
          height
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          style: {
            width: `${width}px`,
            height: `${height}px`
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.PanelRenderer, {
            title: "",
            width: width,
            height: height,
            pluginId: "table",
            data: data,
            fieldConfig: fieldConfig
          })
        })
      })
    })]
  });
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin: ${theme.spacing(2)} 0;
    `,
    table: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      flex: 1 1 auto;
      height: 135px;
      margin-top: ${theme.spacing(2)};
      border: 1px solid ${theme.colors.border.medium};
      border-radius: ${theme.shape.borderRadius(1)};
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _QueryRows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryRows.tsx");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/expressions/utils/expressionTypes.ts");
/* harmony import */ var app_features_expressions_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/expressions/types.ts");
/* harmony import */ var _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertingQueryRunner.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    var _props$value;

    super(props);

    _defineProperty(this, "runner", void 0);

    _defineProperty(this, "queries", void 0);

    _defineProperty(this, "onRunQueries", () => {
      const {
        queries
      } = this;
      this.runner.run(queries);
    });

    _defineProperty(this, "onCancelQueries", () => {
      this.runner.cancel();
    });

    _defineProperty(this, "onChangeQueries", queries => {
      this.queries = queries;
      this.props.onChange(queries);
    });

    _defineProperty(this, "onDuplicateQuery", query => {
      const {
        queries
      } = this;
      this.onChangeQueries(addQuery(queries, query));
    });

    _defineProperty(this, "onNewAlertingQuery", () => {
      const {
        queries
      } = this;
      const defaultDataSource = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_12__.getDatasourceSrv)().getInstanceSettings('default');

      if (!defaultDataSource) {
        return;
      }

      this.onChangeQueries(addQuery(queries, {
        datasourceUid: defaultDataSource.uid,
        model: {
          refId: '',
          datasource: {
            type: defaultDataSource.type,
            uid: defaultDataSource.uid
          }
        }
      }));
    });

    _defineProperty(this, "onNewExpressionQuery", () => {
      const {
        queries
      } = this;
      this.onChangeQueries(addQuery(queries, {
        datasourceUid: app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__.ExpressionDatasourceUID,
        model: app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__.dataSource.newQuery({
          type: app_features_expressions_types__WEBPACK_IMPORTED_MODULE_10__.ExpressionQueryType.classic,
          conditions: [app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_9__.defaultCondition]
        })
      }));
    });

    this.state = {
      panelDataByRefId: {}
    };
    this.runner = new _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_11__.AlertingQueryRunner();
    this.queries = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : [];
  }

  componentDidMount() {
    this.runner.get().subscribe(data => {
      this.setState({
        panelDataByRefId: data
      });
    });
  }

  componentWillUnmount() {
    this.runner.destroy();
  }

  renderAddQueryRow(styles) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
      spacing: "md",
      align: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "button",
        icon: "plus",
        onClick: this.onNewAlertingQuery,
        variant: "secondary",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryTab.addQuery,
        children: "Query"
      }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.expressionsEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "button",
        icon: "plus",
        onClick: this.onNewExpressionQuery,
        variant: "secondary",
        className: styles.expressionButton,
        children: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
          children: "Expression\xA0"
        }))
      })]
    });
  }

  isRunning() {
    const data = Object.values(this.state.panelDataByRefId).find(d => Boolean(d));
    return (data === null || data === void 0 ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading;
  }

  renderRunQueryButton() {
    const isRunning = this.isRunning();
    const styles = getStyles(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme2);

    if (isRunning) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.runWrapper,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          icon: "fa fa-spinner",
          type: "button",
          variant: "destructive",
          onClick: this.onCancelQueries,
          children: "Cancel"
        })
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: styles.runWrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "sync",
        type: "button",
        onClick: this.onRunQueries,
        children: "Run queries"
      })
    });
  }

  render() {
    const {
      value = []
    } = this.props;
    const {
      panelDataByRefId
    } = this.state;
    const styles = getStyles(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme2);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: styles.container,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_QueryRows__WEBPACK_IMPORTED_MODULE_6__.QueryRows, {
        data: panelDataByRefId,
        queries: value,
        onQueriesChange: this.onChangeQueries,
        onDuplicateQuery: this.onDuplicateQuery,
        onRunQueries: this.onRunQueries
      }), this.renderAddQueryRow(styles), this.renderRunQueryButton()]
    });
  }

}

const addQuery = (queries, queryToAdd) => {
  const refId = (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_8__.getNextRefIdChar)(queries);
  const query = Object.assign({}, queryToAdd, {
    refId,
    queryType: '',
    model: Object.assign({}, queryToAdd.model, {
      hide: false,
      refId
    }),
    relativeTimeRange: defaultTimeRange(queryToAdd.model)
  });
  return [...queries, query];
};

const defaultTimeRange = model => {
  if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_13__.isExpressionQuery)(model)) {
    return;
  }

  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDefaultRelativeTimeRange)();
};

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.stylesFactory)(theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      background-color: ${theme.colors.background.primary};
      height: 100%;
      max-width: ${theme.breakpoints.values.xxl}px;
    `,
    runWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-top: ${theme.spacing(1)};
    `,
    editorWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      border: 1px solid ${theme.colors.border.medium};
      border-radius: ${theme.shape.borderRadius()};
    `,
    expressionButton: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-right: ${theme.spacing(0.5)};
    `
  };
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryRows": () => (/* binding */ QueryRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _QueryWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryWrapper.tsx");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Card$Figure;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class QueryRows extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onRemoveQuery", query => {
      this.props.onQueriesChange(this.props.queries.filter(item => {
        return item.model.refId !== query.refId;
      }));
    });

    _defineProperty(this, "onChangeTimeRange", (timeRange, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props;
      onQueriesChange(queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return Object.assign({}, item, {
          relativeTimeRange: timeRange
        });
      }));
    });

    _defineProperty(this, "onChangeThreshold", (thresholds, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props;
      const referencedRefId = queries[index].refId;
      onQueriesChange(queries.map(query => {
        if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_4__.isExpressionQuery)(query.model)) {
          return query;
        }

        if (query.model.conditions && query.model.conditions[0].query.params[0] === referencedRefId) {
          return Object.assign({}, query, {
            model: Object.assign({}, query.model, {
              conditions: query.model.conditions.map((condition, conditionIndex) => {
                // Only update the first condition for a given refId.
                if (condition.query.params[0] === referencedRefId && conditionIndex === 0) {
                  return Object.assign({}, condition, {
                    evaluator: Object.assign({}, condition.evaluator, {
                      params: [parseFloat(thresholds.steps[1].value.toPrecision(3))]
                    })
                  });
                }

                return condition;
              })
            })
          });
        }

        return query;
      }));
    });

    _defineProperty(this, "onChangeDataSource", (settings, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props;
      const updatedQueries = queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return copyModel(item, settings.uid);
      });
      onQueriesChange(updatedQueries);
    });

    _defineProperty(this, "onChangeQuery", (query, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props; // find what queries still have a reference to the old name

      const previousRefId = queries[index].refId;
      const newRefId = query.refId;
      onQueriesChange((0,_util__WEBPACK_IMPORTED_MODULE_5__.queriesWithUpdatedReferences)(queries, previousRefId, newRefId).map((item, itemIndex) => {
        var _item$model$queryType;

        if (itemIndex !== index) {
          return item;
        }

        return Object.assign({}, item, {
          refId: query.refId,
          queryType: (_item$model$queryType = item.model.queryType) !== null && _item$model$queryType !== void 0 ? _item$model$queryType : '',
          model: Object.assign({}, item.model, query, {
            datasource: query.datasource
          })
        });
      }));
    });

    _defineProperty(this, "onDragEnd", result => {
      const {
        queries,
        onQueriesChange
      } = this.props;

      if (!result || !result.destination) {
        return;
      }

      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      if (startIndex === endIndex) {
        return;
      }

      const update = Array.from(queries);
      const [removed] = update.splice(startIndex, 1);
      update.splice(endIndex, 0, removed);
      onQueriesChange(update);
    });

    _defineProperty(this, "onDuplicateQuery", (query, source) => {
      this.props.onDuplicateQuery(Object.assign({}, source, {
        model: query
      }));
    });

    _defineProperty(this, "getDataSourceSettings", query => {
      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    });

    _defineProperty(this, "getThresholdsForQueries", queries => {
      const record = {};

      for (const query of queries) {
        if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_4__.isExpressionQuery)(query.model)) {
          continue;
        }

        if (!Array.isArray(query.model.conditions)) {
          continue;
        }

        query.model.conditions.forEach((condition, index) => {
          if (index > 0) {
            return;
          }

          const threshold = condition.evaluator.params[0];
          const refId = condition.query.params[0];

          if (condition.evaluator.type === 'outside_range' || condition.evaluator.type === 'within_range') {
            return;
          }

          if (!record[refId]) {
            record[refId] = {
              mode: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.ThresholdsMode.Absolute,
              steps: [{
                value: -Infinity,
                color: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.theme2.colors.success.main
              }]
            };
          }

          record[refId].steps.push({
            value: threshold,
            color: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.theme2.colors.error.main
          });
        });
      }

      return record;
    });

    this.state = {
      dataPerQuery: {}
    };
  }

  render() {
    const {
      onDuplicateQuery,
      onRunQueries,
      queries
    } = this.props;
    const thresholdByRefId = this.getThresholdsForQueries(queries);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.DragDropContext, {
      onDragEnd: this.onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.Droppable, {
        droppableId: "alerting-queries",
        direction: "vertical",
        children: provided => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", Object.assign({
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [queries.map((query, index) => {
              var _this$props$data$quer, _this$props$data;

              const data = (_this$props$data$quer = (_this$props$data = this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data[query.refId]) !== null && _this$props$data$quer !== void 0 ? _this$props$data$quer : {
                series: [],
                state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.NotStarted
              };
              const dsSettings = this.getDataSourceSettings(query);

              if (!dsSettings) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DatasourceNotFound, {
                  index: index,
                  model: query.model,
                  onUpdateDatasource: () => {
                    const defaultDataSource = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_8__.getDatasourceSrv)().getInstanceSettings(null);

                    if (defaultDataSource) {
                      this.onChangeDataSource(defaultDataSource, index);
                    }
                  },
                  onRemoveQuery: () => {
                    this.onRemoveQuery(query);
                  }
                }, `${query.refId}-${index}`);
              }

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_QueryWrapper__WEBPACK_IMPORTED_MODULE_3__.QueryWrapper, {
                index: index,
                dsSettings: dsSettings,
                data: data,
                query: query,
                onChangeQuery: this.onChangeQuery,
                onRemoveQuery: this.onRemoveQuery,
                queries: queries,
                onChangeDataSource: this.onChangeDataSource,
                onDuplicateQuery: onDuplicateQuery,
                onRunQueries: onRunQueries,
                onChangeTimeRange: this.onChangeTimeRange,
                thresholds: thresholdByRefId[query.refId],
                onChangeThreshold: this.onChangeThreshold
              }, `${query.refId}-${index}`);
            }), provided.placeholder]
          }));
        }
      })
    });
  }

}

function copyModel(item, uid) {
  return Object.assign({}, item, {
    model: (0,lodash__WEBPACK_IMPORTED_MODULE_9__.omit)(item.model, 'datasource'),
    datasourceUid: uid
  });
}

const DatasourceNotFound = ({
  index,
  onUpdateDatasource,
  onRemoveQuery,
  model
}) => {
  const refId = model.refId;
  const [showDetails, setShowDetails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleDetails = () => {
    setShowDetails(show => !show);
  };

  const handleUpdateDatasource = () => {
    onUpdateDatasource();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_QueryWrapper__WEBPACK_IMPORTED_MODULE_3__.EmptyQueryWrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_7__.QueryOperationRow, {
      title: refId,
      draggable: true,
      index: index,
      id: refId,
      isOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card, {
        heading: "This datasource has been removed",
        description: 'The datasource for this query was not found, it was either removed or is not installed correctly.',
        children: [_Card$Figure || (_Card$Figure = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Figure, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, {
            name: "question-circle"
          })
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Actions, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
            variant: "secondary",
            onClick: handleUpdateDatasource,
            children: "Update datasource"
          }, "update"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
            variant: "destructive",
            onClick: onRemoveQuery,
            children: "Remove query"
          }, "remove")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.SecondaryActions, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
            onClick: toggleDetails,
            icon: showDetails ? 'angle-up' : 'angle-down',
            fill: "text",
            size: "sm",
            children: "Show details"
          }, "details")
        })]
      }), showDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("pre", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("code", {
            children: JSON.stringify(model, null, 2)
          })
        })
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryStep": () => (/* binding */ QueryStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _ExpressionEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/ExpressionEditor.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"],
      _excluded2 = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const QueryStep = () => {
  var _errors$expression, _errors$expression2;

  const {
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const type = watch('type');
  const dataSourceName = watch('dataSourceName');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__.RuleEditorSection, {
    stepNo: 2,
    title: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording ? 'Create a query to be recorded' : 'Create a query to be alerted on',
    children: [(type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording || type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudAlerting) && dataSourceName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      error: (_errors$expression = errors.expression) === null || _errors$expression === void 0 ? void 0 : _errors$expression.message,
      invalid: !!((_errors$expression2 = errors.expression) !== null && _errors$expression2 !== void 0 && _errors$expression2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
        name: "expression",
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ExpressionEditor__WEBPACK_IMPORTED_MODULE_3__.ExpressionEditor, Object.assign({}, field, {
            dataSourceName: dataSourceName
          }));
        },
        control: control,
        rules: {
          required: {
            value: true,
            message: 'A valid expression is required'
          }
        }
      })
    }), type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.grafana && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      invalid: !!errors.queries,
      error: !!errors.queries && 'Must provide at least one valid query.' || undefined,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
        name: "queries",
        render: _ref2 => {
          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_QueryEditor__WEBPACK_IMPORTED_MODULE_6__.QueryEditor, Object.assign({}, field));
        },
        control: control,
        rules: {
          validate: queries => Array.isArray(queries) && !!queries.length
        }
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyQueryWrapper": () => (/* binding */ EmptyQueryWrapper),
/* harmony export */   "QueryWrapper": () => (/* binding */ QueryWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
/* harmony import */ var _VizWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/VizWrapper.tsx");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const QueryWrapper = ({
  data,
  dsSettings,
  index,
  onChangeDataSource,
  onChangeQuery,
  onChangeTimeRange,
  onRunQueries,
  onRemoveQuery,
  onDuplicateQuery,
  query,
  queries,
  thresholds,
  onChangeThreshold
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const isExpression = (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_7__.isExpressionQuery)(query.model);
  const [pluginId, changePluginId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isExpression ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__.TABLE : _utils_constants__WEBPACK_IMPORTED_MODULE_8__.TIMESERIES);

  const renderTimePicker = (query, index) => {
    var _query$relativeTimeRa;

    if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_7__.isExpressionQuery)(query.model) || !onChangeTimeRange) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RelativeTimeRangePicker, {
      timeRange: (_query$relativeTimeRa = query.relativeTimeRange) !== null && _query$relativeTimeRa !== void 0 ? _query$relativeTimeRa : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultRelativeTimeRange)(),
      onChange: range => onChangeTimeRange(range, index)
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_5__.QueryEditorRow, {
      alerting: true,
      dataSource: dsSettings,
      onChangeDataSource: !isExpression ? settings => onChangeDataSource(settings, index) : undefined,
      id: query.refId,
      index: index,
      data: data,
      query: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(query.model),
      onChange: query => onChangeQuery(query, index),
      onRemoveQuery: onRemoveQuery,
      onAddQuery: () => onDuplicateQuery((0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(query)),
      onRunQuery: onRunQueries,
      queries: queries,
      renderHeaderExtras: () => renderTimePicker(query, index),
      app: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.UnifiedAlerting,
      visualization: data.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VizWrapper__WEBPACK_IMPORTED_MODULE_6__.VizWrapper, {
        data: data,
        changePanel: changePluginId,
        currentPanel: pluginId,
        thresholds: thresholds,
        onThresholdsChange: thresholds => onChangeThreshold(thresholds, index)
      }) : null,
      hideDisableQuery: true
    }, query.refId)
  });
};
const EmptyQueryWrapper = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: styles.wrapper,
    children: children
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    label: AlertingQueryWrapper;
    margin-bottom: ${theme.spacing(1)};
    border: 1px solid ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleEditorSection": () => (/* binding */ RuleEditorSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const RuleEditorSection = ({
  title,
  stepNo,
  children,
  description
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: styles.parent,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: styles.stepNo,
        children: stepNo
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
        label: title,
        className: styles.fieldset,
        children: [description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: styles.description,
          children: description
        }), children]
      })
    })]
  });
};

const getStyles = theme => ({
  fieldset: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    legend {
      font-size: 16px;
      padding-top: ${theme.spacing(0.5)};
    }
  `,
  parent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    max-width: ${theme.breakpoints.values.xl};
    & + & {
      margin-top: ${theme.spacing(4)};
    }
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: -${theme.spacing(2)};
  `,
  stepNo: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: inline-block;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    line-height: ${theme.spacing(4)};
    border-radius: ${theme.spacing(4)};
    text-align: center;
    color: ${theme.colors.text.maxContrast};
    background-color: ${theme.colors.background.canvas};
    font-size: ${theme.typography.size.lg};
    margin-right: ${theme.spacing(2)};
  `,
  content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RuleInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleInspector": () => (/* binding */ RuleInspector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/js-yaml-npm-4.1.0-3606f32312-c7830dfd45.zip/node_modules/js-yaml/dist/js-yaml.mjs");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const tabs = [{
  label: 'Yaml',
  value: 'yaml'
}];
const RuleInspector = ({
  onClose
}) => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('yaml');
  const {
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(drawerStyles);

  const onApply = formValues => {
    // Need to loop through all values and set them individually
    // TODO this is not type-safe :(
    for (const key in formValues) {
      // @ts-ignore
      setValue(key, formValues[key]);
    }

    onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Drawer, {
    title: "Inspect Alert rule",
    subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.subtitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(RuleInspectorSubtitle, {
        setActiveTab: setActiveTab,
        activeTab: activeTab
      })
    }),
    onClose: onClose,
    children: activeTab === 'yaml' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InspectorYamlTab, {
      onSubmit: onApply
    })
  });
};

const RuleInspectorSubtitle = ({
  activeTab,
  setActiveTab
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TabsBar, {
    children: tabs.map((tab, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tab, {
        label: tab.label,
        value: tab.value,
        onChangeTab: () => setActiveTab(tab.value),
        active: activeTab === tab.value
      }, `${tab.value}-${index}`);
    })
  });
};

const InspectorYamlTab = ({
  onSubmit
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(yamlTabStyle);
  const {
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const [alertRuleAsYaml, setAlertRuleAsYaml] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,js_yaml__WEBPACK_IMPORTED_MODULE_2__.dump)(getValues()));

  const onApply = () => {
    onSubmit((0,js_yaml__WEBPACK_IMPORTED_MODULE_2__.load)(alertRuleAsYaml));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.applyButton,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        type: "button",
        onClick: onApply,
        children: "Apply"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        disableWidth: true,
        children: ({
          height
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditor, {
          width: "100%",
          height: height,
          language: "yaml",
          value: alertRuleAsYaml,
          onBlur: setAlertRuleAsYaml,
          monacoOptions: {
            minimap: {
              enabled: false
            }
          }
        })
      })
    })]
  });
};

const yamlTabStyle = theme => ({
  content: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    flex-grow: 1;
    height: 100%;
    padding-bottom: 16px;
    margin-bottom: ${theme.spacing(2)};
  `,
  applyButton: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    display: flex;
    flex-grow: 0;
  `
});

const drawerStyles = () => ({
  subtitle: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectWithAdd": () => (/* binding */ SelectWithAdd)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const SelectWithAdd = ({
  value,
  onChange,
  options,
  className,
  placeholder,
  width,
  custom,
  onCustomChange,
  disabled = false,
  addLabel = '+ Add new',
  'aria-label': ariaLabel
}) => {
  const [isCustom, setIsCustom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(custom);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (custom) {
      setIsCustom(custom);
    }
  }, [custom]);

  const _options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [...options, {
    value: '__add__',
    label: addLabel
  }], [options, addLabel]);

  if (isCustom) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Input, {
      "aria-label": ariaLabel,
      width: width,
      autoFocus: !custom,
      value: value || '',
      placeholder: placeholder,
      className: className,
      disabled: disabled,
      onChange: e => onChange(e.target.value)
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
      menuShouldPortal: true,
      "aria-label": ariaLabel,
      width: width,
      options: _options,
      value: value,
      className: className,
      placeholder: placeholder,
      disabled: disabled,
      onChange: val => {
        const value = val === null || val === void 0 ? void 0 : val.value;

        if (value === '__add__') {
          setIsCustom(true);

          if (onCustomChange) {
            onCustomChange(true);
          }

          onChange('');
        } else {
          onChange(value);
        }
      }
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/VizWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VizWrapper": () => (/* binding */ VizWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/index.ts");
/* harmony import */ var _hooks_useVizHeight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useVizHeight.ts");
/* harmony import */ var _PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const VizWrapper = ({
  data,
  currentPanel,
  changePanel,
  onThresholdsChange,
  thresholds
}) => {
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    frameIndex: 0,
    showHeader: true
  });
  const vizHeight = (0,_hooks_useVizHeight__WEBPACK_IMPORTED_MODULE_6__.useVizHeight)(data, currentPanel, options.frameIndex);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles(vizHeight));
  const [fieldConfig, setFieldConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultFieldConfig(thresholds, data));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFieldConfig(fieldConfig => Object.assign({}, fieldConfig, {
      defaults: Object.assign({}, fieldConfig.defaults, {
        thresholds: thresholds,
        unit: defaultUnit(data),
        custom: Object.assign({}, fieldConfig.defaults.custom, {
          thresholdsStyle: {
            mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.GraphTresholdsStyleMode.Line
          }
        })
      })
    }));
  }, [thresholds, setFieldConfig, data]);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    eventBus: app_core_app_events__WEBPACK_IMPORTED_MODULE_8__["default"],
    canEditThresholds: true,
    onThresholdsChange: onThresholdsChange
  }), [onThresholdsChange]);

  if (!options || !data) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.buttonGroup,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_7__.PanelPluginsButtonGroup, {
        onChange: changePanel,
        value: currentPanel
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: ({
        width
      }) => {
        if (width === 0) {
          return null;
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          style: {
            height: `${vizHeight}px`,
            width: `${width}px`
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PanelContextProvider, {
            value: context,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.PanelRenderer, {
              height: vizHeight,
              width: width,
              data: data,
              pluginId: currentPanel,
              title: "title",
              onOptionsChange: setOptions,
              options: options,
              fieldConfig: fieldConfig
            })
          })
        });
      }
    })]
  });
};

const getStyles = visHeight => theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    padding: 0 ${theme.spacing(2)};
    height: ${visHeight + theme.spacing.gridSize * 4}px;
  `,
  buttonGroup: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;
    justify-content: flex-end;
  `
});

function defaultUnit(data) {
  var _data$series$, _data$series$$fields$;

  return (_data$series$ = data.series[0]) === null || _data$series$ === void 0 ? void 0 : (_data$series$$fields$ = _data$series$.fields.find(field => field.type === 'number')) === null || _data$series$$fields$ === void 0 ? void 0 : _data$series$$fields$.config.unit;
}

function defaultFieldConfig(thresholds, data) {
  if (!thresholds) {
    return {
      defaults: {},
      overrides: []
    };
  }

  return {
    defaults: {
      thresholds: thresholds,
      unit: defaultUnit(data),
      custom: {
        thresholdsStyle: {
          mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.GraphTresholdsStyleMode.Line
        }
      }
    },
    overrides: []
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/DisabledTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisabledTooltip": () => (/* binding */ DisabledTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const DisabledTooltip = ({
  children,
  visible = false
}) => {
  if (!visible) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: "You do not appear to have any compatible datasources.",
    placement: "top",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: children
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/GrafanaManagedAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaManagedRuleType": () => (/* binding */ GrafanaManagedRuleType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _RuleType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;







const GrafanaManagedRuleType = ({
  selected = false,
  disabled,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RuleType__WEBPACK_IMPORTED_MODULE_1__.RuleType, {
    name: "Grafana managed alert",
    description: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      children: ["Supports multiple data sources of any kind.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "Transform data with expressions."]
    })),
    image: "/public/img/grafana_icon.svg",
    selected: selected,
    disabled: disabled,
    value: _types_rule_form__WEBPACK_IMPORTED_MODULE_2__.RuleFormType.grafana,
    onClick: onClick
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MimirFlavoredType": () => (/* binding */ MimirFlavoredType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _RuleType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx");
/* harmony import */ var _DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/DisabledTooltip.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;








const MimirFlavoredType = ({
  selected = false,
  disabled = false,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__.DisabledTooltip, {
    visible: disabled,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RuleType__WEBPACK_IMPORTED_MODULE_1__.RuleType, {
      name: "Mimir or Loki alert",
      description: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        children: ["Use a Mimir, Loki or Cortex datasource.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Expressions are not supported."]
      })),
      image: "/public/img/alerting/mimir_logo.svg",
      selected: selected,
      disabled: disabled,
      value: _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.cloudAlerting,
      onClick: onClick
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiRecordingRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingRuleType": () => (/* binding */ RecordingRuleType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _RuleType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx");
/* harmony import */ var _DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/DisabledTooltip.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;








const RecordingRuleType = ({
  selected = false,
  disabled = false,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__.DisabledTooltip, {
    visible: disabled,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RuleType__WEBPACK_IMPORTED_MODULE_1__.RuleType, {
      name: "Mimir or Loki recording rule",
      description: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        children: ["Precompute expressions.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Should be combined with an alert rule."]
      })),
      image: "/public/img/alerting/mimir_logo_recording.svg",
      selected: selected,
      disabled: disabled,
      value: _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.cloudRecording,
      onClick: onClick
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleType": () => (/* binding */ RuleType)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const RuleType = props => {
  const {
    name,
    description,
    image,
    selected = false,
    value,
    onClick,
    disabled = false
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const cardStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
    [styles.wrapper]: true,
    [styles.disabled]: disabled
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card, {
    className: cardStyles,
    isSelected: selected,
    onClick: () => onClick(value),
    disabled: disabled,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card.Figure, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: image
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card.Heading, {
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card.Description, {
      children: description
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 380px;
    cursor: pointer;
    user-select: none;
  `,
  disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    opacity: 0.5;
  `
});



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleTypePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTypePicker": () => (/* binding */ RuleTypePicker)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/0/cache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _GrafanaManagedAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/GrafanaManagedAlert.tsx");
/* harmony import */ var _MimirOrLokiAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiAlert.tsx");
/* harmony import */ var _MimirOrLokiRecordingRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiRecordingRule.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");














const RuleTypePicker = ({
  selected,
  onChange,
  enabledTypes
}) => {
  const rulesSourcesWithRuler = (0,_hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_5__.useRulesSourcesWithRuler)();
  const hasLotexDatasources = !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(rulesSourcesWithRuler);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      direction: "row",
      gap: 2,
      children: [enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GrafanaManagedAlert__WEBPACK_IMPORTED_MODULE_7__.GrafanaManagedRuleType, {
        selected: selected === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana,
        onClick: onChange
      }), enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MimirOrLokiAlert__WEBPACK_IMPORTED_MODULE_8__.MimirFlavoredType, {
        selected: selected === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting,
        onClick: onChange,
        disabled: !hasLotexDatasources
      }), enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MimirOrLokiRecordingRule__WEBPACK_IMPORTED_MODULE_9__.RecordingRuleType, {
        selected: selected === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording,
        onClick: onChange,
        disabled: !hasLotexDatasources
      })]
    }), enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("small", {
      className: styles.meta,
      children: "Select \u201CGrafana managed\u201D unless you have a Mimir, Loki or Cortex data source with the Ruler API enabled."
    })]
  });
};

const getStyles = theme => ({
  meta: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.disabled};
  `
});



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkForPathSeparator": () => (/* binding */ checkForPathSeparator),
/* harmony export */   "queriesWithUpdatedReferences": () => (/* binding */ queriesWithUpdatedReferences),
/* harmony export */   "updateMathExpressionRefs": () => (/* binding */ updateMathExpressionRefs)
/* harmony export */ });
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/expressions/guards.ts");

function queriesWithUpdatedReferences(queries, previousRefId, newRefId) {
  return queries.map(query => {
    if (previousRefId === newRefId) {
      return query;
    }

    if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_0__.isExpressionQuery)(query.model)) {
      return query;
    }

    const isMathExpression = query.model.type === 'math';
    const isReduceExpression = query.model.type === 'reduce';
    const isResampleExpression = query.model.type === 'resample';
    const isClassicExpression = query.model.type === 'classic_conditions';

    if (isMathExpression) {
      var _query$model$expressi;

      return Object.assign({}, query, {
        model: Object.assign({}, query.model, {
          expression: updateMathExpressionRefs((_query$model$expressi = query.model.expression) !== null && _query$model$expressi !== void 0 ? _query$model$expressi : '', previousRefId, newRefId)
        })
      });
    }

    if (isResampleExpression || isReduceExpression) {
      const isReferencing = query.model.expression === previousRefId;
      return Object.assign({}, query, {
        model: Object.assign({}, query.model, {
          expression: isReferencing ? newRefId : query.model.expression
        })
      });
    }

    if (isClassicExpression) {
      var _query$model$conditio;

      const conditions = (_query$model$conditio = query.model.conditions) === null || _query$model$conditio === void 0 ? void 0 : _query$model$conditio.map(condition => Object.assign({}, condition, {
        query: Object.assign({}, condition.query, {
          params: condition.query.params.map(param => param === previousRefId ? newRefId : param)
        })
      }));
      return Object.assign({}, query, {
        model: Object.assign({}, query.model, {
          conditions
        })
      });
    }

    return query;
  });
}
function updateMathExpressionRefs(expression, previousRefId, newRefId) {
  const oldExpression = new RegExp('(\\$' + previousRefId + '\\b)|(\\${' + previousRefId + '})', 'gm');
  const newExpression = '${' + newRefId + '}';
  return expression.replace(oldExpression, newExpression);
} // some gateways (like Istio) will decode "/" and "\" characters – this will cause 404 errors for any API call
// that includes these values in the URL (ie. /my/path%2fto/resource -> /my/path/to/resource)
//
// see https://istio.io/latest/docs/ops/best-practices/security/#customize-your-system-on-path-normalization

function checkForPathSeparator(value) {
  const containsPathSeparator = value.includes('/') || value.includes('\\');

  if (containsPathSeparator) {
    return 'Cannot contain "/" or "\\" characters';
  }

  return true;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertQueriesStatus": () => (/* binding */ useAlertQueriesStatus)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


function useAlertQueriesStatus(queries) {
  const allDataSourcesAvailable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => queries.every(query => Boolean((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid))), [queries]);
  return {
    allDataSourcesAvailable
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useFolder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFolder": () => (/* binding */ useFolder)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");





function useFolder(uid) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const folderRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_1__.useUnifiedAlertingSelector)(state => state.folders);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (uid) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_3__.fetchFolderIfNotFetchedAction)(uid));
    }
  }, [dispatch, uid]);

  if (uid) {
    const request = folderRequests[uid] || _utils_redux__WEBPACK_IMPORTED_MODULE_4__.initialAsyncRequestState;
    return {
      folder: request.result,
      loading: request.loading
    };
  }

  return {
    loading: false
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsRuleEditable": () => (/* binding */ useIsRuleEditable)
/* harmony export */ });
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useFolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useIsRuleEditable(rulesSourceName, rule) {
  var _dataSources$rulesSou, _dataSources$rulesSou2, _dataSources$rulesSou3;

  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.dataSources);
  const folderUID = rule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule) ? rule.grafana_alert.namespace_uid : undefined;
  const rulePermission = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesPermissions)(rulesSourceName);
  const hasEditPermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.update, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  const hasRemovePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.delete, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  const {
    folder,
    loading
  } = (0,_useFolder__WEBPACK_IMPORTED_MODULE_3__.useFolder)(folderUID);

  if (!rule) {
    return {
      isEditable: false,
      isRemovable: false,
      loading: false
    };
  } // grafana rules can be edited if user can edit the folder they're in


  if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule)) {
    if (!folderUID) {
      throw new Error(`Rule ${rule.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);
    }

    return {
      isEditable: hasEditPermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      isRemovable: hasRemovePermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      loading
    };
  } // prom rules are only editable by users with Editor role and only if rules source supports editing


  const isRulerAvailable = Boolean((_dataSources$rulesSou = dataSources[rulesSourceName]) === null || _dataSources$rulesSou === void 0 ? void 0 : (_dataSources$rulesSou2 = _dataSources$rulesSou.result) === null || _dataSources$rulesSou2 === void 0 ? void 0 : _dataSources$rulesSou2.rulerConfig);
  return {
    isEditable: hasEditPermission && isRulerAvailable,
    isRemovable: hasRemovePermission && isRulerAvailable,
    loading: (_dataSources$rulesSou3 = dataSources[rulesSourceName]) === null || _dataSources$rulesSou3 === void 0 ? void 0 : _dataSources$rulesSou3.loading
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRulesSourcesWithRuler": () => (/* binding */ useRulesSourcesWithRuler)
/* harmony export */ });
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");


function useRulesSourcesWithRuler() {
  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_1__.useUnifiedAlertingSelector)(state => state.dataSources);
  const dataSourcesWithRuler = Object.values(dataSources).map(ds => ds.result).filter(ds => Boolean(ds === null || ds === void 0 ? void 0 : ds.rulerConfig)); // try fetching rules for each prometheus to see if it has ruler

  return dataSourcesWithRuler.map(ds => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_0__.getDataSourceByName)(ds.name)).filter(dsConfig => Boolean(dsConfig));
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useVizHeight.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVizHeight": () => (/* binding */ useVizHeight)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");


function useVizHeight(data, pluginId, frameIndex) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.useTheme2)();

  if (pluginId === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESERIES || pluginId === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STAT || dataIsEmpty(data)) {
    return 200;
  }

  const values = data.series[frameIndex].fields[0].values.length;
  const rowHeight = theme.spacing.gridSize * 5;
  /*
   Calculate how if we can make  the table smaller than 200px
   for when we only have 1-2 values
   The extra rowHeight is to accommodate the header.
  */

  const tableHeight = values * rowHeight + rowHeight;
  return tableHeight >= 200 ? 200 : tableHeight;
}

function dataIsEmpty(data) {
  return !data || !data.series[0] || !data.series[0].fields[0] || !data.series[0].fields[0].values;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/state/AlertingQueryRunner.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertingQueryRunner": () => (/* binding */ AlertingQueryRunner)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/query/state/runRequest.ts");
/* harmony import */ var _utils_timeRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/timeRange.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_query_state_processing_revision__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/query/state/processing/revision.ts");
/* harmony import */ var app_features_query_state_processing_canceler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/query/state/processing/canceler.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class AlertingQueryRunner {
  constructor(backendSrv = (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)(), dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)()) {
    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;

    _defineProperty(this, "subject", void 0);

    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "lastResult", void 0);

    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject(1);
    this.lastResult = {};
  }

  get() {
    return this.subject.asObservable();
  }

  async run(queries) {
    if (queries.length === 0) {
      const empty = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done);
      return this.subject.next(empty);
    } // do not execute if one more of the queries are not runnable,
    // for example not completely configured


    for (const query of queries) {
      if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__.isExpressionQuery)(query.model)) {
        const ds = await this.dataSourceSrv.get(query.datasourceUid);

        if (ds.filterQuery && !ds.filterQuery(query.model)) {
          const empty = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done);
          return this.subject.next(empty);
        }
      }
    }

    this.subscription = runRequest(this.backendSrv, queries).subscribe({
      next: dataPerQuery => {
        const nextResult = applyChange(dataPerQuery, (refId, data) => {
          const previous = this.lastResult[refId];
          const preProcessed = (0,app_features_query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__.preProcessPanelData)(data, previous);
          return (0,app_features_query_state_processing_revision__WEBPACK_IMPORTED_MODULE_6__.setStructureRevision)(preProcessed, previous);
        });
        this.lastResult = nextResult;
        this.subject.next(this.lastResult);
      },
      error: error => {
        this.lastResult = mapErrorToPanelData(this.lastResult, error);
        this.subject.next(this.lastResult);
      }
    });
  }

  cancel() {
    if (!this.subscription) {
      return;
    }

    this.subscription.unsubscribe();
    let requestIsRunning = false;
    const nextResult = applyChange(this.lastResult, (refId, data) => {
      if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading) {
        requestIsRunning = true;
      }

      return Object.assign({}, data, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
      });
    });

    if (requestIsRunning) {
      this.subject.next(nextResult);
    }
  }

  destroy() {
    if (this.subject) {
      this.subject.complete();
    }

    this.cancel();
  }

}

const runRequest = (backendSrv, queries) => {
  const initial = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading);
  const request = {
    data: {
      data: queries
    },
    url: '/api/v1/eval',
    method: 'POST',
    requestId: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])()
  };
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.withLoadingIndicator)({
    whileLoading: initial,
    source: backendSrv.fetch(request).pipe(mapToPanelData(initial), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(mapErrorToPanelData(initial, error))), (0,app_features_query_state_processing_canceler__WEBPACK_IMPORTED_MODULE_7__.cancelNetworkRequestsOnUnsubscribe)(backendSrv, request.requestId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.share)())
  });
};

const initialState = (queries, state) => {
  return queries.reduce((dataByQuery, query) => {
    dataByQuery[query.refId] = {
      state,
      series: [],
      timeRange: getTimeRange(query, queries)
    };
    return dataByQuery;
  }, {});
};

const getTimeRange = (query, queries) => {
  if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__.isExpressionQuery)(query.model)) {
    const relative = (0,_utils_timeRange__WEBPACK_IMPORTED_MODULE_4__.getTimeRangeForExpression)(query.model, queries);
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.relativeToTimeRange(relative);
  }

  if (!query.relativeTimeRange) {
    console.warn(`Query with refId: ${query.refId} did not have any relative time range, using default.`);
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)();
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.relativeToTimeRange(query.relativeTimeRange);
};

const mapToPanelData = dataByQuery => {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(response => {
    const {
      data
    } = response;
    const results = {};

    for (const [refId, result] of Object.entries(data.results)) {
      results[refId] = {
        timeRange: dataByQuery[refId].timeRange,
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
        series: result.frames.map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dataFrameFromJSON)
      };
    }

    return results;
  });
};

const mapErrorToPanelData = (lastResult, error) => {
  const queryError = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryError)(error);
  return applyChange(lastResult, (refId, data) => {
    return Object.assign({}, data, {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error,
      error: queryError
    });
  });
};

const applyChange = (initial, change) => {
  const nextResult = {};

  for (const [refId, data] of Object.entries(initial)) {
    nextResult[refId] = change(refId, data);
  }

  return nextResult;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/types/preview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCloudPreviewRequest": () => (/* binding */ isCloudPreviewRequest),
/* harmony export */   "isGrafanaPreviewRequest": () => (/* binding */ isGrafanaPreviewRequest)
/* harmony export */ });
function isCloudPreviewRequest(request) {
  return 'expr' in request;
}
function isGrafanaPreviewRequest(request) {
  return 'grafana_condition' in request;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/accessControlHooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRulesAccess": () => (/* binding */ useRulesAccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");


function useRulesAccess() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesAccess)(), []);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/timeRange.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimeRangeForExpression": () => (/* binding */ getTimeRangeForExpression)
/* harmony export */ });
/* harmony import */ var _expressions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/expressions/types.ts");

const FALL_BACK_TIME_RANGE = {
  from: 21600,
  to: 0
};
const getTimeRangeForExpression = (query, queries) => {
  const referencedRefIds = getReferencedIds(query, queries);

  if (!referencedRefIds) {
    return FALL_BACK_TIME_RANGE;
  }

  const {
    from,
    to
  } = getTimeRanges(referencedRefIds, queries);

  if (!from.length && !to.length) {
    return FALL_BACK_TIME_RANGE;
  }

  return {
    from: Math.max(...from),
    to: Math.min(...to)
  };
};

const getReferencedIds = (model, queries) => {
  switch (model.type) {
    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.classic:
      return getReferencedIdsForClassicCondition(model);

    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.math:
      return getReferencedIdsForMath(model, queries);

    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.resample:
    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.reduce:
      return getReferencedIdsForReduce(model);
  }
};

const getReferencedIdsForClassicCondition = model => {
  var _model$conditions;

  return (_model$conditions = model.conditions) === null || _model$conditions === void 0 ? void 0 : _model$conditions.map(condition => {
    return condition.query.params[0];
  });
};

const getTimeRanges = (referencedRefIds, queries) => {
  let from = [];
  let to = [FALL_BACK_TIME_RANGE.to];

  for (const referencedRefIdsKey of referencedRefIds) {
    const query = queries.find(query => query.refId === referencedRefIdsKey);

    if (!query || !query.relativeTimeRange) {
      continue;
    }

    from.push(query.relativeTimeRange.from);
    to.push(query.relativeTimeRange.to);
  }

  return {
    from,
    to
  };
};

const getReferencedIdsForMath = (model, queries) => {
  return queries // filter queries of type query and filter expression on if it includes any refIds
  .filter(q => {
    var _model$expression;

    return q.queryType === 'query' && ((_model$expression = model.expression) === null || _model$expression === void 0 ? void 0 : _model$expression.includes(q.refId));
  }).map(q => {
    return q.refId;
  });
};

const getReferencedIdsForReduce = model => {
  return model.expression ? [model.expression] : undefined;
};

/***/ }),

/***/ "./public/app/features/expressions/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExpressionQuery": () => (/* binding */ isExpressionQuery)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/expressions/types.ts");


const isExpressionQuery = dataQuery => {
  if (!dataQuery) {
    return false;
  }

  if ((0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__.isExpressionReference)(dataQuery.datasource)) {
    return true;
  }

  const expression = dataQuery;

  if (typeof expression.type !== 'string') {
    return false;
  }

  return Object.values(_types__WEBPACK_IMPORTED_MODULE_1__.ExpressionQueryType).includes(expression.type);
};

/***/ }),

/***/ "./.yarn/cache/js-yaml-npm-4.1.0-3606f32312-c7830dfd45.zip/node_modules/js-yaml/dist/js-yaml.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORE_SCHEMA": () => (/* binding */ CORE_SCHEMA),
/* harmony export */   "DEFAULT_SCHEMA": () => (/* binding */ DEFAULT_SCHEMA),
/* harmony export */   "FAILSAFE_SCHEMA": () => (/* binding */ FAILSAFE_SCHEMA),
/* harmony export */   "JSON_SCHEMA": () => (/* binding */ JSON_SCHEMA),
/* harmony export */   "Schema": () => (/* binding */ Schema),
/* harmony export */   "Type": () => (/* binding */ Type),
/* harmony export */   "YAMLException": () => (/* binding */ YAMLException),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dump": () => (/* binding */ dump),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "loadAll": () => (/* binding */ loadAll),
/* harmony export */   "safeDump": () => (/* binding */ safeDump),
/* harmony export */   "safeLoad": () => (/* binding */ safeLoad),
/* harmony export */   "safeLoadAll": () => (/* binding */ safeLoadAll),
/* harmony export */   "types": () => (/* binding */ types)
/* harmony export */ });

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var types = {
  binary:    binary,
  float:     float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: dump,
	YAMLException: YAMLException,
	types: types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jsYaml);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnREFBZ0QsZ0JBQWdCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsa0JBQWtCLGVBQWU7QUFDakM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsMEJBQTBCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyx5QkFBeUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFH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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBOztBQUVBLGdEQUFnRCxrQkFBa0I7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsa0JBQWtCO0FBQ3JFO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQSxlQUFlLGVBQWU7QUFDOUI7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSx5QkFBeUI7QUFDN0Isc0JBQXNCLEtBQUs7QUFDM0I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0EsNkVBQTZFO0FBQzdFLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSLDZEQUE2RCxzQkFBc0I7QUFDbkY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Ysb0VBQW9FOztBQUVwRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQSxRQUFRO0FBQ1IsK0RBQStEOztBQUUvRCxRQUFRO0FBQ1I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7O0FBRUEsSUFBSTtBQUNKOztBQUVBLElBQUk7QUFDSjs7QUFFQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUEsbUVBQW1FLDBCQUEwQjtBQUM3Rjs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQsMEJBQTBCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0MsS0FBSztBQUMzQyxzQ0FBc0M7QUFDdEMsc0NBQXNDLEtBQUs7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsTUFBTTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGdCQUFnQjtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELGdCQUFnQjs7QUFFakU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlEQUFpRCxnQkFBZ0I7QUFDakU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixHQUFHO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTRDLGdCQUFnQjtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7QUFDeUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9SdWxlRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2FwaS9wcmV2aWV3LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9QYW5lbFBsdWdpbnNCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0FsZXJ0UnVsZUZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9BbGVydFR5cGVTdGVwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQW5ub3RhdGlvbktleUlucHV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQW5ub3RhdGlvbnNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0Nsb3VkQ29uZGl0aW9uc1N0ZXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9DbG91ZFJ1bGVzU291cmNlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQ29uZGl0aW9uRmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9EZXRhaWxzU3RlcC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0V4cHJlc3Npb25FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9HcmFmYW5hQWxlcnRTdGF0ZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0dyYWZhbmFDb25kaXRpb25FdmFsV2FybmluZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0dyYWZhbmFDb25kaXRpb25zU3RlcC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0dyb3VwQW5kTmFtZXNwYWNlRmllbGRzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvTGFiZWxzRmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9QcmV2aWV3UnVsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL1ByZXZpZXdSdWxlUmVzdWx0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9RdWVyeVJvd3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9RdWVyeVN0ZXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9RdWVyeVdyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9SdWxlRWRpdG9yU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL1J1bGVJbnNwZWN0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9TZWxlY3RXSXRoQWRkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvVml6V3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL3J1bGUtdHlwZXMvRGlzYWJsZWRUb29sdGlwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcnVsZS10eXBlcy9HcmFmYW5hTWFuYWdlZEFsZXJ0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcnVsZS10eXBlcy9NaW1pck9yTG9raUFsZXJ0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcnVsZS10eXBlcy9NaW1pck9yTG9raVJlY29yZGluZ1J1bGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9ydWxlLXR5cGVzL1J1bGVUeXBlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcnVsZS10eXBlcy9SdWxlVHlwZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydFF1ZXJpZXNTdGF0dXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VGb2xkZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VJc1J1bGVFZGl0YWJsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZVJ1bGVTb3VyY2VzV2l0aFJ1bGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlVml6SGVpZ2h0LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvc3RhdGUvQWxlcnRpbmdRdWVyeVJ1bm5lci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3R5cGVzL3ByZXZpZXcudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9hY2Nlc3NDb250cm9sSG9va3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy90aW1lUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvZ3VhcmRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9qcy15YW1sLW5wbS00LjEuMC0zNjA2ZjMyMzEyLWM3ODMwZGZkNDUuemlwL25vZGVfbW9kdWxlcy9qcy15YW1sL2Rpc3QvanMteWFtbC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNsZWFuVXBBY3Rpb24sIFN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi9hY3Rpb25zL2NsZWFuVXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xlYW51cDxUPihzdGF0ZVNlbGVjdG9yOiBTdGF0ZVNlbGVjdG9yPFQ+KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgLy9iaXQgb2YgYSBoYWNrIHRvIHVuYnVyZGVuIHVzZXIgZnJvbSBoYXZpbmcgdG8gd3JhcCBzdGF0ZVNlbGNldG9yIGluIGEgdXNlQ2FsbGJhY2suIE90aGVyd2lzZSBjbGVhbnVwIHdvdWxkIGhhcHBlbiBvbiBldmVyeSByZW5kZXJcbiAgY29uc3Qgc2VsZWN0b3JSZWYgPSB1c2VSZWYoc3RhdGVTZWxlY3Rvcik7XG4gIHNlbGVjdG9yUmVmLmN1cnJlbnQgPSBzdGF0ZVNlbGVjdG9yO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChjbGVhblVwQWN0aW9uKHsgc3RhdGVTZWxlY3Rvcjogc2VsZWN0b3JSZWYuY3VycmVudCB9KSk7XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIExpbmtCdXR0b24sIExvYWRpbmdQbGFjZWhvbGRlciwgdXNlU3R5bGVzMiwgd2l0aEVycm9yQm91bmRhcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyB1c2VDbGVhbnVwIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cCc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgUnVsZUlkZW50aWZpZXIgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgQWxlcnRSdWxlRm9ybSB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlLWVkaXRvci9BbGVydFJ1bGVGb3JtJztcbmltcG9ydCB7IHVzZUlzUnVsZUVkaXRhYmxlIH0gZnJvbSAnLi9ob29rcy91c2VJc1J1bGVFZGl0YWJsZSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZmV0Y2hBbGxQcm9tQnVpbGRJbmZvQWN0aW9uLCBmZXRjaEVkaXRhYmxlUnVsZUFjdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VSdWxlc0FjY2VzcyB9IGZyb20gJy4vdXRpbHMvYWNjZXNzQ29udHJvbEhvb2tzJztcbmltcG9ydCAqIGFzIHJ1bGVJZCBmcm9tICcuL3V0aWxzL3J1bGUtaWQnO1xuXG5pbnRlcmZhY2UgRXhpc3RpbmdSdWxlRWRpdG9yUHJvcHMge1xuICBpZGVudGlmaWVyOiBSdWxlSWRlbnRpZmllcjtcbn1cblxuY29uc3QgRXhpc3RpbmdSdWxlRWRpdG9yOiBGQzxFeGlzdGluZ1J1bGVFZGl0b3JQcm9wcz4gPSAoeyBpZGVudGlmaWVyIH0pID0+IHtcbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5ydWxlRm9ybS5leGlzdGluZ1J1bGUpO1xuICBjb25zdCB7IGxvYWRpbmcsIHJlc3VsdCwgZXJyb3IsIGRpc3BhdGNoZWQgfSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZUZvcm0uZXhpc3RpbmdSdWxlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGlzRWRpdGFibGUgfSA9IHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVJZC5ydWxlSWRlbnRpZmllclRvUnVsZVNvdXJjZU5hbWUoaWRlbnRpZmllciksIHJlc3VsdD8ucnVsZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpc3BhdGNoZWQpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoRWRpdGFibGVSdWxlQWN0aW9uKGlkZW50aWZpZXIpKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaGVkLCBkaXNwYXRjaCwgaWRlbnRpZmllcl0pO1xuXG4gIGlmIChsb2FkaW5nIHx8IGlzRWRpdGFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBydWxlLi4uXCIgLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICApO1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiIHRpdGxlPVwiRmFpbGVkIHRvIGxvYWQgcnVsZVwiPlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICk7XG4gIH1cblxuICBpZiAoIXJlc3VsdCkge1xuICAgIHJldHVybiA8QWxlcnRXYXJuaW5nIHRpdGxlPVwiUnVsZSBub3QgZm91bmRcIj5Tb3JyeSEgVGhpcyBydWxlIGRvZXMgbm90IGV4aXN0LjwvQWxlcnRXYXJuaW5nPjtcbiAgfVxuXG4gIGlmIChpc0VkaXRhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVybiA8QWxlcnRXYXJuaW5nIHRpdGxlPVwiQ2Fubm90IGVkaXQgcnVsZVwiPlNvcnJ5ISBZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBlZGl0IHRoaXMgcnVsZS48L0FsZXJ0V2FybmluZz47XG4gIH1cblxuICByZXR1cm4gPEFsZXJ0UnVsZUZvcm0gZXhpc3Rpbmc9e3Jlc3VsdH0gLz47XG59O1xuXG50eXBlIFJ1bGVFZGl0b3JQcm9wcyA9IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgaWQ/OiBzdHJpbmcgfT47XG5cbmNvbnN0IFJ1bGVFZGl0b3I6IEZDPFJ1bGVFZGl0b3JQcm9wcz4gPSAoeyBtYXRjaCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBpZCB9ID0gbWF0Y2gucGFyYW1zO1xuICBjb25zdCBpZGVudGlmaWVyID0gcnVsZUlkLnRyeVBhcnNlKGlkLCB0cnVlKTtcblxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChmZXRjaEFsbFByb21CdWlsZEluZm9BY3Rpb24oKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IHsgY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzLCBjYW5DcmVhdGVDbG91ZFJ1bGVzLCBjYW5FZGl0UnVsZXMgfSA9IHVzZVJ1bGVzQWNjZXNzKCk7XG5cbiAgaWYgKCFjYW5DcmVhdGVHcmFmYW5hUnVsZXMgJiYgIWNhbkNyZWF0ZUNsb3VkUnVsZXMpIHtcbiAgICByZXR1cm4gPEFsZXJ0V2FybmluZyB0aXRsZT1cIkNhbm5vdCBjcmVhdGUgcnVsZXNcIj5Tb3JyeSEgWW91IGFyZSBub3QgYWxsb3dlZCB0byBjcmVhdGUgcnVsZXMuPC9BbGVydFdhcm5pbmc+O1xuICB9XG5cbiAgaWYgKGlkZW50aWZpZXIgJiYgIWNhbkVkaXRSdWxlcyhpZGVudGlmaWVyLnJ1bGVTb3VyY2VOYW1lKSkge1xuICAgIHJldHVybiA8QWxlcnRXYXJuaW5nIHRpdGxlPVwiQ2Fubm90IGVkaXQgcnVsZXNcIj5Tb3JyeSEgWW91IGFyZSBub3QgYWxsb3dlZCB0byBlZGl0IHJ1bGVzLjwvQWxlcnRXYXJuaW5nPjtcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nLi4uXCIgLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICApO1xuICB9XG5cbiAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gPEV4aXN0aW5nUnVsZUVkaXRvciBrZXk9e2lkfSBpZGVudGlmaWVyPXtpZGVudGlmaWVyfSAvPjtcbiAgfVxuXG4gIHJldHVybiA8QWxlcnRSdWxlRm9ybSAvPjtcbn07XG5cbmNvbnN0IEFsZXJ0V2FybmluZzogRkM8eyB0aXRsZTogc3RyaW5nIH0+ID0gKHsgdGl0bGUsIGNoaWxkcmVuIH0pID0+IChcbiAgPEFsZXJ0IGNsYXNzTmFtZT17dXNlU3R5bGVzMih3YXJuaW5nU3R5bGVzKS53YXJuaW5nfSBzZXZlcml0eT1cIndhcm5pbmdcIiB0aXRsZT17dGl0bGV9PlxuICAgIDxwPntjaGlsZHJlbn08L3A+XG4gICAgPExpbmtCdXR0b24gaHJlZj1cImFsZXJ0aW5nL2xpc3RcIj5UbyBydWxlIGxpc3Q8L0xpbmtCdXR0b24+XG4gIDwvQWxlcnQ+XG4pO1xuXG5jb25zdCB3YXJuaW5nU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3YXJuaW5nOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICBgLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcnJvckJvdW5kYXJ5KFJ1bGVFZGl0b3IsIHsgc3R5bGU6ICdwYWdlJyB9KTtcbiIsImltcG9ydCB7XG4gIGRhdGFGcmFtZUZyb21KU09OLFxuICBEYXRhRnJhbWVKU09OLFxuICBnZXREZWZhdWx0VGltZVJhbmdlLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgd2l0aExvYWRpbmdJbmRpY2F0b3IsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgdG9EYXRhUXVlcnlFcnJvciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDbG91ZFByZXZpZXdSdWxlUmVxdWVzdCxcbiAgR3JhZmFuYVByZXZpZXdSdWxlUmVxdWVzdCxcbiAgaXNDbG91ZFByZXZpZXdSZXF1ZXN0LFxuICBpc0dyYWZhbmFQcmV2aWV3UmVxdWVzdCxcbiAgUHJldmlld1J1bGVSZXF1ZXN0LFxuICBQcmV2aWV3UnVsZVJlc3BvbnNlLFxufSBmcm9tICcuLi90eXBlcy9wcmV2aWV3JztcbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSB9IGZyb20gJy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2aWV3QWxlcnRSdWxlKHJlcXVlc3Q6IFByZXZpZXdSdWxlUmVxdWVzdCk6IE9ic2VydmFibGU8UHJldmlld1J1bGVSZXNwb25zZT4ge1xuICBpZiAoaXNDbG91ZFByZXZpZXdSZXF1ZXN0KHJlcXVlc3QpKSB7XG4gICAgcmV0dXJuIHByZXZpZXdDbG91ZEFsZXJ0UnVsZShyZXF1ZXN0KTtcbiAgfVxuXG4gIGlmIChpc0dyYWZhbmFQcmV2aWV3UmVxdWVzdChyZXF1ZXN0KSkge1xuICAgIHJldHVybiBwcmV2aWV3R3JhZmFuYUFsZXJ0UnVsZShyZXF1ZXN0KTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgcHJldmlldyBydWxlIHJlcXVlc3QnKTtcbn1cblxudHlwZSBHcmFmYW5hUHJldmlld1J1bGVSZXNwb25zZSA9IHtcbiAgaW5zdGFuY2VzOiBEYXRhRnJhbWVKU09OW107XG59O1xuXG5mdW5jdGlvbiBwcmV2aWV3R3JhZmFuYUFsZXJ0UnVsZShyZXF1ZXN0OiBHcmFmYW5hUHJldmlld1J1bGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxQcmV2aWV3UnVsZVJlc3BvbnNlPiB7XG4gIGNvbnN0IHR5cGUgPSBSdWxlRm9ybVR5cGUuZ3JhZmFuYTtcblxuICByZXR1cm4gd2l0aExvYWRpbmdJbmRpY2F0b3Ioe1xuICAgIHdoaWxlTG9hZGluZzogY3JlYXRlUmVzcG9uc2UodHlwZSksXG4gICAgc291cmNlOiBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5mZXRjaDxHcmFmYW5hUHJldmlld1J1bGVSZXNwb25zZT4oe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiBgL2FwaS92MS9ydWxlL3Rlc3QvZ3JhZmFuYWAsXG4gICAgICAgIGRhdGE6IHJlcXVlc3QsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlUmVzcG9uc2UodHlwZSwge1xuICAgICAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgICAgICAgc2VyaWVzOiBkYXRhLmluc3RhbmNlcy5tYXAoZGF0YUZyYW1lRnJvbUpTT04pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgICAgY3JlYXRlUmVzcG9uc2UodHlwZSwge1xuICAgICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkVycm9yLFxuICAgICAgICAgICAgICBlcnJvcjogdG9EYXRhUXVlcnlFcnJvcihlcnJvciksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBzaGFyZSgpXG4gICAgICApLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzcG9uc2UocnVsZVR5cGU6IFJ1bGVGb3JtVHlwZSwgZGF0YTogUGFydGlhbDxQYW5lbERhdGE+ID0ge30pOiBQcmV2aWV3UnVsZVJlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBydWxlVHlwZSxcbiAgICBkYXRhOiB7XG4gICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcsXG4gICAgICBzZXJpZXM6IFtdLFxuICAgICAgdGltZVJhbmdlOiBnZXREZWZhdWx0VGltZVJhbmdlKCksXG4gICAgICAuLi5kYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByZXZpZXdDbG91ZEFsZXJ0UnVsZShyZXF1ZXN0OiBDbG91ZFByZXZpZXdSdWxlUmVxdWVzdCk6IE9ic2VydmFibGU8UHJldmlld1J1bGVSZXNwb25zZT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3ByZXZpZXcgZm9yIGNsb3VkIGFsZXJ0aW5nIHJ1bGVzIGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xufVxuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNUQVQsIFRBQkxFLCBUSU1FU0VSSUVTIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IHR5cGUgU3VwcG9ydGVkUGFuZWxQbHVnaW5zID0gJ3RpbWVzZXJpZXMnIHwgJ3RhYmxlJyB8ICdzdGF0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgdmFsdWU6IFN1cHBvcnRlZFBhbmVsUGx1Z2lucztcbiAgb25DaGFuZ2U6ICh2YWx1ZTogU3VwcG9ydGVkUGFuZWxQbHVnaW5zKSA9PiB2b2lkO1xuICBzaXplPzogJ3NtJyB8ICdtZCc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyB2YWx1ZSwgb25DaGFuZ2UsIHNpemUgPSAnbWQnIH0gPSBwcm9wcztcbiAgY29uc3QgcGFuZWxzID0gdXNlTWVtbygoKSA9PiBnZXRTdXBwb3J0ZWRQYW5lbHMoKSwgW10pO1xuXG4gIHJldHVybiA8UmFkaW9CdXR0b25Hcm91cCBvcHRpb25zPXtwYW5lbHN9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBzaXplPXtzaXplfSAvPjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUGFuZWxzKCk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxTdXBwb3J0ZWRQYW5lbFBsdWdpbnM+PiB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGNvbmZpZy5wYW5lbHMpLnJlZHVjZSgocGFuZWxzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8U3VwcG9ydGVkUGFuZWxQbHVnaW5zPj4sIHBhbmVsKSA9PiB7XG4gICAgaWYgKGlzU3VwcG9ydGVkUGFuZWxQbHVnaW4ocGFuZWwuaWQpKSB7XG4gICAgICBwYW5lbHMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBwYW5lbC5pZCxcbiAgICAgICAgbGFiZWw6IHBhbmVsLm5hbWUsXG4gICAgICAgIGltZ1VybDogcGFuZWwuaW5mby5sb2dvcy5zbWFsbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGFuZWxzO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGlzU3VwcG9ydGVkUGFuZWxQbHVnaW4oaWQ6IHN0cmluZyk6IGlkIGlzIFN1cHBvcnRlZFBhbmVsUGx1Z2lucyB7XG4gIHN3aXRjaCAoaWQpIHtcbiAgICBjYXNlIFRJTUVTRVJJRVM6XG4gICAgY2FzZSBUQUJMRTpcbiAgICBjYXNlIFNUQVQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGFnZVRvb2xiYXIsIEJ1dHRvbiwgdXNlU3R5bGVzMiwgQ3VzdG9tU2Nyb2xsYmFyLCBTcGlubmVyLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyBBbGVydFR5cGVTdGVwIH0gZnJvbSAnLi9BbGVydFR5cGVTdGVwJztcbmltcG9ydCB7IERldGFpbHNTdGVwIH0gZnJvbSAnLi9EZXRhaWxzU3RlcCc7XG5pbXBvcnQgeyBRdWVyeVN0ZXAgfSBmcm9tICcuL1F1ZXJ5U3RlcCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBGb3JtUHJvdmlkZXIsIFVzZUZvcm1XYXRjaCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSwgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi8uLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgeyBkZWxldGVSdWxlQWN0aW9uLCBzYXZlUnVsZUZvcm1BY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IFJ1bGVXaXRoTG9jYXRpb24gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUNsZWFudXAgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VDbGVhbnVwJztcbmltcG9ydCB7IHJ1bGVyUnVsZVRvRm9ybVZhbHVlcywgZ2V0RGVmYXVsdEZvcm1WYWx1ZXMsIGdldERlZmF1bHRRdWVyaWVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZS1mb3JtJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHsgdXNlQXBwTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuXG5pbXBvcnQgeyBDbG91ZENvbmRpdGlvbnNTdGVwIH0gZnJvbSAnLi9DbG91ZENvbmRpdGlvbnNTdGVwJztcbmltcG9ydCB7IEdyYWZhbmFDb25kaXRpb25zU3RlcCB9IGZyb20gJy4vR3JhZmFuYUNvbmRpdGlvbnNTdGVwJztcbmltcG9ydCAqIGFzIHJ1bGVJZCBmcm9tICcuLi8uLi91dGlscy9ydWxlLWlkJztcbmltcG9ydCB7IFJ1bGVJbnNwZWN0b3IgfSBmcm9tICcuL1J1bGVJbnNwZWN0b3InO1xuXG50eXBlIFByb3BzID0ge1xuICBleGlzdGluZz86IFJ1bGVXaXRoTG9jYXRpb247XG59O1xuXG5leHBvcnQgY29uc3QgQWxlcnRSdWxlRm9ybTogRkM8UHJvcHM+ID0gKHsgZXhpc3RpbmcgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IFtxdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICBjb25zdCBbc2hvd0VkaXRZYW1sLCBzZXRTaG93RWRpdFlhbWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJldHVyblRvOiBzdHJpbmcgPSAocXVlcnlQYXJhbXNbJ3JldHVyblRvJ10gYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnL2FsZXJ0aW5nL2xpc3QnO1xuICBjb25zdCBbc2hvd0RlbGV0ZU1vZGFsLCBzZXRTaG93RGVsZXRlTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZXM6IFJ1bGVGb3JtVmFsdWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4gcnVsZXJSdWxlVG9Gb3JtVmFsdWVzKGV4aXN0aW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmdldERlZmF1bHRGb3JtVmFsdWVzKCksXG4gICAgICBxdWVyaWVzOiBnZXREZWZhdWx0UXVlcmllcygpLFxuICAgICAgLi4uKHF1ZXJ5UGFyYW1zWydkZWZhdWx0cyddID8gSlNPTi5wYXJzZShxdWVyeVBhcmFtc1snZGVmYXVsdHMnXSBhcyBzdHJpbmcpIDoge30pLFxuICAgICAgdHlwZTogUnVsZUZvcm1UeXBlLmdyYWZhbmEsXG4gICAgfTtcbiAgfSwgW2V4aXN0aW5nLCBxdWVyeVBhcmFtc10pO1xuXG4gIGNvbnN0IGZvcm1BUEkgPSB1c2VGb3JtPFJ1bGVGb3JtVmFsdWVzPih7XG4gICAgbW9kZTogJ29uU3VibWl0JyxcbiAgICBkZWZhdWx0VmFsdWVzLFxuICAgIHNob3VsZEZvY3VzRXJyb3I6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCB3YXRjaCB9ID0gZm9ybUFQSTtcblxuICBjb25zdCB0eXBlID0gd2F0Y2goJ3R5cGUnKTtcbiAgY29uc3QgZGF0YVNvdXJjZU5hbWUgPSB3YXRjaCgnZGF0YVNvdXJjZU5hbWUnKTtcblxuICBjb25zdCBzaG93U3RlcDIgPSBCb29sZWFuKHR5cGUgJiYgKHR5cGUgPT09IFJ1bGVGb3JtVHlwZS5ncmFmYW5hIHx8ICEhZGF0YVNvdXJjZU5hbWUpKTtcblxuICBjb25zdCBzdWJtaXRTdGF0ZSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZUZvcm0uc2F2ZVJ1bGUpIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5ydWxlRm9ybS5zYXZlUnVsZSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlczogUnVsZUZvcm1WYWx1ZXMsIGV4aXRPblNhdmU6IGJvb2xlYW4pID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIHNhdmVSdWxlRm9ybUFjdGlvbih7XG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgIGFubm90YXRpb25zOlxuICAgICAgICAgICAgdmFsdWVzLmFubm90YXRpb25zXG4gICAgICAgICAgICAgID8ubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHsga2V5OiBrZXkudHJpbSgpLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0pKVxuICAgICAgICAgICAgICAuZmlsdGVyKCh7IGtleSwgdmFsdWUgfSkgPT4gISFrZXkgJiYgISF2YWx1ZSkgPz8gW10sXG4gICAgICAgICAgbGFiZWxzOlxuICAgICAgICAgICAgdmFsdWVzLmxhYmVsc1xuICAgICAgICAgICAgICA/Lm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7IGtleToga2V5LnRyaW0oKSwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9KSlcbiAgICAgICAgICAgICAgLmZpbHRlcigoeyBrZXkgfSkgPT4gISFrZXkpID8/IFtdLFxuICAgICAgICB9LFxuICAgICAgICBleGlzdGluZyxcbiAgICAgICAgcmVkaXJlY3RPblNhdmU6IGV4aXRPblNhdmUgPyByZXR1cm5UbyA6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVSdWxlID0gKCkgPT4ge1xuICAgIGlmIChleGlzdGluZykge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC5mcm9tUnVsZXJSdWxlKFxuICAgICAgICBleGlzdGluZy5ydWxlU291cmNlTmFtZSxcbiAgICAgICAgZXhpc3RpbmcubmFtZXNwYWNlLFxuICAgICAgICBleGlzdGluZy5ncm91cC5uYW1lLFxuICAgICAgICBleGlzdGluZy5ydWxlXG4gICAgICApO1xuXG4gICAgICBkaXNwYXRjaChkZWxldGVSdWxlQWN0aW9uKGlkZW50aWZpZXIsIHsgbmF2aWdhdGVUbzogJy9hbGVydGluZy9saXN0JyB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uSW52YWxpZCA9ICgpID0+IHtcbiAgICBub3RpZnlBcHAuZXJyb3IoJ1RoZXJlIGFyZSBlcnJvcnMgaW4gdGhlIGZvcm0uIFBsZWFzZSBjb3JyZWN0IHRoZW0gYW5kIHRyeSBhZ2FpbiEnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtUHJvdmlkZXIgey4uLmZvcm1BUEl9PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICA8UGFnZVRvb2xiYXIgdGl0bGU9e2Ake2V4aXN0aW5nID8gJ0VkaXQnIDogJ0NyZWF0ZSd9IGFsZXJ0IHJ1bGVgfSBwYWdlSWNvbj1cImJlbGxcIj5cbiAgICAgICAgICA8TGluayB0bz17cmV0dXJuVG99PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgZGlzYWJsZWQ9e3N1Ym1pdFN0YXRlLmxvYWRpbmd9IHR5cGU9XCJidXR0b25cIiBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7ZXhpc3RpbmcgPyAoXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGVsZXRlTW9kYWwodHJ1ZSl9PlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtpc0NvcnRleExva2lPclJlY29yZGluZ1J1bGUod2F0Y2gpICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RWRpdFlhbWwodHJ1ZSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXRTdGF0ZS5sb2FkaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFZGl0IHlhbWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXQoKHZhbHVlcykgPT4gc3VibWl0KHZhbHVlcywgZmFsc2UpLCBvbkludmFsaWQpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdFN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N1Ym1pdFN0YXRlLmxvYWRpbmcgJiYgPFNwaW5uZXIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uU3Bpbm5lcn0gaW5saW5lPXt0cnVlfSAvPn1cbiAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdCgodmFsdWVzKSA9PiBzdWJtaXQodmFsdWVzLCB0cnVlKSwgb25JbnZhbGlkKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXRTdGF0ZS5sb2FkaW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdWJtaXRTdGF0ZS5sb2FkaW5nICYmIDxTcGlubmVyIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblNwaW5uZXJ9IGlubGluZT17dHJ1ZX0gLz59XG4gICAgICAgICAgICBTYXZlIGFuZCBleGl0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvUGFnZVRvb2xiYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudE91dGVyfT5cbiAgICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFyIGF1dG9IZWlnaHRNaW49XCIxMDAlXCIgaGlkZUhvcml6b250YWxUcmFjaz17dHJ1ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRJbm5lcn0+XG4gICAgICAgICAgICAgIDxBbGVydFR5cGVTdGVwIGVkaXRpbmdFeGlzdGluZ1J1bGU9eyEhZXhpc3Rpbmd9IC8+XG4gICAgICAgICAgICAgIHtzaG93U3RlcDIgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8UXVlcnlTdGVwIC8+XG4gICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmEgPyA8R3JhZmFuYUNvbmRpdGlvbnNTdGVwIC8+IDogPENsb3VkQ29uZGl0aW9uc1N0ZXAgLz59XG4gICAgICAgICAgICAgICAgICA8RGV0YWlsc1N0ZXAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtzaG93RGVsZXRlTW9kYWwgPyAoXG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgdGl0bGU9XCJEZWxldGUgcnVsZVwiXG4gICAgICAgICAgYm9keT1cIkRlbGV0aW5nIHRoaXMgcnVsZSB3aWxsIHBlcm1hbmVudGx5IHJlbW92ZSBpdC4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJ1bGU/XCJcbiAgICAgICAgICBjb25maXJtVGV4dD1cIlllcywgZGVsZXRlXCJcbiAgICAgICAgICBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlUnVsZX1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dEZWxldGVNb2RhbChmYWxzZSl9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtzaG93RWRpdFlhbWwgPyA8UnVsZUluc3BlY3RvciBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RWRpdFlhbWwoZmFsc2UpfSAvPiA6IG51bGx9XG4gICAgPC9Gb3JtUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBpc0NvcnRleExva2lPclJlY29yZGluZ1J1bGUgPSAod2F0Y2g6IFVzZUZvcm1XYXRjaDxSdWxlRm9ybVZhbHVlcz4pID0+IHtcbiAgY29uc3QgW3J1bGVUeXBlLCBkYXRhU291cmNlTmFtZV0gPSB3YXRjaChbJ3R5cGUnLCAnZGF0YVNvdXJjZU5hbWUnXSk7XG5cbiAgcmV0dXJuIChydWxlVHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmcgfHwgcnVsZVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZykgJiYgZGF0YVNvdXJjZU5hbWUgIT09ICcnO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYnV0dG9uU3Bpbm5lcjogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgZm9ybTogY3NzYFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBgLFxuICAgIGNvbnRlbnRJbm5lcjogY3NzYFxuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICBjb250ZW50T3V0ZXI6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIud2Vha307XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDAsIDIsIDIpfTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBmbGV4OiAxO1xuICAgIGAsXG4gICAgZmxleFJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGQsIEljb24sIElucHV0LCBJbnB1dENvbnRyb2wsIExhYmVsLCBUb29sdGlwLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFJ1bGVFZGl0b3JTZWN0aW9uIH0gZnJvbSAnLi9SdWxlRWRpdG9yU2VjdGlvbic7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUsIFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IEZvbGRlciwgUnVsZUZvbGRlclBpY2tlciB9IGZyb20gJy4vUnVsZUZvbGRlclBpY2tlcic7XG5pbXBvcnQgeyBHcm91cEFuZE5hbWVzcGFjZUZpZWxkcyB9IGZyb20gJy4vR3JvdXBBbmROYW1lc3BhY2VGaWVsZHMnO1xuaW1wb3J0IHsgQ2xvdWRSdWxlc1NvdXJjZVBpY2tlciB9IGZyb20gJy4vQ2xvdWRSdWxlc1NvdXJjZVBpY2tlcic7XG5pbXBvcnQgeyBjaGVja0ZvclBhdGhTZXBhcmF0b3IgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgUnVsZVR5cGVQaWNrZXIgfSBmcm9tICcuL3J1bGUtdHlwZXMvUnVsZVR5cGVQaWNrZXInO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBlZGl0aW5nRXhpc3RpbmdSdWxlOiBib29sZWFuO1xufVxuXG5jb25zdCByZWNvcmRpbmdSdWxlTmFtZVZhbGlkYXRpb25QYXR0ZXJuID0ge1xuICBtZXNzYWdlOlxuICAgICdSZWNvcmRpbmcgcnVsZSBuYW1lIG11c3QgYmUgdmFsaWQgbWV0cmljIG5hbWUuIEl0IG1heSBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgYW5kIGNvbG9ucy4gSXQgbWF5IG5vdCBjb250YWluIHdoaXRlc3BhY2UuJyxcbiAgdmFsdWU6IC9eW2EtekEtWl86XVthLXpBLVowLTlfOl0qJC8sXG59O1xuXG5leHBvcnQgY29uc3QgQWxlcnRUeXBlU3RlcDogRkM8UHJvcHM+ID0gKHsgZWRpdGluZ0V4aXN0aW5nUnVsZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB7IGVuYWJsZWRSdWxlVHlwZXMsIGRlZmF1bHRSdWxlVHlwZSB9ID0gZ2V0QXZhaWxhYmxlUnVsZVR5cGVzKCk7XG5cbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGNvbnRyb2wsXG4gICAgd2F0Y2gsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICAgIHNldFZhbHVlLFxuICAgIGdldFZhbHVlcyxcbiAgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzICYgeyBsb2NhdGlvbj86IHN0cmluZyB9PigpO1xuXG4gIGNvbnN0IHJ1bGVGb3JtVHlwZSA9IHdhdGNoKCd0eXBlJyk7XG4gIGNvbnN0IGRhdGFTb3VyY2VOYW1lID0gd2F0Y2goJ2RhdGFTb3VyY2VOYW1lJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8UnVsZUVkaXRvclNlY3Rpb24gc3RlcE5vPXsxfSB0aXRsZT1cIlJ1bGUgdHlwZVwiPlxuICAgICAgeyFlZGl0aW5nRXhpc3RpbmdSdWxlICYmIChcbiAgICAgICAgPEZpZWxkIGVycm9yPXtlcnJvcnMudHlwZT8ubWVzc2FnZX0gaW52YWxpZD17ISFlcnJvcnMudHlwZT8ubWVzc2FnZX0gZGF0YS10ZXN0aWQ9XCJhbGVydC10eXBlLXBpY2tlclwiPlxuICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UgfSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxSdWxlVHlwZVBpY2tlclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSdWxlIHR5cGVcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtnZXRWYWx1ZXMoJ3R5cGUnKSA/PyBkZWZhdWx0UnVsZVR5cGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGVuYWJsZWRUeXBlcz17ZW5hYmxlZFJ1bGVUeXBlc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGFsZXJ0IHR5cGUnIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmllbGQ+XG4gICAgICApfVxuXG4gICAgICA8RmllbGRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0fVxuICAgICAgICBsYWJlbD1cIlJ1bGUgbmFtZVwiXG4gICAgICAgIGVycm9yPXtlcnJvcnM/Lm5hbWU/Lm1lc3NhZ2V9XG4gICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm5hbWU/Lm1lc3NhZ2V9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdNdXN0IGVudGVyIGFuIGFsZXJ0IG5hbWUnIH0sXG4gICAgICAgICAgICBwYXR0ZXJuOiBydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZyA/IHJlY29yZGluZ1J1bGVOYW1lVmFsaWRhdGlvblBhdHRlcm4gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgICBwYXRoU2VwYXJhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdlIHVzZSB0aGUgYWxlcnQgcnVsZSBuYW1lIGFzIHRoZSBcImdyb3VwbmFtZVwiIGZvciBHcmFmYW5hIG1hbmFnZWQgYWxlcnRzLCBzbyB3ZSBjYW4ndCBhbGxvdyBwYXRoIHNlcGFyYXRvcnNcbiAgICAgICAgICAgICAgICBpZiAocnVsZUZvcm1UeXBlID09PSBSdWxlRm9ybVR5cGUuZ3JhZmFuYSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrRm9yUGF0aFNlcGFyYXRvcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICB7KHJ1bGVGb3JtVHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nIHx8IHJ1bGVGb3JtVHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmcpICYmIChcbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIGxhYmVsPVwiU2VsZWN0IGRhdGEgc291cmNlXCJcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZGF0YVNvdXJjZU5hbWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5kYXRhU291cmNlTmFtZT8ubWVzc2FnZX1cbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZGF0YXNvdXJjZS1waWNrZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICA8Q2xvdWRSdWxlc1NvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgbG9jYXRpb24gaWYgc3dpdGNoaW5nIGRhdGEgc291cmNlcywgYXMgZGlmZmVyZW50IHJ1bGVzIHNvdXJjZSB3aWxsIGhhdmUgZGlmZmVyZW50IGdyb3VwcyBhbmQgbmFtZXNwYWNlc1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSgnbG9jYXRpb24nLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShkcz8ubmFtZSA/PyBudWxsKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbmFtZT1cImRhdGFTb3VyY2VOYW1lXCJcbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgYSBkYXRhIHNvdXJjZScgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgeyhydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZyB8fCBydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nKSAmJlxuICAgICAgICBkYXRhU291cmNlTmFtZSAmJiA8R3JvdXBBbmROYW1lc3BhY2VGaWVsZHMgcnVsZXNTb3VyY2VOYW1lPXtkYXRhU291cmNlTmFtZX0gLz59XG5cbiAgICAgIHtydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5ncmFmYW5hICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJmb2xkZXJcIiBkZXNjcmlwdGlvbj17J1NlbGVjdCBhIGZvbGRlciB0byBzdG9yZSB5b3VyIHJ1bGUuJ30+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGdhcD17MC41fT5cbiAgICAgICAgICAgICAgICAgIEZvbGRlclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggZm9sZGVyIGhhcyB1bmlxdWUgZm9sZGVyIHBlcm1pc3Npb24uIFdoZW4geW91IHN0b3JlIG11bHRpcGxlIHJ1bGVzIGluIGEgZm9sZGVyLCB0aGUgZm9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3MgcGVybWlzc2lvbnMgZ2V0IGFzc2lnbmVkIHRvIHRoZSBydWxlcy5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaW5mby1jaXJjbGVcIiBzaXplPVwieHNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXR9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmZvbGRlcj8ubWVzc2FnZX1cbiAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmZvbGRlcj8ubWVzc2FnZX1cbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZm9sZGVyLXBpY2tlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFJ1bGVGb2xkZXJQaWNrZXIgaW5wdXRJZD1cImZvbGRlclwiIHsuLi5maWVsZH0gZW5hYmxlQ3JlYXRlTmV3PXt0cnVlfSBlbmFibGVSZXNldD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbmFtZT1cImZvbGRlclwiXG4gICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGEgZm9sZGVyJyB9LFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICBwYXRoU2VwYXJhdG9yOiAoZm9sZGVyOiBGb2xkZXIpID0+IGNoZWNrRm9yUGF0aFNlcGFyYXRvcihmb2xkZXIudGl0bGUpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIkdyb3VwXCJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZ3JvdXAtcGlja2VyXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUnVsZXMgd2l0aGluIHRoZSBzYW1lIGdyb3VwIGFyZSBldmFsdWF0ZWQgYWZ0ZXIgdGhlIHNhbWUgdGltZSBpbnRlcnZhbC5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0fVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5ncm91cD8ubWVzc2FnZX1cbiAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmdyb3VwPy5tZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cImdyb3VwXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdncm91cCcsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ011c3QgZW50ZXIgYSBncm91cCBuYW1lJyB9LFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvUnVsZUVkaXRvclNlY3Rpb24+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRBdmFpbGFibGVSdWxlVHlwZXMoKSB7XG4gIGNvbnN0IGNhbkNyZWF0ZUdyYWZhbmFSdWxlcyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nUnVsZUNyZWF0ZSk7XG4gIGNvbnN0IGNhbkNyZWF0ZUNsb3VkUnVsZXMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BbGVydGluZ1J1bGVFeHRlcm5hbFdyaXRlKTtcbiAgY29uc3QgZGVmYXVsdFJ1bGVUeXBlID0gY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzID8gUnVsZUZvcm1UeXBlLmdyYWZhbmEgOiBSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZztcblxuICBjb25zdCBlbmFibGVkUnVsZVR5cGVzOiBSdWxlRm9ybVR5cGVbXSA9IFtdO1xuICBpZiAoY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzKSB7XG4gICAgZW5hYmxlZFJ1bGVUeXBlcy5wdXNoKFJ1bGVGb3JtVHlwZS5ncmFmYW5hKTtcbiAgfVxuICBpZiAoY2FuQ3JlYXRlQ2xvdWRSdWxlcykge1xuICAgIGVuYWJsZWRSdWxlVHlwZXMucHVzaChSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZywgUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nKTtcbiAgfVxuXG4gIHJldHVybiB7IGVuYWJsZWRSdWxlVHlwZXMsIGRlZmF1bHRSdWxlVHlwZSB9O1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGZvcm1JbnB1dDogY3NzYFxuICAgIHdpZHRoOiAzMzBweDtcbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgICB9XG4gIGAsXG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RXaXRoQWRkIH0gZnJvbSAnLi9TZWxlY3RXSXRoQWRkJztcbmltcG9ydCB7IEFubm90YXRpb24sIGFubm90YXRpb25MYWJlbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGV4aXN0aW5nS2V5czogc3RyaW5nW107XG5cbiAgdmFsdWU/OiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICdhcmlhLWxhYmVsJz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFubm90YXRpb25LZXlJbnB1dDogRkM8UHJvcHM+ID0gKHsgdmFsdWUsIGV4aXN0aW5nS2V5cywgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBhbm5vdGF0aW9uT3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCk6IFNlbGVjdGFibGVWYWx1ZVtdID0+XG4gICAgICBPYmplY3QudmFsdWVzKEFubm90YXRpb24pXG4gICAgICAgIC5maWx0ZXIoKGtleSkgPT4gIWV4aXN0aW5nS2V5cy5pbmNsdWRlcyhrZXkpKSAvLyByZW1vdmUga2V5cyBhbHJlYWR5IHRha2VuIGluIG90aGVyIGFubm90YXRpb25zXG4gICAgICAgIC5tYXAoKGtleSkgPT4gKHsgdmFsdWU6IGtleSwgbGFiZWw6IGFubm90YXRpb25MYWJlbHNba2V5XSB9KSksXG4gICAgW2V4aXN0aW5nS2V5c11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RXaXRoQWRkXG4gICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBvcHRpb25zPXthbm5vdGF0aW9uT3B0aW9uc31cbiAgICAgIGN1c3RvbT17ISF2YWx1ZSAmJiAhKE9iamVjdC52YWx1ZXMoQW5ub3RhdGlvbikgYXMgc3RyaW5nW10pLmluY2x1ZGVzKHZhbHVlKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZpZWxkQXJyYXksIElucHV0LCBJbnB1dENvbnRyb2wsIExhYmVsLCBUZXh0QXJlYSwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IEFubm90YXRpb25LZXlJbnB1dCB9IGZyb20gJy4vQW5ub3RhdGlvbktleUlucHV0JztcblxuY29uc3QgQW5ub3RhdGlvbnNGaWVsZDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCB7XG4gICAgY29udHJvbCxcbiAgICByZWdpc3RlcixcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xuICBjb25zdCBhbm5vdGF0aW9ucyA9IHdhdGNoKCdhbm5vdGF0aW9ucycpIGFzIFJ1bGVGb3JtVmFsdWVzWydhbm5vdGF0aW9ucyddO1xuXG4gIGNvbnN0IGV4aXN0aW5nS2V5cyA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKTogc3RyaW5nW10gPT4gYW5ub3RhdGlvbnMuZmlsdGVyKChfLCBpZHg6IG51bWJlcikgPT4gaWR4ICE9PSBpbmRleCkubWFwKCh7IGtleSB9KSA9PiBrZXkpLFxuICAgIFthbm5vdGF0aW9uc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGFiZWw+U3VtbWFyeSBhbmQgYW5ub3RhdGlvbnM8L0xhYmVsPlxuICAgICAgPEZpZWxkQXJyYXkgbmFtZT17J2Fubm90YXRpb25zJ30gY29udHJvbD17Y29udHJvbH0+XG4gICAgICAgIHsoeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29sdW1ufT5cbiAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzVXJsID0gYW5ub3RhdGlvbnNbaW5kZXhdPy5rZXk/LnRvTG9jYWxlTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ3VybCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFZhbHVlSW5wdXRDb21wb25lbnQgPSBpc1VybCA/IElucHV0IDogVGV4dEFyZWE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmaWVsZC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy5rZXk/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5hbm5vdGF0aW9ucz8uW2luZGV4XT8ua2V5Py5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgYW5ub3RhdGlvbi1rZXktJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGFubm90YXRpb25zWyR7aW5kZXh9XS5rZXlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5ub3RhdGlvbktleUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BBbm5vdGF0aW9uIGRldGFpbCAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nS2V5cz17ZXhpc3RpbmdLZXlzKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB7IHZhbHVlOiAhIWFubm90YXRpb25zW2luZGV4XT8udmFsdWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93SXRlbU1hcmdpbiwgc3R5bGVzLmZpZWxkKX1cbiAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5hbm5vdGF0aW9ucz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5hbm5vdGF0aW9ucz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VmFsdWVJbnB1dENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Bhbm5vdGF0aW9uLXZhbHVlLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmFubm90YXRpb25WYWx1ZUlucHV0LCB7IFtzdHlsZXMudGV4dGFyZWFdOiAhaXNVcmwgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYGFubm90YXRpb25zWyR7aW5kZXh9XS52YWx1ZWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2lzVXJsID8gJ2h0dHBzOi8vJyA6IGBUZXh0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZmllbGQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3dJdGVtTWFyZ2lufVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJkZWxldGUgYW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQW5ub3RhdGlvbnNCdXR0b259XG4gICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBhcHBlbmQoeyBrZXk6ICcnLCB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFkZCBpbmZvXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRmllbGRBcnJheT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBhbm5vdGF0aW9uVmFsdWVJbnB1dDogY3NzYFxuICAgIHdpZHRoOiA0MjZweDtcbiAgYCxcbiAgdGV4dGFyZWE6IGNzc2BcbiAgICBoZWlnaHQ6IDc2cHg7XG4gIGAsXG4gIGFkZEFubm90YXRpb25zQnV0dG9uOiBjc3NgXG4gICAgZmxleC1ncm93OiAwO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE0OHB4O1xuICBgLFxuICBmbGV4Q29sdW1uOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBgLFxuICBmaWVsZDogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy54c307XG4gIGAsXG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBgLFxuICBmbGV4Um93SXRlbU1hcmdpbjogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICBgLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFubm90YXRpb25zRmllbGQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGaWVsZCwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0LCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUsIFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IHRpbWVPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgeyBSdWxlRWRpdG9yU2VjdGlvbiB9IGZyb20gJy4vUnVsZUVkaXRvclNlY3Rpb24nO1xuaW1wb3J0IHsgUHJldmlld1J1bGUgfSBmcm9tICcuL1ByZXZpZXdSdWxlJztcblxuZXhwb3J0IGNvbnN0IENsb3VkQ29uZGl0aW9uc1N0ZXA6IEZDID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGNvbnRyb2wsXG4gICAgd2F0Y2gsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG5cbiAgY29uc3QgdHlwZSA9IHdhdGNoKCd0eXBlJyk7XG5cbiAgLy8gY2xvdWQgcmVjb3JkaW5nIHJ1bGVzIGRvIG5vdCBoYXZlIGFsZXJ0IGNvbmRpdGlvbnNcbiAgaWYgKHR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UnVsZUVkaXRvclNlY3Rpb24gc3RlcE5vPXszfSB0aXRsZT1cIkRlZmluZSBhbGVydCBjb25kaXRpb25zXCI+XG4gICAgICA8RmllbGQgbGFiZWw9XCJGb3JcIiBkZXNjcmlwdGlvbj1cIkV4cHJlc3Npb24gaGFzIHRvIGJlIHRydWUgZm9yIHRoaXMgbG9uZyBmb3IgdGhlIGFsZXJ0IHRvIGJlIGZpcmVkLlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy5mb3JUaW1lPy5tZXNzYWdlfSBlcnJvcj17ZXJyb3JzLmZvclRpbWU/Lm1lc3NhZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmlubGluZUZpZWxkfT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2ZvclRpbWUnLCB7IHBhdHRlcm46IHsgdmFsdWU6IC9eXFxkKyQvLCBtZXNzYWdlOiAnTXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuJyB9IH0pfVxuICAgICAgICAgICAgICB3aWR0aD17OH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICBuYW1lPVwiZm9yVGltZVVuaXRcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGltZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWU/LnZhbHVlKX1cbiAgICAgICAgICAgICAgICB3aWR0aD17MTV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZVVuaXR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8UHJldmlld1J1bGUgLz5cbiAgICA8L1J1bGVFZGl0b3JTZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGlubGluZUZpZWxkOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYCxcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGAsXG4gIHRpbWVVbml0OiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGlja2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1c2VSdWxlc1NvdXJjZXNXaXRoUnVsZXIgfSBmcm9tICcuLi8uLi9ob29rcy91c2VSdWxlU291cmNlc1dpdGhSdWxlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAoZHM6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSA9PiB2b2lkO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVsbDtcbiAgb25CbHVyPzogKCkgPT4gdm9pZDtcbiAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENsb3VkUnVsZXNTb3VyY2VQaWNrZXIoeyB2YWx1ZSwgLi4ucHJvcHMgfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHJ1bGVzU291cmNlc1dpdGhSdWxlciA9IHVzZVJ1bGVzU291cmNlc1dpdGhSdWxlcigpO1xuXG4gIGNvbnN0IGRhdGFTb3VyY2VGaWx0ZXIgPSB1c2VDYWxsYmFjayhcbiAgICAoZHM6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gISFydWxlc1NvdXJjZXNXaXRoUnVsZXIuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gZHMuaWQpO1xuICAgIH0sXG4gICAgW3J1bGVzU291cmNlc1dpdGhSdWxlcl1cbiAgKTtcblxuICByZXR1cm4gPERhdGFTb3VyY2VQaWNrZXIgbm9EZWZhdWx0IGFsZXJ0aW5nIGZpbHRlcj17ZGF0YVNvdXJjZUZpbHRlcn0gY3VycmVudD17dmFsdWV9IHsuLi5wcm9wc30gLz47XG59XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBJbnB1dENvbnRyb2wsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEV4cHJlc3Npb25EYXRhc291cmNlVUlEIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL0V4cHJlc3Npb25EYXRhc291cmNlJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5leHBvcnQgY29uc3QgQ29uZGl0aW9uRmllbGQ6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgd2F0Y2gsXG4gICAgc2V0VmFsdWUsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG5cbiAgY29uc3QgcXVlcmllcyA9IHdhdGNoKCdxdWVyaWVzJyk7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IHdhdGNoKCdjb25kaXRpb24nKTtcblxuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKTogU2VsZWN0YWJsZVZhbHVlW10gPT5cbiAgICAgIHF1ZXJpZXNcbiAgICAgICAgLmZpbHRlcigocSkgPT4gISFxLnJlZklkKVxuICAgICAgICAubWFwKChxKSA9PiAoe1xuICAgICAgICAgIHZhbHVlOiBxLnJlZklkLFxuICAgICAgICAgIGxhYmVsOiBxLnJlZklkLFxuICAgICAgICB9KSksXG4gICAgW3F1ZXJpZXNdXG4gICk7XG5cbiAgLy8gcmVzZXQgY29uZGl0aW9uIGlmIG9wdGlvbiBubyBsb25nZXIgZXhpc3RzIG9yIGlmIGl0IGlzIHVuc2V0LCBidXQgdGhlcmUgYXJlIG9wdGlvbnMgYXZhaWxhYmxlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZXhwcmVzc2lvbnMgPSBxdWVyaWVzLmZpbHRlcigocXVlcnkpID0+IHF1ZXJ5LmRhdGFzb3VyY2VVaWQgPT09IEV4cHJlc3Npb25EYXRhc291cmNlVUlEKTtcbiAgICBpZiAoY29uZGl0aW9uICYmICFvcHRpb25zLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGNvbmRpdGlvbikpIHtcbiAgICAgIHNldFZhbHVlKCdjb25kaXRpb24nLCBleHByZXNzaW9ucy5sZW5ndGggPyBleHByZXNzaW9uc1tleHByZXNzaW9ucy5sZW5ndGggLSAxXS5yZWZJZCA6IG51bGwpO1xuICAgIH0gZWxzZSBpZiAoIWNvbmRpdGlvbiAmJiBleHByZXNzaW9ucy5sZW5ndGgpIHtcbiAgICAgIHNldFZhbHVlKCdjb25kaXRpb24nLCBleHByZXNzaW9uc1tleHByZXNzaW9ucy5sZW5ndGggLSAxXS5yZWZJZCk7XG4gICAgfVxuICB9LCBbY29uZGl0aW9uLCBvcHRpb25zLCBxdWVyaWVzLCBzZXRWYWx1ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkXG4gICAgICBsYWJlbD1cIkNvbmRpdGlvblwiXG4gICAgICBkZXNjcmlwdGlvbj1cIlRoZSBxdWVyeSBvciBleHByZXNzaW9uIHRoYXQgd2lsbCBiZSBhbGVydGVkIG9uXCJcbiAgICAgIGVycm9yPXtlcnJvcnMuY29uZGl0aW9uPy5tZXNzYWdlfVxuICAgICAgaW52YWxpZD17ISFlcnJvcnMuY29uZGl0aW9uPy5tZXNzYWdlfVxuICAgID5cbiAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgbmFtZT1cImNvbmRpdGlvblwiXG4gICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvbmRpdGlvblwiXG4gICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICB3aWR0aD17NDJ9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2OiBTZWxlY3RhYmxlVmFsdWUpID0+IG9uQ2hhbmdlKHY/LnZhbHVlID8/IG51bGwpfVxuICAgICAgICAgICAgbm9PcHRpb25zTWVzc2FnZT1cIk5vIHF1ZXJpZXMgZGVmaW5lZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICByZXF1aXJlZDoge1xuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCB0aGUgY29uZGl0aW9uIHRvIGFsZXJ0IG9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYWJlbHNGaWVsZCBmcm9tICcuL0xhYmVsc0ZpZWxkJztcbmltcG9ydCBBbm5vdGF0aW9uc0ZpZWxkIGZyb20gJy4vQW5ub3RhdGlvbnNGaWVsZCc7XG5pbXBvcnQgeyBSdWxlRWRpdG9yU2VjdGlvbiB9IGZyb20gJy4vUnVsZUVkaXRvclNlY3Rpb24nO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgUnVsZUZvcm1UeXBlLCBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmV4cG9ydCBjb25zdCBEZXRhaWxzU3RlcDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd2F0Y2ggfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuXG4gIGNvbnN0IHR5cGUgPSB3YXRjaCgndHlwZScpO1xuXG4gIHJldHVybiAoXG4gICAgPFJ1bGVFZGl0b3JTZWN0aW9uXG4gICAgICBzdGVwTm89e3R5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZyA/IDMgOiA0fVxuICAgICAgdGl0bGU9e1xuICAgICAgICB0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcgPyAnQWRkIGRldGFpbHMgZm9yIHlvdXIgcmVjb3JkaW5nIHJ1bGUnIDogJ0FkZCBkZXRhaWxzIGZvciB5b3VyIGFsZXJ0J1xuICAgICAgfVxuICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICB0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmdcbiAgICAgICAgICA/ICdBZGQgbGFiZWxzIHRvIGhlbHAgeW91IGJldHRlciBtYW5hZ2UgeW91ciBydWxlcydcbiAgICAgICAgICA6ICdXcml0ZSBhIHN1bW1hcnkgYW5kIGFkZCBsYWJlbHMgdG8gaGVscCB5b3UgYmV0dGVyIG1hbmFnZSB5b3VyIGFsZXJ0cydcbiAgICAgIH1cbiAgICA+XG4gICAgICB7dHlwZSAhPT0gUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nICYmIDxBbm5vdGF0aW9uc0ZpZWxkIC8+fVxuICAgICAgPExhYmVsc0ZpZWxkIC8+XG4gICAgPC9SdWxlRWRpdG9yU2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQ29yZUFwcCwgRGF0YVF1ZXJ5IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBQcm9tUXVlcnkgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvdHlwZXMnO1xuaW1wb3J0IHsgTG9raVF1ZXJ5IH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9sb2tpL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBFeHByZXNzaW9uRWRpdG9yUHJvcHMge1xuICB2YWx1ZT86IHN0cmluZztcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBkYXRhU291cmNlTmFtZTogc3RyaW5nOyAvLyB3aWxsIGJlIGEgcHJvbWV0aGV1cyBvciBsb2tpIGRhdGFzb3VyY2Vcbn1cblxuZXhwb3J0IGNvbnN0IEV4cHJlc3Npb25FZGl0b3I6IEZDPEV4cHJlc3Npb25FZGl0b3JQcm9wcz4gPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGRhdGFTb3VyY2VOYW1lIH0pID0+IHtcbiAgY29uc3QgeyBtYXBUb1ZhbHVlLCBtYXBUb1F1ZXJ5IH0gPSB1c2VRdWVyeU1hcHBlcnMoZGF0YVNvdXJjZU5hbWUpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKG1hcFRvUXVlcnkoeyByZWZJZDogJ0EnLCBoaWRlOiBmYWxzZSB9LCB2YWx1ZSkpO1xuICBjb25zdCB7XG4gICAgZXJyb3IsXG4gICAgbG9hZGluZyxcbiAgICB2YWx1ZTogZGF0YVNvdXJjZSxcbiAgfSA9IHVzZUFzeW5jKCgpID0+IHtcbiAgICByZXR1cm4gZ2V0RGF0YVNvdXJjZVNydigpLmdldChkYXRhU291cmNlTmFtZSk7XG4gIH0sIFtkYXRhU291cmNlTmFtZV0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlUXVlcnkgPSB1c2VDYWxsYmFjayhcbiAgICAocXVlcnk6IERhdGFRdWVyeSkgPT4ge1xuICAgICAgc2V0UXVlcnkocXVlcnkpO1xuICAgICAgb25DaGFuZ2UobWFwVG9WYWx1ZShxdWVyeSkpO1xuICAgIH0sXG4gICAgW29uQ2hhbmdlLCBtYXBUb1ZhbHVlXVxuICApO1xuXG4gIGlmIChsb2FkaW5nIHx8IGRhdGFTb3VyY2U/Lm5hbWUgIT09IGRhdGFTb3VyY2VOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZXJyb3IgfHwgIWRhdGFTb3VyY2UgfHwgIWRhdGFTb3VyY2U/LmNvbXBvbmVudHM/LlF1ZXJ5RWRpdG9yKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3I/Lm1lc3NhZ2UgfHwgJ0RhdGEgc291cmNlIHBsdWdpbiBkb2VzIG5vdCBleHBvcnQgYW55IFF1ZXJ5IEVkaXRvciBjb21wb25lbnQnO1xuICAgIHJldHVybiA8ZGl2PkNvdWxkIG5vdCBsb2FkIHF1ZXJ5IGVkaXRvciBkdWUgdG86IHtlcnJvck1lc3NhZ2V9PC9kaXY+O1xuICB9XG5cbiAgY29uc3QgUXVlcnlFZGl0b3IgPSBkYXRhU291cmNlPy5jb21wb25lbnRzPy5RdWVyeUVkaXRvcjtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUVkaXRvclxuICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgcXVlcmllcz17W3F1ZXJ5XX1cbiAgICAgIGFwcD17Q29yZUFwcC5DbG91ZEFsZXJ0aW5nfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUXVlcnl9XG4gICAgICBvblJ1blF1ZXJ5PXtub29wfVxuICAgICAgZGF0YXNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAvPlxuICApO1xufTtcblxudHlwZSBRdWVyeU1hcHBlcnM8VCBleHRlbmRzIERhdGFRdWVyeSA9IERhdGFRdWVyeT4gPSB7XG4gIG1hcFRvVmFsdWU6IChxdWVyeTogVCkgPT4gc3RyaW5nO1xuICBtYXBUb1F1ZXJ5OiAoZXhpc3Rpbmc6IFQsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IFQ7XG59O1xuXG5mdW5jdGlvbiB1c2VRdWVyeU1hcHBlcnMoZGF0YVNvdXJjZU5hbWU6IHN0cmluZyk6IFF1ZXJ5TWFwcGVycyB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKGRhdGFTb3VyY2VOYW1lKTtcblxuICAgIHN3aXRjaCAoc2V0dGluZ3M/LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2xva2knOlxuICAgICAgY2FzZSAncHJvbWV0aGV1cyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWFwVG9WYWx1ZTogKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IChxdWVyeSBhcyBQcm9tUXVlcnkgfCBMb2tpUXVlcnkpLmV4cHIsXG4gICAgICAgICAgbWFwVG9RdWVyeTogKGV4aXN0aW5nOiBEYXRhUXVlcnksIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+ICh7IC4uLmV4aXN0aW5nLCBleHByOiB2YWx1ZSB9KSxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtkYXRhU291cmNlTmFtZX0gaXMgbm90IHN1cHBvcnRlZCBhcyBhbiBleHByZXNzaW9uIGVkaXRvcmApO1xuICAgIH1cbiAgfSwgW2RhdGFTb3VyY2VOYW1lXSk7XG59XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNlbGVjdEJhc2VQcm9wcyB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL1NlbGVjdC90eXBlcyc7XG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZURlY2lzaW9uIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IE9taXQ8U2VsZWN0QmFzZVByb3BzPEdyYWZhbmFBbGVydFN0YXRlRGVjaXNpb24+LCAnb3B0aW9ucyc+ICYge1xuICBpbmNsdWRlTm9EYXRhOiBib29sZWFuO1xuICBpbmNsdWRlRXJyb3I6IGJvb2xlYW47XG59O1xuXG5jb25zdCBvcHRpb25zOiBTZWxlY3RhYmxlVmFsdWVbXSA9IFtcbiAgeyB2YWx1ZTogR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5BbGVydGluZywgbGFiZWw6ICdBbGVydGluZycgfSxcbiAgeyB2YWx1ZTogR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5Ob0RhdGEsIGxhYmVsOiAnTm8gRGF0YScgfSxcbiAgeyB2YWx1ZTogR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5PSywgbGFiZWw6ICdPSycgfSxcbiAgeyB2YWx1ZTogR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5FcnJvciwgbGFiZWw6ICdFcnJvcicgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBHcmFmYW5hQWxlcnRTdGF0ZVBpY2tlcjogRkM8UHJvcHM+ID0gKHsgaW5jbHVkZU5vRGF0YSwgaW5jbHVkZUVycm9yLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IG9wdHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWluY2x1ZGVOb0RhdGEpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigob3B0KSA9PiBvcHQudmFsdWUgIT09IEdyYWZhbmFBbGVydFN0YXRlRGVjaXNpb24uTm9EYXRhKTtcbiAgICB9XG4gICAgaWYgKCFpbmNsdWRlRXJyb3IpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigob3B0KSA9PiBvcHQudmFsdWUgIT09IEdyYWZhbmFBbGVydFN0YXRlRGVjaXNpb24uRXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfSwgW2luY2x1ZGVOb0RhdGEsIGluY2x1ZGVFcnJvcl0pO1xuICByZXR1cm4gPFNlbGVjdCBtZW51U2hvdWxkUG9ydGFsIG9wdGlvbnM9e29wdHN9IHsuLi5wcm9wc30gLz47XG59O1xuIiwiaW1wb3J0IHsgZHVyYXRpb25Ub01pbGxpc2Vjb25kcywgcGFyc2VEdXJhdGlvbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuLy8gYSB3YXJuaW5nIHRoYXQgd2lsbCBiZSBzaG93biBpZiBhIHByb2JsZW1hdGljIHlldCB0ZWNobmljYWxseSB2YWxpZCBjb21iaW5hdGlvbiBvZiBcImV2YWx1YXRlIGV2ZXJ5XCIgYW5kIFwiZXZhbHVhdGUgZm9yXCIgaXMgZW5ldGVyZWRcbmV4cG9ydCBjb25zdCBHcmFmYW5hQ29uZGl0aW9uRXZhbFdhcm5pbmc6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IHdhdGNoIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcbiAgY29uc3QgZXZhbHVhdGVGb3IgPSB3YXRjaCgnZXZhbHVhdGVGb3InKTtcbiAgY29uc3QgZXZhbHVhdGVFdmVyeSA9IHdhdGNoKCdldmFsdWF0ZUV2ZXJ5Jyk7XG4gIGlmIChldmFsdWF0ZUZvciA9PT0gJzAnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZHVyYXRpb25Gb3IgPSBwYXJzZUR1cmF0aW9uKGV2YWx1YXRlRm9yKTtcbiAgY29uc3QgZHVyYXRpb25FdmVyeSA9IHBhcnNlRHVyYXRpb24oZXZhbHVhdGVFdmVyeSk7XG4gIGlmIChpc0VtcHR5KGR1cmF0aW9uRm9yKSB8fCBpc0VtcHR5KGR1cmF0aW9uRXZlcnkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgbWlsbGlzRm9yID0gZHVyYXRpb25Ub01pbGxpc2Vjb25kcyhkdXJhdGlvbkZvcik7XG4gIGNvbnN0IG1pbGxpc0V2ZXJ5ID0gZHVyYXRpb25Ub01pbGxpc2Vjb25kcyhkdXJhdGlvbkV2ZXJ5KTtcbiAgaWYgKG1pbGxpc0ZvciAmJiBtaWxsaXNFdmVyeSAmJiBtaWxsaXNGb3IgPD0gbWlsbGlzRXZlcnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0IHNldmVyaXR5PVwid2FybmluZ1wiIHRpdGxlPVwiXCI+XG4gICAgICAgIFNldHRpbmcgYSAmcXVvdDtmb3ImcXVvdDsgZHVyYXRpb24gdGhhdCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIGV2YWx1YXRpb24gaW50ZXJ2YWwgd2lsbCByZXN1bHQgaW4gdGhlXG4gICAgICAgIGV2YWx1YXRpb24gaW50ZXJ2YWwgYmVpbmcgdXNlZCB0byBjYWxjdWxhdGUgd2hlbiBhbiBhbGVydCB0aGF0IGhhcyBzdG9wcGVkIHJlY2VpdmluZyBkYXRhIHdpbGwgYmUgY2xvc2VkLlxuICAgICAgPC9BbGVydD5cbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgcGFyc2VEdXJhdGlvbiwgZHVyYXRpb25Ub01pbGxpc2Vjb25kcywgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGQsIElubGluZUxhYmVsLCBJbnB1dCwgSW5wdXRDb250cm9sLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIFJlZ2lzdGVyT3B0aW9ucyB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5pbXBvcnQgeyBwb3NpdGl2ZUR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4sIGR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4gfSBmcm9tICcuLi8uLi91dGlscy90aW1lJztcbmltcG9ydCB7IENvbmRpdGlvbkZpZWxkIH0gZnJvbSAnLi9Db25kaXRpb25GaWVsZCc7XG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZVBpY2tlciB9IGZyb20gJy4vR3JhZmFuYUFsZXJ0U3RhdGVQaWNrZXInO1xuaW1wb3J0IHsgUnVsZUVkaXRvclNlY3Rpb24gfSBmcm9tICcuL1J1bGVFZGl0b3JTZWN0aW9uJztcbmltcG9ydCB7IFByZXZpZXdSdWxlIH0gZnJvbSAnLi9QcmV2aWV3UnVsZSc7XG5pbXBvcnQgeyBHcmFmYW5hQ29uZGl0aW9uRXZhbFdhcm5pbmcgfSBmcm9tICcuL0dyYWZhbmFDb25kaXRpb25FdmFsV2FybmluZyc7XG5pbXBvcnQgeyBDb2xsYXBzZVRvZ2dsZSB9IGZyb20gJy4uL0NvbGxhcHNlVG9nZ2xlJztcblxuY29uc3QgTUlOX1RJTUVfUkFOR0VfU1RFUF9TID0gMTA7IC8vIDEwIHNlY29uZHNcblxuY29uc3QgZm9yVmFsaWRhdGlvbk9wdGlvbnM6IFJlZ2lzdGVyT3B0aW9ucyA9IHtcbiAgcmVxdWlyZWQ6IHtcbiAgICB2YWx1ZTogdHJ1ZSxcbiAgICBtZXNzYWdlOiAnUmVxdWlyZWQuJyxcbiAgfSxcbiAgcGF0dGVybjogZHVyYXRpb25WYWxpZGF0aW9uUGF0dGVybixcbn07XG5cbmNvbnN0IGV2YWx1YXRlRXZlcnlWYWxpZGF0aW9uT3B0aW9uczogUmVnaXN0ZXJPcHRpb25zID0ge1xuICByZXF1aXJlZDoge1xuICAgIHZhbHVlOiB0cnVlLFxuICAgIG1lc3NhZ2U6ICdSZXF1aXJlZC4nLFxuICB9LFxuICBwYXR0ZXJuOiBwb3NpdGl2ZUR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4sXG4gIHZhbGlkYXRlOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKGR1cmF0aW9uKS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRpZmYgPSBkdXJhdGlvblRvTWlsbGlzZWNvbmRzKGR1cmF0aW9uKTtcbiAgICAgIGlmIChkaWZmIDwgTUlOX1RJTUVfUkFOR0VfU1RFUF9TICogMTAwMCkge1xuICAgICAgICByZXR1cm4gYENhbm5vdCBiZSBsZXNzIHRoYW4gJHtNSU5fVElNRV9SQU5HRV9TVEVQX1N9IHNlY29uZHMuYDtcbiAgICAgIH1cbiAgICAgIGlmIChkaWZmICUgKE1JTl9USU1FX1JBTkdFX1NURVBfUyAqIDEwMDApICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBgTXVzdCBiZSBhIG11bHRpcGxlIG9mICR7TUlOX1RJTUVfUkFOR0VfU1RFUF9TfSBzZWNvbmRzLmA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEdyYWZhbmFDb25kaXRpb25zU3RlcDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3Nob3dFcnJvckhhbmRsaW5nLCBzZXRTaG93RXJyb3JIYW5kbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcblxuICBjb25zdCBldmFsdWF0ZUV2ZXJ5SWQgPSAnZXZhbC1ldmVyeS1pbnB1dCc7XG4gIGNvbnN0IGV2YWx1YXRlRm9ySWQgPSAnZXZhbC1mb3ItaW5wdXQnO1xuXG4gIHJldHVybiAoXG4gICAgPFJ1bGVFZGl0b3JTZWN0aW9uIHN0ZXBObz17M30gdGl0bGU9XCJEZWZpbmUgYWxlcnQgY29uZGl0aW9uc1wiPlxuICAgICAgPENvbmRpdGlvbkZpZWxkIC8+XG4gICAgICA8RmllbGQgbGFiZWw9XCJFdmFsdWF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICAgIDxJbmxpbmVMYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj17ZXZhbHVhdGVFdmVyeUlkfVxuICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgdG9vbHRpcD1cIkhvdyBvZnRlbiB0aGUgYWxlcnQgd2lsbCBiZSBldmFsdWF0ZWQgdG8gc2VlIGlmIGl0IGZpcmVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBFdmFsdWF0ZSBldmVyeVxuICAgICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIkV2YWx1YXRlXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRXZhbHVhdGlvbiBpbnRlcm5hbCBhcHBsaWVzIHRvIGV2ZXJ5IHJ1bGUgd2l0aGluIGEgZ3JvdXAuIEl0IGNhbiBvdmVyd3JpdGUgdGhlIGludGVydmFsIG9mIGFuIGV4aXN0aW5nIGFsZXJ0IHJ1bGUuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9e2V2YWx1YXRlRXZlcnlJZH0gd2lkdGg9ezh9IHsuLi5yZWdpc3RlcignZXZhbHVhdGVFdmVyeScsIGV2YWx1YXRlRXZlcnlWYWxpZGF0aW9uT3B0aW9ucyl9IC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8SW5saW5lTGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9e2V2YWx1YXRlRm9ySWR9XG4gICAgICAgICAgICB3aWR0aD17N31cbiAgICAgICAgICAgIHRvb2x0aXA9J09uY2UgY29uZGl0aW9uIGlzIGJyZWFjaGVkLCBhbGVydCB3aWxsIGdvIGludG8gcGVuZGluZyBzdGF0ZS4gSWYgaXQgaXMgcGVuZGluZyBmb3IgbG9uZ2VyIHRoYW4gdGhlIFwiZm9yXCIgdmFsdWUsIGl0IHdpbGwgYmVjb21lIGEgZmlyaW5nIGFsZXJ0LidcbiAgICAgICAgICA+XG4gICAgICAgICAgICBmb3JcbiAgICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5saW5lRmllbGR9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmV2YWx1YXRlRm9yPy5tZXNzYWdlfVxuICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZXZhbHVhdGVGb3I/Lm1lc3NhZ2V9XG4gICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZUhvcml6b250YWxPdmVyZmxvdz17dHJ1ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9e2V2YWx1YXRlRm9ySWR9IHdpZHRoPXs4fSB7Li4ucmVnaXN0ZXIoJ2V2YWx1YXRlRm9yJywgZm9yVmFsaWRhdGlvbk9wdGlvbnMpfSAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxHcmFmYW5hQ29uZGl0aW9uRXZhbFdhcm5pbmcgLz5cbiAgICAgIDxDb2xsYXBzZVRvZ2dsZVxuICAgICAgICBpc0NvbGxhcHNlZD17IXNob3dFcnJvckhhbmRsaW5nfVxuICAgICAgICBvblRvZ2dsZT17KGNvbGxhcHNlZCkgPT4gc2V0U2hvd0Vycm9ySGFuZGxpbmcoIWNvbGxhcHNlZCl9XG4gICAgICAgIHRleHQ9XCJDb25maWd1cmUgbm8gZGF0YSBhbmQgZXJyb3IgaGFuZGxpbmdcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZVRvZ2dsZX1cbiAgICAgIC8+XG4gICAgICB7c2hvd0Vycm9ySGFuZGxpbmcgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGaWVsZCBodG1sRm9yPVwibm8tZGF0YS1zdGF0ZS1pbnB1dFwiIGxhYmVsPVwiQWxlcnQgc3RhdGUgaWYgbm8gZGF0YSBvciBhbGwgdmFsdWVzIGFyZSBudWxsXCI+XG4gICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyYWZhbmFBbGVydFN0YXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPVwibm8tZGF0YS1zdGF0ZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDJ9XG4gICAgICAgICAgICAgICAgICBpbmNsdWRlTm9EYXRhPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgaW5jbHVkZUVycm9yPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlPy52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbmFtZT1cIm5vRGF0YVN0YXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgaHRtbEZvcj1cImV4ZWMtZXJyLXN0YXRlLWlucHV0XCIgbGFiZWw9XCJBbGVydCBzdGF0ZSBpZiBleGVjdXRpb24gZXJyb3Igb3IgdGltZW91dFwiPlxuICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmFmYW5hQWxlcnRTdGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImV4ZWMtZXJyLXN0YXRlLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs0Mn1cbiAgICAgICAgICAgICAgICAgIGluY2x1ZGVOb0RhdGE9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgaW5jbHVkZUVycm9yPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWU/LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBuYW1lPVwiZXhlY0VyclN0YXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgPFByZXZpZXdSdWxlIC8+XG4gICAgPC9SdWxlRWRpdG9yU2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgaW5saW5lRmllbGQ6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBgLFxuICBmbGV4Um93OiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYCxcbiAgY29sbGFwc2VUb2dnbGU6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygyLCAwLCAyLCAtMSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZmV0Y2hSdWxlclJ1bGVzQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdFdpdGhBZGQgfSBmcm9tICcuL1NlbGVjdFdJdGhBZGQnO1xuaW1wb3J0IHsgRmllbGQsIElucHV0Q29udHJvbCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBjaGVja0ZvclBhdGhTZXBhcmF0b3IgfSBmcm9tICcuL3V0aWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlc1NvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEdyb3VwQW5kTmFtZXNwYWNlRmllbGRzOiBGQzxQcm9wcz4gPSAoeyBydWxlc1NvdXJjZU5hbWUgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgY29udHJvbCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgc2V0VmFsdWUsXG4gIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcblxuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGUpO1xuXG4gIGNvbnN0IFtjdXN0b21Hcm91cCwgc2V0Q3VzdG9tR3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJ1bGVyUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJ1bGVyUnVsZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hSdWxlclJ1bGVzQWN0aW9uKHsgcnVsZXNTb3VyY2VOYW1lIH0pKTtcbiAgfSwgW3J1bGVzU291cmNlTmFtZSwgZGlzcGF0Y2hdKTtcblxuICBjb25zdCBydWxlc0NvbmZpZyA9IHJ1bGVyUmVxdWVzdHNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuXG4gIGNvbnN0IG5hbWVzcGFjZSA9IHdhdGNoKCduYW1lc3BhY2UnKTtcblxuICBjb25zdCBuYW1lc3BhY2VPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0+XG4gICAgICBydWxlc0NvbmZpZyA/IE9iamVjdC5rZXlzKHJ1bGVzQ29uZmlnKS5tYXAoKG5hbWVzcGFjZSkgPT4gKHsgbGFiZWw6IG5hbWVzcGFjZSwgdmFsdWU6IG5hbWVzcGFjZSB9KSkgOiBbXSxcbiAgICBbcnVsZXNDb25maWddXG4gICk7XG5cbiAgY29uc3QgZ3JvdXBPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0+XG4gICAgICAobmFtZXNwYWNlICYmIHJ1bGVzQ29uZmlnPy5bbmFtZXNwYWNlXT8ubWFwKChncm91cCkgPT4gKHsgbGFiZWw6IGdyb3VwLm5hbWUsIHZhbHVlOiBncm91cC5uYW1lIH0pKSkgfHwgW10sXG4gICAgW25hbWVzcGFjZSwgcnVsZXNDb25maWddXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmxleFJvd30+XG4gICAgICA8RmllbGRcbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJuYW1lc3BhY2UtcGlja2VyXCJcbiAgICAgICAgbGFiZWw9XCJOYW1lc3BhY2VcIlxuICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWVzcGFjZT8ubWVzc2FnZX1cbiAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubmFtZXNwYWNlPy5tZXNzYWdlfVxuICAgICAgPlxuICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxTZWxlY3RXaXRoQWRkXG4gICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKCdncm91cCcsICcnKTsgLy9yZXNldCBpZiBuYW1lc3BhY2UgY2hhbmdlc1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DdXN0b21DaGFuZ2U9eyhjdXN0b206IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBjdXN0b20gJiYgc2V0Q3VzdG9tR3JvdXAodHJ1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9wdGlvbnM9e25hbWVzcGFjZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHdpZHRoPXs0Mn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwibmFtZXNwYWNlXCJcbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgIHBhdGhTZXBhcmF0b3I6IGNoZWNrRm9yUGF0aFNlcGFyYXRvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQgZGF0YS10ZXN0aWQ9XCJncm91cC1waWNrZXJcIiBsYWJlbD1cIkdyb3VwXCIgZXJyb3I9e2Vycm9ycy5ncm91cD8ubWVzc2FnZX0gaW52YWxpZD17ISFlcnJvcnMuZ3JvdXA/Lm1lc3NhZ2V9PlxuICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgPFNlbGVjdFdpdGhBZGQgey4uLmZpZWxkfSBvcHRpb25zPXtncm91cE9wdGlvbnN9IHdpZHRoPXs0Mn0gY3VzdG9tPXtjdXN0b21Hcm91cH0gY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJncm91cFwiXG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgICBwYXRoU2VwYXJhdG9yOiBjaGVja0ZvclBhdGhTZXBhcmF0b3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGUgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgIH1cbiAgYCxcbiAgaW5wdXQ6IGNzc2BcbiAgICB3aWR0aDogMzMwcHggIWltcG9ydGFudDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRmllbGRBcnJheSwgSW5wdXQsIElubGluZUxhYmVsLCBMYWJlbCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCBMYWJlbHNGaWVsZDogRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBjb250cm9sLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IGxhYmVscyA9IHdhdGNoKCdsYWJlbHMnKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCBzdHlsZXMud3JhcHBlcil9PlxuICAgICAgPExhYmVsPkN1c3RvbSBMYWJlbHM8L0xhYmVsPlxuICAgICAgPEZpZWxkQXJyYXkgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImxhYmVsc1wiPlxuICAgICAgICB7KHsgZmllbGRzLCBhcHBlbmQsIHJlbW92ZSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgICAgICAgPElubGluZUxhYmVsIHdpZHRoPXsxOH0+TGFiZWxzPC9JbmxpbmVMYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x1bW59PlxuICAgICAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmaWVsZC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3csIHN0eWxlcy5jZW50ZXJBbGlnblJvdyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmxhYmVscz8uW2luZGV4XT8ua2V5Py5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubGFiZWxzPy5baW5kZXhdPy5rZXk/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgbGFiZWxzWyR7aW5kZXh9XS5rZXlgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiAhIWxhYmVsc1tpbmRleF0/LnZhbHVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YGxhYmVsLWtleS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkLmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5saW5lTGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuZXF1YWxTaWdufT49PC9JbmxpbmVMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5sYWJlbHM/LltpbmRleF0/LnZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubGFiZWxzPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGBsYWJlbHNbJHtpbmRleH1dLnZhbHVlYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogISFsYWJlbHNbaW5kZXhdPy5rZXksIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2BsYWJlbC12YWx1ZS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVMYWJlbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlIGxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRMYWJlbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYXBwZW5kKHt9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkIGxhYmVsXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9GaWVsZEFycmF5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwcGVyOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGAsXG4gICAgZmxleENvbHVtbjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYCxcbiAgICBmbGV4Um93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICAgJiArIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICAgICAgfVxuICAgIGAsXG4gICAgZGVsZXRlTGFiZWxCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBgLFxuICAgIGFkZExhYmVsQnV0dG9uOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGAsXG4gICAgY2VudGVyQWxpZ25Sb3c6IGNzc2BcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBgLFxuICAgIGVxdWFsU2lnbjogY3NzYFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICBgLFxuICAgIGxhYmVsSW5wdXQ6IGNzc2BcbiAgICAgIHdpZHRoOiAxODNweDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgICAmICsgJiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgfVxuICAgIGAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbHNGaWVsZDtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdElTTywgR3JhZmFuYVRoZW1lMiwgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgdXNlTW91bnRlZFN0YXRlIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHByZXZpZXdBbGVydFJ1bGUgfSBmcm9tICcuLi8uLi9hcGkvcHJldmlldyc7XG5pbXBvcnQgeyB1c2VBbGVydFF1ZXJpZXNTdGF0dXMgfSBmcm9tICcuLi8uLi9ob29rcy91c2VBbGVydFF1ZXJpZXNTdGF0dXMnO1xuaW1wb3J0IHsgUHJldmlld1J1bGVSZXF1ZXN0LCBQcmV2aWV3UnVsZVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcHJldmlldyc7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUsIFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IFByZXZpZXdSdWxlUmVzdWx0IH0gZnJvbSAnLi9QcmV2aWV3UnVsZVJlc3VsdCc7XG5cbmNvbnN0IGZpZWxkczogQXJyYXk8a2V5b2YgUnVsZUZvcm1WYWx1ZXM+ID0gWyd0eXBlJywgJ2RhdGFTb3VyY2VOYW1lJywgJ2NvbmRpdGlvbicsICdxdWVyaWVzJywgJ2V4cHJlc3Npb24nXTtcblxuZXhwb3J0IGZ1bmN0aW9uIFByZXZpZXdSdWxlKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IFtwcmV2aWV3LCBvblByZXZpZXddID0gdXNlUHJldmlldygpO1xuICBjb25zdCB7IHdhdGNoIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcbiAgY29uc3QgW3R5cGUsIGNvbmRpdGlvbiwgcXVlcmllc10gPSB3YXRjaChbJ3R5cGUnLCAnY29uZGl0aW9uJywgJ3F1ZXJpZXMnXSk7XG4gIGNvbnN0IHsgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgfSA9IHVzZUFsZXJ0UXVlcmllc1N0YXR1cyhxdWVyaWVzKTtcblxuICBpZiAodHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nIHx8IHR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpc1ByZXZpZXdBdmFpbGFibGUgPSBCb29sZWFuKGNvbmRpdGlvbikgJiYgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGU7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICB7YWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgJiYgKFxuICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9eyFpc1ByZXZpZXdBdmFpbGFibGV9IHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uUHJldmlld30+XG4gICAgICAgICAgICBQcmV2aWV3IGFsZXJ0c1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7IWFsbERhdGFTb3VyY2VzQXZhaWxhYmxlICYmIChcbiAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJQcmV2aWV3IGlzIG5vdCBhdmFpbGFibGVcIiBzZXZlcml0eT1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIENhbm5vdCBkaXNwbGF5IHRoZSBxdWVyeSBwcmV2aWV3LiBTb21lIG9mIHRoZSBkYXRhIHNvdXJjZXMgdXNlZCBpbiB0aGUgcXVlcmllcyBhcmUgbm90IGF2YWlsYWJsZS5cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApfVxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8UHJldmlld1J1bGVSZXN1bHQgcHJldmlldz17cHJldmlld30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdXNlUHJldmlldygpOiBbUHJldmlld1J1bGVSZXNwb25zZSB8IHVuZGVmaW5lZCwgKCkgPT4gdm9pZF0ge1xuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZTxQcmV2aWV3UnVsZVJlc3BvbnNlIHwgdW5kZWZpbmVkPigpO1xuICBjb25zdCB7IGdldFZhbHVlcyB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZU1vdW50ZWRTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uUHJldmlldyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBnZXRWYWx1ZXMoZmllbGRzKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gY3JlYXRlUHJldmlld1JlcXVlc3QodmFsdWVzKTtcblxuICAgIHByZXZpZXdBbGVydFJ1bGUocmVxdWVzdClcbiAgICAgIC5waXBlKHRha2VXaGlsZSgocmVzcG9uc2UpID0+ICFpc0NvbXBsZXRlZChyZXNwb25zZSksIHRydWUpKVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFpc01vdW50ZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRQcmV2aWV3KHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICB9LCBbZ2V0VmFsdWVzLCBpc01vdW50ZWRdKTtcblxuICByZXR1cm4gW3ByZXZpZXcsIG9uUHJldmlld107XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByZXZpZXdSZXF1ZXN0KHZhbHVlczogYW55W10pOiBQcmV2aWV3UnVsZVJlcXVlc3Qge1xuICBjb25zdCBbdHlwZSwgZGF0YVNvdXJjZU5hbWUsIGNvbmRpdGlvbiwgcXVlcmllcywgZXhwcmVzc2lvbl0gPSB2YWx1ZXM7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGFTb3VyY2VOYW1lLFxuICAgICAgICBleHByOiBleHByZXNzaW9uLFxuICAgICAgfTtcblxuICAgIGNhc2UgUnVsZUZvcm1UeXBlLmdyYWZhbmE6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBncmFmYW5hX2NvbmRpdGlvbjoge1xuICAgICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgICBkYXRhOiBxdWVyaWVzLFxuICAgICAgICAgIG5vdzogZGF0ZVRpbWVGb3JtYXRJU08oRGF0ZS5ub3coKSksXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQWxlcnQgdHlwZSAke3R5cGV9IG5vdCBzdXBwb3J0ZWQgYnkgcHJldmlldy5gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlZChyZXNwb25zZTogUHJldmlld1J1bGVSZXNwb25zZSk6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKHJlc3BvbnNlLmRhdGEuc3RhdGUpIHtcbiAgICBjYXNlIExvYWRpbmdTdGF0ZS5Eb25lOlxuICAgIGNhc2UgTG9hZGluZ1N0YXRlLkVycm9yOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnh4bH1weDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgQXV0b1NpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuaW1wb3J0IHsgVGFibGVDZWxsRGlzcGxheU1vZGUsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQYW5lbFJlbmRlcmVyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZ1NvdXJjZSwgRmllbGRNYXRjaGVySUQsIEdyYWZhbmFUaGVtZTIsIExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUHJldmlld1J1bGVSZXNwb25zZSB9IGZyb20gJy4uLy4uL3R5cGVzL3ByZXZpZXcnO1xuaW1wb3J0IHsgUnVsZUZvcm1UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IG1lc3NhZ2VGcm9tRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9yZWR1eCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByZXZpZXc6IFByZXZpZXdSdWxlUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUHJldmlld1J1bGVSZXN1bHQocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgcHJldmlldyB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZmllbGRDb25maWc6IEZpZWxkQ29uZmlnU291cmNlID0ge1xuICAgIGRlZmF1bHRzOiB7fSxcbiAgICBvdmVycmlkZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogeyBpZDogRmllbGRNYXRjaGVySUQuYnlOYW1lLCBvcHRpb25zOiAnSW5mbycgfSxcbiAgICAgICAgcHJvcGVydGllczogW3sgaWQ6ICdjdXN0b20uZGlzcGxheU1vZGUnLCB2YWx1ZTogVGFibGVDZWxsRGlzcGxheU1vZGUuSlNPTlZpZXcgfV0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgaWYgKCFwcmV2aWV3KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7IGRhdGEsIHJ1bGVUeXBlIH0gPSBwcmV2aWV3O1xuXG4gIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxzcGFuPkxvYWRpbmcgcHJldmlldy4uLjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge2RhdGEuZXJyb3IgPyBtZXNzYWdlRnJvbUVycm9yKGRhdGEuZXJyb3IpIDogJ0ZhaWxlZCB0byBwcmV2aWV3IGFsZXJ0IHJ1bGUnfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxzcGFuPlxuICAgICAgICBQcmV2aWV3IGJhc2VkIG9uIHRoZSByZXN1bHQgb2YgcnVubmluZyB0aGUgcXVlcnksIGZvciB0aGlzIG1vbWVudC57JyAnfVxuICAgICAgICB7cnVsZVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5ncmFmYW5hID8gJ0NvbmZpZ3VyYXRpb24gZm9yIGBubyBkYXRhYCBhbmQgYGVycm9yIGhhbmRsaW5nYCBpcyBub3QgYXBwbGllZC4nIDogbnVsbH1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgICA8QXV0b1NpemVyPlxuICAgICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke3dpZHRofXB4YCwgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgICA8UGFuZWxSZW5kZXJlclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgcGx1Z2luSWQ9XCJ0YWJsZVwiXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICBmaWVsZENvbmZpZz17ZmllbGRDb25maWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0F1dG9TaXplcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDIpfSAwO1xuICAgIGAsXG4gICAgdGFibGU6IGNzc2BcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgaGVpZ2h0OiAxMzVweDtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDEpfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5LFxuICBnZXREZWZhdWx0UmVsYXRpdmVUaW1lUmFuZ2UsXG4gIEdyYWZhbmFUaGVtZTIsXG4gIExvYWRpbmdTdGF0ZSxcbiAgUGFuZWxEYXRhLFxuICBSZWxhdGl2ZVRpbWVSYW5nZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEJ1dHRvbiwgSG9yaXpvbnRhbEdyb3VwLCBzdHlsZXNGYWN0b3J5IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBRdWVyeVJvd3MgfSBmcm9tICcuL1F1ZXJ5Um93cyc7XG5pbXBvcnQge1xuICBkYXRhU291cmNlIGFzIGV4cHJlc3Npb25EYXRhc291cmNlLFxuICBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL0V4cHJlc3Npb25EYXRhc291cmNlJztcbmltcG9ydCB7IGdldE5leHRSZWZJZENoYXIgfSBmcm9tICdhcHAvY29yZS91dGlscy9xdWVyeSc7XG5pbXBvcnQgeyBkZWZhdWx0Q29uZGl0aW9uIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL3V0aWxzL2V4cHJlc3Npb25UeXBlcyc7XG5pbXBvcnQgeyBFeHByZXNzaW9uUXVlcnlUeXBlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL3R5cGVzJztcbmltcG9ydCB7IEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IHsgQWxlcnRpbmdRdWVyeVJ1bm5lciB9IGZyb20gJy4uLy4uL3N0YXRlL0FsZXJ0aW5nUXVlcnlSdW5uZXInO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlPzogQWxlcnRRdWVyeVtdO1xuICBvbkNoYW5nZTogKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgcGFuZWxEYXRhQnlSZWZJZDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPjtcbn1cbmV4cG9ydCBjbGFzcyBRdWVyeUVkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHByaXZhdGUgcnVubmVyOiBBbGVydGluZ1F1ZXJ5UnVubmVyO1xuICBwcml2YXRlIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgcGFuZWxEYXRhQnlSZWZJZDoge30gfTtcbiAgICB0aGlzLnJ1bm5lciA9IG5ldyBBbGVydGluZ1F1ZXJ5UnVubmVyKCk7XG4gICAgdGhpcy5xdWVyaWVzID0gcHJvcHMudmFsdWUgPz8gW107XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJ1bm5lci5nZXQoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYW5lbERhdGFCeVJlZklkOiBkYXRhIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ydW5uZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgb25SdW5RdWVyaWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcyB9ID0gdGhpcztcbiAgICB0aGlzLnJ1bm5lci5ydW4ocXVlcmllcyk7XG4gIH07XG5cbiAgb25DYW5jZWxRdWVyaWVzID0gKCkgPT4ge1xuICAgIHRoaXMucnVubmVyLmNhbmNlbCgpO1xuICB9O1xuXG4gIG9uQ2hhbmdlUXVlcmllcyA9IChxdWVyaWVzOiBBbGVydFF1ZXJ5W10pID0+IHtcbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UocXVlcmllcyk7XG4gIH07XG5cbiAgb25EdXBsaWNhdGVRdWVyeSA9IChxdWVyeTogQWxlcnRRdWVyeSkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcyB9ID0gdGhpcztcbiAgICB0aGlzLm9uQ2hhbmdlUXVlcmllcyhhZGRRdWVyeShxdWVyaWVzLCBxdWVyeSkpO1xuICB9O1xuXG4gIG9uTmV3QWxlcnRpbmdRdWVyeSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJpZXMgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmYXVsdERhdGFTb3VyY2UgPSBnZXREYXRhc291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncygnZGVmYXVsdCcpO1xuXG4gICAgaWYgKCFkZWZhdWx0RGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2VRdWVyaWVzKFxuICAgICAgYWRkUXVlcnkocXVlcmllcywge1xuICAgICAgICBkYXRhc291cmNlVWlkOiBkZWZhdWx0RGF0YVNvdXJjZS51aWQsXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgcmVmSWQ6ICcnLFxuICAgICAgICAgIGRhdGFzb3VyY2U6IHtcbiAgICAgICAgICAgIHR5cGU6IGRlZmF1bHREYXRhU291cmNlLnR5cGUsXG4gICAgICAgICAgICB1aWQ6IGRlZmF1bHREYXRhU291cmNlLnVpZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIG9uTmV3RXhwcmVzc2lvblF1ZXJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcyB9ID0gdGhpcztcblxuICAgIHRoaXMub25DaGFuZ2VRdWVyaWVzKFxuICAgICAgYWRkUXVlcnkocXVlcmllcywge1xuICAgICAgICBkYXRhc291cmNlVWlkOiBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCxcbiAgICAgICAgbW9kZWw6IGV4cHJlc3Npb25EYXRhc291cmNlLm5ld1F1ZXJ5KHtcbiAgICAgICAgICB0eXBlOiBFeHByZXNzaW9uUXVlcnlUeXBlLmNsYXNzaWMsXG4gICAgICAgICAgY29uZGl0aW9uczogW2RlZmF1bHRDb25kaXRpb25dLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJBZGRRdWVyeVJvdyhzdHlsZXM6IFJldHVyblR5cGU8dHlwZW9mIGdldFN0eWxlcz4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBzcGFjaW5nPVwibWRcIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTmV3QWxlcnRpbmdRdWVyeX1cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMuY29tcG9uZW50cy5RdWVyeVRhYi5hZGRRdWVyeX1cbiAgICAgICAgPlxuICAgICAgICAgIFF1ZXJ5XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB7Y29uZmlnLmV4cHJlc3Npb25zRW5hYmxlZCAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTmV3RXhwcmVzc2lvblF1ZXJ5fVxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5leHByZXNzaW9uQnV0dG9ufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPkV4cHJlc3Npb24mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9XG5cbiAgaXNSdW5uaW5nKCkge1xuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUucGFuZWxEYXRhQnlSZWZJZCkuZmluZCgoZCkgPT4gQm9vbGVhbihkKSk7XG4gICAgcmV0dXJuIGRhdGE/LnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZztcbiAgfVxuXG4gIHJlbmRlclJ1blF1ZXJ5QnV0dG9uKCkge1xuICAgIGNvbnN0IGlzUnVubmluZyA9IHRoaXMuaXNSdW5uaW5nKCk7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKGNvbmZpZy50aGVtZTIpO1xuXG4gICAgaWYgKGlzUnVubmluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ydW5XcmFwcGVyfT5cbiAgICAgICAgICA8QnV0dG9uIGljb249XCJmYSBmYS1zcGlubmVyXCIgdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e3RoaXMub25DYW5jZWxRdWVyaWVzfT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucnVuV3JhcHBlcn0+XG4gICAgICAgIDxCdXR0b24gaWNvbj1cInN5bmNcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vblJ1blF1ZXJpZXN9PlxuICAgICAgICAgIFJ1biBxdWVyaWVzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlID0gW10gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYW5lbERhdGFCeVJlZklkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyhjb25maWcudGhlbWUyKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxRdWVyeVJvd3NcbiAgICAgICAgICBkYXRhPXtwYW5lbERhdGFCeVJlZklkfVxuICAgICAgICAgIHF1ZXJpZXM9e3ZhbHVlfVxuICAgICAgICAgIG9uUXVlcmllc0NoYW5nZT17dGhpcy5vbkNoYW5nZVF1ZXJpZXN9XG4gICAgICAgICAgb25EdXBsaWNhdGVRdWVyeT17dGhpcy5vbkR1cGxpY2F0ZVF1ZXJ5fVxuICAgICAgICAgIG9uUnVuUXVlcmllcz17dGhpcy5vblJ1blF1ZXJpZXN9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlckFkZFF1ZXJ5Um93KHN0eWxlcyl9XG4gICAgICAgIHt0aGlzLnJlbmRlclJ1blF1ZXJ5QnV0dG9uKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGFkZFF1ZXJ5ID0gKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSwgcXVlcnlUb0FkZDogUGljazxBbGVydFF1ZXJ5LCAnbW9kZWwnIHwgJ2RhdGFzb3VyY2VVaWQnPik6IEFsZXJ0UXVlcnlbXSA9PiB7XG4gIGNvbnN0IHJlZklkID0gZ2V0TmV4dFJlZklkQ2hhcihxdWVyaWVzKTtcblxuICBjb25zdCBxdWVyeTogQWxlcnRRdWVyeSA9IHtcbiAgICAuLi5xdWVyeVRvQWRkLFxuICAgIHJlZklkLFxuICAgIHF1ZXJ5VHlwZTogJycsXG4gICAgbW9kZWw6IHtcbiAgICAgIC4uLnF1ZXJ5VG9BZGQubW9kZWwsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIHJlZklkLFxuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lUmFuZ2U6IGRlZmF1bHRUaW1lUmFuZ2UocXVlcnlUb0FkZC5tb2RlbCksXG4gIH07XG5cbiAgcmV0dXJuIFsuLi5xdWVyaWVzLCBxdWVyeV07XG59O1xuXG5jb25zdCBkZWZhdWx0VGltZVJhbmdlID0gKG1vZGVsOiBEYXRhUXVlcnkpOiBSZWxhdGl2ZVRpbWVSYW5nZSB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChpc0V4cHJlc3Npb25RdWVyeShtb2RlbCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gZ2V0RGVmYXVsdFJlbGF0aXZlVGltZVJhbmdlKCk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5wcmltYXJ5fTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueHhsfXB4O1xuICAgIGAsXG4gICAgcnVuV3JhcHBlcjogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGVkaXRvcldyYXBwZXI6IGNzc2BcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gICAgYCxcbiAgICBleHByZXNzaW9uQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJvcFJlc3VsdCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5LFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIFJlbGF0aXZlVGltZVJhbmdlLFxuICBUaHJlc2hvbGRzQ29uZmlnLFxuICBUaHJlc2hvbGRzTW9kZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEVtcHR5UXVlcnlXcmFwcGVyLCBRdWVyeVdyYXBwZXIgfSBmcm9tICcuL1F1ZXJ5V3JhcHBlcic7XG5pbXBvcnQgeyBBbGVydERhdGFRdWVyeSwgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyBpc0V4cHJlc3Npb25RdWVyeSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9ndWFyZHMnO1xuaW1wb3J0IHsgcXVlcmllc1dpdGhVcGRhdGVkUmVmZXJlbmNlcyB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBRdWVyeU9wZXJhdGlvblJvdyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUXVlcnlPcGVyYXRpb25Sb3cvUXVlcnlPcGVyYXRpb25Sb3cnO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvLyBUaGUgcXVlcnkgY29uZmlndXJhdGlvblxuICBxdWVyaWVzOiBBbGVydFF1ZXJ5W107XG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT47XG5cbiAgLy8gUXVlcnkgZWRpdGluZ1xuICBvblF1ZXJpZXNDaGFuZ2U6IChxdWVyaWVzOiBBbGVydFF1ZXJ5W10pID0+IHZvaWQ7XG4gIG9uRHVwbGljYXRlUXVlcnk6IChxdWVyeTogQWxlcnRRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyaWVzOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBkYXRhUGVyUXVlcnk6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT47XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVyeVJvd3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBkYXRhUGVyUXVlcnk6IHt9IH07XG4gIH1cblxuICBvblJlbW92ZVF1ZXJ5ID0gKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uUXVlcmllc0NoYW5nZShcbiAgICAgIHRoaXMucHJvcHMucXVlcmllcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubW9kZWwucmVmSWQgIT09IHF1ZXJ5LnJlZklkO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIG9uQ2hhbmdlVGltZVJhbmdlID0gKHRpbWVSYW5nZTogUmVsYXRpdmVUaW1lUmFuZ2UsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJpZXMsIG9uUXVlcmllc0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvblF1ZXJpZXNDaGFuZ2UoXG4gICAgICBxdWVyaWVzLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIHJlbGF0aXZlVGltZVJhbmdlOiB0aW1lUmFuZ2UsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgb25DaGFuZ2VUaHJlc2hvbGQgPSAodGhyZXNob2xkczogVGhyZXNob2xkc0NvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcywgb25RdWVyaWVzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlZFJlZklkID0gcXVlcmllc1tpbmRleF0ucmVmSWQ7XG5cbiAgICBvblF1ZXJpZXNDaGFuZ2UoXG4gICAgICBxdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICAgICAgaWYgKCFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlcnkubW9kZWwuY29uZGl0aW9ucyAmJiBxdWVyeS5tb2RlbC5jb25kaXRpb25zWzBdLnF1ZXJ5LnBhcmFtc1swXSA9PT0gcmVmZXJlbmNlZFJlZklkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgLi4ucXVlcnkubW9kZWwsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbnM6IHF1ZXJ5Lm1vZGVsLmNvbmRpdGlvbnMubWFwKChjb25kaXRpb24sIGNvbmRpdGlvbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGZpcnN0IGNvbmRpdGlvbiBmb3IgYSBnaXZlbiByZWZJZC5cbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uLnF1ZXJ5LnBhcmFtc1swXSA9PT0gcmVmZXJlbmNlZFJlZklkICYmIGNvbmRpdGlvbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jb25kaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGV2YWx1YXRvcjoge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmRpdGlvbi5ldmFsdWF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbcGFyc2VGbG9hdCh0aHJlc2hvbGRzLnN0ZXBzWzFdLnZhbHVlLnRvUHJlY2lzaW9uKDMpKV0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZGl0aW9uO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgb25DaGFuZ2VEYXRhU291cmNlID0gKHNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcywgb25RdWVyaWVzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdXBkYXRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbUluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvcHlNb2RlbChpdGVtLCBzZXR0aW5ncy51aWQpO1xuICAgIH0pO1xuICAgIG9uUXVlcmllc0NoYW5nZSh1cGRhdGVkUXVlcmllcyk7XG4gIH07XG5cbiAgb25DaGFuZ2VRdWVyeSA9IChxdWVyeTogRGF0YVF1ZXJ5LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzLCBvblF1ZXJpZXNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBmaW5kIHdoYXQgcXVlcmllcyBzdGlsbCBoYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBvbGQgbmFtZVxuICAgIGNvbnN0IHByZXZpb3VzUmVmSWQgPSBxdWVyaWVzW2luZGV4XS5yZWZJZDtcbiAgICBjb25zdCBuZXdSZWZJZCA9IHF1ZXJ5LnJlZklkO1xuXG4gICAgb25RdWVyaWVzQ2hhbmdlKFxuICAgICAgcXVlcmllc1dpdGhVcGRhdGVkUmVmZXJlbmNlcyhxdWVyaWVzLCBwcmV2aW91c1JlZklkLCBuZXdSZWZJZCkubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICByZWZJZDogcXVlcnkucmVmSWQsXG4gICAgICAgICAgcXVlcnlUeXBlOiBpdGVtLm1vZGVsLnF1ZXJ5VHlwZSA/PyAnJyxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgLi4uaXRlbS5tb2RlbCxcbiAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgZGF0YXNvdXJjZTogcXVlcnkuZGF0YXNvdXJjZSEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBvbkRyYWdFbmQgPSAocmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzLCBvblF1ZXJpZXNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRlc3RpbmF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHJlc3VsdC5zb3VyY2UuaW5kZXg7XG4gICAgY29uc3QgZW5kSW5kZXggPSByZXN1bHQuZGVzdGluYXRpb24uaW5kZXg7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IGVuZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlID0gQXJyYXkuZnJvbShxdWVyaWVzKTtcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSB1cGRhdGUuc3BsaWNlKHN0YXJ0SW5kZXgsIDEpO1xuICAgIHVwZGF0ZS5zcGxpY2UoZW5kSW5kZXgsIDAsIHJlbW92ZWQpO1xuICAgIG9uUXVlcmllc0NoYW5nZSh1cGRhdGUpO1xuICB9O1xuXG4gIG9uRHVwbGljYXRlUXVlcnkgPSAocXVlcnk6IERhdGFRdWVyeSwgc291cmNlOiBBbGVydFF1ZXJ5KTogdm9pZCA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkR1cGxpY2F0ZVF1ZXJ5KHtcbiAgICAgIC4uLnNvdXJjZSxcbiAgICAgIG1vZGVsOiBxdWVyeSxcbiAgICB9KTtcbiAgfTtcblxuICBnZXREYXRhU291cmNlU2V0dGluZ3MgPSAocXVlcnk6IEFsZXJ0UXVlcnkpOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgcmV0dXJuIGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpO1xuICB9O1xuXG4gIGdldFRocmVzaG9sZHNGb3JRdWVyaWVzID0gKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSk6IFJlY29yZDxzdHJpbmcsIFRocmVzaG9sZHNDb25maWc+ID0+IHtcbiAgICBjb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIFRocmVzaG9sZHNDb25maWc+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHF1ZXJ5IG9mIHF1ZXJpZXMpIHtcbiAgICAgIGlmICghaXNFeHByZXNzaW9uUXVlcnkocXVlcnkubW9kZWwpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocXVlcnkubW9kZWwuY29uZGl0aW9ucykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHF1ZXJ5Lm1vZGVsLmNvbmRpdGlvbnMuZm9yRWFjaCgoY29uZGl0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IGNvbmRpdGlvbi5ldmFsdWF0b3IucGFyYW1zWzBdO1xuICAgICAgICBjb25zdCByZWZJZCA9IGNvbmRpdGlvbi5xdWVyeS5wYXJhbXNbMF07XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbi5ldmFsdWF0b3IudHlwZSA9PT0gJ291dHNpZGVfcmFuZ2UnIHx8IGNvbmRpdGlvbi5ldmFsdWF0b3IudHlwZSA9PT0gJ3dpdGhpbl9yYW5nZScpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWNvcmRbcmVmSWRdKSB7XG4gICAgICAgICAgcmVjb3JkW3JlZklkXSA9IHtcbiAgICAgICAgICAgIG1vZGU6IFRocmVzaG9sZHNNb2RlLkFic29sdXRlLFxuICAgICAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAtSW5maW5pdHksXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbmZpZy50aGVtZTIuY29sb3JzLnN1Y2Nlc3MubWFpbixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZFtyZWZJZF0uc3RlcHMucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IHRocmVzaG9sZCxcbiAgICAgICAgICBjb2xvcjogY29uZmlnLnRoZW1lMi5jb2xvcnMuZXJyb3IubWFpbixcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjb3JkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9uRHVwbGljYXRlUXVlcnksIG9uUnVuUXVlcmllcywgcXVlcmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0aHJlc2hvbGRCeVJlZklkID0gdGhpcy5nZXRUaHJlc2hvbGRzRm9yUXVlcmllcyhxdWVyaWVzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17dGhpcy5vbkRyYWdFbmR9PlxuICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiYWxlcnRpbmctcXVlcmllc1wiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgeyhwcm92aWRlZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9PlxuICAgICAgICAgICAgICAgIHtxdWVyaWVzLm1hcCgocXVlcnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiBQYW5lbERhdGEgPSB0aGlzLnByb3BzLmRhdGE/LltxdWVyeS5yZWZJZF0gPz8ge1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLk5vdFN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgY29uc3QgZHNTZXR0aW5ncyA9IHRoaXMuZ2V0RGF0YVNvdXJjZVNldHRpbmdzKHF1ZXJ5KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCFkc1NldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPERhdGFzb3VyY2VOb3RGb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtxdWVyeS5yZWZJZH0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw9e3F1ZXJ5Lm1vZGVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGVEYXRhc291cmNlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHREYXRhU291cmNlID0gZ2V0RGF0YXNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0RGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VEYXRhU291cmNlKGRlZmF1bHREYXRhU291cmNlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZVF1ZXJ5PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25SZW1vdmVRdWVyeShxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxRdWVyeVdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtxdWVyeS5yZWZJZH0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGRzU2V0dGluZ3M9e2RzU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VRdWVyeT17dGhpcy5vbkNoYW5nZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlUXVlcnk9e3RoaXMub25SZW1vdmVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVyaWVzPXtxdWVyaWVzfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRGF0YVNvdXJjZT17dGhpcy5vbkNoYW5nZURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25EdXBsaWNhdGVRdWVyeT17b25EdXBsaWNhdGVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBvblJ1blF1ZXJpZXM9e29uUnVuUXVlcmllc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRpbWVSYW5nZT17dGhpcy5vbkNoYW5nZVRpbWVSYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGRzPXt0aHJlc2hvbGRCeVJlZklkW3F1ZXJ5LnJlZklkXX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRocmVzaG9sZD17dGhpcy5vbkNoYW5nZVRocmVzaG9sZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHlNb2RlbChpdGVtOiBBbGVydFF1ZXJ5LCB1aWQ6IHN0cmluZyk6IE9taXQ8QWxlcnRRdWVyeSwgJ2RhdGFzb3VyY2UnPiB7XG4gIHJldHVybiB7XG4gICAgLi4uaXRlbSxcbiAgICBtb2RlbDogb21pdChpdGVtLm1vZGVsLCAnZGF0YXNvdXJjZScpLFxuICAgIGRhdGFzb3VyY2VVaWQ6IHVpZCxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIERhdGFzb3VyY2VOb3RGb3VuZFByb3BzIHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbW9kZWw6IEFsZXJ0RGF0YVF1ZXJ5O1xuICBvblVwZGF0ZURhdGFzb3VyY2U6ICgpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlUXVlcnk6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IERhdGFzb3VyY2VOb3RGb3VuZCA9ICh7IGluZGV4LCBvblVwZGF0ZURhdGFzb3VyY2UsIG9uUmVtb3ZlUXVlcnksIG1vZGVsIH06IERhdGFzb3VyY2VOb3RGb3VuZFByb3BzKSA9PiB7XG4gIGNvbnN0IHJlZklkID0gbW9kZWwucmVmSWQ7XG5cbiAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlRGV0YWlscyA9ICgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlscygoc2hvdykgPT4gIXNob3cpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZURhdGFzb3VyY2UgPSAoKSA9PiB7XG4gICAgb25VcGRhdGVEYXRhc291cmNlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlRdWVyeVdyYXBwZXI+XG4gICAgICA8UXVlcnlPcGVyYXRpb25Sb3cgdGl0bGU9e3JlZklkfSBkcmFnZ2FibGUgaW5kZXg9e2luZGV4fSBpZD17cmVmSWR9IGlzT3Blbj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBoZWFkaW5nPVwiVGhpcyBkYXRhc291cmNlIGhhcyBiZWVuIHJlbW92ZWRcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICdUaGUgZGF0YXNvdXJjZSBmb3IgdGhpcyBxdWVyeSB3YXMgbm90IGZvdW5kLCBpdCB3YXMgZWl0aGVyIHJlbW92ZWQgb3IgaXMgbm90IGluc3RhbGxlZCBjb3JyZWN0bHkuJ1xuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkLkZpZ3VyZT5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIiAvPlxuICAgICAgICAgIDwvQ2FyZC5GaWd1cmU+XG4gICAgICAgICAgPENhcmQuQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b24ga2V5PVwidXBkYXRlXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZURhdGFzb3VyY2V9PlxuICAgICAgICAgICAgICBVcGRhdGUgZGF0YXNvdXJjZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGtleT1cInJlbW92ZVwiIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e29uUmVtb3ZlUXVlcnl9PlxuICAgICAgICAgICAgICBSZW1vdmUgcXVlcnlcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ2FyZC5BY3Rpb25zPlxuICAgICAgICAgIDxDYXJkLlNlY29uZGFyeUFjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT1cImRldGFpbHNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEZXRhaWxzfVxuICAgICAgICAgICAgICBpY29uPXtzaG93RGV0YWlscyA/ICdhbmdsZS11cCcgOiAnYW5nbGUtZG93bid9XG4gICAgICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hvdyBkZXRhaWxzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmQuU2Vjb25kYXJ5QWN0aW9ucz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICB7c2hvd0RldGFpbHMgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkobW9kZWwsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9RdWVyeU9wZXJhdGlvblJvdz5cbiAgICA8L0VtcHR5UXVlcnlXcmFwcGVyPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IEZpZWxkLCBJbnB1dENvbnRyb2wgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBFeHByZXNzaW9uRWRpdG9yIH0gZnJvbSAnLi9FeHByZXNzaW9uRWRpdG9yJztcbmltcG9ydCB7IFJ1bGVFZGl0b3JTZWN0aW9uIH0gZnJvbSAnLi9SdWxlRWRpdG9yU2VjdGlvbic7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUsIFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9RdWVyeUVkaXRvcic7XG5cbmV4cG9ydCBjb25zdCBRdWVyeVN0ZXA6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgY29udHJvbCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcbiAgY29uc3QgdHlwZSA9IHdhdGNoKCd0eXBlJyk7XG4gIGNvbnN0IGRhdGFTb3VyY2VOYW1lID0gd2F0Y2goJ2RhdGFTb3VyY2VOYW1lJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8UnVsZUVkaXRvclNlY3Rpb25cbiAgICAgIHN0ZXBObz17Mn1cbiAgICAgIHRpdGxlPXt0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcgPyAnQ3JlYXRlIGEgcXVlcnkgdG8gYmUgcmVjb3JkZWQnIDogJ0NyZWF0ZSBhIHF1ZXJ5IHRvIGJlIGFsZXJ0ZWQgb24nfVxuICAgID5cbiAgICAgIHsodHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nIHx8IHR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nKSAmJiBkYXRhU291cmNlTmFtZSAmJiAoXG4gICAgICAgIDxGaWVsZCBlcnJvcj17ZXJyb3JzLmV4cHJlc3Npb24/Lm1lc3NhZ2V9IGludmFsaWQ9eyEhZXJyb3JzLmV4cHJlc3Npb24/Lm1lc3NhZ2V9PlxuICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgIG5hbWU9XCJleHByZXNzaW9uXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IDxFeHByZXNzaW9uRWRpdG9yIHsuLi5maWVsZH0gZGF0YVNvdXJjZU5hbWU9e2RhdGFTb3VyY2VOYW1lfSAvPn1cbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ0EgdmFsaWQgZXhwcmVzc2lvbiBpcyByZXF1aXJlZCcgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZD5cbiAgICAgICl9XG4gICAgICB7dHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmEgJiYgKFxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5xdWVyaWVzfVxuICAgICAgICAgIGVycm9yPXsoISFlcnJvcnMucXVlcmllcyAmJiAnTXVzdCBwcm92aWRlIGF0IGxlYXN0IG9uZSB2YWxpZCBxdWVyeS4nKSB8fCB1bmRlZmluZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICBuYW1lPVwicXVlcmllc1wiXG4gICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiA8UXVlcnlFZGl0b3Igey4uLmZpZWxkfSAvPn1cbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICB2YWxpZGF0ZTogKHF1ZXJpZXMpID0+IEFycmF5LmlzQXJyYXkocXVlcmllcykgJiYgISFxdWVyaWVzLmxlbmd0aCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZD5cbiAgICAgICl9XG4gICAgPC9SdWxlRWRpdG9yU2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIENvcmVBcHAsXG4gIERhdGFRdWVyeSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIGdldERlZmF1bHRSZWxhdGl2ZVRpbWVSYW5nZSxcbiAgR3JhZmFuYVRoZW1lMixcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIFJlbGF0aXZlVGltZVJhbmdlLFxuICBUaHJlc2hvbGRzQ29uZmlnLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFJlbGF0aXZlVGltZVJhbmdlUGlja2VyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICdhcHAvZmVhdHVyZXMvcXVlcnkvY29tcG9uZW50cy9RdWVyeUVkaXRvclJvdyc7XG5pbXBvcnQgeyBWaXpXcmFwcGVyIH0gZnJvbSAnLi9WaXpXcmFwcGVyJztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBUQUJMRSwgVElNRVNFUklFUyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMgfSBmcm9tICcuLi9QYW5lbFBsdWdpbnNCdXR0b25Hcm91cCc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogUGFuZWxEYXRhO1xuICBxdWVyeTogQWxlcnRRdWVyeTtcbiAgcXVlcmllczogQWxlcnRRdWVyeVtdO1xuICBkc1NldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncztcbiAgb25DaGFuZ2VEYXRhU291cmNlOiAoc2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkNoYW5nZVF1ZXJ5OiAocXVlcnk6IERhdGFRdWVyeSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25DaGFuZ2VUaW1lUmFuZ2U/OiAodGltZVJhbmdlOiBSZWxhdGl2ZVRpbWVSYW5nZSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25SZW1vdmVRdWVyeTogKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IHZvaWQ7XG4gIG9uRHVwbGljYXRlUXVlcnk6IChxdWVyeTogQWxlcnRRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyaWVzOiAoKSA9PiB2b2lkO1xuICBpbmRleDogbnVtYmVyO1xuICB0aHJlc2hvbGRzOiBUaHJlc2hvbGRzQ29uZmlnO1xuICBvbkNoYW5nZVRocmVzaG9sZDogKHRocmVzaG9sZHM6IFRocmVzaG9sZHNDb25maWcsIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeVdyYXBwZXI6IEZDPFByb3BzPiA9ICh7XG4gIGRhdGEsXG4gIGRzU2V0dGluZ3MsXG4gIGluZGV4LFxuICBvbkNoYW5nZURhdGFTb3VyY2UsXG4gIG9uQ2hhbmdlUXVlcnksXG4gIG9uQ2hhbmdlVGltZVJhbmdlLFxuICBvblJ1blF1ZXJpZXMsXG4gIG9uUmVtb3ZlUXVlcnksXG4gIG9uRHVwbGljYXRlUXVlcnksXG4gIHF1ZXJ5LFxuICBxdWVyaWVzLFxuICB0aHJlc2hvbGRzLFxuICBvbkNoYW5nZVRocmVzaG9sZCxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBpc0V4cHJlc3Npb24gPSBpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCk7XG4gIGNvbnN0IFtwbHVnaW5JZCwgY2hhbmdlUGx1Z2luSWRdID0gdXNlU3RhdGU8U3VwcG9ydGVkUGFuZWxQbHVnaW5zPihpc0V4cHJlc3Npb24gPyBUQUJMRSA6IFRJTUVTRVJJRVMpO1xuXG4gIGNvbnN0IHJlbmRlclRpbWVQaWNrZXIgPSAocXVlcnk6IEFsZXJ0UXVlcnksIGluZGV4OiBudW1iZXIpOiBSZWFjdE5vZGUgPT4ge1xuICAgIGlmIChpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkgfHwgIW9uQ2hhbmdlVGltZVJhbmdlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlbGF0aXZlVGltZVJhbmdlUGlja2VyXG4gICAgICAgIHRpbWVSYW5nZT17cXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UgPz8gZ2V0RGVmYXVsdFJlbGF0aXZlVGltZVJhbmdlKCl9XG4gICAgICAgIG9uQ2hhbmdlPXsocmFuZ2UpID0+IG9uQ2hhbmdlVGltZVJhbmdlKHJhbmdlLCBpbmRleCl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPFF1ZXJ5RWRpdG9yUm93PERhdGFRdWVyeT5cbiAgICAgICAgYWxlcnRpbmdcbiAgICAgICAgZGF0YVNvdXJjZT17ZHNTZXR0aW5nc31cbiAgICAgICAgb25DaGFuZ2VEYXRhU291cmNlPXshaXNFeHByZXNzaW9uID8gKHNldHRpbmdzKSA9PiBvbkNoYW5nZURhdGFTb3VyY2Uoc2V0dGluZ3MsIGluZGV4KSA6IHVuZGVmaW5lZH1cbiAgICAgICAgaWQ9e3F1ZXJ5LnJlZklkfVxuICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgIGtleT17cXVlcnkucmVmSWR9XG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIHF1ZXJ5PXtjbG9uZURlZXAocXVlcnkubW9kZWwpfVxuICAgICAgICBvbkNoYW5nZT17KHF1ZXJ5KSA9PiBvbkNoYW5nZVF1ZXJ5KHF1ZXJ5LCBpbmRleCl9XG4gICAgICAgIG9uUmVtb3ZlUXVlcnk9e29uUmVtb3ZlUXVlcnl9XG4gICAgICAgIG9uQWRkUXVlcnk9eygpID0+IG9uRHVwbGljYXRlUXVlcnkoY2xvbmVEZWVwKHF1ZXJ5KSl9XG4gICAgICAgIG9uUnVuUXVlcnk9e29uUnVuUXVlcmllc31cbiAgICAgICAgcXVlcmllcz17cXVlcmllc31cbiAgICAgICAgcmVuZGVySGVhZGVyRXh0cmFzPXsoKSA9PiByZW5kZXJUaW1lUGlja2VyKHF1ZXJ5LCBpbmRleCl9XG4gICAgICAgIGFwcD17Q29yZUFwcC5VbmlmaWVkQWxlcnRpbmd9XG4gICAgICAgIHZpc3VhbGl6YXRpb249e1xuICAgICAgICAgIGRhdGEuc3RhdGUgIT09IExvYWRpbmdTdGF0ZS5Ob3RTdGFydGVkID8gKFxuICAgICAgICAgICAgPFZpeldyYXBwZXJcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgY2hhbmdlUGFuZWw9e2NoYW5nZVBsdWdpbklkfVxuICAgICAgICAgICAgICBjdXJyZW50UGFuZWw9e3BsdWdpbklkfVxuICAgICAgICAgICAgICB0aHJlc2hvbGRzPXt0aHJlc2hvbGRzfVxuICAgICAgICAgICAgICBvblRocmVzaG9sZHNDaGFuZ2U9eyh0aHJlc2hvbGRzKSA9PiBvbkNoYW5nZVRocmVzaG9sZCh0aHJlc2hvbGRzLCBpbmRleCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaGlkZURpc2FibGVRdWVyeT17dHJ1ZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRW1wdHlRdWVyeVdyYXBwZXI6IEZDPHt9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgbGFiZWw6IEFsZXJ0aW5nUXVlcnlXcmFwcGVyO1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoMSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGRTZXQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnVsZUVkaXRvclNlY3Rpb25Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN0ZXBObzogbnVtYmVyO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVFZGl0b3JTZWN0aW9uOiBGQzxSdWxlRWRpdG9yU2VjdGlvblByb3BzPiA9ICh7IHRpdGxlLCBzdGVwTm8sIGNoaWxkcmVuLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN0ZXBOb30+e3N0ZXBOb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxGaWVsZFNldCBsYWJlbD17dGl0bGV9IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkc2V0fT5cbiAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9GaWVsZFNldD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBmaWVsZHNldDogY3NzYFxuICAgIGxlZ2VuZCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIH1cbiAgYCxcbiAgcGFyZW50OiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueGx9O1xuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gICAgfVxuICBgLFxuICBkZXNjcmlwdGlvbjogY3NzYFxuICAgIG1hcmdpbi10b3A6IC0ke3RoZW1lLnNwYWNpbmcoMil9O1xuICBgLFxuICBzdGVwTm86IGNzc2BcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gICAgaGVpZ2h0OiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0Lm1heENvbnRyYXN0fTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLmNhbnZhc307XG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5sZ307XG4gICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICBgLFxuICBjb250ZW50OiBjc3NgXG4gICAgZmxleDogMTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IGR1bXAsIGxvYWQgfSBmcm9tICdqcy15YW1sJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgQXV0b1NpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb2RlRWRpdG9yLCBEcmF3ZXIsIFRhYiwgVGFic0JhciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgdGFicyA9IFt7IGxhYmVsOiAnWWFtbCcsIHZhbHVlOiAneWFtbCcgfV07XG5cbmV4cG9ydCBjb25zdCBSdWxlSW5zcGVjdG9yOiBGQzxQcm9wcz4gPSAoeyBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCd5YW1sJyk7XG4gIGNvbnN0IHsgc2V0VmFsdWUgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGRyYXdlclN0eWxlcyk7XG5cbiAgY29uc3Qgb25BcHBseSA9IChmb3JtVmFsdWVzOiBSdWxlRm9ybVZhbHVlcykgPT4ge1xuICAgIC8vIE5lZWQgdG8gbG9vcCB0aHJvdWdoIGFsbCB2YWx1ZXMgYW5kIHNldCB0aGVtIGluZGl2aWR1YWxseVxuICAgIC8vIFRPRE8gdGhpcyBpcyBub3QgdHlwZS1zYWZlIDooXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZm9ybVZhbHVlcykge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgc2V0VmFsdWUoa2V5LCBmb3JtVmFsdWVzW2tleV0pO1xuICAgIH1cbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyXG4gICAgICB0aXRsZT1cIkluc3BlY3QgQWxlcnQgcnVsZVwiXG4gICAgICBzdWJ0aXRsZT17XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgIDxSdWxlSW5zcGVjdG9yU3VidGl0bGUgc2V0QWN0aXZlVGFiPXtzZXRBY3RpdmVUYWJ9IGFjdGl2ZVRhYj17YWN0aXZlVGFifSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgPlxuICAgICAge2FjdGl2ZVRhYiA9PT0gJ3lhbWwnICYmIDxJbnNwZWN0b3JZYW1sVGFiIG9uU3VibWl0PXtvbkFwcGx5fSAvPn1cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBTdWJ0aXRsZVByb3BzIHtcbiAgYWN0aXZlVGFiOiBzdHJpbmc7XG4gIHNldEFjdGl2ZVRhYjogKHRhYjogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBSdWxlSW5zcGVjdG9yU3VidGl0bGU6IEZDPFN1YnRpdGxlUHJvcHM+ID0gKHsgYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUYWJzQmFyPlxuICAgICAge3RhYnMubWFwKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRhYlxuICAgICAgICAgICAga2V5PXtgJHt0YWIudmFsdWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgIGxhYmVsPXt0YWIubGFiZWx9XG4gICAgICAgICAgICB2YWx1ZT17dGFiLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2VUYWI9eygpID0+IHNldEFjdGl2ZVRhYih0YWIudmFsdWUpfVxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVUYWIgPT09IHRhYi52YWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9UYWJzQmFyPlxuICApO1xufTtcblxuaW50ZXJmYWNlIFlhbWxUYWJQcm9wcyB7XG4gIG9uU3VibWl0OiAobmV3TW9kZWw6IFJ1bGVGb3JtVmFsdWVzKSA9PiB2b2lkO1xufVxuXG5jb25zdCBJbnNwZWN0b3JZYW1sVGFiOiBGQzxZYW1sVGFiUHJvcHM+ID0gKHsgb25TdWJtaXQgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKHlhbWxUYWJTdHlsZSk7XG4gIGNvbnN0IHsgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcbiAgY29uc3QgW2FsZXJ0UnVsZUFzWWFtbCwgc2V0QWxlcnRSdWxlQXNZYW1sXSA9IHVzZVN0YXRlKGR1bXAoZ2V0VmFsdWVzKCkpKTtcblxuICBjb25zdCBvbkFwcGx5ID0gKCkgPT4ge1xuICAgIG9uU3VibWl0KGxvYWQoYWxlcnRSdWxlQXNZYW1sKSBhcyBSdWxlRm9ybVZhbHVlcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHBseUJ1dHRvbn0+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQXBwbHl9PlxuICAgICAgICAgIEFwcGx5XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxBdXRvU2l6ZXIgZGlzYWJsZVdpZHRoPlxuICAgICAgICAgIHsoeyBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIGxhbmd1YWdlPVwieWFtbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXthbGVydFJ1bGVBc1lhbWx9XG4gICAgICAgICAgICAgIG9uQmx1cj17c2V0QWxlcnRSdWxlQXNZYW1sfVxuICAgICAgICAgICAgICBtb25hY29PcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgbWluaW1hcDoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BdXRvU2l6ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IHlhbWxUYWJTdHlsZSA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29udGVudDogY3NzYFxuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbiAgYXBwbHlCdXR0b246IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgYCxcbn0pO1xuXG5jb25zdCBkcmF3ZXJTdHlsZXMgPSAoKSA9PiAoe1xuICBzdWJ0aXRsZTogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5wdXQsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHZhbHVlPzogc3RyaW5nO1xuICBhZGRMYWJlbD86IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgY3VzdG9tPzogYm9vbGVhbjtcbiAgb25DdXN0b21DaGFuZ2U/OiAoY3VzdG9tOiBib29sZWFuKSA9PiB2b2lkO1xuICB3aWR0aD86IG51bWJlcjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAnYXJpYS1sYWJlbCc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RXaXRoQWRkOiBGQzxQcm9wcz4gPSAoe1xuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIG9wdGlvbnMsXG4gIGNsYXNzTmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHdpZHRoLFxuICBjdXN0b20sXG4gIG9uQ3VzdG9tQ2hhbmdlLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICBhZGRMYWJlbCA9ICcrIEFkZCBuZXcnLFxuICAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCxcbn0pID0+IHtcbiAgY29uc3QgW2lzQ3VzdG9tLCBzZXRJc0N1c3RvbV0gPSB1c2VTdGF0ZShjdXN0b20pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1c3RvbSkge1xuICAgICAgc2V0SXNDdXN0b20oY3VzdG9tKTtcbiAgICB9XG4gIH0sIFtjdXN0b21dKTtcblxuICBjb25zdCBfb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9PiBbLi4ub3B0aW9ucywgeyB2YWx1ZTogJ19fYWRkX18nLCBsYWJlbDogYWRkTGFiZWwgfV0sXG4gICAgW29wdGlvbnMsIGFkZExhYmVsXVxuICApO1xuXG4gIGlmIChpc0N1c3RvbSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGF1dG9Gb2N1cz17IWN1c3RvbX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBvcHRpb25zPXtfb3B0aW9uc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsOiBTZWxlY3RhYmxlVmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbD8udmFsdWU7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSAnX19hZGRfXycpIHtcbiAgICAgICAgICAgIHNldElzQ3VzdG9tKHRydWUpO1xuICAgICAgICAgICAgaWYgKG9uQ3VzdG9tQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIG9uQ3VzdG9tQ2hhbmdlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DaGFuZ2UoJycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dG9TaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZ1NvdXJjZSwgR3JhZmFuYVRoZW1lMiwgUGFuZWxEYXRhLCBUaHJlc2hvbGRzQ29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBQYW5lbFJlbmRlcmVyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBQYW5lbENvbnRleHQsIFBhbmVsQ29udGV4dFByb3ZpZGVyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhcGhGaWVsZENvbmZpZywgR3JhcGhUcmVzaG9sZHNTdHlsZU1vZGUgfSBmcm9tICdAZ3JhZmFuYS9zY2hlbWEnO1xuaW1wb3J0IHsgUGFuZWxPcHRpb25zIH0gZnJvbSAnYXBwL3BsdWdpbnMvcGFuZWwvdGFibGUvbW9kZWxzLmdlbic7XG5pbXBvcnQgeyB1c2VWaXpIZWlnaHQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VWaXpIZWlnaHQnO1xuaW1wb3J0IHsgU3VwcG9ydGVkUGFuZWxQbHVnaW5zLCBQYW5lbFBsdWdpbnNCdXR0b25Hcm91cCB9IGZyb20gJy4uL1BhbmVsUGx1Z2luc0J1dHRvbkdyb3VwJztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IFBhbmVsRGF0YTtcbiAgY3VycmVudFBhbmVsOiBTdXBwb3J0ZWRQYW5lbFBsdWdpbnM7XG4gIGNoYW5nZVBhbmVsOiAocGFuZWw6IFN1cHBvcnRlZFBhbmVsUGx1Z2lucykgPT4gdm9pZDtcbiAgdGhyZXNob2xkczogVGhyZXNob2xkc0NvbmZpZztcbiAgb25UaHJlc2hvbGRzQ2hhbmdlOiAodGhyZXNob2xkczogVGhyZXNob2xkc0NvbmZpZykgPT4gdm9pZDtcbn1cblxudHlwZSBQYW5lbEZpZWxkQ29uZmlnID0gRmllbGRDb25maWdTb3VyY2U8R3JhcGhGaWVsZENvbmZpZz47XG5cbmV4cG9ydCBjb25zdCBWaXpXcmFwcGVyOiBGQzxQcm9wcz4gPSAoeyBkYXRhLCBjdXJyZW50UGFuZWwsIGNoYW5nZVBhbmVsLCBvblRocmVzaG9sZHNDaGFuZ2UsIHRocmVzaG9sZHMgfSkgPT4ge1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZTxQYW5lbE9wdGlvbnM+KHtcbiAgICBmcmFtZUluZGV4OiAwLFxuICAgIHNob3dIZWFkZXI6IHRydWUsXG4gIH0pO1xuICBjb25zdCB2aXpIZWlnaHQgPSB1c2VWaXpIZWlnaHQoZGF0YSwgY3VycmVudFBhbmVsLCBvcHRpb25zLmZyYW1lSW5kZXgpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyh2aXpIZWlnaHQpKTtcblxuICBjb25zdCBbZmllbGRDb25maWcsIHNldEZpZWxkQ29uZmlnXSA9IHVzZVN0YXRlPFBhbmVsRmllbGRDb25maWc+KGRlZmF1bHRGaWVsZENvbmZpZyh0aHJlc2hvbGRzLCBkYXRhKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWVsZENvbmZpZygoZmllbGRDb25maWcpID0+ICh7XG4gICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIC4uLmZpZWxkQ29uZmlnLmRlZmF1bHRzLFxuICAgICAgICB0aHJlc2hvbGRzOiB0aHJlc2hvbGRzLFxuICAgICAgICB1bml0OiBkZWZhdWx0VW5pdChkYXRhKSxcbiAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgLi4uZmllbGRDb25maWcuZGVmYXVsdHMuY3VzdG9tLFxuICAgICAgICAgIHRocmVzaG9sZHNTdHlsZToge1xuICAgICAgICAgICAgbW9kZTogR3JhcGhUcmVzaG9sZHNTdHlsZU1vZGUuTGluZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSk7XG4gIH0sIFt0aHJlc2hvbGRzLCBzZXRGaWVsZENvbmZpZywgZGF0YV0pO1xuXG4gIGNvbnN0IGNvbnRleHQ6IFBhbmVsQ29udGV4dCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGV2ZW50QnVzOiBhcHBFdmVudHMsXG4gICAgICBjYW5FZGl0VGhyZXNob2xkczogdHJ1ZSxcbiAgICAgIG9uVGhyZXNob2xkc0NoYW5nZTogb25UaHJlc2hvbGRzQ2hhbmdlLFxuICAgIH0pLFxuICAgIFtvblRocmVzaG9sZHNDaGFuZ2VdXG4gICk7XG5cbiAgaWYgKCFvcHRpb25zIHx8ICFkYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cbiAgICAgICAgPFBhbmVsUGx1Z2luc0J1dHRvbkdyb3VwIG9uQ2hhbmdlPXtjaGFuZ2VQYW5lbH0gdmFsdWU9e2N1cnJlbnRQYW5lbH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEF1dG9TaXplcj5cbiAgICAgICAgeyh7IHdpZHRoIH0pID0+IHtcbiAgICAgICAgICBpZiAod2lkdGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAke3ZpekhlaWdodH1weGAsIHdpZHRoOiBgJHt3aWR0aH1weGAgfX0+XG4gICAgICAgICAgICAgIDxQYW5lbENvbnRleHRQcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICAgICAgICAgICAgPFBhbmVsUmVuZGVyZXJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17dml6SGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgIHBsdWdpbklkPXtjdXJyZW50UGFuZWx9XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZT17c2V0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICBmaWVsZENvbmZpZz17ZmllbGRDb25maWd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9QYW5lbENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0F1dG9TaXplcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh2aXNIZWlnaHQ6IG51bWJlcikgPT4gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGhlaWdodDogJHt2aXNIZWlnaHQgKyB0aGVtZS5zcGFjaW5nLmdyaWRTaXplICogNH1weDtcbiAgYCxcbiAgYnV0dG9uR3JvdXA6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGAsXG59KTtcblxuZnVuY3Rpb24gZGVmYXVsdFVuaXQoZGF0YTogUGFuZWxEYXRhKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGRhdGEuc2VyaWVzWzBdPy5maWVsZHMuZmluZCgoZmllbGQpID0+IGZpZWxkLnR5cGUgPT09ICdudW1iZXInKT8uY29uZmlnLnVuaXQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRGaWVsZENvbmZpZyh0aHJlc2hvbGRzOiBUaHJlc2hvbGRzQ29uZmlnLCBkYXRhOiBQYW5lbERhdGEpOiBQYW5lbEZpZWxkQ29uZmlnIHtcbiAgaWYgKCF0aHJlc2hvbGRzKSB7XG4gICAgcmV0dXJuIHsgZGVmYXVsdHM6IHt9LCBvdmVycmlkZXM6IFtdIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICB0aHJlc2hvbGRzOiB0aHJlc2hvbGRzLFxuICAgICAgdW5pdDogZGVmYXVsdFVuaXQoZGF0YSksXG4gICAgICBjdXN0b206IHtcbiAgICAgICAgdGhyZXNob2xkc1N0eWxlOiB7XG4gICAgICAgICAgbW9kZTogR3JhcGhUcmVzaG9sZHNTdHlsZU1vZGUuTGluZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvdmVycmlkZXM6IFtdLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbn07XG5cbmNvbnN0IERpc2FibGVkVG9vbHRpcDogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHZpc2libGUgPSBmYWxzZSB9KSA9PiB7XG4gIGlmICghdmlzaWJsZSkge1xuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUb29sdGlwIGNvbnRlbnQ9XCJZb3UgZG8gbm90IGFwcGVhciB0byBoYXZlIGFueSBjb21wYXRpYmxlIGRhdGFzb3VyY2VzLlwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9Ub29sdGlwPlxuICApO1xufTtcblxuZXhwb3J0IHsgRGlzYWJsZWRUb29sdGlwIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSdWxlVHlwZSwgU2hhcmVkUHJvcHMgfSBmcm9tICcuL1J1bGVUeXBlJztcbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmNvbnN0IEdyYWZhbmFNYW5hZ2VkUnVsZVR5cGU6IEZDPFNoYXJlZFByb3BzPiA9ICh7IHNlbGVjdGVkID0gZmFsc2UsIGRpc2FibGVkLCBvbkNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UnVsZVR5cGVcbiAgICAgIG5hbWU9XCJHcmFmYW5hIG1hbmFnZWQgYWxlcnRcIlxuICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBTdXBwb3J0cyBtdWx0aXBsZSBkYXRhIHNvdXJjZXMgb2YgYW55IGtpbmQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgVHJhbnNmb3JtIGRhdGEgd2l0aCBleHByZXNzaW9ucy5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgfVxuICAgICAgaW1hZ2U9XCIvcHVibGljL2ltZy9ncmFmYW5hX2ljb24uc3ZnXCJcbiAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIHZhbHVlPXtSdWxlRm9ybVR5cGUuZ3JhZmFuYX1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEdyYWZhbmFNYW5hZ2VkUnVsZVR5cGUgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJ1bGVUeXBlLCBTaGFyZWRQcm9wcyB9IGZyb20gJy4vUnVsZVR5cGUnO1xuaW1wb3J0IHsgRGlzYWJsZWRUb29sdGlwIH0gZnJvbSAnLi9EaXNhYmxlZFRvb2x0aXAnO1xuaW1wb3J0IHsgUnVsZUZvcm1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgU2hhcmVkUHJvcHMge1xuICBvbkNsaWNrOiAodmFsdWU6IFJ1bGVGb3JtVHlwZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgTWltaXJGbGF2b3JlZFR5cGU6IEZDPFByb3BzPiA9ICh7IHNlbGVjdGVkID0gZmFsc2UsIGRpc2FibGVkID0gZmFsc2UsIG9uQ2xpY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEaXNhYmxlZFRvb2x0aXAgdmlzaWJsZT17ZGlzYWJsZWR9PlxuICAgICAgPFJ1bGVUeXBlXG4gICAgICAgIG5hbWU9XCJNaW1pciBvciBMb2tpIGFsZXJ0XCJcbiAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgVXNlIGEgTWltaXIsIExva2kgb3IgQ29ydGV4IGRhdGFzb3VyY2UuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgICBpbWFnZT1cIi9wdWJsaWMvaW1nL2FsZXJ0aW5nL21pbWlyX2xvZ28uc3ZnXCJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHZhbHVlPXtSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZ31cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIC8+XG4gICAgPC9EaXNhYmxlZFRvb2x0aXA+XG4gICk7XG59O1xuXG5leHBvcnQgeyBNaW1pckZsYXZvcmVkVHlwZSB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUnVsZVR5cGUsIFNoYXJlZFByb3BzIH0gZnJvbSAnLi9SdWxlVHlwZSc7XG5pbXBvcnQgeyBEaXNhYmxlZFRvb2x0aXAgfSBmcm9tICcuL0Rpc2FibGVkVG9vbHRpcCc7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5jb25zdCBSZWNvcmRpbmdSdWxlVHlwZTogRkM8U2hhcmVkUHJvcHM+ID0gKHsgc2VsZWN0ZWQgPSBmYWxzZSwgZGlzYWJsZWQgPSBmYWxzZSwgb25DbGljayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPERpc2FibGVkVG9vbHRpcCB2aXNpYmxlPXtkaXNhYmxlZH0+XG4gICAgICA8UnVsZVR5cGVcbiAgICAgICAgbmFtZT1cIk1pbWlyIG9yIExva2kgcmVjb3JkaW5nIHJ1bGVcIlxuICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBQcmVjb21wdXRlIGV4cHJlc3Npb25zLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBTaG91bGQgYmUgY29tYmluZWQgd2l0aCBhbiBhbGVydCBydWxlLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgICBpbWFnZT1cIi9wdWJsaWMvaW1nL2FsZXJ0aW5nL21pbWlyX2xvZ29fcmVjb3JkaW5nLnN2Z1wiXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICB2YWx1ZT17UnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgLz5cbiAgICA8L0Rpc2FibGVkVG9vbHRpcD5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFJlY29yZGluZ1J1bGVUeXBlIH07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IENhcmQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFNoYXJlZFByb3BzIHtcbiAgaW1hZ2U6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogUmVhY3ROb2RlO1xuICB2YWx1ZTogUnVsZUZvcm1UeXBlO1xufVxuXG4vLyB0aGVzZSBwcm9wZXJ0aWVzIGFyZSBzaGFyZWQgYmV0d2VlbiBhbGwgUnVsZSBUeXBlc1xuZXhwb3J0IGludGVyZmFjZSBTaGFyZWRQcm9wcyB7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiAodmFsdWU6IFJ1bGVGb3JtVHlwZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgUnVsZVR5cGU6IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBpbWFnZSwgc2VsZWN0ZWQgPSBmYWxzZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkID0gZmFsc2UgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgY2FyZFN0eWxlcyA9IGN4KHtcbiAgICBbc3R5bGVzLndyYXBwZXJdOiB0cnVlLFxuICAgIFtzdHlsZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NhcmRTdHlsZXN9IGlzU2VsZWN0ZWQ9e3NlbGVjdGVkfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZhbHVlKX0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgIDxDYXJkLkZpZ3VyZT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgPC9DYXJkLkZpZ3VyZT5cbiAgICAgIDxDYXJkLkhlYWRpbmc+e25hbWV9PC9DYXJkLkhlYWRpbmc+XG4gICAgICA8Q2FyZC5EZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgIHdpZHRoOiAzODBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGAsXG4gIGRpc2FibGVkOiBjc3NgXG4gICAgb3BhY2l0eTogMC41O1xuICBgLFxufSk7XG5cbmV4cG9ydCB7IFJ1bGVUeXBlIH07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEvc3JjJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJ1bGVzU291cmNlc1dpdGhSdWxlciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVJ1bGVTb3VyY2VzV2l0aFJ1bGVyJztcbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5pbXBvcnQgeyBHcmFmYW5hTWFuYWdlZFJ1bGVUeXBlIH0gZnJvbSAnLi9HcmFmYW5hTWFuYWdlZEFsZXJ0JztcbmltcG9ydCB7IE1pbWlyRmxhdm9yZWRUeXBlIH0gZnJvbSAnLi9NaW1pck9yTG9raUFsZXJ0JztcbmltcG9ydCB7IFJlY29yZGluZ1J1bGVUeXBlIH0gZnJvbSAnLi9NaW1pck9yTG9raVJlY29yZGluZ1J1bGUnO1xuXG5pbnRlcmZhY2UgUnVsZVR5cGVQaWNrZXJQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IFJ1bGVGb3JtVHlwZSkgPT4gdm9pZDtcbiAgc2VsZWN0ZWQ6IFJ1bGVGb3JtVHlwZTtcbiAgZW5hYmxlZFR5cGVzOiBSdWxlRm9ybVR5cGVbXTtcbn1cblxuY29uc3QgUnVsZVR5cGVQaWNrZXI6IEZDPFJ1bGVUeXBlUGlja2VyUHJvcHM+ID0gKHsgc2VsZWN0ZWQsIG9uQ2hhbmdlLCBlbmFibGVkVHlwZXMgfSkgPT4ge1xuICBjb25zdCBydWxlc1NvdXJjZXNXaXRoUnVsZXIgPSB1c2VSdWxlc1NvdXJjZXNXaXRoUnVsZXIoKTtcbiAgY29uc3QgaGFzTG90ZXhEYXRhc291cmNlcyA9ICFpc0VtcHR5KHJ1bGVzU291cmNlc1dpdGhSdWxlcik7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBnYXA9ezJ9PlxuICAgICAgICB7ZW5hYmxlZFR5cGVzLmluY2x1ZGVzKFJ1bGVGb3JtVHlwZS5ncmFmYW5hKSAmJiAoXG4gICAgICAgICAgPEdyYWZhbmFNYW5hZ2VkUnVsZVR5cGUgc2VsZWN0ZWQ9e3NlbGVjdGVkID09PSBSdWxlRm9ybVR5cGUuZ3JhZmFuYX0gb25DbGljaz17b25DaGFuZ2V9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtlbmFibGVkVHlwZXMuaW5jbHVkZXMoUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmcpICYmIChcbiAgICAgICAgICA8TWltaXJGbGF2b3JlZFR5cGVcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZCA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshaGFzTG90ZXhEYXRhc291cmNlc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7ZW5hYmxlZFR5cGVzLmluY2x1ZGVzKFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZykgJiYgKFxuICAgICAgICAgIDxSZWNvcmRpbmdSdWxlVHlwZVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshaGFzTG90ZXhEYXRhc291cmNlc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9TdGFjaz5cbiAgICAgIHtlbmFibGVkVHlwZXMuaW5jbHVkZXMoUnVsZUZvcm1UeXBlLmdyYWZhbmEpICYmIChcbiAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17c3R5bGVzLm1ldGF9PlxuICAgICAgICAgIFNlbGVjdCAmbGRxdW87R3JhZmFuYSBtYW5hZ2VkJnJkcXVvOyB1bmxlc3MgeW91IGhhdmUgYSBNaW1pciwgTG9raSBvciBDb3J0ZXggZGF0YSBzb3VyY2Ugd2l0aCB0aGUgUnVsZXIgQVBJXG4gICAgICAgICAgZW5hYmxlZC5cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIG1ldGE6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5kaXNhYmxlZH07XG4gIGAsXG59KTtcblxuZXhwb3J0IHsgUnVsZVR5cGVQaWNrZXIgfTtcbiIsImltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCB7IFZhbGlkYXRlUmVzdWx0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJpZXNXaXRoVXBkYXRlZFJlZmVyZW5jZXMoXG4gIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSxcbiAgcHJldmlvdXNSZWZJZDogc3RyaW5nLFxuICBuZXdSZWZJZDogc3RyaW5nXG4pOiBBbGVydFF1ZXJ5W10ge1xuICByZXR1cm4gcXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgaWYgKHByZXZpb3VzUmVmSWQgPT09IG5ld1JlZklkKSB7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpc01hdGhFeHByZXNzaW9uID0gcXVlcnkubW9kZWwudHlwZSA9PT0gJ21hdGgnO1xuICAgIGNvbnN0IGlzUmVkdWNlRXhwcmVzc2lvbiA9IHF1ZXJ5Lm1vZGVsLnR5cGUgPT09ICdyZWR1Y2UnO1xuICAgIGNvbnN0IGlzUmVzYW1wbGVFeHByZXNzaW9uID0gcXVlcnkubW9kZWwudHlwZSA9PT0gJ3Jlc2FtcGxlJztcbiAgICBjb25zdCBpc0NsYXNzaWNFeHByZXNzaW9uID0gcXVlcnkubW9kZWwudHlwZSA9PT0gJ2NsYXNzaWNfY29uZGl0aW9ucyc7XG5cbiAgICBpZiAoaXNNYXRoRXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgLi4ucXVlcnkubW9kZWwsXG4gICAgICAgICAgZXhwcmVzc2lvbjogdXBkYXRlTWF0aEV4cHJlc3Npb25SZWZzKHF1ZXJ5Lm1vZGVsLmV4cHJlc3Npb24gPz8gJycsIHByZXZpb3VzUmVmSWQsIG5ld1JlZklkKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzUmVzYW1wbGVFeHByZXNzaW9uIHx8IGlzUmVkdWNlRXhwcmVzc2lvbikge1xuICAgICAgY29uc3QgaXNSZWZlcmVuY2luZyA9IHF1ZXJ5Lm1vZGVsLmV4cHJlc3Npb24gPT09IHByZXZpb3VzUmVmSWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIC4uLnF1ZXJ5Lm1vZGVsLFxuICAgICAgICAgIGV4cHJlc3Npb246IGlzUmVmZXJlbmNpbmcgPyBuZXdSZWZJZCA6IHF1ZXJ5Lm1vZGVsLmV4cHJlc3Npb24sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc0NsYXNzaWNFeHByZXNzaW9uKSB7XG4gICAgICBjb25zdCBjb25kaXRpb25zID0gcXVlcnkubW9kZWwuY29uZGl0aW9ucz8ubWFwKChjb25kaXRpb24pID0+ICh7XG4gICAgICAgIC4uLmNvbmRpdGlvbixcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAuLi5jb25kaXRpb24ucXVlcnksXG4gICAgICAgICAgcGFyYW1zOiBjb25kaXRpb24ucXVlcnkucGFyYW1zLm1hcCgocGFyYW06IHN0cmluZykgPT4gKHBhcmFtID09PSBwcmV2aW91c1JlZklkID8gbmV3UmVmSWQgOiBwYXJhbSkpLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4geyAuLi5xdWVyeSwgbW9kZWw6IHsgLi4ucXVlcnkubW9kZWwsIGNvbmRpdGlvbnMgfSB9O1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNYXRoRXhwcmVzc2lvblJlZnMoZXhwcmVzc2lvbjogc3RyaW5nLCBwcmV2aW91c1JlZklkOiBzdHJpbmcsIG5ld1JlZklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBvbGRFeHByZXNzaW9uID0gbmV3IFJlZ0V4cCgnKFxcXFwkJyArIHByZXZpb3VzUmVmSWQgKyAnXFxcXGIpfChcXFxcJHsnICsgcHJldmlvdXNSZWZJZCArICd9KScsICdnbScpO1xuICBjb25zdCBuZXdFeHByZXNzaW9uID0gJyR7JyArIG5ld1JlZklkICsgJ30nO1xuXG4gIHJldHVybiBleHByZXNzaW9uLnJlcGxhY2Uob2xkRXhwcmVzc2lvbiwgbmV3RXhwcmVzc2lvbik7XG59XG5cbi8vIHNvbWUgZ2F0ZXdheXMgKGxpa2UgSXN0aW8pIHdpbGwgZGVjb2RlIFwiL1wiIGFuZCBcIlxcXCIgY2hhcmFjdGVycyDigJMgdGhpcyB3aWxsIGNhdXNlIDQwNCBlcnJvcnMgZm9yIGFueSBBUEkgY2FsbFxuLy8gdGhhdCBpbmNsdWRlcyB0aGVzZSB2YWx1ZXMgaW4gdGhlIFVSTCAoaWUuIC9teS9wYXRoJTJmdG8vcmVzb3VyY2UgLT4gL215L3BhdGgvdG8vcmVzb3VyY2UpXG4vL1xuLy8gc2VlIGh0dHBzOi8vaXN0aW8uaW8vbGF0ZXN0L2RvY3Mvb3BzL2Jlc3QtcHJhY3RpY2VzL3NlY3VyaXR5LyNjdXN0b21pemUteW91ci1zeXN0ZW0tb24tcGF0aC1ub3JtYWxpemF0aW9uXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGb3JQYXRoU2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcpOiBWYWxpZGF0ZVJlc3VsdCB7XG4gIGNvbnN0IGNvbnRhaW5zUGF0aFNlcGFyYXRvciA9IHZhbHVlLmluY2x1ZGVzKCcvJykgfHwgdmFsdWUuaW5jbHVkZXMoJ1xcXFwnKTtcbiAgaWYgKGNvbnRhaW5zUGF0aFNlcGFyYXRvcikge1xuICAgIHJldHVybiAnQ2Fubm90IGNvbnRhaW4gXCIvXCIgb3IgXCJcXFxcXCIgY2hhcmFjdGVycyc7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0UXVlcmllc1N0YXR1cyhxdWVyaWVzOiBBbGVydFF1ZXJ5W10pIHtcbiAgY29uc3QgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgPSB1c2VNZW1vKFxuICAgICgpID0+IHF1ZXJpZXMuZXZlcnkoKHF1ZXJ5KSA9PiBCb29sZWFuKGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpKSksXG4gICAgW3F1ZXJpZXNdXG4gICk7XG5cbiAgcmV0dXJuIHsgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgfTtcbn1cbiIsImltcG9ydCB7IEZvbGRlckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmZXRjaEZvbGRlcklmTm90RmV0Y2hlZEFjdGlvbiB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuXG5pbnRlcmZhY2UgUmV0dXJuQmFnIHtcbiAgZm9sZGVyPzogRm9sZGVyRFRPO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9sZGVyKHVpZD86IHN0cmluZyk6IFJldHVybkJhZyB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZm9sZGVyUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvbGRlcnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1aWQpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uKHVpZCkpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCB1aWRdKTtcblxuICBpZiAodWlkKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGZvbGRlclJlcXVlc3RzW3VpZF0gfHwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICAgIHJldHVybiB7XG4gICAgICBmb2xkZXI6IHJlcXVlc3QucmVzdWx0LFxuICAgICAgbG9hZGluZzogcmVxdWVzdC5sb2FkaW5nLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IHsgZ2V0UnVsZXNQZXJtaXNzaW9ucyB9IGZyb20gJy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcbmltcG9ydCB7IGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IHVzZUZvbGRlciB9IGZyb20gJy4vdXNlRm9sZGVyJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmludGVyZmFjZSBSZXN1bHRCYWcge1xuICBpc0VkaXRhYmxlPzogYm9vbGVhbjtcbiAgaXNSZW1vdmFibGU/OiBib29sZWFuO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlSXNSdWxlRWRpdGFibGUocnVsZXNTb3VyY2VOYW1lOiBzdHJpbmcsIHJ1bGU/OiBSdWxlclJ1bGVEVE8pOiBSZXN1bHRCYWcge1xuICBjb25zdCBkYXRhU291cmNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXMpO1xuICBjb25zdCBmb2xkZXJVSUQgPSBydWxlICYmIGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlKSA/IHJ1bGUuZ3JhZmFuYV9hbGVydC5uYW1lc3BhY2VfdWlkIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IHJ1bGVQZXJtaXNzaW9uID0gZ2V0UnVsZXNQZXJtaXNzaW9ucyhydWxlc1NvdXJjZU5hbWUpO1xuICBjb25zdCBoYXNFZGl0UGVybWlzc2lvbiA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKHJ1bGVQZXJtaXNzaW9uLnVwZGF0ZSwgY29udGV4dFNydi5pc0VkaXRvcik7XG4gIGNvbnN0IGhhc1JlbW92ZVBlcm1pc3Npb24gPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi5kZWxldGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuXG4gIGNvbnN0IHsgZm9sZGVyLCBsb2FkaW5nIH0gPSB1c2VGb2xkZXIoZm9sZGVyVUlEKTtcblxuICBpZiAoIXJ1bGUpIHtcbiAgICByZXR1cm4geyBpc0VkaXRhYmxlOiBmYWxzZSwgaXNSZW1vdmFibGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZSB9O1xuICB9XG5cbiAgLy8gZ3JhZmFuYSBydWxlcyBjYW4gYmUgZWRpdGVkIGlmIHVzZXIgY2FuIGVkaXQgdGhlIGZvbGRlciB0aGV5J3JlIGluXG4gIGlmIChpc0dyYWZhbmFSdWxlclJ1bGUocnVsZSkpIHtcbiAgICBpZiAoIWZvbGRlclVJRCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgUnVsZSAke3J1bGUuZ3JhZmFuYV9hbGVydC50aXRsZX0gZG9lcyBub3QgaGF2ZSBhIGZvbGRlciB1aWQsIGNhbm5vdCBkZXRlcm1pbmUgaWYgaXQgaXMgZWRpdGFibGUuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRWRpdGFibGU6IGhhc0VkaXRQZXJtaXNzaW9uICYmIGZvbGRlcj8uY2FuU2F2ZSxcbiAgICAgIGlzUmVtb3ZhYmxlOiBoYXNSZW1vdmVQZXJtaXNzaW9uICYmIGZvbGRlcj8uY2FuU2F2ZSxcbiAgICAgIGxvYWRpbmcsXG4gICAgfTtcbiAgfVxuXG4gIC8vIHByb20gcnVsZXMgYXJlIG9ubHkgZWRpdGFibGUgYnkgdXNlcnMgd2l0aCBFZGl0b3Igcm9sZSBhbmQgb25seSBpZiBydWxlcyBzb3VyY2Ugc3VwcG9ydHMgZWRpdGluZ1xuICBjb25zdCBpc1J1bGVyQXZhaWxhYmxlID0gQm9vbGVhbihkYXRhU291cmNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ/LnJ1bGVyQ29uZmlnKTtcbiAgcmV0dXJuIHtcbiAgICBpc0VkaXRhYmxlOiBoYXNFZGl0UGVybWlzc2lvbiAmJiBpc1J1bGVyQXZhaWxhYmxlLFxuICAgIGlzUmVtb3ZhYmxlOiBoYXNSZW1vdmVQZXJtaXNzaW9uICYmIGlzUnVsZXJBdmFpbGFibGUsXG4gICAgbG9hZGluZzogZGF0YVNvdXJjZXNbcnVsZXNTb3VyY2VOYW1lXT8ubG9hZGluZyxcbiAgfTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBQcm9tQmFzZWREYXRhU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZUJ5TmFtZSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJ1bGVzU291cmNlc1dpdGhSdWxlcigpOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nc1tdIHtcbiAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzKTtcblxuICBjb25zdCBkYXRhU291cmNlc1dpdGhSdWxlciA9IE9iamVjdC52YWx1ZXMoZGF0YVNvdXJjZXMpXG4gICAgLm1hcCgoZHMpID0+IGRzLnJlc3VsdClcbiAgICAuZmlsdGVyKChkcyk6IGRzIGlzIFByb21CYXNlZERhdGFTb3VyY2UgPT4gQm9vbGVhbihkcz8ucnVsZXJDb25maWcpKTtcbiAgLy8gdHJ5IGZldGNoaW5nIHJ1bGVzIGZvciBlYWNoIHByb21ldGhldXMgdG8gc2VlIGlmIGl0IGhhcyBydWxlclxuXG4gIHJldHVybiBkYXRhU291cmNlc1dpdGhSdWxlclxuICAgIC5tYXAoKGRzKSA9PiBnZXREYXRhU291cmNlQnlOYW1lKGRzLm5hbWUpKVxuICAgIC5maWx0ZXIoKGRzQ29uZmlnKTogZHNDb25maWcgaXMgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MgPT4gQm9vbGVhbihkc0NvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgUGFuZWxEYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTVEFULCBUSU1FU0VSSUVTIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZpekhlaWdodChkYXRhOiBQYW5lbERhdGEsIHBsdWdpbklkOiBzdHJpbmcsIGZyYW1lSW5kZXg6IG51bWJlcikge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBpZiAocGx1Z2luSWQgPT09IFRJTUVTRVJJRVMgfHwgcGx1Z2luSWQgPT09IFNUQVQgfHwgZGF0YUlzRW1wdHkoZGF0YSkpIHtcbiAgICByZXR1cm4gMjAwO1xuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gZGF0YS5zZXJpZXNbZnJhbWVJbmRleF0uZmllbGRzWzBdLnZhbHVlcy5sZW5ndGg7XG4gIGNvbnN0IHJvd0hlaWdodCA9IHRoZW1lLnNwYWNpbmcuZ3JpZFNpemUgKiA1O1xuXG4gIC8qXG4gICBDYWxjdWxhdGUgaG93IGlmIHdlIGNhbiBtYWtlICB0aGUgdGFibGUgc21hbGxlciB0aGFuIDIwMHB4XG4gICBmb3Igd2hlbiB3ZSBvbmx5IGhhdmUgMS0yIHZhbHVlc1xuICAgVGhlIGV4dHJhIHJvd0hlaWdodCBpcyB0byBhY2NvbW1vZGF0ZSB0aGUgaGVhZGVyLlxuICAqL1xuICBjb25zdCB0YWJsZUhlaWdodCA9IHZhbHVlcyAqIHJvd0hlaWdodCArIHJvd0hlaWdodDtcblxuICByZXR1cm4gdGFibGVIZWlnaHQgPj0gMjAwID8gMjAwIDogdGFibGVIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGRhdGFJc0VtcHR5KGRhdGE6IFBhbmVsRGF0YSkge1xuICByZXR1cm4gIWRhdGEgfHwgIWRhdGEuc2VyaWVzWzBdIHx8ICFkYXRhLnNlcmllc1swXS5maWVsZHNbMF0gfHwgIWRhdGEuc2VyaWVzWzBdLmZpZWxkc1swXS52YWx1ZXM7XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgT3BlcmF0b3JGdW5jdGlvbiwgUmVwbGF5U3ViamVjdCwgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7XG4gIGRhdGFGcmFtZUZyb21KU09OLFxuICBEYXRhRnJhbWVKU09OLFxuICBnZXREZWZhdWx0VGltZVJhbmdlLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgcmFuZ2VVdGlsLFxuICBUaW1lUmFuZ2UsXG4gIHdpdGhMb2FkaW5nSW5kaWNhdG9yLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZldGNoUmVzcG9uc2UsIGdldERhdGFTb3VyY2VTcnYsIHRvRGF0YVF1ZXJ5RXJyb3IgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJhY2tlbmRTcnYsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBwcmVQcm9jZXNzUGFuZWxEYXRhIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL3J1blJlcXVlc3QnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyBnZXRUaW1lUmFuZ2VGb3JFeHByZXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvdGltZVJhbmdlJztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBzZXRTdHJ1Y3R1cmVSZXZpc2lvbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9xdWVyeS9zdGF0ZS9wcm9jZXNzaW5nL3JldmlzaW9uJztcbmltcG9ydCB7IGNhbmNlbE5ldHdvcmtSZXF1ZXN0c09uVW5zdWJzY3JpYmUgfSBmcm9tICdhcHAvZmVhdHVyZXMvcXVlcnkvc3RhdGUvcHJvY2Vzc2luZy9jYW5jZWxlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRpbmdRdWVyeVJlc3VsdCB7XG4gIGZyYW1lczogRGF0YUZyYW1lSlNPTltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0aW5nUXVlcnlSZXNwb25zZSB7XG4gIHJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIEFsZXJ0aW5nUXVlcnlSZXN1bHQ+O1xufVxuZXhwb3J0IGNsYXNzIEFsZXJ0aW5nUXVlcnlSdW5uZXIge1xuICBwcml2YXRlIHN1YmplY3Q6IFJlcGxheVN1YmplY3Q8UmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPj47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uPzogVW5zdWJzY3JpYmFibGU7XG4gIHByaXZhdGUgbGFzdFJlc3VsdDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmRTcnYgPSBnZXRCYWNrZW5kU3J2KCksIHByaXZhdGUgZGF0YVNvdXJjZVNydiA9IGdldERhdGFTb3VyY2VTcnYoKSkge1xuICAgIHRoaXMuc3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICAgIHRoaXMubGFzdFJlc3VsdCA9IHt9O1xuICB9XG5cbiAgZ2V0KCk6IE9ic2VydmFibGU8UmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPj4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBhc3luYyBydW4ocXVlcmllczogQWxlcnRRdWVyeVtdKSB7XG4gICAgaWYgKHF1ZXJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlbXB0eSA9IGluaXRpYWxTdGF0ZShxdWVyaWVzLCBMb2FkaW5nU3RhdGUuRG9uZSk7XG4gICAgICByZXR1cm4gdGhpcy5zdWJqZWN0Lm5leHQoZW1wdHkpO1xuICAgIH1cblxuICAgIC8vIGRvIG5vdCBleGVjdXRlIGlmIG9uZSBtb3JlIG9mIHRoZSBxdWVyaWVzIGFyZSBub3QgcnVubmFibGUsXG4gICAgLy8gZm9yIGV4YW1wbGUgbm90IGNvbXBsZXRlbHkgY29uZmlndXJlZFxuICAgIGZvciAoY29uc3QgcXVlcnkgb2YgcXVlcmllcykge1xuICAgICAgaWYgKCFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICAgICAgY29uc3QgZHMgPSBhd2FpdCB0aGlzLmRhdGFTb3VyY2VTcnYuZ2V0KHF1ZXJ5LmRhdGFzb3VyY2VVaWQpO1xuICAgICAgICBpZiAoZHMuZmlsdGVyUXVlcnkgJiYgIWRzLmZpbHRlclF1ZXJ5KHF1ZXJ5Lm1vZGVsKSkge1xuICAgICAgICAgIGNvbnN0IGVtcHR5ID0gaW5pdGlhbFN0YXRlKHF1ZXJpZXMsIExvYWRpbmdTdGF0ZS5Eb25lKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0Lm5leHQoZW1wdHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBydW5SZXF1ZXN0KHRoaXMuYmFja2VuZFNydiwgcXVlcmllcykuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChkYXRhUGVyUXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFJlc3VsdCA9IGFwcGx5Q2hhbmdlKGRhdGFQZXJRdWVyeSwgKHJlZklkLCBkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmxhc3RSZXN1bHRbcmVmSWRdO1xuICAgICAgICAgIGNvbnN0IHByZVByb2Nlc3NlZCA9IHByZVByb2Nlc3NQYW5lbERhdGEoZGF0YSwgcHJldmlvdXMpO1xuICAgICAgICAgIHJldHVybiBzZXRTdHJ1Y3R1cmVSZXZpc2lvbihwcmVQcm9jZXNzZWQsIHByZXZpb3VzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sYXN0UmVzdWx0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodGhpcy5sYXN0UmVzdWx0KTtcbiAgICAgIH0sXG5cbiAgICAgIGVycm9yOiAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IG1hcEVycm9yVG9QYW5lbERhdGEodGhpcy5sYXN0UmVzdWx0LCBlcnJvcik7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHRoaXMubGFzdFJlc3VsdCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIGxldCByZXF1ZXN0SXNSdW5uaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBuZXh0UmVzdWx0ID0gYXBwbHlDaGFuZ2UodGhpcy5sYXN0UmVzdWx0LCAocmVmSWQsIGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgICAgICByZXF1ZXN0SXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChyZXF1ZXN0SXNSdW5uaW5nKSB7XG4gICAgICB0aGlzLnN1YmplY3QubmV4dChuZXh0UmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YmplY3QpIHtcbiAgICAgIHRoaXMuc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cbn1cblxuY29uc3QgcnVuUmVxdWVzdCA9IChiYWNrZW5kU3J2OiBCYWNrZW5kU3J2LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pOiBPYnNlcnZhYmxlPFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+ID0+IHtcbiAgY29uc3QgaW5pdGlhbCA9IGluaXRpYWxTdGF0ZShxdWVyaWVzLCBMb2FkaW5nU3RhdGUuTG9hZGluZyk7XG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgZGF0YTogeyBkYXRhOiBxdWVyaWVzIH0sXG4gICAgdXJsOiAnL2FwaS92MS9ldmFsJyxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICByZXF1ZXN0SWQ6IHV1aWR2NCgpLFxuICB9O1xuXG4gIHJldHVybiB3aXRoTG9hZGluZ0luZGljYXRvcih7XG4gICAgd2hpbGVMb2FkaW5nOiBpbml0aWFsLFxuICAgIHNvdXJjZTogYmFja2VuZFNydi5mZXRjaDxBbGVydGluZ1F1ZXJ5UmVzcG9uc2U+KHJlcXVlc3QpLnBpcGUoXG4gICAgICBtYXBUb1BhbmVsRGF0YShpbml0aWFsKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiBvZihtYXBFcnJvclRvUGFuZWxEYXRhKGluaXRpYWwsIGVycm9yKSkpLFxuICAgICAgY2FuY2VsTmV0d29ya1JlcXVlc3RzT25VbnN1YnNjcmliZShiYWNrZW5kU3J2LCByZXF1ZXN0LnJlcXVlc3RJZCksXG4gICAgICBzaGFyZSgpXG4gICAgKSxcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAocXVlcmllczogQWxlcnRRdWVyeVtdLCBzdGF0ZTogTG9hZGluZ1N0YXRlKTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9PiB7XG4gIHJldHVybiBxdWVyaWVzLnJlZHVjZSgoZGF0YUJ5UXVlcnk6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4sIHF1ZXJ5KSA9PiB7XG4gICAgZGF0YUJ5UXVlcnlbcXVlcnkucmVmSWRdID0ge1xuICAgICAgc3RhdGUsXG4gICAgICBzZXJpZXM6IFtdLFxuICAgICAgdGltZVJhbmdlOiBnZXRUaW1lUmFuZ2UocXVlcnksIHF1ZXJpZXMpLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGF0YUJ5UXVlcnk7XG4gIH0sIHt9KTtcbn07XG5cbmNvbnN0IGdldFRpbWVSYW5nZSA9IChxdWVyeTogQWxlcnRRdWVyeSwgcXVlcmllczogQWxlcnRRdWVyeVtdKTogVGltZVJhbmdlID0+IHtcbiAgaWYgKGlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKSkge1xuICAgIGNvbnN0IHJlbGF0aXZlID0gZ2V0VGltZVJhbmdlRm9yRXhwcmVzc2lvbihxdWVyeS5tb2RlbCwgcXVlcmllcyk7XG4gICAgcmV0dXJuIHJhbmdlVXRpbC5yZWxhdGl2ZVRvVGltZVJhbmdlKHJlbGF0aXZlKTtcbiAgfVxuXG4gIGlmICghcXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UpIHtcbiAgICBjb25zb2xlLndhcm4oYFF1ZXJ5IHdpdGggcmVmSWQ6ICR7cXVlcnkucmVmSWR9IGRpZCBub3QgaGF2ZSBhbnkgcmVsYXRpdmUgdGltZSByYW5nZSwgdXNpbmcgZGVmYXVsdC5gKTtcbiAgICByZXR1cm4gZ2V0RGVmYXVsdFRpbWVSYW5nZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJhbmdlVXRpbC5yZWxhdGl2ZVRvVGltZVJhbmdlKHF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlKTtcbn07XG5cbmNvbnN0IG1hcFRvUGFuZWxEYXRhID0gKFxuICBkYXRhQnlRdWVyeTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPlxuKTogT3BlcmF0b3JGdW5jdGlvbjxGZXRjaFJlc3BvbnNlPEFsZXJ0aW5nUXVlcnlSZXNwb25zZT4sIFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+ID0+IHtcbiAgcmV0dXJuIG1hcCgocmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IHJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPSB7fTtcblxuICAgIGZvciAoY29uc3QgW3JlZklkLCByZXN1bHRdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEucmVzdWx0cykpIHtcbiAgICAgIHJlc3VsdHNbcmVmSWRdID0ge1xuICAgICAgICB0aW1lUmFuZ2U6IGRhdGFCeVF1ZXJ5W3JlZklkXS50aW1lUmFuZ2UsXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgICAgc2VyaWVzOiByZXN1bHQuZnJhbWVzLm1hcChkYXRhRnJhbWVGcm9tSlNPTiksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9KTtcbn07XG5cbmNvbnN0IG1hcEVycm9yVG9QYW5lbERhdGEgPSAobGFzdFJlc3VsdDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiwgZXJyb3I6IEVycm9yKTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5RXJyb3IgPSB0b0RhdGFRdWVyeUVycm9yKGVycm9yKTtcblxuICByZXR1cm4gYXBwbHlDaGFuZ2UobGFzdFJlc3VsdCwgKHJlZklkLCBkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkVycm9yLFxuICAgICAgZXJyb3I6IHF1ZXJ5RXJyb3IsXG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBhcHBseUNoYW5nZSA9IChcbiAgaW5pdGlhbDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPixcbiAgY2hhbmdlOiAocmVmSWQ6IHN0cmluZywgZGF0YTogUGFuZWxEYXRhKSA9PiBQYW5lbERhdGFcbik6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPT4ge1xuICBjb25zdCBuZXh0UmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+ID0ge307XG5cbiAgZm9yIChjb25zdCBbcmVmSWQsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKGluaXRpYWwpKSB7XG4gICAgbmV4dFJlc3VsdFtyZWZJZF0gPSBjaGFuZ2UocmVmSWQsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIG5leHRSZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgUGFuZWxEYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSB9IGZyb20gJy4vcnVsZS1mb3JtJztcblxuZXhwb3J0IHR5cGUgUHJldmlld1J1bGVSZXF1ZXN0ID0gR3JhZmFuYVByZXZpZXdSdWxlUmVxdWVzdCB8IENsb3VkUHJldmlld1J1bGVSZXF1ZXN0O1xuXG5leHBvcnQgdHlwZSBHcmFmYW5hUHJldmlld1J1bGVSZXF1ZXN0ID0ge1xuICBncmFmYW5hX2NvbmRpdGlvbjoge1xuICAgIGNvbmRpdGlvbjogc3RyaW5nO1xuICAgIGRhdGE6IEFsZXJ0UXVlcnlbXTtcbiAgICBub3c6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIENsb3VkUHJldmlld1J1bGVSZXF1ZXN0ID0ge1xuICBkYXRhU291cmNlTmFtZTogc3RyaW5nO1xuICBleHByOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBQcmV2aWV3UnVsZVJlc3BvbnNlID0ge1xuICBydWxlVHlwZTogUnVsZUZvcm1UeXBlO1xuICBkYXRhOiBQYW5lbERhdGE7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDbG91ZFByZXZpZXdSZXF1ZXN0KHJlcXVlc3Q6IFByZXZpZXdSdWxlUmVxdWVzdCk6IHJlcXVlc3QgaXMgQ2xvdWRQcmV2aWV3UnVsZVJlcXVlc3Qge1xuICByZXR1cm4gJ2V4cHInIGluIHJlcXVlc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0dyYWZhbmFQcmV2aWV3UmVxdWVzdChyZXF1ZXN0OiBQcmV2aWV3UnVsZVJlcXVlc3QpOiByZXF1ZXN0IGlzIEdyYWZhbmFQcmV2aWV3UnVsZVJlcXVlc3Qge1xuICByZXR1cm4gJ2dyYWZhbmFfY29uZGl0aW9uJyBpbiByZXF1ZXN0O1xufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFJ1bGVzQWNjZXNzIH0gZnJvbSAnLi9hY2Nlc3MtY29udHJvbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSdWxlc0FjY2VzcygpIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZ2V0UnVsZXNBY2Nlc3MoKSwgW10pO1xufVxuIiwiaW1wb3J0IHsgUmVsYXRpdmVUaW1lUmFuZ2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IHsgRXhwcmVzc2lvblF1ZXJ5LCBFeHByZXNzaW9uUXVlcnlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzc2lvbnMvdHlwZXMnO1xuXG5jb25zdCBGQUxMX0JBQ0tfVElNRV9SQU5HRSA9IHsgZnJvbTogMjE2MDAsIHRvOiAwIH07XG5cbmV4cG9ydCBjb25zdCBnZXRUaW1lUmFuZ2VGb3JFeHByZXNzaW9uID0gKHF1ZXJ5OiBFeHByZXNzaW9uUXVlcnksIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSk6IFJlbGF0aXZlVGltZVJhbmdlID0+IHtcbiAgY29uc3QgcmVmZXJlbmNlZFJlZklkczogc3RyaW5nW10gfCB1bmRlZmluZWQgPSBnZXRSZWZlcmVuY2VkSWRzKHF1ZXJ5LCBxdWVyaWVzKTtcblxuICBpZiAoIXJlZmVyZW5jZWRSZWZJZHMpIHtcbiAgICByZXR1cm4gRkFMTF9CQUNLX1RJTUVfUkFOR0U7XG4gIH1cblxuICBjb25zdCB7IGZyb20sIHRvIH0gPSBnZXRUaW1lUmFuZ2VzKHJlZmVyZW5jZWRSZWZJZHMsIHF1ZXJpZXMpO1xuXG4gIGlmICghZnJvbS5sZW5ndGggJiYgIXRvLmxlbmd0aCkge1xuICAgIHJldHVybiBGQUxMX0JBQ0tfVElNRV9SQU5HRTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZnJvbTogTWF0aC5tYXgoLi4uZnJvbSksXG4gICAgdG86IE1hdGgubWluKC4uLnRvKSxcbiAgfTtcbn07XG5cbmNvbnN0IGdldFJlZmVyZW5jZWRJZHMgPSAobW9kZWw6IEV4cHJlc3Npb25RdWVyeSwgcXVlcmllczogQWxlcnRRdWVyeVtdKTogc3RyaW5nW10gfCB1bmRlZmluZWQgPT4ge1xuICBzd2l0Y2ggKG1vZGVsLnR5cGUpIHtcbiAgICBjYXNlIEV4cHJlc3Npb25RdWVyeVR5cGUuY2xhc3NpYzpcbiAgICAgIHJldHVybiBnZXRSZWZlcmVuY2VkSWRzRm9yQ2xhc3NpY0NvbmRpdGlvbihtb2RlbCk7XG4gICAgY2FzZSBFeHByZXNzaW9uUXVlcnlUeXBlLm1hdGg6XG4gICAgICByZXR1cm4gZ2V0UmVmZXJlbmNlZElkc0Zvck1hdGgobW9kZWwsIHF1ZXJpZXMpO1xuICAgIGNhc2UgRXhwcmVzc2lvblF1ZXJ5VHlwZS5yZXNhbXBsZTpcbiAgICBjYXNlIEV4cHJlc3Npb25RdWVyeVR5cGUucmVkdWNlOlxuICAgICAgcmV0dXJuIGdldFJlZmVyZW5jZWRJZHNGb3JSZWR1Y2UobW9kZWwpO1xuICB9XG59O1xuXG5jb25zdCBnZXRSZWZlcmVuY2VkSWRzRm9yQ2xhc3NpY0NvbmRpdGlvbiA9IChtb2RlbDogRXhwcmVzc2lvblF1ZXJ5KSA9PiB7XG4gIHJldHVybiBtb2RlbC5jb25kaXRpb25zPy5tYXAoKGNvbmRpdGlvbikgPT4ge1xuICAgIHJldHVybiBjb25kaXRpb24ucXVlcnkucGFyYW1zWzBdO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldFRpbWVSYW5nZXMgPSAocmVmZXJlbmNlZFJlZklkczogc3RyaW5nW10sIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkgPT4ge1xuICBsZXQgZnJvbTogbnVtYmVyW10gPSBbXTtcbiAgbGV0IHRvID0gW0ZBTExfQkFDS19USU1FX1JBTkdFLnRvXTtcbiAgZm9yIChjb25zdCByZWZlcmVuY2VkUmVmSWRzS2V5IG9mIHJlZmVyZW5jZWRSZWZJZHMpIHtcbiAgICBjb25zdCBxdWVyeSA9IHF1ZXJpZXMuZmluZCgocXVlcnkpID0+IHF1ZXJ5LnJlZklkID09PSByZWZlcmVuY2VkUmVmSWRzS2V5KTtcblxuICAgIGlmICghcXVlcnkgfHwgIXF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZnJvbS5wdXNoKHF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlLmZyb20pO1xuICAgIHRvLnB1c2gocXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UudG8pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9tLFxuICAgIHRvLFxuICB9O1xufTtcblxuY29uc3QgZ2V0UmVmZXJlbmNlZElkc0Zvck1hdGggPSAobW9kZWw6IEV4cHJlc3Npb25RdWVyeSwgcXVlcmllczogQWxlcnRRdWVyeVtdKSA9PiB7XG4gIHJldHVybiAoXG4gICAgcXVlcmllc1xuICAgICAgLy8gZmlsdGVyIHF1ZXJpZXMgb2YgdHlwZSBxdWVyeSBhbmQgZmlsdGVyIGV4cHJlc3Npb24gb24gaWYgaXQgaW5jbHVkZXMgYW55IHJlZklkc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5xdWVyeVR5cGUgPT09ICdxdWVyeScgJiYgbW9kZWwuZXhwcmVzc2lvbj8uaW5jbHVkZXMocS5yZWZJZCkpXG4gICAgICAubWFwKChxKSA9PiB7XG4gICAgICAgIHJldHVybiBxLnJlZklkO1xuICAgICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGdldFJlZmVyZW5jZWRJZHNGb3JSZWR1Y2UgPSAobW9kZWw6IEV4cHJlc3Npb25RdWVyeSkgPT4ge1xuICByZXR1cm4gbW9kZWwuZXhwcmVzc2lvbiA/IFttb2RlbC5leHByZXNzaW9uXSA6IHVuZGVmaW5lZDtcbn07XG4iLCJpbXBvcnQgeyBEYXRhUXVlcnkgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblJlZmVyZW5jZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL0RhdGFTb3VyY2VXaXRoQmFja2VuZCc7XG5pbXBvcnQgeyBFeHByZXNzaW9uUXVlcnksIEV4cHJlc3Npb25RdWVyeVR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGlzRXhwcmVzc2lvblF1ZXJ5ID0gKGRhdGFRdWVyeT86IERhdGFRdWVyeSk6IGRhdGFRdWVyeSBpcyBFeHByZXNzaW9uUXVlcnkgPT4ge1xuICBpZiAoIWRhdGFRdWVyeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0V4cHJlc3Npb25SZWZlcmVuY2UoZGF0YVF1ZXJ5LmRhdGFzb3VyY2UpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBleHByZXNzaW9uID0gZGF0YVF1ZXJ5IGFzIEV4cHJlc3Npb25RdWVyeTtcblxuICBpZiAodHlwZW9mIGV4cHJlc3Npb24udHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoRXhwcmVzc2lvblF1ZXJ5VHlwZSkuaW5jbHVkZXMoZXhwcmVzc2lvbi50eXBlKTtcbn07XG4iLCJcbi8qISBqcy15YW1sIDQuMS4wIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvanMteWFtbCBAbGljZW5zZSBNSVQgKi9cbmZ1bmN0aW9uIGlzTm90aGluZyhzdWJqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIHN1YmplY3QgPT09ICd1bmRlZmluZWQnKSB8fCAoc3ViamVjdCA9PT0gbnVsbCk7XG59XG5cblxuZnVuY3Rpb24gaXNPYmplY3Qoc3ViamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JykgJiYgKHN1YmplY3QgIT09IG51bGwpO1xufVxuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoc2VxdWVuY2UpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc2VxdWVuY2UpKSByZXR1cm4gc2VxdWVuY2U7XG4gIGVsc2UgaWYgKGlzTm90aGluZyhzZXF1ZW5jZSkpIHJldHVybiBbXTtcblxuICByZXR1cm4gWyBzZXF1ZW5jZSBdO1xufVxuXG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIgaW5kZXgsIGxlbmd0aCwga2V5LCBzb3VyY2VLZXlzO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBzb3VyY2VLZXlzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgIGtleSA9IHNvdXJjZUtleXNbaW5kZXhdO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5cbmZ1bmN0aW9uIHJlcGVhdChzdHJpbmcsIGNvdW50KSB7XG4gIHZhciByZXN1bHQgPSAnJywgY3ljbGU7XG5cbiAgZm9yIChjeWNsZSA9IDA7IGN5Y2xlIDwgY291bnQ7IGN5Y2xlICs9IDEpIHtcbiAgICByZXN1bHQgKz0gc3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5mdW5jdGlvbiBpc05lZ2F0aXZlWmVybyhudW1iZXIpIHtcbiAgcmV0dXJuIChudW1iZXIgPT09IDApICYmIChOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgPT09IDEgLyBudW1iZXIpO1xufVxuXG5cbnZhciBpc05vdGhpbmdfMSAgICAgID0gaXNOb3RoaW5nO1xudmFyIGlzT2JqZWN0XzEgICAgICAgPSBpc09iamVjdDtcbnZhciB0b0FycmF5XzEgICAgICAgID0gdG9BcnJheTtcbnZhciByZXBlYXRfMSAgICAgICAgID0gcmVwZWF0O1xudmFyIGlzTmVnYXRpdmVaZXJvXzEgPSBpc05lZ2F0aXZlWmVybztcbnZhciBleHRlbmRfMSAgICAgICAgID0gZXh0ZW5kO1xuXG52YXIgY29tbW9uID0ge1xuXHRpc05vdGhpbmc6IGlzTm90aGluZ18xLFxuXHRpc09iamVjdDogaXNPYmplY3RfMSxcblx0dG9BcnJheTogdG9BcnJheV8xLFxuXHRyZXBlYXQ6IHJlcGVhdF8xLFxuXHRpc05lZ2F0aXZlWmVybzogaXNOZWdhdGl2ZVplcm9fMSxcblx0ZXh0ZW5kOiBleHRlbmRfMVxufTtcblxuLy8gWUFNTCBlcnJvciBjbGFzcy4gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84NDU4OTg0XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IoZXhjZXB0aW9uLCBjb21wYWN0KSB7XG4gIHZhciB3aGVyZSA9ICcnLCBtZXNzYWdlID0gZXhjZXB0aW9uLnJlYXNvbiB8fCAnKHVua25vd24gcmVhc29uKSc7XG5cbiAgaWYgKCFleGNlcHRpb24ubWFyaykgcmV0dXJuIG1lc3NhZ2U7XG5cbiAgaWYgKGV4Y2VwdGlvbi5tYXJrLm5hbWUpIHtcbiAgICB3aGVyZSArPSAnaW4gXCInICsgZXhjZXB0aW9uLm1hcmsubmFtZSArICdcIiAnO1xuICB9XG5cbiAgd2hlcmUgKz0gJygnICsgKGV4Y2VwdGlvbi5tYXJrLmxpbmUgKyAxKSArICc6JyArIChleGNlcHRpb24ubWFyay5jb2x1bW4gKyAxKSArICcpJztcblxuICBpZiAoIWNvbXBhY3QgJiYgZXhjZXB0aW9uLm1hcmsuc25pcHBldCkge1xuICAgIHdoZXJlICs9ICdcXG5cXG4nICsgZXhjZXB0aW9uLm1hcmsuc25pcHBldDtcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlICsgJyAnICsgd2hlcmU7XG59XG5cblxuZnVuY3Rpb24gWUFNTEV4Y2VwdGlvbiQxKHJlYXNvbiwgbWFyaykge1xuICAvLyBTdXBlciBjb25zdHJ1Y3RvclxuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIHRoaXMubmFtZSA9ICdZQU1MRXhjZXB0aW9uJztcbiAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gIHRoaXMubWFyayA9IG1hcms7XG4gIHRoaXMubWVzc2FnZSA9IGZvcm1hdEVycm9yKHRoaXMsIGZhbHNlKTtcblxuICAvLyBJbmNsdWRlIHN0YWNrIHRyYWNlIGluIGVycm9yIG9iamVjdFxuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAvLyBDaHJvbWUgYW5kIE5vZGVKU1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZGLCBJRSAxMCsgYW5kIFNhZmFyaSA2Ky4gRmFsbGJhY2sgZm9yIG90aGVyc1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrIHx8ICcnO1xuICB9XG59XG5cblxuLy8gSW5oZXJpdCBmcm9tIEVycm9yXG5ZQU1MRXhjZXB0aW9uJDEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuWUFNTEV4Y2VwdGlvbiQxLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFlBTUxFeGNlcHRpb24kMTtcblxuXG5ZQU1MRXhjZXB0aW9uJDEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoY29tcGFjdCkge1xuICByZXR1cm4gdGhpcy5uYW1lICsgJzogJyArIGZvcm1hdEVycm9yKHRoaXMsIGNvbXBhY3QpO1xufTtcblxuXG52YXIgZXhjZXB0aW9uID0gWUFNTEV4Y2VwdGlvbiQxO1xuXG4vLyBnZXQgc25pcHBldCBmb3IgYSBzaW5nbGUgbGluZSwgcmVzcGVjdGluZyBtYXhMZW5ndGhcbmZ1bmN0aW9uIGdldExpbmUoYnVmZmVyLCBsaW5lU3RhcnQsIGxpbmVFbmQsIHBvc2l0aW9uLCBtYXhMaW5lTGVuZ3RoKSB7XG4gIHZhciBoZWFkID0gJyc7XG4gIHZhciB0YWlsID0gJyc7XG4gIHZhciBtYXhIYWxmTGVuZ3RoID0gTWF0aC5mbG9vcihtYXhMaW5lTGVuZ3RoIC8gMikgLSAxO1xuXG4gIGlmIChwb3NpdGlvbiAtIGxpbmVTdGFydCA+IG1heEhhbGZMZW5ndGgpIHtcbiAgICBoZWFkID0gJyAuLi4gJztcbiAgICBsaW5lU3RhcnQgPSBwb3NpdGlvbiAtIG1heEhhbGZMZW5ndGggKyBoZWFkLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChsaW5lRW5kIC0gcG9zaXRpb24gPiBtYXhIYWxmTGVuZ3RoKSB7XG4gICAgdGFpbCA9ICcgLi4uJztcbiAgICBsaW5lRW5kID0gcG9zaXRpb24gKyBtYXhIYWxmTGVuZ3RoIC0gdGFpbC5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0cjogaGVhZCArIGJ1ZmZlci5zbGljZShsaW5lU3RhcnQsIGxpbmVFbmQpLnJlcGxhY2UoL1xcdC9nLCAn4oaSJykgKyB0YWlsLFxuICAgIHBvczogcG9zaXRpb24gLSBsaW5lU3RhcnQgKyBoZWFkLmxlbmd0aCAvLyByZWxhdGl2ZSBwb3NpdGlvblxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIHBhZFN0YXJ0KHN0cmluZywgbWF4KSB7XG4gIHJldHVybiBjb21tb24ucmVwZWF0KCcgJywgbWF4IC0gc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59XG5cblxuZnVuY3Rpb24gbWFrZVNuaXBwZXQobWFyaywgb3B0aW9ucykge1xuICBvcHRpb25zID0gT2JqZWN0LmNyZWF0ZShvcHRpb25zIHx8IG51bGwpO1xuXG4gIGlmICghbWFyay5idWZmZXIpIHJldHVybiBudWxsO1xuXG4gIGlmICghb3B0aW9ucy5tYXhMZW5ndGgpIG9wdGlvbnMubWF4TGVuZ3RoID0gNzk7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbmRlbnQgICAgICAhPT0gJ251bWJlcicpIG9wdGlvbnMuaW5kZW50ICAgICAgPSAxO1xuICBpZiAodHlwZW9mIG9wdGlvbnMubGluZXNCZWZvcmUgIT09ICdudW1iZXInKSBvcHRpb25zLmxpbmVzQmVmb3JlID0gMztcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmxpbmVzQWZ0ZXIgICE9PSAnbnVtYmVyJykgb3B0aW9ucy5saW5lc0FmdGVyICA9IDI7XG5cbiAgdmFyIHJlID0gL1xccj9cXG58XFxyfFxcMC9nO1xuICB2YXIgbGluZVN0YXJ0cyA9IFsgMCBdO1xuICB2YXIgbGluZUVuZHMgPSBbXTtcbiAgdmFyIG1hdGNoO1xuICB2YXIgZm91bmRMaW5lTm8gPSAtMTtcblxuICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhtYXJrLmJ1ZmZlcikpKSB7XG4gICAgbGluZUVuZHMucHVzaChtYXRjaC5pbmRleCk7XG4gICAgbGluZVN0YXJ0cy5wdXNoKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcblxuICAgIGlmIChtYXJrLnBvc2l0aW9uIDw9IG1hdGNoLmluZGV4ICYmIGZvdW5kTGluZU5vIDwgMCkge1xuICAgICAgZm91bmRMaW5lTm8gPSBsaW5lU3RhcnRzLmxlbmd0aCAtIDI7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZvdW5kTGluZU5vIDwgMCkgZm91bmRMaW5lTm8gPSBsaW5lU3RhcnRzLmxlbmd0aCAtIDE7XG5cbiAgdmFyIHJlc3VsdCA9ICcnLCBpLCBsaW5lO1xuICB2YXIgbGluZU5vTGVuZ3RoID0gTWF0aC5taW4obWFyay5saW5lICsgb3B0aW9ucy5saW5lc0FmdGVyLCBsaW5lRW5kcy5sZW5ndGgpLnRvU3RyaW5nKCkubGVuZ3RoO1xuICB2YXIgbWF4TGluZUxlbmd0aCA9IG9wdGlvbnMubWF4TGVuZ3RoIC0gKG9wdGlvbnMuaW5kZW50ICsgbGluZU5vTGVuZ3RoICsgMyk7XG5cbiAgZm9yIChpID0gMTsgaSA8PSBvcHRpb25zLmxpbmVzQmVmb3JlOyBpKyspIHtcbiAgICBpZiAoZm91bmRMaW5lTm8gLSBpIDwgMCkgYnJlYWs7XG4gICAgbGluZSA9IGdldExpbmUoXG4gICAgICBtYXJrLmJ1ZmZlcixcbiAgICAgIGxpbmVTdGFydHNbZm91bmRMaW5lTm8gLSBpXSxcbiAgICAgIGxpbmVFbmRzW2ZvdW5kTGluZU5vIC0gaV0sXG4gICAgICBtYXJrLnBvc2l0aW9uIC0gKGxpbmVTdGFydHNbZm91bmRMaW5lTm9dIC0gbGluZVN0YXJ0c1tmb3VuZExpbmVObyAtIGldKSxcbiAgICAgIG1heExpbmVMZW5ndGhcbiAgICApO1xuICAgIHJlc3VsdCA9IGNvbW1vbi5yZXBlYXQoJyAnLCBvcHRpb25zLmluZGVudCkgKyBwYWRTdGFydCgobWFyay5saW5lIC0gaSArIDEpLnRvU3RyaW5nKCksIGxpbmVOb0xlbmd0aCkgK1xuICAgICAgJyB8ICcgKyBsaW5lLnN0ciArICdcXG4nICsgcmVzdWx0O1xuICB9XG5cbiAgbGluZSA9IGdldExpbmUobWFyay5idWZmZXIsIGxpbmVTdGFydHNbZm91bmRMaW5lTm9dLCBsaW5lRW5kc1tmb3VuZExpbmVOb10sIG1hcmsucG9zaXRpb24sIG1heExpbmVMZW5ndGgpO1xuICByZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnICcsIG9wdGlvbnMuaW5kZW50KSArIHBhZFN0YXJ0KChtYXJrLmxpbmUgKyAxKS50b1N0cmluZygpLCBsaW5lTm9MZW5ndGgpICtcbiAgICAnIHwgJyArIGxpbmUuc3RyICsgJ1xcbic7XG4gIHJlc3VsdCArPSBjb21tb24ucmVwZWF0KCctJywgb3B0aW9ucy5pbmRlbnQgKyBsaW5lTm9MZW5ndGggKyAzICsgbGluZS5wb3MpICsgJ14nICsgJ1xcbic7XG5cbiAgZm9yIChpID0gMTsgaSA8PSBvcHRpb25zLmxpbmVzQWZ0ZXI7IGkrKykge1xuICAgIGlmIChmb3VuZExpbmVObyArIGkgPj0gbGluZUVuZHMubGVuZ3RoKSBicmVhaztcbiAgICBsaW5lID0gZ2V0TGluZShcbiAgICAgIG1hcmsuYnVmZmVyLFxuICAgICAgbGluZVN0YXJ0c1tmb3VuZExpbmVObyArIGldLFxuICAgICAgbGluZUVuZHNbZm91bmRMaW5lTm8gKyBpXSxcbiAgICAgIG1hcmsucG9zaXRpb24gLSAobGluZVN0YXJ0c1tmb3VuZExpbmVOb10gLSBsaW5lU3RhcnRzW2ZvdW5kTGluZU5vICsgaV0pLFxuICAgICAgbWF4TGluZUxlbmd0aFxuICAgICk7XG4gICAgcmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJyAnLCBvcHRpb25zLmluZGVudCkgKyBwYWRTdGFydCgobWFyay5saW5lICsgaSArIDEpLnRvU3RyaW5nKCksIGxpbmVOb0xlbmd0aCkgK1xuICAgICAgJyB8ICcgKyBsaW5lLnN0ciArICdcXG4nO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKC9cXG4kLywgJycpO1xufVxuXG5cbnZhciBzbmlwcGV0ID0gbWFrZVNuaXBwZXQ7XG5cbnZhciBUWVBFX0NPTlNUUlVDVE9SX09QVElPTlMgPSBbXG4gICdraW5kJyxcbiAgJ211bHRpJyxcbiAgJ3Jlc29sdmUnLFxuICAnY29uc3RydWN0JyxcbiAgJ2luc3RhbmNlT2YnLFxuICAncHJlZGljYXRlJyxcbiAgJ3JlcHJlc2VudCcsXG4gICdyZXByZXNlbnROYW1lJyxcbiAgJ2RlZmF1bHRTdHlsZScsXG4gICdzdHlsZUFsaWFzZXMnXG5dO1xuXG52YXIgWUFNTF9OT0RFX0tJTkRTID0gW1xuICAnc2NhbGFyJyxcbiAgJ3NlcXVlbmNlJyxcbiAgJ21hcHBpbmcnXG5dO1xuXG5mdW5jdGlvbiBjb21waWxlU3R5bGVBbGlhc2VzKG1hcCkge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgaWYgKG1hcCAhPT0gbnVsbCkge1xuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIG1hcFtzdHlsZV0uZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgcmVzdWx0W1N0cmluZyhhbGlhcyldID0gc3R5bGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIFR5cGUkMSh0YWcsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChUWVBFX0NPTlNUUlVDVE9SX09QVElPTlMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBleGNlcHRpb24oJ1Vua25vd24gb3B0aW9uIFwiJyArIG5hbWUgKyAnXCIgaXMgbWV0IGluIGRlZmluaXRpb24gb2YgXCInICsgdGFnICsgJ1wiIFlBTUwgdHlwZS4nKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFRPRE86IEFkZCB0YWcgZm9ybWF0IGNoZWNrLlxuICB0aGlzLm9wdGlvbnMgICAgICAgPSBvcHRpb25zOyAvLyBrZWVwIG9yaWdpbmFsIG9wdGlvbnMgaW4gY2FzZSB1c2VyIHdhbnRzIHRvIGV4dGVuZCB0aGlzIHR5cGUgbGF0ZXJcbiAgdGhpcy50YWcgICAgICAgICAgID0gdGFnO1xuICB0aGlzLmtpbmQgICAgICAgICAgPSBvcHRpb25zWydraW5kJ10gICAgICAgICAgfHwgbnVsbDtcbiAgdGhpcy5yZXNvbHZlICAgICAgID0gb3B0aW9uc1sncmVzb2x2ZSddICAgICAgIHx8IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH07XG4gIHRoaXMuY29uc3RydWN0ICAgICA9IG9wdGlvbnNbJ2NvbnN0cnVjdCddICAgICB8fCBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfTtcbiAgdGhpcy5pbnN0YW5jZU9mICAgID0gb3B0aW9uc1snaW5zdGFuY2VPZiddICAgIHx8IG51bGw7XG4gIHRoaXMucHJlZGljYXRlICAgICA9IG9wdGlvbnNbJ3ByZWRpY2F0ZSddICAgICB8fCBudWxsO1xuICB0aGlzLnJlcHJlc2VudCAgICAgPSBvcHRpb25zWydyZXByZXNlbnQnXSAgICAgfHwgbnVsbDtcbiAgdGhpcy5yZXByZXNlbnROYW1lID0gb3B0aW9uc1sncmVwcmVzZW50TmFtZSddIHx8IG51bGw7XG4gIHRoaXMuZGVmYXVsdFN0eWxlICA9IG9wdGlvbnNbJ2RlZmF1bHRTdHlsZSddICB8fCBudWxsO1xuICB0aGlzLm11bHRpICAgICAgICAgPSBvcHRpb25zWydtdWx0aSddICAgICAgICAgfHwgZmFsc2U7XG4gIHRoaXMuc3R5bGVBbGlhc2VzICA9IGNvbXBpbGVTdHlsZUFsaWFzZXMob3B0aW9uc1snc3R5bGVBbGlhc2VzJ10gfHwgbnVsbCk7XG5cbiAgaWYgKFlBTUxfTk9ERV9LSU5EUy5pbmRleE9mKHRoaXMua2luZCkgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignVW5rbm93biBraW5kIFwiJyArIHRoaXMua2luZCArICdcIiBpcyBzcGVjaWZpZWQgZm9yIFwiJyArIHRhZyArICdcIiBZQU1MIHR5cGUuJyk7XG4gIH1cbn1cblxudmFyIHR5cGUgPSBUeXBlJDE7XG5cbi8qZXNsaW50LWRpc2FibGUgbWF4LWxlbiovXG5cblxuXG5cblxuZnVuY3Rpb24gY29tcGlsZUxpc3Qoc2NoZW1hLCBuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBzY2hlbWFbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudFR5cGUpIHtcbiAgICB2YXIgbmV3SW5kZXggPSByZXN1bHQubGVuZ3RoO1xuXG4gICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKHByZXZpb3VzVHlwZSwgcHJldmlvdXNJbmRleCkge1xuICAgICAgaWYgKHByZXZpb3VzVHlwZS50YWcgPT09IGN1cnJlbnRUeXBlLnRhZyAmJlxuICAgICAgICAgIHByZXZpb3VzVHlwZS5raW5kID09PSBjdXJyZW50VHlwZS5raW5kICYmXG4gICAgICAgICAgcHJldmlvdXNUeXBlLm11bHRpID09PSBjdXJyZW50VHlwZS5tdWx0aSkge1xuXG4gICAgICAgIG5ld0luZGV4ID0gcHJldmlvdXNJbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlc3VsdFtuZXdJbmRleF0gPSBjdXJyZW50VHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5mdW5jdGlvbiBjb21waWxlTWFwKC8qIGxpc3RzLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgICAgIHNjYWxhcjoge30sXG4gICAgICAgIHNlcXVlbmNlOiB7fSxcbiAgICAgICAgbWFwcGluZzoge30sXG4gICAgICAgIGZhbGxiYWNrOiB7fSxcbiAgICAgICAgbXVsdGk6IHtcbiAgICAgICAgICBzY2FsYXI6IFtdLFxuICAgICAgICAgIHNlcXVlbmNlOiBbXSxcbiAgICAgICAgICBtYXBwaW5nOiBbXSxcbiAgICAgICAgICBmYWxsYmFjazogW11cbiAgICAgICAgfVxuICAgICAgfSwgaW5kZXgsIGxlbmd0aDtcblxuICBmdW5jdGlvbiBjb2xsZWN0VHlwZSh0eXBlKSB7XG4gICAgaWYgKHR5cGUubXVsdGkpIHtcbiAgICAgIHJlc3VsdC5tdWx0aVt0eXBlLmtpbmRdLnB1c2godHlwZSk7XG4gICAgICByZXN1bHQubXVsdGlbJ2ZhbGxiYWNrJ10ucHVzaCh0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W3R5cGUua2luZF1bdHlwZS50YWddID0gcmVzdWx0WydmYWxsYmFjayddW3R5cGUudGFnXSA9IHR5cGU7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgYXJndW1lbnRzW2luZGV4XS5mb3JFYWNoKGNvbGxlY3RUeXBlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIFNjaGVtYSQxKGRlZmluaXRpb24pIHtcbiAgcmV0dXJuIHRoaXMuZXh0ZW5kKGRlZmluaXRpb24pO1xufVxuXG5cblNjaGVtYSQxLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQoZGVmaW5pdGlvbikge1xuICB2YXIgaW1wbGljaXQgPSBbXTtcbiAgdmFyIGV4cGxpY2l0ID0gW107XG5cbiAgaWYgKGRlZmluaXRpb24gaW5zdGFuY2VvZiB0eXBlKSB7XG4gICAgLy8gU2NoZW1hLmV4dGVuZCh0eXBlKVxuICAgIGV4cGxpY2l0LnB1c2goZGVmaW5pdGlvbik7XG5cbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG4gICAgLy8gU2NoZW1hLmV4dGVuZChbIHR5cGUxLCB0eXBlMiwgLi4uIF0pXG4gICAgZXhwbGljaXQgPSBleHBsaWNpdC5jb25jYXQoZGVmaW5pdGlvbik7XG5cbiAgfSBlbHNlIGlmIChkZWZpbml0aW9uICYmIChBcnJheS5pc0FycmF5KGRlZmluaXRpb24uaW1wbGljaXQpIHx8IEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbi5leHBsaWNpdCkpKSB7XG4gICAgLy8gU2NoZW1hLmV4dGVuZCh7IGV4cGxpY2l0OiBbIHR5cGUxLCB0eXBlMiwgLi4uIF0sIGltcGxpY2l0OiBbIHR5cGUxLCB0eXBlMiwgLi4uIF0gfSlcbiAgICBpZiAoZGVmaW5pdGlvbi5pbXBsaWNpdCkgaW1wbGljaXQgPSBpbXBsaWNpdC5jb25jYXQoZGVmaW5pdGlvbi5pbXBsaWNpdCk7XG4gICAgaWYgKGRlZmluaXRpb24uZXhwbGljaXQpIGV4cGxpY2l0ID0gZXhwbGljaXQuY29uY2F0KGRlZmluaXRpb24uZXhwbGljaXQpO1xuXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignU2NoZW1hLmV4dGVuZCBhcmd1bWVudCBzaG91bGQgYmUgYSBUeXBlLCBbIFR5cGUgXSwgJyArXG4gICAgICAnb3IgYSBzY2hlbWEgZGVmaW5pdGlvbiAoeyBpbXBsaWNpdDogWy4uLl0sIGV4cGxpY2l0OiBbLi4uXSB9KScpO1xuICB9XG5cbiAgaW1wbGljaXQuZm9yRWFjaChmdW5jdGlvbiAodHlwZSQxKSB7XG4gICAgaWYgKCEodHlwZSQxIGluc3RhbmNlb2YgdHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBleGNlcHRpb24oJ1NwZWNpZmllZCBsaXN0IG9mIFlBTUwgdHlwZXMgKG9yIGEgc2luZ2xlIFR5cGUgb2JqZWN0KSBjb250YWlucyBhIG5vbi1UeXBlIG9iamVjdC4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSQxLmxvYWRLaW5kICYmIHR5cGUkMS5sb2FkS2luZCAhPT0gJ3NjYWxhcicpIHtcbiAgICAgIHRocm93IG5ldyBleGNlcHRpb24oJ1RoZXJlIGlzIGEgbm9uLXNjYWxhciB0eXBlIGluIHRoZSBpbXBsaWNpdCBsaXN0IG9mIGEgc2NoZW1hLiBJbXBsaWNpdCByZXNvbHZpbmcgb2Ygc3VjaCB0eXBlcyBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlJDEubXVsdGkpIHtcbiAgICAgIHRocm93IG5ldyBleGNlcHRpb24oJ1RoZXJlIGlzIGEgbXVsdGkgdHlwZSBpbiB0aGUgaW1wbGljaXQgbGlzdCBvZiBhIHNjaGVtYS4gTXVsdGkgdGFncyBjYW4gb25seSBiZSBsaXN0ZWQgYXMgZXhwbGljaXQuJyk7XG4gICAgfVxuICB9KTtcblxuICBleHBsaWNpdC5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlJDEpIHtcbiAgICBpZiAoISh0eXBlJDEgaW5zdGFuY2VvZiB0eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignU3BlY2lmaWVkIGxpc3Qgb2YgWUFNTCB0eXBlcyAob3IgYSBzaW5nbGUgVHlwZSBvYmplY3QpIGNvbnRhaW5zIGEgbm9uLVR5cGUgb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUoU2NoZW1hJDEucHJvdG90eXBlKTtcblxuICByZXN1bHQuaW1wbGljaXQgPSAodGhpcy5pbXBsaWNpdCB8fCBbXSkuY29uY2F0KGltcGxpY2l0KTtcbiAgcmVzdWx0LmV4cGxpY2l0ID0gKHRoaXMuZXhwbGljaXQgfHwgW10pLmNvbmNhdChleHBsaWNpdCk7XG5cbiAgcmVzdWx0LmNvbXBpbGVkSW1wbGljaXQgPSBjb21waWxlTGlzdChyZXN1bHQsICdpbXBsaWNpdCcpO1xuICByZXN1bHQuY29tcGlsZWRFeHBsaWNpdCA9IGNvbXBpbGVMaXN0KHJlc3VsdCwgJ2V4cGxpY2l0Jyk7XG4gIHJlc3VsdC5jb21waWxlZFR5cGVNYXAgID0gY29tcGlsZU1hcChyZXN1bHQuY29tcGlsZWRJbXBsaWNpdCwgcmVzdWx0LmNvbXBpbGVkRXhwbGljaXQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbnZhciBzY2hlbWEgPSBTY2hlbWEkMTtcblxudmFyIHN0ciA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpzdHInLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6ICcnOyB9XG59KTtcblxudmFyIHNlcSA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpzZXEnLCB7XG4gIGtpbmQ6ICdzZXF1ZW5jZScsXG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDogW107IH1cbn0pO1xuXG52YXIgbWFwID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm1hcCcsIHtcbiAga2luZDogJ21hcHBpbmcnLFxuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IHt9OyB9XG59KTtcblxudmFyIGZhaWxzYWZlID0gbmV3IHNjaGVtYSh7XG4gIGV4cGxpY2l0OiBbXG4gICAgc3RyLFxuICAgIHNlcSxcbiAgICBtYXBcbiAgXVxufSk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sTnVsbChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgbWF4ID0gZGF0YS5sZW5ndGg7XG5cbiAgcmV0dXJuIChtYXggPT09IDEgJiYgZGF0YSA9PT0gJ34nKSB8fFxuICAgICAgICAgKG1heCA9PT0gNCAmJiAoZGF0YSA9PT0gJ251bGwnIHx8IGRhdGEgPT09ICdOdWxsJyB8fCBkYXRhID09PSAnTlVMTCcpKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc051bGwob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT09IG51bGw7XG59XG5cbnZhciBfbnVsbCA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpudWxsJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxOdWxsLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxOdWxsLFxuICBwcmVkaWNhdGU6IGlzTnVsbCxcbiAgcmVwcmVzZW50OiB7XG4gICAgY2Fub25pY2FsOiBmdW5jdGlvbiAoKSB7IHJldHVybiAnfic7ICAgIH0sXG4gICAgbG93ZXJjYXNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAnbnVsbCc7IH0sXG4gICAgdXBwZXJjYXNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAnTlVMTCc7IH0sXG4gICAgY2FtZWxjYXNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAnTnVsbCc7IH0sXG4gICAgZW1wdHk6ICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiAnJzsgICAgIH1cbiAgfSxcbiAgZGVmYXVsdFN0eWxlOiAnbG93ZXJjYXNlJ1xufSk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sQm9vbGVhbihkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG1heCA9IGRhdGEubGVuZ3RoO1xuXG4gIHJldHVybiAobWF4ID09PSA0ICYmIChkYXRhID09PSAndHJ1ZScgfHwgZGF0YSA9PT0gJ1RydWUnIHx8IGRhdGEgPT09ICdUUlVFJykpIHx8XG4gICAgICAgICAobWF4ID09PSA1ICYmIChkYXRhID09PSAnZmFsc2UnIHx8IGRhdGEgPT09ICdGYWxzZScgfHwgZGF0YSA9PT0gJ0ZBTFNFJykpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sQm9vbGVhbihkYXRhKSB7XG4gIHJldHVybiBkYXRhID09PSAndHJ1ZScgfHxcbiAgICAgICAgIGRhdGEgPT09ICdUcnVlJyB8fFxuICAgICAgICAgZGF0YSA9PT0gJ1RSVUUnO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4ob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xufVxuXG52YXIgYm9vbCA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpib29sJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxCb29sZWFuLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxCb29sZWFuLFxuICBwcmVkaWNhdGU6IGlzQm9vbGVhbixcbiAgcmVwcmVzZW50OiB7XG4gICAgbG93ZXJjYXNlOiBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgPyAndHJ1ZScgOiAnZmFsc2UnOyB9LFxuICAgIHVwcGVyY2FzZTogZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0ID8gJ1RSVUUnIDogJ0ZBTFNFJzsgfSxcbiAgICBjYW1lbGNhc2U6IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdCA/ICdUcnVlJyA6ICdGYWxzZSc7IH1cbiAgfSxcbiAgZGVmYXVsdFN0eWxlOiAnbG93ZXJjYXNlJ1xufSk7XG5cbmZ1bmN0aW9uIGlzSGV4Q29kZShjKSB7XG4gIHJldHVybiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSkgfHxcbiAgICAgICAgICgoMHg0MS8qIEEgKi8gPD0gYykgJiYgKGMgPD0gMHg0Ni8qIEYgKi8pKSB8fFxuICAgICAgICAgKCgweDYxLyogYSAqLyA8PSBjKSAmJiAoYyA8PSAweDY2LyogZiAqLykpO1xufVxuXG5mdW5jdGlvbiBpc09jdENvZGUoYykge1xuICByZXR1cm4gKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM3LyogNyAqLykpO1xufVxuXG5mdW5jdGlvbiBpc0RlY0NvZGUoYykge1xuICByZXR1cm4gKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEludGVnZXIoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtYXggPSBkYXRhLmxlbmd0aCxcbiAgICAgIGluZGV4ID0gMCxcbiAgICAgIGhhc0RpZ2l0cyA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgaWYgKCFtYXgpIHJldHVybiBmYWxzZTtcblxuICBjaCA9IGRhdGFbaW5kZXhdO1xuXG4gIC8vIHNpZ25cbiAgaWYgKGNoID09PSAnLScgfHwgY2ggPT09ICcrJykge1xuICAgIGNoID0gZGF0YVsrK2luZGV4XTtcbiAgfVxuXG4gIGlmIChjaCA9PT0gJzAnKSB7XG4gICAgLy8gMFxuICAgIGlmIChpbmRleCArIDEgPT09IG1heCkgcmV0dXJuIHRydWU7XG4gICAgY2ggPSBkYXRhWysraW5kZXhdO1xuXG4gICAgLy8gYmFzZSAyLCBiYXNlIDgsIGJhc2UgMTZcblxuICAgIGlmIChjaCA9PT0gJ2InKSB7XG4gICAgICAvLyBiYXNlIDJcbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIGZvciAoOyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgICAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgICAgICBpZiAoY2ggPT09ICdfJykgY29udGludWU7XG4gICAgICAgIGlmIChjaCAhPT0gJzAnICYmIGNoICE9PSAnMScpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNEaWdpdHMgJiYgY2ggIT09ICdfJztcbiAgICB9XG5cblxuICAgIGlmIChjaCA9PT0gJ3gnKSB7XG4gICAgICAvLyBiYXNlIDE2XG4gICAgICBpbmRleCsrO1xuXG4gICAgICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgY2ggPSBkYXRhW2luZGV4XTtcbiAgICAgICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIWlzSGV4Q29kZShkYXRhLmNoYXJDb2RlQXQoaW5kZXgpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBoYXNEaWdpdHMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0RpZ2l0cyAmJiBjaCAhPT0gJ18nO1xuICAgIH1cblxuXG4gICAgaWYgKGNoID09PSAnbycpIHtcbiAgICAgIC8vIGJhc2UgOFxuICAgICAgaW5kZXgrKztcblxuICAgICAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFpc09jdENvZGUoZGF0YS5jaGFyQ29kZUF0KGluZGV4KSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNEaWdpdHMgJiYgY2ggIT09ICdfJztcbiAgICB9XG4gIH1cblxuICAvLyBiYXNlIDEwIChleGNlcHQgMClcblxuICAvLyB2YWx1ZSBzaG91bGQgbm90IHN0YXJ0IHdpdGggYF9gO1xuICBpZiAoY2ggPT09ICdfJykgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAoOyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgIGlmICghaXNEZWNDb2RlKGRhdGEuY2hhckNvZGVBdChpbmRleCkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gIH1cblxuICAvLyBTaG91bGQgaGF2ZSBkaWdpdHMgYW5kIHNob3VsZCBub3QgZW5kIHdpdGggYF9gXG4gIGlmICghaGFzRGlnaXRzIHx8IGNoID09PSAnXycpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEludGVnZXIoZGF0YSkge1xuICB2YXIgdmFsdWUgPSBkYXRhLCBzaWduID0gMSwgY2g7XG5cbiAgaWYgKHZhbHVlLmluZGV4T2YoJ18nKSAhPT0gLTEpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL18vZywgJycpO1xuICB9XG5cbiAgY2ggPSB2YWx1ZVswXTtcblxuICBpZiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnKSB7XG4gICAgaWYgKGNoID09PSAnLScpIHNpZ24gPSAtMTtcbiAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpO1xuICAgIGNoID0gdmFsdWVbMF07XG4gIH1cblxuICBpZiAodmFsdWUgPT09ICcwJykgcmV0dXJuIDA7XG5cbiAgaWYgKGNoID09PSAnMCcpIHtcbiAgICBpZiAodmFsdWVbMV0gPT09ICdiJykgcmV0dXJuIHNpZ24gKiBwYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgMik7XG4gICAgaWYgKHZhbHVlWzFdID09PSAneCcpIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIDE2KTtcbiAgICBpZiAodmFsdWVbMV0gPT09ICdvJykgcmV0dXJuIHNpZ24gKiBwYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgOCk7XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLCAxMCk7XG59XG5cbmZ1bmN0aW9uIGlzSW50ZWdlcihvYmplY3QpIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSkgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmXG4gICAgICAgICAob2JqZWN0ICUgMSA9PT0gMCAmJiAhY29tbW9uLmlzTmVnYXRpdmVaZXJvKG9iamVjdCkpO1xufVxuXG52YXIgaW50ID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmludCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sSW50ZWdlcixcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sSW50ZWdlcixcbiAgcHJlZGljYXRlOiBpc0ludGVnZXIsXG4gIHJlcHJlc2VudDoge1xuICAgIGJpbmFyeTogICAgICBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogPj0gMCA/ICcwYicgKyBvYmoudG9TdHJpbmcoMikgOiAnLTBiJyArIG9iai50b1N0cmluZygyKS5zbGljZSgxKTsgfSxcbiAgICBvY3RhbDogICAgICAgZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqID49IDAgPyAnMG8nICArIG9iai50b1N0cmluZyg4KSA6ICctMG8nICArIG9iai50b1N0cmluZyg4KS5zbGljZSgxKTsgfSxcbiAgICBkZWNpbWFsOiAgICAgZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLnRvU3RyaW5nKDEwKTsgfSxcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgaGV4YWRlY2ltYWw6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiA+PSAwID8gJzB4JyArIG9iai50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSA6ICAnLTB4JyArIG9iai50b1N0cmluZygxNikudG9VcHBlckNhc2UoKS5zbGljZSgxKTsgfVxuICB9LFxuICBkZWZhdWx0U3R5bGU6ICdkZWNpbWFsJyxcbiAgc3R5bGVBbGlhc2VzOiB7XG4gICAgYmluYXJ5OiAgICAgIFsgMiwgICdiaW4nIF0sXG4gICAgb2N0YWw6ICAgICAgIFsgOCwgICdvY3QnIF0sXG4gICAgZGVjaW1hbDogICAgIFsgMTAsICdkZWMnIF0sXG4gICAgaGV4YWRlY2ltYWw6IFsgMTYsICdoZXgnIF1cbiAgfVxufSk7XG5cbnZhciBZQU1MX0ZMT0FUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAvLyAyLjVlNCwgMi41IGFuZCBpbnRlZ2Vyc1xuICAnXig/OlstK10/KD86WzAtOV1bMC05X10qKSg/OlxcXFwuWzAtOV9dKik/KD86W2VFXVstK10/WzAtOV0rKT8nICtcbiAgLy8gLjJlNCwgLjJcbiAgLy8gc3BlY2lhbCBjYXNlLCBzZWVtcyBub3QgZnJvbSBzcGVjXG4gICd8XFxcXC5bMC05X10rKD86W2VFXVstK10/WzAtOV0rKT8nICtcbiAgLy8gLmluZlxuICAnfFstK10/XFxcXC4oPzppbmZ8SW5mfElORiknICtcbiAgLy8gLm5hblxuICAnfFxcXFwuKD86bmFufE5hTnxOQU4pKSQnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxGbG9hdChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCFZQU1MX0ZMT0FUX1BBVFRFUk4udGVzdChkYXRhKSB8fFxuICAgICAgLy8gUXVpY2sgaGFjayB0byBub3QgYWxsb3cgaW50ZWdlcnMgZW5kIHdpdGggYF9gXG4gICAgICAvLyBQcm9iYWJseSBzaG91bGQgdXBkYXRlIHJlZ2V4cCAmIGNoZWNrIHNwZWVkXG4gICAgICBkYXRhW2RhdGEubGVuZ3RoIC0gMV0gPT09ICdfJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sRmxvYXQoZGF0YSkge1xuICB2YXIgdmFsdWUsIHNpZ247XG5cbiAgdmFsdWUgID0gZGF0YS5yZXBsYWNlKC9fL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICBzaWduICAgPSB2YWx1ZVswXSA9PT0gJy0nID8gLTEgOiAxO1xuXG4gIGlmICgnKy0nLmluZGV4T2YodmFsdWVbMF0pID49IDApIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnLmluZicpIHtcbiAgICByZXR1cm4gKHNpZ24gPT09IDEpID8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZIDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09ICcubmFuJykge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIHNpZ24gKiBwYXJzZUZsb2F0KHZhbHVlLCAxMCk7XG59XG5cblxudmFyIFNDSUVOVElGSUNfV0lUSE9VVF9ET1QgPSAvXlstK10/WzAtOV0rZS87XG5cbmZ1bmN0aW9uIHJlcHJlc2VudFlhbWxGbG9hdChvYmplY3QsIHN0eWxlKSB7XG4gIHZhciByZXM7XG5cbiAgaWYgKGlzTmFOKG9iamVjdCkpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICBjYXNlICdsb3dlcmNhc2UnOiByZXR1cm4gJy5uYW4nO1xuICAgICAgY2FzZSAndXBwZXJjYXNlJzogcmV0dXJuICcuTkFOJztcbiAgICAgIGNhc2UgJ2NhbWVsY2FzZSc6IHJldHVybiAnLk5hTic7XG4gICAgfVxuICB9IGVsc2UgaWYgKE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA9PT0gb2JqZWN0KSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgY2FzZSAnbG93ZXJjYXNlJzogcmV0dXJuICcuaW5mJztcbiAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6IHJldHVybiAnLklORic7XG4gICAgICBjYXNlICdjYW1lbGNhc2UnOiByZXR1cm4gJy5JbmYnO1xuICAgIH1cbiAgfSBlbHNlIGlmIChOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgPT09IG9iamVjdCkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6IHJldHVybiAnLS5pbmYnO1xuICAgICAgY2FzZSAndXBwZXJjYXNlJzogcmV0dXJuICctLklORic7XG4gICAgICBjYXNlICdjYW1lbGNhc2UnOiByZXR1cm4gJy0uSW5mJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29tbW9uLmlzTmVnYXRpdmVaZXJvKG9iamVjdCkpIHtcbiAgICByZXR1cm4gJy0wLjAnO1xuICB9XG5cbiAgcmVzID0gb2JqZWN0LnRvU3RyaW5nKDEwKTtcblxuICAvLyBKUyBzdHJpbmdpZmllciBjYW4gYnVpbGQgc2NpZW50aWZpYyBmb3JtYXQgd2l0aG91dCBkb3RzOiA1ZS0xMDAsXG4gIC8vIHdoaWxlIFlBTUwgcmVxdXJlcyBkb3Q6IDUuZS0xMDAuIEZpeCBpdCB3aXRoIHNpbXBsZSBoYWNrXG5cbiAgcmV0dXJuIFNDSUVOVElGSUNfV0lUSE9VVF9ET1QudGVzdChyZXMpID8gcmVzLnJlcGxhY2UoJ2UnLCAnLmUnKSA6IHJlcztcbn1cblxuZnVuY3Rpb24gaXNGbG9hdChvYmplY3QpIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgTnVtYmVyXScpICYmXG4gICAgICAgICAob2JqZWN0ICUgMSAhPT0gMCB8fCBjb21tb24uaXNOZWdhdGl2ZVplcm8ob2JqZWN0KSk7XG59XG5cbnZhciBmbG9hdCA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpmbG9hdCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sRmxvYXQsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbEZsb2F0LFxuICBwcmVkaWNhdGU6IGlzRmxvYXQsXG4gIHJlcHJlc2VudDogcmVwcmVzZW50WWFtbEZsb2F0LFxuICBkZWZhdWx0U3R5bGU6ICdsb3dlcmNhc2UnXG59KTtcblxudmFyIGpzb24gPSBmYWlsc2FmZS5leHRlbmQoe1xuICBpbXBsaWNpdDogW1xuICAgIF9udWxsLFxuICAgIGJvb2wsXG4gICAgaW50LFxuICAgIGZsb2F0XG4gIF1cbn0pO1xuXG52YXIgY29yZSA9IGpzb247XG5cbnZhciBZQU1MX0RBVEVfUkVHRVhQID0gbmV3IFJlZ0V4cChcbiAgJ14oWzAtOV1bMC05XVswLTldWzAtOV0pJyAgICAgICAgICArIC8vIFsxXSB5ZWFyXG4gICctKFswLTldWzAtOV0pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbMl0gbW9udGhcbiAgJy0oWzAtOV1bMC05XSkkJyk7ICAgICAgICAgICAgICAgICAgIC8vIFszXSBkYXlcblxudmFyIFlBTUxfVElNRVNUQU1QX1JFR0VYUCA9IG5ldyBSZWdFeHAoXG4gICdeKFswLTldWzAtOV1bMC05XVswLTldKScgICAgICAgICAgKyAvLyBbMV0geWVhclxuICAnLShbMC05XVswLTldPyknICAgICAgICAgICAgICAgICAgICsgLy8gWzJdIG1vbnRoXG4gICctKFswLTldWzAtOV0/KScgICAgICAgICAgICAgICAgICAgKyAvLyBbM10gZGF5XG4gICcoPzpbVHRdfFsgXFxcXHRdKyknICAgICAgICAgICAgICAgICArIC8vIC4uLlxuICAnKFswLTldWzAtOV0/KScgICAgICAgICAgICAgICAgICAgICsgLy8gWzRdIGhvdXJcbiAgJzooWzAtOV1bMC05XSknICAgICAgICAgICAgICAgICAgICArIC8vIFs1XSBtaW51dGVcbiAgJzooWzAtOV1bMC05XSknICAgICAgICAgICAgICAgICAgICArIC8vIFs2XSBzZWNvbmRcbiAgJyg/OlxcXFwuKFswLTldKikpPycgICAgICAgICAgICAgICAgICsgLy8gWzddIGZyYWN0aW9uXG4gICcoPzpbIFxcXFx0XSooWnwoWy0rXSkoWzAtOV1bMC05XT8pJyArIC8vIFs4XSB0eiBbOV0gdHpfc2lnbiBbMTBdIHR6X2hvdXJcbiAgJyg/OjooWzAtOV1bMC05XSkpPykpPyQnKTsgICAgICAgICAgIC8vIFsxMV0gdHpfbWludXRlXG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sVGltZXN0YW1wKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKFlBTUxfREFURV9SRUdFWFAuZXhlYyhkYXRhKSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIGlmIChZQU1MX1RJTUVTVEFNUF9SRUdFWFAuZXhlYyhkYXRhKSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbFRpbWVzdGFtcChkYXRhKSB7XG4gIHZhciBtYXRjaCwgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIGZyYWN0aW9uID0gMCxcbiAgICAgIGRlbHRhID0gbnVsbCwgdHpfaG91ciwgdHpfbWludXRlLCBkYXRlO1xuXG4gIG1hdGNoID0gWUFNTF9EQVRFX1JFR0VYUC5leGVjKGRhdGEpO1xuICBpZiAobWF0Y2ggPT09IG51bGwpIG1hdGNoID0gWUFNTF9USU1FU1RBTVBfUkVHRVhQLmV4ZWMoZGF0YSk7XG5cbiAgaWYgKG1hdGNoID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ0RhdGUgcmVzb2x2ZSBlcnJvcicpO1xuXG4gIC8vIG1hdGNoOiBbMV0geWVhciBbMl0gbW9udGggWzNdIGRheVxuXG4gIHllYXIgPSArKG1hdGNoWzFdKTtcbiAgbW9udGggPSArKG1hdGNoWzJdKSAtIDE7IC8vIEpTIG1vbnRoIHN0YXJ0cyB3aXRoIDBcbiAgZGF5ID0gKyhtYXRjaFszXSk7XG5cbiAgaWYgKCFtYXRjaFs0XSkgeyAvLyBubyBob3VyXG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXkpKTtcbiAgfVxuXG4gIC8vIG1hdGNoOiBbNF0gaG91ciBbNV0gbWludXRlIFs2XSBzZWNvbmQgWzddIGZyYWN0aW9uXG5cbiAgaG91ciA9ICsobWF0Y2hbNF0pO1xuICBtaW51dGUgPSArKG1hdGNoWzVdKTtcbiAgc2Vjb25kID0gKyhtYXRjaFs2XSk7XG5cbiAgaWYgKG1hdGNoWzddKSB7XG4gICAgZnJhY3Rpb24gPSBtYXRjaFs3XS5zbGljZSgwLCAzKTtcbiAgICB3aGlsZSAoZnJhY3Rpb24ubGVuZ3RoIDwgMykgeyAvLyBtaWxsaS1zZWNvbmRzXG4gICAgICBmcmFjdGlvbiArPSAnMCc7XG4gICAgfVxuICAgIGZyYWN0aW9uID0gK2ZyYWN0aW9uO1xuICB9XG5cbiAgLy8gbWF0Y2g6IFs4XSB0eiBbOV0gdHpfc2lnbiBbMTBdIHR6X2hvdXIgWzExXSB0el9taW51dGVcblxuICBpZiAobWF0Y2hbOV0pIHtcbiAgICB0el9ob3VyID0gKyhtYXRjaFsxMF0pO1xuICAgIHR6X21pbnV0ZSA9ICsobWF0Y2hbMTFdIHx8IDApO1xuICAgIGRlbHRhID0gKHR6X2hvdXIgKiA2MCArIHR6X21pbnV0ZSkgKiA2MDAwMDsgLy8gZGVsdGEgaW4gbWlsaS1zZWNvbmRzXG4gICAgaWYgKG1hdGNoWzldID09PSAnLScpIGRlbHRhID0gLWRlbHRhO1xuICB9XG5cbiAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmcmFjdGlvbikpO1xuXG4gIGlmIChkZWx0YSkgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpIC0gZGVsdGEpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiByZXByZXNlbnRZYW1sVGltZXN0YW1wKG9iamVjdCAvKiwgc3R5bGUqLykge1xuICByZXR1cm4gb2JqZWN0LnRvSVNPU3RyaW5nKCk7XG59XG5cbnZhciB0aW1lc3RhbXAgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6dGltZXN0YW1wJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxUaW1lc3RhbXAsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbFRpbWVzdGFtcCxcbiAgaW5zdGFuY2VPZjogRGF0ZSxcbiAgcmVwcmVzZW50OiByZXByZXNlbnRZYW1sVGltZXN0YW1wXG59KTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxNZXJnZShkYXRhKSB7XG4gIHJldHVybiBkYXRhID09PSAnPDwnIHx8IGRhdGEgPT09IG51bGw7XG59XG5cbnZhciBtZXJnZSA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjptZXJnZScsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sTWVyZ2Vcbn0pO1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UqL1xuXG5cblxuXG5cbi8vIFsgNjQsIDY1LCA2NiBdIC0+IFsgcGFkZGluZywgQ1IsIExGIF1cbnZhciBCQVNFNjRfTUFQID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XFxuXFxyJztcblxuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEJpbmFyeShkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGNvZGUsIGlkeCwgYml0bGVuID0gMCwgbWF4ID0gZGF0YS5sZW5ndGgsIG1hcCA9IEJBU0U2NF9NQVA7XG5cbiAgLy8gQ29udmVydCBvbmUgYnkgb25lLlxuICBmb3IgKGlkeCA9IDA7IGlkeCA8IG1heDsgaWR4KyspIHtcbiAgICBjb2RlID0gbWFwLmluZGV4T2YoZGF0YS5jaGFyQXQoaWR4KSk7XG5cbiAgICAvLyBTa2lwIENSL0xGXG4gICAgaWYgKGNvZGUgPiA2NCkgY29udGludWU7XG5cbiAgICAvLyBGYWlsIG9uIGlsbGVnYWwgY2hhcmFjdGVyc1xuICAgIGlmIChjb2RlIDwgMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgYml0bGVuICs9IDY7XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgYW55IGJpdHMgbGVmdCwgc291cmNlIHdhcyBjb3JydXB0ZWRcbiAgcmV0dXJuIChiaXRsZW4gJSA4KSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEJpbmFyeShkYXRhKSB7XG4gIHZhciBpZHgsIHRhaWxiaXRzLFxuICAgICAgaW5wdXQgPSBkYXRhLnJlcGxhY2UoL1tcXHJcXG49XS9nLCAnJyksIC8vIHJlbW92ZSBDUi9MRiAmIHBhZGRpbmcgdG8gc2ltcGxpZnkgc2NhblxuICAgICAgbWF4ID0gaW5wdXQubGVuZ3RoLFxuICAgICAgbWFwID0gQkFTRTY0X01BUCxcbiAgICAgIGJpdHMgPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgLy8gQ29sbGVjdCBieSA2KjQgYml0cyAoMyBieXRlcylcblxuICBmb3IgKGlkeCA9IDA7IGlkeCA8IG1heDsgaWR4KyspIHtcbiAgICBpZiAoKGlkeCAlIDQgPT09IDApICYmIGlkeCkge1xuICAgICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gMTYpICYgMHhGRik7XG4gICAgICByZXN1bHQucHVzaCgoYml0cyA+PiA4KSAmIDB4RkYpO1xuICAgICAgcmVzdWx0LnB1c2goYml0cyAmIDB4RkYpO1xuICAgIH1cblxuICAgIGJpdHMgPSAoYml0cyA8PCA2KSB8IG1hcC5pbmRleE9mKGlucHV0LmNoYXJBdChpZHgpKTtcbiAgfVxuXG4gIC8vIER1bXAgdGFpbFxuXG4gIHRhaWxiaXRzID0gKG1heCAlIDQpICogNjtcblxuICBpZiAodGFpbGJpdHMgPT09IDApIHtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiAxNikgJiAweEZGKTtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiA4KSAmIDB4RkYpO1xuICAgIHJlc3VsdC5wdXNoKGJpdHMgJiAweEZGKTtcbiAgfSBlbHNlIGlmICh0YWlsYml0cyA9PT0gMTgpIHtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiAxMCkgJiAweEZGKTtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiAyKSAmIDB4RkYpO1xuICB9IGVsc2UgaWYgKHRhaWxiaXRzID09PSAxMikge1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDQpICYgMHhGRik7XG4gIH1cblxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gcmVwcmVzZW50WWFtbEJpbmFyeShvYmplY3QgLyosIHN0eWxlKi8pIHtcbiAgdmFyIHJlc3VsdCA9ICcnLCBiaXRzID0gMCwgaWR4LCB0YWlsLFxuICAgICAgbWF4ID0gb2JqZWN0Lmxlbmd0aCxcbiAgICAgIG1hcCA9IEJBU0U2NF9NQVA7XG5cbiAgLy8gQ29udmVydCBldmVyeSB0aHJlZSBieXRlcyB0byA0IEFTQ0lJIGNoYXJhY3RlcnMuXG5cbiAgZm9yIChpZHggPSAwOyBpZHggPCBtYXg7IGlkeCsrKSB7XG4gICAgaWYgKChpZHggJSAzID09PSAwKSAmJiBpZHgpIHtcbiAgICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTgpICYgMHgzRl07XG4gICAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDEyKSAmIDB4M0ZdO1xuICAgICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiA2KSAmIDB4M0ZdO1xuICAgICAgcmVzdWx0ICs9IG1hcFtiaXRzICYgMHgzRl07XG4gICAgfVxuXG4gICAgYml0cyA9IChiaXRzIDw8IDgpICsgb2JqZWN0W2lkeF07XG4gIH1cblxuICAvLyBEdW1wIHRhaWxcblxuICB0YWlsID0gbWF4ICUgMztcblxuICBpZiAodGFpbCA9PT0gMCkge1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTgpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAxMikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDYpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFtiaXRzICYgMHgzRl07XG4gIH0gZWxzZSBpZiAodGFpbCA9PT0gMikge1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTApICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiA0KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPDwgMikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWzY0XTtcbiAgfSBlbHNlIGlmICh0YWlsID09PSAxKSB7XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAyKSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPDwgNCkgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWzY0XTtcbiAgICByZXN1bHQgKz0gbWFwWzY0XTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzQmluYXJ5KG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICAnW29iamVjdCBVaW50OEFycmF5XSc7XG59XG5cbnZhciBiaW5hcnkgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6YmluYXJ5Jywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxCaW5hcnksXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbEJpbmFyeSxcbiAgcHJlZGljYXRlOiBpc0JpbmFyeSxcbiAgcmVwcmVzZW50OiByZXByZXNlbnRZYW1sQmluYXJ5XG59KTtcblxudmFyIF9oYXNPd25Qcm9wZXJ0eSQzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfdG9TdHJpbmckMiAgICAgICA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sT21hcChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgb2JqZWN0S2V5cyA9IFtdLCBpbmRleCwgbGVuZ3RoLCBwYWlyLCBwYWlyS2V5LCBwYWlySGFzS2V5LFxuICAgICAgb2JqZWN0ID0gZGF0YTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBwYWlyID0gb2JqZWN0W2luZGV4XTtcbiAgICBwYWlySGFzS2V5ID0gZmFsc2U7XG5cbiAgICBpZiAoX3RvU3RyaW5nJDIuY2FsbChwYWlyKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAocGFpcktleSBpbiBwYWlyKSB7XG4gICAgICBpZiAoX2hhc093blByb3BlcnR5JDMuY2FsbChwYWlyLCBwYWlyS2V5KSkge1xuICAgICAgICBpZiAoIXBhaXJIYXNLZXkpIHBhaXJIYXNLZXkgPSB0cnVlO1xuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhaXJIYXNLZXkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChvYmplY3RLZXlzLmluZGV4T2YocGFpcktleSkgPT09IC0xKSBvYmplY3RLZXlzLnB1c2gocGFpcktleSk7XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbE9tYXAoZGF0YSkge1xuICByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRhdGEgOiBbXTtcbn1cblxudmFyIG9tYXAgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6b21hcCcsIHtcbiAga2luZDogJ3NlcXVlbmNlJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxPbWFwLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxPbWFwXG59KTtcblxudmFyIF90b1N0cmluZyQxID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxQYWlycyhkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgaW5kZXgsIGxlbmd0aCwgcGFpciwga2V5cywgcmVzdWx0LFxuICAgICAgb2JqZWN0ID0gZGF0YTtcblxuICByZXN1bHQgPSBuZXcgQXJyYXkob2JqZWN0Lmxlbmd0aCk7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgcGFpciA9IG9iamVjdFtpbmRleF07XG5cbiAgICBpZiAoX3RvU3RyaW5nJDEuY2FsbChwYWlyKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHJldHVybiBmYWxzZTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhwYWlyKTtcblxuICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmVzdWx0W2luZGV4XSA9IFsga2V5c1swXSwgcGFpcltrZXlzWzBdXSBdO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxQYWlycyhkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gW107XG5cbiAgdmFyIGluZGV4LCBsZW5ndGgsIHBhaXIsIGtleXMsIHJlc3VsdCxcbiAgICAgIG9iamVjdCA9IGRhdGE7XG5cbiAgcmVzdWx0ID0gbmV3IEFycmF5KG9iamVjdC5sZW5ndGgpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXIgPSBvYmplY3RbaW5kZXhdO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHBhaXIpO1xuXG4gICAgcmVzdWx0W2luZGV4XSA9IFsga2V5c1swXSwgcGFpcltrZXlzWzBdXSBdO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIHBhaXJzID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnBhaXJzJywge1xuICBraW5kOiAnc2VxdWVuY2UnLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbFBhaXJzLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxQYWlyc1xufSk7XG5cbnZhciBfaGFzT3duUHJvcGVydHkkMiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sU2V0KGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBrZXksIG9iamVjdCA9IGRhdGE7XG5cbiAgZm9yIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eSQyLmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICBpZiAob2JqZWN0W2tleV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbFNldChkYXRhKSB7XG4gIHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IHt9O1xufVxuXG52YXIgc2V0ID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnNldCcsIHtcbiAga2luZDogJ21hcHBpbmcnLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbFNldCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sU2V0XG59KTtcblxudmFyIF9kZWZhdWx0ID0gY29yZS5leHRlbmQoe1xuICBpbXBsaWNpdDogW1xuICAgIHRpbWVzdGFtcCxcbiAgICBtZXJnZVxuICBdLFxuICBleHBsaWNpdDogW1xuICAgIGJpbmFyeSxcbiAgICBvbWFwLFxuICAgIHBhaXJzLFxuICAgIHNldFxuICBdXG59KTtcblxuLyplc2xpbnQtZGlzYWJsZSBtYXgtbGVuLG5vLXVzZS1iZWZvcmUtZGVmaW5lKi9cblxuXG5cblxuXG5cblxudmFyIF9oYXNPd25Qcm9wZXJ0eSQxID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuXG52YXIgQ09OVEVYVF9GTE9XX0lOICAgPSAxO1xudmFyIENPTlRFWFRfRkxPV19PVVQgID0gMjtcbnZhciBDT05URVhUX0JMT0NLX0lOICA9IDM7XG52YXIgQ09OVEVYVF9CTE9DS19PVVQgPSA0O1xuXG5cbnZhciBDSE9NUElOR19DTElQICA9IDE7XG52YXIgQ0hPTVBJTkdfU1RSSVAgPSAyO1xudmFyIENIT01QSU5HX0tFRVAgID0gMztcblxuXG52YXIgUEFUVEVSTl9OT05fUFJJTlRBQkxFICAgICAgICAgPSAvW1xceDAwLVxceDA4XFx4MEJcXHgwQ1xceDBFLVxceDFGXFx4N0YtXFx4ODRcXHg4Ni1cXHg5RlxcdUZGRkVcXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXS87XG52YXIgUEFUVEVSTl9OT05fQVNDSUlfTElORV9CUkVBS1MgPSAvW1xceDg1XFx1MjAyOFxcdTIwMjldLztcbnZhciBQQVRURVJOX0ZMT1dfSU5ESUNBVE9SUyAgICAgICA9IC9bLFxcW1xcXVxce1xcfV0vO1xudmFyIFBBVFRFUk5fVEFHX0hBTkRMRSAgICAgICAgICAgID0gL14oPzohfCEhfCFbYS16XFwtXSshKSQvaTtcbnZhciBQQVRURVJOX1RBR19VUkkgICAgICAgICAgICAgICA9IC9eKD86IXxbXixcXFtcXF1cXHtcXH1dKSg/OiVbMC05YS1mXXsyfXxbMC05YS16XFwtIztcXC9cXD86QCY9XFwrXFwkLF9cXC4hflxcKidcXChcXClcXFtcXF1dKSokL2k7XG5cblxuZnVuY3Rpb24gX2NsYXNzKG9iaikgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7IH1cblxuZnVuY3Rpb24gaXNfRU9MKGMpIHtcbiAgcmV0dXJuIChjID09PSAweDBBLyogTEYgKi8pIHx8IChjID09PSAweDBELyogQ1IgKi8pO1xufVxuXG5mdW5jdGlvbiBpc19XSElURV9TUEFDRShjKSB7XG4gIHJldHVybiAoYyA9PT0gMHgwOS8qIFRhYiAqLykgfHwgKGMgPT09IDB4MjAvKiBTcGFjZSAqLyk7XG59XG5cbmZ1bmN0aW9uIGlzX1dTX09SX0VPTChjKSB7XG4gIHJldHVybiAoYyA9PT0gMHgwOS8qIFRhYiAqLykgfHxcbiAgICAgICAgIChjID09PSAweDIwLyogU3BhY2UgKi8pIHx8XG4gICAgICAgICAoYyA9PT0gMHgwQS8qIExGICovKSB8fFxuICAgICAgICAgKGMgPT09IDB4MEQvKiBDUiAqLyk7XG59XG5cbmZ1bmN0aW9uIGlzX0ZMT1dfSU5ESUNBVE9SKGMpIHtcbiAgcmV0dXJuIGMgPT09IDB4MkMvKiAsICovIHx8XG4gICAgICAgICBjID09PSAweDVCLyogWyAqLyB8fFxuICAgICAgICAgYyA9PT0gMHg1RC8qIF0gKi8gfHxcbiAgICAgICAgIGMgPT09IDB4N0IvKiB7ICovIHx8XG4gICAgICAgICBjID09PSAweDdELyogfSAqLztcbn1cblxuZnVuY3Rpb24gZnJvbUhleENvZGUoYykge1xuICB2YXIgbGM7XG5cbiAgaWYgKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpIHtcbiAgICByZXR1cm4gYyAtIDB4MzA7XG4gIH1cblxuICAvKmVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UqL1xuICBsYyA9IGMgfCAweDIwO1xuXG4gIGlmICgoMHg2MS8qIGEgKi8gPD0gbGMpICYmIChsYyA8PSAweDY2LyogZiAqLykpIHtcbiAgICByZXR1cm4gbGMgLSAweDYxICsgMTA7XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZWRIZXhMZW4oYykge1xuICBpZiAoYyA9PT0gMHg3OC8qIHggKi8pIHsgcmV0dXJuIDI7IH1cbiAgaWYgKGMgPT09IDB4NzUvKiB1ICovKSB7IHJldHVybiA0OyB9XG4gIGlmIChjID09PSAweDU1LyogVSAqLykgeyByZXR1cm4gODsgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gZnJvbURlY2ltYWxDb2RlKGMpIHtcbiAgaWYgKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpIHtcbiAgICByZXR1cm4gYyAtIDB4MzA7XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIHNpbXBsZUVzY2FwZVNlcXVlbmNlKGMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4gIHJldHVybiAoYyA9PT0gMHgzMC8qIDAgKi8pID8gJ1xceDAwJyA6XG4gICAgICAgIChjID09PSAweDYxLyogYSAqLykgPyAnXFx4MDcnIDpcbiAgICAgICAgKGMgPT09IDB4NjIvKiBiICovKSA/ICdcXHgwOCcgOlxuICAgICAgICAoYyA9PT0gMHg3NC8qIHQgKi8pID8gJ1xceDA5JyA6XG4gICAgICAgIChjID09PSAweDA5LyogVGFiICovKSA/ICdcXHgwOScgOlxuICAgICAgICAoYyA9PT0gMHg2RS8qIG4gKi8pID8gJ1xceDBBJyA6XG4gICAgICAgIChjID09PSAweDc2LyogdiAqLykgPyAnXFx4MEInIDpcbiAgICAgICAgKGMgPT09IDB4NjYvKiBmICovKSA/ICdcXHgwQycgOlxuICAgICAgICAoYyA9PT0gMHg3Mi8qIHIgKi8pID8gJ1xceDBEJyA6XG4gICAgICAgIChjID09PSAweDY1LyogZSAqLykgPyAnXFx4MUInIDpcbiAgICAgICAgKGMgPT09IDB4MjAvKiBTcGFjZSAqLykgPyAnICcgOlxuICAgICAgICAoYyA9PT0gMHgyMi8qIFwiICovKSA/ICdcXHgyMicgOlxuICAgICAgICAoYyA9PT0gMHgyRi8qIC8gKi8pID8gJy8nIDpcbiAgICAgICAgKGMgPT09IDB4NUMvKiBcXCAqLykgPyAnXFx4NUMnIDpcbiAgICAgICAgKGMgPT09IDB4NEUvKiBOICovKSA/ICdcXHg4NScgOlxuICAgICAgICAoYyA9PT0gMHg1Ri8qIF8gKi8pID8gJ1xceEEwJyA6XG4gICAgICAgIChjID09PSAweDRDLyogTCAqLykgPyAnXFx1MjAyOCcgOlxuICAgICAgICAoYyA9PT0gMHg1MC8qIFAgKi8pID8gJ1xcdTIwMjknIDogJyc7XG59XG5cbmZ1bmN0aW9uIGNoYXJGcm9tQ29kZXBvaW50KGMpIHtcbiAgaWYgKGMgPD0gMHhGRkZGKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gIH1cbiAgLy8gRW5jb2RlIFVURi0xNiBzdXJyb2dhdGUgcGFpclxuICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VVEYtMTYjQ29kZV9wb2ludHNfVS4yQjAxMDAwMF90b19VLjJCMTBGRkZGXG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICgoYyAtIDB4MDEwMDAwKSA+PiAxMCkgKyAweEQ4MDAsXG4gICAgKChjIC0gMHgwMTAwMDApICYgMHgwM0ZGKSArIDB4REMwMFxuICApO1xufVxuXG52YXIgc2ltcGxlRXNjYXBlQ2hlY2sgPSBuZXcgQXJyYXkoMjU2KTsgLy8gaW50ZWdlciwgZm9yIGZhc3QgYWNjZXNzXG52YXIgc2ltcGxlRXNjYXBlTWFwID0gbmV3IEFycmF5KDI1Nik7XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gIHNpbXBsZUVzY2FwZUNoZWNrW2ldID0gc2ltcGxlRXNjYXBlU2VxdWVuY2UoaSkgPyAxIDogMDtcbiAgc2ltcGxlRXNjYXBlTWFwW2ldID0gc2ltcGxlRXNjYXBlU2VxdWVuY2UoaSk7XG59XG5cblxuZnVuY3Rpb24gU3RhdGUkMShpbnB1dCwgb3B0aW9ucykge1xuICB0aGlzLmlucHV0ID0gaW5wdXQ7XG5cbiAgdGhpcy5maWxlbmFtZSAgPSBvcHRpb25zWydmaWxlbmFtZSddICB8fCBudWxsO1xuICB0aGlzLnNjaGVtYSAgICA9IG9wdGlvbnNbJ3NjaGVtYSddICAgIHx8IF9kZWZhdWx0O1xuICB0aGlzLm9uV2FybmluZyA9IG9wdGlvbnNbJ29uV2FybmluZyddIHx8IG51bGw7XG4gIC8vIChIaWRkZW4pIFJlbW92ZT8gbWFrZXMgdGhlIGxvYWRlciB0byBleHBlY3QgWUFNTCAxLjEgZG9jdW1lbnRzXG4gIC8vIGlmIHN1Y2ggZG9jdW1lbnRzIGhhdmUgbm8gZXhwbGljaXQgJVlBTUwgZGlyZWN0aXZlXG4gIHRoaXMubGVnYWN5ICAgID0gb3B0aW9uc1snbGVnYWN5J10gICAgfHwgZmFsc2U7XG5cbiAgdGhpcy5qc29uICAgICAgPSBvcHRpb25zWydqc29uJ10gICAgICB8fCBmYWxzZTtcbiAgdGhpcy5saXN0ZW5lciAgPSBvcHRpb25zWydsaXN0ZW5lciddICB8fCBudWxsO1xuXG4gIHRoaXMuaW1wbGljaXRUeXBlcyA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkSW1wbGljaXQ7XG4gIHRoaXMudHlwZU1hcCAgICAgICA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkVHlwZU1hcDtcblxuICB0aGlzLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG4gIHRoaXMucG9zaXRpb24gICA9IDA7XG4gIHRoaXMubGluZSAgICAgICA9IDA7XG4gIHRoaXMubGluZVN0YXJ0ICA9IDA7XG4gIHRoaXMubGluZUluZGVudCA9IDA7XG5cbiAgLy8gcG9zaXRpb24gb2YgZmlyc3QgbGVhZGluZyB0YWIgaW4gdGhlIGN1cnJlbnQgbGluZSxcbiAgLy8gdXNlZCB0byBtYWtlIHN1cmUgdGhlcmUgYXJlIG5vIHRhYnMgaW4gdGhlIGluZGVudGF0aW9uXG4gIHRoaXMuZmlyc3RUYWJJbkxpbmUgPSAtMTtcblxuICB0aGlzLmRvY3VtZW50cyA9IFtdO1xuXG4gIC8qXG4gIHRoaXMudmVyc2lvbjtcbiAgdGhpcy5jaGVja0xpbmVCcmVha3M7XG4gIHRoaXMudGFnTWFwO1xuICB0aGlzLmFuY2hvck1hcDtcbiAgdGhpcy50YWc7XG4gIHRoaXMuYW5jaG9yO1xuICB0aGlzLmtpbmQ7XG4gIHRoaXMucmVzdWx0OyovXG5cbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUVycm9yKHN0YXRlLCBtZXNzYWdlKSB7XG4gIHZhciBtYXJrID0ge1xuICAgIG5hbWU6ICAgICBzdGF0ZS5maWxlbmFtZSxcbiAgICBidWZmZXI6ICAgc3RhdGUuaW5wdXQuc2xpY2UoMCwgLTEpLCAvLyBvbWl0IHRyYWlsaW5nIFxcMFxuICAgIHBvc2l0aW9uOiBzdGF0ZS5wb3NpdGlvbixcbiAgICBsaW5lOiAgICAgc3RhdGUubGluZSxcbiAgICBjb2x1bW46ICAgc3RhdGUucG9zaXRpb24gLSBzdGF0ZS5saW5lU3RhcnRcbiAgfTtcblxuICBtYXJrLnNuaXBwZXQgPSBzbmlwcGV0KG1hcmspO1xuXG4gIHJldHVybiBuZXcgZXhjZXB0aW9uKG1lc3NhZ2UsIG1hcmspO1xufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKHN0YXRlLCBtZXNzYWdlKSB7XG4gIHRocm93IGdlbmVyYXRlRXJyb3Ioc3RhdGUsIG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiB0aHJvd1dhcm5pbmcoc3RhdGUsIG1lc3NhZ2UpIHtcbiAgaWYgKHN0YXRlLm9uV2FybmluZykge1xuICAgIHN0YXRlLm9uV2FybmluZy5jYWxsKG51bGwsIGdlbmVyYXRlRXJyb3Ioc3RhdGUsIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5cbnZhciBkaXJlY3RpdmVIYW5kbGVycyA9IHtcblxuICBZQU1MOiBmdW5jdGlvbiBoYW5kbGVZYW1sRGlyZWN0aXZlKHN0YXRlLCBuYW1lLCBhcmdzKSB7XG5cbiAgICB2YXIgbWF0Y2gsIG1ham9yLCBtaW5vcjtcblxuICAgIGlmIChzdGF0ZS52ZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZHVwbGljYXRpb24gb2YgJVlBTUwgZGlyZWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnWUFNTCBkaXJlY3RpdmUgYWNjZXB0cyBleGFjdGx5IG9uZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIG1hdGNoID0gL14oWzAtOV0rKVxcLihbMC05XSspJC8uZXhlYyhhcmdzWzBdKTtcblxuICAgIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2lsbC1mb3JtZWQgYXJndW1lbnQgb2YgdGhlIFlBTUwgZGlyZWN0aXZlJyk7XG4gICAgfVxuXG4gICAgbWFqb3IgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuICAgIG1pbm9yID0gcGFyc2VJbnQobWF0Y2hbMl0sIDEwKTtcblxuICAgIGlmIChtYWpvciAhPT0gMSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuYWNjZXB0YWJsZSBZQU1MIHZlcnNpb24gb2YgdGhlIGRvY3VtZW50Jyk7XG4gICAgfVxuXG4gICAgc3RhdGUudmVyc2lvbiA9IGFyZ3NbMF07XG4gICAgc3RhdGUuY2hlY2tMaW5lQnJlYWtzID0gKG1pbm9yIDwgMik7XG5cbiAgICBpZiAobWlub3IgIT09IDEgJiYgbWlub3IgIT09IDIpIHtcbiAgICAgIHRocm93V2FybmluZyhzdGF0ZSwgJ3Vuc3VwcG9ydGVkIFlBTUwgdmVyc2lvbiBvZiB0aGUgZG9jdW1lbnQnKTtcbiAgICB9XG4gIH0sXG5cbiAgVEFHOiBmdW5jdGlvbiBoYW5kbGVUYWdEaXJlY3RpdmUoc3RhdGUsIG5hbWUsIGFyZ3MpIHtcblxuICAgIHZhciBoYW5kbGUsIHByZWZpeDtcblxuICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gMikge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ1RBRyBkaXJlY3RpdmUgYWNjZXB0cyBleGFjdGx5IHR3byBhcmd1bWVudHMnKTtcbiAgICB9XG5cbiAgICBoYW5kbGUgPSBhcmdzWzBdO1xuICAgIHByZWZpeCA9IGFyZ3NbMV07XG5cbiAgICBpZiAoIVBBVFRFUk5fVEFHX0hBTkRMRS50ZXN0KGhhbmRsZSkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdpbGwtZm9ybWVkIHRhZyBoYW5kbGUgKGZpcnN0IGFyZ3VtZW50KSBvZiB0aGUgVEFHIGRpcmVjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmIChfaGFzT3duUHJvcGVydHkkMS5jYWxsKHN0YXRlLnRhZ01hcCwgaGFuZGxlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RoZXJlIGlzIGEgcHJldmlvdXNseSBkZWNsYXJlZCBzdWZmaXggZm9yIFwiJyArIGhhbmRsZSArICdcIiB0YWcgaGFuZGxlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFQQVRURVJOX1RBR19VUkkudGVzdChwcmVmaXgpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaWxsLWZvcm1lZCB0YWcgcHJlZml4IChzZWNvbmQgYXJndW1lbnQpIG9mIHRoZSBUQUcgZGlyZWN0aXZlJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHByZWZpeCA9IGRlY29kZVVSSUNvbXBvbmVudChwcmVmaXgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhZyBwcmVmaXggaXMgbWFsZm9ybWVkOiAnICsgcHJlZml4KTtcbiAgICB9XG5cbiAgICBzdGF0ZS50YWdNYXBbaGFuZGxlXSA9IHByZWZpeDtcbiAgfVxufTtcblxuXG5mdW5jdGlvbiBjYXB0dXJlU2VnbWVudChzdGF0ZSwgc3RhcnQsIGVuZCwgY2hlY2tKc29uKSB7XG4gIHZhciBfcG9zaXRpb24sIF9sZW5ndGgsIF9jaGFyYWN0ZXIsIF9yZXN1bHQ7XG5cbiAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgX3Jlc3VsdCA9IHN0YXRlLmlucHV0LnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgaWYgKGNoZWNrSnNvbikge1xuICAgICAgZm9yIChfcG9zaXRpb24gPSAwLCBfbGVuZ3RoID0gX3Jlc3VsdC5sZW5ndGg7IF9wb3NpdGlvbiA8IF9sZW5ndGg7IF9wb3NpdGlvbiArPSAxKSB7XG4gICAgICAgIF9jaGFyYWN0ZXIgPSBfcmVzdWx0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uKTtcbiAgICAgICAgaWYgKCEoX2NoYXJhY3RlciA9PT0gMHgwOSB8fFxuICAgICAgICAgICAgICAoMHgyMCA8PSBfY2hhcmFjdGVyICYmIF9jaGFyYWN0ZXIgPD0gMHgxMEZGRkYpKSkge1xuICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdleHBlY3RlZCB2YWxpZCBKU09OIGNoYXJhY3RlcicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChQQVRURVJOX05PTl9QUklOVEFCTEUudGVzdChfcmVzdWx0KSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RoZSBzdHJlYW0gY29udGFpbnMgbm9uLXByaW50YWJsZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuXG4gICAgc3RhdGUucmVzdWx0ICs9IF9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VNYXBwaW5ncyhzdGF0ZSwgZGVzdGluYXRpb24sIHNvdXJjZSwgb3ZlcnJpZGFibGVLZXlzKSB7XG4gIHZhciBzb3VyY2VLZXlzLCBrZXksIGluZGV4LCBxdWFudGl0eTtcblxuICBpZiAoIWNvbW1vbi5pc09iamVjdChzb3VyY2UpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2Nhbm5vdCBtZXJnZSBtYXBwaW5nczsgdGhlIHByb3ZpZGVkIHNvdXJjZSBvYmplY3QgaXMgdW5hY2NlcHRhYmxlJyk7XG4gIH1cblxuICBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICBmb3IgKGluZGV4ID0gMCwgcXVhbnRpdHkgPSBzb3VyY2VLZXlzLmxlbmd0aDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXggKz0gMSkge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaW5kZXhdO1xuXG4gICAgaWYgKCFfaGFzT3duUHJvcGVydHkkMS5jYWxsKGRlc3RpbmF0aW9uLCBrZXkpKSB7XG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV07XG4gICAgICBvdmVycmlkYWJsZUtleXNba2V5XSA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCB2YWx1ZU5vZGUsXG4gIHN0YXJ0TGluZSwgc3RhcnRMaW5lU3RhcnQsIHN0YXJ0UG9zKSB7XG5cbiAgdmFyIGluZGV4LCBxdWFudGl0eTtcblxuICAvLyBUaGUgb3V0cHV0IGlzIGEgcGxhaW4gb2JqZWN0IGhlcmUsIHNvIGtleXMgY2FuIG9ubHkgYmUgc3RyaW5ncy5cbiAgLy8gV2UgbmVlZCB0byBjb252ZXJ0IGtleU5vZGUgdG8gYSBzdHJpbmcsIGJ1dCBkb2luZyBzbyBjYW4gaGFuZyB0aGUgcHJvY2Vzc1xuICAvLyAoZGVlcGx5IG5lc3RlZCBhcnJheXMgdGhhdCBleHBsb2RlIGV4cG9uZW50aWFsbHkgdXNpbmcgYWxpYXNlcykuXG4gIGlmIChBcnJheS5pc0FycmF5KGtleU5vZGUpKSB7XG4gICAga2V5Tm9kZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGtleU5vZGUpO1xuXG4gICAgZm9yIChpbmRleCA9IDAsIHF1YW50aXR5ID0ga2V5Tm9kZS5sZW5ndGg7IGluZGV4IDwgcXVhbnRpdHk7IGluZGV4ICs9IDEpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleU5vZGVbaW5kZXhdKSkge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbmVzdGVkIGFycmF5cyBhcmUgbm90IHN1cHBvcnRlZCBpbnNpZGUga2V5cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGtleU5vZGUgPT09ICdvYmplY3QnICYmIF9jbGFzcyhrZXlOb2RlW2luZGV4XSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgIGtleU5vZGVbaW5kZXhdID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQXZvaWQgY29kZSBleGVjdXRpb24gaW4gbG9hZCgpIHZpYSB0b1N0cmluZyBwcm9wZXJ0eVxuICAvLyAoc3RpbGwgdXNlIGl0cyBvd24gdG9TdHJpbmcgZm9yIGFycmF5cywgdGltZXN0YW1wcyxcbiAgLy8gYW5kIHdoYXRldmVyIHVzZXIgc2NoZW1hIGV4dGVuc2lvbnMgaGFwcGVuIHRvIGhhdmUgQEB0b1N0cmluZ1RhZylcbiAgaWYgKHR5cGVvZiBrZXlOb2RlID09PSAnb2JqZWN0JyAmJiBfY2xhc3Moa2V5Tm9kZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAga2V5Tm9kZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICB9XG5cblxuICBrZXlOb2RlID0gU3RyaW5nKGtleU5vZGUpO1xuXG4gIGlmIChfcmVzdWx0ID09PSBudWxsKSB7XG4gICAgX3Jlc3VsdCA9IHt9O1xuICB9XG5cbiAgaWYgKGtleVRhZyA9PT0gJ3RhZzp5YW1sLm9yZywyMDAyOm1lcmdlJykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlTm9kZSkpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBxdWFudGl0eSA9IHZhbHVlTm9kZS5sZW5ndGg7IGluZGV4IDwgcXVhbnRpdHk7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgbWVyZ2VNYXBwaW5ncyhzdGF0ZSwgX3Jlc3VsdCwgdmFsdWVOb2RlW2luZGV4XSwgb3ZlcnJpZGFibGVLZXlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVyZ2VNYXBwaW5ncyhzdGF0ZSwgX3Jlc3VsdCwgdmFsdWVOb2RlLCBvdmVycmlkYWJsZUtleXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoIXN0YXRlLmpzb24gJiZcbiAgICAgICAgIV9oYXNPd25Qcm9wZXJ0eSQxLmNhbGwob3ZlcnJpZGFibGVLZXlzLCBrZXlOb2RlKSAmJlxuICAgICAgICBfaGFzT3duUHJvcGVydHkkMS5jYWxsKF9yZXN1bHQsIGtleU5vZGUpKSB7XG4gICAgICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lIHx8IHN0YXRlLmxpbmU7XG4gICAgICBzdGF0ZS5saW5lU3RhcnQgPSBzdGFydExpbmVTdGFydCB8fCBzdGF0ZS5saW5lU3RhcnQ7XG4gICAgICBzdGF0ZS5wb3NpdGlvbiA9IHN0YXJ0UG9zIHx8IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0ZWQgbWFwcGluZyBrZXknKTtcbiAgICB9XG5cbiAgICAvLyB1c2VkIGZvciB0aGlzIHNwZWNpZmljIGtleSBvbmx5IGJlY2F1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIHNsb3dcbiAgICBpZiAoa2V5Tm9kZSA9PT0gJ19fcHJvdG9fXycpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfcmVzdWx0LCBrZXlOb2RlLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZU5vZGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBfcmVzdWx0W2tleU5vZGVdID0gdmFsdWVOb2RlO1xuICAgIH1cbiAgICBkZWxldGUgb3ZlcnJpZGFibGVLZXlzW2tleU5vZGVdO1xuICB9XG5cbiAgcmV0dXJuIF9yZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRMaW5lQnJlYWsoc3RhdGUpIHtcbiAgdmFyIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoID09PSAweDBBLyogTEYgKi8pIHtcbiAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICB9IGVsc2UgaWYgKGNoID09PSAweDBELyogQ1IgKi8pIHtcbiAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgIGlmIChzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSA9PT0gMHgwQS8qIExGICovKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYSBsaW5lIGJyZWFrIGlzIGV4cGVjdGVkJyk7XG4gIH1cblxuICBzdGF0ZS5saW5lICs9IDE7XG4gIHN0YXRlLmxpbmVTdGFydCA9IHN0YXRlLnBvc2l0aW9uO1xuICBzdGF0ZS5maXJzdFRhYkluTGluZSA9IC0xO1xufVxuXG5mdW5jdGlvbiBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBhbGxvd0NvbW1lbnRzLCBjaGVja0luZGVudCkge1xuICB2YXIgbGluZUJyZWFrcyA9IDAsXG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgIGlmIChjaCA9PT0gMHgwOS8qIFRhYiAqLyAmJiBzdGF0ZS5maXJzdFRhYkluTGluZSA9PT0gLTEpIHtcbiAgICAgICAgc3RhdGUuZmlyc3RUYWJJbkxpbmUgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoYWxsb3dDb21tZW50cyAmJiBjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgIGRvIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfSB3aGlsZSAoY2ggIT09IDB4MEEvKiBMRiAqLyAmJiBjaCAhPT0gMHgwRC8qIENSICovICYmIGNoICE9PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgcmVhZExpbmVCcmVhayhzdGF0ZSk7XG5cbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG4gICAgICBsaW5lQnJlYWtzKys7XG4gICAgICBzdGF0ZS5saW5lSW5kZW50ID0gMDtcblxuICAgICAgd2hpbGUgKGNoID09PSAweDIwLyogU3BhY2UgKi8pIHtcbiAgICAgICAgc3RhdGUubGluZUluZGVudCsrO1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjaGVja0luZGVudCAhPT0gLTEgJiYgbGluZUJyZWFrcyAhPT0gMCAmJiBzdGF0ZS5saW5lSW5kZW50IDwgY2hlY2tJbmRlbnQpIHtcbiAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICdkZWZpY2llbnQgaW5kZW50YXRpb24nKTtcbiAgfVxuXG4gIHJldHVybiBsaW5lQnJlYWtzO1xufVxuXG5mdW5jdGlvbiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbik7XG5cbiAgLy8gQ29uZGl0aW9uIHN0YXRlLnBvc2l0aW9uID09PSBzdGF0ZS5saW5lU3RhcnQgaXMgdGVzdGVkXG4gIC8vIGluIHBhcmVudCBvbiBlYWNoIGNhbGwsIGZvciBlZmZpY2llbmN5LiBObyBuZWVkcyB0byB0ZXN0IGhlcmUgYWdhaW4uXG4gIGlmICgoY2ggPT09IDB4MkQvKiAtICovIHx8IGNoID09PSAweDJFLyogLiAqLykgJiZcbiAgICAgIGNoID09PSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbiArIDEpICYmXG4gICAgICBjaCA9PT0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24gKyAyKSkge1xuXG4gICAgX3Bvc2l0aW9uICs9IDM7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uKTtcblxuICAgIGlmIChjaCA9PT0gMCB8fCBpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRm9sZGVkTGluZXMoc3RhdGUsIGNvdW50KSB7XG4gIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHN0YXRlLnJlc3VsdCArPSAnICc7XG4gIH0gZWxzZSBpZiAoY291bnQgPiAxKSB7XG4gICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGNvdW50IC0gMSk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiByZWFkUGxhaW5TY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQsIHdpdGhpbkZsb3dDb2xsZWN0aW9uKSB7XG4gIHZhciBwcmVjZWRpbmcsXG4gICAgICBmb2xsb3dpbmcsXG4gICAgICBjYXB0dXJlU3RhcnQsXG4gICAgICBjYXB0dXJlRW5kLFxuICAgICAgaGFzUGVuZGluZ0NvbnRlbnQsXG4gICAgICBfbGluZSxcbiAgICAgIF9saW5lU3RhcnQsXG4gICAgICBfbGluZUluZGVudCxcbiAgICAgIF9raW5kID0gc3RhdGUua2luZCxcbiAgICAgIF9yZXN1bHQgPSBzdGF0ZS5yZXN1bHQsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChpc19XU19PUl9FT0woY2gpICAgICAgfHxcbiAgICAgIGlzX0ZMT1dfSU5ESUNBVE9SKGNoKSB8fFxuICAgICAgY2ggPT09IDB4MjMvKiAjICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyNi8qICYgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDJBLyogKiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjEvKiAhICovICAgIHx8XG4gICAgICBjaCA9PT0gMHg3Qy8qIHwgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDNFLyogPiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjcvKiAnICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyMi8qIFwiICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyNS8qICUgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDQwLyogQCAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4NjAvKiBgICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGNoID09PSAweDNGLyogPyAqLyB8fCBjaCA9PT0gMHgyRC8qIC0gKi8pIHtcbiAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAoaXNfV1NfT1JfRU9MKGZvbGxvd2luZykgfHxcbiAgICAgICAgd2l0aGluRmxvd0NvbGxlY3Rpb24gJiYgaXNfRkxPV19JTkRJQ0FUT1IoZm9sbG93aW5nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG4gIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgaGFzUGVuZGluZ0NvbnRlbnQgPSBmYWxzZTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBpZiAoY2ggPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICAgIGlmIChpc19XU19PUl9FT0woZm9sbG93aW5nKSB8fFxuICAgICAgICAgIHdpdGhpbkZsb3dDb2xsZWN0aW9uICYmIGlzX0ZMT1dfSU5ESUNBVE9SKGZvbGxvd2luZykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgcHJlY2VkaW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiAtIDEpO1xuXG4gICAgICBpZiAoaXNfV1NfT1JfRU9MKHByZWNlZGluZykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHx8XG4gICAgICAgICAgICAgICB3aXRoaW5GbG93Q29sbGVjdGlvbiAmJiBpc19GTE9XX0lORElDQVRPUihjaCkpIHtcbiAgICAgIGJyZWFrO1xuXG4gICAgfSBlbHNlIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBfbGluZSA9IHN0YXRlLmxpbmU7XG4gICAgICBfbGluZVN0YXJ0ID0gc3RhdGUubGluZVN0YXJ0O1xuICAgICAgX2xpbmVJbmRlbnQgPSBzdGF0ZS5saW5lSW5kZW50O1xuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgZmFsc2UsIC0xKTtcblxuICAgICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPj0gbm9kZUluZGVudCkge1xuICAgICAgICBoYXNQZW5kaW5nQ29udGVudCA9IHRydWU7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucG9zaXRpb24gPSBjYXB0dXJlRW5kO1xuICAgICAgICBzdGF0ZS5saW5lID0gX2xpbmU7XG4gICAgICAgIHN0YXRlLmxpbmVTdGFydCA9IF9saW5lU3RhcnQ7XG4gICAgICAgIHN0YXRlLmxpbmVJbmRlbnQgPSBfbGluZUluZGVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1BlbmRpbmdDb250ZW50KSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCBmYWxzZSk7XG4gICAgICB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBzdGF0ZS5saW5lIC0gX2xpbmUpO1xuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgaGFzUGVuZGluZ0NvbnRlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uICsgMTtcbiAgICB9XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIH1cblxuICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCBmYWxzZSk7XG5cbiAgaWYgKHN0YXRlLnJlc3VsdCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9IF9raW5kO1xuICBzdGF0ZS5yZXN1bHQgPSBfcmVzdWx0O1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlYWRTaW5nbGVRdW90ZWRTY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIGNoLFxuICAgICAgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDI3LyogJyAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG4gIHN0YXRlLnBvc2l0aW9uKys7XG4gIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoKGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikpICE9PSAwKSB7XG4gICAgaWYgKGNoID09PSAweDI3LyogJyAqLykge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIHRydWUpO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICBpZiAoY2ggPT09IDB4MjcvKiAnICovKSB7XG4gICAgICAgIGNhcHR1cmVTdGFydCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgICBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgdHJ1ZSk7XG4gICAgICB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgbm9kZUluZGVudCkpO1xuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgZG9jdW1lbnQgd2l0aGluIGEgc2luZ2xlIHF1b3RlZCBzY2FsYXInKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIHNpbmdsZSBxdW90ZWQgc2NhbGFyJyk7XG59XG5cbmZ1bmN0aW9uIHJlYWREb3VibGVRdW90ZWRTY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIGNhcHR1cmVTdGFydCxcbiAgICAgIGNhcHR1cmVFbmQsXG4gICAgICBoZXhMZW5ndGgsXG4gICAgICBoZXhSZXN1bHQsXG4gICAgICB0bXAsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyMi8qIFwiICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9ICdzY2FsYXInO1xuICBzdGF0ZS5yZXN1bHQgPSAnJztcbiAgc3RhdGUucG9zaXRpb24rKztcbiAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlICgoY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSkgIT09IDApIHtcbiAgICBpZiAoY2ggPT09IDB4MjIvKiBcIiAqLykge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIHRydWUpO1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHg1Qy8qIFxcICovKSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBzdGF0ZS5wb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgIGlmIChpc19FT0woY2gpKSB7XG4gICAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCBub2RlSW5kZW50KTtcblxuICAgICAgICAvLyBUT0RPOiByZXdvcmsgdG8gaW5saW5lIGZuIHdpdGggbm8gdHlwZSBjYXN0P1xuICAgICAgfSBlbHNlIGlmIChjaCA8IDI1NiAmJiBzaW1wbGVFc2NhcGVDaGVja1tjaF0pIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IHNpbXBsZUVzY2FwZU1hcFtjaF07XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG5cbiAgICAgIH0gZWxzZSBpZiAoKHRtcCA9IGVzY2FwZWRIZXhMZW4oY2gpKSA+IDApIHtcbiAgICAgICAgaGV4TGVuZ3RoID0gdG1wO1xuICAgICAgICBoZXhSZXN1bHQgPSAwO1xuXG4gICAgICAgIGZvciAoOyBoZXhMZW5ndGggPiAwOyBoZXhMZW5ndGgtLSkge1xuICAgICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICAgIGlmICgodG1wID0gZnJvbUhleENvZGUoY2gpKSA+PSAwKSB7XG4gICAgICAgICAgICBoZXhSZXN1bHQgPSAoaGV4UmVzdWx0IDw8IDQpICsgdG1wO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdleHBlY3RlZCBoZXhhZGVjaW1hbCBjaGFyYWN0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY2hhckZyb21Db2RlcG9pbnQoaGV4UmVzdWx0KTtcblxuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5rbm93biBlc2NhcGUgc2VxdWVuY2UnKTtcbiAgICAgIH1cblxuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgfSBlbHNlIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCB0cnVlKTtcbiAgICAgIHdyaXRlRm9sZGVkTGluZXMoc3RhdGUsIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCBub2RlSW5kZW50KSk7XG4gICAgICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG5cbiAgICB9IGVsc2UgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBzdGF0ZS5saW5lU3RhcnQgJiYgdGVzdERvY3VtZW50U2VwYXJhdG9yKHN0YXRlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBkb2N1bWVudCB3aXRoaW4gYSBkb3VibGUgcXVvdGVkIHNjYWxhcicpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBzdHJlYW0gd2l0aGluIGEgZG91YmxlIHF1b3RlZCBzY2FsYXInKTtcbn1cblxuZnVuY3Rpb24gcmVhZEZsb3dDb2xsZWN0aW9uKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciByZWFkTmV4dCA9IHRydWUsXG4gICAgICBfbGluZSxcbiAgICAgIF9saW5lU3RhcnQsXG4gICAgICBfcG9zLFxuICAgICAgX3RhZyAgICAgPSBzdGF0ZS50YWcsXG4gICAgICBfcmVzdWx0LFxuICAgICAgX2FuY2hvciAgPSBzdGF0ZS5hbmNob3IsXG4gICAgICBmb2xsb3dpbmcsXG4gICAgICB0ZXJtaW5hdG9yLFxuICAgICAgaXNQYWlyLFxuICAgICAgaXNFeHBsaWNpdFBhaXIsXG4gICAgICBpc01hcHBpbmcsXG4gICAgICBvdmVycmlkYWJsZUtleXMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAga2V5Tm9kZSxcbiAgICAgIGtleVRhZyxcbiAgICAgIHZhbHVlTm9kZSxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoID09PSAweDVCLyogWyAqLykge1xuICAgIHRlcm1pbmF0b3IgPSAweDVEOy8qIF0gKi9cbiAgICBpc01hcHBpbmcgPSBmYWxzZTtcbiAgICBfcmVzdWx0ID0gW107XG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4N0IvKiB7ICovKSB7XG4gICAgdGVybWluYXRvciA9IDB4N0Q7LyogfSAqL1xuICAgIGlzTWFwcGluZyA9IHRydWU7XG4gICAgX3Jlc3VsdCA9IHt9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IF9yZXN1bHQ7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSB0ZXJtaW5hdG9yKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgc3RhdGUudGFnID0gX3RhZztcbiAgICAgIHN0YXRlLmFuY2hvciA9IF9hbmNob3I7XG4gICAgICBzdGF0ZS5raW5kID0gaXNNYXBwaW5nID8gJ21hcHBpbmcnIDogJ3NlcXVlbmNlJztcbiAgICAgIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFyZWFkTmV4dCkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ21pc3NlZCBjb21tYSBiZXR3ZWVuIGZsb3cgY29sbGVjdGlvbiBlbnRyaWVzJyk7XG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHgyQy8qICwgKi8pIHtcbiAgICAgIC8vIFwiZmxvdyBjb2xsZWN0aW9uIGVudHJpZXMgY2FuIG5ldmVyIGJlIGNvbXBsZXRlbHkgZW1wdHlcIiwgYXMgcGVyIFlBTUwgMS4yLCBzZWN0aW9uIDcuNFxuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgXCJleHBlY3RlZCB0aGUgbm9kZSBjb250ZW50LCBidXQgZm91bmQgJywnXCIpO1xuICAgIH1cblxuICAgIGtleVRhZyA9IGtleU5vZGUgPSB2YWx1ZU5vZGUgPSBudWxsO1xuICAgIGlzUGFpciA9IGlzRXhwbGljaXRQYWlyID0gZmFsc2U7XG5cbiAgICBpZiAoY2ggPT09IDB4M0YvKiA/ICovKSB7XG4gICAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICAgIGlmIChpc19XU19PUl9FT0woZm9sbG93aW5nKSkge1xuICAgICAgICBpc1BhaXIgPSBpc0V4cGxpY2l0UGFpciA9IHRydWU7XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9saW5lID0gc3RhdGUubGluZTsgLy8gU2F2ZSB0aGUgY3VycmVudCBsaW5lLlxuICAgIF9saW5lU3RhcnQgPSBzdGF0ZS5saW5lU3RhcnQ7XG4gICAgX3BvcyA9IHN0YXRlLnBvc2l0aW9uO1xuICAgIGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0ZMT1dfSU4sIGZhbHNlLCB0cnVlKTtcbiAgICBrZXlUYWcgPSBzdGF0ZS50YWc7XG4gICAga2V5Tm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoKGlzRXhwbGljaXRQYWlyIHx8IHN0YXRlLmxpbmUgPT09IF9saW5lKSAmJiBjaCA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgIGlzUGFpciA9IHRydWU7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcbiAgICAgIGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0ZMT1dfSU4sIGZhbHNlLCB0cnVlKTtcbiAgICAgIHZhbHVlTm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoaXNNYXBwaW5nKSB7XG4gICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlLCBfbGluZSwgX2xpbmVTdGFydCwgX3Bvcyk7XG4gICAgfSBlbHNlIGlmIChpc1BhaXIpIHtcbiAgICAgIF9yZXN1bHQucHVzaChzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBudWxsLCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlLCBfbGluZSwgX2xpbmVTdGFydCwgX3BvcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfcmVzdWx0LnB1c2goa2V5Tm9kZSk7XG4gICAgfVxuXG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSAweDJDLyogLCAqLykge1xuICAgICAgcmVhZE5leHQgPSB0cnVlO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWFkTmV4dCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIGZsb3cgY29sbGVjdGlvbicpO1xufVxuXG5mdW5jdGlvbiByZWFkQmxvY2tTY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIGNhcHR1cmVTdGFydCxcbiAgICAgIGZvbGRpbmcsXG4gICAgICBjaG9tcGluZyAgICAgICA9IENIT01QSU5HX0NMSVAsXG4gICAgICBkaWRSZWFkQ29udGVudCA9IGZhbHNlLFxuICAgICAgZGV0ZWN0ZWRJbmRlbnQgPSBmYWxzZSxcbiAgICAgIHRleHRJbmRlbnQgICAgID0gbm9kZUluZGVudCxcbiAgICAgIGVtcHR5TGluZXMgICAgID0gMCxcbiAgICAgIGF0TW9yZUluZGVudGVkID0gZmFsc2UsXG4gICAgICB0bXAsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHg3Qy8qIHwgKi8pIHtcbiAgICBmb2xkaW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4M0UvKiA+ICovKSB7XG4gICAgZm9sZGluZyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9ICdzY2FsYXInO1xuICBzdGF0ZS5yZXN1bHQgPSAnJztcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IDB4MkIvKiArICovIHx8IGNoID09PSAweDJELyogLSAqLykge1xuICAgICAgaWYgKENIT01QSU5HX0NMSVAgPT09IGNob21waW5nKSB7XG4gICAgICAgIGNob21waW5nID0gKGNoID09PSAweDJCLyogKyAqLykgPyBDSE9NUElOR19LRUVQIDogQ0hPTVBJTkdfU1RSSVA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAncmVwZWF0IG9mIGEgY2hvbXBpbmcgbW9kZSBpZGVudGlmaWVyJyk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKCh0bXAgPSBmcm9tRGVjaW1hbENvZGUoY2gpKSA+PSAwKSB7XG4gICAgICBpZiAodG1wID09PSAwKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdiYWQgZXhwbGljaXQgaW5kZW50YXRpb24gd2lkdGggb2YgYSBibG9jayBzY2FsYXI7IGl0IGNhbm5vdCBiZSBsZXNzIHRoYW4gb25lJyk7XG4gICAgICB9IGVsc2UgaWYgKCFkZXRlY3RlZEluZGVudCkge1xuICAgICAgICB0ZXh0SW5kZW50ID0gbm9kZUluZGVudCArIHRtcCAtIDE7XG4gICAgICAgIGRldGVjdGVkSW5kZW50ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdyZXBlYXQgb2YgYW4gaW5kZW50YXRpb24gd2lkdGggaWRlbnRpZmllcicpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICBkbyB7IGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTsgfVxuICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpO1xuXG4gICAgaWYgKGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICAgIHdoaWxlICghaXNfRU9MKGNoKSAmJiAoY2ggIT09IDApKTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICByZWFkTGluZUJyZWFrKHN0YXRlKTtcbiAgICBzdGF0ZS5saW5lSW5kZW50ID0gMDtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICB3aGlsZSAoKCFkZXRlY3RlZEluZGVudCB8fCBzdGF0ZS5saW5lSW5kZW50IDwgdGV4dEluZGVudCkgJiZcbiAgICAgICAgICAgKGNoID09PSAweDIwLyogU3BhY2UgKi8pKSB7XG4gICAgICBzdGF0ZS5saW5lSW5kZW50Kys7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKCFkZXRlY3RlZEluZGVudCAmJiBzdGF0ZS5saW5lSW5kZW50ID4gdGV4dEluZGVudCkge1xuICAgICAgdGV4dEluZGVudCA9IHN0YXRlLmxpbmVJbmRlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIGVtcHR5TGluZXMrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIEVuZCBvZiB0aGUgc2NhbGFyLlxuICAgIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgdGV4dEluZGVudCkge1xuXG4gICAgICAvLyBQZXJmb3JtIHRoZSBjaG9tcGluZy5cbiAgICAgIGlmIChjaG9tcGluZyA9PT0gQ0hPTVBJTkdfS0VFUCkge1xuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZGlkUmVhZENvbnRlbnQgPyAxICsgZW1wdHlMaW5lcyA6IGVtcHR5TGluZXMpO1xuICAgICAgfSBlbHNlIGlmIChjaG9tcGluZyA9PT0gQ0hPTVBJTkdfQ0xJUCkge1xuICAgICAgICBpZiAoZGlkUmVhZENvbnRlbnQpIHsgLy8gaS5lLiBvbmx5IGlmIHRoZSBzY2FsYXIgaXMgbm90IGVtcHR5LlxuICAgICAgICAgIHN0YXRlLnJlc3VsdCArPSAnXFxuJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCcmVhayB0aGlzIGB3aGlsZWAgY3ljbGUgYW5kIGdvIHRvIHRoZSBmdW5jaXRvbidzIGVwaWxvZ3VlLlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gRm9sZGVkIHN0eWxlOiB1c2UgZmFuY3kgcnVsZXMgdG8gaGFuZGxlIGxpbmUgYnJlYWtzLlxuICAgIGlmIChmb2xkaW5nKSB7XG5cbiAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggd2hpdGUgc3BhY2UgY2hhcmFjdGVycyAobW9yZS1pbmRlbnRlZCBsaW5lcykgYXJlIG5vdCBmb2xkZWQuXG4gICAgICBpZiAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICAgIGF0TW9yZUluZGVudGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gZXhjZXB0IGZvciB0aGUgZmlyc3QgY29udGVudCBsaW5lIChjZi4gRXhhbXBsZSA4LjEpXG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBkaWRSZWFkQ29udGVudCA/IDEgKyBlbXB0eUxpbmVzIDogZW1wdHlMaW5lcyk7XG5cbiAgICAgIC8vIEVuZCBvZiBtb3JlLWluZGVudGVkIGJsb2NrLlxuICAgICAgfSBlbHNlIGlmIChhdE1vcmVJbmRlbnRlZCkge1xuICAgICAgICBhdE1vcmVJbmRlbnRlZCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZW1wdHlMaW5lcyArIDEpO1xuXG4gICAgICAvLyBKdXN0IG9uZSBsaW5lIGJyZWFrIC0gcGVyY2VpdmUgYXMgdGhlIHNhbWUgbGluZS5cbiAgICAgIH0gZWxzZSBpZiAoZW1wdHlMaW5lcyA9PT0gMCkge1xuICAgICAgICBpZiAoZGlkUmVhZENvbnRlbnQpIHsgLy8gaS5lLiBvbmx5IGlmIHdlIGhhdmUgYWxyZWFkeSByZWFkIHNvbWUgc2NhbGFyIGNvbnRlbnQuXG4gICAgICAgICAgc3RhdGUucmVzdWx0ICs9ICcgJztcbiAgICAgICAgfVxuXG4gICAgICAvLyBTZXZlcmFsIGxpbmUgYnJlYWtzIC0gcGVyY2VpdmUgYXMgZGlmZmVyZW50IGxpbmVzLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGVtcHR5TGluZXMpO1xuICAgICAgfVxuXG4gICAgLy8gTGl0ZXJhbCBzdHlsZToganVzdCBhZGQgZXhhY3QgbnVtYmVyIG9mIGxpbmUgYnJlYWtzIGJldHdlZW4gY29udGVudCBsaW5lcy5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gS2VlcCBhbGwgbGluZSBicmVha3MgZXhjZXB0IHRoZSBoZWFkZXIgbGluZSBicmVhay5cbiAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBkaWRSZWFkQ29udGVudCA/IDEgKyBlbXB0eUxpbmVzIDogZW1wdHlMaW5lcyk7XG4gICAgfVxuXG4gICAgZGlkUmVhZENvbnRlbnQgPSB0cnVlO1xuICAgIGRldGVjdGVkSW5kZW50ID0gdHJ1ZTtcbiAgICBlbXB0eUxpbmVzID0gMDtcbiAgICBjYXB0dXJlU3RhcnQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIHdoaWxlICghaXNfRU9MKGNoKSAmJiAoY2ggIT09IDApKSB7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWFkQmxvY2tTZXF1ZW5jZShzdGF0ZSwgbm9kZUluZGVudCkge1xuICB2YXIgX2xpbmUsXG4gICAgICBfdGFnICAgICAgPSBzdGF0ZS50YWcsXG4gICAgICBfYW5jaG9yICAgPSBzdGF0ZS5hbmNob3IsXG4gICAgICBfcmVzdWx0ICAgPSBbXSxcbiAgICAgIGZvbGxvd2luZyxcbiAgICAgIGRldGVjdGVkICA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgLy8gdGhlcmUgaXMgYSBsZWFkaW5nIHRhYiBiZWZvcmUgdGhpcyB0b2tlbiwgc28gaXQgY2FuJ3QgYmUgYSBibG9jayBzZXF1ZW5jZS9tYXBwaW5nO1xuICAvLyBpdCBjYW4gc3RpbGwgYmUgZmxvdyBzZXF1ZW5jZS9tYXBwaW5nIG9yIGEgc2NhbGFyXG4gIGlmIChzdGF0ZS5maXJzdFRhYkluTGluZSAhPT0gLTEpIHJldHVybiBmYWxzZTtcblxuICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBfcmVzdWx0O1xuICB9XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBpZiAoc3RhdGUuZmlyc3RUYWJJbkxpbmUgIT09IC0xKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbiA9IHN0YXRlLmZpcnN0VGFiSW5MaW5lO1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhYiBjaGFyYWN0ZXJzIG11c3Qgbm90IGJlIHVzZWQgaW4gaW5kZW50YXRpb24nKTtcbiAgICB9XG5cbiAgICBpZiAoY2ggIT09IDB4MkQvKiAtICovKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAoIWlzX1dTX09SX0VPTChmb2xsb3dpbmcpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgc3RhdGUucG9zaXRpb24rKztcblxuICAgIGlmIChza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSkpIHtcbiAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50IDw9IG5vZGVJbmRlbnQpIHtcbiAgICAgICAgX3Jlc3VsdC5wdXNoKG51bGwpO1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfbGluZSA9IHN0YXRlLmxpbmU7XG4gICAgY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfQkxPQ0tfSU4sIGZhbHNlLCB0cnVlKTtcbiAgICBfcmVzdWx0LnB1c2goc3RhdGUucmVzdWx0KTtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKChzdGF0ZS5saW5lID09PSBfbGluZSB8fCBzdGF0ZS5saW5lSW5kZW50ID4gbm9kZUluZGVudCkgJiYgKGNoICE9PSAwKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2JhZCBpbmRlbnRhdGlvbiBvZiBhIHNlcXVlbmNlIGVudHJ5Jyk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgbm9kZUluZGVudCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRldGVjdGVkKSB7XG4gICAgc3RhdGUudGFnID0gX3RhZztcbiAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgIHN0YXRlLmtpbmQgPSAnc2VxdWVuY2UnO1xuICAgIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZWFkQmxvY2tNYXBwaW5nKHN0YXRlLCBub2RlSW5kZW50LCBmbG93SW5kZW50KSB7XG4gIHZhciBmb2xsb3dpbmcsXG4gICAgICBhbGxvd0NvbXBhY3QsXG4gICAgICBfbGluZSxcbiAgICAgIF9rZXlMaW5lLFxuICAgICAgX2tleUxpbmVTdGFydCxcbiAgICAgIF9rZXlQb3MsXG4gICAgICBfdGFnICAgICAgICAgID0gc3RhdGUudGFnLFxuICAgICAgX2FuY2hvciAgICAgICA9IHN0YXRlLmFuY2hvcixcbiAgICAgIF9yZXN1bHQgICAgICAgPSB7fSxcbiAgICAgIG92ZXJyaWRhYmxlS2V5cyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBrZXlUYWcgICAgICAgID0gbnVsbCxcbiAgICAgIGtleU5vZGUgICAgICAgPSBudWxsLFxuICAgICAgdmFsdWVOb2RlICAgICA9IG51bGwsXG4gICAgICBhdEV4cGxpY2l0S2V5ID0gZmFsc2UsXG4gICAgICBkZXRlY3RlZCAgICAgID0gZmFsc2UsXG4gICAgICBjaDtcblxuICAvLyB0aGVyZSBpcyBhIGxlYWRpbmcgdGFiIGJlZm9yZSB0aGlzIHRva2VuLCBzbyBpdCBjYW4ndCBiZSBhIGJsb2NrIHNlcXVlbmNlL21hcHBpbmc7XG4gIC8vIGl0IGNhbiBzdGlsbCBiZSBmbG93IHNlcXVlbmNlL21hcHBpbmcgb3IgYSBzY2FsYXJcbiAgaWYgKHN0YXRlLmZpcnN0VGFiSW5MaW5lICE9PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IF9yZXN1bHQ7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIGlmICghYXRFeHBsaWNpdEtleSAmJiBzdGF0ZS5maXJzdFRhYkluTGluZSAhPT0gLTEpIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uID0gc3RhdGUuZmlyc3RUYWJJbkxpbmU7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFiIGNoYXJhY3RlcnMgbXVzdCBub3QgYmUgdXNlZCBpbiBpbmRlbnRhdGlvbicpO1xuICAgIH1cblxuICAgIGZvbGxvd2luZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKTtcbiAgICBfbGluZSA9IHN0YXRlLmxpbmU7IC8vIFNhdmUgdGhlIGN1cnJlbnQgbGluZS5cblxuICAgIC8vXG4gICAgLy8gRXhwbGljaXQgbm90YXRpb24gY2FzZS4gVGhlcmUgYXJlIHR3byBzZXBhcmF0ZSBibG9ja3M6XG4gICAgLy8gZmlyc3QgZm9yIHRoZSBrZXkgKGRlbm90ZWQgYnkgXCI/XCIpIGFuZCBzZWNvbmQgZm9yIHRoZSB2YWx1ZSAoZGVub3RlZCBieSBcIjpcIilcbiAgICAvL1xuICAgIGlmICgoY2ggPT09IDB4M0YvKiA/ICovIHx8IGNoID09PSAweDNBLyogOiAqLykgJiYgaXNfV1NfT1JfRU9MKGZvbGxvd2luZykpIHtcblxuICAgICAgaWYgKGNoID09PSAweDNGLyogPyAqLykge1xuICAgICAgICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCBudWxsLCBfa2V5TGluZSwgX2tleUxpbmVTdGFydCwgX2tleVBvcyk7XG4gICAgICAgICAga2V5VGFnID0ga2V5Tm9kZSA9IHZhbHVlTm9kZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgIGF0RXhwbGljaXRLZXkgPSB0cnVlO1xuICAgICAgICBhbGxvd0NvbXBhY3QgPSB0cnVlO1xuXG4gICAgICB9IGVsc2UgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgLy8gaS5lLiAweDNBLyogOiAqLyA9PT0gY2hhcmFjdGVyIGFmdGVyIHRoZSBleHBsaWNpdCBrZXkuXG4gICAgICAgIGF0RXhwbGljaXRLZXkgPSBmYWxzZTtcbiAgICAgICAgYWxsb3dDb21wYWN0ID0gdHJ1ZTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2luY29tcGxldGUgZXhwbGljaXQgbWFwcGluZyBwYWlyOyBhIGtleSBub2RlIGlzIG1pc3NlZDsgb3IgZm9sbG93ZWQgYnkgYSBub24tdGFidWxhdGVkIGVtcHR5IGxpbmUnKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUucG9zaXRpb24gKz0gMTtcbiAgICAgIGNoID0gZm9sbG93aW5nO1xuXG4gICAgLy9cbiAgICAvLyBJbXBsaWNpdCBub3RhdGlvbiBjYXNlLiBGbG93LXN0eWxlIG5vZGUgYXMgdGhlIGtleSBmaXJzdCwgdGhlbiBcIjpcIiwgYW5kIHRoZSB2YWx1ZS5cbiAgICAvL1xuICAgIH0gZWxzZSB7XG4gICAgICBfa2V5TGluZSA9IHN0YXRlLmxpbmU7XG4gICAgICBfa2V5TGluZVN0YXJ0ID0gc3RhdGUubGluZVN0YXJ0O1xuICAgICAgX2tleVBvcyA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgICBpZiAoIWNvbXBvc2VOb2RlKHN0YXRlLCBmbG93SW5kZW50LCBDT05URVhUX0ZMT1dfT1VULCBmYWxzZSwgdHJ1ZSkpIHtcbiAgICAgICAgLy8gTmVpdGhlciBpbXBsaWNpdCBub3IgZXhwbGljaXQgbm90YXRpb24uXG4gICAgICAgIC8vIFJlYWRpbmcgaXMgZG9uZS4gR28gdG8gdGhlIGVwaWxvZ3VlLlxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmxpbmUgPT09IF9saW5lKSB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgICAgd2hpbGUgKGlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaCA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgICAgICBpZiAoIWlzX1dTX09SX0VPTChjaCkpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdhIHdoaXRlc3BhY2UgY2hhcmFjdGVyIGlzIGV4cGVjdGVkIGFmdGVyIHRoZSBrZXktdmFsdWUgc2VwYXJhdG9yIHdpdGhpbiBhIGJsb2NrIG1hcHBpbmcnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAgICAgc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIG51bGwsIF9rZXlMaW5lLCBfa2V5TGluZVN0YXJ0LCBfa2V5UG9zKTtcbiAgICAgICAgICAgIGtleVRhZyA9IGtleU5vZGUgPSB2YWx1ZU5vZGUgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBhdEV4cGxpY2l0S2V5ID0gZmFsc2U7XG4gICAgICAgICAgYWxsb3dDb21wYWN0ID0gZmFsc2U7XG4gICAgICAgICAga2V5VGFnID0gc3RhdGUudGFnO1xuICAgICAgICAgIGtleU5vZGUgPSBzdGF0ZS5yZXN1bHQ7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW4gbm90IHJlYWQgYW4gaW1wbGljaXQgbWFwcGluZyBwYWlyOyBhIGNvbG9uIGlzIG1pc3NlZCcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUudGFnID0gX3RhZztcbiAgICAgICAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBLZWVwIHRoZSByZXN1bHQgb2YgYGNvbXBvc2VOb2RlYC5cbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW4gbm90IHJlYWQgYSBibG9jayBtYXBwaW5nIGVudHJ5OyBhIG11bHRpbGluZSBrZXkgbWF5IG5vdCBiZSBhbiBpbXBsaWNpdCBrZXknKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUudGFnID0gX3RhZztcbiAgICAgICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIEtlZXAgdGhlIHJlc3VsdCBvZiBgY29tcG9zZU5vZGVgLlxuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gQ29tbW9uIHJlYWRpbmcgY29kZSBmb3IgYm90aCBleHBsaWNpdCBhbmQgaW1wbGljaXQgbm90YXRpb25zLlxuICAgIC8vXG4gICAgaWYgKHN0YXRlLmxpbmUgPT09IF9saW5lIHx8IHN0YXRlLmxpbmVJbmRlbnQgPiBub2RlSW5kZW50KSB7XG4gICAgICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICBfa2V5TGluZSA9IHN0YXRlLmxpbmU7XG4gICAgICAgIF9rZXlMaW5lU3RhcnQgPSBzdGF0ZS5saW5lU3RhcnQ7XG4gICAgICAgIF9rZXlQb3MgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0JMT0NLX09VVCwgdHJ1ZSwgYWxsb3dDb21wYWN0KSkge1xuICAgICAgICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAgIGtleU5vZGUgPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWVOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYXRFeHBsaWNpdEtleSkge1xuICAgICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlLCBfa2V5TGluZSwgX2tleUxpbmVTdGFydCwgX2tleVBvcyk7XG4gICAgICAgIGtleVRhZyA9IGtleU5vZGUgPSB2YWx1ZU5vZGUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICgoc3RhdGUubGluZSA9PT0gX2xpbmUgfHwgc3RhdGUubGluZUluZGVudCA+IG5vZGVJbmRlbnQpICYmIChjaCAhPT0gMCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdiYWQgaW5kZW50YXRpb24gb2YgYSBtYXBwaW5nIGVudHJ5Jyk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgbm9kZUluZGVudCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy9cbiAgLy8gRXBpbG9ndWUuXG4gIC8vXG5cbiAgLy8gU3BlY2lhbCBjYXNlOiBsYXN0IG1hcHBpbmcncyBub2RlIGNvbnRhaW5zIG9ubHkgdGhlIGtleSBpbiBleHBsaWNpdCBub3RhdGlvbi5cbiAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgbnVsbCwgX2tleUxpbmUsIF9rZXlMaW5lU3RhcnQsIF9rZXlQb3MpO1xuICB9XG5cbiAgLy8gRXhwb3NlIHRoZSByZXN1bHRpbmcgbWFwcGluZy5cbiAgaWYgKGRldGVjdGVkKSB7XG4gICAgc3RhdGUudGFnID0gX3RhZztcbiAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgIHN0YXRlLmtpbmQgPSAnbWFwcGluZyc7XG4gICAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBkZXRlY3RlZDtcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ1Byb3BlcnR5KHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24sXG4gICAgICBpc1ZlcmJhdGltID0gZmFsc2UsXG4gICAgICBpc05hbWVkICAgID0gZmFsc2UsXG4gICAgICB0YWdIYW5kbGUsXG4gICAgICB0YWdOYW1lLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MjEvKiAhICovKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHN0YXRlLnRhZyAhPT0gbnVsbCkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGlvbiBvZiBhIHRhZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHgzQy8qIDwgKi8pIHtcbiAgICBpc1ZlcmJhdGltID0gdHJ1ZTtcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgfSBlbHNlIGlmIChjaCA9PT0gMHgyMS8qICEgKi8pIHtcbiAgICBpc05hbWVkID0gdHJ1ZTtcbiAgICB0YWdIYW5kbGUgPSAnISEnO1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICB9IGVsc2Uge1xuICAgIHRhZ0hhbmRsZSA9ICchJztcbiAgfVxuXG4gIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIGlmIChpc1ZlcmJhdGltKSB7XG4gICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICB3aGlsZSAoY2ggIT09IDAgJiYgY2ggIT09IDB4M0UvKiA+ICovKTtcblxuICAgIGlmIChzdGF0ZS5wb3NpdGlvbiA8IHN0YXRlLmxlbmd0aCkge1xuICAgICAgdGFnTmFtZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSB2ZXJiYXRpbSB0YWcnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpKSB7XG5cbiAgICAgIGlmIChjaCA9PT0gMHgyMS8qICEgKi8pIHtcbiAgICAgICAgaWYgKCFpc05hbWVkKSB7XG4gICAgICAgICAgdGFnSGFuZGxlID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uIC0gMSwgc3RhdGUucG9zaXRpb24gKyAxKTtcblxuICAgICAgICAgIGlmICghUEFUVEVSTl9UQUdfSEFORExFLnRlc3QodGFnSGFuZGxlKSkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25hbWVkIHRhZyBoYW5kbGUgY2Fubm90IGNvbnRhaW4gc3VjaCBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaXNOYW1lZCA9IHRydWU7XG4gICAgICAgICAgX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24gKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWcgc3VmZml4IGNhbm5vdCBjb250YWluIGV4Y2xhbWF0aW9uIG1hcmtzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRhZ05hbWUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChQQVRURVJOX0ZMT1dfSU5ESUNBVE9SUy50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFnIHN1ZmZpeCBjYW5ub3QgY29udGFpbiBmbG93IGluZGljYXRvciBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRhZ05hbWUgJiYgIVBBVFRFUk5fVEFHX1VSSS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhZyBuYW1lIGNhbm5vdCBjb250YWluIHN1Y2ggY2hhcmFjdGVyczogJyArIHRhZ05hbWUpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB0YWdOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHRhZ05hbWUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFnIG5hbWUgaXMgbWFsZm9ybWVkOiAnICsgdGFnTmFtZSk7XG4gIH1cblxuICBpZiAoaXNWZXJiYXRpbSkge1xuICAgIHN0YXRlLnRhZyA9IHRhZ05hbWU7XG5cbiAgfSBlbHNlIGlmIChfaGFzT3duUHJvcGVydHkkMS5jYWxsKHN0YXRlLnRhZ01hcCwgdGFnSGFuZGxlKSkge1xuICAgIHN0YXRlLnRhZyA9IHN0YXRlLnRhZ01hcFt0YWdIYW5kbGVdICsgdGFnTmFtZTtcblxuICB9IGVsc2UgaWYgKHRhZ0hhbmRsZSA9PT0gJyEnKSB7XG4gICAgc3RhdGUudGFnID0gJyEnICsgdGFnTmFtZTtcblxuICB9IGVsc2UgaWYgKHRhZ0hhbmRsZSA9PT0gJyEhJykge1xuICAgIHN0YXRlLnRhZyA9ICd0YWc6eWFtbC5vcmcsMjAwMjonICsgdGFnTmFtZTtcblxuICB9IGVsc2Uge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmRlY2xhcmVkIHRhZyBoYW5kbGUgXCInICsgdGFnSGFuZGxlICsgJ1wiJyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZEFuY2hvclByb3BlcnR5KHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24sXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyNi8qICYgKi8pIHJldHVybiBmYWxzZTtcblxuICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0aW9uIG9mIGFuIGFuY2hvciBwcm9wZXJ0eScpO1xuICB9XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkgJiYgIWlzX0ZMT1dfSU5ESUNBVE9SKGNoKSkge1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gX3Bvc2l0aW9uKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25hbWUgb2YgYW4gYW5jaG9yIG5vZGUgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgfVxuXG4gIHN0YXRlLmFuY2hvciA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZEFsaWFzKHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24sIGFsaWFzLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MkEvKiAqICovKSByZXR1cm4gZmFsc2U7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkgJiYgIWlzX0ZMT1dfSU5ESUNBVE9SKGNoKSkge1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gX3Bvc2l0aW9uKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25hbWUgb2YgYW4gYWxpYXMgbm9kZSBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpO1xuICB9XG5cbiAgYWxpYXMgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoIV9oYXNPd25Qcm9wZXJ0eSQxLmNhbGwoc3RhdGUuYW5jaG9yTWFwLCBhbGlhcykpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5pZGVudGlmaWVkIGFsaWFzIFwiJyArIGFsaWFzICsgJ1wiJyk7XG4gIH1cblxuICBzdGF0ZS5yZXN1bHQgPSBzdGF0ZS5hbmNob3JNYXBbYWxpYXNdO1xuICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlTm9kZShzdGF0ZSwgcGFyZW50SW5kZW50LCBub2RlQ29udGV4dCwgYWxsb3dUb1NlZWssIGFsbG93Q29tcGFjdCkge1xuICB2YXIgYWxsb3dCbG9ja1N0eWxlcyxcbiAgICAgIGFsbG93QmxvY2tTY2FsYXJzLFxuICAgICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zLFxuICAgICAgaW5kZW50U3RhdHVzID0gMSwgLy8gMTogdGhpcz5wYXJlbnQsIDA6IHRoaXM9cGFyZW50LCAtMTogdGhpczxwYXJlbnRcbiAgICAgIGF0TmV3TGluZSAgPSBmYWxzZSxcbiAgICAgIGhhc0NvbnRlbnQgPSBmYWxzZSxcbiAgICAgIHR5cGVJbmRleCxcbiAgICAgIHR5cGVRdWFudGl0eSxcbiAgICAgIHR5cGVMaXN0LFxuICAgICAgdHlwZSxcbiAgICAgIGZsb3dJbmRlbnQsXG4gICAgICBibG9ja0luZGVudDtcblxuICBpZiAoc3RhdGUubGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5saXN0ZW5lcignb3BlbicsIHN0YXRlKTtcbiAgfVxuXG4gIHN0YXRlLnRhZyAgICA9IG51bGw7XG4gIHN0YXRlLmFuY2hvciA9IG51bGw7XG4gIHN0YXRlLmtpbmQgICA9IG51bGw7XG4gIHN0YXRlLnJlc3VsdCA9IG51bGw7XG5cbiAgYWxsb3dCbG9ja1N0eWxlcyA9IGFsbG93QmxvY2tTY2FsYXJzID0gYWxsb3dCbG9ja0NvbGxlY3Rpb25zID1cbiAgICBDT05URVhUX0JMT0NLX09VVCA9PT0gbm9kZUNvbnRleHQgfHxcbiAgICBDT05URVhUX0JMT0NLX0lOICA9PT0gbm9kZUNvbnRleHQ7XG5cbiAgaWYgKGFsbG93VG9TZWVrKSB7XG4gICAgaWYgKHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKSkge1xuICAgICAgYXROZXdMaW5lID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPiBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgaW5kZW50U3RhdHVzID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA9PT0gcGFyZW50SW5kZW50KSB7XG4gICAgICAgIGluZGVudFN0YXR1cyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPCBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgaW5kZW50U3RhdHVzID0gLTE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGluZGVudFN0YXR1cyA9PT0gMSkge1xuICAgIHdoaWxlIChyZWFkVGFnUHJvcGVydHkoc3RhdGUpIHx8IHJlYWRBbmNob3JQcm9wZXJ0eShzdGF0ZSkpIHtcbiAgICAgIGlmIChza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSkpIHtcbiAgICAgICAgYXROZXdMaW5lID0gdHJ1ZTtcbiAgICAgICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zID0gYWxsb3dCbG9ja1N0eWxlcztcblxuICAgICAgICBpZiAoc3RhdGUubGluZUluZGVudCA+IHBhcmVudEluZGVudCkge1xuICAgICAgICAgIGluZGVudFN0YXR1cyA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA9PT0gcGFyZW50SW5kZW50KSB7XG4gICAgICAgICAgaW5kZW50U3RhdHVzID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgcGFyZW50SW5kZW50KSB7XG4gICAgICAgICAgaW5kZW50U3RhdHVzID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhbGxvd0Jsb2NrQ29sbGVjdGlvbnMpIHtcbiAgICBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPSBhdE5ld0xpbmUgfHwgYWxsb3dDb21wYWN0O1xuICB9XG5cbiAgaWYgKGluZGVudFN0YXR1cyA9PT0gMSB8fCBDT05URVhUX0JMT0NLX09VVCA9PT0gbm9kZUNvbnRleHQpIHtcbiAgICBpZiAoQ09OVEVYVF9GTE9XX0lOID09PSBub2RlQ29udGV4dCB8fCBDT05URVhUX0ZMT1dfT1VUID09PSBub2RlQ29udGV4dCkge1xuICAgICAgZmxvd0luZGVudCA9IHBhcmVudEluZGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgZmxvd0luZGVudCA9IHBhcmVudEluZGVudCArIDE7XG4gICAgfVxuXG4gICAgYmxvY2tJbmRlbnQgPSBzdGF0ZS5wb3NpdGlvbiAtIHN0YXRlLmxpbmVTdGFydDtcblxuICAgIGlmIChpbmRlbnRTdGF0dXMgPT09IDEpIHtcbiAgICAgIGlmIChhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgJiZcbiAgICAgICAgICAocmVhZEJsb2NrU2VxdWVuY2Uoc3RhdGUsIGJsb2NrSW5kZW50KSB8fFxuICAgICAgICAgICByZWFkQmxvY2tNYXBwaW5nKHN0YXRlLCBibG9ja0luZGVudCwgZmxvd0luZGVudCkpIHx8XG4gICAgICAgICAgcmVhZEZsb3dDb2xsZWN0aW9uKHN0YXRlLCBmbG93SW5kZW50KSkge1xuICAgICAgICBoYXNDb250ZW50ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoYWxsb3dCbG9ja1NjYWxhcnMgJiYgcmVhZEJsb2NrU2NhbGFyKHN0YXRlLCBmbG93SW5kZW50KSkgfHxcbiAgICAgICAgICAgIHJlYWRTaW5nbGVRdW90ZWRTY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQpIHx8XG4gICAgICAgICAgICByZWFkRG91YmxlUXVvdGVkU2NhbGFyKHN0YXRlLCBmbG93SW5kZW50KSkge1xuICAgICAgICAgIGhhc0NvbnRlbnQgPSB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVhZEFsaWFzKHN0YXRlKSkge1xuICAgICAgICAgIGhhc0NvbnRlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlLnRhZyAhPT0gbnVsbCB8fCBzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdhbGlhcyBub2RlIHNob3VsZCBub3QgaGF2ZSBhbnkgcHJvcGVydGllcycpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlYWRQbGFpblNjYWxhcihzdGF0ZSwgZmxvd0luZGVudCwgQ09OVEVYVF9GTE9XX0lOID09PSBub2RlQ29udGV4dCkpIHtcbiAgICAgICAgICBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChzdGF0ZS50YWcgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXRlLnRhZyA9ICc/JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGluZGVudFN0YXR1cyA9PT0gMCkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlOiBibG9jayBzZXF1ZW5jZXMgYXJlIGFsbG93ZWQgdG8gaGF2ZSBzYW1lIGluZGVudGF0aW9uIGxldmVsIGFzIHRoZSBwYXJlbnQuXG4gICAgICAvLyBodHRwOi8vd3d3LnlhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNpZDI3OTk3ODRcbiAgICAgIGhhc0NvbnRlbnQgPSBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgJiYgcmVhZEJsb2NrU2VxdWVuY2Uoc3RhdGUsIGJsb2NrSW5kZW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUudGFnID09PSBudWxsKSB7XG4gICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBzdGF0ZS5yZXN1bHQ7XG4gICAgfVxuXG4gIH0gZWxzZSBpZiAoc3RhdGUudGFnID09PSAnPycpIHtcbiAgICAvLyBJbXBsaWNpdCByZXNvbHZpbmcgaXMgbm90IGFsbG93ZWQgZm9yIG5vbi1zY2FsYXIgdHlwZXMsIGFuZCAnPydcbiAgICAvLyBub24tc3BlY2lmaWMgdGFnIGlzIG9ubHkgYXV0b21hdGljYWxseSBhc3NpZ25lZCB0byBwbGFpbiBzY2FsYXJzLlxuICAgIC8vXG4gICAgLy8gV2Ugb25seSBuZWVkIHRvIGNoZWNrIGtpbmQgY29uZm9ybWl0eSBpbiBjYXNlIHVzZXIgZXhwbGljaXRseSBhc3NpZ25zICc/J1xuICAgIC8vIHRhZywgZm9yIGV4YW1wbGUgbGlrZSB0aGlzOiBcIiE8Pz4gWzBdXCJcbiAgICAvL1xuICAgIGlmIChzdGF0ZS5yZXN1bHQgIT09IG51bGwgJiYgc3RhdGUua2luZCAhPT0gJ3NjYWxhcicpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmFjY2VwdGFibGUgbm9kZSBraW5kIGZvciAhPD8+IHRhZzsgaXQgc2hvdWxkIGJlIFwic2NhbGFyXCIsIG5vdCBcIicgKyBzdGF0ZS5raW5kICsgJ1wiJyk7XG4gICAgfVxuXG4gICAgZm9yICh0eXBlSW5kZXggPSAwLCB0eXBlUXVhbnRpdHkgPSBzdGF0ZS5pbXBsaWNpdFR5cGVzLmxlbmd0aDsgdHlwZUluZGV4IDwgdHlwZVF1YW50aXR5OyB0eXBlSW5kZXggKz0gMSkge1xuICAgICAgdHlwZSA9IHN0YXRlLmltcGxpY2l0VHlwZXNbdHlwZUluZGV4XTtcblxuICAgICAgaWYgKHR5cGUucmVzb2x2ZShzdGF0ZS5yZXN1bHQpKSB7IC8vIGBzdGF0ZS5yZXN1bHRgIHVwZGF0ZWQgaW4gcmVzb2x2ZXIgaWYgbWF0Y2hlZFxuICAgICAgICBzdGF0ZS5yZXN1bHQgPSB0eXBlLmNvbnN0cnVjdChzdGF0ZS5yZXN1bHQpO1xuICAgICAgICBzdGF0ZS50YWcgPSB0eXBlLnRhZztcbiAgICAgICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChzdGF0ZS50YWcgIT09ICchJykge1xuICAgIGlmIChfaGFzT3duUHJvcGVydHkkMS5jYWxsKHN0YXRlLnR5cGVNYXBbc3RhdGUua2luZCB8fCAnZmFsbGJhY2snXSwgc3RhdGUudGFnKSkge1xuICAgICAgdHlwZSA9IHN0YXRlLnR5cGVNYXBbc3RhdGUua2luZCB8fCAnZmFsbGJhY2snXVtzdGF0ZS50YWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsb29raW5nIGZvciBtdWx0aSB0eXBlXG4gICAgICB0eXBlID0gbnVsbDtcbiAgICAgIHR5cGVMaXN0ID0gc3RhdGUudHlwZU1hcC5tdWx0aVtzdGF0ZS5raW5kIHx8ICdmYWxsYmFjayddO1xuXG4gICAgICBmb3IgKHR5cGVJbmRleCA9IDAsIHR5cGVRdWFudGl0eSA9IHR5cGVMaXN0Lmxlbmd0aDsgdHlwZUluZGV4IDwgdHlwZVF1YW50aXR5OyB0eXBlSW5kZXggKz0gMSkge1xuICAgICAgICBpZiAoc3RhdGUudGFnLnNsaWNlKDAsIHR5cGVMaXN0W3R5cGVJbmRleF0udGFnLmxlbmd0aCkgPT09IHR5cGVMaXN0W3R5cGVJbmRleF0udGFnKSB7XG4gICAgICAgICAgdHlwZSA9IHR5cGVMaXN0W3R5cGVJbmRleF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmtub3duIHRhZyAhPCcgKyBzdGF0ZS50YWcgKyAnPicpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5yZXN1bHQgIT09IG51bGwgJiYgdHlwZS5raW5kICE9PSBzdGF0ZS5raW5kKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5hY2NlcHRhYmxlIG5vZGUga2luZCBmb3IgITwnICsgc3RhdGUudGFnICsgJz4gdGFnOyBpdCBzaG91bGQgYmUgXCInICsgdHlwZS5raW5kICsgJ1wiLCBub3QgXCInICsgc3RhdGUua2luZCArICdcIicpO1xuICAgIH1cblxuICAgIGlmICghdHlwZS5yZXNvbHZlKHN0YXRlLnJlc3VsdCwgc3RhdGUudGFnKSkgeyAvLyBgc3RhdGUucmVzdWx0YCB1cGRhdGVkIGluIHJlc29sdmVyIGlmIG1hdGNoZWRcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW5ub3QgcmVzb2x2ZSBhIG5vZGUgd2l0aCAhPCcgKyBzdGF0ZS50YWcgKyAnPiBleHBsaWNpdCB0YWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucmVzdWx0ID0gdHlwZS5jb25zdHJ1Y3Qoc3RhdGUucmVzdWx0LCBzdGF0ZS50YWcpO1xuICAgICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUubGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5saXN0ZW5lcignY2xvc2UnLCBzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlLnRhZyAhPT0gbnVsbCB8fCAgc3RhdGUuYW5jaG9yICE9PSBudWxsIHx8IGhhc0NvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHJlYWREb2N1bWVudChzdGF0ZSkge1xuICB2YXIgZG9jdW1lbnRTdGFydCA9IHN0YXRlLnBvc2l0aW9uLFxuICAgICAgX3Bvc2l0aW9uLFxuICAgICAgZGlyZWN0aXZlTmFtZSxcbiAgICAgIGRpcmVjdGl2ZUFyZ3MsXG4gICAgICBoYXNEaXJlY3RpdmVzID0gZmFsc2UsXG4gICAgICBjaDtcblxuICBzdGF0ZS52ZXJzaW9uID0gbnVsbDtcbiAgc3RhdGUuY2hlY2tMaW5lQnJlYWtzID0gc3RhdGUubGVnYWN5O1xuICBzdGF0ZS50YWdNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdGF0ZS5hbmNob3JNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIHdoaWxlICgoY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSkgIT09IDApIHtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPiAwIHx8IGNoICE9PSAweDI1LyogJSAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaGFzRGlyZWN0aXZlcyA9IHRydWU7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgZGlyZWN0aXZlTmFtZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuICAgIGRpcmVjdGl2ZUFyZ3MgPSBbXTtcblxuICAgIGlmIChkaXJlY3RpdmVOYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdkaXJlY3RpdmUgbmFtZSBtdXN0IG5vdCBiZSBsZXNzIHRoYW4gb25lIGNoYXJhY3RlciBpbiBsZW5ndGgnKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ggPT09IDB4MjMvKiAjICovKSB7XG4gICAgICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfRU9MKGNoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNfRU9MKGNoKSkgYnJlYWs7XG5cbiAgICAgIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBkaXJlY3RpdmVBcmdzLnB1c2goc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbikpO1xuICAgIH1cblxuICAgIGlmIChjaCAhPT0gMCkgcmVhZExpbmVCcmVhayhzdGF0ZSk7XG5cbiAgICBpZiAoX2hhc093blByb3BlcnR5JDEuY2FsbChkaXJlY3RpdmVIYW5kbGVycywgZGlyZWN0aXZlTmFtZSkpIHtcbiAgICAgIGRpcmVjdGl2ZUhhbmRsZXJzW2RpcmVjdGl2ZU5hbWVdKHN0YXRlLCBkaXJlY3RpdmVOYW1lLCBkaXJlY3RpdmVBcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAndW5rbm93biBkb2N1bWVudCBkaXJlY3RpdmUgXCInICsgZGlyZWN0aXZlTmFtZSArICdcIicpO1xuICAgIH1cbiAgfVxuXG4gIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcblxuICBpZiAoc3RhdGUubGluZUluZGVudCA9PT0gMCAmJlxuICAgICAgc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgICAgID09PSAweDJELyogLSAqLyAmJlxuICAgICAgc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpID09PSAweDJELyogLSAqLyAmJlxuICAgICAgc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDIpID09PSAweDJELyogLSAqLykge1xuICAgIHN0YXRlLnBvc2l0aW9uICs9IDM7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gIH0gZWxzZSBpZiAoaGFzRGlyZWN0aXZlcykge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdkaXJlY3RpdmVzIGVuZCBtYXJrIGlzIGV4cGVjdGVkJyk7XG4gIH1cblxuICBjb21wb3NlTm9kZShzdGF0ZSwgc3RhdGUubGluZUluZGVudCAtIDEsIENPTlRFWFRfQkxPQ0tfT1VULCBmYWxzZSwgdHJ1ZSk7XG4gIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcblxuICBpZiAoc3RhdGUuY2hlY2tMaW5lQnJlYWtzICYmXG4gICAgICBQQVRURVJOX05PTl9BU0NJSV9MSU5FX0JSRUFLUy50ZXN0KHN0YXRlLmlucHV0LnNsaWNlKGRvY3VtZW50U3RhcnQsIHN0YXRlLnBvc2l0aW9uKSkpIHtcbiAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICdub24tQVNDSUkgbGluZSBicmVha3MgYXJlIGludGVycHJldGVkIGFzIGNvbnRlbnQnKTtcbiAgfVxuXG4gIHN0YXRlLmRvY3VtZW50cy5wdXNoKHN0YXRlLnJlc3VsdCk7XG5cbiAgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBzdGF0ZS5saW5lU3RhcnQgJiYgdGVzdERvY3VtZW50U2VwYXJhdG9yKHN0YXRlKSkge1xuXG4gICAgaWYgKHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pID09PSAweDJFLyogLiAqLykge1xuICAgICAgc3RhdGUucG9zaXRpb24gKz0gMztcbiAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBvc2l0aW9uIDwgKHN0YXRlLmxlbmd0aCAtIDEpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2VuZCBvZiB0aGUgc3RyZWFtIG9yIGEgZG9jdW1lbnQgc2VwYXJhdG9yIGlzIGV4cGVjdGVkJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cblxuZnVuY3Rpb24gbG9hZERvY3VtZW50cyhpbnB1dCwgb3B0aW9ucykge1xuICBpbnB1dCA9IFN0cmluZyhpbnB1dCk7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpbnB1dC5sZW5ndGggIT09IDApIHtcblxuICAgIC8vIEFkZCB0YWlsaW5nIGBcXG5gIGlmIG5vdCBleGlzdHNcbiAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChpbnB1dC5sZW5ndGggLSAxKSAhPT0gMHgwQS8qIExGICovICYmXG4gICAgICAgIGlucHV0LmNoYXJDb2RlQXQoaW5wdXQubGVuZ3RoIC0gMSkgIT09IDB4MEQvKiBDUiAqLykge1xuICAgICAgaW5wdXQgKz0gJ1xcbic7XG4gICAgfVxuXG4gICAgLy8gU3RyaXAgQk9NXG4gICAgaWYgKGlucHV0LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZSgxKTtcbiAgICB9XG4gIH1cblxuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGUkMShpbnB1dCwgb3B0aW9ucyk7XG5cbiAgdmFyIG51bGxwb3MgPSBpbnB1dC5pbmRleE9mKCdcXDAnKTtcblxuICBpZiAobnVsbHBvcyAhPT0gLTEpIHtcbiAgICBzdGF0ZS5wb3NpdGlvbiA9IG51bGxwb3M7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ251bGwgYnl0ZSBpcyBub3QgYWxsb3dlZCBpbiBpbnB1dCcpO1xuICB9XG5cbiAgLy8gVXNlIDAgYXMgc3RyaW5nIHRlcm1pbmF0b3IuIFRoYXQgc2lnbmlmaWNhbnRseSBzaW1wbGlmaWVzIGJvdW5kcyBjaGVjay5cbiAgc3RhdGUuaW5wdXQgKz0gJ1xcMCc7XG5cbiAgd2hpbGUgKHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pID09PSAweDIwLyogU3BhY2UgKi8pIHtcbiAgICBzdGF0ZS5saW5lSW5kZW50ICs9IDE7XG4gICAgc3RhdGUucG9zaXRpb24gKz0gMTtcbiAgfVxuXG4gIHdoaWxlIChzdGF0ZS5wb3NpdGlvbiA8IChzdGF0ZS5sZW5ndGggLSAxKSkge1xuICAgIHJlYWREb2N1bWVudChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGUuZG9jdW1lbnRzO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRBbGwkMShpbnB1dCwgaXRlcmF0b3IsIG9wdGlvbnMpIHtcbiAgaWYgKGl0ZXJhdG9yICE9PSBudWxsICYmIHR5cGVvZiBpdGVyYXRvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucyA9IGl0ZXJhdG9yO1xuICAgIGl0ZXJhdG9yID0gbnVsbDtcbiAgfVxuXG4gIHZhciBkb2N1bWVudHMgPSBsb2FkRG9jdW1lbnRzKGlucHV0LCBvcHRpb25zKTtcblxuICBpZiAodHlwZW9mIGl0ZXJhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50cztcbiAgfVxuXG4gIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gZG9jdW1lbnRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBpdGVyYXRvcihkb2N1bWVudHNbaW5kZXhdKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWQkMShpbnB1dCwgb3B0aW9ucykge1xuICB2YXIgZG9jdW1lbnRzID0gbG9hZERvY3VtZW50cyhpbnB1dCwgb3B0aW9ucyk7XG5cbiAgaWYgKGRvY3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAvKmVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCovXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChkb2N1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50c1swXTtcbiAgfVxuICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdleHBlY3RlZCBhIHNpbmdsZSBkb2N1bWVudCBpbiB0aGUgc3RyZWFtLCBidXQgZm91bmQgbW9yZScpO1xufVxuXG5cbnZhciBsb2FkQWxsXzEgPSBsb2FkQWxsJDE7XG52YXIgbG9hZF8xICAgID0gbG9hZCQxO1xuXG52YXIgbG9hZGVyID0ge1xuXHRsb2FkQWxsOiBsb2FkQWxsXzEsXG5cdGxvYWQ6IGxvYWRfMVxufTtcblxuLyplc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSovXG5cblxuXG5cblxudmFyIF90b1N0cmluZyAgICAgICA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIENIQVJfQk9NICAgICAgICAgICAgICAgICAgPSAweEZFRkY7XG52YXIgQ0hBUl9UQUIgICAgICAgICAgICAgICAgICA9IDB4MDk7IC8qIFRhYiAqL1xudmFyIENIQVJfTElORV9GRUVEICAgICAgICAgICAgPSAweDBBOyAvKiBMRiAqL1xudmFyIENIQVJfQ0FSUklBR0VfUkVUVVJOICAgICAgPSAweDBEOyAvKiBDUiAqL1xudmFyIENIQVJfU1BBQ0UgICAgICAgICAgICAgICAgPSAweDIwOyAvKiBTcGFjZSAqL1xudmFyIENIQVJfRVhDTEFNQVRJT04gICAgICAgICAgPSAweDIxOyAvKiAhICovXG52YXIgQ0hBUl9ET1VCTEVfUVVPVEUgICAgICAgICA9IDB4MjI7IC8qIFwiICovXG52YXIgQ0hBUl9TSEFSUCAgICAgICAgICAgICAgICA9IDB4MjM7IC8qICMgKi9cbnZhciBDSEFSX1BFUkNFTlQgICAgICAgICAgICAgID0gMHgyNTsgLyogJSAqL1xudmFyIENIQVJfQU1QRVJTQU5EICAgICAgICAgICAgPSAweDI2OyAvKiAmICovXG52YXIgQ0hBUl9TSU5HTEVfUVVPVEUgICAgICAgICA9IDB4Mjc7IC8qICcgKi9cbnZhciBDSEFSX0FTVEVSSVNLICAgICAgICAgICAgID0gMHgyQTsgLyogKiAqL1xudmFyIENIQVJfQ09NTUEgICAgICAgICAgICAgICAgPSAweDJDOyAvKiAsICovXG52YXIgQ0hBUl9NSU5VUyAgICAgICAgICAgICAgICA9IDB4MkQ7IC8qIC0gKi9cbnZhciBDSEFSX0NPTE9OICAgICAgICAgICAgICAgID0gMHgzQTsgLyogOiAqL1xudmFyIENIQVJfRVFVQUxTICAgICAgICAgICAgICAgPSAweDNEOyAvKiA9ICovXG52YXIgQ0hBUl9HUkVBVEVSX1RIQU4gICAgICAgICA9IDB4M0U7IC8qID4gKi9cbnZhciBDSEFSX1FVRVNUSU9OICAgICAgICAgICAgID0gMHgzRjsgLyogPyAqL1xudmFyIENIQVJfQ09NTUVSQ0lBTF9BVCAgICAgICAgPSAweDQwOyAvKiBAICovXG52YXIgQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUICA9IDB4NUI7IC8qIFsgKi9cbnZhciBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUID0gMHg1RDsgLyogXSAqL1xudmFyIENIQVJfR1JBVkVfQUNDRU5UICAgICAgICAgPSAweDYwOyAvKiBgICovXG52YXIgQ0hBUl9MRUZUX0NVUkxZX0JSQUNLRVQgICA9IDB4N0I7IC8qIHsgKi9cbnZhciBDSEFSX1ZFUlRJQ0FMX0xJTkUgICAgICAgID0gMHg3QzsgLyogfCAqL1xudmFyIENIQVJfUklHSFRfQ1VSTFlfQlJBQ0tFVCAgPSAweDdEOyAvKiB9ICovXG5cbnZhciBFU0NBUEVfU0VRVUVOQ0VTID0ge307XG5cbkVTQ0FQRV9TRVFVRU5DRVNbMHgwMF0gICA9ICdcXFxcMCc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDddICAgPSAnXFxcXGEnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDA4XSAgID0gJ1xcXFxiJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwOV0gICA9ICdcXFxcdCc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MEFdICAgPSAnXFxcXG4nO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBCXSAgID0gJ1xcXFx2JztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwQ10gICA9ICdcXFxcZic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MERdICAgPSAnXFxcXHInO1xuRVNDQVBFX1NFUVVFTkNFU1sweDFCXSAgID0gJ1xcXFxlJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgyMl0gICA9ICdcXFxcXCInO1xuRVNDQVBFX1NFUVVFTkNFU1sweDVDXSAgID0gJ1xcXFxcXFxcJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHg4NV0gICA9ICdcXFxcTic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4QTBdICAgPSAnXFxcXF8nO1xuRVNDQVBFX1NFUVVFTkNFU1sweDIwMjhdID0gJ1xcXFxMJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgyMDI5XSA9ICdcXFxcUCc7XG5cbnZhciBERVBSRUNBVEVEX0JPT0xFQU5TX1NZTlRBWCA9IFtcbiAgJ3knLCAnWScsICd5ZXMnLCAnWWVzJywgJ1lFUycsICdvbicsICdPbicsICdPTicsXG4gICduJywgJ04nLCAnbm8nLCAnTm8nLCAnTk8nLCAnb2ZmJywgJ09mZicsICdPRkYnXG5dO1xuXG52YXIgREVQUkVDQVRFRF9CQVNFNjBfU1lOVEFYID0gL15bLStdP1swLTlfXSsoPzo6WzAtOV9dKykrKD86XFwuWzAtOV9dKik/JC87XG5cbmZ1bmN0aW9uIGNvbXBpbGVTdHlsZU1hcChzY2hlbWEsIG1hcCkge1xuICB2YXIgcmVzdWx0LCBrZXlzLCBpbmRleCwgbGVuZ3RoLCB0YWcsIHN0eWxlLCB0eXBlO1xuXG4gIGlmIChtYXAgPT09IG51bGwpIHJldHVybiB7fTtcblxuICByZXN1bHQgPSB7fTtcbiAga2V5cyA9IE9iamVjdC5rZXlzKG1hcCk7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHRhZyA9IGtleXNbaW5kZXhdO1xuICAgIHN0eWxlID0gU3RyaW5nKG1hcFt0YWddKTtcblxuICAgIGlmICh0YWcuc2xpY2UoMCwgMikgPT09ICchIScpIHtcbiAgICAgIHRhZyA9ICd0YWc6eWFtbC5vcmcsMjAwMjonICsgdGFnLnNsaWNlKDIpO1xuICAgIH1cbiAgICB0eXBlID0gc2NoZW1hLmNvbXBpbGVkVHlwZU1hcFsnZmFsbGJhY2snXVt0YWddO1xuXG4gICAgaWYgKHR5cGUgJiYgX2hhc093blByb3BlcnR5LmNhbGwodHlwZS5zdHlsZUFsaWFzZXMsIHN0eWxlKSkge1xuICAgICAgc3R5bGUgPSB0eXBlLnN0eWxlQWxpYXNlc1tzdHlsZV07XG4gICAgfVxuXG4gICAgcmVzdWx0W3RhZ10gPSBzdHlsZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUhleChjaGFyYWN0ZXIpIHtcbiAgdmFyIHN0cmluZywgaGFuZGxlLCBsZW5ndGg7XG5cbiAgc3RyaW5nID0gY2hhcmFjdGVyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXG4gIGlmIChjaGFyYWN0ZXIgPD0gMHhGRikge1xuICAgIGhhbmRsZSA9ICd4JztcbiAgICBsZW5ndGggPSAyO1xuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA8PSAweEZGRkYpIHtcbiAgICBoYW5kbGUgPSAndSc7XG4gICAgbGVuZ3RoID0gNDtcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPD0gMHhGRkZGRkZGRikge1xuICAgIGhhbmRsZSA9ICdVJztcbiAgICBsZW5ndGggPSA4O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBleGNlcHRpb24oJ2NvZGUgcG9pbnQgd2l0aGluIGEgc3RyaW5nIG1heSBub3QgYmUgZ3JlYXRlciB0aGFuIDB4RkZGRkZGRkYnKTtcbiAgfVxuXG4gIHJldHVybiAnXFxcXCcgKyBoYW5kbGUgKyBjb21tb24ucmVwZWF0KCcwJywgbGVuZ3RoIC0gc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59XG5cblxudmFyIFFVT1RJTkdfVFlQRV9TSU5HTEUgPSAxLFxuICAgIFFVT1RJTkdfVFlQRV9ET1VCTEUgPSAyO1xuXG5mdW5jdGlvbiBTdGF0ZShvcHRpb25zKSB7XG4gIHRoaXMuc2NoZW1hICAgICAgICA9IG9wdGlvbnNbJ3NjaGVtYSddIHx8IF9kZWZhdWx0O1xuICB0aGlzLmluZGVudCAgICAgICAgPSBNYXRoLm1heCgxLCAob3B0aW9uc1snaW5kZW50J10gfHwgMikpO1xuICB0aGlzLm5vQXJyYXlJbmRlbnQgPSBvcHRpb25zWydub0FycmF5SW5kZW50J10gfHwgZmFsc2U7XG4gIHRoaXMuc2tpcEludmFsaWQgICA9IG9wdGlvbnNbJ3NraXBJbnZhbGlkJ10gfHwgZmFsc2U7XG4gIHRoaXMuZmxvd0xldmVsICAgICA9IChjb21tb24uaXNOb3RoaW5nKG9wdGlvbnNbJ2Zsb3dMZXZlbCddKSA/IC0xIDogb3B0aW9uc1snZmxvd0xldmVsJ10pO1xuICB0aGlzLnN0eWxlTWFwICAgICAgPSBjb21waWxlU3R5bGVNYXAodGhpcy5zY2hlbWEsIG9wdGlvbnNbJ3N0eWxlcyddIHx8IG51bGwpO1xuICB0aGlzLnNvcnRLZXlzICAgICAgPSBvcHRpb25zWydzb3J0S2V5cyddIHx8IGZhbHNlO1xuICB0aGlzLmxpbmVXaWR0aCAgICAgPSBvcHRpb25zWydsaW5lV2lkdGgnXSB8fCA4MDtcbiAgdGhpcy5ub1JlZnMgICAgICAgID0gb3B0aW9uc1snbm9SZWZzJ10gfHwgZmFsc2U7XG4gIHRoaXMubm9Db21wYXRNb2RlICA9IG9wdGlvbnNbJ25vQ29tcGF0TW9kZSddIHx8IGZhbHNlO1xuICB0aGlzLmNvbmRlbnNlRmxvdyAgPSBvcHRpb25zWydjb25kZW5zZUZsb3cnXSB8fCBmYWxzZTtcbiAgdGhpcy5xdW90aW5nVHlwZSAgID0gb3B0aW9uc1sncXVvdGluZ1R5cGUnXSA9PT0gJ1wiJyA/IFFVT1RJTkdfVFlQRV9ET1VCTEUgOiBRVU9USU5HX1RZUEVfU0lOR0xFO1xuICB0aGlzLmZvcmNlUXVvdGVzICAgPSBvcHRpb25zWydmb3JjZVF1b3RlcyddIHx8IGZhbHNlO1xuICB0aGlzLnJlcGxhY2VyICAgICAgPSB0eXBlb2Ygb3B0aW9uc1sncmVwbGFjZXInXSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnNbJ3JlcGxhY2VyJ10gOiBudWxsO1xuXG4gIHRoaXMuaW1wbGljaXRUeXBlcyA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkSW1wbGljaXQ7XG4gIHRoaXMuZXhwbGljaXRUeXBlcyA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkRXhwbGljaXQ7XG5cbiAgdGhpcy50YWcgPSBudWxsO1xuICB0aGlzLnJlc3VsdCA9ICcnO1xuXG4gIHRoaXMuZHVwbGljYXRlcyA9IFtdO1xuICB0aGlzLnVzZWREdXBsaWNhdGVzID0gbnVsbDtcbn1cblxuLy8gSW5kZW50cyBldmVyeSBsaW5lIGluIGEgc3RyaW5nLiBFbXB0eSBsaW5lcyAoXFxuIG9ubHkpIGFyZSBub3QgaW5kZW50ZWQuXG5mdW5jdGlvbiBpbmRlbnRTdHJpbmcoc3RyaW5nLCBzcGFjZXMpIHtcbiAgdmFyIGluZCA9IGNvbW1vbi5yZXBlYXQoJyAnLCBzcGFjZXMpLFxuICAgICAgcG9zaXRpb24gPSAwLFxuICAgICAgbmV4dCA9IC0xLFxuICAgICAgcmVzdWx0ID0gJycsXG4gICAgICBsaW5lLFxuICAgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAocG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICBuZXh0ID0gc3RyaW5nLmluZGV4T2YoJ1xcbicsIHBvc2l0aW9uKTtcbiAgICBpZiAobmV4dCA9PT0gLTEpIHtcbiAgICAgIGxpbmUgPSBzdHJpbmcuc2xpY2UocG9zaXRpb24pO1xuICAgICAgcG9zaXRpb24gPSBsZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUgPSBzdHJpbmcuc2xpY2UocG9zaXRpb24sIG5leHQgKyAxKTtcbiAgICAgIHBvc2l0aW9uID0gbmV4dCArIDE7XG4gICAgfVxuXG4gICAgaWYgKGxpbmUubGVuZ3RoICYmIGxpbmUgIT09ICdcXG4nKSByZXN1bHQgKz0gaW5kO1xuXG4gICAgcmVzdWx0ICs9IGxpbmU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCkge1xuICByZXR1cm4gJ1xcbicgKyBjb21tb24ucmVwZWF0KCcgJywgc3RhdGUuaW5kZW50ICogbGV2ZWwpO1xufVxuXG5mdW5jdGlvbiB0ZXN0SW1wbGljaXRSZXNvbHZpbmcoc3RhdGUsIHN0cikge1xuICB2YXIgaW5kZXgsIGxlbmd0aCwgdHlwZTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gc3RhdGUuaW1wbGljaXRUeXBlcy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdHlwZSA9IHN0YXRlLmltcGxpY2l0VHlwZXNbaW5kZXhdO1xuXG4gICAgaWYgKHR5cGUucmVzb2x2ZShzdHIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFszM10gcy13aGl0ZSA6Oj0gcy1zcGFjZSB8IHMtdGFiXG5mdW5jdGlvbiBpc1doaXRlc3BhY2UoYykge1xuICByZXR1cm4gYyA9PT0gQ0hBUl9TUEFDRSB8fCBjID09PSBDSEFSX1RBQjtcbn1cblxuLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgY2FuIGJlIHByaW50ZWQgd2l0aG91dCBlc2NhcGluZy5cbi8vIEZyb20gWUFNTCAxLjI6IFwiYW55IGFsbG93ZWQgY2hhcmFjdGVycyBrbm93biB0byBiZSBub24tcHJpbnRhYmxlXG4vLyBzaG91bGQgYWxzbyBiZSBlc2NhcGVkLiBbSG93ZXZlcixdIFRoaXMgaXNu4oCZdCBtYW5kYXRvcnlcIlxuLy8gRGVyaXZlZCBmcm9tIG5iLWNoYXIgLSBcXHQgLSAjeDg1IC0gI3hBMCAtICN4MjAyOCAtICN4MjAyOS5cbmZ1bmN0aW9uIGlzUHJpbnRhYmxlKGMpIHtcbiAgcmV0dXJuICAoMHgwMDAyMCA8PSBjICYmIGMgPD0gMHgwMDAwN0UpXG4gICAgICB8fCAoKDB4MDAwQTEgPD0gYyAmJiBjIDw9IDB4MDBEN0ZGKSAmJiBjICE9PSAweDIwMjggJiYgYyAhPT0gMHgyMDI5KVxuICAgICAgfHwgKCgweDBFMDAwIDw9IGMgJiYgYyA8PSAweDAwRkZGRCkgJiYgYyAhPT0gQ0hBUl9CT00pXG4gICAgICB8fCAgKDB4MTAwMDAgPD0gYyAmJiBjIDw9IDB4MTBGRkZGKTtcbn1cblxuLy8gWzM0XSBucy1jaGFyIDo6PSBuYi1jaGFyIC0gcy13aGl0ZVxuLy8gWzI3XSBuYi1jaGFyIDo6PSBjLXByaW50YWJsZSAtIGItY2hhciAtIGMtYnl0ZS1vcmRlci1tYXJrXG4vLyBbMjZdIGItY2hhciAgOjo9IGItbGluZS1mZWVkIHwgYi1jYXJyaWFnZS1yZXR1cm5cbi8vIEluY2x1ZGluZyBzLXdoaXRlIChmb3Igc29tZSByZWFzb24sIGV4YW1wbGVzIGRvZXNuJ3QgbWF0Y2ggc3BlY3MgaW4gdGhpcyBhc3BlY3QpXG4vLyBucy1jaGFyIDo6PSBjLXByaW50YWJsZSAtIGItbGluZS1mZWVkIC0gYi1jYXJyaWFnZS1yZXR1cm4gLSBjLWJ5dGUtb3JkZXItbWFya1xuZnVuY3Rpb24gaXNOc0NoYXJPcldoaXRlc3BhY2UoYykge1xuICByZXR1cm4gaXNQcmludGFibGUoYylcbiAgICAmJiBjICE9PSBDSEFSX0JPTVxuICAgIC8vIC0gYi1jaGFyXG4gICAgJiYgYyAhPT0gQ0hBUl9DQVJSSUFHRV9SRVRVUk5cbiAgICAmJiBjICE9PSBDSEFSX0xJTkVfRkVFRDtcbn1cblxuLy8gWzEyN10gIG5zLXBsYWluLXNhZmUoYykgOjo9IGMgPSBmbG93LW91dCAg4oeSIG5zLXBsYWluLXNhZmUtb3V0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGZsb3ctaW4gICDih5IgbnMtcGxhaW4tc2FmZS1pblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBibG9jay1rZXkg4oeSIG5zLXBsYWluLXNhZmUtb3V0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGZsb3cta2V5ICDih5IgbnMtcGxhaW4tc2FmZS1pblxuLy8gWzEyOF0gbnMtcGxhaW4tc2FmZS1vdXQgOjo9IG5zLWNoYXJcbi8vIFsxMjldICBucy1wbGFpbi1zYWZlLWluIDo6PSBucy1jaGFyIC0gYy1mbG93LWluZGljYXRvclxuLy8gWzEzMF0gIG5zLXBsYWluLWNoYXIoYykgOjo9ICAoIG5zLXBsYWluLXNhZmUoYykgLSDigJw64oCdIC0g4oCcI+KAnSApXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggLyogQW4gbnMtY2hhciBwcmVjZWRpbmcgKi8g4oCcI+KAnSApXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICgg4oCcOuKAnSAvKiBGb2xsb3dlZCBieSBhbiBucy1wbGFpbi1zYWZlKGMpICovIClcbmZ1bmN0aW9uIGlzUGxhaW5TYWZlKGMsIHByZXYsIGluYmxvY2spIHtcbiAgdmFyIGNJc05zQ2hhck9yV2hpdGVzcGFjZSA9IGlzTnNDaGFyT3JXaGl0ZXNwYWNlKGMpO1xuICB2YXIgY0lzTnNDaGFyID0gY0lzTnNDaGFyT3JXaGl0ZXNwYWNlICYmICFpc1doaXRlc3BhY2UoYyk7XG4gIHJldHVybiAoXG4gICAgLy8gbnMtcGxhaW4tc2FmZVxuICAgIGluYmxvY2sgPyAvLyBjID0gZmxvdy1pblxuICAgICAgY0lzTnNDaGFyT3JXaGl0ZXNwYWNlXG4gICAgICA6IGNJc05zQ2hhck9yV2hpdGVzcGFjZVxuICAgICAgICAvLyAtIGMtZmxvdy1pbmRpY2F0b3JcbiAgICAgICAgJiYgYyAhPT0gQ0hBUl9DT01NQVxuICAgICAgICAmJiBjICE9PSBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVRcbiAgICAgICAgJiYgYyAhPT0gQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVFxuICAgICAgICAmJiBjICE9PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0tFVFxuICAgICAgICAmJiBjICE9PSBDSEFSX1JJR0hUX0NVUkxZX0JSQUNLRVRcbiAgKVxuICAgIC8vIG5zLXBsYWluLWNoYXJcbiAgICAmJiBjICE9PSBDSEFSX1NIQVJQIC8vIGZhbHNlIG9uICcjJ1xuICAgICYmICEocHJldiA9PT0gQ0hBUl9DT0xPTiAmJiAhY0lzTnNDaGFyKSAvLyBmYWxzZSBvbiAnOiAnXG4gICAgfHwgKGlzTnNDaGFyT3JXaGl0ZXNwYWNlKHByZXYpICYmICFpc1doaXRlc3BhY2UocHJldikgJiYgYyA9PT0gQ0hBUl9TSEFSUCkgLy8gY2hhbmdlIHRvIHRydWUgb24gJ1teIF0jJ1xuICAgIHx8IChwcmV2ID09PSBDSEFSX0NPTE9OICYmIGNJc05zQ2hhcik7IC8vIGNoYW5nZSB0byB0cnVlIG9uICc6W14gXSdcbn1cblxuLy8gU2ltcGxpZmllZCB0ZXN0IGZvciB2YWx1ZXMgYWxsb3dlZCBhcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHBsYWluIHN0eWxlLlxuZnVuY3Rpb24gaXNQbGFpblNhZmVGaXJzdChjKSB7XG4gIC8vIFVzZXMgYSBzdWJzZXQgb2YgbnMtY2hhciAtIGMtaW5kaWNhdG9yXG4gIC8vIHdoZXJlIG5zLWNoYXIgPSBuYi1jaGFyIC0gcy13aGl0ZS5cbiAgLy8gTm8gc3VwcG9ydCBvZiAoICgg4oCcP+KAnSB8IOKAnDrigJ0gfCDigJwt4oCdICkgLyogRm9sbG93ZWQgYnkgYW4gbnMtcGxhaW4tc2FmZShjKSkgKi8gKSBwYXJ0XG4gIHJldHVybiBpc1ByaW50YWJsZShjKSAmJiBjICE9PSBDSEFSX0JPTVxuICAgICYmICFpc1doaXRlc3BhY2UoYykgLy8gLSBzLXdoaXRlXG4gICAgLy8gLSAoYy1pbmRpY2F0b3IgOjo9XG4gICAgLy8g4oCcLeKAnSB8IOKAnD/igJ0gfCDigJw64oCdIHwg4oCcLOKAnSB8IOKAnFvigJ0gfCDigJxd4oCdIHwg4oCce+KAnSB8IOKAnH3igJ1cbiAgICAmJiBjICE9PSBDSEFSX01JTlVTXG4gICAgJiYgYyAhPT0gQ0hBUl9RVUVTVElPTlxuICAgICYmIGMgIT09IENIQVJfQ09MT05cbiAgICAmJiBjICE9PSBDSEFSX0NPTU1BXG4gICAgJiYgYyAhPT0gQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUXG4gICAgJiYgYyAhPT0gQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfTEVGVF9DVVJMWV9CUkFDS0VUXG4gICAgJiYgYyAhPT0gQ0hBUl9SSUdIVF9DVVJMWV9CUkFDS0VUXG4gICAgLy8gfCDigJwj4oCdIHwg4oCcJuKAnSB8IOKAnCrigJ0gfCDigJwh4oCdIHwg4oCcfOKAnSB8IOKAnD3igJ0gfCDigJw+4oCdIHwg4oCcJ+KAnSB8IOKAnFwi4oCdXG4gICAgJiYgYyAhPT0gQ0hBUl9TSEFSUFxuICAgICYmIGMgIT09IENIQVJfQU1QRVJTQU5EXG4gICAgJiYgYyAhPT0gQ0hBUl9BU1RFUklTS1xuICAgICYmIGMgIT09IENIQVJfRVhDTEFNQVRJT05cbiAgICAmJiBjICE9PSBDSEFSX1ZFUlRJQ0FMX0xJTkVcbiAgICAmJiBjICE9PSBDSEFSX0VRVUFMU1xuICAgICYmIGMgIT09IENIQVJfR1JFQVRFUl9USEFOXG4gICAgJiYgYyAhPT0gQ0hBUl9TSU5HTEVfUVVPVEVcbiAgICAmJiBjICE9PSBDSEFSX0RPVUJMRV9RVU9URVxuICAgIC8vIHwg4oCcJeKAnSB8IOKAnEDigJ0gfCDigJxg4oCdKVxuICAgICYmIGMgIT09IENIQVJfUEVSQ0VOVFxuICAgICYmIGMgIT09IENIQVJfQ09NTUVSQ0lBTF9BVFxuICAgICYmIGMgIT09IENIQVJfR1JBVkVfQUNDRU5UO1xufVxuXG4vLyBTaW1wbGlmaWVkIHRlc3QgZm9yIHZhbHVlcyBhbGxvd2VkIGFzIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBwbGFpbiBzdHlsZS5cbmZ1bmN0aW9uIGlzUGxhaW5TYWZlTGFzdChjKSB7XG4gIC8vIGp1c3Qgbm90IHdoaXRlc3BhY2Ugb3IgY29sb24sIGl0IHdpbGwgYmUgY2hlY2tlZCB0byBiZSBwbGFpbiBjaGFyYWN0ZXIgbGF0ZXJcbiAgcmV0dXJuICFpc1doaXRlc3BhY2UoYykgJiYgYyAhPT0gQ0hBUl9DT0xPTjtcbn1cblxuLy8gU2FtZSBhcyAnc3RyaW5nJy5jb2RlUG9pbnRBdChwb3MpLCBidXQgd29ya3MgaW4gb2xkZXIgYnJvd3NlcnMuXG5mdW5jdGlvbiBjb2RlUG9pbnRBdChzdHJpbmcsIHBvcykge1xuICB2YXIgZmlyc3QgPSBzdHJpbmcuY2hhckNvZGVBdChwb3MpLCBzZWNvbmQ7XG4gIGlmIChmaXJzdCA+PSAweEQ4MDAgJiYgZmlyc3QgPD0gMHhEQkZGICYmIHBvcyArIDEgPCBzdHJpbmcubGVuZ3RoKSB7XG4gICAgc2Vjb25kID0gc3RyaW5nLmNoYXJDb2RlQXQocG9zICsgMSk7XG4gICAgaWYgKHNlY29uZCA+PSAweERDMDAgJiYgc2Vjb25kIDw9IDB4REZGRikge1xuICAgICAgLy8gaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICByZXR1cm4gKGZpcnN0IC0gMHhEODAwKSAqIDB4NDAwICsgc2Vjb25kIC0gMHhEQzAwICsgMHgxMDAwMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpcnN0O1xufVxuXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYmxvY2sgaW5kZW50YXRpb24gaW5kaWNhdG9yIGlzIHJlcXVpcmVkLlxuZnVuY3Rpb24gbmVlZEluZGVudEluZGljYXRvcihzdHJpbmcpIHtcbiAgdmFyIGxlYWRpbmdTcGFjZVJlID0gL15cXG4qIC87XG4gIHJldHVybiBsZWFkaW5nU3BhY2VSZS50ZXN0KHN0cmluZyk7XG59XG5cbnZhciBTVFlMRV9QTEFJTiAgID0gMSxcbiAgICBTVFlMRV9TSU5HTEUgID0gMixcbiAgICBTVFlMRV9MSVRFUkFMID0gMyxcbiAgICBTVFlMRV9GT0xERUQgID0gNCxcbiAgICBTVFlMRV9ET1VCTEUgID0gNTtcblxuLy8gRGV0ZXJtaW5lcyB3aGljaCBzY2FsYXIgc3R5bGVzIGFyZSBwb3NzaWJsZSBhbmQgcmV0dXJucyB0aGUgcHJlZmVycmVkIHN0eWxlLlxuLy8gbGluZVdpZHRoID0gLTEgPT4gbm8gbGltaXQuXG4vLyBQcmUtY29uZGl0aW9uczogc3RyLmxlbmd0aCA+IDAuXG4vLyBQb3N0LWNvbmRpdGlvbnM6XG4vLyAgICBTVFlMRV9QTEFJTiBvciBTVFlMRV9TSU5HTEUgPT4gbm8gXFxuIGFyZSBpbiB0aGUgc3RyaW5nLlxuLy8gICAgU1RZTEVfTElURVJBTCA9PiBubyBsaW5lcyBhcmUgc3VpdGFibGUgZm9yIGZvbGRpbmcgKG9yIGxpbmVXaWR0aCBpcyAtMSkuXG4vLyAgICBTVFlMRV9GT0xERUQgPT4gYSBsaW5lID4gbGluZVdpZHRoIGFuZCBjYW4gYmUgZm9sZGVkIChhbmQgbGluZVdpZHRoICE9IC0xKS5cbmZ1bmN0aW9uIGNob29zZVNjYWxhclN0eWxlKHN0cmluZywgc2luZ2xlTGluZU9ubHksIGluZGVudFBlckxldmVsLCBsaW5lV2lkdGgsXG4gIHRlc3RBbWJpZ3VvdXNUeXBlLCBxdW90aW5nVHlwZSwgZm9yY2VRdW90ZXMsIGluYmxvY2spIHtcblxuICB2YXIgaTtcbiAgdmFyIGNoYXIgPSAwO1xuICB2YXIgcHJldkNoYXIgPSBudWxsO1xuICB2YXIgaGFzTGluZUJyZWFrID0gZmFsc2U7XG4gIHZhciBoYXNGb2xkYWJsZUxpbmUgPSBmYWxzZTsgLy8gb25seSBjaGVja2VkIGlmIHNob3VsZFRyYWNrV2lkdGhcbiAgdmFyIHNob3VsZFRyYWNrV2lkdGggPSBsaW5lV2lkdGggIT09IC0xO1xuICB2YXIgcHJldmlvdXNMaW5lQnJlYWsgPSAtMTsgLy8gY291bnQgdGhlIGZpcnN0IGxpbmUgY29ycmVjdGx5XG4gIHZhciBwbGFpbiA9IGlzUGxhaW5TYWZlRmlyc3QoY29kZVBvaW50QXQoc3RyaW5nLCAwKSlcbiAgICAgICAgICAmJiBpc1BsYWluU2FmZUxhc3QoY29kZVBvaW50QXQoc3RyaW5nLCBzdHJpbmcubGVuZ3RoIC0gMSkpO1xuXG4gIGlmIChzaW5nbGVMaW5lT25seSB8fCBmb3JjZVF1b3Rlcykge1xuICAgIC8vIENhc2U6IG5vIGJsb2NrIHN0eWxlcy5cbiAgICAvLyBDaGVjayBmb3IgZGlzYWxsb3dlZCBjaGFyYWN0ZXJzIHRvIHJ1bGUgb3V0IHBsYWluIGFuZCBzaW5nbGUuXG4gICAgZm9yIChpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGNoYXIgPj0gMHgxMDAwMCA/IGkgKz0gMiA6IGkrKykge1xuICAgICAgY2hhciA9IGNvZGVQb2ludEF0KHN0cmluZywgaSk7XG4gICAgICBpZiAoIWlzUHJpbnRhYmxlKGNoYXIpKSB7XG4gICAgICAgIHJldHVybiBTVFlMRV9ET1VCTEU7XG4gICAgICB9XG4gICAgICBwbGFpbiA9IHBsYWluICYmIGlzUGxhaW5TYWZlKGNoYXIsIHByZXZDaGFyLCBpbmJsb2NrKTtcbiAgICAgIHByZXZDaGFyID0gY2hhcjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gQ2FzZTogYmxvY2sgc3R5bGVzIHBlcm1pdHRlZC5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgY2hhciA+PSAweDEwMDAwID8gaSArPSAyIDogaSsrKSB7XG4gICAgICBjaGFyID0gY29kZVBvaW50QXQoc3RyaW5nLCBpKTtcbiAgICAgIGlmIChjaGFyID09PSBDSEFSX0xJTkVfRkVFRCkge1xuICAgICAgICBoYXNMaW5lQnJlYWsgPSB0cnVlO1xuICAgICAgICAvLyBDaGVjayBpZiBhbnkgbGluZSBjYW4gYmUgZm9sZGVkLlxuICAgICAgICBpZiAoc2hvdWxkVHJhY2tXaWR0aCkge1xuICAgICAgICAgIGhhc0ZvbGRhYmxlTGluZSA9IGhhc0ZvbGRhYmxlTGluZSB8fFxuICAgICAgICAgICAgLy8gRm9sZGFibGUgbGluZSA9IHRvbyBsb25nLCBhbmQgbm90IG1vcmUtaW5kZW50ZWQuXG4gICAgICAgICAgICAoaSAtIHByZXZpb3VzTGluZUJyZWFrIC0gMSA+IGxpbmVXaWR0aCAmJlxuICAgICAgICAgICAgIHN0cmluZ1twcmV2aW91c0xpbmVCcmVhayArIDFdICE9PSAnICcpO1xuICAgICAgICAgIHByZXZpb3VzTGluZUJyZWFrID0gaTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghaXNQcmludGFibGUoY2hhcikpIHtcbiAgICAgICAgcmV0dXJuIFNUWUxFX0RPVUJMRTtcbiAgICAgIH1cbiAgICAgIHBsYWluID0gcGxhaW4gJiYgaXNQbGFpblNhZmUoY2hhciwgcHJldkNoYXIsIGluYmxvY2spO1xuICAgICAgcHJldkNoYXIgPSBjaGFyO1xuICAgIH1cbiAgICAvLyBpbiBjYXNlIHRoZSBlbmQgaXMgbWlzc2luZyBhIFxcblxuICAgIGhhc0ZvbGRhYmxlTGluZSA9IGhhc0ZvbGRhYmxlTGluZSB8fCAoc2hvdWxkVHJhY2tXaWR0aCAmJlxuICAgICAgKGkgLSBwcmV2aW91c0xpbmVCcmVhayAtIDEgPiBsaW5lV2lkdGggJiZcbiAgICAgICBzdHJpbmdbcHJldmlvdXNMaW5lQnJlYWsgKyAxXSAhPT0gJyAnKSk7XG4gIH1cbiAgLy8gQWx0aG91Z2ggZXZlcnkgc3R5bGUgY2FuIHJlcHJlc2VudCBcXG4gd2l0aG91dCBlc2NhcGluZywgcHJlZmVyIGJsb2NrIHN0eWxlc1xuICAvLyBmb3IgbXVsdGlsaW5lLCBzaW5jZSB0aGV5J3JlIG1vcmUgcmVhZGFibGUgYW5kIHRoZXkgZG9uJ3QgYWRkIGVtcHR5IGxpbmVzLlxuICAvLyBBbHNvIHByZWZlciBmb2xkaW5nIGEgc3VwZXItbG9uZyBsaW5lLlxuICBpZiAoIWhhc0xpbmVCcmVhayAmJiAhaGFzRm9sZGFibGVMaW5lKSB7XG4gICAgLy8gU3RyaW5ncyBpbnRlcnByZXRhYmxlIGFzIGFub3RoZXIgdHlwZSBoYXZlIHRvIGJlIHF1b3RlZDtcbiAgICAvLyBlLmcuIHRoZSBzdHJpbmcgJ3RydWUnIHZzLiB0aGUgYm9vbGVhbiB0cnVlLlxuICAgIGlmIChwbGFpbiAmJiAhZm9yY2VRdW90ZXMgJiYgIXRlc3RBbWJpZ3VvdXNUeXBlKHN0cmluZykpIHtcbiAgICAgIHJldHVybiBTVFlMRV9QTEFJTjtcbiAgICB9XG4gICAgcmV0dXJuIHF1b3RpbmdUeXBlID09PSBRVU9USU5HX1RZUEVfRE9VQkxFID8gU1RZTEVfRE9VQkxFIDogU1RZTEVfU0lOR0xFO1xuICB9XG4gIC8vIEVkZ2UgY2FzZTogYmxvY2sgaW5kZW50YXRpb24gaW5kaWNhdG9yIGNhbiBvbmx5IGhhdmUgb25lIGRpZ2l0LlxuICBpZiAoaW5kZW50UGVyTGV2ZWwgPiA5ICYmIG5lZWRJbmRlbnRJbmRpY2F0b3Ioc3RyaW5nKSkge1xuICAgIHJldHVybiBTVFlMRV9ET1VCTEU7XG4gIH1cbiAgLy8gQXQgdGhpcyBwb2ludCB3ZSBrbm93IGJsb2NrIHN0eWxlcyBhcmUgdmFsaWQuXG4gIC8vIFByZWZlciBsaXRlcmFsIHN0eWxlIHVubGVzcyB3ZSB3YW50IHRvIGZvbGQuXG4gIGlmICghZm9yY2VRdW90ZXMpIHtcbiAgICByZXR1cm4gaGFzRm9sZGFibGVMaW5lID8gU1RZTEVfRk9MREVEIDogU1RZTEVfTElURVJBTDtcbiAgfVxuICByZXR1cm4gcXVvdGluZ1R5cGUgPT09IFFVT1RJTkdfVFlQRV9ET1VCTEUgPyBTVFlMRV9ET1VCTEUgOiBTVFlMRV9TSU5HTEU7XG59XG5cbi8vIE5vdGU6IGxpbmUgYnJlYWtpbmcvZm9sZGluZyBpcyBpbXBsZW1lbnRlZCBmb3Igb25seSB0aGUgZm9sZGVkIHN0eWxlLlxuLy8gTkIuIFdlIGRyb3AgdGhlIGxhc3QgdHJhaWxpbmcgbmV3bGluZSAoaWYgYW55KSBvZiBhIHJldHVybmVkIGJsb2NrIHNjYWxhclxuLy8gIHNpbmNlIHRoZSBkdW1wZXIgYWRkcyBpdHMgb3duIG5ld2xpbmUuIFRoaXMgYWx3YXlzIHdvcmtzOlxuLy8gICAg4oCiIE5vIGVuZGluZyBuZXdsaW5lID0+IHVuYWZmZWN0ZWQ7IGFscmVhZHkgdXNpbmcgc3RyaXAgXCItXCIgY2hvbXBpbmcuXG4vLyAgICDigKIgRW5kaW5nIG5ld2xpbmUgICAgPT4gcmVtb3ZlZCB0aGVuIHJlc3RvcmVkLlxuLy8gIEltcG9ydGFudGx5LCB0aGlzIGtlZXBzIHRoZSBcIitcIiBjaG9tcCBpbmRpY2F0b3IgZnJvbSBnYWluaW5nIGFuIGV4dHJhIGxpbmUuXG5mdW5jdGlvbiB3cml0ZVNjYWxhcihzdGF0ZSwgc3RyaW5nLCBsZXZlbCwgaXNrZXksIGluYmxvY2spIHtcbiAgc3RhdGUuZHVtcCA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBzdGF0ZS5xdW90aW5nVHlwZSA9PT0gUVVPVElOR19UWVBFX0RPVUJMRSA/ICdcIlwiJyA6IFwiJydcIjtcbiAgICB9XG4gICAgaWYgKCFzdGF0ZS5ub0NvbXBhdE1vZGUpIHtcbiAgICAgIGlmIChERVBSRUNBVEVEX0JPT0xFQU5TX1NZTlRBWC5pbmRleE9mKHN0cmluZykgIT09IC0xIHx8IERFUFJFQ0FURURfQkFTRTYwX1NZTlRBWC50ZXN0KHN0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnF1b3RpbmdUeXBlID09PSBRVU9USU5HX1RZUEVfRE9VQkxFID8gKCdcIicgKyBzdHJpbmcgKyAnXCInKSA6IChcIidcIiArIHN0cmluZyArIFwiJ1wiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaW5kZW50ID0gc3RhdGUuaW5kZW50ICogTWF0aC5tYXgoMSwgbGV2ZWwpOyAvLyBubyAwLWluZGVudCBzY2FsYXJzXG4gICAgLy8gQXMgaW5kZW50YXRpb24gZ2V0cyBkZWVwZXIsIGxldCB0aGUgd2lkdGggZGVjcmVhc2UgbW9ub3RvbmljYWxseVxuICAgIC8vIHRvIHRoZSBsb3dlciBib3VuZCBtaW4oc3RhdGUubGluZVdpZHRoLCA0MCkuXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaW1wbGllc1xuICAgIC8vICBzdGF0ZS5saW5lV2lkdGgg4omkIDQwICsgc3RhdGUuaW5kZW50OiB3aWR0aCBpcyBmaXhlZCBhdCB0aGUgbG93ZXIgYm91bmQuXG4gICAgLy8gIHN0YXRlLmxpbmVXaWR0aCA+IDQwICsgc3RhdGUuaW5kZW50OiB3aWR0aCBkZWNyZWFzZXMgdW50aWwgdGhlIGxvd2VyIGJvdW5kLlxuICAgIC8vIFRoaXMgYmVoYXZlcyBiZXR0ZXIgdGhhbiBhIGNvbnN0YW50IG1pbmltdW0gd2lkdGggd2hpY2ggZGlzYWxsb3dzIG5hcnJvd2VyIG9wdGlvbnMsXG4gICAgLy8gb3IgYW4gaW5kZW50IHRocmVzaG9sZCB3aGljaCBjYXVzZXMgdGhlIHdpZHRoIHRvIHN1ZGRlbmx5IGluY3JlYXNlLlxuICAgIHZhciBsaW5lV2lkdGggPSBzdGF0ZS5saW5lV2lkdGggPT09IC0xXG4gICAgICA/IC0xIDogTWF0aC5tYXgoTWF0aC5taW4oc3RhdGUubGluZVdpZHRoLCA0MCksIHN0YXRlLmxpbmVXaWR0aCAtIGluZGVudCk7XG5cbiAgICAvLyBXaXRob3V0IGtub3dpbmcgaWYga2V5cyBhcmUgaW1wbGljaXQvZXhwbGljaXQsIGFzc3VtZSBpbXBsaWNpdCBmb3Igc2FmZXR5LlxuICAgIHZhciBzaW5nbGVMaW5lT25seSA9IGlza2V5XG4gICAgICAvLyBObyBibG9jayBzdHlsZXMgaW4gZmxvdyBtb2RlLlxuICAgICAgfHwgKHN0YXRlLmZsb3dMZXZlbCA+IC0xICYmIGxldmVsID49IHN0YXRlLmZsb3dMZXZlbCk7XG4gICAgZnVuY3Rpb24gdGVzdEFtYmlndWl0eShzdHJpbmcpIHtcbiAgICAgIHJldHVybiB0ZXN0SW1wbGljaXRSZXNvbHZpbmcoc3RhdGUsIHN0cmluZyk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChjaG9vc2VTY2FsYXJTdHlsZShzdHJpbmcsIHNpbmdsZUxpbmVPbmx5LCBzdGF0ZS5pbmRlbnQsIGxpbmVXaWR0aCxcbiAgICAgIHRlc3RBbWJpZ3VpdHksIHN0YXRlLnF1b3RpbmdUeXBlLCBzdGF0ZS5mb3JjZVF1b3RlcyAmJiAhaXNrZXksIGluYmxvY2spKSB7XG5cbiAgICAgIGNhc2UgU1RZTEVfUExBSU46XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICBjYXNlIFNUWUxFX1NJTkdMRTpcbiAgICAgICAgcmV0dXJuIFwiJ1wiICsgc3RyaW5nLnJlcGxhY2UoLycvZywgXCInJ1wiKSArIFwiJ1wiO1xuICAgICAgY2FzZSBTVFlMRV9MSVRFUkFMOlxuICAgICAgICByZXR1cm4gJ3wnICsgYmxvY2tIZWFkZXIoc3RyaW5nLCBzdGF0ZS5pbmRlbnQpXG4gICAgICAgICAgKyBkcm9wRW5kaW5nTmV3bGluZShpbmRlbnRTdHJpbmcoc3RyaW5nLCBpbmRlbnQpKTtcbiAgICAgIGNhc2UgU1RZTEVfRk9MREVEOlxuICAgICAgICByZXR1cm4gJz4nICsgYmxvY2tIZWFkZXIoc3RyaW5nLCBzdGF0ZS5pbmRlbnQpXG4gICAgICAgICAgKyBkcm9wRW5kaW5nTmV3bGluZShpbmRlbnRTdHJpbmcoZm9sZFN0cmluZyhzdHJpbmcsIGxpbmVXaWR0aCksIGluZGVudCkpO1xuICAgICAgY2FzZSBTVFlMRV9ET1VCTEU6XG4gICAgICAgIHJldHVybiAnXCInICsgZXNjYXBlU3RyaW5nKHN0cmluZykgKyAnXCInO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignaW1wb3NzaWJsZSBlcnJvcjogaW52YWxpZCBzY2FsYXIgc3R5bGUnKTtcbiAgICB9XG4gIH0oKSk7XG59XG5cbi8vIFByZS1jb25kaXRpb25zOiBzdHJpbmcgaXMgdmFsaWQgZm9yIGEgYmxvY2sgc2NhbGFyLCAxIDw9IGluZGVudFBlckxldmVsIDw9IDkuXG5mdW5jdGlvbiBibG9ja0hlYWRlcihzdHJpbmcsIGluZGVudFBlckxldmVsKSB7XG4gIHZhciBpbmRlbnRJbmRpY2F0b3IgPSBuZWVkSW5kZW50SW5kaWNhdG9yKHN0cmluZykgPyBTdHJpbmcoaW5kZW50UGVyTGV2ZWwpIDogJyc7XG5cbiAgLy8gbm90ZSB0aGUgc3BlY2lhbCBjYXNlOiB0aGUgc3RyaW5nICdcXG4nIGNvdW50cyBhcyBhIFwidHJhaWxpbmdcIiBlbXB0eSBsaW5lLlxuICB2YXIgY2xpcCA9ICAgICAgICAgIHN0cmluZ1tzdHJpbmcubGVuZ3RoIC0gMV0gPT09ICdcXG4nO1xuICB2YXIga2VlcCA9IGNsaXAgJiYgKHN0cmluZ1tzdHJpbmcubGVuZ3RoIC0gMl0gPT09ICdcXG4nIHx8IHN0cmluZyA9PT0gJ1xcbicpO1xuICB2YXIgY2hvbXAgPSBrZWVwID8gJysnIDogKGNsaXAgPyAnJyA6ICctJyk7XG5cbiAgcmV0dXJuIGluZGVudEluZGljYXRvciArIGNob21wICsgJ1xcbic7XG59XG5cbi8vIChTZWUgdGhlIG5vdGUgZm9yIHdyaXRlU2NhbGFyLilcbmZ1bmN0aW9uIGRyb3BFbmRpbmdOZXdsaW5lKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nW3N0cmluZy5sZW5ndGggLSAxXSA9PT0gJ1xcbicgPyBzdHJpbmcuc2xpY2UoMCwgLTEpIDogc3RyaW5nO1xufVxuXG4vLyBOb3RlOiBhIGxvbmcgbGluZSB3aXRob3V0IGEgc3VpdGFibGUgYnJlYWsgcG9pbnQgd2lsbCBleGNlZWQgdGhlIHdpZHRoIGxpbWl0LlxuLy8gUHJlLWNvbmRpdGlvbnM6IGV2ZXJ5IGNoYXIgaW4gc3RyIGlzUHJpbnRhYmxlLCBzdHIubGVuZ3RoID4gMCwgd2lkdGggPiAwLlxuZnVuY3Rpb24gZm9sZFN0cmluZyhzdHJpbmcsIHdpZHRoKSB7XG4gIC8vIEluIGZvbGRlZCBzdHlsZSwgJGskIGNvbnNlY3V0aXZlIG5ld2xpbmVzIG91dHB1dCBhcyAkaysxJCBuZXdsaW5lc+KAlFxuICAvLyB1bmxlc3MgdGhleSdyZSBiZWZvcmUgb3IgYWZ0ZXIgYSBtb3JlLWluZGVudGVkIGxpbmUsIG9yIGF0IHRoZSB2ZXJ5XG4gIC8vIGJlZ2lubmluZyBvciBlbmQsIGluIHdoaWNoIGNhc2UgJGskIG1hcHMgdG8gJGskLlxuICAvLyBUaGVyZWZvcmUsIHBhcnNlIGVhY2ggY2h1bmsgYXMgbmV3bGluZShzKSBmb2xsb3dlZCBieSBhIGNvbnRlbnQgbGluZS5cbiAgdmFyIGxpbmVSZSA9IC8oXFxuKykoW15cXG5dKikvZztcblxuICAvLyBmaXJzdCBsaW5lIChwb3NzaWJseSBhbiBlbXB0eSBsaW5lKVxuICB2YXIgcmVzdWx0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV4dExGID0gc3RyaW5nLmluZGV4T2YoJ1xcbicpO1xuICAgIG5leHRMRiA9IG5leHRMRiAhPT0gLTEgPyBuZXh0TEYgOiBzdHJpbmcubGVuZ3RoO1xuICAgIGxpbmVSZS5sYXN0SW5kZXggPSBuZXh0TEY7XG4gICAgcmV0dXJuIGZvbGRMaW5lKHN0cmluZy5zbGljZSgwLCBuZXh0TEYpLCB3aWR0aCk7XG4gIH0oKSk7XG4gIC8vIElmIHdlIGhhdmVuJ3QgcmVhY2hlZCB0aGUgZmlyc3QgY29udGVudCBsaW5lIHlldCwgZG9uJ3QgYWRkIGFuIGV4dHJhIFxcbi5cbiAgdmFyIHByZXZNb3JlSW5kZW50ZWQgPSBzdHJpbmdbMF0gPT09ICdcXG4nIHx8IHN0cmluZ1swXSA9PT0gJyAnO1xuICB2YXIgbW9yZUluZGVudGVkO1xuXG4gIC8vIHJlc3Qgb2YgdGhlIGxpbmVzXG4gIHZhciBtYXRjaDtcbiAgd2hpbGUgKChtYXRjaCA9IGxpbmVSZS5leGVjKHN0cmluZykpKSB7XG4gICAgdmFyIHByZWZpeCA9IG1hdGNoWzFdLCBsaW5lID0gbWF0Y2hbMl07XG4gICAgbW9yZUluZGVudGVkID0gKGxpbmVbMF0gPT09ICcgJyk7XG4gICAgcmVzdWx0ICs9IHByZWZpeFxuICAgICAgKyAoIXByZXZNb3JlSW5kZW50ZWQgJiYgIW1vcmVJbmRlbnRlZCAmJiBsaW5lICE9PSAnJ1xuICAgICAgICA/ICdcXG4nIDogJycpXG4gICAgICArIGZvbGRMaW5lKGxpbmUsIHdpZHRoKTtcbiAgICBwcmV2TW9yZUluZGVudGVkID0gbW9yZUluZGVudGVkO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gR3JlZWR5IGxpbmUgYnJlYWtpbmcuXG4vLyBQaWNrcyB0aGUgbG9uZ2VzdCBsaW5lIHVuZGVyIHRoZSBsaW1pdCBlYWNoIHRpbWUsXG4vLyBvdGhlcndpc2Ugc2V0dGxlcyBmb3IgdGhlIHNob3J0ZXN0IGxpbmUgb3ZlciB0aGUgbGltaXQuXG4vLyBOQi4gTW9yZS1pbmRlbnRlZCBsaW5lcyAqY2Fubm90KiBiZSBmb2xkZWQsIGFzIHRoYXQgd291bGQgYWRkIGFuIGV4dHJhIFxcbi5cbmZ1bmN0aW9uIGZvbGRMaW5lKGxpbmUsIHdpZHRoKSB7XG4gIGlmIChsaW5lID09PSAnJyB8fCBsaW5lWzBdID09PSAnICcpIHJldHVybiBsaW5lO1xuXG4gIC8vIFNpbmNlIGEgbW9yZS1pbmRlbnRlZCBsaW5lIGFkZHMgYSBcXG4sIGJyZWFrcyBjYW4ndCBiZSBmb2xsb3dlZCBieSBhIHNwYWNlLlxuICB2YXIgYnJlYWtSZSA9IC8gW14gXS9nOyAvLyBub3RlOiB0aGUgbWF0Y2ggaW5kZXggd2lsbCBhbHdheXMgYmUgPD0gbGVuZ3RoLTIuXG4gIHZhciBtYXRjaDtcbiAgLy8gc3RhcnQgaXMgYW4gaW5jbHVzaXZlIGluZGV4LiBlbmQsIGN1cnIsIGFuZCBuZXh0IGFyZSBleGNsdXNpdmUuXG4gIHZhciBzdGFydCA9IDAsIGVuZCwgY3VyciA9IDAsIG5leHQgPSAwO1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgLy8gSW52YXJpYW50czogMCA8PSBzdGFydCA8PSBsZW5ndGgtMS5cbiAgLy8gICAwIDw9IGN1cnIgPD0gbmV4dCA8PSBtYXgoMCwgbGVuZ3RoLTIpLiBjdXJyIC0gc3RhcnQgPD0gd2lkdGguXG4gIC8vIEluc2lkZSB0aGUgbG9vcDpcbiAgLy8gICBBIG1hdGNoIGltcGxpZXMgbGVuZ3RoID49IDIsIHNvIGN1cnIgYW5kIG5leHQgYXJlIDw9IGxlbmd0aC0yLlxuICB3aGlsZSAoKG1hdGNoID0gYnJlYWtSZS5leGVjKGxpbmUpKSkge1xuICAgIG5leHQgPSBtYXRjaC5pbmRleDtcbiAgICAvLyBtYWludGFpbiBpbnZhcmlhbnQ6IGN1cnIgLSBzdGFydCA8PSB3aWR0aFxuICAgIGlmIChuZXh0IC0gc3RhcnQgPiB3aWR0aCkge1xuICAgICAgZW5kID0gKGN1cnIgPiBzdGFydCkgPyBjdXJyIDogbmV4dDsgLy8gZGVyaXZlIGVuZCA8PSBsZW5ndGgtMlxuICAgICAgcmVzdWx0ICs9ICdcXG4nICsgbGluZS5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIC8vIHNraXAgdGhlIHNwYWNlIHRoYXQgd2FzIG91dHB1dCBhcyBcXG5cbiAgICAgIHN0YXJ0ID0gZW5kICsgMTsgICAgICAgICAgICAgICAgICAgIC8vIGRlcml2ZSBzdGFydCA8PSBsZW5ndGgtMVxuICAgIH1cbiAgICBjdXJyID0gbmV4dDtcbiAgfVxuXG4gIC8vIEJ5IHRoZSBpbnZhcmlhbnRzLCBzdGFydCA8PSBsZW5ndGgtMSwgc28gdGhlcmUgaXMgc29tZXRoaW5nIGxlZnQgb3Zlci5cbiAgLy8gSXQgaXMgZWl0aGVyIHRoZSB3aG9sZSBzdHJpbmcgb3IgYSBwYXJ0IHN0YXJ0aW5nIGZyb20gbm9uLXdoaXRlc3BhY2UuXG4gIHJlc3VsdCArPSAnXFxuJztcbiAgLy8gSW5zZXJ0IGEgYnJlYWsgaWYgdGhlIHJlbWFpbmRlciBpcyB0b28gbG9uZyBhbmQgdGhlcmUgaXMgYSBicmVhayBhdmFpbGFibGUuXG4gIGlmIChsaW5lLmxlbmd0aCAtIHN0YXJ0ID4gd2lkdGggJiYgY3VyciA+IHN0YXJ0KSB7XG4gICAgcmVzdWx0ICs9IGxpbmUuc2xpY2Uoc3RhcnQsIGN1cnIpICsgJ1xcbicgKyBsaW5lLnNsaWNlKGN1cnIgKyAxKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgKz0gbGluZS5zbGljZShzdGFydCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LnNsaWNlKDEpOyAvLyBkcm9wIGV4dHJhIFxcbiBqb2luZXJcbn1cblxuLy8gRXNjYXBlcyBhIGRvdWJsZS1xdW90ZWQgc3RyaW5nLlxuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjaGFyID0gMDtcbiAgdmFyIGVzY2FwZVNlcTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGNoYXIgPj0gMHgxMDAwMCA/IGkgKz0gMiA6IGkrKykge1xuICAgIGNoYXIgPSBjb2RlUG9pbnRBdChzdHJpbmcsIGkpO1xuICAgIGVzY2FwZVNlcSA9IEVTQ0FQRV9TRVFVRU5DRVNbY2hhcl07XG5cbiAgICBpZiAoIWVzY2FwZVNlcSAmJiBpc1ByaW50YWJsZShjaGFyKSkge1xuICAgICAgcmVzdWx0ICs9IHN0cmluZ1tpXTtcbiAgICAgIGlmIChjaGFyID49IDB4MTAwMDApIHJlc3VsdCArPSBzdHJpbmdbaSArIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gZXNjYXBlU2VxIHx8IGVuY29kZUhleChjaGFyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB3cml0ZUZsb3dTZXF1ZW5jZShzdGF0ZSwgbGV2ZWwsIG9iamVjdCkge1xuICB2YXIgX3Jlc3VsdCA9ICcnLFxuICAgICAgX3RhZyAgICA9IHN0YXRlLnRhZyxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoLFxuICAgICAgdmFsdWU7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdmFsdWUgPSBvYmplY3RbaW5kZXhdO1xuXG4gICAgaWYgKHN0YXRlLnJlcGxhY2VyKSB7XG4gICAgICB2YWx1ZSA9IHN0YXRlLnJlcGxhY2VyLmNhbGwob2JqZWN0LCBTdHJpbmcoaW5kZXgpLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gV3JpdGUgb25seSB2YWxpZCBlbGVtZW50cywgcHV0IG51bGwgaW5zdGVhZCBvZiBpbnZhbGlkIGVsZW1lbnRzLlxuICAgIGlmICh3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCB2YWx1ZSwgZmFsc2UsIGZhbHNlKSB8fFxuICAgICAgICAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgbnVsbCwgZmFsc2UsIGZhbHNlKSkpIHtcblxuICAgICAgaWYgKF9yZXN1bHQgIT09ICcnKSBfcmVzdWx0ICs9ICcsJyArICghc3RhdGUuY29uZGVuc2VGbG93ID8gJyAnIDogJycpO1xuICAgICAgX3Jlc3VsdCArPSBzdGF0ZS5kdW1wO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSAnWycgKyBfcmVzdWx0ICsgJ10nO1xufVxuXG5mdW5jdGlvbiB3cml0ZUJsb2NrU2VxdWVuY2Uoc3RhdGUsIGxldmVsLCBvYmplY3QsIGNvbXBhY3QpIHtcbiAgdmFyIF9yZXN1bHQgPSAnJyxcbiAgICAgIF90YWcgICAgPSBzdGF0ZS50YWcsXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aCxcbiAgICAgIHZhbHVlO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHZhbHVlID0gb2JqZWN0W2luZGV4XTtcblxuICAgIGlmIChzdGF0ZS5yZXBsYWNlcikge1xuICAgICAgdmFsdWUgPSBzdGF0ZS5yZXBsYWNlci5jYWxsKG9iamVjdCwgU3RyaW5nKGluZGV4KSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8vIFdyaXRlIG9ubHkgdmFsaWQgZWxlbWVudHMsIHB1dCBudWxsIGluc3RlYWQgb2YgaW52YWxpZCBlbGVtZW50cy5cbiAgICBpZiAod3JpdGVOb2RlKHN0YXRlLCBsZXZlbCArIDEsIHZhbHVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSkgfHxcbiAgICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgIHdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwgKyAxLCBudWxsLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSkpKSB7XG5cbiAgICAgIGlmICghY29tcGFjdCB8fCBfcmVzdWx0ICE9PSAnJykge1xuICAgICAgICBfcmVzdWx0ICs9IGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmR1bXAgJiYgQ0hBUl9MSU5FX0ZFRUQgPT09IHN0YXRlLmR1bXAuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICBfcmVzdWx0ICs9ICctJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9yZXN1bHQgKz0gJy0gJztcbiAgICAgIH1cblxuICAgICAgX3Jlc3VsdCArPSBzdGF0ZS5kdW1wO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSBfcmVzdWx0IHx8ICdbXSc7IC8vIEVtcHR5IHNlcXVlbmNlIGlmIG5vIHZhbGlkIHZhbHVlcy5cbn1cblxuZnVuY3Rpb24gd3JpdGVGbG93TWFwcGluZyhzdGF0ZSwgbGV2ZWwsIG9iamVjdCkge1xuICB2YXIgX3Jlc3VsdCAgICAgICA9ICcnLFxuICAgICAgX3RhZyAgICAgICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIG9iamVjdEtleUxpc3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGgsXG4gICAgICBvYmplY3RLZXksXG4gICAgICBvYmplY3RWYWx1ZSxcbiAgICAgIHBhaXJCdWZmZXI7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdEtleUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuXG4gICAgcGFpckJ1ZmZlciA9ICcnO1xuICAgIGlmIChfcmVzdWx0ICE9PSAnJykgcGFpckJ1ZmZlciArPSAnLCAnO1xuXG4gICAgaWYgKHN0YXRlLmNvbmRlbnNlRmxvdykgcGFpckJ1ZmZlciArPSAnXCInO1xuXG4gICAgb2JqZWN0S2V5ID0gb2JqZWN0S2V5TGlzdFtpbmRleF07XG4gICAgb2JqZWN0VmFsdWUgPSBvYmplY3Rbb2JqZWN0S2V5XTtcblxuICAgIGlmIChzdGF0ZS5yZXBsYWNlcikge1xuICAgICAgb2JqZWN0VmFsdWUgPSBzdGF0ZS5yZXBsYWNlci5jYWxsKG9iamVjdCwgb2JqZWN0S2V5LCBvYmplY3RWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBvYmplY3RLZXksIGZhbHNlLCBmYWxzZSkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQga2V5O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kdW1wLmxlbmd0aCA+IDEwMjQpIHBhaXJCdWZmZXIgKz0gJz8gJztcblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcCArIChzdGF0ZS5jb25kZW5zZUZsb3cgPyAnXCInIDogJycpICsgJzonICsgKHN0YXRlLmNvbmRlbnNlRmxvdyA/ICcnIDogJyAnKTtcblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgb2JqZWN0VmFsdWUsIGZhbHNlLCBmYWxzZSkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQgdmFsdWUuXG4gICAgfVxuXG4gICAgcGFpckJ1ZmZlciArPSBzdGF0ZS5kdW1wO1xuXG4gICAgLy8gQm90aCBrZXkgYW5kIHZhbHVlIGFyZSB2YWxpZC5cbiAgICBfcmVzdWx0ICs9IHBhaXJCdWZmZXI7XG4gIH1cblxuICBzdGF0ZS50YWcgPSBfdGFnO1xuICBzdGF0ZS5kdW1wID0gJ3snICsgX3Jlc3VsdCArICd9Jztcbn1cblxuZnVuY3Rpb24gd3JpdGVCbG9ja01hcHBpbmcoc3RhdGUsIGxldmVsLCBvYmplY3QsIGNvbXBhY3QpIHtcbiAgdmFyIF9yZXN1bHQgICAgICAgPSAnJyxcbiAgICAgIF90YWcgICAgICAgICAgPSBzdGF0ZS50YWcsXG4gICAgICBvYmplY3RLZXlMaXN0ID0gT2JqZWN0LmtleXMob2JqZWN0KSxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoLFxuICAgICAgb2JqZWN0S2V5LFxuICAgICAgb2JqZWN0VmFsdWUsXG4gICAgICBleHBsaWNpdFBhaXIsXG4gICAgICBwYWlyQnVmZmVyO1xuXG4gIC8vIEFsbG93IHNvcnRpbmcga2V5cyBzbyB0aGF0IHRoZSBvdXRwdXQgZmlsZSBpcyBkZXRlcm1pbmlzdGljXG4gIGlmIChzdGF0ZS5zb3J0S2V5cyA9PT0gdHJ1ZSkge1xuICAgIC8vIERlZmF1bHQgc29ydGluZ1xuICAgIG9iamVjdEtleUxpc3Quc29ydCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzdGF0ZS5zb3J0S2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEN1c3RvbSBzb3J0IGZ1bmN0aW9uXG4gICAgb2JqZWN0S2V5TGlzdC5zb3J0KHN0YXRlLnNvcnRLZXlzKTtcbiAgfSBlbHNlIGlmIChzdGF0ZS5zb3J0S2V5cykge1xuICAgIC8vIFNvbWV0aGluZyBpcyB3cm9uZ1xuICAgIHRocm93IG5ldyBleGNlcHRpb24oJ3NvcnRLZXlzIG11c3QgYmUgYSBib29sZWFuIG9yIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3RLZXlMaXN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBwYWlyQnVmZmVyID0gJyc7XG5cbiAgICBpZiAoIWNvbXBhY3QgfHwgX3Jlc3VsdCAhPT0gJycpIHtcbiAgICAgIHBhaXJCdWZmZXIgKz0gZ2VuZXJhdGVOZXh0TGluZShzdGF0ZSwgbGV2ZWwpO1xuICAgIH1cblxuICAgIG9iamVjdEtleSA9IG9iamVjdEtleUxpc3RbaW5kZXhdO1xuICAgIG9iamVjdFZhbHVlID0gb2JqZWN0W29iamVjdEtleV07XG5cbiAgICBpZiAoc3RhdGUucmVwbGFjZXIpIHtcbiAgICAgIG9iamVjdFZhbHVlID0gc3RhdGUucmVwbGFjZXIuY2FsbChvYmplY3QsIG9iamVjdEtleSwgb2JqZWN0VmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCArIDEsIG9iamVjdEtleSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQga2V5LlxuICAgIH1cblxuICAgIGV4cGxpY2l0UGFpciA9IChzdGF0ZS50YWcgIT09IG51bGwgJiYgc3RhdGUudGFnICE9PSAnPycpIHx8XG4gICAgICAgICAgICAgICAgICAgKHN0YXRlLmR1bXAgJiYgc3RhdGUuZHVtcC5sZW5ndGggPiAxMDI0KTtcblxuICAgIGlmIChleHBsaWNpdFBhaXIpIHtcbiAgICAgIGlmIChzdGF0ZS5kdW1wICYmIENIQVJfTElORV9GRUVEID09PSBzdGF0ZS5kdW1wLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgcGFpckJ1ZmZlciArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWlyQnVmZmVyICs9ICc/ICc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFpckJ1ZmZlciArPSBzdGF0ZS5kdW1wO1xuXG4gICAgaWYgKGV4cGxpY2l0UGFpcikge1xuICAgICAgcGFpckJ1ZmZlciArPSBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgb2JqZWN0VmFsdWUsIHRydWUsIGV4cGxpY2l0UGFpcikpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQgdmFsdWUuXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmR1bXAgJiYgQ0hBUl9MSU5FX0ZFRUQgPT09IHN0YXRlLmR1bXAuY2hhckNvZGVBdCgwKSkge1xuICAgICAgcGFpckJ1ZmZlciArPSAnOic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhaXJCdWZmZXIgKz0gJzogJztcbiAgICB9XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXA7XG5cbiAgICAvLyBCb3RoIGtleSBhbmQgdmFsdWUgYXJlIHZhbGlkLlxuICAgIF9yZXN1bHQgKz0gcGFpckJ1ZmZlcjtcbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSBfcmVzdWx0IHx8ICd7fSc7IC8vIEVtcHR5IG1hcHBpbmcgaWYgbm8gdmFsaWQgcGFpcnMuXG59XG5cbmZ1bmN0aW9uIGRldGVjdFR5cGUoc3RhdGUsIG9iamVjdCwgZXhwbGljaXQpIHtcbiAgdmFyIF9yZXN1bHQsIHR5cGVMaXN0LCBpbmRleCwgbGVuZ3RoLCB0eXBlLCBzdHlsZTtcblxuICB0eXBlTGlzdCA9IGV4cGxpY2l0ID8gc3RhdGUuZXhwbGljaXRUeXBlcyA6IHN0YXRlLmltcGxpY2l0VHlwZXM7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHR5cGVMaXN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB0eXBlID0gdHlwZUxpc3RbaW5kZXhdO1xuXG4gICAgaWYgKCh0eXBlLmluc3RhbmNlT2YgIHx8IHR5cGUucHJlZGljYXRlKSAmJlxuICAgICAgICAoIXR5cGUuaW5zdGFuY2VPZiB8fCAoKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSAmJiAob2JqZWN0IGluc3RhbmNlb2YgdHlwZS5pbnN0YW5jZU9mKSkpICYmXG4gICAgICAgICghdHlwZS5wcmVkaWNhdGUgIHx8IHR5cGUucHJlZGljYXRlKG9iamVjdCkpKSB7XG5cbiAgICAgIGlmIChleHBsaWNpdCkge1xuICAgICAgICBpZiAodHlwZS5tdWx0aSAmJiB0eXBlLnJlcHJlc2VudE5hbWUpIHtcbiAgICAgICAgICBzdGF0ZS50YWcgPSB0eXBlLnJlcHJlc2VudE5hbWUob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS50YWcgPSB0eXBlLnRhZztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUudGFnID0gJz8nO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZS5yZXByZXNlbnQpIHtcbiAgICAgICAgc3R5bGUgPSBzdGF0ZS5zdHlsZU1hcFt0eXBlLnRhZ10gfHwgdHlwZS5kZWZhdWx0U3R5bGU7XG5cbiAgICAgICAgaWYgKF90b1N0cmluZy5jYWxsKHR5cGUucmVwcmVzZW50KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xuICAgICAgICAgIF9yZXN1bHQgPSB0eXBlLnJlcHJlc2VudChvYmplY3QsIHN0eWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfaGFzT3duUHJvcGVydHkuY2FsbCh0eXBlLnJlcHJlc2VudCwgc3R5bGUpKSB7XG4gICAgICAgICAgX3Jlc3VsdCA9IHR5cGUucmVwcmVzZW50W3N0eWxlXShvYmplY3QsIHN0eWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCchPCcgKyB0eXBlLnRhZyArICc+IHRhZyByZXNvbHZlciBhY2NlcHRzIG5vdCBcIicgKyBzdHlsZSArICdcIiBzdHlsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuZHVtcCA9IF9yZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gU2VyaWFsaXplcyBgb2JqZWN0YCBhbmQgd3JpdGVzIGl0IHRvIGdsb2JhbCBgcmVzdWx0YC5cbi8vIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzLCBvciBmYWxzZSBvbiBpbnZhbGlkIG9iamVjdC5cbi8vXG5mdW5jdGlvbiB3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBvYmplY3QsIGJsb2NrLCBjb21wYWN0LCBpc2tleSwgaXNibG9ja3NlcSkge1xuICBzdGF0ZS50YWcgPSBudWxsO1xuICBzdGF0ZS5kdW1wID0gb2JqZWN0O1xuXG4gIGlmICghZGV0ZWN0VHlwZShzdGF0ZSwgb2JqZWN0LCBmYWxzZSkpIHtcbiAgICBkZXRlY3RUeXBlKHN0YXRlLCBvYmplY3QsIHRydWUpO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBfdG9TdHJpbmcuY2FsbChzdGF0ZS5kdW1wKTtcbiAgdmFyIGluYmxvY2sgPSBibG9jaztcbiAgdmFyIHRhZ1N0cjtcblxuICBpZiAoYmxvY2spIHtcbiAgICBibG9jayA9IChzdGF0ZS5mbG93TGV2ZWwgPCAwIHx8IHN0YXRlLmZsb3dMZXZlbCA+IGxldmVsKTtcbiAgfVxuXG4gIHZhciBvYmplY3RPckFycmF5ID0gdHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICAgIGR1cGxpY2F0ZUluZGV4LFxuICAgICAgZHVwbGljYXRlO1xuXG4gIGlmIChvYmplY3RPckFycmF5KSB7XG4gICAgZHVwbGljYXRlSW5kZXggPSBzdGF0ZS5kdXBsaWNhdGVzLmluZGV4T2Yob2JqZWN0KTtcbiAgICBkdXBsaWNhdGUgPSBkdXBsaWNhdGVJbmRleCAhPT0gLTE7XG4gIH1cblxuICBpZiAoKHN0YXRlLnRhZyAhPT0gbnVsbCAmJiBzdGF0ZS50YWcgIT09ICc/JykgfHwgZHVwbGljYXRlIHx8IChzdGF0ZS5pbmRlbnQgIT09IDIgJiYgbGV2ZWwgPiAwKSkge1xuICAgIGNvbXBhY3QgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChkdXBsaWNhdGUgJiYgc3RhdGUudXNlZER1cGxpY2F0ZXNbZHVwbGljYXRlSW5kZXhdKSB7XG4gICAgc3RhdGUuZHVtcCA9ICcqcmVmXycgKyBkdXBsaWNhdGVJbmRleDtcbiAgfSBlbHNlIHtcbiAgICBpZiAob2JqZWN0T3JBcnJheSAmJiBkdXBsaWNhdGUgJiYgIXN0YXRlLnVzZWREdXBsaWNhdGVzW2R1cGxpY2F0ZUluZGV4XSkge1xuICAgICAgc3RhdGUudXNlZER1cGxpY2F0ZXNbZHVwbGljYXRlSW5kZXhdID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICBpZiAoYmxvY2sgJiYgKE9iamVjdC5rZXlzKHN0YXRlLmR1bXApLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgd3JpdGVCbG9ja01hcHBpbmcoc3RhdGUsIGxldmVsLCBzdGF0ZS5kdW1wLCBjb21wYWN0KTtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZUZsb3dNYXBwaW5nKHN0YXRlLCBsZXZlbCwgc3RhdGUuZHVtcCk7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgJyAnICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgaWYgKGJsb2NrICYmIChzdGF0ZS5kdW1wLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgaWYgKHN0YXRlLm5vQXJyYXlJbmRlbnQgJiYgIWlzYmxvY2tzZXEgJiYgbGV2ZWwgPiAwKSB7XG4gICAgICAgICAgd3JpdGVCbG9ja1NlcXVlbmNlKHN0YXRlLCBsZXZlbCAtIDEsIHN0YXRlLmR1bXAsIGNvbXBhY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdyaXRlQmxvY2tTZXF1ZW5jZShzdGF0ZSwgbGV2ZWwsIHN0YXRlLmR1bXAsIGNvbXBhY3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JpdGVGbG93U2VxdWVuY2Uoc3RhdGUsIGxldmVsLCBzdGF0ZS5kdW1wKTtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyAnICcgKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnW29iamVjdCBTdHJpbmddJykge1xuICAgICAgaWYgKHN0YXRlLnRhZyAhPT0gJz8nKSB7XG4gICAgICAgIHdyaXRlU2NhbGFyKHN0YXRlLCBzdGF0ZS5kdW1wLCBsZXZlbCwgaXNrZXksIGluYmxvY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVW5kZWZpbmVkXScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0YXRlLnNraXBJbnZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCd1bmFjY2VwdGFibGUga2luZCBvZiBhbiBvYmplY3QgdG8gZHVtcCAnICsgdHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnRhZyAhPT0gbnVsbCAmJiBzdGF0ZS50YWcgIT09ICc/Jykge1xuICAgICAgLy8gTmVlZCB0byBlbmNvZGUgYWxsIGNoYXJhY3RlcnMgZXhjZXB0IHRob3NlIGFsbG93ZWQgYnkgdGhlIHNwZWM6XG4gICAgICAvL1xuICAgICAgLy8gWzM1XSBucy1kZWMtZGlnaXQgICAgOjo9ICBbI3gzMC0jeDM5XSAvKiAwLTkgKi9cbiAgICAgIC8vIFszNl0gbnMtaGV4LWRpZ2l0ICAgIDo6PSAgbnMtZGVjLWRpZ2l0XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB8IFsjeDQxLSN4NDZdIC8qIEEtRiAqLyB8IFsjeDYxLSN4NjZdIC8qIGEtZiAqL1xuICAgICAgLy8gWzM3XSBucy1hc2NpaS1sZXR0ZXIgOjo9ICBbI3g0MS0jeDVBXSAvKiBBLVogKi8gfCBbI3g2MS0jeDdBXSAvKiBhLXogKi9cbiAgICAgIC8vIFszOF0gbnMtd29yZC1jaGFyICAgIDo6PSAgbnMtZGVjLWRpZ2l0IHwgbnMtYXNjaWktbGV0dGVyIHwg4oCcLeKAnVxuICAgICAgLy8gWzM5XSBucy11cmktY2hhciAgICAgOjo9ICDigJwl4oCdIG5zLWhleC1kaWdpdCBucy1oZXgtZGlnaXQgfCBucy13b3JkLWNoYXIgfCDigJwj4oCdXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB8IOKAnDvigJ0gfCDigJwv4oCdIHwg4oCcP+KAnSB8IOKAnDrigJ0gfCDigJxA4oCdIHwg4oCcJuKAnSB8IOKAnD3igJ0gfCDigJwr4oCdIHwg4oCcJOKAnSB8IOKAnCzigJ1cbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHwg4oCcX+KAnSB8IOKAnC7igJ0gfCDigJwh4oCdIHwg4oCcfuKAnSB8IOKAnCrigJ0gfCDigJwn4oCdIHwg4oCcKOKAnSB8IOKAnCnigJ0gfCDigJxb4oCdIHwg4oCcXeKAnVxuICAgICAgLy9cbiAgICAgIC8vIEFsc28gbmVlZCB0byBlbmNvZGUgJyEnIGJlY2F1c2UgaXQgaGFzIHNwZWNpYWwgbWVhbmluZyAoZW5kIG9mIHRhZyBwcmVmaXgpLlxuICAgICAgLy9cbiAgICAgIHRhZ1N0ciA9IGVuY29kZVVSSShcbiAgICAgICAgc3RhdGUudGFnWzBdID09PSAnIScgPyBzdGF0ZS50YWcuc2xpY2UoMSkgOiBzdGF0ZS50YWdcbiAgICAgICkucmVwbGFjZSgvIS9nLCAnJTIxJyk7XG5cbiAgICAgIGlmIChzdGF0ZS50YWdbMF0gPT09ICchJykge1xuICAgICAgICB0YWdTdHIgPSAnIScgKyB0YWdTdHI7XG4gICAgICB9IGVsc2UgaWYgKHRhZ1N0ci5zbGljZSgwLCAxOCkgPT09ICd0YWc6eWFtbC5vcmcsMjAwMjonKSB7XG4gICAgICAgIHRhZ1N0ciA9ICchIScgKyB0YWdTdHIuc2xpY2UoMTgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFnU3RyID0gJyE8JyArIHRhZ1N0ciArICc+JztcbiAgICAgIH1cblxuICAgICAgc3RhdGUuZHVtcCA9IHRhZ1N0ciArICcgJyArIHN0YXRlLmR1bXA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGdldER1cGxpY2F0ZVJlZmVyZW5jZXMob2JqZWN0LCBzdGF0ZSkge1xuICB2YXIgb2JqZWN0cyA9IFtdLFxuICAgICAgZHVwbGljYXRlc0luZGV4ZXMgPSBbXSxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoO1xuXG4gIGluc3BlY3ROb2RlKG9iamVjdCwgb2JqZWN0cywgZHVwbGljYXRlc0luZGV4ZXMpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBkdXBsaWNhdGVzSW5kZXhlcy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgc3RhdGUuZHVwbGljYXRlcy5wdXNoKG9iamVjdHNbZHVwbGljYXRlc0luZGV4ZXNbaW5kZXhdXSk7XG4gIH1cbiAgc3RhdGUudXNlZER1cGxpY2F0ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gaW5zcGVjdE5vZGUob2JqZWN0LCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcykge1xuICB2YXIgb2JqZWN0S2V5TGlzdCxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoO1xuXG4gIGlmIChvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICBpbmRleCA9IG9iamVjdHMuaW5kZXhPZihvYmplY3QpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChkdXBsaWNhdGVzSW5kZXhlcy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgZHVwbGljYXRlc0luZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgIGluc3BlY3ROb2RlKG9iamVjdFtpbmRleF0sIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0S2V5TGlzdCA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdEtleUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgIGluc3BlY3ROb2RlKG9iamVjdFtvYmplY3RLZXlMaXN0W2luZGV4XV0sIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkdW1wJDEoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHN0YXRlID0gbmV3IFN0YXRlKG9wdGlvbnMpO1xuXG4gIGlmICghc3RhdGUubm9SZWZzKSBnZXREdXBsaWNhdGVSZWZlcmVuY2VzKGlucHV0LCBzdGF0ZSk7XG5cbiAgdmFyIHZhbHVlID0gaW5wdXQ7XG5cbiAgaWYgKHN0YXRlLnJlcGxhY2VyKSB7XG4gICAgdmFsdWUgPSBzdGF0ZS5yZXBsYWNlci5jYWxsKHsgJyc6IHZhbHVlIH0sICcnLCB2YWx1ZSk7XG4gIH1cblxuICBpZiAod3JpdGVOb2RlKHN0YXRlLCAwLCB2YWx1ZSwgdHJ1ZSwgdHJ1ZSkpIHJldHVybiBzdGF0ZS5kdW1wICsgJ1xcbic7XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgZHVtcF8xID0gZHVtcCQxO1xuXG52YXIgZHVtcGVyID0ge1xuXHRkdW1wOiBkdW1wXzFcbn07XG5cbmZ1bmN0aW9uIHJlbmFtZWQoZnJvbSwgdG8pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIHlhbWwuJyArIGZyb20gKyAnIGlzIHJlbW92ZWQgaW4ganMteWFtbCA0LiAnICtcbiAgICAgICdVc2UgeWFtbC4nICsgdG8gKyAnIGluc3RlYWQsIHdoaWNoIGlzIG5vdyBzYWZlIGJ5IGRlZmF1bHQuJyk7XG4gIH07XG59XG5cblxudmFyIFR5cGUgICAgICAgICAgICAgICAgPSB0eXBlO1xudmFyIFNjaGVtYSAgICAgICAgICAgICAgPSBzY2hlbWE7XG52YXIgRkFJTFNBRkVfU0NIRU1BICAgICA9IGZhaWxzYWZlO1xudmFyIEpTT05fU0NIRU1BICAgICAgICAgPSBqc29uO1xudmFyIENPUkVfU0NIRU1BICAgICAgICAgPSBjb3JlO1xudmFyIERFRkFVTFRfU0NIRU1BICAgICAgPSBfZGVmYXVsdDtcbnZhciBsb2FkICAgICAgICAgICAgICAgID0gbG9hZGVyLmxvYWQ7XG52YXIgbG9hZEFsbCAgICAgICAgICAgICA9IGxvYWRlci5sb2FkQWxsO1xudmFyIGR1bXAgICAgICAgICAgICAgICAgPSBkdW1wZXIuZHVtcDtcbnZhciBZQU1MRXhjZXB0aW9uICAgICAgID0gZXhjZXB0aW9uO1xuXG4vLyBSZS1leHBvcnQgYWxsIHR5cGVzIGluIGNhc2UgdXNlciB3YW50cyB0byBjcmVhdGUgY3VzdG9tIHNjaGVtYVxudmFyIHR5cGVzID0ge1xuICBiaW5hcnk6ICAgIGJpbmFyeSxcbiAgZmxvYXQ6ICAgICBmbG9hdCxcbiAgbWFwOiAgICAgICBtYXAsXG4gIG51bGw6ICAgICAgX251bGwsXG4gIHBhaXJzOiAgICAgcGFpcnMsXG4gIHNldDogICAgICAgc2V0LFxuICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgYm9vbDogICAgICBib29sLFxuICBpbnQ6ICAgICAgIGludCxcbiAgbWVyZ2U6ICAgICBtZXJnZSxcbiAgb21hcDogICAgICBvbWFwLFxuICBzZXE6ICAgICAgIHNlcSxcbiAgc3RyOiAgICAgICBzdHJcbn07XG5cbi8vIFJlbW92ZWQgZnVuY3Rpb25zIGZyb20gSlMtWUFNTCAzLjAueFxudmFyIHNhZmVMb2FkICAgICAgICAgICAgPSByZW5hbWVkKCdzYWZlTG9hZCcsICdsb2FkJyk7XG52YXIgc2FmZUxvYWRBbGwgICAgICAgICA9IHJlbmFtZWQoJ3NhZmVMb2FkQWxsJywgJ2xvYWRBbGwnKTtcbnZhciBzYWZlRHVtcCAgICAgICAgICAgID0gcmVuYW1lZCgnc2FmZUR1bXAnLCAnZHVtcCcpO1xuXG52YXIganNZYW1sID0ge1xuXHRUeXBlOiBUeXBlLFxuXHRTY2hlbWE6IFNjaGVtYSxcblx0RkFJTFNBRkVfU0NIRU1BOiBGQUlMU0FGRV9TQ0hFTUEsXG5cdEpTT05fU0NIRU1BOiBKU09OX1NDSEVNQSxcblx0Q09SRV9TQ0hFTUE6IENPUkVfU0NIRU1BLFxuXHRERUZBVUxUX1NDSEVNQTogREVGQVVMVF9TQ0hFTUEsXG5cdGxvYWQ6IGxvYWQsXG5cdGxvYWRBbGw6IGxvYWRBbGwsXG5cdGR1bXA6IGR1bXAsXG5cdFlBTUxFeGNlcHRpb246IFlBTUxFeGNlcHRpb24sXG5cdHR5cGVzOiB0eXBlcyxcblx0c2FmZUxvYWQ6IHNhZmVMb2FkLFxuXHRzYWZlTG9hZEFsbDogc2FmZUxvYWRBbGwsXG5cdHNhZmVEdW1wOiBzYWZlRHVtcFxufTtcblxuZXhwb3J0IGRlZmF1bHQganNZYW1sO1xuZXhwb3J0IHsgQ09SRV9TQ0hFTUEsIERFRkFVTFRfU0NIRU1BLCBGQUlMU0FGRV9TQ0hFTUEsIEpTT05fU0NIRU1BLCBTY2hlbWEsIFR5cGUsIFlBTUxFeGNlcHRpb24sIGR1bXAsIGxvYWQsIGxvYWRBbGwsIHNhZmVEdW1wLCBzYWZlTG9hZCwgc2FmZUxvYWRBbGwsIHR5cGVzIH07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwidXNlQ2xlYW51cCIsInN0YXRlU2VsZWN0b3IiLCJkaXNwYXRjaCIsInNlbGVjdG9yUmVmIiwiY3VycmVudCIsImNzcyIsIkFsZXJ0IiwiTGlua0J1dHRvbiIsIkxvYWRpbmdQbGFjZWhvbGRlciIsInVzZVN0eWxlczIiLCJ3aXRoRXJyb3JCb3VuZGFyeSIsIlBhZ2UiLCJSZWFjdCIsInVzZUFzeW5jIiwiQWxlcnRSdWxlRm9ybSIsInVzZUlzUnVsZUVkaXRhYmxlIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFsbFByb21CdWlsZEluZm9BY3Rpb24iLCJmZXRjaEVkaXRhYmxlUnVsZUFjdGlvbiIsInVzZVJ1bGVzQWNjZXNzIiwicnVsZUlkIiwiRXhpc3RpbmdSdWxlRWRpdG9yIiwiaWRlbnRpZmllciIsInN0YXRlIiwidW5pZmllZEFsZXJ0aW5nIiwicnVsZUZvcm0iLCJleGlzdGluZ1J1bGUiLCJsb2FkaW5nIiwicmVzdWx0IiwiZXJyb3IiLCJkaXNwYXRjaGVkIiwiaXNFZGl0YWJsZSIsInJ1bGVJZGVudGlmaWVyVG9SdWxlU291cmNlTmFtZSIsInJ1bGUiLCJ1bmRlZmluZWQiLCJtZXNzYWdlIiwiUnVsZUVkaXRvciIsIm1hdGNoIiwiaWQiLCJwYXJhbXMiLCJ0cnlQYXJzZSIsImNhbkNyZWF0ZUdyYWZhbmFSdWxlcyIsImNhbkNyZWF0ZUNsb3VkUnVsZXMiLCJjYW5FZGl0UnVsZXMiLCJydWxlU291cmNlTmFtZSIsIkFsZXJ0V2FybmluZyIsInRpdGxlIiwiY2hpbGRyZW4iLCJ3YXJuaW5nU3R5bGVzIiwid2FybmluZyIsInRoZW1lIiwic3BhY2luZyIsInN0eWxlIiwiZGF0YUZyYW1lRnJvbUpTT04iLCJnZXREZWZhdWx0VGltZVJhbmdlIiwiTG9hZGluZ1N0YXRlIiwid2l0aExvYWRpbmdJbmRpY2F0b3IiLCJnZXRCYWNrZW5kU3J2IiwidG9EYXRhUXVlcnlFcnJvciIsIm9mIiwiY2F0Y2hFcnJvciIsIm1hcCIsInNoYXJlIiwiaXNDbG91ZFByZXZpZXdSZXF1ZXN0IiwiaXNHcmFmYW5hUHJldmlld1JlcXVlc3QiLCJSdWxlRm9ybVR5cGUiLCJwcmV2aWV3QWxlcnRSdWxlIiwicmVxdWVzdCIsInByZXZpZXdDbG91ZEFsZXJ0UnVsZSIsInByZXZpZXdHcmFmYW5hQWxlcnRSdWxlIiwiRXJyb3IiLCJ0eXBlIiwiZ3JhZmFuYSIsIndoaWxlTG9hZGluZyIsImNyZWF0ZVJlc3BvbnNlIiwic291cmNlIiwiZmV0Y2giLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwicGlwZSIsIkRvbmUiLCJzZXJpZXMiLCJpbnN0YW5jZXMiLCJydWxlVHlwZSIsIkxvYWRpbmciLCJ0aW1lUmFuZ2UiLCJjb25maWciLCJSYWRpb0J1dHRvbkdyb3VwIiwidXNlTWVtbyIsIlNUQVQiLCJUQUJMRSIsIlRJTUVTRVJJRVMiLCJQYW5lbFBsdWdpbnNCdXR0b25Hcm91cCIsInByb3BzIiwidmFsdWUiLCJvbkNoYW5nZSIsInNpemUiLCJwYW5lbHMiLCJnZXRTdXBwb3J0ZWRQYW5lbHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJwYW5lbCIsImlzU3VwcG9ydGVkUGFuZWxQbHVnaW4iLCJwdXNoIiwibGFiZWwiLCJuYW1lIiwiaW1nVXJsIiwiaW5mbyIsImxvZ29zIiwic21hbGwiLCJ1c2VTdGF0ZSIsIlBhZ2VUb29sYmFyIiwiQnV0dG9uIiwiQ3VzdG9tU2Nyb2xsYmFyIiwiU3Bpbm5lciIsIkNvbmZpcm1Nb2RhbCIsIkFsZXJ0VHlwZVN0ZXAiLCJEZXRhaWxzU3RlcCIsIlF1ZXJ5U3RlcCIsInVzZUZvcm0iLCJGb3JtUHJvdmlkZXIiLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJkZWxldGVSdWxlQWN0aW9uIiwic2F2ZVJ1bGVGb3JtQWN0aW9uIiwicnVsZXJSdWxlVG9Gb3JtVmFsdWVzIiwiZ2V0RGVmYXVsdEZvcm1WYWx1ZXMiLCJnZXREZWZhdWx0UXVlcmllcyIsIkxpbmsiLCJ1c2VRdWVyeVBhcmFtcyIsInVzZUFwcE5vdGlmaWNhdGlvbiIsIkNsb3VkQ29uZGl0aW9uc1N0ZXAiLCJHcmFmYW5hQ29uZGl0aW9uc1N0ZXAiLCJSdWxlSW5zcGVjdG9yIiwiZXhpc3RpbmciLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJub3RpZnlBcHAiLCJxdWVyeVBhcmFtcyIsInNob3dFZGl0WWFtbCIsInNldFNob3dFZGl0WWFtbCIsInJldHVyblRvIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwiZGVmYXVsdFZhbHVlcyIsInF1ZXJpZXMiLCJKU09OIiwicGFyc2UiLCJmb3JtQVBJIiwibW9kZSIsInNob3VsZEZvY3VzRXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImRhdGFTb3VyY2VOYW1lIiwic2hvd1N0ZXAyIiwiQm9vbGVhbiIsInN1Ym1pdFN0YXRlIiwic2F2ZVJ1bGUiLCJzdWJtaXQiLCJleGl0T25TYXZlIiwiYW5ub3RhdGlvbnMiLCJrZXkiLCJ0cmltIiwiZmlsdGVyIiwibGFiZWxzIiwicmVkaXJlY3RPblNhdmUiLCJkZWxldGVSdWxlIiwiZnJvbVJ1bGVyUnVsZSIsIm5hbWVzcGFjZSIsImdyb3VwIiwibmF2aWdhdGVUbyIsIm9uSW52YWxpZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJpc0NvcnRleExva2lPclJlY29yZGluZ1J1bGUiLCJidXR0b25TcGlubmVyIiwiY29udGVudE91dGVyIiwiY29udGVudElubmVyIiwiY2xvdWRBbGVydGluZyIsImNsb3VkUmVjb3JkaW5nIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJib3JkZXIiLCJ3ZWFrIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJmbGV4Um93IiwiRmllbGQiLCJJY29uIiwiSW5wdXQiLCJJbnB1dENvbnRyb2wiLCJMYWJlbCIsIlRvb2x0aXAiLCJSdWxlRWRpdG9yU2VjdGlvbiIsInVzZUZvcm1Db250ZXh0IiwiUnVsZUZvbGRlclBpY2tlciIsIkdyb3VwQW5kTmFtZXNwYWNlRmllbGRzIiwiQ2xvdWRSdWxlc1NvdXJjZVBpY2tlciIsImNoZWNrRm9yUGF0aFNlcGFyYXRvciIsIlJ1bGVUeXBlUGlja2VyIiwiY29udGV4dFNydiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJTdGFjayIsInJlY29yZGluZ1J1bGVOYW1lVmFsaWRhdGlvblBhdHRlcm4iLCJlZGl0aW5nRXhpc3RpbmdSdWxlIiwiZW5hYmxlZFJ1bGVUeXBlcyIsImRlZmF1bHRSdWxlVHlwZSIsImdldEF2YWlsYWJsZVJ1bGVUeXBlcyIsInJlZ2lzdGVyIiwiY29udHJvbCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInNldFZhbHVlIiwiZ2V0VmFsdWVzIiwicnVsZUZvcm1UeXBlIiwiZmllbGQiLCJyZXF1aXJlZCIsImZvcm1JbnB1dCIsInBhdHRlcm4iLCJ2YWxpZGF0ZSIsInBhdGhTZXBhcmF0b3IiLCJkcyIsImZvbGRlciIsImhhc1Blcm1pc3Npb24iLCJBbGVydGluZ1J1bGVDcmVhdGUiLCJBbGVydGluZ1J1bGVFeHRlcm5hbFdyaXRlIiwiU2VsZWN0V2l0aEFkZCIsIkFubm90YXRpb24iLCJhbm5vdGF0aW9uTGFiZWxzIiwiQW5ub3RhdGlvbktleUlucHV0IiwiZXhpc3RpbmdLZXlzIiwiYXJpYUxhYmVsIiwicmVzdCIsImFubm90YXRpb25PcHRpb25zIiwiaW5jbHVkZXMiLCJ1c2VDYWxsYmFjayIsIkZpZWxkQXJyYXkiLCJUZXh0QXJlYSIsInVzZVN0eWxlcyIsImN4IiwiQW5ub3RhdGlvbnNGaWVsZCIsImluZGV4IiwiXyIsImlkeCIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsImZsZXhDb2x1bW4iLCJpc1VybCIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZW5kc1dpdGgiLCJWYWx1ZUlucHV0Q29tcG9uZW50IiwiZmxleFJvd0l0ZW1NYXJnaW4iLCJhbm5vdGF0aW9uVmFsdWVJbnB1dCIsInRleHRhcmVhIiwiYWRkQW5ub3RhdGlvbnNCdXR0b24iLCJ4cyIsIlNlbGVjdCIsInRpbWVPcHRpb25zIiwiUHJldmlld1J1bGUiLCJmb3JUaW1lIiwiaW5saW5lRmllbGQiLCJ0aW1lVW5pdCIsIkRhdGFTb3VyY2VQaWNrZXIiLCJ1c2VSdWxlc1NvdXJjZXNXaXRoUnVsZXIiLCJydWxlc1NvdXJjZXNXaXRoUnVsZXIiLCJkYXRhU291cmNlRmlsdGVyIiwiZmluZCIsIkV4cHJlc3Npb25EYXRhc291cmNlVUlEIiwiQ29uZGl0aW9uRmllbGQiLCJjb25kaXRpb24iLCJvcHRpb25zIiwicSIsInJlZklkIiwiZXhwcmVzc2lvbnMiLCJxdWVyeSIsImRhdGFzb3VyY2VVaWQiLCJsZW5ndGgiLCJ2IiwiTGFiZWxzRmllbGQiLCJub29wIiwiQ29yZUFwcCIsImdldERhdGFTb3VyY2VTcnYiLCJFeHByZXNzaW9uRWRpdG9yIiwibWFwVG9WYWx1ZSIsIm1hcFRvUXVlcnkiLCJ1c2VRdWVyeU1hcHBlcnMiLCJzZXRRdWVyeSIsImhpZGUiLCJkYXRhU291cmNlIiwiZ2V0Iiwib25DaGFuZ2VRdWVyeSIsImNvbXBvbmVudHMiLCJRdWVyeUVkaXRvciIsImVycm9yTWVzc2FnZSIsIkNsb3VkQWxlcnRpbmciLCJzZXR0aW5ncyIsImdldEluc3RhbmNlU2V0dGluZ3MiLCJleHByIiwiR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbiIsIkFsZXJ0aW5nIiwiTm9EYXRhIiwiT0siLCJHcmFmYW5hQWxlcnRTdGF0ZVBpY2tlciIsImluY2x1ZGVOb0RhdGEiLCJpbmNsdWRlRXJyb3IiLCJvcHRzIiwib3B0IiwiZHVyYXRpb25Ub01pbGxpc2Vjb25kcyIsInBhcnNlRHVyYXRpb24iLCJpc0VtcHR5IiwiR3JhZmFuYUNvbmRpdGlvbkV2YWxXYXJuaW5nIiwiZXZhbHVhdGVGb3IiLCJldmFsdWF0ZUV2ZXJ5IiwiZHVyYXRpb25Gb3IiLCJkdXJhdGlvbkV2ZXJ5IiwibWlsbGlzRm9yIiwibWlsbGlzRXZlcnkiLCJJbmxpbmVMYWJlbCIsInBvc2l0aXZlRHVyYXRpb25WYWxpZGF0aW9uUGF0dGVybiIsImR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4iLCJDb2xsYXBzZVRvZ2dsZSIsIk1JTl9USU1FX1JBTkdFX1NURVBfUyIsImZvclZhbGlkYXRpb25PcHRpb25zIiwiZXZhbHVhdGVFdmVyeVZhbGlkYXRpb25PcHRpb25zIiwiZHVyYXRpb24iLCJrZXlzIiwiZGlmZiIsInNob3dFcnJvckhhbmRsaW5nIiwic2V0U2hvd0Vycm9ySGFuZGxpbmciLCJldmFsdWF0ZUV2ZXJ5SWQiLCJldmFsdWF0ZUZvcklkIiwiY29sbGFwc2VkIiwiY29sbGFwc2VUb2dnbGUiLCJmZXRjaFJ1bGVyUnVsZXNBY3Rpb24iLCJydWxlc1NvdXJjZU5hbWUiLCJnZXRTdHlsZSIsImN1c3RvbUdyb3VwIiwic2V0Q3VzdG9tR3JvdXAiLCJydWxlclJlcXVlc3RzIiwicnVsZXJSdWxlcyIsInJ1bGVzQ29uZmlnIiwibmFtZXNwYWNlT3B0aW9ucyIsImdyb3VwT3B0aW9ucyIsImlucHV0IiwiY3VzdG9tIiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImNlbnRlckFsaWduUm93IiwibGFiZWxJbnB1dCIsImVxdWFsU2lnbiIsImRlbGV0ZUxhYmVsQnV0dG9uIiwiYWRkTGFiZWxCdXR0b24iLCJtZCIsInNtIiwiZGF0ZVRpbWVGb3JtYXRJU08iLCJIb3Jpem9udGFsR3JvdXAiLCJ1c2VNb3VudGVkU3RhdGUiLCJ0YWtlV2hpbGUiLCJ1c2VBbGVydFF1ZXJpZXNTdGF0dXMiLCJQcmV2aWV3UnVsZVJlc3VsdCIsInByZXZpZXciLCJvblByZXZpZXciLCJ1c2VQcmV2aWV3IiwiYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUiLCJpc1ByZXZpZXdBdmFpbGFibGUiLCJjb250YWluZXIiLCJzZXRQcmV2aWV3IiwiaXNNb3VudGVkIiwiY3JlYXRlUHJldmlld1JlcXVlc3QiLCJyZXNwb25zZSIsImlzQ29tcGxldGVkIiwic3Vic2NyaWJlIiwiZXhwcmVzc2lvbiIsImdyYWZhbmFfY29uZGl0aW9uIiwibm93IiwiRGF0ZSIsImJyZWFrcG9pbnRzIiwieHhsIiwiQXV0b1NpemVyIiwiVGFibGVDZWxsRGlzcGxheU1vZGUiLCJQYW5lbFJlbmRlcmVyIiwiRmllbGRNYXRjaGVySUQiLCJtZXNzYWdlRnJvbUVycm9yIiwiZmllbGRDb25maWciLCJkZWZhdWx0cyIsIm92ZXJyaWRlcyIsIm1hdGNoZXIiLCJieU5hbWUiLCJwcm9wZXJ0aWVzIiwiSlNPTlZpZXciLCJ0YWJsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWVkaXVtIiwiUHVyZUNvbXBvbmVudCIsImdldERlZmF1bHRSZWxhdGl2ZVRpbWVSYW5nZSIsInNlbGVjdG9ycyIsInN0eWxlc0ZhY3RvcnkiLCJRdWVyeVJvd3MiLCJleHByZXNzaW9uRGF0YXNvdXJjZSIsImdldE5leHRSZWZJZENoYXIiLCJkZWZhdWx0Q29uZGl0aW9uIiwiRXhwcmVzc2lvblF1ZXJ5VHlwZSIsIkFsZXJ0aW5nUXVlcnlSdW5uZXIiLCJnZXREYXRhc291cmNlU3J2IiwiaXNFeHByZXNzaW9uUXVlcnkiLCJjb25zdHJ1Y3RvciIsInJ1bm5lciIsInJ1biIsImNhbmNlbCIsIm9uQ2hhbmdlUXVlcmllcyIsImFkZFF1ZXJ5IiwiZGVmYXVsdERhdGFTb3VyY2UiLCJ1aWQiLCJtb2RlbCIsImRhdGFzb3VyY2UiLCJuZXdRdWVyeSIsImNsYXNzaWMiLCJjb25kaXRpb25zIiwicGFuZWxEYXRhQnlSZWZJZCIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRlc3Ryb3kiLCJyZW5kZXJBZGRRdWVyeVJvdyIsIm9uTmV3QWxlcnRpbmdRdWVyeSIsIlF1ZXJ5VGFiIiwiZXhwcmVzc2lvbnNFbmFibGVkIiwib25OZXdFeHByZXNzaW9uUXVlcnkiLCJleHByZXNzaW9uQnV0dG9uIiwiaXNSdW5uaW5nIiwiZCIsInJlbmRlclJ1blF1ZXJ5QnV0dG9uIiwidGhlbWUyIiwicnVuV3JhcHBlciIsIm9uQ2FuY2VsUXVlcmllcyIsIm9uUnVuUXVlcmllcyIsInJlbmRlciIsIm9uRHVwbGljYXRlUXVlcnkiLCJxdWVyeVRvQWRkIiwicXVlcnlUeXBlIiwicmVsYXRpdmVUaW1lUmFuZ2UiLCJkZWZhdWx0VGltZVJhbmdlIiwiZWRpdG9yV3JhcHBlciIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsIlRocmVzaG9sZHNNb2RlIiwiRW1wdHlRdWVyeVdyYXBwZXIiLCJRdWVyeVdyYXBwZXIiLCJxdWVyaWVzV2l0aFVwZGF0ZWRSZWZlcmVuY2VzIiwiQ2FyZCIsIlF1ZXJ5T3BlcmF0aW9uUm93Iiwib21pdCIsIm9uUXVlcmllc0NoYW5nZSIsIml0ZW0iLCJpdGVtSW5kZXgiLCJ0aHJlc2hvbGRzIiwicmVmZXJlbmNlZFJlZklkIiwiY29uZGl0aW9uSW5kZXgiLCJldmFsdWF0b3IiLCJwYXJzZUZsb2F0Iiwic3RlcHMiLCJ0b1ByZWNpc2lvbiIsInVwZGF0ZWRRdWVyaWVzIiwiY29weU1vZGVsIiwicHJldmlvdXNSZWZJZCIsIm5ld1JlZklkIiwiZGVzdGluYXRpb24iLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1cGRhdGUiLCJBcnJheSIsImZyb20iLCJyZW1vdmVkIiwic3BsaWNlIiwicmVjb3JkIiwiaXNBcnJheSIsImZvckVhY2giLCJ0aHJlc2hvbGQiLCJBYnNvbHV0ZSIsIkluZmluaXR5IiwiY29sb3IiLCJzdWNjZXNzIiwibWFpbiIsImRhdGFQZXJRdWVyeSIsInRocmVzaG9sZEJ5UmVmSWQiLCJnZXRUaHJlc2hvbGRzRm9yUXVlcmllcyIsIm9uRHJhZ0VuZCIsInByb3ZpZGVkIiwiaW5uZXJSZWYiLCJkcm9wcGFibGVQcm9wcyIsIk5vdFN0YXJ0ZWQiLCJkc1NldHRpbmdzIiwiZ2V0RGF0YVNvdXJjZVNldHRpbmdzIiwib25DaGFuZ2VEYXRhU291cmNlIiwib25SZW1vdmVRdWVyeSIsIm9uQ2hhbmdlVGltZVJhbmdlIiwib25DaGFuZ2VUaHJlc2hvbGQiLCJwbGFjZWhvbGRlciIsIkRhdGFzb3VyY2VOb3RGb3VuZCIsIm9uVXBkYXRlRGF0YXNvdXJjZSIsInNob3dEZXRhaWxzIiwic2V0U2hvd0RldGFpbHMiLCJ0b2dnbGVEZXRhaWxzIiwic2hvdyIsImhhbmRsZVVwZGF0ZURhdGFzb3VyY2UiLCJzdHJpbmdpZnkiLCJjbG9uZURlZXAiLCJSZWxhdGl2ZVRpbWVSYW5nZVBpY2tlciIsIlF1ZXJ5RWRpdG9yUm93IiwiVml6V3JhcHBlciIsImlzRXhwcmVzc2lvbiIsInBsdWdpbklkIiwiY2hhbmdlUGx1Z2luSWQiLCJyZW5kZXJUaW1lUGlja2VyIiwicmFuZ2UiLCJVbmlmaWVkQWxlcnRpbmciLCJGaWVsZFNldCIsInN0ZXBObyIsImRlc2NyaXB0aW9uIiwicGFyZW50IiwiY29udGVudCIsImZpZWxkc2V0IiwieGwiLCJ0ZXh0IiwibWF4Q29udHJhc3QiLCJjYW52YXMiLCJ0eXBvZ3JhcGh5IiwibGciLCJkdW1wIiwibG9hZCIsIkNvZGVFZGl0b3IiLCJEcmF3ZXIiLCJUYWIiLCJUYWJzQmFyIiwidGFicyIsIm9uQ2xvc2UiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJkcmF3ZXJTdHlsZXMiLCJvbkFwcGx5IiwiZm9ybVZhbHVlcyIsInN1YnRpdGxlIiwiUnVsZUluc3BlY3RvclN1YnRpdGxlIiwidGFiIiwiSW5zcGVjdG9yWWFtbFRhYiIsIm9uU3VibWl0IiwieWFtbFRhYlN0eWxlIiwiYWxlcnRSdWxlQXNZYW1sIiwic2V0QWxlcnRSdWxlQXNZYW1sIiwiYXBwbHlCdXR0b24iLCJtaW5pbWFwIiwiZW5hYmxlZCIsIm9uQ3VzdG9tQ2hhbmdlIiwiZGlzYWJsZWQiLCJhZGRMYWJlbCIsImlzQ3VzdG9tIiwic2V0SXNDdXN0b20iLCJfb3B0aW9ucyIsInRhcmdldCIsInZhbCIsIlBhbmVsQ29udGV4dFByb3ZpZGVyIiwiR3JhcGhUcmVzaG9sZHNTdHlsZU1vZGUiLCJ1c2VWaXpIZWlnaHQiLCJhcHBFdmVudHMiLCJjdXJyZW50UGFuZWwiLCJjaGFuZ2VQYW5lbCIsIm9uVGhyZXNob2xkc0NoYW5nZSIsInNldE9wdGlvbnMiLCJmcmFtZUluZGV4Iiwic2hvd0hlYWRlciIsInZpekhlaWdodCIsInNldEZpZWxkQ29uZmlnIiwiZGVmYXVsdEZpZWxkQ29uZmlnIiwidW5pdCIsImRlZmF1bHRVbml0IiwidGhyZXNob2xkc1N0eWxlIiwiTGluZSIsImNvbnRleHQiLCJldmVudEJ1cyIsImNhbkVkaXRUaHJlc2hvbGRzIiwiYnV0dG9uR3JvdXAiLCJ2aXNIZWlnaHQiLCJncmlkU2l6ZSIsIkRpc2FibGVkVG9vbHRpcCIsInZpc2libGUiLCJSdWxlVHlwZSIsIkdyYWZhbmFNYW5hZ2VkUnVsZVR5cGUiLCJzZWxlY3RlZCIsIm9uQ2xpY2siLCJNaW1pckZsYXZvcmVkVHlwZSIsIlJlY29yZGluZ1J1bGVUeXBlIiwiaW1hZ2UiLCJjYXJkU3R5bGVzIiwiZW5hYmxlZFR5cGVzIiwiaGFzTG90ZXhEYXRhc291cmNlcyIsIm1ldGEiLCJpc01hdGhFeHByZXNzaW9uIiwiaXNSZWR1Y2VFeHByZXNzaW9uIiwiaXNSZXNhbXBsZUV4cHJlc3Npb24iLCJpc0NsYXNzaWNFeHByZXNzaW9uIiwidXBkYXRlTWF0aEV4cHJlc3Npb25SZWZzIiwiaXNSZWZlcmVuY2luZyIsInBhcmFtIiwib2xkRXhwcmVzc2lvbiIsIlJlZ0V4cCIsIm5ld0V4cHJlc3Npb24iLCJyZXBsYWNlIiwiY29udGFpbnNQYXRoU2VwYXJhdG9yIiwiZXZlcnkiLCJmZXRjaEZvbGRlcklmTm90RmV0Y2hlZEFjdGlvbiIsInVzZUZvbGRlciIsImZvbGRlclJlcXVlc3RzIiwiZm9sZGVycyIsImdldFJ1bGVzUGVybWlzc2lvbnMiLCJpc0dyYWZhbmFSdWxlclJ1bGUiLCJkYXRhU291cmNlcyIsImZvbGRlclVJRCIsImdyYWZhbmFfYWxlcnQiLCJuYW1lc3BhY2VfdWlkIiwicnVsZVBlcm1pc3Npb24iLCJoYXNFZGl0UGVybWlzc2lvbiIsImhhc0FjY2VzcyIsImlzRWRpdG9yIiwiaGFzUmVtb3ZlUGVybWlzc2lvbiIsImRlbGV0ZSIsImlzUmVtb3ZhYmxlIiwiY2FuU2F2ZSIsImlzUnVsZXJBdmFpbGFibGUiLCJydWxlckNvbmZpZyIsImdldERhdGFTb3VyY2VCeU5hbWUiLCJkYXRhU291cmNlc1dpdGhSdWxlciIsImRzQ29uZmlnIiwidXNlVGhlbWUyIiwiZGF0YUlzRW1wdHkiLCJyb3dIZWlnaHQiLCJ0YWJsZUhlaWdodCIsIlJlcGxheVN1YmplY3QiLCJ2NCIsInV1aWR2NCIsInJhbmdlVXRpbCIsInByZVByb2Nlc3NQYW5lbERhdGEiLCJnZXRUaW1lUmFuZ2VGb3JFeHByZXNzaW9uIiwic2V0U3RydWN0dXJlUmV2aXNpb24iLCJjYW5jZWxOZXR3b3JrUmVxdWVzdHNPblVuc3Vic2NyaWJlIiwiYmFja2VuZFNydiIsImRhdGFTb3VyY2VTcnYiLCJzdWJqZWN0IiwibGFzdFJlc3VsdCIsImFzT2JzZXJ2YWJsZSIsImVtcHR5IiwiaW5pdGlhbFN0YXRlIiwibmV4dCIsImZpbHRlclF1ZXJ5Iiwic3Vic2NyaXB0aW9uIiwicnVuUmVxdWVzdCIsIm5leHRSZXN1bHQiLCJhcHBseUNoYW5nZSIsInByZXZpb3VzIiwicHJlUHJvY2Vzc2VkIiwibWFwRXJyb3JUb1BhbmVsRGF0YSIsInVuc3Vic2NyaWJlIiwicmVxdWVzdElzUnVubmluZyIsImNvbXBsZXRlIiwiaW5pdGlhbCIsInJlcXVlc3RJZCIsIm1hcFRvUGFuZWxEYXRhIiwiZGF0YUJ5UXVlcnkiLCJnZXRUaW1lUmFuZ2UiLCJyZWxhdGl2ZSIsInJlbGF0aXZlVG9UaW1lUmFuZ2UiLCJjb25zb2xlIiwid2FybiIsInJlc3VsdHMiLCJlbnRyaWVzIiwiZnJhbWVzIiwicXVlcnlFcnJvciIsImNoYW5nZSIsImdldFJ1bGVzQWNjZXNzIiwiRkFMTF9CQUNLX1RJTUVfUkFOR0UiLCJ0byIsInJlZmVyZW5jZWRSZWZJZHMiLCJnZXRSZWZlcmVuY2VkSWRzIiwiZ2V0VGltZVJhbmdlcyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJnZXRSZWZlcmVuY2VkSWRzRm9yQ2xhc3NpY0NvbmRpdGlvbiIsIm1hdGgiLCJnZXRSZWZlcmVuY2VkSWRzRm9yTWF0aCIsInJlc2FtcGxlIiwiZ2V0UmVmZXJlbmNlZElkc0ZvclJlZHVjZSIsInJlZmVyZW5jZWRSZWZJZHNLZXkiLCJpc0V4cHJlc3Npb25SZWZlcmVuY2UiLCJkYXRhUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9
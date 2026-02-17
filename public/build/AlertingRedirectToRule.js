"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRedirectToRule"],{

/***/ "./public/app/features/alerting/unified/RedirectToRuleViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectToRuleViewer": () => (/* binding */ RedirectToRuleViewer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx");
/* harmony import */ var _components_AlertLabels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _RuleViewerLayout, _Redirect, _Icon;












const pageTitle = 'Alerting / Find rule';
function RedirectToRuleViewer(props) {
  const {
    name,
    sourceName
  } = props.match.params;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    error,
    loading,
    result: rules,
    dispatched
  } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_3__.useCombinedRulesMatching)(name, sourceName);

  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: `Failed to load rules from ${sourceName}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("details", {
          className: styles.errorMessage,
          children: [error.message, _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {})), !!(error !== null && error !== void 0 && error.stack) && error.stack]
        })
      })
    });
  }

  if (loading || !dispatched || !Array.isArray(rules)) {
    return _RuleViewerLayout || (_RuleViewerLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (!name || !sourceName) {
    return _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
      to: "/notfound"
    }));
  }

  const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.getRulesSourceByName)(sourceName);

  if (!rulesSource) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: "Could not view rule",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("details", {
          className: styles.errorMessage,
          children: `Could not find data source with name: ${sourceName}.`
        })
      })
    });
  }

  if (rules.length === 1) {
    const [rule] = rules;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
      to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.createViewLink)(rulesSource, rule, '/alerting/list')
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
    title: pageTitle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: ["Several rules in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: styles.param,
        children: sourceName
      }), " matched the name", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: styles.param,
        children: name
      }), ", please select the rule you want to view."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.rules,
      children: rules.map((rule, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.createViewLink)(rulesSource, rule, '/alerting/list'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
            children: rule.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            separator: '',
            children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "folder"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: styles.namespace,
              children: `${rule.namespace.name} / ${rule.group.name}`
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Tags, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_AlertLabels__WEBPACK_IMPORTED_MODULE_7__.AlertLabels, {
              labels: rule.labels
            })
          })]
        }, `${rule.name}-${index}`);
      })
    })]
  });
}

function getStyles(theme) {
  return {
    param: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-style: italic;
      color: ${theme.colors.text.secondary};
    `,
    rules: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-top: ${theme.spacing(2)};
    `,
    namespace: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-left: ${theme.spacing(1)};
    `,
    errorMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      white-space: pre-wrap;
    `
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(RedirectToRuleViewer, {
  style: 'page'
}));

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleViewerLayout": () => (/* binding */ RuleViewerLayout),
/* harmony export */   "RuleViewerLayoutContent": () => (/* binding */ RuleViewerLayoutContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function RuleViewerLayout(props) {
  const {
    wrapInContent = true,
    children,
    title
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getPageStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PageToolbar, {
      title: title,
      pageIcon: "bell",
      onGoBack: () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/alerting/list')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.content,
      children: wrapInContent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(RuleViewerLayoutContent, Object.assign({}, props)) : children
    })]
  });
}
function RuleViewerLayoutContent({
  children,
  padding = 2
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getContentStyles(padding));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: styles.wrapper,
    children: children
  });
}

const getPageStyles = theme => {
  return {
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin: ${theme.spacing(0, 2, 2)};
      max-width: ${theme.breakpoints.values.xxl}px;
    `
  };
};

const getContentStyles = padding => theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.weak};
      border-radius: ${theme.shape.borderRadius()};
      padding: ${theme.spacing(padding)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useCombinedRule.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCombinedRule": () => (/* binding */ useCombinedRule),
/* harmony export */   "useCombinedRulesMatching": () => (/* binding */ useCombinedRulesMatching)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");









function useCombinedRule(identifier, ruleSourceName) {
  const requestState = useCombinedRulesLoader(ruleSourceName);
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__.useCombinedRuleNamespaces)(ruleSourceName);
  const rule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!identifier || !ruleSourceName || combinedRules.length === 0) {
      return;
    }

    for (const namespace of combinedRules) {
      for (const group of namespace.groups) {
        for (const rule of group.rules) {
          const id = _utils_rule_id__WEBPACK_IMPORTED_MODULE_4__.fromCombinedRule(ruleSourceName, rule);

          if (_utils_rule_id__WEBPACK_IMPORTED_MODULE_4__.equal(id, identifier)) {
            return rule;
          }
        }
      }
    }

    return;
  }, [identifier, ruleSourceName, combinedRules]);
  return Object.assign({}, requestState, {
    result: rule
  });
}
function useCombinedRulesMatching(ruleName, ruleSourceName) {
  const requestState = useCombinedRulesLoader(ruleSourceName);
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__.useCombinedRuleNamespaces)(ruleSourceName);
  const rules = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!ruleName || !ruleSourceName || combinedRules.length === 0) {
      return [];
    }

    const rules = [];

    for (const namespace of combinedRules) {
      for (const group of namespace.groups) {
        for (const rule of group.rules) {
          if (rule.name === ruleName) {
            rules.push(rule);
          }
        }
      }
    }

    return rules;
  }, [ruleName, ruleSourceName, combinedRules]);
  return Object.assign({}, requestState, {
    result: rules
  });
}

function useCombinedRulesLoader(rulesSourceName) {
  var _promRuleRequest$erro;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const promRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.promRules);
  const promRuleRequest = getRequestState(rulesSourceName, promRuleRequests);
  const rulerRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const rulerRuleRequest = getRequestState(rulesSourceName, rulerRuleRequests);
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(async () => {
    if (!rulesSourceName) {
      return;
    }

    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPromAndRulerRulesAction)({
      rulesSourceName
    }));
  }, [dispatch, rulesSourceName]);
  return {
    loading,
    error: ((_promRuleRequest$erro = promRuleRequest.error) !== null && _promRuleRequest$erro !== void 0 ? _promRuleRequest$erro : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isRulerNotSupportedResponse)(rulerRuleRequest)) ? undefined : rulerRuleRequest.error,
    dispatched: promRuleRequest.dispatched && rulerRuleRequest.dispatched
  };
}

function getRequestState(ruleSourceName, slice) {
  if (!ruleSourceName) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
  }

  const state = slice[ruleSourceName];

  if (!state) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
  }

  return state;
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzlHLE1BRkEsRUFHYjhHLFlBQVksQ0FBQ1AsV0FIQSxDQUFmLE1BS0FTLElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQ2JGLFVBQVUsR0FBR0csU0FBUyxDQUFDeEgsSUFBSSxDQUFDNEcsS0FBTixDQUFaLEdBQTJCLEVBRHhCLEVBRWI1RyxJQUFJLENBQUNNLE1BQUwsSUFBZSxFQUZGLEVBR2JpRSw0REFBYyxDQUFDdkUsSUFBRCxDQUFkLEdBQXVCQSxJQUFJLENBQUM2RyxXQUFMLElBQW9CLEVBQTNDLEdBQWdELEVBSG5DLENBQWYsQ0FORjtBQVlEOztBQUNELFNBQU8sS0FBUDtBQUNELEVBRUQ7OztBQUNBLFNBQVNXLFNBQVQsQ0FBbUJaLEtBQW5CLEVBQWtDO0FBQ2hDO0FBQ0EsTUFBSUEsS0FBSyxDQUFDN0csTUFBTixHQUFlLENBQWYsSUFBb0I2RyxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEsR0FBakMsSUFBd0NBLEtBQUssQ0FBQ0EsS0FBSyxDQUFDN0csTUFBTixHQUFlLENBQWhCLENBQUwsS0FBNEIsR0FBeEUsRUFBNkU7QUFDM0U2RyxJQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzFDLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBQyxDQUFoQixDQUFSO0FBQ0QsR0FKK0IsQ0FLaEM7OztBQUNBMEMsRUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNhLE9BQU4sQ0FBYyxRQUFkLEVBQXdCLEVBQXhCLENBQVIsQ0FOZ0MsQ0FPaEM7O0FBQ0EsU0FBT2IsS0FBSyxDQUFDYyxLQUFOLENBQVksRUFBWixFQUFnQjVCLElBQWhCLEdBQXVCNkIsSUFBdkIsQ0FBNEIsRUFBNUIsQ0FBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9SZWRpcmVjdFRvUnVsZVZpZXdlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtdmlld2VyL1J1bGVWaWV3ZXJMYXlvdXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQ2FyZCwgSWNvbiwgTG9hZGluZ1BsYWNlaG9sZGVyLCB1c2VTdHlsZXMyLCB3aXRoRXJyb3JCb3VuZGFyeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyB1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmcgfSBmcm9tICcuL2hvb2tzL3VzZUNvbWJpbmVkUnVsZSc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3TGluayB9IGZyb20gJy4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBnZXRSdWxlc1NvdXJjZUJ5TmFtZSB9IGZyb20gJy4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBSdWxlVmlld2VyTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGUtdmlld2VyL1J1bGVWaWV3ZXJMYXlvdXQnO1xuaW1wb3J0IHsgQWxlcnRMYWJlbHMgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRMYWJlbHMnO1xuXG50eXBlIFJlZGlyZWN0VG9SdWxlVmlld2VyUHJvcHMgPSBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IG5hbWU/OiBzdHJpbmc7IHNvdXJjZU5hbWU/OiBzdHJpbmcgfT47XG5jb25zdCBwYWdlVGl0bGUgPSAnQWxlcnRpbmcgLyBGaW5kIHJ1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gUmVkaXJlY3RUb1J1bGVWaWV3ZXIocHJvcHM6IFJlZGlyZWN0VG9SdWxlVmlld2VyUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IG5hbWUsIHNvdXJjZU5hbWUgfSA9IHByb3BzLm1hdGNoLnBhcmFtcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCB7IGVycm9yLCBsb2FkaW5nLCByZXN1bHQ6IHJ1bGVzLCBkaXNwYXRjaGVkIH0gPSB1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmcobmFtZSwgc291cmNlTmFtZSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgICA8QWxlcnQgdGl0bGU9e2BGYWlsZWQgdG8gbG9hZCBydWxlcyBmcm9tICR7c291cmNlTmFtZX1gfT5cbiAgICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHshIWVycm9yPy5zdGFjayAmJiBlcnJvci5zdGFja31cbiAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICA8L1J1bGVWaWV3ZXJMYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChsb2FkaW5nIHx8ICFkaXNwYXRjaGVkIHx8ICFBcnJheS5pc0FycmF5KHJ1bGVzKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8UnVsZVZpZXdlckxheW91dCB0aXRsZT17cGFnZVRpdGxlfT5cbiAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBydWxlLi4uXCIgLz5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFuYW1lIHx8ICFzb3VyY2VOYW1lKSB7XG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9ub3Rmb3VuZFwiIC8+O1xuICB9XG5cbiAgY29uc3QgcnVsZXNTb3VyY2UgPSBnZXRSdWxlc1NvdXJjZUJ5TmFtZShzb3VyY2VOYW1lKTtcblxuICBpZiAoIXJ1bGVzU291cmNlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgICA8QWxlcnQgdGl0bGU9XCJDb3VsZCBub3QgdmlldyBydWxlXCI+XG4gICAgICAgICAgPGRldGFpbHMgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57YENvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlIHdpdGggbmFtZTogJHtzb3VyY2VOYW1lfS5gfTwvZGV0YWlscz5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKHJ1bGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IFtydWxlXSA9IHJ1bGVzO1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89e2NyZWF0ZVZpZXdMaW5rKHJ1bGVzU291cmNlLCBydWxlLCAnL2FsZXJ0aW5nL2xpc3QnKX0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgU2V2ZXJhbCBydWxlcyBpbiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbX0+e3NvdXJjZU5hbWV9PC9zcGFuPiBtYXRjaGVkIHRoZSBuYW1leycgJ31cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucGFyYW19PntuYW1lfTwvc3Bhbj4sIHBsZWFzZSBzZWxlY3QgdGhlIHJ1bGUgeW91IHdhbnQgdG8gdmlldy5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ydWxlc30+XG4gICAgICAgIHtydWxlcy5tYXAoKHJ1bGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkIGtleT17YCR7cnVsZS5uYW1lfS0ke2luZGV4fWB9IGhyZWY9e2NyZWF0ZVZpZXdMaW5rKHJ1bGVzU291cmNlLCBydWxlLCAnL2FsZXJ0aW5nL2xpc3QnKX0+XG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRpbmc+e3J1bGUubmFtZX08L0NhcmQuSGVhZGluZz5cbiAgICAgICAgICAgICAgPENhcmQuTWV0YSBzZXBhcmF0b3I9eycnfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZm9sZGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lc3BhY2V9PntgJHtydWxlLm5hbWVzcGFjZS5uYW1lfSAvICR7cnVsZS5ncm91cC5uYW1lfWB9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0NhcmQuTWV0YT5cbiAgICAgICAgICAgICAgPENhcmQuVGFncz5cbiAgICAgICAgICAgICAgICA8QWxlcnRMYWJlbHMgbGFiZWxzPXtydWxlLmxhYmVsc30gLz5cbiAgICAgICAgICAgICAgPC9DYXJkLlRhZ3M+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1J1bGVWaWV3ZXJMYXlvdXQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIHBhcmFtOiBjc3NgXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIGAsXG4gICAgcnVsZXM6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICBuYW1lc3BhY2U6IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgZXJyb3JNZXNzYWdlOiBjc3NgXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgYCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVycm9yQm91bmRhcnkoUmVkaXJlY3RUb1J1bGVWaWV3ZXIsIHsgc3R5bGU6ICdwYWdlJyB9KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBQYWdlVG9vbGJhciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCBSZWFjdC5SZWFjdE5vZGVbXTtcbiAgdGl0bGU6IHN0cmluZztcbiAgd3JhcEluQ29udGVudD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZVZpZXdlckxheW91dChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHdyYXBJbkNvbnRlbnQgPSB0cnVlLCBjaGlsZHJlbiwgdGl0bGUgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFBhZ2VTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8UGFnZVRvb2xiYXIgdGl0bGU9e3RpdGxlfSBwYWdlSWNvbj1cImJlbGxcIiBvbkdvQmFjaz17KCkgPT4gbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9hbGVydGluZy9saXN0Jyl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9Pnt3cmFwSW5Db250ZW50ID8gPFJ1bGVWaWV3ZXJMYXlvdXRDb250ZW50IHsuLi5wcm9wc30gLz4gOiBjaGlsZHJlbn08L2Rpdj5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbnR5cGUgQ29udGVudFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIHwgUmVhY3QuUmVhY3ROb2RlW107XG4gIHBhZGRpbmc/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZVZpZXdlckxheW91dENvbnRlbnQoeyBjaGlsZHJlbiwgcGFkZGluZyA9IDIgfTogQ29udGVudFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRDb250ZW50U3R5bGVzKHBhZGRpbmcpKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+e2NoaWxkcmVufTwvZGl2Pjtcbn1cblxuY29uc3QgZ2V0UGFnZVN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IGNzc2BcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDAsIDIsIDIpfTtcbiAgICAgIG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueHhsfXB4O1xuICAgIGAsXG4gIH07XG59O1xuXG5jb25zdCBnZXRDb250ZW50U3R5bGVzID0gKHBhZGRpbmc6IG51bWJlcikgPT4gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcHBlcjogY3NzYFxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5wcmltYXJ5fTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci53ZWFrfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKHBhZGRpbmcpfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IENvbWJpbmVkUnVsZSwgUnVsZUlkZW50aWZpZXIsIFJ1bGVOYW1lc3BhY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBSdWxlclJ1bGVzQ29uZmlnRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IGZldGNoUHJvbUFuZFJ1bGVyUnVsZXNBY3Rpb24gfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEFzeW5jUmVxdWVzdE1hcFNsaWNlLCBBc3luY1JlcXVlc3RTdGF0ZSwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuaW1wb3J0ICogYXMgcnVsZUlkIGZyb20gJy4uL3V0aWxzL3J1bGUtaWQnO1xuaW1wb3J0IHsgaXNSdWxlck5vdFN1cHBvcnRlZFJlc3BvbnNlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyB9IGZyb20gJy4vdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlKFxuICBpZGVudGlmaWVyOiBSdWxlSWRlbnRpZmllciB8IHVuZGVmaW5lZCxcbiAgcnVsZVNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogQXN5bmNSZXF1ZXN0U3RhdGU8Q29tYmluZWRSdWxlPiB7XG4gIGNvbnN0IHJlcXVlc3RTdGF0ZSA9IHVzZUNvbWJpbmVkUnVsZXNMb2FkZXIocnVsZVNvdXJjZU5hbWUpO1xuICBjb25zdCBjb21iaW5lZFJ1bGVzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlU291cmNlTmFtZSk7XG5cbiAgY29uc3QgcnVsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghaWRlbnRpZmllciB8fCAhcnVsZVNvdXJjZU5hbWUgfHwgY29tYmluZWRSdWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5hbWVzcGFjZSBvZiBjb21iaW5lZFJ1bGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIG5hbWVzcGFjZS5ncm91cHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIGdyb3VwLnJ1bGVzKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBydWxlSWQuZnJvbUNvbWJpbmVkUnVsZShydWxlU291cmNlTmFtZSwgcnVsZSk7XG5cbiAgICAgICAgICBpZiAocnVsZUlkLmVxdWFsKGlkLCBpZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9LCBbaWRlbnRpZmllciwgcnVsZVNvdXJjZU5hbWUsIGNvbWJpbmVkUnVsZXNdKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnJlcXVlc3RTdGF0ZSxcbiAgICByZXN1bHQ6IHJ1bGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmcoXG4gIHJ1bGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHJ1bGVTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IEFzeW5jUmVxdWVzdFN0YXRlPENvbWJpbmVkUnVsZVtdPiB7XG4gIGNvbnN0IHJlcXVlc3RTdGF0ZSA9IHVzZUNvbWJpbmVkUnVsZXNMb2FkZXIocnVsZVNvdXJjZU5hbWUpO1xuICBjb25zdCBjb21iaW5lZFJ1bGVzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlU291cmNlTmFtZSk7XG5cbiAgY29uc3QgcnVsZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXJ1bGVOYW1lIHx8ICFydWxlU291cmNlTmFtZSB8fCBjb21iaW5lZFJ1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBuYW1lc3BhY2Ugb2YgY29tYmluZWRSdWxlcykge1xuICAgICAgZm9yIChjb25zdCBncm91cCBvZiBuYW1lc3BhY2UuZ3JvdXBzKSB7XG4gICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBncm91cC5ydWxlcykge1xuICAgICAgICAgIGlmIChydWxlLm5hbWUgPT09IHJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfSwgW3J1bGVOYW1lLCBydWxlU291cmNlTmFtZSwgY29tYmluZWRSdWxlc10pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVxdWVzdFN0YXRlLFxuICAgIHJlc3VsdDogcnVsZXMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUNvbWJpbmVkUnVsZXNMb2FkZXIocnVsZXNTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBBc3luY1JlcXVlc3RTdGF0ZTx2b2lkPiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvbVJ1bGVSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcHJvbVJ1bGVSZXF1ZXN0ID0gZ2V0UmVxdWVzdFN0YXRlKHJ1bGVzU291cmNlTmFtZSwgcHJvbVJ1bGVSZXF1ZXN0cyk7XG4gIGNvbnN0IHJ1bGVyUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlUmVxdWVzdCA9IGdldFJlcXVlc3RTdGF0ZShydWxlc1NvdXJjZU5hbWUsIHJ1bGVyUnVsZVJlcXVlc3RzKTtcblxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXJ1bGVzU291cmNlTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IGRpc3BhdGNoKGZldGNoUHJvbUFuZFJ1bGVyUnVsZXNBY3Rpb24oeyBydWxlc1NvdXJjZU5hbWUgfSkpO1xuICB9LCBbZGlzcGF0Y2gsIHJ1bGVzU291cmNlTmFtZV0pO1xuXG4gIHJldHVybiB7XG4gICAgbG9hZGluZyxcbiAgICBlcnJvcjogcHJvbVJ1bGVSZXF1ZXN0LmVycm9yID8/IGlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZShydWxlclJ1bGVSZXF1ZXN0KSA/IHVuZGVmaW5lZCA6IHJ1bGVyUnVsZVJlcXVlc3QuZXJyb3IsXG4gICAgZGlzcGF0Y2hlZDogcHJvbVJ1bGVSZXF1ZXN0LmRpc3BhdGNoZWQgJiYgcnVsZXJSdWxlUmVxdWVzdC5kaXNwYXRjaGVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRSZXF1ZXN0U3RhdGUoXG4gIHJ1bGVTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHNsaWNlOiBBc3luY1JlcXVlc3RNYXBTbGljZTxSdWxlclJ1bGVzQ29uZmlnRFRPIHwgUnVsZU5hbWVzcGFjZVtdIHwgbnVsbD5cbik6IEFzeW5jUmVxdWVzdFN0YXRlPFJ1bGVyUnVsZXNDb25maWdEVE8gfCBSdWxlTmFtZXNwYWNlW10gfCBudWxsPiB7XG4gIGlmICghcnVsZVNvdXJjZU5hbWUpIHtcbiAgICByZXR1cm4gaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICB9XG5cbiAgY29uc3Qgc3RhdGUgPSBzbGljZVtydWxlU291cmNlTmFtZV07XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQge1xuICBDb21iaW5lZFJ1bGUsXG4gIENvbWJpbmVkUnVsZUdyb3VwLFxuICBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIFJ1bGUsXG4gIFJ1bGVHcm91cCxcbiAgUnVsZU5hbWVzcGFjZSxcbiAgUnVsZXNTb3VyY2UsXG59IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFJ1bGVyUnVsZURUTywgUnVsZXJSdWxlR3JvdXBEVE8sIFJ1bGVyUnVsZXNDb25maWdEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgZ2V0QWxsUnVsZXNTb3VyY2VzLFxuICBnZXRSdWxlc1NvdXJjZUJ5TmFtZSxcbiAgaXNDbG91ZFJ1bGVzU291cmNlLFxuICBpc0dyYWZhbmFSdWxlc1NvdXJjZSxcbn0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSwgaXNBbGVydGluZ1J1bGVyUnVsZSwgaXNSZWNvcmRpbmdSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgQ2FjaGVWYWx1ZSB7XG4gIHByb21SdWxlcz86IFJ1bGVOYW1lc3BhY2VbXTtcbiAgcnVsZXJSdWxlcz86IFJ1bGVyUnVsZXNDb25maWdEVE8gfCBudWxsO1xuICByZXN1bHQ6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xufVxuXG4vLyB0aGlzIGxpdHRsZSBtb25zdGVyIGNvbWJpbmVzIHByb21ldGhldXMgcnVsZXMgYW5kIHJ1bGVyIHJ1bGVzIHRvIHByb2R1Y2UgYSB1bmlmaWVkIGRhdGEgc3RydWN0dXJlXG4vLyBjYW4gbGltaXQgdG8gYSBzaW5nbGUgcnVsZXMgc291cmNlXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlc1NvdXJjZU5hbWU/OiBzdHJpbmcpOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSB7XG4gIGNvbnN0IHByb21SdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG5cbiAgLy8gY2FjaGUgcmVzdWx0cyBwZXIgcnVsZXMgc291cmNlLCBzbyB3ZSBvbmx5IHJlY2FsY3VsYXRlIHRob3NlIGZvciB3aGljaCByZXN1bHRzIGhhdmUgYWN0dWFsbHkgY2hhbmdlZFxuICBjb25zdCBjYWNoZSA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBDYWNoZVZhbHVlPj4oe30pO1xuXG4gIGNvbnN0IHJ1bGVzU291cmNlcyA9IHVzZU1lbW8oKCk6IFJ1bGVzU291cmNlW10gPT4ge1xuICAgIGlmIChydWxlc1NvdXJjZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVzU291cmNlID0gZ2V0UnVsZXNTb3VyY2VCeU5hbWUocnVsZXNTb3VyY2VOYW1lKTtcbiAgICAgIGlmICghcnVsZXNTb3VyY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHJ1bGVzIHNvdXJjZTogJHtydWxlc1NvdXJjZU5hbWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3J1bGVzU291cmNlXTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEFsbFJ1bGVzU291cmNlcygpO1xuICB9LCBbcnVsZXNTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHJ1bGVzU291cmNlc1xuICAgICAgICAubWFwKChydWxlc1NvdXJjZSk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSBpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gcnVsZXNTb3VyY2UubmFtZSA6IHJ1bGVzU291cmNlO1xuICAgICAgICAgIGNvbnN0IHByb21SdWxlcyA9IHByb21SdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgcnVsZXJSdWxlcyA9IHJ1bGVyUnVsZXNSZXNwb25zZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuXG4gICAgICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdO1xuICAgICAgICAgIGlmIChjYWNoZWQgJiYgY2FjaGVkLnByb21SdWxlcyA9PT0gcHJvbVJ1bGVzICYmIGNhY2hlZC5ydWxlclJ1bGVzID09PSBydWxlclJ1bGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkLnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZXNwYWNlczogUmVjb3JkPHN0cmluZywgQ29tYmluZWRSdWxlTmFtZXNwYWNlPiA9IHt9O1xuXG4gICAgICAgICAgLy8gZmlyc3QgZ2V0IGFsbCB0aGUgcnVsZXIgcnVsZXMgaW5cbiAgICAgICAgICBPYmplY3QuZW50cmllcyhydWxlclJ1bGVzIHx8IHt9KS5mb3JFYWNoKChbbmFtZXNwYWNlTmFtZSwgZ3JvdXBzXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgPSB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2U7XG4gICAgICAgICAgICBhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhlbiBjb3JyZWxhdGUgd2l0aCBwcm9tZXRoZXVzIHJ1bGVzXG4gICAgICAgICAgcHJvbVJ1bGVzPy5mb3JFYWNoKCh7IG5hbWU6IG5hbWVzcGFjZU5hbWUsIGdyb3VwcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBucyA9IChuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSB8fCB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5zLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LnZhbHVlcyhuYW1lc3BhY2VzKTtcblxuICAgICAgICAgIGNhY2hlLmN1cnJlbnRbcnVsZXNTb3VyY2VOYW1lXSA9IHsgcHJvbVJ1bGVzLCBydWxlclJ1bGVzLCByZXN1bHQgfTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpLFxuICAgIFtwcm9tUnVsZXNSZXNwb25zZXMsIHJ1bGVyUnVsZXNSZXNwb25zZXMsIHJ1bGVzU291cmNlc11cbiAgKTtcbn1cblxuLy8gbWVyZ2UgYWxsIGdyb3VwcyBpbiBjYXNlIG9mIGdyYWZhbmEgbWFuYWdlZCwgZXNzZW50aWFsbHkgdHJlYXRpbmcgbmFtZXNwYWNlcyAoZm9sZGVycykgYXMgZ3JvdXBzXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMobmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10pIHtcbiAgcmV0dXJuIG5hbWVzcGFjZXMubWFwKChuYW1lc3BhY2UpID0+IHtcbiAgICBjb25zdCBuZXdOYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgIGdyb3VwczogW10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IGdyb3VwIHdpdGggdW5ncm91cGVkIHJ1bGVzXG4gICAgbmV3TmFtZXNwYWNlLmdyb3Vwcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgIHJ1bGVzOiBzb3J0UnVsZXNCeU5hbWUobmFtZXNwYWNlLmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4gZ3JvdXAucnVsZXMpKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdOYW1lc3BhY2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFJ1bGVzQnlOYW1lKHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSkge1xuICByZXR1cm4gcnVsZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlclJ1bGVHcm91cERUT1tdKTogdm9pZCB7XG4gIG5hbWVzcGFjZS5ncm91cHMgPSBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmVkR3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwID0ge1xuICAgICAgbmFtZTogZ3JvdXAubmFtZSxcbiAgICAgIGludGVydmFsOiBncm91cC5pbnRlcnZhbCxcbiAgICAgIHNvdXJjZV90ZW5hbnRzOiBncm91cC5zb3VyY2VfdGVuYW50cyxcbiAgICAgIHJ1bGVzOiBbXSxcbiAgICB9O1xuICAgIGNvbWJpbmVkR3JvdXAucnVsZXMgPSBncm91cC5ydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCkpO1xuICAgIHJldHVybiBjb21iaW5lZEdyb3VwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwczogUnVsZUdyb3VwW10pOiB2b2lkIHtcbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgbGV0IGNvbWJpbmVkR3JvdXAgPSBuYW1lc3BhY2UuZ3JvdXBzLmZpbmQoKGcpID0+IGcubmFtZSA9PT0gZ3JvdXAubmFtZSk7XG4gICAgaWYgKCFjb21iaW5lZEdyb3VwKSB7XG4gICAgICBjb21iaW5lZEdyb3VwID0ge1xuICAgICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgICBydWxlczogW10sXG4gICAgICB9O1xuICAgICAgbmFtZXNwYWNlLmdyb3Vwcy5wdXNoKGNvbWJpbmVkR3JvdXApO1xuICAgIH1cblxuICAgIChncm91cC5ydWxlcyA/PyBbXSkuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdSdWxlID0gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChydWxlLCBjb21iaW5lZEdyb3VwISwgbmFtZXNwYWNlLnJ1bGVzU291cmNlKTtcbiAgICAgIGlmIChleGlzdGluZ1J1bGUpIHtcbiAgICAgICAgZXhpc3RpbmdSdWxlLnByb21SdWxlID0gcnVsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbWJpbmVkR3JvdXAhLnJ1bGVzLnB1c2gocHJvbVJ1bGVUb0NvbWJpbmVkUnVsZShydWxlLCBuYW1lc3BhY2UsIGNvbWJpbmVkR3JvdXAhKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGU6IFJ1bGUsIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cDogQ29tYmluZWRSdWxlR3JvdXApOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHJ1bGUubmFtZSxcbiAgICBxdWVyeTogcnVsZS5xdWVyeSxcbiAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgIGFubm90YXRpb25zOiBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICBwcm9tUnVsZTogcnVsZSxcbiAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICBncm91cCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUoXG4gIHJ1bGU6IFJ1bGVyUnVsZURUTyxcbiAgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cFxuKTogQ29tYmluZWRSdWxlIHtcbiAgcmV0dXJuIGlzQWxlcnRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5hbGVydCxcbiAgICAgICAgcXVlcnk6IHJ1bGUuZXhwcixcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IGlzUmVjb3JkaW5nUnVsZXJSdWxlKHJ1bGUpXG4gICAgPyB7XG4gICAgICAgIG5hbWU6IHJ1bGUucmVjb3JkLFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczoge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgbmFtZTogcnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiBydWxlLmFubm90YXRpb25zIHx8IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9O1xufVxuXG4vLyBmaW5kIGV4aXN0aW5nIHJ1bGUgaW4gZ3JvdXAgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBwcm9tIHJ1bGVcbmZ1bmN0aW9uIGdldEV4aXN0aW5nUnVsZUluR3JvdXAoXG4gIHJ1bGU6IFJ1bGUsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCxcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlXG4pOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQge1xuICBpZiAoaXNHcmFmYW5hUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgLy8gYXNzdW1lIGdyYWZhbmEgZ3JvdXBzIGhhdmUgb25seSB0aGUgb25lIHJ1bGUuIGNoZWNrIG5hbWUgYW55d2F5IGJlY2F1c2UgcGFyYW5vaWRcbiAgICByZXR1cm4gZ3JvdXAhLnJ1bGVzLmZpbmQoKGV4aXN0aW5nUnVsZSkgPT4gZXhpc3RpbmdSdWxlLm5hbWUgPT09IHJ1bGUubmFtZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvLyB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBtYXRjaGVzIG5hbWUsIGxhYmVscywgYW5ub3RhdGlvbnMgYW5kIHF1ZXJ5XG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgdHJ1ZSlcbiAgICApID8/XG4gICAgLy8gaWYgdGhhdCBmYWlscywgdHJ5IGZpbmRpbmcgYSBydWxlIHRoYXQgb25seSBtYXRjaGVzIG5hbWUsIGxhYmVscyBhbmQgYW5ub3RhdGlvbnMuXG4gICAgLy8gbG9raSAmIHByb20gY2FuIHNvbWV0aW1lcyBtb2RpZnkgdGhlIHF1ZXJ5IHNvIGl0IGRvZXNudCBtYXRjaCwgZWcgYDIgPiAxYCBiZWNvbWVzIGAxYFxuICAgIGdyb3VwIS5ydWxlcy5maW5kKFxuICAgICAgKGV4aXN0aW5nUnVsZSkgPT4gIWV4aXN0aW5nUnVsZS5wcm9tUnVsZSAmJiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShleGlzdGluZ1J1bGUsIHJ1bGUsIGZhbHNlKVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUsIHJ1bGU6IFJ1bGUsIGNoZWNrUXVlcnkgPSB0cnVlKTogYm9vbGVhbiB7XG4gIGlmIChjb21iaW5lZFJ1bGUubmFtZSA9PT0gcnVsZS5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgY2hlY2tRdWVyeSA/IGhhc2hRdWVyeShjb21iaW5lZFJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5sYWJlbHMsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5hbm5vdGF0aW9ucyxcbiAgICAgIF0pID09PVxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KHJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHRoZXJlIGNhbiBiZSBzbGlnaHQgZGlmZmVyZW5jZXMgaW4gaG93IHByb20gJiBydWxlciByZW5kZXIgYSBxdWVyeSwgdGhpcyB3aWxsIGhhc2ggdGhlbSBhY2NvdW50aW5nIGZvciB0aGUgZGlmZmVyZW5jZXNcbmZ1bmN0aW9uIGhhc2hRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gIC8vIG9uZSBvZiB0aGVtIG1pZ2h0IGJlIHdyYXBwZWQgaW4gcGFyZW5zXG4gIGlmIChxdWVyeS5sZW5ndGggPiAxICYmIHF1ZXJ5WzBdID09PSAnKCcgJiYgcXVlcnlbcXVlcnkubGVuZ3RoIC0gMV0gPT09ICcpJykge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMSwgLTEpO1xuICB9XG4gIC8vIHdoaXRlc3BhY2UgY291bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xcc3xcXG4vZywgJycpO1xuICAvLyBsYWJlbHMgbWF0Y2hlcnMgY2FuIGJlIHJlb3JkZXJlZCwgc28gc29ydCB0aGUgZW5pdHJlIHN0cmluZywgZXNlbnRpYWxseSBjb21wYXJpbmcganVzdCB0aGUgY2hhcmFjdGVyIGNvdW50c1xuICByZXR1cm4gcXVlcnkuc3BsaXQoJycpLnNvcnQoKS5qb2luKCcnKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlZGlyZWN0IiwiY3NzIiwiQWxlcnQiLCJDYXJkIiwiSWNvbiIsIkxvYWRpbmdQbGFjZWhvbGRlciIsInVzZVN0eWxlczIiLCJ3aXRoRXJyb3JCb3VuZGFyeSIsInVzZUNvbWJpbmVkUnVsZXNNYXRjaGluZyIsImNyZWF0ZVZpZXdMaW5rIiwiZ2V0UnVsZXNTb3VyY2VCeU5hbWUiLCJSdWxlVmlld2VyTGF5b3V0IiwiQWxlcnRMYWJlbHMiLCJwYWdlVGl0bGUiLCJSZWRpcmVjdFRvUnVsZVZpZXdlciIsInByb3BzIiwibmFtZSIsInNvdXJjZU5hbWUiLCJtYXRjaCIsInBhcmFtcyIsInN0eWxlcyIsImdldFN0eWxlcyIsImVycm9yIiwibG9hZGluZyIsInJlc3VsdCIsInJ1bGVzIiwiZGlzcGF0Y2hlZCIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJzdGFjayIsIkFycmF5IiwiaXNBcnJheSIsInJ1bGVzU291cmNlIiwibGVuZ3RoIiwicnVsZSIsInBhcmFtIiwibWFwIiwiaW5kZXgiLCJuYW1lc3BhY2UiLCJncm91cCIsImxhYmVscyIsInRoZW1lIiwiY29sb3JzIiwidGV4dCIsInNlY29uZGFyeSIsInNwYWNpbmciLCJzdHlsZSIsImxvY2F0aW9uU2VydmljZSIsIlBhZ2VUb29sYmFyIiwiUGFnZSIsIndyYXBJbkNvbnRlbnQiLCJjaGlsZHJlbiIsInRpdGxlIiwiZ2V0UGFnZVN0eWxlcyIsInB1c2giLCJjb250ZW50IiwiUnVsZVZpZXdlckxheW91dENvbnRlbnQiLCJwYWRkaW5nIiwiZ2V0Q29udGVudFN0eWxlcyIsIndyYXBwZXIiLCJicmVha3BvaW50cyIsInZhbHVlcyIsInh4bCIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwiYm9yZGVyIiwid2VhayIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwidXNlTWVtbyIsInVzZURpc3BhdGNoIiwidXNlQXN5bmMiLCJmZXRjaFByb21BbmRSdWxlclJ1bGVzQWN0aW9uIiwiaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIiwicnVsZUlkIiwiaXNSdWxlck5vdFN1cHBvcnRlZFJlc3BvbnNlIiwidXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyIsInVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIiwidXNlQ29tYmluZWRSdWxlIiwiaWRlbnRpZmllciIsInJ1bGVTb3VyY2VOYW1lIiwicmVxdWVzdFN0YXRlIiwidXNlQ29tYmluZWRSdWxlc0xvYWRlciIsImNvbWJpbmVkUnVsZXMiLCJncm91cHMiLCJpZCIsImZyb21Db21iaW5lZFJ1bGUiLCJlcXVhbCIsInJ1bGVOYW1lIiwicnVsZXNTb3VyY2VOYW1lIiwiZGlzcGF0Y2giLCJwcm9tUnVsZVJlcXVlc3RzIiwic3RhdGUiLCJwcm9tUnVsZXMiLCJwcm9tUnVsZVJlcXVlc3QiLCJnZXRSZXF1ZXN0U3RhdGUiLCJydWxlclJ1bGVSZXF1ZXN0cyIsInJ1bGVyUnVsZXMiLCJydWxlclJ1bGVSZXF1ZXN0IiwidW5kZWZpbmVkIiwic2xpY2UiLCJ1c2VSZWYiLCJnZXRBbGxSdWxlc1NvdXJjZXMiLCJpc0Nsb3VkUnVsZXNTb3VyY2UiLCJpc0dyYWZhbmFSdWxlc1NvdXJjZSIsImlzQWxlcnRpbmdSdWxlIiwiaXNBbGVydGluZ1J1bGVyUnVsZSIsImlzUmVjb3JkaW5nUnVsZXJSdWxlIiwicHJvbVJ1bGVzUmVzcG9uc2VzIiwicnVsZXJSdWxlc1Jlc3BvbnNlcyIsImNhY2hlIiwicnVsZXNTb3VyY2VzIiwiRXJyb3IiLCJjYWNoZWQiLCJjdXJyZW50IiwibmFtZXNwYWNlcyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwibmFtZXNwYWNlTmFtZSIsImFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsIm5zIiwiYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UiLCJmbGF0IiwiZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMiLCJuZXdOYW1lc3BhY2UiLCJzb3J0UnVsZXNCeU5hbWUiLCJmbGF0TWFwIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvbWJpbmVkR3JvdXAiLCJpbnRlcnZhbCIsInNvdXJjZV90ZW5hbnRzIiwicnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUiLCJmaW5kIiwiZyIsImV4aXN0aW5nUnVsZSIsImdldEV4aXN0aW5nUnVsZUluR3JvdXAiLCJwcm9tUnVsZSIsInByb21SdWxlVG9Db21iaW5lZFJ1bGUiLCJxdWVyeSIsImFubm90YXRpb25zIiwiYWxlcnQiLCJleHByIiwicnVsZXJSdWxlIiwicmVjb3JkIiwiZ3JhZmFuYV9hbGVydCIsImlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlIiwiY29tYmluZWRSdWxlIiwiY2hlY2tRdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYXNoUXVlcnkiLCJyZXBsYWNlIiwic3BsaXQiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==
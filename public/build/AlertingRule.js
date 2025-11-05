"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRule"],{

/***/ "./public/app/features/alerting/unified/RuleViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleViewer": () => (/* binding */ RuleViewer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js");
/* harmony import */ var _components_AlertLabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _components_DetailsField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewerVisualization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerVisualization.tsx");
/* harmony import */ var _components_rules_RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
/* harmony import */ var _components_rules_RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
/* harmony import */ var _components_rules_RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
/* harmony import */ var _components_rules_RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
/* harmony import */ var _components_rules_RuleDetailsFederatedSources__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsFederatedSources.tsx");
/* harmony import */ var _components_rules_RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
/* harmony import */ var _components_rules_RuleHealth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
/* harmony import */ var _components_rules_RuleState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
/* harmony import */ var _hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertingQueryRunner.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/query.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _RuleViewerLayout, _br, _RuleViewerLayout2, _Alert, _Icon;




























const errorMessage = 'Could not find data source for rule';
const errorTitle = 'Could not view rule';
const pageTitle = 'Alerting / View rule';
function RuleViewer({
  match
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    id,
    sourceName
  } = match.params;
  const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_21__.tryParse(id, true);
  const {
    loading,
    error,
    result: rule
  } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_17__.useCombinedRule)(identifier, sourceName);
  const runner = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => new _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_18__.AlertingQueryRunner(), []);
  const data = (0,react_use__WEBPACK_IMPORTED_MODULE_24__["default"])(runner.get());
  const queries2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (0,_utils_query__WEBPACK_IMPORTED_MODULE_20__.alertRuleToQueries)(rule), [rule]);
  const [queries, setQueries] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    allDataSourcesAvailable
  } = (0,_hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_16__.useAlertQueriesStatus)(queries2);
  const onRunQueries = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (queries.length > 0 && allDataSourcesAvailable) {
      runner.run(queries);
    }
  }, [queries, runner, allDataSourcesAvailable]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setQueries(queries2);
  }, [queries2]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (allDataSourcesAvailable) {
      onRunQueries();
    }
  }, [onRunQueries, allDataSourcesAvailable]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    return () => runner.destroy();
  }, [runner]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(query => {
    setQueries(queries => queries.map(q => {
      if (q.refId === query.refId) {
        return query;
      }

      return q;
    }));
  }, []);

  if (!sourceName) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: errorTitle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("details", {
          className: styles.errorMessage,
          children: errorMessage
        })
      })
    });
  }

  const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_19__.getRulesSourceByName)(sourceName);

  if (loading) {
    return _RuleViewerLayout || (_RuleViewerLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (error || !rulesSource) {
    var _error$message;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: errorTitle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("details", {
          className: styles.errorMessage,
          children: [(_error$message = error === null || error === void 0 ? void 0 : error.message) !== null && _error$message !== void 0 ? _error$message : errorMessage, _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("br", {})), !!(error !== null && error !== void 0 && error.stack) && error.stack]
        })
      })
    });
  }

  if (!rule) {
    return _RuleViewerLayout2 || (_RuleViewerLayout2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
        children: "Rule could not be found."
      })
    }));
  }

  const annotations = Object.entries(rule.annotations).filter(([_, value]) => !!value.trim());
  const isFederatedRule = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_22__.isFederatedRuleGroup)(rule.group);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
    wrapInContent: false,
    title: pageTitle,
    children: [isFederatedRule && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "info",
      title: "This rule is part of a federated rule group.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
        children: ["Federated rule groups are currently an experimental feature.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          fill: "text",
          icon: "book",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("a", {
            href: "https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation",
            children: "Read documentation"
          })
        })]
      })
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayoutContent, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("h4", {
          children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "bell",
            size: "lg"
          })), " ", rule.name]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleState__WEBPACK_IMPORTED_MODULE_15__.RuleState, {
          rule: rule,
          isCreating: false,
          isDeleting: false
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_8__.RuleDetailsActionButtons, {
          rule: rule,
          rulesSource: rulesSource
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: styles.details,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: styles.leftSide,
          children: [rule.promRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_DetailsField__WEBPACK_IMPORTED_MODULE_5__.DetailsField, {
            label: "Health",
            horizontal: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleHealth__WEBPACK_IMPORTED_MODULE_14__.RuleHealth, {
              rule: rule.promRule
            })
          }), !!rule.labels && !!Object.keys(rule.labels).length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_DetailsField__WEBPACK_IMPORTED_MODULE_5__.DetailsField, {
            label: "Labels",
            horizontal: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_AlertLabels__WEBPACK_IMPORTED_MODULE_4__.AlertLabels, {
              labels: rule.labels
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_11__.RuleDetailsExpression, {
            rulesSource: rulesSource,
            rule: rule,
            annotations: annotations
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_9__.RuleDetailsAnnotations, {
            annotations: annotations
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: styles.rightSide,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_10__.RuleDetailsDataSources, {
            rule: rule,
            rulesSource: rulesSource
          }), isFederatedRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsFederatedSources__WEBPACK_IMPORTED_MODULE_12__.RuleDetailsFederatedSources, {
            group: rule.group
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_DetailsField__WEBPACK_IMPORTED_MODULE_5__.DetailsField, {
            label: "Namespace / Group",
            children: `${rule.namespace.name} / ${rule.group.name}`
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_13__.RuleDetailsMatchingInstances, {
          promRule: rule.promRule
        })
      })]
    }), !isFederatedRule && data && Object.keys(data).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: styles.queriesTitle,
        children: ["Query results ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.PanelChromeLoadingIndicator, {
          loading: isLoading(data),
          onCancel: () => runner.cancel()
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayoutContent, {
        padding: 0,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
          className: styles.queries,
          children: queries.map(query => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
              className: styles.query,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerVisualization__WEBPACK_IMPORTED_MODULE_7__.RuleViewerVisualization, {
                query: query,
                data: data && data[query.refId],
                onChangeQuery: onChangeQuery
              })
            }, query.refId);
          })
        })
      })]
    }), !isFederatedRule && !allDataSourcesAvailable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      title: "Query not available",
      severity: "warning",
      className: styles.queryWarning,
      children: "Cannot display the query preview. Some of the data sources used in the queries are not available."
    })]
  });
}

function isLoading(data) {
  return !!Object.values(data).find(d => d.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading);
}

const getStyles = theme => {
  return {
    errorMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      white-space: pre-wrap;
    `,
    queries: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 100%;
      width: 100%;
    `,
    queriesTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(2, 0.5)};
      font-size: ${theme.typography.h5.fontSize};
      font-weight: ${theme.typography.fontWeightBold};
      font-family: ${theme.typography.h5.fontFamily};
    `,
    query: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border-bottom: 1px solid ${theme.colors.border.medium};
      padding: ${theme.spacing(2)};
    `,
    queryWarning: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(4, 0)};
    `,
    details: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
    `,
    leftSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1;
    `,
    rightSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-left: 90px;
      width: 300px;
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(RuleViewer, {
  style: 'page'
}));

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

/***/ "./public/app/features/alerting/unified/components/Expression.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Expression": () => (/* binding */ Expression),
/* harmony export */   "HighlightedQuery": () => (/* binding */ HighlightedQuery),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _grafana_slate_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@grafana-slate-react-virtual-047372596b/0/cache/@grafana-slate-react-npm-0.22.10-grafana-510bc0576d-3417c53d9d.zip/node_modules/@grafana/slate-react/lib/slate-react.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_plugins_datasource_prometheus_promql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _Well__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/Well.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const HighlightedQuery = ({
  language,
  expr
}) => {
  const plugins = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.SlatePrism)({
    onlyIn: node => node.type === 'code_block',
    getSyntax: () => language
  }, Object.assign({}, prismjs__WEBPACK_IMPORTED_MODULE_4__.languages, {
    [language]: language === 'logql' ? app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_3__["default"] : app_plugins_datasource_prometheus_promql__WEBPACK_IMPORTED_MODULE_2__["default"]
  }))], [language]);
  const slateValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.makeValue)(expr), [expr]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_slate_react__WEBPACK_IMPORTED_MODULE_0__.Editor, {
    plugins: plugins,
    value: slateValue,
    readOnly: true
  });
};
const Expression = ({
  expression: query,
  rulesSource
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Well__WEBPACK_IMPORTED_MODULE_8__.Well, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_6__.cx)(styles.well, 'slate-query-field'),
    children: (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.isCloudRulesSource)(rulesSource) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HighlightedQuery, {
      expr: query,
      language: rulesSource.type === _utils_datasource__WEBPACK_IMPORTED_MODULE_7__.DataSourceType.Loki ? 'logql' : 'promql'
    }) : query
  });
};
const getStyles = theme => ({
  well: _emotion_css__WEBPACK_IMPORTED_MODULE_6__.css`
    font-family: ${theme.typography.fontFamily.monospace};
  `
});

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

/***/ "./public/app/features/alerting/unified/components/rule-viewer/RuleViewerVisualization.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleViewerVisualization": () => (/* binding */ RuleViewerVisualization)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["refId"];

var _Alert;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const headerHeight = 4;
function RuleViewerVisualization(props) {
  var _PanelPluginsButtonGr;

  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const {
    data,
    query,
    onChangeQuery
  } = props;
  const defaultPanel = (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__.isExpressionQuery)(query.model) ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__.TABLE : _utils_constants__WEBPACK_IMPORTED_MODULE_8__.TIMESERIES;
  const [panel, setPanel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPanel);
  const dsSettings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
  const relativeTimeRange = query.relativeTimeRange;
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    frameIndex: 0,
    showHeader: true
  });
  const onTimeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newDateTime => {
    const now = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTime)().unix() - newDateTime.unix();

    if (relativeTimeRange) {
      const interval = relativeTimeRange.from - relativeTimeRange.to;
      onChangeQuery(Object.assign({}, query, {
        relativeTimeRange: {
          from: now + interval,
          to: now
        }
      }));
    }
  }, [onChangeQuery, query, relativeTimeRange]);
  const setDateTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(relativeTimeRangeTo => {
    return relativeTimeRangeTo === 0 ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTime)() : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTime)().subtract(relativeTimeRangeTo, 'seconds');
  }, []);

  if (!data) {
    return null;
  }

  if (!dsSettings) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.content,
      children: [_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
        title: "Could not find datasource for query"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor, {
        width: "100%",
        height: "250px",
        language: "json",
        showLineNumbers: false,
        showMiniMap: false,
        value: JSON.stringify(query, null, '\t'),
        readOnly: true
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: styles.content,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: ({
        width,
        height
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          style: {
            width,
            height
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: styles.header,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              children: [`Query ${query.refId}`, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                className: styles.dataSource,
                children: ["(", dsSettings.name, ")"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: styles.actions,
              children: [!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__.isExpressionQuery)(query.model) && relativeTimeRange ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.DateTimePicker, {
                date: setDateTime(relativeTimeRange.to),
                onChange: onTimeChange,
                maxDate: new Date()
              }) : null, _PanelPluginsButtonGr || (_PanelPluginsButtonGr = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_7__.PanelPluginsButtonGroup, {
                onChange: setPanel,
                value: panel,
                size: "md"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_9__.Authorize, {
                actions: [app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.DataSourcesExplore],
                children: !(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__.isExpressionQuery)(query.model) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                    className: styles.spacing
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
                    size: "md",
                    variant: "secondary",
                    icon: "compass",
                    target: "_blank",
                    href: createExploreLink(dsSettings, query),
                    children: "View in Explore"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.PanelRenderer, {
            height: height - theme.spacing.gridSize * headerHeight,
            width: width,
            data: data,
            pluginId: panel,
            title: "",
            onOptionsChange: setOptions,
            options: options
          })]
        });
      }
    })
  });
}

function createExploreLink(settings, query) {
  const {
    name
  } = settings;

  const _query$model = query.model,
        rest = _objectWithoutPropertiesLoose(_query$model, _excluded);

  const queryParams = Object.assign({}, rest, {
    datasource: name
  });
  return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.urlUtil.renderUrl(`${_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.appSubUrl}/explore`, {
    left: JSON.stringify(['now-1h', 'now', name, queryParams])
  });
}

const getStyles = theme => {
  return {
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      width: 100%;
      height: 250px;
    `,
    header: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      height: ${theme.spacing(headerHeight)};
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
    `,
    refId: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-weight: ${theme.typography.fontWeightMedium};
      color: ${theme.colors.text.link};
      overflow: hidden;
    `,
    dataSource: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-left: ${theme.spacing(1)};
      font-style: italic;
      color: ${theme.colors.text.secondary};
    `,
    actions: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      align-items: center;
    `,
    spacing: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      padding: ${theme.spacing(0, 1, 0, 0)};
    `,
    errorMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      white-space: pre-wrap;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/AlertInstanceStateFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertInstanceStateFilter": () => (/* binding */ AlertInstanceStateFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label;






const AlertInstanceStateFilter = ({
  className,
  onStateFilterChange,
  stateFilter
}) => {
  const stateOptions = Object.values(app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertState).map(value => ({
    label: value,
    value
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: className,
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
      children: "State"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
      options: stateOptions,
      value: stateFilter,
      onChange: onStateFilterChange,
      onClick: v => {
        if (v === stateFilter) {
          onStateFilterChange(undefined);
        }
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsActionButtons": () => (/* binding */ RuleDetailsActionButtons),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
/* harmony import */ var _hooks_useStateHistoryModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useStateHistoryModal.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2;























const RuleDetailsActionButtons = ({
  rule,
  rulesSource
}) => {
  var _rule$rulerRule$grafa, _getAlertmanagerByUid;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation)();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    namespace,
    group,
    rulerRule
  } = rule;
  const [ruleToDelete, setRuleToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
  const alertId = isGrafanaRulerRule(rule.rulerRule) ? (_rule$rulerRule$grafa = rule.rulerRule.grafana_alert.id) !== null && _rule$rulerRule$grafa !== void 0 ? _rule$rulerRule$grafa : '' : '';
  const {
    StateHistoryModal,
    showStateHistoryModal
  } = (0,_hooks_useStateHistoryModal__WEBPACK_IMPORTED_MODULE_10__.useStateHistoryModal)(alertId);
  const alertmanagerSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isGrafanaRulesSource)(rulesSource) ? rulesSource : (_getAlertmanagerByUid = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.getAlertmanagerByUid)(rulesSource.jsonData.alertmanagerUid)) === null || _getAlertmanagerByUid === void 0 ? void 0 : _getAlertmanagerByUid.name;
  const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(rulesSource);
  const hasExplorePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.DataSourcesExplore);
  const leftButtons = [];
  const rightButtons = [];
  const isFederated = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isFederatedRuleGroup)(group);
  const {
    isEditable,
    isRemovable
  } = (0,_hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__.useIsRuleEditable)(rulesSourceName, rulerRule);
  const returnTo = location.pathname + location.search;
  const isViewMode = inViewMode(location.pathname);

  const deleteRule = () => {
    if (ruleToDelete && ruleToDelete.rulerRule) {
      const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.fromRulerRule((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(ruleToDelete.namespace.rulesSource), ruleToDelete.namespace.name, ruleToDelete.group.name, ruleToDelete.rulerRule);
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.deleteRuleAction)(identifier, {
        navigateTo: isViewMode ? '/alerting/list' : undefined
      }));
      setRuleToDelete(undefined);
    }
  };

  const buildShareUrl = () => {
    if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isCloudRulesSource)(rulesSource)) {
      const {
        appUrl,
        appSubUrl
      } = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config;
      const baseUrl = appSubUrl !== '' ? `${appUrl}${appSubUrl}/` : _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.appUrl;
      const ruleUrl = `${encodeURIComponent(rulesSource.name)}/${encodeURIComponent(rule.name)}`;
      return `${baseUrl}alerting/${ruleUrl}/find`;
    }

    return window.location.href.split('?')[0];
  }; // explore does not support grafana rule queries atm
  // neither do "federated rules"


  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isCloudRulesSource)(rulesSource) && hasExplorePermission && !isFederated) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "chart-line",
      target: "__blank",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.createExploreLink)(rulesSource.name, rule.query),
      children: "See graph"
    }, "explore"));
  }

  if (rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.runbookURL]) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "book",
      target: "__blank",
      href: rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.runbookURL],
      children: "View runbook"
    }, "runbook"));
  }

  if (rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.dashboardUID]) {
    const dashboardUID = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.dashboardUID];

    if (dashboardUID) {
      leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        className: style.button,
        size: "xs",
        variant: "primary",
        icon: "apps",
        target: "__blank",
        href: `d/${encodeURIComponent(dashboardUID)}`,
        children: "Go to dashboard"
      }, "dashboard"));
      const panelId = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.panelID];

      if (panelId) {
        leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          className: style.button,
          size: "xs",
          variant: "primary",
          icon: "apps",
          target: "__blank",
          href: `d/${encodeURIComponent(dashboardUID)}?viewPanel=${encodeURIComponent(panelId)}`,
          children: "Go to panel"
        }, "panel"));
      }
    }
  }

  if (alertmanagerSourceName && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.AlertingInstanceCreate, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isEditor)) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
      className: style.button,
      size: "xs",
      icon: "bell-slash",
      target: "__blank",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeRuleBasedSilenceLink)(alertmanagerSourceName, rule),
      children: "Silence"
    }, "silence"));
  }

  if (alertId) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: style.button,
        size: "xs",
        icon: "history",
        onClick: () => showStateHistoryModal(),
        children: "Show state history"
      }), StateHistoryModal]
    }, "history"));
  }

  if (!isViewMode) {
    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "eye",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.createViewLink)(rulesSource, rule, returnTo),
      children: "View"
    }, "view"));
  }

  if (isEditable && rulerRule && !isFederated) {
    const sourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(rulesSource);
    const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.fromRulerRule(sourceName, namespace.name, group.name, rulerRule);
    const editURL = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.urlUtil.renderUrl(`${_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.appSubUrl}/alerting/${encodeURIComponent(_utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.stringifyIdentifier(identifier))}/edit`, {
      returnTo
    });

    if (isViewMode) {
      rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ClipboardButton, {
        onClipboardCopy: () => {
          notifyApp.success('URL copied!');
        },
        onClipboardError: e => {
          notifyApp.error('Error while copying URL', e.text);
        },
        className: style.button,
        size: "sm",
        getText: buildShareUrl,
        children: "Copy link to rule"
      }, "copy"));
    }

    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "pen",
      href: editURL,
      children: "Edit"
    }, "edit"));
  }

  if (isRemovable && rulerRule && !isFederated) {
    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: style.button,
      size: "xs",
      type: "button",
      variant: "secondary",
      icon: "trash-alt",
      onClick: () => setRuleToDelete(rule),
      children: "Delete"
    }, "delete"));
  }

  if (leftButtons.length || rightButtons.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: style.wrapper,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          width: "auto",
          children: leftButtons.length ? leftButtons : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {}))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          width: "auto",
          children: rightButtons.length ? rightButtons : _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {}))
        })]
      }), !!ruleToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, {
        isOpen: true,
        title: "Delete rule",
        body: "Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",
        confirmText: "Yes, delete",
        icon: "exclamation-triangle",
        onConfirm: deleteRule,
        onDismiss: () => setRuleToDelete(undefined)
      })]
    });
  }

  return null;
};

function inViewMode(pathname) {
  return pathname.endsWith('/view');
}

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    height: 24px;
    margin-top: ${theme.spacing(1)};
    font-size: ${theme.typography.size.sm};
  `
});

function isGrafanaRulerRule(rule) {
  if (!rule) {
    return false;
  }

  return rule.grafana_alert != null;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsAnnotations": () => (/* binding */ RuleDetailsAnnotations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function RuleDetailsAnnotations(props) {
  const {
    annotations
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (annotations.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: styles.annotations,
    children: annotations.map(([key, value]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__.AnnotationDetailsField, {
      annotationKey: key,
      value: value
    }, key))
  });
}

const getStyles = () => ({
  annotations: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-top: 46px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsDataSources": () => (/* binding */ RuleDetailsDataSources)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function RuleDetailsDataSources(props) {
  const {
    rulesSource,
    rule
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const dataSources = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isCloudRulesSource)(rulesSource)) {
      return [{
        name: rulesSource.name,
        icon: rulesSource.meta.info.logos.small
      }];
    }

    if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.isGrafanaRulerRule)(rule.rulerRule)) {
      const {
        data
      } = rule.rulerRule.grafana_alert;
      const unique = data.reduce((dataSources, query) => {
        const ds = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);

        if (!ds || ds.uid === app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_3__.ExpressionDatasourceUID) {
          return dataSources;
        }

        dataSources[ds.name] = {
          name: ds.name,
          icon: ds.meta.info.logos.small
        };
        return dataSources;
      }, {});
      return Object.values(unique);
    }

    return [];
  }, [rule, rulesSource]);

  if (dataSources.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_7__.DetailsField, {
    label: "Data source",
    children: dataSources.map(({
      name,
      icon
    }, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          alt: `${name} datasource logo`,
          className: styles.dataSourceIcon,
          src: icon
        }), ' ']
      }), name]
    }, name))
  });
}

function getStyles(theme) {
  const size = theme.spacing(2);
  return {
    dataSourceIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: ${size};
      height: ${size};
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsExpression": () => (/* binding */ RuleDetailsExpression)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/Expression.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function RuleDetailsExpression(props) {
  const {
    annotations,
    rulesSource,
    rule
  } = props;
  const styles = getStyles();

  if (!(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isCloudRulesSource)(rulesSource)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_3__.DetailsField, {
    label: "Expression",
    horizontal: true,
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({
      [styles.exprRow]: !!annotations.length
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Expression__WEBPACK_IMPORTED_MODULE_4__.Expression, {
      expression: rule.query,
      rulesSource: rulesSource
    })
  });
}

const getStyles = () => ({
  exprRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-bottom: 46px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsFederatedSources.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsFederatedSources": () => (/* binding */ RuleDetailsFederatedSources)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const RuleDetailsFederatedSources = ({
  group
}) => {
  var _group$source_tenants;

  const sourceTenants = (_group$source_tenants = group.source_tenants) !== null && _group$source_tenants !== void 0 ? _group$source_tenants : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_1__.DetailsField, {
    label: "Tenant sources",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: sourceTenants.map(tenant => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: tenant
      }, tenant))
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsMatchingInstances": () => (/* binding */ RuleDetailsMatchingInstances)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _AlertInstancesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstancesTable.tsx");
/* harmony import */ var app_plugins_panel_alertlist_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/alertlist/types.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_features_alerting_unified_components_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var app_features_alerting_unified_components_rules_AlertInstanceStateFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstanceStateFilter.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













function RuleDetailsMatchingInstances(props) {
  const {
    promRule
  } = props;
  const [queryString, setQueryString] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [alertState, setAlertState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // This key is used to force a rerender on the inputs when the filters are cleared

  const [filterKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.floor(Math.random() * 100));
  const queryStringKey = `queryString-${filterKey}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles)(getStyles);
  const alerts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _promRule$alerts;

    return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_1__.isAlertingRule)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length ? filterAlerts(queryString, alertState, (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_8__.sortAlerts)(app_plugins_panel_alertlist_types__WEBPACK_IMPORTED_MODULE_4__.SortOrder.Importance, promRule.alerts)) : [];
  }, [promRule, alertState, queryString]);

  if (!(0,_utils_rules__WEBPACK_IMPORTED_MODULE_1__.isAlertingRule)(promRule)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_DetailsField__WEBPACK_IMPORTED_MODULE_2__.DetailsField, {
    label: "Matching instances",
    horizontal: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_6__.cx)(styles.flexRow, styles.spaceBetween),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_alerting_unified_components_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_9__.MatcherFilter, {
          className: styles.rowChild,
          defaultQueryString: queryString,
          onFilterChange: value => setQueryString(value)
        }, queryStringKey), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_alerting_unified_components_rules_AlertInstanceStateFilter__WEBPACK_IMPORTED_MODULE_10__.AlertInstanceStateFilter, {
          className: styles.rowChild,
          stateFilter: alertState,
          onStateFilterChange: setAlertState
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_AlertInstancesTable__WEBPACK_IMPORTED_MODULE_3__.AlertInstancesTable, {
      instances: alerts
    })]
  });
}

function filterAlerts(alertInstanceLabel, alertInstanceState, alerts) {
  let filteredAlerts = [...alerts];

  if (alertInstanceLabel) {
    const matchers = (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.parseMatchers)(alertInstanceLabel || '');
    filteredAlerts = filteredAlerts.filter(({
      labels
    }) => (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.labelsMatchMatchers)(labels, matchers));
  }

  if (alertInstanceState) {
    filteredAlerts = filteredAlerts.filter(alert => {
      return alert.state === alertInstanceState;
    });
  }

  return filteredAlerts;
}

const getStyles = theme => {
  return {
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_6__.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: ${theme.spacing.sm};
    `,
    spaceBetween: _emotion_css__WEBPACK_IMPORTED_MODULE_6__.css`
      justify-content: space-between;
    `,
    rowChild: _emotion_css__WEBPACK_IMPORTED_MODULE_6__.css`
      margin-right: ${theme.spacing.sm};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleHealth.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleHealth": () => (/* binding */ RuleHealth)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span;







const RuleHealth = ({
  rule
}) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyle);

  if (rule.health === 'err' || rule.health === 'error') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      theme: "error",
      content: rule.lastError || 'No error message provided.',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: style.warn,
        children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "exclamation-triangle"
        })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: "error"
        }))]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: rule.health
  });
};

const getStyle = theme => ({
  warn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: inline-flex;
    flex-direction: row;
    color: ${theme.colors.warning.text};
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleState": () => (/* binding */ RuleState)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _HorizontalGroup, _HorizontalGroup2;











const RuleState = ({
  rule,
  isDeleting,
  isCreating
}) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyle);
  const {
    promRule
  } = rule; // return how long the rule has been in it's firing state, if any

  const forTime = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    var _promRule$alerts;

    if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isAlertingRule)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length && promRule.state !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.PromAlertingRuleState.Inactive) {
      // find earliest alert
      const firstActiveAt = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.getFirstActiveAt)(promRule); // calculate time elapsed from earliest alert

      if (firstActiveAt) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          title: String(firstActiveAt),
          className: style.for,
          children: ["for", ' ', (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.intervalToAbbreviatedDurationString)({
            start: firstActiveAt,
            end: new Date()
          }, false)]
        });
      }
    }

    return null;
  }, [promRule, style]);

  if (isDeleting) {
    return _HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      align: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}), "deleting"]
    }));
  } else if (isCreating) {
    return _HorizontalGroup2 || (_HorizontalGroup2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      align: "flex-start",
      children: [' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}), "creating"]
    }));
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isAlertingRule)(promRule)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      align: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_6__.AlertStateTag, {
        state: promRule.state
      }), forTime]
    });
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isRecordingRule)(promRule)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: "Recording rule"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: "n/a"
  });
};

const getStyle = theme => ({
  for: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.typography.bodySmall.fontSize};
    color: ${theme.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/StateHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateHistory": () => (/* binding */ StateHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var _hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts");
/* harmony import */ var _AlertLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabel.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder;














const StateHistory = ({
  alertId
}) => {
  const {
    loading,
    error,
    result = []
  } = (0,_hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_7__.useManagedAlertStateHistory)(alertId);

  if (loading && !error) {
    return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
      text: 'Loading history...'
    }));
  }

  if (error && !loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      title: 'Failed to fetch alert state history',
      children: error.message
    });
  }

  const columns = [{
    id: 'state',
    label: 'State',
    size: 'max-content',
    renderCell: renderStateCell
  }, {
    id: 'value',
    label: '',
    size: 'auto',
    renderCell: renderValueCell
  }, {
    id: 'timestamp',
    label: 'Time',
    size: 'max-content',
    renderCell: renderTimestampCell
  }];
  const items = result.reduce((acc, item, index) => {
    acc.push({
      id: String(item.id),
      state: item.newState,
      text: item.text,
      data: item.data,
      timestamp: item.updated
    }); // if the preceding state is not the same, create a separate state entry – this likely means the state was reset

    if (!hasMatchingPrecedingState(index, result)) {
      acc.push({
        id: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)(),
        state: item.prevState
      });
    }

    return acc;
  }, []).map(historyItem => ({
    id: historyItem.id,
    data: historyItem
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_5__.DynamicTable, {
    cols: columns,
    items: items
  });
};

function renderValueCell(item) {
  var _item$data$data$evalM, _item$data$data;

  const matches = (_item$data$data$evalM = (_item$data$data = item.data.data) === null || _item$data$data === void 0 ? void 0 : _item$data$data.evalMatches) !== null && _item$data$data$evalM !== void 0 ? _item$data$data$evalM : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [item.data.text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(LabelsWrapper, {
      children: matches.map(match => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AlertLabel__WEBPACK_IMPORTED_MODULE_8__.AlertLabel, {
        labelKey: match.metric,
        value: String(match.value)
      }, match.metric))
    })]
  });
}

function renderStateCell(item) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_6__.AlertStateTag, {
    state: item.data.state
  });
}

function renderTimestampCell(item) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: TimestampStyle,
    children: item.data.timestamp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
      children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(item.data.timestamp)
    })
  });
}

const LabelsWrapper = ({
  children
}) => {
  const {
    wrapper
  } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: wrapper,
    children: children
  });
};

const TimestampStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
    & > * {
      margin-right: ${theme.spacing.xs};
    }
  `
}); // this function will figure out if a given historyItem has a preceding historyItem where the states match - in other words
// the newState of the previous historyItem is the same as the prevState of the current historyItem


function hasMatchingPrecedingState(index, items) {
  const currentHistoryItem = items[index];
  const previousHistoryItem = items[index + 1];

  if (!previousHistoryItem) {
    return false;
  }

  return previousHistoryItem.newState === currentHistoryItem.prevState;
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

/***/ "./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useManagedAlertStateHistory": () => (/* binding */ useManagedAlertStateHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




function useManagedAlertStateHistory(alertId) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const history = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.managedAlertStateHistory);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchGrafanaAnnotationsAction)(alertId));
  }, [dispatch, alertId]);
  return history;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useStateHistoryModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStateHistoryModal": () => (/* binding */ useStateHistoryModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_rules_StateHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/StateHistory.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function useStateHistoryModal(alertId) {
  var _StateHistory;

  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const StateHistoryModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isOpen: showModal,
    onDismiss: () => setShowModal(false),
    closeOnBackdropClick: true,
    closeOnEscape: true,
    title: "State history",
    children: _StateHistory || (_StateHistory = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_rules_StateHistory__WEBPACK_IMPORTED_MODULE_2__.StateHistory, {
      alertId: alertId
    }))
  }), [alertId, showModal]);
  return {
    StateHistoryModal,
    showStateHistoryModal: () => setShowModal(true),
    hideStateHistoryModal: () => setShowModal(false)
  };
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

/***/ "./public/app/features/alerting/unified/utils/query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alertRuleToQueries": () => (/* binding */ alertRuleToQueries)
/* harmony export */ });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");


function alertRuleToQueries(combinedRule) {
  if (!combinedRule) {
    return [];
  }

  const {
    namespace,
    rulerRule
  } = combinedRule;
  const {
    rulesSource
  } = namespace;

  if ((0,_datasource__WEBPACK_IMPORTED_MODULE_0__.isGrafanaRulesSource)(rulesSource)) {
    if ((0,_rules__WEBPACK_IMPORTED_MODULE_1__.isGrafanaRulerRule)(rulerRule)) {
      return rulerRule.grafana_alert.data;
    }
  }

  if ((0,_datasource__WEBPACK_IMPORTED_MODULE_0__.isCloudRulesSource)(rulesSource)) {
    const model = cloudAlertRuleToModel(rulesSource, combinedRule);
    return [{
      refId: model.refId,
      datasourceUid: rulesSource.uid,
      queryType: '',
      model,
      relativeTimeRange: {
        from: 360,
        to: 0
      }
    }];
  }

  return [];
}

function cloudAlertRuleToModel(dsSettings, rule) {
  const refId = 'A';

  switch (dsSettings.type) {
    case 'prometheus':
      {
        const query = {
          refId,
          expr: rule.query
        };
        return query;
      }

    case 'loki':
      {
        const query = {
          refId,
          expr: rule.query
        };
        return query;
      }

    default:
      throw new Error(`Query for datasource type ${dsSettings.type} is currently not supported by cloud alert rules.`);
  }
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

/***/ "./public/app/plugins/datasource/loki/syntax.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FUNCTIONS": () => (/* binding */ FUNCTIONS),
/* harmony export */   "LOKI_KEYWORDS": () => (/* binding */ LOKI_KEYWORDS),
/* harmony export */   "PIPE_OPERATORS": () => (/* binding */ PIPE_OPERATORS),
/* harmony export */   "PIPE_PARSERS": () => (/* binding */ PIPE_PARSERS),
/* harmony export */   "RANGE_VEC_FUNCTIONS": () => (/* binding */ RANGE_VEC_FUNCTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lokiGrammar": () => (/* binding */ lokiGrammar)
/* harmony export */ });
const AGGREGATION_OPERATORS = [{
  label: 'sum',
  insertText: 'sum',
  documentation: 'Calculate sum over dimensions'
}, {
  label: 'min',
  insertText: 'min',
  documentation: 'Select minimum over dimensions'
}, {
  label: 'max',
  insertText: 'max',
  documentation: 'Select maximum over dimensions'
}, {
  label: 'avg',
  insertText: 'avg',
  documentation: 'Calculate the average over dimensions'
}, {
  label: 'stddev',
  insertText: 'stddev',
  documentation: 'Calculate population standard deviation over dimensions'
}, {
  label: 'stdvar',
  insertText: 'stdvar',
  documentation: 'Calculate population standard variance over dimensions'
}, {
  label: 'count',
  insertText: 'count',
  documentation: 'Count number of elements in the vector'
}, {
  label: 'bottomk',
  insertText: 'bottomk',
  documentation: 'Smallest k elements by sample value'
}, {
  label: 'topk',
  insertText: 'topk',
  documentation: 'Largest k elements by sample value'
}];
const PIPE_PARSERS = [{
  label: 'json',
  insertText: 'json',
  documentation: 'Extracting labels from the log line using json parser. Only available in Loki 2.0+.'
}, {
  label: 'regexp',
  insertText: 'regexp ""',
  documentation: 'Extracting labels from the log line using regexp parser. Only available in Loki 2.0+.',
  move: -1
}, {
  label: 'logfmt',
  insertText: 'logfmt',
  documentation: 'Extracting labels from the log line using logfmt parser. Only available in Loki 2.0+.'
}, {
  label: 'pattern',
  insertText: 'pattern',
  documentation: 'Extracting labels from the log line using pattern parser. Only available in Loki 2.3+.'
}];
const PIPE_OPERATORS = [{
  label: 'unwrap',
  insertText: 'unwrap',
  detail: 'unwrap identifier',
  documentation: 'Take labels and use the values as sample data for metric aggregations. Only available in Loki 2.0+.'
}, {
  label: 'unpack',
  insertText: 'unpack',
  detail: 'unpack identifier',
  documentation: 'Parses a JSON log line, unpacking all embedded labels in the pack stage. A special property "_entry" will also be used to replace the original log line. Only available in Loki 2.0+.'
}, {
  label: 'label_format',
  insertText: 'label_format',
  documentation: 'Use to rename, modify or add labels. For example, | label_format foo=bar . Only available in Loki 2.0+.'
}, {
  label: 'line_format',
  insertText: 'line_format',
  documentation: 'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" . Only available in Loki 2.0+.'
}];
const RANGE_VEC_FUNCTIONS = [{
  insertText: 'avg_over_time',
  label: 'avg_over_time',
  detail: 'avg_over_time(range-vector)',
  documentation: 'The average of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'min_over_time',
  label: 'min_over_time',
  detail: 'min_over_time(range-vector)',
  documentation: 'The minimum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'max_over_time',
  label: 'max_over_time',
  detail: 'max_over_time(range-vector)',
  documentation: 'The maximum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'sum_over_time',
  label: 'sum_over_time',
  detail: 'sum_over_time(range-vector)',
  documentation: 'The sum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'count_over_time',
  label: 'count_over_time',
  detail: 'count_over_time(range-vector)',
  documentation: 'The count of all values in the specified interval.'
}, {
  insertText: 'stdvar_over_time',
  label: 'stdvar_over_time',
  detail: 'stdvar_over_time(range-vector)',
  documentation: 'The population standard variance of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'stddev_over_time',
  label: 'stddev_over_time',
  detail: 'stddev_over_time(range-vector)',
  documentation: 'The population standard deviation of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'quantile_over_time',
  label: 'quantile_over_time',
  detail: 'quantile_over_time(scalar, range-vector)',
  documentation: 'The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'bytes_over_time',
  label: 'bytes_over_time',
  detail: 'bytes_over_time(range-vector)',
  documentation: 'Counts the amount of bytes used by each log stream for a given range'
}, {
  insertText: 'bytes_rate',
  label: 'bytes_rate',
  detail: 'bytes_rate(range-vector)',
  documentation: 'Calculates the number of bytes per second for each stream.'
}, {
  insertText: 'rate',
  label: 'rate',
  detail: 'rate(v range-vector)',
  documentation: 'Calculates the number of entries per second.'
}];
const FUNCTIONS = [...AGGREGATION_OPERATORS, ...RANGE_VEC_FUNCTIONS];
const LOKI_KEYWORDS = [...FUNCTIONS, ...PIPE_OPERATORS, ...PIPE_PARSERS].map(keyword => keyword.label);
const lokiGrammar = {
  comment: {
    pattern: /#.*/
  },
  'context-aggregation': {
    pattern: /((without|by)\s*)\([^)]*\)/,
    // by ()
    lookbehind: true,
    inside: {
      'label-key': {
        pattern: /[^(),\s][^,)]*[^),\s]*/,
        alias: 'attr-name'
      },
      punctuation: /[()]/
    }
  },
  'context-labels': {
    pattern: /\{[^}]*(?=}?)/,
    greedy: true,
    inside: {
      comment: {
        pattern: /#.*/
      },
      'label-key': {
        pattern: /[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,
        alias: 'attr-name',
        greedy: true
      },
      'label-value': {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true,
        alias: 'attr-value'
      },
      punctuation: /[{]/
    }
  },
  'context-pipe': {
    pattern: /\s\|[^=~]\s?\w*/i,
    inside: {
      'pipe-operator': {
        pattern: /\|/i,
        alias: 'operator'
      },
      'pipe-operations': {
        pattern: new RegExp(`${[...PIPE_PARSERS, ...PIPE_OPERATORS].map(f => f.label).join('|')}`, 'i'),
        alias: 'keyword'
      }
    }
  },
  function: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})(?=\\s*\\()`, 'i'),
  'context-range': [{
    pattern: /\[[^\]]*(?=\])/,
    // [1m]
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    // offset 1m
    lookbehind: true,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }],
  quote: {
    pattern: /"(?:\\.|[^\\"])*"/,
    alias: 'string',
    greedy: true
  },
  backticks: {
    pattern: /`(?:\\.|[^\\`])*`/,
    alias: 'string',
    greedy: true
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  operator: /\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,
  punctuation: /[{}(),.]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lokiGrammar);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/promql.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FUNCTIONS": () => (/* binding */ FUNCTIONS),
/* harmony export */   "LOGICAL_OPERATORS": () => (/* binding */ LOGICAL_OPERATORS),
/* harmony export */   "OPERATORS": () => (/* binding */ OPERATORS),
/* harmony export */   "PROM_KEYWORDS": () => (/* binding */ PROM_KEYWORDS),
/* harmony export */   "RATE_RANGES": () => (/* binding */ RATE_RANGES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "promqlGrammar": () => (/* binding */ promqlGrammar)
/* harmony export */ });
// When changing RATE_RANGES, check if Loki/LogQL ranges should be changed too
// @see public/app/plugins/datasource/loki/language_provider.ts
const RATE_RANGES = [{
  label: '$__interval',
  sortValue: '$__interval'
}, {
  label: '$__rate_interval',
  sortValue: '$__rate_interval'
}, {
  label: '$__range',
  sortValue: '$__range'
}, {
  label: '1m',
  sortValue: '00:01:00'
}, {
  label: '5m',
  sortValue: '00:05:00'
}, {
  label: '10m',
  sortValue: '00:10:00'
}, {
  label: '30m',
  sortValue: '00:30:00'
}, {
  label: '1h',
  sortValue: '01:00:00'
}, {
  label: '1d',
  sortValue: '24:00:00'
}];
const OPERATORS = ['by', 'group_left', 'group_right', 'ignoring', 'on', 'offset', 'without'];
const LOGICAL_OPERATORS = ['or', 'and', 'unless'];
const TRIGONOMETRIC_FUNCTIONS = [{
  label: 'acos',
  insertText: 'acos',
  detail: 'acos(v instant-vector)',
  documentation: 'calculates the arccosine of all elements in v'
}, {
  label: 'acosh',
  insertText: 'acosh',
  detail: 'acosh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic cosine of all elements in v'
}, {
  label: 'asin',
  insertText: 'asin',
  detail: 'asin(v instant-vector)',
  documentation: 'calculates the arcsine of all elements in v'
}, {
  label: 'asinh',
  insertText: 'asinh',
  detail: 'asinh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic sine of all elements in v'
}, {
  label: 'atan',
  insertText: 'atan',
  detail: 'atan(v instant-vector)',
  documentation: 'calculates the arctangent of all elements in v'
}, {
  label: 'atanh',
  insertText: 'atanh',
  detail: 'atanh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic tangent of all elements in v'
}, {
  label: 'cos',
  insertText: 'cos',
  detail: 'cos(v instant-vector)',
  documentation: 'calculates the cosine of all elements in v'
}, {
  label: 'cosh',
  insertText: 'cosh',
  detail: 'cosh(v instant-vector)',
  documentation: 'calculates the hyperbolic cosine of all elements in v'
}, {
  label: 'sin',
  insertText: 'sin',
  detail: 'sin(v instant-vector)',
  documentation: 'calculates the sine of all elements in v'
}, {
  label: 'sinh',
  insertText: 'sinh',
  detail: 'sinh(v instant-vector)',
  documentation: 'calculates the hyperbolic sine of all elements in v'
}, {
  label: 'tan',
  insertText: 'tan',
  detail: 'tan(v instant-vector)',
  documentation: 'calculates the tangent of all elements in v'
}, {
  label: 'tanh',
  insertText: 'tanh',
  detail: 'tanh(v instant-vector)',
  documentation: 'calculates the hyperbolic tangent of all elements in v'
}];
const AGGREGATION_OPERATORS = [{
  label: 'sum',
  insertText: 'sum',
  documentation: 'Calculate sum over dimensions'
}, {
  label: 'min',
  insertText: 'min',
  documentation: 'Select minimum over dimensions'
}, {
  label: 'max',
  insertText: 'max',
  documentation: 'Select maximum over dimensions'
}, {
  label: 'avg',
  insertText: 'avg',
  documentation: 'Calculate the average over dimensions'
}, {
  label: 'group',
  insertText: 'group',
  documentation: 'All values in the resulting vector are 1'
}, {
  label: 'stddev',
  insertText: 'stddev',
  documentation: 'Calculate population standard deviation over dimensions'
}, {
  label: 'stdvar',
  insertText: 'stdvar',
  documentation: 'Calculate population standard variance over dimensions'
}, {
  label: 'count',
  insertText: 'count',
  documentation: 'Count number of elements in the vector'
}, {
  label: 'count_values',
  insertText: 'count_values',
  documentation: 'Count number of elements with the same value'
}, {
  label: 'bottomk',
  insertText: 'bottomk',
  documentation: 'Smallest k elements by sample value'
}, {
  label: 'topk',
  insertText: 'topk',
  documentation: 'Largest k elements by sample value'
}, {
  label: 'quantile',
  insertText: 'quantile',
  documentation: 'Calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions'
}];
const FUNCTIONS = [...AGGREGATION_OPERATORS, ...TRIGONOMETRIC_FUNCTIONS, {
  insertText: 'abs',
  label: 'abs',
  detail: 'abs(v instant-vector)',
  documentation: 'Returns the input vector with all sample values converted to their absolute value.'
}, {
  insertText: 'absent',
  label: 'absent',
  detail: 'absent(v instant-vector)',
  documentation: 'Returns an empty vector if the vector passed to it has any elements and a 1-element vector with the value 1 if the vector passed to it has no elements. This is useful for alerting on when no time series exist for a given metric name and label combination.'
}, {
  insertText: 'absent_over_time',
  label: 'absent_over_time',
  detail: 'absent(v range-vector)',
  documentation: 'Returns an empty vector if the range vector passed to it has any elements and a 1-element vector with the value 1 if the range vector passed to it has no elements.'
}, {
  insertText: 'ceil',
  label: 'ceil',
  detail: 'ceil(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` up to the nearest integer.'
}, {
  insertText: 'changes',
  label: 'changes',
  detail: 'changes(v range-vector)',
  documentation: 'For each input time series, `changes(v range-vector)` returns the number of times its value has changed within the provided time range as an instant vector.'
}, {
  insertText: 'clamp',
  label: 'clamp',
  detail: 'clamp(v instant-vector, min scalar, max scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have a lower limit of `min` and an upper limit of `max`.'
}, {
  insertText: 'clamp_max',
  label: 'clamp_max',
  detail: 'clamp_max(v instant-vector, max scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have an upper limit of `max`.'
}, {
  insertText: 'clamp_min',
  label: 'clamp_min',
  detail: 'clamp_min(v instant-vector, min scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have a lower limit of `min`.'
}, {
  insertText: 'count_scalar',
  label: 'count_scalar',
  detail: 'count_scalar(v instant-vector)',
  documentation: 'Returns the number of elements in a time series vector as a scalar. This is in contrast to the `count()` aggregation operator, which always returns a vector (an empty one if the input vector is empty) and allows grouping by labels via a `by` clause.'
}, {
  insertText: 'deg',
  label: 'deg',
  detail: 'deg(v instant-vector)',
  documentation: 'Converts radians to degrees for all elements in v'
}, {
  insertText: 'day_of_month',
  label: 'day_of_month',
  detail: 'day_of_month(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the month for each of the given times in UTC. Returned values are from 1 to 31.'
}, {
  insertText: 'day_of_week',
  label: 'day_of_week',
  detail: 'day_of_week(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the week for each of the given times in UTC. Returned values are from 0 to 6, where 0 means Sunday etc.'
}, {
  insertText: 'days_in_month',
  label: 'days_in_month',
  detail: 'days_in_month(v=vector(time()) instant-vector)',
  documentation: 'Returns number of days in the month for each of the given times in UTC. Returned values are from 28 to 31.'
}, {
  insertText: 'delta',
  label: 'delta',
  detail: 'delta(v range-vector)',
  documentation: 'Calculates the difference between the first and last value of each time series element in a range vector `v`, returning an instant vector with the given deltas and equivalent labels. The delta is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if the sample values are all integers.'
}, {
  insertText: 'deriv',
  label: 'deriv',
  detail: 'deriv(v range-vector)',
  documentation: 'Calculates the per-second derivative of the time series in a range vector `v`, using simple linear regression.'
}, {
  insertText: 'drop_common_labels',
  label: 'drop_common_labels',
  detail: 'drop_common_labels(instant-vector)',
  documentation: 'Drops all labels that have the same name and value across all series in the input vector.'
}, {
  insertText: 'exp',
  label: 'exp',
  detail: 'exp(v instant-vector)',
  documentation: 'Calculates the exponential function for all elements in `v`.\nSpecial cases are:\n* `Exp(+Inf) = +Inf` \n* `Exp(NaN) = NaN`'
}, {
  insertText: 'floor',
  label: 'floor',
  detail: 'floor(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` down to the nearest integer.'
}, {
  insertText: 'histogram_quantile',
  label: 'histogram_quantile',
  detail: 'histogram_quantile(φ float, b instant-vector)',
  documentation: 'Calculates the φ-quantile (0 ≤ φ ≤ 1) from the buckets `b` of a histogram. The samples in `b` are the counts of observations in each bucket. Each sample must have a label `le` where the label value denotes the inclusive upper bound of the bucket. (Samples without such a label are silently ignored.) The histogram metric type automatically provides time series with the `_bucket` suffix and the appropriate labels.'
}, {
  insertText: 'holt_winters',
  label: 'holt_winters',
  detail: 'holt_winters(v range-vector, sf scalar, tf scalar)',
  documentation: 'Produces a smoothed value for time series based on the range in `v`. The lower the smoothing factor `sf`, the more importance is given to old data. The higher the trend factor `tf`, the more trends in the data is considered. Both `sf` and `tf` must be between 0 and 1.'
}, {
  insertText: 'hour',
  label: 'hour',
  detail: 'hour(v=vector(time()) instant-vector)',
  documentation: 'Returns the hour of the day for each of the given times in UTC. Returned values are from 0 to 23.'
}, {
  insertText: 'idelta',
  label: 'idelta',
  detail: 'idelta(v range-vector)',
  documentation: 'Calculates the difference between the last two samples in the range vector `v`, returning an instant vector with the given deltas and equivalent labels.'
}, {
  insertText: 'increase',
  label: 'increase',
  detail: 'increase(v range-vector)',
  documentation: 'Calculates the increase in the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. The increase is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if a counter increases only by integer increments.'
}, {
  insertText: 'irate',
  label: 'irate',
  detail: 'irate(v range-vector)',
  documentation: 'Calculates the per-second instant rate of increase of the time series in the range vector. This is based on the last two data points. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for.'
}, {
  insertText: 'label_join',
  label: 'label_join',
  detail: 'label_join(v instant-vector, dst_label string, separator string, src_label_1 string, src_label_2 string, ...)',
  documentation: 'For each timeseries in `v`, joins all the values of all the `src_labels` using `separator` and returns the timeseries with the label `dst_label` containing the joined value. There can be any number of `src_labels` in this function.'
}, {
  insertText: 'label_replace',
  label: 'label_replace',
  detail: 'label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)',
  documentation: "For each timeseries in `v`, `label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)`  matches the regular expression `regex` against the label `src_label`.  If it matches, then the timeseries is returned with the label `dst_label` replaced by the expansion of `replacement`. `$1` is replaced with the first matching subgroup, `$2` with the second etc. If the regular expression doesn't match then the timeseries is returned unchanged."
}, {
  insertText: 'ln',
  label: 'ln',
  detail: 'ln(v instant-vector)',
  documentation: 'Calculates the natural logarithm for all elements in `v`.\nSpecial cases are:\n * `ln(+Inf) = +Inf`\n * `ln(0) = -Inf`\n * `ln(x < 0) = NaN`\n * `ln(NaN) = NaN`'
}, {
  insertText: 'log2',
  label: 'log2',
  detail: 'log2(v instant-vector)',
  documentation: 'Calculates the binary logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'log10',
  label: 'log10',
  detail: 'log10(v instant-vector)',
  documentation: 'Calculates the decimal logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'minute',
  label: 'minute',
  detail: 'minute(v=vector(time()) instant-vector)',
  documentation: 'Returns the minute of the hour for each of the given times in UTC. Returned values are from 0 to 59.'
}, {
  insertText: 'month',
  label: 'month',
  detail: 'month(v=vector(time()) instant-vector)',
  documentation: 'Returns the month of the year for each of the given times in UTC. Returned values are from 1 to 12, where 1 means January etc.'
}, {
  insertText: 'pi',
  label: 'pi',
  detail: 'pi()',
  documentation: 'Returns pi'
}, {
  insertText: 'predict_linear',
  label: 'predict_linear',
  detail: 'predict_linear(v range-vector, t scalar)',
  documentation: 'Predicts the value of time series `t` seconds from now, based on the range vector `v`, using simple linear regression.'
}, {
  insertText: 'rad',
  label: 'rad',
  detail: 'rad(v instant-vector)',
  documentation: 'Converts degrees to radians for all elements in v'
}, {
  insertText: 'rate',
  label: 'rate',
  detail: 'rate(v range-vector)',
  documentation: "Calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. Also, the calculation extrapolates to the ends of the time range, allowing for missed scrapes or imperfect alignment of scrape cycles with the range's time period."
}, {
  insertText: 'resets',
  label: 'resets',
  detail: 'resets(v range-vector)',
  documentation: 'For each input time series, `resets(v range-vector)` returns the number of counter resets within the provided time range as an instant vector. Any decrease in the value between two consecutive samples is interpreted as a counter reset.'
}, {
  insertText: 'round',
  label: 'round',
  detail: 'round(v instant-vector, to_nearest=1 scalar)',
  documentation: 'Rounds the sample values of all elements in `v` to the nearest integer. Ties are resolved by rounding up. The optional `to_nearest` argument allows specifying the nearest multiple to which the sample values should be rounded. This multiple may also be a fraction.'
}, {
  insertText: 'scalar',
  label: 'scalar',
  detail: 'scalar(v instant-vector)',
  documentation: 'Given a single-element input vector, `scalar(v instant-vector)` returns the sample value of that single element as a scalar. If the input vector does not have exactly one element, `scalar` will return `NaN`.'
}, {
  insertText: 'sgn',
  label: 'sgn',
  detail: 'sgn(v instant-vector)',
  documentation: 'Returns a vector with all sample values converted to their sign, defined as this: 1 if v is positive, -1 if v is negative and 0 if v is equal to zero.'
}, {
  insertText: 'sort',
  label: 'sort',
  detail: 'sort(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in ascending order.'
}, {
  insertText: 'sort_desc',
  label: 'sort_desc',
  detail: 'sort_desc(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in descending order.'
}, {
  insertText: 'sqrt',
  label: 'sqrt',
  detail: 'sqrt(v instant-vector)',
  documentation: 'Calculates the square root of all elements in `v`.'
}, {
  insertText: 'time',
  label: 'time',
  detail: 'time()',
  documentation: 'Returns the number of seconds since January 1, 1970 UTC. Note that this does not actually return the current time, but the time at which the expression is to be evaluated.'
}, {
  insertText: 'timestamp',
  label: 'timestamp',
  detail: 'timestamp(v instant-vector)',
  documentation: 'Returns the timestamp of each of the samples of the given vector as the number of seconds since January 1, 1970 UTC.'
}, {
  insertText: 'vector',
  label: 'vector',
  detail: 'vector(s scalar)',
  documentation: 'Returns the scalar `s` as a vector with no labels.'
}, {
  insertText: 'year',
  label: 'year',
  detail: 'year(v=vector(time()) instant-vector)',
  documentation: 'Returns the year for each of the given times in UTC.'
}, {
  insertText: 'avg_over_time',
  label: 'avg_over_time',
  detail: 'avg_over_time(range-vector)',
  documentation: 'The average value of all points in the specified interval.'
}, {
  insertText: 'min_over_time',
  label: 'min_over_time',
  detail: 'min_over_time(range-vector)',
  documentation: 'The minimum value of all points in the specified interval.'
}, {
  insertText: 'max_over_time',
  label: 'max_over_time',
  detail: 'max_over_time(range-vector)',
  documentation: 'The maximum value of all points in the specified interval.'
}, {
  insertText: 'sum_over_time',
  label: 'sum_over_time',
  detail: 'sum_over_time(range-vector)',
  documentation: 'The sum of all values in the specified interval.'
}, {
  insertText: 'count_over_time',
  label: 'count_over_time',
  detail: 'count_over_time(range-vector)',
  documentation: 'The count of all values in the specified interval.'
}, {
  insertText: 'quantile_over_time',
  label: 'quantile_over_time',
  detail: 'quantile_over_time(scalar, range-vector)',
  documentation: 'The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval.'
}, {
  insertText: 'stddev_over_time',
  label: 'stddev_over_time',
  detail: 'stddev_over_time(range-vector)',
  documentation: 'The population standard deviation of the values in the specified interval.'
}, {
  insertText: 'stdvar_over_time',
  label: 'stdvar_over_time',
  detail: 'stdvar_over_time(range-vector)',
  documentation: 'The population standard variance of the values in the specified interval.'
}, {
  insertText: 'last_over_time',
  label: 'last_over_time',
  detail: 'last_over_time(range-vector)',
  documentation: 'The most recent point value in specified interval.'
}];
const PROM_KEYWORDS = FUNCTIONS.map(keyword => keyword.label);
const promqlGrammar = {
  comment: {
    pattern: /#.*/
  },
  'context-aggregation': {
    pattern: /((by|without)\s*)\([^)]*\)/,
    // by ()
    lookbehind: true,
    inside: {
      'label-key': {
        pattern: /[^(),\s][^,)]*[^),\s]*/,
        alias: 'attr-name'
      },
      punctuation: /[()]/
    }
  },
  'context-labels': {
    pattern: /\{[^}]*(?=}?)/,
    greedy: true,
    inside: {
      comment: {
        pattern: /#.*/
      },
      'label-key': {
        pattern: /[a-z_]\w*(?=\s*(=|!=|=~|!~))/,
        alias: 'attr-name',
        greedy: true
      },
      'label-value': {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true,
        alias: 'attr-value'
      },
      punctuation: /[{]/
    }
  },
  function: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})(?=\\s*\\()`, 'i'),
  'context-range': [{
    pattern: /\[[^\]]*(?=])/,
    // [1m]
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    // offset 1m
    lookbehind: true,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }],
  idList: {
    pattern: /\d+(\|\d+)+/,
    alias: 'number'
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  operator: new RegExp(`/[-+*/=%^~]|&&?|\\|?\\||!=?|<(?:=>?|<|>)?|>[>=]?|\\b(?:${OPERATORS.join('|')})\\b`, 'i'),
  punctuation: /[{};()`,.]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promqlGrammar);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDBCO0FBK0RwQzJILEVBQUFBLFdBQVcsRUFBRTtBQS9EdUIsQ0FBL0I7QUFrRVAsaUVBQWVlLGFBQWY7Ozs7Ozs7Ozs7Ozs7QUNobEJpQztBQUNtQztBQUNwRTtBQUNBLGFBQWEsK0NBQVE7QUFDckIsSUFBSSxzRUFBeUI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL1J1bGVWaWV3ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9BdXRob3JpemUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9FeHByZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtdmlld2VyL1J1bGVWaWV3ZXJMYXlvdXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLXZpZXdlci9SdWxlVmlld2VyVmlzdWFsaXphdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQW5ub3RhdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0RhdGFTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNFeHByZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNGZWRlcmF0ZWRTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVIZWFsdGgudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlU3RhdGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9TdGF0ZUhpc3RvcnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRRdWVyaWVzU3RhdHVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUZvbGRlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUlzUnVsZUVkaXRhYmxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlU3RhdGVIaXN0b3J5TW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvc3RhdGUvQWxlcnRpbmdRdWVyeVJ1bm5lci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL3F1ZXJ5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvdGltZVJhbmdlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS9zeW50YXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvcHJvbXFsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC0wMDMyNmU3MGJhLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy4zLjItYTAzMmNiZWIwMS03Mzc5NDYwZjUxLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VPYnNlcnZhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBMb2FkaW5nU3RhdGUsIFBhbmVsRGF0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHtcbiAgQWxlcnQsXG4gIEJ1dHRvbixcbiAgSWNvbixcbiAgTG9hZGluZ1BsYWNlaG9sZGVyLFxuICBQYW5lbENocm9tZUxvYWRpbmdJbmRpY2F0b3IsXG4gIHVzZVN0eWxlczIsXG4gIFZlcnRpY2FsR3JvdXAsXG4gIHdpdGhFcnJvckJvdW5kYXJ5LFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlT2JzZXJ2YWJsZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IHsgQWxlcnRMYWJlbHMgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRMYWJlbHMnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHNGaWVsZCc7XG5pbXBvcnQgeyBSdWxlVmlld2VyTGF5b3V0LCBSdWxlVmlld2VyTGF5b3V0Q29udGVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlLXZpZXdlci9SdWxlVmlld2VyTGF5b3V0JztcbmltcG9ydCB7IFJ1bGVWaWV3ZXJWaXN1YWxpemF0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGUtdmlld2VyL1J1bGVWaWV3ZXJWaXN1YWxpemF0aW9uJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucyB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMnO1xuaW1wb3J0IHsgUnVsZURldGFpbHNBbm5vdGF0aW9ucyB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0Fubm90YXRpb25zJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzRGF0YVNvdXJjZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNEYXRhU291cmNlcyc7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc0V4cHJlc3Npb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNFeHByZXNzaW9uJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzRmVkZXJhdGVkU291cmNlcyB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0ZlZGVyYXRlZFNvdXJjZXMnO1xuaW1wb3J0IHsgUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcyB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzJztcbmltcG9ydCB7IFJ1bGVIZWFsdGggfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZUhlYWx0aCc7XG5pbXBvcnQgeyBSdWxlU3RhdGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZVN0YXRlJztcbmltcG9ydCB7IHVzZUFsZXJ0UXVlcmllc1N0YXR1cyB9IGZyb20gJy4vaG9va3MvdXNlQWxlcnRRdWVyaWVzU3RhdHVzJztcbmltcG9ydCB7IHVzZUNvbWJpbmVkUnVsZSB9IGZyb20gJy4vaG9va3MvdXNlQ29tYmluZWRSdWxlJztcbmltcG9ydCB7IEFsZXJ0aW5nUXVlcnlSdW5uZXIgfSBmcm9tICcuL3N0YXRlL0FsZXJ0aW5nUXVlcnlSdW5uZXInO1xuaW1wb3J0IHsgZ2V0UnVsZXNTb3VyY2VCeU5hbWUgfSBmcm9tICcuL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgYWxlcnRSdWxlVG9RdWVyaWVzIH0gZnJvbSAnLi91dGlscy9xdWVyeSc7XG5pbXBvcnQgKiBhcyBydWxlSWQgZnJvbSAnLi91dGlscy9ydWxlLWlkJztcbmltcG9ydCB7IGlzRmVkZXJhdGVkUnVsZUdyb3VwIH0gZnJvbSAnLi91dGlscy9ydWxlcyc7XG5cbnR5cGUgUnVsZVZpZXdlclByb3BzID0gR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZD86IHN0cmluZzsgc291cmNlTmFtZT86IHN0cmluZyB9PjtcblxuY29uc3QgZXJyb3JNZXNzYWdlID0gJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlIGZvciBydWxlJztcbmNvbnN0IGVycm9yVGl0bGUgPSAnQ291bGQgbm90IHZpZXcgcnVsZSc7XG5jb25zdCBwYWdlVGl0bGUgPSAnQWxlcnRpbmcgLyBWaWV3IHJ1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZVZpZXdlcih7IG1hdGNoIH06IFJ1bGVWaWV3ZXJQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgaWQsIHNvdXJjZU5hbWUgfSA9IG1hdGNoLnBhcmFtcztcbiAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC50cnlQYXJzZShpZCwgdHJ1ZSk7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIHJlc3VsdDogcnVsZSB9ID0gdXNlQ29tYmluZWRSdWxlKGlkZW50aWZpZXIsIHNvdXJjZU5hbWUpO1xuICBjb25zdCBydW5uZXIgPSB1c2VNZW1vKCgpID0+IG5ldyBBbGVydGluZ1F1ZXJ5UnVubmVyKCksIFtdKTtcbiAgY29uc3QgZGF0YSA9IHVzZU9ic2VydmFibGUocnVubmVyLmdldCgpKTtcbiAgY29uc3QgcXVlcmllczIgPSB1c2VNZW1vKCgpID0+IGFsZXJ0UnVsZVRvUXVlcmllcyhydWxlKSwgW3J1bGVdKTtcbiAgY29uc3QgW3F1ZXJpZXMsIHNldFF1ZXJpZXNdID0gdXNlU3RhdGU8QWxlcnRRdWVyeVtdPihbXSk7XG5cbiAgY29uc3QgeyBhbGxEYXRhU291cmNlc0F2YWlsYWJsZSB9ID0gdXNlQWxlcnRRdWVyaWVzU3RhdHVzKHF1ZXJpZXMyKTtcblxuICBjb25zdCBvblJ1blF1ZXJpZXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHF1ZXJpZXMubGVuZ3RoID4gMCAmJiBhbGxEYXRhU291cmNlc0F2YWlsYWJsZSkge1xuICAgICAgcnVubmVyLnJ1bihxdWVyaWVzKTtcbiAgICB9XG4gIH0sIFtxdWVyaWVzLCBydW5uZXIsIGFsbERhdGFTb3VyY2VzQXZhaWxhYmxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRRdWVyaWVzKHF1ZXJpZXMyKTtcbiAgfSwgW3F1ZXJpZXMyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUpIHtcbiAgICAgIG9uUnVuUXVlcmllcygpO1xuICAgIH1cbiAgfSwgW29uUnVuUXVlcmllcywgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBydW5uZXIuZGVzdHJveSgpO1xuICB9LCBbcnVubmVyXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VRdWVyeSA9IHVzZUNhbGxiYWNrKChxdWVyeTogQWxlcnRRdWVyeSkgPT4ge1xuICAgIHNldFF1ZXJpZXMoKHF1ZXJpZXMpID0+XG4gICAgICBxdWVyaWVzLm1hcCgocSkgPT4ge1xuICAgICAgICBpZiAocS5yZWZJZCA9PT0gcXVlcnkucmVmSWQpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHE7XG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtdKTtcblxuICBpZiAoIXNvdXJjZU5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJ1bGVWaWV3ZXJMYXlvdXQgdGl0bGU9e3BhZ2VUaXRsZX0+XG4gICAgICAgIDxBbGVydCB0aXRsZT17ZXJyb3JUaXRsZX0+XG4gICAgICAgICAgPGRldGFpbHMgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3JNZXNzYWdlfTwvZGV0YWlscz5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgcnVsZXNTb3VyY2UgPSBnZXRSdWxlc1NvdXJjZUJ5TmFtZShzb3VyY2VOYW1lKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8UnVsZVZpZXdlckxheW91dCB0aXRsZT17cGFnZVRpdGxlfT5cbiAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBydWxlLi4uXCIgLz5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKGVycm9yIHx8ICFydWxlc1NvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8UnVsZVZpZXdlckxheW91dCB0aXRsZT17cGFnZVRpdGxlfT5cbiAgICAgICAgPEFsZXJ0IHRpdGxlPXtlcnJvclRpdGxlfT5cbiAgICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgICAge2Vycm9yPy5tZXNzYWdlID8/IGVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgeyEhZXJyb3I/LnN0YWNrICYmIGVycm9yLnN0YWNrfVxuICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgICA8c3Bhbj5SdWxlIGNvdWxkIG5vdCBiZSBmb3VuZC48L3NwYW4+XG4gICAgICA8L1J1bGVWaWV3ZXJMYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGFubm90YXRpb25zID0gT2JqZWN0LmVudHJpZXMocnVsZS5hbm5vdGF0aW9ucykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiAhIXZhbHVlLnRyaW0oKSk7XG4gIGNvbnN0IGlzRmVkZXJhdGVkUnVsZSA9IGlzRmVkZXJhdGVkUnVsZUdyb3VwKHJ1bGUuZ3JvdXApO1xuXG4gIHJldHVybiAoXG4gICAgPFJ1bGVWaWV3ZXJMYXlvdXQgd3JhcEluQ29udGVudD17ZmFsc2V9IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAge2lzRmVkZXJhdGVkUnVsZSAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIlRoaXMgcnVsZSBpcyBwYXJ0IG9mIGEgZmVkZXJhdGVkIHJ1bGUgZ3JvdXAuXCI+XG4gICAgICAgICAgPFZlcnRpY2FsR3JvdXA+XG4gICAgICAgICAgICBGZWRlcmF0ZWQgcnVsZSBncm91cHMgYXJlIGN1cnJlbnRseSBhbiBleHBlcmltZW50YWwgZmVhdHVyZS5cbiAgICAgICAgICAgIDxCdXR0b24gZmlsbD1cInRleHRcIiBpY29uPVwiYm9va1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL21ldHJpY3MtZW50ZXJwcmlzZS9sYXRlc3QvdGVuYW50LW1hbmFnZW1lbnQvdGVuYW50LWZlZGVyYXRpb24vI2Nyb3NzLXRlbmFudC1hbGVydGluZy1hbmQtcmVjb3JkaW5nLXJ1bGUtZmVkZXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIFJlYWQgZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAgPFJ1bGVWaWV3ZXJMYXlvdXRDb250ZW50PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoND5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJiZWxsXCIgc2l6ZT1cImxnXCIgLz4ge3J1bGUubmFtZX1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDxSdWxlU3RhdGUgcnVsZT17cnVsZX0gaXNDcmVhdGluZz17ZmFsc2V9IGlzRGVsZXRpbmc9e2ZhbHNlfSAvPlxuICAgICAgICAgIDxSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMgcnVsZT17cnVsZX0gcnVsZXNTb3VyY2U9e3J1bGVzU291cmNlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRTaWRlfT5cbiAgICAgICAgICAgIHtydWxlLnByb21SdWxlICYmIChcbiAgICAgICAgICAgICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIkhlYWx0aFwiIGhvcml6b250YWw9e3RydWV9PlxuICAgICAgICAgICAgICAgIDxSdWxlSGVhbHRoIHJ1bGU9e3J1bGUucHJvbVJ1bGV9IC8+XG4gICAgICAgICAgICAgIDwvRGV0YWlsc0ZpZWxkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshIXJ1bGUubGFiZWxzICYmICEhT2JqZWN0LmtleXMocnVsZS5sYWJlbHMpLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJMYWJlbHNcIiBob3Jpem9udGFsPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8QWxlcnRMYWJlbHMgbGFiZWxzPXtydWxlLmxhYmVsc30gLz5cbiAgICAgICAgICAgICAgPC9EZXRhaWxzRmllbGQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFJ1bGVEZXRhaWxzRXhwcmVzc2lvbiBydWxlc1NvdXJjZT17cnVsZXNTb3VyY2V9IHJ1bGU9e3J1bGV9IGFubm90YXRpb25zPXthbm5vdGF0aW9uc30gLz5cbiAgICAgICAgICAgIDxSdWxlRGV0YWlsc0Fubm90YXRpb25zIGFubm90YXRpb25zPXthbm5vdGF0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0U2lkZX0+XG4gICAgICAgICAgICA8UnVsZURldGFpbHNEYXRhU291cmNlcyBydWxlPXtydWxlfSBydWxlc1NvdXJjZT17cnVsZXNTb3VyY2V9IC8+XG4gICAgICAgICAgICB7aXNGZWRlcmF0ZWRSdWxlICYmIDxSdWxlRGV0YWlsc0ZlZGVyYXRlZFNvdXJjZXMgZ3JvdXA9e3J1bGUuZ3JvdXB9IC8+fVxuICAgICAgICAgICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIk5hbWVzcGFjZSAvIEdyb3VwXCI+e2Ake3J1bGUubmFtZXNwYWNlLm5hbWV9IC8gJHtydWxlLmdyb3VwLm5hbWV9YH08L0RldGFpbHNGaWVsZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFJ1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMgcHJvbVJ1bGU9e3J1bGUucHJvbVJ1bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SdWxlVmlld2VyTGF5b3V0Q29udGVudD5cbiAgICAgIHshaXNGZWRlcmF0ZWRSdWxlICYmIGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVyaWVzVGl0bGV9PlxuICAgICAgICAgICAgUXVlcnkgcmVzdWx0cyA8UGFuZWxDaHJvbWVMb2FkaW5nSW5kaWNhdG9yIGxvYWRpbmc9e2lzTG9hZGluZyhkYXRhKX0gb25DYW5jZWw9eygpID0+IHJ1bm5lci5jYW5jZWwoKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UnVsZVZpZXdlckxheW91dENvbnRlbnQgcGFkZGluZz17MH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXJpZXN9PlxuICAgICAgICAgICAgICB7cXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtxdWVyeS5yZWZJZH0gY2xhc3NOYW1lPXtzdHlsZXMucXVlcnl9PlxuICAgICAgICAgICAgICAgICAgICA8UnVsZVZpZXdlclZpc3VhbGl6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YSAmJiBkYXRhW3F1ZXJ5LnJlZklkXX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVF1ZXJ5PXtvbkNoYW5nZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1J1bGVWaWV3ZXJMYXlvdXRDb250ZW50PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IWlzRmVkZXJhdGVkUnVsZSAmJiAhYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgJiYgKFxuICAgICAgICA8QWxlcnQgdGl0bGU9XCJRdWVyeSBub3QgYXZhaWxhYmxlXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCIgY2xhc3NOYW1lPXtzdHlsZXMucXVlcnlXYXJuaW5nfT5cbiAgICAgICAgICBDYW5ub3QgZGlzcGxheSB0aGUgcXVlcnkgcHJldmlldy4gU29tZSBvZiB0aGUgZGF0YSBzb3VyY2VzIHVzZWQgaW4gdGhlIHF1ZXJpZXMgYXJlIG5vdCBhdmFpbGFibGUuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNMb2FkaW5nKGRhdGE6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4pOiBib29sZWFuIHtcbiAgcmV0dXJuICEhT2JqZWN0LnZhbHVlcyhkYXRhKS5maW5kKChkKSA9PiBkLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGVycm9yTWVzc2FnZTogY3NzYFxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGAsXG4gICAgcXVlcmllczogY3NzYFxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBxdWVyaWVzVGl0bGU6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyLCAwLjUpfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5Lmg1LmZvbnRTaXplfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGR9O1xuICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUudHlwb2dyYXBoeS5oNS5mb250RmFtaWx5fTtcbiAgICBgLFxuICAgIHF1ZXJ5OiBjc3NgXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gICAgcXVlcnlXYXJuaW5nOiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0LCAwKX07XG4gICAgYCxcbiAgICBkZXRhaWxzOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBgLFxuICAgIGxlZnRTaWRlOiBjc3NgXG4gICAgICBmbGV4OiAxO1xuICAgIGAsXG4gICAgcmlnaHRTaWRlOiBjc3NgXG4gICAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgYCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcnJvckJvdW5kYXJ5KFJ1bGVWaWV3ZXIsIHsgc3R5bGU6ICdwYWdlJyB9KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxudHlwZSBQcm9wcyA9IHtcbiAgYWN0aW9uczogQWNjZXNzQ29udHJvbEFjdGlvbltdO1xuICBmYWxsYmFjaz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgQXV0aG9yaXplOiBGQzxQcm9wcz4gPSAoeyBhY3Rpb25zLCBjaGlsZHJlbiwgZmFsbGJhY2sgPSB0cnVlIH0pID0+IHtcbiAgaWYgKGFjdGlvbnMuc29tZSgoYWN0aW9uKSA9PiBjb250ZXh0U3J2Lmhhc0FjY2VzcyhhY3Rpb24sIGZhbGxiYWNrKSkpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQGdyYWZhbmEvc2xhdGUtcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb21xbFN5bnRheCBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvcHJvbXFsJztcbmltcG9ydCBMb2dxbFN5bnRheCBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvc3ludGF4JztcbmltcG9ydCB7IExhbmd1YWdlTWFwLCBsYW5ndWFnZXMgYXMgcHJpc21MYW5ndWFnZXMgfSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCB7IG1ha2VWYWx1ZSwgU2xhdGVQcmlzbSwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVR5cGUsIGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgV2VsbCB9IGZyb20gJy4vV2VsbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0ZWRRdWVyeTogRkM8eyBsYW5ndWFnZTogJ3Byb21xbCcgfCAnbG9ncWwnOyBleHByOiBzdHJpbmcgfT4gPSAoeyBsYW5ndWFnZSwgZXhwciB9KSA9PiB7XG4gIGNvbnN0IHBsdWdpbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIFNsYXRlUHJpc20oXG4gICAgICAgIHtcbiAgICAgICAgICBvbmx5SW46IChub2RlOiBhbnkpID0+IG5vZGUudHlwZSA9PT0gJ2NvZGVfYmxvY2snLFxuICAgICAgICAgIGdldFN5bnRheDogKCkgPT4gbGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICAgIHsgLi4uKHByaXNtTGFuZ3VhZ2VzIGFzIExhbmd1YWdlTWFwKSwgW2xhbmd1YWdlXTogbGFuZ3VhZ2UgPT09ICdsb2dxbCcgPyBMb2dxbFN5bnRheCA6IFByb21xbFN5bnRheCB9XG4gICAgICApLFxuICAgIF0sXG4gICAgW2xhbmd1YWdlXVxuICApO1xuXG4gIGNvbnN0IHNsYXRlVmFsdWUgPSB1c2VNZW1vKCgpID0+IG1ha2VWYWx1ZShleHByKSwgW2V4cHJdKTtcblxuICByZXR1cm4gPEVkaXRvciBwbHVnaW5zPXtwbHVnaW5zfSB2YWx1ZT17c2xhdGVWYWx1ZX0gcmVhZE9ubHk9e3RydWV9IC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IEV4cHJlc3Npb246IEZDPFByb3BzPiA9ICh7IGV4cHJlc3Npb246IHF1ZXJ5LCBydWxlc1NvdXJjZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPFdlbGwgY2xhc3NOYW1lPXtjeChzdHlsZXMud2VsbCwgJ3NsYXRlLXF1ZXJ5LWZpZWxkJyl9PlxuICAgICAge2lzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgPyAoXG4gICAgICAgIDxIaWdobGlnaHRlZFF1ZXJ5IGV4cHI9e3F1ZXJ5fSBsYW5ndWFnZT17cnVsZXNTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGUuTG9raSA/ICdsb2dxbCcgOiAncHJvbXFsJ30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIHF1ZXJ5XG4gICAgICApfVxuICAgIDwvV2VsbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgd2VsbDogY3NzYFxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5tb25vc3BhY2V9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUmFkaW9CdXR0b25Hcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU1RBVCwgVEFCTEUsIFRJTUVTRVJJRVMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgdHlwZSBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMgPSAndGltZXNlcmllcycgfCAndGFibGUnIHwgJ3N0YXQnO1xuXG50eXBlIFByb3BzID0ge1xuICB2YWx1ZTogU3VwcG9ydGVkUGFuZWxQbHVnaW5zO1xuICBvbkNoYW5nZTogKHZhbHVlOiBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMpID0+IHZvaWQ7XG4gIHNpemU/OiAnc20nIHwgJ21kJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQYW5lbFBsdWdpbnNCdXR0b25Hcm91cChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgc2l6ZSA9ICdtZCcgfSA9IHByb3BzO1xuICBjb25zdCBwYW5lbHMgPSB1c2VNZW1vKCgpID0+IGdldFN1cHBvcnRlZFBhbmVscygpLCBbXSk7XG5cbiAgcmV0dXJuIDxSYWRpb0J1dHRvbkdyb3VwIG9wdGlvbnM9e3BhbmVsc30gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHNpemU9e3NpemV9IC8+O1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0ZWRQYW5lbHMoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFN1cHBvcnRlZFBhbmVsUGx1Z2lucz4+IHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY29uZmlnLnBhbmVscykucmVkdWNlKChwYW5lbHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxTdXBwb3J0ZWRQYW5lbFBsdWdpbnM+PiwgcGFuZWwpID0+IHtcbiAgICBpZiAoaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbihwYW5lbC5pZCkpIHtcbiAgICAgIHBhbmVscy5wdXNoKHtcbiAgICAgICAgdmFsdWU6IHBhbmVsLmlkLFxuICAgICAgICBsYWJlbDogcGFuZWwubmFtZSxcbiAgICAgICAgaW1nVXJsOiBwYW5lbC5pbmZvLmxvZ29zLnNtYWxsLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYW5lbHM7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbihpZDogc3RyaW5nKTogaWQgaXMgU3VwcG9ydGVkUGFuZWxQbHVnaW5zIHtcbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgVElNRVNFUklFUzpcbiAgICBjYXNlIFRBQkxFOlxuICAgIGNhc2UgU1RBVDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYWJlbCwgVG9vbHRpcCwgSW5wdXQsIEljb24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHF1ZXJ5U3RyaW5nPzogc3RyaW5nO1xuICBkZWZhdWx0UXVlcnlTdHJpbmc/OiBzdHJpbmc7XG4gIG9uRmlsdGVyQ2hhbmdlOiAoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNYXRjaGVyRmlsdGVyID0gKHsgY2xhc3NOYW1lLCBvbkZpbHRlckNoYW5nZSwgZGVmYXVsdFF1ZXJ5U3RyaW5nLCBxdWVyeVN0cmluZyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIG9uRmlsdGVyQ2hhbmdlKHRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHNlYXJjaEljb24gPSA8SWNvbiBuYW1lPXsnc2VhcmNoJ30gLz47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGFiZWw+XG4gICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgPHNwYW4+U2VhcmNoIGJ5IGxhYmVsPC9zcGFuPlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBGaWx0ZXIgYWxlcnRzIHVzaW5nIGxhYmVsIHF1ZXJ5aW5nLCBleDpcbiAgICAgICAgICAgICAgICA8cHJlPntge3NldmVyaXR5PVwiY3JpdGljYWxcIiwgaW5zdGFuY2U9flwiY2x1c3Rlci11cy0uK1wifWB9PC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IG5hbWU9XCJpbmZvLWNpcmNsZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFF1ZXJ5U3RyaW5nfVxuICAgICAgICB2YWx1ZT17cXVlcnlTdHJpbmd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoLXF1ZXJ5LWlucHV0XCJcbiAgICAgICAgcHJlZml4PXtzZWFyY2hJY29ufVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdpZHRofVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgaWNvbjogY3NzYFxuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICBgLFxuICBpbnB1dFdpZHRoOiBjc3NgXG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFBhZ2VUb29sYmFyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB8IFJlYWN0LlJlYWN0Tm9kZVtdO1xuICB0aXRsZTogc3RyaW5nO1xuICB3cmFwSW5Db250ZW50PzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlVmlld2VyTGF5b3V0KHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgd3JhcEluQ29udGVudCA9IHRydWUsIGNoaWxkcmVuLCB0aXRsZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0UGFnZVN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxQYWdlVG9vbGJhciB0aXRsZT17dGl0bGV9IHBhZ2VJY29uPVwiYmVsbFwiIG9uR29CYWNrPXsoKSA9PiBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2FsZXJ0aW5nL2xpc3QnKX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e3dyYXBJbkNvbnRlbnQgPyA8UnVsZVZpZXdlckxheW91dENvbnRlbnQgey4uLnByb3BzfSAvPiA6IGNoaWxkcmVufTwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxudHlwZSBDb250ZW50UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCBSZWFjdC5SZWFjdE5vZGVbXTtcbiAgcGFkZGluZz86IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlVmlld2VyTGF5b3V0Q29udGVudCh7IGNoaWxkcmVuLCBwYWRkaW5nID0gMiB9OiBDb250ZW50UHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldENvbnRlbnRTdHlsZXMocGFkZGluZykpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT57Y2hpbGRyZW59PC9kaXY+O1xufVxuXG5jb25zdCBnZXRQYWdlU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGVudDogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMCwgMiwgMil9O1xuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54eGx9cHg7XG4gICAgYCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENvbnRlbnRTdHlsZXMgPSAocGFkZGluZzogbnVtYmVyKSA9PiAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwcGVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnByaW1hcnl9O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLndlYWt9O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcocGFkZGluZyl9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgRGF0ZVRpbWUsIGRhdGVUaW1lLCBHcmFmYW5hVGhlbWUyLCBQYW5lbERhdGEsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZ2V0RGF0YVNvdXJjZVNydiwgUGFuZWxSZW5kZXJlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQWxlcnQsIENvZGVFZGl0b3IsIERhdGVUaW1lUGlja2VyLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBpc0V4cHJlc3Npb25RdWVyeSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9ndWFyZHMnO1xuaW1wb3J0IHsgUGFuZWxPcHRpb25zIH0gZnJvbSAnYXBwL3BsdWdpbnMvcGFuZWwvdGFibGUvbW9kZWxzLmdlbic7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgeyBQYW5lbFBsdWdpbnNCdXR0b25Hcm91cCwgU3VwcG9ydGVkUGFuZWxQbHVnaW5zIH0gZnJvbSAnLi4vUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAnO1xuaW1wb3J0IHsgVEFCTEUsIFRJTUVTRVJJRVMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vQXV0aG9yaXplJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG50eXBlIFJ1bGVWaWV3ZXJWaXN1YWxpemF0aW9uUHJvcHMgPSB7XG4gIGRhdGE/OiBQYW5lbERhdGE7XG4gIHF1ZXJ5OiBBbGVydFF1ZXJ5O1xuICBvbkNoYW5nZVF1ZXJ5OiAocXVlcnk6IEFsZXJ0UXVlcnkpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBoZWFkZXJIZWlnaHQgPSA0O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZVZpZXdlclZpc3VhbGl6YXRpb24ocHJvcHM6IFJ1bGVWaWV3ZXJWaXN1YWxpemF0aW9uUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgZGF0YSwgcXVlcnksIG9uQ2hhbmdlUXVlcnkgfSA9IHByb3BzO1xuICBjb25zdCBkZWZhdWx0UGFuZWwgPSBpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkgPyBUQUJMRSA6IFRJTUVTRVJJRVM7XG4gIGNvbnN0IFtwYW5lbCwgc2V0UGFuZWxdID0gdXNlU3RhdGU8U3VwcG9ydGVkUGFuZWxQbHVnaW5zPihkZWZhdWx0UGFuZWwpO1xuICBjb25zdCBkc1NldHRpbmdzID0gZ2V0RGF0YVNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MocXVlcnkuZGF0YXNvdXJjZVVpZCk7XG4gIGNvbnN0IHJlbGF0aXZlVGltZVJhbmdlID0gcXVlcnkucmVsYXRpdmVUaW1lUmFuZ2U7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlPFBhbmVsT3B0aW9ucz4oe1xuICAgIGZyYW1lSW5kZXg6IDAsXG4gICAgc2hvd0hlYWRlcjogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3Qgb25UaW1lQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKG5ld0RhdGVUaW1lOiBEYXRlVGltZSkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gZGF0ZVRpbWUoKS51bml4KCkgLSBuZXdEYXRlVGltZS51bml4KCk7XG5cbiAgICAgIGlmIChyZWxhdGl2ZVRpbWVSYW5nZSkge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHJlbGF0aXZlVGltZVJhbmdlLmZyb20gLSByZWxhdGl2ZVRpbWVSYW5nZS50bztcbiAgICAgICAgb25DaGFuZ2VRdWVyeSh7XG4gICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgcmVsYXRpdmVUaW1lUmFuZ2U6IHsgZnJvbTogbm93ICsgaW50ZXJ2YWwsIHRvOiBub3cgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25DaGFuZ2VRdWVyeSwgcXVlcnksIHJlbGF0aXZlVGltZVJhbmdlXVxuICApO1xuXG4gIGNvbnN0IHNldERhdGVUaW1lID0gdXNlQ2FsbGJhY2soKHJlbGF0aXZlVGltZVJhbmdlVG86IG51bWJlcikgPT4ge1xuICAgIHJldHVybiByZWxhdGl2ZVRpbWVSYW5nZVRvID09PSAwID8gZGF0ZVRpbWUoKSA6IGRhdGVUaW1lKCkuc3VidHJhY3QocmVsYXRpdmVUaW1lUmFuZ2VUbywgJ3NlY29uZHMnKTtcbiAgfSwgW10pO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCFkc1NldHRpbmdzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxBbGVydCB0aXRsZT1cIkNvdWxkIG5vdCBmaW5kIGRhdGFzb3VyY2UgZm9yIHF1ZXJ5XCIgLz5cbiAgICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjI1MHB4XCJcbiAgICAgICAgICBsYW5ndWFnZT1cImpzb25cIlxuICAgICAgICAgIHNob3dMaW5lTnVtYmVycz17ZmFsc2V9XG4gICAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeShxdWVyeSwgbnVsbCwgJ1xcdCcpfVxuICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgIDxBdXRvU2l6ZXI+XG4gICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHtgUXVlcnkgJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0YVNvdXJjZX0+KHtkc1NldHRpbmdzLm5hbWV9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgeyFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkgJiYgcmVsYXRpdmVUaW1lUmFuZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlVGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3NldERhdGVUaW1lKHJlbGF0aXZlVGltZVJhbmdlLnRvKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25UaW1lQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIG1heERhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDxQYW5lbFBsdWdpbnNCdXR0b25Hcm91cCBvbkNoYW5nZT17c2V0UGFuZWx9IHZhbHVlPXtwYW5lbH0gc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W0FjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNFeHBsb3JlXX0+XG4gICAgICAgICAgICAgICAgICAgIHshaXNFeHByZXNzaW9uUXVlcnkocXVlcnkubW9kZWwpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjb21wYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Y3JlYXRlRXhwbG9yZUxpbmsoZHNTZXR0aW5ncywgcXVlcnkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IGluIEV4cGxvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFBhbmVsUmVuZGVyZXJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIHRoZW1lLnNwYWNpbmcuZ3JpZFNpemUgKiBoZWFkZXJIZWlnaHR9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgcGx1Z2luSWQ9e3BhbmVsfVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICBvbk9wdGlvbnNDaGFuZ2U9e3NldE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0F1dG9TaXplcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXhwbG9yZUxpbmsoc2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBxdWVyeTogQWxlcnRRdWVyeSk6IHN0cmluZyB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gc2V0dGluZ3M7XG4gIGNvbnN0IHsgcmVmSWQsIC4uLnJlc3QgfSA9IHF1ZXJ5Lm1vZGVsO1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IHsgLi4ucmVzdCwgZGF0YXNvdXJjZTogbmFtZSB9O1xuXG4gIHJldHVybiB1cmxVdGlsLnJlbmRlclVybChgJHtjb25maWcuYXBwU3ViVXJsfS9leHBsb3JlYCwge1xuICAgIGxlZnQ6IEpTT04uc3RyaW5naWZ5KFsnbm93LTFoJywgJ25vdycsIG5hbWUsIHF1ZXJ5UGFyYW1zXSksXG4gIH0pO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgYCxcbiAgICBoZWFkZXI6IGNzc2BcbiAgICAgIGhlaWdodDogJHt0aGVtZS5zcGFjaW5nKGhlYWRlckhlaWdodCl9O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGAsXG4gICAgcmVmSWQ6IGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5saW5rfTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYCxcbiAgICBkYXRhU291cmNlOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgYCxcbiAgICBhY3Rpb25zOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICAgIHNwYWNpbmc6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLCAxLCAwLCAwKX07XG4gICAgYCxcbiAgICBlcnJvck1lc3NhZ2U6IGNzc2BcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSYWRpb0J1dHRvbkdyb3VwLCBMYWJlbCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFBbGVydFN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzdGF0ZUZpbHRlcj86IEdyYWZhbmFBbGVydFN0YXRlO1xuICBvblN0YXRlRmlsdGVyQ2hhbmdlOiAodmFsdWU6IEdyYWZhbmFBbGVydFN0YXRlIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyID0gKHsgY2xhc3NOYW1lLCBvblN0YXRlRmlsdGVyQ2hhbmdlLCBzdGF0ZUZpbHRlciB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdGF0ZU9wdGlvbnMgPSBPYmplY3QudmFsdWVzKEdyYWZhbmFBbGVydFN0YXRlKS5tYXAoKHZhbHVlKSA9PiAoe1xuICAgIGxhYmVsOiB2YWx1ZSxcbiAgICB2YWx1ZSxcbiAgfSkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGFiZWw+U3RhdGU8L0xhYmVsPlxuICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcbiAgICAgICAgb3B0aW9ucz17c3RhdGVPcHRpb25zfVxuICAgICAgICB2YWx1ZT17c3RhdGVGaWx0ZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtvblN0YXRlRmlsdGVyQ2hhbmdlfVxuICAgICAgICBvbkNsaWNrPXsodikgPT4ge1xuICAgICAgICAgIGlmICh2ID09PSBzdGF0ZUZpbHRlcikge1xuICAgICAgICAgICAgb25TdGF0ZUZpbHRlckNoYW5nZSh1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBDbGlwYm9hcmRCdXR0b24sIENvbmZpcm1Nb2RhbCwgSG9yaXpvbnRhbEdyb3VwLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlQXBwTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBSdWxlc1NvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFJ1bGVyR3JhZmFuYVJ1bGVEVE8sIFJ1bGVyUnVsZURUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUlzUnVsZUVkaXRhYmxlIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNSdWxlRWRpdGFibGUnO1xuaW1wb3J0IHsgdXNlU3RhdGVIaXN0b3J5TW9kYWwgfSBmcm9tICcuLi8uLi9ob29rcy91c2VTdGF0ZUhpc3RvcnlNb2RhbCc7XG5pbXBvcnQgeyBkZWxldGVSdWxlQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRBbGVydG1hbmFnZXJCeVVpZCB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBBbm5vdGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldFJ1bGVzU291cmNlTmFtZSwgaXNDbG91ZFJ1bGVzU291cmNlLCBpc0dyYWZhbmFSdWxlc1NvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgY3JlYXRlRXhwbG9yZUxpbmssIGNyZWF0ZVZpZXdMaW5rLCBtYWtlUnVsZUJhc2VkU2lsZW5jZUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCAqIGFzIHJ1bGVJZCBmcm9tICcuLi8uLi91dGlscy9ydWxlLWlkJztcbmltcG9ydCB7IGlzRmVkZXJhdGVkUnVsZUdyb3VwIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG4gIHJ1bGVzU291cmNlOiBSdWxlc1NvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVEZXRhaWxzQWN0aW9uQnV0dG9uczogRkM8UHJvcHM+ID0gKHsgcnVsZSwgcnVsZXNTb3VyY2UgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IHN0eWxlID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCB7IG5hbWVzcGFjZSwgZ3JvdXAsIHJ1bGVyUnVsZSB9ID0gcnVsZTtcbiAgY29uc3QgW3J1bGVUb0RlbGV0ZSwgc2V0UnVsZVRvRGVsZXRlXSA9IHVzZVN0YXRlPENvbWJpbmVkUnVsZT4oKTtcbiAgY29uc3QgYWxlcnRJZCA9IGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlLnJ1bGVyUnVsZSkgPyBydWxlLnJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0LmlkID8/ICcnIDogJyc7XG4gIGNvbnN0IHsgU3RhdGVIaXN0b3J5TW9kYWwsIHNob3dTdGF0ZUhpc3RvcnlNb2RhbCB9ID0gdXNlU3RhdGVIaXN0b3J5TW9kYWwoYWxlcnRJZCk7XG5cbiAgY29uc3QgYWxlcnRtYW5hZ2VyU291cmNlTmFtZSA9IGlzR3JhZmFuYVJ1bGVzU291cmNlKHJ1bGVzU291cmNlKVxuICAgID8gcnVsZXNTb3VyY2VcbiAgICA6IGdldEFsZXJ0bWFuYWdlckJ5VWlkKHJ1bGVzU291cmNlLmpzb25EYXRhLmFsZXJ0bWFuYWdlclVpZCk/Lm5hbWU7XG4gIGNvbnN0IHJ1bGVzU291cmNlTmFtZSA9IGdldFJ1bGVzU291cmNlTmFtZShydWxlc1NvdXJjZSk7XG5cbiAgY29uc3QgaGFzRXhwbG9yZVBlcm1pc3Npb24gPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc0V4cGxvcmUpO1xuXG4gIGNvbnN0IGxlZnRCdXR0b25zOiBKU1guRWxlbWVudFtdID0gW107XG4gIGNvbnN0IHJpZ2h0QnV0dG9uczogSlNYLkVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0IGlzRmVkZXJhdGVkID0gaXNGZWRlcmF0ZWRSdWxlR3JvdXAoZ3JvdXApO1xuICBjb25zdCB7IGlzRWRpdGFibGUsIGlzUmVtb3ZhYmxlIH0gPSB1c2VJc1J1bGVFZGl0YWJsZShydWxlc1NvdXJjZU5hbWUsIHJ1bGVyUnVsZSk7XG4gIGNvbnN0IHJldHVyblRvID0gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2g7XG4gIGNvbnN0IGlzVmlld01vZGUgPSBpblZpZXdNb2RlKGxvY2F0aW9uLnBhdGhuYW1lKTtcblxuICBjb25zdCBkZWxldGVSdWxlID0gKCkgPT4ge1xuICAgIGlmIChydWxlVG9EZWxldGUgJiYgcnVsZVRvRGVsZXRlLnJ1bGVyUnVsZSkge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC5mcm9tUnVsZXJSdWxlKFxuICAgICAgICBnZXRSdWxlc1NvdXJjZU5hbWUocnVsZVRvRGVsZXRlLm5hbWVzcGFjZS5ydWxlc1NvdXJjZSksXG4gICAgICAgIHJ1bGVUb0RlbGV0ZS5uYW1lc3BhY2UubmFtZSxcbiAgICAgICAgcnVsZVRvRGVsZXRlLmdyb3VwLm5hbWUsXG4gICAgICAgIHJ1bGVUb0RlbGV0ZS5ydWxlclJ1bGVcbiAgICAgICk7XG5cbiAgICAgIGRpc3BhdGNoKGRlbGV0ZVJ1bGVBY3Rpb24oaWRlbnRpZmllciwgeyBuYXZpZ2F0ZVRvOiBpc1ZpZXdNb2RlID8gJy9hbGVydGluZy9saXN0JyA6IHVuZGVmaW5lZCB9KSk7XG4gICAgICBzZXRSdWxlVG9EZWxldGUodW5kZWZpbmVkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnVpbGRTaGFyZVVybCA9ICgpID0+IHtcbiAgICBpZiAoaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgICAgY29uc3QgeyBhcHBVcmwsIGFwcFN1YlVybCB9ID0gY29uZmlnO1xuICAgICAgY29uc3QgYmFzZVVybCA9IGFwcFN1YlVybCAhPT0gJycgPyBgJHthcHBVcmx9JHthcHBTdWJVcmx9L2AgOiBjb25maWcuYXBwVXJsO1xuICAgICAgY29uc3QgcnVsZVVybCA9IGAke2VuY29kZVVSSUNvbXBvbmVudChydWxlc1NvdXJjZS5uYW1lKX0vJHtlbmNvZGVVUklDb21wb25lbnQocnVsZS5uYW1lKX1gO1xuICAgICAgcmV0dXJuIGAke2Jhc2VVcmx9YWxlcnRpbmcvJHtydWxlVXJsfS9maW5kYDtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgfTtcblxuICAvLyBleHBsb3JlIGRvZXMgbm90IHN1cHBvcnQgZ3JhZmFuYSBydWxlIHF1ZXJpZXMgYXRtXG4gIC8vIG5laXRoZXIgZG8gXCJmZWRlcmF0ZWQgcnVsZXNcIlxuICBpZiAoaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSAmJiBoYXNFeHBsb3JlUGVybWlzc2lvbiAmJiAhaXNGZWRlcmF0ZWQpIHtcbiAgICBsZWZ0QnV0dG9ucy5wdXNoKFxuICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGtleT1cImV4cGxvcmVcIlxuICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgIGljb249XCJjaGFydC1saW5lXCJcbiAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgIGhyZWY9e2NyZWF0ZUV4cGxvcmVMaW5rKHJ1bGVzU291cmNlLm5hbWUsIHJ1bGUucXVlcnkpfVxuICAgICAgPlxuICAgICAgICBTZWUgZ3JhcGhcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG4gIGlmIChydWxlLmFubm90YXRpb25zW0Fubm90YXRpb24ucnVuYm9va1VSTF0pIHtcbiAgICBsZWZ0QnV0dG9ucy5wdXNoKFxuICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGtleT1cInJ1bmJvb2tcIlxuICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgIGljb249XCJib29rXCJcbiAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgIGhyZWY9e3J1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5ydW5ib29rVVJMXX1cbiAgICAgID5cbiAgICAgICAgVmlldyBydW5ib29rXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuICBpZiAocnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLmRhc2hib2FyZFVJRF0pIHtcbiAgICBjb25zdCBkYXNoYm9hcmRVSUQgPSBydWxlLmFubm90YXRpb25zW0Fubm90YXRpb24uZGFzaGJvYXJkVUlEXTtcbiAgICBpZiAoZGFzaGJvYXJkVUlEKSB7XG4gICAgICBsZWZ0QnV0dG9ucy5wdXNoKFxuICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAga2V5PVwiZGFzaGJvYXJkXCJcbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgaWNvbj1cImFwcHNcIlxuICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgIGhyZWY9e2BkLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhc2hib2FyZFVJRCl9YH1cbiAgICAgICAgPlxuICAgICAgICAgIEdvIHRvIGRhc2hib2FyZFxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICApO1xuICAgICAgY29uc3QgcGFuZWxJZCA9IHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5wYW5lbElEXTtcbiAgICAgIGlmIChwYW5lbElkKSB7XG4gICAgICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIGtleT1cInBhbmVsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGljb249XCJhcHBzXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj17YGQvJHtlbmNvZGVVUklDb21wb25lbnQoZGFzaGJvYXJkVUlEKX0/dmlld1BhbmVsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhbmVsSWQpfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR28gdG8gcGFuZWxcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFsZXJ0bWFuYWdlclNvdXJjZU5hbWUgJiYgY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5BbGVydGluZ0luc3RhbmNlQ3JlYXRlLCBjb250ZXh0U3J2LmlzRWRpdG9yKSkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwic2lsZW5jZVwiXG4gICAgICAgIGljb249XCJiZWxsLXNsYXNoXCJcbiAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgIGhyZWY9e21ha2VSdWxlQmFzZWRTaWxlbmNlTGluayhhbGVydG1hbmFnZXJTb3VyY2VOYW1lLCBydWxlKX1cbiAgICAgID5cbiAgICAgICAgU2lsZW5jZVxuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAoYWxlcnRJZCkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8RnJhZ21lbnQga2V5PVwiaGlzdG9yeVwiPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSBzaXplPVwieHNcIiBpY29uPVwiaGlzdG9yeVwiIG9uQ2xpY2s9eygpID0+IHNob3dTdGF0ZUhpc3RvcnlNb2RhbCgpfT5cbiAgICAgICAgICBTaG93IHN0YXRlIGhpc3RvcnlcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHtTdGF0ZUhpc3RvcnlNb2RhbH1cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghaXNWaWV3TW9kZSkge1xuICAgIHJpZ2h0QnV0dG9ucy5wdXNoKFxuICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGtleT1cInZpZXdcIlxuICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgaWNvbj1cImV5ZVwiXG4gICAgICAgIGhyZWY9e2NyZWF0ZVZpZXdMaW5rKHJ1bGVzU291cmNlLCBydWxlLCByZXR1cm5Ubyl9XG4gICAgICA+XG4gICAgICAgIFZpZXdcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGlzRWRpdGFibGUgJiYgcnVsZXJSdWxlICYmICFpc0ZlZGVyYXRlZCkge1xuICAgIGNvbnN0IHNvdXJjZU5hbWUgPSBnZXRSdWxlc1NvdXJjZU5hbWUocnVsZXNTb3VyY2UpO1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBydWxlSWQuZnJvbVJ1bGVyUnVsZShzb3VyY2VOYW1lLCBuYW1lc3BhY2UubmFtZSwgZ3JvdXAubmFtZSwgcnVsZXJSdWxlKTtcblxuICAgIGNvbnN0IGVkaXRVUkwgPSB1cmxVdGlsLnJlbmRlclVybChcbiAgICAgIGAke2NvbmZpZy5hcHBTdWJVcmx9L2FsZXJ0aW5nLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJ1bGVJZC5zdHJpbmdpZnlJZGVudGlmaWVyKGlkZW50aWZpZXIpKX0vZWRpdGAsXG4gICAgICB7XG4gICAgICAgIHJldHVyblRvLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoaXNWaWV3TW9kZSkge1xuICAgICAgcmlnaHRCdXR0b25zLnB1c2goXG4gICAgICAgIDxDbGlwYm9hcmRCdXR0b25cbiAgICAgICAgICBrZXk9XCJjb3B5XCJcbiAgICAgICAgICBvbkNsaXBib2FyZENvcHk9eygpID0+IHtcbiAgICAgICAgICAgIG5vdGlmeUFwcC5zdWNjZXNzKCdVUkwgY29waWVkIScpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGlwYm9hcmRFcnJvcj17KGUpID0+IHtcbiAgICAgICAgICAgIG5vdGlmeUFwcC5lcnJvcignRXJyb3Igd2hpbGUgY29weWluZyBVUkwnLCBlLnRleHQpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBnZXRUZXh0PXtidWlsZFNoYXJlVXJsfVxuICAgICAgICA+XG4gICAgICAgICAgQ29weSBsaW5rIHRvIHJ1bGVcbiAgICAgICAgPC9DbGlwYm9hcmRCdXR0b24+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJpZ2h0QnV0dG9ucy5wdXNoKFxuICAgICAgPExpbmtCdXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IHNpemU9XCJ4c1wiIGtleT1cImVkaXRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWNvbj1cInBlblwiIGhyZWY9e2VkaXRVUkx9PlxuICAgICAgICBFZGl0XG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChpc1JlbW92YWJsZSAmJiBydWxlclJ1bGUgJiYgIWlzRmVkZXJhdGVkKSB7XG4gICAgcmlnaHRCdXR0b25zLnB1c2goXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAga2V5PVwiZGVsZXRlXCJcbiAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlVG9EZWxldGUocnVsZSl9XG4gICAgICA+XG4gICAgICAgIERlbGV0ZVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChsZWZ0QnV0dG9ucy5sZW5ndGggfHwgcmlnaHRCdXR0b25zLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XG4gICAgICAgICAgPEhvcml6b250YWxHcm91cCB3aWR0aD1cImF1dG9cIj57bGVmdEJ1dHRvbnMubGVuZ3RoID8gbGVmdEJ1dHRvbnMgOiA8ZGl2IC8+fTwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgd2lkdGg9XCJhdXRvXCI+e3JpZ2h0QnV0dG9ucy5sZW5ndGggPyByaWdodEJ1dHRvbnMgOiA8ZGl2IC8+fTwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyEhcnVsZVRvRGVsZXRlICYmIChcbiAgICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBydWxlXCJcbiAgICAgICAgICAgIGJvZHk9XCJEZWxldGluZyB0aGlzIHJ1bGUgd2lsbCBwZXJtYW5lbnRseSByZW1vdmUgaXQgZnJvbSB5b3VyIGFsZXJ0IHJ1bGUgbGlzdC4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJ1bGU/XCJcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0PVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgICAgaWNvbj1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJcbiAgICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlUnVsZX1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0UnVsZVRvRGVsZXRlKHVuZGVmaW5lZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGluVmlld01vZGUocGF0aG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aG5hbWUuZW5kc1dpdGgoJy92aWV3Jyk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICBgLFxuICBidXR0b246IGNzc2BcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgYCxcbn0pO1xuXG5mdW5jdGlvbiBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZT86IFJ1bGVyUnVsZURUTyk6IHJ1bGUgaXMgUnVsZXJHcmFmYW5hUnVsZURUTyB7XG4gIGlmICghcnVsZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKHJ1bGUgYXMgUnVsZXJHcmFmYW5hUnVsZURUTykuZ3JhZmFuYV9hbGVydCAhPSBudWxsO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkRldGFpbHNGaWVsZCB9IGZyb20gJy4uL0Fubm90YXRpb25EZXRhaWxzRmllbGQnO1xuXG50eXBlIFByb3BzID0ge1xuICBhbm5vdGF0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZURldGFpbHNBbm5vdGF0aW9ucyhwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IGFubm90YXRpb25zIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmIChhbm5vdGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbm5vdGF0aW9uc30+XG4gICAgICB7YW5ub3RhdGlvbnMubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgPEFubm90YXRpb25EZXRhaWxzRmllbGQga2V5PXtrZXl9IGFubm90YXRpb25LZXk9e2tleX0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gIGFubm90YXRpb25zOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogNDZweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9FeHByZXNzaW9uRGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0Nsb3VkUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJ1bGU6IENvbWJpbmVkUnVsZTtcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVEZXRhaWxzRGF0YVNvdXJjZXMocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyBydWxlc1NvdXJjZSwgcnVsZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBkYXRhU291cmNlczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IGljb24/OiBzdHJpbmcgfT4gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgICAgcmV0dXJuIFt7IG5hbWU6IHJ1bGVzU291cmNlLm5hbWUsIGljb246IHJ1bGVzU291cmNlLm1ldGEuaW5mby5sb2dvcy5zbWFsbCB9XTtcbiAgICB9XG5cbiAgICBpZiAoaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUucnVsZXJSdWxlKSkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBydWxlLnJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0O1xuICAgICAgY29uc3QgdW5pcXVlID0gZGF0YS5yZWR1Y2UoKGRhdGFTb3VyY2VzLCBxdWVyeSkgPT4ge1xuICAgICAgICBjb25zdCBkcyA9IGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpO1xuXG4gICAgICAgIGlmICghZHMgfHwgZHMudWlkID09PSBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCkge1xuICAgICAgICAgIHJldHVybiBkYXRhU291cmNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFTb3VyY2VzW2RzLm5hbWVdID0geyBuYW1lOiBkcy5uYW1lLCBpY29uOiBkcy5tZXRhLmluZm8ubG9nb3Muc21hbGwgfTtcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2VzO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgeyBuYW1lOiBzdHJpbmc7IGljb24/OiBzdHJpbmcgfT4pO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh1bmlxdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfSwgW3J1bGUsIHJ1bGVzU291cmNlXSk7XG5cbiAgaWYgKGRhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiRGF0YSBzb3VyY2VcIj5cbiAgICAgIHtkYXRhU291cmNlcy5tYXAoKHsgbmFtZSwgaWNvbiB9LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17bmFtZX0+XG4gICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9e2Ake25hbWV9IGRhdGFzb3VyY2UgbG9nb2B9IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTb3VyY2VJY29ufSBzcmM9e2ljb259IC8+eycgJ31cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9EZXRhaWxzRmllbGQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICBjb25zdCBzaXplID0gdGhlbWUuc3BhY2luZygyKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGFTb3VyY2VJY29uOiBjc3NgXG4gICAgICB3aWR0aDogJHtzaXplfTtcbiAgICAgIGhlaWdodDogJHtzaXplfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBSdWxlc1NvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vRGV0YWlsc0ZpZWxkJztcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICcuLi9FeHByZXNzaW9uJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2U7XG4gIGFubm90YXRpb25zOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlRGV0YWlsc0V4cHJlc3Npb24ocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyBhbm5vdGF0aW9ucywgcnVsZXNTb3VyY2UsIHJ1bGUgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoKTtcblxuICBpZiAoIWlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIkV4cHJlc3Npb25cIiBob3Jpem9udGFsPXt0cnVlfSBjbGFzc05hbWU9e2N4KHsgW3N0eWxlcy5leHByUm93XTogISFhbm5vdGF0aW9ucy5sZW5ndGggfSl9PlxuICAgICAgPEV4cHJlc3Npb24gZXhwcmVzc2lvbj17cnVsZS5xdWVyeX0gcnVsZXNTb3VyY2U9e3J1bGVzU291cmNlfSAvPlxuICAgIDwvRGV0YWlsc0ZpZWxkPlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiAoe1xuICBleHByUm93OiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogNDZweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgQ29tYmluZWRSdWxlR3JvdXAgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEZXRhaWxzRmllbGQgfSBmcm9tICcuLi9EZXRhaWxzRmllbGQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBncm91cDogQ29tYmluZWRSdWxlR3JvdXA7XG59XG5cbmNvbnN0IFJ1bGVEZXRhaWxzRmVkZXJhdGVkU291cmNlczogRkM8UHJvcHM+ID0gKHsgZ3JvdXAgfSkgPT4ge1xuICBjb25zdCBzb3VyY2VUZW5hbnRzID0gZ3JvdXAuc291cmNlX3RlbmFudHMgPz8gW107XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiVGVuYW50IHNvdXJjZXNcIj5cbiAgICAgIDw+XG4gICAgICAgIHtzb3VyY2VUZW5hbnRzLm1hcCgodGVuYW50KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3RlbmFudH0+e3RlbmFudH08L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICA8L0RldGFpbHNGaWVsZD5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFJ1bGVEZXRhaWxzRmVkZXJhdGVkU291cmNlcyB9O1xuIiwiaW1wb3J0IHsgQWxlcnQsIFJ1bGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5pbXBvcnQgeyBBbGVydEluc3RhbmNlc1RhYmxlIH0gZnJvbSAnLi9BbGVydEluc3RhbmNlc1RhYmxlJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJ2FwcC9wbHVnaW5zL3BhbmVsL2FsZXJ0bGlzdC90eXBlcyc7XG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgbGFiZWxzTWF0Y2hNYXRjaGVycywgcGFyc2VNYXRjaGVycyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBzb3J0QWxlcnRzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBNYXRjaGVyRmlsdGVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlcic7XG5pbXBvcnQgeyBBbGVydEluc3RhbmNlU3RhdGVGaWx0ZXIgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByb21SdWxlPzogUnVsZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgcHJvbVJ1bGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtxdWVyeVN0cmluZywgc2V0UXVlcnlTdHJpbmddID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbYWxlcnRTdGF0ZSwgc2V0QWxlcnRTdGF0ZV0gPSB1c2VTdGF0ZTxHcmFmYW5hQWxlcnRTdGF0ZT4oKTtcblxuICAvLyBUaGlzIGtleSBpcyB1c2VkIHRvIGZvcmNlIGEgcmVyZW5kZXIgb24gdGhlIGlucHV0cyB3aGVuIHRoZSBmaWx0ZXJzIGFyZSBjbGVhcmVkXG4gIGNvbnN0IFtmaWx0ZXJLZXldID0gdXNlU3RhdGU8bnVtYmVyPihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcbiAgY29uc3QgcXVlcnlTdHJpbmdLZXkgPSBgcXVlcnlTdHJpbmctJHtmaWx0ZXJLZXl9YDtcblxuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBhbGVydHMgPSB1c2VNZW1vKFxuICAgICgpOiBBbGVydFtdID0+XG4gICAgICBpc0FsZXJ0aW5nUnVsZShwcm9tUnVsZSkgJiYgcHJvbVJ1bGUuYWxlcnRzPy5sZW5ndGhcbiAgICAgICAgPyBmaWx0ZXJBbGVydHMocXVlcnlTdHJpbmcsIGFsZXJ0U3RhdGUsIHNvcnRBbGVydHMoU29ydE9yZGVyLkltcG9ydGFuY2UsIHByb21SdWxlLmFsZXJ0cykpXG4gICAgICAgIDogW10sXG4gICAgW3Byb21SdWxlLCBhbGVydFN0YXRlLCBxdWVyeVN0cmluZ11cbiAgKTtcblxuICBpZiAoIWlzQWxlcnRpbmdSdWxlKHByb21SdWxlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiTWF0Y2hpbmcgaW5zdGFuY2VzXCIgaG9yaXpvbnRhbD17dHJ1ZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3csIHN0eWxlcy5zcGFjZUJldHdlZW4pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICA8TWF0Y2hlckZpbHRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucm93Q2hpbGR9XG4gICAgICAgICAgICBrZXk9e3F1ZXJ5U3RyaW5nS2V5fVxuICAgICAgICAgICAgZGVmYXVsdFF1ZXJ5U3RyaW5nPXtxdWVyeVN0cmluZ31cbiAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXsodmFsdWUpID0+IHNldFF1ZXJ5U3RyaW5nKHZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBbGVydEluc3RhbmNlU3RhdGVGaWx0ZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfVxuICAgICAgICAgICAgc3RhdGVGaWx0ZXI9e2FsZXJ0U3RhdGV9XG4gICAgICAgICAgICBvblN0YXRlRmlsdGVyQ2hhbmdlPXtzZXRBbGVydFN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxBbGVydEluc3RhbmNlc1RhYmxlIGluc3RhbmNlcz17YWxlcnRzfSAvPlxuICAgIDwvRGV0YWlsc0ZpZWxkPlxuICApO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJBbGVydHMoXG4gIGFsZXJ0SW5zdGFuY2VMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBhbGVydEluc3RhbmNlU3RhdGU6IEdyYWZhbmFBbGVydFN0YXRlIHwgdW5kZWZpbmVkLFxuICBhbGVydHM6IEFsZXJ0W11cbik6IEFsZXJ0W10ge1xuICBsZXQgZmlsdGVyZWRBbGVydHMgPSBbLi4uYWxlcnRzXTtcbiAgaWYgKGFsZXJ0SW5zdGFuY2VMYWJlbCkge1xuICAgIGNvbnN0IG1hdGNoZXJzID0gcGFyc2VNYXRjaGVycyhhbGVydEluc3RhbmNlTGFiZWwgfHwgJycpO1xuICAgIGZpbHRlcmVkQWxlcnRzID0gZmlsdGVyZWRBbGVydHMuZmlsdGVyKCh7IGxhYmVscyB9KSA9PiBsYWJlbHNNYXRjaE1hdGNoZXJzKGxhYmVscywgbWF0Y2hlcnMpKTtcbiAgfVxuICBpZiAoYWxlcnRJbnN0YW5jZVN0YXRlKSB7XG4gICAgZmlsdGVyZWRBbGVydHMgPSBmaWx0ZXJlZEFsZXJ0cy5maWx0ZXIoKGFsZXJ0KSA9PiB7XG4gICAgICByZXR1cm4gYWxlcnQuc3RhdGUgPT09IGFsZXJ0SW5zdGFuY2VTdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEFsZXJ0cztcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmbGV4Um93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIHNwYWNlQmV0d2VlbjogY3NzYFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGAsXG4gICAgcm93Q2hpbGQ6IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBUb29sdGlwLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb20ge1xuICBydWxlOiBSdWxlO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZUhlYWx0aDogRkM8UHJvbT4gPSAoeyBydWxlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB1c2VTdHlsZXMyKGdldFN0eWxlKTtcbiAgaWYgKHJ1bGUuaGVhbHRoID09PSAnZXJyJyB8fCBydWxlLmhlYWx0aCA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCB0aGVtZT1cImVycm9yXCIgY29udGVudD17cnVsZS5sYXN0RXJyb3IgfHwgJ05vIGVycm9yIG1lc3NhZ2UgcHJvdmlkZWQuJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53YXJufT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiAvPlxuICAgICAgICAgIDxzcGFuPmVycm9yPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApO1xuICB9XG4gIHJldHVybiA8PntydWxlLmhlYWx0aH08Lz47XG59O1xuXG5jb25zdCBnZXRTdHlsZSA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd2FybjogY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndhcm5pbmcudGV4dH07XG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIFNwaW5uZXIsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzUmVjb3JkaW5nUnVsZSwgZ2V0Rmlyc3RBY3RpdmVBdCB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IEFsZXJ0U3RhdGVUYWcgfSBmcm9tICcuL0FsZXJ0U3RhdGVUYWcnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG4gIGlzRGVsZXRpbmc6IGJvb2xlYW47XG4gIGlzQ3JlYXRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlU3RhdGU6IEZDPFByb3BzPiA9ICh7IHJ1bGUsIGlzRGVsZXRpbmcsIGlzQ3JlYXRpbmcgfSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGUpO1xuICBjb25zdCB7IHByb21SdWxlIH0gPSBydWxlO1xuXG4gIC8vIHJldHVybiBob3cgbG9uZyB0aGUgcnVsZSBoYXMgYmVlbiBpbiBpdCdzIGZpcmluZyBzdGF0ZSwgaWYgYW55XG4gIGNvbnN0IGZvclRpbWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwcm9tUnVsZSAmJlxuICAgICAgaXNBbGVydGluZ1J1bGUocHJvbVJ1bGUpICYmXG4gICAgICBwcm9tUnVsZS5hbGVydHM/Lmxlbmd0aCAmJlxuICAgICAgcHJvbVJ1bGUuc3RhdGUgIT09IFByb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZVxuICAgICkge1xuICAgICAgLy8gZmluZCBlYXJsaWVzdCBhbGVydFxuICAgICAgY29uc3QgZmlyc3RBY3RpdmVBdCA9IGdldEZpcnN0QWN0aXZlQXQocHJvbVJ1bGUpO1xuXG4gICAgICAvLyBjYWxjdWxhdGUgdGltZSBlbGFwc2VkIGZyb20gZWFybGllc3QgYWxlcnRcbiAgICAgIGlmIChmaXJzdEFjdGl2ZUF0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gdGl0bGU9e1N0cmluZyhmaXJzdEFjdGl2ZUF0KX0gY2xhc3NOYW1lPXtzdHlsZS5mb3J9PlxuICAgICAgICAgICAgZm9yeycgJ31cbiAgICAgICAgICAgIHtpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyhcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBmaXJzdEFjdGl2ZUF0LFxuICAgICAgICAgICAgICAgIGVuZDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgW3Byb21SdWxlLCBzdHlsZV0pO1xuXG4gIGlmIChpc0RlbGV0aW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIGRlbGV0aW5nXG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9IGVsc2UgaWYgKGlzQ3JlYXRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgY3JlYXRpbmdcbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH0gZWxzZSBpZiAocHJvbVJ1bGUgJiYgaXNBbGVydGluZ1J1bGUocHJvbVJ1bGUpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIDxBbGVydFN0YXRlVGFnIHN0YXRlPXtwcm9tUnVsZS5zdGF0ZX0gLz5cbiAgICAgICAge2ZvclRpbWV9XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9IGVsc2UgaWYgKHByb21SdWxlICYmIGlzUmVjb3JkaW5nUnVsZShwcm9tUnVsZSkpIHtcbiAgICByZXR1cm4gPD5SZWNvcmRpbmcgcnVsZTwvPjtcbiAgfVxuICByZXR1cm4gPD5uL2E8Lz47XG59O1xuXG5jb25zdCBnZXRTdHlsZSA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZm9yOiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQWxlcnRTdGF0ZSwgZGF0ZVRpbWVGb3JtYXQsIEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIExvYWRpbmdQbGFjZWhvbGRlciwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFN0YXRlSGlzdG9yeUl0ZW0sIFN0YXRlSGlzdG9yeUl0ZW1EYXRhIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgRHluYW1pY1RhYmxlLCBEeW5hbWljVGFibGVDb2x1bW5Qcm9wcywgRHluYW1pY1RhYmxlSXRlbVByb3BzIH0gZnJvbSAnLi4vRHluYW1pY1RhYmxlJztcbmltcG9ydCB7IEFsZXJ0U3RhdGVUYWcgfSBmcm9tICcuL0FsZXJ0U3RhdGVUYWcnO1xuaW1wb3J0IHsgdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5JztcbmltcG9ydCB7IEFsZXJ0TGFiZWwgfSBmcm9tICcuLi9BbGVydExhYmVsJztcbmltcG9ydCB7IEdyYWZhbmFBbGVydFN0YXRlLCBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG50eXBlIFN0YXRlSGlzdG9yeVJvd0l0ZW0gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHN0YXRlOiBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfCBHcmFmYW5hQWxlcnRTdGF0ZSB8IEFsZXJ0U3RhdGU7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGRhdGE/OiBTdGF0ZUhpc3RvcnlJdGVtRGF0YTtcbiAgdGltZXN0YW1wPzogbnVtYmVyO1xufTtcblxudHlwZSBTdGF0ZUhpc3RvcnlSb3cgPSBEeW5hbWljVGFibGVJdGVtUHJvcHM8U3RhdGVIaXN0b3J5Um93SXRlbT47XG5cbmludGVyZmFjZSBSdWxlU3RhdGVIaXN0b3J5UHJvcHMge1xuICBhbGVydElkOiBzdHJpbmc7XG59XG5cbmNvbnN0IFN0YXRlSGlzdG9yeTogRkM8UnVsZVN0YXRlSGlzdG9yeVByb3BzPiA9ICh7IGFsZXJ0SWQgfSkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCByZXN1bHQgPSBbXSB9ID0gdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5KGFsZXJ0SWQpO1xuXG4gIGlmIChsb2FkaW5nICYmICFlcnJvcikge1xuICAgIHJldHVybiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9eydMb2FkaW5nIGhpc3RvcnkuLi4nfSAvPjtcbiAgfVxuXG4gIGlmIChlcnJvciAmJiAhbG9hZGluZykge1xuICAgIHJldHVybiA8QWxlcnQgdGl0bGU9eydGYWlsZWQgdG8gZmV0Y2ggYWxlcnQgc3RhdGUgaGlzdG9yeSd9PntlcnJvci5tZXNzYWdlfTwvQWxlcnQ+O1xuICB9XG5cbiAgY29uc3QgY29sdW1uczogQXJyYXk8RHluYW1pY1RhYmxlQ29sdW1uUHJvcHM8U3RhdGVIaXN0b3J5Um93SXRlbT4+ID0gW1xuICAgIHsgaWQ6ICdzdGF0ZScsIGxhYmVsOiAnU3RhdGUnLCBzaXplOiAnbWF4LWNvbnRlbnQnLCByZW5kZXJDZWxsOiByZW5kZXJTdGF0ZUNlbGwgfSxcbiAgICB7IGlkOiAndmFsdWUnLCBsYWJlbDogJycsIHNpemU6ICdhdXRvJywgcmVuZGVyQ2VsbDogcmVuZGVyVmFsdWVDZWxsIH0sXG4gICAgeyBpZDogJ3RpbWVzdGFtcCcsIGxhYmVsOiAnVGltZScsIHNpemU6ICdtYXgtY29udGVudCcsIHJlbmRlckNlbGw6IHJlbmRlclRpbWVzdGFtcENlbGwgfSxcbiAgXTtcblxuICBjb25zdCBpdGVtczogU3RhdGVIaXN0b3J5Um93W10gPSByZXN1bHRcbiAgICAucmVkdWNlKChhY2M6IFN0YXRlSGlzdG9yeVJvd0l0ZW1bXSwgaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgaWQ6IFN0cmluZyhpdGVtLmlkKSxcbiAgICAgICAgc3RhdGU6IGl0ZW0ubmV3U3RhdGUsXG4gICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcbiAgICAgICAgZGF0YTogaXRlbS5kYXRhLFxuICAgICAgICB0aW1lc3RhbXA6IGl0ZW0udXBkYXRlZCxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBpZiB0aGUgcHJlY2VkaW5nIHN0YXRlIGlzIG5vdCB0aGUgc2FtZSwgY3JlYXRlIGEgc2VwYXJhdGUgc3RhdGUgZW50cnkg4oCTIHRoaXMgbGlrZWx5IG1lYW5zIHRoZSBzdGF0ZSB3YXMgcmVzZXRcbiAgICAgIGlmICghaGFzTWF0Y2hpbmdQcmVjZWRpbmdTdGF0ZShpbmRleCwgcmVzdWx0KSkge1xuICAgICAgICBhY2MucHVzaCh7IGlkOiB1bmlxdWVJZCgpLCBzdGF0ZTogaXRlbS5wcmV2U3RhdGUgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pXG4gICAgLm1hcCgoaGlzdG9yeUl0ZW0pID0+ICh7XG4gICAgICBpZDogaGlzdG9yeUl0ZW0uaWQsXG4gICAgICBkYXRhOiBoaXN0b3J5SXRlbSxcbiAgICB9KSk7XG5cbiAgcmV0dXJuIDxEeW5hbWljVGFibGUgY29scz17Y29sdW1uc30gaXRlbXM9e2l0ZW1zfSAvPjtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclZhbHVlQ2VsbChpdGVtOiBTdGF0ZUhpc3RvcnlSb3cpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGl0ZW0uZGF0YS5kYXRhPy5ldmFsTWF0Y2hlcyA/PyBbXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXRlbS5kYXRhLnRleHR9XG4gICAgICA8TGFiZWxzV3JhcHBlcj5cbiAgICAgICAge21hdGNoZXMubWFwKChtYXRjaCkgPT4gKFxuICAgICAgICAgIDxBbGVydExhYmVsIGtleT17bWF0Y2gubWV0cmljfSBsYWJlbEtleT17bWF0Y2gubWV0cmljfSB2YWx1ZT17U3RyaW5nKG1hdGNoLnZhbHVlKX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0xhYmVsc1dyYXBwZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0YXRlQ2VsbChpdGVtOiBTdGF0ZUhpc3RvcnlSb3cpIHtcbiAgcmV0dXJuIDxBbGVydFN0YXRlVGFnIHN0YXRlPXtpdGVtLmRhdGEuc3RhdGV9IC8+O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUaW1lc3RhbXBDZWxsKGl0ZW06IFN0YXRlSGlzdG9yeVJvdykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtUaW1lc3RhbXBTdHlsZX0+e2l0ZW0uZGF0YS50aW1lc3RhbXAgJiYgPHNwYW4+e2RhdGVUaW1lRm9ybWF0KGl0ZW0uZGF0YS50aW1lc3RhbXApfTwvc3Bhbj59PC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IExhYmVsc1dyYXBwZXI6IEZDPHt9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyB3cmFwcGVyIH0gPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuY29uc3QgVGltZXN0YW1wU3R5bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgJiA+ICoge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICAgIH1cbiAgYCxcbn0pO1xuXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgZmlndXJlIG91dCBpZiBhIGdpdmVuIGhpc3RvcnlJdGVtIGhhcyBhIHByZWNlZGluZyBoaXN0b3J5SXRlbSB3aGVyZSB0aGUgc3RhdGVzIG1hdGNoIC0gaW4gb3RoZXIgd29yZHNcbi8vIHRoZSBuZXdTdGF0ZSBvZiB0aGUgcHJldmlvdXMgaGlzdG9yeUl0ZW0gaXMgdGhlIHNhbWUgYXMgdGhlIHByZXZTdGF0ZSBvZiB0aGUgY3VycmVudCBoaXN0b3J5SXRlbVxuZnVuY3Rpb24gaGFzTWF0Y2hpbmdQcmVjZWRpbmdTdGF0ZShpbmRleDogbnVtYmVyLCBpdGVtczogU3RhdGVIaXN0b3J5SXRlbVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGN1cnJlbnRIaXN0b3J5SXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgY29uc3QgcHJldmlvdXNIaXN0b3J5SXRlbSA9IGl0ZW1zW2luZGV4ICsgMV07XG5cbiAgaWYgKCFwcmV2aW91c0hpc3RvcnlJdGVtKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHByZXZpb3VzSGlzdG9yeUl0ZW0ubmV3U3RhdGUgPT09IGN1cnJlbnRIaXN0b3J5SXRlbS5wcmV2U3RhdGU7XG59XG5cbmV4cG9ydCB7IFN0YXRlSGlzdG9yeSB9O1xuIiwiaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxlcnRRdWVyaWVzU3RhdHVzKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkge1xuICBjb25zdCBhbGxEYXRhU291cmNlc0F2YWlsYWJsZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gcXVlcmllcy5ldmVyeSgocXVlcnkpID0+IEJvb2xlYW4oZ2V0RGF0YVNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MocXVlcnkuZGF0YXNvdXJjZVVpZCkpKSxcbiAgICBbcXVlcmllc11cbiAgKTtcblxuICByZXR1cm4geyBhbGxEYXRhU291cmNlc0F2YWlsYWJsZSB9O1xufVxuIiwiaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBSdWxlSWRlbnRpZmllciwgUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFJ1bGVyUnVsZXNDb25maWdEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgZmV0Y2hQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbiB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQXN5bmNSZXF1ZXN0TWFwU2xpY2UsIEFzeW5jUmVxdWVzdFN0YXRlLCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgKiBhcyBydWxlSWQgZnJvbSAnLi4vdXRpbHMvcnVsZS1pZCc7XG5pbXBvcnQgeyBpc1J1bGVyTm90U3VwcG9ydGVkUmVzcG9uc2UgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzIH0gZnJvbSAnLi91c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGUoXG4gIGlkZW50aWZpZXI6IFJ1bGVJZGVudGlmaWVyIHwgdW5kZWZpbmVkLFxuICBydWxlU291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiBBc3luY1JlcXVlc3RTdGF0ZTxDb21iaW5lZFJ1bGU+IHtcbiAgY29uc3QgcmVxdWVzdFN0YXRlID0gdXNlQ29tYmluZWRSdWxlc0xvYWRlcihydWxlU291cmNlTmFtZSk7XG4gIGNvbnN0IGNvbWJpbmVkUnVsZXMgPSB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKHJ1bGVTb3VyY2VOYW1lKTtcblxuICBjb25zdCBydWxlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFpZGVudGlmaWVyIHx8ICFydWxlU291cmNlTmFtZSB8fCBjb21iaW5lZFJ1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgbmFtZXNwYWNlIG9mIGNvbWJpbmVkUnVsZXMpIHtcbiAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgbmFtZXNwYWNlLmdyb3Vwcykge1xuICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgZ3JvdXAucnVsZXMpIHtcbiAgICAgICAgICBjb25zdCBpZCA9IHJ1bGVJZC5mcm9tQ29tYmluZWRSdWxlKHJ1bGVTb3VyY2VOYW1lLCBydWxlKTtcblxuICAgICAgICAgIGlmIChydWxlSWQuZXF1YWwoaWQsIGlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0sIFtpZGVudGlmaWVyLCBydWxlU291cmNlTmFtZSwgY29tYmluZWRSdWxlc10pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVxdWVzdFN0YXRlLFxuICAgIHJlc3VsdDogcnVsZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbWJpbmVkUnVsZXNNYXRjaGluZyhcbiAgcnVsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgcnVsZVNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogQXN5bmNSZXF1ZXN0U3RhdGU8Q29tYmluZWRSdWxlW10+IHtcbiAgY29uc3QgcmVxdWVzdFN0YXRlID0gdXNlQ29tYmluZWRSdWxlc0xvYWRlcihydWxlU291cmNlTmFtZSk7XG4gIGNvbnN0IGNvbWJpbmVkUnVsZXMgPSB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKHJ1bGVTb3VyY2VOYW1lKTtcblxuICBjb25zdCBydWxlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghcnVsZU5hbWUgfHwgIXJ1bGVTb3VyY2VOYW1lIHx8IGNvbWJpbmVkUnVsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgcnVsZXM6IENvbWJpbmVkUnVsZVtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IG5hbWVzcGFjZSBvZiBjb21iaW5lZFJ1bGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIG5hbWVzcGFjZS5ncm91cHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIGdyb3VwLnJ1bGVzKSB7XG4gICAgICAgICAgaWYgKHJ1bGUubmFtZSA9PT0gcnVsZU5hbWUpIHtcbiAgICAgICAgICAgIHJ1bGVzLnB1c2gocnVsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9LCBbcnVsZU5hbWUsIHJ1bGVTb3VyY2VOYW1lLCBjb21iaW5lZFJ1bGVzXSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZXF1ZXN0U3RhdGUsXG4gICAgcmVzdWx0OiBydWxlcyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlc0xvYWRlcihydWxlc1NvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IEFzeW5jUmVxdWVzdFN0YXRlPHZvaWQ+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwcm9tUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICBjb25zdCBwcm9tUnVsZVJlcXVlc3QgPSBnZXRSZXF1ZXN0U3RhdGUocnVsZXNTb3VyY2VOYW1lLCBwcm9tUnVsZVJlcXVlc3RzKTtcbiAgY29uc3QgcnVsZXJSdWxlUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJ1bGVyUnVsZXMpO1xuICBjb25zdCBydWxlclJ1bGVSZXF1ZXN0ID0gZ2V0UmVxdWVzdFN0YXRlKHJ1bGVzU291cmNlTmFtZSwgcnVsZXJSdWxlUmVxdWVzdHMpO1xuXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcnVsZXNTb3VyY2VOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgZGlzcGF0Y2goZmV0Y2hQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbih7IHJ1bGVzU291cmNlTmFtZSB9KSk7XG4gIH0sIFtkaXNwYXRjaCwgcnVsZXNTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nLFxuICAgIGVycm9yOiBwcm9tUnVsZVJlcXVlc3QuZXJyb3IgPz8gaXNSdWxlck5vdFN1cHBvcnRlZFJlc3BvbnNlKHJ1bGVyUnVsZVJlcXVlc3QpID8gdW5kZWZpbmVkIDogcnVsZXJSdWxlUmVxdWVzdC5lcnJvcixcbiAgICBkaXNwYXRjaGVkOiBwcm9tUnVsZVJlcXVlc3QuZGlzcGF0Y2hlZCAmJiBydWxlclJ1bGVSZXF1ZXN0LmRpc3BhdGNoZWQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlcXVlc3RTdGF0ZShcbiAgcnVsZVNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgc2xpY2U6IEFzeW5jUmVxdWVzdE1hcFNsaWNlPFJ1bGVyUnVsZXNDb25maWdEVE8gfCBSdWxlTmFtZXNwYWNlW10gfCBudWxsPlxuKTogQXN5bmNSZXF1ZXN0U3RhdGU8UnVsZXJSdWxlc0NvbmZpZ0RUTyB8IFJ1bGVOYW1lc3BhY2VbXSB8IG51bGw+IHtcbiAgaWYgKCFydWxlU291cmNlTmFtZSkge1xuICAgIHJldHVybiBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IHNsaWNlW3J1bGVTb3VyY2VOYW1lXTtcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgcmV0dXJuIGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCB7XG4gIENvbWJpbmVkUnVsZSxcbiAgQ29tYmluZWRSdWxlR3JvdXAsXG4gIENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgUnVsZSxcbiAgUnVsZUdyb3VwLFxuICBSdWxlTmFtZXNwYWNlLFxuICBSdWxlc1NvdXJjZSxcbn0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUnVsZXJSdWxlRFRPLCBSdWxlclJ1bGVHcm91cERUTywgUnVsZXJSdWxlc0NvbmZpZ0RUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBnZXRBbGxSdWxlc1NvdXJjZXMsXG4gIGdldFJ1bGVzU291cmNlQnlOYW1lLFxuICBpc0Nsb3VkUnVsZXNTb3VyY2UsXG4gIGlzR3JhZmFuYVJ1bGVzU291cmNlLFxufSBmcm9tICcuLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlLCBpc0FsZXJ0aW5nUnVsZXJSdWxlLCBpc1JlY29yZGluZ1J1bGVyUnVsZSB9IGZyb20gJy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmludGVyZmFjZSBDYWNoZVZhbHVlIHtcbiAgcHJvbVJ1bGVzPzogUnVsZU5hbWVzcGFjZVtdO1xuICBydWxlclJ1bGVzPzogUnVsZXJSdWxlc0NvbmZpZ0RUTyB8IG51bGw7XG4gIHJlc3VsdDogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG59XG5cbi8vIHRoaXMgbGl0dGxlIG1vbnN0ZXIgY29tYmluZXMgcHJvbWV0aGV1cyBydWxlcyBhbmQgcnVsZXIgcnVsZXMgdG8gcHJvZHVjZSBhIHVuaWZpZWQgZGF0YSBzdHJ1Y3R1cmVcbi8vIGNhbiBsaW1pdCB0byBhIHNpbmdsZSBydWxlcyBzb3VyY2VcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKHJ1bGVzU291cmNlTmFtZT86IHN0cmluZyk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdIHtcbiAgY29uc3QgcHJvbVJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICBjb25zdCBydWxlclJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcblxuICAvLyBjYWNoZSByZXN1bHRzIHBlciBydWxlcyBzb3VyY2UsIHNvIHdlIG9ubHkgcmVjYWxjdWxhdGUgdGhvc2UgZm9yIHdoaWNoIHJlc3VsdHMgaGF2ZSBhY3R1YWxseSBjaGFuZ2VkXG4gIGNvbnN0IGNhY2hlID0gdXNlUmVmPFJlY29yZDxzdHJpbmcsIENhY2hlVmFsdWU+Pih7fSk7XG5cbiAgY29uc3QgcnVsZXNTb3VyY2VzID0gdXNlTWVtbygoKTogUnVsZXNTb3VyY2VbXSA9PiB7XG4gICAgaWYgKHJ1bGVzU291cmNlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZXNTb3VyY2UgPSBnZXRSdWxlc1NvdXJjZUJ5TmFtZShydWxlc1NvdXJjZU5hbWUpO1xuICAgICAgaWYgKCFydWxlc1NvdXJjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcnVsZXMgc291cmNlOiAke3J1bGVzU291cmNlTmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbcnVsZXNTb3VyY2VdO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0QWxsUnVsZXNTb3VyY2VzKCk7XG4gIH0sIFtydWxlc1NvdXJjZU5hbWVdKTtcblxuICByZXR1cm4gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcnVsZXNTb3VyY2VzXG4gICAgICAgIC5tYXAoKHJ1bGVzU291cmNlKTogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10gPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVzU291cmNlTmFtZSA9IGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgPyBydWxlc1NvdXJjZS5uYW1lIDogcnVsZXNTb3VyY2U7XG4gICAgICAgICAgY29uc3QgcHJvbVJ1bGVzID0gcHJvbVJ1bGVzUmVzcG9uc2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdDtcbiAgICAgICAgICBjb25zdCBydWxlclJ1bGVzID0gcnVsZXJSdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG5cbiAgICAgICAgICBjb25zdCBjYWNoZWQgPSBjYWNoZS5jdXJyZW50W3J1bGVzU291cmNlTmFtZV07XG4gICAgICAgICAgaWYgKGNhY2hlZCAmJiBjYWNoZWQucHJvbVJ1bGVzID09PSBwcm9tUnVsZXMgJiYgY2FjaGVkLnJ1bGVyUnVsZXMgPT09IHJ1bGVyUnVsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQucmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lc3BhY2VzOiBSZWNvcmQ8c3RyaW5nLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2U+ID0ge307XG5cbiAgICAgICAgICAvLyBmaXJzdCBnZXQgYWxsIHRoZSBydWxlciBydWxlcyBpblxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJ1bGVyUnVsZXMgfHwge30pLmZvckVhY2goKFtuYW1lc3BhY2VOYW1lLCBncm91cHNdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSA9IG5hbWVzcGFjZTtcbiAgICAgICAgICAgIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2UsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB0aGVuIGNvcnJlbGF0ZSB3aXRoIHByb21ldGhldXMgcnVsZXNcbiAgICAgICAgICBwcm9tUnVsZXM/LmZvckVhY2goKHsgbmFtZTogbmFtZXNwYWNlTmFtZSwgZ3JvdXBzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5zID0gKG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdIHx8IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobnMsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBPYmplY3QudmFsdWVzKG5hbWVzcGFjZXMpO1xuXG4gICAgICAgICAgY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdID0geyBwcm9tUnVsZXMsIHJ1bGVyUnVsZXMsIHJlc3VsdCB9O1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0KCksXG4gICAgW3Byb21SdWxlc1Jlc3BvbnNlcywgcnVsZXJSdWxlc1Jlc3BvbnNlcywgcnVsZXNTb3VyY2VzXVxuICApO1xufVxuXG4vLyBtZXJnZSBhbGwgZ3JvdXBzIGluIGNhc2Ugb2YgZ3JhZmFuYSBtYW5hZ2VkLCBlc3NlbnRpYWxseSB0cmVhdGluZyBuYW1lc3BhY2VzIChmb2xkZXJzKSBhcyBncm91cHNcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyhuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSkge1xuICByZXR1cm4gbmFtZXNwYWNlcy5tYXAoKG5hbWVzcGFjZSkgPT4ge1xuICAgIGNvbnN0IG5ld05hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlID0ge1xuICAgICAgLi4ubmFtZXNwYWNlLFxuICAgICAgZ3JvdXBzOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gYWRkIGRlZmF1bHQgZ3JvdXAgd2l0aCB1bmdyb3VwZWQgcnVsZXNcbiAgICBuZXdOYW1lc3BhY2UuZ3JvdXBzLnB1c2goe1xuICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgcnVsZXM6IHNvcnRSdWxlc0J5TmFtZShuYW1lc3BhY2UuZ3JvdXBzLmZsYXRNYXAoKGdyb3VwKSA9PiBncm91cC5ydWxlcykpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld05hbWVzcGFjZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0UnVsZXNCeU5hbWUocnVsZXM6IENvbWJpbmVkUnVsZVtdKSB7XG4gIHJldHVybiBydWxlcy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbn1cblxuZnVuY3Rpb24gYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cHM6IFJ1bGVyUnVsZUdyb3VwRFRPW10pOiB2b2lkIHtcbiAgbmFtZXNwYWNlLmdyb3VwcyA9IGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgY29uc3QgY29tYmluZWRHcm91cDogQ29tYmluZWRSdWxlR3JvdXAgPSB7XG4gICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgaW50ZXJ2YWw6IGdyb3VwLmludGVydmFsLFxuICAgICAgc291cmNlX3RlbmFudHM6IGdyb3VwLnNvdXJjZV90ZW5hbnRzLFxuICAgICAgcnVsZXM6IFtdLFxuICAgIH07XG4gICAgY29tYmluZWRHcm91cC5ydWxlcyA9IGdyb3VwLnJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUocnVsZSwgbmFtZXNwYWNlLCBjb21iaW5lZEdyb3VwKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkR3JvdXA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlR3JvdXBbXSk6IHZvaWQge1xuICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBsZXQgY29tYmluZWRHcm91cCA9IG5hbWVzcGFjZS5ncm91cHMuZmluZCgoZykgPT4gZy5uYW1lID09PSBncm91cC5uYW1lKTtcbiAgICBpZiAoIWNvbWJpbmVkR3JvdXApIHtcbiAgICAgIGNvbWJpbmVkR3JvdXAgPSB7XG4gICAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXG4gICAgICAgIHJ1bGVzOiBbXSxcbiAgICAgIH07XG4gICAgICBuYW1lc3BhY2UuZ3JvdXBzLnB1c2goY29tYmluZWRHcm91cCk7XG4gICAgfVxuXG4gICAgKGdyb3VwLnJ1bGVzID8/IFtdKS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1J1bGUgPSBnZXRFeGlzdGluZ1J1bGVJbkdyb3VwKHJ1bGUsIGNvbWJpbmVkR3JvdXAhLCBuYW1lc3BhY2UucnVsZXNTb3VyY2UpO1xuICAgICAgaWYgKGV4aXN0aW5nUnVsZSkge1xuICAgICAgICBleGlzdGluZ1J1bGUucHJvbVJ1bGUgPSBydWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tYmluZWRHcm91cCEucnVsZXMucHVzaChwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCEpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb21SdWxlVG9Db21iaW5lZFJ1bGUocnVsZTogUnVsZSwgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCk6IENvbWJpbmVkUnVsZSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogcnVsZS5uYW1lLFxuICAgIHF1ZXJ5OiBydWxlLnF1ZXJ5LFxuICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgYW5ub3RhdGlvbnM6IGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgIHByb21SdWxlOiBydWxlLFxuICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgIGdyb3VwLFxuICB9O1xufVxuXG5mdW5jdGlvbiBydWxlclJ1bGVUb0NvbWJpbmVkUnVsZShcbiAgcnVsZTogUnVsZXJSdWxlRFRPLFxuICBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwXG4pOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4gaXNBbGVydGluZ1J1bGVyUnVsZShydWxlKVxuICAgID8ge1xuICAgICAgICBuYW1lOiBydWxlLmFsZXJ0LFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczogcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDogaXNSZWNvcmRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5yZWNvcmQsXG4gICAgICAgIHF1ZXJ5OiBydWxlLmV4cHIsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICBuYW1lOiBydWxlLmdyYWZhbmFfYWxlcnQudGl0bGUsXG4gICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH07XG59XG5cbi8vIGZpbmQgZXhpc3RpbmcgcnVsZSBpbiBncm91cCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHByb20gcnVsZVxuZnVuY3Rpb24gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChcbiAgcnVsZTogUnVsZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwLFxuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2Vcbik6IENvbWJpbmVkUnVsZSB8IHVuZGVmaW5lZCB7XG4gIGlmIChpc0dyYWZhbmFSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICAvLyBhc3N1bWUgZ3JhZmFuYSBncm91cHMgaGF2ZSBvbmx5IHRoZSBvbmUgcnVsZS4gY2hlY2sgbmFtZSBhbnl3YXkgYmVjYXVzZSBwYXJhbm9pZFxuICAgIHJldHVybiBncm91cCEucnVsZXMuZmluZCgoZXhpc3RpbmdSdWxlKSA9PiBleGlzdGluZ1J1bGUubmFtZSA9PT0gcnVsZS5uYW1lKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIC8vIHRyeSBmaW5kaW5nIGEgcnVsZSB0aGF0IG1hdGNoZXMgbmFtZSwgbGFiZWxzLCBhbm5vdGF0aW9ucyBhbmQgcXVlcnlcbiAgICBncm91cCEucnVsZXMuZmluZChcbiAgICAgIChleGlzdGluZ1J1bGUpID0+ICFleGlzdGluZ1J1bGUucHJvbVJ1bGUgJiYgaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoZXhpc3RpbmdSdWxlLCBydWxlLCB0cnVlKVxuICAgICkgPz9cbiAgICAvLyBpZiB0aGF0IGZhaWxzLCB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBvbmx5IG1hdGNoZXMgbmFtZSwgbGFiZWxzIGFuZCBhbm5vdGF0aW9ucy5cbiAgICAvLyBsb2tpICYgcHJvbSBjYW4gc29tZXRpbWVzIG1vZGlmeSB0aGUgcXVlcnkgc28gaXQgZG9lc250IG1hdGNoLCBlZyBgMiA+IDFgIGJlY29tZXMgYDFgXG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgZmFsc2UpXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShjb21iaW5lZFJ1bGU6IENvbWJpbmVkUnVsZSwgcnVsZTogUnVsZSwgY2hlY2tRdWVyeSA9IHRydWUpOiBib29sZWFuIHtcbiAgaWYgKGNvbWJpbmVkUnVsZS5uYW1lID09PSBydWxlLm5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KGNvbWJpbmVkUnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgY29tYmluZWRSdWxlLmxhYmVscyxcbiAgICAgICAgY29tYmluZWRSdWxlLmFubm90YXRpb25zLFxuICAgICAgXSkgPT09XG4gICAgICBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIGNoZWNrUXVlcnkgPyBoYXNoUXVlcnkocnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgICAgXSlcbiAgICApO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gdGhlcmUgY2FuIGJlIHNsaWdodCBkaWZmZXJlbmNlcyBpbiBob3cgcHJvbSAmIHJ1bGVyIHJlbmRlciBhIHF1ZXJ5LCB0aGlzIHdpbGwgaGFzaCB0aGVtIGFjY291bnRpbmcgZm9yIHRoZSBkaWZmZXJlbmNlc1xuZnVuY3Rpb24gaGFzaFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgLy8gb25lIG9mIHRoZW0gbWlnaHQgYmUgd3JhcHBlZCBpbiBwYXJlbnNcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDEgJiYgcXVlcnlbMF0gPT09ICcoJyAmJiBxdWVyeVtxdWVyeS5sZW5ndGggLSAxXSA9PT0gJyknKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zbGljZSgxLCAtMSk7XG4gIH1cbiAgLy8gd2hpdGVzcGFjZSBjb3VsZCBiZSBhZGRlZCBvciByZW1vdmVkXG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXFxzfFxcbi9nLCAnJyk7XG4gIC8vIGxhYmVscyBtYXRjaGVycyBjYW4gYmUgcmVvcmRlcmVkLCBzbyBzb3J0IHRoZSBlbml0cmUgc3RyaW5nLCBlc2VudGlhbGx5IGNvbXBhcmluZyBqdXN0IHRoZSBjaGFyYWN0ZXIgY291bnRzXG4gIHJldHVybiBxdWVyeS5zcGxpdCgnJykuc29ydCgpLmpvaW4oJycpO1xufVxuIiwiaW1wb3J0IHsgRm9sZGVyRFRPIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi91dGlscy9yZWR1eCc7XG5cbmludGVyZmFjZSBSZXR1cm5CYWcge1xuICBmb2xkZXI/OiBGb2xkZXJEVE87XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2xkZXIodWlkPzogc3RyaW5nKTogUmV0dXJuQmFnIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBmb2xkZXJSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9sZGVycyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVpZCkge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hGb2xkZXJJZk5vdEZldGNoZWRBY3Rpb24odWlkKSk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2gsIHVpZF0pO1xuXG4gIGlmICh1aWQpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gZm9sZGVyUmVxdWVzdHNbdWlkXSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvbGRlcjogcmVxdWVzdC5yZXN1bHQsXG4gICAgICBsb2FkaW5nOiByZXF1ZXN0LmxvYWRpbmcsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IFJ1bGVyUnVsZURUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyBnZXRSdWxlc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgdXNlRm9sZGVyIH0gZnJvbSAnLi91c2VGb2xkZXInO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuaW50ZXJmYWNlIFJlc3VsdEJhZyB7XG4gIGlzRWRpdGFibGU/OiBib29sZWFuO1xuICBpc1JlbW92YWJsZT86IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc1J1bGVFZGl0YWJsZShydWxlc1NvdXJjZU5hbWU6IHN0cmluZywgcnVsZT86IFJ1bGVyUnVsZURUTyk6IFJlc3VsdEJhZyB7XG4gIGNvbnN0IGRhdGFTb3VyY2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlcyk7XG4gIGNvbnN0IGZvbGRlclVJRCA9IHJ1bGUgJiYgaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUpID8gcnVsZS5ncmFmYW5hX2FsZXJ0Lm5hbWVzcGFjZV91aWQgOiB1bmRlZmluZWQ7XG5cbiAgY29uc3QgcnVsZVBlcm1pc3Npb24gPSBnZXRSdWxlc1Blcm1pc3Npb25zKHJ1bGVzU291cmNlTmFtZSk7XG4gIGNvbnN0IGhhc0VkaXRQZXJtaXNzaW9uID0gY29udGV4dFNydi5oYXNBY2Nlc3MocnVsZVBlcm1pc3Npb24udXBkYXRlLCBjb250ZXh0U3J2LmlzRWRpdG9yKTtcbiAgY29uc3QgaGFzUmVtb3ZlUGVybWlzc2lvbiA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKHJ1bGVQZXJtaXNzaW9uLmRlbGV0ZSwgY29udGV4dFNydi5pc0VkaXRvcik7XG5cbiAgY29uc3QgeyBmb2xkZXIsIGxvYWRpbmcgfSA9IHVzZUZvbGRlcihmb2xkZXJVSUQpO1xuXG4gIGlmICghcnVsZSkge1xuICAgIHJldHVybiB7IGlzRWRpdGFibGU6IGZhbHNlLCBpc1JlbW92YWJsZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlIH07XG4gIH1cblxuICAvLyBncmFmYW5hIHJ1bGVzIGNhbiBiZSBlZGl0ZWQgaWYgdXNlciBjYW4gZWRpdCB0aGUgZm9sZGVyIHRoZXkncmUgaW5cbiAgaWYgKGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlKSkge1xuICAgIGlmICghZm9sZGVyVUlEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBSdWxlICR7cnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVyIHVpZCwgY2Fubm90IGRldGVybWluZSBpZiBpdCBpcyBlZGl0YWJsZS5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaXNFZGl0YWJsZTogaGFzRWRpdFBlcm1pc3Npb24gJiYgZm9sZGVyPy5jYW5TYXZlLFxuICAgICAgaXNSZW1vdmFibGU6IGhhc1JlbW92ZVBlcm1pc3Npb24gJiYgZm9sZGVyPy5jYW5TYXZlLFxuICAgICAgbG9hZGluZyxcbiAgICB9O1xuICB9XG5cbiAgLy8gcHJvbSBydWxlcyBhcmUgb25seSBlZGl0YWJsZSBieSB1c2VycyB3aXRoIEVkaXRvciByb2xlIGFuZCBvbmx5IGlmIHJ1bGVzIHNvdXJjZSBzdXBwb3J0cyBlZGl0aW5nXG4gIGNvbnN0IGlzUnVsZXJBdmFpbGFibGUgPSBCb29sZWFuKGRhdGFTb3VyY2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdD8ucnVsZXJDb25maWcpO1xuICByZXR1cm4ge1xuICAgIGlzRWRpdGFibGU6IGhhc0VkaXRQZXJtaXNzaW9uICYmIGlzUnVsZXJBdmFpbGFibGUsXG4gICAgaXNSZW1vdmFibGU6IGhhc1JlbW92ZVBlcm1pc3Npb24gJiYgaXNSdWxlckF2YWlsYWJsZSxcbiAgICBsb2FkaW5nOiBkYXRhU291cmNlc1tydWxlc1NvdXJjZU5hbWVdPy5sb2FkaW5nLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgU3RhdGVIaXN0b3J5SXRlbSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hHcmFmYW5hQW5ub3RhdGlvbnNBY3Rpb24gfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeShhbGVydElkOiBzdHJpbmcpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3I8QXN5bmNSZXF1ZXN0U3RhdGU8U3RhdGVIaXN0b3J5SXRlbVtdPj4oXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnlcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoR3JhZmFuYUFubm90YXRpb25zQWN0aW9uKGFsZXJ0SWQpKTtcbiAgfSwgW2Rpc3BhdGNoLCBhbGVydElkXSk7XG5cbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFN0YXRlSGlzdG9yeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcnVsZXMvU3RhdGVIaXN0b3J5JztcblxuZnVuY3Rpb24gdXNlU3RhdGVIaXN0b3J5TW9kYWwoYWxlcnRJZDogc3RyaW5nKSB7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgU3RhdGVIaXN0b3J5TW9kYWwgPSB1c2VNZW1vKFxuICAgICgpID0+IChcbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICBjbG9zZU9uQmFja2Ryb3BDbGljaz17dHJ1ZX1cbiAgICAgICAgY2xvc2VPbkVzY2FwZT17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJTdGF0ZSBoaXN0b3J5XCJcbiAgICAgID5cbiAgICAgICAgPFN0YXRlSGlzdG9yeSBhbGVydElkPXthbGVydElkfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICApLFxuICAgIFthbGVydElkLCBzaG93TW9kYWxdXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBTdGF0ZUhpc3RvcnlNb2RhbCxcbiAgICBzaG93U3RhdGVIaXN0b3J5TW9kYWw6ICgpID0+IHNldFNob3dNb2RhbCh0cnVlKSxcbiAgICBoaWRlU3RhdGVIaXN0b3J5TW9kYWw6ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSksXG4gIH07XG59XG5cbmV4cG9ydCB7IHVzZVN0YXRlSGlzdG9yeU1vZGFsIH07XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgT3BlcmF0b3JGdW5jdGlvbiwgUmVwbGF5U3ViamVjdCwgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7XG4gIGRhdGFGcmFtZUZyb21KU09OLFxuICBEYXRhRnJhbWVKU09OLFxuICBnZXREZWZhdWx0VGltZVJhbmdlLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgcmFuZ2VVdGlsLFxuICBUaW1lUmFuZ2UsXG4gIHdpdGhMb2FkaW5nSW5kaWNhdG9yLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZldGNoUmVzcG9uc2UsIGdldERhdGFTb3VyY2VTcnYsIHRvRGF0YVF1ZXJ5RXJyb3IgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJhY2tlbmRTcnYsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBwcmVQcm9jZXNzUGFuZWxEYXRhIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL3J1blJlcXVlc3QnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyBnZXRUaW1lUmFuZ2VGb3JFeHByZXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvdGltZVJhbmdlJztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBzZXRTdHJ1Y3R1cmVSZXZpc2lvbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9xdWVyeS9zdGF0ZS9wcm9jZXNzaW5nL3JldmlzaW9uJztcbmltcG9ydCB7IGNhbmNlbE5ldHdvcmtSZXF1ZXN0c09uVW5zdWJzY3JpYmUgfSBmcm9tICdhcHAvZmVhdHVyZXMvcXVlcnkvc3RhdGUvcHJvY2Vzc2luZy9jYW5jZWxlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRpbmdRdWVyeVJlc3VsdCB7XG4gIGZyYW1lczogRGF0YUZyYW1lSlNPTltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0aW5nUXVlcnlSZXNwb25zZSB7XG4gIHJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIEFsZXJ0aW5nUXVlcnlSZXN1bHQ+O1xufVxuZXhwb3J0IGNsYXNzIEFsZXJ0aW5nUXVlcnlSdW5uZXIge1xuICBwcml2YXRlIHN1YmplY3Q6IFJlcGxheVN1YmplY3Q8UmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPj47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uPzogVW5zdWJzY3JpYmFibGU7XG4gIHByaXZhdGUgbGFzdFJlc3VsdDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmRTcnYgPSBnZXRCYWNrZW5kU3J2KCksIHByaXZhdGUgZGF0YVNvdXJjZVNydiA9IGdldERhdGFTb3VyY2VTcnYoKSkge1xuICAgIHRoaXMuc3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICAgIHRoaXMubGFzdFJlc3VsdCA9IHt9O1xuICB9XG5cbiAgZ2V0KCk6IE9ic2VydmFibGU8UmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPj4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBhc3luYyBydW4ocXVlcmllczogQWxlcnRRdWVyeVtdKSB7XG4gICAgaWYgKHF1ZXJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlbXB0eSA9IGluaXRpYWxTdGF0ZShxdWVyaWVzLCBMb2FkaW5nU3RhdGUuRG9uZSk7XG4gICAgICByZXR1cm4gdGhpcy5zdWJqZWN0Lm5leHQoZW1wdHkpO1xuICAgIH1cblxuICAgIC8vIGRvIG5vdCBleGVjdXRlIGlmIG9uZSBtb3JlIG9mIHRoZSBxdWVyaWVzIGFyZSBub3QgcnVubmFibGUsXG4gICAgLy8gZm9yIGV4YW1wbGUgbm90IGNvbXBsZXRlbHkgY29uZmlndXJlZFxuICAgIGZvciAoY29uc3QgcXVlcnkgb2YgcXVlcmllcykge1xuICAgICAgaWYgKCFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICAgICAgY29uc3QgZHMgPSBhd2FpdCB0aGlzLmRhdGFTb3VyY2VTcnYuZ2V0KHF1ZXJ5LmRhdGFzb3VyY2VVaWQpO1xuICAgICAgICBpZiAoZHMuZmlsdGVyUXVlcnkgJiYgIWRzLmZpbHRlclF1ZXJ5KHF1ZXJ5Lm1vZGVsKSkge1xuICAgICAgICAgIGNvbnN0IGVtcHR5ID0gaW5pdGlhbFN0YXRlKHF1ZXJpZXMsIExvYWRpbmdTdGF0ZS5Eb25lKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0Lm5leHQoZW1wdHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBydW5SZXF1ZXN0KHRoaXMuYmFja2VuZFNydiwgcXVlcmllcykuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChkYXRhUGVyUXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFJlc3VsdCA9IGFwcGx5Q2hhbmdlKGRhdGFQZXJRdWVyeSwgKHJlZklkLCBkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmxhc3RSZXN1bHRbcmVmSWRdO1xuICAgICAgICAgIGNvbnN0IHByZVByb2Nlc3NlZCA9IHByZVByb2Nlc3NQYW5lbERhdGEoZGF0YSwgcHJldmlvdXMpO1xuICAgICAgICAgIHJldHVybiBzZXRTdHJ1Y3R1cmVSZXZpc2lvbihwcmVQcm9jZXNzZWQsIHByZXZpb3VzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sYXN0UmVzdWx0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodGhpcy5sYXN0UmVzdWx0KTtcbiAgICAgIH0sXG5cbiAgICAgIGVycm9yOiAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IG1hcEVycm9yVG9QYW5lbERhdGEodGhpcy5sYXN0UmVzdWx0LCBlcnJvcik7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHRoaXMubGFzdFJlc3VsdCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIGxldCByZXF1ZXN0SXNSdW5uaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBuZXh0UmVzdWx0ID0gYXBwbHlDaGFuZ2UodGhpcy5sYXN0UmVzdWx0LCAocmVmSWQsIGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgICAgICByZXF1ZXN0SXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChyZXF1ZXN0SXNSdW5uaW5nKSB7XG4gICAgICB0aGlzLnN1YmplY3QubmV4dChuZXh0UmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YmplY3QpIHtcbiAgICAgIHRoaXMuc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cbn1cblxuY29uc3QgcnVuUmVxdWVzdCA9IChiYWNrZW5kU3J2OiBCYWNrZW5kU3J2LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pOiBPYnNlcnZhYmxlPFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+ID0+IHtcbiAgY29uc3QgaW5pdGlhbCA9IGluaXRpYWxTdGF0ZShxdWVyaWVzLCBMb2FkaW5nU3RhdGUuTG9hZGluZyk7XG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgZGF0YTogeyBkYXRhOiBxdWVyaWVzIH0sXG4gICAgdXJsOiAnL2FwaS92MS9ldmFsJyxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICByZXF1ZXN0SWQ6IHV1aWR2NCgpLFxuICB9O1xuXG4gIHJldHVybiB3aXRoTG9hZGluZ0luZGljYXRvcih7XG4gICAgd2hpbGVMb2FkaW5nOiBpbml0aWFsLFxuICAgIHNvdXJjZTogYmFja2VuZFNydi5mZXRjaDxBbGVydGluZ1F1ZXJ5UmVzcG9uc2U+KHJlcXVlc3QpLnBpcGUoXG4gICAgICBtYXBUb1BhbmVsRGF0YShpbml0aWFsKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiBvZihtYXBFcnJvclRvUGFuZWxEYXRhKGluaXRpYWwsIGVycm9yKSkpLFxuICAgICAgY2FuY2VsTmV0d29ya1JlcXVlc3RzT25VbnN1YnNjcmliZShiYWNrZW5kU3J2LCByZXF1ZXN0LnJlcXVlc3RJZCksXG4gICAgICBzaGFyZSgpXG4gICAgKSxcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAocXVlcmllczogQWxlcnRRdWVyeVtdLCBzdGF0ZTogTG9hZGluZ1N0YXRlKTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9PiB7XG4gIHJldHVybiBxdWVyaWVzLnJlZHVjZSgoZGF0YUJ5UXVlcnk6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4sIHF1ZXJ5KSA9PiB7XG4gICAgZGF0YUJ5UXVlcnlbcXVlcnkucmVmSWRdID0ge1xuICAgICAgc3RhdGUsXG4gICAgICBzZXJpZXM6IFtdLFxuICAgICAgdGltZVJhbmdlOiBnZXRUaW1lUmFuZ2UocXVlcnksIHF1ZXJpZXMpLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGF0YUJ5UXVlcnk7XG4gIH0sIHt9KTtcbn07XG5cbmNvbnN0IGdldFRpbWVSYW5nZSA9IChxdWVyeTogQWxlcnRRdWVyeSwgcXVlcmllczogQWxlcnRRdWVyeVtdKTogVGltZVJhbmdlID0+IHtcbiAgaWYgKGlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKSkge1xuICAgIGNvbnN0IHJlbGF0aXZlID0gZ2V0VGltZVJhbmdlRm9yRXhwcmVzc2lvbihxdWVyeS5tb2RlbCwgcXVlcmllcyk7XG4gICAgcmV0dXJuIHJhbmdlVXRpbC5yZWxhdGl2ZVRvVGltZVJhbmdlKHJlbGF0aXZlKTtcbiAgfVxuXG4gIGlmICghcXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UpIHtcbiAgICBjb25zb2xlLndhcm4oYFF1ZXJ5IHdpdGggcmVmSWQ6ICR7cXVlcnkucmVmSWR9IGRpZCBub3QgaGF2ZSBhbnkgcmVsYXRpdmUgdGltZSByYW5nZSwgdXNpbmcgZGVmYXVsdC5gKTtcbiAgICByZXR1cm4gZ2V0RGVmYXVsdFRpbWVSYW5nZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJhbmdlVXRpbC5yZWxhdGl2ZVRvVGltZVJhbmdlKHF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlKTtcbn07XG5cbmNvbnN0IG1hcFRvUGFuZWxEYXRhID0gKFxuICBkYXRhQnlRdWVyeTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPlxuKTogT3BlcmF0b3JGdW5jdGlvbjxGZXRjaFJlc3BvbnNlPEFsZXJ0aW5nUXVlcnlSZXNwb25zZT4sIFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+ID0+IHtcbiAgcmV0dXJuIG1hcCgocmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IHJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPSB7fTtcblxuICAgIGZvciAoY29uc3QgW3JlZklkLCByZXN1bHRdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEucmVzdWx0cykpIHtcbiAgICAgIHJlc3VsdHNbcmVmSWRdID0ge1xuICAgICAgICB0aW1lUmFuZ2U6IGRhdGFCeVF1ZXJ5W3JlZklkXS50aW1lUmFuZ2UsXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgICAgc2VyaWVzOiByZXN1bHQuZnJhbWVzLm1hcChkYXRhRnJhbWVGcm9tSlNPTiksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9KTtcbn07XG5cbmNvbnN0IG1hcEVycm9yVG9QYW5lbERhdGEgPSAobGFzdFJlc3VsdDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiwgZXJyb3I6IEVycm9yKTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5RXJyb3IgPSB0b0RhdGFRdWVyeUVycm9yKGVycm9yKTtcblxuICByZXR1cm4gYXBwbHlDaGFuZ2UobGFzdFJlc3VsdCwgKHJlZklkLCBkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkVycm9yLFxuICAgICAgZXJyb3I6IHF1ZXJ5RXJyb3IsXG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBhcHBseUNoYW5nZSA9IChcbiAgaW5pdGlhbDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPixcbiAgY2hhbmdlOiAocmVmSWQ6IHN0cmluZywgZGF0YTogUGFuZWxEYXRhKSA9PiBQYW5lbERhdGFcbik6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPT4ge1xuICBjb25zdCBuZXh0UmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+ID0ge307XG5cbiAgZm9yIChjb25zdCBbcmVmSWQsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKGluaXRpYWwpKSB7XG4gICAgbmV4dFJlc3VsdFtyZWZJZF0gPSBjaGFuZ2UocmVmSWQsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIG5leHRSZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgRGF0YVF1ZXJ5LCBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTG9raVF1ZXJ5IH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9sb2tpL3R5cGVzJztcbmltcG9ydCB7IFByb21RdWVyeSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy90eXBlcyc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSwgaXNHcmFmYW5hUnVsZXNTb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi9ydWxlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGVydFJ1bGVUb1F1ZXJpZXMoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQgfCBudWxsKTogQWxlcnRRdWVyeVtdIHtcbiAgaWYgKCFjb21iaW5lZFJ1bGUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgeyBuYW1lc3BhY2UsIHJ1bGVyUnVsZSB9ID0gY29tYmluZWRSdWxlO1xuICBjb25zdCB7IHJ1bGVzU291cmNlIH0gPSBuYW1lc3BhY2U7XG5cbiAgaWYgKGlzR3JhZmFuYVJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgIGlmIChpc0dyYWZhbmFSdWxlclJ1bGUocnVsZXJSdWxlKSkge1xuICAgICAgcmV0dXJuIHJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0LmRhdGE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICBjb25zdCBtb2RlbCA9IGNsb3VkQWxlcnRSdWxlVG9Nb2RlbChydWxlc1NvdXJjZSwgY29tYmluZWRSdWxlKTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHJlZklkOiBtb2RlbC5yZWZJZCxcbiAgICAgICAgZGF0YXNvdXJjZVVpZDogcnVsZXNTb3VyY2UudWlkLFxuICAgICAgICBxdWVyeVR5cGU6ICcnLFxuICAgICAgICBtb2RlbCxcbiAgICAgICAgcmVsYXRpdmVUaW1lUmFuZ2U6IHtcbiAgICAgICAgICBmcm9tOiAzNjAsXG4gICAgICAgICAgdG86IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbmZ1bmN0aW9uIGNsb3VkQWxlcnRSdWxlVG9Nb2RlbChkc1NldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgcnVsZTogQ29tYmluZWRSdWxlKTogRGF0YVF1ZXJ5IHtcbiAgY29uc3QgcmVmSWQgPSAnQSc7XG5cbiAgc3dpdGNoIChkc1NldHRpbmdzLnR5cGUpIHtcbiAgICBjYXNlICdwcm9tZXRoZXVzJzoge1xuICAgICAgY29uc3QgcXVlcnk6IFByb21RdWVyeSA9IHtcbiAgICAgICAgcmVmSWQsXG4gICAgICAgIGV4cHI6IHJ1bGUucXVlcnksXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuXG4gICAgY2FzZSAnbG9raSc6IHtcbiAgICAgIGNvbnN0IHF1ZXJ5OiBMb2tpUXVlcnkgPSB7XG4gICAgICAgIHJlZklkLFxuICAgICAgICBleHByOiBydWxlLnF1ZXJ5LFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFF1ZXJ5IGZvciBkYXRhc291cmNlIHR5cGUgJHtkc1NldHRpbmdzLnR5cGV9IGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGJ5IGNsb3VkIGFsZXJ0IHJ1bGVzLmApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWxhdGl2ZVRpbWVSYW5nZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyBFeHByZXNzaW9uUXVlcnksIEV4cHJlc3Npb25RdWVyeVR5cGUgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzaW9ucy90eXBlcyc7XG5cbmNvbnN0IEZBTExfQkFDS19USU1FX1JBTkdFID0geyBmcm9tOiAyMTYwMCwgdG86IDAgfTtcblxuZXhwb3J0IGNvbnN0IGdldFRpbWVSYW5nZUZvckV4cHJlc3Npb24gPSAocXVlcnk6IEV4cHJlc3Npb25RdWVyeSwgcXVlcmllczogQWxlcnRRdWVyeVtdKTogUmVsYXRpdmVUaW1lUmFuZ2UgPT4ge1xuICBjb25zdCByZWZlcmVuY2VkUmVmSWRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IGdldFJlZmVyZW5jZWRJZHMocXVlcnksIHF1ZXJpZXMpO1xuXG4gIGlmICghcmVmZXJlbmNlZFJlZklkcykge1xuICAgIHJldHVybiBGQUxMX0JBQ0tfVElNRV9SQU5HRTtcbiAgfVxuXG4gIGNvbnN0IHsgZnJvbSwgdG8gfSA9IGdldFRpbWVSYW5nZXMocmVmZXJlbmNlZFJlZklkcywgcXVlcmllcyk7XG5cbiAgaWYgKCFmcm9tLmxlbmd0aCAmJiAhdG8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIEZBTExfQkFDS19USU1FX1JBTkdFO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBNYXRoLm1heCguLi5mcm9tKSxcbiAgICB0bzogTWF0aC5taW4oLi4udG8pLFxuICB9O1xufTtcblxuY29uc3QgZ2V0UmVmZXJlbmNlZElkcyA9IChtb2RlbDogRXhwcmVzc2lvblF1ZXJ5LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9PiB7XG4gIHN3aXRjaCAobW9kZWwudHlwZSkge1xuICAgIGNhc2UgRXhwcmVzc2lvblF1ZXJ5VHlwZS5jbGFzc2ljOlxuICAgICAgcmV0dXJuIGdldFJlZmVyZW5jZWRJZHNGb3JDbGFzc2ljQ29uZGl0aW9uKG1vZGVsKTtcbiAgICBjYXNlIEV4cHJlc3Npb25RdWVyeVR5cGUubWF0aDpcbiAgICAgIHJldHVybiBnZXRSZWZlcmVuY2VkSWRzRm9yTWF0aChtb2RlbCwgcXVlcmllcyk7XG4gICAgY2FzZSBFeHByZXNzaW9uUXVlcnlUeXBlLnJlc2FtcGxlOlxuICAgIGNhc2UgRXhwcmVzc2lvblF1ZXJ5VHlwZS5yZWR1Y2U6XG4gICAgICByZXR1cm4gZ2V0UmVmZXJlbmNlZElkc0ZvclJlZHVjZShtb2RlbCk7XG4gIH1cbn07XG5cbmNvbnN0IGdldFJlZmVyZW5jZWRJZHNGb3JDbGFzc2ljQ29uZGl0aW9uID0gKG1vZGVsOiBFeHByZXNzaW9uUXVlcnkpID0+IHtcbiAgcmV0dXJuIG1vZGVsLmNvbmRpdGlvbnM/Lm1hcCgoY29uZGl0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbi5xdWVyeS5wYXJhbXNbMF07XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0VGltZVJhbmdlcyA9IChyZWZlcmVuY2VkUmVmSWRzOiBzdHJpbmdbXSwgcXVlcmllczogQWxlcnRRdWVyeVtdKSA9PiB7XG4gIGxldCBmcm9tOiBudW1iZXJbXSA9IFtdO1xuICBsZXQgdG8gPSBbRkFMTF9CQUNLX1RJTUVfUkFOR0UudG9dO1xuICBmb3IgKGNvbnN0IHJlZmVyZW5jZWRSZWZJZHNLZXkgb2YgcmVmZXJlbmNlZFJlZklkcykge1xuICAgIGNvbnN0IHF1ZXJ5ID0gcXVlcmllcy5maW5kKChxdWVyeSkgPT4gcXVlcnkucmVmSWQgPT09IHJlZmVyZW5jZWRSZWZJZHNLZXkpO1xuXG4gICAgaWYgKCFxdWVyeSB8fCAhcXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmcm9tLnB1c2gocXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UuZnJvbSk7XG4gICAgdG8ucHVzaChxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZS50byk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZyb20sXG4gICAgdG8sXG4gIH07XG59O1xuXG5jb25zdCBnZXRSZWZlcmVuY2VkSWRzRm9yTWF0aCA9IChtb2RlbDogRXhwcmVzc2lvblF1ZXJ5LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pID0+IHtcbiAgcmV0dXJuIChcbiAgICBxdWVyaWVzXG4gICAgICAvLyBmaWx0ZXIgcXVlcmllcyBvZiB0eXBlIHF1ZXJ5IGFuZCBmaWx0ZXIgZXhwcmVzc2lvbiBvbiBpZiBpdCBpbmNsdWRlcyBhbnkgcmVmSWRzXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLnF1ZXJ5VHlwZSA9PT0gJ3F1ZXJ5JyAmJiBtb2RlbC5leHByZXNzaW9uPy5pbmNsdWRlcyhxLnJlZklkKSlcbiAgICAgIC5tYXAoKHEpID0+IHtcbiAgICAgICAgcmV0dXJuIHEucmVmSWQ7XG4gICAgICB9KVxuICApO1xufTtcblxuY29uc3QgZ2V0UmVmZXJlbmNlZElkc0ZvclJlZHVjZSA9IChtb2RlbDogRXhwcmVzc2lvblF1ZXJ5KSA9PiB7XG4gIHJldHVybiBtb2RlbC5leHByZXNzaW9uID8gW21vZGVsLmV4cHJlc3Npb25dIDogdW5kZWZpbmVkO1xufTtcbiIsImltcG9ydCB7IERhdGFRdWVyeSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgaXNFeHByZXNzaW9uUmVmZXJlbmNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMvdXRpbHMvRGF0YVNvdXJjZVdpdGhCYWNrZW5kJztcbmltcG9ydCB7IEV4cHJlc3Npb25RdWVyeSwgRXhwcmVzc2lvblF1ZXJ5VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgaXNFeHByZXNzaW9uUXVlcnkgPSAoZGF0YVF1ZXJ5PzogRGF0YVF1ZXJ5KTogZGF0YVF1ZXJ5IGlzIEV4cHJlc3Npb25RdWVyeSA9PiB7XG4gIGlmICghZGF0YVF1ZXJ5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRXhwcmVzc2lvblJlZmVyZW5jZShkYXRhUXVlcnkuZGF0YXNvdXJjZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBkYXRhUXVlcnkgYXMgRXhwcmVzc2lvblF1ZXJ5O1xuXG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbi50eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhFeHByZXNzaW9uUXVlcnlUeXBlKS5pbmNsdWRlcyhleHByZXNzaW9uLnR5cGUpO1xufTtcbiIsImltcG9ydCB7IEdyYW1tYXIgfSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCB7IENvbXBsZXRpb25JdGVtIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5jb25zdCBBR0dSRUdBVElPTl9PUEVSQVRPUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ3N1bScsXG4gICAgaW5zZXJ0VGV4dDogJ3N1bScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBzdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWluJyxcbiAgICBpbnNlcnRUZXh0OiAnbWluJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1pbmltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWF4JyxcbiAgICBpbnNlcnRUZXh0OiAnbWF4JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1heGltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXZnJyxcbiAgICBpbnNlcnRUZXh0OiAnYXZnJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHRoZSBhdmVyYWdlIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZGRldicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIGRldmlhdGlvbiBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzdGR2YXInLFxuICAgIGluc2VydFRleHQ6ICdzdGR2YXInLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudCcsXG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ291bnQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB2ZWN0b3InLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdib3R0b21rJyxcbiAgICBpbnNlcnRUZXh0OiAnYm90dG9taycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NtYWxsZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndG9waycsXG4gICAgaW5zZXJ0VGV4dDogJ3RvcGsnLFxuICAgIGRvY3VtZW50YXRpb246ICdMYXJnZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQSVBFX1BBUlNFUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ2pzb24nLFxuICAgIGluc2VydFRleHQ6ICdqc29uJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRXh0cmFjdGluZyBsYWJlbHMgZnJvbSB0aGUgbG9nIGxpbmUgdXNpbmcganNvbiBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdyZWdleHAnLFxuICAgIGluc2VydFRleHQ6ICdyZWdleHAgXCJcIicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0V4dHJhY3RpbmcgbGFiZWxzIGZyb20gdGhlIGxvZyBsaW5lIHVzaW5nIHJlZ2V4cCBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICAgIG1vdmU6IC0xLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdsb2dmbXQnLFxuICAgIGluc2VydFRleHQ6ICdsb2dmbXQnLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyBsb2dmbXQgcGFyc2VyLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAncGF0dGVybicsXG4gICAgaW5zZXJ0VGV4dDogJ3BhdHRlcm4nLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyBwYXR0ZXJuIHBhcnNlci4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjMrLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUElQRV9PUEVSQVRPUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ3Vud3JhcCcsXG4gICAgaW5zZXJ0VGV4dDogJ3Vud3JhcCcsXG4gICAgZGV0YWlsOiAndW53cmFwIGlkZW50aWZpZXInLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVGFrZSBsYWJlbHMgYW5kIHVzZSB0aGUgdmFsdWVzIGFzIHNhbXBsZSBkYXRhIGZvciBtZXRyaWMgYWdncmVnYXRpb25zLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndW5wYWNrJyxcbiAgICBpbnNlcnRUZXh0OiAndW5wYWNrJyxcbiAgICBkZXRhaWw6ICd1bnBhY2sgaWRlbnRpZmllcicsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdQYXJzZXMgYSBKU09OIGxvZyBsaW5lLCB1bnBhY2tpbmcgYWxsIGVtYmVkZGVkIGxhYmVscyBpbiB0aGUgcGFjayBzdGFnZS4gQSBzcGVjaWFsIHByb3BlcnR5IFwiX2VudHJ5XCIgd2lsbCBhbHNvIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgb3JpZ2luYWwgbG9nIGxpbmUuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdsYWJlbF9mb3JtYXQnLFxuICAgIGluc2VydFRleHQ6ICdsYWJlbF9mb3JtYXQnLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVXNlIHRvIHJlbmFtZSwgbW9kaWZ5IG9yIGFkZCBsYWJlbHMuIEZvciBleGFtcGxlLCB8IGxhYmVsX2Zvcm1hdCBmb289YmFyIC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2xpbmVfZm9ybWF0JyxcbiAgICBpbnNlcnRUZXh0OiAnbGluZV9mb3JtYXQnLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV3cml0ZXMgbG9nIGxpbmUgY29udGVudC4gRm9yIGV4YW1wbGUsIHwgbGluZV9mb3JtYXQgXCJ7ey5xdWVyeX19IHt7LmR1cmF0aW9ufX1cIiAuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFJBTkdFX1ZFQ19GVU5DVElPTlMgPSBbXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYXZnX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdhdmdfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdhdmdfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgYXZlcmFnZSBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21pbl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbWluX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbWluX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1pbmltdW0gb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ21heF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ21heF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtYXhpbXVtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3VtX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdW1fb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdW1fb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgc3VtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2NvdW50X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnY291bnRfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgY291bnQgb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdGR2YXJfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdGR2YXJfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgdmFyaWFuY2Ugb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdGRkZXZfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N0ZGRldl9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N0ZGRldl9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdUaGUgcG9wdWxhdGlvbiBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdxdWFudGlsZV9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdxdWFudGlsZV9vdmVyX3RpbWUoc2NhbGFyLCByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdieXRlc19vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnYnl0ZXNfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdieXRlc19vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvdW50cyB0aGUgYW1vdW50IG9mIGJ5dGVzIHVzZWQgYnkgZWFjaCBsb2cgc3RyZWFtIGZvciBhIGdpdmVuIHJhbmdlJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdieXRlc19yYXRlJyxcbiAgICBsYWJlbDogJ2J5dGVzX3JhdGUnLFxuICAgIGRldGFpbDogJ2J5dGVzX3JhdGUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBieXRlcyBwZXIgc2Vjb25kIGZvciBlYWNoIHN0cmVhbS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3JhdGUnLFxuICAgIGxhYmVsOiAncmF0ZScsXG4gICAgZGV0YWlsOiAncmF0ZSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgZW50cmllcyBwZXIgc2Vjb25kLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRlVOQ1RJT05TID0gWy4uLkFHR1JFR0FUSU9OX09QRVJBVE9SUywgLi4uUkFOR0VfVkVDX0ZVTkNUSU9OU107XG5leHBvcnQgY29uc3QgTE9LSV9LRVlXT1JEUyA9IFsuLi5GVU5DVElPTlMsIC4uLlBJUEVfT1BFUkFUT1JTLCAuLi5QSVBFX1BBUlNFUlNdLm1hcCgoa2V5d29yZCkgPT4ga2V5d29yZC5sYWJlbCk7XG5cbmV4cG9ydCBjb25zdCBsb2tpR3JhbW1hcjogR3JhbW1hciA9IHtcbiAgY29tbWVudDoge1xuICAgIHBhdHRlcm46IC8jLiovLFxuICB9LFxuICAnY29udGV4dC1hZ2dyZWdhdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvKCh3aXRob3V0fGJ5KVxccyopXFwoW14pXSpcXCkvLCAvLyBieSAoKVxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW14oKSxcXHNdW14sKV0qW14pLFxcc10qLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpXS8sXG4gICAgfSxcbiAgfSxcbiAgJ2NvbnRleHQtbGFiZWxzJzoge1xuICAgIHBhdHRlcm46IC9cXHtbXn1dKig/PX0/KS8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvIy4qLyxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW2EtekEtWl9dXFx3Kig/PVxccyooPXwhPXw9fnwhfikpLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgJ2xhYmVsLXZhbHVlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ2F0dHItdmFsdWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW3tdLyxcbiAgICB9LFxuICB9LFxuICAnY29udGV4dC1waXBlJzoge1xuICAgIHBhdHRlcm46IC9cXHNcXHxbXj1+XVxccz9cXHcqL2ksXG4gICAgaW5zaWRlOiB7XG4gICAgICAncGlwZS1vcGVyYXRvcic6IHtcbiAgICAgICAgcGF0dGVybjogL1xcfC9pLFxuICAgICAgICBhbGlhczogJ29wZXJhdG9yJyxcbiAgICAgIH0sXG4gICAgICAncGlwZS1vcGVyYXRpb25zJzoge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAke1suLi5QSVBFX1BBUlNFUlMsIC4uLlBJUEVfT1BFUkFUT1JTXS5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX1gLCAnaScpLFxuICAgICAgICBhbGlhczogJ2tleXdvcmQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBmdW5jdGlvbjogbmV3IFJlZ0V4cChgXFxcXGIoPzoke0ZVTkNUSU9OUy5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX0pKD89XFxcXHMqXFxcXCgpYCwgJ2knKSxcbiAgJ2NvbnRleHQtcmFuZ2UnOiBbXG4gICAge1xuICAgICAgcGF0dGVybjogL1xcW1teXFxdXSooPz1cXF0pLywgLy8gWzFtXVxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdHRlcm46IC8ob2Zmc2V0XFxzKylcXHcrLywgLy8gb2Zmc2V0IDFtXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBxdW90ZToge1xuICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXSkqXCIvLFxuICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICBncmVlZHk6IHRydWUsXG4gIH0sXG4gIGJhY2t0aWNrczoge1xuICAgIHBhdHRlcm46IC9gKD86XFxcXC58W15cXFxcYF0pKmAvLFxuICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICBncmVlZHk6IHRydWUsXG4gIH0sXG4gIG51bWJlcjogL1xcYi0/XFxkKygoXFwuXFxkKik/KFtlRV1bKy1dP1xcZCspPyk/XFxiLyxcbiAgb3BlcmF0b3I6IC9cXHM/KFxcfFs9fl0/fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dPylcXHM/L2ksXG4gIHB1bmN0dWF0aW9uOiAvW3t9KCksLl0vLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9raUdyYW1tYXI7XG4iLCJpbXBvcnQgeyBHcmFtbWFyIH0gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgeyBDb21wbGV0aW9uSXRlbSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuLy8gV2hlbiBjaGFuZ2luZyBSQVRFX1JBTkdFUywgY2hlY2sgaWYgTG9raS9Mb2dRTCByYW5nZXMgc2hvdWxkIGJlIGNoYW5nZWQgdG9vXG4vLyBAc2VlIHB1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvbGFuZ3VhZ2VfcHJvdmlkZXIudHNcbmV4cG9ydCBjb25zdCBSQVRFX1JBTkdFUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAgeyBsYWJlbDogJyRfX2ludGVydmFsJywgc29ydFZhbHVlOiAnJF9faW50ZXJ2YWwnIH0sXG4gIHsgbGFiZWw6ICckX19yYXRlX2ludGVydmFsJywgc29ydFZhbHVlOiAnJF9fcmF0ZV9pbnRlcnZhbCcgfSxcbiAgeyBsYWJlbDogJyRfX3JhbmdlJywgc29ydFZhbHVlOiAnJF9fcmFuZ2UnIH0sXG4gIHsgbGFiZWw6ICcxbScsIHNvcnRWYWx1ZTogJzAwOjAxOjAwJyB9LFxuICB7IGxhYmVsOiAnNW0nLCBzb3J0VmFsdWU6ICcwMDowNTowMCcgfSxcbiAgeyBsYWJlbDogJzEwbScsIHNvcnRWYWx1ZTogJzAwOjEwOjAwJyB9LFxuICB7IGxhYmVsOiAnMzBtJywgc29ydFZhbHVlOiAnMDA6MzA6MDAnIH0sXG4gIHsgbGFiZWw6ICcxaCcsIHNvcnRWYWx1ZTogJzAxOjAwOjAwJyB9LFxuICB7IGxhYmVsOiAnMWQnLCBzb3J0VmFsdWU6ICcyNDowMDowMCcgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBPUEVSQVRPUlMgPSBbJ2J5JywgJ2dyb3VwX2xlZnQnLCAnZ3JvdXBfcmlnaHQnLCAnaWdub3JpbmcnLCAnb24nLCAnb2Zmc2V0JywgJ3dpdGhvdXQnXTtcbmV4cG9ydCBjb25zdCBMT0dJQ0FMX09QRVJBVE9SUyA9IFsnb3InLCAnYW5kJywgJ3VubGVzcyddO1xuXG5jb25zdCBUUklHT05PTUVUUklDX0ZVTkNUSU9OUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAge1xuICAgIGxhYmVsOiAnYWNvcycsXG4gICAgaW5zZXJ0VGV4dDogJ2Fjb3MnLFxuICAgIGRldGFpbDogJ2Fjb3ModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBhcmNjb3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhY29zaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2Fjb3NoJyxcbiAgICBkZXRhaWw6ICdhY29zaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGludmVyc2UgaHlwZXJib2xpYyBjb3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhc2luJyxcbiAgICBpbnNlcnRUZXh0OiAnYXNpbicsXG4gICAgZGV0YWlsOiAnYXNpbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGFyY3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhc2luaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2FzaW5oJyxcbiAgICBkZXRhaWw6ICdhc2luaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGludmVyc2UgaHlwZXJib2xpYyBzaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXRhbicsXG4gICAgaW5zZXJ0VGV4dDogJ2F0YW4nLFxuICAgIGRldGFpbDogJ2F0YW4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBhcmN0YW5nZW50IG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXRhbmgnLFxuICAgIGluc2VydFRleHQ6ICdhdGFuaCcsXG4gICAgZGV0YWlsOiAnYXRhbmgodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBpbnZlcnNlIGh5cGVyYm9saWMgdGFuZ2VudCBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2NvcycsXG4gICAgaW5zZXJ0VGV4dDogJ2NvcycsXG4gICAgZGV0YWlsOiAnY29zKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgY29zaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnY29zaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2Nvc2gnLFxuICAgIGRldGFpbDogJ2Nvc2godiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBoeXBlcmJvbGljIGNvc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3NpbicsXG4gICAgaW5zZXJ0VGV4dDogJ3NpbicsXG4gICAgZGV0YWlsOiAnc2luKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3NpbmgnLFxuICAgIGluc2VydFRleHQ6ICdzaW5oJyxcbiAgICBkZXRhaWw6ICdzaW5oKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaHlwZXJib2xpYyBzaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndGFuJyxcbiAgICBpbnNlcnRUZXh0OiAndGFuJyxcbiAgICBkZXRhaWw6ICd0YW4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSB0YW5nZW50IG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndGFuaCcsXG4gICAgaW5zZXJ0VGV4dDogJ3RhbmgnLFxuICAgIGRldGFpbDogJ3RhbmgodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBoeXBlcmJvbGljIHRhbmdlbnQgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuXTtcblxuY29uc3QgQUdHUkVHQVRJT05fT1BFUkFUT1JTOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdzdW0nLFxuICAgIGluc2VydFRleHQ6ICdzdW0nLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgc3VtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ21pbicsXG4gICAgaW5zZXJ0VGV4dDogJ21pbicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NlbGVjdCBtaW5pbXVtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ21heCcsXG4gICAgaW5zZXJ0VGV4dDogJ21heCcsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NlbGVjdCBtYXhpbXVtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2F2ZycsXG4gICAgaW5zZXJ0VGV4dDogJ2F2ZycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSB0aGUgYXZlcmFnZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdncm91cCcsXG4gICAgaW5zZXJ0VGV4dDogJ2dyb3VwJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQWxsIHZhbHVlcyBpbiB0aGUgcmVzdWx0aW5nIHZlY3RvciBhcmUgMScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZGRldicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIGRldmlhdGlvbiBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzdGR2YXInLFxuICAgIGluc2VydFRleHQ6ICdzdGR2YXInLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudCcsXG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ291bnQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB2ZWN0b3InLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudF92YWx1ZXMnLFxuICAgIGluc2VydFRleHQ6ICdjb3VudF92YWx1ZXMnLFxuICAgIGRvY3VtZW50YXRpb246ICdDb3VudCBudW1iZXIgb2YgZWxlbWVudHMgd2l0aCB0aGUgc2FtZSB2YWx1ZScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2JvdHRvbWsnLFxuICAgIGluc2VydFRleHQ6ICdib3R0b21rJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU21hbGxlc3QgayBlbGVtZW50cyBieSBzYW1wbGUgdmFsdWUnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICd0b3BrJyxcbiAgICBpbnNlcnRUZXh0OiAndG9waycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0xhcmdlc3QgayBlbGVtZW50cyBieSBzYW1wbGUgdmFsdWUnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdxdWFudGlsZScsXG4gICAgaW5zZXJ0VGV4dDogJ3F1YW50aWxlJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBGVU5DVElPTlMgPSBbXG4gIC4uLkFHR1JFR0FUSU9OX09QRVJBVE9SUyxcbiAgLi4uVFJJR09OT01FVFJJQ19GVU5DVElPTlMsXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYWJzJyxcbiAgICBsYWJlbDogJ2FicycsXG4gICAgZGV0YWlsOiAnYWJzKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgaW5wdXQgdmVjdG9yIHdpdGggYWxsIHNhbXBsZSB2YWx1ZXMgY29udmVydGVkIHRvIHRoZWlyIGFic29sdXRlIHZhbHVlLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYWJzZW50JyxcbiAgICBsYWJlbDogJ2Fic2VudCcsXG4gICAgZGV0YWlsOiAnYWJzZW50KHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgYW4gZW1wdHkgdmVjdG9yIGlmIHRoZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBhbnkgZWxlbWVudHMgYW5kIGEgMS1lbGVtZW50IHZlY3RvciB3aXRoIHRoZSB2YWx1ZSAxIGlmIHRoZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBubyBlbGVtZW50cy4gVGhpcyBpcyB1c2VmdWwgZm9yIGFsZXJ0aW5nIG9uIHdoZW4gbm8gdGltZSBzZXJpZXMgZXhpc3QgZm9yIGEgZ2l2ZW4gbWV0cmljIG5hbWUgYW5kIGxhYmVsIGNvbWJpbmF0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYWJzZW50X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdhYnNlbnRfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdhYnNlbnQodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgYW4gZW1wdHkgdmVjdG9yIGlmIHRoZSByYW5nZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBhbnkgZWxlbWVudHMgYW5kIGEgMS1lbGVtZW50IHZlY3RvciB3aXRoIHRoZSB2YWx1ZSAxIGlmIHRoZSByYW5nZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBubyBlbGVtZW50cy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NlaWwnLFxuICAgIGxhYmVsOiAnY2VpbCcsXG4gICAgZGV0YWlsOiAnY2VpbCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JvdW5kcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHVwIHRvIHRoZSBuZWFyZXN0IGludGVnZXIuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjaGFuZ2VzJyxcbiAgICBsYWJlbDogJ2NoYW5nZXMnLFxuICAgIGRldGFpbDogJ2NoYW5nZXModiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0ZvciBlYWNoIGlucHV0IHRpbWUgc2VyaWVzLCBgY2hhbmdlcyh2IHJhbmdlLXZlY3RvcilgIHJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyBpdHMgdmFsdWUgaGFzIGNoYW5nZWQgd2l0aGluIHRoZSBwcm92aWRlZCB0aW1lIHJhbmdlIGFzIGFuIGluc3RhbnQgdmVjdG9yLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2xhbXAnLFxuICAgIGxhYmVsOiAnY2xhbXAnLFxuICAgIGRldGFpbDogJ2NsYW1wKHYgaW5zdGFudC12ZWN0b3IsIG1pbiBzY2FsYXIsIG1heCBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NsYW1wcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHRvIGhhdmUgYSBsb3dlciBsaW1pdCBvZiBgbWluYCBhbmQgYW4gdXBwZXIgbGltaXQgb2YgYG1heGAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjbGFtcF9tYXgnLFxuICAgIGxhYmVsOiAnY2xhbXBfbWF4JyxcbiAgICBkZXRhaWw6ICdjbGFtcF9tYXgodiBpbnN0YW50LXZlY3RvciwgbWF4IHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDbGFtcHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCB0byBoYXZlIGFuIHVwcGVyIGxpbWl0IG9mIGBtYXhgLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2xhbXBfbWluJyxcbiAgICBsYWJlbDogJ2NsYW1wX21pbicsXG4gICAgZGV0YWlsOiAnY2xhbXBfbWluKHYgaW5zdGFudC12ZWN0b3IsIG1pbiBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2xhbXBzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdG8gaGF2ZSBhIGxvd2VyIGxpbWl0IG9mIGBtaW5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfc2NhbGFyJyxcbiAgICBsYWJlbDogJ2NvdW50X3NjYWxhcicsXG4gICAgZGV0YWlsOiAnY291bnRfc2NhbGFyKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIHRpbWUgc2VyaWVzIHZlY3RvciBhcyBhIHNjYWxhci4gVGhpcyBpcyBpbiBjb250cmFzdCB0byB0aGUgYGNvdW50KClgIGFnZ3JlZ2F0aW9uIG9wZXJhdG9yLCB3aGljaCBhbHdheXMgcmV0dXJucyBhIHZlY3RvciAoYW4gZW1wdHkgb25lIGlmIHRoZSBpbnB1dCB2ZWN0b3IgaXMgZW1wdHkpIGFuZCBhbGxvd3MgZ3JvdXBpbmcgYnkgbGFiZWxzIHZpYSBhIGBieWAgY2xhdXNlLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGVnJyxcbiAgICBsYWJlbDogJ2RlZycsXG4gICAgZGV0YWlsOiAnZGVnKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ29udmVydHMgcmFkaWFucyB0byBkZWdyZWVzIGZvciBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGF5X29mX21vbnRoJyxcbiAgICBsYWJlbDogJ2RheV9vZl9tb250aCcsXG4gICAgZGV0YWlsOiAnZGF5X29mX21vbnRoKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgZGF5IG9mIHRoZSBtb250aCBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMSB0byAzMS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2RheV9vZl93ZWVrJyxcbiAgICBsYWJlbDogJ2RheV9vZl93ZWVrJyxcbiAgICBkZXRhaWw6ICdkYXlfb2Zfd2Vlayh2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBkYXkgb2YgdGhlIHdlZWsgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDAgdG8gNiwgd2hlcmUgMCBtZWFucyBTdW5kYXkgZXRjLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGF5c19pbl9tb250aCcsXG4gICAgbGFiZWw6ICdkYXlzX2luX21vbnRoJyxcbiAgICBkZXRhaWw6ICdkYXlzX2luX21vbnRoKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRoIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAyOCB0byAzMS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2RlbHRhJyxcbiAgICBsYWJlbDogJ2RlbHRhJyxcbiAgICBkZXRhaWw6ICdkZWx0YSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBmaXJzdCBhbmQgbGFzdCB2YWx1ZSBvZiBlYWNoIHRpbWUgc2VyaWVzIGVsZW1lbnQgaW4gYSByYW5nZSB2ZWN0b3IgYHZgLCByZXR1cm5pbmcgYW4gaW5zdGFudCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gZGVsdGFzIGFuZCBlcXVpdmFsZW50IGxhYmVscy4gVGhlIGRlbHRhIGlzIGV4dHJhcG9sYXRlZCB0byBjb3ZlciB0aGUgZnVsbCB0aW1lIHJhbmdlIGFzIHNwZWNpZmllZCBpbiB0aGUgcmFuZ2UgdmVjdG9yIHNlbGVjdG9yLCBzbyB0aGF0IGl0IGlzIHBvc3NpYmxlIHRvIGdldCBhIG5vbi1pbnRlZ2VyIHJlc3VsdCBldmVuIGlmIHRoZSBzYW1wbGUgdmFsdWVzIGFyZSBhbGwgaW50ZWdlcnMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkZXJpdicsXG4gICAgbGFiZWw6ICdkZXJpdicsXG4gICAgZGV0YWlsOiAnZGVyaXYodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIHBlci1zZWNvbmQgZGVyaXZhdGl2ZSBvZiB0aGUgdGltZSBzZXJpZXMgaW4gYSByYW5nZSB2ZWN0b3IgYHZgLCB1c2luZyBzaW1wbGUgbGluZWFyIHJlZ3Jlc3Npb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkcm9wX2NvbW1vbl9sYWJlbHMnLFxuICAgIGxhYmVsOiAnZHJvcF9jb21tb25fbGFiZWxzJyxcbiAgICBkZXRhaWw6ICdkcm9wX2NvbW1vbl9sYWJlbHMoaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRHJvcHMgYWxsIGxhYmVscyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhbmQgdmFsdWUgYWNyb3NzIGFsbCBzZXJpZXMgaW4gdGhlIGlucHV0IHZlY3Rvci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2V4cCcsXG4gICAgbGFiZWw6ICdleHAnLFxuICAgIGRldGFpbDogJ2V4cCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBleHBvbmVudGlhbCBmdW5jdGlvbiBmb3IgYWxsIGVsZW1lbnRzIGluIGB2YC5cXG5TcGVjaWFsIGNhc2VzIGFyZTpcXG4qIGBFeHAoK0luZikgPSArSW5mYCBcXG4qIGBFeHAoTmFOKSA9IE5hTmAnLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2Zsb29yJyxcbiAgICBsYWJlbDogJ2Zsb29yJyxcbiAgICBkZXRhaWw6ICdmbG9vcih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JvdW5kcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIGRvd24gdG8gdGhlIG5lYXJlc3QgaW50ZWdlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2hpc3RvZ3JhbV9xdWFudGlsZScsXG4gICAgbGFiZWw6ICdoaXN0b2dyYW1fcXVhbnRpbGUnLFxuICAgIGRldGFpbDogJ2hpc3RvZ3JhbV9xdWFudGlsZSjPhiBmbG9hdCwgYiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgz4YtcXVhbnRpbGUgKDAg4omkIM+GIOKJpCAxKSBmcm9tIHRoZSBidWNrZXRzIGBiYCBvZiBhIGhpc3RvZ3JhbS4gVGhlIHNhbXBsZXMgaW4gYGJgIGFyZSB0aGUgY291bnRzIG9mIG9ic2VydmF0aW9ucyBpbiBlYWNoIGJ1Y2tldC4gRWFjaCBzYW1wbGUgbXVzdCBoYXZlIGEgbGFiZWwgYGxlYCB3aGVyZSB0aGUgbGFiZWwgdmFsdWUgZGVub3RlcyB0aGUgaW5jbHVzaXZlIHVwcGVyIGJvdW5kIG9mIHRoZSBidWNrZXQuIChTYW1wbGVzIHdpdGhvdXQgc3VjaCBhIGxhYmVsIGFyZSBzaWxlbnRseSBpZ25vcmVkLikgVGhlIGhpc3RvZ3JhbSBtZXRyaWMgdHlwZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVzIHRpbWUgc2VyaWVzIHdpdGggdGhlIGBfYnVja2V0YCBzdWZmaXggYW5kIHRoZSBhcHByb3ByaWF0ZSBsYWJlbHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdob2x0X3dpbnRlcnMnLFxuICAgIGxhYmVsOiAnaG9sdF93aW50ZXJzJyxcbiAgICBkZXRhaWw6ICdob2x0X3dpbnRlcnModiByYW5nZS12ZWN0b3IsIHNmIHNjYWxhciwgdGYgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdQcm9kdWNlcyBhIHNtb290aGVkIHZhbHVlIGZvciB0aW1lIHNlcmllcyBiYXNlZCBvbiB0aGUgcmFuZ2UgaW4gYHZgLiBUaGUgbG93ZXIgdGhlIHNtb290aGluZyBmYWN0b3IgYHNmYCwgdGhlIG1vcmUgaW1wb3J0YW5jZSBpcyBnaXZlbiB0byBvbGQgZGF0YS4gVGhlIGhpZ2hlciB0aGUgdHJlbmQgZmFjdG9yIGB0ZmAsIHRoZSBtb3JlIHRyZW5kcyBpbiB0aGUgZGF0YSBpcyBjb25zaWRlcmVkLiBCb3RoIGBzZmAgYW5kIGB0ZmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdob3VyJyxcbiAgICBsYWJlbDogJ2hvdXInLFxuICAgIGRldGFpbDogJ2hvdXIodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSBob3VyIG9mIHRoZSBkYXkgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDAgdG8gMjMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdpZGVsdGEnLFxuICAgIGxhYmVsOiAnaWRlbHRhJyxcbiAgICBkZXRhaWw6ICdpZGVsdGEodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbGFzdCB0d28gc2FtcGxlcyBpbiB0aGUgcmFuZ2UgdmVjdG9yIGB2YCwgcmV0dXJuaW5nIGFuIGluc3RhbnQgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGRlbHRhcyBhbmQgZXF1aXZhbGVudCBsYWJlbHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdpbmNyZWFzZScsXG4gICAgbGFiZWw6ICdpbmNyZWFzZScsXG4gICAgZGV0YWlsOiAnaW5jcmVhc2UodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGluY3JlYXNlIGluIHRoZSB0aW1lIHNlcmllcyBpbiB0aGUgcmFuZ2UgdmVjdG9yLiBCcmVha3MgaW4gbW9ub3RvbmljaXR5IChzdWNoIGFzIGNvdW50ZXIgcmVzZXRzIGR1ZSB0byB0YXJnZXQgcmVzdGFydHMpIGFyZSBhdXRvbWF0aWNhbGx5IGFkanVzdGVkIGZvci4gVGhlIGluY3JlYXNlIGlzIGV4dHJhcG9sYXRlZCB0byBjb3ZlciB0aGUgZnVsbCB0aW1lIHJhbmdlIGFzIHNwZWNpZmllZCBpbiB0aGUgcmFuZ2UgdmVjdG9yIHNlbGVjdG9yLCBzbyB0aGF0IGl0IGlzIHBvc3NpYmxlIHRvIGdldCBhIG5vbi1pbnRlZ2VyIHJlc3VsdCBldmVuIGlmIGEgY291bnRlciBpbmNyZWFzZXMgb25seSBieSBpbnRlZ2VyIGluY3JlbWVudHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdpcmF0ZScsXG4gICAgbGFiZWw6ICdpcmF0ZScsXG4gICAgZGV0YWlsOiAnaXJhdGUodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIHBlci1zZWNvbmQgaW5zdGFudCByYXRlIG9mIGluY3JlYXNlIG9mIHRoZSB0aW1lIHNlcmllcyBpbiB0aGUgcmFuZ2UgdmVjdG9yLiBUaGlzIGlzIGJhc2VkIG9uIHRoZSBsYXN0IHR3byBkYXRhIHBvaW50cy4gQnJlYWtzIGluIG1vbm90b25pY2l0eSAoc3VjaCBhcyBjb3VudGVyIHJlc2V0cyBkdWUgdG8gdGFyZ2V0IHJlc3RhcnRzKSBhcmUgYXV0b21hdGljYWxseSBhZGp1c3RlZCBmb3IuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsYWJlbF9qb2luJyxcbiAgICBsYWJlbDogJ2xhYmVsX2pvaW4nLFxuICAgIGRldGFpbDpcbiAgICAgICdsYWJlbF9qb2luKHYgaW5zdGFudC12ZWN0b3IsIGRzdF9sYWJlbCBzdHJpbmcsIHNlcGFyYXRvciBzdHJpbmcsIHNyY19sYWJlbF8xIHN0cmluZywgc3JjX2xhYmVsXzIgc3RyaW5nLCAuLi4pJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0ZvciBlYWNoIHRpbWVzZXJpZXMgaW4gYHZgLCBqb2lucyBhbGwgdGhlIHZhbHVlcyBvZiBhbGwgdGhlIGBzcmNfbGFiZWxzYCB1c2luZyBgc2VwYXJhdG9yYCBhbmQgcmV0dXJucyB0aGUgdGltZXNlcmllcyB3aXRoIHRoZSBsYWJlbCBgZHN0X2xhYmVsYCBjb250YWluaW5nIHRoZSBqb2luZWQgdmFsdWUuIFRoZXJlIGNhbiBiZSBhbnkgbnVtYmVyIG9mIGBzcmNfbGFiZWxzYCBpbiB0aGlzIGZ1bmN0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbGFiZWxfcmVwbGFjZScsXG4gICAgbGFiZWw6ICdsYWJlbF9yZXBsYWNlJyxcbiAgICBkZXRhaWw6ICdsYWJlbF9yZXBsYWNlKHYgaW5zdGFudC12ZWN0b3IsIGRzdF9sYWJlbCBzdHJpbmcsIHJlcGxhY2VtZW50IHN0cmluZywgc3JjX2xhYmVsIHN0cmluZywgcmVnZXggc3RyaW5nKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgIFwiRm9yIGVhY2ggdGltZXNlcmllcyBpbiBgdmAsIGBsYWJlbF9yZXBsYWNlKHYgaW5zdGFudC12ZWN0b3IsIGRzdF9sYWJlbCBzdHJpbmcsIHJlcGxhY2VtZW50IHN0cmluZywgc3JjX2xhYmVsIHN0cmluZywgcmVnZXggc3RyaW5nKWAgIG1hdGNoZXMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBgcmVnZXhgIGFnYWluc3QgdGhlIGxhYmVsIGBzcmNfbGFiZWxgLiAgSWYgaXQgbWF0Y2hlcywgdGhlbiB0aGUgdGltZXNlcmllcyBpcyByZXR1cm5lZCB3aXRoIHRoZSBsYWJlbCBgZHN0X2xhYmVsYCByZXBsYWNlZCBieSB0aGUgZXhwYW5zaW9uIG9mIGByZXBsYWNlbWVudGAuIGAkMWAgaXMgcmVwbGFjZWQgd2l0aCB0aGUgZmlyc3QgbWF0Y2hpbmcgc3ViZ3JvdXAsIGAkMmAgd2l0aCB0aGUgc2Vjb25kIGV0Yy4gSWYgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBkb2Vzbid0IG1hdGNoIHRoZW4gdGhlIHRpbWVzZXJpZXMgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlwiLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xuJyxcbiAgICBsYWJlbDogJ2xuJyxcbiAgICBkZXRhaWw6ICdsbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBuYXR1cmFsIGxvZ2FyaXRobSBmb3IgYWxsIGVsZW1lbnRzIGluIGB2YC5cXG5TcGVjaWFsIGNhc2VzIGFyZTpcXG4gKiBgbG4oK0luZikgPSArSW5mYFxcbiAqIGBsbigwKSA9IC1JbmZgXFxuICogYGxuKHggPCAwKSA9IE5hTmBcXG4gKiBgbG4oTmFOKSA9IE5hTmAnLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xvZzInLFxuICAgIGxhYmVsOiAnbG9nMicsXG4gICAgZGV0YWlsOiAnbG9nMih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBiaW5hcnkgbG9nYXJpdGhtIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLiBUaGUgc3BlY2lhbCBjYXNlcyBhcmUgZXF1aXZhbGVudCB0byB0aG9zZSBpbiBgbG5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbG9nMTAnLFxuICAgIGxhYmVsOiAnbG9nMTAnLFxuICAgIGRldGFpbDogJ2xvZzEwKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGRlY2ltYWwgbG9nYXJpdGhtIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLiBUaGUgc3BlY2lhbCBjYXNlcyBhcmUgZXF1aXZhbGVudCB0byB0aG9zZSBpbiBgbG5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWludXRlJyxcbiAgICBsYWJlbDogJ21pbnV0ZScsXG4gICAgZGV0YWlsOiAnbWludXRlKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG1pbnV0ZSBvZiB0aGUgaG91ciBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMCB0byA1OS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21vbnRoJyxcbiAgICBsYWJlbDogJ21vbnRoJyxcbiAgICBkZXRhaWw6ICdtb250aCh2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBtb250aCBvZiB0aGUgeWVhciBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMSB0byAxMiwgd2hlcmUgMSBtZWFucyBKYW51YXJ5IGV0Yy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3BpJyxcbiAgICBsYWJlbDogJ3BpJyxcbiAgICBkZXRhaWw6ICdwaSgpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyBwaScsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncHJlZGljdF9saW5lYXInLFxuICAgIGxhYmVsOiAncHJlZGljdF9saW5lYXInLFxuICAgIGRldGFpbDogJ3ByZWRpY3RfbGluZWFyKHYgcmFuZ2UtdmVjdG9yLCB0IHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUHJlZGljdHMgdGhlIHZhbHVlIG9mIHRpbWUgc2VyaWVzIGB0YCBzZWNvbmRzIGZyb20gbm93LCBiYXNlZCBvbiB0aGUgcmFuZ2UgdmVjdG9yIGB2YCwgdXNpbmcgc2ltcGxlIGxpbmVhciByZWdyZXNzaW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmFkJyxcbiAgICBsYWJlbDogJ3JhZCcsXG4gICAgZGV0YWlsOiAncmFkKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ29udmVydHMgZGVncmVlcyB0byByYWRpYW5zIGZvciBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmF0ZScsXG4gICAgbGFiZWw6ICdyYXRlJyxcbiAgICBkZXRhaWw6ICdyYXRlKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgIFwiQ2FsY3VsYXRlcyB0aGUgcGVyLXNlY29uZCBhdmVyYWdlIHJhdGUgb2YgaW5jcmVhc2Ugb2YgdGhlIHRpbWUgc2VyaWVzIGluIHRoZSByYW5nZSB2ZWN0b3IuIEJyZWFrcyBpbiBtb25vdG9uaWNpdHkgKHN1Y2ggYXMgY291bnRlciByZXNldHMgZHVlIHRvIHRhcmdldCByZXN0YXJ0cykgYXJlIGF1dG9tYXRpY2FsbHkgYWRqdXN0ZWQgZm9yLiBBbHNvLCB0aGUgY2FsY3VsYXRpb24gZXh0cmFwb2xhdGVzIHRvIHRoZSBlbmRzIG9mIHRoZSB0aW1lIHJhbmdlLCBhbGxvd2luZyBmb3IgbWlzc2VkIHNjcmFwZXMgb3IgaW1wZXJmZWN0IGFsaWdubWVudCBvZiBzY3JhcGUgY3ljbGVzIHdpdGggdGhlIHJhbmdlJ3MgdGltZSBwZXJpb2QuXCIsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmVzZXRzJyxcbiAgICBsYWJlbDogJ3Jlc2V0cycsXG4gICAgZGV0YWlsOiAncmVzZXRzKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdGb3IgZWFjaCBpbnB1dCB0aW1lIHNlcmllcywgYHJlc2V0cyh2IHJhbmdlLXZlY3RvcilgIHJldHVybnMgdGhlIG51bWJlciBvZiBjb3VudGVyIHJlc2V0cyB3aXRoaW4gdGhlIHByb3ZpZGVkIHRpbWUgcmFuZ2UgYXMgYW4gaW5zdGFudCB2ZWN0b3IuIEFueSBkZWNyZWFzZSBpbiB0aGUgdmFsdWUgYmV0d2VlbiB0d28gY29uc2VjdXRpdmUgc2FtcGxlcyBpcyBpbnRlcnByZXRlZCBhcyBhIGNvdW50ZXIgcmVzZXQuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyb3VuZCcsXG4gICAgbGFiZWw6ICdyb3VuZCcsXG4gICAgZGV0YWlsOiAncm91bmQodiBpbnN0YW50LXZlY3RvciwgdG9fbmVhcmVzdD0xIHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUm91bmRzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdG8gdGhlIG5lYXJlc3QgaW50ZWdlci4gVGllcyBhcmUgcmVzb2x2ZWQgYnkgcm91bmRpbmcgdXAuIFRoZSBvcHRpb25hbCBgdG9fbmVhcmVzdGAgYXJndW1lbnQgYWxsb3dzIHNwZWNpZnlpbmcgdGhlIG5lYXJlc3QgbXVsdGlwbGUgdG8gd2hpY2ggdGhlIHNhbXBsZSB2YWx1ZXMgc2hvdWxkIGJlIHJvdW5kZWQuIFRoaXMgbXVsdGlwbGUgbWF5IGFsc28gYmUgYSBmcmFjdGlvbi4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NjYWxhcicsXG4gICAgbGFiZWw6ICdzY2FsYXInLFxuICAgIGRldGFpbDogJ3NjYWxhcih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdHaXZlbiBhIHNpbmdsZS1lbGVtZW50IGlucHV0IHZlY3RvciwgYHNjYWxhcih2IGluc3RhbnQtdmVjdG9yKWAgcmV0dXJucyB0aGUgc2FtcGxlIHZhbHVlIG9mIHRoYXQgc2luZ2xlIGVsZW1lbnQgYXMgYSBzY2FsYXIuIElmIHRoZSBpbnB1dCB2ZWN0b3IgZG9lcyBub3QgaGF2ZSBleGFjdGx5IG9uZSBlbGVtZW50LCBgc2NhbGFyYCB3aWxsIHJldHVybiBgTmFOYC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NnbicsXG4gICAgbGFiZWw6ICdzZ24nLFxuICAgIGRldGFpbDogJ3Nnbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIGEgdmVjdG9yIHdpdGggYWxsIHNhbXBsZSB2YWx1ZXMgY29udmVydGVkIHRvIHRoZWlyIHNpZ24sIGRlZmluZWQgYXMgdGhpczogMSBpZiB2IGlzIHBvc2l0aXZlLCAtMSBpZiB2IGlzIG5lZ2F0aXZlIGFuZCAwIGlmIHYgaXMgZXF1YWwgdG8gemVyby4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NvcnQnLFxuICAgIGxhYmVsOiAnc29ydCcsXG4gICAgZGV0YWlsOiAnc29ydCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdmVjdG9yIGVsZW1lbnRzIHNvcnRlZCBieSB0aGVpciBzYW1wbGUgdmFsdWVzLCBpbiBhc2NlbmRpbmcgb3JkZXIuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzb3J0X2Rlc2MnLFxuICAgIGxhYmVsOiAnc29ydF9kZXNjJyxcbiAgICBkZXRhaWw6ICdzb3J0X2Rlc2ModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHZlY3RvciBlbGVtZW50cyBzb3J0ZWQgYnkgdGhlaXIgc2FtcGxlIHZhbHVlcywgaW4gZGVzY2VuZGluZyBvcmRlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NxcnQnLFxuICAgIGxhYmVsOiAnc3FydCcsXG4gICAgZGV0YWlsOiAnc3FydCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZXMgdGhlIHNxdWFyZSByb290IG9mIGFsbCBlbGVtZW50cyBpbiBgdmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICd0aW1lJyxcbiAgICBsYWJlbDogJ3RpbWUnLFxuICAgIGRldGFpbDogJ3RpbWUoKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSBKYW51YXJ5IDEsIDE5NzAgVVRDLiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBhY3R1YWxseSByZXR1cm4gdGhlIGN1cnJlbnQgdGltZSwgYnV0IHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBleHByZXNzaW9uIGlzIHRvIGJlIGV2YWx1YXRlZC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3RpbWVzdGFtcCcsXG4gICAgbGFiZWw6ICd0aW1lc3RhbXAnLFxuICAgIGRldGFpbDogJ3RpbWVzdGFtcCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSB0aW1lc3RhbXAgb2YgZWFjaCBvZiB0aGUgc2FtcGxlcyBvZiB0aGUgZ2l2ZW4gdmVjdG9yIGFzIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSBKYW51YXJ5IDEsIDE5NzAgVVRDLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAndmVjdG9yJyxcbiAgICBsYWJlbDogJ3ZlY3RvcicsXG4gICAgZGV0YWlsOiAndmVjdG9yKHMgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdGhlIHNjYWxhciBgc2AgYXMgYSB2ZWN0b3Igd2l0aCBubyBsYWJlbHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICd5ZWFyJyxcbiAgICBsYWJlbDogJ3llYXInLFxuICAgIGRldGFpbDogJ3llYXIodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSB5ZWFyIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdhdmdfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2F2Z19vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2F2Z19vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBhdmVyYWdlIHZhbHVlIG9mIGFsbCBwb2ludHMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21pbl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbWluX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbWluX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1pbmltdW0gdmFsdWUgb2YgYWxsIHBvaW50cyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWF4X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdtYXhfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbWF4aW11bSB2YWx1ZSBvZiBhbGwgcG9pbnRzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdW1fb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N1bV9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N1bV9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBzdW0gb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2NvdW50X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnY291bnRfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgY291bnQgb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3F1YW50aWxlX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAncXVhbnRpbGVfb3Zlcl90aW1lKHNjYWxhciwgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSDPhi1xdWFudGlsZSAoMCDiiaQgz4Yg4omkIDEpIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3RkZGV2X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3RkZGV2X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N0ZHZhcl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3RkdmFyX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgdmFyaWFuY2Ugb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbGFzdF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbGFzdF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2xhc3Rfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbW9zdCByZWNlbnQgcG9pbnQgdmFsdWUgaW4gc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUFJPTV9LRVlXT1JEUyA9IEZVTkNUSU9OUy5tYXAoKGtleXdvcmQpID0+IGtleXdvcmQubGFiZWwpO1xuXG5leHBvcnQgY29uc3QgcHJvbXFsR3JhbW1hcjogR3JhbW1hciA9IHtcbiAgY29tbWVudDoge1xuICAgIHBhdHRlcm46IC8jLiovLFxuICB9LFxuICAnY29udGV4dC1hZ2dyZWdhdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvKChieXx3aXRob3V0KVxccyopXFwoW14pXSpcXCkvLCAvLyBieSAoKVxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW14oKSxcXHNdW14sKV0qW14pLFxcc10qLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpXS8sXG4gICAgfSxcbiAgfSxcbiAgJ2NvbnRleHQtbGFiZWxzJzoge1xuICAgIHBhdHRlcm46IC9cXHtbXn1dKig/PX0/KS8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvIy4qLyxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW2Etel9dXFx3Kig/PVxccyooPXwhPXw9fnwhfikpLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgJ2xhYmVsLXZhbHVlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ2F0dHItdmFsdWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW3tdLyxcbiAgICB9LFxuICB9LFxuICBmdW5jdGlvbjogbmV3IFJlZ0V4cChgXFxcXGIoPzoke0ZVTkNUSU9OUy5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX0pKD89XFxcXHMqXFxcXCgpYCwgJ2knKSxcbiAgJ2NvbnRleHQtcmFuZ2UnOiBbXG4gICAge1xuICAgICAgcGF0dGVybjogL1xcW1teXFxdXSooPz1dKS8sIC8vIFsxbV1cbiAgICAgIGluc2lkZToge1xuICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcYlxcZCtbc21oZHd5XVxcYi9pLFxuICAgICAgICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvKG9mZnNldFxccyspXFx3Ky8sIC8vIG9mZnNldCAxbVxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcYlxcZCtbc21oZHd5XVxcYi9pLFxuICAgICAgICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgaWRMaXN0OiB7XG4gICAgcGF0dGVybjogL1xcZCsoXFx8XFxkKykrLyxcbiAgICBhbGlhczogJ251bWJlcicsXG4gIH0sXG4gIG51bWJlcjogL1xcYi0/XFxkKygoXFwuXFxkKik/KFtlRV1bKy1dP1xcZCspPyk/XFxiLyxcbiAgb3BlcmF0b3I6IG5ldyBSZWdFeHAoYC9bLSsqLz0lXn5dfCYmP3xcXFxcfD9cXFxcfHwhPT98PCg/Oj0+P3w8fD4pP3w+Wz49XT98XFxcXGIoPzoke09QRVJBVE9SUy5qb2luKCd8Jyl9KVxcXFxiYCwgJ2knKSxcbiAgcHVuY3R1YXRpb246IC9be307KClgLC5dLyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb21xbEdyYW1tYXI7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGZyb20gJy4vdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5mdW5jdGlvbiB1c2VPYnNlcnZhYmxlKG9ic2VydmFibGUkLCBpbml0aWFsVmFsdWUpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpLCB2YWx1ZSA9IF9hWzBdLCB1cGRhdGUgPSBfYVsxXTtcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHMgPSBvYnNlcnZhYmxlJC5zdWJzY3JpYmUodXBkYXRlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHMudW5zdWJzY3JpYmUoKTsgfTtcbiAgICB9LCBbb2JzZXJ2YWJsZSRdKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnQgZGVmYXVsdCB1c2VPYnNlcnZhYmxlO1xuIl0sIm5hbWVzIjpbImNzcyIsIkxvYWRpbmdTdGF0ZSIsIkFsZXJ0IiwiQnV0dG9uIiwiSWNvbiIsIkxvYWRpbmdQbGFjZWhvbGRlciIsIlBhbmVsQ2hyb21lTG9hZGluZ0luZGljYXRvciIsInVzZVN0eWxlczIiLCJWZXJ0aWNhbEdyb3VwIiwid2l0aEVycm9yQm91bmRhcnkiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlT2JzZXJ2YWJsZSIsIkFsZXJ0TGFiZWxzIiwiRGV0YWlsc0ZpZWxkIiwiUnVsZVZpZXdlckxheW91dCIsIlJ1bGVWaWV3ZXJMYXlvdXRDb250ZW50IiwiUnVsZVZpZXdlclZpc3VhbGl6YXRpb24iLCJSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMiLCJSdWxlRGV0YWlsc0Fubm90YXRpb25zIiwiUnVsZURldGFpbHNEYXRhU291cmNlcyIsIlJ1bGVEZXRhaWxzRXhwcmVzc2lvbiIsIlJ1bGVEZXRhaWxzRmVkZXJhdGVkU291cmNlcyIsIlJ1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMiLCJSdWxlSGVhbHRoIiwiUnVsZVN0YXRlIiwidXNlQWxlcnRRdWVyaWVzU3RhdHVzIiwidXNlQ29tYmluZWRSdWxlIiwiQWxlcnRpbmdRdWVyeVJ1bm5lciIsImdldFJ1bGVzU291cmNlQnlOYW1lIiwiYWxlcnRSdWxlVG9RdWVyaWVzIiwicnVsZUlkIiwiaXNGZWRlcmF0ZWRSdWxlR3JvdXAiLCJlcnJvck1lc3NhZ2UiLCJlcnJvclRpdGxlIiwicGFnZVRpdGxlIiwiUnVsZVZpZXdlciIsIm1hdGNoIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaWQiLCJzb3VyY2VOYW1lIiwicGFyYW1zIiwiaWRlbnRpZmllciIsInRyeVBhcnNlIiwibG9hZGluZyIsImVycm9yIiwicmVzdWx0IiwicnVsZSIsInJ1bm5lciIsImRhdGEiLCJnZXQiLCJxdWVyaWVzMiIsInF1ZXJpZXMiLCJzZXRRdWVyaWVzIiwiYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUiLCJvblJ1blF1ZXJpZXMiLCJsZW5ndGgiLCJydW4iLCJkZXN0cm95Iiwib25DaGFuZ2VRdWVyeSIsInF1ZXJ5IiwibWFwIiwicSIsInJlZklkIiwicnVsZXNTb3VyY2UiLCJtZXNzYWdlIiwic3RhY2siLCJhbm5vdGF0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJfIiwidmFsdWUiLCJ0cmltIiwiaXNGZWRlcmF0ZWRSdWxlIiwiZ3JvdXAiLCJuYW1lIiwiZGV0YWlscyIsImxlZnRTaWRlIiwicHJvbVJ1bGUiLCJsYWJlbHMiLCJrZXlzIiwicmlnaHRTaWRlIiwibmFtZXNwYWNlIiwicXVlcmllc1RpdGxlIiwiaXNMb2FkaW5nIiwiY2FuY2VsIiwicXVlcnlXYXJuaW5nIiwidmFsdWVzIiwiZmluZCIsImQiLCJzdGF0ZSIsIkxvYWRpbmciLCJ0aGVtZSIsInNwYWNpbmciLCJ0eXBvZ3JhcGh5IiwiaDUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHRCb2xkIiwiZm9udEZhbWlseSIsImNvbG9ycyIsImJvcmRlciIsIm1lZGl1bSIsInN0eWxlIiwiY29udGV4dFNydiIsIkF1dGhvcml6ZSIsImFjdGlvbnMiLCJjaGlsZHJlbiIsImZhbGxiYWNrIiwic29tZSIsImFjdGlvbiIsImhhc0FjY2VzcyIsIkVkaXRvciIsIlByb21xbFN5bnRheCIsIkxvZ3FsU3ludGF4IiwibGFuZ3VhZ2VzIiwicHJpc21MYW5ndWFnZXMiLCJtYWtlVmFsdWUiLCJTbGF0ZVByaXNtIiwidXNlU3R5bGVzIiwiY3giLCJEYXRhU291cmNlVHlwZSIsImlzQ2xvdWRSdWxlc1NvdXJjZSIsIldlbGwiLCJIaWdobGlnaHRlZFF1ZXJ5IiwibGFuZ3VhZ2UiLCJleHByIiwicGx1Z2lucyIsIm9ubHlJbiIsIm5vZGUiLCJ0eXBlIiwiZ2V0U3ludGF4Iiwic2xhdGVWYWx1ZSIsIkV4cHJlc3Npb24iLCJleHByZXNzaW9uIiwid2VsbCIsIkxva2kiLCJtb25vc3BhY2UiLCJjb25maWciLCJSYWRpb0J1dHRvbkdyb3VwIiwiU1RBVCIsIlRBQkxFIiwiVElNRVNFUklFUyIsIlBhbmVsUGx1Z2luc0J1dHRvbkdyb3VwIiwicHJvcHMiLCJvbkNoYW5nZSIsInNpemUiLCJwYW5lbHMiLCJnZXRTdXBwb3J0ZWRQYW5lbHMiLCJyZWR1Y2UiLCJwYW5lbCIsImlzU3VwcG9ydGVkUGFuZWxQbHVnaW4iLCJwdXNoIiwibGFiZWwiLCJpbWdVcmwiLCJpbmZvIiwibG9nb3MiLCJzbWFsbCIsIkxhYmVsIiwiVG9vbHRpcCIsIklucHV0IiwiU3RhY2siLCJNYXRjaGVyRmlsdGVyIiwiY2xhc3NOYW1lIiwib25GaWx0ZXJDaGFuZ2UiLCJkZWZhdWx0UXVlcnlTdHJpbmciLCJxdWVyeVN0cmluZyIsImhhbmRsZVNlYXJjaENoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZWFyY2hJY29uIiwiaWNvbiIsImlucHV0V2lkdGgiLCJsb2NhdGlvblNlcnZpY2UiLCJQYWdlVG9vbGJhciIsIlBhZ2UiLCJ3cmFwSW5Db250ZW50IiwidGl0bGUiLCJnZXRQYWdlU3R5bGVzIiwiY29udGVudCIsInBhZGRpbmciLCJnZXRDb250ZW50U3R5bGVzIiwid3JhcHBlciIsImJyZWFrcG9pbnRzIiwieHhsIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJ3ZWFrIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJkYXRlVGltZSIsInVybFV0aWwiLCJnZXREYXRhU291cmNlU3J2IiwiUGFuZWxSZW5kZXJlciIsIkNvZGVFZGl0b3IiLCJEYXRlVGltZVBpY2tlciIsIkxpbmtCdXR0b24iLCJ1c2VUaGVtZTIiLCJpc0V4cHJlc3Npb25RdWVyeSIsIkF1dG9TaXplciIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJoZWFkZXJIZWlnaHQiLCJkZWZhdWx0UGFuZWwiLCJtb2RlbCIsInNldFBhbmVsIiwiZHNTZXR0aW5ncyIsImdldEluc3RhbmNlU2V0dGluZ3MiLCJkYXRhc291cmNlVWlkIiwicmVsYXRpdmVUaW1lUmFuZ2UiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImZyYW1lSW5kZXgiLCJzaG93SGVhZGVyIiwib25UaW1lQ2hhbmdlIiwibmV3RGF0ZVRpbWUiLCJub3ciLCJ1bml4IiwiaW50ZXJ2YWwiLCJmcm9tIiwidG8iLCJzZXREYXRlVGltZSIsInJlbGF0aXZlVGltZVJhbmdlVG8iLCJzdWJ0cmFjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aCIsImhlaWdodCIsImhlYWRlciIsImRhdGFTb3VyY2UiLCJEYXRlIiwiRGF0YVNvdXJjZXNFeHBsb3JlIiwiY3JlYXRlRXhwbG9yZUxpbmsiLCJncmlkU2l6ZSIsInNldHRpbmdzIiwicmVzdCIsInF1ZXJ5UGFyYW1zIiwiZGF0YXNvdXJjZSIsInJlbmRlclVybCIsImFwcFN1YlVybCIsImxlZnQiLCJmb250V2VpZ2h0TWVkaXVtIiwidGV4dCIsImxpbmsiLCJzZWNvbmRhcnkiLCJHcmFmYW5hQWxlcnRTdGF0ZSIsIkFsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlciIsIm9uU3RhdGVGaWx0ZXJDaGFuZ2UiLCJzdGF0ZUZpbHRlciIsInN0YXRlT3B0aW9ucyIsInYiLCJ1bmRlZmluZWQiLCJDbGlwYm9hcmRCdXR0b24iLCJDb25maXJtTW9kYWwiLCJIb3Jpem9udGFsR3JvdXAiLCJ1c2VBcHBOb3RpZmljYXRpb24iLCJGcmFnbWVudCIsInVzZURpc3BhdGNoIiwidXNlTG9jYXRpb24iLCJ1c2VJc1J1bGVFZGl0YWJsZSIsInVzZVN0YXRlSGlzdG9yeU1vZGFsIiwiZGVsZXRlUnVsZUFjdGlvbiIsImdldEFsZXJ0bWFuYWdlckJ5VWlkIiwiQW5ub3RhdGlvbiIsImdldFJ1bGVzU291cmNlTmFtZSIsImlzR3JhZmFuYVJ1bGVzU291cmNlIiwiY3JlYXRlVmlld0xpbmsiLCJtYWtlUnVsZUJhc2VkU2lsZW5jZUxpbmsiLCJkaXNwYXRjaCIsImxvY2F0aW9uIiwibm90aWZ5QXBwIiwicnVsZXJSdWxlIiwicnVsZVRvRGVsZXRlIiwic2V0UnVsZVRvRGVsZXRlIiwiYWxlcnRJZCIsImlzR3JhZmFuYVJ1bGVyUnVsZSIsImdyYWZhbmFfYWxlcnQiLCJTdGF0ZUhpc3RvcnlNb2RhbCIsInNob3dTdGF0ZUhpc3RvcnlNb2RhbCIsImFsZXJ0bWFuYWdlclNvdXJjZU5hbWUiLCJqc29uRGF0YSIsImFsZXJ0bWFuYWdlclVpZCIsInJ1bGVzU291cmNlTmFtZSIsImhhc0V4cGxvcmVQZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbiIsImxlZnRCdXR0b25zIiwicmlnaHRCdXR0b25zIiwiaXNGZWRlcmF0ZWQiLCJpc0VkaXRhYmxlIiwiaXNSZW1vdmFibGUiLCJyZXR1cm5UbyIsInBhdGhuYW1lIiwic2VhcmNoIiwiaXNWaWV3TW9kZSIsImluVmlld01vZGUiLCJkZWxldGVSdWxlIiwiZnJvbVJ1bGVyUnVsZSIsIm5hdmlnYXRlVG8iLCJidWlsZFNoYXJlVXJsIiwiYXBwVXJsIiwiYmFzZVVybCIsInJ1bGVVcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3aW5kb3ciLCJocmVmIiwic3BsaXQiLCJidXR0b24iLCJydW5ib29rVVJMIiwiZGFzaGJvYXJkVUlEIiwicGFuZWxJZCIsInBhbmVsSUQiLCJBbGVydGluZ0luc3RhbmNlQ3JlYXRlIiwiaXNFZGl0b3IiLCJlZGl0VVJMIiwic3RyaW5naWZ5SWRlbnRpZmllciIsInN1Y2Nlc3MiLCJlbmRzV2l0aCIsInNtIiwiQW5ub3RhdGlvbkRldGFpbHNGaWVsZCIsImtleSIsIkV4cHJlc3Npb25EYXRhc291cmNlVUlEIiwiZGF0YVNvdXJjZXMiLCJtZXRhIiwidW5pcXVlIiwiZHMiLCJ1aWQiLCJpbmRleCIsImRhdGFTb3VyY2VJY29uIiwiZXhwclJvdyIsInNvdXJjZVRlbmFudHMiLCJzb3VyY2VfdGVuYW50cyIsInRlbmFudCIsImlzQWxlcnRpbmdSdWxlIiwiQWxlcnRJbnN0YW5jZXNUYWJsZSIsIlNvcnRPcmRlciIsImxhYmVsc01hdGNoTWF0Y2hlcnMiLCJwYXJzZU1hdGNoZXJzIiwic29ydEFsZXJ0cyIsInNldFF1ZXJ5U3RyaW5nIiwiYWxlcnRTdGF0ZSIsInNldEFsZXJ0U3RhdGUiLCJmaWx0ZXJLZXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJxdWVyeVN0cmluZ0tleSIsImFsZXJ0cyIsImZpbHRlckFsZXJ0cyIsIkltcG9ydGFuY2UiLCJmbGV4Um93Iiwic3BhY2VCZXR3ZWVuIiwicm93Q2hpbGQiLCJhbGVydEluc3RhbmNlTGFiZWwiLCJhbGVydEluc3RhbmNlU3RhdGUiLCJmaWx0ZXJlZEFsZXJ0cyIsIm1hdGNoZXJzIiwiYWxlcnQiLCJnZXRTdHlsZSIsImhlYWx0aCIsImxhc3RFcnJvciIsIndhcm4iLCJ3YXJuaW5nIiwiaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmciLCJTcGlubmVyIiwiUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIiwiaXNSZWNvcmRpbmdSdWxlIiwiZ2V0Rmlyc3RBY3RpdmVBdCIsIkFsZXJ0U3RhdGVUYWciLCJpc0RlbGV0aW5nIiwiaXNDcmVhdGluZyIsImZvclRpbWUiLCJJbmFjdGl2ZSIsImZpcnN0QWN0aXZlQXQiLCJTdHJpbmciLCJmb3IiLCJzdGFydCIsImVuZCIsImJvZHlTbWFsbCIsInVuaXF1ZUlkIiwiZGF0ZVRpbWVGb3JtYXQiLCJEeW5hbWljVGFibGUiLCJ1c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkiLCJBbGVydExhYmVsIiwiU3RhdGVIaXN0b3J5IiwiY29sdW1ucyIsInJlbmRlckNlbGwiLCJyZW5kZXJTdGF0ZUNlbGwiLCJyZW5kZXJWYWx1ZUNlbGwiLCJyZW5kZXJUaW1lc3RhbXBDZWxsIiwiaXRlbXMiLCJhY2MiLCJpdGVtIiwibmV3U3RhdGUiLCJ0aW1lc3RhbXAiLCJ1cGRhdGVkIiwiaGFzTWF0Y2hpbmdQcmVjZWRpbmdTdGF0ZSIsInByZXZTdGF0ZSIsImhpc3RvcnlJdGVtIiwibWF0Y2hlcyIsImV2YWxNYXRjaGVzIiwibWV0cmljIiwiVGltZXN0YW1wU3R5bGUiLCJMYWJlbHNXcmFwcGVyIiwieHMiLCJjdXJyZW50SGlzdG9yeUl0ZW0iLCJwcmV2aW91c0hpc3RvcnlJdGVtIiwiZXZlcnkiLCJCb29sZWFuIiwidXNlQXN5bmMiLCJmZXRjaFByb21BbmRSdWxlclJ1bGVzQWN0aW9uIiwiaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIiwiaXNSdWxlck5vdFN1cHBvcnRlZFJlc3BvbnNlIiwidXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyIsInVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIiwicnVsZVNvdXJjZU5hbWUiLCJyZXF1ZXN0U3RhdGUiLCJ1c2VDb21iaW5lZFJ1bGVzTG9hZGVyIiwiY29tYmluZWRSdWxlcyIsImdyb3VwcyIsInJ1bGVzIiwiZnJvbUNvbWJpbmVkUnVsZSIsImVxdWFsIiwidXNlQ29tYmluZWRSdWxlc01hdGNoaW5nIiwicnVsZU5hbWUiLCJwcm9tUnVsZVJlcXVlc3RzIiwicHJvbVJ1bGVzIiwicHJvbVJ1bGVSZXF1ZXN0IiwiZ2V0UmVxdWVzdFN0YXRlIiwicnVsZXJSdWxlUmVxdWVzdHMiLCJydWxlclJ1bGVzIiwicnVsZXJSdWxlUmVxdWVzdCIsImRpc3BhdGNoZWQiLCJzbGljZSIsInVzZVJlZiIsImdldEFsbFJ1bGVzU291cmNlcyIsImlzQWxlcnRpbmdSdWxlclJ1bGUiLCJpc1JlY29yZGluZ1J1bGVyUnVsZSIsInByb21SdWxlc1Jlc3BvbnNlcyIsInJ1bGVyUnVsZXNSZXNwb25zZXMiLCJjYWNoZSIsInJ1bGVzU291cmNlcyIsIkVycm9yIiwiY2FjaGVkIiwiY3VycmVudCIsIm5hbWVzcGFjZXMiLCJmb3JFYWNoIiwibmFtZXNwYWNlTmFtZSIsImFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsIm5zIiwiYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UiLCJmbGF0IiwiZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMiLCJuZXdOYW1lc3BhY2UiLCJzb3J0UnVsZXNCeU5hbWUiLCJmbGF0TWFwIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvbWJpbmVkR3JvdXAiLCJydWxlclJ1bGVUb0NvbWJpbmVkUnVsZSIsImciLCJleGlzdGluZ1J1bGUiLCJnZXRFeGlzdGluZ1J1bGVJbkdyb3VwIiwicHJvbVJ1bGVUb0NvbWJpbmVkUnVsZSIsInJlY29yZCIsImlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlIiwiY29tYmluZWRSdWxlIiwiY2hlY2tRdWVyeSIsImhhc2hRdWVyeSIsInJlcGxhY2UiLCJqb2luIiwiZmV0Y2hGb2xkZXJJZk5vdEZldGNoZWRBY3Rpb24iLCJ1c2VGb2xkZXIiLCJmb2xkZXJSZXF1ZXN0cyIsImZvbGRlcnMiLCJyZXF1ZXN0IiwiZm9sZGVyIiwiZ2V0UnVsZXNQZXJtaXNzaW9ucyIsImZvbGRlclVJRCIsIm5hbWVzcGFjZV91aWQiLCJydWxlUGVybWlzc2lvbiIsImhhc0VkaXRQZXJtaXNzaW9uIiwidXBkYXRlIiwiaGFzUmVtb3ZlUGVybWlzc2lvbiIsImRlbGV0ZSIsImNhblNhdmUiLCJpc1J1bGVyQXZhaWxhYmxlIiwicnVsZXJDb25maWciLCJmZXRjaEdyYWZhbmFBbm5vdGF0aW9uc0FjdGlvbiIsImhpc3RvcnkiLCJtYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkiLCJNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhpZGVTdGF0ZUhpc3RvcnlNb2RhbCIsIm9mIiwiUmVwbGF5U3ViamVjdCIsImNhdGNoRXJyb3IiLCJzaGFyZSIsInY0IiwidXVpZHY0IiwiZGF0YUZyYW1lRnJvbUpTT04iLCJnZXREZWZhdWx0VGltZVJhbmdlIiwicmFuZ2VVdGlsIiwid2l0aExvYWRpbmdJbmRpY2F0b3IiLCJ0b0RhdGFRdWVyeUVycm9yIiwiZ2V0QmFja2VuZFNydiIsInByZVByb2Nlc3NQYW5lbERhdGEiLCJnZXRUaW1lUmFuZ2VGb3JFeHByZXNzaW9uIiwic2V0U3RydWN0dXJlUmV2aXNpb24iLCJjYW5jZWxOZXR3b3JrUmVxdWVzdHNPblVuc3Vic2NyaWJlIiwiY29uc3RydWN0b3IiLCJiYWNrZW5kU3J2IiwiZGF0YVNvdXJjZVNydiIsInN1YmplY3QiLCJsYXN0UmVzdWx0IiwiYXNPYnNlcnZhYmxlIiwiZW1wdHkiLCJpbml0aWFsU3RhdGUiLCJEb25lIiwibmV4dCIsImZpbHRlclF1ZXJ5Iiwic3Vic2NyaXB0aW9uIiwicnVuUmVxdWVzdCIsInN1YnNjcmliZSIsImRhdGFQZXJRdWVyeSIsIm5leHRSZXN1bHQiLCJhcHBseUNoYW5nZSIsInByZXZpb3VzIiwicHJlUHJvY2Vzc2VkIiwibWFwRXJyb3JUb1BhbmVsRGF0YSIsInVuc3Vic2NyaWJlIiwicmVxdWVzdElzUnVubmluZyIsImNvbXBsZXRlIiwiaW5pdGlhbCIsInVybCIsIm1ldGhvZCIsInJlcXVlc3RJZCIsIndoaWxlTG9hZGluZyIsInNvdXJjZSIsImZldGNoIiwicGlwZSIsIm1hcFRvUGFuZWxEYXRhIiwiZGF0YUJ5UXVlcnkiLCJzZXJpZXMiLCJ0aW1lUmFuZ2UiLCJnZXRUaW1lUmFuZ2UiLCJyZWxhdGl2ZSIsInJlbGF0aXZlVG9UaW1lUmFuZ2UiLCJjb25zb2xlIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwiZnJhbWVzIiwicXVlcnlFcnJvciIsImNoYW5nZSIsImNsb3VkQWxlcnRSdWxlVG9Nb2RlbCIsInF1ZXJ5VHlwZSIsIkV4cHJlc3Npb25RdWVyeVR5cGUiLCJGQUxMX0JBQ0tfVElNRV9SQU5HRSIsInJlZmVyZW5jZWRSZWZJZHMiLCJnZXRSZWZlcmVuY2VkSWRzIiwiZ2V0VGltZVJhbmdlcyIsIm1heCIsIm1pbiIsImNsYXNzaWMiLCJnZXRSZWZlcmVuY2VkSWRzRm9yQ2xhc3NpY0NvbmRpdGlvbiIsIm1hdGgiLCJnZXRSZWZlcmVuY2VkSWRzRm9yTWF0aCIsInJlc2FtcGxlIiwiZ2V0UmVmZXJlbmNlZElkc0ZvclJlZHVjZSIsImNvbmRpdGlvbnMiLCJjb25kaXRpb24iLCJyZWZlcmVuY2VkUmVmSWRzS2V5IiwiaW5jbHVkZXMiLCJpc0V4cHJlc3Npb25SZWZlcmVuY2UiLCJkYXRhUXVlcnkiLCJBR0dSRUdBVElPTl9PUEVSQVRPUlMiLCJpbnNlcnRUZXh0IiwiZG9jdW1lbnRhdGlvbiIsIlBJUEVfUEFSU0VSUyIsIm1vdmUiLCJQSVBFX09QRVJBVE9SUyIsImRldGFpbCIsIlJBTkdFX1ZFQ19GVU5DVElPTlMiLCJGVU5DVElPTlMiLCJMT0tJX0tFWVdPUkRTIiwia2V5d29yZCIsImxva2lHcmFtbWFyIiwiY29tbWVudCIsInBhdHRlcm4iLCJsb29rYmVoaW5kIiwiaW5zaWRlIiwiYWxpYXMiLCJwdW5jdHVhdGlvbiIsImdyZWVkeSIsIlJlZ0V4cCIsImYiLCJmdW5jdGlvbiIsInF1b3RlIiwiYmFja3RpY2tzIiwibnVtYmVyIiwib3BlcmF0b3IiLCJSQVRFX1JBTkdFUyIsInNvcnRWYWx1ZSIsIk9QRVJBVE9SUyIsIkxPR0lDQUxfT1BFUkFUT1JTIiwiVFJJR09OT01FVFJJQ19GVU5DVElPTlMiLCJQUk9NX0tFWVdPUkRTIiwicHJvbXFsR3JhbW1hciIsImlkTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=
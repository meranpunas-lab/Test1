"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderAlerting"],{

/***/ "./public/app/features/alerting/unified/AlertsFolderView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsFolderView": () => (/* binding */ AlertsFolderView),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/0/cache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;



















var SortOrder;

(function (SortOrder) {
  SortOrder["Ascending"] = "alpha-asc";
  SortOrder["Descending"] = "alpha-desc";
})(SortOrder || (SortOrder = {}));

const sortOptions = [{
  label: 'Alphabetically [A-Z]',
  value: SortOrder.Ascending
}, {
  label: 'Alphabetically [Z-A]',
  value: SortOrder.Descending
}];
const AlertsFolderView = ({
  folder
}) => {
  var _matchingNamespace$gr, _matchingNamespace$gr2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  const onTagClick = tagName => {
    const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.parseMatchers)(labelFilter);
    const tagMatcherField = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.parseMatcher)(tagName);
    const uniqueMatchers = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.uniqWith)([...matchers, tagMatcherField], lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual);
    const matchersString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.matchersToString)(uniqueMatchers);
    setLabelFilter(matchersString);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchPromRulesAction)({
      rulesSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME
    }));
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchRulerRulesAction)({
      rulesSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME
    }));
  }, [dispatch]);
  const combinedNamespaces = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_8__.useCombinedRuleNamespaces)(_utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME);
  const {
    nameFilter,
    labelFilter,
    sortOrder,
    setNameFilter,
    setLabelFilter,
    setSortOrder
  } = useAlertsFolderViewParams();
  const matchingNamespace = combinedNamespaces.find(namespace => namespace.name === folder.title);
  const alertRules = (_matchingNamespace$gr = matchingNamespace === null || matchingNamespace === void 0 ? void 0 : (_matchingNamespace$gr2 = matchingNamespace.groups[0]) === null || _matchingNamespace$gr2 === void 0 ? void 0 : _matchingNamespace$gr2.rules) !== null && _matchingNamespace$gr !== void 0 ? _matchingNamespace$gr : [];
  const filteredRules = filterAndSortRules(alertRules, nameFilter, labelFilter, sortOrder !== null && sortOrder !== void 0 ? sortOrder : SortOrder.Ascending);
  const hasNoResults = alertRules.length === 0 || filteredRules.length === 0;
  const {
    page,
    numberOfPages,
    onPageChange,
    pageItems
  } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__.usePagination)(filteredRules, 1, app_core_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PER_PAGE_PAGINATION);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
    className: styles.container,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      direction: "column",
      gap: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
        value: nameFilter,
        onChange: setNameFilter,
        placeholder: "Search alert rules by name",
        "data-testid": "name-filter"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
          value: sortOrder,
          onChange: ({
            value
          }) => value && setSortOrder(value),
          options: sortOptions,
          width: 25,
          "aria-label": "Sort",
          placeholder: `Sort (Default A-Z)`,
          prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: sortOrder === SortOrder.Ascending ? 'sort-amount-up' : 'sort-amount-down'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
          value: labelFilter,
          onChange: setLabelFilter,
          placeholder: "Search alerts by labels",
          className: styles.filterLabelsInput,
          "data-testid": "label-filter"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        gap: 1,
        children: pageItems.map(currentRule => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.createViewLink)('grafana', currentRule, ''),
          className: styles.card,
          "data-testid": "alert-card-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
            children: currentRule.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Tags, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TagList, {
              onClick: onTagClick,
              tags: Object.entries(currentRule.labels).map(([label, value]) => `${label}=${value}`)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: "folder"
              })), " ", folder.title]
            })
          })]
        }, currentRule.name))
      }), hasNoResults && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: styles.noResults,
        children: "No alert rules found"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: styles.pagination,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
          currentPage: page,
          numberOfPages: numberOfPages,
          onNavigate: onPageChange,
          hideWhenSinglePage: true
        })
      })]
    })
  });
};
var AlertFolderViewParams;

(function (AlertFolderViewParams) {
  AlertFolderViewParams["nameFilter"] = "nameFilter";
  AlertFolderViewParams["labelFilter"] = "labelFilter";
  AlertFolderViewParams["sortOrder"] = "sort";
})(AlertFolderViewParams || (AlertFolderViewParams = {}));

function useAlertsFolderViewParams() {
  var _searchParams$get, _searchParams$get2;

  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_10__.useURLSearchParams)();
  const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)((_searchParams$get = searchParams.get(AlertFolderViewParams.nameFilter)) !== null && _searchParams$get !== void 0 ? _searchParams$get : '');
  const [labelFilter, setLabelFilter] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)((_searchParams$get2 = searchParams.get(AlertFolderViewParams.labelFilter)) !== null && _searchParams$get2 !== void 0 ? _searchParams$get2 : '');
  const sortParam = searchParams.get(AlertFolderViewParams.sortOrder);
  const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(sortParam === SortOrder.Ascending ? SortOrder.Ascending : sortParam === SortOrder.Descending ? SortOrder.Descending : undefined);
  (0,react_use__WEBPACK_IMPORTED_MODULE_16__["default"])(() => setSearchParams({
    [AlertFolderViewParams.nameFilter]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_4__.getQueryParamValue)(nameFilter),
    [AlertFolderViewParams.labelFilter]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_4__.getQueryParamValue)(labelFilter),
    [AlertFolderViewParams.sortOrder]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_4__.getQueryParamValue)(sortOrder)
  }, true), 400, [nameFilter, labelFilter, sortOrder]);
  return {
    nameFilter,
    labelFilter,
    sortOrder,
    setNameFilter,
    setLabelFilter,
    setSortOrder
  };
}

function filterAndSortRules(originalRules, nameFilter, labelFilter, sortOrder) {
  const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.parseMatchers)(labelFilter);
  let rules = originalRules.filter(rule => rule.name.toLowerCase().includes(nameFilter.toLowerCase()) && (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.labelsMatchMatchers)(rule.labels, matchers));
  return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.orderBy)(rules, x => x.name, [sortOrder === SortOrder.Ascending ? 'asc' : 'desc']);
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(1)};
  `,
  card: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    grid-template-columns: auto 1fr 2fr;
    margin: 0;
  `,
  pagination: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    align-self: center;
  `,
  filterLabelsInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
    width: auto;
    min-width: 240px;
  `,
  noResults: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2)};
    background-color: ${theme.colors.background.secondary};
    font-style: italic;
  `
});

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

/***/ "./public/app/features/alerting/unified/hooks/usePagination.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePagination": () => (/* binding */ usePagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePagination(items, initialPage, itemsPerPage) {
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialPage);
  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  const firstItemOnPageIndex = itemsPerPage * (page - 1);
  const pageItems = items.slice(firstItemOnPageIndex, firstItemOnPageIndex + itemsPerPage);

  const onPageChange = newPage => {
    setPage(newPage);
  }; // Reset the current page when number of changes has been changed


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => setPage(1), [numberOfPages]);
  return {
    page,
    onPageChange,
    numberOfPages,
    pageItems
  };
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

/***/ "./public/app/features/folders/FolderAlerting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _alerting_unified_AlertsFolderView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/AlertsFolderView.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const FolderAlerting = ({
  match
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.navIndex);
  const folder = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.folder);
  const uid = match.params.uid;
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, `folder-alerting-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_6__.getLoadingNav)(1));
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(async () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__.getFolderByUid)(uid)), [_state_actions__WEBPACK_IMPORTED_MODULE_5__.getFolderByUid, uid]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_0__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_0__["default"].Contents, {
      isLoading: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_alerting_unified_AlertsFolderView__WEBPACK_IMPORTED_MODULE_4__.AlertsFolderView, {
        folder: folder
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderAlerting);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTVCO0FBQ0EsUUFBTXpKLE1BQU0sR0FBR21KLHdEQUFXLENBQUUxRSxLQUFELElBQXVCQSxLQUFLLENBQUN6RSxNQUE5QixDQUExQjtBQUVBLFFBQU0wSixHQUFHLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhRCxHQUF6QjtBQUNBLFFBQU1FLFFBQVEsR0FBR1Ysd0VBQVcsQ0FBQ08sUUFBRCxFQUFZLG1CQUFrQkMsR0FBSSxFQUFsQyxFQUFxQ0osOERBQWEsQ0FBQyxDQUFELENBQWxELENBQTVCO0FBRUEsUUFBTTtBQUFFTyxJQUFBQTtBQUFGLE1BQWNULHFEQUFRLENBQUMsWUFBWWpKLFFBQVEsQ0FBQ2tKLDhEQUFjLENBQUNLLEdBQUQsQ0FBZixDQUFyQixFQUE0QyxDQUFDTCwwREFBRCxFQUFpQkssR0FBakIsQ0FBNUMsQ0FBNUI7QUFFQSxzQkFDRSx1REFBQyxxRUFBRDtBQUFNLFlBQVEsRUFBRUUsUUFBaEI7QUFBQSwyQkFDRSx1REFBQyw4RUFBRDtBQUFlLGVBQVMsRUFBRUMsT0FBMUI7QUFBQSw2QkFDRSx1REFBQyxnRkFBRDtBQUFrQixjQUFNLEVBQUU3SjtBQUExQjtBQURGO0FBREYsSUFERjtBQU9ELENBakJEOztBQW1CQSxpRUFBZXVKLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL0FsZXJ0c0ZvbGRlclZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZVBhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VVUkxTZWFyY2hQYXJhbXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZm9sZGVycy9Gb2xkZXJBbGVydGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuaW1wb3J0IHsgQ2FyZCwgRmlsdGVySW5wdXQsIEljb24sIFBhZ2luYXRpb24sIFNlbGVjdCwgVGFnTGlzdCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERFRkFVTFRfUEVSX1BBR0VfUEFHSU5BVElPTiB9IGZyb20gJ2FwcC9jb3JlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRRdWVyeVBhcmFtVmFsdWUgfSBmcm9tICdhcHAvY29yZS91dGlscy9xdWVyeSc7XG5pbXBvcnQgeyBGb2xkZXJTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBpc0VxdWFsLCBvcmRlckJ5LCB1bmlxV2l0aCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyB9IGZyb20gJy4vaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyc7XG5pbXBvcnQgeyB1c2VQYWdpbmF0aW9uIH0gZnJvbSAnLi9ob29rcy91c2VQYWdpbmF0aW9uJztcbmltcG9ydCB7IHVzZVVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vaG9va3MvdXNlVVJMU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IGZldGNoUHJvbVJ1bGVzQWN0aW9uLCBmZXRjaFJ1bGVyUnVsZXNBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgbGFiZWxzTWF0Y2hNYXRjaGVycywgbWF0Y2hlcnNUb1N0cmluZywgcGFyc2VNYXRjaGVyLCBwYXJzZU1hdGNoZXJzIH0gZnJvbSAnLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3TGluayB9IGZyb20gJy4vdXRpbHMvbWlzYyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZvbGRlcjogRm9sZGVyU3RhdGU7XG59XG5cbmVudW0gU29ydE9yZGVyIHtcbiAgQXNjZW5kaW5nID0gJ2FscGhhLWFzYycsXG4gIERlc2NlbmRpbmcgPSAnYWxwaGEtZGVzYycsXG59XG5cbmNvbnN0IHNvcnRPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8U29ydE9yZGVyPj4gPSBbXG4gIHsgbGFiZWw6ICdBbHBoYWJldGljYWxseSBbQS1aXScsIHZhbHVlOiBTb3J0T3JkZXIuQXNjZW5kaW5nIH0sXG4gIHsgbGFiZWw6ICdBbHBoYWJldGljYWxseSBbWi1BXScsIHZhbHVlOiBTb3J0T3JkZXIuRGVzY2VuZGluZyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEFsZXJ0c0ZvbGRlclZpZXcgPSAoeyBmb2xkZXIgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25UYWdDbGljayA9ICh0YWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtYXRjaGVycyA9IHBhcnNlTWF0Y2hlcnMobGFiZWxGaWx0ZXIpO1xuICAgIGNvbnN0IHRhZ01hdGNoZXJGaWVsZCA9IHBhcnNlTWF0Y2hlcih0YWdOYW1lKTtcbiAgICBjb25zdCB1bmlxdWVNYXRjaGVycyA9IHVuaXFXaXRoKFsuLi5tYXRjaGVycywgdGFnTWF0Y2hlckZpZWxkXSwgaXNFcXVhbCk7XG4gICAgY29uc3QgbWF0Y2hlcnNTdHJpbmcgPSBtYXRjaGVyc1RvU3RyaW5nKHVuaXF1ZU1hdGNoZXJzKTtcbiAgICBzZXRMYWJlbEZpbHRlcihtYXRjaGVyc1N0cmluZyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFByb21SdWxlc0FjdGlvbih7IHJ1bGVzU291cmNlTmFtZTogR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9KSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hSdWxlclJ1bGVzQWN0aW9uKHsgcnVsZXNTb3VyY2VOYW1lOiBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0pKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3QgY29tYmluZWROYW1lc3BhY2VzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKTtcbiAgY29uc3QgeyBuYW1lRmlsdGVyLCBsYWJlbEZpbHRlciwgc29ydE9yZGVyLCBzZXROYW1lRmlsdGVyLCBzZXRMYWJlbEZpbHRlciwgc2V0U29ydE9yZGVyIH0gPVxuICAgIHVzZUFsZXJ0c0ZvbGRlclZpZXdQYXJhbXMoKTtcblxuICBjb25zdCBtYXRjaGluZ05hbWVzcGFjZSA9IGNvbWJpbmVkTmFtZXNwYWNlcy5maW5kKChuYW1lc3BhY2UpID0+IG5hbWVzcGFjZS5uYW1lID09PSBmb2xkZXIudGl0bGUpO1xuICBjb25zdCBhbGVydFJ1bGVzID0gbWF0Y2hpbmdOYW1lc3BhY2U/Lmdyb3Vwc1swXT8ucnVsZXMgPz8gW107XG5cbiAgY29uc3QgZmlsdGVyZWRSdWxlcyA9IGZpbHRlckFuZFNvcnRSdWxlcyhhbGVydFJ1bGVzLCBuYW1lRmlsdGVyLCBsYWJlbEZpbHRlciwgc29ydE9yZGVyID8/IFNvcnRPcmRlci5Bc2NlbmRpbmcpO1xuXG4gIGNvbnN0IGhhc05vUmVzdWx0cyA9IGFsZXJ0UnVsZXMubGVuZ3RoID09PSAwIHx8IGZpbHRlcmVkUnVsZXMubGVuZ3RoID09PSAwO1xuICBjb25zdCB7IHBhZ2UsIG51bWJlck9mUGFnZXMsIG9uUGFnZUNoYW5nZSwgcGFnZUl0ZW1zIH0gPSB1c2VQYWdpbmF0aW9uKGZpbHRlcmVkUnVsZXMsIDEsIERFRkFVTFRfUEVSX1BBR0VfUEFHSU5BVElPTik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXszfT5cbiAgICAgICAgPEZpbHRlcklucHV0XG4gICAgICAgICAgdmFsdWU9e25hbWVGaWx0ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldE5hbWVGaWx0ZXJ9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYWxlcnQgcnVsZXMgYnkgbmFtZVwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJuYW1lLWZpbHRlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICA8U2VsZWN0PFNvcnRPcmRlcj5cbiAgICAgICAgICAgIHZhbHVlPXtzb3J0T3JkZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUgfSkgPT4gdmFsdWUgJiYgc2V0U29ydE9yZGVyKHZhbHVlKX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3NvcnRPcHRpb25zfVxuICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BTb3J0IChEZWZhdWx0IEEtWilgfVxuICAgICAgICAgICAgcHJlZml4PXs8SWNvbiBuYW1lPXtzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5Bc2NlbmRpbmcgPyAnc29ydC1hbW91bnQtdXAnIDogJ3NvcnQtYW1vdW50LWRvd24nfSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2xhYmVsRmlsdGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldExhYmVsRmlsdGVyfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYWxlcnRzIGJ5IGxhYmVsc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJMYWJlbHNJbnB1dH1cbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibGFiZWwtZmlsdGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIDxTdGFjayBnYXA9ezF9PlxuICAgICAgICAgIHtwYWdlSXRlbXMubWFwKChjdXJyZW50UnVsZSkgPT4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtjdXJyZW50UnVsZS5uYW1lfVxuICAgICAgICAgICAgICBocmVmPXtjcmVhdGVWaWV3TGluaygnZ3JhZmFuYScsIGN1cnJlbnRSdWxlLCAnJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYWxlcnQtY2FyZC1yb3dcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkaW5nPntjdXJyZW50UnVsZS5uYW1lfTwvQ2FyZC5IZWFkaW5nPlxuICAgICAgICAgICAgICA8Q2FyZC5UYWdzPlxuICAgICAgICAgICAgICAgIDxUYWdMaXN0XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRhZ0NsaWNrfVxuICAgICAgICAgICAgICAgICAgdGFncz17T2JqZWN0LmVudHJpZXMoY3VycmVudFJ1bGUubGFiZWxzKS5tYXAoKFtsYWJlbCwgdmFsdWVdKSA9PiBgJHtsYWJlbH09JHt2YWx1ZX1gKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NhcmQuVGFncz5cbiAgICAgICAgICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImZvbGRlclwiIC8+IHtmb2xkZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICB7aGFzTm9SZXN1bHRzICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9SZXN1bHRzfT5ObyBhbGVydCBydWxlcyBmb3VuZDwvZGl2Pn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9ufT5cbiAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICBudW1iZXJPZlBhZ2VzPXtudW1iZXJPZlBhZ2VzfVxuICAgICAgICAgICAgb25OYXZpZ2F0ZT17b25QYWdlQ2hhbmdlfVxuICAgICAgICAgICAgaGlkZVdoZW5TaW5nbGVQYWdlPXt0cnVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdGFjaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmVudW0gQWxlcnRGb2xkZXJWaWV3UGFyYW1zIHtcbiAgbmFtZUZpbHRlciA9ICduYW1lRmlsdGVyJyxcbiAgbGFiZWxGaWx0ZXIgPSAnbGFiZWxGaWx0ZXInLFxuICBzb3J0T3JkZXIgPSAnc29ydCcsXG59XG5cbmZ1bmN0aW9uIHVzZUFsZXJ0c0ZvbGRlclZpZXdQYXJhbXMoKSB7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VVUkxTZWFyY2hQYXJhbXMoKTtcblxuICBjb25zdCBbbmFtZUZpbHRlciwgc2V0TmFtZUZpbHRlcl0gPSB1c2VTdGF0ZShzZWFyY2hQYXJhbXMuZ2V0KEFsZXJ0Rm9sZGVyVmlld1BhcmFtcy5uYW1lRmlsdGVyKSA/PyAnJyk7XG4gIGNvbnN0IFtsYWJlbEZpbHRlciwgc2V0TGFiZWxGaWx0ZXJdID0gdXNlU3RhdGUoc2VhcmNoUGFyYW1zLmdldChBbGVydEZvbGRlclZpZXdQYXJhbXMubGFiZWxGaWx0ZXIpID8/ICcnKTtcblxuICBjb25zdCBzb3J0UGFyYW0gPSBzZWFyY2hQYXJhbXMuZ2V0KEFsZXJ0Rm9sZGVyVmlld1BhcmFtcy5zb3J0T3JkZXIpO1xuICBjb25zdCBbc29ydE9yZGVyLCBzZXRTb3J0T3JkZXJdID0gdXNlU3RhdGU8U29ydE9yZGVyIHwgdW5kZWZpbmVkPihcbiAgICBzb3J0UGFyYW0gPT09IFNvcnRPcmRlci5Bc2NlbmRpbmdcbiAgICAgID8gU29ydE9yZGVyLkFzY2VuZGluZ1xuICAgICAgOiBzb3J0UGFyYW0gPT09IFNvcnRPcmRlci5EZXNjZW5kaW5nXG4gICAgICA/IFNvcnRPcmRlci5EZXNjZW5kaW5nXG4gICAgICA6IHVuZGVmaW5lZFxuICApO1xuXG4gIHVzZURlYm91bmNlKFxuICAgICgpID0+XG4gICAgICBzZXRTZWFyY2hQYXJhbXMoXG4gICAgICAgIHtcbiAgICAgICAgICBbQWxlcnRGb2xkZXJWaWV3UGFyYW1zLm5hbWVGaWx0ZXJdOiBnZXRRdWVyeVBhcmFtVmFsdWUobmFtZUZpbHRlciksXG4gICAgICAgICAgW0FsZXJ0Rm9sZGVyVmlld1BhcmFtcy5sYWJlbEZpbHRlcl06IGdldFF1ZXJ5UGFyYW1WYWx1ZShsYWJlbEZpbHRlciksXG4gICAgICAgICAgW0FsZXJ0Rm9sZGVyVmlld1BhcmFtcy5zb3J0T3JkZXJdOiBnZXRRdWVyeVBhcmFtVmFsdWUoc29ydE9yZGVyKSxcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKSxcbiAgICA0MDAsXG4gICAgW25hbWVGaWx0ZXIsIGxhYmVsRmlsdGVyLCBzb3J0T3JkZXJdXG4gICk7XG5cbiAgcmV0dXJuIHsgbmFtZUZpbHRlciwgbGFiZWxGaWx0ZXIsIHNvcnRPcmRlciwgc2V0TmFtZUZpbHRlciwgc2V0TGFiZWxGaWx0ZXIsIHNldFNvcnRPcmRlciB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJBbmRTb3J0UnVsZXMoXG4gIG9yaWdpbmFsUnVsZXM6IENvbWJpbmVkUnVsZVtdLFxuICBuYW1lRmlsdGVyOiBzdHJpbmcsXG4gIGxhYmVsRmlsdGVyOiBzdHJpbmcsXG4gIHNvcnRPcmRlcjogU29ydE9yZGVyXG4pIHtcbiAgY29uc3QgbWF0Y2hlcnMgPSBwYXJzZU1hdGNoZXJzKGxhYmVsRmlsdGVyKTtcbiAgbGV0IHJ1bGVzID0gb3JpZ2luYWxSdWxlcy5maWx0ZXIoXG4gICAgKHJ1bGUpID0+IHJ1bGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5hbWVGaWx0ZXIudG9Mb3dlckNhc2UoKSkgJiYgbGFiZWxzTWF0Y2hNYXRjaGVycyhydWxlLmxhYmVscywgbWF0Y2hlcnMpXG4gICk7XG5cbiAgcmV0dXJuIG9yZGVyQnkocnVsZXMsICh4KSA9PiB4Lm5hbWUsIFtzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5Bc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJ10pO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICBjYXJkOiBjc3NgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciAyZnI7XG4gICAgbWFyZ2luOiAwO1xuICBgLFxuICBwYWdpbmF0aW9uOiBjc3NgXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBgLFxuICBmaWx0ZXJMYWJlbHNJbnB1dDogY3NzYFxuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAyNDBweDtcbiAgYCxcbiAgbm9SZXN1bHRzOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICBgLFxufSk7XG4iLCJpbXBvcnQge1xuICBDb21iaW5lZFJ1bGUsXG4gIENvbWJpbmVkUnVsZUdyb3VwLFxuICBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIFJ1bGUsXG4gIFJ1bGVHcm91cCxcbiAgUnVsZU5hbWVzcGFjZSxcbiAgUnVsZXNTb3VyY2UsXG59IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFJ1bGVyUnVsZURUTywgUnVsZXJSdWxlR3JvdXBEVE8sIFJ1bGVyUnVsZXNDb25maWdEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgZ2V0QWxsUnVsZXNTb3VyY2VzLFxuICBnZXRSdWxlc1NvdXJjZUJ5TmFtZSxcbiAgaXNDbG91ZFJ1bGVzU291cmNlLFxuICBpc0dyYWZhbmFSdWxlc1NvdXJjZSxcbn0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSwgaXNBbGVydGluZ1J1bGVyUnVsZSwgaXNSZWNvcmRpbmdSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgQ2FjaGVWYWx1ZSB7XG4gIHByb21SdWxlcz86IFJ1bGVOYW1lc3BhY2VbXTtcbiAgcnVsZXJSdWxlcz86IFJ1bGVyUnVsZXNDb25maWdEVE8gfCBudWxsO1xuICByZXN1bHQ6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xufVxuXG4vLyB0aGlzIGxpdHRsZSBtb25zdGVyIGNvbWJpbmVzIHByb21ldGhldXMgcnVsZXMgYW5kIHJ1bGVyIHJ1bGVzIHRvIHByb2R1Y2UgYSB1bmlmaWVkIGRhdGEgc3RydWN0dXJlXG4vLyBjYW4gbGltaXQgdG8gYSBzaW5nbGUgcnVsZXMgc291cmNlXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlc1NvdXJjZU5hbWU/OiBzdHJpbmcpOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSB7XG4gIGNvbnN0IHByb21SdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG5cbiAgLy8gY2FjaGUgcmVzdWx0cyBwZXIgcnVsZXMgc291cmNlLCBzbyB3ZSBvbmx5IHJlY2FsY3VsYXRlIHRob3NlIGZvciB3aGljaCByZXN1bHRzIGhhdmUgYWN0dWFsbHkgY2hhbmdlZFxuICBjb25zdCBjYWNoZSA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBDYWNoZVZhbHVlPj4oe30pO1xuXG4gIGNvbnN0IHJ1bGVzU291cmNlcyA9IHVzZU1lbW8oKCk6IFJ1bGVzU291cmNlW10gPT4ge1xuICAgIGlmIChydWxlc1NvdXJjZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVzU291cmNlID0gZ2V0UnVsZXNTb3VyY2VCeU5hbWUocnVsZXNTb3VyY2VOYW1lKTtcbiAgICAgIGlmICghcnVsZXNTb3VyY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHJ1bGVzIHNvdXJjZTogJHtydWxlc1NvdXJjZU5hbWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3J1bGVzU291cmNlXTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEFsbFJ1bGVzU291cmNlcygpO1xuICB9LCBbcnVsZXNTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHJ1bGVzU291cmNlc1xuICAgICAgICAubWFwKChydWxlc1NvdXJjZSk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSBpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gcnVsZXNTb3VyY2UubmFtZSA6IHJ1bGVzU291cmNlO1xuICAgICAgICAgIGNvbnN0IHByb21SdWxlcyA9IHByb21SdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgcnVsZXJSdWxlcyA9IHJ1bGVyUnVsZXNSZXNwb25zZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuXG4gICAgICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdO1xuICAgICAgICAgIGlmIChjYWNoZWQgJiYgY2FjaGVkLnByb21SdWxlcyA9PT0gcHJvbVJ1bGVzICYmIGNhY2hlZC5ydWxlclJ1bGVzID09PSBydWxlclJ1bGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkLnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZXNwYWNlczogUmVjb3JkPHN0cmluZywgQ29tYmluZWRSdWxlTmFtZXNwYWNlPiA9IHt9O1xuXG4gICAgICAgICAgLy8gZmlyc3QgZ2V0IGFsbCB0aGUgcnVsZXIgcnVsZXMgaW5cbiAgICAgICAgICBPYmplY3QuZW50cmllcyhydWxlclJ1bGVzIHx8IHt9KS5mb3JFYWNoKChbbmFtZXNwYWNlTmFtZSwgZ3JvdXBzXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgPSB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2U7XG4gICAgICAgICAgICBhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhlbiBjb3JyZWxhdGUgd2l0aCBwcm9tZXRoZXVzIHJ1bGVzXG4gICAgICAgICAgcHJvbVJ1bGVzPy5mb3JFYWNoKCh7IG5hbWU6IG5hbWVzcGFjZU5hbWUsIGdyb3VwcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBucyA9IChuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSB8fCB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5zLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LnZhbHVlcyhuYW1lc3BhY2VzKTtcblxuICAgICAgICAgIGNhY2hlLmN1cnJlbnRbcnVsZXNTb3VyY2VOYW1lXSA9IHsgcHJvbVJ1bGVzLCBydWxlclJ1bGVzLCByZXN1bHQgfTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpLFxuICAgIFtwcm9tUnVsZXNSZXNwb25zZXMsIHJ1bGVyUnVsZXNSZXNwb25zZXMsIHJ1bGVzU291cmNlc11cbiAgKTtcbn1cblxuLy8gbWVyZ2UgYWxsIGdyb3VwcyBpbiBjYXNlIG9mIGdyYWZhbmEgbWFuYWdlZCwgZXNzZW50aWFsbHkgdHJlYXRpbmcgbmFtZXNwYWNlcyAoZm9sZGVycykgYXMgZ3JvdXBzXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMobmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10pIHtcbiAgcmV0dXJuIG5hbWVzcGFjZXMubWFwKChuYW1lc3BhY2UpID0+IHtcbiAgICBjb25zdCBuZXdOYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgIGdyb3VwczogW10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IGdyb3VwIHdpdGggdW5ncm91cGVkIHJ1bGVzXG4gICAgbmV3TmFtZXNwYWNlLmdyb3Vwcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgIHJ1bGVzOiBzb3J0UnVsZXNCeU5hbWUobmFtZXNwYWNlLmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4gZ3JvdXAucnVsZXMpKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdOYW1lc3BhY2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFJ1bGVzQnlOYW1lKHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSkge1xuICByZXR1cm4gcnVsZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlclJ1bGVHcm91cERUT1tdKTogdm9pZCB7XG4gIG5hbWVzcGFjZS5ncm91cHMgPSBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmVkR3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwID0ge1xuICAgICAgbmFtZTogZ3JvdXAubmFtZSxcbiAgICAgIGludGVydmFsOiBncm91cC5pbnRlcnZhbCxcbiAgICAgIHNvdXJjZV90ZW5hbnRzOiBncm91cC5zb3VyY2VfdGVuYW50cyxcbiAgICAgIHJ1bGVzOiBbXSxcbiAgICB9O1xuICAgIGNvbWJpbmVkR3JvdXAucnVsZXMgPSBncm91cC5ydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCkpO1xuICAgIHJldHVybiBjb21iaW5lZEdyb3VwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwczogUnVsZUdyb3VwW10pOiB2b2lkIHtcbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgbGV0IGNvbWJpbmVkR3JvdXAgPSBuYW1lc3BhY2UuZ3JvdXBzLmZpbmQoKGcpID0+IGcubmFtZSA9PT0gZ3JvdXAubmFtZSk7XG4gICAgaWYgKCFjb21iaW5lZEdyb3VwKSB7XG4gICAgICBjb21iaW5lZEdyb3VwID0ge1xuICAgICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgICBydWxlczogW10sXG4gICAgICB9O1xuICAgICAgbmFtZXNwYWNlLmdyb3Vwcy5wdXNoKGNvbWJpbmVkR3JvdXApO1xuICAgIH1cblxuICAgIChncm91cC5ydWxlcyA/PyBbXSkuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdSdWxlID0gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChydWxlLCBjb21iaW5lZEdyb3VwISwgbmFtZXNwYWNlLnJ1bGVzU291cmNlKTtcbiAgICAgIGlmIChleGlzdGluZ1J1bGUpIHtcbiAgICAgICAgZXhpc3RpbmdSdWxlLnByb21SdWxlID0gcnVsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbWJpbmVkR3JvdXAhLnJ1bGVzLnB1c2gocHJvbVJ1bGVUb0NvbWJpbmVkUnVsZShydWxlLCBuYW1lc3BhY2UsIGNvbWJpbmVkR3JvdXAhKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGU6IFJ1bGUsIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cDogQ29tYmluZWRSdWxlR3JvdXApOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHJ1bGUubmFtZSxcbiAgICBxdWVyeTogcnVsZS5xdWVyeSxcbiAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgIGFubm90YXRpb25zOiBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICBwcm9tUnVsZTogcnVsZSxcbiAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICBncm91cCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUoXG4gIHJ1bGU6IFJ1bGVyUnVsZURUTyxcbiAgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cFxuKTogQ29tYmluZWRSdWxlIHtcbiAgcmV0dXJuIGlzQWxlcnRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5hbGVydCxcbiAgICAgICAgcXVlcnk6IHJ1bGUuZXhwcixcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IGlzUmVjb3JkaW5nUnVsZXJSdWxlKHJ1bGUpXG4gICAgPyB7XG4gICAgICAgIG5hbWU6IHJ1bGUucmVjb3JkLFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczoge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgbmFtZTogcnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiBydWxlLmFubm90YXRpb25zIHx8IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9O1xufVxuXG4vLyBmaW5kIGV4aXN0aW5nIHJ1bGUgaW4gZ3JvdXAgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBwcm9tIHJ1bGVcbmZ1bmN0aW9uIGdldEV4aXN0aW5nUnVsZUluR3JvdXAoXG4gIHJ1bGU6IFJ1bGUsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCxcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlXG4pOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQge1xuICBpZiAoaXNHcmFmYW5hUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgLy8gYXNzdW1lIGdyYWZhbmEgZ3JvdXBzIGhhdmUgb25seSB0aGUgb25lIHJ1bGUuIGNoZWNrIG5hbWUgYW55d2F5IGJlY2F1c2UgcGFyYW5vaWRcbiAgICByZXR1cm4gZ3JvdXAhLnJ1bGVzLmZpbmQoKGV4aXN0aW5nUnVsZSkgPT4gZXhpc3RpbmdSdWxlLm5hbWUgPT09IHJ1bGUubmFtZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvLyB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBtYXRjaGVzIG5hbWUsIGxhYmVscywgYW5ub3RhdGlvbnMgYW5kIHF1ZXJ5XG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgdHJ1ZSlcbiAgICApID8/XG4gICAgLy8gaWYgdGhhdCBmYWlscywgdHJ5IGZpbmRpbmcgYSBydWxlIHRoYXQgb25seSBtYXRjaGVzIG5hbWUsIGxhYmVscyBhbmQgYW5ub3RhdGlvbnMuXG4gICAgLy8gbG9raSAmIHByb20gY2FuIHNvbWV0aW1lcyBtb2RpZnkgdGhlIHF1ZXJ5IHNvIGl0IGRvZXNudCBtYXRjaCwgZWcgYDIgPiAxYCBiZWNvbWVzIGAxYFxuICAgIGdyb3VwIS5ydWxlcy5maW5kKFxuICAgICAgKGV4aXN0aW5nUnVsZSkgPT4gIWV4aXN0aW5nUnVsZS5wcm9tUnVsZSAmJiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShleGlzdGluZ1J1bGUsIHJ1bGUsIGZhbHNlKVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUsIHJ1bGU6IFJ1bGUsIGNoZWNrUXVlcnkgPSB0cnVlKTogYm9vbGVhbiB7XG4gIGlmIChjb21iaW5lZFJ1bGUubmFtZSA9PT0gcnVsZS5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgY2hlY2tRdWVyeSA/IGhhc2hRdWVyeShjb21iaW5lZFJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5sYWJlbHMsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5hbm5vdGF0aW9ucyxcbiAgICAgIF0pID09PVxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KHJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHRoZXJlIGNhbiBiZSBzbGlnaHQgZGlmZmVyZW5jZXMgaW4gaG93IHByb20gJiBydWxlciByZW5kZXIgYSBxdWVyeSwgdGhpcyB3aWxsIGhhc2ggdGhlbSBhY2NvdW50aW5nIGZvciB0aGUgZGlmZmVyZW5jZXNcbmZ1bmN0aW9uIGhhc2hRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gIC8vIG9uZSBvZiB0aGVtIG1pZ2h0IGJlIHdyYXBwZWQgaW4gcGFyZW5zXG4gIGlmIChxdWVyeS5sZW5ndGggPiAxICYmIHF1ZXJ5WzBdID09PSAnKCcgJiYgcXVlcnlbcXVlcnkubGVuZ3RoIC0gMV0gPT09ICcpJykge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMSwgLTEpO1xuICB9XG4gIC8vIHdoaXRlc3BhY2UgY291bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xcc3xcXG4vZywgJycpO1xuICAvLyBsYWJlbHMgbWF0Y2hlcnMgY2FuIGJlIHJlb3JkZXJlZCwgc28gc29ydCB0aGUgZW5pdHJlIHN0cmluZywgZXNlbnRpYWxseSBjb21wYXJpbmcganVzdCB0aGUgY2hhcmFjdGVyIGNvdW50c1xuICByZXR1cm4gcXVlcnkuc3BsaXQoJycpLnNvcnQoKS5qb2luKCcnKTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYWdpbmF0aW9uPFQ+KGl0ZW1zOiBUW10sIGluaXRpYWxQYWdlOiBudW1iZXIsIGl0ZW1zUGVyUGFnZTogbnVtYmVyKSB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKGluaXRpYWxQYWdlKTtcblxuICBjb25zdCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKGl0ZW1zLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XG5cbiAgY29uc3QgZmlyc3RJdGVtT25QYWdlSW5kZXggPSBpdGVtc1BlclBhZ2UgKiAocGFnZSAtIDEpO1xuICBjb25zdCBwYWdlSXRlbXMgPSBpdGVtcy5zbGljZShmaXJzdEl0ZW1PblBhZ2VJbmRleCwgZmlyc3RJdGVtT25QYWdlSW5kZXggKyBpdGVtc1BlclBhZ2UpO1xuXG4gIGNvbnN0IG9uUGFnZUNoYW5nZSA9IChuZXdQYWdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xuICB9O1xuXG4gIC8vIFJlc2V0IHRoZSBjdXJyZW50IHBhZ2Ugd2hlbiBudW1iZXIgb2YgY2hhbmdlcyBoYXMgYmVlbiBjaGFuZ2VkXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRQYWdlKDEpLCBbbnVtYmVyT2ZQYWdlc10pO1xuXG4gIHJldHVybiB7IHBhZ2UsIG9uUGFnZUNoYW5nZSwgbnVtYmVyT2ZQYWdlcywgcGFnZUl0ZW1zIH07XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVSTFNlYXJjaFBhcmFtcygpOiBbXG4gIFVSTFNlYXJjaFBhcmFtcyxcbiAgKHNlYXJjaFZhbHVlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ+LCByZXBsYWNlPzogYm9vbGVhbikgPT4gdm9pZFxuXSB7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IHVzZU1lbW8oKCkgPT4gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLCBbc2VhcmNoXSk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soKHNlYXJjaFZhbHVlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ+LCByZXBsYWNlPzogYm9vbGVhbikgPT4ge1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHNlYXJjaFZhbHVlcywgcmVwbGFjZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW3F1ZXJ5UGFyYW1zLCB1cGRhdGVdO1xufVxuIiwiaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IEFsZXJ0c0ZvbGRlclZpZXcgfSBmcm9tICcuLi9hbGVydGluZy91bmlmaWVkL0FsZXJ0c0ZvbGRlclZpZXcnO1xuaW1wb3J0IHsgZ2V0Rm9sZGVyQnlVaWQgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0TG9hZGluZ05hdiB9IGZyb20gJy4vc3RhdGUvbmF2TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE93blByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyB1aWQ6IHN0cmluZyB9PiB7fVxuXG5jb25zdCBGb2xkZXJBbGVydGluZyA9ICh7IG1hdGNoIH06IE93blByb3BzKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbmF2SW5kZXggPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KTtcbiAgY29uc3QgZm9sZGVyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5mb2xkZXIpO1xuXG4gIGNvbnN0IHVpZCA9IG1hdGNoLnBhcmFtcy51aWQ7XG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwobmF2SW5kZXgsIGBmb2xkZXItYWxlcnRpbmctJHt1aWR9YCwgZ2V0TG9hZGluZ05hdigxKSk7XG5cbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBc3luYyhhc3luYyAoKSA9PiBkaXNwYXRjaChnZXRGb2xkZXJCeVVpZCh1aWQpKSwgW2dldEZvbGRlckJ5VWlkLCB1aWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICA8QWxlcnRzRm9sZGVyVmlldyBmb2xkZXI9e2ZvbGRlcn0gLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xkZXJBbGVydGluZztcbiJdLCJuYW1lcyI6WyJjc3MiLCJTdGFjayIsIkNhcmQiLCJGaWx0ZXJJbnB1dCIsIkljb24iLCJQYWdpbmF0aW9uIiwiU2VsZWN0IiwiVGFnTGlzdCIsInVzZVN0eWxlczIiLCJERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04iLCJnZXRRdWVyeVBhcmFtVmFsdWUiLCJpc0VxdWFsIiwib3JkZXJCeSIsInVuaXFXaXRoIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwidXNlRGVib3VuY2UiLCJ1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzIiwidXNlUGFnaW5hdGlvbiIsInVzZVVSTFNlYXJjaFBhcmFtcyIsImZldGNoUHJvbVJ1bGVzQWN0aW9uIiwiZmV0Y2hSdWxlclJ1bGVzQWN0aW9uIiwibGFiZWxzTWF0Y2hNYXRjaGVycyIsIm1hdGNoZXJzVG9TdHJpbmciLCJwYXJzZU1hdGNoZXIiLCJwYXJzZU1hdGNoZXJzIiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsImNyZWF0ZVZpZXdMaW5rIiwiU29ydE9yZGVyIiwic29ydE9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiQXNjZW5kaW5nIiwiRGVzY2VuZGluZyIsIkFsZXJ0c0ZvbGRlclZpZXciLCJmb2xkZXIiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJkaXNwYXRjaCIsIm9uVGFnQ2xpY2siLCJ0YWdOYW1lIiwibWF0Y2hlcnMiLCJsYWJlbEZpbHRlciIsInRhZ01hdGNoZXJGaWVsZCIsInVuaXF1ZU1hdGNoZXJzIiwibWF0Y2hlcnNTdHJpbmciLCJzZXRMYWJlbEZpbHRlciIsInJ1bGVzU291cmNlTmFtZSIsImNvbWJpbmVkTmFtZXNwYWNlcyIsIm5hbWVGaWx0ZXIiLCJzb3J0T3JkZXIiLCJzZXROYW1lRmlsdGVyIiwic2V0U29ydE9yZGVyIiwidXNlQWxlcnRzRm9sZGVyVmlld1BhcmFtcyIsIm1hdGNoaW5nTmFtZXNwYWNlIiwiZmluZCIsIm5hbWVzcGFjZSIsIm5hbWUiLCJ0aXRsZSIsImFsZXJ0UnVsZXMiLCJncm91cHMiLCJydWxlcyIsImZpbHRlcmVkUnVsZXMiLCJmaWx0ZXJBbmRTb3J0UnVsZXMiLCJoYXNOb1Jlc3VsdHMiLCJsZW5ndGgiLCJwYWdlIiwibnVtYmVyT2ZQYWdlcyIsIm9uUGFnZUNoYW5nZSIsInBhZ2VJdGVtcyIsImNvbnRhaW5lciIsImZpbHRlckxhYmVsc0lucHV0IiwibWFwIiwiY3VycmVudFJ1bGUiLCJjYXJkIiwiT2JqZWN0IiwiZW50cmllcyIsImxhYmVscyIsIm5vUmVzdWx0cyIsInBhZ2luYXRpb24iLCJBbGVydEZvbGRlclZpZXdQYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXRTZWFyY2hQYXJhbXMiLCJnZXQiLCJzb3J0UGFyYW0iLCJ1bmRlZmluZWQiLCJvcmlnaW5hbFJ1bGVzIiwiZmlsdGVyIiwicnVsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ4IiwidGhlbWUiLCJzcGFjaW5nIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsInNlY29uZGFyeSIsInVzZU1lbW8iLCJ1c2VSZWYiLCJnZXRBbGxSdWxlc1NvdXJjZXMiLCJnZXRSdWxlc1NvdXJjZUJ5TmFtZSIsImlzQ2xvdWRSdWxlc1NvdXJjZSIsImlzR3JhZmFuYVJ1bGVzU291cmNlIiwiaXNBbGVydGluZ1J1bGUiLCJpc0FsZXJ0aW5nUnVsZXJSdWxlIiwiaXNSZWNvcmRpbmdSdWxlclJ1bGUiLCJ1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciIsInByb21SdWxlc1Jlc3BvbnNlcyIsInN0YXRlIiwicHJvbVJ1bGVzIiwicnVsZXJSdWxlc1Jlc3BvbnNlcyIsInJ1bGVyUnVsZXMiLCJjYWNoZSIsInJ1bGVzU291cmNlcyIsInJ1bGVzU291cmNlIiwiRXJyb3IiLCJyZXN1bHQiLCJjYWNoZWQiLCJjdXJyZW50IiwibmFtZXNwYWNlcyIsImZvckVhY2giLCJuYW1lc3BhY2VOYW1lIiwiYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlIiwibnMiLCJhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsInZhbHVlcyIsImZsYXQiLCJmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyIsIm5ld05hbWVzcGFjZSIsInB1c2giLCJzb3J0UnVsZXNCeU5hbWUiLCJmbGF0TWFwIiwiZ3JvdXAiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiY29tYmluZWRHcm91cCIsImludGVydmFsIiwic291cmNlX3RlbmFudHMiLCJydWxlclJ1bGVUb0NvbWJpbmVkUnVsZSIsImciLCJleGlzdGluZ1J1bGUiLCJnZXRFeGlzdGluZ1J1bGVJbkdyb3VwIiwicHJvbVJ1bGUiLCJwcm9tUnVsZVRvQ29tYmluZWRSdWxlIiwicXVlcnkiLCJhbm5vdGF0aW9ucyIsImFsZXJ0IiwiZXhwciIsInJ1bGVyUnVsZSIsInJlY29yZCIsImdyYWZhbmFfYWxlcnQiLCJpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZSIsImNvbWJpbmVkUnVsZSIsImNoZWNrUXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFzaFF1ZXJ5Iiwic2xpY2UiLCJyZXBsYWNlIiwic3BsaXQiLCJqb2luIiwiaXRlbXMiLCJpbml0aWFsUGFnZSIsIml0ZW1zUGVyUGFnZSIsInNldFBhZ2UiLCJNYXRoIiwiY2VpbCIsImZpcnN0SXRlbU9uUGFnZUluZGV4IiwibmV3UGFnZSIsInVzZUNhbGxiYWNrIiwidXNlTG9jYXRpb24iLCJsb2NhdGlvblNlcnZpY2UiLCJzZWFyY2giLCJxdWVyeVBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInVwZGF0ZSIsInNlYXJjaFZhbHVlcyIsInBhcnRpYWwiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJ1c2VTZWxlY3RvciIsInVzZUFzeW5jIiwiZ2V0Rm9sZGVyQnlVaWQiLCJnZXRMb2FkaW5nTmF2IiwiRm9sZGVyQWxlcnRpbmciLCJtYXRjaCIsIm5hdkluZGV4IiwidWlkIiwicGFyYW1zIiwibmF2TW9kZWwiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==
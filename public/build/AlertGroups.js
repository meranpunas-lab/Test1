"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertGroups"],{

/***/ "./public/app/features/alerting/unified/AlertGroups.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_alert_groups_AlertGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroup.tsx");
/* harmony import */ var _components_alert_groups_AlertGroupFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupFilter.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _hooks_useGroupedAlerts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useGroupedAlerts.ts");
/* harmony import */ var _hooks_useFilteredAmGroups__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredAmGroups.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _p;




















const AlertGroups = () => {
  var _alertGroups;

  const [alertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_11__.useAlertManagerSourceName)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__.useQueryParams)();
  const {
    groupBy = []
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_9__.getFiltersFromUrlParams)(queryParams);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const alertGroups = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_12__.useUnifiedAlertingSelector)(state => state.amAlertGroups);
  const {
    loading,
    error,
    result: results = []
  } = (_alertGroups = alertGroups[alertManagerSourceName || '']) !== null && _alertGroups !== void 0 ? _alertGroups : _utils_redux__WEBPACK_IMPORTED_MODULE_8__.initialAsyncRequestState;
  const groupedAlerts = (0,_hooks_useGroupedAlerts__WEBPACK_IMPORTED_MODULE_13__.useGroupedAlerts)(results, groupBy);
  const filteredAlertGroups = (0,_hooks_useFilteredAmGroups__WEBPACK_IMPORTED_MODULE_14__.useFilteredAmGroups)(groupedAlerts);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchNotifications() {
      if (alertManagerSourceName) {
        dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchAlertGroupsAction)(alertManagerSourceName));
      }
    }

    fetchNotifications();
    const interval = setInterval(fetchNotifications, _utils_constants__WEBPACK_IMPORTED_MODULE_10__.NOTIFICATIONS_POLL_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, alertManagerSourceName]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__.AlertingPageWrapper, {
    pageId: "groups",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_alert_groups_AlertGroupFilter__WEBPACK_IMPORTED_MODULE_6__.AlertGroupFilter, {
      groups: results
    }), loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
      text: "Loading notifications"
    }))), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      title: 'Error loading notifications',
      severity: 'error',
      children: error.message || 'Unknown error'
    }), results && filteredAlertGroups.map((group, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(index === 1 && Object.keys(filteredAlertGroups[0].labels).length === 0 || index === 0 && Object.keys(group.labels).length > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("p", {
          className: styles.groupingBanner,
          children: ["Grouped by: ", Object.keys(group.labels).join(', ')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_alert_groups_AlertGroup__WEBPACK_IMPORTED_MODULE_5__.AlertGroup, {
          alertManagerSourceName: alertManagerSourceName || '',
          group: group
        })]
      }, `${JSON.stringify(group.labels)}-group-${index}`);
    }), results && !filteredAlertGroups.length && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
      children: "No results."
    })))]
  });
};

const getStyles = theme => ({
  groupingBanner: _emotion_css__WEBPACK_IMPORTED_MODULE_15__.css`
    margin: ${theme.spacing(2, 0)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertGroups);

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

/***/ "./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTableWithGuidelines": () => (/* binding */ DynamicTableWithGuidelines),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["renderExpandedContent"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// DynamicTable, but renders visual guidelines on the left, for larger screen widths
const DynamicTableWithGuidelines = _ref => {
  let {
    renderExpandedContent
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_3__.DynamicTable, Object.assign({
    renderExpandedContent: renderExpandedContent ? (item, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [!(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.contentGuideline, styles.guideline)
      }), renderExpandedContent(item, index, items)]
    }) : undefined,
    renderPrefixHeader: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.relative,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.headerGuideline, styles.guideline)
      })
    }),
    renderPrefixCell: (_, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.relative,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.topGuideline, styles.guideline)
      }), !(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bottomGuideline, styles.guideline)
      })]
    })
  }, props));
};
const getStyles = theme => ({
  relative: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: relative;
    height: 100%;
  `,
  guideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    left: -19px;
    border-left: 1px solid ${theme.colors.border.medium};
    position: absolute;

    ${theme.breakpoints.down('md')} {
      display: none;
    }
  `,
  topGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 18px;
    border-bottom: 1px solid ${theme.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,
  bottomGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 50%;
    bottom: 0;
  `,
  contentGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,
  headerGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: -25px;
    bottom: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDetails": () => (/* binding */ AlertDetails)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");














const AlertDetails = ({
  alert,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const instancePermissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_6__.getInstancesPermissions)(alertManagerSourceName); // For Grafana Managed alerts the Generator URL redirects to the alert rule edit page, so update permission is required
  // For external alert manager the Generator URL redirects to an external service which we don't control

  const isGrafanaSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.isGrafanaRulesSource)(alertManagerSourceName);
  const isSeeSourceButtonEnabled = isGrafanaSource ? app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.AlertingRuleRead) : true;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.actionsRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Authorize__WEBPACK_IMPORTED_MODULE_10__.Authorize, {
        actions: [instancePermissions.update, instancePermissions.create],
        fallback: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.isEditor,
        children: [alert.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__.AlertState.Suppressed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
          href: `${(0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)('/alerting/silences', alertManagerSourceName)}&silenceIds=${alert.status.silencedBy.join(',')}`,
          className: styles.button,
          icon: 'bell',
          size: 'sm',
          children: "Manage silences"
        }), alert.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__.AlertState.Active && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeLabelBasedSilenceLink)(alertManagerSourceName, alert.labels),
          className: styles.button,
          icon: 'bell-slash',
          size: 'sm',
          children: "Silence"
        })]
      }), isSeeSourceButtonEnabled && alert.generatorURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        className: styles.button,
        href: alert.generatorURL,
        icon: 'chart-line',
        size: 'sm',
        children: "See source"
      })]
    }), Object.entries(alert.annotations).map(([annotationKey, annotationValue]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_9__.AnnotationDetailsField, {
      annotationKey: annotationKey,
      value: annotationValue
    }, annotationKey)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.receivers,
      children: ["Receivers:", ' ', alert.receivers.map(({
        name
      }) => name).filter(name => !!name).join(', ')]
    })]
  });
};

const getStyles = theme => ({
  button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & + & {
      margin-left: ${theme.spacing(1)};
    }
  `,
  actionsRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2, 0)} !important;
    border-bottom: 1px solid ${theme.colors.border.medium};
  `,
  receivers: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(1, 0)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertGroup": () => (/* binding */ AlertGroup)
/* harmony export */ });
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _AlertGroupAlertsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupAlertsTable.tsx");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _AlertGroupHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;











const AlertGroup = ({
  alertManagerSourceName,
  group
}) => {
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: styles.group,
        "data-testid": "alert-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_6__.CollapseToggle, {
          isCollapsed: isCollapsed,
          onToggle: () => setIsCollapsed(!isCollapsed),
          "data-testid": "alert-group-collapse-toggle"
        }), Object.keys(group.labels).length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_4__.AlertLabels, {
          className: styles.headerLabels,
          labels: group.labels
        }) : _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          children: "No grouping"
        }))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertGroupHeader__WEBPACK_IMPORTED_MODULE_7__.AlertGroupHeader, {
        group: group
      })]
    }), !isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertGroupAlertsTable__WEBPACK_IMPORTED_MODULE_5__.AlertGroupAlertsTable, {
      alertManagerSourceName: alertManagerSourceName,
      alerts: group.alerts
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    & + & {
      margin-top: ${theme.spacing(2)};
    }
  `,
  headerLabels: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    padding-bottom: 0 !important;
    margin-bottom: -${theme.spacing(0.5)};
  `,
  header: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing(1, 1, 1, 0)};
    background-color: ${theme.colors.background.secondary};
    width: 100%;
  `,
  group: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  summary: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css``,
  spanElement: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-left: ${theme.spacing(0.5)};
  `,
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.AlertState.Active]: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    color: ${theme.colors.error.main};
  `,
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.AlertState.Suppressed]: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    color: ${theme.colors.primary.main};
  `,
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.AlertState.Unprocessed]: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    color: ${theme.colors.secondary.main};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroupAlertsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertGroupAlertsTable": () => (/* binding */ AlertGroupAlertsTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _silences_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
/* harmony import */ var _AlertDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertDetails.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const AlertGroupAlertsTable = ({
  alerts,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    id: 'state',
    label: 'State',
    // eslint-disable-next-line react/display-name
    renderCell: ({
      data: alert
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_silences_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_4__.AmAlertStateTag, {
        state: alert.status.state
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
        className: styles.duration,
        children: ["for", ' ', (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.intervalToAbbreviatedDurationString)({
          start: new Date(alert.startsAt),
          end: new Date(alert.endsAt)
        })]
      })]
    }),
    size: '220px'
  }, {
    id: 'labels',
    label: 'Labels',
    // eslint-disable-next-line react/display-name
    renderCell: ({
      data: {
        labels
      }
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_5__.AlertLabels, {
      className: styles.labels,
      labels: labels
    }),
    size: 1
  }], [styles]);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => alerts.map(alert => ({
    id: alert.fingerprint,
    data: alert
  })), [alerts]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: styles.tableWrapper,
    "data-testid": "alert-group-table",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_6__.DynamicTableWithGuidelines, {
      cols: columns,
      items: items,
      isExpandable: true,
      renderExpandedContent: ({
        data: alert
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertDetails__WEBPACK_IMPORTED_MODULE_7__.AlertDetails, {
        alert: alert,
        alertManagerSourceName: alertManagerSourceName
      })
    })
  });
};

const getStyles = theme => ({
  tableWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-top: ${theme.spacing(3)};
    ${theme.breakpoints.up('md')} {
      margin-left: ${theme.spacing(4.5)};
    }
  `,
  duration: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-left: ${theme.spacing(1)};
    font-size: ${theme.typography.bodySmall.fontSize};
  `,
  labels: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    padding-bottom: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroupFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertGroupFilter": () => (/* binding */ AlertGroupFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _MatcherFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var _AlertStateFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertStateFilter.tsx");
/* harmony import */ var _GroupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/GroupBy.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const AlertGroupFilter = ({
  groups
}) => {
  const [filterKey, setFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.floor(Math.random() * 100));
  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_9__.useQueryParams)();
  const {
    groupBy = [],
    queryString,
    alertState
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.getFiltersFromUrlParams)(queryParams);
  const matcherFilterKey = `matcher-${filterKey}`;
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_6__.useAlertManagerSourceName)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);

  const clearFilters = () => {
    setQueryParams({
      groupBy: null,
      queryString: null,
      alertState: null
    });
    setTimeout(() => setFilterKey(filterKey + 1), 100);
  };

  const showClearButton = !!(groupBy.length > 0 || queryString || alertState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_1__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.filterSection,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MatcherFilter__WEBPACK_IMPORTED_MODULE_2__.MatcherFilter, {
        className: styles.filterInput,
        defaultQueryString: queryString,
        onFilterChange: value => setQueryParams({
          queryString: value ? value : null
        })
      }, matcherFilterKey), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GroupBy__WEBPACK_IMPORTED_MODULE_4__.GroupBy, {
        className: styles.filterInput,
        groups: groups,
        groupBy: groupBy,
        onGroupingChange: keys => setQueryParams({
          groupBy: keys.length ? keys.join(',') : null
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AlertStateFilter__WEBPACK_IMPORTED_MODULE_3__.AlertStateFilter, {
        stateFilter: alertState,
        onStateFilterChange: value => setQueryParams({
          alertState: value ? value : null
        })
      }), showClearButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: styles.clearButton,
        variant: 'secondary',
        icon: "times",
        onClick: clearFilters,
        children: "Clear filters"
      })]
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_7__.css`
    border-bottom: 1px solid ${theme.colors.border.medium};
    margin-bottom: ${theme.spacing(3)};
  `,
  filterSection: _emotion_css__WEBPACK_IMPORTED_MODULE_7__.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacing(3)};
  `,
  filterInput: _emotion_css__WEBPACK_IMPORTED_MODULE_7__.css`
    width: 340px;
    & + & {
      margin-left: ${theme.spacing(1)};
    }
  `,
  clearButton: _emotion_css__WEBPACK_IMPORTED_MODULE_7__.css`
    margin-left: ${theme.spacing(1)};
    margin-top: 19px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertStateFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertStateFilter": () => (/* binding */ AlertStateFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label;







const AlertStateFilter = ({
  onStateFilterChange,
  stateFilter
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const alertStateOptions = Object.entries(app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_2__.AlertState).sort(([labelA], [labelB]) => labelA < labelB ? -1 : 1).map(([label, state]) => ({
    label,
    value: state
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.wrapper,
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
      children: "State"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
      options: alertStateOptions,
      value: stateFilter,
      onChange: onStateFilterChange
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    margin-left: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/GroupBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupBy": () => (/* binding */ GroupBy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _Icon;






const GroupBy = ({
  className,
  groups,
  groupBy,
  onGroupingChange
}) => {
  const labelKeyOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(groups.flatMap(group => group.alerts).flatMap(({
    labels
  }) => Object.keys(labels))).filter(label => !(label.startsWith('__') && label.endsWith('__'))) // Filter out private labels
  .map(key => ({
    label: key,
    value: key
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    "data-testid": 'group-by-container',
    className: className,
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Custom group by"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, {
      "aria-label": 'group by label keys',
      value: groupBy,
      placeholder: "Group by",
      prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: 'tag-alt'
      })),
      onChange: items => {
        onGroupingChange(items.map(({
          value
        }) => value));
      },
      options: labelKeyOptions,
      menuShouldPortal: true
    })]
  });
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

/***/ "./public/app/features/alerting/unified/hooks/useFilteredAmGroups.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFilteredAmGroups": () => (/* binding */ useFilteredAmGroups)
/* harmony export */ });
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");




const useFilteredAmGroups = groups => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_0__.useQueryParams)();
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.getFiltersFromUrlParams)(queryParams);
  const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.parseMatchers)(filters.queryString || '');
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return groups.reduce((filteredGroup, group) => {
      const alerts = group.alerts.filter(({
        labels,
        status
      }) => {
        const labelsMatch = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.labelsMatchMatchers)(labels, matchers);
        const filtersMatch = filters.alertState ? status.state === filters.alertState : true;
        return labelsMatch && filtersMatch;
      });

      if (alerts.length > 0) {
        // The ungrouped alerts should be first in the results
        if (Object.keys(group.labels).length === 0) {
          filteredGroup.unshift(Object.assign({}, group, {
            alerts
          }));
        } else {
          filteredGroup.push(Object.assign({}, group, {
            alerts
          }));
        }
      }

      return filteredGroup;
    }, []);
  }, [groups, filters, matchers]);
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useGroupedAlerts.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGroupedAlerts": () => (/* binding */ useGroupedAlerts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const useGroupedAlerts = (groups, groupBy) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (groupBy.length === 0) {
      const emptyGroupings = groups.filter(group => Object.keys(group.labels).length === 0);

      if (emptyGroupings.length > 1) {
        // Merges multiple ungrouped grouping
        return groups.reduce((combinedGroups, group) => {
          if (Object.keys(group.labels).length === 0) {
            const noGroupingGroup = combinedGroups.find(({
              labels
            }) => Object.keys(labels));

            if (!noGroupingGroup) {
              combinedGroups.push({
                alerts: group.alerts,
                labels: {},
                receiver: {
                  name: 'NONE'
                }
              });
            } else {
              noGroupingGroup.alerts = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqBy)([...noGroupingGroup.alerts, ...group.alerts], 'labels');
            }
          } else {
            combinedGroups.push(group);
          }

          return combinedGroups;
        }, []);
      } else {
        return groups;
      }
    }

    const alerts = groups.flatMap(({
      alerts
    }) => alerts);
    return alerts.reduce((groupings, alert) => {
      const alertContainsGroupings = groupBy.every(groupByLabel => Object.keys(alert.labels).includes(groupByLabel));

      if (alertContainsGroupings) {
        const existingGrouping = groupings.find(group => {
          return groupBy.every(groupKey => {
            return group.labels[groupKey] === alert.labels[groupKey];
          });
        });

        if (!existingGrouping) {
          const labels = groupBy.reduce((acc, key) => {
            acc = Object.assign({}, acc, {
              [key]: alert.labels[key]
            });
            return acc;
          }, {});
          groupings.push({
            alerts: [alert],
            labels,
            receiver: {
              name: 'NONE'
            }
          });
        } else {
          existingGrouping.alerts.push(alert);
        }
      } else {
        const noGroupingGroup = groupings.find(group => Object.keys(group.labels).length === 0);

        if (!noGroupingGroup) {
          groupings.push({
            alerts: [alert],
            labels: {},
            receiver: {
              name: 'NONE'
            }
          });
        } else {
          noGroupingGroup.alerts.push(alert);
        }
      }

      return groupings;
    }, []);
  }, [groups, groupBy]);
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRHcm91cHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1tQixXQUFXLEdBQUcsTUFBTTtBQUFBOztBQUN4QixRQUFNLENBQUNDLHNCQUFELElBQTJCTiw0RkFBeUIsRUFBMUQ7QUFDQSxRQUFNTyxRQUFRLEdBQUduQix3REFBVyxFQUE1QjtBQUNBLFFBQU0sQ0FBQ29CLFdBQUQsSUFBZ0JoQiw2RUFBYyxFQUFwQztBQUNBLFFBQU07QUFBRWlCLElBQUFBLE9BQU8sR0FBRztBQUFaLE1BQW1CWCxvRUFBdUIsQ0FBQ1UsV0FBRCxDQUFoRDtBQUNBLFFBQU1FLE1BQU0sR0FBR25CLHVEQUFVLENBQUNvQixTQUFELENBQXpCO0FBRUEsUUFBTUMsV0FBVyxHQUFHWCw4RkFBMEIsQ0FBRVksS0FBRCxJQUFXQSxLQUFLLENBQUNDLGFBQWxCLENBQTlDO0FBQ0EsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBRUpDLElBQUFBLEtBRkk7QUFHSkMsSUFBQUEsTUFBTSxFQUFFQyxPQUFPLEdBQUc7QUFIZCxzQkFJRk4sV0FBVyxDQUFDTixzQkFBc0IsSUFBSSxFQUEzQixDQUpULHVEQUkyQ1Qsa0VBSmpEO0FBTUEsUUFBTXNCLGFBQWEsR0FBR2pCLDBFQUFnQixDQUFDZ0IsT0FBRCxFQUFVVCxPQUFWLENBQXRDO0FBQ0EsUUFBTVcsbUJBQW1CLEdBQUdqQixnRkFBbUIsQ0FBQ2dCLGFBQUQsQ0FBL0M7QUFFQWhDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLGFBQVNrQyxrQkFBVCxHQUE4QjtBQUM1QixVQUFJZixzQkFBSixFQUE0QjtBQUMxQkMsUUFBQUEsUUFBUSxDQUFDWCxzRUFBc0IsQ0FBQ1Usc0JBQUQsQ0FBdkIsQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0RlLElBQUFBLGtCQUFrQjtBQUNsQixVQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQ0Ysa0JBQUQsRUFBcUJ0Qiw2RUFBckIsQ0FBNUI7QUFDQSxXQUFPLE1BQU07QUFDWHlCLE1BQUFBLGFBQWEsQ0FBQ0YsUUFBRCxDQUFiO0FBQ0QsS0FGRDtBQUdELEdBWFEsRUFXTixDQUFDZixRQUFELEVBQVdELHNCQUFYLENBWE0sQ0FBVDtBQWFBLHNCQUNFLHlEQUFDLGdGQUFEO0FBQXFCLFVBQU0sRUFBQyxRQUE1QjtBQUFBLDRCQUNFLHdEQUFDLHVGQUFEO0FBQWtCLFlBQU0sRUFBRVk7QUFBMUIsTUFERixFQUVHSCxPQUFPLGdFQUFJLHdEQUFDLDJEQUFEO0FBQW9CLFVBQUksRUFBQztBQUF6QixNQUFKLEVBRlYsRUFHR0MsS0FBSyxJQUFJLENBQUNELE9BQVYsaUJBQ0Msd0RBQUMsOENBQUQ7QUFBTyxXQUFLLEVBQUUsNkJBQWQ7QUFBNkMsY0FBUSxFQUFFLE9BQXZEO0FBQUEsZ0JBQ0dDLEtBQUssQ0FBQ1MsT0FBTixJQUFpQjtBQURwQixNQUpKLEVBUUdQLE9BQU8sSUFDTkUsbUJBQW1CLENBQUNNLEdBQXBCLENBQXdCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixLQUFrQjtBQUN4QywwQkFDRSx5REFBQywyQ0FBRDtBQUFBLG1CQUNHLENBQUVBLEtBQUssS0FBSyxDQUFWLElBQWVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVixtQkFBbUIsQ0FBQyxDQUFELENBQW5CLENBQXVCVyxNQUFuQyxFQUEyQ0MsTUFBM0MsS0FBc0QsQ0FBdEUsSUFDQ0osS0FBSyxLQUFLLENBQVYsSUFBZUMsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQUssQ0FBQ0ksTUFBbEIsRUFBMEJDLE1BQTFCLEdBQW1DLENBRHBELGtCQUVDO0FBQUcsbUJBQVMsRUFBRXRCLE1BQU0sQ0FBQ3VCLGNBQXJCO0FBQUEscUNBQWtESixNQUFNLENBQUNDLElBQVAsQ0FBWUgsS0FBSyxDQUFDSSxNQUFsQixFQUEwQkcsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBbEQ7QUFBQSxVQUhKLGVBS0Usd0RBQUMsMkVBQUQ7QUFBWSxnQ0FBc0IsRUFBRTVCLHNCQUFzQixJQUFJLEVBQTlEO0FBQWtFLGVBQUssRUFBRXFCO0FBQXpFLFVBTEY7QUFBQSxTQUFzQixHQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsS0FBSyxDQUFDSSxNQUFyQixDQUE2QixVQUFTSCxLQUFNLEVBQXBFLENBREY7QUFTRCxLQVZELENBVEosRUFvQkdWLE9BQU8sSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQ1ksTUFBaEMsOEJBQTBDO0FBQUE7QUFBQSxNQUExQyxFQXBCSDtBQUFBLElBREY7QUF3QkQsQ0F0REQ7O0FBd0RBLE1BQU1yQixTQUFTLEdBQUkwQixLQUFELEtBQTJCO0FBQzNDSixFQUFBQSxjQUFjLEVBQUU3Qiw4Q0FBSTtBQUN0QixjQUFjaUMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUFvQjtBQUNsQztBQUg2QyxDQUEzQixDQUFsQjs7QUFNQSxpRUFBZWpDLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7O0FBUU8sTUFBTVosbUJBQThCLEdBQUcsQ0FBQztBQUFFaUQsRUFBQUEsUUFBRjtBQUFZQyxFQUFBQSxNQUFaO0FBQW9CQyxFQUFBQTtBQUFwQixDQUFELEtBQXFDO0FBQ2pGLFFBQU1DLFFBQVEsR0FBR0wsd0VBQVcsQ0FDMUJDLHdEQUFXLENBQUU1QixLQUFELElBQXVCQSxLQUFLLENBQUNpQyxRQUE5QixDQURlLEVBRTFCSCxNQUYwQixDQUE1QjtBQUtBLHNCQUNFLHVEQUFDLHFFQUFEO0FBQU0sWUFBUSxFQUFFRSxRQUFoQjtBQUFBLDJCQUNFLHVEQUFDLDhFQUFEO0FBQWUsZUFBUyxFQUFFRCxTQUExQjtBQUFBLGdCQUFzQ0Y7QUFBdEM7QUFERixJQURGO0FBS0QsQ0FYTTs7Ozs7Ozs7Ozs7Ozs7QUNYUDtBQUVBOzs7QUFPTyxNQUFNTSxTQUFvQixHQUFHLENBQUM7QUFBRUMsRUFBQUEsT0FBRjtBQUFXUCxFQUFBQSxRQUFYO0FBQXFCUSxFQUFBQSxRQUFRLEdBQUc7QUFBaEMsQ0FBRCxLQUE0QztBQUM5RSxNQUFJRCxPQUFPLENBQUNFLElBQVIsQ0FBY0MsTUFBRCxJQUFZTCwrRUFBQSxDQUFxQkssTUFBckIsRUFBNkJGLFFBQTdCLENBQXpCLENBQUosRUFBc0U7QUFDcEUsd0JBQU87QUFBQSxnQkFBR1I7QUFBSCxNQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQU5NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUDtBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ08sTUFBTWMsMEJBQTBCLEdBQUcsUUFHQTtBQUFBLE1BSG1CO0FBQzNEQyxJQUFBQTtBQUQyRCxHQUduQjtBQUFBLE1BRHJDQyxLQUNxQzs7QUFDeEMsUUFBTWhELE1BQU0sR0FBR25CLHVEQUFVLENBQUNvQixTQUFELENBQXpCO0FBQ0Esc0JBQ0UsdURBQUMsdURBQUQ7QUFDRSx5QkFBcUIsRUFDbkI4QyxxQkFBcUIsR0FDakIsQ0FBQ0UsSUFBRCxFQUFPL0IsS0FBUCxFQUFjZ0MsS0FBZCxrQkFDRTtBQUFBLGlCQUNHLEVBQUVoQyxLQUFLLEtBQUtnQyxLQUFLLENBQUM1QixNQUFOLEdBQWUsQ0FBM0Isa0JBQWlDO0FBQUssaUJBQVMsRUFBRXNCLGdEQUFFLENBQUM1QyxNQUFNLENBQUNtRCxnQkFBUixFQUEwQm5ELE1BQU0sQ0FBQ29ELFNBQWpDO0FBQWxCLFFBRHBDLEVBRUdMLHFCQUFxQixDQUFDRSxJQUFELEVBQU8vQixLQUFQLEVBQWNnQyxLQUFkLENBRnhCO0FBQUEsTUFGZSxHQU9qQkcsU0FUUjtBQVdFLHNCQUFrQixFQUFFLG1CQUNsQjtBQUFLLGVBQVMsRUFBRXJELE1BQU0sQ0FBQ3NELFFBQXZCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFVixnREFBRSxDQUFDNUMsTUFBTSxDQUFDdUQsZUFBUixFQUF5QnZELE1BQU0sQ0FBQ29ELFNBQWhDO0FBQWxCO0FBREYsTUFaSjtBQWdCRSxvQkFBZ0IsRUFBRSxDQUFDSSxDQUFELEVBQUl0QyxLQUFKLEVBQVdnQyxLQUFYLGtCQUNoQjtBQUFLLGVBQVMsRUFBRWxELE1BQU0sQ0FBQ3NELFFBQXZCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFVixnREFBRSxDQUFDNUMsTUFBTSxDQUFDeUQsWUFBUixFQUFzQnpELE1BQU0sQ0FBQ29ELFNBQTdCO0FBQWxCLFFBREYsRUFFRyxFQUFFbEMsS0FBSyxLQUFLZ0MsS0FBSyxDQUFDNUIsTUFBTixHQUFlLENBQTNCLGtCQUFpQztBQUFLLGlCQUFTLEVBQUVzQixnREFBRSxDQUFDNUMsTUFBTSxDQUFDMEQsZUFBUixFQUF5QjFELE1BQU0sQ0FBQ29ELFNBQWhDO0FBQWxCLFFBRnBDO0FBQUE7QUFqQkosS0FzQk1KLEtBdEJOLEVBREY7QUEwQkQsQ0EvQk07QUFpQ0EsTUFBTS9DLFNBQVMsR0FBSTBCLEtBQUQsS0FBMkI7QUFDbEQyQixFQUFBQSxRQUFRLEVBQUU1RCw2Q0FBSTtBQUNoQjtBQUNBO0FBQ0EsR0FKb0Q7QUFLbEQwRCxFQUFBQSxTQUFTLEVBQUUxRCw2Q0FBSTtBQUNqQjtBQUNBLDZCQUE2QmlDLEtBQUssQ0FBQ2dDLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFBTztBQUN4RDtBQUNBO0FBQ0EsTUFBTWxDLEtBQUssQ0FBQ21DLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQTZCO0FBQ25DO0FBQ0E7QUFDQSxHQWJvRDtBQWNsRE4sRUFBQUEsWUFBWSxFQUFFL0QsNkNBQUk7QUFDcEI7QUFDQSwrQkFBK0JpQyxLQUFLLENBQUNnQyxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BQU87QUFDMUQ7QUFDQTtBQUNBLEdBbkJvRDtBQW9CbERILEVBQUFBLGVBQWUsRUFBRWhFLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQSxHQXZCb0Q7QUF3QmxEeUQsRUFBQUEsZ0JBQWdCLEVBQUV6RCw2Q0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxHQTVCb0Q7QUE2QmxENkQsRUFBQUEsZUFBZSxFQUFFN0QsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBaENvRCxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ1A7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQU9PLE1BQU04RSxZQUFrRCxHQUFHLENBQUM7QUFBRUMsRUFBQUEsS0FBRjtBQUFTN0UsRUFBQUE7QUFBVCxDQUFELEtBQXVDO0FBQ3ZHLFFBQU1JLE1BQU0sR0FBR25CLHVEQUFVLENBQUNvQixTQUFELENBQXpCO0FBQ0EsUUFBTXlFLG1CQUFtQixHQUFHUCw4RUFBdUIsQ0FBQ3ZFLHNCQUFELENBQW5ELENBRnVHLENBSXZHO0FBQ0E7O0FBQ0EsUUFBTStFLGVBQWUsR0FBR1AsdUVBQW9CLENBQUN4RSxzQkFBRCxDQUE1QztBQUNBLFFBQU1nRix3QkFBd0IsR0FBR0QsZUFBZSxHQUM1Q3RDLG1GQUFBLENBQXlCNkIsMkVBQXpCLENBRDRDLEdBRTVDLElBRko7QUFJQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFbEUsTUFBTSxDQUFDK0UsVUFBdkI7QUFBQSw4QkFDRSx5REFBQyxrREFBRDtBQUFXLGVBQU8sRUFBRSxDQUFDTCxtQkFBbUIsQ0FBQ00sTUFBckIsRUFBNkJOLG1CQUFtQixDQUFDTyxNQUFqRCxDQUFwQjtBQUE4RSxnQkFBUSxFQUFFNUMsOEVBQXhGO0FBQUEsbUJBQ0dvQyxLQUFLLENBQUNVLE1BQU4sQ0FBYWhGLEtBQWIsS0FBdUI4RCw0RkFBdkIsaUJBQ0Msd0RBQUMsbURBQUQ7QUFDRSxjQUFJLEVBQUcsR0FBRUksdURBQVUsQ0FDakIsb0JBRGlCLEVBRWpCekUsc0JBRmlCLENBR2pCLGVBQWM2RSxLQUFLLENBQUNVLE1BQU4sQ0FBYUUsVUFBYixDQUF3QjdELElBQXhCLENBQTZCLEdBQTdCLENBQWtDLEVBSnBEO0FBS0UsbUJBQVMsRUFBRXhCLE1BQU0sQ0FBQ3NGLE1BTHBCO0FBTUUsY0FBSSxFQUFFLE1BTlI7QUFPRSxjQUFJLEVBQUUsSUFQUjtBQUFBO0FBQUEsVUFGSixFQWNHYixLQUFLLENBQUNVLE1BQU4sQ0FBYWhGLEtBQWIsS0FBdUI4RCx3RkFBdkIsaUJBQ0Msd0RBQUMsbURBQUQ7QUFDRSxjQUFJLEVBQUVLLHNFQUF5QixDQUFDMUUsc0JBQUQsRUFBeUI2RSxLQUFLLENBQUNwRCxNQUEvQixDQURqQztBQUVFLG1CQUFTLEVBQUVyQixNQUFNLENBQUNzRixNQUZwQjtBQUdFLGNBQUksRUFBRSxZQUhSO0FBSUUsY0FBSSxFQUFFLElBSlI7QUFBQTtBQUFBLFVBZko7QUFBQSxRQURGLEVBMEJHVix3QkFBd0IsSUFBSUgsS0FBSyxDQUFDZSxZQUFsQyxpQkFDQyx3REFBQyxtREFBRDtBQUFZLGlCQUFTLEVBQUV4RixNQUFNLENBQUNzRixNQUE5QjtBQUFzQyxZQUFJLEVBQUViLEtBQUssQ0FBQ2UsWUFBbEQ7QUFBZ0UsWUFBSSxFQUFFLFlBQXRFO0FBQW9GLFlBQUksRUFBRSxJQUExRjtBQUFBO0FBQUEsUUEzQko7QUFBQSxNQURGLEVBaUNHckUsTUFBTSxDQUFDc0UsT0FBUCxDQUFlaEIsS0FBSyxDQUFDaUIsV0FBckIsRUFBa0MxRSxHQUFsQyxDQUFzQyxDQUFDLENBQUMyRSxhQUFELEVBQWdCQyxlQUFoQixDQUFELGtCQUNyQyx3REFBQywyRUFBRDtBQUE0QyxtQkFBYSxFQUFFRCxhQUEzRDtBQUEwRSxXQUFLLEVBQUVDO0FBQWpGLE9BQTZCRCxhQUE3QixDQURELENBakNILGVBb0NFO0FBQUssZUFBUyxFQUFFM0YsTUFBTSxDQUFDNkYsU0FBdkI7QUFBQSwrQkFDYSxHQURiLEVBRUdwQixLQUFLLENBQUNvQixTQUFOLENBQ0U3RSxHQURGLENBQ00sQ0FBQztBQUFFOEUsUUFBQUE7QUFBRixPQUFELEtBQWNBLElBRHBCLEVBRUVDLE1BRkYsQ0FFVUQsSUFBRCxJQUFVLENBQUMsQ0FBQ0EsSUFGckIsRUFHRXRFLElBSEYsQ0FHTyxJQUhQLENBRkg7QUFBQSxNQXBDRjtBQUFBLElBREY7QUE4Q0QsQ0F6RE07O0FBMkRQLE1BQU12QixTQUFTLEdBQUkwQixLQUFELEtBQTJCO0FBQzNDMkQsRUFBQUEsTUFBTSxFQUFFNUYsNkNBQUk7QUFDZDtBQUNBLHFCQUFxQmlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdEM7QUFDQSxHQUw2QztBQU0zQ21ELEVBQUFBLFVBQVUsRUFBRXJGLDZDQUFJO0FBQ2xCLGVBQWVpQyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBQW9CO0FBQ25DLCtCQUErQkQsS0FBSyxDQUFDZ0MsTUFBTixDQUFhQyxNQUFiLENBQW9CQyxNQUFPO0FBQzFELEdBVDZDO0FBVTNDZ0MsRUFBQUEsU0FBUyxFQUFFbkcsNkNBQUk7QUFDakIsZUFBZWlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBb0I7QUFDbkM7QUFaNkMsQ0FBM0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBT08sTUFBTTVDLFVBQVUsR0FBRyxDQUFDO0FBQUVZLEVBQUFBLHNCQUFGO0FBQTBCcUIsRUFBQUE7QUFBMUIsQ0FBRCxLQUE4QztBQUN0RSxRQUFNLENBQUNvRixXQUFELEVBQWNDLGNBQWQsSUFBZ0NOLCtDQUFRLENBQVUsSUFBVixDQUE5QztBQUNBLFFBQU1oRyxNQUFNLEdBQUduQix1REFBVSxDQUFDb0IsU0FBRCxDQUF6QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFRCxNQUFNLENBQUN1RyxPQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFdkcsTUFBTSxDQUFDd0csTUFBdkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUV4RyxNQUFNLENBQUNpQixLQUF2QjtBQUE4Qix1QkFBWSxhQUExQztBQUFBLGdDQUNFLHVEQUFDLDJEQUFEO0FBQ0UscUJBQVcsRUFBRW9GLFdBRGY7QUFFRSxrQkFBUSxFQUFFLE1BQU1DLGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBRmhDO0FBR0UseUJBQVk7QUFIZCxVQURGLEVBTUdsRixNQUFNLENBQUNDLElBQVAsQ0FBWUgsS0FBSyxDQUFDSSxNQUFsQixFQUEwQkMsTUFBMUIsZ0JBQ0MsdURBQUMscURBQUQ7QUFBYSxtQkFBUyxFQUFFdEIsTUFBTSxDQUFDeUcsWUFBL0I7QUFBNkMsZ0JBQU0sRUFBRXhGLEtBQUssQ0FBQ0k7QUFBM0QsVUFERCxrQ0FHQztBQUFBO0FBQUEsVUFIRCxDQU5IO0FBQUEsUUFERixlQWFFLHVEQUFDLCtEQUFEO0FBQWtCLGFBQUssRUFBRUo7QUFBekIsUUFiRjtBQUFBLE1BREYsRUFnQkcsQ0FBQ29GLFdBQUQsaUJBQWdCLHVEQUFDLHlFQUFEO0FBQXVCLDRCQUFzQixFQUFFekcsc0JBQS9DO0FBQXVFLFlBQU0sRUFBRXFCLEtBQUssQ0FBQ3lGO0FBQXJGLE1BaEJuQjtBQUFBLElBREY7QUFvQkQsQ0F4Qk07O0FBMEJQLE1BQU16RyxTQUFTLEdBQUkwQixLQUFELEtBQTJCO0FBQzNDNEUsRUFBQUEsT0FBTyxFQUFFN0csNkNBQUk7QUFDZjtBQUNBLG9CQUFvQmlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDckM7QUFDQSxHQUw2QztBQU0zQzZFLEVBQUFBLFlBQVksRUFBRS9HLDZDQUFJO0FBQ3BCO0FBQ0Esc0JBQXNCaUMsS0FBSyxDQUFDQyxPQUFOLENBQWMsR0FBZCxDQUFtQjtBQUN6QyxHQVQ2QztBQVUzQzRFLEVBQUFBLE1BQU0sRUFBRTlHLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWVpQyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQTBCO0FBQ3pDLHdCQUF3QkQsS0FBSyxDQUFDZ0MsTUFBTixDQUFhZ0QsVUFBYixDQUF3QkMsU0FBVTtBQUMxRDtBQUNBLEdBbkI2QztBQW9CM0MzRixFQUFBQSxLQUFLLEVBQUV2Qiw2Q0FBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEdBeEI2QztBQXlCM0NtSCxFQUFBQSxPQUFPLEVBQUVuSCw2Q0FBSSxFQXpCOEI7QUEwQjNDb0gsRUFBQUEsV0FBVyxFQUFFcEgsNkNBQUk7QUFDbkIsbUJBQW1CaUMsS0FBSyxDQUFDQyxPQUFOLENBQWMsR0FBZCxDQUFtQjtBQUN0QyxHQTVCNkM7QUE2QjNDLEdBQUNxQyx3RkFBRCxHQUFxQnZFLDZDQUFJO0FBQzNCLGFBQWFpQyxLQUFLLENBQUNnQyxNQUFOLENBQWFyRCxLQUFiLENBQW1CeUcsSUFBSztBQUNyQyxHQS9CNkM7QUFnQzNDLEdBQUM5Qyw0RkFBRCxHQUF5QnZFLDZDQUFJO0FBQy9CLGFBQWFpQyxLQUFLLENBQUNnQyxNQUFOLENBQWFxRCxPQUFiLENBQXFCRCxJQUFLO0FBQ3ZDLEdBbEM2QztBQW1DM0MsR0FBQzlDLDZGQUFELEdBQTBCdkUsNkNBQUk7QUFDaEMsYUFBYWlDLEtBQUssQ0FBQ2dDLE1BQU4sQ0FBYWlELFNBQWIsQ0FBdUJHLElBQUs7QUFDekM7QUFyQzZDLENBQTNCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBVU8sTUFBTWIscUJBQXFCLEdBQUcsQ0FBQztBQUFFUSxFQUFBQSxNQUFGO0FBQVU5RyxFQUFBQTtBQUFWLENBQUQsS0FBK0M7QUFDbEYsUUFBTUksTUFBTSxHQUFHbkIsdURBQVUsQ0FBQ29CLFNBQUQsQ0FBekI7QUFFQSxRQUFNb0gsT0FBTyxHQUFHSCw4Q0FBTyxDQUNyQixNQUEwQyxDQUN4QztBQUNFSSxJQUFBQSxFQUFFLEVBQUUsT0FETjtBQUVFQyxJQUFBQSxLQUFLLEVBQUUsT0FGVDtBQUdFO0FBQ0FDLElBQUFBLFVBQVUsRUFBRSxDQUFDO0FBQUVDLE1BQUFBLElBQUksRUFBRWhEO0FBQVIsS0FBRCxrQkFDVjtBQUFBLDhCQUNFLHVEQUFDLHNFQUFEO0FBQWlCLGFBQUssRUFBRUEsS0FBSyxDQUFDVSxNQUFOLENBQWFoRjtBQUFyQyxRQURGLGVBRUU7QUFBTSxpQkFBUyxFQUFFSCxNQUFNLENBQUMwSCxRQUF4QjtBQUFBLDBCQUNNLEdBRE4sRUFFR1Asa0ZBQW1DLENBQUM7QUFDbkNRLFVBQUFBLEtBQUssRUFBRSxJQUFJQyxJQUFKLENBQVNuRCxLQUFLLENBQUNvRCxRQUFmLENBRDRCO0FBRW5DQyxVQUFBQSxHQUFHLEVBQUUsSUFBSUYsSUFBSixDQUFTbkQsS0FBSyxDQUFDc0QsTUFBZjtBQUY4QixTQUFELENBRnRDO0FBQUEsUUFGRjtBQUFBLE1BTEo7QUFnQkVDLElBQUFBLElBQUksRUFBRTtBQWhCUixHQUR3QyxFQW1CeEM7QUFDRVYsSUFBQUEsRUFBRSxFQUFFLFFBRE47QUFFRUMsSUFBQUEsS0FBSyxFQUFFLFFBRlQ7QUFHRTtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxJQUFJLEVBQUU7QUFBRXBHLFFBQUFBO0FBQUY7QUFBUixLQUFELGtCQUEwQix1REFBQyxxREFBRDtBQUFhLGVBQVMsRUFBRXJCLE1BQU0sQ0FBQ3FCLE1BQS9CO0FBQXVDLFlBQU0sRUFBRUE7QUFBL0MsTUFKeEM7QUFLRTJHLElBQUFBLElBQUksRUFBRTtBQUxSLEdBbkJ3QyxDQURyQixFQTRCckIsQ0FBQ2hJLE1BQUQsQ0E1QnFCLENBQXZCO0FBK0JBLFFBQU1rRCxLQUFLLEdBQUdnRSw4Q0FBTyxDQUNuQixNQUNFUixNQUFNLENBQUMxRixHQUFQLENBQVl5RCxLQUFELEtBQVk7QUFDckI2QyxJQUFBQSxFQUFFLEVBQUU3QyxLQUFLLENBQUN3RCxXQURXO0FBRXJCUixJQUFBQSxJQUFJLEVBQUVoRDtBQUZlLEdBQVosQ0FBWCxDQUZpQixFQU1uQixDQUFDaUMsTUFBRCxDQU5tQixDQUFyQjtBQVNBLHNCQUNFO0FBQUssYUFBUyxFQUFFMUcsTUFBTSxDQUFDa0ksWUFBdkI7QUFBcUMsbUJBQVksbUJBQWpEO0FBQUEsMkJBQ0UsdURBQUMsbUZBQUQ7QUFDRSxVQUFJLEVBQUViLE9BRFI7QUFFRSxXQUFLLEVBQUVuRSxLQUZUO0FBR0Usa0JBQVksRUFBRSxJQUhoQjtBQUlFLDJCQUFxQixFQUFFLENBQUM7QUFBRXVFLFFBQUFBLElBQUksRUFBRWhEO0FBQVIsT0FBRCxrQkFDckIsdURBQUMsdURBQUQ7QUFBYyxhQUFLLEVBQUVBLEtBQXJCO0FBQTRCLDhCQUFzQixFQUFFN0U7QUFBcEQ7QUFMSjtBQURGLElBREY7QUFZRCxDQXZETTs7QUF5RFAsTUFBTUssU0FBUyxHQUFJMEIsS0FBRCxLQUEyQjtBQUMzQ3VHLEVBQUFBLFlBQVksRUFBRXhJLDZDQUFJO0FBQ3BCLGtCQUFrQmlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDbkMsTUFBTUQsS0FBSyxDQUFDbUMsV0FBTixDQUFrQnFFLEVBQWxCLENBQXFCLElBQXJCLENBQTJCO0FBQ2pDLHFCQUFxQnhHLEtBQUssQ0FBQ0MsT0FBTixDQUFjLEdBQWQsQ0FBbUI7QUFDeEM7QUFDQSxHQU42QztBQU8zQzhGLEVBQUFBLFFBQVEsRUFBRWhJLDZDQUFJO0FBQ2hCLG1CQUFtQmlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDcEMsaUJBQWlCRCxLQUFLLENBQUN5RyxVQUFOLENBQWlCQyxTQUFqQixDQUEyQkMsUUFBUztBQUNyRCxHQVY2QztBQVczQ2pILEVBQUFBLE1BQU0sRUFBRTNCLDZDQUFJO0FBQ2Q7QUFDQTtBQWI2QyxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTU8sTUFBTVQsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFMkosRUFBQUE7QUFBRixDQUFELEtBQXVCO0FBQ3JELFFBQU0sQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLElBQTRCOUMsK0NBQVEsQ0FBUytDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBVCxDQUExQztBQUNBLFFBQU0sQ0FBQ25KLFdBQUQsRUFBY29KLGNBQWQsSUFBZ0NwSyw2RUFBYyxFQUFwRDtBQUNBLFFBQU07QUFBRWlCLElBQUFBLE9BQU8sR0FBRyxFQUFaO0FBQWdCb0osSUFBQUEsV0FBaEI7QUFBNkJDLElBQUFBO0FBQTdCLE1BQTRDaEssb0VBQXVCLENBQUNVLFdBQUQsQ0FBekU7QUFDQSxRQUFNdUosZ0JBQWdCLEdBQUksV0FBVVIsU0FBVSxFQUE5QztBQUVBLFFBQU0sQ0FBQ2pKLHNCQUFELEVBQXlCMEoseUJBQXpCLElBQXNEaEssMkZBQXlCLEVBQXJGO0FBQ0EsUUFBTVUsTUFBTSxHQUFHbkIsdURBQVUsQ0FBQ29CLFNBQUQsQ0FBekI7O0FBRUEsUUFBTXNKLFlBQVksR0FBRyxNQUFNO0FBQ3pCTCxJQUFBQSxjQUFjLENBQUM7QUFDYm5KLE1BQUFBLE9BQU8sRUFBRSxJQURJO0FBRWJvSixNQUFBQSxXQUFXLEVBQUUsSUFGQTtBQUdiQyxNQUFBQSxVQUFVLEVBQUU7QUFIQyxLQUFELENBQWQ7QUFLQUksSUFBQUEsVUFBVSxDQUFDLE1BQU1WLFlBQVksQ0FBQ0QsU0FBUyxHQUFHLENBQWIsQ0FBbkIsRUFBb0MsR0FBcEMsQ0FBVjtBQUNELEdBUEQ7O0FBU0EsUUFBTVksZUFBZSxHQUFHLENBQUMsRUFBRTFKLE9BQU8sQ0FBQ3VCLE1BQVIsR0FBaUIsQ0FBakIsSUFBc0I2SCxXQUF0QixJQUFxQ0MsVUFBdkMsQ0FBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRXBKLE1BQU0sQ0FBQ3VHLE9BQXZCO0FBQUEsNEJBQ0Usd0RBQUMsbUVBQUQ7QUFBb0IsYUFBTyxFQUFFM0csc0JBQTdCO0FBQXFELGNBQVEsRUFBRTBKO0FBQS9ELE1BREYsZUFFRTtBQUFLLGVBQVMsRUFBRXRKLE1BQU0sQ0FBQzBKLGFBQXZCO0FBQUEsOEJBQ0Usd0RBQUMseURBQUQ7QUFDRSxpQkFBUyxFQUFFMUosTUFBTSxDQUFDMkosV0FEcEI7QUFHRSwwQkFBa0IsRUFBRVIsV0FIdEI7QUFJRSxzQkFBYyxFQUFHUyxLQUFELElBQVdWLGNBQWMsQ0FBQztBQUFFQyxVQUFBQSxXQUFXLEVBQUVTLEtBQUssR0FBR0EsS0FBSCxHQUFXO0FBQS9CLFNBQUQ7QUFKM0MsU0FFT1AsZ0JBRlAsQ0FERixlQU9FLHdEQUFDLDZDQUFEO0FBQ0UsaUJBQVMsRUFBRXJKLE1BQU0sQ0FBQzJKLFdBRHBCO0FBRUUsY0FBTSxFQUFFZixNQUZWO0FBR0UsZUFBTyxFQUFFN0ksT0FIWDtBQUlFLHdCQUFnQixFQUFHcUIsSUFBRCxJQUFVOEgsY0FBYyxDQUFDO0FBQUVuSixVQUFBQSxPQUFPLEVBQUVxQixJQUFJLENBQUNFLE1BQUwsR0FBY0YsSUFBSSxDQUFDSSxJQUFMLENBQVUsR0FBVixDQUFkLEdBQStCO0FBQTFDLFNBQUQ7QUFKNUMsUUFQRixlQWFFLHdEQUFDLCtEQUFEO0FBQ0UsbUJBQVcsRUFBRTRILFVBRGY7QUFFRSwyQkFBbUIsRUFBR1EsS0FBRCxJQUFXVixjQUFjLENBQUM7QUFBRUUsVUFBQUEsVUFBVSxFQUFFUSxLQUFLLEdBQUdBLEtBQUgsR0FBVztBQUE5QixTQUFEO0FBRmhELFFBYkYsRUFpQkdILGVBQWUsaUJBQ2Qsd0RBQUMsK0NBQUQ7QUFBUSxpQkFBUyxFQUFFekosTUFBTSxDQUFDNkosV0FBMUI7QUFBdUMsZUFBTyxFQUFFLFdBQWhEO0FBQTZELFlBQUksRUFBQyxPQUFsRTtBQUEwRSxlQUFPLEVBQUVOLFlBQW5GO0FBQUE7QUFBQSxRQWxCSjtBQUFBLE1BRkY7QUFBQSxJQURGO0FBNEJELENBaERNOztBQWtEUCxNQUFNdEosU0FBUyxHQUFJMEIsS0FBRCxLQUEyQjtBQUMzQzRFLEVBQUFBLE9BQU8sRUFBRTdHLDZDQUFJO0FBQ2YsK0JBQStCaUMsS0FBSyxDQUFDZ0MsTUFBTixDQUFhQyxNQUFiLENBQW9CQyxNQUFPO0FBQzFELHFCQUFxQmxDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdEMsR0FKNkM7QUFLM0M4SCxFQUFBQSxhQUFhLEVBQUVoSyw2Q0FBSTtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCaUMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN0QyxHQVQ2QztBQVUzQytILEVBQUFBLFdBQVcsRUFBRWpLLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQSxxQkFBcUJpQyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3RDO0FBQ0EsR0FmNkM7QUFnQjNDaUksRUFBQUEsV0FBVyxFQUFFbkssNkNBQUk7QUFDbkIsbUJBQW1CaUMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNwQztBQUNBO0FBbkI2QyxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFPTyxNQUFNNkcsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFdUIsRUFBQUEsbUJBQUY7QUFBdUJDLEVBQUFBO0FBQXZCLENBQUQsS0FBaUQ7QUFDL0UsUUFBTWpLLE1BQU0sR0FBR25CLHVEQUFVLENBQUNvQixTQUFELENBQXpCO0FBQ0EsUUFBTWlLLGlCQUFvQyxHQUFHL0ksTUFBTSxDQUFDc0UsT0FBUCxDQUFleEIsaUZBQWYsRUFDMUNrRyxJQUQwQyxDQUNyQyxDQUFDLENBQUNDLE1BQUQsQ0FBRCxFQUFXLENBQUNDLE1BQUQsQ0FBWCxLQUF5QkQsTUFBTSxHQUFHQyxNQUFULEdBQWtCLENBQUMsQ0FBbkIsR0FBdUIsQ0FEWCxFQUUxQ3JKLEdBRjBDLENBRXRDLENBQUMsQ0FBQ3VHLEtBQUQsRUFBUXBILEtBQVIsQ0FBRCxNQUFxQjtBQUN4Qm9ILElBQUFBLEtBRHdCO0FBRXhCcUMsSUFBQUEsS0FBSyxFQUFFeko7QUFGaUIsR0FBckIsQ0FGc0MsQ0FBN0M7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUgsTUFBTSxDQUFDdUcsT0FBdkI7QUFBQSxnREFDRSx1REFBQyw4Q0FBRDtBQUFBO0FBQUEsTUFERixnQkFFRSx1REFBQyx5REFBRDtBQUFrQixhQUFPLEVBQUUyRCxpQkFBM0I7QUFBOEMsV0FBSyxFQUFFRCxXQUFyRDtBQUFrRSxjQUFRLEVBQUVEO0FBQTVFLE1BRkY7QUFBQSxJQURGO0FBTUQsQ0FmTTs7QUFpQlAsTUFBTS9KLFNBQVMsR0FBSTBCLEtBQUQsS0FBMkI7QUFDM0M0RSxFQUFBQSxPQUFPLEVBQUU3Ryw2Q0FBSTtBQUNmLG1CQUFtQmlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDcEM7QUFINkMsQ0FBM0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7OztBQVVPLE1BQU04RyxPQUFPLEdBQUcsQ0FBQztBQUFFK0IsRUFBQUEsU0FBRjtBQUFhN0IsRUFBQUEsTUFBYjtBQUFxQjdJLEVBQUFBLE9BQXJCO0FBQThCMkssRUFBQUE7QUFBOUIsQ0FBRCxLQUE2RDtBQUNsRixRQUFNQyxlQUFlLEdBQUdMLDRDQUFJLENBQUMxQixNQUFNLENBQUNnQyxPQUFQLENBQWdCM0osS0FBRCxJQUFXQSxLQUFLLENBQUN5RixNQUFoQyxFQUF3Q2tFLE9BQXhDLENBQWdELENBQUM7QUFBRXZKLElBQUFBO0FBQUYsR0FBRCxLQUFnQkYsTUFBTSxDQUFDQyxJQUFQLENBQVlDLE1BQVosQ0FBaEUsQ0FBRCxDQUFKLENBQ3JCMEUsTUFEcUIsQ0FDYndCLEtBQUQsSUFBVyxFQUFFQSxLQUFLLENBQUNzRCxVQUFOLENBQWlCLElBQWpCLEtBQTBCdEQsS0FBSyxDQUFDdUQsUUFBTixDQUFlLElBQWYsQ0FBNUIsQ0FERyxFQUNnRDtBQURoRCxHQUVyQjlKLEdBRnFCLENBRUMrSixHQUFELEtBQVU7QUFDOUJ4RCxJQUFBQSxLQUFLLEVBQUV3RCxHQUR1QjtBQUU5Qm5CLElBQUFBLEtBQUssRUFBRW1CO0FBRnVCLEdBQVYsQ0FGQSxDQUF4QjtBQU9BLHNCQUNFO0FBQUssbUJBQWEsb0JBQWxCO0FBQXdDLGFBQVMsRUFBRU4sU0FBbkQ7QUFBQSxnREFDRSx1REFBQyw4Q0FBRDtBQUFBO0FBQUEsTUFERixnQkFFRSx1REFBQyxvREFBRDtBQUNFLG9CQUFZLHFCQURkO0FBRUUsV0FBSyxFQUFFMUssT0FGVDtBQUdFLGlCQUFXLEVBQUMsVUFIZDtBQUlFLFlBQU0saUNBQUUsdURBQUMsNkNBQUQ7QUFBTSxZQUFJLEVBQUU7QUFBWixRQUFGLENBSlI7QUFLRSxjQUFRLEVBQUdtRCxLQUFELElBQVc7QUFDbkJ3SCxRQUFBQSxnQkFBZ0IsQ0FBQ3hILEtBQUssQ0FBQ2xDLEdBQU4sQ0FBVSxDQUFDO0FBQUU0SSxVQUFBQTtBQUFGLFNBQUQsS0FBZUEsS0FBekIsQ0FBRCxDQUFoQjtBQUNELE9BUEg7QUFRRSxhQUFPLEVBQUVlLGVBUlg7QUFTRSxzQkFBZ0I7QUFUbEIsTUFGRjtBQUFBLElBREY7QUFnQkQsQ0F4Qk07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQO0FBQ0E7QUFFQTtBQUNBOzs7QUFTTyxNQUFNbkMsYUFBYSxHQUFHLENBQUM7QUFBRWlDLEVBQUFBLFNBQUY7QUFBYVUsRUFBQUEsY0FBYjtBQUE2QkMsRUFBQUEsa0JBQTdCO0FBQWlEakMsRUFBQUE7QUFBakQsQ0FBRCxLQUEyRTtBQUN0RyxRQUFNbkosTUFBTSxHQUFHbkIsdURBQVUsQ0FBQ29CLFNBQUQsQ0FBekI7O0FBQ0EsUUFBTW9MLGtCQUFrQixHQUFJQyxDQUFELElBQW9DO0FBQzdELFVBQU1DLE1BQU0sR0FBR0QsQ0FBQyxDQUFDQyxNQUFqQjtBQUNBSixJQUFBQSxjQUFjLENBQUNJLE1BQU0sQ0FBQzNCLEtBQVIsQ0FBZDtBQUNELEdBSEQ7O0FBSUEsUUFBTTRCLFVBQVUsa0NBQUcsdURBQUMsNkNBQUQ7QUFBTSxRQUFJLEVBQUU7QUFBWixJQUFILENBQWhCOztBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFZixTQUFoQjtBQUFBLDRCQUNFLHVEQUFDLDhDQUFEO0FBQUEsNkJBQ0Usd0RBQUMsd0RBQUQ7QUFBTyxXQUFHLEVBQUUsR0FBWjtBQUFBLGtEQUNFO0FBQUE7QUFBQSxVQURGLGdCQUVFLHVEQUFDLGdEQUFEO0FBQ0UsaUJBQU8sK0JBQ0w7QUFBQSwrRUFFRTtBQUFBLHdCQUFPO0FBQVAsY0FGRjtBQUFBLFlBREssQ0FEVDtBQUFBLGlDQVFFLHVEQUFDLDZDQUFEO0FBQU0scUJBQVMsRUFBRXpLLE1BQU0sQ0FBQ3lMLElBQXhCO0FBQThCLGdCQUFJLEVBQUMsYUFBbkM7QUFBaUQsZ0JBQUksRUFBQztBQUF0RDtBQVJGLFVBRkY7QUFBQTtBQURGLE1BREYsZUFnQkUsdURBQUMsOENBQUQ7QUFDRSxpQkFBVyxFQUFDLFFBRGQ7QUFFRSxrQkFBWSxFQUFFTCxrQkFGaEI7QUFHRSxXQUFLLEVBQUVqQyxXQUhUO0FBSUUsY0FBUSxFQUFFa0Msa0JBSlo7QUFLRSxxQkFBWSxvQkFMZDtBQU1FLFlBQU0sRUFBRUcsVUFOVjtBQU9FLGVBQVMsRUFBRXhMLE1BQU0sQ0FBQzBMO0FBUHBCLE1BaEJGO0FBQUEsSUFERjtBQTRCRCxDQW5DTTs7QUFxQ1AsTUFBTXpMLFNBQVMsR0FBSTBCLEtBQUQsS0FBMkI7QUFDM0M4SixFQUFBQSxJQUFJLEVBQUUvTCw2Q0FBSTtBQUNaLG9CQUFvQmlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLEdBQWQsQ0FBbUI7QUFDdkMsR0FINkM7QUFJM0M4SixFQUFBQSxVQUFVLEVBQUVoTSw2Q0FBSTtBQUNsQjtBQUNBO0FBQ0E7QUFQNkMsQ0FBM0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWtNLGlCQUE0QyxHQUFHO0FBQ25ELEdBQUMzSCx3RkFBRCxHQUFxQixLQUQ4QjtBQUVuRCxHQUFDQSw2RkFBRCxHQUEwQixTQUZ5QjtBQUduRCxHQUFDQSw0RkFBRCxHQUF5QjtBQUgwQixDQUFyRDtBQVVPLE1BQU1tRCxlQUEwQixHQUFHLENBQUM7QUFBRWpILEVBQUFBO0FBQUYsQ0FBRCxrQkFBZSx1REFBQywrQ0FBRDtBQUFVLE9BQUssRUFBRXlMLGlCQUFpQixDQUFDekwsS0FBRCxDQUFsQztBQUFBLFlBQTRDQTtBQUE1QyxFQUFsRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2RQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2dNLG9CQUFULENBQThCdk0sc0JBQTlCLEVBQXVFO0FBQ3JFLFNBQ0VBLHNCQUFzQixLQUFLc00sd0VBQTNCLElBQ0EsQ0FBQyxDQUFDRCw2RUFBMEIsR0FBR0csSUFBN0IsQ0FBbUNDLEVBQUQsSUFBUUEsRUFBRSxDQUFDdkcsSUFBSCxLQUFZbEcsc0JBQXRELENBRko7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTTix5QkFBVCxHQUFxRztBQUMxRyxRQUFNLENBQUNRLFdBQUQsRUFBY3dNLGlCQUFkLElBQW1DeE4sNkVBQWMsRUFBdkQ7QUFFQSxRQUFNa0csTUFBTSxHQUFHOEcsa0RBQVcsQ0FDdkJsTSxzQkFBRCxJQUFvQztBQUNsQyxRQUFJLENBQUN1TSxvQkFBb0IsQ0FBQ3ZNLHNCQUFELENBQXpCLEVBQW1EO0FBQ2pEO0FBQ0Q7O0FBQ0QsUUFBSUEsc0JBQXNCLEtBQUtzTSx3RUFBL0IsRUFBMEQ7QUFDeERMLE1BQUFBLGdFQUFBLENBQWFFLGlGQUFiO0FBQ0FPLE1BQUFBLGlCQUFpQixDQUFDO0FBQUUsU0FBQ04seUVBQUQsR0FBK0I7QUFBakMsT0FBRCxDQUFqQjtBQUNELEtBSEQsTUFHTztBQUNMSCxNQUFBQSwwREFBQSxDQUFVRSxpRkFBVixFQUErQ25NLHNCQUEvQztBQUNBME0sTUFBQUEsaUJBQWlCLENBQUM7QUFBRSxTQUFDTix5RUFBRCxHQUErQnBNO0FBQWpDLE9BQUQsQ0FBakI7QUFDRDtBQUNGLEdBWnVCLEVBYXhCLENBQUMwTSxpQkFBRCxDQWJ3QixDQUExQjtBQWdCQSxRQUFNRyxXQUFXLEdBQUczTSxXQUFXLENBQUNrTSx5RUFBRCxDQUEvQjs7QUFFQSxNQUFJUyxXQUFXLElBQUksT0FBT0EsV0FBUCxLQUF1QixRQUExQyxFQUFvRDtBQUNsRCxRQUFJTixvQkFBb0IsQ0FBQ00sV0FBRCxDQUF4QixFQUF1QztBQUNyQyxhQUFPLENBQUNBLFdBQUQsRUFBY3pILE1BQWQsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMO0FBQ0EsYUFBTyxDQUFDM0IsU0FBRCxFQUFZMkIsTUFBWixDQUFQO0FBQ0Q7QUFDRjs7QUFDRCxRQUFNMEgsV0FBVyxHQUFHYiwwREFBQSxDQUFVRSxpRkFBVixDQUFwQjs7QUFDQSxNQUFJVyxXQUFXLElBQUksT0FBT0EsV0FBUCxLQUF1QixRQUF0QyxJQUFrRFAsb0JBQW9CLENBQUNPLFdBQUQsQ0FBMUUsRUFBeUY7QUFDdkYxSCxJQUFBQSxNQUFNLENBQUMwSCxXQUFELENBQU47QUFDQSxXQUFPLENBQUNBLFdBQUQsRUFBYzFILE1BQWQsQ0FBUDtBQUNEOztBQUVELFNBQU8sQ0FBQ2tILHdFQUFELEVBQTRCbEgsTUFBNUIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNyREQ7QUFFQTtBQUNBO0FBQ0E7QUFFTyxNQUFNdkYsbUJBQW1CLEdBQUltSixNQUFELElBQWlDO0FBQ2xFLFFBQU0sQ0FBQzlJLFdBQUQsSUFBZ0JoQiw2RUFBYyxFQUFwQztBQUNBLFFBQU1nTyxPQUFPLEdBQUcxTixvRUFBdUIsQ0FBQ1UsV0FBRCxDQUF2QztBQUNBLFFBQU1pTixRQUFRLEdBQUdGLGtFQUFhLENBQUNDLE9BQU8sQ0FBQzNELFdBQVIsSUFBdUIsRUFBeEIsQ0FBOUI7QUFFQSxTQUFPakMsOENBQU8sQ0FBQyxNQUFNO0FBQ25CLFdBQU8wQixNQUFNLENBQUNvRSxNQUFQLENBQWMsQ0FBQ0MsYUFBRCxFQUFxQ2hNLEtBQXJDLEtBQStDO0FBQ2xFLFlBQU15RixNQUFNLEdBQUd6RixLQUFLLENBQUN5RixNQUFOLENBQWFYLE1BQWIsQ0FBb0IsQ0FBQztBQUFFMUUsUUFBQUEsTUFBRjtBQUFVOEQsUUFBQUE7QUFBVixPQUFELEtBQXdCO0FBQ3pELGNBQU0rSCxXQUFXLEdBQUdOLHdFQUFtQixDQUFDdkwsTUFBRCxFQUFTMEwsUUFBVCxDQUF2QztBQUNBLGNBQU1JLFlBQVksR0FBR0wsT0FBTyxDQUFDMUQsVUFBUixHQUFxQmpFLE1BQU0sQ0FBQ2hGLEtBQVAsS0FBaUIyTSxPQUFPLENBQUMxRCxVQUE5QyxHQUEyRCxJQUFoRjtBQUNBLGVBQU84RCxXQUFXLElBQUlDLFlBQXRCO0FBQ0QsT0FKYyxDQUFmOztBQUtBLFVBQUl6RyxNQUFNLENBQUNwRixNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCO0FBQ0EsWUFBSUgsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQUssQ0FBQ0ksTUFBbEIsRUFBMEJDLE1BQTFCLEtBQXFDLENBQXpDLEVBQTRDO0FBQzFDMkwsVUFBQUEsYUFBYSxDQUFDRyxPQUFkLG1CQUEyQm5NLEtBQTNCO0FBQWtDeUYsWUFBQUE7QUFBbEM7QUFDRCxTQUZELE1BRU87QUFDTHVHLFVBQUFBLGFBQWEsQ0FBQ0ksSUFBZCxtQkFBd0JwTSxLQUF4QjtBQUErQnlGLFlBQUFBO0FBQS9CO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPdUcsYUFBUDtBQUNELEtBZk0sRUFlSixFQWZJLENBQVA7QUFnQkQsR0FqQmEsRUFpQlgsQ0FBQ3JFLE1BQUQsRUFBU2tFLE9BQVQsRUFBa0JDLFFBQWxCLENBakJXLENBQWQ7QUFrQkQsQ0F2Qk07Ozs7Ozs7Ozs7Ozs7O0FDTlA7QUFHQTtBQUVPLE1BQU12TixnQkFBZ0IsR0FBRyxDQUFDb0osTUFBRCxFQUE4QjdJLE9BQTlCLEtBQXlFO0FBQ3ZHLFNBQU9tSCw4Q0FBTyxDQUFDLE1BQU07QUFDbkIsUUFBSW5ILE9BQU8sQ0FBQ3VCLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsWUFBTWlNLGNBQWMsR0FBRzNFLE1BQU0sQ0FBQzdDLE1BQVAsQ0FBZTlFLEtBQUQsSUFBV0UsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQUssQ0FBQ0ksTUFBbEIsRUFBMEJDLE1BQTFCLEtBQXFDLENBQTlELENBQXZCOztBQUNBLFVBQUlpTSxjQUFjLENBQUNqTSxNQUFmLEdBQXdCLENBQTVCLEVBQStCO0FBQzdCO0FBQ0EsZUFBT3NILE1BQU0sQ0FBQ29FLE1BQVAsQ0FBYyxDQUFDUSxjQUFELEVBQWlCdk0sS0FBakIsS0FBMkI7QUFDOUMsY0FBSUUsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQUssQ0FBQ0ksTUFBbEIsRUFBMEJDLE1BQTFCLEtBQXFDLENBQXpDLEVBQTRDO0FBQzFDLGtCQUFNbU0sZUFBZSxHQUFHRCxjQUFjLENBQUNwQixJQUFmLENBQW9CLENBQUM7QUFBRS9LLGNBQUFBO0FBQUYsYUFBRCxLQUFnQkYsTUFBTSxDQUFDQyxJQUFQLENBQVlDLE1BQVosQ0FBcEMsQ0FBeEI7O0FBQ0EsZ0JBQUksQ0FBQ29NLGVBQUwsRUFBc0I7QUFDcEJELGNBQUFBLGNBQWMsQ0FBQ0gsSUFBZixDQUFvQjtBQUFFM0csZ0JBQUFBLE1BQU0sRUFBRXpGLEtBQUssQ0FBQ3lGLE1BQWhCO0FBQXdCckYsZ0JBQUFBLE1BQU0sRUFBRSxFQUFoQztBQUFvQ3FNLGdCQUFBQSxRQUFRLEVBQUU7QUFBRTVILGtCQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUE5QyxlQUFwQjtBQUNELGFBRkQsTUFFTztBQUNMMkgsY0FBQUEsZUFBZSxDQUFDL0csTUFBaEIsR0FBeUI0Ryw4Q0FBTSxDQUFDLENBQUMsR0FBR0csZUFBZSxDQUFDL0csTUFBcEIsRUFBNEIsR0FBR3pGLEtBQUssQ0FBQ3lGLE1BQXJDLENBQUQsRUFBK0MsUUFBL0MsQ0FBL0I7QUFDRDtBQUNGLFdBUEQsTUFPTztBQUNMOEcsWUFBQUEsY0FBYyxDQUFDSCxJQUFmLENBQW9CcE0sS0FBcEI7QUFDRDs7QUFDRCxpQkFBT3VNLGNBQVA7QUFDRCxTQVpNLEVBWUosRUFaSSxDQUFQO0FBYUQsT0FmRCxNQWVPO0FBQ0wsZUFBTzVFLE1BQVA7QUFDRDtBQUNGOztBQUNELFVBQU1sQyxNQUFNLEdBQUdrQyxNQUFNLENBQUNnQyxPQUFQLENBQWUsQ0FBQztBQUFFbEUsTUFBQUE7QUFBRixLQUFELEtBQWdCQSxNQUEvQixDQUFmO0FBQ0EsV0FBT0EsTUFBTSxDQUFDc0csTUFBUCxDQUFjLENBQUNXLFNBQUQsRUFBWWxKLEtBQVosS0FBc0I7QUFDekMsWUFBTW1KLHNCQUFzQixHQUFHN04sT0FBTyxDQUFDOE4sS0FBUixDQUFlQyxZQUFELElBQWtCM00sTUFBTSxDQUFDQyxJQUFQLENBQVlxRCxLQUFLLENBQUNwRCxNQUFsQixFQUEwQjBNLFFBQTFCLENBQW1DRCxZQUFuQyxDQUFoQyxDQUEvQjs7QUFFQSxVQUFJRixzQkFBSixFQUE0QjtBQUMxQixjQUFNSSxnQkFBZ0IsR0FBR0wsU0FBUyxDQUFDdkIsSUFBVixDQUFnQm5MLEtBQUQsSUFBVztBQUNqRCxpQkFBT2xCLE9BQU8sQ0FBQzhOLEtBQVIsQ0FBZUksUUFBRCxJQUFjO0FBQ2pDLG1CQUFPaE4sS0FBSyxDQUFDSSxNQUFOLENBQWE0TSxRQUFiLE1BQTJCeEosS0FBSyxDQUFDcEQsTUFBTixDQUFhNE0sUUFBYixDQUFsQztBQUNELFdBRk0sQ0FBUDtBQUdELFNBSndCLENBQXpCOztBQUtBLFlBQUksQ0FBQ0QsZ0JBQUwsRUFBdUI7QUFDckIsZ0JBQU0zTSxNQUFNLEdBQUd0QixPQUFPLENBQUNpTixNQUFSLENBQWUsQ0FBQ2tCLEdBQUQsRUFBTW5ELEdBQU4sS0FBYztBQUMxQ21ELFlBQUFBLEdBQUcscUJBQVFBLEdBQVI7QUFBYSxlQUFDbkQsR0FBRCxHQUFPdEcsS0FBSyxDQUFDcEQsTUFBTixDQUFhMEosR0FBYjtBQUFwQixjQUFIO0FBQ0EsbUJBQU9tRCxHQUFQO0FBQ0QsV0FIYyxFQUdaLEVBSFksQ0FBZjtBQUlBUCxVQUFBQSxTQUFTLENBQUNOLElBQVYsQ0FBZTtBQUNiM0csWUFBQUEsTUFBTSxFQUFFLENBQUNqQyxLQUFELENBREs7QUFFYnBELFlBQUFBLE1BRmE7QUFHYnFNLFlBQUFBLFFBQVEsRUFBRTtBQUNSNUgsY0FBQUEsSUFBSSxFQUFFO0FBREU7QUFIRyxXQUFmO0FBT0QsU0FaRCxNQVlPO0FBQ0xrSSxVQUFBQSxnQkFBZ0IsQ0FBQ3RILE1BQWpCLENBQXdCMkcsSUFBeEIsQ0FBNkI1SSxLQUE3QjtBQUNEO0FBQ0YsT0FyQkQsTUFxQk87QUFDTCxjQUFNZ0osZUFBZSxHQUFHRSxTQUFTLENBQUN2QixJQUFWLENBQWdCbkwsS0FBRCxJQUFXRSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsS0FBSyxDQUFDSSxNQUFsQixFQUEwQkMsTUFBMUIsS0FBcUMsQ0FBL0QsQ0FBeEI7O0FBQ0EsWUFBSSxDQUFDbU0sZUFBTCxFQUFzQjtBQUNwQkUsVUFBQUEsU0FBUyxDQUFDTixJQUFWLENBQWU7QUFBRTNHLFlBQUFBLE1BQU0sRUFBRSxDQUFDakMsS0FBRCxDQUFWO0FBQW1CcEQsWUFBQUEsTUFBTSxFQUFFLEVBQTNCO0FBQStCcU0sWUFBQUEsUUFBUSxFQUFFO0FBQUU1SCxjQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUF6QyxXQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0wySCxVQUFBQSxlQUFlLENBQUMvRyxNQUFoQixDQUF1QjJHLElBQXZCLENBQTRCNUksS0FBNUI7QUFDRDtBQUNGOztBQUVELGFBQU9rSixTQUFQO0FBQ0QsS0FsQ00sRUFrQ0osRUFsQ0ksQ0FBUDtBQW1DRCxHQTFEYSxFQTBEWCxDQUFDL0UsTUFBRCxFQUFTN0ksT0FBVCxDQTFEVyxDQUFkO0FBMkRELENBNURNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9BbGVydEdyb3Vwcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0FsZXJ0aW5nUGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9BdXRob3JpemUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9EeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9BbGVydERldGFpbHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvQWxlcnRHcm91cC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9BbGVydEdyb3VwQWxlcnRzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvQWxlcnRHcm91cEZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9BbGVydFN0YXRlRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYWxlcnQtZ3JvdXBzL0dyb3VwQnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL0FtQWxlcnRTdGF0ZVRhZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlRmlsdGVyZWRBbUdyb3Vwcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUdyb3VwZWRBbGVydHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQWxlcnQsIExvYWRpbmdQbGFjZWhvbGRlciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuXG5pbXBvcnQgeyBBbGVydGluZ1BhZ2VXcmFwcGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0FsZXJ0aW5nUGFnZVdyYXBwZXInO1xuaW1wb3J0IHsgQWxlcnRHcm91cCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydC1ncm91cHMvQWxlcnRHcm91cCc7XG5pbXBvcnQgeyBBbGVydEdyb3VwRmlsdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9BbGVydEdyb3VwRmlsdGVyJztcbmltcG9ydCB7IGZldGNoQWxlcnRHcm91cHNBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuL3V0aWxzL3JlZHV4JztcbmltcG9ydCB7IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zIH0gZnJvbSAnLi91dGlscy9taXNjJztcbmltcG9ydCB7IE5PVElGSUNBVElPTlNfUE9MTF9JTlRFUlZBTF9NUyB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9IGZyb20gJy4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgdXNlR3JvdXBlZEFsZXJ0cyB9IGZyb20gJy4vaG9va3MvdXNlR3JvdXBlZEFsZXJ0cyc7XG5pbXBvcnQgeyB1c2VGaWx0ZXJlZEFtR3JvdXBzIH0gZnJvbSAnLi9ob29rcy91c2VGaWx0ZXJlZEFtR3JvdXBzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmNvbnN0IEFsZXJ0R3JvdXBzID0gKCkgPT4ge1xuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IHsgZ3JvdXBCeSA9IFtdIH0gPSBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyhxdWVyeVBhcmFtcyk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBhbGVydEdyb3VwcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1BbGVydEdyb3Vwcyk7XG4gIGNvbnN0IHtcbiAgICBsb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIHJlc3VsdDogcmVzdWx0cyA9IFtdLFxuICB9ID0gYWxlcnRHcm91cHNbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB8fCAnJ10gPz8gaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuXG4gIGNvbnN0IGdyb3VwZWRBbGVydHMgPSB1c2VHcm91cGVkQWxlcnRzKHJlc3VsdHMsIGdyb3VwQnkpO1xuICBjb25zdCBmaWx0ZXJlZEFsZXJ0R3JvdXBzID0gdXNlRmlsdGVyZWRBbUdyb3Vwcyhncm91cGVkQWxlcnRzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGZldGNoTm90aWZpY2F0aW9ucygpIHtcbiAgICAgIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQWxlcnRHcm91cHNBY3Rpb24oYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaE5vdGlmaWNhdGlvbnMoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZldGNoTm90aWZpY2F0aW9ucywgTk9USUZJQ0FUSU9OU19QT0xMX0lOVEVSVkFMX01TKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnRpbmdQYWdlV3JhcHBlciBwYWdlSWQ9XCJncm91cHNcIj5cbiAgICAgIDxBbGVydEdyb3VwRmlsdGVyIGdyb3Vwcz17cmVzdWx0c30gLz5cbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcgbm90aWZpY2F0aW9uc1wiIC8+fVxuICAgICAge2Vycm9yICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgPEFsZXJ0IHRpdGxlPXsnRXJyb3IgbG9hZGluZyBub3RpZmljYXRpb25zJ30gc2V2ZXJpdHk9eydlcnJvcid9PlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJ31cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICl9XG4gICAgICB7cmVzdWx0cyAmJlxuICAgICAgICBmaWx0ZXJlZEFsZXJ0R3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2Ake0pTT04uc3RyaW5naWZ5KGdyb3VwLmxhYmVscyl9LWdyb3VwLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIHsoKGluZGV4ID09PSAxICYmIE9iamVjdC5rZXlzKGZpbHRlcmVkQWxlcnRHcm91cHNbMF0ubGFiZWxzKS5sZW5ndGggPT09IDApIHx8XG4gICAgICAgICAgICAgICAgKGluZGV4ID09PSAwICYmIE9iamVjdC5rZXlzKGdyb3VwLmxhYmVscykubGVuZ3RoID4gMCkpICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ncm91cGluZ0Jhbm5lcn0+R3JvdXBlZCBieToge09iamVjdC5rZXlzKGdyb3VwLmxhYmVscykuam9pbignLCAnKX08L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxBbGVydEdyb3VwIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfHwgJyd9IGdyb3VwPXtncm91cH0gLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICB7cmVzdWx0cyAmJiAhZmlsdGVyZWRBbGVydEdyb3Vwcy5sZW5ndGggJiYgPHA+Tm8gcmVzdWx0cy48L3A+fVxuICAgIDwvQWxlcnRpbmdQYWdlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZ3JvdXBpbmdCYW5uZXI6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygyLCAwKX07XG4gIGAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRHcm91cHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYWdlSWQ6IHN0cmluZztcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0aW5nUGFnZVdyYXBwZXI6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCBwYWdlSWQsIGlzTG9hZGluZyB9KSA9PiB7XG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwoXG4gICAgdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCksXG4gICAgcGFnZUlkXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PntjaGlsZHJlbn08L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxudHlwZSBQcm9wcyA9IHtcbiAgYWN0aW9uczogQWNjZXNzQ29udHJvbEFjdGlvbltdO1xuICBmYWxsYmFjaz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgQXV0aG9yaXplOiBGQzxQcm9wcz4gPSAoeyBhY3Rpb25zLCBjaGlsZHJlbiwgZmFsbGJhY2sgPSB0cnVlIH0pID0+IHtcbiAgaWYgKGFjdGlvbnMuc29tZSgoYWN0aW9uKSA9PiBjb250ZXh0U3J2Lmhhc0FjY2VzcyhhY3Rpb24sIGZhbGxiYWNrKSkpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IER5bmFtaWNUYWJsZSwgRHluYW1pY1RhYmxlUHJvcHMgfSBmcm9tICcuL0R5bmFtaWNUYWJsZSc7XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzUHJvcHM8VD4gPSBPbWl0PER5bmFtaWNUYWJsZVByb3BzPFQ+LCAncmVuZGVyUHJlZml4SGVhZGVyLCByZW5kZXJQcmVmaXhDZWxsJz47XG5cbi8vIER5bmFtaWNUYWJsZSwgYnV0IHJlbmRlcnMgdmlzdWFsIGd1aWRlbGluZXMgb24gdGhlIGxlZnQsIGZvciBsYXJnZXIgc2NyZWVuIHdpZHRoc1xuZXhwb3J0IGNvbnN0IER5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzID0gPFQgZXh0ZW5kcyBvYmplY3Q+KHtcbiAgcmVuZGVyRXhwYW5kZWRDb250ZW50LFxuICAuLi5wcm9wc1xufTogRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXNQcm9wczxUPikgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPER5bmFtaWNUYWJsZVxuICAgICAgcmVuZGVyRXhwYW5kZWRDb250ZW50PXtcbiAgICAgICAgcmVuZGVyRXhwYW5kZWRDb250ZW50XG4gICAgICAgICAgPyAoaXRlbSwgaW5kZXgsIGl0ZW1zKSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgeyEoaW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEpICYmIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGVudEd1aWRlbGluZSwgc3R5bGVzLmd1aWRlbGluZSl9IC8+fVxuICAgICAgICAgICAgICAgIHtyZW5kZXJFeHBhbmRlZENvbnRlbnQoaXRlbSwgaW5kZXgsIGl0ZW1zKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIHJlbmRlclByZWZpeEhlYWRlcj17KCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbGF0aXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmhlYWRlckd1aWRlbGluZSwgc3R5bGVzLmd1aWRlbGluZSl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHJlbmRlclByZWZpeENlbGw9eyhfLCBpbmRleCwgaXRlbXMpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWxhdGl2ZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy50b3BHdWlkZWxpbmUsIHN0eWxlcy5ndWlkZWxpbmUpfSAvPlxuICAgICAgICAgIHshKGluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxKSAmJiA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJvdHRvbUd1aWRlbGluZSwgc3R5bGVzLmd1aWRlbGluZSl9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHJlbGF0aXZlOiBjc3NgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgYCxcbiAgZ3VpZGVsaW5lOiBjc3NgXG4gICAgbGVmdDogLTE5cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAke3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyl9IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBgLFxuICB0b3BHdWlkZWxpbmU6IGNzc2BcbiAgICB3aWR0aDogMThweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogNTAlO1xuICBgLFxuICBib3R0b21HdWlkZWxpbmU6IGNzc2BcbiAgICB0b3A6IDUwJTtcbiAgICBib3R0b206IDA7XG4gIGAsXG4gIGNvbnRlbnRHdWlkZWxpbmU6IGNzc2BcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IC00OXB4ICFpbXBvcnRhbnQ7XG4gIGAsXG4gIGhlYWRlckd1aWRlbGluZTogY3NzYFxuICAgIHRvcDogLTI1cHg7XG4gICAgYm90dG9tOiAwO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBBbGVydG1hbmFnZXJBbGVydCwgQWxlcnRTdGF0ZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0SW5zdGFuY2VzUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5pbXBvcnQgeyBpc0dyYWZhbmFSdWxlc1NvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgbWFrZUFNTGluaywgbWFrZUxhYmVsQmFzZWRTaWxlbmNlTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkRldGFpbHNGaWVsZCB9IGZyb20gJy4uL0Fubm90YXRpb25EZXRhaWxzRmllbGQnO1xuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vQXV0aG9yaXplJztcblxuaW50ZXJmYWNlIEFtTm90aWZpY2F0aW9uc0FsZXJ0RGV0YWlsc1Byb3BzIHtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xuICBhbGVydDogQWxlcnRtYW5hZ2VyQWxlcnQ7XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydERldGFpbHM6IEZDPEFtTm90aWZpY2F0aW9uc0FsZXJ0RGV0YWlsc1Byb3BzPiA9ICh7IGFsZXJ0LCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBpbnN0YW5jZVBlcm1pc3Npb25zID0gZ2V0SW5zdGFuY2VzUGVybWlzc2lvbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG5cbiAgLy8gRm9yIEdyYWZhbmEgTWFuYWdlZCBhbGVydHMgdGhlIEdlbmVyYXRvciBVUkwgcmVkaXJlY3RzIHRvIHRoZSBhbGVydCBydWxlIGVkaXQgcGFnZSwgc28gdXBkYXRlIHBlcm1pc3Npb24gaXMgcmVxdWlyZWRcbiAgLy8gRm9yIGV4dGVybmFsIGFsZXJ0IG1hbmFnZXIgdGhlIEdlbmVyYXRvciBVUkwgcmVkaXJlY3RzIHRvIGFuIGV4dGVybmFsIHNlcnZpY2Ugd2hpY2ggd2UgZG9uJ3QgY29udHJvbFxuICBjb25zdCBpc0dyYWZhbmFTb3VyY2UgPSBpc0dyYWZhbmFSdWxlc1NvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3QgaXNTZWVTb3VyY2VCdXR0b25FbmFibGVkID0gaXNHcmFmYW5hU291cmNlXG4gICAgPyBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BbGVydGluZ1J1bGVSZWFkKVxuICAgIDogdHJ1ZTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnNSb3d9PlxuICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1tpbnN0YW5jZVBlcm1pc3Npb25zLnVwZGF0ZSwgaW5zdGFuY2VQZXJtaXNzaW9ucy5jcmVhdGVdfSBmYWxsYmFjaz17Y29udGV4dFNydi5pc0VkaXRvcn0+XG4gICAgICAgICAge2FsZXJ0LnN0YXR1cy5zdGF0ZSA9PT0gQWxlcnRTdGF0ZS5TdXBwcmVzc2VkICYmIChcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICAgIGhyZWY9e2Ake21ha2VBTUxpbmsoXG4gICAgICAgICAgICAgICAgJy9hbGVydGluZy9zaWxlbmNlcycsXG4gICAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZVxuICAgICAgICAgICAgICApfSZzaWxlbmNlSWRzPSR7YWxlcnQuc3RhdHVzLnNpbGVuY2VkQnkuam9pbignLCcpfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgaWNvbj17J2JlbGwnfVxuICAgICAgICAgICAgICBzaXplPXsnc20nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNYW5hZ2Ugc2lsZW5jZXNcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthbGVydC5zdGF0dXMuc3RhdGUgPT09IEFsZXJ0U3RhdGUuQWN0aXZlICYmIChcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICAgIGhyZWY9e21ha2VMYWJlbEJhc2VkU2lsZW5jZUxpbmsoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgYWxlcnQubGFiZWxzKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgICBpY29uPXsnYmVsbC1zbGFzaCd9XG4gICAgICAgICAgICAgIHNpemU9eydzbSd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpbGVuY2VcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAge2lzU2VlU291cmNlQnV0dG9uRW5hYmxlZCAmJiBhbGVydC5nZW5lcmF0b3JVUkwgJiYgKFxuICAgICAgICAgIDxMaW5rQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gaHJlZj17YWxlcnQuZ2VuZXJhdG9yVVJMfSBpY29uPXsnY2hhcnQtbGluZSd9IHNpemU9eydzbSd9PlxuICAgICAgICAgICAgU2VlIHNvdXJjZVxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge09iamVjdC5lbnRyaWVzKGFsZXJ0LmFubm90YXRpb25zKS5tYXAoKFthbm5vdGF0aW9uS2V5LCBhbm5vdGF0aW9uVmFsdWVdKSA9PiAoXG4gICAgICAgIDxBbm5vdGF0aW9uRGV0YWlsc0ZpZWxkIGtleT17YW5ub3RhdGlvbktleX0gYW5ub3RhdGlvbktleT17YW5ub3RhdGlvbktleX0gdmFsdWU9e2Fubm90YXRpb25WYWx1ZX0gLz5cbiAgICAgICkpfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWNlaXZlcnN9PlxuICAgICAgICBSZWNlaXZlcnM6eycgJ31cbiAgICAgICAge2FsZXJ0LnJlY2VpdmVyc1xuICAgICAgICAgIC5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKVxuICAgICAgICAgIC5maWx0ZXIoKG5hbWUpID0+ICEhbmFtZSlcbiAgICAgICAgICAuam9pbignLCAnKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBidXR0b246IGNzc2BcbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG4gIGAsXG4gIGFjdGlvbnNSb3c6IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMiwgMCl9ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICBgLFxuICByZWNlaXZlcnM6IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSwgMCl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBBbGVydG1hbmFnZXJHcm91cCwgQWxlcnRTdGF0ZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQWxlcnRMYWJlbHMgfSBmcm9tICcuLi9BbGVydExhYmVscyc7XG5pbXBvcnQgeyBBbGVydEdyb3VwQWxlcnRzVGFibGUgfSBmcm9tICcuL0FsZXJ0R3JvdXBBbGVydHNUYWJsZSc7XG5pbXBvcnQgeyBDb2xsYXBzZVRvZ2dsZSB9IGZyb20gJy4uL0NvbGxhcHNlVG9nZ2xlJztcbmltcG9ydCB7IEFsZXJ0R3JvdXBIZWFkZXIgfSBmcm9tICcuL0FsZXJ0R3JvdXBIZWFkZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBncm91cDogQWxlcnRtYW5hZ2VyR3JvdXA7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0R3JvdXAgPSAoeyBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBncm91cCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldElzQ29sbGFwc2VkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyb3VwfSBkYXRhLXRlc3RpZD1cImFsZXJ0LWdyb3VwXCI+XG4gICAgICAgICAgPENvbGxhcHNlVG9nZ2xlXG4gICAgICAgICAgICBpc0NvbGxhcHNlZD17aXNDb2xsYXBzZWR9XG4gICAgICAgICAgICBvblRvZ2dsZT17KCkgPT4gc2V0SXNDb2xsYXBzZWQoIWlzQ29sbGFwc2VkKX1cbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYWxlcnQtZ3JvdXAtY29sbGFwc2UtdG9nZ2xlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhncm91cC5sYWJlbHMpLmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxBbGVydExhYmVscyBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMYWJlbHN9IGxhYmVscz17Z3JvdXAubGFiZWxzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3Bhbj5ObyBncm91cGluZzwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFsZXJ0R3JvdXBIZWFkZXIgZ3JvdXA9e2dyb3VwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7IWlzQ29sbGFwc2VkICYmIDxBbGVydEdyb3VwQWxlcnRzVGFibGUgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gYWxlcnRzPXtncm91cC5hbGVydHN9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICB9XG4gIGAsXG4gIGhlYWRlckxhYmVsczogY3NzYFxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLSR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgYCxcbiAgaGVhZGVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICB3aWR0aDogMTAwJTtcbiAgYCxcbiAgZ3JvdXA6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYCxcbiAgc3VtbWFyeTogY3NzYGAsXG4gIHNwYW5FbGVtZW50OiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgYCxcbiAgW0FsZXJ0U3RhdGUuQWN0aXZlXTogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5lcnJvci5tYWlufTtcbiAgYCxcbiAgW0FsZXJ0U3RhdGUuU3VwcHJlc3NlZF06IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeS5tYWlufTtcbiAgYCxcbiAgW0FsZXJ0U3RhdGUuVW5wcm9jZXNzZWRdOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeS5tYWlufTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgQWxlcnRtYW5hZ2VyQWxlcnQgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IER5bmFtaWNUYWJsZUNvbHVtblByb3BzLCBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9EeW5hbWljVGFibGUnO1xuaW1wb3J0IHsgQW1BbGVydFN0YXRlVGFnIH0gZnJvbSAnLi4vc2lsZW5jZXMvQW1BbGVydFN0YXRlVGFnJztcbmltcG9ydCB7IEFsZXJ0TGFiZWxzIH0gZnJvbSAnLi4vQWxlcnRMYWJlbHMnO1xuaW1wb3J0IHsgRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXMgfSBmcm9tICcuLi9EeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcyc7XG5pbXBvcnQgeyBBbGVydERldGFpbHMgfSBmcm9tICcuL0FsZXJ0RGV0YWlscyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsZXJ0czogQWxlcnRtYW5hZ2VyQWxlcnRbXTtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG50eXBlIEFsZXJ0R3JvdXBBbGVydHNUYWJsZUNvbHVtblByb3BzID0gRHluYW1pY1RhYmxlQ29sdW1uUHJvcHM8QWxlcnRtYW5hZ2VyQWxlcnQ+O1xudHlwZSBBbGVydEdyb3VwQWxlcnRzVGFibGVJdGVtUHJvcHMgPSBEeW5hbWljVGFibGVJdGVtUHJvcHM8QWxlcnRtYW5hZ2VyQWxlcnQ+O1xuXG5leHBvcnQgY29uc3QgQWxlcnRHcm91cEFsZXJ0c1RhYmxlID0gKHsgYWxlcnRzLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbyhcbiAgICAoKTogQWxlcnRHcm91cEFsZXJ0c1RhYmxlQ29sdW1uUHJvcHNbXSA9PiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnc3RhdGUnLFxuICAgICAgICBsYWJlbDogJ1N0YXRlJyxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuICAgICAgICByZW5kZXJDZWxsOiAoeyBkYXRhOiBhbGVydCB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxBbUFsZXJ0U3RhdGVUYWcgc3RhdGU9e2FsZXJ0LnN0YXR1cy5zdGF0ZX0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmR1cmF0aW9ufT5cbiAgICAgICAgICAgICAgZm9yeycgJ31cbiAgICAgICAgICAgICAge2ludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nKHtcbiAgICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoYWxlcnQuc3RhcnRzQXQpLFxuICAgICAgICAgICAgICAgIGVuZDogbmV3IERhdGUoYWxlcnQuZW5kc0F0KSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC8+XG4gICAgICAgICksXG4gICAgICAgIHNpemU6ICcyMjBweCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2xhYmVscycsXG4gICAgICAgIGxhYmVsOiAnTGFiZWxzJyxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuICAgICAgICByZW5kZXJDZWxsOiAoeyBkYXRhOiB7IGxhYmVscyB9IH0pID0+IDxBbGVydExhYmVscyBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbHN9IGxhYmVscz17bGFiZWxzfSAvPixcbiAgICAgICAgc2l6ZTogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbc3R5bGVzXVxuICApO1xuXG4gIGNvbnN0IGl0ZW1zID0gdXNlTWVtbyhcbiAgICAoKTogQWxlcnRHcm91cEFsZXJ0c1RhYmxlSXRlbVByb3BzW10gPT5cbiAgICAgIGFsZXJ0cy5tYXAoKGFsZXJ0KSA9PiAoe1xuICAgICAgICBpZDogYWxlcnQuZmluZ2VycHJpbnQsXG4gICAgICAgIGRhdGE6IGFsZXJ0LFxuICAgICAgfSkpLFxuICAgIFthbGVydHNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlV3JhcHBlcn0gZGF0YS10ZXN0aWQ9XCJhbGVydC1ncm91cC10YWJsZVwiPlxuICAgICAgPER5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzXG4gICAgICAgIGNvbHM9e2NvbHVtbnN9XG4gICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgaXNFeHBhbmRhYmxlPXt0cnVlfVxuICAgICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnQ9eyh7IGRhdGE6IGFsZXJ0IH0pID0+IChcbiAgICAgICAgICA8QWxlcnREZXRhaWxzIGFsZXJ0PXthbGVydH0gYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHRhYmxlV3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgJHt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKX0ge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZyg0LjUpfTtcbiAgICB9XG4gIGAsXG4gIGR1cmF0aW9uOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgYCxcbiAgbGFiZWxzOiBjc3NgXG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyUGlja2VyIH0gZnJvbSAnLi4vQWxlcnRNYW5hZ2VyUGlja2VyJztcbmltcG9ydCB7IE1hdGNoZXJGaWx0ZXIgfSBmcm9tICcuL01hdGNoZXJGaWx0ZXInO1xuaW1wb3J0IHsgQWxlcnRTdGF0ZUZpbHRlciB9IGZyb20gJy4vQWxlcnRTdGF0ZUZpbHRlcic7XG5pbXBvcnQgeyBHcm91cEJ5IH0gZnJvbSAnLi9Hcm91cEJ5JztcbmltcG9ydCB7IEFsZXJ0bWFuYWdlckdyb3VwLCBBbGVydFN0YXRlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBncm91cHM6IEFsZXJ0bWFuYWdlckdyb3VwW107XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydEdyb3VwRmlsdGVyID0gKHsgZ3JvdXBzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtmaWx0ZXJLZXksIHNldEZpbHRlcktleV0gPSB1c2VTdGF0ZTxudW1iZXI+KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkpO1xuICBjb25zdCBbcXVlcnlQYXJhbXMsIHNldFF1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IHsgZ3JvdXBCeSA9IFtdLCBxdWVyeVN0cmluZywgYWxlcnRTdGF0ZSB9ID0gZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMocXVlcnlQYXJhbXMpO1xuICBjb25zdCBtYXRjaGVyRmlsdGVyS2V5ID0gYG1hdGNoZXItJHtmaWx0ZXJLZXl9YDtcblxuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBjbGVhckZpbHRlcnMgPSAoKSA9PiB7XG4gICAgc2V0UXVlcnlQYXJhbXMoe1xuICAgICAgZ3JvdXBCeTogbnVsbCxcbiAgICAgIHF1ZXJ5U3RyaW5nOiBudWxsLFxuICAgICAgYWxlcnRTdGF0ZTogbnVsbCxcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZpbHRlcktleShmaWx0ZXJLZXkgKyAxKSwgMTAwKTtcbiAgfTtcblxuICBjb25zdCBzaG93Q2xlYXJCdXR0b24gPSAhIShncm91cEJ5Lmxlbmd0aCA+IDAgfHwgcXVlcnlTdHJpbmcgfHwgYWxlcnRTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPEFsZXJ0TWFuYWdlclBpY2tlciBjdXJyZW50PXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBvbkNoYW5nZT17c2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyU2VjdGlvbn0+XG4gICAgICAgIDxNYXRjaGVyRmlsdGVyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVySW5wdXR9XG4gICAgICAgICAga2V5PXttYXRjaGVyRmlsdGVyS2V5fVxuICAgICAgICAgIGRlZmF1bHRRdWVyeVN0cmluZz17cXVlcnlTdHJpbmd9XG4gICAgICAgICAgb25GaWx0ZXJDaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UXVlcnlQYXJhbXMoeyBxdWVyeVN0cmluZzogdmFsdWUgPyB2YWx1ZSA6IG51bGwgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxHcm91cEJ5XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVySW5wdXR9XG4gICAgICAgICAgZ3JvdXBzPXtncm91cHN9XG4gICAgICAgICAgZ3JvdXBCeT17Z3JvdXBCeX1cbiAgICAgICAgICBvbkdyb3VwaW5nQ2hhbmdlPXsoa2V5cykgPT4gc2V0UXVlcnlQYXJhbXMoeyBncm91cEJ5OiBrZXlzLmxlbmd0aCA/IGtleXMuam9pbignLCcpIDogbnVsbCB9KX1cbiAgICAgICAgLz5cbiAgICAgICAgPEFsZXJ0U3RhdGVGaWx0ZXJcbiAgICAgICAgICBzdGF0ZUZpbHRlcj17YWxlcnRTdGF0ZSBhcyBBbGVydFN0YXRlfVxuICAgICAgICAgIG9uU3RhdGVGaWx0ZXJDaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UXVlcnlQYXJhbXMoeyBhbGVydFN0YXRlOiB2YWx1ZSA/IHZhbHVlIDogbnVsbCB9KX1cbiAgICAgICAgLz5cbiAgICAgICAge3Nob3dDbGVhckJ1dHRvbiAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbGVhckJ1dHRvbn0gdmFyaWFudD17J3NlY29uZGFyeSd9IGljb249XCJ0aW1lc1wiIG9uQ2xpY2s9e2NsZWFyRmlsdGVyc30+XG4gICAgICAgICAgICBDbGVhciBmaWx0ZXJzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICBgLFxuICBmaWx0ZXJTZWN0aW9uOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygzKX07XG4gIGAsXG4gIGZpbHRlcklucHV0OiBjc3NgXG4gICAgd2lkdGg6IDM0MHB4O1xuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbiAgY2xlYXJCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmFkaW9CdXR0b25Hcm91cCwgTGFiZWwsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0U3RhdGUgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZUZpbHRlcj86IEFsZXJ0U3RhdGU7XG4gIG9uU3RhdGVGaWx0ZXJDaGFuZ2U6ICh2YWx1ZTogQWxlcnRTdGF0ZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0U3RhdGVGaWx0ZXIgPSAoeyBvblN0YXRlRmlsdGVyQ2hhbmdlLCBzdGF0ZUZpbHRlciB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGFsZXJ0U3RhdGVPcHRpb25zOiBTZWxlY3RhYmxlVmFsdWVbXSA9IE9iamVjdC5lbnRyaWVzKEFsZXJ0U3RhdGUpXG4gICAgLnNvcnQoKFtsYWJlbEFdLCBbbGFiZWxCXSkgPT4gKGxhYmVsQSA8IGxhYmVsQiA/IC0xIDogMSkpXG4gICAgLm1hcCgoW2xhYmVsLCBzdGF0ZV0pID0+ICh7XG4gICAgICBsYWJlbCxcbiAgICAgIHZhbHVlOiBzdGF0ZSxcbiAgICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgIDxSYWRpb0J1dHRvbkdyb3VwIG9wdGlvbnM9e2FsZXJ0U3RhdGVPcHRpb25zfSB2YWx1ZT17c3RhdGVGaWx0ZXJ9IG9uQ2hhbmdlPXtvblN0YXRlRmlsdGVyQ2hhbmdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IEFsZXJ0bWFuYWdlckdyb3VwIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVuaXEgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSWNvbiwgTGFiZWwsIE11bHRpU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgZ3JvdXBzOiBBbGVydG1hbmFnZXJHcm91cFtdO1xuICBncm91cEJ5OiBzdHJpbmdbXTtcbiAgb25Hcm91cGluZ0NoYW5nZTogKGtleXM6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgR3JvdXBCeSA9ICh7IGNsYXNzTmFtZSwgZ3JvdXBzLCBncm91cEJ5LCBvbkdyb3VwaW5nQ2hhbmdlIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGxhYmVsS2V5T3B0aW9ucyA9IHVuaXEoZ3JvdXBzLmZsYXRNYXAoKGdyb3VwKSA9PiBncm91cC5hbGVydHMpLmZsYXRNYXAoKHsgbGFiZWxzIH0pID0+IE9iamVjdC5rZXlzKGxhYmVscykpKVxuICAgIC5maWx0ZXIoKGxhYmVsKSA9PiAhKGxhYmVsLnN0YXJ0c1dpdGgoJ19fJykgJiYgbGFiZWwuZW5kc1dpdGgoJ19fJykpKSAvLyBGaWx0ZXIgb3V0IHByaXZhdGUgbGFiZWxzXG4gICAgLm1hcDxTZWxlY3RhYmxlVmFsdWU+KChrZXkpID0+ICh7XG4gICAgICBsYWJlbDoga2V5LFxuICAgICAgdmFsdWU6IGtleSxcbiAgICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtdGVzdGlkPXsnZ3JvdXAtYnktY29udGFpbmVyJ30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPExhYmVsPkN1c3RvbSBncm91cCBieTwvTGFiZWw+XG4gICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgYXJpYS1sYWJlbD17J2dyb3VwIGJ5IGxhYmVsIGtleXMnfVxuICAgICAgICB2YWx1ZT17Z3JvdXBCeX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJHcm91cCBieVwiXG4gICAgICAgIHByZWZpeD17PEljb24gbmFtZT17J3RhZy1hbHQnfSAvPn1cbiAgICAgICAgb25DaGFuZ2U9eyhpdGVtcykgPT4ge1xuICAgICAgICAgIG9uR3JvdXBpbmdDaGFuZ2UoaXRlbXMubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlIGFzIHN0cmluZykpO1xuICAgICAgICB9fVxuICAgICAgICBvcHRpb25zPXtsYWJlbEtleU9wdGlvbnN9XG4gICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhYmVsLCBUb29sdGlwLCBJbnB1dCwgSWNvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcXVlcnlTdHJpbmc/OiBzdHJpbmc7XG4gIGRlZmF1bHRRdWVyeVN0cmluZz86IHN0cmluZztcbiAgb25GaWx0ZXJDaGFuZ2U6IChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE1hdGNoZXJGaWx0ZXIgPSAoeyBjbGFzc05hbWUsIG9uRmlsdGVyQ2hhbmdlLCBkZWZhdWx0UXVlcnlTdHJpbmcsIHF1ZXJ5U3RyaW5nIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGU6IEZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgb25GaWx0ZXJDaGFuZ2UodGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IDxJY29uIG5hbWU9eydzZWFyY2gnfSAvPjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxMYWJlbD5cbiAgICAgICAgPFN0YWNrIGdhcD17MC41fT5cbiAgICAgICAgICA8c3Bhbj5TZWFyY2ggYnkgbGFiZWw8L3NwYW4+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEZpbHRlciBhbGVydHMgdXNpbmcgbGFiZWwgcXVlcnlpbmcsIGV4OlxuICAgICAgICAgICAgICAgIDxwcmU+e2B7c2V2ZXJpdHk9XCJjcml0aWNhbFwiLCBpbnN0YW5jZT1+XCJjbHVzdGVyLXVzLS4rXCJ9YH08L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gbmFtZT1cImluZm8tY2lyY2xlXCIgc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0xhYmVsPlxuICAgICAgPElucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0UXVlcnlTdHJpbmd9XG4gICAgICAgIHZhbHVlPXtxdWVyeVN0cmluZ31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJzZWFyY2gtcXVlcnktaW5wdXRcIlxuICAgICAgICBwcmVmaXg9e3NlYXJjaEljb259XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0V2lkdGh9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBpY29uOiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gIGAsXG4gIGlucHV0V2lkdGg6IGNzc2BcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgZmxleC1ncm93OiAwO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBBbGVydFN0YXRlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3RhdGUsIFN0YXRlVGFnIH0gZnJvbSAnLi4vU3RhdGVUYWcnO1xuXG5jb25zdCBhbGVydFN0YXRlVG9TdGF0ZTogUmVjb3JkPEFsZXJ0U3RhdGUsIFN0YXRlPiA9IHtcbiAgW0FsZXJ0U3RhdGUuQWN0aXZlXTogJ2JhZCcsXG4gIFtBbGVydFN0YXRlLlVucHJvY2Vzc2VkXTogJ25ldXRyYWwnLFxuICBbQWxlcnRTdGF0ZS5TdXBwcmVzc2VkXTogJ2luZm8nLFxufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU6IEFsZXJ0U3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBBbUFsZXJ0U3RhdGVUYWc6IEZDPFByb3BzPiA9ICh7IHN0YXRlIH0pID0+IDxTdGF0ZVRhZyBzdGF0ZT17YWxlcnRTdGF0ZVRvU3RhdGVbc3RhdGVdfT57c3RhdGV9PC9TdGF0ZVRhZz47XG4iLCJpbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCBBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVkgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXMsIEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuLi91dGlscy9kYXRhc291cmNlJztcblxuZnVuY3Rpb24gaXNBbGVydE1hbmFnZXJTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB8fFxuICAgICEhZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXMoKS5maW5kKChkcykgPT4gZHMubmFtZSA9PT0gYWxlcnRNYW5hZ2VyU291cmNlTmFtZSlcbiAgKTtcbn1cblxuLyogdGhpcyB3aWxsIHJldHVybiBhbSBuYW1lIGVpdGhlciBmcm9tIHF1ZXJ5IHBhcmFtcyBvciBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3IgYSBkZWZhdWx0IChncmFmYW5hKS5cbiAqXG4gKiBmYWxsYmFja1VybCAtIGlmIHByb3ZpZGVkLCB3aWxsIHJlZGlyZWN0IHRvIHRoaXMgdXJsIGlmIGFsZXJ0bWFuYWdlciBwcm92aWRlZCBpbiBxdWVyeSBubyBsb25nZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoKTogW3N0cmluZyB8IHVuZGVmaW5lZCwgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4gdm9pZF0ge1xuICBjb25zdCBbcXVlcnlQYXJhbXMsIHVwZGF0ZVF1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFpc0FsZXJ0TWFuYWdlclNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgICAgICBzdG9yZS5kZWxldGUoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICB1cGRhdGVRdWVyeVBhcmFtcyh7IFtBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldOiBudWxsIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmUuc2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1cGRhdGVRdWVyeVBhcmFtc11cbiAgKTtcblxuICBjb25zdCBxdWVyeVNvdXJjZSA9IHF1ZXJ5UGFyYW1zW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV07XG5cbiAgaWYgKHF1ZXJ5U291cmNlICYmIHR5cGVvZiBxdWVyeVNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaXNBbGVydE1hbmFnZXJTb3VyY2UocXVlcnlTb3VyY2UpKSB7XG4gICAgICByZXR1cm4gW3F1ZXJ5U291cmNlLCB1cGRhdGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub24gZXhpc3RpbmcgYWxlcnRtYW5hZ2VyXG4gICAgICByZXR1cm4gW3VuZGVmaW5lZCwgdXBkYXRlXTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc3RvcmVTb3VyY2UgPSBzdG9yZS5nZXQoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICBpZiAoc3RvcmVTb3VyY2UgJiYgdHlwZW9mIHN0b3JlU291cmNlID09PSAnc3RyaW5nJyAmJiBpc0FsZXJ0TWFuYWdlclNvdXJjZShzdG9yZVNvdXJjZSkpIHtcbiAgICB1cGRhdGUoc3RvcmVTb3VyY2UpO1xuICAgIHJldHVybiBbc3RvcmVTb3VyY2UsIHVwZGF0ZV07XG4gIH1cblxuICByZXR1cm4gW0dSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsIHVwZGF0ZV07XG59XG4iLCJpbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCB7IEFsZXJ0bWFuYWdlckdyb3VwIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGxhYmVsc01hdGNoTWF0Y2hlcnMsIHBhcnNlTWF0Y2hlcnMgfSBmcm9tICcuLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMgfSBmcm9tICcuLi91dGlscy9taXNjJztcblxuZXhwb3J0IGNvbnN0IHVzZUZpbHRlcmVkQW1Hcm91cHMgPSAoZ3JvdXBzOiBBbGVydG1hbmFnZXJHcm91cFtdKSA9PiB7XG4gIGNvbnN0IFtxdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICBjb25zdCBmaWx0ZXJzID0gZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMocXVlcnlQYXJhbXMpO1xuICBjb25zdCBtYXRjaGVycyA9IHBhcnNlTWF0Y2hlcnMoZmlsdGVycy5xdWVyeVN0cmluZyB8fCAnJyk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBncm91cHMucmVkdWNlKChmaWx0ZXJlZEdyb3VwOiBBbGVydG1hbmFnZXJHcm91cFtdLCBncm91cCkgPT4ge1xuICAgICAgY29uc3QgYWxlcnRzID0gZ3JvdXAuYWxlcnRzLmZpbHRlcigoeyBsYWJlbHMsIHN0YXR1cyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsc01hdGNoID0gbGFiZWxzTWF0Y2hNYXRjaGVycyhsYWJlbHMsIG1hdGNoZXJzKTtcbiAgICAgICAgY29uc3QgZmlsdGVyc01hdGNoID0gZmlsdGVycy5hbGVydFN0YXRlID8gc3RhdHVzLnN0YXRlID09PSBmaWx0ZXJzLmFsZXJ0U3RhdGUgOiB0cnVlO1xuICAgICAgICByZXR1cm4gbGFiZWxzTWF0Y2ggJiYgZmlsdGVyc01hdGNoO1xuICAgICAgfSk7XG4gICAgICBpZiAoYWxlcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVGhlIHVuZ3JvdXBlZCBhbGVydHMgc2hvdWxkIGJlIGZpcnN0IGluIHRoZSByZXN1bHRzXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhncm91cC5sYWJlbHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGZpbHRlcmVkR3JvdXAudW5zaGlmdCh7IC4uLmdyb3VwLCBhbGVydHMgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyZWRHcm91cC5wdXNoKHsgLi4uZ3JvdXAsIGFsZXJ0cyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbHRlcmVkR3JvdXA7XG4gICAgfSwgW10pO1xuICB9LCBbZ3JvdXBzLCBmaWx0ZXJzLCBtYXRjaGVyc10pO1xufTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbGVydG1hbmFnZXJHcm91cCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IExhYmVscyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdW5pcUJ5IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IHVzZUdyb3VwZWRBbGVydHMgPSAoZ3JvdXBzOiBBbGVydG1hbmFnZXJHcm91cFtdLCBncm91cEJ5OiBzdHJpbmdbXSk6IEFsZXJ0bWFuYWdlckdyb3VwW10gPT4ge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGdyb3VwQnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlbXB0eUdyb3VwaW5ncyA9IGdyb3Vwcy5maWx0ZXIoKGdyb3VwKSA9PiBPYmplY3Qua2V5cyhncm91cC5sYWJlbHMpLmxlbmd0aCA9PT0gMCk7XG4gICAgICBpZiAoZW1wdHlHcm91cGluZ3MubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBNZXJnZXMgbXVsdGlwbGUgdW5ncm91cGVkIGdyb3VwaW5nXG4gICAgICAgIHJldHVybiBncm91cHMucmVkdWNlKChjb21iaW5lZEdyb3VwcywgZ3JvdXApID0+IHtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZ3JvdXAubGFiZWxzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vR3JvdXBpbmdHcm91cCA9IGNvbWJpbmVkR3JvdXBzLmZpbmQoKHsgbGFiZWxzIH0pID0+IE9iamVjdC5rZXlzKGxhYmVscykpO1xuICAgICAgICAgICAgaWYgKCFub0dyb3VwaW5nR3JvdXApIHtcbiAgICAgICAgICAgICAgY29tYmluZWRHcm91cHMucHVzaCh7IGFsZXJ0czogZ3JvdXAuYWxlcnRzLCBsYWJlbHM6IHt9LCByZWNlaXZlcjogeyBuYW1lOiAnTk9ORScgfSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vR3JvdXBpbmdHcm91cC5hbGVydHMgPSB1bmlxQnkoWy4uLm5vR3JvdXBpbmdHcm91cC5hbGVydHMsIC4uLmdyb3VwLmFsZXJ0c10sICdsYWJlbHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tYmluZWRHcm91cHMucHVzaChncm91cCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb21iaW5lZEdyb3VwcztcbiAgICAgICAgfSwgW10gYXMgQWxlcnRtYW5hZ2VyR3JvdXBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhbGVydHMgPSBncm91cHMuZmxhdE1hcCgoeyBhbGVydHMgfSkgPT4gYWxlcnRzKTtcbiAgICByZXR1cm4gYWxlcnRzLnJlZHVjZSgoZ3JvdXBpbmdzLCBhbGVydCkgPT4ge1xuICAgICAgY29uc3QgYWxlcnRDb250YWluc0dyb3VwaW5ncyA9IGdyb3VwQnkuZXZlcnkoKGdyb3VwQnlMYWJlbCkgPT4gT2JqZWN0LmtleXMoYWxlcnQubGFiZWxzKS5pbmNsdWRlcyhncm91cEJ5TGFiZWwpKTtcblxuICAgICAgaWYgKGFsZXJ0Q29udGFpbnNHcm91cGluZ3MpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdHcm91cGluZyA9IGdyb3VwaW5ncy5maW5kKChncm91cCkgPT4ge1xuICAgICAgICAgIHJldHVybiBncm91cEJ5LmV2ZXJ5KChncm91cEtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdyb3VwLmxhYmVsc1tncm91cEtleV0gPT09IGFsZXJ0LmxhYmVsc1tncm91cEtleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWV4aXN0aW5nR3JvdXBpbmcpIHtcbiAgICAgICAgICBjb25zdCBsYWJlbHMgPSBncm91cEJ5LnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGFjYyA9IHsgLi4uYWNjLCBba2V5XTogYWxlcnQubGFiZWxzW2tleV0gfTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30gYXMgTGFiZWxzKTtcbiAgICAgICAgICBncm91cGluZ3MucHVzaCh7XG4gICAgICAgICAgICBhbGVydHM6IFthbGVydF0sXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICByZWNlaXZlcjoge1xuICAgICAgICAgICAgICBuYW1lOiAnTk9ORScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4aXN0aW5nR3JvdXBpbmcuYWxlcnRzLnB1c2goYWxlcnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub0dyb3VwaW5nR3JvdXAgPSBncm91cGluZ3MuZmluZCgoZ3JvdXApID0+IE9iamVjdC5rZXlzKGdyb3VwLmxhYmVscykubGVuZ3RoID09PSAwKTtcbiAgICAgICAgaWYgKCFub0dyb3VwaW5nR3JvdXApIHtcbiAgICAgICAgICBncm91cGluZ3MucHVzaCh7IGFsZXJ0czogW2FsZXJ0XSwgbGFiZWxzOiB7fSwgcmVjZWl2ZXI6IHsgbmFtZTogJ05PTkUnIH0gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9Hcm91cGluZ0dyb3VwLmFsZXJ0cy5wdXNoKGFsZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ3JvdXBpbmdzO1xuICAgIH0sIFtdIGFzIEFsZXJ0bWFuYWdlckdyb3VwW10pO1xuICB9LCBbZ3JvdXBzLCBncm91cEJ5XSk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJBbGVydCIsIkxvYWRpbmdQbGFjZWhvbGRlciIsInVzZVN0eWxlczIiLCJ1c2VRdWVyeVBhcmFtcyIsIkFsZXJ0aW5nUGFnZVdyYXBwZXIiLCJBbGVydEdyb3VwIiwiQWxlcnRHcm91cEZpbHRlciIsImZldGNoQWxlcnRHcm91cHNBY3Rpb24iLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyIsIk5PVElGSUNBVElPTlNfUE9MTF9JTlRFUlZBTF9NUyIsInVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJ1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciIsInVzZUdyb3VwZWRBbGVydHMiLCJ1c2VGaWx0ZXJlZEFtR3JvdXBzIiwiY3NzIiwiQWxlcnRHcm91cHMiLCJhbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwiZGlzcGF0Y2giLCJxdWVyeVBhcmFtcyIsImdyb3VwQnkiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJhbGVydEdyb3VwcyIsInN0YXRlIiwiYW1BbGVydEdyb3VwcyIsImxvYWRpbmciLCJlcnJvciIsInJlc3VsdCIsInJlc3VsdHMiLCJncm91cGVkQWxlcnRzIiwiZmlsdGVyZWRBbGVydEdyb3VwcyIsImZldGNoTm90aWZpY2F0aW9ucyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWVzc2FnZSIsIm1hcCIsImdyb3VwIiwiaW5kZXgiLCJPYmplY3QiLCJrZXlzIiwibGFiZWxzIiwibGVuZ3RoIiwiZ3JvdXBpbmdCYW5uZXIiLCJqb2luIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW1lIiwic3BhY2luZyIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsInVzZVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJwYWdlSWQiLCJpc0xvYWRpbmciLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiY29udGV4dFNydiIsIkF1dGhvcml6ZSIsImFjdGlvbnMiLCJmYWxsYmFjayIsInNvbWUiLCJhY3Rpb24iLCJoYXNBY2Nlc3MiLCJjeCIsIkR5bmFtaWNUYWJsZSIsIkR5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzIiwicmVuZGVyRXhwYW5kZWRDb250ZW50IiwicHJvcHMiLCJpdGVtIiwiaXRlbXMiLCJjb250ZW50R3VpZGVsaW5lIiwiZ3VpZGVsaW5lIiwidW5kZWZpbmVkIiwicmVsYXRpdmUiLCJoZWFkZXJHdWlkZWxpbmUiLCJfIiwidG9wR3VpZGVsaW5lIiwiYm90dG9tR3VpZGVsaW5lIiwiY29sb3JzIiwiYm9yZGVyIiwibWVkaXVtIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiTGlua0J1dHRvbiIsIkFsZXJ0U3RhdGUiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiZ2V0SW5zdGFuY2VzUGVybWlzc2lvbnMiLCJpc0dyYWZhbmFSdWxlc1NvdXJjZSIsIm1ha2VBTUxpbmsiLCJtYWtlTGFiZWxCYXNlZFNpbGVuY2VMaW5rIiwiQW5ub3RhdGlvbkRldGFpbHNGaWVsZCIsIkFsZXJ0RGV0YWlscyIsImFsZXJ0IiwiaW5zdGFuY2VQZXJtaXNzaW9ucyIsImlzR3JhZmFuYVNvdXJjZSIsImlzU2VlU291cmNlQnV0dG9uRW5hYmxlZCIsImhhc1Blcm1pc3Npb24iLCJBbGVydGluZ1J1bGVSZWFkIiwiYWN0aW9uc1JvdyIsInVwZGF0ZSIsImNyZWF0ZSIsImlzRWRpdG9yIiwic3RhdHVzIiwiU3VwcHJlc3NlZCIsInNpbGVuY2VkQnkiLCJidXR0b24iLCJBY3RpdmUiLCJnZW5lcmF0b3JVUkwiLCJlbnRyaWVzIiwiYW5ub3RhdGlvbnMiLCJhbm5vdGF0aW9uS2V5IiwiYW5ub3RhdGlvblZhbHVlIiwicmVjZWl2ZXJzIiwibmFtZSIsImZpbHRlciIsInVzZVN0YXRlIiwiQWxlcnRMYWJlbHMiLCJBbGVydEdyb3VwQWxlcnRzVGFibGUiLCJDb2xsYXBzZVRvZ2dsZSIsIkFsZXJ0R3JvdXBIZWFkZXIiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwid3JhcHBlciIsImhlYWRlciIsImhlYWRlckxhYmVscyIsImFsZXJ0cyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJzdW1tYXJ5Iiwic3BhbkVsZW1lbnQiLCJtYWluIiwicHJpbWFyeSIsIlVucHJvY2Vzc2VkIiwidXNlTWVtbyIsImludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nIiwiQW1BbGVydFN0YXRlVGFnIiwiY29sdW1ucyIsImlkIiwibGFiZWwiLCJyZW5kZXJDZWxsIiwiZGF0YSIsImR1cmF0aW9uIiwic3RhcnQiLCJEYXRlIiwic3RhcnRzQXQiLCJlbmQiLCJlbmRzQXQiLCJzaXplIiwiZmluZ2VycHJpbnQiLCJ0YWJsZVdyYXBwZXIiLCJ1cCIsInR5cG9ncmFwaHkiLCJib2R5U21hbGwiLCJmb250U2l6ZSIsIkFsZXJ0TWFuYWdlclBpY2tlciIsIk1hdGNoZXJGaWx0ZXIiLCJBbGVydFN0YXRlRmlsdGVyIiwiR3JvdXBCeSIsIkJ1dHRvbiIsImdyb3VwcyIsImZpbHRlcktleSIsInNldEZpbHRlcktleSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFF1ZXJ5UGFyYW1zIiwicXVlcnlTdHJpbmciLCJhbGVydFN0YXRlIiwibWF0Y2hlckZpbHRlcktleSIsInNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJjbGVhckZpbHRlcnMiLCJzZXRUaW1lb3V0Iiwic2hvd0NsZWFyQnV0dG9uIiwiZmlsdGVyU2VjdGlvbiIsImZpbHRlcklucHV0IiwidmFsdWUiLCJjbGVhckJ1dHRvbiIsIlJhZGlvQnV0dG9uR3JvdXAiLCJMYWJlbCIsIm9uU3RhdGVGaWx0ZXJDaGFuZ2UiLCJzdGF0ZUZpbHRlciIsImFsZXJ0U3RhdGVPcHRpb25zIiwic29ydCIsImxhYmVsQSIsImxhYmVsQiIsInVuaXEiLCJJY29uIiwiTXVsdGlTZWxlY3QiLCJjbGFzc05hbWUiLCJvbkdyb3VwaW5nQ2hhbmdlIiwibGFiZWxLZXlPcHRpb25zIiwiZmxhdE1hcCIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImtleSIsIlRvb2x0aXAiLCJJbnB1dCIsIlN0YWNrIiwib25GaWx0ZXJDaGFuZ2UiLCJkZWZhdWx0UXVlcnlTdHJpbmciLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2VhcmNoSWNvbiIsImljb24iLCJpbnB1dFdpZHRoIiwiU3RhdGVUYWciLCJhbGVydFN0YXRlVG9TdGF0ZSIsInN0b3JlIiwidXNlQ2FsbGJhY2siLCJBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSIsIkFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSIsImdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzIiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsImlzQWxlcnRNYW5hZ2VyU291cmNlIiwiZmluZCIsImRzIiwidXBkYXRlUXVlcnlQYXJhbXMiLCJkZWxldGUiLCJzZXQiLCJxdWVyeVNvdXJjZSIsInN0b3JlU291cmNlIiwiZ2V0IiwibGFiZWxzTWF0Y2hNYXRjaGVycyIsInBhcnNlTWF0Y2hlcnMiLCJmaWx0ZXJzIiwibWF0Y2hlcnMiLCJyZWR1Y2UiLCJmaWx0ZXJlZEdyb3VwIiwibGFiZWxzTWF0Y2giLCJmaWx0ZXJzTWF0Y2giLCJ1bnNoaWZ0IiwicHVzaCIsInVuaXFCeSIsImVtcHR5R3JvdXBpbmdzIiwiY29tYmluZWRHcm91cHMiLCJub0dyb3VwaW5nR3JvdXAiLCJyZWNlaXZlciIsImdyb3VwaW5ncyIsImFsZXJ0Q29udGFpbnNHcm91cGluZ3MiLCJldmVyeSIsImdyb3VwQnlMYWJlbCIsImluY2x1ZGVzIiwiZXhpc3RpbmdHcm91cGluZyIsImdyb3VwS2V5IiwiYWNjIl0sInNvdXJjZVJvb3QiOiIifQ==
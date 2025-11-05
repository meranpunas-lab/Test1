"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertRuleListIndex"],{

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

/***/ "./public/app/features/alerting/AlertHowToModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertHowToModal": () => (/* binding */ AlertHowToModal)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _VerticalGroup;





function AlertHowToModal({
  onDismiss
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: "Adding an Alert",
    isOpen: true,
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    children: _VerticalGroup || (_VerticalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.VerticalGroup, {
      spacing: "sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "public/img/alert_howto_new.png",
        alt: "link to how to alert image"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: "Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: "Remember to save the dashboard to persist your alert rule changes."
      })]
    }))
  });
}

/***/ }),

/***/ "./public/app/features/alerting/AlertRuleItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
 // @ts-ignore






const AlertRuleItem = ({
  rule,
  search,
  onTogglePause
}) => {
  const ruleUrl = `${rule.url}?editPanel=${rule.panelId}&tab=alert`;
  const renderText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(text => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((react_highlight_words__WEBPACK_IMPORTED_MODULE_1___default()), {
    highlightClassName: "highlight-search-match",
    textToHighlight: text,
    searchWords: [search]
  }, text), [search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
      children: renderText(rule.name)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Figure, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        size: "xl",
        name: rule.stateIcon,
        className: `alert-rule-item__icon ${rule.stateClass}`
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
          className: `${rule.stateClass}`,
          children: [renderText(rule.stateText), ' ']
        }, "text"), "for ", rule.stateAge]
      }, "state"), rule.info ? renderText(rule.info) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Actions, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        icon: rule.state === 'paused' ? 'play' : 'pause',
        onClick: onTogglePause,
        children: rule.state === 'paused' ? 'Resume' : 'Pause'
      }, "play"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        variant: "secondary",
        href: ruleUrl,
        icon: "cog",
        children: "Edit alert"
      }, "edit")]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertRuleItem);

/***/ }),

/***/ "./public/app/features/alerting/AlertRuleList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertRuleListUnconnected": () => (/* binding */ AlertRuleListUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _AlertRuleItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/AlertRuleItem.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/state/selectors.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _AlertHowToModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/AlertHowToModal.tsx");
/* harmony import */ var _components_UnifiedAlertingPromotion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/components/UnifiedAlertingPromotion.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _label, _div, _LinkButton, _UnifiedAlertingPromo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'alert-list'),
    alertRules: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getAlertRuleItems)(state),
    search: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getSearchQuery)(state.alertRules),
    isLoading: state.alertRules.isLoading
  };
}

const mapDispatchToProps = {
  getAlertRulesAsync: _state_actions__WEBPACK_IMPORTED_MODULE_6__.getAlertRulesAsync,
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_9__.setSearchQuery,
  togglePauseAlertRule: _state_actions__WEBPACK_IMPORTED_MODULE_6__.togglePauseAlertRule
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class AlertRuleListUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "stateFilters", [{
      label: 'All',
      value: 'all'
    }, {
      label: 'OK',
      value: 'ok'
    }, {
      label: 'Not OK',
      value: 'not_ok'
    }, {
      label: 'Alerting',
      value: 'alerting'
    }, {
      label: 'No data',
      value: 'no_data'
    }, {
      label: 'Paused',
      value: 'paused'
    }, {
      label: 'Pending',
      value: 'pending'
    }]);

    _defineProperty(this, "onStateFilterChanged", option => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.locationService.partial({
        state: option.value
      });
    });

    _defineProperty(this, "onOpenHowTo", () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_4__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_11__.ShowModalReactEvent({
        component: _AlertHowToModal__WEBPACK_IMPORTED_MODULE_12__.AlertHowToModal
      }));
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchQuery(value);
    });

    _defineProperty(this, "onTogglePause", rule => {
      this.props.togglePauseAlertRule(rule.id, {
        paused: rule.state !== 'paused'
      });
    });

    _defineProperty(this, "alertStateFilterOption", ({
      text,
      value
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("option", {
        value: value,
        children: text
      }, value);
    });
  }

  componentDidMount() {
    this.fetchRules();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.queryParams.state !== this.props.queryParams.state) {
      this.fetchRules();
    }
  }

  async fetchRules() {
    await this.props.getAlertRulesAsync({
      state: this.getStateFilter()
    });
  }

  getStateFilter() {
    var _this$props$queryPara;

    return (_this$props$queryPara = this.props.queryParams.state) !== null && _this$props$queryPara !== void 0 ? _this$props$queryPara : 'all';
  }

  render() {
    const {
      navModel,
      alertRules,
      search,
      isLoading
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
        isLoading: isLoading,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "gf-form gf-form--grow",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.FilterInput, {
              placeholder: "Search alerts",
              value: search,
              onChange: this.onSearchQueryChange
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "gf-form",
            children: [_label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("label", {
              className: "gf-form-label",
              htmlFor: "alert-state-filter",
              children: "States"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "width-13",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select, {
                inputId: 'alert-state-filter',
                menuShouldPortal: true,
                options: this.stateFilters,
                onChange: this.onStateFilterChanged,
                value: this.getStateFilter()
              })
            })]
          }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.unifiedAlertingEnabled && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton, {
            variant: "primary",
            href: "alerting/ng/new",
            children: "Add NG Alert"
          }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, {
            variant: "secondary",
            onClick: this.onOpenHowTo,
            children: "How to add an alert"
          })]
        }), _UnifiedAlertingPromo || (_UnifiedAlertingPromo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_UnifiedAlertingPromotion__WEBPACK_IMPORTED_MODULE_13__.UnifiedAlertingPromotion, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.VerticalGroup, {
          spacing: "none",
          children: alertRules.map(rule => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_AlertRuleItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
              rule: rule,
              search: search,
              onTogglePause: () => this.onTogglePause(rule)
            }, rule.id);
          })
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(AlertRuleListUnconnected));

/***/ }),

/***/ "./public/app/features/alerting/components/UnifiedAlertingPromotion.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCAL_STORAGE_KEY": () => (/* binding */ LOCAL_STORAGE_KEY),
/* harmony export */   "UnifiedAlertingPromotion": () => (/* binding */ UnifiedAlertingPromotion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2;






const LOCAL_STORAGE_KEY = 'grafana.legacyalerting.unifiedalertingpromo';

const UnifiedAlertingPromotion = () => {
  const [showUnifiedAlertingPromotion, setShowUnifiedAlertingPromotion] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(LOCAL_STORAGE_KEY, true);

  if (!showUnifiedAlertingPromotion) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
    severity: "info",
    title: "Try out the Grafana 8 alerting!",
    onRemove: () => setShowUnifiedAlertingPromotion(false),
    children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: ["You are using the legacy Grafana alerting.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "While we have no plans of deprecating it any time soon, we invite you to give the improved Grafana 8 alerting a try."]
    })), _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: ["See", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",
        children: "What\u2019s New with Grafana 8 alerting"
      }), ' ', "to learn more about what\u2018s new in Grafana 8 alerting or learn", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",
        children: "how to enable the new Grafana 8 alerting feature"
      }), "."]
    }))]
  });
};



/***/ }),

/***/ "./public/app/features/alerting/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotificationChannel": () => (/* binding */ createNotificationChannel),
/* harmony export */   "getAlertRulesAsync": () => (/* binding */ getAlertRulesAsync),
/* harmony export */   "loadNotificationChannel": () => (/* binding */ loadNotificationChannel),
/* harmony export */   "loadNotificationTypes": () => (/* binding */ loadNotificationTypes),
/* harmony export */   "testNotificationChannel": () => (/* binding */ testNotificationChannel),
/* harmony export */   "togglePauseAlertRule": () => (/* binding */ togglePauseAlertRule),
/* harmony export */   "updateNotificationChannel": () => (/* binding */ updateNotificationChannel)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/index.ts");




function getAlertRulesAsync(options) {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.loadAlertRules)());
    const rules = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/alerts', options);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.loadedAlertRules)(rules));
  };
}
function togglePauseAlertRule(id, options) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alerts/${id}/pause`, options);
    const stateFilter = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getSearchObject().state || 'all';
    dispatch(getAlertRulesAsync({
      state: stateFilter.toString()
    }));
  };
}
function createNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alert-notifications`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification created')));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push('/alerting/notifications');
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
    }
  };
}
function updateNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/alert-notifications/${data.id}`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification updated')));
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
    }
  };
}
function testNotificationChannel(data) {
  return async (dispatch, getState) => {
    const channel = getState().notificationChannel.notificationChannel;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/alert-notifications/test', Object.assign({
      id: channel.id
    }, data));
  };
}
function loadNotificationTypes() {
  return async dispatch => {
    const alertNotifiers = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifiers`);
    const notificationTypes = alertNotifiers.sort((o1, o2) => {
      if (o1.name > o2.name) {
        return 1;
      }

      return -1;
    });
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setNotificationChannels)(notificationTypes));
  };
}
function loadNotificationChannel(id) {
  return async dispatch => {
    await dispatch(loadNotificationTypes());
    const notificationChannel = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifications/${id}`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.notificationChannelLoaded)(notificationChannel));
  };
}

/***/ }),

/***/ "./public/app/features/alerting/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlertRuleItems": () => (/* binding */ getAlertRuleItems),
/* harmony export */   "getNotificationChannel": () => (/* binding */ getNotificationChannel),
/* harmony export */   "getSearchQuery": () => (/* binding */ getSearchQuery)
/* harmony export */ });
const getSearchQuery = state => state.searchQuery;
const getAlertRuleItems = state => {
  const regex = new RegExp(state.alertRules.searchQuery, 'i');
  return state.alertRules.items.filter(item => {
    return regex.test(item.name) || regex.test(item.stateText) || regex.test(item.info);
  });
};
const getNotificationChannel = (state, channelId) => {
  if (state.notificationChannel.id === channelId) {
    return state.notificationChannel;
  }

  return null;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/RuleList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx");
/* harmony import */ var _components_rules_RuleListErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListErrors.tsx");
/* harmony import */ var _components_rules_RuleListGroupView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListGroupView.tsx");
/* harmony import */ var _components_rules_RuleListStateView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListStateView.tsx");
/* harmony import */ var _components_rules_RulesFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesFilter.tsx");
/* harmony import */ var _components_rules_RuleStats__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleStats.tsx");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredRules.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _RuleListErrors, _RulesFilter, _NoRulesSplash;


























const VIEWS = {
  groups: _components_rules_RuleListGroupView__WEBPACK_IMPORTED_MODULE_9__.RuleListGroupView,
  state: _components_rules_RuleListStateView__WEBPACK_IMPORTED_MODULE_10__.RuleListStateView
};
const RuleList = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(() => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const rulesDataSourceNames = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(_utils_datasource__WEBPACK_IMPORTED_MODULE_19__.getAllRulesSourceNames, []);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useLocation)();
  const [expandAll, setExpandAll] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__.useQueryParams)();
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_20__.getFiltersFromUrlParams)(queryParams);
  const filtersActive = Object.values(filters).some(filter => filter !== undefined);
  const {
    canCreateGrafanaRules,
    canCreateCloudRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_17__.useRulesAccess)();
  const view = VIEWS[queryParams['view']] ? queryParams['view'] : 'groups';
  const ViewComponent = VIEWS[view]; // fetch rules, then poll every RULE_LIST_POLL_INTERVAL_MS

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_16__.fetchAllPromAndRulerRulesAction)());
    const interval = setInterval(() => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_16__.fetchAllPromAndRulerRulesAction)()), _utils_constants__WEBPACK_IMPORTED_MODULE_18__.RULE_LIST_POLL_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  const promRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_15__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_15__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const dispatched = rulesDataSourceNames.some(name => {
    var _promRuleRequests$nam, _rulerRuleRequests$na;

    return ((_promRuleRequests$nam = promRuleRequests[name]) === null || _promRuleRequests$nam === void 0 ? void 0 : _promRuleRequests$nam.dispatched) || ((_rulerRuleRequests$na = rulerRuleRequests[name]) === null || _rulerRuleRequests$na === void 0 ? void 0 : _rulerRuleRequests$na.dispatched);
  });
  const loading = rulesDataSourceNames.some(name => {
    var _promRuleRequests$nam2, _rulerRuleRequests$na2;

    return ((_promRuleRequests$nam2 = promRuleRequests[name]) === null || _promRuleRequests$nam2 === void 0 ? void 0 : _promRuleRequests$nam2.loading) || ((_rulerRuleRequests$na2 = rulerRuleRequests[name]) === null || _rulerRuleRequests$na2 === void 0 ? void 0 : _rulerRuleRequests$na2.loading);
  });
  const haveResults = rulesDataSourceNames.some(name => {
    var _promRuleRequests$nam3, _promRuleRequests$nam4, _promRuleRequests$nam5, _rulerRuleRequests$na3, _rulerRuleRequests$na4;

    return ((_promRuleRequests$nam3 = promRuleRequests[name]) === null || _promRuleRequests$nam3 === void 0 ? void 0 : (_promRuleRequests$nam4 = _promRuleRequests$nam3.result) === null || _promRuleRequests$nam4 === void 0 ? void 0 : _promRuleRequests$nam4.length) && !((_promRuleRequests$nam5 = promRuleRequests[name]) !== null && _promRuleRequests$nam5 !== void 0 && _promRuleRequests$nam5.error) || Object.keys(((_rulerRuleRequests$na3 = rulerRuleRequests[name]) === null || _rulerRuleRequests$na3 === void 0 ? void 0 : _rulerRuleRequests$na3.result) || {}).length && !((_rulerRuleRequests$na4 = rulerRuleRequests[name]) !== null && _rulerRuleRequests$na4 !== void 0 && _rulerRuleRequests$na4.error);
  });
  const showNewAlertSplash = dispatched && !loading && !haveResults;
  const combinedNamespaces = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_13__.useCombinedRuleNamespaces)();
  const filteredNamespaces = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_14__.useFilteredRules)(combinedNamespaces);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__.AlertingPageWrapper, {
    pageId: "alert-list",
    isLoading: loading && !haveResults,
    children: [_RuleListErrors || (_RuleListErrors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_RuleListErrors__WEBPACK_IMPORTED_MODULE_8__.RuleListErrors, {})), !showNewAlertSplash && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: [_RulesFilter || (_RulesFilter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_RulesFilter__WEBPACK_IMPORTED_MODULE_11__["default"], {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: styles.buttonsContainer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: styles.statsContainer,
          children: [view === 'groups' && filtersActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            className: styles.expandAllButton,
            icon: expandAll ? 'angle-double-up' : 'angle-double-down',
            variant: "secondary",
            onClick: () => setExpandAll(!expandAll),
            children: expandAll ? 'Collapse all' : 'Expand all'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_RuleStats__WEBPACK_IMPORTED_MODULE_12__.RuleStats, {
            showInactive: true,
            showRecording: true,
            namespaces: filteredNamespaces
          })]
        }), (canCreateGrafanaRules || canCreateCloudRules) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.urlUtil.renderUrl('alerting/new', {
            returnTo: location.pathname + location.search
          }),
          icon: "plus",
          children: "New alert rule"
        })]
      })]
    }), showNewAlertSplash && (_NoRulesSplash || (_NoRulesSplash = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_7__.NoRulesSplash, {}))), haveResults && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(ViewComponent, {
      expandAll: expandAll,
      namespaces: filteredNamespaces
    })]
  });
}, {
  style: 'page'
});

const getStyles = theme => ({
  break: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    height: 0;
    margin-bottom: ${theme.spacing(2)};
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  buttonsContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
    display: flex;
    justify-content: space-between;
  `,
  statsContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  expandAllButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(1)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RuleList);

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

/***/ "./public/app/features/alerting/unified/components/RuleLocation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleLocation": () => (/* binding */ RuleLocation)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;







const RuleLocation = ({
  namespace,
  group
}) => {
  if (!group) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: namespace
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [namespace, " ", _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      name: "angle-right"
    })), " ", group]
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/StateColoredText.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateColoredText": () => (/* binding */ StateColoredText)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const StateColoredText = ({
  children,
  status
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
    className: styles[status],
    children: children || status
  });
};

const getStyles = theme => ({
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Inactive]: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    color: ${theme.colors.success.text};
  `,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Pending]: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    color: ${theme.colors.warning.text};
  `,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Firing]: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    color: ${theme.colors.error.text};
  `,
  neutral: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    color: ${theme.colors.text.secondary};
  `
});

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

/***/ "./public/app/features/alerting/unified/components/rules/CloudRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudRules": () => (/* binding */ CloudRules)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _RulesGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesGroup.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _div, _p, _p2;










const CloudRules = ({
  namespaces,
  expandAll
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);
  const rules = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulesDataSources = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.getRulesDataSources, []);
  const dataSourcesLoading = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => rulesDataSources.filter(ds => {
    var _rules$ds$name;

    return (_rules$ds$name = rules[ds.name]) === null || _rules$ds$name === void 0 ? void 0 : _rules$ds$name.loading;
  }), [rules, rulesDataSources]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.sectionHeader,
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
        children: "Mimir / Cortex / Loki"
      })), dataSourcesLoading.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        className: styles.loader,
        text: `Loading rules from ${dataSourcesLoading.length} ${pluralize__WEBPACK_IMPORTED_MODULE_6___default()('source', dataSourcesLoading.length)}`
      }) : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {}))]
    }), namespaces.map(namespace => {
      const {
        groups,
        rulesSource
      } = namespace;
      return groups.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_RulesGroup__WEBPACK_IMPORTED_MODULE_4__.RulesGroup, {
        group: group,
        namespace: namespace,
        expandAll: expandAll
      }, `${(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.getRulesSourceName)(rulesSource)}-${name}-${group.name}`));
    }), (namespaces === null || namespaces === void 0 ? void 0 : namespaces.length) === 0 && !!rulesDataSources.length && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      children: "No rules found."
    }))), !rulesDataSources.length && (_p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      children: "There are no Prometheus or Loki datas sources configured."
    })))]
  });
};

const getStyles = theme => ({
  loader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  sectionHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing.xl};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/EditCloudGroupModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCloudGroupModal": () => (/* binding */ EditCloudGroupModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













function EditCloudGroupModal(props) {
  var _useUnifiedAlertingSe, _Button;

  const {
    namespace,
    group,
    onClose
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    loading,
    error,
    dispatched
  } = (_useUnifiedAlertingSe = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.updateLotexNamespaceAndGroup)) !== null && _useUnifiedAlertingSe !== void 0 ? _useUnifiedAlertingSe : _utils_redux__WEBPACK_IMPORTED_MODULE_8__.initialAsyncRequestState;
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _group$interval;

    return {
      namespaceName: namespace.name,
      groupName: group.name,
      groupInterval: (_group$interval = group.interval) !== null && _group$interval !== void 0 ? _group$interval : ''
    };
  }, [namespace, group]); // close modal if successfully saved

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (dispatched && !loading && !error) {
      onClose();
    }
  }, [dispatched, loading, onClose, error]);
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_9__.useCleanup)(state => state.unifiedAlerting.updateLotexNamespaceAndGroup);

  const onSubmit = values => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__.updateLotexNamespaceAndGroupAction)({
      rulesSourceName: (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_6__.getRulesSourceName)(namespace.rulesSource),
      groupName: group.name,
      newGroupName: values.groupName,
      namespaceName: namespace.name,
      newNamespaceName: values.namespaceName,
      groupInterval: values.groupInterval || undefined
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    className: styles.modal,
    isOpen: true,
    title: "Edit namespace or rule group",
    onDismiss: onClose,
    onClickBackdrop: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
      defaultValues: defaultValues,
      onSubmit: onSubmit,
      children: ({
        register,
        errors,
        formState: {
          isDirty
        }
      }) => {
        var _errors$namespaceName, _errors$groupName, _errors$groupInterval;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Namespace",
            invalid: !!errors.namespaceName,
            error: (_errors$namespaceName = errors.namespaceName) === null || _errors$namespaceName === void 0 ? void 0 : _errors$namespaceName.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
              id: "namespaceName"
            }, register('namespaceName', {
              required: 'Namespace name is required.'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Rule group",
            invalid: !!errors.groupName,
            error: (_errors$groupName = errors.groupName) === null || _errors$groupName === void 0 ? void 0 : _errors$groupName.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
              id: "groupName"
            }, register('groupName', {
              required: 'Rule group name is required.'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
            label: "Rule group evaluation interval",
            invalid: !!errors.groupInterval,
            error: (_errors$groupInterval = errors.groupInterval) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
              id: "groupInterval",
              placeholder: "1m"
            }, register('groupInterval', {
              pattern: _utils_time__WEBPACK_IMPORTED_MODULE_2__.durationValidationPattern
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal.ButtonRow, {
            children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              type: "button",
              disabled: loading,
              onClick: onClose,
              fill: "outline",
              children: "Close"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              type: "submit",
              disabled: !isDirty || loading,
              children: loading ? 'Saving...' : 'Save changes'
            })]
          })]
        });
      }
    }, JSON.stringify(defaultValues))
  });
}

const getStyles = () => ({
  modal: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    max-width: 560px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/GrafanaRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaRules": () => (/* binding */ GrafanaRules)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _RulesGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesGroup.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _div, _p;












const GrafanaRules = ({
  namespaces,
  expandAll
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__.useQueryParams)();
  const {
    loading
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.promRules[_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME] || _utils_redux__WEBPACK_IMPORTED_MODULE_6__.initialAsyncRequestState);
  const wantsGroupedView = queryParams['view'] === 'grouped';
  const namespacesFormat = wantsGroupedView ? namespaces : (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_8__.flattenGrafanaManagedRules)(namespaces);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("section", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: styles.sectionHeader,
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h5", {
        children: "Grafana"
      })), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        className: styles.loader,
        text: "Loading..."
      }) : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {}))]
    }), namespacesFormat === null || namespacesFormat === void 0 ? void 0 : namespacesFormat.map(namespace => namespace.groups.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RulesGroup__WEBPACK_IMPORTED_MODULE_4__.RulesGroup, {
      group: group,
      namespace: namespace,
      expandAll: expandAll
    }, `${namespace.name}-${group.name}`))), (namespacesFormat === null || namespacesFormat === void 0 ? void 0 : namespacesFormat.length) === 0 && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
      children: "No rules found."
    })))]
  });
};

const getStyles = theme => ({
  loader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  sectionHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing.xl};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoRulesSplash": () => (/* binding */ NoRulesSplash)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _EmptyListCTA, _CallToActionCard;






const NoRulesSplash = () => {
  const {
    canCreateGrafanaRules,
    canCreateCloudRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_3__.useRulesAccess)();

  if (canCreateGrafanaRules || canCreateCloudRules) {
    return _EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "You haven`t created any alert rules yet",
      buttonIcon: "bell",
      buttonLink: 'alerting/new',
      buttonTitle: "New alert rule",
      proTip: "you can also create alert rules from existing panels and queries.",
      proTipLink: "https://grafana.com/docs/",
      proTipLinkTitle: "Learn more",
      proTipTarget: "_blank"
    }));
  }

  return _CallToActionCard || (_CallToActionCard = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.CallToActionCard, {
    message: "No rules exist yet.",
    callToActionElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {})
  }));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetails": () => (/* binding */ RuleDetails),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
/* harmony import */ var _RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
/* harmony import */ var _RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
/* harmony import */ var _RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
/* harmony import */ var _RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const RuleDetails = ({
  rule
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const {
    promRule,
    namespace: {
      rulesSource
    }
  } = rule;
  const annotations = Object.entries(rule.annotations).filter(([_, value]) => !!value.trim());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_5__.RuleDetailsActionButtons, {
      rule: rule,
      rulesSource: rulesSource
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.leftSide,
        children: [!!rule.labels && !!Object.keys(rule.labels).length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_4__.DetailsField, {
          label: "Labels",
          horizontal: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, {
            labels: rule.labels
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_8__.RuleDetailsExpression, {
          rulesSource: rulesSource,
          rule: rule,
          annotations: annotations
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_6__.RuleDetailsAnnotations, {
          annotations: annotations
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: styles.rightSide,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_7__.RuleDetailsDataSources, {
          rulesSource: rulesSource,
          rule: rule
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_9__.RuleDetailsMatchingInstances, {
      promRule: promRule
    })]
  });
};
const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
    }
  `,
  leftSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
  `,
  rightSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.breakpoints.up('md')} {
      padding-left: 90px;
      width: 300px;
    }
  `
});

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

/***/ "./public/app/features/alerting/unified/components/rules/RuleListErrors.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListErrors": () => (/* binding */ RuleListErrors)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function RuleListErrors() {
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [closed, setClosed] = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])('grafana.unifiedalerting.hideErrors', false);
  const dataSourceConfigRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.dataSources);
  const promRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const errors = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    var _promRuleRequests$GRA, _rulerRuleRequests$GR;

    const [dataSourceConfigErrors, promRequestErrors, rulerRequestErrors] = [dataSourceConfigRequests, promRuleRequests, rulerRuleRequests].map(requests => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.getRulesDataSources)().reduce((result, dataSource) => {
      var _requests$dataSource$;

      const error = (_requests$dataSource$ = requests[dataSource.name]) === null || _requests$dataSource$ === void 0 ? void 0 : _requests$dataSource$.error;

      if (requests[dataSource.name] && error && !(0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.isRulerNotSupportedResponse)(requests[dataSource.name])) {
        return [...result, {
          dataSource,
          error
        }];
      }

      return result;
    }, []));
    const grafanaPromError = (_promRuleRequests$GRA = promRuleRequests[_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME]) === null || _promRuleRequests$GRA === void 0 ? void 0 : _promRuleRequests$GRA.error;
    const grafanaRulerError = (_rulerRuleRequests$GR = rulerRuleRequests[_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME]) === null || _rulerRuleRequests$GR === void 0 ? void 0 : _rulerRuleRequests$GR.error;
    const result = [];

    if (grafanaPromError) {
      result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Failed to load Grafana rules state: ", grafanaPromError.message || 'Unknown error.']
      }));
    }

    if (grafanaRulerError) {
      result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Failed to load Grafana rules config: ", grafanaRulerError.message || 'Unknown error.']
      }));
    }

    dataSourceConfigErrors.forEach(({
      dataSource,
      error
    }) => {
      result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Failed to load the data source configuration for", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
          href: `datasources/edit/${dataSource.uid}`,
          children: dataSource.name
        }), ": ", error.message || 'Unknown error.']
      }));
    });
    promRequestErrors.forEach(({
      dataSource,
      error
    }) => result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: ["Failed to load rules state from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        href: `datasources/edit/${dataSource.uid}`,
        children: dataSource.name
      }), ":", ' ', error.message || 'Unknown error.']
    })));
    rulerRequestErrors.forEach(({
      dataSource,
      error
    }) => result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: ["Failed to load rules config from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        href: `datasources/edit/${dataSource.uid}`,
        children: dataSource.name
      }), ":", ' ', error.message || 'Unknown error.']
    })));
    return result;
  }, [dataSourceConfigRequests, promRuleRequests, rulerRuleRequests]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [!!errors.length && closed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ErrorSummaryButton, {
      count: errors.length,
      onClick: () => setClosed(closed => !closed)
    }), !!errors.length && !closed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      "data-testid": "cloud-rulessource-errors",
      title: "Errors loading rules",
      severity: "error",
      onRemove: () => setClosed(true),
      children: [expanded && errors.map((item, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: item
      }, idx)), !expanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: errors[0]
        }), errors.length >= 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          className: styles.moreButton,
          fill: "text",
          icon: "angle-right",
          size: "sm",
          onClick: () => setExpanded(true),
          children: [errors.length - 1, " more ", pluralize__WEBPACK_IMPORTED_MODULE_2___default()('error', errors.length - 1)]
        })]
      })]
    })]
  });
}

const ErrorSummaryButton = ({
  count,
  onClick
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: styles.floatRight,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      content: "Show all errors",
      placement: "bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        fill: "text",
        variant: "destructive",
        icon: "exclamation-triangle",
        onClick: onClick,
        children: count > 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [count, " errors"]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: "1 error"
        })
      })
    })
  });
};

const getStyles = theme => ({
  moreButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: 0;
  `,
  floatRight: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListGroupView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListGroupView": () => (/* binding */ RuleListGroupView)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _CloudRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/CloudRules.tsx");
/* harmony import */ var _GrafanaRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/GrafanaRules.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const RuleListGroupView = ({
  namespaces,
  expandAll
}) => {
  const [grafanaNamespaces, cloudNamespaces] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const sorted = namespaces.map(namespace => Object.assign({}, namespace, {
      groups: namespace.groups.sort((a, b) => a.name.localeCompare(b.name))
    })).sort((a, b) => a.name.localeCompare(b.name));
    return [sorted.filter(ns => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulesSource)(ns.rulesSource)), sorted.filter(ns => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isCloudRulesSource)(ns.rulesSource))];
  }, [namespaces]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_3__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_0__.AccessControlAction.AlertingRuleRead],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GrafanaRules__WEBPACK_IMPORTED_MODULE_5__.GrafanaRules, {
        namespaces: grafanaNamespaces,
        expandAll: expandAll
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_3__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_0__.AccessControlAction.AlertingRuleExternalRead],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CloudRules__WEBPACK_IMPORTED_MODULE_4__.CloudRules, {
        namespaces: cloudNamespaces,
        expandAll: expandAll
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListStateSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListStateSection": () => (/* binding */ RuleListStateSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _RulesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const RuleListStateSection = ({
  rules,
  state,
  defaultCollapsed = false
}) => {
  const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultCollapsed);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_4__.CollapseToggle, {
        className: styles.collapseToggle,
        size: "xxl",
        isCollapsed: collapsed,
        onToggle: () => setCollapsed(!collapsed)
      }), (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.alertStateToReadable)(state), " (", rules.length, ")"]
    }), !collapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RulesTable__WEBPACK_IMPORTED_MODULE_5__.RulesTable, {
      className: styles.rulesTable,
      rules: rules,
      showGroupColumn: true
    })]
  });
};

const getStyles = theme => ({
  collapseToggle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    vertical-align: middle;
  `,
  header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(2)};
  `,
  rulesTable: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(3)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListStateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListStateView": () => (/* binding */ RuleListStateView)
/* harmony export */ });
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListStateSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const RuleListStateView = ({
  namespaces
}) => {
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.getFiltersFromUrlParams)((0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_0__.useQueryParams)()[0]);
  const groupedRules = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const result = {
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Firing]: [],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Inactive]: [],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Pending]: []
    };
    namespaces.forEach(namespace => namespace.groups.forEach(group => group.rules.forEach(rule => {
      if (rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_4__.isAlertingRule)(rule.promRule)) {
        result[rule.promRule.state].push(rule);
      }
    })));
    Object.values(result).forEach(rules => rules.sort((a, b) => a.name.localeCompare(b.name)));
    return result;
  }, [namespaces]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [(!filters.alertState || filters.alertState === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Firing) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__.RuleListStateSection, {
      state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Firing,
      rules: groupedRules[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Firing]
    }), (!filters.alertState || filters.alertState === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Pending) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__.RuleListStateSection, {
      state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Pending,
      rules: groupedRules[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Pending]
    }), (!filters.alertState || filters.alertState === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Inactive) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__.RuleListStateSection, {
      defaultCollapsed: filters.alertState !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Inactive,
      state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Inactive,
      rules: groupedRules[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromAlertingRuleState.Inactive]
    })]
  });
};

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

/***/ "./public/app/features/alerting/unified/components/rules/RuleStats.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleStats": () => (/* binding */ RuleStats)
/* harmony export */ });
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _StateColoredText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/StateColoredText.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _span2;









const emptyStats = {
  total: 0,
  recording: 0,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Firing]: 0,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Pending]: 0,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Inactive]: 0,
  error: 0
};
const RuleStats = ({
  showInactive,
  showRecording,
  group,
  namespaces
}) => {
  const calculated = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const stats = Object.assign({}, emptyStats);

    const calcRule = rule => {
      var _rule$promRule, _rule$promRule2;

      if (rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isAlertingRule)(rule.promRule)) {
        stats[rule.promRule.state] += 1;
      }

      if (((_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.health) === 'err' || ((_rule$promRule2 = rule.promRule) === null || _rule$promRule2 === void 0 ? void 0 : _rule$promRule2.health) === 'error') {
        stats.error += 1;
      }

      if (rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isRecordingRule)(rule.promRule) || rule.rulerRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isRecordingRulerRule)(rule.rulerRule)) {
        stats.recording += 1;
      }

      stats.total += 1;
    };

    if (group) {
      group.rules.forEach(calcRule);
    }

    if (namespaces) {
      namespaces.forEach(namespace => namespace.groups.forEach(group => group.rules.forEach(calcRule)));
    }

    return stats;
  }, [group, namespaces]);
  const statsComponents = [];

  if (calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Firing]) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Firing,
      children: [calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Firing], " firing"]
    }, "firing"));
  }

  if (calculated.error) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Firing,
      children: [calculated.error, " errors"]
    }, "errors"));
  }

  if (calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Pending]) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Pending,
      children: [calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Pending], " pending"]
    }, "pending"));
  }

  if (showInactive && calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Inactive]) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: "neutral",
      children: [calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.PromAlertingRuleState.Inactive], " normal"]
    }, "inactive"));
  }

  if (showRecording && calculated.recording) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: "neutral",
      children: [calculated.recording, " recording"]
    }, "recording"));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
      children: [calculated.total, " ", pluralize__WEBPACK_IMPORTED_MODULE_1___default()('rule', calculated.total)]
    }), !!statsComponents.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: ": "
      })), statsComponents.reduce((prev, curr, idx) => prev.length ? [prev, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: _span2 || (_span2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: ", "
        }))
      }, idx), curr] : [curr], [])]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/0/cache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Label, _Label2, _Label3, _Label4;













const ViewOptions = [{
  icon: 'list-ul',
  label: 'List',
  value: 'list'
}, {
  icon: 'folder',
  label: 'Grouped',
  value: 'grouped'
}, {
  icon: 'heart-rate',
  label: 'State',
  value: 'state'
}];
const RuleTypeOptions = [{
  label: 'Alert ',
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromRuleType.Alerting
}, {
  label: 'Recording ',
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromRuleType.Recording
}];

const RulesFilter = () => {
  var _queryParams$view;

  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_5__.useQueryParams)(); // This key is used to force a rerender on the inputs when the filters are cleared

  const [filterKey, setFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.floor(Math.random() * 100));
  const dataSourceKey = `dataSource-${filterKey}`;
  const queryStringKey = `queryString-${filterKey}`;
  const {
    dataSource,
    alertState,
    queryString,
    ruleType
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.getFiltersFromUrlParams)(queryParams);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);
  const stateOptions = Object.entries(app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState).map(([key, value]) => ({
    label: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_8__.alertStateToReadable)(value),
    value
  }));

  const handleDataSourceChange = dataSourceValue => {
    setQueryParams({
      dataSource: dataSourceValue.name
    });
  };

  const clearDataSource = () => {
    setQueryParams({
      dataSource: null
    });
  };

  const handleQueryStringChange = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(e => {
    const target = e.target;
    setQueryParams({
      queryString: target.value || null
    });
  }, 600);

  const handleAlertStateChange = value => {
    setQueryParams({
      alertState: value
    });
  };

  const handleViewChange = view => {
    setQueryParams({
      view
    });
  };

  const handleRuleTypeChange = ruleType => {
    setQueryParams({
      ruleType
    });
  };

  const handleClearFiltersClick = () => {
    setQueryParams({
      alertState: null,
      queryString: null,
      dataSource: null,
      ruleType: null
    });
    setTimeout(() => setFilterKey(filterKey + 1), 100);
  };

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      className: styles.inputWidth,
      label: "Search by data source",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.DataSourcePicker, {
        alerting: true,
        noDefault: true,
        placeholder: "All data sources",
        current: dataSource,
        onChange: handleDataSourceChange,
        onClear: clearDataSource
      }, dataSourceKey)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.flexRow, styles.spaceBetween),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          className: styles.rowChild,
          label: _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_9__.Stack, {
              gap: 0.5,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                children: "Search by label"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  children: ["Filter rules and alerts using label querying, ex:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("code", {
                    children: `{severity="critical", instance=~"cluster-us-.+"}`
                  })]
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  name: "info-circle",
                  size: "sm"
                })
              })]
            })
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            className: styles.inputWidth,
            prefix: searchIcon,
            onChange: handleQueryStringChange,
            defaultValue: queryString,
            placeholder: "Search",
            "data-testid": "search-query-input"
          }, queryStringKey)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label2 || (_Label2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
            children: "State"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
            options: stateOptions,
            value: alertState,
            onChange: handleAlertStateChange
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label3 || (_Label3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
            children: "Rule type"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
            options: RuleTypeOptions,
            value: ruleType,
            onChange: handleRuleTypeChange
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label4 || (_Label4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
            children: "View as"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
            options: ViewOptions,
            value: String((_queryParams$view = queryParams['view']) !== null && _queryParams$view !== void 0 ? _queryParams$view : ViewOptions[0].value),
            onChange: handleViewChange
          })]
        })]
      }), (dataSource || alertState || queryString || ruleType) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: styles.flexRow,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          className: styles.clearButton,
          fullWidth: false,
          icon: "times",
          variant: "secondary",
          onClick: handleClearFiltersClick,
          children: "Clear filters"
        })
      })]
    })]
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      flex-direction: column;
      padding-bottom: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.sm};
    `,
    inputWidth: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      width: 340px;
      flex-grow: 0;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,
    spaceBetween: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      justify-content: space-between;
    `,
    rowChild: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin: 0 ${theme.spacing.sm} 0 0;
    `,
    clearButton: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin-top: ${theme.spacing.sm};
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RulesFilter);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesGroup": () => (/* binding */ RulesGroup),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/kbn.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useFolder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _RuleLocation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
/* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _EditCloudGroupModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/EditCloudGroupModal.tsx");
/* harmony import */ var _RulesTable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
/* harmony import */ var _RuleStats__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleStats.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _HorizontalGroup, _Badge, _br, _br2;























const RulesGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.memo(({
  group,
  namespace,
  expandAll
}) => {
  var _group$rules$;

  const {
    rulesSource
  } = namespace;
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const [isEditingGroup, setIsEditingGroup] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [isDeletingGroup, setIsDeletingGroup] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(!expandAll);
  const canEditCloudRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.AlertingRuleExternalWrite);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    setIsCollapsed(!expandAll);
  }, [expandAll]);
  const hasRuler = (0,_hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_9__.useHasRuler)();
  const rulerRule = (_group$rules$ = group.rules[0]) === null || _group$rules$ === void 0 ? void 0 : _group$rules$.rulerRule;
  const folderUID = rulerRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_12__.isGrafanaRulerRule)(rulerRule) && rulerRule.grafana_alert.namespace_uid || undefined;
  const {
    folder
  } = (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_8__.useFolder)(folderUID); // group "is deleting" if rules source has ruler, but this group has no rules that are in ruler

  const isDeleting = hasRuler(rulesSource) && !group.rules.find(rule => !!rule.rulerRule);
  const isFederated = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_12__.isFederatedRuleGroup)(group);

  const deleteGroup = () => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.deleteRulesGroupAction)(namespace, group));
    setIsDeletingGroup(false);
  };

  const actionIcons = []; // for grafana, link to folder views

  if (isDeleting) {
    actionIcons.push(_HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}), "deleting"]
    }, "is-deleting")));
  } else if (rulesSource === _utils_datasource__WEBPACK_IMPORTED_MODULE_11__.GRAFANA_RULES_SOURCE_NAME) {
    if (folderUID) {
      const baseUrl = `/dashboards/f/${folderUID}/${app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_3__["default"].slugifyForUrl(namespace.name)}`;

      if (folder !== null && folder !== void 0 && folder.canSave) {
        actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
          "aria-label": "edit folder",
          icon: "pen",
          tooltip: "edit folder",
          to: baseUrl + '/settings',
          target: "__blank"
        }, "edit"));
      }

      if (folder !== null && folder !== void 0 && folder.canAdmin) {
        actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
          "aria-label": "manage permissions",
          icon: "lock",
          tooltip: "manage permissions",
          to: baseUrl + '/permissions',
          target: "__blank"
        }, "manage-perms"));
      }
    }
  } else if (canEditCloudRules && hasRuler(rulesSource)) {
    if (!isFederated) {
      actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
        "aria-label": "edit rule group",
        "data-testid": "edit-group",
        icon: "pen",
        tooltip: "edit rule group",
        onClick: () => setIsEditingGroup(true)
      }, "edit"));
    }

    actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
      "aria-label": "delete rule group",
      "data-testid": "delete-group",
      icon: "trash-alt",
      tooltip: "delete rule group",
      onClick: () => setIsDeletingGroup(true)
    }, "delete-group"));
  } // ungrouped rules are rules that are in the "default" group name


  const isUngrouped = group.name === 'default';
  const groupName = isUngrouped ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_14__.RuleLocation, {
    namespace: namespace.name
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_14__.RuleLocation, {
    namespace: namespace.name,
    group: group.name
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": "rule-group",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: styles.header,
      "data-testid": "rule-group-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_13__.CollapseToggle, {
        className: styles.collapseToggle,
        isCollapsed: isCollapsed,
        onToggle: setIsCollapsed,
        "data-testid": "group-collapse-toggle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: isCollapsed ? 'folder' : 'folder-open'
      }), (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_11__.isCloudRulesSource)(rulesSource) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
        content: rulesSource.name,
        placement: "top",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("img", {
          alt: rulesSource.meta.name,
          className: styles.dataSourceIcon,
          src: rulesSource.meta.info.logos.small
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("h6", {
        className: styles.heading,
        children: [isFederated && (_Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
          color: "purple",
          text: "Federated"
        }))), " ", groupName]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: styles.spacer
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: styles.headerStats,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_RuleStats__WEBPACK_IMPORTED_MODULE_18__.RuleStats, {
          showInactive: false,
          group: group
        })
      }), !!actionIcons.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
          className: styles.actionsSeparator,
          children: "|"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
          className: styles.actionIcons,
          children: actionIcons
        })]
      })]
    }), !isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_RulesTable__WEBPACK_IMPORTED_MODULE_17__.RulesTable, {
      showSummaryColumn: true,
      className: styles.rulesTable,
      showGuidelines: true,
      rules: group.rules
    }), isEditingGroup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_EditCloudGroupModal__WEBPACK_IMPORTED_MODULE_16__.EditCloudGroupModal, {
      group: group,
      namespace: namespace,
      onClose: () => setIsEditingGroup(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
      isOpen: isDeletingGroup,
      title: "Delete group",
      body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        children: ["Deleting this group will permanently remove the group", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("br", {})), "and ", group.rules.length, " alert ", pluralize__WEBPACK_IMPORTED_MODULE_5___default()('rule', group.rules.length), " belonging to it.", _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("br", {})), "Are you sure you want to delete this group?"]
      }),
      onConfirm: deleteGroup,
      onDismiss: () => setIsDeletingGroup(false),
      confirmText: "Delete"
    })]
  });
});
RulesGroup.displayName = 'RulesGroup';
const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & + & {
      margin-top: ${theme.spacing(2)};
    }
  `,
  header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} 0;
    background-color: ${theme.colors.background.secondary};
    flex-wrap: wrap;
  `,
  headerStats: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    span {
      vertical-align: middle;
    }

    ${theme.breakpoints.down('sm')} {
      order: 2;
      width: 100%;
      padding-left: ${theme.spacing(1)};
    }
  `,
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
    margin-bottom: 0;
  `,
  spacer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
  `,
  collapseToggle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background: none;
    border: none;
    margin-top: -${theme.spacing(1)};
    margin-bottom: -${theme.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,
  dataSourceIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: ${theme.spacing(2)};
    height: ${theme.spacing(2)};
    margin-left: ${theme.spacing(2)};
  `,
  dataSourceOrigin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: 1em;
    color: ${theme.colors.text.disabled};
  `,
  actionsSeparator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: 0 ${theme.spacing(2)};
  `,
  actionIcons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * + * {
      margin-left: ${theme.spacing(0.5)};
    }
  `,
  rulesTable: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(3)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesTable": () => (/* binding */ RulesTable),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _RuleDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetails.tsx");
/* harmony import */ var _hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _RuleState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
/* harmony import */ var _RuleHealth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
/* harmony import */ var _RuleLocation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const RulesTable = ({
  rules,
  className,
  showGuidelines = false,
  emptyMessage = 'No rules found.',
  showGroupColumn = false,
  showSummaryColumn = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.useStyles2)(getStyles);
  const wrapperClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.wrapper, className, {
    [styles.wrapperMargin]: showGuidelines
  });
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const seenKeys = [];
    return rules.map((rule, ruleIdx) => {
      var _rule$promRule;

      let key = JSON.stringify([(_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.type, rule.labels, rule.query, rule.name, rule.annotations]);

      if (seenKeys.includes(key)) {
        key += `-${ruleIdx}`;
      }

      seenKeys.push(key);
      return {
        id: key,
        data: rule
      };
    });
  }, [rules]);
  const columns = useColumns(showSummaryColumn, showGroupColumn);

  if (!rules.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(wrapperClass, styles.emptyMessage),
      children: emptyMessage
    });
  }

  const TableComponent = showGuidelines ? _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_9__.DynamicTableWithGuidelines : _DynamicTable__WEBPACK_IMPORTED_MODULE_8__.DynamicTable;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: wrapperClass,
    "data-testid": "rules-table",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(TableComponent, {
      cols: columns,
      isExpandable: true,
      items: items,
      renderExpandedContent: ({
        data: rule
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleDetails__WEBPACK_IMPORTED_MODULE_3__.RuleDetails, {
        rule: rule
      })
    })
  });
};
const getStyles = theme => ({
  wrapperMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.breakpoints.up('md')} {
      margin-left: 36px;
    }
  `,
  emptyMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    padding: ${theme.spacing(1)};
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    width: auto;
    background-color: ${theme.colors.background.secondary};
    border-radius: ${theme.shape.borderRadius()};
  `
});

function useColumns(showSummaryColumn, showGroupColumn) {
  const hasRuler = (0,_hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_4__.useHasRuler)();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const columns = [{
      id: 'state',
      label: 'State',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: rule
      }) => {
        const {
          namespace
        } = rule;
        const {
          rulesSource
        } = namespace;
        const {
          promRule,
          rulerRule
        } = rule;
        const isDeleting = !!(hasRuler(rulesSource) && promRule && !rulerRule);
        const isCreating = !!(hasRuler(rulesSource) && rulerRule && !promRule);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleState__WEBPACK_IMPORTED_MODULE_6__.RuleState, {
          rule: rule,
          isDeleting: isDeleting,
          isCreating: isCreating
        });
      },
      size: '165px'
    }, {
      id: 'name',
      label: 'Name',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: rule
      }) => rule.name,
      size: 5
    }, {
      id: 'health',
      label: 'Health',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: {
          promRule
        }
      }) => promRule ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleHealth__WEBPACK_IMPORTED_MODULE_7__.RuleHealth, {
        rule: promRule
      }) : null,
      size: '75px'
    }];

    if (showSummaryColumn) {
      columns.push({
        id: 'summary',
        label: 'Summary',
        // eslint-disable-next-line react/display-name
        renderCell: ({
          data: rule
        }) => {
          var _rule$annotations$Ann;

          return (_rule$annotations$Ann = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_5__.Annotation.summary]) !== null && _rule$annotations$Ann !== void 0 ? _rule$annotations$Ann : '';
        },
        size: 5
      });
    }

    if (showGroupColumn) {
      columns.push({
        id: 'group',
        label: 'Group',
        // eslint-disable-next-line react/display-name
        renderCell: ({
          data: rule
        }) => {
          const {
            namespace,
            group
          } = rule; // ungrouped rules are rules that are in the "default" group name

          const isUngrouped = group.name === 'default';
          const groupName = isUngrouped ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_10__.RuleLocation, {
            namespace: namespace.name
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_10__.RuleLocation, {
            namespace: namespace.name,
            group: group.name
          });
          return groupName;
        },
        size: 5
      });
    }

    return columns;
  }, [hasRuler, showSummaryColumn, showGroupColumn]);
}

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

/***/ "./public/app/features/alerting/unified/hooks/useFilteredRules.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFilteredRules": () => (/* binding */ useFilteredRules)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");








const useFilteredRules = namespaces => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_4__.useQueryParams)();
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.getFiltersFromUrlParams)(queryParams);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const filteredNamespaces = namespaces // Filter by data source
    // TODO: filter by multiple data sources for grafana-managed alerts
    .filter(({
      rulesSource
    }) => filters.dataSource && (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isCloudRulesSource)(rulesSource) ? rulesSource.name === filters.dataSource : true) // If a namespace and group have rules that match the rules filters then keep them.
    .reduce(reduceNamespaces(filters), []);
    return filteredNamespaces;
  }, [namespaces, filters]);
};

const reduceNamespaces = filters => {
  return (namespaceAcc, namespace) => {
    const groups = namespace.groups.reduce(reduceGroups(filters), []);

    if (groups.length) {
      namespaceAcc.push(Object.assign({}, namespace, {
        groups
      }));
    }

    return namespaceAcc;
  };
}; // Reduces groups to only groups that have rules matching the filters


const reduceGroups = filters => {
  return (groupAcc, group) => {
    const rules = group.rules.filter(rule => {
      var _rule$promRule;

      if (filters.ruleType && filters.ruleType !== ((_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.type)) {
        return false;
      }

      if (filters.dataSource && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule.rulerRule) && !isQueryingDataSource(rule.rulerRule, filters)) {
        return false;
      } // Query strings can match alert name, label keys, and label values


      if (filters.queryString) {
        var _rule$name;

        const normalizedQueryString = filters.queryString.toLocaleLowerCase();
        const doesNameContainsQueryString = (_rule$name = rule.name) === null || _rule$name === void 0 ? void 0 : _rule$name.toLocaleLowerCase().includes(normalizedQueryString);
        const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.parseMatchers)(filters.queryString);
        const doRuleLabelsMatchQuery = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.labelsMatchMatchers)(rule.labels, matchers);
        const doAlertsContainMatchingLabels = rule.promRule && rule.promRule.type === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_5__.PromRuleType.Alerting && rule.promRule.alerts && rule.promRule.alerts.some(alert => (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.labelsMatchMatchers)(alert.labels, matchers));

        if (!(doesNameContainsQueryString || doRuleLabelsMatchQuery || doAlertsContainMatchingLabels)) {
          return false;
        }
      }

      if (filters.alertState && !(rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule.promRule) && rule.promRule.state === filters.alertState)) {
        return false;
      }

      return true;
    }); // Add rules to the group that match the rule list filters

    if (rules.length) {
      groupAcc.push(Object.assign({}, group, {
        rules
      }));
    }

    return groupAcc;
  };
};

const isQueryingDataSource = (rulerRule, filter) => {
  if (!filter.dataSource) {
    return true;
  }

  return !!rulerRule.grafana_alert.data.find(query => {
    if (!query.datasourceUid) {
      return false;
    }

    const ds = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    return (ds === null || ds === void 0 ? void 0 : ds.name) === filter.dataSource;
  });
};

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

/***/ "./public/app/features/alerting/unified/hooks/useHasRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHasRuler": () => (/* binding */ useHasRuler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");


 // datasource has ruler if it's grafana managed or if we're able to load rules from it

function useHasRuler() {
  const rulerRules = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__.useUnifiedAlertingSelector)(state => state.rulerRules);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(rulesSource => {
    var _rulerRules$rulesSour;

    const rulesSourceName = typeof rulesSource === 'string' ? rulesSource : rulesSource.name;
    return rulesSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_1__.GRAFANA_RULES_SOURCE_NAME || !!((_rulerRules$rulesSour = rulerRules[rulesSourceName]) !== null && _rulerRules$rulesSour !== void 0 && _rulerRules$rulesSour.result);
  }, [rulerRules]);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURYO0FBQzZCO0FBQzNCa1gsSUFBQUEsVUFBVSxFQUFFLElBRmQ7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBQ04sd0JBQWtCO0FBQ2hCblgsUUFBQUEsT0FBTyxFQUFFLGtCQURPO0FBRWhCb1gsUUFBQUEsS0FBSyxFQUFFO0FBRlM7QUFEWjtBQUhWLEdBVmUsQ0FwQ21CO0FBeURwQ2dCLEVBQUFBLE1BQU0sRUFBRTtBQUNOcFksSUFBQUEsT0FBTyxFQUFFLGFBREg7QUFFTm9YLElBQUFBLEtBQUssRUFBRTtBQUZELEdBekQ0QjtBQTZEcENPLEVBQUFBLE1BQU0sRUFBRSxxQ0E3RDRCO0FBOERwQ0MsRUFBQUEsUUFBUSxFQUFFLElBQUk3a0IsTUFBSixDQUFZLDBEQUF5RGdsQixTQUFTLENBQUN6RCxJQUFWLENBQWUsR0FBZixDQUFvQixNQUF6RixFQUFnRyxHQUFoRyxDQTlEMEI7QUErRHBDK0MsRUFBQUEsV0FBVyxFQUFFO0FBL0R1QixDQUEvQjtBQWtFUCxpRUFBZWMsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9BbGVydEhvd1RvTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL0FsZXJ0UnVsZUl0ZW0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL0FsZXJ0UnVsZUxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvVW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL1J1bGVMaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0F1dGhvcml6ZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0R5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvRXhwcmVzc2lvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL1J1bGVMb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL1N0YXRlQ29sb3JlZFRleHQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FjdGlvbkljb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9BbGVydEluc3RhbmNlU3RhdGVGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9DbG91ZFJ1bGVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvRWRpdENsb3VkR3JvdXBNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0dyYWZhbmFSdWxlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL05vUnVsZXNDVEEudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlscy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQW5ub3RhdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0RhdGFTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNFeHByZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVIZWFsdGgudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlTGlzdEVycm9ycy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVMaXN0R3JvdXBWaWV3LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RTdGF0ZVNlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlTGlzdFN0YXRlVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVTdGF0ZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVTdGF0cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVzRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZXNHcm91cC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9TdGF0ZUhpc3RvcnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUZpbHRlcmVkUnVsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VGb2xkZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VIYXNSdWxlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUlzUnVsZUVkaXRhYmxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlU3RhdGVIaXN0b3J5TW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvYWNjZXNzQ29udHJvbEhvb2tzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9sb2tpL3N5bnRheC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9wcm9tcWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNsZWFuVXBBY3Rpb24sIFN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi9hY3Rpb25zL2NsZWFuVXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xlYW51cDxUPihzdGF0ZVNlbGVjdG9yOiBTdGF0ZVNlbGVjdG9yPFQ+KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgLy9iaXQgb2YgYSBoYWNrIHRvIHVuYnVyZGVuIHVzZXIgZnJvbSBoYXZpbmcgdG8gd3JhcCBzdGF0ZVNlbGNldG9yIGluIGEgdXNlQ2FsbGJhY2suIE90aGVyd2lzZSBjbGVhbnVwIHdvdWxkIGhhcHBlbiBvbiBldmVyeSByZW5kZXJcbiAgY29uc3Qgc2VsZWN0b3JSZWYgPSB1c2VSZWYoc3RhdGVTZWxlY3Rvcik7XG4gIHNlbGVjdG9yUmVmLmN1cnJlbnQgPSBzdGF0ZVNlbGVjdG9yO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChjbGVhblVwQWN0aW9uKHsgc3RhdGVTZWxlY3Rvcjogc2VsZWN0b3JSZWYuY3VycmVudCB9KSk7XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG59XG4iLCJpbXBvcnQgeyBNb2RhbCwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRIb3dUb01vZGFsUHJvcHMge1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBbGVydEhvd1RvTW9kYWwoeyBvbkRpc21pc3MgfTogQWxlcnRIb3dUb01vZGFsUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHRpdGxlPVwiQWRkaW5nIGFuIEFsZXJ0XCIgaXNPcGVuIG9uRGlzbWlzcz17b25EaXNtaXNzfSBvbkNsaWNrQmFja2Ryb3A9e29uRGlzbWlzc30+XG4gICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwic21cIj5cbiAgICAgICAgPGltZyBzcmM9XCJwdWJsaWMvaW1nL2FsZXJ0X2hvd3RvX25ldy5wbmdcIiBhbHQ9XCJsaW5rIHRvIGhvdyB0byBhbGVydCBpbWFnZVwiIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFsZXJ0cyBhcmUgYWRkZWQgYW5kIGNvbmZpZ3VyZWQgaW4gdGhlIEFsZXJ0IHRhYiBvZiBhbnkgZGFzaGJvYXJkIGdyYXBoIHBhbmVsLCBsZXR0aW5nIHlvdSBidWlsZCBhbmQgdmlzdWFsaXplXG4gICAgICAgICAgYW4gYWxlcnQgdXNpbmcgZXhpc3RpbmcgcXVlcmllcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5SZW1lbWJlciB0byBzYXZlIHRoZSBkYXNoYm9hcmQgdG8gcGVyc2lzdCB5b3VyIGFsZXJ0IHJ1bGUgY2hhbmdlcy48L3A+XG4gICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0Jztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBIaWdobGlnaHRlciBmcm9tICdyZWFjdC1oaWdobGlnaHQtd29yZHMnO1xuaW1wb3J0IHsgSWNvbiwgSWNvbk5hbWUsIEJ1dHRvbiwgTGlua0J1dHRvbiwgQ2FyZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0UnVsZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGU6IEFsZXJ0UnVsZTtcbiAgc2VhcmNoOiBzdHJpbmc7XG4gIG9uVG9nZ2xlUGF1c2U6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFsZXJ0UnVsZUl0ZW0gPSAoeyBydWxlLCBzZWFyY2gsIG9uVG9nZ2xlUGF1c2UgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgcnVsZVVybCA9IGAke3J1bGUudXJsfT9lZGl0UGFuZWw9JHtydWxlLnBhbmVsSWR9JnRhYj1hbGVydGA7XG4gIGNvbnN0IHJlbmRlclRleHQgPSB1c2VDYWxsYmFjayhcbiAgICAodGV4dCkgPT4gKFxuICAgICAgPEhpZ2hsaWdodGVyXG4gICAgICAgIGtleT17dGV4dH1cbiAgICAgICAgaGlnaGxpZ2h0Q2xhc3NOYW1lPVwiaGlnaGxpZ2h0LXNlYXJjaC1tYXRjaFwiXG4gICAgICAgIHRleHRUb0hpZ2hsaWdodD17dGV4dH1cbiAgICAgICAgc2VhcmNoV29yZHM9e1tzZWFyY2hdfVxuICAgICAgLz5cbiAgICApLFxuICAgIFtzZWFyY2hdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkLkhlYWRpbmc+e3JlbmRlclRleHQocnVsZS5uYW1lKX08L0NhcmQuSGVhZGluZz5cbiAgICAgIDxDYXJkLkZpZ3VyZT5cbiAgICAgICAgPEljb24gc2l6ZT1cInhsXCIgbmFtZT17cnVsZS5zdGF0ZUljb24gYXMgSWNvbk5hbWV9IGNsYXNzTmFtZT17YGFsZXJ0LXJ1bGUtaXRlbV9faWNvbiAke3J1bGUuc3RhdGVDbGFzc31gfSAvPlxuICAgICAgPC9DYXJkLkZpZ3VyZT5cbiAgICAgIDxDYXJkLk1ldGE+XG4gICAgICAgIDxzcGFuIGtleT1cInN0YXRlXCI+XG4gICAgICAgICAgPHNwYW4ga2V5PVwidGV4dFwiIGNsYXNzTmFtZT17YCR7cnVsZS5zdGF0ZUNsYXNzfWB9PlxuICAgICAgICAgICAge3JlbmRlclRleHQocnVsZS5zdGF0ZVRleHQpfXsnICd9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIGZvciB7cnVsZS5zdGF0ZUFnZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7cnVsZS5pbmZvID8gcmVuZGVyVGV4dChydWxlLmluZm8pIDogbnVsbH1cbiAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgPENhcmQuQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT1cInBsYXlcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGljb249e3J1bGUuc3RhdGUgPT09ICdwYXVzZWQnID8gJ3BsYXknIDogJ3BhdXNlJ31cbiAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZVBhdXNlfVxuICAgICAgICA+XG4gICAgICAgICAge3J1bGUuc3RhdGUgPT09ICdwYXVzZWQnID8gJ1Jlc3VtZScgOiAnUGF1c2UnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPExpbmtCdXR0b24ga2V5PVwiZWRpdFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBocmVmPXtydWxlVXJsfSBpY29uPVwiY29nXCI+XG4gICAgICAgICAgRWRpdCBhbGVydFxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8L0NhcmQuQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydFJ1bGVJdGVtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCBBbGVydFJ1bGVJdGVtIGZyb20gJy4vQWxlcnRSdWxlSXRlbSc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgQWxlcnRSdWxlLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGdldEFsZXJ0UnVsZXNBc3luYywgdG9nZ2xlUGF1c2VBbGVydFJ1bGUgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxlcnRSdWxlSXRlbXMsIGdldFNlYXJjaFF1ZXJ5IH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgc2V0U2VhcmNoUXVlcnkgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7IEJ1dHRvbiwgRmlsdGVySW5wdXQsIExpbmtCdXR0b24sIFNlbGVjdCwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBTaG93TW9kYWxSZWFjdEV2ZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvZXZlbnRzJztcbmltcG9ydCB7IEFsZXJ0SG93VG9Nb2RhbCB9IGZyb20gJy4vQWxlcnRIb3dUb01vZGFsJztcbmltcG9ydCB7IFVuaWZpZWRBbGVydGluZ1Byb21vdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9VbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24nO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdhbGVydC1saXN0JyksXG4gICAgYWxlcnRSdWxlczogZ2V0QWxlcnRSdWxlSXRlbXMoc3RhdGUpLFxuICAgIHNlYXJjaDogZ2V0U2VhcmNoUXVlcnkoc3RhdGUuYWxlcnRSdWxlcyksXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5hbGVydFJ1bGVzLmlzTG9hZGluZyxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRBbGVydFJ1bGVzQXN5bmMsXG4gIHNldFNlYXJjaFF1ZXJ5LFxuICB0b2dnbGVQYXVzZUFsZXJ0UnVsZSxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7fSwgeyBzdGF0ZTogc3RyaW5nIH0+IHt9XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNsYXNzIEFsZXJ0UnVsZUxpc3RVbmNvbm5lY3RlZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGVGaWx0ZXJzID0gW1xuICAgIHsgbGFiZWw6ICdBbGwnLCB2YWx1ZTogJ2FsbCcgfSxcbiAgICB7IGxhYmVsOiAnT0snLCB2YWx1ZTogJ29rJyB9LFxuICAgIHsgbGFiZWw6ICdOb3QgT0snLCB2YWx1ZTogJ25vdF9vaycgfSxcbiAgICB7IGxhYmVsOiAnQWxlcnRpbmcnLCB2YWx1ZTogJ2FsZXJ0aW5nJyB9LFxuICAgIHsgbGFiZWw6ICdObyBkYXRhJywgdmFsdWU6ICdub19kYXRhJyB9LFxuICAgIHsgbGFiZWw6ICdQYXVzZWQnLCB2YWx1ZTogJ3BhdXNlZCcgfSxcbiAgICB7IGxhYmVsOiAnUGVuZGluZycsIHZhbHVlOiAncGVuZGluZycgfSxcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoUnVsZXMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5xdWVyeVBhcmFtcy5zdGF0ZSAhPT0gdGhpcy5wcm9wcy5xdWVyeVBhcmFtcy5zdGF0ZSkge1xuICAgICAgdGhpcy5mZXRjaFJ1bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hSdWxlcygpIHtcbiAgICBhd2FpdCB0aGlzLnByb3BzLmdldEFsZXJ0UnVsZXNBc3luYyh7IHN0YXRlOiB0aGlzLmdldFN0YXRlRmlsdGVyKCkgfSk7XG4gIH1cblxuICBnZXRTdGF0ZUZpbHRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zLnN0YXRlID8/ICdhbGwnO1xuICB9XG5cbiAgb25TdGF0ZUZpbHRlckNoYW5nZWQgPSAob3B0aW9uOiBTZWxlY3RhYmxlVmFsdWUpID0+IHtcbiAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7IHN0YXRlOiBvcHRpb24udmFsdWUgfSk7XG4gIH07XG5cbiAgb25PcGVuSG93VG8gPSAoKSA9PiB7XG4gICAgYXBwRXZlbnRzLnB1Ymxpc2gobmV3IFNob3dNb2RhbFJlYWN0RXZlbnQoeyBjb21wb25lbnQ6IEFsZXJ0SG93VG9Nb2RhbCB9KSk7XG4gIH07XG5cbiAgb25TZWFyY2hRdWVyeUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRTZWFyY2hRdWVyeSh2YWx1ZSk7XG4gIH07XG5cbiAgb25Ub2dnbGVQYXVzZSA9IChydWxlOiBBbGVydFJ1bGUpID0+IHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZVBhdXNlQWxlcnRSdWxlKHJ1bGUuaWQsIHsgcGF1c2VkOiBydWxlLnN0YXRlICE9PSAncGF1c2VkJyB9KTtcbiAgfTtcblxuICBhbGVydFN0YXRlRmlsdGVyT3B0aW9uID0gKHsgdGV4dCwgdmFsdWUgfTogeyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17dmFsdWV9IHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZNb2RlbCwgYWxlcnRSdWxlcywgc2VhcmNoLCBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxuICAgICAgICAgICAgICA8RmlsdGVySW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYWxlcnRzXCIgdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e3RoaXMub25TZWFyY2hRdWVyeUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsXCIgaHRtbEZvcj1cImFsZXJ0LXN0YXRlLWZpbHRlclwiPlxuICAgICAgICAgICAgICAgIFN0YXRlc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMTNcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPXsnYWxlcnQtc3RhdGUtZmlsdGVyJ31cbiAgICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGVGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TdGF0ZUZpbHRlckNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTdGF0ZUZpbHRlcigpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhcl9fc3BhY2VyXCIgLz5cbiAgICAgICAgICAgIHtjb25maWcudW5pZmllZEFsZXJ0aW5nRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaHJlZj1cImFsZXJ0aW5nL25nL25ld1wiPlxuICAgICAgICAgICAgICAgIEFkZCBORyBBbGVydFxuICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5vbk9wZW5Ib3dUb30+XG4gICAgICAgICAgICAgIEhvdyB0byBhZGQgYW4gYWxlcnRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24gLz5cbiAgICAgICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwibm9uZVwiPlxuICAgICAgICAgICAge2FsZXJ0UnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFsZXJ0UnVsZUl0ZW1cbiAgICAgICAgICAgICAgICAgIHJ1bGU9e3J1bGUgYXMgQWxlcnRSdWxlfVxuICAgICAgICAgICAgICAgICAga2V5PXtydWxlLmlkfVxuICAgICAgICAgICAgICAgICAgc2VhcmNoPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgICBvblRvZ2dsZVBhdXNlPXsoKSA9PiB0aGlzLm9uVG9nZ2xlUGF1c2UocnVsZSBhcyBBbGVydFJ1bGUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihBbGVydFJ1bGVMaXN0VW5jb25uZWN0ZWQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX0tFWSA9ICdncmFmYW5hLmxlZ2FjeWFsZXJ0aW5nLnVuaWZpZWRhbGVydGluZ3Byb21vJztcblxuY29uc3QgVW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uOiBGQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uLCBzZXRTaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uXSA9IHVzZUxvY2FsU3RvcmFnZTxib29sZWFuPihcbiAgICBMT0NBTF9TVE9SQUdFX0tFWSxcbiAgICB0cnVlXG4gICk7XG5cbiAgaWYgKCFzaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBbGVydFxuICAgICAgc2V2ZXJpdHk9XCJpbmZvXCJcbiAgICAgIHRpdGxlPVwiVHJ5IG91dCB0aGUgR3JhZmFuYSA4IGFsZXJ0aW5nIVwiXG4gICAgICBvblJlbW92ZT17KCkgPT4gc2V0U2hvd1VuaWZpZWRBbGVydGluZ1Byb21vdGlvbihmYWxzZSl9XG4gICAgPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBhcmUgdXNpbmcgdGhlIGxlZ2FjeSBHcmFmYW5hIGFsZXJ0aW5nLlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgV2hpbGUgd2UgaGF2ZSBubyBwbGFucyBvZiBkZXByZWNhdGluZyBpdCBhbnkgdGltZSBzb29uLCB3ZSBpbnZpdGUgeW91IHRvIGdpdmUgdGhlIGltcHJvdmVkIEdyYWZhbmEgOCBhbGVydGluZyBhXG4gICAgICAgIHRyeS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBTZWV7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbGF0ZXN0L2FsZXJ0aW5nL3VuaWZpZWQtYWxlcnRpbmcvZGlmZmVyZW5jZS1vbGQtbmV3L1wiPlxuICAgICAgICAgIFdoYXTigJlzIE5ldyB3aXRoIEdyYWZhbmEgOCBhbGVydGluZ1xuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgdG8gbGVhcm4gbW9yZSBhYm91dCB3aGF0JmxzcXVvO3MgbmV3IGluIEdyYWZhbmEgOCBhbGVydGluZyBvciBsZWFybnsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9sYXRlc3QvYWxlcnRpbmcvdW5pZmllZC1hbGVydGluZy9vcHQtaW4vXCI+XG4gICAgICAgICAgaG93IHRvIGVuYWJsZSB0aGUgbmV3IEdyYWZhbmEgOCBhbGVydGluZyBmZWF0dXJlXG4gICAgICAgIDwvYT5cbiAgICAgICAgLlxuICAgICAgPC9wPlxuICAgIDwvQWxlcnQ+XG4gICk7XG59O1xuXG5leHBvcnQgeyBVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24gfTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgbG9hZEFsZXJ0UnVsZXMsIGxvYWRlZEFsZXJ0UnVsZXMsIG5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQsIHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBBbGVydFJ1bGVEVE8sIE5vdGlmaWVyRFRPLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiwgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxlcnRSdWxlc0FzeW5jKG9wdGlvbnM6IHsgc3RhdGU6IHN0cmluZyB9KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2gobG9hZEFsZXJ0UnVsZXMoKSk7XG4gICAgY29uc3QgcnVsZXM6IEFsZXJ0UnVsZURUT1tdID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9hbGVydHMnLCBvcHRpb25zKTtcbiAgICBkaXNwYXRjaChsb2FkZWRBbGVydFJ1bGVzKHJ1bGVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQYXVzZUFsZXJ0UnVsZShpZDogbnVtYmVyLCBvcHRpb25zOiB7IHBhdXNlZDogYm9vbGVhbiB9KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoYC9hcGkvYWxlcnRzLyR7aWR9L3BhdXNlYCwgb3B0aW9ucyk7XG4gICAgY29uc3Qgc3RhdGVGaWx0ZXIgPSBsb2NhdGlvblNlcnZpY2UuZ2V0U2VhcmNoT2JqZWN0KCkuc3RhdGUgfHwgJ2FsbCc7XG4gICAgZGlzcGF0Y2goZ2V0QWxlcnRSdWxlc0FzeW5jKHsgc3RhdGU6IHN0YXRlRmlsdGVyLnRvU3RyaW5nKCkgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDxQcm9taXNlPHZvaWQ+PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9uc2AsIGRhdGEpO1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24oJ05vdGlmaWNhdGlvbiBjcmVhdGVkJykpKTtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oZXJyb3IuZGF0YS5lcnJvcikpKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtkYXRhLmlkfWAsIGRhdGEpO1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24oJ05vdGlmaWNhdGlvbiB1cGRhdGVkJykpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKGVycm9yLmRhdGEuZXJyb3IpKSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGNoYW5uZWwgPSBnZXRTdGF0ZSgpLm5vdGlmaWNhdGlvbkNoYW5uZWwubm90aWZpY2F0aW9uQ2hhbm5lbDtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9hbGVydC1ub3RpZmljYXRpb25zL3Rlc3QnLCB7IGlkOiBjaGFubmVsLmlkLCAuLi5kYXRhIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5vdGlmaWNhdGlvblR5cGVzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IGFsZXJ0Tm90aWZpZXJzOiBOb3RpZmllckRUT1tdID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS9hbGVydC1ub3RpZmllcnNgKTtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvblR5cGVzID0gYWxlcnROb3RpZmllcnMuc29ydCgobzEsIG8yKSA9PiB7XG4gICAgICBpZiAobzEubmFtZSA+IG8yLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSk7XG5cbiAgICBkaXNwYXRjaChzZXROb3RpZmljYXRpb25DaGFubmVscyhub3RpZmljYXRpb25UeXBlcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5vdGlmaWNhdGlvbkNoYW5uZWwoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGRpc3BhdGNoKGxvYWROb3RpZmljYXRpb25UeXBlcygpKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25DaGFubmVsID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zLyR7aWR9YCk7XG4gICAgZGlzcGF0Y2gobm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZChub3RpZmljYXRpb25DaGFubmVsKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBBbGVydFJ1bGUsIEFsZXJ0UnVsZXNTdGF0ZSwgTm90aWZpY2F0aW9uQ2hhbm5lbFN0YXRlLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFF1ZXJ5ID0gKHN0YXRlOiBBbGVydFJ1bGVzU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxlcnRSdWxlSXRlbXMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpOiBBbGVydFJ1bGVbXSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5hbGVydFJ1bGVzLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5hbGVydFJ1bGVzLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KGl0ZW0ubmFtZSkgfHwgcmVnZXgudGVzdChpdGVtLnN0YXRlVGV4dCkgfHwgcmVnZXgudGVzdChpdGVtLmluZm8hKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm90aWZpY2F0aW9uQ2hhbm5lbCA9IChzdGF0ZTogTm90aWZpY2F0aW9uQ2hhbm5lbFN0YXRlLCBjaGFubmVsSWQ6IG51bWJlcikgPT4ge1xuICBpZiAoc3RhdGUubm90aWZpY2F0aW9uQ2hhbm5lbC5pZCA9PT0gY2hhbm5lbElkKSB7XG4gICAgcmV0dXJuIHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWw7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyLCB3aXRoRXJyb3JCb3VuZGFyeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBBbGVydGluZ1BhZ2VXcmFwcGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0FsZXJ0aW5nUGFnZVdyYXBwZXInO1xuaW1wb3J0IHsgTm9SdWxlc1NwbGFzaCB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlcy9Ob1J1bGVzQ1RBJztcbmltcG9ydCB7IFJ1bGVMaXN0RXJyb3JzIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVMaXN0RXJyb3JzJztcbmltcG9ydCB7IFJ1bGVMaXN0R3JvdXBWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVMaXN0R3JvdXBWaWV3JztcbmltcG9ydCB7IFJ1bGVMaXN0U3RhdGVWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVMaXN0U3RhdGVWaWV3JztcbmltcG9ydCBSdWxlc0ZpbHRlciBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZXNGaWx0ZXInO1xuaW1wb3J0IHsgUnVsZVN0YXRzIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVTdGF0cyc7XG5pbXBvcnQgeyB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzIH0gZnJvbSAnLi9ob29rcy91c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzJztcbmltcG9ydCB7IHVzZUZpbHRlcmVkUnVsZXMgfSBmcm9tICcuL2hvb2tzL3VzZUZpbHRlcmVkUnVsZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGZldGNoQWxsUHJvbUFuZFJ1bGVyUnVsZXNBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlUnVsZXNBY2Nlc3MgfSBmcm9tICcuL3V0aWxzL2FjY2Vzc0NvbnRyb2xIb29rcyc7XG5pbXBvcnQgeyBSVUxFX0xJU1RfUE9MTF9JTlRFUlZBTF9NUyB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEFsbFJ1bGVzU291cmNlTmFtZXMgfSBmcm9tICcuL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMgfSBmcm9tICcuL3V0aWxzL21pc2MnO1xuXG5jb25zdCBWSUVXUyA9IHtcbiAgZ3JvdXBzOiBSdWxlTGlzdEdyb3VwVmlldyxcbiAgc3RhdGU6IFJ1bGVMaXN0U3RhdGVWaWV3LFxufTtcblxuY29uc3QgUnVsZUxpc3QgPSB3aXRoRXJyb3JCb3VuZGFyeShcbiAgKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gICAgY29uc3QgcnVsZXNEYXRhU291cmNlTmFtZXMgPSB1c2VNZW1vKGdldEFsbFJ1bGVzU291cmNlTmFtZXMsIFtdKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gICAgY29uc3QgW2V4cGFuZEFsbCwgc2V0RXhwYW5kQWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtxdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICAgIGNvbnN0IGZpbHRlcnMgPSBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyhxdWVyeVBhcmFtcyk7XG4gICAgY29uc3QgZmlsdGVyc0FjdGl2ZSA9IE9iamVjdC52YWx1ZXMoZmlsdGVycykuc29tZSgoZmlsdGVyKSA9PiBmaWx0ZXIgIT09IHVuZGVmaW5lZCk7XG5cbiAgICBjb25zdCB7IGNhbkNyZWF0ZUdyYWZhbmFSdWxlcywgY2FuQ3JlYXRlQ2xvdWRSdWxlcyB9ID0gdXNlUnVsZXNBY2Nlc3MoKTtcblxuICAgIGNvbnN0IHZpZXcgPSBWSUVXU1txdWVyeVBhcmFtc1sndmlldyddIGFzIGtleW9mIHR5cGVvZiBWSUVXU11cbiAgICAgID8gKHF1ZXJ5UGFyYW1zWyd2aWV3J10gYXMga2V5b2YgdHlwZW9mIFZJRVdTKVxuICAgICAgOiAnZ3JvdXBzJztcblxuICAgIGNvbnN0IFZpZXdDb21wb25lbnQgPSBWSUVXU1t2aWV3XTtcblxuICAgIC8vIGZldGNoIHJ1bGVzLCB0aGVuIHBvbGwgZXZlcnkgUlVMRV9MSVNUX1BPTExfSU5URVJWQUxfTVNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hBbGxQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbigpKTtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gZGlzcGF0Y2goZmV0Y2hBbGxQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbigpKSwgUlVMRV9MSVNUX1BPTExfSU5URVJWQUxfTVMpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9O1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuXG4gICAgY29uc3QgcHJvbVJ1bGVSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgICBjb25zdCBydWxlclJ1bGVSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG5cbiAgICBjb25zdCBkaXNwYXRjaGVkID0gcnVsZXNEYXRhU291cmNlTmFtZXMuc29tZShcbiAgICAgIChuYW1lKSA9PiBwcm9tUnVsZVJlcXVlc3RzW25hbWVdPy5kaXNwYXRjaGVkIHx8IHJ1bGVyUnVsZVJlcXVlc3RzW25hbWVdPy5kaXNwYXRjaGVkXG4gICAgKTtcbiAgICBjb25zdCBsb2FkaW5nID0gcnVsZXNEYXRhU291cmNlTmFtZXMuc29tZShcbiAgICAgIChuYW1lKSA9PiBwcm9tUnVsZVJlcXVlc3RzW25hbWVdPy5sb2FkaW5nIHx8IHJ1bGVyUnVsZVJlcXVlc3RzW25hbWVdPy5sb2FkaW5nXG4gICAgKTtcbiAgICBjb25zdCBoYXZlUmVzdWx0cyA9IHJ1bGVzRGF0YVNvdXJjZU5hbWVzLnNvbWUoXG4gICAgICAobmFtZSkgPT5cbiAgICAgICAgKHByb21SdWxlUmVxdWVzdHNbbmFtZV0/LnJlc3VsdD8ubGVuZ3RoICYmICFwcm9tUnVsZVJlcXVlc3RzW25hbWVdPy5lcnJvcikgfHxcbiAgICAgICAgKE9iamVjdC5rZXlzKHJ1bGVyUnVsZVJlcXVlc3RzW25hbWVdPy5yZXN1bHQgfHwge30pLmxlbmd0aCAmJiAhcnVsZXJSdWxlUmVxdWVzdHNbbmFtZV0/LmVycm9yKVxuICAgICk7XG5cbiAgICBjb25zdCBzaG93TmV3QWxlcnRTcGxhc2ggPSBkaXNwYXRjaGVkICYmICFsb2FkaW5nICYmICFoYXZlUmVzdWx0cztcblxuICAgIGNvbnN0IGNvbWJpbmVkTmFtZXNwYWNlcyA9IHVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMoKTtcbiAgICBjb25zdCBmaWx0ZXJlZE5hbWVzcGFjZXMgPSB1c2VGaWx0ZXJlZFJ1bGVzKGNvbWJpbmVkTmFtZXNwYWNlcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydGluZ1BhZ2VXcmFwcGVyIHBhZ2VJZD1cImFsZXJ0LWxpc3RcIiBpc0xvYWRpbmc9e2xvYWRpbmcgJiYgIWhhdmVSZXN1bHRzfT5cbiAgICAgICAgPFJ1bGVMaXN0RXJyb3JzIC8+XG4gICAgICAgIHshc2hvd05ld0FsZXJ0U3BsYXNoICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFJ1bGVzRmlsdGVyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyZWFrfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3ZpZXcgPT09ICdncm91cHMnICYmIGZpbHRlcnNBY3RpdmUgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5leHBhbmRBbGxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIGljb249e2V4cGFuZEFsbCA/ICdhbmdsZS1kb3VibGUtdXAnIDogJ2FuZ2xlLWRvdWJsZS1kb3duJ31cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZEFsbCghZXhwYW5kQWxsKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2V4cGFuZEFsbCA/ICdDb2xsYXBzZSBhbGwnIDogJ0V4cGFuZCBhbGwnfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8UnVsZVN0YXRzIHNob3dJbmFjdGl2ZT17dHJ1ZX0gc2hvd1JlY29yZGluZz17dHJ1ZX0gbmFtZXNwYWNlcz17ZmlsdGVyZWROYW1lc3BhY2VzfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgeyhjYW5DcmVhdGVHcmFmYW5hUnVsZXMgfHwgY2FuQ3JlYXRlQ2xvdWRSdWxlcykgJiYgKFxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICAgICAgICBocmVmPXt1cmxVdGlsLnJlbmRlclVybCgnYWxlcnRpbmcvbmV3JywgeyByZXR1cm5UbzogbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggfSl9XG4gICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTmV3IGFsZXJ0IHJ1bGVcbiAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nob3dOZXdBbGVydFNwbGFzaCAmJiA8Tm9SdWxlc1NwbGFzaCAvPn1cbiAgICAgICAge2hhdmVSZXN1bHRzICYmIDxWaWV3Q29tcG9uZW50IGV4cGFuZEFsbD17ZXhwYW5kQWxsfSBuYW1lc3BhY2VzPXtmaWx0ZXJlZE5hbWVzcGFjZXN9IC8+fVxuICAgICAgPC9BbGVydGluZ1BhZ2VXcmFwcGVyPlxuICAgICk7XG4gIH0sXG4gIHsgc3R5bGU6ICdwYWdlJyB9XG4pO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGJyZWFrOiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICBgLFxuICBidXR0b25zQ29udGFpbmVyOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYCxcbiAgc3RhdHNDb250YWluZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYCxcbiAgZXhwYW5kQWxsQnV0dG9uOiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bGVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZUlkOiBzdHJpbmc7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydGluZ1BhZ2VXcmFwcGVyOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgcGFnZUlkLCBpc0xvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKFxuICAgIHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpLFxuICAgIHBhZ2VJZFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT57Y2hpbGRyZW59PC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFjdGlvbnM6IEFjY2Vzc0NvbnRyb2xBY3Rpb25bXTtcbiAgZmFsbGJhY2s/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvcml6ZTogRkM8UHJvcHM+ID0gKHsgYWN0aW9ucywgY2hpbGRyZW4sIGZhbGxiYWNrID0gdHJ1ZSB9KSA9PiB7XG4gIGlmIChhY3Rpb25zLnNvbWUoKGFjdGlvbikgPT4gY29udGV4dFNydi5oYXNBY2Nlc3MoYWN0aW9uLCBmYWxsYmFjaykpKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGUsIER5bmFtaWNUYWJsZVByb3BzIH0gZnJvbSAnLi9EeW5hbWljVGFibGUnO1xuXG5leHBvcnQgdHlwZSBEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lc1Byb3BzPFQ+ID0gT21pdDxEeW5hbWljVGFibGVQcm9wczxUPiwgJ3JlbmRlclByZWZpeEhlYWRlciwgcmVuZGVyUHJlZml4Q2VsbCc+O1xuXG4vLyBEeW5hbWljVGFibGUsIGJ1dCByZW5kZXJzIHZpc3VhbCBndWlkZWxpbmVzIG9uIHRoZSBsZWZ0LCBmb3IgbGFyZ2VyIHNjcmVlbiB3aWR0aHNcbmV4cG9ydCBjb25zdCBEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcyA9IDxUIGV4dGVuZHMgb2JqZWN0Pih7XG4gIHJlbmRlckV4cGFuZGVkQ29udGVudCxcbiAgLi4ucHJvcHNcbn06IER5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzUHJvcHM8VD4pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxEeW5hbWljVGFibGVcbiAgICAgIHJlbmRlckV4cGFuZGVkQ29udGVudD17XG4gICAgICAgIHJlbmRlckV4cGFuZGVkQ29udGVudFxuICAgICAgICAgID8gKGl0ZW0sIGluZGV4LCBpdGVtcykgPT4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHshKGluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxKSAmJiA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRlbnRHdWlkZWxpbmUsIHN0eWxlcy5ndWlkZWxpbmUpfSAvPn1cbiAgICAgICAgICAgICAgICB7cmVuZGVyRXhwYW5kZWRDb250ZW50KGl0ZW0sIGluZGV4LCBpdGVtcyl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICByZW5kZXJQcmVmaXhIZWFkZXI9eygpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWxhdGl2ZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5oZWFkZXJHdWlkZWxpbmUsIHN0eWxlcy5ndWlkZWxpbmUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICByZW5kZXJQcmVmaXhDZWxsPXsoXywgaW5kZXgsIGl0ZW1zKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsYXRpdmV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMudG9wR3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz5cbiAgICAgICAgICB7IShpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkgJiYgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5ib3R0b21HdWlkZWxpbmUsIHN0eWxlcy5ndWlkZWxpbmUpfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICByZWxhdGl2ZTogY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIGAsXG4gIGd1aWRlbGluZTogY3NzYFxuICAgIGxlZnQ6IC0xOXB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgJHt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpfSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYCxcbiAgdG9wR3VpZGVsaW5lOiBjc3NgXG4gICAgd2lkdGg6IDE4cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDUwJTtcbiAgYCxcbiAgYm90dG9tR3VpZGVsaW5lOiBjc3NgXG4gICAgdG9wOiA1MCU7XG4gICAgYm90dG9tOiAwO1xuICBgLFxuICBjb250ZW50R3VpZGVsaW5lOiBjc3NgXG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAtNDlweCAhaW1wb3J0YW50O1xuICBgLFxuICBoZWFkZXJHdWlkZWxpbmU6IGNzc2BcbiAgICB0b3A6IC0yNXB4O1xuICAgIGJvdHRvbTogMDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQGdyYWZhbmEvc2xhdGUtcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb21xbFN5bnRheCBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvcHJvbXFsJztcbmltcG9ydCBMb2dxbFN5bnRheCBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvc3ludGF4JztcbmltcG9ydCB7IExhbmd1YWdlTWFwLCBsYW5ndWFnZXMgYXMgcHJpc21MYW5ndWFnZXMgfSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCB7IG1ha2VWYWx1ZSwgU2xhdGVQcmlzbSwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVR5cGUsIGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgV2VsbCB9IGZyb20gJy4vV2VsbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0ZWRRdWVyeTogRkM8eyBsYW5ndWFnZTogJ3Byb21xbCcgfCAnbG9ncWwnOyBleHByOiBzdHJpbmcgfT4gPSAoeyBsYW5ndWFnZSwgZXhwciB9KSA9PiB7XG4gIGNvbnN0IHBsdWdpbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIFNsYXRlUHJpc20oXG4gICAgICAgIHtcbiAgICAgICAgICBvbmx5SW46IChub2RlOiBhbnkpID0+IG5vZGUudHlwZSA9PT0gJ2NvZGVfYmxvY2snLFxuICAgICAgICAgIGdldFN5bnRheDogKCkgPT4gbGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICAgIHsgLi4uKHByaXNtTGFuZ3VhZ2VzIGFzIExhbmd1YWdlTWFwKSwgW2xhbmd1YWdlXTogbGFuZ3VhZ2UgPT09ICdsb2dxbCcgPyBMb2dxbFN5bnRheCA6IFByb21xbFN5bnRheCB9XG4gICAgICApLFxuICAgIF0sXG4gICAgW2xhbmd1YWdlXVxuICApO1xuXG4gIGNvbnN0IHNsYXRlVmFsdWUgPSB1c2VNZW1vKCgpID0+IG1ha2VWYWx1ZShleHByKSwgW2V4cHJdKTtcblxuICByZXR1cm4gPEVkaXRvciBwbHVnaW5zPXtwbHVnaW5zfSB2YWx1ZT17c2xhdGVWYWx1ZX0gcmVhZE9ubHk9e3RydWV9IC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IEV4cHJlc3Npb246IEZDPFByb3BzPiA9ICh7IGV4cHJlc3Npb246IHF1ZXJ5LCBydWxlc1NvdXJjZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPFdlbGwgY2xhc3NOYW1lPXtjeChzdHlsZXMud2VsbCwgJ3NsYXRlLXF1ZXJ5LWZpZWxkJyl9PlxuICAgICAge2lzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgPyAoXG4gICAgICAgIDxIaWdobGlnaHRlZFF1ZXJ5IGV4cHI9e3F1ZXJ5fSBsYW5ndWFnZT17cnVsZXNTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGUuTG9raSA/ICdsb2dxbCcgOiAncHJvbXFsJ30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIHF1ZXJ5XG4gICAgICApfVxuICAgIDwvV2VsbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgd2VsbDogY3NzYFxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5tb25vc3BhY2V9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBJY29uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUnVsZUxvY2F0aW9uUHJvcHMge1xuICBuYW1lc3BhY2U6IHN0cmluZztcbiAgZ3JvdXA/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFJ1bGVMb2NhdGlvbjogRkM8UnVsZUxvY2F0aW9uUHJvcHM+ID0gKHsgbmFtZXNwYWNlLCBncm91cCB9KSA9PiB7XG4gIGlmICghZ3JvdXApIHtcbiAgICByZXR1cm4gPD57bmFtZXNwYWNlfTwvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtuYW1lc3BhY2V9IDxJY29uIG5hbWU9XCJhbmdsZS1yaWdodFwiIC8+IHtncm91cH1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFJ1bGVMb2NhdGlvbiB9O1xuIiwiaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFByb3BzID0ge1xuICBzdGF0dXM6IFByb21BbGVydGluZ1J1bGVTdGF0ZSB8ICduZXV0cmFsJztcbn07XG5cbmV4cG9ydCBjb25zdCBTdGF0ZUNvbG9yZWRUZXh0OiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgc3RhdHVzIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tzdGF0dXNdfT57Y2hpbGRyZW4gfHwgc3RhdHVzfTwvc3Bhbj47XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmVdOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnN1Y2Nlc3MudGV4dH07XG4gIGAsXG4gIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ106IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2FybmluZy50ZXh0fTtcbiAgYCxcbiAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmddOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmVycm9yLnRleHR9O1xuICBgLFxuICBuZXV0cmFsOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhYmVsLCBUb29sdGlwLCBJbnB1dCwgSWNvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcXVlcnlTdHJpbmc/OiBzdHJpbmc7XG4gIGRlZmF1bHRRdWVyeVN0cmluZz86IHN0cmluZztcbiAgb25GaWx0ZXJDaGFuZ2U6IChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE1hdGNoZXJGaWx0ZXIgPSAoeyBjbGFzc05hbWUsIG9uRmlsdGVyQ2hhbmdlLCBkZWZhdWx0UXVlcnlTdHJpbmcsIHF1ZXJ5U3RyaW5nIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGU6IEZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgb25GaWx0ZXJDaGFuZ2UodGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IDxJY29uIG5hbWU9eydzZWFyY2gnfSAvPjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxMYWJlbD5cbiAgICAgICAgPFN0YWNrIGdhcD17MC41fT5cbiAgICAgICAgICA8c3Bhbj5TZWFyY2ggYnkgbGFiZWw8L3NwYW4+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEZpbHRlciBhbGVydHMgdXNpbmcgbGFiZWwgcXVlcnlpbmcsIGV4OlxuICAgICAgICAgICAgICAgIDxwcmU+e2B7c2V2ZXJpdHk9XCJjcml0aWNhbFwiLCBpbnN0YW5jZT1+XCJjbHVzdGVyLXVzLS4rXCJ9YH08L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gbmFtZT1cImluZm8tY2lyY2xlXCIgc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0xhYmVsPlxuICAgICAgPElucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0UXVlcnlTdHJpbmd9XG4gICAgICAgIHZhbHVlPXtxdWVyeVN0cmluZ31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJzZWFyY2gtcXVlcnktaW5wdXRcIlxuICAgICAgICBwcmVmaXg9e3NlYXJjaEljb259XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0V2lkdGh9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBpY29uOiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gIGAsXG4gIGlucHV0V2lkdGg6IGNzc2BcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgZmxleC1ncm93OiAwO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBJY29uTmFtZSwgVG9vbHRpcCwgTGlua0J1dHRvbiwgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUG9wb3ZlckNvbnRlbnQsIFRvb2x0aXBQbGFjZW1lbnQgfSBmcm9tICdAZ3JhZmFuYS91aS9zcmMvY29tcG9uZW50cy9Ub29sdGlwJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdG9vbHRpcDogUG9wb3ZlckNvbnRlbnQ7XG4gIGljb246IEljb25OYW1lO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHRvb2x0aXBQbGFjZW1lbnQ/OiBUb29sdGlwUGxhY2VtZW50O1xuICB0bz86IHN0cmluZztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgJ2RhdGEtdGVzdGlkJz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFjdGlvbkljb246IEZDPFByb3BzPiA9ICh7XG4gIHRvb2x0aXAsXG4gIGljb24sXG4gIHRvLFxuICB0YXJnZXQsXG4gIG9uQ2xpY2ssXG4gIGNsYXNzTmFtZSxcbiAgdG9vbHRpcFBsYWNlbWVudCA9ICd0b3AnLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IGFyaWFMYWJlbCA9IHR5cGVvZiB0b29sdGlwID09PSAnc3RyaW5nJyA/IHRvb2x0aXAgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcCBjb250ZW50PXt0b29sdGlwfSBwbGFjZW1lbnQ9e3Rvb2x0aXBQbGFjZW1lbnR9PlxuICAgICAge3RvID8gKFxuICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGhyZWY9e3RvfVxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgdGFyZ2V0PXt0YXJnZXR9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvVG9vbHRpcD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmFkaW9CdXR0b25Hcm91cCwgTGFiZWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc3RhdGVGaWx0ZXI/OiBHcmFmYW5hQWxlcnRTdGF0ZTtcbiAgb25TdGF0ZUZpbHRlckNoYW5nZTogKHZhbHVlOiBHcmFmYW5hQWxlcnRTdGF0ZSB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlciA9ICh7IGNsYXNzTmFtZSwgb25TdGF0ZUZpbHRlckNoYW5nZSwgc3RhdGVGaWx0ZXIgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3RhdGVPcHRpb25zID0gT2JqZWN0LnZhbHVlcyhHcmFmYW5hQWxlcnRTdGF0ZSkubWFwKCh2YWx1ZSkgPT4gKHtcbiAgICBsYWJlbDogdmFsdWUsXG4gICAgdmFsdWUsXG4gIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgIG9wdGlvbnM9e3N0YXRlT3B0aW9uc31cbiAgICAgICAgdmFsdWU9e3N0YXRlRmlsdGVyfVxuICAgICAgICBvbkNoYW5nZT17b25TdGF0ZUZpbHRlckNoYW5nZX1cbiAgICAgICAgb25DbGljaz17KHYpID0+IHtcbiAgICAgICAgICBpZiAodiA9PT0gc3RhdGVGaWx0ZXIpIHtcbiAgICAgICAgICAgIG9uU3RhdGVGaWx0ZXJDaGFuZ2UodW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IExvYWRpbmdQbGFjZWhvbGRlciwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBSdWxlc0dyb3VwIH0gZnJvbSAnLi9SdWxlc0dyb3VwJztcbmltcG9ydCB7IGdldFJ1bGVzRGF0YVNvdXJjZXMsIGdldFJ1bGVzU291cmNlTmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlTmFtZXNwYWNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXTtcbiAgZXhwYW5kQWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQ2xvdWRSdWxlczogRkM8UHJvcHM+ID0gKHsgbmFtZXNwYWNlcywgZXhwYW5kQWxsIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IHJ1bGVzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICBjb25zdCBydWxlc0RhdGFTb3VyY2VzID0gdXNlTWVtbyhnZXRSdWxlc0RhdGFTb3VyY2VzLCBbXSk7XG5cbiAgY29uc3QgZGF0YVNvdXJjZXNMb2FkaW5nID0gdXNlTWVtbyhcbiAgICAoKSA9PiBydWxlc0RhdGFTb3VyY2VzLmZpbHRlcigoZHMpID0+IHJ1bGVzW2RzLm5hbWVdPy5sb2FkaW5nKSxcbiAgICBbcnVsZXMsIHJ1bGVzRGF0YVNvdXJjZXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbkhlYWRlcn0+XG4gICAgICAgIDxoNT5NaW1pciAvIENvcnRleCAvIExva2k8L2g1PlxuICAgICAgICB7ZGF0YVNvdXJjZXNMb2FkaW5nLmxlbmd0aCA/IChcbiAgICAgICAgICA8TG9hZGluZ1BsYWNlaG9sZGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9XG4gICAgICAgICAgICB0ZXh0PXtgTG9hZGluZyBydWxlcyBmcm9tICR7ZGF0YVNvdXJjZXNMb2FkaW5nLmxlbmd0aH0gJHtwbHVyYWxpemUoJ3NvdXJjZScsIGRhdGFTb3VyY2VzTG9hZGluZy5sZW5ndGgpfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAge25hbWVzcGFjZXMubWFwKChuYW1lc3BhY2UpID0+IHtcbiAgICAgICAgY29uc3QgeyBncm91cHMsIHJ1bGVzU291cmNlIH0gPSBuYW1lc3BhY2U7XG4gICAgICAgIHJldHVybiBncm91cHMubWFwKChncm91cCkgPT4gKFxuICAgICAgICAgIDxSdWxlc0dyb3VwXG4gICAgICAgICAgICBncm91cD17Z3JvdXB9XG4gICAgICAgICAgICBrZXk9e2Ake2dldFJ1bGVzU291cmNlTmFtZShydWxlc1NvdXJjZSl9LSR7bmFtZX0tJHtncm91cC5uYW1lfWB9XG4gICAgICAgICAgICBuYW1lc3BhY2U9e25hbWVzcGFjZX1cbiAgICAgICAgICAgIGV4cGFuZEFsbD17ZXhwYW5kQWxsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpO1xuICAgICAgfSl9XG4gICAgICB7bmFtZXNwYWNlcz8ubGVuZ3RoID09PSAwICYmICEhcnVsZXNEYXRhU291cmNlcy5sZW5ndGggJiYgPHA+Tm8gcnVsZXMgZm91bmQuPC9wPn1cbiAgICAgIHshcnVsZXNEYXRhU291cmNlcy5sZW5ndGggJiYgPHA+VGhlcmUgYXJlIG5vIFByb21ldGhldXMgb3IgTG9raSBkYXRhcyBzb3VyY2VzIGNvbmZpZ3VyZWQuPC9wPn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgbG9hZGVyOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYCxcbiAgc2VjdGlvbkhlYWRlcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBgLFxuICB3cmFwcGVyOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbWJpbmVkUnVsZUdyb3VwLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBGaWVsZCwgSW5wdXQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBkdXJhdGlvblZhbGlkYXRpb25QYXR0ZXJuIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVMb3RleE5hbWVzcGFjZUFuZEdyb3VwQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRSdWxlc1NvdXJjZU5hbWUgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgnO1xuaW1wb3J0IHsgdXNlQ2xlYW51cCB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZTtcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgRm9ybVZhbHVlcyB7XG4gIG5hbWVzcGFjZU5hbWU6IHN0cmluZztcbiAgZ3JvdXBOYW1lOiBzdHJpbmc7XG4gIGdyb3VwSW50ZXJ2YWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRDbG91ZEdyb3VwTW9kYWwocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBuYW1lc3BhY2UsIGdyb3VwLCBvbkNsb3NlIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRpc3BhdGNoZWQgfSA9XG4gICAgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51cGRhdGVMb3RleE5hbWVzcGFjZUFuZEdyb3VwKSA/PyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHVzZU1lbW8oXG4gICAgKCk6IEZvcm1WYWx1ZXMgPT4gKHtcbiAgICAgIG5hbWVzcGFjZU5hbWU6IG5hbWVzcGFjZS5uYW1lLFxuICAgICAgZ3JvdXBOYW1lOiBncm91cC5uYW1lLFxuICAgICAgZ3JvdXBJbnRlcnZhbDogZ3JvdXAuaW50ZXJ2YWwgPz8gJycsXG4gICAgfSksXG4gICAgW25hbWVzcGFjZSwgZ3JvdXBdXG4gICk7XG5cbiAgLy8gY2xvc2UgbW9kYWwgaWYgc3VjY2Vzc2Z1bGx5IHNhdmVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc3BhdGNoZWQgJiYgIWxvYWRpbmcgJiYgIWVycm9yKSB7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hlZCwgbG9hZGluZywgb25DbG9zZSwgZXJyb3JdKTtcblxuICB1c2VDbGVhbnVwKChzdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLnVwZGF0ZUxvdGV4TmFtZXNwYWNlQW5kR3JvdXApO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKHZhbHVlczogRm9ybVZhbHVlcykgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgdXBkYXRlTG90ZXhOYW1lc3BhY2VBbmRHcm91cEFjdGlvbih7XG4gICAgICAgIHJ1bGVzU291cmNlTmFtZTogZ2V0UnVsZXNTb3VyY2VOYW1lKG5hbWVzcGFjZS5ydWxlc1NvdXJjZSksXG4gICAgICAgIGdyb3VwTmFtZTogZ3JvdXAubmFtZSxcbiAgICAgICAgbmV3R3JvdXBOYW1lOiB2YWx1ZXMuZ3JvdXBOYW1lLFxuICAgICAgICBuYW1lc3BhY2VOYW1lOiBuYW1lc3BhY2UubmFtZSxcbiAgICAgICAgbmV3TmFtZXNwYWNlTmFtZTogdmFsdWVzLm5hbWVzcGFjZU5hbWUsXG4gICAgICAgIGdyb3VwSW50ZXJ2YWw6IHZhbHVlcy5ncm91cEludGVydmFsIHx8IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9XG4gICAgICBpc09wZW49e3RydWV9XG4gICAgICB0aXRsZT1cIkVkaXQgbmFtZXNwYWNlIG9yIHJ1bGUgZ3JvdXBcIlxuICAgICAgb25EaXNtaXNzPXtvbkNsb3NlfVxuICAgICAgb25DbGlja0JhY2tkcm9wPXtvbkNsb3NlfVxuICAgID5cbiAgICAgIDxGb3JtIGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0ga2V5PXtKU09OLnN0cmluZ2lmeShkZWZhdWx0VmFsdWVzKX0+XG4gICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzLCBmb3JtU3RhdGU6IHsgaXNEaXJ0eSB9IH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZXNwYWNlXCIgaW52YWxpZD17ISFlcnJvcnMubmFtZXNwYWNlTmFtZX0gZXJyb3I9e2Vycm9ycy5uYW1lc3BhY2VOYW1lPy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lc3BhY2VOYW1lXCJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25hbWVzcGFjZU5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ05hbWVzcGFjZSBuYW1lIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiUnVsZSBncm91cFwiIGludmFsaWQ9eyEhZXJyb3JzLmdyb3VwTmFtZX0gZXJyb3I9e2Vycm9ycy5ncm91cE5hbWU/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImdyb3VwTmFtZVwiXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdncm91cE5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1J1bGUgZ3JvdXAgbmFtZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIlJ1bGUgZ3JvdXAgZXZhbHVhdGlvbiBpbnRlcnZhbFwiXG4gICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmdyb3VwSW50ZXJ2YWx9XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ3JvdXBJbnRlcnZhbD8ubWVzc2FnZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJncm91cEludGVydmFsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjFtXCJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2dyb3VwSW50ZXJ2YWwnLCB7XG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBkdXJhdGlvblZhbGlkYXRpb25QYXR0ZXJuLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXtsb2FkaW5nfSBvbkNsaWNrPXtvbkNsb3NlfSBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWlzRGlydHkgfHwgbG9hZGluZ30+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAnU2F2aW5nLi4uJyA6ICdTYXZlIGNoYW5nZXMnfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gIG1vZGFsOiBjc3NgXG4gICAgbWF4LXdpZHRoOiA1NjBweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTG9hZGluZ1BsYWNlaG9sZGVyLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IFJ1bGVzR3JvdXAgfSBmcm9tICcuL1J1bGVzR3JvdXAnO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlTmFtZXNwYWNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgnO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgeyBmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXTtcbiAgZXhwYW5kQWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgR3JhZmFuYVJ1bGVzOiBGQzxQcm9wcz4gPSAoeyBuYW1lc3BhY2VzLCBleHBhbmRBbGwgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG5cbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnByb21SdWxlc1tHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FXSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGVcbiAgKTtcblxuICBjb25zdCB3YW50c0dyb3VwZWRWaWV3ID0gcXVlcnlQYXJhbXNbJ3ZpZXcnXSA9PT0gJ2dyb3VwZWQnO1xuICBjb25zdCBuYW1lc3BhY2VzRm9ybWF0ID0gd2FudHNHcm91cGVkVmlldyA/IG5hbWVzcGFjZXMgOiBmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyhuYW1lc3BhY2VzKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uSGVhZGVyfT5cbiAgICAgICAgPGg1PkdyYWZhbmE8L2g1PlxuICAgICAgICB7bG9hZGluZyA/IDxMb2FkaW5nUGxhY2Vob2xkZXIgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfSB0ZXh0PVwiTG9hZGluZy4uLlwiIC8+IDogPGRpdiAvPn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7bmFtZXNwYWNlc0Zvcm1hdD8ubWFwKChuYW1lc3BhY2UpID0+XG4gICAgICAgIG5hbWVzcGFjZS5ncm91cHMubWFwKChncm91cCkgPT4gKFxuICAgICAgICAgIDxSdWxlc0dyb3VwXG4gICAgICAgICAgICBncm91cD17Z3JvdXB9XG4gICAgICAgICAgICBrZXk9e2Ake25hbWVzcGFjZS5uYW1lfS0ke2dyb3VwLm5hbWV9YH1cbiAgICAgICAgICAgIG5hbWVzcGFjZT17bmFtZXNwYWNlfVxuICAgICAgICAgICAgZXhwYW5kQWxsPXtleHBhbmRBbGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgICl9XG4gICAgICB7bmFtZXNwYWNlc0Zvcm1hdD8ubGVuZ3RoID09PSAwICYmIDxwPk5vIHJ1bGVzIGZvdW5kLjwvcD59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGxvYWRlcjogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIGAsXG4gIHNlY3Rpb25IZWFkZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy54bH07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IENhbGxUb0FjdGlvbkNhcmQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSdWxlc0FjY2VzcyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzc0NvbnRyb2xIb29rcyc7XG5cbmV4cG9ydCBjb25zdCBOb1J1bGVzU3BsYXNoOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBjYW5DcmVhdGVHcmFmYW5hUnVsZXMsIGNhbkNyZWF0ZUNsb3VkUnVsZXMgfSA9IHVzZVJ1bGVzQWNjZXNzKCk7XG5cbiAgaWYgKGNhbkNyZWF0ZUdyYWZhbmFSdWxlcyB8fCBjYW5DcmVhdGVDbG91ZFJ1bGVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFbXB0eUxpc3RDVEFcbiAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZW5gdCBjcmVhdGVkIGFueSBhbGVydCBydWxlcyB5ZXRcIlxuICAgICAgICBidXR0b25JY29uPVwiYmVsbFwiXG4gICAgICAgIGJ1dHRvbkxpbms9eydhbGVydGluZy9uZXcnfVxuICAgICAgICBidXR0b25UaXRsZT1cIk5ldyBhbGVydCBydWxlXCJcbiAgICAgICAgcHJvVGlwPVwieW91IGNhbiBhbHNvIGNyZWF0ZSBhbGVydCBydWxlcyBmcm9tIGV4aXN0aW5nIHBhbmVscyBhbmQgcXVlcmllcy5cIlxuICAgICAgICBwcm9UaXBMaW5rPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL1wiXG4gICAgICAgIHByb1RpcExpbmtUaXRsZT1cIkxlYXJuIG1vcmVcIlxuICAgICAgICBwcm9UaXBUYXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJldHVybiA8Q2FsbFRvQWN0aW9uQ2FyZCBtZXNzYWdlPVwiTm8gcnVsZXMgZXhpc3QgeWV0LlwiIGNhbGxUb0FjdGlvbkVsZW1lbnQ9ezxkaXYgLz59IC8+O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnRMYWJlbHMgfSBmcm9tICcuLi9BbGVydExhYmVscyc7XG5pbXBvcnQgeyBEZXRhaWxzRmllbGQgfSBmcm9tICcuLi9EZXRhaWxzRmllbGQnO1xuaW1wb3J0IHsgUnVsZURldGFpbHNBY3Rpb25CdXR0b25zIH0gZnJvbSAnLi9SdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMnO1xuaW1wb3J0IHsgUnVsZURldGFpbHNBbm5vdGF0aW9ucyB9IGZyb20gJy4vUnVsZURldGFpbHNBbm5vdGF0aW9ucyc7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc0RhdGFTb3VyY2VzIH0gZnJvbSAnLi9SdWxlRGV0YWlsc0RhdGFTb3VyY2VzJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzRXhwcmVzc2lvbiB9IGZyb20gJy4vUnVsZURldGFpbHNFeHByZXNzaW9uJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMgfSBmcm9tICcuL1J1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlRGV0YWlsczogRkM8UHJvcHM+ID0gKHsgcnVsZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3Qge1xuICAgIHByb21SdWxlLFxuICAgIG5hbWVzcGFjZTogeyBydWxlc1NvdXJjZSB9LFxuICB9ID0gcnVsZTtcblxuICBjb25zdCBhbm5vdGF0aW9ucyA9IE9iamVjdC5lbnRyaWVzKHJ1bGUuYW5ub3RhdGlvbnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gISF2YWx1ZS50cmltKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMgcnVsZT17cnVsZX0gcnVsZXNTb3VyY2U9e3J1bGVzU291cmNlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0U2lkZX0+XG4gICAgICAgICAgeyEhcnVsZS5sYWJlbHMgJiYgISFPYmplY3Qua2V5cyhydWxlLmxhYmVscykubGVuZ3RoICYmIChcbiAgICAgICAgICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJMYWJlbHNcIiBob3Jpem9udGFsPXt0cnVlfT5cbiAgICAgICAgICAgICAgPEFsZXJ0TGFiZWxzIGxhYmVscz17cnVsZS5sYWJlbHN9IC8+XG4gICAgICAgICAgICA8L0RldGFpbHNGaWVsZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxSdWxlRGV0YWlsc0V4cHJlc3Npb24gcnVsZXNTb3VyY2U9e3J1bGVzU291cmNlfSBydWxlPXtydWxlfSBhbm5vdGF0aW9ucz17YW5ub3RhdGlvbnN9IC8+XG4gICAgICAgICAgPFJ1bGVEZXRhaWxzQW5ub3RhdGlvbnMgYW5ub3RhdGlvbnM9e2Fubm90YXRpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFNpZGV9PlxuICAgICAgICAgIDxSdWxlRGV0YWlsc0RhdGFTb3VyY2VzIHJ1bGVzU291cmNlPXtydWxlc1NvdXJjZX0gcnVsZT17cnVsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxSdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzIHByb21SdWxlPXtwcm9tUnVsZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgJHt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpfSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgYCxcbiAgbGVmdFNpZGU6IGNzc2BcbiAgICBmbGV4OiAxO1xuICBgLFxuICByaWdodFNpZGU6IGNzc2BcbiAgICAke3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpfSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIENsaXBib2FyZEJ1dHRvbiwgQ29uZmlybU1vZGFsLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VBcHBOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUnVsZXJHcmFmYW5hUnVsZURUTywgUnVsZXJSdWxlRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCBSZWFjdCwgeyBGQywgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlSXNSdWxlRWRpdGFibGUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VJc1J1bGVFZGl0YWJsZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZUhpc3RvcnlNb2RhbCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVN0YXRlSGlzdG9yeU1vZGFsJztcbmltcG9ydCB7IGRlbGV0ZVJ1bGVBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEFsZXJ0bWFuYWdlckJ5VWlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IEFubm90YXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0UnVsZXNTb3VyY2VOYW1lLCBpc0Nsb3VkUnVsZXNTb3VyY2UsIGlzR3JhZmFuYVJ1bGVzU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBjcmVhdGVFeHBsb3JlTGluaywgY3JlYXRlVmlld0xpbmssIG1ha2VSdWxlQmFzZWRTaWxlbmNlTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0ICogYXMgcnVsZUlkIGZyb20gJy4uLy4uL3V0aWxzL3J1bGUtaWQnO1xuaW1wb3J0IHsgaXNGZWRlcmF0ZWRSdWxlR3JvdXAgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGU6IENvbWJpbmVkUnVsZTtcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZURldGFpbHNBY3Rpb25CdXR0b25zOiBGQzxQcm9wcz4gPSAoeyBydWxlLCBydWxlc1NvdXJjZSB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBub3RpZnlBcHAgPSB1c2VBcHBOb3RpZmljYXRpb24oKTtcbiAgY29uc3Qgc3R5bGUgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgbmFtZXNwYWNlLCBncm91cCwgcnVsZXJSdWxlIH0gPSBydWxlO1xuICBjb25zdCBbcnVsZVRvRGVsZXRlLCBzZXRSdWxlVG9EZWxldGVdID0gdXNlU3RhdGU8Q29tYmluZWRSdWxlPigpO1xuICBjb25zdCBhbGVydElkID0gaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUucnVsZXJSdWxlKSA/IHJ1bGUucnVsZXJSdWxlLmdyYWZhbmFfYWxlcnQuaWQgPz8gJycgOiAnJztcbiAgY29uc3QgeyBTdGF0ZUhpc3RvcnlNb2RhbCwgc2hvd1N0YXRlSGlzdG9yeU1vZGFsIH0gPSB1c2VTdGF0ZUhpc3RvcnlNb2RhbChhbGVydElkKTtcblxuICBjb25zdCBhbGVydG1hbmFnZXJTb3VyY2VOYW1lID0gaXNHcmFmYW5hUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpXG4gICAgPyBydWxlc1NvdXJjZVxuICAgIDogZ2V0QWxlcnRtYW5hZ2VyQnlVaWQocnVsZXNTb3VyY2UuanNvbkRhdGEuYWxlcnRtYW5hZ2VyVWlkKT8ubmFtZTtcbiAgY29uc3QgcnVsZXNTb3VyY2VOYW1lID0gZ2V0UnVsZXNTb3VyY2VOYW1lKHJ1bGVzU291cmNlKTtcblxuICBjb25zdCBoYXNFeHBsb3JlUGVybWlzc2lvbiA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzRXhwbG9yZSk7XG5cbiAgY29uc3QgbGVmdEJ1dHRvbnM6IEpTWC5FbGVtZW50W10gPSBbXTtcbiAgY29uc3QgcmlnaHRCdXR0b25zOiBKU1guRWxlbWVudFtdID0gW107XG5cbiAgY29uc3QgaXNGZWRlcmF0ZWQgPSBpc0ZlZGVyYXRlZFJ1bGVHcm91cChncm91cCk7XG4gIGNvbnN0IHsgaXNFZGl0YWJsZSwgaXNSZW1vdmFibGUgfSA9IHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVzU291cmNlTmFtZSwgcnVsZXJSdWxlKTtcbiAgY29uc3QgcmV0dXJuVG8gPSBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgaXNWaWV3TW9kZSA9IGluVmlld01vZGUobG9jYXRpb24ucGF0aG5hbWUpO1xuXG4gIGNvbnN0IGRlbGV0ZVJ1bGUgPSAoKSA9PiB7XG4gICAgaWYgKHJ1bGVUb0RlbGV0ZSAmJiBydWxlVG9EZWxldGUucnVsZXJSdWxlKSB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gcnVsZUlkLmZyb21SdWxlclJ1bGUoXG4gICAgICAgIGdldFJ1bGVzU291cmNlTmFtZShydWxlVG9EZWxldGUubmFtZXNwYWNlLnJ1bGVzU291cmNlKSxcbiAgICAgICAgcnVsZVRvRGVsZXRlLm5hbWVzcGFjZS5uYW1lLFxuICAgICAgICBydWxlVG9EZWxldGUuZ3JvdXAubmFtZSxcbiAgICAgICAgcnVsZVRvRGVsZXRlLnJ1bGVyUnVsZVxuICAgICAgKTtcblxuICAgICAgZGlzcGF0Y2goZGVsZXRlUnVsZUFjdGlvbihpZGVudGlmaWVyLCB7IG5hdmlnYXRlVG86IGlzVmlld01vZGUgPyAnL2FsZXJ0aW5nL2xpc3QnIDogdW5kZWZpbmVkIH0pKTtcbiAgICAgIHNldFJ1bGVUb0RlbGV0ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidWlsZFNoYXJlVXJsID0gKCkgPT4ge1xuICAgIGlmIChpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgICBjb25zdCB7IGFwcFVybCwgYXBwU3ViVXJsIH0gPSBjb25maWc7XG4gICAgICBjb25zdCBiYXNlVXJsID0gYXBwU3ViVXJsICE9PSAnJyA/IGAke2FwcFVybH0ke2FwcFN1YlVybH0vYCA6IGNvbmZpZy5hcHBVcmw7XG4gICAgICBjb25zdCBydWxlVXJsID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KHJ1bGVzU291cmNlLm5hbWUpfS8ke2VuY29kZVVSSUNvbXBvbmVudChydWxlLm5hbWUpfWA7XG4gICAgICByZXR1cm4gYCR7YmFzZVVybH1hbGVydGluZy8ke3J1bGVVcmx9L2ZpbmRgO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICB9O1xuXG4gIC8vIGV4cGxvcmUgZG9lcyBub3Qgc3VwcG9ydCBncmFmYW5hIHJ1bGUgcXVlcmllcyBhdG1cbiAgLy8gbmVpdGhlciBkbyBcImZlZGVyYXRlZCBydWxlc1wiXG4gIGlmIChpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpICYmIGhhc0V4cGxvcmVQZXJtaXNzaW9uICYmICFpc0ZlZGVyYXRlZCkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwiZXhwbG9yZVwiXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgaWNvbj1cImNoYXJ0LWxpbmVcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgaHJlZj17Y3JlYXRlRXhwbG9yZUxpbmsocnVsZXNTb3VyY2UubmFtZSwgcnVsZS5xdWVyeSl9XG4gICAgICA+XG4gICAgICAgIFNlZSBncmFwaFxuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cbiAgaWYgKHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5ydW5ib29rVVJMXSkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwicnVuYm9va1wiXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgaWNvbj1cImJvb2tcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgaHJlZj17cnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLnJ1bmJvb2tVUkxdfVxuICAgICAgPlxuICAgICAgICBWaWV3IHJ1bmJvb2tcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG4gIGlmIChydWxlLmFubm90YXRpb25zW0Fubm90YXRpb24uZGFzaGJvYXJkVUlEXSkge1xuICAgIGNvbnN0IGRhc2hib2FyZFVJRCA9IHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5kYXNoYm9hcmRVSURdO1xuICAgIGlmIChkYXNoYm9hcmRVSUQpIHtcbiAgICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICBrZXk9XCJkYXNoYm9hcmRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpY29uPVwiYXBwc1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgICAgaHJlZj17YGQvJHtlbmNvZGVVUklDb21wb25lbnQoZGFzaGJvYXJkVUlEKX1gfVxuICAgICAgICA+XG4gICAgICAgICAgR28gdG8gZGFzaGJvYXJkXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICk7XG4gICAgICBjb25zdCBwYW5lbElkID0gcnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLnBhbmVsSURdO1xuICAgICAgaWYgKHBhbmVsSWQpIHtcbiAgICAgICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAga2V5PVwicGFuZWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgaWNvbj1cImFwcHNcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgICAgICBocmVmPXtgZC8ke2VuY29kZVVSSUNvbXBvbmVudChkYXNoYm9hcmRVSUQpfT92aWV3UGFuZWw9JHtlbmNvZGVVUklDb21wb25lbnQocGFuZWxJZCl9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBHbyB0byBwYW5lbFxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWxlcnRtYW5hZ2VyU291cmNlTmFtZSAmJiBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nSW5zdGFuY2VDcmVhdGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpKSB7XG4gICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICBrZXk9XCJzaWxlbmNlXCJcbiAgICAgICAgaWNvbj1cImJlbGwtc2xhc2hcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgaHJlZj17bWFrZVJ1bGVCYXNlZFNpbGVuY2VMaW5rKGFsZXJ0bWFuYWdlclNvdXJjZU5hbWUsIHJ1bGUpfVxuICAgICAgPlxuICAgICAgICBTaWxlbmNlXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChhbGVydElkKSB7XG4gICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgIDxGcmFnbWVudCBrZXk9XCJoaXN0b3J5XCI+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IHNpemU9XCJ4c1wiIGljb249XCJoaXN0b3J5XCIgb25DbGljaz17KCkgPT4gc2hvd1N0YXRlSGlzdG9yeU1vZGFsKCl9PlxuICAgICAgICAgIFNob3cgc3RhdGUgaGlzdG9yeVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAge1N0YXRlSGlzdG9yeU1vZGFsfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFpc1ZpZXdNb2RlKSB7XG4gICAgcmlnaHRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwidmlld1wiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICBpY29uPVwiZXllXCJcbiAgICAgICAgaHJlZj17Y3JlYXRlVmlld0xpbmsocnVsZXNTb3VyY2UsIHJ1bGUsIHJldHVyblRvKX1cbiAgICAgID5cbiAgICAgICAgVmlld1xuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAoaXNFZGl0YWJsZSAmJiBydWxlclJ1bGUgJiYgIWlzRmVkZXJhdGVkKSB7XG4gICAgY29uc3Qgc291cmNlTmFtZSA9IGdldFJ1bGVzU291cmNlTmFtZShydWxlc1NvdXJjZSk7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC5mcm9tUnVsZXJSdWxlKHNvdXJjZU5hbWUsIG5hbWVzcGFjZS5uYW1lLCBncm91cC5uYW1lLCBydWxlclJ1bGUpO1xuXG4gICAgY29uc3QgZWRpdFVSTCA9IHVybFV0aWwucmVuZGVyVXJsKFxuICAgICAgYCR7Y29uZmlnLmFwcFN1YlVybH0vYWxlcnRpbmcvJHtlbmNvZGVVUklDb21wb25lbnQocnVsZUlkLnN0cmluZ2lmeUlkZW50aWZpZXIoaWRlbnRpZmllcikpfS9lZGl0YCxcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuVG8sXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChpc1ZpZXdNb2RlKSB7XG4gICAgICByaWdodEJ1dHRvbnMucHVzaChcbiAgICAgICAgPENsaXBib2FyZEJ1dHRvblxuICAgICAgICAgIGtleT1cImNvcHlcIlxuICAgICAgICAgIG9uQ2xpcGJvYXJkQ29weT17KCkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5QXBwLnN1Y2Nlc3MoJ1VSTCBjb3BpZWQhJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsaXBib2FyZEVycm9yPXsoZSkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5QXBwLmVycm9yKCdFcnJvciB3aGlsZSBjb3B5aW5nIFVSTCcsIGUudGV4dCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGdldFRleHQ9e2J1aWxkU2hhcmVVcmx9XG4gICAgICAgID5cbiAgICAgICAgICBDb3B5IGxpbmsgdG8gcnVsZVxuICAgICAgICA8L0NsaXBib2FyZEJ1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmlnaHRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gc2l6ZT1cInhzXCIga2V5PVwiZWRpdFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpY29uPVwicGVuXCIgaHJlZj17ZWRpdFVSTH0+XG4gICAgICAgIEVkaXRcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGlzUmVtb3ZhYmxlICYmIHJ1bGVyUnVsZSAmJiAhaXNGZWRlcmF0ZWQpIHtcbiAgICByaWdodEJ1dHRvbnMucHVzaChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBrZXk9XCJkZWxldGVcIlxuICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVUb0RlbGV0ZShydWxlKX1cbiAgICAgID5cbiAgICAgICAgRGVsZXRlXG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGxlZnRCdXR0b25zLmxlbmd0aCB8fCByaWdodEJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIHdpZHRoPVwiYXV0b1wiPntsZWZ0QnV0dG9ucy5sZW5ndGggPyBsZWZ0QnV0dG9ucyA6IDxkaXYgLz59PC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgPEhvcml6b250YWxHcm91cCB3aWR0aD1cImF1dG9cIj57cmlnaHRCdXR0b25zLmxlbmd0aCA/IHJpZ2h0QnV0dG9ucyA6IDxkaXYgLz59PC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ISFydWxlVG9EZWxldGUgJiYgKFxuICAgICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICAgIGlzT3Blbj17dHJ1ZX1cbiAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHJ1bGVcIlxuICAgICAgICAgICAgYm9keT1cIkRlbGV0aW5nIHRoaXMgcnVsZSB3aWxsIHBlcm1hbmVudGx5IHJlbW92ZSBpdCBmcm9tIHlvdXIgYWxlcnQgcnVsZSBsaXN0LiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcnVsZT9cIlxuICAgICAgICAgICAgY29uZmlybVRleHQ9XCJZZXMsIGRlbGV0ZVwiXG4gICAgICAgICAgICBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIlxuICAgICAgICAgICAgb25Db25maXJtPXtkZWxldGVSdWxlfVxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRSdWxlVG9EZWxldGUodW5kZWZpbmVkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gaW5WaWV3TW9kZShwYXRobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRobmFtZS5lbmRzV2l0aCgnL3ZpZXcnKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gIGAsXG4gIGJ1dHRvbjogY3NzYFxuICAgIGhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICBgLFxufSk7XG5cbmZ1bmN0aW9uIGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlPzogUnVsZXJSdWxlRFRPKTogcnVsZSBpcyBSdWxlckdyYWZhbmFSdWxlRFRPIHtcbiAgaWYgKCFydWxlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAocnVsZSBhcyBSdWxlckdyYWZhbmFSdWxlRFRPKS5ncmFmYW5hX2FsZXJ0ICE9IG51bGw7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vQW5ub3RhdGlvbkRldGFpbHNGaWVsZCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFubm90YXRpb25zOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlRGV0YWlsc0Fubm90YXRpb25zKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgYW5ub3RhdGlvbnMgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgaWYgKGFubm90YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFubm90YXRpb25zfT5cbiAgICAgIHthbm5vdGF0aW9ucy5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxuICAgICAgICA8QW5ub3RhdGlvbkRldGFpbHNGaWVsZCBrZXk9e2tleX0gYW5ub3RhdGlvbktleT17a2V5fSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgYW5ub3RhdGlvbnM6IGNzc2BcbiAgICBtYXJnaW4tdG9wOiA0NnB4O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEV4cHJlc3Npb25EYXRhc291cmNlVUlEIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL0V4cHJlc3Npb25EYXRhc291cmNlJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSwgUnVsZXNTb3VyY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vRGV0YWlsc0ZpZWxkJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2U7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZURldGFpbHNEYXRhU291cmNlcyhwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHJ1bGVzU291cmNlLCBydWxlIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGRhdGFTb3VyY2VzOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgaWNvbj86IHN0cmluZyB9PiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgICByZXR1cm4gW3sgbmFtZTogcnVsZXNTb3VyY2UubmFtZSwgaWNvbjogcnVsZXNTb3VyY2UubWV0YS5pbmZvLmxvZ29zLnNtYWxsIH1dO1xuICAgIH1cblxuICAgIGlmIChpc0dyYWZhbmFSdWxlclJ1bGUocnVsZS5ydWxlclJ1bGUpKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJ1bGUucnVsZXJSdWxlLmdyYWZhbmFfYWxlcnQ7XG4gICAgICBjb25zdCB1bmlxdWUgPSBkYXRhLnJlZHVjZSgoZGF0YVNvdXJjZXMsIHF1ZXJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRzID0gZ2V0RGF0YVNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MocXVlcnkuZGF0YXNvdXJjZVVpZCk7XG5cbiAgICAgICAgaWYgKCFkcyB8fCBkcy51aWQgPT09IEV4cHJlc3Npb25EYXRhc291cmNlVUlEKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVNvdXJjZXNbZHMubmFtZV0gPSB7IG5hbWU6IGRzLm5hbWUsIGljb246IGRzLm1ldGEuaW5mby5sb2dvcy5zbWFsbCB9O1xuICAgICAgICByZXR1cm4gZGF0YVNvdXJjZXM7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCB7IG5hbWU6IHN0cmluZzsgaWNvbj86IHN0cmluZyB9Pik7XG5cbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHVuaXF1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9LCBbcnVsZSwgcnVsZXNTb3VyY2VdKTtcblxuICBpZiAoZGF0YVNvdXJjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJEYXRhIHNvdXJjZVwiPlxuICAgICAge2RhdGFTb3VyY2VzLm1hcCgoeyBuYW1lLCBpY29uIH0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtuYW1lfT5cbiAgICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aW1nIGFsdD17YCR7bmFtZX0gZGF0YXNvdXJjZSBsb2dvYH0gY2xhc3NOYW1lPXtzdHlsZXMuZGF0YVNvdXJjZUljb259IHNyYz17aWNvbn0gLz57JyAnfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0RldGFpbHNGaWVsZD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIGNvbnN0IHNpemUgPSB0aGVtZS5zcGFjaW5nKDIpO1xuXG4gIHJldHVybiB7XG4gICAgZGF0YVNvdXJjZUljb246IGNzc2BcbiAgICAgIHdpZHRoOiAke3NpemV9O1xuICAgICAgaGVpZ2h0OiAke3NpemV9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgaXNDbG91ZFJ1bGVzU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBEZXRhaWxzRmllbGQgfSBmcm9tICcuLi9EZXRhaWxzRmllbGQnO1xuaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJy4uL0V4cHJlc3Npb24nO1xuXG50eXBlIFByb3BzID0ge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG4gIHJ1bGVzU291cmNlOiBSdWxlc1NvdXJjZTtcbiAgYW5ub3RhdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVEZXRhaWxzRXhwcmVzc2lvbihwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IGFubm90YXRpb25zLCBydWxlc1NvdXJjZSwgcnVsZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcygpO1xuXG4gIGlmICghaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiRXhwcmVzc2lvblwiIGhvcml6b250YWw9e3RydWV9IGNsYXNzTmFtZT17Y3goeyBbc3R5bGVzLmV4cHJSb3ddOiAhIWFubm90YXRpb25zLmxlbmd0aCB9KX0+XG4gICAgICA8RXhwcmVzc2lvbiBleHByZXNzaW9uPXtydWxlLnF1ZXJ5fSBydWxlc1NvdXJjZT17cnVsZXNTb3VyY2V9IC8+XG4gICAgPC9EZXRhaWxzRmllbGQ+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gIGV4cHJSb3c6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiA0NnB4O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBBbGVydCwgUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vRGV0YWlsc0ZpZWxkJztcbmltcG9ydCB7IEFsZXJ0SW5zdGFuY2VzVGFibGUgfSBmcm9tICcuL0FsZXJ0SW5zdGFuY2VzVGFibGUnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnYXBwL3BsdWdpbnMvcGFuZWwvYWxlcnRsaXN0L3R5cGVzJztcbmltcG9ydCB7IEdyYWZhbmFBbGVydFN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBsYWJlbHNNYXRjaE1hdGNoZXJzLCBwYXJzZU1hdGNoZXJzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IHNvcnRBbGVydHMgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9taXNjJztcbmltcG9ydCB7IE1hdGNoZXJGaWx0ZXIgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9NYXRjaGVyRmlsdGVyJztcbmltcG9ydCB7IEFsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcHJvbVJ1bGU/OiBSdWxlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyBwcm9tUnVsZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3F1ZXJ5U3RyaW5nLCBzZXRRdWVyeVN0cmluZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFthbGVydFN0YXRlLCBzZXRBbGVydFN0YXRlXSA9IHVzZVN0YXRlPEdyYWZhbmFBbGVydFN0YXRlPigpO1xuXG4gIC8vIFRoaXMga2V5IGlzIHVzZWQgdG8gZm9yY2UgYSByZXJlbmRlciBvbiB0aGUgaW5wdXRzIHdoZW4gdGhlIGZpbHRlcnMgYXJlIGNsZWFyZWRcbiAgY29uc3QgW2ZpbHRlcktleV0gPSB1c2VTdGF0ZTxudW1iZXI+KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkpO1xuICBjb25zdCBxdWVyeVN0cmluZ0tleSA9IGBxdWVyeVN0cmluZy0ke2ZpbHRlcktleX1gO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGFsZXJ0cyA9IHVzZU1lbW8oXG4gICAgKCk6IEFsZXJ0W10gPT5cbiAgICAgIGlzQWxlcnRpbmdSdWxlKHByb21SdWxlKSAmJiBwcm9tUnVsZS5hbGVydHM/Lmxlbmd0aFxuICAgICAgICA/IGZpbHRlckFsZXJ0cyhxdWVyeVN0cmluZywgYWxlcnRTdGF0ZSwgc29ydEFsZXJ0cyhTb3J0T3JkZXIuSW1wb3J0YW5jZSwgcHJvbVJ1bGUuYWxlcnRzKSlcbiAgICAgICAgOiBbXSxcbiAgICBbcHJvbVJ1bGUsIGFsZXJ0U3RhdGUsIHF1ZXJ5U3RyaW5nXVxuICApO1xuXG4gIGlmICghaXNBbGVydGluZ1J1bGUocHJvbVJ1bGUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJNYXRjaGluZyBpbnN0YW5jZXNcIiBob3Jpem9udGFsPXt0cnVlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuZmxleFJvdywgc3R5bGVzLnNwYWNlQmV0d2Vlbil9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICAgIDxNYXRjaGVyRmlsdGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH1cbiAgICAgICAgICAgIGtleT17cXVlcnlTdHJpbmdLZXl9XG4gICAgICAgICAgICBkZWZhdWx0UXVlcnlTdHJpbmc9e3F1ZXJ5U3RyaW5nfVxuICAgICAgICAgICAgb25GaWx0ZXJDaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UXVlcnlTdHJpbmcodmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucm93Q2hpbGR9XG4gICAgICAgICAgICBzdGF0ZUZpbHRlcj17YWxlcnRTdGF0ZX1cbiAgICAgICAgICAgIG9uU3RhdGVGaWx0ZXJDaGFuZ2U9e3NldEFsZXJ0U3RhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEFsZXJ0SW5zdGFuY2VzVGFibGUgaW5zdGFuY2VzPXthbGVydHN9IC8+XG4gICAgPC9EZXRhaWxzRmllbGQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckFsZXJ0cyhcbiAgYWxlcnRJbnN0YW5jZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGFsZXJ0SW5zdGFuY2VTdGF0ZTogR3JhZmFuYUFsZXJ0U3RhdGUgfCB1bmRlZmluZWQsXG4gIGFsZXJ0czogQWxlcnRbXVxuKTogQWxlcnRbXSB7XG4gIGxldCBmaWx0ZXJlZEFsZXJ0cyA9IFsuLi5hbGVydHNdO1xuICBpZiAoYWxlcnRJbnN0YW5jZUxhYmVsKSB7XG4gICAgY29uc3QgbWF0Y2hlcnMgPSBwYXJzZU1hdGNoZXJzKGFsZXJ0SW5zdGFuY2VMYWJlbCB8fCAnJyk7XG4gICAgZmlsdGVyZWRBbGVydHMgPSBmaWx0ZXJlZEFsZXJ0cy5maWx0ZXIoKHsgbGFiZWxzIH0pID0+IGxhYmVsc01hdGNoTWF0Y2hlcnMobGFiZWxzLCBtYXRjaGVycykpO1xuICB9XG4gIGlmIChhbGVydEluc3RhbmNlU3RhdGUpIHtcbiAgICBmaWx0ZXJlZEFsZXJ0cyA9IGZpbHRlcmVkQWxlcnRzLmZpbHRlcigoYWxlcnQpID0+IHtcbiAgICAgIHJldHVybiBhbGVydC5zdGF0ZSA9PT0gYWxlcnRJbnN0YW5jZVN0YXRlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQWxlcnRzO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZsZXhSb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgIGAsXG4gICAgc3BhY2VCZXR3ZWVuOiBjc3NgXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYCxcbiAgICByb3dDaGlsZDogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEljb24sIFRvb2x0aXAsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvbSB7XG4gIHJ1bGU6IFJ1bGU7XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlSGVhbHRoOiBGQzxQcm9tPiA9ICh7IHJ1bGUgfSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGUpO1xuICBpZiAocnVsZS5oZWFsdGggPT09ICdlcnInIHx8IHJ1bGUuaGVhbHRoID09PSAnZXJyb3InKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwIHRoZW1lPVwiZXJyb3JcIiBjb250ZW50PXtydWxlLmxhc3RFcnJvciB8fCAnTm8gZXJyb3IgbWVzc2FnZSBwcm92aWRlZC4nfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndhcm59PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIC8+XG4gICAgICAgICAgPHNwYW4+ZXJyb3I8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ub29sdGlwPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDw+e3J1bGUuaGVhbHRofTwvPjtcbn07XG5cbmNvbnN0IGdldFN0eWxlID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3YXJuOiBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2FybmluZy50ZXh0fTtcbiAgICAmID4gKiArICoge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIFRvb2x0aXAsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTZXJpYWxpemVkRXJyb3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlLCBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGdldFJ1bGVzRGF0YVNvdXJjZXMsIEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVMaXN0RXJyb3JzKCk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xvc2VkLCBzZXRDbG9zZWRdID0gdXNlTG9jYWxTdG9yYWdlKCdncmFmYW5hLnVuaWZpZWRhbGVydGluZy5oaWRlRXJyb3JzJywgZmFsc2UpO1xuICBjb25zdCBkYXRhU291cmNlQ29uZmlnUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzKTtcbiAgY29uc3QgcHJvbVJ1bGVSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJ1bGVyUnVsZXMpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgZXJyb3JzID0gdXNlTWVtbygoKTogSlNYLkVsZW1lbnRbXSA9PiB7XG4gICAgY29uc3QgW2RhdGFTb3VyY2VDb25maWdFcnJvcnMsIHByb21SZXF1ZXN0RXJyb3JzLCBydWxlclJlcXVlc3RFcnJvcnNdID0gW1xuICAgICAgZGF0YVNvdXJjZUNvbmZpZ1JlcXVlc3RzLFxuICAgICAgcHJvbVJ1bGVSZXF1ZXN0cyxcbiAgICAgIHJ1bGVyUnVsZVJlcXVlc3RzLFxuICAgIF0ubWFwKChyZXF1ZXN0cykgPT5cbiAgICAgIGdldFJ1bGVzRGF0YVNvdXJjZXMoKS5yZWR1Y2U8QXJyYXk8eyBlcnJvcjogU2VyaWFsaXplZEVycm9yOyBkYXRhU291cmNlOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyB9Pj4oXG4gICAgICAgIChyZXN1bHQsIGRhdGFTb3VyY2UpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHJlcXVlc3RzW2RhdGFTb3VyY2UubmFtZV0/LmVycm9yO1xuICAgICAgICAgIGlmIChyZXF1ZXN0c1tkYXRhU291cmNlLm5hbWVdICYmIGVycm9yICYmICFpc1J1bGVyTm90U3VwcG9ydGVkUmVzcG9uc2UocmVxdWVzdHNbZGF0YVNvdXJjZS5uYW1lXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LCB7IGRhdGFTb3VyY2UsIGVycm9yIH1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgICk7XG4gICAgY29uc3QgZ3JhZmFuYVByb21FcnJvciA9IHByb21SdWxlUmVxdWVzdHNbR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRV0/LmVycm9yO1xuICAgIGNvbnN0IGdyYWZhbmFSdWxlckVycm9yID0gcnVsZXJSdWxlUmVxdWVzdHNbR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRV0/LmVycm9yO1xuXG4gICAgY29uc3QgcmVzdWx0OiBKU1guRWxlbWVudFtdID0gW107XG5cbiAgICBpZiAoZ3JhZmFuYVByb21FcnJvcikge1xuICAgICAgcmVzdWx0LnB1c2goPD5GYWlsZWQgdG8gbG9hZCBHcmFmYW5hIHJ1bGVzIHN0YXRlOiB7Z3JhZmFuYVByb21FcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9PC8+KTtcbiAgICB9XG4gICAgaWYgKGdyYWZhbmFSdWxlckVycm9yKSB7XG4gICAgICByZXN1bHQucHVzaCg8PkZhaWxlZCB0byBsb2FkIEdyYWZhbmEgcnVsZXMgY29uZmlnOiB7Z3JhZmFuYVJ1bGVyRXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvci4nfTwvPik7XG4gICAgfVxuXG4gICAgZGF0YVNvdXJjZUNvbmZpZ0Vycm9ycy5mb3JFYWNoKCh7IGRhdGFTb3VyY2UsIGVycm9yIH0pID0+IHtcbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICA8PlxuICAgICAgICAgIEZhaWxlZCB0byBsb2FkIHRoZSBkYXRhIHNvdXJjZSBjb25maWd1cmF0aW9uIGZvcnsnICd9XG4gICAgICAgICAgPGEgaHJlZj17YGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH1gfT57ZGF0YVNvdXJjZS5uYW1lfTwvYT46IHtlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHByb21SZXF1ZXN0RXJyb3JzLmZvckVhY2goKHsgZGF0YVNvdXJjZSwgZXJyb3IgfSkgPT5cbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICA8PlxuICAgICAgICAgIEZhaWxlZCB0byBsb2FkIHJ1bGVzIHN0YXRlIGZyb20gPGEgaHJlZj17YGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH1gfT57ZGF0YVNvdXJjZS5uYW1lfTwvYT46eycgJ31cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvci4nfVxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICApO1xuXG4gICAgcnVsZXJSZXF1ZXN0RXJyb3JzLmZvckVhY2goKHsgZGF0YVNvdXJjZSwgZXJyb3IgfSkgPT5cbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICA8PlxuICAgICAgICAgIEZhaWxlZCB0byBsb2FkIHJ1bGVzIGNvbmZpZyBmcm9tIDxhIGhyZWY9e2BkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9YH0+e2RhdGFTb3VyY2UubmFtZX08L2E+OnsnICd9XG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3IuJ31cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFtkYXRhU291cmNlQ29uZmlnUmVxdWVzdHMsIHByb21SdWxlUmVxdWVzdHMsIHJ1bGVyUnVsZVJlcXVlc3RzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyEhZXJyb3JzLmxlbmd0aCAmJiBjbG9zZWQgJiYgKFxuICAgICAgICA8RXJyb3JTdW1tYXJ5QnV0dG9uIGNvdW50PXtlcnJvcnMubGVuZ3RofSBvbkNsaWNrPXsoKSA9PiBzZXRDbG9zZWQoKGNsb3NlZCkgPT4gIWNsb3NlZCl9IC8+XG4gICAgICApfVxuICAgICAgeyEhZXJyb3JzLmxlbmd0aCAmJiAhY2xvc2VkICYmIChcbiAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJjbG91ZC1ydWxlc3NvdXJjZS1lcnJvcnNcIlxuICAgICAgICAgIHRpdGxlPVwiRXJyb3JzIGxvYWRpbmcgcnVsZXNcIlxuICAgICAgICAgIHNldmVyaXR5PVwiZXJyb3JcIlxuICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBzZXRDbG9zZWQodHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7ZXhwYW5kZWQgJiYgZXJyb3JzLm1hcCgoaXRlbSwgaWR4KSA9PiA8ZGl2IGtleT17aWR4fT57aXRlbX08L2Rpdj4pfVxuICAgICAgICAgIHshZXhwYW5kZWQgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdj57ZXJyb3JzWzBdfTwvZGl2PlxuICAgICAgICAgICAgICB7ZXJyb3JzLmxlbmd0aCA+PSAyICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb3JlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImFuZ2xlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCh0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLmxlbmd0aCAtIDF9IG1vcmUge3BsdXJhbGl6ZSgnZXJyb3InLCBlcnJvcnMubGVuZ3RoIC0gMSl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuaW50ZXJmYWNlIEVycm9yU3VtbWFyeVByb3BzIHtcbiAgY291bnQ6IG51bWJlcjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgRXJyb3JTdW1tYXJ5QnV0dG9uOiBGQzxFcnJvclN1bW1hcnlQcm9wcz4gPSAoeyBjb3VudCwgb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxvYXRSaWdodH0+XG4gICAgICA8VG9vbHRpcCBjb250ZW50PVwiU2hvdyBhbGwgZXJyb3JzXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XG4gICAgICAgIDxCdXR0b24gZmlsbD1cInRleHRcIiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICB7Y291bnQgPiAxID8gPD57Y291bnR9IGVycm9yczwvPiA6IDw+MSBlcnJvcjwvPn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIG1vcmVCdXR0b246IGNzc2BcbiAgICBwYWRkaW5nOiAwO1xuICBgLFxuICBmbG9hdFJpZ2h0OiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSwgaXNHcmFmYW5hUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uL0F1dGhvcml6ZSc7XG5pbXBvcnQgeyBDbG91ZFJ1bGVzIH0gZnJvbSAnLi9DbG91ZFJ1bGVzJztcbmltcG9ydCB7IEdyYWZhbmFSdWxlcyB9IGZyb20gJy4vR3JhZmFuYVJ1bGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG4gIGV4cGFuZEFsbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVMaXN0R3JvdXBWaWV3OiBGQzxQcm9wcz4gPSAoeyBuYW1lc3BhY2VzLCBleHBhbmRBbGwgfSkgPT4ge1xuICBjb25zdCBbZ3JhZmFuYU5hbWVzcGFjZXMsIGNsb3VkTmFtZXNwYWNlc10gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWQgPSBuYW1lc3BhY2VzXG4gICAgICAubWFwKChuYW1lc3BhY2UpID0+ICh7XG4gICAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXBzOiBuYW1lc3BhY2UuZ3JvdXBzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpLFxuICAgICAgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIHNvcnRlZC5maWx0ZXIoKG5zKSA9PiBpc0dyYWZhbmFSdWxlc1NvdXJjZShucy5ydWxlc1NvdXJjZSkpLFxuICAgICAgc29ydGVkLmZpbHRlcigobnMpID0+IGlzQ2xvdWRSdWxlc1NvdXJjZShucy5ydWxlc1NvdXJjZSkpLFxuICAgIF07XG4gIH0sIFtuYW1lc3BhY2VzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbQWNjZXNzQ29udHJvbEFjdGlvbi5BbGVydGluZ1J1bGVSZWFkXX0+XG4gICAgICAgIDxHcmFmYW5hUnVsZXMgbmFtZXNwYWNlcz17Z3JhZmFuYU5hbWVzcGFjZXN9IGV4cGFuZEFsbD17ZXhwYW5kQWxsfSAvPlxuICAgICAgPC9BdXRob3JpemU+XG4gICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1tBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nUnVsZUV4dGVybmFsUmVhZF19PlxuICAgICAgICA8Q2xvdWRSdWxlcyBuYW1lc3BhY2VzPXtjbG91ZE5hbWVzcGFjZXN9IGV4cGFuZEFsbD17ZXhwYW5kQWxsfSAvPlxuICAgICAgPC9BdXRob3JpemU+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFsZXJ0U3RhdGVUb1JlYWRhYmxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGUgfSBmcm9tICcuLi9Db2xsYXBzZVRvZ2dsZSc7XG5pbXBvcnQgeyBSdWxlc1RhYmxlIH0gZnJvbSAnLi9SdWxlc1RhYmxlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZXM6IENvbWJpbmVkUnVsZVtdO1xuICBzdGF0ZTogUHJvbUFsZXJ0aW5nUnVsZVN0YXRlO1xuICBkZWZhdWx0Q29sbGFwc2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVMaXN0U3RhdGVTZWN0aW9uOiBGQzxQcm9wcz4gPSAoeyBydWxlcywgc3RhdGUsIGRlZmF1bHRDb2xsYXBzZWQgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShkZWZhdWx0Q29sbGFwc2VkKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPENvbGxhcHNlVG9nZ2xlXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VUb2dnbGV9XG4gICAgICAgICAgc2l6ZT1cInh4bFwiXG4gICAgICAgICAgaXNDb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICAgICAgICBvblRvZ2dsZT17KCkgPT4gc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpfVxuICAgICAgICAvPlxuICAgICAgICB7YWxlcnRTdGF0ZVRvUmVhZGFibGUoc3RhdGUpfSAoe3J1bGVzLmxlbmd0aH0pXG4gICAgICA8L2g0PlxuICAgICAgeyFjb2xsYXBzZWQgJiYgPFJ1bGVzVGFibGUgY2xhc3NOYW1lPXtzdHlsZXMucnVsZXNUYWJsZX0gcnVsZXM9e3J1bGVzfSBzaG93R3JvdXBDb2x1bW49e3RydWV9IC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb2xsYXBzZVRvZ2dsZTogY3NzYFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGAsXG4gIGhlYWRlcjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG4gIHJ1bGVzVGFibGU6IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSwgQ29tYmluZWRSdWxlTmFtZXNwYWNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IFJ1bGVMaXN0U3RhdGVTZWN0aW9uIH0gZnJvbSAnLi9SdWxlTGlzdFN0YXRlU2VjdGlvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWVzcGFjZXM6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xuICBleHBhbmRBbGw/OiBib29sZWFuO1xufVxuXG50eXBlIEdyb3VwZWRSdWxlcyA9IFJlY29yZDxQcm9tQWxlcnRpbmdSdWxlU3RhdGUsIENvbWJpbmVkUnVsZVtdPjtcblxuZXhwb3J0IGNvbnN0IFJ1bGVMaXN0U3RhdGVWaWV3OiBGQzxQcm9wcz4gPSAoeyBuYW1lc3BhY2VzIH0pID0+IHtcbiAgY29uc3QgZmlsdGVycyA9IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zKHVzZVF1ZXJ5UGFyYW1zKClbMF0pO1xuXG4gIGNvbnN0IGdyb3VwZWRSdWxlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogR3JvdXBlZFJ1bGVzID0ge1xuICAgICAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmddOiBbXSxcbiAgICAgIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmVdOiBbXSxcbiAgICAgIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ106IFtdLFxuICAgIH07XG5cbiAgICBuYW1lc3BhY2VzLmZvckVhY2goKG5hbWVzcGFjZSkgPT5cbiAgICAgIG5hbWVzcGFjZS5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+XG4gICAgICAgIGdyb3VwLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICBpZiAocnVsZS5wcm9tUnVsZSAmJiBpc0FsZXJ0aW5nUnVsZShydWxlLnByb21SdWxlKSkge1xuICAgICAgICAgICAgcmVzdWx0W3J1bGUucHJvbVJ1bGUuc3RhdGVdLnB1c2gocnVsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG5cbiAgICBPYmplY3QudmFsdWVzKHJlc3VsdCkuZm9yRWFjaCgocnVsZXMpID0+IHJ1bGVzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFtuYW1lc3BhY2VzXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsoIWZpbHRlcnMuYWxlcnRTdGF0ZSB8fCBmaWx0ZXJzLmFsZXJ0U3RhdGUgPT09IFByb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmcpICYmIChcbiAgICAgICAgPFJ1bGVMaXN0U3RhdGVTZWN0aW9uIHN0YXRlPXtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuRmlyaW5nfSBydWxlcz17Z3JvdXBlZFJ1bGVzW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmddfSAvPlxuICAgICAgKX1cbiAgICAgIHsoIWZpbHRlcnMuYWxlcnRTdGF0ZSB8fCBmaWx0ZXJzLmFsZXJ0U3RhdGUgPT09IFByb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nKSAmJiAoXG4gICAgICAgIDxSdWxlTGlzdFN0YXRlU2VjdGlvblxuICAgICAgICAgIHN0YXRlPXtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ31cbiAgICAgICAgICBydWxlcz17Z3JvdXBlZFJ1bGVzW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nXX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7KCFmaWx0ZXJzLmFsZXJ0U3RhdGUgfHwgZmlsdGVycy5hbGVydFN0YXRlID09PSBQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmUpICYmIChcbiAgICAgICAgPFJ1bGVMaXN0U3RhdGVTZWN0aW9uXG4gICAgICAgICAgZGVmYXVsdENvbGxhcHNlZD17ZmlsdGVycy5hbGVydFN0YXRlICE9PSBQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmV9XG4gICAgICAgICAgc3RhdGU9e1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZX1cbiAgICAgICAgICBydWxlcz17Z3JvdXBlZFJ1bGVzW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZV19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBTcGlubmVyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlLCBpc1JlY29yZGluZ1J1bGUsIGdldEZpcnN0QWN0aXZlQXQgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyBBbGVydFN0YXRlVGFnIH0gZnJvbSAnLi9BbGVydFN0YXRlVGFnJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xuICBpc0RlbGV0aW5nOiBib29sZWFuO1xuICBpc0NyZWF0aW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZVN0YXRlOiBGQzxQcm9wcz4gPSAoeyBydWxlLCBpc0RlbGV0aW5nLCBpc0NyZWF0aW5nIH0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB1c2VTdHlsZXMyKGdldFN0eWxlKTtcbiAgY29uc3QgeyBwcm9tUnVsZSB9ID0gcnVsZTtcblxuICAvLyByZXR1cm4gaG93IGxvbmcgdGhlIHJ1bGUgaGFzIGJlZW4gaW4gaXQncyBmaXJpbmcgc3RhdGUsIGlmIGFueVxuICBjb25zdCBmb3JUaW1lID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcHJvbVJ1bGUgJiZcbiAgICAgIGlzQWxlcnRpbmdSdWxlKHByb21SdWxlKSAmJlxuICAgICAgcHJvbVJ1bGUuYWxlcnRzPy5sZW5ndGggJiZcbiAgICAgIHByb21SdWxlLnN0YXRlICE9PSBQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmVcbiAgICApIHtcbiAgICAgIC8vIGZpbmQgZWFybGllc3QgYWxlcnRcbiAgICAgIGNvbnN0IGZpcnN0QWN0aXZlQXQgPSBnZXRGaXJzdEFjdGl2ZUF0KHByb21SdWxlKTtcblxuICAgICAgLy8gY2FsY3VsYXRlIHRpbWUgZWxhcHNlZCBmcm9tIGVhcmxpZXN0IGFsZXJ0XG4gICAgICBpZiAoZmlyc3RBY3RpdmVBdCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzcGFuIHRpdGxlPXtTdHJpbmcoZmlyc3RBY3RpdmVBdCl9IGNsYXNzTmFtZT17c3R5bGUuZm9yfT5cbiAgICAgICAgICAgIGZvcnsnICd9XG4gICAgICAgICAgICB7aW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmcoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogZmlyc3RBY3RpdmVBdCxcbiAgICAgICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIFtwcm9tUnVsZSwgc3R5bGVdKTtcblxuICBpZiAoaXNEZWxldGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICBkZWxldGluZ1xuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChpc0NyZWF0aW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIGNyZWF0aW5nXG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9IGVsc2UgaWYgKHByb21SdWxlICYmIGlzQWxlcnRpbmdSdWxlKHByb21SdWxlKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICA8QWxlcnRTdGF0ZVRhZyBzdGF0ZT17cHJvbVJ1bGUuc3RhdGV9IC8+XG4gICAgICAgIHtmb3JUaW1lfVxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChwcm9tUnVsZSAmJiBpc1JlY29yZGluZ1J1bGUocHJvbVJ1bGUpKSB7XG4gICAgcmV0dXJuIDw+UmVjb3JkaW5nIHJ1bGU8Lz47XG4gIH1cbiAgcmV0dXJuIDw+bi9hPC8+O1xufTtcblxuY29uc3QgZ2V0U3R5bGUgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGZvcjogY3NzYFxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IENvbWJpbmVkUnVsZSwgQ29tYmluZWRSdWxlR3JvdXAsIENvbWJpbmVkUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIEZyYWdtZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzUmVjb3JkaW5nUnVsZSwgaXNSZWNvcmRpbmdSdWxlclJ1bGUgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyBTdGF0ZUNvbG9yZWRUZXh0IH0gZnJvbSAnLi4vU3RhdGVDb2xvcmVkVGV4dCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNob3dJbmFjdGl2ZT86IGJvb2xlYW47XG4gIHNob3dSZWNvcmRpbmc/OiBib29sZWFuO1xuICBncm91cD86IENvbWJpbmVkUnVsZUdyb3VwO1xuICBuYW1lc3BhY2VzPzogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG59XG5cbmNvbnN0IGVtcHR5U3RhdHMgPSB7XG4gIHRvdGFsOiAwLFxuICByZWNvcmRpbmc6IDAsXG4gIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuRmlyaW5nXTogMCxcbiAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nXTogMCxcbiAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZV06IDAsXG4gIGVycm9yOiAwLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IFJ1bGVTdGF0czogRkM8UHJvcHM+ID0gKHsgc2hvd0luYWN0aXZlLCBzaG93UmVjb3JkaW5nLCBncm91cCwgbmFtZXNwYWNlcyB9KSA9PiB7XG4gIGNvbnN0IGNhbGN1bGF0ZWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdGF0cyA9IHsgLi4uZW1wdHlTdGF0cyB9O1xuICAgIGNvbnN0IGNhbGNSdWxlID0gKHJ1bGU6IENvbWJpbmVkUnVsZSkgPT4ge1xuICAgICAgaWYgKHJ1bGUucHJvbVJ1bGUgJiYgaXNBbGVydGluZ1J1bGUocnVsZS5wcm9tUnVsZSkpIHtcbiAgICAgICAgc3RhdHNbcnVsZS5wcm9tUnVsZS5zdGF0ZV0gKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChydWxlLnByb21SdWxlPy5oZWFsdGggPT09ICdlcnInIHx8IHJ1bGUucHJvbVJ1bGU/LmhlYWx0aCA9PT0gJ2Vycm9yJykge1xuICAgICAgICBzdGF0cy5lcnJvciArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAocnVsZS5wcm9tUnVsZSAmJiBpc1JlY29yZGluZ1J1bGUocnVsZS5wcm9tUnVsZSkpIHx8XG4gICAgICAgIChydWxlLnJ1bGVyUnVsZSAmJiBpc1JlY29yZGluZ1J1bGVyUnVsZShydWxlLnJ1bGVyUnVsZSkpXG4gICAgICApIHtcbiAgICAgICAgc3RhdHMucmVjb3JkaW5nICs9IDE7XG4gICAgICB9XG4gICAgICBzdGF0cy50b3RhbCArPSAxO1xuICAgIH07XG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICBncm91cC5ydWxlcy5mb3JFYWNoKGNhbGNSdWxlKTtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZXMpIHtcbiAgICAgIG5hbWVzcGFjZXMuZm9yRWFjaCgobmFtZXNwYWNlKSA9PiBuYW1lc3BhY2UuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiBncm91cC5ydWxlcy5mb3JFYWNoKGNhbGNSdWxlKSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdHM7XG4gIH0sIFtncm91cCwgbmFtZXNwYWNlc10pO1xuXG4gIGNvbnN0IHN0YXRzQ29tcG9uZW50czogUmVhY3QuUmVhY3ROb2RlW10gPSBbXTtcbiAgaWYgKGNhbGN1bGF0ZWRbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZ10pIHtcbiAgICBzdGF0c0NvbXBvbmVudHMucHVzaChcbiAgICAgIDxTdGF0ZUNvbG9yZWRUZXh0IGtleT1cImZpcmluZ1wiIHN0YXR1cz17UHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZ30+XG4gICAgICAgIHtjYWxjdWxhdGVkW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmddfSBmaXJpbmdcbiAgICAgIDwvU3RhdGVDb2xvcmVkVGV4dD5cbiAgICApO1xuICB9XG4gIGlmIChjYWxjdWxhdGVkLmVycm9yKSB7XG4gICAgc3RhdHNDb21wb25lbnRzLnB1c2goXG4gICAgICA8U3RhdGVDb2xvcmVkVGV4dCBrZXk9XCJlcnJvcnNcIiBzdGF0dXM9e1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmd9PlxuICAgICAgICB7Y2FsY3VsYXRlZC5lcnJvcn0gZXJyb3JzXG4gICAgICA8L1N0YXRlQ29sb3JlZFRleHQ+XG4gICAgKTtcbiAgfVxuICBpZiAoY2FsY3VsYXRlZFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ10pIHtcbiAgICBzdGF0c0NvbXBvbmVudHMucHVzaChcbiAgICAgIDxTdGF0ZUNvbG9yZWRUZXh0IGtleT1cInBlbmRpbmdcIiBzdGF0dXM9e1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nfT5cbiAgICAgICAge2NhbGN1bGF0ZWRbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLlBlbmRpbmddfSBwZW5kaW5nXG4gICAgICA8L1N0YXRlQ29sb3JlZFRleHQ+XG4gICAgKTtcbiAgfVxuICBpZiAoc2hvd0luYWN0aXZlICYmIGNhbGN1bGF0ZWRbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkluYWN0aXZlXSkge1xuICAgIHN0YXRzQ29tcG9uZW50cy5wdXNoKFxuICAgICAgPFN0YXRlQ29sb3JlZFRleHQga2V5PVwiaW5hY3RpdmVcIiBzdGF0dXM9XCJuZXV0cmFsXCI+XG4gICAgICAgIHtjYWxjdWxhdGVkW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZV19IG5vcm1hbFxuICAgICAgPC9TdGF0ZUNvbG9yZWRUZXh0PlxuICAgICk7XG4gIH1cbiAgaWYgKHNob3dSZWNvcmRpbmcgJiYgY2FsY3VsYXRlZC5yZWNvcmRpbmcpIHtcbiAgICBzdGF0c0NvbXBvbmVudHMucHVzaChcbiAgICAgIDxTdGF0ZUNvbG9yZWRUZXh0IGtleT1cInJlY29yZGluZ1wiIHN0YXR1cz1cIm5ldXRyYWxcIj5cbiAgICAgICAge2NhbGN1bGF0ZWQucmVjb3JkaW5nfSByZWNvcmRpbmdcbiAgICAgIDwvU3RhdGVDb2xvcmVkVGV4dD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+XG4gICAgICAgIHtjYWxjdWxhdGVkLnRvdGFsfSB7cGx1cmFsaXplKCdydWxlJywgY2FsY3VsYXRlZC50b3RhbCl9XG4gICAgICA8L3NwYW4+XG4gICAgICB7ISFzdGF0c0NvbXBvbmVudHMubGVuZ3RoICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3Bhbj46IDwvc3Bhbj5cbiAgICAgICAgICB7c3RhdHNDb21wb25lbnRzLnJlZHVjZTxSZWFjdC5SZWFjdE5vZGVbXT4oXG4gICAgICAgICAgICAocHJldiwgY3VyciwgaWR4KSA9PlxuICAgICAgICAgICAgICBwcmV2Lmxlbmd0aFxuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBwcmV2LFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiwgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PixcbiAgICAgICAgICAgICAgICAgICAgY3VycixcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IFtjdXJyXSxcbiAgICAgICAgICAgIFtdXG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgSWNvbiwgSW5wdXQsIExhYmVsLCBSYWRpb0J1dHRvbkdyb3VwLCBUb29sdGlwLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgR3JhZmFuYVRoZW1lLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBQcm9tQWxlcnRpbmdSdWxlU3RhdGUsIFByb21SdWxlVHlwZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCB7IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGlja2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBhbGVydFN0YXRlVG9SZWFkYWJsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcblxuY29uc3QgVmlld09wdGlvbnM6IFNlbGVjdGFibGVWYWx1ZVtdID0gW1xuICB7XG4gICAgaWNvbjogJ2xpc3QtdWwnLFxuICAgIGxhYmVsOiAnTGlzdCcsXG4gICAgdmFsdWU6ICdsaXN0JyxcbiAgfSxcbiAge1xuICAgIGljb246ICdmb2xkZXInLFxuICAgIGxhYmVsOiAnR3JvdXBlZCcsXG4gICAgdmFsdWU6ICdncm91cGVkJyxcbiAgfSxcbiAge1xuICAgIGljb246ICdoZWFydC1yYXRlJyxcbiAgICBsYWJlbDogJ1N0YXRlJyxcbiAgICB2YWx1ZTogJ3N0YXRlJyxcbiAgfSxcbl07XG5cbmNvbnN0IFJ1bGVUeXBlT3B0aW9uczogU2VsZWN0YWJsZVZhbHVlW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ0FsZXJ0ICcsXG4gICAgdmFsdWU6IFByb21SdWxlVHlwZS5BbGVydGluZyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUmVjb3JkaW5nICcsXG4gICAgdmFsdWU6IFByb21SdWxlVHlwZS5SZWNvcmRpbmcsXG4gIH0sXG5dO1xuXG5jb25zdCBSdWxlc0ZpbHRlciA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zLCBzZXRRdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICAvLyBUaGlzIGtleSBpcyB1c2VkIHRvIGZvcmNlIGEgcmVyZW5kZXIgb24gdGhlIGlucHV0cyB3aGVuIHRoZSBmaWx0ZXJzIGFyZSBjbGVhcmVkXG4gIGNvbnN0IFtmaWx0ZXJLZXksIHNldEZpbHRlcktleV0gPSB1c2VTdGF0ZTxudW1iZXI+KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkpO1xuICBjb25zdCBkYXRhU291cmNlS2V5ID0gYGRhdGFTb3VyY2UtJHtmaWx0ZXJLZXl9YDtcbiAgY29uc3QgcXVlcnlTdHJpbmdLZXkgPSBgcXVlcnlTdHJpbmctJHtmaWx0ZXJLZXl9YDtcblxuICBjb25zdCB7IGRhdGFTb3VyY2UsIGFsZXJ0U3RhdGUsIHF1ZXJ5U3RyaW5nLCBydWxlVHlwZSB9ID0gZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMocXVlcnlQYXJhbXMpO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCBzdGF0ZU9wdGlvbnMgPSBPYmplY3QuZW50cmllcyhQcm9tQWxlcnRpbmdSdWxlU3RhdGUpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgIGxhYmVsOiBhbGVydFN0YXRlVG9SZWFkYWJsZSh2YWx1ZSksXG4gICAgdmFsdWUsXG4gIH0pKTtcblxuICBjb25zdCBoYW5kbGVEYXRhU291cmNlQ2hhbmdlID0gKGRhdGFTb3VyY2VWYWx1ZTogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IGRhdGFTb3VyY2U6IGRhdGFTb3VyY2VWYWx1ZS5uYW1lIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRGF0YVNvdXJjZSA9ICgpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IGRhdGFTb3VyY2U6IG51bGwgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUXVlcnlTdHJpbmdDaGFuZ2UgPSBkZWJvdW5jZSgoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IHF1ZXJ5U3RyaW5nOiB0YXJnZXQudmFsdWUgfHwgbnVsbCB9KTtcbiAgfSwgNjAwKTtcblxuICBjb25zdCBoYW5kbGVBbGVydFN0YXRlQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IGFsZXJ0U3RhdGU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZpZXdDaGFuZ2UgPSAodmlldzogc3RyaW5nKSA9PiB7XG4gICAgc2V0UXVlcnlQYXJhbXMoeyB2aWV3IH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJ1bGVUeXBlQ2hhbmdlID0gKHJ1bGVUeXBlOiBQcm9tUnVsZVR5cGUpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IHJ1bGVUeXBlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsZWFyRmlsdGVyc0NsaWNrID0gKCkgPT4ge1xuICAgIHNldFF1ZXJ5UGFyYW1zKHtcbiAgICAgIGFsZXJ0U3RhdGU6IG51bGwsXG4gICAgICBxdWVyeVN0cmluZzogbnVsbCxcbiAgICAgIGRhdGFTb3VyY2U6IG51bGwsXG4gICAgICBydWxlVHlwZTogbnVsbCxcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZpbHRlcktleShmaWx0ZXJLZXkgKyAxKSwgMTAwKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hJY29uID0gPEljb24gbmFtZT17J3NlYXJjaCd9IC8+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdpZHRofSBsYWJlbD1cIlNlYXJjaCBieSBkYXRhIHNvdXJjZVwiPlxuICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgIGtleT17ZGF0YVNvdXJjZUtleX1cbiAgICAgICAgICBhbGVydGluZ1xuICAgICAgICAgIG5vRGVmYXVsdFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWxsIGRhdGEgc291cmNlc1wiXG4gICAgICAgICAgY3VycmVudD17ZGF0YVNvdXJjZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICBvbkNsZWFyPXtjbGVhckRhdGFTb3VyY2V9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93LCBzdHlsZXMuc3BhY2VCZXR3ZWVuKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH1cbiAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgPExhYmVsPlxuICAgICAgICAgICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggYnkgbGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyIHJ1bGVzIGFuZCBhbGVydHMgdXNpbmcgbGFiZWwgcXVlcnlpbmcsIGV4OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+e2B7c2V2ZXJpdHk9XCJjcml0aWNhbFwiLCBpbnN0YW5jZT1+XCJjbHVzdGVyLXVzLS4rXCJ9YH08L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImluZm8tY2lyY2xlXCIgc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBrZXk9e3F1ZXJ5U3RyaW5nS2V5fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdpZHRofVxuICAgICAgICAgICAgICBwcmVmaXg9e3NlYXJjaEljb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdWVyeVN0cmluZ0NoYW5nZX1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtxdWVyeVN0cmluZ31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInNlYXJjaC1xdWVyeS1pbnB1dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH0+XG4gICAgICAgICAgICA8TGFiZWw+U3RhdGU8L0xhYmVsPlxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXAgb3B0aW9ucz17c3RhdGVPcHRpb25zfSB2YWx1ZT17YWxlcnRTdGF0ZX0gb25DaGFuZ2U9e2hhbmRsZUFsZXJ0U3RhdGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH0+XG4gICAgICAgICAgICA8TGFiZWw+UnVsZSB0eXBlPC9MYWJlbD5cbiAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1J1bGVUeXBlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3J1bGVUeXBlIGFzIFByb21SdWxlVHlwZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJ1bGVUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfT5cbiAgICAgICAgICAgIDxMYWJlbD5WaWV3IGFzPC9MYWJlbD5cbiAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1ZpZXdPcHRpb25zfVxuICAgICAgICAgICAgICB2YWx1ZT17U3RyaW5nKHF1ZXJ5UGFyYW1zWyd2aWV3J10gPz8gVmlld09wdGlvbnNbMF0udmFsdWUpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVmlld0NoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KGRhdGFTb3VyY2UgfHwgYWxlcnRTdGF0ZSB8fCBxdWVyeVN0cmluZyB8fCBydWxlVHlwZSkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyQnV0dG9ufVxuICAgICAgICAgICAgICBmdWxsV2lkdGg9e2ZhbHNlfVxuICAgICAgICAgICAgICBpY29uPVwidGltZXNcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJGaWx0ZXJzQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsZWFyIGZpbHRlcnNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBpbnB1dFdpZHRoOiBjc3NgXG4gICAgICB3aWR0aDogMzQwcHg7XG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgYCxcbiAgICBmbGV4Um93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGAsXG4gICAgc3BhY2VCZXR3ZWVuOiBjc3NgXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYCxcbiAgICByb3dDaGlsZDogY3NzYFxuICAgICAgbWFyZ2luOiAwICR7dGhlbWUuc3BhY2luZy5zbX0gMCAwO1xuICAgIGAsXG4gICAgY2xlYXJCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bGVzRmlsdGVyO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhZGdlLCBDb25maXJtTW9kYWwsIEhvcml6b250YWxHcm91cCwgSWNvbiwgU3Bpbm5lciwgVG9vbHRpcCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQga2JuIGZyb20gJ2FwcC9jb3JlL3V0aWxzL2tibic7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZUdyb3VwLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUZvbGRlciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUZvbGRlcic7XG5pbXBvcnQgeyB1c2VIYXNSdWxlciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUhhc1J1bGVyJztcbmltcG9ydCB7IGRlbGV0ZVJ1bGVzR3JvdXBBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsIGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNGZWRlcmF0ZWRSdWxlR3JvdXAsIGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IENvbGxhcHNlVG9nZ2xlIH0gZnJvbSAnLi4vQ29sbGFwc2VUb2dnbGUnO1xuaW1wb3J0IHsgUnVsZUxvY2F0aW9uIH0gZnJvbSAnLi4vUnVsZUxvY2F0aW9uJztcbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuL0FjdGlvbkljb24nO1xuaW1wb3J0IHsgRWRpdENsb3VkR3JvdXBNb2RhbCB9IGZyb20gJy4vRWRpdENsb3VkR3JvdXBNb2RhbCc7XG5pbXBvcnQgeyBSdWxlc1RhYmxlIH0gZnJvbSAnLi9SdWxlc1RhYmxlJztcbmltcG9ydCB7IFJ1bGVTdGF0cyB9IGZyb20gJy4vUnVsZVN0YXRzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2U7XG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cDtcbiAgZXhwYW5kQWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZXNHcm91cDogRkM8UHJvcHM+ID0gUmVhY3QubWVtbygoeyBncm91cCwgbmFtZXNwYWNlLCBleHBhbmRBbGwgfSkgPT4ge1xuICBjb25zdCB7IHJ1bGVzU291cmNlIH0gPSBuYW1lc3BhY2U7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IFtpc0VkaXRpbmdHcm91cCwgc2V0SXNFZGl0aW5nR3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEZWxldGluZ0dyb3VwLCBzZXRJc0RlbGV0aW5nR3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldElzQ29sbGFwc2VkXSA9IHVzZVN0YXRlKCFleHBhbmRBbGwpO1xuXG4gIGNvbnN0IGNhbkVkaXRDbG91ZFJ1bGVzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWxlcnRpbmdSdWxlRXh0ZXJuYWxXcml0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0NvbGxhcHNlZCghZXhwYW5kQWxsKTtcbiAgfSwgW2V4cGFuZEFsbF0pO1xuXG4gIGNvbnN0IGhhc1J1bGVyID0gdXNlSGFzUnVsZXIoKTtcbiAgY29uc3QgcnVsZXJSdWxlID0gZ3JvdXAucnVsZXNbMF0/LnJ1bGVyUnVsZTtcbiAgY29uc3QgZm9sZGVyVUlEID0gKHJ1bGVyUnVsZSAmJiBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZXJSdWxlKSAmJiBydWxlclJ1bGUuZ3JhZmFuYV9hbGVydC5uYW1lc3BhY2VfdWlkKSB8fCB1bmRlZmluZWQ7XG4gIGNvbnN0IHsgZm9sZGVyIH0gPSB1c2VGb2xkZXIoZm9sZGVyVUlEKTtcblxuICAvLyBncm91cCBcImlzIGRlbGV0aW5nXCIgaWYgcnVsZXMgc291cmNlIGhhcyBydWxlciwgYnV0IHRoaXMgZ3JvdXAgaGFzIG5vIHJ1bGVzIHRoYXQgYXJlIGluIHJ1bGVyXG4gIGNvbnN0IGlzRGVsZXRpbmcgPSBoYXNSdWxlcihydWxlc1NvdXJjZSkgJiYgIWdyb3VwLnJ1bGVzLmZpbmQoKHJ1bGUpID0+ICEhcnVsZS5ydWxlclJ1bGUpO1xuICBjb25zdCBpc0ZlZGVyYXRlZCA9IGlzRmVkZXJhdGVkUnVsZUdyb3VwKGdyb3VwKTtcblxuICBjb25zdCBkZWxldGVHcm91cCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChkZWxldGVSdWxlc0dyb3VwQWN0aW9uKG5hbWVzcGFjZSwgZ3JvdXApKTtcbiAgICBzZXRJc0RlbGV0aW5nR3JvdXAoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGlvbkljb25zOiBSZWFjdC5SZWFjdE5vZGVbXSA9IFtdO1xuXG4gIC8vIGZvciBncmFmYW5hLCBsaW5rIHRvIGZvbGRlciB2aWV3c1xuICBpZiAoaXNEZWxldGluZykge1xuICAgIGFjdGlvbkljb25zLnB1c2goXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGtleT1cImlzLWRlbGV0aW5nXCI+XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIGRlbGV0aW5nXG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9IGVsc2UgaWYgKHJ1bGVzU291cmNlID09PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSB7XG4gICAgaWYgKGZvbGRlclVJRCkge1xuICAgICAgY29uc3QgYmFzZVVybCA9IGAvZGFzaGJvYXJkcy9mLyR7Zm9sZGVyVUlEfS8ke2tibi5zbHVnaWZ5Rm9yVXJsKG5hbWVzcGFjZS5uYW1lKX1gO1xuICAgICAgaWYgKGZvbGRlcj8uY2FuU2F2ZSkge1xuICAgICAgICBhY3Rpb25JY29ucy5wdXNoKFxuICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiZWRpdCBmb2xkZXJcIlxuICAgICAgICAgICAga2V5PVwiZWRpdFwiXG4gICAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICAgIHRvb2x0aXA9XCJlZGl0IGZvbGRlclwiXG4gICAgICAgICAgICB0bz17YmFzZVVybCArICcvc2V0dGluZ3MnfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChmb2xkZXI/LmNhbkFkbWluKSB7XG4gICAgICAgIGFjdGlvbkljb25zLnB1c2goXG4gICAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtYW5hZ2UgcGVybWlzc2lvbnNcIlxuICAgICAgICAgICAga2V5PVwibWFuYWdlLXBlcm1zXCJcbiAgICAgICAgICAgIGljb249XCJsb2NrXCJcbiAgICAgICAgICAgIHRvb2x0aXA9XCJtYW5hZ2UgcGVybWlzc2lvbnNcIlxuICAgICAgICAgICAgdG89e2Jhc2VVcmwgKyAnL3Blcm1pc3Npb25zJ31cbiAgICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGNhbkVkaXRDbG91ZFJ1bGVzICYmIGhhc1J1bGVyKHJ1bGVzU291cmNlKSkge1xuICAgIGlmICghaXNGZWRlcmF0ZWQpIHtcbiAgICAgIGFjdGlvbkljb25zLnB1c2goXG4gICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImVkaXQgcnVsZSBncm91cFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJlZGl0LWdyb3VwXCJcbiAgICAgICAgICBrZXk9XCJlZGl0XCJcbiAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICB0b29sdGlwPVwiZWRpdCBydWxlIGdyb3VwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmdHcm91cCh0cnVlKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgYWN0aW9uSWNvbnMucHVzaChcbiAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJkZWxldGUgcnVsZSBncm91cFwiXG4gICAgICAgIGRhdGEtdGVzdGlkPVwiZGVsZXRlLWdyb3VwXCJcbiAgICAgICAga2V5PVwiZGVsZXRlLWdyb3VwXCJcbiAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgIHRvb2x0aXA9XCJkZWxldGUgcnVsZSBncm91cFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRGVsZXRpbmdHcm91cCh0cnVlKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIC8vIHVuZ3JvdXBlZCBydWxlcyBhcmUgcnVsZXMgdGhhdCBhcmUgaW4gdGhlIFwiZGVmYXVsdFwiIGdyb3VwIG5hbWVcbiAgY29uc3QgaXNVbmdyb3VwZWQgPSBncm91cC5uYW1lID09PSAnZGVmYXVsdCc7XG4gIGNvbnN0IGdyb3VwTmFtZSA9IGlzVW5ncm91cGVkID8gKFxuICAgIDxSdWxlTG9jYXRpb24gbmFtZXNwYWNlPXtuYW1lc3BhY2UubmFtZX0gLz5cbiAgKSA6IChcbiAgICA8UnVsZUxvY2F0aW9uIG5hbWVzcGFjZT17bmFtZXNwYWNlLm5hbWV9IGdyb3VwPXtncm91cC5uYW1lfSAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSBkYXRhLXRlc3RpZD1cInJ1bGUtZ3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfSBkYXRhLXRlc3RpZD1cInJ1bGUtZ3JvdXAtaGVhZGVyXCI+XG4gICAgICAgIDxDb2xsYXBzZVRvZ2dsZVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxhcHNlVG9nZ2xlfVxuICAgICAgICAgIGlzQ29sbGFwc2VkPXtpc0NvbGxhcHNlZH1cbiAgICAgICAgICBvblRvZ2dsZT17c2V0SXNDb2xsYXBzZWR9XG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJncm91cC1jb2xsYXBzZS10b2dnbGVcIlxuICAgICAgICAvPlxuICAgICAgICA8SWNvbiBuYW1lPXtpc0NvbGxhcHNlZCA/ICdmb2xkZXInIDogJ2ZvbGRlci1vcGVuJ30gLz5cbiAgICAgICAge2lzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgJiYgKFxuICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnQ9e3J1bGVzU291cmNlLm5hbWV9IHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9e3J1bGVzU291cmNlLm1ldGEubmFtZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YVNvdXJjZUljb259XG4gICAgICAgICAgICAgIHNyYz17cnVsZXNTb3VyY2UubWV0YS5pbmZvLmxvZ29zLnNtYWxsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICl9XG4gICAgICAgIDxoNiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgICB7aXNGZWRlcmF0ZWQgJiYgPEJhZGdlIGNvbG9yPVwicHVycGxlXCIgdGV4dD1cIkZlZGVyYXRlZFwiIC8+fSB7Z3JvdXBOYW1lfVxuICAgICAgICA8L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwYWNlcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJTdGF0c30+XG4gICAgICAgICAgPFJ1bGVTdGF0cyBzaG93SW5hY3RpdmU9e2ZhbHNlfSBncm91cD17Z3JvdXB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ISFhY3Rpb25JY29ucy5sZW5ndGggJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnNTZXBhcmF0b3J9Pnw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uSWNvbnN9PnthY3Rpb25JY29uc308L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgeyFpc0NvbGxhcHNlZCAmJiAoXG4gICAgICAgIDxSdWxlc1RhYmxlIHNob3dTdW1tYXJ5Q29sdW1uPXt0cnVlfSBjbGFzc05hbWU9e3N0eWxlcy5ydWxlc1RhYmxlfSBzaG93R3VpZGVsaW5lcz17dHJ1ZX0gcnVsZXM9e2dyb3VwLnJ1bGVzfSAvPlxuICAgICAgKX1cbiAgICAgIHtpc0VkaXRpbmdHcm91cCAmJiAoXG4gICAgICAgIDxFZGl0Q2xvdWRHcm91cE1vZGFsIGdyb3VwPXtncm91cH0gbmFtZXNwYWNlPXtuYW1lc3BhY2V9IG9uQ2xvc2U9eygpID0+IHNldElzRWRpdGluZ0dyb3VwKGZhbHNlKX0gLz5cbiAgICAgICl9XG4gICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNEZWxldGluZ0dyb3VwfVxuICAgICAgICB0aXRsZT1cIkRlbGV0ZSBncm91cFwiXG4gICAgICAgIGJvZHk9e1xuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBEZWxldGluZyB0aGlzIGdyb3VwIHdpbGwgcGVybWFuZW50bHkgcmVtb3ZlIHRoZSBncm91cFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBhbmQge2dyb3VwLnJ1bGVzLmxlbmd0aH0gYWxlcnQge3BsdXJhbGl6ZSgncnVsZScsIGdyb3VwLnJ1bGVzLmxlbmd0aCl9IGJlbG9uZ2luZyB0byBpdC5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGdyb3VwP1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIG9uQ29uZmlybT17ZGVsZXRlR3JvdXB9XG4gICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0SXNEZWxldGluZ0dyb3VwKGZhbHNlKX1cbiAgICAgICAgY29uZmlybVRleHQ9XCJEZWxldGVcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5SdWxlc0dyb3VwLmRpc3BsYXlOYW1lID0gJ1J1bGVzR3JvdXAnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICB9XG4gIGAsXG4gIGhlYWRlcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxKX0gJHt0aGVtZS5zcGFjaW5nKDEpfSAke3RoZW1lLnNwYWNpbmcoMSl9IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgYCxcbiAgaGVhZGVyU3RhdHM6IGNzc2BcbiAgICBzcGFuIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgJHt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpfSB7XG4gICAgICBvcmRlcjogMjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbiAgaGVhZGluZzogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIGAsXG4gIHNwYWNlcjogY3NzYFxuICAgIGZsZXg6IDE7XG4gIGAsXG4gIGNvbGxhcHNlVG9nZ2xlOiBjc3NgXG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogLSR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgbWFyZ2luLWJvdHRvbTogLSR7dGhlbWUuc3BhY2luZygxKX07XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIGAsXG4gIGRhdGFTb3VyY2VJY29uOiBjc3NgXG4gICAgd2lkdGg6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgaGVpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICBgLFxuICBkYXRhU291cmNlT3JpZ2luOiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuZGlzYWJsZWR9O1xuICBgLFxuICBhY3Rpb25zU2VwYXJhdG9yOiBjc3NgXG4gICAgbWFyZ2luOiAwICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG4gIGFjdGlvbkljb25zOiBjc3NgXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgfVxuICBgLFxuICBydWxlc1RhYmxlOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgUnVsZURldGFpbHMgfSBmcm9tICcuL1J1bGVEZXRhaWxzJztcbmltcG9ydCB7IHVzZUhhc1J1bGVyIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSGFzUnVsZXInO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBSdWxlU3RhdGUgfSBmcm9tICcuL1J1bGVTdGF0ZSc7XG5pbXBvcnQgeyBSdWxlSGVhbHRoIH0gZnJvbSAnLi9SdWxlSGVhbHRoJztcbmltcG9ydCB7IER5bmFtaWNUYWJsZSwgRHluYW1pY1RhYmxlQ29sdW1uUHJvcHMsIER5bmFtaWNUYWJsZUl0ZW1Qcm9wcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZSc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzJztcbmltcG9ydCB7IFJ1bGVMb2NhdGlvbiB9IGZyb20gJy4uL1J1bGVMb2NhdGlvbic7XG5cbnR5cGUgUnVsZVRhYmxlQ29sdW1uUHJvcHMgPSBEeW5hbWljVGFibGVDb2x1bW5Qcm9wczxDb21iaW5lZFJ1bGU+O1xudHlwZSBSdWxlVGFibGVJdGVtUHJvcHMgPSBEeW5hbWljVGFibGVJdGVtUHJvcHM8Q29tYmluZWRSdWxlPjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZXM6IENvbWJpbmVkUnVsZVtdO1xuICBzaG93R3VpZGVsaW5lcz86IGJvb2xlYW47XG4gIHNob3dHcm91cENvbHVtbj86IGJvb2xlYW47XG4gIHNob3dTdW1tYXJ5Q29sdW1uPzogYm9vbGVhbjtcbiAgZW1wdHlNZXNzYWdlPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlc1RhYmxlOiBGQzxQcm9wcz4gPSAoe1xuICBydWxlcyxcbiAgY2xhc3NOYW1lLFxuICBzaG93R3VpZGVsaW5lcyA9IGZhbHNlLFxuICBlbXB0eU1lc3NhZ2UgPSAnTm8gcnVsZXMgZm91bmQuJyxcbiAgc2hvd0dyb3VwQ29sdW1uID0gZmFsc2UsXG4gIHNob3dTdW1tYXJ5Q29sdW1uID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB3cmFwcGVyQ2xhc3MgPSBjeChzdHlsZXMud3JhcHBlciwgY2xhc3NOYW1lLCB7IFtzdHlsZXMud3JhcHBlck1hcmdpbl06IHNob3dHdWlkZWxpbmVzIH0pO1xuXG4gIGNvbnN0IGl0ZW1zID0gdXNlTWVtbygoKTogUnVsZVRhYmxlSXRlbVByb3BzW10gPT4ge1xuICAgIGNvbnN0IHNlZW5LZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHJldHVybiBydWxlcy5tYXAoKHJ1bGUsIHJ1bGVJZHgpID0+IHtcbiAgICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShbcnVsZS5wcm9tUnVsZT8udHlwZSwgcnVsZS5sYWJlbHMsIHJ1bGUucXVlcnksIHJ1bGUubmFtZSwgcnVsZS5hbm5vdGF0aW9uc10pO1xuICAgICAgaWYgKHNlZW5LZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAga2V5ICs9IGAtJHtydWxlSWR4fWA7XG4gICAgICB9XG4gICAgICBzZWVuS2V5cy5wdXNoKGtleSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDoga2V5LFxuICAgICAgICBkYXRhOiBydWxlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwgW3J1bGVzXSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IHVzZUNvbHVtbnMoc2hvd1N1bW1hcnlDb2x1bW4sIHNob3dHcm91cENvbHVtbik7XG5cbiAgaWYgKCFydWxlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2N4KHdyYXBwZXJDbGFzcywgc3R5bGVzLmVtcHR5TWVzc2FnZSl9PntlbXB0eU1lc3NhZ2V9PC9kaXY+O1xuICB9XG5cbiAgY29uc3QgVGFibGVDb21wb25lbnQgPSBzaG93R3VpZGVsaW5lcyA/IER5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzIDogRHluYW1pY1RhYmxlO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJDbGFzc30gZGF0YS10ZXN0aWQ9XCJydWxlcy10YWJsZVwiPlxuICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgIGNvbHM9e2NvbHVtbnN9XG4gICAgICAgIGlzRXhwYW5kYWJsZT17dHJ1ZX1cbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnQ9eyh7IGRhdGE6IHJ1bGUgfSkgPT4gPFJ1bGVEZXRhaWxzIHJ1bGU9e3J1bGV9IC8+fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXJNYXJnaW46IGNzc2BcbiAgICAke3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpfSB7XG4gICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICB9XG4gIGAsXG4gIGVtcHR5TWVzc2FnZTogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHdyYXBwZXI6IGNzc2BcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gIGAsXG59KTtcblxuZnVuY3Rpb24gdXNlQ29sdW1ucyhzaG93U3VtbWFyeUNvbHVtbjogYm9vbGVhbiwgc2hvd0dyb3VwQ29sdW1uOiBib29sZWFuKSB7XG4gIGNvbnN0IGhhc1J1bGVyID0gdXNlSGFzUnVsZXIoKTtcblxuICByZXR1cm4gdXNlTWVtbygoKTogUnVsZVRhYmxlQ29sdW1uUHJvcHNbXSA9PiB7XG4gICAgY29uc3QgY29sdW1uczogUnVsZVRhYmxlQ29sdW1uUHJvcHNbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzdGF0ZScsXG4gICAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgIHJlbmRlckNlbGw6ICh7IGRhdGE6IHJ1bGUgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZXNwYWNlIH0gPSBydWxlO1xuICAgICAgICAgIGNvbnN0IHsgcnVsZXNTb3VyY2UgfSA9IG5hbWVzcGFjZTtcbiAgICAgICAgICBjb25zdCB7IHByb21SdWxlLCBydWxlclJ1bGUgfSA9IHJ1bGU7XG4gICAgICAgICAgY29uc3QgaXNEZWxldGluZyA9ICEhKGhhc1J1bGVyKHJ1bGVzU291cmNlKSAmJiBwcm9tUnVsZSAmJiAhcnVsZXJSdWxlKTtcbiAgICAgICAgICBjb25zdCBpc0NyZWF0aW5nID0gISEoaGFzUnVsZXIocnVsZXNTb3VyY2UpICYmIHJ1bGVyUnVsZSAmJiAhcHJvbVJ1bGUpO1xuICAgICAgICAgIHJldHVybiA8UnVsZVN0YXRlIHJ1bGU9e3J1bGV9IGlzRGVsZXRpbmc9e2lzRGVsZXRpbmd9IGlzQ3JlYXRpbmc9e2lzQ3JlYXRpbmd9IC8+O1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiAnMTY1cHgnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICduYW1lJyxcbiAgICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuICAgICAgICByZW5kZXJDZWxsOiAoeyBkYXRhOiBydWxlIH0pID0+IHJ1bGUubmFtZSxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnaGVhbHRoJyxcbiAgICAgICAgbGFiZWw6ICdIZWFsdGgnLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgIHJlbmRlckNlbGw6ICh7IGRhdGE6IHsgcHJvbVJ1bGUgfSB9KSA9PiAocHJvbVJ1bGUgPyA8UnVsZUhlYWx0aCBydWxlPXtwcm9tUnVsZX0gLz4gOiBudWxsKSxcbiAgICAgICAgc2l6ZTogJzc1cHgnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGlmIChzaG93U3VtbWFyeUNvbHVtbikge1xuICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgaWQ6ICdzdW1tYXJ5JyxcbiAgICAgICAgbGFiZWw6ICdTdW1tYXJ5JyxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuICAgICAgICByZW5kZXJDZWxsOiAoeyBkYXRhOiBydWxlIH0pID0+IHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5zdW1tYXJ5XSA/PyAnJyxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hvd0dyb3VwQ29sdW1uKSB7XG4gICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICBpZDogJ2dyb3VwJyxcbiAgICAgICAgbGFiZWw6ICdHcm91cCcsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICAgICAgcmVuZGVyQ2VsbDogKHsgZGF0YTogcnVsZSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBuYW1lc3BhY2UsIGdyb3VwIH0gPSBydWxlO1xuICAgICAgICAgIC8vIHVuZ3JvdXBlZCBydWxlcyBhcmUgcnVsZXMgdGhhdCBhcmUgaW4gdGhlIFwiZGVmYXVsdFwiIGdyb3VwIG5hbWVcbiAgICAgICAgICBjb25zdCBpc1VuZ3JvdXBlZCA9IGdyb3VwLm5hbWUgPT09ICdkZWZhdWx0JztcbiAgICAgICAgICBjb25zdCBncm91cE5hbWUgPSBpc1VuZ3JvdXBlZCA/IChcbiAgICAgICAgICAgIDxSdWxlTG9jYXRpb24gbmFtZXNwYWNlPXtuYW1lc3BhY2UubmFtZX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJ1bGVMb2NhdGlvbiBuYW1lc3BhY2U9e25hbWVzcGFjZS5uYW1lfSBncm91cD17Z3JvdXAubmFtZX0gLz5cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmV0dXJuIGdyb3VwTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfSwgW2hhc1J1bGVyLCBzaG93U3VtbWFyeUNvbHVtbiwgc2hvd0dyb3VwQ29sdW1uXSk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBBbGVydFN0YXRlLCBkYXRlVGltZUZvcm1hdCwgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgTG9hZGluZ1BsYWNlaG9sZGVyLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgU3RhdGVIaXN0b3J5SXRlbSwgU3RhdGVIaXN0b3J5SXRlbURhdGEgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGUsIER5bmFtaWNUYWJsZUNvbHVtblByb3BzLCBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9EeW5hbWljVGFibGUnO1xuaW1wb3J0IHsgQWxlcnRTdGF0ZVRhZyB9IGZyb20gJy4vQWxlcnRTdGF0ZVRhZyc7XG5pbXBvcnQgeyB1c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkgfSBmcm9tICcuLi8uLi9ob29rcy91c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnknO1xuaW1wb3J0IHsgQWxlcnRMYWJlbCB9IGZyb20gJy4uL0FsZXJ0TGFiZWwnO1xuaW1wb3J0IHsgR3JhZmFuYUFsZXJ0U3RhdGUsIFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbnR5cGUgU3RhdGVIaXN0b3J5Um93SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgc3RhdGU6IFByb21BbGVydGluZ1J1bGVTdGF0ZSB8IEdyYWZhbmFBbGVydFN0YXRlIHwgQWxlcnRTdGF0ZTtcbiAgdGV4dD86IHN0cmluZztcbiAgZGF0YT86IFN0YXRlSGlzdG9yeUl0ZW1EYXRhO1xuICB0aW1lc3RhbXA/OiBudW1iZXI7XG59O1xuXG50eXBlIFN0YXRlSGlzdG9yeVJvdyA9IER5bmFtaWNUYWJsZUl0ZW1Qcm9wczxTdGF0ZUhpc3RvcnlSb3dJdGVtPjtcblxuaW50ZXJmYWNlIFJ1bGVTdGF0ZUhpc3RvcnlQcm9wcyB7XG4gIGFsZXJ0SWQ6IHN0cmluZztcbn1cblxuY29uc3QgU3RhdGVIaXN0b3J5OiBGQzxSdWxlU3RhdGVIaXN0b3J5UHJvcHM+ID0gKHsgYWxlcnRJZCB9KSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIHJlc3VsdCA9IFtdIH0gPSB1c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkoYWxlcnRJZCk7XG5cbiAgaWYgKGxvYWRpbmcgJiYgIWVycm9yKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD17J0xvYWRpbmcgaGlzdG9yeS4uLid9IC8+O1xuICB9XG5cbiAgaWYgKGVycm9yICYmICFsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxBbGVydCB0aXRsZT17J0ZhaWxlZCB0byBmZXRjaCBhbGVydCBzdGF0ZSBoaXN0b3J5J30+e2Vycm9yLm1lc3NhZ2V9PC9BbGVydD47XG4gIH1cblxuICBjb25zdCBjb2x1bW5zOiBBcnJheTxEeW5hbWljVGFibGVDb2x1bW5Qcm9wczxTdGF0ZUhpc3RvcnlSb3dJdGVtPj4gPSBbXG4gICAgeyBpZDogJ3N0YXRlJywgbGFiZWw6ICdTdGF0ZScsIHNpemU6ICdtYXgtY29udGVudCcsIHJlbmRlckNlbGw6IHJlbmRlclN0YXRlQ2VsbCB9LFxuICAgIHsgaWQ6ICd2YWx1ZScsIGxhYmVsOiAnJywgc2l6ZTogJ2F1dG8nLCByZW5kZXJDZWxsOiByZW5kZXJWYWx1ZUNlbGwgfSxcbiAgICB7IGlkOiAndGltZXN0YW1wJywgbGFiZWw6ICdUaW1lJywgc2l6ZTogJ21heC1jb250ZW50JywgcmVuZGVyQ2VsbDogcmVuZGVyVGltZXN0YW1wQ2VsbCB9LFxuICBdO1xuXG4gIGNvbnN0IGl0ZW1zOiBTdGF0ZUhpc3RvcnlSb3dbXSA9IHJlc3VsdFxuICAgIC5yZWR1Y2UoKGFjYzogU3RhdGVIaXN0b3J5Um93SXRlbVtdLCBpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgYWNjLnB1c2goe1xuICAgICAgICBpZDogU3RyaW5nKGl0ZW0uaWQpLFxuICAgICAgICBzdGF0ZTogaXRlbS5uZXdTdGF0ZSxcbiAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxuICAgICAgICBkYXRhOiBpdGVtLmRhdGEsXG4gICAgICAgIHRpbWVzdGFtcDogaXRlbS51cGRhdGVkLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGlmIHRoZSBwcmVjZWRpbmcgc3RhdGUgaXMgbm90IHRoZSBzYW1lLCBjcmVhdGUgYSBzZXBhcmF0ZSBzdGF0ZSBlbnRyeSDigJMgdGhpcyBsaWtlbHkgbWVhbnMgdGhlIHN0YXRlIHdhcyByZXNldFxuICAgICAgaWYgKCFoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlKGluZGV4LCByZXN1bHQpKSB7XG4gICAgICAgIGFjYy5wdXNoKHsgaWQ6IHVuaXF1ZUlkKCksIHN0YXRlOiBpdGVtLnByZXZTdGF0ZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSlcbiAgICAubWFwKChoaXN0b3J5SXRlbSkgPT4gKHtcbiAgICAgIGlkOiBoaXN0b3J5SXRlbS5pZCxcbiAgICAgIGRhdGE6IGhpc3RvcnlJdGVtLFxuICAgIH0pKTtcblxuICByZXR1cm4gPER5bmFtaWNUYWJsZSBjb2xzPXtjb2x1bW5zfSBpdGVtcz17aXRlbXN9IC8+O1xufTtcblxuZnVuY3Rpb24gcmVuZGVyVmFsdWVDZWxsKGl0ZW06IFN0YXRlSGlzdG9yeVJvdykge1xuICBjb25zdCBtYXRjaGVzID0gaXRlbS5kYXRhLmRhdGE/LmV2YWxNYXRjaGVzID8/IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpdGVtLmRhdGEudGV4dH1cbiAgICAgIDxMYWJlbHNXcmFwcGVyPlxuICAgICAgICB7bWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiAoXG4gICAgICAgICAgPEFsZXJ0TGFiZWwga2V5PXttYXRjaC5tZXRyaWN9IGxhYmVsS2V5PXttYXRjaC5tZXRyaWN9IHZhbHVlPXtTdHJpbmcobWF0Y2gudmFsdWUpfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTGFiZWxzV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3RhdGVDZWxsKGl0ZW06IFN0YXRlSGlzdG9yeVJvdykge1xuICByZXR1cm4gPEFsZXJ0U3RhdGVUYWcgc3RhdGU9e2l0ZW0uZGF0YS5zdGF0ZX0gLz47XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVzdGFtcENlbGwoaXRlbTogU3RhdGVIaXN0b3J5Um93KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1RpbWVzdGFtcFN0eWxlfT57aXRlbS5kYXRhLnRpbWVzdGFtcCAmJiA8c3Bhbj57ZGF0ZVRpbWVGb3JtYXQoaXRlbS5kYXRhLnRpbWVzdGFtcCl9PC9zcGFuPn08L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTGFiZWxzV3JhcHBlcjogRkM8e30+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IHdyYXBwZXIgfSA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5jb25zdCBUaW1lc3RhbXBTdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICAmID4gKiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgfVxuICBgLFxufSk7XG5cbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCBmaWd1cmUgb3V0IGlmIGEgZ2l2ZW4gaGlzdG9yeUl0ZW0gaGFzIGEgcHJlY2VkaW5nIGhpc3RvcnlJdGVtIHdoZXJlIHRoZSBzdGF0ZXMgbWF0Y2ggLSBpbiBvdGhlciB3b3Jkc1xuLy8gdGhlIG5ld1N0YXRlIG9mIHRoZSBwcmV2aW91cyBoaXN0b3J5SXRlbSBpcyB0aGUgc2FtZSBhcyB0aGUgcHJldlN0YXRlIG9mIHRoZSBjdXJyZW50IGhpc3RvcnlJdGVtXG5mdW5jdGlvbiBoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlKGluZGV4OiBudW1iZXIsIGl0ZW1zOiBTdGF0ZUhpc3RvcnlJdGVtW10pOiBib29sZWFuIHtcbiAgY29uc3QgY3VycmVudEhpc3RvcnlJdGVtID0gaXRlbXNbaW5kZXhdO1xuICBjb25zdCBwcmV2aW91c0hpc3RvcnlJdGVtID0gaXRlbXNbaW5kZXggKyAxXTtcblxuICBpZiAoIXByZXZpb3VzSGlzdG9yeUl0ZW0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcHJldmlvdXNIaXN0b3J5SXRlbS5uZXdTdGF0ZSA9PT0gY3VycmVudEhpc3RvcnlJdGVtLnByZXZTdGF0ZTtcbn1cblxuZXhwb3J0IHsgU3RhdGVIaXN0b3J5IH07XG4iLCJpbXBvcnQge1xuICBDb21iaW5lZFJ1bGUsXG4gIENvbWJpbmVkUnVsZUdyb3VwLFxuICBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIFJ1bGUsXG4gIFJ1bGVHcm91cCxcbiAgUnVsZU5hbWVzcGFjZSxcbiAgUnVsZXNTb3VyY2UsXG59IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFJ1bGVyUnVsZURUTywgUnVsZXJSdWxlR3JvdXBEVE8sIFJ1bGVyUnVsZXNDb25maWdEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgZ2V0QWxsUnVsZXNTb3VyY2VzLFxuICBnZXRSdWxlc1NvdXJjZUJ5TmFtZSxcbiAgaXNDbG91ZFJ1bGVzU291cmNlLFxuICBpc0dyYWZhbmFSdWxlc1NvdXJjZSxcbn0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSwgaXNBbGVydGluZ1J1bGVyUnVsZSwgaXNSZWNvcmRpbmdSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgQ2FjaGVWYWx1ZSB7XG4gIHByb21SdWxlcz86IFJ1bGVOYW1lc3BhY2VbXTtcbiAgcnVsZXJSdWxlcz86IFJ1bGVyUnVsZXNDb25maWdEVE8gfCBudWxsO1xuICByZXN1bHQ6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xufVxuXG4vLyB0aGlzIGxpdHRsZSBtb25zdGVyIGNvbWJpbmVzIHByb21ldGhldXMgcnVsZXMgYW5kIHJ1bGVyIHJ1bGVzIHRvIHByb2R1Y2UgYSB1bmlmaWVkIGRhdGEgc3RydWN0dXJlXG4vLyBjYW4gbGltaXQgdG8gYSBzaW5nbGUgcnVsZXMgc291cmNlXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlc1NvdXJjZU5hbWU/OiBzdHJpbmcpOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSB7XG4gIGNvbnN0IHByb21SdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG5cbiAgLy8gY2FjaGUgcmVzdWx0cyBwZXIgcnVsZXMgc291cmNlLCBzbyB3ZSBvbmx5IHJlY2FsY3VsYXRlIHRob3NlIGZvciB3aGljaCByZXN1bHRzIGhhdmUgYWN0dWFsbHkgY2hhbmdlZFxuICBjb25zdCBjYWNoZSA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBDYWNoZVZhbHVlPj4oe30pO1xuXG4gIGNvbnN0IHJ1bGVzU291cmNlcyA9IHVzZU1lbW8oKCk6IFJ1bGVzU291cmNlW10gPT4ge1xuICAgIGlmIChydWxlc1NvdXJjZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVzU291cmNlID0gZ2V0UnVsZXNTb3VyY2VCeU5hbWUocnVsZXNTb3VyY2VOYW1lKTtcbiAgICAgIGlmICghcnVsZXNTb3VyY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHJ1bGVzIHNvdXJjZTogJHtydWxlc1NvdXJjZU5hbWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3J1bGVzU291cmNlXTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEFsbFJ1bGVzU291cmNlcygpO1xuICB9LCBbcnVsZXNTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHJ1bGVzU291cmNlc1xuICAgICAgICAubWFwKChydWxlc1NvdXJjZSk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSBpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gcnVsZXNTb3VyY2UubmFtZSA6IHJ1bGVzU291cmNlO1xuICAgICAgICAgIGNvbnN0IHByb21SdWxlcyA9IHByb21SdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgcnVsZXJSdWxlcyA9IHJ1bGVyUnVsZXNSZXNwb25zZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuXG4gICAgICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdO1xuICAgICAgICAgIGlmIChjYWNoZWQgJiYgY2FjaGVkLnByb21SdWxlcyA9PT0gcHJvbVJ1bGVzICYmIGNhY2hlZC5ydWxlclJ1bGVzID09PSBydWxlclJ1bGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkLnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZXNwYWNlczogUmVjb3JkPHN0cmluZywgQ29tYmluZWRSdWxlTmFtZXNwYWNlPiA9IHt9O1xuXG4gICAgICAgICAgLy8gZmlyc3QgZ2V0IGFsbCB0aGUgcnVsZXIgcnVsZXMgaW5cbiAgICAgICAgICBPYmplY3QuZW50cmllcyhydWxlclJ1bGVzIHx8IHt9KS5mb3JFYWNoKChbbmFtZXNwYWNlTmFtZSwgZ3JvdXBzXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgPSB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2U7XG4gICAgICAgICAgICBhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhlbiBjb3JyZWxhdGUgd2l0aCBwcm9tZXRoZXVzIHJ1bGVzXG4gICAgICAgICAgcHJvbVJ1bGVzPy5mb3JFYWNoKCh7IG5hbWU6IG5hbWVzcGFjZU5hbWUsIGdyb3VwcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBucyA9IChuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSB8fCB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5zLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LnZhbHVlcyhuYW1lc3BhY2VzKTtcblxuICAgICAgICAgIGNhY2hlLmN1cnJlbnRbcnVsZXNTb3VyY2VOYW1lXSA9IHsgcHJvbVJ1bGVzLCBydWxlclJ1bGVzLCByZXN1bHQgfTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpLFxuICAgIFtwcm9tUnVsZXNSZXNwb25zZXMsIHJ1bGVyUnVsZXNSZXNwb25zZXMsIHJ1bGVzU291cmNlc11cbiAgKTtcbn1cblxuLy8gbWVyZ2UgYWxsIGdyb3VwcyBpbiBjYXNlIG9mIGdyYWZhbmEgbWFuYWdlZCwgZXNzZW50aWFsbHkgdHJlYXRpbmcgbmFtZXNwYWNlcyAoZm9sZGVycykgYXMgZ3JvdXBzXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMobmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10pIHtcbiAgcmV0dXJuIG5hbWVzcGFjZXMubWFwKChuYW1lc3BhY2UpID0+IHtcbiAgICBjb25zdCBuZXdOYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgIGdyb3VwczogW10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IGdyb3VwIHdpdGggdW5ncm91cGVkIHJ1bGVzXG4gICAgbmV3TmFtZXNwYWNlLmdyb3Vwcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgIHJ1bGVzOiBzb3J0UnVsZXNCeU5hbWUobmFtZXNwYWNlLmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4gZ3JvdXAucnVsZXMpKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdOYW1lc3BhY2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFJ1bGVzQnlOYW1lKHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSkge1xuICByZXR1cm4gcnVsZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlclJ1bGVHcm91cERUT1tdKTogdm9pZCB7XG4gIG5hbWVzcGFjZS5ncm91cHMgPSBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmVkR3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwID0ge1xuICAgICAgbmFtZTogZ3JvdXAubmFtZSxcbiAgICAgIGludGVydmFsOiBncm91cC5pbnRlcnZhbCxcbiAgICAgIHNvdXJjZV90ZW5hbnRzOiBncm91cC5zb3VyY2VfdGVuYW50cyxcbiAgICAgIHJ1bGVzOiBbXSxcbiAgICB9O1xuICAgIGNvbWJpbmVkR3JvdXAucnVsZXMgPSBncm91cC5ydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCkpO1xuICAgIHJldHVybiBjb21iaW5lZEdyb3VwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwczogUnVsZUdyb3VwW10pOiB2b2lkIHtcbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgbGV0IGNvbWJpbmVkR3JvdXAgPSBuYW1lc3BhY2UuZ3JvdXBzLmZpbmQoKGcpID0+IGcubmFtZSA9PT0gZ3JvdXAubmFtZSk7XG4gICAgaWYgKCFjb21iaW5lZEdyb3VwKSB7XG4gICAgICBjb21iaW5lZEdyb3VwID0ge1xuICAgICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgICBydWxlczogW10sXG4gICAgICB9O1xuICAgICAgbmFtZXNwYWNlLmdyb3Vwcy5wdXNoKGNvbWJpbmVkR3JvdXApO1xuICAgIH1cblxuICAgIChncm91cC5ydWxlcyA/PyBbXSkuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdSdWxlID0gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChydWxlLCBjb21iaW5lZEdyb3VwISwgbmFtZXNwYWNlLnJ1bGVzU291cmNlKTtcbiAgICAgIGlmIChleGlzdGluZ1J1bGUpIHtcbiAgICAgICAgZXhpc3RpbmdSdWxlLnByb21SdWxlID0gcnVsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbWJpbmVkR3JvdXAhLnJ1bGVzLnB1c2gocHJvbVJ1bGVUb0NvbWJpbmVkUnVsZShydWxlLCBuYW1lc3BhY2UsIGNvbWJpbmVkR3JvdXAhKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGU6IFJ1bGUsIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cDogQ29tYmluZWRSdWxlR3JvdXApOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHJ1bGUubmFtZSxcbiAgICBxdWVyeTogcnVsZS5xdWVyeSxcbiAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgIGFubm90YXRpb25zOiBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICBwcm9tUnVsZTogcnVsZSxcbiAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICBncm91cCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUoXG4gIHJ1bGU6IFJ1bGVyUnVsZURUTyxcbiAgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cFxuKTogQ29tYmluZWRSdWxlIHtcbiAgcmV0dXJuIGlzQWxlcnRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5hbGVydCxcbiAgICAgICAgcXVlcnk6IHJ1bGUuZXhwcixcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IGlzUmVjb3JkaW5nUnVsZXJSdWxlKHJ1bGUpXG4gICAgPyB7XG4gICAgICAgIG5hbWU6IHJ1bGUucmVjb3JkLFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczoge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgbmFtZTogcnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiBydWxlLmFubm90YXRpb25zIHx8IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9O1xufVxuXG4vLyBmaW5kIGV4aXN0aW5nIHJ1bGUgaW4gZ3JvdXAgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBwcm9tIHJ1bGVcbmZ1bmN0aW9uIGdldEV4aXN0aW5nUnVsZUluR3JvdXAoXG4gIHJ1bGU6IFJ1bGUsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCxcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlXG4pOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQge1xuICBpZiAoaXNHcmFmYW5hUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgLy8gYXNzdW1lIGdyYWZhbmEgZ3JvdXBzIGhhdmUgb25seSB0aGUgb25lIHJ1bGUuIGNoZWNrIG5hbWUgYW55d2F5IGJlY2F1c2UgcGFyYW5vaWRcbiAgICByZXR1cm4gZ3JvdXAhLnJ1bGVzLmZpbmQoKGV4aXN0aW5nUnVsZSkgPT4gZXhpc3RpbmdSdWxlLm5hbWUgPT09IHJ1bGUubmFtZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvLyB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBtYXRjaGVzIG5hbWUsIGxhYmVscywgYW5ub3RhdGlvbnMgYW5kIHF1ZXJ5XG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgdHJ1ZSlcbiAgICApID8/XG4gICAgLy8gaWYgdGhhdCBmYWlscywgdHJ5IGZpbmRpbmcgYSBydWxlIHRoYXQgb25seSBtYXRjaGVzIG5hbWUsIGxhYmVscyBhbmQgYW5ub3RhdGlvbnMuXG4gICAgLy8gbG9raSAmIHByb20gY2FuIHNvbWV0aW1lcyBtb2RpZnkgdGhlIHF1ZXJ5IHNvIGl0IGRvZXNudCBtYXRjaCwgZWcgYDIgPiAxYCBiZWNvbWVzIGAxYFxuICAgIGdyb3VwIS5ydWxlcy5maW5kKFxuICAgICAgKGV4aXN0aW5nUnVsZSkgPT4gIWV4aXN0aW5nUnVsZS5wcm9tUnVsZSAmJiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShleGlzdGluZ1J1bGUsIHJ1bGUsIGZhbHNlKVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUsIHJ1bGU6IFJ1bGUsIGNoZWNrUXVlcnkgPSB0cnVlKTogYm9vbGVhbiB7XG4gIGlmIChjb21iaW5lZFJ1bGUubmFtZSA9PT0gcnVsZS5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgY2hlY2tRdWVyeSA/IGhhc2hRdWVyeShjb21iaW5lZFJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5sYWJlbHMsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5hbm5vdGF0aW9ucyxcbiAgICAgIF0pID09PVxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KHJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHRoZXJlIGNhbiBiZSBzbGlnaHQgZGlmZmVyZW5jZXMgaW4gaG93IHByb20gJiBydWxlciByZW5kZXIgYSBxdWVyeSwgdGhpcyB3aWxsIGhhc2ggdGhlbSBhY2NvdW50aW5nIGZvciB0aGUgZGlmZmVyZW5jZXNcbmZ1bmN0aW9uIGhhc2hRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gIC8vIG9uZSBvZiB0aGVtIG1pZ2h0IGJlIHdyYXBwZWQgaW4gcGFyZW5zXG4gIGlmIChxdWVyeS5sZW5ndGggPiAxICYmIHF1ZXJ5WzBdID09PSAnKCcgJiYgcXVlcnlbcXVlcnkubGVuZ3RoIC0gMV0gPT09ICcpJykge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMSwgLTEpO1xuICB9XG4gIC8vIHdoaXRlc3BhY2UgY291bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xcc3xcXG4vZywgJycpO1xuICAvLyBsYWJlbHMgbWF0Y2hlcnMgY2FuIGJlIHJlb3JkZXJlZCwgc28gc29ydCB0aGUgZW5pdHJlIHN0cmluZywgZXNlbnRpYWxseSBjb21wYXJpbmcganVzdCB0aGUgY2hhcmFjdGVyIGNvdW50c1xuICByZXR1cm4gcXVlcnkuc3BsaXQoJycpLnNvcnQoKS5qb2luKCcnKTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbWJpbmVkUnVsZUdyb3VwLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIEZpbHRlclN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgaXNDbG91ZFJ1bGVzU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSwgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMgfSBmcm9tICcuLi91dGlscy9taXNjJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHsgUHJvbVJ1bGVUeXBlLCBSdWxlckdyYWZhbmFSdWxlRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGxhYmVsc01hdGNoTWF0Y2hlcnMsIHBhcnNlTWF0Y2hlcnMgfSBmcm9tICcuLi91dGlscy9hbGVydG1hbmFnZXInO1xuXG5leHBvcnQgY29uc3QgdXNlRmlsdGVyZWRSdWxlcyA9IChuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSkgPT4ge1xuICBjb25zdCBbcXVlcnlQYXJhbXNdID0gdXNlUXVlcnlQYXJhbXMoKTtcbiAgY29uc3QgZmlsdGVycyA9IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWROYW1lc3BhY2VzID0gbmFtZXNwYWNlc1xuICAgICAgLy8gRmlsdGVyIGJ5IGRhdGEgc291cmNlXG4gICAgICAvLyBUT0RPOiBmaWx0ZXIgYnkgbXVsdGlwbGUgZGF0YSBzb3VyY2VzIGZvciBncmFmYW5hLW1hbmFnZWQgYWxlcnRzXG4gICAgICAuZmlsdGVyKCh7IHJ1bGVzU291cmNlIH0pID0+XG4gICAgICAgIGZpbHRlcnMuZGF0YVNvdXJjZSAmJiBpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gcnVsZXNTb3VyY2UubmFtZSA9PT0gZmlsdGVycy5kYXRhU291cmNlIDogdHJ1ZVxuICAgICAgKVxuICAgICAgLy8gSWYgYSBuYW1lc3BhY2UgYW5kIGdyb3VwIGhhdmUgcnVsZXMgdGhhdCBtYXRjaCB0aGUgcnVsZXMgZmlsdGVycyB0aGVuIGtlZXAgdGhlbS5cbiAgICAgIC5yZWR1Y2UocmVkdWNlTmFtZXNwYWNlcyhmaWx0ZXJzKSwgW10gYXMgQ29tYmluZWRSdWxlTmFtZXNwYWNlW10pO1xuICAgIHJldHVybiBmaWx0ZXJlZE5hbWVzcGFjZXM7XG4gIH0sIFtuYW1lc3BhY2VzLCBmaWx0ZXJzXSk7XG59O1xuXG5jb25zdCByZWR1Y2VOYW1lc3BhY2VzID0gKGZpbHRlcnM6IEZpbHRlclN0YXRlKSA9PiB7XG4gIHJldHVybiAobmFtZXNwYWNlQWNjOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSwgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UpID0+IHtcbiAgICBjb25zdCBncm91cHMgPSBuYW1lc3BhY2UuZ3JvdXBzLnJlZHVjZShyZWR1Y2VHcm91cHMoZmlsdGVycyksIFtdIGFzIENvbWJpbmVkUnVsZUdyb3VwW10pO1xuXG4gICAgaWYgKGdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgIG5hbWVzcGFjZUFjYy5wdXNoKHtcbiAgICAgICAgLi4ubmFtZXNwYWNlLFxuICAgICAgICBncm91cHMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZXNwYWNlQWNjO1xuICB9O1xufTtcblxuLy8gUmVkdWNlcyBncm91cHMgdG8gb25seSBncm91cHMgdGhhdCBoYXZlIHJ1bGVzIG1hdGNoaW5nIHRoZSBmaWx0ZXJzXG5jb25zdCByZWR1Y2VHcm91cHMgPSAoZmlsdGVyczogRmlsdGVyU3RhdGUpID0+IHtcbiAgcmV0dXJuIChncm91cEFjYzogQ29tYmluZWRSdWxlR3JvdXBbXSwgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwKSA9PiB7XG4gICAgY29uc3QgcnVsZXMgPSBncm91cC5ydWxlcy5maWx0ZXIoKHJ1bGUpID0+IHtcbiAgICAgIGlmIChmaWx0ZXJzLnJ1bGVUeXBlICYmIGZpbHRlcnMucnVsZVR5cGUgIT09IHJ1bGUucHJvbVJ1bGU/LnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGZpbHRlcnMuZGF0YVNvdXJjZSAmJiBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZS5ydWxlclJ1bGUpICYmICFpc1F1ZXJ5aW5nRGF0YVNvdXJjZShydWxlLnJ1bGVyUnVsZSwgZmlsdGVycykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gUXVlcnkgc3RyaW5ncyBjYW4gbWF0Y2ggYWxlcnQgbmFtZSwgbGFiZWwga2V5cywgYW5kIGxhYmVsIHZhbHVlc1xuICAgICAgaWYgKGZpbHRlcnMucXVlcnlTdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5U3RyaW5nID0gZmlsdGVycy5xdWVyeVN0cmluZy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBkb2VzTmFtZUNvbnRhaW5zUXVlcnlTdHJpbmcgPSBydWxlLm5hbWU/LnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZFF1ZXJ5U3RyaW5nKTtcbiAgICAgICAgY29uc3QgbWF0Y2hlcnMgPSBwYXJzZU1hdGNoZXJzKGZpbHRlcnMucXVlcnlTdHJpbmcpO1xuXG4gICAgICAgIGNvbnN0IGRvUnVsZUxhYmVsc01hdGNoUXVlcnkgPSBsYWJlbHNNYXRjaE1hdGNoZXJzKHJ1bGUubGFiZWxzLCBtYXRjaGVycyk7XG4gICAgICAgIGNvbnN0IGRvQWxlcnRzQ29udGFpbk1hdGNoaW5nTGFiZWxzID1cbiAgICAgICAgICBydWxlLnByb21SdWxlICYmXG4gICAgICAgICAgcnVsZS5wcm9tUnVsZS50eXBlID09PSBQcm9tUnVsZVR5cGUuQWxlcnRpbmcgJiZcbiAgICAgICAgICBydWxlLnByb21SdWxlLmFsZXJ0cyAmJlxuICAgICAgICAgIHJ1bGUucHJvbVJ1bGUuYWxlcnRzLnNvbWUoKGFsZXJ0KSA9PiBsYWJlbHNNYXRjaE1hdGNoZXJzKGFsZXJ0LmxhYmVscywgbWF0Y2hlcnMpKTtcblxuICAgICAgICBpZiAoIShkb2VzTmFtZUNvbnRhaW5zUXVlcnlTdHJpbmcgfHwgZG9SdWxlTGFiZWxzTWF0Y2hRdWVyeSB8fCBkb0FsZXJ0c0NvbnRhaW5NYXRjaGluZ0xhYmVscykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgZmlsdGVycy5hbGVydFN0YXRlICYmXG4gICAgICAgICEocnVsZS5wcm9tUnVsZSAmJiBpc0FsZXJ0aW5nUnVsZShydWxlLnByb21SdWxlKSAmJiBydWxlLnByb21SdWxlLnN0YXRlID09PSBmaWx0ZXJzLmFsZXJ0U3RhdGUpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgLy8gQWRkIHJ1bGVzIHRvIHRoZSBncm91cCB0aGF0IG1hdGNoIHRoZSBydWxlIGxpc3QgZmlsdGVyc1xuICAgIGlmIChydWxlcy5sZW5ndGgpIHtcbiAgICAgIGdyb3VwQWNjLnB1c2goe1xuICAgICAgICAuLi5ncm91cCxcbiAgICAgICAgcnVsZXMsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwQWNjO1xuICB9O1xufTtcblxuY29uc3QgaXNRdWVyeWluZ0RhdGFTb3VyY2UgPSAocnVsZXJSdWxlOiBSdWxlckdyYWZhbmFSdWxlRFRPLCBmaWx0ZXI6IEZpbHRlclN0YXRlKTogYm9vbGVhbiA9PiB7XG4gIGlmICghZmlsdGVyLmRhdGFTb3VyY2UpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAhIXJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0LmRhdGEuZmluZCgocXVlcnkpID0+IHtcbiAgICBpZiAoIXF1ZXJ5LmRhdGFzb3VyY2VVaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZHMgPSBnZXREYXRhU291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncyhxdWVyeS5kYXRhc291cmNlVWlkKTtcbiAgICByZXR1cm4gZHM/Lm5hbWUgPT09IGZpbHRlci5kYXRhU291cmNlO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBGb2xkZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmV0Y2hGb2xkZXJJZk5vdEZldGNoZWRBY3Rpb24gfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3JlZHV4JztcblxuaW50ZXJmYWNlIFJldHVybkJhZyB7XG4gIGZvbGRlcj86IEZvbGRlckRUTztcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvbGRlcih1aWQ/OiBzdHJpbmcpOiBSZXR1cm5CYWcge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGZvbGRlclJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mb2xkZXJzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodWlkKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaEZvbGRlcklmTm90RmV0Y2hlZEFjdGlvbih1aWQpKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgdWlkXSk7XG5cbiAgaWYgKHVpZCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBmb2xkZXJSZXF1ZXN0c1t1aWRdIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcbiAgICByZXR1cm4ge1xuICAgICAgZm9sZGVyOiByZXF1ZXN0LnJlc3VsdCxcbiAgICAgIGxvYWRpbmc6IHJlcXVlc3QubG9hZGluZyxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBSdWxlc1NvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuLy8gZGF0YXNvdXJjZSBoYXMgcnVsZXIgaWYgaXQncyBncmFmYW5hIG1hbmFnZWQgb3IgaWYgd2UncmUgYWJsZSB0byBsb2FkIHJ1bGVzIGZyb20gaXRcbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNSdWxlcigpOiAocnVsZXNTb3VyY2U6IHN0cmluZyB8IFJ1bGVzU291cmNlKSA9PiBib29sZWFuIHtcbiAgY29uc3QgcnVsZXJSdWxlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG4gIHJldHVybiB1c2VDYWxsYmFjayhcbiAgICAocnVsZXNTb3VyY2U6IHN0cmluZyB8IFJ1bGVzU291cmNlKSA9PiB7XG4gICAgICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSB0eXBlb2YgcnVsZXNTb3VyY2UgPT09ICdzdHJpbmcnID8gcnVsZXNTb3VyY2UgOiBydWxlc1NvdXJjZS5uYW1lO1xuICAgICAgcmV0dXJuIHJ1bGVzU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB8fCAhIXJ1bGVyUnVsZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuICAgIH0sXG4gICAgW3J1bGVyUnVsZXNdXG4gICk7XG59XG4iLCJpbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgUnVsZXJSdWxlRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcbmltcG9ydCB7IGdldFJ1bGVzUGVybWlzc2lvbnMgfSBmcm9tICcuLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5pbXBvcnQgeyBpc0dyYWZhbmFSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyB1c2VGb2xkZXIgfSBmcm9tICcuL3VzZUZvbGRlcic7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgUmVzdWx0QmFnIHtcbiAgaXNFZGl0YWJsZT86IGJvb2xlYW47XG4gIGlzUmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVzU291cmNlTmFtZTogc3RyaW5nLCBydWxlPzogUnVsZXJSdWxlRFRPKTogUmVzdWx0QmFnIHtcbiAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzKTtcbiAgY29uc3QgZm9sZGVyVUlEID0gcnVsZSAmJiBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZSkgPyBydWxlLmdyYWZhbmFfYWxlcnQubmFtZXNwYWNlX3VpZCA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBydWxlUGVybWlzc2lvbiA9IGdldFJ1bGVzUGVybWlzc2lvbnMocnVsZXNTb3VyY2VOYW1lKTtcbiAgY29uc3QgaGFzRWRpdFBlcm1pc3Npb24gPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi51cGRhdGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuICBjb25zdCBoYXNSZW1vdmVQZXJtaXNzaW9uID0gY29udGV4dFNydi5oYXNBY2Nlc3MocnVsZVBlcm1pc3Npb24uZGVsZXRlLCBjb250ZXh0U3J2LmlzRWRpdG9yKTtcblxuICBjb25zdCB7IGZvbGRlciwgbG9hZGluZyB9ID0gdXNlRm9sZGVyKGZvbGRlclVJRCk7XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgcmV0dXJuIHsgaXNFZGl0YWJsZTogZmFsc2UsIGlzUmVtb3ZhYmxlOiBmYWxzZSwgbG9hZGluZzogZmFsc2UgfTtcbiAgfVxuXG4gIC8vIGdyYWZhbmEgcnVsZXMgY2FuIGJlIGVkaXRlZCBpZiB1c2VyIGNhbiBlZGl0IHRoZSBmb2xkZXIgdGhleSdyZSBpblxuICBpZiAoaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUpKSB7XG4gICAgaWYgKCFmb2xkZXJVSUQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFJ1bGUgJHtydWxlLmdyYWZhbmFfYWxlcnQudGl0bGV9IGRvZXMgbm90IGhhdmUgYSBmb2xkZXIgdWlkLCBjYW5ub3QgZGV0ZXJtaW5lIGlmIGl0IGlzIGVkaXRhYmxlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc0VkaXRhYmxlOiBoYXNFZGl0UGVybWlzc2lvbiAmJiBmb2xkZXI/LmNhblNhdmUsXG4gICAgICBpc1JlbW92YWJsZTogaGFzUmVtb3ZlUGVybWlzc2lvbiAmJiBmb2xkZXI/LmNhblNhdmUsXG4gICAgICBsb2FkaW5nLFxuICAgIH07XG4gIH1cblxuICAvLyBwcm9tIHJ1bGVzIGFyZSBvbmx5IGVkaXRhYmxlIGJ5IHVzZXJzIHdpdGggRWRpdG9yIHJvbGUgYW5kIG9ubHkgaWYgcnVsZXMgc291cmNlIHN1cHBvcnRzIGVkaXRpbmdcbiAgY29uc3QgaXNSdWxlckF2YWlsYWJsZSA9IEJvb2xlYW4oZGF0YVNvdXJjZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0Py5ydWxlckNvbmZpZyk7XG4gIHJldHVybiB7XG4gICAgaXNFZGl0YWJsZTogaGFzRWRpdFBlcm1pc3Npb24gJiYgaXNSdWxlckF2YWlsYWJsZSxcbiAgICBpc1JlbW92YWJsZTogaGFzUmVtb3ZlUGVybWlzc2lvbiAmJiBpc1J1bGVyQXZhaWxhYmxlLFxuICAgIGxvYWRpbmc6IGRhdGFTb3VyY2VzW3J1bGVzU291cmNlTmFtZV0/LmxvYWRpbmcsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBTdGF0ZUhpc3RvcnlJdGVtIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaEdyYWZhbmFBbm5vdGF0aW9uc0FjdGlvbiB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5KGFsZXJ0SWQ6IHN0cmluZykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvcjxBc3luY1JlcXVlc3RTdGF0ZTxTdGF0ZUhpc3RvcnlJdGVtW10+PihcbiAgICAoc3RhdGUpID0+IHN0YXRlLm1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hHcmFmYW5hQW5ub3RhdGlvbnNBY3Rpb24oYWxlcnRJZCkpO1xuICB9LCBbZGlzcGF0Y2gsIGFsZXJ0SWRdKTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU3RhdGVIaXN0b3J5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9ydWxlcy9TdGF0ZUhpc3RvcnknO1xuXG5mdW5jdGlvbiB1c2VTdGF0ZUhpc3RvcnlNb2RhbChhbGVydElkOiBzdHJpbmcpIHtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBTdGF0ZUhpc3RvcnlNb2RhbCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxuICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgIGNsb3NlT25CYWNrZHJvcENsaWNrPXt0cnVlfVxuICAgICAgICBjbG9zZU9uRXNjYXBlPXt0cnVlfVxuICAgICAgICB0aXRsZT1cIlN0YXRlIGhpc3RvcnlcIlxuICAgICAgPlxuICAgICAgICA8U3RhdGVIaXN0b3J5IGFsZXJ0SWQ9e2FsZXJ0SWR9IC8+XG4gICAgICA8L01vZGFsPlxuICAgICksXG4gICAgW2FsZXJ0SWQsIHNob3dNb2RhbF1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIFN0YXRlSGlzdG9yeU1vZGFsLFxuICAgIHNob3dTdGF0ZUhpc3RvcnlNb2RhbDogKCkgPT4gc2V0U2hvd01vZGFsKHRydWUpLFxuICAgIGhpZGVTdGF0ZUhpc3RvcnlNb2RhbDogKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgdXNlU3RhdGVIaXN0b3J5TW9kYWwgfTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRSdWxlc0FjY2VzcyB9IGZyb20gJy4vYWNjZXNzLWNvbnRyb2wnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUnVsZXNBY2Nlc3MoKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGdldFJ1bGVzQWNjZXNzKCksIFtdKTtcbn1cbiIsImltcG9ydCB7IEdyYW1tYXIgfSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCB7IENvbXBsZXRpb25JdGVtIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5jb25zdCBBR0dSRUdBVElPTl9PUEVSQVRPUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ3N1bScsXG4gICAgaW5zZXJ0VGV4dDogJ3N1bScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBzdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWluJyxcbiAgICBpbnNlcnRUZXh0OiAnbWluJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1pbmltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWF4JyxcbiAgICBpbnNlcnRUZXh0OiAnbWF4JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1heGltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXZnJyxcbiAgICBpbnNlcnRUZXh0OiAnYXZnJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHRoZSBhdmVyYWdlIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZGRldicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIGRldmlhdGlvbiBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzdGR2YXInLFxuICAgIGluc2VydFRleHQ6ICdzdGR2YXInLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudCcsXG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ291bnQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB2ZWN0b3InLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdib3R0b21rJyxcbiAgICBpbnNlcnRUZXh0OiAnYm90dG9taycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NtYWxsZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndG9waycsXG4gICAgaW5zZXJ0VGV4dDogJ3RvcGsnLFxuICAgIGRvY3VtZW50YXRpb246ICdMYXJnZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQSVBFX1BBUlNFUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ2pzb24nLFxuICAgIGluc2VydFRleHQ6ICdqc29uJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRXh0cmFjdGluZyBsYWJlbHMgZnJvbSB0aGUgbG9nIGxpbmUgdXNpbmcganNvbiBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdyZWdleHAnLFxuICAgIGluc2VydFRleHQ6ICdyZWdleHAgXCJcIicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0V4dHJhY3RpbmcgbGFiZWxzIGZyb20gdGhlIGxvZyBsaW5lIHVzaW5nIHJlZ2V4cCBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICAgIG1vdmU6IC0xLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdsb2dmbXQnLFxuICAgIGluc2VydFRleHQ6ICdsb2dmbXQnLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyBsb2dmbXQgcGFyc2VyLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAncGF0dGVybicsXG4gICAgaW5zZXJ0VGV4dDogJ3BhdHRlcm4nLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyBwYXR0ZXJuIHBhcnNlci4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjMrLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUElQRV9PUEVSQVRPUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ3Vud3JhcCcsXG4gICAgaW5zZXJ0VGV4dDogJ3Vud3JhcCcsXG4gICAgZGV0YWlsOiAndW53cmFwIGlkZW50aWZpZXInLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVGFrZSBsYWJlbHMgYW5kIHVzZSB0aGUgdmFsdWVzIGFzIHNhbXBsZSBkYXRhIGZvciBtZXRyaWMgYWdncmVnYXRpb25zLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndW5wYWNrJyxcbiAgICBpbnNlcnRUZXh0OiAndW5wYWNrJyxcbiAgICBkZXRhaWw6ICd1bnBhY2sgaWRlbnRpZmllcicsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdQYXJzZXMgYSBKU09OIGxvZyBsaW5lLCB1bnBhY2tpbmcgYWxsIGVtYmVkZGVkIGxhYmVscyBpbiB0aGUgcGFjayBzdGFnZS4gQSBzcGVjaWFsIHByb3BlcnR5IFwiX2VudHJ5XCIgd2lsbCBhbHNvIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgb3JpZ2luYWwgbG9nIGxpbmUuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdsYWJlbF9mb3JtYXQnLFxuICAgIGluc2VydFRleHQ6ICdsYWJlbF9mb3JtYXQnLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVXNlIHRvIHJlbmFtZSwgbW9kaWZ5IG9yIGFkZCBsYWJlbHMuIEZvciBleGFtcGxlLCB8IGxhYmVsX2Zvcm1hdCBmb289YmFyIC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2xpbmVfZm9ybWF0JyxcbiAgICBpbnNlcnRUZXh0OiAnbGluZV9mb3JtYXQnLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV3cml0ZXMgbG9nIGxpbmUgY29udGVudC4gRm9yIGV4YW1wbGUsIHwgbGluZV9mb3JtYXQgXCJ7ey5xdWVyeX19IHt7LmR1cmF0aW9ufX1cIiAuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFJBTkdFX1ZFQ19GVU5DVElPTlMgPSBbXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYXZnX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdhdmdfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdhdmdfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgYXZlcmFnZSBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21pbl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbWluX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbWluX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1pbmltdW0gb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ21heF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ21heF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtYXhpbXVtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3VtX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdW1fb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdW1fb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgc3VtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2NvdW50X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnY291bnRfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgY291bnQgb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdGR2YXJfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdGR2YXJfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgdmFyaWFuY2Ugb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdGRkZXZfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N0ZGRldl9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N0ZGRldl9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdUaGUgcG9wdWxhdGlvbiBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdxdWFudGlsZV9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdxdWFudGlsZV9vdmVyX3RpbWUoc2NhbGFyLCByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdieXRlc19vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnYnl0ZXNfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdieXRlc19vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvdW50cyB0aGUgYW1vdW50IG9mIGJ5dGVzIHVzZWQgYnkgZWFjaCBsb2cgc3RyZWFtIGZvciBhIGdpdmVuIHJhbmdlJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdieXRlc19yYXRlJyxcbiAgICBsYWJlbDogJ2J5dGVzX3JhdGUnLFxuICAgIGRldGFpbDogJ2J5dGVzX3JhdGUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBieXRlcyBwZXIgc2Vjb25kIGZvciBlYWNoIHN0cmVhbS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3JhdGUnLFxuICAgIGxhYmVsOiAncmF0ZScsXG4gICAgZGV0YWlsOiAncmF0ZSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgZW50cmllcyBwZXIgc2Vjb25kLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRlVOQ1RJT05TID0gWy4uLkFHR1JFR0FUSU9OX09QRVJBVE9SUywgLi4uUkFOR0VfVkVDX0ZVTkNUSU9OU107XG5leHBvcnQgY29uc3QgTE9LSV9LRVlXT1JEUyA9IFsuLi5GVU5DVElPTlMsIC4uLlBJUEVfT1BFUkFUT1JTLCAuLi5QSVBFX1BBUlNFUlNdLm1hcCgoa2V5d29yZCkgPT4ga2V5d29yZC5sYWJlbCk7XG5cbmV4cG9ydCBjb25zdCBsb2tpR3JhbW1hcjogR3JhbW1hciA9IHtcbiAgY29tbWVudDoge1xuICAgIHBhdHRlcm46IC8jLiovLFxuICB9LFxuICAnY29udGV4dC1hZ2dyZWdhdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvKCh3aXRob3V0fGJ5KVxccyopXFwoW14pXSpcXCkvLCAvLyBieSAoKVxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW14oKSxcXHNdW14sKV0qW14pLFxcc10qLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpXS8sXG4gICAgfSxcbiAgfSxcbiAgJ2NvbnRleHQtbGFiZWxzJzoge1xuICAgIHBhdHRlcm46IC9cXHtbXn1dKig/PX0/KS8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvIy4qLyxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW2EtekEtWl9dXFx3Kig/PVxccyooPXwhPXw9fnwhfikpLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgJ2xhYmVsLXZhbHVlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ2F0dHItdmFsdWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW3tdLyxcbiAgICB9LFxuICB9LFxuICAnY29udGV4dC1waXBlJzoge1xuICAgIHBhdHRlcm46IC9cXHNcXHxbXj1+XVxccz9cXHcqL2ksXG4gICAgaW5zaWRlOiB7XG4gICAgICAncGlwZS1vcGVyYXRvcic6IHtcbiAgICAgICAgcGF0dGVybjogL1xcfC9pLFxuICAgICAgICBhbGlhczogJ29wZXJhdG9yJyxcbiAgICAgIH0sXG4gICAgICAncGlwZS1vcGVyYXRpb25zJzoge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAke1suLi5QSVBFX1BBUlNFUlMsIC4uLlBJUEVfT1BFUkFUT1JTXS5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX1gLCAnaScpLFxuICAgICAgICBhbGlhczogJ2tleXdvcmQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBmdW5jdGlvbjogbmV3IFJlZ0V4cChgXFxcXGIoPzoke0ZVTkNUSU9OUy5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX0pKD89XFxcXHMqXFxcXCgpYCwgJ2knKSxcbiAgJ2NvbnRleHQtcmFuZ2UnOiBbXG4gICAge1xuICAgICAgcGF0dGVybjogL1xcW1teXFxdXSooPz1cXF0pLywgLy8gWzFtXVxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdHRlcm46IC8ob2Zmc2V0XFxzKylcXHcrLywgLy8gb2Zmc2V0IDFtXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBxdW90ZToge1xuICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXSkqXCIvLFxuICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICBncmVlZHk6IHRydWUsXG4gIH0sXG4gIGJhY2t0aWNrczoge1xuICAgIHBhdHRlcm46IC9gKD86XFxcXC58W15cXFxcYF0pKmAvLFxuICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICBncmVlZHk6IHRydWUsXG4gIH0sXG4gIG51bWJlcjogL1xcYi0/XFxkKygoXFwuXFxkKik/KFtlRV1bKy1dP1xcZCspPyk/XFxiLyxcbiAgb3BlcmF0b3I6IC9cXHM/KFxcfFs9fl0/fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dPylcXHM/L2ksXG4gIHB1bmN0dWF0aW9uOiAvW3t9KCksLl0vLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9raUdyYW1tYXI7XG4iLCJpbXBvcnQgeyBHcmFtbWFyIH0gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgeyBDb21wbGV0aW9uSXRlbSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuLy8gV2hlbiBjaGFuZ2luZyBSQVRFX1JBTkdFUywgY2hlY2sgaWYgTG9raS9Mb2dRTCByYW5nZXMgc2hvdWxkIGJlIGNoYW5nZWQgdG9vXG4vLyBAc2VlIHB1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvbGFuZ3VhZ2VfcHJvdmlkZXIudHNcbmV4cG9ydCBjb25zdCBSQVRFX1JBTkdFUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAgeyBsYWJlbDogJyRfX2ludGVydmFsJywgc29ydFZhbHVlOiAnJF9faW50ZXJ2YWwnIH0sXG4gIHsgbGFiZWw6ICckX19yYXRlX2ludGVydmFsJywgc29ydFZhbHVlOiAnJF9fcmF0ZV9pbnRlcnZhbCcgfSxcbiAgeyBsYWJlbDogJyRfX3JhbmdlJywgc29ydFZhbHVlOiAnJF9fcmFuZ2UnIH0sXG4gIHsgbGFiZWw6ICcxbScsIHNvcnRWYWx1ZTogJzAwOjAxOjAwJyB9LFxuICB7IGxhYmVsOiAnNW0nLCBzb3J0VmFsdWU6ICcwMDowNTowMCcgfSxcbiAgeyBsYWJlbDogJzEwbScsIHNvcnRWYWx1ZTogJzAwOjEwOjAwJyB9LFxuICB7IGxhYmVsOiAnMzBtJywgc29ydFZhbHVlOiAnMDA6MzA6MDAnIH0sXG4gIHsgbGFiZWw6ICcxaCcsIHNvcnRWYWx1ZTogJzAxOjAwOjAwJyB9LFxuICB7IGxhYmVsOiAnMWQnLCBzb3J0VmFsdWU6ICcyNDowMDowMCcgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBPUEVSQVRPUlMgPSBbJ2J5JywgJ2dyb3VwX2xlZnQnLCAnZ3JvdXBfcmlnaHQnLCAnaWdub3JpbmcnLCAnb24nLCAnb2Zmc2V0JywgJ3dpdGhvdXQnXTtcbmV4cG9ydCBjb25zdCBMT0dJQ0FMX09QRVJBVE9SUyA9IFsnb3InLCAnYW5kJywgJ3VubGVzcyddO1xuXG5jb25zdCBUUklHT05PTUVUUklDX0ZVTkNUSU9OUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAge1xuICAgIGxhYmVsOiAnYWNvcycsXG4gICAgaW5zZXJ0VGV4dDogJ2Fjb3MnLFxuICAgIGRldGFpbDogJ2Fjb3ModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBhcmNjb3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhY29zaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2Fjb3NoJyxcbiAgICBkZXRhaWw6ICdhY29zaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGludmVyc2UgaHlwZXJib2xpYyBjb3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhc2luJyxcbiAgICBpbnNlcnRUZXh0OiAnYXNpbicsXG4gICAgZGV0YWlsOiAnYXNpbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGFyY3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhc2luaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2FzaW5oJyxcbiAgICBkZXRhaWw6ICdhc2luaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGludmVyc2UgaHlwZXJib2xpYyBzaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXRhbicsXG4gICAgaW5zZXJ0VGV4dDogJ2F0YW4nLFxuICAgIGRldGFpbDogJ2F0YW4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBhcmN0YW5nZW50IG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXRhbmgnLFxuICAgIGluc2VydFRleHQ6ICdhdGFuaCcsXG4gICAgZGV0YWlsOiAnYXRhbmgodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBpbnZlcnNlIGh5cGVyYm9saWMgdGFuZ2VudCBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2NvcycsXG4gICAgaW5zZXJ0VGV4dDogJ2NvcycsXG4gICAgZGV0YWlsOiAnY29zKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgY29zaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnY29zaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2Nvc2gnLFxuICAgIGRldGFpbDogJ2Nvc2godiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBoeXBlcmJvbGljIGNvc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3NpbicsXG4gICAgaW5zZXJ0VGV4dDogJ3NpbicsXG4gICAgZGV0YWlsOiAnc2luKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3NpbmgnLFxuICAgIGluc2VydFRleHQ6ICdzaW5oJyxcbiAgICBkZXRhaWw6ICdzaW5oKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaHlwZXJib2xpYyBzaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndGFuJyxcbiAgICBpbnNlcnRUZXh0OiAndGFuJyxcbiAgICBkZXRhaWw6ICd0YW4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSB0YW5nZW50IG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndGFuaCcsXG4gICAgaW5zZXJ0VGV4dDogJ3RhbmgnLFxuICAgIGRldGFpbDogJ3RhbmgodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBoeXBlcmJvbGljIHRhbmdlbnQgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuXTtcblxuY29uc3QgQUdHUkVHQVRJT05fT1BFUkFUT1JTOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdzdW0nLFxuICAgIGluc2VydFRleHQ6ICdzdW0nLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgc3VtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ21pbicsXG4gICAgaW5zZXJ0VGV4dDogJ21pbicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NlbGVjdCBtaW5pbXVtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ21heCcsXG4gICAgaW5zZXJ0VGV4dDogJ21heCcsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NlbGVjdCBtYXhpbXVtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2F2ZycsXG4gICAgaW5zZXJ0VGV4dDogJ2F2ZycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSB0aGUgYXZlcmFnZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdncm91cCcsXG4gICAgaW5zZXJ0VGV4dDogJ2dyb3VwJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQWxsIHZhbHVlcyBpbiB0aGUgcmVzdWx0aW5nIHZlY3RvciBhcmUgMScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZGRldicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIGRldmlhdGlvbiBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzdGR2YXInLFxuICAgIGluc2VydFRleHQ6ICdzdGR2YXInLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudCcsXG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ291bnQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB2ZWN0b3InLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudF92YWx1ZXMnLFxuICAgIGluc2VydFRleHQ6ICdjb3VudF92YWx1ZXMnLFxuICAgIGRvY3VtZW50YXRpb246ICdDb3VudCBudW1iZXIgb2YgZWxlbWVudHMgd2l0aCB0aGUgc2FtZSB2YWx1ZScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2JvdHRvbWsnLFxuICAgIGluc2VydFRleHQ6ICdib3R0b21rJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU21hbGxlc3QgayBlbGVtZW50cyBieSBzYW1wbGUgdmFsdWUnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICd0b3BrJyxcbiAgICBpbnNlcnRUZXh0OiAndG9waycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0xhcmdlc3QgayBlbGVtZW50cyBieSBzYW1wbGUgdmFsdWUnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdxdWFudGlsZScsXG4gICAgaW5zZXJ0VGV4dDogJ3F1YW50aWxlJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBGVU5DVElPTlMgPSBbXG4gIC4uLkFHR1JFR0FUSU9OX09QRVJBVE9SUyxcbiAgLi4uVFJJR09OT01FVFJJQ19GVU5DVElPTlMsXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYWJzJyxcbiAgICBsYWJlbDogJ2FicycsXG4gICAgZGV0YWlsOiAnYWJzKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgaW5wdXQgdmVjdG9yIHdpdGggYWxsIHNhbXBsZSB2YWx1ZXMgY29udmVydGVkIHRvIHRoZWlyIGFic29sdXRlIHZhbHVlLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYWJzZW50JyxcbiAgICBsYWJlbDogJ2Fic2VudCcsXG4gICAgZGV0YWlsOiAnYWJzZW50KHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgYW4gZW1wdHkgdmVjdG9yIGlmIHRoZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBhbnkgZWxlbWVudHMgYW5kIGEgMS1lbGVtZW50IHZlY3RvciB3aXRoIHRoZSB2YWx1ZSAxIGlmIHRoZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBubyBlbGVtZW50cy4gVGhpcyBpcyB1c2VmdWwgZm9yIGFsZXJ0aW5nIG9uIHdoZW4gbm8gdGltZSBzZXJpZXMgZXhpc3QgZm9yIGEgZ2l2ZW4gbWV0cmljIG5hbWUgYW5kIGxhYmVsIGNvbWJpbmF0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYWJzZW50X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdhYnNlbnRfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdhYnNlbnQodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgYW4gZW1wdHkgdmVjdG9yIGlmIHRoZSByYW5nZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBhbnkgZWxlbWVudHMgYW5kIGEgMS1lbGVtZW50IHZlY3RvciB3aXRoIHRoZSB2YWx1ZSAxIGlmIHRoZSByYW5nZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBubyBlbGVtZW50cy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NlaWwnLFxuICAgIGxhYmVsOiAnY2VpbCcsXG4gICAgZGV0YWlsOiAnY2VpbCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JvdW5kcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHVwIHRvIHRoZSBuZWFyZXN0IGludGVnZXIuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjaGFuZ2VzJyxcbiAgICBsYWJlbDogJ2NoYW5nZXMnLFxuICAgIGRldGFpbDogJ2NoYW5nZXModiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0ZvciBlYWNoIGlucHV0IHRpbWUgc2VyaWVzLCBgY2hhbmdlcyh2IHJhbmdlLXZlY3RvcilgIHJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyBpdHMgdmFsdWUgaGFzIGNoYW5nZWQgd2l0aGluIHRoZSBwcm92aWRlZCB0aW1lIHJhbmdlIGFzIGFuIGluc3RhbnQgdmVjdG9yLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2xhbXAnLFxuICAgIGxhYmVsOiAnY2xhbXAnLFxuICAgIGRldGFpbDogJ2NsYW1wKHYgaW5zdGFudC12ZWN0b3IsIG1pbiBzY2FsYXIsIG1heCBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NsYW1wcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHRvIGhhdmUgYSBsb3dlciBsaW1pdCBvZiBgbWluYCBhbmQgYW4gdXBwZXIgbGltaXQgb2YgYG1heGAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjbGFtcF9tYXgnLFxuICAgIGxhYmVsOiAnY2xhbXBfbWF4JyxcbiAgICBkZXRhaWw6ICdjbGFtcF9tYXgodiBpbnN0YW50LXZlY3RvciwgbWF4IHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDbGFtcHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCB0byBoYXZlIGFuIHVwcGVyIGxpbWl0IG9mIGBtYXhgLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2xhbXBfbWluJyxcbiAgICBsYWJlbDogJ2NsYW1wX21pbicsXG4gICAgZGV0YWlsOiAnY2xhbXBfbWluKHYgaW5zdGFudC12ZWN0b3IsIG1pbiBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2xhbXBzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdG8gaGF2ZSBhIGxvd2VyIGxpbWl0IG9mIGBtaW5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfc2NhbGFyJyxcbiAgICBsYWJlbDogJ2NvdW50X3NjYWxhcicsXG4gICAgZGV0YWlsOiAnY291bnRfc2NhbGFyKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIHRpbWUgc2VyaWVzIHZlY3RvciBhcyBhIHNjYWxhci4gVGhpcyBpcyBpbiBjb250cmFzdCB0byB0aGUgYGNvdW50KClgIGFnZ3JlZ2F0aW9uIG9wZXJhdG9yLCB3aGljaCBhbHdheXMgcmV0dXJucyBhIHZlY3RvciAoYW4gZW1wdHkgb25lIGlmIHRoZSBpbnB1dCB2ZWN0b3IgaXMgZW1wdHkpIGFuZCBhbGxvd3MgZ3JvdXBpbmcgYnkgbGFiZWxzIHZpYSBhIGBieWAgY2xhdXNlLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGVnJyxcbiAgICBsYWJlbDogJ2RlZycsXG4gICAgZGV0YWlsOiAnZGVnKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ29udmVydHMgcmFkaWFucyB0byBkZWdyZWVzIGZvciBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGF5X29mX21vbnRoJyxcbiAgICBsYWJlbDogJ2RheV9vZl9tb250aCcsXG4gICAgZGV0YWlsOiAnZGF5X29mX21vbnRoKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgZGF5IG9mIHRoZSBtb250aCBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMSB0byAzMS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2RheV9vZl93ZWVrJyxcbiAgICBsYWJlbDogJ2RheV9vZl93ZWVrJyxcbiAgICBkZXRhaWw6ICdkYXlfb2Zfd2Vlayh2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBkYXkgb2YgdGhlIHdlZWsgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDAgdG8gNiwgd2hlcmUgMCBtZWFucyBTdW5kYXkgZXRjLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGF5c19pbl9tb250aCcsXG4gICAgbGFiZWw6ICdkYXlzX2luX21vbnRoJyxcbiAgICBkZXRhaWw6ICdkYXlzX2luX21vbnRoKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRoIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAyOCB0byAzMS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2RlbHRhJyxcbiAgICBsYWJlbDogJ2RlbHRhJyxcbiAgICBkZXRhaWw6ICdkZWx0YSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBmaXJzdCBhbmQgbGFzdCB2YWx1ZSBvZiBlYWNoIHRpbWUgc2VyaWVzIGVsZW1lbnQgaW4gYSByYW5nZSB2ZWN0b3IgYHZgLCByZXR1cm5pbmcgYW4gaW5zdGFudCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gZGVsdGFzIGFuZCBlcXVpdmFsZW50IGxhYmVscy4gVGhlIGRlbHRhIGlzIGV4dHJhcG9sYXRlZCB0byBjb3ZlciB0aGUgZnVsbCB0aW1lIHJhbmdlIGFzIHNwZWNpZmllZCBpbiB0aGUgcmFuZ2UgdmVjdG9yIHNlbGVjdG9yLCBzbyB0aGF0IGl0IGlzIHBvc3NpYmxlIHRvIGdldCBhIG5vbi1pbnRlZ2VyIHJlc3VsdCBldmVuIGlmIHRoZSBzYW1wbGUgdmFsdWVzIGFyZSBhbGwgaW50ZWdlcnMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkZXJpdicsXG4gICAgbGFiZWw6ICdkZXJpdicsXG4gICAgZGV0YWlsOiAnZGVyaXYodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIHBlci1zZWNvbmQgZGVyaXZhdGl2ZSBvZiB0aGUgdGltZSBzZXJpZXMgaW4gYSByYW5nZSB2ZWN0b3IgYHZgLCB1c2luZyBzaW1wbGUgbGluZWFyIHJlZ3Jlc3Npb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkcm9wX2NvbW1vbl9sYWJlbHMnLFxuICAgIGxhYmVsOiAnZHJvcF9jb21tb25fbGFiZWxzJyxcbiAgICBkZXRhaWw6ICdkcm9wX2NvbW1vbl9sYWJlbHMoaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRHJvcHMgYWxsIGxhYmVscyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhbmQgdmFsdWUgYWNyb3NzIGFsbCBzZXJpZXMgaW4gdGhlIGlucHV0IHZlY3Rvci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2V4cCcsXG4gICAgbGFiZWw6ICdleHAnLFxuICAgIGRldGFpbDogJ2V4cCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBleHBvbmVudGlhbCBmdW5jdGlvbiBmb3IgYWxsIGVsZW1lbnRzIGluIGB2YC5cXG5TcGVjaWFsIGNhc2VzIGFyZTpcXG4qIGBFeHAoK0luZikgPSArSW5mYCBcXG4qIGBFeHAoTmFOKSA9IE5hTmAnLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2Zsb29yJyxcbiAgICBsYWJlbDogJ2Zsb29yJyxcbiAgICBkZXRhaWw6ICdmbG9vcih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JvdW5kcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIGRvd24gdG8gdGhlIG5lYXJlc3QgaW50ZWdlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2hpc3RvZ3JhbV9xdWFudGlsZScsXG4gICAgbGFiZWw6ICdoaXN0b2dyYW1fcXVhbnRpbGUnLFxuICAgIGRldGFpbDogJ2hpc3RvZ3JhbV9xdWFudGlsZSjPhiBmbG9hdCwgYiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgz4YtcXVhbnRpbGUgKDAg4omkIM+GIOKJpCAxKSBmcm9tIHRoZSBidWNrZXRzIGBiYCBvZiBhIGhpc3RvZ3JhbS4gVGhlIHNhbXBsZXMgaW4gYGJgIGFyZSB0aGUgY291bnRzIG9mIG9ic2VydmF0aW9ucyBpbiBlYWNoIGJ1Y2tldC4gRWFjaCBzYW1wbGUgbXVzdCBoYXZlIGEgbGFiZWwgYGxlYCB3aGVyZSB0aGUgbGFiZWwgdmFsdWUgZGVub3RlcyB0aGUgaW5jbHVzaXZlIHVwcGVyIGJvdW5kIG9mIHRoZSBidWNrZXQuIChTYW1wbGVzIHdpdGhvdXQgc3VjaCBhIGxhYmVsIGFyZSBzaWxlbnRseSBpZ25vcmVkLikgVGhlIGhpc3RvZ3JhbSBtZXRyaWMgdHlwZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVzIHRpbWUgc2VyaWVzIHdpdGggdGhlIGBfYnVja2V0YCBzdWZmaXggYW5kIHRoZSBhcHByb3ByaWF0ZSBsYWJlbHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdob2x0X3dpbnRlcnMnLFxuICAgIGxhYmVsOiAnaG9sdF93aW50ZXJzJyxcbiAgICBkZXRhaWw6ICdob2x0X3dpbnRlcnModiByYW5nZS12ZWN0b3IsIHNmIHNjYWxhciwgdGYgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdQcm9kdWNlcyBhIHNtb290aGVkIHZhbHVlIGZvciB0aW1lIHNlcmllcyBiYXNlZCBvbiB0aGUgcmFuZ2UgaW4gYHZgLiBUaGUgbG93ZXIgdGhlIHNtb290aGluZyBmYWN0b3IgYHNmYCwgdGhlIG1vcmUgaW1wb3J0YW5jZSBpcyBnaXZlbiB0byBvbGQgZGF0YS4gVGhlIGhpZ2hlciB0aGUgdHJlbmQgZmFjdG9yIGB0ZmAsIHRoZSBtb3JlIHRyZW5kcyBpbiB0aGUgZGF0YSBpcyBjb25zaWRlcmVkLiBCb3RoIGBzZmAgYW5kIGB0ZmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdob3VyJyxcbiAgICBsYWJlbDogJ2hvdXInLFxuICAgIGRldGFpbDogJ2hvdXIodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSBob3VyIG9mIHRoZSBkYXkgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDAgdG8gMjMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdpZGVsdGEnLFxuICAgIGxhYmVsOiAnaWRlbHRhJyxcbiAgICBkZXRhaWw6ICdpZGVsdGEodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbGFzdCB0d28gc2FtcGxlcyBpbiB0aGUgcmFuZ2UgdmVjdG9yIGB2YCwgcmV0dXJuaW5nIGFuIGluc3RhbnQgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGRlbHRhcyBhbmQgZXF1aXZhbGVudCBsYWJlbHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdpbmNyZWFzZScsXG4gICAgbGFiZWw6ICdpbmNyZWFzZScsXG4gICAgZGV0YWlsOiAnaW5jcmVhc2UodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGluY3JlYXNlIGluIHRoZSB0aW1lIHNlcmllcyBpbiB0aGUgcmFuZ2UgdmVjdG9yLiBCcmVha3MgaW4gbW9ub3RvbmljaXR5IChzdWNoIGFzIGNvdW50ZXIgcmVzZXRzIGR1ZSB0byB0YXJnZXQgcmVzdGFydHMpIGFyZSBhdXRvbWF0aWNhbGx5IGFkanVzdGVkIGZvci4gVGhlIGluY3JlYXNlIGlzIGV4dHJhcG9sYXRlZCB0byBjb3ZlciB0aGUgZnVsbCB0aW1lIHJhbmdlIGFzIHNwZWNpZmllZCBpbiB0aGUgcmFuZ2UgdmVjdG9yIHNlbGVjdG9yLCBzbyB0aGF0IGl0IGlzIHBvc3NpYmxlIHRvIGdldCBhIG5vbi1pbnRlZ2VyIHJlc3VsdCBldmVuIGlmIGEgY291bnRlciBpbmNyZWFzZXMgb25seSBieSBpbnRlZ2VyIGluY3JlbWVudHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdpcmF0ZScsXG4gICAgbGFiZWw6ICdpcmF0ZScsXG4gICAgZGV0YWlsOiAnaXJhdGUodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIHBlci1zZWNvbmQgaW5zdGFudCByYXRlIG9mIGluY3JlYXNlIG9mIHRoZSB0aW1lIHNlcmllcyBpbiB0aGUgcmFuZ2UgdmVjdG9yLiBUaGlzIGlzIGJhc2VkIG9uIHRoZSBsYXN0IHR3byBkYXRhIHBvaW50cy4gQnJlYWtzIGluIG1vbm90b25pY2l0eSAoc3VjaCBhcyBjb3VudGVyIHJlc2V0cyBkdWUgdG8gdGFyZ2V0IHJlc3RhcnRzKSBhcmUgYXV0b21hdGljYWxseSBhZGp1c3RlZCBmb3IuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsYWJlbF9qb2luJyxcbiAgICBsYWJlbDogJ2xhYmVsX2pvaW4nLFxuICAgIGRldGFpbDpcbiAgICAgICdsYWJlbF9qb2luKHYgaW5zdGFudC12ZWN0b3IsIGRzdF9sYWJlbCBzdHJpbmcsIHNlcGFyYXRvciBzdHJpbmcsIHNyY19sYWJlbF8xIHN0cmluZywgc3JjX2xhYmVsXzIgc3RyaW5nLCAuLi4pJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0ZvciBlYWNoIHRpbWVzZXJpZXMgaW4gYHZgLCBqb2lucyBhbGwgdGhlIHZhbHVlcyBvZiBhbGwgdGhlIGBzcmNfbGFiZWxzYCB1c2luZyBgc2VwYXJhdG9yYCBhbmQgcmV0dXJucyB0aGUgdGltZXNlcmllcyB3aXRoIHRoZSBsYWJlbCBgZHN0X2xhYmVsYCBjb250YWluaW5nIHRoZSBqb2luZWQgdmFsdWUuIFRoZXJlIGNhbiBiZSBhbnkgbnVtYmVyIG9mIGBzcmNfbGFiZWxzYCBpbiB0aGlzIGZ1bmN0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbGFiZWxfcmVwbGFjZScsXG4gICAgbGFiZWw6ICdsYWJlbF9yZXBsYWNlJyxcbiAgICBkZXRhaWw6ICdsYWJlbF9yZXBsYWNlKHYgaW5zdGFudC12ZWN0b3IsIGRzdF9sYWJlbCBzdHJpbmcsIHJlcGxhY2VtZW50IHN0cmluZywgc3JjX2xhYmVsIHN0cmluZywgcmVnZXggc3RyaW5nKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgIFwiRm9yIGVhY2ggdGltZXNlcmllcyBpbiBgdmAsIGBsYWJlbF9yZXBsYWNlKHYgaW5zdGFudC12ZWN0b3IsIGRzdF9sYWJlbCBzdHJpbmcsIHJlcGxhY2VtZW50IHN0cmluZywgc3JjX2xhYmVsIHN0cmluZywgcmVnZXggc3RyaW5nKWAgIG1hdGNoZXMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBgcmVnZXhgIGFnYWluc3QgdGhlIGxhYmVsIGBzcmNfbGFiZWxgLiAgSWYgaXQgbWF0Y2hlcywgdGhlbiB0aGUgdGltZXNlcmllcyBpcyByZXR1cm5lZCB3aXRoIHRoZSBsYWJlbCBgZHN0X2xhYmVsYCByZXBsYWNlZCBieSB0aGUgZXhwYW5zaW9uIG9mIGByZXBsYWNlbWVudGAuIGAkMWAgaXMgcmVwbGFjZWQgd2l0aCB0aGUgZmlyc3QgbWF0Y2hpbmcgc3ViZ3JvdXAsIGAkMmAgd2l0aCB0aGUgc2Vjb25kIGV0Yy4gSWYgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBkb2Vzbid0IG1hdGNoIHRoZW4gdGhlIHRpbWVzZXJpZXMgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlwiLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xuJyxcbiAgICBsYWJlbDogJ2xuJyxcbiAgICBkZXRhaWw6ICdsbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBuYXR1cmFsIGxvZ2FyaXRobSBmb3IgYWxsIGVsZW1lbnRzIGluIGB2YC5cXG5TcGVjaWFsIGNhc2VzIGFyZTpcXG4gKiBgbG4oK0luZikgPSArSW5mYFxcbiAqIGBsbigwKSA9IC1JbmZgXFxuICogYGxuKHggPCAwKSA9IE5hTmBcXG4gKiBgbG4oTmFOKSA9IE5hTmAnLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xvZzInLFxuICAgIGxhYmVsOiAnbG9nMicsXG4gICAgZGV0YWlsOiAnbG9nMih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBiaW5hcnkgbG9nYXJpdGhtIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLiBUaGUgc3BlY2lhbCBjYXNlcyBhcmUgZXF1aXZhbGVudCB0byB0aG9zZSBpbiBgbG5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbG9nMTAnLFxuICAgIGxhYmVsOiAnbG9nMTAnLFxuICAgIGRldGFpbDogJ2xvZzEwKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGRlY2ltYWwgbG9nYXJpdGhtIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLiBUaGUgc3BlY2lhbCBjYXNlcyBhcmUgZXF1aXZhbGVudCB0byB0aG9zZSBpbiBgbG5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWludXRlJyxcbiAgICBsYWJlbDogJ21pbnV0ZScsXG4gICAgZGV0YWlsOiAnbWludXRlKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG1pbnV0ZSBvZiB0aGUgaG91ciBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMCB0byA1OS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21vbnRoJyxcbiAgICBsYWJlbDogJ21vbnRoJyxcbiAgICBkZXRhaWw6ICdtb250aCh2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBtb250aCBvZiB0aGUgeWVhciBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMSB0byAxMiwgd2hlcmUgMSBtZWFucyBKYW51YXJ5IGV0Yy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3BpJyxcbiAgICBsYWJlbDogJ3BpJyxcbiAgICBkZXRhaWw6ICdwaSgpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyBwaScsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncHJlZGljdF9saW5lYXInLFxuICAgIGxhYmVsOiAncHJlZGljdF9saW5lYXInLFxuICAgIGRldGFpbDogJ3ByZWRpY3RfbGluZWFyKHYgcmFuZ2UtdmVjdG9yLCB0IHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUHJlZGljdHMgdGhlIHZhbHVlIG9mIHRpbWUgc2VyaWVzIGB0YCBzZWNvbmRzIGZyb20gbm93LCBiYXNlZCBvbiB0aGUgcmFuZ2UgdmVjdG9yIGB2YCwgdXNpbmcgc2ltcGxlIGxpbmVhciByZWdyZXNzaW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmFkJyxcbiAgICBsYWJlbDogJ3JhZCcsXG4gICAgZGV0YWlsOiAncmFkKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ29udmVydHMgZGVncmVlcyB0byByYWRpYW5zIGZvciBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmF0ZScsXG4gICAgbGFiZWw6ICdyYXRlJyxcbiAgICBkZXRhaWw6ICdyYXRlKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgIFwiQ2FsY3VsYXRlcyB0aGUgcGVyLXNlY29uZCBhdmVyYWdlIHJhdGUgb2YgaW5jcmVhc2Ugb2YgdGhlIHRpbWUgc2VyaWVzIGluIHRoZSByYW5nZSB2ZWN0b3IuIEJyZWFrcyBpbiBtb25vdG9uaWNpdHkgKHN1Y2ggYXMgY291bnRlciByZXNldHMgZHVlIHRvIHRhcmdldCByZXN0YXJ0cykgYXJlIGF1dG9tYXRpY2FsbHkgYWRqdXN0ZWQgZm9yLiBBbHNvLCB0aGUgY2FsY3VsYXRpb24gZXh0cmFwb2xhdGVzIHRvIHRoZSBlbmRzIG9mIHRoZSB0aW1lIHJhbmdlLCBhbGxvd2luZyBmb3IgbWlzc2VkIHNjcmFwZXMgb3IgaW1wZXJmZWN0IGFsaWdubWVudCBvZiBzY3JhcGUgY3ljbGVzIHdpdGggdGhlIHJhbmdlJ3MgdGltZSBwZXJpb2QuXCIsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmVzZXRzJyxcbiAgICBsYWJlbDogJ3Jlc2V0cycsXG4gICAgZGV0YWlsOiAncmVzZXRzKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdGb3IgZWFjaCBpbnB1dCB0aW1lIHNlcmllcywgYHJlc2V0cyh2IHJhbmdlLXZlY3RvcilgIHJldHVybnMgdGhlIG51bWJlciBvZiBjb3VudGVyIHJlc2V0cyB3aXRoaW4gdGhlIHByb3ZpZGVkIHRpbWUgcmFuZ2UgYXMgYW4gaW5zdGFudCB2ZWN0b3IuIEFueSBkZWNyZWFzZSBpbiB0aGUgdmFsdWUgYmV0d2VlbiB0d28gY29uc2VjdXRpdmUgc2FtcGxlcyBpcyBpbnRlcnByZXRlZCBhcyBhIGNvdW50ZXIgcmVzZXQuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyb3VuZCcsXG4gICAgbGFiZWw6ICdyb3VuZCcsXG4gICAgZGV0YWlsOiAncm91bmQodiBpbnN0YW50LXZlY3RvciwgdG9fbmVhcmVzdD0xIHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUm91bmRzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdG8gdGhlIG5lYXJlc3QgaW50ZWdlci4gVGllcyBhcmUgcmVzb2x2ZWQgYnkgcm91bmRpbmcgdXAuIFRoZSBvcHRpb25hbCBgdG9fbmVhcmVzdGAgYXJndW1lbnQgYWxsb3dzIHNwZWNpZnlpbmcgdGhlIG5lYXJlc3QgbXVsdGlwbGUgdG8gd2hpY2ggdGhlIHNhbXBsZSB2YWx1ZXMgc2hvdWxkIGJlIHJvdW5kZWQuIFRoaXMgbXVsdGlwbGUgbWF5IGFsc28gYmUgYSBmcmFjdGlvbi4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NjYWxhcicsXG4gICAgbGFiZWw6ICdzY2FsYXInLFxuICAgIGRldGFpbDogJ3NjYWxhcih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdHaXZlbiBhIHNpbmdsZS1lbGVtZW50IGlucHV0IHZlY3RvciwgYHNjYWxhcih2IGluc3RhbnQtdmVjdG9yKWAgcmV0dXJucyB0aGUgc2FtcGxlIHZhbHVlIG9mIHRoYXQgc2luZ2xlIGVsZW1lbnQgYXMgYSBzY2FsYXIuIElmIHRoZSBpbnB1dCB2ZWN0b3IgZG9lcyBub3QgaGF2ZSBleGFjdGx5IG9uZSBlbGVtZW50LCBgc2NhbGFyYCB3aWxsIHJldHVybiBgTmFOYC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NnbicsXG4gICAgbGFiZWw6ICdzZ24nLFxuICAgIGRldGFpbDogJ3Nnbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIGEgdmVjdG9yIHdpdGggYWxsIHNhbXBsZSB2YWx1ZXMgY29udmVydGVkIHRvIHRoZWlyIHNpZ24sIGRlZmluZWQgYXMgdGhpczogMSBpZiB2IGlzIHBvc2l0aXZlLCAtMSBpZiB2IGlzIG5lZ2F0aXZlIGFuZCAwIGlmIHYgaXMgZXF1YWwgdG8gemVyby4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NvcnQnLFxuICAgIGxhYmVsOiAnc29ydCcsXG4gICAgZGV0YWlsOiAnc29ydCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdmVjdG9yIGVsZW1lbnRzIHNvcnRlZCBieSB0aGVpciBzYW1wbGUgdmFsdWVzLCBpbiBhc2NlbmRpbmcgb3JkZXIuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzb3J0X2Rlc2MnLFxuICAgIGxhYmVsOiAnc29ydF9kZXNjJyxcbiAgICBkZXRhaWw6ICdzb3J0X2Rlc2ModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHZlY3RvciBlbGVtZW50cyBzb3J0ZWQgYnkgdGhlaXIgc2FtcGxlIHZhbHVlcywgaW4gZGVzY2VuZGluZyBvcmRlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NxcnQnLFxuICAgIGxhYmVsOiAnc3FydCcsXG4gICAgZGV0YWlsOiAnc3FydCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZXMgdGhlIHNxdWFyZSByb290IG9mIGFsbCBlbGVtZW50cyBpbiBgdmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICd0aW1lJyxcbiAgICBsYWJlbDogJ3RpbWUnLFxuICAgIGRldGFpbDogJ3RpbWUoKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSBKYW51YXJ5IDEsIDE5NzAgVVRDLiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBhY3R1YWxseSByZXR1cm4gdGhlIGN1cnJlbnQgdGltZSwgYnV0IHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBleHByZXNzaW9uIGlzIHRvIGJlIGV2YWx1YXRlZC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3RpbWVzdGFtcCcsXG4gICAgbGFiZWw6ICd0aW1lc3RhbXAnLFxuICAgIGRldGFpbDogJ3RpbWVzdGFtcCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSB0aW1lc3RhbXAgb2YgZWFjaCBvZiB0aGUgc2FtcGxlcyBvZiB0aGUgZ2l2ZW4gdmVjdG9yIGFzIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSBKYW51YXJ5IDEsIDE5NzAgVVRDLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAndmVjdG9yJyxcbiAgICBsYWJlbDogJ3ZlY3RvcicsXG4gICAgZGV0YWlsOiAndmVjdG9yKHMgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdGhlIHNjYWxhciBgc2AgYXMgYSB2ZWN0b3Igd2l0aCBubyBsYWJlbHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICd5ZWFyJyxcbiAgICBsYWJlbDogJ3llYXInLFxuICAgIGRldGFpbDogJ3llYXIodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSB5ZWFyIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdhdmdfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2F2Z19vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2F2Z19vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBhdmVyYWdlIHZhbHVlIG9mIGFsbCBwb2ludHMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21pbl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbWluX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbWluX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1pbmltdW0gdmFsdWUgb2YgYWxsIHBvaW50cyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWF4X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdtYXhfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbWF4aW11bSB2YWx1ZSBvZiBhbGwgcG9pbnRzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdW1fb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N1bV9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N1bV9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBzdW0gb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2NvdW50X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnY291bnRfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgY291bnQgb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3F1YW50aWxlX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAncXVhbnRpbGVfb3Zlcl90aW1lKHNjYWxhciwgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSDPhi1xdWFudGlsZSAoMCDiiaQgz4Yg4omkIDEpIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3RkZGV2X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3RkZGV2X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N0ZHZhcl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3RkdmFyX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgdmFyaWFuY2Ugb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbGFzdF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbGFzdF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2xhc3Rfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbW9zdCByZWNlbnQgcG9pbnQgdmFsdWUgaW4gc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUFJPTV9LRVlXT1JEUyA9IEZVTkNUSU9OUy5tYXAoKGtleXdvcmQpID0+IGtleXdvcmQubGFiZWwpO1xuXG5leHBvcnQgY29uc3QgcHJvbXFsR3JhbW1hcjogR3JhbW1hciA9IHtcbiAgY29tbWVudDoge1xuICAgIHBhdHRlcm46IC8jLiovLFxuICB9LFxuICAnY29udGV4dC1hZ2dyZWdhdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvKChieXx3aXRob3V0KVxccyopXFwoW14pXSpcXCkvLCAvLyBieSAoKVxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW14oKSxcXHNdW14sKV0qW14pLFxcc10qLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpXS8sXG4gICAgfSxcbiAgfSxcbiAgJ2NvbnRleHQtbGFiZWxzJzoge1xuICAgIHBhdHRlcm46IC9cXHtbXn1dKig/PX0/KS8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvIy4qLyxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW2Etel9dXFx3Kig/PVxccyooPXwhPXw9fnwhfikpLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgJ2xhYmVsLXZhbHVlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ2F0dHItdmFsdWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW3tdLyxcbiAgICB9LFxuICB9LFxuICBmdW5jdGlvbjogbmV3IFJlZ0V4cChgXFxcXGIoPzoke0ZVTkNUSU9OUy5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX0pKD89XFxcXHMqXFxcXCgpYCwgJ2knKSxcbiAgJ2NvbnRleHQtcmFuZ2UnOiBbXG4gICAge1xuICAgICAgcGF0dGVybjogL1xcW1teXFxdXSooPz1dKS8sIC8vIFsxbV1cbiAgICAgIGluc2lkZToge1xuICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcYlxcZCtbc21oZHd5XVxcYi9pLFxuICAgICAgICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvKG9mZnNldFxccyspXFx3Ky8sIC8vIG9mZnNldCAxbVxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcYlxcZCtbc21oZHd5XVxcYi9pLFxuICAgICAgICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgaWRMaXN0OiB7XG4gICAgcGF0dGVybjogL1xcZCsoXFx8XFxkKykrLyxcbiAgICBhbGlhczogJ251bWJlcicsXG4gIH0sXG4gIG51bWJlcjogL1xcYi0/XFxkKygoXFwuXFxkKik/KFtlRV1bKy1dP1xcZCspPyk/XFxiLyxcbiAgb3BlcmF0b3I6IG5ldyBSZWdFeHAoYC9bLSsqLz0lXn5dfCYmP3xcXFxcfD9cXFxcfHwhPT98PCg/Oj0+P3w8fD4pP3w+Wz49XT98XFxcXGIoPzoke09QRVJBVE9SUy5qb2luKCd8Jyl9KVxcXFxiYCwgJ2knKSxcbiAgcHVuY3R1YXRpb246IC9be307KClgLC5dLyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb21xbEdyYW1tYXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwidXNlQ2xlYW51cCIsInN0YXRlU2VsZWN0b3IiLCJkaXNwYXRjaCIsInNlbGVjdG9yUmVmIiwiY3VycmVudCIsIk1vZGFsIiwiVmVydGljYWxHcm91cCIsIlJlYWN0IiwiQWxlcnRIb3dUb01vZGFsIiwib25EaXNtaXNzIiwidXNlQ2FsbGJhY2siLCJIaWdobGlnaHRlciIsIkljb24iLCJCdXR0b24iLCJMaW5rQnV0dG9uIiwiQ2FyZCIsIkFsZXJ0UnVsZUl0ZW0iLCJydWxlIiwic2VhcmNoIiwib25Ub2dnbGVQYXVzZSIsInJ1bGVVcmwiLCJ1cmwiLCJwYW5lbElkIiwicmVuZGVyVGV4dCIsInRleHQiLCJuYW1lIiwic3RhdGVJY29uIiwic3RhdGVDbGFzcyIsInN0YXRlVGV4dCIsInN0YXRlQWdlIiwiaW5mbyIsInN0YXRlIiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJQYWdlIiwiYXBwRXZlbnRzIiwiZ2V0TmF2TW9kZWwiLCJnZXRBbGVydFJ1bGVzQXN5bmMiLCJ0b2dnbGVQYXVzZUFsZXJ0UnVsZSIsImdldEFsZXJ0UnVsZUl0ZW1zIiwiZ2V0U2VhcmNoUXVlcnkiLCJjb25maWciLCJsb2NhdGlvblNlcnZpY2UiLCJzZXRTZWFyY2hRdWVyeSIsIkZpbHRlcklucHV0IiwiU2VsZWN0IiwiU2hvd01vZGFsUmVhY3RFdmVudCIsIlVuaWZpZWRBbGVydGluZ1Byb21vdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJhbGVydFJ1bGVzIiwiaXNMb2FkaW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiQWxlcnRSdWxlTGlzdFVuY29ubmVjdGVkIiwibGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbiIsInBhcnRpYWwiLCJwdWJsaXNoIiwiY29tcG9uZW50IiwicHJvcHMiLCJpZCIsInBhdXNlZCIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hSdWxlcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInF1ZXJ5UGFyYW1zIiwiZ2V0U3RhdGVGaWx0ZXIiLCJyZW5kZXIiLCJvblNlYXJjaFF1ZXJ5Q2hhbmdlIiwic3RhdGVGaWx0ZXJzIiwib25TdGF0ZUZpbHRlckNoYW5nZWQiLCJ1bmlmaWVkQWxlcnRpbmdFbmFibGVkIiwib25PcGVuSG93VG8iLCJtYXAiLCJBbGVydCIsInVzZUxvY2FsU3RvcmFnZSIsIkxPQ0FMX1NUT1JBR0VfS0VZIiwic2hvd1VuaWZpZWRBbGVydGluZ1Byb21vdGlvbiIsInNldFNob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24iLCJnZXRCYWNrZW5kU3J2IiwibG9hZEFsZXJ0UnVsZXMiLCJsb2FkZWRBbGVydFJ1bGVzIiwibm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCIsInNldE5vdGlmaWNhdGlvbkNoYW5uZWxzIiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIiwibm90aWZ5QXBwIiwib3B0aW9ucyIsInJ1bGVzIiwiZ2V0IiwicG9zdCIsInN0YXRlRmlsdGVyIiwiZ2V0U2VhcmNoT2JqZWN0IiwidG9TdHJpbmciLCJjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsIiwiZGF0YSIsInB1c2giLCJlcnJvciIsInVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwiLCJwdXQiLCJ0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCIsImdldFN0YXRlIiwiY2hhbm5lbCIsIm5vdGlmaWNhdGlvbkNoYW5uZWwiLCJsb2FkTm90aWZpY2F0aW9uVHlwZXMiLCJhbGVydE5vdGlmaWVycyIsIm5vdGlmaWNhdGlvblR5cGVzIiwic29ydCIsIm8xIiwibzIiLCJsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbCIsInNlYXJjaFF1ZXJ5IiwicmVnZXgiLCJSZWdFeHAiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJ0ZXN0IiwiZ2V0Tm90aWZpY2F0aW9uQ2hhbm5lbCIsImNoYW5uZWxJZCIsImNzcyIsInVybFV0aWwiLCJ1c2VTdHlsZXMyIiwid2l0aEVycm9yQm91bmRhcnkiLCJ1c2VRdWVyeVBhcmFtcyIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUxvY2F0aW9uIiwiQWxlcnRpbmdQYWdlV3JhcHBlciIsIk5vUnVsZXNTcGxhc2giLCJSdWxlTGlzdEVycm9ycyIsIlJ1bGVMaXN0R3JvdXBWaWV3IiwiUnVsZUxpc3RTdGF0ZVZpZXciLCJSdWxlc0ZpbHRlciIsIlJ1bGVTdGF0cyIsInVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMiLCJ1c2VGaWx0ZXJlZFJ1bGVzIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFsbFByb21BbmRSdWxlclJ1bGVzQWN0aW9uIiwidXNlUnVsZXNBY2Nlc3MiLCJSVUxFX0xJU1RfUE9MTF9JTlRFUlZBTF9NUyIsImdldEFsbFJ1bGVzU291cmNlTmFtZXMiLCJnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyIsIlZJRVdTIiwiZ3JvdXBzIiwiUnVsZUxpc3QiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJydWxlc0RhdGFTb3VyY2VOYW1lcyIsImxvY2F0aW9uIiwiZXhwYW5kQWxsIiwic2V0RXhwYW5kQWxsIiwiZmlsdGVycyIsImZpbHRlcnNBY3RpdmUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb21lIiwidW5kZWZpbmVkIiwiY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzIiwiY2FuQ3JlYXRlQ2xvdWRSdWxlcyIsInZpZXciLCJWaWV3Q29tcG9uZW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwcm9tUnVsZVJlcXVlc3RzIiwicHJvbVJ1bGVzIiwicnVsZXJSdWxlUmVxdWVzdHMiLCJydWxlclJ1bGVzIiwiZGlzcGF0Y2hlZCIsImxvYWRpbmciLCJoYXZlUmVzdWx0cyIsInJlc3VsdCIsImxlbmd0aCIsImtleXMiLCJzaG93TmV3QWxlcnRTcGxhc2giLCJjb21iaW5lZE5hbWVzcGFjZXMiLCJmaWx0ZXJlZE5hbWVzcGFjZXMiLCJicmVhayIsImJ1dHRvbnNDb250YWluZXIiLCJzdGF0c0NvbnRhaW5lciIsImV4cGFuZEFsbEJ1dHRvbiIsInJlbmRlclVybCIsInJldHVyblRvIiwicGF0aG5hbWUiLCJzdHlsZSIsInRoZW1lIiwic3BhY2luZyIsImNvbG9ycyIsImJvcmRlciIsIm1lZGl1bSIsInVzZVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJwYWdlSWQiLCJjb250ZXh0U3J2IiwiQXV0aG9yaXplIiwiYWN0aW9ucyIsImZhbGxiYWNrIiwiYWN0aW9uIiwiaGFzQWNjZXNzIiwiY3giLCJEeW5hbWljVGFibGUiLCJEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcyIsInJlbmRlckV4cGFuZGVkQ29udGVudCIsImluZGV4IiwiY29udGVudEd1aWRlbGluZSIsImd1aWRlbGluZSIsInJlbGF0aXZlIiwiaGVhZGVyR3VpZGVsaW5lIiwiXyIsInRvcEd1aWRlbGluZSIsImJvdHRvbUd1aWRlbGluZSIsImJyZWFrcG9pbnRzIiwiZG93biIsIkVkaXRvciIsIlByb21xbFN5bnRheCIsIkxvZ3FsU3ludGF4IiwibGFuZ3VhZ2VzIiwicHJpc21MYW5ndWFnZXMiLCJtYWtlVmFsdWUiLCJTbGF0ZVByaXNtIiwidXNlU3R5bGVzIiwiRGF0YVNvdXJjZVR5cGUiLCJpc0Nsb3VkUnVsZXNTb3VyY2UiLCJXZWxsIiwiSGlnaGxpZ2h0ZWRRdWVyeSIsImxhbmd1YWdlIiwiZXhwciIsInBsdWdpbnMiLCJvbmx5SW4iLCJub2RlIiwidHlwZSIsImdldFN5bnRheCIsInNsYXRlVmFsdWUiLCJFeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsInF1ZXJ5IiwicnVsZXNTb3VyY2UiLCJ3ZWxsIiwiTG9raSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwibW9ub3NwYWNlIiwiUnVsZUxvY2F0aW9uIiwibmFtZXNwYWNlIiwiZ3JvdXAiLCJQcm9tQWxlcnRpbmdSdWxlU3RhdGUiLCJTdGF0ZUNvbG9yZWRUZXh0Iiwic3RhdHVzIiwiSW5hY3RpdmUiLCJzdWNjZXNzIiwiUGVuZGluZyIsIndhcm5pbmciLCJGaXJpbmciLCJuZXV0cmFsIiwic2Vjb25kYXJ5IiwiTGFiZWwiLCJUb29sdGlwIiwiSW5wdXQiLCJTdGFjayIsIk1hdGNoZXJGaWx0ZXIiLCJjbGFzc05hbWUiLCJvbkZpbHRlckNoYW5nZSIsImRlZmF1bHRRdWVyeVN0cmluZyIsInF1ZXJ5U3RyaW5nIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlYXJjaEljb24iLCJpY29uIiwiaW5wdXRXaWR0aCIsIkFjdGlvbkljb24iLCJ0b29sdGlwIiwidG8iLCJvbkNsaWNrIiwidG9vbHRpcFBsYWNlbWVudCIsInJlc3QiLCJhcmlhTGFiZWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiR3JhZmFuYUFsZXJ0U3RhdGUiLCJBbGVydEluc3RhbmNlU3RhdGVGaWx0ZXIiLCJvblN0YXRlRmlsdGVyQ2hhbmdlIiwic3RhdGVPcHRpb25zIiwidiIsIkxvYWRpbmdQbGFjZWhvbGRlciIsIlJ1bGVzR3JvdXAiLCJnZXRSdWxlc0RhdGFTb3VyY2VzIiwiZ2V0UnVsZXNTb3VyY2VOYW1lIiwicGx1cmFsaXplIiwiQ2xvdWRSdWxlcyIsIm5hbWVzcGFjZXMiLCJydWxlc0RhdGFTb3VyY2VzIiwiZGF0YVNvdXJjZXNMb2FkaW5nIiwiZHMiLCJ3cmFwcGVyIiwic2VjdGlvbkhlYWRlciIsImxvYWRlciIsInhsIiwiRm9ybSIsIkZpZWxkIiwiZHVyYXRpb25WYWxpZGF0aW9uUGF0dGVybiIsInVwZGF0ZUxvdGV4TmFtZXNwYWNlQW5kR3JvdXBBY3Rpb24iLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJFZGl0Q2xvdWRHcm91cE1vZGFsIiwib25DbG9zZSIsInVwZGF0ZUxvdGV4TmFtZXNwYWNlQW5kR3JvdXAiLCJkZWZhdWx0VmFsdWVzIiwibmFtZXNwYWNlTmFtZSIsImdyb3VwTmFtZSIsImdyb3VwSW50ZXJ2YWwiLCJ1bmlmaWVkQWxlcnRpbmciLCJvblN1Ym1pdCIsInJ1bGVzU291cmNlTmFtZSIsIm5ld0dyb3VwTmFtZSIsIm5ld05hbWVzcGFjZU5hbWUiLCJtb2RhbCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwiaXNEaXJ0eSIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJKU09OIiwic3RyaW5naWZ5IiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsImZsYXR0ZW5HcmFmYW5hTWFuYWdlZFJ1bGVzIiwiR3JhZmFuYVJ1bGVzIiwid2FudHNHcm91cGVkVmlldyIsIm5hbWVzcGFjZXNGb3JtYXQiLCJDYWxsVG9BY3Rpb25DYXJkIiwiRW1wdHlMaXN0Q1RBIiwiQWxlcnRMYWJlbHMiLCJEZXRhaWxzRmllbGQiLCJSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMiLCJSdWxlRGV0YWlsc0Fubm90YXRpb25zIiwiUnVsZURldGFpbHNEYXRhU291cmNlcyIsIlJ1bGVEZXRhaWxzRXhwcmVzc2lvbiIsIlJ1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMiLCJSdWxlRGV0YWlscyIsInByb21SdWxlIiwiYW5ub3RhdGlvbnMiLCJlbnRyaWVzIiwidHJpbSIsImxlZnRTaWRlIiwibGFiZWxzIiwicmlnaHRTaWRlIiwidXAiLCJDbGlwYm9hcmRCdXR0b24iLCJDb25maXJtTW9kYWwiLCJIb3Jpem9udGFsR3JvdXAiLCJ1c2VBcHBOb3RpZmljYXRpb24iLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiRnJhZ21lbnQiLCJ1c2VJc1J1bGVFZGl0YWJsZSIsInVzZVN0YXRlSGlzdG9yeU1vZGFsIiwiZGVsZXRlUnVsZUFjdGlvbiIsImdldEFsZXJ0bWFuYWdlckJ5VWlkIiwiQW5ub3RhdGlvbiIsImlzR3JhZmFuYVJ1bGVzU291cmNlIiwiY3JlYXRlRXhwbG9yZUxpbmsiLCJjcmVhdGVWaWV3TGluayIsIm1ha2VSdWxlQmFzZWRTaWxlbmNlTGluayIsInJ1bGVJZCIsImlzRmVkZXJhdGVkUnVsZUdyb3VwIiwicnVsZXJSdWxlIiwicnVsZVRvRGVsZXRlIiwic2V0UnVsZVRvRGVsZXRlIiwiYWxlcnRJZCIsImlzR3JhZmFuYVJ1bGVyUnVsZSIsImdyYWZhbmFfYWxlcnQiLCJTdGF0ZUhpc3RvcnlNb2RhbCIsInNob3dTdGF0ZUhpc3RvcnlNb2RhbCIsImFsZXJ0bWFuYWdlclNvdXJjZU5hbWUiLCJqc29uRGF0YSIsImFsZXJ0bWFuYWdlclVpZCIsImhhc0V4cGxvcmVQZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbiIsIkRhdGFTb3VyY2VzRXhwbG9yZSIsImxlZnRCdXR0b25zIiwicmlnaHRCdXR0b25zIiwiaXNGZWRlcmF0ZWQiLCJpc0VkaXRhYmxlIiwiaXNSZW1vdmFibGUiLCJpc1ZpZXdNb2RlIiwiaW5WaWV3TW9kZSIsImRlbGV0ZVJ1bGUiLCJpZGVudGlmaWVyIiwiZnJvbVJ1bGVyUnVsZSIsIm5hdmlnYXRlVG8iLCJidWlsZFNoYXJlVXJsIiwiYXBwVXJsIiwiYXBwU3ViVXJsIiwiYmFzZVVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImhyZWYiLCJzcGxpdCIsImJ1dHRvbiIsInJ1bmJvb2tVUkwiLCJkYXNoYm9hcmRVSUQiLCJwYW5lbElEIiwiQWxlcnRpbmdJbnN0YW5jZUNyZWF0ZSIsImlzRWRpdG9yIiwic291cmNlTmFtZSIsImVkaXRVUkwiLCJzdHJpbmdpZnlJZGVudGlmaWVyIiwiZW5kc1dpdGgiLCJzaXplIiwic20iLCJBbm5vdGF0aW9uRGV0YWlsc0ZpZWxkIiwia2V5IiwiZ2V0RGF0YVNvdXJjZVNydiIsIkV4cHJlc3Npb25EYXRhc291cmNlVUlEIiwiZGF0YVNvdXJjZXMiLCJtZXRhIiwibG9nb3MiLCJzbWFsbCIsInVuaXF1ZSIsInJlZHVjZSIsImdldEluc3RhbmNlU2V0dGluZ3MiLCJkYXRhc291cmNlVWlkIiwidWlkIiwiZGF0YVNvdXJjZUljb24iLCJleHByUm93IiwiaXNBbGVydGluZ1J1bGUiLCJBbGVydEluc3RhbmNlc1RhYmxlIiwiU29ydE9yZGVyIiwibGFiZWxzTWF0Y2hNYXRjaGVycyIsInBhcnNlTWF0Y2hlcnMiLCJzb3J0QWxlcnRzIiwic2V0UXVlcnlTdHJpbmciLCJhbGVydFN0YXRlIiwic2V0QWxlcnRTdGF0ZSIsImZpbHRlcktleSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInF1ZXJ5U3RyaW5nS2V5IiwiYWxlcnRzIiwiZmlsdGVyQWxlcnRzIiwiSW1wb3J0YW5jZSIsImZsZXhSb3ciLCJzcGFjZUJldHdlZW4iLCJyb3dDaGlsZCIsImFsZXJ0SW5zdGFuY2VMYWJlbCIsImFsZXJ0SW5zdGFuY2VTdGF0ZSIsImZpbHRlcmVkQWxlcnRzIiwibWF0Y2hlcnMiLCJhbGVydCIsIlJ1bGVIZWFsdGgiLCJnZXRTdHlsZSIsImhlYWx0aCIsImxhc3RFcnJvciIsIndhcm4iLCJpc1J1bGVyTm90U3VwcG9ydGVkUmVzcG9uc2UiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiY2xvc2VkIiwic2V0Q2xvc2VkIiwiZGF0YVNvdXJjZUNvbmZpZ1JlcXVlc3RzIiwiZGF0YVNvdXJjZUNvbmZpZ0Vycm9ycyIsInByb21SZXF1ZXN0RXJyb3JzIiwicnVsZXJSZXF1ZXN0RXJyb3JzIiwicmVxdWVzdHMiLCJkYXRhU291cmNlIiwiZ3JhZmFuYVByb21FcnJvciIsImdyYWZhbmFSdWxlckVycm9yIiwiZm9yRWFjaCIsImlkeCIsIm1vcmVCdXR0b24iLCJFcnJvclN1bW1hcnlCdXR0b24iLCJjb3VudCIsImZsb2F0UmlnaHQiLCJncmFmYW5hTmFtZXNwYWNlcyIsImNsb3VkTmFtZXNwYWNlcyIsInNvcnRlZCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIm5zIiwiQWxlcnRpbmdSdWxlUmVhZCIsIkFsZXJ0aW5nUnVsZUV4dGVybmFsUmVhZCIsImFsZXJ0U3RhdGVUb1JlYWRhYmxlIiwiQ29sbGFwc2VUb2dnbGUiLCJSdWxlc1RhYmxlIiwiUnVsZUxpc3RTdGF0ZVNlY3Rpb24iLCJkZWZhdWx0Q29sbGFwc2VkIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaGVhZGVyIiwiY29sbGFwc2VUb2dnbGUiLCJydWxlc1RhYmxlIiwiZ3JvdXBlZFJ1bGVzIiwiaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmciLCJTcGlubmVyIiwiaXNSZWNvcmRpbmdSdWxlIiwiZ2V0Rmlyc3RBY3RpdmVBdCIsIkFsZXJ0U3RhdGVUYWciLCJSdWxlU3RhdGUiLCJpc0RlbGV0aW5nIiwiaXNDcmVhdGluZyIsImZvclRpbWUiLCJmaXJzdEFjdGl2ZUF0IiwiU3RyaW5nIiwiZm9yIiwic3RhcnQiLCJlbmQiLCJEYXRlIiwiYm9keVNtYWxsIiwiZm9udFNpemUiLCJpc1JlY29yZGluZ1J1bGVyUnVsZSIsImVtcHR5U3RhdHMiLCJ0b3RhbCIsInJlY29yZGluZyIsInNob3dJbmFjdGl2ZSIsInNob3dSZWNvcmRpbmciLCJjYWxjdWxhdGVkIiwic3RhdHMiLCJjYWxjUnVsZSIsInN0YXRzQ29tcG9uZW50cyIsInByZXYiLCJjdXJyIiwiZGVib3VuY2UiLCJQcm9tUnVsZVR5cGUiLCJEYXRhU291cmNlUGlja2VyIiwiVmlld09wdGlvbnMiLCJSdWxlVHlwZU9wdGlvbnMiLCJBbGVydGluZyIsIlJlY29yZGluZyIsInNldFF1ZXJ5UGFyYW1zIiwic2V0RmlsdGVyS2V5IiwiZGF0YVNvdXJjZUtleSIsInJ1bGVUeXBlIiwiaGFuZGxlRGF0YVNvdXJjZUNoYW5nZSIsImRhdGFTb3VyY2VWYWx1ZSIsImNsZWFyRGF0YVNvdXJjZSIsImhhbmRsZVF1ZXJ5U3RyaW5nQ2hhbmdlIiwiaGFuZGxlQWxlcnRTdGF0ZUNoYW5nZSIsImhhbmRsZVZpZXdDaGFuZ2UiLCJoYW5kbGVSdWxlVHlwZUNoYW5nZSIsImhhbmRsZUNsZWFyRmlsdGVyc0NsaWNrIiwic2V0VGltZW91dCIsImNvbnRhaW5lciIsImNsZWFyQnV0dG9uIiwiQmFkZ2UiLCJrYm4iLCJ1c2VGb2xkZXIiLCJ1c2VIYXNSdWxlciIsImRlbGV0ZVJ1bGVzR3JvdXBBY3Rpb24iLCJtZW1vIiwiaXNFZGl0aW5nR3JvdXAiLCJzZXRJc0VkaXRpbmdHcm91cCIsImlzRGVsZXRpbmdHcm91cCIsInNldElzRGVsZXRpbmdHcm91cCIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJjYW5FZGl0Q2xvdWRSdWxlcyIsIkFsZXJ0aW5nUnVsZUV4dGVybmFsV3JpdGUiLCJoYXNSdWxlciIsImZvbGRlclVJRCIsIm5hbWVzcGFjZV91aWQiLCJmb2xkZXIiLCJmaW5kIiwiZGVsZXRlR3JvdXAiLCJhY3Rpb25JY29ucyIsInNsdWdpZnlGb3JVcmwiLCJjYW5TYXZlIiwiY2FuQWRtaW4iLCJpc1VuZ3JvdXBlZCIsImhlYWRpbmciLCJzcGFjZXIiLCJoZWFkZXJTdGF0cyIsImFjdGlvbnNTZXBhcmF0b3IiLCJkaXNwbGF5TmFtZSIsImJhY2tncm91bmQiLCJkYXRhU291cmNlT3JpZ2luIiwiZGlzYWJsZWQiLCJzaG93R3VpZGVsaW5lcyIsImVtcHR5TWVzc2FnZSIsInNob3dHcm91cENvbHVtbiIsInNob3dTdW1tYXJ5Q29sdW1uIiwid3JhcHBlckNsYXNzIiwid3JhcHBlck1hcmdpbiIsInNlZW5LZXlzIiwicnVsZUlkeCIsImluY2x1ZGVzIiwiY29sdW1ucyIsInVzZUNvbHVtbnMiLCJUYWJsZUNvbXBvbmVudCIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwicmVuZGVyQ2VsbCIsInN1bW1hcnkiLCJ1bmlxdWVJZCIsImRhdGVUaW1lRm9ybWF0IiwidXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5IiwiQWxlcnRMYWJlbCIsIlN0YXRlSGlzdG9yeSIsInJlbmRlclN0YXRlQ2VsbCIsInJlbmRlclZhbHVlQ2VsbCIsInJlbmRlclRpbWVzdGFtcENlbGwiLCJhY2MiLCJuZXdTdGF0ZSIsInRpbWVzdGFtcCIsInVwZGF0ZWQiLCJoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlIiwicHJldlN0YXRlIiwiaGlzdG9yeUl0ZW0iLCJtYXRjaGVzIiwiZXZhbE1hdGNoZXMiLCJtYXRjaCIsIm1ldHJpYyIsIlRpbWVzdGFtcFN0eWxlIiwiTGFiZWxzV3JhcHBlciIsInhzIiwiY3VycmVudEhpc3RvcnlJdGVtIiwicHJldmlvdXNIaXN0b3J5SXRlbSIsImdldEFsbFJ1bGVzU291cmNlcyIsImdldFJ1bGVzU291cmNlQnlOYW1lIiwiaXNBbGVydGluZ1J1bGVyUnVsZSIsInByb21SdWxlc1Jlc3BvbnNlcyIsInJ1bGVyUnVsZXNSZXNwb25zZXMiLCJjYWNoZSIsInJ1bGVzU291cmNlcyIsIkVycm9yIiwiY2FjaGVkIiwiYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlIiwiYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UiLCJmbGF0IiwibmV3TmFtZXNwYWNlIiwic29ydFJ1bGVzQnlOYW1lIiwiZmxhdE1hcCIsImNvbWJpbmVkR3JvdXAiLCJzb3VyY2VfdGVuYW50cyIsInJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlIiwiZyIsImV4aXN0aW5nUnVsZSIsImdldEV4aXN0aW5nUnVsZUluR3JvdXAiLCJwcm9tUnVsZVRvQ29tYmluZWRSdWxlIiwicmVjb3JkIiwidGl0bGUiLCJpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZSIsImNvbWJpbmVkUnVsZSIsImNoZWNrUXVlcnkiLCJoYXNoUXVlcnkiLCJzbGljZSIsInJlcGxhY2UiLCJqb2luIiwicmVkdWNlTmFtZXNwYWNlcyIsIm5hbWVzcGFjZUFjYyIsInJlZHVjZUdyb3VwcyIsImdyb3VwQWNjIiwiaXNRdWVyeWluZ0RhdGFTb3VyY2UiLCJub3JtYWxpemVkUXVlcnlTdHJpbmciLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImRvZXNOYW1lQ29udGFpbnNRdWVyeVN0cmluZyIsImRvUnVsZUxhYmVsc01hdGNoUXVlcnkiLCJkb0FsZXJ0c0NvbnRhaW5NYXRjaGluZ0xhYmVscyIsImZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uIiwiZm9sZGVyUmVxdWVzdHMiLCJmb2xkZXJzIiwicmVxdWVzdCIsImdldFJ1bGVzUGVybWlzc2lvbnMiLCJydWxlUGVybWlzc2lvbiIsImhhc0VkaXRQZXJtaXNzaW9uIiwidXBkYXRlIiwiaGFzUmVtb3ZlUGVybWlzc2lvbiIsImRlbGV0ZSIsImlzUnVsZXJBdmFpbGFibGUiLCJCb29sZWFuIiwicnVsZXJDb25maWciLCJmZXRjaEdyYWZhbmFBbm5vdGF0aW9uc0FjdGlvbiIsImhpc3RvcnkiLCJtYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoaWRlU3RhdGVIaXN0b3J5TW9kYWwiLCJnZXRSdWxlc0FjY2VzcyIsIkFHR1JFR0FUSU9OX09QRVJBVE9SUyIsImluc2VydFRleHQiLCJkb2N1bWVudGF0aW9uIiwiUElQRV9QQVJTRVJTIiwibW92ZSIsIlBJUEVfT1BFUkFUT1JTIiwiZGV0YWlsIiwiUkFOR0VfVkVDX0ZVTkNUSU9OUyIsIkZVTkNUSU9OUyIsIkxPS0lfS0VZV09SRFMiLCJrZXl3b3JkIiwibG9raUdyYW1tYXIiLCJjb21tZW50IiwibG9va2JlaGluZCIsImluc2lkZSIsImFsaWFzIiwicHVuY3R1YXRpb24iLCJncmVlZHkiLCJmIiwiZnVuY3Rpb24iLCJxdW90ZSIsImJhY2t0aWNrcyIsIm51bWJlciIsIm9wZXJhdG9yIiwiUkFURV9SQU5HRVMiLCJzb3J0VmFsdWUiLCJPUEVSQVRPUlMiLCJMT0dJQ0FMX09QRVJBVE9SUyIsIlRSSUdPTk9NRVRSSUNfRlVOQ1RJT05TIiwiUFJPTV9LRVlXT1JEUyIsInByb21xbEdyYW1tYXIiLCJpZExpc3QiXSwic291cmNlUm9vdCI6IiJ9
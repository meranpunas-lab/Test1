"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertRuleList"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNvQixVQUFOLENBQWlCb0UsS0FBakIsQ0FBdUJDLE1BQXZCLENBQStCQyxJQUFELElBQVU7QUFDN0MsV0FBT0osS0FBSyxDQUFDSyxJQUFOLENBQVdELElBQUksQ0FBQ2hHLElBQWhCLEtBQXlCNEYsS0FBSyxDQUFDSyxJQUFOLENBQVdELElBQUksQ0FBQzdGLFNBQWhCLENBQXpCLElBQXVEeUYsS0FBSyxDQUFDSyxJQUFOLENBQVdELElBQUksQ0FBQzNGLElBQWhCLENBQTlEO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FOTTtBQVFBLE1BQU02RixzQkFBc0IsR0FBRyxDQUFDNUYsS0FBRCxFQUFrQzZGLFNBQWxDLEtBQXdEO0FBQzVGLE1BQUk3RixLQUFLLENBQUM2RSxtQkFBTixDQUEwQjdDLEVBQTFCLEtBQWlDNkQsU0FBckMsRUFBZ0Q7QUFDOUMsV0FBTzdGLEtBQUssQ0FBQzZFLG1CQUFiO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FOTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL0FsZXJ0SG93VG9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvQWxlcnRSdWxlSXRlbS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvQWxlcnRSdWxlTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9VbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvc3RhdGUvc2VsZWN0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsLCBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydEhvd1RvTW9kYWxQcm9wcyB7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFsZXJ0SG93VG9Nb2RhbCh7IG9uRGlzbWlzcyB9OiBBbGVydEhvd1RvTW9kYWxQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdGl0bGU9XCJBZGRpbmcgYW4gQWxlcnRcIiBpc09wZW4gb25EaXNtaXNzPXtvbkRpc21pc3N9IG9uQ2xpY2tCYWNrZHJvcD17b25EaXNtaXNzfT5cbiAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJzbVwiPlxuICAgICAgICA8aW1nIHNyYz1cInB1YmxpYy9pbWcvYWxlcnRfaG93dG9fbmV3LnBuZ1wiIGFsdD1cImxpbmsgdG8gaG93IHRvIGFsZXJ0IGltYWdlXCIgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWxlcnRzIGFyZSBhZGRlZCBhbmQgY29uZmlndXJlZCBpbiB0aGUgQWxlcnQgdGFiIG9mIGFueSBkYXNoYm9hcmQgZ3JhcGggcGFuZWwsIGxldHRpbmcgeW91IGJ1aWxkIGFuZCB2aXN1YWxpemVcbiAgICAgICAgICBhbiBhbGVydCB1c2luZyBleGlzdGluZyBxdWVyaWVzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlJlbWVtYmVyIHRvIHNhdmUgdGhlIGRhc2hib2FyZCB0byBwZXJzaXN0IHlvdXIgYWxlcnQgcnVsZSBjaGFuZ2VzLjwvcD5cbiAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IEhpZ2hsaWdodGVyIGZyb20gJ3JlYWN0LWhpZ2hsaWdodC13b3Jkcyc7XG5pbXBvcnQgeyBJY29uLCBJY29uTmFtZSwgQnV0dG9uLCBMaW5rQnV0dG9uLCBDYXJkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQWxlcnRSdWxlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZTogQWxlcnRSdWxlO1xuICBzZWFyY2g6IHN0cmluZztcbiAgb25Ub2dnbGVQYXVzZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQWxlcnRSdWxlSXRlbSA9ICh7IHJ1bGUsIHNlYXJjaCwgb25Ub2dnbGVQYXVzZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBydWxlVXJsID0gYCR7cnVsZS51cmx9P2VkaXRQYW5lbD0ke3J1bGUucGFuZWxJZH0mdGFiPWFsZXJ0YDtcbiAgY29uc3QgcmVuZGVyVGV4dCA9IHVzZUNhbGxiYWNrKFxuICAgICh0ZXh0KSA9PiAoXG4gICAgICA8SGlnaGxpZ2h0ZXJcbiAgICAgICAga2V5PXt0ZXh0fVxuICAgICAgICBoaWdobGlnaHRDbGFzc05hbWU9XCJoaWdobGlnaHQtc2VhcmNoLW1hdGNoXCJcbiAgICAgICAgdGV4dFRvSGlnaGxpZ2h0PXt0ZXh0fVxuICAgICAgICBzZWFyY2hXb3Jkcz17W3NlYXJjaF19XG4gICAgICAvPlxuICAgICksXG4gICAgW3NlYXJjaF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPENhcmQuSGVhZGluZz57cmVuZGVyVGV4dChydWxlLm5hbWUpfTwvQ2FyZC5IZWFkaW5nPlxuICAgICAgPENhcmQuRmlndXJlPlxuICAgICAgICA8SWNvbiBzaXplPVwieGxcIiBuYW1lPXtydWxlLnN0YXRlSWNvbiBhcyBJY29uTmFtZX0gY2xhc3NOYW1lPXtgYWxlcnQtcnVsZS1pdGVtX19pY29uICR7cnVsZS5zdGF0ZUNsYXNzfWB9IC8+XG4gICAgICA8L0NhcmQuRmlndXJlPlxuICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgPHNwYW4ga2V5PVwic3RhdGVcIj5cbiAgICAgICAgICA8c3BhbiBrZXk9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtgJHtydWxlLnN0YXRlQ2xhc3N9YH0+XG4gICAgICAgICAgICB7cmVuZGVyVGV4dChydWxlLnN0YXRlVGV4dCl9eycgJ31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgZm9yIHtydWxlLnN0YXRlQWdlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHtydWxlLmluZm8gPyByZW5kZXJUZXh0KHJ1bGUuaW5mbykgOiBudWxsfVxuICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICA8Q2FyZC5BY3Rpb25zPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2V5PVwicGxheVwiXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgaWNvbj17cnVsZS5zdGF0ZSA9PT0gJ3BhdXNlZCcgPyAncGxheScgOiAncGF1c2UnfVxuICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlUGF1c2V9XG4gICAgICAgID5cbiAgICAgICAgICB7cnVsZS5zdGF0ZSA9PT0gJ3BhdXNlZCcgPyAnUmVzdW1lJyA6ICdQYXVzZSd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8TGlua0J1dHRvbiBrZXk9XCJlZGl0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGhyZWY9e3J1bGVVcmx9IGljb249XCJjb2dcIj5cbiAgICAgICAgICBFZGl0IGFsZXJ0XG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvQ2FyZC5BY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0UnVsZUl0ZW07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IEFsZXJ0UnVsZUl0ZW0gZnJvbSAnLi9BbGVydFJ1bGVJdGVtJztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBBbGVydFJ1bGUsIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0QWxlcnRSdWxlc0FzeW5jLCB0b2dnbGVQYXVzZUFsZXJ0UnVsZSB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRBbGVydFJ1bGVJdGVtcywgZ2V0U2VhcmNoUXVlcnkgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBzZXRTZWFyY2hRdWVyeSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWx0ZXJJbnB1dCwgTGlua0J1dHRvbiwgU2VsZWN0LCBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IFNob3dNb2RhbFJlYWN0RXZlbnQgfSBmcm9tICcuLi8uLi90eXBlcy9ldmVudHMnO1xuaW1wb3J0IHsgQWxlcnRIb3dUb01vZGFsIH0gZnJvbSAnLi9BbGVydEhvd1RvTW9kYWwnO1xuaW1wb3J0IHsgVW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL1VuaWZpZWRBbGVydGluZ1Byb21vdGlvbic7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ2FsZXJ0LWxpc3QnKSxcbiAgICBhbGVydFJ1bGVzOiBnZXRBbGVydFJ1bGVJdGVtcyhzdGF0ZSksXG4gICAgc2VhcmNoOiBnZXRTZWFyY2hRdWVyeShzdGF0ZS5hbGVydFJ1bGVzKSxcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmFsZXJ0UnVsZXMuaXNMb2FkaW5nLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldEFsZXJ0UnVsZXNBc3luYyxcbiAgc2V0U2VhcmNoUXVlcnksXG4gIHRvZ2dsZVBhdXNlQWxlcnRSdWxlLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHt9LCB7IHN0YXRlOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY2xhc3MgQWxlcnRSdWxlTGlzdFVuY29ubmVjdGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0ZUZpbHRlcnMgPSBbXG4gICAgeyBsYWJlbDogJ0FsbCcsIHZhbHVlOiAnYWxsJyB9LFxuICAgIHsgbGFiZWw6ICdPSycsIHZhbHVlOiAnb2snIH0sXG4gICAgeyBsYWJlbDogJ05vdCBPSycsIHZhbHVlOiAnbm90X29rJyB9LFxuICAgIHsgbGFiZWw6ICdBbGVydGluZycsIHZhbHVlOiAnYWxlcnRpbmcnIH0sXG4gICAgeyBsYWJlbDogJ05vIGRhdGEnLCB2YWx1ZTogJ25vX2RhdGEnIH0sXG4gICAgeyBsYWJlbDogJ1BhdXNlZCcsIHZhbHVlOiAncGF1c2VkJyB9LFxuICAgIHsgbGFiZWw6ICdQZW5kaW5nJywgdmFsdWU6ICdwZW5kaW5nJyB9LFxuICBdO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hSdWxlcygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnF1ZXJ5UGFyYW1zLnN0YXRlICE9PSB0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zLnN0YXRlKSB7XG4gICAgICB0aGlzLmZldGNoUnVsZXMoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmZXRjaFJ1bGVzKCkge1xuICAgIGF3YWl0IHRoaXMucHJvcHMuZ2V0QWxlcnRSdWxlc0FzeW5jKHsgc3RhdGU6IHRoaXMuZ2V0U3RhdGVGaWx0ZXIoKSB9KTtcbiAgfVxuXG4gIGdldFN0YXRlRmlsdGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucXVlcnlQYXJhbXMuc3RhdGUgPz8gJ2FsbCc7XG4gIH1cblxuICBvblN0YXRlRmlsdGVyQ2hhbmdlZCA9IChvcHRpb246IFNlbGVjdGFibGVWYWx1ZSkgPT4ge1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHsgc3RhdGU6IG9wdGlvbi52YWx1ZSB9KTtcbiAgfTtcblxuICBvbk9wZW5Ib3dUbyA9ICgpID0+IHtcbiAgICBhcHBFdmVudHMucHVibGlzaChuZXcgU2hvd01vZGFsUmVhY3RFdmVudCh7IGNvbXBvbmVudDogQWxlcnRIb3dUb01vZGFsIH0pKTtcbiAgfTtcblxuICBvblNlYXJjaFF1ZXJ5Q2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldFNlYXJjaFF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICBvblRvZ2dsZVBhdXNlID0gKHJ1bGU6IEFsZXJ0UnVsZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudG9nZ2xlUGF1c2VBbGVydFJ1bGUocnVsZS5pZCwgeyBwYXVzZWQ6IHJ1bGUuc3RhdGUgIT09ICdwYXVzZWQnIH0pO1xuICB9O1xuXG4gIGFsZXJ0U3RhdGVGaWx0ZXJPcHRpb24gPSAoeyB0ZXh0LCB2YWx1ZSB9OiB7IHRleHQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxvcHRpb24ga2V5PXt2YWx1ZX0gdmFsdWU9e3ZhbHVlfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBhbGVydFJ1bGVzLCBzZWFyY2gsIGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICAgIDxGaWx0ZXJJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhbGVydHNcIiB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17dGhpcy5vblNlYXJjaFF1ZXJ5Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWxcIiBodG1sRm9yPVwiYWxlcnQtc3RhdGUtZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgU3RhdGVzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aC0xM1wiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eydhbGVydC1zdGF0ZS1maWx0ZXInfVxuICAgICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZUZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN0YXRlRmlsdGVyQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFN0YXRlRmlsdGVyKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyX19zcGFjZXJcIiAvPlxuICAgICAgICAgICAge2NvbmZpZy51bmlmaWVkQWxlcnRpbmdFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBocmVmPVwiYWxlcnRpbmcvbmcvbmV3XCI+XG4gICAgICAgICAgICAgICAgQWRkIE5HIEFsZXJ0XG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLm9uT3Blbkhvd1RvfT5cbiAgICAgICAgICAgICAgSG93IHRvIGFkZCBhbiBhbGVydFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFVuaWZpZWRBbGVydGluZ1Byb21vdGlvbiAvPlxuICAgICAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJub25lXCI+XG4gICAgICAgICAgICB7YWxlcnRSdWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QWxlcnRSdWxlSXRlbVxuICAgICAgICAgICAgICAgICAgcnVsZT17cnVsZSBhcyBBbGVydFJ1bGV9XG4gICAgICAgICAgICAgICAgICBrZXk9e3J1bGUuaWR9XG4gICAgICAgICAgICAgICAgICBzZWFyY2g9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlUGF1c2U9eygpID0+IHRoaXMub25Ub2dnbGVQYXVzZShydWxlIGFzIEFsZXJ0UnVsZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKEFsZXJ0UnVsZUxpc3RVbmNvbm5lY3RlZCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfS0VZID0gJ2dyYWZhbmEubGVnYWN5YWxlcnRpbmcudW5pZmllZGFsZXJ0aW5ncHJvbW8nO1xuXG5jb25zdCBVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb246IEZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24sIHNldFNob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb25dID0gdXNlTG9jYWxTdG9yYWdlPGJvb2xlYW4+KFxuICAgIExPQ0FMX1NUT1JBR0VfS0VZLFxuICAgIHRydWVcbiAgKTtcblxuICBpZiAoIXNob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFsZXJ0XG4gICAgICBzZXZlcml0eT1cImluZm9cIlxuICAgICAgdGl0bGU9XCJUcnkgb3V0IHRoZSBHcmFmYW5hIDggYWxlcnRpbmchXCJcbiAgICAgIG9uUmVtb3ZlPXsoKSA9PiBzZXRTaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uKGZhbHNlKX1cbiAgICA+XG4gICAgICA8cD5cbiAgICAgICAgWW91IGFyZSB1c2luZyB0aGUgbGVnYWN5IEdyYWZhbmEgYWxlcnRpbmcuXG4gICAgICAgIDxiciAvPlxuICAgICAgICBXaGlsZSB3ZSBoYXZlIG5vIHBsYW5zIG9mIGRlcHJlY2F0aW5nIGl0IGFueSB0aW1lIHNvb24sIHdlIGludml0ZSB5b3UgdG8gZ2l2ZSB0aGUgaW1wcm92ZWQgR3JhZmFuYSA4IGFsZXJ0aW5nIGFcbiAgICAgICAgdHJ5LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFNlZXsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9sYXRlc3QvYWxlcnRpbmcvdW5pZmllZC1hbGVydGluZy9kaWZmZXJlbmNlLW9sZC1uZXcvXCI+XG4gICAgICAgICAgV2hhdOKAmXMgTmV3IHdpdGggR3JhZmFuYSA4IGFsZXJ0aW5nXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICB0byBsZWFybiBtb3JlIGFib3V0IHdoYXQmbHNxdW87cyBuZXcgaW4gR3JhZmFuYSA4IGFsZXJ0aW5nIG9yIGxlYXJueycgJ31cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9hbGVydGluZy91bmlmaWVkLWFsZXJ0aW5nL29wdC1pbi9cIj5cbiAgICAgICAgICBob3cgdG8gZW5hYmxlIHRoZSBuZXcgR3JhZmFuYSA4IGFsZXJ0aW5nIGZlYXR1cmVcbiAgICAgICAgPC9hPlxuICAgICAgICAuXG4gICAgICA8L3A+XG4gICAgPC9BbGVydD5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFVuaWZpZWRBbGVydGluZ1Byb21vdGlvbiB9O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBsb2FkQWxlcnRSdWxlcywgbG9hZGVkQWxlcnRSdWxlcywgbm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCwgc2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMgfSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IEFsZXJ0UnVsZURUTywgTm90aWZpZXJEVE8sIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uLCBjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGVydFJ1bGVzQXN5bmMob3B0aW9uczogeyBzdGF0ZTogc3RyaW5nIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChsb2FkQWxlcnRSdWxlcygpKTtcbiAgICBjb25zdCBydWxlczogQWxlcnRSdWxlRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2FsZXJ0cycsIG9wdGlvbnMpO1xuICAgIGRpc3BhdGNoKGxvYWRlZEFsZXJ0UnVsZXMocnVsZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBhdXNlQWxlcnRSdWxlKGlkOiBudW1iZXIsIG9wdGlvbnM6IHsgcGF1c2VkOiBib29sZWFuIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydHMvJHtpZH0vcGF1c2VgLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdGF0ZUZpbHRlciA9IGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKS5zdGF0ZSB8fCAnYWxsJztcbiAgICBkaXNwYXRjaChnZXRBbGVydFJ1bGVzQXN5bmMoeyBzdGF0ZTogc3RhdGVGaWx0ZXIudG9TdHJpbmcoKSB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PFByb21pc2U8dm9pZD4+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zYCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIGNyZWF0ZWQnKSkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihlcnJvci5kYXRhLmVycm9yKSkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy8ke2RhdGEuaWR9YCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIHVwZGF0ZWQnKSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oZXJyb3IuZGF0YS5lcnJvcikpKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGdldFN0YXRlKCkubm90aWZpY2F0aW9uQ2hhbm5lbC5ub3RpZmljYXRpb25DaGFubmVsO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvdGVzdCcsIHsgaWQ6IGNoYW5uZWwuaWQsIC4uLmRhdGEgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uVHlwZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgYWxlcnROb3RpZmllcnM6IE5vdGlmaWVyRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWVyc2ApO1xuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uVHlwZXMgPSBhbGVydE5vdGlmaWVycy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgIGlmIChvMS5uYW1lID4gbzIubmFtZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9KTtcblxuICAgIGRpc3BhdGNoKHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzKG5vdGlmaWNhdGlvblR5cGVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbChpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZE5vdGlmaWNhdGlvblR5cGVzKCkpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkNoYW5uZWwgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtpZH1gKTtcbiAgICBkaXNwYXRjaChub3RpZmljYXRpb25DaGFubmVsTG9hZGVkKG5vdGlmaWNhdGlvbkNoYW5uZWwpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IEFsZXJ0UnVsZSwgQWxlcnRSdWxlc1N0YXRlLCBOb3RpZmljYXRpb25DaGFubmVsU3RhdGUsIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUXVlcnkgPSAoc3RhdGU6IEFsZXJ0UnVsZXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGVydFJ1bGVJdGVtcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSk6IEFsZXJ0UnVsZVtdID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLmFsZXJ0UnVsZXMuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLmFsZXJ0UnVsZXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoaXRlbS5uYW1lKSB8fCByZWdleC50ZXN0KGl0ZW0uc3RhdGVUZXh0KSB8fCByZWdleC50ZXN0KGl0ZW0uaW5mbyEpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXROb3RpZmljYXRpb25DaGFubmVsID0gKHN0YXRlOiBOb3RpZmljYXRpb25DaGFubmVsU3RhdGUsIGNoYW5uZWxJZDogbnVtYmVyKSA9PiB7XG4gIGlmIChzdGF0ZS5ub3RpZmljYXRpb25DaGFubmVsLmlkID09PSBjaGFubmVsSWQpIHtcbiAgICByZXR1cm4gc3RhdGUubm90aWZpY2F0aW9uQ2hhbm5lbDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIlZlcnRpY2FsR3JvdXAiLCJSZWFjdCIsIkFsZXJ0SG93VG9Nb2RhbCIsIm9uRGlzbWlzcyIsInVzZUNhbGxiYWNrIiwiSGlnaGxpZ2h0ZXIiLCJJY29uIiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsIkNhcmQiLCJBbGVydFJ1bGVJdGVtIiwicnVsZSIsInNlYXJjaCIsIm9uVG9nZ2xlUGF1c2UiLCJydWxlVXJsIiwidXJsIiwicGFuZWxJZCIsInJlbmRlclRleHQiLCJ0ZXh0IiwibmFtZSIsInN0YXRlSWNvbiIsInN0YXRlQ2xhc3MiLCJzdGF0ZVRleHQiLCJzdGF0ZUFnZSIsImluZm8iLCJzdGF0ZSIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwiUGFnZSIsImFwcEV2ZW50cyIsImdldE5hdk1vZGVsIiwiZ2V0QWxlcnRSdWxlc0FzeW5jIiwidG9nZ2xlUGF1c2VBbGVydFJ1bGUiLCJnZXRBbGVydFJ1bGVJdGVtcyIsImdldFNlYXJjaFF1ZXJ5IiwiY29uZmlnIiwibG9jYXRpb25TZXJ2aWNlIiwic2V0U2VhcmNoUXVlcnkiLCJGaWx0ZXJJbnB1dCIsIlNlbGVjdCIsIlNob3dNb2RhbFJlYWN0RXZlbnQiLCJVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiYWxlcnRSdWxlcyIsImlzTG9hZGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkFsZXJ0UnVsZUxpc3RVbmNvbm5lY3RlZCIsImxhYmVsIiwidmFsdWUiLCJvcHRpb24iLCJwYXJ0aWFsIiwicHVibGlzaCIsImNvbXBvbmVudCIsInByb3BzIiwiaWQiLCJwYXVzZWQiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoUnVsZXMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJxdWVyeVBhcmFtcyIsImdldFN0YXRlRmlsdGVyIiwicmVuZGVyIiwib25TZWFyY2hRdWVyeUNoYW5nZSIsInN0YXRlRmlsdGVycyIsIm9uU3RhdGVGaWx0ZXJDaGFuZ2VkIiwidW5pZmllZEFsZXJ0aW5nRW5hYmxlZCIsIm9uT3Blbkhvd1RvIiwibWFwIiwiQWxlcnQiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJMT0NBTF9TVE9SQUdFX0tFWSIsInNob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24iLCJzZXRTaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uIiwiZ2V0QmFja2VuZFNydiIsImxvYWRBbGVydFJ1bGVzIiwibG9hZGVkQWxlcnRSdWxlcyIsIm5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQiLCJzZXROb3RpZmljYXRpb25DaGFubmVscyIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsIm5vdGlmeUFwcCIsIm9wdGlvbnMiLCJkaXNwYXRjaCIsInJ1bGVzIiwiZ2V0IiwicG9zdCIsInN0YXRlRmlsdGVyIiwiZ2V0U2VhcmNoT2JqZWN0IiwidG9TdHJpbmciLCJjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsIiwiZGF0YSIsInB1c2giLCJlcnJvciIsInVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwiLCJwdXQiLCJ0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCIsImdldFN0YXRlIiwiY2hhbm5lbCIsIm5vdGlmaWNhdGlvbkNoYW5uZWwiLCJsb2FkTm90aWZpY2F0aW9uVHlwZXMiLCJhbGVydE5vdGlmaWVycyIsIm5vdGlmaWNhdGlvblR5cGVzIiwic29ydCIsIm8xIiwibzIiLCJsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbCIsInNlYXJjaFF1ZXJ5IiwicmVnZXgiLCJSZWdFeHAiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJ0ZXN0IiwiZ2V0Tm90aWZpY2F0aW9uQ2hhbm5lbCIsImNoYW5uZWxJZCJdLCJzb3VyY2VSb290IjoiIn0=
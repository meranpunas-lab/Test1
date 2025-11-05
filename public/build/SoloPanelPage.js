"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SoloPanelPage"],{

/***/ "./public/app/features/dashboard/containers/SoloPanelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoloPanel": () => (/* binding */ SoloPanel),
/* harmony export */   "SoloPanelPage": () => (/* binding */ SoloPanelPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");
/* harmony import */ var _state_initDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const mapStateToProps = state => ({
  dashboard: state.dashboard.getModel()
});

const mapDispatchToProps = {
  initDashboard: _state_initDashboard__WEBPACK_IMPORTED_MODULE_4__.initDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class SoloPanelPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      panel: null,
      notFound: false
    });
  }

  componentDidMount() {
    const {
      match,
      route
    } = this.props;
    this.props.initDashboard({
      urlSlug: match.params.slug,
      urlUid: match.params.uid,
      urlType: match.params.type,
      routeName: route.routeName,
      fixUrl: false
    });
  }

  getPanelId() {
    var _this$props$queryPara;

    return parseInt((_this$props$queryPara = this.props.queryParams.panelId) !== null && _this$props$queryPara !== void 0 ? _this$props$queryPara : '0', 10);
  }

  componentDidUpdate(prevProps) {
    const {
      dashboard
    } = this.props;

    if (!dashboard) {
      return;
    } // we just got a new dashboard


    if (!prevProps.dashboard || prevProps.dashboard.uid !== dashboard.uid) {
      const panel = dashboard.getPanelByUrlId(this.props.queryParams.panelId);

      if (!panel) {
        this.setState({
          notFound: true
        });
        return;
      }

      this.setState({
        panel
      });
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SoloPanel, {
      dashboard: this.props.dashboard,
      notFound: this.state.notFound,
      panel: this.state.panel,
      panelId: this.getPanelId()
    });
  }

}
const SoloPanel = ({
  dashboard,
  notFound,
  panel,
  panelId
}) => {
  if (notFound) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "alert alert-error",
      children: ["Panel with id ", panelId, " not found"]
    });
  }

  if (!panel || !dashboard) {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: "Loading & initializing dashboard"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "panel-solo",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: ({
        width,
        height
      }) => {
        if (width === 0) {
          return null;
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_3__.DashboardPanel, {
          stateKey: panel.key,
          width: width,
          height: height,
          dashboard: dashboard,
          panel: panel,
          isEditing: false,
          isViewing: false,
          lazy: false
        });
      }
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SoloPanelPage));

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/DashboardPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPanel": () => (/* binding */ DashboardPanel),
/* harmony export */   "DashboardPanelUnconnected": () => (/* binding */ DashboardPanelUnconnected)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _PanelChrome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelChrome.tsx");
/* harmony import */ var _PanelChromeAngular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelChromeAngular.tsx");
/* harmony import */ var _panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var _panel_state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/panel/state/actions.ts");
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/LazyLoader.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const mapStateToProps = (state, props) => {
  const panelState = state.panels[props.stateKey];

  if (!panelState) {
    return {
      plugin: null
    };
  }

  return {
    plugin: panelState.plugin,
    instanceState: panelState.instanceState
  };
};

const mapDispatchToProps = {
  initPanelState: _panel_state_actions__WEBPACK_IMPORTED_MODULE_5__.initPanelState,
  cleanUpPanelState: _panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__.cleanUpPanelState,
  setPanelInstanceState: _panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__.setPanelInstanceState
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class DashboardPanelUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "specialPanels", {});

    _defineProperty(this, "onInstanceStateChange", value => {
      this.props.setPanelInstanceState({
        key: this.props.stateKey,
        value
      });
    });

    _defineProperty(this, "onVisibilityChange", v => {
      this.props.panel.isInView = v;
    });

    _defineProperty(this, "onPanelLoad", () => {
      if (!this.props.plugin) {
        this.props.initPanelState(this.props.panel);
      }
    });
  }

  componentDidMount() {
    this.props.panel.isInView = !this.props.lazy;

    if (!this.props.lazy) {
      this.onPanelLoad();
    }
  }

  componentWillUnmount() {
    // Most of the time an unmount should result in cleanup but in PanelEdit it should not
    if (!this.props.skipStateCleanUp) {
      this.props.cleanUpPanelState({
        key: this.props.stateKey
      });
    }
  }

  render() {
    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      width,
      height,
      lazy,
      plugin
    } = this.props;

    const renderPanelChrome = isInView => plugin && (plugin.angularPanelCtrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PanelChromeAngular__WEBPACK_IMPORTED_MODULE_3__.PanelChromeAngular, {
      plugin: plugin,
      panel: panel,
      dashboard: dashboard,
      isViewing: isViewing,
      isEditing: isEditing,
      isInView: isInView,
      width: width,
      height: height
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PanelChrome__WEBPACK_IMPORTED_MODULE_2__.PanelChrome, {
      plugin: plugin,
      panel: panel,
      dashboard: dashboard,
      isViewing: isViewing,
      isEditing: isEditing,
      isInView: isInView,
      width: width,
      height: height,
      onInstanceStateChange: this.onInstanceStateChange
    }));

    return lazy ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LazyLoader__WEBPACK_IMPORTED_MODULE_6__.LazyLoader, {
      width: width,
      height: height,
      onChange: this.onVisibilityChange,
      onLoad: this.onPanelLoad,
      children: ({
        isInView
      }) => renderPanelChrome(isInView)
    }) : renderPanelChrome(true);
  }

}

_defineProperty(DashboardPanelUnconnected, "defaultProps", {
  lazy: true
});

const DashboardPanel = connector(DashboardPanelUnconnected);

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/LazyLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyLoader": () => (/* binding */ LazyLoader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_plugins_datasource_influxdb_components_useUniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function LazyLoader({
  children,
  width,
  height,
  onLoad,
  onChange
}) {
  const id = (0,app_plugins_datasource_influxdb_components_useUniqueId__WEBPACK_IMPORTED_MODULE_1__.useUniqueId)();
  const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isInView, setIsInView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    LazyLoader.addCallback(id, entry => {
      if (!loaded && entry.isIntersecting) {
        setLoaded(true);
        onLoad === null || onLoad === void 0 ? void 0 : onLoad();
      }

      setIsInView(entry.isIntersecting);
      onChange === null || onChange === void 0 ? void 0 : onChange(entry.isIntersecting);
    });
    const wrapperEl = wrapperRef.current;

    if (wrapperEl) {
      LazyLoader.observer.observe(wrapperEl);
    }

    return () => {
      delete LazyLoader.callbacks[id];
      wrapperEl && LazyLoader.observer.unobserve(wrapperEl);

      if (Object.keys(LazyLoader.callbacks).length === 0) {
        LazyLoader.observer.disconnect();
      }
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: id,
    ref: wrapperRef,
    style: {
      width,
      height
    },
    children: loaded && (typeof children === 'function' ? children({
      isInView
    }) : children)
  });
}
LazyLoader.callbacks = {};

LazyLoader.addCallback = (id, c) => LazyLoader.callbacks[id] = c;

LazyLoader.observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    LazyLoader.callbacks[entry.target.id](entry);
  }
}, {
  rootMargin: '100px'
});

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelChrome.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelChrome": () => (/* binding */ PanelChrome)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeader.tsx");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_core_profiler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/profiler.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/utils/loadSnapshotData.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts");
/* harmony import */ var _SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts");
/* harmony import */ var _annotations_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/annotations/api.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _liveTimer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/routes/utils.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const DEFAULT_PLUGIN_ERROR = 'Error in plugin';
class PanelChrome extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props); // Can this eventBus be on PanelModel?  when we have more complex event filtering, that may be a better option

    _defineProperty(this, "timeSrv", (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__.getTimeSrv)());

    _defineProperty(this, "subs", new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription());

    _defineProperty(this, "eventFilter", {
      onlyLocal: true
    });

    _defineProperty(this, "canEditDashboard", () => Boolean(this.props.dashboard.meta.canEdit || this.props.dashboard.meta.canMakeEditable));

    _defineProperty(this, "canAddAnnotation", () => {
      let canAdd = true;

      if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.accessControlEnabled()) {
        var _this$props$dashboard;

        canAdd = !!((_this$props$dashboard = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard !== void 0 && _this$props$dashboard.dashboard.canAdd);
      }

      return canAdd && this.canEditDashboard();
    });

    _defineProperty(this, "canEditAnnotation", dashboardId => {
      let canEdit = true;

      if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.accessControlEnabled()) {
        if (dashboardId !== 0) {
          var _this$props$dashboard2;

          canEdit = !!((_this$props$dashboard2 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard2 !== void 0 && _this$props$dashboard2.dashboard.canEdit);
        } else {
          var _this$props$dashboard3;

          canEdit = !!((_this$props$dashboard3 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard3 !== void 0 && _this$props$dashboard3.organization.canEdit);
        }
      }

      return canEdit && this.canEditDashboard();
    });

    _defineProperty(this, "canDeleteAnnotation", dashboardId => {
      let canDelete = true;

      if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.accessControlEnabled()) {
        if (dashboardId !== 0) {
          var _this$props$dashboard4;

          canDelete = !!((_this$props$dashboard4 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard4 !== void 0 && _this$props$dashboard4.dashboard.canDelete);
        } else {
          var _this$props$dashboard5;

          canDelete = !!((_this$props$dashboard5 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard5 !== void 0 && _this$props$dashboard5.organization.canDelete);
        }
      }

      return canDelete && this.canEditDashboard();
    });

    _defineProperty(this, "getSync", () => this.props.isEditing ? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DashboardCursorSync.Off : this.props.dashboard.graphTooltip);

    _defineProperty(this, "onInstanceStateChange", value => {
      this.props.onInstanceStateChange(value);
      this.setState({
        context: Object.assign({}, this.state.context, {
          instanceState: value
        })
      });
    });

    _defineProperty(this, "onSeriesColorChange", (label, color) => {
      this.onFieldConfigChange((0,app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_14__.changeSeriesColorConfigFactory)(label, color, this.props.panel.fieldConfig));
    });

    _defineProperty(this, "onSeriesVisibilityChange", (label, mode) => {
      this.onFieldConfigChange((0,_SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_15__.seriesVisibilityConfigFactory)(label, mode, this.props.panel.fieldConfig, this.state.data.series));
    });

    _defineProperty(this, "onToggleLegendSort", sortKey => {
      const legendOptions = this.props.panel.options.legend; // We don't want to do anything when legend options are not available

      if (!legendOptions) {
        return;
      }

      let sortDesc = legendOptions.sortDesc;
      let sortBy = legendOptions.sortBy;

      if (sortKey !== sortBy) {
        sortDesc = undefined;
      } // if already sort ascending, disable sorting


      if (sortDesc === false) {
        sortBy = undefined;
        sortDesc = undefined;
      } else {
        sortDesc = !sortDesc;
        sortBy = sortKey;
      }

      this.onOptionsChange(Object.assign({}, this.props.panel.options, {
        legend: Object.assign({}, legendOptions, {
          sortBy,
          sortDesc
        })
      }));
    });

    _defineProperty(this, "onRefresh", () => {
      const {
        panel,
        isInView,
        width
      } = this.props;

      if (!isInView) {
        this.setState({
          refreshWhenInView: true
        });
        return;
      }

      const timeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_8__.applyPanelTimeOverrides)(panel, this.timeSrv.timeRange()); // Issue Query

      if (this.wantsQueryExecution) {
        if (width < 0) {
          return;
        }

        if (this.state.refreshWhenInView) {
          this.setState({
            refreshWhenInView: false
          });
        }

        panel.runAllPanelQueries(this.props.dashboard.id, this.props.dashboard.getTimezone(), timeData, width);
      } else {
        // The panel should render on refresh as well if it doesn't have a query, like clock panel
        this.setState({
          data: Object.assign({}, this.state.data, {
            timeRange: this.timeSrv.timeRange()
          }),
          renderCounter: this.state.renderCounter + 1,
          liveTime: undefined
        });
      }
    });

    _defineProperty(this, "onRender", () => {
      const stateUpdate = {
        renderCounter: this.state.renderCounter + 1
      };
      this.setState(stateUpdate);
    });

    _defineProperty(this, "onOptionsChange", options => {
      this.props.panel.updateOptions(options);
    });

    _defineProperty(this, "onFieldConfigChange", config => {
      this.props.panel.updateFieldConfig(config);
    });

    _defineProperty(this, "onPanelError", error => {
      const errorMessage = error.message || DEFAULT_PLUGIN_ERROR;

      if (this.state.errorMessage !== errorMessage) {
        this.setState({
          errorMessage
        });
      }
    });

    _defineProperty(this, "onPanelErrorRecover", () => {
      this.setState({
        errorMessage: undefined
      });
    });

    _defineProperty(this, "onAnnotationCreate", async event => {
      const isRegion = event.from !== event.to;
      const anno = {
        dashboardId: this.props.dashboard.id,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,_annotations_api__WEBPACK_IMPORTED_MODULE_16__.saveAnnotation)(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_17__.getDashboardQueryRunner)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AnnotationChangeEvent(anno));
    });

    _defineProperty(this, "onAnnotationDelete", async id => {
      await (0,_annotations_api__WEBPACK_IMPORTED_MODULE_16__.deleteAnnotation)({
        id
      });
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_17__.getDashboardQueryRunner)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AnnotationChangeEvent({
        id
      }));
    });

    _defineProperty(this, "onAnnotationUpdate", async event => {
      const isRegion = event.from !== event.to;
      const anno = {
        id: event.id,
        dashboardId: this.props.dashboard.id,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,_annotations_api__WEBPACK_IMPORTED_MODULE_16__.updateAnnotation)(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_17__.getDashboardQueryRunner)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AnnotationChangeEvent(anno));
    });

    _defineProperty(this, "onChangeTimeRange", timeRange => {
      this.timeSrv.setTime({
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toUtc)(timeRange.from),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toUtc)(timeRange.to)
      });
    });

    const eventBus = props.dashboard.events.newScopedBus(`panel:${props.panel.id}`, this.eventFilter);
    this.state = {
      isFirstLoad: true,
      renderCounter: 0,
      refreshWhenInView: false,
      context: {
        eventBus,
        app: this.getPanelContextApp(),
        sync: this.getSync,
        onSeriesColorChange: this.onSeriesColorChange,
        onToggleSeriesVisibility: this.onSeriesVisibilityChange,
        onAnnotationCreate: this.onAnnotationCreate,
        onAnnotationUpdate: this.onAnnotationUpdate,
        onAnnotationDelete: this.onAnnotationDelete,
        canAddAnnotations: this.canAddAnnotation,
        onInstanceStateChange: this.onInstanceStateChange,
        onToggleLegendSort: this.onToggleLegendSort,
        canEditAnnotations: this.canEditAnnotation,
        canDeleteAnnotations: this.canDeleteAnnotation
      },
      data: this.getInitialPanelDataState()
    };
  }

  getPanelContextApp() {
    if (this.props.isEditing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.PanelEditor;
    }

    if (this.props.isViewing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.PanelViewer;
    }

    return _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.Dashboard;
  }

  getInitialPanelDataState() {
    return {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted,
      series: [],
      timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultTimeRange)()
    };
  }

  componentDidMount() {
    const {
      panel,
      dashboard
    } = this.props; // Subscribe to panel events

    this.subs.add(panel.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.RefreshEvent, this.onRefresh));
    this.subs.add(panel.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_13__.RenderEvent, this.onRender));
    dashboard.panelInitialized(this.props.panel); // Move snapshot data into the query response

    if (this.hasPanelSnapshot) {
      this.setState({
        data: (0,_utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_12__.loadSnapshotData)(panel, dashboard),
        isFirstLoad: false
      });
      return;
    }

    if (!this.wantsQueryExecution) {
      this.setState({
        isFirstLoad: false
      });
    }

    this.subs.add(panel.getQueryRunner().getData({
      withTransforms: true,
      withFieldConfig: true
    }).subscribe({
      next: data => this.onDataUpdate(data)
    })); // Listen for live timer events

    _liveTimer__WEBPACK_IMPORTED_MODULE_18__.liveTimer.listen(this);
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
    _liveTimer__WEBPACK_IMPORTED_MODULE_18__.liveTimer.remove(this);
  }

  liveTimeChanged(liveTime) {
    const {
      data
    } = this.state;

    if (data.timeRange) {
      const delta = liveTime.to.valueOf() - data.timeRange.to.valueOf();

      if (delta < 100) {
        // 10hz
        console.log('Skip tick render', this.props.panel.title, delta);
        return;
      }
    }

    this.setState({
      liveTime
    });
  }

  componentDidUpdate(prevProps) {
    const {
      isInView,
      width
    } = this.props;
    const {
      context
    } = this.state;
    const app = this.getPanelContextApp();

    if (context.app !== app) {
      this.setState({
        context: Object.assign({}, context, {
          app
        })
      });
    } // View state has changed


    if (isInView !== prevProps.isInView) {
      if (isInView) {
        // Check if we need a delayed refresh
        if (this.state.refreshWhenInView) {
          this.onRefresh();
        }
      }
    } // The timer depends on panel width


    if (width !== prevProps.width) {
      _liveTimer__WEBPACK_IMPORTED_MODULE_18__.liveTimer.updateInterval(this);
    }
  } // Updates the response with information from the stream
  // The next is outside a react synthetic event so setState is not batched
  // So in this context we can only do a single call to setState


  onDataUpdate(data) {
    const {
      dashboard,
      panel,
      plugin
    } = this.props; // Ignore this data update if we are now a non data panel

    if (plugin.meta.skipDataQuery) {
      this.setState({
        data: this.getInitialPanelDataState()
      });
      return;
    }

    let {
      isFirstLoad
    } = this.state;
    let errorMessage;

    switch (data.state) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading:
        // Skip updating state data if it is already in loading state
        // This is to avoid rendering partial loading responses
        if (this.state.data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading) {
          return;
        }

        break;

      case _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error:
        const {
          error
        } = data;

        if (error) {
          if (errorMessage !== error.message) {
            errorMessage = error.message;
          }
        }

        break;

      case _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done:
        // If we are doing a snapshot save data in panel model
        if (dashboard.snapshot) {
          panel.snapshotData = data.series.map(frame => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toDataFrameDTO)(frame));
        }

        if (isFirstLoad) {
          isFirstLoad = false;
        }

        break;
    }

    this.setState({
      isFirstLoad,
      errorMessage,
      data,
      liveTime: undefined
    });
  }

  get hasPanelSnapshot() {
    const {
      panel
    } = this.props;
    return panel.snapshotData && panel.snapshotData.length;
  }

  get wantsQueryExecution() {
    return !(this.props.plugin.meta.skipDataQuery || this.hasPanelSnapshot);
  }

  shouldSignalRenderingCompleted(loadingState, pluginMeta) {
    return loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done || pluginMeta.skipDataQuery;
  }

  skipFirstRender(loadingState) {
    const {
      isFirstLoad
    } = this.state;
    return this.wantsQueryExecution && isFirstLoad && (loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading || loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted);
  }

  renderPanel(width, height) {
    var _ref, _this$state$liveTime;

    const {
      panel,
      plugin,
      dashboard
    } = this.props;
    const {
      renderCounter,
      data
    } = this.state;
    const {
      theme
    } = app_core_config__WEBPACK_IMPORTED_MODULE_10__["default"];
    const {
      state: loadingState
    } = data; // do not render component until we have first data

    if (this.skipFirstRender(loadingState)) {
      return null;
    } // This is only done to increase a counter that is used by backend
    // image rendering to know when to capture image


    if (this.shouldSignalRenderingCompleted(loadingState, plugin.meta)) {
      app_core_profiler__WEBPACK_IMPORTED_MODULE_9__.profiler.renderingCompleted();
    }

    const PanelComponent = plugin.panel;
    const timeRange = (_ref = (_this$state$liveTime = this.state.liveTime) !== null && _this$state$liveTime !== void 0 ? _this$state$liveTime : data.timeRange) !== null && _ref !== void 0 ? _ref : this.timeSrv.timeRange();
    const headerHeight = this.hasOverlayHeader() ? 0 : theme.panelHeaderHeight;
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    const panelWidth = width - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_11__.PANEL_BORDER;
    const innerPanelHeight = height - headerHeight - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_11__.PANEL_BORDER;
    const panelContentClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'panel-content': true,
      'panel-content--no-padding': plugin.noPadding
    });
    const panelOptions = panel.getOptions(); // Update the event filter (dashboard settings may have changed)
    // Yes this is called ever render for a function that is triggered on every mouse move

    this.eventFilter.onlyLocal = dashboard.graphTooltip === 0;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: panelContentClassNames,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PanelContextProvider, {
          value: this.state.context,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(PanelComponent, {
            id: panel.id,
            data: data,
            title: panel.title,
            timeRange: timeRange,
            timeZone: this.props.dashboard.getTimezone(),
            options: panelOptions,
            fieldConfig: panel.fieldConfig,
            transparent: panel.transparent,
            width: panelWidth,
            height: innerPanelHeight,
            renderCounter: renderCounter,
            replaceVariables: panel.replaceVariables,
            onOptionsChange: this.onOptionsChange,
            onFieldConfigChange: this.onFieldConfigChange,
            onChangeTimeRange: this.onChangeTimeRange,
            eventBus: dashboard.events
          })
        })
      })
    });
  }

  hasOverlayHeader() {
    const {
      panel
    } = this.props;
    const {
      data
    } = this.state; // always show normal header if we have time override

    if (data.request && data.request.timeInfo) {
      return false;
    }

    return !panel.hasTitle();
  }

  render() {
    var _data$alertState;

    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      width,
      height,
      plugin
    } = this.props;
    const {
      errorMessage,
      data
    } = this.state;
    const {
      transparent
    } = panel;
    const alertState = (_data$alertState = data.alertState) === null || _data$alertState === void 0 ? void 0 : _data$alertState.state;
    const containerClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'panel-container': true,
      'panel-container--absolute': (0,_routes_utils__WEBPACK_IMPORTED_MODULE_19__.isSoloRoute)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.getLocation().pathname),
      'panel-container--transparent': transparent,
      'panel-container--no-title': this.hasOverlayHeader(),
      [`panel-alert-state--${alertState}`]: alertState !== undefined
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("section", {
      className: containerClassNames,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.Panels.Panel.containerByTitle(panel.title),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_6__.PanelHeader, {
        panel: panel,
        dashboard: dashboard,
        title: panel.title,
        description: panel.description,
        links: panel.links,
        error: errorMessage,
        isEditing: isEditing,
        isViewing: isViewing,
        alertState: alertState,
        data: data
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ErrorBoundary, {
        dependencies: [data, plugin, panel.getOptions()],
        onError: this.onPanelError,
        onRecover: this.onPanelErrorRecover,
        children: ({
          error
        }) => {
          if (error) {
            return null;
          }

          return this.renderPanel(width, height);
        }
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelChromeAngular.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelChromeAngular": () => (/* binding */ PanelChromeAngular),
/* harmony export */   "PanelChromeAngularUnconnected": () => (/* binding */ PanelChromeAngularUnconnected)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeader.tsx");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/routes/utils.ts");
/* harmony import */ var app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/panel/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class PanelChromeAngularUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "timeSrv", (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__.getTimeSrv)());

    _defineProperty(this, "scopeProps", void 0);

    _defineProperty(this, "subs", new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription());

    this.state = {
      data: {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.NotStarted,
        series: [],
        timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getDefaultTimeRange)()
      }
    };
  }

  componentDidMount() {
    const {
      panel
    } = this.props;
    this.loadAngularPanel(); // subscribe to data events

    const queryRunner = panel.getQueryRunner(); // we are not displaying any of this data so no need for transforms or field config

    this.subs.add(queryRunner.getData({
      withTransforms: false,
      withFieldConfig: false
    }).subscribe({
      next: data => this.onPanelDataUpdate(data)
    }));
  }

  onPanelDataUpdate(data) {
    let errorMessage;

    if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.Error) {
      const {
        error
      } = data;

      if (error) {
        if (errorMessage !== error.message) {
          errorMessage = error.message;
        }
      }
    }

    this.setState({
      data,
      errorMessage
    });
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      plugin,
      height,
      width,
      panel
    } = this.props;

    if (prevProps.plugin !== plugin) {
      this.loadAngularPanel();
    }

    if (prevProps.width !== width || prevProps.height !== height) {
      if (this.scopeProps) {
        this.scopeProps.size.height = this.getInnerPanelHeight();
        this.scopeProps.size.width = this.getInnerPanelWidth();
        panel.render();
      }
    }
  }

  getInnerPanelHeight() {
    const {
      plugin,
      height
    } = this.props;
    const {
      theme
    } = app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"];
    const headerHeight = this.hasOverlayHeader() ? 0 : theme.panelHeaderHeight;
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    return height - headerHeight - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_10__.PANEL_BORDER;
  }

  getInnerPanelWidth() {
    const {
      plugin,
      width
    } = this.props;
    const {
      theme
    } = app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"];
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    return width - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_10__.PANEL_BORDER;
  }

  loadAngularPanel() {
    const {
      panel,
      dashboard,
      setPanelAngularComponent
    } = this.props; // if we have no element or already have loaded the panel return

    if (!this.element) {
      return;
    }

    const loader = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getAngularLoader)();
    const template = '<plugin-component type="panel" class="panel-height-helper"></plugin-component>';
    this.scopeProps = {
      panel: panel,
      dashboard: dashboard,
      size: {
        width: this.getInnerPanelWidth(),
        height: this.getInnerPanelHeight()
      }
    };
    setPanelAngularComponent({
      key: panel.key,
      angularComponent: loader.load(this.element, this.scopeProps, template)
    });
  }

  hasOverlayHeader() {
    const {
      panel
    } = this.props;
    const {
      data
    } = this.state; // always show normal header if we have time override

    if (data.request && data.request.timeInfo) {
      return false;
    }

    return !panel.hasTitle();
  }

  render() {
    var _data$alertState;

    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      plugin
    } = this.props;
    const {
      errorMessage,
      data
    } = this.state;
    const {
      transparent
    } = panel;
    const alertState = (_data$alertState = data.alertState) === null || _data$alertState === void 0 ? void 0 : _data$alertState.state;
    const containerClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'panel-container': true,
      'panel-container--absolute': (0,_routes_utils__WEBPACK_IMPORTED_MODULE_11__.isSoloRoute)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.getLocation().pathname),
      'panel-container--transparent': transparent,
      'panel-container--no-title': this.hasOverlayHeader(),
      'panel-has-alert': panel.alert !== undefined,
      [`panel-alert-state--${alertState}`]: alertState !== undefined
    });
    const panelContentClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'panel-content': true,
      'panel-content--no-padding': plugin.noPadding
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: containerClassNames,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.Panels.Panel.containerByTitle(panel.title),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_6__.PanelHeader, {
        panel: panel,
        dashboard: dashboard,
        title: panel.title,
        description: panel.description,
        links: panel.links,
        error: errorMessage,
        isViewing: isViewing,
        isEditing: isEditing,
        data: data,
        alertState: alertState
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: panelContentClassNames,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          ref: element => this.element = element,
          className: "panel-height-helper"
        })
      })]
    });
  }

}

const mapStateToProps = (state, props) => {
  var _getPanelStateForMode;

  return {
    angularComponent: (_getPanelStateForMode = (0,app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_12__.getPanelStateForModel)(state, props.panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent
  };
};

const mapDispatchToProps = {
  setPanelAngularComponent: app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_8__.setPanelAngularComponent
};
const PanelChromeAngular = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(PanelChromeAngularUnconnected);

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeader": () => (/* binding */ PanelHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _PanelHeaderCorner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx");
/* harmony import */ var app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/panel/panellinks/linkSuppliers.ts");
/* harmony import */ var _PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotices.tsx");
/* harmony import */ var _PanelHeaderMenuTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuTrigger.tsx");
/* harmony import */ var _PanelHeaderLoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderLoadingIndicator.tsx");
/* harmony import */ var _PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Icon2;














const PanelHeader = ({
  panel,
  error,
  isViewing,
  isEditing,
  data,
  alertState,
  dashboard
}) => {
  const onCancelQuery = () => panel.getQueryRunner().cancelQuery();

  const title = panel.getDisplayTitle();
  const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)('panel-header', !(isViewing || isEditing) ? 'grid-drag-handle' : '');
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(panelStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderLoadingIndicator__WEBPACK_IMPORTED_MODULE_8__.PanelHeaderLoadingIndicator, {
      state: data.state,
      onClick: onCancelQuery
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderCorner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      panel: panel,
      title: panel.title,
      description: panel.description,
      scopedVars: panel.scopedVars,
      links: (0,app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_5__.getPanelLinksSupplier)(panel),
      error: error
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: className,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderMenuTrigger__WEBPACK_IMPORTED_MODULE_7__.PanelHeaderMenuTrigger, {
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.Panels.Panel.title(title),
        children: ({
          closeMenu,
          panelMenuOpen
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "panel-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_6__.PanelHeaderNotices, {
              frames: data.series,
              panelId: panel.id
            }), alertState ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: alertState === 'alerting' ? 'heart-break' : 'heart',
              className: "icon-gf panel-alert-icon",
              style: {
                marginRight: '4px'
              },
              size: "sm"
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
              className: styles.titleText,
              children: title
            }), _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "angle-down",
              className: "panel-menu-toggle"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_9__.PanelHeaderMenuWrapper, {
              panel: panel,
              dashboard: dashboard,
              show: panelMenuOpen,
              onClose: closeMenu
            }), data.request && data.request.timeInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
              className: "panel-time-info",
              children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: "clock-nine",
                size: "sm"
              })), " ", data.request.timeInfo]
            })]
          });
        }
      })
    })]
  });
};

const panelStyles = theme => {
  return {
    titleText: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: calc(100% - 38px);
      cursor: pointer;
      font-weight: ${theme.typography.fontWeightMedium};
      font-size: ${theme.typography.body.fontSize};
      margin: 0;

      &:hover {
        color: ${theme.colors.text.primary};
      }
      .panel-has-alert & {
        max-width: calc(100% - 54px);
      }
    `
  };
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderCorner": () => (/* binding */ PanelHeaderCorner),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/inspector/types.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _i, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var InfoMode;

(function (InfoMode) {
  InfoMode["Error"] = "Error";
  InfoMode["Info"] = "Info";
  InfoMode["Links"] = "Links";
})(InfoMode || (InfoMode = {}));

class PanelHeaderCorner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "timeSrv", (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__.getTimeSrv)());

    _defineProperty(this, "getInfoMode", () => {
      const {
        panel,
        error
      } = this.props;

      if (error) {
        return InfoMode.Error;
      }

      if (!!panel.description) {
        return InfoMode.Info;
      }

      if (panel.links && panel.links.length) {
        return InfoMode.Links;
      }

      return undefined;
    });

    _defineProperty(this, "getInfoContent", () => {
      const {
        panel
      } = this.props;
      const markdown = panel.description || '';
      const interpolatedMarkdown = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().replace(markdown, panel.scopedVars);
      const markedInterpolatedMarkdown = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.renderMarkdown)(interpolatedMarkdown);
      const links = this.props.links && this.props.links.getLinks(panel.replaceVariables);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "panel-info-content markdown-html",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: markedInterpolatedMarkdown
          }
        }), links && links.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
          className: "panel-info-corner-links",
          children: links.map((link, idx) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                className: "panel-info-corner-links__item",
                href: link.href,
                target: link.target,
                children: link.title
              })
            }, idx);
          })
        })]
      });
    });

    _defineProperty(this, "onClickError", () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({
        inspect: this.props.panel.id,
        inspectTab: app_features_inspector_types__WEBPACK_IMPORTED_MODULE_5__.InspectTab.Error
      });
    });
  }

  renderCornerType(infoMode, content, onClick) {
    const theme = infoMode === InfoMode.Error ? 'error' : 'info';
    const className = `panel-info-corner panel-info-corner--${infoMode.toLowerCase()}`;
    const ariaLabel = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.components.Panels.Panel.headerCornerInfo(infoMode.toLowerCase());
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      content: content,
      placement: "top-start",
      theme: theme,
      interactive: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
        className: className,
        onClick: onClick,
        "aria-label": ariaLabel,
        children: [_i || (_i = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
          "aria-hidden": true,
          className: "fa"
        })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "panel-info-corner-inner"
        }))]
      })
    });
  }

  render() {
    const {
      error
    } = this.props;
    const infoMode = this.getInfoMode();

    if (!infoMode) {
      return null;
    }

    if (infoMode === InfoMode.Error && error) {
      return this.renderCornerType(infoMode, error, this.onClickError);
    }

    if (infoMode === InfoMode.Info || infoMode === InfoMode.Links) {
      return this.renderCornerType(infoMode, this.getInfoContent);
    }

    return null;
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelHeaderCorner);

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderLoadingIndicator.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderLoadingIndicator": () => (/* binding */ PanelHeaderLoadingIndicator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tooltip;






const PanelHeaderLoadingIndicator = ({
  state,
  onClick
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);

  if (state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "panel-loading",
      onClick: onClick,
      children: _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
        content: "Cancel query",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          className: "panel-loading__spinner spin-clockwise",
          name: "sync"
        })
      }))
    });
  }

  if (state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Streaming) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "panel-loading",
      onClick: onClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        title: "Streaming (click to stop)",
        className: styles.streamIndicator
      })
    });
  }

  return null;
};

function getStyles(theme) {
  return {
    streamIndicator: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      width: 10px;
      height: 10px;
      background: ${theme.colors.textFaint};
      box-shadow: 0 0 2px ${theme.colors.textFaint};
      border-radius: 50%;
      position: relative;
      top: 6px;
      right: 1px;
    `
  };
}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenu": () => (/* binding */ PanelHeaderMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PanelHeaderMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class PanelHeaderMenu extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderItems", (menu, isSubMenu = false) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "dropdown-menu dropdown-menu--menu panel-menu",
        role: isSubMenu ? '' : 'menu',
        children: menu.map((menuItem, idx) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PanelHeaderMenuItem__WEBPACK_IMPORTED_MODULE_1__.PanelHeaderMenuItem, {
            type: menuItem.type,
            text: menuItem.text,
            iconClassName: menuItem.iconClassName,
            onClick: menuItem.onClick,
            shortcut: menuItem.shortcut,
            children: menuItem.subMenu && this.renderItems(menuItem.subMenu, true)
          }, `${menuItem.text}${idx}`);
        })
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "panel-menu-container dropdown open",
      children: this.renderItems(this.props.items)
    });
  }

}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenuProvider": () => (/* binding */ PanelHeaderMenuProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/utils/getPanelMenu.ts");
/* harmony import */ var app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/panel/state/selectors.ts");




const PanelHeaderMenuProvider = ({
  panel,
  dashboard,
  children
}) => {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const angularComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _getPanelStateForMode;

    return (_getPanelStateForMode = (0,app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_3__.getPanelStateForModel)(state, panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setItems((0,_utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_2__.getPanelMenu)(dashboard, panel, angularComponent));
  }, [dashboard, panel, angularComponent, setItems]);
  return children({
    items
  });
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuTrigger.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenuTrigger": () => (/* binding */ PanelHeaderMenuTrigger)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["children"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const PanelHeaderMenuTrigger = _ref => {
  let {
    children
  } = _ref,
      divProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [clickCoordinates, setClickCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const [panelMenuOpen, setPanelMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onMenuToggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (!isClick(clickCoordinates, eventToClickCoordinates(event))) {
      return;
    }

    event.stopPropagation();
    setPanelMenuOpen(!panelMenuOpen);
  }, [clickCoordinates, panelMenuOpen, setPanelMenuOpen]);
  const onMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    setClickCoordinates(eventToClickCoordinates(event));
  }, [setClickCoordinates]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("header", Object.assign({}, divProps, {
    className: "panel-title-container",
    onClick: onMenuToggle,
    onMouseDown: onMouseDown,
    children: children({
      panelMenuOpen,
      closeMenu: () => setPanelMenuOpen(false)
    })
  }));
};

function isClick(current, clicked) {
  return clicked.x === current.x && clicked.y === current.y;
}

function eventToClickCoordinates(event) {
  return {
    x: Math.floor(event.clientX),
    y: Math.floor(event.clientY)
  };
}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenuWrapper": () => (/* binding */ PanelHeaderMenuWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx");
/* harmony import */ var _PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const PanelHeaderMenuWrapper = ({
  show,
  onClose,
  panel,
  dashboard
}) => {
  if (!show) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideWrapper, {
    onClick: onClose,
    parent: document,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderMenuProvider, {
      panel: panel,
      dashboard: dashboard,
      children: ({
        items
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_3__.PanelHeaderMenu, {
          items: items
        });
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotice.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderNotice": () => (/* binding */ PanelHeaderNotice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const PanelHeaderNotice = ({
  notice,
  onClick
}) => {
  const iconName = notice.severity === 'error' || notice.severity === 'warning' ? 'exclamation-triangle' : 'info-circle';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: notice.text,
    children: notice.inspect ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "panel-info-notice pointer",
      onClick: e => onClick(e, notice.inspect),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: iconName,
        style: {
          marginRight: '8px'
        }
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      className: "panel-info-notice",
      href: notice.link,
      target: "_blank",
      rel: "noreferrer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: iconName,
        style: {
          marginRight: '8px'
        }
      })
    })
  }, notice.severity);
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotices.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderNotices": () => (/* binding */ PanelHeaderNotices)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PanelHeaderNotice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotice.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const PanelHeaderNotices = ({
  frames,
  panelId
}) => {
  const openInspect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e, tab) => {
    e.stopPropagation();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
      inspect: panelId,
      inspectTab: tab
    });
  }, [panelId]); // dedupe on severity

  const notices = {};

  for (const frame of frames) {
    if (!frame.meta || !frame.meta.notices) {
      continue;
    }

    for (const notice of frame.meta.notices) {
      notices[notice.severity] = notice;
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: Object.values(notices).map(notice => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PanelHeaderNotice__WEBPACK_IMPORTED_MODULE_1__.PanelHeaderNotice, {
      notice: notice,
      onClick: openInspect
    }, notice.severity))
  });
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "seriesVisibilityConfigFactory": () => (/* binding */ seriesVisibilityConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");


const displayOverrideRef = 'hideSeriesFrom';
const isHideSeriesOverride = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isSystemOverrideWithRef)(displayOverrideRef);
function seriesVisibilityConfigFactory(label, mode, fieldConfig, data) {
  const {
    overrides
  } = fieldConfig;
  const displayName = label;
  const currentIndex = overrides.findIndex(isHideSeriesOverride);

  if (currentIndex < 0) {
    if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
      const override = createOverride([displayName]);
      return Object.assign({}, fieldConfig, {
        overrides: [...fieldConfig.overrides, override]
      });
    }

    const displayNames = getDisplayNames(data, displayName);
    const override = createOverride(displayNames);
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, override]
    });
  }

  const overridesCopy = Array.from(overrides);
  const [current] = overridesCopy.splice(currentIndex, 1);

  if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
    const existing = getExistingDisplayNames(current);

    if (existing[0] === displayName && existing.length === 1) {
      return Object.assign({}, fieldConfig, {
        overrides: overridesCopy
      });
    }

    const override = createOverride([displayName]);
    return Object.assign({}, fieldConfig, {
      overrides: [...overridesCopy, override]
    });
  }

  const override = createExtendedOverride(current, displayName);

  if (allFieldsAreExcluded(override, data)) {
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  return Object.assign({}, fieldConfig, {
    overrides: [...overridesCopy, override]
  });
}

function createOverride(names, mode = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude, property) {
  var _property;

  property = (_property = property) !== null && _property !== void 0 ? _property : {
    id: 'custom.hideFrom',
    value: {
      viz: true,
      legend: false,
      tooltip: false
    }
  };
  return {
    __systemRef: displayOverrideRef,
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byNames,
      options: {
        mode: mode,
        names: names,
        prefix: mode === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude ? 'All except:' : undefined,
        readOnly: true
      }
    },
    properties: [Object.assign({}, property, {
      value: {
        viz: true,
        legend: false,
        tooltip: false
      }
    })]
  };
}

const createExtendedOverride = (current, displayName, mode = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude) => {
  const property = current.properties.find(p => p.id === 'custom.hideFrom');
  const existing = getExistingDisplayNames(current);
  const index = existing.findIndex(name => name === displayName);

  if (index < 0) {
    existing.push(displayName);
  } else {
    existing.splice(index, 1);
  }

  return createOverride(existing, mode, property);
};

const getExistingDisplayNames = rule => {
  var _rule$matcher$options;

  const names = (_rule$matcher$options = rule.matcher.options) === null || _rule$matcher$options === void 0 ? void 0 : _rule$matcher$options.names;

  if (!Array.isArray(names)) {
    return [];
  }

  return names;
};

const allFieldsAreExcluded = (override, data) => {
  return getExistingDisplayNames(override).length === getDisplayNames(data).length;
};

const getDisplayNames = (data, excludeName) => {
  const unique = new Set();

  for (const frame of data) {
    for (const field of frame.fields) {
      if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number) {
        continue;
      }

      const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(field, frame, data);

      if (name === excludeName) {
        continue;
      }

      unique.add(name);
    }
  }

  return Array.from(unique);
};

/***/ }),

/***/ "./public/app/features/dashboard/state/analyticsProcessor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitDashboardViewEvent": () => (/* binding */ emitDashboardViewEvent)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function emitDashboardViewEvent(dashboard) {
  const eventData = {
    dashboardId: dashboard.id,
    dashboardName: dashboard.title,
    dashboardUid: dashboard.uid,
    folderName: dashboard.meta.folderTitle,
    eventName: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.MetaAnalyticsEventName.DashboardView
  };
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportMetaAnalytics)(eventData);
}

/***/ }),

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewDashboardModelData": () => (/* binding */ getNewDashboardModelData),
/* harmony export */   "initDashboard": () => (/* binding */ initDashboard),
/* harmony export */   "removeDashboardToFetchFromLocalStorage": () => (/* binding */ removeDashboardToFetchFromLocalStorage),
/* harmony export */   "setDashboardToFetchFromLocalStorage": () => (/* binding */ setDashboardToFetchFromLocalStorage)
/* harmony export */ });
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/keybindingSrv.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _DashboardModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _analyticsProcessor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/state/analyticsProcessor.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/store.ts");
// Services & Utils





 // Actions


 // Types













async function fetchDashboard(args, dispatch, getState) {
  // When creating new or adding panels to a dashboard from explore we load it from local storage
  const model = app_core_store__WEBPACK_IMPORTED_MODULE_18__["default"].getObject(DASHBOARD_FROM_LS_KEY);

  if (model) {
    removeDashboardToFetchFromLocalStorage();
    return model;
  }

  try {
    switch (args.routeName) {
      case app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutes.Home:
        {
          // load home dash
          const dashDTO = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.backendSrv.get('/api/dashboards/home'); // if user specified a custom home dashboard redirect to that

          if (dashDTO.redirectUri) {
            const newUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_10__.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.replace(newUrl);
            return null;
          } // disable some actions on the default home dashboard


          dashDTO.meta.canSave = false;
          dashDTO.meta.canShare = false;
          dashDTO.meta.canStar = false;
          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutes.Normal:
        {
          const dashDTO = await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_3__.dashboardLoaderSrv.loadDashboard(args.urlType, args.urlSlug, args.urlUid);

          if (args.fixUrl && dashDTO.meta.url) {
            // check if the current url is correct (might be old slug)
            const dashboardUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_10__.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
            const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.getLocation().pathname;

            if (dashboardUrl !== currentPath) {
              // Spread current location to persist search params used for navigation
              _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.replace(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.getLocation(), {
                pathname: dashboardUrl
              }));
              console.log('not correct url correcting', dashboardUrl, currentPath);
            }
          }

          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutes.New:
        {
          return getNewDashboardModelData(args.urlFolderId);
        }

      default:
        throw {
          message: 'Unknown route ' + args.routeName
        };
    }
  } catch (err) {
    // Ignore cancelled errors
    if (err.cancelled) {
      return null;
    }

    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitFailed)({
      message: 'Failed to fetch dashboard',
      error: err
    }));
    console.error(err);
    return null;
  }
}
/**
 * This action (or saga) does everything needed to bootstrap a dashboard & dashboard model.
 * First it handles the process of fetching the dashboard, correcting the url if required (causing redirects/url updates)
 *
 * This is used both for single dashboard & solo panel routes, home & new dashboard routes.
 *
 * Then it handles the initializing of the old angular services that the dashboard components & panels still depend on
 *
 */


function initDashboard(args) {
  return async (dispatch, getState) => {
    var _args$urlUid;

    // set fetching state
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitFetching)()); // fetch dashboard data

    const dashDTO = await fetchDashboard(args, dispatch, getState); // returns null if there was a redirect or error

    if (!dashDTO) {
      return;
    } // set initializing state


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitServices)()); // create model

    let dashboard;

    try {
      dashboard = new _DashboardModel__WEBPACK_IMPORTED_MODULE_9__.DashboardModel(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitFailed)({
        message: 'Failed create dashboard model',
        error: err
      }));
      console.error(err);
      return;
    } // add missing orgId query param


    const storeState = getState();
    const queryParams = _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.getSearchObject();

    if (!queryParams.orgId) {
      // TODO this is currently not possible with the LocationService API
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.locationService.partial({
        orgId: storeState.user.orgId
      }, true);
    } // init services


    const timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__.getTimeSrv)();
    const dashboardSrv = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_2__.getDashboardSrv)(); // legacy srv state, we need this value updated for built-in annotations

    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_17__.toStateKey)((_args$urlUid = args.urlUid) !== null && _args$urlUid !== void 0 ? _args$urlUid : dashboard.uid); // template values service needs to initialize completely before the rest of the dashboard can load

    await dispatch((0,_variables_state_actions__WEBPACK_IMPORTED_MODULE_11__.initVariablesTransaction)(dashboardUid, dashboard)); // DashboardQueryRunner needs to run after all variables have been resolved so that any annotation query including a variable
    // will be correctly resolved

    const runner = (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_15__.createDashboardQueryRunner)({
      dashboard,
      timeSrv
    });
    runner.run({
      dashboard,
      range: timeSrv.timeRange()
    });

    if ((0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_16__.getIfExistsLastKey)(getState()) !== dashboardUid) {
      // if a previous dashboard has slow running variable queries the batch uid will be the new one
      // but the args.urlUid will be the same as before initVariablesTransaction was called so then we can't continue initializing
      // the previous dashboard.
      return;
    } // If dashboard is in a different init phase it means it cancelled during service init


    if (getState().dashboard.initPhase !== app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardInitPhase.Services) {
      return;
    }

    try {
      dashboard.processRepeats(); // handle auto fix experimental feature

      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__.keybindingSrv.setupDashboardBindings(dashboard);
    } catch (err) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_6__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_0__.createErrorNotification)('Dashboard init failed', err)));
      console.error(err);
    } // send open dashboard event


    if (args.routeName !== app_types__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutes.New) {
      (0,_analyticsProcessor__WEBPACK_IMPORTED_MODULE_12__.emitDashboardViewEvent)(dashboard); // Listen for changes on the current dashboard

      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_13__.dashboardWatcher.watch(dashboard.uid);
    } else {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_13__.dashboardWatcher.leave();
    } // set week start


    if (dashboard.weekStart !== '') {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.setWeekStart)(dashboard.weekStart);
    } else {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.setWeekStart)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.config.bootData.user.weekStart);
    } // yay we are done


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.dashboardInitCompleted)(dashboard));
  };
}
function getNewDashboardModelData(urlFolderId) {
  const data = {
    meta: {
      canStar: false,
      canShare: false,
      isNew: true,
      folderId: 0
    },
    dashboard: {
      title: 'New dashboard',
      panels: [{
        type: 'add-panel',
        gridPos: {
          x: 0,
          y: 0,
          w: 12,
          h: 9
        },
        title: 'Panel Title'
      }]
    }
  };

  if (urlFolderId) {
    data.meta.folderId = parseInt(urlFolderId, 10);
  }

  return data;
}
const DASHBOARD_FROM_LS_KEY = 'DASHBOARD_FROM_LS_KEY';
function setDashboardToFetchFromLocalStorage(model) {
  app_core_store__WEBPACK_IMPORTED_MODULE_18__["default"].setObject(DASHBOARD_FROM_LS_KEY, model);
}
function removeDashboardToFetchFromLocalStorage() {
  app_core_store__WEBPACK_IMPORTED_MODULE_18__["default"]["delete"](DASHBOARD_FROM_LS_KEY);
}

/***/ }),

/***/ "./public/app/features/dashboard/utils/getPanelMenu.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPanelMenu": () => (/* binding */ getPanelMenu)
/* harmony export */ });
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/guard.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _explore_state_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _core_utils_explore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/utils/explore.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");









function getPanelMenu(dashboard, panel, angularComponent) {
  const onViewPanel = event => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
      viewPanel: panel.id
    });
  };

  const onEditPanel = event => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
      editPanel: panel.id
    });
  };

  const onSharePanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.sharePanel)(dashboard, panel);
  };

  const onAddLibraryPanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.addLibraryPanel)(dashboard, panel);
  };

  const onUnlinkLibraryPanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.unlinkLibraryPanel)(panel);
  };

  const onInspectPanel = tab => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
      inspect: panel.id,
      inspectTab: tab
    });
  };

  const onMore = event => {
    event.preventDefault();
  };

  const onDuplicatePanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.duplicatePanel)(dashboard, panel);
  };

  const onCopyPanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.copyPanel)(panel);
  };

  const onRemovePanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.removePanel)(dashboard, panel, true);
  };

  const onNavigateToExplore = event => {
    event.preventDefault();
    const openInNewWindow = event.ctrlKey || event.metaKey ? url => window.open(`${app_core_config__WEBPACK_IMPORTED_MODULE_8__["default"].appSubUrl}${url}`) : undefined;
    app_store_store__WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_explore_state_main__WEBPACK_IMPORTED_MODULE_5__.navigateToExplore)(panel, {
      getDataSourceSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv,
      getTimeSrv: _services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__.getTimeSrv,
      getExploreUrl: _core_utils_explore__WEBPACK_IMPORTED_MODULE_6__.getExploreUrl,
      openInNewWindow
    }));
  };

  const menu = [];

  if (!panel.isEditing) {
    menu.push({
      text: 'View',
      iconClassName: 'eye',
      onClick: onViewPanel,
      shortcut: 'v'
    });
  }

  if (dashboard.canEditPanel(panel) && !panel.isEditing) {
    menu.push({
      text: 'Edit',
      iconClassName: 'edit',
      onClick: onEditPanel,
      shortcut: 'e'
    });
  }

  menu.push({
    text: 'Share',
    iconClassName: 'share-alt',
    onClick: onSharePanel,
    shortcut: 'p s'
  });

  if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasAccessToExplore() && !(panel.plugin && panel.plugin.meta.skipDataQuery)) {
    menu.push({
      text: 'Explore',
      iconClassName: 'compass',
      shortcut: 'x',
      onClick: onNavigateToExplore
    });
  }

  const inspectMenu = []; // Only show these inspect actions for data plugins

  if (panel.plugin && !panel.plugin.meta.skipDataQuery) {
    inspectMenu.push({
      text: 'Data',
      onClick: e => onInspectPanel('data')
    });

    if (dashboard.meta.canEdit) {
      inspectMenu.push({
        text: 'Query',
        onClick: e => onInspectPanel('query')
      });
    }
  }

  inspectMenu.push({
    text: 'Panel JSON',
    onClick: e => onInspectPanel('json')
  });
  menu.push({
    type: 'submenu',
    text: 'Inspect',
    iconClassName: 'info-circle',
    onClick: e => onInspectPanel(),
    shortcut: 'i',
    subMenu: inspectMenu
  });
  const subMenu = [];

  if (dashboard.canEditPanel(panel) && !(panel.isViewing || panel.isEditing)) {
    subMenu.push({
      text: 'Duplicate',
      onClick: onDuplicatePanel,
      shortcut: 'p d'
    });
    subMenu.push({
      text: 'Copy',
      onClick: onCopyPanel
    });

    if ((0,app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_3__.isPanelModelLibraryPanel)(panel)) {
      subMenu.push({
        text: 'Unlink library panel',
        onClick: onUnlinkLibraryPanel
      });
    } else {
      subMenu.push({
        text: 'Create library panel',
        onClick: onAddLibraryPanel
      });
    }
  } // add old angular panel options


  if (angularComponent) {
    const scope = angularComponent.getScope();
    const panelCtrl = scope.$$childHead.ctrl;
    const angularMenuItems = panelCtrl.getExtendedMenu();

    for (const item of angularMenuItems) {
      const reactItem = {
        text: item.text,
        href: item.href,
        shortcut: item.shortcut
      };

      if (item.click) {
        reactItem.onClick = () => {
          scope.$eval(item.click, {
            ctrl: panelCtrl
          });
        };
      }

      subMenu.push(reactItem);
    }
  }

  if (!panel.isEditing && subMenu.length) {
    menu.push({
      type: 'submenu',
      text: 'More...',
      iconClassName: 'cube',
      subMenu,
      onClick: onMore
    });
  }

  if (dashboard.canEditPanel(panel) && !panel.isEditing && !panel.isViewing) {
    menu.push({
      type: 'divider',
      text: ''
    });
    menu.push({
      text: 'Remove',
      iconClassName: 'trash-alt',
      onClick: onRemovePanel,
      shortcut: 'p r'
    });
  }

  return menu;
}

/***/ }),

/***/ "./public/app/features/dashboard/utils/loadSnapshotData.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadSnapshotData": () => (/* binding */ loadSnapshotData)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _query_state_runRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/query/state/runRequest.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/SnapshotWorker.ts");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");






function loadSnapshotData(panel, dashboard) {
  const data = (0,_query_state_runRequest__WEBPACK_IMPORTED_MODULE_2__.getProcessedDataFrames)(panel.snapshotData);
  const worker = new _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_3__.SnapshotWorker();
  const options = {
    dashboard,
    range: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)()
  };
  const annotationEvents = worker.canWork(options) ? worker.getAnnotationsInSnapshot(dashboard, panel.id) : [];
  const annotations = [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(annotationEvents)];
  const timeData = (0,_panel__WEBPACK_IMPORTED_MODULE_4__.applyPanelTimeOverrides)(panel, (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_5__.getTimeSrv)().timeRange());
  return {
    timeRange: timeData.timeRange,
    state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
    series: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.applyFieldOverrides)({
      data,
      fieldConfig: {
        defaults: {},
        overrides: []
      },
      replaceVariables: panel.replaceVariables,
      fieldConfigRegistry: panel.plugin.fieldConfigRegistry,
      theme: app_core_config__WEBPACK_IMPORTED_MODULE_1__.config.theme2,
      timeZone: dashboard.getTimezone()
    }),
    annotations
  };
}

/***/ }),

/***/ "./public/app/features/inspector/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectTab": () => (/* binding */ InspectTab)
/* harmony export */ });
let InspectTab;

(function (InspectTab) {
  InspectTab["Data"] = "data";
  InspectTab["Meta"] = "meta";
  InspectTab["Error"] = "error";
  InspectTab["Stats"] = "stats";
  InspectTab["JSON"] = "json";
  InspectTab["Query"] = "query";
  InspectTab["Actions"] = "actions";
})(InspectTab || (InspectTab = {}));

/***/ }),

/***/ "./public/app/features/panel/panellinks/linkSuppliers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFieldLinksSupplier": () => (/* binding */ getFieldLinksSupplier),
/* harmony export */   "getPanelLinksSupplier": () => (/* binding */ getPanelLinksSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _link_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");



/**
 * Link suppliers creates link models based on a link origin
 */
const getFieldLinksSupplier = value => {
  const links = value.field.links;

  if (!links || links.length === 0) {
    return undefined;
  }

  return {
    getLinks: replaceVariables => {
      const scopedVars = {};

      if (value.view) {
        const {
          dataFrame
        } = value.view;
        scopedVars['__series'] = {
          value: {
            name: dataFrame.name,
            refId: dataFrame.refId
          },
          text: 'Series'
        };
        const field = value.colIndex !== undefined ? dataFrame.fields[value.colIndex] : undefined;

        if (field) {
          scopedVars['__field'] = {
            value: {
              name: field.name,
              labels: field.labels
            },
            text: 'Field'
          };

          if (value.rowIndex !== undefined && value.rowIndex >= 0) {
            const {
              timeField
            } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getTimeField)(dataFrame);
            scopedVars['__value'] = {
              value: {
                raw: field.values.get(value.rowIndex),
                numeric: value.display.numeric,
                text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(value.display),
                time: timeField ? timeField.values.get(value.rowIndex) : undefined
              },
              text: 'Value'
            };
          } // Expose other values on the row


          if (value.view) {
            scopedVars['__data'] = {
              value: {
                name: dataFrame.name,
                refId: dataFrame.refId,
                fields: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayValuesProxy)({
                  frame: dataFrame,
                  rowIndex: value.rowIndex
                })
              },
              text: 'Data'
            };
          }
        } else {
          // calculation
          scopedVars['__value'] = {
            value: {
              raw: value.display.numeric,
              numeric: value.display.numeric,
              text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(value.display),
              calc: value.name
            },
            text: 'Value'
          };
        }
      } else {
        console.log('VALUE', value);
      }

      const replace = (value, vars, fmt) => {
        const finalVars = Object.assign({}, scopedVars, vars);
        return replaceVariables(value, finalVars, fmt);
      };

      return links.map(link => {
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__.getLinkSrv)().getDataLinkUIModel(link, replace, value);
      });
    }
  };
};
const getPanelLinksSupplier = panel => {
  const links = panel.links;

  if (!links || links.length === 0) {
    return undefined;
  }

  return {
    getLinks: () => {
      return links.map(link => {
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__.getLinkSrv)().getDataLinkUIModel(link, panel.replaceVariables, panel);
      });
    }
  };
};

/***/ }),

/***/ "./public/app/features/panel/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPanelStateForModel": () => (/* binding */ getPanelStateForModel)
/* harmony export */ });
function getPanelStateForModel(state, model) {
  return state.panels[model.key];
}

/***/ }),

/***/ "./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeSeriesColorConfigFactory": () => (/* binding */ changeSeriesColorConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

const changeSeriesColorConfigFactory = (label, color, fieldConfig) => {
  const {
    overrides
  } = fieldConfig;
  const currentIndex = fieldConfig.overrides.findIndex(override => {
    return override.matcher.id === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName && override.matcher.options === label;
  });

  if (currentIndex < 0) {
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, createOverride(label, color)]
    });
  }

  const overridesCopy = Array.from(overrides);
  const existing = overridesCopy[currentIndex];
  const propertyIndex = existing.properties.findIndex(p => p.id === 'color');

  if (propertyIndex < 0) {
    overridesCopy[currentIndex] = Object.assign({}, existing, {
      properties: [...existing.properties, createProperty(color)]
    });
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  const propertiesCopy = Array.from(existing.properties);
  propertiesCopy[propertyIndex] = createProperty(color);
  overridesCopy[currentIndex] = Object.assign({}, existing, {
    properties: propertiesCopy
  });
  return Object.assign({}, fieldConfig, {
    overrides: overridesCopy
  });
};

const createOverride = (label, color) => {
  return {
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
      options: label
    },
    properties: [createProperty(color)]
  };
};

const createProperty = color => {
  return {
    id: 'color',
    value: {
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
      fixedColor: color
    }
  };
};

/***/ }),

/***/ "./public/app/routes/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSoloRoute": () => (/* binding */ isSoloRoute)
/* harmony export */ });
function isSoloRoute(path) {
  return /(d-solo|dashboard-solo)/.test(path === null || path === void 0 ? void 0 : path.toLowerCase());
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29sb1BhbmVsUGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVdBLE1BQU1NLGVBQWUsR0FBSUMsS0FBRCxLQUF3QjtBQUM5Q0MsRUFBQUEsU0FBUyxFQUFFRCxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLFFBQWhCO0FBRG1DLENBQXhCLENBQXhCOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHO0FBQ3pCTCxFQUFBQSxhQUFhQSxpRUFBQUE7QUFEWSxDQUEzQjtBQUlBLE1BQU1NLFNBQVMsR0FBR1Qsb0RBQU8sQ0FBQ0ksZUFBRCxFQUFrQkksa0JBQWxCLENBQXpCO0FBVU8sTUFBTUUsYUFBTixTQUE0QlgsNENBQTVCLENBQW9EO0FBQUE7QUFBQTs7QUFBQSxtQ0FDMUM7QUFDYlksTUFBQUEsS0FBSyxFQUFFLElBRE07QUFFYkMsTUFBQUEsUUFBUSxFQUFFO0FBRkcsS0FEMEM7QUFBQTs7QUFNekRDLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCLFVBQU07QUFBRUMsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULFFBQW1CLEtBQUtDLEtBQTlCO0FBRUEsU0FBS0EsS0FBTCxDQUFXYixhQUFYLENBQXlCO0FBQ3ZCYyxNQUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQURDO0FBRXZCQyxNQUFBQSxNQUFNLEVBQUVOLEtBQUssQ0FBQ0ksTUFBTixDQUFhRyxHQUZFO0FBR3ZCQyxNQUFBQSxPQUFPLEVBQUVSLEtBQUssQ0FBQ0ksTUFBTixDQUFhSyxJQUhDO0FBSXZCQyxNQUFBQSxTQUFTLEVBQUVULEtBQUssQ0FBQ1MsU0FKTTtBQUt2QkMsTUFBQUEsTUFBTSxFQUFFO0FBTGUsS0FBekI7QUFPRDs7QUFFREMsRUFBQUEsVUFBVSxHQUFXO0FBQUE7O0FBQ25CLFdBQU9DLFFBQVEsMEJBQUMsS0FBS1gsS0FBTCxDQUFXWSxXQUFYLENBQXVCQyxPQUF4Qix5RUFBbUMsR0FBbkMsRUFBd0MsRUFBeEMsQ0FBZjtBQUNEOztBQUVEQyxFQUFBQSxrQkFBa0IsQ0FBQ0MsU0FBRCxFQUFtQjtBQUNuQyxVQUFNO0FBQUV6QixNQUFBQTtBQUFGLFFBQWdCLEtBQUtVLEtBQTNCOztBQUVBLFFBQUksQ0FBQ1YsU0FBTCxFQUFnQjtBQUNkO0FBQ0QsS0FMa0MsQ0FPbkM7OztBQUNBLFFBQUksQ0FBQ3lCLFNBQVMsQ0FBQ3pCLFNBQVgsSUFBd0J5QixTQUFTLENBQUN6QixTQUFWLENBQW9CZSxHQUFwQixLQUE0QmYsU0FBUyxDQUFDZSxHQUFsRSxFQUF1RTtBQUNyRSxZQUFNVixLQUFLLEdBQUdMLFNBQVMsQ0FBQzBCLGVBQVYsQ0FBMEIsS0FBS2hCLEtBQUwsQ0FBV1ksV0FBWCxDQUF1QkMsT0FBakQsQ0FBZDs7QUFFQSxVQUFJLENBQUNsQixLQUFMLEVBQVk7QUFDVixhQUFLc0IsUUFBTCxDQUFjO0FBQUVyQixVQUFBQSxRQUFRLEVBQUU7QUFBWixTQUFkO0FBQ0E7QUFDRDs7QUFFRCxXQUFLcUIsUUFBTCxDQUFjO0FBQUV0QixRQUFBQTtBQUFGLE9BQWQ7QUFDRDtBQUNGOztBQUVEdUIsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsdURBQUMsU0FBRDtBQUNFLGVBQVMsRUFBRSxLQUFLbEIsS0FBTCxDQUFXVixTQUR4QjtBQUVFLGNBQVEsRUFBRSxLQUFLRCxLQUFMLENBQVdPLFFBRnZCO0FBR0UsV0FBSyxFQUFFLEtBQUtQLEtBQUwsQ0FBV00sS0FIcEI7QUFJRSxhQUFPLEVBQUUsS0FBS2UsVUFBTDtBQUpYLE1BREY7QUFRRDs7QUFuRHdEO0FBMkRwRCxNQUFNUyxTQUFTLEdBQUcsQ0FBQztBQUFFN0IsRUFBQUEsU0FBRjtBQUFhTSxFQUFBQSxRQUFiO0FBQXVCRCxFQUFBQSxLQUF2QjtBQUE4QmtCLEVBQUFBO0FBQTlCLENBQUQsS0FBNkQ7QUFDcEYsTUFBSWpCLFFBQUosRUFBYztBQUNaLHdCQUFPO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsbUNBQWtEaUIsT0FBbEQ7QUFBQSxNQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDbEIsS0FBRCxJQUFVLENBQUNMLFNBQWYsRUFBMEI7QUFDeEIsd0NBQU87QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsMkJBQ0UsdURBQUMsb0VBQUQ7QUFBQSxnQkFDRyxDQUFDO0FBQUU4QixRQUFBQSxLQUFGO0FBQVNDLFFBQUFBO0FBQVQsT0FBRCxLQUF1QjtBQUN0QixZQUFJRCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGlCQUFPLElBQVA7QUFDRDs7QUFDRCw0QkFDRSx1REFBQyxvRUFBRDtBQUNFLGtCQUFRLEVBQUV6QixLQUFLLENBQUMyQixHQURsQjtBQUVFLGVBQUssRUFBRUYsS0FGVDtBQUdFLGdCQUFNLEVBQUVDLE1BSFY7QUFJRSxtQkFBUyxFQUFFL0IsU0FKYjtBQUtFLGVBQUssRUFBRUssS0FMVDtBQU1FLG1CQUFTLEVBQUUsS0FOYjtBQU9FLG1CQUFTLEVBQUUsS0FQYjtBQVFFLGNBQUksRUFBRTtBQVJSLFVBREY7QUFZRDtBQWpCSDtBQURGLElBREY7QUF1QkQsQ0FoQ007QUFrQ1AsaUVBQWVGLFNBQVMsQ0FBQ0MsYUFBRCxDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBY0EsTUFBTU4sZUFBZSxHQUFHLENBQUNDLEtBQUQsRUFBb0JXLEtBQXBCLEtBQXdDO0FBQzlELFFBQU04QixVQUFVLEdBQUd6QyxLQUFLLENBQUMwQyxNQUFOLENBQWEvQixLQUFLLENBQUNnQyxRQUFuQixDQUFuQjs7QUFDQSxNQUFJLENBQUNGLFVBQUwsRUFBaUI7QUFDZixXQUFPO0FBQUVHLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQ0xBLElBQUFBLE1BQU0sRUFBRUgsVUFBVSxDQUFDRyxNQURkO0FBRUxDLElBQUFBLGFBQWEsRUFBRUosVUFBVSxDQUFDSTtBQUZyQixHQUFQO0FBSUQsQ0FWRDs7QUFZQSxNQUFNMUMsa0JBQWtCLEdBQUc7QUFDekJvQyxFQUFBQSxjQUR5QjtBQUV6QkYsRUFBQUEsaUJBRnlCO0FBR3pCQyxFQUFBQSxxQkFBcUJBLDBFQUFBQTtBQUhJLENBQTNCO0FBTUEsTUFBTWxDLFNBQVMsR0FBR1Qsb0RBQU8sQ0FBQ0ksZUFBRCxFQUFrQkksa0JBQWxCLENBQXpCO0FBSU8sTUFBTTJDLHlCQUFOLFNBQXdDWixnREFBeEMsQ0FBNkQ7QUFBQTtBQUFBOztBQUFBLDJDQUtyQixFQUxxQjs7QUFBQSxtREFxQnpDYSxLQUFELElBQWdCO0FBQ3RDLFdBQUtwQyxLQUFMLENBQVcyQixxQkFBWCxDQUFpQztBQUFFTCxRQUFBQSxHQUFHLEVBQUUsS0FBS3RCLEtBQUwsQ0FBV2dDLFFBQWxCO0FBQTRCSSxRQUFBQTtBQUE1QixPQUFqQztBQUNELEtBdkJpRTs7QUFBQSxnREF5QjVDQyxDQUFELElBQWdCO0FBQ25DLFdBQUtyQyxLQUFMLENBQVdMLEtBQVgsQ0FBaUIyQyxRQUFqQixHQUE0QkQsQ0FBNUI7QUFDRCxLQTNCaUU7O0FBQUEseUNBNkJwRCxNQUFNO0FBQ2xCLFVBQUksQ0FBQyxLQUFLckMsS0FBTCxDQUFXaUMsTUFBaEIsRUFBd0I7QUFDdEIsYUFBS2pDLEtBQUwsQ0FBVzRCLGNBQVgsQ0FBMEIsS0FBSzVCLEtBQUwsQ0FBV0wsS0FBckM7QUFDRDtBQUNGLEtBakNpRTtBQUFBOztBQU9sRUUsRUFBQUEsaUJBQWlCLEdBQUc7QUFDbEIsU0FBS0csS0FBTCxDQUFXTCxLQUFYLENBQWlCMkMsUUFBakIsR0FBNEIsQ0FBQyxLQUFLdEMsS0FBTCxDQUFXdUMsSUFBeEM7O0FBQ0EsUUFBSSxDQUFDLEtBQUt2QyxLQUFMLENBQVd1QyxJQUFoQixFQUFzQjtBQUNwQixXQUFLQyxXQUFMO0FBQ0Q7QUFDRjs7QUFFREMsRUFBQUEsb0JBQW9CLEdBQUc7QUFDckI7QUFDQSxRQUFJLENBQUMsS0FBS3pDLEtBQUwsQ0FBVzBDLGdCQUFoQixFQUFrQztBQUNoQyxXQUFLMUMsS0FBTCxDQUFXMEIsaUJBQVgsQ0FBNkI7QUFBRUosUUFBQUEsR0FBRyxFQUFFLEtBQUt0QixLQUFMLENBQVdnQztBQUFsQixPQUE3QjtBQUNEO0FBQ0Y7O0FBZ0JEZCxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUU1QixNQUFBQSxTQUFGO0FBQWFLLE1BQUFBLEtBQWI7QUFBb0JnRCxNQUFBQSxTQUFwQjtBQUErQkMsTUFBQUEsU0FBL0I7QUFBMEN4QixNQUFBQSxLQUExQztBQUFpREMsTUFBQUEsTUFBakQ7QUFBeURrQixNQUFBQSxJQUF6RDtBQUErRE4sTUFBQUE7QUFBL0QsUUFBMEUsS0FBS2pDLEtBQXJGOztBQUVBLFVBQU02QyxpQkFBaUIsR0FBSVAsUUFBRCxJQUN4QkwsTUFBTSxLQUNMQSxNQUFNLENBQUNhLGdCQUFQLGdCQUNDLHVEQUFDLG1FQUFEO0FBQ0UsWUFBTSxFQUFFYixNQURWO0FBRUUsV0FBSyxFQUFFdEMsS0FGVDtBQUdFLGVBQVMsRUFBRUwsU0FIYjtBQUlFLGVBQVMsRUFBRXFELFNBSmI7QUFLRSxlQUFTLEVBQUVDLFNBTGI7QUFNRSxjQUFRLEVBQUVOLFFBTlo7QUFPRSxXQUFLLEVBQUVsQixLQVBUO0FBUUUsWUFBTSxFQUFFQztBQVJWLE1BREQsZ0JBWUMsdURBQUMscURBQUQ7QUFDRSxZQUFNLEVBQUVZLE1BRFY7QUFFRSxXQUFLLEVBQUV0QyxLQUZUO0FBR0UsZUFBUyxFQUFFTCxTQUhiO0FBSUUsZUFBUyxFQUFFcUQsU0FKYjtBQUtFLGVBQVMsRUFBRUMsU0FMYjtBQU1FLGNBQVEsRUFBRU4sUUFOWjtBQU9FLFdBQUssRUFBRWxCLEtBUFQ7QUFRRSxZQUFNLEVBQUVDLE1BUlY7QUFTRSwyQkFBcUIsRUFBRSxLQUFLMEI7QUFUOUIsTUFiSSxDQURSOztBQTJCQSxXQUFPUixJQUFJLGdCQUNULHVEQUFDLG1EQUFEO0FBQVksV0FBSyxFQUFFbkIsS0FBbkI7QUFBMEIsWUFBTSxFQUFFQyxNQUFsQztBQUEwQyxjQUFRLEVBQUUsS0FBSzJCLGtCQUF6RDtBQUE2RSxZQUFNLEVBQUUsS0FBS1IsV0FBMUY7QUFBQSxnQkFDRyxDQUFDO0FBQUVGLFFBQUFBO0FBQUYsT0FBRCxLQUFrQk8saUJBQWlCLENBQUNQLFFBQUQ7QUFEdEMsTUFEUyxHQUtUTyxpQkFBaUIsQ0FBQyxJQUFELENBTG5CO0FBT0Q7O0FBeEVpRTs7Z0JBQXZEViwyQ0FDMkI7QUFDcENJLEVBQUFBLElBQUksRUFBRTtBQUQ4Qjs7QUEwRWpDLE1BQU1yRCxjQUFjLEdBQUdPLFNBQVMsQ0FBQzBDLHlCQUFELENBQWhDOzs7Ozs7Ozs7Ozs7Ozs7QUN2SFA7QUFDQTtBQUNBOztBQVVPLFNBQVNOLFVBQVQsQ0FBb0I7QUFBRXdCLEVBQUFBLFFBQUY7QUFBWWpDLEVBQUFBLEtBQVo7QUFBbUJDLEVBQUFBLE1BQW5CO0FBQTJCaUMsRUFBQUEsTUFBM0I7QUFBbUNDLEVBQUFBO0FBQW5DLENBQXBCLEVBQTBFO0FBQy9FLFFBQU1DLEVBQUUsR0FBR0wsbUdBQVcsRUFBdEI7QUFDQSxRQUFNLENBQUNNLE1BQUQsRUFBU0MsU0FBVCxJQUFzQlIsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0EsUUFBTSxDQUFDWixRQUFELEVBQVdxQixXQUFYLElBQTBCVCwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFDQSxRQUFNVSxVQUFVLEdBQUdYLDZDQUFNLENBQWlCLElBQWpCLENBQXpCO0FBRUFHLEVBQUFBLHFEQUFhLENBQUMsTUFBTTtBQUNsQnZCLElBQUFBLFVBQVUsQ0FBQ2dDLFdBQVgsQ0FBdUJMLEVBQXZCLEVBQTRCTSxLQUFELElBQVc7QUFDcEMsVUFBSSxDQUFDTCxNQUFELElBQVdLLEtBQUssQ0FBQ0MsY0FBckIsRUFBcUM7QUFDbkNMLFFBQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUosUUFBQUEsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNO0FBQ1A7O0FBRURLLE1BQUFBLFdBQVcsQ0FBQ0csS0FBSyxDQUFDQyxjQUFQLENBQVg7QUFDQVIsTUFBQUEsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUdPLEtBQUssQ0FBQ0MsY0FBVCxDQUFSO0FBQ0QsS0FSRDtBQVVBLFVBQU1DLFNBQVMsR0FBR0osVUFBVSxDQUFDSyxPQUE3Qjs7QUFFQSxRQUFJRCxTQUFKLEVBQWU7QUFDYm5DLE1BQUFBLFVBQVUsQ0FBQ3FDLFFBQVgsQ0FBb0JDLE9BQXBCLENBQTRCSCxTQUE1QjtBQUNEOztBQUVELFdBQU8sTUFBTTtBQUNYLGFBQU9uQyxVQUFVLENBQUN1QyxTQUFYLENBQXFCWixFQUFyQixDQUFQO0FBQ0FRLE1BQUFBLFNBQVMsSUFBSW5DLFVBQVUsQ0FBQ3FDLFFBQVgsQ0FBb0JHLFNBQXBCLENBQThCTCxTQUE5QixDQUFiOztBQUNBLFVBQUlNLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMUMsVUFBVSxDQUFDdUMsU0FBdkIsRUFBa0NJLE1BQWxDLEtBQTZDLENBQWpELEVBQW9EO0FBQ2xEM0MsUUFBQUEsVUFBVSxDQUFDcUMsUUFBWCxDQUFvQk8sVUFBcEI7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQXhCWSxDQUFiO0FBMEJBLHNCQUNFO0FBQUssTUFBRSxFQUFFakIsRUFBVDtBQUFhLE9BQUcsRUFBRUksVUFBbEI7QUFBOEIsU0FBSyxFQUFFO0FBQUV4QyxNQUFBQSxLQUFGO0FBQVNDLE1BQUFBO0FBQVQsS0FBckM7QUFBQSxjQUNHb0MsTUFBTSxLQUFLLE9BQU9KLFFBQVAsS0FBb0IsVUFBcEIsR0FBaUNBLFFBQVEsQ0FBQztBQUFFZixNQUFBQTtBQUFGLEtBQUQsQ0FBekMsR0FBMERlLFFBQS9EO0FBRFQsSUFERjtBQUtEO0FBRUR4QixVQUFVLENBQUN1QyxTQUFYLEdBQXVCLEVBQXZCOztBQUNBdkMsVUFBVSxDQUFDZ0MsV0FBWCxHQUF5QixDQUFDTCxFQUFELEVBQWFrQixDQUFiLEtBQTREN0MsVUFBVSxDQUFDdUMsU0FBWCxDQUFxQlosRUFBckIsSUFBMkJrQixDQUFoSDs7QUFDQTdDLFVBQVUsQ0FBQ3FDLFFBQVgsR0FBc0IsSUFBSVMsb0JBQUosQ0FDbkJDLE9BQUQsSUFBYTtBQUNYLE9BQUssTUFBTWQsS0FBWCxJQUFvQmMsT0FBcEIsRUFBNkI7QUFDM0IvQyxJQUFBQSxVQUFVLENBQUN1QyxTQUFYLENBQXFCTixLQUFLLENBQUNlLE1BQU4sQ0FBYXJCLEVBQWxDLEVBQXNDTSxLQUF0QztBQUNEO0FBQ0YsQ0FMbUIsRUFNcEI7QUFBRWdCLEVBQUFBLFVBQVUsRUFBRTtBQUFkLENBTm9CLENBQXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1nQyxvQkFBb0IsR0FBRyxpQkFBN0I7QUF3Qk8sTUFBTXRGLFdBQU4sU0FBMEJELGdEQUExQixDQUFzRDtBQUszRHdGLEVBQUFBLFdBQVcsQ0FBQy9HLEtBQUQsRUFBZTtBQUN4QixVQUFNQSxLQUFOLEVBRHdCLENBR3hCOztBQUh3QixxQ0FKVThGLDZEQUFVLEVBSXBCOztBQUFBLGtDQUhYLElBQUlkLCtDQUFKLEVBR1c7O0FBQUEseUNBRmdCO0FBQUVnQyxNQUFBQSxTQUFTLEVBQUU7QUFBYixLQUVoQjs7QUFBQSw4Q0E2QlAsTUFBTUMsT0FBTyxDQUFDLEtBQUtqSCxLQUFMLENBQVdWLFNBQVgsQ0FBcUI0SCxJQUFyQixDQUEwQkMsT0FBMUIsSUFBcUMsS0FBS25ILEtBQUwsQ0FBV1YsU0FBWCxDQUFxQjRILElBQXJCLENBQTBCRSxlQUFoRSxDQTdCTjs7QUFBQSw4Q0ErQlAsTUFBTTtBQUN2QixVQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxVQUFJUix3RkFBQSxFQUFKLEVBQXVDO0FBQUE7O0FBQ3JDUSxRQUFBQSxNQUFNLEdBQUcsQ0FBQywyQkFBQyxLQUFLckgsS0FBTCxDQUFXVixTQUFYLENBQXFCNEgsSUFBckIsQ0FBMEJLLHNCQUEzQixrREFBQyxzQkFBa0RqSSxTQUFsRCxDQUE0RCtILE1BQTdELENBQVY7QUFDRDs7QUFDRCxhQUFPQSxNQUFNLElBQUksS0FBS0csZ0JBQUwsRUFBakI7QUFDRCxLQXRDeUI7O0FBQUEsK0NBd0NMQyxXQUFELElBQXlCO0FBQzNDLFVBQUlOLE9BQU8sR0FBRyxJQUFkOztBQUVBLFVBQUlOLHdGQUFBLEVBQUosRUFBdUM7QUFDckMsWUFBSVksV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQUE7O0FBQ3JCTixVQUFBQSxPQUFPLEdBQUcsQ0FBQyw0QkFBQyxLQUFLbkgsS0FBTCxDQUFXVixTQUFYLENBQXFCNEgsSUFBckIsQ0FBMEJLLHNCQUEzQixtREFBQyx1QkFBa0RqSSxTQUFsRCxDQUE0RDZILE9BQTdELENBQVg7QUFDRCxTQUZELE1BRU87QUFBQTs7QUFDTEEsVUFBQUEsT0FBTyxHQUFHLENBQUMsNEJBQUMsS0FBS25ILEtBQUwsQ0FBV1YsU0FBWCxDQUFxQjRILElBQXJCLENBQTBCSyxzQkFBM0IsbURBQUMsdUJBQWtERyxZQUFsRCxDQUErRFAsT0FBaEUsQ0FBWDtBQUNEO0FBQ0Y7O0FBQ0QsYUFBT0EsT0FBTyxJQUFJLEtBQUtLLGdCQUFMLEVBQWxCO0FBQ0QsS0FuRHlCOztBQUFBLGlEQXFESEMsV0FBRCxJQUF5QjtBQUM3QyxVQUFJRSxTQUFTLEdBQUcsSUFBaEI7O0FBRUEsVUFBSWQsd0ZBQUEsRUFBSixFQUF1QztBQUNyQyxZQUFJWSxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFBQTs7QUFDckJFLFVBQUFBLFNBQVMsR0FBRyxDQUFDLDRCQUFDLEtBQUszSCxLQUFMLENBQVdWLFNBQVgsQ0FBcUI0SCxJQUFyQixDQUEwQkssc0JBQTNCLG1EQUFDLHVCQUFrRGpJLFNBQWxELENBQTREcUksU0FBN0QsQ0FBYjtBQUNELFNBRkQsTUFFTztBQUFBOztBQUNMQSxVQUFBQSxTQUFTLEdBQUcsQ0FBQyw0QkFBQyxLQUFLM0gsS0FBTCxDQUFXVixTQUFYLENBQXFCNEgsSUFBckIsQ0FBMEJLLHNCQUEzQixtREFBQyx1QkFBa0RHLFlBQWxELENBQStEQyxTQUFoRSxDQUFiO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPQSxTQUFTLElBQUksS0FBS0gsZ0JBQUwsRUFBcEI7QUFDRCxLQWhFeUI7O0FBQUEscUNBbUVoQixNQUFPLEtBQUt4SCxLQUFMLENBQVc0QyxTQUFYLEdBQXVCeUMsa0VBQXZCLEdBQWlELEtBQUtyRixLQUFMLENBQVdWLFNBQVgsQ0FBcUJ1SSxZQW5FN0Q7O0FBQUEsbURBcUVEekYsS0FBRCxJQUFnQjtBQUN0QyxXQUFLcEMsS0FBTCxDQUFXK0MscUJBQVgsQ0FBaUNYLEtBQWpDO0FBRUEsV0FBS25CLFFBQUwsQ0FBYztBQUNaNkcsUUFBQUEsT0FBTyxvQkFDRixLQUFLekksS0FBTCxDQUFXeUksT0FEVDtBQUVMNUYsVUFBQUEsYUFBYSxFQUFFRTtBQUZWO0FBREssT0FBZDtBQU1ELEtBOUV5Qjs7QUFBQSxpREEyRkosQ0FBQzJGLEtBQUQsRUFBZ0JDLEtBQWhCLEtBQWtDO0FBQ3RELFdBQUtDLG1CQUFMLENBQXlCNUIsZ0lBQThCLENBQUMwQixLQUFELEVBQVFDLEtBQVIsRUFBZSxLQUFLaEksS0FBTCxDQUFXTCxLQUFYLENBQWlCdUksV0FBaEMsQ0FBdkQ7QUFDRCxLQTdGeUI7O0FBQUEsc0RBK0ZDLENBQUNILEtBQUQsRUFBZ0JJLElBQWhCLEtBQXFEO0FBQzlFLFdBQUtGLG1CQUFMLENBQ0UzQiw4RkFBNkIsQ0FBQ3lCLEtBQUQsRUFBUUksSUFBUixFQUFjLEtBQUtuSSxLQUFMLENBQVdMLEtBQVgsQ0FBaUJ1SSxXQUEvQixFQUE0QyxLQUFLN0ksS0FBTCxDQUFXK0ksSUFBWCxDQUFnQkMsTUFBNUQsQ0FEL0I7QUFHRCxLQW5HeUI7O0FBQUEsZ0RBcUdKQyxPQUFELElBQXFCO0FBQ3hDLFlBQU1DLGFBQStCLEdBQUcsS0FBS3ZJLEtBQUwsQ0FBV0wsS0FBWCxDQUFpQjZJLE9BQWpCLENBQXlCQyxNQUFqRSxDQUR3QyxDQUd4Qzs7QUFDQSxVQUFJLENBQUNGLGFBQUwsRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxVQUFJRyxRQUFRLEdBQUdILGFBQWEsQ0FBQ0csUUFBN0I7QUFDQSxVQUFJQyxNQUFNLEdBQUdKLGFBQWEsQ0FBQ0ksTUFBM0I7O0FBQ0EsVUFBSUwsT0FBTyxLQUFLSyxNQUFoQixFQUF3QjtBQUN0QkQsUUFBQUEsUUFBUSxHQUFHRSxTQUFYO0FBQ0QsT0FadUMsQ0FjeEM7OztBQUNBLFVBQUlGLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUN0QkMsUUFBQUEsTUFBTSxHQUFHQyxTQUFUO0FBQ0FGLFFBQUFBLFFBQVEsR0FBR0UsU0FBWDtBQUNELE9BSEQsTUFHTztBQUNMRixRQUFBQSxRQUFRLEdBQUcsQ0FBQ0EsUUFBWjtBQUNBQyxRQUFBQSxNQUFNLEdBQUdMLE9BQVQ7QUFDRDs7QUFFRCxXQUFLTyxlQUFMLG1CQUNLLEtBQUs3SSxLQUFMLENBQVdMLEtBQVgsQ0FBaUI2SSxPQUR0QjtBQUVFQyxRQUFBQSxNQUFNLG9CQUFPRixhQUFQO0FBQXNCSSxVQUFBQSxNQUF0QjtBQUE4QkQsVUFBQUE7QUFBOUI7QUFGUjtBQUlELEtBaEl5Qjs7QUFBQSx1Q0EyUWQsTUFBTTtBQUNoQixZQUFNO0FBQUUvSSxRQUFBQSxLQUFGO0FBQVMyQyxRQUFBQSxRQUFUO0FBQW1CbEIsUUFBQUE7QUFBbkIsVUFBNkIsS0FBS3BCLEtBQXhDOztBQUVBLFVBQUksQ0FBQ3NDLFFBQUwsRUFBZTtBQUNiLGFBQUtyQixRQUFMLENBQWM7QUFBRTZILFVBQUFBLGlCQUFpQixFQUFFO0FBQXJCLFNBQWQ7QUFDQTtBQUNEOztBQUVELFlBQU1DLFFBQVEsR0FBR2hELDJGQUF1QixDQUFDcEcsS0FBRCxFQUFRLEtBQUtxSixPQUFMLENBQWFDLFNBQWIsRUFBUixDQUF4QyxDQVJnQixDQVVoQjs7QUFDQSxVQUFJLEtBQUtDLG1CQUFULEVBQThCO0FBQzVCLFlBQUk5SCxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2I7QUFDRDs7QUFFRCxZQUFJLEtBQUsvQixLQUFMLENBQVd5SixpQkFBZixFQUFrQztBQUNoQyxlQUFLN0gsUUFBTCxDQUFjO0FBQUU2SCxZQUFBQSxpQkFBaUIsRUFBRTtBQUFyQixXQUFkO0FBQ0Q7O0FBQ0RuSixRQUFBQSxLQUFLLENBQUN3SixrQkFBTixDQUF5QixLQUFLbkosS0FBTCxDQUFXVixTQUFYLENBQXFCa0UsRUFBOUMsRUFBa0QsS0FBS3hELEtBQUwsQ0FBV1YsU0FBWCxDQUFxQjhKLFdBQXJCLEVBQWxELEVBQXNGTCxRQUF0RixFQUFnRzNILEtBQWhHO0FBQ0QsT0FURCxNQVNPO0FBQ0w7QUFDQSxhQUFLSCxRQUFMLENBQWM7QUFDWm1ILFVBQUFBLElBQUksb0JBQU8sS0FBSy9JLEtBQUwsQ0FBVytJLElBQWxCO0FBQXdCYSxZQUFBQSxTQUFTLEVBQUUsS0FBS0QsT0FBTCxDQUFhQyxTQUFiO0FBQW5DLFlBRFE7QUFFWkksVUFBQUEsYUFBYSxFQUFFLEtBQUtoSyxLQUFMLENBQVdnSyxhQUFYLEdBQTJCLENBRjlCO0FBR1pDLFVBQUFBLFFBQVEsRUFBRVY7QUFIRSxTQUFkO0FBS0Q7QUFDRixLQXZTeUI7O0FBQUEsc0NBeVNmLE1BQU07QUFDZixZQUFNVyxXQUFXLEdBQUc7QUFBRUYsUUFBQUEsYUFBYSxFQUFFLEtBQUtoSyxLQUFMLENBQVdnSyxhQUFYLEdBQTJCO0FBQTVDLE9BQXBCO0FBQ0EsV0FBS3BJLFFBQUwsQ0FBY3NJLFdBQWQ7QUFDRCxLQTVTeUI7O0FBQUEsNkNBOFNQZixPQUFELElBQWtCO0FBQ2xDLFdBQUt4SSxLQUFMLENBQVdMLEtBQVgsQ0FBaUI2SixhQUFqQixDQUErQmhCLE9BQS9CO0FBQ0QsS0FoVHlCOztBQUFBLGlEQWtUSHZDLE1BQUQsSUFBK0I7QUFDbkQsV0FBS2pHLEtBQUwsQ0FBV0wsS0FBWCxDQUFpQjhKLGlCQUFqQixDQUFtQ3hELE1BQW5DO0FBQ0QsS0FwVHlCOztBQUFBLDBDQXNUVnlELEtBQUQsSUFBa0I7QUFDL0IsWUFBTUMsWUFBWSxHQUFHRCxLQUFLLENBQUNFLE9BQU4sSUFBaUI5QyxvQkFBdEM7O0FBQ0EsVUFBSSxLQUFLekgsS0FBTCxDQUFXc0ssWUFBWCxLQUE0QkEsWUFBaEMsRUFBOEM7QUFDNUMsYUFBSzFJLFFBQUwsQ0FBYztBQUFFMEksVUFBQUE7QUFBRixTQUFkO0FBQ0Q7QUFDRixLQTNUeUI7O0FBQUEsaURBNlRKLE1BQU07QUFDMUIsV0FBSzFJLFFBQUwsQ0FBYztBQUFFMEksUUFBQUEsWUFBWSxFQUFFZjtBQUFoQixPQUFkO0FBQ0QsS0EvVHlCOztBQUFBLGdEQWlVTCxNQUFPaUIsS0FBUCxJQUF5QztBQUM1RCxZQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixLQUFlRixLQUFLLENBQUNHLEVBQXRDO0FBQ0EsWUFBTUMsSUFBSSxHQUFHO0FBQ1h4QyxRQUFBQSxXQUFXLEVBQUUsS0FBS3pILEtBQUwsQ0FBV1YsU0FBWCxDQUFxQmtFLEVBRHZCO0FBRVgzQyxRQUFBQSxPQUFPLEVBQUUsS0FBS2IsS0FBTCxDQUFXTCxLQUFYLENBQWlCNkQsRUFGZjtBQUdYc0csUUFBQUEsUUFIVztBQUlYSSxRQUFBQSxJQUFJLEVBQUVMLEtBQUssQ0FBQ0UsSUFKRDtBQUtYSSxRQUFBQSxPQUFPLEVBQUVMLFFBQVEsR0FBR0QsS0FBSyxDQUFDRyxFQUFULEdBQWMsQ0FMcEI7QUFNWEksUUFBQUEsSUFBSSxFQUFFUCxLQUFLLENBQUNPLElBTkQ7QUFPWEMsUUFBQUEsSUFBSSxFQUFFUixLQUFLLENBQUNTO0FBUEQsT0FBYjtBQVNBLFlBQU05RCxpRUFBYyxDQUFDeUQsSUFBRCxDQUFwQjtBQUNBdkQsTUFBQUEsZ0hBQXVCLEdBQUc2RCxHQUExQixDQUE4QjtBQUFFakwsUUFBQUEsU0FBUyxFQUFFLEtBQUtVLEtBQUwsQ0FBV1YsU0FBeEI7QUFBbUNrTCxRQUFBQSxLQUFLLEVBQUUsS0FBS3hCLE9BQUwsQ0FBYUMsU0FBYjtBQUExQyxPQUE5QjtBQUNBLFdBQUs1SixLQUFMLENBQVd5SSxPQUFYLENBQW1CMkMsUUFBbkIsQ0FBNEJDLE9BQTVCLENBQW9DLElBQUl2RixnRUFBSixDQUEwQjhFLElBQTFCLENBQXBDO0FBQ0QsS0EvVXlCOztBQUFBLGdEQWlWTCxNQUFPekcsRUFBUCxJQUFzQjtBQUN6QyxZQUFNK0MsbUVBQWdCLENBQUM7QUFBRS9DLFFBQUFBO0FBQUYsT0FBRCxDQUF0QjtBQUNBa0QsTUFBQUEsZ0hBQXVCLEdBQUc2RCxHQUExQixDQUE4QjtBQUFFakwsUUFBQUEsU0FBUyxFQUFFLEtBQUtVLEtBQUwsQ0FBV1YsU0FBeEI7QUFBbUNrTCxRQUFBQSxLQUFLLEVBQUUsS0FBS3hCLE9BQUwsQ0FBYUMsU0FBYjtBQUExQyxPQUE5QjtBQUNBLFdBQUs1SixLQUFMLENBQVd5SSxPQUFYLENBQW1CMkMsUUFBbkIsQ0FBNEJDLE9BQTVCLENBQW9DLElBQUl2RixnRUFBSixDQUEwQjtBQUFFM0IsUUFBQUE7QUFBRixPQUExQixDQUFwQztBQUNELEtBclZ5Qjs7QUFBQSxnREF1VkwsTUFBT3FHLEtBQVAsSUFBeUM7QUFDNUQsWUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLElBQU4sS0FBZUYsS0FBSyxDQUFDRyxFQUF0QztBQUNBLFlBQU1DLElBQUksR0FBRztBQUNYekcsUUFBQUEsRUFBRSxFQUFFcUcsS0FBSyxDQUFDckcsRUFEQztBQUVYaUUsUUFBQUEsV0FBVyxFQUFFLEtBQUt6SCxLQUFMLENBQVdWLFNBQVgsQ0FBcUJrRSxFQUZ2QjtBQUdYM0MsUUFBQUEsT0FBTyxFQUFFLEtBQUtiLEtBQUwsQ0FBV0wsS0FBWCxDQUFpQjZELEVBSGY7QUFJWHNHLFFBQUFBLFFBSlc7QUFLWEksUUFBQUEsSUFBSSxFQUFFTCxLQUFLLENBQUNFLElBTEQ7QUFNWEksUUFBQUEsT0FBTyxFQUFFTCxRQUFRLEdBQUdELEtBQUssQ0FBQ0csRUFBVCxHQUFjLENBTnBCO0FBT1hJLFFBQUFBLElBQUksRUFBRVAsS0FBSyxDQUFDTyxJQVBEO0FBUVhDLFFBQUFBLElBQUksRUFBRVIsS0FBSyxDQUFDUztBQVJELE9BQWI7QUFVQSxZQUFNN0QsbUVBQWdCLENBQUN3RCxJQUFELENBQXRCO0FBRUF2RCxNQUFBQSxnSEFBdUIsR0FBRzZELEdBQTFCLENBQThCO0FBQUVqTCxRQUFBQSxTQUFTLEVBQUUsS0FBS1UsS0FBTCxDQUFXVixTQUF4QjtBQUFtQ2tMLFFBQUFBLEtBQUssRUFBRSxLQUFLeEIsT0FBTCxDQUFhQyxTQUFiO0FBQTFDLE9BQTlCO0FBQ0EsV0FBSzVKLEtBQUwsQ0FBV3lJLE9BQVgsQ0FBbUIyQyxRQUFuQixDQUE0QkMsT0FBNUIsQ0FBb0MsSUFBSXZGLGdFQUFKLENBQTBCOEUsSUFBMUIsQ0FBcEM7QUFDRCxLQXZXeUI7O0FBQUEsK0NBa1hMaEIsU0FBRCxJQUFrQztBQUNwRCxXQUFLRCxPQUFMLENBQWEyQixPQUFiLENBQXFCO0FBQ25CWixRQUFBQSxJQUFJLEVBQUV0RSxvREFBSyxDQUFDd0QsU0FBUyxDQUFDYyxJQUFYLENBRFE7QUFFbkJDLFFBQUFBLEVBQUUsRUFBRXZFLG9EQUFLLENBQUN3RCxTQUFTLENBQUNlLEVBQVg7QUFGVSxPQUFyQjtBQUlELEtBdlh5Qjs7QUFJeEIsVUFBTVMsUUFBUSxHQUFHekssS0FBSyxDQUFDVixTQUFOLENBQWdCc0wsTUFBaEIsQ0FBdUJDLFlBQXZCLENBQXFDLFNBQVE3SyxLQUFLLENBQUNMLEtBQU4sQ0FBWTZELEVBQUcsRUFBNUQsRUFBK0QsS0FBS3NILFdBQXBFLENBQWpCO0FBRUEsU0FBS3pMLEtBQUwsR0FBYTtBQUNYMEwsTUFBQUEsV0FBVyxFQUFFLElBREY7QUFFWDFCLE1BQUFBLGFBQWEsRUFBRSxDQUZKO0FBR1hQLE1BQUFBLGlCQUFpQixFQUFFLEtBSFI7QUFJWGhCLE1BQUFBLE9BQU8sRUFBRTtBQUNQMkMsUUFBQUEsUUFETztBQUVQTyxRQUFBQSxHQUFHLEVBQUUsS0FBS0Msa0JBQUwsRUFGRTtBQUdQQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsT0FISjtBQUlQQyxRQUFBQSxtQkFBbUIsRUFBRSxLQUFLQSxtQkFKbkI7QUFLUEMsUUFBQUEsd0JBQXdCLEVBQUUsS0FBS0Msd0JBTHhCO0FBTVBDLFFBQUFBLGtCQUFrQixFQUFFLEtBQUtBLGtCQU5sQjtBQU9QQyxRQUFBQSxrQkFBa0IsRUFBRSxLQUFLQSxrQkFQbEI7QUFRUEMsUUFBQUEsa0JBQWtCLEVBQUUsS0FBS0Esa0JBUmxCO0FBU1BDLFFBQUFBLGlCQUFpQixFQUFFLEtBQUtDLGdCQVRqQjtBQVVQNUksUUFBQUEscUJBQXFCLEVBQUUsS0FBS0EscUJBVnJCO0FBV1A2SSxRQUFBQSxrQkFBa0IsRUFBRSxLQUFLQSxrQkFYbEI7QUFZUEMsUUFBQUEsa0JBQWtCLEVBQUUsS0FBS0MsaUJBWmxCO0FBYVBDLFFBQUFBLG9CQUFvQixFQUFFLEtBQUtDO0FBYnBCLE9BSkU7QUFtQlg1RCxNQUFBQSxJQUFJLEVBQUUsS0FBSzZELHdCQUFMO0FBbkJLLEtBQWI7QUFxQkQ7O0FBcUREaEIsRUFBQUEsa0JBQWtCLEdBQUc7QUFDbkIsUUFBSSxLQUFLakwsS0FBTCxDQUFXNEMsU0FBZixFQUEwQjtBQUN4QixhQUFPd0MsOERBQVA7QUFDRDs7QUFDRCxRQUFJLEtBQUtwRixLQUFMLENBQVcyQyxTQUFmLEVBQTBCO0FBQ3hCLGFBQU95Qyw4REFBUDtBQUNEOztBQUVELFdBQU9BLDREQUFQO0FBQ0Q7O0FBeUNENkcsRUFBQUEsd0JBQXdCLEdBQWM7QUFDcEMsV0FBTztBQUNMNU0sTUFBQUEsS0FBSyxFQUFFa0csa0VBREY7QUFFTDhDLE1BQUFBLE1BQU0sRUFBRSxFQUZIO0FBR0xZLE1BQUFBLFNBQVMsRUFBRTNELGtFQUFtQjtBQUh6QixLQUFQO0FBS0Q7O0FBRUR6RixFQUFBQSxpQkFBaUIsR0FBRztBQUNsQixVQUFNO0FBQUVGLE1BQUFBLEtBQUY7QUFBU0wsTUFBQUE7QUFBVCxRQUF1QixLQUFLVSxLQUFsQyxDQURrQixDQUdsQjs7QUFDQSxTQUFLc00sSUFBTCxDQUFVQyxHQUFWLENBQWM1TSxLQUFLLENBQUNpTCxNQUFOLENBQWE0QixTQUFiLENBQXVCdEgsMERBQXZCLEVBQXFDLEtBQUt1SCxTQUExQyxDQUFkO0FBQ0EsU0FBS0gsSUFBTCxDQUFVQyxHQUFWLENBQWM1TSxLQUFLLENBQUNpTCxNQUFOLENBQWE0QixTQUFiLENBQXVCcEcsMERBQXZCLEVBQW9DLEtBQUtzRyxRQUF6QyxDQUFkO0FBRUFwTixJQUFBQSxTQUFTLENBQUNxTixnQkFBVixDQUEyQixLQUFLM00sS0FBTCxDQUFXTCxLQUF0QyxFQVBrQixDQVNsQjs7QUFDQSxRQUFJLEtBQUtpTixnQkFBVCxFQUEyQjtBQUN6QixXQUFLM0wsUUFBTCxDQUFjO0FBQ1ptSCxRQUFBQSxJQUFJLEVBQUVqQywwRUFBZ0IsQ0FBQ3hHLEtBQUQsRUFBUUwsU0FBUixDQURWO0FBRVp5TCxRQUFBQSxXQUFXLEVBQUU7QUFGRCxPQUFkO0FBSUE7QUFDRDs7QUFFRCxRQUFJLENBQUMsS0FBSzdCLG1CQUFWLEVBQStCO0FBQzdCLFdBQUtqSSxRQUFMLENBQWM7QUFBRThKLFFBQUFBLFdBQVcsRUFBRTtBQUFmLE9BQWQ7QUFDRDs7QUFFRCxTQUFLdUIsSUFBTCxDQUFVQyxHQUFWLENBQ0U1TSxLQUFLLENBQ0ZrTixjQURILEdBRUdDLE9BRkgsQ0FFVztBQUFFQyxNQUFBQSxjQUFjLEVBQUUsSUFBbEI7QUFBd0JDLE1BQUFBLGVBQWUsRUFBRTtBQUF6QyxLQUZYLEVBR0dSLFNBSEgsQ0FHYTtBQUNUUyxNQUFBQSxJQUFJLEVBQUc3RSxJQUFELElBQVUsS0FBSzhFLFlBQUwsQ0FBa0I5RSxJQUFsQjtBQURQLEtBSGIsQ0FERixFQXRCa0IsQ0ErQmxCOztBQUNBekIsSUFBQUEseURBQUEsQ0FBaUIsSUFBakI7QUFDRDs7QUFFRGxFLEVBQUFBLG9CQUFvQixHQUFHO0FBQ3JCLFNBQUs2SixJQUFMLENBQVVjLFdBQVY7QUFDQXpHLElBQUFBLHlEQUFBLENBQWlCLElBQWpCO0FBQ0Q7O0FBRUQyRyxFQUFBQSxlQUFlLENBQUNoRSxRQUFELEVBQXNCO0FBQ25DLFVBQU07QUFBRWxCLE1BQUFBO0FBQUYsUUFBVyxLQUFLL0ksS0FBdEI7O0FBQ0EsUUFBSStJLElBQUksQ0FBQ2EsU0FBVCxFQUFvQjtBQUNsQixZQUFNc0UsS0FBSyxHQUFHakUsUUFBUSxDQUFDVSxFQUFULENBQVl3RCxPQUFaLEtBQXdCcEYsSUFBSSxDQUFDYSxTQUFMLENBQWVlLEVBQWYsQ0FBa0J3RCxPQUFsQixFQUF0Qzs7QUFDQSxVQUFJRCxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNmO0FBQ0FFLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDLEtBQUsxTixLQUFMLENBQVdMLEtBQVgsQ0FBaUJnTyxLQUFqRCxFQUF3REosS0FBeEQ7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0QsU0FBS3RNLFFBQUwsQ0FBYztBQUFFcUksTUFBQUE7QUFBRixLQUFkO0FBQ0Q7O0FBRUR4SSxFQUFBQSxrQkFBa0IsQ0FBQ0MsU0FBRCxFQUFtQjtBQUNuQyxVQUFNO0FBQUV1QixNQUFBQSxRQUFGO0FBQVlsQixNQUFBQTtBQUFaLFFBQXNCLEtBQUtwQixLQUFqQztBQUNBLFVBQU07QUFBRThILE1BQUFBO0FBQUYsUUFBYyxLQUFLekksS0FBekI7QUFFQSxVQUFNMkwsR0FBRyxHQUFHLEtBQUtDLGtCQUFMLEVBQVo7O0FBRUEsUUFBSW5ELE9BQU8sQ0FBQ2tELEdBQVIsS0FBZ0JBLEdBQXBCLEVBQXlCO0FBQ3ZCLFdBQUsvSixRQUFMLENBQWM7QUFDWjZHLFFBQUFBLE9BQU8sb0JBQ0ZBLE9BREU7QUFFTGtELFVBQUFBO0FBRks7QUFESyxPQUFkO0FBTUQsS0Fia0MsQ0FlbkM7OztBQUNBLFFBQUkxSSxRQUFRLEtBQUt2QixTQUFTLENBQUN1QixRQUEzQixFQUFxQztBQUNuQyxVQUFJQSxRQUFKLEVBQWM7QUFDWjtBQUNBLFlBQUksS0FBS2pELEtBQUwsQ0FBV3lKLGlCQUFmLEVBQWtDO0FBQ2hDLGVBQUsyRCxTQUFMO0FBQ0Q7QUFDRjtBQUNGLEtBdkJrQyxDQXlCbkM7OztBQUNBLFFBQUlyTCxLQUFLLEtBQUtMLFNBQVMsQ0FBQ0ssS0FBeEIsRUFBK0I7QUFDN0J1RixNQUFBQSxpRUFBQSxDQUF5QixJQUF6QjtBQUNEO0FBQ0YsR0FqTzBELENBbU8zRDtBQUNBO0FBQ0E7OztBQUNBdUcsRUFBQUEsWUFBWSxDQUFDOUUsSUFBRCxFQUFrQjtBQUM1QixVQUFNO0FBQUU5SSxNQUFBQSxTQUFGO0FBQWFLLE1BQUFBLEtBQWI7QUFBb0JzQyxNQUFBQTtBQUFwQixRQUErQixLQUFLakMsS0FBMUMsQ0FENEIsQ0FHNUI7O0FBQ0EsUUFBSWlDLE1BQU0sQ0FBQ2lGLElBQVAsQ0FBWTJHLGFBQWhCLEVBQStCO0FBQzdCLFdBQUs1TSxRQUFMLENBQWM7QUFBRW1ILFFBQUFBLElBQUksRUFBRSxLQUFLNkQsd0JBQUw7QUFBUixPQUFkO0FBQ0E7QUFDRDs7QUFFRCxRQUFJO0FBQUVsQixNQUFBQTtBQUFGLFFBQWtCLEtBQUsxTCxLQUEzQjtBQUNBLFFBQUlzSyxZQUFKOztBQUVBLFlBQVF2QixJQUFJLENBQUMvSSxLQUFiO0FBQ0UsV0FBS2tHLCtEQUFMO0FBQ0U7QUFDQTtBQUNBLFlBQUksS0FBS2xHLEtBQUwsQ0FBVytJLElBQVgsQ0FBZ0IvSSxLQUFoQixLQUEwQmtHLCtEQUE5QixFQUFvRDtBQUNsRDtBQUNEOztBQUNEOztBQUNGLFdBQUtBLDZEQUFMO0FBQ0UsY0FBTTtBQUFFbUUsVUFBQUE7QUFBRixZQUFZdEIsSUFBbEI7O0FBQ0EsWUFBSXNCLEtBQUosRUFBVztBQUNULGNBQUlDLFlBQVksS0FBS0QsS0FBSyxDQUFDRSxPQUEzQixFQUFvQztBQUNsQ0QsWUFBQUEsWUFBWSxHQUFHRCxLQUFLLENBQUNFLE9BQXJCO0FBQ0Q7QUFDRjs7QUFDRDs7QUFDRixXQUFLckUsNERBQUw7QUFDRTtBQUNBLFlBQUlqRyxTQUFTLENBQUMyTyxRQUFkLEVBQXdCO0FBQ3RCdE8sVUFBQUEsS0FBSyxDQUFDdU8sWUFBTixHQUFxQjlGLElBQUksQ0FBQ0MsTUFBTCxDQUFZOEYsR0FBWixDQUFpQkMsS0FBRCxJQUFXNUksNkRBQWMsQ0FBQzRJLEtBQUQsQ0FBekMsQ0FBckI7QUFDRDs7QUFDRCxZQUFJckQsV0FBSixFQUFpQjtBQUNmQSxVQUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNEOztBQUNEO0FBeEJKOztBQTJCQSxTQUFLOUosUUFBTCxDQUFjO0FBQUU4SixNQUFBQSxXQUFGO0FBQWVwQixNQUFBQSxZQUFmO0FBQTZCdkIsTUFBQUEsSUFBN0I7QUFBbUNrQixNQUFBQSxRQUFRLEVBQUVWO0FBQTdDLEtBQWQ7QUFDRDs7QUFnR21CLE1BQWhCZ0UsZ0JBQWdCLEdBQUc7QUFDckIsVUFBTTtBQUFFak4sTUFBQUE7QUFBRixRQUFZLEtBQUtLLEtBQXZCO0FBQ0EsV0FBT0wsS0FBSyxDQUFDdU8sWUFBTixJQUFzQnZPLEtBQUssQ0FBQ3VPLFlBQU4sQ0FBbUIxSixNQUFoRDtBQUNEOztBQUVzQixNQUFuQjBFLG1CQUFtQixHQUFHO0FBQ3hCLFdBQU8sRUFBRSxLQUFLbEosS0FBTCxDQUFXaUMsTUFBWCxDQUFrQmlGLElBQWxCLENBQXVCMkcsYUFBdkIsSUFBd0MsS0FBS2pCLGdCQUEvQyxDQUFQO0FBQ0Q7O0FBU0R5QixFQUFBQSw4QkFBOEIsQ0FBQ0MsWUFBRCxFQUE2QkMsVUFBN0IsRUFBMEQ7QUFDdEYsV0FBT0QsWUFBWSxLQUFLL0ksNERBQWpCLElBQXNDZ0osVUFBVSxDQUFDVixhQUF4RDtBQUNEOztBQUVEVyxFQUFBQSxlQUFlLENBQUNGLFlBQUQsRUFBNkI7QUFDMUMsVUFBTTtBQUFFdkQsTUFBQUE7QUFBRixRQUFrQixLQUFLMUwsS0FBN0I7QUFDQSxXQUNFLEtBQUs2SixtQkFBTCxJQUNBNkIsV0FEQSxLQUVDdUQsWUFBWSxLQUFLL0ksK0RBQWpCLElBQXlDK0ksWUFBWSxLQUFLL0ksa0VBRjNELENBREY7QUFLRDs7QUFFRGtKLEVBQUFBLFdBQVcsQ0FBQ3JOLEtBQUQsRUFBZ0JDLE1BQWhCLEVBQWdDO0FBQUE7O0FBQ3pDLFVBQU07QUFBRTFCLE1BQUFBLEtBQUY7QUFBU3NDLE1BQUFBLE1BQVQ7QUFBaUIzQyxNQUFBQTtBQUFqQixRQUErQixLQUFLVSxLQUExQztBQUNBLFVBQU07QUFBRXFKLE1BQUFBLGFBQUY7QUFBaUJqQixNQUFBQTtBQUFqQixRQUEwQixLQUFLL0ksS0FBckM7QUFDQSxVQUFNO0FBQUVxUCxNQUFBQTtBQUFGLFFBQVl6SSx3REFBbEI7QUFDQSxVQUFNO0FBQUU1RyxNQUFBQSxLQUFLLEVBQUVpUDtBQUFULFFBQTBCbEcsSUFBaEMsQ0FKeUMsQ0FNekM7O0FBQ0EsUUFBSSxLQUFLb0csZUFBTCxDQUFxQkYsWUFBckIsQ0FBSixFQUF3QztBQUN0QyxhQUFPLElBQVA7QUFDRCxLQVR3QyxDQVd6QztBQUNBOzs7QUFDQSxRQUFJLEtBQUtELDhCQUFMLENBQW9DQyxZQUFwQyxFQUFrRHJNLE1BQU0sQ0FBQ2lGLElBQXpELENBQUosRUFBb0U7QUFDbEVsQixNQUFBQSwwRUFBQTtBQUNEOztBQUVELFVBQU00SSxjQUFjLEdBQUczTSxNQUFNLENBQUN0QyxLQUE5QjtBQUNBLFVBQU1zSixTQUFTLG1DQUFHLEtBQUs1SixLQUFMLENBQVdpSyxRQUFkLHVFQUEwQmxCLElBQUksQ0FBQ2EsU0FBL0IsdUNBQTRDLEtBQUtELE9BQUwsQ0FBYUMsU0FBYixFQUEzRDtBQUNBLFVBQU00RixZQUFZLEdBQUcsS0FBS0MsZ0JBQUwsS0FBMEIsQ0FBMUIsR0FBOEJKLEtBQUssQ0FBQ0ssaUJBQXpEO0FBQ0EsVUFBTUMsYUFBYSxHQUFHL00sTUFBTSxDQUFDZ04sU0FBUCxHQUFtQixDQUFuQixHQUF1QlAsS0FBSyxDQUFDUSxZQUFuRDtBQUNBLFVBQU1DLFVBQVUsR0FBRy9OLEtBQUssR0FBRzROLGFBQWEsR0FBRyxDQUF4QixHQUE0QjlJLDZEQUEvQztBQUNBLFVBQU1rSixnQkFBZ0IsR0FBRy9OLE1BQU0sR0FBR3dOLFlBQVQsR0FBd0JHLGFBQWEsR0FBRyxDQUF4QyxHQUE0QzlJLDZEQUFyRTtBQUNBLFVBQU1tSixzQkFBc0IsR0FBR3RLLGlEQUFVLENBQUM7QUFDeEMsdUJBQWlCLElBRHVCO0FBRXhDLG1DQUE2QjlDLE1BQU0sQ0FBQ2dOO0FBRkksS0FBRCxDQUF6QztBQUlBLFVBQU1LLFlBQVksR0FBRzNQLEtBQUssQ0FBQzRQLFVBQU4sRUFBckIsQ0EzQnlDLENBNkJ6QztBQUNBOztBQUNBLFNBQUt6RSxXQUFMLENBQWlCOUQsU0FBakIsR0FBNkIxSCxTQUFTLENBQUN1SSxZQUFWLEtBQTJCLENBQXhEO0FBRUEsd0JBQ0U7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUV3SCxzQkFBaEI7QUFBQSwrQkFDRSx3REFBQyw2REFBRDtBQUFzQixlQUFLLEVBQUUsS0FBS2hRLEtBQUwsQ0FBV3lJLE9BQXhDO0FBQUEsaUNBQ0Usd0RBQUMsY0FBRDtBQUNFLGNBQUUsRUFBRW5JLEtBQUssQ0FBQzZELEVBRFo7QUFFRSxnQkFBSSxFQUFFNEUsSUFGUjtBQUdFLGlCQUFLLEVBQUV6SSxLQUFLLENBQUNnTyxLQUhmO0FBSUUscUJBQVMsRUFBRTFFLFNBSmI7QUFLRSxvQkFBUSxFQUFFLEtBQUtqSixLQUFMLENBQVdWLFNBQVgsQ0FBcUI4SixXQUFyQixFQUxaO0FBTUUsbUJBQU8sRUFBRWtHLFlBTlg7QUFPRSx1QkFBVyxFQUFFM1AsS0FBSyxDQUFDdUksV0FQckI7QUFRRSx1QkFBVyxFQUFFdkksS0FBSyxDQUFDNlAsV0FSckI7QUFTRSxpQkFBSyxFQUFFTCxVQVRUO0FBVUUsa0JBQU0sRUFBRUMsZ0JBVlY7QUFXRSx5QkFBYSxFQUFFL0YsYUFYakI7QUFZRSw0QkFBZ0IsRUFBRTFKLEtBQUssQ0FBQzhQLGdCQVoxQjtBQWFFLDJCQUFlLEVBQUUsS0FBSzVHLGVBYnhCO0FBY0UsK0JBQW1CLEVBQUUsS0FBS1osbUJBZDVCO0FBZUUsNkJBQWlCLEVBQUUsS0FBS3lILGlCQWYxQjtBQWdCRSxvQkFBUSxFQUFFcFEsU0FBUyxDQUFDc0w7QUFoQnRCO0FBREY7QUFERjtBQURGLE1BREY7QUEwQkQ7O0FBRURrRSxFQUFBQSxnQkFBZ0IsR0FBRztBQUNqQixVQUFNO0FBQUVuUCxNQUFBQTtBQUFGLFFBQVksS0FBS0ssS0FBdkI7QUFDQSxVQUFNO0FBQUVvSSxNQUFBQTtBQUFGLFFBQVcsS0FBSy9JLEtBQXRCLENBRmlCLENBSWpCOztBQUNBLFFBQUkrSSxJQUFJLENBQUN1SCxPQUFMLElBQWdCdkgsSUFBSSxDQUFDdUgsT0FBTCxDQUFhQyxRQUFqQyxFQUEyQztBQUN6QyxhQUFPLEtBQVA7QUFDRDs7QUFFRCxXQUFPLENBQUNqUSxLQUFLLENBQUNrUSxRQUFOLEVBQVI7QUFDRDs7QUFFRDNPLEVBQUFBLE1BQU0sR0FBRztBQUFBOztBQUNQLFVBQU07QUFBRTVCLE1BQUFBLFNBQUY7QUFBYUssTUFBQUEsS0FBYjtBQUFvQmdELE1BQUFBLFNBQXBCO0FBQStCQyxNQUFBQSxTQUEvQjtBQUEwQ3hCLE1BQUFBLEtBQTFDO0FBQWlEQyxNQUFBQSxNQUFqRDtBQUF5RFksTUFBQUE7QUFBekQsUUFBb0UsS0FBS2pDLEtBQS9FO0FBQ0EsVUFBTTtBQUFFMkosTUFBQUEsWUFBRjtBQUFnQnZCLE1BQUFBO0FBQWhCLFFBQXlCLEtBQUsvSSxLQUFwQztBQUNBLFVBQU07QUFBRW1RLE1BQUFBO0FBQUYsUUFBa0I3UCxLQUF4QjtBQUVBLFVBQU1tUSxVQUFVLHVCQUFHMUgsSUFBSSxDQUFDMEgsVUFBUixxREFBRyxpQkFBaUJ6USxLQUFwQztBQUVBLFVBQU0wUSxtQkFBbUIsR0FBR2hMLGlEQUFVLENBQUM7QUFDckMseUJBQW1CLElBRGtCO0FBRXJDLG1DQUE2QjZCLDJEQUFXLENBQUMzQix5RUFBQSxHQUE4QmdMLFFBQS9CLENBRkg7QUFHckMsc0NBQWdDVCxXQUhLO0FBSXJDLG1DQUE2QixLQUFLVixnQkFBTCxFQUpRO0FBS3JDLE9BQUUsc0JBQXFCZ0IsVUFBVyxFQUFsQyxHQUFzQ0EsVUFBVSxLQUFLbEg7QUFMaEIsS0FBRCxDQUF0QztBQVFBLHdCQUNFO0FBQ0UsZUFBUyxFQUFFbUgsbUJBRGI7QUFFRSxvQkFBWW5LLHNHQUFBLENBQW1EakcsS0FBSyxDQUFDZ08sS0FBekQsQ0FGZDtBQUFBLDhCQUlFLHdEQUFDLGlFQUFEO0FBQ0UsYUFBSyxFQUFFaE8sS0FEVDtBQUVFLGlCQUFTLEVBQUVMLFNBRmI7QUFHRSxhQUFLLEVBQUVLLEtBQUssQ0FBQ2dPLEtBSGY7QUFJRSxtQkFBVyxFQUFFaE8sS0FBSyxDQUFDMkssV0FKckI7QUFLRSxhQUFLLEVBQUUzSyxLQUFLLENBQUMyUSxLQUxmO0FBTUUsYUFBSyxFQUFFM0csWUFOVDtBQU9FLGlCQUFTLEVBQUUvRyxTQVBiO0FBUUUsaUJBQVMsRUFBRUQsU0FSYjtBQVNFLGtCQUFVLEVBQUVtTixVQVRkO0FBVUUsWUFBSSxFQUFFMUg7QUFWUixRQUpGLGVBZ0JFLHdEQUFDLHNEQUFEO0FBQ0Usb0JBQVksRUFBRSxDQUFDQSxJQUFELEVBQU9uRyxNQUFQLEVBQWV0QyxLQUFLLENBQUM0UCxVQUFOLEVBQWYsQ0FEaEI7QUFFRSxlQUFPLEVBQUUsS0FBS2dCLFlBRmhCO0FBR0UsaUJBQVMsRUFBRSxLQUFLQyxtQkFIbEI7QUFBQSxrQkFLRyxDQUFDO0FBQUU5RyxVQUFBQTtBQUFGLFNBQUQsS0FBZTtBQUNkLGNBQUlBLEtBQUosRUFBVztBQUNULG1CQUFPLElBQVA7QUFDRDs7QUFDRCxpQkFBTyxLQUFLK0UsV0FBTCxDQUFpQnJOLEtBQWpCLEVBQXdCQyxNQUF4QixDQUFQO0FBQ0Q7QUFWSCxRQWhCRjtBQUFBLE1BREY7QUErQkQ7O0FBbGdCMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBcUNPLE1BQU11UCw2QkFBTixTQUE0Q3JQLGdEQUE1QyxDQUF3RTtBQU03RXdGLEVBQUFBLFdBQVcsQ0FBQy9HLEtBQUQsRUFBZTtBQUN4QixVQUFNQSxLQUFOOztBQUR3QixxQ0FMSSxJQUtKOztBQUFBLHFDQUpQOEYsNkRBQVUsRUFJSDs7QUFBQTs7QUFBQSxrQ0FGbkIsSUFBSWQsK0NBQUosRUFFbUI7O0FBRXhCLFNBQUszRixLQUFMLEdBQWE7QUFDWCtJLE1BQUFBLElBQUksRUFBRTtBQUNKL0ksUUFBQUEsS0FBSyxFQUFFa0csa0VBREg7QUFFSjhDLFFBQUFBLE1BQU0sRUFBRSxFQUZKO0FBR0pZLFFBQUFBLFNBQVMsRUFBRTNELGtFQUFtQjtBQUgxQjtBQURLLEtBQWI7QUFPRDs7QUFFRHpGLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCLFVBQU07QUFBRUYsTUFBQUE7QUFBRixRQUFZLEtBQUtLLEtBQXZCO0FBQ0EsU0FBSzZRLGdCQUFMLEdBRmtCLENBSWxCOztBQUNBLFVBQU1DLFdBQVcsR0FBR25SLEtBQUssQ0FBQ2tOLGNBQU4sRUFBcEIsQ0FMa0IsQ0FPbEI7O0FBQ0EsU0FBS1AsSUFBTCxDQUFVQyxHQUFWLENBQ0V1RSxXQUFXLENBQUNoRSxPQUFaLENBQW9CO0FBQUVDLE1BQUFBLGNBQWMsRUFBRSxLQUFsQjtBQUF5QkMsTUFBQUEsZUFBZSxFQUFFO0FBQTFDLEtBQXBCLEVBQXVFUixTQUF2RSxDQUFpRjtBQUMvRVMsTUFBQUEsSUFBSSxFQUFHN0UsSUFBRCxJQUFxQixLQUFLMkksaUJBQUwsQ0FBdUIzSSxJQUF2QjtBQURvRCxLQUFqRixDQURGO0FBS0Q7O0FBRUQySSxFQUFBQSxpQkFBaUIsQ0FBQzNJLElBQUQsRUFBa0I7QUFDakMsUUFBSXVCLFlBQUo7O0FBRUEsUUFBSXZCLElBQUksQ0FBQy9JLEtBQUwsS0FBZWtHLDZEQUFuQixFQUF1QztBQUNyQyxZQUFNO0FBQUVtRSxRQUFBQTtBQUFGLFVBQVl0QixJQUFsQjs7QUFDQSxVQUFJc0IsS0FBSixFQUFXO0FBQ1QsWUFBSUMsWUFBWSxLQUFLRCxLQUFLLENBQUNFLE9BQTNCLEVBQW9DO0FBQ2xDRCxVQUFBQSxZQUFZLEdBQUdELEtBQUssQ0FBQ0UsT0FBckI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBSzNJLFFBQUwsQ0FBYztBQUFFbUgsTUFBQUEsSUFBRjtBQUFRdUIsTUFBQUE7QUFBUixLQUFkO0FBQ0Q7O0FBRURsSCxFQUFBQSxvQkFBb0IsR0FBRztBQUNyQixTQUFLNkosSUFBTCxDQUFVYyxXQUFWO0FBQ0Q7O0FBRUR0TSxFQUFBQSxrQkFBa0IsQ0FBQ0MsU0FBRCxFQUFtQmlRLFNBQW5CLEVBQXFDO0FBQ3JELFVBQU07QUFBRS9PLE1BQUFBLE1BQUY7QUFBVVosTUFBQUEsTUFBVjtBQUFrQkQsTUFBQUEsS0FBbEI7QUFBeUJ6QixNQUFBQTtBQUF6QixRQUFtQyxLQUFLSyxLQUE5Qzs7QUFFQSxRQUFJZSxTQUFTLENBQUNrQixNQUFWLEtBQXFCQSxNQUF6QixFQUFpQztBQUMvQixXQUFLNE8sZ0JBQUw7QUFDRDs7QUFFRCxRQUFJOVAsU0FBUyxDQUFDSyxLQUFWLEtBQW9CQSxLQUFwQixJQUE2QkwsU0FBUyxDQUFDTSxNQUFWLEtBQXFCQSxNQUF0RCxFQUE4RDtBQUM1RCxVQUFJLEtBQUs0UCxVQUFULEVBQXFCO0FBQ25CLGFBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCN1AsTUFBckIsR0FBOEIsS0FBSzhQLG1CQUFMLEVBQTlCO0FBQ0EsYUFBS0YsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUI5UCxLQUFyQixHQUE2QixLQUFLZ1Esa0JBQUwsRUFBN0I7QUFDQXpSLFFBQUFBLEtBQUssQ0FBQ3VCLE1BQU47QUFDRDtBQUNGO0FBQ0Y7O0FBRURpUSxFQUFBQSxtQkFBbUIsR0FBRztBQUNwQixVQUFNO0FBQUVsUCxNQUFBQSxNQUFGO0FBQVVaLE1BQUFBO0FBQVYsUUFBcUIsS0FBS3JCLEtBQWhDO0FBQ0EsVUFBTTtBQUFFME8sTUFBQUE7QUFBRixRQUFZekksdURBQWxCO0FBRUEsVUFBTTRJLFlBQVksR0FBRyxLQUFLQyxnQkFBTCxLQUEwQixDQUExQixHQUE4QkosS0FBSyxDQUFDSyxpQkFBekQ7QUFDQSxVQUFNQyxhQUFhLEdBQUcvTSxNQUFNLENBQUNnTixTQUFQLEdBQW1CLENBQW5CLEdBQXVCUCxLQUFLLENBQUNRLFlBQW5EO0FBQ0EsV0FBTzdOLE1BQU0sR0FBR3dOLFlBQVQsR0FBd0JHLGFBQWEsR0FBRyxDQUF4QyxHQUE0QzlJLDZEQUFuRDtBQUNEOztBQUVEa0wsRUFBQUEsa0JBQWtCLEdBQUc7QUFDbkIsVUFBTTtBQUFFblAsTUFBQUEsTUFBRjtBQUFVYixNQUFBQTtBQUFWLFFBQW9CLEtBQUtwQixLQUEvQjtBQUNBLFVBQU07QUFBRTBPLE1BQUFBO0FBQUYsUUFBWXpJLHVEQUFsQjtBQUVBLFVBQU0rSSxhQUFhLEdBQUcvTSxNQUFNLENBQUNnTixTQUFQLEdBQW1CLENBQW5CLEdBQXVCUCxLQUFLLENBQUNRLFlBQW5EO0FBQ0EsV0FBTzlOLEtBQUssR0FBRzROLGFBQWEsR0FBRyxDQUF4QixHQUE0QjlJLDZEQUFuQztBQUNEOztBQUVEMkssRUFBQUEsZ0JBQWdCLEdBQUc7QUFDakIsVUFBTTtBQUFFbFIsTUFBQUEsS0FBRjtBQUFTTCxNQUFBQSxTQUFUO0FBQW9Cb1IsTUFBQUE7QUFBcEIsUUFBaUQsS0FBSzFRLEtBQTVELENBRGlCLENBR2pCOztBQUNBLFFBQUksQ0FBQyxLQUFLcVIsT0FBVixFQUFtQjtBQUNqQjtBQUNEOztBQUVELFVBQU1DLE1BQU0sR0FBR2Isa0VBQWdCLEVBQS9CO0FBQ0EsVUFBTWMsUUFBUSxHQUFHLGdGQUFqQjtBQUVBLFNBQUtOLFVBQUwsR0FBa0I7QUFDaEJ0UixNQUFBQSxLQUFLLEVBQUVBLEtBRFM7QUFFaEJMLE1BQUFBLFNBQVMsRUFBRUEsU0FGSztBQUdoQjRSLE1BQUFBLElBQUksRUFBRTtBQUFFOVAsUUFBQUEsS0FBSyxFQUFFLEtBQUtnUSxrQkFBTCxFQUFUO0FBQW9DL1AsUUFBQUEsTUFBTSxFQUFFLEtBQUs4UCxtQkFBTDtBQUE1QztBQUhVLEtBQWxCO0FBTUFULElBQUFBLHdCQUF3QixDQUFDO0FBQ3ZCcFAsTUFBQUEsR0FBRyxFQUFFM0IsS0FBSyxDQUFDMkIsR0FEWTtBQUV2QmtRLE1BQUFBLGdCQUFnQixFQUFFRixNQUFNLENBQUNHLElBQVAsQ0FBWSxLQUFLSixPQUFqQixFQUEwQixLQUFLSixVQUEvQixFQUEyQ00sUUFBM0M7QUFGSyxLQUFELENBQXhCO0FBSUQ7O0FBRUR6QyxFQUFBQSxnQkFBZ0IsR0FBRztBQUNqQixVQUFNO0FBQUVuUCxNQUFBQTtBQUFGLFFBQVksS0FBS0ssS0FBdkI7QUFDQSxVQUFNO0FBQUVvSSxNQUFBQTtBQUFGLFFBQVcsS0FBSy9JLEtBQXRCLENBRmlCLENBSWpCOztBQUNBLFFBQUkrSSxJQUFJLENBQUN1SCxPQUFMLElBQWdCdkgsSUFBSSxDQUFDdUgsT0FBTCxDQUFhQyxRQUFqQyxFQUEyQztBQUN6QyxhQUFPLEtBQVA7QUFDRDs7QUFFRCxXQUFPLENBQUNqUSxLQUFLLENBQUNrUSxRQUFOLEVBQVI7QUFDRDs7QUFFRDNPLEVBQUFBLE1BQU0sR0FBRztBQUFBOztBQUNQLFVBQU07QUFBRTVCLE1BQUFBLFNBQUY7QUFBYUssTUFBQUEsS0FBYjtBQUFvQmdELE1BQUFBLFNBQXBCO0FBQStCQyxNQUFBQSxTQUEvQjtBQUEwQ1gsTUFBQUE7QUFBMUMsUUFBcUQsS0FBS2pDLEtBQWhFO0FBQ0EsVUFBTTtBQUFFMkosTUFBQUEsWUFBRjtBQUFnQnZCLE1BQUFBO0FBQWhCLFFBQXlCLEtBQUsvSSxLQUFwQztBQUNBLFVBQU07QUFBRW1RLE1BQUFBO0FBQUYsUUFBa0I3UCxLQUF4QjtBQUVBLFVBQU1tUSxVQUFVLHVCQUFHMUgsSUFBSSxDQUFDMEgsVUFBUixxREFBRyxpQkFBaUJ6USxLQUFwQztBQUVBLFVBQU0wUSxtQkFBbUIsR0FBR2hMLGlEQUFVLENBQUM7QUFDckMseUJBQW1CLElBRGtCO0FBRXJDLG1DQUE2QjZCLDJEQUFXLENBQUMzQix5RUFBQSxHQUE4QmdMLFFBQS9CLENBRkg7QUFHckMsc0NBQWdDVCxXQUhLO0FBSXJDLG1DQUE2QixLQUFLVixnQkFBTCxFQUpRO0FBS3JDLHlCQUFtQm5QLEtBQUssQ0FBQytSLEtBQU4sS0FBZ0I5SSxTQUxFO0FBTXJDLE9BQUUsc0JBQXFCa0gsVUFBVyxFQUFsQyxHQUFzQ0EsVUFBVSxLQUFLbEg7QUFOaEIsS0FBRCxDQUF0QztBQVNBLFVBQU15RyxzQkFBc0IsR0FBR3RLLGlEQUFVLENBQUM7QUFDeEMsdUJBQWlCLElBRHVCO0FBRXhDLG1DQUE2QjlDLE1BQU0sQ0FBQ2dOO0FBRkksS0FBRCxDQUF6QztBQUtBLHdCQUNFO0FBQUssZUFBUyxFQUFFYyxtQkFBaEI7QUFBcUMsb0JBQVluSyxzR0FBQSxDQUFtRGpHLEtBQUssQ0FBQ2dPLEtBQXpELENBQWpEO0FBQUEsOEJBQ0Usd0RBQUMsaUVBQUQ7QUFDRSxhQUFLLEVBQUVoTyxLQURUO0FBRUUsaUJBQVMsRUFBRUwsU0FGYjtBQUdFLGFBQUssRUFBRUssS0FBSyxDQUFDZ08sS0FIZjtBQUlFLG1CQUFXLEVBQUVoTyxLQUFLLENBQUMySyxXQUpyQjtBQUtFLGFBQUssRUFBRTNLLEtBQUssQ0FBQzJRLEtBTGY7QUFNRSxhQUFLLEVBQUUzRyxZQU5UO0FBT0UsaUJBQVMsRUFBRWhILFNBUGI7QUFRRSxpQkFBUyxFQUFFQyxTQVJiO0FBU0UsWUFBSSxFQUFFd0YsSUFUUjtBQVVFLGtCQUFVLEVBQUUwSDtBQVZkLFFBREYsZUFhRTtBQUFLLGlCQUFTLEVBQUVULHNCQUFoQjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFHZ0MsT0FBRCxJQUFjLEtBQUtBLE9BQUwsR0FBZUEsT0FBdkM7QUFBaUQsbUJBQVMsRUFBQztBQUEzRDtBQURGLFFBYkY7QUFBQSxNQURGO0FBbUJEOztBQS9KNEU7O0FBa0svRSxNQUFNalMsZUFBc0UsR0FBRyxDQUFDQyxLQUFELEVBQVFXLEtBQVIsS0FBa0I7QUFBQTs7QUFDL0YsU0FBTztBQUNMd1IsSUFBQUEsZ0JBQWdCLDJCQUFFYiwwRkFBcUIsQ0FBQ3RSLEtBQUQsRUFBUVcsS0FBSyxDQUFDTCxLQUFkLENBQXZCLDBEQUFFLHNCQUEyQzZSO0FBRHhELEdBQVA7QUFHRCxDQUpEOztBQU1BLE1BQU1oUyxrQkFBK0QsR0FBRztBQUFFa1IsRUFBQUEsd0JBQXdCQSx5RkFBQUE7QUFBMUIsQ0FBeEU7QUFFTyxNQUFNalAsa0JBQWtCLEdBQUd6QyxvREFBTyxDQUFDSSxlQUFELEVBQWtCSSxrQkFBbEIsQ0FBUCxDQUE2Q29SLDZCQUE3QyxDQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL05QO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBZU8sTUFBTS9LLFdBQXNCLEdBQUcsQ0FBQztBQUFFbEcsRUFBQUEsS0FBRjtBQUFTK0osRUFBQUEsS0FBVDtBQUFnQi9HLEVBQUFBLFNBQWhCO0FBQTJCQyxFQUFBQSxTQUEzQjtBQUFzQ3dGLEVBQUFBLElBQXRDO0FBQTRDMEgsRUFBQUEsVUFBNUM7QUFBd0R4USxFQUFBQTtBQUF4RCxDQUFELEtBQXlFO0FBQzdHLFFBQU0rUyxhQUFhLEdBQUcsTUFBTTFTLEtBQUssQ0FBQ2tOLGNBQU4sR0FBdUJ5RixXQUF2QixFQUE1Qjs7QUFDQSxRQUFNM0UsS0FBSyxHQUFHaE8sS0FBSyxDQUFDNFMsZUFBTixFQUFkO0FBQ0EsUUFBTUMsU0FBUyxHQUFHWixnREFBRSxDQUFDLGNBQUQsRUFBaUIsRUFBRWpQLFNBQVMsSUFBSUMsU0FBZixJQUE0QixrQkFBNUIsR0FBaUQsRUFBbEUsQ0FBcEI7QUFDQSxRQUFNNlAsTUFBTSxHQUFHWCx1REFBVSxDQUFDWSxXQUFELENBQXpCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSx3REFBQyxxRkFBRDtBQUE2QixXQUFLLEVBQUV0SyxJQUFJLENBQUMvSSxLQUF6QztBQUFnRCxhQUFPLEVBQUVnVDtBQUF6RCxNQURGLGVBRUUsd0RBQUMsMERBQUQ7QUFDRSxXQUFLLEVBQUUxUyxLQURUO0FBRUUsV0FBSyxFQUFFQSxLQUFLLENBQUNnTyxLQUZmO0FBR0UsaUJBQVcsRUFBRWhPLEtBQUssQ0FBQzJLLFdBSHJCO0FBSUUsZ0JBQVUsRUFBRTNLLEtBQUssQ0FBQ2dULFVBSnBCO0FBS0UsV0FBSyxFQUFFWCxrR0FBcUIsQ0FBQ3JTLEtBQUQsQ0FMOUI7QUFNRSxXQUFLLEVBQUUrSjtBQU5ULE1BRkYsZUFVRTtBQUFLLGVBQVMsRUFBRThJLFNBQWhCO0FBQUEsNkJBQ0Usd0RBQUMsMkVBQUQ7QUFBd0IsdUJBQWE1TSwyRkFBQSxDQUF3QytILEtBQXhDLENBQXJDO0FBQUEsa0JBQ0csQ0FBQztBQUFFaUYsVUFBQUEsU0FBRjtBQUFhQyxVQUFBQTtBQUFiLFNBQUQsS0FBa0M7QUFDakMsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxvQ0FDRSx3REFBQyxtRUFBRDtBQUFvQixvQkFBTSxFQUFFekssSUFBSSxDQUFDQyxNQUFqQztBQUF5QyxxQkFBTyxFQUFFMUksS0FBSyxDQUFDNkQ7QUFBeEQsY0FERixFQUVHc00sVUFBVSxnQkFDVCx3REFBQyw2Q0FBRDtBQUNFLGtCQUFJLEVBQUVBLFVBQVUsS0FBSyxVQUFmLEdBQTRCLGFBQTVCLEdBQTRDLE9BRHBEO0FBRUUsdUJBQVMsRUFBQywwQkFGWjtBQUdFLG1CQUFLLEVBQUU7QUFBRWdELGdCQUFBQSxXQUFXLEVBQUU7QUFBZixlQUhUO0FBSUUsa0JBQUksRUFBQztBQUpQLGNBRFMsR0FPUCxJQVROLGVBVUU7QUFBSSx1QkFBUyxFQUFFTCxNQUFNLENBQUNNLFNBQXRCO0FBQUEsd0JBQWtDcEY7QUFBbEMsY0FWRixpQ0FXRSx3REFBQyw2Q0FBRDtBQUFNLGtCQUFJLEVBQUMsWUFBWDtBQUF3Qix1QkFBUyxFQUFDO0FBQWxDLGNBWEYsZ0JBWUUsd0RBQUMsMkVBQUQ7QUFBd0IsbUJBQUssRUFBRWhPLEtBQS9CO0FBQXNDLHVCQUFTLEVBQUVMLFNBQWpEO0FBQTRELGtCQUFJLEVBQUV1VCxhQUFsRTtBQUFpRixxQkFBTyxFQUFFRDtBQUExRixjQVpGLEVBYUd4SyxJQUFJLENBQUN1SCxPQUFMLElBQWdCdkgsSUFBSSxDQUFDdUgsT0FBTCxDQUFhQyxRQUE3QixpQkFDQztBQUFNLHVCQUFTLEVBQUMsaUJBQWhCO0FBQUEsMERBQ0Usd0RBQUMsNkNBQUQ7QUFBTSxvQkFBSSxFQUFDLFlBQVg7QUFBd0Isb0JBQUksRUFBQztBQUE3QixnQkFERixRQUN3Q3hILElBQUksQ0FBQ3VILE9BQUwsQ0FBYUMsUUFEckQ7QUFBQSxjQWRKO0FBQUEsWUFERjtBQXFCRDtBQXZCSDtBQURGLE1BVkY7QUFBQSxJQURGO0FBd0NELENBOUNNOztBQWdEUCxNQUFNOEMsV0FBVyxHQUFJaEUsS0FBRCxJQUEwQjtBQUM1QyxTQUFPO0FBQ0xxRSxJQUFBQSxTQUFTLEVBQUVwQiw2Q0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCakQsS0FBSyxDQUFDc0UsVUFBTixDQUFpQkMsZ0JBQWlCO0FBQ3ZELG1CQUFtQnZFLEtBQUssQ0FBQ3NFLFVBQU4sQ0FBaUJFLElBQWpCLENBQXNCQyxRQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQnpFLEtBQUssQ0FBQzBFLE1BQU4sQ0FBYS9JLElBQWIsQ0FBa0JnSixPQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQlMsR0FBUDtBQW1CRCxDQXBCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7SUFFS0s7O1dBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0dBQUFBLGFBQUFBOztBQWVFLE1BQU0zQixpQkFBTixTQUFnQ2hULDRDQUFoQyxDQUFpRDtBQUFBO0FBQUE7O0FBQUEscUNBQ25DK0csbUZBQVUsRUFEeUI7O0FBQUEseUNBR3hDLE1BQU07QUFDbEIsWUFBTTtBQUFFbkcsUUFBQUEsS0FBRjtBQUFTK0osUUFBQUE7QUFBVCxVQUFtQixLQUFLMUosS0FBOUI7O0FBQ0EsVUFBSTBKLEtBQUosRUFBVztBQUNULGVBQU9nSyxRQUFRLENBQUMzRixLQUFoQjtBQUNEOztBQUNELFVBQUksQ0FBQyxDQUFDcE8sS0FBSyxDQUFDMkssV0FBWixFQUF5QjtBQUN2QixlQUFPb0osUUFBUSxDQUFDQyxJQUFoQjtBQUNEOztBQUNELFVBQUloVSxLQUFLLENBQUMyUSxLQUFOLElBQWUzUSxLQUFLLENBQUMyUSxLQUFOLENBQVk5TCxNQUEvQixFQUF1QztBQUNyQyxlQUFPa1AsUUFBUSxDQUFDRSxLQUFoQjtBQUNEOztBQUVELGFBQU9oTCxTQUFQO0FBQ0QsS0FoQnFEOztBQUFBLDRDQWtCckMsTUFBbUI7QUFDbEMsWUFBTTtBQUFFakosUUFBQUE7QUFBRixVQUFZLEtBQUtLLEtBQXZCO0FBQ0EsWUFBTTZULFFBQVEsR0FBR2xVLEtBQUssQ0FBQzJLLFdBQU4sSUFBcUIsRUFBdEM7QUFDQSxZQUFNd0osb0JBQW9CLEdBQUdOLGdFQUFjLEdBQUdPLE9BQWpCLENBQXlCRixRQUF6QixFQUFtQ2xVLEtBQUssQ0FBQ2dULFVBQXpDLENBQTdCO0FBQ0EsWUFBTXFCLDBCQUEwQixHQUFHViw2REFBYyxDQUFDUSxvQkFBRCxDQUFqRDtBQUNBLFlBQU14RCxLQUFLLEdBQUcsS0FBS3RRLEtBQUwsQ0FBV3NRLEtBQVgsSUFBb0IsS0FBS3RRLEtBQUwsQ0FBV3NRLEtBQVgsQ0FBaUIyRCxRQUFqQixDQUEwQnRVLEtBQUssQ0FBQzhQLGdCQUFoQyxDQUFsQztBQUVBLDBCQUNFO0FBQUssaUJBQVMsRUFBQyxrQ0FBZjtBQUFBLGdDQUNFO0FBQUssaUNBQXVCLEVBQUU7QUFBRXlFLFlBQUFBLE1BQU0sRUFBRUY7QUFBVjtBQUE5QixVQURGLEVBR0cxRCxLQUFLLElBQUlBLEtBQUssQ0FBQzlMLE1BQU4sR0FBZSxDQUF4QixpQkFDQztBQUFJLG1CQUFTLEVBQUMseUJBQWQ7QUFBQSxvQkFDRzhMLEtBQUssQ0FBQ25DLEdBQU4sQ0FBVSxDQUFDZ0csSUFBRCxFQUFPQyxHQUFQLEtBQWU7QUFDeEIsZ0NBQ0U7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUMsK0JBQWI7QUFBNkMsb0JBQUksRUFBRUQsSUFBSSxDQUFDRSxJQUF4RDtBQUE4RCxzQkFBTSxFQUFFRixJQUFJLENBQUN0UCxNQUEzRTtBQUFBLDBCQUNHc1AsSUFBSSxDQUFDeEc7QUFEUjtBQURGLGVBQVN5RyxHQUFULENBREY7QUFPRCxXQVJBO0FBREgsVUFKSjtBQUFBLFFBREY7QUFtQkQsS0E1Q3FEOztBQUFBLDBDQWlEdkMsTUFBTTtBQUNuQm5QLE1BQUFBLHFFQUFBLENBQXdCO0FBQ3RCc1AsUUFBQUEsT0FBTyxFQUFFLEtBQUt2VSxLQUFMLENBQVdMLEtBQVgsQ0FBaUI2RCxFQURKO0FBRXRCZ1IsUUFBQUEsVUFBVSxFQUFFZiwwRUFBZ0IxRjtBQUZOLE9BQXhCO0FBSUQsS0F0RHFEO0FBQUE7O0FBd0R0RDBHLEVBQUFBLGdCQUFnQixDQUFDQyxRQUFELEVBQXFCQyxPQUFyQixFQUE4Q0MsT0FBOUMsRUFBb0U7QUFDbEYsVUFBTWxHLEtBQUssR0FBR2dHLFFBQVEsS0FBS2hCLFFBQVEsQ0FBQzNGLEtBQXRCLEdBQThCLE9BQTlCLEdBQXdDLE1BQXREO0FBQ0EsVUFBTXlFLFNBQVMsR0FBSSx3Q0FBdUNrQyxRQUFRLENBQUNHLFdBQVQsRUFBdUIsRUFBakY7QUFDQSxVQUFNQyxTQUFTLEdBQUdsUCxzR0FBQSxDQUFtRDhPLFFBQVEsQ0FBQ0csV0FBVCxFQUFuRCxDQUFsQjtBQUVBLHdCQUNFLHVEQUFDLGdEQUFEO0FBQVMsYUFBTyxFQUFFRixPQUFsQjtBQUEyQixlQUFTLEVBQUMsV0FBckM7QUFBaUQsV0FBSyxFQUFFakcsS0FBeEQ7QUFBK0QsaUJBQVcsTUFBMUU7QUFBQSw2QkFDRTtBQUFTLGlCQUFTLEVBQUU4RCxTQUFwQjtBQUErQixlQUFPLEVBQUVvQyxPQUF4QztBQUFpRCxzQkFBWUUsU0FBN0Q7QUFBQSw0Q0FDRTtBQUFHLDZCQUFIO0FBQWUsbUJBQVMsRUFBQztBQUF6QixVQURGLGtDQUVFO0FBQU0sbUJBQVMsRUFBQztBQUFoQixVQUZGO0FBQUE7QUFERixNQURGO0FBUUQ7O0FBRUQ1VCxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUV3SSxNQUFBQTtBQUFGLFFBQVksS0FBSzFKLEtBQXZCO0FBQ0EsVUFBTTBVLFFBQThCLEdBQUcsS0FBS00sV0FBTCxFQUF2Qzs7QUFFQSxRQUFJLENBQUNOLFFBQUwsRUFBZTtBQUNiLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUlBLFFBQVEsS0FBS2hCLFFBQVEsQ0FBQzNGLEtBQXRCLElBQStCckUsS0FBbkMsRUFBMEM7QUFDeEMsYUFBTyxLQUFLK0ssZ0JBQUwsQ0FBc0JDLFFBQXRCLEVBQWdDaEwsS0FBaEMsRUFBdUMsS0FBS3VMLFlBQTVDLENBQVA7QUFDRDs7QUFFRCxRQUFJUCxRQUFRLEtBQUtoQixRQUFRLENBQUNDLElBQXRCLElBQThCZSxRQUFRLEtBQUtoQixRQUFRLENBQUNFLEtBQXhELEVBQStEO0FBQzdELGFBQU8sS0FBS2EsZ0JBQUwsQ0FBc0JDLFFBQXRCLEVBQWdDLEtBQUtRLGNBQXJDLENBQVA7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRDs7QUF4RnFEO0FBMkZ4RCxpRUFBZW5ELGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7O0FBT08sTUFBTUksMkJBQXNDLEdBQUcsQ0FBQztBQUFFOVMsRUFBQUEsS0FBRjtBQUFTdVYsRUFBQUE7QUFBVCxDQUFELEtBQXdCO0FBQzVFLFFBQU1uQyxNQUFNLEdBQUcwQyxzREFBUyxDQUFDQyxTQUFELENBQXhCOztBQUVBLE1BQUkvVixLQUFLLEtBQUtrRywrREFBZCxFQUFvQztBQUNsQyx3QkFDRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQStCLGFBQU8sRUFBRXFQLE9BQXhDO0FBQUEscURBQ0UsdURBQUMsZ0RBQUQ7QUFBUyxlQUFPLEVBQUMsY0FBakI7QUFBQSwrQkFDRSx1REFBQyw2Q0FBRDtBQUFNLG1CQUFTLEVBQUMsdUNBQWhCO0FBQXdELGNBQUksRUFBQztBQUE3RDtBQURGLFFBREY7QUFBQSxNQURGO0FBT0Q7O0FBRUQsTUFBSXZWLEtBQUssS0FBS2tHLGlFQUFkLEVBQXNDO0FBQ3BDLHdCQUNFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBK0IsYUFBTyxFQUFFcVAsT0FBeEM7QUFBQSw2QkFDRTtBQUFLLGFBQUssRUFBQywyQkFBWDtBQUF1QyxpQkFBUyxFQUFFbkMsTUFBTSxDQUFDNkM7QUFBekQ7QUFERixNQURGO0FBS0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0F0Qk07O0FBd0JQLFNBQVNGLFNBQVQsQ0FBbUIxRyxLQUFuQixFQUF3QztBQUN0QyxTQUFPO0FBQ0w0RyxJQUFBQSxlQUFlLEVBQUUzRCw2Q0FBSTtBQUN6QjtBQUNBO0FBQ0Esb0JBQW9CakQsS0FBSyxDQUFDMEUsTUFBTixDQUFhbUMsU0FBVTtBQUMzQyw0QkFBNEI3RyxLQUFLLENBQUMwRSxNQUFOLENBQWFtQyxTQUFVO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUyxHQUFQO0FBWUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0Q7QUFDQTs7QUFPTyxNQUFNRSxlQUFOLFNBQThCbFUsZ0RBQTlCLENBQW1EO0FBQUE7QUFBQTs7QUFBQSx5Q0FDMUMsQ0FBQ21VLElBQUQsRUFBd0JDLFNBQVMsR0FBRyxLQUFwQyxLQUE4QztBQUMxRCwwQkFDRTtBQUFJLGlCQUFTLEVBQUMsOENBQWQ7QUFBNkQsWUFBSSxFQUFFQSxTQUFTLEdBQUcsRUFBSCxHQUFRLE1BQXBGO0FBQUEsa0JBQ0dELElBQUksQ0FBQ3ZILEdBQUwsQ0FBUyxDQUFDeUgsUUFBRCxFQUFXeEIsR0FBWCxLQUEyQjtBQUNuQyw4QkFDRSx1REFBQyxxRUFBRDtBQUVFLGdCQUFJLEVBQUV3QixRQUFRLENBQUNyVixJQUZqQjtBQUdFLGdCQUFJLEVBQUVxVixRQUFRLENBQUN2TCxJQUhqQjtBQUlFLHlCQUFhLEVBQUV1TCxRQUFRLENBQUNDLGFBSjFCO0FBS0UsbUJBQU8sRUFBRUQsUUFBUSxDQUFDaEIsT0FMcEI7QUFNRSxvQkFBUSxFQUFFZ0IsUUFBUSxDQUFDRSxRQU5yQjtBQUFBLHNCQVFHRixRQUFRLENBQUNHLE9BQVQsSUFBb0IsS0FBS0MsV0FBTCxDQUFpQkosUUFBUSxDQUFDRyxPQUExQixFQUFtQyxJQUFuQztBQVJ2QixhQUNRLEdBQUVILFFBQVEsQ0FBQ3ZMLElBQUssR0FBRStKLEdBQUksRUFEOUIsQ0FERjtBQVlELFNBYkE7QUFESCxRQURGO0FBa0JELEtBcEJ1RDtBQUFBOztBQXNCeERsVCxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFBTztBQUFLLGVBQVMsRUFBQyxvQ0FBZjtBQUFBLGdCQUFxRCxLQUFLOFUsV0FBTCxDQUFpQixLQUFLaFcsS0FBTCxDQUFXaVcsS0FBNUI7QUFBckQsTUFBUDtBQUNEOztBQXhCdUQ7Ozs7Ozs7Ozs7Ozs7OztBQ1IxRDtBQUNBO0FBS0E7QUFDQTtBQVlPLE1BQU1JLHVCQUFrQyxHQUFHLENBQUM7QUFBRTFXLEVBQUFBLEtBQUY7QUFBU0wsRUFBQUEsU0FBVDtBQUFvQitELEVBQUFBO0FBQXBCLENBQUQsS0FBb0M7QUFDcEYsUUFBTSxDQUFDNFMsS0FBRCxFQUFRSyxRQUFSLElBQW9CcFQsK0NBQVEsQ0FBa0IsRUFBbEIsQ0FBbEM7QUFDQSxRQUFNc08sZ0JBQWdCLEdBQUcyRSx3REFBVyxDQUFFOVcsS0FBRDtBQUFBOztBQUFBLG9DQUF1QnNSLHlGQUFxQixDQUFDdFIsS0FBRCxFQUFRTSxLQUFSLENBQTVDLDBEQUF1QixzQkFBcUM2UixnQkFBNUQ7QUFBQSxHQUFELENBQXBDO0FBRUEwRSxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZEksSUFBQUEsUUFBUSxDQUFDRixpRUFBWSxDQUFDOVcsU0FBRCxFQUFZSyxLQUFaLEVBQW1CNlIsZ0JBQW5CLENBQWIsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDbFMsU0FBRCxFQUFZSyxLQUFaLEVBQW1CNlIsZ0JBQW5CLEVBQXFDOEUsUUFBckMsQ0FGTSxDQUFUO0FBSUEsU0FBT2pULFFBQVEsQ0FBQztBQUFFNFMsSUFBQUE7QUFBRixHQUFELENBQWY7QUFDRCxDQVRNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CUDs7QUFZTyxNQUFNL0Qsc0JBQWlDLEdBQUcsUUFBK0I7QUFBQSxNQUE5QjtBQUFFN08sSUFBQUE7QUFBRixHQUE4QjtBQUFBLE1BQWZtVCxRQUFlOztBQUM5RSxRQUFNLENBQUNDLGdCQUFELEVBQW1CQyxtQkFBbkIsSUFBMEN4VCwrQ0FBUSxDQUFvQjtBQUFFeVQsSUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsSUFBQUEsQ0FBQyxFQUFFO0FBQVgsR0FBcEIsQ0FBeEQ7QUFDQSxRQUFNLENBQUMvRCxhQUFELEVBQWdCZ0UsZ0JBQWhCLElBQW9DM1QsK0NBQVEsQ0FBVSxLQUFWLENBQWxEO0FBQ0EsUUFBTTRULFlBQVksR0FBR1Asa0RBQVcsQ0FDN0IxTSxLQUFELElBQXVDO0FBQ3JDLFFBQUksQ0FBQ2tOLE9BQU8sQ0FBQ04sZ0JBQUQsRUFBbUJPLHVCQUF1QixDQUFDbk4sS0FBRCxDQUExQyxDQUFaLEVBQWdFO0FBQzlEO0FBQ0Q7O0FBRURBLElBQUFBLEtBQUssQ0FBQ29OLGVBQU47QUFFQUosSUFBQUEsZ0JBQWdCLENBQUMsQ0FBQ2hFLGFBQUYsQ0FBaEI7QUFDRCxHQVQ2QixFQVU5QixDQUFDNEQsZ0JBQUQsRUFBbUI1RCxhQUFuQixFQUFrQ2dFLGdCQUFsQyxDQVY4QixDQUFoQztBQVlBLFFBQU1LLFdBQVcsR0FBR1gsa0RBQVcsQ0FDNUIxTSxLQUFELElBQXVDO0FBQ3JDNk0sSUFBQUEsbUJBQW1CLENBQUNNLHVCQUF1QixDQUFDbk4sS0FBRCxDQUF4QixDQUFuQjtBQUNELEdBSDRCLEVBSTdCLENBQUM2TSxtQkFBRCxDQUo2QixDQUEvQjtBQU9BLHNCQUNFLG1GQUFZRixRQUFaO0FBQXNCLGFBQVMsRUFBQyx1QkFBaEM7QUFBd0QsV0FBTyxFQUFFTSxZQUFqRTtBQUErRSxlQUFXLEVBQUVJLFdBQTVGO0FBQUEsY0FDRzdULFFBQVEsQ0FBQztBQUFFd1AsTUFBQUEsYUFBRjtBQUFpQkQsTUFBQUEsU0FBUyxFQUFFLE1BQU1pRSxnQkFBZ0IsQ0FBQyxLQUFEO0FBQWxELEtBQUQ7QUFEWCxLQURGO0FBS0QsQ0EzQk07O0FBNkJQLFNBQVNFLE9BQVQsQ0FBaUI5UyxPQUFqQixFQUE2Q2tULE9BQTdDLEVBQWtGO0FBQ2hGLFNBQU9BLE9BQU8sQ0FBQ1IsQ0FBUixLQUFjMVMsT0FBTyxDQUFDMFMsQ0FBdEIsSUFBMkJRLE9BQU8sQ0FBQ1AsQ0FBUixLQUFjM1MsT0FBTyxDQUFDMlMsQ0FBeEQ7QUFDRDs7QUFFRCxTQUFTSSx1QkFBVCxDQUFpQ25OLEtBQWpDLEVBQXVGO0FBQ3JGLFNBQU87QUFDTDhNLElBQUFBLENBQUMsRUFBRVMsSUFBSSxDQUFDQyxLQUFMLENBQVd4TixLQUFLLENBQUN5TixPQUFqQixDQURFO0FBRUxWLElBQUFBLENBQUMsRUFBRVEsSUFBSSxDQUFDQyxLQUFMLENBQVd4TixLQUFLLENBQUMwTixPQUFqQjtBQUZFLEdBQVA7QUFJRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xERDtBQUNBO0FBQ0E7QUFDQTs7QUFVTyxNQUFNbkYsc0JBQWlDLEdBQUcsQ0FBQztBQUFFcUYsRUFBQUEsSUFBRjtBQUFRQyxFQUFBQSxPQUFSO0FBQWlCL1gsRUFBQUEsS0FBakI7QUFBd0JMLEVBQUFBO0FBQXhCLENBQUQsS0FBeUM7QUFDeEYsTUFBSSxDQUFDbVksSUFBTCxFQUFXO0FBQ1QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UsdURBQUMsNERBQUQ7QUFBcUIsV0FBTyxFQUFFQyxPQUE5QjtBQUF1QyxVQUFNLEVBQUVDLFFBQS9DO0FBQUEsMkJBQ0UsdURBQUMsNkVBQUQ7QUFBeUIsV0FBSyxFQUFFaFksS0FBaEM7QUFBdUMsZUFBUyxFQUFFTCxTQUFsRDtBQUFBLGdCQUNHLENBQUM7QUFBRTJXLFFBQUFBO0FBQUYsT0FBRCxLQUFlO0FBQ2QsNEJBQU8sdURBQUMsNkRBQUQ7QUFBaUIsZUFBSyxFQUFFQTtBQUF4QixVQUFQO0FBQ0Q7QUFISDtBQURGLElBREY7QUFTRCxDQWRNOzs7Ozs7Ozs7Ozs7OztBQ2JQO0FBRUE7O0FBT08sTUFBTTJCLGlCQUE0QixHQUFHLENBQUM7QUFBRUMsRUFBQUEsTUFBRjtBQUFVakQsRUFBQUE7QUFBVixDQUFELEtBQXlCO0FBQ25FLFFBQU1rRCxRQUFRLEdBQ1pELE1BQU0sQ0FBQ0UsUUFBUCxLQUFvQixPQUFwQixJQUErQkYsTUFBTSxDQUFDRSxRQUFQLEtBQW9CLFNBQW5ELEdBQStELHNCQUEvRCxHQUF3RixhQUQxRjtBQUdBLHNCQUNFLHVEQUFDLGdEQUFEO0FBQVMsV0FBTyxFQUFFRixNQUFNLENBQUN4TixJQUF6QjtBQUFBLGNBQ0d3TixNQUFNLENBQUN0RCxPQUFQLGdCQUNDO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQTJDLGFBQU8sRUFBR3lELENBQUQsSUFBT3BELE9BQU8sQ0FBQ29ELENBQUQsRUFBSUgsTUFBTSxDQUFDdEQsT0FBWCxDQUFsRTtBQUFBLDZCQUNFLHVEQUFDLDZDQUFEO0FBQU0sWUFBSSxFQUFFdUQsUUFBWjtBQUFzQixhQUFLLEVBQUU7QUFBRWhGLFVBQUFBLFdBQVcsRUFBRTtBQUFmO0FBQTdCO0FBREYsTUFERCxnQkFLQztBQUFHLGVBQVMsRUFBQyxtQkFBYjtBQUFpQyxVQUFJLEVBQUUrRSxNQUFNLENBQUMxRCxJQUE5QztBQUFvRCxZQUFNLEVBQUMsUUFBM0Q7QUFBb0UsU0FBRyxFQUFDLFlBQXhFO0FBQUEsNkJBQ0UsdURBQUMsNkNBQUQ7QUFBTSxZQUFJLEVBQUUyRCxRQUFaO0FBQXNCLGFBQUssRUFBRTtBQUFFaEYsVUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBN0I7QUFERjtBQU5KLEtBQW9DK0UsTUFBTSxDQUFDRSxRQUEzQyxDQURGO0FBYUQsQ0FqQk07Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBRUE7QUFDQTs7O0FBT08sTUFBTTlGLGtCQUE2QixHQUFHLENBQUM7QUFBRWdHLEVBQUFBLE1BQUY7QUFBVXBYLEVBQUFBO0FBQVYsQ0FBRCxLQUF5QjtBQUNwRSxRQUFNcVgsV0FBVyxHQUFHM0Isa0RBQVcsQ0FDN0IsQ0FBQ3lCLENBQUQsRUFBMEJHLEdBQTFCLEtBQTBDO0FBQ3hDSCxJQUFBQSxDQUFDLENBQUNmLGVBQUY7QUFDQWhTLElBQUFBLHFFQUFBLENBQXdCO0FBQUVzUCxNQUFBQSxPQUFPLEVBQUUxVCxPQUFYO0FBQW9CMlQsTUFBQUEsVUFBVSxFQUFFMkQ7QUFBaEMsS0FBeEI7QUFDRCxHQUo0QixFQUs3QixDQUFDdFgsT0FBRCxDQUw2QixDQUEvQixDQURvRSxDQVNwRTs7QUFDQSxRQUFNdVgsT0FBOEMsR0FBRyxFQUF2RDs7QUFDQSxPQUFLLE1BQU1oSyxLQUFYLElBQW9CNkosTUFBcEIsRUFBNEI7QUFDMUIsUUFBSSxDQUFDN0osS0FBSyxDQUFDbEgsSUFBUCxJQUFlLENBQUNrSCxLQUFLLENBQUNsSCxJQUFOLENBQVdrUixPQUEvQixFQUF3QztBQUN0QztBQUNEOztBQUVELFNBQUssTUFBTVAsTUFBWCxJQUFxQnpKLEtBQUssQ0FBQ2xILElBQU4sQ0FBV2tSLE9BQWhDLEVBQXlDO0FBQ3ZDQSxNQUFBQSxPQUFPLENBQUNQLE1BQU0sQ0FBQ0UsUUFBUixDQUFQLEdBQTJCRixNQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsc0JBQ0U7QUFBQSxjQUNHdlQsTUFBTSxDQUFDK1QsTUFBUCxDQUFjRCxPQUFkLEVBQXVCakssR0FBdkIsQ0FBNEIwSixNQUFELGlCQUMxQix1REFBQyxpRUFBRDtBQUFtQixZQUFNLEVBQUVBLE1BQTNCO0FBQW1DLGFBQU8sRUFBRUs7QUFBNUMsT0FBOERMLE1BQU0sQ0FBQ0UsUUFBckUsQ0FERDtBQURILElBREY7QUFPRCxDQTVCTTs7Ozs7Ozs7Ozs7OztBQ1ZQO0FBV0E7QUFFQSxNQUFNYSxrQkFBa0IsR0FBRyxnQkFBM0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBR0gsc0VBQXVCLENBQUNFLGtCQUFELENBQXBEO0FBRU8sU0FBU3RTLDZCQUFULENBQ0x5QixLQURLLEVBRUxJLElBRkssRUFHTEQsV0FISyxFQUlMRSxJQUpLLEVBS0w7QUFDQSxRQUFNO0FBQUUwUSxJQUFBQTtBQUFGLE1BQWdCNVEsV0FBdEI7QUFFQSxRQUFNNlEsV0FBVyxHQUFHaFIsS0FBcEI7QUFDQSxRQUFNaVIsWUFBWSxHQUFHRixTQUFTLENBQUNHLFNBQVYsQ0FBb0JKLG9CQUFwQixDQUFyQjs7QUFFQSxNQUFJRyxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDcEIsUUFBSTdRLElBQUksS0FBS3dRLG1GQUFiLEVBQXlEO0FBQ3ZELFlBQU1RLFFBQVEsR0FBR0MsY0FBYyxDQUFDLENBQUNMLFdBQUQsQ0FBRCxDQUEvQjtBQUVBLCtCQUNLN1EsV0FETDtBQUVFNFEsUUFBQUEsU0FBUyxFQUFFLENBQUMsR0FBRzVRLFdBQVcsQ0FBQzRRLFNBQWhCLEVBQTJCSyxRQUEzQjtBQUZiO0FBSUQ7O0FBRUQsVUFBTUUsWUFBWSxHQUFHQyxlQUFlLENBQUNsUixJQUFELEVBQU8yUSxXQUFQLENBQXBDO0FBQ0EsVUFBTUksUUFBUSxHQUFHQyxjQUFjLENBQUNDLFlBQUQsQ0FBL0I7QUFFQSw2QkFDS25SLFdBREw7QUFFRTRRLE1BQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUc1USxXQUFXLENBQUM0USxTQUFoQixFQUEyQkssUUFBM0I7QUFGYjtBQUlEOztBQUVELFFBQU1JLGFBQWEsR0FBR0MsS0FBSyxDQUFDelAsSUFBTixDQUFXK08sU0FBWCxDQUF0QjtBQUNBLFFBQU0sQ0FBQzdVLE9BQUQsSUFBWXNWLGFBQWEsQ0FBQ0UsTUFBZCxDQUFxQlQsWUFBckIsRUFBbUMsQ0FBbkMsQ0FBbEI7O0FBRUEsTUFBSTdRLElBQUksS0FBS3dRLG1GQUFiLEVBQXlEO0FBQ3ZELFVBQU1lLFFBQVEsR0FBR0MsdUJBQXVCLENBQUMxVixPQUFELENBQXhDOztBQUVBLFFBQUl5VixRQUFRLENBQUMsQ0FBRCxDQUFSLEtBQWdCWCxXQUFoQixJQUErQlcsUUFBUSxDQUFDbFYsTUFBVCxLQUFvQixDQUF2RCxFQUEwRDtBQUN4RCwrQkFDSzBELFdBREw7QUFFRTRRLFFBQUFBLFNBQVMsRUFBRVM7QUFGYjtBQUlEOztBQUVELFVBQU1KLFFBQVEsR0FBR0MsY0FBYyxDQUFDLENBQUNMLFdBQUQsQ0FBRCxDQUEvQjtBQUVBLDZCQUNLN1EsV0FETDtBQUVFNFEsTUFBQUEsU0FBUyxFQUFFLENBQUMsR0FBR1MsYUFBSixFQUFtQkosUUFBbkI7QUFGYjtBQUlEOztBQUVELFFBQU1BLFFBQVEsR0FBR1Msc0JBQXNCLENBQUMzVixPQUFELEVBQVU4VSxXQUFWLENBQXZDOztBQUVBLE1BQUljLG9CQUFvQixDQUFDVixRQUFELEVBQVcvUSxJQUFYLENBQXhCLEVBQTBDO0FBQ3hDLDZCQUNLRixXQURMO0FBRUU0USxNQUFBQSxTQUFTLEVBQUVTO0FBRmI7QUFJRDs7QUFFRCwyQkFDS3JSLFdBREw7QUFFRTRRLElBQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUdTLGFBQUosRUFBbUJKLFFBQW5CO0FBRmI7QUFJRDs7QUFFRCxTQUFTQyxjQUFULENBQ0VVLEtBREYsRUFFRTNSLElBQUksR0FBR21RLHFFQUZULEVBR0UwQixRQUhGLEVBSTRCO0FBQUE7O0FBQzFCQSxFQUFBQSxRQUFRLGdCQUFHQSxRQUFILGlEQUFlO0FBQ3JCeFcsSUFBQUEsRUFBRSxFQUFFLGlCQURpQjtBQUVyQnBCLElBQUFBLEtBQUssRUFBRTtBQUNMNlgsTUFBQUEsR0FBRyxFQUFFLElBREE7QUFFTHhSLE1BQUFBLE1BQU0sRUFBRSxLQUZIO0FBR0x5UixNQUFBQSxPQUFPLEVBQUU7QUFISjtBQUZjLEdBQXZCO0FBU0EsU0FBTztBQUNMQyxJQUFBQSxXQUFXLEVBQUV2QixrQkFEUjtBQUVMd0IsSUFBQUEsT0FBTyxFQUFFO0FBQ1A1VyxNQUFBQSxFQUFFLEVBQUUrVSxpRUFERztBQUVQL1AsTUFBQUEsT0FBTyxFQUFFO0FBQ1BMLFFBQUFBLElBQUksRUFBRUEsSUFEQztBQUVQMlIsUUFBQUEsS0FBSyxFQUFFQSxLQUZBO0FBR1BRLFFBQUFBLE1BQU0sRUFBRW5TLElBQUksS0FBS21RLHFFQUFULEdBQXNDLGFBQXRDLEdBQXNEMVAsU0FIdkQ7QUFJUDJSLFFBQUFBLFFBQVEsRUFBRTtBQUpIO0FBRkYsS0FGSjtBQVdMQyxJQUFBQSxVQUFVLEVBQUUsbUJBRUxSLFFBRks7QUFHUjVYLE1BQUFBLEtBQUssRUFBRTtBQUNMNlgsUUFBQUEsR0FBRyxFQUFFLElBREE7QUFFTHhSLFFBQUFBLE1BQU0sRUFBRSxLQUZIO0FBR0x5UixRQUFBQSxPQUFPLEVBQUU7QUFISjtBQUhDO0FBWFAsR0FBUDtBQXNCRDs7QUFFRCxNQUFNTixzQkFBc0IsR0FBRyxDQUM3QjNWLE9BRDZCLEVBRTdCOFUsV0FGNkIsRUFHN0I1USxJQUFJLEdBQUdtUSxxRUFIc0IsS0FJQTtBQUM3QixRQUFNMEIsUUFBUSxHQUFHL1YsT0FBTyxDQUFDdVcsVUFBUixDQUFtQkMsSUFBbkIsQ0FBeUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDbFgsRUFBRixLQUFTLGlCQUF4QyxDQUFqQjtBQUNBLFFBQU1rVyxRQUFRLEdBQUdDLHVCQUF1QixDQUFDMVYsT0FBRCxDQUF4QztBQUNBLFFBQU0wVyxLQUFLLEdBQUdqQixRQUFRLENBQUNULFNBQVQsQ0FBb0IyQixJQUFELElBQVVBLElBQUksS0FBSzdCLFdBQXRDLENBQWQ7O0FBRUEsTUFBSTRCLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDYmpCLElBQUFBLFFBQVEsQ0FBQ21CLElBQVQsQ0FBYzlCLFdBQWQ7QUFDRCxHQUZELE1BRU87QUFDTFcsSUFBQUEsUUFBUSxDQUFDRCxNQUFULENBQWdCa0IsS0FBaEIsRUFBdUIsQ0FBdkI7QUFDRDs7QUFFRCxTQUFPdkIsY0FBYyxDQUFDTSxRQUFELEVBQVd2UixJQUFYLEVBQWlCNlIsUUFBakIsQ0FBckI7QUFDRCxDQWhCRDs7QUFrQkEsTUFBTUwsdUJBQXVCLEdBQUltQixJQUFELElBQThDO0FBQUE7O0FBQzVFLFFBQU1oQixLQUFLLDRCQUFHZ0IsSUFBSSxDQUFDVixPQUFMLENBQWE1UixPQUFoQiwwREFBRyxzQkFBc0JzUixLQUFwQzs7QUFDQSxNQUFJLENBQUNOLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBY2pCLEtBQWQsQ0FBTCxFQUEyQjtBQUN6QixXQUFPLEVBQVA7QUFDRDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FORDs7QUFRQSxNQUFNRCxvQkFBb0IsR0FBRyxDQUFDVixRQUFELEVBQXFDL1EsSUFBckMsS0FBb0U7QUFDL0YsU0FBT3VSLHVCQUF1QixDQUFDUixRQUFELENBQXZCLENBQWtDM1UsTUFBbEMsS0FBNkM4VSxlQUFlLENBQUNsUixJQUFELENBQWYsQ0FBc0I1RCxNQUExRTtBQUNELENBRkQ7O0FBSUEsTUFBTThVLGVBQWUsR0FBRyxDQUFDbFIsSUFBRCxFQUFvQjRTLFdBQXBCLEtBQXVEO0FBQzdFLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxHQUFKLEVBQWY7O0FBRUEsT0FBSyxNQUFNOU0sS0FBWCxJQUFvQmhHLElBQXBCLEVBQTBCO0FBQ3hCLFNBQUssTUFBTStTLEtBQVgsSUFBb0IvTSxLQUFLLENBQUNnTixNQUExQixFQUFrQztBQUNoQyxVQUFJRCxLQUFLLENBQUM1YSxJQUFOLEtBQWVpWSwyREFBbkIsRUFBcUM7QUFDbkM7QUFDRDs7QUFFRCxZQUFNb0MsSUFBSSxHQUFHbkMsa0VBQW1CLENBQUMwQyxLQUFELEVBQVEvTSxLQUFSLEVBQWVoRyxJQUFmLENBQWhDOztBQUVBLFVBQUl3UyxJQUFJLEtBQUtJLFdBQWIsRUFBMEI7QUFDeEI7QUFDRDs7QUFFREMsTUFBQUEsTUFBTSxDQUFDMU8sR0FBUCxDQUFXcU8sSUFBWDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3BCLEtBQUssQ0FBQ3pQLElBQU4sQ0FBV2tSLE1BQVgsQ0FBUDtBQUNELENBcEJEOzs7Ozs7Ozs7Ozs7QUNySkE7QUFFTyxTQUFTTyxzQkFBVCxDQUFnQ2xjLFNBQWhDLEVBQTJEO0FBQ2hFLFFBQU1tYyxTQUFvQyxHQUFHO0FBQzNDaFUsSUFBQUEsV0FBVyxFQUFFbkksU0FBUyxDQUFDa0UsRUFEb0I7QUFFM0NrWSxJQUFBQSxhQUFhLEVBQUVwYyxTQUFTLENBQUNxTyxLQUZrQjtBQUczQ2dPLElBQUFBLFlBQVksRUFBRXJjLFNBQVMsQ0FBQ2UsR0FIbUI7QUFJM0N1YixJQUFBQSxVQUFVLEVBQUV0YyxTQUFTLENBQUM0SCxJQUFWLENBQWUyVSxXQUpnQjtBQUszQ0MsSUFBQUEsU0FBUyxFQUFFUCxrRkFBb0NRO0FBTEosR0FBN0M7QUFRQVQsRUFBQUEscUVBQW1CLENBQUNHLFNBQUQsQ0FBbkI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLGVBQWU0QixjQUFmLENBQ0VDLElBREYsRUFFRUMsUUFGRixFQUdFQyxRQUhGLEVBSWdDO0FBQzlCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHTCxpRUFBQSxDQUE4Qk8scUJBQTlCLENBQWQ7O0FBQ0EsTUFBSUYsS0FBSixFQUFXO0FBQ1RHLElBQUFBLHNDQUFzQztBQUN0QyxXQUFPSCxLQUFQO0FBQ0Q7O0FBRUQsTUFBSTtBQUNGLFlBQVFILElBQUksQ0FBQzljLFNBQWI7QUFDRSxXQUFLbWMsMkRBQUw7QUFBMkI7QUFDekI7QUFDQSxnQkFBTW1CLE9BQXFCLEdBQUcsTUFBTTdCLHlFQUFBLENBQWUsc0JBQWYsQ0FBcEMsQ0FGeUIsQ0FJekI7O0FBQ0EsY0FBSTZCLE9BQU8sQ0FBQ0UsV0FBWixFQUF5QjtBQUN2QixrQkFBTUMsTUFBTSxHQUFHcEIseUVBQUEsQ0FBOEJpQixPQUFPLENBQUNFLFdBQXRDLENBQWY7QUFDQS9ZLFlBQUFBLHNFQUFBLENBQXdCZ1osTUFBeEI7QUFDQSxtQkFBTyxJQUFQO0FBQ0QsV0FUd0IsQ0FXekI7OztBQUNBSCxVQUFBQSxPQUFPLENBQUM1VyxJQUFSLENBQWFpWCxPQUFiLEdBQXVCLEtBQXZCO0FBQ0FMLFVBQUFBLE9BQU8sQ0FBQzVXLElBQVIsQ0FBYWtYLFFBQWIsR0FBd0IsS0FBeEI7QUFDQU4sVUFBQUEsT0FBTyxDQUFDNVcsSUFBUixDQUFhbVgsT0FBYixHQUF1QixLQUF2QjtBQUNBLGlCQUFPUCxPQUFQO0FBQ0Q7O0FBQ0QsV0FBS25CLDZEQUFMO0FBQTZCO0FBQzNCLGdCQUFNbUIsT0FBcUIsR0FBRyxNQUFNM0IsZ0hBQUEsQ0FBaUNtQixJQUFJLENBQUNoZCxPQUF0QyxFQUErQ2dkLElBQUksQ0FBQ3JkLE9BQXBELEVBQTZEcWQsSUFBSSxDQUFDbGQsTUFBbEUsQ0FBcEM7O0FBRUEsY0FBSWtkLElBQUksQ0FBQzdjLE1BQUwsSUFBZXFkLE9BQU8sQ0FBQzVXLElBQVIsQ0FBYXNYLEdBQWhDLEVBQXFDO0FBQ25DO0FBQ0Esa0JBQU1DLFlBQVksR0FBRzVCLHlFQUFBLENBQThCaUIsT0FBTyxDQUFDNVcsSUFBUixDQUFhc1gsR0FBM0MsQ0FBckI7QUFDQSxrQkFBTUUsV0FBVyxHQUFHelosMEVBQUEsR0FBOEJnTCxRQUFsRDs7QUFFQSxnQkFBSXdPLFlBQVksS0FBS0MsV0FBckIsRUFBa0M7QUFDaEM7QUFDQXpaLGNBQUFBLHNFQUFBLG1CQUNLQSwwRUFBQSxFQURMO0FBRUVnTCxnQkFBQUEsUUFBUSxFQUFFd087QUFGWjtBQUlBaFIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosRUFBMEMrUSxZQUExQyxFQUF3REMsV0FBeEQ7QUFDRDtBQUNGOztBQUNELGlCQUFPWixPQUFQO0FBQ0Q7O0FBQ0QsV0FBS25CLDBEQUFMO0FBQTBCO0FBQ3hCLGlCQUFPaUMsd0JBQXdCLENBQUN0QixJQUFJLENBQUN1QixXQUFOLENBQS9CO0FBQ0Q7O0FBQ0Q7QUFDRSxjQUFNO0FBQUVqVixVQUFBQSxPQUFPLEVBQUUsbUJBQW1CMFQsSUFBSSxDQUFDOWM7QUFBbkMsU0FBTjtBQXpDSjtBQTJDRCxHQTVDRCxDQTRDRSxPQUFPc2UsR0FBUCxFQUFZO0FBQ1o7QUFDQSxRQUFJQSxHQUFHLENBQUNDLFNBQVIsRUFBbUI7QUFDakIsYUFBTyxJQUFQO0FBQ0Q7O0FBRUR4QixJQUFBQSxRQUFRLENBQUNoQiw4REFBbUIsQ0FBQztBQUFFM1MsTUFBQUEsT0FBTyxFQUFFLDJCQUFYO0FBQXdDRixNQUFBQSxLQUFLLEVBQUVvVjtBQUEvQyxLQUFELENBQXBCLENBQVI7QUFDQXJSLElBQUFBLE9BQU8sQ0FBQy9ELEtBQVIsQ0FBY29WLEdBQWQ7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTM2YsYUFBVCxDQUF1Qm1lLElBQXZCLEVBQW1FO0FBQ3hFLFNBQU8sT0FBT0MsUUFBUCxFQUFpQkMsUUFBakIsS0FBOEI7QUFBQTs7QUFDbkM7QUFDQUQsSUFBQUEsUUFBUSxDQUFDZixnRUFBcUIsRUFBdEIsQ0FBUixDQUZtQyxDQUluQzs7QUFDQSxVQUFNc0IsT0FBTyxHQUFHLE1BQU1ULGNBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQWlCQyxRQUFqQixDQUFwQyxDQUxtQyxDQU9uQzs7QUFDQSxRQUFJLENBQUNNLE9BQUwsRUFBYztBQUNaO0FBQ0QsS0FWa0MsQ0FZbkM7OztBQUNBUCxJQUFBQSxRQUFRLENBQUNkLGdFQUFxQixFQUF0QixDQUFSLENBYm1DLENBZW5DOztBQUNBLFFBQUluZCxTQUFKOztBQUNBLFFBQUk7QUFDRkEsTUFBQUEsU0FBUyxHQUFHLElBQUlzZCwyREFBSixDQUFtQmtCLE9BQU8sQ0FBQ3hlLFNBQTNCLEVBQXNDd2UsT0FBTyxDQUFDNVcsSUFBOUMsQ0FBWjtBQUNELEtBRkQsQ0FFRSxPQUFPNFgsR0FBUCxFQUFZO0FBQ1p2QixNQUFBQSxRQUFRLENBQUNoQiw4REFBbUIsQ0FBQztBQUFFM1MsUUFBQUEsT0FBTyxFQUFFLCtCQUFYO0FBQTRDRixRQUFBQSxLQUFLLEVBQUVvVjtBQUFuRCxPQUFELENBQXBCLENBQVI7QUFDQXJSLE1BQUFBLE9BQU8sQ0FBQy9ELEtBQVIsQ0FBY29WLEdBQWQ7QUFDQTtBQUNELEtBdkJrQyxDQXlCbkM7OztBQUNBLFVBQU1FLFVBQVUsR0FBR3hCLFFBQVEsRUFBM0I7QUFDQSxVQUFNNWMsV0FBVyxHQUFHcUUsOEVBQUEsRUFBcEI7O0FBRUEsUUFBSSxDQUFDckUsV0FBVyxDQUFDc2UsS0FBakIsRUFBd0I7QUFDdEI7QUFDQWphLE1BQUFBLHNFQUFBLENBQXdCO0FBQUVpYSxRQUFBQSxLQUFLLEVBQUVGLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQkQ7QUFBekIsT0FBeEIsRUFBMEQsSUFBMUQ7QUFDRCxLQWhDa0MsQ0FrQ25DOzs7QUFDQSxVQUFNbFcsT0FBZ0IsR0FBR2xELG1GQUFVLEVBQW5DO0FBQ0EsVUFBTXNaLFlBQTBCLEdBQUdsRCw2RkFBZSxFQUFsRCxDQXBDbUMsQ0FzQ25DOztBQUNBa0QsSUFBQUEsWUFBWSxDQUFDQyxVQUFiLENBQXdCL2YsU0FBeEI7QUFFQTBKLElBQUFBLE9BQU8sQ0FBQ3NXLElBQVIsQ0FBYWhnQixTQUFiO0FBRUEsVUFBTXFjLFlBQVksR0FBR3dCLHlFQUFVLGlCQUFDRyxJQUFJLENBQUNsZCxNQUFOLHVEQUFnQmQsU0FBUyxDQUFDZSxHQUExQixDQUEvQixDQTNDbUMsQ0E0Q25DOztBQUNBLFVBQU1rZCxRQUFRLENBQUNSLG1GQUF3QixDQUFDcEIsWUFBRCxFQUFlcmMsU0FBZixDQUF6QixDQUFkLENBN0NtQyxDQStDbkM7QUFDQTs7QUFDQSxVQUFNaWdCLE1BQU0sR0FBR3RDLG1IQUEwQixDQUFDO0FBQUUzZCxNQUFBQSxTQUFGO0FBQWEwSixNQUFBQTtBQUFiLEtBQUQsQ0FBekM7QUFDQXVXLElBQUFBLE1BQU0sQ0FBQ2hWLEdBQVAsQ0FBVztBQUFFakwsTUFBQUEsU0FBRjtBQUFha0wsTUFBQUEsS0FBSyxFQUFFeEIsT0FBTyxDQUFDQyxTQUFSO0FBQXBCLEtBQVg7O0FBRUEsUUFBSWlVLCtFQUFrQixDQUFDTSxRQUFRLEVBQVQsQ0FBbEIsS0FBbUM3QixZQUF2QyxFQUFxRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNELEtBekRrQyxDQTJEbkM7OztBQUNBLFFBQUk2QixRQUFRLEdBQUdsZSxTQUFYLENBQXFCa2dCLFNBQXJCLEtBQW1DOUMsa0VBQXZDLEVBQW9FO0FBQ2xFO0FBQ0Q7O0FBRUQsUUFBSTtBQUNGcGQsTUFBQUEsU0FBUyxDQUFDb2dCLGNBQVYsR0FERSxDQUdGOztBQUNBLFVBQUk5ZSxXQUFXLENBQUMrZSxhQUFoQixFQUErQjtBQUM3QnJnQixRQUFBQSxTQUFTLENBQUNzZ0IsYUFBVixDQUF3QkMsTUFBTSxDQUFDQyxXQUEvQixFQUE0Q2xmLFdBQVcsQ0FBQ21mLEtBQXhEO0FBQ0Q7O0FBRUQzRCxNQUFBQSxpR0FBQSxDQUFxQzljLFNBQXJDO0FBQ0QsS0FURCxDQVNFLE9BQU93ZixHQUFQLEVBQVk7QUFDWnZCLE1BQUFBLFFBQVEsQ0FBQ2xCLDJEQUFTLENBQUNMLHNGQUF1QixDQUFDLHVCQUFELEVBQTBCOEMsR0FBMUIsQ0FBeEIsQ0FBVixDQUFSO0FBQ0FyUixNQUFBQSxPQUFPLENBQUMvRCxLQUFSLENBQWNvVixHQUFkO0FBQ0QsS0E1RWtDLENBOEVuQzs7O0FBQ0EsUUFBSXhCLElBQUksQ0FBQzljLFNBQUwsS0FBbUJtYywwREFBdkIsRUFBNEM7QUFDMUNuQixNQUFBQSw0RUFBc0IsQ0FBQ2xjLFNBQUQsQ0FBdEIsQ0FEMEMsQ0FHMUM7O0FBQ0EwZCxNQUFBQSxpR0FBQSxDQUF1QjFkLFNBQVMsQ0FBQ2UsR0FBakM7QUFDRCxLQUxELE1BS087QUFDTDJjLE1BQUFBLGlHQUFBO0FBQ0QsS0F0RmtDLENBd0ZuQzs7O0FBQ0EsUUFBSTFkLFNBQVMsQ0FBQzZnQixTQUFWLEtBQXdCLEVBQTVCLEVBQWdDO0FBQzlCckQsTUFBQUEsNERBQVksQ0FBQ3hkLFNBQVMsQ0FBQzZnQixTQUFYLENBQVo7QUFDRCxLQUZELE1BRU87QUFDTHJELE1BQUFBLDREQUFZLENBQUM3Vyw2RUFBRCxDQUFaO0FBQ0QsS0E3RmtDLENBK0ZuQzs7O0FBQ0FzWCxJQUFBQSxRQUFRLENBQUNqQixpRUFBc0IsQ0FBQ2hkLFNBQUQsQ0FBdkIsQ0FBUjtBQUNELEdBakdEO0FBa0dEO0FBRU0sU0FBU3NmLHdCQUFULENBQWtDQyxXQUFsQyxFQUFvRTtBQUN6RSxRQUFNelcsSUFBSSxHQUFHO0FBQ1hsQixJQUFBQSxJQUFJLEVBQUU7QUFDSm1YLE1BQUFBLE9BQU8sRUFBRSxLQURMO0FBRUpELE1BQUFBLFFBQVEsRUFBRSxLQUZOO0FBR0ppQyxNQUFBQSxLQUFLLEVBQUUsSUFISDtBQUlKQyxNQUFBQSxRQUFRLEVBQUU7QUFKTixLQURLO0FBT1hoaEIsSUFBQUEsU0FBUyxFQUFFO0FBQ1RxTyxNQUFBQSxLQUFLLEVBQUUsZUFERTtBQUVUNUwsTUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRXhCLFFBQUFBLElBQUksRUFBRSxXQURSO0FBRUVnZ0IsUUFBQUEsT0FBTyxFQUFFO0FBQUU1SixVQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxVQUFBQSxDQUFDLEVBQUUsQ0FBWDtBQUFjNEosVUFBQUEsQ0FBQyxFQUFFLEVBQWpCO0FBQXFCQyxVQUFBQSxDQUFDLEVBQUU7QUFBeEIsU0FGWDtBQUdFOVMsUUFBQUEsS0FBSyxFQUFFO0FBSFQsT0FETTtBQUZDO0FBUEEsR0FBYjs7QUFtQkEsTUFBSWtSLFdBQUosRUFBaUI7QUFDZnpXLElBQUFBLElBQUksQ0FBQ2xCLElBQUwsQ0FBVW9aLFFBQVYsR0FBcUIzZixRQUFRLENBQUNrZSxXQUFELEVBQWMsRUFBZCxDQUE3QjtBQUNEOztBQUVELFNBQU96VyxJQUFQO0FBQ0Q7QUFFRCxNQUFNdVYscUJBQXFCLEdBQUcsdUJBQTlCO0FBRU8sU0FBUytDLG1DQUFULENBQTZDakQsS0FBN0MsRUFBa0U7QUFDdkVMLEVBQUFBLGlFQUFBLENBQWdCTyxxQkFBaEIsRUFBdUNGLEtBQXZDO0FBQ0Q7QUFFTSxTQUFTRyxzQ0FBVCxHQUFrRDtBQUN2RFIsRUFBQUEsaUVBQUEsQ0FBYU8scUJBQWI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUEQ7QUFDQTtBQUVBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRU8sU0FBU3ZILFlBQVQsQ0FDTDlXLFNBREssRUFFTEssS0FGSyxFQUdMNlIsZ0JBSEssRUFJWTtBQUNqQixRQUFNK1AsV0FBVyxHQUFJMVgsS0FBRCxJQUFrQztBQUNwREEsSUFBQUEsS0FBSyxDQUFDMlgsY0FBTjtBQUNBdmMsSUFBQUEscUVBQUEsQ0FBd0I7QUFDdEJ3YyxNQUFBQSxTQUFTLEVBQUU5aEIsS0FBSyxDQUFDNkQ7QUFESyxLQUF4QjtBQUdELEdBTEQ7O0FBT0EsUUFBTWtlLFdBQVcsR0FBSTdYLEtBQUQsSUFBa0M7QUFDcERBLElBQUFBLEtBQUssQ0FBQzJYLGNBQU47QUFDQXZjLElBQUFBLHFFQUFBLENBQXdCO0FBQ3RCMGMsTUFBQUEsU0FBUyxFQUFFaGlCLEtBQUssQ0FBQzZEO0FBREssS0FBeEI7QUFHRCxHQUxEOztBQU9BLFFBQU1vZSxZQUFZLEdBQUkvWCxLQUFELElBQWtDO0FBQ3JEQSxJQUFBQSxLQUFLLENBQUMyWCxjQUFOO0FBQ0FOLElBQUFBLDhFQUFVLENBQUM1aEIsU0FBRCxFQUFZSyxLQUFaLENBQVY7QUFDRCxHQUhEOztBQUtBLFFBQU1raUIsaUJBQWlCLEdBQUloWSxLQUFELElBQWtDO0FBQzFEQSxJQUFBQSxLQUFLLENBQUMyWCxjQUFOO0FBQ0FWLElBQUFBLG1GQUFlLENBQUN4aEIsU0FBRCxFQUFZSyxLQUFaLENBQWY7QUFDRCxHQUhEOztBQUtBLFFBQU1taUIsb0JBQW9CLEdBQUlqWSxLQUFELElBQWtDO0FBQzdEQSxJQUFBQSxLQUFLLENBQUMyWCxjQUFOO0FBQ0FMLElBQUFBLHNGQUFrQixDQUFDeGhCLEtBQUQsQ0FBbEI7QUFDRCxHQUhEOztBQUtBLFFBQU1vaUIsY0FBYyxHQUFJNUosR0FBRCxJQUFrQjtBQUN2Q2xULElBQUFBLHFFQUFBLENBQXdCO0FBQ3RCc1AsTUFBQUEsT0FBTyxFQUFFNVUsS0FBSyxDQUFDNkQsRUFETztBQUV0QmdSLE1BQUFBLFVBQVUsRUFBRTJEO0FBRlUsS0FBeEI7QUFJRCxHQUxEOztBQU9BLFFBQU02SixNQUFNLEdBQUluWSxLQUFELElBQWtDO0FBQy9DQSxJQUFBQSxLQUFLLENBQUMyWCxjQUFOO0FBQ0QsR0FGRDs7QUFJQSxRQUFNUyxnQkFBZ0IsR0FBSXBZLEtBQUQsSUFBa0M7QUFDekRBLElBQUFBLEtBQUssQ0FBQzJYLGNBQU47QUFDQVIsSUFBQUEsa0ZBQWMsQ0FBQzFoQixTQUFELEVBQVlLLEtBQVosQ0FBZDtBQUNELEdBSEQ7O0FBS0EsUUFBTXVpQixXQUFXLEdBQUlyWSxLQUFELElBQWtDO0FBQ3BEQSxJQUFBQSxLQUFLLENBQUMyWCxjQUFOO0FBQ0FULElBQUFBLDZFQUFTLENBQUNwaEIsS0FBRCxDQUFUO0FBQ0QsR0FIRDs7QUFLQSxRQUFNd2lCLGFBQWEsR0FBSXRZLEtBQUQsSUFBa0M7QUFDdERBLElBQUFBLEtBQUssQ0FBQzJYLGNBQU47QUFDQVAsSUFBQUEsK0VBQVcsQ0FBQzNoQixTQUFELEVBQVlLLEtBQVosRUFBbUIsSUFBbkIsQ0FBWDtBQUNELEdBSEQ7O0FBS0EsUUFBTXlpQixtQkFBbUIsR0FBSXZZLEtBQUQsSUFBa0M7QUFDNURBLElBQUFBLEtBQUssQ0FBQzJYLGNBQU47QUFDQSxVQUFNYSxlQUFlLEdBQ25CeFksS0FBSyxDQUFDeVksT0FBTixJQUFpQnpZLEtBQUssQ0FBQzBZLE9BQXZCLEdBQWtDL0QsR0FBRCxJQUFpQnFCLE1BQU0sQ0FBQzJDLElBQVAsQ0FBYSxHQUFFdmMsaUVBQWlCLEdBQUV1WSxHQUFJLEVBQXRDLENBQWxELEdBQTZGNVYsU0FEL0Y7QUFFQXdVLElBQUFBLDJEQUFBLENBQWVpRSxzRUFBaUIsQ0FBQzFoQixLQUFELEVBQVE7QUFBRWtoQixNQUFBQSxnQkFBRjtBQUFvQi9hLE1BQUFBLFVBQXBCO0FBQWdDd2IsTUFBQUEsYUFBaEM7QUFBK0NlLE1BQUFBO0FBQS9DLEtBQVIsQ0FBaEM7QUFDRCxHQUxEOztBQU9BLFFBQU0zTSxJQUFxQixHQUFHLEVBQTlCOztBQUVBLE1BQUksQ0FBQy9WLEtBQUssQ0FBQ2lELFNBQVgsRUFBc0I7QUFDcEI4UyxJQUFBQSxJQUFJLENBQUNtRixJQUFMLENBQVU7QUFDUnhRLE1BQUFBLElBQUksRUFBRSxNQURFO0FBRVJ3TCxNQUFBQSxhQUFhLEVBQUUsS0FGUDtBQUdSakIsTUFBQUEsT0FBTyxFQUFFMk0sV0FIRDtBQUlSekwsTUFBQUEsUUFBUSxFQUFFO0FBSkYsS0FBVjtBQU1EOztBQUVELE1BQUl4VyxTQUFTLENBQUNvakIsWUFBVixDQUF1Qi9pQixLQUF2QixLQUFpQyxDQUFDQSxLQUFLLENBQUNpRCxTQUE1QyxFQUF1RDtBQUNyRDhTLElBQUFBLElBQUksQ0FBQ21GLElBQUwsQ0FBVTtBQUNSeFEsTUFBQUEsSUFBSSxFQUFFLE1BREU7QUFFUndMLE1BQUFBLGFBQWEsRUFBRSxNQUZQO0FBR1JqQixNQUFBQSxPQUFPLEVBQUU4TSxXQUhEO0FBSVI1TCxNQUFBQSxRQUFRLEVBQUU7QUFKRixLQUFWO0FBTUQ7O0FBRURKLEVBQUFBLElBQUksQ0FBQ21GLElBQUwsQ0FBVTtBQUNSeFEsSUFBQUEsSUFBSSxFQUFFLE9BREU7QUFFUndMLElBQUFBLGFBQWEsRUFBRSxXQUZQO0FBR1JqQixJQUFBQSxPQUFPLEVBQUVnTixZQUhEO0FBSVI5TCxJQUFBQSxRQUFRLEVBQUU7QUFKRixHQUFWOztBQU9BLE1BQUlqUCxxRkFBQSxNQUFtQyxFQUFFbEgsS0FBSyxDQUFDc0MsTUFBTixJQUFnQnRDLEtBQUssQ0FBQ3NDLE1BQU4sQ0FBYWlGLElBQWIsQ0FBa0IyRyxhQUFwQyxDQUF2QyxFQUEyRjtBQUN6RjZILElBQUFBLElBQUksQ0FBQ21GLElBQUwsQ0FBVTtBQUNSeFEsTUFBQUEsSUFBSSxFQUFFLFNBREU7QUFFUndMLE1BQUFBLGFBQWEsRUFBRSxTQUZQO0FBR1JDLE1BQUFBLFFBQVEsRUFBRSxHQUhGO0FBSVJsQixNQUFBQSxPQUFPLEVBQUV3TjtBQUpELEtBQVY7QUFNRDs7QUFFRCxRQUFNUSxXQUE0QixHQUFHLEVBQXJDLENBbkdpQixDQXFHakI7O0FBQ0EsTUFBSWpqQixLQUFLLENBQUNzQyxNQUFOLElBQWdCLENBQUN0QyxLQUFLLENBQUNzQyxNQUFOLENBQWFpRixJQUFiLENBQWtCMkcsYUFBdkMsRUFBc0Q7QUFDcEQrVSxJQUFBQSxXQUFXLENBQUMvSCxJQUFaLENBQWlCO0FBQ2Z4USxNQUFBQSxJQUFJLEVBQUUsTUFEUztBQUVmdUssTUFBQUEsT0FBTyxFQUFHb0QsQ0FBRCxJQUE4QitKLGNBQWMsQ0FBQyxNQUFEO0FBRnRDLEtBQWpCOztBQUtBLFFBQUl6aUIsU0FBUyxDQUFDNEgsSUFBVixDQUFlQyxPQUFuQixFQUE0QjtBQUMxQnliLE1BQUFBLFdBQVcsQ0FBQy9ILElBQVosQ0FBaUI7QUFDZnhRLFFBQUFBLElBQUksRUFBRSxPQURTO0FBRWZ1SyxRQUFBQSxPQUFPLEVBQUdvRCxDQUFELElBQThCK0osY0FBYyxDQUFDLE9BQUQ7QUFGdEMsT0FBakI7QUFJRDtBQUNGOztBQUVEYSxFQUFBQSxXQUFXLENBQUMvSCxJQUFaLENBQWlCO0FBQ2Z4USxJQUFBQSxJQUFJLEVBQUUsWUFEUztBQUVmdUssSUFBQUEsT0FBTyxFQUFHb0QsQ0FBRCxJQUE4QitKLGNBQWMsQ0FBQyxNQUFEO0FBRnRDLEdBQWpCO0FBS0FyTSxFQUFBQSxJQUFJLENBQUNtRixJQUFMLENBQVU7QUFDUnRhLElBQUFBLElBQUksRUFBRSxTQURFO0FBRVI4SixJQUFBQSxJQUFJLEVBQUUsU0FGRTtBQUdSd0wsSUFBQUEsYUFBYSxFQUFFLGFBSFA7QUFJUmpCLElBQUFBLE9BQU8sRUFBR29ELENBQUQsSUFBOEIrSixjQUFjLEVBSjdDO0FBS1JqTSxJQUFBQSxRQUFRLEVBQUUsR0FMRjtBQU1SQyxJQUFBQSxPQUFPLEVBQUU2TTtBQU5ELEdBQVY7QUFTQSxRQUFNN00sT0FBd0IsR0FBRyxFQUFqQzs7QUFFQSxNQUFJelcsU0FBUyxDQUFDb2pCLFlBQVYsQ0FBdUIvaUIsS0FBdkIsS0FBaUMsRUFBRUEsS0FBSyxDQUFDZ0QsU0FBTixJQUFtQmhELEtBQUssQ0FBQ2lELFNBQTNCLENBQXJDLEVBQTRFO0FBQzFFbVQsSUFBQUEsT0FBTyxDQUFDOEUsSUFBUixDQUFhO0FBQ1h4USxNQUFBQSxJQUFJLEVBQUUsV0FESztBQUVYdUssTUFBQUEsT0FBTyxFQUFFcU4sZ0JBRkU7QUFHWG5NLE1BQUFBLFFBQVEsRUFBRTtBQUhDLEtBQWI7QUFNQUMsSUFBQUEsT0FBTyxDQUFDOEUsSUFBUixDQUFhO0FBQ1h4USxNQUFBQSxJQUFJLEVBQUUsTUFESztBQUVYdUssTUFBQUEsT0FBTyxFQUFFc047QUFGRSxLQUFiOztBQUtBLFFBQUlkLDJGQUF3QixDQUFDemhCLEtBQUQsQ0FBNUIsRUFBcUM7QUFDbkNvVyxNQUFBQSxPQUFPLENBQUM4RSxJQUFSLENBQWE7QUFDWHhRLFFBQUFBLElBQUksRUFBRSxzQkFESztBQUVYdUssUUFBQUEsT0FBTyxFQUFFa047QUFGRSxPQUFiO0FBSUQsS0FMRCxNQUtPO0FBQ0wvTCxNQUFBQSxPQUFPLENBQUM4RSxJQUFSLENBQWE7QUFDWHhRLFFBQUFBLElBQUksRUFBRSxzQkFESztBQUVYdUssUUFBQUEsT0FBTyxFQUFFaU47QUFGRSxPQUFiO0FBSUQ7QUFDRixHQTNKZ0IsQ0E2SmpCOzs7QUFDQSxNQUFJclEsZ0JBQUosRUFBc0I7QUFDcEIsVUFBTXFSLEtBQUssR0FBR3JSLGdCQUFnQixDQUFDc1IsUUFBakIsRUFBZDtBQUNBLFVBQU1DLFNBQW9CLEdBQUdGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsSUFBL0M7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBR0gsU0FBUyxDQUFDSSxlQUFWLEVBQXpCOztBQUVBLFNBQUssTUFBTUMsSUFBWCxJQUFtQkYsZ0JBQW5CLEVBQXFDO0FBQ25DLFlBQU1HLFNBQXdCLEdBQUc7QUFDL0JoWixRQUFBQSxJQUFJLEVBQUUrWSxJQUFJLENBQUMvWSxJQURvQjtBQUUvQmdLLFFBQUFBLElBQUksRUFBRStPLElBQUksQ0FBQy9PLElBRm9CO0FBRy9CeUIsUUFBQUEsUUFBUSxFQUFFc04sSUFBSSxDQUFDdE47QUFIZ0IsT0FBakM7O0FBTUEsVUFBSXNOLElBQUksQ0FBQ0UsS0FBVCxFQUFnQjtBQUNkRCxRQUFBQSxTQUFTLENBQUN6TyxPQUFWLEdBQW9CLE1BQU07QUFDeEJpTyxVQUFBQSxLQUFLLENBQUNVLEtBQU4sQ0FBWUgsSUFBSSxDQUFDRSxLQUFqQixFQUF3QjtBQUFFTCxZQUFBQSxJQUFJLEVBQUVGO0FBQVIsV0FBeEI7QUFDRCxTQUZEO0FBR0Q7O0FBRURoTixNQUFBQSxPQUFPLENBQUM4RSxJQUFSLENBQWF3SSxTQUFiO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLENBQUMxakIsS0FBSyxDQUFDaUQsU0FBUCxJQUFvQm1ULE9BQU8sQ0FBQ3ZSLE1BQWhDLEVBQXdDO0FBQ3RDa1IsSUFBQUEsSUFBSSxDQUFDbUYsSUFBTCxDQUFVO0FBQ1J0YSxNQUFBQSxJQUFJLEVBQUUsU0FERTtBQUVSOEosTUFBQUEsSUFBSSxFQUFFLFNBRkU7QUFHUndMLE1BQUFBLGFBQWEsRUFBRSxNQUhQO0FBSVJFLE1BQUFBLE9BSlE7QUFLUm5CLE1BQUFBLE9BQU8sRUFBRW9OO0FBTEQsS0FBVjtBQU9EOztBQUVELE1BQUkxaUIsU0FBUyxDQUFDb2pCLFlBQVYsQ0FBdUIvaUIsS0FBdkIsS0FBaUMsQ0FBQ0EsS0FBSyxDQUFDaUQsU0FBeEMsSUFBcUQsQ0FBQ2pELEtBQUssQ0FBQ2dELFNBQWhFLEVBQTJFO0FBQ3pFK1MsSUFBQUEsSUFBSSxDQUFDbUYsSUFBTCxDQUFVO0FBQUV0YSxNQUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQjhKLE1BQUFBLElBQUksRUFBRTtBQUF6QixLQUFWO0FBRUFxTCxJQUFBQSxJQUFJLENBQUNtRixJQUFMLENBQVU7QUFDUnhRLE1BQUFBLElBQUksRUFBRSxRQURFO0FBRVJ3TCxNQUFBQSxhQUFhLEVBQUUsV0FGUDtBQUdSakIsTUFBQUEsT0FBTyxFQUFFdU4sYUFIRDtBQUlSck0sTUFBQUEsUUFBUSxFQUFFO0FBSkYsS0FBVjtBQU1EOztBQUVELFNBQU9KLElBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuT0Q7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU3ZQLGdCQUFULENBQTBCeEcsS0FBMUIsRUFBNkNMLFNBQTdDLEVBQW1GO0FBQ3hGLFFBQU04SSxJQUFJLEdBQUdzYiwrRUFBc0IsQ0FBQy9qQixLQUFLLENBQUN1TyxZQUFQLENBQW5DO0FBQ0EsUUFBTTBWLE1BQU0sR0FBRyxJQUFJRCw0RkFBSixFQUFmO0FBQ0EsUUFBTW5iLE9BQU8sR0FBRztBQUFFbEosSUFBQUEsU0FBRjtBQUFha0wsSUFBQUEsS0FBSyxFQUFFbEYsa0VBQW1CO0FBQXZDLEdBQWhCO0FBQ0EsUUFBTXVlLGdCQUFnQixHQUFHRCxNQUFNLENBQUNFLE9BQVAsQ0FBZXRiLE9BQWYsSUFBMEJvYixNQUFNLENBQUNHLHdCQUFQLENBQWdDemtCLFNBQWhDLEVBQTJDSyxLQUFLLENBQUM2RCxFQUFqRCxDQUExQixHQUFpRixFQUExRztBQUNBLFFBQU13Z0IsV0FBVyxHQUFHLENBQUMsSUFBSVAseURBQUosQ0FBbUJJLGdCQUFuQixDQUFELENBQXBCO0FBQ0EsUUFBTTlhLFFBQVEsR0FBR2hELCtEQUF1QixDQUFDcEcsS0FBRCxFQUFRbUcsNkRBQVUsR0FBR21ELFNBQWIsRUFBUixDQUF4QztBQUVBLFNBQU87QUFDTEEsSUFBQUEsU0FBUyxFQUFFRixRQUFRLENBQUNFLFNBRGY7QUFFTDVKLElBQUFBLEtBQUssRUFBRWtHLDREQUZGO0FBR0w4QyxJQUFBQSxNQUFNLEVBQUVtYixrRUFBbUIsQ0FBQztBQUMxQnBiLE1BQUFBLElBRDBCO0FBRTFCRixNQUFBQSxXQUFXLEVBQUU7QUFDWCtiLFFBQUFBLFFBQVEsRUFBRSxFQURDO0FBRVhuTCxRQUFBQSxTQUFTLEVBQUU7QUFGQSxPQUZhO0FBTTFCckosTUFBQUEsZ0JBQWdCLEVBQUU5UCxLQUFLLENBQUM4UCxnQkFORTtBQU8xQnlVLE1BQUFBLG1CQUFtQixFQUFFdmtCLEtBQUssQ0FBQ3NDLE1BQU4sQ0FBY2lpQixtQkFQVDtBQVExQnhWLE1BQUFBLEtBQUssRUFBRXpJLDBEQVJtQjtBQVMxQm1lLE1BQUFBLFFBQVEsRUFBRTlrQixTQUFTLENBQUM4SixXQUFWO0FBVGdCLEtBQUQsQ0FIdEI7QUFjTDRhLElBQUFBO0FBZEssR0FBUDtBQWdCRDs7Ozs7Ozs7Ozs7QUNoQ00sSUFBS3ZRLFVBQVo7O1dBQVlBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0dBQUFBLGVBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0NaO0FBYUE7O0FBaUNBO0FBQ0E7QUFDQTtBQUNPLE1BQU1nUixxQkFBcUIsR0FBSXJpQixLQUFELElBQXNFO0FBQ3pHLFFBQU1rTyxLQUFLLEdBQUdsTyxLQUFLLENBQUMrWSxLQUFOLENBQVk3SyxLQUExQjs7QUFDQSxNQUFJLENBQUNBLEtBQUQsSUFBVUEsS0FBSyxDQUFDOUwsTUFBTixLQUFpQixDQUEvQixFQUFrQztBQUNoQyxXQUFPb0UsU0FBUDtBQUNEOztBQUVELFNBQU87QUFDTHFMLElBQUFBLFFBQVEsRUFBR3hFLGdCQUFELElBQTJDO0FBQ25ELFlBQU1rRCxVQUF1QyxHQUFHLEVBQWhEOztBQUVBLFVBQUl2USxLQUFLLENBQUNzaUIsSUFBVixFQUFnQjtBQUNkLGNBQU07QUFBRUMsVUFBQUE7QUFBRixZQUFnQnZpQixLQUFLLENBQUNzaUIsSUFBNUI7QUFFQS9SLFFBQUFBLFVBQVUsQ0FBQyxVQUFELENBQVYsR0FBeUI7QUFDdkJ2USxVQUFBQSxLQUFLLEVBQUU7QUFDTHdZLFlBQUFBLElBQUksRUFBRStKLFNBQVMsQ0FBQy9KLElBRFg7QUFFTGdLLFlBQUFBLEtBQUssRUFBRUQsU0FBUyxDQUFDQztBQUZaLFdBRGdCO0FBS3ZCdmEsVUFBQUEsSUFBSSxFQUFFO0FBTGlCLFNBQXpCO0FBUUEsY0FBTThRLEtBQUssR0FBRy9ZLEtBQUssQ0FBQ3lpQixRQUFOLEtBQW1CamMsU0FBbkIsR0FBK0IrYixTQUFTLENBQUN2SixNQUFWLENBQWlCaFosS0FBSyxDQUFDeWlCLFFBQXZCLENBQS9CLEdBQWtFamMsU0FBaEY7O0FBRUEsWUFBSXVTLEtBQUosRUFBVztBQUNUeEksVUFBQUEsVUFBVSxDQUFDLFNBQUQsQ0FBVixHQUF3QjtBQUN0QnZRLFlBQUFBLEtBQUssRUFBRTtBQUNMd1ksY0FBQUEsSUFBSSxFQUFFTyxLQUFLLENBQUNQLElBRFA7QUFFTGtLLGNBQUFBLE1BQU0sRUFBRTNKLEtBQUssQ0FBQzJKO0FBRlQsYUFEZTtBQUt0QnphLFlBQUFBLElBQUksRUFBRTtBQUxnQixXQUF4Qjs7QUFRQSxjQUFJakksS0FBSyxDQUFDMmlCLFFBQU4sS0FBbUJuYyxTQUFuQixJQUFnQ3hHLEtBQUssQ0FBQzJpQixRQUFOLElBQWtCLENBQXRELEVBQXlEO0FBQ3ZELGtCQUFNO0FBQUVDLGNBQUFBO0FBQUYsZ0JBQWdCVCwyREFBWSxDQUFDSSxTQUFELENBQWxDO0FBQ0FoUyxZQUFBQSxVQUFVLENBQUMsU0FBRCxDQUFWLEdBQXdCO0FBQ3RCdlEsY0FBQUEsS0FBSyxFQUFFO0FBQ0w2aUIsZ0JBQUFBLEdBQUcsRUFBRTlKLEtBQUssQ0FBQzlDLE1BQU4sQ0FBYTBGLEdBQWIsQ0FBaUIzYixLQUFLLENBQUMyaUIsUUFBdkIsQ0FEQTtBQUVMRyxnQkFBQUEsT0FBTyxFQUFFOWlCLEtBQUssQ0FBQytpQixPQUFOLENBQWNELE9BRmxCO0FBR0w3YSxnQkFBQUEsSUFBSSxFQUFFZ2EscUVBQXNCLENBQUNqaUIsS0FBSyxDQUFDK2lCLE9BQVAsQ0FIdkI7QUFJTGpiLGdCQUFBQSxJQUFJLEVBQUU4YSxTQUFTLEdBQUdBLFNBQVMsQ0FBQzNNLE1BQVYsQ0FBaUIwRixHQUFqQixDQUFxQjNiLEtBQUssQ0FBQzJpQixRQUEzQixDQUFILEdBQTBDbmM7QUFKcEQsZUFEZTtBQU90QnlCLGNBQUFBLElBQUksRUFBRTtBQVBnQixhQUF4QjtBQVNELFdBcEJRLENBc0JUOzs7QUFDQSxjQUFJakksS0FBSyxDQUFDc2lCLElBQVYsRUFBZ0I7QUFDZC9SLFlBQUFBLFVBQVUsQ0FBQyxRQUFELENBQVYsR0FBdUI7QUFDckJ2USxjQUFBQSxLQUFLLEVBQUU7QUFDTHdZLGdCQUFBQSxJQUFJLEVBQUUrSixTQUFTLENBQUMvSixJQURYO0FBRUxnSyxnQkFBQUEsS0FBSyxFQUFFRCxTQUFTLENBQUNDLEtBRlo7QUFHTHhKLGdCQUFBQSxNQUFNLEVBQUVrSix5RUFBMEIsQ0FBQztBQUNqQ2xXLGtCQUFBQSxLQUFLLEVBQUV1VyxTQUQwQjtBQUVqQ0ksa0JBQUFBLFFBQVEsRUFBRTNpQixLQUFLLENBQUMyaUI7QUFGaUIsaUJBQUQ7QUFIN0IsZUFEYztBQVNyQjFhLGNBQUFBLElBQUksRUFBRTtBQVRlLGFBQXZCO0FBV0Q7QUFDRixTQXBDRCxNQW9DTztBQUNMO0FBQ0FzSSxVQUFBQSxVQUFVLENBQUMsU0FBRCxDQUFWLEdBQXdCO0FBQ3RCdlEsWUFBQUEsS0FBSyxFQUFFO0FBQ0w2aUIsY0FBQUEsR0FBRyxFQUFFN2lCLEtBQUssQ0FBQytpQixPQUFOLENBQWNELE9BRGQ7QUFFTEEsY0FBQUEsT0FBTyxFQUFFOWlCLEtBQUssQ0FBQytpQixPQUFOLENBQWNELE9BRmxCO0FBR0w3YSxjQUFBQSxJQUFJLEVBQUVnYSxxRUFBc0IsQ0FBQ2ppQixLQUFLLENBQUMraUIsT0FBUCxDQUh2QjtBQUlMQyxjQUFBQSxJQUFJLEVBQUVoakIsS0FBSyxDQUFDd1k7QUFKUCxhQURlO0FBT3RCdlEsWUFBQUEsSUFBSSxFQUFFO0FBUGdCLFdBQXhCO0FBU0Q7QUFDRixPQTdERCxNQTZETztBQUNMb0QsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQnRMLEtBQXJCO0FBQ0Q7O0FBRUQsWUFBTTJSLE9BQTRCLEdBQUcsQ0FBQzNSLEtBQUQsRUFBZ0JpakIsSUFBaEIsRUFBOENDLEdBQTlDLEtBQTBFO0FBQzdHLGNBQU1DLFNBQXFCLHFCQUNyQjVTLFVBRHFCLEVBRXRCMFMsSUFGc0IsQ0FBM0I7QUFJQSxlQUFPNVYsZ0JBQWdCLENBQUNyTixLQUFELEVBQVFtakIsU0FBUixFQUFtQkQsR0FBbkIsQ0FBdkI7QUFDRCxPQU5EOztBQVFBLGFBQU9oVixLQUFLLENBQUNuQyxHQUFOLENBQVdnRyxJQUFELElBQW9CO0FBQ25DLGVBQU9xUSxxREFBVSxHQUFHZ0Isa0JBQWIsQ0FBZ0NyUixJQUFoQyxFQUFzQ0osT0FBdEMsRUFBK0MzUixLQUEvQyxDQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7QUFoRkksR0FBUDtBQWtGRCxDQXhGTTtBQTBGQSxNQUFNNFAscUJBQXFCLEdBQUlyUyxLQUFELElBQWtFO0FBQ3JHLFFBQU0yUSxLQUFLLEdBQUczUSxLQUFLLENBQUMyUSxLQUFwQjs7QUFFQSxNQUFJLENBQUNBLEtBQUQsSUFBVUEsS0FBSyxDQUFDOUwsTUFBTixLQUFpQixDQUEvQixFQUFrQztBQUNoQyxXQUFPb0UsU0FBUDtBQUNEOztBQUVELFNBQU87QUFDTHFMLElBQUFBLFFBQVEsRUFBRSxNQUFNO0FBQ2QsYUFBTzNELEtBQUssQ0FBQ25DLEdBQU4sQ0FBV2dHLElBQUQsSUFBVTtBQUN6QixlQUFPcVEscURBQVUsR0FBR2dCLGtCQUFiLENBQWdDclIsSUFBaEMsRUFBc0N4VSxLQUFLLENBQUM4UCxnQkFBNUMsRUFBOEQ5UCxLQUE5RCxDQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7QUFMSSxHQUFQO0FBT0QsQ0FkTTs7Ozs7Ozs7Ozs7QUN4SUEsU0FBU2dSLHFCQUFULENBQStCdFIsS0FBL0IsRUFBa0RvZSxLQUFsRCxFQUE2RjtBQUNsRyxTQUFPcGUsS0FBSyxDQUFDMEMsTUFBTixDQUFhMGIsS0FBSyxDQUFDbmMsR0FBbkIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7QUNORDtBQVFPLE1BQU0rRSw4QkFBOEIsR0FBRyxDQUM1QzBCLEtBRDRDLEVBRTVDQyxLQUY0QyxFQUc1Q0UsV0FINEMsS0FJdEI7QUFDdEIsUUFBTTtBQUFFNFEsSUFBQUE7QUFBRixNQUFnQjVRLFdBQXRCO0FBQ0EsUUFBTThRLFlBQVksR0FBRzlRLFdBQVcsQ0FBQzRRLFNBQVosQ0FBc0JHLFNBQXRCLENBQWlDRSxRQUFELElBQWM7QUFDakUsV0FBT0EsUUFBUSxDQUFDaUIsT0FBVCxDQUFpQjVXLEVBQWpCLEtBQXdCK1UsZ0VBQXhCLElBQWlEWSxRQUFRLENBQUNpQixPQUFULENBQWlCNVIsT0FBakIsS0FBNkJULEtBQXJGO0FBQ0QsR0FGb0IsQ0FBckI7O0FBSUEsTUFBSWlSLFlBQVksR0FBRyxDQUFuQixFQUFzQjtBQUNwQiw2QkFDSzlRLFdBREw7QUFFRTRRLE1BQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUc1USxXQUFXLENBQUM0USxTQUFoQixFQUEyQk0sY0FBYyxDQUFDclIsS0FBRCxFQUFRQyxLQUFSLENBQXpDO0FBRmI7QUFJRDs7QUFFRCxRQUFNdVIsYUFBYSxHQUFHQyxLQUFLLENBQUN6UCxJQUFOLENBQVcrTyxTQUFYLENBQXRCO0FBQ0EsUUFBTVksUUFBUSxHQUFHSCxhQUFhLENBQUNQLFlBQUQsQ0FBOUI7QUFDQSxRQUFNMk0sYUFBYSxHQUFHak0sUUFBUSxDQUFDYyxVQUFULENBQW9CdkIsU0FBcEIsQ0FBK0J5QixDQUFELElBQU9BLENBQUMsQ0FBQ2xYLEVBQUYsS0FBUyxPQUE5QyxDQUF0Qjs7QUFFQSxNQUFJbWlCLGFBQWEsR0FBRyxDQUFwQixFQUF1QjtBQUNyQnBNLElBQUFBLGFBQWEsQ0FBQ1AsWUFBRCxDQUFiLHFCQUNLVSxRQURMO0FBRUVjLE1BQUFBLFVBQVUsRUFBRSxDQUFDLEdBQUdkLFFBQVEsQ0FBQ2MsVUFBYixFQUF5Qm9MLGNBQWMsQ0FBQzVkLEtBQUQsQ0FBdkM7QUFGZDtBQUtBLDZCQUNLRSxXQURMO0FBRUU0USxNQUFBQSxTQUFTLEVBQUVTO0FBRmI7QUFJRDs7QUFFRCxRQUFNc00sY0FBYyxHQUFHck0sS0FBSyxDQUFDelAsSUFBTixDQUFXMlAsUUFBUSxDQUFDYyxVQUFwQixDQUF2QjtBQUNBcUwsRUFBQUEsY0FBYyxDQUFDRixhQUFELENBQWQsR0FBZ0NDLGNBQWMsQ0FBQzVkLEtBQUQsQ0FBOUM7QUFFQXVSLEVBQUFBLGFBQWEsQ0FBQ1AsWUFBRCxDQUFiLHFCQUNLVSxRQURMO0FBRUVjLElBQUFBLFVBQVUsRUFBRXFMO0FBRmQ7QUFLQSwyQkFDSzNkLFdBREw7QUFFRTRRLElBQUFBLFNBQVMsRUFBRVM7QUFGYjtBQUlELENBN0NNOztBQStDUCxNQUFNSCxjQUFjLEdBQUcsQ0FBQ3JSLEtBQUQsRUFBZ0JDLEtBQWhCLEtBQXNEO0FBQzNFLFNBQU87QUFDTG9TLElBQUFBLE9BQU8sRUFBRTtBQUNQNVcsTUFBQUEsRUFBRSxFQUFFK1UsZ0VBREc7QUFFUC9QLE1BQUFBLE9BQU8sRUFBRVQ7QUFGRixLQURKO0FBS0x5UyxJQUFBQSxVQUFVLEVBQUUsQ0FBQ29MLGNBQWMsQ0FBQzVkLEtBQUQsQ0FBZjtBQUxQLEdBQVA7QUFPRCxDQVJEOztBQVVBLE1BQU00ZCxjQUFjLEdBQUk1ZCxLQUFELElBQXVDO0FBQzVELFNBQU87QUFDTHhFLElBQUFBLEVBQUUsRUFBRSxPQURDO0FBRUxwQixJQUFBQSxLQUFLLEVBQUU7QUFDTCtGLE1BQUFBLElBQUksRUFBRXNkLGlFQUREO0FBRUxNLE1BQUFBLFVBQVUsRUFBRS9kO0FBRlA7QUFGRixHQUFQO0FBT0QsQ0FSRDs7Ozs7Ozs7Ozs7QUNqRU8sU0FBU3BCLFdBQVQsQ0FBcUJvZixJQUFyQixFQUE0QztBQUNqRCxTQUFPLDBCQUEwQkMsSUFBMUIsQ0FBK0JELElBQS9CLGFBQStCQSxJQUEvQix1QkFBK0JBLElBQUksQ0FBRW5SLFdBQU4sRUFBL0IsQ0FBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbnRhaW5lcnMvU29sb1BhbmVsUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL0Rhc2hib2FyZFBhbmVsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvTGF6eUxvYWRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsQ2hyb21lLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxDaHJvbWVBbmd1bGFyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbEhlYWRlci9QYW5lbEhlYWRlckNvcm5lci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyTG9hZGluZ0luZGljYXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyTWVudS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyTWVudVByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXJNZW51VHJpZ2dlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyTWVudVdyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbEhlYWRlci9QYW5lbEhlYWRlck5vdGljZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyTm90aWNlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1Nlcmllc1Zpc2liaWxpdHlDb25maWdGYWN0b3J5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9hbmFseXRpY3NQcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL2luaXREYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3V0aWxzL2dldFBhbmVsTWVudS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvdXRpbHMvbG9hZFNuYXBzaG90RGF0YS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9pbnNwZWN0b3IvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGFuZWwvcGFuZWxsaW5rcy9saW5rU3VwcGxpZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BhbmVsL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL3RpbWVzZXJpZXMvb3ZlcnJpZGVzL2NvbG9yU2VyaWVzQ29uZmlnRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9yb3V0ZXMvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEF1dG9TaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcbmltcG9ydCB7IERhc2hib2FyZFBhbmVsIH0gZnJvbSAnLi4vZGFzaGdyaWQvRGFzaGJvYXJkUGFuZWwnO1xuaW1wb3J0IHsgaW5pdERhc2hib2FyZCB9IGZyb20gJy4uL3N0YXRlL2luaXREYXNoYm9hcmQnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCwgUGFuZWxNb2RlbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRQYWdlUm91dGVQYXJhbXMge1xuICB1aWQ/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHNsdWc/OiBzdHJpbmc7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgZGFzaGJvYXJkOiBzdGF0ZS5kYXNoYm9hcmQuZ2V0TW9kZWwoKSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGluaXREYXNoYm9hcmQsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczxEYXNoYm9hcmRQYWdlUm91dGVQYXJhbXMsIHsgcGFuZWxJZDogc3RyaW5nIH0+ICZcbiAgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBwYW5lbDogUGFuZWxNb2RlbCB8IG51bGw7XG4gIG5vdEZvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgU29sb1BhbmVsUGFnZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIHBhbmVsOiBudWxsLFxuICAgIG5vdEZvdW5kOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG1hdGNoLCByb3V0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMucHJvcHMuaW5pdERhc2hib2FyZCh7XG4gICAgICB1cmxTbHVnOiBtYXRjaC5wYXJhbXMuc2x1ZyxcbiAgICAgIHVybFVpZDogbWF0Y2gucGFyYW1zLnVpZCxcbiAgICAgIHVybFR5cGU6IG1hdGNoLnBhcmFtcy50eXBlLFxuICAgICAgcm91dGVOYW1lOiByb3V0ZS5yb3V0ZU5hbWUsXG4gICAgICBmaXhVcmw6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UGFuZWxJZCgpOiBudW1iZXIge1xuICAgIHJldHVybiBwYXJzZUludCh0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zLnBhbmVsSWQgPz8gJzAnLCAxMCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkYXNoYm9hcmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB3ZSBqdXN0IGdvdCBhIG5ldyBkYXNoYm9hcmRcbiAgICBpZiAoIXByZXZQcm9wcy5kYXNoYm9hcmQgfHwgcHJldlByb3BzLmRhc2hib2FyZC51aWQgIT09IGRhc2hib2FyZC51aWQpIHtcbiAgICAgIGNvbnN0IHBhbmVsID0gZGFzaGJvYXJkLmdldFBhbmVsQnlVcmxJZCh0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zLnBhbmVsSWQpO1xuXG4gICAgICBpZiAoIXBhbmVsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBub3RGb3VuZDogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGFuZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U29sb1BhbmVsXG4gICAgICAgIGRhc2hib2FyZD17dGhpcy5wcm9wcy5kYXNoYm9hcmR9XG4gICAgICAgIG5vdEZvdW5kPXt0aGlzLnN0YXRlLm5vdEZvdW5kfVxuICAgICAgICBwYW5lbD17dGhpcy5zdGF0ZS5wYW5lbH1cbiAgICAgICAgcGFuZWxJZD17dGhpcy5nZXRQYW5lbElkKCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTb2xvUGFuZWxQcm9wcyBleHRlbmRzIFN0YXRlIHtcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbCB8IG51bGw7XG4gIHBhbmVsSWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFNvbG9QYW5lbCA9ICh7IGRhc2hib2FyZCwgbm90Rm91bmQsIHBhbmVsLCBwYW5lbElkIH06IFNvbG9QYW5lbFByb3BzKSA9PiB7XG4gIGlmIChub3RGb3VuZCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWVycm9yXCI+UGFuZWwgd2l0aCBpZCB7cGFuZWxJZH0gbm90IGZvdW5kPC9kaXY+O1xuICB9XG5cbiAgaWYgKCFwYW5lbCB8fCAhZGFzaGJvYXJkKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyAmIGluaXRpYWxpemluZyBkYXNoYm9hcmQ8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtc29sb1wiPlxuICAgICAgPEF1dG9TaXplcj5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgICAgICAgIGlmICh3aWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RGFzaGJvYXJkUGFuZWxcbiAgICAgICAgICAgICAgc3RhdGVLZXk9e3BhbmVsLmtleX1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgZGFzaGJvYXJkPXtkYXNoYm9hcmR9XG4gICAgICAgICAgICAgIHBhbmVsPXtwYW5lbH1cbiAgICAgICAgICAgICAgaXNFZGl0aW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgaXNWaWV3aW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgbGF6eT17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0F1dG9TaXplcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihTb2xvUGFuZWxQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBQYW5lbENocm9tZSB9IGZyb20gJy4vUGFuZWxDaHJvbWUnO1xuaW1wb3J0IHsgUGFuZWxDaHJvbWVBbmd1bGFyIH0gZnJvbSAnLi9QYW5lbENocm9tZUFuZ3VsYXInO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwsIFBhbmVsTW9kZWwgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGNsZWFuVXBQYW5lbFN0YXRlLCBzZXRQYW5lbEluc3RhbmNlU3RhdGUgfSBmcm9tICcuLi8uLi9wYW5lbC9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBpbml0UGFuZWxTdGF0ZSB9IGZyb20gJy4uLy4uL3BhbmVsL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgTGF6eUxvYWRlciB9IGZyb20gJy4vTGF6eUxvYWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duUHJvcHMge1xuICBwYW5lbDogUGFuZWxNb2RlbDtcbiAgc3RhdGVLZXk6IHN0cmluZztcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgaXNFZGl0aW5nOiBib29sZWFuO1xuICBpc1ZpZXdpbmc6IGJvb2xlYW47XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBza2lwU3RhdGVDbGVhblVwPzogYm9vbGVhbjtcbiAgbGF6eT86IGJvb2xlYW47XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSwgcHJvcHM6IE93blByb3BzKSA9PiB7XG4gIGNvbnN0IHBhbmVsU3RhdGUgPSBzdGF0ZS5wYW5lbHNbcHJvcHMuc3RhdGVLZXldO1xuICBpZiAoIXBhbmVsU3RhdGUpIHtcbiAgICByZXR1cm4geyBwbHVnaW46IG51bGwgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGx1Z2luOiBwYW5lbFN0YXRlLnBsdWdpbixcbiAgICBpbnN0YW5jZVN0YXRlOiBwYW5lbFN0YXRlLmluc3RhbmNlU3RhdGUsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGluaXRQYW5lbFN0YXRlLFxuICBjbGVhblVwUGFuZWxTdGF0ZSxcbiAgc2V0UGFuZWxJbnN0YW5jZVN0YXRlLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFBhbmVsVW5jb25uZWN0ZWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge1xuICAgIGxhenk6IHRydWUsXG4gIH07XG5cbiAgc3BlY2lhbFBhbmVsczogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbiB9ID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5wYW5lbC5pc0luVmlldyA9ICF0aGlzLnByb3BzLmxhenk7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxhenkpIHtcbiAgICAgIHRoaXMub25QYW5lbExvYWQoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBNb3N0IG9mIHRoZSB0aW1lIGFuIHVubW91bnQgc2hvdWxkIHJlc3VsdCBpbiBjbGVhbnVwIGJ1dCBpbiBQYW5lbEVkaXQgaXQgc2hvdWxkIG5vdFxuICAgIGlmICghdGhpcy5wcm9wcy5za2lwU3RhdGVDbGVhblVwKSB7XG4gICAgICB0aGlzLnByb3BzLmNsZWFuVXBQYW5lbFN0YXRlKHsga2V5OiB0aGlzLnByb3BzLnN0YXRlS2V5IH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5zdGFuY2VTdGF0ZUNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRQYW5lbEluc3RhbmNlU3RhdGUoeyBrZXk6IHRoaXMucHJvcHMuc3RhdGVLZXksIHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uVmlzaWJpbGl0eUNoYW5nZSA9ICh2OiBib29sZWFuKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5wYW5lbC5pc0luVmlldyA9IHY7XG4gIH07XG5cbiAgb25QYW5lbExvYWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnBsdWdpbikge1xuICAgICAgdGhpcy5wcm9wcy5pbml0UGFuZWxTdGF0ZSh0aGlzLnByb3BzLnBhbmVsKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkLCBwYW5lbCwgaXNWaWV3aW5nLCBpc0VkaXRpbmcsIHdpZHRoLCBoZWlnaHQsIGxhenksIHBsdWdpbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHJlbmRlclBhbmVsQ2hyb21lID0gKGlzSW5WaWV3OiBib29sZWFuKSA9PlxuICAgICAgcGx1Z2luICYmXG4gICAgICAocGx1Z2luLmFuZ3VsYXJQYW5lbEN0cmwgPyAoXG4gICAgICAgIDxQYW5lbENocm9tZUFuZ3VsYXJcbiAgICAgICAgICBwbHVnaW49e3BsdWdpbn1cbiAgICAgICAgICBwYW5lbD17cGFuZWx9XG4gICAgICAgICAgZGFzaGJvYXJkPXtkYXNoYm9hcmR9XG4gICAgICAgICAgaXNWaWV3aW5nPXtpc1ZpZXdpbmd9XG4gICAgICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XG4gICAgICAgICAgaXNJblZpZXc9e2lzSW5WaWV3fVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQYW5lbENocm9tZVxuICAgICAgICAgIHBsdWdpbj17cGx1Z2lufVxuICAgICAgICAgIHBhbmVsPXtwYW5lbH1cbiAgICAgICAgICBkYXNoYm9hcmQ9e2Rhc2hib2FyZH1cbiAgICAgICAgICBpc1ZpZXdpbmc9e2lzVmlld2luZ31cbiAgICAgICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cbiAgICAgICAgICBpc0luVmlldz17aXNJblZpZXd9XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIG9uSW5zdGFuY2VTdGF0ZUNoYW5nZT17dGhpcy5vbkluc3RhbmNlU3RhdGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICApKTtcblxuICAgIHJldHVybiBsYXp5ID8gKFxuICAgICAgPExhenlMb2FkZXIgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gb25DaGFuZ2U9e3RoaXMub25WaXNpYmlsaXR5Q2hhbmdlfSBvbkxvYWQ9e3RoaXMub25QYW5lbExvYWR9PlxuICAgICAgICB7KHsgaXNJblZpZXcgfSkgPT4gcmVuZGVyUGFuZWxDaHJvbWUoaXNJblZpZXcpfVxuICAgICAgPC9MYXp5TG9hZGVyPlxuICAgICkgOiAoXG4gICAgICByZW5kZXJQYW5lbENocm9tZSh0cnVlKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZFBhbmVsID0gY29ubmVjdG9yKERhc2hib2FyZFBhbmVsVW5jb25uZWN0ZWQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VVbmlxdWVJZCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy91c2VVbmlxdWVJZCc7XG5pbXBvcnQgeyB1c2VFZmZlY3RPbmNlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCAoKHsgaXNJblZpZXcgfTogeyBpc0luVmlldzogYm9vbGVhbiB9KSA9PiBSZWFjdC5SZWFjdE5vZGUpO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBvbkxvYWQ/OiAoKSA9PiB2b2lkO1xuICBvbkNoYW5nZT86IChpc0luVmlldzogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExhenlMb2FkZXIoeyBjaGlsZHJlbiwgd2lkdGgsIGhlaWdodCwgb25Mb2FkLCBvbkNoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBpZCA9IHVzZVVuaXF1ZUlkKCk7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0luVmlldywgc2V0SXNJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3RPbmNlKCgpID0+IHtcbiAgICBMYXp5TG9hZGVyLmFkZENhbGxiYWNrKGlkLCAoZW50cnkpID0+IHtcbiAgICAgIGlmICghbG9hZGVkICYmIGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgb25Mb2FkPy4oKTtcbiAgICAgIH1cblxuICAgICAgc2V0SXNJblZpZXcoZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgb25DaGFuZ2U/LihlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVyRWwgPSB3cmFwcGVyUmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAod3JhcHBlckVsKSB7XG4gICAgICBMYXp5TG9hZGVyLm9ic2VydmVyLm9ic2VydmUod3JhcHBlckVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGVsZXRlIExhenlMb2FkZXIuY2FsbGJhY2tzW2lkXTtcbiAgICAgIHdyYXBwZXJFbCAmJiBMYXp5TG9hZGVyLm9ic2VydmVyLnVub2JzZXJ2ZSh3cmFwcGVyRWwpO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKExhenlMb2FkZXIuY2FsbGJhY2tzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgTGF6eUxvYWRlci5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtpZH0gcmVmPXt3cmFwcGVyUmVmfSBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19PlxuICAgICAge2xvYWRlZCAmJiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oeyBpc0luVmlldyB9KSA6IGNoaWxkcmVuKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuTGF6eUxvYWRlci5jYWxsYmFja3MgPSB7fSBhcyBSZWNvcmQ8c3RyaW5nLCAoZTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSkgPT4gdm9pZD47XG5MYXp5TG9hZGVyLmFkZENhbGxiYWNrID0gKGlkOiBzdHJpbmcsIGM6IChlOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KSA9PiB2b2lkKSA9PiAoTGF6eUxvYWRlci5jYWxsYmFja3NbaWRdID0gYyk7XG5MYXp5TG9hZGVyLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAoZW50cmllcykgPT4ge1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgTGF6eUxvYWRlci5jYWxsYmFja3NbZW50cnkudGFyZ2V0LmlkXShlbnRyeSk7XG4gICAgfVxuICB9LFxuICB7IHJvb3RNYXJnaW46ICcxMDBweCcgfVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSwgUmVmcmVzaEV2ZW50IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQge1xuICBBYnNvbHV0ZVRpbWVSYW5nZSxcbiAgQW5ub3RhdGlvbkNoYW5nZUV2ZW50LFxuICBBbm5vdGF0aW9uRXZlbnRVSU1vZGVsLFxuICBDb3JlQXBwLFxuICBEYXNoYm9hcmRDdXJzb3JTeW5jLFxuICBFdmVudEZpbHRlck9wdGlvbnMsXG4gIEZpZWxkQ29uZmlnU291cmNlLFxuICBnZXREZWZhdWx0VGltZVJhbmdlLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUGFuZWxQbHVnaW4sXG4gIFBhbmVsUGx1Z2luTWV0YSxcbiAgVGltZVJhbmdlLFxuICB0b0RhdGFGcmFtZURUTyxcbiAgdG9VdGMsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSwgUGFuZWxDb250ZXh0LCBQYW5lbENvbnRleHRQcm92aWRlciwgU2VyaWVzVmlzaWJpbGl0eUNoYW5nZU1vZGUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBWaXpMZWdlbmRPcHRpb25zIH0gZnJvbSAnQGdyYWZhbmEvc2NoZW1hJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBQYW5lbEhlYWRlciB9IGZyb20gJy4vUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXInO1xuaW1wb3J0IHsgZ2V0VGltZVNydiwgVGltZVNydiB9IGZyb20gJy4uL3NlcnZpY2VzL1RpbWVTcnYnO1xuaW1wb3J0IHsgYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3V0aWxzL3BhbmVsJztcbmltcG9ydCB7IHByb2ZpbGVyIH0gZnJvbSAnYXBwL2NvcmUvcHJvZmlsZXInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwsIFBhbmVsTW9kZWwgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBQQU5FTF9CT1JERVIgfSBmcm9tICdhcHAvY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgbG9hZFNuYXBzaG90RGF0YSB9IGZyb20gJy4uL3V0aWxzL2xvYWRTbmFwc2hvdERhdGEnO1xuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdhcHAvdHlwZXMvZXZlbnRzJztcbmltcG9ydCB7IGNoYW5nZVNlcmllc0NvbG9yQ29uZmlnRmFjdG9yeSB9IGZyb20gJ2FwcC9wbHVnaW5zL3BhbmVsL3RpbWVzZXJpZXMvb3ZlcnJpZGVzL2NvbG9yU2VyaWVzQ29uZmlnRmFjdG9yeSc7XG5pbXBvcnQgeyBzZXJpZXNWaXNpYmlsaXR5Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4vU2VyaWVzVmlzaWJpbGl0eUNvbmZpZ0ZhY3RvcnknO1xuaW1wb3J0IHsgZGVsZXRlQW5ub3RhdGlvbiwgc2F2ZUFubm90YXRpb24sIHVwZGF0ZUFubm90YXRpb24gfSBmcm9tICcuLi8uLi9hbm5vdGF0aW9ucy9hcGknO1xuaW1wb3J0IHsgZ2V0RGFzaGJvYXJkUXVlcnlSdW5uZXIgfSBmcm9tICcuLi8uLi9xdWVyeS9zdGF0ZS9EYXNoYm9hcmRRdWVyeVJ1bm5lci9EYXNoYm9hcmRRdWVyeVJ1bm5lcic7XG5pbXBvcnQgeyBsaXZlVGltZXIgfSBmcm9tICcuL2xpdmVUaW1lcic7XG5pbXBvcnQgeyBpc1NvbG9Sb3V0ZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcy91dGlscyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmNvbnN0IERFRkFVTFRfUExVR0lOX0VSUk9SID0gJ0Vycm9yIGluIHBsdWdpbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBwYW5lbDogUGFuZWxNb2RlbDtcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgcGx1Z2luOiBQYW5lbFBsdWdpbjtcbiAgaXNWaWV3aW5nOiBib29sZWFuO1xuICBpc0VkaXRpbmc6IGJvb2xlYW47XG4gIGlzSW5WaWV3OiBib29sZWFuO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgb25JbnN0YW5jZVN0YXRlQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGlzRmlyc3RMb2FkOiBib29sZWFuO1xuICByZW5kZXJDb3VudGVyOiBudW1iZXI7XG4gIGVycm9yTWVzc2FnZT86IHN0cmluZztcbiAgcmVmcmVzaFdoZW5JblZpZXc6IGJvb2xlYW47XG4gIGNvbnRleHQ6IFBhbmVsQ29udGV4dDtcbiAgZGF0YTogUGFuZWxEYXRhO1xuICBsaXZlVGltZT86IFRpbWVSYW5nZTtcbn1cblxuZXhwb3J0IGNsYXNzIFBhbmVsQ2hyb21lIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgcHJpdmF0ZSByZWFkb25seSB0aW1lU3J2OiBUaW1lU3J2ID0gZ2V0VGltZVNydigpO1xuICBwcml2YXRlIHN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgZXZlbnRGaWx0ZXI6IEV2ZW50RmlsdGVyT3B0aW9ucyA9IHsgb25seUxvY2FsOiB0cnVlIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gQ2FuIHRoaXMgZXZlbnRCdXMgYmUgb24gUGFuZWxNb2RlbD8gIHdoZW4gd2UgaGF2ZSBtb3JlIGNvbXBsZXggZXZlbnQgZmlsdGVyaW5nLCB0aGF0IG1heSBiZSBhIGJldHRlciBvcHRpb25cbiAgICBjb25zdCBldmVudEJ1cyA9IHByb3BzLmRhc2hib2FyZC5ldmVudHMubmV3U2NvcGVkQnVzKGBwYW5lbDoke3Byb3BzLnBhbmVsLmlkfWAsIHRoaXMuZXZlbnRGaWx0ZXIpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRmlyc3RMb2FkOiB0cnVlLFxuICAgICAgcmVuZGVyQ291bnRlcjogMCxcbiAgICAgIHJlZnJlc2hXaGVuSW5WaWV3OiBmYWxzZSxcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZXZlbnRCdXMsXG4gICAgICAgIGFwcDogdGhpcy5nZXRQYW5lbENvbnRleHRBcHAoKSxcbiAgICAgICAgc3luYzogdGhpcy5nZXRTeW5jLFxuICAgICAgICBvblNlcmllc0NvbG9yQ2hhbmdlOiB0aGlzLm9uU2VyaWVzQ29sb3JDaGFuZ2UsXG4gICAgICAgIG9uVG9nZ2xlU2VyaWVzVmlzaWJpbGl0eTogdGhpcy5vblNlcmllc1Zpc2liaWxpdHlDaGFuZ2UsXG4gICAgICAgIG9uQW5ub3RhdGlvbkNyZWF0ZTogdGhpcy5vbkFubm90YXRpb25DcmVhdGUsXG4gICAgICAgIG9uQW5ub3RhdGlvblVwZGF0ZTogdGhpcy5vbkFubm90YXRpb25VcGRhdGUsXG4gICAgICAgIG9uQW5ub3RhdGlvbkRlbGV0ZTogdGhpcy5vbkFubm90YXRpb25EZWxldGUsXG4gICAgICAgIGNhbkFkZEFubm90YXRpb25zOiB0aGlzLmNhbkFkZEFubm90YXRpb24sXG4gICAgICAgIG9uSW5zdGFuY2VTdGF0ZUNoYW5nZTogdGhpcy5vbkluc3RhbmNlU3RhdGVDaGFuZ2UsXG4gICAgICAgIG9uVG9nZ2xlTGVnZW5kU29ydDogdGhpcy5vblRvZ2dsZUxlZ2VuZFNvcnQsXG4gICAgICAgIGNhbkVkaXRBbm5vdGF0aW9uczogdGhpcy5jYW5FZGl0QW5ub3RhdGlvbixcbiAgICAgICAgY2FuRGVsZXRlQW5ub3RhdGlvbnM6IHRoaXMuY2FuRGVsZXRlQW5ub3RhdGlvbixcbiAgICAgIH0sXG4gICAgICBkYXRhOiB0aGlzLmdldEluaXRpYWxQYW5lbERhdGFTdGF0ZSgpLFxuICAgIH07XG4gIH1cblxuICBjYW5FZGl0RGFzaGJvYXJkID0gKCkgPT4gQm9vbGVhbih0aGlzLnByb3BzLmRhc2hib2FyZC5tZXRhLmNhbkVkaXQgfHwgdGhpcy5wcm9wcy5kYXNoYm9hcmQubWV0YS5jYW5NYWtlRWRpdGFibGUpO1xuXG4gIGNhbkFkZEFubm90YXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IGNhbkFkZCA9IHRydWU7XG5cbiAgICBpZiAoY29udGV4dFNydi5hY2Nlc3NDb250cm9sRW5hYmxlZCgpKSB7XG4gICAgICBjYW5BZGQgPSAhIXRoaXMucHJvcHMuZGFzaGJvYXJkLm1ldGEuYW5ub3RhdGlvbnNQZXJtaXNzaW9ucz8uZGFzaGJvYXJkLmNhbkFkZDtcbiAgICB9XG4gICAgcmV0dXJuIGNhbkFkZCAmJiB0aGlzLmNhbkVkaXREYXNoYm9hcmQoKTtcbiAgfTtcblxuICBjYW5FZGl0QW5ub3RhdGlvbiA9IChkYXNoYm9hcmRJZDogbnVtYmVyKSA9PiB7XG4gICAgbGV0IGNhbkVkaXQgPSB0cnVlO1xuXG4gICAgaWYgKGNvbnRleHRTcnYuYWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgICAgaWYgKGRhc2hib2FyZElkICE9PSAwKSB7XG4gICAgICAgIGNhbkVkaXQgPSAhIXRoaXMucHJvcHMuZGFzaGJvYXJkLm1ldGEuYW5ub3RhdGlvbnNQZXJtaXNzaW9ucz8uZGFzaGJvYXJkLmNhbkVkaXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5FZGl0ID0gISF0aGlzLnByb3BzLmRhc2hib2FyZC5tZXRhLmFubm90YXRpb25zUGVybWlzc2lvbnM/Lm9yZ2FuaXphdGlvbi5jYW5FZGl0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FuRWRpdCAmJiB0aGlzLmNhbkVkaXREYXNoYm9hcmQoKTtcbiAgfTtcblxuICBjYW5EZWxldGVBbm5vdGF0aW9uID0gKGRhc2hib2FyZElkOiBudW1iZXIpID0+IHtcbiAgICBsZXQgY2FuRGVsZXRlID0gdHJ1ZTtcblxuICAgIGlmIChjb250ZXh0U3J2LmFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGlmIChkYXNoYm9hcmRJZCAhPT0gMCkge1xuICAgICAgICBjYW5EZWxldGUgPSAhIXRoaXMucHJvcHMuZGFzaGJvYXJkLm1ldGEuYW5ub3RhdGlvbnNQZXJtaXNzaW9ucz8uZGFzaGJvYXJkLmNhbkRlbGV0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbkRlbGV0ZSA9ICEhdGhpcy5wcm9wcy5kYXNoYm9hcmQubWV0YS5hbm5vdGF0aW9uc1Blcm1pc3Npb25zPy5vcmdhbml6YXRpb24uY2FuRGVsZXRlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FuRGVsZXRlICYmIHRoaXMuY2FuRWRpdERhc2hib2FyZCgpO1xuICB9O1xuXG4gIC8vIER1ZSB0byBhIG11dGFibGUgcGFuZWwgbW9kZWwgd2UgZ2V0IHRoZSBzeW5jIHNldHRpbmdzIHZpYSBmdW5jdGlvbiB0aGF0IHByb2FjdGl2ZWx5IHJlYWRzIGZyb20gdGhlIG1vZGVsXG4gIGdldFN5bmMgPSAoKSA9PiAodGhpcy5wcm9wcy5pc0VkaXRpbmcgPyBEYXNoYm9hcmRDdXJzb3JTeW5jLk9mZiA6IHRoaXMucHJvcHMuZGFzaGJvYXJkLmdyYXBoVG9vbHRpcCk7XG5cbiAgb25JbnN0YW5jZVN0YXRlQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uSW5zdGFuY2VTdGF0ZUNoYW5nZSh2YWx1ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250ZXh0LFxuICAgICAgICBpbnN0YW5jZVN0YXRlOiB2YWx1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0UGFuZWxDb250ZXh0QXBwKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzRWRpdGluZykge1xuICAgICAgcmV0dXJuIENvcmVBcHAuUGFuZWxFZGl0b3I7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmlzVmlld2luZykge1xuICAgICAgcmV0dXJuIENvcmVBcHAuUGFuZWxWaWV3ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIENvcmVBcHAuRGFzaGJvYXJkO1xuICB9XG5cbiAgb25TZXJpZXNDb2xvckNoYW5nZSA9IChsYWJlbDogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5vbkZpZWxkQ29uZmlnQ2hhbmdlKGNoYW5nZVNlcmllc0NvbG9yQ29uZmlnRmFjdG9yeShsYWJlbCwgY29sb3IsIHRoaXMucHJvcHMucGFuZWwuZmllbGRDb25maWcpKTtcbiAgfTtcblxuICBvblNlcmllc1Zpc2liaWxpdHlDaGFuZ2UgPSAobGFiZWw6IHN0cmluZywgbW9kZTogU2VyaWVzVmlzaWJpbGl0eUNoYW5nZU1vZGUpID0+IHtcbiAgICB0aGlzLm9uRmllbGRDb25maWdDaGFuZ2UoXG4gICAgICBzZXJpZXNWaXNpYmlsaXR5Q29uZmlnRmFjdG9yeShsYWJlbCwgbW9kZSwgdGhpcy5wcm9wcy5wYW5lbC5maWVsZENvbmZpZywgdGhpcy5zdGF0ZS5kYXRhLnNlcmllcylcbiAgICApO1xuICB9O1xuXG4gIG9uVG9nZ2xlTGVnZW5kU29ydCA9IChzb3J0S2V5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBsZWdlbmRPcHRpb25zOiBWaXpMZWdlbmRPcHRpb25zID0gdGhpcy5wcm9wcy5wYW5lbC5vcHRpb25zLmxlZ2VuZDtcblxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gZG8gYW55dGhpbmcgd2hlbiBsZWdlbmQgb3B0aW9ucyBhcmUgbm90IGF2YWlsYWJsZVxuICAgIGlmICghbGVnZW5kT3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzb3J0RGVzYyA9IGxlZ2VuZE9wdGlvbnMuc29ydERlc2M7XG4gICAgbGV0IHNvcnRCeSA9IGxlZ2VuZE9wdGlvbnMuc29ydEJ5O1xuICAgIGlmIChzb3J0S2V5ICE9PSBzb3J0QnkpIHtcbiAgICAgIHNvcnREZXNjID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIGlmIGFscmVhZHkgc29ydCBhc2NlbmRpbmcsIGRpc2FibGUgc29ydGluZ1xuICAgIGlmIChzb3J0RGVzYyA9PT0gZmFsc2UpIHtcbiAgICAgIHNvcnRCeSA9IHVuZGVmaW5lZDtcbiAgICAgIHNvcnREZXNjID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0RGVzYyA9ICFzb3J0RGVzYztcbiAgICAgIHNvcnRCeSA9IHNvcnRLZXk7XG4gICAgfVxuXG4gICAgdGhpcy5vbk9wdGlvbnNDaGFuZ2Uoe1xuICAgICAgLi4udGhpcy5wcm9wcy5wYW5lbC5vcHRpb25zLFxuICAgICAgbGVnZW5kOiB7IC4uLmxlZ2VuZE9wdGlvbnMsIHNvcnRCeSwgc29ydERlc2MgfSxcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJbml0aWFsUGFuZWxEYXRhU3RhdGUoKTogUGFuZWxEYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Ob3RTdGFydGVkLFxuICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIHRpbWVSYW5nZTogZ2V0RGVmYXVsdFRpbWVSYW5nZSgpLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHBhbmVsLCBkYXNoYm9hcmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBTdWJzY3JpYmUgdG8gcGFuZWwgZXZlbnRzXG4gICAgdGhpcy5zdWJzLmFkZChwYW5lbC5ldmVudHMuc3Vic2NyaWJlKFJlZnJlc2hFdmVudCwgdGhpcy5vblJlZnJlc2gpKTtcbiAgICB0aGlzLnN1YnMuYWRkKHBhbmVsLmV2ZW50cy5zdWJzY3JpYmUoUmVuZGVyRXZlbnQsIHRoaXMub25SZW5kZXIpKTtcblxuICAgIGRhc2hib2FyZC5wYW5lbEluaXRpYWxpemVkKHRoaXMucHJvcHMucGFuZWwpO1xuXG4gICAgLy8gTW92ZSBzbmFwc2hvdCBkYXRhIGludG8gdGhlIHF1ZXJ5IHJlc3BvbnNlXG4gICAgaWYgKHRoaXMuaGFzUGFuZWxTbmFwc2hvdCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IGxvYWRTbmFwc2hvdERhdGEocGFuZWwsIGRhc2hib2FyZCksXG4gICAgICAgIGlzRmlyc3RMb2FkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy53YW50c1F1ZXJ5RXhlY3V0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNGaXJzdExvYWQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc3Vicy5hZGQoXG4gICAgICBwYW5lbFxuICAgICAgICAuZ2V0UXVlcnlSdW5uZXIoKVxuICAgICAgICAuZ2V0RGF0YSh7IHdpdGhUcmFuc2Zvcm1zOiB0cnVlLCB3aXRoRmllbGRDb25maWc6IHRydWUgfSlcbiAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKGRhdGEpID0+IHRoaXMub25EYXRhVXBkYXRlKGRhdGEpLFxuICAgICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIGxpdmUgdGltZXIgZXZlbnRzXG4gICAgbGl2ZVRpbWVyLmxpc3Rlbih0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3Vicy51bnN1YnNjcmliZSgpO1xuICAgIGxpdmVUaW1lci5yZW1vdmUodGhpcyk7XG4gIH1cblxuICBsaXZlVGltZUNoYW5nZWQobGl2ZVRpbWU6IFRpbWVSYW5nZSkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZGF0YS50aW1lUmFuZ2UpIHtcbiAgICAgIGNvbnN0IGRlbHRhID0gbGl2ZVRpbWUudG8udmFsdWVPZigpIC0gZGF0YS50aW1lUmFuZ2UudG8udmFsdWVPZigpO1xuICAgICAgaWYgKGRlbHRhIDwgMTAwKSB7XG4gICAgICAgIC8vIDEwaHpcbiAgICAgICAgY29uc29sZS5sb2coJ1NraXAgdGljayByZW5kZXInLCB0aGlzLnByb3BzLnBhbmVsLnRpdGxlLCBkZWx0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxpdmVUaW1lIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpIHtcbiAgICBjb25zdCB7IGlzSW5WaWV3LCB3aWR0aCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBhcHAgPSB0aGlzLmdldFBhbmVsQ29udGV4dEFwcCgpO1xuXG4gICAgaWYgKGNvbnRleHQuYXBwICE9PSBhcHApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgLi4uY29udGV4dCxcbiAgICAgICAgICBhcHAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBWaWV3IHN0YXRlIGhhcyBjaGFuZ2VkXG4gICAgaWYgKGlzSW5WaWV3ICE9PSBwcmV2UHJvcHMuaXNJblZpZXcpIHtcbiAgICAgIGlmIChpc0luVmlldykge1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIGEgZGVsYXllZCByZWZyZXNoXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlZnJlc2hXaGVuSW5WaWV3KSB7XG4gICAgICAgICAgdGhpcy5vblJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSB0aW1lciBkZXBlbmRzIG9uIHBhbmVsIHdpZHRoXG4gICAgaWYgKHdpZHRoICE9PSBwcmV2UHJvcHMud2lkdGgpIHtcbiAgICAgIGxpdmVUaW1lci51cGRhdGVJbnRlcnZhbCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGVzIHRoZSByZXNwb25zZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIHN0cmVhbVxuICAvLyBUaGUgbmV4dCBpcyBvdXRzaWRlIGEgcmVhY3Qgc3ludGhldGljIGV2ZW50IHNvIHNldFN0YXRlIGlzIG5vdCBiYXRjaGVkXG4gIC8vIFNvIGluIHRoaXMgY29udGV4dCB3ZSBjYW4gb25seSBkbyBhIHNpbmdsZSBjYWxsIHRvIHNldFN0YXRlXG4gIG9uRGF0YVVwZGF0ZShkYXRhOiBQYW5lbERhdGEpIHtcbiAgICBjb25zdCB7IGRhc2hib2FyZCwgcGFuZWwsIHBsdWdpbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIElnbm9yZSB0aGlzIGRhdGEgdXBkYXRlIGlmIHdlIGFyZSBub3cgYSBub24gZGF0YSBwYW5lbFxuICAgIGlmIChwbHVnaW4ubWV0YS5za2lwRGF0YVF1ZXJ5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5nZXRJbml0aWFsUGFuZWxEYXRhU3RhdGUoKSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgeyBpc0ZpcnN0TG9hZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBzd2l0Y2ggKGRhdGEuc3RhdGUpIHtcbiAgICAgIGNhc2UgTG9hZGluZ1N0YXRlLkxvYWRpbmc6XG4gICAgICAgIC8vIFNraXAgdXBkYXRpbmcgc3RhdGUgZGF0YSBpZiBpdCBpcyBhbHJlYWR5IGluIGxvYWRpbmcgc3RhdGVcbiAgICAgICAgLy8gVGhpcyBpcyB0byBhdm9pZCByZW5kZXJpbmcgcGFydGlhbCBsb2FkaW5nIHJlc3BvbnNlc1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9hZGluZ1N0YXRlLkVycm9yOlxuICAgICAgICBjb25zdCB7IGVycm9yIH0gPSBkYXRhO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlICE9PSBlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9hZGluZ1N0YXRlLkRvbmU6XG4gICAgICAgIC8vIElmIHdlIGFyZSBkb2luZyBhIHNuYXBzaG90IHNhdmUgZGF0YSBpbiBwYW5lbCBtb2RlbFxuICAgICAgICBpZiAoZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICAgICAgcGFuZWwuc25hcHNob3REYXRhID0gZGF0YS5zZXJpZXMubWFwKChmcmFtZSkgPT4gdG9EYXRhRnJhbWVEVE8oZnJhbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGaXJzdExvYWQpIHtcbiAgICAgICAgICBpc0ZpcnN0TG9hZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZpcnN0TG9hZCwgZXJyb3JNZXNzYWdlLCBkYXRhLCBsaXZlVGltZTogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgb25SZWZyZXNoID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFuZWwsIGlzSW5WaWV3LCB3aWR0aCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghaXNJblZpZXcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWZyZXNoV2hlbkluVmlldzogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lRGF0YSA9IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzKHBhbmVsLCB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCkpO1xuXG4gICAgLy8gSXNzdWUgUXVlcnlcbiAgICBpZiAodGhpcy53YW50c1F1ZXJ5RXhlY3V0aW9uKSB7XG4gICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RhdGUucmVmcmVzaFdoZW5JblZpZXcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZnJlc2hXaGVuSW5WaWV3OiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICAgIHBhbmVsLnJ1bkFsbFBhbmVsUXVlcmllcyh0aGlzLnByb3BzLmRhc2hib2FyZC5pZCwgdGhpcy5wcm9wcy5kYXNoYm9hcmQuZ2V0VGltZXpvbmUoKSwgdGltZURhdGEsIHdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIHBhbmVsIHNob3VsZCByZW5kZXIgb24gcmVmcmVzaCBhcyB3ZWxsIGlmIGl0IGRvZXNuJ3QgaGF2ZSBhIHF1ZXJ5LCBsaWtlIGNsb2NrIHBhbmVsXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogeyAuLi50aGlzLnN0YXRlLmRhdGEsIHRpbWVSYW5nZTogdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpIH0sXG4gICAgICAgIHJlbmRlckNvdW50ZXI6IHRoaXMuc3RhdGUucmVuZGVyQ291bnRlciArIDEsXG4gICAgICAgIGxpdmVUaW1lOiB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25SZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVVcGRhdGUgPSB7IHJlbmRlckNvdW50ZXI6IHRoaXMuc3RhdGUucmVuZGVyQ291bnRlciArIDEgfTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlVXBkYXRlKTtcbiAgfTtcblxuICBvbk9wdGlvbnNDaGFuZ2UgPSAob3B0aW9uczogYW55KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5wYW5lbC51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xuICB9O1xuXG4gIG9uRmllbGRDb25maWdDaGFuZ2UgPSAoY29uZmlnOiBGaWVsZENvbmZpZ1NvdXJjZSkgPT4ge1xuICAgIHRoaXMucHJvcHMucGFuZWwudXBkYXRlRmllbGRDb25maWcoY29uZmlnKTtcbiAgfTtcblxuICBvblBhbmVsRXJyb3IgPSAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZSB8fCBERUZBVUxUX1BMVUdJTl9FUlJPUjtcbiAgICBpZiAodGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IGVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25QYW5lbEVycm9yUmVjb3ZlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiB1bmRlZmluZWQgfSk7XG4gIH07XG5cbiAgb25Bbm5vdGF0aW9uQ3JlYXRlID0gYXN5bmMgKGV2ZW50OiBBbm5vdGF0aW9uRXZlbnRVSU1vZGVsKSA9PiB7XG4gICAgY29uc3QgaXNSZWdpb24gPSBldmVudC5mcm9tICE9PSBldmVudC50bztcbiAgICBjb25zdCBhbm5vID0ge1xuICAgICAgZGFzaGJvYXJkSWQ6IHRoaXMucHJvcHMuZGFzaGJvYXJkLmlkLFxuICAgICAgcGFuZWxJZDogdGhpcy5wcm9wcy5wYW5lbC5pZCxcbiAgICAgIGlzUmVnaW9uLFxuICAgICAgdGltZTogZXZlbnQuZnJvbSxcbiAgICAgIHRpbWVFbmQ6IGlzUmVnaW9uID8gZXZlbnQudG8gOiAwLFxuICAgICAgdGFnczogZXZlbnQudGFncyxcbiAgICAgIHRleHQ6IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgIH07XG4gICAgYXdhaXQgc2F2ZUFubm90YXRpb24oYW5ubyk7XG4gICAgZ2V0RGFzaGJvYXJkUXVlcnlSdW5uZXIoKS5ydW4oeyBkYXNoYm9hcmQ6IHRoaXMucHJvcHMuZGFzaGJvYXJkLCByYW5nZTogdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpIH0pO1xuICAgIHRoaXMuc3RhdGUuY29udGV4dC5ldmVudEJ1cy5wdWJsaXNoKG5ldyBBbm5vdGF0aW9uQ2hhbmdlRXZlbnQoYW5ubykpO1xuICB9O1xuXG4gIG9uQW5ub3RhdGlvbkRlbGV0ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgZGVsZXRlQW5ub3RhdGlvbih7IGlkIH0pO1xuICAgIGdldERhc2hib2FyZFF1ZXJ5UnVubmVyKCkucnVuKHsgZGFzaGJvYXJkOiB0aGlzLnByb3BzLmRhc2hib2FyZCwgcmFuZ2U6IHRoaXMudGltZVNydi50aW1lUmFuZ2UoKSB9KTtcbiAgICB0aGlzLnN0YXRlLmNvbnRleHQuZXZlbnRCdXMucHVibGlzaChuZXcgQW5ub3RhdGlvbkNoYW5nZUV2ZW50KHsgaWQgfSkpO1xuICB9O1xuXG4gIG9uQW5ub3RhdGlvblVwZGF0ZSA9IGFzeW5jIChldmVudDogQW5ub3RhdGlvbkV2ZW50VUlNb2RlbCkgPT4ge1xuICAgIGNvbnN0IGlzUmVnaW9uID0gZXZlbnQuZnJvbSAhPT0gZXZlbnQudG87XG4gICAgY29uc3QgYW5ubyA9IHtcbiAgICAgIGlkOiBldmVudC5pZCxcbiAgICAgIGRhc2hib2FyZElkOiB0aGlzLnByb3BzLmRhc2hib2FyZC5pZCxcbiAgICAgIHBhbmVsSWQ6IHRoaXMucHJvcHMucGFuZWwuaWQsXG4gICAgICBpc1JlZ2lvbixcbiAgICAgIHRpbWU6IGV2ZW50LmZyb20sXG4gICAgICB0aW1lRW5kOiBpc1JlZ2lvbiA/IGV2ZW50LnRvIDogMCxcbiAgICAgIHRhZ3M6IGV2ZW50LnRhZ3MsXG4gICAgICB0ZXh0OiBldmVudC5kZXNjcmlwdGlvbixcbiAgICB9O1xuICAgIGF3YWl0IHVwZGF0ZUFubm90YXRpb24oYW5ubyk7XG5cbiAgICBnZXREYXNoYm9hcmRRdWVyeVJ1bm5lcigpLnJ1bih7IGRhc2hib2FyZDogdGhpcy5wcm9wcy5kYXNoYm9hcmQsIHJhbmdlOiB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCkgfSk7XG4gICAgdGhpcy5zdGF0ZS5jb250ZXh0LmV2ZW50QnVzLnB1Ymxpc2gobmV3IEFubm90YXRpb25DaGFuZ2VFdmVudChhbm5vKSk7XG4gIH07XG5cbiAgZ2V0IGhhc1BhbmVsU25hcHNob3QoKSB7XG4gICAgY29uc3QgeyBwYW5lbCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gcGFuZWwuc25hcHNob3REYXRhICYmIHBhbmVsLnNuYXBzaG90RGF0YS5sZW5ndGg7XG4gIH1cblxuICBnZXQgd2FudHNRdWVyeUV4ZWN1dGlvbigpIHtcbiAgICByZXR1cm4gISh0aGlzLnByb3BzLnBsdWdpbi5tZXRhLnNraXBEYXRhUXVlcnkgfHwgdGhpcy5oYXNQYW5lbFNuYXBzaG90KTtcbiAgfVxuXG4gIG9uQ2hhbmdlVGltZVJhbmdlID0gKHRpbWVSYW5nZTogQWJzb2x1dGVUaW1lUmFuZ2UpID0+IHtcbiAgICB0aGlzLnRpbWVTcnYuc2V0VGltZSh7XG4gICAgICBmcm9tOiB0b1V0Yyh0aW1lUmFuZ2UuZnJvbSksXG4gICAgICB0bzogdG9VdGModGltZVJhbmdlLnRvKSxcbiAgICB9KTtcbiAgfTtcblxuICBzaG91bGRTaWduYWxSZW5kZXJpbmdDb21wbGV0ZWQobG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUsIHBsdWdpbk1ldGE6IFBhbmVsUGx1Z2luTWV0YSkge1xuICAgIHJldHVybiBsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Eb25lIHx8IHBsdWdpbk1ldGEuc2tpcERhdGFRdWVyeTtcbiAgfVxuXG4gIHNraXBGaXJzdFJlbmRlcihsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZSkge1xuICAgIGNvbnN0IHsgaXNGaXJzdExvYWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMud2FudHNRdWVyeUV4ZWN1dGlvbiAmJlxuICAgICAgaXNGaXJzdExvYWQgJiZcbiAgICAgIChsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nIHx8IGxvYWRpbmdTdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLk5vdFN0YXJ0ZWQpXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBhbmVsKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBwYW5lbCwgcGx1Z2luLCBkYXNoYm9hcmQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyByZW5kZXJDb3VudGVyLCBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IGNvbmZpZztcbiAgICBjb25zdCB7IHN0YXRlOiBsb2FkaW5nU3RhdGUgfSA9IGRhdGE7XG5cbiAgICAvLyBkbyBub3QgcmVuZGVyIGNvbXBvbmVudCB1bnRpbCB3ZSBoYXZlIGZpcnN0IGRhdGFcbiAgICBpZiAodGhpcy5za2lwRmlyc3RSZW5kZXIobG9hZGluZ1N0YXRlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgdG8gaW5jcmVhc2UgYSBjb3VudGVyIHRoYXQgaXMgdXNlZCBieSBiYWNrZW5kXG4gICAgLy8gaW1hZ2UgcmVuZGVyaW5nIHRvIGtub3cgd2hlbiB0byBjYXB0dXJlIGltYWdlXG4gICAgaWYgKHRoaXMuc2hvdWxkU2lnbmFsUmVuZGVyaW5nQ29tcGxldGVkKGxvYWRpbmdTdGF0ZSwgcGx1Z2luLm1ldGEpKSB7XG4gICAgICBwcm9maWxlci5yZW5kZXJpbmdDb21wbGV0ZWQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBQYW5lbENvbXBvbmVudCA9IHBsdWdpbi5wYW5lbCE7XG4gICAgY29uc3QgdGltZVJhbmdlID0gdGhpcy5zdGF0ZS5saXZlVGltZSA/PyBkYXRhLnRpbWVSYW5nZSA/PyB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCk7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gdGhpcy5oYXNPdmVybGF5SGVhZGVyKCkgPyAwIDogdGhlbWUucGFuZWxIZWFkZXJIZWlnaHQ7XG4gICAgY29uc3QgY2hyb21lUGFkZGluZyA9IHBsdWdpbi5ub1BhZGRpbmcgPyAwIDogdGhlbWUucGFuZWxQYWRkaW5nO1xuICAgIGNvbnN0IHBhbmVsV2lkdGggPSB3aWR0aCAtIGNocm9tZVBhZGRpbmcgKiAyIC0gUEFORUxfQk9SREVSO1xuICAgIGNvbnN0IGlubmVyUGFuZWxIZWlnaHQgPSBoZWlnaHQgLSBoZWFkZXJIZWlnaHQgLSBjaHJvbWVQYWRkaW5nICogMiAtIFBBTkVMX0JPUkRFUjtcbiAgICBjb25zdCBwYW5lbENvbnRlbnRDbGFzc05hbWVzID0gY2xhc3NOYW1lcyh7XG4gICAgICAncGFuZWwtY29udGVudCc6IHRydWUsXG4gICAgICAncGFuZWwtY29udGVudC0tbm8tcGFkZGluZyc6IHBsdWdpbi5ub1BhZGRpbmcsXG4gICAgfSk7XG4gICAgY29uc3QgcGFuZWxPcHRpb25zID0gcGFuZWwuZ2V0T3B0aW9ucygpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBldmVudCBmaWx0ZXIgKGRhc2hib2FyZCBzZXR0aW5ncyBtYXkgaGF2ZSBjaGFuZ2VkKVxuICAgIC8vIFllcyB0aGlzIGlzIGNhbGxlZCBldmVyIHJlbmRlciBmb3IgYSBmdW5jdGlvbiB0aGF0IGlzIHRyaWdnZXJlZCBvbiBldmVyeSBtb3VzZSBtb3ZlXG4gICAgdGhpcy5ldmVudEZpbHRlci5vbmx5TG9jYWwgPSBkYXNoYm9hcmQuZ3JhcGhUb29sdGlwID09PSAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwYW5lbENvbnRlbnRDbGFzc05hbWVzfT5cbiAgICAgICAgICA8UGFuZWxDb250ZXh0UHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGUuY29udGV4dH0+XG4gICAgICAgICAgICA8UGFuZWxDb21wb25lbnRcbiAgICAgICAgICAgICAgaWQ9e3BhbmVsLmlkfVxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICB0aXRsZT17cGFuZWwudGl0bGV9XG4gICAgICAgICAgICAgIHRpbWVSYW5nZT17dGltZVJhbmdlfVxuICAgICAgICAgICAgICB0aW1lWm9uZT17dGhpcy5wcm9wcy5kYXNoYm9hcmQuZ2V0VGltZXpvbmUoKX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17cGFuZWxPcHRpb25zfVxuICAgICAgICAgICAgICBmaWVsZENvbmZpZz17cGFuZWwuZmllbGRDb25maWd9XG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50PXtwYW5lbC50cmFuc3BhcmVudH1cbiAgICAgICAgICAgICAgd2lkdGg9e3BhbmVsV2lkdGh9XG4gICAgICAgICAgICAgIGhlaWdodD17aW5uZXJQYW5lbEhlaWdodH1cbiAgICAgICAgICAgICAgcmVuZGVyQ291bnRlcj17cmVuZGVyQ291bnRlcn1cbiAgICAgICAgICAgICAgcmVwbGFjZVZhcmlhYmxlcz17cGFuZWwucmVwbGFjZVZhcmlhYmxlc31cbiAgICAgICAgICAgICAgb25PcHRpb25zQ2hhbmdlPXt0aGlzLm9uT3B0aW9uc0NoYW5nZX1cbiAgICAgICAgICAgICAgb25GaWVsZENvbmZpZ0NoYW5nZT17dGhpcy5vbkZpZWxkQ29uZmlnQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZVRpbWVSYW5nZT17dGhpcy5vbkNoYW5nZVRpbWVSYW5nZX1cbiAgICAgICAgICAgICAgZXZlbnRCdXM9e2Rhc2hib2FyZC5ldmVudHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUGFuZWxDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGhhc092ZXJsYXlIZWFkZXIoKSB7XG4gICAgY29uc3QgeyBwYW5lbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAvLyBhbHdheXMgc2hvdyBub3JtYWwgaGVhZGVyIGlmIHdlIGhhdmUgdGltZSBvdmVycmlkZVxuICAgIGlmIChkYXRhLnJlcXVlc3QgJiYgZGF0YS5yZXF1ZXN0LnRpbWVJbmZvKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICFwYW5lbC5oYXNUaXRsZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkLCBwYW5lbCwgaXNWaWV3aW5nLCBpc0VkaXRpbmcsIHdpZHRoLCBoZWlnaHQsIHBsdWdpbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVycm9yTWVzc2FnZSwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRyYW5zcGFyZW50IH0gPSBwYW5lbDtcblxuICAgIGNvbnN0IGFsZXJ0U3RhdGUgPSBkYXRhLmFsZXJ0U3RhdGU/LnN0YXRlO1xuXG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgJ3BhbmVsLWNvbnRhaW5lcic6IHRydWUsXG4gICAgICAncGFuZWwtY29udGFpbmVyLS1hYnNvbHV0ZSc6IGlzU29sb1JvdXRlKGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLnBhdGhuYW1lKSxcbiAgICAgICdwYW5lbC1jb250YWluZXItLXRyYW5zcGFyZW50JzogdHJhbnNwYXJlbnQsXG4gICAgICAncGFuZWwtY29udGFpbmVyLS1uby10aXRsZSc6IHRoaXMuaGFzT3ZlcmxheUhlYWRlcigpLFxuICAgICAgW2BwYW5lbC1hbGVydC1zdGF0ZS0tJHthbGVydFN0YXRlfWBdOiBhbGVydFN0YXRlICE9PSB1bmRlZmluZWQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc05hbWVzfVxuICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMuY29tcG9uZW50cy5QYW5lbHMuUGFuZWwuY29udGFpbmVyQnlUaXRsZShwYW5lbC50aXRsZSl9XG4gICAgICA+XG4gICAgICAgIDxQYW5lbEhlYWRlclxuICAgICAgICAgIHBhbmVsPXtwYW5lbH1cbiAgICAgICAgICBkYXNoYm9hcmQ9e2Rhc2hib2FyZH1cbiAgICAgICAgICB0aXRsZT17cGFuZWwudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e3BhbmVsLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGxpbmtzPXtwYW5lbC5saW5rc31cbiAgICAgICAgICBlcnJvcj17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxuICAgICAgICAgIGlzVmlld2luZz17aXNWaWV3aW5nfVxuICAgICAgICAgIGFsZXJ0U3RhdGU9e2FsZXJ0U3RhdGV9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgLz5cbiAgICAgICAgPEVycm9yQm91bmRhcnlcbiAgICAgICAgICBkZXBlbmRlbmNpZXM9e1tkYXRhLCBwbHVnaW4sIHBhbmVsLmdldE9wdGlvbnMoKV19XG4gICAgICAgICAgb25FcnJvcj17dGhpcy5vblBhbmVsRXJyb3J9XG4gICAgICAgICAgb25SZWNvdmVyPXt0aGlzLm9uUGFuZWxFcnJvclJlY292ZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgZXJyb3IgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUGFuZWwod2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbm5lY3QsIE1hcERpc3BhdGNoVG9Qcm9wcywgTWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQW5ndWxhckNvbXBvbmVudCwgZ2V0QW5ndWxhckxvYWRlciwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBnZXREZWZhdWx0VGltZVJhbmdlLCBMb2FkaW5nU3RhdGUsIFBhbmVsRGF0YSwgUGFuZWxQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBQYW5lbEhlYWRlciB9IGZyb20gJy4vUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXInO1xuaW1wb3J0IHsgZ2V0VGltZVNydiwgVGltZVNydiB9IGZyb20gJy4uL3NlcnZpY2VzL1RpbWVTcnYnO1xuaW1wb3J0IHsgc2V0UGFuZWxBbmd1bGFyQ29tcG9uZW50IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BhbmVsL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IERhc2hib2FyZE1vZGVsLCBQYW5lbE1vZGVsIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBQQU5FTF9CT1JERVIgfSBmcm9tICdhcHAvY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNTb2xvUm91dGUgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0UGFuZWxTdGF0ZUZvck1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BhbmVsL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmludGVyZmFjZSBPd25Qcm9wcyB7XG4gIHBhbmVsOiBQYW5lbE1vZGVsO1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICBwbHVnaW46IFBhbmVsUGx1Z2luO1xuICBpc1ZpZXdpbmc6IGJvb2xlYW47XG4gIGlzRWRpdGluZzogYm9vbGVhbjtcbiAgaXNJblZpZXc6IGJvb2xlYW47XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ29ubmVjdGVkUHJvcHMge1xuICBhbmd1bGFyQ29tcG9uZW50PzogQW5ndWxhckNvbXBvbmVudDtcbn1cblxuaW50ZXJmYWNlIERpc3BhdGNoUHJvcHMge1xuICBzZXRQYW5lbEFuZ3VsYXJDb21wb25lbnQ6IHR5cGVvZiBzZXRQYW5lbEFuZ3VsYXJDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wcyAmIERpc3BhdGNoUHJvcHM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBkYXRhOiBQYW5lbERhdGE7XG4gIGVycm9yTWVzc2FnZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFuZ3VsYXJTY29wZVByb3BzIHtcbiAgcGFuZWw6IFBhbmVsTW9kZWw7XG4gIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHNpemU6IHtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgUGFuZWxDaHJvbWVBbmd1bGFyVW5jb25uZWN0ZWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICB0aW1lU3J2OiBUaW1lU3J2ID0gZ2V0VGltZVNydigpO1xuICBzY29wZVByb3BzPzogQW5ndWxhclNjb3BlUHJvcHM7XG4gIHN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuTm90U3RhcnRlZCxcbiAgICAgICAgc2VyaWVzOiBbXSxcbiAgICAgICAgdGltZVJhbmdlOiBnZXREZWZhdWx0VGltZVJhbmdlKCksXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHBhbmVsIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMubG9hZEFuZ3VsYXJQYW5lbCgpO1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIGRhdGEgZXZlbnRzXG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSBwYW5lbC5nZXRRdWVyeVJ1bm5lcigpO1xuXG4gICAgLy8gd2UgYXJlIG5vdCBkaXNwbGF5aW5nIGFueSBvZiB0aGlzIGRhdGEgc28gbm8gbmVlZCBmb3IgdHJhbnNmb3JtcyBvciBmaWVsZCBjb25maWdcbiAgICB0aGlzLnN1YnMuYWRkKFxuICAgICAgcXVlcnlSdW5uZXIuZ2V0RGF0YSh7IHdpdGhUcmFuc2Zvcm1zOiBmYWxzZSwgd2l0aEZpZWxkQ29uZmlnOiBmYWxzZSB9KS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoZGF0YTogUGFuZWxEYXRhKSA9PiB0aGlzLm9uUGFuZWxEYXRhVXBkYXRlKGRhdGEpLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgb25QYW5lbERhdGFVcGRhdGUoZGF0YTogUGFuZWxEYXRhKSB7XG4gICAgbGV0IGVycm9yTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5FcnJvcikge1xuICAgICAgY29uc3QgeyBlcnJvciB9ID0gZGF0YTtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlICE9PSBlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhLCBlcnJvck1lc3NhZ2UgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzLCBwcmV2U3RhdGU6IFN0YXRlKSB7XG4gICAgY29uc3QgeyBwbHVnaW4sIGhlaWdodCwgd2lkdGgsIHBhbmVsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHByZXZQcm9wcy5wbHVnaW4gIT09IHBsdWdpbikge1xuICAgICAgdGhpcy5sb2FkQW5ndWxhclBhbmVsKCk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZQcm9wcy53aWR0aCAhPT0gd2lkdGggfHwgcHJldlByb3BzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICBpZiAodGhpcy5zY29wZVByb3BzKSB7XG4gICAgICAgIHRoaXMuc2NvcGVQcm9wcy5zaXplLmhlaWdodCA9IHRoaXMuZ2V0SW5uZXJQYW5lbEhlaWdodCgpO1xuICAgICAgICB0aGlzLnNjb3BlUHJvcHMuc2l6ZS53aWR0aCA9IHRoaXMuZ2V0SW5uZXJQYW5lbFdpZHRoKCk7XG4gICAgICAgIHBhbmVsLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldElubmVyUGFuZWxIZWlnaHQoKSB7XG4gICAgY29uc3QgeyBwbHVnaW4sIGhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRoZW1lIH0gPSBjb25maWc7XG5cbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSB0aGlzLmhhc092ZXJsYXlIZWFkZXIoKSA/IDAgOiB0aGVtZS5wYW5lbEhlYWRlckhlaWdodDtcbiAgICBjb25zdCBjaHJvbWVQYWRkaW5nID0gcGx1Z2luLm5vUGFkZGluZyA/IDAgOiB0aGVtZS5wYW5lbFBhZGRpbmc7XG4gICAgcmV0dXJuIGhlaWdodCAtIGhlYWRlckhlaWdodCAtIGNocm9tZVBhZGRpbmcgKiAyIC0gUEFORUxfQk9SREVSO1xuICB9XG5cbiAgZ2V0SW5uZXJQYW5lbFdpZHRoKCkge1xuICAgIGNvbnN0IHsgcGx1Z2luLCB3aWR0aCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRoZW1lIH0gPSBjb25maWc7XG5cbiAgICBjb25zdCBjaHJvbWVQYWRkaW5nID0gcGx1Z2luLm5vUGFkZGluZyA/IDAgOiB0aGVtZS5wYW5lbFBhZGRpbmc7XG4gICAgcmV0dXJuIHdpZHRoIC0gY2hyb21lUGFkZGluZyAqIDIgLSBQQU5FTF9CT1JERVI7XG4gIH1cblxuICBsb2FkQW5ndWxhclBhbmVsKCkge1xuICAgIGNvbnN0IHsgcGFuZWwsIGRhc2hib2FyZCwgc2V0UGFuZWxBbmd1bGFyQ29tcG9uZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gaWYgd2UgaGF2ZSBubyBlbGVtZW50IG9yIGFscmVhZHkgaGF2ZSBsb2FkZWQgdGhlIHBhbmVsIHJldHVyblxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGVyID0gZ2V0QW5ndWxhckxvYWRlcigpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gJzxwbHVnaW4tY29tcG9uZW50IHR5cGU9XCJwYW5lbFwiIGNsYXNzPVwicGFuZWwtaGVpZ2h0LWhlbHBlclwiPjwvcGx1Z2luLWNvbXBvbmVudD4nO1xuXG4gICAgdGhpcy5zY29wZVByb3BzID0ge1xuICAgICAgcGFuZWw6IHBhbmVsLFxuICAgICAgZGFzaGJvYXJkOiBkYXNoYm9hcmQsXG4gICAgICBzaXplOiB7IHdpZHRoOiB0aGlzLmdldElubmVyUGFuZWxXaWR0aCgpLCBoZWlnaHQ6IHRoaXMuZ2V0SW5uZXJQYW5lbEhlaWdodCgpIH0sXG4gICAgfTtcblxuICAgIHNldFBhbmVsQW5ndWxhckNvbXBvbmVudCh7XG4gICAgICBrZXk6IHBhbmVsLmtleSxcbiAgICAgIGFuZ3VsYXJDb21wb25lbnQ6IGxvYWRlci5sb2FkKHRoaXMuZWxlbWVudCwgdGhpcy5zY29wZVByb3BzLCB0ZW1wbGF0ZSksXG4gICAgfSk7XG4gIH1cblxuICBoYXNPdmVybGF5SGVhZGVyKCkge1xuICAgIGNvbnN0IHsgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gYWx3YXlzIHNob3cgbm9ybWFsIGhlYWRlciBpZiB3ZSBoYXZlIHRpbWUgb3ZlcnJpZGVcbiAgICBpZiAoZGF0YS5yZXF1ZXN0ICYmIGRhdGEucmVxdWVzdC50aW1lSW5mbykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhcGFuZWwuaGFzVGl0bGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhc2hib2FyZCwgcGFuZWwsIGlzVmlld2luZywgaXNFZGl0aW5nLCBwbHVnaW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlcnJvck1lc3NhZ2UsIGRhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0cmFuc3BhcmVudCB9ID0gcGFuZWw7XG5cbiAgICBjb25zdCBhbGVydFN0YXRlID0gZGF0YS5hbGVydFN0YXRlPy5zdGF0ZTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzTmFtZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICdwYW5lbC1jb250YWluZXInOiB0cnVlLFxuICAgICAgJ3BhbmVsLWNvbnRhaW5lci0tYWJzb2x1dGUnOiBpc1NvbG9Sb3V0ZShsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZSksXG4gICAgICAncGFuZWwtY29udGFpbmVyLS10cmFuc3BhcmVudCc6IHRyYW5zcGFyZW50LFxuICAgICAgJ3BhbmVsLWNvbnRhaW5lci0tbm8tdGl0bGUnOiB0aGlzLmhhc092ZXJsYXlIZWFkZXIoKSxcbiAgICAgICdwYW5lbC1oYXMtYWxlcnQnOiBwYW5lbC5hbGVydCAhPT0gdW5kZWZpbmVkLFxuICAgICAgW2BwYW5lbC1hbGVydC1zdGF0ZS0tJHthbGVydFN0YXRlfWBdOiBhbGVydFN0YXRlICE9PSB1bmRlZmluZWQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYW5lbENvbnRlbnRDbGFzc05hbWVzID0gY2xhc3NOYW1lcyh7XG4gICAgICAncGFuZWwtY29udGVudCc6IHRydWUsXG4gICAgICAncGFuZWwtY29udGVudC0tbm8tcGFkZGluZyc6IHBsdWdpbi5ub1BhZGRpbmcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzTmFtZXN9IGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5jb21wb25lbnRzLlBhbmVscy5QYW5lbC5jb250YWluZXJCeVRpdGxlKHBhbmVsLnRpdGxlKX0+XG4gICAgICAgIDxQYW5lbEhlYWRlclxuICAgICAgICAgIHBhbmVsPXtwYW5lbH1cbiAgICAgICAgICBkYXNoYm9hcmQ9e2Rhc2hib2FyZH1cbiAgICAgICAgICB0aXRsZT17cGFuZWwudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e3BhbmVsLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGxpbmtzPXtwYW5lbC5saW5rc31cbiAgICAgICAgICBlcnJvcj17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgIGlzVmlld2luZz17aXNWaWV3aW5nfVxuICAgICAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgYWxlcnRTdGF0ZT17YWxlcnRTdGF0ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BhbmVsQ29udGVudENsYXNzTmFtZXN9PlxuICAgICAgICAgIDxkaXYgcmVmPXsoZWxlbWVudCkgPT4gKHRoaXMuZWxlbWVudCA9IGVsZW1lbnQpfSBjbGFzc05hbWU9XCJwYW5lbC1oZWlnaHQtaGVscGVyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzPENvbm5lY3RlZFByb3BzLCBPd25Qcm9wcywgU3RvcmVTdGF0ZT4gPSAoc3RhdGUsIHByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYW5ndWxhckNvbXBvbmVudDogZ2V0UGFuZWxTdGF0ZUZvck1vZGVsKHN0YXRlLCBwcm9wcy5wYW5lbCk/LmFuZ3VsYXJDb21wb25lbnQsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IE1hcERpc3BhdGNoVG9Qcm9wczxEaXNwYXRjaFByb3BzLCBPd25Qcm9wcz4gPSB7IHNldFBhbmVsQW5ndWxhckNvbXBvbmVudCB9O1xuXG5leHBvcnQgY29uc3QgUGFuZWxDaHJvbWVBbmd1bGFyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFuZWxDaHJvbWVBbmd1bGFyVW5jb25uZWN0ZWQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBEYXRhTGluaywgR3JhZmFuYVRoZW1lMiwgUGFuZWxEYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5cbmltcG9ydCBQYW5lbEhlYWRlckNvcm5lciBmcm9tICcuL1BhbmVsSGVhZGVyQ29ybmVyJztcbmltcG9ydCB7IERhc2hib2FyZE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9EYXNoYm9hcmRNb2RlbCc7XG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9QYW5lbE1vZGVsJztcbmltcG9ydCB7IGdldFBhbmVsTGlua3NTdXBwbGllciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9wYW5lbGxpbmtzL2xpbmtTdXBwbGllcnMnO1xuaW1wb3J0IHsgUGFuZWxIZWFkZXJOb3RpY2VzIH0gZnJvbSAnLi9QYW5lbEhlYWRlck5vdGljZXMnO1xuaW1wb3J0IHsgUGFuZWxIZWFkZXJNZW51VHJpZ2dlciB9IGZyb20gJy4vUGFuZWxIZWFkZXJNZW51VHJpZ2dlcic7XG5pbXBvcnQgeyBQYW5lbEhlYWRlckxvYWRpbmdJbmRpY2F0b3IgfSBmcm9tICcuL1BhbmVsSGVhZGVyTG9hZGluZ0luZGljYXRvcic7XG5pbXBvcnQgeyBQYW5lbEhlYWRlck1lbnVXcmFwcGVyIH0gZnJvbSAnLi9QYW5lbEhlYWRlck1lbnVXcmFwcGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHBhbmVsOiBQYW5lbE1vZGVsO1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGxpbmtzPzogRGF0YUxpbmtbXTtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGFsZXJ0U3RhdGU/OiBzdHJpbmc7XG4gIGlzVmlld2luZzogYm9vbGVhbjtcbiAgaXNFZGl0aW5nOiBib29sZWFuO1xuICBkYXRhOiBQYW5lbERhdGE7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlcjogRkM8UHJvcHM+ID0gKHsgcGFuZWwsIGVycm9yLCBpc1ZpZXdpbmcsIGlzRWRpdGluZywgZGF0YSwgYWxlcnRTdGF0ZSwgZGFzaGJvYXJkIH0pID0+IHtcbiAgY29uc3Qgb25DYW5jZWxRdWVyeSA9ICgpID0+IHBhbmVsLmdldFF1ZXJ5UnVubmVyKCkuY2FuY2VsUXVlcnkoKTtcbiAgY29uc3QgdGl0bGUgPSBwYW5lbC5nZXREaXNwbGF5VGl0bGUoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gY3goJ3BhbmVsLWhlYWRlcicsICEoaXNWaWV3aW5nIHx8IGlzRWRpdGluZykgPyAnZ3JpZC1kcmFnLWhhbmRsZScgOiAnJyk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIocGFuZWxTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYW5lbEhlYWRlckxvYWRpbmdJbmRpY2F0b3Igc3RhdGU9e2RhdGEuc3RhdGV9IG9uQ2xpY2s9e29uQ2FuY2VsUXVlcnl9IC8+XG4gICAgICA8UGFuZWxIZWFkZXJDb3JuZXJcbiAgICAgICAgcGFuZWw9e3BhbmVsfVxuICAgICAgICB0aXRsZT17cGFuZWwudGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtwYW5lbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgc2NvcGVkVmFycz17cGFuZWwuc2NvcGVkVmFyc31cbiAgICAgICAgbGlua3M9e2dldFBhbmVsTGlua3NTdXBwbGllcihwYW5lbCl9XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPFBhbmVsSGVhZGVyTWVudVRyaWdnZXIgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlBhbmVscy5QYW5lbC50aXRsZSh0aXRsZSl9PlxuICAgICAgICAgIHsoeyBjbG9zZU1lbnUsIHBhbmVsTWVudU9wZW4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxQYW5lbEhlYWRlck5vdGljZXMgZnJhbWVzPXtkYXRhLnNlcmllc30gcGFuZWxJZD17cGFuZWwuaWR9IC8+XG4gICAgICAgICAgICAgICAge2FsZXJ0U3RhdGUgPyAoXG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBuYW1lPXthbGVydFN0YXRlID09PSAnYWxlcnRpbmcnID8gJ2hlYXJ0LWJyZWFrJyA6ICdoZWFydCd9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tZ2YgcGFuZWwtYWxlcnQtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNHB4JyB9fVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVUZXh0fT57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYW5nbGUtZG93blwiIGNsYXNzTmFtZT1cInBhbmVsLW1lbnUtdG9nZ2xlXCIgLz5cbiAgICAgICAgICAgICAgICA8UGFuZWxIZWFkZXJNZW51V3JhcHBlciBwYW5lbD17cGFuZWx9IGRhc2hib2FyZD17ZGFzaGJvYXJkfSBzaG93PXtwYW5lbE1lbnVPcGVufSBvbkNsb3NlPXtjbG9zZU1lbnV9IC8+XG4gICAgICAgICAgICAgICAge2RhdGEucmVxdWVzdCAmJiBkYXRhLnJlcXVlc3QudGltZUluZm8gJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtdGltZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjbG9jay1uaW5lXCIgc2l6ZT1cInNtXCIgLz4ge2RhdGEucmVxdWVzdC50aW1lSW5mb31cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9QYW5lbEhlYWRlck1lbnVUcmlnZ2VyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBwYW5lbFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlVGV4dDogY3NzYFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzhweCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW19O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keS5mb250U2l6ZX07XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5wcmltYXJ5fTtcbiAgICAgIH1cbiAgICAgIC5wYW5lbC1oYXMtYWxlcnQgJiB7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNTRweCk7XG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyByZW5kZXJNYXJrZG93biwgTGlua01vZGVsU3VwcGxpZXIsIFNjb3BlZFZhcnMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRvb2x0aXAsIFBvcG92ZXJDb250ZW50IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlLCBnZXRUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9QYW5lbE1vZGVsJztcbmltcG9ydCB7IGdldFRpbWVTcnYsIFRpbWVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL1RpbWVTcnYnO1xuaW1wb3J0IHsgSW5zcGVjdFRhYiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9pbnNwZWN0b3IvdHlwZXMnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5cbmVudW0gSW5mb01vZGUge1xuICBFcnJvciA9ICdFcnJvcicsXG4gIEluZm8gPSAnSW5mbycsXG4gIExpbmtzID0gJ0xpbmtzJyxcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFuZWw6IFBhbmVsTW9kZWw7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgc2NvcGVkVmFycz86IFNjb3BlZFZhcnM7XG4gIGxpbmtzPzogTGlua01vZGVsU3VwcGxpZXI8UGFuZWxNb2RlbD47XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFuZWxIZWFkZXJDb3JuZXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgdGltZVNydjogVGltZVNydiA9IGdldFRpbWVTcnYoKTtcblxuICBnZXRJbmZvTW9kZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhbmVsLCBlcnJvciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBJbmZvTW9kZS5FcnJvcjtcbiAgICB9XG4gICAgaWYgKCEhcGFuZWwuZGVzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybiBJbmZvTW9kZS5JbmZvO1xuICAgIH1cbiAgICBpZiAocGFuZWwubGlua3MgJiYgcGFuZWwubGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gSW5mb01vZGUuTGlua3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBnZXRJbmZvQ29udGVudCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgY29uc3QgeyBwYW5lbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtYXJrZG93biA9IHBhbmVsLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgIGNvbnN0IGludGVycG9sYXRlZE1hcmtkb3duID0gZ2V0VGVtcGxhdGVTcnYoKS5yZXBsYWNlKG1hcmtkb3duLCBwYW5lbC5zY29wZWRWYXJzKTtcbiAgICBjb25zdCBtYXJrZWRJbnRlcnBvbGF0ZWRNYXJrZG93biA9IHJlbmRlck1hcmtkb3duKGludGVycG9sYXRlZE1hcmtkb3duKTtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMucHJvcHMubGlua3MgJiYgdGhpcy5wcm9wcy5saW5rcy5nZXRMaW5rcyhwYW5lbC5yZXBsYWNlVmFyaWFibGVzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWluZm8tY29udGVudCBtYXJrZG93bi1odG1sXCI+XG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtYXJrZWRJbnRlcnBvbGF0ZWRNYXJrZG93biB9fSAvPlxuXG4gICAgICAgIHtsaW5rcyAmJiBsaW5rcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFuZWwtaW5mby1jb3JuZXItbGlua3NcIj5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGlkeCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYW5lbC1pbmZvLWNvcm5lci1saW5rc19faXRlbVwiIGhyZWY9e2xpbmsuaHJlZn0gdGFyZ2V0PXtsaW5rLnRhcmdldH0+XG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogT3BlbiB0aGUgUGFuZWwgSW5zcGVjdG9yIHdoZW4gd2UgY2xpY2sgb24gYW4gZXJyb3JcbiAgICovXG4gIG9uQ2xpY2tFcnJvciA9ICgpID0+IHtcbiAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7XG4gICAgICBpbnNwZWN0OiB0aGlzLnByb3BzLnBhbmVsLmlkLFxuICAgICAgaW5zcGVjdFRhYjogSW5zcGVjdFRhYi5FcnJvcixcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXJDb3JuZXJUeXBlKGluZm9Nb2RlOiBJbmZvTW9kZSwgY29udGVudDogUG9wb3ZlckNvbnRlbnQsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgdGhlbWUgPSBpbmZvTW9kZSA9PT0gSW5mb01vZGUuRXJyb3IgPyAnZXJyb3InIDogJ2luZm8nO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBwYW5lbC1pbmZvLWNvcm5lciBwYW5lbC1pbmZvLWNvcm5lci0tJHtpbmZvTW9kZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgY29uc3QgYXJpYUxhYmVsID0gc2VsZWN0b3JzLmNvbXBvbmVudHMuUGFuZWxzLlBhbmVsLmhlYWRlckNvcm5lckluZm8oaW5mb01vZGUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2x0aXAgY29udGVudD17Y29udGVudH0gcGxhY2VtZW50PVwidG9wLXN0YXJ0XCIgdGhlbWU9e3RoZW1lfSBpbnRlcmFjdGl2ZT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e29uQ2xpY2t9IGFyaWEtbGFiZWw9e2FyaWFMYWJlbH0+XG4gICAgICAgICAgPGkgYXJpYS1oaWRkZW4gY2xhc3NOYW1lPVwiZmFcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWluZm8tY29ybmVyLWlubmVyXCIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbmZvTW9kZTogSW5mb01vZGUgfCB1bmRlZmluZWQgPSB0aGlzLmdldEluZm9Nb2RlKCk7XG5cbiAgICBpZiAoIWluZm9Nb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mb01vZGUgPT09IEluZm9Nb2RlLkVycm9yICYmIGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb3JuZXJUeXBlKGluZm9Nb2RlLCBlcnJvciwgdGhpcy5vbkNsaWNrRXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChpbmZvTW9kZSA9PT0gSW5mb01vZGUuSW5mbyB8fCBpbmZvTW9kZSA9PT0gSW5mb01vZGUuTGlua3MpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvcm5lclR5cGUoaW5mb01vZGUsIHRoaXMuZ2V0SW5mb0NvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsSGVhZGVyQ29ybmVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSwgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBUb29sdGlwLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHN0YXRlOiBMb2FkaW5nU3RhdGU7XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlckxvYWRpbmdJbmRpY2F0b3I6IEZDPFByb3BzPiA9ICh7IHN0YXRlLCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgaWYgKHN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWxvYWRpbmdcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgPFRvb2x0aXAgY29udGVudD1cIkNhbmNlbCBxdWVyeVwiPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInBhbmVsLWxvYWRpbmdfX3NwaW5uZXIgc3Bpbi1jbG9ja3dpc2VcIiBuYW1lPVwic3luY1wiIC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5TdHJlYW1pbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1sb2FkaW5nXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIDxkaXYgdGl0bGU9XCJTdHJlYW1pbmcgKGNsaWNrIHRvIHN0b3ApXCIgY2xhc3NOYW1lPXtzdHlsZXMuc3RyZWFtSW5kaWNhdG9yfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBzdHJlYW1JbmRpY2F0b3I6IGNzc2BcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMudGV4dEZhaW50fTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggJHt0aGVtZS5jb2xvcnMudGV4dEZhaW50fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogNnB4O1xuICAgICAgcmlnaHQ6IDFweDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYW5lbEhlYWRlck1lbnVJdGVtIH0gZnJvbSAnLi9QYW5lbEhlYWRlck1lbnVJdGVtJztcbmltcG9ydCB7IFBhbmVsTWVudUl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGl0ZW1zOiBQYW5lbE1lbnVJdGVtW107XG59XG5cbmV4cG9ydCBjbGFzcyBQYW5lbEhlYWRlck1lbnUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlckl0ZW1zID0gKG1lbnU6IFBhbmVsTWVudUl0ZW1bXSwgaXNTdWJNZW51ID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS0tbWVudSBwYW5lbC1tZW51XCIgcm9sZT17aXNTdWJNZW51ID8gJycgOiAnbWVudSd9PlxuICAgICAgICB7bWVudS5tYXAoKG1lbnVJdGVtLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJNZW51SXRlbVxuICAgICAgICAgICAgICBrZXk9e2Ake21lbnVJdGVtLnRleHR9JHtpZHh9YH1cbiAgICAgICAgICAgICAgdHlwZT17bWVudUl0ZW0udHlwZX1cbiAgICAgICAgICAgICAgdGV4dD17bWVudUl0ZW0udGV4dH1cbiAgICAgICAgICAgICAgaWNvbkNsYXNzTmFtZT17bWVudUl0ZW0uaWNvbkNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgb25DbGljaz17bWVudUl0ZW0ub25DbGlja31cbiAgICAgICAgICAgICAgc2hvcnRjdXQ9e21lbnVJdGVtLnNob3J0Y3V0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bWVudUl0ZW0uc3ViTWVudSAmJiB0aGlzLnJlbmRlckl0ZW1zKG1lbnVJdGVtLnN1Yk1lbnUsIHRydWUpfVxuICAgICAgICAgICAgPC9QYW5lbEhlYWRlck1lbnVJdGVtPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1tZW51LWNvbnRhaW5lciBkcm9wZG93biBvcGVuXCI+e3RoaXMucmVuZGVySXRlbXModGhpcy5wcm9wcy5pdGVtcyl9PC9kaXY+O1xuICB9XG59XG4iLCJpbXBvcnQgeyBGQywgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBQYW5lbE1lbnVJdGVtIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IERhc2hib2FyZE1vZGVsLCBQYW5lbE1vZGVsIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGdldFBhbmVsTWVudSB9IGZyb20gJy4uLy4uL3V0aWxzL2dldFBhbmVsTWVudSc7XG5pbXBvcnQgeyBnZXRQYW5lbFN0YXRlRm9yTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGFuZWwvc3RhdGUvc2VsZWN0b3JzJztcblxuaW50ZXJmYWNlIFBhbmVsSGVhZGVyTWVudVByb3ZpZGVyQXBpIHtcbiAgaXRlbXM6IFBhbmVsTWVudUl0ZW1bXTtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFuZWw6IFBhbmVsTW9kZWw7XG4gIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIGNoaWxkcmVuOiAocHJvcHM6IFBhbmVsSGVhZGVyTWVudVByb3ZpZGVyQXBpKSA9PiBSZWFjdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlck1lbnVQcm92aWRlcjogRkM8UHJvcHM+ID0gKHsgcGFuZWwsIGRhc2hib2FyZCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPFBhbmVsTWVudUl0ZW1bXT4oW10pO1xuICBjb25zdCBhbmd1bGFyQ29tcG9uZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBnZXRQYW5lbFN0YXRlRm9yTW9kZWwoc3RhdGUsIHBhbmVsKT8uYW5ndWxhckNvbXBvbmVudCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJdGVtcyhnZXRQYW5lbE1lbnUoZGFzaGJvYXJkLCBwYW5lbCwgYW5ndWxhckNvbXBvbmVudCkpO1xuICB9LCBbZGFzaGJvYXJkLCBwYW5lbCwgYW5ndWxhckNvbXBvbmVudCwgc2V0SXRlbXNdKTtcblxuICByZXR1cm4gY2hpbGRyZW4oeyBpdGVtcyB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzLCBNb3VzZUV2ZW50LCBSZWFjdEVsZW1lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcnRlc2lhbkNvb3JkczJEIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmludGVyZmFjZSBQYW5lbEhlYWRlck1lbnVUcmlnZ2VyQXBpIHtcbiAgcGFuZWxNZW51T3BlbjogYm9vbGVhbjtcbiAgY2xvc2VNZW51OiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICBjaGlsZHJlbjogKHByb3BzOiBQYW5lbEhlYWRlck1lbnVUcmlnZ2VyQXBpKSA9PiBSZWFjdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlck1lbnVUcmlnZ2VyOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgLi4uZGl2UHJvcHMgfSkgPT4ge1xuICBjb25zdCBbY2xpY2tDb29yZGluYXRlcywgc2V0Q2xpY2tDb29yZGluYXRlc10gPSB1c2VTdGF0ZTxDYXJ0ZXNpYW5Db29yZHMyRD4oeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbcGFuZWxNZW51T3Blbiwgc2V0UGFuZWxNZW51T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IG9uTWVudVRvZ2dsZSA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGlmICghaXNDbGljayhjbGlja0Nvb3JkaW5hdGVzLCBldmVudFRvQ2xpY2tDb29yZGluYXRlcyhldmVudCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHNldFBhbmVsTWVudU9wZW4oIXBhbmVsTWVudU9wZW4pO1xuICAgIH0sXG4gICAgW2NsaWNrQ29vcmRpbmF0ZXMsIHBhbmVsTWVudU9wZW4sIHNldFBhbmVsTWVudU9wZW5dXG4gICk7XG4gIGNvbnN0IG9uTW91c2VEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgc2V0Q2xpY2tDb29yZGluYXRlcyhldmVudFRvQ2xpY2tDb29yZGluYXRlcyhldmVudCkpO1xuICAgIH0sXG4gICAgW3NldENsaWNrQ29vcmRpbmF0ZXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIHsuLi5kaXZQcm9wc30gY2xhc3NOYW1lPVwicGFuZWwtdGl0bGUtY29udGFpbmVyXCIgb25DbGljaz17b25NZW51VG9nZ2xlfSBvbk1vdXNlRG93bj17b25Nb3VzZURvd259PlxuICAgICAge2NoaWxkcmVuKHsgcGFuZWxNZW51T3BlbiwgY2xvc2VNZW51OiAoKSA9PiBzZXRQYW5lbE1lbnVPcGVuKGZhbHNlKSB9KX1cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGlzQ2xpY2soY3VycmVudDogQ2FydGVzaWFuQ29vcmRzMkQsIGNsaWNrZWQ6IENhcnRlc2lhbkNvb3JkczJEKTogYm9vbGVhbiB7XG4gIHJldHVybiBjbGlja2VkLnggPT09IGN1cnJlbnQueCAmJiBjbGlja2VkLnkgPT09IGN1cnJlbnQueTtcbn1cblxuZnVuY3Rpb24gZXZlbnRUb0NsaWNrQ29vcmRpbmF0ZXMoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KTogQ2FydGVzaWFuQ29vcmRzMkQge1xuICByZXR1cm4ge1xuICAgIHg6IE1hdGguZmxvb3IoZXZlbnQuY2xpZW50WCksXG4gICAgeTogTWF0aC5mbG9vcihldmVudC5jbGllbnRZKSxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENsaWNrT3V0c2lkZVdyYXBwZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQYW5lbEhlYWRlck1lbnVQcm92aWRlciB9IGZyb20gJy4vUGFuZWxIZWFkZXJNZW51UHJvdmlkZXInO1xuaW1wb3J0IHsgUGFuZWxIZWFkZXJNZW51IH0gZnJvbSAnLi9QYW5lbEhlYWRlck1lbnUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwsIFBhbmVsTW9kZWwgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhbmVsOiBQYW5lbE1vZGVsO1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICBzaG93OiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJNZW51V3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgc2hvdywgb25DbG9zZSwgcGFuZWwsIGRhc2hib2FyZCB9KSA9PiB7XG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2xpY2tPdXRzaWRlV3JhcHBlciBvbkNsaWNrPXtvbkNsb3NlfSBwYXJlbnQ9e2RvY3VtZW50fT5cbiAgICAgIDxQYW5lbEhlYWRlck1lbnVQcm92aWRlciBwYW5lbD17cGFuZWx9IGRhc2hib2FyZD17ZGFzaGJvYXJkfT5cbiAgICAgICAgeyh7IGl0ZW1zIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gPFBhbmVsSGVhZGVyTWVudSBpdGVtcz17aXRlbXN9IC8+O1xuICAgICAgICB9fVxuICAgICAgPC9QYW5lbEhlYWRlck1lbnVQcm92aWRlcj5cbiAgICA8L0NsaWNrT3V0c2lkZVdyYXBwZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnlSZXN1bHRNZXRhTm90aWNlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBUb29sdGlwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBub3RpY2U6IFF1ZXJ5UmVzdWx0TWV0YU5vdGljZTtcbiAgb25DbGljazogKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCB0YWI6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyTm90aWNlOiBGQzxQcm9wcz4gPSAoeyBub3RpY2UsIG9uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCBpY29uTmFtZSA9XG4gICAgbm90aWNlLnNldmVyaXR5ID09PSAnZXJyb3InIHx8IG5vdGljZS5zZXZlcml0eSA9PT0gJ3dhcm5pbmcnID8gJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJyA6ICdpbmZvLWNpcmNsZSc7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcCBjb250ZW50PXtub3RpY2UudGV4dH0ga2V5PXtub3RpY2Uuc2V2ZXJpdHl9PlxuICAgICAge25vdGljZS5pbnNwZWN0ID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWluZm8tbm90aWNlIHBvaW50ZXJcIiBvbkNsaWNrPXsoZSkgPT4gb25DbGljayhlLCBub3RpY2UuaW5zcGVjdCEpfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPXtpY29uTmFtZX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFuZWwtaW5mby1ub3RpY2VcIiBocmVmPXtub3RpY2UubGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgIDxJY29uIG5hbWU9e2ljb25OYW1lfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgKX1cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGFGcmFtZSwgUXVlcnlSZXN1bHRNZXRhTm90aWNlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBQYW5lbEhlYWRlck5vdGljZSB9IGZyb20gJy4vUGFuZWxIZWFkZXJOb3RpY2UnO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhbmVsSWQ6IG51bWJlcjtcbiAgZnJhbWVzOiBEYXRhRnJhbWVbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyTm90aWNlczogRkM8UHJvcHM+ID0gKHsgZnJhbWVzLCBwYW5lbElkIH0pID0+IHtcbiAgY29uc3Qgb3Blbkluc3BlY3QgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuU3ludGhldGljRXZlbnQsIHRhYjogc3RyaW5nKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoeyBpbnNwZWN0OiBwYW5lbElkLCBpbnNwZWN0VGFiOiB0YWIgfSk7XG4gICAgfSxcbiAgICBbcGFuZWxJZF1cbiAgKTtcblxuICAvLyBkZWR1cGUgb24gc2V2ZXJpdHlcbiAgY29uc3Qgbm90aWNlczogUmVjb3JkPHN0cmluZywgUXVlcnlSZXN1bHRNZXRhTm90aWNlPiA9IHt9O1xuICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgIGlmICghZnJhbWUubWV0YSB8fCAhZnJhbWUubWV0YS5ub3RpY2VzKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5vdGljZSBvZiBmcmFtZS5tZXRhLm5vdGljZXMpIHtcbiAgICAgIG5vdGljZXNbbm90aWNlLnNldmVyaXR5XSA9IG5vdGljZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7T2JqZWN0LnZhbHVlcyhub3RpY2VzKS5tYXAoKG5vdGljZSkgPT4gKFxuICAgICAgICA8UGFuZWxIZWFkZXJOb3RpY2Ugbm90aWNlPXtub3RpY2V9IG9uQ2xpY2s9e29wZW5JbnNwZWN0fSBrZXk9e25vdGljZS5zZXZlcml0eX0gLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7XG4gIEJ5TmFtZXNNYXRjaGVyTW9kZSxcbiAgRGF0YUZyYW1lLFxuICBEeW5hbWljQ29uZmlnVmFsdWUsXG4gIEZpZWxkQ29uZmlnU291cmNlLFxuICBGaWVsZE1hdGNoZXJJRCxcbiAgRmllbGRUeXBlLFxuICBnZXRGaWVsZERpc3BsYXlOYW1lLFxuICBpc1N5c3RlbU92ZXJyaWRlV2l0aFJlZixcbiAgU3lzdGVtQ29uZmlnT3ZlcnJpZGVSdWxlLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5jb25zdCBkaXNwbGF5T3ZlcnJpZGVSZWYgPSAnaGlkZVNlcmllc0Zyb20nO1xuY29uc3QgaXNIaWRlU2VyaWVzT3ZlcnJpZGUgPSBpc1N5c3RlbU92ZXJyaWRlV2l0aFJlZihkaXNwbGF5T3ZlcnJpZGVSZWYpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWVzVmlzaWJpbGl0eUNvbmZpZ0ZhY3RvcnkoXG4gIGxhYmVsOiBzdHJpbmcsXG4gIG1vZGU6IFNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlLFxuICBmaWVsZENvbmZpZzogRmllbGRDb25maWdTb3VyY2UsXG4gIGRhdGE6IERhdGFGcmFtZVtdXG4pIHtcbiAgY29uc3QgeyBvdmVycmlkZXMgfSA9IGZpZWxkQ29uZmlnO1xuXG4gIGNvbnN0IGRpc3BsYXlOYW1lID0gbGFiZWw7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IG92ZXJyaWRlcy5maW5kSW5kZXgoaXNIaWRlU2VyaWVzT3ZlcnJpZGUpO1xuXG4gIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgaWYgKG1vZGUgPT09IFNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlLlRvZ2dsZVNlbGVjdGlvbikge1xuICAgICAgY29uc3Qgb3ZlcnJpZGUgPSBjcmVhdGVPdmVycmlkZShbZGlzcGxheU5hbWVdKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZmllbGRDb25maWcsXG4gICAgICAgIG92ZXJyaWRlczogWy4uLmZpZWxkQ29uZmlnLm92ZXJyaWRlcywgb3ZlcnJpZGVdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5TmFtZXMgPSBnZXREaXNwbGF5TmFtZXMoZGF0YSwgZGlzcGxheU5hbWUpO1xuICAgIGNvbnN0IG92ZXJyaWRlID0gY3JlYXRlT3ZlcnJpZGUoZGlzcGxheU5hbWVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgIG92ZXJyaWRlczogWy4uLmZpZWxkQ29uZmlnLm92ZXJyaWRlcywgb3ZlcnJpZGVdLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBvdmVycmlkZXNDb3B5ID0gQXJyYXkuZnJvbShvdmVycmlkZXMpO1xuICBjb25zdCBbY3VycmVudF0gPSBvdmVycmlkZXNDb3B5LnNwbGljZShjdXJyZW50SW5kZXgsIDEpIGFzIFN5c3RlbUNvbmZpZ092ZXJyaWRlUnVsZVtdO1xuXG4gIGlmIChtb2RlID09PSBTZXJpZXNWaXNpYmlsaXR5Q2hhbmdlTW9kZS5Ub2dnbGVTZWxlY3Rpb24pIHtcbiAgICBjb25zdCBleGlzdGluZyA9IGdldEV4aXN0aW5nRGlzcGxheU5hbWVzKGN1cnJlbnQpO1xuXG4gICAgaWYgKGV4aXN0aW5nWzBdID09PSBkaXNwbGF5TmFtZSAmJiBleGlzdGluZy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmZpZWxkQ29uZmlnLFxuICAgICAgICBvdmVycmlkZXM6IG92ZXJyaWRlc0NvcHksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IG92ZXJyaWRlID0gY3JlYXRlT3ZlcnJpZGUoW2Rpc3BsYXlOYW1lXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmllbGRDb25maWcsXG4gICAgICBvdmVycmlkZXM6IFsuLi5vdmVycmlkZXNDb3B5LCBvdmVycmlkZV0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG92ZXJyaWRlID0gY3JlYXRlRXh0ZW5kZWRPdmVycmlkZShjdXJyZW50LCBkaXNwbGF5TmFtZSk7XG5cbiAgaWYgKGFsbEZpZWxkc0FyZUV4Y2x1ZGVkKG92ZXJyaWRlLCBkYXRhKSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgIG92ZXJyaWRlczogb3ZlcnJpZGVzQ29weSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5maWVsZENvbmZpZyxcbiAgICBvdmVycmlkZXM6IFsuLi5vdmVycmlkZXNDb3B5LCBvdmVycmlkZV0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU92ZXJyaWRlKFxuICBuYW1lczogc3RyaW5nW10sXG4gIG1vZGUgPSBCeU5hbWVzTWF0Y2hlck1vZGUuZXhjbHVkZSxcbiAgcHJvcGVydHk/OiBEeW5hbWljQ29uZmlnVmFsdWVcbik6IFN5c3RlbUNvbmZpZ092ZXJyaWRlUnVsZSB7XG4gIHByb3BlcnR5ID0gcHJvcGVydHkgPz8ge1xuICAgIGlkOiAnY3VzdG9tLmhpZGVGcm9tJyxcbiAgICB2YWx1ZToge1xuICAgICAgdml6OiB0cnVlLFxuICAgICAgbGVnZW5kOiBmYWxzZSxcbiAgICAgIHRvb2x0aXA6IGZhbHNlLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBfX3N5c3RlbVJlZjogZGlzcGxheU92ZXJyaWRlUmVmLFxuICAgIG1hdGNoZXI6IHtcbiAgICAgIGlkOiBGaWVsZE1hdGNoZXJJRC5ieU5hbWVzLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICBuYW1lczogbmFtZXMsXG4gICAgICAgIHByZWZpeDogbW9kZSA9PT0gQnlOYW1lc01hdGNoZXJNb2RlLmV4Y2x1ZGUgPyAnQWxsIGV4Y2VwdDonIDogdW5kZWZpbmVkLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICB7XG4gICAgICAgIC4uLnByb3BlcnR5LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHZpejogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHRvb2x0aXA6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xufVxuXG5jb25zdCBjcmVhdGVFeHRlbmRlZE92ZXJyaWRlID0gKFxuICBjdXJyZW50OiBTeXN0ZW1Db25maWdPdmVycmlkZVJ1bGUsXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcsXG4gIG1vZGUgPSBCeU5hbWVzTWF0Y2hlck1vZGUuZXhjbHVkZVxuKTogU3lzdGVtQ29uZmlnT3ZlcnJpZGVSdWxlID0+IHtcbiAgY29uc3QgcHJvcGVydHkgPSBjdXJyZW50LnByb3BlcnRpZXMuZmluZCgocCkgPT4gcC5pZCA9PT0gJ2N1c3RvbS5oaWRlRnJvbScpO1xuICBjb25zdCBleGlzdGluZyA9IGdldEV4aXN0aW5nRGlzcGxheU5hbWVzKGN1cnJlbnQpO1xuICBjb25zdCBpbmRleCA9IGV4aXN0aW5nLmZpbmRJbmRleCgobmFtZSkgPT4gbmFtZSA9PT0gZGlzcGxheU5hbWUpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBleGlzdGluZy5wdXNoKGRpc3BsYXlOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBleGlzdGluZy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZU92ZXJyaWRlKGV4aXN0aW5nLCBtb2RlLCBwcm9wZXJ0eSk7XG59O1xuXG5jb25zdCBnZXRFeGlzdGluZ0Rpc3BsYXlOYW1lcyA9IChydWxlOiBTeXN0ZW1Db25maWdPdmVycmlkZVJ1bGUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IG5hbWVzID0gcnVsZS5tYXRjaGVyLm9wdGlvbnM/Lm5hbWVzO1xuICBpZiAoIUFycmF5LmlzQXJyYXkobmFtZXMpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBuYW1lcztcbn07XG5cbmNvbnN0IGFsbEZpZWxkc0FyZUV4Y2x1ZGVkID0gKG92ZXJyaWRlOiBTeXN0ZW1Db25maWdPdmVycmlkZVJ1bGUsIGRhdGE6IERhdGFGcmFtZVtdKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBnZXRFeGlzdGluZ0Rpc3BsYXlOYW1lcyhvdmVycmlkZSkubGVuZ3RoID09PSBnZXREaXNwbGF5TmFtZXMoZGF0YSkubGVuZ3RoO1xufTtcblxuY29uc3QgZ2V0RGlzcGxheU5hbWVzID0gKGRhdGE6IERhdGFGcmFtZVtdLCBleGNsdWRlTmFtZT86IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgdW5pcXVlID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgZm9yIChjb25zdCBmcmFtZSBvZiBkYXRhKSB7XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBmcmFtZS5maWVsZHMpIHtcbiAgICAgIGlmIChmaWVsZC50eXBlICE9PSBGaWVsZFR5cGUubnVtYmVyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuYW1lID0gZ2V0RmllbGREaXNwbGF5TmFtZShmaWVsZCwgZnJhbWUsIGRhdGEpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gZXhjbHVkZU5hbWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHVuaXF1ZS5hZGQobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEFycmF5LmZyb20odW5pcXVlKTtcbn07XG4iLCJpbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4vRGFzaGJvYXJkTW9kZWwnO1xuaW1wb3J0IHsgcmVwb3J0TWV0YUFuYWx5dGljcywgTWV0YUFuYWx5dGljc0V2ZW50TmFtZSwgRGFzaGJvYXJkVmlld0V2ZW50UGF5bG9hZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdERhc2hib2FyZFZpZXdFdmVudChkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsKSB7XG4gIGNvbnN0IGV2ZW50RGF0YTogRGFzaGJvYXJkVmlld0V2ZW50UGF5bG9hZCA9IHtcbiAgICBkYXNoYm9hcmRJZDogZGFzaGJvYXJkLmlkLFxuICAgIGRhc2hib2FyZE5hbWU6IGRhc2hib2FyZC50aXRsZSxcbiAgICBkYXNoYm9hcmRVaWQ6IGRhc2hib2FyZC51aWQsXG4gICAgZm9sZGVyTmFtZTogZGFzaGJvYXJkLm1ldGEuZm9sZGVyVGl0bGUsXG4gICAgZXZlbnROYW1lOiBNZXRhQW5hbHl0aWNzRXZlbnROYW1lLkRhc2hib2FyZFZpZXcsXG4gIH07XG5cbiAgcmVwb3J0TWV0YUFuYWx5dGljcyhldmVudERhdGEpO1xufVxuIiwiLy8gU2VydmljZXMgJiBVdGlsc1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBiYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU3J2LCBnZXREYXNoYm9hcmRTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL0Rhc2hib2FyZFNydic7XG5pbXBvcnQgeyBkYXNoYm9hcmRMb2FkZXJTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL0Rhc2hib2FyZExvYWRlclNydic7XG5pbXBvcnQgeyBnZXRUaW1lU3J2LCBUaW1lU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9UaW1lU3J2JztcbmltcG9ydCB7IGtleWJpbmRpbmdTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9rZXliaW5kaW5nU3J2Jztcbi8vIEFjdGlvbnNcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZGFzaGJvYXJkSW5pdENvbXBsZXRlZCwgZGFzaGJvYXJkSW5pdEZhaWxlZCwgZGFzaGJvYXJkSW5pdEZldGNoaW5nLCBkYXNoYm9hcmRJbml0U2VydmljZXMgfSBmcm9tICcuL3JlZHVjZXJzJztcbi8vIFR5cGVzXG5pbXBvcnQgeyBEYXNoYm9hcmREVE8sIERhc2hib2FyZEluaXRQaGFzZSwgRGFzaGJvYXJkUm91dGVzLCBTdG9yZVN0YXRlLCBUaHVua0Rpc3BhdGNoLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4vRGFzaGJvYXJkTW9kZWwnO1xuaW1wb3J0IHsgbG9jYXRpb25VdGlsLCBzZXRXZWVrU3RhcnQgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGluaXRWYXJpYWJsZXNUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3ZhcmlhYmxlcy9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGVtaXREYXNoYm9hcmRWaWV3RXZlbnQgfSBmcm9tICcuL2FuYWx5dGljc1Byb2Nlc3Nvcic7XG5pbXBvcnQgeyBkYXNoYm9hcmRXYXRjaGVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2xpdmUvZGFzaGJvYXJkL2Rhc2hib2FyZFdhdGNoZXInO1xuaW1wb3J0IHsgY29uZmlnLCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGNyZWF0ZURhc2hib2FyZFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vLi4vcXVlcnkvc3RhdGUvRGFzaGJvYXJkUXVlcnlSdW5uZXIvRGFzaGJvYXJkUXVlcnlSdW5uZXInO1xuaW1wb3J0IHsgZ2V0SWZFeGlzdHNMYXN0S2V5IH0gZnJvbSAnLi4vLi4vdmFyaWFibGVzL3N0YXRlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyB0b1N0YXRlS2V5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3ZhcmlhYmxlcy91dGlscyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnYXBwL2NvcmUvc3RvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXNoYm9hcmRBcmdzIHtcbiAgdXJsVWlkPzogc3RyaW5nO1xuICB1cmxTbHVnPzogc3RyaW5nO1xuICB1cmxUeXBlPzogc3RyaW5nO1xuICB1cmxGb2xkZXJJZD86IHN0cmluZyB8IG51bGw7XG4gIHJvdXRlTmFtZT86IHN0cmluZztcbiAgZml4VXJsOiBib29sZWFuO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhc2hib2FyZChcbiAgYXJnczogSW5pdERhc2hib2FyZEFyZ3MsXG4gIGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoLFxuICBnZXRTdGF0ZTogKCkgPT4gU3RvcmVTdGF0ZVxuKTogUHJvbWlzZTxEYXNoYm9hcmREVE8gfCBudWxsPiB7XG4gIC8vIFdoZW4gY3JlYXRpbmcgbmV3IG9yIGFkZGluZyBwYW5lbHMgdG8gYSBkYXNoYm9hcmQgZnJvbSBleHBsb3JlIHdlIGxvYWQgaXQgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IG1vZGVsID0gc3RvcmUuZ2V0T2JqZWN0PERhc2hib2FyZERUTz4oREFTSEJPQVJEX0ZST01fTFNfS0VZKTtcbiAgaWYgKG1vZGVsKSB7XG4gICAgcmVtb3ZlRGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICB0cnkge1xuICAgIHN3aXRjaCAoYXJncy5yb3V0ZU5hbWUpIHtcbiAgICAgIGNhc2UgRGFzaGJvYXJkUm91dGVzLkhvbWU6IHtcbiAgICAgICAgLy8gbG9hZCBob21lIGRhc2hcbiAgICAgICAgY29uc3QgZGFzaERUTzogRGFzaGJvYXJkRFRPID0gYXdhaXQgYmFja2VuZFNydi5nZXQoJy9hcGkvZGFzaGJvYXJkcy9ob21lJyk7XG5cbiAgICAgICAgLy8gaWYgdXNlciBzcGVjaWZpZWQgYSBjdXN0b20gaG9tZSBkYXNoYm9hcmQgcmVkaXJlY3QgdG8gdGhhdFxuICAgICAgICBpZiAoZGFzaERUTy5yZWRpcmVjdFVyaSkge1xuICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGxvY2F0aW9uVXRpbC5zdHJpcEJhc2VGcm9tVXJsKGRhc2hEVE8ucmVkaXJlY3RVcmkpO1xuICAgICAgICAgIGxvY2F0aW9uU2VydmljZS5yZXBsYWNlKG5ld1VybCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkaXNhYmxlIHNvbWUgYWN0aW9ucyBvbiB0aGUgZGVmYXVsdCBob21lIGRhc2hib2FyZFxuICAgICAgICBkYXNoRFRPLm1ldGEuY2FuU2F2ZSA9IGZhbHNlO1xuICAgICAgICBkYXNoRFRPLm1ldGEuY2FuU2hhcmUgPSBmYWxzZTtcbiAgICAgICAgZGFzaERUTy5tZXRhLmNhblN0YXIgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGRhc2hEVE87XG4gICAgICB9XG4gICAgICBjYXNlIERhc2hib2FyZFJvdXRlcy5Ob3JtYWw6IHtcbiAgICAgICAgY29uc3QgZGFzaERUTzogRGFzaGJvYXJkRFRPID0gYXdhaXQgZGFzaGJvYXJkTG9hZGVyU3J2LmxvYWREYXNoYm9hcmQoYXJncy51cmxUeXBlLCBhcmdzLnVybFNsdWcsIGFyZ3MudXJsVWlkKTtcblxuICAgICAgICBpZiAoYXJncy5maXhVcmwgJiYgZGFzaERUTy5tZXRhLnVybCkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBjdXJyZW50IHVybCBpcyBjb3JyZWN0IChtaWdodCBiZSBvbGQgc2x1ZylcbiAgICAgICAgICBjb25zdCBkYXNoYm9hcmRVcmwgPSBsb2NhdGlvblV0aWwuc3RyaXBCYXNlRnJvbVVybChkYXNoRFRPLm1ldGEudXJsKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLnBhdGhuYW1lO1xuXG4gICAgICAgICAgaWYgKGRhc2hib2FyZFVybCAhPT0gY3VycmVudFBhdGgpIHtcbiAgICAgICAgICAgIC8vIFNwcmVhZCBjdXJyZW50IGxvY2F0aW9uIHRvIHBlcnNpc3Qgc2VhcmNoIHBhcmFtcyB1c2VkIGZvciBuYXZpZ2F0aW9uXG4gICAgICAgICAgICBsb2NhdGlvblNlcnZpY2UucmVwbGFjZSh7XG4gICAgICAgICAgICAgIC4uLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLFxuICAgICAgICAgICAgICBwYXRobmFtZTogZGFzaGJvYXJkVXJsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGNvcnJlY3QgdXJsIGNvcnJlY3RpbmcnLCBkYXNoYm9hcmRVcmwsIGN1cnJlbnRQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhc2hEVE87XG4gICAgICB9XG4gICAgICBjYXNlIERhc2hib2FyZFJvdXRlcy5OZXc6IHtcbiAgICAgICAgcmV0dXJuIGdldE5ld0Rhc2hib2FyZE1vZGVsRGF0YShhcmdzLnVybEZvbGRlcklkKTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IHsgbWVzc2FnZTogJ1Vua25vd24gcm91dGUgJyArIGFyZ3Mucm91dGVOYW1lIH07XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJZ25vcmUgY2FuY2VsbGVkIGVycm9yc1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBkaXNwYXRjaChkYXNoYm9hcmRJbml0RmFpbGVkKHsgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBkYXNoYm9hcmQnLCBlcnJvcjogZXJyIH0pKTtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGFjdGlvbiAob3Igc2FnYSkgZG9lcyBldmVyeXRoaW5nIG5lZWRlZCB0byBib290c3RyYXAgYSBkYXNoYm9hcmQgJiBkYXNoYm9hcmQgbW9kZWwuXG4gKiBGaXJzdCBpdCBoYW5kbGVzIHRoZSBwcm9jZXNzIG9mIGZldGNoaW5nIHRoZSBkYXNoYm9hcmQsIGNvcnJlY3RpbmcgdGhlIHVybCBpZiByZXF1aXJlZCAoY2F1c2luZyByZWRpcmVjdHMvdXJsIHVwZGF0ZXMpXG4gKlxuICogVGhpcyBpcyB1c2VkIGJvdGggZm9yIHNpbmdsZSBkYXNoYm9hcmQgJiBzb2xvIHBhbmVsIHJvdXRlcywgaG9tZSAmIG5ldyBkYXNoYm9hcmQgcm91dGVzLlxuICpcbiAqIFRoZW4gaXQgaGFuZGxlcyB0aGUgaW5pdGlhbGl6aW5nIG9mIHRoZSBvbGQgYW5ndWxhciBzZXJ2aWNlcyB0aGF0IHRoZSBkYXNoYm9hcmQgY29tcG9uZW50cyAmIHBhbmVscyBzdGlsbCBkZXBlbmQgb25cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGFzaGJvYXJkKGFyZ3M6IEluaXREYXNoYm9hcmRBcmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIC8vIHNldCBmZXRjaGluZyBzdGF0ZVxuICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRGZXRjaGluZygpKTtcblxuICAgIC8vIGZldGNoIGRhc2hib2FyZCBkYXRhXG4gICAgY29uc3QgZGFzaERUTyA9IGF3YWl0IGZldGNoRGFzaGJvYXJkKGFyZ3MsIGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG5cbiAgICAvLyByZXR1cm5zIG51bGwgaWYgdGhlcmUgd2FzIGEgcmVkaXJlY3Qgb3IgZXJyb3JcbiAgICBpZiAoIWRhc2hEVE8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzZXQgaW5pdGlhbGl6aW5nIHN0YXRlXG4gICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdFNlcnZpY2VzKCkpO1xuXG4gICAgLy8gY3JlYXRlIG1vZGVsXG4gICAgbGV0IGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gICAgdHJ5IHtcbiAgICAgIGRhc2hib2FyZCA9IG5ldyBEYXNoYm9hcmRNb2RlbChkYXNoRFRPLmRhc2hib2FyZCwgZGFzaERUTy5tZXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRGYWlsZWQoeyBtZXNzYWdlOiAnRmFpbGVkIGNyZWF0ZSBkYXNoYm9hcmQgbW9kZWwnLCBlcnJvcjogZXJyIH0pKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZGQgbWlzc2luZyBvcmdJZCBxdWVyeSBwYXJhbVxuICAgIGNvbnN0IHN0b3JlU3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpO1xuXG4gICAgaWYgKCFxdWVyeVBhcmFtcy5vcmdJZCkge1xuICAgICAgLy8gVE9ETyB0aGlzIGlzIGN1cnJlbnRseSBub3QgcG9zc2libGUgd2l0aCB0aGUgTG9jYXRpb25TZXJ2aWNlIEFQSVxuICAgICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoeyBvcmdJZDogc3RvcmVTdGF0ZS51c2VyLm9yZ0lkIH0sIHRydWUpO1xuICAgIH1cblxuICAgIC8vIGluaXQgc2VydmljZXNcbiAgICBjb25zdCB0aW1lU3J2OiBUaW1lU3J2ID0gZ2V0VGltZVNydigpO1xuICAgIGNvbnN0IGRhc2hib2FyZFNydjogRGFzaGJvYXJkU3J2ID0gZ2V0RGFzaGJvYXJkU3J2KCk7XG5cbiAgICAvLyBsZWdhY3kgc3J2IHN0YXRlLCB3ZSBuZWVkIHRoaXMgdmFsdWUgdXBkYXRlZCBmb3IgYnVpbHQtaW4gYW5ub3RhdGlvbnNcbiAgICBkYXNoYm9hcmRTcnYuc2V0Q3VycmVudChkYXNoYm9hcmQpO1xuXG4gICAgdGltZVNydi5pbml0KGRhc2hib2FyZCk7XG5cbiAgICBjb25zdCBkYXNoYm9hcmRVaWQgPSB0b1N0YXRlS2V5KGFyZ3MudXJsVWlkID8/IGRhc2hib2FyZC51aWQpO1xuICAgIC8vIHRlbXBsYXRlIHZhbHVlcyBzZXJ2aWNlIG5lZWRzIHRvIGluaXRpYWxpemUgY29tcGxldGVseSBiZWZvcmUgdGhlIHJlc3Qgb2YgdGhlIGRhc2hib2FyZCBjYW4gbG9hZFxuICAgIGF3YWl0IGRpc3BhdGNoKGluaXRWYXJpYWJsZXNUcmFuc2FjdGlvbihkYXNoYm9hcmRVaWQsIGRhc2hib2FyZCkpO1xuXG4gICAgLy8gRGFzaGJvYXJkUXVlcnlSdW5uZXIgbmVlZHMgdG8gcnVuIGFmdGVyIGFsbCB2YXJpYWJsZXMgaGF2ZSBiZWVuIHJlc29sdmVkIHNvIHRoYXQgYW55IGFubm90YXRpb24gcXVlcnkgaW5jbHVkaW5nIGEgdmFyaWFibGVcbiAgICAvLyB3aWxsIGJlIGNvcnJlY3RseSByZXNvbHZlZFxuICAgIGNvbnN0IHJ1bm5lciA9IGNyZWF0ZURhc2hib2FyZFF1ZXJ5UnVubmVyKHsgZGFzaGJvYXJkLCB0aW1lU3J2IH0pO1xuICAgIHJ1bm5lci5ydW4oeyBkYXNoYm9hcmQsIHJhbmdlOiB0aW1lU3J2LnRpbWVSYW5nZSgpIH0pO1xuXG4gICAgaWYgKGdldElmRXhpc3RzTGFzdEtleShnZXRTdGF0ZSgpKSAhPT0gZGFzaGJvYXJkVWlkKSB7XG4gICAgICAvLyBpZiBhIHByZXZpb3VzIGRhc2hib2FyZCBoYXMgc2xvdyBydW5uaW5nIHZhcmlhYmxlIHF1ZXJpZXMgdGhlIGJhdGNoIHVpZCB3aWxsIGJlIHRoZSBuZXcgb25lXG4gICAgICAvLyBidXQgdGhlIGFyZ3MudXJsVWlkIHdpbGwgYmUgdGhlIHNhbWUgYXMgYmVmb3JlIGluaXRWYXJpYWJsZXNUcmFuc2FjdGlvbiB3YXMgY2FsbGVkIHNvIHRoZW4gd2UgY2FuJ3QgY29udGludWUgaW5pdGlhbGl6aW5nXG4gICAgICAvLyB0aGUgcHJldmlvdXMgZGFzaGJvYXJkLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGRhc2hib2FyZCBpcyBpbiBhIGRpZmZlcmVudCBpbml0IHBoYXNlIGl0IG1lYW5zIGl0IGNhbmNlbGxlZCBkdXJpbmcgc2VydmljZSBpbml0XG4gICAgaWYgKGdldFN0YXRlKCkuZGFzaGJvYXJkLmluaXRQaGFzZSAhPT0gRGFzaGJvYXJkSW5pdFBoYXNlLlNlcnZpY2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGRhc2hib2FyZC5wcm9jZXNzUmVwZWF0cygpO1xuXG4gICAgICAvLyBoYW5kbGUgYXV0byBmaXggZXhwZXJpbWVudGFsIGZlYXR1cmVcbiAgICAgIGlmIChxdWVyeVBhcmFtcy5hdXRvZml0cGFuZWxzKSB7XG4gICAgICAgIGRhc2hib2FyZC5hdXRvRml0UGFuZWxzKHdpbmRvdy5pbm5lckhlaWdodCwgcXVlcnlQYXJhbXMua2lvc2spO1xuICAgICAgfVxuXG4gICAgICBrZXliaW5kaW5nU3J2LnNldHVwRGFzaGJvYXJkQmluZGluZ3MoZGFzaGJvYXJkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbignRGFzaGJvYXJkIGluaXQgZmFpbGVkJywgZXJyKSkpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cblxuICAgIC8vIHNlbmQgb3BlbiBkYXNoYm9hcmQgZXZlbnRcbiAgICBpZiAoYXJncy5yb3V0ZU5hbWUgIT09IERhc2hib2FyZFJvdXRlcy5OZXcpIHtcbiAgICAgIGVtaXREYXNoYm9hcmRWaWV3RXZlbnQoZGFzaGJvYXJkKTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIG9uIHRoZSBjdXJyZW50IGRhc2hib2FyZFxuICAgICAgZGFzaGJvYXJkV2F0Y2hlci53YXRjaChkYXNoYm9hcmQudWlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGFzaGJvYXJkV2F0Y2hlci5sZWF2ZSgpO1xuICAgIH1cblxuICAgIC8vIHNldCB3ZWVrIHN0YXJ0XG4gICAgaWYgKGRhc2hib2FyZC53ZWVrU3RhcnQgIT09ICcnKSB7XG4gICAgICBzZXRXZWVrU3RhcnQoZGFzaGJvYXJkLndlZWtTdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFdlZWtTdGFydChjb25maWcuYm9vdERhdGEudXNlci53ZWVrU3RhcnQpO1xuICAgIH1cblxuICAgIC8vIHlheSB3ZSBhcmUgZG9uZVxuICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRDb21wbGV0ZWQoZGFzaGJvYXJkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdEYXNoYm9hcmRNb2RlbERhdGEodXJsRm9sZGVySWQ/OiBzdHJpbmcgfCBudWxsKTogYW55IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBtZXRhOiB7XG4gICAgICBjYW5TdGFyOiBmYWxzZSxcbiAgICAgIGNhblNoYXJlOiBmYWxzZSxcbiAgICAgIGlzTmV3OiB0cnVlLFxuICAgICAgZm9sZGVySWQ6IDAsXG4gICAgfSxcbiAgICBkYXNoYm9hcmQ6IHtcbiAgICAgIHRpdGxlOiAnTmV3IGRhc2hib2FyZCcsXG4gICAgICBwYW5lbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdhZGQtcGFuZWwnLFxuICAgICAgICAgIGdyaWRQb3M6IHsgeDogMCwgeTogMCwgdzogMTIsIGg6IDkgfSxcbiAgICAgICAgICB0aXRsZTogJ1BhbmVsIFRpdGxlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcblxuICBpZiAodXJsRm9sZGVySWQpIHtcbiAgICBkYXRhLm1ldGEuZm9sZGVySWQgPSBwYXJzZUludCh1cmxGb2xkZXJJZCwgMTApO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmNvbnN0IERBU0hCT0FSRF9GUk9NX0xTX0tFWSA9ICdEQVNIQk9BUkRfRlJPTV9MU19LRVknO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UobW9kZWw6IERhc2hib2FyZERUTykge1xuICBzdG9yZS5zZXRPYmplY3QoREFTSEJPQVJEX0ZST01fTFNfS0VZLCBtb2RlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgc3RvcmUuZGVsZXRlKERBU0hCT0FSRF9GUk9NX0xTX0tFWSk7XG59XG4iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ2FwcC9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyBBbmd1bGFyQ29tcG9uZW50LCBnZXREYXRhU291cmNlU3J2LCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFBhbmVsTWVudUl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIGFkZExpYnJhcnlQYW5lbCxcbiAgY29weVBhbmVsLFxuICBkdXBsaWNhdGVQYW5lbCxcbiAgcmVtb3ZlUGFuZWwsXG4gIHNoYXJlUGFuZWwsXG4gIHVubGlua0xpYnJhcnlQYW5lbCxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9wYW5lbCc7XG5pbXBvcnQgeyBpc1BhbmVsTW9kZWxMaWJyYXJ5UGFuZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvZ3VhcmQnO1xuaW1wb3J0IHsgUGFuZWxNb2RlbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUvUGFuZWxNb2RlbCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUvRGFzaGJvYXJkTW9kZWwnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb0V4cGxvcmUgfSBmcm9tICcuLi8uLi9leHBsb3JlL3N0YXRlL21haW4nO1xuaW1wb3J0IHsgZ2V0RXhwbG9yZVVybCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMvZXhwbG9yZSc7XG5pbXBvcnQgeyBnZXRUaW1lU3J2IH0gZnJvbSAnLi4vc2VydmljZXMvVGltZVNydic7XG5pbXBvcnQgeyBQYW5lbEN0cmwgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhbmVsTWVudShcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbCxcbiAgcGFuZWw6IFBhbmVsTW9kZWwsXG4gIGFuZ3VsYXJDb21wb25lbnQ/OiBBbmd1bGFyQ29tcG9uZW50IHwgbnVsbFxuKTogUGFuZWxNZW51SXRlbVtdIHtcbiAgY29uc3Qgb25WaWV3UGFuZWwgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoe1xuICAgICAgdmlld1BhbmVsOiBwYW5lbC5pZCxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkVkaXRQYW5lbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7XG4gICAgICBlZGl0UGFuZWw6IHBhbmVsLmlkLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uU2hhcmVQYW5lbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzaGFyZVBhbmVsKGRhc2hib2FyZCwgcGFuZWwpO1xuICB9O1xuXG4gIGNvbnN0IG9uQWRkTGlicmFyeVBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZExpYnJhcnlQYW5lbChkYXNoYm9hcmQsIHBhbmVsKTtcbiAgfTtcblxuICBjb25zdCBvblVubGlua0xpYnJhcnlQYW5lbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB1bmxpbmtMaWJyYXJ5UGFuZWwocGFuZWwpO1xuICB9O1xuXG4gIGNvbnN0IG9uSW5zcGVjdFBhbmVsID0gKHRhYj86IHN0cmluZykgPT4ge1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHtcbiAgICAgIGluc3BlY3Q6IHBhbmVsLmlkLFxuICAgICAgaW5zcGVjdFRhYjogdGFiLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uTW9yZSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBvbkR1cGxpY2F0ZVBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGR1cGxpY2F0ZVBhbmVsKGRhc2hib2FyZCwgcGFuZWwpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ29weVBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvcHlQYW5lbChwYW5lbCk7XG4gIH07XG5cbiAgY29uc3Qgb25SZW1vdmVQYW5lbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZW1vdmVQYW5lbChkYXNoYm9hcmQsIHBhbmVsLCB0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbk5hdmlnYXRlVG9FeHBsb3JlID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG9wZW5Jbk5ld1dpbmRvdyA9XG4gICAgICBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgPyAodXJsOiBzdHJpbmcpID0+IHdpbmRvdy5vcGVuKGAke2NvbmZpZy5hcHBTdWJVcmx9JHt1cmx9YCkgOiB1bmRlZmluZWQ7XG4gICAgc3RvcmUuZGlzcGF0Y2gobmF2aWdhdGVUb0V4cGxvcmUocGFuZWwsIHsgZ2V0RGF0YVNvdXJjZVNydiwgZ2V0VGltZVNydiwgZ2V0RXhwbG9yZVVybCwgb3BlbkluTmV3V2luZG93IH0pIGFzIGFueSk7XG4gIH07XG5cbiAgY29uc3QgbWVudTogUGFuZWxNZW51SXRlbVtdID0gW107XG5cbiAgaWYgKCFwYW5lbC5pc0VkaXRpbmcpIHtcbiAgICBtZW51LnB1c2goe1xuICAgICAgdGV4dDogJ1ZpZXcnLFxuICAgICAgaWNvbkNsYXNzTmFtZTogJ2V5ZScsXG4gICAgICBvbkNsaWNrOiBvblZpZXdQYW5lbCxcbiAgICAgIHNob3J0Y3V0OiAndicsXG4gICAgfSk7XG4gIH1cblxuICBpZiAoZGFzaGJvYXJkLmNhbkVkaXRQYW5lbChwYW5lbCkgJiYgIXBhbmVsLmlzRWRpdGluZykge1xuICAgIG1lbnUucHVzaCh7XG4gICAgICB0ZXh0OiAnRWRpdCcsXG4gICAgICBpY29uQ2xhc3NOYW1lOiAnZWRpdCcsXG4gICAgICBvbkNsaWNrOiBvbkVkaXRQYW5lbCxcbiAgICAgIHNob3J0Y3V0OiAnZScsXG4gICAgfSk7XG4gIH1cblxuICBtZW51LnB1c2goe1xuICAgIHRleHQ6ICdTaGFyZScsXG4gICAgaWNvbkNsYXNzTmFtZTogJ3NoYXJlLWFsdCcsXG4gICAgb25DbGljazogb25TaGFyZVBhbmVsLFxuICAgIHNob3J0Y3V0OiAncCBzJyxcbiAgfSk7XG5cbiAgaWYgKGNvbnRleHRTcnYuaGFzQWNjZXNzVG9FeHBsb3JlKCkgJiYgIShwYW5lbC5wbHVnaW4gJiYgcGFuZWwucGx1Z2luLm1ldGEuc2tpcERhdGFRdWVyeSkpIHtcbiAgICBtZW51LnB1c2goe1xuICAgICAgdGV4dDogJ0V4cGxvcmUnLFxuICAgICAgaWNvbkNsYXNzTmFtZTogJ2NvbXBhc3MnLFxuICAgICAgc2hvcnRjdXQ6ICd4JyxcbiAgICAgIG9uQ2xpY2s6IG9uTmF2aWdhdGVUb0V4cGxvcmUsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBpbnNwZWN0TWVudTogUGFuZWxNZW51SXRlbVtdID0gW107XG5cbiAgLy8gT25seSBzaG93IHRoZXNlIGluc3BlY3QgYWN0aW9ucyBmb3IgZGF0YSBwbHVnaW5zXG4gIGlmIChwYW5lbC5wbHVnaW4gJiYgIXBhbmVsLnBsdWdpbi5tZXRhLnNraXBEYXRhUXVlcnkpIHtcbiAgICBpbnNwZWN0TWVudS5wdXNoKHtcbiAgICAgIHRleHQ6ICdEYXRhJyxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IG9uSW5zcGVjdFBhbmVsKCdkYXRhJyksXG4gICAgfSk7XG5cbiAgICBpZiAoZGFzaGJvYXJkLm1ldGEuY2FuRWRpdCkge1xuICAgICAgaW5zcGVjdE1lbnUucHVzaCh7XG4gICAgICAgIHRleHQ6ICdRdWVyeScsXG4gICAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IG9uSW5zcGVjdFBhbmVsKCdxdWVyeScpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW5zcGVjdE1lbnUucHVzaCh7XG4gICAgdGV4dDogJ1BhbmVsIEpTT04nLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IG9uSW5zcGVjdFBhbmVsKCdqc29uJyksXG4gIH0pO1xuXG4gIG1lbnUucHVzaCh7XG4gICAgdHlwZTogJ3N1Ym1lbnUnLFxuICAgIHRleHQ6ICdJbnNwZWN0JyxcbiAgICBpY29uQ2xhc3NOYW1lOiAnaW5mby1jaXJjbGUnLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IG9uSW5zcGVjdFBhbmVsKCksXG4gICAgc2hvcnRjdXQ6ICdpJyxcbiAgICBzdWJNZW51OiBpbnNwZWN0TWVudSxcbiAgfSk7XG5cbiAgY29uc3Qgc3ViTWVudTogUGFuZWxNZW51SXRlbVtdID0gW107XG5cbiAgaWYgKGRhc2hib2FyZC5jYW5FZGl0UGFuZWwocGFuZWwpICYmICEocGFuZWwuaXNWaWV3aW5nIHx8IHBhbmVsLmlzRWRpdGluZykpIHtcbiAgICBzdWJNZW51LnB1c2goe1xuICAgICAgdGV4dDogJ0R1cGxpY2F0ZScsXG4gICAgICBvbkNsaWNrOiBvbkR1cGxpY2F0ZVBhbmVsLFxuICAgICAgc2hvcnRjdXQ6ICdwIGQnLFxuICAgIH0pO1xuXG4gICAgc3ViTWVudS5wdXNoKHtcbiAgICAgIHRleHQ6ICdDb3B5JyxcbiAgICAgIG9uQ2xpY2s6IG9uQ29weVBhbmVsLFxuICAgIH0pO1xuXG4gICAgaWYgKGlzUGFuZWxNb2RlbExpYnJhcnlQYW5lbChwYW5lbCkpIHtcbiAgICAgIHN1Yk1lbnUucHVzaCh7XG4gICAgICAgIHRleHQ6ICdVbmxpbmsgbGlicmFyeSBwYW5lbCcsXG4gICAgICAgIG9uQ2xpY2s6IG9uVW5saW5rTGlicmFyeVBhbmVsLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Yk1lbnUucHVzaCh7XG4gICAgICAgIHRleHQ6ICdDcmVhdGUgbGlicmFyeSBwYW5lbCcsXG4gICAgICAgIG9uQ2xpY2s6IG9uQWRkTGlicmFyeVBhbmVsLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkIG9sZCBhbmd1bGFyIHBhbmVsIG9wdGlvbnNcbiAgaWYgKGFuZ3VsYXJDb21wb25lbnQpIHtcbiAgICBjb25zdCBzY29wZSA9IGFuZ3VsYXJDb21wb25lbnQuZ2V0U2NvcGUoKTtcbiAgICBjb25zdCBwYW5lbEN0cmw6IFBhbmVsQ3RybCA9IHNjb3BlLiQkY2hpbGRIZWFkLmN0cmw7XG4gICAgY29uc3QgYW5ndWxhck1lbnVJdGVtcyA9IHBhbmVsQ3RybC5nZXRFeHRlbmRlZE1lbnUoKTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhbmd1bGFyTWVudUl0ZW1zKSB7XG4gICAgICBjb25zdCByZWFjdEl0ZW06IFBhbmVsTWVudUl0ZW0gPSB7XG4gICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcbiAgICAgICAgaHJlZjogaXRlbS5ocmVmLFxuICAgICAgICBzaG9ydGN1dDogaXRlbS5zaG9ydGN1dCxcbiAgICAgIH07XG5cbiAgICAgIGlmIChpdGVtLmNsaWNrKSB7XG4gICAgICAgIHJlYWN0SXRlbS5vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIHNjb3BlLiRldmFsKGl0ZW0uY2xpY2ssIHsgY3RybDogcGFuZWxDdHJsIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdWJNZW51LnB1c2gocmVhY3RJdGVtKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXBhbmVsLmlzRWRpdGluZyAmJiBzdWJNZW51Lmxlbmd0aCkge1xuICAgIG1lbnUucHVzaCh7XG4gICAgICB0eXBlOiAnc3VibWVudScsXG4gICAgICB0ZXh0OiAnTW9yZS4uLicsXG4gICAgICBpY29uQ2xhc3NOYW1lOiAnY3ViZScsXG4gICAgICBzdWJNZW51LFxuICAgICAgb25DbGljazogb25Nb3JlLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGRhc2hib2FyZC5jYW5FZGl0UGFuZWwocGFuZWwpICYmICFwYW5lbC5pc0VkaXRpbmcgJiYgIXBhbmVsLmlzVmlld2luZykge1xuICAgIG1lbnUucHVzaCh7IHR5cGU6ICdkaXZpZGVyJywgdGV4dDogJycgfSk7XG5cbiAgICBtZW51LnB1c2goe1xuICAgICAgdGV4dDogJ1JlbW92ZScsXG4gICAgICBpY29uQ2xhc3NOYW1lOiAndHJhc2gtYWx0JyxcbiAgICAgIG9uQ2xpY2s6IG9uUmVtb3ZlUGFuZWwsXG4gICAgICBzaG9ydGN1dDogJ3AgcicsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWVudTtcbn1cbiIsImltcG9ydCB7IGFwcGx5RmllbGRPdmVycmlkZXMsIEFycmF5RGF0YUZyYW1lLCBnZXREZWZhdWx0VGltZVJhbmdlLCBMb2FkaW5nU3RhdGUsIFBhbmVsRGF0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IERhc2hib2FyZE1vZGVsLCBQYW5lbE1vZGVsIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc2VkRGF0YUZyYW1lcyB9IGZyb20gJy4uLy4uL3F1ZXJ5L3N0YXRlL3J1blJlcXVlc3QnO1xuaW1wb3J0IHsgU25hcHNob3RXb3JrZXIgfSBmcm9tICcuLi8uLi9xdWVyeS9zdGF0ZS9EYXNoYm9hcmRRdWVyeVJ1bm5lci9TbmFwc2hvdFdvcmtlcic7XG5pbXBvcnQgeyBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyB9IGZyb20gJy4vcGFuZWwnO1xuaW1wb3J0IHsgZ2V0VGltZVNydiB9IGZyb20gJy4uL3NlcnZpY2VzL1RpbWVTcnYnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNuYXBzaG90RGF0YShwYW5lbDogUGFuZWxNb2RlbCwgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbCk6IFBhbmVsRGF0YSB7XG4gIGNvbnN0IGRhdGEgPSBnZXRQcm9jZXNzZWREYXRhRnJhbWVzKHBhbmVsLnNuYXBzaG90RGF0YSk7XG4gIGNvbnN0IHdvcmtlciA9IG5ldyBTbmFwc2hvdFdvcmtlcigpO1xuICBjb25zdCBvcHRpb25zID0geyBkYXNoYm9hcmQsIHJhbmdlOiBnZXREZWZhdWx0VGltZVJhbmdlKCkgfTtcbiAgY29uc3QgYW5ub3RhdGlvbkV2ZW50cyA9IHdvcmtlci5jYW5Xb3JrKG9wdGlvbnMpID8gd29ya2VyLmdldEFubm90YXRpb25zSW5TbmFwc2hvdChkYXNoYm9hcmQsIHBhbmVsLmlkKSA6IFtdO1xuICBjb25zdCBhbm5vdGF0aW9ucyA9IFtuZXcgQXJyYXlEYXRhRnJhbWUoYW5ub3RhdGlvbkV2ZW50cyldO1xuICBjb25zdCB0aW1lRGF0YSA9IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzKHBhbmVsLCBnZXRUaW1lU3J2KCkudGltZVJhbmdlKCkpO1xuXG4gIHJldHVybiB7XG4gICAgdGltZVJhbmdlOiB0aW1lRGF0YS50aW1lUmFuZ2UsXG4gICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgIHNlcmllczogYXBwbHlGaWVsZE92ZXJyaWRlcyh7XG4gICAgICBkYXRhLFxuICAgICAgZmllbGRDb25maWc6IHtcbiAgICAgICAgZGVmYXVsdHM6IHt9LFxuICAgICAgICBvdmVycmlkZXM6IFtdLFxuICAgICAgfSxcbiAgICAgIHJlcGxhY2VWYXJpYWJsZXM6IHBhbmVsLnJlcGxhY2VWYXJpYWJsZXMsXG4gICAgICBmaWVsZENvbmZpZ1JlZ2lzdHJ5OiBwYW5lbC5wbHVnaW4hLmZpZWxkQ29uZmlnUmVnaXN0cnksXG4gICAgICB0aGVtZTogY29uZmlnLnRoZW1lMixcbiAgICAgIHRpbWVab25lOiBkYXNoYm9hcmQuZ2V0VGltZXpvbmUoKSxcbiAgICB9KSxcbiAgICBhbm5vdGF0aW9ucyxcbiAgfTtcbn1cbiIsImV4cG9ydCBlbnVtIEluc3BlY3RUYWIge1xuICBEYXRhID0gJ2RhdGEnLFxuICBNZXRhID0gJ21ldGEnLCAvLyBXaGVuIHJlc3VsdCBtZXRhZGF0YSBleGlzdHNcbiAgRXJyb3IgPSAnZXJyb3InLFxuICBTdGF0cyA9ICdzdGF0cycsXG4gIEpTT04gPSAnanNvbicsXG4gIFF1ZXJ5ID0gJ3F1ZXJ5JyxcbiAgQWN0aW9ucyA9ICdhY3Rpb25zJywgLy8gQUxQSEEhXG59XG4iLCJpbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9QYW5lbE1vZGVsJztcbmltcG9ydCB7XG4gIERhdGFMaW5rLFxuICBEaXNwbGF5VmFsdWUsXG4gIEZpZWxkRGlzcGxheSxcbiAgZm9ybWF0dGVkVmFsdWVUb1N0cmluZyxcbiAgZ2V0RmllbGREaXNwbGF5VmFsdWVzUHJveHksXG4gIGdldFRpbWVGaWVsZCxcbiAgSW50ZXJwb2xhdGVGdW5jdGlvbixcbiAgTGFiZWxzLFxuICBMaW5rTW9kZWxTdXBwbGllcixcbiAgU2NvcGVkVmFyLFxuICBTY29wZWRWYXJzLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldExpbmtTcnYgfSBmcm9tICcuL2xpbmtfc3J2JztcblxuaW50ZXJmYWNlIFNlcmllc1ZhcnMge1xuICBuYW1lPzogc3RyaW5nO1xuICByZWZJZD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEZpZWxkVmFycyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWxzPzogTGFiZWxzO1xufVxuXG5pbnRlcmZhY2UgVmFsdWVWYXJzIHtcbiAgcmF3OiBhbnk7XG4gIG51bWVyaWM6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xuICB0aW1lPzogbnVtYmVyO1xuICBjYWxjPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGF0YVZpZXdWYXJzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVmSWQ/OiBzdHJpbmc7XG4gIGZpZWxkcz86IFJlY29yZDxzdHJpbmcsIERpc3BsYXlWYWx1ZT47XG59XG5cbmludGVyZmFjZSBEYXRhTGlua1Njb3BlZFZhcnMgZXh0ZW5kcyBTY29wZWRWYXJzIHtcbiAgX19zZXJpZXM6IFNjb3BlZFZhcjxTZXJpZXNWYXJzPjtcbiAgX19maWVsZDogU2NvcGVkVmFyPEZpZWxkVmFycz47XG4gIF9fdmFsdWU6IFNjb3BlZFZhcjxWYWx1ZVZhcnM+O1xuICBfX2RhdGE6IFNjb3BlZFZhcjxEYXRhVmlld1ZhcnM+O1xufVxuXG4vKipcbiAqIExpbmsgc3VwcGxpZXJzIGNyZWF0ZXMgbGluayBtb2RlbHMgYmFzZWQgb24gYSBsaW5rIG9yaWdpblxuICovXG5leHBvcnQgY29uc3QgZ2V0RmllbGRMaW5rc1N1cHBsaWVyID0gKHZhbHVlOiBGaWVsZERpc3BsYXkpOiBMaW5rTW9kZWxTdXBwbGllcjxGaWVsZERpc3BsYXk+IHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgbGlua3MgPSB2YWx1ZS5maWVsZC5saW5rcztcbiAgaWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaW5rczogKHJlcGxhY2VWYXJpYWJsZXM6IEludGVycG9sYXRlRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHNjb3BlZFZhcnM6IFBhcnRpYWw8RGF0YUxpbmtTY29wZWRWYXJzPiA9IHt9O1xuXG4gICAgICBpZiAodmFsdWUudmlldykge1xuICAgICAgICBjb25zdCB7IGRhdGFGcmFtZSB9ID0gdmFsdWUudmlldztcblxuICAgICAgICBzY29wZWRWYXJzWydfX3NlcmllcyddID0ge1xuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhRnJhbWUubmFtZSxcbiAgICAgICAgICAgIHJlZklkOiBkYXRhRnJhbWUucmVmSWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnU2VyaWVzJyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmaWVsZCA9IHZhbHVlLmNvbEluZGV4ICE9PSB1bmRlZmluZWQgPyBkYXRhRnJhbWUuZmllbGRzW3ZhbHVlLmNvbEluZGV4XSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICBzY29wZWRWYXJzWydfX2ZpZWxkJ10gPSB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICBsYWJlbHM6IGZpZWxkLmxhYmVscyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiAnRmllbGQnLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAodmFsdWUucm93SW5kZXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5yb3dJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHRpbWVGaWVsZCB9ID0gZ2V0VGltZUZpZWxkKGRhdGFGcmFtZSk7XG4gICAgICAgICAgICBzY29wZWRWYXJzWydfX3ZhbHVlJ10gPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgcmF3OiBmaWVsZC52YWx1ZXMuZ2V0KHZhbHVlLnJvd0luZGV4KSxcbiAgICAgICAgICAgICAgICBudW1lcmljOiB2YWx1ZS5kaXNwbGF5Lm51bWVyaWMsXG4gICAgICAgICAgICAgICAgdGV4dDogZm9ybWF0dGVkVmFsdWVUb1N0cmluZyh2YWx1ZS5kaXNwbGF5KSxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lRmllbGQgPyB0aW1lRmllbGQudmFsdWVzLmdldCh2YWx1ZS5yb3dJbmRleCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRleHQ6ICdWYWx1ZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEV4cG9zZSBvdGhlciB2YWx1ZXMgb24gdGhlIHJvd1xuICAgICAgICAgIGlmICh2YWx1ZS52aWV3KSB7XG4gICAgICAgICAgICBzY29wZWRWYXJzWydfX2RhdGEnXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhRnJhbWUubmFtZSxcbiAgICAgICAgICAgICAgICByZWZJZDogZGF0YUZyYW1lLnJlZklkLFxuICAgICAgICAgICAgICAgIGZpZWxkczogZ2V0RmllbGREaXNwbGF5VmFsdWVzUHJveHkoe1xuICAgICAgICAgICAgICAgICAgZnJhbWU6IGRhdGFGcmFtZSxcbiAgICAgICAgICAgICAgICAgIHJvd0luZGV4OiB2YWx1ZS5yb3dJbmRleCEsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRleHQ6ICdEYXRhJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhbGN1bGF0aW9uXG4gICAgICAgICAgc2NvcGVkVmFyc1snX192YWx1ZSddID0ge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgcmF3OiB2YWx1ZS5kaXNwbGF5Lm51bWVyaWMsXG4gICAgICAgICAgICAgIG51bWVyaWM6IHZhbHVlLmRpc3BsYXkubnVtZXJpYyxcbiAgICAgICAgICAgICAgdGV4dDogZm9ybWF0dGVkVmFsdWVUb1N0cmluZyh2YWx1ZS5kaXNwbGF5KSxcbiAgICAgICAgICAgICAgY2FsYzogdmFsdWUubmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiAnVmFsdWUnLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWQUxVRScsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVwbGFjZTogSW50ZXJwb2xhdGVGdW5jdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCB2YXJzOiBTY29wZWRWYXJzIHwgdW5kZWZpbmVkLCBmbXQ/OiBzdHJpbmcgfCBGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBmaW5hbFZhcnM6IFNjb3BlZFZhcnMgPSB7XG4gICAgICAgICAgLi4uKHNjb3BlZFZhcnMgYXMgU2NvcGVkVmFycyksXG4gICAgICAgICAgLi4udmFycyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VWYXJpYWJsZXModmFsdWUsIGZpbmFsVmFycywgZm10KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBsaW5rcy5tYXAoKGxpbms6IERhdGFMaW5rKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRMaW5rU3J2KCkuZ2V0RGF0YUxpbmtVSU1vZGVsKGxpbmssIHJlcGxhY2UsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFuZWxMaW5rc1N1cHBsaWVyID0gKHBhbmVsOiBQYW5lbE1vZGVsKTogTGlua01vZGVsU3VwcGxpZXI8UGFuZWxNb2RlbD4gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBsaW5rcyA9IHBhbmVsLmxpbmtzO1xuXG4gIGlmICghbGlua3MgfHwgbGlua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0TGlua3M6ICgpID0+IHtcbiAgICAgIHJldHVybiBsaW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgcmV0dXJuIGdldExpbmtTcnYoKS5nZXREYXRhTGlua1VJTW9kZWwobGluaywgcGFuZWwucmVwbGFjZVZhcmlhYmxlcywgcGFuZWwpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IFBhbmVsU3RhdGUgfSBmcm9tICcuL3JlZHVjZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhbmVsU3RhdGVGb3JNb2RlbChzdGF0ZTogU3RvcmVTdGF0ZSwgbW9kZWw6IFBhbmVsTW9kZWwpOiBQYW5lbFN0YXRlIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHN0YXRlLnBhbmVsc1ttb2RlbC5rZXldO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29uZmlnT3ZlcnJpZGVSdWxlLFxuICBEeW5hbWljQ29uZmlnVmFsdWUsXG4gIEZpZWxkQ29sb3JNb2RlSWQsXG4gIEZpZWxkQ29uZmlnU291cmNlLFxuICBGaWVsZE1hdGNoZXJJRCxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VTZXJpZXNDb2xvckNvbmZpZ0ZhY3RvcnkgPSAoXG4gIGxhYmVsOiBzdHJpbmcsXG4gIGNvbG9yOiBzdHJpbmcsXG4gIGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZ1NvdXJjZVxuKTogRmllbGRDb25maWdTb3VyY2UgPT4ge1xuICBjb25zdCB7IG92ZXJyaWRlcyB9ID0gZmllbGRDb25maWc7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IGZpZWxkQ29uZmlnLm92ZXJyaWRlcy5maW5kSW5kZXgoKG92ZXJyaWRlKSA9PiB7XG4gICAgcmV0dXJuIG92ZXJyaWRlLm1hdGNoZXIuaWQgPT09IEZpZWxkTWF0Y2hlcklELmJ5TmFtZSAmJiBvdmVycmlkZS5tYXRjaGVyLm9wdGlvbnMgPT09IGxhYmVsO1xuICB9KTtcblxuICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgIG92ZXJyaWRlczogWy4uLmZpZWxkQ29uZmlnLm92ZXJyaWRlcywgY3JlYXRlT3ZlcnJpZGUobGFiZWwsIGNvbG9yKV0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG92ZXJyaWRlc0NvcHkgPSBBcnJheS5mcm9tKG92ZXJyaWRlcyk7XG4gIGNvbnN0IGV4aXN0aW5nID0gb3ZlcnJpZGVzQ29weVtjdXJyZW50SW5kZXhdO1xuICBjb25zdCBwcm9wZXJ0eUluZGV4ID0gZXhpc3RpbmcucHJvcGVydGllcy5maW5kSW5kZXgoKHApID0+IHAuaWQgPT09ICdjb2xvcicpO1xuXG4gIGlmIChwcm9wZXJ0eUluZGV4IDwgMCkge1xuICAgIG92ZXJyaWRlc0NvcHlbY3VycmVudEluZGV4XSA9IHtcbiAgICAgIC4uLmV4aXN0aW5nLFxuICAgICAgcHJvcGVydGllczogWy4uLmV4aXN0aW5nLnByb3BlcnRpZXMsIGNyZWF0ZVByb3BlcnR5KGNvbG9yKV0sXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgIG92ZXJyaWRlczogb3ZlcnJpZGVzQ29weSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcHJvcGVydGllc0NvcHkgPSBBcnJheS5mcm9tKGV4aXN0aW5nLnByb3BlcnRpZXMpO1xuICBwcm9wZXJ0aWVzQ29weVtwcm9wZXJ0eUluZGV4XSA9IGNyZWF0ZVByb3BlcnR5KGNvbG9yKTtcblxuICBvdmVycmlkZXNDb3B5W2N1cnJlbnRJbmRleF0gPSB7XG4gICAgLi4uZXhpc3RpbmcsXG4gICAgcHJvcGVydGllczogcHJvcGVydGllc0NvcHksXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5maWVsZENvbmZpZyxcbiAgICBvdmVycmlkZXM6IG92ZXJyaWRlc0NvcHksXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVPdmVycmlkZSA9IChsYWJlbDogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogQ29uZmlnT3ZlcnJpZGVSdWxlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVyOiB7XG4gICAgICBpZDogRmllbGRNYXRjaGVySUQuYnlOYW1lLFxuICAgICAgb3B0aW9uczogbGFiZWwsXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiBbY3JlYXRlUHJvcGVydHkoY29sb3IpXSxcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb3BlcnR5ID0gKGNvbG9yOiBzdHJpbmcpOiBEeW5hbWljQ29uZmlnVmFsdWUgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkOiAnY29sb3InLFxuICAgIHZhbHVlOiB7XG4gICAgICBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLkZpeGVkLFxuICAgICAgZml4ZWRDb2xvcjogY29sb3IsXG4gICAgfSxcbiAgfTtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNTb2xvUm91dGUocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAvKGQtc29sb3xkYXNoYm9hcmQtc29sbykvLnRlc3QocGF0aD8udG9Mb3dlckNhc2UoKSk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiQXV0b1NpemVyIiwiRGFzaGJvYXJkUGFuZWwiLCJpbml0RGFzaGJvYXJkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkYXNoYm9hcmQiLCJnZXRNb2RlbCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIlNvbG9QYW5lbFBhZ2UiLCJwYW5lbCIsIm5vdEZvdW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYXRjaCIsInJvdXRlIiwicHJvcHMiLCJ1cmxTbHVnIiwicGFyYW1zIiwic2x1ZyIsInVybFVpZCIsInVpZCIsInVybFR5cGUiLCJ0eXBlIiwicm91dGVOYW1lIiwiZml4VXJsIiwiZ2V0UGFuZWxJZCIsInBhcnNlSW50IiwicXVlcnlQYXJhbXMiLCJwYW5lbElkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiZ2V0UGFuZWxCeVVybElkIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJTb2xvUGFuZWwiLCJ3aWR0aCIsImhlaWdodCIsImtleSIsIlB1cmVDb21wb25lbnQiLCJQYW5lbENocm9tZSIsIlBhbmVsQ2hyb21lQW5ndWxhciIsImNsZWFuVXBQYW5lbFN0YXRlIiwic2V0UGFuZWxJbnN0YW5jZVN0YXRlIiwiaW5pdFBhbmVsU3RhdGUiLCJMYXp5TG9hZGVyIiwicGFuZWxTdGF0ZSIsInBhbmVscyIsInN0YXRlS2V5IiwicGx1Z2luIiwiaW5zdGFuY2VTdGF0ZSIsIkRhc2hib2FyZFBhbmVsVW5jb25uZWN0ZWQiLCJ2YWx1ZSIsInYiLCJpc0luVmlldyIsImxhenkiLCJvblBhbmVsTG9hZCIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic2tpcFN0YXRlQ2xlYW5VcCIsImlzVmlld2luZyIsImlzRWRpdGluZyIsInJlbmRlclBhbmVsQ2hyb21lIiwiYW5ndWxhclBhbmVsQ3RybCIsIm9uSW5zdGFuY2VTdGF0ZUNoYW5nZSIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlVW5pcXVlSWQiLCJ1c2VFZmZlY3RPbmNlIiwiY2hpbGRyZW4iLCJvbkxvYWQiLCJvbkNoYW5nZSIsImlkIiwibG9hZGVkIiwic2V0TG9hZGVkIiwic2V0SXNJblZpZXciLCJ3cmFwcGVyUmVmIiwiYWRkQ2FsbGJhY2siLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwid3JhcHBlckVsIiwiY3VycmVudCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsImNhbGxiYWNrcyIsInVub2JzZXJ2ZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJkaXNjb25uZWN0IiwiYyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInRhcmdldCIsInJvb3RNYXJnaW4iLCJjbGFzc05hbWVzIiwiU3Vic2NyaXB0aW9uIiwibG9jYXRpb25TZXJ2aWNlIiwiUmVmcmVzaEV2ZW50IiwiQW5ub3RhdGlvbkNoYW5nZUV2ZW50IiwiQ29yZUFwcCIsIkRhc2hib2FyZEN1cnNvclN5bmMiLCJnZXREZWZhdWx0VGltZVJhbmdlIiwiTG9hZGluZ1N0YXRlIiwidG9EYXRhRnJhbWVEVE8iLCJ0b1V0YyIsIkVycm9yQm91bmRhcnkiLCJQYW5lbENvbnRleHRQcm92aWRlciIsInNlbGVjdG9ycyIsIlBhbmVsSGVhZGVyIiwiZ2V0VGltZVNydiIsImFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIiwicHJvZmlsZXIiLCJjb25maWciLCJQQU5FTF9CT1JERVIiLCJsb2FkU25hcHNob3REYXRhIiwiUmVuZGVyRXZlbnQiLCJjaGFuZ2VTZXJpZXNDb2xvckNvbmZpZ0ZhY3RvcnkiLCJzZXJpZXNWaXNpYmlsaXR5Q29uZmlnRmFjdG9yeSIsImRlbGV0ZUFubm90YXRpb24iLCJzYXZlQW5ub3RhdGlvbiIsInVwZGF0ZUFubm90YXRpb24iLCJnZXREYXNoYm9hcmRRdWVyeVJ1bm5lciIsImxpdmVUaW1lciIsImlzU29sb1JvdXRlIiwiY29udGV4dFNydiIsIkRFRkFVTFRfUExVR0lOX0VSUk9SIiwiY29uc3RydWN0b3IiLCJvbmx5TG9jYWwiLCJCb29sZWFuIiwibWV0YSIsImNhbkVkaXQiLCJjYW5NYWtlRWRpdGFibGUiLCJjYW5BZGQiLCJhY2Nlc3NDb250cm9sRW5hYmxlZCIsImFubm90YXRpb25zUGVybWlzc2lvbnMiLCJjYW5FZGl0RGFzaGJvYXJkIiwiZGFzaGJvYXJkSWQiLCJvcmdhbml6YXRpb24iLCJjYW5EZWxldGUiLCJPZmYiLCJncmFwaFRvb2x0aXAiLCJjb250ZXh0IiwibGFiZWwiLCJjb2xvciIsIm9uRmllbGRDb25maWdDaGFuZ2UiLCJmaWVsZENvbmZpZyIsIm1vZGUiLCJkYXRhIiwic2VyaWVzIiwic29ydEtleSIsImxlZ2VuZE9wdGlvbnMiLCJvcHRpb25zIiwibGVnZW5kIiwic29ydERlc2MiLCJzb3J0QnkiLCJ1bmRlZmluZWQiLCJvbk9wdGlvbnNDaGFuZ2UiLCJyZWZyZXNoV2hlbkluVmlldyIsInRpbWVEYXRhIiwidGltZVNydiIsInRpbWVSYW5nZSIsIndhbnRzUXVlcnlFeGVjdXRpb24iLCJydW5BbGxQYW5lbFF1ZXJpZXMiLCJnZXRUaW1lem9uZSIsInJlbmRlckNvdW50ZXIiLCJsaXZlVGltZSIsInN0YXRlVXBkYXRlIiwidXBkYXRlT3B0aW9ucyIsInVwZGF0ZUZpZWxkQ29uZmlnIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZXZlbnQiLCJpc1JlZ2lvbiIsImZyb20iLCJ0byIsImFubm8iLCJ0aW1lIiwidGltZUVuZCIsInRhZ3MiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJydW4iLCJyYW5nZSIsImV2ZW50QnVzIiwicHVibGlzaCIsInNldFRpbWUiLCJldmVudHMiLCJuZXdTY29wZWRCdXMiLCJldmVudEZpbHRlciIsImlzRmlyc3RMb2FkIiwiYXBwIiwiZ2V0UGFuZWxDb250ZXh0QXBwIiwic3luYyIsImdldFN5bmMiLCJvblNlcmllc0NvbG9yQ2hhbmdlIiwib25Ub2dnbGVTZXJpZXNWaXNpYmlsaXR5Iiwib25TZXJpZXNWaXNpYmlsaXR5Q2hhbmdlIiwib25Bbm5vdGF0aW9uQ3JlYXRlIiwib25Bbm5vdGF0aW9uVXBkYXRlIiwib25Bbm5vdGF0aW9uRGVsZXRlIiwiY2FuQWRkQW5ub3RhdGlvbnMiLCJjYW5BZGRBbm5vdGF0aW9uIiwib25Ub2dnbGVMZWdlbmRTb3J0IiwiY2FuRWRpdEFubm90YXRpb25zIiwiY2FuRWRpdEFubm90YXRpb24iLCJjYW5EZWxldGVBbm5vdGF0aW9ucyIsImNhbkRlbGV0ZUFubm90YXRpb24iLCJnZXRJbml0aWFsUGFuZWxEYXRhU3RhdGUiLCJQYW5lbEVkaXRvciIsIlBhbmVsVmlld2VyIiwiRGFzaGJvYXJkIiwiTm90U3RhcnRlZCIsInN1YnMiLCJhZGQiLCJzdWJzY3JpYmUiLCJvblJlZnJlc2giLCJvblJlbmRlciIsInBhbmVsSW5pdGlhbGl6ZWQiLCJoYXNQYW5lbFNuYXBzaG90IiwiZ2V0UXVlcnlSdW5uZXIiLCJnZXREYXRhIiwid2l0aFRyYW5zZm9ybXMiLCJ3aXRoRmllbGRDb25maWciLCJuZXh0Iiwib25EYXRhVXBkYXRlIiwibGlzdGVuIiwidW5zdWJzY3JpYmUiLCJyZW1vdmUiLCJsaXZlVGltZUNoYW5nZWQiLCJkZWx0YSIsInZhbHVlT2YiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJ1cGRhdGVJbnRlcnZhbCIsInNraXBEYXRhUXVlcnkiLCJMb2FkaW5nIiwiRXJyb3IiLCJEb25lIiwic25hcHNob3QiLCJzbmFwc2hvdERhdGEiLCJtYXAiLCJmcmFtZSIsInNob3VsZFNpZ25hbFJlbmRlcmluZ0NvbXBsZXRlZCIsImxvYWRpbmdTdGF0ZSIsInBsdWdpbk1ldGEiLCJza2lwRmlyc3RSZW5kZXIiLCJyZW5kZXJQYW5lbCIsInRoZW1lIiwicmVuZGVyaW5nQ29tcGxldGVkIiwiUGFuZWxDb21wb25lbnQiLCJoZWFkZXJIZWlnaHQiLCJoYXNPdmVybGF5SGVhZGVyIiwicGFuZWxIZWFkZXJIZWlnaHQiLCJjaHJvbWVQYWRkaW5nIiwibm9QYWRkaW5nIiwicGFuZWxQYWRkaW5nIiwicGFuZWxXaWR0aCIsImlubmVyUGFuZWxIZWlnaHQiLCJwYW5lbENvbnRlbnRDbGFzc05hbWVzIiwicGFuZWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsInRyYW5zcGFyZW50IiwicmVwbGFjZVZhcmlhYmxlcyIsIm9uQ2hhbmdlVGltZVJhbmdlIiwicmVxdWVzdCIsInRpbWVJbmZvIiwiaGFzVGl0bGUiLCJhbGVydFN0YXRlIiwiY29udGFpbmVyQ2xhc3NOYW1lcyIsImdldExvY2F0aW9uIiwicGF0aG5hbWUiLCJjb21wb25lbnRzIiwiUGFuZWxzIiwiUGFuZWwiLCJjb250YWluZXJCeVRpdGxlIiwibGlua3MiLCJvblBhbmVsRXJyb3IiLCJvblBhbmVsRXJyb3JSZWNvdmVyIiwiZ2V0QW5ndWxhckxvYWRlciIsInNldFBhbmVsQW5ndWxhckNvbXBvbmVudCIsImdldFBhbmVsU3RhdGVGb3JNb2RlbCIsIlBhbmVsQ2hyb21lQW5ndWxhclVuY29ubmVjdGVkIiwibG9hZEFuZ3VsYXJQYW5lbCIsInF1ZXJ5UnVubmVyIiwib25QYW5lbERhdGFVcGRhdGUiLCJwcmV2U3RhdGUiLCJzY29wZVByb3BzIiwic2l6ZSIsImdldElubmVyUGFuZWxIZWlnaHQiLCJnZXRJbm5lclBhbmVsV2lkdGgiLCJlbGVtZW50IiwibG9hZGVyIiwidGVtcGxhdGUiLCJhbmd1bGFyQ29tcG9uZW50IiwibG9hZCIsImFsZXJ0IiwiY3NzIiwiY3giLCJJY29uIiwidXNlU3R5bGVzMiIsIlBhbmVsSGVhZGVyQ29ybmVyIiwiZ2V0UGFuZWxMaW5rc1N1cHBsaWVyIiwiUGFuZWxIZWFkZXJOb3RpY2VzIiwiUGFuZWxIZWFkZXJNZW51VHJpZ2dlciIsIlBhbmVsSGVhZGVyTG9hZGluZ0luZGljYXRvciIsIlBhbmVsSGVhZGVyTWVudVdyYXBwZXIiLCJvbkNhbmNlbFF1ZXJ5IiwiY2FuY2VsUXVlcnkiLCJnZXREaXNwbGF5VGl0bGUiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJwYW5lbFN0eWxlcyIsInNjb3BlZFZhcnMiLCJjbG9zZU1lbnUiLCJwYW5lbE1lbnVPcGVuIiwibWFyZ2luUmlnaHQiLCJ0aXRsZVRleHQiLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodE1lZGl1bSIsImJvZHkiLCJmb250U2l6ZSIsImNvbG9ycyIsInByaW1hcnkiLCJyZW5kZXJNYXJrZG93biIsIlRvb2x0aXAiLCJnZXRUZW1wbGF0ZVNydiIsIkluc3BlY3RUYWIiLCJJbmZvTW9kZSIsIkluZm8iLCJMaW5rcyIsIm1hcmtkb3duIiwiaW50ZXJwb2xhdGVkTWFya2Rvd24iLCJyZXBsYWNlIiwibWFya2VkSW50ZXJwb2xhdGVkTWFya2Rvd24iLCJnZXRMaW5rcyIsIl9faHRtbCIsImxpbmsiLCJpZHgiLCJocmVmIiwicGFydGlhbCIsImluc3BlY3QiLCJpbnNwZWN0VGFiIiwicmVuZGVyQ29ybmVyVHlwZSIsImluZm9Nb2RlIiwiY29udGVudCIsIm9uQ2xpY2siLCJ0b0xvd2VyQ2FzZSIsImFyaWFMYWJlbCIsImhlYWRlckNvcm5lckluZm8iLCJnZXRJbmZvTW9kZSIsIm9uQ2xpY2tFcnJvciIsImdldEluZm9Db250ZW50IiwidXNlU3R5bGVzIiwiZ2V0U3R5bGVzIiwiU3RyZWFtaW5nIiwic3RyZWFtSW5kaWNhdG9yIiwidGV4dEZhaW50IiwiUGFuZWxIZWFkZXJNZW51SXRlbSIsIlBhbmVsSGVhZGVyTWVudSIsIm1lbnUiLCJpc1N1Yk1lbnUiLCJtZW51SXRlbSIsImljb25DbGFzc05hbWUiLCJzaG9ydGN1dCIsInN1Yk1lbnUiLCJyZW5kZXJJdGVtcyIsIml0ZW1zIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJnZXRQYW5lbE1lbnUiLCJQYW5lbEhlYWRlck1lbnVQcm92aWRlciIsInNldEl0ZW1zIiwidXNlQ2FsbGJhY2siLCJkaXZQcm9wcyIsImNsaWNrQ29vcmRpbmF0ZXMiLCJzZXRDbGlja0Nvb3JkaW5hdGVzIiwieCIsInkiLCJzZXRQYW5lbE1lbnVPcGVuIiwib25NZW51VG9nZ2xlIiwiaXNDbGljayIsImV2ZW50VG9DbGlja0Nvb3JkaW5hdGVzIiwic3RvcFByb3BhZ2F0aW9uIiwib25Nb3VzZURvd24iLCJjbGlja2VkIiwiTWF0aCIsImZsb29yIiwiY2xpZW50WCIsImNsaWVudFkiLCJDbGlja091dHNpZGVXcmFwcGVyIiwic2hvdyIsIm9uQ2xvc2UiLCJkb2N1bWVudCIsIlBhbmVsSGVhZGVyTm90aWNlIiwibm90aWNlIiwiaWNvbk5hbWUiLCJzZXZlcml0eSIsImUiLCJmcmFtZXMiLCJvcGVuSW5zcGVjdCIsInRhYiIsIm5vdGljZXMiLCJ2YWx1ZXMiLCJCeU5hbWVzTWF0Y2hlck1vZGUiLCJGaWVsZE1hdGNoZXJJRCIsIkZpZWxkVHlwZSIsImdldEZpZWxkRGlzcGxheU5hbWUiLCJpc1N5c3RlbU92ZXJyaWRlV2l0aFJlZiIsIlNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlIiwiZGlzcGxheU92ZXJyaWRlUmVmIiwiaXNIaWRlU2VyaWVzT3ZlcnJpZGUiLCJvdmVycmlkZXMiLCJkaXNwbGF5TmFtZSIsImN1cnJlbnRJbmRleCIsImZpbmRJbmRleCIsIlRvZ2dsZVNlbGVjdGlvbiIsIm92ZXJyaWRlIiwiY3JlYXRlT3ZlcnJpZGUiLCJkaXNwbGF5TmFtZXMiLCJnZXREaXNwbGF5TmFtZXMiLCJvdmVycmlkZXNDb3B5IiwiQXJyYXkiLCJzcGxpY2UiLCJleGlzdGluZyIsImdldEV4aXN0aW5nRGlzcGxheU5hbWVzIiwiY3JlYXRlRXh0ZW5kZWRPdmVycmlkZSIsImFsbEZpZWxkc0FyZUV4Y2x1ZGVkIiwibmFtZXMiLCJleGNsdWRlIiwicHJvcGVydHkiLCJ2aXoiLCJ0b29sdGlwIiwiX19zeXN0ZW1SZWYiLCJtYXRjaGVyIiwiYnlOYW1lcyIsInByZWZpeCIsInJlYWRPbmx5IiwicHJvcGVydGllcyIsImZpbmQiLCJwIiwiaW5kZXgiLCJuYW1lIiwicHVzaCIsInJ1bGUiLCJpc0FycmF5IiwiZXhjbHVkZU5hbWUiLCJ1bmlxdWUiLCJTZXQiLCJmaWVsZCIsImZpZWxkcyIsIm51bWJlciIsInJlcG9ydE1ldGFBbmFseXRpY3MiLCJNZXRhQW5hbHl0aWNzRXZlbnROYW1lIiwiZW1pdERhc2hib2FyZFZpZXdFdmVudCIsImV2ZW50RGF0YSIsImRhc2hib2FyZE5hbWUiLCJkYXNoYm9hcmRVaWQiLCJmb2xkZXJOYW1lIiwiZm9sZGVyVGl0bGUiLCJldmVudE5hbWUiLCJEYXNoYm9hcmRWaWV3IiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJiYWNrZW5kU3J2IiwiZ2V0RGFzaGJvYXJkU3J2IiwiZGFzaGJvYXJkTG9hZGVyU3J2Iiwia2V5YmluZGluZ1NydiIsIm5vdGlmeUFwcCIsImRhc2hib2FyZEluaXRDb21wbGV0ZWQiLCJkYXNoYm9hcmRJbml0RmFpbGVkIiwiZGFzaGJvYXJkSW5pdEZldGNoaW5nIiwiZGFzaGJvYXJkSW5pdFNlcnZpY2VzIiwiRGFzaGJvYXJkSW5pdFBoYXNlIiwiRGFzaGJvYXJkUm91dGVzIiwiRGFzaGJvYXJkTW9kZWwiLCJsb2NhdGlvblV0aWwiLCJzZXRXZWVrU3RhcnQiLCJpbml0VmFyaWFibGVzVHJhbnNhY3Rpb24iLCJkYXNoYm9hcmRXYXRjaGVyIiwiY3JlYXRlRGFzaGJvYXJkUXVlcnlSdW5uZXIiLCJnZXRJZkV4aXN0c0xhc3RLZXkiLCJ0b1N0YXRlS2V5Iiwic3RvcmUiLCJmZXRjaERhc2hib2FyZCIsImFyZ3MiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibW9kZWwiLCJnZXRPYmplY3QiLCJEQVNIQk9BUkRfRlJPTV9MU19LRVkiLCJyZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSIsIkhvbWUiLCJkYXNoRFRPIiwiZ2V0IiwicmVkaXJlY3RVcmkiLCJuZXdVcmwiLCJzdHJpcEJhc2VGcm9tVXJsIiwiY2FuU2F2ZSIsImNhblNoYXJlIiwiY2FuU3RhciIsIk5vcm1hbCIsImxvYWREYXNoYm9hcmQiLCJ1cmwiLCJkYXNoYm9hcmRVcmwiLCJjdXJyZW50UGF0aCIsIk5ldyIsImdldE5ld0Rhc2hib2FyZE1vZGVsRGF0YSIsInVybEZvbGRlcklkIiwiZXJyIiwiY2FuY2VsbGVkIiwic3RvcmVTdGF0ZSIsImdldFNlYXJjaE9iamVjdCIsIm9yZ0lkIiwidXNlciIsImRhc2hib2FyZFNydiIsInNldEN1cnJlbnQiLCJpbml0IiwicnVubmVyIiwiaW5pdFBoYXNlIiwiU2VydmljZXMiLCJwcm9jZXNzUmVwZWF0cyIsImF1dG9maXRwYW5lbHMiLCJhdXRvRml0UGFuZWxzIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJraW9zayIsInNldHVwRGFzaGJvYXJkQmluZGluZ3MiLCJ3YXRjaCIsImxlYXZlIiwid2Vla1N0YXJ0IiwiYm9vdERhdGEiLCJpc05ldyIsImZvbGRlcklkIiwiZ3JpZFBvcyIsInciLCJoIiwic2V0RGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UiLCJzZXRPYmplY3QiLCJkZWxldGUiLCJnZXREYXRhU291cmNlU3J2IiwiYWRkTGlicmFyeVBhbmVsIiwiY29weVBhbmVsIiwiZHVwbGljYXRlUGFuZWwiLCJyZW1vdmVQYW5lbCIsInNoYXJlUGFuZWwiLCJ1bmxpbmtMaWJyYXJ5UGFuZWwiLCJpc1BhbmVsTW9kZWxMaWJyYXJ5UGFuZWwiLCJuYXZpZ2F0ZVRvRXhwbG9yZSIsImdldEV4cGxvcmVVcmwiLCJvblZpZXdQYW5lbCIsInByZXZlbnREZWZhdWx0Iiwidmlld1BhbmVsIiwib25FZGl0UGFuZWwiLCJlZGl0UGFuZWwiLCJvblNoYXJlUGFuZWwiLCJvbkFkZExpYnJhcnlQYW5lbCIsIm9uVW5saW5rTGlicmFyeVBhbmVsIiwib25JbnNwZWN0UGFuZWwiLCJvbk1vcmUiLCJvbkR1cGxpY2F0ZVBhbmVsIiwib25Db3B5UGFuZWwiLCJvblJlbW92ZVBhbmVsIiwib25OYXZpZ2F0ZVRvRXhwbG9yZSIsIm9wZW5Jbk5ld1dpbmRvdyIsImN0cmxLZXkiLCJtZXRhS2V5Iiwib3BlbiIsImFwcFN1YlVybCIsImNhbkVkaXRQYW5lbCIsImhhc0FjY2Vzc1RvRXhwbG9yZSIsImluc3BlY3RNZW51Iiwic2NvcGUiLCJnZXRTY29wZSIsInBhbmVsQ3RybCIsIiQkY2hpbGRIZWFkIiwiY3RybCIsImFuZ3VsYXJNZW51SXRlbXMiLCJnZXRFeHRlbmRlZE1lbnUiLCJpdGVtIiwicmVhY3RJdGVtIiwiY2xpY2siLCIkZXZhbCIsImFwcGx5RmllbGRPdmVycmlkZXMiLCJBcnJheURhdGFGcmFtZSIsImdldFByb2Nlc3NlZERhdGFGcmFtZXMiLCJTbmFwc2hvdFdvcmtlciIsIndvcmtlciIsImFubm90YXRpb25FdmVudHMiLCJjYW5Xb3JrIiwiZ2V0QW5ub3RhdGlvbnNJblNuYXBzaG90IiwiYW5ub3RhdGlvbnMiLCJkZWZhdWx0cyIsImZpZWxkQ29uZmlnUmVnaXN0cnkiLCJ0aGVtZTIiLCJ0aW1lWm9uZSIsImZvcm1hdHRlZFZhbHVlVG9TdHJpbmciLCJnZXRGaWVsZERpc3BsYXlWYWx1ZXNQcm94eSIsImdldFRpbWVGaWVsZCIsImdldExpbmtTcnYiLCJnZXRGaWVsZExpbmtzU3VwcGxpZXIiLCJ2aWV3IiwiZGF0YUZyYW1lIiwicmVmSWQiLCJjb2xJbmRleCIsImxhYmVscyIsInJvd0luZGV4IiwidGltZUZpZWxkIiwicmF3IiwibnVtZXJpYyIsImRpc3BsYXkiLCJjYWxjIiwidmFycyIsImZtdCIsImZpbmFsVmFycyIsImdldERhdGFMaW5rVUlNb2RlbCIsIkZpZWxkQ29sb3JNb2RlSWQiLCJieU5hbWUiLCJwcm9wZXJ0eUluZGV4IiwiY3JlYXRlUHJvcGVydHkiLCJwcm9wZXJ0aWVzQ29weSIsIkZpeGVkIiwiZml4ZWRDb2xvciIsInBhdGgiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==
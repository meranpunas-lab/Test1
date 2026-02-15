"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["mysqlPlugin"],{

/***/ "./public/app/angular/AngularLocationWrapper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularLocationWrapper": () => (/* binding */ AngularLocationWrapper)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");

 // Ref: https://github.com/angular/angular.js/blob/ae8e903edf88a83fedd116ae02c0628bf72b150c/src/ng/location.js#L5

const DEFAULT_PORTS = {
  http: 80,
  https: 443,
  ftp: 21
};
class AngularLocationWrapper {
  constructor() {
    this.absUrl = this.wrapInDeprecationWarning(this.absUrl);
    this.hash = this.wrapInDeprecationWarning(this.hash);
    this.host = this.wrapInDeprecationWarning(this.host);
    this.path = this.wrapInDeprecationWarning(this.path);
    this.port = this.wrapInDeprecationWarning(this.port, 'window.location');
    this.protocol = this.wrapInDeprecationWarning(this.protocol, 'window.location');
    this.replace = this.wrapInDeprecationWarning(this.replace);
    this.search = this.wrapInDeprecationWarning(this.search);
    this.state = this.wrapInDeprecationWarning(this.state);
    this.url = this.wrapInDeprecationWarning(this.url);
  }

  wrapInDeprecationWarning(fn, replacement) {
    let self = this;
    return function wrapper() {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.deprecationWarning)('$location', fn.name, replacement || 'locationService');
      return fn.apply(self, arguments);
    };
  }

  absUrl() {
    return `${window.location.origin}${this.url()}`;
  }

  hash(newHash) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: hash');

    if (!newHash) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getLocation().hash.slice(1);
    } else {
      throw new Error('AngularLocationWrapper method not implemented.');
    }
  }

  host() {
    return new URL(window.location.href).hostname;
  }

  path(pathname) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: path');
    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getLocation();

    if (pathname !== undefined && pathname !== null) {
      let parsedPath = String(pathname);
      parsedPath = parsedPath.startsWith('/') ? parsedPath : `/${parsedPath}`;
      const url = new URL(`${window.location.origin}${parsedPath}`);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push({
        pathname: url.pathname,
        search: url.search.length > 0 ? url.search : location.search,
        hash: url.hash.length > 0 ? url.hash : location.hash
      });
      return this;
    }

    if (pathname === null) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push('/');
      return this;
    }

    return location.pathname;
  }

  port() {
    const url = new URL(window.location.href);
    return parseInt(url.port, 10) || DEFAULT_PORTS[url.protocol] || null;
  }

  protocol() {
    return new URL(window.location.href).protocol.slice(0, -1);
  }

  replace() {
    throw new Error('AngularLocationWrapper method not implemented.');
  }

  search(search, paramValue) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: search');

    if (!search) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getSearchObject();
    }

    if (search && arguments.length > 1) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial({
        [search]: paramValue
      });
      return this;
    }

    if (search) {
      let newQuery;

      if (typeof search === 'object') {
        newQuery = Object.assign({}, search);
      } else {
        newQuery = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationSearchToObject)(search);
      }

      for (const key of Object.keys(newQuery)) {
        // removing params with null | undefined
        if (newQuery[key] === null || newQuery[key] === undefined) {
          delete newQuery[key];
        }
      }

      const updatedUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.urlUtil.renderUrl(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getLocation().pathname, newQuery);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push(updatedUrl);
    }

    return this;
  }

  state(state) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: state');
    throw new Error('AngularLocationWrapper method not implemented.');
  }

  url(newUrl) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: url');

    if (newUrl !== undefined) {
      if (newUrl.startsWith('#')) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getLocation(), {
          hash: newUrl
        }));
      } else if (newUrl.startsWith('?')) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getLocation(), {
          search: newUrl
        }));
      } else if (newUrl.trim().length === 0) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push('/');
      } else {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push(newUrl);
      }

      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService;
    }

    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getLocation();
    return `${location.pathname}${location.search}${location.hash}`;
  }

}

/***/ }),

/***/ "./public/app/angular/components/sql_part/sql_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlPart": () => (/* binding */ SqlPart),
/* harmony export */   "SqlPartDef": () => (/* binding */ SqlPartDef)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class SqlPartDef {
  constructor(options) {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "style", void 0);

    _defineProperty(this, "label", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "defaultParams", void 0);

    _defineProperty(this, "wrapOpen", void 0);

    _defineProperty(this, "wrapClose", void 0);

    _defineProperty(this, "separator", void 0);

    this.type = options.type;

    if (options.label) {
      this.label = options.label;
    } else {
      this.label = this.type[0].toUpperCase() + this.type.substring(1) + ':';
    }

    this.style = options.style;

    if (this.style === 'function') {
      this.wrapOpen = '(';
      this.wrapClose = ')';
      this.separator = ', ';
    } else {
      this.wrapOpen = ' ';
      this.wrapClose = ' ';
      this.separator = ' ';
    }

    this.params = options.params;
    this.defaultParams = options.defaultParams;
  }

}
class SqlPart {
  constructor(part, def) {
    _defineProperty(this, "part", void 0);

    _defineProperty(this, "def", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "label", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "datatype", void 0);

    this.part = part;
    this.def = def;

    if (!this.def) {
      throw {
        message: 'Could not find sql part ' + part.type
      };
    }

    this.datatype = part.datatype;

    if (part.name) {
      this.name = part.name;
      this.label = def.label + ' ' + part.name;
    } else {
      this.name = '';
      this.label = def.label;
    }

    part.params = part.params || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(this.def.defaultParams);
    this.params = part.params;
  }

  updateParam(strValue, index) {
    // handle optional parameters
    if (strValue === '' && this.def.params[index].optional) {
      this.params.splice(index, 1);
    } else {
      this.params[index] = strValue;
    }

    this.part.params = this.params;
  }

}

/***/ }),

/***/ "./public/app/angular/panel/metrics_panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsPanelCtrl": () => (/* binding */ MetricsPanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MetricsPanelCtrl extends app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_1__.PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);

    _defineProperty(this, "contextSrv", void 0);

    _defineProperty(this, "datasourceSrv", void 0);

    _defineProperty(this, "timeSrv", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "intervalMs", void 0);

    _defineProperty(this, "resolution", void 0);

    _defineProperty(this, "timeInfo", void 0);

    _defineProperty(this, "skipDataOnInit", false);

    _defineProperty(this, "dataList", []);

    _defineProperty(this, "querySubscription", void 0);

    _defineProperty(this, "useDataFrames", false);

    _defineProperty(this, "panelData", void 0);

    _defineProperty(this, "panelDataObserver", {
      next: data => {
        this.panelData = data;

        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error) {
          this.loading = false;
          this.processDataError(data.error);
        } // Ignore data in loading state


        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading) {
          this.loading = true;
          this.angularDirtyCheck();
          return;
        }

        if (data.request) {
          const {
            timeInfo
          } = data.request;

          if (timeInfo) {
            this.timeInfo = timeInfo;
          }
        }

        if (data.timeRange) {
          this.range = data.timeRange;
        }

        if (this.useDataFrames) {
          this.handleDataFrames(data.series);
        } else {
          // Make the results look as if they came directly from a <6.2 datasource request
          const legacy = data.series.map(v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toLegacyResponseData)(v));
          this.handleQueryResult({
            data: legacy
          });
        }

        this.angularDirtyCheck();
      }
    });

    this.contextSrv = $injector.get('contextSrv');
    this.datasourceSrv = $injector.get('datasourceSrv');
    this.timeSrv = $injector.get('timeSrv');
    this.templateSrv = $injector.get('templateSrv');
    this.panel.datasource = this.panel.datasource || null;
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.refresh, this.onMetricsPanelRefresh.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.panelTeardown, this.onPanelTearDown.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.componentDidMount, this.onMetricsPanelMounted.bind(this));
  }

  onMetricsPanelMounted() {
    const queryRunner = this.panel.getQueryRunner();
    this.querySubscription = queryRunner.getData({
      withTransforms: true,
      withFieldConfig: true
    }).subscribe(this.panelDataObserver);
  }

  onPanelTearDown() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
      this.querySubscription = null;
    }
  }

  onMetricsPanelRefresh() {
    // ignore fetching data if another panel is in fullscreen
    if (this.otherPanelInFullscreenMode()) {
      return;
    } // if we have snapshot data use that


    if (this.panel.snapshotData) {
      this.updateTimeRange();
      let data = this.panel.snapshotData; // backward compatibility

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(data)) {
        data = data.data;
      }

      this.panelData = {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done,
        series: data,
        timeRange: this.range
      }; // Defer panel rendering till the next digest cycle.
      // For some reason snapshot panels don't init at this time, so this helps to avoid rendering issues.

      return this.$timeout(() => {
        this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.dataSnapshotLoad, data);
      });
    } // clear loading/error state


    delete this.error;
    this.loading = true; // load datasource service

    return this.datasourceSrv.get(this.panel.datasource, this.panel.scopedVars).then(this.issueQueries.bind(this)).catch(err => {
      this.processDataError(err);
    });
  }

  processDataError(err) {
    // if canceled  keep loading set to true
    if (err.cancelled) {
      console.log('Panel request cancelled', err);
      return;
    }

    this.error = err.message || 'Request Error';

    if (err.data) {
      if (err.data.message) {
        this.error = err.data.message;
      } else if (err.data.error) {
        this.error = err.data.error;
      }
    }

    this.angularDirtyCheck();
  }

  angularDirtyCheck() {
    if (!this.$scope.$root.$$phase) {
      this.$scope.$digest();
    }
  } // Updates the response with information from the stream


  updateTimeRange(datasource) {
    this.datasource = datasource || this.datasource;
    this.range = this.timeSrv.timeRange();
    const newTimeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.applyPanelTimeOverrides)(this.panel, this.range);
    this.timeInfo = newTimeData.timeInfo;
    this.range = newTimeData.timeRange;
  }

  issueQueries(datasource) {
    this.updateTimeRange(datasource);
    this.datasource = datasource;
    const panel = this.panel;
    const queryRunner = panel.getQueryRunner();
    return queryRunner.run({
      datasource: panel.datasource,
      queries: panel.targets,
      panelId: panel.id,
      dashboardId: this.dashboard.id,
      timezone: this.dashboard.getTimezone(),
      timeInfo: this.timeInfo,
      timeRange: this.range,
      maxDataPoints: panel.maxDataPoints || this.width,
      minInterval: panel.interval,
      scopedVars: panel.scopedVars,
      cacheTimeout: panel.cacheTimeout,
      transformations: panel.transformations
    });
  }

  handleDataFrames(data) {
    this.loading = false;

    if (this.dashboard && this.dashboard.snapshot) {
      this.panel.snapshotData = data.map(frame => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toDataFrameDTO)(frame));
    }

    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.dataFramesReceived, data);
    } catch (err) {
      this.processDataError(err);
    }
  }

  handleQueryResult(result) {
    this.loading = false;

    if (this.dashboard.snapshot) {
      this.panel.snapshotData = result.data;
    }

    if (!result || !result.data) {
      console.log('Data source query result invalid, missing data field:', result);
      result = {
        data: []
      };
    }

    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.dataReceived, result.data);
    } catch (err) {
      this.processDataError(err);
    }
  }

}



/***/ }),

/***/ "./public/app/angular/panel/panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelCtrl": () => (/* binding */ PanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/angular/AngularLocationWrapper.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class PanelCtrl {
  constructor($scope, $injector) {
    var _this$panel, _this$dashboard;

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "pluginName", '');

    _defineProperty(this, "pluginId", '');

    _defineProperty(this, "editorTabs", void 0);

    _defineProperty(this, "$scope", void 0);

    _defineProperty(this, "$injector", void 0);

    _defineProperty(this, "$timeout", void 0);

    _defineProperty(this, "editModeInitiated", false);

    _defineProperty(this, "containerHeight", void 0);

    _defineProperty(this, "events", void 0);

    _defineProperty(this, "loading", false);

    _defineProperty(this, "timing", void 0);

    _defineProperty(this, "$location", void 0);

    _defineProperty(this, "onPluginTypeChange", plugin => {});

    this.panel = (_this$panel = this.panel) !== null && _this$panel !== void 0 ? _this$panel : $scope.$parent.panel;
    this.dashboard = (_this$dashboard = this.dashboard) !== null && _this$dashboard !== void 0 ? _this$dashboard : $scope.$parent.dashboard;
    this.$injector = $injector;
    this.$scope = $scope;
    this.$timeout = $injector.get('$timeout');
    this.editorTabs = [];
    this.$location = new app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_4__.AngularLocationWrapper();
    this.events = new _grafana_data__WEBPACK_IMPORTED_MODULE_3__.EventBusSrv();
    this.timing = {}; // not used but here to not break plugins

    const plugin = app_core_config__WEBPACK_IMPORTED_MODULE_1__["default"].panels[this.panel.type];

    if (plugin) {
      this.pluginId = plugin.id;
      this.pluginName = plugin.name;
    }

    $scope.$on(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.componentDidMount.name, () => this.panelDidMount());
  }

  panelDidMount() {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.componentDidMount);
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.initialized);
    this.dashboard.panelInitialized(this.panel);
  }

  renderingCompleted() {
    app_core_core__WEBPACK_IMPORTED_MODULE_2__.profiler.renderingCompleted();
  }

  refresh() {
    this.panel.refresh();
  }

  publishAppEvent(event, payload) {
    this.$scope.$root.appEvent(event, payload);
  }

  initEditMode() {
    if (!this.editModeInitiated) {
      this.editModeInitiated = true;
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.editModeInitialized);
    }
  }

  addEditorTab(title, directiveFn, index, icon) {
    const editorTab = {
      title,
      directiveFn,
      icon
    };

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(directiveFn)) {
      editorTab.directiveFn = () => {
        return {
          templateUrl: directiveFn
        };
      };
    }

    if (index) {
      this.editorTabs.splice(index, 0, editorTab);
    } else {
      this.editorTabs.push(editorTab);
    }
  }

  getExtendedMenu() {
    const menu = [];
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.initPanelActions, menu);
    return menu;
  } // Override in sub-class to add items before extended menu


  async getAdditionalMenuItems() {
    return [];
  }

  otherPanelInFullscreenMode() {
    return this.dashboard.otherPanelInFullscreen(this.panel);
  }

  render(payload) {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PanelEvents.render, payload);
  } // overriden from react


}

/***/ }),

/***/ "./public/app/angular/panel/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryCtrl": () => (/* binding */ QueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class QueryCtrl {
  constructor($scope, $injector) {
    var _this$panelCtrl, _this$target, _this$datasource, _this$panelCtrl$panel, _this$panelCtrl2;

    this.$scope = $scope;
    this.$injector = $injector;

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "hasRawMode", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "isLastQuery", void 0);

    this.$scope = $scope;
    this.$injector = $injector;
    this.panelCtrl = (_this$panelCtrl = this.panelCtrl) !== null && _this$panelCtrl !== void 0 ? _this$panelCtrl : $scope.ctrl.panelCtrl;
    this.target = (_this$target = this.target) !== null && _this$target !== void 0 ? _this$target : $scope.ctrl.target;
    this.datasource = (_this$datasource = this.datasource) !== null && _this$datasource !== void 0 ? _this$datasource : $scope.ctrl.datasource;
    this.panel = (_this$panelCtrl$panel = (_this$panelCtrl2 = this.panelCtrl) === null || _this$panelCtrl2 === void 0 ? void 0 : _this$panelCtrl2.panel) !== null && _this$panelCtrl$panel !== void 0 ? _this$panelCtrl$panel : $scope.ctrl.panelCtrl.panel;
    this.isLastQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.panel.targets, this.target) === this.panel.targets.length - 1;
  }

  refresh() {
    this.panelCtrl.refresh();
  }

}

/***/ }),

/***/ "./public/app/features/datasources/utils/passwordHandlers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFieldEnum": () => (/* binding */ PasswordFieldEnum),
/* harmony export */   "createChangeHandler": () => (/* binding */ createChangeHandler),
/* harmony export */   "createResetHandler": () => (/* binding */ createResetHandler)
/* harmony export */ });
/**
 * Set of handlers for secure password field in Angular components. They handle backward compatibility with
 * passwords stored in plain text fields.
 */
let PasswordFieldEnum;
/**
 * Basic shape for settings controllers in at the moment mostly angular data source plugins.
 */

(function (PasswordFieldEnum) {
  PasswordFieldEnum["Password"] = "password";
  PasswordFieldEnum["BasicAuthPassword"] = "basicAuthPassword";
})(PasswordFieldEnum || (PasswordFieldEnum = {}));

const createResetHandler = (ctrl, field) => event => {
  event.preventDefault(); // Reset also normal plain text password to remove it and only save it in secureJsonData.

  ctrl.current[field] = undefined;
  ctrl.current.secureJsonFields[field] = false;
  ctrl.current.secureJsonData = ctrl.current.secureJsonData || {};
  ctrl.current.secureJsonData[field] = '';
};
const createChangeHandler = (ctrl, field) => event => {
  ctrl.current.secureJsonData = ctrl.current.secureJsonData || {};
  ctrl.current.secureJsonData[field] = event.currentTarget.value;
};

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MysqlDatasource": () => (/* binding */ MysqlDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/mysql/mysql_query_model.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/mysql/response_parser.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _features_variables_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class MysqlDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "interpolateVariable", (value, variable) => {
      if (typeof value === 'string') {
        if (variable.multi || variable.includeAll) {
          const result = this.queryModel.quoteLiteral(value);
          return result;
        } else {
          return value;
        }
      }

      if (typeof value === 'number') {
        return value;
      }

      const quotedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, v => {
        return this.queryModel.quoteLiteral(v);
      });

      return quotedValues.join(',');
    });

    this.templateSrv = templateSrv;
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.queryModel = new app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_2__["default"]({});
    const settingsData = instanceSettings.jsonData || {};
    this.interval = settingsData.timeInterval || '1m';
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;

    if (queries && queries.length > 0) {
      expandedQueries = queries.map(query => {
        const expandedQuery = Object.assign({}, query, {
          datasource: this.getRef(),
          rawSql: this.templateSrv.replace(query.rawSql, scopedVars, this.interpolateVariable),
          rawQuery: true
        });
        return expandedQuery;
      });
    }

    return expandedQueries;
  }

  filterQuery(query) {
    return !query.hide;
  }

  applyTemplateVariables(target, scopedVars) {
    const queryModel = new app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_2__["default"](target, this.templateSrv, scopedVars);
    return {
      refId: target.refId,
      datasource: this.getRef(),
      rawSql: queryModel.render(this.interpolateVariable),
      format: target.format
    };
  }

  async annotationQuery(options) {
    if (!options.annotation.rawQuery) {
      return Promise.reject({
        message: 'Query missing in annotation definition'
      });
    }

    const query = {
      refId: options.annotation.name,
      datasource: this.getRef(),
      rawSql: this.templateSrv.replace(options.annotation.rawQuery, options.scopedVars, this.interpolateVariable),
      format: 'table'
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: options.range.from.valueOf().toString(),
        to: options.range.to.valueOf().toString(),
        queries: [query]
      },
      requestId: options.annotation.name
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(async res => await this.responseParser.transformAnnotationResponse(options, res.data))));
  }

  metricFindQuery(query, optionalOptions) {
    var _range$from, _range$from$valueOf, _range$to, _range$to$valueOf;

    let refId = 'tempvar';

    if (optionalOptions && optionalOptions.variable && optionalOptions.variable.name) {
      refId = optionalOptions.variable.name;
    }

    const rawSql = this.templateSrv.replace(query, (0,_features_variables_utils__WEBPACK_IMPORTED_MODULE_5__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '%',
      options: optionalOptions
    }), this.interpolateVariable);
    const interpolatedQuery = {
      refId: refId,
      datasource: this.getRef(),
      rawSql,
      format: 'table'
    };
    const range = optionalOptions === null || optionalOptions === void 0 ? void 0 : optionalOptions.range;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: range === null || range === void 0 ? void 0 : (_range$from = range.from) === null || _range$from === void 0 ? void 0 : (_range$from$valueOf = _range$from.valueOf()) === null || _range$from$valueOf === void 0 ? void 0 : _range$from$valueOf.toString(),
        to: range === null || range === void 0 ? void 0 : (_range$to = range.to) === null || _range$to === void 0 ? void 0 : (_range$to$valueOf = _range$to.valueOf()) === null || _range$to$valueOf === void 0 ? void 0 : _range$to$valueOf.toString(),
        queries: [interpolatedQuery]
      },
      requestId: refId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(rsp => {
      return this.responseParser.transformMetricFindResponse(rsp);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]);
    })));
  }

  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: '5m',
        to: 'now',
        queries: [{
          refId: 'A',
          intervalMs: 1,
          maxDataPoints: 1,
          datasource: this.getRef(),
          rawSql: 'SELECT 1',
          format: 'table'
        }]
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)({
      status: 'success',
      message: 'Database Connection OK'
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)((0,_grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_6__.toTestingStatus)(err));
    })));
  }

  targetContainsTemplate(target) {
    let rawSql = '';

    if (target.rawQuery) {
      rawSql = target.rawSql;
    } else {
      const query = new app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_2__["default"](target);
      rawSql = query.buildQuery();
    }

    rawSql = rawSql.replace('$__', '');
    return this.templateSrv.containsTemplate(rawSql);
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/meta_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MysqlMetaQuery": () => (/* binding */ MysqlMetaQuery)
/* harmony export */ });
class MysqlMetaQuery {
  constructor(target, queryModel) {
    this.target = target;
    this.queryModel = queryModel;
    this.target = target;
    this.queryModel = queryModel;
  }

  getOperators(datatype) {
    switch (datatype) {
      case 'double':
      case 'float':
        {
          return ['=', '!=', '<', '<=', '>', '>='];
        }

      case 'text':
      case 'tinytext':
      case 'mediumtext':
      case 'longtext':
      case 'varchar':
      case 'char':
        {
          return ['=', '!=', '<', '<=', '>', '>=', 'IN', 'NOT IN', 'LIKE', 'NOT LIKE'];
        }

      default:
        {
          return ['=', '!=', '<', '<=', '>', '>=', 'IN', 'NOT IN'];
        }
    }
  } // quote identifier as literal to use in metadata queries


  quoteIdentAsLiteral(value) {
    return this.queryModel.quoteLiteral(this.queryModel.unquoteIdentifier(value));
  }

  findMetricTable() {
    // query that returns first table found that has a timestamp(tz) column and a float column
    const query = `
  SELECT
    table_name as table_name,
    ( SELECT
        column_name as column_name
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN ('timestamp', 'datetime')
      ORDER BY ordinal_position LIMIT 1
    ) AS time_column,
    ( SELECT
        column_name AS column_name
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN('float', 'int', 'bigint')
      ORDER BY ordinal_position LIMIT 1
    ) AS value_column
  FROM information_schema.tables t
  WHERE
    t.table_schema = database() AND
    EXISTS
    ( SELECT 1
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN ('timestamp', 'datetime')
    ) AND
    EXISTS
    ( SELECT 1
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN('float', 'int', 'bigint')
    )
  LIMIT 1
;`;
    return query;
  }

  buildTableConstraint(table) {
    let query = ''; // check for schema qualified table

    if (table.includes('.')) {
      const parts = table.split('.');
      query = 'table_schema = ' + this.quoteIdentAsLiteral(parts[0]);
      query += ' AND table_name = ' + this.quoteIdentAsLiteral(parts[1]);
      return query;
    } else {
      query = 'table_schema = database() AND table_name = ' + this.quoteIdentAsLiteral(table);
      return query;
    }
  }

  buildTableQuery() {
    return 'SELECT table_name FROM information_schema.tables WHERE table_schema = database() ORDER BY table_name';
  }

  buildColumnQuery(type) {
    let query = 'SELECT column_name FROM information_schema.columns WHERE ';
    query += this.buildTableConstraint(this.target.table);

    switch (type) {
      case 'time':
        {
          query += " AND data_type IN ('timestamp','datetime','bigint','int','double','float')";
          break;
        }

      case 'metric':
        {
          query += " AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')";
          break;
        }

      case 'value':
        {
          query += " AND data_type IN ('bigint','int','smallint','mediumint','tinyint','double','decimal','float')";
          query += ' AND column_name <> ' + this.quoteIdentAsLiteral(this.target.timeColumn);
          break;
        }

      case 'group':
        {
          query += " AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')";
          break;
        }
    }

    query += ' ORDER BY column_name';
    return query;
  }

  buildValueQuery(column) {
    let query = 'SELECT DISTINCT QUOTE(' + column + ')';
    query += ' FROM ' + this.target.table;
    query += ' WHERE $__timeFilter(' + this.target.timeColumn + ')';
    query += ' ORDER BY 1 LIMIT 100';
    return query;
  }

  buildDatatypeQuery(column) {
    let query = `
SELECT data_type
FROM information_schema.columns
WHERE `;
    query += ' table_name = ' + this.quoteIdentAsLiteral(this.target.table);
    query += ' AND column_name = ' + this.quoteIdentAsLiteral(column);
    return query;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationsQueryCtrl": () => (/* binding */ MysqlAnnotationsQueryCtrl),
/* harmony export */   "ConfigCtrl": () => (/* binding */ MysqlConfigCtrl),
/* harmony export */   "Datasource": () => (/* reexport safe */ _datasource__WEBPACK_IMPORTED_MODULE_0__.MysqlDatasource),
/* harmony export */   "MysqlDatasource": () => (/* reexport safe */ _datasource__WEBPACK_IMPORTED_MODULE_0__.MysqlDatasource),
/* harmony export */   "QueryCtrl": () => (/* reexport safe */ _query_ctrl__WEBPACK_IMPORTED_MODULE_1__.MysqlQueryCtrl),
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/mysql/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/mysql/query_ctrl.ts");
/* harmony import */ var _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/datasources/utils/passwordHandlers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MysqlConfigCtrl {
  constructor() {
    _defineProperty(this, "current", void 0);

    _defineProperty(this, "onPasswordReset", void 0);

    _defineProperty(this, "onPasswordChange", void 0);

    this.onPasswordReset = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_2__.createResetHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_2__.PasswordFieldEnum.Password);
    this.onPasswordChange = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_2__.createChangeHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_2__.PasswordFieldEnum.Password);
  }

}

_defineProperty(MysqlConfigCtrl, "templateUrl", 'partials/config.html');

const defaultQuery = `SELECT
    UNIX_TIMESTAMP(<time_column>) as time_sec,
    <text_column> as text,
    <tags_column> as tags
  FROM <table name>
  WHERE $__timeFilter(time_column)
  ORDER BY <time_column> ASC
  LIMIT 100
  `;

class MysqlAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.rawQuery = this.annotation.rawQuery || defaultQuery;
  }

}

MysqlAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(MysqlAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');


const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_0__.MysqlDatasource).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_1__.MysqlQueryCtrl).setConfigCtrl(MysqlConfigCtrl).setAnnotationQueryCtrl(MysqlAnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/mysql_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MySQLQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class MySQLQueryModel {
  /** @ngInject */
  constructor(target, templateSrv, scopedVars) {
    _defineProperty(this, "target", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "scopedVars", void 0);

    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    target.format = target.format || 'time_series';
    target.timeColumn = target.timeColumn || 'time';
    target.metricColumn = target.metricColumn || 'none';
    target.group = target.group || [];
    target.where = target.where || [{
      type: 'macro',
      name: '$__timeFilter',
      params: []
    }];
    target.select = target.select || [[{
      type: 'column',
      params: ['value']
    }]]; // handle pre query gui panels gracefully

    if (!('rawQuery' in this.target)) {
      if ('rawSql' in target) {
        // pre query gui panel
        target.rawQuery = true;
      } else {
        // new panel
        target.rawQuery = false;
      }
    } // give interpolateQueryStr access to this


    this.interpolateQueryStr = this.interpolateQueryStr.bind(this);
  } // remove identifier quoting from identifier to use in metadata queries


  unquoteIdentifier(value) {
    if (value[0] === '"' && value[value.length - 1] === '"') {
      return value.substring(1, value.length - 1).replace(/""/g, '"');
    } else {
      return value;
    }
  }

  quoteIdentifier(value) {
    return '"' + value.replace(/"/g, '""') + '"';
  }

  quoteLiteral(value) {
    return "'" + value.replace(/'/g, "''") + "'";
  }

  escapeLiteral(value) {
    return String(value).replace(/'/g, "''");
  }

  hasTimeGroup() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.group, g => g.type === 'time');
  }

  hasMetricColumn() {
    return this.target.metricColumn !== 'none';
  }

  interpolateQueryStr(value, variable, defaultFormatFn) {
    // if no multi or include all do not regexEscape
    if (!variable.multi && !variable.includeAll) {
      return this.escapeLiteral(value);
    }

    if (typeof value === 'string') {
      return this.quoteLiteral(value);
    }

    const escapedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, this.quoteLiteral);
    return escapedValues.join(',');
  }

  render(interpolate) {
    const target = this.target; // new query with no table set yet

    if (!this.target.rawQuery && !('table' in this.target)) {
      return '';
    }

    if (!target.rawQuery) {
      target.rawSql = this.buildQuery();
    }

    if (interpolate) {
      return this.templateSrv.replace(target.rawSql, this.scopedVars, this.interpolateQueryStr);
    } else {
      return target.rawSql;
    }
  }

  hasUnixEpochTimecolumn() {
    return ['int', 'bigint', 'double'].indexOf(this.target.timeColumnType) > -1;
  }

  buildTimeColumn(alias = true) {
    const timeGroup = this.hasTimeGroup();
    let query;
    let macro = '$__timeGroup';

    if (timeGroup) {
      let args;

      if (timeGroup.params.length > 1 && timeGroup.params[1] !== 'none') {
        args = timeGroup.params.join(',');
      } else {
        args = timeGroup.params[0];
      }

      if (this.hasUnixEpochTimecolumn()) {
        macro = '$__unixEpochGroup';
      }

      if (alias) {
        macro += 'Alias';
      }

      query = macro + '(' + this.target.timeColumn + ',' + args + ')';
    } else {
      query = this.target.timeColumn;

      if (alias) {
        query += ' AS "time"';
      }
    }

    return query;
  }

  buildMetricColumn() {
    if (this.hasMetricColumn()) {
      return this.target.metricColumn + ' AS metric';
    }

    return '';
  }

  buildValueColumns() {
    let query = '';

    for (const column of this.target.select) {
      query += ',\n  ' + this.buildValueColumn(column);
    }

    return query;
  }

  buildValueColumn(column) {
    let query = '';
    const columnName = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'column');
    query = columnName.params[0];
    const aggregate = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'aggregate');

    if (aggregate) {
      const func = aggregate.params[0];
      query = func + '(' + query + ')';
    }

    const alias = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'alias');

    if (alias) {
      query += ' AS ' + this.quoteIdentifier(alias.params[0]);
    }

    return query;
  }

  buildWhereClause() {
    let query = '';
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.where, (tag, index) => {
      switch (tag.type) {
        case 'macro':
          return tag.name + '(' + this.target.timeColumn + ')';
          break;

        case 'expression':
          return tag.params.join(' ');
          break;
      }
    });

    if (conditions.length > 0) {
      query = '\nWHERE\n  ' + conditions.join(' AND\n  ');
    }

    return query;
  }

  buildGroupClause() {
    let query = '';
    let groupSection = '';

    for (let i = 0; i < this.target.group.length; i++) {
      const part = this.target.group[i];

      if (i > 0) {
        groupSection += ', ';
      }

      if (part.type === 'time') {
        groupSection += '1';
      } else {
        groupSection += part.params[0];
      }
    }

    if (groupSection.length) {
      query = '\nGROUP BY ' + groupSection;

      if (this.hasMetricColumn()) {
        query += ',2';
      }
    }

    return query;
  }

  buildQuery() {
    let query = 'SELECT';
    query += '\n  ' + this.buildTimeColumn();

    if (this.hasMetricColumn()) {
      query += ',\n  ' + this.buildMetricColumn();
    }

    query += this.buildValueColumns();
    query += '\nFROM ' + this.target.table;
    query += this.buildWhereClause();
    query += this.buildGroupClause();
    query += '\nORDER BY ' + this.buildTimeColumn(false);
    return query;
  }

}
MySQLQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MysqlQueryCtrl": () => (/* binding */ MysqlQueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _meta_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/mysql/meta_query.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var _mysql_query_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/mysql/mysql_query_model.ts");
/* harmony import */ var _sql_part__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/mysql/sql_part.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/events.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const defaultQuery = `SELECT
  UNIX_TIMESTAMP(<time_column>) as time_sec,
  <value column> as value,
  <series name column> as metric
FROM <table name>
WHERE $__timeFilter(time_column)
ORDER BY <time_column> ASC
`;
class MysqlQueryCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__.QueryCtrl {
  /** @ngInject */
  constructor($scope, $injector, templateSrv, uiSegmentSrv) {
    super($scope, $injector);
    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;

    _defineProperty(this, "formats", void 0);

    _defineProperty(this, "lastQueryError", void 0);

    _defineProperty(this, "showHelp", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "metaBuilder", void 0);

    _defineProperty(this, "lastQueryMeta", void 0);

    _defineProperty(this, "tableSegment", void 0);

    _defineProperty(this, "whereAdd", void 0);

    _defineProperty(this, "timeColumnSegment", void 0);

    _defineProperty(this, "metricColumnSegment", void 0);

    _defineProperty(this, "selectMenu", []);

    _defineProperty(this, "selectParts", []);

    _defineProperty(this, "groupParts", []);

    _defineProperty(this, "whereParts", []);

    _defineProperty(this, "groupAdd", void 0);

    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target = this.target;
    this.queryModel = new _mysql_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](this.target, templateSrv, this.panel.scopedVars);
    this.metaBuilder = new _meta_query__WEBPACK_IMPORTED_MODULE_2__.MysqlMetaQuery(this.target, this.queryModel);
    this.updateProjection();
    this.formats = [{
      text: 'Time series',
      value: 'time_series'
    }, {
      text: 'Table',
      value: 'table'
    }];

    if (!this.target.rawSql) {
      // special handling when in table panel
      if (this.panelCtrl.panel.type === 'table') {
        this.target.format = 'table';
        this.target.rawSql = 'SELECT 1';
        this.target.rawQuery = true;
      } else {
        this.target.rawSql = defaultQuery;
        this.datasource.metricFindQuery(this.metaBuilder.findMetricTable()).then(result => {
          if (result.length > 0) {
            this.target.table = result[0].text;
            let segment = this.uiSegmentSrv.newSegment(this.target.table);
            this.tableSegment.html = segment.html;
            this.tableSegment.value = segment.value;
            this.target.timeColumn = result[1].text;
            segment = this.uiSegmentSrv.newSegment(this.target.timeColumn);
            this.timeColumnSegment.html = segment.html;
            this.timeColumnSegment.value = segment.value;
            this.target.timeColumnType = 'timestamp';
            this.target.select = [[{
              type: 'column',
              params: [result[2].text]
            }]];
            this.updateProjection();
            this.updateRawSqlAndRefresh();
          }
        });
      }
    }

    if (!this.target.table) {
      this.tableSegment = uiSegmentSrv.newSegment({
        value: 'select table',
        fake: true
      });
    } else {
      this.tableSegment = uiSegmentSrv.newSegment(this.target.table);
    }

    this.timeColumnSegment = uiSegmentSrv.newSegment(this.target.timeColumn);
    this.metricColumnSegment = uiSegmentSrv.newSegment(this.target.metricColumn);
    this.buildSelectMenu();
    this.whereAdd = this.uiSegmentSrv.newPlusButton();
    this.groupAdd = this.uiSegmentSrv.newPlusButton();
    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_6__.PanelEvents.dataReceived, this.onDataReceived.bind(this), $scope);
    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_6__.PanelEvents.dataError, this.onDataError.bind(this), $scope);
  }

  updateRawSqlAndRefresh() {
    if (!this.target.rawQuery) {
      this.target.rawSql = this.queryModel.buildQuery();
    }

    this.panelCtrl.refresh();
  }

  updateProjection() {
    this.selectParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, parts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create).filter(n => n);
    });
    this.whereParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.where, _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create).filter(n => n);
    this.groupParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.group, _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create).filter(n => n);
  }

  updatePersistedParts() {
    this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectParts, selectParts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
        return {
          type: part.def.type,
          datatype: part.datatype,
          params: part.params
        };
      });
    });
    this.target.where = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.whereParts, part => {
      return {
        type: part.def.type,
        datatype: part.datatype,
        name: part.name,
        params: part.params
      };
    });
    this.target.group = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.groupParts, part => {
      return {
        type: part.def.type,
        datatype: part.datatype,
        params: part.params
      };
    });
  }

  buildSelectMenu() {
    const aggregates = {
      text: 'Aggregate Functions',
      value: 'aggregate',
      submenu: [{
        text: 'Average',
        value: 'avg'
      }, {
        text: 'Count',
        value: 'count'
      }, {
        text: 'Maximum',
        value: 'max'
      }, {
        text: 'Minimum',
        value: 'min'
      }, {
        text: 'Sum',
        value: 'sum'
      }, {
        text: 'Standard deviation',
        value: 'stddev'
      }, {
        text: 'Variance',
        value: 'variance'
      }]
    };
    this.selectMenu.push(aggregates);
    this.selectMenu.push({
      text: 'Alias',
      value: 'alias'
    });
    this.selectMenu.push({
      text: 'Column',
      value: 'column'
    });
  }

  toggleEditorMode() {
    if (this.target.rawQuery) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_1__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_7__.ShowConfirmModalEvent({
        title: 'Warning',
        text2: 'Switching to query builder may overwrite your raw SQL.',
        icon: 'exclamation-triangle',
        yesText: 'Switch',
        onConfirm: () => {
          // This could be called from React, so wrap in $evalAsync.
          // Will then either run as part of the current digest cycle or trigger a new one.
          this.$scope.$evalAsync(() => {
            this.target.rawQuery = !this.target.rawQuery;
          });
        }
      }));
    } else {
      // This could be called from React, so wrap in $evalAsync.
      // Will then either run as part of the current digest cycle or trigger a new one.
      this.$scope.$evalAsync(() => {
        this.target.rawQuery = !this.target.rawQuery;
      });
    }
  }

  resetPlusButton(button) {
    const plusButton = this.uiSegmentSrv.newPlusButton();
    button.html = plusButton.html;
    button.value = plusButton.value;
  }

  getTableSegments() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildTableQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
  }

  tableChanged() {
    this.target.table = this.tableSegment.value;
    this.target.where = [];
    this.target.group = [];
    this.updateProjection();
    const segment = this.uiSegmentSrv.newSegment('none');
    this.metricColumnSegment.html = segment.html;
    this.metricColumnSegment.value = segment.value;
    this.target.metricColumn = 'none';
    const task1 = this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('time')).then(result => {
      // check if time column is still valid
      if (result.length > 0 && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(result, r => r.text === this.target.timeColumn)) {
        const segment = this.uiSegmentSrv.newSegment(result[0].text);
        this.timeColumnSegment.html = segment.html;
        this.timeColumnSegment.value = segment.value;
      }

      return this.timeColumnChanged(false);
    });
    const task2 = this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('value')).then(result => {
      if (result.length > 0) {
        this.target.select = [[{
          type: 'column',
          params: [result[0].text]
        }]];
        this.updateProjection();
      }
    });
    Promise.all([task1, task2]).then(() => {
      this.updateRawSqlAndRefresh();
    });
  }

  getTimeColumnSegments() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('time')).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
  }

  timeColumnChanged(refresh) {
    this.target.timeColumn = this.timeColumnSegment.value;
    return this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(this.target.timeColumn)).then(result => {
      if (result.length === 1) {
        if (this.target.timeColumnType !== result[0].text) {
          this.target.timeColumnType = result[0].text;
        }

        let partModel;

        if (this.queryModel.hasUnixEpochTimecolumn()) {
          partModel = _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
            type: 'macro',
            name: '$__unixEpochFilter',
            params: []
          });
        } else {
          partModel = _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
            type: 'macro',
            name: '$__timeFilter',
            params: []
          });
        }

        if (this.whereParts.length >= 1 && this.whereParts[0].def.type === 'macro') {
          // replace current macro
          this.whereParts[0] = partModel;
        } else {
          this.whereParts.splice(0, 0, partModel);
        }
      }

      this.updatePersistedParts();

      if (refresh !== false) {
        this.updateRawSqlAndRefresh();
      }
    });
  }

  getMetricColumnSegments() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('metric')).then(this.transformToSegments({
      addNone: true
    })).catch(this.handleQueryError.bind(this));
  }

  metricColumnChanged() {
    this.target.metricColumn = this.metricColumnSegment.value;
    this.updateRawSqlAndRefresh();
  }

  onDataReceived(dataList) {
    var _dataList$;

    this.lastQueryError = undefined;
    this.lastQueryMeta = (_dataList$ = dataList[0]) === null || _dataList$ === void 0 ? void 0 : _dataList$.meta;
  }

  onDataError(err) {
    if (err.data && err.data.results) {
      const queryRes = err.data.results[this.target.refId];

      if (queryRes) {
        this.lastQueryError = queryRes.error;
      }
    }
  }

  transformToSegments(config) {
    return results => {
      const segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results, segment => {
        return this.uiSegmentSrv.newSegment({
          value: segment.text,
          expandable: segment.expandable
        });
      });

      if (config.addTemplateVars) {
        for (const variable of this.templateSrv.getVariables()) {
          let value;
          value = '$' + variable.name;

          if (config.templateQuoter && variable.multi === false) {
            value = config.templateQuoter(value);
          }

          segments.unshift(this.uiSegmentSrv.newSegment({
            type: 'template',
            value: value,
            expandable: true
          }));
        }
      }

      if (config.addNone) {
        segments.unshift(this.uiSegmentSrv.newSegment({
          type: 'template',
          value: 'none',
          expandable: true
        }));
      }

      return segments;
    };
  }

  findAggregateIndex(selectParts) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(selectParts, p => p.def.type === 'aggregate' || p.def.type === 'percentile');
  }

  findWindowIndex(selectParts) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(selectParts, p => p.def.type === 'window' || p.def.type === 'moving_window');
  }

  addSelectPart(selectParts, item, subItem) {
    let partType = item.value;

    if (subItem && subItem.type) {
      partType = subItem.type;
    }

    let partModel = _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
      type: partType
    });

    if (subItem) {
      partModel.params[0] = subItem.value;
    }

    let addAlias = false;

    switch (partType) {
      case 'column':
        const parts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
          return _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
            type: part.def.type,
            params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(part.params)
          });
        });
        this.selectParts.push(parts);
        break;

      case 'percentile':
      case 'aggregate':
        // add group by if no group by yet
        if (this.target.group.length === 0) {
          this.addGroup('time', '$__interval');
        }

        const aggIndex = this.findAggregateIndex(selectParts);

        if (aggIndex !== -1) {
          // replace current aggregation
          selectParts[aggIndex] = partModel;
        } else {
          selectParts.splice(1, 0, partModel);
        }

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(selectParts, p => p.def.type === 'alias')) {
          addAlias = true;
        }

        break;

      case 'moving_window':
      case 'window':
        const windowIndex = this.findWindowIndex(selectParts);

        if (windowIndex !== -1) {
          // replace current window function
          selectParts[windowIndex] = partModel;
        } else {
          const aggIndex = this.findAggregateIndex(selectParts);

          if (aggIndex !== -1) {
            selectParts.splice(aggIndex + 1, 0, partModel);
          } else {
            selectParts.splice(1, 0, partModel);
          }
        }

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(selectParts, p => p.def.type === 'alias')) {
          addAlias = true;
        }

        break;

      case 'alias':
        addAlias = true;
        break;
    }

    if (addAlias) {
      // set initial alias name to column name
      partModel = _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
        type: 'alias',
        params: [selectParts[0].params[0].replace(/"/g, '')]
      });

      if (selectParts[selectParts.length - 1].def.type === 'alias') {
        selectParts[selectParts.length - 1] = partModel;
      } else {
        selectParts.push(partModel);
      }
    }

    this.updatePersistedParts();
    this.updateRawSqlAndRefresh();
  }

  removeSelectPart(selectParts, part) {
    if (part.def.type === 'column') {
      // remove all parts of column unless its last column
      if (this.selectParts.length > 1) {
        const modelsIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.selectParts, selectParts);
        this.selectParts.splice(modelsIndex, 1);
      }
    } else {
      const partIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(selectParts, part);
      selectParts.splice(partIndex, 1);
    }

    this.updatePersistedParts();
  }

  handleSelectPartEvent(selectParts, part, evt) {
    switch (evt.name) {
      case 'get-param-options':
        {
          switch (part.def.type) {
            // case 'aggregate':
            //   return this.datasource
            //     .metricFindQuery(this.metaBuilder.buildAggregateQuery())
            //     .then(this.transformToSegments({}))
            //     .catch(this.handleQueryError.bind(this));
            case 'column':
              return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('value')).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
          }
        }

      case 'part-param-changed':
        {
          this.updatePersistedParts();
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'action':
        {
          this.removeSelectPart(selectParts, part);
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([{
            text: 'Remove',
            value: 'remove-part'
          }]);
        }
    }
  }

  handleGroupPartEvent(part, index, evt) {
    switch (evt.name) {
      case 'get-param-options':
        {
          return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
        }

      case 'part-param-changed':
        {
          this.updatePersistedParts();
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'action':
        {
          this.removeGroup(part, index);
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([{
            text: 'Remove',
            value: 'remove-part'
          }]);
        }
    }
  }

  addGroup(partType, value) {
    let params = [value];

    if (partType === 'time') {
      params = ['$__interval', 'none'];
    }

    const partModel = _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
      type: partType,
      params: params
    });

    if (partType === 'time') {
      // put timeGroup at start
      this.groupParts.splice(0, 0, partModel);
    } else {
      this.groupParts.push(partModel);
    } // add aggregates when adding group by


    for (const selectParts of this.selectParts) {
      if (!selectParts.some(part => part.def.type === 'aggregate')) {
        const aggregate = _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
          type: 'aggregate',
          params: ['avg']
        });
        selectParts.splice(1, 0, aggregate);

        if (!selectParts.some(part => part.def.type === 'alias')) {
          const alias = _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
            type: 'alias',
            params: [selectParts[0].part.params[0]]
          });
          selectParts.push(alias);
        }
      }
    }

    this.updatePersistedParts();
  }

  removeGroup(part, index) {
    if (part.def.type === 'time') {
      // remove aggregations
      this.selectParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectParts, s => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(s, part => {
          if (part.def.type === 'aggregate' || part.def.type === 'percentile') {
            return false;
          }

          return true;
        });
      });
    }

    this.groupParts.splice(index, 1);
    this.updatePersistedParts();
  }

  handleWherePartEvent(whereParts, part, evt, index) {
    switch (evt.name) {
      case 'get-param-options':
        {
          switch (evt.param.name) {
            case 'left':
              return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));

            case 'right':
              if (['int', 'bigint', 'double', 'datetime'].indexOf(part.datatype) > -1) {
                // don't do value lookups for numerical fields
                return Promise.resolve([]);
              } else {
                return this.datasource.metricFindQuery(this.metaBuilder.buildValueQuery(part.params[0])).then(this.transformToSegments({
                  addTemplateVars: true,
                  templateQuoter: v => {
                    return this.queryModel.quoteLiteral(v);
                  }
                })).catch(this.handleQueryError.bind(this));
              }

            case 'op':
              return Promise.resolve(this.uiSegmentSrv.newOperators(this.metaBuilder.getOperators(part.datatype)));

            default:
              return Promise.resolve([]);
          }
        }

      case 'part-param-changed':
        {
          this.updatePersistedParts();
          this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(part.params[0])).then(d => {
            if (d.length === 1) {
              part.datatype = d[0].text;
            }
          });
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'action':
        {
          // remove element
          whereParts.splice(index, 1);
          this.updatePersistedParts();
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([{
            text: 'Remove',
            value: 'remove-part'
          }]);
        }
    }
  }

  getWhereOptions() {
    const options = [];

    if (this.queryModel.hasUnixEpochTimecolumn()) {
      options.push(this.uiSegmentSrv.newSegment({
        type: 'macro',
        value: '$__unixEpochFilter'
      }));
    } else {
      options.push(this.uiSegmentSrv.newSegment({
        type: 'macro',
        value: '$__timeFilter'
      }));
    }

    options.push(this.uiSegmentSrv.newSegment({
      type: 'expression',
      value: 'Expression'
    }));
    return Promise.resolve(options);
  }

  addWhereAction(part, index) {
    switch (this.whereAdd.type) {
      case 'macro':
        {
          const partModel = _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
            type: 'macro',
            name: this.whereAdd.value,
            params: []
          });

          if (this.whereParts.length >= 1 && this.whereParts[0].def.type === 'macro') {
            // replace current macro
            this.whereParts[0] = partModel;
          } else {
            this.whereParts.splice(0, 0, partModel);
          }

          break;
        }

      default:
        {
          this.whereParts.push(_sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create({
            type: 'expression',
            params: ['value', '=', 'value']
          }));
        }
    }

    this.updatePersistedParts();
    this.resetPlusButton(this.whereAdd);
    this.updateRawSqlAndRefresh();
  }

  getGroupOptions() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('group')).then(tags => {
      const options = [];

      if (!this.queryModel.hasTimeGroup()) {
        options.push(this.uiSegmentSrv.newSegment({
          type: 'time',
          value: 'time($__interval,none)'
        }));
      }

      for (const tag of tags) {
        options.push(this.uiSegmentSrv.newSegment({
          type: 'column',
          value: tag.text
        }));
      }

      return options;
    }).catch(this.handleQueryError.bind(this));
  }

  addGroupAction() {
    switch (this.groupAdd.value) {
      default:
        {
          this.addGroup(this.groupAdd.type, this.groupAdd.value);
        }
    }

    this.resetPlusButton(this.groupAdd);
    this.updateRawSqlAndRefresh();
  }

  handleQueryError(err) {
    this.error = err.message || 'Failed to issue metric query';
    return [];
  }

}
MysqlQueryCtrl.$inject = ["$scope", "$injector", "templateSrv", "uiSegmentSrv"];

_defineProperty(MysqlQueryCtrl, "templateUrl", 'partials/query.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/response_parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponseParser)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

class ResponseParser {
  transformMetricFindResponse(raw) {
    const frames = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.toDataQueryResponse)(raw).data;

    if (!frames || !frames.length) {
      return [];
    }

    const frame = frames[0];
    const values = [];
    const textField = frame.fields.find(f => f.name === '__text');
    const valueField = frame.fields.find(f => f.name === '__value');

    if (textField && valueField) {
      for (let i = 0; i < textField.values.length; i++) {
        values.push({
          text: '' + textField.values.get(i),
          value: '' + valueField.values.get(i)
        });
      }
    } else {
      values.push(...frame.fields.flatMap(f => f.values.toArray()).map(v => ({
        text: v
      })));
    }

    return Array.from(new Set(values.map(v => v.text))).map(text => {
      var _values$find;

      return {
        text,
        value: (_values$find = values.find(v => v.text === text)) === null || _values$find === void 0 ? void 0 : _values$find.value
      };
    });
  }

  async transformAnnotationResponse(options, data) {
    const frames = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.toDataQueryResponse)({
      data: data
    }).data;

    if (!frames || !frames.length) {
      return [];
    }

    const frame = frames[0];
    const timeField = frame.fields.find(f => f.name === 'time' || f.name === 'time_sec');

    if (!timeField) {
      throw new Error('Missing mandatory time column (with time column alias) in annotation query');
    }

    if (frame.fields.find(f => f.name === 'title')) {
      throw new Error('The title column for annotations is deprecated, now only a column named text is returned');
    }

    const timeEndField = frame.fields.find(f => f.name === 'timeend');
    const textField = frame.fields.find(f => f.name === 'text');
    const tagsField = frame.fields.find(f => f.name === 'tags');
    const list = [];

    for (let i = 0; i < frame.length; i++) {
      const timeEnd = timeEndField && timeEndField.values.get(i) ? Math.floor(timeEndField.values.get(i)) : undefined;
      list.push({
        annotation: options.annotation,
        time: Math.floor(timeField.values.get(i)),
        timeEnd,
        text: textField && textField.values.get(i) ? textField.values.get(i) : '',
        tags: tagsField && tagsField.values.get(i) ? tagsField.values.get(i).trim().split(/\s*,\s*/) : []
      });
    }

    return list;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/sql_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_angular_components_sql_part_sql_part__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/angular/components/sql_part/sql_part.ts");

const index = [];

function createPart(part) {
  const def = index[part.type];

  if (!def) {
    return null;
  }

  return new app_angular_components_sql_part_sql_part__WEBPACK_IMPORTED_MODULE_0__.SqlPart(part, def);
}

function register(options) {
  index[options.type] = new app_angular_components_sql_part_sql_part__WEBPACK_IMPORTED_MODULE_0__.SqlPartDef(options);
}

register({
  type: 'column',
  style: 'label',
  params: [{
    type: 'column',
    dynamicLookup: true
  }],
  defaultParams: ['value']
});
register({
  type: 'expression',
  style: 'expression',
  label: 'Expr:',
  params: [{
    name: 'left',
    type: 'string',
    dynamicLookup: true
  }, {
    name: 'op',
    type: 'string',
    dynamicLookup: true
  }, {
    name: 'right',
    type: 'string',
    dynamicLookup: true
  }],
  defaultParams: ['value', '=', 'value']
});
register({
  type: 'macro',
  style: 'label',
  label: 'Macro:',
  params: [],
  defaultParams: []
});
register({
  type: 'aggregate',
  style: 'label',
  params: [{
    name: 'name',
    type: 'string',
    options: ['avg', 'count', 'min', 'max', 'sum', 'stddev', 'variance']
  }],
  defaultParams: ['avg']
});
register({
  type: 'alias',
  style: 'label',
  params: [{
    name: 'name',
    type: 'string',
    quote: 'double'
  }],
  defaultParams: ['alias']
});
register({
  type: 'time',
  style: 'function',
  label: 'time',
  params: [{
    name: 'interval',
    type: 'interval',
    options: ['$__interval', '1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }, {
    name: 'fill',
    type: 'string',
    options: ['none', 'NULL', 'previous', '0']
  }],
  defaultParams: ['$__interval', 'none']
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: createPart
});

/***/ }),

/***/ "./public/app/plugins/sdk.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsPanelCtrl": () => (/* binding */ MetricsPanelCtrl),
/* harmony export */   "PanelCtrl": () => (/* binding */ PanelCtrl),
/* harmony export */   "QueryCtrl": () => (/* binding */ QueryCtrl),
/* harmony export */   "loadPluginCss": () => (/* reexport safe */ _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.loadPluginCss)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/angular/panel/metrics_panel_ctrl.ts");
/* harmony import */ var app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/angular/panel/query_ctrl.ts");





const PanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__.PanelCtrl);
const MetricsPanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__.MetricsPanelCtrl);
const QueryCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__.QueryCtrl);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CQSxpRUFBZTtBQUNicVQsRUFBQUEsTUFBTSxFQUFFNkY7QUFESyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNdFksU0FBUyxHQUFHMFkscUVBQXNCLENBQUNFLG1FQUFELENBQXhDO0FBQ0EsTUFBTXRZLGdCQUFnQixHQUFHb1kscUVBQXNCLENBQUNHLGtGQUFELENBQS9DO0FBQ0EsTUFBTTVRLFNBQVMsR0FBR3lRLHFFQUFzQixDQUFDSSxtRUFBRCxDQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL2NvbXBvbmVudHMvc3FsX3BhcnQvc3FsX3BhcnQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvcGFuZWwvcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy91dGlscy9wYXNzd29yZEhhbmRsZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9teXNxbC9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9teXNxbC9tZXRhX3F1ZXJ5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9teXNxbC9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL215c3FsL215c3FsX3F1ZXJ5X21vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9teXNxbC9xdWVyeV9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9teXNxbC9yZXNwb25zZV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL215c3FsL3NxbF9wYXJ0LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvc2RrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvY2F0aW9uU2VhcmNoVG9PYmplY3QsIGxvY2F0aW9uU2VydmljZSwgbmF2aWdhdGlvbkxvZ2dlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZGVwcmVjYXRpb25XYXJuaW5nLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbi8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL2FlOGU5MDNlZGY4OGE4M2ZlZGQxMTZhZTAyYzA2MjhiZjcyYjE1MGMvc3JjL25nL2xvY2F0aW9uLmpzI0w1XG5jb25zdCBERUZBVUxUX1BPUlRTOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyBodHRwOiA4MCwgaHR0cHM6IDQ0MywgZnRwOiAyMSB9O1xuXG5leHBvcnQgY2xhc3MgQW5ndWxhckxvY2F0aW9uV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWJzVXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5hYnNVcmwpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaGFzaCk7XG4gICAgdGhpcy5ob3N0ID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5ob3N0KTtcbiAgICB0aGlzLnBhdGggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBhdGgpO1xuICAgIHRoaXMucG9ydCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucG9ydCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucHJvdG9jb2wgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnByb3RvY29sLCAnd2luZG93LmxvY2F0aW9uJyk7XG4gICAgdGhpcy5yZXBsYWNlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5yZXBsYWNlKTtcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc2VhcmNoKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cmwgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnVybCk7XG4gIH1cblxuICB3cmFwSW5EZXByZWNhdGlvbldhcm5pbmcoZm46IEZ1bmN0aW9uLCByZXBsYWNlbWVudD86IHN0cmluZykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgICAgZGVwcmVjYXRpb25XYXJuaW5nKCckbG9jYXRpb24nLCBmbi5uYW1lLCByZXBsYWNlbWVudCB8fCAnbG9jYXRpb25TZXJ2aWNlJyk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgYWJzVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLnVybCgpfWA7XG4gIH1cblxuICBoYXNoKG5ld0hhc2g/OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IGhhc2gnKTtcblxuICAgIGlmICghbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLmhhc2guc2xpY2UoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgfVxuXG4gIGhvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuaG9zdG5hbWU7XG4gIH1cblxuICBwYXRoKHBhdGhuYW1lPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHBhdGgnKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCk7XG5cbiAgICBpZiAocGF0aG5hbWUgIT09IHVuZGVmaW5lZCAmJiBwYXRobmFtZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHBhcnNlZFBhdGggPSBTdHJpbmcocGF0aG5hbWUpO1xuICAgICAgcGFyc2VkUGF0aCA9IHBhcnNlZFBhdGguc3RhcnRzV2l0aCgnLycpID8gcGFyc2VkUGF0aCA6IGAvJHtwYXJzZWRQYXRofWA7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtwYXJzZWRQYXRofWApO1xuXG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogdXJsLnNlYXJjaC5sZW5ndGggPiAwID8gdXJsLnNlYXJjaCA6IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaDogdXJsLmhhc2gubGVuZ3RoID4gMCA/IHVybC5oYXNoIDogbG9jYXRpb24uaGFzaCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09PSBudWxsKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuICB9XG5cbiAgcG9ydCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsLnBvcnQsIDEwKSB8fCBERUZBVUxUX1BPUlRTW3VybC5wcm90b2NvbF0gfHwgbnVsbDtcbiAgfVxuXG4gIHByb3RvY29sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnByb3RvY29sLnNsaWNlKDAsIC0xKTtcbiAgfVxuXG4gIHJlcGxhY2UoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBzZWFyY2goc2VhcmNoPzogYW55LCBwYXJhbVZhbHVlPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHNlYXJjaCcpO1xuICAgIGlmICghc2VhcmNoKSB7XG4gICAgICByZXR1cm4gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2ggJiYgYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHtcbiAgICAgICAgW3NlYXJjaF06IHBhcmFtVmFsdWUsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgbGV0IG5ld1F1ZXJ5O1xuXG4gICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbmV3UXVlcnkgPSB7IC4uLnNlYXJjaCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UXVlcnkgPSBsb2NhdGlvblNlYXJjaFRvT2JqZWN0KHNlYXJjaCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld1F1ZXJ5KSkge1xuICAgICAgICAvLyByZW1vdmluZyBwYXJhbXMgd2l0aCBudWxsIHwgdW5kZWZpbmVkXG4gICAgICAgIGlmIChuZXdRdWVyeVtrZXldID09PSBudWxsIHx8IG5ld1F1ZXJ5W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSBuZXdRdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWRVcmwgPSB1cmxVdGlsLnJlbmRlclVybChsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZSwgbmV3UXVlcnkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2godXBkYXRlZFVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0ZShzdGF0ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzdGF0ZScpO1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdXJsKG5ld1VybD86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiB1cmwnKTtcblxuICAgIGlmIChuZXdVcmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG5ld1VybC5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goeyAuLi5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKSwgaGFzaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnPycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIHNlYXJjaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2gobmV3VXJsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuICAgIHJldHVybiBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH0ke2xvY2F0aW9uLmhhc2h9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2xvbmUgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY2xhc3MgU3FsUGFydERlZiB7XG4gIHR5cGU6IHN0cmluZztcbiAgc3R5bGU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgcGFyYW1zOiBhbnlbXTtcbiAgZGVmYXVsdFBhcmFtczogYW55W107XG4gIHdyYXBPcGVuOiBzdHJpbmc7XG4gIHdyYXBDbG9zZTogc3RyaW5nO1xuICBzZXBhcmF0b3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgaWYgKG9wdGlvbnMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSBvcHRpb25zLmxhYmVsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsID0gdGhpcy50eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnR5cGUuc3Vic3RyaW5nKDEpICsgJzonO1xuICAgIH1cbiAgICB0aGlzLnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICBpZiAodGhpcy5zdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy53cmFwT3BlbiA9ICcoJztcbiAgICAgIHRoaXMud3JhcENsb3NlID0gJyknO1xuICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnLCAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndyYXBPcGVuID0gJyAnO1xuICAgICAgdGhpcy53cmFwQ2xvc2UgPSAnICc7XG4gICAgICB0aGlzLnNlcGFyYXRvciA9ICcgJztcbiAgICB9XG4gICAgdGhpcy5wYXJhbXMgPSBvcHRpb25zLnBhcmFtcztcbiAgICB0aGlzLmRlZmF1bHRQYXJhbXMgPSBvcHRpb25zLmRlZmF1bHRQYXJhbXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNxbFBhcnQge1xuICBwYXJ0OiBhbnk7XG4gIGRlZjogU3FsUGFydERlZjtcbiAgcGFyYW1zOiBhbnlbXTtcbiAgbGFiZWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRhdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHBhcnQ6IGFueSwgZGVmOiBhbnkpIHtcbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICAgIHRoaXMuZGVmID0gZGVmO1xuICAgIGlmICghdGhpcy5kZWYpIHtcbiAgICAgIHRocm93IHsgbWVzc2FnZTogJ0NvdWxkIG5vdCBmaW5kIHNxbCBwYXJ0ICcgKyBwYXJ0LnR5cGUgfTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGF0eXBlID0gcGFydC5kYXRhdHlwZTtcblxuICAgIGlmIChwYXJ0Lm5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IHBhcnQubmFtZTtcbiAgICAgIHRoaXMubGFiZWwgPSBkZWYubGFiZWwgKyAnICcgKyBwYXJ0Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgdGhpcy5sYWJlbCA9IGRlZi5sYWJlbDtcbiAgICB9XG5cbiAgICBwYXJ0LnBhcmFtcyA9IHBhcnQucGFyYW1zIHx8IGNsb25lKHRoaXMuZGVmLmRlZmF1bHRQYXJhbXMpO1xuICAgIHRoaXMucGFyYW1zID0gcGFydC5wYXJhbXM7XG4gIH1cblxuICB1cGRhdGVQYXJhbShzdHJWYWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgLy8gaGFuZGxlIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICBpZiAoc3RyVmFsdWUgPT09ICcnICYmIHRoaXMuZGVmLnBhcmFtc1tpbmRleF0ub3B0aW9uYWwpIHtcbiAgICAgIHRoaXMucGFyYW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFyYW1zW2luZGV4XSA9IHN0clZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMucGFydC5wYXJhbXMgPSB0aGlzLnBhcmFtcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBQYW5lbEN0cmwgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9wYW5lbCc7XG5pbXBvcnQgeyBDb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgTGVnYWN5UmVzcG9uc2VEYXRhLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUGFuZWxFdmVudHMsXG4gIFRpbWVSYW5nZSxcbiAgdG9EYXRhRnJhbWVEVE8sXG4gIHRvTGVnYWN5UmVzcG9uc2VEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBQYW5lbFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvcXVlcnkvc3RhdGUvUGFuZWxRdWVyeVJ1bm5lcic7XG5cbmNsYXNzIE1ldHJpY3NQYW5lbEN0cmwgZXh0ZW5kcyBQYW5lbEN0cmwge1xuICBkZWNsYXJlIGRhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGk7XG4gIGRlY2xhcmUgcmFuZ2U6IFRpbWVSYW5nZTtcblxuICBjb250ZXh0U3J2OiBDb250ZXh0U3J2O1xuICBkYXRhc291cmNlU3J2OiBhbnk7XG4gIHRpbWVTcnY6IGFueTtcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgaW50ZXJ2YWw6IGFueTtcbiAgaW50ZXJ2YWxNczogYW55O1xuICByZXNvbHV0aW9uOiBhbnk7XG4gIHRpbWVJbmZvPzogc3RyaW5nO1xuICBza2lwRGF0YU9uSW5pdCA9IGZhbHNlO1xuICBkYXRhTGlzdDogTGVnYWN5UmVzcG9uc2VEYXRhW10gPSBbXTtcbiAgcXVlcnlTdWJzY3JpcHRpb24/OiBVbnN1YnNjcmliYWJsZSB8IG51bGw7XG4gIHVzZURhdGFGcmFtZXMgPSBmYWxzZTtcbiAgcGFuZWxEYXRhPzogUGFuZWxEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGFueSkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcblxuICAgIHRoaXMuY29udGV4dFNydiA9ICRpbmplY3Rvci5nZXQoJ2NvbnRleHRTcnYnKTtcbiAgICB0aGlzLmRhdGFzb3VyY2VTcnYgPSAkaW5qZWN0b3IuZ2V0KCdkYXRhc291cmNlU3J2Jyk7XG4gICAgdGhpcy50aW1lU3J2ID0gJGluamVjdG9yLmdldCgndGltZVNydicpO1xuICAgIHRoaXMudGVtcGxhdGVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0ZW1wbGF0ZVNydicpO1xuICAgIHRoaXMucGFuZWwuZGF0YXNvdXJjZSA9IHRoaXMucGFuZWwuZGF0YXNvdXJjZSB8fCBudWxsO1xuXG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucmVmcmVzaCwgdGhpcy5vbk1ldHJpY3NQYW5lbFJlZnJlc2guYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucGFuZWxUZWFyZG93biwgdGhpcy5vblBhbmVsVGVhckRvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQsIHRoaXMub25NZXRyaWNzUGFuZWxNb3VudGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1ldHJpY3NQYW5lbE1vdW50ZWQoKSB7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSB0aGlzLnBhbmVsLmdldFF1ZXJ5UnVubmVyKCkgYXMgUGFuZWxRdWVyeVJ1bm5lcjtcbiAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gcXVlcnlSdW5uZXJcbiAgICAgIC5nZXREYXRhKHsgd2l0aFRyYW5zZm9ybXM6IHRydWUsIHdpdGhGaWVsZENvbmZpZzogdHJ1ZSB9KVxuICAgICAgLnN1YnNjcmliZSh0aGlzLnBhbmVsRGF0YU9ic2VydmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgb25QYW5lbFRlYXJEb3duKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsUmVmcmVzaCgpIHtcbiAgICAvLyBpZ25vcmUgZmV0Y2hpbmcgZGF0YSBpZiBhbm90aGVyIHBhbmVsIGlzIGluIGZ1bGxzY3JlZW5cbiAgICBpZiAodGhpcy5vdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgd2UgaGF2ZSBzbmFwc2hvdCBkYXRhIHVzZSB0aGF0XG4gICAgaWYgKHRoaXMucGFuZWwuc25hcHNob3REYXRhKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZSgpO1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YTtcbiAgICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IHtcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgICBzZXJpZXM6IGRhdGEsXG4gICAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIERlZmVyIHBhbmVsIHJlbmRlcmluZyB0aWxsIHRoZSBuZXh0IGRpZ2VzdCBjeWNsZS5cbiAgICAgIC8vIEZvciBzb21lIHJlYXNvbiBzbmFwc2hvdCBwYW5lbHMgZG9uJ3QgaW5pdCBhdCB0aGlzIHRpbWUsIHNvIHRoaXMgaGVscHMgdG8gYXZvaWQgcmVuZGVyaW5nIGlzc3Vlcy5cbiAgICAgIHJldHVybiB0aGlzLiR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhU25hcHNob3RMb2FkLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIGxvYWRpbmcvZXJyb3Igc3RhdGVcbiAgICBkZWxldGUgdGhpcy5lcnJvcjtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgLy8gbG9hZCBkYXRhc291cmNlIHNlcnZpY2VcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlU3J2XG4gICAgICAuZ2V0KHRoaXMucGFuZWwuZGF0YXNvdXJjZSwgdGhpcy5wYW5lbC5zY29wZWRWYXJzKVxuICAgICAgLnRoZW4odGhpcy5pc3N1ZVF1ZXJpZXMuYmluZCh0aGlzKSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb2Nlc3NEYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAvLyBpZiBjYW5jZWxlZCAga2VlcCBsb2FkaW5nIHNldCB0byB0cnVlXG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQYW5lbCByZXF1ZXN0IGNhbmNlbGxlZCcsIGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlIHx8ICdSZXF1ZXN0IEVycm9yJztcblxuICAgIGlmIChlcnIuZGF0YSkge1xuICAgICAgaWYgKGVyci5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5kYXRhLm1lc3NhZ2U7XG4gICAgICB9IGVsc2UgaWYgKGVyci5kYXRhLmVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnIuZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gIH1cblxuICBhbmd1bGFyRGlydHlDaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuJHNjb3BlLiRyb290LiQkcGhhc2UpIHtcbiAgICAgIHRoaXMuJHNjb3BlLiRkaWdlc3QoKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGVzIHRoZSByZXNwb25zZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIHN0cmVhbVxuICBwYW5lbERhdGFPYnNlcnZlciA9IHtcbiAgICBuZXh0OiAoZGF0YTogUGFuZWxEYXRhKSA9PiB7XG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuRXJyb3IpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWdub3JlIGRhdGEgaW4gbG9hZGluZyBzdGF0ZVxuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5yZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHsgdGltZUluZm8gfSA9IGRhdGEucmVxdWVzdDtcbiAgICAgICAgaWYgKHRpbWVJbmZvKSB7XG4gICAgICAgICAgdGhpcy50aW1lSW5mbyA9IHRpbWVJbmZvO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRpbWVSYW5nZSkge1xuICAgICAgICB0aGlzLnJhbmdlID0gZGF0YS50aW1lUmFuZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnVzZURhdGFGcmFtZXMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRhRnJhbWVzKGRhdGEuc2VyaWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1ha2UgdGhlIHJlc3VsdHMgbG9vayBhcyBpZiB0aGV5IGNhbWUgZGlyZWN0bHkgZnJvbSBhIDw2LjIgZGF0YXNvdXJjZSByZXF1ZXN0XG4gICAgICAgIGNvbnN0IGxlZ2FjeSA9IGRhdGEuc2VyaWVzLm1hcCgodikgPT4gdG9MZWdhY3lSZXNwb25zZURhdGEodikpO1xuICAgICAgICB0aGlzLmhhbmRsZVF1ZXJ5UmVzdWx0KHsgZGF0YTogbGVnYWN5IH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gICAgfSxcbiAgfTtcblxuICB1cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZT86IERhdGFTb3VyY2VBcGkpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlIHx8IHRoaXMuZGF0YXNvdXJjZTtcbiAgICB0aGlzLnJhbmdlID0gdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpO1xuXG4gICAgY29uc3QgbmV3VGltZURhdGEgPSBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyh0aGlzLnBhbmVsLCB0aGlzLnJhbmdlKTtcbiAgICB0aGlzLnRpbWVJbmZvID0gbmV3VGltZURhdGEudGltZUluZm87XG4gICAgdGhpcy5yYW5nZSA9IG5ld1RpbWVEYXRhLnRpbWVSYW5nZTtcbiAgfVxuXG4gIGlzc3VlUXVlcmllcyhkYXRhc291cmNlOiBEYXRhU291cmNlQXBpKSB7XG4gICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZSk7XG5cbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuXG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLnBhbmVsIGFzIFBhbmVsTW9kZWw7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSBwYW5lbC5nZXRRdWVyeVJ1bm5lcigpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UnVubmVyLnJ1bih7XG4gICAgICBkYXRhc291cmNlOiBwYW5lbC5kYXRhc291cmNlLFxuICAgICAgcXVlcmllczogcGFuZWwudGFyZ2V0cyxcbiAgICAgIHBhbmVsSWQ6IHBhbmVsLmlkLFxuICAgICAgZGFzaGJvYXJkSWQ6IHRoaXMuZGFzaGJvYXJkLmlkLFxuICAgICAgdGltZXpvbmU6IHRoaXMuZGFzaGJvYXJkLmdldFRpbWV6b25lKCksXG4gICAgICB0aW1lSW5mbzogdGhpcy50aW1lSW5mbyxcbiAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIG1heERhdGFQb2ludHM6IHBhbmVsLm1heERhdGFQb2ludHMgfHwgdGhpcy53aWR0aCxcbiAgICAgIG1pbkludGVydmFsOiBwYW5lbC5pbnRlcnZhbCxcbiAgICAgIHNjb3BlZFZhcnM6IHBhbmVsLnNjb3BlZFZhcnMsXG4gICAgICBjYWNoZVRpbWVvdXQ6IHBhbmVsLmNhY2hlVGltZW91dCxcbiAgICAgIHRyYW5zZm9ybWF0aW9uczogcGFuZWwudHJhbnNmb3JtYXRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGF0YUZyYW1lcyhkYXRhOiBEYXRhRnJhbWVbXSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkICYmIHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IGRhdGEubWFwKChmcmFtZSkgPT4gdG9EYXRhRnJhbWVEVE8oZnJhbWUpKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhRnJhbWVzUmVjZWl2ZWQsIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUXVlcnlSZXN1bHQocmVzdWx0OiBEYXRhUXVlcnlSZXNwb25zZSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGEgc291cmNlIHF1ZXJ5IHJlc3VsdCBpbnZhbGlkLCBtaXNzaW5nIGRhdGEgZmllbGQ6JywgcmVzdWx0KTtcbiAgICAgIHJlc3VsdCA9IHsgZGF0YTogW10gfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhUmVjZWl2ZWQsIHJlc3VsdC5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIH07XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBwcm9maWxlciB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgQXBwRXZlbnQsXG4gIFBhbmVsRXZlbnRzLFxuICBQYW5lbFBsdWdpbk1ldGEsXG4gIEFuZ3VsYXJQYW5lbE1lbnVJdGVtLFxuICBFdmVudEJ1c0V4dGVuZGVkLFxuICBFdmVudEJ1c1Nydixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyIH0gZnJvbSAnYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlcic7XG5cbmV4cG9ydCBjbGFzcyBQYW5lbEN0cmwge1xuICBwYW5lbDogYW55O1xuICBlcnJvcjogYW55O1xuICBkZWNsYXJlIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbk5hbWUgPSAnJztcbiAgcGx1Z2luSWQgPSAnJztcbiAgZWRpdG9yVGFiczogYW55O1xuICAkc2NvcGU6IGFueTtcbiAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2U7XG4gICR0aW1lb3V0OiBhbnk7XG4gIGVkaXRNb2RlSW5pdGlhdGVkID0gZmFsc2U7XG4gIGRlY2xhcmUgaGVpZ2h0OiBudW1iZXI7XG4gIGRlY2xhcmUgd2lkdGg6IG51bWJlcjtcbiAgY29udGFpbmVySGVpZ2h0OiBhbnk7XG4gIGV2ZW50czogRXZlbnRCdXNFeHRlbmRlZDtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICB0aW1pbmc6IGFueTtcbiAgJGxvY2F0aW9uOiBBbmd1bGFyTG9jYXRpb25XcmFwcGVyO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsID8/ICRzY29wZS4kcGFyZW50LnBhbmVsO1xuICAgIHRoaXMuZGFzaGJvYXJkID0gdGhpcy5kYXNoYm9hcmQgPz8gJHNjb3BlLiRwYXJlbnQuZGFzaGJvYXJkO1xuICAgIHRoaXMuJGluamVjdG9yID0gJGluamVjdG9yO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHRpbWVvdXQgPSAkaW5qZWN0b3IuZ2V0KCckdGltZW91dCcpO1xuICAgIHRoaXMuZWRpdG9yVGFicyA9IFtdO1xuICAgIHRoaXMuJGxvY2F0aW9uID0gbmV3IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEJ1c1NydigpO1xuICAgIHRoaXMudGltaW5nID0ge307IC8vIG5vdCB1c2VkIGJ1dCBoZXJlIHRvIG5vdCBicmVhayBwbHVnaW5zXG5cbiAgICBjb25zdCBwbHVnaW4gPSBjb25maWcucGFuZWxzW3RoaXMucGFuZWwudHlwZV07XG4gICAgaWYgKHBsdWdpbikge1xuICAgICAgdGhpcy5wbHVnaW5JZCA9IHBsdWdpbi5pZDtcbiAgICAgIHRoaXMucGx1Z2luTmFtZSA9IHBsdWdpbi5uYW1lO1xuICAgIH1cblxuICAgICRzY29wZS4kb24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQubmFtZSwgKCkgPT4gdGhpcy5wYW5lbERpZE1vdW50KCkpO1xuICB9XG5cbiAgcGFuZWxEaWRNb3VudCgpIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50KTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRpYWxpemVkKTtcbiAgICB0aGlzLmRhc2hib2FyZC5wYW5lbEluaXRpYWxpemVkKHRoaXMucGFuZWwpO1xuICB9XG5cbiAgcmVuZGVyaW5nQ29tcGxldGVkKCkge1xuICAgIHByb2ZpbGVyLnJlbmRlcmluZ0NvbXBsZXRlZCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnBhbmVsLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1Ymxpc2hBcHBFdmVudDxUPihldmVudDogQXBwRXZlbnQ8VD4sIHBheWxvYWQ/OiBUKSB7XG4gICAgdGhpcy4kc2NvcGUuJHJvb3QuYXBwRXZlbnQoZXZlbnQsIHBheWxvYWQpO1xuICB9XG5cbiAgaW5pdEVkaXRNb2RlKCkge1xuICAgIGlmICghdGhpcy5lZGl0TW9kZUluaXRpYXRlZCkge1xuICAgICAgdGhpcy5lZGl0TW9kZUluaXRpYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmVkaXRNb2RlSW5pdGlhbGl6ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkaXRvclRhYih0aXRsZTogc3RyaW5nLCBkaXJlY3RpdmVGbjogYW55LCBpbmRleD86IG51bWJlciwgaWNvbj86IGFueSkge1xuICAgIGNvbnN0IGVkaXRvclRhYiA9IHsgdGl0bGUsIGRpcmVjdGl2ZUZuLCBpY29uIH07XG5cbiAgICBpZiAoaXNTdHJpbmcoZGlyZWN0aXZlRm4pKSB7XG4gICAgICBlZGl0b3JUYWIuZGlyZWN0aXZlRm4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlVXJsOiBkaXJlY3RpdmVGbiB9O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5zcGxpY2UoaW5kZXgsIDAsIGVkaXRvclRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5wdXNoKGVkaXRvclRhYik7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXh0ZW5kZWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnU6IEFuZ3VsYXJQYW5lbE1lbnVJdGVtW10gPSBbXTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRQYW5lbEFjdGlvbnMsIG1lbnUpO1xuICAgIHJldHVybiBtZW51O1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgaW4gc3ViLWNsYXNzIHRvIGFkZCBpdGVtcyBiZWZvcmUgZXh0ZW5kZWQgbWVudVxuICBhc3luYyBnZXRBZGRpdGlvbmFsTWVudUl0ZW1zKCk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmQub3RoZXJQYW5lbEluRnVsbHNjcmVlbih0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcihwYXlsb2FkPzogYW55KSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5yZW5kZXIsIHBheWxvYWQpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVuIGZyb20gcmVhY3RcbiAgb25QbHVnaW5UeXBlQ2hhbmdlID0gKHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhKSA9PiB7fTtcbn1cbiIsImltcG9ydCB7IGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuXG5leHBvcnQgY2xhc3MgUXVlcnlDdHJsPFQgPSBhbnk+IHtcbiAgdGFyZ2V0ITogVDtcbiAgZGF0YXNvdXJjZSE6IGFueTtcbiAgcGFuZWxDdHJsITogYW55O1xuICBwYW5lbDogYW55O1xuICBoYXNSYXdNb2RlITogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuICBpc0xhc3RRdWVyeTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbnksIHB1YmxpYyAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWxDdHJsID0gdGhpcy5wYW5lbEN0cmwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQgPz8gJHNjb3BlLmN0cmwudGFyZ2V0O1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IHRoaXMuZGF0YXNvdXJjZSA/PyAkc2NvcGUuY3RybC5kYXRhc291cmNlO1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsQ3RybD8ucGFuZWwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMuaXNMYXN0UXVlcnkgPSBpbmRleE9mKHRoaXMucGFuZWwudGFyZ2V0cywgdGhpcy50YXJnZXQpID09PSB0aGlzLnBhbmVsLnRhcmdldHMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpO1xuICB9XG59XG4iLCIvKipcbiAqIFNldCBvZiBoYW5kbGVycyBmb3Igc2VjdXJlIHBhc3N3b3JkIGZpZWxkIGluIEFuZ3VsYXIgY29tcG9uZW50cy4gVGhleSBoYW5kbGUgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoXG4gKiBwYXNzd29yZHMgc3RvcmVkIGluIHBsYWluIHRleHQgZmllbGRzLlxuICovXG5cbmltcG9ydCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZW51bSBQYXNzd29yZEZpZWxkRW51bSB7XG4gIFBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbiAgQmFzaWNBdXRoUGFzc3dvcmQgPSAnYmFzaWNBdXRoUGFzc3dvcmQnLFxufVxuXG4vKipcbiAqIEJhc2ljIHNoYXBlIGZvciBzZXR0aW5ncyBjb250cm9sbGVycyBpbiBhdCB0aGUgbW9tZW50IG1vc3RseSBhbmd1bGFyIGRhdGEgc291cmNlIHBsdWdpbnMuXG4gKi9cbmV4cG9ydCB0eXBlIEN0cmwgPSB7XG4gIGN1cnJlbnQ6IHtcbiAgICBzZWN1cmVKc29uRmllbGRzOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xuICAgIH07XG4gICAgc2VjdXJlSnNvbkRhdGE/OiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBiYXNpY0F1dGhQYXNzd29yZD86IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNldEhhbmRsZXIgPVxuICAoY3RybDogQ3RybCwgZmllbGQ6IFBhc3N3b3JkRmllbGRFbnVtKSA9PiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBSZXNldCBhbHNvIG5vcm1hbCBwbGFpbiB0ZXh0IHBhc3N3b3JkIHRvIHJlbW92ZSBpdCBhbmQgb25seSBzYXZlIGl0IGluIHNlY3VyZUpzb25EYXRhLlxuICAgIGN0cmwuY3VycmVudFtmaWVsZF0gPSB1bmRlZmluZWQ7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25GaWVsZHNbZmllbGRdID0gZmFsc2U7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhID0gY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhIHx8IHt9O1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YVtmaWVsZF0gPSAnJztcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYW5nZUhhbmRsZXIgPVxuICAoY3RybDogYW55LCBmaWVsZDogUGFzc3dvcmRGaWVsZEVudW0pID0+IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgPSBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgfHwge307XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhW2ZpZWxkXSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gIH07XG4iLCJpbXBvcnQgeyBtYXAgYXMgX21hcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2UsIERhdGFTb3VyY2VXaXRoQmFja2VuZCwgRmV0Y2hSZXNwb25zZSwgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkV2ZW50LCBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgTWV0cmljRmluZFZhbHVlLCBTY29wZWRWYXJzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCBNeVNRTFF1ZXJ5TW9kZWwgZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9teXNxbC9teXNxbF9xdWVyeV9tb2RlbCc7XG5pbXBvcnQgUmVzcG9uc2VQYXJzZXIgZnJvbSAnLi9yZXNwb25zZV9wYXJzZXInO1xuaW1wb3J0IHsgTXlTUUxPcHRpb25zLCBNeVNRTFF1ZXJ5LCBNeXNxbFF1ZXJ5Rm9ySW50ZXJwb2xhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcbmltcG9ydCB7IGdldFNlYXJjaEZpbHRlclNjb3BlZFZhciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL3ZhcmlhYmxlcy91dGlscyc7XG5pbXBvcnQgeyB0b1Rlc3RpbmdTdGF0dXMgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYy91dGlscy9xdWVyeVJlc3BvbnNlJztcblxuZXhwb3J0IGNsYXNzIE15c3FsRGF0YXNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VXaXRoQmFja2VuZDxNeVNRTFF1ZXJ5LCBNeVNRTE9wdGlvbnM+IHtcbiAgaWQ6IGFueTtcbiAgbmFtZTogYW55O1xuICByZXNwb25zZVBhcnNlcjogUmVzcG9uc2VQYXJzZXI7XG4gIHF1ZXJ5TW9kZWw6IE15U1FMUXVlcnlNb2RlbDtcbiAgaW50ZXJ2YWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxNeVNRTE9wdGlvbnM+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKVxuICApIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgICB0aGlzLm5hbWUgPSBpbnN0YW5jZVNldHRpbmdzLm5hbWU7XG4gICAgdGhpcy5pZCA9IGluc3RhbmNlU2V0dGluZ3MuaWQ7XG4gICAgdGhpcy5yZXNwb25zZVBhcnNlciA9IG5ldyBSZXNwb25zZVBhcnNlcigpO1xuICAgIHRoaXMucXVlcnlNb2RlbCA9IG5ldyBNeVNRTFF1ZXJ5TW9kZWwoe30pO1xuICAgIGNvbnN0IHNldHRpbmdzRGF0YSA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEgfHwgKHt9IGFzIE15U1FMT3B0aW9ucyk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldHRpbmdzRGF0YS50aW1lSW50ZXJ2YWwgfHwgJzFtJztcbiAgfVxuXG4gIGludGVycG9sYXRlVmFyaWFibGUgPSAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVtYmVyLCB2YXJpYWJsZTogYW55KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh2YXJpYWJsZS5tdWx0aSB8fCB2YXJpYWJsZS5pbmNsdWRlQWxsKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucXVlcnlNb2RlbC5xdW90ZUxpdGVyYWwodmFsdWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcXVvdGVkVmFsdWVzID0gX21hcCh2YWx1ZSwgKHY6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucXVlcnlNb2RlbC5xdW90ZUxpdGVyYWwodik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHF1b3RlZFZhbHVlcy5qb2luKCcsJyk7XG4gIH07XG5cbiAgaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMoXG4gICAgcXVlcmllczogTXlzcWxRdWVyeUZvckludGVycG9sYXRpb25bXSxcbiAgICBzY29wZWRWYXJzOiBTY29wZWRWYXJzXG4gICk6IE15c3FsUXVlcnlGb3JJbnRlcnBvbGF0aW9uW10ge1xuICAgIGxldCBleHBhbmRlZFF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgIGlmIChxdWVyaWVzICYmIHF1ZXJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZXhwYW5kZWRRdWVyaWVzID0gcXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkUXVlcnkgPSB7XG4gICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgICByYXdTcWw6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5yYXdTcWwsIHNjb3BlZFZhcnMsIHRoaXMuaW50ZXJwb2xhdGVWYXJpYWJsZSksXG4gICAgICAgICAgcmF3UXVlcnk6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBleHBhbmRlZFF1ZXJ5O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBleHBhbmRlZFF1ZXJpZXM7XG4gIH1cblxuICBmaWx0ZXJRdWVyeShxdWVyeTogTXlTUUxRdWVyeSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhcXVlcnkuaGlkZTtcbiAgfVxuXG4gIGFwcGx5VGVtcGxhdGVWYXJpYWJsZXModGFyZ2V0OiBNeVNRTFF1ZXJ5LCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgY29uc3QgcXVlcnlNb2RlbCA9IG5ldyBNeVNRTFF1ZXJ5TW9kZWwodGFyZ2V0LCB0aGlzLnRlbXBsYXRlU3J2LCBzY29wZWRWYXJzKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVmSWQ6IHRhcmdldC5yZWZJZCxcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByYXdTcWw6IHF1ZXJ5TW9kZWwucmVuZGVyKHRoaXMuaW50ZXJwb2xhdGVWYXJpYWJsZSBhcyBhbnkpLFxuICAgICAgZm9ybWF0OiB0YXJnZXQuZm9ybWF0LFxuICAgIH07XG4gIH1cblxuICBhc3luYyBhbm5vdGF0aW9uUXVlcnkob3B0aW9uczogYW55KTogUHJvbWlzZTxBbm5vdGF0aW9uRXZlbnRbXT4ge1xuICAgIGlmICghb3B0aW9ucy5hbm5vdGF0aW9uLnJhd1F1ZXJ5KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICBtZXNzYWdlOiAnUXVlcnkgbWlzc2luZyBpbiBhbm5vdGF0aW9uIGRlZmluaXRpb24nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICByZWZJZDogb3B0aW9ucy5hbm5vdGF0aW9uLm5hbWUsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucy5hbm5vdGF0aW9uLnJhd1F1ZXJ5LCBvcHRpb25zLnNjb3BlZFZhcnMsIHRoaXMuaW50ZXJwb2xhdGVWYXJpYWJsZSksXG4gICAgICBmb3JtYXQ6ICd0YWJsZScsXG4gICAgfTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAgIC5mZXRjaDxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPih7XG4gICAgICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZnJvbTogb3B0aW9ucy5yYW5nZS5mcm9tLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgdG86IG9wdGlvbnMucmFuZ2UudG8udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBxdWVyaWVzOiBbcXVlcnldLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWVzdElkOiBvcHRpb25zLmFubm90YXRpb24ubmFtZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgYXN5bmMgKHJlczogRmV0Y2hSZXNwb25zZTxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPikgPT5cbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXNwb25zZVBhcnNlci50cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2Uob3B0aW9ucywgcmVzLmRhdGEpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG1ldHJpY0ZpbmRRdWVyeShxdWVyeTogc3RyaW5nLCBvcHRpb25hbE9wdGlvbnM6IGFueSk6IFByb21pc2U8TWV0cmljRmluZFZhbHVlW10+IHtcbiAgICBsZXQgcmVmSWQgPSAndGVtcHZhcic7XG4gICAgaWYgKG9wdGlvbmFsT3B0aW9ucyAmJiBvcHRpb25hbE9wdGlvbnMudmFyaWFibGUgJiYgb3B0aW9uYWxPcHRpb25zLnZhcmlhYmxlLm5hbWUpIHtcbiAgICAgIHJlZklkID0gb3B0aW9uYWxPcHRpb25zLnZhcmlhYmxlLm5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3U3FsID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKFxuICAgICAgcXVlcnksXG4gICAgICBnZXRTZWFyY2hGaWx0ZXJTY29wZWRWYXIoeyBxdWVyeSwgd2lsZGNhcmRDaGFyOiAnJScsIG9wdGlvbnM6IG9wdGlvbmFsT3B0aW9ucyB9KSxcbiAgICAgIHRoaXMuaW50ZXJwb2xhdGVWYXJpYWJsZVxuICAgICk7XG5cbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRRdWVyeSA9IHtcbiAgICAgIHJlZklkOiByZWZJZCxcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByYXdTcWwsXG4gICAgICBmb3JtYXQ6ICd0YWJsZScsXG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmdlID0gb3B0aW9uYWxPcHRpb25zPy5yYW5nZTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAgIC5mZXRjaDxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPih7XG4gICAgICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZnJvbTogcmFuZ2U/LmZyb20/LnZhbHVlT2YoKT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiByYW5nZT8udG8/LnZhbHVlT2YoKT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFtpbnRlcnBvbGF0ZWRRdWVyeV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0SWQ6IHJlZklkLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJzcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VQYXJzZXIudHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlKHJzcCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdGVzdERhdGFzb3VyY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZmV0Y2goe1xuICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZyb206ICc1bScsXG4gICAgICAgICAgICB0bzogJ25vdycsXG4gICAgICAgICAgICBxdWVyaWVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWZJZDogJ0EnLFxuICAgICAgICAgICAgICAgIGludGVydmFsTXM6IDEsXG4gICAgICAgICAgICAgICAgbWF4RGF0YVBvaW50czogMSxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgICAgICAgIHJhd1NxbDogJ1NFTEVDVCAxJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd0YWJsZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcFRvKHsgc3RhdHVzOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdEYXRhYmFzZSBDb25uZWN0aW9uIE9LJyB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZih0b1Rlc3RpbmdTdGF0dXMoZXJyKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICB0YXJnZXRDb250YWluc1RlbXBsYXRlKHRhcmdldDogYW55KSB7XG4gICAgbGV0IHJhd1NxbCA9ICcnO1xuXG4gICAgaWYgKHRhcmdldC5yYXdRdWVyeSkge1xuICAgICAgcmF3U3FsID0gdGFyZ2V0LnJhd1NxbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcXVlcnkgPSBuZXcgTXlTUUxRdWVyeU1vZGVsKHRhcmdldCk7XG4gICAgICByYXdTcWwgPSBxdWVyeS5idWlsZFF1ZXJ5KCk7XG4gICAgfVxuXG4gICAgcmF3U3FsID0gcmF3U3FsLnJlcGxhY2UoJyRfXycsICcnKTtcblxuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LmNvbnRhaW5zVGVtcGxhdGUocmF3U3FsKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE15c3FsTWV0YVF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXJnZXQ6IGFueSwgcHJpdmF0ZSBxdWVyeU1vZGVsOiBhbnkpIHt9XG5cbiAgZ2V0T3BlcmF0b3JzKGRhdGF0eXBlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGRhdGF0eXBlKSB7XG4gICAgICBjYXNlICdkb3VibGUnOlxuICAgICAgY2FzZSAnZmxvYXQnOiB7XG4gICAgICAgIHJldHVybiBbJz0nLCAnIT0nLCAnPCcsICc8PScsICc+JywgJz49J107XG4gICAgICB9XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGNhc2UgJ3Rpbnl0ZXh0JzpcbiAgICAgIGNhc2UgJ21lZGl1bXRleHQnOlxuICAgICAgY2FzZSAnbG9uZ3RleHQnOlxuICAgICAgY2FzZSAndmFyY2hhcic6XG4gICAgICBjYXNlICdjaGFyJzoge1xuICAgICAgICByZXR1cm4gWyc9JywgJyE9JywgJzwnLCAnPD0nLCAnPicsICc+PScsICdJTicsICdOT1QgSU4nLCAnTElLRScsICdOT1QgTElLRSddO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gWyc9JywgJyE9JywgJzwnLCAnPD0nLCAnPicsICc+PScsICdJTicsICdOT1QgSU4nXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBxdW90ZSBpZGVudGlmaWVyIGFzIGxpdGVyYWwgdG8gdXNlIGluIG1ldGFkYXRhIHF1ZXJpZXNcbiAgcXVvdGVJZGVudEFzTGl0ZXJhbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlNb2RlbC5xdW90ZUxpdGVyYWwodGhpcy5xdWVyeU1vZGVsLnVucXVvdGVJZGVudGlmaWVyKHZhbHVlKSk7XG4gIH1cblxuICBmaW5kTWV0cmljVGFibGUoKSB7XG4gICAgLy8gcXVlcnkgdGhhdCByZXR1cm5zIGZpcnN0IHRhYmxlIGZvdW5kIHRoYXQgaGFzIGEgdGltZXN0YW1wKHR6KSBjb2x1bW4gYW5kIGEgZmxvYXQgY29sdW1uXG4gICAgY29uc3QgcXVlcnkgPSBgXG4gIFNFTEVDVFxuICAgIHRhYmxlX25hbWUgYXMgdGFibGVfbmFtZSxcbiAgICAoIFNFTEVDVFxuICAgICAgICBjb2x1bW5fbmFtZSBhcyBjb2x1bW5fbmFtZVxuICAgICAgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBjXG4gICAgICBXSEVSRVxuICAgICAgICBjLnRhYmxlX3NjaGVtYSA9IHQudGFibGVfc2NoZW1hIEFORFxuICAgICAgICBjLnRhYmxlX25hbWUgPSB0LnRhYmxlX25hbWUgQU5EXG4gICAgICAgIGMuZGF0YV90eXBlIElOICgndGltZXN0YW1wJywgJ2RhdGV0aW1lJylcbiAgICAgIE9SREVSIEJZIG9yZGluYWxfcG9zaXRpb24gTElNSVQgMVxuICAgICkgQVMgdGltZV9jb2x1bW4sXG4gICAgKCBTRUxFQ1RcbiAgICAgICAgY29sdW1uX25hbWUgQVMgY29sdW1uX25hbWVcbiAgICAgIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgY1xuICAgICAgV0hFUkVcbiAgICAgICAgYy50YWJsZV9zY2hlbWEgPSB0LnRhYmxlX3NjaGVtYSBBTkRcbiAgICAgICAgYy50YWJsZV9uYW1lID0gdC50YWJsZV9uYW1lIEFORFxuICAgICAgICBjLmRhdGFfdHlwZSBJTignZmxvYXQnLCAnaW50JywgJ2JpZ2ludCcpXG4gICAgICBPUkRFUiBCWSBvcmRpbmFsX3Bvc2l0aW9uIExJTUlUIDFcbiAgICApIEFTIHZhbHVlX2NvbHVtblxuICBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS50YWJsZXMgdFxuICBXSEVSRVxuICAgIHQudGFibGVfc2NoZW1hID0gZGF0YWJhc2UoKSBBTkRcbiAgICBFWElTVFNcbiAgICAoIFNFTEVDVCAxXG4gICAgICBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIGNcbiAgICAgIFdIRVJFXG4gICAgICAgIGMudGFibGVfc2NoZW1hID0gdC50YWJsZV9zY2hlbWEgQU5EXG4gICAgICAgIGMudGFibGVfbmFtZSA9IHQudGFibGVfbmFtZSBBTkRcbiAgICAgICAgYy5kYXRhX3R5cGUgSU4gKCd0aW1lc3RhbXAnLCAnZGF0ZXRpbWUnKVxuICAgICkgQU5EXG4gICAgRVhJU1RTXG4gICAgKCBTRUxFQ1QgMVxuICAgICAgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBjXG4gICAgICBXSEVSRVxuICAgICAgICBjLnRhYmxlX3NjaGVtYSA9IHQudGFibGVfc2NoZW1hIEFORFxuICAgICAgICBjLnRhYmxlX25hbWUgPSB0LnRhYmxlX25hbWUgQU5EXG4gICAgICAgIGMuZGF0YV90eXBlIElOKCdmbG9hdCcsICdpbnQnLCAnYmlnaW50JylcbiAgICApXG4gIExJTUlUIDFcbjtgO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkVGFibGVDb25zdHJhaW50KHRhYmxlOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnkgPSAnJztcblxuICAgIC8vIGNoZWNrIGZvciBzY2hlbWEgcXVhbGlmaWVkIHRhYmxlXG4gICAgaWYgKHRhYmxlLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdGFibGUuc3BsaXQoJy4nKTtcbiAgICAgIHF1ZXJ5ID0gJ3RhYmxlX3NjaGVtYSA9ICcgKyB0aGlzLnF1b3RlSWRlbnRBc0xpdGVyYWwocGFydHNbMF0pO1xuICAgICAgcXVlcnkgKz0gJyBBTkQgdGFibGVfbmFtZSA9ICcgKyB0aGlzLnF1b3RlSWRlbnRBc0xpdGVyYWwocGFydHNbMV0pO1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeSA9ICd0YWJsZV9zY2hlbWEgPSBkYXRhYmFzZSgpIEFORCB0YWJsZV9uYW1lID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbCh0YWJsZSk7XG5cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG4gIH1cblxuICBidWlsZFRhYmxlUXVlcnkoKSB7XG4gICAgcmV0dXJuICdTRUxFQ1QgdGFibGVfbmFtZSBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS50YWJsZXMgV0hFUkUgdGFibGVfc2NoZW1hID0gZGF0YWJhc2UoKSBPUkRFUiBCWSB0YWJsZV9uYW1lJztcbiAgfVxuXG4gIGJ1aWxkQ29sdW1uUXVlcnkodHlwZT86IHN0cmluZykge1xuICAgIGxldCBxdWVyeSA9ICdTRUxFQ1QgY29sdW1uX25hbWUgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBXSEVSRSAnO1xuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRUYWJsZUNvbnN0cmFpbnQodGhpcy50YXJnZXQudGFibGUpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd0aW1lJzoge1xuICAgICAgICBxdWVyeSArPSBcIiBBTkQgZGF0YV90eXBlIElOICgndGltZXN0YW1wJywnZGF0ZXRpbWUnLCdiaWdpbnQnLCdpbnQnLCdkb3VibGUnLCdmbG9hdCcpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbWV0cmljJzoge1xuICAgICAgICBxdWVyeSArPSBcIiBBTkQgZGF0YV90eXBlIElOICgndGV4dCcsJ3Rpbnl0ZXh0JywnbWVkaXVtdGV4dCcsJ2xvbmd0ZXh0JywndmFyY2hhcicsJ2NoYXInKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3ZhbHVlJzoge1xuICAgICAgICBxdWVyeSArPSBcIiBBTkQgZGF0YV90eXBlIElOICgnYmlnaW50JywnaW50Jywnc21hbGxpbnQnLCdtZWRpdW1pbnQnLCd0aW55aW50JywnZG91YmxlJywnZGVjaW1hbCcsJ2Zsb2F0JylcIjtcbiAgICAgICAgcXVlcnkgKz0gJyBBTkQgY29sdW1uX25hbWUgPD4gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbCh0aGlzLnRhcmdldC50aW1lQ29sdW1uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdncm91cCc6IHtcbiAgICAgICAgcXVlcnkgKz0gXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ3RleHQnLCd0aW55dGV4dCcsJ21lZGl1bXRleHQnLCdsb25ndGV4dCcsJ3ZhcmNoYXInLCdjaGFyJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVlcnkgKz0gJyBPUkRFUiBCWSBjb2x1bW5fbmFtZSc7XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZFZhbHVlUXVlcnkoY29sdW1uOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUIERJU1RJTkNUIFFVT1RFKCcgKyBjb2x1bW4gKyAnKSc7XG4gICAgcXVlcnkgKz0gJyBGUk9NICcgKyB0aGlzLnRhcmdldC50YWJsZTtcbiAgICBxdWVyeSArPSAnIFdIRVJFICRfX3RpbWVGaWx0ZXIoJyArIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gKyAnKSc7XG4gICAgcXVlcnkgKz0gJyBPUkRFUiBCWSAxIExJTUlUIDEwMCc7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGREYXRhdHlwZVF1ZXJ5KGNvbHVtbjogc3RyaW5nKSB7XG4gICAgbGV0IHF1ZXJ5ID0gYFxuU0VMRUNUIGRhdGFfdHlwZVxuRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1uc1xuV0hFUkUgYDtcbiAgICBxdWVyeSArPSAnIHRhYmxlX25hbWUgPSAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKHRoaXMudGFyZ2V0LnRhYmxlKTtcbiAgICBxdWVyeSArPSAnIEFORCBjb2x1bW5fbmFtZSA9ICcgKyB0aGlzLnF1b3RlSWRlbnRBc0xpdGVyYWwoY29sdW1uKTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE15c3FsRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBNeXNxbFF1ZXJ5Q3RybCB9IGZyb20gJy4vcXVlcnlfY3RybCc7XG5pbXBvcnQge1xuICBjcmVhdGVDaGFuZ2VIYW5kbGVyLFxuICBjcmVhdGVSZXNldEhhbmRsZXIsXG4gIFBhc3N3b3JkRmllbGRFbnVtLFxufSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9kYXRhc291cmNlcy91dGlscy9wYXNzd29yZEhhbmRsZXJzJztcbmltcG9ydCB7IE15U1FMUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuY2xhc3MgTXlzcWxDb25maWdDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2NvbmZpZy5odG1sJztcbiAgY3VycmVudDogYW55O1xuICBvblBhc3N3b3JkUmVzZXQ6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVJlc2V0SGFuZGxlcj47XG4gIG9uUGFzc3dvcmRDaGFuZ2U6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUNoYW5nZUhhbmRsZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub25QYXNzd29yZFJlc2V0ID0gY3JlYXRlUmVzZXRIYW5kbGVyKHRoaXMsIFBhc3N3b3JkRmllbGRFbnVtLlBhc3N3b3JkKTtcbiAgICB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UgPSBjcmVhdGVDaGFuZ2VIYW5kbGVyKHRoaXMsIFBhc3N3b3JkRmllbGRFbnVtLlBhc3N3b3JkKTtcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBgU0VMRUNUXG4gICAgVU5JWF9USU1FU1RBTVAoPHRpbWVfY29sdW1uPikgYXMgdGltZV9zZWMsXG4gICAgPHRleHRfY29sdW1uPiBhcyB0ZXh0LFxuICAgIDx0YWdzX2NvbHVtbj4gYXMgdGFnc1xuICBGUk9NIDx0YWJsZSBuYW1lPlxuICBXSEVSRSAkX190aW1lRmlsdGVyKHRpbWVfY29sdW1uKVxuICBPUkRFUiBCWSA8dGltZV9jb2x1bW4+IEFTQ1xuICBMSU1JVCAxMDBcbiAgYDtcblxuY2xhc3MgTXlzcWxBbm5vdGF0aW9uc1F1ZXJ5Q3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9hbm5vdGF0aW9ucy5lZGl0b3IuaHRtbCc7XG5cbiAgZGVjbGFyZSBhbm5vdGF0aW9uOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSkge1xuICAgIHRoaXMuYW5ub3RhdGlvbiA9ICRzY29wZS5jdHJsLmFubm90YXRpb247XG4gICAgdGhpcy5hbm5vdGF0aW9uLnJhd1F1ZXJ5ID0gdGhpcy5hbm5vdGF0aW9uLnJhd1F1ZXJ5IHx8IGRlZmF1bHRRdWVyeTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBNeXNxbERhdGFzb3VyY2UsXG4gIE15c3FsRGF0YXNvdXJjZSBhcyBEYXRhc291cmNlLFxuICBNeXNxbFF1ZXJ5Q3RybCBhcyBRdWVyeUN0cmwsXG4gIE15c3FsQ29uZmlnQ3RybCBhcyBDb25maWdDdHJsLFxuICBNeXNxbEFubm90YXRpb25zUXVlcnlDdHJsIGFzIEFubm90YXRpb25zUXVlcnlDdHJsLFxufTtcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luPE15c3FsRGF0YXNvdXJjZSwgTXlTUUxRdWVyeT4oTXlzcWxEYXRhc291cmNlKVxuICAuc2V0UXVlcnlDdHJsKE15c3FsUXVlcnlDdHJsKVxuICAuc2V0Q29uZmlnQ3RybChNeXNxbENvbmZpZ0N0cmwpXG4gIC5zZXRBbm5vdGF0aW9uUXVlcnlDdHJsKE15c3FsQW5ub3RhdGlvbnNRdWVyeUN0cmwpO1xuIiwiaW1wb3J0IHsgZmluZCwgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBTY29wZWRWYXJzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15U1FMUXVlcnlNb2RlbCB7XG4gIHRhcmdldDogYW55O1xuICB0ZW1wbGF0ZVNydjogYW55O1xuICBzY29wZWRWYXJzOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IGFueSwgdGVtcGxhdGVTcnY/OiBUZW1wbGF0ZVNydiwgc2NvcGVkVmFycz86IFNjb3BlZFZhcnMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnRlbXBsYXRlU3J2ID0gdGVtcGxhdGVTcnY7XG4gICAgdGhpcy5zY29wZWRWYXJzID0gc2NvcGVkVmFycztcblxuICAgIHRhcmdldC5mb3JtYXQgPSB0YXJnZXQuZm9ybWF0IHx8ICd0aW1lX3Nlcmllcyc7XG4gICAgdGFyZ2V0LnRpbWVDb2x1bW4gPSB0YXJnZXQudGltZUNvbHVtbiB8fCAndGltZSc7XG4gICAgdGFyZ2V0Lm1ldHJpY0NvbHVtbiA9IHRhcmdldC5tZXRyaWNDb2x1bW4gfHwgJ25vbmUnO1xuXG4gICAgdGFyZ2V0Lmdyb3VwID0gdGFyZ2V0Lmdyb3VwIHx8IFtdO1xuICAgIHRhcmdldC53aGVyZSA9IHRhcmdldC53aGVyZSB8fCBbeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiAnJF9fdGltZUZpbHRlcicsIHBhcmFtczogW10gfV07XG4gICAgdGFyZ2V0LnNlbGVjdCA9IHRhcmdldC5zZWxlY3QgfHwgW1t7IHR5cGU6ICdjb2x1bW4nLCBwYXJhbXM6IFsndmFsdWUnXSB9XV07XG5cbiAgICAvLyBoYW5kbGUgcHJlIHF1ZXJ5IGd1aSBwYW5lbHMgZ3JhY2VmdWxseVxuICAgIGlmICghKCdyYXdRdWVyeScgaW4gdGhpcy50YXJnZXQpKSB7XG4gICAgICBpZiAoJ3Jhd1NxbCcgaW4gdGFyZ2V0KSB7XG4gICAgICAgIC8vIHByZSBxdWVyeSBndWkgcGFuZWxcbiAgICAgICAgdGFyZ2V0LnJhd1F1ZXJ5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5ldyBwYW5lbFxuICAgICAgICB0YXJnZXQucmF3UXVlcnkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnaXZlIGludGVycG9sYXRlUXVlcnlTdHIgYWNjZXNzIHRvIHRoaXNcbiAgICB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIgPSB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBpZGVudGlmaWVyIHF1b3RpbmcgZnJvbSBpZGVudGlmaWVyIHRvIHVzZSBpbiBtZXRhZGF0YSBxdWVyaWVzXG4gIHVucXVvdGVJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWVbMF0gPT09ICdcIicgJiYgdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcIicpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMSwgdmFsdWUubGVuZ3RoIC0gMSkucmVwbGFjZSgvXCJcIi9nLCAnXCInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHF1b3RlSWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuICdcIicgKyB2YWx1ZS5yZXBsYWNlKC9cIi9nLCAnXCJcIicpICsgJ1wiJztcbiAgfVxuXG4gIHF1b3RlTGl0ZXJhbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFwiJ1wiICsgdmFsdWUucmVwbGFjZSgvJy9nLCBcIicnXCIpICsgXCInXCI7XG4gIH1cblxuICBlc2NhcGVMaXRlcmFsKHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC8nL2csIFwiJydcIik7XG4gIH1cblxuICBoYXNUaW1lR3JvdXAoKSB7XG4gICAgcmV0dXJuIGZpbmQodGhpcy50YXJnZXQuZ3JvdXAsIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ3RpbWUnKTtcbiAgfVxuXG4gIGhhc01ldHJpY0NvbHVtbigpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQubWV0cmljQ29sdW1uICE9PSAnbm9uZSc7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVF1ZXJ5U3RyKHZhbHVlOiBzdHJpbmcsIHZhcmlhYmxlOiB7IG11bHRpOiBhbnk7IGluY2x1ZGVBbGw6IGFueSB9LCBkZWZhdWx0Rm9ybWF0Rm46IGFueSkge1xuICAgIC8vIGlmIG5vIG11bHRpIG9yIGluY2x1ZGUgYWxsIGRvIG5vdCByZWdleEVzY2FwZVxuICAgIGlmICghdmFyaWFibGUubXVsdGkgJiYgIXZhcmlhYmxlLmluY2x1ZGVBbGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmVzY2FwZUxpdGVyYWwodmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdW90ZUxpdGVyYWwodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGVzY2FwZWRWYWx1ZXMgPSBtYXAodmFsdWUsIHRoaXMucXVvdGVMaXRlcmFsKTtcbiAgICByZXR1cm4gZXNjYXBlZFZhbHVlcy5qb2luKCcsJyk7XG4gIH1cblxuICByZW5kZXIoaW50ZXJwb2xhdGU/OiBib29sZWFuKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG5cbiAgICAvLyBuZXcgcXVlcnkgd2l0aCBubyB0YWJsZSBzZXQgeWV0XG4gICAgaWYgKCF0aGlzLnRhcmdldC5yYXdRdWVyeSAmJiAhKCd0YWJsZScgaW4gdGhpcy50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIHRhcmdldC5yYXdTcWwgPSB0aGlzLmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LnJhd1NxbCwgdGhpcy5zY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnJhd1NxbDtcbiAgICB9XG4gIH1cblxuICBoYXNVbml4RXBvY2hUaW1lY29sdW1uKCkge1xuICAgIHJldHVybiBbJ2ludCcsICdiaWdpbnQnLCAnZG91YmxlJ10uaW5kZXhPZih0aGlzLnRhcmdldC50aW1lQ29sdW1uVHlwZSkgPiAtMTtcbiAgfVxuXG4gIGJ1aWxkVGltZUNvbHVtbihhbGlhcyA9IHRydWUpIHtcbiAgICBjb25zdCB0aW1lR3JvdXAgPSB0aGlzLmhhc1RpbWVHcm91cCgpO1xuICAgIGxldCBxdWVyeTtcbiAgICBsZXQgbWFjcm8gPSAnJF9fdGltZUdyb3VwJztcblxuICAgIGlmICh0aW1lR3JvdXApIHtcbiAgICAgIGxldCBhcmdzO1xuICAgICAgaWYgKHRpbWVHcm91cC5wYXJhbXMubGVuZ3RoID4gMSAmJiB0aW1lR3JvdXAucGFyYW1zWzFdICE9PSAnbm9uZScpIHtcbiAgICAgICAgYXJncyA9IHRpbWVHcm91cC5wYXJhbXMuam9pbignLCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJncyA9IHRpbWVHcm91cC5wYXJhbXNbMF07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5oYXNVbml4RXBvY2hUaW1lY29sdW1uKCkpIHtcbiAgICAgICAgbWFjcm8gPSAnJF9fdW5peEVwb2NoR3JvdXAnO1xuICAgICAgfVxuICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgIG1hY3JvICs9ICdBbGlhcyc7XG4gICAgICB9XG4gICAgICBxdWVyeSA9IG1hY3JvICsgJygnICsgdGhpcy50YXJnZXQudGltZUNvbHVtbiArICcsJyArIGFyZ3MgKyAnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy50YXJnZXQudGltZUNvbHVtbjtcbiAgICAgIGlmIChhbGlhcykge1xuICAgICAgICBxdWVyeSArPSAnIEFTIFwidGltZVwiJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZE1ldHJpY0NvbHVtbigpIHtcbiAgICBpZiAodGhpcy5oYXNNZXRyaWNDb2x1bW4oKSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbiArICcgQVMgbWV0cmljJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBidWlsZFZhbHVlQ29sdW1ucygpIHtcbiAgICBsZXQgcXVlcnkgPSAnJztcbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiB0aGlzLnRhcmdldC5zZWxlY3QpIHtcbiAgICAgIHF1ZXJ5ICs9ICcsXFxuICAnICsgdGhpcy5idWlsZFZhbHVlQ29sdW1uKGNvbHVtbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRWYWx1ZUNvbHVtbihjb2x1bW46IGFueSkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuXG4gICAgY29uc3QgY29sdW1uTmFtZTogYW55ID0gZmluZChjb2x1bW4sIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2NvbHVtbicpO1xuICAgIHF1ZXJ5ID0gY29sdW1uTmFtZS5wYXJhbXNbMF07XG5cbiAgICBjb25zdCBhZ2dyZWdhdGU6IGFueSA9IGZpbmQoY29sdW1uLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICdhZ2dyZWdhdGUnKTtcblxuICAgIGlmIChhZ2dyZWdhdGUpIHtcbiAgICAgIGNvbnN0IGZ1bmMgPSBhZ2dyZWdhdGUucGFyYW1zWzBdO1xuICAgICAgcXVlcnkgPSBmdW5jICsgJygnICsgcXVlcnkgKyAnKSc7XG4gICAgfVxuXG4gICAgY29uc3QgYWxpYXM6IGFueSA9IGZpbmQoY29sdW1uLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICdhbGlhcycpO1xuICAgIGlmIChhbGlhcykge1xuICAgICAgcXVlcnkgKz0gJyBBUyAnICsgdGhpcy5xdW90ZUlkZW50aWZpZXIoYWxpYXMucGFyYW1zWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZFdoZXJlQ2xhdXNlKCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBtYXAodGhpcy50YXJnZXQud2hlcmUsICh0YWcsIGluZGV4KSA9PiB7XG4gICAgICBzd2l0Y2ggKHRhZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21hY3JvJzpcbiAgICAgICAgICByZXR1cm4gdGFnLm5hbWUgKyAnKCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJyknO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdleHByZXNzaW9uJzpcbiAgICAgICAgICByZXR1cm4gdGFnLnBhcmFtcy5qb2luKCcgJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29uZGl0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBxdWVyeSA9ICdcXG5XSEVSRVxcbiAgJyArIGNvbmRpdGlvbnMuam9pbignIEFORFxcbiAgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRHcm91cENsYXVzZSgpIHtcbiAgICBsZXQgcXVlcnkgPSAnJztcbiAgICBsZXQgZ3JvdXBTZWN0aW9uID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFyZ2V0Lmdyb3VwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0ID0gdGhpcy50YXJnZXQuZ3JvdXBbaV07XG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgZ3JvdXBTZWN0aW9uICs9ICcsICc7XG4gICAgICB9XG4gICAgICBpZiAocGFydC50eXBlID09PSAndGltZScpIHtcbiAgICAgICAgZ3JvdXBTZWN0aW9uICs9ICcxJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyb3VwU2VjdGlvbiArPSBwYXJ0LnBhcmFtc1swXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ3JvdXBTZWN0aW9uLmxlbmd0aCkge1xuICAgICAgcXVlcnkgPSAnXFxuR1JPVVAgQlkgJyArIGdyb3VwU2VjdGlvbjtcbiAgICAgIGlmICh0aGlzLmhhc01ldHJpY0NvbHVtbigpKSB7XG4gICAgICAgIHF1ZXJ5ICs9ICcsMic7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkUXVlcnkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJ1NFTEVDVCc7XG5cbiAgICBxdWVyeSArPSAnXFxuICAnICsgdGhpcy5idWlsZFRpbWVDb2x1bW4oKTtcbiAgICBpZiAodGhpcy5oYXNNZXRyaWNDb2x1bW4oKSkge1xuICAgICAgcXVlcnkgKz0gJyxcXG4gICcgKyB0aGlzLmJ1aWxkTWV0cmljQ29sdW1uKCk7XG4gICAgfVxuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRWYWx1ZUNvbHVtbnMoKTtcblxuICAgIHF1ZXJ5ICs9ICdcXG5GUk9NICcgKyB0aGlzLnRhcmdldC50YWJsZTtcblxuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRXaGVyZUNsYXVzZSgpO1xuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRHcm91cENsYXVzZSgpO1xuXG4gICAgcXVlcnkgKz0gJ1xcbk9SREVSIEJZICcgKyB0aGlzLmJ1aWxkVGltZUNvbHVtbihmYWxzZSk7XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNsb25lLCBmaWx0ZXIsIGZpbmQsIGZpbmRJbmRleCwgaW5kZXhPZiwgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5pbXBvcnQgeyBNeXNxbE1ldGFRdWVyeSB9IGZyb20gJy4vbWV0YV9xdWVyeSc7XG5pbXBvcnQgeyBRdWVyeUN0cmwgfSBmcm9tICdhcHAvcGx1Z2lucy9zZGsnO1xuaW1wb3J0IHsgU3FsUGFydCB9IGZyb20gJ2FwcC9hbmd1bGFyL2NvbXBvbmVudHMvc3FsX3BhcnQvc3FsX3BhcnQnO1xuaW1wb3J0IE15U1FMUXVlcnlNb2RlbCBmcm9tICcuL215c3FsX3F1ZXJ5X21vZGVsJztcbmltcG9ydCBzcWxQYXJ0IGZyb20gJy4vc3FsX3BhcnQnO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgUGFuZWxFdmVudHMsIFF1ZXJ5UmVzdWx0TWV0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgVmFyaWFibGVXaXRoTXVsdGlTdXBwb3J0IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3ZhcmlhYmxlcy90eXBlcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZXZlbnRzJztcblxuY29uc3QgZGVmYXVsdFF1ZXJ5ID0gYFNFTEVDVFxuICBVTklYX1RJTUVTVEFNUCg8dGltZV9jb2x1bW4+KSBhcyB0aW1lX3NlYyxcbiAgPHZhbHVlIGNvbHVtbj4gYXMgdmFsdWUsXG4gIDxzZXJpZXMgbmFtZSBjb2x1bW4+IGFzIG1ldHJpY1xuRlJPTSA8dGFibGUgbmFtZT5cbldIRVJFICRfX3RpbWVGaWx0ZXIodGltZV9jb2x1bW4pXG5PUkRFUiBCWSA8dGltZV9jb2x1bW4+IEFTQ1xuYDtcblxuZXhwb3J0IGNsYXNzIE15c3FsUXVlcnlDdHJsIGV4dGVuZHMgUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL3F1ZXJ5LmVkaXRvci5odG1sJztcblxuICBmb3JtYXRzOiBhbnlbXTtcbiAgbGFzdFF1ZXJ5RXJyb3I/OiBzdHJpbmc7XG4gIHNob3dIZWxwITogYm9vbGVhbjtcblxuICBxdWVyeU1vZGVsOiBNeVNRTFF1ZXJ5TW9kZWw7XG4gIG1ldGFCdWlsZGVyOiBNeXNxbE1ldGFRdWVyeTtcbiAgbGFzdFF1ZXJ5TWV0YT86IFF1ZXJ5UmVzdWx0TWV0YTtcbiAgdGFibGVTZWdtZW50OiBhbnk7XG4gIHdoZXJlQWRkOiBhbnk7XG4gIHRpbWVDb2x1bW5TZWdtZW50OiBhbnk7XG4gIG1ldHJpY0NvbHVtblNlZ21lbnQ6IGFueTtcbiAgc2VsZWN0TWVudTogYW55W10gPSBbXTtcbiAgc2VsZWN0UGFydHM6IFNxbFBhcnRbXVtdID0gW107XG4gIGdyb3VwUGFydHM6IFNxbFBhcnRbXSA9IFtdO1xuICB3aGVyZVBhcnRzOiBTcWxQYXJ0W10gPSBbXTtcbiAgZ3JvdXBBZGQ6IGFueTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICRzY29wZTogYW55LFxuICAgICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2LFxuICAgIHByaXZhdGUgdWlTZWdtZW50U3J2OiBhbnlcbiAgKSB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICB0aGlzLnF1ZXJ5TW9kZWwgPSBuZXcgTXlTUUxRdWVyeU1vZGVsKHRoaXMudGFyZ2V0LCB0ZW1wbGF0ZVNydiwgdGhpcy5wYW5lbC5zY29wZWRWYXJzKTtcbiAgICB0aGlzLm1ldGFCdWlsZGVyID0gbmV3IE15c3FsTWV0YVF1ZXJ5KHRoaXMudGFyZ2V0LCB0aGlzLnF1ZXJ5TW9kZWwpO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuXG4gICAgdGhpcy5mb3JtYXRzID0gW1xuICAgICAgeyB0ZXh0OiAnVGltZSBzZXJpZXMnLCB2YWx1ZTogJ3RpbWVfc2VyaWVzJyB9LFxuICAgICAgeyB0ZXh0OiAnVGFibGUnLCB2YWx1ZTogJ3RhYmxlJyB9LFxuICAgIF07XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0LnJhd1NxbCkge1xuICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyB3aGVuIGluIHRhYmxlIHBhbmVsXG4gICAgICBpZiAodGhpcy5wYW5lbEN0cmwucGFuZWwudHlwZSA9PT0gJ3RhYmxlJykge1xuICAgICAgICB0aGlzLnRhcmdldC5mb3JtYXQgPSAndGFibGUnO1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSAnU0VMRUNUIDEnO1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdRdWVyeSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSBkZWZhdWx0UXVlcnk7XG4gICAgICAgIHRoaXMuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5maW5kTWV0cmljVGFibGUoKSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRhYmxlID0gcmVzdWx0WzBdLnRleHQ7XG4gICAgICAgICAgICBsZXQgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGFibGUpO1xuICAgICAgICAgICAgdGhpcy50YWJsZVNlZ21lbnQuaHRtbCA9IHNlZ21lbnQuaHRtbDtcbiAgICAgICAgICAgIHRoaXMudGFibGVTZWdtZW50LnZhbHVlID0gc2VnbWVudC52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy50YXJnZXQudGltZUNvbHVtbiA9IHJlc3VsdFsxXS50ZXh0O1xuICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGltZUNvbHVtbik7XG4gICAgICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50Lmh0bWwgPSBzZWdtZW50Lmh0bWw7XG4gICAgICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50LnZhbHVlID0gc2VnbWVudC52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy50YXJnZXQudGltZUNvbHVtblR5cGUgPSAndGltZXN0YW1wJztcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlbGVjdCA9IFtbeyB0eXBlOiAnY29sdW1uJywgcGFyYW1zOiBbcmVzdWx0WzJdLnRleHRdIH1dXTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0LnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlU2VnbWVudCA9IHVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6ICdzZWxlY3QgdGFibGUnLCBmYWtlOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYmxlU2VnbWVudCA9IHVpU2VnbWVudFNydi5uZXdTZWdtZW50KHRoaXMudGFyZ2V0LnRhYmxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGltZUNvbHVtbik7XG4gICAgdGhpcy5tZXRyaWNDb2x1bW5TZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQubWV0cmljQ29sdW1uKTtcblxuICAgIHRoaXMuYnVpbGRTZWxlY3RNZW51KCk7XG4gICAgdGhpcy53aGVyZUFkZCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICB0aGlzLmdyb3VwQWRkID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xuXG4gICAgdGhpcy5wYW5lbEN0cmwuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgdGhpcy5vbkRhdGFSZWNlaXZlZC5iaW5kKHRoaXMpLCAkc2NvcGUpO1xuICAgIHRoaXMucGFuZWxDdHJsLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5kYXRhRXJyb3IsIHRoaXMub25EYXRhRXJyb3IuYmluZCh0aGlzKSwgJHNjb3BlKTtcbiAgfVxuXG4gIHVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKSB7XG4gICAgaWYgKCF0aGlzLnRhcmdldC5yYXdRdWVyeSkge1xuICAgICAgdGhpcy50YXJnZXQucmF3U3FsID0gdGhpcy5xdWVyeU1vZGVsLmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhbmVsQ3RybC5yZWZyZXNoKCk7XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0UGFydHMgPSBtYXAodGhpcy50YXJnZXQuc2VsZWN0LCAocGFydHM6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIG1hcChwYXJ0cywgc3FsUGFydC5jcmVhdGUpLmZpbHRlcigobikgPT4gbik7XG4gICAgfSk7XG4gICAgdGhpcy53aGVyZVBhcnRzID0gbWFwKHRoaXMudGFyZ2V0LndoZXJlLCBzcWxQYXJ0LmNyZWF0ZSkuZmlsdGVyKChuKSA9PiBuKTtcbiAgICB0aGlzLmdyb3VwUGFydHMgPSBtYXAodGhpcy50YXJnZXQuZ3JvdXAsIHNxbFBhcnQuY3JlYXRlKS5maWx0ZXIoKG4pID0+IG4pO1xuICB9XG5cbiAgdXBkYXRlUGVyc2lzdGVkUGFydHMoKSB7XG4gICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gbWFwKHRoaXMuc2VsZWN0UGFydHMsIChzZWxlY3RQYXJ0cykgPT4ge1xuICAgICAgcmV0dXJuIG1hcChzZWxlY3RQYXJ0cywgKHBhcnQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4geyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBkYXRhdHlwZTogcGFydC5kYXRhdHlwZSwgcGFyYW1zOiBwYXJ0LnBhcmFtcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXQud2hlcmUgPSBtYXAodGhpcy53aGVyZVBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBkYXRhdHlwZTogcGFydC5kYXRhdHlwZSwgbmFtZTogcGFydC5uYW1lLCBwYXJhbXM6IHBhcnQucGFyYW1zIH07XG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXQuZ3JvdXAgPSBtYXAodGhpcy5ncm91cFBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBkYXRhdHlwZTogcGFydC5kYXRhdHlwZSwgcGFyYW1zOiBwYXJ0LnBhcmFtcyB9O1xuICAgIH0pO1xuICB9XG5cbiAgYnVpbGRTZWxlY3RNZW51KCkge1xuICAgIGNvbnN0IGFnZ3JlZ2F0ZXMgPSB7XG4gICAgICB0ZXh0OiAnQWdncmVnYXRlIEZ1bmN0aW9ucycsXG4gICAgICB2YWx1ZTogJ2FnZ3JlZ2F0ZScsXG4gICAgICBzdWJtZW51OiBbXG4gICAgICAgIHsgdGV4dDogJ0F2ZXJhZ2UnLCB2YWx1ZTogJ2F2ZycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ291bnQnLCB2YWx1ZTogJ2NvdW50JyB9LFxuICAgICAgICB7IHRleHQ6ICdNYXhpbXVtJywgdmFsdWU6ICdtYXgnIH0sXG4gICAgICAgIHsgdGV4dDogJ01pbmltdW0nLCB2YWx1ZTogJ21pbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnU3VtJywgdmFsdWU6ICdzdW0nIH0sXG4gICAgICAgIHsgdGV4dDogJ1N0YW5kYXJkIGRldmlhdGlvbicsIHZhbHVlOiAnc3RkZGV2JyB9LFxuICAgICAgICB7IHRleHQ6ICdWYXJpYW5jZScsIHZhbHVlOiAndmFyaWFuY2UnIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICB0aGlzLnNlbGVjdE1lbnUucHVzaChhZ2dyZWdhdGVzKTtcbiAgICB0aGlzLnNlbGVjdE1lbnUucHVzaCh7IHRleHQ6ICdBbGlhcycsIHZhbHVlOiAnYWxpYXMnIH0pO1xuICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKHsgdGV4dDogJ0NvbHVtbicsIHZhbHVlOiAnY29sdW1uJyB9KTtcbiAgfVxuXG4gIHRvZ2dsZUVkaXRvck1vZGUoKSB7XG4gICAgaWYgKHRoaXMudGFyZ2V0LnJhd1F1ZXJ5KSB7XG4gICAgICBhcHBFdmVudHMucHVibGlzaChcbiAgICAgICAgbmV3IFNob3dDb25maXJtTW9kYWxFdmVudCh7XG4gICAgICAgICAgdGl0bGU6ICdXYXJuaW5nJyxcbiAgICAgICAgICB0ZXh0MjogJ1N3aXRjaGluZyB0byBxdWVyeSBidWlsZGVyIG1heSBvdmVyd3JpdGUgeW91ciByYXcgU1FMLicsXG4gICAgICAgICAgaWNvbjogJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJyxcbiAgICAgICAgICB5ZXNUZXh0OiAnU3dpdGNoJyxcbiAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFRoaXMgY291bGQgYmUgY2FsbGVkIGZyb20gUmVhY3QsIHNvIHdyYXAgaW4gJGV2YWxBc3luYy5cbiAgICAgICAgICAgIC8vIFdpbGwgdGhlbiBlaXRoZXIgcnVuIGFzIHBhcnQgb2YgdGhlIGN1cnJlbnQgZGlnZXN0IGN5Y2xlIG9yIHRyaWdnZXIgYSBuZXcgb25lLlxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuJGV2YWxBc3luYygoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJhd1F1ZXJ5ID0gIXRoaXMudGFyZ2V0LnJhd1F1ZXJ5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgY291bGQgYmUgY2FsbGVkIGZyb20gUmVhY3QsIHNvIHdyYXAgaW4gJGV2YWxBc3luYy5cbiAgICAgIC8vIFdpbGwgdGhlbiBlaXRoZXIgcnVuIGFzIHBhcnQgb2YgdGhlIGN1cnJlbnQgZGlnZXN0IGN5Y2xlIG9yIHRyaWdnZXIgYSBuZXcgb25lLlxuICAgICAgdGhpcy4kc2NvcGUuJGV2YWxBc3luYygoKSA9PiB7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJhd1F1ZXJ5ID0gIXRoaXMudGFyZ2V0LnJhd1F1ZXJ5O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRQbHVzQnV0dG9uKGJ1dHRvbjogeyBodG1sOiBhbnk7IHZhbHVlOiBhbnkgfSkge1xuICAgIGNvbnN0IHBsdXNCdXR0b24gPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XG4gICAgYnV0dG9uLmh0bWwgPSBwbHVzQnV0dG9uLmh0bWw7XG4gICAgYnV0dG9uLnZhbHVlID0gcGx1c0J1dHRvbi52YWx1ZTtcbiAgfVxuXG4gIGdldFRhYmxlU2VnbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkVGFibGVRdWVyeSgpKVxuICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICB0YWJsZUNoYW5nZWQoKSB7XG4gICAgdGhpcy50YXJnZXQudGFibGUgPSB0aGlzLnRhYmxlU2VnbWVudC52YWx1ZTtcbiAgICB0aGlzLnRhcmdldC53aGVyZSA9IFtdO1xuICAgIHRoaXMudGFyZ2V0Lmdyb3VwID0gW107XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG5cbiAgICBjb25zdCBzZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCgnbm9uZScpO1xuICAgIHRoaXMubWV0cmljQ29sdW1uU2VnbWVudC5odG1sID0gc2VnbWVudC5odG1sO1xuICAgIHRoaXMubWV0cmljQ29sdW1uU2VnbWVudC52YWx1ZSA9IHNlZ21lbnQudmFsdWU7XG4gICAgdGhpcy50YXJnZXQubWV0cmljQ29sdW1uID0gJ25vbmUnO1xuXG4gICAgY29uc3QgdGFzazEgPSB0aGlzLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgndGltZScpKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgdGltZSBjb2x1bW4gaXMgc3RpbGwgdmFsaWRcbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCAmJiAhZmluZChyZXN1bHQsIChyOiBhbnkpID0+IHIudGV4dCA9PT0gdGhpcy50YXJnZXQudGltZUNvbHVtbikpIHtcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQocmVzdWx0WzBdLnRleHQpO1xuICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50Lmh0bWwgPSBzZWdtZW50Lmh0bWw7XG4gICAgICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQudmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudGltZUNvbHVtbkNoYW5nZWQoZmFsc2UpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRhc2syID0gdGhpcy5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ3ZhbHVlJykpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gW1t7IHR5cGU6ICdjb2x1bW4nLCBwYXJhbXM6IFtyZXN1bHRbMF0udGV4dF0gfV1dO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFByb21pc2UuYWxsKFt0YXNrMSwgdGFzazJdKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGltZUNvbHVtblNlZ21lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCd0aW1lJykpXG4gICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHRpbWVDb2x1bW5DaGFuZ2VkKHJlZnJlc2g/OiBib29sZWFuKSB7XG4gICAgdGhpcy50YXJnZXQudGltZUNvbHVtbiA9IHRoaXMudGltZUNvbHVtblNlZ21lbnQudmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkRGF0YXR5cGVRdWVyeSh0aGlzLnRhcmdldC50aW1lQ29sdW1uKSlcbiAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmICh0aGlzLnRhcmdldC50aW1lQ29sdW1uVHlwZSAhPT0gcmVzdWx0WzBdLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlID0gcmVzdWx0WzBdLnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBwYXJ0TW9kZWw7XG4gICAgICAgICAgaWYgKHRoaXMucXVlcnlNb2RlbC5oYXNVbml4RXBvY2hUaW1lY29sdW1uKCkpIHtcbiAgICAgICAgICAgIHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ21hY3JvJywgbmFtZTogJyRfX3VuaXhFcG9jaEZpbHRlcicsIHBhcmFtczogW10gfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ21hY3JvJywgbmFtZTogJyRfX3RpbWVGaWx0ZXInLCBwYXJhbXM6IFtdIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLndoZXJlUGFydHMubGVuZ3RoID49IDEgJiYgdGhpcy53aGVyZVBhcnRzWzBdLmRlZi50eXBlID09PSAnbWFjcm8nKSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbWFjcm9cbiAgICAgICAgICAgIHRoaXMud2hlcmVQYXJ0c1swXSA9IHBhcnRNb2RlbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53aGVyZVBhcnRzLnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgaWYgKHJlZnJlc2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0TWV0cmljQ29sdW1uU2VnbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ21ldHJpYycpKVxuICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHsgYWRkTm9uZTogdHJ1ZSB9KSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICBtZXRyaWNDb2x1bW5DaGFuZ2VkKCkge1xuICAgIHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbiA9IHRoaXMubWV0cmljQ29sdW1uU2VnbWVudC52YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgfVxuXG4gIG9uRGF0YVJlY2VpdmVkKGRhdGFMaXN0OiBhbnkpIHtcbiAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFzdFF1ZXJ5TWV0YSA9IGRhdGFMaXN0WzBdPy5tZXRhO1xuICB9XG5cbiAgb25EYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICBpZiAoZXJyLmRhdGEgJiYgZXJyLmRhdGEucmVzdWx0cykge1xuICAgICAgY29uc3QgcXVlcnlSZXMgPSBlcnIuZGF0YS5yZXN1bHRzW3RoaXMudGFyZ2V0LnJlZklkXTtcbiAgICAgIGlmIChxdWVyeVJlcykge1xuICAgICAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gcXVlcnlSZXMuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJhbnNmb3JtVG9TZWdtZW50cyhjb25maWc6IGFueSkge1xuICAgIHJldHVybiAocmVzdWx0czogYW55KSA9PiB7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IG1hcChyZXN1bHRzLCAoc2VnbWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7XG4gICAgICAgICAgdmFsdWU6IHNlZ21lbnQudGV4dCxcbiAgICAgICAgICBleHBhbmRhYmxlOiBzZWdtZW50LmV4cGFuZGFibGUsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjb25maWcuYWRkVGVtcGxhdGVWYXJzKSB7XG4gICAgICAgIGZvciAoY29uc3QgdmFyaWFibGUgb2YgdGhpcy50ZW1wbGF0ZVNydi5nZXRWYXJpYWJsZXMoKSkge1xuICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICB2YWx1ZSA9ICckJyArIHZhcmlhYmxlLm5hbWU7XG4gICAgICAgICAgaWYgKGNvbmZpZy50ZW1wbGF0ZVF1b3RlciAmJiAodmFyaWFibGUgYXMgdW5rbm93biBhcyBWYXJpYWJsZVdpdGhNdWx0aVN1cHBvcnQpLm11bHRpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBjb25maWcudGVtcGxhdGVRdW90ZXIodmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlZ21lbnRzLnVuc2hpZnQoXG4gICAgICAgICAgICB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuYWRkTm9uZSkge1xuICAgICAgICBzZWdtZW50cy51bnNoaWZ0KHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAndGVtcGxhdGUnLCB2YWx1ZTogJ25vbmUnLCBleHBhbmRhYmxlOiB0cnVlIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlZ21lbnRzO1xuICAgIH07XG4gIH1cblxuICBmaW5kQWdncmVnYXRlSW5kZXgoc2VsZWN0UGFydHM6IGFueSkge1xuICAgIHJldHVybiBmaW5kSW5kZXgoc2VsZWN0UGFydHMsIChwOiBhbnkpID0+IHAuZGVmLnR5cGUgPT09ICdhZ2dyZWdhdGUnIHx8IHAuZGVmLnR5cGUgPT09ICdwZXJjZW50aWxlJyk7XG4gIH1cblxuICBmaW5kV2luZG93SW5kZXgoc2VsZWN0UGFydHM6IGFueSkge1xuICAgIHJldHVybiBmaW5kSW5kZXgoc2VsZWN0UGFydHMsIChwOiBhbnkpID0+IHAuZGVmLnR5cGUgPT09ICd3aW5kb3cnIHx8IHAuZGVmLnR5cGUgPT09ICdtb3Zpbmdfd2luZG93Jyk7XG4gIH1cblxuICBhZGRTZWxlY3RQYXJ0KHNlbGVjdFBhcnRzOiBhbnlbXSwgaXRlbTogeyB2YWx1ZTogYW55IH0sIHN1Ykl0ZW06IHsgdHlwZTogYW55OyB2YWx1ZTogYW55IH0pIHtcbiAgICBsZXQgcGFydFR5cGUgPSBpdGVtLnZhbHVlO1xuICAgIGlmIChzdWJJdGVtICYmIHN1Ykl0ZW0udHlwZSkge1xuICAgICAgcGFydFR5cGUgPSBzdWJJdGVtLnR5cGU7XG4gICAgfVxuICAgIGxldCBwYXJ0TW9kZWwgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6IHBhcnRUeXBlIH0pO1xuICAgIGlmIChzdWJJdGVtKSB7XG4gICAgICBwYXJ0TW9kZWwucGFyYW1zWzBdID0gc3ViSXRlbS52YWx1ZTtcbiAgICB9XG4gICAgbGV0IGFkZEFsaWFzID0gZmFsc2U7XG5cbiAgICBzd2l0Y2ggKHBhcnRUeXBlKSB7XG4gICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICBjb25zdCBwYXJ0cyA9IG1hcChzZWxlY3RQYXJ0cywgKHBhcnQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6IHBhcnQuZGVmLnR5cGUsIHBhcmFtczogY2xvbmUocGFydC5wYXJhbXMpIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RQYXJ0cy5wdXNoKHBhcnRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwZXJjZW50aWxlJzpcbiAgICAgIGNhc2UgJ2FnZ3JlZ2F0ZSc6XG4gICAgICAgIC8vIGFkZCBncm91cCBieSBpZiBubyBncm91cCBieSB5ZXRcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0Lmdyb3VwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuYWRkR3JvdXAoJ3RpbWUnLCAnJF9faW50ZXJ2YWwnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhZ2dJbmRleCA9IHRoaXMuZmluZEFnZ3JlZ2F0ZUluZGV4KHNlbGVjdFBhcnRzKTtcbiAgICAgICAgaWYgKGFnZ0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgIC8vIHJlcGxhY2UgY3VycmVudCBhZ2dyZWdhdGlvblxuICAgICAgICAgIHNlbGVjdFBhcnRzW2FnZ0luZGV4XSA9IHBhcnRNb2RlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoMSwgMCwgcGFydE1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZpbmQoc2VsZWN0UGFydHMsIChwOiBhbnkpID0+IHAuZGVmLnR5cGUgPT09ICdhbGlhcycpKSB7XG4gICAgICAgICAgYWRkQWxpYXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW92aW5nX3dpbmRvdyc6XG4gICAgICBjYXNlICd3aW5kb3cnOlxuICAgICAgICBjb25zdCB3aW5kb3dJbmRleCA9IHRoaXMuZmluZFdpbmRvd0luZGV4KHNlbGVjdFBhcnRzKTtcbiAgICAgICAgaWYgKHdpbmRvd0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgIC8vIHJlcGxhY2UgY3VycmVudCB3aW5kb3cgZnVuY3Rpb25cbiAgICAgICAgICBzZWxlY3RQYXJ0c1t3aW5kb3dJbmRleF0gPSBwYXJ0TW9kZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYWdnSW5kZXggPSB0aGlzLmZpbmRBZ2dyZWdhdGVJbmRleChzZWxlY3RQYXJ0cyk7XG4gICAgICAgICAgaWYgKGFnZ0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKGFnZ0luZGV4ICsgMSwgMCwgcGFydE1vZGVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKDEsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZmluZChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ2FsaWFzJykpIHtcbiAgICAgICAgICBhZGRBbGlhcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhbGlhcyc6XG4gICAgICAgIGFkZEFsaWFzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGFkZEFsaWFzKSB7XG4gICAgICAvLyBzZXQgaW5pdGlhbCBhbGlhcyBuYW1lIHRvIGNvbHVtbiBuYW1lXG4gICAgICBwYXJ0TW9kZWwgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdhbGlhcycsIHBhcmFtczogW3NlbGVjdFBhcnRzWzBdLnBhcmFtc1swXS5yZXBsYWNlKC9cIi9nLCAnJyldIH0pO1xuICAgICAgaWYgKHNlbGVjdFBhcnRzW3NlbGVjdFBhcnRzLmxlbmd0aCAtIDFdLmRlZi50eXBlID09PSAnYWxpYXMnKSB7XG4gICAgICAgIHNlbGVjdFBhcnRzW3NlbGVjdFBhcnRzLmxlbmd0aCAtIDFdID0gcGFydE1vZGVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0UGFydHMucHVzaChwYXJ0TW9kZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdFBhcnQoc2VsZWN0UGFydHM6IGFueSwgcGFydDogeyBkZWY6IHsgdHlwZTogc3RyaW5nIH0gfSkge1xuICAgIGlmIChwYXJ0LmRlZi50eXBlID09PSAnY29sdW1uJykge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBwYXJ0cyBvZiBjb2x1bW4gdW5sZXNzIGl0cyBsYXN0IGNvbHVtblxuICAgICAgaWYgKHRoaXMuc2VsZWN0UGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBtb2RlbHNJbmRleCA9IGluZGV4T2YodGhpcy5zZWxlY3RQYXJ0cywgc2VsZWN0UGFydHMpO1xuICAgICAgICB0aGlzLnNlbGVjdFBhcnRzLnNwbGljZShtb2RlbHNJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnRJbmRleCA9IGluZGV4T2Yoc2VsZWN0UGFydHMsIHBhcnQpO1xuICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKHBhcnRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0UGFydEV2ZW50KHNlbGVjdFBhcnRzOiBhbnksIHBhcnQ6IHsgZGVmOiBhbnkgfSwgZXZ0OiB7IG5hbWU6IGFueSB9KSB7XG4gICAgc3dpdGNoIChldnQubmFtZSkge1xuICAgICAgY2FzZSAnZ2V0LXBhcmFtLW9wdGlvbnMnOiB7XG4gICAgICAgIHN3aXRjaCAocGFydC5kZWYudHlwZSkge1xuICAgICAgICAgIC8vIGNhc2UgJ2FnZ3JlZ2F0ZSc6XG4gICAgICAgICAgLy8gICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAgICAgLy8gICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZEFnZ3JlZ2F0ZVF1ZXJ5KCkpXG4gICAgICAgICAgLy8gICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAgICAgLy8gICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgICAgICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgJ3BhcnQtcGFyYW0tY2hhbmdlZCc6IHtcbiAgICAgICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdhY3Rpb24nOiB7XG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0UGFydChzZWxlY3RQYXJ0cywgcGFydCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dldC1wYXJ0LWFjdGlvbnMnOiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW3sgdGV4dDogJ1JlbW92ZScsIHZhbHVlOiAncmVtb3ZlLXBhcnQnIH1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVHcm91cFBhcnRFdmVudChwYXJ0OiBhbnksIGluZGV4OiBhbnksIGV2dDogeyBuYW1lOiBhbnkgfSkge1xuICAgIHN3aXRjaCAoZXZ0Lm5hbWUpIHtcbiAgICAgIGNhc2UgJ2dldC1wYXJhbS1vcHRpb25zJzoge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoKSlcbiAgICAgICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgICBjYXNlICdwYXJ0LXBhcmFtLWNoYW5nZWQnOiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnYWN0aW9uJzoge1xuICAgICAgICB0aGlzLnJlbW92ZUdyb3VwKHBhcnQsIGluZGV4KTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZ2V0LXBhcnQtYWN0aW9ucyc6IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbeyB0ZXh0OiAnUmVtb3ZlJywgdmFsdWU6ICdyZW1vdmUtcGFydCcgfV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEdyb3VwKHBhcnRUeXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBsZXQgcGFyYW1zID0gW3ZhbHVlXTtcbiAgICBpZiAocGFydFR5cGUgPT09ICd0aW1lJykge1xuICAgICAgcGFyYW1zID0gWyckX19pbnRlcnZhbCcsICdub25lJ107XG4gICAgfVxuICAgIGNvbnN0IHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogcGFydFR5cGUsIHBhcmFtczogcGFyYW1zIH0pO1xuXG4gICAgaWYgKHBhcnRUeXBlID09PSAndGltZScpIHtcbiAgICAgIC8vIHB1dCB0aW1lR3JvdXAgYXQgc3RhcnRcbiAgICAgIHRoaXMuZ3JvdXBQYXJ0cy5zcGxpY2UoMCwgMCwgcGFydE1vZGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncm91cFBhcnRzLnB1c2gocGFydE1vZGVsKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgYWdncmVnYXRlcyB3aGVuIGFkZGluZyBncm91cCBieVxuICAgIGZvciAoY29uc3Qgc2VsZWN0UGFydHMgb2YgdGhpcy5zZWxlY3RQYXJ0cykge1xuICAgICAgaWYgKCFzZWxlY3RQYXJ0cy5zb21lKChwYXJ0KSA9PiBwYXJ0LmRlZi50eXBlID09PSAnYWdncmVnYXRlJykpIHtcbiAgICAgICAgY29uc3QgYWdncmVnYXRlID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnYWdncmVnYXRlJywgcGFyYW1zOiBbJ2F2ZyddIH0pO1xuICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoMSwgMCwgYWdncmVnYXRlKTtcbiAgICAgICAgaWYgKCFzZWxlY3RQYXJ0cy5zb21lKChwYXJ0KSA9PiBwYXJ0LmRlZi50eXBlID09PSAnYWxpYXMnKSkge1xuICAgICAgICAgIGNvbnN0IGFsaWFzID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnYWxpYXMnLCBwYXJhbXM6IFtzZWxlY3RQYXJ0c1swXS5wYXJ0LnBhcmFtc1swXV0gfSk7XG4gICAgICAgICAgc2VsZWN0UGFydHMucHVzaChhbGlhcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gIH1cblxuICByZW1vdmVHcm91cChwYXJ0OiB7IGRlZjogeyB0eXBlOiBzdHJpbmcgfSB9LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgLy8gcmVtb3ZlIGFnZ3JlZ2F0aW9uc1xuICAgICAgdGhpcy5zZWxlY3RQYXJ0cyA9IG1hcCh0aGlzLnNlbGVjdFBhcnRzLCAoczogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBmaWx0ZXIocywgKHBhcnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChwYXJ0LmRlZi50eXBlID09PSAnYWdncmVnYXRlJyB8fCBwYXJ0LmRlZi50eXBlID09PSAncGVyY2VudGlsZScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5ncm91cFBhcnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICB9XG5cbiAgaGFuZGxlV2hlcmVQYXJ0RXZlbnQod2hlcmVQYXJ0czogYW55LCBwYXJ0OiBhbnksIGV2dDogYW55LCBpbmRleDogYW55KSB7XG4gICAgc3dpdGNoIChldnQubmFtZSkge1xuICAgICAgY2FzZSAnZ2V0LXBhcmFtLW9wdGlvbnMnOiB7XG4gICAgICAgIHN3aXRjaCAoZXZ0LnBhcmFtLm5hbWUpIHtcbiAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgICAgICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoKSlcbiAgICAgICAgICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICBpZiAoWydpbnQnLCAnYmlnaW50JywgJ2RvdWJsZScsICdkYXRldGltZSddLmluZGV4T2YocGFydC5kYXRhdHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgICAvLyBkb24ndCBkbyB2YWx1ZSBsb29rdXBzIGZvciBudW1lcmljYWwgZmllbGRzXG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZFZhbHVlUXVlcnkocGFydC5wYXJhbXNbMF0pKVxuICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVGVtcGxhdGVWYXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVF1b3RlcjogKHY6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHYpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdvcCc6XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudWlTZWdtZW50U3J2Lm5ld09wZXJhdG9ycyh0aGlzLm1ldGFCdWlsZGVyLmdldE9wZXJhdG9ycyhwYXJ0LmRhdGF0eXBlKSkpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSAncGFydC1wYXJhbS1jaGFuZ2VkJzoge1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIHRoaXMuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZERhdGF0eXBlUXVlcnkocGFydC5wYXJhbXNbMF0pKS50aGVuKChkOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBhcnQuZGF0YXR5cGUgPSBkWzBdLnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnYWN0aW9uJzoge1xuICAgICAgICAvLyByZW1vdmUgZWxlbWVudFxuICAgICAgICB3aGVyZVBhcnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZ2V0LXBhcnQtYWN0aW9ucyc6IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbeyB0ZXh0OiAnUmVtb3ZlJywgdmFsdWU6ICdyZW1vdmUtcGFydCcgfV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFdoZXJlT3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgaWYgKHRoaXMucXVlcnlNb2RlbC5oYXNVbml4RXBvY2hUaW1lY29sdW1uKCkpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ21hY3JvJywgdmFsdWU6ICckX191bml4RXBvY2hGaWx0ZXInIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAnbWFjcm8nLCB2YWx1ZTogJyRfX3RpbWVGaWx0ZXInIH0pKTtcbiAgICB9XG4gICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAnZXhwcmVzc2lvbicsIHZhbHVlOiAnRXhwcmVzc2lvbicgfSkpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUob3B0aW9ucyk7XG4gIH1cblxuICBhZGRXaGVyZUFjdGlvbihwYXJ0OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBzd2l0Y2ggKHRoaXMud2hlcmVBZGQudHlwZSkge1xuICAgICAgY2FzZSAnbWFjcm8nOiB7XG4gICAgICAgIGNvbnN0IHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ21hY3JvJywgbmFtZTogdGhpcy53aGVyZUFkZC52YWx1ZSwgcGFyYW1zOiBbXSB9KTtcbiAgICAgICAgaWYgKHRoaXMud2hlcmVQYXJ0cy5sZW5ndGggPj0gMSAmJiB0aGlzLndoZXJlUGFydHNbMF0uZGVmLnR5cGUgPT09ICdtYWNybycpIHtcbiAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbWFjcm9cbiAgICAgICAgICB0aGlzLndoZXJlUGFydHNbMF0gPSBwYXJ0TW9kZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy53aGVyZVBhcnRzLnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aGlzLndoZXJlUGFydHMucHVzaChzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdleHByZXNzaW9uJywgcGFyYW1zOiBbJ3ZhbHVlJywgJz0nLCAndmFsdWUnXSB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgIHRoaXMucmVzZXRQbHVzQnV0dG9uKHRoaXMud2hlcmVBZGQpO1xuICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0R3JvdXBPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCdncm91cCcpKVxuICAgICAgLnRoZW4oKHRhZ3M6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgICAgIGlmICghdGhpcy5xdWVyeU1vZGVsLmhhc1RpbWVHcm91cCgpKSB7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAndGltZScsIHZhbHVlOiAndGltZSgkX19pbnRlcnZhbCxub25lKScgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICdjb2x1bW4nLCB2YWx1ZTogdGFnLnRleHQgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRHcm91cEFjdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuZ3JvdXBBZGQudmFsdWUpIHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhpcy5hZGRHcm91cCh0aGlzLmdyb3VwQWRkLnR5cGUsIHRoaXMuZ3JvdXBBZGQudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucmVzZXRQbHVzQnV0dG9uKHRoaXMuZ3JvdXBBZGQpO1xuICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICB9XG5cbiAgaGFuZGxlUXVlcnlFcnJvcihlcnI6IGFueSk6IGFueVtdIHtcbiAgICB0aGlzLmVycm9yID0gZXJyLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBpc3N1ZSBtZXRyaWMgcXVlcnknO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQW5ub3RhdGlvbkV2ZW50LCBEYXRhRnJhbWUsIE1ldHJpY0ZpbmRWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQmFja2VuZERhdGFTb3VyY2VSZXNwb25zZSwgRmV0Y2hSZXNwb25zZSwgdG9EYXRhUXVlcnlSZXNwb25zZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZVBhcnNlciB7XG4gIHRyYW5zZm9ybU1ldHJpY0ZpbmRSZXNwb25zZShyYXc6IEZldGNoUmVzcG9uc2U8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4pOiBNZXRyaWNGaW5kVmFsdWVbXSB7XG4gICAgY29uc3QgZnJhbWVzID0gdG9EYXRhUXVlcnlSZXNwb25zZShyYXcpLmRhdGEgYXMgRGF0YUZyYW1lW107XG5cbiAgICBpZiAoIWZyYW1lcyB8fCAhZnJhbWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGZyYW1lID0gZnJhbWVzWzBdO1xuXG4gICAgY29uc3QgdmFsdWVzOiBNZXRyaWNGaW5kVmFsdWVbXSA9IFtdO1xuICAgIGNvbnN0IHRleHRGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICdfX3RleHQnKTtcbiAgICBjb25zdCB2YWx1ZUZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ19fdmFsdWUnKTtcblxuICAgIGlmICh0ZXh0RmllbGQgJiYgdmFsdWVGaWVsZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0RmllbGQudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKHsgdGV4dDogJycgKyB0ZXh0RmllbGQudmFsdWVzLmdldChpKSwgdmFsdWU6ICcnICsgdmFsdWVGaWVsZC52YWx1ZXMuZ2V0KGkpIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZXMucHVzaChcbiAgICAgICAgLi4uZnJhbWUuZmllbGRzXG4gICAgICAgICAgLmZsYXRNYXAoKGYpID0+IGYudmFsdWVzLnRvQXJyYXkoKSlcbiAgICAgICAgICAubWFwKCh2KSA9PiAoe1xuICAgICAgICAgICAgdGV4dDogdixcbiAgICAgICAgICB9KSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldCh2YWx1ZXMubWFwKCh2KSA9PiB2LnRleHQpKSkubWFwKCh0ZXh0KSA9PiAoe1xuICAgICAgdGV4dCxcbiAgICAgIHZhbHVlOiB2YWx1ZXMuZmluZCgodikgPT4gdi50ZXh0ID09PSB0ZXh0KT8udmFsdWUsXG4gICAgfSkpO1xuICB9XG5cbiAgYXN5bmMgdHJhbnNmb3JtQW5ub3RhdGlvblJlc3BvbnNlKG9wdGlvbnM6IGFueSwgZGF0YTogQmFja2VuZERhdGFTb3VyY2VSZXNwb25zZSk6IFByb21pc2U8QW5ub3RhdGlvbkV2ZW50W10+IHtcbiAgICBjb25zdCBmcmFtZXMgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKHsgZGF0YTogZGF0YSB9KS5kYXRhIGFzIERhdGFGcmFtZVtdO1xuICAgIGlmICghZnJhbWVzIHx8ICFmcmFtZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGZyYW1lID0gZnJhbWVzWzBdO1xuICAgIGNvbnN0IHRpbWVGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0aW1lJyB8fCBmLm5hbWUgPT09ICd0aW1lX3NlYycpO1xuXG4gICAgaWYgKCF0aW1lRmllbGQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBtYW5kYXRvcnkgdGltZSBjb2x1bW4gKHdpdGggdGltZSBjb2x1bW4gYWxpYXMpIGluIGFubm90YXRpb24gcXVlcnknKTtcbiAgICB9XG5cbiAgICBpZiAoZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpdGxlJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRpdGxlIGNvbHVtbiBmb3IgYW5ub3RhdGlvbnMgaXMgZGVwcmVjYXRlZCwgbm93IG9ubHkgYSBjb2x1bW4gbmFtZWQgdGV4dCBpcyByZXR1cm5lZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbWVFbmRGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0aW1lZW5kJyk7XG4gICAgY29uc3QgdGV4dEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RleHQnKTtcbiAgICBjb25zdCB0YWdzRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGFncycpO1xuXG4gICAgY29uc3QgbGlzdDogQW5ub3RhdGlvbkV2ZW50W10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0aW1lRW5kID0gdGltZUVuZEZpZWxkICYmIHRpbWVFbmRGaWVsZC52YWx1ZXMuZ2V0KGkpID8gTWF0aC5mbG9vcih0aW1lRW5kRmllbGQudmFsdWVzLmdldChpKSkgOiB1bmRlZmluZWQ7XG4gICAgICBsaXN0LnB1c2goe1xuICAgICAgICBhbm5vdGF0aW9uOiBvcHRpb25zLmFubm90YXRpb24sXG4gICAgICAgIHRpbWU6IE1hdGguZmxvb3IodGltZUZpZWxkLnZhbHVlcy5nZXQoaSkpLFxuICAgICAgICB0aW1lRW5kLFxuICAgICAgICB0ZXh0OiB0ZXh0RmllbGQgJiYgdGV4dEZpZWxkLnZhbHVlcy5nZXQoaSkgPyB0ZXh0RmllbGQudmFsdWVzLmdldChpKSA6ICcnLFxuICAgICAgICB0YWdzOlxuICAgICAgICAgIHRhZ3NGaWVsZCAmJiB0YWdzRmllbGQudmFsdWVzLmdldChpKVxuICAgICAgICAgICAgPyB0YWdzRmllbGQudmFsdWVzXG4gICAgICAgICAgICAgICAgLmdldChpKVxuICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAuc3BsaXQoL1xccyosXFxzKi8pXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNxbFBhcnREZWYsIFNxbFBhcnQgfSBmcm9tICdhcHAvYW5ndWxhci9jb21wb25lbnRzL3NxbF9wYXJ0L3NxbF9wYXJ0JztcblxuY29uc3QgaW5kZXg6IGFueVtdID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcnQocGFydDogYW55KTogYW55IHtcbiAgY29uc3QgZGVmID0gaW5kZXhbcGFydC50eXBlXTtcbiAgaWYgKCFkZWYpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBuZXcgU3FsUGFydChwYXJ0LCBkZWYpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlcihvcHRpb25zOiBhbnkpIHtcbiAgaW5kZXhbb3B0aW9ucy50eXBlXSA9IG5ldyBTcWxQYXJ0RGVmKG9wdGlvbnMpO1xufVxuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdjb2x1bW4nLFxuICBzdHlsZTogJ2xhYmVsJyxcbiAgcGFyYW1zOiBbeyB0eXBlOiAnY29sdW1uJywgZHluYW1pY0xvb2t1cDogdHJ1ZSB9XSxcbiAgZGVmYXVsdFBhcmFtczogWyd2YWx1ZSddLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2V4cHJlc3Npb24nLFxuICBzdHlsZTogJ2V4cHJlc3Npb24nLFxuICBsYWJlbDogJ0V4cHI6JyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAnbGVmdCcsIHR5cGU6ICdzdHJpbmcnLCBkeW5hbWljTG9va3VwOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnb3AnLCB0eXBlOiAnc3RyaW5nJywgZHluYW1pY0xvb2t1cDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ3JpZ2h0JywgdHlwZTogJ3N0cmluZycsIGR5bmFtaWNMb29rdXA6IHRydWUgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWyd2YWx1ZScsICc9JywgJ3ZhbHVlJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbWFjcm8nLFxuICBzdHlsZTogJ2xhYmVsJyxcbiAgbGFiZWw6ICdNYWNybzonLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdhZ2dyZWdhdGUnLFxuICBzdHlsZTogJ2xhYmVsJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ2F2ZycsICdjb3VudCcsICdtaW4nLCAnbWF4JywgJ3N1bScsICdzdGRkZXYnLCAndmFyaWFuY2UnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2F2ZyddLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2FsaWFzJyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIHBhcmFtczogW3sgbmFtZTogJ25hbWUnLCB0eXBlOiAnc3RyaW5nJywgcXVvdGU6ICdkb3VibGUnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2FsaWFzJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAndGltZScsXG4gIHN0eWxlOiAnZnVuY3Rpb24nLFxuICBsYWJlbDogJ3RpbWUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnaW50ZXJ2YWwnLFxuICAgICAgdHlwZTogJ2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnJF9faW50ZXJ2YWwnLCAnMXMnLCAnMTBzJywgJzFtJywgJzVtJywgJzEwbScsICcxNW0nLCAnMWgnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdmaWxsJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydub25lJywgJ05VTEwnLCAncHJldmlvdXMnLCAnMCddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnJF9faW50ZXJ2YWwnLCAnbm9uZSddLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlOiBjcmVhdGVQYXJ0LFxufTtcbiIsImltcG9ydCB7IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvYWRQbHVnaW5Dc3MgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFBhbmVsQ3RybCBhcyBQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IE1ldHJpY3NQYW5lbEN0cmwgYXMgTWV0cmljc1BhbmVsQ3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL21ldHJpY3NfcGFuZWxfY3RybCc7XG5pbXBvcnQgeyBRdWVyeUN0cmwgYXMgUXVlcnlDdHJsRVM2IH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvcXVlcnlfY3RybCc7XG5cbmNvbnN0IFBhbmVsQ3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoUGFuZWxDdHJsRVM2KTtcbmNvbnN0IE1ldHJpY3NQYW5lbEN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKE1ldHJpY3NQYW5lbEN0cmxFUzYpO1xuY29uc3QgUXVlcnlDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShRdWVyeUN0cmxFUzYpO1xuXG5leHBvcnQgeyBQYW5lbEN0cmwsIE1ldHJpY3NQYW5lbEN0cmwsIFF1ZXJ5Q3RybCwgbG9hZFBsdWdpbkNzcyB9O1xuIl0sIm5hbWVzIjpbImxvY2F0aW9uU2VhcmNoVG9PYmplY3QiLCJsb2NhdGlvblNlcnZpY2UiLCJuYXZpZ2F0aW9uTG9nZ2VyIiwiZGVwcmVjYXRpb25XYXJuaW5nIiwidXJsVXRpbCIsIkRFRkFVTFRfUE9SVFMiLCJodHRwIiwiaHR0cHMiLCJmdHAiLCJBbmd1bGFyTG9jYXRpb25XcmFwcGVyIiwiY29uc3RydWN0b3IiLCJhYnNVcmwiLCJ3cmFwSW5EZXByZWNhdGlvbldhcm5pbmciLCJoYXNoIiwiaG9zdCIsInBhdGgiLCJwb3J0IiwicHJvdG9jb2wiLCJyZXBsYWNlIiwic2VhcmNoIiwic3RhdGUiLCJ1cmwiLCJmbiIsInJlcGxhY2VtZW50Iiwic2VsZiIsIndyYXBwZXIiLCJuYW1lIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIm5ld0hhc2giLCJnZXRMb2NhdGlvbiIsInNsaWNlIiwiRXJyb3IiLCJVUkwiLCJocmVmIiwiaG9zdG5hbWUiLCJwYXRobmFtZSIsInVuZGVmaW5lZCIsInBhcnNlZFBhdGgiLCJTdHJpbmciLCJzdGFydHNXaXRoIiwicHVzaCIsImxlbmd0aCIsInBhcnNlSW50IiwicGFyYW1WYWx1ZSIsImdldFNlYXJjaE9iamVjdCIsInBhcnRpYWwiLCJuZXdRdWVyeSIsImtleSIsIk9iamVjdCIsImtleXMiLCJ1cGRhdGVkVXJsIiwicmVuZGVyVXJsIiwibmV3VXJsIiwidHJpbSIsImNsb25lIiwiU3FsUGFydERlZiIsIm9wdGlvbnMiLCJ0eXBlIiwibGFiZWwiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsInN0eWxlIiwid3JhcE9wZW4iLCJ3cmFwQ2xvc2UiLCJzZXBhcmF0b3IiLCJwYXJhbXMiLCJkZWZhdWx0UGFyYW1zIiwiU3FsUGFydCIsInBhcnQiLCJkZWYiLCJtZXNzYWdlIiwiZGF0YXR5cGUiLCJ1cGRhdGVQYXJhbSIsInN0clZhbHVlIiwiaW5kZXgiLCJvcHRpb25hbCIsInNwbGljZSIsImlzQXJyYXkiLCJQYW5lbEN0cmwiLCJhcHBseVBhbmVsVGltZU92ZXJyaWRlcyIsIkxvYWRpbmdTdGF0ZSIsIlBhbmVsRXZlbnRzIiwidG9EYXRhRnJhbWVEVE8iLCJ0b0xlZ2FjeVJlc3BvbnNlRGF0YSIsIk1ldHJpY3NQYW5lbEN0cmwiLCIkc2NvcGUiLCIkaW5qZWN0b3IiLCJuZXh0IiwiZGF0YSIsInBhbmVsRGF0YSIsImxvYWRpbmciLCJwcm9jZXNzRGF0YUVycm9yIiwiZXJyb3IiLCJMb2FkaW5nIiwiYW5ndWxhckRpcnR5Q2hlY2siLCJyZXF1ZXN0IiwidGltZUluZm8iLCJ0aW1lUmFuZ2UiLCJyYW5nZSIsInVzZURhdGFGcmFtZXMiLCJoYW5kbGVEYXRhRnJhbWVzIiwic2VyaWVzIiwibGVnYWN5IiwibWFwIiwidiIsImhhbmRsZVF1ZXJ5UmVzdWx0IiwiY29udGV4dFNydiIsImdldCIsImRhdGFzb3VyY2VTcnYiLCJ0aW1lU3J2IiwidGVtcGxhdGVTcnYiLCJwYW5lbCIsImRhdGFzb3VyY2UiLCJldmVudHMiLCJvbiIsInJlZnJlc2giLCJvbk1ldHJpY3NQYW5lbFJlZnJlc2giLCJiaW5kIiwicGFuZWxUZWFyZG93biIsIm9uUGFuZWxUZWFyRG93biIsImNvbXBvbmVudERpZE1vdW50Iiwib25NZXRyaWNzUGFuZWxNb3VudGVkIiwicXVlcnlSdW5uZXIiLCJnZXRRdWVyeVJ1bm5lciIsInF1ZXJ5U3Vic2NyaXB0aW9uIiwiZ2V0RGF0YSIsIndpdGhUcmFuc2Zvcm1zIiwid2l0aEZpZWxkQ29uZmlnIiwic3Vic2NyaWJlIiwicGFuZWxEYXRhT2JzZXJ2ZXIiLCJ1bnN1YnNjcmliZSIsIm90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlIiwic25hcHNob3REYXRhIiwidXBkYXRlVGltZVJhbmdlIiwiRG9uZSIsIiR0aW1lb3V0IiwiZW1pdCIsImRhdGFTbmFwc2hvdExvYWQiLCJzY29wZWRWYXJzIiwidGhlbiIsImlzc3VlUXVlcmllcyIsImNhdGNoIiwiZXJyIiwiY2FuY2VsbGVkIiwiY29uc29sZSIsImxvZyIsIiRyb290IiwiJCRwaGFzZSIsIiRkaWdlc3QiLCJuZXdUaW1lRGF0YSIsInJ1biIsInF1ZXJpZXMiLCJ0YXJnZXRzIiwicGFuZWxJZCIsImlkIiwiZGFzaGJvYXJkSWQiLCJkYXNoYm9hcmQiLCJ0aW1lem9uZSIsImdldFRpbWV6b25lIiwibWF4RGF0YVBvaW50cyIsIndpZHRoIiwibWluSW50ZXJ2YWwiLCJpbnRlcnZhbCIsImNhY2hlVGltZW91dCIsInRyYW5zZm9ybWF0aW9ucyIsInNuYXBzaG90IiwiZnJhbWUiLCJkYXRhRnJhbWVzUmVjZWl2ZWQiLCJyZXN1bHQiLCJkYXRhUmVjZWl2ZWQiLCJpc1N0cmluZyIsImNvbmZpZyIsInByb2ZpbGVyIiwiRXZlbnRCdXNTcnYiLCJwbHVnaW4iLCIkcGFyZW50IiwiZWRpdG9yVGFicyIsIiRsb2NhdGlvbiIsInRpbWluZyIsInBhbmVscyIsInBsdWdpbklkIiwicGx1Z2luTmFtZSIsIiRvbiIsInBhbmVsRGlkTW91bnQiLCJpbml0aWFsaXplZCIsInBhbmVsSW5pdGlhbGl6ZWQiLCJyZW5kZXJpbmdDb21wbGV0ZWQiLCJwdWJsaXNoQXBwRXZlbnQiLCJldmVudCIsInBheWxvYWQiLCJhcHBFdmVudCIsImluaXRFZGl0TW9kZSIsImVkaXRNb2RlSW5pdGlhdGVkIiwiZWRpdE1vZGVJbml0aWFsaXplZCIsImFkZEVkaXRvclRhYiIsInRpdGxlIiwiZGlyZWN0aXZlRm4iLCJpY29uIiwiZWRpdG9yVGFiIiwidGVtcGxhdGVVcmwiLCJnZXRFeHRlbmRlZE1lbnUiLCJtZW51IiwiaW5pdFBhbmVsQWN0aW9ucyIsImdldEFkZGl0aW9uYWxNZW51SXRlbXMiLCJvdGhlclBhbmVsSW5GdWxsc2NyZWVuIiwicmVuZGVyIiwiaW5kZXhPZiIsIlF1ZXJ5Q3RybCIsInBhbmVsQ3RybCIsImN0cmwiLCJ0YXJnZXQiLCJpc0xhc3RRdWVyeSIsIlBhc3N3b3JkRmllbGRFbnVtIiwiY3JlYXRlUmVzZXRIYW5kbGVyIiwiZmllbGQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzZWN1cmVKc29uRmllbGRzIiwic2VjdXJlSnNvbkRhdGEiLCJjcmVhdGVDaGFuZ2VIYW5kbGVyIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiX21hcCIsImxhc3RWYWx1ZUZyb20iLCJvZiIsImNhdGNoRXJyb3IiLCJtYXBUbyIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImdldEJhY2tlbmRTcnYiLCJNeVNRTFF1ZXJ5TW9kZWwiLCJSZXNwb25zZVBhcnNlciIsImdldFRlbXBsYXRlU3J2IiwiZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIiwidG9UZXN0aW5nU3RhdHVzIiwiTXlzcWxEYXRhc291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInZhcmlhYmxlIiwibXVsdGkiLCJpbmNsdWRlQWxsIiwicXVlcnlNb2RlbCIsInF1b3RlTGl0ZXJhbCIsInF1b3RlZFZhbHVlcyIsImpvaW4iLCJyZXNwb25zZVBhcnNlciIsInNldHRpbmdzRGF0YSIsImpzb25EYXRhIiwidGltZUludGVydmFsIiwiaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMiLCJleHBhbmRlZFF1ZXJpZXMiLCJxdWVyeSIsImV4cGFuZGVkUXVlcnkiLCJnZXRSZWYiLCJyYXdTcWwiLCJpbnRlcnBvbGF0ZVZhcmlhYmxlIiwicmF3UXVlcnkiLCJmaWx0ZXJRdWVyeSIsImhpZGUiLCJhcHBseVRlbXBsYXRlVmFyaWFibGVzIiwicmVmSWQiLCJmb3JtYXQiLCJhbm5vdGF0aW9uUXVlcnkiLCJhbm5vdGF0aW9uIiwiUHJvbWlzZSIsInJlamVjdCIsImZldGNoIiwibWV0aG9kIiwiZnJvbSIsInZhbHVlT2YiLCJ0b1N0cmluZyIsInRvIiwicmVxdWVzdElkIiwicGlwZSIsInJlcyIsInRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZSIsIm1ldHJpY0ZpbmRRdWVyeSIsIm9wdGlvbmFsT3B0aW9ucyIsIndpbGRjYXJkQ2hhciIsImludGVycG9sYXRlZFF1ZXJ5IiwicnNwIiwidHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlIiwidGVzdERhdGFzb3VyY2UiLCJpbnRlcnZhbE1zIiwic3RhdHVzIiwidGFyZ2V0Q29udGFpbnNUZW1wbGF0ZSIsImJ1aWxkUXVlcnkiLCJjb250YWluc1RlbXBsYXRlIiwiTXlzcWxNZXRhUXVlcnkiLCJnZXRPcGVyYXRvcnMiLCJxdW90ZUlkZW50QXNMaXRlcmFsIiwidW5xdW90ZUlkZW50aWZpZXIiLCJmaW5kTWV0cmljVGFibGUiLCJidWlsZFRhYmxlQ29uc3RyYWludCIsInRhYmxlIiwiaW5jbHVkZXMiLCJwYXJ0cyIsInNwbGl0IiwiYnVpbGRUYWJsZVF1ZXJ5IiwiYnVpbGRDb2x1bW5RdWVyeSIsInRpbWVDb2x1bW4iLCJidWlsZFZhbHVlUXVlcnkiLCJjb2x1bW4iLCJidWlsZERhdGF0eXBlUXVlcnkiLCJNeXNxbFF1ZXJ5Q3RybCIsIkRhdGFTb3VyY2VQbHVnaW4iLCJNeXNxbENvbmZpZ0N0cmwiLCJvblBhc3N3b3JkUmVzZXQiLCJQYXNzd29yZCIsIm9uUGFzc3dvcmRDaGFuZ2UiLCJkZWZhdWx0UXVlcnkiLCJNeXNxbEFubm90YXRpb25zUXVlcnlDdHJsIiwiRGF0YXNvdXJjZSIsIkNvbmZpZ0N0cmwiLCJBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsInNldFF1ZXJ5Q3RybCIsInNldENvbmZpZ0N0cmwiLCJzZXRBbm5vdGF0aW9uUXVlcnlDdHJsIiwiZmluZCIsIm1ldHJpY0NvbHVtbiIsImdyb3VwIiwid2hlcmUiLCJzZWxlY3QiLCJpbnRlcnBvbGF0ZVF1ZXJ5U3RyIiwicXVvdGVJZGVudGlmaWVyIiwiZXNjYXBlTGl0ZXJhbCIsImhhc1RpbWVHcm91cCIsImciLCJoYXNNZXRyaWNDb2x1bW4iLCJkZWZhdWx0Rm9ybWF0Rm4iLCJlc2NhcGVkVmFsdWVzIiwiaW50ZXJwb2xhdGUiLCJoYXNVbml4RXBvY2hUaW1lY29sdW1uIiwidGltZUNvbHVtblR5cGUiLCJidWlsZFRpbWVDb2x1bW4iLCJhbGlhcyIsInRpbWVHcm91cCIsIm1hY3JvIiwiYXJncyIsImJ1aWxkTWV0cmljQ29sdW1uIiwiYnVpbGRWYWx1ZUNvbHVtbnMiLCJidWlsZFZhbHVlQ29sdW1uIiwiY29sdW1uTmFtZSIsImFnZ3JlZ2F0ZSIsImZ1bmMiLCJidWlsZFdoZXJlQ2xhdXNlIiwiY29uZGl0aW9ucyIsInRhZyIsImJ1aWxkR3JvdXBDbGF1c2UiLCJncm91cFNlY3Rpb24iLCJpIiwiZmlsdGVyIiwiZmluZEluZGV4IiwiYXBwRXZlbnRzIiwic3FsUGFydCIsIlNob3dDb25maXJtTW9kYWxFdmVudCIsInVpU2VnbWVudFNydiIsIm1ldGFCdWlsZGVyIiwidXBkYXRlUHJvamVjdGlvbiIsImZvcm1hdHMiLCJ0ZXh0Iiwic2VnbWVudCIsIm5ld1NlZ21lbnQiLCJ0YWJsZVNlZ21lbnQiLCJodG1sIiwidGltZUNvbHVtblNlZ21lbnQiLCJ1cGRhdGVSYXdTcWxBbmRSZWZyZXNoIiwiZmFrZSIsIm1ldHJpY0NvbHVtblNlZ21lbnQiLCJidWlsZFNlbGVjdE1lbnUiLCJ3aGVyZUFkZCIsIm5ld1BsdXNCdXR0b24iLCJncm91cEFkZCIsIm9uRGF0YVJlY2VpdmVkIiwiZGF0YUVycm9yIiwib25EYXRhRXJyb3IiLCJzZWxlY3RQYXJ0cyIsImNyZWF0ZSIsIm4iLCJ3aGVyZVBhcnRzIiwiZ3JvdXBQYXJ0cyIsInVwZGF0ZVBlcnNpc3RlZFBhcnRzIiwiYWdncmVnYXRlcyIsInN1Ym1lbnUiLCJzZWxlY3RNZW51IiwidG9nZ2xlRWRpdG9yTW9kZSIsInB1Ymxpc2giLCJ0ZXh0MiIsInllc1RleHQiLCJvbkNvbmZpcm0iLCIkZXZhbEFzeW5jIiwicmVzZXRQbHVzQnV0dG9uIiwiYnV0dG9uIiwicGx1c0J1dHRvbiIsImdldFRhYmxlU2VnbWVudHMiLCJ0cmFuc2Zvcm1Ub1NlZ21lbnRzIiwiaGFuZGxlUXVlcnlFcnJvciIsInRhYmxlQ2hhbmdlZCIsInRhc2sxIiwiciIsInRpbWVDb2x1bW5DaGFuZ2VkIiwidGFzazIiLCJhbGwiLCJnZXRUaW1lQ29sdW1uU2VnbWVudHMiLCJwYXJ0TW9kZWwiLCJnZXRNZXRyaWNDb2x1bW5TZWdtZW50cyIsImFkZE5vbmUiLCJtZXRyaWNDb2x1bW5DaGFuZ2VkIiwiZGF0YUxpc3QiLCJsYXN0UXVlcnlFcnJvciIsImxhc3RRdWVyeU1ldGEiLCJtZXRhIiwicmVzdWx0cyIsInF1ZXJ5UmVzIiwic2VnbWVudHMiLCJleHBhbmRhYmxlIiwiYWRkVGVtcGxhdGVWYXJzIiwiZ2V0VmFyaWFibGVzIiwidGVtcGxhdGVRdW90ZXIiLCJ1bnNoaWZ0IiwiZmluZEFnZ3JlZ2F0ZUluZGV4IiwicCIsImZpbmRXaW5kb3dJbmRleCIsImFkZFNlbGVjdFBhcnQiLCJpdGVtIiwic3ViSXRlbSIsInBhcnRUeXBlIiwiYWRkQWxpYXMiLCJhZGRHcm91cCIsImFnZ0luZGV4Iiwid2luZG93SW5kZXgiLCJyZW1vdmVTZWxlY3RQYXJ0IiwibW9kZWxzSW5kZXgiLCJwYXJ0SW5kZXgiLCJoYW5kbGVTZWxlY3RQYXJ0RXZlbnQiLCJldnQiLCJyZXNvbHZlIiwiaGFuZGxlR3JvdXBQYXJ0RXZlbnQiLCJyZW1vdmVHcm91cCIsInNvbWUiLCJzIiwiaGFuZGxlV2hlcmVQYXJ0RXZlbnQiLCJwYXJhbSIsIm5ld09wZXJhdG9ycyIsImQiLCJnZXRXaGVyZU9wdGlvbnMiLCJhZGRXaGVyZUFjdGlvbiIsImdldEdyb3VwT3B0aW9ucyIsInRhZ3MiLCJhZGRHcm91cEFjdGlvbiIsInRvRGF0YVF1ZXJ5UmVzcG9uc2UiLCJyYXciLCJmcmFtZXMiLCJ2YWx1ZXMiLCJ0ZXh0RmllbGQiLCJmaWVsZHMiLCJmIiwidmFsdWVGaWVsZCIsImZsYXRNYXAiLCJ0b0FycmF5IiwiQXJyYXkiLCJTZXQiLCJ0aW1lRmllbGQiLCJ0aW1lRW5kRmllbGQiLCJ0YWdzRmllbGQiLCJsaXN0IiwidGltZUVuZCIsIk1hdGgiLCJmbG9vciIsInRpbWUiLCJjcmVhdGVQYXJ0IiwicmVnaXN0ZXIiLCJkeW5hbWljTG9va3VwIiwicXVvdGUiLCJtYWtlQ2xhc3NFUzVDb21wYXRpYmxlIiwibG9hZFBsdWdpbkNzcyIsIlBhbmVsQ3RybEVTNiIsIk1ldHJpY3NQYW5lbEN0cmxFUzYiLCJRdWVyeUN0cmxFUzYiXSwic291cmNlUm9vdCI6IiJ9
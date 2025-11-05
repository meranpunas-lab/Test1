"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["postgresPlugin"],{

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

/***/ "./public/app/plugins/datasource/postgres/config_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresConfigCtrl": () => (/* binding */ PostgresConfigCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/datasources/utils/passwordHandlers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PostgresConfigCtrl {
  /** @ngInject */
  constructor($scope, datasourceSrv) {
    _defineProperty(this, "datasourceSrv", void 0);

    _defineProperty(this, "showTimescaleDBHelp", void 0);

    _defineProperty(this, "onPasswordReset", void 0);

    _defineProperty(this, "onPasswordChange", void 0);

    _defineProperty(this, "postgresVersions", [{
      name: '9.3',
      value: 903
    }, {
      name: '9.4',
      value: 904
    }, {
      name: '9.5',
      value: 905
    }, {
      name: '9.6',
      value: 906
    }, {
      name: '10',
      value: 1000
    }, {
      name: '11',
      value: 1100
    }, {
      name: '12+',
      value: 1200
    }]);

    this.current = $scope.ctrl.current;
    this.datasourceSrv = datasourceSrv;
    this.current.jsonData.sslmode = this.current.jsonData.sslmode || 'verify-full';
    this.current.jsonData.tlsConfigurationMethod = this.current.jsonData.tlsConfigurationMethod || 'file-path';
    this.current.jsonData.postgresVersion = this.current.jsonData.postgresVersion || 903;
    this.showTimescaleDBHelp = false;
    this.autoDetectFeatures();
    this.onPasswordReset = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createResetHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
    this.onPasswordChange = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createChangeHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
    this.tlsModeMapping();
  }

  autoDetectFeatures() {
    if (!this.current.id) {
      return;
    }

    this.datasourceSrv.loadDatasource(this.current.name).then(ds => {
      return ds.getVersion().then(version => {
        version = Number(version[0].text); // timescaledb is only available for 9.6+

        if (version >= 906) {
          ds.getTimescaleDBVersion().then(version => {
            if (version.length === 1) {
              this.current.jsonData.timescaledb = true;
            }
          });
        }

        const major = Math.trunc(version / 100);
        const minor = version % 100;
        let name = String(major);

        if (version < 1000) {
          name = String(major) + '.' + String(minor);
        }

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.postgresVersions, p => p.value === version)) {
          this.postgresVersions.push({
            name: name,
            value: version
          });
        }

        this.current.jsonData.postgresVersion = version;
      });
    });
  }

  toggleTimescaleDBHelp() {
    this.showTimescaleDBHelp = !this.showTimescaleDBHelp;
  }

  tlsModeMapping() {
    if (this.current.jsonData.sslmode === 'disable') {
      this.current.jsonData.tlsAuth = false;
      this.current.jsonData.tlsAuthWithCACert = false;
      this.current.jsonData.tlsSkipVerify = true;
    } else {
      this.current.jsonData.tlsAuth = true;
      this.current.jsonData.tlsAuthWithCACert = true;
      this.current.jsonData.tlsSkipVerify = false;
    }
  } // the value portion is derived from postgres server_version_num/100


}
PostgresConfigCtrl.$inject = ["$scope", "datasourceSrv"];

_defineProperty(PostgresConfigCtrl, "templateUrl", 'partials/config.html');

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresDatasource": () => (/* binding */ PostgresDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/postgres/response_parser.ts");
/* harmony import */ var app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/postgres/postgres_query_model.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _features_variables_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 //Types



class PostgresDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "jsonData", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "interpolateVariable", (value, variable) => {
      if (typeof value === 'string') {
        if (variable.multi || variable.includeAll) {
          return this.queryModel.quoteLiteral(value);
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
    this.jsonData = instanceSettings.jsonData;
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.queryModel = new app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_3__["default"]({});
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
    const queryModel = new app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_3__["default"](target, this.templateSrv, scopedVars);
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

  _metaRequest(rawSql) {
    const refId = 'meta';
    const query = {
      refId: refId,
      datasource: this.getRef(),
      rawSql,
      format: 'table'
    };
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        queries: [query]
      },
      requestId: refId
    });
  }

  getVersion() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this._metaRequest("SELECT current_setting('server_version_num')::int/100"));
  }

  getTimescaleDBVersion() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this._metaRequest("SELECT extversion FROM pg_extension WHERE extname = 'timescaledb'"));
  }

  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this._metaRequest('SELECT 1')).then(() => {
      return {
        status: 'success',
        message: 'Database Connection OK'
      };
    }).catch(err => {
      return (0,_grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_6__.toTestingStatus)(err);
    });
  }

  targetContainsTemplate(target) {
    let rawSql = '';

    if (target.rawQuery) {
      rawSql = target.rawSql;
    } else {
      const query = new app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_3__["default"](target);
      rawSql = query.buildQuery();
    }

    rawSql = rawSql.replace('$__', '');
    return this.templateSrv.containsTemplate(rawSql);
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/meta_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresMetaQuery": () => (/* binding */ PostgresMetaQuery)
/* harmony export */ });
class PostgresMetaQuery {
  constructor(target, queryModel) {
    this.target = target;
    this.queryModel = queryModel;
    this.target = target;
    this.queryModel = queryModel;
  }

  getOperators(datatype) {
    switch (datatype) {
      case 'float4':
      case 'float8':
        {
          return ['=', '!=', '<', '<=', '>', '>='];
        }

      case 'text':
      case 'varchar':
      case 'char':
        {
          return ['=', '!=', '<', '<=', '>', '>=', 'IN', 'NOT IN', 'LIKE', 'NOT LIKE', '~', '~*', '!~', '!~*'];
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
    let query = `
SELECT
	quote_ident(table_name) as table_name,
	( SELECT
	    quote_ident(column_name) as column_name
	  FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name IN ('timestamptz','timestamp')
    ORDER BY ordinal_position LIMIT 1
  ) AS time_column,
  ( SELECT
      quote_ident(column_name) AS column_name
    FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name='float8'
    ORDER BY ordinal_position LIMIT 1
  ) AS value_column
FROM information_schema.tables t
WHERE `;
    query += this.buildSchemaConstraint();
    query += ` AND
  EXISTS
  ( SELECT 1
    FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name IN ('timestamptz','timestamp')
  ) AND
  EXISTS
  ( SELECT 1
    FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name='float8'
  )
LIMIT 1
;`;
    return query;
  }

  buildSchemaConstraint() {
    // quote_ident protects hyphenated schemes
    const query = `
quote_ident(table_schema) IN (
  SELECT
    CASE WHEN trim(s[i]) = '"$user"' THEN user ELSE trim(s[i]) END
  FROM
    generate_series(
      array_lower(string_to_array(current_setting('search_path'),','),1),
      array_upper(string_to_array(current_setting('search_path'),','),1)
    ) as i,
    string_to_array(current_setting('search_path'),',') s
)`;
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
      query = this.buildSchemaConstraint();
      query += ' AND table_name = ' + this.quoteIdentAsLiteral(table);
      return query;
    }
  }

  buildTableQuery() {
    let query = 'SELECT quote_ident(table_name) FROM information_schema.tables WHERE ';
    query += this.buildSchemaConstraint();
    query += ' ORDER BY table_name';
    return query;
  }

  buildColumnQuery(type) {
    let query = 'SELECT quote_ident(column_name) FROM information_schema.columns WHERE ';
    query += this.buildTableConstraint(this.target.table);

    switch (type) {
      case 'time':
        {
          query += " AND data_type IN ('timestamp without time zone','timestamp with time zone','bigint','integer','double precision','real')";
          break;
        }

      case 'metric':
        {
          query += " AND data_type IN ('text','character','character varying')";
          break;
        }

      case 'value':
        {
          query += " AND data_type IN ('bigint','integer','double precision','real','numeric')";
          query += ' AND column_name <> ' + this.quoteIdentAsLiteral(this.target.timeColumn);
          break;
        }

      case 'group':
        {
          query += " AND data_type IN ('text','character','character varying','uuid')";
          break;
        }
    }

    query += ' ORDER BY column_name';
    return query;
  }

  buildValueQuery(column) {
    let query = 'SELECT DISTINCT quote_literal(' + column + ')';
    query += ' FROM ' + this.target.table;
    query += ' WHERE $__timeFilter(' + this.target.timeColumn + ')';
    query += ' AND ' + column + ' IS NOT NULL';
    query += ' ORDER BY 1 LIMIT 100';
    return query;
  }

  buildDatatypeQuery(column) {
    let query = 'SELECT udt_name FROM information_schema.columns WHERE ';
    query += this.buildTableConstraint(this.target.table);
    query += ' AND column_name = ' + this.quoteIdentAsLiteral(column);
    return query;
  }

  buildAggregateQuery() {
    let query = 'SELECT DISTINCT proname FROM pg_aggregate ';
    query += 'INNER JOIN pg_proc ON pg_aggregate.aggfnoid = pg_proc.oid ';
    query += 'INNER JOIN pg_type ON pg_type.oid=pg_proc.prorettype ';
    query += "WHERE pronargs=1 AND typname IN ('float8') AND aggkind='n' ORDER BY 1";
    return query;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/postgres/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/postgres/query_ctrl.ts");
/* harmony import */ var _config_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/postgres/config_ctrl.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const defaultQuery = `SELECT
  extract(epoch from time_column) AS time,
  text_column as text,
  tags_column as tags
FROM
  metric_table
WHERE
  $__timeFilter(time_column)
`;

class PostgresAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.rawQuery = this.annotation.rawQuery || defaultQuery;
  }

}

PostgresAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(PostgresAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_0__.PostgresDatasource).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_1__.PostgresQueryCtrl).setConfigCtrl(_config_ctrl__WEBPACK_IMPORTED_MODULE_2__.PostgresConfigCtrl).setAnnotationQueryCtrl(PostgresAnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/postgres_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostgresQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PostgresQueryModel {
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
    return '"' + String(value).replace(/"/g, '""') + '"';
  }

  quoteLiteral(value) {
    return "'" + String(value).replace(/'/g, "''") + "'";
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
    return ['int4', 'int8', 'float4', 'float8', 'numeric'].indexOf(this.target.timeColumnType) > -1;
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
    const aggregate = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'aggregate' || g.type === 'percentile');
    const windows = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'window' || g.type === 'moving_window');

    if (aggregate) {
      const func = aggregate.params[0];

      switch (aggregate.type) {
        case 'aggregate':
          if (func === 'first' || func === 'last') {
            query = func + '(' + query + ',' + this.target.timeColumn + ')';
          } else {
            query = func + '(' + query + ')';
          }

          break;

        case 'percentile':
          query = func + '(' + aggregate.params[1] + ') WITHIN GROUP (ORDER BY ' + query + ')';
          break;
      }
    }

    if (windows) {
      const overParts = [];

      if (this.hasMetricColumn()) {
        overParts.push('PARTITION BY ' + this.target.metricColumn);
      }

      overParts.push('ORDER BY ' + this.buildTimeColumn(false));
      const over = overParts.join(' ');
      let curr;
      let prev;

      switch (windows.type) {
        case 'window':
          switch (windows.params[0]) {
            case 'delta':
              curr = query;
              prev = 'lag(' + curr + ') OVER (' + over + ')';
              query = curr + ' - ' + prev;
              break;

            case 'increase':
              curr = query;
              prev = 'lag(' + curr + ') OVER (' + over + ')';
              query = '(CASE WHEN ' + curr + ' >= ' + prev + ' THEN ' + curr + ' - ' + prev;
              query += ' WHEN ' + prev + ' IS NULL THEN NULL ELSE ' + curr + ' END)';
              break;

            case 'rate':
              let timeColumn = this.target.timeColumn;

              if (aggregate) {
                timeColumn = 'min(' + timeColumn + ')';
              }

              curr = query;
              prev = 'lag(' + curr + ') OVER (' + over + ')';
              query = '(CASE WHEN ' + curr + ' >= ' + prev + ' THEN ' + curr + ' - ' + prev;
              query += ' WHEN ' + prev + ' IS NULL THEN NULL ELSE ' + curr + ' END)';
              query += '/extract(epoch from ' + timeColumn + ' - lag(' + timeColumn + ') OVER (' + over + '))';
              break;

            default:
              query = windows.params[0] + '(' + query + ') OVER (' + over + ')';
              break;
          }

          break;

        case 'moving_window':
          query = windows.params[0] + '(' + query + ') OVER (' + over + ' ROWS ' + windows.params[1] + ' PRECEDING)';
          break;
      }
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
    query += '\nORDER BY 1';

    if (this.hasMetricColumn()) {
      query += ',2';
    }

    return query;
  }

}
PostgresQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresQueryCtrl": () => (/* binding */ PostgresQueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _meta_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/postgres/meta_query.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var _postgres_query_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/postgres/postgres_query_model.ts");
/* harmony import */ var _sql_part__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/postgres/sql_part.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/events.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const defaultQuery = `SELECT
  $__time(time_column),
  value1
FROM
  metric_table
WHERE
  $__timeFilter(time_column)
`;
class PostgresQueryCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__.QueryCtrl {
  /** @ngInject */
  constructor($scope, $injector, templateSrv, uiSegmentSrv) {
    super($scope, $injector);
    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;

    _defineProperty(this, "formats", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "metaBuilder", void 0);

    _defineProperty(this, "lastQueryMeta", void 0);

    _defineProperty(this, "lastQueryError", void 0);

    _defineProperty(this, "showHelp", false);

    _defineProperty(this, "tableSegment", void 0);

    _defineProperty(this, "whereAdd", void 0);

    _defineProperty(this, "timeColumnSegment", void 0);

    _defineProperty(this, "metricColumnSegment", void 0);

    _defineProperty(this, "selectMenu", []);

    _defineProperty(this, "selectParts", [[]]);

    _defineProperty(this, "groupParts", []);

    _defineProperty(this, "whereParts", []);

    _defineProperty(this, "groupAdd", void 0);

    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target = this.target;
    this.queryModel = new _postgres_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](this.target, templateSrv, this.panel.scopedVars);
    this.metaBuilder = new _meta_query__WEBPACK_IMPORTED_MODULE_2__.PostgresMetaQuery(this.target, this.queryModel);
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

  timescaleAggCheck() {
    const aggIndex = this.findAggregateIndex(this.selectParts[0]); // add or remove TimescaleDB aggregate functions as needed

    if (aggIndex !== -1) {
      const baseOpts = this.selectParts[0][aggIndex].def.params[0].baseOptions;
      const timescaleOpts = baseOpts.concat(this.selectParts[0][aggIndex].def.params[0].timescaleOptions);

      if (this.datasource.jsonData.timescaledb === true) {
        this.selectParts[0][aggIndex].def.params[0].options = timescaleOpts;
      } else {
        this.selectParts[0][aggIndex].def.params[0].options = baseOpts;
      }
    }
  }

  updateProjection() {
    this.selectParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, parts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _sql_part__WEBPACK_IMPORTED_MODULE_5__["default"].create).filter(n => n);
    });
    this.timescaleAggCheck();
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
    this.timescaleAggCheck();
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
    this.selectMenu = [];
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
    }; // first and last aggregate are timescaledb specific

    if (this.datasource.jsonData.timescaledb === true) {
      aggregates.submenu.push({
        text: 'First',
        value: 'first'
      });
      aggregates.submenu.push({
        text: 'Last',
        value: 'last'
      });
    }

    this.selectMenu.push(aggregates); // ordered set aggregates require postgres 9.4+

    if (this.datasource.jsonData.postgresVersion >= 904) {
      const aggregates2 = {
        text: 'Ordered-Set Aggregate Functions',
        value: 'percentile',
        submenu: [{
          text: 'Percentile (continuous)',
          value: 'percentile_cont'
        }, {
          text: 'Percentile (discrete)',
          value: 'percentile_disc'
        }]
      };
      this.selectMenu.push(aggregates2);
    }

    const windows = {
      text: 'Window Functions',
      value: 'window',
      submenu: [{
        text: 'Delta',
        value: 'delta'
      }, {
        text: 'Increase',
        value: 'increase'
      }, {
        text: 'Rate',
        value: 'rate'
      }, {
        text: 'Sum',
        value: 'sum'
      }, {
        text: 'Moving Average',
        value: 'avg',
        type: 'moving_window'
      }]
    };
    this.selectMenu.push(windows);
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
      app_core_app_events__WEBPACK_IMPORTED_MODULE_1__["default"].publish(new app_types_events__WEBPACK_IMPORTED_MODULE_7__.ShowConfirmModalEvent({
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
    button.type = plusButton.type;
    button.fake = plusButton.fake;
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
            case 'aggregate':
              return this.datasource.metricFindQuery(this.metaBuilder.buildAggregateQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));

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
              if (['int4', 'int8', 'float4', 'float8', 'timestamp', 'timestamptz'].indexOf(part.datatype) > -1) {
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
    this.addGroup(this.groupAdd.type, this.groupAdd.value);
    this.resetPlusButton(this.groupAdd);
    this.updateRawSqlAndRefresh();
  }

  handleQueryError(err) {
    this.error = err.message || 'Failed to issue metric query';
    return [];
  }

}
PostgresQueryCtrl.$inject = ["$scope", "$injector", "templateSrv", "uiSegmentSrv"];

_defineProperty(PostgresQueryCtrl, "templateUrl", 'partials/query.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/response_parser.ts":
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
    const timeField = frame.fields.find(f => f.name === 'time');

    if (!timeField) {
      throw new Error('Missing mandatory time column (with time column alias) in annotation query');
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

/***/ "./public/app/plugins/datasource/postgres/sql_part.ts":
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
    options: [],
    baseOptions: ['avg', 'count', 'min', 'max', 'sum', 'stddev', 'variance'],
    timescaleOptions: ['first', 'last']
  }],
  defaultParams: ['avg']
});
register({
  type: 'percentile',
  label: 'Aggregate:',
  style: 'label',
  params: [{
    name: 'name',
    type: 'string',
    options: ['percentile_cont', 'percentile_disc']
  }, {
    name: 'fraction',
    type: 'number',
    options: ['0.5', '0.75', '0.9', '0.95', '0.99']
  }],
  defaultParams: ['percentile_cont', '0.95']
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
register({
  type: 'window',
  style: 'label',
  params: [{
    name: 'function',
    type: 'string',
    options: ['delta', 'increase', 'rate', 'sum']
  }],
  defaultParams: ['increase']
});
register({
  type: 'moving_window',
  style: 'label',
  label: 'Moving Window:',
  params: [{
    name: 'function',
    type: 'string',
    options: ['avg']
  }, {
    name: 'window_size',
    type: 'number',
    options: ['3', '5', '7', '10', '20']
  }],
  defaultParams: ['avg', '5']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RFI7QUFFRW1DLElBQUFBLElBQUksRUFBRSxRQUZSO0FBR0VELElBQUFBLE9BQU8sRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixJQUFoQixFQUFzQixJQUF0QjtBQUhYLEdBTk0sQ0FKRDtBQWdCUFUsRUFBQUEsYUFBYSxFQUFFLENBQUMsS0FBRCxFQUFRLEdBQVI7QUFoQlIsQ0FBRCxDQUFSO0FBbUJBLGlFQUFlO0FBQ2J1VixFQUFBQSxNQUFNLEVBQUUwRjtBQURLLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1yYSxTQUFTLEdBQUd5YSxxRUFBc0IsQ0FBQ0UsbUVBQUQsQ0FBeEM7QUFDQSxNQUFNcmEsZ0JBQWdCLEdBQUdtYSxxRUFBc0IsQ0FBQ0csa0ZBQUQsQ0FBL0M7QUFDQSxNQUFNM1MsU0FBUyxHQUFHd1MscUVBQXNCLENBQUNJLG1FQUFELENBQXhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9Bbmd1bGFyTG9jYXRpb25XcmFwcGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvY29tcG9uZW50cy9zcWxfcGFydC9zcWxfcGFydC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL21ldHJpY3NfcGFuZWxfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3V0aWxzL3Bhc3N3b3JkSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Bvc3RncmVzL2NvbmZpZ19jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9tZXRhX3F1ZXJ5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Bvc3RncmVzL3Bvc3RncmVzX3F1ZXJ5X21vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9xdWVyeV9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9yZXNwb25zZV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Bvc3RncmVzL3NxbF9wYXJ0LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvc2RrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvY2F0aW9uU2VhcmNoVG9PYmplY3QsIGxvY2F0aW9uU2VydmljZSwgbmF2aWdhdGlvbkxvZ2dlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZGVwcmVjYXRpb25XYXJuaW5nLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbi8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL2FlOGU5MDNlZGY4OGE4M2ZlZGQxMTZhZTAyYzA2MjhiZjcyYjE1MGMvc3JjL25nL2xvY2F0aW9uLmpzI0w1XG5jb25zdCBERUZBVUxUX1BPUlRTOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyBodHRwOiA4MCwgaHR0cHM6IDQ0MywgZnRwOiAyMSB9O1xuXG5leHBvcnQgY2xhc3MgQW5ndWxhckxvY2F0aW9uV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWJzVXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5hYnNVcmwpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaGFzaCk7XG4gICAgdGhpcy5ob3N0ID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5ob3N0KTtcbiAgICB0aGlzLnBhdGggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBhdGgpO1xuICAgIHRoaXMucG9ydCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucG9ydCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucHJvdG9jb2wgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnByb3RvY29sLCAnd2luZG93LmxvY2F0aW9uJyk7XG4gICAgdGhpcy5yZXBsYWNlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5yZXBsYWNlKTtcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc2VhcmNoKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cmwgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnVybCk7XG4gIH1cblxuICB3cmFwSW5EZXByZWNhdGlvbldhcm5pbmcoZm46IEZ1bmN0aW9uLCByZXBsYWNlbWVudD86IHN0cmluZykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgICAgZGVwcmVjYXRpb25XYXJuaW5nKCckbG9jYXRpb24nLCBmbi5uYW1lLCByZXBsYWNlbWVudCB8fCAnbG9jYXRpb25TZXJ2aWNlJyk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgYWJzVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLnVybCgpfWA7XG4gIH1cblxuICBoYXNoKG5ld0hhc2g/OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IGhhc2gnKTtcblxuICAgIGlmICghbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLmhhc2guc2xpY2UoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgfVxuXG4gIGhvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuaG9zdG5hbWU7XG4gIH1cblxuICBwYXRoKHBhdGhuYW1lPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHBhdGgnKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCk7XG5cbiAgICBpZiAocGF0aG5hbWUgIT09IHVuZGVmaW5lZCAmJiBwYXRobmFtZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHBhcnNlZFBhdGggPSBTdHJpbmcocGF0aG5hbWUpO1xuICAgICAgcGFyc2VkUGF0aCA9IHBhcnNlZFBhdGguc3RhcnRzV2l0aCgnLycpID8gcGFyc2VkUGF0aCA6IGAvJHtwYXJzZWRQYXRofWA7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtwYXJzZWRQYXRofWApO1xuXG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogdXJsLnNlYXJjaC5sZW5ndGggPiAwID8gdXJsLnNlYXJjaCA6IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaDogdXJsLmhhc2gubGVuZ3RoID4gMCA/IHVybC5oYXNoIDogbG9jYXRpb24uaGFzaCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09PSBudWxsKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuICB9XG5cbiAgcG9ydCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsLnBvcnQsIDEwKSB8fCBERUZBVUxUX1BPUlRTW3VybC5wcm90b2NvbF0gfHwgbnVsbDtcbiAgfVxuXG4gIHByb3RvY29sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnByb3RvY29sLnNsaWNlKDAsIC0xKTtcbiAgfVxuXG4gIHJlcGxhY2UoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBzZWFyY2goc2VhcmNoPzogYW55LCBwYXJhbVZhbHVlPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHNlYXJjaCcpO1xuICAgIGlmICghc2VhcmNoKSB7XG4gICAgICByZXR1cm4gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2ggJiYgYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHtcbiAgICAgICAgW3NlYXJjaF06IHBhcmFtVmFsdWUsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgbGV0IG5ld1F1ZXJ5O1xuXG4gICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbmV3UXVlcnkgPSB7IC4uLnNlYXJjaCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UXVlcnkgPSBsb2NhdGlvblNlYXJjaFRvT2JqZWN0KHNlYXJjaCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld1F1ZXJ5KSkge1xuICAgICAgICAvLyByZW1vdmluZyBwYXJhbXMgd2l0aCBudWxsIHwgdW5kZWZpbmVkXG4gICAgICAgIGlmIChuZXdRdWVyeVtrZXldID09PSBudWxsIHx8IG5ld1F1ZXJ5W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSBuZXdRdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWRVcmwgPSB1cmxVdGlsLnJlbmRlclVybChsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZSwgbmV3UXVlcnkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2godXBkYXRlZFVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0ZShzdGF0ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzdGF0ZScpO1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdXJsKG5ld1VybD86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiB1cmwnKTtcblxuICAgIGlmIChuZXdVcmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG5ld1VybC5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goeyAuLi5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKSwgaGFzaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnPycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIHNlYXJjaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2gobmV3VXJsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuICAgIHJldHVybiBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH0ke2xvY2F0aW9uLmhhc2h9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2xvbmUgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY2xhc3MgU3FsUGFydERlZiB7XG4gIHR5cGU6IHN0cmluZztcbiAgc3R5bGU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgcGFyYW1zOiBhbnlbXTtcbiAgZGVmYXVsdFBhcmFtczogYW55W107XG4gIHdyYXBPcGVuOiBzdHJpbmc7XG4gIHdyYXBDbG9zZTogc3RyaW5nO1xuICBzZXBhcmF0b3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgaWYgKG9wdGlvbnMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSBvcHRpb25zLmxhYmVsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsID0gdGhpcy50eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnR5cGUuc3Vic3RyaW5nKDEpICsgJzonO1xuICAgIH1cbiAgICB0aGlzLnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICBpZiAodGhpcy5zdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy53cmFwT3BlbiA9ICcoJztcbiAgICAgIHRoaXMud3JhcENsb3NlID0gJyknO1xuICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnLCAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndyYXBPcGVuID0gJyAnO1xuICAgICAgdGhpcy53cmFwQ2xvc2UgPSAnICc7XG4gICAgICB0aGlzLnNlcGFyYXRvciA9ICcgJztcbiAgICB9XG4gICAgdGhpcy5wYXJhbXMgPSBvcHRpb25zLnBhcmFtcztcbiAgICB0aGlzLmRlZmF1bHRQYXJhbXMgPSBvcHRpb25zLmRlZmF1bHRQYXJhbXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNxbFBhcnQge1xuICBwYXJ0OiBhbnk7XG4gIGRlZjogU3FsUGFydERlZjtcbiAgcGFyYW1zOiBhbnlbXTtcbiAgbGFiZWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRhdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHBhcnQ6IGFueSwgZGVmOiBhbnkpIHtcbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICAgIHRoaXMuZGVmID0gZGVmO1xuICAgIGlmICghdGhpcy5kZWYpIHtcbiAgICAgIHRocm93IHsgbWVzc2FnZTogJ0NvdWxkIG5vdCBmaW5kIHNxbCBwYXJ0ICcgKyBwYXJ0LnR5cGUgfTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGF0eXBlID0gcGFydC5kYXRhdHlwZTtcblxuICAgIGlmIChwYXJ0Lm5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IHBhcnQubmFtZTtcbiAgICAgIHRoaXMubGFiZWwgPSBkZWYubGFiZWwgKyAnICcgKyBwYXJ0Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgdGhpcy5sYWJlbCA9IGRlZi5sYWJlbDtcbiAgICB9XG5cbiAgICBwYXJ0LnBhcmFtcyA9IHBhcnQucGFyYW1zIHx8IGNsb25lKHRoaXMuZGVmLmRlZmF1bHRQYXJhbXMpO1xuICAgIHRoaXMucGFyYW1zID0gcGFydC5wYXJhbXM7XG4gIH1cblxuICB1cGRhdGVQYXJhbShzdHJWYWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgLy8gaGFuZGxlIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICBpZiAoc3RyVmFsdWUgPT09ICcnICYmIHRoaXMuZGVmLnBhcmFtc1tpbmRleF0ub3B0aW9uYWwpIHtcbiAgICAgIHRoaXMucGFyYW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFyYW1zW2luZGV4XSA9IHN0clZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMucGFydC5wYXJhbXMgPSB0aGlzLnBhcmFtcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBQYW5lbEN0cmwgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9wYW5lbCc7XG5pbXBvcnQgeyBDb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgTGVnYWN5UmVzcG9uc2VEYXRhLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUGFuZWxFdmVudHMsXG4gIFRpbWVSYW5nZSxcbiAgdG9EYXRhRnJhbWVEVE8sXG4gIHRvTGVnYWN5UmVzcG9uc2VEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBQYW5lbFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvcXVlcnkvc3RhdGUvUGFuZWxRdWVyeVJ1bm5lcic7XG5cbmNsYXNzIE1ldHJpY3NQYW5lbEN0cmwgZXh0ZW5kcyBQYW5lbEN0cmwge1xuICBkZWNsYXJlIGRhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGk7XG4gIGRlY2xhcmUgcmFuZ2U6IFRpbWVSYW5nZTtcblxuICBjb250ZXh0U3J2OiBDb250ZXh0U3J2O1xuICBkYXRhc291cmNlU3J2OiBhbnk7XG4gIHRpbWVTcnY6IGFueTtcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgaW50ZXJ2YWw6IGFueTtcbiAgaW50ZXJ2YWxNczogYW55O1xuICByZXNvbHV0aW9uOiBhbnk7XG4gIHRpbWVJbmZvPzogc3RyaW5nO1xuICBza2lwRGF0YU9uSW5pdCA9IGZhbHNlO1xuICBkYXRhTGlzdDogTGVnYWN5UmVzcG9uc2VEYXRhW10gPSBbXTtcbiAgcXVlcnlTdWJzY3JpcHRpb24/OiBVbnN1YnNjcmliYWJsZSB8IG51bGw7XG4gIHVzZURhdGFGcmFtZXMgPSBmYWxzZTtcbiAgcGFuZWxEYXRhPzogUGFuZWxEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGFueSkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcblxuICAgIHRoaXMuY29udGV4dFNydiA9ICRpbmplY3Rvci5nZXQoJ2NvbnRleHRTcnYnKTtcbiAgICB0aGlzLmRhdGFzb3VyY2VTcnYgPSAkaW5qZWN0b3IuZ2V0KCdkYXRhc291cmNlU3J2Jyk7XG4gICAgdGhpcy50aW1lU3J2ID0gJGluamVjdG9yLmdldCgndGltZVNydicpO1xuICAgIHRoaXMudGVtcGxhdGVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0ZW1wbGF0ZVNydicpO1xuICAgIHRoaXMucGFuZWwuZGF0YXNvdXJjZSA9IHRoaXMucGFuZWwuZGF0YXNvdXJjZSB8fCBudWxsO1xuXG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucmVmcmVzaCwgdGhpcy5vbk1ldHJpY3NQYW5lbFJlZnJlc2guYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucGFuZWxUZWFyZG93biwgdGhpcy5vblBhbmVsVGVhckRvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQsIHRoaXMub25NZXRyaWNzUGFuZWxNb3VudGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1ldHJpY3NQYW5lbE1vdW50ZWQoKSB7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSB0aGlzLnBhbmVsLmdldFF1ZXJ5UnVubmVyKCkgYXMgUGFuZWxRdWVyeVJ1bm5lcjtcbiAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gcXVlcnlSdW5uZXJcbiAgICAgIC5nZXREYXRhKHsgd2l0aFRyYW5zZm9ybXM6IHRydWUsIHdpdGhGaWVsZENvbmZpZzogdHJ1ZSB9KVxuICAgICAgLnN1YnNjcmliZSh0aGlzLnBhbmVsRGF0YU9ic2VydmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgb25QYW5lbFRlYXJEb3duKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsUmVmcmVzaCgpIHtcbiAgICAvLyBpZ25vcmUgZmV0Y2hpbmcgZGF0YSBpZiBhbm90aGVyIHBhbmVsIGlzIGluIGZ1bGxzY3JlZW5cbiAgICBpZiAodGhpcy5vdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgd2UgaGF2ZSBzbmFwc2hvdCBkYXRhIHVzZSB0aGF0XG4gICAgaWYgKHRoaXMucGFuZWwuc25hcHNob3REYXRhKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZSgpO1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YTtcbiAgICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IHtcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgICBzZXJpZXM6IGRhdGEsXG4gICAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIERlZmVyIHBhbmVsIHJlbmRlcmluZyB0aWxsIHRoZSBuZXh0IGRpZ2VzdCBjeWNsZS5cbiAgICAgIC8vIEZvciBzb21lIHJlYXNvbiBzbmFwc2hvdCBwYW5lbHMgZG9uJ3QgaW5pdCBhdCB0aGlzIHRpbWUsIHNvIHRoaXMgaGVscHMgdG8gYXZvaWQgcmVuZGVyaW5nIGlzc3Vlcy5cbiAgICAgIHJldHVybiB0aGlzLiR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhU25hcHNob3RMb2FkLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIGxvYWRpbmcvZXJyb3Igc3RhdGVcbiAgICBkZWxldGUgdGhpcy5lcnJvcjtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgLy8gbG9hZCBkYXRhc291cmNlIHNlcnZpY2VcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlU3J2XG4gICAgICAuZ2V0KHRoaXMucGFuZWwuZGF0YXNvdXJjZSwgdGhpcy5wYW5lbC5zY29wZWRWYXJzKVxuICAgICAgLnRoZW4odGhpcy5pc3N1ZVF1ZXJpZXMuYmluZCh0aGlzKSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb2Nlc3NEYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAvLyBpZiBjYW5jZWxlZCAga2VlcCBsb2FkaW5nIHNldCB0byB0cnVlXG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQYW5lbCByZXF1ZXN0IGNhbmNlbGxlZCcsIGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlIHx8ICdSZXF1ZXN0IEVycm9yJztcblxuICAgIGlmIChlcnIuZGF0YSkge1xuICAgICAgaWYgKGVyci5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5kYXRhLm1lc3NhZ2U7XG4gICAgICB9IGVsc2UgaWYgKGVyci5kYXRhLmVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnIuZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gIH1cblxuICBhbmd1bGFyRGlydHlDaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuJHNjb3BlLiRyb290LiQkcGhhc2UpIHtcbiAgICAgIHRoaXMuJHNjb3BlLiRkaWdlc3QoKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGVzIHRoZSByZXNwb25zZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIHN0cmVhbVxuICBwYW5lbERhdGFPYnNlcnZlciA9IHtcbiAgICBuZXh0OiAoZGF0YTogUGFuZWxEYXRhKSA9PiB7XG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuRXJyb3IpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWdub3JlIGRhdGEgaW4gbG9hZGluZyBzdGF0ZVxuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5yZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHsgdGltZUluZm8gfSA9IGRhdGEucmVxdWVzdDtcbiAgICAgICAgaWYgKHRpbWVJbmZvKSB7XG4gICAgICAgICAgdGhpcy50aW1lSW5mbyA9IHRpbWVJbmZvO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRpbWVSYW5nZSkge1xuICAgICAgICB0aGlzLnJhbmdlID0gZGF0YS50aW1lUmFuZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnVzZURhdGFGcmFtZXMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRhRnJhbWVzKGRhdGEuc2VyaWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1ha2UgdGhlIHJlc3VsdHMgbG9vayBhcyBpZiB0aGV5IGNhbWUgZGlyZWN0bHkgZnJvbSBhIDw2LjIgZGF0YXNvdXJjZSByZXF1ZXN0XG4gICAgICAgIGNvbnN0IGxlZ2FjeSA9IGRhdGEuc2VyaWVzLm1hcCgodikgPT4gdG9MZWdhY3lSZXNwb25zZURhdGEodikpO1xuICAgICAgICB0aGlzLmhhbmRsZVF1ZXJ5UmVzdWx0KHsgZGF0YTogbGVnYWN5IH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gICAgfSxcbiAgfTtcblxuICB1cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZT86IERhdGFTb3VyY2VBcGkpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlIHx8IHRoaXMuZGF0YXNvdXJjZTtcbiAgICB0aGlzLnJhbmdlID0gdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpO1xuXG4gICAgY29uc3QgbmV3VGltZURhdGEgPSBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyh0aGlzLnBhbmVsLCB0aGlzLnJhbmdlKTtcbiAgICB0aGlzLnRpbWVJbmZvID0gbmV3VGltZURhdGEudGltZUluZm87XG4gICAgdGhpcy5yYW5nZSA9IG5ld1RpbWVEYXRhLnRpbWVSYW5nZTtcbiAgfVxuXG4gIGlzc3VlUXVlcmllcyhkYXRhc291cmNlOiBEYXRhU291cmNlQXBpKSB7XG4gICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZSk7XG5cbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuXG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLnBhbmVsIGFzIFBhbmVsTW9kZWw7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSBwYW5lbC5nZXRRdWVyeVJ1bm5lcigpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UnVubmVyLnJ1bih7XG4gICAgICBkYXRhc291cmNlOiBwYW5lbC5kYXRhc291cmNlLFxuICAgICAgcXVlcmllczogcGFuZWwudGFyZ2V0cyxcbiAgICAgIHBhbmVsSWQ6IHBhbmVsLmlkLFxuICAgICAgZGFzaGJvYXJkSWQ6IHRoaXMuZGFzaGJvYXJkLmlkLFxuICAgICAgdGltZXpvbmU6IHRoaXMuZGFzaGJvYXJkLmdldFRpbWV6b25lKCksXG4gICAgICB0aW1lSW5mbzogdGhpcy50aW1lSW5mbyxcbiAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIG1heERhdGFQb2ludHM6IHBhbmVsLm1heERhdGFQb2ludHMgfHwgdGhpcy53aWR0aCxcbiAgICAgIG1pbkludGVydmFsOiBwYW5lbC5pbnRlcnZhbCxcbiAgICAgIHNjb3BlZFZhcnM6IHBhbmVsLnNjb3BlZFZhcnMsXG4gICAgICBjYWNoZVRpbWVvdXQ6IHBhbmVsLmNhY2hlVGltZW91dCxcbiAgICAgIHRyYW5zZm9ybWF0aW9uczogcGFuZWwudHJhbnNmb3JtYXRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGF0YUZyYW1lcyhkYXRhOiBEYXRhRnJhbWVbXSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkICYmIHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IGRhdGEubWFwKChmcmFtZSkgPT4gdG9EYXRhRnJhbWVEVE8oZnJhbWUpKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhRnJhbWVzUmVjZWl2ZWQsIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUXVlcnlSZXN1bHQocmVzdWx0OiBEYXRhUXVlcnlSZXNwb25zZSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGEgc291cmNlIHF1ZXJ5IHJlc3VsdCBpbnZhbGlkLCBtaXNzaW5nIGRhdGEgZmllbGQ6JywgcmVzdWx0KTtcbiAgICAgIHJlc3VsdCA9IHsgZGF0YTogW10gfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhUmVjZWl2ZWQsIHJlc3VsdC5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIH07XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBwcm9maWxlciB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgQXBwRXZlbnQsXG4gIFBhbmVsRXZlbnRzLFxuICBQYW5lbFBsdWdpbk1ldGEsXG4gIEFuZ3VsYXJQYW5lbE1lbnVJdGVtLFxuICBFdmVudEJ1c0V4dGVuZGVkLFxuICBFdmVudEJ1c1Nydixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyIH0gZnJvbSAnYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlcic7XG5cbmV4cG9ydCBjbGFzcyBQYW5lbEN0cmwge1xuICBwYW5lbDogYW55O1xuICBlcnJvcjogYW55O1xuICBkZWNsYXJlIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbk5hbWUgPSAnJztcbiAgcGx1Z2luSWQgPSAnJztcbiAgZWRpdG9yVGFiczogYW55O1xuICAkc2NvcGU6IGFueTtcbiAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2U7XG4gICR0aW1lb3V0OiBhbnk7XG4gIGVkaXRNb2RlSW5pdGlhdGVkID0gZmFsc2U7XG4gIGRlY2xhcmUgaGVpZ2h0OiBudW1iZXI7XG4gIGRlY2xhcmUgd2lkdGg6IG51bWJlcjtcbiAgY29udGFpbmVySGVpZ2h0OiBhbnk7XG4gIGV2ZW50czogRXZlbnRCdXNFeHRlbmRlZDtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICB0aW1pbmc6IGFueTtcbiAgJGxvY2F0aW9uOiBBbmd1bGFyTG9jYXRpb25XcmFwcGVyO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsID8/ICRzY29wZS4kcGFyZW50LnBhbmVsO1xuICAgIHRoaXMuZGFzaGJvYXJkID0gdGhpcy5kYXNoYm9hcmQgPz8gJHNjb3BlLiRwYXJlbnQuZGFzaGJvYXJkO1xuICAgIHRoaXMuJGluamVjdG9yID0gJGluamVjdG9yO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHRpbWVvdXQgPSAkaW5qZWN0b3IuZ2V0KCckdGltZW91dCcpO1xuICAgIHRoaXMuZWRpdG9yVGFicyA9IFtdO1xuICAgIHRoaXMuJGxvY2F0aW9uID0gbmV3IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEJ1c1NydigpO1xuICAgIHRoaXMudGltaW5nID0ge307IC8vIG5vdCB1c2VkIGJ1dCBoZXJlIHRvIG5vdCBicmVhayBwbHVnaW5zXG5cbiAgICBjb25zdCBwbHVnaW4gPSBjb25maWcucGFuZWxzW3RoaXMucGFuZWwudHlwZV07XG4gICAgaWYgKHBsdWdpbikge1xuICAgICAgdGhpcy5wbHVnaW5JZCA9IHBsdWdpbi5pZDtcbiAgICAgIHRoaXMucGx1Z2luTmFtZSA9IHBsdWdpbi5uYW1lO1xuICAgIH1cblxuICAgICRzY29wZS4kb24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQubmFtZSwgKCkgPT4gdGhpcy5wYW5lbERpZE1vdW50KCkpO1xuICB9XG5cbiAgcGFuZWxEaWRNb3VudCgpIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50KTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRpYWxpemVkKTtcbiAgICB0aGlzLmRhc2hib2FyZC5wYW5lbEluaXRpYWxpemVkKHRoaXMucGFuZWwpO1xuICB9XG5cbiAgcmVuZGVyaW5nQ29tcGxldGVkKCkge1xuICAgIHByb2ZpbGVyLnJlbmRlcmluZ0NvbXBsZXRlZCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnBhbmVsLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1Ymxpc2hBcHBFdmVudDxUPihldmVudDogQXBwRXZlbnQ8VD4sIHBheWxvYWQ/OiBUKSB7XG4gICAgdGhpcy4kc2NvcGUuJHJvb3QuYXBwRXZlbnQoZXZlbnQsIHBheWxvYWQpO1xuICB9XG5cbiAgaW5pdEVkaXRNb2RlKCkge1xuICAgIGlmICghdGhpcy5lZGl0TW9kZUluaXRpYXRlZCkge1xuICAgICAgdGhpcy5lZGl0TW9kZUluaXRpYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmVkaXRNb2RlSW5pdGlhbGl6ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkaXRvclRhYih0aXRsZTogc3RyaW5nLCBkaXJlY3RpdmVGbjogYW55LCBpbmRleD86IG51bWJlciwgaWNvbj86IGFueSkge1xuICAgIGNvbnN0IGVkaXRvclRhYiA9IHsgdGl0bGUsIGRpcmVjdGl2ZUZuLCBpY29uIH07XG5cbiAgICBpZiAoaXNTdHJpbmcoZGlyZWN0aXZlRm4pKSB7XG4gICAgICBlZGl0b3JUYWIuZGlyZWN0aXZlRm4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlVXJsOiBkaXJlY3RpdmVGbiB9O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5zcGxpY2UoaW5kZXgsIDAsIGVkaXRvclRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5wdXNoKGVkaXRvclRhYik7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXh0ZW5kZWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnU6IEFuZ3VsYXJQYW5lbE1lbnVJdGVtW10gPSBbXTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRQYW5lbEFjdGlvbnMsIG1lbnUpO1xuICAgIHJldHVybiBtZW51O1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgaW4gc3ViLWNsYXNzIHRvIGFkZCBpdGVtcyBiZWZvcmUgZXh0ZW5kZWQgbWVudVxuICBhc3luYyBnZXRBZGRpdGlvbmFsTWVudUl0ZW1zKCk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmQub3RoZXJQYW5lbEluRnVsbHNjcmVlbih0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcihwYXlsb2FkPzogYW55KSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5yZW5kZXIsIHBheWxvYWQpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVuIGZyb20gcmVhY3RcbiAgb25QbHVnaW5UeXBlQ2hhbmdlID0gKHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhKSA9PiB7fTtcbn1cbiIsImltcG9ydCB7IGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuXG5leHBvcnQgY2xhc3MgUXVlcnlDdHJsPFQgPSBhbnk+IHtcbiAgdGFyZ2V0ITogVDtcbiAgZGF0YXNvdXJjZSE6IGFueTtcbiAgcGFuZWxDdHJsITogYW55O1xuICBwYW5lbDogYW55O1xuICBoYXNSYXdNb2RlITogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuICBpc0xhc3RRdWVyeTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbnksIHB1YmxpYyAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWxDdHJsID0gdGhpcy5wYW5lbEN0cmwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQgPz8gJHNjb3BlLmN0cmwudGFyZ2V0O1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IHRoaXMuZGF0YXNvdXJjZSA/PyAkc2NvcGUuY3RybC5kYXRhc291cmNlO1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsQ3RybD8ucGFuZWwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMuaXNMYXN0UXVlcnkgPSBpbmRleE9mKHRoaXMucGFuZWwudGFyZ2V0cywgdGhpcy50YXJnZXQpID09PSB0aGlzLnBhbmVsLnRhcmdldHMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpO1xuICB9XG59XG4iLCIvKipcbiAqIFNldCBvZiBoYW5kbGVycyBmb3Igc2VjdXJlIHBhc3N3b3JkIGZpZWxkIGluIEFuZ3VsYXIgY29tcG9uZW50cy4gVGhleSBoYW5kbGUgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoXG4gKiBwYXNzd29yZHMgc3RvcmVkIGluIHBsYWluIHRleHQgZmllbGRzLlxuICovXG5cbmltcG9ydCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZW51bSBQYXNzd29yZEZpZWxkRW51bSB7XG4gIFBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbiAgQmFzaWNBdXRoUGFzc3dvcmQgPSAnYmFzaWNBdXRoUGFzc3dvcmQnLFxufVxuXG4vKipcbiAqIEJhc2ljIHNoYXBlIGZvciBzZXR0aW5ncyBjb250cm9sbGVycyBpbiBhdCB0aGUgbW9tZW50IG1vc3RseSBhbmd1bGFyIGRhdGEgc291cmNlIHBsdWdpbnMuXG4gKi9cbmV4cG9ydCB0eXBlIEN0cmwgPSB7XG4gIGN1cnJlbnQ6IHtcbiAgICBzZWN1cmVKc29uRmllbGRzOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xuICAgIH07XG4gICAgc2VjdXJlSnNvbkRhdGE/OiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBiYXNpY0F1dGhQYXNzd29yZD86IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNldEhhbmRsZXIgPVxuICAoY3RybDogQ3RybCwgZmllbGQ6IFBhc3N3b3JkRmllbGRFbnVtKSA9PiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBSZXNldCBhbHNvIG5vcm1hbCBwbGFpbiB0ZXh0IHBhc3N3b3JkIHRvIHJlbW92ZSBpdCBhbmQgb25seSBzYXZlIGl0IGluIHNlY3VyZUpzb25EYXRhLlxuICAgIGN0cmwuY3VycmVudFtmaWVsZF0gPSB1bmRlZmluZWQ7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25GaWVsZHNbZmllbGRdID0gZmFsc2U7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhID0gY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhIHx8IHt9O1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YVtmaWVsZF0gPSAnJztcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYW5nZUhhbmRsZXIgPVxuICAoY3RybDogYW55LCBmaWVsZDogUGFzc3dvcmRGaWVsZEVudW0pID0+IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgPSBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgfHwge307XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhW2ZpZWxkXSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gIH07XG4iLCJpbXBvcnQgeyBmaW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIGNyZWF0ZUNoYW5nZUhhbmRsZXIsXG4gIGNyZWF0ZVJlc2V0SGFuZGxlcixcbiAgUGFzc3dvcmRGaWVsZEVudW0sXG59IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3V0aWxzL3Bhc3N3b3JkSGFuZGxlcnMnO1xuaW1wb3J0IHsgRGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcblxuZXhwb3J0IGNsYXNzIFBvc3RncmVzQ29uZmlnQ3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9jb25maWcuaHRtbCc7XG5cbiAgLy8gU2V0IHRocm91Z2ggYW5ndWxhciBiaW5kaW5nc1xuICBkZWNsYXJlIGN1cnJlbnQ6IGFueTtcblxuICBkYXRhc291cmNlU3J2OiBhbnk7XG4gIHNob3dUaW1lc2NhbGVEQkhlbHA6IGJvb2xlYW47XG4gIG9uUGFzc3dvcmRSZXNldDogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUmVzZXRIYW5kbGVyPjtcbiAgb25QYXNzd29yZENoYW5nZTogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlQ2hhbmdlSGFuZGxlcj47XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgZGF0YXNvdXJjZVNydjogRGF0YXNvdXJjZVNydikge1xuICAgIHRoaXMuY3VycmVudCA9ICRzY29wZS5jdHJsLmN1cnJlbnQ7XG4gICAgdGhpcy5kYXRhc291cmNlU3J2ID0gZGF0YXNvdXJjZVNydjtcbiAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEuc3NsbW9kZSA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5zc2xtb2RlIHx8ICd2ZXJpZnktZnVsbCc7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc0NvbmZpZ3VyYXRpb25NZXRob2QgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzQ29uZmlndXJhdGlvbk1ldGhvZCB8fCAnZmlsZS1wYXRoJztcbiAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEucG9zdGdyZXNWZXJzaW9uID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLnBvc3RncmVzVmVyc2lvbiB8fCA5MDM7XG4gICAgdGhpcy5zaG93VGltZXNjYWxlREJIZWxwID0gZmFsc2U7XG4gICAgdGhpcy5hdXRvRGV0ZWN0RmVhdHVyZXMoKTtcbiAgICB0aGlzLm9uUGFzc3dvcmRSZXNldCA9IGNyZWF0ZVJlc2V0SGFuZGxlcih0aGlzLCBQYXNzd29yZEZpZWxkRW51bS5QYXNzd29yZCk7XG4gICAgdGhpcy5vblBhc3N3b3JkQ2hhbmdlID0gY3JlYXRlQ2hhbmdlSGFuZGxlcih0aGlzLCBQYXNzd29yZEZpZWxkRW51bS5QYXNzd29yZCk7XG4gICAgdGhpcy50bHNNb2RlTWFwcGluZygpO1xuICB9XG5cbiAgYXV0b0RldGVjdEZlYXR1cmVzKCkge1xuICAgIGlmICghdGhpcy5jdXJyZW50LmlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhc291cmNlU3J2LmxvYWREYXRhc291cmNlKHRoaXMuY3VycmVudC5uYW1lKS50aGVuKChkczogYW55KSA9PiB7XG4gICAgICByZXR1cm4gZHMuZ2V0VmVyc2lvbigpLnRoZW4oKHZlcnNpb246IGFueSkgPT4ge1xuICAgICAgICB2ZXJzaW9uID0gTnVtYmVyKHZlcnNpb25bMF0udGV4dCk7XG5cbiAgICAgICAgLy8gdGltZXNjYWxlZGIgaXMgb25seSBhdmFpbGFibGUgZm9yIDkuNitcbiAgICAgICAgaWYgKHZlcnNpb24gPj0gOTA2KSB7XG4gICAgICAgICAgZHMuZ2V0VGltZXNjYWxlREJWZXJzaW9uKCkudGhlbigodmVyc2lvbjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAodmVyc2lvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRpbWVzY2FsZWRiID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ham9yID0gTWF0aC50cnVuYyh2ZXJzaW9uIC8gMTAwKTtcbiAgICAgICAgY29uc3QgbWlub3IgPSB2ZXJzaW9uICUgMTAwO1xuICAgICAgICBsZXQgbmFtZSA9IFN0cmluZyhtYWpvcik7XG4gICAgICAgIGlmICh2ZXJzaW9uIDwgMTAwMCkge1xuICAgICAgICAgIG5hbWUgPSBTdHJpbmcobWFqb3IpICsgJy4nICsgU3RyaW5nKG1pbm9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZpbmQodGhpcy5wb3N0Z3Jlc1ZlcnNpb25zLCAocDogYW55KSA9PiBwLnZhbHVlID09PSB2ZXJzaW9uKSkge1xuICAgICAgICAgIHRoaXMucG9zdGdyZXNWZXJzaW9ucy5wdXNoKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZlcnNpb24gfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnBvc3RncmVzVmVyc2lvbiA9IHZlcnNpb247XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRpbWVzY2FsZURCSGVscCgpIHtcbiAgICB0aGlzLnNob3dUaW1lc2NhbGVEQkhlbHAgPSAhdGhpcy5zaG93VGltZXNjYWxlREJIZWxwO1xuICB9XG5cbiAgdGxzTW9kZU1hcHBpbmcoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudC5qc29uRGF0YS5zc2xtb2RlID09PSAnZGlzYWJsZScpIHtcbiAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNBdXRoID0gZmFsc2U7XG4gICAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzQXV0aFdpdGhDQUNlcnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNTa2lwVmVyaWZ5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc0F1dGggPSB0cnVlO1xuICAgICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc0F1dGhXaXRoQ0FDZXJ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNTa2lwVmVyaWZ5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gdGhlIHZhbHVlIHBvcnRpb24gaXMgZGVyaXZlZCBmcm9tIHBvc3RncmVzIHNlcnZlcl92ZXJzaW9uX251bS8xMDBcbiAgcG9zdGdyZXNWZXJzaW9ucyA9IFtcbiAgICB7IG5hbWU6ICc5LjMnLCB2YWx1ZTogOTAzIH0sXG4gICAgeyBuYW1lOiAnOS40JywgdmFsdWU6IDkwNCB9LFxuICAgIHsgbmFtZTogJzkuNScsIHZhbHVlOiA5MDUgfSxcbiAgICB7IG5hbWU6ICc5LjYnLCB2YWx1ZTogOTA2IH0sXG4gICAgeyBuYW1lOiAnMTAnLCB2YWx1ZTogMTAwMCB9LFxuICAgIHsgbmFtZTogJzExJywgdmFsdWU6IDExMDAgfSxcbiAgICB7IG5hbWU6ICcxMisnLCB2YWx1ZTogMTIwMCB9LFxuICBdO1xufVxuIiwiaW1wb3J0IHsgbWFwIGFzIF9tYXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2UsIERhdGFTb3VyY2VXaXRoQmFja2VuZCwgRmV0Y2hSZXNwb25zZSwgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkV2ZW50LCBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgTWV0cmljRmluZFZhbHVlLCBTY29wZWRWYXJzLCBUaW1lUmFuZ2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IFJlc3BvbnNlUGFyc2VyIGZyb20gJy4vcmVzcG9uc2VfcGFyc2VyJztcbmltcG9ydCBQb3N0Z3Jlc1F1ZXJ5TW9kZWwgZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9wb3N0Z3Jlc19xdWVyeV9tb2RlbCc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiwgVGVtcGxhdGVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvdGVtcGxhdGluZy90ZW1wbGF0ZV9zcnYnO1xuLy9UeXBlc1xuaW1wb3J0IHsgUG9zdGdyZXNPcHRpb25zLCBQb3N0Z3Jlc1F1ZXJ5LCBQb3N0Z3Jlc1F1ZXJ5Rm9ySW50ZXJwb2xhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvdmFyaWFibGVzL3V0aWxzJztcbmltcG9ydCB7IHRvVGVzdGluZ1N0YXR1cyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL3F1ZXJ5UmVzcG9uc2UnO1xuXG5leHBvcnQgY2xhc3MgUG9zdGdyZXNEYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPFBvc3RncmVzUXVlcnksIFBvc3RncmVzT3B0aW9ucz4ge1xuICBpZDogYW55O1xuICBuYW1lOiBhbnk7XG4gIGpzb25EYXRhOiBhbnk7XG4gIHJlc3BvbnNlUGFyc2VyOiBSZXNwb25zZVBhcnNlcjtcbiAgcXVlcnlNb2RlbDogUG9zdGdyZXNRdWVyeU1vZGVsO1xuICBpbnRlcnZhbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzPFBvc3RncmVzT3B0aW9ucz4sXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpXG4gICkge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMubmFtZSA9IGluc3RhbmNlU2V0dGluZ3MubmFtZTtcbiAgICB0aGlzLmlkID0gaW5zdGFuY2VTZXR0aW5ncy5pZDtcbiAgICB0aGlzLmpzb25EYXRhID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YTtcbiAgICB0aGlzLnJlc3BvbnNlUGFyc2VyID0gbmV3IFJlc3BvbnNlUGFyc2VyKCk7XG4gICAgdGhpcy5xdWVyeU1vZGVsID0gbmV3IFBvc3RncmVzUXVlcnlNb2RlbCh7fSk7XG4gICAgY29uc3Qgc2V0dGluZ3NEYXRhID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YSB8fCAoe30gYXMgUG9zdGdyZXNPcHRpb25zKTtcbiAgICB0aGlzLmludGVydmFsID0gc2V0dGluZ3NEYXRhLnRpbWVJbnRlcnZhbCB8fCAnMW0nO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVWYXJpYWJsZSA9ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10sIHZhcmlhYmxlOiB7IG11bHRpOiBhbnk7IGluY2x1ZGVBbGw6IGFueSB9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh2YXJpYWJsZS5tdWx0aSB8fCB2YXJpYWJsZS5pbmNsdWRlQWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHF1b3RlZFZhbHVlcyA9IF9tYXAodmFsdWUsICh2KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5xdWVyeU1vZGVsLnF1b3RlTGl0ZXJhbCh2KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcXVvdGVkVmFsdWVzLmpvaW4oJywnKTtcbiAgfTtcblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyhcbiAgICBxdWVyaWVzOiBQb3N0Z3Jlc1F1ZXJ5Rm9ySW50ZXJwb2xhdGlvbltdLFxuICAgIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnNcbiAgKTogUG9zdGdyZXNRdWVyeUZvckludGVycG9sYXRpb25bXSB7XG4gICAgbGV0IGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgaWYgKHF1ZXJpZXMgJiYgcXVlcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBleHBhbmRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRRdWVyeSA9IHtcbiAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgIHJhd1NxbDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnJhd1NxbCwgc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgICAgICByYXdRdWVyeTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkUXVlcnk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGFuZGVkUXVlcmllcztcbiAgfVxuXG4gIGZpbHRlclF1ZXJ5KHF1ZXJ5OiBQb3N0Z3Jlc1F1ZXJ5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFxdWVyeS5oaWRlO1xuICB9XG5cbiAgYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyh0YXJnZXQ6IFBvc3RncmVzUXVlcnksIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgICBjb25zdCBxdWVyeU1vZGVsID0gbmV3IFBvc3RncmVzUXVlcnlNb2RlbCh0YXJnZXQsIHRoaXMudGVtcGxhdGVTcnYsIHNjb3BlZFZhcnMpO1xuICAgIHJldHVybiB7XG4gICAgICByZWZJZDogdGFyZ2V0LnJlZklkLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbDogcXVlcnlNb2RlbC5yZW5kZXIodGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlIGFzIGFueSksXG4gICAgICBmb3JtYXQ6IHRhcmdldC5mb3JtYXQsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGFubm90YXRpb25RdWVyeShvcHRpb25zOiBhbnkpOiBQcm9taXNlPEFubm90YXRpb25FdmVudFtdPiB7XG4gICAgaWYgKCFvcHRpb25zLmFubm90YXRpb24ucmF3UXVlcnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIG1lc3NhZ2U6ICdRdWVyeSBtaXNzaW5nIGluIGFubm90YXRpb24gZGVmaW5pdGlvbicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIHJlZklkOiBvcHRpb25zLmFubm90YXRpb24ubmFtZSxcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByYXdTcWw6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLmFubm90YXRpb24ucmF3UXVlcnksIG9wdGlvbnMuc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgIGZvcm1hdDogJ3RhYmxlJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiBvcHRpb25zLnJhbmdlLmZyb20udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogb3B0aW9ucy5yYW5nZS50by52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFtxdWVyeV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMuYW5ub3RhdGlvbi5uYW1lLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICBhc3luYyAocmVzOiBGZXRjaFJlc3BvbnNlPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KSA9PlxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlc3BvbnNlUGFyc2VyLnRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZShvcHRpb25zLCByZXMuZGF0YSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbWV0cmljRmluZFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIG9wdGlvbmFsT3B0aW9uczogYW55KTogUHJvbWlzZTxNZXRyaWNGaW5kVmFsdWVbXT4ge1xuICAgIGxldCByZWZJZCA9ICd0ZW1wdmFyJztcbiAgICBpZiAob3B0aW9uYWxPcHRpb25zICYmIG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZSAmJiBvcHRpb25hbE9wdGlvbnMudmFyaWFibGUubmFtZSkge1xuICAgICAgcmVmSWQgPSBvcHRpb25hbE9wdGlvbnMudmFyaWFibGUubmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCByYXdTcWwgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoXG4gICAgICBxdWVyeSxcbiAgICAgIGdldFNlYXJjaEZpbHRlclNjb3BlZFZhcih7IHF1ZXJ5LCB3aWxkY2FyZENoYXI6ICclJywgb3B0aW9uczogb3B0aW9uYWxPcHRpb25zIH0pLFxuICAgICAgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlXG4gICAgKTtcblxuICAgIGNvbnN0IGludGVycG9sYXRlZFF1ZXJ5ID0ge1xuICAgICAgcmVmSWQ6IHJlZklkLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbCxcbiAgICAgIGZvcm1hdDogJ3RhYmxlJyxcbiAgICB9O1xuXG4gICAgY29uc3QgcmFuZ2UgPSBvcHRpb25hbE9wdGlvbnM/LnJhbmdlIGFzIFRpbWVSYW5nZTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAgIC5mZXRjaDxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPih7XG4gICAgICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZnJvbTogcmFuZ2U/LmZyb20/LnZhbHVlT2YoKT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiByYW5nZT8udG8/LnZhbHVlT2YoKT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFtpbnRlcnBvbGF0ZWRRdWVyeV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0SWQ6IHJlZklkLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJzcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VQYXJzZXIudHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlKHJzcCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWV0YVJlcXVlc3QocmF3U3FsOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZWZJZCA9ICdtZXRhJztcbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIHJlZklkOiByZWZJZCxcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByYXdTcWwsXG4gICAgICBmb3JtYXQ6ICd0YWJsZScsXG4gICAgfTtcbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpLmZldGNoPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KHtcbiAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHF1ZXJpZXM6IFtxdWVyeV0sXG4gICAgICB9LFxuICAgICAgcmVxdWVzdElkOiByZWZJZCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLl9tZXRhUmVxdWVzdChcIlNFTEVDVCBjdXJyZW50X3NldHRpbmcoJ3NlcnZlcl92ZXJzaW9uX251bScpOjppbnQvMTAwXCIpKTtcbiAgfVxuXG4gIGdldFRpbWVzY2FsZURCVmVyc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuX21ldGFSZXF1ZXN0KFwiU0VMRUNUIGV4dHZlcnNpb24gRlJPTSBwZ19leHRlbnNpb24gV0hFUkUgZXh0bmFtZSA9ICd0aW1lc2NhbGVkYidcIikpO1xuICB9XG5cbiAgdGVzdERhdGFzb3VyY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLl9tZXRhUmVxdWVzdCgnU0VMRUNUIDEnKSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdEYXRhYmFzZSBDb25uZWN0aW9uIE9LJyB9O1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvVGVzdGluZ1N0YXR1cyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICB0YXJnZXRDb250YWluc1RlbXBsYXRlKHRhcmdldDogYW55KSB7XG4gICAgbGV0IHJhd1NxbCA9ICcnO1xuXG4gICAgaWYgKHRhcmdldC5yYXdRdWVyeSkge1xuICAgICAgcmF3U3FsID0gdGFyZ2V0LnJhd1NxbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUG9zdGdyZXNRdWVyeU1vZGVsKHRhcmdldCk7XG4gICAgICByYXdTcWwgPSBxdWVyeS5idWlsZFF1ZXJ5KCk7XG4gICAgfVxuXG4gICAgcmF3U3FsID0gcmF3U3FsLnJlcGxhY2UoJyRfXycsICcnKTtcblxuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LmNvbnRhaW5zVGVtcGxhdGUocmF3U3FsKTtcbiAgfVxufVxuIiwiaW1wb3J0IFF1ZXJ5TW9kZWwgZnJvbSAnLi9wb3N0Z3Jlc19xdWVyeV9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Z3Jlc01ldGFRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFyZ2V0OiB7IHRhYmxlOiBzdHJpbmc7IHRpbWVDb2x1bW46IHN0cmluZyB9LCBwcml2YXRlIHF1ZXJ5TW9kZWw6IFF1ZXJ5TW9kZWwpIHt9XG5cbiAgZ2V0T3BlcmF0b3JzKGRhdGF0eXBlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGRhdGF0eXBlKSB7XG4gICAgICBjYXNlICdmbG9hdDQnOlxuICAgICAgY2FzZSAnZmxvYXQ4Jzoge1xuICAgICAgICByZXR1cm4gWyc9JywgJyE9JywgJzwnLCAnPD0nLCAnPicsICc+PSddO1xuICAgICAgfVxuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICBjYXNlICd2YXJjaGFyJzpcbiAgICAgIGNhc2UgJ2NoYXInOiB7XG4gICAgICAgIHJldHVybiBbJz0nLCAnIT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ0lOJywgJ05PVCBJTicsICdMSUtFJywgJ05PVCBMSUtFJywgJ34nLCAnfionLCAnIX4nLCAnIX4qJ107XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBbJz0nLCAnIT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ0lOJywgJ05PVCBJTiddO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHF1b3RlIGlkZW50aWZpZXIgYXMgbGl0ZXJhbCB0byB1c2UgaW4gbWV0YWRhdGEgcXVlcmllc1xuICBxdW90ZUlkZW50QXNMaXRlcmFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeU1vZGVsLnF1b3RlTGl0ZXJhbCh0aGlzLnF1ZXJ5TW9kZWwudW5xdW90ZUlkZW50aWZpZXIodmFsdWUpKTtcbiAgfVxuXG4gIGZpbmRNZXRyaWNUYWJsZSgpIHtcbiAgICAvLyBxdWVyeSB0aGF0IHJldHVybnMgZmlyc3QgdGFibGUgZm91bmQgdGhhdCBoYXMgYSB0aW1lc3RhbXAodHopIGNvbHVtbiBhbmQgYSBmbG9hdCBjb2x1bW5cbiAgICBsZXQgcXVlcnkgPSBgXG5TRUxFQ1Rcblx0cXVvdGVfaWRlbnQodGFibGVfbmFtZSkgYXMgdGFibGVfbmFtZSxcblx0KCBTRUxFQ1Rcblx0ICAgIHF1b3RlX2lkZW50KGNvbHVtbl9uYW1lKSBhcyBjb2x1bW5fbmFtZVxuXHQgIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgY1xuICAgIFdIRVJFXG4gICAgICBjLnRhYmxlX3NjaGVtYSA9IHQudGFibGVfc2NoZW1hIEFORFxuICAgICAgYy50YWJsZV9uYW1lID0gdC50YWJsZV9uYW1lIEFORFxuICAgICAgdWR0X25hbWUgSU4gKCd0aW1lc3RhbXB0eicsJ3RpbWVzdGFtcCcpXG4gICAgT1JERVIgQlkgb3JkaW5hbF9wb3NpdGlvbiBMSU1JVCAxXG4gICkgQVMgdGltZV9jb2x1bW4sXG4gICggU0VMRUNUXG4gICAgICBxdW90ZV9pZGVudChjb2x1bW5fbmFtZSkgQVMgY29sdW1uX25hbWVcbiAgICBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIGNcbiAgICBXSEVSRVxuICAgICAgYy50YWJsZV9zY2hlbWEgPSB0LnRhYmxlX3NjaGVtYSBBTkRcbiAgICAgIGMudGFibGVfbmFtZSA9IHQudGFibGVfbmFtZSBBTkRcbiAgICAgIHVkdF9uYW1lPSdmbG9hdDgnXG4gICAgT1JERVIgQlkgb3JkaW5hbF9wb3NpdGlvbiBMSU1JVCAxXG4gICkgQVMgdmFsdWVfY29sdW1uXG5GUk9NIGluZm9ybWF0aW9uX3NjaGVtYS50YWJsZXMgdFxuV0hFUkUgYDtcbiAgICBxdWVyeSArPSB0aGlzLmJ1aWxkU2NoZW1hQ29uc3RyYWludCgpO1xuICAgIHF1ZXJ5ICs9IGAgQU5EXG4gIEVYSVNUU1xuICAoIFNFTEVDVCAxXG4gICAgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBjXG4gICAgV0hFUkVcbiAgICAgIGMudGFibGVfc2NoZW1hID0gdC50YWJsZV9zY2hlbWEgQU5EXG4gICAgICBjLnRhYmxlX25hbWUgPSB0LnRhYmxlX25hbWUgQU5EXG4gICAgICB1ZHRfbmFtZSBJTiAoJ3RpbWVzdGFtcHR6JywndGltZXN0YW1wJylcbiAgKSBBTkRcbiAgRVhJU1RTXG4gICggU0VMRUNUIDFcbiAgICBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIGNcbiAgICBXSEVSRVxuICAgICAgYy50YWJsZV9zY2hlbWEgPSB0LnRhYmxlX3NjaGVtYSBBTkRcbiAgICAgIGMudGFibGVfbmFtZSA9IHQudGFibGVfbmFtZSBBTkRcbiAgICAgIHVkdF9uYW1lPSdmbG9hdDgnXG4gIClcbkxJTUlUIDFcbjtgO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkU2NoZW1hQ29uc3RyYWludCgpIHtcbiAgICAvLyBxdW90ZV9pZGVudCBwcm90ZWN0cyBoeXBoZW5hdGVkIHNjaGVtZXNcbiAgICBjb25zdCBxdWVyeSA9IGBcbnF1b3RlX2lkZW50KHRhYmxlX3NjaGVtYSkgSU4gKFxuICBTRUxFQ1RcbiAgICBDQVNFIFdIRU4gdHJpbShzW2ldKSA9ICdcIiR1c2VyXCInIFRIRU4gdXNlciBFTFNFIHRyaW0oc1tpXSkgRU5EXG4gIEZST01cbiAgICBnZW5lcmF0ZV9zZXJpZXMoXG4gICAgICBhcnJheV9sb3dlcihzdHJpbmdfdG9fYXJyYXkoY3VycmVudF9zZXR0aW5nKCdzZWFyY2hfcGF0aCcpLCcsJyksMSksXG4gICAgICBhcnJheV91cHBlcihzdHJpbmdfdG9fYXJyYXkoY3VycmVudF9zZXR0aW5nKCdzZWFyY2hfcGF0aCcpLCcsJyksMSlcbiAgICApIGFzIGksXG4gICAgc3RyaW5nX3RvX2FycmF5KGN1cnJlbnRfc2V0dGluZygnc2VhcmNoX3BhdGgnKSwnLCcpIHNcbilgO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkVGFibGVDb25zdHJhaW50KHRhYmxlOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnkgPSAnJztcblxuICAgIC8vIGNoZWNrIGZvciBzY2hlbWEgcXVhbGlmaWVkIHRhYmxlXG4gICAgaWYgKHRhYmxlLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdGFibGUuc3BsaXQoJy4nKTtcbiAgICAgIHF1ZXJ5ID0gJ3RhYmxlX3NjaGVtYSA9ICcgKyB0aGlzLnF1b3RlSWRlbnRBc0xpdGVyYWwocGFydHNbMF0pO1xuICAgICAgcXVlcnkgKz0gJyBBTkQgdGFibGVfbmFtZSA9ICcgKyB0aGlzLnF1b3RlSWRlbnRBc0xpdGVyYWwocGFydHNbMV0pO1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeSA9IHRoaXMuYnVpbGRTY2hlbWFDb25zdHJhaW50KCk7XG4gICAgICBxdWVyeSArPSAnIEFORCB0YWJsZV9uYW1lID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbCh0YWJsZSk7XG5cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG4gIH1cblxuICBidWlsZFRhYmxlUXVlcnkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJ1NFTEVDVCBxdW90ZV9pZGVudCh0YWJsZV9uYW1lKSBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS50YWJsZXMgV0hFUkUgJztcbiAgICBxdWVyeSArPSB0aGlzLmJ1aWxkU2NoZW1hQ29uc3RyYWludCgpO1xuICAgIHF1ZXJ5ICs9ICcgT1JERVIgQlkgdGFibGVfbmFtZSc7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRDb2x1bW5RdWVyeSh0eXBlPzogc3RyaW5nKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJ1NFTEVDVCBxdW90ZV9pZGVudChjb2x1bW5fbmFtZSkgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBXSEVSRSAnO1xuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRUYWJsZUNvbnN0cmFpbnQodGhpcy50YXJnZXQudGFibGUpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd0aW1lJzoge1xuICAgICAgICBxdWVyeSArPVxuICAgICAgICAgIFwiIEFORCBkYXRhX3R5cGUgSU4gKCd0aW1lc3RhbXAgd2l0aG91dCB0aW1lIHpvbmUnLCd0aW1lc3RhbXAgd2l0aCB0aW1lIHpvbmUnLCdiaWdpbnQnLCdpbnRlZ2VyJywnZG91YmxlIHByZWNpc2lvbicsJ3JlYWwnKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ21ldHJpYyc6IHtcbiAgICAgICAgcXVlcnkgKz0gXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ3RleHQnLCdjaGFyYWN0ZXInLCdjaGFyYWN0ZXIgdmFyeWluZycpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAndmFsdWUnOiB7XG4gICAgICAgIHF1ZXJ5ICs9IFwiIEFORCBkYXRhX3R5cGUgSU4gKCdiaWdpbnQnLCdpbnRlZ2VyJywnZG91YmxlIHByZWNpc2lvbicsJ3JlYWwnLCdudW1lcmljJylcIjtcbiAgICAgICAgcXVlcnkgKz0gJyBBTkQgY29sdW1uX25hbWUgPD4gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbCh0aGlzLnRhcmdldC50aW1lQ29sdW1uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdncm91cCc6IHtcbiAgICAgICAgcXVlcnkgKz0gXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ3RleHQnLCdjaGFyYWN0ZXInLCdjaGFyYWN0ZXIgdmFyeWluZycsJ3V1aWQnKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWVyeSArPSAnIE9SREVSIEJZIGNvbHVtbl9uYW1lJztcblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkVmFsdWVRdWVyeShjb2x1bW46IHN0cmluZykge1xuICAgIGxldCBxdWVyeSA9ICdTRUxFQ1QgRElTVElOQ1QgcXVvdGVfbGl0ZXJhbCgnICsgY29sdW1uICsgJyknO1xuICAgIHF1ZXJ5ICs9ICcgRlJPTSAnICsgdGhpcy50YXJnZXQudGFibGU7XG4gICAgcXVlcnkgKz0gJyBXSEVSRSAkX190aW1lRmlsdGVyKCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJyknO1xuICAgIHF1ZXJ5ICs9ICcgQU5EICcgKyBjb2x1bW4gKyAnIElTIE5PVCBOVUxMJztcbiAgICBxdWVyeSArPSAnIE9SREVSIEJZIDEgTElNSVQgMTAwJztcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZERhdGF0eXBlUXVlcnkoY29sdW1uOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUIHVkdF9uYW1lIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgV0hFUkUgJztcbiAgICBxdWVyeSArPSB0aGlzLmJ1aWxkVGFibGVDb25zdHJhaW50KHRoaXMudGFyZ2V0LnRhYmxlKTtcbiAgICBxdWVyeSArPSAnIEFORCBjb2x1bW5fbmFtZSA9ICcgKyB0aGlzLnF1b3RlSWRlbnRBc0xpdGVyYWwoY29sdW1uKTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZEFnZ3JlZ2F0ZVF1ZXJ5KCkge1xuICAgIGxldCBxdWVyeSA9ICdTRUxFQ1QgRElTVElOQ1QgcHJvbmFtZSBGUk9NIHBnX2FnZ3JlZ2F0ZSAnO1xuICAgIHF1ZXJ5ICs9ICdJTk5FUiBKT0lOIHBnX3Byb2MgT04gcGdfYWdncmVnYXRlLmFnZ2Zub2lkID0gcGdfcHJvYy5vaWQgJztcbiAgICBxdWVyeSArPSAnSU5ORVIgSk9JTiBwZ190eXBlIE9OIHBnX3R5cGUub2lkPXBnX3Byb2MucHJvcmV0dHlwZSAnO1xuICAgIHF1ZXJ5ICs9IFwiV0hFUkUgcHJvbmFyZ3M9MSBBTkQgdHlwbmFtZSBJTiAoJ2Zsb2F0OCcpIEFORCBhZ2draW5kPSduJyBPUkRFUiBCWSAxXCI7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQb3N0Z3Jlc0RhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgUG9zdGdyZXNRdWVyeUN0cmwgfSBmcm9tICcuL3F1ZXJ5X2N0cmwnO1xuaW1wb3J0IHsgUG9zdGdyZXNDb25maWdDdHJsIH0gZnJvbSAnLi9jb25maWdfY3RybCc7XG5pbXBvcnQgeyBQb3N0Z3Jlc1F1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmNvbnN0IGRlZmF1bHRRdWVyeSA9IGBTRUxFQ1RcbiAgZXh0cmFjdChlcG9jaCBmcm9tIHRpbWVfY29sdW1uKSBBUyB0aW1lLFxuICB0ZXh0X2NvbHVtbiBhcyB0ZXh0LFxuICB0YWdzX2NvbHVtbiBhcyB0YWdzXG5GUk9NXG4gIG1ldHJpY190YWJsZVxuV0hFUkVcbiAgJF9fdGltZUZpbHRlcih0aW1lX2NvbHVtbilcbmA7XG5cbmNsYXNzIFBvc3RncmVzQW5ub3RhdGlvbnNRdWVyeUN0cmwge1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAncGFydGlhbHMvYW5ub3RhdGlvbnMuZWRpdG9yLmh0bWwnO1xuXG4gIGRlY2xhcmUgYW5ub3RhdGlvbjogYW55O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnkpIHtcbiAgICB0aGlzLmFubm90YXRpb24gPSAkc2NvcGUuY3RybC5hbm5vdGF0aW9uO1xuICAgIHRoaXMuYW5ub3RhdGlvbi5yYXdRdWVyeSA9IHRoaXMuYW5ub3RhdGlvbi5yYXdRdWVyeSB8fCBkZWZhdWx0UXVlcnk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luPFBvc3RncmVzRGF0YXNvdXJjZSwgUG9zdGdyZXNRdWVyeT4oUG9zdGdyZXNEYXRhc291cmNlKVxuICAuc2V0UXVlcnlDdHJsKFBvc3RncmVzUXVlcnlDdHJsKVxuICAuc2V0Q29uZmlnQ3RybChQb3N0Z3Jlc0NvbmZpZ0N0cmwpXG4gIC5zZXRBbm5vdGF0aW9uUXVlcnlDdHJsKFBvc3RncmVzQW5ub3RhdGlvbnNRdWVyeUN0cmwpO1xuIiwiaW1wb3J0IHsgZmluZCwgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBTY29wZWRWYXJzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RncmVzUXVlcnlNb2RlbCB7XG4gIHRhcmdldDogYW55O1xuICB0ZW1wbGF0ZVNydjogYW55O1xuICBzY29wZWRWYXJzOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IGFueSwgdGVtcGxhdGVTcnY/OiBUZW1wbGF0ZVNydiwgc2NvcGVkVmFycz86IFNjb3BlZFZhcnMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnRlbXBsYXRlU3J2ID0gdGVtcGxhdGVTcnY7XG4gICAgdGhpcy5zY29wZWRWYXJzID0gc2NvcGVkVmFycztcblxuICAgIHRhcmdldC5mb3JtYXQgPSB0YXJnZXQuZm9ybWF0IHx8ICd0aW1lX3Nlcmllcyc7XG4gICAgdGFyZ2V0LnRpbWVDb2x1bW4gPSB0YXJnZXQudGltZUNvbHVtbiB8fCAndGltZSc7XG4gICAgdGFyZ2V0Lm1ldHJpY0NvbHVtbiA9IHRhcmdldC5tZXRyaWNDb2x1bW4gfHwgJ25vbmUnO1xuXG4gICAgdGFyZ2V0Lmdyb3VwID0gdGFyZ2V0Lmdyb3VwIHx8IFtdO1xuICAgIHRhcmdldC53aGVyZSA9IHRhcmdldC53aGVyZSB8fCBbeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiAnJF9fdGltZUZpbHRlcicsIHBhcmFtczogW10gfV07XG4gICAgdGFyZ2V0LnNlbGVjdCA9IHRhcmdldC5zZWxlY3QgfHwgW1t7IHR5cGU6ICdjb2x1bW4nLCBwYXJhbXM6IFsndmFsdWUnXSB9XV07XG5cbiAgICAvLyBoYW5kbGUgcHJlIHF1ZXJ5IGd1aSBwYW5lbHMgZ3JhY2VmdWxseVxuICAgIGlmICghKCdyYXdRdWVyeScgaW4gdGhpcy50YXJnZXQpKSB7XG4gICAgICBpZiAoJ3Jhd1NxbCcgaW4gdGFyZ2V0KSB7XG4gICAgICAgIC8vIHByZSBxdWVyeSBndWkgcGFuZWxcbiAgICAgICAgdGFyZ2V0LnJhd1F1ZXJ5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5ldyBwYW5lbFxuICAgICAgICB0YXJnZXQucmF3UXVlcnkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnaXZlIGludGVycG9sYXRlUXVlcnlTdHIgYWNjZXNzIHRvIHRoaXNcbiAgICB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIgPSB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBpZGVudGlmaWVyIHF1b3RpbmcgZnJvbSBpZGVudGlmaWVyIHRvIHVzZSBpbiBtZXRhZGF0YSBxdWVyaWVzXG4gIHVucXVvdGVJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWVbMF0gPT09ICdcIicgJiYgdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcIicpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMSwgdmFsdWUubGVuZ3RoIC0gMSkucmVwbGFjZSgvXCJcIi9nLCAnXCInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHF1b3RlSWRlbnRpZmllcih2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuICdcIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1wiL2csICdcIlwiJykgKyAnXCInO1xuICB9XG5cbiAgcXVvdGVMaXRlcmFsKHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gXCInXCIgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLycvZywgXCInJ1wiKSArIFwiJ1wiO1xuICB9XG5cbiAgZXNjYXBlTGl0ZXJhbCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvJy9nLCBcIicnXCIpO1xuICB9XG5cbiAgaGFzVGltZUdyb3VwKCkge1xuICAgIHJldHVybiBmaW5kKHRoaXMudGFyZ2V0Lmdyb3VwLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICd0aW1lJyk7XG4gIH1cblxuICBoYXNNZXRyaWNDb2x1bW4oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbiAhPT0gJ25vbmUnO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVRdWVyeVN0cih2YWx1ZTogYW55LCB2YXJpYWJsZTogeyBtdWx0aTogYW55OyBpbmNsdWRlQWxsOiBhbnkgfSwgZGVmYXVsdEZvcm1hdEZuOiBhbnkpIHtcbiAgICAvLyBpZiBubyBtdWx0aSBvciBpbmNsdWRlIGFsbCBkbyBub3QgcmVnZXhFc2NhcGVcbiAgICBpZiAoIXZhcmlhYmxlLm11bHRpICYmICF2YXJpYWJsZS5pbmNsdWRlQWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5lc2NhcGVMaXRlcmFsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMucXVvdGVMaXRlcmFsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBlc2NhcGVkVmFsdWVzID0gbWFwKHZhbHVlLCB0aGlzLnF1b3RlTGl0ZXJhbCk7XG4gICAgcmV0dXJuIGVzY2FwZWRWYWx1ZXMuam9pbignLCcpO1xuICB9XG5cbiAgcmVuZGVyKGludGVycG9sYXRlPzogYW55KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG5cbiAgICAvLyBuZXcgcXVlcnkgd2l0aCBubyB0YWJsZSBzZXQgeWV0XG4gICAgaWYgKCF0aGlzLnRhcmdldC5yYXdRdWVyeSAmJiAhKCd0YWJsZScgaW4gdGhpcy50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIHRhcmdldC5yYXdTcWwgPSB0aGlzLmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LnJhd1NxbCwgdGhpcy5zY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnJhd1NxbDtcbiAgICB9XG4gIH1cblxuICBoYXNVbml4RXBvY2hUaW1lY29sdW1uKCkge1xuICAgIHJldHVybiBbJ2ludDQnLCAnaW50OCcsICdmbG9hdDQnLCAnZmxvYXQ4JywgJ251bWVyaWMnXS5pbmRleE9mKHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlKSA+IC0xO1xuICB9XG5cbiAgYnVpbGRUaW1lQ29sdW1uKGFsaWFzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRpbWVHcm91cCA9IHRoaXMuaGFzVGltZUdyb3VwKCk7XG4gICAgbGV0IHF1ZXJ5O1xuICAgIGxldCBtYWNybyA9ICckX190aW1lR3JvdXAnO1xuXG4gICAgaWYgKHRpbWVHcm91cCkge1xuICAgICAgbGV0IGFyZ3M7XG4gICAgICBpZiAodGltZUdyb3VwLnBhcmFtcy5sZW5ndGggPiAxICYmIHRpbWVHcm91cC5wYXJhbXNbMV0gIT09ICdub25lJykge1xuICAgICAgICBhcmdzID0gdGltZUdyb3VwLnBhcmFtcy5qb2luKCcsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmdzID0gdGltZUdyb3VwLnBhcmFtc1swXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhhc1VuaXhFcG9jaFRpbWVjb2x1bW4oKSkge1xuICAgICAgICBtYWNybyA9ICckX191bml4RXBvY2hHcm91cCc7XG4gICAgICB9XG4gICAgICBpZiAoYWxpYXMpIHtcbiAgICAgICAgbWFjcm8gKz0gJ0FsaWFzJztcbiAgICAgIH1cbiAgICAgIHF1ZXJ5ID0gbWFjcm8gKyAnKCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJywnICsgYXJncyArICcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnkgPSB0aGlzLnRhcmdldC50aW1lQ29sdW1uO1xuICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgIHF1ZXJ5ICs9ICcgQVMgXCJ0aW1lXCInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkTWV0cmljQ29sdW1uKCkge1xuICAgIGlmICh0aGlzLmhhc01ldHJpY0NvbHVtbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXQubWV0cmljQ29sdW1uICsgJyBBUyBtZXRyaWMnO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGJ1aWxkVmFsdWVDb2x1bW5zKCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGZvciAoY29uc3QgY29sdW1uIG9mIHRoaXMudGFyZ2V0LnNlbGVjdCkge1xuICAgICAgcXVlcnkgKz0gJyxcXG4gICcgKyB0aGlzLmJ1aWxkVmFsdWVDb2x1bW4oY29sdW1uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZFZhbHVlQ29sdW1uKGNvbHVtbjogYW55KSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG5cbiAgICBjb25zdCBjb2x1bW5OYW1lOiBhbnkgPSBmaW5kKGNvbHVtbiwgKGc6IGFueSkgPT4gZy50eXBlID09PSAnY29sdW1uJyk7XG4gICAgcXVlcnkgPSBjb2x1bW5OYW1lLnBhcmFtc1swXTtcblxuICAgIGNvbnN0IGFnZ3JlZ2F0ZTogYW55ID0gZmluZChjb2x1bW4sIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScgfHwgZy50eXBlID09PSAncGVyY2VudGlsZScpO1xuICAgIGNvbnN0IHdpbmRvd3M6IGFueSA9IGZpbmQoY29sdW1uLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICd3aW5kb3cnIHx8IGcudHlwZSA9PT0gJ21vdmluZ193aW5kb3cnKTtcblxuICAgIGlmIChhZ2dyZWdhdGUpIHtcbiAgICAgIGNvbnN0IGZ1bmMgPSBhZ2dyZWdhdGUucGFyYW1zWzBdO1xuICAgICAgc3dpdGNoIChhZ2dyZWdhdGUudHlwZSkge1xuICAgICAgICBjYXNlICdhZ2dyZWdhdGUnOlxuICAgICAgICAgIGlmIChmdW5jID09PSAnZmlyc3QnIHx8IGZ1bmMgPT09ICdsYXN0Jykge1xuICAgICAgICAgICAgcXVlcnkgPSBmdW5jICsgJygnICsgcXVlcnkgKyAnLCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJyknO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IGZ1bmMgKyAnKCcgKyBxdWVyeSArICcpJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BlcmNlbnRpbGUnOlxuICAgICAgICAgIHF1ZXJ5ID0gZnVuYyArICcoJyArIGFnZ3JlZ2F0ZS5wYXJhbXNbMV0gKyAnKSBXSVRISU4gR1JPVVAgKE9SREVSIEJZICcgKyBxdWVyeSArICcpJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2luZG93cykge1xuICAgICAgY29uc3Qgb3ZlclBhcnRzID0gW107XG4gICAgICBpZiAodGhpcy5oYXNNZXRyaWNDb2x1bW4oKSkge1xuICAgICAgICBvdmVyUGFydHMucHVzaCgnUEFSVElUSU9OIEJZICcgKyB0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4pO1xuICAgICAgfVxuICAgICAgb3ZlclBhcnRzLnB1c2goJ09SREVSIEJZICcgKyB0aGlzLmJ1aWxkVGltZUNvbHVtbihmYWxzZSkpO1xuXG4gICAgICBjb25zdCBvdmVyID0gb3ZlclBhcnRzLmpvaW4oJyAnKTtcbiAgICAgIGxldCBjdXJyOiBzdHJpbmc7XG4gICAgICBsZXQgcHJldjogc3RyaW5nO1xuICAgICAgc3dpdGNoICh3aW5kb3dzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnd2luZG93JzpcbiAgICAgICAgICBzd2l0Y2ggKHdpbmRvd3MucGFyYW1zWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWx0YSc6XG4gICAgICAgICAgICAgIGN1cnIgPSBxdWVyeTtcbiAgICAgICAgICAgICAgcHJldiA9ICdsYWcoJyArIGN1cnIgKyAnKSBPVkVSICgnICsgb3ZlciArICcpJztcbiAgICAgICAgICAgICAgcXVlcnkgPSBjdXJyICsgJyAtICcgKyBwcmV2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luY3JlYXNlJzpcbiAgICAgICAgICAgICAgY3VyciA9IHF1ZXJ5O1xuICAgICAgICAgICAgICBwcmV2ID0gJ2xhZygnICsgY3VyciArICcpIE9WRVIgKCcgKyBvdmVyICsgJyknO1xuICAgICAgICAgICAgICBxdWVyeSA9ICcoQ0FTRSBXSEVOICcgKyBjdXJyICsgJyA+PSAnICsgcHJldiArICcgVEhFTiAnICsgY3VyciArICcgLSAnICsgcHJldjtcbiAgICAgICAgICAgICAgcXVlcnkgKz0gJyBXSEVOICcgKyBwcmV2ICsgJyBJUyBOVUxMIFRIRU4gTlVMTCBFTFNFICcgKyBjdXJyICsgJyBFTkQpJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyYXRlJzpcbiAgICAgICAgICAgICAgbGV0IHRpbWVDb2x1bW4gPSB0aGlzLnRhcmdldC50aW1lQ29sdW1uO1xuICAgICAgICAgICAgICBpZiAoYWdncmVnYXRlKSB7XG4gICAgICAgICAgICAgICAgdGltZUNvbHVtbiA9ICdtaW4oJyArIHRpbWVDb2x1bW4gKyAnKSc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjdXJyID0gcXVlcnk7XG4gICAgICAgICAgICAgIHByZXYgPSAnbGFnKCcgKyBjdXJyICsgJykgT1ZFUiAoJyArIG92ZXIgKyAnKSc7XG4gICAgICAgICAgICAgIHF1ZXJ5ID0gJyhDQVNFIFdIRU4gJyArIGN1cnIgKyAnID49ICcgKyBwcmV2ICsgJyBUSEVOICcgKyBjdXJyICsgJyAtICcgKyBwcmV2O1xuICAgICAgICAgICAgICBxdWVyeSArPSAnIFdIRU4gJyArIHByZXYgKyAnIElTIE5VTEwgVEhFTiBOVUxMIEVMU0UgJyArIGN1cnIgKyAnIEVORCknO1xuICAgICAgICAgICAgICBxdWVyeSArPSAnL2V4dHJhY3QoZXBvY2ggZnJvbSAnICsgdGltZUNvbHVtbiArICcgLSBsYWcoJyArIHRpbWVDb2x1bW4gKyAnKSBPVkVSICgnICsgb3ZlciArICcpKSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcXVlcnkgPSB3aW5kb3dzLnBhcmFtc1swXSArICcoJyArIHF1ZXJ5ICsgJykgT1ZFUiAoJyArIG92ZXIgKyAnKSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW92aW5nX3dpbmRvdyc6XG4gICAgICAgICAgcXVlcnkgPSB3aW5kb3dzLnBhcmFtc1swXSArICcoJyArIHF1ZXJ5ICsgJykgT1ZFUiAoJyArIG92ZXIgKyAnIFJPV1MgJyArIHdpbmRvd3MucGFyYW1zWzFdICsgJyBQUkVDRURJTkcpJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGlhczogYW55ID0gZmluZChjb2x1bW4sIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2FsaWFzJyk7XG4gICAgaWYgKGFsaWFzKSB7XG4gICAgICBxdWVyeSArPSAnIEFTICcgKyB0aGlzLnF1b3RlSWRlbnRpZmllcihhbGlhcy5wYXJhbXNbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkV2hlcmVDbGF1c2UoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgY29uc3QgY29uZGl0aW9ucyA9IG1hcCh0aGlzLnRhcmdldC53aGVyZSwgKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIHN3aXRjaCAodGFnLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWFjcm8nOlxuICAgICAgICAgIHJldHVybiB0YWcubmFtZSArICcoJyArIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gKyAnKSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V4cHJlc3Npb24nOlxuICAgICAgICAgIHJldHVybiB0YWcucGFyYW1zLmpvaW4oJyAnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHF1ZXJ5ID0gJ1xcbldIRVJFXFxuICAnICsgY29uZGl0aW9ucy5qb2luKCcgQU5EXFxuICAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZEdyb3VwQ2xhdXNlKCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGxldCBncm91cFNlY3Rpb24gPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXJnZXQuZ3JvdXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnRhcmdldC5ncm91cFtpXTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBncm91cFNlY3Rpb24gKz0gJywgJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0LnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICBncm91cFNlY3Rpb24gKz0gJzEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JvdXBTZWN0aW9uICs9IHBhcnQucGFyYW1zWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChncm91cFNlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9ICdcXG5HUk9VUCBCWSAnICsgZ3JvdXBTZWN0aW9uO1xuICAgICAgaWYgKHRoaXMuaGFzTWV0cmljQ29sdW1uKCkpIHtcbiAgICAgICAgcXVlcnkgKz0gJywyJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRRdWVyeSgpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUJztcblxuICAgIHF1ZXJ5ICs9ICdcXG4gICcgKyB0aGlzLmJ1aWxkVGltZUNvbHVtbigpO1xuICAgIGlmICh0aGlzLmhhc01ldHJpY0NvbHVtbigpKSB7XG4gICAgICBxdWVyeSArPSAnLFxcbiAgJyArIHRoaXMuYnVpbGRNZXRyaWNDb2x1bW4oKTtcbiAgICB9XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFZhbHVlQ29sdW1ucygpO1xuXG4gICAgcXVlcnkgKz0gJ1xcbkZST00gJyArIHRoaXMudGFyZ2V0LnRhYmxlO1xuXG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFdoZXJlQ2xhdXNlKCk7XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZEdyb3VwQ2xhdXNlKCk7XG5cbiAgICBxdWVyeSArPSAnXFxuT1JERVIgQlkgMSc7XG4gICAgaWYgKHRoaXMuaGFzTWV0cmljQ29sdW1uKCkpIHtcbiAgICAgIHF1ZXJ5ICs9ICcsMic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBjbG9uZSwgZmlsdGVyLCBmaW5kLCBmaW5kSW5kZXgsIGluZGV4T2YsIG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IHsgUG9zdGdyZXNNZXRhUXVlcnkgfSBmcm9tICcuL21ldGFfcXVlcnknO1xuaW1wb3J0IHsgUXVlcnlDdHJsIH0gZnJvbSAnYXBwL3BsdWdpbnMvc2RrJztcbmltcG9ydCB7IFNxbFBhcnQgfSBmcm9tICdhcHAvYW5ndWxhci9jb21wb25lbnRzL3NxbF9wYXJ0L3NxbF9wYXJ0JztcbmltcG9ydCBQb3N0Z3Jlc1F1ZXJ5TW9kZWwgZnJvbSAnLi9wb3N0Z3Jlc19xdWVyeV9tb2RlbCc7XG5pbXBvcnQgc3FsUGFydCBmcm9tICcuL3NxbF9wYXJ0JztcbmltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IFBhbmVsRXZlbnRzLCBRdWVyeVJlc3VsdE1ldGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFZhcmlhYmxlV2l0aE11bHRpU3VwcG9ydCB9IGZyb20gJ2FwcC9mZWF0dXJlcy92YXJpYWJsZXMvdHlwZXMnO1xuaW1wb3J0IHsgVGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFNob3dDb25maXJtTW9kYWxFdmVudCB9IGZyb20gJ2FwcC90eXBlcy9ldmVudHMnO1xuXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBgU0VMRUNUXG4gICRfX3RpbWUodGltZV9jb2x1bW4pLFxuICB2YWx1ZTFcbkZST01cbiAgbWV0cmljX3RhYmxlXG5XSEVSRVxuICAkX190aW1lRmlsdGVyKHRpbWVfY29sdW1uKVxuYDtcblxuZXhwb3J0IGNsYXNzIFBvc3RncmVzUXVlcnlDdHJsIGV4dGVuZHMgUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL3F1ZXJ5LmVkaXRvci5odG1sJztcblxuICBmb3JtYXRzOiBhbnlbXTtcbiAgcXVlcnlNb2RlbDogUG9zdGdyZXNRdWVyeU1vZGVsO1xuICBtZXRhQnVpbGRlcjogUG9zdGdyZXNNZXRhUXVlcnk7XG4gIGxhc3RRdWVyeU1ldGE/OiBRdWVyeVJlc3VsdE1ldGE7XG4gIGxhc3RRdWVyeUVycm9yPzogc3RyaW5nO1xuICBzaG93SGVscCA9IGZhbHNlO1xuICB0YWJsZVNlZ21lbnQ6IGFueTtcbiAgd2hlcmVBZGQ6IGFueTtcbiAgdGltZUNvbHVtblNlZ21lbnQ6IGFueTtcbiAgbWV0cmljQ29sdW1uU2VnbWVudDogYW55O1xuICBzZWxlY3RNZW51OiBhbnlbXSA9IFtdO1xuICBzZWxlY3RQYXJ0czogU3FsUGFydFtdW10gPSBbW11dO1xuICBncm91cFBhcnRzOiBTcWxQYXJ0W10gPSBbXTtcbiAgd2hlcmVQYXJ0czogU3FsUGFydFtdID0gW107XG4gIGdyb3VwQWRkOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAkc2NvcGU6IGFueSxcbiAgICAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSxcbiAgICBwcml2YXRlIHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydixcbiAgICBwcml2YXRlIHVpU2VnbWVudFNydjogYW55XG4gICkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgIHRoaXMucXVlcnlNb2RlbCA9IG5ldyBQb3N0Z3Jlc1F1ZXJ5TW9kZWwodGhpcy50YXJnZXQsIHRlbXBsYXRlU3J2LCB0aGlzLnBhbmVsLnNjb3BlZFZhcnMpO1xuICAgIHRoaXMubWV0YUJ1aWxkZXIgPSBuZXcgUG9zdGdyZXNNZXRhUXVlcnkodGhpcy50YXJnZXQsIHRoaXMucXVlcnlNb2RlbCk7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG5cbiAgICB0aGlzLmZvcm1hdHMgPSBbXG4gICAgICB7IHRleHQ6ICdUaW1lIHNlcmllcycsIHZhbHVlOiAndGltZV9zZXJpZXMnIH0sXG4gICAgICB7IHRleHQ6ICdUYWJsZScsIHZhbHVlOiAndGFibGUnIH0sXG4gICAgXTtcblxuICAgIGlmICghdGhpcy50YXJnZXQucmF3U3FsKSB7XG4gICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIHdoZW4gaW4gdGFibGUgcGFuZWxcbiAgICAgIGlmICh0aGlzLnBhbmVsQ3RybC5wYW5lbC50eXBlID09PSAndGFibGUnKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LmZvcm1hdCA9ICd0YWJsZSc7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJhd1NxbCA9ICdTRUxFQ1QgMSc7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJhd1F1ZXJ5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJhd1NxbCA9IGRlZmF1bHRRdWVyeTtcbiAgICAgICAgdGhpcy5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmZpbmRNZXRyaWNUYWJsZSgpKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudGFibGUgPSByZXN1bHRbMF0udGV4dDtcbiAgICAgICAgICAgIGxldCBzZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh0aGlzLnRhcmdldC50YWJsZSk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VnbWVudC5odG1sID0gc2VnbWVudC5odG1sO1xuICAgICAgICAgICAgdGhpcy50YWJsZVNlZ21lbnQudmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnRhcmdldC50aW1lQ29sdW1uID0gcmVzdWx0WzFdLnRleHQ7XG4gICAgICAgICAgICBzZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh0aGlzLnRhcmdldC50aW1lQ29sdW1uKTtcbiAgICAgICAgICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQuaHRtbCA9IHNlZ21lbnQuaHRtbDtcbiAgICAgICAgICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQudmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnRhcmdldC50aW1lQ29sdW1uVHlwZSA9ICd0aW1lc3RhbXAnO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gW1t7IHR5cGU6ICdjb2x1bW4nLCBwYXJhbXM6IFtyZXN1bHRbMl0udGV4dF0gfV1dO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy50YXJnZXQudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGVTZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB2YWx1ZTogJ3NlbGVjdCB0YWJsZScsIGZha2U6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFibGVTZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGFibGUpO1xuICAgIH1cblxuICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQgPSB1aVNlZ21lbnRTcnYubmV3U2VnbWVudCh0aGlzLnRhcmdldC50aW1lQ29sdW1uKTtcbiAgICB0aGlzLm1ldHJpY0NvbHVtblNlZ21lbnQgPSB1aVNlZ21lbnRTcnYubmV3U2VnbWVudCh0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4pO1xuXG4gICAgdGhpcy5idWlsZFNlbGVjdE1lbnUoKTtcbiAgICB0aGlzLndoZXJlQWRkID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xuICAgIHRoaXMuZ3JvdXBBZGQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XG5cbiAgICB0aGlzLnBhbmVsQ3RybC5ldmVudHMub24oUGFuZWxFdmVudHMuZGF0YVJlY2VpdmVkLCB0aGlzLm9uRGF0YVJlY2VpdmVkLmJpbmQodGhpcyksICRzY29wZSk7XG4gICAgdGhpcy5wYW5lbEN0cmwuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFFcnJvciwgdGhpcy5vbkRhdGFFcnJvci5iaW5kKHRoaXMpLCAkc2NvcGUpO1xuICB9XG5cbiAgdXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpIHtcbiAgICBpZiAoIXRoaXMudGFyZ2V0LnJhd1F1ZXJ5KSB7XG4gICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSB0aGlzLnF1ZXJ5TW9kZWwuYnVpbGRRdWVyeSgpO1xuICAgIH1cblxuICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKTtcbiAgfVxuXG4gIHRpbWVzY2FsZUFnZ0NoZWNrKCkge1xuICAgIGNvbnN0IGFnZ0luZGV4ID0gdGhpcy5maW5kQWdncmVnYXRlSW5kZXgodGhpcy5zZWxlY3RQYXJ0c1swXSk7XG5cbiAgICAvLyBhZGQgb3IgcmVtb3ZlIFRpbWVzY2FsZURCIGFnZ3JlZ2F0ZSBmdW5jdGlvbnMgYXMgbmVlZGVkXG4gICAgaWYgKGFnZ0luZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgYmFzZU9wdHMgPSB0aGlzLnNlbGVjdFBhcnRzWzBdW2FnZ0luZGV4XS5kZWYucGFyYW1zWzBdLmJhc2VPcHRpb25zO1xuICAgICAgY29uc3QgdGltZXNjYWxlT3B0cyA9IGJhc2VPcHRzLmNvbmNhdCh0aGlzLnNlbGVjdFBhcnRzWzBdW2FnZ0luZGV4XS5kZWYucGFyYW1zWzBdLnRpbWVzY2FsZU9wdGlvbnMpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhc291cmNlLmpzb25EYXRhLnRpbWVzY2FsZWRiID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFydHNbMF1bYWdnSW5kZXhdLmRlZi5wYXJhbXNbMF0ub3B0aW9ucyA9IHRpbWVzY2FsZU9wdHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdFBhcnRzWzBdW2FnZ0luZGV4XS5kZWYucGFyYW1zWzBdLm9wdGlvbnMgPSBiYXNlT3B0cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0UGFydHMgPSBtYXAodGhpcy50YXJnZXQuc2VsZWN0LCAocGFydHM6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIG1hcChwYXJ0cywgc3FsUGFydC5jcmVhdGUpLmZpbHRlcigobikgPT4gbik7XG4gICAgfSk7XG4gICAgdGhpcy50aW1lc2NhbGVBZ2dDaGVjaygpO1xuICAgIHRoaXMud2hlcmVQYXJ0cyA9IG1hcCh0aGlzLnRhcmdldC53aGVyZSwgc3FsUGFydC5jcmVhdGUpLmZpbHRlcigobikgPT4gbik7XG4gICAgdGhpcy5ncm91cFBhcnRzID0gbWFwKHRoaXMudGFyZ2V0Lmdyb3VwLCBzcWxQYXJ0LmNyZWF0ZSkuZmlsdGVyKChuKSA9PiBuKTtcbiAgfVxuXG4gIHVwZGF0ZVBlcnNpc3RlZFBhcnRzKCkge1xuICAgIHRoaXMudGFyZ2V0LnNlbGVjdCA9IG1hcCh0aGlzLnNlbGVjdFBhcnRzLCAoc2VsZWN0UGFydHMpID0+IHtcbiAgICAgIHJldHVybiBtYXAoc2VsZWN0UGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogcGFydC5kZWYudHlwZSwgZGF0YXR5cGU6IHBhcnQuZGF0YXR5cGUsIHBhcmFtczogcGFydC5wYXJhbXMgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMudGltZXNjYWxlQWdnQ2hlY2soKTtcbiAgICB0aGlzLnRhcmdldC53aGVyZSA9IG1hcCh0aGlzLndoZXJlUGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhcnQuZGVmLnR5cGUsIGRhdGF0eXBlOiBwYXJ0LmRhdGF0eXBlLCBuYW1lOiBwYXJ0Lm5hbWUsIHBhcmFtczogcGFydC5wYXJhbXMgfTtcbiAgICB9KTtcbiAgICB0aGlzLnRhcmdldC5ncm91cCA9IG1hcCh0aGlzLmdyb3VwUGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhcnQuZGVmLnR5cGUsIGRhdGF0eXBlOiBwYXJ0LmRhdGF0eXBlLCBwYXJhbXM6IHBhcnQucGFyYW1zIH07XG4gICAgfSk7XG4gIH1cblxuICBidWlsZFNlbGVjdE1lbnUoKSB7XG4gICAgdGhpcy5zZWxlY3RNZW51ID0gW107XG4gICAgY29uc3QgYWdncmVnYXRlcyA9IHtcbiAgICAgIHRleHQ6ICdBZ2dyZWdhdGUgRnVuY3Rpb25zJyxcbiAgICAgIHZhbHVlOiAnYWdncmVnYXRlJyxcbiAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgeyB0ZXh0OiAnQXZlcmFnZScsIHZhbHVlOiAnYXZnJyB9LFxuICAgICAgICB7IHRleHQ6ICdDb3VudCcsIHZhbHVlOiAnY291bnQnIH0sXG4gICAgICAgIHsgdGV4dDogJ01heGltdW0nLCB2YWx1ZTogJ21heCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWluaW11bScsIHZhbHVlOiAnbWluJyB9LFxuICAgICAgICB7IHRleHQ6ICdTdW0nLCB2YWx1ZTogJ3N1bScgfSxcbiAgICAgICAgeyB0ZXh0OiAnU3RhbmRhcmQgZGV2aWF0aW9uJywgdmFsdWU6ICdzdGRkZXYnIH0sXG4gICAgICAgIHsgdGV4dDogJ1ZhcmlhbmNlJywgdmFsdWU6ICd2YXJpYW5jZScgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIC8vIGZpcnN0IGFuZCBsYXN0IGFnZ3JlZ2F0ZSBhcmUgdGltZXNjYWxlZGIgc3BlY2lmaWNcbiAgICBpZiAodGhpcy5kYXRhc291cmNlLmpzb25EYXRhLnRpbWVzY2FsZWRiID09PSB0cnVlKSB7XG4gICAgICBhZ2dyZWdhdGVzLnN1Ym1lbnUucHVzaCh7IHRleHQ6ICdGaXJzdCcsIHZhbHVlOiAnZmlyc3QnIH0pO1xuICAgICAgYWdncmVnYXRlcy5zdWJtZW51LnB1c2goeyB0ZXh0OiAnTGFzdCcsIHZhbHVlOiAnbGFzdCcgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RNZW51LnB1c2goYWdncmVnYXRlcyk7XG5cbiAgICAvLyBvcmRlcmVkIHNldCBhZ2dyZWdhdGVzIHJlcXVpcmUgcG9zdGdyZXMgOS40K1xuICAgIGlmICh0aGlzLmRhdGFzb3VyY2UuanNvbkRhdGEucG9zdGdyZXNWZXJzaW9uID49IDkwNCkge1xuICAgICAgY29uc3QgYWdncmVnYXRlczIgPSB7XG4gICAgICAgIHRleHQ6ICdPcmRlcmVkLVNldCBBZ2dyZWdhdGUgRnVuY3Rpb25zJyxcbiAgICAgICAgdmFsdWU6ICdwZXJjZW50aWxlJyxcbiAgICAgICAgc3VibWVudTogW1xuICAgICAgICAgIHsgdGV4dDogJ1BlcmNlbnRpbGUgKGNvbnRpbnVvdXMpJywgdmFsdWU6ICdwZXJjZW50aWxlX2NvbnQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUGVyY2VudGlsZSAoZGlzY3JldGUpJywgdmFsdWU6ICdwZXJjZW50aWxlX2Rpc2MnIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgICAgdGhpcy5zZWxlY3RNZW51LnB1c2goYWdncmVnYXRlczIpO1xuICAgIH1cblxuICAgIGNvbnN0IHdpbmRvd3MgPSB7XG4gICAgICB0ZXh0OiAnV2luZG93IEZ1bmN0aW9ucycsXG4gICAgICB2YWx1ZTogJ3dpbmRvdycsXG4gICAgICBzdWJtZW51OiBbXG4gICAgICAgIHsgdGV4dDogJ0RlbHRhJywgdmFsdWU6ICdkZWx0YScgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW5jcmVhc2UnLCB2YWx1ZTogJ2luY3JlYXNlJyB9LFxuICAgICAgICB7IHRleHQ6ICdSYXRlJywgdmFsdWU6ICdyYXRlJyB9LFxuICAgICAgICB7IHRleHQ6ICdTdW0nLCB2YWx1ZTogJ3N1bScgfSxcbiAgICAgICAgeyB0ZXh0OiAnTW92aW5nIEF2ZXJhZ2UnLCB2YWx1ZTogJ2F2ZycsIHR5cGU6ICdtb3Zpbmdfd2luZG93JyB9LFxuICAgICAgXSxcbiAgICB9O1xuICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKHdpbmRvd3MpO1xuXG4gICAgdGhpcy5zZWxlY3RNZW51LnB1c2goeyB0ZXh0OiAnQWxpYXMnLCB2YWx1ZTogJ2FsaWFzJyB9KTtcbiAgICB0aGlzLnNlbGVjdE1lbnUucHVzaCh7IHRleHQ6ICdDb2x1bW4nLCB2YWx1ZTogJ2NvbHVtbicgfSk7XG4gIH1cblxuICB0b2dnbGVFZGl0b3JNb2RlKCkge1xuICAgIGlmICh0aGlzLnRhcmdldC5yYXdRdWVyeSkge1xuICAgICAgYXBwRXZlbnRzLnB1Ymxpc2goXG4gICAgICAgIG5ldyBTaG93Q29uZmlybU1vZGFsRXZlbnQoe1xuICAgICAgICAgIHRpdGxlOiAnV2FybmluZycsXG4gICAgICAgICAgdGV4dDI6ICdTd2l0Y2hpbmcgdG8gcXVlcnkgYnVpbGRlciBtYXkgb3ZlcndyaXRlIHlvdXIgcmF3IFNRTC4nLFxuICAgICAgICAgIGljb246ICdleGNsYW1hdGlvbi10cmlhbmdsZScsXG4gICAgICAgICAgeWVzVGV4dDogJ1N3aXRjaCcsXG4gICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBUaGlzIGNvdWxkIGJlIGNhbGxlZCBmcm9tIFJlYWN0LCBzbyB3cmFwIGluICRldmFsQXN5bmMuXG4gICAgICAgICAgICAvLyBXaWxsIHRoZW4gZWl0aGVyIHJ1biBhcyBwYXJ0IG9mIHRoZSBjdXJyZW50IGRpZ2VzdCBjeWNsZSBvciB0cmlnZ2VyIGEgbmV3IG9uZS5cbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLiRldmFsQXN5bmMoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yYXdRdWVyeSA9ICF0aGlzLnRhcmdldC5yYXdRdWVyeTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGNvdWxkIGJlIGNhbGxlZCBmcm9tIFJlYWN0LCBzbyB3cmFwIGluICRldmFsQXN5bmMuXG4gICAgICAvLyBXaWxsIHRoZW4gZWl0aGVyIHJ1biBhcyBwYXJ0IG9mIHRoZSBjdXJyZW50IGRpZ2VzdCBjeWNsZSBvciB0cmlnZ2VyIGEgbmV3IG9uZS5cbiAgICAgIHRoaXMuJHNjb3BlLiRldmFsQXN5bmMoKCkgPT4ge1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdRdWVyeSA9ICF0aGlzLnRhcmdldC5yYXdRdWVyeTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0UGx1c0J1dHRvbihidXR0b246IHsgaHRtbDogYW55OyB2YWx1ZTogYW55OyB0eXBlOiBhbnk7IGZha2U6IGFueSB9KSB7XG4gICAgY29uc3QgcGx1c0J1dHRvbiA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICBidXR0b24uaHRtbCA9IHBsdXNCdXR0b24uaHRtbDtcbiAgICBidXR0b24udmFsdWUgPSBwbHVzQnV0dG9uLnZhbHVlO1xuICAgIGJ1dHRvbi50eXBlID0gcGx1c0J1dHRvbi50eXBlO1xuICAgIGJ1dHRvbi5mYWtlID0gcGx1c0J1dHRvbi5mYWtlO1xuICB9XG5cbiAgZ2V0VGFibGVTZWdtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRUYWJsZVF1ZXJ5KCkpXG4gICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHRhYmxlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnRhcmdldC50YWJsZSA9IHRoaXMudGFibGVTZWdtZW50LnZhbHVlO1xuICAgIHRoaXMudGFyZ2V0LndoZXJlID0gW107XG4gICAgdGhpcy50YXJnZXQuZ3JvdXAgPSBbXTtcbiAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcblxuICAgIGNvbnN0IHNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KCdub25lJyk7XG4gICAgdGhpcy5tZXRyaWNDb2x1bW5TZWdtZW50Lmh0bWwgPSBzZWdtZW50Lmh0bWw7XG4gICAgdGhpcy5tZXRyaWNDb2x1bW5TZWdtZW50LnZhbHVlID0gc2VnbWVudC52YWx1ZTtcbiAgICB0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4gPSAnbm9uZSc7XG5cbiAgICBjb25zdCB0YXNrMSA9IHRoaXMuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCd0aW1lJykpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAvLyBjaGVjayBpZiB0aW1lIGNvbHVtbiBpcyBzdGlsbCB2YWxpZFxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwICYmICFmaW5kKHJlc3VsdCwgKHI6IGFueSkgPT4gci50ZXh0ID09PSB0aGlzLnRhcmdldC50aW1lQ29sdW1uKSkge1xuICAgICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudChyZXN1bHRbMF0udGV4dCk7XG4gICAgICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQuaHRtbCA9IHNlZ21lbnQuaHRtbDtcbiAgICAgICAgdGhpcy50aW1lQ29sdW1uU2VnbWVudC52YWx1ZSA9IHNlZ21lbnQudmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50aW1lQ29sdW1uQ2hhbmdlZChmYWxzZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGFzazIgPSB0aGlzLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgndmFsdWUnKSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnRhcmdldC5zZWxlY3QgPSBbW3sgdHlwZTogJ2NvbHVtbicsIHBhcmFtczogW3Jlc3VsdFswXS50ZXh0XSB9XV07XG4gICAgICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgUHJvbWlzZS5hbGwoW3Rhc2sxLCB0YXNrMl0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRUaW1lQ29sdW1uU2VnbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ3RpbWUnKSlcbiAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdGltZUNvbHVtbkNoYW5nZWQocmVmcmVzaD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRhcmdldC50aW1lQ29sdW1uID0gdGhpcy50aW1lQ29sdW1uU2VnbWVudC52YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGREYXRhdHlwZVF1ZXJ5KHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4pKVxuICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlICE9PSByZXN1bHRbMF0udGV4dCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudGltZUNvbHVtblR5cGUgPSByZXN1bHRbMF0udGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHBhcnRNb2RlbDtcbiAgICAgICAgICBpZiAodGhpcy5xdWVyeU1vZGVsLmhhc1VuaXhFcG9jaFRpbWVjb2x1bW4oKSkge1xuICAgICAgICAgICAgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiAnJF9fdW5peEVwb2NoRmlsdGVyJywgcGFyYW1zOiBbXSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiAnJF9fdGltZUZpbHRlcicsIHBhcmFtczogW10gfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMud2hlcmVQYXJ0cy5sZW5ndGggPj0gMSAmJiB0aGlzLndoZXJlUGFydHNbMF0uZGVmLnR5cGUgPT09ICdtYWNybycpIHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgY3VycmVudCBtYWNyb1xuICAgICAgICAgICAgdGhpcy53aGVyZVBhcnRzWzBdID0gcGFydE1vZGVsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndoZXJlUGFydHMuc3BsaWNlKDAsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgICAgICBpZiAocmVmcmVzaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRNZXRyaWNDb2x1bW5TZWdtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgnbWV0cmljJykpXG4gICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoeyBhZGROb25lOiB0cnVlIH0pKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG1ldHJpY0NvbHVtbkNoYW5nZWQoKSB7XG4gICAgdGhpcy50YXJnZXQubWV0cmljQ29sdW1uID0gdGhpcy5tZXRyaWNDb2x1bW5TZWdtZW50LnZhbHVlO1xuICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICB9XG5cbiAgb25EYXRhUmVjZWl2ZWQoZGF0YUxpc3Q6IGFueSkge1xuICAgIHRoaXMubGFzdFF1ZXJ5RXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXN0UXVlcnlNZXRhID0gZGF0YUxpc3RbMF0/Lm1ldGE7XG4gIH1cblxuICBvbkRhdGFFcnJvcihlcnI6IGFueSkge1xuICAgIGlmIChlcnIuZGF0YSAmJiBlcnIuZGF0YS5yZXN1bHRzKSB7XG4gICAgICBjb25zdCBxdWVyeVJlcyA9IGVyci5kYXRhLnJlc3VsdHNbdGhpcy50YXJnZXQucmVmSWRdO1xuICAgICAgaWYgKHF1ZXJ5UmVzKSB7XG4gICAgICAgIHRoaXMubGFzdFF1ZXJ5RXJyb3IgPSBxdWVyeVJlcy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0cmFuc2Zvcm1Ub1NlZ21lbnRzKGNvbmZpZzogeyBhZGROb25lPzogYW55OyBhZGRUZW1wbGF0ZVZhcnM/OiBhbnk7IHRlbXBsYXRlUXVvdGVyPzogYW55IH0pIHtcbiAgICByZXR1cm4gKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSBtYXAocmVzdWx0cywgKHNlZ21lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoe1xuICAgICAgICAgIHZhbHVlOiBzZWdtZW50LnRleHQsXG4gICAgICAgICAgZXhwYW5kYWJsZTogc2VnbWVudC5leHBhbmRhYmxlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29uZmlnLmFkZFRlbXBsYXRlVmFycykge1xuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhYmxlIG9mIHRoaXMudGVtcGxhdGVTcnYuZ2V0VmFyaWFibGVzKCkpIHtcbiAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgdmFsdWUgPSAnJCcgKyB2YXJpYWJsZS5uYW1lO1xuICAgICAgICAgIGlmIChjb25maWcudGVtcGxhdGVRdW90ZXIgJiYgKHZhcmlhYmxlIGFzIHVua25vd24gYXMgVmFyaWFibGVXaXRoTXVsdGlTdXBwb3J0KS5tdWx0aSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhbHVlID0gY29uZmlnLnRlbXBsYXRlUXVvdGVyKHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWdtZW50cy51bnNoaWZ0KFxuICAgICAgICAgICAgdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7XG4gICAgICAgICAgICAgIHR5cGU6ICd0ZW1wbGF0ZScsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmFkZE5vbmUpIHtcbiAgICAgICAgc2VnbWVudHMudW5zaGlmdCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ3RlbXBsYXRlJywgdmFsdWU6ICdub25lJywgZXhwYW5kYWJsZTogdHJ1ZSB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWdtZW50cztcbiAgICB9O1xuICB9XG5cbiAgZmluZEFnZ3JlZ2F0ZUluZGV4KHNlbGVjdFBhcnRzOiBhbnkpIHtcbiAgICByZXR1cm4gZmluZEluZGV4KHNlbGVjdFBhcnRzLCAocDogYW55KSA9PiBwLmRlZi50eXBlID09PSAnYWdncmVnYXRlJyB8fCBwLmRlZi50eXBlID09PSAncGVyY2VudGlsZScpO1xuICB9XG5cbiAgZmluZFdpbmRvd0luZGV4KHNlbGVjdFBhcnRzOiBhbnkpIHtcbiAgICByZXR1cm4gZmluZEluZGV4KHNlbGVjdFBhcnRzLCAocDogYW55KSA9PiBwLmRlZi50eXBlID09PSAnd2luZG93JyB8fCBwLmRlZi50eXBlID09PSAnbW92aW5nX3dpbmRvdycpO1xuICB9XG5cbiAgYWRkU2VsZWN0UGFydChzZWxlY3RQYXJ0czogYW55W10sIGl0ZW06IHsgdmFsdWU6IGFueSB9LCBzdWJJdGVtOiB7IHR5cGU6IGFueTsgdmFsdWU6IGFueSB9KSB7XG4gICAgbGV0IHBhcnRUeXBlID0gaXRlbS52YWx1ZTtcbiAgICBpZiAoc3ViSXRlbSAmJiBzdWJJdGVtLnR5cGUpIHtcbiAgICAgIHBhcnRUeXBlID0gc3ViSXRlbS50eXBlO1xuICAgIH1cbiAgICBsZXQgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiBwYXJ0VHlwZSB9KTtcbiAgICBpZiAoc3ViSXRlbSkge1xuICAgICAgcGFydE1vZGVsLnBhcmFtc1swXSA9IHN1Ykl0ZW0udmFsdWU7XG4gICAgfVxuICAgIGxldCBhZGRBbGlhcyA9IGZhbHNlO1xuXG4gICAgc3dpdGNoIChwYXJ0VHlwZSkge1xuICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgY29uc3QgcGFydHMgPSBtYXAoc2VsZWN0UGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBwYXJhbXM6IGNsb25lKHBhcnQucGFyYW1zKSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFydHMucHVzaChwYXJ0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGVyY2VudGlsZSc6XG4gICAgICBjYXNlICdhZ2dyZWdhdGUnOlxuICAgICAgICAvLyBhZGQgZ3JvdXAgYnkgaWYgbm8gZ3JvdXAgYnkgeWV0XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5ncm91cC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmFkZEdyb3VwKCd0aW1lJywgJyRfX2ludGVydmFsJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWdnSW5kZXggPSB0aGlzLmZpbmRBZ2dyZWdhdGVJbmRleChzZWxlY3RQYXJ0cyk7XG4gICAgICAgIGlmIChhZ2dJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgYWdncmVnYXRpb25cbiAgICAgICAgICBzZWxlY3RQYXJ0c1thZ2dJbmRleF0gPSBwYXJ0TW9kZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKDEsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaW5kKHNlbGVjdFBhcnRzLCAocDogYW55KSA9PiBwLmRlZi50eXBlID09PSAnYWxpYXMnKSkge1xuICAgICAgICAgIGFkZEFsaWFzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdmluZ193aW5kb3cnOlxuICAgICAgY2FzZSAnd2luZG93JzpcbiAgICAgICAgY29uc3Qgd2luZG93SW5kZXggPSB0aGlzLmZpbmRXaW5kb3dJbmRleChzZWxlY3RQYXJ0cyk7XG4gICAgICAgIGlmICh3aW5kb3dJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgd2luZG93IGZ1bmN0aW9uXG4gICAgICAgICAgc2VsZWN0UGFydHNbd2luZG93SW5kZXhdID0gcGFydE1vZGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFnZ0luZGV4ID0gdGhpcy5maW5kQWdncmVnYXRlSW5kZXgoc2VsZWN0UGFydHMpO1xuICAgICAgICAgIGlmIChhZ2dJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZShhZ2dJbmRleCArIDEsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZpbmQoc2VsZWN0UGFydHMsIChwOiBhbnkpID0+IHAuZGVmLnR5cGUgPT09ICdhbGlhcycpKSB7XG4gICAgICAgICAgYWRkQWxpYXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWxpYXMnOlxuICAgICAgICBhZGRBbGlhcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChhZGRBbGlhcykge1xuICAgICAgLy8gc2V0IGluaXRpYWwgYWxpYXMgbmFtZSB0byBjb2x1bW4gbmFtZVxuICAgICAgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnYWxpYXMnLCBwYXJhbXM6IFtzZWxlY3RQYXJ0c1swXS5wYXJhbXNbMF0ucmVwbGFjZSgvXCIvZywgJycpXSB9KTtcbiAgICAgIGlmIChzZWxlY3RQYXJ0c1tzZWxlY3RQYXJ0cy5sZW5ndGggLSAxXS5kZWYudHlwZSA9PT0gJ2FsaWFzJykge1xuICAgICAgICBzZWxlY3RQYXJ0c1tzZWxlY3RQYXJ0cy5sZW5ndGggLSAxXSA9IHBhcnRNb2RlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdFBhcnRzLnB1c2gocGFydE1vZGVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gIH1cblxuICByZW1vdmVTZWxlY3RQYXJ0KHNlbGVjdFBhcnRzOiBhbnksIHBhcnQ6IHsgZGVmOiB7IHR5cGU6IHN0cmluZyB9IH0pIHtcbiAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ2NvbHVtbicpIHtcbiAgICAgIC8vIHJlbW92ZSBhbGwgcGFydHMgb2YgY29sdW1uIHVubGVzcyBpdHMgbGFzdCBjb2x1bW5cbiAgICAgIGlmICh0aGlzLnNlbGVjdFBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzSW5kZXggPSBpbmRleE9mKHRoaXMuc2VsZWN0UGFydHMsIHNlbGVjdFBhcnRzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RQYXJ0cy5zcGxpY2UobW9kZWxzSW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJ0SW5kZXggPSBpbmRleE9mKHNlbGVjdFBhcnRzLCBwYXJ0KTtcbiAgICAgIHNlbGVjdFBhcnRzLnNwbGljZShwYXJ0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdFBhcnRFdmVudChzZWxlY3RQYXJ0czogYW55LCBwYXJ0OiB7IGRlZjogYW55IH0sIGV2dDogeyBuYW1lOiBhbnkgfSkge1xuICAgIHN3aXRjaCAoZXZ0Lm5hbWUpIHtcbiAgICAgIGNhc2UgJ2dldC1wYXJhbS1vcHRpb25zJzoge1xuICAgICAgICBzd2l0Y2ggKHBhcnQuZGVmLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdhZ2dyZWdhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRBZ2dyZWdhdGVRdWVyeSgpKVxuICAgICAgICAgICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAgICAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCd2YWx1ZScpKVxuICAgICAgICAgICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlICdwYXJ0LXBhcmFtLWNoYW5nZWQnOiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnYWN0aW9uJzoge1xuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdFBhcnQoc2VsZWN0UGFydHMsIHBhcnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdnZXQtcGFydC1hY3Rpb25zJzoge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt7IHRleHQ6ICdSZW1vdmUnLCB2YWx1ZTogJ3JlbW92ZS1wYXJ0JyB9XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlR3JvdXBQYXJ0RXZlbnQocGFydDogYW55LCBpbmRleDogYW55LCBldnQ6IHsgbmFtZTogYW55IH0pIHtcbiAgICBzd2l0Y2ggKGV2dC5uYW1lKSB7XG4gICAgICBjYXNlICdnZXQtcGFyYW0tb3B0aW9ucyc6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCkpXG4gICAgICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgICAgY2FzZSAncGFydC1wYXJhbS1jaGFuZ2VkJzoge1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2FjdGlvbic6IHtcbiAgICAgICAgdGhpcy5yZW1vdmVHcm91cChwYXJ0LCBpbmRleCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dldC1wYXJ0LWFjdGlvbnMnOiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW3sgdGV4dDogJ1JlbW92ZScsIHZhbHVlOiAncmVtb3ZlLXBhcnQnIH1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRHcm91cChwYXJ0VHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IHBhcmFtcyA9IFt2YWx1ZV07XG4gICAgaWYgKHBhcnRUeXBlID09PSAndGltZScpIHtcbiAgICAgIHBhcmFtcyA9IFsnJF9faW50ZXJ2YWwnLCAnbm9uZSddO1xuICAgIH1cbiAgICBjb25zdCBwYXJ0TW9kZWwgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6IHBhcnRUeXBlLCBwYXJhbXM6IHBhcmFtcyB9KTtcblxuICAgIGlmIChwYXJ0VHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAvLyBwdXQgdGltZUdyb3VwIGF0IHN0YXJ0XG4gICAgICB0aGlzLmdyb3VwUGFydHMuc3BsaWNlKDAsIDAsIHBhcnRNb2RlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JvdXBQYXJ0cy5wdXNoKHBhcnRNb2RlbCk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGFnZ3JlZ2F0ZXMgd2hlbiBhZGRpbmcgZ3JvdXAgYnlcbiAgICBmb3IgKGNvbnN0IHNlbGVjdFBhcnRzIG9mIHRoaXMuc2VsZWN0UGFydHMpIHtcbiAgICAgIGlmICghc2VsZWN0UGFydHMuc29tZSgocGFydCkgPT4gcGFydC5kZWYudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScpKSB7XG4gICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZSA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ2FnZ3JlZ2F0ZScsIHBhcmFtczogWydhdmcnXSB9KTtcbiAgICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKDEsIDAsIGFnZ3JlZ2F0ZSk7XG4gICAgICAgIGlmICghc2VsZWN0UGFydHMuc29tZSgocGFydCkgPT4gcGFydC5kZWYudHlwZSA9PT0gJ2FsaWFzJykpIHtcbiAgICAgICAgICBjb25zdCBhbGlhcyA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ2FsaWFzJywgcGFyYW1zOiBbc2VsZWN0UGFydHNbMF0ucGFydC5wYXJhbXNbMF1dIH0pO1xuICAgICAgICAgIHNlbGVjdFBhcnRzLnB1c2goYWxpYXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICB9XG5cbiAgcmVtb3ZlR3JvdXAocGFydDogeyBkZWY6IHsgdHlwZTogc3RyaW5nIH0gfSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChwYXJ0LmRlZi50eXBlID09PSAndGltZScpIHtcbiAgICAgIC8vIHJlbW92ZSBhZ2dyZWdhdGlvbnNcbiAgICAgIHRoaXMuc2VsZWN0UGFydHMgPSBtYXAodGhpcy5zZWxlY3RQYXJ0cywgKHM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZmlsdGVyKHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScgfHwgcGFydC5kZWYudHlwZSA9PT0gJ3BlcmNlbnRpbGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZ3JvdXBQYXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgfVxuXG4gIGhhbmRsZVdoZXJlUGFydEV2ZW50KHdoZXJlUGFydHM6IGFueSwgcGFydDogYW55LCBldnQ6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIHN3aXRjaCAoZXZ0Lm5hbWUpIHtcbiAgICAgIGNhc2UgJ2dldC1wYXJhbS1vcHRpb25zJzoge1xuICAgICAgICBzd2l0Y2ggKGV2dC5wYXJhbS5uYW1lKSB7XG4gICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAgICAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCkpXG4gICAgICAgICAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgaWYgKFsnaW50NCcsICdpbnQ4JywgJ2Zsb2F0NCcsICdmbG9hdDgnLCAndGltZXN0YW1wJywgJ3RpbWVzdGFtcHR6J10uaW5kZXhPZihwYXJ0LmRhdGF0eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICAgIC8vIGRvbid0IGRvIHZhbHVlIGxvb2t1cHMgZm9yIG51bWVyaWNhbCBmaWVsZHNcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAgICAgICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkVmFsdWVRdWVyeShwYXJ0LnBhcmFtc1swXSkpXG4gICAgICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe1xuICAgICAgICAgICAgICAgICAgICBhZGRUZW1wbGF0ZVZhcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUXVvdGVyOiAodjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNb2RlbC5xdW90ZUxpdGVyYWwodik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ29wJzpcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy51aVNlZ21lbnRTcnYubmV3T3BlcmF0b3JzKHRoaXMubWV0YUJ1aWxkZXIuZ2V0T3BlcmF0b3JzKHBhcnQuZGF0YXR5cGUpKSk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlICdwYXJ0LXBhcmFtLWNoYW5nZWQnOiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgdGhpcy5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkRGF0YXR5cGVRdWVyeShwYXJ0LnBhcmFtc1swXSkpLnRoZW4oKGQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcGFydC5kYXRhdHlwZSA9IGRbMF0udGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdhY3Rpb24nOiB7XG4gICAgICAgIC8vIHJlbW92ZSBlbGVtZW50XG4gICAgICAgIHdoZXJlUGFydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdnZXQtcGFydC1hY3Rpb25zJzoge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt7IHRleHQ6ICdSZW1vdmUnLCB2YWx1ZTogJ3JlbW92ZS1wYXJ0JyB9XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0V2hlcmVPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5xdWVyeU1vZGVsLmhhc1VuaXhFcG9jaFRpbWVjb2x1bW4oKSkge1xuICAgICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAnbWFjcm8nLCB2YWx1ZTogJyRfX3VuaXhFcG9jaEZpbHRlcicgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICdtYWNybycsIHZhbHVlOiAnJF9fdGltZUZpbHRlcicgfSkpO1xuICAgIH1cbiAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICdleHByZXNzaW9uJywgdmFsdWU6ICdFeHByZXNzaW9uJyB9KSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShvcHRpb25zKTtcbiAgfVxuXG4gIGFkZFdoZXJlQWN0aW9uKHBhcnQ6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIHN3aXRjaCAodGhpcy53aGVyZUFkZC50eXBlKSB7XG4gICAgICBjYXNlICdtYWNybyc6IHtcbiAgICAgICAgY29uc3QgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiB0aGlzLndoZXJlQWRkLnZhbHVlLCBwYXJhbXM6IFtdIH0pO1xuICAgICAgICBpZiAodGhpcy53aGVyZVBhcnRzLmxlbmd0aCA+PSAxICYmIHRoaXMud2hlcmVQYXJ0c1swXS5kZWYudHlwZSA9PT0gJ21hY3JvJykge1xuICAgICAgICAgIC8vIHJlcGxhY2UgY3VycmVudCBtYWNyb1xuICAgICAgICAgIHRoaXMud2hlcmVQYXJ0c1swXSA9IHBhcnRNb2RlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLndoZXJlUGFydHMuc3BsaWNlKDAsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRoaXMud2hlcmVQYXJ0cy5wdXNoKHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ2V4cHJlc3Npb24nLCBwYXJhbXM6IFsndmFsdWUnLCAnPScsICd2YWx1ZSddIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgdGhpcy5yZXNldFBsdXNCdXR0b24odGhpcy53aGVyZUFkZCk7XG4gICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gIH1cblxuICBnZXRHcm91cE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ2dyb3VwJykpXG4gICAgICAudGhlbigodGFnczogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5TW9kZWwuaGFzVGltZUdyb3VwKCkpIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICd0aW1lJywgdmFsdWU6ICd0aW1lKCRfX2ludGVydmFsLG5vbmUpJyB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0YWcgb2YgdGFncykge1xuICAgICAgICAgIG9wdGlvbnMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ2NvbHVtbicsIHZhbHVlOiB0YWcudGV4dCB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZEdyb3VwQWN0aW9uKCkge1xuICAgIHRoaXMuYWRkR3JvdXAodGhpcy5ncm91cEFkZC50eXBlLCB0aGlzLmdyb3VwQWRkLnZhbHVlKTtcbiAgICB0aGlzLnJlc2V0UGx1c0J1dHRvbih0aGlzLmdyb3VwQWRkKTtcbiAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgfVxuXG4gIGhhbmRsZVF1ZXJ5RXJyb3IoZXJyOiBhbnkpOiBhbnlbXSB7XG4gICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gaXNzdWUgbWV0cmljIHF1ZXJ5JztcbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiIsImltcG9ydCB7IEFubm90YXRpb25FdmVudCwgRGF0YUZyYW1lLCBNZXRyaWNGaW5kVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2UsIEZldGNoUmVzcG9uc2UsIHRvRGF0YVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2VQYXJzZXIge1xuICB0cmFuc2Zvcm1NZXRyaWNGaW5kUmVzcG9uc2UocmF3OiBGZXRjaFJlc3BvbnNlPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KTogTWV0cmljRmluZFZhbHVlW10ge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UocmF3KS5kYXRhIGFzIERhdGFGcmFtZVtdO1xuXG4gICAgaWYgKCFmcmFtZXMgfHwgIWZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBmcmFtZSA9IGZyYW1lc1swXTtcblxuICAgIGNvbnN0IHZhbHVlczogTWV0cmljRmluZFZhbHVlW10gPSBbXTtcbiAgICBjb25zdCB0ZXh0RmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnX190ZXh0Jyk7XG4gICAgY29uc3QgdmFsdWVGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICdfX3ZhbHVlJyk7XG5cbiAgICBpZiAodGV4dEZpZWxkICYmIHZhbHVlRmllbGQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dEZpZWxkLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZXMucHVzaCh7IHRleHQ6ICcnICsgdGV4dEZpZWxkLnZhbHVlcy5nZXQoaSksIHZhbHVlOiAnJyArIHZhbHVlRmllbGQudmFsdWVzLmdldChpKSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVzLnB1c2goXG4gICAgICAgIC4uLmZyYW1lLmZpZWxkc1xuICAgICAgICAgIC5mbGF0TWFwKChmKSA9PiBmLnZhbHVlcy50b0FycmF5KCkpXG4gICAgICAgICAgLm1hcCgodikgPT4gKHtcbiAgICAgICAgICAgIHRleHQ6IHYsXG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQodmFsdWVzLm1hcCgodikgPT4gdi50ZXh0KSkpLm1hcCgodGV4dCkgPT4gKHtcbiAgICAgIHRleHQsXG4gICAgICB2YWx1ZTogdmFsdWVzLmZpbmQoKHYpID0+IHYudGV4dCA9PT0gdGV4dCk/LnZhbHVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIGFzeW5jIHRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZShvcHRpb25zOiBhbnksIGRhdGE6IEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2UpOiBQcm9taXNlPEFubm90YXRpb25FdmVudFtdPiB7XG4gICAgY29uc3QgZnJhbWVzID0gdG9EYXRhUXVlcnlSZXNwb25zZSh7IGRhdGE6IGRhdGEgfSkuZGF0YSBhcyBEYXRhRnJhbWVbXTtcbiAgICBpZiAoIWZyYW1lcyB8fCAhZnJhbWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBmcmFtZSA9IGZyYW1lc1swXTtcbiAgICBjb25zdCB0aW1lRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGltZScpO1xuXG4gICAgaWYgKCF0aW1lRmllbGQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBtYW5kYXRvcnkgdGltZSBjb2x1bW4gKHdpdGggdGltZSBjb2x1bW4gYWxpYXMpIGluIGFubm90YXRpb24gcXVlcnknKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lRW5kRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGltZWVuZCcpO1xuICAgIGNvbnN0IHRleHRGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0ZXh0Jyk7XG4gICAgY29uc3QgdGFnc0ZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RhZ3MnKTtcblxuICAgIGNvbnN0IGxpc3Q6IEFubm90YXRpb25FdmVudFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGltZUVuZCA9IHRpbWVFbmRGaWVsZCAmJiB0aW1lRW5kRmllbGQudmFsdWVzLmdldChpKSA/IE1hdGguZmxvb3IodGltZUVuZEZpZWxkLnZhbHVlcy5nZXQoaSkpIDogdW5kZWZpbmVkO1xuICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgYW5ub3RhdGlvbjogb3B0aW9ucy5hbm5vdGF0aW9uLFxuICAgICAgICB0aW1lOiBNYXRoLmZsb29yKHRpbWVGaWVsZC52YWx1ZXMuZ2V0KGkpKSxcbiAgICAgICAgdGltZUVuZCxcbiAgICAgICAgdGV4dDogdGV4dEZpZWxkICYmIHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpID8gdGV4dEZpZWxkLnZhbHVlcy5nZXQoaSkgOiAnJyxcbiAgICAgICAgdGFnczpcbiAgICAgICAgICB0YWdzRmllbGQgJiYgdGFnc0ZpZWxkLnZhbHVlcy5nZXQoaSlcbiAgICAgICAgICAgID8gdGFnc0ZpZWxkLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5nZXQoaSlcbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgLnNwbGl0KC9cXHMqLFxccyovKVxuICAgICAgICAgICAgOiBbXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBTcWxQYXJ0RGVmLCBTcWxQYXJ0IH0gZnJvbSAnYXBwL2FuZ3VsYXIvY29tcG9uZW50cy9zcWxfcGFydC9zcWxfcGFydCc7XG5cbmNvbnN0IGluZGV4OiBhbnlbXSA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVQYXJ0KHBhcnQ6IGFueSk6IGFueSB7XG4gIGNvbnN0IGRlZiA9IGluZGV4W3BhcnQudHlwZV07XG4gIGlmICghZGVmKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IFNxbFBhcnQocGFydCwgZGVmKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXIob3B0aW9uczogYW55KSB7XG4gIGluZGV4W29wdGlvbnMudHlwZV0gPSBuZXcgU3FsUGFydERlZihvcHRpb25zKTtcbn1cblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnY29sdW1uJyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIHBhcmFtczogW3sgdHlwZTogJ2NvbHVtbicsIGR5bmFtaWNMb29rdXA6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsndmFsdWUnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdleHByZXNzaW9uJyxcbiAgc3R5bGU6ICdleHByZXNzaW9uJyxcbiAgbGFiZWw6ICdFeHByOicsXG4gIHBhcmFtczogW1xuICAgIHsgbmFtZTogJ2xlZnQnLCB0eXBlOiAnc3RyaW5nJywgZHluYW1pY0xvb2t1cDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29wJywgdHlwZTogJ3N0cmluZycsIGR5bmFtaWNMb29rdXA6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdyaWdodCcsIHR5cGU6ICdzdHJpbmcnLCBkeW5hbWljTG9va3VwOiB0cnVlIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsndmFsdWUnLCAnPScsICd2YWx1ZSddLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ21hY3JvJyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIGxhYmVsOiAnTWFjcm86JyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnYWdncmVnYXRlJyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogW10sXG4gICAgICBiYXNlT3B0aW9uczogWydhdmcnLCAnY291bnQnLCAnbWluJywgJ21heCcsICdzdW0nLCAnc3RkZGV2JywgJ3ZhcmlhbmNlJ10sXG4gICAgICB0aW1lc2NhbGVPcHRpb25zOiBbJ2ZpcnN0JywgJ2xhc3QnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2F2ZyddLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ3BlcmNlbnRpbGUnLFxuICBsYWJlbDogJ0FnZ3JlZ2F0ZTonLFxuICBzdHlsZTogJ2xhYmVsJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ3BlcmNlbnRpbGVfY29udCcsICdwZXJjZW50aWxlX2Rpc2MnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdmcmFjdGlvbicsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG9wdGlvbnM6IFsnMC41JywgJzAuNzUnLCAnMC45JywgJzAuOTUnLCAnMC45OSddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsncGVyY2VudGlsZV9jb250JywgJzAuOTUnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdhbGlhcycsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduYW1lJywgdHlwZTogJ3N0cmluZycsIHF1b3RlOiAnZG91YmxlJyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWydhbGlhcyddLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ3RpbWUnLFxuICBzdHlsZTogJ2Z1bmN0aW9uJyxcbiAgbGFiZWw6ICd0aW1lJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2ludGVydmFsJyxcbiAgICAgIHR5cGU6ICdpbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJyRfX2ludGVydmFsJywgJzFzJywgJzEwcycsICcxbScsICc1bScsICcxMG0nLCAnMTVtJywgJzFoJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZmlsbCcsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnbm9uZScsICdOVUxMJywgJ3ByZXZpb3VzJywgJzAnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJyRfX2ludGVydmFsJywgJ25vbmUnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd3aW5kb3cnLFxuICBzdHlsZTogJ2xhYmVsJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydkZWx0YScsICdpbmNyZWFzZScsICdyYXRlJywgJ3N1bSddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnaW5jcmVhc2UnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtb3Zpbmdfd2luZG93JyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIGxhYmVsOiAnTW92aW5nIFdpbmRvdzonLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ2F2ZyddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3dpbmRvd19zaXplJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgb3B0aW9uczogWyczJywgJzUnLCAnNycsICcxMCcsICcyMCddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnYXZnJywgJzUnXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZTogY3JlYXRlUGFydCxcbn07XG4iLCJpbXBvcnQgeyBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2FkUGx1Z2luQ3NzIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBQYW5lbEN0cmwgYXMgUGFuZWxDdHJsRVM2IH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvcGFuZWxfY3RybCc7XG5pbXBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIGFzIE1ldHJpY3NQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgUXVlcnlDdHJsIGFzIFF1ZXJ5Q3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3F1ZXJ5X2N0cmwnO1xuXG5jb25zdCBQYW5lbEN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFBhbmVsQ3RybEVTNik7XG5jb25zdCBNZXRyaWNzUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShNZXRyaWNzUGFuZWxDdHJsRVM2KTtcbmNvbnN0IFF1ZXJ5Q3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoUXVlcnlDdHJsRVM2KTtcblxuZXhwb3J0IHsgUGFuZWxDdHJsLCBNZXRyaWNzUGFuZWxDdHJsLCBRdWVyeUN0cmwsIGxvYWRQbHVnaW5Dc3MgfTtcbiJdLCJuYW1lcyI6WyJsb2NhdGlvblNlYXJjaFRvT2JqZWN0IiwibG9jYXRpb25TZXJ2aWNlIiwibmF2aWdhdGlvbkxvZ2dlciIsImRlcHJlY2F0aW9uV2FybmluZyIsInVybFV0aWwiLCJERUZBVUxUX1BPUlRTIiwiaHR0cCIsImh0dHBzIiwiZnRwIiwiQW5ndWxhckxvY2F0aW9uV3JhcHBlciIsImNvbnN0cnVjdG9yIiwiYWJzVXJsIiwid3JhcEluRGVwcmVjYXRpb25XYXJuaW5nIiwiaGFzaCIsImhvc3QiLCJwYXRoIiwicG9ydCIsInByb3RvY29sIiwicmVwbGFjZSIsInNlYXJjaCIsInN0YXRlIiwidXJsIiwiZm4iLCJyZXBsYWNlbWVudCIsInNlbGYiLCJ3cmFwcGVyIiwibmFtZSIsImFwcGx5IiwiYXJndW1lbnRzIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJuZXdIYXNoIiwiZ2V0TG9jYXRpb24iLCJzbGljZSIsIkVycm9yIiwiVVJMIiwiaHJlZiIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJwYXJzZWRQYXRoIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInB1c2giLCJsZW5ndGgiLCJwYXJzZUludCIsInBhcmFtVmFsdWUiLCJnZXRTZWFyY2hPYmplY3QiLCJwYXJ0aWFsIiwibmV3UXVlcnkiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwidXBkYXRlZFVybCIsInJlbmRlclVybCIsIm5ld1VybCIsInRyaW0iLCJjbG9uZSIsIlNxbFBhcnREZWYiLCJvcHRpb25zIiwidHlwZSIsImxhYmVsIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJzdHlsZSIsIndyYXBPcGVuIiwid3JhcENsb3NlIiwic2VwYXJhdG9yIiwicGFyYW1zIiwiZGVmYXVsdFBhcmFtcyIsIlNxbFBhcnQiLCJwYXJ0IiwiZGVmIiwibWVzc2FnZSIsImRhdGF0eXBlIiwidXBkYXRlUGFyYW0iLCJzdHJWYWx1ZSIsImluZGV4Iiwib3B0aW9uYWwiLCJzcGxpY2UiLCJpc0FycmF5IiwiUGFuZWxDdHJsIiwiYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMiLCJMb2FkaW5nU3RhdGUiLCJQYW5lbEV2ZW50cyIsInRvRGF0YUZyYW1lRFRPIiwidG9MZWdhY3lSZXNwb25zZURhdGEiLCJNZXRyaWNzUGFuZWxDdHJsIiwiJHNjb3BlIiwiJGluamVjdG9yIiwibmV4dCIsImRhdGEiLCJwYW5lbERhdGEiLCJsb2FkaW5nIiwicHJvY2Vzc0RhdGFFcnJvciIsImVycm9yIiwiTG9hZGluZyIsImFuZ3VsYXJEaXJ0eUNoZWNrIiwicmVxdWVzdCIsInRpbWVJbmZvIiwidGltZVJhbmdlIiwicmFuZ2UiLCJ1c2VEYXRhRnJhbWVzIiwiaGFuZGxlRGF0YUZyYW1lcyIsInNlcmllcyIsImxlZ2FjeSIsIm1hcCIsInYiLCJoYW5kbGVRdWVyeVJlc3VsdCIsImNvbnRleHRTcnYiLCJnZXQiLCJkYXRhc291cmNlU3J2IiwidGltZVNydiIsInRlbXBsYXRlU3J2IiwicGFuZWwiLCJkYXRhc291cmNlIiwiZXZlbnRzIiwib24iLCJyZWZyZXNoIiwib25NZXRyaWNzUGFuZWxSZWZyZXNoIiwiYmluZCIsInBhbmVsVGVhcmRvd24iLCJvblBhbmVsVGVhckRvd24iLCJjb21wb25lbnREaWRNb3VudCIsIm9uTWV0cmljc1BhbmVsTW91bnRlZCIsInF1ZXJ5UnVubmVyIiwiZ2V0UXVlcnlSdW5uZXIiLCJxdWVyeVN1YnNjcmlwdGlvbiIsImdldERhdGEiLCJ3aXRoVHJhbnNmb3JtcyIsIndpdGhGaWVsZENvbmZpZyIsInN1YnNjcmliZSIsInBhbmVsRGF0YU9ic2VydmVyIiwidW5zdWJzY3JpYmUiLCJvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSIsInNuYXBzaG90RGF0YSIsInVwZGF0ZVRpbWVSYW5nZSIsIkRvbmUiLCIkdGltZW91dCIsImVtaXQiLCJkYXRhU25hcHNob3RMb2FkIiwic2NvcGVkVmFycyIsInRoZW4iLCJpc3N1ZVF1ZXJpZXMiLCJjYXRjaCIsImVyciIsImNhbmNlbGxlZCIsImNvbnNvbGUiLCJsb2ciLCIkcm9vdCIsIiQkcGhhc2UiLCIkZGlnZXN0IiwibmV3VGltZURhdGEiLCJydW4iLCJxdWVyaWVzIiwidGFyZ2V0cyIsInBhbmVsSWQiLCJpZCIsImRhc2hib2FyZElkIiwiZGFzaGJvYXJkIiwidGltZXpvbmUiLCJnZXRUaW1lem9uZSIsIm1heERhdGFQb2ludHMiLCJ3aWR0aCIsIm1pbkludGVydmFsIiwiaW50ZXJ2YWwiLCJjYWNoZVRpbWVvdXQiLCJ0cmFuc2Zvcm1hdGlvbnMiLCJzbmFwc2hvdCIsImZyYW1lIiwiZGF0YUZyYW1lc1JlY2VpdmVkIiwicmVzdWx0IiwiZGF0YVJlY2VpdmVkIiwiaXNTdHJpbmciLCJjb25maWciLCJwcm9maWxlciIsIkV2ZW50QnVzU3J2IiwicGx1Z2luIiwiJHBhcmVudCIsImVkaXRvclRhYnMiLCIkbG9jYXRpb24iLCJ0aW1pbmciLCJwYW5lbHMiLCJwbHVnaW5JZCIsInBsdWdpbk5hbWUiLCIkb24iLCJwYW5lbERpZE1vdW50IiwiaW5pdGlhbGl6ZWQiLCJwYW5lbEluaXRpYWxpemVkIiwicmVuZGVyaW5nQ29tcGxldGVkIiwicHVibGlzaEFwcEV2ZW50IiwiZXZlbnQiLCJwYXlsb2FkIiwiYXBwRXZlbnQiLCJpbml0RWRpdE1vZGUiLCJlZGl0TW9kZUluaXRpYXRlZCIsImVkaXRNb2RlSW5pdGlhbGl6ZWQiLCJhZGRFZGl0b3JUYWIiLCJ0aXRsZSIsImRpcmVjdGl2ZUZuIiwiaWNvbiIsImVkaXRvclRhYiIsInRlbXBsYXRlVXJsIiwiZ2V0RXh0ZW5kZWRNZW51IiwibWVudSIsImluaXRQYW5lbEFjdGlvbnMiLCJnZXRBZGRpdGlvbmFsTWVudUl0ZW1zIiwib3RoZXJQYW5lbEluRnVsbHNjcmVlbiIsInJlbmRlciIsImluZGV4T2YiLCJRdWVyeUN0cmwiLCJwYW5lbEN0cmwiLCJjdHJsIiwidGFyZ2V0IiwiaXNMYXN0UXVlcnkiLCJQYXNzd29yZEZpZWxkRW51bSIsImNyZWF0ZVJlc2V0SGFuZGxlciIsImZpZWxkIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2VjdXJlSnNvbkZpZWxkcyIsInNlY3VyZUpzb25EYXRhIiwiY3JlYXRlQ2hhbmdlSGFuZGxlciIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImZpbmQiLCJQb3N0Z3Jlc0NvbmZpZ0N0cmwiLCJqc29uRGF0YSIsInNzbG1vZGUiLCJ0bHNDb25maWd1cmF0aW9uTWV0aG9kIiwicG9zdGdyZXNWZXJzaW9uIiwic2hvd1RpbWVzY2FsZURCSGVscCIsImF1dG9EZXRlY3RGZWF0dXJlcyIsIm9uUGFzc3dvcmRSZXNldCIsIlBhc3N3b3JkIiwib25QYXNzd29yZENoYW5nZSIsInRsc01vZGVNYXBwaW5nIiwibG9hZERhdGFzb3VyY2UiLCJkcyIsImdldFZlcnNpb24iLCJ2ZXJzaW9uIiwiTnVtYmVyIiwidGV4dCIsImdldFRpbWVzY2FsZURCVmVyc2lvbiIsInRpbWVzY2FsZWRiIiwibWFqb3IiLCJNYXRoIiwidHJ1bmMiLCJtaW5vciIsInBvc3RncmVzVmVyc2lvbnMiLCJwIiwidG9nZ2xlVGltZXNjYWxlREJIZWxwIiwidGxzQXV0aCIsInRsc0F1dGhXaXRoQ0FDZXJ0IiwidGxzU2tpcFZlcmlmeSIsIl9tYXAiLCJsYXN0VmFsdWVGcm9tIiwib2YiLCJjYXRjaEVycm9yIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwiZ2V0QmFja2VuZFNydiIsIlJlc3BvbnNlUGFyc2VyIiwiUG9zdGdyZXNRdWVyeU1vZGVsIiwiZ2V0VGVtcGxhdGVTcnYiLCJnZXRTZWFyY2hGaWx0ZXJTY29wZWRWYXIiLCJ0b1Rlc3RpbmdTdGF0dXMiLCJQb3N0Z3Jlc0RhdGFzb3VyY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwidmFyaWFibGUiLCJtdWx0aSIsImluY2x1ZGVBbGwiLCJxdWVyeU1vZGVsIiwicXVvdGVMaXRlcmFsIiwicXVvdGVkVmFsdWVzIiwiam9pbiIsInJlc3BvbnNlUGFyc2VyIiwic2V0dGluZ3NEYXRhIiwidGltZUludGVydmFsIiwiaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMiLCJleHBhbmRlZFF1ZXJpZXMiLCJxdWVyeSIsImV4cGFuZGVkUXVlcnkiLCJnZXRSZWYiLCJyYXdTcWwiLCJpbnRlcnBvbGF0ZVZhcmlhYmxlIiwicmF3UXVlcnkiLCJmaWx0ZXJRdWVyeSIsImhpZGUiLCJhcHBseVRlbXBsYXRlVmFyaWFibGVzIiwicmVmSWQiLCJmb3JtYXQiLCJhbm5vdGF0aW9uUXVlcnkiLCJhbm5vdGF0aW9uIiwiUHJvbWlzZSIsInJlamVjdCIsImZldGNoIiwibWV0aG9kIiwiZnJvbSIsInZhbHVlT2YiLCJ0b1N0cmluZyIsInRvIiwicmVxdWVzdElkIiwicGlwZSIsInJlcyIsInRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZSIsIm1ldHJpY0ZpbmRRdWVyeSIsIm9wdGlvbmFsT3B0aW9ucyIsIndpbGRjYXJkQ2hhciIsImludGVycG9sYXRlZFF1ZXJ5IiwicnNwIiwidHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlIiwiX21ldGFSZXF1ZXN0IiwidGVzdERhdGFzb3VyY2UiLCJzdGF0dXMiLCJ0YXJnZXRDb250YWluc1RlbXBsYXRlIiwiYnVpbGRRdWVyeSIsImNvbnRhaW5zVGVtcGxhdGUiLCJQb3N0Z3Jlc01ldGFRdWVyeSIsImdldE9wZXJhdG9ycyIsInF1b3RlSWRlbnRBc0xpdGVyYWwiLCJ1bnF1b3RlSWRlbnRpZmllciIsImZpbmRNZXRyaWNUYWJsZSIsImJ1aWxkU2NoZW1hQ29uc3RyYWludCIsImJ1aWxkVGFibGVDb25zdHJhaW50IiwidGFibGUiLCJpbmNsdWRlcyIsInBhcnRzIiwic3BsaXQiLCJidWlsZFRhYmxlUXVlcnkiLCJidWlsZENvbHVtblF1ZXJ5IiwidGltZUNvbHVtbiIsImJ1aWxkVmFsdWVRdWVyeSIsImNvbHVtbiIsImJ1aWxkRGF0YXR5cGVRdWVyeSIsImJ1aWxkQWdncmVnYXRlUXVlcnkiLCJQb3N0Z3Jlc1F1ZXJ5Q3RybCIsIkRhdGFTb3VyY2VQbHVnaW4iLCJkZWZhdWx0UXVlcnkiLCJQb3N0Z3Jlc0Fubm90YXRpb25zUXVlcnlDdHJsIiwic2V0UXVlcnlDdHJsIiwic2V0Q29uZmlnQ3RybCIsInNldEFubm90YXRpb25RdWVyeUN0cmwiLCJtZXRyaWNDb2x1bW4iLCJncm91cCIsIndoZXJlIiwic2VsZWN0IiwiaW50ZXJwb2xhdGVRdWVyeVN0ciIsInF1b3RlSWRlbnRpZmllciIsImVzY2FwZUxpdGVyYWwiLCJoYXNUaW1lR3JvdXAiLCJnIiwiaGFzTWV0cmljQ29sdW1uIiwiZGVmYXVsdEZvcm1hdEZuIiwiZXNjYXBlZFZhbHVlcyIsImludGVycG9sYXRlIiwiaGFzVW5peEVwb2NoVGltZWNvbHVtbiIsInRpbWVDb2x1bW5UeXBlIiwiYnVpbGRUaW1lQ29sdW1uIiwiYWxpYXMiLCJ0aW1lR3JvdXAiLCJtYWNybyIsImFyZ3MiLCJidWlsZE1ldHJpY0NvbHVtbiIsImJ1aWxkVmFsdWVDb2x1bW5zIiwiYnVpbGRWYWx1ZUNvbHVtbiIsImNvbHVtbk5hbWUiLCJhZ2dyZWdhdGUiLCJ3aW5kb3dzIiwiZnVuYyIsIm92ZXJQYXJ0cyIsIm92ZXIiLCJjdXJyIiwicHJldiIsImJ1aWxkV2hlcmVDbGF1c2UiLCJjb25kaXRpb25zIiwidGFnIiwiYnVpbGRHcm91cENsYXVzZSIsImdyb3VwU2VjdGlvbiIsImkiLCJmaWx0ZXIiLCJmaW5kSW5kZXgiLCJhcHBFdmVudHMiLCJzcWxQYXJ0IiwiU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IiwidWlTZWdtZW50U3J2IiwibWV0YUJ1aWxkZXIiLCJ1cGRhdGVQcm9qZWN0aW9uIiwiZm9ybWF0cyIsInNlZ21lbnQiLCJuZXdTZWdtZW50IiwidGFibGVTZWdtZW50IiwiaHRtbCIsInRpbWVDb2x1bW5TZWdtZW50IiwidXBkYXRlUmF3U3FsQW5kUmVmcmVzaCIsImZha2UiLCJtZXRyaWNDb2x1bW5TZWdtZW50IiwiYnVpbGRTZWxlY3RNZW51Iiwid2hlcmVBZGQiLCJuZXdQbHVzQnV0dG9uIiwiZ3JvdXBBZGQiLCJvbkRhdGFSZWNlaXZlZCIsImRhdGFFcnJvciIsIm9uRGF0YUVycm9yIiwidGltZXNjYWxlQWdnQ2hlY2siLCJhZ2dJbmRleCIsImZpbmRBZ2dyZWdhdGVJbmRleCIsInNlbGVjdFBhcnRzIiwiYmFzZU9wdHMiLCJiYXNlT3B0aW9ucyIsInRpbWVzY2FsZU9wdHMiLCJjb25jYXQiLCJ0aW1lc2NhbGVPcHRpb25zIiwiY3JlYXRlIiwibiIsIndoZXJlUGFydHMiLCJncm91cFBhcnRzIiwidXBkYXRlUGVyc2lzdGVkUGFydHMiLCJzZWxlY3RNZW51IiwiYWdncmVnYXRlcyIsInN1Ym1lbnUiLCJhZ2dyZWdhdGVzMiIsInRvZ2dsZUVkaXRvck1vZGUiLCJwdWJsaXNoIiwidGV4dDIiLCJ5ZXNUZXh0Iiwib25Db25maXJtIiwiJGV2YWxBc3luYyIsInJlc2V0UGx1c0J1dHRvbiIsImJ1dHRvbiIsInBsdXNCdXR0b24iLCJnZXRUYWJsZVNlZ21lbnRzIiwidHJhbnNmb3JtVG9TZWdtZW50cyIsImhhbmRsZVF1ZXJ5RXJyb3IiLCJ0YWJsZUNoYW5nZWQiLCJ0YXNrMSIsInIiLCJ0aW1lQ29sdW1uQ2hhbmdlZCIsInRhc2syIiwiYWxsIiwiZ2V0VGltZUNvbHVtblNlZ21lbnRzIiwicGFydE1vZGVsIiwiZ2V0TWV0cmljQ29sdW1uU2VnbWVudHMiLCJhZGROb25lIiwibWV0cmljQ29sdW1uQ2hhbmdlZCIsImRhdGFMaXN0IiwibGFzdFF1ZXJ5RXJyb3IiLCJsYXN0UXVlcnlNZXRhIiwibWV0YSIsInJlc3VsdHMiLCJxdWVyeVJlcyIsInNlZ21lbnRzIiwiZXhwYW5kYWJsZSIsImFkZFRlbXBsYXRlVmFycyIsImdldFZhcmlhYmxlcyIsInRlbXBsYXRlUXVvdGVyIiwidW5zaGlmdCIsImZpbmRXaW5kb3dJbmRleCIsImFkZFNlbGVjdFBhcnQiLCJpdGVtIiwic3ViSXRlbSIsInBhcnRUeXBlIiwiYWRkQWxpYXMiLCJhZGRHcm91cCIsIndpbmRvd0luZGV4IiwicmVtb3ZlU2VsZWN0UGFydCIsIm1vZGVsc0luZGV4IiwicGFydEluZGV4IiwiaGFuZGxlU2VsZWN0UGFydEV2ZW50IiwiZXZ0IiwicmVzb2x2ZSIsImhhbmRsZUdyb3VwUGFydEV2ZW50IiwicmVtb3ZlR3JvdXAiLCJzb21lIiwicyIsImhhbmRsZVdoZXJlUGFydEV2ZW50IiwicGFyYW0iLCJuZXdPcGVyYXRvcnMiLCJkIiwiZ2V0V2hlcmVPcHRpb25zIiwiYWRkV2hlcmVBY3Rpb24iLCJnZXRHcm91cE9wdGlvbnMiLCJ0YWdzIiwiYWRkR3JvdXBBY3Rpb24iLCJ0b0RhdGFRdWVyeVJlc3BvbnNlIiwicmF3IiwiZnJhbWVzIiwidmFsdWVzIiwidGV4dEZpZWxkIiwiZmllbGRzIiwiZiIsInZhbHVlRmllbGQiLCJmbGF0TWFwIiwidG9BcnJheSIsIkFycmF5IiwiU2V0IiwidGltZUZpZWxkIiwidGltZUVuZEZpZWxkIiwidGFnc0ZpZWxkIiwibGlzdCIsInRpbWVFbmQiLCJmbG9vciIsInRpbWUiLCJjcmVhdGVQYXJ0IiwicmVnaXN0ZXIiLCJkeW5hbWljTG9va3VwIiwicXVvdGUiLCJtYWtlQ2xhc3NFUzVDb21wYXRpYmxlIiwibG9hZFBsdWdpbkNzcyIsIlBhbmVsQ3RybEVTNiIsIk1ldHJpY3NQYW5lbEN0cmxFUzYiLCJRdWVyeUN0cmxFUzYiXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["tableOldPlugin"],{

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

/***/ "./public/app/plugins/panel/table-old/column_options.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnOptionsCtrl": () => (/* binding */ ColumnOptionsCtrl),
/* harmony export */   "columnOptionsTab": () => (/* binding */ columnOptionsTab)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ColumnOptionsCtrl {
  /** @ngInject */
  constructor($scope) {
    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "colorModes", void 0);

    _defineProperty(this, "columnStyles", void 0);

    _defineProperty(this, "columnTypes", void 0);

    _defineProperty(this, "fontSizes", void 0);

    _defineProperty(this, "dateFormats", void 0);

    _defineProperty(this, "addColumnSegment", void 0);

    _defineProperty(this, "unitFormats", void 0);

    _defineProperty(this, "getColumnNames", void 0);

    _defineProperty(this, "activeStyleIndex", void 0);

    _defineProperty(this, "mappingTypes", void 0);

    _defineProperty(this, "alignTypes", void 0);

    $scope.editor = this;
    this.activeStyleIndex = 0;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.unitFormats = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getValueFormats)();
    this.colorModes = [{
      text: 'Disabled',
      value: null
    }, {
      text: 'Cell',
      value: 'cell'
    }, {
      text: 'Value',
      value: 'value'
    }, {
      text: 'Row',
      value: 'row'
    }];
    this.columnTypes = [{
      text: 'Number',
      value: 'number'
    }, {
      text: 'String',
      value: 'string'
    }, {
      text: 'Date',
      value: 'date'
    }, {
      text: 'Hidden',
      value: 'hidden'
    }];
    this.fontSizes = ['80%', '90%', '100%', '110%', '120%', '130%', '150%', '160%', '180%', '200%', '220%', '250%'];
    this.dateFormats = [{
      text: 'YYYY-MM-DD HH:mm:ss',
      value: 'YYYY-MM-DD HH:mm:ss'
    }, {
      text: 'YYYY-MM-DD HH:mm:ss.SSS',
      value: 'YYYY-MM-DD HH:mm:ss.SSS'
    }, {
      text: 'MM/DD/YY h:mm:ss a',
      value: 'MM/DD/YY h:mm:ss a'
    }, {
      text: 'MMMM D, YYYY LT',
      value: 'MMMM D, YYYY LT'
    }, {
      text: 'YYYY-MM-DD',
      value: 'YYYY-MM-DD'
    }];
    this.mappingTypes = [{
      text: 'Value to text',
      value: 1
    }, {
      text: 'Range to text',
      value: 2
    }];
    this.alignTypes = ColumnOptionsCtrl.alignTypesEnum;

    this.getColumnNames = () => {
      if (!this.panelCtrl.table) {
        return [];
      }

      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.panelCtrl.table.columns, col => {
        return col.text;
      });
    };

    this.onColorChange = this.onColorChange.bind(this);
  }

  render() {
    this.panelCtrl.render();
  }

  setUnitFormat(column) {
    return value => {
      column.unit = value;
      this.panelCtrl.render();
    };
  }

  addColumnStyle() {
    const newStyleRule = {
      unit: 'short',
      type: 'number',
      alias: '',
      decimals: 2,
      colors: ['rgba(245, 54, 54, 0.9)', 'rgba(237, 129, 40, 0.89)', 'rgba(50, 172, 45, 0.97)'],
      colorMode: null,
      pattern: '',
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      thresholds: [],
      mappingType: 1,
      align: 'auto'
    };
    const styles = this.panel.styles;
    const stylesCount = styles.length;
    let indexToInsert = stylesCount; // check if last is a catch all rule, then add it before that one

    if (stylesCount > 0) {
      const last = styles[stylesCount - 1];

      if (last.pattern === '/.*/') {
        indexToInsert = stylesCount - 1;
      }
    }

    styles.splice(indexToInsert, 0, newStyleRule);
    this.activeStyleIndex = indexToInsert;
  }

  removeColumnStyle(style) {
    this.panel.styles = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.panel.styles, style);
  }

  invertColorOrder(index) {
    const ref = this.panel.styles[index].colors;
    const copy = ref[0];
    ref[0] = ref[2];
    ref[2] = copy;
    this.panelCtrl.render();
  }

  onColorChange(style, colorIndex) {
    return newColor => {
      style.colors[colorIndex] = newColor;
      this.render();
    };
  }

  addValueMap(style) {
    if (!style.valueMaps) {
      style.valueMaps = [];
    }

    style.valueMaps.push({
      value: '',
      text: ''
    });
    this.panelCtrl.render();
  }

  removeValueMap(style, index) {
    style.valueMaps.splice(index, 1);
    this.panelCtrl.render();
  }

  addRangeMap(style) {
    if (!style.rangeMaps) {
      style.rangeMaps = [];
    }

    style.rangeMaps.push({
      from: '',
      to: '',
      text: ''
    });
    this.panelCtrl.render();
  }

  removeRangeMap(style, index) {
    style.rangeMaps.splice(index, 1);
    this.panelCtrl.render();
  }

}
ColumnOptionsCtrl.$inject = ["$scope"];

_defineProperty(ColumnOptionsCtrl, "alignTypesEnum", [{
  text: 'auto',
  value: ''
}, {
  text: 'left',
  value: 'left'
}, {
  text: 'center',
  value: 'center'
}, {
  text: 'right',
  value: 'right'
}]);

function columnOptionsTab() {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/table-old/column_options.html',
    controller: ColumnOptionsCtrl
  };
}

/***/ }),

/***/ "./public/app/plugins/panel/table-old/editor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablePanelEditorCtrl": () => (/* binding */ TablePanelEditorCtrl),
/* harmony export */   "tablePanelEditor": () => (/* binding */ tablePanelEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/table-old/transformers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class TablePanelEditorCtrl {
  /** @ngInject */
  constructor($scope, uiSegmentSrv) {
    this.uiSegmentSrv = uiSegmentSrv;

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "transformers", void 0);

    _defineProperty(this, "fontSizes", void 0);

    _defineProperty(this, "addColumnSegment", void 0);

    _defineProperty(this, "getColumnNames", void 0);

    _defineProperty(this, "canSetColumns", false);

    _defineProperty(this, "columnsHelpMessage", '');

    this.uiSegmentSrv = uiSegmentSrv;
    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.transformers = _transformers__WEBPACK_IMPORTED_MODULE_1__.transformers;
    this.fontSizes = ['80%', '90%', '100%', '110%', '120%', '130%', '150%', '160%', '180%', '200%', '220%', '250%'];
    this.addColumnSegment = uiSegmentSrv.newPlusButton();
    this.updateTransformHints();
  }

  updateTransformHints() {
    this.canSetColumns = false;
    this.columnsHelpMessage = '';

    switch (this.panel.transform) {
      case 'timeseries_aggregations':
        {
          this.canSetColumns = true;
          break;
        }

      case 'json':
        {
          this.canSetColumns = true;
          break;
        }

      case 'table':
        {
          this.columnsHelpMessage = 'Columns and their order are determined by the data query';
        }
    }
  }

  getColumnOptions() {
    if (!this.panelCtrl.dataRaw) {
      return Promise.resolve([]);
    }

    const columns = this.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw);
    const segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(columns, c => this.uiSegmentSrv.newSegment({
      value: c.text
    }));
    return Promise.resolve(segments);
  }

  addColumn() {
    const columns = _transformers__WEBPACK_IMPORTED_MODULE_1__.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw);
    const column = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(columns, {
      text: this.addColumnSegment.value
    });

    if (column) {
      this.panel.columns.push(column);
      this.render();
    }

    const plusButton = this.uiSegmentSrv.newPlusButton();
    this.addColumnSegment.html = plusButton.html;
    this.addColumnSegment.value = plusButton.value;
  }

  transformChanged() {
    this.panel.columns = [];

    if (this.panel.transform === 'annotations') {
      this.panelCtrl.refresh();
    } else {
      if (this.panel.transform === 'timeseries_aggregations') {
        this.panel.columns.push({
          text: 'Avg',
          value: 'avg'
        });
      }

      this.updateTransformHints();
      this.render();
    }
  }

  render() {
    this.panelCtrl.render();
  }

  removeColumn(column) {
    this.panel.columns = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.panel.columns, column);
    this.panelCtrl.render();
  }

}
TablePanelEditorCtrl.$inject = ["$scope", "uiSegmentSrv"];
function tablePanelEditor(uiSegmentSrv) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/table-old/editor.html',
    controller: TablePanelEditorCtrl
  };
}

/***/ }),

/***/ "./public/app/plugins/panel/table-old/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablePanelCtrl": () => (/* binding */ TablePanelCtrl),
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/jquery-npm-3.6.0-ca7872bdbb-8fd5fef4aa.zip/node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/table-old/transformers.ts");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/table-old/editor.ts");
/* harmony import */ var _column_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/table-old/column_options.ts");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/table-old/renderer.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/variables/adhoc/actions.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class TablePanelCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__.MetricsPanelCtrl {
  /** @ngInject */
  constructor($scope, $injector, annotationsSrv, $sanitize) {
    super($scope, $injector);
    this.annotationsSrv = annotationsSrv;
    this.$sanitize = $sanitize;

    _defineProperty(this, "pageIndex", void 0);

    _defineProperty(this, "dataRaw", void 0);

    _defineProperty(this, "table", void 0);

    _defineProperty(this, "renderer", void 0);

    _defineProperty(this, "panelHasRowColorMode", void 0);

    _defineProperty(this, "panelHasLinks", void 0);

    _defineProperty(this, "panelDefaults", {
      targets: [{}],
      transform: 'timeseries_to_columns',
      pageSize: null,
      showHeader: true,
      styles: [{
        type: 'date',
        pattern: 'Time',
        alias: 'Time',
        dateFormat: 'YYYY-MM-DD HH:mm:ss',
        align: 'auto'
      }, {
        unit: 'short',
        type: 'number',
        alias: '',
        decimals: 2,
        colors: ['rgba(245, 54, 54, 0.9)', 'rgba(237, 129, 40, 0.89)', 'rgba(50, 172, 45, 0.97)'],
        colorMode: null,
        pattern: '/.*/',
        thresholds: [],
        align: 'right'
      }],
      columns: [],
      fontSize: '100%',
      sort: {
        col: 0,
        desc: true
      }
    });

    this.annotationsSrv = annotationsSrv;
    this.$sanitize = $sanitize;
    this.pageIndex = 0;

    if (this.panel.styles === void 0) {
      this.panel.styles = this.panel.columns;
      this.panel.columns = this.panel.fields;
      delete this.panel.columns;
      delete this.panel.fields;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaults)(this.panel, this.panelDefaults);
    this.panelHasRowColorMode = Boolean(this.panel.styles.find(style => style.colorMode === 'row'));
    this.panelHasLinks = Boolean(this.panel.styles.find(style => style.link));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_8__.PanelEvents.dataReceived, this.onDataReceived.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_8__.PanelEvents.dataSnapshotLoad, this.onDataReceived.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_8__.PanelEvents.editModeInitialized, this.onInitEditMode.bind(this));
  }

  onInitEditMode() {
    this.addEditorTab('Options', _editor__WEBPACK_IMPORTED_MODULE_5__.tablePanelEditor, 2);
    this.addEditorTab('Column Styles', _column_options__WEBPACK_IMPORTED_MODULE_6__.columnOptionsTab, 3);
  }

  migrateToPanel(type) {
    this.onPluginTypeChange(app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].panels[type]);
  }

  issueQueries(datasource) {
    this.pageIndex = 0;

    if (this.panel.transform === 'annotations') {
      return this.annotationsSrv.getAnnotations({
        dashboard: this.dashboard,
        panel: this.panel,
        range: this.range
      }).then(anno => {
        this.loading = false;
        this.dataRaw = anno;
        this.pageIndex = 0;
        this.render();
        return {
          data: this.dataRaw
        }; // Not used
      });
    }

    return super.issueQueries(datasource);
  }

  onDataReceived(dataList) {
    this.dataRaw = dataList;
    this.pageIndex = 0; // automatically correct transform mode based on data

    if (this.dataRaw && this.dataRaw.length) {
      if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.isTableData)(this.dataRaw[0])) {
        this.panel.transform = 'table';
      } else {
        if (this.dataRaw[0].type === 'docs') {
          this.panel.transform = 'json';
        } else {
          if (this.panel.transform === 'table' || this.panel.transform === 'json') {
            this.panel.transform = 'timeseries_to_rows';
          }
        }
      }
    }

    this.render();
  }

  render() {
    this.table = (0,_transformers__WEBPACK_IMPORTED_MODULE_4__.transformDataToTable)(this.dataRaw, this.panel);
    this.table.sort(this.panel.sort);
    this.renderer = new _renderer__WEBPACK_IMPORTED_MODULE_7__.TableRenderer(this.panel, this.table, this.dashboard.getTimezone(), this.$sanitize, this.templateSrv, app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].theme);
    return super.render(this.table);
  }

  toggleColumnSort(col, colIndex) {
    // remove sort flag from current column
    if (this.table.columns[this.panel.sort.col]) {
      this.table.columns[this.panel.sort.col].sort = false;
    }

    if (this.panel.sort.col === colIndex) {
      if (this.panel.sort.desc) {
        this.panel.sort.desc = false;
      } else {
        this.panel.sort.col = null;
      }
    } else {
      this.panel.sort.col = colIndex;
      this.panel.sort.desc = true;
    }

    this.render();
  }

  link(scope, elem, attrs, ctrl) {
    let data;
    const panel = ctrl.panel;
    let pageCount = 0;

    function getTableHeight() {
      let panelHeight = ctrl.height;

      if (pageCount > 1) {
        panelHeight -= 26;
      }

      return panelHeight - 31 + 'px';
    }

    function appendTableRows(tbodyElem) {
      ctrl.renderer.setTable(data);
      tbodyElem.empty();
      tbodyElem.html(ctrl.renderer.render(ctrl.pageIndex));
    }

    function switchPage(e) {
      const el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.currentTarget);
      ctrl.pageIndex = parseInt(el.text(), 10) - 1;
      renderPanel();
    }

    function appendPaginationControls(footerElem) {
      footerElem.empty();
      const pageSize = panel.pageSize || 100;
      pageCount = Math.ceil(data.rows.length / pageSize);

      if (pageCount === 1) {
        return;
      }

      const startPage = Math.max(ctrl.pageIndex - 3, 0);
      const endPage = Math.min(pageCount, startPage + 9);
      const paginationList = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<ul></ul>');

      for (let i = startPage; i < endPage; i++) {
        const activeClass = i === ctrl.pageIndex ? 'active' : '';
        const pageLinkElem = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<li><a class="table-panel-page-link pointer ' + activeClass + '">' + (i + 1) + '</a></li>');
        paginationList.append(pageLinkElem);
      }

      footerElem.append(paginationList);
    }

    function renderPanel() {
      const panelElem = elem.parents('.panel-content');
      const rootElem = elem.find('.table-panel-scroll');
      const tbodyElem = elem.find('tbody');
      const footerElem = elem.find('.table-panel-footer');
      elem.css({
        'font-size': panel.fontSize
      });
      panelElem.addClass('table-panel-content');
      appendTableRows(tbodyElem);
      appendPaginationControls(footerElem);
      rootElem.css({
        'max-height': getTableHeight()
      });
    } // hook up link tooltips


    elem.tooltip({
      selector: '[data-link-tooltip]'
    });

    function addFilterClicked(e) {
      const filterData = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.currentTarget).data();
      const options = {
        datasource: panel.datasource,
        key: data.columns[filterData.column].text,
        value: data.rows[filterData.row][filterData.column],
        operator: filterData.operator
      };
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_9__.dispatch)((0,app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_10__.applyFilterFromTable)(options));
    }

    elem.on('click', '.table-panel-page-link', switchPage);
    elem.on('click', '.table-panel-filter-link', addFilterClicked);
    const unbindDestroy = scope.$on('$destroy', () => {
      elem.off('click', '.table-panel-page-link');
      elem.off('click', '.table-panel-filter-link');
      unbindDestroy();
    });
    ctrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_8__.PanelEvents.render, renderData => {
      data = renderData || data;

      if (data) {
        renderPanel();
      }

      ctrl.renderingCompleted();
    });
  }

}
TablePanelCtrl.$inject = ["$scope", "$injector", "annotationsSrv", "$sanitize"];

_defineProperty(TablePanelCtrl, "templateUrl", 'module.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_8__.PanelPlugin(null);
plugin.angularPanelCtrl = TablePanelCtrl;
plugin.setNoPadding();

/***/ }),

/***/ "./public/app/plugins/panel/table-old/renderer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableRenderer": () => (/* binding */ TableRenderer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _column_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/table-old/column_options.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class TableRenderer {
  constructor(panel, table, timeZone, sanitize, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)(), theme) {
    this.panel = panel;
    this.table = table;
    this.timeZone = timeZone;
    this.sanitize = sanitize;
    this.templateSrv = templateSrv;
    this.theme = theme;

    _defineProperty(this, "formatters", []);

    _defineProperty(this, "colorState", void 0);

    this.panel = panel;
    this.table = table;
    this.timeZone = timeZone;
    this.sanitize = sanitize;
    this.templateSrv = templateSrv;
    this.theme = theme;
    this.initColumns();
  }

  setTable(table) {
    this.table = table;
    this.initColumns();
  }

  initColumns() {
    this.formatters = [];
    this.colorState = {};

    for (let colIndex = 0; colIndex < this.table.columns.length; colIndex++) {
      const column = this.table.columns[colIndex];
      column.title = column.text;

      for (let i = 0; i < this.panel.styles.length; i++) {
        const style = this.panel.styles[i];
        const escapedPattern = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.stringStartsAsRegEx)(style.pattern) ? style.pattern : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.escapeStringForRegex)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.unEscapeStringFromRegex)(style.pattern));
        const regex = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.stringToJsRegex)(escapedPattern);

        if (column.text.match(regex)) {
          column.style = style;

          if (style.alias) {
            column.title = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.escapeHtml(column.text.replace(regex, style.alias));
          }

          break;
        }
      }

      this.formatters[colIndex] = this.createColumnFormatter(column);
    }
  }

  getColorForValue(value, style) {
    if (!style.thresholds || !style.colors) {
      return null;
    }

    for (let i = style.thresholds.length; i > 0; i--) {
      if (value >= style.thresholds[i - 1]) {
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getColorForTheme)(style.colors[i], this.theme);
      }
    }

    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getColorForTheme)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.first)(style.colors), this.theme);
  }

  defaultCellFormatter(v, style) {
    if (v === null || v === void 0 || v === undefined) {
      return '';
    }

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
      v = v.join(', ');
    }

    if (style && style.sanitize) {
      return this.sanitize(v);
    } else {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.escape)(v);
    }
  }

  createColumnFormatter(column) {
    if (!column.style) {
      return this.defaultCellFormatter;
    }

    if (column.style.type === 'hidden') {
      return v => undefined;
    }

    if (column.style.type === 'date') {
      return v => {
        if (v === undefined || v === null) {
          return '-';
        }

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          v = v[0];
        } // if is an epoch (numeric string and len > 12)


        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && !isNaN(v) && v.length > 12) {
          v = parseInt(v, 10);
        }

        if (!column.style.dateFormat) {
          return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeFormatISO)(v, {
            timeZone: this.timeZone
          });
        }

        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeFormat)(v, {
          format: column.style.dateFormat,
          timeZone: this.timeZone
        });
      };
    }

    if (column.style.type === 'string') {
      return v => {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          v = v.join(', ');
        }

        const mappingType = column.style.mappingType || 0;

        if (mappingType === 1 && column.style.valueMaps) {
          for (let i = 0; i < column.style.valueMaps.length; i++) {
            const map = column.style.valueMaps[i];

            if (v === null) {
              if (map.value === 'null') {
                return map.text;
              }

              continue;
            } // Allow both numeric and string values to be mapped


            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && Number(map.value) === Number(v) || map.value === v) {
              this.setColorState(v, column.style);
              return this.defaultCellFormatter(map.text, column.style);
            }
          }
        }

        if (mappingType === 2 && column.style.rangeMaps) {
          for (let i = 0; i < column.style.rangeMaps.length; i++) {
            const map = column.style.rangeMaps[i];

            if (v === null) {
              if (map.from === 'null' && map.to === 'null') {
                return map.text;
              }

              continue;
            }

            if (Number(map.from) <= Number(v) && Number(map.to) >= Number(v)) {
              this.setColorState(v, column.style);
              return this.defaultCellFormatter(map.text, column.style);
            }
          }
        }

        if (v === null || v === void 0) {
          return '-';
        }

        this.setColorState(v, column.style);
        return this.defaultCellFormatter(v, column.style);
      };
    }

    if (column.style.type === 'number') {
      const valueFormatter = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getValueFormat)(column.unit || column.style.unit);
      return v => {
        if (v === null || v === void 0) {
          return '-';
        }

        if (isNaN(v) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          return this.defaultCellFormatter(v, column.style);
        }

        this.setColorState(v, column.style);
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.formattedValueToString)(valueFormatter(v, column.style.decimals, null));
      };
    }

    return value => {
      return this.defaultCellFormatter(value, column.style);
    };
  }

  setColorState(value, style) {
    if (!style.colorMode) {
      return;
    }

    if (value === null || value === void 0 || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
      return;
    }

    const numericValue = Number(value);

    if (isNaN(numericValue)) {
      return;
    }

    this.colorState[style.colorMode] = this.getColorForValue(numericValue, style);
  }

  renderRowVariables(rowIndex) {
    const scopedVars = {};
    let cellVariable;
    const row = this.table.rows[rowIndex];

    for (let i = 0; i < row.length; i++) {
      cellVariable = `__cell_${i}`;
      scopedVars[cellVariable] = {
        value: row[i],
        text: row[i] ? row[i].toString() : ''
      };
    }

    return scopedVars;
  }

  formatColumnValue(colIndex, value) {
    const fmt = this.formatters[colIndex];

    if (fmt) {
      return fmt(value);
    }

    return value;
  }

  renderCell(columnIndex, rowIndex, value, addWidthHack = false) {
    value = this.formatColumnValue(columnIndex, value);
    const column = this.table.columns[columnIndex];
    const cellStyles = [];
    let cellStyle = '';
    const cellClasses = [];
    let cellClass = '';

    if (this.colorState.cell) {
      cellStyles.push('background-color:' + this.colorState.cell);
      cellClasses.push('table-panel-color-cell');
      this.colorState.cell = null;
    } else if (this.colorState.value) {
      cellStyles.push('color:' + this.colorState.value);
      this.colorState.value = null;
    } // because of the fixed table headers css only solution
    // there is an issue if header cell is wider the cell
    // this hack adds header content to cell (not visible)


    let columnHtml = '';

    if (addWidthHack) {
      columnHtml = '<div class="table-panel-width-hack">' + this.table.columns[columnIndex].title + '</div>';
    }

    if (value === undefined) {
      cellStyles.push('display:none');
      column.hidden = true;
    } else {
      column.hidden = false;
    }

    if (column.hidden === true) {
      return '';
    }

    if (column.style && column.style.preserveFormat) {
      cellClasses.push('table-panel-cell-pre');
    }

    if (column.style && column.style.align) {
      const textAlign = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(_column_options__WEBPACK_IMPORTED_MODULE_3__.ColumnOptionsCtrl.alignTypesEnum, ['text', column.style.align]);

      if (textAlign && textAlign['value']) {
        cellStyles.push(`text-align:${textAlign['value']}`);
      }
    }

    if (cellStyles.length) {
      cellStyle = ' style="' + cellStyles.join(';') + '"';
    }

    if (column.style && column.style.link) {
      // Render cell as link
      const scopedVars = this.renderRowVariables(rowIndex);
      scopedVars['__cell'] = {
        value: value,
        text: value ? value.toString() : ''
      };
      const cellLink = this.templateSrv.replace(column.style.linkUrl, scopedVars, encodeURIComponent);
      const sanitizedCellLink = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.sanitizeUrl(cellLink);
      const cellLinkTooltip = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.escapeHtml(this.templateSrv.replace(column.style.linkTooltip, scopedVars));
      const cellTarget = column.style.linkTargetBlank ? '_blank' : '';
      cellClasses.push('table-panel-cell-link');
      columnHtml += `<a href="${sanitizedCellLink}" target="${cellTarget}" data-link-tooltip data-original-title="${cellLinkTooltip}" data-placement="right"${cellStyle}>`;
      columnHtml += `${value}`;
      columnHtml += `</a>`;
    } else {
      columnHtml += value;
    }

    if (column.filterable) {
      cellClasses.push('table-panel-cell-filterable');
      columnHtml += `<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter out value" data-placement="bottom"
           data-row="${rowIndex}" data-column="${columnIndex}" data-operator="!=">`;
      columnHtml += `<i class="fa fa-search-minus"></i>`;
      columnHtml += `</a>`;
      columnHtml += `<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter for value" data-placement="bottom"
           data-row="${rowIndex}" data-column="${columnIndex}" data-operator="=">`;
      columnHtml += `<i class="fa fa-search-plus"></i>`;
      columnHtml += `</a>`;
    }

    if (cellClasses.length) {
      cellClass = ' class="' + cellClasses.join(' ') + '"';
    }

    columnHtml = '<td' + cellClass + cellStyle + '>' + columnHtml + '</td>';
    return columnHtml;
  }

  render(page) {
    const pageSize = this.panel.pageSize || 100;
    const startPos = page * pageSize;
    const endPos = Math.min(startPos + pageSize, this.table.rows.length);
    let html = '';

    for (let y = startPos; y < endPos; y++) {
      const row = this.table.rows[y];
      let cellHtml = '';
      let rowStyle = '';
      const rowClasses = [];
      let rowClass = '';

      for (let i = 0; i < this.table.columns.length; i++) {
        cellHtml += this.renderCell(i, y, row[i], y === startPos);
      }

      if (this.colorState.row) {
        rowStyle = ' style="background-color:' + this.colorState.row + '"';
        rowClasses.push('table-panel-color-row');
        this.colorState.row = null;
      }

      if (rowClasses.length) {
        rowClass = ' class="' + rowClasses.join(' ') + '"';
      }

      html += '<tr ' + rowClass + rowStyle + '>' + cellHtml + '</tr>';
    }

    return html;
  }

  render_values() {
    const rows = [];
    const visibleColumns = this.table.columns.filter(column => !column.hidden);

    for (let y = 0; y < this.table.rows.length; y++) {
      const row = this.table.rows[y];
      const newRow = [];

      for (let i = 0; i < this.table.columns.length; i++) {
        if (!this.table.columns[i].hidden) {
          newRow.push(this.formatColumnValue(i, row[i]));
        }
      }

      rows.push(newRow);
    }

    return {
      columns: visibleColumns,
      rows: rows
    };
  }

}

/***/ }),

/***/ "./public/app/plugins/panel/table-old/transformers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tableDataFormatFilterer": () => (/* binding */ tableDataFormatFilterer),
/* harmony export */   "timeSeriesFormatFilterer": () => (/* binding */ timeSeriesFormatFilterer),
/* harmony export */   "transformDataToTable": () => (/* binding */ transformDataToTable),
/* harmony export */   "transformers": () => (/* binding */ transformers)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/flatten.ts");
/* harmony import */ var app_core_time_series2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/time_series2.ts");
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/table_model.ts");




const transformers = {};
const timeSeriesFormatFilterer = data => {
  if (!Array.isArray(data)) {
    return data.datapoints ? [data] : [];
  }

  return data.reduce((acc, series) => {
    if (!series.datapoints) {
      return acc;
    }

    return acc.concat(series);
  }, []);
};
const tableDataFormatFilterer = data => {
  if (!Array.isArray(data)) {
    return data.columns ? [data] : [];
  }

  return data.reduce((acc, series) => {
    if (!series.columns) {
      return acc;
    }

    return acc.concat(series);
  }, []);
};
transformers['timeseries_to_rows'] = {
  description: 'Time series to rows',
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns = [{
      text: 'Time',
      type: 'date'
    }, {
      text: 'Metric'
    }, {
      text: 'Value'
    }];
    const filteredData = timeSeriesFormatFilterer(data);

    for (let i = 0; i < filteredData.length; i++) {
      const series = filteredData[i];

      for (let y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        model.rows.push([dp[1], series.target, dp[0]]);
      }
    }
  }
};
transformers['timeseries_to_columns'] = {
  description: 'Time series to columns',
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns.push({
      text: 'Time',
      type: 'date'
    }); // group by time

    const points = {};
    const filteredData = timeSeriesFormatFilterer(data);

    for (let i = 0; i < filteredData.length; i++) {
      const series = filteredData[i];
      model.columns.push({
        text: series.target
      });

      for (let y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        const timeKey = dp[1].toString();

        if (!points[timeKey]) {
          points[timeKey] = {
            time: dp[1]
          };
          points[timeKey][i] = dp[0];
        } else {
          points[timeKey][i] = dp[0];
        }
      }
    }

    for (const time in points) {
      const point = points[time];
      const values = [point.time];

      for (let i = 0; i < filteredData.length; i++) {
        const value = point[i];
        values.push(value);
      }

      model.rows.push(values);
    }
  }
};
transformers['timeseries_aggregations'] = {
  description: 'Time series aggregations',
  getColumns: () => {
    return [{
      text: 'Avg',
      value: 'avg'
    }, {
      text: 'Min',
      value: 'min'
    }, {
      text: 'Max',
      value: 'max'
    }, {
      text: 'Total',
      value: 'total'
    }, {
      text: 'Current',
      value: 'current'
    }, {
      text: 'Count',
      value: 'count'
    }];
  },
  transform: (data, panel, model) => {
    let i, y;
    model.columns.push({
      text: 'Metric'
    });

    for (i = 0; i < panel.columns.length; i++) {
      model.columns.push({
        text: panel.columns[i].text
      });
    }

    const filteredData = timeSeriesFormatFilterer(data);

    for (i = 0; i < filteredData.length; i++) {
      const series = new app_core_time_series2__WEBPACK_IMPORTED_MODULE_2__["default"]({
        datapoints: filteredData[i].datapoints,
        alias: filteredData[i].target
      });
      series.getFlotPairs('connected');
      const cells = [series.alias];

      for (y = 0; y < panel.columns.length; y++) {
        cells.push(series.stats[panel.columns[y].value]);
      }

      model.rows.push(cells);
    }
  }
};
transformers['annotations'] = {
  description: 'Annotations',
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns.push({
      text: 'Time',
      type: 'date'
    });
    model.columns.push({
      text: 'Title'
    });
    model.columns.push({
      text: 'Text'
    });
    model.columns.push({
      text: 'Tags'
    });

    if (!data || !data.annotations || data.annotations.length === 0) {
      return;
    }

    for (let i = 0; i < data.annotations.length; i++) {
      const evt = data.annotations[i];
      model.rows.push([evt.time, evt.title, evt.text, evt.tags]);
    }
  }
};
transformers['table'] = {
  description: 'Table',
  getColumns: data => {
    if (!data || data.length === 0) {
      return [];
    } // Single query returns data columns as is


    if (data.length === 1) {
      return [...data[0].columns];
    }

    const filteredData = tableDataFormatFilterer(data); // Track column indexes: name -> index

    const columnNames = {}; // Union of all columns

    const columns = filteredData.reduce((acc, series) => {
      series.columns.forEach(col => {
        const {
          text
        } = col;

        if (columnNames[text] === undefined) {
          columnNames[text] = acc.length;
          acc.push(col);
        }
      });
      return acc;
    }, []);
    return columns;
  },
  transform: (data, panel, model) => {
    if (!data || data.length === 0) {
      return;
    }

    const filteredData = tableDataFormatFilterer(data);
    const noTableIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(filteredData, d => 'columns' in d && 'rows' in d);

    if (noTableIndex < 0) {
      throw {
        message: `Result of query #${String.fromCharCode(65 + noTableIndex)} is not in table format, try using another transform.`
      };
    }

    (0,app_core_table_model__WEBPACK_IMPORTED_MODULE_3__.mergeTablesIntoModel)(model, ...filteredData);
  }
};
transformers['json'] = {
  description: 'JSON Data',
  getColumns: data => {
    if (!data || data.length === 0) {
      return [];
    }

    const names = {};

    for (let i = 0; i < data.length; i++) {
      const series = data[i];

      if (series.type !== 'docs') {
        continue;
      } // only look at 100 docs


      const maxDocs = Math.min(series.datapoints.length, 100);

      for (let y = 0; y < maxDocs; y++) {
        const doc = series.datapoints[y];
        const flattened = (0,app_core_utils_flatten__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {});

        for (const propName in flattened) {
          names[propName] = true;
        }
      }
    }

    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(names, (value, key) => {
      return {
        text: key,
        value: key
      };
    });
  },
  transform: (data, panel, model) => {
    let i, y, z;

    for (const column of panel.columns) {
      const tableCol = {
        text: column.text
      }; // if filterable data then set columns to filterable

      if (data.length > 0 && data[0].filterable) {
        tableCol.filterable = true;
      }

      model.columns.push(tableCol);
    }

    if (model.columns.length === 0) {
      model.columns.push({
        text: 'JSON'
      });
    }

    for (i = 0; i < data.length; i++) {
      const series = data[i];

      for (y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        const values = [];

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(dp) && panel.columns.length > 0) {
          const flattened = (0,app_core_utils_flatten__WEBPACK_IMPORTED_MODULE_1__["default"])(dp);

          for (z = 0; z < panel.columns.length; z++) {
            values.push(flattened[panel.columns[z].value]);
          }
        } else {
          values.push(JSON.stringify(dp));
        }

        model.rows.push(values);
      }
    }
  }
};

function transformDataToTable(data, panel) {
  const model = new app_core_table_model__WEBPACK_IMPORTED_MODULE_3__["default"]();

  if (!data || data.length === 0) {
    return model;
  }

  const transformer = transformers[panel.transform];

  if (!transformer) {
    throw {
      message: 'Transformer ' + panel.transform + ' not found'
    };
  }

  transformer.transform(data, panel, model);
  return model;
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxDQUFnQnVaLE1BQWhCO0FBQ0Q7QUFDRjtBQUNGO0FBbEVvQixDQUF2Qjs7QUFxRUEsU0FBUzNLLG9CQUFULENBQThCbk4sSUFBOUIsRUFBeUN1QixLQUF6QyxFQUFxRDtBQUNuRCxRQUFNZ1csS0FBSyxHQUFHLElBQUlWLDREQUFKLEVBQWQ7O0FBRUEsTUFBSSxDQUFDN1csSUFBRCxJQUFTQSxJQUFJLENBQUN4QixNQUFMLEtBQWdCLENBQTdCLEVBQWdDO0FBQzlCLFdBQU8rWSxLQUFQO0FBQ0Q7O0FBRUQsUUFBTTRCLFdBQVcsR0FBR3pOLFlBQVksQ0FBQ25LLEtBQUssQ0FBQzJLLFNBQVAsQ0FBaEM7O0FBQ0EsTUFBSSxDQUFDaU4sV0FBTCxFQUFrQjtBQUNoQixVQUFNO0FBQUV6VixNQUFBQSxPQUFPLEVBQUUsaUJBQWlCbkMsS0FBSyxDQUFDMkssU0FBdkIsR0FBbUM7QUFBOUMsS0FBTjtBQUNEOztBQUVEaU4sRUFBQUEsV0FBVyxDQUFDak4sU0FBWixDQUFzQmxNLElBQXRCLEVBQTRCdUIsS0FBNUIsRUFBbUNnVyxLQUFuQztBQUNBLFNBQU9BLEtBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNalksU0FBUyxHQUFHOFoscUVBQXNCLENBQUNFLG1FQUFELENBQXhDO0FBQ0EsTUFBTTFaLGdCQUFnQixHQUFHd1oscUVBQXNCLENBQUNHLGtGQUFELENBQS9DO0FBQ0EsTUFBTTVSLFNBQVMsR0FBR3lSLHFFQUFzQixDQUFDSSxtRUFBRCxDQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL21ldHJpY3NfcGFuZWxfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvdGFibGUtb2xkL2NvbHVtbl9vcHRpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvdGFibGUtb2xkL2VkaXRvci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlLW9sZC9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC90YWJsZS1vbGQvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC90YWJsZS1vbGQvdHJhbnNmb3JtZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvc2RrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvY2F0aW9uU2VhcmNoVG9PYmplY3QsIGxvY2F0aW9uU2VydmljZSwgbmF2aWdhdGlvbkxvZ2dlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZGVwcmVjYXRpb25XYXJuaW5nLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbi8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL2FlOGU5MDNlZGY4OGE4M2ZlZGQxMTZhZTAyYzA2MjhiZjcyYjE1MGMvc3JjL25nL2xvY2F0aW9uLmpzI0w1XG5jb25zdCBERUZBVUxUX1BPUlRTOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyBodHRwOiA4MCwgaHR0cHM6IDQ0MywgZnRwOiAyMSB9O1xuXG5leHBvcnQgY2xhc3MgQW5ndWxhckxvY2F0aW9uV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWJzVXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5hYnNVcmwpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaGFzaCk7XG4gICAgdGhpcy5ob3N0ID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5ob3N0KTtcbiAgICB0aGlzLnBhdGggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBhdGgpO1xuICAgIHRoaXMucG9ydCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucG9ydCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucHJvdG9jb2wgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnByb3RvY29sLCAnd2luZG93LmxvY2F0aW9uJyk7XG4gICAgdGhpcy5yZXBsYWNlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5yZXBsYWNlKTtcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc2VhcmNoKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cmwgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnVybCk7XG4gIH1cblxuICB3cmFwSW5EZXByZWNhdGlvbldhcm5pbmcoZm46IEZ1bmN0aW9uLCByZXBsYWNlbWVudD86IHN0cmluZykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgICAgZGVwcmVjYXRpb25XYXJuaW5nKCckbG9jYXRpb24nLCBmbi5uYW1lLCByZXBsYWNlbWVudCB8fCAnbG9jYXRpb25TZXJ2aWNlJyk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgYWJzVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLnVybCgpfWA7XG4gIH1cblxuICBoYXNoKG5ld0hhc2g/OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IGhhc2gnKTtcblxuICAgIGlmICghbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLmhhc2guc2xpY2UoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgfVxuXG4gIGhvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuaG9zdG5hbWU7XG4gIH1cblxuICBwYXRoKHBhdGhuYW1lPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHBhdGgnKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCk7XG5cbiAgICBpZiAocGF0aG5hbWUgIT09IHVuZGVmaW5lZCAmJiBwYXRobmFtZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHBhcnNlZFBhdGggPSBTdHJpbmcocGF0aG5hbWUpO1xuICAgICAgcGFyc2VkUGF0aCA9IHBhcnNlZFBhdGguc3RhcnRzV2l0aCgnLycpID8gcGFyc2VkUGF0aCA6IGAvJHtwYXJzZWRQYXRofWA7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtwYXJzZWRQYXRofWApO1xuXG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogdXJsLnNlYXJjaC5sZW5ndGggPiAwID8gdXJsLnNlYXJjaCA6IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaDogdXJsLmhhc2gubGVuZ3RoID4gMCA/IHVybC5oYXNoIDogbG9jYXRpb24uaGFzaCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09PSBudWxsKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuICB9XG5cbiAgcG9ydCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsLnBvcnQsIDEwKSB8fCBERUZBVUxUX1BPUlRTW3VybC5wcm90b2NvbF0gfHwgbnVsbDtcbiAgfVxuXG4gIHByb3RvY29sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnByb3RvY29sLnNsaWNlKDAsIC0xKTtcbiAgfVxuXG4gIHJlcGxhY2UoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBzZWFyY2goc2VhcmNoPzogYW55LCBwYXJhbVZhbHVlPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHNlYXJjaCcpO1xuICAgIGlmICghc2VhcmNoKSB7XG4gICAgICByZXR1cm4gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2ggJiYgYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHtcbiAgICAgICAgW3NlYXJjaF06IHBhcmFtVmFsdWUsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgbGV0IG5ld1F1ZXJ5O1xuXG4gICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbmV3UXVlcnkgPSB7IC4uLnNlYXJjaCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UXVlcnkgPSBsb2NhdGlvblNlYXJjaFRvT2JqZWN0KHNlYXJjaCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld1F1ZXJ5KSkge1xuICAgICAgICAvLyByZW1vdmluZyBwYXJhbXMgd2l0aCBudWxsIHwgdW5kZWZpbmVkXG4gICAgICAgIGlmIChuZXdRdWVyeVtrZXldID09PSBudWxsIHx8IG5ld1F1ZXJ5W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSBuZXdRdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWRVcmwgPSB1cmxVdGlsLnJlbmRlclVybChsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZSwgbmV3UXVlcnkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2godXBkYXRlZFVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0ZShzdGF0ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzdGF0ZScpO1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdXJsKG5ld1VybD86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiB1cmwnKTtcblxuICAgIGlmIChuZXdVcmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG5ld1VybC5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goeyAuLi5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKSwgaGFzaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnPycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIHNlYXJjaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2gobmV3VXJsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuICAgIHJldHVybiBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH0ke2xvY2F0aW9uLmhhc2h9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBQYW5lbEN0cmwgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9wYW5lbCc7XG5pbXBvcnQgeyBDb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgTGVnYWN5UmVzcG9uc2VEYXRhLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUGFuZWxFdmVudHMsXG4gIFRpbWVSYW5nZSxcbiAgdG9EYXRhRnJhbWVEVE8sXG4gIHRvTGVnYWN5UmVzcG9uc2VEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBQYW5lbFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvcXVlcnkvc3RhdGUvUGFuZWxRdWVyeVJ1bm5lcic7XG5cbmNsYXNzIE1ldHJpY3NQYW5lbEN0cmwgZXh0ZW5kcyBQYW5lbEN0cmwge1xuICBkZWNsYXJlIGRhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGk7XG4gIGRlY2xhcmUgcmFuZ2U6IFRpbWVSYW5nZTtcblxuICBjb250ZXh0U3J2OiBDb250ZXh0U3J2O1xuICBkYXRhc291cmNlU3J2OiBhbnk7XG4gIHRpbWVTcnY6IGFueTtcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgaW50ZXJ2YWw6IGFueTtcbiAgaW50ZXJ2YWxNczogYW55O1xuICByZXNvbHV0aW9uOiBhbnk7XG4gIHRpbWVJbmZvPzogc3RyaW5nO1xuICBza2lwRGF0YU9uSW5pdCA9IGZhbHNlO1xuICBkYXRhTGlzdDogTGVnYWN5UmVzcG9uc2VEYXRhW10gPSBbXTtcbiAgcXVlcnlTdWJzY3JpcHRpb24/OiBVbnN1YnNjcmliYWJsZSB8IG51bGw7XG4gIHVzZURhdGFGcmFtZXMgPSBmYWxzZTtcbiAgcGFuZWxEYXRhPzogUGFuZWxEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGFueSkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcblxuICAgIHRoaXMuY29udGV4dFNydiA9ICRpbmplY3Rvci5nZXQoJ2NvbnRleHRTcnYnKTtcbiAgICB0aGlzLmRhdGFzb3VyY2VTcnYgPSAkaW5qZWN0b3IuZ2V0KCdkYXRhc291cmNlU3J2Jyk7XG4gICAgdGhpcy50aW1lU3J2ID0gJGluamVjdG9yLmdldCgndGltZVNydicpO1xuICAgIHRoaXMudGVtcGxhdGVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0ZW1wbGF0ZVNydicpO1xuICAgIHRoaXMucGFuZWwuZGF0YXNvdXJjZSA9IHRoaXMucGFuZWwuZGF0YXNvdXJjZSB8fCBudWxsO1xuXG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucmVmcmVzaCwgdGhpcy5vbk1ldHJpY3NQYW5lbFJlZnJlc2guYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucGFuZWxUZWFyZG93biwgdGhpcy5vblBhbmVsVGVhckRvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQsIHRoaXMub25NZXRyaWNzUGFuZWxNb3VudGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1ldHJpY3NQYW5lbE1vdW50ZWQoKSB7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSB0aGlzLnBhbmVsLmdldFF1ZXJ5UnVubmVyKCkgYXMgUGFuZWxRdWVyeVJ1bm5lcjtcbiAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gcXVlcnlSdW5uZXJcbiAgICAgIC5nZXREYXRhKHsgd2l0aFRyYW5zZm9ybXM6IHRydWUsIHdpdGhGaWVsZENvbmZpZzogdHJ1ZSB9KVxuICAgICAgLnN1YnNjcmliZSh0aGlzLnBhbmVsRGF0YU9ic2VydmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgb25QYW5lbFRlYXJEb3duKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsUmVmcmVzaCgpIHtcbiAgICAvLyBpZ25vcmUgZmV0Y2hpbmcgZGF0YSBpZiBhbm90aGVyIHBhbmVsIGlzIGluIGZ1bGxzY3JlZW5cbiAgICBpZiAodGhpcy5vdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgd2UgaGF2ZSBzbmFwc2hvdCBkYXRhIHVzZSB0aGF0XG4gICAgaWYgKHRoaXMucGFuZWwuc25hcHNob3REYXRhKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZSgpO1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YTtcbiAgICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IHtcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgICBzZXJpZXM6IGRhdGEsXG4gICAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIERlZmVyIHBhbmVsIHJlbmRlcmluZyB0aWxsIHRoZSBuZXh0IGRpZ2VzdCBjeWNsZS5cbiAgICAgIC8vIEZvciBzb21lIHJlYXNvbiBzbmFwc2hvdCBwYW5lbHMgZG9uJ3QgaW5pdCBhdCB0aGlzIHRpbWUsIHNvIHRoaXMgaGVscHMgdG8gYXZvaWQgcmVuZGVyaW5nIGlzc3Vlcy5cbiAgICAgIHJldHVybiB0aGlzLiR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhU25hcHNob3RMb2FkLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIGxvYWRpbmcvZXJyb3Igc3RhdGVcbiAgICBkZWxldGUgdGhpcy5lcnJvcjtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgLy8gbG9hZCBkYXRhc291cmNlIHNlcnZpY2VcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlU3J2XG4gICAgICAuZ2V0KHRoaXMucGFuZWwuZGF0YXNvdXJjZSwgdGhpcy5wYW5lbC5zY29wZWRWYXJzKVxuICAgICAgLnRoZW4odGhpcy5pc3N1ZVF1ZXJpZXMuYmluZCh0aGlzKSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb2Nlc3NEYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAvLyBpZiBjYW5jZWxlZCAga2VlcCBsb2FkaW5nIHNldCB0byB0cnVlXG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQYW5lbCByZXF1ZXN0IGNhbmNlbGxlZCcsIGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlIHx8ICdSZXF1ZXN0IEVycm9yJztcblxuICAgIGlmIChlcnIuZGF0YSkge1xuICAgICAgaWYgKGVyci5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5kYXRhLm1lc3NhZ2U7XG4gICAgICB9IGVsc2UgaWYgKGVyci5kYXRhLmVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnIuZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gIH1cblxuICBhbmd1bGFyRGlydHlDaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuJHNjb3BlLiRyb290LiQkcGhhc2UpIHtcbiAgICAgIHRoaXMuJHNjb3BlLiRkaWdlc3QoKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGVzIHRoZSByZXNwb25zZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIHN0cmVhbVxuICBwYW5lbERhdGFPYnNlcnZlciA9IHtcbiAgICBuZXh0OiAoZGF0YTogUGFuZWxEYXRhKSA9PiB7XG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuRXJyb3IpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWdub3JlIGRhdGEgaW4gbG9hZGluZyBzdGF0ZVxuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5yZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHsgdGltZUluZm8gfSA9IGRhdGEucmVxdWVzdDtcbiAgICAgICAgaWYgKHRpbWVJbmZvKSB7XG4gICAgICAgICAgdGhpcy50aW1lSW5mbyA9IHRpbWVJbmZvO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRpbWVSYW5nZSkge1xuICAgICAgICB0aGlzLnJhbmdlID0gZGF0YS50aW1lUmFuZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnVzZURhdGFGcmFtZXMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRhRnJhbWVzKGRhdGEuc2VyaWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1ha2UgdGhlIHJlc3VsdHMgbG9vayBhcyBpZiB0aGV5IGNhbWUgZGlyZWN0bHkgZnJvbSBhIDw2LjIgZGF0YXNvdXJjZSByZXF1ZXN0XG4gICAgICAgIGNvbnN0IGxlZ2FjeSA9IGRhdGEuc2VyaWVzLm1hcCgodikgPT4gdG9MZWdhY3lSZXNwb25zZURhdGEodikpO1xuICAgICAgICB0aGlzLmhhbmRsZVF1ZXJ5UmVzdWx0KHsgZGF0YTogbGVnYWN5IH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gICAgfSxcbiAgfTtcblxuICB1cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZT86IERhdGFTb3VyY2VBcGkpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlIHx8IHRoaXMuZGF0YXNvdXJjZTtcbiAgICB0aGlzLnJhbmdlID0gdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpO1xuXG4gICAgY29uc3QgbmV3VGltZURhdGEgPSBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyh0aGlzLnBhbmVsLCB0aGlzLnJhbmdlKTtcbiAgICB0aGlzLnRpbWVJbmZvID0gbmV3VGltZURhdGEudGltZUluZm87XG4gICAgdGhpcy5yYW5nZSA9IG5ld1RpbWVEYXRhLnRpbWVSYW5nZTtcbiAgfVxuXG4gIGlzc3VlUXVlcmllcyhkYXRhc291cmNlOiBEYXRhU291cmNlQXBpKSB7XG4gICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZSk7XG5cbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuXG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLnBhbmVsIGFzIFBhbmVsTW9kZWw7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSBwYW5lbC5nZXRRdWVyeVJ1bm5lcigpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UnVubmVyLnJ1bih7XG4gICAgICBkYXRhc291cmNlOiBwYW5lbC5kYXRhc291cmNlLFxuICAgICAgcXVlcmllczogcGFuZWwudGFyZ2V0cyxcbiAgICAgIHBhbmVsSWQ6IHBhbmVsLmlkLFxuICAgICAgZGFzaGJvYXJkSWQ6IHRoaXMuZGFzaGJvYXJkLmlkLFxuICAgICAgdGltZXpvbmU6IHRoaXMuZGFzaGJvYXJkLmdldFRpbWV6b25lKCksXG4gICAgICB0aW1lSW5mbzogdGhpcy50aW1lSW5mbyxcbiAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIG1heERhdGFQb2ludHM6IHBhbmVsLm1heERhdGFQb2ludHMgfHwgdGhpcy53aWR0aCxcbiAgICAgIG1pbkludGVydmFsOiBwYW5lbC5pbnRlcnZhbCxcbiAgICAgIHNjb3BlZFZhcnM6IHBhbmVsLnNjb3BlZFZhcnMsXG4gICAgICBjYWNoZVRpbWVvdXQ6IHBhbmVsLmNhY2hlVGltZW91dCxcbiAgICAgIHRyYW5zZm9ybWF0aW9uczogcGFuZWwudHJhbnNmb3JtYXRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGF0YUZyYW1lcyhkYXRhOiBEYXRhRnJhbWVbXSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkICYmIHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IGRhdGEubWFwKChmcmFtZSkgPT4gdG9EYXRhRnJhbWVEVE8oZnJhbWUpKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhRnJhbWVzUmVjZWl2ZWQsIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUXVlcnlSZXN1bHQocmVzdWx0OiBEYXRhUXVlcnlSZXNwb25zZSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGEgc291cmNlIHF1ZXJ5IHJlc3VsdCBpbnZhbGlkLCBtaXNzaW5nIGRhdGEgZmllbGQ6JywgcmVzdWx0KTtcbiAgICAgIHJlc3VsdCA9IHsgZGF0YTogW10gfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhUmVjZWl2ZWQsIHJlc3VsdC5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIH07XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBwcm9maWxlciB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgQXBwRXZlbnQsXG4gIFBhbmVsRXZlbnRzLFxuICBQYW5lbFBsdWdpbk1ldGEsXG4gIEFuZ3VsYXJQYW5lbE1lbnVJdGVtLFxuICBFdmVudEJ1c0V4dGVuZGVkLFxuICBFdmVudEJ1c1Nydixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyIH0gZnJvbSAnYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlcic7XG5cbmV4cG9ydCBjbGFzcyBQYW5lbEN0cmwge1xuICBwYW5lbDogYW55O1xuICBlcnJvcjogYW55O1xuICBkZWNsYXJlIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbk5hbWUgPSAnJztcbiAgcGx1Z2luSWQgPSAnJztcbiAgZWRpdG9yVGFiczogYW55O1xuICAkc2NvcGU6IGFueTtcbiAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2U7XG4gICR0aW1lb3V0OiBhbnk7XG4gIGVkaXRNb2RlSW5pdGlhdGVkID0gZmFsc2U7XG4gIGRlY2xhcmUgaGVpZ2h0OiBudW1iZXI7XG4gIGRlY2xhcmUgd2lkdGg6IG51bWJlcjtcbiAgY29udGFpbmVySGVpZ2h0OiBhbnk7XG4gIGV2ZW50czogRXZlbnRCdXNFeHRlbmRlZDtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICB0aW1pbmc6IGFueTtcbiAgJGxvY2F0aW9uOiBBbmd1bGFyTG9jYXRpb25XcmFwcGVyO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsID8/ICRzY29wZS4kcGFyZW50LnBhbmVsO1xuICAgIHRoaXMuZGFzaGJvYXJkID0gdGhpcy5kYXNoYm9hcmQgPz8gJHNjb3BlLiRwYXJlbnQuZGFzaGJvYXJkO1xuICAgIHRoaXMuJGluamVjdG9yID0gJGluamVjdG9yO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHRpbWVvdXQgPSAkaW5qZWN0b3IuZ2V0KCckdGltZW91dCcpO1xuICAgIHRoaXMuZWRpdG9yVGFicyA9IFtdO1xuICAgIHRoaXMuJGxvY2F0aW9uID0gbmV3IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEJ1c1NydigpO1xuICAgIHRoaXMudGltaW5nID0ge307IC8vIG5vdCB1c2VkIGJ1dCBoZXJlIHRvIG5vdCBicmVhayBwbHVnaW5zXG5cbiAgICBjb25zdCBwbHVnaW4gPSBjb25maWcucGFuZWxzW3RoaXMucGFuZWwudHlwZV07XG4gICAgaWYgKHBsdWdpbikge1xuICAgICAgdGhpcy5wbHVnaW5JZCA9IHBsdWdpbi5pZDtcbiAgICAgIHRoaXMucGx1Z2luTmFtZSA9IHBsdWdpbi5uYW1lO1xuICAgIH1cblxuICAgICRzY29wZS4kb24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQubmFtZSwgKCkgPT4gdGhpcy5wYW5lbERpZE1vdW50KCkpO1xuICB9XG5cbiAgcGFuZWxEaWRNb3VudCgpIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50KTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRpYWxpemVkKTtcbiAgICB0aGlzLmRhc2hib2FyZC5wYW5lbEluaXRpYWxpemVkKHRoaXMucGFuZWwpO1xuICB9XG5cbiAgcmVuZGVyaW5nQ29tcGxldGVkKCkge1xuICAgIHByb2ZpbGVyLnJlbmRlcmluZ0NvbXBsZXRlZCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnBhbmVsLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1Ymxpc2hBcHBFdmVudDxUPihldmVudDogQXBwRXZlbnQ8VD4sIHBheWxvYWQ/OiBUKSB7XG4gICAgdGhpcy4kc2NvcGUuJHJvb3QuYXBwRXZlbnQoZXZlbnQsIHBheWxvYWQpO1xuICB9XG5cbiAgaW5pdEVkaXRNb2RlKCkge1xuICAgIGlmICghdGhpcy5lZGl0TW9kZUluaXRpYXRlZCkge1xuICAgICAgdGhpcy5lZGl0TW9kZUluaXRpYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmVkaXRNb2RlSW5pdGlhbGl6ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkaXRvclRhYih0aXRsZTogc3RyaW5nLCBkaXJlY3RpdmVGbjogYW55LCBpbmRleD86IG51bWJlciwgaWNvbj86IGFueSkge1xuICAgIGNvbnN0IGVkaXRvclRhYiA9IHsgdGl0bGUsIGRpcmVjdGl2ZUZuLCBpY29uIH07XG5cbiAgICBpZiAoaXNTdHJpbmcoZGlyZWN0aXZlRm4pKSB7XG4gICAgICBlZGl0b3JUYWIuZGlyZWN0aXZlRm4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlVXJsOiBkaXJlY3RpdmVGbiB9O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5zcGxpY2UoaW5kZXgsIDAsIGVkaXRvclRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5wdXNoKGVkaXRvclRhYik7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXh0ZW5kZWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnU6IEFuZ3VsYXJQYW5lbE1lbnVJdGVtW10gPSBbXTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRQYW5lbEFjdGlvbnMsIG1lbnUpO1xuICAgIHJldHVybiBtZW51O1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgaW4gc3ViLWNsYXNzIHRvIGFkZCBpdGVtcyBiZWZvcmUgZXh0ZW5kZWQgbWVudVxuICBhc3luYyBnZXRBZGRpdGlvbmFsTWVudUl0ZW1zKCk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmQub3RoZXJQYW5lbEluRnVsbHNjcmVlbih0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcihwYXlsb2FkPzogYW55KSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5yZW5kZXIsIHBheWxvYWQpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVuIGZyb20gcmVhY3RcbiAgb25QbHVnaW5UeXBlQ2hhbmdlID0gKHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhKSA9PiB7fTtcbn1cbiIsImltcG9ydCB7IGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuXG5leHBvcnQgY2xhc3MgUXVlcnlDdHJsPFQgPSBhbnk+IHtcbiAgdGFyZ2V0ITogVDtcbiAgZGF0YXNvdXJjZSE6IGFueTtcbiAgcGFuZWxDdHJsITogYW55O1xuICBwYW5lbDogYW55O1xuICBoYXNSYXdNb2RlITogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuICBpc0xhc3RRdWVyeTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbnksIHB1YmxpYyAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWxDdHJsID0gdGhpcy5wYW5lbEN0cmwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQgPz8gJHNjb3BlLmN0cmwudGFyZ2V0O1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IHRoaXMuZGF0YXNvdXJjZSA/PyAkc2NvcGUuY3RybC5kYXRhc291cmNlO1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsQ3RybD8ucGFuZWwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMuaXNMYXN0UXVlcnkgPSBpbmRleE9mKHRoaXMucGFuZWwudGFyZ2V0cywgdGhpcy50YXJnZXQpID09PSB0aGlzLnBhbmVsLnRhcmdldHMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBtYXAsIHdpdGhvdXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZ2V0VmFsdWVGb3JtYXRzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5PcHRpb25zQ3RybCB7XG4gIHBhbmVsOiBhbnk7XG4gIHBhbmVsQ3RybDogYW55O1xuICBjb2xvck1vZGVzOiBhbnk7XG4gIGNvbHVtblN0eWxlczogYW55O1xuICBjb2x1bW5UeXBlczogYW55O1xuICBmb250U2l6ZXM6IGFueTtcbiAgZGF0ZUZvcm1hdHM6IGFueTtcbiAgYWRkQ29sdW1uU2VnbWVudDogYW55O1xuICB1bml0Rm9ybWF0czogYW55O1xuICBnZXRDb2x1bW5OYW1lczogYW55O1xuICBhY3RpdmVTdHlsZUluZGV4OiBudW1iZXI7XG4gIG1hcHBpbmdUeXBlczogYW55O1xuXG4gIGFsaWduVHlwZXM6IGFueTtcbiAgc3RhdGljIHJlYWRvbmx5IGFsaWduVHlwZXNFbnVtID0gW1xuICAgIHsgdGV4dDogJ2F1dG8nLCB2YWx1ZTogJycgfSxcbiAgICB7IHRleHQ6ICdsZWZ0JywgdmFsdWU6ICdsZWZ0JyB9LFxuICAgIHsgdGV4dDogJ2NlbnRlcicsIHZhbHVlOiAnY2VudGVyJyB9LFxuICAgIHsgdGV4dDogJ3JpZ2h0JywgdmFsdWU6ICdyaWdodCcgfSxcbiAgXTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55KSB7XG4gICAgJHNjb3BlLmVkaXRvciA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGl2ZVN0eWxlSW5kZXggPSAwO1xuICAgIHRoaXMucGFuZWxDdHJsID0gJHNjb3BlLmN0cmw7XG4gICAgdGhpcy5wYW5lbCA9IHRoaXMucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMudW5pdEZvcm1hdHMgPSBnZXRWYWx1ZUZvcm1hdHMoKTtcbiAgICB0aGlzLmNvbG9yTW9kZXMgPSBbXG4gICAgICB7IHRleHQ6ICdEaXNhYmxlZCcsIHZhbHVlOiBudWxsIH0sXG4gICAgICB7IHRleHQ6ICdDZWxsJywgdmFsdWU6ICdjZWxsJyB9LFxuICAgICAgeyB0ZXh0OiAnVmFsdWUnLCB2YWx1ZTogJ3ZhbHVlJyB9LFxuICAgICAgeyB0ZXh0OiAnUm93JywgdmFsdWU6ICdyb3cnIH0sXG4gICAgXTtcbiAgICB0aGlzLmNvbHVtblR5cGVzID0gW1xuICAgICAgeyB0ZXh0OiAnTnVtYmVyJywgdmFsdWU6ICdudW1iZXInIH0sXG4gICAgICB7IHRleHQ6ICdTdHJpbmcnLCB2YWx1ZTogJ3N0cmluZycgfSxcbiAgICAgIHsgdGV4dDogJ0RhdGUnLCB2YWx1ZTogJ2RhdGUnIH0sXG4gICAgICB7IHRleHQ6ICdIaWRkZW4nLCB2YWx1ZTogJ2hpZGRlbicgfSxcbiAgICBdO1xuICAgIHRoaXMuZm9udFNpemVzID0gWyc4MCUnLCAnOTAlJywgJzEwMCUnLCAnMTEwJScsICcxMjAlJywgJzEzMCUnLCAnMTUwJScsICcxNjAlJywgJzE4MCUnLCAnMjAwJScsICcyMjAlJywgJzI1MCUnXTtcbiAgICB0aGlzLmRhdGVGb3JtYXRzID0gW1xuICAgICAgeyB0ZXh0OiAnWVlZWS1NTS1ERCBISDptbTpzcycsIHZhbHVlOiAnWVlZWS1NTS1ERCBISDptbTpzcycgfSxcbiAgICAgIHsgdGV4dDogJ1lZWVktTU0tREQgSEg6bW06c3MuU1NTJywgdmFsdWU6ICdZWVlZLU1NLUREIEhIOm1tOnNzLlNTUycgfSxcbiAgICAgIHsgdGV4dDogJ01NL0REL1lZIGg6bW06c3MgYScsIHZhbHVlOiAnTU0vREQvWVkgaDptbTpzcyBhJyB9LFxuICAgICAgeyB0ZXh0OiAnTU1NTSBELCBZWVlZIExUJywgdmFsdWU6ICdNTU1NIEQsIFlZWVkgTFQnIH0sXG4gICAgICB7IHRleHQ6ICdZWVlZLU1NLUREJywgdmFsdWU6ICdZWVlZLU1NLUREJyB9LFxuICAgIF07XG4gICAgdGhpcy5tYXBwaW5nVHlwZXMgPSBbXG4gICAgICB7IHRleHQ6ICdWYWx1ZSB0byB0ZXh0JywgdmFsdWU6IDEgfSxcbiAgICAgIHsgdGV4dDogJ1JhbmdlIHRvIHRleHQnLCB2YWx1ZTogMiB9LFxuICAgIF07XG4gICAgdGhpcy5hbGlnblR5cGVzID0gQ29sdW1uT3B0aW9uc0N0cmwuYWxpZ25UeXBlc0VudW07XG5cbiAgICB0aGlzLmdldENvbHVtbk5hbWVzID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBhbmVsQ3RybC50YWJsZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFwKHRoaXMucGFuZWxDdHJsLnRhYmxlLmNvbHVtbnMsIChjb2w6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gY29sLnRleHQ7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5vbkNvbG9yQ2hhbmdlID0gdGhpcy5vbkNvbG9yQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cblxuICBzZXRVbml0Rm9ybWF0KGNvbHVtbjogYW55KSB7XG4gICAgcmV0dXJuICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBjb2x1bW4udW5pdCA9IHZhbHVlO1xuICAgICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGFkZENvbHVtblN0eWxlKCkge1xuICAgIGNvbnN0IG5ld1N0eWxlUnVsZTogb2JqZWN0ID0ge1xuICAgICAgdW5pdDogJ3Nob3J0JyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgYWxpYXM6ICcnLFxuICAgICAgZGVjaW1hbHM6IDIsXG4gICAgICBjb2xvcnM6IFsncmdiYSgyNDUsIDU0LCA1NCwgMC45KScsICdyZ2JhKDIzNywgMTI5LCA0MCwgMC44OSknLCAncmdiYSg1MCwgMTcyLCA0NSwgMC45NyknXSxcbiAgICAgIGNvbG9yTW9kZTogbnVsbCxcbiAgICAgIHBhdHRlcm46ICcnLFxuICAgICAgZGF0ZUZvcm1hdDogJ1lZWVktTU0tREQgSEg6bW06c3MnLFxuICAgICAgdGhyZXNob2xkczogW10sXG4gICAgICBtYXBwaW5nVHlwZTogMSxcbiAgICAgIGFsaWduOiAnYXV0bycsXG4gICAgfTtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMucGFuZWwuc3R5bGVzO1xuICAgIGNvbnN0IHN0eWxlc0NvdW50ID0gc3R5bGVzLmxlbmd0aDtcbiAgICBsZXQgaW5kZXhUb0luc2VydCA9IHN0eWxlc0NvdW50O1xuXG4gICAgLy8gY2hlY2sgaWYgbGFzdCBpcyBhIGNhdGNoIGFsbCBydWxlLCB0aGVuIGFkZCBpdCBiZWZvcmUgdGhhdCBvbmVcbiAgICBpZiAoc3R5bGVzQ291bnQgPiAwKSB7XG4gICAgICBjb25zdCBsYXN0ID0gc3R5bGVzW3N0eWxlc0NvdW50IC0gMV07XG4gICAgICBpZiAobGFzdC5wYXR0ZXJuID09PSAnLy4qLycpIHtcbiAgICAgICAgaW5kZXhUb0luc2VydCA9IHN0eWxlc0NvdW50IC0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHlsZXMuc3BsaWNlKGluZGV4VG9JbnNlcnQsIDAsIG5ld1N0eWxlUnVsZSk7XG4gICAgdGhpcy5hY3RpdmVTdHlsZUluZGV4ID0gaW5kZXhUb0luc2VydDtcbiAgfVxuXG4gIHJlbW92ZUNvbHVtblN0eWxlKHN0eWxlOiBhbnkpIHtcbiAgICB0aGlzLnBhbmVsLnN0eWxlcyA9IHdpdGhvdXQodGhpcy5wYW5lbC5zdHlsZXMsIHN0eWxlKTtcbiAgfVxuXG4gIGludmVydENvbG9yT3JkZXIoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHJlZiA9IHRoaXMucGFuZWwuc3R5bGVzW2luZGV4XS5jb2xvcnM7XG4gICAgY29uc3QgY29weSA9IHJlZlswXTtcbiAgICByZWZbMF0gPSByZWZbMl07XG4gICAgcmVmWzJdID0gY29weTtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uQ29sb3JDaGFuZ2Uoc3R5bGU6IGFueSwgY29sb3JJbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChuZXdDb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICBzdHlsZS5jb2xvcnNbY29sb3JJbmRleF0gPSBuZXdDb2xvcjtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGFkZFZhbHVlTWFwKHN0eWxlOiBhbnkpIHtcbiAgICBpZiAoIXN0eWxlLnZhbHVlTWFwcykge1xuICAgICAgc3R5bGUudmFsdWVNYXBzID0gW107XG4gICAgfVxuICAgIHN0eWxlLnZhbHVlTWFwcy5wdXNoKHsgdmFsdWU6ICcnLCB0ZXh0OiAnJyB9KTtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbW92ZVZhbHVlTWFwKHN0eWxlOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBzdHlsZS52YWx1ZU1hcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZW5kZXIoKTtcbiAgfVxuXG4gIGFkZFJhbmdlTWFwKHN0eWxlOiBhbnkpIHtcbiAgICBpZiAoIXN0eWxlLnJhbmdlTWFwcykge1xuICAgICAgc3R5bGUucmFuZ2VNYXBzID0gW107XG4gICAgfVxuICAgIHN0eWxlLnJhbmdlTWFwcy5wdXNoKHsgZnJvbTogJycsIHRvOiAnJywgdGV4dDogJycgfSk7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cblxuICByZW1vdmVSYW5nZU1hcChzdHlsZTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgc3R5bGUucmFuZ2VNYXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbk9wdGlvbnNUYWIoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAncHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlLW9sZC9jb2x1bW5fb3B0aW9ucy5odG1sJyxcbiAgICBjb250cm9sbGVyOiBDb2x1bW5PcHRpb25zQ3RybCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGZpbmQsIG1hcCwgd2l0aG91dCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1lcnMgfSBmcm9tICcuL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBDb2x1bW5TdHlsZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVQYW5lbEVkaXRvckN0cmwge1xuICBwYW5lbDogYW55O1xuICBwYW5lbEN0cmw6IGFueTtcbiAgdHJhbnNmb3JtZXJzOiBhbnk7XG4gIGZvbnRTaXplczogYW55O1xuICBhZGRDb2x1bW5TZWdtZW50OiBhbnk7XG4gIGdldENvbHVtbk5hbWVzOiBhbnk7XG4gIGNhblNldENvbHVtbnMgPSBmYWxzZTtcbiAgY29sdW1uc0hlbHBNZXNzYWdlID0gJyc7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgcHJpdmF0ZSB1aVNlZ21lbnRTcnY6IGFueSkge1xuICAgICRzY29wZS5lZGl0b3IgPSB0aGlzO1xuICAgIHRoaXMucGFuZWxDdHJsID0gJHNjb3BlLmN0cmw7XG4gICAgdGhpcy5wYW5lbCA9IHRoaXMucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMudHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzO1xuICAgIHRoaXMuZm9udFNpemVzID0gWyc4MCUnLCAnOTAlJywgJzEwMCUnLCAnMTEwJScsICcxMjAlJywgJzEzMCUnLCAnMTUwJScsICcxNjAlJywgJzE4MCUnLCAnMjAwJScsICcyMjAlJywgJzI1MCUnXTtcbiAgICB0aGlzLmFkZENvbHVtblNlZ21lbnQgPSB1aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xuICAgIHRoaXMudXBkYXRlVHJhbnNmb3JtSGludHMoKTtcbiAgfVxuXG4gIHVwZGF0ZVRyYW5zZm9ybUhpbnRzKCkge1xuICAgIHRoaXMuY2FuU2V0Q29sdW1ucyA9IGZhbHNlO1xuICAgIHRoaXMuY29sdW1uc0hlbHBNZXNzYWdlID0gJyc7XG5cbiAgICBzd2l0Y2ggKHRoaXMucGFuZWwudHJhbnNmb3JtKSB7XG4gICAgICBjYXNlICd0aW1lc2VyaWVzX2FnZ3JlZ2F0aW9ucyc6IHtcbiAgICAgICAgdGhpcy5jYW5TZXRDb2x1bW5zID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdqc29uJzoge1xuICAgICAgICB0aGlzLmNhblNldENvbHVtbnMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3RhYmxlJzoge1xuICAgICAgICB0aGlzLmNvbHVtbnNIZWxwTWVzc2FnZSA9ICdDb2x1bW5zIGFuZCB0aGVpciBvcmRlciBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgZGF0YSBxdWVyeSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29sdW1uT3B0aW9ucygpIHtcbiAgICBpZiAoIXRoaXMucGFuZWxDdHJsLmRhdGFSYXcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIH1cbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy50cmFuc2Zvcm1lcnNbdGhpcy5wYW5lbC50cmFuc2Zvcm1dLmdldENvbHVtbnModGhpcy5wYW5lbEN0cmwuZGF0YVJhdyk7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBtYXAoY29sdW1ucywgKGM6IGFueSkgPT4gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHZhbHVlOiBjLnRleHQgfSkpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VnbWVudHMpO1xuICB9XG5cbiAgYWRkQ29sdW1uKCkge1xuICAgIGNvbnN0IGNvbHVtbnMgPSB0cmFuc2Zvcm1lcnNbdGhpcy5wYW5lbC50cmFuc2Zvcm1dLmdldENvbHVtbnModGhpcy5wYW5lbEN0cmwuZGF0YVJhdyk7XG4gICAgY29uc3QgY29sdW1uOiBhbnkgPSBmaW5kKGNvbHVtbnMsIHsgdGV4dDogdGhpcy5hZGRDb2x1bW5TZWdtZW50LnZhbHVlIH0pO1xuXG4gICAgaWYgKGNvbHVtbikge1xuICAgICAgdGhpcy5wYW5lbC5jb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGx1c0J1dHRvbiA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICB0aGlzLmFkZENvbHVtblNlZ21lbnQuaHRtbCA9IHBsdXNCdXR0b24uaHRtbDtcbiAgICB0aGlzLmFkZENvbHVtblNlZ21lbnQudmFsdWUgPSBwbHVzQnV0dG9uLnZhbHVlO1xuICB9XG5cbiAgdHJhbnNmb3JtQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnBhbmVsLmNvbHVtbnMgPSBbXTtcbiAgICBpZiAodGhpcy5wYW5lbC50cmFuc2Zvcm0gPT09ICdhbm5vdGF0aW9ucycpIHtcbiAgICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucGFuZWwudHJhbnNmb3JtID09PSAndGltZXNlcmllc19hZ2dyZWdhdGlvbnMnKSB7XG4gICAgICAgIHRoaXMucGFuZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogJ0F2ZycsIHZhbHVlOiAnYXZnJyB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVUcmFuc2Zvcm1IaW50cygpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cblxuICByZW1vdmVDb2x1bW4oY29sdW1uOiBDb2x1bW5TdHlsZSkge1xuICAgIHRoaXMucGFuZWwuY29sdW1ucyA9IHdpdGhvdXQodGhpcy5wYW5lbC5jb2x1bW5zLCBjb2x1bW4pO1xuICAgIHRoaXMucGFuZWxDdHJsLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWJsZVBhbmVsRWRpdG9yKHVpU2VnbWVudFNydjogYW55KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAncHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlLW9sZC9lZGl0b3IuaHRtbCcsXG4gICAgY29udHJvbGxlcjogVGFibGVQYW5lbEVkaXRvckN0cmwsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgTWV0cmljc1BhbmVsQ3RybCB9IGZyb20gJ2FwcC9wbHVnaW5zL3Nkayc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1EYXRhVG9UYWJsZSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IHRhYmxlUGFuZWxFZGl0b3IgfSBmcm9tICcuL2VkaXRvcic7XG5pbXBvcnQgeyBjb2x1bW5PcHRpb25zVGFiIH0gZnJvbSAnLi9jb2x1bW5fb3B0aW9ucyc7XG5pbXBvcnQgeyBUYWJsZVJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBpc1RhYmxlRGF0YSwgUGFuZWxFdmVudHMsIFBhbmVsUGx1Z2luLCBQYW5lbFByb3BzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJ2FwcC9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBwbHlGaWx0ZXJGcm9tVGFibGUgfSBmcm9tICdhcHAvZmVhdHVyZXMvdmFyaWFibGVzL2FkaG9jL2FjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVQYW5lbEN0cmwgZXh0ZW5kcyBNZXRyaWNzUGFuZWxDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ21vZHVsZS5odG1sJztcblxuICBwYWdlSW5kZXg6IG51bWJlcjtcbiAgZGF0YVJhdzogYW55O1xuICB0YWJsZTogYW55O1xuICByZW5kZXJlcjogYW55O1xuICBwYW5lbEhhc1Jvd0NvbG9yTW9kZTogYm9vbGVhbjtcbiAgcGFuZWxIYXNMaW5rczogYm9vbGVhbjtcblxuICBwYW5lbERlZmF1bHRzOiBhbnkgPSB7XG4gICAgdGFyZ2V0czogW3t9XSxcbiAgICB0cmFuc2Zvcm06ICd0aW1lc2VyaWVzX3RvX2NvbHVtbnMnLFxuICAgIHBhZ2VTaXplOiBudWxsLFxuICAgIHNob3dIZWFkZXI6IHRydWUsXG4gICAgc3R5bGVzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgcGF0dGVybjogJ1RpbWUnLFxuICAgICAgICBhbGlhczogJ1RpbWUnLFxuICAgICAgICBkYXRlRm9ybWF0OiAnWVlZWS1NTS1ERCBISDptbTpzcycsXG4gICAgICAgIGFsaWduOiAnYXV0bycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1bml0OiAnc2hvcnQnLFxuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgYWxpYXM6ICcnLFxuICAgICAgICBkZWNpbWFsczogMixcbiAgICAgICAgY29sb3JzOiBbJ3JnYmEoMjQ1LCA1NCwgNTQsIDAuOSknLCAncmdiYSgyMzcsIDEyOSwgNDAsIDAuODkpJywgJ3JnYmEoNTAsIDE3MiwgNDUsIDAuOTcpJ10sXG4gICAgICAgIGNvbG9yTW9kZTogbnVsbCxcbiAgICAgICAgcGF0dGVybjogJy8uKi8nLFxuICAgICAgICB0aHJlc2hvbGRzOiBbXSxcbiAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgY29sdW1uczogW10sXG5cbiAgICBmb250U2l6ZTogJzEwMCUnLFxuICAgIHNvcnQ6IHsgY29sOiAwLCBkZXNjOiB0cnVlIH0sXG4gIH07XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgJGluamVjdG9yOiBhbnksIHByaXZhdGUgYW5ub3RhdGlvbnNTcnY6IGFueSwgcHJpdmF0ZSAkc2FuaXRpemU6IGFueSkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcblxuICAgIHRoaXMucGFnZUluZGV4ID0gMDtcblxuICAgIGlmICh0aGlzLnBhbmVsLnN0eWxlcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0aGlzLnBhbmVsLnN0eWxlcyA9IHRoaXMucGFuZWwuY29sdW1ucztcbiAgICAgIHRoaXMucGFuZWwuY29sdW1ucyA9IHRoaXMucGFuZWwuZmllbGRzO1xuICAgICAgZGVsZXRlIHRoaXMucGFuZWwuY29sdW1ucztcbiAgICAgIGRlbGV0ZSB0aGlzLnBhbmVsLmZpZWxkcztcbiAgICB9XG5cbiAgICBkZWZhdWx0cyh0aGlzLnBhbmVsLCB0aGlzLnBhbmVsRGVmYXVsdHMpO1xuXG4gICAgdGhpcy5wYW5lbEhhc1Jvd0NvbG9yTW9kZSA9IEJvb2xlYW4odGhpcy5wYW5lbC5zdHlsZXMuZmluZCgoc3R5bGU6IGFueSkgPT4gc3R5bGUuY29sb3JNb2RlID09PSAncm93JykpO1xuICAgIHRoaXMucGFuZWxIYXNMaW5rcyA9IEJvb2xlYW4odGhpcy5wYW5lbC5zdHlsZXMuZmluZCgoc3R5bGU6IGFueSkgPT4gc3R5bGUubGluaykpO1xuXG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMuZGF0YVJlY2VpdmVkLCB0aGlzLm9uRGF0YVJlY2VpdmVkLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFTbmFwc2hvdExvYWQsIHRoaXMub25EYXRhUmVjZWl2ZWQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMuZWRpdE1vZGVJbml0aWFsaXplZCwgdGhpcy5vbkluaXRFZGl0TW9kZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9uSW5pdEVkaXRNb2RlKCkge1xuICAgIHRoaXMuYWRkRWRpdG9yVGFiKCdPcHRpb25zJywgdGFibGVQYW5lbEVkaXRvciwgMik7XG4gICAgdGhpcy5hZGRFZGl0b3JUYWIoJ0NvbHVtbiBTdHlsZXMnLCBjb2x1bW5PcHRpb25zVGFiLCAzKTtcbiAgfVxuXG4gIG1pZ3JhdGVUb1BhbmVsKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMub25QbHVnaW5UeXBlQ2hhbmdlKGNvbmZpZy5wYW5lbHNbdHlwZV0pO1xuICB9XG5cbiAgaXNzdWVRdWVyaWVzKGRhdGFzb3VyY2U6IGFueSkge1xuICAgIHRoaXMucGFnZUluZGV4ID0gMDtcblxuICAgIGlmICh0aGlzLnBhbmVsLnRyYW5zZm9ybSA9PT0gJ2Fubm90YXRpb25zJykge1xuICAgICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbnNTcnZcbiAgICAgICAgLmdldEFubm90YXRpb25zKHtcbiAgICAgICAgICBkYXNoYm9hcmQ6IHRoaXMuZGFzaGJvYXJkLFxuICAgICAgICAgIHBhbmVsOiB0aGlzLnBhbmVsLFxuICAgICAgICAgIHJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoYW5ubzogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kYXRhUmF3ID0gYW5ubztcbiAgICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IDA7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICByZXR1cm4geyBkYXRhOiB0aGlzLmRhdGFSYXcgfTsgLy8gTm90IHVzZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLmlzc3VlUXVlcmllcyhkYXRhc291cmNlKTtcbiAgfVxuXG4gIG9uRGF0YVJlY2VpdmVkKGRhdGFMaXN0OiBhbnkpIHtcbiAgICB0aGlzLmRhdGFSYXcgPSBkYXRhTGlzdDtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IDA7XG5cbiAgICAvLyBhdXRvbWF0aWNhbGx5IGNvcnJlY3QgdHJhbnNmb3JtIG1vZGUgYmFzZWQgb24gZGF0YVxuICAgIGlmICh0aGlzLmRhdGFSYXcgJiYgdGhpcy5kYXRhUmF3Lmxlbmd0aCkge1xuICAgICAgaWYgKGlzVGFibGVEYXRhKHRoaXMuZGF0YVJhd1swXSkpIHtcbiAgICAgICAgdGhpcy5wYW5lbC50cmFuc2Zvcm0gPSAndGFibGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVJhd1swXS50eXBlID09PSAnZG9jcycpIHtcbiAgICAgICAgICB0aGlzLnBhbmVsLnRyYW5zZm9ybSA9ICdqc29uJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5wYW5lbC50cmFuc2Zvcm0gPT09ICd0YWJsZScgfHwgdGhpcy5wYW5lbC50cmFuc2Zvcm0gPT09ICdqc29uJykge1xuICAgICAgICAgICAgdGhpcy5wYW5lbC50cmFuc2Zvcm0gPSAndGltZXNlcmllc190b19yb3dzJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMudGFibGUgPSB0cmFuc2Zvcm1EYXRhVG9UYWJsZSh0aGlzLmRhdGFSYXcsIHRoaXMucGFuZWwpO1xuICAgIHRoaXMudGFibGUuc29ydCh0aGlzLnBhbmVsLnNvcnQpO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUYWJsZVJlbmRlcmVyKFxuICAgICAgdGhpcy5wYW5lbCxcbiAgICAgIHRoaXMudGFibGUsXG4gICAgICB0aGlzLmRhc2hib2FyZC5nZXRUaW1lem9uZSgpLFxuICAgICAgdGhpcy4kc2FuaXRpemUsXG4gICAgICB0aGlzLnRlbXBsYXRlU3J2LFxuICAgICAgY29uZmlnLnRoZW1lXG4gICAgKTtcblxuICAgIHJldHVybiBzdXBlci5yZW5kZXIodGhpcy50YWJsZSk7XG4gIH1cblxuICB0b2dnbGVDb2x1bW5Tb3J0KGNvbDogYW55LCBjb2xJbmRleDogYW55KSB7XG4gICAgLy8gcmVtb3ZlIHNvcnQgZmxhZyBmcm9tIGN1cnJlbnQgY29sdW1uXG4gICAgaWYgKHRoaXMudGFibGUuY29sdW1uc1t0aGlzLnBhbmVsLnNvcnQuY29sXSkge1xuICAgICAgdGhpcy50YWJsZS5jb2x1bW5zW3RoaXMucGFuZWwuc29ydC5jb2xdLnNvcnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYW5lbC5zb3J0LmNvbCA9PT0gY29sSW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLnBhbmVsLnNvcnQuZGVzYykge1xuICAgICAgICB0aGlzLnBhbmVsLnNvcnQuZGVzYyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYW5lbC5zb3J0LmNvbCA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFuZWwuc29ydC5jb2wgPSBjb2xJbmRleDtcbiAgICAgIHRoaXMucGFuZWwuc29ydC5kZXNjID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGxpbmsoc2NvcGU6IGFueSwgZWxlbTogSlF1ZXJ5LCBhdHRyczogYW55LCBjdHJsOiBUYWJsZVBhbmVsQ3RybCkge1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgY29uc3QgcGFuZWwgPSBjdHJsLnBhbmVsO1xuICAgIGxldCBwYWdlQ291bnQgPSAwO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGFibGVIZWlnaHQoKSB7XG4gICAgICBsZXQgcGFuZWxIZWlnaHQgPSBjdHJsLmhlaWdodDtcblxuICAgICAgaWYgKHBhZ2VDb3VudCA+IDEpIHtcbiAgICAgICAgcGFuZWxIZWlnaHQgLT0gMjY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYW5lbEhlaWdodCAtIDMxICsgJ3B4JztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUYWJsZVJvd3ModGJvZHlFbGVtOiBKUXVlcnkpIHtcbiAgICAgIGN0cmwucmVuZGVyZXIuc2V0VGFibGUoZGF0YSk7XG4gICAgICB0Ym9keUVsZW0uZW1wdHkoKTtcbiAgICAgIHRib2R5RWxlbS5odG1sKGN0cmwucmVuZGVyZXIucmVuZGVyKGN0cmwucGFnZUluZGV4KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUGFnZShlOiBhbnkpIHtcbiAgICAgIGNvbnN0IGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgY3RybC5wYWdlSW5kZXggPSBwYXJzZUludChlbC50ZXh0KCksIDEwKSAtIDE7XG4gICAgICByZW5kZXJQYW5lbCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFBhZ2luYXRpb25Db250cm9scyhmb290ZXJFbGVtOiBKUXVlcnkpIHtcbiAgICAgIGZvb3RlckVsZW0uZW1wdHkoKTtcblxuICAgICAgY29uc3QgcGFnZVNpemUgPSBwYW5lbC5wYWdlU2l6ZSB8fCAxMDA7XG4gICAgICBwYWdlQ291bnQgPSBNYXRoLmNlaWwoZGF0YS5yb3dzLmxlbmd0aCAvIHBhZ2VTaXplKTtcbiAgICAgIGlmIChwYWdlQ291bnQgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydFBhZ2UgPSBNYXRoLm1heChjdHJsLnBhZ2VJbmRleCAtIDMsIDApO1xuICAgICAgY29uc3QgZW5kUGFnZSA9IE1hdGgubWluKHBhZ2VDb3VudCwgc3RhcnRQYWdlICsgOSk7XG5cbiAgICAgIGNvbnN0IHBhZ2luYXRpb25MaXN0ID0gJCgnPHVsPjwvdWw+Jyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPCBlbmRQYWdlOyBpKyspIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBpID09PSBjdHJsLnBhZ2VJbmRleCA/ICdhY3RpdmUnIDogJyc7XG4gICAgICAgIGNvbnN0IHBhZ2VMaW5rRWxlbSA9ICQoXG4gICAgICAgICAgJzxsaT48YSBjbGFzcz1cInRhYmxlLXBhbmVsLXBhZ2UtbGluayBwb2ludGVyICcgKyBhY3RpdmVDbGFzcyArICdcIj4nICsgKGkgKyAxKSArICc8L2E+PC9saT4nXG4gICAgICAgICk7XG4gICAgICAgIHBhZ2luYXRpb25MaXN0LmFwcGVuZChwYWdlTGlua0VsZW0pO1xuICAgICAgfVxuXG4gICAgICBmb290ZXJFbGVtLmFwcGVuZChwYWdpbmF0aW9uTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUGFuZWwoKSB7XG4gICAgICBjb25zdCBwYW5lbEVsZW0gPSBlbGVtLnBhcmVudHMoJy5wYW5lbC1jb250ZW50Jyk7XG4gICAgICBjb25zdCByb290RWxlbSA9IGVsZW0uZmluZCgnLnRhYmxlLXBhbmVsLXNjcm9sbCcpO1xuICAgICAgY29uc3QgdGJvZHlFbGVtID0gZWxlbS5maW5kKCd0Ym9keScpO1xuICAgICAgY29uc3QgZm9vdGVyRWxlbSA9IGVsZW0uZmluZCgnLnRhYmxlLXBhbmVsLWZvb3RlcicpO1xuXG4gICAgICBlbGVtLmNzcyh7ICdmb250LXNpemUnOiBwYW5lbC5mb250U2l6ZSB9KTtcbiAgICAgIHBhbmVsRWxlbS5hZGRDbGFzcygndGFibGUtcGFuZWwtY29udGVudCcpO1xuXG4gICAgICBhcHBlbmRUYWJsZVJvd3ModGJvZHlFbGVtKTtcbiAgICAgIGFwcGVuZFBhZ2luYXRpb25Db250cm9scyhmb290ZXJFbGVtKTtcblxuICAgICAgcm9vdEVsZW0uY3NzKHsgJ21heC1oZWlnaHQnOiBnZXRUYWJsZUhlaWdodCgpIH0pO1xuICAgIH1cblxuICAgIC8vIGhvb2sgdXAgbGluayB0b29sdGlwc1xuICAgIGVsZW0udG9vbHRpcCh7XG4gICAgICBzZWxlY3RvcjogJ1tkYXRhLWxpbmstdG9vbHRpcF0nLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gYWRkRmlsdGVyQ2xpY2tlZChlOiBhbnkpIHtcbiAgICAgIGNvbnN0IGZpbHRlckRhdGEgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgpO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YXNvdXJjZTogcGFuZWwuZGF0YXNvdXJjZSxcbiAgICAgICAga2V5OiBkYXRhLmNvbHVtbnNbZmlsdGVyRGF0YS5jb2x1bW5dLnRleHQsXG4gICAgICAgIHZhbHVlOiBkYXRhLnJvd3NbZmlsdGVyRGF0YS5yb3ddW2ZpbHRlckRhdGEuY29sdW1uXSxcbiAgICAgICAgb3BlcmF0b3I6IGZpbHRlckRhdGEub3BlcmF0b3IsXG4gICAgICB9O1xuXG4gICAgICBkaXNwYXRjaChhcHBseUZpbHRlckZyb21UYWJsZShvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgZWxlbS5vbignY2xpY2snLCAnLnRhYmxlLXBhbmVsLXBhZ2UtbGluaycsIHN3aXRjaFBhZ2UpO1xuICAgIGVsZW0ub24oJ2NsaWNrJywgJy50YWJsZS1wYW5lbC1maWx0ZXItbGluaycsIGFkZEZpbHRlckNsaWNrZWQpO1xuXG4gICAgY29uc3QgdW5iaW5kRGVzdHJveSA9IHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICBlbGVtLm9mZignY2xpY2snLCAnLnRhYmxlLXBhbmVsLXBhZ2UtbGluaycpO1xuICAgICAgZWxlbS5vZmYoJ2NsaWNrJywgJy50YWJsZS1wYW5lbC1maWx0ZXItbGluaycpO1xuICAgICAgdW5iaW5kRGVzdHJveSgpO1xuICAgIH0pO1xuXG4gICAgY3RybC5ldmVudHMub24oUGFuZWxFdmVudHMucmVuZGVyLCAocmVuZGVyRGF0YTogYW55KSA9PiB7XG4gICAgICBkYXRhID0gcmVuZGVyRGF0YSB8fCBkYXRhO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmVuZGVyUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIGN0cmwucmVuZGVyaW5nQ29tcGxldGVkKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBQYW5lbFBsdWdpbihudWxsIGFzIHVua25vd24gYXMgQ29tcG9uZW50VHlwZTxQYW5lbFByb3BzPGFueT4+KTtcbnBsdWdpbi5hbmd1bGFyUGFuZWxDdHJsID0gVGFibGVQYW5lbEN0cmw7XG5wbHVnaW4uc2V0Tm9QYWRkaW5nKCk7XG4iLCJpbXBvcnQgeyBmaW5kLCBmaXJzdCwgaXNBcnJheSwgaXNTdHJpbmcsIGVzY2FwZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1xuICBlc2NhcGVTdHJpbmdGb3JSZWdleCxcbiAgZm9ybWF0dGVkVmFsdWVUb1N0cmluZyxcbiAgZ2V0VmFsdWVGb3JtYXQsXG4gIFNjb3BlZFZhcnMsXG4gIHN0cmluZ1N0YXJ0c0FzUmVnRXgsXG4gIHN0cmluZ1RvSnNSZWdleCxcbiAgdGV4dFV0aWwsXG4gIHVuRXNjYXBlU3RyaW5nRnJvbVJlZ2V4LFxuICBUaW1lWm9uZSxcbiAgZGF0ZVRpbWVGb3JtYXRJU08sXG4gIGRhdGVUaW1lRm9ybWF0LFxuICBnZXRDb2xvckZvclRoZW1lLFxuICBHcmFmYW5hVGhlbWUsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBDb2x1bW5SZW5kZXIsIFRhYmxlUmVuZGVyTW9kZWwsIENvbHVtblN0eWxlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBDb2x1bW5PcHRpb25zQ3RybCB9IGZyb20gJy4vY29sdW1uX29wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVSZW5kZXJlciB7XG4gIGZvcm1hdHRlcnM6IGFueVtdID0gW107XG4gIGNvbG9yU3RhdGU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhbmVsOiB7IHN0eWxlczogQ29sdW1uU3R5bGVbXTsgcGFnZVNpemU6IG51bWJlciB9LFxuICAgIHByaXZhdGUgdGFibGU6IFRhYmxlUmVuZGVyTW9kZWwsXG4gICAgcHJpdmF0ZSB0aW1lWm9uZTogVGltZVpvbmUsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZTogKHY6IGFueSkgPT4gYW55LFxuICAgIHByaXZhdGUgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKSxcbiAgICBwcml2YXRlIHRoZW1lOiBHcmFmYW5hVGhlbWVcbiAgKSB7XG4gICAgdGhpcy5pbml0Q29sdW1ucygpO1xuICB9XG5cbiAgc2V0VGFibGUodGFibGU6IFRhYmxlUmVuZGVyTW9kZWwpIHtcbiAgICB0aGlzLnRhYmxlID0gdGFibGU7XG5cbiAgICB0aGlzLmluaXRDb2x1bW5zKCk7XG4gIH1cblxuICBpbml0Q29sdW1ucygpIHtcbiAgICB0aGlzLmZvcm1hdHRlcnMgPSBbXTtcbiAgICB0aGlzLmNvbG9yU3RhdGUgPSB7fTtcblxuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLnRhYmxlLmNvbHVtbnNbY29sSW5kZXhdO1xuICAgICAgY29sdW1uLnRpdGxlID0gY29sdW1uLnRleHQ7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYW5lbC5zdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLnBhbmVsLnN0eWxlc1tpXTtcblxuICAgICAgICBjb25zdCBlc2NhcGVkUGF0dGVybiA9IHN0cmluZ1N0YXJ0c0FzUmVnRXgoc3R5bGUucGF0dGVybilcbiAgICAgICAgICA/IHN0eWxlLnBhdHRlcm5cbiAgICAgICAgICA6IGVzY2FwZVN0cmluZ0ZvclJlZ2V4KHVuRXNjYXBlU3RyaW5nRnJvbVJlZ2V4KHN0eWxlLnBhdHRlcm4pKTtcbiAgICAgICAgY29uc3QgcmVnZXggPSBzdHJpbmdUb0pzUmVnZXgoZXNjYXBlZFBhdHRlcm4pO1xuICAgICAgICBpZiAoY29sdW1uLnRleHQubWF0Y2gocmVnZXgpKSB7XG4gICAgICAgICAgY29sdW1uLnN0eWxlID0gc3R5bGU7XG5cbiAgICAgICAgICBpZiAoc3R5bGUuYWxpYXMpIHtcbiAgICAgICAgICAgIGNvbHVtbi50aXRsZSA9IHRleHRVdGlsLmVzY2FwZUh0bWwoY29sdW1uLnRleHQucmVwbGFjZShyZWdleCwgc3R5bGUuYWxpYXMpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZvcm1hdHRlcnNbY29sSW5kZXhdID0gdGhpcy5jcmVhdGVDb2x1bW5Gb3JtYXR0ZXIoY29sdW1uKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb2xvckZvclZhbHVlKHZhbHVlOiBudW1iZXIsIHN0eWxlOiBDb2x1bW5TdHlsZSkge1xuICAgIGlmICghc3R5bGUudGhyZXNob2xkcyB8fCAhc3R5bGUuY29sb3JzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IHN0eWxlLnRocmVzaG9sZHMubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICBpZiAodmFsdWUgPj0gc3R5bGUudGhyZXNob2xkc1tpIC0gMV0pIHtcbiAgICAgICAgcmV0dXJuIGdldENvbG9yRm9yVGhlbWUoc3R5bGUuY29sb3JzW2ldLCB0aGlzLnRoZW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdldENvbG9yRm9yVGhlbWUoZmlyc3Qoc3R5bGUuY29sb3JzKSwgdGhpcy50aGVtZSk7XG4gIH1cblxuICBkZWZhdWx0Q2VsbEZvcm1hdHRlcih2OiBhbnksIHN0eWxlOiBDb2x1bW5TdHlsZSkge1xuICAgIGlmICh2ID09PSBudWxsIHx8IHYgPT09IHZvaWQgMCB8fCB2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgdiA9IHYuam9pbignLCAnKTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUgJiYgc3R5bGUuc2FuaXRpemUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXNjYXBlKHYpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNvbHVtbkZvcm1hdHRlcihjb2x1bW46IENvbHVtblJlbmRlcikge1xuICAgIGlmICghY29sdW1uLnN0eWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q2VsbEZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnN0eWxlLnR5cGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICByZXR1cm4gKHY6IGFueSk6IHVuZGVmaW5lZCA9PiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zdHlsZS50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIHJldHVybiAodjogYW55KSA9PiB7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAnLSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHYgPSB2WzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXMgYW4gZXBvY2ggKG51bWVyaWMgc3RyaW5nIGFuZCBsZW4gPiAxMilcbiAgICAgICAgaWYgKGlzU3RyaW5nKHYpICYmICFpc05hTih2IGFzIGFueSkgJiYgdi5sZW5ndGggPiAxMikge1xuICAgICAgICAgIHYgPSBwYXJzZUludCh2LCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbHVtbi5zdHlsZS5kYXRlRm9ybWF0KSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0SVNPKHYsIHtcbiAgICAgICAgICAgIHRpbWVab25lOiB0aGlzLnRpbWVab25lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0KHYsIHtcbiAgICAgICAgICBmb3JtYXQ6IGNvbHVtbi5zdHlsZS5kYXRlRm9ybWF0LFxuICAgICAgICAgIHRpbWVab25lOiB0aGlzLnRpbWVab25lLFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zdHlsZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICh2OiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHYgPSB2LmpvaW4oJywgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXBwaW5nVHlwZSA9IGNvbHVtbi5zdHlsZS5tYXBwaW5nVHlwZSB8fCAwO1xuXG4gICAgICAgIGlmIChtYXBwaW5nVHlwZSA9PT0gMSAmJiBjb2x1bW4uc3R5bGUudmFsdWVNYXBzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW4uc3R5bGUudmFsdWVNYXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtYXAgPSBjb2x1bW4uc3R5bGUudmFsdWVNYXBzW2ldO1xuXG4gICAgICAgICAgICBpZiAodiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAobWFwLnZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwLnRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFsbG93IGJvdGggbnVtZXJpYyBhbmQgc3RyaW5nIHZhbHVlcyB0byBiZSBtYXBwZWRcbiAgICAgICAgICAgIGlmICgoIWlzU3RyaW5nKHYpICYmIE51bWJlcihtYXAudmFsdWUpID09PSBOdW1iZXIodikpIHx8IG1hcC52YWx1ZSA9PT0gdikge1xuICAgICAgICAgICAgICB0aGlzLnNldENvbG9yU3RhdGUodiwgY29sdW1uLnN0eWxlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENlbGxGb3JtYXR0ZXIobWFwLnRleHQsIGNvbHVtbi5zdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcHBpbmdUeXBlID09PSAyICYmIGNvbHVtbi5zdHlsZS5yYW5nZU1hcHMpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbi5zdHlsZS5yYW5nZU1hcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IGNvbHVtbi5zdHlsZS5yYW5nZU1hcHNbaV07XG5cbiAgICAgICAgICAgIGlmICh2ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChtYXAuZnJvbSA9PT0gJ251bGwnICYmIG1hcC50byA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcC50ZXh0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKG1hcC5mcm9tKSA8PSBOdW1iZXIodikgJiYgTnVtYmVyKG1hcC50bykgPj0gTnVtYmVyKHYpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JTdGF0ZSh2LCBjb2x1bW4uc3R5bGUpO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q2VsbEZvcm1hdHRlcihtYXAudGV4dCwgY29sdW1uLnN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodiA9PT0gbnVsbCB8fCB2ID09PSB2b2lkIDApIHtcbiAgICAgICAgICByZXR1cm4gJy0nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRDb2xvclN0YXRlKHYsIGNvbHVtbi5zdHlsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDZWxsRm9ybWF0dGVyKHYsIGNvbHVtbi5zdHlsZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uc3R5bGUudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IHZhbHVlRm9ybWF0dGVyID0gZ2V0VmFsdWVGb3JtYXQoY29sdW1uLnVuaXQgfHwgY29sdW1uLnN0eWxlLnVuaXQpO1xuXG4gICAgICByZXR1cm4gKHY6IGFueSk6IGFueSA9PiB7XG4gICAgICAgIGlmICh2ID09PSBudWxsIHx8IHYgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHJldHVybiAnLSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOYU4odikgfHwgaXNBcnJheSh2KSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDZWxsRm9ybWF0dGVyKHYsIGNvbHVtbi5zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldENvbG9yU3RhdGUodiwgY29sdW1uLnN0eWxlKTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlVG9TdHJpbmcodmFsdWVGb3JtYXR0ZXIodiwgY29sdW1uLnN0eWxlLmRlY2ltYWxzLCBudWxsKSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENlbGxGb3JtYXR0ZXIodmFsdWUsIGNvbHVtbi5zdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHNldENvbG9yU3RhdGUodmFsdWU6IGFueSwgc3R5bGU6IENvbHVtblN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5jb2xvck1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCB8fCBpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKGlzTmFOKG51bWVyaWNWYWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG9yU3RhdGVbc3R5bGUuY29sb3JNb2RlXSA9IHRoaXMuZ2V0Q29sb3JGb3JWYWx1ZShudW1lcmljVmFsdWUsIHN0eWxlKTtcbiAgfVxuXG4gIHJlbmRlclJvd1ZhcmlhYmxlcyhyb3dJbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2NvcGVkVmFyczogU2NvcGVkVmFycyA9IHt9O1xuICAgIGxldCBjZWxsVmFyaWFibGU7XG4gICAgY29uc3Qgcm93ID0gdGhpcy50YWJsZS5yb3dzW3Jvd0luZGV4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xuICAgICAgY2VsbFZhcmlhYmxlID0gYF9fY2VsbF8ke2l9YDtcbiAgICAgIHNjb3BlZFZhcnNbY2VsbFZhcmlhYmxlXSA9IHsgdmFsdWU6IHJvd1tpXSwgdGV4dDogcm93W2ldID8gcm93W2ldLnRvU3RyaW5nKCkgOiAnJyB9O1xuICAgIH1cbiAgICByZXR1cm4gc2NvcGVkVmFycztcbiAgfVxuXG4gIGZvcm1hdENvbHVtblZhbHVlKGNvbEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBmbXQgPSB0aGlzLmZvcm1hdHRlcnNbY29sSW5kZXhdO1xuICAgIGlmIChmbXQpIHtcbiAgICAgIHJldHVybiBmbXQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZW5kZXJDZWxsKGNvbHVtbkluZGV4OiBudW1iZXIsIHJvd0luZGV4OiBudW1iZXIsIHZhbHVlOiBhbnksIGFkZFdpZHRoSGFjayA9IGZhbHNlKSB7XG4gICAgdmFsdWUgPSB0aGlzLmZvcm1hdENvbHVtblZhbHVlKGNvbHVtbkluZGV4LCB2YWx1ZSk7XG5cbiAgICBjb25zdCBjb2x1bW4gPSB0aGlzLnRhYmxlLmNvbHVtbnNbY29sdW1uSW5kZXhdO1xuICAgIGNvbnN0IGNlbGxTdHlsZXMgPSBbXTtcbiAgICBsZXQgY2VsbFN0eWxlID0gJyc7XG4gICAgY29uc3QgY2VsbENsYXNzZXMgPSBbXTtcbiAgICBsZXQgY2VsbENsYXNzID0gJyc7XG5cbiAgICBpZiAodGhpcy5jb2xvclN0YXRlLmNlbGwpIHtcbiAgICAgIGNlbGxTdHlsZXMucHVzaCgnYmFja2dyb3VuZC1jb2xvcjonICsgdGhpcy5jb2xvclN0YXRlLmNlbGwpO1xuICAgICAgY2VsbENsYXNzZXMucHVzaCgndGFibGUtcGFuZWwtY29sb3ItY2VsbCcpO1xuICAgICAgdGhpcy5jb2xvclN0YXRlLmNlbGwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb2xvclN0YXRlLnZhbHVlKSB7XG4gICAgICBjZWxsU3R5bGVzLnB1c2goJ2NvbG9yOicgKyB0aGlzLmNvbG9yU3RhdGUudmFsdWUpO1xuICAgICAgdGhpcy5jb2xvclN0YXRlLnZhbHVlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gYmVjYXVzZSBvZiB0aGUgZml4ZWQgdGFibGUgaGVhZGVycyBjc3Mgb25seSBzb2x1dGlvblxuICAgIC8vIHRoZXJlIGlzIGFuIGlzc3VlIGlmIGhlYWRlciBjZWxsIGlzIHdpZGVyIHRoZSBjZWxsXG4gICAgLy8gdGhpcyBoYWNrIGFkZHMgaGVhZGVyIGNvbnRlbnQgdG8gY2VsbCAobm90IHZpc2libGUpXG4gICAgbGV0IGNvbHVtbkh0bWwgPSAnJztcbiAgICBpZiAoYWRkV2lkdGhIYWNrKSB7XG4gICAgICBjb2x1bW5IdG1sID0gJzxkaXYgY2xhc3M9XCJ0YWJsZS1wYW5lbC13aWR0aC1oYWNrXCI+JyArIHRoaXMudGFibGUuY29sdW1uc1tjb2x1bW5JbmRleF0udGl0bGUgKyAnPC9kaXY+JztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2VsbFN0eWxlcy5wdXNoKCdkaXNwbGF5Om5vbmUnKTtcbiAgICAgIGNvbHVtbi5oaWRkZW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW4uaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5oaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnN0eWxlICYmIGNvbHVtbi5zdHlsZS5wcmVzZXJ2ZUZvcm1hdCkge1xuICAgICAgY2VsbENsYXNzZXMucHVzaCgndGFibGUtcGFuZWwtY2VsbC1wcmUnKTtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnN0eWxlICYmIGNvbHVtbi5zdHlsZS5hbGlnbikge1xuICAgICAgY29uc3QgdGV4dEFsaWduID0gZmluZChDb2x1bW5PcHRpb25zQ3RybC5hbGlnblR5cGVzRW51bSwgWyd0ZXh0JywgY29sdW1uLnN0eWxlLmFsaWduXSk7XG4gICAgICBpZiAodGV4dEFsaWduICYmIHRleHRBbGlnblsndmFsdWUnXSkge1xuICAgICAgICBjZWxsU3R5bGVzLnB1c2goYHRleHQtYWxpZ246JHt0ZXh0QWxpZ25bJ3ZhbHVlJ119YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNlbGxTdHlsZXMubGVuZ3RoKSB7XG4gICAgICBjZWxsU3R5bGUgPSAnIHN0eWxlPVwiJyArIGNlbGxTdHlsZXMuam9pbignOycpICsgJ1wiJztcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnN0eWxlICYmIGNvbHVtbi5zdHlsZS5saW5rKSB7XG4gICAgICAvLyBSZW5kZXIgY2VsbCBhcyBsaW5rXG4gICAgICBjb25zdCBzY29wZWRWYXJzID0gdGhpcy5yZW5kZXJSb3dWYXJpYWJsZXMocm93SW5kZXgpO1xuICAgICAgc2NvcGVkVmFyc1snX19jZWxsJ10gPSB7IHZhbHVlOiB2YWx1ZSwgdGV4dDogdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpIDogJycgfTtcblxuICAgICAgY29uc3QgY2VsbExpbmsgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoY29sdW1uLnN0eWxlLmxpbmtVcmwsIHNjb3BlZFZhcnMsIGVuY29kZVVSSUNvbXBvbmVudCk7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRDZWxsTGluayA9IHRleHRVdGlsLnNhbml0aXplVXJsKGNlbGxMaW5rKTtcblxuICAgICAgY29uc3QgY2VsbExpbmtUb29sdGlwID0gdGV4dFV0aWwuZXNjYXBlSHRtbCh0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoY29sdW1uLnN0eWxlLmxpbmtUb29sdGlwLCBzY29wZWRWYXJzKSk7XG4gICAgICBjb25zdCBjZWxsVGFyZ2V0ID0gY29sdW1uLnN0eWxlLmxpbmtUYXJnZXRCbGFuayA/ICdfYmxhbmsnIDogJyc7XG5cbiAgICAgIGNlbGxDbGFzc2VzLnB1c2goJ3RhYmxlLXBhbmVsLWNlbGwtbGluaycpO1xuXG4gICAgICBjb2x1bW5IdG1sICs9IGA8YSBocmVmPVwiJHtzYW5pdGl6ZWRDZWxsTGlua31cIiB0YXJnZXQ9XCIke2NlbGxUYXJnZXR9XCIgZGF0YS1saW5rLXRvb2x0aXAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIiR7Y2VsbExpbmtUb29sdGlwfVwiIGRhdGEtcGxhY2VtZW50PVwicmlnaHRcIiR7Y2VsbFN0eWxlfT5gO1xuICAgICAgY29sdW1uSHRtbCArPSBgJHt2YWx1ZX1gO1xuICAgICAgY29sdW1uSHRtbCArPSBgPC9hPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbkh0bWwgKz0gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlKSB7XG4gICAgICBjZWxsQ2xhc3Nlcy5wdXNoKCd0YWJsZS1wYW5lbC1jZWxsLWZpbHRlcmFibGUnKTtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDxhIGNsYXNzPVwidGFibGUtcGFuZWwtZmlsdGVyLWxpbmtcIiBkYXRhLWxpbmstdG9vbHRpcCBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiRmlsdGVyIG91dCB2YWx1ZVwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiIGRhdGEtY29sdW1uPVwiJHtjb2x1bW5JbmRleH1cIiBkYXRhLW9wZXJhdG9yPVwiIT1cIj5gO1xuICAgICAgY29sdW1uSHRtbCArPSBgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtbWludXNcIj48L2k+YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDwvYT5gO1xuICAgICAgY29sdW1uSHRtbCArPSBgPGEgY2xhc3M9XCJ0YWJsZS1wYW5lbC1maWx0ZXItbGlua1wiIGRhdGEtbGluay10b29sdGlwIGRhdGEtb3JpZ2luYWwtdGl0bGU9XCJGaWx0ZXIgZm9yIHZhbHVlXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICBkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCIgZGF0YS1jb2x1bW49XCIke2NvbHVtbkluZGV4fVwiIGRhdGEtb3BlcmF0b3I9XCI9XCI+YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLXBsdXNcIj48L2k+YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDwvYT5gO1xuICAgIH1cblxuICAgIGlmIChjZWxsQ2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIGNlbGxDbGFzcyA9ICcgY2xhc3M9XCInICsgY2VsbENsYXNzZXMuam9pbignICcpICsgJ1wiJztcbiAgICB9XG5cbiAgICBjb2x1bW5IdG1sID0gJzx0ZCcgKyBjZWxsQ2xhc3MgKyBjZWxsU3R5bGUgKyAnPicgKyBjb2x1bW5IdG1sICsgJzwvdGQ+JztcbiAgICByZXR1cm4gY29sdW1uSHRtbDtcbiAgfVxuXG4gIHJlbmRlcihwYWdlOiBudW1iZXIpIHtcbiAgICBjb25zdCBwYWdlU2l6ZSA9IHRoaXMucGFuZWwucGFnZVNpemUgfHwgMTAwO1xuICAgIGNvbnN0IHN0YXJ0UG9zID0gcGFnZSAqIHBhZ2VTaXplO1xuICAgIGNvbnN0IGVuZFBvcyA9IE1hdGgubWluKHN0YXJ0UG9zICsgcGFnZVNpemUsIHRoaXMudGFibGUucm93cy5sZW5ndGgpO1xuICAgIGxldCBodG1sID0gJyc7XG5cbiAgICBmb3IgKGxldCB5ID0gc3RhcnRQb3M7IHkgPCBlbmRQb3M7IHkrKykge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy50YWJsZS5yb3dzW3ldO1xuICAgICAgbGV0IGNlbGxIdG1sID0gJyc7XG4gICAgICBsZXQgcm93U3R5bGUgPSAnJztcbiAgICAgIGNvbnN0IHJvd0NsYXNzZXMgPSBbXTtcbiAgICAgIGxldCByb3dDbGFzcyA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2VsbEh0bWwgKz0gdGhpcy5yZW5kZXJDZWxsKGksIHksIHJvd1tpXSwgeSA9PT0gc3RhcnRQb3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb2xvclN0YXRlLnJvdykge1xuICAgICAgICByb3dTdHlsZSA9ICcgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicgKyB0aGlzLmNvbG9yU3RhdGUucm93ICsgJ1wiJztcbiAgICAgICAgcm93Q2xhc3Nlcy5wdXNoKCd0YWJsZS1wYW5lbC1jb2xvci1yb3cnKTtcbiAgICAgICAgdGhpcy5jb2xvclN0YXRlLnJvdyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3dDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICByb3dDbGFzcyA9ICcgY2xhc3M9XCInICsgcm93Q2xhc3Nlcy5qb2luKCcgJykgKyAnXCInO1xuICAgICAgfVxuXG4gICAgICBodG1sICs9ICc8dHIgJyArIHJvd0NsYXNzICsgcm93U3R5bGUgKyAnPicgKyBjZWxsSHRtbCArICc8L3RyPic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICByZW5kZXJfdmFsdWVzKCkge1xuICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHRoaXMudGFibGUuY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWNvbHVtbi5oaWRkZW4pO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnRhYmxlLnJvd3MubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMudGFibGUucm93c1t5XTtcbiAgICAgIGNvbnN0IG5ld1JvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhYmxlLmNvbHVtbnNbaV0uaGlkZGVuKSB7XG4gICAgICAgICAgbmV3Um93LnB1c2godGhpcy5mb3JtYXRDb2x1bW5WYWx1ZShpLCByb3dbaV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcm93cy5wdXNoKG5ld1Jvdyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiB2aXNpYmxlQ29sdW1ucyxcbiAgICAgIHJvd3M6IHJvd3MsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZmluZEluZGV4LCBpc09iamVjdCwgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJ2FwcC9jb3JlL3V0aWxzL2ZsYXR0ZW4nO1xuaW1wb3J0IFRpbWVTZXJpZXMgZnJvbSAnYXBwL2NvcmUvdGltZV9zZXJpZXMyJztcbmltcG9ydCBUYWJsZU1vZGVsLCB7IG1lcmdlVGFibGVzSW50b01vZGVsIH0gZnJvbSAnYXBwL2NvcmUvdGFibGVfbW9kZWwnO1xuaW1wb3J0IHsgVGFibGVUcmFuc2Zvcm0gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENvbHVtbiwgVGFibGVEYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmNvbnN0IHRyYW5zZm9ybWVyczogeyBba2V5OiBzdHJpbmddOiBUYWJsZVRyYW5zZm9ybSB9ID0ge307XG5leHBvcnQgY29uc3QgdGltZVNlcmllc0Zvcm1hdEZpbHRlcmVyID0gKGRhdGE6IGFueSk6IGFueVtdID0+IHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgcmV0dXJuIGRhdGEuZGF0YXBvaW50cyA/IFtkYXRhXSA6IFtdO1xuICB9XG5cbiAgcmV0dXJuIGRhdGEucmVkdWNlKChhY2MsIHNlcmllcykgPT4ge1xuICAgIGlmICghc2VyaWVzLmRhdGFwb2ludHMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYy5jb25jYXQoc2VyaWVzKTtcbiAgfSwgW10pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRhYmxlRGF0YUZvcm1hdEZpbHRlcmVyID0gKGRhdGE6IGFueSk6IGFueVtdID0+IHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgcmV0dXJuIGRhdGEuY29sdW1ucyA/IFtkYXRhXSA6IFtdO1xuICB9XG5cbiAgcmV0dXJuIGRhdGEucmVkdWNlKChhY2MsIHNlcmllcykgPT4ge1xuICAgIGlmICghc2VyaWVzLmNvbHVtbnMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYy5jb25jYXQoc2VyaWVzKTtcbiAgfSwgW10pO1xufTtcblxudHJhbnNmb3JtZXJzWyd0aW1lc2VyaWVzX3RvX3Jvd3MnXSA9IHtcbiAgZGVzY3JpcHRpb246ICdUaW1lIHNlcmllcyB0byByb3dzJyxcbiAgZ2V0Q29sdW1uczogKCkgPT4ge1xuICAgIHJldHVybiBbXTtcbiAgfSxcbiAgdHJhbnNmb3JtOiAoZGF0YSwgcGFuZWwsIG1vZGVsKSA9PiB7XG4gICAgbW9kZWwuY29sdW1ucyA9IFt7IHRleHQ6ICdUaW1lJywgdHlwZTogJ2RhdGUnIH0sIHsgdGV4dDogJ01ldHJpYycgfSwgeyB0ZXh0OiAnVmFsdWUnIH1dO1xuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRpbWVTZXJpZXNGb3JtYXRGaWx0ZXJlcihkYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzZXJpZXMgPSBmaWx0ZXJlZERhdGFbaV07XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNlcmllcy5kYXRhcG9pbnRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGNvbnN0IGRwID0gc2VyaWVzLmRhdGFwb2ludHNbeV07XG4gICAgICAgIG1vZGVsLnJvd3MucHVzaChbZHBbMV0sIHNlcmllcy50YXJnZXQsIGRwWzBdXSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcblxudHJhbnNmb3JtZXJzWyd0aW1lc2VyaWVzX3RvX2NvbHVtbnMnXSA9IHtcbiAgZGVzY3JpcHRpb246ICdUaW1lIHNlcmllcyB0byBjb2x1bW5zJyxcbiAgZ2V0Q29sdW1uczogKCkgPT4ge1xuICAgIHJldHVybiBbXTtcbiAgfSxcbiAgdHJhbnNmb3JtOiAoZGF0YSwgcGFuZWwsIG1vZGVsKSA9PiB7XG4gICAgbW9kZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogJ1RpbWUnLCB0eXBlOiAnZGF0ZScgfSk7XG5cbiAgICAvLyBncm91cCBieSB0aW1lXG4gICAgY29uc3QgcG9pbnRzOiBhbnkgPSB7fTtcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aW1lU2VyaWVzRm9ybWF0RmlsdGVyZXIoZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2VyaWVzID0gZmlsdGVyZWREYXRhW2ldO1xuICAgICAgbW9kZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogc2VyaWVzLnRhcmdldCB9KTtcblxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzZXJpZXMuZGF0YXBvaW50cy5sZW5ndGg7IHkrKykge1xuICAgICAgICBjb25zdCBkcCA9IHNlcmllcy5kYXRhcG9pbnRzW3ldO1xuICAgICAgICBjb25zdCB0aW1lS2V5ID0gZHBbMV0udG9TdHJpbmcoKTtcblxuICAgICAgICBpZiAoIXBvaW50c1t0aW1lS2V5XSkge1xuICAgICAgICAgIHBvaW50c1t0aW1lS2V5XSA9IHsgdGltZTogZHBbMV0gfTtcbiAgICAgICAgICBwb2ludHNbdGltZUtleV1baV0gPSBkcFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb2ludHNbdGltZUtleV1baV0gPSBkcFswXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgdGltZSBpbiBwb2ludHMpIHtcbiAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW3RpbWVdO1xuICAgICAgY29uc3QgdmFsdWVzID0gW3BvaW50LnRpbWVdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHBvaW50W2ldO1xuICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG1vZGVsLnJvd3MucHVzaCh2YWx1ZXMpO1xuICAgIH1cbiAgfSxcbn07XG5cbnRyYW5zZm9ybWVyc1sndGltZXNlcmllc19hZ2dyZWdhdGlvbnMnXSA9IHtcbiAgZGVzY3JpcHRpb246ICdUaW1lIHNlcmllcyBhZ2dyZWdhdGlvbnMnLFxuICBnZXRDb2x1bW5zOiAoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgdGV4dDogJ0F2ZycsIHZhbHVlOiAnYXZnJyB9LFxuICAgICAgeyB0ZXh0OiAnTWluJywgdmFsdWU6ICdtaW4nIH0sXG4gICAgICB7IHRleHQ6ICdNYXgnLCB2YWx1ZTogJ21heCcgfSxcbiAgICAgIHsgdGV4dDogJ1RvdGFsJywgdmFsdWU6ICd0b3RhbCcgfSxcbiAgICAgIHsgdGV4dDogJ0N1cnJlbnQnLCB2YWx1ZTogJ2N1cnJlbnQnIH0sXG4gICAgICB7IHRleHQ6ICdDb3VudCcsIHZhbHVlOiAnY291bnQnIH0sXG4gICAgXTtcbiAgfSxcbiAgdHJhbnNmb3JtOiAoZGF0YSwgcGFuZWwsIG1vZGVsKSA9PiB7XG4gICAgbGV0IGksIHk7XG4gICAgbW9kZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogJ01ldHJpYycgfSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcGFuZWwuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgbW9kZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogcGFuZWwuY29sdW1uc1tpXS50ZXh0IH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRpbWVTZXJpZXNGb3JtYXRGaWx0ZXJlcihkYXRhKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBmaWx0ZXJlZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNlcmllcyA9IG5ldyBUaW1lU2VyaWVzKHtcbiAgICAgICAgZGF0YXBvaW50czogZmlsdGVyZWREYXRhW2ldLmRhdGFwb2ludHMsXG4gICAgICAgIGFsaWFzOiBmaWx0ZXJlZERhdGFbaV0udGFyZ2V0LFxuICAgICAgfSk7XG5cbiAgICAgIHNlcmllcy5nZXRGbG90UGFpcnMoJ2Nvbm5lY3RlZCcpO1xuICAgICAgY29uc3QgY2VsbHMgPSBbc2VyaWVzLmFsaWFzXTtcblxuICAgICAgZm9yICh5ID0gMDsgeSA8IHBhbmVsLmNvbHVtbnMubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgY2VsbHMucHVzaChzZXJpZXMuc3RhdHNbcGFuZWwuY29sdW1uc1t5XS52YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICBtb2RlbC5yb3dzLnB1c2goY2VsbHMpO1xuICAgIH1cbiAgfSxcbn07XG5cbnRyYW5zZm9ybWVyc1snYW5ub3RhdGlvbnMnXSA9IHtcbiAgZGVzY3JpcHRpb246ICdBbm5vdGF0aW9ucycsXG4gIGdldENvbHVtbnM6ICgpID0+IHtcbiAgICByZXR1cm4gW107XG4gIH0sXG4gIHRyYW5zZm9ybTogKGRhdGEsIHBhbmVsLCBtb2RlbCkgPT4ge1xuICAgIG1vZGVsLmNvbHVtbnMucHVzaCh7IHRleHQ6ICdUaW1lJywgdHlwZTogJ2RhdGUnIH0pO1xuICAgIG1vZGVsLmNvbHVtbnMucHVzaCh7IHRleHQ6ICdUaXRsZScgfSk7XG4gICAgbW9kZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogJ1RleHQnIH0pO1xuICAgIG1vZGVsLmNvbHVtbnMucHVzaCh7IHRleHQ6ICdUYWdzJyB9KTtcblxuICAgIGlmICghZGF0YSB8fCAhZGF0YS5hbm5vdGF0aW9ucyB8fCBkYXRhLmFubm90YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5hbm5vdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZXZ0ID0gZGF0YS5hbm5vdGF0aW9uc1tpXTtcbiAgICAgIG1vZGVsLnJvd3MucHVzaChbZXZ0LnRpbWUsIGV2dC50aXRsZSwgZXZ0LnRleHQsIGV2dC50YWdzXSk7XG4gICAgfVxuICB9LFxufTtcblxudHJhbnNmb3JtZXJzWyd0YWJsZSddID0ge1xuICBkZXNjcmlwdGlvbjogJ1RhYmxlJyxcbiAgZ2V0Q29sdW1uczogKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvLyBTaW5nbGUgcXVlcnkgcmV0dXJucyBkYXRhIGNvbHVtbnMgYXMgaXNcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBbLi4uZGF0YVswXS5jb2x1bW5zXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0YWJsZURhdGFGb3JtYXRGaWx0ZXJlcihkYXRhKTtcblxuICAgIC8vIFRyYWNrIGNvbHVtbiBpbmRleGVzOiBuYW1lIC0+IGluZGV4XG4gICAgY29uc3QgY29sdW1uTmFtZXM6IGFueSA9IHt9O1xuXG4gICAgLy8gVW5pb24gb2YgYWxsIGNvbHVtbnNcbiAgICBjb25zdCBjb2x1bW5zID0gZmlsdGVyZWREYXRhLnJlZHVjZSgoYWNjOiBDb2x1bW5bXSwgc2VyaWVzOiBUYWJsZURhdGEpID0+IHtcbiAgICAgIHNlcmllcy5jb2x1bW5zLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbDtcbiAgICAgICAgaWYgKGNvbHVtbk5hbWVzW3RleHRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb2x1bW5OYW1lc1t0ZXh0XSA9IGFjYy5sZW5ndGg7XG4gICAgICAgICAgYWNjLnB1c2goY29sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9LFxuICB0cmFuc2Zvcm06IChkYXRhOiBhbnlbXSwgcGFuZWwsIG1vZGVsKSA9PiB7XG4gICAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRhYmxlRGF0YUZvcm1hdEZpbHRlcmVyKGRhdGEpO1xuICAgIGNvbnN0IG5vVGFibGVJbmRleCA9IGZpbmRJbmRleChmaWx0ZXJlZERhdGEsIChkKSA9PiAnY29sdW1ucycgaW4gZCAmJiAncm93cycgaW4gZCk7XG4gICAgaWYgKG5vVGFibGVJbmRleCA8IDApIHtcbiAgICAgIHRocm93IHtcbiAgICAgICAgbWVzc2FnZTogYFJlc3VsdCBvZiBxdWVyeSAjJHtTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAgIDY1ICsgbm9UYWJsZUluZGV4XG4gICAgICAgICl9IGlzIG5vdCBpbiB0YWJsZSBmb3JtYXQsIHRyeSB1c2luZyBhbm90aGVyIHRyYW5zZm9ybS5gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBtZXJnZVRhYmxlc0ludG9Nb2RlbChtb2RlbCwgLi4uZmlsdGVyZWREYXRhKTtcbiAgfSxcbn07XG5cbnRyYW5zZm9ybWVyc1snanNvbiddID0ge1xuICBkZXNjcmlwdGlvbjogJ0pTT04gRGF0YScsXG4gIGdldENvbHVtbnM6IChkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXM6IGFueSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2VyaWVzID0gZGF0YVtpXTtcbiAgICAgIGlmIChzZXJpZXMudHlwZSAhPT0gJ2RvY3MnKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBvbmx5IGxvb2sgYXQgMTAwIGRvY3NcbiAgICAgIGNvbnN0IG1heERvY3MgPSBNYXRoLm1pbihzZXJpZXMuZGF0YXBvaW50cy5sZW5ndGgsIDEwMCk7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1heERvY3M7IHkrKykge1xuICAgICAgICBjb25zdCBkb2MgPSBzZXJpZXMuZGF0YXBvaW50c1t5XTtcbiAgICAgICAgY29uc3QgZmxhdHRlbmVkID0gZmxhdHRlbihkb2MsIHt9KTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBpbiBmbGF0dGVuZWQpIHtcbiAgICAgICAgICBuYW1lc1twcm9wTmFtZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcChuYW1lcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiB7IHRleHQ6IGtleSwgdmFsdWU6IGtleSB9O1xuICAgIH0pO1xuICB9LFxuICB0cmFuc2Zvcm06IChkYXRhLCBwYW5lbCwgbW9kZWwpID0+IHtcbiAgICBsZXQgaSwgeSwgejtcblxuICAgIGZvciAoY29uc3QgY29sdW1uIG9mIHBhbmVsLmNvbHVtbnMpIHtcbiAgICAgIGNvbnN0IHRhYmxlQ29sOiBhbnkgPSB7IHRleHQ6IGNvbHVtbi50ZXh0IH07XG5cbiAgICAgIC8vIGlmIGZpbHRlcmFibGUgZGF0YSB0aGVuIHNldCBjb2x1bW5zIHRvIGZpbHRlcmFibGVcbiAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDAgJiYgZGF0YVswXS5maWx0ZXJhYmxlKSB7XG4gICAgICAgIHRhYmxlQ29sLmZpbHRlcmFibGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBtb2RlbC5jb2x1bW5zLnB1c2godGFibGVDb2wpO1xuICAgIH1cblxuICAgIGlmIChtb2RlbC5jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbW9kZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogJ0pTT04nIH0pO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzZXJpZXMgPSBkYXRhW2ldO1xuXG4gICAgICBmb3IgKHkgPSAwOyB5IDwgc2VyaWVzLmRhdGFwb2ludHMubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgY29uc3QgZHAgPSBzZXJpZXMuZGF0YXBvaW50c1t5XTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGRwKSAmJiBwYW5lbC5jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmbGF0dGVuZWQgPSBmbGF0dGVuKGRwKTtcbiAgICAgICAgICBmb3IgKHogPSAwOyB6IDwgcGFuZWwuY29sdW1ucy5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2goZmxhdHRlbmVkW3BhbmVsLmNvbHVtbnNbel0udmFsdWVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goSlNPTi5zdHJpbmdpZnkoZHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZGVsLnJvd3MucHVzaCh2YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybURhdGFUb1RhYmxlKGRhdGE6IGFueSwgcGFuZWw6IGFueSkge1xuICBjb25zdCBtb2RlbCA9IG5ldyBUYWJsZU1vZGVsKCk7XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmb3JtZXIgPSB0cmFuc2Zvcm1lcnNbcGFuZWwudHJhbnNmb3JtXTtcbiAgaWYgKCF0cmFuc2Zvcm1lcikge1xuICAgIHRocm93IHsgbWVzc2FnZTogJ1RyYW5zZm9ybWVyICcgKyBwYW5lbC50cmFuc2Zvcm0gKyAnIG5vdCBmb3VuZCcgfTtcbiAgfVxuXG4gIHRyYW5zZm9ybWVyLnRyYW5zZm9ybShkYXRhLCBwYW5lbCwgbW9kZWwpO1xuICByZXR1cm4gbW9kZWw7XG59XG5cbmV4cG9ydCB7IHRyYW5zZm9ybWVycywgdHJhbnNmb3JtRGF0YVRvVGFibGUgfTtcbiIsImltcG9ydCB7IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvYWRQbHVnaW5Dc3MgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFBhbmVsQ3RybCBhcyBQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IE1ldHJpY3NQYW5lbEN0cmwgYXMgTWV0cmljc1BhbmVsQ3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL21ldHJpY3NfcGFuZWxfY3RybCc7XG5pbXBvcnQgeyBRdWVyeUN0cmwgYXMgUXVlcnlDdHJsRVM2IH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvcXVlcnlfY3RybCc7XG5cbmNvbnN0IFBhbmVsQ3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoUGFuZWxDdHJsRVM2KTtcbmNvbnN0IE1ldHJpY3NQYW5lbEN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKE1ldHJpY3NQYW5lbEN0cmxFUzYpO1xuY29uc3QgUXVlcnlDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShRdWVyeUN0cmxFUzYpO1xuXG5leHBvcnQgeyBQYW5lbEN0cmwsIE1ldHJpY3NQYW5lbEN0cmwsIFF1ZXJ5Q3RybCwgbG9hZFBsdWdpbkNzcyB9O1xuIl0sIm5hbWVzIjpbImxvY2F0aW9uU2VhcmNoVG9PYmplY3QiLCJsb2NhdGlvblNlcnZpY2UiLCJuYXZpZ2F0aW9uTG9nZ2VyIiwiZGVwcmVjYXRpb25XYXJuaW5nIiwidXJsVXRpbCIsIkRFRkFVTFRfUE9SVFMiLCJodHRwIiwiaHR0cHMiLCJmdHAiLCJBbmd1bGFyTG9jYXRpb25XcmFwcGVyIiwiY29uc3RydWN0b3IiLCJhYnNVcmwiLCJ3cmFwSW5EZXByZWNhdGlvbldhcm5pbmciLCJoYXNoIiwiaG9zdCIsInBhdGgiLCJwb3J0IiwicHJvdG9jb2wiLCJyZXBsYWNlIiwic2VhcmNoIiwic3RhdGUiLCJ1cmwiLCJmbiIsInJlcGxhY2VtZW50Iiwic2VsZiIsIndyYXBwZXIiLCJuYW1lIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIm5ld0hhc2giLCJnZXRMb2NhdGlvbiIsInNsaWNlIiwiRXJyb3IiLCJVUkwiLCJocmVmIiwiaG9zdG5hbWUiLCJwYXRobmFtZSIsInVuZGVmaW5lZCIsInBhcnNlZFBhdGgiLCJTdHJpbmciLCJzdGFydHNXaXRoIiwicHVzaCIsImxlbmd0aCIsInBhcnNlSW50IiwicGFyYW1WYWx1ZSIsImdldFNlYXJjaE9iamVjdCIsInBhcnRpYWwiLCJuZXdRdWVyeSIsImtleSIsIk9iamVjdCIsImtleXMiLCJ1cGRhdGVkVXJsIiwicmVuZGVyVXJsIiwibmV3VXJsIiwidHJpbSIsImlzQXJyYXkiLCJQYW5lbEN0cmwiLCJhcHBseVBhbmVsVGltZU92ZXJyaWRlcyIsIkxvYWRpbmdTdGF0ZSIsIlBhbmVsRXZlbnRzIiwidG9EYXRhRnJhbWVEVE8iLCJ0b0xlZ2FjeVJlc3BvbnNlRGF0YSIsIk1ldHJpY3NQYW5lbEN0cmwiLCIkc2NvcGUiLCIkaW5qZWN0b3IiLCJuZXh0IiwiZGF0YSIsInBhbmVsRGF0YSIsImxvYWRpbmciLCJwcm9jZXNzRGF0YUVycm9yIiwiZXJyb3IiLCJMb2FkaW5nIiwiYW5ndWxhckRpcnR5Q2hlY2siLCJyZXF1ZXN0IiwidGltZUluZm8iLCJ0aW1lUmFuZ2UiLCJyYW5nZSIsInVzZURhdGFGcmFtZXMiLCJoYW5kbGVEYXRhRnJhbWVzIiwic2VyaWVzIiwibGVnYWN5IiwibWFwIiwidiIsImhhbmRsZVF1ZXJ5UmVzdWx0IiwiY29udGV4dFNydiIsImdldCIsImRhdGFzb3VyY2VTcnYiLCJ0aW1lU3J2IiwidGVtcGxhdGVTcnYiLCJwYW5lbCIsImRhdGFzb3VyY2UiLCJldmVudHMiLCJvbiIsInJlZnJlc2giLCJvbk1ldHJpY3NQYW5lbFJlZnJlc2giLCJiaW5kIiwicGFuZWxUZWFyZG93biIsIm9uUGFuZWxUZWFyRG93biIsImNvbXBvbmVudERpZE1vdW50Iiwib25NZXRyaWNzUGFuZWxNb3VudGVkIiwicXVlcnlSdW5uZXIiLCJnZXRRdWVyeVJ1bm5lciIsInF1ZXJ5U3Vic2NyaXB0aW9uIiwiZ2V0RGF0YSIsIndpdGhUcmFuc2Zvcm1zIiwid2l0aEZpZWxkQ29uZmlnIiwic3Vic2NyaWJlIiwicGFuZWxEYXRhT2JzZXJ2ZXIiLCJ1bnN1YnNjcmliZSIsIm90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlIiwic25hcHNob3REYXRhIiwidXBkYXRlVGltZVJhbmdlIiwiRG9uZSIsIiR0aW1lb3V0IiwiZW1pdCIsImRhdGFTbmFwc2hvdExvYWQiLCJzY29wZWRWYXJzIiwidGhlbiIsImlzc3VlUXVlcmllcyIsImNhdGNoIiwiZXJyIiwiY2FuY2VsbGVkIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCIkcm9vdCIsIiQkcGhhc2UiLCIkZGlnZXN0IiwibmV3VGltZURhdGEiLCJydW4iLCJxdWVyaWVzIiwidGFyZ2V0cyIsInBhbmVsSWQiLCJpZCIsImRhc2hib2FyZElkIiwiZGFzaGJvYXJkIiwidGltZXpvbmUiLCJnZXRUaW1lem9uZSIsIm1heERhdGFQb2ludHMiLCJ3aWR0aCIsIm1pbkludGVydmFsIiwiaW50ZXJ2YWwiLCJjYWNoZVRpbWVvdXQiLCJ0cmFuc2Zvcm1hdGlvbnMiLCJzbmFwc2hvdCIsImZyYW1lIiwiZGF0YUZyYW1lc1JlY2VpdmVkIiwicmVzdWx0IiwiZGF0YVJlY2VpdmVkIiwiaXNTdHJpbmciLCJjb25maWciLCJwcm9maWxlciIsIkV2ZW50QnVzU3J2IiwicGx1Z2luIiwiJHBhcmVudCIsImVkaXRvclRhYnMiLCIkbG9jYXRpb24iLCJ0aW1pbmciLCJwYW5lbHMiLCJ0eXBlIiwicGx1Z2luSWQiLCJwbHVnaW5OYW1lIiwiJG9uIiwicGFuZWxEaWRNb3VudCIsImluaXRpYWxpemVkIiwicGFuZWxJbml0aWFsaXplZCIsInJlbmRlcmluZ0NvbXBsZXRlZCIsInB1Ymxpc2hBcHBFdmVudCIsImV2ZW50IiwicGF5bG9hZCIsImFwcEV2ZW50IiwiaW5pdEVkaXRNb2RlIiwiZWRpdE1vZGVJbml0aWF0ZWQiLCJlZGl0TW9kZUluaXRpYWxpemVkIiwiYWRkRWRpdG9yVGFiIiwidGl0bGUiLCJkaXJlY3RpdmVGbiIsImluZGV4IiwiaWNvbiIsImVkaXRvclRhYiIsInRlbXBsYXRlVXJsIiwic3BsaWNlIiwiZ2V0RXh0ZW5kZWRNZW51IiwibWVudSIsImluaXRQYW5lbEFjdGlvbnMiLCJnZXRBZGRpdGlvbmFsTWVudUl0ZW1zIiwib3RoZXJQYW5lbEluRnVsbHNjcmVlbiIsInJlbmRlciIsImluZGV4T2YiLCJRdWVyeUN0cmwiLCJwYW5lbEN0cmwiLCJjdHJsIiwidGFyZ2V0IiwiaXNMYXN0UXVlcnkiLCJ3aXRob3V0IiwiZ2V0VmFsdWVGb3JtYXRzIiwiQ29sdW1uT3B0aW9uc0N0cmwiLCJlZGl0b3IiLCJhY3RpdmVTdHlsZUluZGV4IiwidW5pdEZvcm1hdHMiLCJjb2xvck1vZGVzIiwidGV4dCIsInZhbHVlIiwiY29sdW1uVHlwZXMiLCJmb250U2l6ZXMiLCJkYXRlRm9ybWF0cyIsIm1hcHBpbmdUeXBlcyIsImFsaWduVHlwZXMiLCJhbGlnblR5cGVzRW51bSIsImdldENvbHVtbk5hbWVzIiwidGFibGUiLCJjb2x1bW5zIiwiY29sIiwib25Db2xvckNoYW5nZSIsInNldFVuaXRGb3JtYXQiLCJjb2x1bW4iLCJ1bml0IiwiYWRkQ29sdW1uU3R5bGUiLCJuZXdTdHlsZVJ1bGUiLCJhbGlhcyIsImRlY2ltYWxzIiwiY29sb3JzIiwiY29sb3JNb2RlIiwicGF0dGVybiIsImRhdGVGb3JtYXQiLCJ0aHJlc2hvbGRzIiwibWFwcGluZ1R5cGUiLCJhbGlnbiIsInN0eWxlcyIsInN0eWxlc0NvdW50IiwiaW5kZXhUb0luc2VydCIsImxhc3QiLCJyZW1vdmVDb2x1bW5TdHlsZSIsInN0eWxlIiwiaW52ZXJ0Q29sb3JPcmRlciIsInJlZiIsImNvcHkiLCJjb2xvckluZGV4IiwibmV3Q29sb3IiLCJhZGRWYWx1ZU1hcCIsInZhbHVlTWFwcyIsInJlbW92ZVZhbHVlTWFwIiwiYWRkUmFuZ2VNYXAiLCJyYW5nZU1hcHMiLCJmcm9tIiwidG8iLCJyZW1vdmVSYW5nZU1hcCIsImNvbHVtbk9wdGlvbnNUYWIiLCJyZXN0cmljdCIsInNjb3BlIiwiY29udHJvbGxlciIsImZpbmQiLCJ0cmFuc2Zvcm1lcnMiLCJUYWJsZVBhbmVsRWRpdG9yQ3RybCIsInVpU2VnbWVudFNydiIsImFkZENvbHVtblNlZ21lbnQiLCJuZXdQbHVzQnV0dG9uIiwidXBkYXRlVHJhbnNmb3JtSGludHMiLCJjYW5TZXRDb2x1bW5zIiwiY29sdW1uc0hlbHBNZXNzYWdlIiwidHJhbnNmb3JtIiwiZ2V0Q29sdW1uT3B0aW9ucyIsImRhdGFSYXciLCJQcm9taXNlIiwicmVzb2x2ZSIsImdldENvbHVtbnMiLCJzZWdtZW50cyIsImMiLCJuZXdTZWdtZW50IiwiYWRkQ29sdW1uIiwicGx1c0J1dHRvbiIsImh0bWwiLCJ0cmFuc2Zvcm1DaGFuZ2VkIiwicmVtb3ZlQ29sdW1uIiwidGFibGVQYW5lbEVkaXRvciIsImRlZmF1bHRzIiwiJCIsInRyYW5zZm9ybURhdGFUb1RhYmxlIiwiVGFibGVSZW5kZXJlciIsImlzVGFibGVEYXRhIiwiUGFuZWxQbHVnaW4iLCJkaXNwYXRjaCIsImFwcGx5RmlsdGVyRnJvbVRhYmxlIiwiVGFibGVQYW5lbEN0cmwiLCJhbm5vdGF0aW9uc1NydiIsIiRzYW5pdGl6ZSIsInBhZ2VTaXplIiwic2hvd0hlYWRlciIsImZvbnRTaXplIiwic29ydCIsImRlc2MiLCJwYWdlSW5kZXgiLCJmaWVsZHMiLCJwYW5lbERlZmF1bHRzIiwicGFuZWxIYXNSb3dDb2xvck1vZGUiLCJCb29sZWFuIiwicGFuZWxIYXNMaW5rcyIsImxpbmsiLCJvbkRhdGFSZWNlaXZlZCIsIm9uSW5pdEVkaXRNb2RlIiwibWlncmF0ZVRvUGFuZWwiLCJvblBsdWdpblR5cGVDaGFuZ2UiLCJnZXRBbm5vdGF0aW9ucyIsImFubm8iLCJkYXRhTGlzdCIsInJlbmRlcmVyIiwidGhlbWUiLCJ0b2dnbGVDb2x1bW5Tb3J0IiwiY29sSW5kZXgiLCJlbGVtIiwiYXR0cnMiLCJwYWdlQ291bnQiLCJnZXRUYWJsZUhlaWdodCIsInBhbmVsSGVpZ2h0IiwiaGVpZ2h0IiwiYXBwZW5kVGFibGVSb3dzIiwidGJvZHlFbGVtIiwic2V0VGFibGUiLCJlbXB0eSIsInN3aXRjaFBhZ2UiLCJlIiwiZWwiLCJjdXJyZW50VGFyZ2V0IiwicmVuZGVyUGFuZWwiLCJhcHBlbmRQYWdpbmF0aW9uQ29udHJvbHMiLCJmb290ZXJFbGVtIiwiTWF0aCIsImNlaWwiLCJyb3dzIiwic3RhcnRQYWdlIiwibWF4IiwiZW5kUGFnZSIsIm1pbiIsInBhZ2luYXRpb25MaXN0IiwiaSIsImFjdGl2ZUNsYXNzIiwicGFnZUxpbmtFbGVtIiwiYXBwZW5kIiwicGFuZWxFbGVtIiwicGFyZW50cyIsInJvb3RFbGVtIiwiY3NzIiwiYWRkQ2xhc3MiLCJ0b29sdGlwIiwic2VsZWN0b3IiLCJhZGRGaWx0ZXJDbGlja2VkIiwiZmlsdGVyRGF0YSIsIm9wdGlvbnMiLCJyb3ciLCJvcGVyYXRvciIsInVuYmluZERlc3Ryb3kiLCJvZmYiLCJyZW5kZXJEYXRhIiwiYW5ndWxhclBhbmVsQ3RybCIsInNldE5vUGFkZGluZyIsImZpcnN0IiwiZXNjYXBlIiwiZXNjYXBlU3RyaW5nRm9yUmVnZXgiLCJmb3JtYXR0ZWRWYWx1ZVRvU3RyaW5nIiwiZ2V0VmFsdWVGb3JtYXQiLCJzdHJpbmdTdGFydHNBc1JlZ0V4Iiwic3RyaW5nVG9Kc1JlZ2V4IiwidGV4dFV0aWwiLCJ1bkVzY2FwZVN0cmluZ0Zyb21SZWdleCIsImRhdGVUaW1lRm9ybWF0SVNPIiwiZGF0ZVRpbWVGb3JtYXQiLCJnZXRDb2xvckZvclRoZW1lIiwiZ2V0VGVtcGxhdGVTcnYiLCJ0aW1lWm9uZSIsInNhbml0aXplIiwiaW5pdENvbHVtbnMiLCJmb3JtYXR0ZXJzIiwiY29sb3JTdGF0ZSIsImVzY2FwZWRQYXR0ZXJuIiwicmVnZXgiLCJtYXRjaCIsImVzY2FwZUh0bWwiLCJjcmVhdGVDb2x1bW5Gb3JtYXR0ZXIiLCJnZXRDb2xvckZvclZhbHVlIiwiZGVmYXVsdENlbGxGb3JtYXR0ZXIiLCJqb2luIiwiaXNOYU4iLCJmb3JtYXQiLCJOdW1iZXIiLCJzZXRDb2xvclN0YXRlIiwidmFsdWVGb3JtYXR0ZXIiLCJudW1lcmljVmFsdWUiLCJyZW5kZXJSb3dWYXJpYWJsZXMiLCJyb3dJbmRleCIsImNlbGxWYXJpYWJsZSIsInRvU3RyaW5nIiwiZm9ybWF0Q29sdW1uVmFsdWUiLCJmbXQiLCJyZW5kZXJDZWxsIiwiY29sdW1uSW5kZXgiLCJhZGRXaWR0aEhhY2siLCJjZWxsU3R5bGVzIiwiY2VsbFN0eWxlIiwiY2VsbENsYXNzZXMiLCJjZWxsQ2xhc3MiLCJjZWxsIiwiY29sdW1uSHRtbCIsImhpZGRlbiIsInByZXNlcnZlRm9ybWF0IiwidGV4dEFsaWduIiwiY2VsbExpbmsiLCJsaW5rVXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2FuaXRpemVkQ2VsbExpbmsiLCJzYW5pdGl6ZVVybCIsImNlbGxMaW5rVG9vbHRpcCIsImxpbmtUb29sdGlwIiwiY2VsbFRhcmdldCIsImxpbmtUYXJnZXRCbGFuayIsImZpbHRlcmFibGUiLCJwYWdlIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJ5IiwiY2VsbEh0bWwiLCJyb3dTdHlsZSIsInJvd0NsYXNzZXMiLCJyb3dDbGFzcyIsInJlbmRlcl92YWx1ZXMiLCJ2aXNpYmxlQ29sdW1ucyIsImZpbHRlciIsIm5ld1JvdyIsImZpbmRJbmRleCIsImlzT2JqZWN0IiwiZmxhdHRlbiIsIlRpbWVTZXJpZXMiLCJUYWJsZU1vZGVsIiwibWVyZ2VUYWJsZXNJbnRvTW9kZWwiLCJ0aW1lU2VyaWVzRm9ybWF0RmlsdGVyZXIiLCJBcnJheSIsImRhdGFwb2ludHMiLCJyZWR1Y2UiLCJhY2MiLCJjb25jYXQiLCJ0YWJsZURhdGFGb3JtYXRGaWx0ZXJlciIsImRlc2NyaXB0aW9uIiwibW9kZWwiLCJmaWx0ZXJlZERhdGEiLCJkcCIsInBvaW50cyIsInRpbWVLZXkiLCJ0aW1lIiwicG9pbnQiLCJ2YWx1ZXMiLCJnZXRGbG90UGFpcnMiLCJjZWxscyIsInN0YXRzIiwiYW5ub3RhdGlvbnMiLCJldnQiLCJ0YWdzIiwiY29sdW1uTmFtZXMiLCJmb3JFYWNoIiwibm9UYWJsZUluZGV4IiwiZCIsImZyb21DaGFyQ29kZSIsIm5hbWVzIiwibWF4RG9jcyIsImRvYyIsImZsYXR0ZW5lZCIsInByb3BOYW1lIiwieiIsInRhYmxlQ29sIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyYW5zZm9ybWVyIiwibWFrZUNsYXNzRVM1Q29tcGF0aWJsZSIsImxvYWRQbHVnaW5Dc3MiLCJQYW5lbEN0cmxFUzYiLCJNZXRyaWNzUGFuZWxDdHJsRVM2IiwiUXVlcnlDdHJsRVM2Il0sInNvdXJjZVJvb3QiOiIifQ==
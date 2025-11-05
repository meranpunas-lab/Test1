"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["mssqlPlugin"],{

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

/***/ "./public/app/plugins/datasource/mssql/config_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MssqlConfigCtrl": () => (/* binding */ MssqlConfigCtrl)
/* harmony export */ });
/* harmony import */ var _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/datasources/utils/passwordHandlers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class MssqlConfigCtrl {
  /** @ngInject */
  constructor($scope) {
    _defineProperty(this, "onPasswordReset", void 0);

    _defineProperty(this, "onPasswordChange", void 0);

    _defineProperty(this, "showUserCredentials", false);

    _defineProperty(this, "showTlsConfig", false);

    _defineProperty(this, "showCertificateConfig", false);

    this.current = $scope.ctrl.current;
    this.current.jsonData.encrypt = this.current.jsonData.encrypt || 'false';
    this.current.jsonData.sslRootCertFile = this.current.jsonData.sslRootCertFile || '';
    this.current.jsonData.tlsSkipVerify = this.current.jsonData.tlsSkipVerify || false;
    this.current.jsonData.serverName = this.current.jsonData.serverName || '';
    this.current.jsonData.authenticationType = this.current.jsonData.authenticationType || 'SQL Server Authentication';
    this.onPasswordReset = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.createResetHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.PasswordFieldEnum.Password);
    this.onPasswordChange = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.createChangeHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.PasswordFieldEnum.Password);
    this.onAuthenticationTypeChange();
    this.onEncryptChange();
  }

  onAuthenticationTypeChange() {
    // This is using the fallback in https://github.com/denisenkom/go-mssqldb to use Windows Auth if login/user id is empty.
    if (this.current.jsonData.authenticationType === 'Windows Authentication') {
      this.current.user = '';
      this.current.password = '';
    }

    this.showUserCredentials = this.current.jsonData.authenticationType !== 'Windows Authentication';
  }

  onEncryptChange() {
    this.showTlsConfig = this.current.jsonData.encrypt === 'true';
    this.showCertificateConfig = this.showTlsConfig && this.current.jsonData.tlsSkipVerify === false;
  }

}
MssqlConfigCtrl.$inject = ["$scope"];

_defineProperty(MssqlConfigCtrl, "templateUrl", 'partials/config.html');

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MssqlDatasource": () => (/* binding */ MssqlDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/mssql/response_parser.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MssqlDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "interval", void 0);

    this.templateSrv = templateSrv;
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const settingsData = instanceSettings.jsonData || {};
    this.interval = settingsData.timeInterval || '1m';
  }

  interpolateVariable(value, variable) {
    if (typeof value === 'string') {
      if (variable.multi || variable.includeAll) {
        return "'" + value.replace(/'/g, `''`) + "'";
      } else {
        return value;
      }
    }

    if (typeof value === 'number') {
      return value;
    }

    const quotedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, val => {
      if (typeof value === 'number') {
        return value;
      }

      return "'" + val.replace(/'/g, `''`) + "'";
    });

    return quotedValues.join(',');
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

  applyTemplateVariables(target, scopedVars) {
    return {
      refId: target.refId,
      datasource: this.getRef(),
      rawSql: this.templateSrv.replace(target.rawSql, scopedVars, this.interpolateVariable),
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
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: options.range.from.valueOf().toString(),
        to: options.range.to.valueOf().toString(),
        queries: [query]
      },
      requestId: options.annotation.name
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(async res => await this.responseParser.transformAnnotationResponse(options, res.data))));
  }

  filterQuery(query) {
    return !query.hide;
  }

  metricFindQuery(query, optionalOptions) {
    var _range$from, _range$from$valueOf, _range$to, _range$to$valueOf;

    let refId = 'tempvar';

    if (optionalOptions && optionalOptions.variable && optionalOptions.variable.name) {
      refId = optionalOptions.variable.name;
    }

    const range = optionalOptions === null || optionalOptions === void 0 ? void 0 : optionalOptions.range;
    const interpolatedQuery = {
      refId: refId,
      datasource: this.getRef(),
      rawSql: this.templateSrv.replace(query, {}, this.interpolateVariable),
      format: 'table'
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: range === null || range === void 0 ? void 0 : (_range$from = range.from) === null || _range$from === void 0 ? void 0 : (_range$from$valueOf = _range$from.valueOf()) === null || _range$from$valueOf === void 0 ? void 0 : _range$from$valueOf.toString(),
        to: range === null || range === void 0 ? void 0 : (_range$to = range.to) === null || _range$to === void 0 ? void 0 : (_range$to$valueOf = _range$to.valueOf()) === null || _range$to$valueOf === void 0 ? void 0 : _range$to$valueOf.toString(),
        queries: [interpolatedQuery]
      },
      requestId: refId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(rsp => {
      return this.responseParser.transformMetricFindResponse(rsp);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    })));
  }

  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
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
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mapTo)({
      status: 'success',
      message: 'Database Connection OK'
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_4__.toTestingStatus)(err));
    })));
  }

  targetContainsTemplate(query) {
    const rawSql = query.rawSql.replace('$__', '');
    return this.templateSrv.containsTemplate(rawSql);
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/mssql/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/mssql/query_ctrl.ts");
/* harmony import */ var _config_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/mssql/config_ctrl.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const defaultQuery = `SELECT
    <time_column> as time,
    <text_column> as text,
    <tags_column> as tags
  FROM
    <table name>
  WHERE
    $__timeFilter(time_column)
  ORDER BY
    <time_column> ASC`;

class MssqlAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.rawQuery = this.annotation.rawQuery || defaultQuery;
  }

}

MssqlAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(MssqlAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_0__.MssqlDatasource).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_1__.MssqlQueryCtrl).setConfigCtrl(_config_ctrl__WEBPACK_IMPORTED_MODULE_2__.MssqlConfigCtrl).setAnnotationQueryCtrl(MssqlAnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MssqlQueryCtrl": () => (/* binding */ MssqlQueryCtrl)
/* harmony export */ });
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultQuery = `SELECT
  $__timeEpoch(<time_column>),
  <value column> as value,
  <series name column> as metric
FROM
  <table name>
WHERE
  $__timeFilter(time_column)
ORDER BY
  <time_column> ASC`;
class MssqlQueryCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0__.QueryCtrl {
  /** @ngInject */
  constructor($scope, $injector) {
    super($scope, $injector);

    _defineProperty(this, "formats", void 0);

    _defineProperty(this, "lastQueryMeta", void 0);

    _defineProperty(this, "lastQueryError", void 0);

    _defineProperty(this, "showHelp", false);

    this.target.format = this.target.format || 'time_series';
    this.target.alias = '';
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
      } else {
        this.target.rawSql = defaultQuery;
      }
    }

    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataReceived, this.onDataReceived.bind(this), $scope);
    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataError, this.onDataError.bind(this), $scope);
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

}
MssqlQueryCtrl.$inject = ["$scope", "$injector"];

_defineProperty(MssqlQueryCtrl, "templateUrl", 'partials/query.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/response_parser.ts":
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
      return Promise.reject({
        message: 'Missing mandatory time column (with time column alias) in annotation query.'
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixHQUFHcVEscUVBQXNCLENBQUNHLGtGQUFELENBQS9DO0FBQ0EsTUFBTXpJLFNBQVMsR0FBR3NJLHFFQUFzQixDQUFDSSxtRUFBRCxDQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL21ldHJpY3NfcGFuZWxfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3V0aWxzL3Bhc3N3b3JkSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL21zc3FsL2NvbmZpZ19jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9tc3NxbC9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9tc3NxbC9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL21zc3FsL3F1ZXJ5X2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL21zc3FsL3Jlc3BvbnNlX3BhcnNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3Nkay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2NhdGlvblNlYXJjaFRvT2JqZWN0LCBsb2NhdGlvblNlcnZpY2UsIG5hdmlnYXRpb25Mb2dnZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGRlcHJlY2F0aW9uV2FybmluZywgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG4vLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9hZThlOTAzZWRmODhhODNmZWRkMTE2YWUwMmMwNjI4YmY3MmIxNTBjL3NyYy9uZy9sb2NhdGlvbi5qcyNMNVxuY29uc3QgREVGQVVMVF9QT1JUUzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgaHR0cDogODAsIGh0dHBzOiA0NDMsIGZ0cDogMjEgfTtcblxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFic1VybCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuYWJzVXJsKTtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLmhhc2gpO1xuICAgIHRoaXMuaG9zdCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaG9zdCk7XG4gICAgdGhpcy5wYXRoID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wYXRoKTtcbiAgICB0aGlzLnBvcnQgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBvcnQsICd3aW5kb3cubG9jYXRpb24nKTtcbiAgICB0aGlzLnByb3RvY29sID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wcm90b2NvbCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucmVwbGFjZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucmVwbGFjZSk7XG4gICAgdGhpcy5zZWFyY2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnNlYXJjaCk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy51cmwpO1xuICB9XG5cbiAgd3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKGZuOiBGdW5jdGlvbiwgcmVwbGFjZW1lbnQ/OiBzdHJpbmcpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICAgIGRlcHJlY2F0aW9uV2FybmluZygnJGxvY2F0aW9uJywgZm4ubmFtZSwgcmVwbGFjZW1lbnQgfHwgJ2xvY2F0aW9uU2VydmljZScpO1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGFic1VybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7dGhpcy51cmwoKX1gO1xuICB9XG5cbiAgaGFzaChuZXdIYXNoPzogc3RyaW5nIHwgbnVsbCkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBoYXNoJyk7XG5cbiAgICBpZiAoIW5ld0hhc2gpIHtcbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5oYXNoLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gIH1cblxuICBob3N0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLmhvc3RuYW1lO1xuICB9XG5cbiAgcGF0aChwYXRobmFtZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBwYXRoJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuXG4gICAgaWYgKHBhdGhuYW1lICE9PSB1bmRlZmluZWQgJiYgcGF0aG5hbWUgIT09IG51bGwpIHtcbiAgICAgIGxldCBwYXJzZWRQYXRoID0gU3RyaW5nKHBhdGhuYW1lKTtcbiAgICAgIHBhcnNlZFBhdGggPSBwYXJzZWRQYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhcnNlZFBhdGggOiBgLyR7cGFyc2VkUGF0aH1gO1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7cGFyc2VkUGF0aH1gKTtcblxuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IHVybC5zZWFyY2gubGVuZ3RoID4gMCA/IHVybC5zZWFyY2ggOiBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2g6IHVybC5oYXNoLmxlbmd0aCA+IDAgPyB1cmwuaGFzaCA6IGxvY2F0aW9uLmhhc2gsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PT0gbnVsbCkge1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxuXG4gIHBvcnQoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVybC5wb3J0LCAxMCkgfHwgREVGQVVMVF9QT1JUU1t1cmwucHJvdG9jb2xdIHx8IG51bGw7XG4gIH1cblxuICBwcm90b2NvbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5wcm90b2NvbC5zbGljZSgwLCAtMSk7XG4gIH1cblxuICByZXBsYWNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgc2VhcmNoKHNlYXJjaD86IGFueSwgcGFyYW1WYWx1ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzZWFyY2gnKTtcbiAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7XG4gICAgICAgIFtzZWFyY2hdOiBwYXJhbVZhbHVlLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGxldCBuZXdRdWVyeTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0geyAuLi5zZWFyY2ggfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0gbG9jYXRpb25TZWFyY2hUb09iamVjdChzZWFyY2gpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdRdWVyeSkpIHtcbiAgICAgICAgLy8gcmVtb3ZpbmcgcGFyYW1zIHdpdGggbnVsbCB8IHVuZGVmaW5lZFxuICAgICAgICBpZiAobmV3UXVlcnlba2V5XSA9PT0gbnVsbCB8fCBuZXdRdWVyeVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkZWxldGUgbmV3UXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVkVXJsID0gdXJsVXRpbC5yZW5kZXJVcmwobG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkucGF0aG5hbWUsIG5ld1F1ZXJ5KTtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHVwZGF0ZWRVcmwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGUoc3RhdGU/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogc3RhdGUnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHVybChuZXdVcmw/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogdXJsJyk7XG5cbiAgICBpZiAobmV3VXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIGhhc2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnN0YXJ0c1dpdGgoJz8nKSkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7IC4uLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLCBzZWFyY2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKG5ld1VybCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKTtcbiAgICByZXR1cm4gYCR7bG9jYXRpb24ucGF0aG5hbWV9JHtsb2NhdGlvbi5zZWFyY2h9JHtsb2NhdGlvbi5oYXNofWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUGFuZWxDdHJsIH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvcGFuZWxfY3RybCc7XG5pbXBvcnQgeyBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvdXRpbHMvcGFuZWwnO1xuaW1wb3J0IHsgQ29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7XG4gIERhdGFGcmFtZSxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIERhdGFTb3VyY2VBcGksXG4gIExlZ2FjeVJlc3BvbnNlRGF0YSxcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIFBhbmVsRXZlbnRzLFxuICBUaW1lUmFuZ2UsXG4gIHRvRGF0YUZyYW1lRFRPLFxuICB0b0xlZ2FjeVJlc3BvbnNlRGF0YSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFuZWxNb2RlbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUnO1xuaW1wb3J0IHsgUGFuZWxRdWVyeVJ1bm5lciB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL1BhbmVsUXVlcnlSdW5uZXInO1xuXG5jbGFzcyBNZXRyaWNzUGFuZWxDdHJsIGV4dGVuZHMgUGFuZWxDdHJsIHtcbiAgZGVjbGFyZSBkYXRhc291cmNlOiBEYXRhU291cmNlQXBpO1xuICBkZWNsYXJlIHJhbmdlOiBUaW1lUmFuZ2U7XG5cbiAgY29udGV4dFNydjogQ29udGV4dFNydjtcbiAgZGF0YXNvdXJjZVNydjogYW55O1xuICB0aW1lU3J2OiBhbnk7XG4gIHRlbXBsYXRlU3J2OiBhbnk7XG4gIGludGVydmFsOiBhbnk7XG4gIGludGVydmFsTXM6IGFueTtcbiAgcmVzb2x1dGlvbjogYW55O1xuICB0aW1lSW5mbz86IHN0cmluZztcbiAgc2tpcERhdGFPbkluaXQgPSBmYWxzZTtcbiAgZGF0YUxpc3Q6IExlZ2FjeVJlc3BvbnNlRGF0YVtdID0gW107XG4gIHF1ZXJ5U3Vic2NyaXB0aW9uPzogVW5zdWJzY3JpYmFibGUgfCBudWxsO1xuICB1c2VEYXRhRnJhbWVzID0gZmFsc2U7XG4gIHBhbmVsRGF0YT86IFBhbmVsRGF0YTtcblxuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgJGluamVjdG9yOiBhbnkpIHtcbiAgICBzdXBlcigkc2NvcGUsICRpbmplY3Rvcik7XG5cbiAgICB0aGlzLmNvbnRleHRTcnYgPSAkaW5qZWN0b3IuZ2V0KCdjb250ZXh0U3J2Jyk7XG4gICAgdGhpcy5kYXRhc291cmNlU3J2ID0gJGluamVjdG9yLmdldCgnZGF0YXNvdXJjZVNydicpO1xuICAgIHRoaXMudGltZVNydiA9ICRpbmplY3Rvci5nZXQoJ3RpbWVTcnYnKTtcbiAgICB0aGlzLnRlbXBsYXRlU3J2ID0gJGluamVjdG9yLmdldCgndGVtcGxhdGVTcnYnKTtcbiAgICB0aGlzLnBhbmVsLmRhdGFzb3VyY2UgPSB0aGlzLnBhbmVsLmRhdGFzb3VyY2UgfHwgbnVsbDtcblxuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLnJlZnJlc2gsIHRoaXMub25NZXRyaWNzUGFuZWxSZWZyZXNoLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLnBhbmVsVGVhcmRvd24sIHRoaXMub25QYW5lbFRlYXJEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50LCB0aGlzLm9uTWV0cmljc1BhbmVsTW91bnRlZC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25NZXRyaWNzUGFuZWxNb3VudGVkKCkge1xuICAgIGNvbnN0IHF1ZXJ5UnVubmVyID0gdGhpcy5wYW5lbC5nZXRRdWVyeVJ1bm5lcigpIGFzIFBhbmVsUXVlcnlSdW5uZXI7XG4gICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IHF1ZXJ5UnVubmVyXG4gICAgICAuZ2V0RGF0YSh7IHdpdGhUcmFuc2Zvcm1zOiB0cnVlLCB3aXRoRmllbGRDb25maWc6IHRydWUgfSlcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5wYW5lbERhdGFPYnNlcnZlcik7XG4gIH1cblxuICBwcml2YXRlIG9uUGFuZWxUZWFyRG93bigpIHtcbiAgICBpZiAodGhpcy5xdWVyeVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk1ldHJpY3NQYW5lbFJlZnJlc2goKSB7XG4gICAgLy8gaWdub3JlIGZldGNoaW5nIGRhdGEgaWYgYW5vdGhlciBwYW5lbCBpcyBpbiBmdWxsc2NyZWVuXG4gICAgaWYgKHRoaXMub3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHdlIGhhdmUgc25hcHNob3QgZGF0YSB1c2UgdGhhdFxuICAgIGlmICh0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoKTtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5wYW5lbC5zbmFwc2hvdERhdGE7XG4gICAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICBpZiAoIWlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wYW5lbERhdGEgPSB7XG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgICAgc2VyaWVzOiBkYXRhLFxuICAgICAgICB0aW1lUmFuZ2U6IHRoaXMucmFuZ2UsXG4gICAgICB9O1xuXG4gICAgICAvLyBEZWZlciBwYW5lbCByZW5kZXJpbmcgdGlsbCB0aGUgbmV4dCBkaWdlc3QgY3ljbGUuXG4gICAgICAvLyBGb3Igc29tZSByZWFzb24gc25hcHNob3QgcGFuZWxzIGRvbid0IGluaXQgYXQgdGhpcyB0aW1lLCBzbyB0aGlzIGhlbHBzIHRvIGF2b2lkIHJlbmRlcmluZyBpc3N1ZXMuXG4gICAgICByZXR1cm4gdGhpcy4kdGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZGF0YVNuYXBzaG90TG9hZCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBsb2FkaW5nL2Vycm9yIHN0YXRlXG4gICAgZGVsZXRlIHRoaXMuZXJyb3I7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIC8vIGxvYWQgZGF0YXNvdXJjZSBzZXJ2aWNlXG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVNydlxuICAgICAgLmdldCh0aGlzLnBhbmVsLmRhdGFzb3VyY2UsIHRoaXMucGFuZWwuc2NvcGVkVmFycylcbiAgICAgIC50aGVuKHRoaXMuaXNzdWVRdWVyaWVzLmJpbmQodGhpcykpXG4gICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm9jZXNzRGF0YUVycm9yKGVycjogYW55KSB7XG4gICAgLy8gaWYgY2FuY2VsZWQgIGtlZXAgbG9hZGluZyBzZXQgdG8gdHJ1ZVxuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnUGFuZWwgcmVxdWVzdCBjYW5jZWxsZWQnLCBlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZSB8fCAnUmVxdWVzdCBFcnJvcic7XG5cbiAgICBpZiAoZXJyLmRhdGEpIHtcbiAgICAgIGlmIChlcnIuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnIuZGF0YS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmIChlcnIuZGF0YS5lcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLmRhdGEuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICB9XG5cbiAgYW5ndWxhckRpcnR5Q2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLiRzY29wZS4kcm9vdC4kJHBoYXNlKSB7XG4gICAgICB0aGlzLiRzY29wZS4kZGlnZXN0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlcyB0aGUgcmVzcG9uc2Ugd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzdHJlYW1cbiAgcGFuZWxEYXRhT2JzZXJ2ZXIgPSB7XG4gICAgbmV4dDogKGRhdGE6IFBhbmVsRGF0YSkgPT4ge1xuICAgICAgdGhpcy5wYW5lbERhdGEgPSBkYXRhO1xuXG4gICAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkVycm9yKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICB9XG5cbiAgICAgIC8vIElnbm9yZSBkYXRhIGluIGxvYWRpbmcgc3RhdGVcbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEucmVxdWVzdCkge1xuICAgICAgICBjb25zdCB7IHRpbWVJbmZvIH0gPSBkYXRhLnJlcXVlc3Q7XG4gICAgICAgIGlmICh0aW1lSW5mbykge1xuICAgICAgICAgIHRoaXMudGltZUluZm8gPSB0aW1lSW5mbztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aW1lUmFuZ2UpIHtcbiAgICAgICAgdGhpcy5yYW5nZSA9IGRhdGEudGltZVJhbmdlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy51c2VEYXRhRnJhbWVzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRGF0YUZyYW1lcyhkYXRhLnNlcmllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNYWtlIHRoZSByZXN1bHRzIGxvb2sgYXMgaWYgdGhleSBjYW1lIGRpcmVjdGx5IGZyb20gYSA8Ni4yIGRhdGFzb3VyY2UgcmVxdWVzdFxuICAgICAgICBjb25zdCBsZWdhY3kgPSBkYXRhLnNlcmllcy5tYXAoKHYpID0+IHRvTGVnYWN5UmVzcG9uc2VEYXRhKHYpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVRdWVyeVJlc3VsdCh7IGRhdGE6IGxlZ2FjeSB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICAgIH0sXG4gIH07XG5cbiAgdXBkYXRlVGltZVJhbmdlKGRhdGFzb3VyY2U/OiBEYXRhU291cmNlQXBpKSB7XG4gICAgdGhpcy5kYXRhc291cmNlID0gZGF0YXNvdXJjZSB8fCB0aGlzLmRhdGFzb3VyY2U7XG4gICAgdGhpcy5yYW5nZSA9IHRoaXMudGltZVNydi50aW1lUmFuZ2UoKTtcblxuICAgIGNvbnN0IG5ld1RpbWVEYXRhID0gYXBwbHlQYW5lbFRpbWVPdmVycmlkZXModGhpcy5wYW5lbCwgdGhpcy5yYW5nZSk7XG4gICAgdGhpcy50aW1lSW5mbyA9IG5ld1RpbWVEYXRhLnRpbWVJbmZvO1xuICAgIHRoaXMucmFuZ2UgPSBuZXdUaW1lRGF0YS50aW1lUmFuZ2U7XG4gIH1cblxuICBpc3N1ZVF1ZXJpZXMoZGF0YXNvdXJjZTogRGF0YVNvdXJjZUFwaSkge1xuICAgIHRoaXMudXBkYXRlVGltZVJhbmdlKGRhdGFzb3VyY2UpO1xuXG4gICAgdGhpcy5kYXRhc291cmNlID0gZGF0YXNvdXJjZTtcblxuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5wYW5lbCBhcyBQYW5lbE1vZGVsO1xuICAgIGNvbnN0IHF1ZXJ5UnVubmVyID0gcGFuZWwuZ2V0UXVlcnlSdW5uZXIoKTtcblxuICAgIHJldHVybiBxdWVyeVJ1bm5lci5ydW4oe1xuICAgICAgZGF0YXNvdXJjZTogcGFuZWwuZGF0YXNvdXJjZSxcbiAgICAgIHF1ZXJpZXM6IHBhbmVsLnRhcmdldHMsXG4gICAgICBwYW5lbElkOiBwYW5lbC5pZCxcbiAgICAgIGRhc2hib2FyZElkOiB0aGlzLmRhc2hib2FyZC5pZCxcbiAgICAgIHRpbWV6b25lOiB0aGlzLmRhc2hib2FyZC5nZXRUaW1lem9uZSgpLFxuICAgICAgdGltZUluZm86IHRoaXMudGltZUluZm8sXG4gICAgICB0aW1lUmFuZ2U6IHRoaXMucmFuZ2UsXG4gICAgICBtYXhEYXRhUG9pbnRzOiBwYW5lbC5tYXhEYXRhUG9pbnRzIHx8IHRoaXMud2lkdGgsXG4gICAgICBtaW5JbnRlcnZhbDogcGFuZWwuaW50ZXJ2YWwsXG4gICAgICBzY29wZWRWYXJzOiBwYW5lbC5zY29wZWRWYXJzLFxuICAgICAgY2FjaGVUaW1lb3V0OiBwYW5lbC5jYWNoZVRpbWVvdXQsXG4gICAgICB0cmFuc2Zvcm1hdGlvbnM6IHBhbmVsLnRyYW5zZm9ybWF0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURhdGFGcmFtZXMoZGF0YTogRGF0YUZyYW1lW10pIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmRhc2hib2FyZCAmJiB0aGlzLmRhc2hib2FyZC5zbmFwc2hvdCkge1xuICAgICAgdGhpcy5wYW5lbC5zbmFwc2hvdERhdGEgPSBkYXRhLm1hcCgoZnJhbWUpID0+IHRvRGF0YUZyYW1lRFRPKGZyYW1lKSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZGF0YUZyYW1lc1JlY2VpdmVkLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVF1ZXJ5UmVzdWx0KHJlc3VsdDogRGF0YVF1ZXJ5UmVzcG9uc2UpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmRhc2hib2FyZC5zbmFwc2hvdCkge1xuICAgICAgdGhpcy5wYW5lbC5zbmFwc2hvdERhdGEgPSByZXN1bHQuZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhIHNvdXJjZSBxdWVyeSByZXN1bHQgaW52YWxpZCwgbWlzc2luZyBkYXRhIGZpZWxkOicsIHJlc3VsdCk7XG4gICAgICByZXN1bHQgPSB7IGRhdGE6IFtdIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZGF0YVJlY2VpdmVkLCByZXN1bHQuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgTWV0cmljc1BhbmVsQ3RybCB9O1xuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgcHJvZmlsZXIgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7XG4gIEFwcEV2ZW50LFxuICBQYW5lbEV2ZW50cyxcbiAgUGFuZWxQbHVnaW5NZXRhLFxuICBBbmd1bGFyUGFuZWxNZW51SXRlbSxcbiAgRXZlbnRCdXNFeHRlbmRlZCxcbiAgRXZlbnRCdXNTcnYsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUnO1xuaW1wb3J0IHsgQW5ndWxhckxvY2F0aW9uV3JhcHBlciB9IGZyb20gJ2FwcC9hbmd1bGFyL0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInO1xuXG5leHBvcnQgY2xhc3MgUGFuZWxDdHJsIHtcbiAgcGFuZWw6IGFueTtcbiAgZXJyb3I6IGFueTtcbiAgZGVjbGFyZSBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICBwbHVnaW5OYW1lID0gJyc7XG4gIHBsdWdpbklkID0gJyc7XG4gIGVkaXRvclRhYnM6IGFueTtcbiAgJHNjb3BlOiBhbnk7XG4gICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlO1xuICAkdGltZW91dDogYW55O1xuICBlZGl0TW9kZUluaXRpYXRlZCA9IGZhbHNlO1xuICBkZWNsYXJlIGhlaWdodDogbnVtYmVyO1xuICBkZWNsYXJlIHdpZHRoOiBudW1iZXI7XG4gIGNvbnRhaW5lckhlaWdodDogYW55O1xuICBldmVudHM6IEV2ZW50QnVzRXh0ZW5kZWQ7XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgdGltaW5nOiBhbnk7XG4gICRsb2NhdGlvbjogQW5ndWxhckxvY2F0aW9uV3JhcHBlcjtcblxuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2UpIHtcbiAgICB0aGlzLnBhbmVsID0gdGhpcy5wYW5lbCA/PyAkc2NvcGUuJHBhcmVudC5wYW5lbDtcbiAgICB0aGlzLmRhc2hib2FyZCA9IHRoaXMuZGFzaGJvYXJkID8/ICRzY29wZS4kcGFyZW50LmRhc2hib2FyZDtcbiAgICB0aGlzLiRpbmplY3RvciA9ICRpbmplY3RvcjtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLiR0aW1lb3V0ID0gJGluamVjdG9yLmdldCgnJHRpbWVvdXQnKTtcbiAgICB0aGlzLmVkaXRvclRhYnMgPSBbXTtcbiAgICB0aGlzLiRsb2NhdGlvbiA9IG5ldyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyKCk7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRCdXNTcnYoKTtcbiAgICB0aGlzLnRpbWluZyA9IHt9OyAvLyBub3QgdXNlZCBidXQgaGVyZSB0byBub3QgYnJlYWsgcGx1Z2luc1xuXG4gICAgY29uc3QgcGx1Z2luID0gY29uZmlnLnBhbmVsc1t0aGlzLnBhbmVsLnR5cGVdO1xuICAgIGlmIChwbHVnaW4pIHtcbiAgICAgIHRoaXMucGx1Z2luSWQgPSBwbHVnaW4uaWQ7XG4gICAgICB0aGlzLnBsdWdpbk5hbWUgPSBwbHVnaW4ubmFtZTtcbiAgICB9XG5cbiAgICAkc2NvcGUuJG9uKFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50Lm5hbWUsICgpID0+IHRoaXMucGFuZWxEaWRNb3VudCgpKTtcbiAgfVxuXG4gIHBhbmVsRGlkTW91bnQoKSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5jb21wb25lbnREaWRNb3VudCk7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5pbml0aWFsaXplZCk7XG4gICAgdGhpcy5kYXNoYm9hcmQucGFuZWxJbml0aWFsaXplZCh0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcmluZ0NvbXBsZXRlZCgpIHtcbiAgICBwcm9maWxlci5yZW5kZXJpbmdDb21wbGV0ZWQoKTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbC5yZWZyZXNoKCk7XG4gIH1cblxuICBwdWJsaXNoQXBwRXZlbnQ8VD4oZXZlbnQ6IEFwcEV2ZW50PFQ+LCBwYXlsb2FkPzogVCkge1xuICAgIHRoaXMuJHNjb3BlLiRyb290LmFwcEV2ZW50KGV2ZW50LCBwYXlsb2FkKTtcbiAgfVxuXG4gIGluaXRFZGl0TW9kZSgpIHtcbiAgICBpZiAoIXRoaXMuZWRpdE1vZGVJbml0aWF0ZWQpIHtcbiAgICAgIHRoaXMuZWRpdE1vZGVJbml0aWF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5lZGl0TW9kZUluaXRpYWxpemVkKTtcbiAgICB9XG4gIH1cblxuICBhZGRFZGl0b3JUYWIodGl0bGU6IHN0cmluZywgZGlyZWN0aXZlRm46IGFueSwgaW5kZXg/OiBudW1iZXIsIGljb24/OiBhbnkpIHtcbiAgICBjb25zdCBlZGl0b3JUYWIgPSB7IHRpdGxlLCBkaXJlY3RpdmVGbiwgaWNvbiB9O1xuXG4gICAgaWYgKGlzU3RyaW5nKGRpcmVjdGl2ZUZuKSkge1xuICAgICAgZWRpdG9yVGFiLmRpcmVjdGl2ZUZuID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZW1wbGF0ZVVybDogZGlyZWN0aXZlRm4gfTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGluZGV4KSB7XG4gICAgICB0aGlzLmVkaXRvclRhYnMuc3BsaWNlKGluZGV4LCAwLCBlZGl0b3JUYWIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRvclRhYnMucHVzaChlZGl0b3JUYWIpO1xuICAgIH1cbiAgfVxuXG4gIGdldEV4dGVuZGVkTWVudSgpIHtcbiAgICBjb25zdCBtZW51OiBBbmd1bGFyUGFuZWxNZW51SXRlbVtdID0gW107XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5pbml0UGFuZWxBY3Rpb25zLCBtZW51KTtcbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG4gIC8vIE92ZXJyaWRlIGluIHN1Yi1jbGFzcyB0byBhZGQgaXRlbXMgYmVmb3JlIGV4dGVuZGVkIG1lbnVcbiAgYXN5bmMgZ2V0QWRkaXRpb25hbE1lbnVJdGVtcygpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgb3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFzaGJvYXJkLm90aGVyUGFuZWxJbkZ1bGxzY3JlZW4odGhpcy5wYW5lbCk7XG4gIH1cblxuICByZW5kZXIocGF5bG9hZD86IGFueSkge1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMucmVuZGVyLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlbiBmcm9tIHJlYWN0XG4gIG9uUGx1Z2luVHlwZUNoYW5nZSA9IChwbHVnaW46IFBhbmVsUGx1Z2luTWV0YSkgPT4ge307XG59XG4iLCJpbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcblxuZXhwb3J0IGNsYXNzIFF1ZXJ5Q3RybDxUID0gYW55PiB7XG4gIHRhcmdldCE6IFQ7XG4gIGRhdGFzb3VyY2UhOiBhbnk7XG4gIHBhbmVsQ3RybCE6IGFueTtcbiAgcGFuZWw6IGFueTtcbiAgaGFzUmF3TW9kZSE6IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nIHwgbnVsbDtcbiAgaXNMYXN0UXVlcnk6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljICRzY29wZTogYW55LCBwdWJsaWMgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2UpIHtcbiAgICB0aGlzLnBhbmVsQ3RybCA9IHRoaXMucGFuZWxDdHJsID8/ICRzY29wZS5jdHJsLnBhbmVsQ3RybDtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMudGFyZ2V0ID8/ICRzY29wZS5jdHJsLnRhcmdldDtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSB0aGlzLmRhdGFzb3VyY2UgPz8gJHNjb3BlLmN0cmwuZGF0YXNvdXJjZTtcbiAgICB0aGlzLnBhbmVsID0gdGhpcy5wYW5lbEN0cmw/LnBhbmVsID8/ICRzY29wZS5jdHJsLnBhbmVsQ3RybC5wYW5lbDtcbiAgICB0aGlzLmlzTGFzdFF1ZXJ5ID0gaW5kZXhPZih0aGlzLnBhbmVsLnRhcmdldHMsIHRoaXMudGFyZ2V0KSA9PT0gdGhpcy5wYW5lbC50YXJnZXRzLmxlbmd0aCAtIDE7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBTZXQgb2YgaGFuZGxlcnMgZm9yIHNlY3VyZSBwYXNzd29yZCBmaWVsZCBpbiBBbmd1bGFyIGNvbXBvbmVudHMuIFRoZXkgaGFuZGxlIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aFxuICogcGFzc3dvcmRzIHN0b3JlZCBpbiBwbGFpbiB0ZXh0IGZpZWxkcy5cbiAqL1xuXG5pbXBvcnQgeyBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGVudW0gUGFzc3dvcmRGaWVsZEVudW0ge1xuICBQYXNzd29yZCA9ICdwYXNzd29yZCcsXG4gIEJhc2ljQXV0aFBhc3N3b3JkID0gJ2Jhc2ljQXV0aFBhc3N3b3JkJyxcbn1cblxuLyoqXG4gKiBCYXNpYyBzaGFwZSBmb3Igc2V0dGluZ3MgY29udHJvbGxlcnMgaW4gYXQgdGhlIG1vbWVudCBtb3N0bHkgYW5ndWxhciBkYXRhIHNvdXJjZSBwbHVnaW5zLlxuICovXG5leHBvcnQgdHlwZSBDdHJsID0ge1xuICBjdXJyZW50OiB7XG4gICAgc2VjdXJlSnNvbkZpZWxkczoge1xuICAgICAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcbiAgICB9O1xuICAgIHNlY3VyZUpzb25EYXRhPzoge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgYmFzaWNBdXRoUGFzc3dvcmQ/OiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVzZXRIYW5kbGVyID1cbiAgKGN0cmw6IEN0cmwsIGZpZWxkOiBQYXNzd29yZEZpZWxkRW51bSkgPT4gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gUmVzZXQgYWxzbyBub3JtYWwgcGxhaW4gdGV4dCBwYXNzd29yZCB0byByZW1vdmUgaXQgYW5kIG9ubHkgc2F2ZSBpdCBpbiBzZWN1cmVKc29uRGF0YS5cbiAgICBjdHJsLmN1cnJlbnRbZmllbGRdID0gdW5kZWZpbmVkO1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRmllbGRzW2ZpZWxkXSA9IGZhbHNlO1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YSA9IGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YSB8fCB7fTtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGFbZmllbGRdID0gJyc7XG4gIH07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDaGFuZ2VIYW5kbGVyID1cbiAgKGN0cmw6IGFueSwgZmllbGQ6IFBhc3N3b3JkRmllbGRFbnVtKSA9PiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhID0gY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhIHx8IHt9O1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YVtmaWVsZF0gPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQ2hhbmdlSGFuZGxlcixcbiAgY3JlYXRlUmVzZXRIYW5kbGVyLFxuICBQYXNzd29yZEZpZWxkRW51bSxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvZGF0YXNvdXJjZXMvdXRpbHMvcGFzc3dvcmRIYW5kbGVycyc7XG5cbmV4cG9ydCBjbGFzcyBNc3NxbENvbmZpZ0N0cmwge1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAncGFydGlhbHMvY29uZmlnLmh0bWwnO1xuXG4gIC8vIFNldCB0aHJvdWdoIGFuZ3VsYXIgYmluZGluZ3NcbiAgZGVjbGFyZSBjdXJyZW50OiBhbnk7XG5cbiAgb25QYXNzd29yZFJlc2V0OiBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVSZXNldEhhbmRsZXI+O1xuICBvblBhc3N3b3JkQ2hhbmdlOiBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVDaGFuZ2VIYW5kbGVyPjtcbiAgc2hvd1VzZXJDcmVkZW50aWFscyA9IGZhbHNlO1xuICBzaG93VGxzQ29uZmlnID0gZmFsc2U7XG4gIHNob3dDZXJ0aWZpY2F0ZUNvbmZpZyA9IGZhbHNlO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSAkc2NvcGUuY3RybC5jdXJyZW50O1xuICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS5lbmNyeXB0ID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLmVuY3J5cHQgfHwgJ2ZhbHNlJztcbiAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEuc3NsUm9vdENlcnRGaWxlID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLnNzbFJvb3RDZXJ0RmlsZSB8fCAnJztcbiAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzU2tpcFZlcmlmeSA9IHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNTa2lwVmVyaWZ5IHx8IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS5zZXJ2ZXJOYW1lID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLnNlcnZlck5hbWUgfHwgJyc7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5hdXRoZW50aWNhdGlvblR5cGUgfHwgJ1NRTCBTZXJ2ZXIgQXV0aGVudGljYXRpb24nO1xuICAgIHRoaXMub25QYXNzd29yZFJlc2V0ID0gY3JlYXRlUmVzZXRIYW5kbGVyKHRoaXMsIFBhc3N3b3JkRmllbGRFbnVtLlBhc3N3b3JkKTtcbiAgICB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UgPSBjcmVhdGVDaGFuZ2VIYW5kbGVyKHRoaXMsIFBhc3N3b3JkRmllbGRFbnVtLlBhc3N3b3JkKTtcbiAgICB0aGlzLm9uQXV0aGVudGljYXRpb25UeXBlQ2hhbmdlKCk7XG4gICAgdGhpcy5vbkVuY3J5cHRDaGFuZ2UoKTtcbiAgfVxuXG4gIG9uQXV0aGVudGljYXRpb25UeXBlQ2hhbmdlKCkge1xuICAgIC8vIFRoaXMgaXMgdXNpbmcgdGhlIGZhbGxiYWNrIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9kZW5pc2Vua29tL2dvLW1zc3FsZGIgdG8gdXNlIFdpbmRvd3MgQXV0aCBpZiBsb2dpbi91c2VyIGlkIGlzIGVtcHR5LlxuICAgIGlmICh0aGlzLmN1cnJlbnQuanNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlID09PSAnV2luZG93cyBBdXRoZW50aWNhdGlvbicpIHtcbiAgICAgIHRoaXMuY3VycmVudC51c2VyID0gJyc7XG4gICAgICB0aGlzLmN1cnJlbnQucGFzc3dvcmQgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLnNob3dVc2VyQ3JlZGVudGlhbHMgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlICE9PSAnV2luZG93cyBBdXRoZW50aWNhdGlvbic7XG4gIH1cblxuICBvbkVuY3J5cHRDaGFuZ2UoKSB7XG4gICAgdGhpcy5zaG93VGxzQ29uZmlnID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLmVuY3J5cHQgPT09ICd0cnVlJztcbiAgICB0aGlzLnNob3dDZXJ0aWZpY2F0ZUNvbmZpZyA9IHRoaXMuc2hvd1Rsc0NvbmZpZyAmJiB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzU2tpcFZlcmlmeSA9PT0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IG1hcCBhcyBfbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFja2VuZERhdGFTb3VyY2VSZXNwb25zZSwgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLCBGZXRjaFJlc3BvbnNlLCBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uRXZlbnQsIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBNZXRyaWNGaW5kVmFsdWUsIFNjb3BlZFZhcnMsIFRpbWVSYW5nZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgUmVzcG9uc2VQYXJzZXIgZnJvbSAnLi9yZXNwb25zZV9wYXJzZXInO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcbmltcG9ydCB7IE1zc3FsT3B0aW9ucywgTXNzcWxRdWVyeSwgTXNzcWxRdWVyeUZvckludGVycG9sYXRpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHRvVGVzdGluZ1N0YXR1cyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL3F1ZXJ5UmVzcG9uc2UnO1xuXG5leHBvcnQgY2xhc3MgTXNzcWxEYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPE1zc3FsUXVlcnksIE1zc3FsT3B0aW9ucz4ge1xuICBpZDogYW55O1xuICBuYW1lOiBhbnk7XG4gIHJlc3BvbnNlUGFyc2VyOiBSZXNwb25zZVBhcnNlcjtcbiAgaW50ZXJ2YWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxNc3NxbE9wdGlvbnM+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKVxuICApIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgICB0aGlzLm5hbWUgPSBpbnN0YW5jZVNldHRpbmdzLm5hbWU7XG4gICAgdGhpcy5pZCA9IGluc3RhbmNlU2V0dGluZ3MuaWQ7XG4gICAgdGhpcy5yZXNwb25zZVBhcnNlciA9IG5ldyBSZXNwb25zZVBhcnNlcigpO1xuICAgIGNvbnN0IHNldHRpbmdzRGF0YSA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEgfHwgKHt9IGFzIE1zc3FsT3B0aW9ucyk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldHRpbmdzRGF0YS50aW1lSW50ZXJ2YWwgfHwgJzFtJztcbiAgfVxuXG4gIGludGVycG9sYXRlVmFyaWFibGUodmFsdWU6IGFueSwgdmFyaWFibGU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodmFyaWFibGUubXVsdGkgfHwgdmFyaWFibGUuaW5jbHVkZUFsbCkge1xuICAgICAgICByZXR1cm4gXCInXCIgKyB2YWx1ZS5yZXBsYWNlKC8nL2csIGAnJ2ApICsgXCInXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBxdW90ZWRWYWx1ZXMgPSBfbWFwKHZhbHVlLCAodmFsKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIidcIiArIHZhbC5yZXBsYWNlKC8nL2csIGAnJ2ApICsgXCInXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHF1b3RlZFZhbHVlcy5qb2luKCcsJyk7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyhcbiAgICBxdWVyaWVzOiBNc3NxbFF1ZXJ5Rm9ySW50ZXJwb2xhdGlvbltdLFxuICAgIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnNcbiAgKTogTXNzcWxRdWVyeUZvckludGVycG9sYXRpb25bXSB7XG4gICAgbGV0IGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgaWYgKHF1ZXJpZXMgJiYgcXVlcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBleHBhbmRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRRdWVyeSA9IHtcbiAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgIHJhd1NxbDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnJhd1NxbCwgc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgICAgICByYXdRdWVyeTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkUXVlcnk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGFuZGVkUXVlcmllcztcbiAgfVxuXG4gIGFwcGx5VGVtcGxhdGVWYXJpYWJsZXModGFyZ2V0OiBNc3NxbFF1ZXJ5LCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZklkOiB0YXJnZXQucmVmSWQsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LnJhd1NxbCwgc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgIGZvcm1hdDogdGFyZ2V0LmZvcm1hdCxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgYW5ub3RhdGlvblF1ZXJ5KG9wdGlvbnM6IGFueSk6IFByb21pc2U8QW5ub3RhdGlvbkV2ZW50W10+IHtcbiAgICBpZiAoIW9wdGlvbnMuYW5ub3RhdGlvbi5yYXdRdWVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgbWVzc2FnZTogJ1F1ZXJ5IG1pc3NpbmcgaW4gYW5ub3RhdGlvbiBkZWZpbml0aW9uJyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIHJlZklkOiBvcHRpb25zLmFubm90YXRpb24ubmFtZSxcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByYXdTcWw6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLmFubm90YXRpb24ucmF3UXVlcnksIG9wdGlvbnMuc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgIGZvcm1hdDogJ3RhYmxlJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiBvcHRpb25zLnJhbmdlLmZyb20udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogb3B0aW9ucy5yYW5nZS50by52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFtxdWVyeV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMuYW5ub3RhdGlvbi5uYW1lLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICBhc3luYyAocmVzOiBGZXRjaFJlc3BvbnNlPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KSA9PlxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlc3BvbnNlUGFyc2VyLnRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZShvcHRpb25zLCByZXMuZGF0YSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZmlsdGVyUXVlcnkocXVlcnk6IE1zc3FsUXVlcnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXF1ZXJ5LmhpZGU7XG4gIH1cblxuICBtZXRyaWNGaW5kUXVlcnkocXVlcnk6IHN0cmluZywgb3B0aW9uYWxPcHRpb25zOiBhbnkpOiBQcm9taXNlPE1ldHJpY0ZpbmRWYWx1ZVtdPiB7XG4gICAgbGV0IHJlZklkID0gJ3RlbXB2YXInO1xuICAgIGlmIChvcHRpb25hbE9wdGlvbnMgJiYgb3B0aW9uYWxPcHRpb25zLnZhcmlhYmxlICYmIG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lKSB7XG4gICAgICByZWZJZCA9IG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmdlID0gb3B0aW9uYWxPcHRpb25zPy5yYW5nZSBhcyBUaW1lUmFuZ2U7XG5cbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRRdWVyeSA9IHtcbiAgICAgIHJlZklkOiByZWZJZCxcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByYXdTcWw6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeSwge30sIHRoaXMuaW50ZXJwb2xhdGVWYXJpYWJsZSksXG4gICAgICBmb3JtYXQ6ICd0YWJsZScsXG4gICAgfTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAgIC5mZXRjaDxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPih7XG4gICAgICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZnJvbTogcmFuZ2U/LmZyb20/LnZhbHVlT2YoKT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiByYW5nZT8udG8/LnZhbHVlT2YoKT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFtpbnRlcnBvbGF0ZWRRdWVyeV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0SWQ6IHJlZklkLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJzcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VQYXJzZXIudHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlKHJzcCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdGVzdERhdGFzb3VyY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZmV0Y2goe1xuICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZyb206ICc1bScsXG4gICAgICAgICAgICB0bzogJ25vdycsXG4gICAgICAgICAgICBxdWVyaWVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWZJZDogJ0EnLFxuICAgICAgICAgICAgICAgIGludGVydmFsTXM6IDEsXG4gICAgICAgICAgICAgICAgbWF4RGF0YVBvaW50czogMSxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgICAgICAgIHJhd1NxbDogJ1NFTEVDVCAxJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd0YWJsZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcFRvKHsgc3RhdHVzOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdEYXRhYmFzZSBDb25uZWN0aW9uIE9LJyB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZih0b1Rlc3RpbmdTdGF0dXMoZXJyKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICB0YXJnZXRDb250YWluc1RlbXBsYXRlKHF1ZXJ5OiBNc3NxbFF1ZXJ5KTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmF3U3FsID0gcXVlcnkucmF3U3FsLnJlcGxhY2UoJyRfXycsICcnKTtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5jb250YWluc1RlbXBsYXRlKHJhd1NxbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1zc3FsRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBNc3NxbFF1ZXJ5Q3RybCB9IGZyb20gJy4vcXVlcnlfY3RybCc7XG5pbXBvcnQgeyBNc3NxbENvbmZpZ0N0cmwgfSBmcm9tICcuL2NvbmZpZ19jdHJsJztcbmltcG9ydCB7IE1zc3FsUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuY29uc3QgZGVmYXVsdFF1ZXJ5ID0gYFNFTEVDVFxuICAgIDx0aW1lX2NvbHVtbj4gYXMgdGltZSxcbiAgICA8dGV4dF9jb2x1bW4+IGFzIHRleHQsXG4gICAgPHRhZ3NfY29sdW1uPiBhcyB0YWdzXG4gIEZST01cbiAgICA8dGFibGUgbmFtZT5cbiAgV0hFUkVcbiAgICAkX190aW1lRmlsdGVyKHRpbWVfY29sdW1uKVxuICBPUkRFUiBCWVxuICAgIDx0aW1lX2NvbHVtbj4gQVNDYDtcblxuY2xhc3MgTXNzcWxBbm5vdGF0aW9uc1F1ZXJ5Q3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9hbm5vdGF0aW9ucy5lZGl0b3IuaHRtbCc7XG5cbiAgZGVjbGFyZSBhbm5vdGF0aW9uOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSkge1xuICAgIHRoaXMuYW5ub3RhdGlvbiA9ICRzY29wZS5jdHJsLmFubm90YXRpb247XG4gICAgdGhpcy5hbm5vdGF0aW9uLnJhd1F1ZXJ5ID0gdGhpcy5hbm5vdGF0aW9uLnJhd1F1ZXJ5IHx8IGRlZmF1bHRRdWVyeTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW48TXNzcWxEYXRhc291cmNlLCBNc3NxbFF1ZXJ5PihNc3NxbERhdGFzb3VyY2UpXG4gIC5zZXRRdWVyeUN0cmwoTXNzcWxRdWVyeUN0cmwpXG4gIC5zZXRDb25maWdDdHJsKE1zc3FsQ29uZmlnQ3RybClcbiAgLnNldEFubm90YXRpb25RdWVyeUN0cmwoTXNzcWxBbm5vdGF0aW9uc1F1ZXJ5Q3RybCk7XG4iLCJpbXBvcnQgeyBRdWVyeUN0cmwgfSBmcm9tICdhcHAvcGx1Z2lucy9zZGsnO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgUGFuZWxFdmVudHMsIFF1ZXJ5UmVzdWx0TWV0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTXNzcWxRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBgU0VMRUNUXG4gICRfX3RpbWVFcG9jaCg8dGltZV9jb2x1bW4+KSxcbiAgPHZhbHVlIGNvbHVtbj4gYXMgdmFsdWUsXG4gIDxzZXJpZXMgbmFtZSBjb2x1bW4+IGFzIG1ldHJpY1xuRlJPTVxuICA8dGFibGUgbmFtZT5cbldIRVJFXG4gICRfX3RpbWVGaWx0ZXIodGltZV9jb2x1bW4pXG5PUkRFUiBCWVxuICA8dGltZV9jb2x1bW4+IEFTQ2A7XG5cbmV4cG9ydCBjbGFzcyBNc3NxbFF1ZXJ5Q3RybCBleHRlbmRzIFF1ZXJ5Q3RybDxNc3NxbFF1ZXJ5PiB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9xdWVyeS5lZGl0b3IuaHRtbCc7XG5cbiAgZm9ybWF0czogYW55W107XG4gIGxhc3RRdWVyeU1ldGE/OiBRdWVyeVJlc3VsdE1ldGE7XG4gIGxhc3RRdWVyeUVycm9yPzogc3RyaW5nO1xuICBzaG93SGVscCA9IGZhbHNlO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgdGhpcy50YXJnZXQuZm9ybWF0ID0gdGhpcy50YXJnZXQuZm9ybWF0IHx8ICd0aW1lX3Nlcmllcyc7XG4gICAgdGhpcy50YXJnZXQuYWxpYXMgPSAnJztcbiAgICB0aGlzLmZvcm1hdHMgPSBbXG4gICAgICB7IHRleHQ6ICdUaW1lIHNlcmllcycsIHZhbHVlOiAndGltZV9zZXJpZXMnIH0sXG4gICAgICB7IHRleHQ6ICdUYWJsZScsIHZhbHVlOiAndGFibGUnIH0sXG4gICAgXTtcblxuICAgIGlmICghdGhpcy50YXJnZXQucmF3U3FsKSB7XG4gICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIHdoZW4gaW4gdGFibGUgcGFuZWxcbiAgICAgIGlmICh0aGlzLnBhbmVsQ3RybC5wYW5lbC50eXBlID09PSAndGFibGUnKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LmZvcm1hdCA9ICd0YWJsZSc7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJhd1NxbCA9ICdTRUxFQ1QgMSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSBkZWZhdWx0UXVlcnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wYW5lbEN0cmwuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgdGhpcy5vbkRhdGFSZWNlaXZlZC5iaW5kKHRoaXMpLCAkc2NvcGUpO1xuICAgIHRoaXMucGFuZWxDdHJsLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5kYXRhRXJyb3IsIHRoaXMub25EYXRhRXJyb3IuYmluZCh0aGlzKSwgJHNjb3BlKTtcbiAgfVxuXG4gIG9uRGF0YVJlY2VpdmVkKGRhdGFMaXN0OiBhbnkpIHtcbiAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFzdFF1ZXJ5TWV0YSA9IGRhdGFMaXN0WzBdPy5tZXRhO1xuICB9XG5cbiAgb25EYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICBpZiAoZXJyLmRhdGEgJiYgZXJyLmRhdGEucmVzdWx0cykge1xuICAgICAgY29uc3QgcXVlcnlSZXMgPSBlcnIuZGF0YS5yZXN1bHRzW3RoaXMudGFyZ2V0LnJlZklkXTtcbiAgICAgIGlmIChxdWVyeVJlcykge1xuICAgICAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gcXVlcnlSZXMuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBBbm5vdGF0aW9uRXZlbnQsIERhdGFGcmFtZSwgTWV0cmljRmluZFZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlLCB0b0RhdGFRdWVyeVJlc3BvbnNlLCBGZXRjaFJlc3BvbnNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlUGFyc2VyIHtcbiAgdHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlKHJhdzogRmV0Y2hSZXNwb25zZTxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPik6IE1ldHJpY0ZpbmRWYWx1ZVtdIHtcbiAgICBjb25zdCBmcmFtZXMgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKHJhdykuZGF0YSBhcyBEYXRhRnJhbWVbXTtcblxuICAgIGlmICghZnJhbWVzIHx8ICFmcmFtZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG5cbiAgICBjb25zdCB2YWx1ZXM6IE1ldHJpY0ZpbmRWYWx1ZVtdID0gW107XG4gICAgY29uc3QgdGV4dEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ19fdGV4dCcpO1xuICAgIGNvbnN0IHZhbHVlRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnX192YWx1ZScpO1xuXG4gICAgaWYgKHRleHRGaWVsZCAmJiB2YWx1ZUZpZWxkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRGaWVsZC52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWVzLnB1c2goeyB0ZXh0OiAnJyArIHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpLCB2YWx1ZTogJycgKyB2YWx1ZUZpZWxkLnZhbHVlcy5nZXQoaSkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlcy5wdXNoKFxuICAgICAgICAuLi5mcmFtZS5maWVsZHNcbiAgICAgICAgICAuZmxhdE1hcCgoZikgPT4gZi52YWx1ZXMudG9BcnJheSgpKVxuICAgICAgICAgIC5tYXAoKHYpID0+ICh7XG4gICAgICAgICAgICB0ZXh0OiB2LFxuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHZhbHVlcy5tYXAoKHYpID0+IHYudGV4dCkpKS5tYXAoKHRleHQpID0+ICh7XG4gICAgICB0ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlcy5maW5kKCh2KSA9PiB2LnRleHQgPT09IHRleHQpPy52YWx1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyB0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2Uob3B0aW9uczogYW55LCBkYXRhOiBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlKTogUHJvbWlzZTxBbm5vdGF0aW9uRXZlbnRbXT4ge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiBkYXRhIH0pLmRhdGEgYXMgRGF0YUZyYW1lW107XG4gICAgaWYgKCFmcmFtZXMgfHwgIWZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG4gICAgY29uc3QgdGltZUZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpbWUnKTtcblxuICAgIGlmICghdGltZUZpZWxkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoeyBtZXNzYWdlOiAnTWlzc2luZyBtYW5kYXRvcnkgdGltZSBjb2x1bW4gKHdpdGggdGltZSBjb2x1bW4gYWxpYXMpIGluIGFubm90YXRpb24gcXVlcnkuJyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lRW5kRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGltZWVuZCcpO1xuICAgIGNvbnN0IHRleHRGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0ZXh0Jyk7XG4gICAgY29uc3QgdGFnc0ZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RhZ3MnKTtcblxuICAgIGNvbnN0IGxpc3Q6IEFubm90YXRpb25FdmVudFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGltZUVuZCA9IHRpbWVFbmRGaWVsZCAmJiB0aW1lRW5kRmllbGQudmFsdWVzLmdldChpKSA/IE1hdGguZmxvb3IodGltZUVuZEZpZWxkLnZhbHVlcy5nZXQoaSkpIDogdW5kZWZpbmVkO1xuICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgYW5ub3RhdGlvbjogb3B0aW9ucy5hbm5vdGF0aW9uLFxuICAgICAgICB0aW1lOiBNYXRoLmZsb29yKHRpbWVGaWVsZC52YWx1ZXMuZ2V0KGkpKSxcbiAgICAgICAgdGltZUVuZCxcbiAgICAgICAgdGV4dDogdGV4dEZpZWxkICYmIHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpID8gdGV4dEZpZWxkLnZhbHVlcy5nZXQoaSkgOiAnJyxcbiAgICAgICAgdGFnczpcbiAgICAgICAgICB0YWdzRmllbGQgJiYgdGFnc0ZpZWxkLnZhbHVlcy5nZXQoaSlcbiAgICAgICAgICAgID8gdGFnc0ZpZWxkLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5nZXQoaSlcbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgLnNwbGl0KC9cXHMqLFxccyovKVxuICAgICAgICAgICAgOiBbXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2FkUGx1Z2luQ3NzIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBQYW5lbEN0cmwgYXMgUGFuZWxDdHJsRVM2IH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvcGFuZWxfY3RybCc7XG5pbXBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIGFzIE1ldHJpY3NQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgUXVlcnlDdHJsIGFzIFF1ZXJ5Q3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3F1ZXJ5X2N0cmwnO1xuXG5jb25zdCBQYW5lbEN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFBhbmVsQ3RybEVTNik7XG5jb25zdCBNZXRyaWNzUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShNZXRyaWNzUGFuZWxDdHJsRVM2KTtcbmNvbnN0IFF1ZXJ5Q3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoUXVlcnlDdHJsRVM2KTtcblxuZXhwb3J0IHsgUGFuZWxDdHJsLCBNZXRyaWNzUGFuZWxDdHJsLCBRdWVyeUN0cmwsIGxvYWRQbHVnaW5Dc3MgfTtcbiJdLCJuYW1lcyI6WyJsb2NhdGlvblNlYXJjaFRvT2JqZWN0IiwibG9jYXRpb25TZXJ2aWNlIiwibmF2aWdhdGlvbkxvZ2dlciIsImRlcHJlY2F0aW9uV2FybmluZyIsInVybFV0aWwiLCJERUZBVUxUX1BPUlRTIiwiaHR0cCIsImh0dHBzIiwiZnRwIiwiQW5ndWxhckxvY2F0aW9uV3JhcHBlciIsImNvbnN0cnVjdG9yIiwiYWJzVXJsIiwid3JhcEluRGVwcmVjYXRpb25XYXJuaW5nIiwiaGFzaCIsImhvc3QiLCJwYXRoIiwicG9ydCIsInByb3RvY29sIiwicmVwbGFjZSIsInNlYXJjaCIsInN0YXRlIiwidXJsIiwiZm4iLCJyZXBsYWNlbWVudCIsInNlbGYiLCJ3cmFwcGVyIiwibmFtZSIsImFwcGx5IiwiYXJndW1lbnRzIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJuZXdIYXNoIiwiZ2V0TG9jYXRpb24iLCJzbGljZSIsIkVycm9yIiwiVVJMIiwiaHJlZiIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJwYXJzZWRQYXRoIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInB1c2giLCJsZW5ndGgiLCJwYXJzZUludCIsInBhcmFtVmFsdWUiLCJnZXRTZWFyY2hPYmplY3QiLCJwYXJ0aWFsIiwibmV3UXVlcnkiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwidXBkYXRlZFVybCIsInJlbmRlclVybCIsIm5ld1VybCIsInRyaW0iLCJpc0FycmF5IiwiUGFuZWxDdHJsIiwiYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMiLCJMb2FkaW5nU3RhdGUiLCJQYW5lbEV2ZW50cyIsInRvRGF0YUZyYW1lRFRPIiwidG9MZWdhY3lSZXNwb25zZURhdGEiLCJNZXRyaWNzUGFuZWxDdHJsIiwiJHNjb3BlIiwiJGluamVjdG9yIiwibmV4dCIsImRhdGEiLCJwYW5lbERhdGEiLCJsb2FkaW5nIiwicHJvY2Vzc0RhdGFFcnJvciIsImVycm9yIiwiTG9hZGluZyIsImFuZ3VsYXJEaXJ0eUNoZWNrIiwicmVxdWVzdCIsInRpbWVJbmZvIiwidGltZVJhbmdlIiwicmFuZ2UiLCJ1c2VEYXRhRnJhbWVzIiwiaGFuZGxlRGF0YUZyYW1lcyIsInNlcmllcyIsImxlZ2FjeSIsIm1hcCIsInYiLCJoYW5kbGVRdWVyeVJlc3VsdCIsImNvbnRleHRTcnYiLCJnZXQiLCJkYXRhc291cmNlU3J2IiwidGltZVNydiIsInRlbXBsYXRlU3J2IiwicGFuZWwiLCJkYXRhc291cmNlIiwiZXZlbnRzIiwib24iLCJyZWZyZXNoIiwib25NZXRyaWNzUGFuZWxSZWZyZXNoIiwiYmluZCIsInBhbmVsVGVhcmRvd24iLCJvblBhbmVsVGVhckRvd24iLCJjb21wb25lbnREaWRNb3VudCIsIm9uTWV0cmljc1BhbmVsTW91bnRlZCIsInF1ZXJ5UnVubmVyIiwiZ2V0UXVlcnlSdW5uZXIiLCJxdWVyeVN1YnNjcmlwdGlvbiIsImdldERhdGEiLCJ3aXRoVHJhbnNmb3JtcyIsIndpdGhGaWVsZENvbmZpZyIsInN1YnNjcmliZSIsInBhbmVsRGF0YU9ic2VydmVyIiwidW5zdWJzY3JpYmUiLCJvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSIsInNuYXBzaG90RGF0YSIsInVwZGF0ZVRpbWVSYW5nZSIsIkRvbmUiLCIkdGltZW91dCIsImVtaXQiLCJkYXRhU25hcHNob3RMb2FkIiwic2NvcGVkVmFycyIsInRoZW4iLCJpc3N1ZVF1ZXJpZXMiLCJjYXRjaCIsImVyciIsImNhbmNlbGxlZCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiJHJvb3QiLCIkJHBoYXNlIiwiJGRpZ2VzdCIsIm5ld1RpbWVEYXRhIiwicnVuIiwicXVlcmllcyIsInRhcmdldHMiLCJwYW5lbElkIiwiaWQiLCJkYXNoYm9hcmRJZCIsImRhc2hib2FyZCIsInRpbWV6b25lIiwiZ2V0VGltZXpvbmUiLCJtYXhEYXRhUG9pbnRzIiwid2lkdGgiLCJtaW5JbnRlcnZhbCIsImludGVydmFsIiwiY2FjaGVUaW1lb3V0IiwidHJhbnNmb3JtYXRpb25zIiwic25hcHNob3QiLCJmcmFtZSIsImRhdGFGcmFtZXNSZWNlaXZlZCIsInJlc3VsdCIsImRhdGFSZWNlaXZlZCIsImlzU3RyaW5nIiwiY29uZmlnIiwicHJvZmlsZXIiLCJFdmVudEJ1c1NydiIsInBsdWdpbiIsIiRwYXJlbnQiLCJlZGl0b3JUYWJzIiwiJGxvY2F0aW9uIiwidGltaW5nIiwicGFuZWxzIiwidHlwZSIsInBsdWdpbklkIiwicGx1Z2luTmFtZSIsIiRvbiIsInBhbmVsRGlkTW91bnQiLCJpbml0aWFsaXplZCIsInBhbmVsSW5pdGlhbGl6ZWQiLCJyZW5kZXJpbmdDb21wbGV0ZWQiLCJwdWJsaXNoQXBwRXZlbnQiLCJldmVudCIsInBheWxvYWQiLCJhcHBFdmVudCIsImluaXRFZGl0TW9kZSIsImVkaXRNb2RlSW5pdGlhdGVkIiwiZWRpdE1vZGVJbml0aWFsaXplZCIsImFkZEVkaXRvclRhYiIsInRpdGxlIiwiZGlyZWN0aXZlRm4iLCJpbmRleCIsImljb24iLCJlZGl0b3JUYWIiLCJ0ZW1wbGF0ZVVybCIsInNwbGljZSIsImdldEV4dGVuZGVkTWVudSIsIm1lbnUiLCJpbml0UGFuZWxBY3Rpb25zIiwiZ2V0QWRkaXRpb25hbE1lbnVJdGVtcyIsIm90aGVyUGFuZWxJbkZ1bGxzY3JlZW4iLCJyZW5kZXIiLCJpbmRleE9mIiwiUXVlcnlDdHJsIiwicGFuZWxDdHJsIiwiY3RybCIsInRhcmdldCIsImlzTGFzdFF1ZXJ5IiwiUGFzc3dvcmRGaWVsZEVudW0iLCJjcmVhdGVSZXNldEhhbmRsZXIiLCJmaWVsZCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNlY3VyZUpzb25GaWVsZHMiLCJzZWN1cmVKc29uRGF0YSIsImNyZWF0ZUNoYW5nZUhhbmRsZXIiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJNc3NxbENvbmZpZ0N0cmwiLCJqc29uRGF0YSIsImVuY3J5cHQiLCJzc2xSb290Q2VydEZpbGUiLCJ0bHNTa2lwVmVyaWZ5Iiwic2VydmVyTmFtZSIsImF1dGhlbnRpY2F0aW9uVHlwZSIsIm9uUGFzc3dvcmRSZXNldCIsIlBhc3N3b3JkIiwib25QYXNzd29yZENoYW5nZSIsIm9uQXV0aGVudGljYXRpb25UeXBlQ2hhbmdlIiwib25FbmNyeXB0Q2hhbmdlIiwidXNlciIsInBhc3N3b3JkIiwic2hvd1VzZXJDcmVkZW50aWFscyIsInNob3dUbHNDb25maWciLCJzaG93Q2VydGlmaWNhdGVDb25maWciLCJfbWFwIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwiY2F0Y2hFcnJvciIsIm1hcFRvIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwiZ2V0QmFja2VuZFNydiIsIlJlc3BvbnNlUGFyc2VyIiwiZ2V0VGVtcGxhdGVTcnYiLCJ0b1Rlc3RpbmdTdGF0dXMiLCJNc3NxbERhdGFzb3VyY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwicmVzcG9uc2VQYXJzZXIiLCJzZXR0aW5nc0RhdGEiLCJ0aW1lSW50ZXJ2YWwiLCJpbnRlcnBvbGF0ZVZhcmlhYmxlIiwidmFyaWFibGUiLCJtdWx0aSIsImluY2x1ZGVBbGwiLCJxdW90ZWRWYWx1ZXMiLCJ2YWwiLCJqb2luIiwiaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMiLCJleHBhbmRlZFF1ZXJpZXMiLCJxdWVyeSIsImV4cGFuZGVkUXVlcnkiLCJnZXRSZWYiLCJyYXdTcWwiLCJyYXdRdWVyeSIsImFwcGx5VGVtcGxhdGVWYXJpYWJsZXMiLCJyZWZJZCIsImZvcm1hdCIsImFubm90YXRpb25RdWVyeSIsIm9wdGlvbnMiLCJhbm5vdGF0aW9uIiwiUHJvbWlzZSIsInJlamVjdCIsImZldGNoIiwibWV0aG9kIiwiZnJvbSIsInZhbHVlT2YiLCJ0b1N0cmluZyIsInRvIiwicmVxdWVzdElkIiwicGlwZSIsInJlcyIsInRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZSIsImZpbHRlclF1ZXJ5IiwiaGlkZSIsIm1ldHJpY0ZpbmRRdWVyeSIsIm9wdGlvbmFsT3B0aW9ucyIsImludGVycG9sYXRlZFF1ZXJ5IiwicnNwIiwidHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlIiwidGVzdERhdGFzb3VyY2UiLCJpbnRlcnZhbE1zIiwic3RhdHVzIiwidGFyZ2V0Q29udGFpbnNUZW1wbGF0ZSIsImNvbnRhaW5zVGVtcGxhdGUiLCJNc3NxbFF1ZXJ5Q3RybCIsIkRhdGFTb3VyY2VQbHVnaW4iLCJkZWZhdWx0UXVlcnkiLCJNc3NxbEFubm90YXRpb25zUXVlcnlDdHJsIiwic2V0UXVlcnlDdHJsIiwic2V0Q29uZmlnQ3RybCIsInNldEFubm90YXRpb25RdWVyeUN0cmwiLCJhbGlhcyIsImZvcm1hdHMiLCJ0ZXh0Iiwib25EYXRhUmVjZWl2ZWQiLCJkYXRhRXJyb3IiLCJvbkRhdGFFcnJvciIsImRhdGFMaXN0IiwibGFzdFF1ZXJ5RXJyb3IiLCJsYXN0UXVlcnlNZXRhIiwibWV0YSIsInJlc3VsdHMiLCJxdWVyeVJlcyIsInRvRGF0YVF1ZXJ5UmVzcG9uc2UiLCJyYXciLCJmcmFtZXMiLCJ2YWx1ZXMiLCJ0ZXh0RmllbGQiLCJmaWVsZHMiLCJmaW5kIiwiZiIsInZhbHVlRmllbGQiLCJpIiwiZmxhdE1hcCIsInRvQXJyYXkiLCJBcnJheSIsIlNldCIsInRpbWVGaWVsZCIsInRpbWVFbmRGaWVsZCIsInRhZ3NGaWVsZCIsImxpc3QiLCJ0aW1lRW5kIiwiTWF0aCIsImZsb29yIiwidGltZSIsInRhZ3MiLCJzcGxpdCIsIm1ha2VDbGFzc0VTNUNvbXBhdGlibGUiLCJsb2FkUGx1Z2luQ3NzIiwiUGFuZWxDdHJsRVM2IiwiTWV0cmljc1BhbmVsQ3RybEVTNiIsIlF1ZXJ5Q3RybEVTNiJdLCJzb3VyY2VSb290IjoiIn0=
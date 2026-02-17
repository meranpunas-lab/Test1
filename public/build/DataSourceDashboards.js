"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DataSourceDashboards"],{

/***/ "./public/app/features/admin/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightTrial": () => (/* binding */ highlightTrial),
/* harmony export */   "isTrial": () => (/* binding */ isTrial)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function isTrial() {
  var _config$licenseInfo;

  const expiry = (_config$licenseInfo = _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.licenseInfo) === null || _config$licenseInfo === void 0 ? void 0 : _config$licenseInfo.trialExpiry;
  return !!(expiry && expiry > 0);
}
const highlightTrial = () => isTrial() && _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.featureHighlights;

/***/ }),

/***/ "./public/app/features/datasources/DashboardsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;






const DashboardsTable = ({
  dashboards,
  onImport,
  onRemove
}) => {
  function buttonText(dashboard) {
    return dashboard.revision !== dashboard.importedRevision ? 'Update' : 'Re-import';
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
    className: "filter-table",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
      children: dashboards.map((dashboard, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [_td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            className: "width-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              name: "apps"
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: dashboard.imported ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: dashboard.importedUrl,
              children: dashboard.title
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: dashboard.title
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("td", {
            style: {
              textAlign: 'right'
            },
            children: [!dashboard.imported ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, false),
              children: "Import"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, true),
              children: buttonText(dashboard)
            }), dashboard.imported && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              icon: "trash-alt",
              variant: "destructive",
              size: "sm",
              onClick: () => onRemove(dashboard)
            })]
          })]
        }, `${dashboard.dashboardId}-${index}`);
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardsTable);

/***/ }),

/***/ "./public/app/features/datasources/DataSourceDashboards.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourceDashboards": () => (/* binding */ DataSourceDashboards),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _DashboardsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/datasources/DashboardsTable.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries

 // Components


 // Actions & Selectors





 // Types



function mapStateToProps(state, props) {
  const dataSourceId = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, `datasource-dashboards-${dataSourceId}`),
    dashboards: state.plugins.dashboards,
    dataSource: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_8__.getDataSource)(state.dataSources, dataSourceId),
    isLoading: state.plugins.isLoadingPluginDashboards,
    dataSourceId
  };
}

const mapDispatchToProps = {
  importDashboard: _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_7__.importDashboard,
  loadDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_5__.loadDataSource,
  loadPluginDashboards: _plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_6__.loadPluginDashboards,
  removeDashboard: _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_7__.removeDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class DataSourceDashboards extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onImport", (dashboard, overwrite) => {
      const {
        dataSource,
        importDashboard
      } = this.props;
      const data = {
        pluginId: dashboard.pluginId,
        path: dashboard.path,
        overwrite,
        inputs: []
      };

      if (dataSource) {
        data.inputs.push({
          name: '*',
          type: 'datasource',
          pluginId: dataSource.type,
          value: dataSource.name
        });
      }

      importDashboard(data, dashboard.title);
    });

    _defineProperty(this, "onRemove", dashboard => {
      this.props.removeDashboard(dashboard.uid);
    });
  }

  async componentDidMount() {
    const {
      loadDataSource,
      dataSourceId
    } = this.props;
    await loadDataSource(dataSourceId);
    this.props.loadPluginDashboards();
  }

  render() {
    const {
      dashboards,
      navModel,
      isLoading
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
        isLoading: isLoading,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_DashboardsTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
          dashboards: dashboards,
          onImport: (dashboard, overwrite) => this.onImport(dashboard, overwrite),
          onRemove: dashboard => this.onRemove(dashboard)
        })
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourceDashboards));

/***/ }),

/***/ "./public/app/features/datasources/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDataSource": () => (/* binding */ addDataSource),
/* harmony export */   "deleteDataSource": () => (/* binding */ deleteDataSource),
/* harmony export */   "findNewName": () => (/* binding */ findNewName),
/* harmony export */   "getDataSourceUsingUidOrId": () => (/* binding */ getDataSourceUsingUidOrId),
/* harmony export */   "initDataSourceSettings": () => (/* binding */ initDataSourceSettings),
/* harmony export */   "loadDataSource": () => (/* binding */ loadDataSource),
/* harmony export */   "loadDataSourceMeta": () => (/* binding */ loadDataSourceMeta),
/* harmony export */   "loadDataSourcePlugins": () => (/* binding */ loadDataSourcePlugins),
/* harmony export */   "loadDataSources": () => (/* binding */ loadDataSources),
/* harmony export */   "nameExits": () => (/* binding */ nameExits),
/* harmony export */   "testDataSource": () => (/* binding */ testDataSource),
/* harmony export */   "updateDataSource": () => (/* binding */ updateDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_features_plugins_plugin_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");
/* harmony import */ var app_features_plugins_pluginSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/pluginSettings.ts");
/* harmony import */ var _buildCategories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/datasources/state/buildCategories.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/services/context_srv.ts");














const initDataSourceSettings = (pageId, dependencies = {
  loadDataSource,
  loadDataSourceMeta,
  getDataSource: _selectors__WEBPACK_IMPORTED_MODULE_10__.getDataSource,
  getDataSourceMeta: _selectors__WEBPACK_IMPORTED_MODULE_10__.getDataSourceMeta,
  importDataSourcePlugin: app_features_plugins_plugin_loader__WEBPACK_IMPORTED_MODULE_5__.importDataSourcePlugin
}) => {
  return async (dispatch, getState) => {
    if (!pageId) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.initDataSourceSettingsFailed)(new Error('Invalid ID')));
      return;
    }

    try {
      const loadedDataSource = await dispatch(dependencies.loadDataSource(pageId));
      await dispatch(dependencies.loadDataSourceMeta(loadedDataSource)); // have we already loaded the plugin then we can skip the steps below?

      if (getState().dataSourceSettings.plugin) {
        return;
      }

      const dataSource = dependencies.getDataSource(getState().dataSources, pageId);
      const dataSourceMeta = dependencies.getDataSourceMeta(getState().dataSources, dataSource.type);
      const importedPlugin = await dependencies.importDataSourcePlugin(dataSourceMeta);
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.initDataSourceSettingsSucceeded)(importedPlugin));
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.initDataSourceSettingsFailed)(err));
    }
  };
};
const testDataSource = (dataSourceName, dependencies = {
  getDatasourceSrv: app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv,
  getBackendSrv: app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv
}) => {
  return async (dispatch, getState) => {
    const dsApi = await dependencies.getDatasourceSrv().get(dataSourceName);

    if (!dsApi.testDatasource) {
      return;
    }

    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.testDataSourceStarting)());
    dependencies.getBackendSrv().withNoBackendCache(async () => {
      try {
        const result = await dsApi.testDatasource();
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.testDataSourceSucceeded)(result));
      } catch (err) {
        const {
          statusText,
          message: errMessage,
          details,
          data
        } = err;
        const message = errMessage || (data === null || data === void 0 ? void 0 : data.message) || 'HTTP error ' + statusText;
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.testDataSourceFailed)({
          message,
          details
        }));
      }
    });
  };
};
function loadDataSources() {
  return async dispatch => {
    const response = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get('/api/datasources');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.dataSourcesLoaded)(response));
  };
}
function loadDataSource(uid) {
  return async dispatch => {
    const dataSource = await getDataSourceUsingUidOrId(uid);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.dataSourceLoaded)(dataSource));
    return dataSource;
  };
}
function loadDataSourceMeta(dataSource) {
  return async dispatch => {
    const pluginInfo = await (0,app_features_plugins_pluginSettings__WEBPACK_IMPORTED_MODULE_6__.getPluginSettings)(dataSource.type);
    const plugin = await (0,app_features_plugins_plugin_loader__WEBPACK_IMPORTED_MODULE_5__.importDataSourcePlugin)(pluginInfo);
    const isBackend = plugin.DataSourceClass.prototype instanceof _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend;
    const meta = Object.assign({}, pluginInfo, {
      isBackend: pluginInfo.backend || isBackend
    });
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.dataSourceMetaLoaded)(meta));
    plugin.meta = meta;
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_8__.buildNavModel)(dataSource, plugin)));
  };
}
/**
 * Get data source by uid or id, if old id detected handles redirect
 */

async function getDataSourceUsingUidOrId(uid) {
  // Try first with uid api
  try {
    const byUid = await (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.lastValueFrom)((0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch({
      method: 'GET',
      url: `/api/datasources/uid/${uid}`,
      params: (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_11__.accessControlQueryParam)(),
      showErrorAlert: false
    }));

    if (byUid.ok) {
      return byUid.data;
    }
  } catch (err) {
    console.log('Failed to lookup data source by uid', err);
  } // try lookup by old db id


  const id = typeof uid === 'string' ? parseInt(uid, 10) : uid;

  if (!Number.isNaN(id)) {
    const response = await (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.lastValueFrom)((0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch({
      method: 'GET',
      url: `/api/datasources/${id}`,
      params: (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_11__.accessControlQueryParam)(),
      showErrorAlert: false
    })); // If the uid is a number, then this is a refresh on one of the settings tabs
    // and we can return the response data

    if (response.ok && typeof uid === 'number' && response.data.id === uid) {
      return response.data;
    } // Not ideal to do a full page reload here but so tricky to handle this
    // otherwise We can update the location using react router, but need to
    // fully reload the route as the nav model page index is not matching with
    // the url in that case. And react router has no way to unmount remount a
    // route


    if (response.ok && response.data.id.toString() === uid) {
      window.location.href = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.assureBaseUrl(`/datasources/edit/${response.data.uid}`);
      return {}; // avoids flashing an error
    }
  }

  throw Error('Could not find data source');
}
function addDataSource(plugin) {
  return async (dispatch, getStore) => {
    await dispatch(loadDataSources());
    const dataSources = getStore().dataSources.dataSources;
    const newInstance = {
      name: plugin.name,
      type: plugin.id,
      access: 'proxy',
      isDefault: dataSources.length === 0
    };

    if (nameExits(dataSources, newInstance.name)) {
      newInstance.name = findNewName(dataSources, newInstance.name);
    }

    const result = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/datasources', newInstance);
    await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)().reload();
    await _core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.fetchUserPermissions();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(`/datasources/edit/${result.datasource.uid}`);
  };
}
function loadDataSourcePlugins() {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.dataSourcePluginsLoad)());
    const plugins = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get('/api/plugins', {
      enabled: 1,
      type: 'datasource'
    });
    const categories = (0,_buildCategories__WEBPACK_IMPORTED_MODULE_7__.buildCategories)(plugins);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_9__.dataSourcePluginsLoaded)({
      plugins,
      categories
    }));
  };
}
function updateDataSource(dataSource) {
  return async dispatch => {
    await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().put(`/api/datasources/${dataSource.id}`, dataSource); // by UID not yet supported

    await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)().reload();
    return dispatch(loadDataSource(dataSource.uid));
  };
}
function deleteDataSource() {
  return async (dispatch, getStore) => {
    const dataSource = getStore().dataSources.dataSource;
    await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().delete(`/api/datasources/${dataSource.id}`);
    await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)().reload();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push('/datasources');
  };
}
function nameExits(dataSources, name) {
  return dataSources.filter(dataSource => {
    return dataSource.name.toLowerCase() === name.toLowerCase();
  }).length > 0;
}
function findNewName(dataSources, name) {
  // Need to loop through current data sources to make sure
  // the name doesn't exist
  while (nameExits(dataSources, name)) {
    // If there's a duplicate name that doesn't end with '-x'
    // we can add -1 to the name and be done.
    if (!nameHasSuffix(name)) {
      name = `${name}-1`;
    } else {
      // if there's a duplicate name that ends with '-x'
      // we can try to increment the last digit until the name is unique
      // remove the 'x' part and replace it with the new number
      name = `${getNewName(name)}${incrementLastDigit(getLastDigit(name))}`;
    }
  }

  return name;
}

function nameHasSuffix(name) {
  return name.endsWith('-', name.length - 1);
}

function getLastDigit(name) {
  return parseInt(name.slice(-1), 10);
}

function incrementLastDigit(digit) {
  return isNaN(digit) ? 1 : digit + 1;
}

function getNewName(name) {
  return name.slice(0, name.length - 1);
}

/***/ }),

/***/ "./public/app/features/datasources/state/buildCategories.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildCategories": () => (/* binding */ buildCategories)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


function buildCategories(plugins) {
  const categories = [{
    id: 'tsdb',
    title: 'Time series databases',
    plugins: []
  }, {
    id: 'logging',
    title: 'Logging & document databases',
    plugins: []
  }, {
    id: 'tracing',
    title: 'Distributed tracing',
    plugins: []
  }, {
    id: 'sql',
    title: 'SQL',
    plugins: []
  }, {
    id: 'cloud',
    title: 'Cloud',
    plugins: []
  }, {
    id: 'enterprise',
    title: 'Enterprise plugins',
    plugins: []
  }, {
    id: 'iot',
    title: 'Industrial & IoT',
    plugins: []
  }, {
    id: 'other',
    title: 'Others',
    plugins: []
  }].filter(item => item);
  const categoryIndex = {};
  const pluginIndex = {};
  const enterprisePlugins = getEnterprisePhantomPlugins(); // build indices

  for (const category of categories) {
    categoryIndex[category.id] = category;
  }

  for (const plugin of plugins) {
    const enterprisePlugin = enterprisePlugins.find(item => item.id === plugin.id); // Force category for enterprise plugins

    if (plugin.enterprise || enterprisePlugin) {
      var _enterprisePlugin$inf;

      plugin.category = 'enterprise';
      plugin.unlicensed = !(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('enterprise.plugins');
      plugin.info.links = (enterprisePlugin === null || enterprisePlugin === void 0 ? void 0 : (_enterprisePlugin$inf = enterprisePlugin.info) === null || _enterprisePlugin$inf === void 0 ? void 0 : _enterprisePlugin$inf.links) || plugin.info.links;
    } // Fix link name


    if (plugin.info.links) {
      for (const link of plugin.info.links) {
        link.name = 'Learn more';
      }
    }

    const category = categories.find(item => item.id === plugin.category) || categoryIndex['other'];
    category.plugins.push(plugin); // add to plugin index

    pluginIndex[plugin.id] = plugin;
  }

  for (const category of categories) {
    // add phantom plugin
    if (category.id === 'cloud') {
      category.plugins.push(getGrafanaCloudPhantomPlugin());
    } // add phantom plugins


    if (category.id === 'enterprise') {
      for (const plugin of enterprisePlugins) {
        if (!pluginIndex[plugin.id]) {
          category.plugins.push(plugin);
        }
      }
    }

    sortPlugins(category.plugins);
  } // Only show categories with plugins


  return categories.filter(c => c.plugins.length > 0);
}

function sortPlugins(plugins) {
  const sortingRules = {
    prometheus: 100,
    graphite: 95,
    loki: 90,
    mysql: 80,
    jaeger: 100,
    postgres: 79,
    gcloud: -1
  };
  plugins.sort((a, b) => {
    const aSort = sortingRules[a.id] || 0;
    const bSort = sortingRules[b.id] || 0;

    if (aSort > bSort) {
      return -1;
    }

    if (aSort < bSort) {
      return 1;
    }

    return a.name > b.name ? -1 : 1;
  });
}

function getEnterprisePhantomPlugins() {
  return [getPhantomPlugin({
    id: 'grafana-splunk-datasource',
    name: 'Splunk',
    description: 'Visualize and explore Splunk logs',
    imgUrl: 'public/img/plugins/splunk_logo_128.png'
  }), getPhantomPlugin({
    id: 'grafana-oracle-datasource',
    name: 'Oracle',
    description: 'Visualize and explore Oracle SQL',
    imgUrl: 'public/img/plugins/oracle.png'
  }), getPhantomPlugin({
    id: 'grafana-dynatrace-datasource',
    name: 'Dynatrace',
    description: 'Visualize and explore Dynatrace data',
    imgUrl: 'public/img/plugins/dynatrace.png'
  }), getPhantomPlugin({
    id: 'grafana-servicenow-datasource',
    description: 'ServiceNow integration and data source',
    name: 'ServiceNow',
    imgUrl: 'public/img/plugins/servicenow.svg'
  }), getPhantomPlugin({
    id: 'grafana-datadog-datasource',
    description: 'DataDog integration and data source',
    name: 'DataDog',
    imgUrl: 'public/img/plugins/datadog.png'
  }), getPhantomPlugin({
    id: 'grafana-newrelic-datasource',
    description: 'New Relic integration and data source',
    name: 'New Relic',
    imgUrl: 'public/img/plugins/newrelic.svg'
  }), getPhantomPlugin({
    id: 'grafana-mongodb-datasource',
    description: 'MongoDB integration and data source',
    name: 'MongoDB',
    imgUrl: 'public/img/plugins/mongodb.svg'
  }), getPhantomPlugin({
    id: 'grafana-snowflake-datasource',
    description: 'Snowflake integration and data source',
    name: 'Snowflake',
    imgUrl: 'public/img/plugins/snowflake.svg'
  }), getPhantomPlugin({
    id: 'grafana-wavefront-datasource',
    description: 'Wavefront integration and data source',
    name: 'Wavefront',
    imgUrl: 'public/img/plugins/wavefront.svg'
  }), getPhantomPlugin({
    id: 'dlopes7-appdynamics-datasource',
    description: 'AppDynamics integration and data source',
    name: 'AppDynamics',
    imgUrl: 'public/img/plugins/appdynamics.svg'
  }), getPhantomPlugin({
    id: 'grafana-saphana-datasource',
    description: 'SAP HANA® integration and data source',
    name: 'SAP HANA®',
    imgUrl: 'public/img/plugins/sap_hana.png'
  }), getPhantomPlugin({
    id: 'grafana-honeycomb-datasource',
    description: 'Honeycomb integration and datasource',
    name: 'Honeycomb',
    imgUrl: 'public/img/plugins/honeycomb.png'
  }), getPhantomPlugin({
    id: 'grafana-salesforce-datasource',
    description: 'Salesforce integration and datasource',
    name: 'Salesforce',
    imgUrl: 'public/img/plugins/salesforce.svg'
  }), getPhantomPlugin({
    id: 'grafana-jira-datasource',
    description: 'Jira integration and datasource',
    name: 'Jira',
    imgUrl: 'public/img/plugins/jira_logo.png'
  }), getPhantomPlugin({
    id: 'grafana-gitlab-datasource',
    description: 'GitLab integration and datasource',
    name: 'GitLab',
    imgUrl: 'public/img/plugins/gitlab.svg'
  }), getPhantomPlugin({
    id: 'grafana-splunk-monitoring-datasource',
    description: 'SignalFx integration and datasource',
    name: 'Splunk Infrastructure Monitoring',
    imgUrl: 'public/img/plugins/signalfx-logo.svg'
  })];
}

function getGrafanaCloudPhantomPlugin() {
  return {
    id: 'gcloud',
    name: 'Grafana Cloud',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource,
    module: 'phantom',
    baseUrl: '',
    info: {
      description: 'Hosted Graphite, Prometheus, and Loki',
      logos: {
        small: 'public/img/grafana_icon.svg',
        large: 'asd'
      },
      author: {
        name: 'Grafana Labs'
      },
      links: [{
        url: 'https://grafana.com/products/cloud/',
        name: 'Learn more'
      }],
      screenshots: [],
      updated: '2019-05-10',
      version: '1.0.0'
    }
  };
}

function getPhantomPlugin(options) {
  return {
    id: options.id,
    name: options.name,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource,
    module: 'phantom',
    baseUrl: '',
    info: {
      description: options.description,
      logos: {
        small: options.imgUrl,
        large: options.imgUrl
      },
      author: {
        name: 'Grafana Labs'
      },
      links: [{
        url: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.pluginCatalogURL + options.id,
        name: 'Install now'
      }],
      screenshots: [],
      updated: '2019-05-10',
      version: '1.0.0'
    }
  };
}

/***/ }),

/***/ "./public/app/features/datasources/state/navModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildNavModel": () => (/* binding */ buildNavModel),
/* harmony export */   "getDataSourceLoadingNav": () => (/* binding */ getDataSourceLoadingNav),
/* harmony export */   "getDataSourceNav": () => (/* binding */ getDataSourceNav)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Upgrade/ProBadge.tsx");
/* harmony import */ var _admin_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/utils.ts");







const loadingDSType = 'Loading';
function buildNavModel(dataSource, plugin) {
  const pluginMeta = plugin.meta;
  const highlightsEnabled = app_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].featureToggles.featureHighlights;
  const navModel = {
    img: pluginMeta.info.logos.large,
    id: 'datasource-' + dataSource.uid,
    subTitle: `Type: ${pluginMeta.name}`,
    url: '',
    text: dataSource.name,
    breadcrumbs: [{
      title: 'Data Sources',
      url: 'datasources'
    }],
    children: [{
      active: false,
      icon: 'sliders-v-alt',
      id: `datasource-settings-${dataSource.uid}`,
      text: 'Settings',
      url: `datasources/edit/${dataSource.uid}/`
    }]
  };

  if (plugin.configPages) {
    for (const page of plugin.configPages) {
      navModel.children.push({
        active: false,
        text: page.title,
        icon: page.icon,
        url: `datasources/edit/${dataSource.uid}/?page=${page.id}`,
        id: `datasource-page-${page.id}`
      });
    }
  }

  if (pluginMeta.includes && hasDashboards(pluginMeta.includes) && app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasRole('Admin')) {
    navModel.children.push({
      active: false,
      icon: 'apps',
      id: `datasource-dashboards-${dataSource.uid}`,
      text: 'Dashboards',
      url: `datasources/edit/${dataSource.uid}/dashboards`
    });
  }

  const isLoadingNav = dataSource.type === loadingDSType;
  const permissionsExperimentId = 'feature-highlights-data-source-permissions-badge';
  const dsPermissions = {
    active: false,
    icon: 'lock',
    id: `datasource-permissions-${dataSource.uid}`,
    text: 'Permissions',
    url: `datasources/edit/${dataSource.uid}/permissions`
  };

  if ((0,_admin_utils__WEBPACK_IMPORTED_MODULE_6__.highlightTrial)() && !isLoadingNav) {
    dsPermissions.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_5__.ProBadge)({
      experimentId: permissionsExperimentId,
      eventVariant: 'trial'
    });
  }

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('dspermissions')) {
    if (app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.DataSourcesPermissionsRead)) {
      navModel.children.push(dsPermissions);
    }
  } else if (highlightsEnabled && !isLoadingNav) {
    navModel.children.push(Object.assign({}, dsPermissions, {
      url: dsPermissions.url + '/upgrade',
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_5__.ProBadge)({
        experimentId: permissionsExperimentId
      })
    }));
  }

  const analyticsExperimentId = 'feature-highlights-data-source-insights-badge';
  const analytics = {
    active: false,
    icon: 'info-circle',
    id: `datasource-insights-${dataSource.uid}`,
    text: 'Insights',
    url: `datasources/edit/${dataSource.uid}/insights`
  };

  if ((0,_admin_utils__WEBPACK_IMPORTED_MODULE_6__.highlightTrial)() && !isLoadingNav) {
    analytics.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_5__.ProBadge)({
      experimentId: analyticsExperimentId,
      eventVariant: 'trial'
    });
  }

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('analytics')) {
    navModel.children.push(analytics);
  } else if (highlightsEnabled && !isLoadingNav) {
    navModel.children.push(Object.assign({}, analytics, {
      url: analytics.url + '/upgrade',
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_5__.ProBadge)({
        experimentId: analyticsExperimentId
      })
    }));
  }

  const cachingExperimentId = 'feature-highlights-query-caching-badge';
  const caching = {
    active: false,
    icon: 'database',
    id: `datasource-cache-${dataSource.uid}`,
    text: 'Cache',
    url: `datasources/edit/${dataSource.uid}/cache`,
    hideFromTabs: !pluginMeta.isBackend || !app_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].caching.enabled
  };

  if ((0,_admin_utils__WEBPACK_IMPORTED_MODULE_6__.highlightTrial)() && !isLoadingNav) {
    caching.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_5__.ProBadge)({
      experimentId: cachingExperimentId,
      eventVariant: 'trial'
    });
  }

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('caching')) {
    navModel.children.push(caching);
  } else if (highlightsEnabled && !isLoadingNav) {
    navModel.children.push(Object.assign({}, caching, {
      url: caching.url + '/upgrade',
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_5__.ProBadge)({
        experimentId: cachingExperimentId
      })
    }));
  }

  return navModel;
}
function getDataSourceNav(main, pageName) {
  let node = {
    text: ''
  }; // find active page

  for (const child of main.children) {
    if (child.id.indexOf(pageName) > 0) {
      child.active = true;
      node = child;
      break;
    }
  }

  return {
    main: main,
    node: node
  };
}
function getDataSourceLoadingNav(pageName) {
  const main = buildNavModel({
    access: '',
    basicAuth: false,
    basicAuthUser: '',
    basicAuthPassword: '',
    withCredentials: false,
    database: '',
    id: 1,
    uid: 'x',
    isDefault: false,
    jsonData: {
      authType: 'credentials',
      defaultRegion: 'eu-west-2'
    },
    name: 'Loading',
    orgId: 1,
    password: '',
    readOnly: false,
    type: loadingDSType,
    typeName: loadingDSType,
    typeLogoUrl: 'public/img/icn-datasource.svg',
    url: '',
    user: '',
    secureJsonFields: {}
  }, {
    meta: {
      id: '1',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource,
      name: '',
      info: {
        author: {
          name: '',
          url: ''
        },
        description: '',
        links: [{
          name: '',
          url: ''
        }],
        logos: {
          large: '',
          small: ''
        },
        screenshots: [],
        updated: '',
        version: ''
      },
      includes: [],
      module: '',
      baseUrl: ''
    }
  });
  return getDataSourceNav(main, pageName);
}

function hasDashboards(includes) {
  return includes.find(include => {
    return include.type === 'dashboard';
  }) !== undefined;
}

/***/ }),

/***/ "./public/app/features/datasources/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataSource": () => (/* binding */ getDataSource),
/* harmony export */   "getDataSourceMeta": () => (/* binding */ getDataSourceMeta),
/* harmony export */   "getDataSourcePlugins": () => (/* binding */ getDataSourcePlugins),
/* harmony export */   "getDataSources": () => (/* binding */ getDataSources),
/* harmony export */   "getDataSourcesCount": () => (/* binding */ getDataSourcesCount),
/* harmony export */   "getDataSourcesLayoutMode": () => (/* binding */ getDataSourcesLayoutMode),
/* harmony export */   "getDataSourcesSearchQuery": () => (/* binding */ getDataSourcesSearchQuery)
/* harmony export */ });
const getDataSources = state => {
  const regex = new RegExp(state.searchQuery, 'i');
  return state.dataSources.filter(dataSource => {
    return regex.test(dataSource.name) || regex.test(dataSource.database) || regex.test(dataSource.type);
  });
};
const getDataSourcePlugins = state => {
  const regex = new RegExp(state.dataSourceTypeSearchQuery, 'i');
  return state.plugins.filter(type => {
    return regex.test(type.name);
  });
};
const getDataSource = (state, dataSourceId) => {
  if (state.dataSource.uid === dataSourceId) {
    return state.dataSource;
  }

  return {};
};
const getDataSourceMeta = (state, type) => {
  if (state.dataSourceMeta.id === type) {
    return state.dataSourceMeta;
  }

  return {};
};
const getDataSourcesSearchQuery = state => state.searchQuery;
const getDataSourcesLayoutMode = state => state.layoutMode;
const getDataSourcesCount = state => state.dataSourcesCount;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQWhDLEVBQXNDO0FBQ3BDLFdBQU92QixLQUFLLENBQUM2RCxjQUFiO0FBQ0Q7O0FBRUQsU0FBTyxFQUFQO0FBQ0QsQ0FOTTtBQVFBLE1BQU04Syx5QkFBeUIsR0FBSTNPLEtBQUQsSUFBNkJBLEtBQUssQ0FBQ3VPLFdBQXJFO0FBQ0EsTUFBTUssd0JBQXdCLEdBQUk1TyxLQUFELElBQTZCQSxLQUFLLENBQUM2TyxVQUFwRTtBQUNBLE1BQU1DLG1CQUFtQixHQUFJOU8sS0FBRCxJQUE2QkEsS0FBSyxDQUFDK08sZ0JBQS9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvRGFzaGJvYXJkc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9EYXRhU291cmNlRGFzaGJvYXJkcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9idWlsZENhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvc2VsZWN0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJpYWwoKSB7XG4gIGNvbnN0IGV4cGlyeSA9IGNvbmZpZy5saWNlbnNlSW5mbz8udHJpYWxFeHBpcnk7XG4gIHJldHVybiAhIShleHBpcnkgJiYgZXhwaXJ5ID4gMCk7XG59XG5cbmV4cG9ydCBjb25zdCBoaWdobGlnaHRUcmlhbCA9ICgpID0+IGlzVHJpYWwoKSAmJiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQbHVnaW5EYXNoYm9hcmQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24sIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBkYXNoYm9hcmRzOiBQbHVnaW5EYXNoYm9hcmRbXTtcbiAgb25JbXBvcnQ6IChkYXNoYm9hcmQ6IFBsdWdpbkRhc2hib2FyZCwgb3ZlcndyaXRlOiBib29sZWFuKSA9PiB2b2lkO1xuICBvblJlbW92ZTogKGRhc2hib2FyZDogUGx1Z2luRGFzaGJvYXJkKSA9PiB2b2lkO1xufVxuXG5jb25zdCBEYXNoYm9hcmRzVGFibGU6IEZDPFByb3BzPiA9ICh7IGRhc2hib2FyZHMsIG9uSW1wb3J0LCBvblJlbW92ZSB9KSA9PiB7XG4gIGZ1bmN0aW9uIGJ1dHRvblRleHQoZGFzaGJvYXJkOiBQbHVnaW5EYXNoYm9hcmQpIHtcbiAgICByZXR1cm4gZGFzaGJvYXJkLnJldmlzaW9uICE9PSBkYXNoYm9hcmQuaW1wb3J0ZWRSZXZpc2lvbiA/ICdVcGRhdGUnIDogJ1JlLWltcG9ydCc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVcIj5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2Rhc2hib2FyZHMubWFwKChkYXNoYm9hcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9e2Ake2Rhc2hib2FyZC5kYXNoYm9hcmRJZH0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTFcIj5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYXBwc1wiIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7ZGFzaGJvYXJkLmltcG9ydGVkID8gKFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZGFzaGJvYXJkLmltcG9ydGVkVXJsfT57ZGFzaGJvYXJkLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2Rhc2hib2FyZC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICB7IWRhc2hib2FyZC5pbXBvcnRlZCA/IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IG9uSW1wb3J0KGRhc2hib2FyZCwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgSW1wb3J0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gb25JbXBvcnQoZGFzaGJvYXJkLCB0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0KGRhc2hib2FyZCl9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtkYXNoYm9hcmQuaW1wb3J0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwidHJhc2gtYWx0XCIgdmFyaWFudD1cImRlc3RydWN0aXZlXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gb25SZW1vdmUoZGFzaGJvYXJkKX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZHNUYWJsZTtcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IERhc2hib2FyZFRhYmxlIGZyb20gJy4vRGFzaGJvYXJkc1RhYmxlJztcblxuLy8gQWN0aW9ucyAmIFNlbGVjdG9yc1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgbG9hZERhdGFTb3VyY2UgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgbG9hZFBsdWdpbkRhc2hib2FyZHMgfSBmcm9tICcuLi9wbHVnaW5zL2FkbWluL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgaW1wb3J0RGFzaGJvYXJkLCByZW1vdmVEYXNoYm9hcmQgfSBmcm9tICcuLi9kYXNoYm9hcmQvc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUGx1Z2luRGFzaGJvYXJkLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IHVpZDogc3RyaW5nIH0+IHt9XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSwgcHJvcHM6IE93blByb3BzKSB7XG4gIGNvbnN0IGRhdGFTb3VyY2VJZCA9IHByb3BzLm1hdGNoLnBhcmFtcy51aWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsIGBkYXRhc291cmNlLWRhc2hib2FyZHMtJHtkYXRhU291cmNlSWR9YCksXG4gICAgZGFzaGJvYXJkczogc3RhdGUucGx1Z2lucy5kYXNoYm9hcmRzLFxuICAgIGRhdGFTb3VyY2U6IGdldERhdGFTb3VyY2Uoc3RhdGUuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2VJZCksXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5wbHVnaW5zLmlzTG9hZGluZ1BsdWdpbkRhc2hib2FyZHMsXG4gICAgZGF0YVNvdXJjZUlkLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGltcG9ydERhc2hib2FyZCxcbiAgbG9hZERhdGFTb3VyY2UsXG4gIGxvYWRQbHVnaW5EYXNoYm9hcmRzLFxuICByZW1vdmVEYXNoYm9hcmQsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZURhc2hib2FyZHMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbG9hZERhdGFTb3VyY2UsIGRhdGFTb3VyY2VJZCB9ID0gdGhpcy5wcm9wcztcbiAgICBhd2FpdCBsb2FkRGF0YVNvdXJjZShkYXRhU291cmNlSWQpO1xuICAgIHRoaXMucHJvcHMubG9hZFBsdWdpbkRhc2hib2FyZHMoKTtcbiAgfVxuXG4gIG9uSW1wb3J0ID0gKGRhc2hib2FyZDogUGx1Z2luRGFzaGJvYXJkLCBvdmVyd3JpdGU6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGltcG9ydERhc2hib2FyZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBwbHVnaW5JZDogZGFzaGJvYXJkLnBsdWdpbklkLFxuICAgICAgcGF0aDogZGFzaGJvYXJkLnBhdGgsXG4gICAgICBvdmVyd3JpdGUsXG4gICAgICBpbnB1dHM6IFtdLFxuICAgIH07XG5cbiAgICBpZiAoZGF0YVNvdXJjZSkge1xuICAgICAgZGF0YS5pbnB1dHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICcqJyxcbiAgICAgICAgdHlwZTogJ2RhdGFzb3VyY2UnLFxuICAgICAgICBwbHVnaW5JZDogZGF0YVNvdXJjZS50eXBlLFxuICAgICAgICB2YWx1ZTogZGF0YVNvdXJjZS5uYW1lLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW1wb3J0RGFzaGJvYXJkKGRhdGEsIGRhc2hib2FyZC50aXRsZSk7XG4gIH07XG5cbiAgb25SZW1vdmUgPSAoZGFzaGJvYXJkOiBQbHVnaW5EYXNoYm9hcmQpID0+IHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZURhc2hib2FyZChkYXNoYm9hcmQudWlkKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXNoYm9hcmRzLCBuYXZNb2RlbCwgaXNMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+XG4gICAgICAgICAgPERhc2hib2FyZFRhYmxlXG4gICAgICAgICAgICBkYXNoYm9hcmRzPXtkYXNoYm9hcmRzfVxuICAgICAgICAgICAgb25JbXBvcnQ9eyhkYXNoYm9hcmQsIG92ZXJ3cml0ZSkgPT4gdGhpcy5vbkltcG9ydChkYXNoYm9hcmQsIG92ZXJ3cml0ZSl9XG4gICAgICAgICAgICBvblJlbW92ZT17KGRhc2hib2FyZCkgPT4gdGhpcy5vblJlbW92ZShkYXNoYm9hcmQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihEYXRhU291cmNlRGFzaGJvYXJkcyk7XG4iLCJpbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBsb2NhdGlvblV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VXaXRoQmFja2VuZCwgZ2V0RGF0YVNvdXJjZVNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVOYXZJbmRleCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGdldERhdGFzb3VyY2VTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9kYXRhc291cmNlX3Nydic7XG5pbXBvcnQgeyBpbXBvcnREYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luX2xvYWRlcic7XG5pbXBvcnQgeyBnZXRQbHVnaW5TZXR0aW5ncyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpblNldHRpbmdzJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeSwgVGh1bmtEaXNwYXRjaCwgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBidWlsZENhdGVnb3JpZXMgfSBmcm9tICcuL2J1aWxkQ2F0ZWdvcmllcyc7XG5pbXBvcnQgeyBidWlsZE5hdk1vZGVsIH0gZnJvbSAnLi9uYXZNb2RlbCc7XG5pbXBvcnQge1xuICBkYXRhU291cmNlTG9hZGVkLFxuICBkYXRhU291cmNlTWV0YUxvYWRlZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkLFxuICBkYXRhU291cmNlUGx1Z2luc0xvYWRlZCxcbiAgZGF0YVNvdXJjZXNMb2FkZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQsXG4gIHRlc3REYXRhU291cmNlRmFpbGVkLFxuICB0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nLFxuICB0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCxcbn0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlLCBnZXREYXRhU291cmNlTWV0YSB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvYWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVR5cGVzTG9hZGVkUGF5bG9hZCB7XG4gIHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW107XG4gIGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyB7XG4gIGxvYWREYXRhU291cmNlOiB0eXBlb2YgbG9hZERhdGFTb3VyY2U7XG4gIGxvYWREYXRhU291cmNlTWV0YTogdHlwZW9mIGxvYWREYXRhU291cmNlTWV0YTtcbiAgZ2V0RGF0YVNvdXJjZTogdHlwZW9mIGdldERhdGFTb3VyY2U7XG4gIGdldERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZU1ldGE7XG4gIGltcG9ydERhdGFTb3VyY2VQbHVnaW46IHR5cGVvZiBpbXBvcnREYXRhU291cmNlUGx1Z2luO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzIHtcbiAgZ2V0RGF0YXNvdXJjZVNydjogdHlwZW9mIGdldERhdGFTb3VyY2VTcnY7XG4gIGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcGFnZUlkOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzID0ge1xuICAgIGxvYWREYXRhU291cmNlLFxuICAgIGxvYWREYXRhU291cmNlTWV0YSxcbiAgICBnZXREYXRhU291cmNlLFxuICAgIGdldERhdGFTb3VyY2VNZXRhLFxuICAgIGltcG9ydERhdGFTb3VyY2VQbHVnaW4sXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBpZiAoIXBhZ2VJZCkge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2FkZWREYXRhU291cmNlID0gYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlKHBhZ2VJZCkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlTWV0YShsb2FkZWREYXRhU291cmNlKSk7XG5cbiAgICAgIC8vIGhhdmUgd2UgYWxyZWFkeSBsb2FkZWQgdGhlIHBsdWdpbiB0aGVuIHdlIGNhbiBza2lwIHRoZSBzdGVwcyBiZWxvdz9cbiAgICAgIGlmIChnZXRTdGF0ZSgpLmRhdGFTb3VyY2VTZXR0aW5ncy5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2UoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgcGFnZUlkKTtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNZXRhID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2VNZXRhKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UhLnR5cGUpO1xuICAgICAgY29uc3QgaW1wb3J0ZWRQbHVnaW4gPSBhd2FpdCBkZXBlbmRlbmNpZXMuaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihkYXRhU291cmNlTWV0YSk7XG5cbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQoaW1wb3J0ZWRQbHVnaW4pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQoZXJyKSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3REYXRhU291cmNlID0gKFxuICBkYXRhU291cmNlTmFtZTogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzID0ge1xuICAgIGdldERhdGFzb3VyY2VTcnYsXG4gICAgZ2V0QmFja2VuZFNydixcbiAgfVxuKTogVGh1bmtSZXN1bHQ8dm9pZD4gPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRzQXBpID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldERhdGFzb3VyY2VTcnYoKS5nZXQoZGF0YVNvdXJjZU5hbWUpO1xuXG4gICAgaWYgKCFkc0FwaS50ZXN0RGF0YXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3RhcnRpbmcoKSk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLndpdGhOb0JhY2tlbmRDYWNoZShhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkc0FwaS50ZXN0RGF0YXNvdXJjZSgpO1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3VjY2VlZGVkKHJlc3VsdCkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzVGV4dCwgbWVzc2FnZTogZXJyTWVzc2FnZSwgZGV0YWlscywgZGF0YSB9ID0gZXJyO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJNZXNzYWdlIHx8IGRhdGE/Lm1lc3NhZ2UgfHwgJ0hUVFAgZXJyb3IgJyArIHN0YXR1c1RleHQ7XG5cbiAgICAgICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VGYWlsZWQoeyBtZXNzYWdlLCBkZXRhaWxzIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZXNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlKHVpZDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8UHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gYXdhaXQgZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCh1aWQpO1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZUxvYWRlZChkYXRhU291cmNlKSk7XG4gICAgcmV0dXJuIGRhdGFTb3VyY2U7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZU1ldGEoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcGx1Z2luSW5mbyA9IChhd2FpdCBnZXRQbHVnaW5TZXR0aW5ncyhkYXRhU291cmNlLnR5cGUpKSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbiAgICBjb25zdCBwbHVnaW4gPSBhd2FpdCBpbXBvcnREYXRhU291cmNlUGx1Z2luKHBsdWdpbkluZm8pO1xuICAgIGNvbnN0IGlzQmFja2VuZCA9IHBsdWdpbi5EYXRhU291cmNlQ2xhc3MucHJvdG90eXBlIGluc3RhbmNlb2YgRGF0YVNvdXJjZVdpdGhCYWNrZW5kO1xuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAuLi5wbHVnaW5JbmZvLFxuICAgICAgaXNCYWNrZW5kOiBwbHVnaW5JbmZvLmJhY2tlbmQgfHwgaXNCYWNrZW5kLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChkYXRhU291cmNlTWV0YUxvYWRlZChtZXRhKSk7XG5cbiAgICBwbHVnaW4ubWV0YSA9IG1ldGE7XG4gICAgZGlzcGF0Y2godXBkYXRlTmF2SW5kZXgoYnVpbGROYXZNb2RlbChkYXRhU291cmNlLCBwbHVnaW4pKSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0IGRhdGEgc291cmNlIGJ5IHVpZCBvciBpZCwgaWYgb2xkIGlkIGRldGVjdGVkIGhhbmRsZXMgcmVkaXJlY3RcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPERhdGFTb3VyY2VTZXR0aW5ncz4ge1xuICAvLyBUcnkgZmlyc3Qgd2l0aCB1aWQgYXBpXG4gIHRyeSB7XG4gICAgY29uc3QgYnlVaWQgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzL3VpZC8ke3VpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChieVVpZC5vaykge1xuICAgICAgcmV0dXJuIGJ5VWlkLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxvb2t1cCBkYXRhIHNvdXJjZSBieSB1aWQnLCBlcnIpO1xuICB9XG5cbiAgLy8gdHJ5IGxvb2t1cCBieSBvbGQgZGIgaWRcbiAgY29uc3QgaWQgPSB0eXBlb2YgdWlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHVpZCwgMTApIDogdWlkO1xuICBpZiAoIU51bWJlci5pc05hTihpZCkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8RGF0YVNvdXJjZVNldHRpbmdzPih7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogYC9hcGkvZGF0YXNvdXJjZXMvJHtpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIElmIHRoZSB1aWQgaXMgYSBudW1iZXIsIHRoZW4gdGhpcyBpcyBhIHJlZnJlc2ggb24gb25lIG9mIHRoZSBzZXR0aW5ncyB0YWJzXG4gICAgLy8gYW5kIHdlIGNhbiByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGFcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgdHlwZW9mIHVpZCA9PT0gJ251bWJlcicgJiYgcmVzcG9uc2UuZGF0YS5pZCA9PT0gdWlkKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICAvLyBOb3QgaWRlYWwgdG8gZG8gYSBmdWxsIHBhZ2UgcmVsb2FkIGhlcmUgYnV0IHNvIHRyaWNreSB0byBoYW5kbGUgdGhpc1xuICAgIC8vIG90aGVyd2lzZSBXZSBjYW4gdXBkYXRlIHRoZSBsb2NhdGlvbiB1c2luZyByZWFjdCByb3V0ZXIsIGJ1dCBuZWVkIHRvXG4gICAgLy8gZnVsbHkgcmVsb2FkIHRoZSByb3V0ZSBhcyB0aGUgbmF2IG1vZGVsIHBhZ2UgaW5kZXggaXMgbm90IG1hdGNoaW5nIHdpdGhcbiAgICAvLyB0aGUgdXJsIGluIHRoYXQgY2FzZS4gQW5kIHJlYWN0IHJvdXRlciBoYXMgbm8gd2F5IHRvIHVubW91bnQgcmVtb3VudCBhXG4gICAgLy8gcm91dGVcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2UuZGF0YS5pZC50b1N0cmluZygpID09PSB1aWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb25VdGlsLmFzc3VyZUJhc2VVcmwoYC9kYXRhc291cmNlcy9lZGl0LyR7cmVzcG9uc2UuZGF0YS51aWR9YCk7XG4gICAgICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzOyAvLyBhdm9pZHMgZmxhc2hpbmcgYW4gZXJyb3JcbiAgICB9XG4gIH1cblxuICB0aHJvdyBFcnJvcignQ291bGQgbm90IGZpbmQgZGF0YSBzb3VyY2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERhdGFTb3VyY2UocGx1Z2luOiBEYXRhU291cmNlUGx1Z2luTWV0YSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkRGF0YVNvdXJjZXMoKSk7XG5cbiAgICBjb25zdCBkYXRhU291cmNlcyA9IGdldFN0b3JlKCkuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZXM7XG5cbiAgICBjb25zdCBuZXdJbnN0YW5jZSA9IHtcbiAgICAgIG5hbWU6IHBsdWdpbi5uYW1lLFxuICAgICAgdHlwZTogcGx1Z2luLmlkLFxuICAgICAgYWNjZXNzOiAncHJveHknLFxuICAgICAgaXNEZWZhdWx0OiBkYXRhU291cmNlcy5sZW5ndGggPT09IDAsXG4gICAgfTtcblxuICAgIGlmIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpKSB7XG4gICAgICBuZXdJbnN0YW5jZS5uYW1lID0gZmluZE5ld05hbWUoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2RhdGFzb3VyY2VzJywgbmV3SW5zdGFuY2UpO1xuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcblxuICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcblxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3VsdC5kYXRhc291cmNlLnVpZH1gKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlUGx1Z2lucygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlUGx1Z2luc0xvYWQoKSk7XG4gICAgY29uc3QgcGx1Z2lucyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGx1Z2lucycsIHsgZW5hYmxlZDogMSwgdHlwZTogJ2RhdGFzb3VyY2UnIH0pO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBidWlsZENhdGVnb3JpZXMocGx1Z2lucyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQoeyBwbHVnaW5zLCBjYXRlZ29yaWVzIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURhdGFTb3VyY2UoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCwgZGF0YVNvdXJjZSk7IC8vIGJ5IFVJRCBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2gobG9hZERhdGFTb3VyY2UoZGF0YVNvdXJjZS51aWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURhdGFTb3VyY2UoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2U7XG5cbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL2RhdGFzb3VyY2VzLyR7ZGF0YVNvdXJjZS5pZH1gKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2RhdGFzb3VyY2VzJyk7XG4gIH07XG59XG5cbmludGVyZmFjZSBJdGVtV2l0aE5hbWUge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRXhpdHMoZGF0YVNvdXJjZXM6IEl0ZW1XaXRoTmFtZVtdLCBuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChcbiAgICBkYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2UpID0+IHtcbiAgICAgIHJldHVybiBkYXRhU291cmNlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIC8vIE5lZWQgdG8gbG9vcCB0aHJvdWdoIGN1cnJlbnQgZGF0YSBzb3VyY2VzIHRvIG1ha2Ugc3VyZVxuICAvLyB0aGUgbmFtZSBkb2Vzbid0IGV4aXN0XG4gIHdoaWxlIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5hbWUpKSB7XG4gICAgLy8gSWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZG9lc24ndCBlbmQgd2l0aCAnLXgnXG4gICAgLy8gd2UgY2FuIGFkZCAtMSB0byB0aGUgbmFtZSBhbmQgYmUgZG9uZS5cbiAgICBpZiAoIW5hbWVIYXNTdWZmaXgobmFtZSkpIHtcbiAgICAgIG5hbWUgPSBgJHtuYW1lfS0xYDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZW5kcyB3aXRoICcteCdcbiAgICAgIC8vIHdlIGNhbiB0cnkgdG8gaW5jcmVtZW50IHRoZSBsYXN0IGRpZ2l0IHVudGlsIHRoZSBuYW1lIGlzIHVuaXF1ZVxuXG4gICAgICAvLyByZW1vdmUgdGhlICd4JyBwYXJ0IGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIG5ldyBudW1iZXJcbiAgICAgIG5hbWUgPSBgJHtnZXROZXdOYW1lKG5hbWUpfSR7aW5jcmVtZW50TGFzdERpZ2l0KGdldExhc3REaWdpdChuYW1lKSl9YDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gbmFtZUhhc1N1ZmZpeChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuZW5kc1dpdGgoJy0nLCBuYW1lLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0RGlnaXQobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZUludChuYW1lLnNsaWNlKC0xKSwgMTApO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRMYXN0RGlnaXQoZGlnaXQ6IG51bWJlcikge1xuICByZXR1cm4gaXNOYU4oZGlnaXQpID8gMSA6IGRpZ2l0ICsgMTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSAxKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnkgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10pOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSB7XG4gIGNvbnN0IGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdID0gW1xuICAgIHsgaWQ6ICd0c2RiJywgdGl0bGU6ICdUaW1lIHNlcmllcyBkYXRhYmFzZXMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdsb2dnaW5nJywgdGl0bGU6ICdMb2dnaW5nICYgZG9jdW1lbnQgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAndHJhY2luZycsIHRpdGxlOiAnRGlzdHJpYnV0ZWQgdHJhY2luZycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3NxbCcsIHRpdGxlOiAnU1FMJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnY2xvdWQnLCB0aXRsZTogJ0Nsb3VkJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnZW50ZXJwcmlzZScsIHRpdGxlOiAnRW50ZXJwcmlzZSBwbHVnaW5zJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnaW90JywgdGl0bGU6ICdJbmR1c3RyaWFsICYgSW9UJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnb3RoZXInLCB0aXRsZTogJ090aGVycycsIHBsdWdpbnM6IFtdIH0sXG4gIF0uZmlsdGVyKChpdGVtKSA9PiBpdGVtKTtcblxuICBjb25zdCBjYXRlZ29yeUluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnk+ID0ge307XG4gIGNvbnN0IHBsdWdpbkluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luTWV0YT4gPSB7fTtcbiAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbnMgPSBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTtcblxuICAvLyBidWlsZCBpbmRpY2VzXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGNhdGVnb3J5SW5kZXhbY2F0ZWdvcnkuaWRdID0gY2F0ZWdvcnk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbiA9IGVudGVycHJpc2VQbHVnaW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5pZCk7XG4gICAgLy8gRm9yY2UgY2F0ZWdvcnkgZm9yIGVudGVycHJpc2UgcGx1Z2luc1xuICAgIGlmIChwbHVnaW4uZW50ZXJwcmlzZSB8fCBlbnRlcnByaXNlUGx1Z2luKSB7XG4gICAgICBwbHVnaW4uY2F0ZWdvcnkgPSAnZW50ZXJwcmlzZSc7XG4gICAgICBwbHVnaW4udW5saWNlbnNlZCA9ICFmZWF0dXJlRW5hYmxlZCgnZW50ZXJwcmlzZS5wbHVnaW5zJyk7XG4gICAgICBwbHVnaW4uaW5mby5saW5rcyA9IGVudGVycHJpc2VQbHVnaW4/LmluZm8/LmxpbmtzIHx8IHBsdWdpbi5pbmZvLmxpbmtzO1xuICAgIH1cblxuICAgIC8vIEZpeCBsaW5rIG5hbWVcbiAgICBpZiAocGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgIGZvciAoY29uc3QgbGluayBvZiBwbHVnaW4uaW5mby5saW5rcykge1xuICAgICAgICBsaW5rLm5hbWUgPSAnTGVhcm4gbW9yZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5jYXRlZ29yeSkgfHwgY2F0ZWdvcnlJbmRleFsnb3RoZXInXTtcbiAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAvLyBhZGQgdG8gcGx1Z2luIGluZGV4XG4gICAgcGx1Z2luSW5kZXhbcGx1Z2luLmlkXSA9IHBsdWdpbjtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpblxuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2Nsb3VkJykge1xuICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHBoYW50b20gcGx1Z2luc1xuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2VudGVycHJpc2UnKSB7XG4gICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBlbnRlcnByaXNlUGx1Z2lucykge1xuICAgICAgICBpZiAoIXBsdWdpbkluZGV4W3BsdWdpbi5pZF0pIHtcbiAgICAgICAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRQbHVnaW5zKGNhdGVnb3J5LnBsdWdpbnMpO1xuICB9XG5cbiAgLy8gT25seSBzaG93IGNhdGVnb3JpZXMgd2l0aCBwbHVnaW5zXG4gIHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYy5wbHVnaW5zLmxlbmd0aCA+IDApO1xufVxuXG5mdW5jdGlvbiBzb3J0UGx1Z2lucyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKSB7XG4gIGNvbnN0IHNvcnRpbmdSdWxlczogeyBbaWQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIHByb21ldGhldXM6IDEwMCxcbiAgICBncmFwaGl0ZTogOTUsXG4gICAgbG9raTogOTAsXG4gICAgbXlzcWw6IDgwLFxuICAgIGphZWdlcjogMTAwLFxuICAgIHBvc3RncmVzOiA3OSxcbiAgICBnY2xvdWQ6IC0xLFxuICB9O1xuXG4gIHBsdWdpbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFTb3J0ID0gc29ydGluZ1J1bGVzW2EuaWRdIHx8IDA7XG4gICAgY29uc3QgYlNvcnQgPSBzb3J0aW5nUnVsZXNbYi5pZF0gfHwgMDtcbiAgICBpZiAoYVNvcnQgPiBiU29ydCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYVNvcnQgPCBiU29ydCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IC0xIDogMTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucygpOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdIHtcbiAgcmV0dXJuIFtcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zcGx1bmstZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIFNwbHVuayBsb2dzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zcGx1bmtfbG9nb18xMjgucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1vcmFjbGUtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnT3JhY2xlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIE9yYWNsZSBTUUwnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL29yYWNsZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWR5bmF0cmFjZS1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdEeW5hdHJhY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgRHluYXRyYWNlIGRhdGEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2R5bmF0cmFjZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNlcnZpY2Vub3ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NlcnZpY2VOb3cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTZXJ2aWNlTm93JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zZXJ2aWNlbm93LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZGF0YWRvZy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGF0YURvZyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ0RhdGFEb2cnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2RhdGFkb2cucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1uZXdyZWxpYy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTmV3IFJlbGljIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTmV3IFJlbGljJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9uZXdyZWxpYy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW1vbmdvZGItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ01vbmdvREIgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdNb25nb0RCJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9tb25nb2RiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc25vd2ZsYWtlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTbm93Zmxha2UgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTbm93Zmxha2UnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3Nub3dmbGFrZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXdhdmVmcm9udC1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2F2ZWZyb250IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnV2F2ZWZyb250JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy93YXZlZnJvbnQuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZGxvcGVzNy1hcHBkeW5hbWljcy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwRHluYW1pY3MgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdBcHBEeW5hbWljcycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvYXBwZHluYW1pY3Muc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYXBoYW5hLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTQVAgSEFOQcKuIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU0FQIEhBTkHCricsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FwX2hhbmEucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1ob25leWNvbWItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hvbmV5Y29tYiBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSG9uZXljb21iJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9ob25leWNvbWIucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYWxlc2ZvcmNlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTYWxlc2ZvcmNlIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTYWxlc2ZvcmNlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zYWxlc2ZvcmNlLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtamlyYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSmlyYSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSmlyYScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvamlyYV9sb2dvLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZ2l0bGFiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdHaXRMYWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0dpdExhYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZ2l0bGFiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLW1vbml0b3JpbmctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NpZ25hbEZ4IGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTcGx1bmsgSW5mcmFzdHJ1Y3R1cmUgTW9uaXRvcmluZycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2lnbmFsZngtbG9nby5zdmcnLFxuICAgIH0pLFxuICBdO1xufVxuXG5mdW5jdGlvbiBnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogJ2djbG91ZCcsXG4gICAgbmFtZTogJ0dyYWZhbmEgQ2xvdWQnLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0hvc3RlZCBHcmFwaGl0ZSwgUHJvbWV0aGV1cywgYW5kIExva2knLFxuICAgICAgbG9nb3M6IHsgc21hbGw6ICdwdWJsaWMvaW1nL2dyYWZhbmFfaWNvbi5zdmcnLCBsYXJnZTogJ2FzZCcgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ3JhZmFuYS5jb20vcHJvZHVjdHMvY2xvdWQvJyxcbiAgICAgICAgICBuYW1lOiAnTGVhcm4gbW9yZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuXG5pbnRlcmZhY2UgR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltZ1VybDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQaGFudG9tUGx1Z2luKG9wdGlvbnM6IEdldFBoYW50b21QbHVnaW5PcHRpb25zKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiBvcHRpb25zLmlkLFxuICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBsb2dvczogeyBzbWFsbDogb3B0aW9ucy5pbWdVcmwsIGxhcmdlOiBvcHRpb25zLmltZ1VybCB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBjb25maWcucGx1Z2luQ2F0YWxvZ1VSTCArIG9wdGlvbnMuaWQsXG4gICAgICAgICAgbmFtZTogJ0luc3RhbGwgbm93JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlU2V0dGluZ3MsIFBsdWdpblR5cGUsIFBsdWdpbkluY2x1ZGUsIE5hdk1vZGVsLCBOYXZNb2RlbEl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IFByb0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1Byb0JhZGdlJztcbmltcG9ydCB7IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnLi4vc2V0dGluZ3MvUGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgaGlnaGxpZ2h0VHJpYWwgfSBmcm9tICcuLi8uLi9hZG1pbi91dGlscyc7XG5cbmNvbnN0IGxvYWRpbmdEU1R5cGUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncywgcGx1Z2luOiBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbik6IE5hdk1vZGVsSXRlbSB7XG4gIGNvbnN0IHBsdWdpbk1ldGEgPSBwbHVnaW4ubWV0YTtcbiAgY29uc3QgaGlnaGxpZ2h0c0VuYWJsZWQgPSBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4gIGNvbnN0IG5hdk1vZGVsOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaW1nOiBwbHVnaW5NZXRhLmluZm8ubG9nb3MubGFyZ2UsXG4gICAgaWQ6ICdkYXRhc291cmNlLScgKyBkYXRhU291cmNlLnVpZCxcbiAgICBzdWJUaXRsZTogYFR5cGU6ICR7cGx1Z2luTWV0YS5uYW1lfWAsXG4gICAgdXJsOiAnJyxcbiAgICB0ZXh0OiBkYXRhU291cmNlLm5hbWUsXG4gICAgYnJlYWRjcnVtYnM6IFt7IHRpdGxlOiAnRGF0YSBTb3VyY2VzJywgdXJsOiAnZGF0YXNvdXJjZXMnIH1dLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGljb246ICdzbGlkZXJzLXYtYWx0JyxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXNldHRpbmdzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgICAgdGV4dDogJ1NldHRpbmdzJyxcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9gLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGlmIChwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHRleHQ6IHBhZ2UudGl0bGUsXG4gICAgICAgIGljb246IHBhZ2UuaWNvbixcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS8/cGFnZT0ke3BhZ2UuaWR9YCxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXBhZ2UtJHtwYWdlLmlkfWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAocGx1Z2luTWV0YS5pbmNsdWRlcyAmJiBoYXNEYXNoYm9hcmRzKHBsdWdpbk1ldGEuaW5jbHVkZXMpICYmIGNvbnRleHRTcnYuaGFzUm9sZSgnQWRtaW4nKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBpY29uOiAnYXBwcycsXG4gICAgICBpZDogYGRhdGFzb3VyY2UtZGFzaGJvYXJkcy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICB0ZXh0OiAnRGFzaGJvYXJkcycsXG4gICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2Rhc2hib2FyZHNgLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaXNMb2FkaW5nTmF2ID0gZGF0YVNvdXJjZS50eXBlID09PSBsb2FkaW5nRFNUeXBlO1xuXG4gIGNvbnN0IHBlcm1pc3Npb25zRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1wZXJtaXNzaW9ucy1iYWRnZSc7XG4gIGNvbnN0IGRzUGVybWlzc2lvbnM6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdsb2NrJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtcGVybWlzc2lvbnMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdQZXJtaXNzaW9ucycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9wZXJtaXNzaW9uc2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGRzUGVybWlzc2lvbnMudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2RzcGVybWlzc2lvbnMnKSkge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCkpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGRzUGVybWlzc2lvbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uZHNQZXJtaXNzaW9ucyxcbiAgICAgIHVybDogZHNQZXJtaXNzaW9ucy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhbmFseXRpY3NFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLWluc2lnaHRzLWJhZGdlJztcbiAgY29uc3QgYW5hbHl0aWNzOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnaW5mby1jaXJjbGUnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1pbnNpZ2h0cy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0luc2lnaHRzJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2luc2lnaHRzYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgYW5hbHl0aWNzLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnYW5hbHl0aWNzJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChhbmFseXRpY3MpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5hbmFseXRpY3MsXG4gICAgICB1cmw6IGFuYWx5dGljcy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2FjaGluZ0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtcXVlcnktY2FjaGluZy1iYWRnZSc7XG5cbiAgY29uc3QgY2FjaGluZzogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2RhdGFiYXNlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtY2FjaGUtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdDYWNoZScsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9jYWNoZWAsXG4gICAgaGlkZUZyb21UYWJzOiAhcGx1Z2luTWV0YS5pc0JhY2tlbmQgfHwgIWNvbmZpZy5jYWNoaW5nLmVuYWJsZWQsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGNhY2hpbmcudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnY2FjaGluZycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goY2FjaGluZyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmNhY2hpbmcsXG4gICAgICB1cmw6IGNhY2hpbmcudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTmF2KG1haW46IE5hdk1vZGVsSXRlbSwgcGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgbGV0IG5vZGU6IE5hdk1vZGVsSXRlbSA9IHsgdGV4dDogJycgfTtcblxuICAvLyBmaW5kIGFjdGl2ZSBwYWdlXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgbWFpbi5jaGlsZHJlbiEpIHtcbiAgICBpZiAoY2hpbGQuaWQhLmluZGV4T2YocGFnZU5hbWUpID4gMCkge1xuICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbixcbiAgICBub2RlOiBub2RlISxcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTG9hZGluZ05hdihwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0gYnVpbGROYXZNb2RlbChcbiAgICB7XG4gICAgICBhY2Nlc3M6ICcnLFxuICAgICAgYmFzaWNBdXRoOiBmYWxzZSxcbiAgICAgIGJhc2ljQXV0aFVzZXI6ICcnLFxuICAgICAgYmFzaWNBdXRoUGFzc3dvcmQ6ICcnLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIGRhdGFiYXNlOiAnJyxcbiAgICAgIGlkOiAxLFxuICAgICAgdWlkOiAneCcsXG4gICAgICBpc0RlZmF1bHQ6IGZhbHNlLFxuICAgICAganNvbkRhdGE6IHsgYXV0aFR5cGU6ICdjcmVkZW50aWFscycsIGRlZmF1bHRSZWdpb246ICdldS13ZXN0LTInIH0sXG4gICAgICBuYW1lOiAnTG9hZGluZycsXG4gICAgICBvcmdJZDogMSxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHR5cGU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTmFtZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVMb2dvVXJsOiAncHVibGljL2ltZy9pY24tZGF0YXNvdXJjZS5zdmcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgc2VjdXJlSnNvbkZpZWxkczoge30sXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICBsaW5rczogW3sgbmFtZTogJycsIHVybDogJycgfV0sXG4gICAgICAgICAgbG9nb3M6IHtcbiAgICAgICAgICAgIGxhcmdlOiAnJyxcbiAgICAgICAgICAgIHNtYWxsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgICB2ZXJzaW9uOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZXM6IFtdLFxuICAgICAgICBtb2R1bGU6ICcnLFxuICAgICAgICBiYXNlVXJsOiAnJyxcbiAgICAgIH0sXG4gICAgfSBhcyBhbnlcbiAgKTtcblxuICByZXR1cm4gZ2V0RGF0YVNvdXJjZU5hdihtYWluLCBwYWdlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0Rhc2hib2FyZHMoaW5jbHVkZXM6IFBsdWdpbkluY2x1ZGVbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGluY2x1ZGVzLmZpbmQoKGluY2x1ZGUpID0+IHtcbiAgICAgIHJldHVybiBpbmNsdWRlLnR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICAgIH0pICE9PSB1bmRlZmluZWRcbiAgKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIFVybFF1ZXJ5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VzU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRhc291cmNlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlcyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5uYW1lKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UuZGF0YWJhc2UpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS50eXBlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVBsdWdpbnMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLmRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnBsdWdpbnMuZmlsdGVyKCh0eXBlOiBEYXRhU291cmNlUGx1Z2luTWV0YSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHR5cGUubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2UgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIGRhdGFTb3VyY2VJZDogVXJsUXVlcnlWYWx1ZSk6IERhdGFTb3VyY2VTZXR0aW5ncyA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlLnVpZCA9PT0gZGF0YVNvdXJjZUlkKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2U7XG4gIH1cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlTWV0YSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgdHlwZTogc3RyaW5nKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZU1ldGEuaWQgPT09IHR5cGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZU1ldGE7XG4gIH1cblxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzQ291bnQgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzQ291bnQ7XG4iXSwibmFtZXMiOlsiY29uZmlnIiwiaXNUcmlhbCIsImV4cGlyeSIsImxpY2Vuc2VJbmZvIiwidHJpYWxFeHBpcnkiLCJoaWdobGlnaHRUcmlhbCIsImZlYXR1cmVUb2dnbGVzIiwiZmVhdHVyZUhpZ2hsaWdodHMiLCJSZWFjdCIsIkJ1dHRvbiIsIkljb24iLCJEYXNoYm9hcmRzVGFibGUiLCJkYXNoYm9hcmRzIiwib25JbXBvcnQiLCJvblJlbW92ZSIsImJ1dHRvblRleHQiLCJkYXNoYm9hcmQiLCJyZXZpc2lvbiIsImltcG9ydGVkUmV2aXNpb24iLCJtYXAiLCJpbmRleCIsImltcG9ydGVkIiwiaW1wb3J0ZWRVcmwiLCJ0aXRsZSIsInRleHRBbGlnbiIsImRhc2hib2FyZElkIiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJQYWdlIiwiRGFzaGJvYXJkVGFibGUiLCJnZXROYXZNb2RlbCIsImxvYWREYXRhU291cmNlIiwibG9hZFBsdWdpbkRhc2hib2FyZHMiLCJpbXBvcnREYXNoYm9hcmQiLCJyZW1vdmVEYXNoYm9hcmQiLCJnZXREYXRhU291cmNlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9wcyIsImRhdGFTb3VyY2VJZCIsIm1hdGNoIiwicGFyYW1zIiwidWlkIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsInBsdWdpbnMiLCJkYXRhU291cmNlIiwiZGF0YVNvdXJjZXMiLCJpc0xvYWRpbmciLCJpc0xvYWRpbmdQbHVnaW5EYXNoYm9hcmRzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiRGF0YVNvdXJjZURhc2hib2FyZHMiLCJvdmVyd3JpdGUiLCJkYXRhIiwicGx1Z2luSWQiLCJwYXRoIiwiaW5wdXRzIiwicHVzaCIsIm5hbWUiLCJ0eXBlIiwidmFsdWUiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsImxhc3RWYWx1ZUZyb20iLCJsb2NhdGlvblV0aWwiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJsb2NhdGlvblNlcnZpY2UiLCJ1cGRhdGVOYXZJbmRleCIsImdldEJhY2tlbmRTcnYiLCJnZXREYXRhc291cmNlU3J2IiwiaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiIsImdldFBsdWdpblNldHRpbmdzIiwiYnVpbGRDYXRlZ29yaWVzIiwiYnVpbGROYXZNb2RlbCIsImRhdGFTb3VyY2VMb2FkZWQiLCJkYXRhU291cmNlTWV0YUxvYWRlZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkIiwiZGF0YVNvdXJjZXNMb2FkZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZCIsInRlc3REYXRhU291cmNlRmFpbGVkIiwidGVzdERhdGFTb3VyY2VTdGFydGluZyIsInRlc3REYXRhU291cmNlU3VjY2VlZGVkIiwiZ2V0RGF0YVNvdXJjZU1ldGEiLCJhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSIsImNvbnRleHRTcnYiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzIiwicGFnZUlkIiwiZGVwZW5kZW5jaWVzIiwibG9hZERhdGFTb3VyY2VNZXRhIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIkVycm9yIiwibG9hZGVkRGF0YVNvdXJjZSIsImRhdGFTb3VyY2VTZXR0aW5ncyIsInBsdWdpbiIsImRhdGFTb3VyY2VNZXRhIiwiaW1wb3J0ZWRQbHVnaW4iLCJlcnIiLCJ0ZXN0RGF0YVNvdXJjZSIsImRhdGFTb3VyY2VOYW1lIiwiZHNBcGkiLCJnZXQiLCJ0ZXN0RGF0YXNvdXJjZSIsIndpdGhOb0JhY2tlbmRDYWNoZSIsInJlc3VsdCIsInN0YXR1c1RleHQiLCJtZXNzYWdlIiwiZXJyTWVzc2FnZSIsImRldGFpbHMiLCJsb2FkRGF0YVNvdXJjZXMiLCJyZXNwb25zZSIsImdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQiLCJwbHVnaW5JbmZvIiwiaXNCYWNrZW5kIiwiRGF0YVNvdXJjZUNsYXNzIiwicHJvdG90eXBlIiwibWV0YSIsImJhY2tlbmQiLCJieVVpZCIsImZldGNoIiwibWV0aG9kIiwidXJsIiwic2hvd0Vycm9yQWxlcnQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJ0b1N0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFzc3VyZUJhc2VVcmwiLCJhZGREYXRhU291cmNlIiwiZ2V0U3RvcmUiLCJuZXdJbnN0YW5jZSIsImFjY2VzcyIsImlzRGVmYXVsdCIsImxlbmd0aCIsIm5hbWVFeGl0cyIsImZpbmROZXdOYW1lIiwicG9zdCIsInJlbG9hZCIsImZldGNoVXNlclBlcm1pc3Npb25zIiwiZGF0YXNvdXJjZSIsImxvYWREYXRhU291cmNlUGx1Z2lucyIsImVuYWJsZWQiLCJjYXRlZ29yaWVzIiwidXBkYXRlRGF0YVNvdXJjZSIsInB1dCIsImRlbGV0ZURhdGFTb3VyY2UiLCJkZWxldGUiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsIm5hbWVIYXNTdWZmaXgiLCJnZXROZXdOYW1lIiwiaW5jcmVtZW50TGFzdERpZ2l0IiwiZ2V0TGFzdERpZ2l0IiwiZW5kc1dpdGgiLCJzbGljZSIsImRpZ2l0IiwiUGx1Z2luVHlwZSIsImZlYXR1cmVFbmFibGVkIiwiaXRlbSIsImNhdGVnb3J5SW5kZXgiLCJwbHVnaW5JbmRleCIsImVudGVycHJpc2VQbHVnaW5zIiwiZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zIiwiY2F0ZWdvcnkiLCJlbnRlcnByaXNlUGx1Z2luIiwiZmluZCIsImVudGVycHJpc2UiLCJ1bmxpY2Vuc2VkIiwiaW5mbyIsImxpbmtzIiwibGluayIsImdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4iLCJzb3J0UGx1Z2lucyIsImMiLCJzb3J0aW5nUnVsZXMiLCJwcm9tZXRoZXVzIiwiZ3JhcGhpdGUiLCJsb2tpIiwibXlzcWwiLCJqYWVnZXIiLCJwb3N0Z3JlcyIsImdjbG91ZCIsInNvcnQiLCJhIiwiYiIsImFTb3J0IiwiYlNvcnQiLCJnZXRQaGFudG9tUGx1Z2luIiwiZGVzY3JpcHRpb24iLCJpbWdVcmwiLCJtb2R1bGUiLCJiYXNlVXJsIiwibG9nb3MiLCJzbWFsbCIsImxhcmdlIiwiYXV0aG9yIiwic2NyZWVuc2hvdHMiLCJ1cGRhdGVkIiwidmVyc2lvbiIsIm9wdGlvbnMiLCJwbHVnaW5DYXRhbG9nVVJMIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsIlByb0JhZGdlIiwibG9hZGluZ0RTVHlwZSIsInBsdWdpbk1ldGEiLCJoaWdobGlnaHRzRW5hYmxlZCIsImltZyIsInN1YlRpdGxlIiwidGV4dCIsImJyZWFkY3J1bWJzIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpY29uIiwiY29uZmlnUGFnZXMiLCJwYWdlIiwiaW5jbHVkZXMiLCJoYXNEYXNoYm9hcmRzIiwiaGFzUm9sZSIsImlzTG9hZGluZ05hdiIsInBlcm1pc3Npb25zRXhwZXJpbWVudElkIiwiZHNQZXJtaXNzaW9ucyIsInRhYlN1ZmZpeCIsImV4cGVyaW1lbnRJZCIsImV2ZW50VmFyaWFudCIsImhhc1Blcm1pc3Npb24iLCJEYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCIsImFuYWx5dGljc0V4cGVyaW1lbnRJZCIsImFuYWx5dGljcyIsImNhY2hpbmdFeHBlcmltZW50SWQiLCJjYWNoaW5nIiwiaGlkZUZyb21UYWJzIiwiZ2V0RGF0YVNvdXJjZU5hdiIsIm1haW4iLCJwYWdlTmFtZSIsIm5vZGUiLCJjaGlsZCIsImluZGV4T2YiLCJnZXREYXRhU291cmNlTG9hZGluZ05hdiIsImJhc2ljQXV0aCIsImJhc2ljQXV0aFVzZXIiLCJiYXNpY0F1dGhQYXNzd29yZCIsIndpdGhDcmVkZW50aWFscyIsImRhdGFiYXNlIiwianNvbkRhdGEiLCJhdXRoVHlwZSIsImRlZmF1bHRSZWdpb24iLCJvcmdJZCIsInBhc3N3b3JkIiwicmVhZE9ubHkiLCJ0eXBlTmFtZSIsInR5cGVMb2dvVXJsIiwidXNlciIsInNlY3VyZUpzb25GaWVsZHMiLCJpbmNsdWRlIiwidW5kZWZpbmVkIiwiZ2V0RGF0YVNvdXJjZXMiLCJyZWdleCIsIlJlZ0V4cCIsInNlYXJjaFF1ZXJ5IiwidGVzdCIsImdldERhdGFTb3VyY2VQbHVnaW5zIiwiZGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSIsImdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkiLCJnZXREYXRhU291cmNlc0xheW91dE1vZGUiLCJsYXlvdXRNb2RlIiwiZ2V0RGF0YVNvdXJjZXNDb3VudCIsImRhdGFTb3VyY2VzQ291bnQiXSwic291cmNlUm9vdCI6IiJ9
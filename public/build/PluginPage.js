"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PluginPage"],{

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

/***/ }),

/***/ "./public/app/features/plugins/admin/components/AppConfigWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigCtrlWrapper": () => (/* binding */ AppConfigCtrlWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _br2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries








class AppConfigCtrlWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  //@ts-ignore
  // Needed for angular scope
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "model", void 0);

    _defineProperty(this, "preUpdateHook", () => Promise.resolve());

    _defineProperty(this, "postUpdateHook", () => Promise.resolve());

    _defineProperty(this, "update", () => {
      const pluginId = this.model.id;
      this.preUpdateHook().then(() => {
        const updateCmd = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.extend)({
          enabled: this.model.enabled,
          pinned: this.model.pinned,
          jsonData: this.model.jsonData,
          secureJsonData: this.model.secureJsonData
        }, {});
        return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().post(`/api/plugins/${pluginId}/settings`, updateCmd);
      }).then(this.postUpdateHook).then(res => {
        window.location.href = window.location.href;
      });
    });

    _defineProperty(this, "setPreUpdateHook", callback => {
      this.preUpdateHook = callback;
    });

    _defineProperty(this, "setPostUpdateHook", callback => {
      this.postUpdateHook = callback;
    });

    _defineProperty(this, "importDashboards", () => {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.deprecationWarning)('AppConfig', 'importDashboards()');
      return Promise.resolve();
    });

    _defineProperty(this, "enable", () => {
      this.model.enabled = true;
      this.model.pinned = true;
      this.update();
    });

    _defineProperty(this, "disable", () => {
      this.model.enabled = false;
      this.model.pinned = false;
      this.update();
    });

    this.state = {
      angularCtrl: null,
      refresh: 0
    };
  }

  componentDidMount() {
    // Force a reload after the first mount -- is there a better way to do this?
    setTimeout(() => {
      this.setState({
        refresh: this.state.refresh + 1
      });
    }, 5);
  }

  componentDidUpdate(prevProps) {
    if (!this.element || this.state.angularCtrl) {
      return;
    } // Set a copy of the meta


    this.model = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.props.app.meta);
    const loader = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getAngularLoader)();
    const template = '<plugin-component type="app-config-ctrl"></plugin-component>';
    const scopeProps = {
      ctrl: this,
      // used by angular injectorMonkeyPatch to detect this scenario
      isAppConfigCtrl: true
    };
    const angularCtrl = loader.load(this.element, scopeProps, template);
    this.setState({
      angularCtrl
    });
  }

  render() {
    const model = this.model;
    const withRightMargin = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_5__.css)({
      marginRight: '8px'
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        ref: element => this.element = element
      }), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), model && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [!model.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: this.enable,
          className: withRightMargin,
          children: "Enable"
        }), model.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: this.update,
          className: withRightMargin,
          children: "Update"
        }), model.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "destructive",
          onClick: this.disable,
          className: withRightMargin,
          children: "Disable"
        })]
      })]
    });
  } //-----------------------------------------------------------
  // Copied from plugin_edit_ctrl
  //-----------------------------------------------------------


}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* binding */ PluginDisabledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginDisabledBadge({
  error
}) {
  const tooltip = errorCodeToTooltip(error);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
    icon: "exclamation-triangle",
    text: "Disabled",
    color: "red",
    tooltip: tooltip
  });
}

function errorCodeToTooltip(error) {
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return 'Plugin disabled due to modified content';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
      return 'Plugin disabled due to invalid plugin signature';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
      return 'Plugin disabled due to missing plugin signature';

    default:
      return `Plugin disabled due to unkown error: ${error}`;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginEnterpriseBadge": () => (/* binding */ PluginEnterpriseBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge;







function PluginEnterpriseBadge({
  plugin
}) {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_2__.getBadgeColor);

  const onClick = ev => {
    ev.preventDefault();
    window.open(`https://grafana.com/grafana/plugins/${plugin.id}?utm_source=grafana_catalog_learn_more`, '_blank', 'noopener,noreferrer');
  };

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.featureEnabled)('enterprise.plugins')) {
    return _Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
      text: "Enterprise",
      color: "blue"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.PluginSignatureBadge, {
      status: plugin.signature
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
      icon: "lock",
      "aria-label": "lock icon",
      text: "Enterprise",
      color: "blue",
      className: customBadgeStyles
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      size: "sm",
      fill: "text",
      icon: "external-link-alt",
      onClick: onClick,
      children: "Learn more"
    })]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginInstalledBadge": () => (/* binding */ PluginInstalledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginInstalledBadge() {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_2__.getBadgeColor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
    text: "Installed",
    color: "orange",
    className: customBadgeStyles
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* binding */ PluginUpdateAvailableBadge),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PluginUpdateAvailableBadge({
  plugin
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles); // Currently renderer plugins are not supported by the catalog due to complications related to installation / update / uninstall.

  if (plugin.hasUpdate && !plugin.isCore && plugin.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginType.renderer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: styles.hasUpdate,
      children: "Update available!"
    });
  }

  return null;
}
const getStyles = theme => {
  return {
    hasUpdate: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* reexport safe */ _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__.PluginDisabledBadge),
/* harmony export */   "PluginEnterpriseBadge": () => (/* reexport safe */ _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__.PluginEnterpriseBadge),
/* harmony export */   "PluginInstalledBadge": () => (/* reexport safe */ _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__.PluginInstalledBadge),
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* reexport safe */ _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__.PluginUpdateAvailableBadge)
/* harmony export */ });
/* harmony import */ var _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx");
/* harmony import */ var _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx");
/* harmony import */ var _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx");
/* harmony import */ var _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx");





/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/sharedStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBadgeColor": () => (/* binding */ getBadgeColor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getBadgeColor = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  background: ${theme.colors.background.primary};
  border-color: ${theme.colors.border.strong};
  color: ${theme.colors.text.secondary};
`;

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithApp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithApp": () => (/* binding */ GetStartedWithApp)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginConfig.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/api.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function GetStartedWithApp({
  plugin
}) {
  const {
    value: pluginConfig
  } = (0,_hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_1__.usePluginConfig)(plugin);

  if (!pluginConfig) {
    return null;
  }

  const {
    enabled,
    jsonData
  } = pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.meta;

  const enable = () => updatePluginSettingsAndReload(plugin.id, {
    enabled: true,
    pinned: true,
    jsonData
  });

  const disable = () => {
    updatePluginSettingsAndReload(plugin.id, {
      enabled: false,
      pinned: false,
      jsonData
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [!enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
      variant: "primary",
      onClick: enable,
      children: "Enable"
    }), enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
      variant: "destructive",
      onClick: disable,
      children: "Disable"
    })]
  });
}

const updatePluginSettingsAndReload = async (id, data) => {
  try {
    await (0,_api__WEBPACK_IMPORTED_MODULE_2__.updatePluginSettings)(id, data); // Reloading the page as the plugin meta changes made here wouldn't be propagated throughout the app.

    window.location.reload();
  } catch (e) {
    console.error('Error while updating the plugin', e);
  }
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithDataSource.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithDataSource": () => (/* binding */ GetStartedWithDataSource)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_datasources_state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function GetStartedWithDataSource({
  plugin
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const onAddDataSource = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    const meta = {
      name: plugin.name,
      id: plugin.id
    };
    dispatch((0,app_features_datasources_state_actions__WEBPACK_IMPORTED_MODULE_1__.addDataSource)(meta));
  }, [dispatch, plugin]);

  if (!(0,_permissions__WEBPACK_IMPORTED_MODULE_4__.isDataSourceEditor)()) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
    variant: "primary",
    onClick: onAddDataSource,
    children: ["Create a ", plugin.name, " data source"]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithPlugin.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithPlugin": () => (/* binding */ GetStartedWithPlugin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _GetStartedWithDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithDataSource.tsx");
/* harmony import */ var _GetStartedWithApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithApp.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function GetStartedWithPlugin({
  plugin
}) {
  if (!plugin.isInstalled || plugin.isDisabled) {
    return null;
  }

  switch (plugin.type) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginType.datasource:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GetStartedWithDataSource__WEBPACK_IMPORTED_MODULE_2__.GetStartedWithDataSource, {
        plugin: plugin
      });

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginType.app:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GetStartedWithApp__WEBPACK_IMPORTED_MODULE_3__.GetStartedWithApp, {
        plugin: plugin
      });

    default:
      return null;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithPlugin": () => (/* reexport safe */ _GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_0__.GetStartedWithPlugin)
/* harmony export */ });
/* harmony import */ var _GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithPlugin.tsx");


/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/ExternallyManagedButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternallyManagedButton": () => (/* binding */ ExternallyManagedButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function ExternallyManagedButton({
  pluginId,
  pluginStatus
}) {
  const externalManageLink = `${(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getExternalManageLink)(pluginId)}/?tab=installation`;

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_3__.PluginStatus.UPDATE) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      height: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        href: externalManageLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Update via grafana.com"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        variant: "destructive",
        href: externalManageLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Uninstall via grafana.com"
      })]
    });
  }

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_3__.PluginStatus.UNINSTALL) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
      variant: "destructive",
      href: externalManageLink,
      target: "_blank",
      rel: "noopener noreferrer",
      children: "Uninstall via grafana.com"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
    href: externalManageLink,
    target: "_blank",
    rel: "noopener noreferrer",
    children: "Install via grafana.com"
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/InstallControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallControls": () => (/* binding */ InstallControls),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _ExternallyManagedButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/ExternallyManagedButton.tsx");
/* harmony import */ var _InstallControlsButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/InstallControlsButton.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _a, _Icon2;














const InstallControls = ({
  plugin,
  latestCompatibleVersion
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const isExternallyManaged = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.pluginAdminExternalManageEnabled;
  const hasPermission = (0,_permissions__WEBPACK_IMPORTED_MODULE_10__.isGrafanaAdmin)();
  const isRemotePluginsAvailable = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_9__.useIsRemotePluginsAvailable)();
  const isCompatible = Boolean(latestCompatibleVersion);
  const isInstallControlsDisabled = plugin.isCore || plugin.isDisabled || !(0,_helpers__WEBPACK_IMPORTED_MODULE_8__.isInstallControlsEnabled)();
  const pluginStatus = plugin.isInstalled ? plugin.hasUpdate ? _types__WEBPACK_IMPORTED_MODULE_7__.PluginStatus.UPDATE : _types__WEBPACK_IMPORTED_MODULE_7__.PluginStatus.UNINSTALL : _types__WEBPACK_IMPORTED_MODULE_7__.PluginStatus.INSTALL;

  if (isInstallControlsDisabled) {
    return null;
  }

  if (plugin.type === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PluginType.renderer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: "Renderer plugins cannot be managed by the Plugin Catalog."
    });
  }

  if (plugin.isEnterprise && !(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.featureEnabled)('enterprise.plugins')) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      height: "auto",
      align: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
        className: styles.message,
        children: "No valid Grafana Enterprise license detected."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        href: `${(0,_helpers__WEBPACK_IMPORTED_MODULE_8__.getExternalManageLink)(plugin.id)}?utm_source=grafana_catalog_learn_more`,
        target: "_blank",
        rel: "noopener noreferrer",
        size: "sm",
        fill: "text",
        icon: "external-link-alt",
        children: "Learn more"
      })]
    });
  }

  if (plugin.isDev) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: "This is a development build of the plugin and can't be uninstalled."
    });
  }

  if (!hasPermission && !isExternallyManaged) {
    const message = `You do not have permission to ${pluginStatus} this plugin.`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: message
    });
  }

  if (!plugin.isPublished) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.message,
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "exclamation-triangle"
      })), " This plugin is not published to", ' ', _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: "https://www.grafana.com/plugins",
        target: "__blank",
        rel: "noreferrer",
        children: "grafana.com/plugins"
      })), ' ', "and can't be managed via the catalog."]
    });
  }

  if (!isCompatible) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.message,
      children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "exclamation-triangle"
      })), "\xA0This plugin doesn't support your version of Grafana."]
    });
  }

  if (isExternallyManaged) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ExternallyManagedButton__WEBPACK_IMPORTED_MODULE_5__.ExternallyManagedButton, {
      pluginId: plugin.id,
      pluginStatus: pluginStatus
    });
  }

  if (!isRemotePluginsAvailable) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: "The install controls have been disabled because the Grafana server cannot access grafana.com."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_InstallControlsButton__WEBPACK_IMPORTED_MODULE_6__.InstallControlsButton, {
    plugin: plugin,
    pluginStatus: pluginStatus,
    latestCompatibleVersion: latestCompatibleVersion
  });
};
const getStyles = theme => {
  return {
    message: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.text.secondary};
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/InstallControlsButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallControlsButton": () => (/* binding */ InstallControlsButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function InstallControlsButton({
  plugin,
  pluginStatus,
  latestCompatibleVersion
}) {
  var _Button;

  const {
    isInstalling,
    error: errorInstalling
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useInstallStatus)();
  const {
    isUninstalling,
    error: errorUninstalling
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useUninstallStatus)();
  const install = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useInstall)();
  const uninstall = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useUninstall)();
  const [isConfirmModalVisible, setIsConfirmModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const showConfirmModal = () => setIsConfirmModalVisible(true);

  const hideConfirmModal = () => setIsConfirmModalVisible(false);

  const uninstallBtnText = isUninstalling ? 'Uninstalling' : 'Uninstall';

  const onInstall = async () => {
    await install(plugin.id, latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version);

    if (!errorInstalling) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, [`Installed ${plugin.name}`]);
    }
  };

  const onUninstall = async () => {
    hideConfirmModal();
    await uninstall(plugin.id);

    if (!errorUninstalling) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, [`Uninstalled ${plugin.name}`]);
    }
  };

  const onUpdate = async () => {
    await install(plugin.id, latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version, true);

    if (!errorInstalling) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, [`Updated ${plugin.name}`]);
    }
  };

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_4__.PluginStatus.UNINSTALL) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
        isOpen: isConfirmModalVisible,
        title: `Uninstall ${plugin.name}`,
        body: "Are you sure you want to uninstall this plugin?",
        confirmText: "Confirm",
        icon: "exclamation-triangle",
        onConfirm: onUninstall,
        onDismiss: hideConfirmModal
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        height: "auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "destructive",
          disabled: isUninstalling,
          onClick: showConfirmModal,
          children: uninstallBtnText
        })
      })]
    });
  }

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_4__.PluginStatus.UPDATE) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      height: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        disabled: isInstalling,
        onClick: onUpdate,
        children: isInstalling ? 'Updating' : 'Update'
      }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "destructive",
        disabled: isUninstalling,
        onClick: onUninstall,
        children: uninstallBtnText
      }))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    disabled: isInstalling,
    onClick: onInstall,
    children: isInstalling ? 'Installing' : 'Install'
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallControls": () => (/* reexport safe */ _InstallControls__WEBPACK_IMPORTED_MODULE_0__.InstallControls),
/* harmony export */   "getStyles": () => (/* reexport safe */ _InstallControls__WEBPACK_IMPORTED_MODULE_0__.getStyles)
/* harmony export */ });
/* harmony import */ var _InstallControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/InstallControls.tsx");


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Loader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Page.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Loader = ({
  text = 'Loading...'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Page__WEBPACK_IMPORTED_MODULE_2__.Page, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "page-loader-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: text
      })
    })
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Page.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Page = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "page-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles,
      children: children
    })
  });
};

const getStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-bottom: ${theme.spacing(3)};
  `;

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDashboards.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDashboards": () => (/* binding */ PluginDashboards)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_datasources_DashboardsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/datasources/DashboardsTable.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PluginDashboards extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "importAll", () => {
      this.importNext(0);
    });

    _defineProperty(this, "importNext", index => {
      const {
        dashboards
      } = this.state;
      return this.import(dashboards[index], true).then(() => {
        if (index + 1 < dashboards.length) {
          return new Promise(resolve => {
            setTimeout(() => {
              this.importNext(index + 1).then(() => {
                resolve();
              });
            }, 500);
          });
        } else {
          return Promise.resolve();
        }
      });
    });

    _defineProperty(this, "import", (dash, overwrite) => {
      const {
        plugin,
        datasource
      } = this.props;
      const installCmd = {
        pluginId: plugin.id,
        path: dash.path,
        overwrite: overwrite,
        inputs: []
      };

      if (datasource) {
        installCmd.inputs.push({
          name: '*',
          type: 'datasource',
          pluginId: datasource.meta.id,
          value: datasource.name
        });
      }

      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post(`/api/dashboards/import`, installCmd).then(res => {
        app_core_core__WEBPACK_IMPORTED_MODULE_3__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertSuccess, ['Dashboard Imported', dash.title]);
        (0,lodash__WEBPACK_IMPORTED_MODULE_1__.extend)(dash, res);
        this.setState({
          dashboards: [...this.state.dashboards]
        });
      });
    });

    _defineProperty(this, "remove", dash => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().delete('/api/dashboards/uid/' + dash.uid).then(() => {
        dash.imported = false;
        this.setState({
          dashboards: [...this.state.dashboards]
        });
      });
    });

    this.state = {
      loading: true,
      dashboards: []
    };
  }

  async componentDidMount() {
    const pluginId = this.props.plugin.id;
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get(`/api/plugins/${pluginId}/dashboards`).then(dashboards => {
      this.setState({
        dashboards,
        loading: false
      });
    });
  }

  render() {
    const {
      loading,
      dashboards
    } = this.state;

    if (loading) {
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "loading..."
      }));
    }

    if (!dashboards || !dashboards.length) {
      return _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "No dashboards are included with this plugin"
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_features_datasources_DashboardsTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        dashboards: dashboards,
        onImport: this.import,
        onRemove: this.remove
      })
    });
  }

}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsBody.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsBody": () => (/* binding */ PluginDetailsBody),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _components_VersionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/VersionList.tsx");
/* harmony import */ var _hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginConfig.tsx");
/* harmony import */ var _AppConfigWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/AppConfigWrapper.tsx");
/* harmony import */ var _PluginDashboards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDashboards.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;










function PluginDetailsBody({
  plugin,
  queryParams,
  pageId
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    value: pluginConfig
  } = (0,_hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_5__.usePluginConfig)(plugin);

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_3__.PluginTabIds.OVERVIEW) {
    var _plugin$details$readm, _plugin$details;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.readme, styles.container),
      dangerouslySetInnerHTML: {
        __html: (_plugin$details$readm = (_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.readme) !== null && _plugin$details$readm !== void 0 ? _plugin$details$readm : 'No plugin help or readme markdown file was found'
      }
    });
  }

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_3__.PluginTabIds.VERSIONS) {
    var _plugin$details2;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_VersionList__WEBPACK_IMPORTED_MODULE_4__.VersionList, {
        versions: (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.versions,
        installedVersion: plugin.installedVersion
      })
    });
  }

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_3__.PluginTabIds.CONFIG && pluginConfig !== null && pluginConfig !== void 0 && pluginConfig.angularConfigCtrl) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AppConfigWrapper__WEBPACK_IMPORTED_MODULE_6__.AppConfigCtrlWrapper, {
        app: pluginConfig
      })
    });
  }

  if (pluginConfig !== null && pluginConfig !== void 0 && pluginConfig.configPages) {
    for (const configPage of pluginConfig.configPages) {
      var _configPage$body;

      if (pageId === configPage.id) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: styles.container,
          children: _configPage$body || (_configPage$body = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(configPage.body, {
            plugin: pluginConfig,
            query: queryParams
          }))
        });
      }
    }
  }

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_3__.PluginTabIds.DASHBOARDS && pluginConfig) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PluginDashboards__WEBPACK_IMPORTED_MODULE_7__.PluginDashboards, {
        plugin: pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.meta
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: styles.container,
    children: _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      children: "Page not found."
    }))
  });
}
const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    padding: ${theme.spacing(3, 4)};
  `,
  readme: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    & img {
      max-width: 100%;
    }

    h1,
    h2,
    h3 {
      margin-top: ${theme.spacing(3)};
      margin-bottom: ${theme.spacing(2)};
    }

    *:first-child {
      margin-top: 0;
    }

    li {
      margin-left: ${theme.spacing(2)};
      & > p {
        margin: ${theme.spacing()} 0;
      }
    }
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsDisabledError.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsDisabledError": () => (/* binding */ PluginDetailsDisabledError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _a, _p2, _p3, _p4, _p5;







function PluginDetailsDisabledError({
  className,
  plugin
}) {
  if (!plugin.isDisabled) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
    severity: "error",
    title: "Plugin disabled",
    className: className,
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.PluginPage.disabledInfo,
    children: [renderDescriptionFromError(plugin.error), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: "Please contact your server administrator to get this resolved."
    })), _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/administration/cli/#plugins-commands",
      className: "external-link",
      target: "_blank",
      rel: "noreferrer",
      children: "Read more about managing plugins"
    }))]
  });
}

function renderDescriptionFromError(error) {
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
      return _p3 || (_p3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
      return _p4 || (_p4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    default:
      return _p5 || (_p5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "We failed to run this plugin due to an unkown reason and have therefor disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin."
      }));
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsHeader": () => (/* binding */ PluginDetailsHeader),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _InstallControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/index.tsx");
/* harmony import */ var _PluginDetailsHeaderSignature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsHeaderSignature.tsx");
/* harmony import */ var _PluginDetailsHeaderDependencies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsHeaderDependencies.tsx");
/* harmony import */ var _PluginLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginLogo.tsx");
/* harmony import */ var _Badges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/index.ts");
/* harmony import */ var _GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;













function PluginDetailsHeader({
  plugin,
  currentUrl,
  parentUrl
}) {
  var _plugin$details, _plugin$details2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const latestCompatibleVersion = (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.getLatestCompatibleVersion)((_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.versions);
  const version = plugin.installedVersion || (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: styles.headerContainer,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PluginLogo__WEBPACK_IMPORTED_MODULE_6__.PluginLogo, {
      alt: `${plugin.name} logo`,
      src: plugin.info.logos.small,
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
          object-fit: contain;
          width: 100%;
          height: 68px;
          max-width: 68px;
        `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.headerWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("nav", {
        className: styles.breadcrumb,
        "aria-label": "Breadcrumb",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("ol", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
              className: styles.textUnderline,
              href: parentUrl,
              children: "Plugins"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
              href: currentUrl,
              "aria-current": "page",
              children: plugin.name
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.headerInformationRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          children: plugin.orgName
        }), (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
          href: link.url,
          children: link.name
        }, link.name)), plugin.downloads > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
          children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "cloud-download"
          })), ` ${new Intl.NumberFormat().format(plugin.downloads)}`, ' ']
        }), Boolean(version) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          children: version
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PluginDetailsHeaderSignature__WEBPACK_IMPORTED_MODULE_4__.PluginDetailsHeaderSignature, {
          plugin: plugin
        }), plugin.isDisabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_7__.PluginDisabledBadge, {
          error: plugin.error
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PluginDetailsHeaderDependencies__WEBPACK_IMPORTED_MODULE_5__.PluginDetailsHeaderDependencies, {
        plugin: plugin,
        latestCompatibleVersion: latestCompatibleVersion,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.headerInformationRow, styles.headerInformationRowSecondary)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
        children: plugin.description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        height: "auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_InstallControls__WEBPACK_IMPORTED_MODULE_3__.InstallControls, {
          plugin: plugin,
          latestCompatibleVersion: latestCompatibleVersion
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_8__.GetStartedWithPlugin, {
          plugin: plugin
        })]
      })]
    })]
  });
}
const getStyles = theme => {
  return {
    headerContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      margin-bottom: ${theme.spacing(3)};
      margin-top: ${theme.spacing(3)};
      min-height: 120px;
    `,
    headerWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-left: ${theme.spacing(3)};
    `,
    breadcrumb: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-size: ${theme.typography.h2.fontSize};
      li {
        display: inline;
        list-style: none;
        &::after {
          content: '/';
          padding: 0 0.25ch;
        }
        &:last-child::after {
          content: '';
        }
      }
    `,
    headerInformationRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      align-items: center;
      margin-top: ${theme.spacing()};
      margin-bottom: ${theme.spacing()};
      flex-flow: wrap;
      & > * {
        &::after {
          content: '|';
          padding: 0 ${theme.spacing()};
        }
        &:last-child::after {
          content: '';
          padding-right: 0;
        }
      }
      font-size: ${theme.typography.h4.fontSize};
    `,
    headerInformationRowSecondary: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-size: ${theme.typography.body.fontSize};
    `,
    headerOrgName: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-size: ${theme.typography.h4.fontSize};
    `,
    signature: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin: ${theme.spacing(3)};
      margin-bottom: 0;
    `,
    textUnderline: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      text-decoration: underline;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsHeaderDependencies.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsHeaderDependencies": () => (/* binding */ PluginDetailsHeaderDependencies),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function PluginDetailsHeaderDependencies({
  plugin,
  latestCompatibleVersion,
  className
}) {
  var _plugin$details, _plugin$details2, _plugin$details3;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const pluginDependencies = (_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.pluginDependencies;
  const grafanaDependency = plugin.isInstalled ? (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.grafanaDependency : (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.grafanaDependency) || ((_plugin$details3 = plugin.details) === null || _plugin$details3 === void 0 ? void 0 : _plugin$details3.grafanaDependency);
  const hasNoDependencyInfo = !grafanaDependency && (!pluginDependencies || !pluginDependencies.length);

  if (hasNoDependencyInfo) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.dependencyTitle,
      children: "Dependencies:"
    }), Boolean(grafanaDependency) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "grafana",
        className: styles.icon
      }), "Grafana ", grafanaDependency]
    }), pluginDependencies && pluginDependencies.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: pluginDependencies.map(p => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: _types__WEBPACK_IMPORTED_MODULE_3__.PluginIconName[p.type],
            className: styles.icon
          }), p.name, " ", p.version]
        }, p.name);
      })
    })]
  });
}
const getStyles = theme => {
  return {
    dependencyTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-weight: ${theme.typography.fontWeightBold};
      margin-right: ${theme.spacing(0.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.text.secondary};
      margin-right: ${theme.spacing(0.5)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsHeaderSignature.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsHeaderSignature": () => (/* binding */ PluginDetailsHeaderSignature),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PluginSignatureDetailsBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginSignatureDetailsBadge.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







// Designed to show plugin signature information in the header on the plugin's details page
function PluginDetailsHeaderSignature({
  plugin
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const isSignatureValid = plugin.signature === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.valid;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
      target: "_blank",
      rel: "noreferrer",
      className: styles.link,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureBadge, {
        status: plugin.signature
      })
    }), isSignatureValid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PluginSignatureDetailsBadge__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureDetailsBadge, {
      signatureType: plugin.signatureType,
      signatureOrg: plugin.signatureOrg
    })]
  });
}
const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: inline-flex;
      align-items: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsSignature.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsSignature": () => (/* binding */ PluginDetailsSignature)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _a;







// Designed to show signature information inside the active tab on the plugin's details page
function PluginDetailsSignature({
  className,
  plugin
}) {
  const isSignatureValid = plugin.signature === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.valid;
  const isCore = plugin.signature === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.internal;
  const isDisabled = plugin.isDisabled && isDisabledDueTooSignatureError(plugin.error); // The basic information is already available in the header

  if (isSignatureValid || isCore || isDisabled) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
    severity: "warning",
    title: "Invalid plugin signature",
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.PluginPage.signatureInfo,
    className: className,
    children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can\u2019t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."
    })), _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
      className: "external-link",
      target: "_blank",
      rel: "noreferrer",
      children: "Read more about plugins signing."
    }))]
  });
}

function isDisabledDueTooSignatureError(error) {
  // If the plugin is disabled due to signature error we rely on the disabled
  // error message instad of the warning about the signature.
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginErrorCode.invalidSignature:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginErrorCode.missingSignature:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginErrorCode.modifiedSignature:
      return true;

    default:
      return false;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginLogo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginLogo": () => (/* binding */ PluginLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


function PluginLogo({
  alt,
  className,
  src,
  height
}) {
  // @ts-ignore - react doesn't know about loading attr.
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    src: src,
    className: className,
    alt: alt,
    loading: "lazy",
    height: height
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginSignatureDetailsBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsBadge": () => (/* binding */ DetailsBadge),
/* harmony export */   "PluginSignatureDetailsBadge": () => (/* binding */ PluginSignatureDetailsBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const SIGNATURE_ICONS = {
  [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.grafana]: 'grafana',
  [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.commercial]: 'shield',
  [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.community]: 'shield',
  DEFAULT: 'shield-exclamation'
};
// Shows more information about a valid signature
function PluginSignatureDetailsBadge({
  signatureType,
  signatureOrg = ''
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);

  if (!signatureType && !signatureOrg) {
    return null;
  }

  const signatureTypeText = signatureType === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.grafana ? 'Grafana Labs' : (0,lodash__WEBPACK_IMPORTED_MODULE_2__.capitalize)(signatureType);
  const signatureIcon = SIGNATURE_ICONS[signatureType || ''] || SIGNATURE_ICONS.DEFAULT;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DetailsBadge, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
        className: styles.strong,
        children: "Level:\xA0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        size: "xs",
        name: signatureIcon
      }), "\xA0", signatureTypeText]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DetailsBadge, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
        className: styles.strong,
        children: "Signed by:"
      }), " ", signatureOrg]
    })]
  });
}
const DetailsBadge = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge, {
    color: "green",
    className: styles.badge,
    text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: children
    })
  });
};

const getStyles = theme => ({
  badge: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    background-color: ${theme.colors.background.canvas};
    border-color: ${theme.colors.border.strong};
    color: ${theme.colors.text.secondary};
    margin-left: ${theme.spacing()};
  `,
  strong: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    color: ${theme.colors.text.primary};
  `,
  icon: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-right: ${theme.spacing(0.5)};
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/components/VersionList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionList": () => (/* binding */ VersionList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _thead;








const VersionList = ({
  versions = [],
  installedVersion
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const latestCompatibleVersion = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getLatestCompatibleVersion)(versions);

  if (versions.length === 0) {
    return _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "No version history was found."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
    className: styles.table,
    children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
          children: "Version"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
          children: "Last updated"
        })]
      })
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
      children: versions.map(version => {
        const isInstalledVersion = installedVersion === version.version;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
          children: [isInstalledVersion ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
            className: styles.currentVersion,
            children: [version.version, " (installed version)"]
          }) : version.version === (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
            children: [version.version, " (latest compatible version)"]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
            children: version.version
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
            className: isInstalledVersion ? styles.currentVersion : '',
            children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormatTimeAgo)(version.createdAt)
          })]
        }, version.version);
      })
    })]
  });
};

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    padding: ${theme.spacing(2, 4, 3)};
  `,
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    table-layout: fixed;
    width: 100%;
    td,
    th {
      padding: ${theme.spacing()} 0;
    }
    th {
      font-size: ${theme.typography.h5.fontSize};
    }
  `,
  currentVersion: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    font-weight: ${theme.typography.fontWeightBold};
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/hooks/usePluginConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePluginConfig": () => (/* binding */ usePluginConfig)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/utils.ts");


const usePluginConfig = plugin => {
  return (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
    if (!plugin) {
      return null;
    }

    if (plugin.isInstalled && !plugin.isDisabled) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loadPlugin)(plugin.id);
    }

    return null;
  }, [plugin === null || plugin === void 0 ? void 0 : plugin.id, plugin === null || plugin === void 0 ? void 0 : plugin.isInstalled, plugin === null || plugin === void 0 ? void 0 : plugin.isDisabled]);
};

/***/ }),

/***/ "./public/app/features/plugins/admin/hooks/usePluginDetailsTabs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePluginDetailsTabs": () => (/* binding */ usePluginDetailsTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginConfig.tsx");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");






const usePluginDetailsTabs = (plugin, defaultTabs = []) => {
  const {
    loading,
    error,
    value: pluginConfig
  } = (0,_hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_3__.usePluginConfig)(plugin);
  const isPublished = Boolean(plugin === null || plugin === void 0 ? void 0 : plugin.isPublished);
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  const [tabs, defaultTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const canConfigurePlugins = (0,_permissions__WEBPACK_IMPORTED_MODULE_4__.isOrgAdmin)();
    const tabs = [...defaultTabs];
    let defaultTab;

    if (isPublished) {
      tabs.push({
        label: _types__WEBPACK_IMPORTED_MODULE_2__.PluginTabLabels.VERSIONS,
        icon: 'history',
        id: _types__WEBPACK_IMPORTED_MODULE_2__.PluginTabIds.VERSIONS,
        href: `${pathname}?page=${_types__WEBPACK_IMPORTED_MODULE_2__.PluginTabIds.VERSIONS}`
      });
    } // Not extending the tabs with the config pages if the plugin is not installed


    if (!pluginConfig) {
      defaultTab = _types__WEBPACK_IMPORTED_MODULE_2__.PluginTabIds.OVERVIEW;
      return [tabs, defaultTab];
    }

    if (canConfigurePlugins) {
      if (pluginConfig.meta.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginType.app) {
        var _pluginConfig$meta$in;

        if (pluginConfig.angularConfigCtrl) {
          tabs.push({
            label: 'Config',
            icon: 'cog',
            id: _types__WEBPACK_IMPORTED_MODULE_2__.PluginTabIds.CONFIG,
            href: `${pathname}?page=${_types__WEBPACK_IMPORTED_MODULE_2__.PluginTabIds.CONFIG}`
          });
          defaultTab = _types__WEBPACK_IMPORTED_MODULE_2__.PluginTabIds.CONFIG;
        }

        if (pluginConfig.configPages) {
          for (const page of pluginConfig.configPages) {
            tabs.push({
              label: page.title,
              icon: page.icon,
              id: page.id,
              href: `${pathname}?page=${page.id}`
            });

            if (!defaultTab) {
              defaultTab = page.id;
            }
          }
        }

        if ((_pluginConfig$meta$in = pluginConfig.meta.includes) !== null && _pluginConfig$meta$in !== void 0 && _pluginConfig$meta$in.find(include => include.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginIncludeType.dashboard)) {
          tabs.push({
            label: 'Dashboards',
            icon: 'apps',
            id: _types__WEBPACK_IMPORTED_MODULE_2__.PluginTabIds.DASHBOARDS,
            href: `${pathname}?page=${_types__WEBPACK_IMPORTED_MODULE_2__.PluginTabIds.DASHBOARDS}`
          });
        }
      }
    }

    if (!defaultTab) {
      defaultTab = _types__WEBPACK_IMPORTED_MODULE_2__.PluginTabIds.OVERVIEW;
    }

    return [tabs, defaultTab];
  }, [pluginConfig, defaultTabs, pathname, isPublished]);
  return {
    error,
    loading,
    tabs,
    defaultTab
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/pages/PluginDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginDetails),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _components_PluginDetailsSignature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsSignature.tsx");
/* harmony import */ var _components_PluginDetailsHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsHeader.tsx");
/* harmony import */ var _components_PluginDetailsBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsBody.tsx");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/components/Page.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _hooks_usePluginDetailsTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginDetailsTabs.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _components_PluginDetailsDisabledError__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsDisabledError.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page, _br;




















function PluginDetails({
  match,
  queryParams
}) {
  var _a;

  const {
    params: {
      pluginId = ''
    },
    url
  } = match;
  const parentUrl = url.substring(0, url.lastIndexOf('/'));
  const defaultTabs = [{
    label: _types__WEBPACK_IMPORTED_MODULE_11__.PluginTabLabels.OVERVIEW,
    icon: 'file-alt',
    id: _types__WEBPACK_IMPORTED_MODULE_11__.PluginTabIds.OVERVIEW,
    href: `${url}?page=${_types__WEBPACK_IMPORTED_MODULE_11__.PluginTabIds.OVERVIEW}`
  }];
  const plugin = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_12__.useGetSingle)(pluginId); // fetches the localplugin settings

  const {
    tabs,
    defaultTab
  } = (0,_hooks_usePluginDetailsTabs__WEBPACK_IMPORTED_MODULE_13__.usePluginDetailsTabs)(plugin, defaultTabs);
  const {
    isLoading: isFetchLoading
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_12__.useFetchStatus)();
  const {
    isLoading: isFetchDetailsLoading
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_12__.useFetchDetailsStatus)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const prevTabs = (0,react_use__WEBPACK_IMPORTED_MODULE_17__["default"])(tabs);
  const pageId = queryParams.page || defaultTab; // If an app plugin is uninstalled we need to reset the active tab when the config / dashboards tabs are removed.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const hasUninstalledWithConfigPages = prevTabs && prevTabs.length > tabs.length;
    const isViewingAConfigPage = pageId !== _types__WEBPACK_IMPORTED_MODULE_11__.PluginTabIds.OVERVIEW && pageId !== _types__WEBPACK_IMPORTED_MODULE_11__.PluginTabIds.VERSIONS;

    if (hasUninstalledWithConfigPages && isViewingAConfigPage) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.replace(`${url}?page=${_types__WEBPACK_IMPORTED_MODULE_11__.PluginTabIds.OVERVIEW}`);
    }
  }, [pageId, url, tabs, prevTabs]);

  if (isFetchLoading || isFetchDetailsLoading) {
    return _Page || (_Page = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Loader__WEBPACK_IMPORTED_MODULE_10__.Loader, {})
    }));
  }

  if (!plugin) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui_src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {
      justify: "center",
      align: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        severity: app_types__WEBPACK_IMPORTED_MODULE_14__.AppNotificationSeverity.Warning,
        title: "Plugin not found",
        children: ["That plugin cannot be found. Please check the url is correct or ", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {})), "go to the ", _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("a", {
          href: parentUrl,
          children: "plugin catalog"
        })), "."]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_9__.Page, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_PluginDetailsHeader__WEBPACK_IMPORTED_MODULE_7__.PluginDetailsHeader, {
        currentUrl: `${url}?page=${pageId}`,
        parentUrl: parentUrl,
        plugin: plugin
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TabsBar, {
        children: tabs.map(tab => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tab, {
            label: tab.label,
            href: tab.href,
            icon: tab.icon,
            active: tab.id === pageId
          }, tab.label);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TabContent, {
        className: styles.tabContent,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_PluginDetailsSignature__WEBPACK_IMPORTED_MODULE_6__.PluginDetailsSignature, {
          plugin: plugin,
          className: styles.alert
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_PluginDetailsDisabledError__WEBPACK_IMPORTED_MODULE_15__.PluginDetailsDisabledError, {
          plugin: plugin,
          className: styles.alert
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_PluginDetailsBody__WEBPACK_IMPORTED_MODULE_8__.PluginDetailsBody, {
          queryParams: queryParams,
          plugin: plugin,
          pageId: pageId
        })]
      })]
    })
  });
}
const getStyles = theme => {
  return {
    alert: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin: ${theme.spacing(3)};
      margin-bottom: 0;
    `,
    // Needed due to block formatting context
    tabContent: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      overflow: auto;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisplayMode": () => (/* binding */ useDisplayMode),
/* harmony export */   "useFetchAll": () => (/* binding */ useFetchAll),
/* harmony export */   "useFetchDetails": () => (/* binding */ useFetchDetails),
/* harmony export */   "useFetchDetailsStatus": () => (/* binding */ useFetchDetailsStatus),
/* harmony export */   "useFetchStatus": () => (/* binding */ useFetchStatus),
/* harmony export */   "useGetAll": () => (/* binding */ useGetAll),
/* harmony export */   "useGetAllWithFilters": () => (/* binding */ useGetAllWithFilters),
/* harmony export */   "useGetErrors": () => (/* binding */ useGetErrors),
/* harmony export */   "useGetSingle": () => (/* binding */ useGetSingle),
/* harmony export */   "useInstall": () => (/* binding */ useInstall),
/* harmony export */   "useInstallStatus": () => (/* binding */ useInstallStatus),
/* harmony export */   "useIsRemotePluginsAvailable": () => (/* binding */ useIsRemotePluginsAvailable),
/* harmony export */   "useUninstall": () => (/* binding */ useUninstall),
/* harmony export */   "useUninstallStatus": () => (/* binding */ useUninstallStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/state/selectors.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");






const useGetAllWithFilters = ({
  query = '',
  filterBy = 'installed',
  filterByType = 'all',
  sortBy = _helpers__WEBPACK_IMPORTED_MODULE_5__.Sorters.nameAsc
}) => {
  useFetchAll();
  const filtered = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.find)(query, filterBy, filterByType));
  const {
    isLoading,
    error
  } = useFetchStatus();
  const sortedAndFiltered = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.sortPlugins)(filtered, sortBy);
  return {
    isLoading,
    error,
    plugins: sortedAndFiltered
  };
};
const useGetAll = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAll);
};
const useGetSingle = id => {
  useFetchAll();
  useFetchDetails(id);
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectById)(state, id));
};
const useGetErrors = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPluginErrors);
};
const useInstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (id, version, isUpdating) => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.install)({
    id,
    version,
    isUpdating
  }));
};
const useUninstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return id => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall)(id));
};
const useIsRemotePluginsAvailable = () => {
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchRemotePlugins.typePrefix));
  return error === null;
};
const useFetchStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  return {
    isLoading,
    error
  };
};
const useFetchDetailsStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  return {
    isLoading,
    error
  };
};
const useInstallStatus = () => {
  const isInstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  return {
    isInstalling,
    error
  };
};
const useUninstallStatus = () => {
  const isUninstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  return {
    isUninstalling,
    error
  };
}; // Only fetches in case they were not fetched yet

const useFetchAll = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isNotFetched = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestNotFetched)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isNotFetched && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll)());
  }, []); // eslint-disable-line
};
const useFetchDetails = id => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const plugin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectById)(state, id));
  const isNotFetching = !(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const shouldFetch = isNotFetching && plugin && !plugin.details;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    shouldFetch && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails)(id));
  }, [plugin]); // eslint-disable-line
};
const useDisplayMode = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const displayMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_4__.selectDisplayMode);
  return {
    displayMode,
    setDisplayMode: v => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_2__.setDisplayMode)(v))
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectById": () => (/* binding */ selectById),
/* harmony export */   "selectDisplayMode": () => (/* binding */ selectDisplayMode),
/* harmony export */   "selectIsRequestNotFetched": () => (/* binding */ selectIsRequestNotFetched),
/* harmony export */   "selectIsRequestPending": () => (/* binding */ selectIsRequestPending),
/* harmony export */   "selectItems": () => (/* binding */ selectItems),
/* harmony export */   "selectPluginErrors": () => (/* binding */ selectPluginErrors),
/* harmony export */   "selectRequest": () => (/* binding */ selectRequest),
/* harmony export */   "selectRequestError": () => (/* binding */ selectRequestError),
/* harmony export */   "selectRoot": () => (/* binding */ selectRoot)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");



const selectRoot = state => state.plugins;
const selectItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  items
}) => items);
const selectDisplayMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  settings
}) => settings.displayMode);
const {
  selectAll,
  selectById
} = _reducer__WEBPACK_IMPORTED_MODULE_1__.pluginsAdapter.getSelectors(selectItems);

const selectInstalled = filterBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins.filter(plugin => filterBy === 'installed' ? plugin.isInstalled : !plugin.isCore));

const findByInstallAndType = (filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectInstalled(filterBy), plugins => plugins.filter(plugin => filterByType === 'all' || plugin.type === filterByType));

const findByKeyword = searchBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => {
  if (searchBy === '') {
    return [];
  }

  return plugins.filter(plugin => {
    const fields = [];

    if (plugin.name) {
      fields.push(plugin.name.toLowerCase());
    }

    if (plugin.orgName) {
      fields.push(plugin.orgName.toLowerCase());
    }

    return fields.some(f => f.includes(searchBy.toLowerCase()));
  });
});

const find = (searchBy, filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(findByInstallAndType(filterBy, filterByType), findByKeyword(searchBy), (filteredPlugins, searchedPlugins) => {
  return searchBy === '' ? filteredPlugins : searchedPlugins;
});
const selectPluginErrors = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins ? plugins.filter(p => Boolean(p.error)).map(p => ({
  pluginId: p.id,
  errorCode: p.error
})) : []); // The following selectors are used to get information about the outstanding or completed plugins-related network requests.

const selectRequest = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  requests = {}
}) => requests[actionType]);
const selectIsRequestPending = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Pending);
const selectRequestError = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Rejected ? request === null || request === void 0 ? void 0 : request.error : null);
const selectIsRequestNotFetched = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => request === undefined);

/***/ }),

/***/ "./public/app/features/plugins/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPlugin": () => (/* binding */ loadPlugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _pluginSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/pluginSettings.ts");
/* harmony import */ var _plugin_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");
/* harmony import */ var _importPanelPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/importPanelPlugin.ts");




async function loadPlugin(pluginId) {
  const info = await (0,_pluginSettings__WEBPACK_IMPORTED_MODULE_1__.getPluginSettings)(pluginId);
  let result;

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.app) {
    result = await (0,_plugin_loader__WEBPACK_IMPORTED_MODULE_2__.importAppPlugin)(info);
  }

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource) {
    result = await (0,_plugin_loader__WEBPACK_IMPORTED_MODULE_2__.importDataSourcePlugin)(info);
  }

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.panel) {
    const panelPlugin = await (0,_importPanelPlugin__WEBPACK_IMPORTED_MODULE_3__.importPanelPluginFromMeta)(info);
    result = panelPlugin;
  }

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.renderer) {
    result = {
      meta: info
    };
  }

  if (!result) {
    throw new Error('Unknown Plugin type: ' + info.type);
  }

  return result;
}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUosQ0FBVSwwQkFBMEI2RixJQUFJLENBQUN0RixJQUF6QyxDQUFOO0FBQ0Q7O0FBRUQsU0FBT1MsTUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7QUM1QnlDO0FBQzNCO0FBQ2YsY0FBYyw2Q0FBTTtBQUNwQixJQUFJLGdEQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL0Rhc2hib2FyZHNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9idWlsZENhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9BcHBDb25maWdXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL1BsdWdpbkRpc2FibGVkQmFkZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvUGx1Z2luRW50ZXJwcmlzZUJhZGdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL1BsdWdpbkluc3RhbGxCYWRnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0JhZGdlcy9QbHVnaW5VcGRhdGVBdmFpbGFibGVCYWRnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0JhZGdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL3NoYXJlZFN0eWxlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvR2V0U3RhcnRlZFdpdGhQbHVnaW4vR2V0U3RhcnRlZFdpdGhBcHAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9HZXRTdGFydGVkV2l0aFBsdWdpbi9HZXRTdGFydGVkV2l0aERhdGFTb3VyY2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9HZXRTdGFydGVkV2l0aFBsdWdpbi9HZXRTdGFydGVkV2l0aFBsdWdpbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0dldFN0YXJ0ZWRXaXRoUGx1Z2luL2luZGV4LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9JbnN0YWxsQ29udHJvbHMvRXh0ZXJuYWxseU1hbmFnZWRCdXR0b24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9JbnN0YWxsQ29udHJvbHMvSW5zdGFsbENvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvSW5zdGFsbENvbnRyb2xzL0luc3RhbGxDb250cm9sc0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0luc3RhbGxDb250cm9scy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5EYXNoYm9hcmRzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0JvZHkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5EZXRhaWxzRGlzYWJsZWRFcnJvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNIZWFkZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNTaWduYXR1cmUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5Mb2dvLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luU2lnbmF0dXJlRGV0YWlsc0JhZGdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvVmVyc2lvbkxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vaG9va3MvdXNlUGx1Z2luQ29uZmlnLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2hvb2tzL3VzZVBsdWdpbkRldGFpbHNUYWJzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL3BhZ2VzL1BsdWdpbkRldGFpbHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vc3RhdGUvaG9va3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9zdGF0ZS9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy91dGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtMDAzMjZlNzBiYS8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuMy4yLWEwMzJjYmViMDEtNzM3OTQ2MGY1MS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlUHJldmlvdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmlhbCgpIHtcbiAgY29uc3QgZXhwaXJ5ID0gY29uZmlnLmxpY2Vuc2VJbmZvPy50cmlhbEV4cGlyeTtcbiAgcmV0dXJuICEhKGV4cGlyeSAmJiBleHBpcnkgPiAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFRyaWFsID0gKCkgPT4gaXNUcmlhbCgpICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBsdWdpbkRhc2hib2FyZCB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGRhc2hib2FyZHM6IFBsdWdpbkRhc2hib2FyZFtdO1xuICBvbkltcG9ydDogKGRhc2hib2FyZDogUGx1Z2luRGFzaGJvYXJkLCBvdmVyd3JpdGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIG9uUmVtb3ZlOiAoZGFzaGJvYXJkOiBQbHVnaW5EYXNoYm9hcmQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IERhc2hib2FyZHNUYWJsZTogRkM8UHJvcHM+ID0gKHsgZGFzaGJvYXJkcywgb25JbXBvcnQsIG9uUmVtb3ZlIH0pID0+IHtcbiAgZnVuY3Rpb24gYnV0dG9uVGV4dChkYXNoYm9hcmQ6IFBsdWdpbkRhc2hib2FyZCkge1xuICAgIHJldHVybiBkYXNoYm9hcmQucmV2aXNpb24gIT09IGRhc2hib2FyZC5pbXBvcnRlZFJldmlzaW9uID8gJ1VwZGF0ZScgOiAnUmUtaW1wb3J0JztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZVwiPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7ZGFzaGJvYXJkcy5tYXAoKGRhc2hib2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT17YCR7ZGFzaGJvYXJkLmRhc2hib2FyZElkfS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtMVwiPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJhcHBzXCIgLz5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIHtkYXNoYm9hcmQuaW1wb3J0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtkYXNoYm9hcmQuaW1wb3J0ZWRVcmx9PntkYXNoYm9hcmQudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZGFzaGJvYXJkLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICAgICAgICAgIHshZGFzaGJvYXJkLmltcG9ydGVkID8gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gb25JbXBvcnQoZGFzaGJvYXJkLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICBJbXBvcnRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBvbkltcG9ydChkYXNoYm9hcmQsIHRydWUpfT5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvblRleHQoZGFzaGJvYXJkKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2Rhc2hib2FyZC5pbXBvcnRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJ0cmFzaC1hbHRcIiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZShkYXNoYm9hcmQpfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkc1RhYmxlO1xuIiwiaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgbG9jYXRpb25VdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlV2l0aEJhY2tlbmQsIGdldERhdGFTb3VyY2VTcnYsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXBkYXRlTmF2SW5kZXggfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBnZXREYXRhc291cmNlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvZGF0YXNvdXJjZV9zcnYnO1xuaW1wb3J0IHsgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpbl9sb2FkZXInO1xuaW1wb3J0IHsgZ2V0UGx1Z2luU2V0dGluZ3MgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9wbHVnaW5TZXR0aW5ncyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnksIFRodW5rRGlzcGF0Y2gsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgYnVpbGRDYXRlZ29yaWVzIH0gZnJvbSAnLi9idWlsZENhdGVnb3JpZXMnO1xuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHtcbiAgZGF0YVNvdXJjZUxvYWRlZCxcbiAgZGF0YVNvdXJjZU1ldGFMb2FkZWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQsXG4gIGRhdGFTb3VyY2VzTG9hZGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkLFxuICB0ZXN0RGF0YVNvdXJjZUZhaWxlZCxcbiAgdGVzdERhdGFTb3VyY2VTdGFydGluZyxcbiAgdGVzdERhdGFTb3VyY2VTdWNjZWVkZWQsXG59IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZSwgZ2V0RGF0YVNvdXJjZU1ldGEgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFTb3VyY2VUeXBlc0xvYWRlZFBheWxvYWQge1xuICBwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdO1xuICBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbml0RGF0YVNvdXJjZVNldHRpbmdEZXBlbmRlbmNpZXMge1xuICBsb2FkRGF0YVNvdXJjZTogdHlwZW9mIGxvYWREYXRhU291cmNlO1xuICBsb2FkRGF0YVNvdXJjZU1ldGE6IHR5cGVvZiBsb2FkRGF0YVNvdXJjZU1ldGE7XG4gIGdldERhdGFTb3VyY2U6IHR5cGVvZiBnZXREYXRhU291cmNlO1xuICBnZXREYXRhU291cmNlTWV0YTogdHlwZW9mIGdldERhdGFTb3VyY2VNZXRhO1xuICBpbXBvcnREYXRhU291cmNlUGx1Z2luOiB0eXBlb2YgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyB7XG4gIGdldERhdGFzb3VyY2VTcnY6IHR5cGVvZiBnZXREYXRhU291cmNlU3J2O1xuICBnZXRCYWNrZW5kU3J2OiB0eXBlb2YgZ2V0QmFja2VuZFNydjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXREYXRhU291cmNlU2V0dGluZ3MgPSAoXG4gIHBhZ2VJZDogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyA9IHtcbiAgICBsb2FkRGF0YVNvdXJjZSxcbiAgICBsb2FkRGF0YVNvdXJjZU1ldGEsXG4gICAgZ2V0RGF0YVNvdXJjZSxcbiAgICBnZXREYXRhU291cmNlTWV0YSxcbiAgICBpbXBvcnREYXRhU291cmNlUGx1Z2luLFxuICB9XG4pOiBUaHVua1Jlc3VsdDx2b2lkPiA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgaWYgKCFwYWdlSWQpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQobmV3IEVycm9yKCdJbnZhbGlkIElEJykpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9hZGVkRGF0YVNvdXJjZSA9IGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZShwYWdlSWQpKTtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZU1ldGEobG9hZGVkRGF0YVNvdXJjZSkpO1xuXG4gICAgICAvLyBoYXZlIHdlIGFscmVhZHkgbG9hZGVkIHRoZSBwbHVnaW4gdGhlbiB3ZSBjYW4gc2tpcCB0aGUgc3RlcHMgYmVsb3c/XG4gICAgICBpZiAoZ2V0U3RhdGUoKS5kYXRhU291cmNlU2V0dGluZ3MucGx1Z2luKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIHBhZ2VJZCk7XG4gICAgICBjb25zdCBkYXRhU291cmNlTWV0YSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlTWV0YShnZXRTdGF0ZSgpLmRhdGFTb3VyY2VzLCBkYXRhU291cmNlIS50eXBlKTtcbiAgICAgIGNvbnN0IGltcG9ydGVkUGx1Z2luID0gYXdhaXQgZGVwZW5kZW5jaWVzLmltcG9ydERhdGFTb3VyY2VQbHVnaW4oZGF0YVNvdXJjZU1ldGEpO1xuXG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkKGltcG9ydGVkUGx1Z2luKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKGVycikpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RGF0YVNvdXJjZSA9IChcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyA9IHtcbiAgICBnZXREYXRhc291cmNlU3J2LFxuICAgIGdldEJhY2tlbmRTcnYsXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBkc0FwaSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXREYXRhc291cmNlU3J2KCkuZ2V0KGRhdGFTb3VyY2VOYW1lKTtcblxuICAgIGlmICghZHNBcGkudGVzdERhdGFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nKCkpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS53aXRoTm9CYWNrZW5kQ2FjaGUoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHNBcGkudGVzdERhdGFzb3VyY2UoKTtcblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZChyZXN1bHQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCB7IHN0YXR1c1RleHQsIG1lc3NhZ2U6IGVyck1lc3NhZ2UsIGRldGFpbHMsIGRhdGEgfSA9IGVycjtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyTWVzc2FnZSB8fCBkYXRhPy5tZXNzYWdlIHx8ICdIVFRQIGVycm9yICcgKyBzdGF0dXNUZXh0O1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlRmFpbGVkKHsgbWVzc2FnZSwgZGV0YWlscyB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9kYXRhc291cmNlcycpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZSh1aWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGF3YWl0IGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkKTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VMb2FkZWQoZGF0YVNvdXJjZSkpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VNZXRhKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBsdWdpbkluZm8gPSAoYXdhaXQgZ2V0UGx1Z2luU2V0dGluZ3MoZGF0YVNvdXJjZS50eXBlKSkgYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gICAgY29uc3QgcGx1Z2luID0gYXdhaXQgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihwbHVnaW5JbmZvKTtcbiAgICBjb25zdCBpc0JhY2tlbmQgPSBwbHVnaW4uRGF0YVNvdXJjZUNsYXNzLnByb3RvdHlwZSBpbnN0YW5jZW9mIERhdGFTb3VyY2VXaXRoQmFja2VuZDtcbiAgICBjb25zdCBtZXRhID0ge1xuICAgICAgLi4ucGx1Z2luSW5mbyxcbiAgICAgIGlzQmFja2VuZDogcGx1Z2luSW5mby5iYWNrZW5kIHx8IGlzQmFja2VuZCxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZU1ldGFMb2FkZWQobWV0YSkpO1xuXG4gICAgcGx1Z2luLm1ldGEgPSBtZXRhO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZSwgcGx1Z2luKSkpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldCBkYXRhIHNvdXJjZSBieSB1aWQgb3IgaWQsIGlmIG9sZCBpZCBkZXRlY3RlZCBoYW5kbGVzIHJlZGlyZWN0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+IHtcbiAgLy8gVHJ5IGZpcnN0IHdpdGggdWlkIGFwaVxuICB0cnkge1xuICAgIGNvbnN0IGJ5VWlkID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy91aWQvJHt1aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoYnlVaWQub2spIHtcbiAgICAgIHJldHVybiBieVVpZC5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBsb29rdXAgZGF0YSBzb3VyY2UgYnkgdWlkJywgZXJyKTtcbiAgfVxuXG4gIC8vIHRyeSBsb29rdXAgYnkgb2xkIGRiIGlkXG4gIGNvbnN0IGlkID0gdHlwZW9mIHVpZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh1aWQsIDEwKSA6IHVpZDtcbiAgaWYgKCFOdW1iZXIuaXNOYU4oaWQpKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzLyR7aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBJZiB0aGUgdWlkIGlzIGEgbnVtYmVyLCB0aGVuIHRoaXMgaXMgYSByZWZyZXNoIG9uIG9uZSBvZiB0aGUgc2V0dGluZ3MgdGFic1xuICAgIC8vIGFuZCB3ZSBjYW4gcmV0dXJuIHRoZSByZXNwb25zZSBkYXRhXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHR5cGVvZiB1aWQgPT09ICdudW1iZXInICYmIHJlc3BvbnNlLmRhdGEuaWQgPT09IHVpZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgLy8gTm90IGlkZWFsIHRvIGRvIGEgZnVsbCBwYWdlIHJlbG9hZCBoZXJlIGJ1dCBzbyB0cmlja3kgdG8gaGFuZGxlIHRoaXNcbiAgICAvLyBvdGhlcndpc2UgV2UgY2FuIHVwZGF0ZSB0aGUgbG9jYXRpb24gdXNpbmcgcmVhY3Qgcm91dGVyLCBidXQgbmVlZCB0b1xuICAgIC8vIGZ1bGx5IHJlbG9hZCB0aGUgcm91dGUgYXMgdGhlIG5hdiBtb2RlbCBwYWdlIGluZGV4IGlzIG5vdCBtYXRjaGluZyB3aXRoXG4gICAgLy8gdGhlIHVybCBpbiB0aGF0IGNhc2UuIEFuZCByZWFjdCByb3V0ZXIgaGFzIG5vIHdheSB0byB1bm1vdW50IHJlbW91bnQgYVxuICAgIC8vIHJvdXRlXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLmRhdGEuaWQudG9TdHJpbmcoKSA9PT0gdWlkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uVXRpbC5hc3N1cmVCYXNlVXJsKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3BvbnNlLmRhdGEudWlkfWApO1xuICAgICAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5nczsgLy8gYXZvaWRzIGZsYXNoaW5nIGFuIGVycm9yXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhU291cmNlKHBsdWdpbjogRGF0YVNvdXJjZVBsdWdpbk1ldGEpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZERhdGFTb3VyY2VzKCkpO1xuXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2VzO1xuXG4gICAgY29uc3QgbmV3SW5zdGFuY2UgPSB7XG4gICAgICBuYW1lOiBwbHVnaW4ubmFtZSxcbiAgICAgIHR5cGU6IHBsdWdpbi5pZCxcbiAgICAgIGFjY2VzczogJ3Byb3h5JyxcbiAgICAgIGlzRGVmYXVsdDogZGF0YVNvdXJjZXMubGVuZ3RoID09PSAwLFxuICAgIH07XG5cbiAgICBpZiAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKSkge1xuICAgICAgbmV3SW5zdGFuY2UubmFtZSA9IGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9kYXRhc291cmNlcycsIG5ld0luc3RhbmNlKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXN1bHQuZGF0YXNvdXJjZS51aWR9YCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZVBsdWdpbnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkKCkpO1xuICAgIGNvbnN0IHBsdWdpbnMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsdWdpbnMnLCB7IGVuYWJsZWQ6IDEsIHR5cGU6ICdkYXRhc291cmNlJyB9KTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnMpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkKHsgcGx1Z2lucywgY2F0ZWdvcmllcyB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWAsIGRhdGFTb3VyY2UpOyAvLyBieSBVSUQgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGxvYWREYXRhU291cmNlKGRhdGFTb3VyY2UudWlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEYXRhU291cmNlKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlO1xuXG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9kYXRhc291cmNlcycpO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgSXRlbVdpdGhOYW1lIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUV4aXRzKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiAoXG4gICAgZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YVNvdXJjZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9KS5sZW5ndGggPiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV3TmFtZShkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICAvLyBOZWVkIHRvIGxvb3AgdGhyb3VnaCBjdXJyZW50IGRhdGEgc291cmNlcyB0byBtYWtlIHN1cmVcbiAgLy8gdGhlIG5hbWUgZG9lc24ndCBleGlzdFxuICB3aGlsZSAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuYW1lKSkge1xuICAgIC8vIElmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGRvZXNuJ3QgZW5kIHdpdGggJy14J1xuICAgIC8vIHdlIGNhbiBhZGQgLTEgdG8gdGhlIG5hbWUgYW5kIGJlIGRvbmUuXG4gICAgaWYgKCFuYW1lSGFzU3VmZml4KG5hbWUpKSB7XG4gICAgICBuYW1lID0gYCR7bmFtZX0tMWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGVuZHMgd2l0aCAnLXgnXG4gICAgICAvLyB3ZSBjYW4gdHJ5IHRvIGluY3JlbWVudCB0aGUgbGFzdCBkaWdpdCB1bnRpbCB0aGUgbmFtZSBpcyB1bmlxdWVcblxuICAgICAgLy8gcmVtb3ZlIHRoZSAneCcgcGFydCBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgbnVtYmVyXG4gICAgICBuYW1lID0gYCR7Z2V0TmV3TmFtZShuYW1lKX0ke2luY3JlbWVudExhc3REaWdpdChnZXRMYXN0RGlnaXQobmFtZSkpfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIG5hbWVIYXNTdWZmaXgobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLmVuZHNXaXRoKCctJywgbmFtZS5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdERpZ2l0KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gcGFyc2VJbnQobmFtZS5zbGljZSgtMSksIDEwKTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50TGFzdERpZ2l0KGRpZ2l0OiBudW1iZXIpIHtcbiAgcmV0dXJuIGlzTmFOKGRpZ2l0KSA/IDEgOiBkaWdpdCArIDE7XG59XG5cbmZ1bmN0aW9uIGdldE5ld05hbWUobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnNsaWNlKDAsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKTogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSA9IFtcbiAgICB7IGlkOiAndHNkYicsIHRpdGxlOiAnVGltZSBzZXJpZXMgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnbG9nZ2luZycsIHRpdGxlOiAnTG9nZ2luZyAmIGRvY3VtZW50IGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3RyYWNpbmcnLCB0aXRsZTogJ0Rpc3RyaWJ1dGVkIHRyYWNpbmcnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdzcWwnLCB0aXRsZTogJ1NRTCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2Nsb3VkJywgdGl0bGU6ICdDbG91ZCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2VudGVycHJpc2UnLCB0aXRsZTogJ0VudGVycHJpc2UgcGx1Z2lucycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2lvdCcsIHRpdGxlOiAnSW5kdXN0cmlhbCAmIElvVCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ290aGVyJywgdGl0bGU6ICdPdGhlcnMnLCBwbHVnaW5zOiBbXSB9LFxuICBdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlJbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5PiA9IHt9O1xuICBjb25zdCBwbHVnaW5JbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbk1ldGE+ID0ge307XG4gIGNvbnN0IGVudGVycHJpc2VQbHVnaW5zID0gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk7XG5cbiAgLy8gYnVpbGQgaW5kaWNlc1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjYXRlZ29yeUluZGV4W2NhdGVnb3J5LmlkXSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIGNvbnN0IGVudGVycHJpc2VQbHVnaW4gPSBlbnRlcnByaXNlUGx1Z2lucy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uaWQpO1xuICAgIC8vIEZvcmNlIGNhdGVnb3J5IGZvciBlbnRlcnByaXNlIHBsdWdpbnNcbiAgICBpZiAocGx1Z2luLmVudGVycHJpc2UgfHwgZW50ZXJwcmlzZVBsdWdpbikge1xuICAgICAgcGx1Z2luLmNhdGVnb3J5ID0gJ2VudGVycHJpc2UnO1xuICAgICAgcGx1Z2luLnVubGljZW5zZWQgPSAhZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpO1xuICAgICAgcGx1Z2luLmluZm8ubGlua3MgPSBlbnRlcnByaXNlUGx1Z2luPy5pbmZvPy5saW5rcyB8fCBwbHVnaW4uaW5mby5saW5rcztcbiAgICB9XG5cbiAgICAvLyBGaXggbGluayBuYW1lXG4gICAgaWYgKHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgcGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgICAgbGluay5uYW1lID0gJ0xlYXJuIG1vcmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uY2F0ZWdvcnkpIHx8IGNhdGVnb3J5SW5kZXhbJ290aGVyJ107XG4gICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgLy8gYWRkIHRvIHBsdWdpbiBpbmRleFxuICAgIHBsdWdpbkluZGV4W3BsdWdpbi5pZF0gPSBwbHVnaW47XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5cbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdjbG91ZCcpIHtcbiAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCkpO1xuICAgIH1cblxuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpbnNcbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdlbnRlcnByaXNlJykge1xuICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgZW50ZXJwcmlzZVBsdWdpbnMpIHtcbiAgICAgICAgaWYgKCFwbHVnaW5JbmRleFtwbHVnaW4uaWRdKSB7XG4gICAgICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0UGx1Z2lucyhjYXRlZ29yeS5wbHVnaW5zKTtcbiAgfVxuXG4gIC8vIE9ubHkgc2hvdyBjYXRlZ29yaWVzIHdpdGggcGx1Z2luc1xuICByZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoKGMpID0+IGMucGx1Z2lucy5sZW5ndGggPiAwKTtcbn1cblxuZnVuY3Rpb24gc29ydFBsdWdpbnMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSkge1xuICBjb25zdCBzb3J0aW5nUnVsZXM6IHsgW2lkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBwcm9tZXRoZXVzOiAxMDAsXG4gICAgZ3JhcGhpdGU6IDk1LFxuICAgIGxva2k6IDkwLFxuICAgIG15c3FsOiA4MCxcbiAgICBqYWVnZXI6IDEwMCxcbiAgICBwb3N0Z3JlczogNzksXG4gICAgZ2Nsb3VkOiAtMSxcbiAgfTtcblxuICBwbHVnaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhU29ydCA9IHNvcnRpbmdSdWxlc1thLmlkXSB8fCAwO1xuICAgIGNvbnN0IGJTb3J0ID0gc29ydGluZ1J1bGVzW2IuaWRdIHx8IDA7XG4gICAgaWYgKGFTb3J0ID4gYlNvcnQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGFTb3J0IDwgYlNvcnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSB7XG4gIHJldHVybiBbXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuaycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBTcGx1bmsgbG9ncycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc3BsdW5rX2xvZ29fMTI4LnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtb3JhY2xlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ09yYWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBPcmFjbGUgU1FMJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9vcmFjbGUucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1keW5hdHJhY2UtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnRHluYXRyYWNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIER5bmF0cmFjZSBkYXRhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9keW5hdHJhY2UucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zZXJ2aWNlbm93LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXJ2aWNlTm93IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU2VydmljZU5vdycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2VydmljZW5vdy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWRhdGFkb2ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RhdGFEb2cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdEYXRhRG9nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9kYXRhZG9nLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbmV3cmVsaWMtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ05ldyBSZWxpYyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ05ldyBSZWxpYycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbmV3cmVsaWMuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1tb25nb2RiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdNb25nb0RCIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTW9uZ29EQicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbW9uZ29kYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNub3dmbGFrZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU25vd2ZsYWtlIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU25vd2ZsYWtlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zbm93Zmxha2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS13YXZlZnJvbnQtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhdmVmcm9udCBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1dhdmVmcm9udCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvd2F2ZWZyb250LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2Rsb3BlczctYXBwZHluYW1pY3MtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcER5bmFtaWNzIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnQXBwRHluYW1pY3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2FwcGR5bmFtaWNzLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FwaGFuYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU0FQIEhBTkHCriBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NBUCBIQU5Bwq4nLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhcF9oYW5hLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtaG9uZXljb21iLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdIb25leWNvbWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvaG9uZXljb21iLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FsZXNmb3JjZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2FsZXNmb3JjZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU2FsZXNmb3JjZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FsZXNmb3JjZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWppcmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ppcmEgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0ppcmEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2ppcmFfbG9nby5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWdpdGxhYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnR2l0TGFiIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdHaXRMYWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2dpdGxhYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1tb25pdG9yaW5nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTaWduYWxGeCBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rIEluZnJhc3RydWN0dXJlIE1vbml0b3JpbmcnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NpZ25hbGZ4LWxvZ28uc3ZnJyxcbiAgICB9KSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbigpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6ICdnY2xvdWQnLFxuICAgIG5hbWU6ICdHcmFmYW5hIENsb3VkJyxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246ICdIb3N0ZWQgR3JhcGhpdGUsIFByb21ldGhldXMsIGFuZCBMb2tpJyxcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiAncHVibGljL2ltZy9ncmFmYW5hX2ljb24uc3ZnJywgbGFyZ2U6ICdhc2QnIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2dyYWZhbmEuY29tL3Byb2R1Y3RzL2Nsb3VkLycsXG4gICAgICAgICAgbmFtZTogJ0xlYXJuIG1vcmUnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEdldFBoYW50b21QbHVnaW5PcHRpb25zIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWdVcmw6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0UGhhbnRvbVBsdWdpbihvcHRpb25zOiBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogb3B0aW9ucy5pZCxcbiAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgbG9nb3M6IHsgc21hbGw6IG9wdGlvbnMuaW1nVXJsLCBsYXJnZTogb3B0aW9ucy5pbWdVcmwgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogY29uZmlnLnBsdWdpbkNhdGFsb2dVUkwgKyBvcHRpb25zLmlkLFxuICAgICAgICAgIG5hbWU6ICdJbnN0YWxsIG5vdycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVNldHRpbmdzLCBQbHVnaW5UeXBlLCBQbHVnaW5JbmNsdWRlLCBOYXZNb2RlbCwgTmF2TW9kZWxJdGVtIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBQcm9CYWRnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVXBncmFkZS9Qcm9CYWRnZSc7XG5pbXBvcnQgeyBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJy4uL3NldHRpbmdzL1BsdWdpblNldHRpbmdzJztcbmltcG9ydCB7IGhpZ2hsaWdodFRyaWFsIH0gZnJvbSAnLi4vLi4vYWRtaW4vdXRpbHMnO1xuXG5jb25zdCBsb2FkaW5nRFNUeXBlID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROYXZNb2RlbChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MsIHBsdWdpbjogR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4pOiBOYXZNb2RlbEl0ZW0ge1xuICBjb25zdCBwbHVnaW5NZXRhID0gcGx1Z2luLm1ldGE7XG4gIGNvbnN0IGhpZ2hsaWdodHNFbmFibGVkID0gY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuICBjb25zdCBuYXZNb2RlbDogTmF2TW9kZWxJdGVtID0ge1xuICAgIGltZzogcGx1Z2luTWV0YS5pbmZvLmxvZ29zLmxhcmdlLFxuICAgIGlkOiAnZGF0YXNvdXJjZS0nICsgZGF0YVNvdXJjZS51aWQsXG4gICAgc3ViVGl0bGU6IGBUeXBlOiAke3BsdWdpbk1ldGEubmFtZX1gLFxuICAgIHVybDogJycsXG4gICAgdGV4dDogZGF0YVNvdXJjZS5uYW1lLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ0RhdGEgU291cmNlcycsIHVybDogJ2RhdGFzb3VyY2VzJyB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBpY29uOiAnc2xpZGVycy12LWFsdCcsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1zZXR0aW5ncy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBpZiAocGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBwYWdlLnRpdGxlLFxuICAgICAgICBpY29uOiBwYWdlLmljb24sXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vP3BhZ2U9JHtwYWdlLmlkfWAsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1wYWdlLSR7cGFnZS5pZH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBsdWdpbk1ldGEuaW5jbHVkZXMgJiYgaGFzRGFzaGJvYXJkcyhwbHVnaW5NZXRhLmluY2x1ZGVzKSAmJiBjb250ZXh0U3J2Lmhhc1JvbGUoJ0FkbWluJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaWNvbjogJ2FwcHMnLFxuICAgICAgaWQ6IGBkYXRhc291cmNlLWRhc2hib2FyZHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgdGV4dDogJ0Rhc2hib2FyZHMnLFxuICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9kYXNoYm9hcmRzYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlzTG9hZGluZ05hdiA9IGRhdGFTb3VyY2UudHlwZSA9PT0gbG9hZGluZ0RTVHlwZTtcblxuICBjb25zdCBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtcGVybWlzc2lvbnMtYmFkZ2UnO1xuICBjb25zdCBkc1Blcm1pc3Npb25zOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnbG9jaycsXG4gICAgaWQ6IGBkYXRhc291cmNlLXBlcm1pc3Npb25zLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnUGVybWlzc2lvbnMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vcGVybWlzc2lvbnNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBkc1Blcm1pc3Npb25zLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdkc3Blcm1pc3Npb25zJykpIHtcbiAgICBpZiAoY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQpKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChkc1Blcm1pc3Npb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmRzUGVybWlzc2lvbnMsXG4gICAgICB1cmw6IGRzUGVybWlzc2lvbnMudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYW5hbHl0aWNzRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1pbnNpZ2h0cy1iYWRnZSc7XG4gIGNvbnN0IGFuYWx5dGljczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2luZm8tY2lyY2xlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtaW5zaWdodHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdJbnNpZ2h0cycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9pbnNpZ2h0c2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGFuYWx5dGljcy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2FuYWx5dGljcycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goYW5hbHl0aWNzKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uYW5hbHl0aWNzLFxuICAgICAgdXJsOiBhbmFseXRpY3MudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNhY2hpbmdFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLXF1ZXJ5LWNhY2hpbmctYmFkZ2UnO1xuXG4gIGNvbnN0IGNhY2hpbmc6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdkYXRhYmFzZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWNhY2hlLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnQ2FjaGUnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vY2FjaGVgLFxuICAgIGhpZGVGcm9tVGFiczogIXBsdWdpbk1ldGEuaXNCYWNrZW5kIHx8ICFjb25maWcuY2FjaGluZy5lbmFibGVkLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBjYWNoaW5nLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2NhY2hpbmcnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGNhY2hpbmcpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5jYWNoaW5nLFxuICAgICAgdXJsOiBjYWNoaW5nLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZU5hdihtYWluOiBOYXZNb2RlbEl0ZW0sIHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGxldCBub2RlOiBOYXZNb2RlbEl0ZW0gPSB7IHRleHQ6ICcnIH07XG5cbiAgLy8gZmluZCBhY3RpdmUgcGFnZVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1haW4uY2hpbGRyZW4hKSB7XG4gICAgaWYgKGNoaWxkLmlkIS5pbmRleE9mKHBhZ2VOYW1lKSA+IDApIHtcbiAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlID0gY2hpbGQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbm9kZSEsXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYocGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgY29uc3QgbWFpbiA9IGJ1aWxkTmF2TW9kZWwoXG4gICAge1xuICAgICAgYWNjZXNzOiAnJyxcbiAgICAgIGJhc2ljQXV0aDogZmFsc2UsXG4gICAgICBiYXNpY0F1dGhVc2VyOiAnJyxcbiAgICAgIGJhc2ljQXV0aFBhc3N3b3JkOiAnJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICBkYXRhYmFzZTogJycsXG4gICAgICBpZDogMSxcbiAgICAgIHVpZDogJ3gnLFxuICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcbiAgICAgIGpzb25EYXRhOiB7IGF1dGhUeXBlOiAnY3JlZGVudGlhbHMnLCBkZWZhdWx0UmVnaW9uOiAnZXUtd2VzdC0yJyB9LFxuICAgICAgbmFtZTogJ0xvYWRpbmcnLFxuICAgICAgb3JnSWQ6IDEsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICB0eXBlOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZU5hbWU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTG9nb1VybDogJ3B1YmxpYy9pbWcvaWNuLWRhdGFzb3VyY2Uuc3ZnJyxcbiAgICAgIHVybDogJycsXG4gICAgICB1c2VyOiAnJyxcbiAgICAgIHNlY3VyZUpzb25GaWVsZHM6IHt9LFxuICAgIH0sXG4gICAge1xuICAgICAgbWV0YToge1xuICAgICAgICBpZDogJzEnLFxuICAgICAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgbGlua3M6IFt7IG5hbWU6ICcnLCB1cmw6ICcnIH1dLFxuICAgICAgICAgIGxvZ29zOiB7XG4gICAgICAgICAgICBsYXJnZTogJycsXG4gICAgICAgICAgICBzbWFsbDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICAgICAgdXBkYXRlZDogJycsXG4gICAgICAgICAgdmVyc2lvbjogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVzOiBbXSxcbiAgICAgICAgbW9kdWxlOiAnJyxcbiAgICAgICAgYmFzZVVybDogJycsXG4gICAgICB9LFxuICAgIH0gYXMgYW55XG4gICk7XG5cbiAgcmV0dXJuIGdldERhdGFTb3VyY2VOYXYobWFpbiwgcGFnZU5hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNEYXNoYm9hcmRzKGluY2x1ZGVzOiBQbHVnaW5JbmNsdWRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBpbmNsdWRlcy5maW5kKChpbmNsdWRlKSA9PiB7XG4gICAgICByZXR1cm4gaW5jbHVkZS50eXBlID09PSAnZGFzaGJvYXJkJztcbiAgICB9KSAhPT0gdW5kZWZpbmVkXG4gICk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBVcmxRdWVyeVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlc1N0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0YXNvdXJjZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5kYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncykgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KGRhdGFTb3VyY2UubmFtZSkgfHwgcmVnZXgudGVzdChkYXRhU291cmNlLmRhdGFiYXNlKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UudHlwZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VQbHVnaW5zID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5kYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5wbHVnaW5zLmZpbHRlcigodHlwZTogRGF0YVNvdXJjZVBsdWdpbk1ldGEpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh0eXBlLm5hbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlLCBkYXRhU291cmNlSWQ6IFVybFF1ZXJ5VmFsdWUpOiBEYXRhU291cmNlU2V0dGluZ3MgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZS51aWQgPT09IGRhdGFTb3VyY2VJZCkge1xuICAgIHJldHVybiBzdGF0ZS5kYXRhU291cmNlO1xuICB9XG4gIHJldHVybiB7fSBhcyBEYXRhU291cmNlU2V0dGluZ3M7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZU1ldGEgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIHR5cGU6IHN0cmluZyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhID0+IHtcbiAgaWYgKHN0YXRlLmRhdGFTb3VyY2VNZXRhLmlkID09PSB0eXBlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VNZXRhO1xuICB9XG5cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VQbHVnaW5NZXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUubGF5b3V0TW9kZTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc0NvdW50ID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0NvdW50O1xuIiwiLy8gTGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsb25lRGVlcCwgZXh0ZW5kIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGx1Z2luTWV0YSwgQXBwUGx1Z2luLCBkZXByZWNhdGlvbldhcm5pbmcgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFuZ3VsYXJDb21wb25lbnQsIGdldEFuZ3VsYXJMb2FkZXIsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXBwOiBBcHBQbHVnaW47XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGFuZ3VsYXJDdHJsOiBBbmd1bGFyQ29tcG9uZW50IHwgbnVsbDtcbiAgcmVmcmVzaDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnQ3RybFdyYXBwZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICAvL0B0cy1pZ25vcmVcbiAgbW9kZWw6IFBsdWdpbk1ldGE7XG5cbiAgLy8gTmVlZGVkIGZvciBhbmd1bGFyIHNjb3BlXG4gIHByZVVwZGF0ZUhvb2sgPSAoKSA9PiBQcm9taXNlLnJlc29sdmUoKTtcbiAgcG9zdFVwZGF0ZUhvb2sgPSAoKSA9PiBQcm9taXNlLnJlc29sdmUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuZ3VsYXJDdHJsOiBudWxsLFxuICAgICAgcmVmcmVzaDogMCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gRm9yY2UgYSByZWxvYWQgYWZ0ZXIgdGhlIGZpcnN0IG1vdW50IC0tIGlzIHRoZXJlIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzP1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZnJlc2g6IHRoaXMuc3RhdGUucmVmcmVzaCArIDEgfSk7XG4gICAgfSwgNSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wcykge1xuICAgIGlmICghdGhpcy5lbGVtZW50IHx8IHRoaXMuc3RhdGUuYW5ndWxhckN0cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgYSBjb3B5IG9mIHRoZSBtZXRhXG4gICAgdGhpcy5tb2RlbCA9IGNsb25lRGVlcCh0aGlzLnByb3BzLmFwcC5tZXRhKTtcblxuICAgIGNvbnN0IGxvYWRlciA9IGdldEFuZ3VsYXJMb2FkZXIoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICc8cGx1Z2luLWNvbXBvbmVudCB0eXBlPVwiYXBwLWNvbmZpZy1jdHJsXCI+PC9wbHVnaW4tY29tcG9uZW50Pic7XG4gICAgY29uc3Qgc2NvcGVQcm9wcyA9IHtcbiAgICAgIGN0cmw6IHRoaXMsXG4gICAgICAvLyB1c2VkIGJ5IGFuZ3VsYXIgaW5qZWN0b3JNb25rZXlQYXRjaCB0byBkZXRlY3QgdGhpcyBzY2VuYXJpb1xuICAgICAgaXNBcHBDb25maWdDdHJsOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgYW5ndWxhckN0cmwgPSBsb2FkZXIubG9hZCh0aGlzLmVsZW1lbnQsIHNjb3BlUHJvcHMsIHRlbXBsYXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBhbmd1bGFyQ3RybCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWw7XG5cbiAgICBjb25zdCB3aXRoUmlnaHRNYXJnaW4gPSBjc3MoeyBtYXJnaW5SaWdodDogJzhweCcgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiByZWY9eyhlbGVtZW50KSA9PiAodGhpcy5lbGVtZW50ID0gZWxlbWVudCl9IC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge21vZGVsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIHshbW9kZWwuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmVuYWJsZX0gY2xhc3NOYW1lPXt3aXRoUmlnaHRNYXJnaW59PlxuICAgICAgICAgICAgICAgIEVuYWJsZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bW9kZWwuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnVwZGF0ZX0gY2xhc3NOYW1lPXt3aXRoUmlnaHRNYXJnaW59PlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bW9kZWwuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBjbGFzc05hbWU9e3dpdGhSaWdodE1hcmdpbn0+XG4gICAgICAgICAgICAgICAgRGlzYWJsZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDb3BpZWQgZnJvbSBwbHVnaW5fZWRpdF9jdHJsXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB1cGRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGx1Z2luSWQgPSB0aGlzLm1vZGVsLmlkO1xuXG4gICAgdGhpcy5wcmVVcGRhdGVIb29rKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlQ21kID0gZXh0ZW5kKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMubW9kZWwuZW5hYmxlZCxcbiAgICAgICAgICAgIHBpbm5lZDogdGhpcy5tb2RlbC5waW5uZWQsXG4gICAgICAgICAgICBqc29uRGF0YTogdGhpcy5tb2RlbC5qc29uRGF0YSxcbiAgICAgICAgICAgIHNlY3VyZUpzb25EYXRhOiB0aGlzLm1vZGVsLnNlY3VyZUpzb25EYXRhLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge31cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL3BsdWdpbnMvJHtwbHVnaW5JZH0vc2V0dGluZ3NgLCB1cGRhdGVDbWQpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHRoaXMucG9zdFVwZGF0ZUhvb2spXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICB9KTtcbiAgfTtcblxuICBzZXRQcmVVcGRhdGVIb29rID0gKGNhbGxiYWNrOiAoKSA9PiBhbnkpID0+IHtcbiAgICB0aGlzLnByZVVwZGF0ZUhvb2sgPSBjYWxsYmFjaztcbiAgfTtcblxuICBzZXRQb3N0VXBkYXRlSG9vayA9IChjYWxsYmFjazogKCkgPT4gYW55KSA9PiB7XG4gICAgdGhpcy5wb3N0VXBkYXRlSG9vayA9IGNhbGxiYWNrO1xuICB9O1xuXG4gIC8vIFN0dWIgdG8gYXZvaWQgdW5rbm93biBmdW5jdGlvbiBpbiBsZWdhY3kgY29kZVxuICBpbXBvcnREYXNoYm9hcmRzID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGRlcHJlY2F0aW9uV2FybmluZygnQXBwQ29uZmlnJywgJ2ltcG9ydERhc2hib2FyZHMoKScpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBlbmFibGUgPSAoKSA9PiB7XG4gICAgdGhpcy5tb2RlbC5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGVsLnBpbm5lZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfTtcblxuICBkaXNhYmxlID0gKCkgPT4ge1xuICAgIHRoaXMubW9kZWwuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubW9kZWwucGlubmVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQbHVnaW5FcnJvckNvZGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG50eXBlIFByb3BzID0geyBlcnJvcj86IFBsdWdpbkVycm9yQ29kZSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luRGlzYWJsZWRCYWRnZSh7IGVycm9yIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgdG9vbHRpcCA9IGVycm9yQ29kZVRvVG9vbHRpcChlcnJvcik7XG4gIHJldHVybiA8QmFkZ2UgaWNvbj1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgdGV4dD1cIkRpc2FibGVkXCIgY29sb3I9XCJyZWRcIiB0b29sdGlwPXt0b29sdGlwfSAvPjtcbn1cblxuZnVuY3Rpb24gZXJyb3JDb2RlVG9Ub29sdGlwKGVycm9yPzogUGx1Z2luRXJyb3JDb2RlKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgc3dpdGNoIChlcnJvcikge1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1vZGlmaWVkU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuICdQbHVnaW4gZGlzYWJsZWQgZHVlIHRvIG1vZGlmaWVkIGNvbnRlbnQnO1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLmludmFsaWRTaWduYXR1cmU6XG4gICAgICByZXR1cm4gJ1BsdWdpbiBkaXNhYmxlZCBkdWUgdG8gaW52YWxpZCBwbHVnaW4gc2lnbmF0dXJlJztcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5taXNzaW5nU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuICdQbHVnaW4gZGlzYWJsZWQgZHVlIHRvIG1pc3NpbmcgcGx1Z2luIHNpZ25hdHVyZSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgUGx1Z2luIGRpc2FibGVkIGR1ZSB0byB1bmtvd24gZXJyb3I6ICR7ZXJyb3J9YDtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJhZGdlLCBCdXR0b24sIEhvcml6b250YWxHcm91cCwgUGx1Z2luU2lnbmF0dXJlQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0QmFkZ2VDb2xvciB9IGZyb20gJy4vc2hhcmVkU3R5bGVzJztcbmltcG9ydCB7IGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbnR5cGUgUHJvcHMgPSB7IHBsdWdpbjogQ2F0YWxvZ1BsdWdpbiB9O1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luRW50ZXJwcmlzZUJhZGdlKHsgcGx1Z2luIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgY3VzdG9tQmFkZ2VTdHlsZXMgPSB1c2VTdHlsZXMyKGdldEJhZGdlQ29sb3IpO1xuICBjb25zdCBvbkNsaWNrID0gKGV2OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICBgaHR0cHM6Ly9ncmFmYW5hLmNvbS9ncmFmYW5hL3BsdWdpbnMvJHtwbHVnaW4uaWR9P3V0bV9zb3VyY2U9Z3JhZmFuYV9jYXRhbG9nX2xlYXJuX21vcmVgLFxuICAgICAgJ19ibGFuaycsXG4gICAgICAnbm9vcGVuZXIsbm9yZWZlcnJlcidcbiAgICApO1xuICB9O1xuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnZW50ZXJwcmlzZS5wbHVnaW5zJykpIHtcbiAgICByZXR1cm4gPEJhZGdlIHRleHQ9XCJFbnRlcnByaXNlXCIgY29sb3I9XCJibHVlXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICA8UGx1Z2luU2lnbmF0dXJlQmFkZ2Ugc3RhdHVzPXtwbHVnaW4uc2lnbmF0dXJlfSAvPlxuICAgICAgPEJhZGdlIGljb249XCJsb2NrXCIgYXJpYS1sYWJlbD1cImxvY2sgaWNvblwiIHRleHQ9XCJFbnRlcnByaXNlXCIgY29sb3I9XCJibHVlXCIgY2xhc3NOYW1lPXtjdXN0b21CYWRnZVN0eWxlc30gLz5cbiAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgZmlsbD1cInRleHRcIiBpY29uPVwiZXh0ZXJuYWwtbGluay1hbHRcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgTGVhcm4gbW9yZVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBnZXRCYWRnZUNvbG9yIH0gZnJvbSAnLi9zaGFyZWRTdHlsZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luSW5zdGFsbGVkQmFkZ2UoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgY3VzdG9tQmFkZ2VTdHlsZXMgPSB1c2VTdHlsZXMyKGdldEJhZGdlQ29sb3IpO1xuICByZXR1cm4gPEJhZGdlIHRleHQ9XCJJbnN0YWxsZWRcIiBjb2xvcj1cIm9yYW5nZVwiIGNsYXNzTmFtZT17Y3VzdG9tQmFkZ2VTdHlsZXN9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlKHsgcGx1Z2luIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICAvLyBDdXJyZW50bHkgcmVuZGVyZXIgcGx1Z2lucyBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgY2F0YWxvZyBkdWUgdG8gY29tcGxpY2F0aW9ucyByZWxhdGVkIHRvIGluc3RhbGxhdGlvbiAvIHVwZGF0ZSAvIHVuaW5zdGFsbC5cbiAgaWYgKHBsdWdpbi5oYXNVcGRhdGUgJiYgIXBsdWdpbi5pc0NvcmUgJiYgcGx1Z2luLnR5cGUgIT09IFBsdWdpblR5cGUucmVuZGVyZXIpIHtcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPXtzdHlsZXMuaGFzVXBkYXRlfT5VcGRhdGUgYXZhaWxhYmxlITwvcD47XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhc1VwZGF0ZTogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGAsXG4gIH07XG59O1xuIiwiZXhwb3J0IHsgUGx1Z2luRGlzYWJsZWRCYWRnZSB9IGZyb20gJy4vUGx1Z2luRGlzYWJsZWRCYWRnZSc7XG5leHBvcnQgeyBQbHVnaW5JbnN0YWxsZWRCYWRnZSB9IGZyb20gJy4vUGx1Z2luSW5zdGFsbEJhZGdlJztcbmV4cG9ydCB7IFBsdWdpbkVudGVycHJpc2VCYWRnZSB9IGZyb20gJy4vUGx1Z2luRW50ZXJwcmlzZUJhZGdlJztcbmV4cG9ydCB7IFBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlIH0gZnJvbSAnLi9QbHVnaW5VcGRhdGVBdmFpbGFibGVCYWRnZSc7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgZ2V0QmFkZ2VDb2xvciA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gY3NzYFxuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnByaW1hcnl9O1xuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLmJvcmRlci5zdHJvbmd9O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuYDtcbiIsImltcG9ydCB7IFBsdWdpbk1ldGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZVBsdWdpbkNvbmZpZyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVBsdWdpbkNvbmZpZyc7XG5pbXBvcnQgeyB1cGRhdGVQbHVnaW5TZXR0aW5ncyB9IGZyb20gJy4uLy4uL2FwaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdldFN0YXJ0ZWRXaXRoQXBwKHsgcGx1Z2luIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgdmFsdWU6IHBsdWdpbkNvbmZpZyB9ID0gdXNlUGx1Z2luQ29uZmlnKHBsdWdpbik7XG5cbiAgaWYgKCFwbHVnaW5Db25maWcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHsgZW5hYmxlZCwganNvbkRhdGEgfSA9IHBsdWdpbkNvbmZpZz8ubWV0YTtcblxuICBjb25zdCBlbmFibGUgPSAoKSA9PlxuICAgIHVwZGF0ZVBsdWdpblNldHRpbmdzQW5kUmVsb2FkKHBsdWdpbi5pZCwge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGpzb25EYXRhLFxuICAgIH0pO1xuXG4gIGNvbnN0IGRpc2FibGUgPSAoKSA9PiB7XG4gICAgdXBkYXRlUGx1Z2luU2V0dGluZ3NBbmRSZWxvYWQocGx1Z2luLmlkLCB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHBpbm5lZDogZmFsc2UsXG4gICAgICBqc29uRGF0YSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWVuYWJsZWQgJiYgKFxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17ZW5hYmxlfT5cbiAgICAgICAgICBFbmFibGVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuXG4gICAgICB7ZW5hYmxlZCAmJiAoXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17ZGlzYWJsZX0+XG4gICAgICAgICAgRGlzYWJsZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IHVwZGF0ZVBsdWdpblNldHRpbmdzQW5kUmVsb2FkID0gYXN5bmMgKGlkOiBzdHJpbmcsIGRhdGE6IFBhcnRpYWw8UGx1Z2luTWV0YT4pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB1cGRhdGVQbHVnaW5TZXR0aW5ncyhpZCwgZGF0YSk7XG5cbiAgICAvLyBSZWxvYWRpbmcgdGhlIHBhZ2UgYXMgdGhlIHBsdWdpbiBtZXRhIGNoYW5nZXMgbWFkZSBoZXJlIHdvdWxkbid0IGJlIHByb3BhZ2F0ZWQgdGhyb3VnaG91dCB0aGUgYXBwLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIHVwZGF0aW5nIHRoZSBwbHVnaW4nLCBlKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBhZGREYXRhU291cmNlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBpc0RhdGFTb3VyY2VFZGl0b3IgfSBmcm9tICcuLi8uLi9wZXJtaXNzaW9ucyc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gR2V0U3RhcnRlZFdpdGhEYXRhU291cmNlKHsgcGx1Z2luIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25BZGREYXRhU291cmNlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICBuYW1lOiBwbHVnaW4ubmFtZSxcbiAgICAgIGlkOiBwbHVnaW4uaWQsXG4gICAgfSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcblxuICAgIGRpc3BhdGNoKGFkZERhdGFTb3VyY2UobWV0YSkpO1xuICB9LCBbZGlzcGF0Y2gsIHBsdWdpbl0pO1xuXG4gIGlmICghaXNEYXRhU291cmNlRWRpdG9yKCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uQWRkRGF0YVNvdXJjZX0+XG4gICAgICBDcmVhdGUgYSB7cGx1Z2luLm5hbWV9IGRhdGEgc291cmNlXG4gICAgPC9CdXR0b24+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEdldFN0YXJ0ZWRXaXRoRGF0YVNvdXJjZSB9IGZyb20gJy4vR2V0U3RhcnRlZFdpdGhEYXRhU291cmNlJztcbmltcG9ydCB7IEdldFN0YXJ0ZWRXaXRoQXBwIH0gZnJvbSAnLi9HZXRTdGFydGVkV2l0aEFwcCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRTdGFydGVkV2l0aFBsdWdpbih7IHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwge1xuICBpZiAoIXBsdWdpbi5pc0luc3RhbGxlZCB8fCBwbHVnaW4uaXNEaXNhYmxlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3dpdGNoIChwbHVnaW4udHlwZSkge1xuICAgIGNhc2UgUGx1Z2luVHlwZS5kYXRhc291cmNlOlxuICAgICAgcmV0dXJuIDxHZXRTdGFydGVkV2l0aERhdGFTb3VyY2UgcGx1Z2luPXtwbHVnaW59IC8+O1xuICAgIGNhc2UgUGx1Z2luVHlwZS5hcHA6XG4gICAgICByZXR1cm4gPEdldFN0YXJ0ZWRXaXRoQXBwIHBsdWdpbj17cGx1Z2lufSAvPjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImV4cG9ydCB7IEdldFN0YXJ0ZWRXaXRoUGx1Z2luIH0gZnJvbSAnLi9HZXRTdGFydGVkV2l0aFBsdWdpbic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBMaW5rQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0RXh0ZXJuYWxNYW5hZ2VMaW5rIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBQbHVnaW5TdGF0dXMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgRXh0ZXJuYWxseU1hbmFnZWRCdXR0b25Qcm9wcyA9IHtcbiAgcGx1Z2luSWQ6IHN0cmluZztcbiAgcGx1Z2luU3RhdHVzOiBQbHVnaW5TdGF0dXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRXh0ZXJuYWxseU1hbmFnZWRCdXR0b24oeyBwbHVnaW5JZCwgcGx1Z2luU3RhdHVzIH06IEV4dGVybmFsbHlNYW5hZ2VkQnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgZXh0ZXJuYWxNYW5hZ2VMaW5rID0gYCR7Z2V0RXh0ZXJuYWxNYW5hZ2VMaW5rKHBsdWdpbklkKX0vP3RhYj1pbnN0YWxsYXRpb25gO1xuXG4gIGlmIChwbHVnaW5TdGF0dXMgPT09IFBsdWdpblN0YXR1cy5VUERBVEUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBoZWlnaHQ9XCJhdXRvXCI+XG4gICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e2V4dGVybmFsTWFuYWdlTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIFVwZGF0ZSB2aWEgZ3JhZmFuYS5jb21cbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICA8TGlua0J1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBocmVmPXtleHRlcm5hbE1hbmFnZUxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICBVbmluc3RhbGwgdmlhIGdyYWZhbmEuY29tXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH1cblxuICBpZiAocGx1Z2luU3RhdHVzID09PSBQbHVnaW5TdGF0dXMuVU5JTlNUQUxMKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIGhyZWY9e2V4dGVybmFsTWFuYWdlTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICBVbmluc3RhbGwgdmlhIGdyYWZhbmEuY29tXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpbmtCdXR0b24gaHJlZj17ZXh0ZXJuYWxNYW5hZ2VMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICBJbnN0YWxsIHZpYSBncmFmYW5hLmNvbVxuICAgIDwvTGlua0J1dHRvbj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyBjb25maWcsIGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIEljb24sIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEV4dGVybmFsbHlNYW5hZ2VkQnV0dG9uIH0gZnJvbSAnLi9FeHRlcm5hbGx5TWFuYWdlZEJ1dHRvbic7XG5pbXBvcnQgeyBJbnN0YWxsQ29udHJvbHNCdXR0b24gfSBmcm9tICcuL0luc3RhbGxDb250cm9sc0J1dHRvbic7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luLCBQbHVnaW5TdGF0dXMsIFZlcnNpb24gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRFeHRlcm5hbE1hbmFnZUxpbmssIGlzSW5zdGFsbENvbnRyb2xzRW5hYmxlZCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlSXNSZW1vdGVQbHVnaW5zQXZhaWxhYmxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvaG9va3MnO1xuaW1wb3J0IHsgaXNHcmFmYW5hQWRtaW4gfSBmcm9tICcuLi8uLi9wZXJtaXNzaW9ucyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbiAgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24/OiBWZXJzaW9uO1xufVxuXG5leHBvcnQgY29uc3QgSW5zdGFsbENvbnRyb2xzID0gKHsgcGx1Z2luLCBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGlzRXh0ZXJuYWxseU1hbmFnZWQgPSBjb25maWcucGx1Z2luQWRtaW5FeHRlcm5hbE1hbmFnZUVuYWJsZWQ7XG4gIGNvbnN0IGhhc1Blcm1pc3Npb24gPSBpc0dyYWZhbmFBZG1pbigpO1xuICBjb25zdCBpc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUgPSB1c2VJc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUoKTtcbiAgY29uc3QgaXNDb21wYXRpYmxlID0gQm9vbGVhbihsYXRlc3RDb21wYXRpYmxlVmVyc2lvbik7XG4gIGNvbnN0IGlzSW5zdGFsbENvbnRyb2xzRGlzYWJsZWQgPSBwbHVnaW4uaXNDb3JlIHx8IHBsdWdpbi5pc0Rpc2FibGVkIHx8ICFpc0luc3RhbGxDb250cm9sc0VuYWJsZWQoKTtcblxuICBjb25zdCBwbHVnaW5TdGF0dXMgPSBwbHVnaW4uaXNJbnN0YWxsZWRcbiAgICA/IHBsdWdpbi5oYXNVcGRhdGVcbiAgICAgID8gUGx1Z2luU3RhdHVzLlVQREFURVxuICAgICAgOiBQbHVnaW5TdGF0dXMuVU5JTlNUQUxMXG4gICAgOiBQbHVnaW5TdGF0dXMuSU5TVEFMTDtcblxuICBpZiAoaXNJbnN0YWxsQ29udHJvbHNEaXNhYmxlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHBsdWdpbi50eXBlID09PSBQbHVnaW5UeXBlLnJlbmRlcmVyKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+UmVuZGVyZXIgcGx1Z2lucyBjYW5ub3QgYmUgbWFuYWdlZCBieSB0aGUgUGx1Z2luIENhdGFsb2cuPC9kaXY+O1xuICB9XG5cbiAgaWYgKHBsdWdpbi5pc0VudGVycHJpc2UgJiYgIWZlYXR1cmVFbmFibGVkKCdlbnRlcnByaXNlLnBsdWdpbnMnKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGhlaWdodD1cImF1dG9cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5ObyB2YWxpZCBHcmFmYW5hIEVudGVycHJpc2UgbGljZW5zZSBkZXRlY3RlZC48L3NwYW4+XG4gICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgaHJlZj17YCR7Z2V0RXh0ZXJuYWxNYW5hZ2VMaW5rKHBsdWdpbi5pZCl9P3V0bV9zb3VyY2U9Z3JhZmFuYV9jYXRhbG9nX2xlYXJuX21vcmVgfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgaWNvbj1cImV4dGVybmFsLWxpbmstYWx0XCJcbiAgICAgICAgPlxuICAgICAgICAgIExlYXJuIG1vcmVcbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwbHVnaW4uaXNEZXYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5UaGlzIGlzIGEgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgdGhlIHBsdWdpbiBhbmQgY2FuJiMzOTt0IGJlIHVuaW5zdGFsbGVkLjwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoIWhhc1Blcm1pc3Npb24gJiYgIWlzRXh0ZXJuYWxseU1hbmFnZWQpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFlvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvICR7cGx1Z2luU3RhdHVzfSB0aGlzIHBsdWdpbi5gO1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PnttZXNzYWdlfTwvZGl2PjtcbiAgfVxuXG4gIGlmICghcGx1Z2luLmlzUHVibGlzaGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XG4gICAgICAgIDxJY29uIG5hbWU9XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIC8+IFRoaXMgcGx1Z2luIGlzIG5vdCBwdWJsaXNoZWQgdG97JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ3JhZmFuYS5jb20vcGx1Z2luc1wiIHRhcmdldD1cIl9fYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgZ3JhZmFuYS5jb20vcGx1Z2luc1xuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgYW5kIGNhbiYjMzk7dCBiZSBtYW5hZ2VkIHZpYSB0aGUgY2F0YWxvZy5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoIWlzQ29tcGF0aWJsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxuICAgICAgICA8SWNvbiBuYW1lPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiAvPlxuICAgICAgICAmbmJzcDtUaGlzIHBsdWdpbiBkb2VzbiYjMzk7dCBzdXBwb3J0IHlvdXIgdmVyc2lvbiBvZiBHcmFmYW5hLlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChpc0V4dGVybmFsbHlNYW5hZ2VkKSB7XG4gICAgcmV0dXJuIDxFeHRlcm5hbGx5TWFuYWdlZEJ1dHRvbiBwbHVnaW5JZD17cGx1Z2luLmlkfSBwbHVnaW5TdGF0dXM9e3BsdWdpblN0YXR1c30gLz47XG4gIH1cblxuICBpZiAoIWlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxuICAgICAgICBUaGUgaW5zdGFsbCBjb250cm9scyBoYXZlIGJlZW4gZGlzYWJsZWQgYmVjYXVzZSB0aGUgR3JhZmFuYSBzZXJ2ZXIgY2Fubm90IGFjY2VzcyBncmFmYW5hLmNvbS5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxJbnN0YWxsQ29udHJvbHNCdXR0b25cbiAgICAgIHBsdWdpbj17cGx1Z2lufVxuICAgICAgcGx1Z2luU3RhdHVzPXtwbHVnaW5TdGF0dXN9XG4gICAgICBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj17bGF0ZXN0Q29tcGF0aWJsZVZlcnNpb259XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwRXZlbnRzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEhvcml6b250YWxHcm91cCwgQ29uZmlybU1vZGFsIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGFwcEV2ZW50cyBmcm9tICdhcHAvY29yZS9hcHBfZXZlbnRzJztcblxuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luU3RhdHVzLCBWZXJzaW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlSW5zdGFsbFN0YXR1cywgdXNlVW5pbnN0YWxsU3RhdHVzLCB1c2VJbnN0YWxsLCB1c2VVbmluc3RhbGwgfSBmcm9tICcuLi8uLi9zdGF0ZS9ob29rcyc7XG5cbnR5cGUgSW5zdGFsbENvbnRyb2xzQnV0dG9uUHJvcHMgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbiAgcGx1Z2luU3RhdHVzOiBQbHVnaW5TdGF0dXM7XG4gIGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPzogVmVyc2lvbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnN0YWxsQ29udHJvbHNCdXR0b24oeyBwbHVnaW4sIHBsdWdpblN0YXR1cywgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24gfTogSW5zdGFsbENvbnRyb2xzQnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgeyBpc0luc3RhbGxpbmcsIGVycm9yOiBlcnJvckluc3RhbGxpbmcgfSA9IHVzZUluc3RhbGxTdGF0dXMoKTtcbiAgY29uc3QgeyBpc1VuaW5zdGFsbGluZywgZXJyb3I6IGVycm9yVW5pbnN0YWxsaW5nIH0gPSB1c2VVbmluc3RhbGxTdGF0dXMoKTtcbiAgY29uc3QgaW5zdGFsbCA9IHVzZUluc3RhbGwoKTtcbiAgY29uc3QgdW5pbnN0YWxsID0gdXNlVW5pbnN0YWxsKCk7XG4gIGNvbnN0IFtpc0NvbmZpcm1Nb2RhbFZpc2libGUsIHNldElzQ29uZmlybU1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dDb25maXJtTW9kYWwgPSAoKSA9PiBzZXRJc0NvbmZpcm1Nb2RhbFZpc2libGUodHJ1ZSk7XG4gIGNvbnN0IGhpZGVDb25maXJtTW9kYWwgPSAoKSA9PiBzZXRJc0NvbmZpcm1Nb2RhbFZpc2libGUoZmFsc2UpO1xuICBjb25zdCB1bmluc3RhbGxCdG5UZXh0ID0gaXNVbmluc3RhbGxpbmcgPyAnVW5pbnN0YWxsaW5nJyA6ICdVbmluc3RhbGwnO1xuXG4gIGNvbnN0IG9uSW5zdGFsbCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBpbnN0YWxsKHBsdWdpbi5pZCwgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24/LnZlcnNpb24pO1xuICAgIGlmICghZXJyb3JJbnN0YWxsaW5nKSB7XG4gICAgICBhcHBFdmVudHMuZW1pdChBcHBFdmVudHMuYWxlcnRTdWNjZXNzLCBbYEluc3RhbGxlZCAke3BsdWdpbi5uYW1lfWBdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25Vbmluc3RhbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgaGlkZUNvbmZpcm1Nb2RhbCgpO1xuICAgIGF3YWl0IHVuaW5zdGFsbChwbHVnaW4uaWQpO1xuICAgIGlmICghZXJyb3JVbmluc3RhbGxpbmcpIHtcbiAgICAgIGFwcEV2ZW50cy5lbWl0KEFwcEV2ZW50cy5hbGVydFN1Y2Nlc3MsIFtgVW5pbnN0YWxsZWQgJHtwbHVnaW4ubmFtZX1gXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGluc3RhbGwocGx1Z2luLmlkLCBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj8udmVyc2lvbiwgdHJ1ZSk7XG4gICAgaWYgKCFlcnJvckluc3RhbGxpbmcpIHtcbiAgICAgIGFwcEV2ZW50cy5lbWl0KEFwcEV2ZW50cy5hbGVydFN1Y2Nlc3MsIFtgVXBkYXRlZCAke3BsdWdpbi5uYW1lfWBdKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBsdWdpblN0YXR1cyA9PT0gUGx1Z2luU3RhdHVzLlVOSU5TVEFMTCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgaXNPcGVuPXtpc0NvbmZpcm1Nb2RhbFZpc2libGV9XG4gICAgICAgICAgdGl0bGU9e2BVbmluc3RhbGwgJHtwbHVnaW4ubmFtZX1gfVxuICAgICAgICAgIGJvZHk9XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdW5pbnN0YWxsIHRoaXMgcGx1Z2luP1wiXG4gICAgICAgICAgY29uZmlybVRleHQ9XCJDb25maXJtXCJcbiAgICAgICAgICBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17b25Vbmluc3RhbGx9XG4gICAgICAgICAgb25EaXNtaXNzPXtoaWRlQ29uZmlybU1vZGFsfVxuICAgICAgICAvPlxuICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIGhlaWdodD1cImF1dG9cIj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIGRpc2FibGVkPXtpc1VuaW5zdGFsbGluZ30gb25DbGljaz17c2hvd0NvbmZpcm1Nb2RhbH0+XG4gICAgICAgICAgICB7dW5pbnN0YWxsQnRuVGV4dH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgaWYgKHBsdWdpblN0YXR1cyA9PT0gUGx1Z2luU3RhdHVzLlVQREFURSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGhlaWdodD1cImF1dG9cIj5cbiAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNJbnN0YWxsaW5nfSBvbkNsaWNrPXtvblVwZGF0ZX0+XG4gICAgICAgICAge2lzSW5zdGFsbGluZyA/ICdVcGRhdGluZycgOiAnVXBkYXRlJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgZGlzYWJsZWQ9e2lzVW5pbnN0YWxsaW5nfSBvbkNsaWNrPXtvblVuaW5zdGFsbH0+XG4gICAgICAgICAge3VuaW5zdGFsbEJ0blRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNJbnN0YWxsaW5nfSBvbkNsaWNrPXtvbkluc3RhbGx9PlxuICAgICAge2lzSW5zdGFsbGluZyA/ICdJbnN0YWxsaW5nJyA6ICdJbnN0YWxsJ31cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vSW5zdGFsbENvbnRyb2xzJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9QYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAoeyB0ZXh0ID0gJ0xvYWRpbmcuLi4nIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbG9hZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PXt0ZXh0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc30+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PlxuICBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgYDtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBQbHVnaW5EYXNoYm9hcmQgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgYXBwRXZlbnRzIH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgRGFzaGJvYXJkc1RhYmxlIGZyb20gJ2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9EYXNoYm9hcmRzVGFibGUnO1xuaW1wb3J0IHsgQXBwRXZlbnRzLCBQbHVnaW5NZXRhLCBEYXRhU291cmNlQXBpIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBsdWdpbjogUGx1Z2luTWV0YTtcbiAgZGF0YXNvdXJjZT86IERhdGFTb3VyY2VBcGk7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGRhc2hib2FyZHM6IFBsdWdpbkRhc2hib2FyZFtdO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUGx1Z2luRGFzaGJvYXJkcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGRhc2hib2FyZHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwbHVnaW5JZCA9IHRoaXMucHJvcHMucGx1Z2luLmlkO1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmdldChgL2FwaS9wbHVnaW5zLyR7cGx1Z2luSWR9L2Rhc2hib2FyZHNgKVxuICAgICAgLnRoZW4oKGRhc2hib2FyZHM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFzaGJvYXJkcywgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGltcG9ydEFsbCA9ICgpID0+IHtcbiAgICB0aGlzLmltcG9ydE5leHQoMCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbXBvcnROZXh0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IGRhc2hib2FyZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIHRoaXMuaW1wb3J0KGRhc2hib2FyZHNbaW5kZXhdLCB0cnVlKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChpbmRleCArIDEgPCBkYXNoYm9hcmRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1wb3J0TmV4dChpbmRleCArIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBpbXBvcnQgPSAoZGFzaDogUGx1Z2luRGFzaGJvYXJkLCBvdmVyd3JpdGU6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB7IHBsdWdpbiwgZGF0YXNvdXJjZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGluc3RhbGxDbWQ6IGFueSA9IHtcbiAgICAgIHBsdWdpbklkOiBwbHVnaW4uaWQsXG4gICAgICBwYXRoOiBkYXNoLnBhdGgsXG4gICAgICBvdmVyd3JpdGU6IG92ZXJ3cml0ZSxcbiAgICAgIGlucHV0czogW10sXG4gICAgfTtcblxuICAgIGlmIChkYXRhc291cmNlKSB7XG4gICAgICBpbnN0YWxsQ21kLmlucHV0cy5wdXNoKHtcbiAgICAgICAgbmFtZTogJyonLFxuICAgICAgICB0eXBlOiAnZGF0YXNvdXJjZScsXG4gICAgICAgIHBsdWdpbklkOiBkYXRhc291cmNlLm1ldGEuaWQsXG4gICAgICAgIHZhbHVlOiBkYXRhc291cmNlLm5hbWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpXG4gICAgICAucG9zdChgL2FwaS9kYXNoYm9hcmRzL2ltcG9ydGAsIGluc3RhbGxDbWQpXG4gICAgICAudGhlbigocmVzOiBQbHVnaW5EYXNoYm9hcmQpID0+IHtcbiAgICAgICAgYXBwRXZlbnRzLmVtaXQoQXBwRXZlbnRzLmFsZXJ0U3VjY2VzcywgWydEYXNoYm9hcmQgSW1wb3J0ZWQnLCBkYXNoLnRpdGxlXSk7XG4gICAgICAgIGV4dGVuZChkYXNoLCByZXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFzaGJvYXJkczogWy4uLnRoaXMuc3RhdGUuZGFzaGJvYXJkc10gfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW1vdmUgPSAoZGFzaDogUGx1Z2luRGFzaGJvYXJkKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZGVsZXRlKCcvYXBpL2Rhc2hib2FyZHMvdWlkLycgKyBkYXNoLnVpZClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGFzaC5pbXBvcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFzaGJvYXJkczogWy4uLnRoaXMuc3RhdGUuZGFzaGJvYXJkc10gfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBkYXNoYm9hcmRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cbiAgICBpZiAoIWRhc2hib2FyZHMgfHwgIWRhc2hib2FyZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gPGRpdj5ObyBkYXNoYm9hcmRzIGFyZSBpbmNsdWRlZCB3aXRoIHRoaXMgcGx1Z2luPC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPERhc2hib2FyZHNUYWJsZSBkYXNoYm9hcmRzPXtkYXNoYm9hcmRzfSBvbkltcG9ydD17dGhpcy5pbXBvcnR9IG9uUmVtb3ZlPXt0aGlzLnJlbW92ZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgQXBwUGx1Z2luLCBHcmFmYW5hVGhlbWUyLCBVcmxRdWVyeU1hcCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luVGFiSWRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVmVyc2lvbkxpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL1ZlcnNpb25MaXN0JztcbmltcG9ydCB7IHVzZVBsdWdpbkNvbmZpZyB9IGZyb20gJy4uL2hvb2tzL3VzZVBsdWdpbkNvbmZpZyc7XG5pbXBvcnQgeyBBcHBDb25maWdDdHJsV3JhcHBlciB9IGZyb20gJy4vQXBwQ29uZmlnV3JhcHBlcic7XG5pbXBvcnQgeyBQbHVnaW5EYXNoYm9hcmRzIH0gZnJvbSAnLi9QbHVnaW5EYXNoYm9hcmRzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xuICBxdWVyeVBhcmFtczogVXJsUXVlcnlNYXA7XG4gIHBhZ2VJZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRldGFpbHNCb2R5KHsgcGx1Z2luLCBxdWVyeVBhcmFtcywgcGFnZUlkIH06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgdmFsdWU6IHBsdWdpbkNvbmZpZyB9ID0gdXNlUGx1Z2luQ29uZmlnKHBsdWdpbik7XG5cbiAgaWYgKHBhZ2VJZCA9PT0gUGx1Z2luVGFiSWRzLk9WRVJWSUVXKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMucmVhZG1lLCBzdHlsZXMuY29udGFpbmVyKX1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IHBsdWdpbi5kZXRhaWxzPy5yZWFkbWUgPz8gJ05vIHBsdWdpbiBoZWxwIG9yIHJlYWRtZSBtYXJrZG93biBmaWxlIHdhcyBmb3VuZCcsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBpZiAocGFnZUlkID09PSBQbHVnaW5UYWJJZHMuVkVSU0lPTlMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VmVyc2lvbkxpc3QgdmVyc2lvbnM9e3BsdWdpbi5kZXRhaWxzPy52ZXJzaW9uc30gaW5zdGFsbGVkVmVyc2lvbj17cGx1Z2luLmluc3RhbGxlZFZlcnNpb259IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKHBhZ2VJZCA9PT0gUGx1Z2luVGFiSWRzLkNPTkZJRyAmJiBwbHVnaW5Db25maWc/LmFuZ3VsYXJDb25maWdDdHJsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEFwcENvbmZpZ0N0cmxXcmFwcGVyIGFwcD17cGx1Z2luQ29uZmlnIGFzIEFwcFBsdWdpbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAocGx1Z2luQ29uZmlnPy5jb25maWdQYWdlcykge1xuICAgIGZvciAoY29uc3QgY29uZmlnUGFnZSBvZiBwbHVnaW5Db25maWcuY29uZmlnUGFnZXMpIHtcbiAgICAgIGlmIChwYWdlSWQgPT09IGNvbmZpZ1BhZ2UuaWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8Y29uZmlnUGFnZS5ib2R5IHBsdWdpbj17cGx1Z2luQ29uZmlnfSBxdWVyeT17cXVlcnlQYXJhbXN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhZ2VJZCA9PT0gUGx1Z2luVGFiSWRzLkRBU0hCT0FSRFMgJiYgcGx1Z2luQ29uZmlnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFBsdWdpbkRhc2hib2FyZHMgcGx1Z2luPXtwbHVnaW5Db25maWc/Lm1ldGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8cD5QYWdlIG5vdCBmb3VuZC48L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygzLCA0KX07XG4gIGAsXG4gIHJlYWRtZTogY3NzYFxuICAgICYgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBoMSxcbiAgICBoMixcbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICB9XG5cbiAgICAqOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICAmID4gcCB7XG4gICAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKCl9IDA7XG4gICAgICB9XG4gICAgfVxuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGx1Z2luRXJyb3JDb2RlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luRGV0YWlsc0Rpc2FibGVkRXJyb3IoeyBjbGFzc05hbWUsIHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwge1xuICBpZiAoIXBsdWdpbi5pc0Rpc2FibGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBbGVydFxuICAgICAgc2V2ZXJpdHk9XCJlcnJvclwiXG4gICAgICB0aXRsZT1cIlBsdWdpbiBkaXNhYmxlZFwiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbHVnaW5QYWdlLmRpc2FibGVkSW5mb31cbiAgICA+XG4gICAgICB7cmVuZGVyRGVzY3JpcHRpb25Gcm9tRXJyb3IocGx1Z2luLmVycm9yKX1cbiAgICAgIDxwPlBsZWFzZSBjb250YWN0IHlvdXIgc2VydmVyIGFkbWluaXN0cmF0b3IgdG8gZ2V0IHRoaXMgcmVzb2x2ZWQuPC9wPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9hZG1pbmlzdHJhdGlvbi9jbGkvI3BsdWdpbnMtY29tbWFuZHNcIlxuICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICA+XG4gICAgICAgIFJlYWQgbW9yZSBhYm91dCBtYW5hZ2luZyBwbHVnaW5zXG4gICAgICA8L2E+XG4gICAgPC9BbGVydD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGVzY3JpcHRpb25Gcm9tRXJyb3IoZXJyb3I/OiBQbHVnaW5FcnJvckNvZGUpOiBSZWFjdEVsZW1lbnQge1xuICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubW9kaWZpZWRTaWduYXR1cmU6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBHcmFmYW5hIExhYnMgY2hlY2tzIGVhY2ggcGx1Z2luIHRvIHZlcmlmeSB0aGF0IGl0IGhhcyBhIHZhbGlkIGRpZ2l0YWwgc2lnbmF0dXJlLiBXaGlsZSBkb2luZyB0aGlzLCB3ZVxuICAgICAgICAgIGRpc2NvdmVyZWQgdGhhdCB0aGUgY29udGVudCBvZiB0aGlzIHBsdWdpbiBkb2VzIG5vdCBtYXRjaCBpdHMgc2lnbmF0dXJlLiBXZSBjYW4gbm90IGd1YXJhbnRlZSB0aGUgdHJ1c3R3b3J0aHlcbiAgICAgICAgICBvZiB0aGlzIHBsdWdpbiBhbmQgaGF2ZSB0aGVyZWZvcmUgZGlzYWJsZWQgaXQuIFdlIHJlY29tbWVuZCB5b3UgdG8gcmVpbnN0YWxsIHRoZSBwbHVnaW4gdG8gbWFrZSBzdXJlIHlvdSBhcmVcbiAgICAgICAgICBydW5uaW5nIGEgdmVyaWZpZWQgdmVyc2lvbiBvZiB0aGlzIHBsdWdpbi5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5pbnZhbGlkU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHA+XG4gICAgICAgICAgR3JhZmFuYSBMYWJzIGNoZWNrcyBlYWNoIHBsdWdpbiB0byB2ZXJpZnkgdGhhdCBpdCBoYXMgYSB2YWxpZCBkaWdpdGFsIHNpZ25hdHVyZS4gV2hpbGUgZG9pbmcgdGhpcywgd2VcbiAgICAgICAgICBkaXNjb3ZlcmVkIHRoYXQgaXQgd2FzIGludmFsaWQuIFdlIGNhbiBub3QgZ3VhcmFudGVlIHRoZSB0cnVzdHdvcnRoeSBvZiB0aGlzIHBsdWdpbiBhbmQgaGF2ZSB0aGVyZWZvcmVcbiAgICAgICAgICBkaXNhYmxlZCBpdC4gV2UgcmVjb21tZW5kIHlvdSB0byByZWluc3RhbGwgdGhlIHBsdWdpbiB0byBtYWtlIHN1cmUgeW91IGFyZSBydW5uaW5nIGEgdmVyaWZpZWQgdmVyc2lvbiBvZiB0aGlzXG4gICAgICAgICAgcGx1Z2luLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1pc3NpbmdTaWduYXR1cmU6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBHcmFmYW5hIExhYnMgY2hlY2tzIGVhY2ggcGx1Z2luIHRvIHZlcmlmeSB0aGF0IGl0IGhhcyBhIHZhbGlkIGRpZ2l0YWwgc2lnbmF0dXJlLiBXaGlsZSBkb2luZyB0aGlzLCB3ZVxuICAgICAgICAgIGRpc2NvdmVyZWQgdGhhdCB0aGVyZSBpcyBubyBzaWduYXR1cmUgZm9yIHRoaXMgcGx1Z2luLiBXZSBjYW4gbm90IGd1YXJhbnRlZSB0aGUgdHJ1c3R3b3J0aHkgb2YgdGhpcyBwbHVnaW4gYW5kXG4gICAgICAgICAgaGF2ZSB0aGVyZWZvcmUgZGlzYWJsZWQgaXQuIFdlIHJlY29tbWVuZCB5b3UgdG8gcmVpbnN0YWxsIHRoZSBwbHVnaW4gdG8gbWFrZSBzdXJlIHlvdSBhcmUgcnVubmluZyBhIHZlcmlmaWVkXG4gICAgICAgICAgdmVyc2lvbiBvZiB0aGlzIHBsdWdpbi5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZmFpbGVkIHRvIHJ1biB0aGlzIHBsdWdpbiBkdWUgdG8gYW4gdW5rb3duIHJlYXNvbiBhbmQgaGF2ZSB0aGVyZWZvciBkaXNhYmxlZCBpdC4gV2UgcmVjb21tZW5kIHlvdSB0b1xuICAgICAgICAgIHJlaW5zdGFsbCB0aGUgcGx1Z2luIHRvIG1ha2Ugc3VyZSB5b3UgYXJlIHJ1bm5pbmcgYSB3b3JraW5nIHZlcnNpb24gb2YgdGhpcyBwbHVnaW4uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIsIEljb24sIEhvcml6b250YWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgSW5zdGFsbENvbnRyb2xzIH0gZnJvbSAnLi9JbnN0YWxsQ29udHJvbHMnO1xuaW1wb3J0IHsgUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZSB9IGZyb20gJy4vUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZSc7XG5pbXBvcnQgeyBQbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzIH0gZnJvbSAnLi9QbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzJztcbmltcG9ydCB7IFBsdWdpbkxvZ28gfSBmcm9tICcuL1BsdWdpbkxvZ28nO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFBsdWdpbkRpc2FibGVkQmFkZ2UgfSBmcm9tICcuL0JhZGdlcyc7XG5pbXBvcnQgeyBHZXRTdGFydGVkV2l0aFBsdWdpbiB9IGZyb20gJy4vR2V0U3RhcnRlZFdpdGhQbHVnaW4nO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY3VycmVudFVybDogc3RyaW5nO1xuICBwYXJlbnRVcmw6IHN0cmluZztcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRldGFpbHNIZWFkZXIoeyBwbHVnaW4sIGN1cnJlbnRVcmwsIHBhcmVudFVybCB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24gPSBnZXRMYXRlc3RDb21wYXRpYmxlVmVyc2lvbihwbHVnaW4uZGV0YWlscz8udmVyc2lvbnMpO1xuICBjb25zdCB2ZXJzaW9uID0gcGx1Z2luLmluc3RhbGxlZFZlcnNpb24gfHwgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24/LnZlcnNpb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XG4gICAgICA8UGx1Z2luTG9nb1xuICAgICAgICBhbHQ9e2Ake3BsdWdpbi5uYW1lfSBsb2dvYH1cbiAgICAgICAgc3JjPXtwbHVnaW4uaW5mby5sb2dvcy5zbWFsbH1cbiAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDY4cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2OHB4O1xuICAgICAgICBgfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJXcmFwcGVyfT5cbiAgICAgICAgey8qIFRpdGxlICYgbmF2aWdhdGlvbiAqL31cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5icmVhZGNydW1ifSBhcmlhLWxhYmVsPVwiQnJlYWRjcnVtYlwiPlxuICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGV4dFVuZGVybGluZX0gaHJlZj17cGFyZW50VXJsfT5cbiAgICAgICAgICAgICAgICBQbHVnaW5zXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2N1cnJlbnRVcmx9IGFyaWEtY3VycmVudD1cInBhZ2VcIj5cbiAgICAgICAgICAgICAgICB7cGx1Z2luLm5hbWV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJbmZvcm1hdGlvblJvd30+XG4gICAgICAgICAgey8qIE9yZyBuYW1lICovfVxuICAgICAgICAgIDxzcGFuPntwbHVnaW4ub3JnTmFtZX08L3NwYW4+XG5cbiAgICAgICAgICB7LyogTGlua3MgKi99XG4gICAgICAgICAge3BsdWdpbi5kZXRhaWxzPy5saW5rcy5tYXAoKGxpbms6IGFueSkgPT4gKFxuICAgICAgICAgICAgPGEga2V5PXtsaW5rLm5hbWV9IGhyZWY9e2xpbmsudXJsfT5cbiAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgIHsvKiBEb3dubG9hZHMgKi99XG4gICAgICAgICAge3BsdWdpbi5kb3dubG9hZHMgPiAwICYmIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xvdWQtZG93bmxvYWRcIiAvPlxuICAgICAgICAgICAgICB7YCAke25ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdChwbHVnaW4uZG93bmxvYWRzKX1gfXsnICd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiBWZXJzaW9uICovfVxuICAgICAgICAgIHtCb29sZWFuKHZlcnNpb24pICYmIDxzcGFuPnt2ZXJzaW9ufTwvc3Bhbj59XG5cbiAgICAgICAgICB7LyogU2lnbmF0dXJlIGluZm9ybWF0aW9uICovfVxuICAgICAgICAgIDxQbHVnaW5EZXRhaWxzSGVhZGVyU2lnbmF0dXJlIHBsdWdpbj17cGx1Z2lufSAvPlxuXG4gICAgICAgICAge3BsdWdpbi5pc0Rpc2FibGVkICYmIDxQbHVnaW5EaXNhYmxlZEJhZGdlIGVycm9yPXtwbHVnaW4uZXJyb3IhfSAvPn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFBsdWdpbkRldGFpbHNIZWFkZXJEZXBlbmRlbmNpZXNcbiAgICAgICAgICBwbHVnaW49e3BsdWdpbn1cbiAgICAgICAgICBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj17bGF0ZXN0Q29tcGF0aWJsZVZlcnNpb259XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuaGVhZGVySW5mb3JtYXRpb25Sb3csIHN0eWxlcy5oZWFkZXJJbmZvcm1hdGlvblJvd1NlY29uZGFyeSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPHA+e3BsdWdpbi5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgPEhvcml6b250YWxHcm91cCBoZWlnaHQ9XCJhdXRvXCI+XG4gICAgICAgICAgPEluc3RhbGxDb250cm9scyBwbHVnaW49e3BsdWdpbn0gbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb249e2xhdGVzdENvbXBhdGlibGVWZXJzaW9ufSAvPlxuICAgICAgICAgIDxHZXRTdGFydGVkV2l0aFBsdWdpbiBwbHVnaW49e3BsdWdpbn0gLz5cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGhlYWRlckNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgYCxcbiAgICBoZWFkZXJXcmFwcGVyOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgICBgLFxuICAgIGJyZWFkY3J1bWI6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmgyLmZvbnRTaXplfTtcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJy8nO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC4yNWNoO1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICBoZWFkZXJJbmZvcm1hdGlvblJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoKX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoKX07XG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAgICAmID4gKiB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnfCc7XG4gICAgICAgICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmcoKX07XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDQuZm9udFNpemV9O1xuICAgIGAsXG4gICAgaGVhZGVySW5mb3JtYXRpb25Sb3dTZWNvbmRhcnk6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHkuZm9udFNpemV9O1xuICAgIGAsXG4gICAgaGVhZGVyT3JnTmFtZTogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDQuZm9udFNpemV9O1xuICAgIGAsXG4gICAgc2lnbmF0dXJlOiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGAsXG4gICAgdGV4dFVuZGVybGluZTogY3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIsIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBWZXJzaW9uLCBDYXRhbG9nUGx1Z2luLCBQbHVnaW5JY29uTmFtZSB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xuICBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj86IFZlcnNpb247XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzKHtcbiAgcGx1Z2luLFxuICBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbixcbiAgY2xhc3NOYW1lLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBwbHVnaW5EZXBlbmRlbmNpZXMgPSBwbHVnaW4uZGV0YWlscz8ucGx1Z2luRGVwZW5kZW5jaWVzO1xuICBjb25zdCBncmFmYW5hRGVwZW5kZW5jeSA9IHBsdWdpbi5pc0luc3RhbGxlZFxuICAgID8gcGx1Z2luLmRldGFpbHM/LmdyYWZhbmFEZXBlbmRlbmN5XG4gICAgOiBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj8uZ3JhZmFuYURlcGVuZGVuY3kgfHwgcGx1Z2luLmRldGFpbHM/LmdyYWZhbmFEZXBlbmRlbmN5O1xuICBjb25zdCBoYXNOb0RlcGVuZGVuY3lJbmZvID0gIWdyYWZhbmFEZXBlbmRlbmN5ICYmICghcGx1Z2luRGVwZW5kZW5jaWVzIHx8ICFwbHVnaW5EZXBlbmRlbmNpZXMubGVuZ3RoKTtcblxuICBpZiAoaGFzTm9EZXBlbmRlbmN5SW5mbykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVwZW5kZW5jeVRpdGxlfT5EZXBlbmRlbmNpZXM6PC9kaXY+XG5cbiAgICAgIHsvKiBHcmFmYW5hIGRlcGVuZGVuY3kgKi99XG4gICAgICB7Qm9vbGVhbihncmFmYW5hRGVwZW5kZW5jeSkgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJncmFmYW5hXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICBHcmFmYW5hIHtncmFmYW5hRGVwZW5kZW5jeX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogUGx1Z2luIGRlcGVuZGVuY2llcyAqL31cbiAgICAgIHtwbHVnaW5EZXBlbmRlbmNpZXMgJiYgcGx1Z2luRGVwZW5kZW5jaWVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtwbHVnaW5EZXBlbmRlbmNpZXMubWFwKChwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e3AubmFtZX0+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT17UGx1Z2luSWNvbk5hbWVbcC50eXBlXX0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICB7cC5uYW1lfSB7cC52ZXJzaW9ufVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBkZXBlbmRlbmN5VGl0bGU6IGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGR9O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgYCxcbiAgICBpY29uOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFBsdWdpblNpZ25hdHVyZVN0YXR1cyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGx1Z2luU2lnbmF0dXJlQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQbHVnaW5TaWduYXR1cmVEZXRhaWxzQmFkZ2UgfSBmcm9tICcuL1BsdWdpblNpZ25hdHVyZURldGFpbHNCYWRnZSc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG59O1xuXG4vLyBEZXNpZ25lZCB0byBzaG93IHBsdWdpbiBzaWduYXR1cmUgaW5mb3JtYXRpb24gaW4gdGhlIGhlYWRlciBvbiB0aGUgcGx1Z2luJ3MgZGV0YWlscyBwYWdlXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZSh7IHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgaXNTaWduYXR1cmVWYWxpZCA9IHBsdWdpbi5zaWduYXR1cmUgPT09IFBsdWdpblNpZ25hdHVyZVN0YXR1cy52YWxpZDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9sYXRlc3QvcGx1Z2lucy9wbHVnaW4tc2lnbmF0dXJlcy9cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cbiAgICAgID5cbiAgICAgICAgPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz5cbiAgICAgIDwvYT5cblxuICAgICAge2lzU2lnbmF0dXJlVmFsaWQgJiYgKFxuICAgICAgICA8UGx1Z2luU2lnbmF0dXJlRGV0YWlsc0JhZGdlIHNpZ25hdHVyZVR5cGU9e3BsdWdpbi5zaWduYXR1cmVUeXBlfSBzaWduYXR1cmVPcmc9e3BsdWdpbi5zaWduYXR1cmVPcmd9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGAsXG4gICAgbGluazogY3NzYFxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgUGx1Z2luRXJyb3JDb2RlLCBQbHVnaW5TaWduYXR1cmVTdGF0dXMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG59O1xuXG4vLyBEZXNpZ25lZCB0byBzaG93IHNpZ25hdHVyZSBpbmZvcm1hdGlvbiBpbnNpZGUgdGhlIGFjdGl2ZSB0YWIgb24gdGhlIHBsdWdpbidzIGRldGFpbHMgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRldGFpbHNTaWduYXR1cmUoeyBjbGFzc05hbWUsIHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBpc1NpZ25hdHVyZVZhbGlkID0gcGx1Z2luLnNpZ25hdHVyZSA9PT0gUGx1Z2luU2lnbmF0dXJlU3RhdHVzLnZhbGlkO1xuICBjb25zdCBpc0NvcmUgPSBwbHVnaW4uc2lnbmF0dXJlID09PSBQbHVnaW5TaWduYXR1cmVTdGF0dXMuaW50ZXJuYWw7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBwbHVnaW4uaXNEaXNhYmxlZCAmJiBpc0Rpc2FibGVkRHVlVG9vU2lnbmF0dXJlRXJyb3IocGx1Z2luLmVycm9yKTtcblxuICAvLyBUaGUgYmFzaWMgaW5mb3JtYXRpb24gaXMgYWxyZWFkeSBhdmFpbGFibGUgaW4gdGhlIGhlYWRlclxuICBpZiAoaXNTaWduYXR1cmVWYWxpZCB8fCBpc0NvcmUgfHwgaXNEaXNhYmxlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnRcbiAgICAgIHNldmVyaXR5PVwid2FybmluZ1wiXG4gICAgICB0aXRsZT1cIkludmFsaWQgcGx1Z2luIHNpZ25hdHVyZVwiXG4gICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGx1Z2luUGFnZS5zaWduYXR1cmVJbmZvfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgPlxuICAgICAgPHA+XG4gICAgICAgIEdyYWZhbmEgTGFicyBjaGVja3MgZWFjaCBwbHVnaW4gdG8gdmVyaWZ5IHRoYXQgaXQgaGFzIGEgdmFsaWQgZGlnaXRhbCBzaWduYXR1cmUuIFBsdWdpbiBzaWduYXR1cmUgdmVyaWZpY2F0aW9uXG4gICAgICAgIGlzIHBhcnQgb2Ygb3VyIHNlY3VyaXR5IG1lYXN1cmVzIHRvIGVuc3VyZSBwbHVnaW5zIGFyZSBzYWZlIGFuZCB0cnVzdHdvcnRoeS4gR3JhZmFuYSBMYWJzIGNhbuKAmXQgZ3VhcmFudGVlIHRoZVxuICAgICAgICBpbnRlZ3JpdHkgb2YgdGhpcyB1bnNpZ25lZCBwbHVnaW4uIEFzayB0aGUgcGx1Z2luIGF1dGhvciB0byByZXF1ZXN0IGl0IHRvIGJlIHNpZ25lZC5cbiAgICAgIDwvcD5cblxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9wbHVnaW5zL3BsdWdpbi1zaWduYXR1cmVzL1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgID5cbiAgICAgICAgUmVhZCBtb3JlIGFib3V0IHBsdWdpbnMgc2lnbmluZy5cbiAgICAgIDwvYT5cbiAgICA8L0FsZXJ0PlxuICApO1xufVxuXG5mdW5jdGlvbiBpc0Rpc2FibGVkRHVlVG9vU2lnbmF0dXJlRXJyb3IoZXJyb3I6IFBsdWdpbkVycm9yQ29kZSB8IHVuZGVmaW5lZCkge1xuICAvLyBJZiB0aGUgcGx1Z2luIGlzIGRpc2FibGVkIGR1ZSB0byBzaWduYXR1cmUgZXJyb3Igd2UgcmVseSBvbiB0aGUgZGlzYWJsZWRcbiAgLy8gZXJyb3IgbWVzc2FnZSBpbnN0YWQgb2YgdGhlIHdhcm5pbmcgYWJvdXQgdGhlIHNpZ25hdHVyZS5cblxuICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUuaW52YWxpZFNpZ25hdHVyZTpcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5taXNzaW5nU2lnbmF0dXJlOlxuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1vZGlmaWVkU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFBsdWdpbkxvZ29Qcm9wcyA9IHtcbiAgYWx0OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5Mb2dvKHsgYWx0LCBjbGFzc05hbWUsIHNyYywgaGVpZ2h0IH06IFBsdWdpbkxvZ29Qcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIC8vIEB0cy1pZ25vcmUgLSByZWFjdCBkb2Vzbid0IGtub3cgYWJvdXQgbG9hZGluZyBhdHRyLlxuICByZXR1cm4gPGltZyBzcmM9e3NyY30gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGFsdD17YWx0fSBsb2FkaW5nPVwibGF6eVwiIGhlaWdodD17aGVpZ2h0fSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQbHVnaW5TaWduYXR1cmVUeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyLCBJY29uLCBCYWRnZSwgSWNvbk5hbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmNvbnN0IFNJR05BVFVSRV9JQ09OUzogUmVjb3JkPHN0cmluZywgSWNvbk5hbWU+ID0ge1xuICBbUGx1Z2luU2lnbmF0dXJlVHlwZS5ncmFmYW5hXTogJ2dyYWZhbmEnLFxuICBbUGx1Z2luU2lnbmF0dXJlVHlwZS5jb21tZXJjaWFsXTogJ3NoaWVsZCcsXG4gIFtQbHVnaW5TaWduYXR1cmVUeXBlLmNvbW11bml0eV06ICdzaGllbGQnLFxuICBERUZBVUxUOiAnc2hpZWxkLWV4Y2xhbWF0aW9uJyxcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNpZ25hdHVyZVR5cGU/OiBQbHVnaW5TaWduYXR1cmVUeXBlO1xuICBzaWduYXR1cmVPcmc/OiBzdHJpbmc7XG59O1xuXG4vLyBTaG93cyBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGEgdmFsaWQgc2lnbmF0dXJlXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luU2lnbmF0dXJlRGV0YWlsc0JhZGdlKHsgc2lnbmF0dXJlVHlwZSwgc2lnbmF0dXJlT3JnID0gJycgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghc2lnbmF0dXJlVHlwZSAmJiAhc2lnbmF0dXJlT3JnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzaWduYXR1cmVUeXBlVGV4dCA9IHNpZ25hdHVyZVR5cGUgPT09IFBsdWdpblNpZ25hdHVyZVR5cGUuZ3JhZmFuYSA/ICdHcmFmYW5hIExhYnMnIDogY2FwaXRhbGl6ZShzaWduYXR1cmVUeXBlKTtcbiAgY29uc3Qgc2lnbmF0dXJlSWNvbiA9IFNJR05BVFVSRV9JQ09OU1tzaWduYXR1cmVUeXBlIHx8ICcnXSB8fCBTSUdOQVRVUkVfSUNPTlMuREVGQVVMVDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGV0YWlsc0JhZGdlPlxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLnN0cm9uZ30+TGV2ZWw6Jm5ic3A7PC9zdHJvbmc+XG4gICAgICAgIDxJY29uIHNpemU9XCJ4c1wiIG5hbWU9e3NpZ25hdHVyZUljb259IC8+XG4gICAgICAgICZuYnNwO1xuICAgICAgICB7c2lnbmF0dXJlVHlwZVRleHR9XG4gICAgICA8L0RldGFpbHNCYWRnZT5cblxuICAgICAgPERldGFpbHNCYWRnZT5cbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy5zdHJvbmd9PlNpZ25lZCBieTo8L3N0cm9uZz4ge3NpZ25hdHVyZU9yZ31cbiAgICAgIDwvRGV0YWlsc0JhZGdlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgRGV0YWlsc0JhZGdlOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiA8QmFkZ2UgY29sb3I9XCJncmVlblwiIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfSB0ZXh0PXs8PntjaGlsZHJlbn08Lz59IC8+O1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBiYWRnZTogY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuY2FudmFzfTtcbiAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLmJvcmRlci5zdHJvbmd9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygpfTtcbiAgYCxcbiAgc3Ryb25nOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gIGAsXG4gIGljb246IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmltcG9ydCB7IGRhdGVUaW1lRm9ybWF0VGltZUFnbywgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRMYXRlc3RDb21wYXRpYmxlVmVyc2lvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2ZXJzaW9ucz86IFZlcnNpb25bXTtcbiAgaW5zdGFsbGVkVmVyc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFZlcnNpb25MaXN0ID0gKHsgdmVyc2lvbnMgPSBbXSwgaW5zdGFsbGVkVmVyc2lvbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGxhdGVzdENvbXBhdGlibGVWZXJzaW9uID0gZ2V0TGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24odmVyc2lvbnMpO1xuXG4gIGlmICh2ZXJzaW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPHA+Tm8gdmVyc2lvbiBoaXN0b3J5IHdhcyBmb3VuZC48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPlZlcnNpb248L3RoPlxuICAgICAgICAgIDx0aD5MYXN0IHVwZGF0ZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge3ZlcnNpb25zLm1hcCgodmVyc2lvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzSW5zdGFsbGVkVmVyc2lvbiA9IGluc3RhbGxlZFZlcnNpb24gPT09IHZlcnNpb24udmVyc2lvbjtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT17dmVyc2lvbi52ZXJzaW9ufT5cbiAgICAgICAgICAgICAgey8qIFZlcnNpb24gbnVtYmVyICovfVxuICAgICAgICAgICAgICB7aXNJbnN0YWxsZWRWZXJzaW9uID8gKFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50VmVyc2lvbn0+e3ZlcnNpb24udmVyc2lvbn0gKGluc3RhbGxlZCB2ZXJzaW9uKTwvdGQ+XG4gICAgICAgICAgICAgICkgOiB2ZXJzaW9uLnZlcnNpb24gPT09IGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPy52ZXJzaW9uID8gKFxuICAgICAgICAgICAgICAgIDx0ZD57dmVyc2lvbi52ZXJzaW9ufSAobGF0ZXN0IGNvbXBhdGlibGUgdmVyc2lvbik8L3RkPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDx0ZD57dmVyc2lvbi52ZXJzaW9ufTwvdGQ+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIExhc3QgdXBkYXRlZCAqL31cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17aXNJbnN0YWxsZWRWZXJzaW9uID8gc3R5bGVzLmN1cnJlbnRWZXJzaW9uIDogJyd9PlxuICAgICAgICAgICAgICAgIHtkYXRlVGltZUZvcm1hdFRpbWVBZ28odmVyc2lvbi5jcmVhdGVkQXQpfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIsIDQsIDMpfTtcbiAgYCxcbiAgdGFibGU6IGNzc2BcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRkLFxuICAgIHRoIHtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygpfSAwO1xuICAgIH1cbiAgICB0aCB7XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5oNS5mb250U2l6ZX07XG4gICAgfVxuICBgLFxuICBjdXJyZW50VmVyc2lvbjogY3NzYFxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGR9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgbG9hZFBsdWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHVzZVBsdWdpbkNvbmZpZyA9IChwbHVnaW4/OiBDYXRhbG9nUGx1Z2luKSA9PiB7XG4gIHJldHVybiB1c2VBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFwbHVnaW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChwbHVnaW4uaXNJbnN0YWxsZWQgJiYgIXBsdWdpbi5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbG9hZFBsdWdpbihwbHVnaW4uaWQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgW3BsdWdpbj8uaWQsIHBsdWdpbj8uaXNJbnN0YWxsZWQsIHBsdWdpbj8uaXNEaXNhYmxlZF0pO1xufTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUGx1Z2luSW5jbHVkZVR5cGUsIFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4sIFBsdWdpbkRldGFpbHNUYWIsIFBsdWdpblRhYklkcywgUGx1Z2luVGFiTGFiZWxzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUGx1Z2luQ29uZmlnIH0gZnJvbSAnLi4vaG9va3MvdXNlUGx1Z2luQ29uZmlnJztcbmltcG9ydCB7IGlzT3JnQWRtaW4gfSBmcm9tICcuLi9wZXJtaXNzaW9ucyc7XG5cbnR5cGUgUmV0dXJuVHlwZSA9IHtcbiAgZXJyb3I6IEVycm9yIHwgdW5kZWZpbmVkO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICB0YWJzOiBQbHVnaW5EZXRhaWxzVGFiW107XG4gIGRlZmF1bHRUYWI6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VQbHVnaW5EZXRhaWxzVGFicyA9IChwbHVnaW4/OiBDYXRhbG9nUGx1Z2luLCBkZWZhdWx0VGFiczogUGx1Z2luRGV0YWlsc1RhYltdID0gW10pOiBSZXR1cm5UeXBlID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgdmFsdWU6IHBsdWdpbkNvbmZpZyB9ID0gdXNlUGx1Z2luQ29uZmlnKHBsdWdpbik7XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gQm9vbGVhbihwbHVnaW4/LmlzUHVibGlzaGVkKTtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTtcblxuICBjb25zdCBbdGFicywgZGVmYXVsdFRhYl0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjYW5Db25maWd1cmVQbHVnaW5zID0gaXNPcmdBZG1pbigpO1xuICAgIGNvbnN0IHRhYnM6IFBsdWdpbkRldGFpbHNUYWJbXSA9IFsuLi5kZWZhdWx0VGFic107XG4gICAgbGV0IGRlZmF1bHRUYWI7XG5cbiAgICBpZiAoaXNQdWJsaXNoZWQpIHtcbiAgICAgIHRhYnMucHVzaCh7XG4gICAgICAgIGxhYmVsOiBQbHVnaW5UYWJMYWJlbHMuVkVSU0lPTlMsXG4gICAgICAgIGljb246ICdoaXN0b3J5JyxcbiAgICAgICAgaWQ6IFBsdWdpblRhYklkcy5WRVJTSU9OUyxcbiAgICAgICAgaHJlZjogYCR7cGF0aG5hbWV9P3BhZ2U9JHtQbHVnaW5UYWJJZHMuVkVSU0lPTlN9YCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE5vdCBleHRlbmRpbmcgdGhlIHRhYnMgd2l0aCB0aGUgY29uZmlnIHBhZ2VzIGlmIHRoZSBwbHVnaW4gaXMgbm90IGluc3RhbGxlZFxuICAgIGlmICghcGx1Z2luQ29uZmlnKSB7XG4gICAgICBkZWZhdWx0VGFiID0gUGx1Z2luVGFiSWRzLk9WRVJWSUVXO1xuICAgICAgcmV0dXJuIFt0YWJzLCBkZWZhdWx0VGFiXTtcbiAgICB9XG5cbiAgICBpZiAoY2FuQ29uZmlndXJlUGx1Z2lucykge1xuICAgICAgaWYgKHBsdWdpbkNvbmZpZy5tZXRhLnR5cGUgPT09IFBsdWdpblR5cGUuYXBwKSB7XG4gICAgICAgIGlmIChwbHVnaW5Db25maWcuYW5ndWxhckNvbmZpZ0N0cmwpIHtcbiAgICAgICAgICB0YWJzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6ICdDb25maWcnLFxuICAgICAgICAgICAgaWNvbjogJ2NvZycsXG4gICAgICAgICAgICBpZDogUGx1Z2luVGFiSWRzLkNPTkZJRyxcbiAgICAgICAgICAgIGhyZWY6IGAke3BhdGhuYW1lfT9wYWdlPSR7UGx1Z2luVGFiSWRzLkNPTkZJR31gLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRlZmF1bHRUYWIgPSBQbHVnaW5UYWJJZHMuQ09ORklHO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsdWdpbkNvbmZpZy5jb25maWdQYWdlcykge1xuICAgICAgICAgIGZvciAoY29uc3QgcGFnZSBvZiBwbHVnaW5Db25maWcuY29uZmlnUGFnZXMpIHtcbiAgICAgICAgICAgIHRhYnMucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBwYWdlLnRpdGxlLFxuICAgICAgICAgICAgICBpY29uOiBwYWdlLmljb24sXG4gICAgICAgICAgICAgIGlkOiBwYWdlLmlkLFxuICAgICAgICAgICAgICBocmVmOiBgJHtwYXRobmFtZX0/cGFnZT0ke3BhZ2UuaWR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFkZWZhdWx0VGFiKSB7XG4gICAgICAgICAgICAgIGRlZmF1bHRUYWIgPSBwYWdlLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbHVnaW5Db25maWcubWV0YS5pbmNsdWRlcz8uZmluZCgoaW5jbHVkZSkgPT4gaW5jbHVkZS50eXBlID09PSBQbHVnaW5JbmNsdWRlVHlwZS5kYXNoYm9hcmQpKSB7XG4gICAgICAgICAgdGFicy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGFzaGJvYXJkcycsXG4gICAgICAgICAgICBpY29uOiAnYXBwcycsXG4gICAgICAgICAgICBpZDogUGx1Z2luVGFiSWRzLkRBU0hCT0FSRFMsXG4gICAgICAgICAgICBocmVmOiBgJHtwYXRobmFtZX0/cGFnZT0ke1BsdWdpblRhYklkcy5EQVNIQk9BUkRTfWAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWRlZmF1bHRUYWIpIHtcbiAgICAgIGRlZmF1bHRUYWIgPSBQbHVnaW5UYWJJZHMuT1ZFUlZJRVc7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt0YWJzLCBkZWZhdWx0VGFiXTtcbiAgfSwgW3BsdWdpbkNvbmZpZywgZGVmYXVsdFRhYnMsIHBhdGhuYW1lLCBpc1B1Ymxpc2hlZF0pO1xuXG4gIHJldHVybiB7XG4gICAgZXJyb3IsXG4gICAgbG9hZGluZyxcbiAgICB0YWJzLFxuICAgIGRlZmF1bHRUYWIsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyLCBUYWJzQmFyLCBUYWJDb250ZW50LCBUYWIsIEFsZXJ0LCBJY29uTmFtZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IFBsdWdpbkRldGFpbHNTaWduYXR1cmUgfSBmcm9tICcuLi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNTaWduYXR1cmUnO1xuaW1wb3J0IHsgUGx1Z2luRGV0YWlsc0hlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0hlYWRlcic7XG5pbXBvcnQgeyBQbHVnaW5EZXRhaWxzQm9keSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0JvZHknO1xuaW1wb3J0IHsgUGFnZSBhcyBQbHVnaW5QYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGVyJztcbmltcG9ydCB7IFBsdWdpblRhYkxhYmVscywgUGx1Z2luVGFiSWRzLCBQbHVnaW5EZXRhaWxzVGFiIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlR2V0U2luZ2xlLCB1c2VGZXRjaFN0YXR1cywgdXNlRmV0Y2hEZXRhaWxzU3RhdHVzIH0gZnJvbSAnLi4vc3RhdGUvaG9va3MnO1xuaW1wb3J0IHsgdXNlUGx1Z2luRGV0YWlsc1RhYnMgfSBmcm9tICcuLi9ob29rcy91c2VQbHVnaW5EZXRhaWxzVGFicyc7XG5pbXBvcnQgeyBBcHBOb3RpZmljYXRpb25TZXZlcml0eSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBQbHVnaW5EZXRhaWxzRGlzYWJsZWRFcnJvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0Rpc2FibGVkRXJyb3InO1xuXG50eXBlIFByb3BzID0gR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyBwbHVnaW5JZD86IHN0cmluZyB9PjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGx1Z2luRGV0YWlscyh7IG1hdGNoLCBxdWVyeVBhcmFtcyB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXM6IHsgcGx1Z2luSWQgPSAnJyB9LFxuICAgIHVybCxcbiAgfSA9IG1hdGNoO1xuICBjb25zdCBwYXJlbnRVcmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5sYXN0SW5kZXhPZignLycpKTtcbiAgY29uc3QgZGVmYXVsdFRhYnM6IFBsdWdpbkRldGFpbHNUYWJbXSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogUGx1Z2luVGFiTGFiZWxzLk9WRVJWSUVXLFxuICAgICAgaWNvbjogJ2ZpbGUtYWx0JyxcbiAgICAgIGlkOiBQbHVnaW5UYWJJZHMuT1ZFUlZJRVcsXG4gICAgICBocmVmOiBgJHt1cmx9P3BhZ2U9JHtQbHVnaW5UYWJJZHMuT1ZFUlZJRVd9YCxcbiAgICB9LFxuICBdO1xuICBjb25zdCBwbHVnaW4gPSB1c2VHZXRTaW5nbGUocGx1Z2luSWQpOyAvLyBmZXRjaGVzIHRoZSBsb2NhbHBsdWdpbiBzZXR0aW5nc1xuICBjb25zdCB7IHRhYnMsIGRlZmF1bHRUYWIgfSA9IHVzZVBsdWdpbkRldGFpbHNUYWJzKHBsdWdpbiwgZGVmYXVsdFRhYnMpO1xuICBjb25zdCB7IGlzTG9hZGluZzogaXNGZXRjaExvYWRpbmcgfSA9IHVzZUZldGNoU3RhdHVzKCk7XG4gIGNvbnN0IHsgaXNMb2FkaW5nOiBpc0ZldGNoRGV0YWlsc0xvYWRpbmcgfSA9IHVzZUZldGNoRGV0YWlsc1N0YXR1cygpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHByZXZUYWJzID0gdXNlUHJldmlvdXModGFicyk7XG4gIGNvbnN0IHBhZ2VJZCA9IChxdWVyeVBhcmFtcy5wYWdlIGFzIFBsdWdpblRhYklkcykgfHwgZGVmYXVsdFRhYjtcblxuICAvLyBJZiBhbiBhcHAgcGx1Z2luIGlzIHVuaW5zdGFsbGVkIHdlIG5lZWQgdG8gcmVzZXQgdGhlIGFjdGl2ZSB0YWIgd2hlbiB0aGUgY29uZmlnIC8gZGFzaGJvYXJkcyB0YWJzIGFyZSByZW1vdmVkLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhc1VuaW5zdGFsbGVkV2l0aENvbmZpZ1BhZ2VzID0gcHJldlRhYnMgJiYgcHJldlRhYnMubGVuZ3RoID4gdGFicy5sZW5ndGg7XG4gICAgY29uc3QgaXNWaWV3aW5nQUNvbmZpZ1BhZ2UgPSBwYWdlSWQgIT09IFBsdWdpblRhYklkcy5PVkVSVklFVyAmJiBwYWdlSWQgIT09IFBsdWdpblRhYklkcy5WRVJTSU9OUztcblxuICAgIGlmIChoYXNVbmluc3RhbGxlZFdpdGhDb25maWdQYWdlcyAmJiBpc1ZpZXdpbmdBQ29uZmlnUGFnZSkge1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnJlcGxhY2UoYCR7dXJsfT9wYWdlPSR7UGx1Z2luVGFiSWRzLk9WRVJWSUVXfWApO1xuICAgIH1cbiAgfSwgW3BhZ2VJZCwgdXJsLCB0YWJzLCBwcmV2VGFic10pO1xuXG4gIGlmIChpc0ZldGNoTG9hZGluZyB8fCBpc0ZldGNoRGV0YWlsc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxMb2FkZXIgLz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFwbHVnaW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PXtBcHBOb3RpZmljYXRpb25TZXZlcml0eS5XYXJuaW5nfSB0aXRsZT1cIlBsdWdpbiBub3QgZm91bmRcIj5cbiAgICAgICAgICBUaGF0IHBsdWdpbiBjYW5ub3QgYmUgZm91bmQuIFBsZWFzZSBjaGVjayB0aGUgdXJsIGlzIGNvcnJlY3Qgb3IgPGJyIC8+XG4gICAgICAgICAgZ28gdG8gdGhlIDxhIGhyZWY9e3BhcmVudFVybH0+cGx1Z2luIGNhdGFsb2c8L2E+LlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8UGx1Z2luUGFnZT5cbiAgICAgICAgPFBsdWdpbkRldGFpbHNIZWFkZXIgY3VycmVudFVybD17YCR7dXJsfT9wYWdlPSR7cGFnZUlkfWB9IHBhcmVudFVybD17cGFyZW50VXJsfSBwbHVnaW49e3BsdWdpbn0gLz5cblxuICAgICAgICB7LyogVGFiIG5hdmlnYXRpb24gKi99XG4gICAgICAgIDxUYWJzQmFyPlxuICAgICAgICAgIHt0YWJzLm1hcCgodGFiOiBQbHVnaW5EZXRhaWxzVGFiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAga2V5PXt0YWIubGFiZWx9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3RhYi5sYWJlbH1cbiAgICAgICAgICAgICAgICBocmVmPXt0YWIuaHJlZn1cbiAgICAgICAgICAgICAgICBpY29uPXt0YWIuaWNvbiBhcyBJY29uTmFtZX1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e3RhYi5pZCA9PT0gcGFnZUlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UYWJzQmFyPlxuXG4gICAgICAgIHsvKiBBY3RpdmUgdGFiICovfVxuICAgICAgICA8VGFiQ29udGVudCBjbGFzc05hbWU9e3N0eWxlcy50YWJDb250ZW50fT5cbiAgICAgICAgICA8UGx1Z2luRGV0YWlsc1NpZ25hdHVyZSBwbHVnaW49e3BsdWdpbn0gY2xhc3NOYW1lPXtzdHlsZXMuYWxlcnR9IC8+XG4gICAgICAgICAgPFBsdWdpbkRldGFpbHNEaXNhYmxlZEVycm9yIHBsdWdpbj17cGx1Z2lufSBjbGFzc05hbWU9e3N0eWxlcy5hbGVydH0gLz5cbiAgICAgICAgICA8UGx1Z2luRGV0YWlsc0JvZHkgcXVlcnlQYXJhbXM9e3F1ZXJ5UGFyYW1zfSBwbHVnaW49e3BsdWdpbn0gcGFnZUlkPXtwYWdlSWR9IC8+XG4gICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgIDwvUGx1Z2luUGFnZT5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhbGVydDogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBgLFxuICAgIC8vIE5lZWRlZCBkdWUgdG8gYmxvY2sgZm9ybWF0dGluZyBjb250ZXh0XG4gICAgdGFiQ29udGVudDogY3NzYFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBQbHVnaW5FcnJvciB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2V0RGlzcGxheU1vZGUgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgZmV0Y2hBbGwsIGZldGNoRGV0YWlscywgZmV0Y2hSZW1vdGVQbHVnaW5zLCBpbnN0YWxsLCB1bmluc3RhbGwgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUsIFBsdWdpbkxpc3REaXNwbGF5TW9kZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIGZpbmQsXG4gIHNlbGVjdEFsbCxcbiAgc2VsZWN0QnlJZCxcbiAgc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyxcbiAgc2VsZWN0UmVxdWVzdEVycm9yLFxuICBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkLFxuICBzZWxlY3REaXNwbGF5TW9kZSxcbiAgc2VsZWN0UGx1Z2luRXJyb3JzLFxufSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzb3J0UGx1Z2lucywgU29ydGVycyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG50eXBlIEZpbHRlcnMgPSB7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xuICBmaWx0ZXJCeT86IHN0cmluZztcbiAgZmlsdGVyQnlUeXBlPzogc3RyaW5nO1xuICBzb3J0Qnk/OiBTb3J0ZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbFdpdGhGaWx0ZXJzID0gKHtcbiAgcXVlcnkgPSAnJyxcbiAgZmlsdGVyQnkgPSAnaW5zdGFsbGVkJyxcbiAgZmlsdGVyQnlUeXBlID0gJ2FsbCcsXG4gIHNvcnRCeSA9IFNvcnRlcnMubmFtZUFzYyxcbn06IEZpbHRlcnMpID0+IHtcbiAgdXNlRmV0Y2hBbGwoKTtcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZVNlbGVjdG9yKGZpbmQocXVlcnksIGZpbHRlckJ5LCBmaWx0ZXJCeVR5cGUpKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaFN0YXR1cygpO1xuICBjb25zdCBzb3J0ZWRBbmRGaWx0ZXJlZCA9IHNvcnRQbHVnaW5zKGZpbHRlcmVkLCBzb3J0QnkpO1xuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIHBsdWdpbnM6IHNvcnRlZEFuZEZpbHRlcmVkLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbCA9ICgpOiBDYXRhbG9nUGx1Z2luW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RBbGwpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldFNpbmdsZSA9IChpZDogc3RyaW5nKTogQ2F0YWxvZ1BsdWdpbiB8IHVuZGVmaW5lZCA9PiB7XG4gIHVzZUZldGNoQWxsKCk7XG4gIHVzZUZldGNoRGV0YWlscyhpZCk7XG5cbiAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUpID0+IHNlbGVjdEJ5SWQoc3RhdGUsIGlkKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0RXJyb3JzID0gKCk6IFBsdWdpbkVycm9yW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RQbHVnaW5FcnJvcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuIChpZDogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nLCBpc1VwZGF0aW5nPzogYm9vbGVhbikgPT4gZGlzcGF0Y2goaW5zdGFsbCh7IGlkLCB2ZXJzaW9uLCBpc1VwZGF0aW5nIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVbmluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICByZXR1cm4gKGlkOiBzdHJpbmcpID0+IGRpc3BhdGNoKHVuaW5zdGFsbChpZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hSZW1vdGVQbHVnaW5zLnR5cGVQcmVmaXgpKTtcbiAgcmV0dXJuIGVycm9yID09PSBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoQWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hBbGwudHlwZVByZWZpeCkpO1xuXG4gIHJldHVybiB7IGlzTG9hZGluZywgZXJyb3IgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VGZXRjaERldGFpbHNTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcblxuICByZXR1cm4geyBpc0xvYWRpbmcsIGVycm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNJbnN0YWxsaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyhpbnN0YWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNJbnN0YWxsaW5nLCBlcnJvciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVVuaW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNVbmluc3RhbGxpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNVbmluc3RhbGxpbmcsIGVycm9yIH07XG59O1xuXG4vLyBPbmx5IGZldGNoZXMgaW4gY2FzZSB0aGV5IHdlcmUgbm90IGZldGNoZWQgeWV0XG5leHBvcnQgY29uc3QgdXNlRmV0Y2hBbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNOb3RGZXRjaGVkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZChmZXRjaEFsbC50eXBlUHJlZml4KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc05vdEZldGNoZWQgJiYgZGlzcGF0Y2goZmV0Y2hBbGwoKSk7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoRGV0YWlscyA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcGx1Z2luID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc2VsZWN0QnlJZChzdGF0ZSwgaWQpKTtcbiAgY29uc3QgaXNOb3RGZXRjaGluZyA9ICF1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoRGV0YWlscy50eXBlUHJlZml4KSk7XG4gIGNvbnN0IHNob3VsZEZldGNoID0gaXNOb3RGZXRjaGluZyAmJiBwbHVnaW4gJiYgIXBsdWdpbi5kZXRhaWxzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvdWxkRmV0Y2ggJiYgZGlzcGF0Y2goZmV0Y2hEZXRhaWxzKGlkKSk7XG4gIH0sIFtwbHVnaW5dKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZURpc3BsYXlNb2RlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGRpc3BsYXlNb2RlID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGlzcGxheU1vZGUpO1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheU1vZGUsXG4gICAgc2V0RGlzcGxheU1vZGU6ICh2OiBQbHVnaW5MaXN0RGlzcGxheU1vZGUpID0+IGRpc3BhdGNoKHNldERpc3BsYXlNb2RlKHYpKSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgUGx1Z2luRXJyb3IsIFBsdWdpbkVycm9yQ29kZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUmVxdWVzdFN0YXR1cywgUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBwbHVnaW5zQWRhcHRlciB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSb290ID0gKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc3RhdGUucGx1Z2lucztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Um9vdCwgKHsgaXRlbXMgfSkgPT4gaXRlbXMpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlzcGxheU1vZGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyBzZXR0aW5ncyB9KSA9PiBzZXR0aW5ncy5kaXNwbGF5TW9kZSk7XG5cbmV4cG9ydCBjb25zdCB7IHNlbGVjdEFsbCwgc2VsZWN0QnlJZCB9ID0gcGx1Z2luc0FkYXB0ZXIuZ2V0U2VsZWN0b3JzKHNlbGVjdEl0ZW1zKTtcblxuY29uc3Qgc2VsZWN0SW5zdGFsbGVkID0gKGZpbHRlckJ5OiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEFsbCwgKHBsdWdpbnMpID0+XG4gICAgcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gKGZpbHRlckJ5ID09PSAnaW5zdGFsbGVkJyA/IHBsdWdpbi5pc0luc3RhbGxlZCA6ICFwbHVnaW4uaXNDb3JlKSlcbiAgKTtcblxuY29uc3QgZmluZEJ5SW5zdGFsbEFuZFR5cGUgPSAoZmlsdGVyQnk6IHN0cmluZywgZmlsdGVyQnlUeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEluc3RhbGxlZChmaWx0ZXJCeSksIChwbHVnaW5zKSA9PlxuICAgIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IGZpbHRlckJ5VHlwZSA9PT0gJ2FsbCcgfHwgcGx1Z2luLnR5cGUgPT09IGZpbHRlckJ5VHlwZSlcbiAgKTtcblxuY29uc3QgZmluZEJ5S2V5d29yZCA9IChzZWFyY2hCeTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RBbGwsIChwbHVnaW5zKSA9PiB7XG4gICAgaWYgKHNlYXJjaEJ5ID09PSAnJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IFN0cmluZ1tdID0gW107XG4gICAgICBpZiAocGx1Z2luLm5hbWUpIHtcbiAgICAgICAgZmllbGRzLnB1c2gocGx1Z2luLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbHVnaW4ub3JnTmFtZSkge1xuICAgICAgICBmaWVsZHMucHVzaChwbHVnaW4ub3JnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkcy5zb21lKChmKSA9PiBmLmluY2x1ZGVzKHNlYXJjaEJ5LnRvTG93ZXJDYXNlKCkpKTtcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gKHNlYXJjaEJ5OiBzdHJpbmcsIGZpbHRlckJ5OiBzdHJpbmcsIGZpbHRlckJ5VHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBmaW5kQnlJbnN0YWxsQW5kVHlwZShmaWx0ZXJCeSwgZmlsdGVyQnlUeXBlKSxcbiAgICBmaW5kQnlLZXl3b3JkKHNlYXJjaEJ5KSxcbiAgICAoZmlsdGVyZWRQbHVnaW5zLCBzZWFyY2hlZFBsdWdpbnMpID0+IHtcbiAgICAgIHJldHVybiBzZWFyY2hCeSA9PT0gJycgPyBmaWx0ZXJlZFBsdWdpbnMgOiBzZWFyY2hlZFBsdWdpbnM7XG4gICAgfVxuICApO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UGx1Z2luRXJyb3JzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QWxsLCAocGx1Z2lucykgPT5cbiAgcGx1Z2luc1xuICAgID8gcGx1Z2luc1xuICAgICAgICAuZmlsdGVyKChwKSA9PiBCb29sZWFuKHAuZXJyb3IpKVxuICAgICAgICAubWFwKFxuICAgICAgICAgIChwKTogUGx1Z2luRXJyb3IgPT4gKHtcbiAgICAgICAgICAgIHBsdWdpbklkOiBwLmlkLFxuICAgICAgICAgICAgZXJyb3JDb2RlOiBwIS5lcnJvciBhcyBQbHVnaW5FcnJvckNvZGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIDogW11cbik7XG5cbi8vIFRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIGFyZSB1c2VkIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgb3V0c3RhbmRpbmcgb3IgY29tcGxldGVkIHBsdWdpbnMtcmVsYXRlZCBuZXR3b3JrIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlcXVlc3QgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyByZXF1ZXN0cyA9IHt9IH0pID0+IHJlcXVlc3RzW2FjdGlvblR5cGVdKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzUmVxdWVzdFBlbmRpbmcgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSZXF1ZXN0KGFjdGlvblR5cGUpLCAocmVxdWVzdCkgPT4gcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlBlbmRpbmcpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVxdWVzdEVycm9yID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+XG4gICAgcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlJlamVjdGVkID8gcmVxdWVzdD8uZXJyb3IgOiBudWxsXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+IHJlcXVlc3QgPT09IHVuZGVmaW5lZCk7XG4iLCJpbXBvcnQgeyBHcmFmYW5hUGx1Z2luLCBQYW5lbFBsdWdpbk1ldGEsIFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldFBsdWdpblNldHRpbmdzIH0gZnJvbSAnLi9wbHVnaW5TZXR0aW5ncyc7XG5pbXBvcnQgeyBpbXBvcnRBcHBQbHVnaW4sIGltcG9ydERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICcuL3BsdWdpbl9sb2FkZXInO1xuaW1wb3J0IHsgaW1wb3J0UGFuZWxQbHVnaW5Gcm9tTWV0YSB9IGZyb20gJy4vaW1wb3J0UGFuZWxQbHVnaW4nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFBsdWdpbihwbHVnaW5JZDogc3RyaW5nKTogUHJvbWlzZTxHcmFmYW5hUGx1Z2luPiB7XG4gIGNvbnN0IGluZm8gPSBhd2FpdCBnZXRQbHVnaW5TZXR0aW5ncyhwbHVnaW5JZCk7XG4gIGxldCByZXN1bHQ6IEdyYWZhbmFQbHVnaW4gfCB1bmRlZmluZWQ7XG5cbiAgaWYgKGluZm8udHlwZSA9PT0gUGx1Z2luVHlwZS5hcHApIHtcbiAgICByZXN1bHQgPSBhd2FpdCBpbXBvcnRBcHBQbHVnaW4oaW5mbyk7XG4gIH1cbiAgaWYgKGluZm8udHlwZSA9PT0gUGx1Z2luVHlwZS5kYXRhc291cmNlKSB7XG4gICAgcmVzdWx0ID0gYXdhaXQgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihpbmZvKTtcbiAgfVxuICBpZiAoaW5mby50eXBlID09PSBQbHVnaW5UeXBlLnBhbmVsKSB7XG4gICAgY29uc3QgcGFuZWxQbHVnaW4gPSBhd2FpdCBpbXBvcnRQYW5lbFBsdWdpbkZyb21NZXRhKGluZm8gYXMgUGFuZWxQbHVnaW5NZXRhKTtcbiAgICByZXN1bHQgPSBwYW5lbFBsdWdpbiBhcyB1bmtub3duIGFzIEdyYWZhbmFQbHVnaW47XG4gIH1cbiAgaWYgKGluZm8udHlwZSA9PT0gUGx1Z2luVHlwZS5yZW5kZXJlcikge1xuICAgIHJlc3VsdCA9IHsgbWV0YTogaW5mbyB9IGFzIEdyYWZhbmFQbHVnaW47XG4gIH1cblxuICBpZiAoIXJlc3VsdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBQbHVnaW4gdHlwZTogJyArIGluZm8udHlwZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcmV2aW91cyhzdGF0ZSkge1xuICAgIHZhciByZWYgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWYuY3VycmVudCA9IHN0YXRlO1xuICAgIH0pO1xuICAgIHJldHVybiByZWYuY3VycmVudDtcbn1cbiJdLCJuYW1lcyI6WyJjb25maWciLCJpc1RyaWFsIiwiZXhwaXJ5IiwibGljZW5zZUluZm8iLCJ0cmlhbEV4cGlyeSIsImhpZ2hsaWdodFRyaWFsIiwiZmVhdHVyZVRvZ2dsZXMiLCJmZWF0dXJlSGlnaGxpZ2h0cyIsIlJlYWN0IiwiQnV0dG9uIiwiSWNvbiIsIkRhc2hib2FyZHNUYWJsZSIsImRhc2hib2FyZHMiLCJvbkltcG9ydCIsIm9uUmVtb3ZlIiwiYnV0dG9uVGV4dCIsImRhc2hib2FyZCIsInJldmlzaW9uIiwiaW1wb3J0ZWRSZXZpc2lvbiIsIm1hcCIsImluZGV4IiwiaW1wb3J0ZWQiLCJpbXBvcnRlZFVybCIsInRpdGxlIiwidGV4dEFsaWduIiwiZGFzaGJvYXJkSWQiLCJsYXN0VmFsdWVGcm9tIiwibG9jYXRpb25VdGlsIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwibG9jYXRpb25TZXJ2aWNlIiwidXBkYXRlTmF2SW5kZXgiLCJnZXRCYWNrZW5kU3J2IiwiZ2V0RGF0YXNvdXJjZVNydiIsImltcG9ydERhdGFTb3VyY2VQbHVnaW4iLCJnZXRQbHVnaW5TZXR0aW5ncyIsImJ1aWxkQ2F0ZWdvcmllcyIsImJ1aWxkTmF2TW9kZWwiLCJkYXRhU291cmNlTG9hZGVkIiwiZGF0YVNvdXJjZU1ldGFMb2FkZWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWRlZCIsImRhdGFTb3VyY2VzTG9hZGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQiLCJ0ZXN0RGF0YVNvdXJjZUZhaWxlZCIsInRlc3REYXRhU291cmNlU3RhcnRpbmciLCJ0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCIsImdldERhdGFTb3VyY2UiLCJnZXREYXRhU291cmNlTWV0YSIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiY29udGV4dFNydiIsImluaXREYXRhU291cmNlU2V0dGluZ3MiLCJwYWdlSWQiLCJkZXBlbmRlbmNpZXMiLCJsb2FkRGF0YVNvdXJjZSIsImxvYWREYXRhU291cmNlTWV0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJFcnJvciIsImxvYWRlZERhdGFTb3VyY2UiLCJkYXRhU291cmNlU2V0dGluZ3MiLCJwbHVnaW4iLCJkYXRhU291cmNlIiwiZGF0YVNvdXJjZXMiLCJkYXRhU291cmNlTWV0YSIsInR5cGUiLCJpbXBvcnRlZFBsdWdpbiIsImVyciIsInRlc3REYXRhU291cmNlIiwiZGF0YVNvdXJjZU5hbWUiLCJkc0FwaSIsImdldCIsInRlc3REYXRhc291cmNlIiwid2l0aE5vQmFja2VuZENhY2hlIiwicmVzdWx0Iiwic3RhdHVzVGV4dCIsIm1lc3NhZ2UiLCJlcnJNZXNzYWdlIiwiZGV0YWlscyIsImRhdGEiLCJsb2FkRGF0YVNvdXJjZXMiLCJyZXNwb25zZSIsInVpZCIsImdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQiLCJwbHVnaW5JbmZvIiwiaXNCYWNrZW5kIiwiRGF0YVNvdXJjZUNsYXNzIiwicHJvdG90eXBlIiwibWV0YSIsImJhY2tlbmQiLCJieVVpZCIsImZldGNoIiwibWV0aG9kIiwidXJsIiwicGFyYW1zIiwic2hvd0Vycm9yQWxlcnQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJ0b1N0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFzc3VyZUJhc2VVcmwiLCJhZGREYXRhU291cmNlIiwiZ2V0U3RvcmUiLCJuZXdJbnN0YW5jZSIsIm5hbWUiLCJhY2Nlc3MiLCJpc0RlZmF1bHQiLCJsZW5ndGgiLCJuYW1lRXhpdHMiLCJmaW5kTmV3TmFtZSIsInBvc3QiLCJyZWxvYWQiLCJmZXRjaFVzZXJQZXJtaXNzaW9ucyIsInB1c2giLCJkYXRhc291cmNlIiwibG9hZERhdGFTb3VyY2VQbHVnaW5zIiwicGx1Z2lucyIsImVuYWJsZWQiLCJjYXRlZ29yaWVzIiwidXBkYXRlRGF0YVNvdXJjZSIsInB1dCIsImRlbGV0ZURhdGFTb3VyY2UiLCJkZWxldGUiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsIm5hbWVIYXNTdWZmaXgiLCJnZXROZXdOYW1lIiwiaW5jcmVtZW50TGFzdERpZ2l0IiwiZ2V0TGFzdERpZ2l0IiwiZW5kc1dpdGgiLCJzbGljZSIsImRpZ2l0IiwiUGx1Z2luVHlwZSIsImZlYXR1cmVFbmFibGVkIiwiaXRlbSIsImNhdGVnb3J5SW5kZXgiLCJwbHVnaW5JbmRleCIsImVudGVycHJpc2VQbHVnaW5zIiwiZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zIiwiY2F0ZWdvcnkiLCJlbnRlcnByaXNlUGx1Z2luIiwiZmluZCIsImVudGVycHJpc2UiLCJ1bmxpY2Vuc2VkIiwiaW5mbyIsImxpbmtzIiwibGluayIsImdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4iLCJzb3J0UGx1Z2lucyIsImMiLCJzb3J0aW5nUnVsZXMiLCJwcm9tZXRoZXVzIiwiZ3JhcGhpdGUiLCJsb2tpIiwibXlzcWwiLCJqYWVnZXIiLCJwb3N0Z3JlcyIsImdjbG91ZCIsInNvcnQiLCJhIiwiYiIsImFTb3J0IiwiYlNvcnQiLCJnZXRQaGFudG9tUGx1Z2luIiwiZGVzY3JpcHRpb24iLCJpbWdVcmwiLCJtb2R1bGUiLCJiYXNlVXJsIiwibG9nb3MiLCJzbWFsbCIsImxhcmdlIiwiYXV0aG9yIiwic2NyZWVuc2hvdHMiLCJ1cGRhdGVkIiwidmVyc2lvbiIsIm9wdGlvbnMiLCJwbHVnaW5DYXRhbG9nVVJMIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsIlByb0JhZGdlIiwibG9hZGluZ0RTVHlwZSIsInBsdWdpbk1ldGEiLCJoaWdobGlnaHRzRW5hYmxlZCIsIm5hdk1vZGVsIiwiaW1nIiwic3ViVGl0bGUiLCJ0ZXh0IiwiYnJlYWRjcnVtYnMiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImljb24iLCJjb25maWdQYWdlcyIsInBhZ2UiLCJpbmNsdWRlcyIsImhhc0Rhc2hib2FyZHMiLCJoYXNSb2xlIiwiaXNMb2FkaW5nTmF2IiwicGVybWlzc2lvbnNFeHBlcmltZW50SWQiLCJkc1Blcm1pc3Npb25zIiwidGFiU3VmZml4IiwiZXhwZXJpbWVudElkIiwiZXZlbnRWYXJpYW50IiwiaGFzUGVybWlzc2lvbiIsIkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkIiwiYW5hbHl0aWNzRXhwZXJpbWVudElkIiwiYW5hbHl0aWNzIiwiY2FjaGluZ0V4cGVyaW1lbnRJZCIsImNhY2hpbmciLCJoaWRlRnJvbVRhYnMiLCJnZXREYXRhU291cmNlTmF2IiwibWFpbiIsInBhZ2VOYW1lIiwibm9kZSIsImNoaWxkIiwiaW5kZXhPZiIsImdldERhdGFTb3VyY2VMb2FkaW5nTmF2IiwiYmFzaWNBdXRoIiwiYmFzaWNBdXRoVXNlciIsImJhc2ljQXV0aFBhc3N3b3JkIiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YWJhc2UiLCJqc29uRGF0YSIsImF1dGhUeXBlIiwiZGVmYXVsdFJlZ2lvbiIsIm9yZ0lkIiwicGFzc3dvcmQiLCJyZWFkT25seSIsInR5cGVOYW1lIiwidHlwZUxvZ29VcmwiLCJ1c2VyIiwic2VjdXJlSnNvbkZpZWxkcyIsImluY2x1ZGUiLCJ1bmRlZmluZWQiLCJnZXREYXRhU291cmNlcyIsInN0YXRlIiwicmVnZXgiLCJSZWdFeHAiLCJzZWFyY2hRdWVyeSIsInRlc3QiLCJnZXREYXRhU291cmNlUGx1Z2lucyIsImRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJkYXRhU291cmNlSWQiLCJnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IiwiZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwibGF5b3V0TW9kZSIsImdldERhdGFTb3VyY2VzQ291bnQiLCJkYXRhU291cmNlc0NvdW50IiwiUHVyZUNvbXBvbmVudCIsImNsb25lRGVlcCIsImV4dGVuZCIsImRlcHJlY2F0aW9uV2FybmluZyIsImdldEFuZ3VsYXJMb2FkZXIiLCJjc3MiLCJBcHBDb25maWdDdHJsV3JhcHBlciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBsdWdpbklkIiwibW9kZWwiLCJwcmVVcGRhdGVIb29rIiwidGhlbiIsInVwZGF0ZUNtZCIsInBpbm5lZCIsInNlY3VyZUpzb25EYXRhIiwicG9zdFVwZGF0ZUhvb2siLCJyZXMiLCJjYWxsYmFjayIsInVwZGF0ZSIsImFuZ3VsYXJDdHJsIiwicmVmcmVzaCIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiZWxlbWVudCIsImFwcCIsImxvYWRlciIsInRlbXBsYXRlIiwic2NvcGVQcm9wcyIsImN0cmwiLCJpc0FwcENvbmZpZ0N0cmwiLCJsb2FkIiwicmVuZGVyIiwid2l0aFJpZ2h0TWFyZ2luIiwibWFyZ2luUmlnaHQiLCJlbmFibGUiLCJkaXNhYmxlIiwiUGx1Z2luRXJyb3JDb2RlIiwiQmFkZ2UiLCJQbHVnaW5EaXNhYmxlZEJhZGdlIiwiZXJyb3IiLCJ0b29sdGlwIiwiZXJyb3JDb2RlVG9Ub29sdGlwIiwibW9kaWZpZWRTaWduYXR1cmUiLCJpbnZhbGlkU2lnbmF0dXJlIiwibWlzc2luZ1NpZ25hdHVyZSIsIkhvcml6b250YWxHcm91cCIsIlBsdWdpblNpZ25hdHVyZUJhZGdlIiwidXNlU3R5bGVzMiIsImdldEJhZGdlQ29sb3IiLCJQbHVnaW5FbnRlcnByaXNlQmFkZ2UiLCJjdXN0b21CYWRnZVN0eWxlcyIsIm9uQ2xpY2siLCJldiIsInByZXZlbnREZWZhdWx0Iiwib3BlbiIsInNpZ25hdHVyZSIsIlBsdWdpbkluc3RhbGxlZEJhZGdlIiwiUGx1Z2luVXBkYXRlQXZhaWxhYmxlQmFkZ2UiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJoYXNVcGRhdGUiLCJpc0NvcmUiLCJyZW5kZXJlciIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImJvZHlTbWFsbCIsImZvbnRTaXplIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJib3JkZXIiLCJzdHJvbmciLCJ1c2VQbHVnaW5Db25maWciLCJ1cGRhdGVQbHVnaW5TZXR0aW5ncyIsIkdldFN0YXJ0ZWRXaXRoQXBwIiwidmFsdWUiLCJwbHVnaW5Db25maWciLCJ1cGRhdGVQbHVnaW5TZXR0aW5nc0FuZFJlbG9hZCIsImUiLCJ1c2VDYWxsYmFjayIsInVzZURpc3BhdGNoIiwiaXNEYXRhU291cmNlRWRpdG9yIiwiR2V0U3RhcnRlZFdpdGhEYXRhU291cmNlIiwib25BZGREYXRhU291cmNlIiwiR2V0U3RhcnRlZFdpdGhQbHVnaW4iLCJpc0luc3RhbGxlZCIsImlzRGlzYWJsZWQiLCJMaW5rQnV0dG9uIiwiZ2V0RXh0ZXJuYWxNYW5hZ2VMaW5rIiwiUGx1Z2luU3RhdHVzIiwiRXh0ZXJuYWxseU1hbmFnZWRCdXR0b24iLCJwbHVnaW5TdGF0dXMiLCJleHRlcm5hbE1hbmFnZUxpbmsiLCJVUERBVEUiLCJVTklOU1RBTEwiLCJJbnN0YWxsQ29udHJvbHNCdXR0b24iLCJpc0luc3RhbGxDb250cm9sc0VuYWJsZWQiLCJ1c2VJc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUiLCJpc0dyYWZhbmFBZG1pbiIsIkluc3RhbGxDb250cm9scyIsImxhdGVzdENvbXBhdGlibGVWZXJzaW9uIiwiaXNFeHRlcm5hbGx5TWFuYWdlZCIsInBsdWdpbkFkbWluRXh0ZXJuYWxNYW5hZ2VFbmFibGVkIiwiaXNSZW1vdGVQbHVnaW5zQXZhaWxhYmxlIiwiaXNDb21wYXRpYmxlIiwiQm9vbGVhbiIsImlzSW5zdGFsbENvbnRyb2xzRGlzYWJsZWQiLCJJTlNUQUxMIiwiaXNFbnRlcnByaXNlIiwiaXNEZXYiLCJpc1B1Ymxpc2hlZCIsInVzZVN0YXRlIiwiQXBwRXZlbnRzIiwiQ29uZmlybU1vZGFsIiwiYXBwRXZlbnRzIiwidXNlSW5zdGFsbFN0YXR1cyIsInVzZVVuaW5zdGFsbFN0YXR1cyIsInVzZUluc3RhbGwiLCJ1c2VVbmluc3RhbGwiLCJpc0luc3RhbGxpbmciLCJlcnJvckluc3RhbGxpbmciLCJpc1VuaW5zdGFsbGluZyIsImVycm9yVW5pbnN0YWxsaW5nIiwiaW5zdGFsbCIsInVuaW5zdGFsbCIsImlzQ29uZmlybU1vZGFsVmlzaWJsZSIsInNldElzQ29uZmlybU1vZGFsVmlzaWJsZSIsInNob3dDb25maXJtTW9kYWwiLCJoaWRlQ29uZmlybU1vZGFsIiwidW5pbnN0YWxsQnRuVGV4dCIsIm9uSW5zdGFsbCIsImVtaXQiLCJhbGVydFN1Y2Nlc3MiLCJvblVuaW5zdGFsbCIsIm9uVXBkYXRlIiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwiUGFnZSIsIkxvYWRlciIsInNwYWNpbmciLCJQbHVnaW5EYXNoYm9hcmRzIiwiaW1wb3J0TmV4dCIsImltcG9ydCIsImRhc2giLCJvdmVyd3JpdGUiLCJpbnN0YWxsQ21kIiwicGF0aCIsImlucHV0cyIsImxvYWRpbmciLCJyZW1vdmUiLCJjeCIsIlBsdWdpblRhYklkcyIsIlZlcnNpb25MaXN0IiwiUGx1Z2luRGV0YWlsc0JvZHkiLCJxdWVyeVBhcmFtcyIsIk9WRVJWSUVXIiwicmVhZG1lIiwiY29udGFpbmVyIiwiX19odG1sIiwiVkVSU0lPTlMiLCJ2ZXJzaW9ucyIsImluc3RhbGxlZFZlcnNpb24iLCJDT05GSUciLCJhbmd1bGFyQ29uZmlnQ3RybCIsImNvbmZpZ1BhZ2UiLCJEQVNIQk9BUkRTIiwiQWxlcnQiLCJzZWxlY3RvcnMiLCJQbHVnaW5EZXRhaWxzRGlzYWJsZWRFcnJvciIsImNsYXNzTmFtZSIsInBhZ2VzIiwiUGx1Z2luUGFnZSIsImRpc2FibGVkSW5mbyIsInJlbmRlckRlc2NyaXB0aW9uRnJvbUVycm9yIiwiUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZSIsIlBsdWdpbkRldGFpbHNIZWFkZXJEZXBlbmRlbmNpZXMiLCJQbHVnaW5Mb2dvIiwiZ2V0TGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24iLCJQbHVnaW5EZXRhaWxzSGVhZGVyIiwiY3VycmVudFVybCIsInBhcmVudFVybCIsImhlYWRlckNvbnRhaW5lciIsImhlYWRlcldyYXBwZXIiLCJicmVhZGNydW1iIiwidGV4dFVuZGVybGluZSIsImhlYWRlckluZm9ybWF0aW9uUm93Iiwib3JnTmFtZSIsImRvd25sb2FkcyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJoZWFkZXJJbmZvcm1hdGlvblJvd1NlY29uZGFyeSIsImgyIiwiaDQiLCJib2R5IiwiaGVhZGVyT3JnTmFtZSIsIlBsdWdpbkljb25OYW1lIiwicGx1Z2luRGVwZW5kZW5jaWVzIiwiZ3JhZmFuYURlcGVuZGVuY3kiLCJoYXNOb0RlcGVuZGVuY3lJbmZvIiwiZGVwZW5kZW5jeVRpdGxlIiwicCIsImZvbnRXZWlnaHRCb2xkIiwiUGx1Z2luU2lnbmF0dXJlU3RhdHVzIiwiUGx1Z2luU2lnbmF0dXJlRGV0YWlsc0JhZGdlIiwiaXNTaWduYXR1cmVWYWxpZCIsInZhbGlkIiwic2lnbmF0dXJlVHlwZSIsInNpZ25hdHVyZU9yZyIsIlBsdWdpbkRldGFpbHNTaWduYXR1cmUiLCJpbnRlcm5hbCIsImlzRGlzYWJsZWREdWVUb29TaWduYXR1cmVFcnJvciIsInNpZ25hdHVyZUluZm8iLCJhbHQiLCJzcmMiLCJoZWlnaHQiLCJjYXBpdGFsaXplIiwiUGx1Z2luU2lnbmF0dXJlVHlwZSIsIlNJR05BVFVSRV9JQ09OUyIsImdyYWZhbmEiLCJjb21tZXJjaWFsIiwiY29tbXVuaXR5IiwiREVGQVVMVCIsInNpZ25hdHVyZVR5cGVUZXh0Iiwic2lnbmF0dXJlSWNvbiIsIkRldGFpbHNCYWRnZSIsImJhZGdlIiwiY2FudmFzIiwiZGF0ZVRpbWVGb3JtYXRUaW1lQWdvIiwidGFibGUiLCJpc0luc3RhbGxlZFZlcnNpb24iLCJjdXJyZW50VmVyc2lvbiIsImNyZWF0ZWRBdCIsImg1IiwidXNlQXN5bmMiLCJsb2FkUGx1Z2luIiwidXNlTWVtbyIsInVzZUxvY2F0aW9uIiwiUGx1Z2luSW5jbHVkZVR5cGUiLCJQbHVnaW5UYWJMYWJlbHMiLCJpc09yZ0FkbWluIiwidXNlUGx1Z2luRGV0YWlsc1RhYnMiLCJkZWZhdWx0VGFicyIsInBhdGhuYW1lIiwidGFicyIsImRlZmF1bHRUYWIiLCJjYW5Db25maWd1cmVQbHVnaW5zIiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJ1c2VQcmV2aW91cyIsIlRhYnNCYXIiLCJUYWJDb250ZW50IiwiVGFiIiwiTGF5b3V0IiwidXNlR2V0U2luZ2xlIiwidXNlRmV0Y2hTdGF0dXMiLCJ1c2VGZXRjaERldGFpbHNTdGF0dXMiLCJBcHBOb3RpZmljYXRpb25TZXZlcml0eSIsIlBsdWdpbkRldGFpbHMiLCJtYXRjaCIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiaXNMb2FkaW5nIiwiaXNGZXRjaExvYWRpbmciLCJpc0ZldGNoRGV0YWlsc0xvYWRpbmciLCJwcmV2VGFicyIsImhhc1VuaW5zdGFsbGVkV2l0aENvbmZpZ1BhZ2VzIiwiaXNWaWV3aW5nQUNvbmZpZ1BhZ2UiLCJyZXBsYWNlIiwiV2FybmluZyIsInRhYiIsInRhYkNvbnRlbnQiLCJhbGVydCIsInVzZVNlbGVjdG9yIiwic2V0RGlzcGxheU1vZGUiLCJmZXRjaEFsbCIsImZldGNoRGV0YWlscyIsImZldGNoUmVtb3RlUGx1Z2lucyIsInNlbGVjdEFsbCIsInNlbGVjdEJ5SWQiLCJzZWxlY3RJc1JlcXVlc3RQZW5kaW5nIiwic2VsZWN0UmVxdWVzdEVycm9yIiwic2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZCIsInNlbGVjdERpc3BsYXlNb2RlIiwic2VsZWN0UGx1Z2luRXJyb3JzIiwiU29ydGVycyIsInVzZUdldEFsbFdpdGhGaWx0ZXJzIiwicXVlcnkiLCJmaWx0ZXJCeSIsImZpbHRlckJ5VHlwZSIsInNvcnRCeSIsIm5hbWVBc2MiLCJ1c2VGZXRjaEFsbCIsImZpbHRlcmVkIiwic29ydGVkQW5kRmlsdGVyZWQiLCJ1c2VHZXRBbGwiLCJ1c2VGZXRjaERldGFpbHMiLCJ1c2VHZXRFcnJvcnMiLCJpc1VwZGF0aW5nIiwidHlwZVByZWZpeCIsImlzTm90RmV0Y2hlZCIsImlzTm90RmV0Y2hpbmciLCJzaG91bGRGZXRjaCIsInVzZURpc3BsYXlNb2RlIiwiZGlzcGxheU1vZGUiLCJ2IiwiY3JlYXRlU2VsZWN0b3IiLCJSZXF1ZXN0U3RhdHVzIiwicGx1Z2luc0FkYXB0ZXIiLCJzZWxlY3RSb290Iiwic2VsZWN0SXRlbXMiLCJpdGVtcyIsInNldHRpbmdzIiwiZ2V0U2VsZWN0b3JzIiwic2VsZWN0SW5zdGFsbGVkIiwiZmluZEJ5SW5zdGFsbEFuZFR5cGUiLCJmaW5kQnlLZXl3b3JkIiwic2VhcmNoQnkiLCJmaWVsZHMiLCJzb21lIiwiZiIsImZpbHRlcmVkUGx1Z2lucyIsInNlYXJjaGVkUGx1Z2lucyIsImVycm9yQ29kZSIsInNlbGVjdFJlcXVlc3QiLCJhY3Rpb25UeXBlIiwicmVxdWVzdHMiLCJyZXF1ZXN0Iiwic3RhdHVzIiwiUGVuZGluZyIsIlJlamVjdGVkIiwiaW1wb3J0QXBwUGx1Z2luIiwiaW1wb3J0UGFuZWxQbHVnaW5Gcm9tTWV0YSIsInBhbmVsIiwicGFuZWxQbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
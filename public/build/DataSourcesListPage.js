"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DataSourcesListPage"],{

/***/ "./public/app/core/components/PageActionBar/PageActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageActionBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




class PageActionBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      searchQuery,
      linkButton,
      setSearchQuery,
      target,
      placeholder = 'Search by name or type'
    } = this.props;
    const linkProps = {
      href: linkButton === null || linkButton === void 0 ? void 0 : linkButton.href,
      disabled: linkButton === null || linkButton === void 0 ? void 0 : linkButton.disabled
    };

    if (target) {
      linkProps.target = target;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "page-action-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
          value: searchQuery,
          onChange: setSearchQuery,
          placeholder: placeholder
        })
      }), linkButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({}, linkProps, {
        children: linkButton.title
      }))]
    });
  }

}

/***/ }),

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

/***/ "./public/app/features/datasources/DataSourcesList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourcesList": () => (/* binding */ DataSourcesList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tag;

// Libraries
 // Types





const DataSourcesList = ({
  dataSources,
  layoutMode
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
    className: styles.list,
    children: dataSources.map(dataSource => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card, {
          href: `datasources/edit/${dataSource.uid}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card.Heading, {
            children: dataSource.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card.Figure, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: dataSource.typeLogoUrl,
              alt: "",
              height: "40px",
              width: "40px",
              className: styles.logo
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
            children: [dataSource.typeName, dataSource.url, dataSource.isDefault && (_Tag || (_Tag = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tag, {
              name: 'default',
              colorIndex: 1
            }, "default-tag")))]
          })]
        })
      }, dataSource.id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSourcesList);

const getStyles = () => {
  return {
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)({
      listStyle: 'none',
      display: 'grid' // gap: '8px', Add back when legacy support for old Card interface is dropped

    }),
    logo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)({
      objectFit: 'contain'
    })
  };
};

/***/ }),

/***/ "./public/app/features/datasources/DataSourcesListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourcesListPage": () => (/* binding */ DataSourcesListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PageActionBar/PageActionBar.tsx");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _DataSourcesList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/datasources/DataSourcesList.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
// Libraries

 // Services & Utils

 // Components




 // Types

 // Actions









function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, 'datasources'),
    dataSources: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_10__.getDataSources)(state.dataSources),
    layoutMode: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_10__.getDataSourcesLayoutMode)(state.dataSources),
    dataSourcesCount: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_10__.getDataSourcesCount)(state.dataSources),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_10__.getDataSourcesSearchQuery)(state.dataSources),
    hasFetched: state.dataSources.hasFetched
  };
}

const mapDispatchToProps = {
  loadDataSources: _state_actions__WEBPACK_IMPORTED_MODULE_8__.loadDataSources,
  setDataSourcesSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_11__.setDataSourcesSearchQuery,
  setDataSourcesLayoutMode: _state_reducers__WEBPACK_IMPORTED_MODULE_11__.setDataSourcesLayoutMode
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const emptyListModel = {
  title: 'No data sources defined',
  buttonIcon: 'database',
  buttonLink: 'datasources/new',
  buttonTitle: 'Add data source',
  proTip: 'You can also define data sources through configuration files.',
  proTipLink: 'http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list',
  proTipLinkTitle: 'Learn more',
  proTipTarget: '_blank'
};
class DataSourcesListPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  componentDidMount() {
    this.props.loadDataSources();
  }

  render() {
    const {
      dataSources,
      dataSourcesCount,
      navModel,
      layoutMode,
      searchQuery,
      setDataSourcesSearchQuery,
      hasFetched
    } = this.props;
    const canCreateDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.DataSourcesCreate) && app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.DataSourcesWrite);
    const linkButton = {
      href: 'datasources/new',
      title: 'Add data source',
      disabled: !canCreateDataSource
    };
    const emptyList = Object.assign({}, emptyListModel, {
      buttonDisabled: !canCreateDataSource
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        isLoading: !hasFetched,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
          children: [hasFetched && dataSourcesCount === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, emptyList)), hasFetched && dataSourcesCount > 0 && [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
            searchQuery: searchQuery,
            setSearchQuery: query => setDataSourcesSearchQuery(query),
            linkButton: linkButton
          }, "action-bar"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_DataSourcesList__WEBPACK_IMPORTED_MODULE_6__["default"], {
            dataSources: dataSources,
            layoutMode: layoutMode
          }, "list")]]
        })
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourcesListPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBUUEsTUFBTXFLLG9CQUFvQixHQUFJak8sS0FBRCxJQUE2QjtBQUMvRCxRQUFNOE4sS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVy9OLEtBQUssQ0FBQ2tPLHlCQUFqQixFQUE0QyxHQUE1QyxDQUFkO0FBRUEsU0FBT2xPLEtBQUssQ0FBQytHLE9BQU4sQ0FBY08sTUFBZCxDQUFzQjFELElBQUQsSUFBZ0M7QUFDMUQsV0FBT2tLLEtBQUssQ0FBQ0UsSUFBTixDQUFXcEssSUFBSSxDQUFDcEYsSUFBaEIsQ0FBUDtBQUNELEdBRk0sQ0FBUDtBQUdELENBTk07QUFRQSxNQUFNcUUsYUFBYSxHQUFHLENBQUM3QyxLQUFELEVBQTBCbU8sWUFBMUIsS0FBOEU7QUFDekcsTUFBSW5PLEtBQUssQ0FBQzFCLFVBQU4sQ0FBaUJDLEdBQWpCLEtBQXlCNFAsWUFBN0IsRUFBMkM7QUFDekMsV0FBT25PLEtBQUssQ0FBQzFCLFVBQWI7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRCxDQUxNO0FBT0EsTUFBTXdFLGlCQUFpQixHQUFHLENBQUM5QyxLQUFELEVBQTBCNEQsSUFBMUIsS0FBaUU7QUFDaEcsTUFBSTVELEtBQUssQ0FBQzJELGNBQU4sQ0FBcUI3RSxFQUFyQixLQUE0QjhFLElBQWhDLEVBQXNDO0FBQ3BDLFdBQU81RCxLQUFLLENBQUMyRCxjQUFiO0FBQ0Q7O0FBRUQsU0FBTyxFQUFQO0FBQ0QsQ0FOTTtBQVFBLE1BQU0vRCx5QkFBeUIsR0FBSUksS0FBRCxJQUE2QkEsS0FBSyxDQUFDdkQsV0FBckU7QUFDQSxNQUFNa0Qsd0JBQXdCLEdBQUlLLEtBQUQsSUFBNkJBLEtBQUssQ0FBQy9CLFVBQXBFO0FBQ0EsTUFBTXlCLG1CQUFtQixHQUFJTSxLQUFELElBQTZCQSxLQUFLLENBQUNHLGdCQUEvRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlQWN0aW9uQmFyL1BhZ2VBY3Rpb25CYXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL0RhdGFTb3VyY2VzTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvRGF0YVNvdXJjZXNMaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9idWlsZENhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvc2VsZWN0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlua0J1dHRvbiwgRmlsdGVySW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBzZXRTZWFyY2hRdWVyeTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGxpbmtCdXR0b24/OiB7IGhyZWY6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgZGlzYWJsZWQ/OiBib29sZWFuIH07XG4gIHRhcmdldD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VBY3Rpb25CYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCBsaW5rQnV0dG9uLCBzZXRTZWFyY2hRdWVyeSwgdGFyZ2V0LCBwbGFjZWhvbGRlciA9ICdTZWFyY2ggYnkgbmFtZSBvciB0eXBlJyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsaW5rUHJvcHM6IHR5cGVvZiBMaW5rQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHsgaHJlZjogbGlua0J1dHRvbj8uaHJlZiwgZGlzYWJsZWQ6IGxpbmtCdXR0b24/LmRpc2FibGVkIH07XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBsaW5rUHJvcHMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxuICAgICAgICAgIDxGaWx0ZXJJbnB1dCB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXtzZXRTZWFyY2hRdWVyeX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2xpbmtCdXR0b24gJiYgPExpbmtCdXR0b24gey4uLmxpbmtQcm9wc30+e2xpbmtCdXR0b24udGl0bGV9PC9MaW5rQnV0dG9uPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJpYWwoKSB7XG4gIGNvbnN0IGV4cGlyeSA9IGNvbmZpZy5saWNlbnNlSW5mbz8udHJpYWxFeHBpcnk7XG4gIHJldHVybiAhIShleHBpcnkgJiYgZXhwaXJ5ID4gMCk7XG59XG5cbmV4cG9ydCBjb25zdCBoaWdobGlnaHRUcmlhbCA9ICgpID0+IGlzVHJpYWwoKSAmJiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4iLCIvLyBMaWJyYXJpZXNcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuLy8gVHlwZXNcbmltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncywgTGF5b3V0TW9kZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2FyZCwgVGFnLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YVNvdXJjZXM6IERhdGFTb3VyY2VTZXR0aW5nc1tdO1xuICBsYXlvdXRNb2RlOiBMYXlvdXRNb2RlO1xufVxuXG5leHBvcnQgY29uc3QgRGF0YVNvdXJjZXNMaXN0OiBGQzxQcm9wcz4gPSAoeyBkYXRhU291cmNlcywgbGF5b3V0TW9kZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAge2RhdGFTb3VyY2VzLm1hcCgoZGF0YVNvdXJjZSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBrZXk9e2RhdGFTb3VyY2UuaWR9PlxuICAgICAgICAgICAgPENhcmQgaHJlZj17YGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH1gfT5cbiAgICAgICAgICAgICAgPENhcmQuSGVhZGluZz57ZGF0YVNvdXJjZS5uYW1lfTwvQ2FyZC5IZWFkaW5nPlxuICAgICAgICAgICAgICA8Q2FyZC5GaWd1cmU+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGFTb3VyY2UudHlwZUxvZ29Vcmx9IGFsdD1cIlwiIGhlaWdodD1cIjQwcHhcIiB3aWR0aD1cIjQwcHhcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgICAgICAgICA8L0NhcmQuRmlndXJlPlxuICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICBkYXRhU291cmNlLnR5cGVOYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS51cmwsXG4gICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmlzRGVmYXVsdCAmJiA8VGFnIGtleT1cImRlZmF1bHQtdGFnXCIgbmFtZT17J2RlZmF1bHQnfSBjb2xvckluZGV4PXsxfSAvPixcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICA8L0NhcmQuTWV0YT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFTb3VyY2VzTGlzdDtcblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxpc3Q6IGNzcyh7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgIC8vIGdhcDogJzhweCcsIEFkZCBiYWNrIHdoZW4gbGVnYWN5IHN1cHBvcnQgZm9yIG9sZCBDYXJkIGludGVyZmFjZSBpcyBkcm9wcGVkXG4gICAgfSksXG4gICAgbG9nbzogY3NzKHtcbiAgICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxuICAgIH0pLFxuICB9O1xufTtcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIFNlcnZpY2VzICYgVXRpbHNcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbi8vIENvbXBvbmVudHNcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCBQYWdlQWN0aW9uQmFyIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZUFjdGlvbkJhci9QYWdlQWN0aW9uQmFyJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCBEYXRhU291cmNlc0xpc3QgZnJvbSAnLi9EYXRhU291cmNlc0xpc3QnO1xuLy8gVHlwZXNcbmltcG9ydCB7IEljb25OYW1lIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSwgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG4vLyBBY3Rpb25zXG5pbXBvcnQgeyBsb2FkRGF0YVNvdXJjZXMgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuXG5pbXBvcnQge1xuICBnZXREYXRhU291cmNlcyxcbiAgZ2V0RGF0YVNvdXJjZXNDb3VudCxcbiAgZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlLFxuICBnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5LFxufSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzZXREYXRhU291cmNlc0xheW91dE1vZGUsIHNldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnZGF0YXNvdXJjZXMnKSxcbiAgICBkYXRhU291cmNlczogZ2V0RGF0YVNvdXJjZXMoc3RhdGUuZGF0YVNvdXJjZXMpLFxuICAgIGxheW91dE1vZGU6IGdldERhdGFTb3VyY2VzTGF5b3V0TW9kZShzdGF0ZS5kYXRhU291cmNlcyksXG4gICAgZGF0YVNvdXJjZXNDb3VudDogZ2V0RGF0YVNvdXJjZXNDb3VudChzdGF0ZS5kYXRhU291cmNlcyksXG4gICAgc2VhcmNoUXVlcnk6IGdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkoc3RhdGUuZGF0YVNvdXJjZXMpLFxuICAgIGhhc0ZldGNoZWQ6IHN0YXRlLmRhdGFTb3VyY2VzLmhhc0ZldGNoZWQsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZERhdGFTb3VyY2VzLFxuICBzZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5LFxuICBzZXREYXRhU291cmNlc0xheW91dE1vZGUsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuY29uc3QgZW1wdHlMaXN0TW9kZWwgPSB7XG4gIHRpdGxlOiAnTm8gZGF0YSBzb3VyY2VzIGRlZmluZWQnLFxuICBidXR0b25JY29uOiAnZGF0YWJhc2UnIGFzIEljb25OYW1lLFxuICBidXR0b25MaW5rOiAnZGF0YXNvdXJjZXMvbmV3JyxcbiAgYnV0dG9uVGl0bGU6ICdBZGQgZGF0YSBzb3VyY2UnLFxuICBwcm9UaXA6ICdZb3UgY2FuIGFsc28gZGVmaW5lIGRhdGEgc291cmNlcyB0aHJvdWdoIGNvbmZpZ3VyYXRpb24gZmlsZXMuJyxcbiAgcHJvVGlwTGluazogJ2h0dHA6Ly9kb2NzLmdyYWZhbmEub3JnL2FkbWluaXN0cmF0aW9uL3Byb3Zpc2lvbmluZy8jZGF0YXNvdXJjZXM/dXRtX3NvdXJjZT1ncmFmYW5hX2RzX2xpc3QnLFxuICBwcm9UaXBMaW5rVGl0bGU6ICdMZWFybiBtb3JlJyxcbiAgcHJvVGlwVGFyZ2V0OiAnX2JsYW5rJyxcbn07XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlc0xpc3RQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmxvYWREYXRhU291cmNlcygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2VzQ291bnQsIG5hdk1vZGVsLCBsYXlvdXRNb2RlLCBzZWFyY2hRdWVyeSwgc2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSwgaGFzRmV0Y2hlZCB9ID1cbiAgICAgIHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjYW5DcmVhdGVEYXRhU291cmNlID1cbiAgICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzQ3JlYXRlKSAmJlxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNXcml0ZSk7XG5cbiAgICBjb25zdCBsaW5rQnV0dG9uID0ge1xuICAgICAgaHJlZjogJ2RhdGFzb3VyY2VzL25ldycsXG4gICAgICB0aXRsZTogJ0FkZCBkYXRhIHNvdXJjZScsXG4gICAgICBkaXNhYmxlZDogIWNhbkNyZWF0ZURhdGFTb3VyY2UsXG4gICAgfTtcblxuICAgIGNvbnN0IGVtcHR5TGlzdCA9IHtcbiAgICAgIC4uLmVtcHR5TGlzdE1vZGVsLFxuICAgICAgYnV0dG9uRGlzYWJsZWQ6ICFjYW5DcmVhdGVEYXRhU291cmNlLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXshaGFzRmV0Y2hlZH0+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtoYXNGZXRjaGVkICYmIGRhdGFTb3VyY2VzQ291bnQgPT09IDAgJiYgPEVtcHR5TGlzdENUQSB7Li4uZW1wdHlMaXN0fSAvPn1cbiAgICAgICAgICAgIHtoYXNGZXRjaGVkICYmXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2VzQ291bnQgPiAwICYmIFtcbiAgICAgICAgICAgICAgICA8UGFnZUFjdGlvbkJhclxuICAgICAgICAgICAgICAgICAgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoUXVlcnk9eyhxdWVyeSkgPT4gc2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeShxdWVyeSl9XG4gICAgICAgICAgICAgICAgICBsaW5rQnV0dG9uPXtsaW5rQnV0dG9ufVxuICAgICAgICAgICAgICAgICAga2V5PVwiYWN0aW9uLWJhclwiXG4gICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgPERhdGFTb3VyY2VzTGlzdCBkYXRhU291cmNlcz17ZGF0YVNvdXJjZXN9IGxheW91dE1vZGU9e2xheW91dE1vZGV9IGtleT1cImxpc3RcIiAvPixcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKERhdGFTb3VyY2VzTGlzdFBhZ2UpO1xuIiwiaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgbG9jYXRpb25VdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlV2l0aEJhY2tlbmQsIGdldERhdGFTb3VyY2VTcnYsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXBkYXRlTmF2SW5kZXggfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBnZXREYXRhc291cmNlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvZGF0YXNvdXJjZV9zcnYnO1xuaW1wb3J0IHsgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpbl9sb2FkZXInO1xuaW1wb3J0IHsgZ2V0UGx1Z2luU2V0dGluZ3MgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9wbHVnaW5TZXR0aW5ncyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnksIFRodW5rRGlzcGF0Y2gsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgYnVpbGRDYXRlZ29yaWVzIH0gZnJvbSAnLi9idWlsZENhdGVnb3JpZXMnO1xuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHtcbiAgZGF0YVNvdXJjZUxvYWRlZCxcbiAgZGF0YVNvdXJjZU1ldGFMb2FkZWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQsXG4gIGRhdGFTb3VyY2VzTG9hZGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkLFxuICB0ZXN0RGF0YVNvdXJjZUZhaWxlZCxcbiAgdGVzdERhdGFTb3VyY2VTdGFydGluZyxcbiAgdGVzdERhdGFTb3VyY2VTdWNjZWVkZWQsXG59IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZSwgZ2V0RGF0YVNvdXJjZU1ldGEgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFTb3VyY2VUeXBlc0xvYWRlZFBheWxvYWQge1xuICBwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdO1xuICBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbml0RGF0YVNvdXJjZVNldHRpbmdEZXBlbmRlbmNpZXMge1xuICBsb2FkRGF0YVNvdXJjZTogdHlwZW9mIGxvYWREYXRhU291cmNlO1xuICBsb2FkRGF0YVNvdXJjZU1ldGE6IHR5cGVvZiBsb2FkRGF0YVNvdXJjZU1ldGE7XG4gIGdldERhdGFTb3VyY2U6IHR5cGVvZiBnZXREYXRhU291cmNlO1xuICBnZXREYXRhU291cmNlTWV0YTogdHlwZW9mIGdldERhdGFTb3VyY2VNZXRhO1xuICBpbXBvcnREYXRhU291cmNlUGx1Z2luOiB0eXBlb2YgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyB7XG4gIGdldERhdGFzb3VyY2VTcnY6IHR5cGVvZiBnZXREYXRhU291cmNlU3J2O1xuICBnZXRCYWNrZW5kU3J2OiB0eXBlb2YgZ2V0QmFja2VuZFNydjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXREYXRhU291cmNlU2V0dGluZ3MgPSAoXG4gIHBhZ2VJZDogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyA9IHtcbiAgICBsb2FkRGF0YVNvdXJjZSxcbiAgICBsb2FkRGF0YVNvdXJjZU1ldGEsXG4gICAgZ2V0RGF0YVNvdXJjZSxcbiAgICBnZXREYXRhU291cmNlTWV0YSxcbiAgICBpbXBvcnREYXRhU291cmNlUGx1Z2luLFxuICB9XG4pOiBUaHVua1Jlc3VsdDx2b2lkPiA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgaWYgKCFwYWdlSWQpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQobmV3IEVycm9yKCdJbnZhbGlkIElEJykpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9hZGVkRGF0YVNvdXJjZSA9IGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZShwYWdlSWQpKTtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZU1ldGEobG9hZGVkRGF0YVNvdXJjZSkpO1xuXG4gICAgICAvLyBoYXZlIHdlIGFscmVhZHkgbG9hZGVkIHRoZSBwbHVnaW4gdGhlbiB3ZSBjYW4gc2tpcCB0aGUgc3RlcHMgYmVsb3c/XG4gICAgICBpZiAoZ2V0U3RhdGUoKS5kYXRhU291cmNlU2V0dGluZ3MucGx1Z2luKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIHBhZ2VJZCk7XG4gICAgICBjb25zdCBkYXRhU291cmNlTWV0YSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlTWV0YShnZXRTdGF0ZSgpLmRhdGFTb3VyY2VzLCBkYXRhU291cmNlIS50eXBlKTtcbiAgICAgIGNvbnN0IGltcG9ydGVkUGx1Z2luID0gYXdhaXQgZGVwZW5kZW5jaWVzLmltcG9ydERhdGFTb3VyY2VQbHVnaW4oZGF0YVNvdXJjZU1ldGEpO1xuXG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkKGltcG9ydGVkUGx1Z2luKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKGVycikpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RGF0YVNvdXJjZSA9IChcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyA9IHtcbiAgICBnZXREYXRhc291cmNlU3J2LFxuICAgIGdldEJhY2tlbmRTcnYsXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBkc0FwaSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXREYXRhc291cmNlU3J2KCkuZ2V0KGRhdGFTb3VyY2VOYW1lKTtcblxuICAgIGlmICghZHNBcGkudGVzdERhdGFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nKCkpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS53aXRoTm9CYWNrZW5kQ2FjaGUoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHNBcGkudGVzdERhdGFzb3VyY2UoKTtcblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZChyZXN1bHQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCB7IHN0YXR1c1RleHQsIG1lc3NhZ2U6IGVyck1lc3NhZ2UsIGRldGFpbHMsIGRhdGEgfSA9IGVycjtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyTWVzc2FnZSB8fCBkYXRhPy5tZXNzYWdlIHx8ICdIVFRQIGVycm9yICcgKyBzdGF0dXNUZXh0O1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlRmFpbGVkKHsgbWVzc2FnZSwgZGV0YWlscyB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9kYXRhc291cmNlcycpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZSh1aWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGF3YWl0IGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkKTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VMb2FkZWQoZGF0YVNvdXJjZSkpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VNZXRhKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBsdWdpbkluZm8gPSAoYXdhaXQgZ2V0UGx1Z2luU2V0dGluZ3MoZGF0YVNvdXJjZS50eXBlKSkgYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gICAgY29uc3QgcGx1Z2luID0gYXdhaXQgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihwbHVnaW5JbmZvKTtcbiAgICBjb25zdCBpc0JhY2tlbmQgPSBwbHVnaW4uRGF0YVNvdXJjZUNsYXNzLnByb3RvdHlwZSBpbnN0YW5jZW9mIERhdGFTb3VyY2VXaXRoQmFja2VuZDtcbiAgICBjb25zdCBtZXRhID0ge1xuICAgICAgLi4ucGx1Z2luSW5mbyxcbiAgICAgIGlzQmFja2VuZDogcGx1Z2luSW5mby5iYWNrZW5kIHx8IGlzQmFja2VuZCxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZU1ldGFMb2FkZWQobWV0YSkpO1xuXG4gICAgcGx1Z2luLm1ldGEgPSBtZXRhO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZSwgcGx1Z2luKSkpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldCBkYXRhIHNvdXJjZSBieSB1aWQgb3IgaWQsIGlmIG9sZCBpZCBkZXRlY3RlZCBoYW5kbGVzIHJlZGlyZWN0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+IHtcbiAgLy8gVHJ5IGZpcnN0IHdpdGggdWlkIGFwaVxuICB0cnkge1xuICAgIGNvbnN0IGJ5VWlkID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy91aWQvJHt1aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoYnlVaWQub2spIHtcbiAgICAgIHJldHVybiBieVVpZC5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBsb29rdXAgZGF0YSBzb3VyY2UgYnkgdWlkJywgZXJyKTtcbiAgfVxuXG4gIC8vIHRyeSBsb29rdXAgYnkgb2xkIGRiIGlkXG4gIGNvbnN0IGlkID0gdHlwZW9mIHVpZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh1aWQsIDEwKSA6IHVpZDtcbiAgaWYgKCFOdW1iZXIuaXNOYU4oaWQpKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzLyR7aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBJZiB0aGUgdWlkIGlzIGEgbnVtYmVyLCB0aGVuIHRoaXMgaXMgYSByZWZyZXNoIG9uIG9uZSBvZiB0aGUgc2V0dGluZ3MgdGFic1xuICAgIC8vIGFuZCB3ZSBjYW4gcmV0dXJuIHRoZSByZXNwb25zZSBkYXRhXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHR5cGVvZiB1aWQgPT09ICdudW1iZXInICYmIHJlc3BvbnNlLmRhdGEuaWQgPT09IHVpZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgLy8gTm90IGlkZWFsIHRvIGRvIGEgZnVsbCBwYWdlIHJlbG9hZCBoZXJlIGJ1dCBzbyB0cmlja3kgdG8gaGFuZGxlIHRoaXNcbiAgICAvLyBvdGhlcndpc2UgV2UgY2FuIHVwZGF0ZSB0aGUgbG9jYXRpb24gdXNpbmcgcmVhY3Qgcm91dGVyLCBidXQgbmVlZCB0b1xuICAgIC8vIGZ1bGx5IHJlbG9hZCB0aGUgcm91dGUgYXMgdGhlIG5hdiBtb2RlbCBwYWdlIGluZGV4IGlzIG5vdCBtYXRjaGluZyB3aXRoXG4gICAgLy8gdGhlIHVybCBpbiB0aGF0IGNhc2UuIEFuZCByZWFjdCByb3V0ZXIgaGFzIG5vIHdheSB0byB1bm1vdW50IHJlbW91bnQgYVxuICAgIC8vIHJvdXRlXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLmRhdGEuaWQudG9TdHJpbmcoKSA9PT0gdWlkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uVXRpbC5hc3N1cmVCYXNlVXJsKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3BvbnNlLmRhdGEudWlkfWApO1xuICAgICAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5nczsgLy8gYXZvaWRzIGZsYXNoaW5nIGFuIGVycm9yXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhU291cmNlKHBsdWdpbjogRGF0YVNvdXJjZVBsdWdpbk1ldGEpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZERhdGFTb3VyY2VzKCkpO1xuXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2VzO1xuXG4gICAgY29uc3QgbmV3SW5zdGFuY2UgPSB7XG4gICAgICBuYW1lOiBwbHVnaW4ubmFtZSxcbiAgICAgIHR5cGU6IHBsdWdpbi5pZCxcbiAgICAgIGFjY2VzczogJ3Byb3h5JyxcbiAgICAgIGlzRGVmYXVsdDogZGF0YVNvdXJjZXMubGVuZ3RoID09PSAwLFxuICAgIH07XG5cbiAgICBpZiAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKSkge1xuICAgICAgbmV3SW5zdGFuY2UubmFtZSA9IGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9kYXRhc291cmNlcycsIG5ld0luc3RhbmNlKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXN1bHQuZGF0YXNvdXJjZS51aWR9YCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZVBsdWdpbnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkKCkpO1xuICAgIGNvbnN0IHBsdWdpbnMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsdWdpbnMnLCB7IGVuYWJsZWQ6IDEsIHR5cGU6ICdkYXRhc291cmNlJyB9KTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnMpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkKHsgcGx1Z2lucywgY2F0ZWdvcmllcyB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWAsIGRhdGFTb3VyY2UpOyAvLyBieSBVSUQgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGxvYWREYXRhU291cmNlKGRhdGFTb3VyY2UudWlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEYXRhU291cmNlKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlO1xuXG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9kYXRhc291cmNlcycpO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgSXRlbVdpdGhOYW1lIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUV4aXRzKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiAoXG4gICAgZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YVNvdXJjZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9KS5sZW5ndGggPiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV3TmFtZShkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICAvLyBOZWVkIHRvIGxvb3AgdGhyb3VnaCBjdXJyZW50IGRhdGEgc291cmNlcyB0byBtYWtlIHN1cmVcbiAgLy8gdGhlIG5hbWUgZG9lc24ndCBleGlzdFxuICB3aGlsZSAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuYW1lKSkge1xuICAgIC8vIElmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGRvZXNuJ3QgZW5kIHdpdGggJy14J1xuICAgIC8vIHdlIGNhbiBhZGQgLTEgdG8gdGhlIG5hbWUgYW5kIGJlIGRvbmUuXG4gICAgaWYgKCFuYW1lSGFzU3VmZml4KG5hbWUpKSB7XG4gICAgICBuYW1lID0gYCR7bmFtZX0tMWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGVuZHMgd2l0aCAnLXgnXG4gICAgICAvLyB3ZSBjYW4gdHJ5IHRvIGluY3JlbWVudCB0aGUgbGFzdCBkaWdpdCB1bnRpbCB0aGUgbmFtZSBpcyB1bmlxdWVcblxuICAgICAgLy8gcmVtb3ZlIHRoZSAneCcgcGFydCBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgbnVtYmVyXG4gICAgICBuYW1lID0gYCR7Z2V0TmV3TmFtZShuYW1lKX0ke2luY3JlbWVudExhc3REaWdpdChnZXRMYXN0RGlnaXQobmFtZSkpfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIG5hbWVIYXNTdWZmaXgobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLmVuZHNXaXRoKCctJywgbmFtZS5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdERpZ2l0KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gcGFyc2VJbnQobmFtZS5zbGljZSgtMSksIDEwKTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50TGFzdERpZ2l0KGRpZ2l0OiBudW1iZXIpIHtcbiAgcmV0dXJuIGlzTmFOKGRpZ2l0KSA/IDEgOiBkaWdpdCArIDE7XG59XG5cbmZ1bmN0aW9uIGdldE5ld05hbWUobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnNsaWNlKDAsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKTogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSA9IFtcbiAgICB7IGlkOiAndHNkYicsIHRpdGxlOiAnVGltZSBzZXJpZXMgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnbG9nZ2luZycsIHRpdGxlOiAnTG9nZ2luZyAmIGRvY3VtZW50IGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3RyYWNpbmcnLCB0aXRsZTogJ0Rpc3RyaWJ1dGVkIHRyYWNpbmcnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdzcWwnLCB0aXRsZTogJ1NRTCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2Nsb3VkJywgdGl0bGU6ICdDbG91ZCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2VudGVycHJpc2UnLCB0aXRsZTogJ0VudGVycHJpc2UgcGx1Z2lucycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2lvdCcsIHRpdGxlOiAnSW5kdXN0cmlhbCAmIElvVCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ290aGVyJywgdGl0bGU6ICdPdGhlcnMnLCBwbHVnaW5zOiBbXSB9LFxuICBdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlJbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5PiA9IHt9O1xuICBjb25zdCBwbHVnaW5JbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbk1ldGE+ID0ge307XG4gIGNvbnN0IGVudGVycHJpc2VQbHVnaW5zID0gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk7XG5cbiAgLy8gYnVpbGQgaW5kaWNlc1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjYXRlZ29yeUluZGV4W2NhdGVnb3J5LmlkXSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIGNvbnN0IGVudGVycHJpc2VQbHVnaW4gPSBlbnRlcnByaXNlUGx1Z2lucy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uaWQpO1xuICAgIC8vIEZvcmNlIGNhdGVnb3J5IGZvciBlbnRlcnByaXNlIHBsdWdpbnNcbiAgICBpZiAocGx1Z2luLmVudGVycHJpc2UgfHwgZW50ZXJwcmlzZVBsdWdpbikge1xuICAgICAgcGx1Z2luLmNhdGVnb3J5ID0gJ2VudGVycHJpc2UnO1xuICAgICAgcGx1Z2luLnVubGljZW5zZWQgPSAhZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpO1xuICAgICAgcGx1Z2luLmluZm8ubGlua3MgPSBlbnRlcnByaXNlUGx1Z2luPy5pbmZvPy5saW5rcyB8fCBwbHVnaW4uaW5mby5saW5rcztcbiAgICB9XG5cbiAgICAvLyBGaXggbGluayBuYW1lXG4gICAgaWYgKHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgcGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgICAgbGluay5uYW1lID0gJ0xlYXJuIG1vcmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uY2F0ZWdvcnkpIHx8IGNhdGVnb3J5SW5kZXhbJ290aGVyJ107XG4gICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgLy8gYWRkIHRvIHBsdWdpbiBpbmRleFxuICAgIHBsdWdpbkluZGV4W3BsdWdpbi5pZF0gPSBwbHVnaW47XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5cbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdjbG91ZCcpIHtcbiAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCkpO1xuICAgIH1cblxuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpbnNcbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdlbnRlcnByaXNlJykge1xuICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgZW50ZXJwcmlzZVBsdWdpbnMpIHtcbiAgICAgICAgaWYgKCFwbHVnaW5JbmRleFtwbHVnaW4uaWRdKSB7XG4gICAgICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0UGx1Z2lucyhjYXRlZ29yeS5wbHVnaW5zKTtcbiAgfVxuXG4gIC8vIE9ubHkgc2hvdyBjYXRlZ29yaWVzIHdpdGggcGx1Z2luc1xuICByZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoKGMpID0+IGMucGx1Z2lucy5sZW5ndGggPiAwKTtcbn1cblxuZnVuY3Rpb24gc29ydFBsdWdpbnMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSkge1xuICBjb25zdCBzb3J0aW5nUnVsZXM6IHsgW2lkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBwcm9tZXRoZXVzOiAxMDAsXG4gICAgZ3JhcGhpdGU6IDk1LFxuICAgIGxva2k6IDkwLFxuICAgIG15c3FsOiA4MCxcbiAgICBqYWVnZXI6IDEwMCxcbiAgICBwb3N0Z3JlczogNzksXG4gICAgZ2Nsb3VkOiAtMSxcbiAgfTtcblxuICBwbHVnaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhU29ydCA9IHNvcnRpbmdSdWxlc1thLmlkXSB8fCAwO1xuICAgIGNvbnN0IGJTb3J0ID0gc29ydGluZ1J1bGVzW2IuaWRdIHx8IDA7XG4gICAgaWYgKGFTb3J0ID4gYlNvcnQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGFTb3J0IDwgYlNvcnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSB7XG4gIHJldHVybiBbXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuaycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBTcGx1bmsgbG9ncycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc3BsdW5rX2xvZ29fMTI4LnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtb3JhY2xlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ09yYWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBPcmFjbGUgU1FMJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9vcmFjbGUucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1keW5hdHJhY2UtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnRHluYXRyYWNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIER5bmF0cmFjZSBkYXRhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9keW5hdHJhY2UucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zZXJ2aWNlbm93LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXJ2aWNlTm93IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU2VydmljZU5vdycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2VydmljZW5vdy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWRhdGFkb2ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RhdGFEb2cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdEYXRhRG9nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9kYXRhZG9nLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbmV3cmVsaWMtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ05ldyBSZWxpYyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ05ldyBSZWxpYycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbmV3cmVsaWMuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1tb25nb2RiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdNb25nb0RCIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTW9uZ29EQicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbW9uZ29kYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNub3dmbGFrZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU25vd2ZsYWtlIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU25vd2ZsYWtlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zbm93Zmxha2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS13YXZlZnJvbnQtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhdmVmcm9udCBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1dhdmVmcm9udCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvd2F2ZWZyb250LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2Rsb3BlczctYXBwZHluYW1pY3MtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcER5bmFtaWNzIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnQXBwRHluYW1pY3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2FwcGR5bmFtaWNzLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FwaGFuYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU0FQIEhBTkHCriBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NBUCBIQU5Bwq4nLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhcF9oYW5hLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtaG9uZXljb21iLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdIb25leWNvbWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvaG9uZXljb21iLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FsZXNmb3JjZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2FsZXNmb3JjZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU2FsZXNmb3JjZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FsZXNmb3JjZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWppcmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ppcmEgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0ppcmEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2ppcmFfbG9nby5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWdpdGxhYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnR2l0TGFiIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdHaXRMYWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2dpdGxhYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1tb25pdG9yaW5nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTaWduYWxGeCBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rIEluZnJhc3RydWN0dXJlIE1vbml0b3JpbmcnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NpZ25hbGZ4LWxvZ28uc3ZnJyxcbiAgICB9KSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbigpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6ICdnY2xvdWQnLFxuICAgIG5hbWU6ICdHcmFmYW5hIENsb3VkJyxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246ICdIb3N0ZWQgR3JhcGhpdGUsIFByb21ldGhldXMsIGFuZCBMb2tpJyxcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiAncHVibGljL2ltZy9ncmFmYW5hX2ljb24uc3ZnJywgbGFyZ2U6ICdhc2QnIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2dyYWZhbmEuY29tL3Byb2R1Y3RzL2Nsb3VkLycsXG4gICAgICAgICAgbmFtZTogJ0xlYXJuIG1vcmUnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEdldFBoYW50b21QbHVnaW5PcHRpb25zIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWdVcmw6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0UGhhbnRvbVBsdWdpbihvcHRpb25zOiBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogb3B0aW9ucy5pZCxcbiAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgbG9nb3M6IHsgc21hbGw6IG9wdGlvbnMuaW1nVXJsLCBsYXJnZTogb3B0aW9ucy5pbWdVcmwgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogY29uZmlnLnBsdWdpbkNhdGFsb2dVUkwgKyBvcHRpb25zLmlkLFxuICAgICAgICAgIG5hbWU6ICdJbnN0YWxsIG5vdycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVNldHRpbmdzLCBQbHVnaW5UeXBlLCBQbHVnaW5JbmNsdWRlLCBOYXZNb2RlbCwgTmF2TW9kZWxJdGVtIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBQcm9CYWRnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVXBncmFkZS9Qcm9CYWRnZSc7XG5pbXBvcnQgeyBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJy4uL3NldHRpbmdzL1BsdWdpblNldHRpbmdzJztcbmltcG9ydCB7IGhpZ2hsaWdodFRyaWFsIH0gZnJvbSAnLi4vLi4vYWRtaW4vdXRpbHMnO1xuXG5jb25zdCBsb2FkaW5nRFNUeXBlID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROYXZNb2RlbChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MsIHBsdWdpbjogR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4pOiBOYXZNb2RlbEl0ZW0ge1xuICBjb25zdCBwbHVnaW5NZXRhID0gcGx1Z2luLm1ldGE7XG4gIGNvbnN0IGhpZ2hsaWdodHNFbmFibGVkID0gY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuICBjb25zdCBuYXZNb2RlbDogTmF2TW9kZWxJdGVtID0ge1xuICAgIGltZzogcGx1Z2luTWV0YS5pbmZvLmxvZ29zLmxhcmdlLFxuICAgIGlkOiAnZGF0YXNvdXJjZS0nICsgZGF0YVNvdXJjZS51aWQsXG4gICAgc3ViVGl0bGU6IGBUeXBlOiAke3BsdWdpbk1ldGEubmFtZX1gLFxuICAgIHVybDogJycsXG4gICAgdGV4dDogZGF0YVNvdXJjZS5uYW1lLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ0RhdGEgU291cmNlcycsIHVybDogJ2RhdGFzb3VyY2VzJyB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBpY29uOiAnc2xpZGVycy12LWFsdCcsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1zZXR0aW5ncy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBpZiAocGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBwYWdlLnRpdGxlLFxuICAgICAgICBpY29uOiBwYWdlLmljb24sXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vP3BhZ2U9JHtwYWdlLmlkfWAsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1wYWdlLSR7cGFnZS5pZH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBsdWdpbk1ldGEuaW5jbHVkZXMgJiYgaGFzRGFzaGJvYXJkcyhwbHVnaW5NZXRhLmluY2x1ZGVzKSAmJiBjb250ZXh0U3J2Lmhhc1JvbGUoJ0FkbWluJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaWNvbjogJ2FwcHMnLFxuICAgICAgaWQ6IGBkYXRhc291cmNlLWRhc2hib2FyZHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgdGV4dDogJ0Rhc2hib2FyZHMnLFxuICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9kYXNoYm9hcmRzYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlzTG9hZGluZ05hdiA9IGRhdGFTb3VyY2UudHlwZSA9PT0gbG9hZGluZ0RTVHlwZTtcblxuICBjb25zdCBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtcGVybWlzc2lvbnMtYmFkZ2UnO1xuICBjb25zdCBkc1Blcm1pc3Npb25zOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnbG9jaycsXG4gICAgaWQ6IGBkYXRhc291cmNlLXBlcm1pc3Npb25zLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnUGVybWlzc2lvbnMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vcGVybWlzc2lvbnNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBkc1Blcm1pc3Npb25zLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdkc3Blcm1pc3Npb25zJykpIHtcbiAgICBpZiAoY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQpKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChkc1Blcm1pc3Npb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmRzUGVybWlzc2lvbnMsXG4gICAgICB1cmw6IGRzUGVybWlzc2lvbnMudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYW5hbHl0aWNzRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1pbnNpZ2h0cy1iYWRnZSc7XG4gIGNvbnN0IGFuYWx5dGljczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2luZm8tY2lyY2xlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtaW5zaWdodHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdJbnNpZ2h0cycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9pbnNpZ2h0c2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGFuYWx5dGljcy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2FuYWx5dGljcycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goYW5hbHl0aWNzKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uYW5hbHl0aWNzLFxuICAgICAgdXJsOiBhbmFseXRpY3MudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNhY2hpbmdFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLXF1ZXJ5LWNhY2hpbmctYmFkZ2UnO1xuXG4gIGNvbnN0IGNhY2hpbmc6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdkYXRhYmFzZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWNhY2hlLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnQ2FjaGUnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vY2FjaGVgLFxuICAgIGhpZGVGcm9tVGFiczogIXBsdWdpbk1ldGEuaXNCYWNrZW5kIHx8ICFjb25maWcuY2FjaGluZy5lbmFibGVkLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBjYWNoaW5nLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2NhY2hpbmcnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGNhY2hpbmcpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5jYWNoaW5nLFxuICAgICAgdXJsOiBjYWNoaW5nLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZU5hdihtYWluOiBOYXZNb2RlbEl0ZW0sIHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGxldCBub2RlOiBOYXZNb2RlbEl0ZW0gPSB7IHRleHQ6ICcnIH07XG5cbiAgLy8gZmluZCBhY3RpdmUgcGFnZVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1haW4uY2hpbGRyZW4hKSB7XG4gICAgaWYgKGNoaWxkLmlkIS5pbmRleE9mKHBhZ2VOYW1lKSA+IDApIHtcbiAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlID0gY2hpbGQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbm9kZSEsXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYocGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgY29uc3QgbWFpbiA9IGJ1aWxkTmF2TW9kZWwoXG4gICAge1xuICAgICAgYWNjZXNzOiAnJyxcbiAgICAgIGJhc2ljQXV0aDogZmFsc2UsXG4gICAgICBiYXNpY0F1dGhVc2VyOiAnJyxcbiAgICAgIGJhc2ljQXV0aFBhc3N3b3JkOiAnJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICBkYXRhYmFzZTogJycsXG4gICAgICBpZDogMSxcbiAgICAgIHVpZDogJ3gnLFxuICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcbiAgICAgIGpzb25EYXRhOiB7IGF1dGhUeXBlOiAnY3JlZGVudGlhbHMnLCBkZWZhdWx0UmVnaW9uOiAnZXUtd2VzdC0yJyB9LFxuICAgICAgbmFtZTogJ0xvYWRpbmcnLFxuICAgICAgb3JnSWQ6IDEsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICB0eXBlOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZU5hbWU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTG9nb1VybDogJ3B1YmxpYy9pbWcvaWNuLWRhdGFzb3VyY2Uuc3ZnJyxcbiAgICAgIHVybDogJycsXG4gICAgICB1c2VyOiAnJyxcbiAgICAgIHNlY3VyZUpzb25GaWVsZHM6IHt9LFxuICAgIH0sXG4gICAge1xuICAgICAgbWV0YToge1xuICAgICAgICBpZDogJzEnLFxuICAgICAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgbGlua3M6IFt7IG5hbWU6ICcnLCB1cmw6ICcnIH1dLFxuICAgICAgICAgIGxvZ29zOiB7XG4gICAgICAgICAgICBsYXJnZTogJycsXG4gICAgICAgICAgICBzbWFsbDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICAgICAgdXBkYXRlZDogJycsXG4gICAgICAgICAgdmVyc2lvbjogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVzOiBbXSxcbiAgICAgICAgbW9kdWxlOiAnJyxcbiAgICAgICAgYmFzZVVybDogJycsXG4gICAgICB9LFxuICAgIH0gYXMgYW55XG4gICk7XG5cbiAgcmV0dXJuIGdldERhdGFTb3VyY2VOYXYobWFpbiwgcGFnZU5hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNEYXNoYm9hcmRzKGluY2x1ZGVzOiBQbHVnaW5JbmNsdWRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBpbmNsdWRlcy5maW5kKChpbmNsdWRlKSA9PiB7XG4gICAgICByZXR1cm4gaW5jbHVkZS50eXBlID09PSAnZGFzaGJvYXJkJztcbiAgICB9KSAhPT0gdW5kZWZpbmVkXG4gICk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBVcmxRdWVyeVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlc1N0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0YXNvdXJjZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5kYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncykgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KGRhdGFTb3VyY2UubmFtZSkgfHwgcmVnZXgudGVzdChkYXRhU291cmNlLmRhdGFiYXNlKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UudHlwZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VQbHVnaW5zID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5kYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5wbHVnaW5zLmZpbHRlcigodHlwZTogRGF0YVNvdXJjZVBsdWdpbk1ldGEpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh0eXBlLm5hbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlLCBkYXRhU291cmNlSWQ6IFVybFF1ZXJ5VmFsdWUpOiBEYXRhU291cmNlU2V0dGluZ3MgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZS51aWQgPT09IGRhdGFTb3VyY2VJZCkge1xuICAgIHJldHVybiBzdGF0ZS5kYXRhU291cmNlO1xuICB9XG4gIHJldHVybiB7fSBhcyBEYXRhU291cmNlU2V0dGluZ3M7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZU1ldGEgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIHR5cGU6IHN0cmluZyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhID0+IHtcbiAgaWYgKHN0YXRlLmRhdGFTb3VyY2VNZXRhLmlkID09PSB0eXBlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VNZXRhO1xuICB9XG5cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VQbHVnaW5NZXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUubGF5b3V0TW9kZTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc0NvdW50ID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0NvdW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkxpbmtCdXR0b24iLCJGaWx0ZXJJbnB1dCIsIlBhZ2VBY3Rpb25CYXIiLCJyZW5kZXIiLCJzZWFyY2hRdWVyeSIsImxpbmtCdXR0b24iLCJzZXRTZWFyY2hRdWVyeSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicHJvcHMiLCJsaW5rUHJvcHMiLCJocmVmIiwiZGlzYWJsZWQiLCJ0aXRsZSIsImNvbmZpZyIsImlzVHJpYWwiLCJleHBpcnkiLCJsaWNlbnNlSW5mbyIsInRyaWFsRXhwaXJ5IiwiaGlnaGxpZ2h0VHJpYWwiLCJmZWF0dXJlVG9nZ2xlcyIsImZlYXR1cmVIaWdobGlnaHRzIiwiQ2FyZCIsIlRhZyIsInVzZVN0eWxlcyIsImNzcyIsIkRhdGFTb3VyY2VzTGlzdCIsImRhdGFTb3VyY2VzIiwibGF5b3V0TW9kZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImxpc3QiLCJtYXAiLCJkYXRhU291cmNlIiwidWlkIiwibmFtZSIsInR5cGVMb2dvVXJsIiwibG9nbyIsInR5cGVOYW1lIiwidXJsIiwiaXNEZWZhdWx0IiwiaWQiLCJsaXN0U3R5bGUiLCJkaXNwbGF5Iiwib2JqZWN0Rml0IiwiY29ubmVjdCIsImNvbnRleHRTcnYiLCJQYWdlIiwiRW1wdHlMaXN0Q1RBIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImxvYWREYXRhU291cmNlcyIsImdldE5hdk1vZGVsIiwiZ2V0RGF0YVNvdXJjZXMiLCJnZXREYXRhU291cmNlc0NvdW50IiwiZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwiZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSIsInNldERhdGFTb3VyY2VzTGF5b3V0TW9kZSIsInNldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJkYXRhU291cmNlc0NvdW50IiwiaGFzRmV0Y2hlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsImVtcHR5TGlzdE1vZGVsIiwiYnV0dG9uSWNvbiIsImJ1dHRvbkxpbmsiLCJidXR0b25UaXRsZSIsInByb1RpcCIsInByb1RpcExpbmsiLCJwcm9UaXBMaW5rVGl0bGUiLCJwcm9UaXBUYXJnZXQiLCJEYXRhU291cmNlc0xpc3RQYWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjYW5DcmVhdGVEYXRhU291cmNlIiwiaGFzUGVybWlzc2lvbiIsIkRhdGFTb3VyY2VzQ3JlYXRlIiwiRGF0YVNvdXJjZXNXcml0ZSIsImVtcHR5TGlzdCIsImJ1dHRvbkRpc2FibGVkIiwicXVlcnkiLCJsYXN0VmFsdWVGcm9tIiwibG9jYXRpb25VdGlsIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwibG9jYXRpb25TZXJ2aWNlIiwidXBkYXRlTmF2SW5kZXgiLCJnZXRCYWNrZW5kU3J2IiwiZ2V0RGF0YXNvdXJjZVNydiIsImltcG9ydERhdGFTb3VyY2VQbHVnaW4iLCJnZXRQbHVnaW5TZXR0aW5ncyIsImJ1aWxkQ2F0ZWdvcmllcyIsImJ1aWxkTmF2TW9kZWwiLCJkYXRhU291cmNlTG9hZGVkIiwiZGF0YVNvdXJjZU1ldGFMb2FkZWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWRlZCIsImRhdGFTb3VyY2VzTG9hZGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQiLCJ0ZXN0RGF0YVNvdXJjZUZhaWxlZCIsInRlc3REYXRhU291cmNlU3RhcnRpbmciLCJ0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCIsImdldERhdGFTb3VyY2UiLCJnZXREYXRhU291cmNlTWV0YSIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5ncyIsInBhZ2VJZCIsImRlcGVuZGVuY2llcyIsImxvYWREYXRhU291cmNlIiwibG9hZERhdGFTb3VyY2VNZXRhIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIkVycm9yIiwibG9hZGVkRGF0YVNvdXJjZSIsImRhdGFTb3VyY2VTZXR0aW5ncyIsInBsdWdpbiIsImRhdGFTb3VyY2VNZXRhIiwidHlwZSIsImltcG9ydGVkUGx1Z2luIiwiZXJyIiwidGVzdERhdGFTb3VyY2UiLCJkYXRhU291cmNlTmFtZSIsImRzQXBpIiwiZ2V0IiwidGVzdERhdGFzb3VyY2UiLCJ3aXRoTm9CYWNrZW5kQ2FjaGUiLCJyZXN1bHQiLCJzdGF0dXNUZXh0IiwibWVzc2FnZSIsImVyck1lc3NhZ2UiLCJkZXRhaWxzIiwiZGF0YSIsInJlc3BvbnNlIiwiZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCIsInBsdWdpbkluZm8iLCJpc0JhY2tlbmQiLCJEYXRhU291cmNlQ2xhc3MiLCJwcm90b3R5cGUiLCJtZXRhIiwiYmFja2VuZCIsImJ5VWlkIiwiZmV0Y2giLCJtZXRob2QiLCJwYXJhbXMiLCJzaG93RXJyb3JBbGVydCIsIm9rIiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJ0b1N0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiYXNzdXJlQmFzZVVybCIsImFkZERhdGFTb3VyY2UiLCJnZXRTdG9yZSIsIm5ld0luc3RhbmNlIiwiYWNjZXNzIiwibGVuZ3RoIiwibmFtZUV4aXRzIiwiZmluZE5ld05hbWUiLCJwb3N0IiwicmVsb2FkIiwiZmV0Y2hVc2VyUGVybWlzc2lvbnMiLCJwdXNoIiwiZGF0YXNvdXJjZSIsImxvYWREYXRhU291cmNlUGx1Z2lucyIsInBsdWdpbnMiLCJlbmFibGVkIiwiY2F0ZWdvcmllcyIsInVwZGF0ZURhdGFTb3VyY2UiLCJwdXQiLCJkZWxldGVEYXRhU291cmNlIiwiZGVsZXRlIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJuYW1lSGFzU3VmZml4IiwiZ2V0TmV3TmFtZSIsImluY3JlbWVudExhc3REaWdpdCIsImdldExhc3REaWdpdCIsImVuZHNXaXRoIiwic2xpY2UiLCJkaWdpdCIsIlBsdWdpblR5cGUiLCJmZWF0dXJlRW5hYmxlZCIsIml0ZW0iLCJjYXRlZ29yeUluZGV4IiwicGx1Z2luSW5kZXgiLCJlbnRlcnByaXNlUGx1Z2lucyIsImdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucyIsImNhdGVnb3J5IiwiZW50ZXJwcmlzZVBsdWdpbiIsImZpbmQiLCJlbnRlcnByaXNlIiwidW5saWNlbnNlZCIsImluZm8iLCJsaW5rcyIsImxpbmsiLCJnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luIiwic29ydFBsdWdpbnMiLCJjIiwic29ydGluZ1J1bGVzIiwicHJvbWV0aGV1cyIsImdyYXBoaXRlIiwibG9raSIsIm15c3FsIiwiamFlZ2VyIiwicG9zdGdyZXMiLCJnY2xvdWQiLCJzb3J0IiwiYSIsImIiLCJhU29ydCIsImJTb3J0IiwiZ2V0UGhhbnRvbVBsdWdpbiIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwibW9kdWxlIiwiYmFzZVVybCIsImxvZ29zIiwic21hbGwiLCJsYXJnZSIsImF1dGhvciIsInNjcmVlbnNob3RzIiwidXBkYXRlZCIsInZlcnNpb24iLCJvcHRpb25zIiwicGx1Z2luQ2F0YWxvZ1VSTCIsIlByb0JhZGdlIiwibG9hZGluZ0RTVHlwZSIsInBsdWdpbk1ldGEiLCJoaWdobGlnaHRzRW5hYmxlZCIsImltZyIsInN1YlRpdGxlIiwidGV4dCIsImJyZWFkY3J1bWJzIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpY29uIiwiY29uZmlnUGFnZXMiLCJwYWdlIiwiaW5jbHVkZXMiLCJoYXNEYXNoYm9hcmRzIiwiaGFzUm9sZSIsImlzTG9hZGluZ05hdiIsInBlcm1pc3Npb25zRXhwZXJpbWVudElkIiwiZHNQZXJtaXNzaW9ucyIsInRhYlN1ZmZpeCIsImV4cGVyaW1lbnRJZCIsImV2ZW50VmFyaWFudCIsIkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkIiwiYW5hbHl0aWNzRXhwZXJpbWVudElkIiwiYW5hbHl0aWNzIiwiY2FjaGluZ0V4cGVyaW1lbnRJZCIsImNhY2hpbmciLCJoaWRlRnJvbVRhYnMiLCJnZXREYXRhU291cmNlTmF2IiwibWFpbiIsInBhZ2VOYW1lIiwibm9kZSIsImNoaWxkIiwiaW5kZXhPZiIsImdldERhdGFTb3VyY2VMb2FkaW5nTmF2IiwiYmFzaWNBdXRoIiwiYmFzaWNBdXRoVXNlciIsImJhc2ljQXV0aFBhc3N3b3JkIiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YWJhc2UiLCJqc29uRGF0YSIsImF1dGhUeXBlIiwiZGVmYXVsdFJlZ2lvbiIsIm9yZ0lkIiwicGFzc3dvcmQiLCJyZWFkT25seSIsInVzZXIiLCJzZWN1cmVKc29uRmllbGRzIiwiaW5jbHVkZSIsInVuZGVmaW5lZCIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsImdldERhdGFTb3VyY2VQbHVnaW5zIiwiZGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSIsImRhdGFTb3VyY2VJZCJdLCJzb3VyY2VSb290IjoiIn0=
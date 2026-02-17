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
  proTipLink: '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRQSxNQUFNcUssb0JBQW9CLEdBQUlqTyxLQUFELElBQTZCO0FBQy9ELFFBQU04TixLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXL04sS0FBSyxDQUFDa08seUJBQWpCLEVBQTRDLEdBQTVDLENBQWQ7QUFFQSxTQUFPbE8sS0FBSyxDQUFDK0csT0FBTixDQUFjTyxNQUFkLENBQXNCMUQsSUFBRCxJQUFnQztBQUMxRCxXQUFPa0ssS0FBSyxDQUFDRSxJQUFOLENBQVdwSyxJQUFJLENBQUNwRixJQUFoQixDQUFQO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FOTTtBQVFBLE1BQU1xRSxhQUFhLEdBQUcsQ0FBQzdDLEtBQUQsRUFBMEJtTyxZQUExQixLQUE4RTtBQUN6RyxNQUFJbk8sS0FBSyxDQUFDMUIsVUFBTixDQUFpQkMsR0FBakIsS0FBeUI0UCxZQUE3QixFQUEyQztBQUN6QyxXQUFPbk8sS0FBSyxDQUFDMUIsVUFBYjtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNELENBTE07QUFPQSxNQUFNd0UsaUJBQWlCLEdBQUcsQ0FBQzlDLEtBQUQsRUFBMEI0RCxJQUExQixLQUFpRTtBQUNoRyxNQUFJNUQsS0FBSyxDQUFDMkQsY0FBTixDQUFxQjdFLEVBQXJCLEtBQTRCOEUsSUFBaEMsRUFBc0M7QUFDcEMsV0FBTzVELEtBQUssQ0FBQzJELGNBQWI7QUFDRDs7QUFFRCxTQUFPLEVBQVA7QUFDRCxDQU5NO0FBUUEsTUFBTS9ELHlCQUF5QixHQUFJSSxLQUFELElBQTZCQSxLQUFLLENBQUN2RCxXQUFyRTtBQUNBLE1BQU1rRCx3QkFBd0IsR0FBSUssS0FBRCxJQUE2QkEsS0FBSyxDQUFDL0IsVUFBcEU7QUFDQSxNQUFNeUIsbUJBQW1CLEdBQUlNLEtBQUQsSUFBNkJBLEtBQUssQ0FBQ0csZ0JBQS9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1BhZ2VBY3Rpb25CYXIvUGFnZUFjdGlvbkJhci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvRGF0YVNvdXJjZXNMaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9EYXRhU291cmNlc0xpc3RQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2J1aWxkQ2F0ZWdvcmllcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9uYXZNb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9zZWxlY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rQnV0dG9uLCBGaWx0ZXJJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XG4gIHNldFNlYXJjaFF1ZXJ5OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgbGlua0J1dHRvbj86IHsgaHJlZjogc3RyaW5nOyB0aXRsZTogc3RyaW5nOyBkaXNhYmxlZD86IGJvb2xlYW4gfTtcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZUFjdGlvbkJhciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VhcmNoUXVlcnksIGxpbmtCdXR0b24sIHNldFNlYXJjaFF1ZXJ5LCB0YXJnZXQsIHBsYWNlaG9sZGVyID0gJ1NlYXJjaCBieSBuYW1lIG9yIHR5cGUnIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxpbmtQcm9wczogdHlwZW9mIExpbmtCdXR0b24uZGVmYXVsdFByb3BzID0geyBocmVmOiBsaW5rQnV0dG9uPy5ocmVmLCBkaXNhYmxlZDogbGlua0J1dHRvbj8uZGlzYWJsZWQgfTtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIGxpbmtQcm9wcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgPEZpbHRlcklucHV0IHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e3NldFNlYXJjaFF1ZXJ5fSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bGlua0J1dHRvbiAmJiA8TGlua0J1dHRvbiB7Li4ubGlua1Byb3BzfT57bGlua0J1dHRvbi50aXRsZX08L0xpbmtCdXR0b24+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmlhbCgpIHtcbiAgY29uc3QgZXhwaXJ5ID0gY29uZmlnLmxpY2Vuc2VJbmZvPy50cmlhbEV4cGlyeTtcbiAgcmV0dXJuICEhKGV4cGlyeSAmJiBleHBpcnkgPiAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFRyaWFsID0gKCkgPT4gaXNUcmlhbCgpICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNldHRpbmdzLCBMYXlvdXRNb2RlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBDYXJkLCBUYWcsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhU291cmNlczogRGF0YVNvdXJjZVNldHRpbmdzW107XG4gIGxheW91dE1vZGU6IExheW91dE1vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBEYXRhU291cmNlc0xpc3Q6IEZDPFByb3BzPiA9ICh7IGRhdGFTb3VyY2VzLCBsYXlvdXRNb2RlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICB7ZGF0YVNvdXJjZXMubWFwKChkYXRhU291cmNlKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGtleT17ZGF0YVNvdXJjZS5pZH0+XG4gICAgICAgICAgICA8Q2FyZCBocmVmPXtgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfWB9PlxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkaW5nPntkYXRhU291cmNlLm5hbWV9PC9DYXJkLkhlYWRpbmc+XG4gICAgICAgICAgICAgIDxDYXJkLkZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YVNvdXJjZS50eXBlTG9nb1VybH0gYWx0PVwiXCIgaGVpZ2h0PVwiNDBweFwiIHdpZHRoPVwiNDBweFwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgICAgICAgIDwvQ2FyZC5GaWd1cmU+XG4gICAgICAgICAgICAgIDxDYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UudHlwZU5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhU291cmNlLnVybCxcbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuaXNEZWZhdWx0ICYmIDxUYWcga2V5PVwiZGVmYXVsdC10YWdcIiBuYW1lPXsnZGVmYXVsdCd9IGNvbG9ySW5kZXg9ezF9IC8+LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVNvdXJjZXNMaXN0O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGlzdDogY3NzKHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgLy8gZ2FwOiAnOHB4JywgQWRkIGJhY2sgd2hlbiBsZWdhY3kgc3VwcG9ydCBmb3Igb2xkIENhcmQgaW50ZXJmYWNlIGlzIGRyb3BwZWRcbiAgICB9KSxcbiAgICBsb2dvOiBjc3Moe1xuICAgICAgb2JqZWN0Rml0OiAnY29udGFpbicsXG4gICAgfSksXG4gIH07XG59O1xuIiwiLy8gTGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gU2VydmljZXMgJiBVdGlsc1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IFBhZ2VBY3Rpb25CYXIgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlQWN0aW9uQmFyL1BhZ2VBY3Rpb25CYXInO1xuaW1wb3J0IEVtcHR5TGlzdENUQSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0VtcHR5TGlzdENUQS9FbXB0eUxpc3RDVEEnO1xuaW1wb3J0IERhdGFTb3VyY2VzTGlzdCBmcm9tICcuL0RhdGFTb3VyY2VzTGlzdCc7XG4vLyBUeXBlc1xuaW1wb3J0IHsgSWNvbk5hbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlLCBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbi8vIEFjdGlvbnNcbmltcG9ydCB7IGxvYWREYXRhU291cmNlcyB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5cbmltcG9ydCB7XG4gIGdldERhdGFTb3VyY2VzLFxuICBnZXREYXRhU291cmNlc0NvdW50LFxuICBnZXREYXRhU291cmNlc0xheW91dE1vZGUsXG4gIGdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnksXG59IGZyb20gJy4vc3RhdGUvc2VsZWN0b3JzJztcbmltcG9ydCB7IHNldERhdGFTb3VyY2VzTGF5b3V0TW9kZSwgc2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdkYXRhc291cmNlcycpLFxuICAgIGRhdGFTb3VyY2VzOiBnZXREYXRhU291cmNlcyhzdGF0ZS5kYXRhU291cmNlcyksXG4gICAgbGF5b3V0TW9kZTogZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlKHN0YXRlLmRhdGFTb3VyY2VzKSxcbiAgICBkYXRhU291cmNlc0NvdW50OiBnZXREYXRhU291cmNlc0NvdW50KHN0YXRlLmRhdGFTb3VyY2VzKSxcbiAgICBzZWFyY2hRdWVyeTogZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeShzdGF0ZS5kYXRhU291cmNlcyksXG4gICAgaGFzRmV0Y2hlZDogc3RhdGUuZGF0YVNvdXJjZXMuaGFzRmV0Y2hlZCxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2FkRGF0YVNvdXJjZXMsXG4gIHNldERhdGFTb3VyY2VzU2VhcmNoUXVlcnksXG4gIHNldERhdGFTb3VyY2VzTGF5b3V0TW9kZSxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5jb25zdCBlbXB0eUxpc3RNb2RlbCA9IHtcbiAgdGl0bGU6ICdObyBkYXRhIHNvdXJjZXMgZGVmaW5lZCcsXG4gIGJ1dHRvbkljb246ICdkYXRhYmFzZScgYXMgSWNvbk5hbWUsXG4gIGJ1dHRvbkxpbms6ICdkYXRhc291cmNlcy9uZXcnLFxuICBidXR0b25UaXRsZTogJ0FkZCBkYXRhIHNvdXJjZScsXG4gIHByb1RpcDogJ1lvdSBjYW4gYWxzbyBkZWZpbmUgZGF0YSBzb3VyY2VzIHRocm91Z2ggY29uZmlndXJhdGlvbiBmaWxlcy4nLFxuICBwcm9UaXBMaW5rOiAnJyxcbiAgcHJvVGlwTGlua1RpdGxlOiAnTGVhcm4gbW9yZScsXG4gIHByb1RpcFRhcmdldDogJ19ibGFuaycsXG59O1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZXNMaXN0UGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkRGF0YVNvdXJjZXMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2VzLCBkYXRhU291cmNlc0NvdW50LCBuYXZNb2RlbCwgbGF5b3V0TW9kZSwgc2VhcmNoUXVlcnksIHNldERhdGFTb3VyY2VzU2VhcmNoUXVlcnksIGhhc0ZldGNoZWQgfSA9XG4gICAgICB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2FuQ3JlYXRlRGF0YVNvdXJjZSA9XG4gICAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc0NyZWF0ZSkgJiZcbiAgICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzV3JpdGUpO1xuXG4gICAgY29uc3QgbGlua0J1dHRvbiA9IHtcbiAgICAgIGhyZWY6ICdkYXRhc291cmNlcy9uZXcnLFxuICAgICAgdGl0bGU6ICdBZGQgZGF0YSBzb3VyY2UnLFxuICAgICAgZGlzYWJsZWQ6ICFjYW5DcmVhdGVEYXRhU291cmNlLFxuICAgIH07XG5cbiAgICBjb25zdCBlbXB0eUxpc3QgPSB7XG4gICAgICAuLi5lbXB0eUxpc3RNb2RlbCxcbiAgICAgIGJ1dHRvbkRpc2FibGVkOiAhY2FuQ3JlYXRlRGF0YVNvdXJjZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17IWhhc0ZldGNoZWR9PlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7aGFzRmV0Y2hlZCAmJiBkYXRhU291cmNlc0NvdW50ID09PSAwICYmIDxFbXB0eUxpc3RDVEEgey4uLmVtcHR5TGlzdH0gLz59XG4gICAgICAgICAgICB7aGFzRmV0Y2hlZCAmJlxuICAgICAgICAgICAgICBkYXRhU291cmNlc0NvdW50ID4gMCAmJiBbXG4gICAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25CYXJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5PXsocXVlcnkpID0+IHNldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkocXVlcnkpfVxuICAgICAgICAgICAgICAgICAgbGlua0J1dHRvbj17bGlua0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIGtleT1cImFjdGlvbi1iYXJcIlxuICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgIDxEYXRhU291cmNlc0xpc3QgZGF0YVNvdXJjZXM9e2RhdGFTb3VyY2VzfSBsYXlvdXRNb2RlPXtsYXlvdXRNb2RlfSBrZXk9XCJsaXN0XCIgLz4sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihEYXRhU291cmNlc0xpc3RQYWdlKTtcbiIsImltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIGxvY2F0aW9uVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLCBnZXREYXRhU291cmNlU3J2LCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVwZGF0ZU5hdkluZGV4IH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IGltcG9ydERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9wbHVnaW5fbG9hZGVyJztcbmltcG9ydCB7IGdldFBsdWdpblNldHRpbmdzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5LCBUaHVua0Rpc3BhdGNoLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGJ1aWxkQ2F0ZWdvcmllcyB9IGZyb20gJy4vYnVpbGRDYXRlZ29yaWVzJztcbmltcG9ydCB7IGJ1aWxkTmF2TW9kZWwgfSBmcm9tICcuL25hdk1vZGVsJztcbmltcG9ydCB7XG4gIGRhdGFTb3VyY2VMb2FkZWQsXG4gIGRhdGFTb3VyY2VNZXRhTG9hZGVkLFxuICBkYXRhU291cmNlUGx1Z2luc0xvYWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkLFxuICBkYXRhU291cmNlc0xvYWRlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZCxcbiAgdGVzdERhdGFTb3VyY2VGYWlsZWQsXG4gIHRlc3REYXRhU291cmNlU3RhcnRpbmcsXG4gIHRlc3REYXRhU291cmNlU3VjY2VlZGVkLFxufSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2UsIGdldERhdGFTb3VyY2VNZXRhIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0gfSBmcm9tICdhcHAvY29yZS91dGlscy9hY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhU291cmNlVHlwZXNMb2FkZWRQYXlsb2FkIHtcbiAgcGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXTtcbiAgY2F0ZWdvcmllczogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzIHtcbiAgbG9hZERhdGFTb3VyY2U6IHR5cGVvZiBsb2FkRGF0YVNvdXJjZTtcbiAgbG9hZERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgbG9hZERhdGFTb3VyY2VNZXRhO1xuICBnZXREYXRhU291cmNlOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZTtcbiAgZ2V0RGF0YVNvdXJjZU1ldGE6IHR5cGVvZiBnZXREYXRhU291cmNlTWV0YTtcbiAgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbjogdHlwZW9mIGltcG9ydERhdGFTb3VyY2VQbHVnaW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdERhdGFTb3VyY2VEZXBlbmRlbmNpZXMge1xuICBnZXREYXRhc291cmNlU3J2OiB0eXBlb2YgZ2V0RGF0YVNvdXJjZVNydjtcbiAgZ2V0QmFja2VuZFNydjogdHlwZW9mIGdldEJhY2tlbmRTcnY7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0RGF0YVNvdXJjZVNldHRpbmdzID0gKFxuICBwYWdlSWQ6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBJbml0RGF0YVNvdXJjZVNldHRpbmdEZXBlbmRlbmNpZXMgPSB7XG4gICAgbG9hZERhdGFTb3VyY2UsXG4gICAgbG9hZERhdGFTb3VyY2VNZXRhLFxuICAgIGdldERhdGFTb3VyY2UsXG4gICAgZ2V0RGF0YVNvdXJjZU1ldGEsXG4gICAgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbixcbiAgfVxuKTogVGh1bmtSZXN1bHQ8dm9pZD4gPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGlmICghcGFnZUlkKSB7XG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKG5ldyBFcnJvcignSW52YWxpZCBJRCcpKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvYWRlZERhdGFTb3VyY2UgPSBhd2FpdCBkaXNwYXRjaChkZXBlbmRlbmNpZXMubG9hZERhdGFTb3VyY2UocGFnZUlkKSk7XG4gICAgICBhd2FpdCBkaXNwYXRjaChkZXBlbmRlbmNpZXMubG9hZERhdGFTb3VyY2VNZXRhKGxvYWRlZERhdGFTb3VyY2UpKTtcblxuICAgICAgLy8gaGF2ZSB3ZSBhbHJlYWR5IGxvYWRlZCB0aGUgcGx1Z2luIHRoZW4gd2UgY2FuIHNraXAgdGhlIHN0ZXBzIGJlbG93P1xuICAgICAgaWYgKGdldFN0YXRlKCkuZGF0YVNvdXJjZVNldHRpbmdzLnBsdWdpbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkZXBlbmRlbmNpZXMuZ2V0RGF0YVNvdXJjZShnZXRTdGF0ZSgpLmRhdGFTb3VyY2VzLCBwYWdlSWQpO1xuICAgICAgY29uc3QgZGF0YVNvdXJjZU1ldGEgPSBkZXBlbmRlbmNpZXMuZ2V0RGF0YVNvdXJjZU1ldGEoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgZGF0YVNvdXJjZSEudHlwZSk7XG4gICAgICBjb25zdCBpbXBvcnRlZFBsdWdpbiA9IGF3YWl0IGRlcGVuZGVuY2llcy5pbXBvcnREYXRhU291cmNlUGx1Z2luKGRhdGFTb3VyY2VNZXRhKTtcblxuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZChpbXBvcnRlZFBsdWdpbikpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChlcnIpKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdERhdGFTb3VyY2UgPSAoXG4gIGRhdGFTb3VyY2VOYW1lOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogVGVzdERhdGFTb3VyY2VEZXBlbmRlbmNpZXMgPSB7XG4gICAgZ2V0RGF0YXNvdXJjZVNydixcbiAgICBnZXRCYWNrZW5kU3J2LFxuICB9XG4pOiBUaHVua1Jlc3VsdDx2b2lkPiA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgZHNBcGkgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0RGF0YXNvdXJjZVNydigpLmdldChkYXRhU291cmNlTmFtZSk7XG5cbiAgICBpZiAoIWRzQXBpLnRlc3REYXRhc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VTdGFydGluZygpKTtcblxuICAgIGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkud2l0aE5vQmFja2VuZENhY2hlKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRzQXBpLnRlc3REYXRhc291cmNlKCk7XG5cbiAgICAgICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VTdWNjZWVkZWQocmVzdWx0KSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXNUZXh0LCBtZXNzYWdlOiBlcnJNZXNzYWdlLCBkZXRhaWxzLCBkYXRhIH0gPSBlcnI7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVyck1lc3NhZ2UgfHwgZGF0YT8ubWVzc2FnZSB8fCAnSFRUUCBlcnJvciAnICsgc3RhdHVzVGV4dDtcblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZUZhaWxlZCh7IG1lc3NhZ2UsIGRldGFpbHMgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvZGF0YXNvdXJjZXMnKTtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlc0xvYWRlZChyZXNwb25zZSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2UodWlkOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDxQcm9taXNlPERhdGFTb3VyY2VTZXR0aW5ncz4+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBhd2FpdCBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZCk7XG5cbiAgICBkaXNwYXRjaChkYXRhU291cmNlTG9hZGVkKGRhdGFTb3VyY2UpKTtcbiAgICByZXR1cm4gZGF0YVNvdXJjZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlTWV0YShkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBwbHVnaW5JbmZvID0gKGF3YWl0IGdldFBsdWdpblNldHRpbmdzKGRhdGFTb3VyY2UudHlwZSkpIGFzIERhdGFTb3VyY2VQbHVnaW5NZXRhO1xuICAgIGNvbnN0IHBsdWdpbiA9IGF3YWl0IGltcG9ydERhdGFTb3VyY2VQbHVnaW4ocGx1Z2luSW5mbyk7XG4gICAgY29uc3QgaXNCYWNrZW5kID0gcGx1Z2luLkRhdGFTb3VyY2VDbGFzcy5wcm90b3R5cGUgaW5zdGFuY2VvZiBEYXRhU291cmNlV2l0aEJhY2tlbmQ7XG4gICAgY29uc3QgbWV0YSA9IHtcbiAgICAgIC4uLnBsdWdpbkluZm8sXG4gICAgICBpc0JhY2tlbmQ6IHBsdWdpbkluZm8uYmFja2VuZCB8fCBpc0JhY2tlbmQsXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VNZXRhTG9hZGVkKG1ldGEpKTtcblxuICAgIHBsdWdpbi5tZXRhID0gbWV0YTtcbiAgICBkaXNwYXRjaCh1cGRhdGVOYXZJbmRleChidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2UsIHBsdWdpbikpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgZGF0YSBzb3VyY2UgYnkgdWlkIG9yIGlkLCBpZiBvbGQgaWQgZGV0ZWN0ZWQgaGFuZGxlcyByZWRpcmVjdFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCh1aWQ6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPiB7XG4gIC8vIFRyeSBmaXJzdCB3aXRoIHVpZCBhcGlcbiAgdHJ5IHtcbiAgICBjb25zdCBieVVpZCA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8RGF0YVNvdXJjZVNldHRpbmdzPih7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogYC9hcGkvZGF0YXNvdXJjZXMvdWlkLyR7dWlkfWAsXG4gICAgICAgIHBhcmFtczogYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSxcbiAgICAgICAgc2hvd0Vycm9yQWxlcnQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKGJ5VWlkLm9rKSB7XG4gICAgICByZXR1cm4gYnlVaWQuZGF0YTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gbG9va3VwIGRhdGEgc291cmNlIGJ5IHVpZCcsIGVycik7XG4gIH1cblxuICAvLyB0cnkgbG9va3VwIGJ5IG9sZCBkYiBpZFxuICBjb25zdCBpZCA9IHR5cGVvZiB1aWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQodWlkLCAxMCkgOiB1aWQ7XG4gIGlmICghTnVtYmVyLmlzTmFOKGlkKSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy8ke2lkfWAsXG4gICAgICAgIHBhcmFtczogYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSxcbiAgICAgICAgc2hvd0Vycm9yQWxlcnQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gSWYgdGhlIHVpZCBpcyBhIG51bWJlciwgdGhlbiB0aGlzIGlzIGEgcmVmcmVzaCBvbiBvbmUgb2YgdGhlIHNldHRpbmdzIHRhYnNcbiAgICAvLyBhbmQgd2UgY2FuIHJldHVybiB0aGUgcmVzcG9uc2UgZGF0YVxuICAgIGlmIChyZXNwb25zZS5vayAmJiB0eXBlb2YgdWlkID09PSAnbnVtYmVyJyAmJiByZXNwb25zZS5kYXRhLmlkID09PSB1aWQpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIC8vIE5vdCBpZGVhbCB0byBkbyBhIGZ1bGwgcGFnZSByZWxvYWQgaGVyZSBidXQgc28gdHJpY2t5IHRvIGhhbmRsZSB0aGlzXG4gICAgLy8gb3RoZXJ3aXNlIFdlIGNhbiB1cGRhdGUgdGhlIGxvY2F0aW9uIHVzaW5nIHJlYWN0IHJvdXRlciwgYnV0IG5lZWQgdG9cbiAgICAvLyBmdWxseSByZWxvYWQgdGhlIHJvdXRlIGFzIHRoZSBuYXYgbW9kZWwgcGFnZSBpbmRleCBpcyBub3QgbWF0Y2hpbmcgd2l0aFxuICAgIC8vIHRoZSB1cmwgaW4gdGhhdCBjYXNlLiBBbmQgcmVhY3Qgcm91dGVyIGhhcyBubyB3YXkgdG8gdW5tb3VudCByZW1vdW50IGFcbiAgICAvLyByb3V0ZVxuICAgIGlmIChyZXNwb25zZS5vayAmJiByZXNwb25zZS5kYXRhLmlkLnRvU3RyaW5nKCkgPT09IHVpZCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvblV0aWwuYXNzdXJlQmFzZVVybChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXNwb25zZS5kYXRhLnVpZH1gKTtcbiAgICAgIHJldHVybiB7fSBhcyBEYXRhU291cmNlU2V0dGluZ3M7IC8vIGF2b2lkcyBmbGFzaGluZyBhbiBlcnJvclxuICAgIH1cbiAgfVxuXG4gIHRocm93IEVycm9yKCdDb3VsZCBub3QgZmluZCBkYXRhIHNvdXJjZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF0YVNvdXJjZShwbHVnaW46IERhdGFTb3VyY2VQbHVnaW5NZXRhKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGF3YWl0IGRpc3BhdGNoKGxvYWREYXRhU291cmNlcygpKTtcblxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlcztcblxuICAgIGNvbnN0IG5ld0luc3RhbmNlID0ge1xuICAgICAgbmFtZTogcGx1Z2luLm5hbWUsXG4gICAgICB0eXBlOiBwbHVnaW4uaWQsXG4gICAgICBhY2Nlc3M6ICdwcm94eScsXG4gICAgICBpc0RlZmF1bHQ6IGRhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMCxcbiAgICB9O1xuXG4gICAgaWYgKG5hbWVFeGl0cyhkYXRhU291cmNlcywgbmV3SW5zdGFuY2UubmFtZSkpIHtcbiAgICAgIG5ld0luc3RhbmNlLm5hbWUgPSBmaW5kTmV3TmFtZShkYXRhU291cmNlcywgbmV3SW5zdGFuY2UubmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvZGF0YXNvdXJjZXMnLCBuZXdJbnN0YW5jZSk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgYXdhaXQgY29udGV4dFNydi5mZXRjaFVzZXJQZXJtaXNzaW9ucygpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goYC9kYXRhc291cmNlcy9lZGl0LyR7cmVzdWx0LmRhdGFzb3VyY2UudWlkfWApO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VQbHVnaW5zKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZCgpKTtcbiAgICBjb25zdCBwbHVnaW5zID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9wbHVnaW5zJywgeyBlbmFibGVkOiAxLCB0eXBlOiAnZGF0YXNvdXJjZScgfSk7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zKTtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlUGx1Z2luc0xvYWRlZCh7IHBsdWdpbnMsIGNhdGVnb3JpZXMgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YVNvdXJjZShkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL2RhdGFzb3VyY2VzLyR7ZGF0YVNvdXJjZS5pZH1gLCBkYXRhU291cmNlKTsgLy8gYnkgVUlEIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuICAgIHJldHVybiBkaXNwYXRjaChsb2FkRGF0YVNvdXJjZShkYXRhU291cmNlLnVpZCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRGF0YVNvdXJjZSgpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGdldFN0b3JlKCkuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZTtcblxuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWApO1xuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcblxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvZGF0YXNvdXJjZXMnKTtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEl0ZW1XaXRoTmFtZSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVFeGl0cyhkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gKFxuICAgIGRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFTb3VyY2UubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfSkubGVuZ3RoID4gMFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZE5ld05hbWUoZGF0YVNvdXJjZXM6IEl0ZW1XaXRoTmFtZVtdLCBuYW1lOiBzdHJpbmcpIHtcbiAgLy8gTmVlZCB0byBsb29wIHRocm91Z2ggY3VycmVudCBkYXRhIHNvdXJjZXMgdG8gbWFrZSBzdXJlXG4gIC8vIHRoZSBuYW1lIGRvZXNuJ3QgZXhpc3RcbiAgd2hpbGUgKG5hbWVFeGl0cyhkYXRhU291cmNlcywgbmFtZSkpIHtcbiAgICAvLyBJZiB0aGVyZSdzIGEgZHVwbGljYXRlIG5hbWUgdGhhdCBkb2Vzbid0IGVuZCB3aXRoICcteCdcbiAgICAvLyB3ZSBjYW4gYWRkIC0xIHRvIHRoZSBuYW1lIGFuZCBiZSBkb25lLlxuICAgIGlmICghbmFtZUhhc1N1ZmZpeChuYW1lKSkge1xuICAgICAgbmFtZSA9IGAke25hbWV9LTFgO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSdzIGEgZHVwbGljYXRlIG5hbWUgdGhhdCBlbmRzIHdpdGggJy14J1xuICAgICAgLy8gd2UgY2FuIHRyeSB0byBpbmNyZW1lbnQgdGhlIGxhc3QgZGlnaXQgdW50aWwgdGhlIG5hbWUgaXMgdW5pcXVlXG5cbiAgICAgIC8vIHJlbW92ZSB0aGUgJ3gnIHBhcnQgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgbmV3IG51bWJlclxuICAgICAgbmFtZSA9IGAke2dldE5ld05hbWUobmFtZSl9JHtpbmNyZW1lbnRMYXN0RGlnaXQoZ2V0TGFzdERpZ2l0KG5hbWUpKX1gO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBuYW1lSGFzU3VmZml4KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS5lbmRzV2l0aCgnLScsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIGdldExhc3REaWdpdChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBhcnNlSW50KG5hbWUuc2xpY2UoLTEpLCAxMCk7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudExhc3REaWdpdChkaWdpdDogbnVtYmVyKSB7XG4gIHJldHVybiBpc05hTihkaWdpdCkgPyAxIDogZGlnaXQgKyAxO1xufVxuXG5mdW5jdGlvbiBnZXROZXdOYW1lKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS5zbGljZSgwLCBuYW1lLmxlbmd0aCAtIDEpO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENhdGVnb3JpZXMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSk6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdIHtcbiAgY29uc3QgY2F0ZWdvcmllczogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10gPSBbXG4gICAgeyBpZDogJ3RzZGInLCB0aXRsZTogJ1RpbWUgc2VyaWVzIGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2xvZ2dpbmcnLCB0aXRsZTogJ0xvZ2dpbmcgJiBkb2N1bWVudCBkYXRhYmFzZXMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICd0cmFjaW5nJywgdGl0bGU6ICdEaXN0cmlidXRlZCB0cmFjaW5nJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnc3FsJywgdGl0bGU6ICdTUUwnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdjbG91ZCcsIHRpdGxlOiAnQ2xvdWQnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdlbnRlcnByaXNlJywgdGl0bGU6ICdFbnRlcnByaXNlIHBsdWdpbnMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdpb3QnLCB0aXRsZTogJ0luZHVzdHJpYWwgJiBJb1QnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdvdGhlcicsIHRpdGxlOiAnT3RoZXJzJywgcGx1Z2luczogW10gfSxcbiAgXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pO1xuXG4gIGNvbnN0IGNhdGVnb3J5SW5kZXg6IFJlY29yZDxzdHJpbmcsIERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeT4gPSB7fTtcbiAgY29uc3QgcGx1Z2luSW5kZXg6IFJlY29yZDxzdHJpbmcsIERhdGFTb3VyY2VQbHVnaW5NZXRhPiA9IHt9O1xuICBjb25zdCBlbnRlcnByaXNlUGx1Z2lucyA9IGdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucygpO1xuXG4gIC8vIGJ1aWxkIGluZGljZXNcbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgY2F0ZWdvcnlJbmRleFtjYXRlZ29yeS5pZF0gPSBjYXRlZ29yeTtcbiAgfVxuXG4gIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICBjb25zdCBlbnRlcnByaXNlUGx1Z2luID0gZW50ZXJwcmlzZVBsdWdpbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGx1Z2luLmlkKTtcbiAgICAvLyBGb3JjZSBjYXRlZ29yeSBmb3IgZW50ZXJwcmlzZSBwbHVnaW5zXG4gICAgaWYgKHBsdWdpbi5lbnRlcnByaXNlIHx8IGVudGVycHJpc2VQbHVnaW4pIHtcbiAgICAgIHBsdWdpbi5jYXRlZ29yeSA9ICdlbnRlcnByaXNlJztcbiAgICAgIHBsdWdpbi51bmxpY2Vuc2VkID0gIWZlYXR1cmVFbmFibGVkKCdlbnRlcnByaXNlLnBsdWdpbnMnKTtcbiAgICAgIHBsdWdpbi5pbmZvLmxpbmtzID0gZW50ZXJwcmlzZVBsdWdpbj8uaW5mbz8ubGlua3MgfHwgcGx1Z2luLmluZm8ubGlua3M7XG4gICAgfVxuXG4gICAgLy8gRml4IGxpbmsgbmFtZVxuICAgIGlmIChwbHVnaW4uaW5mby5saW5rcykge1xuICAgICAgZm9yIChjb25zdCBsaW5rIG9mIHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICAgIGxpbmsubmFtZSA9ICdMZWFybiBtb3JlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGx1Z2luLmNhdGVnb3J5KSB8fCBjYXRlZ29yeUluZGV4WydvdGhlciddO1xuICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIC8vIGFkZCB0byBwbHVnaW4gaW5kZXhcbiAgICBwbHVnaW5JbmRleFtwbHVnaW4uaWRdID0gcGx1Z2luO1xuICB9XG5cbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgLy8gYWRkIHBoYW50b20gcGx1Z2luXG4gICAgaWYgKGNhdGVnb3J5LmlkID09PSAnY2xvdWQnKSB7XG4gICAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2goZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbigpKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5zXG4gICAgaWYgKGNhdGVnb3J5LmlkID09PSAnZW50ZXJwcmlzZScpIHtcbiAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIGVudGVycHJpc2VQbHVnaW5zKSB7XG4gICAgICAgIGlmICghcGx1Z2luSW5kZXhbcGx1Z2luLmlkXSkge1xuICAgICAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc29ydFBsdWdpbnMoY2F0ZWdvcnkucGx1Z2lucyk7XG4gIH1cblxuICAvLyBPbmx5IHNob3cgY2F0ZWdvcmllcyB3aXRoIHBsdWdpbnNcbiAgcmV0dXJuIGNhdGVnb3JpZXMuZmlsdGVyKChjKSA9PiBjLnBsdWdpbnMubGVuZ3RoID4gMCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRQbHVnaW5zKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10pIHtcbiAgY29uc3Qgc29ydGluZ1J1bGVzOiB7IFtpZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgcHJvbWV0aGV1czogMTAwLFxuICAgIGdyYXBoaXRlOiA5NSxcbiAgICBsb2tpOiA5MCxcbiAgICBteXNxbDogODAsXG4gICAgamFlZ2VyOiAxMDAsXG4gICAgcG9zdGdyZXM6IDc5LFxuICAgIGdjbG91ZDogLTEsXG4gIH07XG5cbiAgcGx1Z2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYVNvcnQgPSBzb3J0aW5nUnVsZXNbYS5pZF0gfHwgMDtcbiAgICBjb25zdCBiU29ydCA9IHNvcnRpbmdSdWxlc1tiLmlkXSB8fCAwO1xuICAgIGlmIChhU29ydCA+IGJTb3J0KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhU29ydCA8IGJTb3J0KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5uYW1lID4gYi5uYW1lID8gLTEgOiAxO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10ge1xuICByZXR1cm4gW1xuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTcGx1bmsnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgU3BsdW5rIGxvZ3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NwbHVua19sb2dvXzEyOC5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW9yYWNsZS1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdPcmFjbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgT3JhY2xlIFNRTCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvb3JhY2xlLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZHluYXRyYWNlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0R5bmF0cmFjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBEeW5hdHJhY2UgZGF0YScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZHluYXRyYWNlLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2VydmljZW5vdy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2VydmljZU5vdyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NlcnZpY2VOb3cnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NlcnZpY2Vub3cuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1kYXRhZG9nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdEYXRhRG9nIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnRGF0YURvZycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZGF0YWRvZy5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW5ld3JlbGljLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdOZXcgUmVsaWMgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdOZXcgUmVsaWMnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL25ld3JlbGljLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbW9uZ29kYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTW9uZ29EQiBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ01vbmdvREInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL21vbmdvZGIuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zbm93Zmxha2UtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Nub3dmbGFrZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1Nub3dmbGFrZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc25vd2ZsYWtlLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtd2F2ZWZyb250LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdXYXZlZnJvbnQgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdXYXZlZnJvbnQnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3dhdmVmcm9udC5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdkbG9wZXM3LWFwcGR5bmFtaWNzLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBEeW5hbWljcyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ0FwcER5bmFtaWNzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9hcHBkeW5hbWljcy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNhcGhhbmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NBUCBIQU5Bwq4gaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTQVAgSEFOQcKuJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zYXBfaGFuYS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWhvbmV5Y29tYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9uZXljb21iIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdIb25leWNvbWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2hvbmV5Y29tYi5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNhbGVzZm9yY2UtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NhbGVzZm9yY2UgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NhbGVzZm9yY2UnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhbGVzZm9yY2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1qaXJhLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdKaXJhIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdKaXJhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9qaXJhX2xvZ28ucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1naXRsYWItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0dpdExhYiBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnR2l0TGFiJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9naXRsYWIuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zcGx1bmstbW9uaXRvcmluZy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2lnbmFsRnggaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuayBJbmZyYXN0cnVjdHVyZSBNb25pdG9yaW5nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zaWduYWxmeC1sb2dvLnN2ZycsXG4gICAgfSksXG4gIF07XG59XG5cbmZ1bmN0aW9uIGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiAnZ2Nsb3VkJyxcbiAgICBuYW1lOiAnR3JhZmFuYSBDbG91ZCcsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9zdGVkIEdyYXBoaXRlLCBQcm9tZXRoZXVzLCBhbmQgTG9raScsXG4gICAgICBsb2dvczogeyBzbWFsbDogJ3B1YmxpYy9pbWcvZ3JhZmFuYV9pY29uLnN2ZycsIGxhcmdlOiAnYXNkJyB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9ncmFmYW5hLmNvbS9wcm9kdWN0cy9jbG91ZC8nLFxuICAgICAgICAgIG5hbWU6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG5cbmludGVyZmFjZSBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1nVXJsOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFBoYW50b21QbHVnaW4ob3B0aW9uczogR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IG9wdGlvbnMuaWQsXG4gICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiBvcHRpb25zLmltZ1VybCwgbGFyZ2U6IG9wdGlvbnMuaW1nVXJsIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6IGNvbmZpZy5wbHVnaW5DYXRhbG9nVVJMICsgb3B0aW9ucy5pZCxcbiAgICAgICAgICBuYW1lOiAnSW5zdGFsbCBub3cnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncywgUGx1Z2luVHlwZSwgUGx1Z2luSW5jbHVkZSwgTmF2TW9kZWwsIE5hdk1vZGVsSXRlbSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgUHJvQmFkZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvUHJvQmFkZ2UnO1xuaW1wb3J0IHsgR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICcuLi9zZXR0aW5ncy9QbHVnaW5TZXR0aW5ncyc7XG5pbXBvcnQgeyBoaWdobGlnaHRUcmlhbCB9IGZyb20gJy4uLy4uL2FkbWluL3V0aWxzJztcblxuY29uc3QgbG9hZGluZ0RTVHlwZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzLCBwbHVnaW46IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luKTogTmF2TW9kZWxJdGVtIHtcbiAgY29uc3QgcGx1Z2luTWV0YSA9IHBsdWdpbi5tZXRhO1xuICBjb25zdCBoaWdobGlnaHRzRW5hYmxlZCA9IGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiAgY29uc3QgbmF2TW9kZWw6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBpbWc6IHBsdWdpbk1ldGEuaW5mby5sb2dvcy5sYXJnZSxcbiAgICBpZDogJ2RhdGFzb3VyY2UtJyArIGRhdGFTb3VyY2UudWlkLFxuICAgIHN1YlRpdGxlOiBgVHlwZTogJHtwbHVnaW5NZXRhLm5hbWV9YCxcbiAgICB1cmw6ICcnLFxuICAgIHRleHQ6IGRhdGFTb3VyY2UubmFtZSxcbiAgICBicmVhZGNydW1iczogW3sgdGl0bGU6ICdEYXRhIFNvdXJjZXMnLCB1cmw6ICdkYXRhc291cmNlcycgfV0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaWNvbjogJ3NsaWRlcnMtdi1hbHQnLFxuICAgICAgICBpZDogYGRhdGFzb3VyY2Utc2V0dGluZ3MtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgICB0ZXh0OiAnU2V0dGluZ3MnLFxuICAgICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2AsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgaWYgKHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgIGZvciAoY29uc3QgcGFnZSBvZiBwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgdGV4dDogcGFnZS50aXRsZSxcbiAgICAgICAgaWNvbjogcGFnZS5pY29uLFxuICAgICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9Lz9wYWdlPSR7cGFnZS5pZH1gLFxuICAgICAgICBpZDogYGRhdGFzb3VyY2UtcGFnZS0ke3BhZ2UuaWR9YCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwbHVnaW5NZXRhLmluY2x1ZGVzICYmIGhhc0Rhc2hib2FyZHMocGx1Z2luTWV0YS5pbmNsdWRlcykgJiYgY29udGV4dFNydi5oYXNSb2xlKCdBZG1pbicpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGljb246ICdhcHBzJyxcbiAgICAgIGlkOiBgZGF0YXNvdXJjZS1kYXNoYm9hcmRzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgIHRleHQ6ICdEYXNoYm9hcmRzJyxcbiAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vZGFzaGJvYXJkc2AsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBpc0xvYWRpbmdOYXYgPSBkYXRhU291cmNlLnR5cGUgPT09IGxvYWRpbmdEU1R5cGU7XG5cbiAgY29uc3QgcGVybWlzc2lvbnNFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLXBlcm1pc3Npb25zLWJhZGdlJztcbiAgY29uc3QgZHNQZXJtaXNzaW9uczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2xvY2snLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1wZXJtaXNzaW9ucy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ1Blcm1pc3Npb25zJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L3Blcm1pc3Npb25zYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgZHNQZXJtaXNzaW9ucy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnZHNwZXJtaXNzaW9ucycpKSB7XG4gICAgaWYgKGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkKSkge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goZHNQZXJtaXNzaW9ucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5kc1Blcm1pc3Npb25zLFxuICAgICAgdXJsOiBkc1Blcm1pc3Npb25zLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFuYWx5dGljc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtaW5zaWdodHMtYmFkZ2UnO1xuICBjb25zdCBhbmFseXRpY3M6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdpbmZvLWNpcmNsZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWluc2lnaHRzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnSW5zaWdodHMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vaW5zaWdodHNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBhbmFseXRpY3MudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdhbmFseXRpY3MnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGFuYWx5dGljcyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmFuYWx5dGljcyxcbiAgICAgIHVybDogYW5hbHl0aWNzLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjYWNoaW5nRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1xdWVyeS1jYWNoaW5nLWJhZGdlJztcblxuICBjb25zdCBjYWNoaW5nOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnZGF0YWJhc2UnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1jYWNoZS0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0NhY2hlJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2NhY2hlYCxcbiAgICBoaWRlRnJvbVRhYnM6ICFwbHVnaW5NZXRhLmlzQmFja2VuZCB8fCAhY29uZmlnLmNhY2hpbmcuZW5hYmxlZCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgY2FjaGluZy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogY2FjaGluZ0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdjYWNoaW5nJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChjYWNoaW5nKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uY2FjaGluZyxcbiAgICAgIHVybDogY2FjaGluZy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogY2FjaGluZ0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBuYXZNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFTb3VyY2VOYXYobWFpbjogTmF2TW9kZWxJdGVtLCBwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBsZXQgbm9kZTogTmF2TW9kZWxJdGVtID0geyB0ZXh0OiAnJyB9O1xuXG4gIC8vIGZpbmQgYWN0aXZlIHBhZ2VcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBtYWluLmNoaWxkcmVuISkge1xuICAgIGlmIChjaGlsZC5pZCEuaW5kZXhPZihwYWdlTmFtZSkgPiAwKSB7XG4gICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgbm9kZSA9IGNoaWxkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYWluOiBtYWluLFxuICAgIG5vZGU6IG5vZGUhLFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFTb3VyY2VMb2FkaW5nTmF2KHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGNvbnN0IG1haW4gPSBidWlsZE5hdk1vZGVsKFxuICAgIHtcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBiYXNpY0F1dGg6IGZhbHNlLFxuICAgICAgYmFzaWNBdXRoVXNlcjogJycsXG4gICAgICBiYXNpY0F1dGhQYXNzd29yZDogJycsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgZGF0YWJhc2U6ICcnLFxuICAgICAgaWQ6IDEsXG4gICAgICB1aWQ6ICd4JyxcbiAgICAgIGlzRGVmYXVsdDogZmFsc2UsXG4gICAgICBqc29uRGF0YTogeyBhdXRoVHlwZTogJ2NyZWRlbnRpYWxzJywgZGVmYXVsdFJlZ2lvbjogJ2V1LXdlc3QtMicgfSxcbiAgICAgIG5hbWU6ICdMb2FkaW5nJyxcbiAgICAgIG9yZ0lkOiAxLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgdHlwZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVOYW1lOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZUxvZ29Vcmw6ICdwdWJsaWMvaW1nL2ljbi1kYXRhc291cmNlLnN2ZycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgdXNlcjogJycsXG4gICAgICBzZWN1cmVKc29uRmllbGRzOiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgIGxpbmtzOiBbeyBuYW1lOiAnJywgdXJsOiAnJyB9XSxcbiAgICAgICAgICBsb2dvczoge1xuICAgICAgICAgICAgbGFyZ2U6ICcnLFxuICAgICAgICAgICAgc21hbGw6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgICAgIHVwZGF0ZWQ6ICcnLFxuICAgICAgICAgIHZlcnNpb246ICcnLFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlczogW10sXG4gICAgICAgIG1vZHVsZTogJycsXG4gICAgICAgIGJhc2VVcmw6ICcnLFxuICAgICAgfSxcbiAgICB9IGFzIGFueVxuICApO1xuXG4gIHJldHVybiBnZXREYXRhU291cmNlTmF2KG1haW4sIHBhZ2VOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzRGFzaGJvYXJkcyhpbmNsdWRlczogUGx1Z2luSW5jbHVkZVtdKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgaW5jbHVkZXMuZmluZCgoaW5jbHVkZSkgPT4ge1xuICAgICAgcmV0dXJuIGluY2x1ZGUudHlwZSA9PT0gJ2Rhc2hib2FyZCc7XG4gICAgfSkgIT09IHVuZGVmaW5lZFxuICApO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgVXJsUXVlcnlWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZXNTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGFzb3VyY2VzJztcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5zZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChkYXRhU291cmNlLm5hbWUpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5kYXRhYmFzZSkgfHwgcmVnZXgudGVzdChkYXRhU291cmNlLnR5cGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlUGx1Z2lucyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuZGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUucGx1Z2lucy5maWx0ZXIoKHR5cGU6IERhdGFTb3VyY2VQbHVnaW5NZXRhKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodHlwZS5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgZGF0YVNvdXJjZUlkOiBVcmxRdWVyeVZhbHVlKTogRGF0YVNvdXJjZVNldHRpbmdzID0+IHtcbiAgaWYgKHN0YXRlLmRhdGFTb3VyY2UudWlkID09PSBkYXRhU291cmNlSWQpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZTtcbiAgfVxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VNZXRhID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlLCB0eXBlOiBzdHJpbmcpOiBEYXRhU291cmNlUGx1Z2luTWV0YSA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlTWV0YS5pZCA9PT0gdHlwZSkge1xuICAgIHJldHVybiBzdGF0ZS5kYXRhU291cmNlTWV0YTtcbiAgfVxuXG4gIHJldHVybiB7fSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5ID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc0xheW91dE1vZGUgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmxheW91dE1vZGU7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNDb3VudCA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXNDb3VudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJMaW5rQnV0dG9uIiwiRmlsdGVySW5wdXQiLCJQYWdlQWN0aW9uQmFyIiwicmVuZGVyIiwic2VhcmNoUXVlcnkiLCJsaW5rQnV0dG9uIiwic2V0U2VhcmNoUXVlcnkiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInByb3BzIiwibGlua1Byb3BzIiwiaHJlZiIsImRpc2FibGVkIiwidGl0bGUiLCJjb25maWciLCJpc1RyaWFsIiwiZXhwaXJ5IiwibGljZW5zZUluZm8iLCJ0cmlhbEV4cGlyeSIsImhpZ2hsaWdodFRyaWFsIiwiZmVhdHVyZVRvZ2dsZXMiLCJmZWF0dXJlSGlnaGxpZ2h0cyIsIkNhcmQiLCJUYWciLCJ1c2VTdHlsZXMiLCJjc3MiLCJEYXRhU291cmNlc0xpc3QiLCJkYXRhU291cmNlcyIsImxheW91dE1vZGUiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJsaXN0IiwibWFwIiwiZGF0YVNvdXJjZSIsInVpZCIsIm5hbWUiLCJ0eXBlTG9nb1VybCIsImxvZ28iLCJ0eXBlTmFtZSIsInVybCIsImlzRGVmYXVsdCIsImlkIiwibGlzdFN0eWxlIiwiZGlzcGxheSIsIm9iamVjdEZpdCIsImNvbm5lY3QiLCJjb250ZXh0U3J2IiwiUGFnZSIsIkVtcHR5TGlzdENUQSIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJsb2FkRGF0YVNvdXJjZXMiLCJnZXROYXZNb2RlbCIsImdldERhdGFTb3VyY2VzIiwiZ2V0RGF0YVNvdXJjZXNDb3VudCIsImdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSIsImdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkiLCJzZXREYXRhU291cmNlc0xheW91dE1vZGUiLCJzZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiZGF0YVNvdXJjZXNDb3VudCIsImhhc0ZldGNoZWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJlbXB0eUxpc3RNb2RlbCIsImJ1dHRvbkljb24iLCJidXR0b25MaW5rIiwiYnV0dG9uVGl0bGUiLCJwcm9UaXAiLCJwcm9UaXBMaW5rIiwicHJvVGlwTGlua1RpdGxlIiwicHJvVGlwVGFyZ2V0IiwiRGF0YVNvdXJjZXNMaXN0UGFnZSIsImNvbXBvbmVudERpZE1vdW50IiwiY2FuQ3JlYXRlRGF0YVNvdXJjZSIsImhhc1Blcm1pc3Npb24iLCJEYXRhU291cmNlc0NyZWF0ZSIsIkRhdGFTb3VyY2VzV3JpdGUiLCJlbXB0eUxpc3QiLCJidXR0b25EaXNhYmxlZCIsInF1ZXJ5IiwibGFzdFZhbHVlRnJvbSIsImxvY2F0aW9uVXRpbCIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImxvY2F0aW9uU2VydmljZSIsInVwZGF0ZU5hdkluZGV4IiwiZ2V0QmFja2VuZFNydiIsImdldERhdGFzb3VyY2VTcnYiLCJpbXBvcnREYXRhU291cmNlUGx1Z2luIiwiZ2V0UGx1Z2luU2V0dGluZ3MiLCJidWlsZENhdGVnb3JpZXMiLCJidWlsZE5hdk1vZGVsIiwiZGF0YVNvdXJjZUxvYWRlZCIsImRhdGFTb3VyY2VNZXRhTG9hZGVkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQiLCJkYXRhU291cmNlc0xvYWRlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkIiwidGVzdERhdGFTb3VyY2VGYWlsZWQiLCJ0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nIiwidGVzdERhdGFTb3VyY2VTdWNjZWVkZWQiLCJnZXREYXRhU291cmNlIiwiZ2V0RGF0YVNvdXJjZU1ldGEiLCJhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSIsImluaXREYXRhU291cmNlU2V0dGluZ3MiLCJwYWdlSWQiLCJkZXBlbmRlbmNpZXMiLCJsb2FkRGF0YVNvdXJjZSIsImxvYWREYXRhU291cmNlTWV0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJFcnJvciIsImxvYWRlZERhdGFTb3VyY2UiLCJkYXRhU291cmNlU2V0dGluZ3MiLCJwbHVnaW4iLCJkYXRhU291cmNlTWV0YSIsInR5cGUiLCJpbXBvcnRlZFBsdWdpbiIsImVyciIsInRlc3REYXRhU291cmNlIiwiZGF0YVNvdXJjZU5hbWUiLCJkc0FwaSIsImdldCIsInRlc3REYXRhc291cmNlIiwid2l0aE5vQmFja2VuZENhY2hlIiwicmVzdWx0Iiwic3RhdHVzVGV4dCIsIm1lc3NhZ2UiLCJlcnJNZXNzYWdlIiwiZGV0YWlscyIsImRhdGEiLCJyZXNwb25zZSIsImdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQiLCJwbHVnaW5JbmZvIiwiaXNCYWNrZW5kIiwiRGF0YVNvdXJjZUNsYXNzIiwicHJvdG90eXBlIiwibWV0YSIsImJhY2tlbmQiLCJieVVpZCIsImZldGNoIiwibWV0aG9kIiwicGFyYW1zIiwic2hvd0Vycm9yQWxlcnQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwidG9TdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc3VyZUJhc2VVcmwiLCJhZGREYXRhU291cmNlIiwiZ2V0U3RvcmUiLCJuZXdJbnN0YW5jZSIsImFjY2VzcyIsImxlbmd0aCIsIm5hbWVFeGl0cyIsImZpbmROZXdOYW1lIiwicG9zdCIsInJlbG9hZCIsImZldGNoVXNlclBlcm1pc3Npb25zIiwicHVzaCIsImRhdGFzb3VyY2UiLCJsb2FkRGF0YVNvdXJjZVBsdWdpbnMiLCJwbHVnaW5zIiwiZW5hYmxlZCIsImNhdGVnb3JpZXMiLCJ1cGRhdGVEYXRhU291cmNlIiwicHV0IiwiZGVsZXRlRGF0YVNvdXJjZSIsImRlbGV0ZSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwibmFtZUhhc1N1ZmZpeCIsImdldE5ld05hbWUiLCJpbmNyZW1lbnRMYXN0RGlnaXQiLCJnZXRMYXN0RGlnaXQiLCJlbmRzV2l0aCIsInNsaWNlIiwiZGlnaXQiLCJQbHVnaW5UeXBlIiwiZmVhdHVyZUVuYWJsZWQiLCJpdGVtIiwiY2F0ZWdvcnlJbmRleCIsInBsdWdpbkluZGV4IiwiZW50ZXJwcmlzZVBsdWdpbnMiLCJnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMiLCJjYXRlZ29yeSIsImVudGVycHJpc2VQbHVnaW4iLCJmaW5kIiwiZW50ZXJwcmlzZSIsInVubGljZW5zZWQiLCJpbmZvIiwibGlua3MiLCJsaW5rIiwiZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbiIsInNvcnRQbHVnaW5zIiwiYyIsInNvcnRpbmdSdWxlcyIsInByb21ldGhldXMiLCJncmFwaGl0ZSIsImxva2kiLCJteXNxbCIsImphZWdlciIsInBvc3RncmVzIiwiZ2Nsb3VkIiwic29ydCIsImEiLCJiIiwiYVNvcnQiLCJiU29ydCIsImdldFBoYW50b21QbHVnaW4iLCJkZXNjcmlwdGlvbiIsImltZ1VybCIsIm1vZHVsZSIsImJhc2VVcmwiLCJsb2dvcyIsInNtYWxsIiwibGFyZ2UiLCJhdXRob3IiLCJzY3JlZW5zaG90cyIsInVwZGF0ZWQiLCJ2ZXJzaW9uIiwib3B0aW9ucyIsInBsdWdpbkNhdGFsb2dVUkwiLCJQcm9CYWRnZSIsImxvYWRpbmdEU1R5cGUiLCJwbHVnaW5NZXRhIiwiaGlnaGxpZ2h0c0VuYWJsZWQiLCJpbWciLCJzdWJUaXRsZSIsInRleHQiLCJicmVhZGNydW1icyIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaWNvbiIsImNvbmZpZ1BhZ2VzIiwicGFnZSIsImluY2x1ZGVzIiwiaGFzRGFzaGJvYXJkcyIsImhhc1JvbGUiLCJpc0xvYWRpbmdOYXYiLCJwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCIsImRzUGVybWlzc2lvbnMiLCJ0YWJTdWZmaXgiLCJleHBlcmltZW50SWQiLCJldmVudFZhcmlhbnQiLCJEYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCIsImFuYWx5dGljc0V4cGVyaW1lbnRJZCIsImFuYWx5dGljcyIsImNhY2hpbmdFeHBlcmltZW50SWQiLCJjYWNoaW5nIiwiaGlkZUZyb21UYWJzIiwiZ2V0RGF0YVNvdXJjZU5hdiIsIm1haW4iLCJwYWdlTmFtZSIsIm5vZGUiLCJjaGlsZCIsImluZGV4T2YiLCJnZXREYXRhU291cmNlTG9hZGluZ05hdiIsImJhc2ljQXV0aCIsImJhc2ljQXV0aFVzZXIiLCJiYXNpY0F1dGhQYXNzd29yZCIsIndpdGhDcmVkZW50aWFscyIsImRhdGFiYXNlIiwianNvbkRhdGEiLCJhdXRoVHlwZSIsImRlZmF1bHRSZWdpb24iLCJvcmdJZCIsInBhc3N3b3JkIiwicmVhZE9ubHkiLCJ1c2VyIiwic2VjdXJlSnNvbkZpZWxkcyIsImluY2x1ZGUiLCJ1bmRlZmluZWQiLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJnZXREYXRhU291cmNlUGx1Z2lucyIsImRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJkYXRhU291cmNlSWQiXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewDataSourcePage"],{

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

/***/ "./public/app/features/datasources/NewDataSourcePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getNavModel": () => (/* binding */ getNavModel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _plugins_components_PluginsErrorsInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/components/PluginsErrorsInfo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2, _LinkButton, _PluginsErrorsInfo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function mapStateToProps(state) {
  return {
    navModel: getNavModel(),
    plugins: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getDataSourcePlugins)(state.dataSources),
    searchQuery: state.dataSources.dataSourceTypeSearchQuery,
    categories: state.dataSources.categories,
    isLoading: state.dataSources.isLoadingDataSources
  };
}

const mapDispatchToProps = {
  addDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_6__.addDataSource,
  loadDataSourcePlugins: _state_actions__WEBPACK_IMPORTED_MODULE_6__.loadDataSourcePlugins,
  setDataSourceTypeSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_8__.setDataSourceTypeSearchQuery
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);

class NewDataSourcePage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onDataSourceTypeClicked", plugin => {
      this.props.addDataSource(plugin);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setDataSourceTypeSearchQuery(value);
    });

    _defineProperty(this, "onLearnMoreClick", evt => {
      evt.stopPropagation();
    });
  }

  componentDidMount() {
    this.props.loadDataSourcePlugins();
  }

  renderPlugins(plugins, id) {
    if (!plugins || !plugins.length) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.List, {
      items: plugins,
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
          > li {
            margin-bottom: 2px;
          }
        `,
      getItemKey: item => item.id.toString(),
      renderItem: item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DataSourceTypeCard, {
        plugin: item,
        onClick: () => this.onDataSourceTypeClicked(item),
        onLearnMoreClick: this.onLearnMoreClick
      }),
      "aria-labelledby": id
    });
  }

  renderCategories() {
    const {
      categories
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "add-data-source-category",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "add-data-source-category__header",
          id: category.id,
          children: category.title
        }), this.renderPlugins(category.plugins, category.id)]
      }, category.id)), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "add-data-source-more",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          variant: "secondary",
          href: "https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",
          target: "_blank",
          rel: "noopener",
          children: "Find more data source plugins on grafana.com"
        })
      }))]
    });
  }

  render() {
    const {
      navModel,
      isLoading,
      searchQuery,
      plugins
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
        isLoading: isLoading,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
            value: searchQuery,
            onChange: this.onSearchQueryChange,
            placeholder: "Filter by name or type"
          }), _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
            href: "datasources",
            fill: "outline",
            variant: "secondary",
            icon: "arrow-left",
            children: "Cancel"
          }))]
        }), !searchQuery && (_PluginsErrorsInfo || (_PluginsErrorsInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_plugins_components_PluginsErrorsInfo__WEBPACK_IMPORTED_MODULE_9__.PluginsErrorsInfo, {}))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [searchQuery && this.renderPlugins(plugins), !searchQuery && this.renderCategories()]
        })]
      })
    });
  }

}

const DataSourceTypeCard = props => {
  var _plugin$info, _plugin$info$links;

  const {
    plugin,
    onLearnMoreClick
  } = props;
  const isPhantom = plugin.module === 'phantom';
  const onClick = !isPhantom && !plugin.unlicensed ? props.onClick : () => {}; // find first plugin info link

  const learnMoreLink = ((_plugin$info = plugin.info) === null || _plugin$info === void 0 ? void 0 : (_plugin$info$links = _plugin$info.links) === null || _plugin$info$links === void 0 ? void 0 : _plugin$info$links.length) > 0 ? plugin.info.links[0] : null;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.cx)(styles.card, 'card-parent'),
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
      className: styles.heading,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.AddDataSource.dataSourcePluginsV2(plugin.name),
      children: plugin.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Figure, {
      align: "center",
      className: styles.figure,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
        className: styles.logo,
        src: plugin.info.logos.small,
        alt: ""
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
      className: styles.description,
      children: plugin.info.description
    }), !isPhantom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
      className: styles.meta,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureBadge, {
        status: plugin.signature
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Actions, {
      className: styles.actions,
      children: learnMoreLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        variant: "secondary",
        href: `${learnMoreLink.url}?utm_source=grafana_add_ds`,
        target: "_blank",
        rel: "noopener",
        onClick: onLearnMoreClick,
        icon: "external-link-alt",
        "aria-label": `${plugin.name}, learn more.`,
        children: learnMoreLink.name
      })
    })]
  });
};

function getStyles(theme) {
  return {
    heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      fontSize: theme.v1.typography.heading.h5,
      fontWeight: 'inherit'
    }),
    figure: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      width: 'inherit',
      marginRight: '0px',
      '> img': {
        width: theme.spacing(7)
      }
    }),
    meta: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      marginTop: '6px',
      position: 'relative'
    }),
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      margin: '0px',
      fontSize: theme.typography.size.sm
    }),
    actions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      position: 'relative',
      alignSelf: 'center',
      marginTop: '0px',
      opacity: 0,
      '.card-parent:hover &, .card-parent:focus-within &': {
        opacity: 1
      }
    }),
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      gridTemplateAreas: `
      "Figure   Heading   Actions"
      "Figure Description Actions"
      "Figure    Meta     Actions"
      "Figure     -       Actions"`
    }),
    logo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      marginRight: theme.v1.spacing.lg,
      marginLeft: theme.v1.spacing.sm,
      width: theme.spacing(7),
      maxHeight: theme.spacing(7)
    })
  };
}

function getNavModel() {
  const main = {
    icon: 'database',
    id: 'datasource-new',
    text: 'Add data source',
    href: 'datasources/new',
    subTitle: 'Choose a data source type'
  };
  return {
    main: main,
    node: main
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewDataSourcePage));

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

/***/ "./public/app/features/plugins/components/PluginsErrorsInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginsErrorsInfo": () => (/* binding */ PluginsErrorsInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _admin_state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;









function PluginsErrorsInfo() {
  const errors = (0,_admin_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useGetErrors)();
  const {
    isLoading
  } = (0,_admin_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useFetchStatus)();
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)();

  if (isLoading || errors.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InfoBox, {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.PluginsList.signatureErrorNotice,
    severity: "warning",
    urlTitle: "Read more about plugin signing",
    url: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."
      })), "The following plugins are disabled and not shown in the list below:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.List, {
        items: errors,
        className: _emotion_css__WEBPACK_IMPORTED_MODULE_5__.css`
            list-style-type: circle;
          `,
        renderItem: error => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_5__.css`
                margin-top: ${theme.spacing.sm};
              `,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            spacing: "sm",
            justify: "flex-start",
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
              children: error.pluginId
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureBadge, {
              status: mapPluginErrorCodeToSignatureStatus(error.errorCode),
              className: _emotion_css__WEBPACK_IMPORTED_MODULE_5__.css`
                    margin-top: 0;
                  `
            })]
          })
        })
      })]
    })
  });
}

function mapPluginErrorCodeToSignatureStatus(code) {
  switch (code) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PluginErrorCode.invalidSignature:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureStatus.invalid;

    case _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PluginErrorCode.missingSignature:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureStatus.missing;

    case _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PluginErrorCode.modifiedSignature:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureStatus.modified;

    default:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureStatus.missing;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FLRSx3REFBQyx3REFBRDtBQUFpQixtQkFBTyxFQUFDLElBQXpCO0FBQThCLG1CQUFPLEVBQUMsWUFBdEM7QUFBbUQsaUJBQUssRUFBQyxRQUF6RDtBQUFBLG9DQUNFO0FBQUEsd0JBQVN5TyxLQUFLLENBQUM2QztBQUFmLGNBREYsZUFFRSx1REFBQyw2REFBRDtBQUNFLG9CQUFNLEVBQUVpQixtQ0FBbUMsQ0FBQzlELEtBQUssQ0FBQzhDLFNBQVAsQ0FEN0M7QUFFRSx1QkFBUyxFQUFFdlcsNkNBQUk7QUFDakM7QUFDQTtBQUpnQixjQUZGO0FBQUE7QUFMRjtBQU5KLFFBTkY7QUFBQTtBQU5GLElBREY7QUF1Q0Q7O0FBRUQsU0FBU3VYLG1DQUFULENBQTZDQyxJQUE3QyxFQUFvRTtBQUNsRSxVQUFRQSxJQUFSO0FBQ0UsU0FBS04sMkVBQUw7QUFDRSxhQUFPQyx3RUFBUDs7QUFDRixTQUFLRCwyRUFBTDtBQUNFLGFBQU9DLHdFQUFQOztBQUNGLFNBQUtELDRFQUFMO0FBQ0UsYUFBT0MseUVBQVA7O0FBQ0Y7QUFDRSxhQUFPQSx3RUFBUDtBQVJKO0FBVUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9OZXdEYXRhU291cmNlUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9idWlsZENhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vc3RhdGUvaG9va3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9zdGF0ZS9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9jb21wb25lbnRzL1BsdWdpbnNFcnJvcnNJbmZvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyaWFsKCkge1xuICBjb25zdCBleHBpcnkgPSBjb25maWcubGljZW5zZUluZm8/LnRyaWFsRXhwaXJ5O1xuICByZXR1cm4gISEoZXhwaXJ5ICYmIGV4cGlyeSA+IDApO1xufVxuXG5leHBvcnQgY29uc3QgaGlnaGxpZ2h0VHJpYWwgPSAoKSA9PiBpc1RyaWFsKCkgJiYgY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgR3JhZmFuYVRoZW1lMiwgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IENhcmQsIExpbmtCdXR0b24sIExpc3QsIFBsdWdpblNpZ25hdHVyZUJhZGdlLCBGaWx0ZXJJbnB1dCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5cbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgYWRkRGF0YVNvdXJjZSwgbG9hZERhdGFTb3VyY2VQbHVnaW5zIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2VQbHVnaW5zIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2V0RGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgUGx1Z2luc0Vycm9yc0luZm8gfSBmcm9tICcuLi9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luc0Vycm9yc0luZm8nO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoKSxcbiAgICBwbHVnaW5zOiBnZXREYXRhU291cmNlUGx1Z2lucyhzdGF0ZS5kYXRhU291cmNlcyksXG4gICAgc2VhcmNoUXVlcnk6IHN0YXRlLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnksXG4gICAgY2F0ZWdvcmllczogc3RhdGUuZGF0YVNvdXJjZXMuY2F0ZWdvcmllcyxcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmRhdGFTb3VyY2VzLmlzTG9hZGluZ0RhdGFTb3VyY2VzLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGFkZERhdGFTb3VyY2UsXG4gIGxvYWREYXRhU291cmNlUGx1Z2lucyxcbiAgc2V0RGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG50eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmNsYXNzIE5ld0RhdGFTb3VyY2VQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmxvYWREYXRhU291cmNlUGx1Z2lucygpO1xuICB9XG5cbiAgb25EYXRhU291cmNlVHlwZUNsaWNrZWQgPSAocGx1Z2luOiBEYXRhU291cmNlUGx1Z2luTWV0YSkgPT4ge1xuICAgIHRoaXMucHJvcHMuYWRkRGF0YVNvdXJjZShwbHVnaW4pO1xuICB9O1xuXG4gIG9uU2VhcmNoUXVlcnlDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0RGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSh2YWx1ZSk7XG4gIH07XG5cbiAgcmVuZGVyUGx1Z2lucyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdLCBpZD86IHN0cmluZykge1xuICAgIGlmICghcGx1Z2lucyB8fCAhcGx1Z2lucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdFxuICAgICAgICBpdGVtcz17cGx1Z2luc31cbiAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgPiBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICBnZXRJdGVtS2V5PXsoaXRlbSkgPT4gaXRlbS5pZC50b1N0cmluZygpfVxuICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuICAgICAgICAgIDxEYXRhU291cmNlVHlwZUNhcmRcbiAgICAgICAgICAgIHBsdWdpbj17aXRlbX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25EYXRhU291cmNlVHlwZUNsaWNrZWQoaXRlbSl9XG4gICAgICAgICAgICBvbkxlYXJuTW9yZUNsaWNrPXt0aGlzLm9uTGVhcm5Nb3JlQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtpZH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIG9uTGVhcm5Nb3JlQ2xpY2sgPSAoZXZ0OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgcmVuZGVyQ2F0ZWdvcmllcygpIHtcbiAgICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWRhdGEtc291cmNlLWNhdGVnb3J5XCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1kYXRhLXNvdXJjZS1jYXRlZ29yeV9faGVhZGVyXCIgaWQ9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAge2NhdGVnb3J5LnRpdGxlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJQbHVnaW5zKGNhdGVnb3J5LnBsdWdpbnMsIGNhdGVnb3J5LmlkKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWRhdGEtc291cmNlLW1vcmVcIj5cbiAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9wbHVnaW5zP3R5cGU9ZGF0YXNvdXJjZSZ1dG1fc291cmNlPWdyYWZhbmFfYWRkX2RzXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRmluZCBtb3JlIGRhdGEgc291cmNlIHBsdWdpbnMgb24gZ3JhZmFuYS5jb21cbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBpc0xvYWRpbmcsIHNlYXJjaFF1ZXJ5LCBwbHVnaW5zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgICAgPEZpbHRlcklucHV0IHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e3RoaXMub25TZWFyY2hRdWVyeUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJGaWx0ZXIgYnkgbmFtZSBvciB0eXBlXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyX19zcGFjZXJcIiAvPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj1cImRhdGFzb3VyY2VzXCIgZmlsbD1cIm91dGxpbmVcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWNvbj1cImFycm93LWxlZnRcIj5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyFzZWFyY2hRdWVyeSAmJiA8UGx1Z2luc0Vycm9yc0luZm8gLz59XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtzZWFyY2hRdWVyeSAmJiB0aGlzLnJlbmRlclBsdWdpbnMocGx1Z2lucyl9XG4gICAgICAgICAgICB7IXNlYXJjaFF1ZXJ5ICYmIHRoaXMucmVuZGVyQ2F0ZWdvcmllcygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgRGF0YVNvdXJjZVR5cGVDYXJkUHJvcHMge1xuICBwbHVnaW46IERhdGFTb3VyY2VQbHVnaW5NZXRhO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICBvbkxlYXJuTW9yZUNsaWNrOiAoZXZ0OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IERhdGFTb3VyY2VUeXBlQ2FyZDogRkM8RGF0YVNvdXJjZVR5cGVDYXJkUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGx1Z2luLCBvbkxlYXJuTW9yZUNsaWNrIH0gPSBwcm9wcztcbiAgY29uc3QgaXNQaGFudG9tID0gcGx1Z2luLm1vZHVsZSA9PT0gJ3BoYW50b20nO1xuICBjb25zdCBvbkNsaWNrID0gIWlzUGhhbnRvbSAmJiAhcGx1Z2luLnVubGljZW5zZWQgPyBwcm9wcy5vbkNsaWNrIDogKCkgPT4ge307XG4gIC8vIGZpbmQgZmlyc3QgcGx1Z2luIGluZm8gbGlua1xuICBjb25zdCBsZWFybk1vcmVMaW5rID0gcGx1Z2luLmluZm8/LmxpbmtzPy5sZW5ndGggPiAwID8gcGx1Z2luLmluZm8ubGlua3NbMF0gOiBudWxsO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y3goc3R5bGVzLmNhcmQsICdjYXJkLXBhcmVudCcpfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxDYXJkLkhlYWRpbmdcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLkFkZERhdGFTb3VyY2UuZGF0YVNvdXJjZVBsdWdpbnNWMihwbHVnaW4ubmFtZSl9XG4gICAgICA+XG4gICAgICAgIHtwbHVnaW4ubmFtZX1cbiAgICAgIDwvQ2FyZC5IZWFkaW5nPlxuICAgICAgPENhcmQuRmlndXJlIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmlndXJlfT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9e3BsdWdpbi5pbmZvLmxvZ29zLnNtYWxsfSBhbHQ9XCJcIiAvPlxuICAgICAgPC9DYXJkLkZpZ3VyZT5cbiAgICAgIDxDYXJkLkRlc2NyaXB0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57cGx1Z2luLmluZm8uZGVzY3JpcHRpb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgeyFpc1BoYW50b20gJiYgKFxuICAgICAgICA8Q2FyZC5NZXRhIGNsYXNzTmFtZT17c3R5bGVzLm1ldGF9PlxuICAgICAgICAgIDxQbHVnaW5TaWduYXR1cmVCYWRnZSBzdGF0dXM9e3BsdWdpbi5zaWduYXR1cmV9IC8+XG4gICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgKX1cbiAgICAgIDxDYXJkLkFjdGlvbnMgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XG4gICAgICAgIHtsZWFybk1vcmVMaW5rICYmIChcbiAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBocmVmPXtgJHtsZWFybk1vcmVMaW5rLnVybH0/dXRtX3NvdXJjZT1ncmFmYW5hX2FkZF9kc2B9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgICAgb25DbGljaz17b25MZWFybk1vcmVDbGlja31cbiAgICAgICAgICAgIGljb249XCJleHRlcm5hbC1saW5rLWFsdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgJHtwbHVnaW4ubmFtZX0sIGxlYXJuIG1vcmUuYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGVhcm5Nb3JlTGluay5uYW1lfVxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ2FyZC5BY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGhlYWRpbmc6IGNzcyh7XG4gICAgICBmb250U2l6ZTogdGhlbWUudjEudHlwb2dyYXBoeS5oZWFkaW5nLmg1LFxuICAgICAgZm9udFdlaWdodDogJ2luaGVyaXQnLFxuICAgIH0pLFxuICAgIGZpZ3VyZTogY3NzKHtcbiAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgICBtYXJnaW5SaWdodDogJzBweCcsXG4gICAgICAnPiBpbWcnOiB7XG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBtZXRhOiBjc3Moe1xuICAgICAgbWFyZ2luVG9wOiAnNnB4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH0pLFxuICAgIGRlc2NyaXB0aW9uOiBjc3Moe1xuICAgICAgbWFyZ2luOiAnMHB4JyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnNpemUuc20sXG4gICAgfSksXG4gICAgYWN0aW9uczogY3NzKHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblRvcDogJzBweCcsXG4gICAgICBvcGFjaXR5OiAwLFxuXG4gICAgICAnLmNhcmQtcGFyZW50OmhvdmVyICYsIC5jYXJkLXBhcmVudDpmb2N1cy13aXRoaW4gJic6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgY2FyZDogY3NzKHtcbiAgICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiBgXG4gICAgICBcIkZpZ3VyZSAgIEhlYWRpbmcgICBBY3Rpb25zXCJcbiAgICAgIFwiRmlndXJlIERlc2NyaXB0aW9uIEFjdGlvbnNcIlxuICAgICAgXCJGaWd1cmUgICAgTWV0YSAgICAgQWN0aW9uc1wiXG4gICAgICBcIkZpZ3VyZSAgICAgLSAgICAgICBBY3Rpb25zXCJgLFxuICAgIH0pLFxuICAgIGxvZ286IGNzcyh7XG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUudjEuc3BhY2luZy5sZyxcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnYxLnNwYWNpbmcuc20sXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICAgIG1heEhlaWdodDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICB9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdk1vZGVsKCk6IE5hdk1vZGVsIHtcbiAgY29uc3QgbWFpbiA9IHtcbiAgICBpY29uOiAnZGF0YWJhc2UnLFxuICAgIGlkOiAnZGF0YXNvdXJjZS1uZXcnLFxuICAgIHRleHQ6ICdBZGQgZGF0YSBzb3VyY2UnLFxuICAgIGhyZWY6ICdkYXRhc291cmNlcy9uZXcnLFxuICAgIHN1YlRpdGxlOiAnQ2hvb3NlIGEgZGF0YSBzb3VyY2UgdHlwZScsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtYWluOiBtYWluLFxuICAgIG5vZGU6IG1haW4sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihOZXdEYXRhU291cmNlUGFnZSk7XG4iLCJpbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBsb2NhdGlvblV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VXaXRoQmFja2VuZCwgZ2V0RGF0YVNvdXJjZVNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVOYXZJbmRleCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGdldERhdGFzb3VyY2VTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9kYXRhc291cmNlX3Nydic7XG5pbXBvcnQgeyBpbXBvcnREYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luX2xvYWRlcic7XG5pbXBvcnQgeyBnZXRQbHVnaW5TZXR0aW5ncyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpblNldHRpbmdzJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeSwgVGh1bmtEaXNwYXRjaCwgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBidWlsZENhdGVnb3JpZXMgfSBmcm9tICcuL2J1aWxkQ2F0ZWdvcmllcyc7XG5pbXBvcnQgeyBidWlsZE5hdk1vZGVsIH0gZnJvbSAnLi9uYXZNb2RlbCc7XG5pbXBvcnQge1xuICBkYXRhU291cmNlTG9hZGVkLFxuICBkYXRhU291cmNlTWV0YUxvYWRlZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkLFxuICBkYXRhU291cmNlUGx1Z2luc0xvYWRlZCxcbiAgZGF0YVNvdXJjZXNMb2FkZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQsXG4gIHRlc3REYXRhU291cmNlRmFpbGVkLFxuICB0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nLFxuICB0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCxcbn0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlLCBnZXREYXRhU291cmNlTWV0YSB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvYWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVR5cGVzTG9hZGVkUGF5bG9hZCB7XG4gIHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW107XG4gIGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyB7XG4gIGxvYWREYXRhU291cmNlOiB0eXBlb2YgbG9hZERhdGFTb3VyY2U7XG4gIGxvYWREYXRhU291cmNlTWV0YTogdHlwZW9mIGxvYWREYXRhU291cmNlTWV0YTtcbiAgZ2V0RGF0YVNvdXJjZTogdHlwZW9mIGdldERhdGFTb3VyY2U7XG4gIGdldERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZU1ldGE7XG4gIGltcG9ydERhdGFTb3VyY2VQbHVnaW46IHR5cGVvZiBpbXBvcnREYXRhU291cmNlUGx1Z2luO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzIHtcbiAgZ2V0RGF0YXNvdXJjZVNydjogdHlwZW9mIGdldERhdGFTb3VyY2VTcnY7XG4gIGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcGFnZUlkOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzID0ge1xuICAgIGxvYWREYXRhU291cmNlLFxuICAgIGxvYWREYXRhU291cmNlTWV0YSxcbiAgICBnZXREYXRhU291cmNlLFxuICAgIGdldERhdGFTb3VyY2VNZXRhLFxuICAgIGltcG9ydERhdGFTb3VyY2VQbHVnaW4sXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBpZiAoIXBhZ2VJZCkge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2FkZWREYXRhU291cmNlID0gYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlKHBhZ2VJZCkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlTWV0YShsb2FkZWREYXRhU291cmNlKSk7XG5cbiAgICAgIC8vIGhhdmUgd2UgYWxyZWFkeSBsb2FkZWQgdGhlIHBsdWdpbiB0aGVuIHdlIGNhbiBza2lwIHRoZSBzdGVwcyBiZWxvdz9cbiAgICAgIGlmIChnZXRTdGF0ZSgpLmRhdGFTb3VyY2VTZXR0aW5ncy5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2UoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgcGFnZUlkKTtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNZXRhID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2VNZXRhKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UhLnR5cGUpO1xuICAgICAgY29uc3QgaW1wb3J0ZWRQbHVnaW4gPSBhd2FpdCBkZXBlbmRlbmNpZXMuaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihkYXRhU291cmNlTWV0YSk7XG5cbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQoaW1wb3J0ZWRQbHVnaW4pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQoZXJyKSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3REYXRhU291cmNlID0gKFxuICBkYXRhU291cmNlTmFtZTogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzID0ge1xuICAgIGdldERhdGFzb3VyY2VTcnYsXG4gICAgZ2V0QmFja2VuZFNydixcbiAgfVxuKTogVGh1bmtSZXN1bHQ8dm9pZD4gPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRzQXBpID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldERhdGFzb3VyY2VTcnYoKS5nZXQoZGF0YVNvdXJjZU5hbWUpO1xuXG4gICAgaWYgKCFkc0FwaS50ZXN0RGF0YXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3RhcnRpbmcoKSk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLndpdGhOb0JhY2tlbmRDYWNoZShhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkc0FwaS50ZXN0RGF0YXNvdXJjZSgpO1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3VjY2VlZGVkKHJlc3VsdCkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzVGV4dCwgbWVzc2FnZTogZXJyTWVzc2FnZSwgZGV0YWlscywgZGF0YSB9ID0gZXJyO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJNZXNzYWdlIHx8IGRhdGE/Lm1lc3NhZ2UgfHwgJ0hUVFAgZXJyb3IgJyArIHN0YXR1c1RleHQ7XG5cbiAgICAgICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VGYWlsZWQoeyBtZXNzYWdlLCBkZXRhaWxzIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZXNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlKHVpZDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8UHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gYXdhaXQgZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCh1aWQpO1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZUxvYWRlZChkYXRhU291cmNlKSk7XG4gICAgcmV0dXJuIGRhdGFTb3VyY2U7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZU1ldGEoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcGx1Z2luSW5mbyA9IChhd2FpdCBnZXRQbHVnaW5TZXR0aW5ncyhkYXRhU291cmNlLnR5cGUpKSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbiAgICBjb25zdCBwbHVnaW4gPSBhd2FpdCBpbXBvcnREYXRhU291cmNlUGx1Z2luKHBsdWdpbkluZm8pO1xuICAgIGNvbnN0IGlzQmFja2VuZCA9IHBsdWdpbi5EYXRhU291cmNlQ2xhc3MucHJvdG90eXBlIGluc3RhbmNlb2YgRGF0YVNvdXJjZVdpdGhCYWNrZW5kO1xuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAuLi5wbHVnaW5JbmZvLFxuICAgICAgaXNCYWNrZW5kOiBwbHVnaW5JbmZvLmJhY2tlbmQgfHwgaXNCYWNrZW5kLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChkYXRhU291cmNlTWV0YUxvYWRlZChtZXRhKSk7XG5cbiAgICBwbHVnaW4ubWV0YSA9IG1ldGE7XG4gICAgZGlzcGF0Y2godXBkYXRlTmF2SW5kZXgoYnVpbGROYXZNb2RlbChkYXRhU291cmNlLCBwbHVnaW4pKSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0IGRhdGEgc291cmNlIGJ5IHVpZCBvciBpZCwgaWYgb2xkIGlkIGRldGVjdGVkIGhhbmRsZXMgcmVkaXJlY3RcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPERhdGFTb3VyY2VTZXR0aW5ncz4ge1xuICAvLyBUcnkgZmlyc3Qgd2l0aCB1aWQgYXBpXG4gIHRyeSB7XG4gICAgY29uc3QgYnlVaWQgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzL3VpZC8ke3VpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChieVVpZC5vaykge1xuICAgICAgcmV0dXJuIGJ5VWlkLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxvb2t1cCBkYXRhIHNvdXJjZSBieSB1aWQnLCBlcnIpO1xuICB9XG5cbiAgLy8gdHJ5IGxvb2t1cCBieSBvbGQgZGIgaWRcbiAgY29uc3QgaWQgPSB0eXBlb2YgdWlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHVpZCwgMTApIDogdWlkO1xuICBpZiAoIU51bWJlci5pc05hTihpZCkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8RGF0YVNvdXJjZVNldHRpbmdzPih7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogYC9hcGkvZGF0YXNvdXJjZXMvJHtpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIElmIHRoZSB1aWQgaXMgYSBudW1iZXIsIHRoZW4gdGhpcyBpcyBhIHJlZnJlc2ggb24gb25lIG9mIHRoZSBzZXR0aW5ncyB0YWJzXG4gICAgLy8gYW5kIHdlIGNhbiByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGFcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgdHlwZW9mIHVpZCA9PT0gJ251bWJlcicgJiYgcmVzcG9uc2UuZGF0YS5pZCA9PT0gdWlkKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICAvLyBOb3QgaWRlYWwgdG8gZG8gYSBmdWxsIHBhZ2UgcmVsb2FkIGhlcmUgYnV0IHNvIHRyaWNreSB0byBoYW5kbGUgdGhpc1xuICAgIC8vIG90aGVyd2lzZSBXZSBjYW4gdXBkYXRlIHRoZSBsb2NhdGlvbiB1c2luZyByZWFjdCByb3V0ZXIsIGJ1dCBuZWVkIHRvXG4gICAgLy8gZnVsbHkgcmVsb2FkIHRoZSByb3V0ZSBhcyB0aGUgbmF2IG1vZGVsIHBhZ2UgaW5kZXggaXMgbm90IG1hdGNoaW5nIHdpdGhcbiAgICAvLyB0aGUgdXJsIGluIHRoYXQgY2FzZS4gQW5kIHJlYWN0IHJvdXRlciBoYXMgbm8gd2F5IHRvIHVubW91bnQgcmVtb3VudCBhXG4gICAgLy8gcm91dGVcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2UuZGF0YS5pZC50b1N0cmluZygpID09PSB1aWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb25VdGlsLmFzc3VyZUJhc2VVcmwoYC9kYXRhc291cmNlcy9lZGl0LyR7cmVzcG9uc2UuZGF0YS51aWR9YCk7XG4gICAgICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzOyAvLyBhdm9pZHMgZmxhc2hpbmcgYW4gZXJyb3JcbiAgICB9XG4gIH1cblxuICB0aHJvdyBFcnJvcignQ291bGQgbm90IGZpbmQgZGF0YSBzb3VyY2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERhdGFTb3VyY2UocGx1Z2luOiBEYXRhU291cmNlUGx1Z2luTWV0YSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkRGF0YVNvdXJjZXMoKSk7XG5cbiAgICBjb25zdCBkYXRhU291cmNlcyA9IGdldFN0b3JlKCkuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZXM7XG5cbiAgICBjb25zdCBuZXdJbnN0YW5jZSA9IHtcbiAgICAgIG5hbWU6IHBsdWdpbi5uYW1lLFxuICAgICAgdHlwZTogcGx1Z2luLmlkLFxuICAgICAgYWNjZXNzOiAncHJveHknLFxuICAgICAgaXNEZWZhdWx0OiBkYXRhU291cmNlcy5sZW5ndGggPT09IDAsXG4gICAgfTtcblxuICAgIGlmIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpKSB7XG4gICAgICBuZXdJbnN0YW5jZS5uYW1lID0gZmluZE5ld05hbWUoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2RhdGFzb3VyY2VzJywgbmV3SW5zdGFuY2UpO1xuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcblxuICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcblxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3VsdC5kYXRhc291cmNlLnVpZH1gKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlUGx1Z2lucygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlUGx1Z2luc0xvYWQoKSk7XG4gICAgY29uc3QgcGx1Z2lucyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGx1Z2lucycsIHsgZW5hYmxlZDogMSwgdHlwZTogJ2RhdGFzb3VyY2UnIH0pO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBidWlsZENhdGVnb3JpZXMocGx1Z2lucyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQoeyBwbHVnaW5zLCBjYXRlZ29yaWVzIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURhdGFTb3VyY2UoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCwgZGF0YVNvdXJjZSk7IC8vIGJ5IFVJRCBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2gobG9hZERhdGFTb3VyY2UoZGF0YVNvdXJjZS51aWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURhdGFTb3VyY2UoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2U7XG5cbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL2RhdGFzb3VyY2VzLyR7ZGF0YVNvdXJjZS5pZH1gKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2RhdGFzb3VyY2VzJyk7XG4gIH07XG59XG5cbmludGVyZmFjZSBJdGVtV2l0aE5hbWUge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRXhpdHMoZGF0YVNvdXJjZXM6IEl0ZW1XaXRoTmFtZVtdLCBuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChcbiAgICBkYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2UpID0+IHtcbiAgICAgIHJldHVybiBkYXRhU291cmNlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIC8vIE5lZWQgdG8gbG9vcCB0aHJvdWdoIGN1cnJlbnQgZGF0YSBzb3VyY2VzIHRvIG1ha2Ugc3VyZVxuICAvLyB0aGUgbmFtZSBkb2Vzbid0IGV4aXN0XG4gIHdoaWxlIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5hbWUpKSB7XG4gICAgLy8gSWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZG9lc24ndCBlbmQgd2l0aCAnLXgnXG4gICAgLy8gd2UgY2FuIGFkZCAtMSB0byB0aGUgbmFtZSBhbmQgYmUgZG9uZS5cbiAgICBpZiAoIW5hbWVIYXNTdWZmaXgobmFtZSkpIHtcbiAgICAgIG5hbWUgPSBgJHtuYW1lfS0xYDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZW5kcyB3aXRoICcteCdcbiAgICAgIC8vIHdlIGNhbiB0cnkgdG8gaW5jcmVtZW50IHRoZSBsYXN0IGRpZ2l0IHVudGlsIHRoZSBuYW1lIGlzIHVuaXF1ZVxuXG4gICAgICAvLyByZW1vdmUgdGhlICd4JyBwYXJ0IGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIG5ldyBudW1iZXJcbiAgICAgIG5hbWUgPSBgJHtnZXROZXdOYW1lKG5hbWUpfSR7aW5jcmVtZW50TGFzdERpZ2l0KGdldExhc3REaWdpdChuYW1lKSl9YDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gbmFtZUhhc1N1ZmZpeChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuZW5kc1dpdGgoJy0nLCBuYW1lLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0RGlnaXQobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZUludChuYW1lLnNsaWNlKC0xKSwgMTApO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRMYXN0RGlnaXQoZGlnaXQ6IG51bWJlcikge1xuICByZXR1cm4gaXNOYU4oZGlnaXQpID8gMSA6IGRpZ2l0ICsgMTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSAxKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnkgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10pOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSB7XG4gIGNvbnN0IGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdID0gW1xuICAgIHsgaWQ6ICd0c2RiJywgdGl0bGU6ICdUaW1lIHNlcmllcyBkYXRhYmFzZXMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdsb2dnaW5nJywgdGl0bGU6ICdMb2dnaW5nICYgZG9jdW1lbnQgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAndHJhY2luZycsIHRpdGxlOiAnRGlzdHJpYnV0ZWQgdHJhY2luZycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3NxbCcsIHRpdGxlOiAnU1FMJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnY2xvdWQnLCB0aXRsZTogJ0Nsb3VkJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnZW50ZXJwcmlzZScsIHRpdGxlOiAnRW50ZXJwcmlzZSBwbHVnaW5zJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnaW90JywgdGl0bGU6ICdJbmR1c3RyaWFsICYgSW9UJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnb3RoZXInLCB0aXRsZTogJ090aGVycycsIHBsdWdpbnM6IFtdIH0sXG4gIF0uZmlsdGVyKChpdGVtKSA9PiBpdGVtKTtcblxuICBjb25zdCBjYXRlZ29yeUluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnk+ID0ge307XG4gIGNvbnN0IHBsdWdpbkluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luTWV0YT4gPSB7fTtcbiAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbnMgPSBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTtcblxuICAvLyBidWlsZCBpbmRpY2VzXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGNhdGVnb3J5SW5kZXhbY2F0ZWdvcnkuaWRdID0gY2F0ZWdvcnk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbiA9IGVudGVycHJpc2VQbHVnaW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5pZCk7XG4gICAgLy8gRm9yY2UgY2F0ZWdvcnkgZm9yIGVudGVycHJpc2UgcGx1Z2luc1xuICAgIGlmIChwbHVnaW4uZW50ZXJwcmlzZSB8fCBlbnRlcnByaXNlUGx1Z2luKSB7XG4gICAgICBwbHVnaW4uY2F0ZWdvcnkgPSAnZW50ZXJwcmlzZSc7XG4gICAgICBwbHVnaW4udW5saWNlbnNlZCA9ICFmZWF0dXJlRW5hYmxlZCgnZW50ZXJwcmlzZS5wbHVnaW5zJyk7XG4gICAgICBwbHVnaW4uaW5mby5saW5rcyA9IGVudGVycHJpc2VQbHVnaW4/LmluZm8/LmxpbmtzIHx8IHBsdWdpbi5pbmZvLmxpbmtzO1xuICAgIH1cblxuICAgIC8vIEZpeCBsaW5rIG5hbWVcbiAgICBpZiAocGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgIGZvciAoY29uc3QgbGluayBvZiBwbHVnaW4uaW5mby5saW5rcykge1xuICAgICAgICBsaW5rLm5hbWUgPSAnTGVhcm4gbW9yZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5jYXRlZ29yeSkgfHwgY2F0ZWdvcnlJbmRleFsnb3RoZXInXTtcbiAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAvLyBhZGQgdG8gcGx1Z2luIGluZGV4XG4gICAgcGx1Z2luSW5kZXhbcGx1Z2luLmlkXSA9IHBsdWdpbjtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpblxuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2Nsb3VkJykge1xuICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHBoYW50b20gcGx1Z2luc1xuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2VudGVycHJpc2UnKSB7XG4gICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBlbnRlcnByaXNlUGx1Z2lucykge1xuICAgICAgICBpZiAoIXBsdWdpbkluZGV4W3BsdWdpbi5pZF0pIHtcbiAgICAgICAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRQbHVnaW5zKGNhdGVnb3J5LnBsdWdpbnMpO1xuICB9XG5cbiAgLy8gT25seSBzaG93IGNhdGVnb3JpZXMgd2l0aCBwbHVnaW5zXG4gIHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYy5wbHVnaW5zLmxlbmd0aCA+IDApO1xufVxuXG5mdW5jdGlvbiBzb3J0UGx1Z2lucyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKSB7XG4gIGNvbnN0IHNvcnRpbmdSdWxlczogeyBbaWQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIHByb21ldGhldXM6IDEwMCxcbiAgICBncmFwaGl0ZTogOTUsXG4gICAgbG9raTogOTAsXG4gICAgbXlzcWw6IDgwLFxuICAgIGphZWdlcjogMTAwLFxuICAgIHBvc3RncmVzOiA3OSxcbiAgICBnY2xvdWQ6IC0xLFxuICB9O1xuXG4gIHBsdWdpbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFTb3J0ID0gc29ydGluZ1J1bGVzW2EuaWRdIHx8IDA7XG4gICAgY29uc3QgYlNvcnQgPSBzb3J0aW5nUnVsZXNbYi5pZF0gfHwgMDtcbiAgICBpZiAoYVNvcnQgPiBiU29ydCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYVNvcnQgPCBiU29ydCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IC0xIDogMTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucygpOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdIHtcbiAgcmV0dXJuIFtcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zcGx1bmstZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIFNwbHVuayBsb2dzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zcGx1bmtfbG9nb18xMjgucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1vcmFjbGUtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnT3JhY2xlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIE9yYWNsZSBTUUwnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL29yYWNsZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWR5bmF0cmFjZS1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdEeW5hdHJhY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgRHluYXRyYWNlIGRhdGEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2R5bmF0cmFjZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNlcnZpY2Vub3ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NlcnZpY2VOb3cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTZXJ2aWNlTm93JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zZXJ2aWNlbm93LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZGF0YWRvZy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGF0YURvZyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ0RhdGFEb2cnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2RhdGFkb2cucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1uZXdyZWxpYy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTmV3IFJlbGljIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTmV3IFJlbGljJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9uZXdyZWxpYy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW1vbmdvZGItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ01vbmdvREIgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdNb25nb0RCJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9tb25nb2RiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc25vd2ZsYWtlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTbm93Zmxha2UgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTbm93Zmxha2UnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3Nub3dmbGFrZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXdhdmVmcm9udC1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2F2ZWZyb250IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnV2F2ZWZyb250JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy93YXZlZnJvbnQuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZGxvcGVzNy1hcHBkeW5hbWljcy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwRHluYW1pY3MgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdBcHBEeW5hbWljcycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvYXBwZHluYW1pY3Muc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYXBoYW5hLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTQVAgSEFOQcKuIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU0FQIEhBTkHCricsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FwX2hhbmEucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1ob25leWNvbWItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hvbmV5Y29tYiBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSG9uZXljb21iJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9ob25leWNvbWIucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYWxlc2ZvcmNlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTYWxlc2ZvcmNlIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTYWxlc2ZvcmNlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zYWxlc2ZvcmNlLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtamlyYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSmlyYSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSmlyYScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvamlyYV9sb2dvLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZ2l0bGFiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdHaXRMYWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0dpdExhYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZ2l0bGFiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLW1vbml0b3JpbmctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NpZ25hbEZ4IGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTcGx1bmsgSW5mcmFzdHJ1Y3R1cmUgTW9uaXRvcmluZycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2lnbmFsZngtbG9nby5zdmcnLFxuICAgIH0pLFxuICBdO1xufVxuXG5mdW5jdGlvbiBnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogJ2djbG91ZCcsXG4gICAgbmFtZTogJ0dyYWZhbmEgQ2xvdWQnLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0hvc3RlZCBHcmFwaGl0ZSwgUHJvbWV0aGV1cywgYW5kIExva2knLFxuICAgICAgbG9nb3M6IHsgc21hbGw6ICdwdWJsaWMvaW1nL2dyYWZhbmFfaWNvbi5zdmcnLCBsYXJnZTogJ2FzZCcgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ3JhZmFuYS5jb20vcHJvZHVjdHMvY2xvdWQvJyxcbiAgICAgICAgICBuYW1lOiAnTGVhcm4gbW9yZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuXG5pbnRlcmZhY2UgR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltZ1VybDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQaGFudG9tUGx1Z2luKG9wdGlvbnM6IEdldFBoYW50b21QbHVnaW5PcHRpb25zKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiBvcHRpb25zLmlkLFxuICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBsb2dvczogeyBzbWFsbDogb3B0aW9ucy5pbWdVcmwsIGxhcmdlOiBvcHRpb25zLmltZ1VybCB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBjb25maWcucGx1Z2luQ2F0YWxvZ1VSTCArIG9wdGlvbnMuaWQsXG4gICAgICAgICAgbmFtZTogJ0luc3RhbGwgbm93JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlU2V0dGluZ3MsIFBsdWdpblR5cGUsIFBsdWdpbkluY2x1ZGUsIE5hdk1vZGVsLCBOYXZNb2RlbEl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IFByb0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1Byb0JhZGdlJztcbmltcG9ydCB7IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnLi4vc2V0dGluZ3MvUGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgaGlnaGxpZ2h0VHJpYWwgfSBmcm9tICcuLi8uLi9hZG1pbi91dGlscyc7XG5cbmNvbnN0IGxvYWRpbmdEU1R5cGUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncywgcGx1Z2luOiBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbik6IE5hdk1vZGVsSXRlbSB7XG4gIGNvbnN0IHBsdWdpbk1ldGEgPSBwbHVnaW4ubWV0YTtcbiAgY29uc3QgaGlnaGxpZ2h0c0VuYWJsZWQgPSBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4gIGNvbnN0IG5hdk1vZGVsOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaW1nOiBwbHVnaW5NZXRhLmluZm8ubG9nb3MubGFyZ2UsXG4gICAgaWQ6ICdkYXRhc291cmNlLScgKyBkYXRhU291cmNlLnVpZCxcbiAgICBzdWJUaXRsZTogYFR5cGU6ICR7cGx1Z2luTWV0YS5uYW1lfWAsXG4gICAgdXJsOiAnJyxcbiAgICB0ZXh0OiBkYXRhU291cmNlLm5hbWUsXG4gICAgYnJlYWRjcnVtYnM6IFt7IHRpdGxlOiAnRGF0YSBTb3VyY2VzJywgdXJsOiAnZGF0YXNvdXJjZXMnIH1dLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGljb246ICdzbGlkZXJzLXYtYWx0JyxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXNldHRpbmdzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgICAgdGV4dDogJ1NldHRpbmdzJyxcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9gLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGlmIChwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHRleHQ6IHBhZ2UudGl0bGUsXG4gICAgICAgIGljb246IHBhZ2UuaWNvbixcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS8/cGFnZT0ke3BhZ2UuaWR9YCxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXBhZ2UtJHtwYWdlLmlkfWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAocGx1Z2luTWV0YS5pbmNsdWRlcyAmJiBoYXNEYXNoYm9hcmRzKHBsdWdpbk1ldGEuaW5jbHVkZXMpICYmIGNvbnRleHRTcnYuaGFzUm9sZSgnQWRtaW4nKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBpY29uOiAnYXBwcycsXG4gICAgICBpZDogYGRhdGFzb3VyY2UtZGFzaGJvYXJkcy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICB0ZXh0OiAnRGFzaGJvYXJkcycsXG4gICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2Rhc2hib2FyZHNgLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaXNMb2FkaW5nTmF2ID0gZGF0YVNvdXJjZS50eXBlID09PSBsb2FkaW5nRFNUeXBlO1xuXG4gIGNvbnN0IHBlcm1pc3Npb25zRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1wZXJtaXNzaW9ucy1iYWRnZSc7XG4gIGNvbnN0IGRzUGVybWlzc2lvbnM6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdsb2NrJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtcGVybWlzc2lvbnMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdQZXJtaXNzaW9ucycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9wZXJtaXNzaW9uc2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGRzUGVybWlzc2lvbnMudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2RzcGVybWlzc2lvbnMnKSkge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCkpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGRzUGVybWlzc2lvbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uZHNQZXJtaXNzaW9ucyxcbiAgICAgIHVybDogZHNQZXJtaXNzaW9ucy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhbmFseXRpY3NFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLWluc2lnaHRzLWJhZGdlJztcbiAgY29uc3QgYW5hbHl0aWNzOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnaW5mby1jaXJjbGUnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1pbnNpZ2h0cy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0luc2lnaHRzJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2luc2lnaHRzYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgYW5hbHl0aWNzLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnYW5hbHl0aWNzJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChhbmFseXRpY3MpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5hbmFseXRpY3MsXG4gICAgICB1cmw6IGFuYWx5dGljcy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2FjaGluZ0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtcXVlcnktY2FjaGluZy1iYWRnZSc7XG5cbiAgY29uc3QgY2FjaGluZzogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2RhdGFiYXNlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtY2FjaGUtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdDYWNoZScsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9jYWNoZWAsXG4gICAgaGlkZUZyb21UYWJzOiAhcGx1Z2luTWV0YS5pc0JhY2tlbmQgfHwgIWNvbmZpZy5jYWNoaW5nLmVuYWJsZWQsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGNhY2hpbmcudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnY2FjaGluZycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goY2FjaGluZyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmNhY2hpbmcsXG4gICAgICB1cmw6IGNhY2hpbmcudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTmF2KG1haW46IE5hdk1vZGVsSXRlbSwgcGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgbGV0IG5vZGU6IE5hdk1vZGVsSXRlbSA9IHsgdGV4dDogJycgfTtcblxuICAvLyBmaW5kIGFjdGl2ZSBwYWdlXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgbWFpbi5jaGlsZHJlbiEpIHtcbiAgICBpZiAoY2hpbGQuaWQhLmluZGV4T2YocGFnZU5hbWUpID4gMCkge1xuICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbixcbiAgICBub2RlOiBub2RlISxcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTG9hZGluZ05hdihwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0gYnVpbGROYXZNb2RlbChcbiAgICB7XG4gICAgICBhY2Nlc3M6ICcnLFxuICAgICAgYmFzaWNBdXRoOiBmYWxzZSxcbiAgICAgIGJhc2ljQXV0aFVzZXI6ICcnLFxuICAgICAgYmFzaWNBdXRoUGFzc3dvcmQ6ICcnLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIGRhdGFiYXNlOiAnJyxcbiAgICAgIGlkOiAxLFxuICAgICAgdWlkOiAneCcsXG4gICAgICBpc0RlZmF1bHQ6IGZhbHNlLFxuICAgICAganNvbkRhdGE6IHsgYXV0aFR5cGU6ICdjcmVkZW50aWFscycsIGRlZmF1bHRSZWdpb246ICdldS13ZXN0LTInIH0sXG4gICAgICBuYW1lOiAnTG9hZGluZycsXG4gICAgICBvcmdJZDogMSxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHR5cGU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTmFtZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVMb2dvVXJsOiAncHVibGljL2ltZy9pY24tZGF0YXNvdXJjZS5zdmcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgc2VjdXJlSnNvbkZpZWxkczoge30sXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICBsaW5rczogW3sgbmFtZTogJycsIHVybDogJycgfV0sXG4gICAgICAgICAgbG9nb3M6IHtcbiAgICAgICAgICAgIGxhcmdlOiAnJyxcbiAgICAgICAgICAgIHNtYWxsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgICB2ZXJzaW9uOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZXM6IFtdLFxuICAgICAgICBtb2R1bGU6ICcnLFxuICAgICAgICBiYXNlVXJsOiAnJyxcbiAgICAgIH0sXG4gICAgfSBhcyBhbnlcbiAgKTtcblxuICByZXR1cm4gZ2V0RGF0YVNvdXJjZU5hdihtYWluLCBwYWdlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0Rhc2hib2FyZHMoaW5jbHVkZXM6IFBsdWdpbkluY2x1ZGVbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGluY2x1ZGVzLmZpbmQoKGluY2x1ZGUpID0+IHtcbiAgICAgIHJldHVybiBpbmNsdWRlLnR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICAgIH0pICE9PSB1bmRlZmluZWRcbiAgKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIFVybFF1ZXJ5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VzU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRhc291cmNlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlcyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5uYW1lKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UuZGF0YWJhc2UpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS50eXBlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVBsdWdpbnMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLmRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnBsdWdpbnMuZmlsdGVyKCh0eXBlOiBEYXRhU291cmNlUGx1Z2luTWV0YSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHR5cGUubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2UgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIGRhdGFTb3VyY2VJZDogVXJsUXVlcnlWYWx1ZSk6IERhdGFTb3VyY2VTZXR0aW5ncyA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlLnVpZCA9PT0gZGF0YVNvdXJjZUlkKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2U7XG4gIH1cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlTWV0YSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgdHlwZTogc3RyaW5nKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZU1ldGEuaWQgPT09IHR5cGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZU1ldGE7XG4gIH1cblxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzQ291bnQgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzQ291bnQ7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBQbHVnaW5FcnJvciB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2V0RGlzcGxheU1vZGUgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgZmV0Y2hBbGwsIGZldGNoRGV0YWlscywgZmV0Y2hSZW1vdGVQbHVnaW5zLCBpbnN0YWxsLCB1bmluc3RhbGwgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUsIFBsdWdpbkxpc3REaXNwbGF5TW9kZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIGZpbmQsXG4gIHNlbGVjdEFsbCxcbiAgc2VsZWN0QnlJZCxcbiAgc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyxcbiAgc2VsZWN0UmVxdWVzdEVycm9yLFxuICBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkLFxuICBzZWxlY3REaXNwbGF5TW9kZSxcbiAgc2VsZWN0UGx1Z2luRXJyb3JzLFxufSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzb3J0UGx1Z2lucywgU29ydGVycyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG50eXBlIEZpbHRlcnMgPSB7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xuICBmaWx0ZXJCeT86IHN0cmluZztcbiAgZmlsdGVyQnlUeXBlPzogc3RyaW5nO1xuICBzb3J0Qnk/OiBTb3J0ZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbFdpdGhGaWx0ZXJzID0gKHtcbiAgcXVlcnkgPSAnJyxcbiAgZmlsdGVyQnkgPSAnaW5zdGFsbGVkJyxcbiAgZmlsdGVyQnlUeXBlID0gJ2FsbCcsXG4gIHNvcnRCeSA9IFNvcnRlcnMubmFtZUFzYyxcbn06IEZpbHRlcnMpID0+IHtcbiAgdXNlRmV0Y2hBbGwoKTtcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZVNlbGVjdG9yKGZpbmQocXVlcnksIGZpbHRlckJ5LCBmaWx0ZXJCeVR5cGUpKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaFN0YXR1cygpO1xuICBjb25zdCBzb3J0ZWRBbmRGaWx0ZXJlZCA9IHNvcnRQbHVnaW5zKGZpbHRlcmVkLCBzb3J0QnkpO1xuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIHBsdWdpbnM6IHNvcnRlZEFuZEZpbHRlcmVkLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbCA9ICgpOiBDYXRhbG9nUGx1Z2luW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RBbGwpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldFNpbmdsZSA9IChpZDogc3RyaW5nKTogQ2F0YWxvZ1BsdWdpbiB8IHVuZGVmaW5lZCA9PiB7XG4gIHVzZUZldGNoQWxsKCk7XG4gIHVzZUZldGNoRGV0YWlscyhpZCk7XG5cbiAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUpID0+IHNlbGVjdEJ5SWQoc3RhdGUsIGlkKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0RXJyb3JzID0gKCk6IFBsdWdpbkVycm9yW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RQbHVnaW5FcnJvcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuIChpZDogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nLCBpc1VwZGF0aW5nPzogYm9vbGVhbikgPT4gZGlzcGF0Y2goaW5zdGFsbCh7IGlkLCB2ZXJzaW9uLCBpc1VwZGF0aW5nIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVbmluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICByZXR1cm4gKGlkOiBzdHJpbmcpID0+IGRpc3BhdGNoKHVuaW5zdGFsbChpZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hSZW1vdGVQbHVnaW5zLnR5cGVQcmVmaXgpKTtcbiAgcmV0dXJuIGVycm9yID09PSBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoQWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hBbGwudHlwZVByZWZpeCkpO1xuXG4gIHJldHVybiB7IGlzTG9hZGluZywgZXJyb3IgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VGZXRjaERldGFpbHNTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcblxuICByZXR1cm4geyBpc0xvYWRpbmcsIGVycm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNJbnN0YWxsaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyhpbnN0YWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNJbnN0YWxsaW5nLCBlcnJvciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVVuaW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNVbmluc3RhbGxpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNVbmluc3RhbGxpbmcsIGVycm9yIH07XG59O1xuXG4vLyBPbmx5IGZldGNoZXMgaW4gY2FzZSB0aGV5IHdlcmUgbm90IGZldGNoZWQgeWV0XG5leHBvcnQgY29uc3QgdXNlRmV0Y2hBbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNOb3RGZXRjaGVkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZChmZXRjaEFsbC50eXBlUHJlZml4KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc05vdEZldGNoZWQgJiYgZGlzcGF0Y2goZmV0Y2hBbGwoKSk7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoRGV0YWlscyA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcGx1Z2luID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc2VsZWN0QnlJZChzdGF0ZSwgaWQpKTtcbiAgY29uc3QgaXNOb3RGZXRjaGluZyA9ICF1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoRGV0YWlscy50eXBlUHJlZml4KSk7XG4gIGNvbnN0IHNob3VsZEZldGNoID0gaXNOb3RGZXRjaGluZyAmJiBwbHVnaW4gJiYgIXBsdWdpbi5kZXRhaWxzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvdWxkRmV0Y2ggJiYgZGlzcGF0Y2goZmV0Y2hEZXRhaWxzKGlkKSk7XG4gIH0sIFtwbHVnaW5dKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZURpc3BsYXlNb2RlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGRpc3BsYXlNb2RlID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGlzcGxheU1vZGUpO1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheU1vZGUsXG4gICAgc2V0RGlzcGxheU1vZGU6ICh2OiBQbHVnaW5MaXN0RGlzcGxheU1vZGUpID0+IGRpc3BhdGNoKHNldERpc3BsYXlNb2RlKHYpKSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgUGx1Z2luRXJyb3IsIFBsdWdpbkVycm9yQ29kZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUmVxdWVzdFN0YXR1cywgUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBwbHVnaW5zQWRhcHRlciB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSb290ID0gKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc3RhdGUucGx1Z2lucztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Um9vdCwgKHsgaXRlbXMgfSkgPT4gaXRlbXMpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlzcGxheU1vZGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyBzZXR0aW5ncyB9KSA9PiBzZXR0aW5ncy5kaXNwbGF5TW9kZSk7XG5cbmV4cG9ydCBjb25zdCB7IHNlbGVjdEFsbCwgc2VsZWN0QnlJZCB9ID0gcGx1Z2luc0FkYXB0ZXIuZ2V0U2VsZWN0b3JzKHNlbGVjdEl0ZW1zKTtcblxuY29uc3Qgc2VsZWN0SW5zdGFsbGVkID0gKGZpbHRlckJ5OiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEFsbCwgKHBsdWdpbnMpID0+XG4gICAgcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gKGZpbHRlckJ5ID09PSAnaW5zdGFsbGVkJyA/IHBsdWdpbi5pc0luc3RhbGxlZCA6ICFwbHVnaW4uaXNDb3JlKSlcbiAgKTtcblxuY29uc3QgZmluZEJ5SW5zdGFsbEFuZFR5cGUgPSAoZmlsdGVyQnk6IHN0cmluZywgZmlsdGVyQnlUeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEluc3RhbGxlZChmaWx0ZXJCeSksIChwbHVnaW5zKSA9PlxuICAgIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IGZpbHRlckJ5VHlwZSA9PT0gJ2FsbCcgfHwgcGx1Z2luLnR5cGUgPT09IGZpbHRlckJ5VHlwZSlcbiAgKTtcblxuY29uc3QgZmluZEJ5S2V5d29yZCA9IChzZWFyY2hCeTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RBbGwsIChwbHVnaW5zKSA9PiB7XG4gICAgaWYgKHNlYXJjaEJ5ID09PSAnJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IFN0cmluZ1tdID0gW107XG4gICAgICBpZiAocGx1Z2luLm5hbWUpIHtcbiAgICAgICAgZmllbGRzLnB1c2gocGx1Z2luLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbHVnaW4ub3JnTmFtZSkge1xuICAgICAgICBmaWVsZHMucHVzaChwbHVnaW4ub3JnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkcy5zb21lKChmKSA9PiBmLmluY2x1ZGVzKHNlYXJjaEJ5LnRvTG93ZXJDYXNlKCkpKTtcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gKHNlYXJjaEJ5OiBzdHJpbmcsIGZpbHRlckJ5OiBzdHJpbmcsIGZpbHRlckJ5VHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBmaW5kQnlJbnN0YWxsQW5kVHlwZShmaWx0ZXJCeSwgZmlsdGVyQnlUeXBlKSxcbiAgICBmaW5kQnlLZXl3b3JkKHNlYXJjaEJ5KSxcbiAgICAoZmlsdGVyZWRQbHVnaW5zLCBzZWFyY2hlZFBsdWdpbnMpID0+IHtcbiAgICAgIHJldHVybiBzZWFyY2hCeSA9PT0gJycgPyBmaWx0ZXJlZFBsdWdpbnMgOiBzZWFyY2hlZFBsdWdpbnM7XG4gICAgfVxuICApO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UGx1Z2luRXJyb3JzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QWxsLCAocGx1Z2lucykgPT5cbiAgcGx1Z2luc1xuICAgID8gcGx1Z2luc1xuICAgICAgICAuZmlsdGVyKChwKSA9PiBCb29sZWFuKHAuZXJyb3IpKVxuICAgICAgICAubWFwKFxuICAgICAgICAgIChwKTogUGx1Z2luRXJyb3IgPT4gKHtcbiAgICAgICAgICAgIHBsdWdpbklkOiBwLmlkLFxuICAgICAgICAgICAgZXJyb3JDb2RlOiBwIS5lcnJvciBhcyBQbHVnaW5FcnJvckNvZGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIDogW11cbik7XG5cbi8vIFRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIGFyZSB1c2VkIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgb3V0c3RhbmRpbmcgb3IgY29tcGxldGVkIHBsdWdpbnMtcmVsYXRlZCBuZXR3b3JrIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlcXVlc3QgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyByZXF1ZXN0cyA9IHt9IH0pID0+IHJlcXVlc3RzW2FjdGlvblR5cGVdKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzUmVxdWVzdFBlbmRpbmcgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSZXF1ZXN0KGFjdGlvblR5cGUpLCAocmVxdWVzdCkgPT4gcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlBlbmRpbmcpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVxdWVzdEVycm9yID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+XG4gICAgcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlJlamVjdGVkID8gcmVxdWVzdD8uZXJyb3IgOiBudWxsXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+IHJlcXVlc3QgPT09IHVuZGVmaW5lZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIEluZm9Cb3gsIExpc3QsIFBsdWdpblNpZ25hdHVyZUJhZGdlLCB1c2VUaGVtZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZUdldEVycm9ycywgdXNlRmV0Y2hTdGF0dXMgfSBmcm9tICcuLi9hZG1pbi9zdGF0ZS9ob29rcyc7XG5pbXBvcnQgeyBQbHVnaW5FcnJvckNvZGUsIFBsdWdpblNpZ25hdHVyZVN0YXR1cyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbnNFcnJvcnNJbmZvKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBlcnJvcnMgPSB1c2VHZXRFcnJvcnMoKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHVzZUZldGNoU3RhdHVzKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBpZiAoaXNMb2FkaW5nIHx8IGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEluZm9Cb3hcbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbHVnaW5zTGlzdC5zaWduYXR1cmVFcnJvck5vdGljZX1cbiAgICAgIHNldmVyaXR5PVwid2FybmluZ1wiXG4gICAgICB1cmxUaXRsZT1cIlJlYWQgbW9yZSBhYm91dCBwbHVnaW4gc2lnbmluZ1wiXG4gICAgICB1cmw9XCJodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9sYXRlc3QvcGx1Z2lucy9wbHVnaW4tc2lnbmF0dXJlcy9cIlxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFVuc2lnbmVkIHBsdWdpbnMgd2VyZSBmb3VuZCBkdXJpbmcgcGx1Z2luIGluaXRpYWxpemF0aW9uLiBHcmFmYW5hIExhYnMgY2Fubm90IGd1YXJhbnRlZSB0aGUgaW50ZWdyaXR5IG9mIHRoZXNlXG4gICAgICAgICAgcGx1Z2lucy4gV2UgcmVjb21tZW5kIG9ubHkgdXNpbmcgc2lnbmVkIHBsdWdpbnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgVGhlIGZvbGxvd2luZyBwbHVnaW5zIGFyZSBkaXNhYmxlZCBhbmQgbm90IHNob3duIGluIHRoZSBsaXN0IGJlbG93OlxuICAgICAgICA8TGlzdFxuICAgICAgICAgIGl0ZW1zPXtlcnJvcnN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgICAgICAgICBgfVxuICAgICAgICAgIHJlbmRlckl0ZW09eyhlcnJvcikgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIHNwYWNpbmc9XCJzbVwiIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPntlcnJvci5wbHVnaW5JZH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8UGx1Z2luU2lnbmF0dXJlQmFkZ2VcbiAgICAgICAgICAgICAgICAgIHN0YXR1cz17bWFwUGx1Z2luRXJyb3JDb2RlVG9TaWduYXR1cmVTdGF0dXMoZXJyb3IuZXJyb3JDb2RlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0luZm9Cb3g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIG1hcFBsdWdpbkVycm9yQ29kZVRvU2lnbmF0dXJlU3RhdHVzKGNvZGU6IFBsdWdpbkVycm9yQ29kZSkge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5pbnZhbGlkU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuIFBsdWdpblNpZ25hdHVyZVN0YXR1cy5pbnZhbGlkO1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1pc3NpbmdTaWduYXR1cmU6XG4gICAgICByZXR1cm4gUGx1Z2luU2lnbmF0dXJlU3RhdHVzLm1pc3Npbmc7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubW9kaWZpZWRTaWduYXR1cmU6XG4gICAgICByZXR1cm4gUGx1Z2luU2lnbmF0dXJlU3RhdHVzLm1vZGlmaWVkO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gUGx1Z2luU2lnbmF0dXJlU3RhdHVzLm1pc3Npbmc7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb25maWciLCJpc1RyaWFsIiwiZXhwaXJ5IiwibGljZW5zZUluZm8iLCJ0cmlhbEV4cGlyeSIsImhpZ2hsaWdodFRyaWFsIiwiZmVhdHVyZVRvZ2dsZXMiLCJmZWF0dXJlSGlnaGxpZ2h0cyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJDYXJkIiwiTGlua0J1dHRvbiIsIkxpc3QiLCJQbHVnaW5TaWduYXR1cmVCYWRnZSIsIkZpbHRlcklucHV0IiwidXNlU3R5bGVzMiIsImNzcyIsImN4Iiwic2VsZWN0b3JzIiwiUGFnZSIsImFkZERhdGFTb3VyY2UiLCJsb2FkRGF0YVNvdXJjZVBsdWdpbnMiLCJnZXREYXRhU291cmNlUGx1Z2lucyIsInNldERhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJQbHVnaW5zRXJyb3JzSW5mbyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJnZXROYXZNb2RlbCIsInBsdWdpbnMiLCJkYXRhU291cmNlcyIsInNlYXJjaFF1ZXJ5IiwiZGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSIsImNhdGVnb3JpZXMiLCJpc0xvYWRpbmciLCJpc0xvYWRpbmdEYXRhU291cmNlcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIk5ld0RhdGFTb3VyY2VQYWdlIiwicGx1Z2luIiwicHJvcHMiLCJ2YWx1ZSIsImV2dCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyUGx1Z2lucyIsImlkIiwibGVuZ3RoIiwiaXRlbSIsInRvU3RyaW5nIiwib25EYXRhU291cmNlVHlwZUNsaWNrZWQiLCJvbkxlYXJuTW9yZUNsaWNrIiwicmVuZGVyQ2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwidGl0bGUiLCJyZW5kZXIiLCJvblNlYXJjaFF1ZXJ5Q2hhbmdlIiwiRGF0YVNvdXJjZVR5cGVDYXJkIiwiaXNQaGFudG9tIiwibW9kdWxlIiwib25DbGljayIsInVubGljZW5zZWQiLCJsZWFybk1vcmVMaW5rIiwiaW5mbyIsImxpbmtzIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiY2FyZCIsImhlYWRpbmciLCJwYWdlcyIsIkFkZERhdGFTb3VyY2UiLCJkYXRhU291cmNlUGx1Z2luc1YyIiwibmFtZSIsImZpZ3VyZSIsImxvZ28iLCJsb2dvcyIsInNtYWxsIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic2lnbmF0dXJlIiwiYWN0aW9ucyIsInVybCIsInRoZW1lIiwiZm9udFNpemUiLCJ2MSIsInR5cG9ncmFwaHkiLCJoNSIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsIm1hcmdpblRvcCIsInBvc2l0aW9uIiwibWFyZ2luIiwic2l6ZSIsInNtIiwiYWxpZ25TZWxmIiwib3BhY2l0eSIsImdyaWRUZW1wbGF0ZUFyZWFzIiwibGciLCJtYXJnaW5MZWZ0IiwibWF4SGVpZ2h0IiwibWFpbiIsImljb24iLCJ0ZXh0IiwiaHJlZiIsInN1YlRpdGxlIiwibm9kZSIsImxhc3RWYWx1ZUZyb20iLCJsb2NhdGlvblV0aWwiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJsb2NhdGlvblNlcnZpY2UiLCJ1cGRhdGVOYXZJbmRleCIsImdldEJhY2tlbmRTcnYiLCJnZXREYXRhc291cmNlU3J2IiwiaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiIsImdldFBsdWdpblNldHRpbmdzIiwiYnVpbGRDYXRlZ29yaWVzIiwiYnVpbGROYXZNb2RlbCIsImRhdGFTb3VyY2VMb2FkZWQiLCJkYXRhU291cmNlTWV0YUxvYWRlZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkIiwiZGF0YVNvdXJjZXNMb2FkZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZCIsInRlc3REYXRhU291cmNlRmFpbGVkIiwidGVzdERhdGFTb3VyY2VTdGFydGluZyIsInRlc3REYXRhU291cmNlU3VjY2VlZGVkIiwiZ2V0RGF0YVNvdXJjZSIsImdldERhdGFTb3VyY2VNZXRhIiwiYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0iLCJjb250ZXh0U3J2IiwiaW5pdERhdGFTb3VyY2VTZXR0aW5ncyIsInBhZ2VJZCIsImRlcGVuZGVuY2llcyIsImxvYWREYXRhU291cmNlIiwibG9hZERhdGFTb3VyY2VNZXRhIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIkVycm9yIiwibG9hZGVkRGF0YVNvdXJjZSIsImRhdGFTb3VyY2VTZXR0aW5ncyIsImRhdGFTb3VyY2UiLCJkYXRhU291cmNlTWV0YSIsInR5cGUiLCJpbXBvcnRlZFBsdWdpbiIsImVyciIsInRlc3REYXRhU291cmNlIiwiZGF0YVNvdXJjZU5hbWUiLCJkc0FwaSIsImdldCIsInRlc3REYXRhc291cmNlIiwid2l0aE5vQmFja2VuZENhY2hlIiwicmVzdWx0Iiwic3RhdHVzVGV4dCIsIm1lc3NhZ2UiLCJlcnJNZXNzYWdlIiwiZGV0YWlscyIsImRhdGEiLCJsb2FkRGF0YVNvdXJjZXMiLCJyZXNwb25zZSIsInVpZCIsImdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQiLCJwbHVnaW5JbmZvIiwiaXNCYWNrZW5kIiwiRGF0YVNvdXJjZUNsYXNzIiwicHJvdG90eXBlIiwiYmFja2VuZCIsImJ5VWlkIiwiZmV0Y2giLCJtZXRob2QiLCJwYXJhbXMiLCJzaG93RXJyb3JBbGVydCIsIm9rIiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc3VyZUJhc2VVcmwiLCJnZXRTdG9yZSIsIm5ld0luc3RhbmNlIiwiYWNjZXNzIiwiaXNEZWZhdWx0IiwibmFtZUV4aXRzIiwiZmluZE5ld05hbWUiLCJwb3N0IiwicmVsb2FkIiwiZmV0Y2hVc2VyUGVybWlzc2lvbnMiLCJwdXNoIiwiZGF0YXNvdXJjZSIsImVuYWJsZWQiLCJ1cGRhdGVEYXRhU291cmNlIiwicHV0IiwiZGVsZXRlRGF0YVNvdXJjZSIsImRlbGV0ZSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwibmFtZUhhc1N1ZmZpeCIsImdldE5ld05hbWUiLCJpbmNyZW1lbnRMYXN0RGlnaXQiLCJnZXRMYXN0RGlnaXQiLCJlbmRzV2l0aCIsInNsaWNlIiwiZGlnaXQiLCJQbHVnaW5UeXBlIiwiZmVhdHVyZUVuYWJsZWQiLCJjYXRlZ29yeUluZGV4IiwicGx1Z2luSW5kZXgiLCJlbnRlcnByaXNlUGx1Z2lucyIsImdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucyIsImVudGVycHJpc2VQbHVnaW4iLCJmaW5kIiwiZW50ZXJwcmlzZSIsImxpbmsiLCJnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luIiwic29ydFBsdWdpbnMiLCJjIiwic29ydGluZ1J1bGVzIiwicHJvbWV0aGV1cyIsImdyYXBoaXRlIiwibG9raSIsIm15c3FsIiwiamFlZ2VyIiwicG9zdGdyZXMiLCJnY2xvdWQiLCJzb3J0IiwiYSIsImIiLCJhU29ydCIsImJTb3J0IiwiZ2V0UGhhbnRvbVBsdWdpbiIsImltZ1VybCIsImJhc2VVcmwiLCJsYXJnZSIsImF1dGhvciIsInNjcmVlbnNob3RzIiwidXBkYXRlZCIsInZlcnNpb24iLCJvcHRpb25zIiwicGx1Z2luQ2F0YWxvZ1VSTCIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJQcm9CYWRnZSIsImxvYWRpbmdEU1R5cGUiLCJwbHVnaW5NZXRhIiwiaGlnaGxpZ2h0c0VuYWJsZWQiLCJpbWciLCJicmVhZGNydW1icyIsImNoaWxkcmVuIiwiYWN0aXZlIiwiY29uZmlnUGFnZXMiLCJwYWdlIiwiaW5jbHVkZXMiLCJoYXNEYXNoYm9hcmRzIiwiaGFzUm9sZSIsImlzTG9hZGluZ05hdiIsInBlcm1pc3Npb25zRXhwZXJpbWVudElkIiwiZHNQZXJtaXNzaW9ucyIsInRhYlN1ZmZpeCIsImV4cGVyaW1lbnRJZCIsImV2ZW50VmFyaWFudCIsImhhc1Blcm1pc3Npb24iLCJEYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCIsImFuYWx5dGljc0V4cGVyaW1lbnRJZCIsImFuYWx5dGljcyIsImNhY2hpbmdFeHBlcmltZW50SWQiLCJjYWNoaW5nIiwiaGlkZUZyb21UYWJzIiwiZ2V0RGF0YVNvdXJjZU5hdiIsInBhZ2VOYW1lIiwiY2hpbGQiLCJpbmRleE9mIiwiZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYiLCJiYXNpY0F1dGgiLCJiYXNpY0F1dGhVc2VyIiwiYmFzaWNBdXRoUGFzc3dvcmQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhYmFzZSIsImpzb25EYXRhIiwiYXV0aFR5cGUiLCJkZWZhdWx0UmVnaW9uIiwib3JnSWQiLCJwYXNzd29yZCIsInJlYWRPbmx5IiwidHlwZU5hbWUiLCJ0eXBlTG9nb1VybCIsInVzZXIiLCJzZWN1cmVKc29uRmllbGRzIiwiaW5jbHVkZSIsInVuZGVmaW5lZCIsImdldERhdGFTb3VyY2VzIiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiZGF0YVNvdXJjZUlkIiwiZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSIsImdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSIsImxheW91dE1vZGUiLCJnZXREYXRhU291cmNlc0NvdW50IiwiZGF0YVNvdXJjZXNDb3VudCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXREaXNwbGF5TW9kZSIsImZldGNoQWxsIiwiZmV0Y2hEZXRhaWxzIiwiZmV0Y2hSZW1vdGVQbHVnaW5zIiwiaW5zdGFsbCIsInVuaW5zdGFsbCIsInNlbGVjdEFsbCIsInNlbGVjdEJ5SWQiLCJzZWxlY3RJc1JlcXVlc3RQZW5kaW5nIiwic2VsZWN0UmVxdWVzdEVycm9yIiwic2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZCIsInNlbGVjdERpc3BsYXlNb2RlIiwic2VsZWN0UGx1Z2luRXJyb3JzIiwiU29ydGVycyIsInVzZUdldEFsbFdpdGhGaWx0ZXJzIiwicXVlcnkiLCJmaWx0ZXJCeSIsImZpbHRlckJ5VHlwZSIsInNvcnRCeSIsIm5hbWVBc2MiLCJ1c2VGZXRjaEFsbCIsImZpbHRlcmVkIiwiZXJyb3IiLCJ1c2VGZXRjaFN0YXR1cyIsInNvcnRlZEFuZEZpbHRlcmVkIiwidXNlR2V0QWxsIiwidXNlR2V0U2luZ2xlIiwidXNlRmV0Y2hEZXRhaWxzIiwidXNlR2V0RXJyb3JzIiwidXNlSW5zdGFsbCIsImlzVXBkYXRpbmciLCJ1c2VVbmluc3RhbGwiLCJ1c2VJc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUiLCJ0eXBlUHJlZml4IiwidXNlRmV0Y2hEZXRhaWxzU3RhdHVzIiwidXNlSW5zdGFsbFN0YXR1cyIsImlzSW5zdGFsbGluZyIsInVzZVVuaW5zdGFsbFN0YXR1cyIsImlzVW5pbnN0YWxsaW5nIiwiaXNOb3RGZXRjaGVkIiwiaXNOb3RGZXRjaGluZyIsInNob3VsZEZldGNoIiwidXNlRGlzcGxheU1vZGUiLCJkaXNwbGF5TW9kZSIsInYiLCJjcmVhdGVTZWxlY3RvciIsIlJlcXVlc3RTdGF0dXMiLCJwbHVnaW5zQWRhcHRlciIsInNlbGVjdFJvb3QiLCJzZWxlY3RJdGVtcyIsIml0ZW1zIiwic2V0dGluZ3MiLCJnZXRTZWxlY3RvcnMiLCJzZWxlY3RJbnN0YWxsZWQiLCJpc0luc3RhbGxlZCIsImlzQ29yZSIsImZpbmRCeUluc3RhbGxBbmRUeXBlIiwiZmluZEJ5S2V5d29yZCIsInNlYXJjaEJ5IiwiZmllbGRzIiwib3JnTmFtZSIsInNvbWUiLCJmIiwiZmlsdGVyZWRQbHVnaW5zIiwic2VhcmNoZWRQbHVnaW5zIiwicCIsIkJvb2xlYW4iLCJwbHVnaW5JZCIsImVycm9yQ29kZSIsInNlbGVjdFJlcXVlc3QiLCJhY3Rpb25UeXBlIiwicmVxdWVzdHMiLCJyZXF1ZXN0Iiwic3RhdHVzIiwiUGVuZGluZyIsIlJlamVjdGVkIiwiSG9yaXpvbnRhbEdyb3VwIiwiSW5mb0JveCIsInVzZVRoZW1lIiwiUGx1Z2luRXJyb3JDb2RlIiwiUGx1Z2luU2lnbmF0dXJlU3RhdHVzIiwiZXJyb3JzIiwiUGx1Z2luc0xpc3QiLCJzaWduYXR1cmVFcnJvck5vdGljZSIsIm1hcFBsdWdpbkVycm9yQ29kZVRvU2lnbmF0dXJlU3RhdHVzIiwiY29kZSIsImludmFsaWRTaWduYXR1cmUiLCJpbnZhbGlkIiwibWlzc2luZ1NpZ25hdHVyZSIsIm1pc3NpbmciLCJtb2RpZmllZFNpZ25hdHVyZSIsIm1vZGlmaWVkIl0sInNvdXJjZVJvb3QiOiIifQ==
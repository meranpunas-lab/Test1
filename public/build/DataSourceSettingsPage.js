"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DataSourceSettingsPage"],{

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

/***/ "./public/app/features/datasources/settings/BasicSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel;






const {
  Input,
  Switch
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LegacyForms;

const BasicSettings = ({
  dataSourceName,
  isDefault,
  onDefaultChange,
  onNameChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "gf-form-group",
    "aria-label": "Datasource settings page basic settings",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gf-form-inline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "gf-form max-width-30",
        style: {
          marginRight: '3px'
        },
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
          tooltip: 'The name is used when you select the data source in panels. The default data source is ' + 'preselected in new panels.',
          children: "Name"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Input, {
          className: "gf-form-input max-width-23",
          type: "text",
          value: dataSourceName,
          placeholder: "Name",
          onChange: event => onNameChange(event.target.value),
          required: true,
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.DataSource.name
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Switch, {
        label: "Default",
        checked: isDefault,
        onChange: event => {
          // @ts-ignore
          onDefaultChange(event.target.checked);
        }
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicSettings);

/***/ }),

/***/ "./public/app/features/datasources/settings/ButtonRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const ButtonRow = ({
  canSave,
  canDelete,
  onDelete,
  onSubmit,
  onTest,
  exploreUrl
}) => {
  const canExploreDataSources = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types___WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.DataSourcesExplore);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "gf-form-button-row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      fill: "solid",
      type: "button",
      onClick: () => history.back(),
      children: "Back"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
      variant: "secondary",
      fill: "solid",
      href: exploreUrl,
      disabled: !canExploreDataSources,
      children: "Explore"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "button",
      variant: "destructive",
      disabled: !canDelete,
      onClick: onDelete,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource["delete"],
      children: "Delete"
    }), canSave && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "submit",
      variant: "primary",
      disabled: !canSave,
      onClick: event => onSubmit(event),
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource.saveAndTest,
      children: "Save & test"
    }), !canSave && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "submit",
      variant: "primary",
      onClick: onTest,
      children: "Test"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonRow);

/***/ }),

/***/ "./public/app/features/datasources/settings/CloudInfoBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudInfoBox": () => (/* binding */ CloudInfoBox)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _grafana_data_src_types_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/config.ts");
/* harmony import */ var app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const LOCAL_STORAGE_KEY = 'datasources.settings.cloudInfoBox.isDismissed';
const CloudInfoBox = ({
  dataSource
}) => {
  var _dataSource$version;

  let mainDS = '';
  let extraDS = ''; // don't show for already configured data sources or provisioned data sources

  if (dataSource.readOnly || ((_dataSource$version = dataSource.version) !== null && _dataSource$version !== void 0 ? _dataSource$version : 0) > 2) {
    return null;
  } // Skip showing this info box in some editions


  if (app_core_config__WEBPACK_IMPORTED_MODULE_2__.config.buildInfo.edition !== _grafana_data_src_types_config__WEBPACK_IMPORTED_MODULE_3__.GrafanaEdition.OpenSource) {
    return null;
  }

  switch (dataSource.type) {
    case 'prometheus':
      mainDS = 'Prometheus';
      extraDS = 'Loki';
      break;

    case 'loki':
      mainDS = 'Loki';
      extraDS = 'Prometheus';
      break;

    default:
      return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_4__.LocalStorageValueProvider, {
    storageKey: LOCAL_STORAGE_KEY,
    defaultValue: false,
    children: (isDismissed, onDismiss) => {
      if (isDismissed) {
        return null;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Alert, {
        title: `Configure your ${mainDS} data source below`,
        severity: "info",
        bottomSpacing: 4,
        onRemove: () => {
          onDismiss(true);
        },
        children: ["Or skip the effort and get ", mainDS, " (and ", extraDS, ") as fully-managed, scalable, and hosted data sources from Grafana Labs with the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: "external-link",
          href: `https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${dataSource.type}-settings`,
          target: "_blank",
          rel: "noreferrer",
          title: "The free plan includes 10k active metrics and 50gb storage.",
          children: "free-forever Grafana Cloud plan"
        }), "."]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/features/datasources/settings/DataSourceSettingsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourceSettingsPage": () => (/* binding */ DataSourceSettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _PluginSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/datasources/settings/PluginSettings.tsx");
/* harmony import */ var _BasicSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/datasources/settings/BasicSettings.tsx");
/* harmony import */ var _ButtonRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/datasources/settings/ButtonRow.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/datasources/state/navModel.ts");
/* harmony import */ var app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _CloudInfoBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/datasources/settings/CloudInfoBox.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _label;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Components




 // Services & Utils


 // Actions & selectors



 // Types
















function mapStateToProps(state, props) {
  const dataSourceId = props.match.params.uid;
  const params = new URLSearchParams(props.location.search);
  const dataSource = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getDataSource)(state.dataSources, dataSourceId);
  const {
    plugin,
    loadError,
    loading,
    testingStatus
  } = state.dataSourceSettings;
  const page = params.get('page');
  const nav = plugin ? (0,_state_navModel__WEBPACK_IMPORTED_MODULE_13__.getDataSourceNav)((0,_state_navModel__WEBPACK_IMPORTED_MODULE_13__.buildNavModel)(dataSource, plugin), page || 'settings') : (0,_state_navModel__WEBPACK_IMPORTED_MODULE_13__.getDataSourceLoadingNav)('settings');
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, page ? `datasource-page-${page}` : `datasource-settings-${dataSourceId}`, nav);
  return {
    dataSource: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getDataSource)(state.dataSources, dataSourceId),
    dataSourceMeta: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getDataSourceMeta)(state.dataSources, dataSource.type),
    dataSourceId: dataSourceId,
    page,
    plugin,
    loadError,
    loading,
    testingStatus,
    navModel
  };
}

const mapDispatchToProps = {
  deleteDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_8__.deleteDataSource,
  loadDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_8__.loadDataSource,
  setDataSourceName: _state_reducers__WEBPACK_IMPORTED_MODULE_15__.setDataSourceName,
  updateDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_8__.updateDataSource,
  setIsDefault: _state_reducers__WEBPACK_IMPORTED_MODULE_15__.setIsDefault,
  dataSourceLoaded: _state_reducers__WEBPACK_IMPORTED_MODULE_15__.dataSourceLoaded,
  initDataSourceSettings: _state_actions__WEBPACK_IMPORTED_MODULE_8__.initDataSourceSettings,
  testDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_8__.testDataSource,
  cleanUpAction: app_core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_19__.cleanUpAction
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.connect)(mapStateToProps, mapDispatchToProps);
class DataSourceSettingsPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", async evt => {
      evt.preventDefault();
      await this.props.updateDataSource(Object.assign({}, this.props.dataSource));
      this.testDataSource();
    });

    _defineProperty(this, "onTest", async evt => {
      evt.preventDefault();
      this.testDataSource();
    });

    _defineProperty(this, "onDelete", () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_5__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_20__.ShowConfirmModalEvent({
        title: 'Delete',
        text: `Are you sure you want to delete the "${this.props.dataSource.name}" data source?`,
        yesText: 'Delete',
        icon: 'trash-alt',
        onConfirm: () => {
          this.confirmDelete();
        }
      }));
    });

    _defineProperty(this, "confirmDelete", () => {
      this.props.deleteDataSource();
    });

    _defineProperty(this, "onModelChange", dataSource => {
      this.props.dataSourceLoaded(dataSource);
    });
  }

  componentDidMount() {
    const {
      initDataSourceSettings,
      dataSourceId
    } = this.props;
    initDataSourceSettings(dataSourceId);
  }

  componentWillUnmount() {
    this.props.cleanUpAction({
      stateSelector: state => state.dataSourceSettings
    });
  }

  isReadOnly() {
    return this.props.dataSource.readOnly === true;
  }

  renderIsReadOnlyMessage() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Alert, {
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_16__.selectors.pages.DataSource.readOnly,
      severity: "info",
      title: "Provisioned data source",
      children: "This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source."
    });
  }

  renderMissingEditRightsMessage() {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Alert, {
      severity: "info",
      title: "Missing rights",
      children: "You are not allowed to modify this data source. Please contact your server admin to update this data source."
    }));
  }

  testDataSource() {
    const {
      dataSource,
      testDataSource
    } = this.props;
    testDataSource(dataSource.name);
  }

  get hasDataSource() {
    return this.props.dataSource.id > 0;
  }

  onNavigateToExplore() {
    const {
      dataSource
    } = this.props;
    const exploreState = JSON.stringify({
      datasource: dataSource.name,
      context: 'explore'
    });
    const url = _grafana_data__WEBPACK_IMPORTED_MODULE_11__.urlUtil.renderUrl('/explore', {
      left: exploreState
    });
    return url;
  }

  renderLoadError() {
    const {
      loadError,
      dataSource
    } = this.props;
    const canDeleteDataSource = !this.isReadOnly() && app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermissionInMetadata(app_types___WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.DataSourcesDelete, dataSource);
    const node = {
      text: loadError,
      subTitle: 'Data Source Error',
      icon: 'exclamation-triangle'
    };
    const nav = {
      node: node,
      main: node
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
      navModel: nav,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
        isLoading: this.props.loading,
        children: [this.isReadOnly() && this.renderIsReadOnlyMessage(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "gf-form-button-row",
          children: [canDeleteDataSource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button, {
            type: "submit",
            variant: "destructive",
            onClick: this.onDelete,
            children: "Delete"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button, {
            variant: "secondary",
            fill: "outline",
            type: "button",
            onClick: () => history.back(),
            children: "Back"
          })]
        })]
      })
    });
  }

  renderConfigPageBody(page) {
    const {
      plugin
    } = this.props;

    if (!plugin || !plugin.configPages) {
      return null; // still loading
    }

    for (const p of plugin.configPages) {
      if (p.id === page) {
        // Investigate is any plugins using this? We should change this interface
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(p.body, {
          plugin: plugin,
          query: {}
        });
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      children: ["Page not found: ", page]
    });
  }

  renderAlertDetails() {
    var _testingStatus$detail, _testingStatus$detail2, _testingStatus$detail3;

    const {
      testingStatus
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: [testingStatus === null || testingStatus === void 0 ? void 0 : (_testingStatus$detail = testingStatus.details) === null || _testingStatus$detail === void 0 ? void 0 : _testingStatus$detail.message, testingStatus !== null && testingStatus !== void 0 && (_testingStatus$detail2 = testingStatus.details) !== null && _testingStatus$detail2 !== void 0 && _testingStatus$detail2.verboseMessage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("details", {
        style: {
          whiteSpace: 'pre-wrap'
        },
        children: testingStatus === null || testingStatus === void 0 ? void 0 : (_testingStatus$detail3 = testingStatus.details) === null || _testingStatus$detail3 === void 0 ? void 0 : _testingStatus$detail3.verboseMessage
      }) : null]
    });
  }

  renderSettings() {
    const {
      dataSourceMeta,
      setDataSourceName,
      setIsDefault,
      dataSource,
      plugin,
      testingStatus
    } = this.props;
    const canWriteDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermissionInMetadata(app_types___WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.DataSourcesWrite, dataSource);
    const canDeleteDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermissionInMetadata(app_types___WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.DataSourcesDelete, dataSource);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("form", {
      onSubmit: this.onSubmit,
      children: [!canWriteDataSource && this.renderMissingEditRightsMessage(), this.isReadOnly() && this.renderIsReadOnlyMessage(), dataSourceMeta.state && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: "gf-form",
        children: [_label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("label", {
          className: "gf-form-label width-10",
          children: "Plugin state"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("label", {
          className: "gf-form-label gf-form-label--transparent",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_14__.PluginStateInfo, {
            state: dataSourceMeta.state
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_CloudInfoBox__WEBPACK_IMPORTED_MODULE_17__.CloudInfoBox, {
        dataSource: dataSource
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_BasicSettings__WEBPACK_IMPORTED_MODULE_3__["default"], {
        dataSourceName: dataSource.name,
        isDefault: dataSource.isDefault,
        onDefaultChange: state => setIsDefault(state),
        onNameChange: name => setDataSourceName(name)
      }), plugin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_PluginSettings__WEBPACK_IMPORTED_MODULE_2__.PluginSettings, {
        plugin: plugin,
        dataSource: dataSource,
        dataSourceMeta: dataSourceMeta,
        onModelChange: this.onModelChange
      }), (testingStatus === null || testingStatus === void 0 ? void 0 : testingStatus.message) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "gf-form-group p-t-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Alert, {
          severity: testingStatus.status === 'error' ? 'error' : 'success',
          title: testingStatus.message,
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_16__.selectors.pages.DataSource.alert,
          children: testingStatus.details && this.renderAlertDetails()
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ButtonRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onSubmit: event => this.onSubmit(event),
        canSave: !this.isReadOnly() && canWriteDataSource,
        canDelete: !this.isReadOnly() && canDeleteDataSource,
        onDelete: this.onDelete,
        onTest: event => this.onTest(event),
        exploreUrl: this.onNavigateToExplore()
      })]
    });
  }

  render() {
    const {
      navModel,
      page,
      loadError,
      loading
    } = this.props;

    if (loadError) {
      return this.renderLoadError();
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
        isLoading: loading,
        children: this.hasDataSource ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
          children: page ? this.renderConfigPageBody(page) : this.renderSettings()
        }) : null
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourceSettingsPage));

/***/ }),

/***/ "./public/app/features/datasources/settings/PluginSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginSettings": () => (/* binding */ PluginSettings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PluginSettings extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "component", void 0);

    _defineProperty(this, "scopeProps", void 0);

    _defineProperty(this, "onModelChanged", dataSource => {
      this.props.onModelChange(dataSource);
    });

    this.scopeProps = {
      ctrl: {
        datasourceMeta: props.dataSourceMeta,
        current: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(props.dataSource)
      },
      onModelChanged: this.onModelChanged
    };
    this.onModelChanged = this.onModelChanged.bind(this);
  }

  componentDidMount() {
    const {
      plugin
    } = this.props;

    if (!this.element) {
      return;
    }

    if (!plugin.components.ConfigEditor) {
      // React editor is not specified, let's render angular editor
      // How to approach this better? Introduce ReactDataSourcePlugin interface and typeguard it here?
      const loader = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getAngularLoader)();
      const template = '<plugin-component type="datasource-config-ctrl" />';
      this.component = loader.load(this.element, this.scopeProps, template);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      plugin
    } = this.props;

    if (!plugin.components.ConfigEditor && this.props.dataSource !== prevProps.dataSource) {
      var _this$component;

      this.scopeProps.ctrl.current = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.props.dataSource);
      (_this$component = this.component) === null || _this$component === void 0 ? void 0 : _this$component.digest();
    }
  }

  componentWillUnmount() {
    if (this.component) {
      this.component.destroy();
    }
  }

  render() {
    const {
      plugin,
      dataSource
    } = this.props;

    if (!plugin) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ref: element => this.element = element,
      children: plugin.components.ConfigEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(plugin.components.ConfigEditor, {
        options: dataSource,
        onOptionsChange: this.onModelChanged
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginSettings);

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

/***/ "./public/app/features/plugins/components/PluginStateInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginStateInfo": () => (/* binding */ PluginStateInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const PluginStateInfo = props => {
  const display = getFeatureStateInfo(props.state);

  if (!display) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
    color: display.color,
    title: display.tooltip,
    text: display.text,
    icon: display.icon
  });
};

function getFeatureStateInfo(state) {
  switch (state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginState.deprecated:
      return {
        text: 'Deprecated',
        color: 'red',
        tooltip: `This feature is deprecated and will be removed in a future release`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginState.alpha:
      return {
        text: 'Alpha',
        color: 'blue',
        tooltip: `This feature is experimental and future updates might not be backward compatible`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginState.beta:
      return {
        text: 'Beta',
        color: 'blue',
        tooltip: `This feature is close to complete but not fully tested`
      };

    default:
      return null;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBLE1BQUksQ0FBQ3NSLE9BQUwsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUFPLHVEQUFDLDhDQUFEO0FBQU8sU0FBSyxFQUFFQSxPQUFPLENBQUNFLEtBQXRCO0FBQTZCLFNBQUssRUFBRUYsT0FBTyxDQUFDRyxPQUE1QztBQUFxRCxRQUFJLEVBQUVILE9BQU8sQ0FBQzFQLElBQW5FO0FBQXlFLFFBQUksRUFBRTBQLE9BQU8sQ0FBQ3hQO0FBQXZGLElBQVA7QUFDRCxDQVJNOztBQVVQLFNBQVN5UCxtQkFBVCxDQUE2QnZSLEtBQTdCLEVBQXFFO0FBQ25FLFVBQVFBLEtBQVI7QUFDRSxTQUFLcVIsaUVBQUw7QUFDRSxhQUFPO0FBQ0x6UCxRQUFBQSxJQUFJLEVBQUUsWUFERDtBQUVMNFAsUUFBQUEsS0FBSyxFQUFFLEtBRkY7QUFHTEMsUUFBQUEsT0FBTyxFQUFHO0FBSEwsT0FBUDs7QUFLRixTQUFLSiw0REFBTDtBQUNFLGFBQU87QUFDTHpQLFFBQUFBLElBQUksRUFBRSxPQUREO0FBRUw0UCxRQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGLFNBQUtKLDJEQUFMO0FBQ0UsYUFBTztBQUNMelAsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTDRQLFFBQUFBLEtBQUssRUFBRSxNQUZGO0FBR0xDLFFBQUFBLE9BQU8sRUFBRztBQUhMLE9BQVA7O0FBS0Y7QUFDRSxhQUFPLElBQVA7QUFwQko7QUFzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zZXR0aW5ncy9CYXNpY1NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zZXR0aW5ncy9CdXR0b25Sb3cudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3NldHRpbmdzL0Nsb3VkSW5mb0JveC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc2V0dGluZ3MvRGF0YVNvdXJjZVNldHRpbmdzUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc2V0dGluZ3MvUGx1Z2luU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYnVpbGRDYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL25hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyaWFsKCkge1xuICBjb25zdCBleHBpcnkgPSBjb25maWcubGljZW5zZUluZm8/LnRyaWFsRXhwaXJ5O1xuICByZXR1cm4gISEoZXhwaXJ5ICYmIGV4cGlyeSA+IDApO1xufVxuXG5leHBvcnQgY29uc3QgaGlnaGxpZ2h0VHJpYWwgPSAoKSA9PiBpc1RyaWFsKCkgJiYgY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5saW5lRm9ybUxhYmVsLCBMZWdhY3lGb3JtcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuXG5jb25zdCB7IElucHV0LCBTd2l0Y2ggfSA9IExlZ2FjeUZvcm1zO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZztcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xuICBvbk5hbWVDaGFuZ2U6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uRGVmYXVsdENoYW5nZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5jb25zdCBCYXNpY1NldHRpbmdzOiBGQzxQcm9wcz4gPSAoeyBkYXRhU291cmNlTmFtZSwgaXNEZWZhdWx0LCBvbkRlZmF1bHRDaGFuZ2UsIG9uTmFtZUNoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCIgYXJpYS1sYWJlbD1cIkRhdGFzb3VyY2Ugc2V0dGluZ3MgcGFnZSBiYXNpYyBzZXR0aW5nc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gbWF4LXdpZHRoLTMwXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICczcHgnIH19PlxuICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWxcbiAgICAgICAgICAgIHRvb2x0aXA9e1xuICAgICAgICAgICAgICAnVGhlIG5hbWUgaXMgdXNlZCB3aGVuIHlvdSBzZWxlY3QgdGhlIGRhdGEgc291cmNlIGluIHBhbmVscy4gVGhlIGRlZmF1bHQgZGF0YSBzb3VyY2UgaXMgJyArXG4gICAgICAgICAgICAgICdwcmVzZWxlY3RlZCBpbiBuZXcgcGFuZWxzLidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOYW1lXG4gICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWlucHV0IG1heC13aWR0aC0yM1wiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17ZGF0YVNvdXJjZU5hbWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25OYW1lQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLkRhdGFTb3VyY2UubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIGxhYmVsPVwiRGVmYXVsdFwiXG4gICAgICAgICAgY2hlY2tlZD17aXNEZWZhdWx0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG9uRGVmYXVsdENoYW5nZShldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNTZXR0aW5ncztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBCdXR0b24sIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMvJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGV4cGxvcmVVcmw6IHN0cmluZztcbiAgY2FuU2F2ZTogYm9vbGVhbjtcbiAgY2FuRGVsZXRlOiBib29sZWFuO1xuICBvbkRlbGV0ZTogKCkgPT4gdm9pZDtcbiAgb25TdWJtaXQ6IChldmVudDogYW55KSA9PiB2b2lkO1xuICBvblRlc3Q6IChldmVudDogYW55KSA9PiB2b2lkO1xufVxuXG5jb25zdCBCdXR0b25Sb3c6IEZDPFByb3BzPiA9ICh7IGNhblNhdmUsIGNhbkRlbGV0ZSwgb25EZWxldGUsIG9uU3VibWl0LCBvblRlc3QsIGV4cGxvcmVVcmwgfSkgPT4ge1xuICBjb25zdCBjYW5FeHBsb3JlRGF0YVNvdXJjZXMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc0V4cGxvcmUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGZpbGw9XCJzb2xpZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LmJhY2soKX0+XG4gICAgICAgIEJhY2tcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGZpbGw9XCJzb2xpZFwiIGhyZWY9e2V4cGxvcmVVcmx9IGRpc2FibGVkPXshY2FuRXhwbG9yZURhdGFTb3VyY2VzfT5cbiAgICAgICAgRXhwbG9yZVxuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFjYW5EZWxldGV9XG4gICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlfVxuICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuRGF0YVNvdXJjZS5kZWxldGV9XG4gICAgICA+XG4gICAgICAgIERlbGV0ZVxuICAgICAgPC9CdXR0b24+XG4gICAgICB7Y2FuU2F2ZSAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgZGlzYWJsZWQ9eyFjYW5TYXZlfVxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gb25TdWJtaXQoZXZlbnQpfVxuICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5EYXRhU291cmNlLnNhdmVBbmRUZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZSAmYW1wOyB0ZXN0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHshY2FuU2F2ZSAmJiAoXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17b25UZXN0fT5cbiAgICAgICAgICBUZXN0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblJvdztcbiIsImltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgR3JhZmFuYUVkaXRpb24gfSBmcm9tICdAZ3JhZmFuYS9kYXRhL3NyYy90eXBlcy9jb25maWcnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlVmFsdWVQcm92aWRlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvTG9jYWxTdG9yYWdlVmFsdWVQcm92aWRlcic7XG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfS0VZID0gJ2RhdGFzb3VyY2VzLnNldHRpbmdzLmNsb3VkSW5mb0JveC5pc0Rpc21pc3NlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3M7XG59XG5cbmV4cG9ydCBjb25zdCBDbG91ZEluZm9Cb3g6IEZDPFByb3BzPiA9ICh7IGRhdGFTb3VyY2UgfSkgPT4ge1xuICBsZXQgbWFpbkRTID0gJyc7XG4gIGxldCBleHRyYURTID0gJyc7XG5cbiAgLy8gZG9uJ3Qgc2hvdyBmb3IgYWxyZWFkeSBjb25maWd1cmVkIGRhdGEgc291cmNlcyBvciBwcm92aXNpb25lZCBkYXRhIHNvdXJjZXNcbiAgaWYgKGRhdGFTb3VyY2UucmVhZE9ubHkgfHwgKGRhdGFTb3VyY2UudmVyc2lvbiA/PyAwKSA+IDIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFNraXAgc2hvd2luZyB0aGlzIGluZm8gYm94IGluIHNvbWUgZWRpdGlvbnNcbiAgaWYgKGNvbmZpZy5idWlsZEluZm8uZWRpdGlvbiAhPT0gR3JhZmFuYUVkaXRpb24uT3BlblNvdXJjZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3dpdGNoIChkYXRhU291cmNlLnR5cGUpIHtcbiAgICBjYXNlICdwcm9tZXRoZXVzJzpcbiAgICAgIG1haW5EUyA9ICdQcm9tZXRoZXVzJztcbiAgICAgIGV4dHJhRFMgPSAnTG9raSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsb2tpJzpcbiAgICAgIG1haW5EUyA9ICdMb2tpJztcbiAgICAgIGV4dHJhRFMgPSAnUHJvbWV0aGV1cyc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2NhbFN0b3JhZ2VWYWx1ZVByb3ZpZGVyPGJvb2xlYW4+IHN0b3JhZ2VLZXk9e0xPQ0FMX1NUT1JBR0VfS0VZfSBkZWZhdWx0VmFsdWU9e2ZhbHNlfT5cbiAgICAgIHsoaXNEaXNtaXNzZWQsIG9uRGlzbWlzcykgPT4ge1xuICAgICAgICBpZiAoaXNEaXNtaXNzZWQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgdGl0bGU9e2BDb25maWd1cmUgeW91ciAke21haW5EU30gZGF0YSBzb3VyY2UgYmVsb3dgfVxuICAgICAgICAgICAgc2V2ZXJpdHk9XCJpbmZvXCJcbiAgICAgICAgICAgIGJvdHRvbVNwYWNpbmc9ezR9XG4gICAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkRpc21pc3ModHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE9yIHNraXAgdGhlIGVmZm9ydCBhbmQgZ2V0IHttYWluRFN9IChhbmQge2V4dHJhRFN9KSBhcyBmdWxseS1tYW5hZ2VkLCBzY2FsYWJsZSwgYW5kIGhvc3RlZCBkYXRhIHNvdXJjZXMgZnJvbVxuICAgICAgICAgICAgR3JhZmFuYSBMYWJzIHdpdGggdGhleycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9ncmFmYW5hLmNvbS9zaWdudXAvY2xvdWQvY29ubmVjdC1hY2NvdW50P3NyYz1ncmFmYW5hLW9zcyZjbnQ9JHtkYXRhU291cmNlLnR5cGV9LXNldHRpbmdzYH1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiVGhlIGZyZWUgcGxhbiBpbmNsdWRlcyAxMGsgYWN0aXZlIG1ldHJpY3MgYW5kIDUwZ2Igc3RvcmFnZS5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBmcmVlLWZvcmV2ZXIgR3JhZmFuYSBDbG91ZCBwbGFuXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAuXG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Mb2NhbFN0b3JhZ2VWYWx1ZVByb3ZpZGVyPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgUGx1Z2luU2V0dGluZ3MgfSBmcm9tICcuL1BsdWdpblNldHRpbmdzJztcbmltcG9ydCBCYXNpY1NldHRpbmdzIGZyb20gJy4vQmFzaWNTZXR0aW5ncyc7XG5pbXBvcnQgQnV0dG9uUm93IGZyb20gJy4vQnV0dG9uUm93Jztcbi8vIFNlcnZpY2VzICYgVXRpbHNcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5cbi8vIEFjdGlvbnMgJiBzZWxlY3RvcnNcbmltcG9ydCB7IGdldERhdGFTb3VyY2UsIGdldERhdGFTb3VyY2VNZXRhIH0gZnJvbSAnLi4vc3RhdGUvc2VsZWN0b3JzJztcbmltcG9ydCB7XG4gIGRlbGV0ZURhdGFTb3VyY2UsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3MsXG4gIGxvYWREYXRhU291cmNlLFxuICB0ZXN0RGF0YVNvdXJjZSxcbiAgdXBkYXRlRGF0YVNvdXJjZSxcbn0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBTdG9yZVN0YXRlLCBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzLyc7XG5pbXBvcnQgeyBEYXRhU291cmNlU2V0dGluZ3MsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlTG9hZGluZ05hdiwgYnVpbGROYXZNb2RlbCwgZ2V0RGF0YVNvdXJjZU5hdiB9IGZyb20gJy4uL3N0YXRlL25hdk1vZGVsJztcbmltcG9ydCB7IFBsdWdpblN0YXRlSW5mbyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvJztcbmltcG9ydCB7IGRhdGFTb3VyY2VMb2FkZWQsIHNldERhdGFTb3VyY2VOYW1lLCBzZXRJc0RlZmF1bHQgfSBmcm9tICcuLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IENsb3VkSW5mb0JveCB9IGZyb20gJy4vQ2xvdWRJbmZvQm94JztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNsZWFuVXBBY3Rpb24gfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zL2NsZWFuVXAnO1xuaW1wb3J0IHsgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZXZlbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogT3duUHJvcHMpIHtcbiAgY29uc3QgZGF0YVNvdXJjZUlkID0gcHJvcHMubWF0Y2gucGFyYW1zLnVpZDtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xuICBjb25zdCBkYXRhU291cmNlID0gZ2V0RGF0YVNvdXJjZShzdGF0ZS5kYXRhU291cmNlcywgZGF0YVNvdXJjZUlkKTtcbiAgY29uc3QgeyBwbHVnaW4sIGxvYWRFcnJvciwgbG9hZGluZywgdGVzdGluZ1N0YXR1cyB9ID0gc3RhdGUuZGF0YVNvdXJjZVNldHRpbmdzO1xuICBjb25zdCBwYWdlID0gcGFyYW1zLmdldCgncGFnZScpO1xuXG4gIGNvbnN0IG5hdiA9IHBsdWdpblxuICAgID8gZ2V0RGF0YVNvdXJjZU5hdihidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2UsIHBsdWdpbiksIHBhZ2UgfHwgJ3NldHRpbmdzJylcbiAgICA6IGdldERhdGFTb3VyY2VMb2FkaW5nTmF2KCdzZXR0aW5ncycpO1xuXG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwoXG4gICAgc3RhdGUubmF2SW5kZXgsXG4gICAgcGFnZSA/IGBkYXRhc291cmNlLXBhZ2UtJHtwYWdlfWAgOiBgZGF0YXNvdXJjZS1zZXR0aW5ncy0ke2RhdGFTb3VyY2VJZH1gLFxuICAgIG5hdlxuICApO1xuXG4gIHJldHVybiB7XG4gICAgZGF0YVNvdXJjZTogZ2V0RGF0YVNvdXJjZShzdGF0ZS5kYXRhU291cmNlcywgZGF0YVNvdXJjZUlkKSxcbiAgICBkYXRhU291cmNlTWV0YTogZ2V0RGF0YVNvdXJjZU1ldGEoc3RhdGUuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UudHlwZSksXG4gICAgZGF0YVNvdXJjZUlkOiBkYXRhU291cmNlSWQsXG4gICAgcGFnZSxcbiAgICBwbHVnaW4sXG4gICAgbG9hZEVycm9yLFxuICAgIGxvYWRpbmcsXG4gICAgdGVzdGluZ1N0YXR1cyxcbiAgICBuYXZNb2RlbCxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBkZWxldGVEYXRhU291cmNlLFxuICBsb2FkRGF0YVNvdXJjZSxcbiAgc2V0RGF0YVNvdXJjZU5hbWUsXG4gIHVwZGF0ZURhdGFTb3VyY2UsXG4gIHNldElzRGVmYXVsdCxcbiAgZGF0YVNvdXJjZUxvYWRlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyxcbiAgdGVzdERhdGFTb3VyY2UsXG4gIGNsZWFuVXBBY3Rpb24sXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZVNldHRpbmdzUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBpbml0RGF0YVNvdXJjZVNldHRpbmdzLCBkYXRhU291cmNlSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyhkYXRhU291cmNlSWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5jbGVhblVwQWN0aW9uKHtcbiAgICAgIHN0YXRlU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZVNldHRpbmdzLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXdhaXQgdGhpcy5wcm9wcy51cGRhdGVEYXRhU291cmNlKHsgLi4udGhpcy5wcm9wcy5kYXRhU291cmNlIH0pO1xuXG4gICAgdGhpcy50ZXN0RGF0YVNvdXJjZSgpO1xuICB9O1xuXG4gIG9uVGVzdCA9IGFzeW5jIChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnRlc3REYXRhU291cmNlKCk7XG4gIH07XG5cbiAgb25EZWxldGUgPSAoKSA9PiB7XG4gICAgYXBwRXZlbnRzLnB1Ymxpc2goXG4gICAgICBuZXcgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50KHtcbiAgICAgICAgdGl0bGU6ICdEZWxldGUnLFxuICAgICAgICB0ZXh0OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgXCIke3RoaXMucHJvcHMuZGF0YVNvdXJjZS5uYW1lfVwiIGRhdGEgc291cmNlP2AsXG4gICAgICAgIHllc1RleHQ6ICdEZWxldGUnLFxuICAgICAgICBpY29uOiAndHJhc2gtYWx0JyxcbiAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25maXJtRGVsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uZmlybURlbGV0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmRlbGV0ZURhdGFTb3VyY2UoKTtcbiAgfTtcblxuICBvbk1vZGVsQ2hhbmdlID0gKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncykgPT4ge1xuICAgIHRoaXMucHJvcHMuZGF0YVNvdXJjZUxvYWRlZChkYXRhU291cmNlKTtcbiAgfTtcblxuICBpc1JlYWRPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFTb3VyY2UucmVhZE9ubHkgPT09IHRydWU7XG4gIH1cblxuICByZW5kZXJJc1JlYWRPbmx5TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0IGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5EYXRhU291cmNlLnJlYWRPbmx5fSBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIlByb3Zpc2lvbmVkIGRhdGEgc291cmNlXCI+XG4gICAgICAgIFRoaXMgZGF0YSBzb3VyY2Ugd2FzIGFkZGVkIGJ5IGNvbmZpZyBhbmQgY2Fubm90IGJlIG1vZGlmaWVkIHVzaW5nIHRoZSBVSS4gUGxlYXNlIGNvbnRhY3QgeW91ciBzZXJ2ZXIgYWRtaW4gdG9cbiAgICAgICAgdXBkYXRlIHRoaXMgZGF0YSBzb3VyY2UuXG4gICAgICA8L0FsZXJ0PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNaXNzaW5nRWRpdFJpZ2h0c01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIk1pc3NpbmcgcmlnaHRzXCI+XG4gICAgICAgIFlvdSBhcmUgbm90IGFsbG93ZWQgdG8gbW9kaWZ5IHRoaXMgZGF0YSBzb3VyY2UuIFBsZWFzZSBjb250YWN0IHlvdXIgc2VydmVyIGFkbWluIHRvIHVwZGF0ZSB0aGlzIGRhdGEgc291cmNlLlxuICAgICAgPC9BbGVydD5cbiAgICApO1xuICB9XG5cbiAgdGVzdERhdGFTb3VyY2UoKSB7XG4gICAgY29uc3QgeyBkYXRhU291cmNlLCB0ZXN0RGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0ZXN0RGF0YVNvdXJjZShkYXRhU291cmNlLm5hbWUpO1xuICB9XG5cbiAgZ2V0IGhhc0RhdGFTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YVNvdXJjZS5pZCA+IDA7XG4gIH1cblxuICBvbk5hdmlnYXRlVG9FeHBsb3JlKCkge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBleHBsb3JlU3RhdGUgPSBKU09OLnN0cmluZ2lmeSh7IGRhdGFzb3VyY2U6IGRhdGFTb3VyY2UubmFtZSwgY29udGV4dDogJ2V4cGxvcmUnIH0pO1xuICAgIGNvbnN0IHVybCA9IHVybFV0aWwucmVuZGVyVXJsKCcvZXhwbG9yZScsIHsgbGVmdDogZXhwbG9yZVN0YXRlIH0pO1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICByZW5kZXJMb2FkRXJyb3IoKSB7XG4gICAgY29uc3QgeyBsb2FkRXJyb3IsIGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2FuRGVsZXRlRGF0YVNvdXJjZSA9XG4gICAgICAhdGhpcy5pc1JlYWRPbmx5KCkgJiYgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzRGVsZXRlLCBkYXRhU291cmNlKTtcblxuICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICB0ZXh0OiBsb2FkRXJyb3IhLFxuICAgICAgc3ViVGl0bGU6ICdEYXRhIFNvdXJjZSBFcnJvcicsXG4gICAgICBpY29uOiAnZXhjbGFtYXRpb24tdHJpYW5nbGUnLFxuICAgIH07XG4gICAgY29uc3QgbmF2ID0ge1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIG1haW46IG5vZGUsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2fT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9PlxuICAgICAgICAgIHt0aGlzLmlzUmVhZE9ubHkoKSAmJiB0aGlzLnJlbmRlcklzUmVhZE9ubHlNZXNzYWdlKCl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICAgIHtjYW5EZWxldGVEYXRhU291cmNlICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17dGhpcy5vbkRlbGV0ZX0+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGZpbGw9XCJvdXRsaW5lXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkuYmFjaygpfT5cbiAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ29uZmlnUGFnZUJvZHkocGFnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBwbHVnaW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFwbHVnaW4gfHwgIXBsdWdpbi5jb25maWdQYWdlcykge1xuICAgICAgcmV0dXJuIG51bGw7IC8vIHN0aWxsIGxvYWRpbmdcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgICBpZiAocC5pZCA9PT0gcGFnZSkge1xuICAgICAgICAvLyBJbnZlc3RpZ2F0ZSBpcyBhbnkgcGx1Z2lucyB1c2luZyB0aGlzPyBXZSBzaG91bGQgY2hhbmdlIHRoaXMgaW50ZXJmYWNlXG4gICAgICAgIHJldHVybiA8cC5ib2R5IHBsdWdpbj17cGx1Z2lufSBxdWVyeT17e319IC8+O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2PlBhZ2Ugbm90IGZvdW5kOiB7cGFnZX08L2Rpdj47XG4gIH1cblxuICByZW5kZXJBbGVydERldGFpbHMoKSB7XG4gICAgY29uc3QgeyB0ZXN0aW5nU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHt0ZXN0aW5nU3RhdHVzPy5kZXRhaWxzPy5tZXNzYWdlfVxuICAgICAgICB7dGVzdGluZ1N0YXR1cz8uZGV0YWlscz8udmVyYm9zZU1lc3NhZ2UgPyAoXG4gICAgICAgICAgPGRldGFpbHMgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyB9fT57dGVzdGluZ1N0YXR1cz8uZGV0YWlscz8udmVyYm9zZU1lc3NhZ2V9PC9kZXRhaWxzPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTZXR0aW5ncygpIHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2VNZXRhLCBzZXREYXRhU291cmNlTmFtZSwgc2V0SXNEZWZhdWx0LCBkYXRhU291cmNlLCBwbHVnaW4sIHRlc3RpbmdTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2FuV3JpdGVEYXRhU291cmNlID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzV3JpdGUsIGRhdGFTb3VyY2UpO1xuICAgIGNvbnN0IGNhbkRlbGV0ZURhdGFTb3VyY2UgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNEZWxldGUsIGRhdGFTb3VyY2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgeyFjYW5Xcml0ZURhdGFTb3VyY2UgJiYgdGhpcy5yZW5kZXJNaXNzaW5nRWRpdFJpZ2h0c01lc3NhZ2UoKX1cbiAgICAgICAge3RoaXMuaXNSZWFkT25seSgpICYmIHRoaXMucmVuZGVySXNSZWFkT25seU1lc3NhZ2UoKX1cbiAgICAgICAge2RhdGFTb3VyY2VNZXRhLnN0YXRlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTEwXCI+UGx1Z2luIHN0YXRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgIDxQbHVnaW5TdGF0ZUluZm8gc3RhdGU9e2RhdGFTb3VyY2VNZXRhLnN0YXRlfSAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8Q2xvdWRJbmZvQm94IGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IC8+XG5cbiAgICAgICAgPEJhc2ljU2V0dGluZ3NcbiAgICAgICAgICBkYXRhU291cmNlTmFtZT17ZGF0YVNvdXJjZS5uYW1lfVxuICAgICAgICAgIGlzRGVmYXVsdD17ZGF0YVNvdXJjZS5pc0RlZmF1bHR9XG4gICAgICAgICAgb25EZWZhdWx0Q2hhbmdlPXsoc3RhdGUpID0+IHNldElzRGVmYXVsdChzdGF0ZSl9XG4gICAgICAgICAgb25OYW1lQ2hhbmdlPXsobmFtZSkgPT4gc2V0RGF0YVNvdXJjZU5hbWUobmFtZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3BsdWdpbiAmJiAoXG4gICAgICAgICAgPFBsdWdpblNldHRpbmdzXG4gICAgICAgICAgICBwbHVnaW49e3BsdWdpbn1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICBkYXRhU291cmNlTWV0YT17ZGF0YVNvdXJjZU1ldGF9XG4gICAgICAgICAgICBvbk1vZGVsQ2hhbmdlPXt0aGlzLm9uTW9kZWxDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7dGVzdGluZ1N0YXR1cz8ubWVzc2FnZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwIHAtdC0yXCI+XG4gICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgc2V2ZXJpdHk9e3Rlc3RpbmdTdGF0dXMuc3RhdHVzID09PSAnZXJyb3InID8gJ2Vycm9yJyA6ICdzdWNjZXNzJ31cbiAgICAgICAgICAgICAgdGl0bGU9e3Rlc3RpbmdTdGF0dXMubWVzc2FnZX1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLkRhdGFTb3VyY2UuYWxlcnR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0ZXN0aW5nU3RhdHVzLmRldGFpbHMgJiYgdGhpcy5yZW5kZXJBbGVydERldGFpbHMoKX1cbiAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEJ1dHRvblJvd1xuICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHRoaXMub25TdWJtaXQoZXZlbnQpfVxuICAgICAgICAgIGNhblNhdmU9eyF0aGlzLmlzUmVhZE9ubHkoKSAmJiBjYW5Xcml0ZURhdGFTb3VyY2V9XG4gICAgICAgICAgY2FuRGVsZXRlPXshdGhpcy5pc1JlYWRPbmx5KCkgJiYgY2FuRGVsZXRlRGF0YVNvdXJjZX1cbiAgICAgICAgICBvbkRlbGV0ZT17dGhpcy5vbkRlbGV0ZX1cbiAgICAgICAgICBvblRlc3Q9eyhldmVudCkgPT4gdGhpcy5vblRlc3QoZXZlbnQpfVxuICAgICAgICAgIGV4cGxvcmVVcmw9e3RoaXMub25OYXZpZ2F0ZVRvRXhwbG9yZSgpfVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZNb2RlbCwgcGFnZSwgbG9hZEVycm9yLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGxvYWRFcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTG9hZEVycm9yKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgICAge3RoaXMuaGFzRGF0YVNvdXJjZSA/IDxkaXY+e3BhZ2UgPyB0aGlzLnJlbmRlckNvbmZpZ1BhZ2VCb2R5KHBhZ2UpIDogdGhpcy5yZW5kZXJTZXR0aW5ncygpfTwvZGl2PiA6IG51bGx9XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihEYXRhU291cmNlU2V0dGluZ3NQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIERhdGFRdWVyeSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlUGx1Z2luLFxuICBEYXRhU291cmNlUGx1Z2luTWV0YSxcbiAgRGF0YVNvdXJjZVNldHRpbmdzLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFuZ3VsYXJDb21wb25lbnQsIGdldEFuZ3VsYXJMb2FkZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IHR5cGUgR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4gPSBEYXRhU291cmNlUGx1Z2luPERhdGFTb3VyY2VBcGk8RGF0YVF1ZXJ5LCBEYXRhU291cmNlSnNvbkRhdGE+PjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHBsdWdpbjogR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW47XG4gIGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncztcbiAgZGF0YVNvdXJjZU1ldGE6IERhdGFTb3VyY2VQbHVnaW5NZXRhO1xuICBvbk1vZGVsQ2hhbmdlOiAoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgUGx1Z2luU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIGNvbXBvbmVudD86IEFuZ3VsYXJDb21wb25lbnQ7XG4gIHNjb3BlUHJvcHM6IHtcbiAgICBjdHJsOiB7IGRhdGFzb3VyY2VNZXRhOiBEYXRhU291cmNlUGx1Z2luTWV0YTsgY3VycmVudDogRGF0YVNvdXJjZVNldHRpbmdzIH07XG4gICAgb25Nb2RlbENoYW5nZWQ6IChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHZvaWQ7XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zY29wZVByb3BzID0ge1xuICAgICAgY3RybDogeyBkYXRhc291cmNlTWV0YTogcHJvcHMuZGF0YVNvdXJjZU1ldGEsIGN1cnJlbnQ6IGNsb25lRGVlcChwcm9wcy5kYXRhU291cmNlKSB9LFxuICAgICAgb25Nb2RlbENoYW5nZWQ6IHRoaXMub25Nb2RlbENoYW5nZWQsXG4gICAgfTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2VkID0gdGhpcy5vbk1vZGVsQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBwbHVnaW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghcGx1Z2luLmNvbXBvbmVudHMuQ29uZmlnRWRpdG9yKSB7XG4gICAgICAvLyBSZWFjdCBlZGl0b3IgaXMgbm90IHNwZWNpZmllZCwgbGV0J3MgcmVuZGVyIGFuZ3VsYXIgZWRpdG9yXG4gICAgICAvLyBIb3cgdG8gYXBwcm9hY2ggdGhpcyBiZXR0ZXI/IEludHJvZHVjZSBSZWFjdERhdGFTb3VyY2VQbHVnaW4gaW50ZXJmYWNlIGFuZCB0eXBlZ3VhcmQgaXQgaGVyZT9cbiAgICAgIGNvbnN0IGxvYWRlciA9IGdldEFuZ3VsYXJMb2FkZXIoKTtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gJzxwbHVnaW4tY29tcG9uZW50IHR5cGU9XCJkYXRhc291cmNlLWNvbmZpZy1jdHJsXCIgLz4nO1xuXG4gICAgICB0aGlzLmNvbXBvbmVudCA9IGxvYWRlci5sb2FkKHRoaXMuZWxlbWVudCwgdGhpcy5zY29wZVByb3BzLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpIHtcbiAgICBjb25zdCB7IHBsdWdpbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXBsdWdpbi5jb21wb25lbnRzLkNvbmZpZ0VkaXRvciAmJiB0aGlzLnByb3BzLmRhdGFTb3VyY2UgIT09IHByZXZQcm9wcy5kYXRhU291cmNlKSB7XG4gICAgICB0aGlzLnNjb3BlUHJvcHMuY3RybC5jdXJyZW50ID0gY2xvbmVEZWVwKHRoaXMucHJvcHMuZGF0YVNvdXJjZSk7XG5cbiAgICAgIHRoaXMuY29tcG9uZW50Py5kaWdlc3QoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBvbk1vZGVsQ2hhbmdlZCA9IChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uTW9kZWxDaGFuZ2UoZGF0YVNvdXJjZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGx1Z2luLCBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwbHVnaW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17KGVsZW1lbnQpID0+ICh0aGlzLmVsZW1lbnQgPSBlbGVtZW50KX0+XG4gICAgICAgIHtwbHVnaW4uY29tcG9uZW50cy5Db25maWdFZGl0b3IgJiZcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KHBsdWdpbi5jb21wb25lbnRzLkNvbmZpZ0VkaXRvciwge1xuICAgICAgICAgICAgb3B0aW9uczogZGF0YVNvdXJjZSxcbiAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZTogdGhpcy5vbk1vZGVsQ2hhbmdlZCxcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luU2V0dGluZ3M7XG4iLCJpbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBsb2NhdGlvblV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VXaXRoQmFja2VuZCwgZ2V0RGF0YVNvdXJjZVNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVOYXZJbmRleCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGdldERhdGFzb3VyY2VTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9kYXRhc291cmNlX3Nydic7XG5pbXBvcnQgeyBpbXBvcnREYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luX2xvYWRlcic7XG5pbXBvcnQgeyBnZXRQbHVnaW5TZXR0aW5ncyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpblNldHRpbmdzJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeSwgVGh1bmtEaXNwYXRjaCwgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBidWlsZENhdGVnb3JpZXMgfSBmcm9tICcuL2J1aWxkQ2F0ZWdvcmllcyc7XG5pbXBvcnQgeyBidWlsZE5hdk1vZGVsIH0gZnJvbSAnLi9uYXZNb2RlbCc7XG5pbXBvcnQge1xuICBkYXRhU291cmNlTG9hZGVkLFxuICBkYXRhU291cmNlTWV0YUxvYWRlZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkLFxuICBkYXRhU291cmNlUGx1Z2luc0xvYWRlZCxcbiAgZGF0YVNvdXJjZXNMb2FkZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQsXG4gIHRlc3REYXRhU291cmNlRmFpbGVkLFxuICB0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nLFxuICB0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCxcbn0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlLCBnZXREYXRhU291cmNlTWV0YSB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvYWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVR5cGVzTG9hZGVkUGF5bG9hZCB7XG4gIHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW107XG4gIGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyB7XG4gIGxvYWREYXRhU291cmNlOiB0eXBlb2YgbG9hZERhdGFTb3VyY2U7XG4gIGxvYWREYXRhU291cmNlTWV0YTogdHlwZW9mIGxvYWREYXRhU291cmNlTWV0YTtcbiAgZ2V0RGF0YVNvdXJjZTogdHlwZW9mIGdldERhdGFTb3VyY2U7XG4gIGdldERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZU1ldGE7XG4gIGltcG9ydERhdGFTb3VyY2VQbHVnaW46IHR5cGVvZiBpbXBvcnREYXRhU291cmNlUGx1Z2luO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzIHtcbiAgZ2V0RGF0YXNvdXJjZVNydjogdHlwZW9mIGdldERhdGFTb3VyY2VTcnY7XG4gIGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcGFnZUlkOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzID0ge1xuICAgIGxvYWREYXRhU291cmNlLFxuICAgIGxvYWREYXRhU291cmNlTWV0YSxcbiAgICBnZXREYXRhU291cmNlLFxuICAgIGdldERhdGFTb3VyY2VNZXRhLFxuICAgIGltcG9ydERhdGFTb3VyY2VQbHVnaW4sXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBpZiAoIXBhZ2VJZCkge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2FkZWREYXRhU291cmNlID0gYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlKHBhZ2VJZCkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlTWV0YShsb2FkZWREYXRhU291cmNlKSk7XG5cbiAgICAgIC8vIGhhdmUgd2UgYWxyZWFkeSBsb2FkZWQgdGhlIHBsdWdpbiB0aGVuIHdlIGNhbiBza2lwIHRoZSBzdGVwcyBiZWxvdz9cbiAgICAgIGlmIChnZXRTdGF0ZSgpLmRhdGFTb3VyY2VTZXR0aW5ncy5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2UoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgcGFnZUlkKTtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNZXRhID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2VNZXRhKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UhLnR5cGUpO1xuICAgICAgY29uc3QgaW1wb3J0ZWRQbHVnaW4gPSBhd2FpdCBkZXBlbmRlbmNpZXMuaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihkYXRhU291cmNlTWV0YSk7XG5cbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQoaW1wb3J0ZWRQbHVnaW4pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQoZXJyKSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3REYXRhU291cmNlID0gKFxuICBkYXRhU291cmNlTmFtZTogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzID0ge1xuICAgIGdldERhdGFzb3VyY2VTcnYsXG4gICAgZ2V0QmFja2VuZFNydixcbiAgfVxuKTogVGh1bmtSZXN1bHQ8dm9pZD4gPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRzQXBpID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldERhdGFzb3VyY2VTcnYoKS5nZXQoZGF0YVNvdXJjZU5hbWUpO1xuXG4gICAgaWYgKCFkc0FwaS50ZXN0RGF0YXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3RhcnRpbmcoKSk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLndpdGhOb0JhY2tlbmRDYWNoZShhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkc0FwaS50ZXN0RGF0YXNvdXJjZSgpO1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3VjY2VlZGVkKHJlc3VsdCkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzVGV4dCwgbWVzc2FnZTogZXJyTWVzc2FnZSwgZGV0YWlscywgZGF0YSB9ID0gZXJyO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJNZXNzYWdlIHx8IGRhdGE/Lm1lc3NhZ2UgfHwgJ0hUVFAgZXJyb3IgJyArIHN0YXR1c1RleHQ7XG5cbiAgICAgICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VGYWlsZWQoeyBtZXNzYWdlLCBkZXRhaWxzIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZXNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlKHVpZDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8UHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gYXdhaXQgZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCh1aWQpO1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZUxvYWRlZChkYXRhU291cmNlKSk7XG4gICAgcmV0dXJuIGRhdGFTb3VyY2U7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZU1ldGEoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcGx1Z2luSW5mbyA9IChhd2FpdCBnZXRQbHVnaW5TZXR0aW5ncyhkYXRhU291cmNlLnR5cGUpKSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbiAgICBjb25zdCBwbHVnaW4gPSBhd2FpdCBpbXBvcnREYXRhU291cmNlUGx1Z2luKHBsdWdpbkluZm8pO1xuICAgIGNvbnN0IGlzQmFja2VuZCA9IHBsdWdpbi5EYXRhU291cmNlQ2xhc3MucHJvdG90eXBlIGluc3RhbmNlb2YgRGF0YVNvdXJjZVdpdGhCYWNrZW5kO1xuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAuLi5wbHVnaW5JbmZvLFxuICAgICAgaXNCYWNrZW5kOiBwbHVnaW5JbmZvLmJhY2tlbmQgfHwgaXNCYWNrZW5kLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChkYXRhU291cmNlTWV0YUxvYWRlZChtZXRhKSk7XG5cbiAgICBwbHVnaW4ubWV0YSA9IG1ldGE7XG4gICAgZGlzcGF0Y2godXBkYXRlTmF2SW5kZXgoYnVpbGROYXZNb2RlbChkYXRhU291cmNlLCBwbHVnaW4pKSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0IGRhdGEgc291cmNlIGJ5IHVpZCBvciBpZCwgaWYgb2xkIGlkIGRldGVjdGVkIGhhbmRsZXMgcmVkaXJlY3RcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPERhdGFTb3VyY2VTZXR0aW5ncz4ge1xuICAvLyBUcnkgZmlyc3Qgd2l0aCB1aWQgYXBpXG4gIHRyeSB7XG4gICAgY29uc3QgYnlVaWQgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzL3VpZC8ke3VpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChieVVpZC5vaykge1xuICAgICAgcmV0dXJuIGJ5VWlkLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxvb2t1cCBkYXRhIHNvdXJjZSBieSB1aWQnLCBlcnIpO1xuICB9XG5cbiAgLy8gdHJ5IGxvb2t1cCBieSBvbGQgZGIgaWRcbiAgY29uc3QgaWQgPSB0eXBlb2YgdWlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHVpZCwgMTApIDogdWlkO1xuICBpZiAoIU51bWJlci5pc05hTihpZCkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8RGF0YVNvdXJjZVNldHRpbmdzPih7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogYC9hcGkvZGF0YXNvdXJjZXMvJHtpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIElmIHRoZSB1aWQgaXMgYSBudW1iZXIsIHRoZW4gdGhpcyBpcyBhIHJlZnJlc2ggb24gb25lIG9mIHRoZSBzZXR0aW5ncyB0YWJzXG4gICAgLy8gYW5kIHdlIGNhbiByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGFcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgdHlwZW9mIHVpZCA9PT0gJ251bWJlcicgJiYgcmVzcG9uc2UuZGF0YS5pZCA9PT0gdWlkKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICAvLyBOb3QgaWRlYWwgdG8gZG8gYSBmdWxsIHBhZ2UgcmVsb2FkIGhlcmUgYnV0IHNvIHRyaWNreSB0byBoYW5kbGUgdGhpc1xuICAgIC8vIG90aGVyd2lzZSBXZSBjYW4gdXBkYXRlIHRoZSBsb2NhdGlvbiB1c2luZyByZWFjdCByb3V0ZXIsIGJ1dCBuZWVkIHRvXG4gICAgLy8gZnVsbHkgcmVsb2FkIHRoZSByb3V0ZSBhcyB0aGUgbmF2IG1vZGVsIHBhZ2UgaW5kZXggaXMgbm90IG1hdGNoaW5nIHdpdGhcbiAgICAvLyB0aGUgdXJsIGluIHRoYXQgY2FzZS4gQW5kIHJlYWN0IHJvdXRlciBoYXMgbm8gd2F5IHRvIHVubW91bnQgcmVtb3VudCBhXG4gICAgLy8gcm91dGVcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2UuZGF0YS5pZC50b1N0cmluZygpID09PSB1aWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb25VdGlsLmFzc3VyZUJhc2VVcmwoYC9kYXRhc291cmNlcy9lZGl0LyR7cmVzcG9uc2UuZGF0YS51aWR9YCk7XG4gICAgICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzOyAvLyBhdm9pZHMgZmxhc2hpbmcgYW4gZXJyb3JcbiAgICB9XG4gIH1cblxuICB0aHJvdyBFcnJvcignQ291bGQgbm90IGZpbmQgZGF0YSBzb3VyY2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERhdGFTb3VyY2UocGx1Z2luOiBEYXRhU291cmNlUGx1Z2luTWV0YSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkRGF0YVNvdXJjZXMoKSk7XG5cbiAgICBjb25zdCBkYXRhU291cmNlcyA9IGdldFN0b3JlKCkuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZXM7XG5cbiAgICBjb25zdCBuZXdJbnN0YW5jZSA9IHtcbiAgICAgIG5hbWU6IHBsdWdpbi5uYW1lLFxuICAgICAgdHlwZTogcGx1Z2luLmlkLFxuICAgICAgYWNjZXNzOiAncHJveHknLFxuICAgICAgaXNEZWZhdWx0OiBkYXRhU291cmNlcy5sZW5ndGggPT09IDAsXG4gICAgfTtcblxuICAgIGlmIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpKSB7XG4gICAgICBuZXdJbnN0YW5jZS5uYW1lID0gZmluZE5ld05hbWUoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2RhdGFzb3VyY2VzJywgbmV3SW5zdGFuY2UpO1xuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcblxuICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcblxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3VsdC5kYXRhc291cmNlLnVpZH1gKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlUGx1Z2lucygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlUGx1Z2luc0xvYWQoKSk7XG4gICAgY29uc3QgcGx1Z2lucyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGx1Z2lucycsIHsgZW5hYmxlZDogMSwgdHlwZTogJ2RhdGFzb3VyY2UnIH0pO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBidWlsZENhdGVnb3JpZXMocGx1Z2lucyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQoeyBwbHVnaW5zLCBjYXRlZ29yaWVzIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURhdGFTb3VyY2UoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCwgZGF0YVNvdXJjZSk7IC8vIGJ5IFVJRCBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2gobG9hZERhdGFTb3VyY2UoZGF0YVNvdXJjZS51aWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURhdGFTb3VyY2UoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2U7XG5cbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL2RhdGFzb3VyY2VzLyR7ZGF0YVNvdXJjZS5pZH1gKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2RhdGFzb3VyY2VzJyk7XG4gIH07XG59XG5cbmludGVyZmFjZSBJdGVtV2l0aE5hbWUge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRXhpdHMoZGF0YVNvdXJjZXM6IEl0ZW1XaXRoTmFtZVtdLCBuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChcbiAgICBkYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2UpID0+IHtcbiAgICAgIHJldHVybiBkYXRhU291cmNlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIC8vIE5lZWQgdG8gbG9vcCB0aHJvdWdoIGN1cnJlbnQgZGF0YSBzb3VyY2VzIHRvIG1ha2Ugc3VyZVxuICAvLyB0aGUgbmFtZSBkb2Vzbid0IGV4aXN0XG4gIHdoaWxlIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5hbWUpKSB7XG4gICAgLy8gSWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZG9lc24ndCBlbmQgd2l0aCAnLXgnXG4gICAgLy8gd2UgY2FuIGFkZCAtMSB0byB0aGUgbmFtZSBhbmQgYmUgZG9uZS5cbiAgICBpZiAoIW5hbWVIYXNTdWZmaXgobmFtZSkpIHtcbiAgICAgIG5hbWUgPSBgJHtuYW1lfS0xYDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZW5kcyB3aXRoICcteCdcbiAgICAgIC8vIHdlIGNhbiB0cnkgdG8gaW5jcmVtZW50IHRoZSBsYXN0IGRpZ2l0IHVudGlsIHRoZSBuYW1lIGlzIHVuaXF1ZVxuXG4gICAgICAvLyByZW1vdmUgdGhlICd4JyBwYXJ0IGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIG5ldyBudW1iZXJcbiAgICAgIG5hbWUgPSBgJHtnZXROZXdOYW1lKG5hbWUpfSR7aW5jcmVtZW50TGFzdERpZ2l0KGdldExhc3REaWdpdChuYW1lKSl9YDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gbmFtZUhhc1N1ZmZpeChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuZW5kc1dpdGgoJy0nLCBuYW1lLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0RGlnaXQobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZUludChuYW1lLnNsaWNlKC0xKSwgMTApO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRMYXN0RGlnaXQoZGlnaXQ6IG51bWJlcikge1xuICByZXR1cm4gaXNOYU4oZGlnaXQpID8gMSA6IGRpZ2l0ICsgMTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSAxKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnkgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10pOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSB7XG4gIGNvbnN0IGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdID0gW1xuICAgIHsgaWQ6ICd0c2RiJywgdGl0bGU6ICdUaW1lIHNlcmllcyBkYXRhYmFzZXMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdsb2dnaW5nJywgdGl0bGU6ICdMb2dnaW5nICYgZG9jdW1lbnQgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAndHJhY2luZycsIHRpdGxlOiAnRGlzdHJpYnV0ZWQgdHJhY2luZycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3NxbCcsIHRpdGxlOiAnU1FMJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnY2xvdWQnLCB0aXRsZTogJ0Nsb3VkJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnZW50ZXJwcmlzZScsIHRpdGxlOiAnRW50ZXJwcmlzZSBwbHVnaW5zJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnaW90JywgdGl0bGU6ICdJbmR1c3RyaWFsICYgSW9UJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnb3RoZXInLCB0aXRsZTogJ090aGVycycsIHBsdWdpbnM6IFtdIH0sXG4gIF0uZmlsdGVyKChpdGVtKSA9PiBpdGVtKTtcblxuICBjb25zdCBjYXRlZ29yeUluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnk+ID0ge307XG4gIGNvbnN0IHBsdWdpbkluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luTWV0YT4gPSB7fTtcbiAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbnMgPSBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTtcblxuICAvLyBidWlsZCBpbmRpY2VzXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGNhdGVnb3J5SW5kZXhbY2F0ZWdvcnkuaWRdID0gY2F0ZWdvcnk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbiA9IGVudGVycHJpc2VQbHVnaW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5pZCk7XG4gICAgLy8gRm9yY2UgY2F0ZWdvcnkgZm9yIGVudGVycHJpc2UgcGx1Z2luc1xuICAgIGlmIChwbHVnaW4uZW50ZXJwcmlzZSB8fCBlbnRlcnByaXNlUGx1Z2luKSB7XG4gICAgICBwbHVnaW4uY2F0ZWdvcnkgPSAnZW50ZXJwcmlzZSc7XG4gICAgICBwbHVnaW4udW5saWNlbnNlZCA9ICFmZWF0dXJlRW5hYmxlZCgnZW50ZXJwcmlzZS5wbHVnaW5zJyk7XG4gICAgICBwbHVnaW4uaW5mby5saW5rcyA9IGVudGVycHJpc2VQbHVnaW4/LmluZm8/LmxpbmtzIHx8IHBsdWdpbi5pbmZvLmxpbmtzO1xuICAgIH1cblxuICAgIC8vIEZpeCBsaW5rIG5hbWVcbiAgICBpZiAocGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgIGZvciAoY29uc3QgbGluayBvZiBwbHVnaW4uaW5mby5saW5rcykge1xuICAgICAgICBsaW5rLm5hbWUgPSAnTGVhcm4gbW9yZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5jYXRlZ29yeSkgfHwgY2F0ZWdvcnlJbmRleFsnb3RoZXInXTtcbiAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAvLyBhZGQgdG8gcGx1Z2luIGluZGV4XG4gICAgcGx1Z2luSW5kZXhbcGx1Z2luLmlkXSA9IHBsdWdpbjtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpblxuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2Nsb3VkJykge1xuICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHBoYW50b20gcGx1Z2luc1xuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2VudGVycHJpc2UnKSB7XG4gICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBlbnRlcnByaXNlUGx1Z2lucykge1xuICAgICAgICBpZiAoIXBsdWdpbkluZGV4W3BsdWdpbi5pZF0pIHtcbiAgICAgICAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRQbHVnaW5zKGNhdGVnb3J5LnBsdWdpbnMpO1xuICB9XG5cbiAgLy8gT25seSBzaG93IGNhdGVnb3JpZXMgd2l0aCBwbHVnaW5zXG4gIHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYy5wbHVnaW5zLmxlbmd0aCA+IDApO1xufVxuXG5mdW5jdGlvbiBzb3J0UGx1Z2lucyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKSB7XG4gIGNvbnN0IHNvcnRpbmdSdWxlczogeyBbaWQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIHByb21ldGhldXM6IDEwMCxcbiAgICBncmFwaGl0ZTogOTUsXG4gICAgbG9raTogOTAsXG4gICAgbXlzcWw6IDgwLFxuICAgIGphZWdlcjogMTAwLFxuICAgIHBvc3RncmVzOiA3OSxcbiAgICBnY2xvdWQ6IC0xLFxuICB9O1xuXG4gIHBsdWdpbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFTb3J0ID0gc29ydGluZ1J1bGVzW2EuaWRdIHx8IDA7XG4gICAgY29uc3QgYlNvcnQgPSBzb3J0aW5nUnVsZXNbYi5pZF0gfHwgMDtcbiAgICBpZiAoYVNvcnQgPiBiU29ydCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYVNvcnQgPCBiU29ydCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IC0xIDogMTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucygpOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdIHtcbiAgcmV0dXJuIFtcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zcGx1bmstZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIFNwbHVuayBsb2dzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zcGx1bmtfbG9nb18xMjgucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1vcmFjbGUtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnT3JhY2xlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIE9yYWNsZSBTUUwnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL29yYWNsZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWR5bmF0cmFjZS1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdEeW5hdHJhY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgRHluYXRyYWNlIGRhdGEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2R5bmF0cmFjZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNlcnZpY2Vub3ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NlcnZpY2VOb3cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTZXJ2aWNlTm93JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zZXJ2aWNlbm93LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZGF0YWRvZy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGF0YURvZyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ0RhdGFEb2cnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2RhdGFkb2cucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1uZXdyZWxpYy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTmV3IFJlbGljIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTmV3IFJlbGljJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9uZXdyZWxpYy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW1vbmdvZGItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ01vbmdvREIgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdNb25nb0RCJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9tb25nb2RiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc25vd2ZsYWtlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTbm93Zmxha2UgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTbm93Zmxha2UnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3Nub3dmbGFrZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXdhdmVmcm9udC1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2F2ZWZyb250IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnV2F2ZWZyb250JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy93YXZlZnJvbnQuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZGxvcGVzNy1hcHBkeW5hbWljcy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwRHluYW1pY3MgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdBcHBEeW5hbWljcycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvYXBwZHluYW1pY3Muc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYXBoYW5hLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTQVAgSEFOQcKuIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU0FQIEhBTkHCricsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FwX2hhbmEucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1ob25leWNvbWItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hvbmV5Y29tYiBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSG9uZXljb21iJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9ob25leWNvbWIucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYWxlc2ZvcmNlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTYWxlc2ZvcmNlIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTYWxlc2ZvcmNlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zYWxlc2ZvcmNlLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtamlyYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSmlyYSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSmlyYScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvamlyYV9sb2dvLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZ2l0bGFiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdHaXRMYWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0dpdExhYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZ2l0bGFiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLW1vbml0b3JpbmctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NpZ25hbEZ4IGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTcGx1bmsgSW5mcmFzdHJ1Y3R1cmUgTW9uaXRvcmluZycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2lnbmFsZngtbG9nby5zdmcnLFxuICAgIH0pLFxuICBdO1xufVxuXG5mdW5jdGlvbiBnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogJ2djbG91ZCcsXG4gICAgbmFtZTogJ0dyYWZhbmEgQ2xvdWQnLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0hvc3RlZCBHcmFwaGl0ZSwgUHJvbWV0aGV1cywgYW5kIExva2knLFxuICAgICAgbG9nb3M6IHsgc21hbGw6ICdwdWJsaWMvaW1nL2dyYWZhbmFfaWNvbi5zdmcnLCBsYXJnZTogJ2FzZCcgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ3JhZmFuYS5jb20vcHJvZHVjdHMvY2xvdWQvJyxcbiAgICAgICAgICBuYW1lOiAnTGVhcm4gbW9yZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuXG5pbnRlcmZhY2UgR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltZ1VybDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQaGFudG9tUGx1Z2luKG9wdGlvbnM6IEdldFBoYW50b21QbHVnaW5PcHRpb25zKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiBvcHRpb25zLmlkLFxuICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBsb2dvczogeyBzbWFsbDogb3B0aW9ucy5pbWdVcmwsIGxhcmdlOiBvcHRpb25zLmltZ1VybCB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBjb25maWcucGx1Z2luQ2F0YWxvZ1VSTCArIG9wdGlvbnMuaWQsXG4gICAgICAgICAgbmFtZTogJ0luc3RhbGwgbm93JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlU2V0dGluZ3MsIFBsdWdpblR5cGUsIFBsdWdpbkluY2x1ZGUsIE5hdk1vZGVsLCBOYXZNb2RlbEl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IFByb0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1Byb0JhZGdlJztcbmltcG9ydCB7IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnLi4vc2V0dGluZ3MvUGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgaGlnaGxpZ2h0VHJpYWwgfSBmcm9tICcuLi8uLi9hZG1pbi91dGlscyc7XG5cbmNvbnN0IGxvYWRpbmdEU1R5cGUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncywgcGx1Z2luOiBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbik6IE5hdk1vZGVsSXRlbSB7XG4gIGNvbnN0IHBsdWdpbk1ldGEgPSBwbHVnaW4ubWV0YTtcbiAgY29uc3QgaGlnaGxpZ2h0c0VuYWJsZWQgPSBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4gIGNvbnN0IG5hdk1vZGVsOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaW1nOiBwbHVnaW5NZXRhLmluZm8ubG9nb3MubGFyZ2UsXG4gICAgaWQ6ICdkYXRhc291cmNlLScgKyBkYXRhU291cmNlLnVpZCxcbiAgICBzdWJUaXRsZTogYFR5cGU6ICR7cGx1Z2luTWV0YS5uYW1lfWAsXG4gICAgdXJsOiAnJyxcbiAgICB0ZXh0OiBkYXRhU291cmNlLm5hbWUsXG4gICAgYnJlYWRjcnVtYnM6IFt7IHRpdGxlOiAnRGF0YSBTb3VyY2VzJywgdXJsOiAnZGF0YXNvdXJjZXMnIH1dLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGljb246ICdzbGlkZXJzLXYtYWx0JyxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXNldHRpbmdzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgICAgdGV4dDogJ1NldHRpbmdzJyxcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9gLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGlmIChwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHRleHQ6IHBhZ2UudGl0bGUsXG4gICAgICAgIGljb246IHBhZ2UuaWNvbixcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS8/cGFnZT0ke3BhZ2UuaWR9YCxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXBhZ2UtJHtwYWdlLmlkfWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAocGx1Z2luTWV0YS5pbmNsdWRlcyAmJiBoYXNEYXNoYm9hcmRzKHBsdWdpbk1ldGEuaW5jbHVkZXMpICYmIGNvbnRleHRTcnYuaGFzUm9sZSgnQWRtaW4nKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBpY29uOiAnYXBwcycsXG4gICAgICBpZDogYGRhdGFzb3VyY2UtZGFzaGJvYXJkcy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICB0ZXh0OiAnRGFzaGJvYXJkcycsXG4gICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2Rhc2hib2FyZHNgLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaXNMb2FkaW5nTmF2ID0gZGF0YVNvdXJjZS50eXBlID09PSBsb2FkaW5nRFNUeXBlO1xuXG4gIGNvbnN0IHBlcm1pc3Npb25zRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1wZXJtaXNzaW9ucy1iYWRnZSc7XG4gIGNvbnN0IGRzUGVybWlzc2lvbnM6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdsb2NrJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtcGVybWlzc2lvbnMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdQZXJtaXNzaW9ucycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9wZXJtaXNzaW9uc2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGRzUGVybWlzc2lvbnMudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2RzcGVybWlzc2lvbnMnKSkge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCkpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGRzUGVybWlzc2lvbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uZHNQZXJtaXNzaW9ucyxcbiAgICAgIHVybDogZHNQZXJtaXNzaW9ucy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhbmFseXRpY3NFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLWluc2lnaHRzLWJhZGdlJztcbiAgY29uc3QgYW5hbHl0aWNzOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnaW5mby1jaXJjbGUnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1pbnNpZ2h0cy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0luc2lnaHRzJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2luc2lnaHRzYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgYW5hbHl0aWNzLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnYW5hbHl0aWNzJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChhbmFseXRpY3MpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5hbmFseXRpY3MsXG4gICAgICB1cmw6IGFuYWx5dGljcy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2FjaGluZ0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtcXVlcnktY2FjaGluZy1iYWRnZSc7XG5cbiAgY29uc3QgY2FjaGluZzogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2RhdGFiYXNlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtY2FjaGUtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdDYWNoZScsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9jYWNoZWAsXG4gICAgaGlkZUZyb21UYWJzOiAhcGx1Z2luTWV0YS5pc0JhY2tlbmQgfHwgIWNvbmZpZy5jYWNoaW5nLmVuYWJsZWQsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGNhY2hpbmcudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnY2FjaGluZycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goY2FjaGluZyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmNhY2hpbmcsXG4gICAgICB1cmw6IGNhY2hpbmcudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTmF2KG1haW46IE5hdk1vZGVsSXRlbSwgcGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgbGV0IG5vZGU6IE5hdk1vZGVsSXRlbSA9IHsgdGV4dDogJycgfTtcblxuICAvLyBmaW5kIGFjdGl2ZSBwYWdlXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgbWFpbi5jaGlsZHJlbiEpIHtcbiAgICBpZiAoY2hpbGQuaWQhLmluZGV4T2YocGFnZU5hbWUpID4gMCkge1xuICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbixcbiAgICBub2RlOiBub2RlISxcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTG9hZGluZ05hdihwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0gYnVpbGROYXZNb2RlbChcbiAgICB7XG4gICAgICBhY2Nlc3M6ICcnLFxuICAgICAgYmFzaWNBdXRoOiBmYWxzZSxcbiAgICAgIGJhc2ljQXV0aFVzZXI6ICcnLFxuICAgICAgYmFzaWNBdXRoUGFzc3dvcmQ6ICcnLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIGRhdGFiYXNlOiAnJyxcbiAgICAgIGlkOiAxLFxuICAgICAgdWlkOiAneCcsXG4gICAgICBpc0RlZmF1bHQ6IGZhbHNlLFxuICAgICAganNvbkRhdGE6IHsgYXV0aFR5cGU6ICdjcmVkZW50aWFscycsIGRlZmF1bHRSZWdpb246ICdldS13ZXN0LTInIH0sXG4gICAgICBuYW1lOiAnTG9hZGluZycsXG4gICAgICBvcmdJZDogMSxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHR5cGU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTmFtZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVMb2dvVXJsOiAncHVibGljL2ltZy9pY24tZGF0YXNvdXJjZS5zdmcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgc2VjdXJlSnNvbkZpZWxkczoge30sXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICBsaW5rczogW3sgbmFtZTogJycsIHVybDogJycgfV0sXG4gICAgICAgICAgbG9nb3M6IHtcbiAgICAgICAgICAgIGxhcmdlOiAnJyxcbiAgICAgICAgICAgIHNtYWxsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgICB2ZXJzaW9uOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZXM6IFtdLFxuICAgICAgICBtb2R1bGU6ICcnLFxuICAgICAgICBiYXNlVXJsOiAnJyxcbiAgICAgIH0sXG4gICAgfSBhcyBhbnlcbiAgKTtcblxuICByZXR1cm4gZ2V0RGF0YVNvdXJjZU5hdihtYWluLCBwYWdlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0Rhc2hib2FyZHMoaW5jbHVkZXM6IFBsdWdpbkluY2x1ZGVbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGluY2x1ZGVzLmZpbmQoKGluY2x1ZGUpID0+IHtcbiAgICAgIHJldHVybiBpbmNsdWRlLnR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICAgIH0pICE9PSB1bmRlZmluZWRcbiAgKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIFVybFF1ZXJ5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VzU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRhc291cmNlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlcyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5uYW1lKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UuZGF0YWJhc2UpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS50eXBlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVBsdWdpbnMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLmRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnBsdWdpbnMuZmlsdGVyKCh0eXBlOiBEYXRhU291cmNlUGx1Z2luTWV0YSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHR5cGUubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2UgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIGRhdGFTb3VyY2VJZDogVXJsUXVlcnlWYWx1ZSk6IERhdGFTb3VyY2VTZXR0aW5ncyA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlLnVpZCA9PT0gZGF0YVNvdXJjZUlkKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2U7XG4gIH1cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlTWV0YSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgdHlwZTogc3RyaW5nKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZU1ldGEuaWQgPT09IHR5cGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZU1ldGE7XG4gIH1cblxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzQ291bnQgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzQ291bnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYWRnZSwgQmFkZ2VQcm9wcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFBsdWdpblN0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHN0YXRlPzogUGx1Z2luU3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBQbHVnaW5TdGF0ZUluZm86IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZ2V0RmVhdHVyZVN0YXRlSW5mbyhwcm9wcy5zdGF0ZSk7XG5cbiAgaWYgKCFkaXNwbGF5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gPEJhZGdlIGNvbG9yPXtkaXNwbGF5LmNvbG9yfSB0aXRsZT17ZGlzcGxheS50b29sdGlwfSB0ZXh0PXtkaXNwbGF5LnRleHR9IGljb249e2Rpc3BsYXkuaWNvbn0gLz47XG59O1xuXG5mdW5jdGlvbiBnZXRGZWF0dXJlU3RhdGVJbmZvKHN0YXRlPzogUGx1Z2luU3RhdGUpOiBCYWRnZVByb3BzIHwgbnVsbCB7XG4gIHN3aXRjaCAoc3RhdGUpIHtcbiAgICBjYXNlIFBsdWdpblN0YXRlLmRlcHJlY2F0ZWQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiAnRGVwcmVjYXRlZCcsXG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZWAsXG4gICAgICB9O1xuICAgIGNhc2UgUGx1Z2luU3RhdGUuYWxwaGE6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiAnQWxwaGEnLFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGV4cGVyaW1lbnRhbCBhbmQgZnV0dXJlIHVwZGF0ZXMgbWlnaHQgbm90IGJlIGJhY2t3YXJkIGNvbXBhdGlibGVgLFxuICAgICAgfTtcbiAgICBjYXNlIFBsdWdpblN0YXRlLmJldGE6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiAnQmV0YScsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgY2xvc2UgdG8gY29tcGxldGUgYnV0IG5vdCBmdWxseSB0ZXN0ZWRgLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb25maWciLCJpc1RyaWFsIiwiZXhwaXJ5IiwibGljZW5zZUluZm8iLCJ0cmlhbEV4cGlyeSIsImhpZ2hsaWdodFRyaWFsIiwiZmVhdHVyZVRvZ2dsZXMiLCJmZWF0dXJlSGlnaGxpZ2h0cyIsIlJlYWN0IiwiSW5saW5lRm9ybUxhYmVsIiwiTGVnYWN5Rm9ybXMiLCJzZWxlY3RvcnMiLCJJbnB1dCIsIlN3aXRjaCIsIkJhc2ljU2V0dGluZ3MiLCJkYXRhU291cmNlTmFtZSIsImlzRGVmYXVsdCIsIm9uRGVmYXVsdENoYW5nZSIsIm9uTmFtZUNoYW5nZSIsIm1hcmdpblJpZ2h0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhZ2VzIiwiRGF0YVNvdXJjZSIsIm5hbWUiLCJjaGVja2VkIiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJjb250ZXh0U3J2IiwiQnV0dG9uUm93IiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIm9uRGVsZXRlIiwib25TdWJtaXQiLCJvblRlc3QiLCJleHBsb3JlVXJsIiwiY2FuRXhwbG9yZURhdGFTb3VyY2VzIiwiaGFzUGVybWlzc2lvbiIsIkRhdGFTb3VyY2VzRXhwbG9yZSIsImhpc3RvcnkiLCJiYWNrIiwiZGVsZXRlIiwic2F2ZUFuZFRlc3QiLCJBbGVydCIsIkdyYWZhbmFFZGl0aW9uIiwiTG9jYWxTdG9yYWdlVmFsdWVQcm92aWRlciIsIkxPQ0FMX1NUT1JBR0VfS0VZIiwiQ2xvdWRJbmZvQm94IiwiZGF0YVNvdXJjZSIsIm1haW5EUyIsImV4dHJhRFMiLCJyZWFkT25seSIsInZlcnNpb24iLCJidWlsZEluZm8iLCJlZGl0aW9uIiwiT3BlblNvdXJjZSIsInR5cGUiLCJpc0Rpc21pc3NlZCIsIm9uRGlzbWlzcyIsIlB1cmVDb21wb25lbnQiLCJQYWdlIiwiUGx1Z2luU2V0dGluZ3MiLCJhcHBFdmVudHMiLCJnZXREYXRhU291cmNlIiwiZ2V0RGF0YVNvdXJjZU1ldGEiLCJkZWxldGVEYXRhU291cmNlIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5ncyIsImxvYWREYXRhU291cmNlIiwidGVzdERhdGFTb3VyY2UiLCJ1cGRhdGVEYXRhU291cmNlIiwiZ2V0TmF2TW9kZWwiLCJ1cmxVdGlsIiwiZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYiLCJidWlsZE5hdk1vZGVsIiwiZ2V0RGF0YVNvdXJjZU5hdiIsIlBsdWdpblN0YXRlSW5mbyIsImRhdGFTb3VyY2VMb2FkZWQiLCJzZXREYXRhU291cmNlTmFtZSIsInNldElzRGVmYXVsdCIsImNvbm5lY3QiLCJjbGVhblVwQWN0aW9uIiwiU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9wcyIsImRhdGFTb3VyY2VJZCIsIm1hdGNoIiwicGFyYW1zIiwidWlkIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJkYXRhU291cmNlcyIsInBsdWdpbiIsImxvYWRFcnJvciIsImxvYWRpbmciLCJ0ZXN0aW5nU3RhdHVzIiwiZGF0YVNvdXJjZVNldHRpbmdzIiwicGFnZSIsImdldCIsIm5hdiIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJkYXRhU291cmNlTWV0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkRhdGFTb3VyY2VTZXR0aW5nc1BhZ2UiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1Ymxpc2giLCJ0aXRsZSIsInRleHQiLCJ5ZXNUZXh0IiwiaWNvbiIsIm9uQ29uZmlybSIsImNvbmZpcm1EZWxldGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic3RhdGVTZWxlY3RvciIsImlzUmVhZE9ubHkiLCJyZW5kZXJJc1JlYWRPbmx5TWVzc2FnZSIsInJlbmRlck1pc3NpbmdFZGl0UmlnaHRzTWVzc2FnZSIsImhhc0RhdGFTb3VyY2UiLCJpZCIsIm9uTmF2aWdhdGVUb0V4cGxvcmUiLCJleHBsb3JlU3RhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YXNvdXJjZSIsImNvbnRleHQiLCJ1cmwiLCJyZW5kZXJVcmwiLCJsZWZ0IiwicmVuZGVyTG9hZEVycm9yIiwiY2FuRGVsZXRlRGF0YVNvdXJjZSIsImhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhIiwiRGF0YVNvdXJjZXNEZWxldGUiLCJub2RlIiwic3ViVGl0bGUiLCJtYWluIiwicmVuZGVyQ29uZmlnUGFnZUJvZHkiLCJjb25maWdQYWdlcyIsInAiLCJyZW5kZXJBbGVydERldGFpbHMiLCJkZXRhaWxzIiwibWVzc2FnZSIsInZlcmJvc2VNZXNzYWdlIiwid2hpdGVTcGFjZSIsInJlbmRlclNldHRpbmdzIiwiY2FuV3JpdGVEYXRhU291cmNlIiwiRGF0YVNvdXJjZXNXcml0ZSIsIm9uTW9kZWxDaGFuZ2UiLCJzdGF0dXMiLCJhbGVydCIsInJlbmRlciIsImNsb25lRGVlcCIsImdldEFuZ3VsYXJMb2FkZXIiLCJjb25zdHJ1Y3RvciIsInNjb3BlUHJvcHMiLCJjdHJsIiwiZGF0YXNvdXJjZU1ldGEiLCJjdXJyZW50Iiwib25Nb2RlbENoYW5nZWQiLCJiaW5kIiwiZWxlbWVudCIsImNvbXBvbmVudHMiLCJDb25maWdFZGl0b3IiLCJsb2FkZXIiLCJ0ZW1wbGF0ZSIsImNvbXBvbmVudCIsImxvYWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJkaWdlc3QiLCJkZXN0cm95IiwiY3JlYXRlRWxlbWVudCIsIm9wdGlvbnMiLCJvbk9wdGlvbnNDaGFuZ2UiLCJsYXN0VmFsdWVGcm9tIiwibG9jYXRpb25VdGlsIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwibG9jYXRpb25TZXJ2aWNlIiwidXBkYXRlTmF2SW5kZXgiLCJnZXRCYWNrZW5kU3J2IiwiZ2V0RGF0YXNvdXJjZVNydiIsImltcG9ydERhdGFTb3VyY2VQbHVnaW4iLCJnZXRQbHVnaW5TZXR0aW5ncyIsImJ1aWxkQ2F0ZWdvcmllcyIsImRhdGFTb3VyY2VNZXRhTG9hZGVkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQiLCJkYXRhU291cmNlc0xvYWRlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkIiwidGVzdERhdGFTb3VyY2VGYWlsZWQiLCJ0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nIiwidGVzdERhdGFTb3VyY2VTdWNjZWVkZWQiLCJhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSIsInBhZ2VJZCIsImRlcGVuZGVuY2llcyIsImxvYWREYXRhU291cmNlTWV0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJFcnJvciIsImxvYWRlZERhdGFTb3VyY2UiLCJpbXBvcnRlZFBsdWdpbiIsImVyciIsImRzQXBpIiwidGVzdERhdGFzb3VyY2UiLCJ3aXRoTm9CYWNrZW5kQ2FjaGUiLCJyZXN1bHQiLCJzdGF0dXNUZXh0IiwiZXJyTWVzc2FnZSIsImRhdGEiLCJsb2FkRGF0YVNvdXJjZXMiLCJyZXNwb25zZSIsImdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQiLCJwbHVnaW5JbmZvIiwiaXNCYWNrZW5kIiwiRGF0YVNvdXJjZUNsYXNzIiwicHJvdG90eXBlIiwibWV0YSIsImJhY2tlbmQiLCJieVVpZCIsImZldGNoIiwibWV0aG9kIiwic2hvd0Vycm9yQWxlcnQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwidG9TdHJpbmciLCJ3aW5kb3ciLCJocmVmIiwiYXNzdXJlQmFzZVVybCIsImFkZERhdGFTb3VyY2UiLCJnZXRTdG9yZSIsIm5ld0luc3RhbmNlIiwiYWNjZXNzIiwibGVuZ3RoIiwibmFtZUV4aXRzIiwiZmluZE5ld05hbWUiLCJwb3N0IiwicmVsb2FkIiwiZmV0Y2hVc2VyUGVybWlzc2lvbnMiLCJwdXNoIiwibG9hZERhdGFTb3VyY2VQbHVnaW5zIiwicGx1Z2lucyIsImVuYWJsZWQiLCJjYXRlZ29yaWVzIiwicHV0IiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJuYW1lSGFzU3VmZml4IiwiZ2V0TmV3TmFtZSIsImluY3JlbWVudExhc3REaWdpdCIsImdldExhc3REaWdpdCIsImVuZHNXaXRoIiwic2xpY2UiLCJkaWdpdCIsIlBsdWdpblR5cGUiLCJmZWF0dXJlRW5hYmxlZCIsIml0ZW0iLCJjYXRlZ29yeUluZGV4IiwicGx1Z2luSW5kZXgiLCJlbnRlcnByaXNlUGx1Z2lucyIsImdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucyIsImNhdGVnb3J5IiwiZW50ZXJwcmlzZVBsdWdpbiIsImZpbmQiLCJlbnRlcnByaXNlIiwidW5saWNlbnNlZCIsImluZm8iLCJsaW5rcyIsImxpbmsiLCJnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luIiwic29ydFBsdWdpbnMiLCJjIiwic29ydGluZ1J1bGVzIiwicHJvbWV0aGV1cyIsImdyYXBoaXRlIiwibG9raSIsIm15c3FsIiwiamFlZ2VyIiwicG9zdGdyZXMiLCJnY2xvdWQiLCJzb3J0IiwiYSIsImIiLCJhU29ydCIsImJTb3J0IiwiZ2V0UGhhbnRvbVBsdWdpbiIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwibW9kdWxlIiwiYmFzZVVybCIsImxvZ29zIiwic21hbGwiLCJsYXJnZSIsImF1dGhvciIsInNjcmVlbnNob3RzIiwidXBkYXRlZCIsInBsdWdpbkNhdGFsb2dVUkwiLCJQcm9CYWRnZSIsImxvYWRpbmdEU1R5cGUiLCJwbHVnaW5NZXRhIiwiaGlnaGxpZ2h0c0VuYWJsZWQiLCJpbWciLCJicmVhZGNydW1icyIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaW5jbHVkZXMiLCJoYXNEYXNoYm9hcmRzIiwiaGFzUm9sZSIsImlzTG9hZGluZ05hdiIsInBlcm1pc3Npb25zRXhwZXJpbWVudElkIiwiZHNQZXJtaXNzaW9ucyIsInRhYlN1ZmZpeCIsImV4cGVyaW1lbnRJZCIsImV2ZW50VmFyaWFudCIsIkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkIiwiYW5hbHl0aWNzRXhwZXJpbWVudElkIiwiYW5hbHl0aWNzIiwiY2FjaGluZ0V4cGVyaW1lbnRJZCIsImNhY2hpbmciLCJoaWRlRnJvbVRhYnMiLCJwYWdlTmFtZSIsImNoaWxkIiwiaW5kZXhPZiIsImJhc2ljQXV0aCIsImJhc2ljQXV0aFVzZXIiLCJiYXNpY0F1dGhQYXNzd29yZCIsIndpdGhDcmVkZW50aWFscyIsImRhdGFiYXNlIiwianNvbkRhdGEiLCJhdXRoVHlwZSIsImRlZmF1bHRSZWdpb24iLCJvcmdJZCIsInBhc3N3b3JkIiwidHlwZU5hbWUiLCJ0eXBlTG9nb1VybCIsInVzZXIiLCJzZWN1cmVKc29uRmllbGRzIiwiaW5jbHVkZSIsInVuZGVmaW5lZCIsImdldERhdGFTb3VyY2VzIiwicmVnZXgiLCJSZWdFeHAiLCJzZWFyY2hRdWVyeSIsInRlc3QiLCJnZXREYXRhU291cmNlUGx1Z2lucyIsImRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IiwiZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwibGF5b3V0TW9kZSIsImdldERhdGFTb3VyY2VzQ291bnQiLCJkYXRhU291cmNlc0NvdW50IiwiQmFkZ2UiLCJQbHVnaW5TdGF0ZSIsImRpc3BsYXkiLCJnZXRGZWF0dXJlU3RhdGVJbmZvIiwiY29sb3IiLCJ0b29sdGlwIiwiZGVwcmVjYXRlZCIsImFscGhhIiwiYmV0YSJdLCJzb3VyY2VSb290IjoiIn0=
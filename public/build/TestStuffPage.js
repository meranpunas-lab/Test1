"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TestStuffPage"],{

/***/ "./public/app/core/components/PluginHelp/PluginHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginHelp": () => (/* binding */ PluginHelp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _h2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PluginHelp extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isError: false,
      isLoading: false,
      help: ''
    });

    _defineProperty(this, "loadHelp", () => {
      const {
        plugin,
        type
      } = this.props;
      this.setState({
        isLoading: true
      });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get(`/api/plugins/${plugin.id}/markdown/${type}`).then(response => {
        const helpHtml = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.renderMarkdown)(response);

        if (response === '' && type === 'help') {
          this.setState({
            isError: false,
            isLoading: false,
            help: this.constructPlaceholderInfo()
          });
        } else {
          this.setState({
            isError: false,
            isLoading: false,
            help: helpHtml
          });
        }
      }).catch(() => {
        this.setState({
          isError: true,
          isLoading: false
        });
      });
    });
  }

  componentDidMount() {
    this.loadHelp();
  }

  constructPlaceholderInfo() {
    return 'No plugin help or readme markdown file was found';
  }

  render() {
    const {
      type
    } = this.props;
    const {
      isError,
      isLoading,
      help
    } = this.state;

    if (isLoading) {
      return _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        children: "Loading help..."
      }));
    }

    if (isError) {
      return _h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        children: "'Error occurred when loading help'"
      }));
    }

    if (type === 'panel_help' && help === '') {}

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "markdown-html",
      dangerouslySetInnerHTML: {
        __html: help
      }
    });
  }

}

/***/ }),

/***/ "./public/app/features/query/components/QueryEditorRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorRows": () => (/* binding */ QueryEditorRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _QueryEditorRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries
 // Types






class QueryEditorRows extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onRemoveQuery", query => {
      this.props.onQueriesChange(this.props.queries.filter(item => item !== query));
    });

    _defineProperty(this, "onDragStart", result => {
      const {
        queries,
        dsSettings
      } = this.props;
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)('query_row_reorder_started', {
        startIndex: result.source.index,
        numberOfQueries: queries.length,
        datasourceType: dsSettings.type
      });
    });

    _defineProperty(this, "onDragEnd", result => {
      const {
        queries,
        onQueriesChange,
        dsSettings
      } = this.props;

      if (!result || !result.destination) {
        return;
      }

      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      if (startIndex === endIndex) {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)('query_row_reorder_canceled', {
          startIndex,
          endIndex,
          numberOfQueries: queries.length,
          datasourceType: dsSettings.type
        });
        return;
      }

      const update = Array.from(queries);
      const [removed] = update.splice(startIndex, 1);
      update.splice(endIndex, 0, removed);
      onQueriesChange(update);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)('query_row_reorder_ended', {
        startIndex,
        endIndex,
        numberOfQueries: queries.length,
        datasourceType: dsSettings.type
      });
    });
  }

  onChangeQuery(query, index) {
    const {
      queries,
      onQueriesChange
    } = this.props; // update query in array

    onQueriesChange(queries.map((item, itemIndex) => {
      if (itemIndex === index) {
        return query;
      }

      return item;
    }));
  }

  onDataSourceChange(dataSource, index) {
    const {
      queries,
      onQueriesChange
    } = this.props;
    onQueriesChange(queries.map((item, itemIndex) => {
      if (itemIndex !== index) {
        return item;
      }

      if (item.datasource) {
        const previous = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().getInstanceSettings(item.datasource);

        if ((previous === null || previous === void 0 ? void 0 : previous.type) === dataSource.type) {
          return Object.assign({}, item, {
            datasource: {
              uid: dataSource.uid
            }
          });
        }
      }

      return {
        refId: item.refId,
        hide: item.hide,
        datasource: {
          uid: dataSource.uid
        }
      };
    }));
  }

  render() {
    const {
      dsSettings,
      data,
      queries,
      app,
      history,
      eventBus
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.DragDropContext, {
      onDragStart: this.onDragStart,
      onDragEnd: this.onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Droppable, {
        droppableId: "transformations-list",
        direction: "vertical",
        children: provided => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", Object.assign({
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [queries.map((query, index) => {
              const dataSourceSettings = getDataSourceSettings(query, dsSettings);
              const onChangeDataSourceSettings = dsSettings.meta.mixed ? settings => this.onDataSourceChange(settings, index) : undefined;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_QueryEditorRow__WEBPACK_IMPORTED_MODULE_1__.QueryEditorRow, {
                id: query.refId,
                index: index,
                data: data,
                query: query,
                dataSource: dataSourceSettings,
                onChangeDataSource: onChangeDataSourceSettings,
                onChange: query => this.onChangeQuery(query, index),
                onRemoveQuery: this.onRemoveQuery,
                onAddQuery: this.props.onAddQuery,
                onRunQuery: this.props.onRunQueries,
                queries: queries,
                app: app,
                history: history,
                eventBus: eventBus
              }, query.refId);
            }), provided.placeholder]
          }));
        }
      })
    });
  }

}

const getDataSourceSettings = (query, groupSettings) => {
  if (!query.datasource) {
    return groupSettings;
  }

  const querySettings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().getInstanceSettings(query.datasource);
  return querySettings || groupSettings;
};

/***/ }),

/***/ "./public/app/features/query/components/QueryGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryGroup": () => (/* binding */ QueryGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _QueryEditorRows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/query/components/QueryEditorRows.tsx");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_components_PluginHelp_PluginHelp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/PluginHelp/PluginHelp.tsx");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _QueryGroupOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/query/components/QueryGroupOptions.tsx");
/* harmony import */ var app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/dashboard/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _QueryActionComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/query/components/QueryActionComponent.ts");
/* harmony import */ var _state_updateQueries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/query/state/updateQueries.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries
 // Components



 // Services


 // Types














class QueryGroup extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "backendSrv", app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__.backendSrv);

    _defineProperty(this, "dataSourceSrv", (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)());

    _defineProperty(this, "querySubscription", null);

    _defineProperty(this, "state", {
      isLoadingHelp: false,
      helpContent: null,
      isPickerOpen: false,
      isAddingMixed: false,
      isHelpOpen: false,
      scrollTop: 0,
      queries: [],
      data: {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.LoadingState.NotStarted,
        series: [],
        timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getDefaultTimeRange)()
      }
    });

    _defineProperty(this, "onChangeDataSource", async newSettings => {
      const {
        dsSettings
      } = this.state;
      const currentDS = dsSettings ? await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().get(dsSettings.uid) : undefined;
      const nextDS = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().get(newSettings.uid);
      const queries = await (0,_state_updateQueries__WEBPACK_IMPORTED_MODULE_15__.updateQueries)(nextDS, this.state.queries, currentDS);
      const dataSource = await this.dataSourceSrv.get(newSettings.name);
      this.onChange({
        queries,
        dataSource: {
          name: newSettings.name,
          uid: newSettings.uid,
          type: newSettings.meta.id,
          default: newSettings.isDefault
        }
      });
      this.setState({
        queries,
        dataSource: dataSource,
        dsSettings: newSettings
      });
    });

    _defineProperty(this, "onAddQueryClick", () => {
      const {
        queries
      } = this.state;
      this.onQueriesChange((0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_8__.addQuery)(queries, this.newQuery()));
      this.onScrollBottom();
    });

    _defineProperty(this, "onAddExpressionClick", () => {
      this.onQueriesChange((0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_8__.addQuery)(this.state.queries, app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_9__.dataSource.newQuery()));
      this.onScrollBottom();
    });

    _defineProperty(this, "onScrollBottom", () => {
      this.setState({
        scrollTop: 1000
      });
    });

    _defineProperty(this, "onUpdateAndRun", options => {
      this.props.onOptionsChange(options);
      this.props.onRunQueries();
    });

    _defineProperty(this, "onOpenHelp", () => {
      this.setState({
        isHelpOpen: true
      });
    });

    _defineProperty(this, "onCloseHelp", () => {
      this.setState({
        isHelpOpen: false
      });
    });

    _defineProperty(this, "renderMixedPicker", () => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, {
        mixed: false,
        onChange: this.onAddMixedQuery,
        current: null,
        autoFocus: true,
        variables: true,
        onBlur: this.onMixedPickerBlur,
        openMenuOnFocus: true
      });
    });

    _defineProperty(this, "onAddMixedQuery", datasource => {
      this.onAddQuery({
        datasource: datasource.name
      });
      this.setState({
        isAddingMixed: false,
        scrollTop: this.state.scrollTop + 10000
      });
    });

    _defineProperty(this, "onMixedPickerBlur", () => {
      this.setState({
        isAddingMixed: false
      });
    });

    _defineProperty(this, "onAddQuery", query => {
      const {
        dsSettings,
        queries
      } = this.state;
      this.onQueriesChange((0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_8__.addQuery)(queries, query, {
        type: dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.type,
        uid: dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.uid
      }));
      this.onScrollBottom();
    });

    _defineProperty(this, "setScrollTop", ({
      scrollTop
    }) => {
      this.setState({
        scrollTop: scrollTop
      });
    });

    _defineProperty(this, "onQueriesChange", queries => {
      this.onChange({
        queries
      });
      this.setState({
        queries
      });
    });
  }

  async componentDidMount() {
    const {
      queryRunner,
      options
    } = this.props;
    this.querySubscription = queryRunner.getData({
      withTransforms: false,
      withFieldConfig: false
    }).subscribe({
      next: data => this.onPanelDataUpdate(data)
    });

    try {
      const ds = await this.dataSourceSrv.get(options.dataSource);
      const dsSettings = this.dataSourceSrv.getInstanceSettings(options.dataSource);
      const defaultDataSource = await this.dataSourceSrv.get();
      const datasource = ds.getRef();
      const queries = options.queries.map(q => q.datasource ? q : Object.assign({}, q, {
        datasource
      }));
      this.setState({
        queries,
        dataSource: ds,
        dsSettings,
        defaultDataSource
      });
    } catch (error) {
      console.log('failed to load data source', error);
    }
  }

  componentWillUnmount() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
      this.querySubscription = null;
    }
  }

  onPanelDataUpdate(data) {
    this.setState({
      data
    });
  }

  newQuery() {
    const {
      dsSettings,
      defaultDataSource
    } = this.state;
    const ds = !(dsSettings !== null && dsSettings !== void 0 && dsSettings.meta.mixed) ? dsSettings : defaultDataSource;
    return {
      datasource: {
        uid: ds === null || ds === void 0 ? void 0 : ds.uid,
        type: ds === null || ds === void 0 ? void 0 : ds.type
      }
    };
  }

  onChange(changedProps) {
    this.props.onOptionsChange(Object.assign({}, this.props.options, changedProps));
  }

  renderTopSection(styles) {
    const {
      onOpenQueryInspector,
      options
    } = this.props;
    const {
      dataSource,
      data
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: styles.dataSourceRow,
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
          htmlFor: "data-source-picker",
          width: 'auto',
          children: "Data source"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: styles.dataSourceRowItem,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, {
            onChange: this.onChangeDataSource,
            current: options.dataSource,
            metrics: true,
            mixed: true,
            dashboard: true,
            variables: true
          })
        }), dataSource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.dataSourceRowItem,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              icon: "question-circle",
              title: "Open data source help",
              onClick: this.onOpenHelp
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.dataSourceRowItemOptions,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_QueryGroupOptions__WEBPACK_IMPORTED_MODULE_11__.QueryGroupOptionsEditor, {
              options: options,
              dataSource: dataSource,
              data: data,
              onChange: this.onUpdateAndRun
            })
          }), onOpenQueryInspector && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.dataSourceRowItem,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              onClick: onOpenQueryInspector,
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_10__.selectors.components.QueryTab.queryInspectorButton,
              children: "Query inspector"
            })
          })]
        })]
      })
    });
  }

  renderQueries(dsSettings) {
    const {
      onRunQueries
    } = this.props;
    const {
      data,
      queries
    } = this.state;

    if ((0,app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_12__.isSharedDashboardQuery)(dsSettings.name)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_12__.DashboardQueryEditor, {
        queries: queries,
        panelData: data,
        onChange: this.onQueriesChange,
        onRunQueries: onRunQueries
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_10__.selectors.components.QueryTab.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_QueryEditorRows__WEBPACK_IMPORTED_MODULE_3__.QueryEditorRows, {
        queries: queries,
        dsSettings: dsSettings,
        onQueriesChange: this.onQueriesChange,
        onAddQuery: this.onAddQuery,
        onRunQueries: onRunQueries,
        data: data
      })
    });
  }

  isExpressionsSupported(dsSettings) {
    return (dsSettings.meta.alerting || dsSettings.meta.mixed) === true;
  }

  renderExtraActions() {
    return _QueryActionComponent__WEBPACK_IMPORTED_MODULE_14__.GroupActionComponents.getAllExtraRenderAction().map((action, index) => action({
      onAddQuery: this.onAddQuery,
      onChangeDataSource: this.onChangeDataSource,
      key: index
    })).filter(Boolean);
  }

  renderAddQueryRow(dsSettings, styles) {
    const {
      isAddingMixed
    } = this.state;
    const showAddButton = !(isAddingMixed || (0,app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_12__.isSharedDashboardQuery)(dsSettings.name));
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      spacing: "md",
      align: "flex-start",
      children: [showAddButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        icon: "plus",
        onClick: this.onAddQueryClick,
        variant: "secondary",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_10__.selectors.components.QueryTab.addQuery,
        children: "Query"
      }), app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].expressionsEnabled && this.isExpressionsSupported(dsSettings) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        icon: "plus",
        onClick: this.onAddExpressionClick,
        variant: "secondary",
        className: styles.expressionButton,
        children: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
          children: "Expression\xA0"
        }))
      }), this.renderExtraActions()]
    });
  }

  render() {
    const {
      scrollTop,
      isHelpOpen,
      dsSettings
    } = this.state;
    const styles = getStyles();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CustomScrollbar, {
      autoHeightMin: "100%",
      scrollTop: scrollTop,
      setScrollTop: this.setScrollTop,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: styles.innerWrapper,
        children: [this.renderTopSection(styles), dsSettings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.queriesWrapper,
            children: this.renderQueries(dsSettings)
          }), this.renderAddQueryRow(dsSettings, styles), isHelpOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
            title: "Data source help",
            isOpen: true,
            onDismiss: this.onCloseHelp,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(app_core_components_PluginHelp_PluginHelp__WEBPACK_IMPORTED_MODULE_7__.PluginHelp, {
              plugin: dsSettings.meta,
              type: "query_help"
            })
          })]
        })]
      })
    });
  }

}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.stylesFactory)(() => {
  const {
    theme
  } = app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"];
  return {
    innerWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_13__.css`
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: ${theme.spacing.md};
    `,
    dataSourceRow: _emotion_css__WEBPACK_IMPORTED_MODULE_13__.css`
      display: flex;
      margin-bottom: ${theme.spacing.md};
    `,
    dataSourceRowItem: _emotion_css__WEBPACK_IMPORTED_MODULE_13__.css`
      margin-right: ${theme.spacing.inlineFormMargin};
    `,
    dataSourceRowItemOptions: _emotion_css__WEBPACK_IMPORTED_MODULE_13__.css`
      flex-grow: 1;
      margin-right: ${theme.spacing.inlineFormMargin};
    `,
    queriesWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_13__.css`
      padding-bottom: 16px;
    `,
    expressionWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_13__.css``,
    expressionButton: _emotion_css__WEBPACK_IMPORTED_MODULE_13__.css`
      margin-right: ${theme.spacing.sm};
    `
  };
});

/***/ }),

/***/ "./public/app/features/query/components/QueryGroupOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryGroupOptionsEditor": () => (/* binding */ QueryGroupOptionsEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _div, _div2, _InlineFormLabel2, _InlineFormLabel3, _div3, _div4, _InlineFormLabel4, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries
 // Utils

 // Components

 // Types







class QueryGroupOptionsEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    var _options$timeRange6, _options$timeRange7, _options$timeRange$hi, _options$timeRange8;

    super(props);

    _defineProperty(this, "onRelativeTimeChange", event => {
      this.setState({
        timeRangeFrom: event.target.value
      });
    });

    _defineProperty(this, "onTimeShiftChange", event => {
      this.setState({
        timeRangeShift: event.target.value
      });
    });

    _defineProperty(this, "onOverrideTime", event => {
      var _options$timeRange;

      const {
        options,
        onChange
      } = this.props;
      const newValue = emptyToNull(event.target.value);
      const isValid = timeRangeValidation(newValue);

      if (isValid && ((_options$timeRange = options.timeRange) === null || _options$timeRange === void 0 ? void 0 : _options$timeRange.from) !== newValue) {
        var _options$timeRange2;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange2 = options.timeRange) !== null && _options$timeRange2 !== void 0 ? _options$timeRange2 : {}, {
            from: newValue
          })
        }));
      }

      this.setState({
        relativeTimeIsValid: isValid
      });
    });

    _defineProperty(this, "onTimeShift", event => {
      var _options$timeRange3;

      const {
        options,
        onChange
      } = this.props;
      const newValue = emptyToNull(event.target.value);
      const isValid = timeRangeValidation(newValue);

      if (isValid && ((_options$timeRange3 = options.timeRange) === null || _options$timeRange3 === void 0 ? void 0 : _options$timeRange3.shift) !== newValue) {
        var _options$timeRange4;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange4 = options.timeRange) !== null && _options$timeRange4 !== void 0 ? _options$timeRange4 : {}, {
            shift: newValue
          })
        }));
      }

      this.setState({
        timeShiftIsValid: isValid
      });
    });

    _defineProperty(this, "onToggleTimeOverride", () => {
      const {
        onChange,
        options
      } = this.props;
      this.setState({
        timeRangeHide: !this.state.timeRangeHide
      }, () => {
        var _options$timeRange5;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange5 = options.timeRange) !== null && _options$timeRange5 !== void 0 ? _options$timeRange5 : {}, {
            hide: this.state.timeRangeHide
          })
        }));
      });
    });

    _defineProperty(this, "onCacheTimeoutBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      onChange(Object.assign({}, options, {
        cacheTimeout: emptyToNull(event.target.value)
      }));
    });

    _defineProperty(this, "onMaxDataPointsBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      let maxDataPoints = parseInt(event.target.value, 10);

      if (isNaN(maxDataPoints) || maxDataPoints === 0) {
        maxDataPoints = null;
      }

      if (maxDataPoints !== options.maxDataPoints) {
        onChange(Object.assign({}, options, {
          maxDataPoints
        }));
      }
    });

    _defineProperty(this, "onMinIntervalBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      const minInterval = emptyToNull(event.target.value);

      if (minInterval !== options.minInterval) {
        onChange(Object.assign({}, options, {
          minInterval
        }));
      }
    });

    _defineProperty(this, "onOpenOptions", () => {
      this.setState({
        isOpen: true
      });
    });

    _defineProperty(this, "onCloseOptions", () => {
      this.setState({
        isOpen: false
      });
    });

    const {
      options: _options
    } = props;
    this.state = {
      timeRangeFrom: ((_options$timeRange6 = _options.timeRange) === null || _options$timeRange6 === void 0 ? void 0 : _options$timeRange6.from) || '',
      timeRangeShift: ((_options$timeRange7 = _options.timeRange) === null || _options$timeRange7 === void 0 ? void 0 : _options$timeRange7.shift) || '',
      timeRangeHide: (_options$timeRange$hi = (_options$timeRange8 = _options.timeRange) === null || _options$timeRange8 === void 0 ? void 0 : _options$timeRange8.hide) !== null && _options$timeRange$hi !== void 0 ? _options$timeRange$hi : false,
      isOpen: false,
      relativeTimeIsValid: true,
      timeShiftIsValid: true
    };
  }

  renderCacheTimeoutOption() {
    var _dataSource$meta$quer, _options$cacheTimeout;

    const {
      dataSource,
      options
    } = this.props;
    const tooltip = `If your time series store has a query cache this option can override the default cache timeout. Specify a
    numeric value in seconds.`;

    if (!((_dataSource$meta$quer = dataSource.meta.queryOptions) !== null && _dataSource$meta$quer !== void 0 && _dataSource$meta$quer.cacheTimeout)) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
          width: 9,
          tooltip: tooltip,
          children: "Cache timeout"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "text",
          className: "width-6",
          placeholder: "60",
          spellCheck: false,
          onBlur: this.onCacheTimeoutBlur,
          defaultValue: (_options$cacheTimeout = options.cacheTimeout) !== null && _options$cacheTimeout !== void 0 ? _options$cacheTimeout : ''
        })]
      })
    });
  }

  renderMaxDataPointsOption() {
    var _data$request, _options$maxDataPoint;

    const {
      data,
      options
    } = this.props;
    const realMd = (_data$request = data.request) === null || _data$request === void 0 ? void 0 : _data$request.maxDataPoints;
    const value = (_options$maxDataPoint = options.maxDataPoints) !== null && _options$maxDataPoint !== void 0 ? _options$maxDataPoint : '';
    const isAuto = value === '';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
          width: 9,
          tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: "The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer."
          }),
          children: "Max data points"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "number",
          className: "width-6",
          placeholder: `${realMd}`,
          spellCheck: false,
          onBlur: this.onMaxDataPointsBlur,
          defaultValue: value
        }), isAuto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label query-segment-operator",
            children: "="
          })), _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label",
            children: "Width of panel"
          }))]
        })]
      })
    });
  }

  renderIntervalOption() {
    var _data$request2, _dataSource$interval, _options$minInterval;

    const {
      data,
      dataSource,
      options
    } = this.props;
    const realInterval = (_data$request2 = data.request) === null || _data$request2 === void 0 ? void 0 : _data$request2.interval;
    const minIntervalOnDs = (_dataSource$interval = dataSource.interval) !== null && _dataSource$interval !== void 0 ? _dataSource$interval : 'No limit';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
            width: 9,
            tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: ["A lower limit for the interval. Recommended to be set to write frequency, for example ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: "1m"
              }), ' ', "if your data is written every minute. Default value can be set in data source settings for most data sources."]
            }),
            children: "Min interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
            type: "text",
            className: "width-6",
            placeholder: `${minIntervalOnDs}`,
            spellCheck: false,
            onBlur: this.onMinIntervalBlur,
            defaultValue: (_options$minInterval = options.minInterval) !== null && _options$minInterval !== void 0 ? _options$minInterval : ''
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
            width: 9,
            tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: ["The evaluated interval that is sent to data source and is used in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: "$__interval"
              }), " and", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: "$__interval_ms"
              })]
            }),
            children: "Interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
            width: 6,
            children: realInterval
          }), _div3 || (_div3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label query-segment-operator",
            children: "="
          })), _div4 || (_div4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label",
            children: "Time range / max data points"
          }))]
        })
      })]
    });
  }

  renderCollapsedText(styles) {
    var _options$maxDataPoint2;

    const {
      data,
      options
    } = this.props;
    const {
      isOpen
    } = this.state;

    if (isOpen) {
      return undefined;
    }

    let mdDesc = (_options$maxDataPoint2 = options.maxDataPoints) !== null && _options$maxDataPoint2 !== void 0 ? _options$maxDataPoint2 : '';

    if (mdDesc === '' && data.request) {
      mdDesc = `auto = ${data.request.maxDataPoints}`;
    }

    let intervalDesc = options.minInterval;

    if (data.request) {
      intervalDesc = `${data.request.interval}`;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.collapsedText,
        children: ["MD = ", mdDesc]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.collapsedText,
        children: ["Interval = ", intervalDesc]
      })]
    });
  }

  render() {
    const {
      timeRangeHide: hideTimeOverride,
      relativeTimeIsValid,
      timeShiftIsValid
    } = this.state;
    const {
      timeRangeFrom: relativeTime,
      timeRangeShift: timeShift,
      isOpen
    } = this.state;
    const styles = getStyles();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_3__.QueryOperationRow, {
      id: "Query options",
      index: 0,
      title: "Query options",
      headerElement: this.renderCollapsedText(styles),
      isOpen: isOpen,
      onOpen: this.onOpenOptions,
      onClose: this.onCloseOptions,
      children: [this.renderMaxDataPointsOption(), this.renderIntervalOption(), this.renderCacheTimeoutOption(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel4 || (_InlineFormLabel4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
          width: 9,
          children: "Relative time"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "text",
          className: "width-6",
          placeholder: "1h",
          onChange: this.onRelativeTimeChange,
          onBlur: this.onOverrideTime,
          invalid: !relativeTimeIsValid,
          value: relativeTime
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "gf-form-label width-9",
          children: "Time shift"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "text",
          className: "width-6",
          placeholder: "1h",
          onChange: this.onTimeShiftChange,
          onBlur: this.onTimeShift,
          invalid: !timeShiftIsValid,
          value: timeShift
        })]
      }), (timeShift || relativeTime) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
          label: "Hide time info",
          labelWidth: 18,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
            value: hideTimeOverride,
            onChange: this.onToggleTimeOverride
          })
        })
      })]
    });
  }

}

const timeRangeValidation = value => {
  if (!value) {
    return true;
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.isValidTimeSpan(value);
};

const emptyToNull = value => {
  return value === '' ? null : value;
};

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(() => {
  const {
    theme
  } = app_core_config__WEBPACK_IMPORTED_MODULE_4__.config;
  return {
    collapsedText: _emotion_css__WEBPACK_IMPORTED_MODULE_5__.css`
      margin-left: ${theme.spacing.md};
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.textWeak};
    `
  };
});

/***/ }),

/***/ "./public/app/features/query/state/updateQueries.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateQueries": () => (/* binding */ updateQueries)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");


async function updateQueries(nextDS, queries, currentDS) {
  let nextQueries = queries;
  const datasource = {
    type: nextDS.type,
    uid: nextDS.uid
  }; // we are changing data source type

  if ((currentDS === null || currentDS === void 0 ? void 0 : currentDS.meta.id) !== nextDS.meta.id) {
    // If changing to mixed do nothing
    if (nextDS.meta.mixed) {
      return queries;
    } // when both data sources support abstract queries
    else if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.hasQueryExportSupport)(currentDS) && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.hasQueryImportSupport)(nextDS)) {
      const abstractQueries = await currentDS.exportToAbstractQueries(queries);
      nextQueries = await nextDS.importFromAbstractQueries(abstractQueries);
    } // when datasource supports query import
    else if (currentDS && nextDS.importQueries) {
      nextQueries = await nextDS.importQueries(queries, currentDS);
    } // Otherwise clear queries
    else {
      return [{
        refId: 'A',
        datasource
      }];
    }
  }

  if (nextQueries.length === 0) {
    return [{
      refId: 'A',
      datasource
    }];
  } // Set data source on all queries except expression queries


  return nextQueries.map(query => {
    if (!(0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_1__.isExpressionReference)(query.datasource) && !nextDS.meta.mixed) {
      query.datasource = datasource;
    }

    return query;
  });
}

/***/ }),

/***/ "./public/app/features/sandbox/TestStuffPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestStuffPage": () => (/* binding */ TestStuffPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getDefaultState": () => (/* binding */ getDefaultState)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js");
/* harmony import */ var _query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/query/components/QueryGroup.tsx");
/* harmony import */ var _query_state_PanelQueryRunner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/query/state/PanelQueryRunner.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/panel/components/PanelRenderer.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













const TestStuffPage = () => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(getDefaultState());
  const {
    queryOptions,
    queryRunner
  } = state;

  const onRunQueries = () => {
    var _queryOptions$maxData;

    const timeRange = {
      from: 'now-1h',
      to: 'now'
    };
    queryRunner.run({
      queries: queryOptions.queries,
      datasource: queryOptions.dataSource,
      timezone: 'browser',
      timeRange: {
        from: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.dateMath.parse(timeRange.from),
        to: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.dateMath.parse(timeRange.to),
        raw: timeRange
      },
      maxDataPoints: (_queryOptions$maxData = queryOptions.maxDataPoints) !== null && _queryOptions$maxData !== void 0 ? _queryOptions$maxData : 100,
      minInterval: queryOptions.minInterval
    });
  };

  const onOptionsChange = queryOptions => {
    setState(Object.assign({}, state, {
      queryOptions
    }));
  };
  /**
   * Subscribe to data
   */


  const observable = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => queryRunner.getData({
    withFieldConfig: true,
    withTransforms: true
  }), [queryRunner]);
  const data = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])(observable);
  const node = {
    id: 'test-page',
    text: 'Test page',
    icon: 'dashboard',
    subTitle: 'FOR TESTING!',
    url: 'sandbox/test'
  };
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__.useAppNotification)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navModel: {
      node: node,
      main: node
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
      children: [data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: {
          width: '100%',
          height: '600px'
        },
        children: ({
          width
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_8__.PanelRenderer, {
              title: "Hello",
              pluginId: "timeseries",
              width: width,
              height: 300,
              data: data,
              options: {},
              fieldConfig: {
                defaults: {},
                overrides: []
              },
              timeZone: "browser"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Table, {
              data: data.series[0],
              width: width,
              height: 300
            })]
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        style: {
          marginTop: '16px',
          height: '45%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_4__.QueryGroup, {
          options: queryOptions,
          queryRunner: queryRunner,
          onRunQueries: onRunQueries,
          onOptionsChange: onOptionsChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        style: {
          display: 'flex',
          gap: '1em'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          onClick: () => notifyApp.success('Success toast', 'some more text goes here'),
          variant: "primary",
          children: "Success"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          onClick: () => notifyApp.warning('Warning toast', 'some more text goes here', 'bogus-trace-99999'),
          variant: "secondary",
          children: "Warning"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          onClick: () => notifyApp.error('Error toast', 'some more text goes here', 'bogus-trace-fdsfdfsfds'),
          variant: "destructive",
          children: "Error"
        })]
      })]
    })
  });
};
function getDefaultState() {
  const options = {
    fieldConfig: {
      defaults: {
        color: {
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.PaletteClassic
        }
      },
      overrides: []
    },
    replaceVariables: v => v,
    theme: app_core_config__WEBPACK_IMPORTED_MODULE_2__.config.theme2
  };
  const dataConfig = {
    getTransformations: () => [],
    getFieldOverrideOptions: () => options,
    getDataSupport: () => ({
      annotations: false,
      alertStates: false
    })
  };
  return {
    queryRunner: new _query_state_PanelQueryRunner__WEBPACK_IMPORTED_MODULE_5__.PanelQueryRunner(dataConfig),
    queryOptions: {
      queries: [],
      dataSource: {
        name: 'gdev-testdata'
      },
      maxDataPoints: 100
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestStuffPage);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQXJCLENBRFI7QUFFTGpGLElBQUFBLFlBQVksRUFBRTtBQUNabEwsTUFBQUEsT0FBTyxFQUFFLEVBREc7QUFFWnNCLE1BQUFBLFVBQVUsRUFBRTtBQUNWK0QsUUFBQUEsSUFBSSxFQUFFO0FBREksT0FGQTtBQUtac0YsTUFBQUEsYUFBYSxFQUFFO0FBTEg7QUFGVCxHQUFQO0FBVUQ7QUFFRCxpRUFBZXlELGFBQWY7Ozs7Ozs7Ozs7Ozs7QUNySmlDO0FBQ21DO0FBQ3BFO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQixJQUFJLHNFQUF5QjtBQUM3QjtBQUNBLDZCQUE2QjtBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9QbHVnaW5IZWxwL1BsdWdpbkhlbHAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3F1ZXJ5L2NvbXBvbmVudHMvUXVlcnlFZGl0b3JSb3dzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9xdWVyeS9jb21wb25lbnRzL1F1ZXJ5R3JvdXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3F1ZXJ5L2NvbXBvbmVudHMvUXVlcnlHcm91cE9wdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL3VwZGF0ZVF1ZXJpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2FuZGJveC9UZXN0U3R1ZmZQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtMDAzMjZlNzBiYS8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuMy4yLWEwMzJjYmViMDEtNzM3OTQ2MGY1MS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlT2JzZXJ2YWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlck1hcmtkb3duIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBsdWdpbjoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICB9O1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzRXJyb3I6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgaGVscDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGx1Z2luSGVscCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIGlzRXJyb3I6IGZhbHNlLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgaGVscDogJycsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkSGVscCgpO1xuICB9XG5cbiAgY29uc3RydWN0UGxhY2Vob2xkZXJJbmZvKCkge1xuICAgIHJldHVybiAnTm8gcGx1Z2luIGhlbHAgb3IgcmVhZG1lIG1hcmtkb3duIGZpbGUgd2FzIGZvdW5kJztcbiAgfVxuXG4gIGxvYWRIZWxwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGx1Z2luLCB0eXBlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG5cbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5nZXQoYC9hcGkvcGx1Z2lucy8ke3BsdWdpbi5pZH0vbWFya2Rvd24vJHt0eXBlfWApXG4gICAgICAudGhlbigocmVzcG9uc2U6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBoZWxwSHRtbCA9IHJlbmRlck1hcmtkb3duKHJlc3BvbnNlKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UgPT09ICcnICYmIHR5cGUgPT09ICdoZWxwJykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgaGVscDogdGhpcy5jb25zdHJ1Y3RQbGFjZWhvbGRlckluZm8oKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGhlbHA6IGhlbHBIdG1sLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc0Vycm9yLCBpc0xvYWRpbmcsIGhlbHAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGgyPkxvYWRpbmcgaGVscC4uLjwvaDI+O1xuICAgIH1cblxuICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICByZXR1cm4gPGgzPiZhcG9zO0Vycm9yIG9jY3VycmVkIHdoZW4gbG9hZGluZyBoZWxwJmFwb3M7PC9oMz47XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdwYW5lbF9oZWxwJyAmJiBoZWxwID09PSAnJykge1xuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duLWh0bWxcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGhlbHAgfX0gLz47XG4gIH1cbn1cbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFR5cGVzXG5pbXBvcnQge1xuICBDb3JlQXBwLFxuICBEYXRhUXVlcnksXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBFdmVudEJ1c0V4dGVuZGVkLFxuICBIaXN0b3J5SXRlbSxcbiAgUGFuZWxEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLi9RdWVyeUVkaXRvclJvdyc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdTdGFydCwgRHJvcHBhYmxlLCBEcm9wUmVzdWx0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlU3J2LCByZXBvcnRJbnRlcmFjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvLyBUaGUgcXVlcnkgY29uZmlndXJhdGlvblxuICBxdWVyaWVzOiBEYXRhUXVlcnlbXTtcbiAgZHNTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M7XG5cbiAgLy8gUXVlcnkgZWRpdGluZ1xuICBvblF1ZXJpZXNDaGFuZ2U6IChxdWVyaWVzOiBEYXRhUXVlcnlbXSkgPT4gdm9pZDtcbiAgb25BZGRRdWVyeTogKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcmllczogKCkgPT4gdm9pZDtcblxuICAvLyBRdWVyeSBSZXNwb25zZSBEYXRhXG4gIGRhdGE6IFBhbmVsRGF0YTtcblxuICAvLyBNaXNjXG4gIGFwcD86IENvcmVBcHA7XG4gIGhpc3Rvcnk/OiBBcnJheTxIaXN0b3J5SXRlbTxEYXRhUXVlcnk+PjtcbiAgZXZlbnRCdXM/OiBFdmVudEJ1c0V4dGVuZGVkO1xufVxuXG5leHBvcnQgY2xhc3MgUXVlcnlFZGl0b3JSb3dzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBvblJlbW92ZVF1ZXJ5ID0gKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uUXVlcmllc0NoYW5nZSh0aGlzLnByb3BzLnF1ZXJpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBxdWVyeSkpO1xuICB9O1xuXG4gIG9uQ2hhbmdlUXVlcnkocXVlcnk6IERhdGFRdWVyeSwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgcXVlcmllcywgb25RdWVyaWVzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gdXBkYXRlIHF1ZXJ5IGluIGFycmF5XG4gICAgb25RdWVyaWVzQ2hhbmdlKFxuICAgICAgcXVlcmllcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICBpZiAoaXRlbUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9uRGF0YVNvdXJjZUNoYW5nZShkYXRhU291cmNlOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgcXVlcmllcywgb25RdWVyaWVzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgb25RdWVyaWVzQ2hhbmdlKFxuICAgICAgcXVlcmllcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICBpZiAoaXRlbUluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0uZGF0YXNvdXJjZSkge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gZ2V0RGF0YVNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MoaXRlbS5kYXRhc291cmNlKTtcblxuICAgICAgICAgIGlmIChwcmV2aW91cz8udHlwZSA9PT0gZGF0YVNvdXJjZS50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICBkYXRhc291cmNlOiB7IHVpZDogZGF0YVNvdXJjZS51aWQgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWZJZDogaXRlbS5yZWZJZCxcbiAgICAgICAgICBoaWRlOiBpdGVtLmhpZGUsXG4gICAgICAgICAgZGF0YXNvdXJjZTogeyB1aWQ6IGRhdGFTb3VyY2UudWlkIH0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvbkRyYWdTdGFydCA9IChyZXN1bHQ6IERyYWdTdGFydCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcywgZHNTZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJlcG9ydEludGVyYWN0aW9uKCdxdWVyeV9yb3dfcmVvcmRlcl9zdGFydGVkJywge1xuICAgICAgc3RhcnRJbmRleDogcmVzdWx0LnNvdXJjZS5pbmRleCxcbiAgICAgIG51bWJlck9mUXVlcmllczogcXVlcmllcy5sZW5ndGgsXG4gICAgICBkYXRhc291cmNlVHlwZTogZHNTZXR0aW5ncy50eXBlLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uRHJhZ0VuZCA9IChyZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJpZXMsIG9uUXVlcmllc0NoYW5nZSwgZHNTZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuZGVzdGluYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gcmVzdWx0LnNvdXJjZS5pbmRleDtcbiAgICBjb25zdCBlbmRJbmRleCA9IHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleDtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gZW5kSW5kZXgpIHtcbiAgICAgIHJlcG9ydEludGVyYWN0aW9uKCdxdWVyeV9yb3dfcmVvcmRlcl9jYW5jZWxlZCcsIHtcbiAgICAgICAgc3RhcnRJbmRleCxcbiAgICAgICAgZW5kSW5kZXgsXG4gICAgICAgIG51bWJlck9mUXVlcmllczogcXVlcmllcy5sZW5ndGgsXG4gICAgICAgIGRhdGFzb3VyY2VUeXBlOiBkc1NldHRpbmdzLnR5cGUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGUgPSBBcnJheS5mcm9tKHF1ZXJpZXMpO1xuICAgIGNvbnN0IFtyZW1vdmVkXSA9IHVwZGF0ZS5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gICAgdXBkYXRlLnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZCk7XG4gICAgb25RdWVyaWVzQ2hhbmdlKHVwZGF0ZSk7XG5cbiAgICByZXBvcnRJbnRlcmFjdGlvbigncXVlcnlfcm93X3Jlb3JkZXJfZW5kZWQnLCB7XG4gICAgICBzdGFydEluZGV4LFxuICAgICAgZW5kSW5kZXgsXG4gICAgICBudW1iZXJPZlF1ZXJpZXM6IHF1ZXJpZXMubGVuZ3RoLFxuICAgICAgZGF0YXNvdXJjZVR5cGU6IGRzU2V0dGluZ3MudHlwZSxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkc1NldHRpbmdzLCBkYXRhLCBxdWVyaWVzLCBhcHAsIGhpc3RvcnksIGV2ZW50QnVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9IG9uRHJhZ0VuZD17dGhpcy5vbkRyYWdFbmR9PlxuICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwidHJhbnNmb3JtYXRpb25zLWxpc3RcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgIHsocHJvdmlkZWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfT5cbiAgICAgICAgICAgICAgICB7cXVlcmllcy5tYXAoKHF1ZXJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVNvdXJjZVNldHRpbmdzID0gZ2V0RGF0YVNvdXJjZVNldHRpbmdzKHF1ZXJ5LCBkc1NldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9uQ2hhbmdlRGF0YVNvdXJjZVNldHRpbmdzID0gZHNTZXR0aW5ncy5tZXRhLm1peGVkXG4gICAgICAgICAgICAgICAgICAgID8gKHNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykgPT4gdGhpcy5vbkRhdGFTb3VyY2VDaGFuZ2Uoc2V0dGluZ3MsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2VTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZURhdGFTb3VyY2U9e29uQ2hhbmdlRGF0YVNvdXJjZVNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocXVlcnkpID0+IHRoaXMub25DaGFuZ2VRdWVyeShxdWVyeSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlUXVlcnk9e3RoaXMub25SZW1vdmVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZFF1ZXJ5PXt0aGlzLnByb3BzLm9uQWRkUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgb25SdW5RdWVyeT17dGhpcy5wcm9wcy5vblJ1blF1ZXJpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcmllcz17cXVlcmllc31cbiAgICAgICAgICAgICAgICAgICAgICBhcHA9e2FwcH1cbiAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXtoaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzPXtldmVudEJ1c31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGdldERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcXVlcnk6IERhdGFRdWVyeSxcbiAgZ3JvdXBTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3Ncbik6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzID0+IHtcbiAgaWYgKCFxdWVyeS5kYXRhc291cmNlKSB7XG4gICAgcmV0dXJuIGdyb3VwU2V0dGluZ3M7XG4gIH1cbiAgY29uc3QgcXVlcnlTZXR0aW5ncyA9IGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2UpO1xuICByZXR1cm4gcXVlcnlTZXR0aW5ncyB8fCBncm91cFNldHRpbmdzO1xufTtcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEN1c3RvbVNjcm9sbGJhcixcbiAgSG9yaXpvbnRhbEdyb3VwLFxuICBJbmxpbmVGb3JtTGFiZWwsXG4gIE1vZGFsLFxuICBTY3JvbGxiYXJQb3NpdGlvbixcbiAgc3R5bGVzRmFjdG9yeSxcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBpY2tlciwgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3dzIH0gZnJvbSAnLi9RdWVyeUVkaXRvclJvd3MnO1xuLy8gU2VydmljZXNcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG4vLyBUeXBlc1xuaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5LFxuICBEYXRhU291cmNlQXBpLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgZ2V0RGVmYXVsdFRpbWVSYW5nZSxcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGx1Z2luSGVscCB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGx1Z2luSGVscC9QbHVnaW5IZWxwJztcbmltcG9ydCB7IGFkZFF1ZXJ5IH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvcXVlcnknO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRhdGFTb3VyY2UgYXMgZXhwcmVzc2lvbkRhdGFzb3VyY2UgfSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvRXhwcmVzc2lvbkRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBQYW5lbFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vc3RhdGUvUGFuZWxRdWVyeVJ1bm5lcic7XG5pbXBvcnQgeyBRdWVyeUdyb3VwT3B0aW9uc0VkaXRvciB9IGZyb20gJy4vUXVlcnlHcm91cE9wdGlvbnMnO1xuaW1wb3J0IHsgRGFzaGJvYXJkUXVlcnlFZGl0b3IsIGlzU2hhcmVkRGFzaGJvYXJkUXVlcnkgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2Rhc2hib2FyZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgUXVlcnlHcm91cE9wdGlvbnMgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgR3JvdXBBY3Rpb25Db21wb25lbnRzIH0gZnJvbSAnLi9RdWVyeUFjdGlvbkNvbXBvbmVudCc7XG5pbXBvcnQgeyB1cGRhdGVRdWVyaWVzIH0gZnJvbSAnLi4vc3RhdGUvdXBkYXRlUXVlcmllcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1ZXJ5UnVubmVyOiBQYW5lbFF1ZXJ5UnVubmVyO1xuICBvcHRpb25zOiBRdWVyeUdyb3VwT3B0aW9ucztcbiAgb25PcGVuUXVlcnlJbnNwZWN0b3I/OiAoKSA9PiB2b2lkO1xuICBvblJ1blF1ZXJpZXM6ICgpID0+IHZvaWQ7XG4gIG9uT3B0aW9uc0NoYW5nZTogKG9wdGlvbnM6IFF1ZXJ5R3JvdXBPcHRpb25zKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBkYXRhU291cmNlPzogRGF0YVNvdXJjZUFwaTtcbiAgZHNTZXR0aW5ncz86IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzO1xuICBxdWVyaWVzOiBEYXRhUXVlcnlbXTtcbiAgaGVscENvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaXNMb2FkaW5nSGVscDogYm9vbGVhbjtcbiAgaXNQaWNrZXJPcGVuOiBib29sZWFuO1xuICBpc0FkZGluZ01peGVkOiBib29sZWFuO1xuICBzY3JvbGxUb3A6IG51bWJlcjtcbiAgZGF0YTogUGFuZWxEYXRhO1xuICBpc0hlbHBPcGVuOiBib29sZWFuO1xuICBkZWZhdWx0RGF0YVNvdXJjZT86IERhdGFTb3VyY2VBcGk7XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUdyb3VwIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgYmFja2VuZFNydiA9IGJhY2tlbmRTcnY7XG4gIGRhdGFTb3VyY2VTcnYgPSBnZXREYXRhU291cmNlU3J2KCk7XG4gIHF1ZXJ5U3Vic2NyaXB0aW9uOiBVbnN1YnNjcmliYWJsZSB8IG51bGwgPSBudWxsO1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBpc0xvYWRpbmdIZWxwOiBmYWxzZSxcbiAgICBoZWxwQ29udGVudDogbnVsbCxcbiAgICBpc1BpY2tlck9wZW46IGZhbHNlLFxuICAgIGlzQWRkaW5nTWl4ZWQ6IGZhbHNlLFxuICAgIGlzSGVscE9wZW46IGZhbHNlLFxuICAgIHNjcm9sbFRvcDogMCxcbiAgICBxdWVyaWVzOiBbXSxcbiAgICBkYXRhOiB7XG4gICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLk5vdFN0YXJ0ZWQsXG4gICAgICBzZXJpZXM6IFtdLFxuICAgICAgdGltZVJhbmdlOiBnZXREZWZhdWx0VGltZVJhbmdlKCksXG4gICAgfSxcbiAgfTtcblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHF1ZXJ5UnVubmVyLCBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IHF1ZXJ5UnVubmVyLmdldERhdGEoeyB3aXRoVHJhbnNmb3JtczogZmFsc2UsIHdpdGhGaWVsZENvbmZpZzogZmFsc2UgfSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChkYXRhOiBQYW5lbERhdGEpID0+IHRoaXMub25QYW5lbERhdGFVcGRhdGUoZGF0YSksXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZHMgPSBhd2FpdCB0aGlzLmRhdGFTb3VyY2VTcnYuZ2V0KG9wdGlvbnMuZGF0YVNvdXJjZSk7XG4gICAgICBjb25zdCBkc1NldHRpbmdzID0gdGhpcy5kYXRhU291cmNlU3J2LmdldEluc3RhbmNlU2V0dGluZ3Mob3B0aW9ucy5kYXRhU291cmNlKTtcbiAgICAgIGNvbnN0IGRlZmF1bHREYXRhU291cmNlID0gYXdhaXQgdGhpcy5kYXRhU291cmNlU3J2LmdldCgpO1xuICAgICAgY29uc3QgZGF0YXNvdXJjZSA9IGRzLmdldFJlZigpO1xuICAgICAgY29uc3QgcXVlcmllcyA9IG9wdGlvbnMucXVlcmllcy5tYXAoKHEpID0+IChxLmRhdGFzb3VyY2UgPyBxIDogeyAuLi5xLCBkYXRhc291cmNlIH0pKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBxdWVyaWVzLCBkYXRhU291cmNlOiBkcywgZHNTZXR0aW5ncywgZGVmYXVsdERhdGFTb3VyY2UgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gbG9hZCBkYXRhIHNvdXJjZScsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5xdWVyeVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25QYW5lbERhdGFVcGRhdGUoZGF0YTogUGFuZWxEYXRhKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gIH1cblxuICBvbkNoYW5nZURhdGFTb3VyY2UgPSBhc3luYyAobmV3U2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSA9PiB7XG4gICAgY29uc3QgeyBkc1NldHRpbmdzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGN1cnJlbnREUyA9IGRzU2V0dGluZ3MgPyBhd2FpdCBnZXREYXRhU291cmNlU3J2KCkuZ2V0KGRzU2V0dGluZ3MudWlkKSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBuZXh0RFMgPSBhd2FpdCBnZXREYXRhU291cmNlU3J2KCkuZ2V0KG5ld1NldHRpbmdzLnVpZCk7XG5cbiAgICBjb25zdCBxdWVyaWVzID0gYXdhaXQgdXBkYXRlUXVlcmllcyhuZXh0RFMsIHRoaXMuc3RhdGUucXVlcmllcywgY3VycmVudERTKTtcblxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBhd2FpdCB0aGlzLmRhdGFTb3VyY2VTcnYuZ2V0KG5ld1NldHRpbmdzLm5hbWUpO1xuICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgcXVlcmllcyxcbiAgICAgIGRhdGFTb3VyY2U6IHtcbiAgICAgICAgbmFtZTogbmV3U2V0dGluZ3MubmFtZSxcbiAgICAgICAgdWlkOiBuZXdTZXR0aW5ncy51aWQsXG4gICAgICAgIHR5cGU6IG5ld1NldHRpbmdzLm1ldGEuaWQsXG4gICAgICAgIGRlZmF1bHQ6IG5ld1NldHRpbmdzLmlzRGVmYXVsdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJpZXMsXG4gICAgICBkYXRhU291cmNlOiBkYXRhU291cmNlLFxuICAgICAgZHNTZXR0aW5nczogbmV3U2V0dGluZ3MsXG4gICAgfSk7XG4gIH07XG5cbiAgb25BZGRRdWVyeUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLm9uUXVlcmllc0NoYW5nZShhZGRRdWVyeShxdWVyaWVzLCB0aGlzLm5ld1F1ZXJ5KCkpKTtcbiAgICB0aGlzLm9uU2Nyb2xsQm90dG9tKCk7XG4gIH07XG5cbiAgbmV3UXVlcnkoKTogUGFydGlhbDxEYXRhUXVlcnk+IHtcbiAgICBjb25zdCB7IGRzU2V0dGluZ3MsIGRlZmF1bHREYXRhU291cmNlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgZHMgPSAhZHNTZXR0aW5ncz8ubWV0YS5taXhlZCA/IGRzU2V0dGluZ3MgOiBkZWZhdWx0RGF0YVNvdXJjZTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhc291cmNlOiB7IHVpZDogZHM/LnVpZCwgdHlwZTogZHM/LnR5cGUgfSxcbiAgICB9O1xuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlZFByb3BzOiBQYXJ0aWFsPFF1ZXJ5R3JvdXBPcHRpb25zPikge1xuICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHtcbiAgICAgIC4uLnRoaXMucHJvcHMub3B0aW9ucyxcbiAgICAgIC4uLmNoYW5nZWRQcm9wcyxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQWRkRXhwcmVzc2lvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMub25RdWVyaWVzQ2hhbmdlKGFkZFF1ZXJ5KHRoaXMuc3RhdGUucXVlcmllcywgZXhwcmVzc2lvbkRhdGFzb3VyY2UubmV3UXVlcnkoKSkpO1xuICAgIHRoaXMub25TY3JvbGxCb3R0b20oKTtcbiAgfTtcblxuICBvblNjcm9sbEJvdHRvbSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsVG9wOiAxMDAwIH0pO1xuICB9O1xuXG4gIG9uVXBkYXRlQW5kUnVuID0gKG9wdGlvbnM6IFF1ZXJ5R3JvdXBPcHRpb25zKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2Uob3B0aW9ucyk7XG4gICAgdGhpcy5wcm9wcy5vblJ1blF1ZXJpZXMoKTtcbiAgfTtcblxuICByZW5kZXJUb3BTZWN0aW9uKHN0eWxlczogUXVlcmllc1RhYlN0eWxlcykge1xuICAgIGNvbnN0IHsgb25PcGVuUXVlcnlJbnNwZWN0b3IsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhU291cmNlLCBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YVNvdXJjZVJvd30+XG4gICAgICAgICAgPElubGluZUZvcm1MYWJlbCBodG1sRm9yPVwiZGF0YS1zb3VyY2UtcGlja2VyXCIgd2lkdGg9eydhdXRvJ30+XG4gICAgICAgICAgICBEYXRhIHNvdXJjZVxuICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YVNvdXJjZVJvd0l0ZW19PlxuICAgICAgICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VEYXRhU291cmNlfVxuICAgICAgICAgICAgICBjdXJyZW50PXtvcHRpb25zLmRhdGFTb3VyY2V9XG4gICAgICAgICAgICAgIG1ldHJpY3M9e3RydWV9XG4gICAgICAgICAgICAgIG1peGVkPXt0cnVlfVxuICAgICAgICAgICAgICBkYXNoYm9hcmQ9e3RydWV9XG4gICAgICAgICAgICAgIHZhcmlhYmxlcz17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2RhdGFTb3VyY2UgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlUm93SXRlbX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwicXVlc3Rpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiT3BlbiBkYXRhIHNvdXJjZSBoZWxwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25PcGVuSGVscH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlUm93SXRlbU9wdGlvbnN9PlxuICAgICAgICAgICAgICAgIDxRdWVyeUdyb3VwT3B0aW9uc0VkaXRvclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25VcGRhdGVBbmRSdW59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtvbk9wZW5RdWVyeUluc3BlY3RvciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlUm93SXRlbX0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5RdWVyeUluc3BlY3Rvcn1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUXVlcnlUYWIucXVlcnlJbnNwZWN0b3JCdXR0b259XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFF1ZXJ5IGluc3BlY3RvclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBvbk9wZW5IZWxwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hlbHBPcGVuOiB0cnVlIH0pO1xuICB9O1xuXG4gIG9uQ2xvc2VIZWxwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hlbHBPcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuICByZW5kZXJNaXhlZFBpY2tlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgbWl4ZWQ9e2ZhbHNlfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFkZE1peGVkUXVlcnl9XG4gICAgICAgIGN1cnJlbnQ9e251bGx9XG4gICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgdmFyaWFibGVzPXt0cnVlfVxuICAgICAgICBvbkJsdXI9e3RoaXMub25NaXhlZFBpY2tlckJsdXJ9XG4gICAgICAgIG9wZW5NZW51T25Gb2N1cz17dHJ1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICBvbkFkZE1peGVkUXVlcnkgPSAoZGF0YXNvdXJjZTogYW55KSA9PiB7XG4gICAgdGhpcy5vbkFkZFF1ZXJ5KHsgZGF0YXNvdXJjZTogZGF0YXNvdXJjZS5uYW1lIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0FkZGluZ01peGVkOiBmYWxzZSwgc2Nyb2xsVG9wOiB0aGlzLnN0YXRlLnNjcm9sbFRvcCArIDEwMDAwIH0pO1xuICB9O1xuXG4gIG9uTWl4ZWRQaWNrZXJCbHVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0FkZGluZ01peGVkOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkFkZFF1ZXJ5ID0gKHF1ZXJ5OiBQYXJ0aWFsPERhdGFRdWVyeT4pID0+IHtcbiAgICBjb25zdCB7IGRzU2V0dGluZ3MsIHF1ZXJpZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5vblF1ZXJpZXNDaGFuZ2UoYWRkUXVlcnkocXVlcmllcywgcXVlcnksIHsgdHlwZTogZHNTZXR0aW5ncz8udHlwZSwgdWlkOiBkc1NldHRpbmdzPy51aWQgfSkpO1xuICAgIHRoaXMub25TY3JvbGxCb3R0b20oKTtcbiAgfTtcblxuICBzZXRTY3JvbGxUb3AgPSAoeyBzY3JvbGxUb3AgfTogU2Nyb2xsYmFyUG9zaXRpb24pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsVG9wOiBzY3JvbGxUb3AgfSk7XG4gIH07XG5cbiAgb25RdWVyaWVzQ2hhbmdlID0gKHF1ZXJpZXM6IERhdGFRdWVyeVtdKSA9PiB7XG4gICAgdGhpcy5vbkNoYW5nZSh7IHF1ZXJpZXMgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHF1ZXJpZXMgfSk7XG4gIH07XG5cbiAgcmVuZGVyUXVlcmllcyhkc1NldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykge1xuICAgIGNvbnN0IHsgb25SdW5RdWVyaWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGF0YSwgcXVlcmllcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpc1NoYXJlZERhc2hib2FyZFF1ZXJ5KGRzU2V0dGluZ3MubmFtZSkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEYXNoYm9hcmRRdWVyeUVkaXRvclxuICAgICAgICAgIHF1ZXJpZXM9e3F1ZXJpZXN9XG4gICAgICAgICAgcGFuZWxEYXRhPXtkYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUXVlcmllc0NoYW5nZX1cbiAgICAgICAgICBvblJ1blF1ZXJpZXM9e29uUnVuUXVlcmllc31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUXVlcnlUYWIuY29udGVudH0+XG4gICAgICAgIDxRdWVyeUVkaXRvclJvd3NcbiAgICAgICAgICBxdWVyaWVzPXtxdWVyaWVzfVxuICAgICAgICAgIGRzU2V0dGluZ3M9e2RzU2V0dGluZ3N9XG4gICAgICAgICAgb25RdWVyaWVzQ2hhbmdlPXt0aGlzLm9uUXVlcmllc0NoYW5nZX1cbiAgICAgICAgICBvbkFkZFF1ZXJ5PXt0aGlzLm9uQWRkUXVlcnl9XG4gICAgICAgICAgb25SdW5RdWVyaWVzPXtvblJ1blF1ZXJpZXN9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpc0V4cHJlc3Npb25zU3VwcG9ydGVkKGRzU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChkc1NldHRpbmdzLm1ldGEuYWxlcnRpbmcgfHwgZHNTZXR0aW5ncy5tZXRhLm1peGVkKSA9PT0gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlckV4dHJhQWN0aW9ucygpIHtcbiAgICByZXR1cm4gR3JvdXBBY3Rpb25Db21wb25lbnRzLmdldEFsbEV4dHJhUmVuZGVyQWN0aW9uKClcbiAgICAgIC5tYXAoKGFjdGlvbiwgaW5kZXgpID0+XG4gICAgICAgIGFjdGlvbih7XG4gICAgICAgICAgb25BZGRRdWVyeTogdGhpcy5vbkFkZFF1ZXJ5LFxuICAgICAgICAgIG9uQ2hhbmdlRGF0YVNvdXJjZTogdGhpcy5vbkNoYW5nZURhdGFTb3VyY2UsXG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gIH1cblxuICByZW5kZXJBZGRRdWVyeVJvdyhkc1NldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgc3R5bGVzOiBRdWVyaWVzVGFiU3R5bGVzKSB7XG4gICAgY29uc3QgeyBpc0FkZGluZ01peGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNob3dBZGRCdXR0b24gPSAhKGlzQWRkaW5nTWl4ZWQgfHwgaXNTaGFyZWREYXNoYm9hcmRRdWVyeShkc1NldHRpbmdzLm5hbWUpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIHNwYWNpbmc9XCJtZFwiIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICB7c2hvd0FkZEJ1dHRvbiAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFkZFF1ZXJ5Q2xpY2t9XG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5jb21wb25lbnRzLlF1ZXJ5VGFiLmFkZFF1ZXJ5fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFF1ZXJ5XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtjb25maWcuZXhwcmVzc2lvbnNFbmFibGVkICYmIHRoaXMuaXNFeHByZXNzaW9uc1N1cHBvcnRlZChkc1NldHRpbmdzKSAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFkZEV4cHJlc3Npb25DbGlja31cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXhwcmVzc2lvbkJ1dHRvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj5FeHByZXNzaW9uJm5ic3A7PC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7dGhpcy5yZW5kZXJFeHRyYUFjdGlvbnMoKX1cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxUb3AsIGlzSGVscE9wZW4sIGRzU2V0dGluZ3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEN1c3RvbVNjcm9sbGJhciBhdXRvSGVpZ2h0TWluPVwiMTAwJVwiIHNjcm9sbFRvcD17c2Nyb2xsVG9wfSBzZXRTY3JvbGxUb3A9e3RoaXMuc2V0U2Nyb2xsVG9wfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcldyYXBwZXJ9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlclRvcFNlY3Rpb24oc3R5bGVzKX1cbiAgICAgICAgICB7ZHNTZXR0aW5ncyAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXJpZXNXcmFwcGVyfT57dGhpcy5yZW5kZXJRdWVyaWVzKGRzU2V0dGluZ3MpfTwvZGl2PlxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBZGRRdWVyeVJvdyhkc1NldHRpbmdzLCBzdHlsZXMpfVxuICAgICAgICAgICAgICB7aXNIZWxwT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwiRGF0YSBzb3VyY2UgaGVscFwiIGlzT3Blbj17dHJ1ZX0gb25EaXNtaXNzPXt0aGlzLm9uQ2xvc2VIZWxwfT5cbiAgICAgICAgICAgICAgICAgIDxQbHVnaW5IZWxwIHBsdWdpbj17ZHNTZXR0aW5ncy5tZXRhfSB0eXBlPVwicXVlcnlfaGVscFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DdXN0b21TY3JvbGxiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCgpID0+IHtcbiAgY29uc3QgeyB0aGVtZSB9ID0gY29uZmlnO1xuXG4gIHJldHVybiB7XG4gICAgaW5uZXJXcmFwcGVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgYCxcbiAgICBkYXRhU291cmNlUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIGRhdGFTb3VyY2VSb3dJdGVtOiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZy5pbmxpbmVGb3JtTWFyZ2lufTtcbiAgICBgLFxuICAgIGRhdGFTb3VyY2VSb3dJdGVtT3B0aW9uczogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcuaW5saW5lRm9ybU1hcmdpbn07XG4gICAgYCxcbiAgICBxdWVyaWVzV3JhcHBlcjogY3NzYFxuICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgYCxcbiAgICBleHByZXNzaW9uV3JhcHBlcjogY3NzYGAsXG4gICAgZXhwcmVzc2lvbkJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgIGAsXG4gIH07XG59KTtcblxudHlwZSBRdWVyaWVzVGFiU3R5bGVzID0gUmV0dXJuVHlwZTx0eXBlb2YgZ2V0U3R5bGVzPjtcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIENoYW5nZUV2ZW50LCBGb2N1c0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBVdGlsc1xuaW1wb3J0IHsgcmFuZ2VVdGlsLCBQYW5lbERhdGEsIERhdGFTb3VyY2VBcGkgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgU3dpdGNoLCBJbnB1dCwgSW5saW5lRmllbGQsIElubGluZUZvcm1MYWJlbCwgc3R5bGVzRmFjdG9yeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuLy8gVHlwZXNcbmltcG9ydCB7IFF1ZXJ5T3BlcmF0aW9uUm93IH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9RdWVyeU9wZXJhdGlvblJvdy9RdWVyeU9wZXJhdGlvblJvdyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFF1ZXJ5R3JvdXBPcHRpb25zIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb3B0aW9uczogUXVlcnlHcm91cE9wdGlvbnM7XG4gIGRhdGFTb3VyY2U6IERhdGFTb3VyY2VBcGk7XG4gIGRhdGE6IFBhbmVsRGF0YTtcbiAgb25DaGFuZ2U6IChvcHRpb25zOiBRdWVyeUdyb3VwT3B0aW9ucykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgdGltZVJhbmdlRnJvbTogc3RyaW5nO1xuICB0aW1lUmFuZ2VTaGlmdDogc3RyaW5nO1xuICB0aW1lUmFuZ2VIaWRlOiBib29sZWFuO1xuICBpc09wZW46IGJvb2xlYW47XG4gIHJlbGF0aXZlVGltZUlzVmFsaWQ6IGJvb2xlYW47XG4gIHRpbWVTaGlmdElzVmFsaWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUdyb3VwT3B0aW9uc0VkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gcHJvcHM7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZVJhbmdlRnJvbTogb3B0aW9ucy50aW1lUmFuZ2U/LmZyb20gfHwgJycsXG4gICAgICB0aW1lUmFuZ2VTaGlmdDogb3B0aW9ucy50aW1lUmFuZ2U/LnNoaWZ0IHx8ICcnLFxuICAgICAgdGltZVJhbmdlSGlkZTogb3B0aW9ucy50aW1lUmFuZ2U/LmhpZGUgPz8gZmFsc2UsXG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgcmVsYXRpdmVUaW1lSXNWYWxpZDogdHJ1ZSxcbiAgICAgIHRpbWVTaGlmdElzVmFsaWQ6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIG9uUmVsYXRpdmVUaW1lQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGltZVJhbmdlRnJvbTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uVGltZVNoaWZ0Q2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGltZVJhbmdlU2hpZnQ6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBvbk92ZXJyaWRlVGltZSA9IChldmVudDogRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBuZXdWYWx1ZSA9IGVtcHR5VG9OdWxsKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRpbWVSYW5nZVZhbGlkYXRpb24obmV3VmFsdWUpO1xuXG4gICAgaWYgKGlzVmFsaWQgJiYgb3B0aW9ucy50aW1lUmFuZ2U/LmZyb20gIT09IG5ld1ZhbHVlKSB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHRpbWVSYW5nZToge1xuICAgICAgICAgIC4uLihvcHRpb25zLnRpbWVSYW5nZSA/PyB7fSksXG4gICAgICAgICAgZnJvbTogbmV3VmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgcmVsYXRpdmVUaW1lSXNWYWxpZDogaXNWYWxpZCB9KTtcbiAgfTtcblxuICBvblRpbWVTaGlmdCA9IChldmVudDogRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBuZXdWYWx1ZSA9IGVtcHR5VG9OdWxsKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRpbWVSYW5nZVZhbGlkYXRpb24obmV3VmFsdWUpO1xuXG4gICAgaWYgKGlzVmFsaWQgJiYgb3B0aW9ucy50aW1lUmFuZ2U/LnNoaWZ0ICE9PSBuZXdWYWx1ZSkge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB0aW1lUmFuZ2U6IHtcbiAgICAgICAgICAuLi4ob3B0aW9ucy50aW1lUmFuZ2UgPz8ge30pLFxuICAgICAgICAgIHNoaWZ0OiBuZXdWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lU2hpZnRJc1ZhbGlkOiBpc1ZhbGlkIH0pO1xuICB9O1xuXG4gIG9uVG9nZ2xlVGltZU92ZXJyaWRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZVJhbmdlSGlkZTogIXRoaXMuc3RhdGUudGltZVJhbmdlSGlkZSB9LCAoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHRpbWVSYW5nZToge1xuICAgICAgICAgIC4uLihvcHRpb25zLnRpbWVSYW5nZSA/PyB7fSksXG4gICAgICAgICAgaGlkZTogdGhpcy5zdGF0ZS50aW1lUmFuZ2VIaWRlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgb25DYWNoZVRpbWVvdXRCbHVyID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGNhY2hlVGltZW91dDogZW1wdHlUb051bGwoZXZlbnQudGFyZ2V0LnZhbHVlKSxcbiAgICB9KTtcbiAgfTtcblxuICBvbk1heERhdGFQb2ludHNCbHVyID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgbWF4RGF0YVBvaW50czogbnVtYmVyIHwgbnVsbCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcsIDEwKTtcblxuICAgIGlmIChpc05hTihtYXhEYXRhUG9pbnRzKSB8fCBtYXhEYXRhUG9pbnRzID09PSAwKSB7XG4gICAgICBtYXhEYXRhUG9pbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobWF4RGF0YVBvaW50cyAhPT0gb3B0aW9ucy5tYXhEYXRhUG9pbnRzKSB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIG1heERhdGFQb2ludHMsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25NaW5JbnRlcnZhbEJsdXIgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtaW5JbnRlcnZhbCA9IGVtcHR5VG9OdWxsKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKG1pbkludGVydmFsICE9PSBvcHRpb25zLm1pbkludGVydmFsKSB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIG1pbkludGVydmFsLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlckNhY2hlVGltZW91dE9wdGlvbigpIHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0b29sdGlwID0gYElmIHlvdXIgdGltZSBzZXJpZXMgc3RvcmUgaGFzIGEgcXVlcnkgY2FjaGUgdGhpcyBvcHRpb24gY2FuIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGNhY2hlIHRpbWVvdXQuIFNwZWNpZnkgYVxuICAgIG51bWVyaWMgdmFsdWUgaW4gc2Vjb25kcy5gO1xuXG4gICAgaWYgKCFkYXRhU291cmNlLm1ldGEucXVlcnlPcHRpb25zPy5jYWNoZVRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgd2lkdGg9ezl9IHRvb2x0aXA9e3Rvb2x0aXB9PlxuICAgICAgICAgICAgQ2FjaGUgdGltZW91dFxuICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtNlwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYwXCJcbiAgICAgICAgICAgIHNwZWxsQ2hlY2s9e2ZhbHNlfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQ2FjaGVUaW1lb3V0Qmx1cn1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3B0aW9ucy5jYWNoZVRpbWVvdXQgPz8gJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTWF4RGF0YVBvaW50c09wdGlvbigpIHtcbiAgICBjb25zdCB7IGRhdGEsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmVhbE1kID0gZGF0YS5yZXF1ZXN0Py5tYXhEYXRhUG9pbnRzO1xuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9ucy5tYXhEYXRhUG9pbnRzID8/ICcnO1xuICAgIGNvbnN0IGlzQXV0byA9IHZhbHVlID09PSAnJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWxcbiAgICAgICAgICAgIHdpZHRoPXs5fVxuICAgICAgICAgICAgdG9vbHRpcD17XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgVGhlIG1heGltdW0gZGF0YSBwb2ludHMgcGVyIHNlcmllcy4gVXNlZCBkaXJlY3RseSBieSBzb21lIGRhdGEgc291cmNlcyBhbmQgdXNlZCBpbiBjYWxjdWxhdGlvbiBvZiBhdXRvXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwuIFdpdGggc3RyZWFtaW5nIGRhdGEgdGhpcyB2YWx1ZSBpcyB1c2VkIGZvciB0aGUgcm9sbGluZyBidWZmZXIuXG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE1heCBkYXRhIHBvaW50c1xuICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC02XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHtyZWFsTWR9YH1cbiAgICAgICAgICAgIHNwZWxsQ2hlY2s9e2ZhbHNlfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uTWF4RGF0YVBvaW50c0JsdXJ9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2lzQXV0byAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgcXVlcnktc2VnbWVudC1vcGVyYXRvclwiPj08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsXCI+V2lkdGggb2YgcGFuZWw8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckludGVydmFsT3B0aW9uKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgZGF0YVNvdXJjZSwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByZWFsSW50ZXJ2YWwgPSBkYXRhLnJlcXVlc3Q/LmludGVydmFsO1xuICAgIGNvbnN0IG1pbkludGVydmFsT25EcyA9IGRhdGFTb3VyY2UuaW50ZXJ2YWwgPz8gJ05vIGxpbWl0JztcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsXG4gICAgICAgICAgICAgIHdpZHRoPXs5fVxuICAgICAgICAgICAgICB0b29sdGlwPXtcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgQSBsb3dlciBsaW1pdCBmb3IgdGhlIGludGVydmFsLiBSZWNvbW1lbmRlZCB0byBiZSBzZXQgdG8gd3JpdGUgZnJlcXVlbmN5LCBmb3IgZXhhbXBsZSA8Y29kZT4xbTwvY29kZT57JyAnfVxuICAgICAgICAgICAgICAgICAgaWYgeW91ciBkYXRhIGlzIHdyaXR0ZW4gZXZlcnkgbWludXRlLiBEZWZhdWx0IHZhbHVlIGNhbiBiZSBzZXQgaW4gZGF0YSBzb3VyY2Ugc2V0dGluZ3MgZm9yIG1vc3QgZGF0YVxuICAgICAgICAgICAgICAgICAgc291cmNlcy5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNaW4gaW50ZXJ2YWxcbiAgICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtNlwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHttaW5JbnRlcnZhbE9uRHN9YH1cbiAgICAgICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbk1pbkludGVydmFsQmx1cn1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zLm1pbkludGVydmFsID8/ICcnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWxcbiAgICAgICAgICAgICAgd2lkdGg9ezl9XG4gICAgICAgICAgICAgIHRvb2x0aXA9e1xuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICBUaGUgZXZhbHVhdGVkIGludGVydmFsIHRoYXQgaXMgc2VudCB0byBkYXRhIHNvdXJjZSBhbmQgaXMgdXNlZCBpbiA8Y29kZT4kX19pbnRlcnZhbDwvY29kZT4gYW5keycgJ31cbiAgICAgICAgICAgICAgICAgIDxjb2RlPiRfX2ludGVydmFsX21zPC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEludGVydmFsXG4gICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgd2lkdGg9ezZ9PntyZWFsSW50ZXJ2YWx9PC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgcXVlcnktc2VnbWVudC1vcGVyYXRvclwiPj08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbFwiPlRpbWUgcmFuZ2UgLyBtYXggZGF0YSBwb2ludHM8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgb25PcGVuT3B0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlIH0pO1xuICB9O1xuXG4gIG9uQ2xvc2VPcHRpb25zID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlckNvbGxhcHNlZFRleHQoc3R5bGVzOiBTdHlsZXNUeXBlKTogUmVhY3QuUmVhY3ROb2RlIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB7IGRhdGEsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxldCBtZERlc2MgPSBvcHRpb25zLm1heERhdGFQb2ludHMgPz8gJyc7XG4gICAgaWYgKG1kRGVzYyA9PT0gJycgJiYgZGF0YS5yZXF1ZXN0KSB7XG4gICAgICBtZERlc2MgPSBgYXV0byA9ICR7ZGF0YS5yZXF1ZXN0Lm1heERhdGFQb2ludHN9YDtcbiAgICB9XG5cbiAgICBsZXQgaW50ZXJ2YWxEZXNjID0gb3B0aW9ucy5taW5JbnRlcnZhbDtcbiAgICBpZiAoZGF0YS5yZXF1ZXN0KSB7XG4gICAgICBpbnRlcnZhbERlc2MgPSBgJHtkYXRhLnJlcXVlc3QuaW50ZXJ2YWx9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgezxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VkVGV4dH0+TUQgPSB7bWREZXNjfTwvZGl2Pn1cbiAgICAgICAgezxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VkVGV4dH0+SW50ZXJ2YWwgPSB7aW50ZXJ2YWxEZXNjfTwvZGl2Pn1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aW1lUmFuZ2VIaWRlOiBoaWRlVGltZU92ZXJyaWRlLCByZWxhdGl2ZVRpbWVJc1ZhbGlkLCB0aW1lU2hpZnRJc1ZhbGlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdGltZVJhbmdlRnJvbTogcmVsYXRpdmVUaW1lLCB0aW1lUmFuZ2VTaGlmdDogdGltZVNoaWZ0LCBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFF1ZXJ5T3BlcmF0aW9uUm93XG4gICAgICAgIGlkPVwiUXVlcnkgb3B0aW9uc1wiXG4gICAgICAgIGluZGV4PXswfVxuICAgICAgICB0aXRsZT1cIlF1ZXJ5IG9wdGlvbnNcIlxuICAgICAgICBoZWFkZXJFbGVtZW50PXt0aGlzLnJlbmRlckNvbGxhcHNlZFRleHQoc3R5bGVzKX1cbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIG9uT3Blbj17dGhpcy5vbk9wZW5PcHRpb25zfVxuICAgICAgICBvbkNsb3NlPXt0aGlzLm9uQ2xvc2VPcHRpb25zfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5yZW5kZXJNYXhEYXRhUG9pbnRzT3B0aW9uKCl9XG4gICAgICAgIHt0aGlzLnJlbmRlckludGVydmFsT3B0aW9uKCl9XG4gICAgICAgIHt0aGlzLnJlbmRlckNhY2hlVGltZW91dE9wdGlvbigpfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgd2lkdGg9ezl9PlJlbGF0aXZlIHRpbWU8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTZcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxaFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJlbGF0aXZlVGltZUNoYW5nZX1cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbk92ZXJyaWRlVGltZX1cbiAgICAgICAgICAgIGludmFsaWQ9eyFyZWxhdGl2ZVRpbWVJc1ZhbGlkfVxuICAgICAgICAgICAgdmFsdWU9e3JlbGF0aXZlVGltZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTlcIj5UaW1lIHNoaWZ0PC9zcGFuPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtNlwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjFoXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGltZVNoaWZ0Q2hhbmdlfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uVGltZVNoaWZ0fVxuICAgICAgICAgICAgaW52YWxpZD17IXRpbWVTaGlmdElzVmFsaWR9XG4gICAgICAgICAgICB2YWx1ZT17dGltZVNoaWZ0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KHRpbWVTaGlmdCB8fCByZWxhdGl2ZVRpbWUpICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJIaWRlIHRpbWUgaW5mb1wiIGxhYmVsV2lkdGg9ezE4fT5cbiAgICAgICAgICAgICAgPFN3aXRjaCB2YWx1ZT17aGlkZVRpbWVPdmVycmlkZX0gb25DaGFuZ2U9e3RoaXMub25Ub2dnbGVUaW1lT3ZlcnJpZGV9IC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9RdWVyeU9wZXJhdGlvblJvdz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHRpbWVSYW5nZVZhbGlkYXRpb24gPSAodmFsdWU6IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJhbmdlVXRpbC5pc1ZhbGlkVGltZVNwYW4odmFsdWUpO1xufTtcblxuY29uc3QgZW1wdHlUb051bGwgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IGNvbmZpZztcblxuICByZXR1cm4ge1xuICAgIGNvbGxhcHNlZFRleHQ6IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFdlYWt9O1xuICAgIGAsXG4gIH07XG59KTtcblxudHlwZSBTdHlsZXNUeXBlID0gUmV0dXJuVHlwZTx0eXBlb2YgZ2V0U3R5bGVzPjtcbiIsImltcG9ydCB7IERhdGFRdWVyeSwgRGF0YVNvdXJjZUFwaSwgaGFzUXVlcnlFeHBvcnRTdXBwb3J0LCBoYXNRdWVyeUltcG9ydFN1cHBvcnQgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblJlZmVyZW5jZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL0RhdGFTb3VyY2VXaXRoQmFja2VuZCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVRdWVyaWVzKFxuICBuZXh0RFM6IERhdGFTb3VyY2VBcGksXG4gIHF1ZXJpZXM6IERhdGFRdWVyeVtdLFxuICBjdXJyZW50RFM/OiBEYXRhU291cmNlQXBpXG4pOiBQcm9taXNlPERhdGFRdWVyeVtdPiB7XG4gIGxldCBuZXh0UXVlcmllcyA9IHF1ZXJpZXM7XG4gIGNvbnN0IGRhdGFzb3VyY2UgPSB7IHR5cGU6IG5leHREUy50eXBlLCB1aWQ6IG5leHREUy51aWQgfTtcblxuICAvLyB3ZSBhcmUgY2hhbmdpbmcgZGF0YSBzb3VyY2UgdHlwZVxuICBpZiAoY3VycmVudERTPy5tZXRhLmlkICE9PSBuZXh0RFMubWV0YS5pZCkge1xuICAgIC8vIElmIGNoYW5naW5nIHRvIG1peGVkIGRvIG5vdGhpbmdcbiAgICBpZiAobmV4dERTLm1ldGEubWl4ZWQpIHtcbiAgICAgIHJldHVybiBxdWVyaWVzO1xuICAgIH1cbiAgICAvLyB3aGVuIGJvdGggZGF0YSBzb3VyY2VzIHN1cHBvcnQgYWJzdHJhY3QgcXVlcmllc1xuICAgIGVsc2UgaWYgKGhhc1F1ZXJ5RXhwb3J0U3VwcG9ydChjdXJyZW50RFMpICYmIGhhc1F1ZXJ5SW1wb3J0U3VwcG9ydChuZXh0RFMpKSB7XG4gICAgICBjb25zdCBhYnN0cmFjdFF1ZXJpZXMgPSBhd2FpdCBjdXJyZW50RFMuZXhwb3J0VG9BYnN0cmFjdFF1ZXJpZXMocXVlcmllcyk7XG4gICAgICBuZXh0UXVlcmllcyA9IGF3YWl0IG5leHREUy5pbXBvcnRGcm9tQWJzdHJhY3RRdWVyaWVzKGFic3RyYWN0UXVlcmllcyk7XG4gICAgfVxuICAgIC8vIHdoZW4gZGF0YXNvdXJjZSBzdXBwb3J0cyBxdWVyeSBpbXBvcnRcbiAgICBlbHNlIGlmIChjdXJyZW50RFMgJiYgbmV4dERTLmltcG9ydFF1ZXJpZXMpIHtcbiAgICAgIG5leHRRdWVyaWVzID0gYXdhaXQgbmV4dERTLmltcG9ydFF1ZXJpZXMocXVlcmllcywgY3VycmVudERTKTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlIGNsZWFyIHF1ZXJpZXNcbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBbeyByZWZJZDogJ0EnLCBkYXRhc291cmNlIH1dO1xuICAgIH1cbiAgfVxuXG4gIGlmIChuZXh0UXVlcmllcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW3sgcmVmSWQ6ICdBJywgZGF0YXNvdXJjZSB9XTtcbiAgfVxuXG4gIC8vIFNldCBkYXRhIHNvdXJjZSBvbiBhbGwgcXVlcmllcyBleGNlcHQgZXhwcmVzc2lvbiBxdWVyaWVzXG4gIHJldHVybiBuZXh0UXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgaWYgKCFpc0V4cHJlc3Npb25SZWZlcmVuY2UocXVlcnkuZGF0YXNvdXJjZSkgJiYgIW5leHREUy5tZXRhLm1peGVkKSB7XG4gICAgICBxdWVyeS5kYXRhc291cmNlID0gZGF0YXNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIEFwcGx5RmllbGRPdmVycmlkZU9wdGlvbnMsXG4gIERhdGFUcmFuc2Zvcm1lckNvbmZpZyxcbiAgZGF0ZU1hdGgsXG4gIEZpZWxkQ29sb3JNb2RlSWQsXG4gIE5hdk1vZGVsSXRlbSxcbiAgUGFuZWxEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU9ic2VydmFibGUgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgUXVlcnlHcm91cCB9IGZyb20gJy4uL3F1ZXJ5L2NvbXBvbmVudHMvUXVlcnlHcm91cCc7XG5pbXBvcnQgeyBQYW5lbFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vcXVlcnkvc3RhdGUvUGFuZWxRdWVyeVJ1bm5lcic7XG5pbXBvcnQgeyBRdWVyeUdyb3VwT3B0aW9ucyB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgeyBQYW5lbFJlbmRlcmVyIH0gZnJvbSAnLi4vcGFuZWwvY29tcG9uZW50cy9QYW5lbFJlbmRlcmVyJztcbmltcG9ydCB7IHVzZUFwcE5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgcXVlcnlSdW5uZXI6IFBhbmVsUXVlcnlSdW5uZXI7XG4gIHF1ZXJ5T3B0aW9uczogUXVlcnlHcm91cE9wdGlvbnM7XG4gIGRhdGE/OiBQYW5lbERhdGE7XG59XG5cbmV4cG9ydCBjb25zdCBUZXN0U3R1ZmZQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxTdGF0ZT4oZ2V0RGVmYXVsdFN0YXRlKCkpO1xuICBjb25zdCB7IHF1ZXJ5T3B0aW9ucywgcXVlcnlSdW5uZXIgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IG9uUnVuUXVlcmllcyA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lUmFuZ2UgPSB7IGZyb206ICdub3ctMWgnLCB0bzogJ25vdycgfTtcblxuICAgIHF1ZXJ5UnVubmVyLnJ1bih7XG4gICAgICBxdWVyaWVzOiBxdWVyeU9wdGlvbnMucXVlcmllcyxcbiAgICAgIGRhdGFzb3VyY2U6IHF1ZXJ5T3B0aW9ucy5kYXRhU291cmNlLFxuICAgICAgdGltZXpvbmU6ICdicm93c2VyJyxcbiAgICAgIHRpbWVSYW5nZTogeyBmcm9tOiBkYXRlTWF0aC5wYXJzZSh0aW1lUmFuZ2UuZnJvbSkhLCB0bzogZGF0ZU1hdGgucGFyc2UodGltZVJhbmdlLnRvKSEsIHJhdzogdGltZVJhbmdlIH0sXG4gICAgICBtYXhEYXRhUG9pbnRzOiBxdWVyeU9wdGlvbnMubWF4RGF0YVBvaW50cyA/PyAxMDAsXG4gICAgICBtaW5JbnRlcnZhbDogcXVlcnlPcHRpb25zLm1pbkludGVydmFsLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uT3B0aW9uc0NoYW5nZSA9IChxdWVyeU9wdGlvbnM6IFF1ZXJ5R3JvdXBPcHRpb25zKSA9PiB7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgcXVlcnlPcHRpb25zIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gZGF0YVxuICAgKi9cbiAgY29uc3Qgb2JzZXJ2YWJsZSA9IHVzZU1lbW8oKCkgPT4gcXVlcnlSdW5uZXIuZ2V0RGF0YSh7IHdpdGhGaWVsZENvbmZpZzogdHJ1ZSwgd2l0aFRyYW5zZm9ybXM6IHRydWUgfSksIFtxdWVyeVJ1bm5lcl0pO1xuICBjb25zdCBkYXRhID0gdXNlT2JzZXJ2YWJsZShvYnNlcnZhYmxlKTtcblxuICBjb25zdCBub2RlOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaWQ6ICd0ZXN0LXBhZ2UnLFxuICAgIHRleHQ6ICdUZXN0IHBhZ2UnLFxuICAgIGljb246ICdkYXNoYm9hcmQnLFxuICAgIHN1YlRpdGxlOiAnRk9SIFRFU1RJTkchJyxcbiAgICB1cmw6ICdzYW5kYm94L3Rlc3QnLFxuICB9O1xuXG4gIGNvbnN0IG5vdGlmeUFwcCA9IHVzZUFwcE5vdGlmaWNhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e3sgbm9kZTogbm9kZSwgbWFpbjogbm9kZSB9fT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgPEF1dG9TaXplciBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc2MDBweCcgfX0+XG4gICAgICAgICAgICB7KHsgd2lkdGggfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8UGFuZWxSZW5kZXJlclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhlbGxvXCJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luSWQ9XCJ0aW1lc2VyaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e319XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29uZmlnPXt7IGRlZmF1bHRzOiB7fSwgb3ZlcnJpZGVzOiBbXSB9fVxuICAgICAgICAgICAgICAgICAgICB0aW1lWm9uZT1cImJyb3dzZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZSBkYXRhPXtkYXRhLnNlcmllc1swXX0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9BdXRvU2l6ZXI+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTZweCcsIGhlaWdodDogJzQ1JScgfX0+XG4gICAgICAgICAgPFF1ZXJ5R3JvdXBcbiAgICAgICAgICAgIG9wdGlvbnM9e3F1ZXJ5T3B0aW9uc31cbiAgICAgICAgICAgIHF1ZXJ5UnVubmVyPXtxdWVyeVJ1bm5lcn1cbiAgICAgICAgICAgIG9uUnVuUXVlcmllcz17b25SdW5RdWVyaWVzfVxuICAgICAgICAgICAgb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxZW0nIH19PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbm90aWZ5QXBwLnN1Y2Nlc3MoJ1N1Y2Nlc3MgdG9hc3QnLCAnc29tZSBtb3JlIHRleHQgZ29lcyBoZXJlJyl9IHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBTdWNjZXNzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbm90aWZ5QXBwLndhcm5pbmcoJ1dhcm5pbmcgdG9hc3QnLCAnc29tZSBtb3JlIHRleHQgZ29lcyBoZXJlJywgJ2JvZ3VzLXRyYWNlLTk5OTk5Jyl9XG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBXYXJuaW5nXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbm90aWZ5QXBwLmVycm9yKCdFcnJvciB0b2FzdCcsICdzb21lIG1vcmUgdGV4dCBnb2VzIGhlcmUnLCAnYm9ndXMtdHJhY2UtZmRzZmRmc2ZkcycpfVxuICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBFcnJvclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFN0YXRlKCk6IFN0YXRlIHtcbiAgY29uc3Qgb3B0aW9uczogQXBwbHlGaWVsZE92ZXJyaWRlT3B0aW9ucyA9IHtcbiAgICBmaWVsZENvbmZpZzoge1xuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLlBhbGV0dGVDbGFzc2ljLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG92ZXJyaWRlczogW10sXG4gICAgfSxcbiAgICByZXBsYWNlVmFyaWFibGVzOiAodjogc3RyaW5nKSA9PiB2LFxuICAgIHRoZW1lOiBjb25maWcudGhlbWUyLFxuICB9O1xuXG4gIGNvbnN0IGRhdGFDb25maWcgPSB7XG4gICAgZ2V0VHJhbnNmb3JtYXRpb25zOiAoKSA9PiBbXSBhcyBEYXRhVHJhbnNmb3JtZXJDb25maWdbXSxcbiAgICBnZXRGaWVsZE92ZXJyaWRlT3B0aW9uczogKCkgPT4gb3B0aW9ucyxcbiAgICBnZXREYXRhU3VwcG9ydDogKCkgPT4gKHsgYW5ub3RhdGlvbnM6IGZhbHNlLCBhbGVydFN0YXRlczogZmFsc2UgfSksXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBxdWVyeVJ1bm5lcjogbmV3IFBhbmVsUXVlcnlSdW5uZXIoZGF0YUNvbmZpZyksXG4gICAgcXVlcnlPcHRpb25zOiB7XG4gICAgICBxdWVyaWVzOiBbXSxcbiAgICAgIGRhdGFTb3VyY2U6IHtcbiAgICAgICAgbmFtZTogJ2dkZXYtdGVzdGRhdGEnLFxuICAgICAgfSxcbiAgICAgIG1heERhdGFQb2ludHM6IDEwMCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0U3R1ZmZQYWdlO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBmcm9tICcuL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuZnVuY3Rpb24gdXNlT2JzZXJ2YWJsZShvYnNlcnZhYmxlJCwgaW5pdGlhbFZhbHVlKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKSwgdmFsdWUgPSBfYVswXSwgdXBkYXRlID0gX2FbMV07XG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzID0gb2JzZXJ2YWJsZSQuc3Vic2NyaWJlKHVwZGF0ZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgfSwgW29ic2VydmFibGUkXSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0IGRlZmF1bHQgdXNlT2JzZXJ2YWJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXJNYXJrZG93biIsImdldEJhY2tlbmRTcnYiLCJQbHVnaW5IZWxwIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImhlbHAiLCJwbHVnaW4iLCJ0eXBlIiwicHJvcHMiLCJzZXRTdGF0ZSIsImdldCIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiaGVscEh0bWwiLCJjb25zdHJ1Y3RQbGFjZWhvbGRlckluZm8iLCJjYXRjaCIsImNvbXBvbmVudERpZE1vdW50IiwibG9hZEhlbHAiLCJyZW5kZXIiLCJzdGF0ZSIsIl9faHRtbCIsIlF1ZXJ5RWRpdG9yUm93IiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJvcHBhYmxlIiwiZ2V0RGF0YVNvdXJjZVNydiIsInJlcG9ydEludGVyYWN0aW9uIiwiUXVlcnlFZGl0b3JSb3dzIiwicXVlcnkiLCJvblF1ZXJpZXNDaGFuZ2UiLCJxdWVyaWVzIiwiZmlsdGVyIiwiaXRlbSIsInJlc3VsdCIsImRzU2V0dGluZ3MiLCJzdGFydEluZGV4Iiwic291cmNlIiwiaW5kZXgiLCJudW1iZXJPZlF1ZXJpZXMiLCJsZW5ndGgiLCJkYXRhc291cmNlVHlwZSIsImRlc3RpbmF0aW9uIiwiZW5kSW5kZXgiLCJ1cGRhdGUiLCJBcnJheSIsImZyb20iLCJyZW1vdmVkIiwic3BsaWNlIiwib25DaGFuZ2VRdWVyeSIsIm1hcCIsIml0ZW1JbmRleCIsIm9uRGF0YVNvdXJjZUNoYW5nZSIsImRhdGFTb3VyY2UiLCJkYXRhc291cmNlIiwicHJldmlvdXMiLCJnZXRJbnN0YW5jZVNldHRpbmdzIiwidWlkIiwicmVmSWQiLCJoaWRlIiwiZGF0YSIsImFwcCIsImhpc3RvcnkiLCJldmVudEJ1cyIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwicHJvdmlkZWQiLCJpbm5lclJlZiIsImRyb3BwYWJsZVByb3BzIiwiZGF0YVNvdXJjZVNldHRpbmdzIiwiZ2V0RGF0YVNvdXJjZVNldHRpbmdzIiwib25DaGFuZ2VEYXRhU291cmNlU2V0dGluZ3MiLCJtZXRhIiwibWl4ZWQiLCJzZXR0aW5ncyIsInVuZGVmaW5lZCIsIm9uUmVtb3ZlUXVlcnkiLCJvbkFkZFF1ZXJ5Iiwib25SdW5RdWVyaWVzIiwicGxhY2Vob2xkZXIiLCJncm91cFNldHRpbmdzIiwicXVlcnlTZXR0aW5ncyIsIkJ1dHRvbiIsIkN1c3RvbVNjcm9sbGJhciIsIkhvcml6b250YWxHcm91cCIsIklubGluZUZvcm1MYWJlbCIsIk1vZGFsIiwic3R5bGVzRmFjdG9yeSIsIkRhdGFTb3VyY2VQaWNrZXIiLCJiYWNrZW5kU3J2IiwiY29uZmlnIiwiZ2V0RGVmYXVsdFRpbWVSYW5nZSIsIkxvYWRpbmdTdGF0ZSIsImFkZFF1ZXJ5IiwiZXhwcmVzc2lvbkRhdGFzb3VyY2UiLCJzZWxlY3RvcnMiLCJRdWVyeUdyb3VwT3B0aW9uc0VkaXRvciIsIkRhc2hib2FyZFF1ZXJ5RWRpdG9yIiwiaXNTaGFyZWREYXNoYm9hcmRRdWVyeSIsImNzcyIsIkdyb3VwQWN0aW9uQ29tcG9uZW50cyIsInVwZGF0ZVF1ZXJpZXMiLCJRdWVyeUdyb3VwIiwiaXNMb2FkaW5nSGVscCIsImhlbHBDb250ZW50IiwiaXNQaWNrZXJPcGVuIiwiaXNBZGRpbmdNaXhlZCIsImlzSGVscE9wZW4iLCJzY3JvbGxUb3AiLCJOb3RTdGFydGVkIiwic2VyaWVzIiwidGltZVJhbmdlIiwibmV3U2V0dGluZ3MiLCJjdXJyZW50RFMiLCJuZXh0RFMiLCJkYXRhU291cmNlU3J2IiwibmFtZSIsIm9uQ2hhbmdlIiwiZGVmYXVsdCIsImlzRGVmYXVsdCIsIm5ld1F1ZXJ5Iiwib25TY3JvbGxCb3R0b20iLCJvcHRpb25zIiwib25PcHRpb25zQ2hhbmdlIiwib25BZGRNaXhlZFF1ZXJ5Iiwib25NaXhlZFBpY2tlckJsdXIiLCJxdWVyeVJ1bm5lciIsInF1ZXJ5U3Vic2NyaXB0aW9uIiwiZ2V0RGF0YSIsIndpdGhUcmFuc2Zvcm1zIiwid2l0aEZpZWxkQ29uZmlnIiwic3Vic2NyaWJlIiwibmV4dCIsIm9uUGFuZWxEYXRhVXBkYXRlIiwiZHMiLCJkZWZhdWx0RGF0YVNvdXJjZSIsImdldFJlZiIsInEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInVuc3Vic2NyaWJlIiwiY2hhbmdlZFByb3BzIiwicmVuZGVyVG9wU2VjdGlvbiIsInN0eWxlcyIsIm9uT3BlblF1ZXJ5SW5zcGVjdG9yIiwiZGF0YVNvdXJjZVJvdyIsImRhdGFTb3VyY2VSb3dJdGVtIiwib25DaGFuZ2VEYXRhU291cmNlIiwib25PcGVuSGVscCIsImRhdGFTb3VyY2VSb3dJdGVtT3B0aW9ucyIsIm9uVXBkYXRlQW5kUnVuIiwiY29tcG9uZW50cyIsIlF1ZXJ5VGFiIiwicXVlcnlJbnNwZWN0b3JCdXR0b24iLCJyZW5kZXJRdWVyaWVzIiwiY29udGVudCIsImlzRXhwcmVzc2lvbnNTdXBwb3J0ZWQiLCJhbGVydGluZyIsInJlbmRlckV4dHJhQWN0aW9ucyIsImdldEFsbEV4dHJhUmVuZGVyQWN0aW9uIiwiYWN0aW9uIiwia2V5IiwiQm9vbGVhbiIsInJlbmRlckFkZFF1ZXJ5Um93Iiwic2hvd0FkZEJ1dHRvbiIsIm9uQWRkUXVlcnlDbGljayIsImV4cHJlc3Npb25zRW5hYmxlZCIsIm9uQWRkRXhwcmVzc2lvbkNsaWNrIiwiZXhwcmVzc2lvbkJ1dHRvbiIsImdldFN0eWxlcyIsInNldFNjcm9sbFRvcCIsImlubmVyV3JhcHBlciIsInF1ZXJpZXNXcmFwcGVyIiwib25DbG9zZUhlbHAiLCJ0aGVtZSIsInNwYWNpbmciLCJtZCIsImlubGluZUZvcm1NYXJnaW4iLCJleHByZXNzaW9uV3JhcHBlciIsInNtIiwicmFuZ2VVdGlsIiwiU3dpdGNoIiwiSW5wdXQiLCJJbmxpbmVGaWVsZCIsIlF1ZXJ5T3BlcmF0aW9uUm93IiwiY29uc3RydWN0b3IiLCJldmVudCIsInRpbWVSYW5nZUZyb20iLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpbWVSYW5nZVNoaWZ0IiwibmV3VmFsdWUiLCJlbXB0eVRvTnVsbCIsImlzVmFsaWQiLCJ0aW1lUmFuZ2VWYWxpZGF0aW9uIiwicmVsYXRpdmVUaW1lSXNWYWxpZCIsInNoaWZ0IiwidGltZVNoaWZ0SXNWYWxpZCIsInRpbWVSYW5nZUhpZGUiLCJjYWNoZVRpbWVvdXQiLCJtYXhEYXRhUG9pbnRzIiwicGFyc2VJbnQiLCJpc05hTiIsIm1pbkludGVydmFsIiwiaXNPcGVuIiwicmVuZGVyQ2FjaGVUaW1lb3V0T3B0aW9uIiwidG9vbHRpcCIsInF1ZXJ5T3B0aW9ucyIsIm9uQ2FjaGVUaW1lb3V0Qmx1ciIsInJlbmRlck1heERhdGFQb2ludHNPcHRpb24iLCJyZWFsTWQiLCJyZXF1ZXN0IiwiaXNBdXRvIiwib25NYXhEYXRhUG9pbnRzQmx1ciIsInJlbmRlckludGVydmFsT3B0aW9uIiwicmVhbEludGVydmFsIiwiaW50ZXJ2YWwiLCJtaW5JbnRlcnZhbE9uRHMiLCJvbk1pbkludGVydmFsQmx1ciIsInJlbmRlckNvbGxhcHNlZFRleHQiLCJtZERlc2MiLCJpbnRlcnZhbERlc2MiLCJjb2xsYXBzZWRUZXh0IiwiaGlkZVRpbWVPdmVycmlkZSIsInJlbGF0aXZlVGltZSIsInRpbWVTaGlmdCIsIm9uT3Blbk9wdGlvbnMiLCJvbkNsb3NlT3B0aW9ucyIsIm9uUmVsYXRpdmVUaW1lQ2hhbmdlIiwib25PdmVycmlkZVRpbWUiLCJvblRpbWVTaGlmdENoYW5nZSIsIm9uVGltZVNoaWZ0Iiwib25Ub2dnbGVUaW1lT3ZlcnJpZGUiLCJpc1ZhbGlkVGltZVNwYW4iLCJ0eXBvZ3JhcGh5Iiwic2l6ZSIsImNvbG9ycyIsInRleHRXZWFrIiwiaGFzUXVlcnlFeHBvcnRTdXBwb3J0IiwiaGFzUXVlcnlJbXBvcnRTdXBwb3J0IiwiaXNFeHByZXNzaW9uUmVmZXJlbmNlIiwibmV4dFF1ZXJpZXMiLCJhYnN0cmFjdFF1ZXJpZXMiLCJleHBvcnRUb0Fic3RyYWN0UXVlcmllcyIsImltcG9ydEZyb21BYnN0cmFjdFF1ZXJpZXMiLCJpbXBvcnRRdWVyaWVzIiwiZGF0ZU1hdGgiLCJGaWVsZENvbG9yTW9kZUlkIiwiVGFibGUiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VPYnNlcnZhYmxlIiwiUGFuZWxRdWVyeVJ1bm5lciIsIlBhZ2UiLCJBdXRvU2l6ZXIiLCJQYW5lbFJlbmRlcmVyIiwidXNlQXBwTm90aWZpY2F0aW9uIiwiVGVzdFN0dWZmUGFnZSIsImdldERlZmF1bHRTdGF0ZSIsInRvIiwicnVuIiwidGltZXpvbmUiLCJwYXJzZSIsInJhdyIsIm9ic2VydmFibGUiLCJub2RlIiwidGV4dCIsImljb24iLCJzdWJUaXRsZSIsInVybCIsIm5vdGlmeUFwcCIsIm1haW4iLCJ3aWR0aCIsImhlaWdodCIsImRlZmF1bHRzIiwib3ZlcnJpZGVzIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImdhcCIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZmllbGRDb25maWciLCJjb2xvciIsIm1vZGUiLCJQYWxldHRlQ2xhc3NpYyIsInJlcGxhY2VWYXJpYWJsZXMiLCJ2IiwidGhlbWUyIiwiZGF0YUNvbmZpZyIsImdldFRyYW5zZm9ybWF0aW9ucyIsImdldEZpZWxkT3ZlcnJpZGVPcHRpb25zIiwiZ2V0RGF0YVN1cHBvcnQiLCJhbm5vdGF0aW9ucyIsImFsZXJ0U3RhdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==
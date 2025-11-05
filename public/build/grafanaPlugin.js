"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["grafanaPlugin"],{

/***/ "./public/app/plugins/datasource/grafana/components/AnnotationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnnotationQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var app_features_annotations_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/annotations/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const matchTooltipContent = 'Enabling this returns annotations that match any of the tags specified below';

const tagsTooltipContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
  children: "Specify a list of tags to match. To specify a key and value tag use `key:value` syntax."
});

const annotationTypes = [{
  label: 'Dashboard',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaAnnotationType.Dashboard,
  description: 'Query for events created on this dashboard and show them in the panels where they where created'
}, {
  label: 'Tags',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaAnnotationType.Tags,
  description: 'This will fetch any annotation events that match the tags filter'
}];
const limitOptions = [10, 50, 100, 200, 300, 500, 1000, 2000].map(limit => ({
  label: String(limit),
  value: limit
}));
function AnnotationQueryEditor({
  query,
  onChange
}) {
  const annotationQuery = query;
  const {
    limit,
    matchAny,
    tags,
    type
  } = annotationQuery;
  const styles = getStyles();

  const onFilterByChange = newValue => onChange(Object.assign({}, annotationQuery, {
    type: newValue.value
  }));

  const onMaxLimitChange = newValue => onChange(Object.assign({}, annotationQuery, {
    limit: newValue.value
  }));

  const onMatchAnyChange = newValue => onChange(Object.assign({}, annotationQuery, {
    matchAny: newValue.target.checked
  }));

  const onTagsChange = tags => onChange(Object.assign({}, annotationQuery, {
    tags
  }));

  const onFormatCreateLabel = input => `Use custom value: ${input}`;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Filter by",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        menuShouldPortal: true,
        inputId: "grafana-annotations__filter-by",
        options: annotationTypes,
        value: type,
        onChange: onFilterByChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Max limit",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        menuShouldPortal: true,
        inputId: "grafana-annotations__limit",
        width: 16,
        options: limitOptions,
        value: limit,
        onChange: onMaxLimitChange
      })
    }), type === _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaAnnotationType.Tags && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Match any",
        description: matchTooltipContent,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, {
          id: "grafana-annotations__match-any",
          value: matchAny,
          onChange: onMatchAnyChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Tags",
        description: tagsTooltipContent,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_3__.TagFilter, {
          allowCustomValue: true,
          formatCreateLabel: onFormatCreateLabel,
          inputId: "grafana-annotations__tags",
          onChange: onTagsChange,
          tagOptions: app_features_annotations_api__WEBPACK_IMPORTED_MODULE_5__.getAnnotationTags,
          tags: tags !== null && tags !== void 0 ? tags : []
        })
      })]
    })]
  });
}

const getStyles = () => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      max-width: 600px;
    `
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const labelWidth = 12;
class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      channels: [],
      channelFields: {}
    });

    _defineProperty(this, "queryTypes", [{
      label: 'Random Walk',
      value: _types__WEBPACK_IMPORTED_MODULE_3__.GrafanaQueryType.RandomWalk,
      description: 'Random signal within the selected time range'
    }, {
      label: 'Live Measurements',
      value: _types__WEBPACK_IMPORTED_MODULE_3__.GrafanaQueryType.LiveMeasurements,
      description: 'Stream real-time measurements from Grafana'
    }, {
      label: 'List public files',
      value: _types__WEBPACK_IMPORTED_MODULE_3__.GrafanaQueryType.List,
      description: 'Show directory listings for public resources'
    }]);

    _defineProperty(this, "onQueryTypeChange", sel => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        queryType: sel.value
      }));
      onRunQuery(); // Reload the channel list

      this.loadChannelInfo();
    });

    _defineProperty(this, "onChannelChange", sel => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        channel: sel === null || sel === void 0 ? void 0 : sel.value
      }));
      onRunQuery();
    });

    _defineProperty(this, "onFieldNamesChange", item => {
      var _query$filter, _query$filter$fields;

      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      let fields = [];

      if (Array.isArray(item)) {
        fields = item.map(v => v.value);
      } else if (item.value) {
        fields = [item.value];
      } // When adding the first field, also add time (if it exists)


      if (fields.length === 1 && !((_query$filter = query.filter) !== null && _query$filter !== void 0 && (_query$filter$fields = _query$filter.fields) !== null && _query$filter$fields !== void 0 && _query$filter$fields.length) && query.channel) {
        var _this$state$channelFi;

        const names = (_this$state$channelFi = this.state.channelFields[query.channel]) !== null && _this$state$channelFi !== void 0 ? _this$state$channelFi : [];
        const tf = names.find(f => f.value === 'time' || f.value === 'Time');

        if (tf && tf.value && tf.value !== fields[0]) {
          fields = [tf.value, ...fields];
        }
      }

      onChange(Object.assign({}, query, {
        filter: Object.assign({}, query.filter, {
          fields
        })
      }));
      onRunQuery();
    });

    _defineProperty(this, "checkAndUpdateValue", (key, txt) => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;

      if (key === 'buffer') {
        let buffer;

        if (txt) {
          try {
            buffer = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(txt) * 1000;
          } catch (err) {
            console.warn('ERROR', err);
          }
        }

        onChange(Object.assign({}, query, {
          buffer
        }));
      } else {
        onChange(Object.assign({}, query, {
          [key]: txt
        }));
      }

      onRunQuery();
    });

    _defineProperty(this, "handleEnterKey", e => {
      if (e.key !== 'Enter') {
        return;
      }

      this.checkAndUpdateValue('buffer', e.target.value);
    });

    _defineProperty(this, "handleBlur", e => {
      this.checkAndUpdateValue('buffer', e.target.value);
    });

    _defineProperty(this, "onFolderChanged", sel => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        path: sel === null || sel === void 0 ? void 0 : sel.value
      }));
      onRunQuery();
    });

    _defineProperty(this, "handleSearchEnterKey", e => {
      if (e.key !== 'Enter') {
        return;
      }

      this.checkAndUpdateValue('query', e.target.value);
    });

    _defineProperty(this, "handleSearchBlur", e => {
      this.checkAndUpdateValue('query', e.target.value);
    });

    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.panelTitleSearch) {
      this.queryTypes.push({
        label: 'Search',
        value: _types__WEBPACK_IMPORTED_MODULE_3__.GrafanaQueryType.Search,
        description: 'Search for grafana resources'
      });
    }
  }

  loadChannelInfo() {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().fetch({
      url: 'api/live/list'
    }).subscribe({
      next: v => {
        var _v$data;

        const channelInfo = (_v$data = v.data) === null || _v$data === void 0 ? void 0 : _v$data.channels;

        if (channelInfo !== null && channelInfo !== void 0 && channelInfo.length) {
          const channelFields = {};
          const channels = channelInfo.map(c => {
            if (c.data) {
              const distinctFields = new Set();
              const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dataFrameFromJSON)(c.data);

              for (const f of frame.fields) {
                distinctFields.add(f.name);
              }

              channelFields[c.channel] = Array.from(distinctFields).map(n => ({
                value: n,
                label: n
              }));
            }

            return {
              value: c.channel,
              label: c.channel + ' [' + c.minute_rate + ' msg/min]'
            };
          });
          this.setState({
            channelFields,
            channels
          });
        }
      }
    });
  }

  loadFolderInfo() {
    const query = {
      targets: [{
        queryType: _types__WEBPACK_IMPORTED_MODULE_3__.GrafanaQueryType.List,
        refId: 'A'
      }]
    };
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSrv)().get('-- Grafana --').then(ds => {
      const gds = ds;
      gds.query(query).subscribe({
        next: rsp => {
          if (rsp.data.length) {
            const names = rsp.data[0].fields[0];
            const folders = names.values.toArray().map(v => ({
              value: v,
              label: v
            }));
            this.setState({
              folders
            });
          }
        }
      });
    });
  }

  componentDidMount() {
    this.loadChannelInfo();
  }

  renderMeasurementsQuery() {
    var _channelFields$channe;

    let {
      channel,
      filter,
      buffer
    } = this.props.query;
    let {
      channels,
      channelFields
    } = this.state;
    let currentChannel = channels.find(c => c.value === channel);

    if (channel && !currentChannel) {
      currentChannel = {
        value: channel,
        label: channel,
        description: `Connected to ${channel}`
      };
      channels = [currentChannel, ...channels];
    }

    const distinctFields = new Set();
    const fields = channel ? (_channelFields$channe = channelFields[channel]) !== null && _channelFields$channe !== void 0 ? _channelFields$channe : [] : []; // if (data && data.series?.length) {
    //   for (const frame of data.series) {
    //     for (const field of frame.fields) {
    //       if (distinctFields.has(field.name) || !field.name) {
    //         continue;
    //       }
    //       fields.push({
    //         value: field.name,
    //         label: field.name,
    //         description: `(${getFrameDisplayName(frame)} / ${field.type})`,
    //       });
    //       distinctFields.add(field.name);
    //     }
    //   }
    // }

    if (filter !== null && filter !== void 0 && filter.fields) {
      for (const f of filter.fields) {
        if (!distinctFields.has(f)) {
          fields.push({
            value: f,
            label: `${f} (not loaded)`,
            description: `Configured, but not found in the query results`
          });
          distinctFields.add(f);
        }
      }
    }

    let formattedTime = '';

    if (buffer) {
      formattedTime = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.secondsToHms(buffer / 1000);
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Channel",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
            menuShouldPortal: true,
            options: channels,
            value: currentChannel || '',
            onChange: this.onChannelChange,
            allowCustomValue: true,
            backspaceRemovesValue: true,
            placeholder: "Select measurements channel",
            isClearable: true,
            noOptionsMessage: "Enter channel name",
            formatCreateLabel: input => `Connect to: ${input}`
          })
        })
      }), channel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Fields",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
            menuShouldPortal: true,
            options: fields,
            value: (filter === null || filter === void 0 ? void 0 : filter.fields) || [],
            onChange: this.onFieldNamesChange,
            allowCustomValue: true,
            backspaceRemovesValue: true,
            placeholder: "All fields",
            isClearable: true,
            noOptionsMessage: "Unable to list all fields",
            formatCreateLabel: input => `Field: ${input}`,
            isSearchable: true,
            isMulti: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Buffer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            placeholder: "Auto",
            width: 12,
            defaultValue: formattedTime,
            onKeyDown: this.handleEnterKey,
            onBlur: this.handleBlur,
            spellCheck: false
          })
        })]
      }), _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
        title: "Grafana Live - Measurements",
        severity: "info",
        children: "This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready."
      }))]
    });
  }

  renderListPublicFiles() {
    let {
      path
    } = this.props.query;
    let {
      folders
    } = this.state;

    if (!folders) {
      folders = [];
      this.loadFolderInfo();
    }

    const currentFolder = folders.find(f => f.value === path);

    if (path && !currentFolder) {
      folders = [...folders, {
        value: path,
        label: path
      }];
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Path",
        grow: true,
        labelWidth: labelWidth,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
          menuShouldPortal: true,
          options: folders,
          value: currentFolder || '',
          onChange: this.onFolderChanged,
          allowCustomValue: true,
          backspaceRemovesValue: true,
          placeholder: "Select folder",
          isClearable: true,
          formatCreateLabel: input => `Folder: ${input}`
        })
      })
    });
  }

  renderSearch() {
    let {
      query
    } = this.props.query;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Query",
        grow: true,
        labelWidth: labelWidth,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          placeholder: "Everything",
          defaultValue: query !== null && query !== void 0 ? query : '',
          onKeyDown: this.handleSearchEnterKey,
          onBlur: this.handleSearchBlur,
          spellCheck: false
        })
      })
    });
  }

  render() {
    const query = Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_3__.defaultQuery, this.props.query);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Query type",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
            menuShouldPortal: true,
            options: this.queryTypes,
            value: this.queryTypes.find(v => v.value === query.queryType) || this.queryTypes[0],
            onChange: this.onQueryTypeChange
          })
        })
      }), query.queryType === _types__WEBPACK_IMPORTED_MODULE_3__.GrafanaQueryType.LiveMeasurements && this.renderMeasurementsQuery(), query.queryType === _types__WEBPACK_IMPORTED_MODULE_3__.GrafanaQueryType.List && this.renderListPublicFiles(), query.queryType === _types__WEBPACK_IMPORTED_MODULE_3__.GrafanaQueryType.Search && this.renderSearch()]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaDatasource": () => (/* binding */ GrafanaDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/AnnotationQueryEditor.tsx");
/* harmony import */ var _features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_features_dashboard_state_DashboardMigrator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/state/DashboardMigrator.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");









let counter = 100;
class GrafanaDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.DataSourceWithBackend {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.annotations = {
      QueryEditor: _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_3__["default"],

      prepareAnnotation(json) {
        var _json$target, _json$type, _json$limit, _json$tags, _json$matchAny;

        // Previously, these properties lived outside of target
        // This should handle migrating them
        json.target = (_json$target = json.target) !== null && _json$target !== void 0 ? _json$target : {
          type: (_json$type = json.type) !== null && _json$type !== void 0 ? _json$type : _types__WEBPACK_IMPORTED_MODULE_2__.GrafanaAnnotationType.Dashboard,
          limit: (_json$limit = json.limit) !== null && _json$limit !== void 0 ? _json$limit : 100,
          tags: (_json$tags = json.tags) !== null && _json$tags !== void 0 ? _json$tags : [],
          matchAny: (_json$matchAny = json.matchAny) !== null && _json$matchAny !== void 0 ? _json$matchAny : false
        }; // using spread syntax caused an infinite loop in StandardAnnotationQueryEditor

        return json;
      },

      prepareQuery(anno) {
        let datasource = undefined;

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_5__.isString)(anno.datasource)) {
          const ref = (0,app_features_dashboard_state_DashboardMigrator__WEBPACK_IMPORTED_MODULE_6__.migrateDatasourceNameToRef)(anno.datasource, {
            returnDefaultAsNull: false
          });

          if (ref) {
            datasource = ref;
          }
        } else {
          datasource = anno.datasource;
        }

        return Object.assign({}, anno, {
          refId: anno.name,
          queryType: _types__WEBPACK_IMPORTED_MODULE_2__.GrafanaQueryType.Annotations,
          datasource
        });
      }

    };
  }

  query(request) {
    const results = [];
    const targets = [];
    const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)();

    for (const target of request.targets) {
      if (target.queryType === _types__WEBPACK_IMPORTED_MODULE_2__.GrafanaQueryType.Annotations) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.getAnnotations({
          range: request.range,
          rangeRaw: request.range.raw,
          annotation: target,
          dashboard: (0,_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_4__.getDashboardSrv)().getCurrent()
        }));
      }

      if (target.hide) {
        continue;
      }

      if (target.queryType === _types__WEBPACK_IMPORTED_MODULE_2__.GrafanaQueryType.LiveMeasurements) {
        var _request$maxDataPoint, _request$rangeRaw;

        let channel = templateSrv.replace(target.channel, request.scopedVars);
        const {
          filter
        } = target; // Help migrate pre-release channel paths saved in dashboards
        // NOTE: this should be removed before V8 is released

        if (channel && channel.startsWith('telegraf/')) {
          channel = 'stream/' + channel;
          target.channel = channel; // mutate the current query object so it is saved with `stream/` prefix
        }

        const addr = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.parseLiveChannelAddress)(channel);

        if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.isValidLiveChannelAddress)(addr)) {
          continue;
        }

        const buffer = {
          maxLength: (_request$maxDataPoint = request.maxDataPoints) !== null && _request$maxDataPoint !== void 0 ? _request$maxDataPoint : 500
        };

        if (target.buffer) {
          buffer.maxDelta = target.buffer;
          buffer.maxLength = buffer.maxLength * 2; //??
        } else if (((_request$rangeRaw = request.rangeRaw) === null || _request$rangeRaw === void 0 ? void 0 : _request$rangeRaw.to) === 'now') {
          buffer.maxDelta = request.range.to.valueOf() - request.range.from.valueOf();
        }

        results.push((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getGrafanaLiveSrv)().getDataStream({
          key: `${request.requestId}.${counter++}`,
          addr: addr,
          filter,
          buffer
        }));
      } else {
        if (!target.queryType) {
          target.queryType = _types__WEBPACK_IMPORTED_MODULE_2__.GrafanaQueryType.RandomWalk;
        }

        targets.push(target);
      }
    }

    if (targets.length) {
      results.push(super.query(Object.assign({}, request, {
        targets
      })));
    }

    if (results.length) {
      // With a single query just return the results
      if (results.length === 1) {
        return results[0];
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...results);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(); // nothing
  }

  listFiles(path) {
    return this.query({
      targets: [{
        refId: 'A',
        queryType: _types__WEBPACK_IMPORTED_MODULE_2__.GrafanaQueryType.List,
        path
      }]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(v => {
      var _v$data$;

      const frame = (_v$data$ = v.data[0]) !== null && _v$data$ !== void 0 ? _v$data$ : new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame();
      return new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataFrameView(frame);
    }));
  }

  metricFindQuery(options) {
    return Promise.resolve([]);
  }

  async getAnnotations(options) {
    var _options$dashboard;

    const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)();
    const annotation = options.annotation;
    const target = annotation.target;
    const params = {
      from: options.range.from.valueOf(),
      to: options.range.to.valueOf(),
      limit: target.limit,
      tags: target.tags,
      matchAny: target.matchAny
    };

    if (target.type === _types__WEBPACK_IMPORTED_MODULE_2__.GrafanaAnnotationType.Dashboard) {
      // if no dashboard id yet return
      if (!options.dashboard.id) {
        return Promise.resolve({
          data: []
        });
      } // filter by dashboard id


      params.dashboardId = options.dashboard.id; // remove tags filter if any

      delete params.tags;
    } else {
      // require at least one tag
      if (!Array.isArray(target.tags) || target.tags.length === 0) {
        return Promise.resolve({
          data: []
        });
      }

      const delimiter = '__delimiter__';
      const tags = [];

      for (const t of params.tags) {
        const renderedValues = templateSrv.replace(t, {}, value => {
          if (typeof value === 'string') {
            return value;
          }

          return value.join(delimiter);
        });

        for (const tt of renderedValues.split(delimiter)) {
          tags.push(tt);
        }
      }

      params.tags = tags;
    }

    const annotations = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/annotations', params, `grafana-data-source-annotations-${annotation.name}-${(_options$dashboard = options.dashboard) === null || _options$dashboard === void 0 ? void 0 : _options$dashboard.id}`);
    return {
      data: [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toDataFrame)(annotations)]
    };
  }

  testDatasource() {
    return Promise.resolve();
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/grafana/datasource.ts");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/QueryEditor.tsx");



const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_1__.GrafanaDatasource).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_2__.QueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaAnnotationType": () => (/* binding */ GrafanaAnnotationType),
/* harmony export */   "GrafanaQueryType": () => (/* binding */ GrafanaQueryType),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
//----------------------------------------------
// Query
//----------------------------------------------
let GrafanaQueryType;

(function (GrafanaQueryType) {
  GrafanaQueryType["LiveMeasurements"] = "measurements";
  GrafanaQueryType["Annotations"] = "annotations";
  GrafanaQueryType["RandomWalk"] = "randomWalk";
  GrafanaQueryType["List"] = "list";
  GrafanaQueryType["Read"] = "read";
  GrafanaQueryType["Search"] = "search";
})(GrafanaQueryType || (GrafanaQueryType = {}));

const defaultQuery = {
  refId: 'A',
  queryType: GrafanaQueryType.RandomWalk
}; //----------------------------------------------
// Annotations
//----------------------------------------------

let GrafanaAnnotationType;

(function (GrafanaAnnotationType) {
  GrafanaAnnotationType["Dashboard"] = "dashboard";
  GrafanaAnnotationType["Tags"] = "tags";
})(GrafanaAnnotationType || (GrafanaAnnotationType = {}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFnQixDQUFDVTtBQUZZLENBQW5DLEVBS1A7QUFDQTtBQUNBOztBQUVPLElBQUtuRCxxQkFBWjs7V0FBWUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7R0FBQUEsMEJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYWZhbmEvY29tcG9uZW50cy9Bbm5vdGF0aW9uUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFmYW5hL2NvbXBvbmVudHMvUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFmYW5hL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYWZhbmEvbW9kdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFmYW5hL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBGaWVsZFNldCwgU2VsZWN0LCBTd2l0Y2ggfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyBUYWdGaWx0ZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdGaWx0ZXInO1xuaW1wb3J0IHsgR3JhZmFuYUFubm90YXRpb25RdWVyeSwgR3JhZmFuYUFubm90YXRpb25UeXBlLCBHcmFmYW5hUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRBbm5vdGF0aW9uVGFncyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbm5vdGF0aW9ucy9hcGknO1xuXG5jb25zdCBtYXRjaFRvb2x0aXBDb250ZW50ID0gJ0VuYWJsaW5nIHRoaXMgcmV0dXJucyBhbm5vdGF0aW9ucyB0aGF0IG1hdGNoIGFueSBvZiB0aGUgdGFncyBzcGVjaWZpZWQgYmVsb3cnO1xuXG5jb25zdCB0YWdzVG9vbHRpcENvbnRlbnQgPSAoXG4gIDxkaXY+U3BlY2lmeSBhIGxpc3Qgb2YgdGFncyB0byBtYXRjaC4gVG8gc3BlY2lmeSBhIGtleSBhbmQgdmFsdWUgdGFnIHVzZSBga2V5OnZhbHVlYCBzeW50YXguPC9kaXY+XG4pO1xuXG5jb25zdCBhbm5vdGF0aW9uVHlwZXMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXG4gICAgdmFsdWU6IEdyYWZhbmFBbm5vdGF0aW9uVHlwZS5EYXNoYm9hcmQsXG4gICAgZGVzY3JpcHRpb246ICdRdWVyeSBmb3IgZXZlbnRzIGNyZWF0ZWQgb24gdGhpcyBkYXNoYm9hcmQgYW5kIHNob3cgdGhlbSBpbiB0aGUgcGFuZWxzIHdoZXJlIHRoZXkgd2hlcmUgY3JlYXRlZCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1RhZ3MnLFxuICAgIHZhbHVlOiBHcmFmYW5hQW5ub3RhdGlvblR5cGUuVGFncyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgd2lsbCBmZXRjaCBhbnkgYW5ub3RhdGlvbiBldmVudHMgdGhhdCBtYXRjaCB0aGUgdGFncyBmaWx0ZXInLFxuICB9LFxuXTtcblxuY29uc3QgbGltaXRPcHRpb25zID0gWzEwLCA1MCwgMTAwLCAyMDAsIDMwMCwgNTAwLCAxMDAwLCAyMDAwXS5tYXAoKGxpbWl0KSA9PiAoe1xuICBsYWJlbDogU3RyaW5nKGxpbWl0KSxcbiAgdmFsdWU6IGxpbWl0LFxufSkpO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVyeTogR3JhZmFuYVF1ZXJ5O1xuICBvbkNoYW5nZTogKG5ld1ZhbHVlOiBHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbm5vdGF0aW9uUXVlcnlFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgYW5ub3RhdGlvblF1ZXJ5ID0gcXVlcnkgYXMgR3JhZmFuYUFubm90YXRpb25RdWVyeTtcbiAgY29uc3QgeyBsaW1pdCwgbWF0Y2hBbnksIHRhZ3MsIHR5cGUgfSA9IGFubm90YXRpb25RdWVyeTtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgY29uc3Qgb25GaWx0ZXJCeUNoYW5nZSA9IChuZXdWYWx1ZTogU2VsZWN0YWJsZVZhbHVlPEdyYWZhbmFBbm5vdGF0aW9uVHlwZT4pID0+XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4uYW5ub3RhdGlvblF1ZXJ5LFxuICAgICAgdHlwZTogbmV3VmFsdWUudmFsdWUhLFxuICAgIH0pO1xuXG4gIGNvbnN0IG9uTWF4TGltaXRDaGFuZ2UgPSAobmV3VmFsdWU6IFNlbGVjdGFibGVWYWx1ZTxudW1iZXI+KSA9PlxuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLmFubm90YXRpb25RdWVyeSxcbiAgICAgIGxpbWl0OiBuZXdWYWx1ZS52YWx1ZSEsXG4gICAgfSk7XG5cbiAgY29uc3Qgb25NYXRjaEFueUNoYW5nZSA9IChuZXdWYWx1ZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4uYW5ub3RhdGlvblF1ZXJ5LFxuICAgICAgbWF0Y2hBbnk6IG5ld1ZhbHVlLnRhcmdldC5jaGVja2VkLFxuICAgIH0pO1xuXG4gIGNvbnN0IG9uVGFnc0NoYW5nZSA9ICh0YWdzOiBzdHJpbmdbXSkgPT5cbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5hbm5vdGF0aW9uUXVlcnksXG4gICAgICB0YWdzLFxuICAgIH0pO1xuXG4gIGNvbnN0IG9uRm9ybWF0Q3JlYXRlTGFiZWwgPSAoaW5wdXQ6IHN0cmluZykgPT4gYFVzZSBjdXN0b20gdmFsdWU6ICR7aW5wdXR9YDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZFNldCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEZpZWxkIGxhYmVsPVwiRmlsdGVyIGJ5XCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgaW5wdXRJZD1cImdyYWZhbmEtYW5ub3RhdGlvbnNfX2ZpbHRlci1ieVwiXG4gICAgICAgICAgb3B0aW9ucz17YW5ub3RhdGlvblR5cGVzfVxuICAgICAgICAgIHZhbHVlPXt0eXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbHRlckJ5Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZCBsYWJlbD1cIk1heCBsaW1pdFwiPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgIGlucHV0SWQ9XCJncmFmYW5hLWFubm90YXRpb25zX19saW1pdFwiXG4gICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgIG9wdGlvbnM9e2xpbWl0T3B0aW9uc31cbiAgICAgICAgICB2YWx1ZT17bGltaXR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uTWF4TGltaXRDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAge3R5cGUgPT09IEdyYWZhbmFBbm5vdGF0aW9uVHlwZS5UYWdzICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJNYXRjaCBhbnlcIiBkZXNjcmlwdGlvbj17bWF0Y2hUb29sdGlwQ29udGVudH0+XG4gICAgICAgICAgICA8U3dpdGNoIGlkPVwiZ3JhZmFuYS1hbm5vdGF0aW9uc19fbWF0Y2gtYW55XCIgdmFsdWU9e21hdGNoQW55fSBvbkNoYW5nZT17b25NYXRjaEFueUNoYW5nZX0gLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlRhZ3NcIiBkZXNjcmlwdGlvbj17dGFnc1Rvb2x0aXBDb250ZW50fT5cbiAgICAgICAgICAgIDxUYWdGaWx0ZXJcbiAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbD17b25Gb3JtYXRDcmVhdGVMYWJlbH1cbiAgICAgICAgICAgICAgaW5wdXRJZD1cImdyYWZhbmEtYW5ub3RhdGlvbnNfX3RhZ3NcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25UYWdzQ2hhbmdlfVxuICAgICAgICAgICAgICB0YWdPcHRpb25zPXtnZXRBbm5vdGF0aW9uVGFnc31cbiAgICAgICAgICAgICAgdGFncz17dGFncyA/PyBbXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvRmllbGRTZXQ+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElubGluZUZpZWxkLCBTZWxlY3QsIEFsZXJ0LCBJbnB1dCwgSW5saW5lRmllbGRSb3cgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQge1xuICBRdWVyeUVkaXRvclByb3BzLFxuICBTZWxlY3RhYmxlVmFsdWUsXG4gIGRhdGFGcmFtZUZyb21KU09OLFxuICByYW5nZVV0aWwsXG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFGcmFtZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBHcmFmYW5hRGF0YXNvdXJjZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgZGVmYXVsdFF1ZXJ5LCBHcmFmYW5hUXVlcnksIEdyYWZhbmFRdWVyeVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBjb25maWcsIGdldEJhY2tlbmRTcnYsIGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxudHlwZSBQcm9wcyA9IFF1ZXJ5RWRpdG9yUHJvcHM8R3JhZmFuYURhdGFzb3VyY2UsIEdyYWZhbmFRdWVyeT47XG5cbmNvbnN0IGxhYmVsV2lkdGggPSAxMjtcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgY2hhbm5lbHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgY2hhbm5lbEZpZWxkczogUmVjb3JkPHN0cmluZywgQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PjtcbiAgZm9sZGVycz86IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXJ5RWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0geyBjaGFubmVsczogW10sIGNoYW5uZWxGaWVsZHM6IHt9IH07XG5cbiAgcXVlcnlUeXBlczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPEdyYWZhbmFRdWVyeVR5cGU+PiA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ1JhbmRvbSBXYWxrJyxcbiAgICAgIHZhbHVlOiBHcmFmYW5hUXVlcnlUeXBlLlJhbmRvbVdhbGssXG4gICAgICBkZXNjcmlwdGlvbjogJ1JhbmRvbSBzaWduYWwgd2l0aGluIHRoZSBzZWxlY3RlZCB0aW1lIHJhbmdlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnTGl2ZSBNZWFzdXJlbWVudHMnLFxuICAgICAgdmFsdWU6IEdyYWZhbmFRdWVyeVR5cGUuTGl2ZU1lYXN1cmVtZW50cyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3RyZWFtIHJlYWwtdGltZSBtZWFzdXJlbWVudHMgZnJvbSBHcmFmYW5hJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnTGlzdCBwdWJsaWMgZmlsZXMnLFxuICAgICAgdmFsdWU6IEdyYWZhbmFRdWVyeVR5cGUuTGlzdCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2hvdyBkaXJlY3RvcnkgbGlzdGluZ3MgZm9yIHB1YmxpYyByZXNvdXJjZXMnLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5wYW5lbFRpdGxlU2VhcmNoKSB7XG4gICAgICB0aGlzLnF1ZXJ5VHlwZXMucHVzaCh7XG4gICAgICAgIGxhYmVsOiAnU2VhcmNoJyxcbiAgICAgICAgdmFsdWU6IEdyYWZhbmFRdWVyeVR5cGUuU2VhcmNoLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NlYXJjaCBmb3IgZ3JhZmFuYSByZXNvdXJjZXMnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbG9hZENoYW5uZWxJbmZvKCkge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmZldGNoKHsgdXJsOiAnYXBpL2xpdmUvbGlzdCcgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAodjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hhbm5lbEluZm8gPSB2LmRhdGE/LmNoYW5uZWxzIGFzIGFueVtdO1xuICAgICAgICAgIGlmIChjaGFubmVsSW5mbz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFubmVsRmllbGRzOiBSZWNvcmQ8c3RyaW5nLCBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+ID0ge307XG4gICAgICAgICAgICBjb25zdCBjaGFubmVsczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0gY2hhbm5lbEluZm8ubWFwKChjKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0aW5jdEZpZWxkcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZGF0YUZyYW1lRnJvbUpTT04oYy5kYXRhKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGYgb2YgZnJhbWUuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICBkaXN0aW5jdEZpZWxkcy5hZGQoZi5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbm5lbEZpZWxkc1tjLmNoYW5uZWxdID0gQXJyYXkuZnJvbShkaXN0aW5jdEZpZWxkcykubWFwKChuKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IG4sXG4gICAgICAgICAgICAgICAgICBsYWJlbDogbixcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogYy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBjLmNoYW5uZWwgKyAnIFsnICsgYy5taW51dGVfcmF0ZSArICcgbXNnL21pbl0nLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGFubmVsRmllbGRzLCBjaGFubmVscyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxuXG4gIGxvYWRGb2xkZXJJbmZvKCkge1xuICAgIGNvbnN0IHF1ZXJ5OiBEYXRhUXVlcnlSZXF1ZXN0PEdyYWZhbmFRdWVyeT4gPSB7XG4gICAgICB0YXJnZXRzOiBbeyBxdWVyeVR5cGU6IEdyYWZhbmFRdWVyeVR5cGUuTGlzdCwgcmVmSWQ6ICdBJyB9XSxcbiAgICB9IGFzIGFueTtcblxuICAgIGdldERhdGFTb3VyY2VTcnYoKVxuICAgICAgLmdldCgnLS0gR3JhZmFuYSAtLScpXG4gICAgICAudGhlbigoZHMpID0+IHtcbiAgICAgICAgY29uc3QgZ2RzID0gZHMgYXMgR3JhZmFuYURhdGFzb3VyY2U7XG4gICAgICAgIGdkcy5xdWVyeShxdWVyeSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAocnNwKSA9PiB7XG4gICAgICAgICAgICBpZiAocnNwLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gKHJzcC5kYXRhWzBdIGFzIERhdGFGcmFtZSkuZmllbGRzWzBdO1xuICAgICAgICAgICAgICBjb25zdCBmb2xkZXJzID0gbmFtZXMudmFsdWVzLnRvQXJyYXkoKS5tYXAoKHYpID0+ICh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHYsXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvbGRlcnMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZENoYW5uZWxJbmZvKCk7XG4gIH1cblxuICBvblF1ZXJ5VHlwZUNoYW5nZSA9IChzZWw6IFNlbGVjdGFibGVWYWx1ZTxHcmFmYW5hUXVlcnlUeXBlPikgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHF1ZXJ5LCBvblJ1blF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHF1ZXJ5VHlwZTogc2VsLnZhbHVlISB9KTtcbiAgICBvblJ1blF1ZXJ5KCk7XG5cbiAgICAvLyBSZWxvYWQgdGhlIGNoYW5uZWwgbGlzdFxuICAgIHRoaXMubG9hZENoYW5uZWxJbmZvKCk7XG4gIH07XG5cbiAgb25DaGFubmVsQ2hhbmdlID0gKHNlbDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBxdWVyeSwgb25SdW5RdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBjaGFubmVsOiBzZWw/LnZhbHVlIH0pO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICBvbkZpZWxkTmFtZXNDaGFuZ2UgPSAoaXRlbTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBxdWVyeSwgb25SdW5RdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgZmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICBmaWVsZHMgPSBpdGVtLm1hcCgodikgPT4gdi52YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpdGVtLnZhbHVlKSB7XG4gICAgICBmaWVsZHMgPSBbaXRlbS52YWx1ZV07XG4gICAgfVxuXG4gICAgLy8gV2hlbiBhZGRpbmcgdGhlIGZpcnN0IGZpZWxkLCBhbHNvIGFkZCB0aW1lIChpZiBpdCBleGlzdHMpXG4gICAgaWYgKGZpZWxkcy5sZW5ndGggPT09IDEgJiYgIXF1ZXJ5LmZpbHRlcj8uZmllbGRzPy5sZW5ndGggJiYgcXVlcnkuY2hhbm5lbCkge1xuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLnN0YXRlLmNoYW5uZWxGaWVsZHNbcXVlcnkuY2hhbm5lbF0gPz8gW107XG4gICAgICBjb25zdCB0ZiA9IG5hbWVzLmZpbmQoKGYpID0+IGYudmFsdWUgPT09ICd0aW1lJyB8fCBmLnZhbHVlID09PSAnVGltZScpO1xuICAgICAgaWYgKHRmICYmIHRmLnZhbHVlICYmIHRmLnZhbHVlICE9PSBmaWVsZHNbMF0pIHtcbiAgICAgICAgZmllbGRzID0gW3RmLnZhbHVlLCAuLi5maWVsZHNdO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB7XG4gICAgICAgIC4uLnF1ZXJ5LmZpbHRlcixcbiAgICAgICAgZmllbGRzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBvblJ1blF1ZXJ5KCk7XG4gIH07XG5cbiAgY2hlY2tBbmRVcGRhdGVWYWx1ZSA9IChrZXk6IGtleW9mIEdyYWZhbmFRdWVyeSwgdHh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBxdWVyeSwgb25SdW5RdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoa2V5ID09PSAnYnVmZmVyJykge1xuICAgICAgbGV0IGJ1ZmZlcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKHR4dCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGJ1ZmZlciA9IHJhbmdlVXRpbC5pbnRlcnZhbFRvU2Vjb25kcyh0eHQpICogMTAwMDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdFUlJPUicsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIGJ1ZmZlcixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBba2V5XTogdHh0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICBoYW5kbGVFbnRlcktleSA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUua2V5ICE9PSAnRW50ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hlY2tBbmRVcGRhdGVWYWx1ZSgnYnVmZmVyJywgKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuY2hlY2tBbmRVcGRhdGVWYWx1ZSgnYnVmZmVyJywgZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJlbmRlck1lYXN1cmVtZW50c1F1ZXJ5KCkge1xuICAgIGxldCB7IGNoYW5uZWwsIGZpbHRlciwgYnVmZmVyIH0gPSB0aGlzLnByb3BzLnF1ZXJ5O1xuICAgIGxldCB7IGNoYW5uZWxzLCBjaGFubmVsRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBjdXJyZW50Q2hhbm5lbCA9IGNoYW5uZWxzLmZpbmQoKGMpID0+IGMudmFsdWUgPT09IGNoYW5uZWwpO1xuICAgIGlmIChjaGFubmVsICYmICFjdXJyZW50Q2hhbm5lbCkge1xuICAgICAgY3VycmVudENoYW5uZWwgPSB7XG4gICAgICAgIHZhbHVlOiBjaGFubmVsLFxuICAgICAgICBsYWJlbDogY2hhbm5lbCxcbiAgICAgICAgZGVzY3JpcHRpb246IGBDb25uZWN0ZWQgdG8gJHtjaGFubmVsfWAsXG4gICAgICB9O1xuICAgICAgY2hhbm5lbHMgPSBbY3VycmVudENoYW5uZWwsIC4uLmNoYW5uZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXN0aW5jdEZpZWxkcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGNvbnN0IGZpZWxkczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0gY2hhbm5lbCA/IGNoYW5uZWxGaWVsZHNbY2hhbm5lbF0gPz8gW10gOiBbXTtcbiAgICAvLyBpZiAoZGF0YSAmJiBkYXRhLnNlcmllcz8ubGVuZ3RoKSB7XG4gICAgLy8gICBmb3IgKGNvbnN0IGZyYW1lIG9mIGRhdGEuc2VyaWVzKSB7XG4gICAgLy8gICAgIGZvciAoY29uc3QgZmllbGQgb2YgZnJhbWUuZmllbGRzKSB7XG4gICAgLy8gICAgICAgaWYgKGRpc3RpbmN0RmllbGRzLmhhcyhmaWVsZC5uYW1lKSB8fCAhZmllbGQubmFtZSkge1xuICAgIC8vICAgICAgICAgY29udGludWU7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICAgIGZpZWxkcy5wdXNoKHtcbiAgICAvLyAgICAgICAgIHZhbHVlOiBmaWVsZC5uYW1lLFxuICAgIC8vICAgICAgICAgbGFiZWw6IGZpZWxkLm5hbWUsXG4gICAgLy8gICAgICAgICBkZXNjcmlwdGlvbjogYCgke2dldEZyYW1lRGlzcGxheU5hbWUoZnJhbWUpfSAvICR7ZmllbGQudHlwZX0pYCxcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgICBkaXN0aW5jdEZpZWxkcy5hZGQoZmllbGQubmFtZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgaWYgKGZpbHRlcj8uZmllbGRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGYgb2YgZmlsdGVyLmZpZWxkcykge1xuICAgICAgICBpZiAoIWRpc3RpbmN0RmllbGRzLmhhcyhmKSkge1xuICAgICAgICAgIGZpZWxkcy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBmLFxuICAgICAgICAgICAgbGFiZWw6IGAke2Z9IChub3QgbG9hZGVkKWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYENvbmZpZ3VyZWQsIGJ1dCBub3QgZm91bmQgaW4gdGhlIHF1ZXJ5IHJlc3VsdHNgLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRpc3RpbmN0RmllbGRzLmFkZChmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBmb3JtYXR0ZWRUaW1lID0gJyc7XG4gICAgaWYgKGJ1ZmZlcikge1xuICAgICAgZm9ybWF0dGVkVGltZSA9IHJhbmdlVXRpbC5zZWNvbmRzVG9IbXMoYnVmZmVyIC8gMTAwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkNoYW5uZWxcIiBncm93PXt0cnVlfSBsYWJlbFdpZHRoPXtsYWJlbFdpZHRofT5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICBvcHRpb25zPXtjaGFubmVsc31cbiAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRDaGFubmVsIHx8ICcnfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5uZWxDaGFuZ2V9XG4gICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgbWVhc3VyZW1lbnRzIGNoYW5uZWxcIlxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgbm9PcHRpb25zTWVzc2FnZT1cIkVudGVyIGNoYW5uZWwgbmFtZVwiXG4gICAgICAgICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXsoaW5wdXQ6IHN0cmluZykgPT4gYENvbm5lY3QgdG86ICR7aW5wdXR9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjaGFubmVsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkZpZWxkc1wiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyPy5maWVsZHMgfHwgW119XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZE5hbWVzQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWxsIGZpZWxkc1wiXG4gICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgbm9PcHRpb25zTWVzc2FnZT1cIlVuYWJsZSB0byBsaXN0IGFsbCBmaWVsZHNcIlxuICAgICAgICAgICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXsoaW5wdXQ6IHN0cmluZykgPT4gYEZpZWxkOiAke2lucHV0fWB9XG4gICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgIGlzTXVsdGk9e3RydWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQnVmZmVyXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXV0b1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEyfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Zm9ybWF0dGVkVGltZX1cbiAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlRW50ZXJLZXl9XG4gICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxBbGVydCB0aXRsZT1cIkdyYWZhbmEgTGl2ZSAtIE1lYXN1cmVtZW50c1wiIHNldmVyaXR5PVwiaW5mb1wiPlxuICAgICAgICAgIFRoaXMgc3VwcG9ydHMgcmVhbC10aW1lIGV2ZW50IHN0cmVhbXMgaW4gR3JhZmFuYSBjb3JlLiBUaGlzIGZlYXR1cmUgaXMgdW5kZXIgaGVhdnkgZGV2ZWxvcG1lbnQuIEV4cGVjdCB0aGVcbiAgICAgICAgICBpbnRlcmZhY2VzIGFuZCBzdHJ1Y3R1cmVzIHRvIGNoYW5nZSBhcyB0aGlzIGJlY29tZXMgbW9yZSBwcm9kdWN0aW9uIHJlYWR5LlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIG9uRm9sZGVyQ2hhbmdlZCA9IChzZWw6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcXVlcnksIG9uUnVuUXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcGF0aDogc2VsPy52YWx1ZSB9KTtcbiAgICBvblJ1blF1ZXJ5KCk7XG4gIH07XG5cbiAgcmVuZGVyTGlzdFB1YmxpY0ZpbGVzKCkge1xuICAgIGxldCB7IHBhdGggfSA9IHRoaXMucHJvcHMucXVlcnk7XG4gICAgbGV0IHsgZm9sZGVycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWZvbGRlcnMpIHtcbiAgICAgIGZvbGRlcnMgPSBbXTtcbiAgICAgIHRoaXMubG9hZEZvbGRlckluZm8oKTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudEZvbGRlciA9IGZvbGRlcnMuZmluZCgoZikgPT4gZi52YWx1ZSA9PT0gcGF0aCk7XG4gICAgaWYgKHBhdGggJiYgIWN1cnJlbnRGb2xkZXIpIHtcbiAgICAgIGZvbGRlcnMgPSBbXG4gICAgICAgIC4uLmZvbGRlcnMsXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogcGF0aCxcbiAgICAgICAgICBsYWJlbDogcGF0aCxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiUGF0aFwiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgIG9wdGlvbnM9e2ZvbGRlcnN9XG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVudEZvbGRlciB8fCAnJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRm9sZGVyQ2hhbmdlZH1cbiAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWU9e3RydWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBmb2xkZXJcIlxuICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XG4gICAgICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbD17KGlucHV0OiBzdHJpbmcpID0+IGBGb2xkZXI6ICR7aW5wdXR9YH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoRW50ZXJLZXkgPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrQW5kVXBkYXRlVmFsdWUoJ3F1ZXJ5JywgKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xuICB9O1xuXG4gIGhhbmRsZVNlYXJjaEJsdXIgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuY2hlY2tBbmRVcGRhdGVWYWx1ZSgncXVlcnknLCBlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmVuZGVyU2VhcmNoKCkge1xuICAgIGxldCB7IHF1ZXJ5IH0gPSB0aGlzLnByb3BzLnF1ZXJ5O1xuICAgIHJldHVybiAoXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlF1ZXJ5XCIgZ3Jvdz17dHJ1ZX0gbGFiZWxXaWR0aD17bGFiZWxXaWR0aH0+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV2ZXJ5dGhpbmdcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtxdWVyeSA/PyAnJ31cbiAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVTZWFyY2hFbnRlcktleX1cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVTZWFyY2hCbHVyfVxuICAgICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIC4uLmRlZmF1bHRRdWVyeSxcbiAgICAgIC4uLnRoaXMucHJvcHMucXVlcnksXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiUXVlcnkgdHlwZVwiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMucXVlcnlUeXBlc31cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucXVlcnlUeXBlcy5maW5kKCh2KSA9PiB2LnZhbHVlID09PSBxdWVyeS5xdWVyeVR5cGUpIHx8IHRoaXMucXVlcnlUeXBlc1swXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25RdWVyeVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgIHtxdWVyeS5xdWVyeVR5cGUgPT09IEdyYWZhbmFRdWVyeVR5cGUuTGl2ZU1lYXN1cmVtZW50cyAmJiB0aGlzLnJlbmRlck1lYXN1cmVtZW50c1F1ZXJ5KCl9XG4gICAgICAgIHtxdWVyeS5xdWVyeVR5cGUgPT09IEdyYWZhbmFRdWVyeVR5cGUuTGlzdCAmJiB0aGlzLnJlbmRlckxpc3RQdWJsaWNGaWxlcygpfVxuICAgICAgICB7cXVlcnkucXVlcnlUeXBlID09PSBHcmFmYW5hUXVlcnlUeXBlLlNlYXJjaCAmJiB0aGlzLnJlbmRlclNlYXJjaCgpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZnJvbSwgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBEYXRhU291cmNlV2l0aEJhY2tlbmQsXG4gIGdldEJhY2tlbmRTcnYsXG4gIGdldEdyYWZhbmFMaXZlU3J2LFxuICBnZXRUZW1wbGF0ZVNydixcbiAgU3RyZWFtaW5nRnJhbWVPcHRpb25zLFxufSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7XG4gIEFubm90YXRpb25RdWVyeSxcbiAgQW5ub3RhdGlvblF1ZXJ5UmVxdWVzdCxcbiAgRGF0YUZyYW1lVmlldyxcbiAgRGF0YVF1ZXJ5UmVxdWVzdCxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBEYXRhU291cmNlUmVmLFxuICBpc1ZhbGlkTGl2ZUNoYW5uZWxBZGRyZXNzLFxuICBNdXRhYmxlRGF0YUZyYW1lLFxuICBwYXJzZUxpdmVDaGFubmVsQWRkcmVzcyxcbiAgdG9EYXRhRnJhbWUsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5LCBHcmFmYW5hQW5ub3RhdGlvblR5cGUsIEdyYWZhbmFRdWVyeSwgR3JhZmFuYVF1ZXJ5VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEFubm90YXRpb25RdWVyeUVkaXRvciBmcm9tICcuL2NvbXBvbmVudHMvQW5ub3RhdGlvblF1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IGdldERhc2hib2FyZFNydiB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9EYXNoYm9hcmRTcnYnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbWlncmF0ZURhdGFzb3VyY2VOYW1lVG9SZWYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL0Rhc2hib2FyZE1pZ3JhdG9yJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxubGV0IGNvdW50ZXIgPSAxMDA7XG5cbmV4cG9ydCBjbGFzcyBHcmFmYW5hRGF0YXNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VXaXRoQmFja2VuZDxHcmFmYW5hUXVlcnk+IHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgICB0aGlzLmFubm90YXRpb25zID0ge1xuICAgICAgUXVlcnlFZGl0b3I6IEFubm90YXRpb25RdWVyeUVkaXRvcixcbiAgICAgIHByZXBhcmVBbm5vdGF0aW9uKGpzb246IGFueSk6IEFubm90YXRpb25RdWVyeTxHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5PiB7XG4gICAgICAgIC8vIFByZXZpb3VzbHksIHRoZXNlIHByb3BlcnRpZXMgbGl2ZWQgb3V0c2lkZSBvZiB0YXJnZXRcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgaGFuZGxlIG1pZ3JhdGluZyB0aGVtXG4gICAgICAgIGpzb24udGFyZ2V0ID0ganNvbi50YXJnZXQgPz8ge1xuICAgICAgICAgIHR5cGU6IGpzb24udHlwZSA/PyBHcmFmYW5hQW5ub3RhdGlvblR5cGUuRGFzaGJvYXJkLFxuICAgICAgICAgIGxpbWl0OiBqc29uLmxpbWl0ID8/IDEwMCxcbiAgICAgICAgICB0YWdzOiBqc29uLnRhZ3MgPz8gW10sXG4gICAgICAgICAgbWF0Y2hBbnk6IGpzb24ubWF0Y2hBbnkgPz8gZmFsc2UsXG4gICAgICAgIH07IC8vIHVzaW5nIHNwcmVhZCBzeW50YXggY2F1c2VkIGFuIGluZmluaXRlIGxvb3AgaW4gU3RhbmRhcmRBbm5vdGF0aW9uUXVlcnlFZGl0b3JcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICB9LFxuICAgICAgcHJlcGFyZVF1ZXJ5KGFubm86IEFubm90YXRpb25RdWVyeTxHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5Pik6IEdyYWZhbmFRdWVyeSB7XG4gICAgICAgIGxldCBkYXRhc291cmNlOiBEYXRhU291cmNlUmVmIHwgdW5kZWZpbmVkIHwgbnVsbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGlzU3RyaW5nKGFubm8uZGF0YXNvdXJjZSkpIHtcbiAgICAgICAgICBjb25zdCByZWYgPSBtaWdyYXRlRGF0YXNvdXJjZU5hbWVUb1JlZihhbm5vLmRhdGFzb3VyY2UsIHsgcmV0dXJuRGVmYXVsdEFzTnVsbDogZmFsc2UgfSk7XG4gICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgZGF0YXNvdXJjZSA9IHJlZjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YXNvdXJjZSA9IGFubm8uZGF0YXNvdXJjZSBhcyBEYXRhU291cmNlUmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgLi4uYW5ubywgcmVmSWQ6IGFubm8ubmFtZSwgcXVlcnlUeXBlOiBHcmFmYW5hUXVlcnlUeXBlLkFubm90YXRpb25zLCBkYXRhc291cmNlIH07XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBxdWVyeShyZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PEdyYWZhbmFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzdWx0czogQXJyYXk8T2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4+ID0gW107XG4gICAgY29uc3QgdGFyZ2V0czogR3JhZmFuYVF1ZXJ5W10gPSBbXTtcbiAgICBjb25zdCB0ZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCk7XG4gICAgZm9yIChjb25zdCB0YXJnZXQgb2YgcmVxdWVzdC50YXJnZXRzKSB7XG4gICAgICBpZiAodGFyZ2V0LnF1ZXJ5VHlwZSA9PT0gR3JhZmFuYVF1ZXJ5VHlwZS5Bbm5vdGF0aW9ucykge1xuICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICB0aGlzLmdldEFubm90YXRpb25zKHtcbiAgICAgICAgICAgIHJhbmdlOiByZXF1ZXN0LnJhbmdlLFxuICAgICAgICAgICAgcmFuZ2VSYXc6IHJlcXVlc3QucmFuZ2UucmF3LFxuICAgICAgICAgICAgYW5ub3RhdGlvbjogdGFyZ2V0IGFzIHVua25vd24gYXMgQW5ub3RhdGlvblF1ZXJ5PEdyYWZhbmFBbm5vdGF0aW9uUXVlcnk+LFxuICAgICAgICAgICAgZGFzaGJvYXJkOiBnZXREYXNoYm9hcmRTcnYoKS5nZXRDdXJyZW50KCksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQuaGlkZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQucXVlcnlUeXBlID09PSBHcmFmYW5hUXVlcnlUeXBlLkxpdmVNZWFzdXJlbWVudHMpIHtcbiAgICAgICAgbGV0IGNoYW5uZWwgPSB0ZW1wbGF0ZVNydi5yZXBsYWNlKHRhcmdldC5jaGFubmVsLCByZXF1ZXN0LnNjb3BlZFZhcnMpO1xuICAgICAgICBjb25zdCB7IGZpbHRlciB9ID0gdGFyZ2V0O1xuXG4gICAgICAgIC8vIEhlbHAgbWlncmF0ZSBwcmUtcmVsZWFzZSBjaGFubmVsIHBhdGhzIHNhdmVkIGluIGRhc2hib2FyZHNcbiAgICAgICAgLy8gTk9URTogdGhpcyBzaG91bGQgYmUgcmVtb3ZlZCBiZWZvcmUgVjggaXMgcmVsZWFzZWRcbiAgICAgICAgaWYgKGNoYW5uZWwgJiYgY2hhbm5lbC5zdGFydHNXaXRoKCd0ZWxlZ3JhZi8nKSkge1xuICAgICAgICAgIGNoYW5uZWwgPSAnc3RyZWFtLycgKyBjaGFubmVsO1xuICAgICAgICAgIHRhcmdldC5jaGFubmVsID0gY2hhbm5lbDsgLy8gbXV0YXRlIHRoZSBjdXJyZW50IHF1ZXJ5IG9iamVjdCBzbyBpdCBpcyBzYXZlZCB3aXRoIGBzdHJlYW0vYCBwcmVmaXhcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZHIgPSBwYXJzZUxpdmVDaGFubmVsQWRkcmVzcyhjaGFubmVsKTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkTGl2ZUNoYW5uZWxBZGRyZXNzKGFkZHIpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyOiBQYXJ0aWFsPFN0cmVhbWluZ0ZyYW1lT3B0aW9ucz4gPSB7XG4gICAgICAgICAgbWF4TGVuZ3RoOiByZXF1ZXN0Lm1heERhdGFQb2ludHMgPz8gNTAwLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGFyZ2V0LmJ1ZmZlcikge1xuICAgICAgICAgIGJ1ZmZlci5tYXhEZWx0YSA9IHRhcmdldC5idWZmZXI7XG4gICAgICAgICAgYnVmZmVyLm1heExlbmd0aCA9IGJ1ZmZlci5tYXhMZW5ndGghICogMjsgLy8/P1xuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QucmFuZ2VSYXc/LnRvID09PSAnbm93Jykge1xuICAgICAgICAgIGJ1ZmZlci5tYXhEZWx0YSA9IHJlcXVlc3QucmFuZ2UudG8udmFsdWVPZigpIC0gcmVxdWVzdC5yYW5nZS5mcm9tLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdHMucHVzaChcbiAgICAgICAgICBnZXRHcmFmYW5hTGl2ZVNydigpLmdldERhdGFTdHJlYW0oe1xuICAgICAgICAgICAga2V5OiBgJHtyZXF1ZXN0LnJlcXVlc3RJZH0uJHtjb3VudGVyKyt9YCxcbiAgICAgICAgICAgIGFkZHI6IGFkZHIhLFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgYnVmZmVyLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRhcmdldC5xdWVyeVR5cGUpIHtcbiAgICAgICAgICB0YXJnZXQucXVlcnlUeXBlID0gR3JhZmFuYVF1ZXJ5VHlwZS5SYW5kb21XYWxrO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0YXJnZXRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICBzdXBlci5xdWVyeSh7XG4gICAgICAgICAgLi4ucmVxdWVzdCxcbiAgICAgICAgICB0YXJnZXRzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIC8vIFdpdGggYSBzaW5nbGUgcXVlcnkganVzdCByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXJnZSguLi5yZXN1bHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKCk7IC8vIG5vdGhpbmdcbiAgfVxuXG4gIGxpc3RGaWxlcyhwYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhdGFGcmFtZVZpZXc8RmlsZUVsZW1lbnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoe1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgcmVmSWQ6ICdBJyxcbiAgICAgICAgICBxdWVyeVR5cGU6IEdyYWZhbmFRdWVyeVR5cGUuTGlzdCxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9IGFzIGFueSkucGlwZShcbiAgICAgIG1hcCgodikgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IHYuZGF0YVswXSA/PyBuZXcgTXV0YWJsZURhdGFGcmFtZSgpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGFGcmFtZVZpZXc8RmlsZUVsZW1lbnQ+KGZyYW1lKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG1ldHJpY0ZpbmRRdWVyeShvcHRpb25zOiBhbnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgfVxuXG4gIGFzeW5jIGdldEFubm90YXRpb25zKG9wdGlvbnM6IEFubm90YXRpb25RdWVyeVJlcXVlc3Q8R3JhZmFuYVF1ZXJ5Pik6IFByb21pc2U8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCk7XG4gICAgY29uc3QgYW5ub3RhdGlvbiA9IG9wdGlvbnMuYW5ub3RhdGlvbiBhcyB1bmtub3duIGFzIEFubm90YXRpb25RdWVyeTxHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5PjtcbiAgICBjb25zdCB0YXJnZXQgPSBhbm5vdGF0aW9uLnRhcmdldCE7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBmcm9tOiBvcHRpb25zLnJhbmdlLmZyb20udmFsdWVPZigpLFxuICAgICAgdG86IG9wdGlvbnMucmFuZ2UudG8udmFsdWVPZigpLFxuICAgICAgbGltaXQ6IHRhcmdldC5saW1pdCxcbiAgICAgIHRhZ3M6IHRhcmdldC50YWdzLFxuICAgICAgbWF0Y2hBbnk6IHRhcmdldC5tYXRjaEFueSxcbiAgICB9O1xuXG4gICAgaWYgKHRhcmdldC50eXBlID09PSBHcmFmYW5hQW5ub3RhdGlvblR5cGUuRGFzaGJvYXJkKSB7XG4gICAgICAvLyBpZiBubyBkYXNoYm9hcmQgaWQgeWV0IHJldHVyblxuICAgICAgaWYgKCFvcHRpb25zLmRhc2hib2FyZC5pZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgZGF0YTogW10gfSk7XG4gICAgICB9XG4gICAgICAvLyBmaWx0ZXIgYnkgZGFzaGJvYXJkIGlkXG4gICAgICBwYXJhbXMuZGFzaGJvYXJkSWQgPSBvcHRpb25zLmRhc2hib2FyZC5pZDtcbiAgICAgIC8vIHJlbW92ZSB0YWdzIGZpbHRlciBpZiBhbnlcbiAgICAgIGRlbGV0ZSBwYXJhbXMudGFncztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVxdWlyZSBhdCBsZWFzdCBvbmUgdGFnXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFyZ2V0LnRhZ3MpIHx8IHRhcmdldC50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgZGF0YTogW10gfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWxpbWl0ZXIgPSAnX19kZWxpbWl0ZXJfXyc7XG4gICAgICBjb25zdCB0YWdzID0gW107XG4gICAgICBmb3IgKGNvbnN0IHQgb2YgcGFyYW1zLnRhZ3MpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRWYWx1ZXMgPSB0ZW1wbGF0ZVNydi5yZXBsYWNlKHQsIHt9LCAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoY29uc3QgdHQgb2YgcmVuZGVyZWRWYWx1ZXMuc3BsaXQoZGVsaW1pdGVyKSkge1xuICAgICAgICAgIHRhZ3MucHVzaCh0dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBhcmFtcy50YWdzID0gdGFncztcbiAgICB9XG5cbiAgICBjb25zdCBhbm5vdGF0aW9ucyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoXG4gICAgICAnL2FwaS9hbm5vdGF0aW9ucycsXG4gICAgICBwYXJhbXMsXG4gICAgICBgZ3JhZmFuYS1kYXRhLXNvdXJjZS1hbm5vdGF0aW9ucy0ke2Fubm90YXRpb24ubmFtZX0tJHtvcHRpb25zLmRhc2hib2FyZD8uaWR9YFxuICAgICk7XG4gICAgcmV0dXJuIHsgZGF0YTogW3RvRGF0YUZyYW1lKGFubm90YXRpb25zKV0gfTtcbiAgfVxuXG4gIHRlc3REYXRhc291cmNlKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBbJ21lZGlhLXR5cGUnXTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgR3JhZmFuYURhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgR3JhZmFuYVF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbjxHcmFmYW5hRGF0YXNvdXJjZSwgR3JhZmFuYVF1ZXJ5PihHcmFmYW5hRGF0YXNvdXJjZSkuc2V0UXVlcnlFZGl0b3IoXG4gIFF1ZXJ5RWRpdG9yXG4pO1xuIiwiaW1wb3J0IHsgRGF0YVF1ZXJ5IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBMaXZlRGF0YUZpbHRlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFF1ZXJ5XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGVudW0gR3JhZmFuYVF1ZXJ5VHlwZSB7XG4gIExpdmVNZWFzdXJlbWVudHMgPSAnbWVhc3VyZW1lbnRzJyxcbiAgQW5ub3RhdGlvbnMgPSAnYW5ub3RhdGlvbnMnLFxuXG4gIC8vIGJhY2tlbmRcbiAgUmFuZG9tV2FsayA9ICdyYW5kb21XYWxrJyxcbiAgTGlzdCA9ICdsaXN0JyxcbiAgUmVhZCA9ICdyZWFkJyxcbiAgU2VhcmNoID0gJ3NlYXJjaCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhZmFuYVF1ZXJ5IGV4dGVuZHMgRGF0YVF1ZXJ5IHtcbiAgcXVlcnlUeXBlOiBHcmFmYW5hUXVlcnlUeXBlOyAvLyBSYW5kb21XYWxrIGJ5IGRlZmF1bHRcbiAgY2hhbm5lbD86IHN0cmluZztcbiAgZmlsdGVyPzogTGl2ZURhdGFGaWx0ZXI7XG4gIGJ1ZmZlcj86IG51bWJlcjtcbiAgcGF0aD86IHN0cmluZzsgLy8gZm9yIGxpc3QgYW5kIHJlYWRcbiAgcXVlcnk/OiBzdHJpbmc7IC8vIGZvciBxdWVyeSBlbmRwb2ludFxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFF1ZXJ5OiBHcmFmYW5hUXVlcnkgPSB7XG4gIHJlZklkOiAnQScsXG4gIHF1ZXJ5VHlwZTogR3JhZmFuYVF1ZXJ5VHlwZS5SYW5kb21XYWxrLFxufTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBbm5vdGF0aW9uc1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBlbnVtIEdyYWZhbmFBbm5vdGF0aW9uVHlwZSB7XG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBUYWdzID0gJ3RhZ3MnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYWZhbmFBbm5vdGF0aW9uUXVlcnkgZXh0ZW5kcyBHcmFmYW5hUXVlcnkge1xuICB0eXBlOiBHcmFmYW5hQW5ub3RhdGlvblR5cGU7IC8vIHRhZ3NcbiAgbGltaXQ6IG51bWJlcjsgLy8gMTAwXG4gIHRhZ3M/OiBzdHJpbmdbXTtcbiAgbWF0Y2hBbnk/OiBib29sZWFuOyAvLyBCeSBkZWZhdWx0IEdyYWZhbmEgb25seSBzaG93cyBhbm5vdGF0aW9ucyB0aGF0IG1hdGNoIGFsbCB0YWdzIGluIHRoZSBxdWVyeS4gRW5hYmxpbmcgdGhpcyByZXR1cm5zIGFubm90YXRpb25zIHRoYXQgbWF0Y2ggYW55IG9mIHRoZSB0YWdzIGluIHRoZSBxdWVyeS5cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZpZWxkIiwiRmllbGRTZXQiLCJTZWxlY3QiLCJTd2l0Y2giLCJjc3MiLCJUYWdGaWx0ZXIiLCJHcmFmYW5hQW5ub3RhdGlvblR5cGUiLCJnZXRBbm5vdGF0aW9uVGFncyIsIm1hdGNoVG9vbHRpcENvbnRlbnQiLCJ0YWdzVG9vbHRpcENvbnRlbnQiLCJhbm5vdGF0aW9uVHlwZXMiLCJsYWJlbCIsInZhbHVlIiwiRGFzaGJvYXJkIiwiZGVzY3JpcHRpb24iLCJUYWdzIiwibGltaXRPcHRpb25zIiwibWFwIiwibGltaXQiLCJTdHJpbmciLCJBbm5vdGF0aW9uUXVlcnlFZGl0b3IiLCJxdWVyeSIsIm9uQ2hhbmdlIiwiYW5ub3RhdGlvblF1ZXJ5IiwibWF0Y2hBbnkiLCJ0YWdzIiwidHlwZSIsInN0eWxlcyIsImdldFN0eWxlcyIsIm9uRmlsdGVyQnlDaGFuZ2UiLCJuZXdWYWx1ZSIsIm9uTWF4TGltaXRDaGFuZ2UiLCJvbk1hdGNoQW55Q2hhbmdlIiwidGFyZ2V0IiwiY2hlY2tlZCIsIm9uVGFnc0NoYW5nZSIsIm9uRm9ybWF0Q3JlYXRlTGFiZWwiLCJpbnB1dCIsImNvbnRhaW5lciIsIlB1cmVDb21wb25lbnQiLCJJbmxpbmVGaWVsZCIsIkFsZXJ0IiwiSW5wdXQiLCJJbmxpbmVGaWVsZFJvdyIsImRhdGFGcmFtZUZyb21KU09OIiwicmFuZ2VVdGlsIiwiZGVmYXVsdFF1ZXJ5IiwiR3JhZmFuYVF1ZXJ5VHlwZSIsImNvbmZpZyIsImdldEJhY2tlbmRTcnYiLCJnZXREYXRhU291cmNlU3J2IiwibGFiZWxXaWR0aCIsIlF1ZXJ5RWRpdG9yIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNoYW5uZWxzIiwiY2hhbm5lbEZpZWxkcyIsIlJhbmRvbVdhbGsiLCJMaXZlTWVhc3VyZW1lbnRzIiwiTGlzdCIsInNlbCIsIm9uUnVuUXVlcnkiLCJxdWVyeVR5cGUiLCJsb2FkQ2hhbm5lbEluZm8iLCJjaGFubmVsIiwiaXRlbSIsImZpZWxkcyIsIkFycmF5IiwiaXNBcnJheSIsInYiLCJsZW5ndGgiLCJmaWx0ZXIiLCJuYW1lcyIsInN0YXRlIiwidGYiLCJmaW5kIiwiZiIsImtleSIsInR4dCIsImJ1ZmZlciIsImludGVydmFsVG9TZWNvbmRzIiwiZXJyIiwiY29uc29sZSIsIndhcm4iLCJlIiwiY2hlY2tBbmRVcGRhdGVWYWx1ZSIsInBhdGgiLCJmZWF0dXJlVG9nZ2xlcyIsInBhbmVsVGl0bGVTZWFyY2giLCJxdWVyeVR5cGVzIiwicHVzaCIsIlNlYXJjaCIsImZldGNoIiwidXJsIiwic3Vic2NyaWJlIiwibmV4dCIsImNoYW5uZWxJbmZvIiwiZGF0YSIsImMiLCJkaXN0aW5jdEZpZWxkcyIsIlNldCIsImZyYW1lIiwiYWRkIiwibmFtZSIsImZyb20iLCJuIiwibWludXRlX3JhdGUiLCJzZXRTdGF0ZSIsImxvYWRGb2xkZXJJbmZvIiwidGFyZ2V0cyIsInJlZklkIiwiZ2V0IiwidGhlbiIsImRzIiwiZ2RzIiwicnNwIiwiZm9sZGVycyIsInZhbHVlcyIsInRvQXJyYXkiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlck1lYXN1cmVtZW50c1F1ZXJ5IiwiY3VycmVudENoYW5uZWwiLCJoYXMiLCJmb3JtYXR0ZWRUaW1lIiwic2Vjb25kc1RvSG1zIiwib25DaGFubmVsQ2hhbmdlIiwib25GaWVsZE5hbWVzQ2hhbmdlIiwiaGFuZGxlRW50ZXJLZXkiLCJoYW5kbGVCbHVyIiwicmVuZGVyTGlzdFB1YmxpY0ZpbGVzIiwiY3VycmVudEZvbGRlciIsIm9uRm9sZGVyQ2hhbmdlZCIsInJlbmRlclNlYXJjaCIsImhhbmRsZVNlYXJjaEVudGVyS2V5IiwiaGFuZGxlU2VhcmNoQmx1ciIsInJlbmRlciIsIm9uUXVlcnlUeXBlQ2hhbmdlIiwibWVyZ2UiLCJvZiIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImdldEdyYWZhbmFMaXZlU3J2IiwiZ2V0VGVtcGxhdGVTcnYiLCJEYXRhRnJhbWVWaWV3IiwiaXNWYWxpZExpdmVDaGFubmVsQWRkcmVzcyIsIk11dGFibGVEYXRhRnJhbWUiLCJwYXJzZUxpdmVDaGFubmVsQWRkcmVzcyIsInRvRGF0YUZyYW1lIiwiZ2V0RGFzaGJvYXJkU3J2IiwiaXNTdHJpbmciLCJtaWdyYXRlRGF0YXNvdXJjZU5hbWVUb1JlZiIsImNvdW50ZXIiLCJHcmFmYW5hRGF0YXNvdXJjZSIsImluc3RhbmNlU2V0dGluZ3MiLCJhbm5vdGF0aW9ucyIsInByZXBhcmVBbm5vdGF0aW9uIiwianNvbiIsInByZXBhcmVRdWVyeSIsImFubm8iLCJkYXRhc291cmNlIiwidW5kZWZpbmVkIiwicmVmIiwicmV0dXJuRGVmYXVsdEFzTnVsbCIsIkFubm90YXRpb25zIiwicmVxdWVzdCIsInJlc3VsdHMiLCJ0ZW1wbGF0ZVNydiIsImdldEFubm90YXRpb25zIiwicmFuZ2UiLCJyYW5nZVJhdyIsInJhdyIsImFubm90YXRpb24iLCJkYXNoYm9hcmQiLCJnZXRDdXJyZW50IiwiaGlkZSIsInJlcGxhY2UiLCJzY29wZWRWYXJzIiwic3RhcnRzV2l0aCIsImFkZHIiLCJtYXhMZW5ndGgiLCJtYXhEYXRhUG9pbnRzIiwibWF4RGVsdGEiLCJ0byIsInZhbHVlT2YiLCJnZXREYXRhU3RyZWFtIiwicmVxdWVzdElkIiwibGlzdEZpbGVzIiwicGlwZSIsIm1ldHJpY0ZpbmRRdWVyeSIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhcmFtcyIsImlkIiwiZGFzaGJvYXJkSWQiLCJkZWxpbWl0ZXIiLCJ0IiwicmVuZGVyZWRWYWx1ZXMiLCJqb2luIiwidHQiLCJzcGxpdCIsInRlc3REYXRhc291cmNlIiwiRGF0YVNvdXJjZVBsdWdpbiIsInBsdWdpbiIsInNldFF1ZXJ5RWRpdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
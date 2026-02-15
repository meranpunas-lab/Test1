"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["influxdbPlugin"],{

/***/ "./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _InlineFormLabel2, _InfoBox, _InlineFormLabel3, _h, _InfoBox2, _Alert, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Input,
  SecretFormField
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LegacyForms;




const httpModes = [{
  label: 'GET',
  value: 'GET'
}, {
  label: 'POST',
  value: 'POST'
}];
const versions = [{
  label: 'InfluxQL',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.InfluxQL,
  description: 'The InfluxDB SQL-like query language.'
}, {
  label: 'Flux',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux,
  description: 'Advanced data scripting and query language.  Supported in InfluxDB 2.x and 1.8+'
}];
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    var _props$options$jsonDa;

    super(props);

    _defineProperty(this, "state", {
      maxSeries: ''
    });

    _defineProperty(this, "htmlPrefix", void 0);

    _defineProperty(this, "onResetPassword", () => {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginResetOption)(this.props, 'password');
    });

    _defineProperty(this, "onResetToken", () => {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginResetOption)(this.props, 'token');
    });

    _defineProperty(this, "onVersionChanged", selected => {
      const {
        options,
        onOptionsChange
      } = this.props;
      const copy = Object.assign({}, options, {
        jsonData: Object.assign({}, options.jsonData, {
          version: selected.value
        })
      });

      if (selected.value === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux) {
        copy.access = 'proxy';
        copy.basicAuth = true;
        copy.jsonData.httpMode = 'POST'; // Remove old 1x configs

        delete copy.user;
        delete copy.database;
      }

      onOptionsChange(copy);
    });

    this.state.maxSeries = ((_props$options$jsonDa = props.options.jsonData.maxSeries) === null || _props$options$jsonDa === void 0 ? void 0 : _props$options$jsonDa.toString()) || '';
    this.htmlPrefix = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)('influxdb-config');
  } // 1x


  renderInflux2x() {
    const {
      options
    } = this.props;
    const {
      secureJsonFields
    } = options;
    const secureJsonData = options.secureJsonData || {};
    const {
      htmlPrefix
    } = this;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-org`,
            className: "width-10",
            children: "Organization"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              id: `${htmlPrefix}-org`,
              className: "width-20",
              value: options.jsonData.organization || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'organization')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SecretFormField, {
            isConfigured: secureJsonFields && secureJsonFields.token,
            value: secureJsonData.token || '',
            label: "Token",
            "aria-label": "Token",
            labelWidth: 10,
            inputWidth: 20,
            onReset: this.onResetToken,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceSecureJsonDataOption)(this.props, 'token')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            className: "width-10",
            children: "Default Bucket"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              className: "width-20",
              placeholder: "default bucket",
              value: options.jsonData.defaultBucket || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'defaultBucket')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            className: "width-10",
            tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
            children: "Min time interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              className: "width-10",
              placeholder: "10s",
              value: options.jsonData.timeInterval || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'timeInterval')
            })
          })]
        })
      })]
    });
  }

  renderInflux1x() {
    const {
      options
    } = this.props;
    const {
      secureJsonFields
    } = options;
    const secureJsonData = options.secureJsonData || {};
    const {
      htmlPrefix
    } = this;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
          children: "Database Access"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: ["Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "SHOW MEASUREMENTS ON _internal"
          }), " or", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "SELECT * FROM \"_internal\"..\"database\" LIMIT 10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "To support data isolation and security, make sure appropriate permissions are configured in InfluxDB."]
        })]
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-db`,
            className: "width-10",
            children: "Database"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-20",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              id: `${htmlPrefix}-db`,
              className: "width-20",
              value: options.database || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceOption)(this.props, 'database')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-user`,
            className: "width-10",
            children: "User"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              id: `${htmlPrefix}-user`,
              className: "width-20",
              value: options.user || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceOption)(this.props, 'user')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SecretFormField, {
            isConfigured: secureJsonFields && secureJsonFields.password,
            value: secureJsonData.password || '',
            label: "Password",
            "aria-label": "Password",
            labelWidth: 10,
            inputWidth: 20,
            onReset: this.onResetPassword,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceSecureJsonDataOption)(this.props, 'password')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-http-method`,
            className: "width-10",
            tooltip: "You can use either GET or POST HTTP method to query your InfluxDB database. The POST method allows you to perform heavy requests (with a lots of WHERE clause) while the GET method will restrict you and return an error if the query is too large.",
            children: "HTTP Method"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            inputId: `${htmlPrefix}-http-method`,
            menuShouldPortal: true,
            className: "width-10",
            value: httpModes.find(httpMode => httpMode.value === options.jsonData.httpMode),
            options: httpModes,
            defaultValue: options.jsonData.httpMode,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'httpMode')
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            className: "width-10",
            tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
            children: "Min time interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              className: "width-10",
              placeholder: "10s",
              value: options.jsonData.timeInterval || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'timeInterval')
            })
          })]
        })
      })]
    });
  }

  render() {
    const {
      options,
      onOptionsChange
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        className: "page-heading",
        children: "Query Language"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
              "aria-label": "Query language",
              menuShouldPortal: true,
              className: "width-30",
              value: options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux ? versions[1] : versions[0],
              options: versions,
              defaultValue: versions[0],
              onChange: this.onVersionChanged
            })
          })
        })
      }), options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux && (_InfoBox2 || (_InfoBox2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
          children: "Support for Flux in Grafana is currently in beta"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: ["Please report any issues to: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            href: "https://github.com/grafana/grafana/issues/new/choose",
            children: "https://github.com/grafana/grafana/issues"
          })]
        })]
      }))), options.access === 'direct' && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: "Deprecation Notice",
        severity: "warning",
        children: "Browser access mode in the InfluxDB datasource is deprecated and will be removed in a future release."
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.DataSourceHttpSettings, {
        showAccessOptions: true,
        dataSourceConfig: options,
        defaultUrl: "http://localhost:8086",
        onChange: onOptionsChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form-group",
        children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            className: "page-heading",
            children: "InfluxDB Details"
          })
        })), options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux ? this.renderInflux2x() : this.renderInflux1x(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
            labelWidth: 20,
            label: "Max series",
            tooltip: "Limit the number of series/tables that Grafana will process. Lower this number to prevent abuse, and increase it if you have lots of small time series and not all are shown. Defaults to 1000.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              placeholder: "1000",
              type: "number",
              className: "width-10",
              value: this.state.maxSeries,
              onChange: event => {
                // We duplicate this state so that we allow to write freely inside the input. We don't have
                // any influence over saving so this seems to be only way to do this.
                this.setState({
                  maxSeries: event.currentTarget.value
                });
                const val = parseInt(event.currentTarget.value, 10);
                (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)(this.props, 'maxSeries', Number.isFinite(val) ? val : undefined);
              }
            })
          })
        })]
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxQueryEditor": () => (/* binding */ FluxQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _LinkButton, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const samples = [{
  label: 'Show buckets',
  description: 'List the available buckets (table)',
  value: 'buckets()'
}, {
  label: 'Simple query',
  description: 'filter by measurement and field',
  value: `from(bucket: "db/rp")
  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)
  |> filter(fn: (r) =>
    r._measurement == "example-measurement" and
    r._field == "example-field"
  )`
}, {
  label: 'Grouped Query',
  description: 'Group by (min/max/sum/median)',
  value: `// v.windowPeriod is a variable referring to the current optimized window period (currently: $interval)
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "measurement1" or r["_measurement"] =~ /^.*?regex.*$/)
  |> filter(fn: (r) => r["_field"] == "field2" or r["_field"] =~ /^.*?regex.*$/)
  |> aggregateWindow(every: v.windowPeriod, fn: mean|median|max|count|derivative|sum)
  |> yield(name: "some-name")`
}, {
  label: 'Filter by value',
  description: 'Results between a min/max',
  value: `// v.bucket, v.timeRangeStart, and v.timeRange stop are all variables supported by the flux plugin and influxdb
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_value"] >= 10 and r["_value"] <= 20)`
}, {
  label: 'Schema Exploration: (measurements)',
  description: 'Get a list of measurement using flux',
  value: `import "influxdata/influxdb/v1"
v1.measurements(bucket: v.bucket)`
}, {
  label: 'Schema Exploration: (fields)',
  description: 'Return every possible key in a single table',
  value: `from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)
  |> keys()
  |> keep(columns: ["_value"])
  |> group()
  |> distinct()`
}, {
  label: 'Schema Exploration: (tag keys)',
  description: 'Get a list of tag keys using flux',
  value: `import "influxdata/influxdb/v1"
v1.tagKeys(bucket: v.bucket)`
}, {
  label: 'Schema Exploration: (tag values)',
  description: 'Get a list of tag values using flux',
  value: `import "influxdata/influxdb/v1"
v1.tagValues(
    bucket: v.bucket,
    tag: "host",
    predicate: (r) => true,
    start: -1d
)`
}];
class FluxQueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onFluxQueryChange", query => {
      this.props.onChange(Object.assign({}, this.props.query, {
        query
      }));
      this.props.onRunQuery();
    });

    _defineProperty(this, "onSampleChange", val => {
      this.props.onChange(Object.assign({}, this.props.query, {
        query: val.value
      })); // Angular HACK: Since the target does not actually change!

      this.forceUpdate();
      this.props.onRunQuery();
    });

    _defineProperty(this, "getSuggestions", () => {
      const sugs = [{
        label: 'v.timeRangeStart',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditorSuggestionItemKind.Property,
        detail: 'The start time'
      }, {
        label: 'v.timeRangeStop',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditorSuggestionItemKind.Property,
        detail: 'The stop time'
      }, {
        label: 'v.windowPeriod',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditorSuggestionItemKind.Property,
        detail: 'based on max data points'
      }, {
        label: 'v.defaultBucket',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditorSuggestionItemKind.Property,
        detail: 'bucket configured in the datsource'
      }, {
        label: 'v.organization',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditorSuggestionItemKind.Property,
        detail: 'org configured for the datsource'
      }];
      const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)();
      templateSrv.getVariables().forEach(variable => {
        const label = '${' + variable.name + '}';
        let val = templateSrv.replace(label);

        if (val === label) {
          val = '';
        }

        sugs.push({
          label,
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditorSuggestionItemKind.Text,
          detail: `(Template Variable) ${val}`
        });
      });
      return sugs;
    });

    _defineProperty(this, "editorDidMountCallbackHack", editor => {
      setTimeout(() => editor.layout(), 100);
    });
  }

  render() {
    const {
      query
    } = this.props;

    const helpTooltip = _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: ["Type: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
        children: "ctrl+space"
      }), " to show template variable suggestions ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Many queries can be copied from Chronograf"]
    }));

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor, {
        height: '200px',
        language: "sql",
        value: query.query || '',
        onBlur: this.onFluxQueryChange,
        onSave: this.onFluxQueryChange,
        showMiniMap: false,
        showLineNumbers: true,
        getSuggestions: this.getSuggestions,
        onEditorDidMount: this.editorDidMountCallbackHack
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)('gf-form-inline', _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
              margin-top: 6px;
            `),
        children: [_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          icon: "external-link-alt",
          variant: "secondary",
          target: "blank",
          href: "https://docs.influxdata.com/influxdb/latest/query-data/get-started/",
          children: "Flux language syntax"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Segment, {
          options: samples,
          value: "Sample Query",
          onChange: this.onSampleChange
        }), _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "gf-form-label gf-form-label--grow"
          })
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
          width: 5,
          tooltip: helpTooltip,
          children: "Help"
        })]
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;




const CHEAT_SHEET_ITEMS = [{
  title: 'Getting started',
  label: 'Start by selecting a measurement and field from the dropdown above. You can then use the tag selector to further narrow your search.'
}];

const InfluxCheatSheet = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
    children: "InfluxDB Cheat Sheet"
  })), CHEAT_SHEET_ITEMS.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "cheat-sheet-item",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cheat-sheet-item__title",
      children: item.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cheat-sheet-item__label",
      children: item.label
    })]
  }, item.title))]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfluxCheatSheet);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxStartPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



class InfluxStartPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClickExample: this.props.onClickExample
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _FluxQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
/* harmony import */ var _RawInfluxQLEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/RawInfluxQLEditor.tsx");
/* harmony import */ var _VisualInfluxQLEditor_Editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Editor.tsx");
/* harmony import */ var _QueryEditorModeSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/QueryEditorModeSwitcher.tsx");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const QueryEditor = ({
  query,
  onChange,
  onRunQuery,
  datasource,
  range,
  data
}) => {
  var _query$rawQuery;

  if (datasource.isFlux) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "gf-form-query-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_2__.FluxQueryEditor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery,
        datasource: datasource
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: 'flex'
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        flexGrow: 1
      }),
      children: query.rawQuery ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_RawInfluxQLEditor__WEBPACK_IMPORTED_MODULE_3__.RawInfluxQLEditor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_VisualInfluxQLEditor_Editor__WEBPACK_IMPORTED_MODULE_4__.Editor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery,
        datasource: datasource
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_QueryEditorModeSwitcher__WEBPACK_IMPORTED_MODULE_5__.QueryEditorModeSwitcher, {
      isRaw: (_query$rawQuery = query.rawQuery) !== null && _query$rawQuery !== void 0 ? _query$rawQuery : false,
      onChange: value => {
        onChange(Object.assign({}, query, {
          query: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_6__.buildRawQuery)(query),
          rawQuery: value
        }));
        onRunQuery();
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/QueryEditorModeSwitcher.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorModeSwitcher": () => (/* binding */ QueryEditorModeSwitcher)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const QueryEditorModeSwitcher = ({
  isRaw,
  onChange
}) => {
  const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // if the isRaw changes, we hide the modal
    setModalOpen(false);
  }, [isRaw]);

  if (isRaw) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        "aria-label": "Switch to visual editor",
        icon: "pen",
        variant: "secondary",
        type: "button",
        onClick: () => {
          // we show the are-you-sure modal
          setModalOpen(true);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
        isOpen: isModalOpen,
        title: "Switch to visual editor mode",
        body: "Are you sure to switch to visual editor mode? You will lose the changes done in raw query mode.",
        confirmText: "Yes, switch to editor mode",
        dismissText: "No, stay in raw query mode",
        onConfirm: () => {
          onChange(false);
        },
        onDismiss: () => {
          setModalOpen(false);
        }
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      "aria-label": "Switch to text editor",
      icon: "pen",
      variant: "secondary",
      type: "button",
      onClick: () => {
        onChange(true);
      }
    });
  }
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/RawInfluxQLEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawInfluxQLEditor": () => (/* binding */ RawInfluxQLEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _useShadowedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useShadowedState.ts");
/* harmony import */ var _useUniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







// we handle 3 fields: "query", "alias", "resultFormat"
// "resultFormat" changes are applied immediately
// "query" and "alias" changes only happen on onblur
const RawInfluxQLEditor = ({
  query,
  onChange,
  onRunQuery
}) => {
  var _query$resultFormat;

  const [currentQuery, setCurrentQuery] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_2__.useShadowedState)(query.query);
  const [currentAlias, setCurrentAlias] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_2__.useShadowedState)(query.alias);
  const aliasElementId = (0,_useUniqueId__WEBPACK_IMPORTED_MODULE_3__.useUniqueId)();
  const selectElementId = (0,_useUniqueId__WEBPACK_IMPORTED_MODULE_3__.useUniqueId)();
  const resultFormat = (_query$resultFormat = query.resultFormat) !== null && _query$resultFormat !== void 0 ? _query$resultFormat : _constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_RESULT_FORMAT;

  const applyDelayedChangesAndRunQuery = () => {
    onChange(Object.assign({}, query, {
      query: currentQuery,
      alias: currentAlias,
      resultFormat
    }));
    onRunQuery();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
      "aria-label": "query",
      rows: 3,
      spellCheck: false,
      placeholder: "InfluxDB Query",
      onBlur: applyDelayedChangesAndRunQuery,
      onChange: e => {
        setCurrentQuery(e.currentTarget.value);
      },
      value: currentQuery !== null && currentQuery !== void 0 ? currentQuery : ''
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
        htmlFor: selectElementId,
        children: "Format as"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        menuShouldPortal: true,
        inputId: selectElementId,
        onChange: v => {
          onChange(Object.assign({}, query, {
            resultFormat: v.value
          }));
          onRunQuery();
        },
        value: resultFormat,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__.RESULT_FORMATS
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
        htmlFor: aliasElementId,
        children: "Alias by"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        id: aliasElementId,
        type: "text",
        spellCheck: false,
        placeholder: "Naming pattern",
        onBlur: applyDelayedChangesAndRunQuery,
        onChange: e => {
          setCurrentAlias(e.currentTarget.value);
        },
        value: currentAlias !== null && currentAlias !== void 0 ? currentAlias : ''
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VariableQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _FluxQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class VariableQueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onRefresh", () => {// noop
    });
  }

  render() {
    let {
      query,
      datasource,
      onChange
    } = this.props;

    if (datasource.isFlux) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_2__.FluxQueryEditor, {
        datasource: datasource,
        query: {
          refId: 'A',
          query
        },
        onRunQuery: this.onRefresh,
        onChange: v => onChange(v.query)
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gf-form-inline",
      children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
        width: 10,
        children: "Query"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form-inline gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
          defaultValue: query || '',
          placeholder: "metric name or tags query",
          rows: 1,
          className: "gf-form-input",
          onBlur: e => onChange(e.currentTarget.value)
        })
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddButton": () => (/* binding */ AddButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const AddButton = ({
  loadOptions,
  allowCustomValue,
  onAdd
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
    value: "+",
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: v => {
      onAdd((0,_unwrap__WEBPACK_IMPORTED_MODULE_2__.unwrap)(v.value));
    }
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Editor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _FromSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FromSection.tsx");
/* harmony import */ var _TagsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/TagsSection.tsx");
/* harmony import */ var _PartListSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/PartListSection.tsx");
/* harmony import */ var _OrderByTimeSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/OrderByTimeSection.tsx");
/* harmony import */ var _InputSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/InputSection.tsx");
/* harmony import */ var _influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influxQLMetadataQuery.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _FormatAsSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FormatAsSection.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/constants.ts");
/* harmony import */ var _partListUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/partListUtils.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _useUniqueId__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



















function getTemplateVariableOptions() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().getVariables() // we make them regex-params, i'm not 100% sure why.
  // probably because this way multi-value variables work ok too.
  .map(v => `/^$${v.name}$/`);
} // helper function to make it easy to call this from the widget-render-code


function withTemplateVariableOptions(optionsPromise) {
  return optionsPromise.then(options => [...getTemplateVariableOptions(), ...options]);
} // it is possible to add fields into the `InfluxQueryTag` structures, and they do work,
// but in some cases, when we do metadata queries, we have to remove them from the queries.


function filterTags(parts, allTagKeys) {
  return parts.filter(t => allTagKeys.has(t.key));
}

const Editor = props => {
  var _query$tags3, _query$limit, _query$slimit, _query$resultFormat;

  const uniqueId = (0,_useUniqueId__WEBPACK_IMPORTED_MODULE_14__.useUniqueId)();
  const formatAsId = `influxdb-qe-format-as-${uniqueId}`;
  const orderByTimeId = `influxdb-qe-order-by${uniqueId}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const query = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_8__.normalizeQuery)(props.query);
  const {
    datasource
  } = props;
  const {
    measurement,
    policy
  } = query;
  const allTagKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_7__.getTagKeysForMeasurementAndTags)(measurement, policy, [], datasource).then(tags => {
      return new Set(tags);
    });
  }, [measurement, policy, datasource]);
  const selectLists = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _query$select;

    const dynamicSelectPartOptions = new Map([['field_0', () => {
      return measurement !== undefined ? (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_7__.getFieldKeysForMeasurement)(measurement, policy, datasource) : Promise.resolve([]);
    }]]);
    return ((_query$select = query.select) !== null && _query$select !== void 0 ? _query$select : []).map(sel => (0,_partListUtils__WEBPACK_IMPORTED_MODULE_11__.makePartList)(sel, dynamicSelectPartOptions));
  }, [measurement, policy, query.select, datasource]); // the following function is not complicated enough to memoize, but it's result
  // is used in both memoized and un-memoized parts, so we have no choice

  const getTagKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return () => allTagKeys.then(keys => {
      var _query$tags;

      return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_7__.getTagKeysForMeasurementAndTags)(measurement, policy, filterTags((_query$tags = query.tags) !== null && _query$tags !== void 0 ? _query$tags : [], keys), datasource);
    });
  }, [measurement, policy, query.tags, datasource, allTagKeys]);
  const groupByList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _query$groupBy;

    const dynamicGroupByPartOptions = new Map([['tag_0', getTagKeys]]);
    return (0,_partListUtils__WEBPACK_IMPORTED_MODULE_11__.makePartList)((_query$groupBy = query.groupBy) !== null && _query$groupBy !== void 0 ? _query$groupBy : [], dynamicGroupByPartOptions);
  }, [getTagKeys, query.groupBy]);

  const onAppliedChange = newQuery => {
    props.onChange(newQuery);
    props.onRunQuery();
  };

  const handleFromSectionChange = (p, m) => {
    onAppliedChange(Object.assign({}, query, {
      policy: p,
      measurement: m
    }));
  };

  const handleTagsSectionChange = tags => {
    // we set empty-arrays to undefined
    onAppliedChange(Object.assign({}, query, {
      tags: tags.length === 0 ? undefined : tags
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.SegmentSection, {
      label: "FROM",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_FromSection__WEBPACK_IMPORTED_MODULE_2__.FromSection, {
        policy: policy,
        measurement: measurement,
        getPolicyOptions: () => (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_7__.getAllPolicies)(datasource),
        getMeasurementOptions: filter => withTemplateVariableOptions(allTagKeys.then(keys => {
          var _query$tags2;

          return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_7__.getAllMeasurementsForTags)(filter === '' ? undefined : filter, filterTags((_query$tags2 = query.tags) !== null && _query$tags2 !== void 0 ? _query$tags2 : [], keys), datasource);
        })),
        onChange: handleFromSectionChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineLabel, {
        width: "auto",
        className: styles.inlineLabel,
        children: "WHERE"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_TagsSection__WEBPACK_IMPORTED_MODULE_3__.TagsSection, {
        tags: (_query$tags3 = query.tags) !== null && _query$tags3 !== void 0 ? _query$tags3 : [],
        onChange: handleTagsSectionChange,
        getTagKeyOptions: getTagKeys,
        getTagValueOptions: key => withTemplateVariableOptions(allTagKeys.then(keys => {
          var _query$tags4;

          return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_7__.getTagValues)(key, measurement, policy, filterTags((_query$tags4 = query.tags) !== null && _query$tags4 !== void 0 ? _query$tags4 : [], keys), datasource);
        }))
      })]
    }), selectLists.map((sel, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.SegmentSection, {
      label: index === 0 ? 'SELECT' : '',
      fill: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PartListSection__WEBPACK_IMPORTED_MODULE_4__.PartListSection, {
        parts: sel,
        getNewPartOptions: () => Promise.resolve((0,_partListUtils__WEBPACK_IMPORTED_MODULE_11__.getNewSelectPartOptions)()),
        onChange: (partIndex, newParams) => {
          const newQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_8__.changeSelectPart)(query, index, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: type => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_8__.addNewSelectPart)(query, type, index));
        },
        onRemovePart: partIndex => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_8__.removeSelectPart)(query, partIndex, index));
        }
      })
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.SegmentSection, {
      label: "GROUP BY",
      fill: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PartListSection__WEBPACK_IMPORTED_MODULE_4__.PartListSection, {
        parts: groupByList,
        getNewPartOptions: () => (0,_partListUtils__WEBPACK_IMPORTED_MODULE_11__.getNewGroupByPartOptions)(query, getTagKeys),
        onChange: (partIndex, newParams) => {
          const newQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_8__.changeGroupByPart)(query, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: type => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_8__.addNewGroupByPart)(query, type));
        },
        onRemovePart: partIndex => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_8__.removeGroupByPart)(query, partIndex));
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.SegmentSection, {
      label: "TIMEZONE",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_6__.InputSection, {
        placeholder: "(optional)",
        value: query.tz,
        onChange: tz => {
          onAppliedChange(Object.assign({}, query, {
            tz
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineLabel, {
        htmlFor: orderByTimeId,
        width: "auto",
        className: styles.inlineLabel,
        children: "ORDER BY TIME"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_OrderByTimeSection__WEBPACK_IMPORTED_MODULE_5__.OrderByTimeSection, {
        inputId: orderByTimeId,
        value: query.orderByTime === 'DESC' ? 'DESC' : 'ASC'
        /* FIXME: make this shared with influx_query_model */
        ,
        onChange: v => {
          onAppliedChange(Object.assign({}, query, {
            orderByTime: v
          }));
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.SegmentSection, {
      label: "LIMIT",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_6__.InputSection, {
        placeholder: "(optional)",
        value: (_query$limit = query.limit) === null || _query$limit === void 0 ? void 0 : _query$limit.toString(),
        onChange: limit => {
          onAppliedChange(Object.assign({}, query, {
            limit
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineLabel, {
        width: "auto",
        className: styles.inlineLabel,
        children: "SLIMIT"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_6__.InputSection, {
        placeholder: "(optional)",
        value: (_query$slimit = query.slimit) === null || _query$slimit === void 0 ? void 0 : _query$slimit.toString(),
        onChange: slimit => {
          onAppliedChange(Object.assign({}, query, {
            slimit
          }));
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.SegmentSection, {
      htmlFor: formatAsId,
      label: "FORMAT AS",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_FormatAsSection__WEBPACK_IMPORTED_MODULE_9__.FormatAsSection, {
        inputId: formatAsId,
        format: (_query$resultFormat = query.resultFormat) !== null && _query$resultFormat !== void 0 ? _query$resultFormat : _constants__WEBPACK_IMPORTED_MODULE_10__.DEFAULT_RESULT_FORMAT,
        onChange: format => {
          onAppliedChange(Object.assign({}, query, {
            resultFormat: format
          }));
        }
      }), query.resultFormat !== 'table' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineLabel, {
          width: "auto",
          className: styles.inlineLabel,
          children: "ALIAS"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_6__.InputSection, {
          isWide: true,
          placeholder: "Naming pattern",
          value: query.alias,
          onChange: alias => {
            onAppliedChange(Object.assign({}, query, {
              alias
            }));
          }
        })]
      })]
    })]
  });
};

function getStyles(theme) {
  return {
    inlineLabel: _emotion_css__WEBPACK_IMPORTED_MODULE_13__.css`
      color: ${theme.colors.primary.text};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FormatAsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatAsSection": () => (/* binding */ FormatAsSection)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/constants.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)('width-8', _styles__WEBPACK_IMPORTED_MODULE_5__.paddingRightClass);
const FormatAsSection = ({
  format,
  inputId,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
    inputId: inputId,
    className: className,
    onChange: v => {
      onChange((0,_unwrap__WEBPACK_IMPORTED_MODULE_3__.unwrap)(v.value));
    },
    value: format,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__.RESULT_FORMATS
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FromSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FromSection": () => (/* binding */ FromSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const DEFAULT_POLICY = 'default'; // we use the value "default" as a magic-value, it means
// we use the default retention-policy.
// unfortunately, IF the user has a retention-policy named "default",
// and it is not the default-retention-policy in influxdb,
// bad things will happen.
// https://github.com/grafana/grafana/issues/4347 :-(
// FIXME: we could maybe at least detect here that problem-is-happening,
// and show an error message or something.
// unfortunately, currently the ResponseParser does not return the
// is-default info for the retention-policies, so that should change first.

const FromSection = ({
  policy,
  measurement,
  onChange,
  getPolicyOptions,
  getMeasurementOptions
}) => {
  const handlePolicyLoadOptions = async () => {
    const allPolicies = await getPolicyOptions(); // if `default` does not exist in the list of policies, we add it

    const allPoliciesWithDefault = allPolicies.some(p => p === 'default') ? allPolicies : [DEFAULT_POLICY, ...allPolicies];
    return allPoliciesWithDefault.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue);
  };

  const handleMeasurementLoadOptions = async filter => {
    const allMeasurements = await getMeasurementOptions(filter);
    return allMeasurements.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      allowCustomValue: true,
      value: policy !== null && policy !== void 0 ? policy : 'using default policy',
      loadOptions: handlePolicyLoadOptions,
      onChange: v => {
        onChange(v.value, measurement);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      allowCustomValue: true,
      value: measurement !== null && measurement !== void 0 ? measurement : 'select measurement',
      loadOptions: handleMeasurementLoadOptions,
      filterByLoadOptions: true,
      onChange: v => {
        onChange(policy, v.value);
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/InputSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputSection": () => (/* binding */ InputSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _useShadowedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useShadowedState.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const InputSection = ({
  value,
  onChange,
  isWide,
  placeholder
}) => {
  const [currentValue, setCurrentValue] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_3__.useShadowedState)(value);

  const onBlur = () => {
    // we send empty-string as undefined
    const newValue = currentValue === '' ? undefined : currentValue;
    onChange(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
      placeholder: placeholder,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)((isWide !== null && isWide !== void 0 ? isWide : false) ? 'width-14' : 'width-8', _styles__WEBPACK_IMPORTED_MODULE_4__.paddingRightClass),
      type: "text",
      spellCheck: false,
      onBlur: onBlur,
      onChange: e => {
        setCurrentValue(e.currentTarget.value);
      },
      value: currentValue !== null && currentValue !== void 0 ? currentValue : ''
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/OrderByTimeSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderByTimeSection": () => (/* binding */ OrderByTimeSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const OPTIONS = [{
  label: 'ascending',
  value: 'ASC'
}, {
  label: 'descending',
  value: 'DESC'
}];
const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)('width-9', _styles__WEBPACK_IMPORTED_MODULE_4__.paddingRightClass);
const OrderByTimeSection = ({
  value,
  onChange,
  inputId
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      inputId: inputId,
      className: className,
      onChange: v => {
        onChange((0,_unwrap__WEBPACK_IMPORTED_MODULE_2__.unwrap)(v.value));
      },
      value: value,
      options: OPTIONS
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/PartListSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartListSection": () => (/* binding */ PartListSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const renderRemovableNameMenuItems = onClick => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: "",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
      label: "remove",
      onClick: onClick
    })
  });
};

const noRightMarginPaddingClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  paddingRight: '0',
  marginRight: '0'
});

const RemovableName = ({
  name,
  onRemove
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.WithContextMenu, {
    renderMenuItems: () => renderRemovableNameMenuItems(onRemove),
    children: ({
      openMenu
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)('gf-form-label', noRightMarginPaddingClass),
      onClick: openMenu,
      children: name
    })
  });
};

const noHorizMarginPaddingClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  paddingLeft: '0',
  paddingRight: '0',
  marginLeft: '0',
  marginRight: '0'
});

const getPartClass = theme => {
  return (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)('gf-form-label', (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    paddingLeft: '0',
    // gf-form-label class makes certain css attributes incorrect
    // for the selectbox-dropdown, so we have to "reset" them back
    lineHeight: theme.typography.body.lineHeight,
    fontSize: theme.typography.body.fontSize
  }));
};

const Part = ({
  name,
  params,
  onChange,
  onRemove
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const partClass = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getPartClass(theme), [theme]);

  const onParamChange = (par, i) => {
    const newParams = params.map(p => p.value);
    newParams[i] = par;
    onChange(newParams);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: partClass,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(RemovableName, {
      name: name,
      onRemove: onRemove
    }), "(", params.map((p, i) => {
      const {
        value,
        options
      } = p;
      const isLast = i === params.length - 1;
      const loadOptions = options !== null ? () => options().then(items => items.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_5__.toSelectableValue)) : undefined;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_3__.Seg, {
          allowCustomValue: true,
          value: value,
          buttonClassName: noHorizMarginPaddingClass,
          loadOptions: loadOptions,
          onChange: v => {
            onParamChange((0,_unwrap__WEBPACK_IMPORTED_MODULE_4__.unwrap)(v.value), i);
          }
        }), !isLast && ',']
      }, i);
    }), ")"]
  });
};

const PartListSection = ({
  parts,
  getNewPartOptions,
  onAddNewPart,
  onRemovePart,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [parts.map((part, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Part, {
      name: part.name,
      params: part.params,
      onRemove: () => {
        onRemovePart(index);
      },
      onChange: pars => {
        onChange(index, pars);
      }
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AddButton__WEBPACK_IMPORTED_MODULE_6__.AddButton, {
      loadOptions: getNewPartOptions,
      onAdd: onAddNewPart
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Seg": () => (/* binding */ Seg)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _useShadowedState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useShadowedState.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





 // this file is a simpler version of `grafana-ui / SegmentAsync.tsx`
// with some changes:
// 1. click-outside does not select the value. i think it's better to be explicit here.
// 2. we set a min-width on the select-element to handle cases where the `value`
//    is very short, like "x", and then you click on it and the select opens,
//    and it tries to be as short as "x" and it does not work well.
// NOTE: maybe these changes could be migrated into the SegmentAsync later


const selectClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  minWidth: '160px'
});

// when a custom value is written into a select-box,
// by default the new value is prefixed with "Create:",
// and that sounds confusing because here we do not create
// anything. we change this to just be the entered string.
const formatCreateLabel = v => v;

const SelReload = ({
  loadOptions,
  allowCustomValue,
  onChange,
  onClose
}) => {
  // here we rely on the fact that writing text into the <AsyncSelect/>
  // does not cause a re-render of the current react component.
  // this way there is only a single render-call,
  // so there is only a single `debouncedLoadOptions`.
  // if we want ot make this "re-render safe,
  // we will have to put the debounced call into an useRef,
  // and probably have an useEffect
  const debouncedLoadOptions = debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()(loadOptions, 1000, {
    leading: true
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: selectClass,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.AsyncSelect, {
      menuShouldPortal: true,
      formatCreateLabel: formatCreateLabel,
      defaultOptions: true,
      autoFocus: true,
      isOpen: true,
      onCloseMenu: onClose,
      allowCustomValue: allowCustomValue,
      loadOptions: debouncedLoadOptions,
      onChange: onChange
    })
  });
};

const SelSingleLoad = ({
  loadOptions,
  allowCustomValue,
  onChange,
  onClose
}) => {
  var _loadState$value;

  const [loadState, doLoad] = (0,react_use__WEBPACK_IMPORTED_MODULE_6__["default"])(loadOptions, [loadOptions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    doLoad('');
  }, [doLoad, loadOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: selectClass,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      menuShouldPortal: true,
      isLoading: loadState.loading,
      formatCreateLabel: formatCreateLabel,
      autoFocus: true,
      isOpen: true,
      onCloseMenu: onClose,
      allowCustomValue: allowCustomValue,
      options: (_loadState$value = loadState.value) !== null && _loadState$value !== void 0 ? _loadState$value : [],
      onChange: onChange
    })
  });
};

const Sel = ({
  loadOptions,
  filterByLoadOptions,
  allowCustomValue,
  onChange,
  onClose
}) => {
  // unfortunately <Segment/> and <SegmentAsync/> have somewhat different behavior,
  // so the simplest approach was to just create two separate wrapper-components
  return filterByLoadOptions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SelReload, {
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: onChange,
    onClose: onClose
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SelSingleLoad, {
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: onChange,
    onClose: onClose
  });
};

const Inp = ({
  initialValue,
  onChange,
  onClose
}) => {
  const [currentValue, setCurrentValue] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_4__.useShadowedState)(initialValue);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
    autoFocus: true,
    type: "text",
    spellCheck: false,
    onBlur: onClose,
    onKeyDown: e => {
      if (e.key === 'Enter') {
        onChange(currentValue);
      }
    },
    onChange: e => {
      setCurrentValue(e.currentTarget.value);
    },
    value: currentValue
  });
};

const defaultButtonClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  width: 'auto',
  cursor: 'pointer'
});
const Seg = ({
  value,
  buttonClassName,
  loadOptions,
  filterByLoadOptions,
  allowCustomValue,
  onChange
}) => {
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  if (!isOpen) {
    const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(defaultButtonClass, buttonClassName);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
      as: "button",
      className: className,
      onClick: () => {
        setOpen(true);
      },
      children: value
    });
  } else {
    if (loadOptions !== undefined) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Sel, {
        loadOptions: loadOptions,
        filterByLoadOptions: filterByLoadOptions !== null && filterByLoadOptions !== void 0 ? filterByLoadOptions : false,
        allowCustomValue: allowCustomValue,
        onChange: v => {
          setOpen(false);
          onChange(v);
        },
        onClose: () => {
          setOpen(false);
        }
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Inp, {
        initialValue: value,
        onClose: () => {
          setOpen(false);
        },
        onChange: v => {
          setOpen(false);
          onChange({
            value: v,
            label: v
          });
        }
      });
    }
  }
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/TagsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsSection": () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var _tagUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/tagUtils.ts");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const knownOperators = ['=', '!=', '<>', '<', '>', '=~', '!~'];
const knownConditions = ['AND', 'OR'];
const operatorOptions = knownOperators.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue);
const condititonOptions = knownConditions.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue);

const loadConditionOptions = () => Promise.resolve(condititonOptions);

const loadOperatorOptions = () => Promise.resolve(operatorOptions);

const Tag = ({
  tag,
  isFirst,
  onRemove,
  onChange,
  getTagKeyOptions,
  getTagValueOptions
}) => {
  const operator = (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getOperator)(tag);
  const condition = (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getCondition)(tag, isFirst);

  const getTagKeySegmentOptions = () => {
    return getTagKeyOptions().catch(err => {
      // in this UI element we add a special item to the list of options,
      // that is used to remove the element.
      // this causes a problem: if `getTagKeyOptions` fails with an error,
      // the remove-filter option is never added to the list,
      // and the UI element can not be removed.
      // to avoid it, we catch any potential errors coming from `getTagKeyOptions`,
      // log the error, and pretend that the list of options is an empty list.
      // this way the remove-item option can always be added to the list.
      console.error(err);
      return [];
    }).then(tags => [{
      label: '-- remove filter --',
      value: undefined
    }, ...tags.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)]);
  };

  const getTagValueSegmentOptions = () => {
    return getTagValueOptions(tag.key).then(tags => tags.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "gf-form",
    children: [condition != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      value: condition,
      loadOptions: loadConditionOptions,
      onChange: v => {
        onChange(Object.assign({}, tag, {
          condition: v.value
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      allowCustomValue: true,
      value: tag.key,
      loadOptions: getTagKeySegmentOptions,
      onChange: v => {
        const {
          value
        } = v;

        if (value === undefined) {
          onRemove();
        } else {
          onChange(Object.assign({}, tag, {
            key: value !== null && value !== void 0 ? value : ''
          }));
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      value: operator,
      loadOptions: loadOperatorOptions,
      onChange: op => {
        onChange(Object.assign({}, tag, {
          operator: op.value
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      allowCustomValue: true,
      value: tag.value,
      loadOptions: getTagValueSegmentOptions,
      onChange: v => {
        var _v$value;

        const value = (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : '';
        onChange(Object.assign({}, tag, {
          value,
          operator: (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.adjustOperatorIfNeeded)(operator, value)
        }));
      }
    })]
  });
};

const TagsSection = ({
  tags,
  onChange,
  getTagKeyOptions,
  getTagValueOptions
}) => {
  const onTagChange = (newTag, index) => {
    const newTags = tags.map((tag, i) => {
      return index === i ? newTag : tag;
    });
    onChange(newTags);
  };

  const onTagRemove = index => {
    const newTags = tags.filter((t, i) => i !== index);
    onChange(newTags);
  };

  const getTagKeySegmentOptions = () => {
    return getTagKeyOptions().then(tags => tags.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue));
  };

  const addNewTag = (tagKey, isFirst) => {
    const minimalTag = {
      key: tagKey,
      value: 'select tag value'
    };
    const newTag = {
      key: minimalTag.key,
      value: minimalTag.value,
      operator: (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getOperator)(minimalTag),
      condition: (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getCondition)(minimalTag, isFirst)
    };
    onChange([...tags, newTag]);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [tags.map((t, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Tag, {
      tag: t,
      isFirst: i === 0,
      onChange: newT => {
        onTagChange(newT, i);
      },
      onRemove: () => {
        onTagRemove(i);
      },
      getTagKeyOptions: getTagKeyOptions,
      getTagValueOptions: getTagValueOptions
    }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AddButton__WEBPACK_IMPORTED_MODULE_4__.AddButton, {
      allowCustomValue: true,
      loadOptions: getTagKeySegmentOptions,
      onAdd: v => {
        addNewTag(v, tags.length === 0);
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/partListUtils.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewGroupByPartOptions": () => (/* binding */ getNewGroupByPartOptions),
/* harmony export */   "getNewSelectPartOptions": () => (/* binding */ getNewSelectPartOptions),
/* harmony export */   "makePartList": () => (/* binding */ makePartList)
/* harmony export */ });
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");




function getNewSelectPartOptions() {
  const categories = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].getCategories();
  const options = [];
  const keys = Object.keys(categories);
  keys.forEach(key => {
    const children = categories[key].map(x => (0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue)(x.type));
    options.push({
      label: key,
      options: children
    });
  });
  return options;
}
async function getNewGroupByPartOptions(query, getTagKeys) {
  const tagKeys = await getTagKeys();
  const queryCopy = Object.assign({}, query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_0__["default"](queryCopy);
  const options = [];

  if (!model.hasFill()) {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue)('fill(null)'));
  }

  if (!model.hasGroupByTime()) {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue)('time($interval)'));
  }

  tagKeys.forEach(key => {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue)(`tag(${key})`));
  });
  return options;
}

function getPartParams(part, dynamicParamOptions) {
  var _part$params;

  // NOTE: the way the system is constructed,
  // there always can only be one possible dynamic-lookup
  // field. in case of select it is the field,
  // in case of group-by it is the tag
  const def = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create(part).def; // we switch the numbers to strings, it will work that way too,
  // and it makes the code simpler

  const paramValues = ((_part$params = part.params) !== null && _part$params !== void 0 ? _part$params : []).map(p => p.toString());

  if (paramValues.length !== def.params.length) {
    throw new Error('Invalid query-segment');
  }

  return paramValues.map((val, index) => {
    const defParam = def.params[index];

    if (defParam.dynamicLookup) {
      return {
        value: val,
        options: (0,_unwrap__WEBPACK_IMPORTED_MODULE_1__.unwrap)(dynamicParamOptions.get(`${def.type}_${index}`))
      };
    }

    if (defParam.options != null) {
      return {
        value: val,
        options: () => Promise.resolve(defParam.options)
      };
    }

    return {
      value: val,
      options: null
    };
  });
}

function makePartList(queryParts, dynamicParamOptions) {
  return queryParts.map(qp => {
    return {
      name: qp.type,
      params: getPartParams(qp, dynamicParamOptions)
    };
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paddingRightClass": () => (/* binding */ paddingRightClass)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const paddingRightClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  paddingRight: '4px'
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/tagUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustOperatorIfNeeded": () => (/* binding */ adjustOperatorIfNeeded),
/* harmony export */   "getCondition": () => (/* binding */ getCondition),
/* harmony export */   "getOperator": () => (/* binding */ getOperator)
/* harmony export */ });
function isRegex(text) {
  return /^\/.*\/$/.test(text);
} // FIXME: sync these to the query-string-generation-code
// probably it's in influx_query_model.ts


function getOperator(tag) {
  var _tag$operator;

  return (_tag$operator = tag.operator) !== null && _tag$operator !== void 0 ? _tag$operator : isRegex(tag.value) ? '=~' : '=';
} // FIXME: sync these to the query-string-generation-code
// probably it's in influx_query_model.ts

function getCondition(tag, isFirst) {
  var _tag$condition;

  return isFirst ? undefined : (_tag$condition = tag.condition) !== null && _tag$condition !== void 0 ? _tag$condition : 'AND';
}
function adjustOperatorIfNeeded(currentOperator, newTagValue) {
  const isCurrentOperatorRegex = currentOperator === '=~' || currentOperator === '!~';
  const isNewTagValueRegex = isRegex(newTagValue);

  if (isNewTagValueRegex) {
    return isCurrentOperatorRegex ? currentOperator : '=~';
  } else {
    return isCurrentOperatorRegex ? '=' : currentOperator;
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toSelectableValue": () => (/* binding */ toSelectableValue)
/* harmony export */ });
function toSelectableValue(t) {
  return {
    label: t,
    value: t
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unwrap": () => (/* binding */ unwrap)
/* harmony export */ });
function unwrap(value) {
  if (value == null) {
    throw new Error('value must not be nullish');
  }

  return value;
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_RESULT_FORMAT": () => (/* binding */ DEFAULT_RESULT_FORMAT),
/* harmony export */   "RESULT_FORMATS": () => (/* binding */ RESULT_FORMATS)
/* harmony export */ });
const RESULT_FORMATS = [{
  label: 'Time series',
  value: 'time_series'
}, {
  label: 'Table',
  value: 'table'
}, {
  label: 'Logs',
  value: 'logs'
}];
const DEFAULT_RESULT_FORMAT = 'time_series';

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/useShadowedState.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useShadowedState": () => (/* binding */ useShadowedState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");


function useShadowedState(outsideVal) {
  const [currentVal, setCurrentVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(outsideVal);
  const prevOutsideVal = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(outsideVal);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isOutsideValChanged = prevOutsideVal !== outsideVal; // if the value changes from the outside, we accept it into the state
    // (we only set it if it is different from the current value)

    if (isOutsideValChanged && currentVal !== outsideVal) {
      setCurrentVal(outsideVal);
    }
  }, [outsideVal, currentVal, prevOutsideVal]);
  return [currentVal, setCurrentVal];
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _influx_series__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_series.ts");
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/response_parser.ts");
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_builder.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _components_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/config.ts");
const _excluded = ["__interval", "__interval_ms"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // we detect the field type based on the value-array

function getFieldType(values) {
  // the values-array may contain a lot of nulls.
  // we need the first not-null item
  const firstNotNull = values.find(v => v !== null);

  if (firstNotNull === undefined) {
    // we could not find any not-null values
    return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number;
  }

  const valueType = typeof firstNotNull;

  switch (valueType) {
    case 'string':
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string;

    case 'boolean':
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean;

    case 'number':
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number;

    default:
      // this should never happen, influxql values
      // can only be numbers, strings and booleans.
      throw new Error(`InfluxQL: invalid value type ${valueType}`);
  }
} // this conversion function is specialized to work with the timeseries
// data returned by InfluxDatasource.getTimeSeries()


function timeSeriesToDataFrame(timeSeries) {
  const times = [];
  const values = []; // the data we process here is not correctly typed.
  // the typescript types say every data-point is number|null,
  // but in fact it can be string or boolean too.

  const points = timeSeries.datapoints;

  for (const point of points) {
    values.push(point[0]);
    times.push(point[1]);
  }

  const timeField = {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_TIME_FIELD_NAME,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ArrayVector(times)
  };
  const valueField = {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_VALUE_FIELD_NAME,
    type: getFieldType(values),
    config: {
      displayNameFromDS: timeSeries.title
    },
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ArrayVector(values),
    labels: timeSeries.tags
  };
  const fields = [timeField, valueField];
  return {
    name: timeSeries.target,
    refId: timeSeries.refId,
    meta: timeSeries.meta,
    fields,
    length: values.length
  };
}

class InfluxDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_8__.getTemplateSrv)()) {
    var _instanceSettings$url, _instanceSettings$use, _instanceSettings$pas;

    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "urls", void 0);

    _defineProperty(this, "username", void 0);

    _defineProperty(this, "password", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "database", void 0);

    _defineProperty(this, "basicAuth", void 0);

    _defineProperty(this, "withCredentials", void 0);

    _defineProperty(this, "access", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "httpMode", void 0);

    _defineProperty(this, "isFlux", void 0);

    this.templateSrv = templateSrv;
    this.type = 'influxdb';
    this.urls = ((_instanceSettings$url = instanceSettings.url) !== null && _instanceSettings$url !== void 0 ? _instanceSettings$url : '').split(',').map(url => {
      return url.trim();
    });
    this.username = (_instanceSettings$use = instanceSettings.username) !== null && _instanceSettings$use !== void 0 ? _instanceSettings$use : '';
    this.password = (_instanceSettings$pas = instanceSettings.password) !== null && _instanceSettings$pas !== void 0 ? _instanceSettings$pas : '';
    this.name = instanceSettings.name;
    this.database = instanceSettings.database;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.access = instanceSettings.access;
    const settingsData = instanceSettings.jsonData || {};
    this.interval = settingsData.timeInterval;
    this.httpMode = settingsData.httpMode || 'GET';
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.isFlux = settingsData.version === _types__WEBPACK_IMPORTED_MODULE_7__.InfluxVersion.Flux;

    if (this.isFlux) {
      // When flux, use an annotation processor rather than the `annotationQuery` lifecycle
      this.annotations = {
        QueryEditor: _components_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_9__.FluxQueryEditor
      };
    }
  }

  query(request) {
    // for not-flux queries we call `this.classicQuery`, and that
    // handles the is-hidden situation.
    // for the flux-case, we do the filtering here
    const filteredRequest = Object.assign({}, request, {
      targets: request.targets.filter(t => t.hide !== true)
    });

    if (this.isFlux) {
      return super.query(filteredRequest);
    }

    if (this.isMigrationToggleOnAndIsAccessProxy()) {
      return super.query(filteredRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(res => {
        if (res.error) {
          throw {
            message: 'InfluxDB Error: ' + res.error.message,
            res
          };
        }

        const seriesList = [];
        const groupedFrames = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(res.data, x => x.refId);

        if (Object.keys(groupedFrames).length > 0) {
          filteredRequest.targets.forEach(target => {
            var _groupedFrames$target;

            const filteredFrames = (_groupedFrames$target = groupedFrames[target.refId]) !== null && _groupedFrames$target !== void 0 ? _groupedFrames$target : [];

            switch (target.resultFormat) {
              case 'logs':
              case 'table':
                seriesList.push(this.responseParser.getTable(filteredFrames, target, {
                  preferredVisualisationType: target.resultFormat
                }));
                break;

              default:
                {
                  for (let i = 0; i < filteredFrames.length; i++) {
                    seriesList.push(filteredFrames[i]);
                  }

                  break;
                }
            }
          });
        }

        return {
          data: seriesList
        };
      }));
    } // Fallback to classic query support


    return this.classicQuery(request);
  }

  getQueryDisplayText(query) {
    if (this.isFlux) {
      return query.query;
    }

    return new _influx_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](query).render(false);
  }
  /**
   * Returns false if the query should be skipped
   */


  filterQuery(query) {
    if (this.isFlux) {
      return !!query.query;
    }

    return true;
  }

  applyTemplateVariables(query, scopedVars) {
    // We want to interpolate these variables on backend
    const rest = _objectWithoutPropertiesLoose(scopedVars, _excluded);

    if (this.isFlux) {
      var _query$query;

      return Object.assign({}, query, {
        query: this.templateSrv.replace((_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '', rest) // The raw query text

      });
    }

    if (app_core_config__WEBPACK_IMPORTED_MODULE_11__["default"].featureToggles.influxdbBackendMigration && this.access === 'proxy') {
      query = this.applyVariables(query, scopedVars, rest);
    }

    return query;
  }
  /**
   * The unchanged pre 7.1 query implementation
   */


  classicQuery(options) {
    let timeFilter = this.getTimeFilter(options);
    const scopedVars = options.scopedVars;
    const targets = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(options.targets);
    const queryTargets = [];
    let i, y;

    let allQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(targets, target => {
      if (target.hide) {
        return '';
      }

      queryTargets.push(target); // backward compatibility

      scopedVars.interval = scopedVars.__interval;
      return new _influx_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](target, this.templateSrv, scopedVars).render(true);
    }).reduce((acc, current) => {
      if (current !== '') {
        acc += ';' + current;
      }

      return acc;
    });

    if (allQueries === '') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
        data: []
      });
    } // add global adhoc filters to timeFilter


    const adhocFilters = this.templateSrv.getAdhocFilters(this.name);

    if (adhocFilters.length > 0) {
      const tmpQuery = new _influx_query_model__WEBPACK_IMPORTED_MODULE_4__["default"]({
        refId: 'A'
      }, this.templateSrv, scopedVars);
      timeFilter += ' AND ' + tmpQuery.renderAdhocFilters(adhocFilters);
    } // replace grafana variables


    scopedVars.timeFilter = {
      value: timeFilter
    }; // replace templated variables

    allQueries = this.templateSrv.replace(allQueries, scopedVars);
    return this._seriesQuery(allQueries, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => {
      if (!data || !data.results) {
        return {
          data: []
        };
      }

      const seriesList = [];

      for (i = 0; i < data.results.length; i++) {
        const result = data.results[i];

        if (!result || !result.series) {
          continue;
        }

        const target = queryTargets[i];
        let alias = target.alias;

        if (alias) {
          alias = this.templateSrv.replace(target.alias, options.scopedVars);
        }

        const meta = {
          executedQueryString: data.executedQueryString
        };
        const influxSeries = new _influx_series__WEBPACK_IMPORTED_MODULE_3__["default"]({
          refId: target.refId,
          series: data.results[i].series,
          alias: alias,
          meta
        });

        switch (target.resultFormat) {
          case 'logs':
            meta.preferredVisualisationType = 'logs';

          case 'table':
            {
              seriesList.push(influxSeries.getTable());
              break;
            }

          default:
            {
              const timeSeries = influxSeries.getTimeSeries();

              for (y = 0; y < timeSeries.length; y++) {
                seriesList.push(timeSeriesToDataFrame(timeSeries[y]));
              }

              break;
            }
        }
      }

      return {
        data: seriesList
      };
    }));
  }

  async annotationQuery(options) {
    if (this.isFlux) {
      return Promise.reject({
        message: 'Flux requires the standard annotation query'
      });
    } // InfluxQL puts a query string on the annotation


    if (!options.annotation.query) {
      return Promise.reject({
        message: 'Query missing in annotation definition'
      });
    }

    if (app_core_config__WEBPACK_IMPORTED_MODULE_11__["default"].featureToggles.influxdbBackendMigration && this.access === 'proxy') {
      var _options$annotation$q;

      // We want to send our query to the backend as a raw query
      const target = {
        refId: 'metricFindQuery',
        datasource: this.getRef(),
        query: this.templateSrv.replace((_options$annotation$q = options.annotation.query) !== null && _options$annotation$q !== void 0 ? _options$annotation$q : ''),
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
          from: options.range.from.valueOf().toString(),
          to: options.range.to.valueOf().toString(),
          queries: [target]
        },
        requestId: options.annotation.name
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(async res => await this.responseParser.transformAnnotationResponse(options, res, target))));
    }

    const timeFilter = this.getTimeFilter({
      rangeRaw: options.rangeRaw,
      timezone: options.dashboard.timezone
    });
    let query = options.annotation.query.replace('$timeFilter', timeFilter);
    query = this.templateSrv.replace(query, undefined, 'regex');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this._seriesQuery(query, options)).then(data => {
      if (!data || !data.results || !data.results[0]) {
        throw {
          message: 'No results in response from InfluxDB'
        };
      }

      return new _influx_series__WEBPACK_IMPORTED_MODULE_3__["default"]({
        series: data.results[0].series,
        annotation: options.annotation
      }).getAnnotations();
    });
  }

  targetContainsTemplate(target) {
    // for flux-mode we just take target.query,
    // for influxql-mode we use InfluxQueryModel to create the text-representation
    const queryText = this.isFlux ? target.query : (0,_queryUtils__WEBPACK_IMPORTED_MODULE_10__.buildRawQuery)(target);
    return this.templateSrv.containsTemplate(queryText);
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries || queries.length === 0) {
      return [];
    }

    return queries.map(query => {
      if (this.isFlux) {
        var _query$query2;

        return Object.assign({}, query, {
          datasource: this.getRef(),
          query: this.templateSrv.replace((_query$query2 = query.query) !== null && _query$query2 !== void 0 ? _query$query2 : '', scopedVars) // The raw query text

        });
      }

      return Object.assign({}, query, {
        datasource: this.getRef()
      }, this.applyVariables(query, scopedVars, scopedVars));
    });
  }

  applyVariables(query, scopedVars, rest) {
    var _query$query3, _query$alias, _query$limit$toString, _query$limit, _query$measurement, _query$policy, _query$slimit$toStrin, _query$slimit, _query$tz;

    const expandedQuery = Object.assign({}, query);

    if (query.groupBy) {
      expandedQuery.groupBy = query.groupBy.map(groupBy => {
        var _groupBy$params;

        return Object.assign({}, groupBy, {
          params: (_groupBy$params = groupBy.params) === null || _groupBy$params === void 0 ? void 0 : _groupBy$params.map(param => {
            return this.templateSrv.replace(param.toString(), undefined, 'regex');
          })
        });
      });
    }

    if (query.select) {
      expandedQuery.select = query.select.map(selects => {
        return selects.map(select => {
          var _select$params;

          return Object.assign({}, select, {
            params: (_select$params = select.params) === null || _select$params === void 0 ? void 0 : _select$params.map(param => {
              return this.templateSrv.replace(param.toString(), undefined, 'regex');
            })
          });
        });
      });
    }

    if (query.tags) {
      expandedQuery.tags = query.tags.map(tag => {
        return Object.assign({}, tag, {
          value: this.templateSrv.replace(tag.value, undefined, 'regex')
        });
      });
    }

    return Object.assign({}, expandedQuery, {
      query: this.templateSrv.replace((_query$query3 = query.query) !== null && _query$query3 !== void 0 ? _query$query3 : '', rest),
      // The raw query text
      alias: this.templateSrv.replace((_query$alias = query.alias) !== null && _query$alias !== void 0 ? _query$alias : '', scopedVars),
      limit: this.templateSrv.replace((_query$limit$toString = (_query$limit = query.limit) === null || _query$limit === void 0 ? void 0 : _query$limit.toString()) !== null && _query$limit$toString !== void 0 ? _query$limit$toString : '', scopedVars, 'regex'),
      measurement: this.templateSrv.replace((_query$measurement = query.measurement) !== null && _query$measurement !== void 0 ? _query$measurement : '', scopedVars, 'regex'),
      policy: this.templateSrv.replace((_query$policy = query.policy) !== null && _query$policy !== void 0 ? _query$policy : '', scopedVars, 'regex'),
      slimit: this.templateSrv.replace((_query$slimit$toStrin = (_query$slimit = query.slimit) === null || _query$slimit === void 0 ? void 0 : _query$slimit.toString()) !== null && _query$slimit$toStrin !== void 0 ? _query$slimit$toStrin : '', scopedVars, 'regex'),
      tz: this.templateSrv.replace((_query$tz = query.tz) !== null && _query$tz !== void 0 ? _query$tz : '', scopedVars)
    });
  }

  async metricFindQuery(query, options) {
    if (this.isFlux || this.isMigrationToggleOnAndIsAccessProxy()) {
      const target = {
        refId: 'metricFindQuery',
        query,
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(super.query(Object.assign({}, options, {
        // includes 'range'
        targets: [target]
      }))).then(rsp => {
        var _rsp$data;

        if ((_rsp$data = rsp.data) !== null && _rsp$data !== void 0 && _rsp$data.length) {
          return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.frameToMetricFindValue)(rsp.data[0]);
        }

        return [];
      });
    }

    const interpolated = this.templateSrv.replace(query, undefined, 'regex');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this._seriesQuery(interpolated, options)).then(resp => {
      return this.responseParser.parse(query, resp);
    });
  }

  getTagKeys(options = {}) {
    const queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_6__.InfluxQueryBuilder({
      measurement: options.measurement || '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('TAG_KEYS');
    return this.metricFindQuery(query, options);
  }

  getTagValues(options = {}) {
    const queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_6__.InfluxQueryBuilder({
      measurement: options.measurement || '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('TAG_VALUES', options.key);
    return this.metricFindQuery(query, options);
  }

  _seriesQuery(query, options) {
    if (!query) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
        results: []
      });
    }

    if (options && options.range) {
      const timeFilter = this.getTimeFilter({
        rangeRaw: options.range,
        timezone: options.timezone
      });
      query = query.replace('$timeFilter', timeFilter);
    }

    return this._influxRequest(this.httpMode, '/query', {
      q: query,
      epoch: 'ms'
    }, options);
  }

  serializeParams(params) {
    if (!params) {
      return '';
    }

    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(params, (memo, value, key) => {
      if (value === null || value === undefined) {
        return memo;
      }

      memo.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      return memo;
    }, []).join('&');
  }

  testDatasource() {
    if (this.isFlux) {
      // TODO: eventually use the real /health endpoint
      const request = {
        targets: [{
          refId: 'test',
          query: 'buckets()'
        }],
        requestId: `${this.id}-health-${(0,uuid__WEBPACK_IMPORTED_MODULE_15__["default"])()}`,
        dashboardId: 0,
        panelId: 0,
        interval: '1m',
        intervalMs: 60000,
        maxDataPoints: 423,
        range: {
          from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTime)(1000),
          to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTime)(2000)
        }
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(super.query(request)).then(res => {
        if (!res || !res.data || res.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done) {
          console.error('InfluxDB Error', res);
          return {
            status: 'error',
            message: 'Error reading InfluxDB'
          };
        }

        const first = res.data[0];

        if (first && first.length) {
          return {
            status: 'success',
            message: `${first.length} buckets found`
          };
        }

        console.error('InfluxDB Error', res);
        return {
          status: 'error',
          message: 'Error reading buckets'
        };
      }).catch(err => {
        console.error('InfluxDB Error', err);
        return {
          status: 'error',
          message: err.message
        };
      });
    }

    if (this.isMigrationToggleOnAndIsAccessProxy()) {
      const target = {
        refId: 'metricFindQuery',
        query: 'SHOW TAG KEYS',
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(super.query({
        targets: [target]
      })).then(res => {
        var _res$data;

        if (!res || !res.data || res.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done) {
          return {
            status: 'error',
            message: 'Error reading InfluxDB.'
          };
        }

        if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.length) {
          return {
            status: 'success',
            message: 'Data source is working.'
          };
        }

        return {
          status: 'error',
          message: 'Successfully connected to InfluxDB, but no tags found.'
        };
      }).catch(err => {
        return {
          status: 'error',
          message: err.message
        };
      });
    }

    const queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_6__.InfluxQueryBuilder({
      measurement: '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('RETENTION POLICIES');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this._seriesQuery(query)).then(res => {
      const error = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(res, 'results[0].error');

      if (error) {
        return {
          status: 'error',
          message: error
        };
      }

      return {
        status: 'success',
        message: 'Data source is working'
      };
    }).catch(err => {
      return {
        status: 'error',
        message: err.message
      };
    });
  }

  _influxRequest(method, url, data, options) {
    const currentUrl = this.urls.shift();
    this.urls.push(currentUrl);
    const params = {};

    if (this.username) {
      params.u = this.username;
      params.p = this.password;
    }

    if (options && options.database) {
      params.db = options.database;
    } else if (this.database) {
      params.db = this.database;
    }

    const {
      q
    } = data;

    if (method === 'POST' && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.has)(data, 'q')) {
      // verb is POST and 'q' param is defined
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(params, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(data, ['q']));
      data = this.serializeParams((0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(data, ['q']));
    } else if (method === 'GET' || method === 'POST') {
      // verb is GET, or POST without 'q' param
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(params, data);
      data = null;
    }

    const req = {
      method: method,
      url: currentUrl + url,
      params: params,
      data: data,
      precision: 'ms',
      inspect: {
        type: 'influxdb'
      },
      paramSerializer: this.serializeParams
    };
    req.headers = req.headers || {};

    if (this.basicAuth || this.withCredentials) {
      req.withCredentials = true;
    }

    if (this.basicAuth) {
      req.headers.Authorization = this.basicAuth;
    }

    if (method === 'POST') {
      req.headers['Content-type'] = 'application/x-www-form-urlencoded';
    }

    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(result => {
      const {
        data
      } = result;

      if (data) {
        data.executedQueryString = q;

        if (data.results) {
          const errors = result.data.results.filter(elem => elem.error);

          if (errors.length > 0) {
            throw {
              message: 'InfluxDB Error: ' + errors[0].error,
              data
            };
          }
        }
      }

      return data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(err => {
      if (err.cancelled) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(err);
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.throwError)(this.handleErrors(err));
    }));
  }

  handleErrors(err) {
    const error = {
      message: err && err.status || err && err.message || 'Unknown error during query transaction. Please check JS console logs.'
    };

    if (Number.isInteger(err.status) && err.status !== 0 || err.status >= 300) {
      if (err.data && err.data.error) {
        error.message = 'InfluxDB Error: ' + err.data.error;
        error.data = err.data; // @ts-ignore

        error.config = err.config;
      } else {
        error.message = 'Network Error: ' + err.statusText + '(' + err.status + ')';
        error.data = err.data; // @ts-ignore

        error.config = err.config;
      }
    }

    return error;
  }

  getTimeFilter(options) {
    const from = this.getInfluxTime(options.rangeRaw.from, false, options.timezone);
    const until = this.getInfluxTime(options.rangeRaw.to, true, options.timezone);
    return 'time >= ' + from + ' and time <= ' + until;
  }

  getInfluxTime(date, roundUp, timezone) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(date)) {
      if (date === 'now') {
        return 'now()';
      }

      const parts = /^now-(\d+)([dhms])$/.exec(date);

      if (parts) {
        const amount = parseInt(parts[1], 10);
        const unit = parts[2];
        return 'now() - ' + amount + unit;
      }

      date = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateMath.parse(date, roundUp, timezone);
    }

    return date.valueOf() + 'ms';
  }

  isMigrationToggleOnAndIsAccessProxy() {
    return app_core_config__WEBPACK_IMPORTED_MODULE_11__["default"].featureToggles.influxdbBackendMigration && this.access === 'proxy';
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influxQLMetadataQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllMeasurementsForTags": () => (/* binding */ getAllMeasurementsForTags),
/* harmony export */   "getAllPolicies": () => (/* binding */ getAllPolicies),
/* harmony export */   "getFieldKeysForMeasurement": () => (/* binding */ getFieldKeysForMeasurement),
/* harmony export */   "getTagKeysForMeasurementAndTags": () => (/* binding */ getTagKeysForMeasurementAndTags),
/* harmony export */   "getTagValues": () => (/* binding */ getTagValues)
/* harmony export */ });
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_builder.ts");


const runExploreQuery = (type, withKey, withMeasurementFilter, target, datasource) => {
  const builder = new _query_builder__WEBPACK_IMPORTED_MODULE_0__.InfluxQueryBuilder(target, datasource.database);
  const q = builder.buildExploreQuery(type, withKey, withMeasurementFilter);
  return datasource.metricFindQuery(q);
};

async function getAllPolicies(datasource) {
  const target = {
    tags: [],
    measurement: undefined,
    policy: undefined
  };
  const data = await runExploreQuery('RETENTION POLICIES', undefined, undefined, target, datasource);
  return data.map(item => item.text);
}
async function getAllMeasurementsForTags(measurementFilter, tags, datasource) {
  const target = {
    tags,
    measurement: undefined,
    policy: undefined
  };
  const data = await runExploreQuery('MEASUREMENTS', undefined, measurementFilter, target, datasource);
  return data.map(item => item.text);
}
async function getTagKeysForMeasurementAndTags(measurement, policy, tags, datasource) {
  const target = {
    tags,
    measurement,
    policy
  };
  const data = await runExploreQuery('TAG_KEYS', undefined, undefined, target, datasource);
  return data.map(item => item.text);
}
async function getTagValues(tagKey, measurement, policy, tags, datasource) {
  const target = {
    tags,
    measurement,
    policy
  };
  const data = await runExploreQuery('TAG_VALUES', tagKey, undefined, target, datasource);
  return data.map(item => item.text);
}
async function getFieldKeysForMeasurement(measurement, policy, datasource) {
  const target = {
    tags: [],
    measurement,
    policy
  };
  const data = await runExploreQuery('FIELDS', undefined, undefined, target, datasource);
  return data.map(item => item.text);
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/utils/kbn.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class InfluxQueryModel {
  /** @ngInject */
  constructor(target, templateSrv, scopedVars) {
    _defineProperty(this, "target", void 0);

    _defineProperty(this, "selectModels", []);

    _defineProperty(this, "queryBuilder", void 0);

    _defineProperty(this, "groupByParts", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "scopedVars", void 0);

    _defineProperty(this, "refId", void 0);

    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    target.policy = target.policy || 'default';
    target.resultFormat = target.resultFormat || 'time_series';
    target.orderByTime = target.orderByTime || 'ASC';
    target.tags = target.tags || [];
    target.groupBy = target.groupBy || [{
      type: 'time',
      params: ['$__interval']
    }, {
      type: 'fill',
      params: ['null']
    }];
    target.select = target.select || [[{
      type: 'field',
      params: ['value']
    }, {
      type: 'mean',
      params: []
    }]];
    this.updateProjection();
  }

  updateProjection() {
    this.selectModels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, parts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create);
    });
    this.groupByParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.groupBy, _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create);
  }

  updatePersistedParts() {
    this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectModels, selectParts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
        return {
          type: part.def.type,
          params: part.params
        };
      });
    });
  }

  hasGroupByTime() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.groupBy, g => g.type === 'time');
  }

  hasFill() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.groupBy, g => g.type === 'fill');
  }

  addGroupBy(value) {
    let stringParts = value.match(/^(\w+)\((.*)\)$/);

    if (!stringParts || !this.target.groupBy) {
      return;
    }

    const typePart = stringParts[1];
    const arg = stringParts[2];
    const partModel = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create({
      type: typePart,
      params: [arg]
    });
    const partCount = this.target.groupBy.length;

    if (partCount === 0) {
      this.target.groupBy.push(partModel.part);
    } else if (typePart === 'time') {
      this.target.groupBy.splice(0, 0, partModel.part);
    } else if (typePart === 'tag') {
      if (this.target.groupBy[partCount - 1].type === 'fill') {
        this.target.groupBy.splice(partCount - 1, 0, partModel.part);
      } else {
        this.target.groupBy.push(partModel.part);
      }
    } else {
      this.target.groupBy.push(partModel.part);
    }

    this.updateProjection();
  }

  removeGroupByPart(part, index) {
    const categories = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].getCategories();

    if (part.def.type === 'time') {
      // remove fill
      this.target.groupBy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(this.target.groupBy, g => g.type !== 'fill'); // remove aggregations

      this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, s => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(s, part => {
          const partModel = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create(part);

          if (partModel.def.category === categories.Aggregations) {
            return false;
          }

          if (partModel.def.category === categories.Selectors) {
            return false;
          }

          return true;
        });
      });
    }

    this.target.groupBy.splice(index, 1);
    this.updateProjection();
  }

  removeSelect(index) {
    this.target.select.splice(index, 1);
    this.updateProjection();
  }

  removeSelectPart(selectParts, part) {
    // if we remove the field remove the whole statement
    if (part.def.type === 'field') {
      if (this.selectModels.length > 1) {
        const modelsIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.selectModels, selectParts);
        this.selectModels.splice(modelsIndex, 1);
      }
    } else {
      const partIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(selectParts, part);
      selectParts.splice(partIndex, 1);
    }

    this.updatePersistedParts();
  }

  addSelectPart(selectParts, type) {
    const partModel = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create({
      type: type
    });
    partModel.def.addStrategy(selectParts, partModel, this);
    this.updatePersistedParts();
  }

  renderTagCondition(tag, index, interpolate) {
    // FIXME: merge this function with query_builder/renderTagCondition
    let str = '';
    let operator = tag.operator;
    let value = tag.value;

    if (index > 0) {
      str = (tag.condition || 'AND') + ' ';
    }

    if (!operator) {
      if (/^\/.*\/$/.test(value)) {
        operator = '=~';
      } else {
        operator = '=';
      }
    } // quote value unless regex


    if (operator !== '=~' && operator !== '!~') {
      if (interpolate) {
        value = this.templateSrv.replace(value, this.scopedVars);
      }

      if (operator !== '>' && operator !== '<') {
        value = "'" + value.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
      }
    } else if (interpolate) {
      value = this.templateSrv.replace(value, this.scopedVars, 'regex');
    }

    return str + '"' + tag.key + '" ' + operator + ' ' + value;
  }

  getMeasurementAndPolicy(interpolate) {
    let policy = this.target.policy;
    let measurement = this.target.measurement || 'measurement';

    if (!measurement.match('^/.*/$')) {
      measurement = '"' + measurement + '"';
    } else if (interpolate) {
      measurement = this.templateSrv.replace(measurement, this.scopedVars, 'regex');
    }

    if (policy !== 'default') {
      policy = '"' + this.target.policy + '".';
    } else {
      policy = '';
    }

    return policy + measurement;
  }

  interpolateQueryStr(value, variable, defaultFormatFn) {
    // if no multi or include all do not regexEscape
    if (!variable.multi && !variable.includeAll) {
      return value;
    }

    if (typeof value === 'string') {
      return app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__["default"].regexEscape(value);
    }

    const escapedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__["default"].regexEscape);
    return '(' + escapedValues.join('|') + ')';
  }

  render(interpolate) {
    const target = this.target;

    if (target.rawQuery) {
      if (interpolate) {
        return this.templateSrv.replace(target.query, this.scopedVars, this.interpolateQueryStr);
      } else {
        return target.query;
      }
    }

    let query = 'SELECT ';
    let i, y;

    for (i = 0; i < this.selectModels.length; i++) {
      const parts = this.selectModels[i];
      let selectText = '';

      for (y = 0; y < parts.length; y++) {
        const part = parts[y];
        selectText = part.render(selectText);
      }

      if (i > 0) {
        query += ', ';
      }

      query += selectText;
    }

    query += ' FROM ' + this.getMeasurementAndPolicy(interpolate) + ' WHERE ';
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(target.tags, (tag, index) => {
      return this.renderTagCondition(tag, index, interpolate);
    });

    if (conditions.length > 0) {
      query += '(' + conditions.join(' ') + ') AND ';
    }

    query += '$timeFilter';
    let groupBySection = '';

    for (i = 0; i < this.groupByParts.length; i++) {
      const part = this.groupByParts[i];

      if (i > 0) {
        // for some reason fill has no separator
        groupBySection += part.def.type === 'fill' ? ' ' : ', ';
      }

      groupBySection += part.render('');
    }

    if (groupBySection.length) {
      query += ' GROUP BY ' + groupBySection;
    }

    if (target.fill) {
      query += ' fill(' + target.fill + ')';
    }

    if (target.orderByTime === 'DESC') {
      query += ' ORDER BY time DESC';
    }

    if (target.limit) {
      query += ' LIMIT ' + target.limit;
    }

    if (target.slimit) {
      query += ' SLIMIT ' + target.slimit;
    }

    if (target.tz) {
      query += " tz('" + target.tz + "')";
    }

    return query;
  }

  renderAdhocFilters(filters) {
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(filters, (tag, index) => {
      return this.renderTagCondition(tag, index, true);
    });
    return conditions.join(' ');
  }

}
InfluxQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_series.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxSeries)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/table_model.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class InfluxSeries {
  constructor(options) {
    _defineProperty(this, "refId", void 0);

    _defineProperty(this, "series", void 0);

    _defineProperty(this, "alias", void 0);

    _defineProperty(this, "annotation", void 0);

    _defineProperty(this, "meta", void 0);

    this.series = options.series;
    this.alias = options.alias;
    this.annotation = options.annotation;
    this.meta = options.meta;
    this.refId = options.refId;
  }

  getTimeSeries() {
    const output = [];
    let i, j;

    if (this.series.length === 0) {
      return output;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, series => {
      const columns = series.columns.length;
      const tags = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(series.tags, (value, key) => {
        return key + ': ' + value;
      });

      for (j = 1; j < columns; j++) {
        let seriesName = series.name;
        const columnName = series.columns[j];

        if (columnName !== 'value') {
          seriesName = seriesName + '.' + columnName;
        }

        if (this.alias) {
          seriesName = this._getSeriesName(series, j);
        } else if (series.tags) {
          seriesName = seriesName + ' {' + tags.join(', ') + '}';
        }

        const datapoints = [];

        if (series.values) {
          for (i = 0; i < series.values.length; i++) {
            datapoints[i] = [series.values[i][j], series.values[i][0]];
          }
        }

        output.push({
          title: seriesName,
          target: seriesName,
          datapoints: datapoints,
          tags: series.tags,
          meta: this.meta,
          refId: this.refId
        });
      }
    });
    return output;
  }

  _getSeriesName(series, index) {
    const regex = /\$(\w+)|\[\[([\s\S]+?)\]\]/g;
    const segments = series.name.split('.');
    return this.alias.replace(regex, (match, g1, g2) => {
      const group = g1 || g2;
      const segIndex = parseInt(group, 10);

      if (group === 'm' || group === 'measurement') {
        return series.name;
      }

      if (group === 'col') {
        return series.columns[index];
      }

      if (!isNaN(segIndex)) {
        var _segments$segIndex;

        return (_segments$segIndex = segments[segIndex]) !== null && _segments$segIndex !== void 0 ? _segments$segIndex : match;
      }

      if (group.indexOf('tag_') !== 0) {
        return match;
      }

      const tag = group.replace('tag_', '');

      if (!series.tags) {
        return match;
      }

      return series.tags[tag];
    });
  }

  getAnnotations() {
    const list = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, series => {
      let titleCol = null;
      let timeCol = null;
      let timeEndCol = null;
      const tagsCol = [];
      let textCol = null;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(series.columns, (column, index) => {
        if (column === 'time') {
          timeCol = index;
          return;
        }

        if (column === 'sequence_number') {
          return;
        }

        if (column === this.annotation.titleColumn) {
          titleCol = index;
          return;
        }

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)((this.annotation.tagsColumn || '').replace(' ', '').split(','), column)) {
          tagsCol.push(index);
          return;
        }

        if (column === this.annotation.textColumn) {
          textCol = index;
          return;
        }

        if (column === this.annotation.timeEndColumn) {
          timeEndCol = index;
          return;
        } // legacy case


        if (!titleCol && textCol !== index) {
          titleCol = index;
        }
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(series.values, value => {
        const data = {
          annotation: this.annotation,
          time: +new Date(value[timeCol]),
          title: value[titleCol],
          timeEnd: value[timeEndCol],
          // Remove empty values, then split in different tags for comma separated values
          tags: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(tagsCol.filter(t => {
            return value[t];
          }).map(t => {
            return value[t].split(',');
          })),
          text: value[textCol]
        };
        list.push(data);
      });
    });
    return list;
  }

  getTable() {
    const table = new app_core_table_model__WEBPACK_IMPORTED_MODULE_1__["default"]();
    let i, j;
    table.refId = this.refId;
    table.meta = this.meta;

    if (this.series.length === 0) {
      return table;
    } // the order is:
    // - first the first item from the value-array (this is often (always?) the timestamp)
    // - then all the tag-values
    // - then the rest of the value-array
    //
    // we have to keep this order both in table.columns and table.rows


    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, (series, seriesIndex) => {
      if (seriesIndex === 0) {
        const firstCol = series.columns[0]; // Check the first column's name, if it is `time`, we
        // mark it as having the type time

        const firstTableCol = firstCol === 'time' ? {
          text: 'Time',
          type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time
        } : {
          text: firstCol
        };
        table.columns.push(firstTableCol);
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.keys)(series.tags), key => {
          table.columns.push({
            text: key
          });
        });

        for (j = 1; j < series.columns.length; j++) {
          table.columns.push({
            text: series.columns[j]
          });
        }
      }

      if (series.values) {
        for (i = 0; i < series.values.length; i++) {
          const values = series.values[i];
          const reordered = [values[0]];

          if (series.tags) {
            for (const key in series.tags) {
              if (series.tags.hasOwnProperty(key)) {
                reordered.push(series.tags[key]);
              }
            }
          }

          for (j = 1; j < values.length; j++) {
            reordered.push(values[j]);
          }

          table.rows.push(reordered);
        }
      }
    });
    return table;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/datasource.ts");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/QueryEditor.tsx");
/* harmony import */ var _components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VariableQueryEditor.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class InfluxAnnotationsQueryCtrl {}

_defineProperty(InfluxAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_0__["default"]).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_4__["default"]).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_1__.QueryEditor).setAnnotationQueryCtrl(InfluxAnnotationsQueryCtrl).setVariableQueryEditor(_components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_5__["default"]).setQueryEditorHelp(_components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/queryUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewGroupByPart": () => (/* binding */ addNewGroupByPart),
/* harmony export */   "addNewSelectPart": () => (/* binding */ addNewSelectPart),
/* harmony export */   "buildRawQuery": () => (/* binding */ buildRawQuery),
/* harmony export */   "changeGroupByPart": () => (/* binding */ changeGroupByPart),
/* harmony export */   "changeSelectPart": () => (/* binding */ changeSelectPart),
/* harmony export */   "normalizeQuery": () => (/* binding */ normalizeQuery),
/* harmony export */   "removeGroupByPart": () => (/* binding */ removeGroupByPart),
/* harmony export */   "removeSelectPart": () => (/* binding */ removeSelectPart)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");


// FIXME: these functions are a beginning of a refactoring of influx_query_model.ts
// into a simpler approach with full typescript types.
// later we should be able to migrate the unit-tests
// that relate to these functions here, and then perhaps even move the implementation
// to this place
function buildRawQuery(query) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  return model.render(false);
}
function normalizeQuery(query) {
  // we return the original query if there is no need to update it
  if (query.policy !== undefined && query.resultFormat !== undefined && query.orderByTime !== undefined && query.tags !== undefined && query.groupBy !== undefined && query.select !== undefined) {
    return query;
  } // FIXME: we should move the whole normalizeQuery logic here,
  // and then have influxQueryModel call this function,
  // to concentrate the whole logic here


  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  return new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy).target;
}
function addNewSelectPart(query, type, index) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.addSelectPart(model.selectModels[index], type);
  return model.target;
}
function removeSelectPart(query, partIndex, index) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  const selectModel = model.selectModels[index];
  model.removeSelectPart(selectModel, selectModel[partIndex]);
  return model.target;
}
function changeSelectPart(query, listIndex, partIndex, newParams) {
  var _query$select;

  // we need to make shallow copy of `query.select` down to `query.select[listIndex][partIndex]`
  const newSel = [...((_query$select = query.select) !== null && _query$select !== void 0 ? _query$select : [])];
  newSel[listIndex] = [...newSel[listIndex]];
  newSel[listIndex][partIndex] = Object.assign({}, newSel[listIndex][partIndex], {
    params: newParams
  });
  return Object.assign({}, query, {
    select: newSel
  });
}
function addNewGroupByPart(query, type) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.addGroupBy(type);
  return model.target;
}
function removeGroupByPart(query, partIndex) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.removeGroupByPart(model.groupByParts[partIndex], partIndex);
  return model.target;
}
function changeGroupByPart(query, partIndex, newParams) {
  var _query$groupBy;

  // we need to make shallow copy of `query.groupBy` down to `query.groupBy[partIndex]`
  const newGroupBy = [...((_query$groupBy = query.groupBy) !== null && _query$groupBy !== void 0 ? _query$groupBy : [])];
  newGroupBy[partIndex] = Object.assign({}, newGroupBy[partIndex], {
    params: newParams
  });
  return Object.assign({}, query, {
    groupBy: newGroupBy
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_builder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfluxQueryBuilder": () => (/* binding */ InfluxQueryBuilder)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/kbn.ts");



function renderTagCondition(tag, index) {
  // FIXME: merge this function with influx_query_model/renderTagCondition
  let str = '';
  let operator = tag.operator;
  let value = tag.value;

  if (index > 0) {
    str = (tag.condition || 'AND') + ' ';
  }

  if (!operator) {
    if (/^\/.*\/$/.test(tag.value)) {
      operator = '=~';
    } else {
      operator = '=';
    }
  } // quote value unless regex or number, or if empty-string


  if (value === '' || operator !== '=~' && operator !== '!~' && isNaN(+value)) {
    value = "'" + value.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
  }

  return str + '"' + tag.key + '" ' + operator + ' ' + value;
}

class InfluxQueryBuilder {
  constructor(target, database) {
    this.target = target;
    this.database = database;
    this.target = target;
    this.database = database;
  }

  buildExploreQuery(type, withKey, withMeasurementFilter) {
    let query = '';
    let measurement;
    let policy;

    if (type === 'TAG_KEYS') {
      query = 'SHOW TAG KEYS';
      measurement = this.target.measurement;
      policy = this.target.policy;
    } else if (type === 'TAG_VALUES') {
      query = 'SHOW TAG VALUES';
      measurement = this.target.measurement;
      policy = this.target.policy;
    } else if (type === 'MEASUREMENTS') {
      query = 'SHOW MEASUREMENTS';

      if (withMeasurementFilter) {
        // we do a case-insensitive regex-based lookup
        query += ' WITH MEASUREMENT =~ /(?i)' + app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__["default"].regexEscape(withMeasurementFilter) + '/';
      }
    } else if (type === 'FIELDS') {
      measurement = this.target.measurement;
      policy = this.target.policy;

      if (!measurement.match('^/.*/')) {
        measurement = '"' + measurement + '"';

        if (policy && policy !== 'default') {
          policy = '"' + policy + '"';
          measurement = policy + '.' + measurement;
        }
      }

      return 'SHOW FIELD KEYS FROM ' + measurement;
    } else if (type === 'RETENTION POLICIES') {
      query = 'SHOW RETENTION POLICIES on "' + this.database + '"';
      return query;
    }

    if (measurement) {
      if (!measurement.match('^/.*/') && !measurement.match(/^merge\(.*\)/)) {
        measurement = '"' + measurement + '"';
      }

      if (policy && policy !== 'default') {
        policy = '"' + policy + '"';
        measurement = policy + '.' + measurement;
      }

      query += ' FROM ' + measurement;
    }

    if (withKey) {
      query += ' WITH KEY = "' + withKey + '"';
    }

    if (this.target.tags && this.target.tags.length > 0) {
      const whereConditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(this.target.tags, (memo, tag) => {
        // do not add a condition for the key we want to explore for
        if (tag.key === withKey) {
          return memo;
        } // value operators not supported in these types of queries


        if (tag.operator === '>' || tag.operator === '<') {
          return memo;
        }

        memo.push(renderTagCondition(tag, memo.length));
        return memo;
      }, []);

      if (whereConditions.length > 0) {
        query += ' WHERE ' + whereConditions.join(' ');
      }
    }

    if (type === 'MEASUREMENTS') {
      query += ' LIMIT 100'; //Solve issue #2524 by limiting the number of measurements returned
      //LIMIT must be after WITH MEASUREMENT and WHERE clauses
      //This also could be used for TAG KEYS and TAG VALUES, if desired
    }

    return query;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/state/query_part.ts");


const index = [];
const categories = {
  Aggregations: [],
  Selectors: [],
  Transformations: [],
  Predictors: [],
  Math: [],
  Aliasing: [],
  Fields: []
};

function createPart(part) {
  const def = index[part.type];

  if (!def) {
    throw {
      message: 'Could not find query part ' + part.type
    };
  }

  return new app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.QueryPart(part, def);
}

function register(options) {
  index[options.type] = new app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.QueryPartDef(options);
  options.category.push(index[options.type]);
}

const groupByTimeFunctions = [];

function aliasRenderer(part, innerExpr) {
  return innerExpr + ' AS ' + '"' + part.params[0] + '"';
}

function fieldRenderer(part, innerExpr) {
  if (part.params[0] === '*') {
    return '*';
  }

  return '"' + part.params[0] + '"';
}

function replaceAggregationAddStrategy(selectParts, partModel) {
  // look for existing aggregation
  for (let i = 0; i < selectParts.length; i++) {
    const part = selectParts[i];

    if (part.def.category === categories.Aggregations) {
      if (part.def.type === partModel.def.type) {
        return;
      } // count distinct is allowed


      if (part.def.type === 'count' && partModel.def.type === 'distinct') {
        break;
      } // remove next aggregation if distinct was replaced


      if (part.def.type === 'distinct') {
        const morePartsAvailable = selectParts.length >= i + 2;

        if (partModel.def.type !== 'count' && morePartsAvailable) {
          const nextPart = selectParts[i + 1];

          if (nextPart.def.category === categories.Aggregations) {
            selectParts.splice(i + 1, 1);
          }
        } else if (partModel.def.type === 'count') {
          if (!morePartsAvailable || selectParts[i + 1].def.type !== 'count') {
            selectParts.splice(i + 1, 0, partModel);
          }

          return;
        }
      }

      selectParts[i] = partModel;
      return;
    }

    if (part.def.category === categories.Selectors) {
      selectParts[i] = partModel;
      return;
    }
  }

  selectParts.splice(1, 0, partModel);
}

function addTransformationStrategy(selectParts, partModel) {
  let i; // look for index to add transformation

  for (i = 0; i < selectParts.length; i++) {
    const part = selectParts[i];

    if (part.def.category === categories.Math || part.def.category === categories.Aliasing) {
      break;
    }
  }

  selectParts.splice(i, 0, partModel);
}

function addMathStrategy(selectParts, partModel) {
  const partCount = selectParts.length;

  if (partCount > 0) {
    // if last is math, replace it
    if (selectParts[partCount - 1].def.type === 'math') {
      selectParts[partCount - 1] = partModel;
      return;
    } // if next to last is math, replace it


    if (partCount > 1 && selectParts[partCount - 2].def.type === 'math') {
      selectParts[partCount - 2] = partModel;
      return;
    } else if (selectParts[partCount - 1].def.type === 'alias') {
      // if last is alias add it before
      selectParts.splice(partCount - 1, 0, partModel);
      return;
    }
  }

  selectParts.push(partModel);
}

function addAliasStrategy(selectParts, partModel) {
  const partCount = selectParts.length;

  if (partCount > 0) {
    // if last is alias, replace it
    if (selectParts[partCount - 1].def.type === 'alias') {
      selectParts[partCount - 1] = partModel;
      return;
    }
  }

  selectParts.push(partModel);
}

function addFieldStrategy(selectParts, partModel, query) {
  // copy all parts
  const parts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
    return createPart({
      type: part.def.type,
      params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(part.params)
    });
  });
  query.selectModels.push(parts);
}

register({
  type: 'field',
  addStrategy: addFieldStrategy,
  category: categories.Fields,
  params: [{
    type: 'field',
    dynamicLookup: true
  }],
  defaultParams: ['value'],
  renderer: fieldRenderer
}); // Aggregations

register({
  type: 'count',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'distinct',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'integral',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'mean',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'median',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'mode',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'sum',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
}); // transformations

register({
  type: 'derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'spread',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'non_negative_derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'non_negative_difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'moving_average',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'window',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }],
  defaultParams: [10],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'cumulative_sum',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'stddev',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'time',
  category: groupByTimeFunctions,
  params: [{
    name: 'interval',
    type: 'time',
    options: ['$__interval', '1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['$__interval'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'fill',
  category: groupByTimeFunctions,
  params: [{
    name: 'fill',
    type: 'string',
    options: ['none', 'null', '0', 'previous', 'linear']
  }],
  defaultParams: ['null'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'elapsed',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
}); // predictions

register({
  type: 'holt_winters',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'holt_winters_with_fit',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
}); // Selectors

register({
  type: 'bottom',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'first',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'last',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'max',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'min',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'percentile',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'nth',
    type: 'int'
  }],
  defaultParams: [95],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'top',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'tag',
  category: groupByTimeFunctions,
  params: [{
    name: 'tag',
    type: 'string',
    dynamicLookup: true
  }],
  defaultParams: ['tag'],
  renderer: fieldRenderer
});
register({
  type: 'math',
  addStrategy: addMathStrategy,
  category: categories.Math,
  params: [{
    name: 'expr',
    type: 'string'
  }],
  defaultParams: [' / 100'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.suffixRenderer
});
register({
  type: 'alias',
  addStrategy: addAliasStrategy,
  category: categories.Aliasing,
  params: [{
    name: 'name',
    type: 'string',
    quote: 'double'
  }],
  defaultParams: ['alias'],
  renderMode: 'suffix',
  renderer: aliasRenderer
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: createPart,
  getCategories: () => {
    return categories;
  },
  replaceAggregationAdd: replaceAggregationAddStrategy
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/response_parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponseParser),
/* harmony export */   "getSelectedParams": () => (/* binding */ getSelectedParams)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/table_model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




class ResponseParser {
  parse(query, results) {
    if (!(results !== null && results !== void 0 && results.results) || results.results.length === 0) {
      return [];
    }

    const influxResults = results.results[0];

    if (!influxResults.series) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();
    const isValueFirst = normalizedQuery.indexOf('show field keys') >= 0 || normalizedQuery.indexOf('show retention policies') >= 0;
    const res = new Set();
    (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(influxResults.series, serie => {
      (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(serie.values, value => {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isArray)(value)) {
          // In general, there are 2 possible shapes for the returned value.
          // The first one is a two-element array,
          // where the first element is somewhat a metadata value:
          // the tag name for SHOW TAG VALUES queries,
          // the time field for SELECT queries, etc.
          // The second shape is an one-element array,
          // that is containing an immediate value.
          // For example, SHOW FIELD KEYS queries return such shape.
          // Note, pre-0.11 versions return
          // the second shape for SHOW TAG VALUES queries
          // (while the newer versions—first).
          if (isValueFirst) {
            addUnique(res, value[0]);
          } else if (value[1] !== undefined) {
            addUnique(res, value[1]);
          } else {
            addUnique(res, value[0]);
          }
        } else {
          addUnique(res, value);
        }
      });
    }); // NOTE: it is important to keep the order of items in the parsed output
    // the same as it was in the influxdb-response.
    // we use a `Set` to collect the unique-results, and `Set` iteration
    // order is insertion-order, so this should be ok.

    return Array.from(res).map(v => ({
      text: v
    }));
  }

  getTable(dfs, target, meta) {
    let table = new app_core_table_model__WEBPACK_IMPORTED_MODULE_2__["default"]();

    if (dfs.length > 0) {
      var _dfs$0$meta;

      table.meta = Object.assign({}, meta, {
        executedQueryString: (_dfs$0$meta = dfs[0].meta) === null || _dfs$0$meta === void 0 ? void 0 : _dfs$0$meta.executedQueryString
      });
      table.refId = target.refId;
      table = getTableCols(dfs, table, target); // if group by tag(s) added

      if (dfs[0].fields[1] && dfs[0].fields[1].labels) {
        let dfsByLabels = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.groupBy)(dfs, df => df.fields[1].labels ? Object.values(df.fields[1].labels) : null);
        const labels = Object.keys(dfsByLabels);
        dfsByLabels = Object.values(dfsByLabels);

        for (let i = 0; i < dfsByLabels.length; i++) {
          table = getTableRows(dfsByLabels[i], table, [...labels[i].split(',')]);
        }
      } else {
        table = getTableRows(dfs, table, []);
      }
    }

    return table;
  }

  async transformAnnotationResponse(options, data, target) {
    const rsp = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryResponse)(data, [target]);

    if (rsp) {
      const table = this.getTable(rsp.data, target, {});
      const list = [];
      let titleCol = null;
      let timeCol = null;
      let timeEndCol = null;
      const tagsCol = [];
      let textCol = null;
      (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(table.columns, (column, index) => {
        if (column.text.toLowerCase() === 'time') {
          timeCol = index;
          return;
        }

        if (column.text === options.annotation.titleColumn) {
          titleCol = index;
          return;
        }

        if (colContainsTag(column.text, options.annotation.tagsColumn)) {
          tagsCol.push(index);
          return;
        }

        if (column.text.includes(options.annotation.textColumn)) {
          textCol = index;
          return;
        }

        if (column.text === options.annotation.timeEndColumn) {
          timeEndCol = index;
          return;
        } // legacy case


        if (!titleCol && textCol !== index) {
          titleCol = index;
        }
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(table.rows, value => {
        const data = {
          annotation: options.annotation,
          time: +new Date(value[timeCol]),
          title: value[titleCol],
          timeEnd: value[timeEndCol],
          // Remove empty values, then split in different tags for comma separated values
          tags: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.flatten)(tagsCol.filter(t => {
            return value[t];
          }).map(t => {
            return value[t].split(',');
          })),
          text: value[textCol]
        };
        list.push(data);
      });
      return list;
    }

    return [];
  }

}

function colContainsTag(colText, tagsColumn) {
  const tags = (tagsColumn || '').replace(' ', '').split(',');

  for (var tag of tags) {
    if (colText.includes(tag)) {
      return true;
    }
  }

  return false;
}

function getTableCols(dfs, table, target) {
  const selectedParams = getSelectedParams(target);
  dfs[0].fields.forEach(field => {
    // Time col
    if (field.name === 'time') {
      table.columns.push({
        text: 'Time',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time
      });
    } // Group by (label) column(s)
    else if (field.name === 'value') {
      if (field.labels) {
        Object.keys(field.labels).forEach(key => {
          table.columns.push({
            text: key
          });
        });
      }
    }
  }); // Get cols for annotationQuery

  if (dfs[0].refId === 'metricFindQuery') {
    dfs.forEach(field => {
      if (field.name) {
        table.columns.push({
          text: field.name
        });
      }
    });
  } // Select (metric) column(s)


  for (let i = 0; i < selectedParams.length; i++) {
    table.columns.push({
      text: selectedParams[i]
    });
  }

  return table;
}

function getTableRows(dfs, table, labels) {
  const values = dfs[0].fields[0].values.toArray();

  for (let i = 0; i < values.length; i++) {
    const time = values[i];
    const metrics = dfs.map(df => {
      return df.fields[1] ? df.fields[1].values.toArray()[i] : null;
    });

    if (metrics.indexOf(null) < 0) {
      table.rows.push([time, ...labels, ...metrics]);
    }
  }

  return table;
}

function getSelectedParams(target) {
  var _target$select;

  let allParams = [];
  (_target$select = target.select) === null || _target$select === void 0 ? void 0 : _target$select.forEach(select => {
    const selector = select.filter(x => x.type !== 'field');

    if (selector.length > 0) {
      allParams.push(selector[0].type);
    } else {
      if (select[0] && select[0].params && select[0].params[0]) {
        allParams.push(select[0].params[0].toString());
      }
    }
  });
  let uniqueParams = [];
  allParams.forEach(param => {
    uniqueParams.push(incrementName(param, param, uniqueParams, 0));
  });
  return uniqueParams;
}

function incrementName(name, nameIncremenet, params, index) {
  if (params.indexOf(nameIncremenet) > -1) {
    index++;
    return incrementName(name, name + '_' + index, params, index);
  }

  return nameIncremenet;
}

function addUnique(s, value) {
  s.add(value.toString());
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfluxVersion": () => (/* binding */ InfluxVersion)
/* harmony export */ });
let InfluxVersion;

(function (InfluxVersion) {
  InfluxVersion["InfluxQL"] = "InfluxQL";
  InfluxVersion["Flux"] = "Flux";
})(InfluxVersion || (InfluxVersion = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBV0EsTUFBSXFvQixZQUFzQixHQUFHLEVBQTdCO0FBQ0FGLEVBQUFBLFNBQVMsQ0FBQ3hsQixPQUFWLENBQW1CeVosS0FBRCxJQUFXO0FBQzNCaU0sSUFBQUEsWUFBWSxDQUFDdGxCLElBQWIsQ0FBa0J1bEIsYUFBYSxDQUFDbE0sS0FBRCxFQUFRQSxLQUFSLEVBQWVpTSxZQUFmLEVBQTZCLENBQTdCLENBQS9CO0FBQ0QsR0FGRDtBQUlBLFNBQU9BLFlBQVA7QUFDRDs7QUFFRCxTQUFTQyxhQUFULENBQXVCemxCLElBQXZCLEVBQXFDMGxCLGNBQXJDLEVBQTZEbmEsTUFBN0QsRUFBK0V0RCxLQUEvRSxFQUFzRztBQUNwRyxNQUFJc0QsTUFBTSxDQUFDcVIsT0FBUCxDQUFlOEksY0FBZixJQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDemQsSUFBQUEsS0FBSztBQUNMLFdBQU93ZCxhQUFhLENBQUN6bEIsSUFBRCxFQUFPQSxJQUFJLEdBQUcsR0FBUCxHQUFhaUksS0FBcEIsRUFBMkJzRCxNQUEzQixFQUFtQ3RELEtBQW5DLENBQXBCO0FBQ0Q7O0FBQ0QsU0FBT3lkLGNBQVA7QUFDRDs7QUFFRCxTQUFTbEIsU0FBVCxDQUFtQjVHLENBQW5CLEVBQW1DOWhCLEtBQW5DLEVBQTJEO0FBQ3pEOGhCLEVBQUFBLENBQUMsQ0FBQytILEdBQUYsQ0FBTTdwQixLQUFLLENBQUNxQixRQUFOLEVBQU47QUFDRDs7Ozs7Ozs7Ozs7QUNyUE0sSUFBS3hCLGFBQVo7O1dBQVlBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0dBQUFBLGtCQUFBQTs7Ozs7Ozs7Ozs7O0FDRjhCO0FBQzNCO0FBQ2YsY0FBYyw2Q0FBTTtBQUNwQixJQUFJLGdEQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL0NvbmZpZ0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvRmx1eFF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9JbmZsdXhDaGVhdFNoZWV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9JbmZsdXhTdGFydFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9RdWVyeUVkaXRvck1vZGVTd2l0Y2hlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvUmF3SW5mbHV4UUxFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1ZhcmlhYmxlUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL0FkZEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9Gb3JtYXRBc1NlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL0Zyb21TZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9JbnB1dFNlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL09yZGVyQnlUaW1lU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvUGFydExpc3RTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9TZWcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL1RhZ3NTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9wYXJ0TGlzdFV0aWxzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvdGFnVXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvdG9TZWxlY3RhYmxlVmFsdWUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvdW53cmFwLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy91c2VTaGFkb3dlZFN0YXRlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9pbmZsdXhRTE1ldGFkYXRhUXVlcnkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2luZmx1eF9xdWVyeV9tb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvaW5mbHV4X3Nlcmllcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvbW9kdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9xdWVyeVV0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9xdWVyeV9idWlsZGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9xdWVyeV9wYXJ0LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9yZXNwb25zZV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL3R5cGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC0wMDMyNmU3MGJhLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy4zLjItYTAzMmNiZWIwMS03Mzc5NDYwZjUxLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VQcmV2aW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsXG4gIFNlbGVjdGFibGVWYWx1ZSxcbiAgb25VcGRhdGVEYXRhc291cmNlT3B0aW9uLFxuICB1cGRhdGVEYXRhc291cmNlUGx1Z2luUmVzZXRPcHRpb24sXG4gIG9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uLFxuICBvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvblNlbGVjdCxcbiAgb25VcGRhdGVEYXRhc291cmNlU2VjdXJlSnNvbkRhdGFPcHRpb24sXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgRGF0YVNvdXJjZUh0dHBTZXR0aW5ncywgSW5mb0JveCwgSW5saW5lRmllbGQsIElubGluZUZvcm1MYWJlbCwgTGVnYWN5Rm9ybXMsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmNvbnN0IHsgSW5wdXQsIFNlY3JldEZvcm1GaWVsZCB9ID0gTGVnYWN5Rm9ybXM7XG5pbXBvcnQgeyBJbmZsdXhPcHRpb25zLCBJbmZsdXhTZWN1cmVKc29uRGF0YSwgSW5mbHV4VmVyc2lvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgaHR0cE1vZGVzID0gW1xuICB7IGxhYmVsOiAnR0VUJywgdmFsdWU6ICdHRVQnIH0sXG4gIHsgbGFiZWw6ICdQT1NUJywgdmFsdWU6ICdQT1NUJyB9LFxuXSBhcyBTZWxlY3RhYmxlVmFsdWVbXTtcblxuY29uc3QgdmVyc2lvbnMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0luZmx1eFFMJyxcbiAgICB2YWx1ZTogSW5mbHV4VmVyc2lvbi5JbmZsdXhRTCxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBJbmZsdXhEQiBTUUwtbGlrZSBxdWVyeSBsYW5ndWFnZS4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdGbHV4JyxcbiAgICB2YWx1ZTogSW5mbHV4VmVyc2lvbi5GbHV4LFxuICAgIGRlc2NyaXB0aW9uOiAnQWR2YW5jZWQgZGF0YSBzY3JpcHRpbmcgYW5kIHF1ZXJ5IGxhbmd1YWdlLiAgU3VwcG9ydGVkIGluIEluZmx1eERCIDIueCBhbmQgMS44KycsXG4gIH0sXG5dIGFzIEFycmF5PFNlbGVjdGFibGVWYWx1ZTxJbmZsdXhWZXJzaW9uPj47XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxJbmZsdXhPcHRpb25zPjtcbnR5cGUgU3RhdGUgPSB7XG4gIG1heFNlcmllczogc3RyaW5nIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNsYXNzIENvbmZpZ0VkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIG1heFNlcmllczogJycsXG4gIH07XG5cbiAgaHRtbFByZWZpeDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlLm1heFNlcmllcyA9IHByb3BzLm9wdGlvbnMuanNvbkRhdGEubWF4U2VyaWVzPy50b1N0cmluZygpIHx8ICcnO1xuICAgIHRoaXMuaHRtbFByZWZpeCA9IHVuaXF1ZUlkKCdpbmZsdXhkYi1jb25maWcnKTtcbiAgfVxuXG4gIC8vIDF4XG4gIG9uUmVzZXRQYXNzd29yZCA9ICgpID0+IHtcbiAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luUmVzZXRPcHRpb24odGhpcy5wcm9wcywgJ3Bhc3N3b3JkJyk7XG4gIH07XG5cbiAgLy8gMnhcbiAgb25SZXNldFRva2VuID0gKCkgPT4ge1xuICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5SZXNldE9wdGlvbih0aGlzLnByb3BzLCAndG9rZW4nKTtcbiAgfTtcblxuICBvblZlcnNpb25DaGFuZ2VkID0gKHNlbGVjdGVkOiBTZWxlY3RhYmxlVmFsdWU8SW5mbHV4VmVyc2lvbj4pID0+IHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNvcHk6IGFueSA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBqc29uRGF0YToge1xuICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLFxuICAgICAgICB2ZXJzaW9uOiBzZWxlY3RlZC52YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoc2VsZWN0ZWQudmFsdWUgPT09IEluZmx1eFZlcnNpb24uRmx1eCkge1xuICAgICAgY29weS5hY2Nlc3MgPSAncHJveHknO1xuICAgICAgY29weS5iYXNpY0F1dGggPSB0cnVlO1xuICAgICAgY29weS5qc29uRGF0YS5odHRwTW9kZSA9ICdQT1NUJztcblxuICAgICAgLy8gUmVtb3ZlIG9sZCAxeCBjb25maWdzXG4gICAgICBkZWxldGUgY29weS51c2VyO1xuICAgICAgZGVsZXRlIGNvcHkuZGF0YWJhc2U7XG4gICAgfVxuXG4gICAgb25PcHRpb25zQ2hhbmdlKGNvcHkpO1xuICB9O1xuXG4gIHJlbmRlckluZmx1eDJ4KCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlY3VyZUpzb25GaWVsZHMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qgc2VjdXJlSnNvbkRhdGEgPSAob3B0aW9ucy5zZWN1cmVKc29uRGF0YSB8fCB7fSkgYXMgSW5mbHV4U2VjdXJlSnNvbkRhdGE7XG4gICAgY29uc3QgeyBodG1sUHJlZml4IH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgaHRtbEZvcj17YCR7aHRtbFByZWZpeH0tb3JnYH0gY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5cbiAgICAgICAgICAgICAgT3JnYW5pemF0aW9uXG4gICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9e2Ake2h0bWxQcmVmaXh9LW9yZ2B9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMjBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLm9yZ2FuaXphdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ29yZ2FuaXphdGlvbicpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8U2VjcmV0Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIGlzQ29uZmlndXJlZD17KHNlY3VyZUpzb25GaWVsZHMgJiYgc2VjdXJlSnNvbkZpZWxkcy50b2tlbikgYXMgYm9vbGVhbn1cbiAgICAgICAgICAgICAgdmFsdWU9e3NlY3VyZUpzb25EYXRhLnRva2VuIHx8ICcnfVxuICAgICAgICAgICAgICBsYWJlbD1cIlRva2VuXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRva2VuXCJcbiAgICAgICAgICAgICAgbGFiZWxXaWR0aD17MTB9XG4gICAgICAgICAgICAgIGlucHV0V2lkdGg9ezIwfVxuICAgICAgICAgICAgICBvblJlc2V0PXt0aGlzLm9uUmVzZXRUb2tlbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZVNlY3VyZUpzb25EYXRhT3B0aW9uKHRoaXMucHJvcHMsICd0b2tlbicpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5EZWZhdWx0IEJ1Y2tldDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0yMFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJkZWZhdWx0IGJ1Y2tldFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEuZGVmYXVsdEJ1Y2tldCB8fCAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ2RlZmF1bHRCdWNrZXQnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTEwXCJcbiAgICAgICAgICAgICAgdG9vbHRpcD1cIkEgbG93ZXIgbGltaXQgZm9yIHRoZSBhdXRvIGdyb3VwIGJ5IHRpbWUgaW50ZXJ2YWwuIFJlY29tbWVuZGVkIHRvIGJlIHNldCB0byB3cml0ZSBmcmVxdWVuY3ksXG5cdFx0XHRcdGZvciBleGFtcGxlIDFtIGlmIHlvdXIgZGF0YSBpcyB3cml0dGVuIGV2ZXJ5IG1pbnV0ZS5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNaW4gdGltZSBpbnRlcnZhbFxuICAgICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTEwXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTEwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwc1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudGltZUludGVydmFsIHx8ICcnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvbih0aGlzLnByb3BzLCAndGltZUludGVydmFsJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW5mbHV4MXgoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VjdXJlSnNvbkZpZWxkcyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBzZWN1cmVKc29uRGF0YSA9IChvcHRpb25zLnNlY3VyZUpzb25EYXRhIHx8IHt9KSBhcyBJbmZsdXhTZWN1cmVKc29uRGF0YTtcbiAgICBjb25zdCB7IGh0bWxQcmVmaXggfSA9IHRoaXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEluZm9Cb3g+XG4gICAgICAgICAgPGg1PkRhdGFiYXNlIEFjY2VzczwvaDU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTZXR0aW5nIHRoZSBkYXRhYmFzZSBmb3IgdGhpcyBkYXRhc291cmNlIGRvZXMgbm90IGRlbnkgYWNjZXNzIHRvIG90aGVyIGRhdGFiYXNlcy4gVGhlIEluZmx1eERCIHF1ZXJ5IHN5bnRheFxuICAgICAgICAgICAgYWxsb3dzIHN3aXRjaGluZyB0aGUgZGF0YWJhc2UgaW4gdGhlIHF1ZXJ5LiBGb3IgZXhhbXBsZTpcbiAgICAgICAgICAgIDxjb2RlPlNIT1cgTUVBU1VSRU1FTlRTIE9OIF9pbnRlcm5hbDwvY29kZT4gb3JcbiAgICAgICAgICAgIDxjb2RlPlNFTEVDVCAqIEZST00gJnF1b3Q7X2ludGVybmFsJnF1b3Q7Li4mcXVvdDtkYXRhYmFzZSZxdW90OyBMSU1JVCAxMDwvY29kZT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBUbyBzdXBwb3J0IGRhdGEgaXNvbGF0aW9uIGFuZCBzZWN1cml0eSwgbWFrZSBzdXJlIGFwcHJvcHJpYXRlIHBlcm1pc3Npb25zIGFyZSBjb25maWd1cmVkIGluIEluZmx1eERCLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9JbmZvQm94PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIGh0bWxGb3I9e2Ake2h0bWxQcmVmaXh9LWRiYH0gY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5cbiAgICAgICAgICAgICAgRGF0YWJhc2VcbiAgICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aC0yMFwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpZD17YCR7aHRtbFByZWZpeH0tZGJgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTIwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5kYXRhYmFzZSB8fCAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlT3B0aW9uKHRoaXMucHJvcHMsICdkYXRhYmFzZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIGh0bWxGb3I9e2Ake2h0bWxQcmVmaXh9LXVzZXJgfSBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiPlxuICAgICAgICAgICAgICBVc2VyXG4gICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9e2Ake2h0bWxQcmVmaXh9LXVzZXJgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTIwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy51c2VyIHx8ICcnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VPcHRpb24odGhpcy5wcm9wcywgJ3VzZXInKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPFNlY3JldEZvcm1GaWVsZFxuICAgICAgICAgICAgICBpc0NvbmZpZ3VyZWQ9eyhzZWN1cmVKc29uRmllbGRzICYmIHNlY3VyZUpzb25GaWVsZHMucGFzc3dvcmQpIGFzIGJvb2xlYW59XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWN1cmVKc29uRGF0YS5wYXNzd29yZCB8fCAnJ31cbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsV2lkdGg9ezEwfVxuICAgICAgICAgICAgICBpbnB1dFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgb25SZXNldD17dGhpcy5vblJlc2V0UGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VTZWN1cmVKc29uRGF0YU9wdGlvbih0aGlzLnByb3BzLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9e2Ake2h0bWxQcmVmaXh9LWh0dHAtbWV0aG9kYH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMTBcIlxuICAgICAgICAgICAgICB0b29sdGlwPVwiWW91IGNhbiB1c2UgZWl0aGVyIEdFVCBvciBQT1NUIEhUVFAgbWV0aG9kIHRvIHF1ZXJ5IHlvdXIgSW5mbHV4REIgZGF0YWJhc2UuIFRoZSBQT1NUXG4gICAgICAgICAgbWV0aG9kIGFsbG93cyB5b3UgdG8gcGVyZm9ybSBoZWF2eSByZXF1ZXN0cyAod2l0aCBhIGxvdHMgb2YgV0hFUkUgY2xhdXNlKSB3aGlsZSB0aGUgR0VUIG1ldGhvZFxuICAgICAgICAgIHdpbGwgcmVzdHJpY3QgeW91IGFuZCByZXR1cm4gYW4gZXJyb3IgaWYgdGhlIHF1ZXJ5IGlzIHRvbyBsYXJnZS5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIVFRQIE1ldGhvZFxuICAgICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIGlucHV0SWQ9e2Ake2h0bWxQcmVmaXh9LWh0dHAtbWV0aG9kYH1cbiAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtodHRwTW9kZXMuZmluZCgoaHR0cE1vZGUpID0+IGh0dHBNb2RlLnZhbHVlID09PSBvcHRpb25zLmpzb25EYXRhLmh0dHBNb2RlKX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17aHR0cE1vZGVzfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnMuanNvbkRhdGEuaHR0cE1vZGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvblNlbGVjdCh0aGlzLnByb3BzLCAnaHR0cE1vZGUnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMTBcIlxuICAgICAgICAgICAgICB0b29sdGlwPVwiQSBsb3dlciBsaW1pdCBmb3IgdGhlIGF1dG8gZ3JvdXAgYnkgdGltZSBpbnRlcnZhbC4gUmVjb21tZW5kZWQgdG8gYmUgc2V0IHRvIHdyaXRlIGZyZXF1ZW5jeSxcblx0XHRcdFx0Zm9yIGV4YW1wbGUgMW0gaWYgeW91ciBkYXRhIGlzIHdyaXR0ZW4gZXZlcnkgbWludXRlLlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1pbiB0aW1lIGludGVydmFsXG4gICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMTBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTBzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50aW1lSW50ZXJ2YWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uKHRoaXMucHJvcHMsICd0aW1lSW50ZXJ2YWwnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPlF1ZXJ5IExhbmd1YWdlPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUXVlcnkgbGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0zMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudmVyc2lvbiA9PT0gSW5mbHV4VmVyc2lvbi5GbHV4ID8gdmVyc2lvbnNbMV0gOiB2ZXJzaW9uc1swXX1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXt2ZXJzaW9uc31cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3ZlcnNpb25zWzBdfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVmVyc2lvbkNoYW5nZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge29wdGlvbnMuanNvbkRhdGEudmVyc2lvbiA9PT0gSW5mbHV4VmVyc2lvbi5GbHV4ICYmIChcbiAgICAgICAgICA8SW5mb0JveD5cbiAgICAgICAgICAgIDxoNT5TdXBwb3J0IGZvciBGbHV4IGluIEdyYWZhbmEgaXMgY3VycmVudGx5IGluIGJldGE8L2g1PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFBsZWFzZSByZXBvcnQgYW55IGlzc3VlcyB0bzogPGJyIC8+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9ncmFmYW5hL2lzc3Vlcy9uZXcvY2hvb3NlXCI+XG4gICAgICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvZ3JhZmFuYS9pc3N1ZXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvSW5mb0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICB7b3B0aW9ucy5hY2Nlc3MgPT09ICdkaXJlY3QnICYmIChcbiAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJEZXByZWNhdGlvbiBOb3RpY2VcIiBzZXZlcml0eT1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIEJyb3dzZXIgYWNjZXNzIG1vZGUgaW4gdGhlIEluZmx1eERCIGRhdGFzb3VyY2UgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2UuXG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgKX1cblxuICAgICAgICA8RGF0YVNvdXJjZUh0dHBTZXR0aW5nc1xuICAgICAgICAgIHNob3dBY2Nlc3NPcHRpb25zPXt0cnVlfVxuICAgICAgICAgIGRhdGFTb3VyY2VDb25maWc9e29wdGlvbnN9XG4gICAgICAgICAgZGVmYXVsdFVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4NlwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPkluZmx1eERCIERldGFpbHM8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtvcHRpb25zLmpzb25EYXRhLnZlcnNpb24gPT09IEluZmx1eFZlcnNpb24uRmx1eCA/IHRoaXMucmVuZGVySW5mbHV4MngoKSA6IHRoaXMucmVuZGVySW5mbHV4MXgoKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICAgICAgbGFiZWxXaWR0aD17MjB9XG4gICAgICAgICAgICAgIGxhYmVsPVwiTWF4IHNlcmllc1wiXG4gICAgICAgICAgICAgIHRvb2x0aXA9XCJMaW1pdCB0aGUgbnVtYmVyIG9mIHNlcmllcy90YWJsZXMgdGhhdCBHcmFmYW5hIHdpbGwgcHJvY2Vzcy4gTG93ZXIgdGhpcyBudW1iZXIgdG8gcHJldmVudCBhYnVzZSwgYW5kIGluY3JlYXNlIGl0IGlmIHlvdSBoYXZlIGxvdHMgb2Ygc21hbGwgdGltZSBzZXJpZXMgYW5kIG5vdCBhbGwgYXJlIHNob3duLiBEZWZhdWx0cyB0byAxMDAwLlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwMFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMTBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1heFNlcmllc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBXZSBkdXBsaWNhdGUgdGhpcyBzdGF0ZSBzbyB0aGF0IHdlIGFsbG93IHRvIHdyaXRlIGZyZWVseSBpbnNpZGUgdGhlIGlucHV0LiBXZSBkb24ndCBoYXZlXG4gICAgICAgICAgICAgICAgICAvLyBhbnkgaW5mbHVlbmNlIG92ZXIgc2F2aW5nIHNvIHRoaXMgc2VlbXMgdG8gYmUgb25seSB3YXkgdG8gZG8gdGhpcy5cbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXhTZXJpZXM6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUludChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ21heFNlcmllcycsIE51bWJlci5pc0Zpbml0ZSh2YWwpID8gdmFsIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ0VkaXRvcjtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHtcbiAgSW5saW5lRm9ybUxhYmVsLFxuICBMaW5rQnV0dG9uLFxuICBTZWdtZW50LFxuICBDb2RlRWRpdG9yLFxuICBNb25hY29FZGl0b3IsXG4gIENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbSxcbiAgQ29kZUVkaXRvclN1Z2dlc3Rpb25JdGVtS2luZCxcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCBJbmZsdXhEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuXG50eXBlIFByb3BzID0ge1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBJbmZsdXhRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyeTogKCkgPT4gdm9pZDtcbiAgcXVlcnk6IEluZmx1eFF1ZXJ5O1xuICAvLyBgZGF0YXNvdXJjZWAgaXMgbm90IHVzZWQgaW50ZXJuYWxseSwgYnV0IHRoaXMgY29tcG9uZW50IGlzIHVzZWQgYXQgc29tZSBwbGFjZXNcbiAgLy8gZGlyZWN0bHksIHdoZXJlIHRoZSBgZGF0YXNvdXJjZWAgcHJvcCBoYXMgdG8gZXhpc3QuIGxhdGVyLCB3aGVuIHRoZSB3aG9sZVxuICAvLyBxdWVyeS1lZGl0b3IgZ2V0cyBjb252ZXJ0ZWQgdG8gcmVhY3Qgd2UgY2FuIHN0b3AgdXNpbmcgdGhpcyBjb21wb25lbnQgZGlyZWN0bHlcbiAgLy8gYW5kIHRoZW4gd2UgY2FuIHByb2JhYmx5IHJlbW92ZSB0aGUgZGF0YXNvdXJjZSBhdHRyaWJ1dGUuXG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2U7XG59O1xuXG5jb25zdCBzYW1wbGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBbXG4gIHsgbGFiZWw6ICdTaG93IGJ1Y2tldHMnLCBkZXNjcmlwdGlvbjogJ0xpc3QgdGhlIGF2YWlsYWJsZSBidWNrZXRzICh0YWJsZSknLCB2YWx1ZTogJ2J1Y2tldHMoKScgfSxcbiAge1xuICAgIGxhYmVsOiAnU2ltcGxlIHF1ZXJ5JyxcbiAgICBkZXNjcmlwdGlvbjogJ2ZpbHRlciBieSBtZWFzdXJlbWVudCBhbmQgZmllbGQnLFxuICAgIHZhbHVlOiBgZnJvbShidWNrZXQ6IFwiZGIvcnBcIilcbiAgfD4gcmFuZ2Uoc3RhcnQ6IHYudGltZVJhbmdlU3RhcnQsIHN0b3A6di50aW1lUmFuZ2VTdG9wKVxuICB8PiBmaWx0ZXIoZm46IChyKSA9PlxuICAgIHIuX21lYXN1cmVtZW50ID09IFwiZXhhbXBsZS1tZWFzdXJlbWVudFwiIGFuZFxuICAgIHIuX2ZpZWxkID09IFwiZXhhbXBsZS1maWVsZFwiXG4gIClgLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdHcm91cGVkIFF1ZXJ5JyxcbiAgICBkZXNjcmlwdGlvbjogJ0dyb3VwIGJ5IChtaW4vbWF4L3N1bS9tZWRpYW4pJyxcbiAgICB2YWx1ZTogYC8vIHYud2luZG93UGVyaW9kIGlzIGEgdmFyaWFibGUgcmVmZXJyaW5nIHRvIHRoZSBjdXJyZW50IG9wdGltaXplZCB3aW5kb3cgcGVyaW9kIChjdXJyZW50bHk6ICRpbnRlcnZhbClcbmZyb20oYnVja2V0OiB2LmJ1Y2tldClcbiAgfD4gcmFuZ2Uoc3RhcnQ6IHYudGltZVJhbmdlU3RhcnQsIHN0b3A6IHYudGltZVJhbmdlU3RvcClcbiAgfD4gZmlsdGVyKGZuOiAocikgPT4gcltcIl9tZWFzdXJlbWVudFwiXSA9PSBcIm1lYXN1cmVtZW50MVwiIG9yIHJbXCJfbWVhc3VyZW1lbnRcIl0gPX4gL14uKj9yZWdleC4qJC8pXG4gIHw+IGZpbHRlcihmbjogKHIpID0+IHJbXCJfZmllbGRcIl0gPT0gXCJmaWVsZDJcIiBvciByW1wiX2ZpZWxkXCJdID1+IC9eLio/cmVnZXguKiQvKVxuICB8PiBhZ2dyZWdhdGVXaW5kb3coZXZlcnk6IHYud2luZG93UGVyaW9kLCBmbjogbWVhbnxtZWRpYW58bWF4fGNvdW50fGRlcml2YXRpdmV8c3VtKVxuICB8PiB5aWVsZChuYW1lOiBcInNvbWUtbmFtZVwiKWAsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0ZpbHRlciBieSB2YWx1ZScsXG4gICAgZGVzY3JpcHRpb246ICdSZXN1bHRzIGJldHdlZW4gYSBtaW4vbWF4JyxcbiAgICB2YWx1ZTogYC8vIHYuYnVja2V0LCB2LnRpbWVSYW5nZVN0YXJ0LCBhbmQgdi50aW1lUmFuZ2Ugc3RvcCBhcmUgYWxsIHZhcmlhYmxlcyBzdXBwb3J0ZWQgYnkgdGhlIGZsdXggcGx1Z2luIGFuZCBpbmZsdXhkYlxuZnJvbShidWNrZXQ6IHYuYnVja2V0KVxuICB8PiByYW5nZShzdGFydDogdi50aW1lUmFuZ2VTdGFydCwgc3RvcDogdi50aW1lUmFuZ2VTdG9wKVxuICB8PiBmaWx0ZXIoZm46IChyKSA9PiByW1wiX3ZhbHVlXCJdID49IDEwIGFuZCByW1wiX3ZhbHVlXCJdIDw9IDIwKWAsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1NjaGVtYSBFeHBsb3JhdGlvbjogKG1lYXN1cmVtZW50cyknLFxuICAgIGRlc2NyaXB0aW9uOiAnR2V0IGEgbGlzdCBvZiBtZWFzdXJlbWVudCB1c2luZyBmbHV4JyxcbiAgICB2YWx1ZTogYGltcG9ydCBcImluZmx1eGRhdGEvaW5mbHV4ZGIvdjFcIlxudjEubWVhc3VyZW1lbnRzKGJ1Y2tldDogdi5idWNrZXQpYCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnU2NoZW1hIEV4cGxvcmF0aW9uOiAoZmllbGRzKScsXG4gICAgZGVzY3JpcHRpb246ICdSZXR1cm4gZXZlcnkgcG9zc2libGUga2V5IGluIGEgc2luZ2xlIHRhYmxlJyxcbiAgICB2YWx1ZTogYGZyb20oYnVja2V0OiB2LmJ1Y2tldClcbiAgfD4gcmFuZ2Uoc3RhcnQ6IHYudGltZVJhbmdlU3RhcnQsIHN0b3A6di50aW1lUmFuZ2VTdG9wKVxuICB8PiBrZXlzKClcbiAgfD4ga2VlcChjb2x1bW5zOiBbXCJfdmFsdWVcIl0pXG4gIHw+IGdyb3VwKClcbiAgfD4gZGlzdGluY3QoKWAsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1NjaGVtYSBFeHBsb3JhdGlvbjogKHRhZyBrZXlzKScsXG4gICAgZGVzY3JpcHRpb246ICdHZXQgYSBsaXN0IG9mIHRhZyBrZXlzIHVzaW5nIGZsdXgnLFxuICAgIHZhbHVlOiBgaW1wb3J0IFwiaW5mbHV4ZGF0YS9pbmZsdXhkYi92MVwiXG52MS50YWdLZXlzKGJ1Y2tldDogdi5idWNrZXQpYCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnU2NoZW1hIEV4cGxvcmF0aW9uOiAodGFnIHZhbHVlcyknLFxuICAgIGRlc2NyaXB0aW9uOiAnR2V0IGEgbGlzdCBvZiB0YWcgdmFsdWVzIHVzaW5nIGZsdXgnLFxuICAgIHZhbHVlOiBgaW1wb3J0IFwiaW5mbHV4ZGF0YS9pbmZsdXhkYi92MVwiXG52MS50YWdWYWx1ZXMoXG4gICAgYnVja2V0OiB2LmJ1Y2tldCxcbiAgICB0YWc6IFwiaG9zdFwiLFxuICAgIHByZWRpY2F0ZTogKHIpID0+IHRydWUsXG4gICAgc3RhcnQ6IC0xZFxuKWAsXG4gIH0sXG5dO1xuXG5leHBvcnQgY2xhc3MgRmx1eFF1ZXJ5RWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBvbkZsdXhRdWVyeUNoYW5nZSA9IChxdWVyeTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IC4uLnRoaXMucHJvcHMucXVlcnksIHF1ZXJ5IH0pO1xuICAgIHRoaXMucHJvcHMub25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIG9uU2FtcGxlQ2hhbmdlID0gKHZhbDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIC4uLnRoaXMucHJvcHMucXVlcnksXG4gICAgICBxdWVyeTogdmFsLnZhbHVlISxcbiAgICB9KTtcblxuICAgIC8vIEFuZ3VsYXIgSEFDSzogU2luY2UgdGhlIHRhcmdldCBkb2VzIG5vdCBhY3R1YWxseSBjaGFuZ2UhXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIHRoaXMucHJvcHMub25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIGdldFN1Z2dlc3Rpb25zID0gKCk6IENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbVtdID0+IHtcbiAgICBjb25zdCBzdWdzOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1bXSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd2LnRpbWVSYW5nZVN0YXJ0JyxcbiAgICAgICAga2luZDogQ29kZUVkaXRvclN1Z2dlc3Rpb25JdGVtS2luZC5Qcm9wZXJ0eSxcbiAgICAgICAgZGV0YWlsOiAnVGhlIHN0YXJ0IHRpbWUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd2LnRpbWVSYW5nZVN0b3AnLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICBkZXRhaWw6ICdUaGUgc3RvcCB0aW1lJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAndi53aW5kb3dQZXJpb2QnLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICBkZXRhaWw6ICdiYXNlZCBvbiBtYXggZGF0YSBwb2ludHMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd2LmRlZmF1bHRCdWNrZXQnLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICBkZXRhaWw6ICdidWNrZXQgY29uZmlndXJlZCBpbiB0aGUgZGF0c291cmNlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAndi5vcmdhbml6YXRpb24nLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICBkZXRhaWw6ICdvcmcgY29uZmlndXJlZCBmb3IgdGhlIGRhdHNvdXJjZScsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCB0ZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCk7XG4gICAgdGVtcGxhdGVTcnYuZ2V0VmFyaWFibGVzKCkuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gJyR7JyArIHZhcmlhYmxlLm5hbWUgKyAnfSc7XG4gICAgICBsZXQgdmFsID0gdGVtcGxhdGVTcnYucmVwbGFjZShsYWJlbCk7XG4gICAgICBpZiAodmFsID09PSBsYWJlbCkge1xuICAgICAgICB2YWwgPSAnJztcbiAgICAgIH1cbiAgICAgIHN1Z3MucHVzaCh7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlRleHQsXG4gICAgICAgIGRldGFpbDogYChUZW1wbGF0ZSBWYXJpYWJsZSkgJHt2YWx9YCxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Z3M7XG4gIH07XG5cbiAgLy8gRm9yIHNvbWUgcmVhc29uIGluIGFuZ3VsYXIsIHdoZW4gdGhpcyBjb21wb25lbnQgZ2V0cyByZS1tb3VudGVkLCB0aGUgd2lkdGhcbiAgLy8gaXMgbm90IHNldCBwcm9wZXJseS4gIFRoaXMgZm9yY2VzIHRoZSBsYXlvdXQgc2hvcnRseSBhZnRlciBtb3VudCBzbyB0aGF0IGl0XG4gIC8vIGRpc3BsYXlzIE9LLiAgTm90ZTogdGhpcyBpcyBub3QgYW4gaXNzdWUgd2hlbiB1c2VkIGRpcmVjdGx5IGluIHJlYWN0XG4gIGVkaXRvckRpZE1vdW50Q2FsbGJhY2tIYWNrID0gKGVkaXRvcjogTW9uYWNvRWRpdG9yKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBlZGl0b3IubGF5b3V0KCksIDEwMCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBoZWxwVG9vbHRpcCA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIFR5cGU6IDxpPmN0cmwrc3BhY2U8L2k+IHRvIHNob3cgdGVtcGxhdGUgdmFyaWFibGUgc3VnZ2VzdGlvbnMgPGJyIC8+XG4gICAgICAgIE1hbnkgcXVlcmllcyBjYW4gYmUgY29waWVkIGZyb20gQ2hyb25vZ3JhZlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgIGhlaWdodD17JzIwMHB4J31cbiAgICAgICAgICBsYW5ndWFnZT1cInNxbFwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5LnF1ZXJ5IHx8ICcnfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkZsdXhRdWVyeUNoYW5nZX1cbiAgICAgICAgICBvblNhdmU9e3RoaXMub25GbHV4UXVlcnlDaGFuZ2V9XG4gICAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICAgIHNob3dMaW5lTnVtYmVycz17dHJ1ZX1cbiAgICAgICAgICBnZXRTdWdnZXN0aW9ucz17dGhpcy5nZXRTdWdnZXN0aW9uc31cbiAgICAgICAgICBvbkVkaXRvckRpZE1vdW50PXt0aGlzLmVkaXRvckRpZE1vdW50Q2FsbGJhY2tIYWNrfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICdnZi1mb3JtLWlubGluZScsXG4gICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgIGljb249XCJleHRlcm5hbC1saW5rLWFsdFwiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuaW5mbHV4ZGF0YS5jb20vaW5mbHV4ZGIvbGF0ZXN0L3F1ZXJ5LWRhdGEvZ2V0LXN0YXJ0ZWQvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBGbHV4IGxhbmd1YWdlIHN5bnRheFxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8U2VnbWVudCBvcHRpb25zPXtzYW1wbGVzfSB2YWx1ZT1cIlNhbXBsZSBRdWVyeVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2FtcGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgZ2YtZm9ybS1sYWJlbC0tZ3Jvd1wiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgd2lkdGg9ezV9IHRvb2x0aXA9e2hlbHBUb29sdGlwfT5cbiAgICAgICAgICAgIEhlbHBcbiAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDSEVBVF9TSEVFVF9JVEVNUyA9IFtcbiAge1xuICAgIHRpdGxlOiAnR2V0dGluZyBzdGFydGVkJyxcbiAgICBsYWJlbDpcbiAgICAgICdTdGFydCBieSBzZWxlY3RpbmcgYSBtZWFzdXJlbWVudCBhbmQgZmllbGQgZnJvbSB0aGUgZHJvcGRvd24gYWJvdmUuIFlvdSBjYW4gdGhlbiB1c2UgdGhlIHRhZyBzZWxlY3RvciB0byBmdXJ0aGVyIG5hcnJvdyB5b3VyIHNlYXJjaC4nLFxuICB9LFxuXTtcblxuY29uc3QgSW5mbHV4Q2hlYXRTaGVldCA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgyPkluZmx1eERCIENoZWF0IFNoZWV0PC9oMj5cbiAgICB7Q0hFQVRfU0hFRVRfSVRFTVMubWFwKChpdGVtKSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWF0LXNoZWV0LWl0ZW1cIiBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWF0LXNoZWV0LWl0ZW1fX3RpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlYXQtc2hlZXQtaXRlbV9fbGFiZWxcIj57aXRlbS5sYWJlbH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZmx1eENoZWF0U2hlZXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9ySGVscFByb3BzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgSW5mbHV4Q2hlYXRTaGVldCBmcm9tICcuL0luZmx1eENoZWF0U2hlZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZsdXhTdGFydFBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFF1ZXJ5RWRpdG9ySGVscFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEluZmx1eENoZWF0U2hlZXQgb25DbGlja0V4YW1wbGU9e3RoaXMucHJvcHMub25DbGlja0V4YW1wbGV9IC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEluZmx1eE9wdGlvbnMsIEluZmx1eFF1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IEluZmx1eERhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBGbHV4UXVlcnlFZGl0b3IgfSBmcm9tICcuL0ZsdXhRdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBSYXdJbmZsdXhRTEVkaXRvciB9IGZyb20gJy4vUmF3SW5mbHV4UUxFZGl0b3InO1xuaW1wb3J0IHsgRWRpdG9yIGFzIFZpc3VhbEluZmx1eFFMRWRpdG9yIH0gZnJvbSAnLi9WaXN1YWxJbmZsdXhRTEVkaXRvci9FZGl0b3InO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JNb2RlU3dpdGNoZXIgfSBmcm9tICcuL1F1ZXJ5RWRpdG9yTW9kZVN3aXRjaGVyJztcbmltcG9ydCB7IGJ1aWxkUmF3UXVlcnkgfSBmcm9tICcuLi9xdWVyeVV0aWxzJztcblxudHlwZSBQcm9wcyA9IFF1ZXJ5RWRpdG9yUHJvcHM8SW5mbHV4RGF0YXNvdXJjZSwgSW5mbHV4UXVlcnksIEluZmx1eE9wdGlvbnM+O1xuXG5leHBvcnQgY29uc3QgUXVlcnlFZGl0b3IgPSAoeyBxdWVyeSwgb25DaGFuZ2UsIG9uUnVuUXVlcnksIGRhdGFzb3VyY2UsIHJhbmdlLCBkYXRhIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBpZiAoZGF0YXNvdXJjZS5pc0ZsdXgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLXF1ZXJ5LWNvbnRlbnRcIj5cbiAgICAgICAgPEZsdXhRdWVyeUVkaXRvciBxdWVyeT17cXVlcnl9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gb25SdW5RdWVyeT17b25SdW5RdWVyeX0gZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyBkaXNwbGF5OiAnZmxleCcgfSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh7IGZsZXhHcm93OiAxIH0pfT5cbiAgICAgICAge3F1ZXJ5LnJhd1F1ZXJ5ID8gKFxuICAgICAgICAgIDxSYXdJbmZsdXhRTEVkaXRvciBxdWVyeT17cXVlcnl9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gb25SdW5RdWVyeT17b25SdW5RdWVyeX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VmlzdWFsSW5mbHV4UUxFZGl0b3IgcXVlcnk9e3F1ZXJ5fSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uUnVuUXVlcnk9e29uUnVuUXVlcnl9IGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxRdWVyeUVkaXRvck1vZGVTd2l0Y2hlclxuICAgICAgICBpc1Jhdz17cXVlcnkucmF3UXVlcnkgPz8gZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBxdWVyeTogYnVpbGRSYXdRdWVyeShxdWVyeSksIHJhd1F1ZXJ5OiB2YWx1ZSB9KTtcbiAgICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlzUmF3OiBib29sZWFuO1xuICBvbkNoYW5nZTogKG5ld0lzUmF3OiBib29sZWFuKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RWRpdG9yTW9kZVN3aXRjaGVyID0gKHsgaXNSYXcsIG9uQ2hhbmdlIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpZiB0aGUgaXNSYXcgY2hhbmdlcywgd2UgaGlkZSB0aGUgbW9kYWxcbiAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICB9LCBbaXNSYXddKTtcblxuICBpZiAoaXNSYXcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTd2l0Y2ggdG8gdmlzdWFsIGVkaXRvclwiXG4gICAgICAgICAgaWNvbj1cInBlblwiXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgLy8gd2Ugc2hvdyB0aGUgYXJlLXlvdS1zdXJlIG1vZGFsXG4gICAgICAgICAgICBzZXRNb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn1cbiAgICAgICAgICB0aXRsZT1cIlN3aXRjaCB0byB2aXN1YWwgZWRpdG9yIG1vZGVcIlxuICAgICAgICAgIGJvZHk9XCJBcmUgeW91IHN1cmUgdG8gc3dpdGNoIHRvIHZpc3VhbCBlZGl0b3IgbW9kZT8gWW91IHdpbGwgbG9zZSB0aGUgY2hhbmdlcyBkb25lIGluIHJhdyBxdWVyeSBtb2RlLlwiXG4gICAgICAgICAgY29uZmlybVRleHQ9XCJZZXMsIHN3aXRjaCB0byBlZGl0b3IgbW9kZVwiXG4gICAgICAgICAgZGlzbWlzc1RleHQ9XCJObywgc3RheSBpbiByYXcgcXVlcnkgbW9kZVwiXG4gICAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZShmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHtcbiAgICAgICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIlN3aXRjaCB0byB0ZXh0IGVkaXRvclwiXG4gICAgICAgIGljb249XCJwZW5cIlxuICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID48L0J1dHRvbj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHRBcmVhLCBJbmxpbmVGb3JtTGFiZWwsIElucHV0LCBTZWxlY3QsIEhvcml6b250YWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEluZmx1eFF1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlU2hhZG93ZWRTdGF0ZSB9IGZyb20gJy4vdXNlU2hhZG93ZWRTdGF0ZSc7XG5pbXBvcnQgeyB1c2VVbmlxdWVJZCB9IGZyb20gJy4vdXNlVW5pcXVlSWQnO1xuaW1wb3J0IHsgUkVTVUxUX0ZPUk1BVFMsIERFRkFVTFRfUkVTVUxUX0ZPUk1BVCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcXVlcnk6IEluZmx1eFF1ZXJ5O1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBJbmZsdXhRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyeTogKCkgPT4gdm9pZDtcbn07XG5cbi8vIHdlIGhhbmRsZSAzIGZpZWxkczogXCJxdWVyeVwiLCBcImFsaWFzXCIsIFwicmVzdWx0Rm9ybWF0XCJcbi8vIFwicmVzdWx0Rm9ybWF0XCIgY2hhbmdlcyBhcmUgYXBwbGllZCBpbW1lZGlhdGVseVxuLy8gXCJxdWVyeVwiIGFuZCBcImFsaWFzXCIgY2hhbmdlcyBvbmx5IGhhcHBlbiBvbiBvbmJsdXJcbmV4cG9ydCBjb25zdCBSYXdJbmZsdXhRTEVkaXRvciA9ICh7IHF1ZXJ5LCBvbkNoYW5nZSwgb25SdW5RdWVyeSB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW2N1cnJlbnRRdWVyeSwgc2V0Q3VycmVudFF1ZXJ5XSA9IHVzZVNoYWRvd2VkU3RhdGUocXVlcnkucXVlcnkpO1xuICBjb25zdCBbY3VycmVudEFsaWFzLCBzZXRDdXJyZW50QWxpYXNdID0gdXNlU2hhZG93ZWRTdGF0ZShxdWVyeS5hbGlhcyk7XG4gIGNvbnN0IGFsaWFzRWxlbWVudElkID0gdXNlVW5pcXVlSWQoKTtcbiAgY29uc3Qgc2VsZWN0RWxlbWVudElkID0gdXNlVW5pcXVlSWQoKTtcblxuICBjb25zdCByZXN1bHRGb3JtYXQgPSBxdWVyeS5yZXN1bHRGb3JtYXQgPz8gREVGQVVMVF9SRVNVTFRfRk9STUFUO1xuXG4gIGNvbnN0IGFwcGx5RGVsYXllZENoYW5nZXNBbmRSdW5RdWVyeSA9ICgpID0+IHtcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHF1ZXJ5OiBjdXJyZW50UXVlcnksXG4gICAgICBhbGlhczogY3VycmVudEFsaWFzLFxuICAgICAgcmVzdWx0Rm9ybWF0LFxuICAgIH0pO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGV4dEFyZWFcbiAgICAgICAgYXJpYS1sYWJlbD1cInF1ZXJ5XCJcbiAgICAgICAgcm93cz17M31cbiAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiSW5mbHV4REIgUXVlcnlcIlxuICAgICAgICBvbkJsdXI9e2FwcGx5RGVsYXllZENoYW5nZXNBbmRSdW5RdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudFF1ZXJ5KGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXtjdXJyZW50UXVlcnkgPz8gJyd9XG4gICAgICAvPlxuICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgPElubGluZUZvcm1MYWJlbCBodG1sRm9yPXtzZWxlY3RFbGVtZW50SWR9PkZvcm1hdCBhczwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgIGlucHV0SWQ9e3NlbGVjdEVsZW1lbnRJZH1cbiAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHJlc3VsdEZvcm1hdDogdi52YWx1ZSB9KTtcbiAgICAgICAgICAgIG9uUnVuUXVlcnkoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXtyZXN1bHRGb3JtYXR9XG4gICAgICAgICAgb3B0aW9ucz17UkVTVUxUX0ZPUk1BVFN9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgaHRtbEZvcj17YWxpYXNFbGVtZW50SWR9PkFsaWFzIGJ5PC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPXthbGlhc0VsZW1lbnRJZH1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1pbmcgcGF0dGVyblwiXG4gICAgICAgICAgb25CbHVyPXthcHBseURlbGF5ZWRDaGFuZ2VzQW5kUnVuUXVlcnl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRDdXJyZW50QWxpYXMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXtjdXJyZW50QWxpYXMgPz8gJyd9XG4gICAgICAgIC8+XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbmZsdXhEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgSW5saW5lRm9ybUxhYmVsLCBUZXh0QXJlYSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEZsdXhRdWVyeUVkaXRvciB9IGZyb20gJy4vRmx1eFF1ZXJ5RWRpdG9yJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlcnk6IHN0cmluZzsgLy8gYmVmb3JlIGZsdXgsIGl0IHdhcyBhbHdheXMgYSBzdHJpbmdcbiAgb25DaGFuZ2U6IChxdWVyeT86IHN0cmluZykgPT4gdm9pZDtcbiAgZGF0YXNvdXJjZTogSW5mbHV4RGF0YXNvdXJjZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGVRdWVyeUVkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgb25SZWZyZXNoID0gKCkgPT4ge1xuICAgIC8vIG5vb3BcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgcXVlcnksIGRhdGFzb3VyY2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChkYXRhc291cmNlLmlzRmx1eCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZsdXhRdWVyeUVkaXRvclxuICAgICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgICAgcXVlcnk9e3tcbiAgICAgICAgICAgIHJlZklkOiAnQScsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uUnVuUXVlcnk9e3RoaXMub25SZWZyZXNofVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gb25DaGFuZ2Uodi5xdWVyeSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgd2lkdGg9ezEwfT5RdWVyeTwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cXVlcnkgfHwgJyd9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1ldHJpYyBuYW1lIG9yIHRhZ3MgcXVlcnlcIlxuICAgICAgICAgICAgcm93cz17MX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4gb25DaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlZyB9IGZyb20gJy4vU2VnJztcbmltcG9ydCB7IHVud3JhcCB9IGZyb20gJy4vdW53cmFwJztcblxudHlwZSBQcm9wcyA9IHtcbiAgbG9hZE9wdGlvbnM6ICgpID0+IFByb21pc2U8U2VsZWN0YWJsZVZhbHVlW10+O1xuICBhbGxvd0N1c3RvbVZhbHVlPzogYm9vbGVhbjtcbiAgb25BZGQ6ICh2OiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQWRkQnV0dG9uID0gKHsgbG9hZE9wdGlvbnMsIGFsbG93Q3VzdG9tVmFsdWUsIG9uQWRkIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWdcbiAgICAgIHZhbHVlPVwiK1wiXG4gICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnN9XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlPXthbGxvd0N1c3RvbVZhbHVlfVxuICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgIG9uQWRkKHVud3JhcCh2LnZhbHVlKSk7XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeSwgSW5mbHV4UXVlcnlUYWcgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IEluZmx1eERhdGFzb3VyY2UgZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBGcm9tU2VjdGlvbiB9IGZyb20gJy4vRnJvbVNlY3Rpb24nO1xuaW1wb3J0IHsgVGFnc1NlY3Rpb24gfSBmcm9tICcuL1RhZ3NTZWN0aW9uJztcbmltcG9ydCB7IFBhcnRMaXN0U2VjdGlvbiB9IGZyb20gJy4vUGFydExpc3RTZWN0aW9uJztcbmltcG9ydCB7IE9yZGVyQnlUaW1lU2VjdGlvbiB9IGZyb20gJy4vT3JkZXJCeVRpbWVTZWN0aW9uJztcbmltcG9ydCB7IElucHV0U2VjdGlvbiB9IGZyb20gJy4vSW5wdXRTZWN0aW9uJztcbmltcG9ydCB7XG4gIGdldEFsbE1lYXN1cmVtZW50c0ZvclRhZ3MsXG4gIGdldEFsbFBvbGljaWVzLFxuICBnZXRGaWVsZEtleXNGb3JNZWFzdXJlbWVudCxcbiAgZ2V0VGFnS2V5c0Zvck1lYXN1cmVtZW50QW5kVGFncyxcbiAgZ2V0VGFnVmFsdWVzLFxufSBmcm9tICcuLi8uLi9pbmZsdXhRTE1ldGFkYXRhUXVlcnknO1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUXVlcnksXG4gIGFkZE5ld1NlbGVjdFBhcnQsXG4gIHJlbW92ZVNlbGVjdFBhcnQsXG4gIGFkZE5ld0dyb3VwQnlQYXJ0LFxuICByZW1vdmVHcm91cEJ5UGFydCxcbiAgY2hhbmdlU2VsZWN0UGFydCxcbiAgY2hhbmdlR3JvdXBCeVBhcnQsXG59IGZyb20gJy4uLy4uL3F1ZXJ5VXRpbHMnO1xuaW1wb3J0IHsgRm9ybWF0QXNTZWN0aW9uIH0gZnJvbSAnLi9Gb3JtYXRBc1NlY3Rpb24nO1xuaW1wb3J0IHsgREVGQVVMVF9SRVNVTFRfRk9STUFUIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5ld1NlbGVjdFBhcnRPcHRpb25zLCBnZXROZXdHcm91cEJ5UGFydE9wdGlvbnMsIG1ha2VQYXJ0TGlzdCB9IGZyb20gJy4vcGFydExpc3RVdGlscyc7XG5pbXBvcnQgeyBJbmxpbmVMYWJlbCwgU2VnbWVudFNlY3Rpb24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlVW5pcXVlSWQgfSBmcm9tICcuLi91c2VVbmlxdWVJZCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHF1ZXJ5OiBJbmZsdXhRdWVyeTtcbiAgb25DaGFuZ2U6IChxdWVyeTogSW5mbHV4UXVlcnkpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcnk6ICgpID0+IHZvaWQ7XG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2U7XG59O1xuXG5mdW5jdGlvbiBnZXRUZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucygpIHtcbiAgcmV0dXJuIChcbiAgICBnZXRUZW1wbGF0ZVNydigpXG4gICAgICAuZ2V0VmFyaWFibGVzKClcbiAgICAgIC8vIHdlIG1ha2UgdGhlbSByZWdleC1wYXJhbXMsIGknbSBub3QgMTAwJSBzdXJlIHdoeS5cbiAgICAgIC8vIHByb2JhYmx5IGJlY2F1c2UgdGhpcyB3YXkgbXVsdGktdmFsdWUgdmFyaWFibGVzIHdvcmsgb2sgdG9vLlxuICAgICAgLm1hcCgodikgPT4gYC9eJCR7di5uYW1lfSQvYClcbiAgKTtcbn1cblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIG1ha2UgaXQgZWFzeSB0byBjYWxsIHRoaXMgZnJvbSB0aGUgd2lkZ2V0LXJlbmRlci1jb2RlXG5mdW5jdGlvbiB3aXRoVGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMob3B0aW9uc1Byb21pc2U6IFByb21pc2U8c3RyaW5nW10+KTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICByZXR1cm4gb3B0aW9uc1Byb21pc2UudGhlbigob3B0aW9ucykgPT4gWy4uLmdldFRlbXBsYXRlVmFyaWFibGVPcHRpb25zKCksIC4uLm9wdGlvbnNdKTtcbn1cblxuLy8gaXQgaXMgcG9zc2libGUgdG8gYWRkIGZpZWxkcyBpbnRvIHRoZSBgSW5mbHV4UXVlcnlUYWdgIHN0cnVjdHVyZXMsIGFuZCB0aGV5IGRvIHdvcmssXG4vLyBidXQgaW4gc29tZSBjYXNlcywgd2hlbiB3ZSBkbyBtZXRhZGF0YSBxdWVyaWVzLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGVtIGZyb20gdGhlIHF1ZXJpZXMuXG5mdW5jdGlvbiBmaWx0ZXJUYWdzKHBhcnRzOiBJbmZsdXhRdWVyeVRhZ1tdLCBhbGxUYWdLZXlzOiBTZXQ8c3RyaW5nPik6IEluZmx1eFF1ZXJ5VGFnW10ge1xuICByZXR1cm4gcGFydHMuZmlsdGVyKCh0KSA9PiBhbGxUYWdLZXlzLmhhcyh0LmtleSkpO1xufVxuXG5leHBvcnQgY29uc3QgRWRpdG9yID0gKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgdW5pcXVlSWQgPSB1c2VVbmlxdWVJZCgpO1xuICBjb25zdCBmb3JtYXRBc0lkID0gYGluZmx1eGRiLXFlLWZvcm1hdC1hcy0ke3VuaXF1ZUlkfWA7XG4gIGNvbnN0IG9yZGVyQnlUaW1lSWQgPSBgaW5mbHV4ZGItcWUtb3JkZXItYnkke3VuaXF1ZUlkfWA7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBxdWVyeSA9IG5vcm1hbGl6ZVF1ZXJ5KHByb3BzLnF1ZXJ5KTtcbiAgY29uc3QgeyBkYXRhc291cmNlIH0gPSBwcm9wcztcbiAgY29uc3QgeyBtZWFzdXJlbWVudCwgcG9saWN5IH0gPSBxdWVyeTtcblxuICBjb25zdCBhbGxUYWdLZXlzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGdldFRhZ0tleXNGb3JNZWFzdXJlbWVudEFuZFRhZ3MobWVhc3VyZW1lbnQsIHBvbGljeSwgW10sIGRhdGFzb3VyY2UpLnRoZW4oKHRhZ3MpID0+IHtcbiAgICAgIHJldHVybiBuZXcgU2V0KHRhZ3MpO1xuICAgIH0pO1xuICB9LCBbbWVhc3VyZW1lbnQsIHBvbGljeSwgZGF0YXNvdXJjZV0pO1xuXG4gIGNvbnN0IHNlbGVjdExpc3RzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZHluYW1pY1NlbGVjdFBhcnRPcHRpb25zID0gbmV3IE1hcChbXG4gICAgICBbXG4gICAgICAgICdmaWVsZF8wJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBtZWFzdXJlbWVudCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGdldEZpZWxkS2V5c0Zvck1lYXN1cmVtZW50KG1lYXN1cmVtZW50LCBwb2xpY3ksIGRhdGFzb3VyY2UpXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIF0pO1xuICAgIHJldHVybiAocXVlcnkuc2VsZWN0ID8/IFtdKS5tYXAoKHNlbCkgPT4gbWFrZVBhcnRMaXN0KHNlbCwgZHluYW1pY1NlbGVjdFBhcnRPcHRpb25zKSk7XG4gIH0sIFttZWFzdXJlbWVudCwgcG9saWN5LCBxdWVyeS5zZWxlY3QsIGRhdGFzb3VyY2VdKTtcblxuICAvLyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uIGlzIG5vdCBjb21wbGljYXRlZCBlbm91Z2ggdG8gbWVtb2l6ZSwgYnV0IGl0J3MgcmVzdWx0XG4gIC8vIGlzIHVzZWQgaW4gYm90aCBtZW1vaXplZCBhbmQgdW4tbWVtb2l6ZWQgcGFydHMsIHNvIHdlIGhhdmUgbm8gY2hvaWNlXG4gIGNvbnN0IGdldFRhZ0tleXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT5cbiAgICAgIGFsbFRhZ0tleXMudGhlbigoa2V5cykgPT5cbiAgICAgICAgZ2V0VGFnS2V5c0Zvck1lYXN1cmVtZW50QW5kVGFncyhtZWFzdXJlbWVudCwgcG9saWN5LCBmaWx0ZXJUYWdzKHF1ZXJ5LnRhZ3MgPz8gW10sIGtleXMpLCBkYXRhc291cmNlKVxuICAgICAgKTtcbiAgfSwgW21lYXN1cmVtZW50LCBwb2xpY3ksIHF1ZXJ5LnRhZ3MsIGRhdGFzb3VyY2UsIGFsbFRhZ0tleXNdKTtcblxuICBjb25zdCBncm91cEJ5TGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cEJ5UGFydE9wdGlvbnMgPSBuZXcgTWFwKFtbJ3RhZ18wJywgZ2V0VGFnS2V5c11dKTtcblxuICAgIHJldHVybiBtYWtlUGFydExpc3QocXVlcnkuZ3JvdXBCeSA/PyBbXSwgZHluYW1pY0dyb3VwQnlQYXJ0T3B0aW9ucyk7XG4gIH0sIFtnZXRUYWdLZXlzLCBxdWVyeS5ncm91cEJ5XSk7XG5cbiAgY29uc3Qgb25BcHBsaWVkQ2hhbmdlID0gKG5ld1F1ZXJ5OiBJbmZsdXhRdWVyeSkgPT4ge1xuICAgIHByb3BzLm9uQ2hhbmdlKG5ld1F1ZXJ5KTtcbiAgICBwcm9wcy5vblJ1blF1ZXJ5KCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUZyb21TZWN0aW9uQ2hhbmdlID0gKHA6IHN0cmluZyB8IHVuZGVmaW5lZCwgbTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgb25BcHBsaWVkQ2hhbmdlKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgcG9saWN5OiBwLFxuICAgICAgbWVhc3VyZW1lbnQ6IG0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFnc1NlY3Rpb25DaGFuZ2UgPSAodGFnczogSW5mbHV4UXVlcnlUYWdbXSkgPT4ge1xuICAgIC8vIHdlIHNldCBlbXB0eS1hcnJheXMgdG8gdW5kZWZpbmVkXG4gICAgb25BcHBsaWVkQ2hhbmdlKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgdGFnczogdGFncy5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiB0YWdzLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZWdtZW50U2VjdGlvbiBsYWJlbD1cIkZST01cIiBmaWxsPXt0cnVlfT5cbiAgICAgICAgPEZyb21TZWN0aW9uXG4gICAgICAgICAgcG9saWN5PXtwb2xpY3l9XG4gICAgICAgICAgbWVhc3VyZW1lbnQ9e21lYXN1cmVtZW50fVxuICAgICAgICAgIGdldFBvbGljeU9wdGlvbnM9eygpID0+IGdldEFsbFBvbGljaWVzKGRhdGFzb3VyY2UpfVxuICAgICAgICAgIGdldE1lYXN1cmVtZW50T3B0aW9ucz17KGZpbHRlcikgPT5cbiAgICAgICAgICAgIHdpdGhUZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyhcbiAgICAgICAgICAgICAgYWxsVGFnS2V5cy50aGVuKChrZXlzKSA9PlxuICAgICAgICAgICAgICAgIGdldEFsbE1lYXN1cmVtZW50c0ZvclRhZ3MoXG4gICAgICAgICAgICAgICAgICBmaWx0ZXIgPT09ICcnID8gdW5kZWZpbmVkIDogZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyVGFncyhxdWVyeS50YWdzID8/IFtdLCBrZXlzKSxcbiAgICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZyb21TZWN0aW9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8SW5saW5lTGFiZWwgd2lkdGg9XCJhdXRvXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5saW5lTGFiZWx9PlxuICAgICAgICAgIFdIRVJFXG4gICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgIDxUYWdzU2VjdGlvblxuICAgICAgICAgIHRhZ3M9e3F1ZXJ5LnRhZ3MgPz8gW119XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhZ3NTZWN0aW9uQ2hhbmdlfVxuICAgICAgICAgIGdldFRhZ0tleU9wdGlvbnM9e2dldFRhZ0tleXN9XG4gICAgICAgICAgZ2V0VGFnVmFsdWVPcHRpb25zPXsoa2V5OiBzdHJpbmcpID0+XG4gICAgICAgICAgICB3aXRoVGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMoXG4gICAgICAgICAgICAgIGFsbFRhZ0tleXMudGhlbigoa2V5cykgPT5cbiAgICAgICAgICAgICAgICBnZXRUYWdWYWx1ZXMoa2V5LCBtZWFzdXJlbWVudCwgcG9saWN5LCBmaWx0ZXJUYWdzKHF1ZXJ5LnRhZ3MgPz8gW10sIGtleXMpLCBkYXRhc291cmNlKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9TZWdtZW50U2VjdGlvbj5cbiAgICAgIHtzZWxlY3RMaXN0cy5tYXAoKHNlbCwgaW5kZXgpID0+IChcbiAgICAgICAgPFNlZ21lbnRTZWN0aW9uIGtleT17aW5kZXh9IGxhYmVsPXtpbmRleCA9PT0gMCA/ICdTRUxFQ1QnIDogJyd9IGZpbGw9e3RydWV9PlxuICAgICAgICAgIDxQYXJ0TGlzdFNlY3Rpb25cbiAgICAgICAgICAgIHBhcnRzPXtzZWx9XG4gICAgICAgICAgICBnZXROZXdQYXJ0T3B0aW9ucz17KCkgPT4gUHJvbWlzZS5yZXNvbHZlKGdldE5ld1NlbGVjdFBhcnRPcHRpb25zKCkpfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhwYXJ0SW5kZXgsIG5ld1BhcmFtcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdRdWVyeSA9IGNoYW5nZVNlbGVjdFBhcnQocXVlcnksIGluZGV4LCBwYXJ0SW5kZXgsIG5ld1BhcmFtcyk7XG4gICAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZShuZXdRdWVyeSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25BZGROZXdQYXJ0PXsodHlwZSkgPT4ge1xuICAgICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoYWRkTmV3U2VsZWN0UGFydChxdWVyeSwgdHlwZSwgaW5kZXgpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblJlbW92ZVBhcnQ9eyhwYXJ0SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHJlbW92ZVNlbGVjdFBhcnQocXVlcnksIHBhcnRJbmRleCwgaW5kZXgpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWdtZW50U2VjdGlvbj5cbiAgICAgICkpfVxuICAgICAgPFNlZ21lbnRTZWN0aW9uIGxhYmVsPVwiR1JPVVAgQllcIiBmaWxsPXt0cnVlfT5cbiAgICAgICAgPFBhcnRMaXN0U2VjdGlvblxuICAgICAgICAgIHBhcnRzPXtncm91cEJ5TGlzdH1cbiAgICAgICAgICBnZXROZXdQYXJ0T3B0aW9ucz17KCkgPT4gZ2V0TmV3R3JvdXBCeVBhcnRPcHRpb25zKHF1ZXJ5LCBnZXRUYWdLZXlzKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHBhcnRJbmRleCwgbmV3UGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdRdWVyeSA9IGNoYW5nZUdyb3VwQnlQYXJ0KHF1ZXJ5LCBwYXJ0SW5kZXgsIG5ld1BhcmFtcyk7XG4gICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UobmV3UXVlcnkpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25BZGROZXdQYXJ0PXsodHlwZSkgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKGFkZE5ld0dyb3VwQnlQYXJ0KHF1ZXJ5LCB0eXBlKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlbW92ZVBhcnQ9eyhwYXJ0SW5kZXgpID0+IHtcbiAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZShyZW1vdmVHcm91cEJ5UGFydChxdWVyeSwgcGFydEluZGV4KSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VnbWVudFNlY3Rpb24+XG4gICAgICA8U2VnbWVudFNlY3Rpb24gbGFiZWw9XCJUSU1FWk9ORVwiIGZpbGw9e3RydWV9PlxuICAgICAgICA8SW5wdXRTZWN0aW9uXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIob3B0aW9uYWwpXCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkudHp9XG4gICAgICAgICAgb25DaGFuZ2U9eyh0eikgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHsgLi4ucXVlcnksIHR6IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxJbmxpbmVMYWJlbCBodG1sRm9yPXtvcmRlckJ5VGltZUlkfSB3aWR0aD1cImF1dG9cIiBjbGFzc05hbWU9e3N0eWxlcy5pbmxpbmVMYWJlbH0+XG4gICAgICAgICAgT1JERVIgQlkgVElNRVxuICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICA8T3JkZXJCeVRpbWVTZWN0aW9uXG4gICAgICAgICAgaW5wdXRJZD17b3JkZXJCeVRpbWVJZH1cbiAgICAgICAgICB2YWx1ZT17cXVlcnkub3JkZXJCeVRpbWUgPT09ICdERVNDJyA/ICdERVNDJyA6ICdBU0MnIC8qIEZJWE1FOiBtYWtlIHRoaXMgc2hhcmVkIHdpdGggaW5mbHV4X3F1ZXJ5X21vZGVsICovfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHsgLi4ucXVlcnksIG9yZGVyQnlUaW1lOiB2IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlZ21lbnRTZWN0aW9uPlxuICAgICAgey8qIHF1ZXJ5LmZpbGwgaXMgaWdub3JlZCBpbiB0aGUgcXVlcnktZWRpdG9yLCBhbmQgaXQgaXMgZGVsZXRlZCB3aGVuZXZlclxuICAgICAgICAgIHF1ZXJ5LWVkaXRvciBjaGFuZ2VzLiB0aGUgaW5mbHV4X3F1ZXJ5X21vZGVsIHN0aWxsIGhhbmRsZXMgaXQsIGJ1dCB0aGUgbmV3XG4gICAgICAgICAgYXBwcm9hY2ggc2VlbSB0byBiZSB0byBoYW5kbGUgXCJmaWxsXCIgaW5zaWRlIHF1ZXJ5Lmdyb3VwQnkuIHNvLCBpZiB5b3VcbiAgICAgICAgICBoYXZlIGEgcGFuZWwgd2hlcmUgaW4gdGhlIGpzb24geW91IGhhdmUgcXVlcnkuZmlsbCwgaXQgd2lsbCBiZSBhcHBsaWVkLFxuICAgICAgICAgIGFzIGxvbmcgYXMgeW91IGRvIG5vdCBlZGl0IHRoYXQgcXVlcnkuICovfVxuICAgICAgPFNlZ21lbnRTZWN0aW9uIGxhYmVsPVwiTElNSVRcIiBmaWxsPXt0cnVlfT5cbiAgICAgICAgPElucHV0U2VjdGlvblxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKG9wdGlvbmFsKVwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5LmxpbWl0Py50b1N0cmluZygpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsobGltaXQpID0+IHtcbiAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZSh7IC4uLnF1ZXJ5LCBsaW1pdCB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8SW5saW5lTGFiZWwgd2lkdGg9XCJhdXRvXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5saW5lTGFiZWx9PlxuICAgICAgICAgIFNMSU1JVFxuICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICA8SW5wdXRTZWN0aW9uXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIob3B0aW9uYWwpXCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkuc2xpbWl0Py50b1N0cmluZygpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2xpbWl0KSA9PiB7XG4gICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoeyAuLi5xdWVyeSwgc2xpbWl0IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlZ21lbnRTZWN0aW9uPlxuICAgICAgPFNlZ21lbnRTZWN0aW9uIGh0bWxGb3I9e2Zvcm1hdEFzSWR9IGxhYmVsPVwiRk9STUFUIEFTXCIgZmlsbD17dHJ1ZX0+XG4gICAgICAgIDxGb3JtYXRBc1NlY3Rpb25cbiAgICAgICAgICBpbnB1dElkPXtmb3JtYXRBc0lkfVxuICAgICAgICAgIGZvcm1hdD17cXVlcnkucmVzdWx0Rm9ybWF0ID8/IERFRkFVTFRfUkVTVUxUX0ZPUk1BVH1cbiAgICAgICAgICBvbkNoYW5nZT17KGZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHsgLi4ucXVlcnksIHJlc3VsdEZvcm1hdDogZm9ybWF0IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHtxdWVyeS5yZXN1bHRGb3JtYXQgIT09ICd0YWJsZScgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SW5saW5lTGFiZWwgd2lkdGg9XCJhdXRvXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5saW5lTGFiZWx9PlxuICAgICAgICAgICAgICBBTElBU1xuICAgICAgICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFNlY3Rpb25cbiAgICAgICAgICAgICAgaXNXaWRlXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtaW5nIHBhdHRlcm5cIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkuYWxpYXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoYWxpYXMpID0+IHtcbiAgICAgICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoeyAuLi5xdWVyeSwgYWxpYXMgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9TZWdtZW50U2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGlubGluZUxhYmVsOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeS50ZXh0fTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgUmVzdWx0Rm9ybWF0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVud3JhcCB9IGZyb20gJy4vdW53cmFwJztcbmltcG9ydCB7IFJFU1VMVF9GT1JNQVRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHBhZGRpbmdSaWdodENsYXNzIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBpbnB1dElkPzogc3RyaW5nO1xuICBmb3JtYXQ6IFJlc3VsdEZvcm1hdDtcbiAgb25DaGFuZ2U6IChuZXdGb3JtYXQ6IFJlc3VsdEZvcm1hdCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZSA9IGN4KCd3aWR0aC04JywgcGFkZGluZ1JpZ2h0Q2xhc3MpO1xuXG5leHBvcnQgY29uc3QgRm9ybWF0QXNTZWN0aW9uID0gKHsgZm9ybWF0LCBpbnB1dElkLCBvbkNoYW5nZSB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0PFJlc3VsdEZvcm1hdD5cbiAgICAgIGlucHV0SWQ9e2lucHV0SWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICBvbkNoYW5nZSh1bndyYXAodi52YWx1ZSkpO1xuICAgICAgfX1cbiAgICAgIHZhbHVlPXtmb3JtYXR9XG4gICAgICBvcHRpb25zPXtSRVNVTFRfRk9STUFUU31cbiAgICAvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWcgfSBmcm9tICcuL1NlZyc7XG5pbXBvcnQgeyB0b1NlbGVjdGFibGVWYWx1ZSB9IGZyb20gJy4vdG9TZWxlY3RhYmxlVmFsdWUnO1xuXG5jb25zdCBERUZBVUxUX1BPTElDWSA9ICdkZWZhdWx0JztcblxuLy8gd2UgdXNlIHRoZSB2YWx1ZSBcImRlZmF1bHRcIiBhcyBhIG1hZ2ljLXZhbHVlLCBpdCBtZWFuc1xuLy8gd2UgdXNlIHRoZSBkZWZhdWx0IHJldGVudGlvbi1wb2xpY3kuXG4vLyB1bmZvcnR1bmF0ZWx5LCBJRiB0aGUgdXNlciBoYXMgYSByZXRlbnRpb24tcG9saWN5IG5hbWVkIFwiZGVmYXVsdFwiLFxuLy8gYW5kIGl0IGlzIG5vdCB0aGUgZGVmYXVsdC1yZXRlbnRpb24tcG9saWN5IGluIGluZmx1eGRiLFxuLy8gYmFkIHRoaW5ncyB3aWxsIGhhcHBlbi5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFmYW5hL2dyYWZhbmEvaXNzdWVzLzQzNDcgOi0oXG4vLyBGSVhNRTogd2UgY291bGQgbWF5YmUgYXQgbGVhc3QgZGV0ZWN0IGhlcmUgdGhhdCBwcm9ibGVtLWlzLWhhcHBlbmluZyxcbi8vIGFuZCBzaG93IGFuIGVycm9yIG1lc3NhZ2Ugb3Igc29tZXRoaW5nLlxuLy8gdW5mb3J0dW5hdGVseSwgY3VycmVudGx5IHRoZSBSZXNwb25zZVBhcnNlciBkb2VzIG5vdCByZXR1cm4gdGhlXG4vLyBpcy1kZWZhdWx0IGluZm8gZm9yIHRoZSByZXRlbnRpb24tcG9saWNpZXMsIHNvIHRoYXQgc2hvdWxkIGNoYW5nZSBmaXJzdC5cblxudHlwZSBQcm9wcyA9IHtcbiAgb25DaGFuZ2U6IChwb2xpY3k6IHN0cmluZyB8IHVuZGVmaW5lZCwgbWVhc3VyZW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbiAgcG9saWN5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1lYXN1cmVtZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGdldFBvbGljeU9wdGlvbnM6ICgpID0+IFByb21pc2U8c3RyaW5nW10+O1xuICBnZXRNZWFzdXJlbWVudE9wdGlvbnM6IChmaWx0ZXI6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG59O1xuXG5leHBvcnQgY29uc3QgRnJvbVNlY3Rpb24gPSAoe1xuICBwb2xpY3ksXG4gIG1lYXN1cmVtZW50LFxuICBvbkNoYW5nZSxcbiAgZ2V0UG9saWN5T3B0aW9ucyxcbiAgZ2V0TWVhc3VyZW1lbnRPcHRpb25zLFxufTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IGhhbmRsZVBvbGljeUxvYWRPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFsbFBvbGljaWVzID0gYXdhaXQgZ2V0UG9saWN5T3B0aW9ucygpO1xuICAgIC8vIGlmIGBkZWZhdWx0YCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgbGlzdCBvZiBwb2xpY2llcywgd2UgYWRkIGl0XG4gICAgY29uc3QgYWxsUG9saWNpZXNXaXRoRGVmYXVsdCA9IGFsbFBvbGljaWVzLnNvbWUoKHApID0+IHAgPT09ICdkZWZhdWx0JylcbiAgICAgID8gYWxsUG9saWNpZXNcbiAgICAgIDogW0RFRkFVTFRfUE9MSUNZLCAuLi5hbGxQb2xpY2llc107XG5cbiAgICByZXR1cm4gYWxsUG9saWNpZXNXaXRoRGVmYXVsdC5tYXAodG9TZWxlY3RhYmxlVmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1lYXN1cmVtZW50TG9hZE9wdGlvbnMgPSBhc3luYyAoZmlsdGVyOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbGxNZWFzdXJlbWVudHMgPSBhd2FpdCBnZXRNZWFzdXJlbWVudE9wdGlvbnMoZmlsdGVyKTtcbiAgICByZXR1cm4gYWxsTWVhc3VyZW1lbnRzLm1hcCh0b1NlbGVjdGFibGVWYWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlZ1xuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIHZhbHVlPXtwb2xpY3kgPz8gJ3VzaW5nIGRlZmF1bHQgcG9saWN5J31cbiAgICAgICAgbG9hZE9wdGlvbnM9e2hhbmRsZVBvbGljeUxvYWRPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh2LnZhbHVlLCBtZWFzdXJlbWVudCk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFNlZ1xuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIHZhbHVlPXttZWFzdXJlbWVudCA/PyAnc2VsZWN0IG1lYXN1cmVtZW50J31cbiAgICAgICAgbG9hZE9wdGlvbnM9e2hhbmRsZU1lYXN1cmVtZW50TG9hZE9wdGlvbnN9XG4gICAgICAgIGZpbHRlckJ5TG9hZE9wdGlvbnNcbiAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UocG9saWN5LCB2LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlU2hhZG93ZWRTdGF0ZSB9IGZyb20gJy4uL3VzZVNoYWRvd2VkU3RhdGUnO1xuaW1wb3J0IHsgcGFkZGluZ1JpZ2h0Q2xhc3MgfSBmcm9tICcuL3N0eWxlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbiAgaXNXaWRlPzogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgSW5wdXRTZWN0aW9uID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBpc1dpZGUsIHBsYWNlaG9sZGVyIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbY3VycmVudFZhbHVlLCBzZXRDdXJyZW50VmFsdWVdID0gdXNlU2hhZG93ZWRTdGF0ZSh2YWx1ZSk7XG5cbiAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgIC8vIHdlIHNlbmQgZW1wdHktc3RyaW5nIGFzIHVuZGVmaW5lZFxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6IGN1cnJlbnRWYWx1ZTtcbiAgICBvbkNoYW5nZShuZXdWYWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtjeChpc1dpZGUgPz8gZmFsc2UgPyAnd2lkdGgtMTQnIDogJ3dpZHRoLTgnLCBwYWRkaW5nUmlnaHRDbGFzcyl9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBzZXRDdXJyZW50VmFsdWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e2N1cnJlbnRWYWx1ZSA/PyAnJ31cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdW53cmFwIH0gZnJvbSAnLi91bndyYXAnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgcGFkZGluZ1JpZ2h0Q2xhc3MgfSBmcm9tICcuL3N0eWxlcyc7XG5cbnR5cGUgTW9kZSA9ICdBU0MnIHwgJ0RFU0MnO1xuXG5jb25zdCBPUFRJT05TOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8TW9kZT4+ID0gW1xuICB7IGxhYmVsOiAnYXNjZW5kaW5nJywgdmFsdWU6ICdBU0MnIH0sXG4gIHsgbGFiZWw6ICdkZXNjZW5kaW5nJywgdmFsdWU6ICdERVNDJyB9LFxuXTtcblxuY29uc3QgY2xhc3NOYW1lID0gY3goJ3dpZHRoLTknLCBwYWRkaW5nUmlnaHRDbGFzcyk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZhbHVlOiBNb2RlO1xuICBvbkNoYW5nZTogKHZhbHVlOiBNb2RlKSA9PiB2b2lkO1xuICBpbnB1dElkPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IE9yZGVyQnlUaW1lU2VjdGlvbiA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgaW5wdXRJZCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbGVjdDxNb2RlPlxuICAgICAgICBpbnB1dElkPXtpbnB1dElkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UodW53cmFwKHYudmFsdWUpKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvcHRpb25zPXtPUFRJT05TfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgTWVudUl0ZW0sIFdpdGhDb250ZXh0TWVudSwgTWVudUdyb3VwLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUsIEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlZyB9IGZyb20gJy4vU2VnJztcbmltcG9ydCB7IHVud3JhcCB9IGZyb20gJy4vdW53cmFwJztcbmltcG9ydCB7IHRvU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnLi90b1NlbGVjdGFibGVWYWx1ZSc7XG5pbXBvcnQgeyBBZGRCdXR0b24gfSBmcm9tICcuL0FkZEJ1dHRvbic7XG5cbmV4cG9ydCB0eXBlIFBhcnRQYXJhbXMgPSBBcnJheTx7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9wdGlvbnM6ICgoKSA9PiBQcm9taXNlPHN0cmluZ1tdPikgfCBudWxsO1xufT47XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhcnRzOiBBcnJheTx7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBhcmFtczogUGFydFBhcmFtcztcbiAgfT47XG4gIGdldE5ld1BhcnRPcHRpb25zOiAoKSA9PiBQcm9taXNlPFNlbGVjdGFibGVWYWx1ZVtdPjtcbiAgb25DaGFuZ2U6IChwYXJ0SW5kZXg6IG51bWJlciwgcGFyYW1WYWx1ZXM6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICBvblJlbW92ZVBhcnQ6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkFkZE5ld1BhcnQ6ICh0eXBlOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5jb25zdCByZW5kZXJSZW1vdmFibGVOYW1lTWVudUl0ZW1zID0gKG9uQ2xpY2s6ICgpID0+IHZvaWQpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWVudUdyb3VwIGxhYmVsPVwiXCI+XG4gICAgICA8TWVudUl0ZW0gbGFiZWw9XCJyZW1vdmVcIiBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuICAgIDwvTWVudUdyb3VwPlxuICApO1xufTtcblxuY29uc3Qgbm9SaWdodE1hcmdpblBhZGRpbmdDbGFzcyA9IGNzcyh7XG4gIHBhZGRpbmdSaWdodDogJzAnLFxuICBtYXJnaW5SaWdodDogJzAnLFxufSk7XG5cbmNvbnN0IFJlbW92YWJsZU5hbWUgPSAoeyBuYW1lLCBvblJlbW92ZSB9OiB7IG5hbWU6IHN0cmluZzsgb25SZW1vdmU6ICgpID0+IHZvaWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXaXRoQ29udGV4dE1lbnUgcmVuZGVyTWVudUl0ZW1zPXsoKSA9PiByZW5kZXJSZW1vdmFibGVOYW1lTWVudUl0ZW1zKG9uUmVtb3ZlKX0+XG4gICAgICB7KHsgb3Blbk1lbnUgfSkgPT4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goJ2dmLWZvcm0tbGFiZWwnLCBub1JpZ2h0TWFyZ2luUGFkZGluZ0NsYXNzKX0gb25DbGljaz17b3Blbk1lbnV9PlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9XaXRoQ29udGV4dE1lbnU+XG4gICk7XG59O1xuXG50eXBlIFBhcnRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXJhbXM6IFBhcnRQYXJhbXM7XG4gIG9uUmVtb3ZlOiAoKSA9PiB2b2lkO1xuICBvbkNoYW5nZTogKHBhcmFtVmFsdWVzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IG5vSG9yaXpNYXJnaW5QYWRkaW5nQ2xhc3MgPSBjc3Moe1xuICBwYWRkaW5nTGVmdDogJzAnLFxuICBwYWRkaW5nUmlnaHQ6ICcwJyxcbiAgbWFyZ2luTGVmdDogJzAnLFxuICBtYXJnaW5SaWdodDogJzAnLFxufSk7XG5cbmNvbnN0IGdldFBhcnRDbGFzcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4gY3goXG4gICAgJ2dmLWZvcm0tbGFiZWwnLFxuICAgIGNzcyh7XG4gICAgICBwYWRkaW5nTGVmdDogJzAnLFxuICAgICAgLy8gZ2YtZm9ybS1sYWJlbCBjbGFzcyBtYWtlcyBjZXJ0YWluIGNzcyBhdHRyaWJ1dGVzIGluY29ycmVjdFxuICAgICAgLy8gZm9yIHRoZSBzZWxlY3Rib3gtZHJvcGRvd24sIHNvIHdlIGhhdmUgdG8gXCJyZXNldFwiIHRoZW0gYmFja1xuICAgICAgbGluZUhlaWdodDogdGhlbWUudHlwb2dyYXBoeS5ib2R5LmxpbmVIZWlnaHQsXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5ib2R5LmZvbnRTaXplLFxuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBQYXJ0ID0gKHsgbmFtZSwgcGFyYW1zLCBvbkNoYW5nZSwgb25SZW1vdmUgfTogUGFydFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBwYXJ0Q2xhc3MgPSB1c2VNZW1vKCgpID0+IGdldFBhcnRDbGFzcyh0aGVtZSksIFt0aGVtZV0pO1xuXG4gIGNvbnN0IG9uUGFyYW1DaGFuZ2UgPSAocGFyOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHBhcmFtcy5tYXAoKHApID0+IHAudmFsdWUpO1xuICAgIG5ld1BhcmFtc1tpXSA9IHBhcjtcbiAgICBvbkNoYW5nZShuZXdQYXJhbXMpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtwYXJ0Q2xhc3N9PlxuICAgICAgPFJlbW92YWJsZU5hbWUgbmFtZT17bmFtZX0gb25SZW1vdmU9e29uUmVtb3ZlfSAvPihcbiAgICAgIHtwYXJhbXMubWFwKChwLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG9wdGlvbnMgfSA9IHA7XG4gICAgICAgIGNvbnN0IGlzTGFzdCA9IGkgPT09IHBhcmFtcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBsb2FkT3B0aW9ucyA9XG4gICAgICAgICAgb3B0aW9ucyAhPT0gbnVsbCA/ICgpID0+IG9wdGlvbnMoKS50aGVuKChpdGVtcykgPT4gaXRlbXMubWFwKHRvU2VsZWN0YWJsZVZhbHVlKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICA8U2VnXG4gICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBidXR0b25DbGFzc05hbWU9e25vSG9yaXpNYXJnaW5QYWRkaW5nQ2xhc3N9XG4gICAgICAgICAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICAgICAgb25QYXJhbUNoYW5nZSh1bndyYXAodi52YWx1ZSksIGkpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaXNMYXN0ICYmICcsJ31cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICApXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGFydExpc3RTZWN0aW9uID0gKHtcbiAgcGFydHMsXG4gIGdldE5ld1BhcnRPcHRpb25zLFxuICBvbkFkZE5ld1BhcnQsXG4gIG9uUmVtb3ZlUGFydCxcbiAgb25DaGFuZ2UsXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3BhcnRzLm1hcCgocGFydCwgaW5kZXgpID0+IChcbiAgICAgICAgPFBhcnRcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIG5hbWU9e3BhcnQubmFtZX1cbiAgICAgICAgICBwYXJhbXM9e3BhcnQucGFyYW1zfVxuICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICBvblJlbW92ZVBhcnQoaW5kZXgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DaGFuZ2U9eyhwYXJzKSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZShpbmRleCwgcGFycyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAgPEFkZEJ1dHRvbiBsb2FkT3B0aW9ucz17Z2V0TmV3UGFydE9wdGlvbnN9IG9uQWRkPXtvbkFkZE5ld1BhcnR9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVib3VuY2VQcm9taXNlIGZyb20gJ2RlYm91bmNlLXByb21pc2UnO1xuaW1wb3J0IHsgY3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZUFzeW5jRm4gfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgSW5saW5lTGFiZWwsIFNlbGVjdCwgQXN5bmNTZWxlY3QsIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlU2hhZG93ZWRTdGF0ZSB9IGZyb20gJy4uL3VzZVNoYWRvd2VkU3RhdGUnO1xuXG4vLyB0aGlzIGZpbGUgaXMgYSBzaW1wbGVyIHZlcnNpb24gb2YgYGdyYWZhbmEtdWkgLyBTZWdtZW50QXN5bmMudHN4YFxuLy8gd2l0aCBzb21lIGNoYW5nZXM6XG4vLyAxLiBjbGljay1vdXRzaWRlIGRvZXMgbm90IHNlbGVjdCB0aGUgdmFsdWUuIGkgdGhpbmsgaXQncyBiZXR0ZXIgdG8gYmUgZXhwbGljaXQgaGVyZS5cbi8vIDIuIHdlIHNldCBhIG1pbi13aWR0aCBvbiB0aGUgc2VsZWN0LWVsZW1lbnQgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBgdmFsdWVgXG4vLyAgICBpcyB2ZXJ5IHNob3J0LCBsaWtlIFwieFwiLCBhbmQgdGhlbiB5b3UgY2xpY2sgb24gaXQgYW5kIHRoZSBzZWxlY3Qgb3BlbnMsXG4vLyAgICBhbmQgaXQgdHJpZXMgdG8gYmUgYXMgc2hvcnQgYXMgXCJ4XCIgYW5kIGl0IGRvZXMgbm90IHdvcmsgd2VsbC5cblxuLy8gTk9URTogbWF5YmUgdGhlc2UgY2hhbmdlcyBjb3VsZCBiZSBtaWdyYXRlZCBpbnRvIHRoZSBTZWdtZW50QXN5bmMgbGF0ZXJcblxudHlwZSBTZWxWYWwgPSBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPjtcblxuLy8gd2hlbiBhbGxvd0N1c3RvbVZhbHVlIGlzIHRydWUsIHRoZXJlIGlzIG5vIHdheSB0byBlbmZvcmNlIHRoZSBzZWxlY3RhYmxlVmFsdWVcbi8vIGVudW0tdHlwZSwgc28gaSBqdXN0IGdvIHdpdGggYHN0cmluZ2BcblxudHlwZSBMb2FkT3B0aW9ucyA9IChmaWx0ZXI6IHN0cmluZykgPT4gUHJvbWlzZTxTZWxWYWxbXT47XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGJ1dHRvbkNsYXNzTmFtZT86IHN0cmluZztcbiAgbG9hZE9wdGlvbnM/OiBMb2FkT3B0aW9ucztcbiAgLy8gaWYgZmlsdGVyQnlMb2FkT3B0aW9ucyBpcyBmYWxzZSxcbiAgLy8gbG9hZE9wdGlvbnMgaXMgb25seSBleGVjdXRlZCBvbmNlLFxuICAvLyB3aGVuIHRoZSBzZWxlY3QtYm94IG9wZW5zLFxuICAvLyBhbmQgYXMgeW91IHdyaXRlLCB0aGUgbGlzdCBnZXRzIGZpbHRlcmVkXG4gIC8vIGJ5IHRoZSBzZWxlY3QtYm94LlxuICAvLyBpZiBmaWx0ZXJCeUxvYWRPcHRpb25zIGlzIHRydWUsXG4gIC8vIGFzIHlvdSB3cml0ZSB0aGUgbG9hZE9wdGlvbnMgaXMgZXhlY3V0ZWQgYWdhaW4gYW5kIGFnYWluLFxuICAvLyBhbmQgaXQgaXMgcmVsaWVkIG9uIHRvIGZpbHRlciB0aGUgcmVzdWx0cy5cbiAgZmlsdGVyQnlMb2FkT3B0aW9ucz86IGJvb2xlYW47XG4gIG9uQ2hhbmdlOiAodjogU2VsVmFsKSA9PiB2b2lkO1xuICBhbGxvd0N1c3RvbVZhbHVlPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IHNlbGVjdENsYXNzID0gY3NzKHtcbiAgbWluV2lkdGg6ICcxNjBweCcsXG59KTtcblxudHlwZSBTZWxQcm9wcyA9IHtcbiAgbG9hZE9wdGlvbnM6IExvYWRPcHRpb25zO1xuICBmaWx0ZXJCeUxvYWRPcHRpb25zPzogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25DaGFuZ2U6ICh2OiBTZWxWYWwpID0+IHZvaWQ7XG4gIGFsbG93Q3VzdG9tVmFsdWU/OiBib29sZWFuO1xufTtcblxudHlwZSBTZWxSZWxvYWRQcm9wcyA9IHtcbiAgbG9hZE9wdGlvbnM6IChmaWx0ZXI6IHN0cmluZykgPT4gUHJvbWlzZTxTZWxWYWxbXT47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlOiAodjogU2VsVmFsKSA9PiB2b2lkO1xuICBhbGxvd0N1c3RvbVZhbHVlPzogYm9vbGVhbjtcbn07XG5cbi8vIHdoZW4gYSBjdXN0b20gdmFsdWUgaXMgd3JpdHRlbiBpbnRvIGEgc2VsZWN0LWJveCxcbi8vIGJ5IGRlZmF1bHQgdGhlIG5ldyB2YWx1ZSBpcyBwcmVmaXhlZCB3aXRoIFwiQ3JlYXRlOlwiLFxuLy8gYW5kIHRoYXQgc291bmRzIGNvbmZ1c2luZyBiZWNhdXNlIGhlcmUgd2UgZG8gbm90IGNyZWF0ZVxuLy8gYW55dGhpbmcuIHdlIGNoYW5nZSB0aGlzIHRvIGp1c3QgYmUgdGhlIGVudGVyZWQgc3RyaW5nLlxuY29uc3QgZm9ybWF0Q3JlYXRlTGFiZWwgPSAodjogc3RyaW5nKSA9PiB2O1xuXG5jb25zdCBTZWxSZWxvYWQgPSAoeyBsb2FkT3B0aW9ucywgYWxsb3dDdXN0b21WYWx1ZSwgb25DaGFuZ2UsIG9uQ2xvc2UgfTogU2VsUmVsb2FkUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIC8vIGhlcmUgd2UgcmVseSBvbiB0aGUgZmFjdCB0aGF0IHdyaXRpbmcgdGV4dCBpbnRvIHRoZSA8QXN5bmNTZWxlY3QvPlxuICAvLyBkb2VzIG5vdCBjYXVzZSBhIHJlLXJlbmRlciBvZiB0aGUgY3VycmVudCByZWFjdCBjb21wb25lbnQuXG4gIC8vIHRoaXMgd2F5IHRoZXJlIGlzIG9ubHkgYSBzaW5nbGUgcmVuZGVyLWNhbGwsXG4gIC8vIHNvIHRoZXJlIGlzIG9ubHkgYSBzaW5nbGUgYGRlYm91bmNlZExvYWRPcHRpb25zYC5cbiAgLy8gaWYgd2Ugd2FudCBvdCBtYWtlIHRoaXMgXCJyZS1yZW5kZXIgc2FmZSxcbiAgLy8gd2Ugd2lsbCBoYXZlIHRvIHB1dCB0aGUgZGVib3VuY2VkIGNhbGwgaW50byBhbiB1c2VSZWYsXG4gIC8vIGFuZCBwcm9iYWJseSBoYXZlIGFuIHVzZUVmZmVjdFxuICBjb25zdCBkZWJvdW5jZWRMb2FkT3B0aW9ucyA9IGRlYm91bmNlUHJvbWlzZShsb2FkT3B0aW9ucywgMTAwMCwgeyBsZWFkaW5nOiB0cnVlIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzZWxlY3RDbGFzc30+XG4gICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbD17Zm9ybWF0Q3JlYXRlTGFiZWx9XG4gICAgICAgIGRlZmF1bHRPcHRpb25zXG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICBpc09wZW5cbiAgICAgICAgb25DbG9zZU1lbnU9e29uQ2xvc2V9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e2FsbG93Q3VzdG9tVmFsdWV9XG4gICAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRMb2FkT3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgU2VsU2luZ2xlTG9hZFByb3BzID0ge1xuICBsb2FkT3B0aW9uczogKGZpbHRlcjogc3RyaW5nKSA9PiBQcm9taXNlPFNlbFZhbFtdPjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25DaGFuZ2U6ICh2OiBTZWxWYWwpID0+IHZvaWQ7XG4gIGFsbG93Q3VzdG9tVmFsdWU/OiBib29sZWFuO1xufTtcblxuY29uc3QgU2VsU2luZ2xlTG9hZCA9ICh7IGxvYWRPcHRpb25zLCBhbGxvd0N1c3RvbVZhbHVlLCBvbkNoYW5nZSwgb25DbG9zZSB9OiBTZWxTaW5nbGVMb2FkUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtsb2FkU3RhdGUsIGRvTG9hZF0gPSB1c2VBc3luY0ZuKGxvYWRPcHRpb25zLCBbbG9hZE9wdGlvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvTG9hZCgnJyk7XG4gIH0sIFtkb0xvYWQsIGxvYWRPcHRpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2VsZWN0Q2xhc3N9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgIGlzTG9hZGluZz17bG9hZFN0YXRlLmxvYWRpbmd9XG4gICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXtmb3JtYXRDcmVhdGVMYWJlbH1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIGlzT3BlblxuICAgICAgICBvbkNsb3NlTWVudT17b25DbG9zZX1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17YWxsb3dDdXN0b21WYWx1ZX1cbiAgICAgICAgb3B0aW9ucz17bG9hZFN0YXRlLnZhbHVlID8/IFtdfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU2VsID0gKHsgbG9hZE9wdGlvbnMsIGZpbHRlckJ5TG9hZE9wdGlvbnMsIGFsbG93Q3VzdG9tVmFsdWUsIG9uQ2hhbmdlLCBvbkNsb3NlIH06IFNlbFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICAvLyB1bmZvcnR1bmF0ZWx5IDxTZWdtZW50Lz4gYW5kIDxTZWdtZW50QXN5bmMvPiBoYXZlIHNvbWV3aGF0IGRpZmZlcmVudCBiZWhhdmlvcixcbiAgLy8gc28gdGhlIHNpbXBsZXN0IGFwcHJvYWNoIHdhcyB0byBqdXN0IGNyZWF0ZSB0d28gc2VwYXJhdGUgd3JhcHBlci1jb21wb25lbnRzXG4gIHJldHVybiBmaWx0ZXJCeUxvYWRPcHRpb25zID8gKFxuICAgIDxTZWxSZWxvYWQgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zfSBhbGxvd0N1c3RvbVZhbHVlPXthbGxvd0N1c3RvbVZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+XG4gICkgOiAoXG4gICAgPFNlbFNpbmdsZUxvYWRcbiAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uc31cbiAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e2FsbG93Q3VzdG9tVmFsdWV9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgIC8+XG4gICk7XG59O1xuXG50eXBlIElucFByb3BzID0ge1xuICBpbml0aWFsVmFsdWU6IHN0cmluZztcbiAgb25DaGFuZ2U6IChuZXdWYWw6IHN0cmluZykgPT4gdm9pZDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IElucCA9ICh7IGluaXRpYWxWYWx1ZSwgb25DaGFuZ2UsIG9uQ2xvc2UgfTogSW5wUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtjdXJyZW50VmFsdWUsIHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTaGFkb3dlZFN0YXRlKGluaXRpYWxWYWx1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRcbiAgICAgIGF1dG9Gb2N1c1xuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICBvbkJsdXI9e29uQ2xvc2V9XG4gICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgIG9uQ2hhbmdlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFZhbHVlKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICB9fVxuICAgICAgdmFsdWU9e2N1cnJlbnRWYWx1ZX1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgZGVmYXVsdEJ1dHRvbkNsYXNzID0gY3NzKHtcbiAgd2lkdGg6ICdhdXRvJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG59KTtcblxuZXhwb3J0IGNvbnN0IFNlZyA9ICh7XG4gIHZhbHVlLFxuICBidXR0b25DbGFzc05hbWUsXG4gIGxvYWRPcHRpb25zLFxuICBmaWx0ZXJCeUxvYWRPcHRpb25zLFxuICBhbGxvd0N1c3RvbVZhbHVlLFxuICBvbkNoYW5nZSxcbn06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgaWYgKCFpc09wZW4pIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjeChkZWZhdWx0QnV0dG9uQ2xhc3MsIGJ1dHRvbkNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbmxpbmVMYWJlbFxuICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGlmIChsb2FkT3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2VsXG4gICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zfVxuICAgICAgICAgIGZpbHRlckJ5TG9hZE9wdGlvbnM9e2ZpbHRlckJ5TG9hZE9wdGlvbnMgPz8gZmFsc2V9XG4gICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17YWxsb3dDdXN0b21WYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgb25DaGFuZ2Uodik7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucFxuICAgICAgICAgIGluaXRpYWxWYWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgb25DaGFuZ2UoeyB2YWx1ZTogdiwgbGFiZWw6IHYgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VnIH0gZnJvbSAnLi9TZWcnO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnlUYWcgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyB0b1NlbGVjdGFibGVWYWx1ZSB9IGZyb20gJy4vdG9TZWxlY3RhYmxlVmFsdWUnO1xuaW1wb3J0IHsgYWRqdXN0T3BlcmF0b3JJZk5lZWRlZCwgZ2V0Q29uZGl0aW9uLCBnZXRPcGVyYXRvciB9IGZyb20gJy4vdGFnVXRpbHMnO1xuaW1wb3J0IHsgQWRkQnV0dG9uIH0gZnJvbSAnLi9BZGRCdXR0b24nO1xuXG50eXBlIEtub3duT3BlcmF0b3IgPSAnPScgfCAnIT0nIHwgJzw+JyB8ICc8JyB8ICc+JyB8ICc9ficgfCAnIX4nO1xuY29uc3Qga25vd25PcGVyYXRvcnM6IEtub3duT3BlcmF0b3JbXSA9IFsnPScsICchPScsICc8PicsICc8JywgJz4nLCAnPX4nLCAnIX4nXTtcblxudHlwZSBLbm93bkNvbmRpdGlvbiA9ICdBTkQnIHwgJ09SJztcbmNvbnN0IGtub3duQ29uZGl0aW9uczogS25vd25Db25kaXRpb25bXSA9IFsnQU5EJywgJ09SJ107XG5cbmNvbnN0IG9wZXJhdG9yT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPEtub3duT3BlcmF0b3I+PiA9IGtub3duT3BlcmF0b3JzLm1hcCh0b1NlbGVjdGFibGVWYWx1ZSk7XG5jb25zdCBjb25kaXRpdG9uT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPEtub3duQ29uZGl0aW9uPj4gPSBrbm93bkNvbmRpdGlvbnMubWFwKHRvU2VsZWN0YWJsZVZhbHVlKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGFnczogSW5mbHV4UXVlcnlUYWdbXTtcbiAgb25DaGFuZ2U6ICh0YWdzOiBJbmZsdXhRdWVyeVRhZ1tdKSA9PiB2b2lkO1xuICBnZXRUYWdLZXlPcHRpb25zOiAoKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbiAgZ2V0VGFnVmFsdWVPcHRpb25zOiAoa2V5OiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nW10+O1xufTtcblxudHlwZSBUYWdQcm9wcyA9IHtcbiAgdGFnOiBJbmZsdXhRdWVyeVRhZztcbiAgaXNGaXJzdDogYm9vbGVhbjtcbiAgb25SZW1vdmU6ICgpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlOiAodGFnOiBJbmZsdXhRdWVyeVRhZykgPT4gdm9pZDtcbiAgZ2V0VGFnS2V5T3B0aW9uczogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG4gIGdldFRhZ1ZhbHVlT3B0aW9uczogKGtleTogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbn07XG5cbmNvbnN0IGxvYWRDb25kaXRpb25PcHRpb25zID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGNvbmRpdGl0b25PcHRpb25zKTtcblxuY29uc3QgbG9hZE9wZXJhdG9yT3B0aW9ucyA9ICgpID0+IFByb21pc2UucmVzb2x2ZShvcGVyYXRvck9wdGlvbnMpO1xuXG5jb25zdCBUYWcgPSAoeyB0YWcsIGlzRmlyc3QsIG9uUmVtb3ZlLCBvbkNoYW5nZSwgZ2V0VGFnS2V5T3B0aW9ucywgZ2V0VGFnVmFsdWVPcHRpb25zIH06IFRhZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBvcGVyYXRvciA9IGdldE9wZXJhdG9yKHRhZyk7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGdldENvbmRpdGlvbih0YWcsIGlzRmlyc3QpO1xuXG4gIGNvbnN0IGdldFRhZ0tleVNlZ21lbnRPcHRpb25zID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRUYWdLZXlPcHRpb25zKClcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIGluIHRoaXMgVUkgZWxlbWVudCB3ZSBhZGQgYSBzcGVjaWFsIGl0ZW0gdG8gdGhlIGxpc3Qgb2Ygb3B0aW9ucyxcbiAgICAgICAgLy8gdGhhdCBpcyB1c2VkIHRvIHJlbW92ZSB0aGUgZWxlbWVudC5cbiAgICAgICAgLy8gdGhpcyBjYXVzZXMgYSBwcm9ibGVtOiBpZiBgZ2V0VGFnS2V5T3B0aW9uc2AgZmFpbHMgd2l0aCBhbiBlcnJvcixcbiAgICAgICAgLy8gdGhlIHJlbW92ZS1maWx0ZXIgb3B0aW9uIGlzIG5ldmVyIGFkZGVkIHRvIHRoZSBsaXN0LFxuICAgICAgICAvLyBhbmQgdGhlIFVJIGVsZW1lbnQgY2FuIG5vdCBiZSByZW1vdmVkLlxuICAgICAgICAvLyB0byBhdm9pZCBpdCwgd2UgY2F0Y2ggYW55IHBvdGVudGlhbCBlcnJvcnMgY29taW5nIGZyb20gYGdldFRhZ0tleU9wdGlvbnNgLFxuICAgICAgICAvLyBsb2cgdGhlIGVycm9yLCBhbmQgcHJldGVuZCB0aGF0IHRoZSBsaXN0IG9mIG9wdGlvbnMgaXMgYW4gZW1wdHkgbGlzdC5cbiAgICAgICAgLy8gdGhpcyB3YXkgdGhlIHJlbW92ZS1pdGVtIG9wdGlvbiBjYW4gYWx3YXlzIGJlIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0pXG4gICAgICAudGhlbigodGFncykgPT4gW3sgbGFiZWw6ICctLSByZW1vdmUgZmlsdGVyIC0tJywgdmFsdWU6IHVuZGVmaW5lZCB9LCAuLi50YWdzLm1hcCh0b1NlbGVjdGFibGVWYWx1ZSldKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYWdWYWx1ZVNlZ21lbnRPcHRpb25zID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRUYWdWYWx1ZU9wdGlvbnModGFnLmtleSkudGhlbigodGFncykgPT4gdGFncy5tYXAodG9TZWxlY3RhYmxlVmFsdWUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAge2NvbmRpdGlvbiAhPSBudWxsICYmIChcbiAgICAgICAgPFNlZ1xuICAgICAgICAgIHZhbHVlPXtjb25kaXRpb259XG4gICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRDb25kaXRpb25PcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi50YWcsIGNvbmRpdGlvbjogdi52YWx1ZSB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxTZWdcbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICB2YWx1ZT17dGFnLmtleX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2dldFRhZ0tleVNlZ21lbnRPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB2O1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvblJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkNoYW5nZSh7IC4uLnRhZywga2V5OiB2YWx1ZSA/PyAnJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFNlZ1xuICAgICAgICB2YWx1ZT17b3BlcmF0b3J9XG4gICAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3BlcmF0b3JPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17KG9wKSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi50YWcsIG9wZXJhdG9yOiBvcC52YWx1ZSB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8U2VnXG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgdmFsdWU9e3RhZy52YWx1ZX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2dldFRhZ1ZhbHVlU2VnbWVudE9wdGlvbnN9XG4gICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdi52YWx1ZSA/PyAnJztcbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnRhZywgdmFsdWUsIG9wZXJhdG9yOiBhZGp1c3RPcGVyYXRvcklmTmVlZGVkKG9wZXJhdG9yLCB2YWx1ZSkgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFRhZ3NTZWN0aW9uID0gKHsgdGFncywgb25DaGFuZ2UsIGdldFRhZ0tleU9wdGlvbnMsIGdldFRhZ1ZhbHVlT3B0aW9ucyB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qgb25UYWdDaGFuZ2UgPSAobmV3VGFnOiBJbmZsdXhRdWVyeVRhZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld1RhZ3MgPSB0YWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IGkgPyBuZXdUYWcgOiB0YWc7XG4gICAgfSk7XG4gICAgb25DaGFuZ2UobmV3VGFncyk7XG4gIH07XG5cbiAgY29uc3Qgb25UYWdSZW1vdmUgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld1RhZ3MgPSB0YWdzLmZpbHRlcigodCwgaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgIG9uQ2hhbmdlKG5ld1RhZ3MpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhZ0tleVNlZ21lbnRPcHRpb25zID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRUYWdLZXlPcHRpb25zKCkudGhlbigodGFncykgPT4gdGFncy5tYXAodG9TZWxlY3RhYmxlVmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBhZGROZXdUYWcgPSAodGFnS2V5OiBzdHJpbmcsIGlzRmlyc3Q6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBtaW5pbWFsVGFnOiBJbmZsdXhRdWVyeVRhZyA9IHtcbiAgICAgIGtleTogdGFnS2V5LFxuICAgICAgdmFsdWU6ICdzZWxlY3QgdGFnIHZhbHVlJyxcbiAgICB9O1xuXG4gICAgY29uc3QgbmV3VGFnOiBJbmZsdXhRdWVyeVRhZyA9IHtcbiAgICAgIGtleTogbWluaW1hbFRhZy5rZXksXG4gICAgICB2YWx1ZTogbWluaW1hbFRhZy52YWx1ZSxcbiAgICAgIG9wZXJhdG9yOiBnZXRPcGVyYXRvcihtaW5pbWFsVGFnKSxcbiAgICAgIGNvbmRpdGlvbjogZ2V0Q29uZGl0aW9uKG1pbmltYWxUYWcsIGlzRmlyc3QpLFxuICAgIH07XG5cbiAgICBvbkNoYW5nZShbLi4udGFncywgbmV3VGFnXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RhZ3MubWFwKCh0LCBpKSA9PiAoXG4gICAgICAgIDxUYWdcbiAgICAgICAgICB0YWc9e3R9XG4gICAgICAgICAgaXNGaXJzdD17aSA9PT0gMH1cbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgb25DaGFuZ2U9eyhuZXdUKSA9PiB7XG4gICAgICAgICAgICBvblRhZ0NoYW5nZShuZXdULCBpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICBvblRhZ1JlbW92ZShpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGdldFRhZ0tleU9wdGlvbnM9e2dldFRhZ0tleU9wdGlvbnN9XG4gICAgICAgICAgZ2V0VGFnVmFsdWVPcHRpb25zPXtnZXRUYWdWYWx1ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxBZGRCdXR0b25cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICBsb2FkT3B0aW9ucz17Z2V0VGFnS2V5U2VnbWVudE9wdGlvbnN9XG4gICAgICAgIG9uQWRkPXsodikgPT4ge1xuICAgICAgICAgIGFkZE5ld1RhZyh2LCB0YWdzLmxlbmd0aCA9PT0gMCk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IEluZmx1eFF1ZXJ5LCBJbmZsdXhRdWVyeVBhcnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFBhcnRQYXJhbXMgfSBmcm9tICcuL1BhcnRMaXN0U2VjdGlvbic7XG5pbXBvcnQgSW5mbHV4UXVlcnlNb2RlbCBmcm9tICcuLi8uLi9pbmZsdXhfcXVlcnlfbW9kZWwnO1xuaW1wb3J0IHsgdW53cmFwIH0gZnJvbSAnLi91bndyYXAnO1xuaW1wb3J0IHF1ZXJ5UGFydCBmcm9tICcuLi8uLi9xdWVyeV9wYXJ0JztcbmltcG9ydCB7IHRvU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnLi90b1NlbGVjdGFibGVWYWx1ZSc7XG5pbXBvcnQgeyBRdWVyeVBhcnREZWYgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWxlcnRpbmcvc3RhdGUvcXVlcnlfcGFydCc7XG5cbnR5cGUgQ2F0ZWdvcmllcyA9IFJlY29yZDxzdHJpbmcsIFF1ZXJ5UGFydERlZltdPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1NlbGVjdFBhcnRPcHRpb25zKCk6IFNlbGVjdGFibGVWYWx1ZVtdIHtcbiAgY29uc3QgY2F0ZWdvcmllczogQ2F0ZWdvcmllcyA9IHF1ZXJ5UGFydC5nZXRDYXRlZ29yaWVzKCk7XG4gIGNvbnN0IG9wdGlvbnM6IFNlbGVjdGFibGVWYWx1ZVtdID0gW107XG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNhdGVnb3JpZXMpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW46IFNlbGVjdGFibGVWYWx1ZVtdID0gY2F0ZWdvcmllc1trZXldLm1hcCgoeCkgPT4gdG9TZWxlY3RhYmxlVmFsdWUoeC50eXBlKSk7XG5cbiAgICBvcHRpb25zLnB1c2goe1xuICAgICAgbGFiZWw6IGtleSxcbiAgICAgIG9wdGlvbnM6IGNoaWxkcmVuLFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ld0dyb3VwQnlQYXJ0T3B0aW9ucyhcbiAgcXVlcnk6IEluZmx1eFF1ZXJ5LFxuICBnZXRUYWdLZXlzOiAoKSA9PiBQcm9taXNlPHN0cmluZ1tdPlxuKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+IHtcbiAgY29uc3QgdGFnS2V5cyA9IGF3YWl0IGdldFRhZ0tleXMoKTtcbiAgY29uc3QgcXVlcnlDb3B5ID0geyAuLi5xdWVyeSB9OyAvLyB0aGUgcXVlcnktbW9kZWwgbXV0YXRlcyB0aGUgcXVlcnlcbiAgY29uc3QgbW9kZWwgPSBuZXcgSW5mbHV4UXVlcnlNb2RlbChxdWVyeUNvcHkpO1xuICBjb25zdCBvcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBbXTtcbiAgaWYgKCFtb2RlbC5oYXNGaWxsKCkpIHtcbiAgICBvcHRpb25zLnB1c2godG9TZWxlY3RhYmxlVmFsdWUoJ2ZpbGwobnVsbCknKSk7XG4gIH1cbiAgaWYgKCFtb2RlbC5oYXNHcm91cEJ5VGltZSgpKSB7XG4gICAgb3B0aW9ucy5wdXNoKHRvU2VsZWN0YWJsZVZhbHVlKCd0aW1lKCRpbnRlcnZhbCknKSk7XG4gIH1cbiAgdGFnS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBvcHRpb25zLnB1c2godG9TZWxlY3RhYmxlVmFsdWUoYHRhZygke2tleX0pYCkpO1xuICB9KTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbnR5cGUgUGFydCA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXJhbXM6IFBhcnRQYXJhbXM7XG59O1xuXG5mdW5jdGlvbiBnZXRQYXJ0UGFyYW1zKHBhcnQ6IEluZmx1eFF1ZXJ5UGFydCwgZHluYW1pY1BhcmFtT3B0aW9uczogTWFwPHN0cmluZywgKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT4+KTogUGFydFBhcmFtcyB7XG4gIC8vIE5PVEU6IHRoZSB3YXkgdGhlIHN5c3RlbSBpcyBjb25zdHJ1Y3RlZCxcbiAgLy8gdGhlcmUgYWx3YXlzIGNhbiBvbmx5IGJlIG9uZSBwb3NzaWJsZSBkeW5hbWljLWxvb2t1cFxuICAvLyBmaWVsZC4gaW4gY2FzZSBvZiBzZWxlY3QgaXQgaXMgdGhlIGZpZWxkLFxuICAvLyBpbiBjYXNlIG9mIGdyb3VwLWJ5IGl0IGlzIHRoZSB0YWdcbiAgY29uc3QgZGVmID0gcXVlcnlQYXJ0LmNyZWF0ZShwYXJ0KS5kZWY7XG5cbiAgLy8gd2Ugc3dpdGNoIHRoZSBudW1iZXJzIHRvIHN0cmluZ3MsIGl0IHdpbGwgd29yayB0aGF0IHdheSB0b28sXG4gIC8vIGFuZCBpdCBtYWtlcyB0aGUgY29kZSBzaW1wbGVyXG4gIGNvbnN0IHBhcmFtVmFsdWVzID0gKHBhcnQucGFyYW1zID8/IFtdKS5tYXAoKHApID0+IHAudG9TdHJpbmcoKSk7XG5cbiAgaWYgKHBhcmFtVmFsdWVzLmxlbmd0aCAhPT0gZGVmLnBhcmFtcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcXVlcnktc2VnbWVudCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtVmFsdWVzLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRlZlBhcmFtID0gZGVmLnBhcmFtc1tpbmRleF07XG4gICAgaWYgKGRlZlBhcmFtLmR5bmFtaWNMb29rdXApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIG9wdGlvbnM6IHVud3JhcChkeW5hbWljUGFyYW1PcHRpb25zLmdldChgJHtkZWYudHlwZX1fJHtpbmRleH1gKSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChkZWZQYXJhbS5vcHRpb25zICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIG9wdGlvbnM6ICgpID0+IFByb21pc2UucmVzb2x2ZShkZWZQYXJhbS5vcHRpb25zKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICBvcHRpb25zOiBudWxsLFxuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhcnRMaXN0KFxuICBxdWVyeVBhcnRzOiBJbmZsdXhRdWVyeVBhcnRbXSxcbiAgZHluYW1pY1BhcmFtT3B0aW9uczogTWFwPHN0cmluZywgKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT4+XG4pOiBQYXJ0W10ge1xuICByZXR1cm4gcXVlcnlQYXJ0cy5tYXAoKHFwKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHFwLnR5cGUsXG4gICAgICBwYXJhbXM6IGdldFBhcnRQYXJhbXMocXAsIGR5bmFtaWNQYXJhbU9wdGlvbnMpLFxuICAgIH07XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuZXhwb3J0IGNvbnN0IHBhZGRpbmdSaWdodENsYXNzID0gY3NzKHtcbiAgcGFkZGluZ1JpZ2h0OiAnNHB4Jyxcbn0pO1xuIiwiaW1wb3J0IHsgSW5mbHV4UXVlcnlUYWcgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmZ1bmN0aW9uIGlzUmVnZXgodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXlxcLy4qXFwvJC8udGVzdCh0ZXh0KTtcbn1cblxuLy8gRklYTUU6IHN5bmMgdGhlc2UgdG8gdGhlIHF1ZXJ5LXN0cmluZy1nZW5lcmF0aW9uLWNvZGVcbi8vIHByb2JhYmx5IGl0J3MgaW4gaW5mbHV4X3F1ZXJ5X21vZGVsLnRzXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3BlcmF0b3IodGFnOiBJbmZsdXhRdWVyeVRhZyk6IHN0cmluZyB7XG4gIHJldHVybiB0YWcub3BlcmF0b3IgPz8gKGlzUmVnZXgodGFnLnZhbHVlKSA/ICc9ficgOiAnPScpO1xufVxuXG4vLyBGSVhNRTogc3luYyB0aGVzZSB0byB0aGUgcXVlcnktc3RyaW5nLWdlbmVyYXRpb24tY29kZVxuLy8gcHJvYmFibHkgaXQncyBpbiBpbmZsdXhfcXVlcnlfbW9kZWwudHNcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25kaXRpb24odGFnOiBJbmZsdXhRdWVyeVRhZywgaXNGaXJzdDogYm9vbGVhbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBpc0ZpcnN0ID8gdW5kZWZpbmVkIDogdGFnLmNvbmRpdGlvbiA/PyAnQU5EJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdE9wZXJhdG9ySWZOZWVkZWQoY3VycmVudE9wZXJhdG9yOiBzdHJpbmcsIG5ld1RhZ1ZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBpc0N1cnJlbnRPcGVyYXRvclJlZ2V4ID0gY3VycmVudE9wZXJhdG9yID09PSAnPX4nIHx8IGN1cnJlbnRPcGVyYXRvciA9PT0gJyF+JztcbiAgY29uc3QgaXNOZXdUYWdWYWx1ZVJlZ2V4ID0gaXNSZWdleChuZXdUYWdWYWx1ZSk7XG5cbiAgaWYgKGlzTmV3VGFnVmFsdWVSZWdleCkge1xuICAgIHJldHVybiBpc0N1cnJlbnRPcGVyYXRvclJlZ2V4ID8gY3VycmVudE9wZXJhdG9yIDogJz1+JztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNDdXJyZW50T3BlcmF0b3JSZWdleCA/ICc9JyA6IGN1cnJlbnRPcGVyYXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1NlbGVjdGFibGVWYWx1ZTxUIGV4dGVuZHMgc3RyaW5nPih0OiBUKTogU2VsZWN0YWJsZVZhbHVlPFQ+IHtcbiAgcmV0dXJuIHsgbGFiZWw6IHQsIHZhbHVlOiB0IH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdW53cmFwPFQ+KHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFQge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndmFsdWUgbXVzdCBub3QgYmUgbnVsbGlzaCcpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbiIsImltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUmVzdWx0Rm9ybWF0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgUkVTVUxUX0ZPUk1BVFM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxSZXN1bHRGb3JtYXQ+PiA9IFtcbiAgeyBsYWJlbDogJ1RpbWUgc2VyaWVzJywgdmFsdWU6ICd0aW1lX3NlcmllcycgfSxcbiAgeyBsYWJlbDogJ1RhYmxlJywgdmFsdWU6ICd0YWJsZScgfSxcbiAgeyBsYWJlbDogJ0xvZ3MnLCB2YWx1ZTogJ2xvZ3MnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9SRVNVTFRfRk9STUFUOiBSZXN1bHRGb3JtYXQgPSAndGltZV9zZXJpZXMnO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSAncmVhY3QtdXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNoYWRvd2VkU3RhdGU8VD4ob3V0c2lkZVZhbDogVCk6IFtULCAobmV3VmFsOiBUKSA9PiB2b2lkXSB7XG4gIGNvbnN0IFtjdXJyZW50VmFsLCBzZXRDdXJyZW50VmFsXSA9IHVzZVN0YXRlKG91dHNpZGVWYWwpO1xuICBjb25zdCBwcmV2T3V0c2lkZVZhbCA9IHVzZVByZXZpb3VzKG91dHNpZGVWYWwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNPdXRzaWRlVmFsQ2hhbmdlZCA9IHByZXZPdXRzaWRlVmFsICE9PSBvdXRzaWRlVmFsO1xuICAgIC8vIGlmIHRoZSB2YWx1ZSBjaGFuZ2VzIGZyb20gdGhlIG91dHNpZGUsIHdlIGFjY2VwdCBpdCBpbnRvIHRoZSBzdGF0ZVxuICAgIC8vICh3ZSBvbmx5IHNldCBpdCBpZiBpdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgY3VycmVudCB2YWx1ZSlcbiAgICBpZiAoaXNPdXRzaWRlVmFsQ2hhbmdlZCAmJiBjdXJyZW50VmFsICE9PSBvdXRzaWRlVmFsKSB7XG4gICAgICBzZXRDdXJyZW50VmFsKG91dHNpZGVWYWwpO1xuICAgIH1cbiAgfSwgW291dHNpZGVWYWwsIGN1cnJlbnRWYWwsIHByZXZPdXRzaWRlVmFsXSk7XG5cbiAgcmV0dXJuIFtjdXJyZW50VmFsLCBzZXRDdXJyZW50VmFsXTtcbn1cbiIsImltcG9ydCB7IGNsb25lRGVlcCwgZXh0ZW5kLCBnZXQsIGdyb3VwQnksIGhhcywgaXNTdHJpbmcsIG1hcCBhcyBfbWFwLCBvbWl0LCBwaWNrLCByZWR1Y2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHtcbiAgQmFja2VuZERhdGFTb3VyY2VSZXNwb25zZSxcbiAgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLFxuICBGZXRjaFJlc3BvbnNlLFxuICBmcmFtZVRvTWV0cmljRmluZFZhbHVlLFxuICBnZXRCYWNrZW5kU3J2LFxufSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7XG4gIEFubm90YXRpb25FdmVudCxcbiAgQXJyYXlWZWN0b3IsXG4gIERhdGFGcmFtZSxcbiAgRGF0YVF1ZXJ5RXJyb3IsXG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgZGF0ZU1hdGgsXG4gIGRhdGVUaW1lLFxuICBGaWVsZFR5cGUsXG4gIExvYWRpbmdTdGF0ZSxcbiAgTWV0cmljRmluZFZhbHVlLFxuICBRdWVyeVJlc3VsdE1ldGEsXG4gIFNjb3BlZFZhcnMsXG4gIFRJTUVfU0VSSUVTX1RJTUVfRklFTERfTkFNRSxcbiAgVElNRV9TRVJJRVNfVkFMVUVfRklFTERfTkFNRSxcbiAgVGltZVNlcmllcyxcbiAgQW5ub3RhdGlvblF1ZXJ5UmVxdWVzdCxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgSW5mbHV4U2VyaWVzIGZyb20gJy4vaW5mbHV4X3Nlcmllcyc7XG5pbXBvcnQgSW5mbHV4UXVlcnlNb2RlbCBmcm9tICcuL2luZmx1eF9xdWVyeV9tb2RlbCc7XG5pbXBvcnQgUmVzcG9uc2VQYXJzZXIgZnJvbSAnLi9yZXNwb25zZV9wYXJzZXInO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnlCdWlsZGVyIH0gZnJvbSAnLi9xdWVyeV9idWlsZGVyJztcbmltcG9ydCB7IEluZmx1eE9wdGlvbnMsIEluZmx1eFF1ZXJ5LCBJbmZsdXhWZXJzaW9uIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiwgVGVtcGxhdGVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvdGVtcGxhdGluZy90ZW1wbGF0ZV9zcnYnO1xuaW1wb3J0IHsgRmx1eFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZsdXhRdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBidWlsZFJhd1F1ZXJ5IH0gZnJvbSAnLi9xdWVyeVV0aWxzJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuLy8gd2UgZGV0ZWN0IHRoZSBmaWVsZCB0eXBlIGJhc2VkIG9uIHRoZSB2YWx1ZS1hcnJheVxuZnVuY3Rpb24gZ2V0RmllbGRUeXBlKHZhbHVlczogdW5rbm93bltdKTogRmllbGRUeXBlIHtcbiAgLy8gdGhlIHZhbHVlcy1hcnJheSBtYXkgY29udGFpbiBhIGxvdCBvZiBudWxscy5cbiAgLy8gd2UgbmVlZCB0aGUgZmlyc3Qgbm90LW51bGwgaXRlbVxuICBjb25zdCBmaXJzdE5vdE51bGwgPSB2YWx1ZXMuZmluZCgodikgPT4gdiAhPT0gbnVsbCk7XG5cbiAgaWYgKGZpcnN0Tm90TnVsbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gd2UgY291bGQgbm90IGZpbmQgYW55IG5vdC1udWxsIHZhbHVlc1xuICAgIHJldHVybiBGaWVsZFR5cGUubnVtYmVyO1xuICB9XG5cbiAgY29uc3QgdmFsdWVUeXBlID0gdHlwZW9mIGZpcnN0Tm90TnVsbDtcblxuICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gRmllbGRUeXBlLnN0cmluZztcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiBGaWVsZFR5cGUuYm9vbGVhbjtcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIEZpZWxkVHlwZS5udW1iZXI7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgaW5mbHV4cWwgdmFsdWVzXG4gICAgICAvLyBjYW4gb25seSBiZSBudW1iZXJzLCBzdHJpbmdzIGFuZCBib29sZWFucy5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5mbHV4UUw6IGludmFsaWQgdmFsdWUgdHlwZSAke3ZhbHVlVHlwZX1gKTtcbiAgfVxufVxuXG4vLyB0aGlzIGNvbnZlcnNpb24gZnVuY3Rpb24gaXMgc3BlY2lhbGl6ZWQgdG8gd29yayB3aXRoIHRoZSB0aW1lc2VyaWVzXG4vLyBkYXRhIHJldHVybmVkIGJ5IEluZmx1eERhdGFzb3VyY2UuZ2V0VGltZVNlcmllcygpXG5mdW5jdGlvbiB0aW1lU2VyaWVzVG9EYXRhRnJhbWUodGltZVNlcmllczogVGltZVNlcmllcyk6IERhdGFGcmFtZSB7XG4gIGNvbnN0IHRpbWVzOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCB2YWx1ZXM6IHVua25vd25bXSA9IFtdO1xuXG4gIC8vIHRoZSBkYXRhIHdlIHByb2Nlc3MgaGVyZSBpcyBub3QgY29ycmVjdGx5IHR5cGVkLlxuICAvLyB0aGUgdHlwZXNjcmlwdCB0eXBlcyBzYXkgZXZlcnkgZGF0YS1wb2ludCBpcyBudW1iZXJ8bnVsbCxcbiAgLy8gYnV0IGluIGZhY3QgaXQgY2FuIGJlIHN0cmluZyBvciBib29sZWFuIHRvby5cblxuICBjb25zdCBwb2ludHMgPSB0aW1lU2VyaWVzLmRhdGFwb2ludHM7XG4gIGZvciAoY29uc3QgcG9pbnQgb2YgcG9pbnRzKSB7XG4gICAgdmFsdWVzLnB1c2gocG9pbnRbMF0pO1xuICAgIHRpbWVzLnB1c2gocG9pbnRbMV0gYXMgbnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IHRpbWVGaWVsZCA9IHtcbiAgICBuYW1lOiBUSU1FX1NFUklFU19USU1FX0ZJRUxEX05BTUUsXG4gICAgdHlwZTogRmllbGRUeXBlLnRpbWUsXG4gICAgY29uZmlnOiB7fSxcbiAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcjxudW1iZXI+KHRpbWVzKSxcbiAgfTtcblxuICBjb25zdCB2YWx1ZUZpZWxkID0ge1xuICAgIG5hbWU6IFRJTUVfU0VSSUVTX1ZBTFVFX0ZJRUxEX05BTUUsXG4gICAgdHlwZTogZ2V0RmllbGRUeXBlKHZhbHVlcyksXG4gICAgY29uZmlnOiB7XG4gICAgICBkaXNwbGF5TmFtZUZyb21EUzogdGltZVNlcmllcy50aXRsZSxcbiAgICB9LFxuICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yPHVua25vd24+KHZhbHVlcyksXG4gICAgbGFiZWxzOiB0aW1lU2VyaWVzLnRhZ3MsXG4gIH07XG5cbiAgY29uc3QgZmllbGRzID0gW3RpbWVGaWVsZCwgdmFsdWVGaWVsZF07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiB0aW1lU2VyaWVzLnRhcmdldCxcbiAgICByZWZJZDogdGltZVNlcmllcy5yZWZJZCxcbiAgICBtZXRhOiB0aW1lU2VyaWVzLm1ldGEsXG4gICAgZmllbGRzLFxuICAgIGxlbmd0aDogdmFsdWVzLmxlbmd0aCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbHV4RGF0YXNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VXaXRoQmFja2VuZDxJbmZsdXhRdWVyeSwgSW5mbHV4T3B0aW9ucz4ge1xuICB0eXBlOiBzdHJpbmc7XG4gIHVybHM6IHN0cmluZ1tdO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGFiYXNlOiBhbnk7XG4gIGJhc2ljQXV0aDogYW55O1xuICB3aXRoQ3JlZGVudGlhbHM6IGFueTtcbiAgYWNjZXNzOiAnZGlyZWN0JyB8ICdwcm94eSc7XG4gIGludGVydmFsOiBhbnk7XG4gIHJlc3BvbnNlUGFyc2VyOiBhbnk7XG4gIGh0dHBNb2RlOiBzdHJpbmc7XG4gIGlzRmx1eDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxJbmZsdXhPcHRpb25zPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KClcbiAgKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG5cbiAgICB0aGlzLnR5cGUgPSAnaW5mbHV4ZGInO1xuICAgIHRoaXMudXJscyA9IChpbnN0YW5jZVNldHRpbmdzLnVybCA/PyAnJykuc3BsaXQoJywnKS5tYXAoKHVybCkgPT4ge1xuICAgICAgcmV0dXJuIHVybC50cmltKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVzZXJuYW1lID0gaW5zdGFuY2VTZXR0aW5ncy51c2VybmFtZSA/PyAnJztcbiAgICB0aGlzLnBhc3N3b3JkID0gaW5zdGFuY2VTZXR0aW5ncy5wYXNzd29yZCA/PyAnJztcbiAgICB0aGlzLm5hbWUgPSBpbnN0YW5jZVNldHRpbmdzLm5hbWU7XG4gICAgdGhpcy5kYXRhYmFzZSA9IGluc3RhbmNlU2V0dGluZ3MuZGF0YWJhc2U7XG4gICAgdGhpcy5iYXNpY0F1dGggPSBpbnN0YW5jZVNldHRpbmdzLmJhc2ljQXV0aDtcbiAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGluc3RhbmNlU2V0dGluZ3Mud2l0aENyZWRlbnRpYWxzO1xuICAgIHRoaXMuYWNjZXNzID0gaW5zdGFuY2VTZXR0aW5ncy5hY2Nlc3M7XG4gICAgY29uc3Qgc2V0dGluZ3NEYXRhID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YSB8fCAoe30gYXMgSW5mbHV4T3B0aW9ucyk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldHRpbmdzRGF0YS50aW1lSW50ZXJ2YWw7XG4gICAgdGhpcy5odHRwTW9kZSA9IHNldHRpbmdzRGF0YS5odHRwTW9kZSB8fCAnR0VUJztcbiAgICB0aGlzLnJlc3BvbnNlUGFyc2VyID0gbmV3IFJlc3BvbnNlUGFyc2VyKCk7XG4gICAgdGhpcy5pc0ZsdXggPSBzZXR0aW5nc0RhdGEudmVyc2lvbiA9PT0gSW5mbHV4VmVyc2lvbi5GbHV4O1xuXG4gICAgaWYgKHRoaXMuaXNGbHV4KSB7XG4gICAgICAvLyBXaGVuIGZsdXgsIHVzZSBhbiBhbm5vdGF0aW9uIHByb2Nlc3NvciByYXRoZXIgdGhhbiB0aGUgYGFubm90YXRpb25RdWVyeWAgbGlmZWN5Y2xlXG4gICAgICB0aGlzLmFubm90YXRpb25zID0ge1xuICAgICAgICBRdWVyeUVkaXRvcjogRmx1eFF1ZXJ5RWRpdG9yLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBxdWVyeShyZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PEluZmx1eFF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICAvLyBmb3Igbm90LWZsdXggcXVlcmllcyB3ZSBjYWxsIGB0aGlzLmNsYXNzaWNRdWVyeWAsIGFuZCB0aGF0XG4gICAgLy8gaGFuZGxlcyB0aGUgaXMtaGlkZGVuIHNpdHVhdGlvbi5cbiAgICAvLyBmb3IgdGhlIGZsdXgtY2FzZSwgd2UgZG8gdGhlIGZpbHRlcmluZyBoZXJlXG4gICAgY29uc3QgZmlsdGVyZWRSZXF1ZXN0ID0ge1xuICAgICAgLi4ucmVxdWVzdCxcbiAgICAgIHRhcmdldHM6IHJlcXVlc3QudGFyZ2V0cy5maWx0ZXIoKHQpID0+IHQuaGlkZSAhPT0gdHJ1ZSksXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlzRmx1eCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnF1ZXJ5KGZpbHRlcmVkUmVxdWVzdCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNNaWdyYXRpb25Ub2dnbGVPbkFuZElzQWNjZXNzUHJveHkoKSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnF1ZXJ5KGZpbHRlcmVkUmVxdWVzdCkucGlwZShcbiAgICAgICAgbWFwKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbmZsdXhEQiBFcnJvcjogJyArIHJlcy5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICByZXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNlcmllc0xpc3Q6IGFueVtdID0gW107XG5cbiAgICAgICAgICBjb25zdCBncm91cGVkRnJhbWVzID0gZ3JvdXBCeShyZXMuZGF0YSwgKHgpID0+IHgucmVmSWQpO1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhncm91cGVkRnJhbWVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJlcXVlc3QudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRGcmFtZXMgPSBncm91cGVkRnJhbWVzW3RhcmdldC5yZWZJZF0gPz8gW107XG4gICAgICAgICAgICAgIHN3aXRjaCAodGFyZ2V0LnJlc3VsdEZvcm1hdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvZ3MnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYmxlJzpcbiAgICAgICAgICAgICAgICAgIHNlcmllc0xpc3QucHVzaChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZVBhcnNlci5nZXRUYWJsZShmaWx0ZXJlZEZyYW1lcywgdGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6IHRhcmdldC5yZXN1bHRGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZEZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXNMaXN0LnB1c2goZmlsdGVyZWRGcmFtZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4geyBkYXRhOiBzZXJpZXNMaXN0IH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIHRvIGNsYXNzaWMgcXVlcnkgc3VwcG9ydFxuICAgIHJldHVybiB0aGlzLmNsYXNzaWNRdWVyeShyZXF1ZXN0KTtcbiAgfVxuXG4gIGdldFF1ZXJ5RGlzcGxheVRleHQocXVlcnk6IEluZmx1eFF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuaXNGbHV4KSB7XG4gICAgICByZXR1cm4gcXVlcnkucXVlcnk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSW5mbHV4UXVlcnlNb2RlbChxdWVyeSkucmVuZGVyKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBxdWVyeSBzaG91bGQgYmUgc2tpcHBlZFxuICAgKi9cbiAgZmlsdGVyUXVlcnkocXVlcnk6IEluZmx1eFF1ZXJ5KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNGbHV4KSB7XG4gICAgICByZXR1cm4gISFxdWVyeS5xdWVyeTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhcHBseVRlbXBsYXRlVmFyaWFibGVzKHF1ZXJ5OiBJbmZsdXhRdWVyeSwgc2NvcGVkVmFyczogU2NvcGVkVmFycyk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICAgIC8vIFdlIHdhbnQgdG8gaW50ZXJwb2xhdGUgdGhlc2UgdmFyaWFibGVzIG9uIGJhY2tlbmRcbiAgICBjb25zdCB7IF9faW50ZXJ2YWwsIF9faW50ZXJ2YWxfbXMsIC4uLnJlc3QgfSA9IHNjb3BlZFZhcnM7XG5cbiAgICBpZiAodGhpcy5pc0ZsdXgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBxdWVyeTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnF1ZXJ5ID8/ICcnLCByZXN0KSwgLy8gVGhlIHJhdyBxdWVyeSB0ZXh0XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZmVhdHVyZVRvZ2dsZXMuaW5mbHV4ZGJCYWNrZW5kTWlncmF0aW9uICYmIHRoaXMuYWNjZXNzID09PSAncHJveHknKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuYXBwbHlWYXJpYWJsZXMocXVlcnksIHNjb3BlZFZhcnMsIHJlc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdW5jaGFuZ2VkIHByZSA3LjEgcXVlcnkgaW1wbGVtZW50YXRpb25cbiAgICovXG4gIGNsYXNzaWNRdWVyeShvcHRpb25zOiBhbnkpOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgbGV0IHRpbWVGaWx0ZXIgPSB0aGlzLmdldFRpbWVGaWx0ZXIob3B0aW9ucyk7XG4gICAgY29uc3Qgc2NvcGVkVmFycyA9IG9wdGlvbnMuc2NvcGVkVmFycztcbiAgICBjb25zdCB0YXJnZXRzID0gY2xvbmVEZWVwKG9wdGlvbnMudGFyZ2V0cyk7XG4gICAgY29uc3QgcXVlcnlUYXJnZXRzOiBhbnlbXSA9IFtdO1xuXG4gICAgbGV0IGksIHk7XG5cbiAgICBsZXQgYWxsUXVlcmllcyA9IF9tYXAodGFyZ2V0cywgKHRhcmdldCkgPT4ge1xuICAgICAgaWYgKHRhcmdldC5oaWRlKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgcXVlcnlUYXJnZXRzLnB1c2godGFyZ2V0KTtcblxuICAgICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgc2NvcGVkVmFycy5pbnRlcnZhbCA9IHNjb3BlZFZhcnMuX19pbnRlcnZhbDtcblxuICAgICAgcmV0dXJuIG5ldyBJbmZsdXhRdWVyeU1vZGVsKHRhcmdldCwgdGhpcy50ZW1wbGF0ZVNydiwgc2NvcGVkVmFycykucmVuZGVyKHRydWUpO1xuICAgIH0pLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICBpZiAoY3VycmVudCAhPT0gJycpIHtcbiAgICAgICAgYWNjICs9ICc7JyArIGN1cnJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0pO1xuXG4gICAgaWYgKGFsbFF1ZXJpZXMgPT09ICcnKSB7XG4gICAgICByZXR1cm4gb2YoeyBkYXRhOiBbXSB9KTtcbiAgICB9XG5cbiAgICAvLyBhZGQgZ2xvYmFsIGFkaG9jIGZpbHRlcnMgdG8gdGltZUZpbHRlclxuICAgIGNvbnN0IGFkaG9jRmlsdGVycyA9IHRoaXMudGVtcGxhdGVTcnYuZ2V0QWRob2NGaWx0ZXJzKHRoaXMubmFtZSk7XG4gICAgaWYgKGFkaG9jRmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0bXBRdWVyeSA9IG5ldyBJbmZsdXhRdWVyeU1vZGVsKHsgcmVmSWQ6ICdBJyB9LCB0aGlzLnRlbXBsYXRlU3J2LCBzY29wZWRWYXJzKTtcbiAgICAgIHRpbWVGaWx0ZXIgKz0gJyBBTkQgJyArIHRtcFF1ZXJ5LnJlbmRlckFkaG9jRmlsdGVycyhhZGhvY0ZpbHRlcnMpO1xuICAgIH1cblxuICAgIC8vIHJlcGxhY2UgZ3JhZmFuYSB2YXJpYWJsZXNcbiAgICBzY29wZWRWYXJzLnRpbWVGaWx0ZXIgPSB7IHZhbHVlOiB0aW1lRmlsdGVyIH07XG5cbiAgICAvLyByZXBsYWNlIHRlbXBsYXRlZCB2YXJpYWJsZXNcbiAgICBhbGxRdWVyaWVzID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKGFsbFF1ZXJpZXMsIHNjb3BlZFZhcnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX3Nlcmllc1F1ZXJ5KGFsbFF1ZXJpZXMsIG9wdGlvbnMpLnBpcGUoXG4gICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEucmVzdWx0cykge1xuICAgICAgICAgIHJldHVybiB7IGRhdGE6IFtdIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZXJpZXNMaXN0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhLnJlc3VsdHNbaV07XG4gICAgICAgICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5zZXJpZXMpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHF1ZXJ5VGFyZ2V0c1tpXTtcbiAgICAgICAgICBsZXQgYWxpYXMgPSB0YXJnZXQuYWxpYXM7XG4gICAgICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgICAgICBhbGlhcyA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSh0YXJnZXQuYWxpYXMsIG9wdGlvbnMuc2NvcGVkVmFycyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbWV0YTogUXVlcnlSZXN1bHRNZXRhID0ge1xuICAgICAgICAgICAgZXhlY3V0ZWRRdWVyeVN0cmluZzogZGF0YS5leGVjdXRlZFF1ZXJ5U3RyaW5nLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBpbmZsdXhTZXJpZXMgPSBuZXcgSW5mbHV4U2VyaWVzKHtcbiAgICAgICAgICAgIHJlZklkOiB0YXJnZXQucmVmSWQsXG4gICAgICAgICAgICBzZXJpZXM6IGRhdGEucmVzdWx0c1tpXS5zZXJpZXMsXG4gICAgICAgICAgICBhbGlhczogYWxpYXMsXG4gICAgICAgICAgICBtZXRhLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc3dpdGNoICh0YXJnZXQucmVzdWx0Rm9ybWF0KSB7XG4gICAgICAgICAgICBjYXNlICdsb2dzJzpcbiAgICAgICAgICAgICAgbWV0YS5wcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSA9ICdsb2dzJztcbiAgICAgICAgICAgIGNhc2UgJ3RhYmxlJzoge1xuICAgICAgICAgICAgICBzZXJpZXNMaXN0LnB1c2goaW5mbHV4U2VyaWVzLmdldFRhYmxlKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgY29uc3QgdGltZVNlcmllcyA9IGluZmx1eFNlcmllcy5nZXRUaW1lU2VyaWVzKCk7XG4gICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB0aW1lU2VyaWVzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzTGlzdC5wdXNoKHRpbWVTZXJpZXNUb0RhdGFGcmFtZSh0aW1lU2VyaWVzW3ldKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgZGF0YTogc2VyaWVzTGlzdCB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgYW5ub3RhdGlvblF1ZXJ5KG9wdGlvbnM6IEFubm90YXRpb25RdWVyeVJlcXVlc3Q8YW55Pik6IFByb21pc2U8QW5ub3RhdGlvbkV2ZW50W10+IHtcbiAgICBpZiAodGhpcy5pc0ZsdXgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIG1lc3NhZ2U6ICdGbHV4IHJlcXVpcmVzIHRoZSBzdGFuZGFyZCBhbm5vdGF0aW9uIHF1ZXJ5JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEluZmx1eFFMIHB1dHMgYSBxdWVyeSBzdHJpbmcgb24gdGhlIGFubm90YXRpb25cbiAgICBpZiAoIW9wdGlvbnMuYW5ub3RhdGlvbi5xdWVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgbWVzc2FnZTogJ1F1ZXJ5IG1pc3NpbmcgaW4gYW5ub3RhdGlvbiBkZWZpbml0aW9uJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZmVhdHVyZVRvZ2dsZXMuaW5mbHV4ZGJCYWNrZW5kTWlncmF0aW9uICYmIHRoaXMuYWNjZXNzID09PSAncHJveHknKSB7XG4gICAgICAvLyBXZSB3YW50IHRvIHNlbmQgb3VyIHF1ZXJ5IHRvIHRoZSBiYWNrZW5kIGFzIGEgcmF3IHF1ZXJ5XG4gICAgICBjb25zdCB0YXJnZXQ6IEluZmx1eFF1ZXJ5ID0ge1xuICAgICAgICByZWZJZDogJ21ldHJpY0ZpbmRRdWVyeScsXG4gICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgIHF1ZXJ5OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucy5hbm5vdGF0aW9uLnF1ZXJ5ID8/ICcnKSxcbiAgICAgICAgcmF3UXVlcnk6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAgICAgLmZldGNoPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KHtcbiAgICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGZyb206IG9wdGlvbnMucmFuZ2UuZnJvbS52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgdG86IG9wdGlvbnMucmFuZ2UudG8udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHF1ZXJpZXM6IFt0YXJnZXRdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5hbm5vdGF0aW9uLm5hbWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICAgYXN5bmMgKHJlczogRmV0Y2hSZXNwb25zZTxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPikgPT5cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlc3BvbnNlUGFyc2VyLnRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZShvcHRpb25zLCByZXMsIHRhcmdldClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbWVGaWx0ZXIgPSB0aGlzLmdldFRpbWVGaWx0ZXIoeyByYW5nZVJhdzogb3B0aW9ucy5yYW5nZVJhdywgdGltZXpvbmU6IG9wdGlvbnMuZGFzaGJvYXJkLnRpbWV6b25lIH0pO1xuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMuYW5ub3RhdGlvbi5xdWVyeS5yZXBsYWNlKCckdGltZUZpbHRlcicsIHRpbWVGaWx0ZXIpO1xuICAgIHF1ZXJ5ID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LCB1bmRlZmluZWQsICdyZWdleCcpO1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20odGhpcy5fc2VyaWVzUXVlcnkocXVlcnksIG9wdGlvbnMpKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5yZXN1bHRzIHx8ICFkYXRhLnJlc3VsdHNbMF0pIHtcbiAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiAnTm8gcmVzdWx0cyBpbiByZXNwb25zZSBmcm9tIEluZmx1eERCJyB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBJbmZsdXhTZXJpZXMoe1xuICAgICAgICBzZXJpZXM6IGRhdGEucmVzdWx0c1swXS5zZXJpZXMsXG4gICAgICAgIGFubm90YXRpb246IG9wdGlvbnMuYW5ub3RhdGlvbixcbiAgICAgIH0pLmdldEFubm90YXRpb25zKCk7XG4gICAgfSk7XG4gIH1cblxuICB0YXJnZXRDb250YWluc1RlbXBsYXRlKHRhcmdldDogYW55KSB7XG4gICAgLy8gZm9yIGZsdXgtbW9kZSB3ZSBqdXN0IHRha2UgdGFyZ2V0LnF1ZXJ5LFxuICAgIC8vIGZvciBpbmZsdXhxbC1tb2RlIHdlIHVzZSBJbmZsdXhRdWVyeU1vZGVsIHRvIGNyZWF0ZSB0aGUgdGV4dC1yZXByZXNlbnRhdGlvblxuICAgIGNvbnN0IHF1ZXJ5VGV4dCA9IHRoaXMuaXNGbHV4ID8gdGFyZ2V0LnF1ZXJ5IDogYnVpbGRSYXdRdWVyeSh0YXJnZXQpO1xuXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYuY29udGFpbnNUZW1wbGF0ZShxdWVyeVRleHQpO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMocXVlcmllczogSW5mbHV4UXVlcnlbXSwgc2NvcGVkVmFyczogU2NvcGVkVmFycyk6IEluZmx1eFF1ZXJ5W10ge1xuICAgIGlmICghcXVlcmllcyB8fCBxdWVyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzRmx1eCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgICAgcXVlcnk6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5xdWVyeSA/PyAnJywgc2NvcGVkVmFycyksIC8vIFRoZSByYXcgcXVlcnkgdGV4dFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgLi4udGhpcy5hcHBseVZhcmlhYmxlcyhxdWVyeSwgc2NvcGVkVmFycywgc2NvcGVkVmFycyksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlWYXJpYWJsZXMocXVlcnk6IEluZmx1eFF1ZXJ5LCBzY29wZWRWYXJzOiBTY29wZWRWYXJzLCByZXN0OiBTY29wZWRWYXJzKSB7XG4gICAgY29uc3QgZXhwYW5kZWRRdWVyeSA9IHsgLi4ucXVlcnkgfTtcbiAgICBpZiAocXVlcnkuZ3JvdXBCeSkge1xuICAgICAgZXhwYW5kZWRRdWVyeS5ncm91cEJ5ID0gcXVlcnkuZ3JvdXBCeS5tYXAoKGdyb3VwQnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5ncm91cEJ5LFxuICAgICAgICAgIHBhcmFtczogZ3JvdXBCeS5wYXJhbXM/Lm1hcCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocGFyYW0udG9TdHJpbmcoKSwgdW5kZWZpbmVkLCAncmVnZXgnKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChxdWVyeS5zZWxlY3QpIHtcbiAgICAgIGV4cGFuZGVkUXVlcnkuc2VsZWN0ID0gcXVlcnkuc2VsZWN0Lm1hcCgoc2VsZWN0cykgPT4ge1xuICAgICAgICByZXR1cm4gc2VsZWN0cy5tYXAoKHNlbGVjdDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNlbGVjdCxcbiAgICAgICAgICAgIHBhcmFtczogc2VsZWN0LnBhcmFtcz8ubWFwKChwYXJhbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocGFyYW0udG9TdHJpbmcoKSwgdW5kZWZpbmVkLCAncmVnZXgnKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5LnRhZ3MpIHtcbiAgICAgIGV4cGFuZGVkUXVlcnkudGFncyA9IHF1ZXJ5LnRhZ3MubWFwKCh0YWcpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi50YWcsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSh0YWcudmFsdWUsIHVuZGVmaW5lZCwgJ3JlZ2V4JyksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZXhwYW5kZWRRdWVyeSxcbiAgICAgIHF1ZXJ5OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkucXVlcnkgPz8gJycsIHJlc3QpLCAvLyBUaGUgcmF3IHF1ZXJ5IHRleHRcbiAgICAgIGFsaWFzOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkuYWxpYXMgPz8gJycsIHNjb3BlZFZhcnMpLFxuICAgICAgbGltaXQ6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5saW1pdD8udG9TdHJpbmcoKSA/PyAnJywgc2NvcGVkVmFycywgJ3JlZ2V4JyksXG4gICAgICBtZWFzdXJlbWVudDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5Lm1lYXN1cmVtZW50ID8/ICcnLCBzY29wZWRWYXJzLCAncmVnZXgnKSxcbiAgICAgIHBvbGljeTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnBvbGljeSA/PyAnJywgc2NvcGVkVmFycywgJ3JlZ2V4JyksXG4gICAgICBzbGltaXQ6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5zbGltaXQ/LnRvU3RyaW5nKCkgPz8gJycsIHNjb3BlZFZhcnMsICdyZWdleCcpLFxuICAgICAgdHo6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS50eiA/PyAnJywgc2NvcGVkVmFycyksXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIG1ldHJpY0ZpbmRRdWVyeShxdWVyeTogc3RyaW5nLCBvcHRpb25zPzogYW55KTogUHJvbWlzZTxNZXRyaWNGaW5kVmFsdWVbXT4ge1xuICAgIGlmICh0aGlzLmlzRmx1eCB8fCB0aGlzLmlzTWlncmF0aW9uVG9nZ2xlT25BbmRJc0FjY2Vzc1Byb3h5KCkpIHtcbiAgICAgIGNvbnN0IHRhcmdldDogSW5mbHV4UXVlcnkgPSB7XG4gICAgICAgIHJlZklkOiAnbWV0cmljRmluZFF1ZXJ5JyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHJhd1F1ZXJ5OiB0cnVlLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgICBzdXBlci5xdWVyeSh7XG4gICAgICAgICAgLi4ub3B0aW9ucywgLy8gaW5jbHVkZXMgJ3JhbmdlJ1xuICAgICAgICAgIHRhcmdldHM6IFt0YXJnZXRdLFxuICAgICAgICB9IGFzIERhdGFRdWVyeVJlcXVlc3QpXG4gICAgICApLnRoZW4oKHJzcCkgPT4ge1xuICAgICAgICBpZiAocnNwLmRhdGE/Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmcmFtZVRvTWV0cmljRmluZFZhbHVlKHJzcC5kYXRhWzBdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnBvbGF0ZWQgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnksIHVuZGVmaW5lZCwgJ3JlZ2V4Jyk7XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLl9zZXJpZXNRdWVyeShpbnRlcnBvbGF0ZWQsIG9wdGlvbnMpKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVBhcnNlci5wYXJzZShxdWVyeSwgcmVzcCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRUYWdLZXlzKG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gICAgY29uc3QgcXVlcnlCdWlsZGVyID0gbmV3IEluZmx1eFF1ZXJ5QnVpbGRlcih7IG1lYXN1cmVtZW50OiBvcHRpb25zLm1lYXN1cmVtZW50IHx8ICcnLCB0YWdzOiBbXSB9LCB0aGlzLmRhdGFiYXNlKTtcbiAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5QnVpbGRlci5idWlsZEV4cGxvcmVRdWVyeSgnVEFHX0tFWVMnKTtcbiAgICByZXR1cm4gdGhpcy5tZXRyaWNGaW5kUXVlcnkocXVlcnksIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0VGFnVmFsdWVzKG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gICAgY29uc3QgcXVlcnlCdWlsZGVyID0gbmV3IEluZmx1eFF1ZXJ5QnVpbGRlcih7IG1lYXN1cmVtZW50OiBvcHRpb25zLm1lYXN1cmVtZW50IHx8ICcnLCB0YWdzOiBbXSB9LCB0aGlzLmRhdGFiYXNlKTtcbiAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5QnVpbGRlci5idWlsZEV4cGxvcmVRdWVyeSgnVEFHX1ZBTFVFUycsIG9wdGlvbnMua2V5KTtcbiAgICByZXR1cm4gdGhpcy5tZXRyaWNGaW5kUXVlcnkocXVlcnksIG9wdGlvbnMpO1xuICB9XG5cbiAgX3Nlcmllc1F1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm4gb2YoeyByZXN1bHRzOiBbXSB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJhbmdlKSB7XG4gICAgICBjb25zdCB0aW1lRmlsdGVyID0gdGhpcy5nZXRUaW1lRmlsdGVyKHsgcmFuZ2VSYXc6IG9wdGlvbnMucmFuZ2UsIHRpbWV6b25lOiBvcHRpb25zLnRpbWV6b25lIH0pO1xuICAgICAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKCckdGltZUZpbHRlcicsIHRpbWVGaWx0ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9pbmZsdXhSZXF1ZXN0KHRoaXMuaHR0cE1vZGUsICcvcXVlcnknLCB7IHE6IHF1ZXJ5LCBlcG9jaDogJ21zJyB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZVBhcmFtcyhwYXJhbXM6IGFueSkge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZShcbiAgICAgIHBhcmFtcyxcbiAgICAgIChtZW1vLCB2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgIH1cbiAgICAgICAgbWVtby5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSxcbiAgICAgIFtdIGFzIHN0cmluZ1tdXG4gICAgKS5qb2luKCcmJyk7XG4gIH1cblxuICB0ZXN0RGF0YXNvdXJjZSgpIHtcbiAgICBpZiAodGhpcy5pc0ZsdXgpIHtcbiAgICAgIC8vIFRPRE86IGV2ZW50dWFsbHkgdXNlIHRoZSByZWFsIC9oZWFsdGggZW5kcG9pbnRcbiAgICAgIGNvbnN0IHJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8SW5mbHV4UXVlcnk+ID0ge1xuICAgICAgICB0YXJnZXRzOiBbeyByZWZJZDogJ3Rlc3QnLCBxdWVyeTogJ2J1Y2tldHMoKScgfV0sXG4gICAgICAgIHJlcXVlc3RJZDogYCR7dGhpcy5pZH0taGVhbHRoLSR7dXVpZHY0KCl9YCxcbiAgICAgICAgZGFzaGJvYXJkSWQ6IDAsXG4gICAgICAgIHBhbmVsSWQ6IDAsXG4gICAgICAgIGludGVydmFsOiAnMW0nLFxuICAgICAgICBpbnRlcnZhbE1zOiA2MDAwMCxcbiAgICAgICAgbWF4RGF0YVBvaW50czogNDIzLFxuICAgICAgICByYW5nZToge1xuICAgICAgICAgIGZyb206IGRhdGVUaW1lKDEwMDApLFxuICAgICAgICAgIHRvOiBkYXRlVGltZSgyMDAwKSxcbiAgICAgICAgfSxcbiAgICAgIH0gYXMgRGF0YVF1ZXJ5UmVxdWVzdDxJbmZsdXhRdWVyeT47XG5cbiAgICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHN1cGVyLnF1ZXJ5KHJlcXVlc3QpKVxuICAgICAgICAudGhlbigocmVzOiBEYXRhUXVlcnlSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuZGF0YSB8fCByZXMuc3RhdGUgIT09IExvYWRpbmdTdGF0ZS5Eb25lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbmZsdXhEQiBFcnJvcicsIHJlcyk7XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdlcnJvcicsIG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIEluZmx1eERCJyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBmaXJzdCA9IHJlcy5kYXRhWzBdO1xuICAgICAgICAgIGlmIChmaXJzdCAmJiBmaXJzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiBgJHtmaXJzdC5sZW5ndGh9IGJ1Y2tldHMgZm91bmRgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZmx1eERCIEVycm9yJywgcmVzKTtcbiAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdlcnJvcicsIG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIGJ1Y2tldHMnIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbmZsdXhEQiBFcnJvcicsIGVycik7XG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnZXJyb3InLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc01pZ3JhdGlvblRvZ2dsZU9uQW5kSXNBY2Nlc3NQcm94eSgpKSB7XG4gICAgICBjb25zdCB0YXJnZXQ6IEluZmx1eFF1ZXJ5ID0ge1xuICAgICAgICByZWZJZDogJ21ldHJpY0ZpbmRRdWVyeScsXG4gICAgICAgIHF1ZXJ5OiAnU0hPVyBUQUcgS0VZUycsXG4gICAgICAgIHJhd1F1ZXJ5OiB0cnVlLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHN1cGVyLnF1ZXJ5KHsgdGFyZ2V0czogW3RhcmdldF0gfSBhcyBEYXRhUXVlcnlSZXF1ZXN0KSlcbiAgICAgICAgLnRoZW4oKHJlczogRGF0YVF1ZXJ5UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLmRhdGEgfHwgcmVzLnN0YXRlICE9PSBMb2FkaW5nU3RhdGUuRG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgcmVhZGluZyBJbmZsdXhEQi4nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlcy5kYXRhPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgaXMgd29ya2luZy4nIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byBJbmZsdXhEQiwgYnV0IG5vIHRhZ3MgZm91bmQuJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnZXJyb3InLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUJ1aWxkZXIgPSBuZXcgSW5mbHV4UXVlcnlCdWlsZGVyKHsgbWVhc3VyZW1lbnQ6ICcnLCB0YWdzOiBbXSB9LCB0aGlzLmRhdGFiYXNlKTtcbiAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5QnVpbGRlci5idWlsZEV4cGxvcmVRdWVyeSgnUkVURU5USU9OIFBPTElDSUVTJyk7XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLl9zZXJpZXNRdWVyeShxdWVyeSkpXG4gICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBnZXQocmVzLCAncmVzdWx0c1swXS5lcnJvcicpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdlcnJvcicsIG1lc3NhZ2U6IGVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdEYXRhIHNvdXJjZSBpcyB3b3JraW5nJyB9O1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnZXJyb3InLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9O1xuICAgICAgfSk7XG4gIH1cblxuICBfaW5mbHV4UmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IGFueSkge1xuICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB0aGlzLnVybHMuc2hpZnQoKSE7XG4gICAgdGhpcy51cmxzLnB1c2goY3VycmVudFVybCk7XG5cbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHt9O1xuXG4gICAgaWYgKHRoaXMudXNlcm5hbWUpIHtcbiAgICAgIHBhcmFtcy51ID0gdGhpcy51c2VybmFtZTtcbiAgICAgIHBhcmFtcy5wID0gdGhpcy5wYXNzd29yZDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRhdGFiYXNlKSB7XG4gICAgICBwYXJhbXMuZGIgPSBvcHRpb25zLmRhdGFiYXNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhYmFzZSkge1xuICAgICAgcGFyYW1zLmRiID0gdGhpcy5kYXRhYmFzZTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHEgfSA9IGRhdGE7XG5cbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgaGFzKGRhdGEsICdxJykpIHtcbiAgICAgIC8vIHZlcmIgaXMgUE9TVCBhbmQgJ3EnIHBhcmFtIGlzIGRlZmluZWRcbiAgICAgIGV4dGVuZChwYXJhbXMsIG9taXQoZGF0YSwgWydxJ10pKTtcbiAgICAgIGRhdGEgPSB0aGlzLnNlcmlhbGl6ZVBhcmFtcyhwaWNrKGRhdGEsIFsncSddKSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdHRVQnIHx8IG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAvLyB2ZXJiIGlzIEdFVCwgb3IgUE9TVCB3aXRob3V0ICdxJyBwYXJhbVxuICAgICAgZXh0ZW5kKHBhcmFtcywgZGF0YSk7XG4gICAgICBkYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXE6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiBjdXJyZW50VXJsICsgdXJsLFxuICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgcHJlY2lzaW9uOiAnbXMnLFxuICAgICAgaW5zcGVjdDogeyB0eXBlOiAnaW5mbHV4ZGInIH0sXG4gICAgICBwYXJhbVNlcmlhbGl6ZXI6IHRoaXMuc2VyaWFsaXplUGFyYW1zLFxuICAgIH07XG5cbiAgICByZXEuaGVhZGVycyA9IHJlcS5oZWFkZXJzIHx8IHt9O1xuICAgIGlmICh0aGlzLmJhc2ljQXV0aCB8fCB0aGlzLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmJhc2ljQXV0aCkge1xuICAgICAgcmVxLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuYmFzaWNBdXRoO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgcmVxLmhlYWRlcnNbJ0NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmZldGNoKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXN1bHQ7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEuZXhlY3V0ZWRRdWVyeVN0cmluZyA9IHE7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHJlc3VsdC5kYXRhLnJlc3VsdHMuZmlsdGVyKChlbGVtOiBhbnkpID0+IGVsZW0uZXJyb3IpO1xuXG4gICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbmZsdXhEQiBFcnJvcjogJyArIGVycm9yc1swXS5lcnJvcixcbiAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gb2YoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih0aGlzLmhhbmRsZUVycm9ycyhlcnIpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyOiBhbnkpIHtcbiAgICBjb25zdCBlcnJvcjogRGF0YVF1ZXJ5RXJyb3IgPSB7XG4gICAgICBtZXNzYWdlOlxuICAgICAgICAoZXJyICYmIGVyci5zdGF0dXMpIHx8XG4gICAgICAgIChlcnIgJiYgZXJyLm1lc3NhZ2UpIHx8XG4gICAgICAgICdVbmtub3duIGVycm9yIGR1cmluZyBxdWVyeSB0cmFuc2FjdGlvbi4gUGxlYXNlIGNoZWNrIEpTIGNvbnNvbGUgbG9ncy4nLFxuICAgIH07XG5cbiAgICBpZiAoKE51bWJlci5pc0ludGVnZXIoZXJyLnN0YXR1cykgJiYgZXJyLnN0YXR1cyAhPT0gMCkgfHwgZXJyLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgIGlmIChlcnIuZGF0YSAmJiBlcnIuZGF0YS5lcnJvcikge1xuICAgICAgICBlcnJvci5tZXNzYWdlID0gJ0luZmx1eERCIEVycm9yOiAnICsgZXJyLmRhdGEuZXJyb3I7XG4gICAgICAgIGVycm9yLmRhdGEgPSBlcnIuZGF0YTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlcnJvci5jb25maWcgPSBlcnIuY29uZmlnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdOZXR3b3JrIEVycm9yOiAnICsgZXJyLnN0YXR1c1RleHQgKyAnKCcgKyBlcnIuc3RhdHVzICsgJyknO1xuICAgICAgICBlcnJvci5kYXRhID0gZXJyLmRhdGE7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZXJyb3IuY29uZmlnID0gZXJyLmNvbmZpZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cblxuICBnZXRUaW1lRmlsdGVyKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IGZyb20gPSB0aGlzLmdldEluZmx1eFRpbWUob3B0aW9ucy5yYW5nZVJhdy5mcm9tLCBmYWxzZSwgb3B0aW9ucy50aW1lem9uZSk7XG4gICAgY29uc3QgdW50aWwgPSB0aGlzLmdldEluZmx1eFRpbWUob3B0aW9ucy5yYW5nZVJhdy50bywgdHJ1ZSwgb3B0aW9ucy50aW1lem9uZSk7XG5cbiAgICByZXR1cm4gJ3RpbWUgPj0gJyArIGZyb20gKyAnIGFuZCB0aW1lIDw9ICcgKyB1bnRpbDtcbiAgfVxuXG4gIGdldEluZmx1eFRpbWUoZGF0ZTogYW55LCByb3VuZFVwOiBhbnksIHRpbWV6b25lOiBhbnkpIHtcbiAgICBpZiAoaXNTdHJpbmcoZGF0ZSkpIHtcbiAgICAgIGlmIChkYXRlID09PSAnbm93Jykge1xuICAgICAgICByZXR1cm4gJ25vdygpJztcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFydHMgPSAvXm5vdy0oXFxkKykoW2RobXNdKSQvLmV4ZWMoZGF0ZSk7XG4gICAgICBpZiAocGFydHMpIHtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKTtcbiAgICAgICAgY29uc3QgdW5pdCA9IHBhcnRzWzJdO1xuICAgICAgICByZXR1cm4gJ25vdygpIC0gJyArIGFtb3VudCArIHVuaXQ7XG4gICAgICB9XG4gICAgICBkYXRlID0gZGF0ZU1hdGgucGFyc2UoZGF0ZSwgcm91bmRVcCwgdGltZXpvbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlLnZhbHVlT2YoKSArICdtcyc7XG4gIH1cblxuICBpc01pZ3JhdGlvblRvZ2dsZU9uQW5kSXNBY2Nlc3NQcm94eSgpIHtcbiAgICByZXR1cm4gY29uZmlnLmZlYXR1cmVUb2dnbGVzLmluZmx1eGRiQmFja2VuZE1pZ3JhdGlvbiAmJiB0aGlzLmFjY2VzcyA9PT0gJ3Byb3h5JztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5mbHV4UXVlcnlUYWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBJbmZsdXhEYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeUJ1aWxkZXIgfSBmcm9tICcuL3F1ZXJ5X2J1aWxkZXInO1xuXG5jb25zdCBydW5FeHBsb3JlUXVlcnkgPSAoXG4gIHR5cGU6IHN0cmluZyxcbiAgd2l0aEtleTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICB3aXRoTWVhc3VyZW1lbnRGaWx0ZXI6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgdGFyZ2V0OiB7IG1lYXN1cmVtZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7IHRhZ3M6IEluZmx1eFF1ZXJ5VGFnW107IHBvbGljeTogc3RyaW5nIHwgdW5kZWZpbmVkIH0sXG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2Vcbik6IFByb21pc2U8QXJyYXk8eyB0ZXh0OiBzdHJpbmcgfT4+ID0+IHtcbiAgY29uc3QgYnVpbGRlciA9IG5ldyBJbmZsdXhRdWVyeUJ1aWxkZXIodGFyZ2V0LCBkYXRhc291cmNlLmRhdGFiYXNlKTtcbiAgY29uc3QgcSA9IGJ1aWxkZXIuYnVpbGRFeHBsb3JlUXVlcnkodHlwZSwgd2l0aEtleSwgd2l0aE1lYXN1cmVtZW50RmlsdGVyKTtcbiAgcmV0dXJuIGRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHEpO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvbGljaWVzKGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2UpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHRhcmdldCA9IHsgdGFnczogW10sIG1lYXN1cmVtZW50OiB1bmRlZmluZWQsIHBvbGljeTogdW5kZWZpbmVkIH07XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBydW5FeHBsb3JlUXVlcnkoJ1JFVEVOVElPTiBQT0xJQ0lFUycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0YXJnZXQsIGRhdGFzb3VyY2UpO1xuICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxNZWFzdXJlbWVudHNGb3JUYWdzKFxuICBtZWFzdXJlbWVudEZpbHRlcjogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICB0YWdzOiBJbmZsdXhRdWVyeVRhZ1tdLFxuICBkYXRhc291cmNlOiBJbmZsdXhEYXRhc291cmNlXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHRhcmdldCA9IHsgdGFncywgbWVhc3VyZW1lbnQ6IHVuZGVmaW5lZCwgcG9saWN5OiB1bmRlZmluZWQgfTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJ1bkV4cGxvcmVRdWVyeSgnTUVBU1VSRU1FTlRTJywgdW5kZWZpbmVkLCBtZWFzdXJlbWVudEZpbHRlciwgdGFyZ2V0LCBkYXRhc291cmNlKTtcbiAgcmV0dXJuIGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFnS2V5c0Zvck1lYXN1cmVtZW50QW5kVGFncyhcbiAgbWVhc3VyZW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgcG9saWN5OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHRhZ3M6IEluZmx1eFF1ZXJ5VGFnW10sXG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2Vcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgdGFyZ2V0ID0geyB0YWdzLCBtZWFzdXJlbWVudCwgcG9saWN5IH07XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBydW5FeHBsb3JlUXVlcnkoJ1RBR19LRVlTJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhcmdldCwgZGF0YXNvdXJjZSk7XG4gIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS50ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRhZ1ZhbHVlcyhcbiAgdGFnS2V5OiBzdHJpbmcsXG4gIG1lYXN1cmVtZW50OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHBvbGljeTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICB0YWdzOiBJbmZsdXhRdWVyeVRhZ1tdLFxuICBkYXRhc291cmNlOiBJbmZsdXhEYXRhc291cmNlXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHRhcmdldCA9IHsgdGFncywgbWVhc3VyZW1lbnQsIHBvbGljeSB9O1xuICBjb25zdCBkYXRhID0gYXdhaXQgcnVuRXhwbG9yZVF1ZXJ5KCdUQUdfVkFMVUVTJywgdGFnS2V5LCB1bmRlZmluZWQsIHRhcmdldCwgZGF0YXNvdXJjZSk7XG4gIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS50ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpZWxkS2V5c0Zvck1lYXN1cmVtZW50KFxuICBtZWFzdXJlbWVudDogc3RyaW5nLFxuICBwb2xpY3k6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgZGF0YXNvdXJjZTogSW5mbHV4RGF0YXNvdXJjZVxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCB0YXJnZXQgPSB7IHRhZ3M6IFtdLCBtZWFzdXJlbWVudCwgcG9saWN5IH07XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBydW5FeHBsb3JlUXVlcnkoJ0ZJRUxEUycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0YXJnZXQsIGRhdGFzb3VyY2UpO1xuICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udGV4dCk7XG59XG4iLCJpbXBvcnQgeyBtYXAsIGZpbmQsIGZpbHRlciwgaW5kZXhPZiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcXVlcnlQYXJ0IGZyb20gJy4vcXVlcnlfcGFydCc7XG5pbXBvcnQga2JuIGZyb20gJ2FwcC9jb3JlL3V0aWxzL2tibic7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeSwgSW5mbHV4UXVlcnlUYWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFNjb3BlZFZhcnMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZmx1eFF1ZXJ5TW9kZWwge1xuICB0YXJnZXQ6IEluZmx1eFF1ZXJ5O1xuICBzZWxlY3RNb2RlbHM6IGFueVtdID0gW107XG4gIHF1ZXJ5QnVpbGRlcjogYW55O1xuICBncm91cEJ5UGFydHM6IGFueTtcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgc2NvcGVkVmFyczogYW55O1xuICByZWZJZD86IHN0cmluZztcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogSW5mbHV4UXVlcnksIHRlbXBsYXRlU3J2PzogVGVtcGxhdGVTcnYsIHNjb3BlZFZhcnM/OiBTY29wZWRWYXJzKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy50ZW1wbGF0ZVNydiA9IHRlbXBsYXRlU3J2O1xuICAgIHRoaXMuc2NvcGVkVmFycyA9IHNjb3BlZFZhcnM7XG5cbiAgICB0YXJnZXQucG9saWN5ID0gdGFyZ2V0LnBvbGljeSB8fCAnZGVmYXVsdCc7XG4gICAgdGFyZ2V0LnJlc3VsdEZvcm1hdCA9IHRhcmdldC5yZXN1bHRGb3JtYXQgfHwgJ3RpbWVfc2VyaWVzJztcbiAgICB0YXJnZXQub3JkZXJCeVRpbWUgPSB0YXJnZXQub3JkZXJCeVRpbWUgfHwgJ0FTQyc7XG4gICAgdGFyZ2V0LnRhZ3MgPSB0YXJnZXQudGFncyB8fCBbXTtcbiAgICB0YXJnZXQuZ3JvdXBCeSA9IHRhcmdldC5ncm91cEJ5IHx8IFtcbiAgICAgIHsgdHlwZTogJ3RpbWUnLCBwYXJhbXM6IFsnJF9faW50ZXJ2YWwnXSB9LFxuICAgICAgeyB0eXBlOiAnZmlsbCcsIHBhcmFtczogWydudWxsJ10gfSxcbiAgICBdO1xuICAgIHRhcmdldC5zZWxlY3QgPSB0YXJnZXQuc2VsZWN0IHx8IFtcbiAgICAgIFtcbiAgICAgICAgeyB0eXBlOiAnZmllbGQnLCBwYXJhbXM6IFsndmFsdWUnXSB9LFxuICAgICAgICB7IHR5cGU6ICdtZWFuJywgcGFyYW1zOiBbXSB9LFxuICAgICAgXSxcbiAgICBdO1xuXG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0TW9kZWxzID0gbWFwKHRoaXMudGFyZ2V0LnNlbGVjdCwgKHBhcnRzOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBtYXAocGFydHMsIHF1ZXJ5UGFydC5jcmVhdGUpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JvdXBCeVBhcnRzID0gbWFwKHRoaXMudGFyZ2V0Lmdyb3VwQnksIHF1ZXJ5UGFydC5jcmVhdGUpO1xuICB9XG5cbiAgdXBkYXRlUGVyc2lzdGVkUGFydHMoKSB7XG4gICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gbWFwKHRoaXMuc2VsZWN0TW9kZWxzLCAoc2VsZWN0UGFydHMpID0+IHtcbiAgICAgIHJldHVybiBtYXAoc2VsZWN0UGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogcGFydC5kZWYudHlwZSwgcGFyYW1zOiBwYXJ0LnBhcmFtcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYXNHcm91cEJ5VGltZSgpIHtcbiAgICByZXR1cm4gZmluZCh0aGlzLnRhcmdldC5ncm91cEJ5LCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICd0aW1lJyk7XG4gIH1cblxuICBoYXNGaWxsKCkge1xuICAgIHJldHVybiBmaW5kKHRoaXMudGFyZ2V0Lmdyb3VwQnksIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2ZpbGwnKTtcbiAgfVxuXG4gIGFkZEdyb3VwQnkodmFsdWU6IHN0cmluZykge1xuICAgIGxldCBzdHJpbmdQYXJ0cyA9IHZhbHVlLm1hdGNoKC9eKFxcdyspXFwoKC4qKVxcKSQvKTtcblxuICAgIGlmICghc3RyaW5nUGFydHMgfHwgIXRoaXMudGFyZ2V0Lmdyb3VwQnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlUGFydCA9IHN0cmluZ1BhcnRzWzFdO1xuICAgIGNvbnN0IGFyZyA9IHN0cmluZ1BhcnRzWzJdO1xuICAgIGNvbnN0IHBhcnRNb2RlbCA9IHF1ZXJ5UGFydC5jcmVhdGUoeyB0eXBlOiB0eXBlUGFydCwgcGFyYW1zOiBbYXJnXSB9KTtcbiAgICBjb25zdCBwYXJ0Q291bnQgPSB0aGlzLnRhcmdldC5ncm91cEJ5Lmxlbmd0aDtcblxuICAgIGlmIChwYXJ0Q291bnQgPT09IDApIHtcbiAgICAgIHRoaXMudGFyZ2V0Lmdyb3VwQnkucHVzaChwYXJ0TW9kZWwucGFydCk7XG4gICAgfSBlbHNlIGlmICh0eXBlUGFydCA9PT0gJ3RpbWUnKSB7XG4gICAgICB0aGlzLnRhcmdldC5ncm91cEJ5LnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwucGFydCk7XG4gICAgfSBlbHNlIGlmICh0eXBlUGFydCA9PT0gJ3RhZycpIHtcbiAgICAgIGlmICh0aGlzLnRhcmdldC5ncm91cEJ5W3BhcnRDb3VudCAtIDFdLnR5cGUgPT09ICdmaWxsJykge1xuICAgICAgICB0aGlzLnRhcmdldC5ncm91cEJ5LnNwbGljZShwYXJ0Q291bnQgLSAxLCAwLCBwYXJ0TW9kZWwucGFydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhcmdldC5ncm91cEJ5LnB1c2gocGFydE1vZGVsLnBhcnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhcmdldC5ncm91cEJ5LnB1c2gocGFydE1vZGVsLnBhcnQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICB9XG5cbiAgcmVtb3ZlR3JvdXBCeVBhcnQocGFydDogeyBkZWY6IHsgdHlwZTogc3RyaW5nIH0gfSwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBxdWVyeVBhcnQuZ2V0Q2F0ZWdvcmllcygpO1xuXG4gICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgLy8gcmVtb3ZlIGZpbGxcbiAgICAgIHRoaXMudGFyZ2V0Lmdyb3VwQnkgPSBmaWx0ZXIodGhpcy50YXJnZXQuZ3JvdXBCeSwgKGc6IGFueSkgPT4gZy50eXBlICE9PSAnZmlsbCcpO1xuICAgICAgLy8gcmVtb3ZlIGFnZ3JlZ2F0aW9uc1xuICAgICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gbWFwKHRoaXMudGFyZ2V0LnNlbGVjdCwgKHM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZmlsdGVyKHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0TW9kZWwgPSBxdWVyeVBhcnQuY3JlYXRlKHBhcnQpO1xuICAgICAgICAgIGlmIChwYXJ0TW9kZWwuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFydE1vZGVsLmRlZi5jYXRlZ29yeSA9PT0gY2F0ZWdvcmllcy5TZWxlY3RvcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy50YXJnZXQuZ3JvdXBCeSEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy50YXJnZXQuc2VsZWN0IS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICB9XG5cbiAgcmVtb3ZlU2VsZWN0UGFydChzZWxlY3RQYXJ0czogYW55W10sIHBhcnQ6IGFueSkge1xuICAgIC8vIGlmIHdlIHJlbW92ZSB0aGUgZmllbGQgcmVtb3ZlIHRoZSB3aG9sZSBzdGF0ZW1lbnRcbiAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ2ZpZWxkJykge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0TW9kZWxzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzSW5kZXggPSBpbmRleE9mKHRoaXMuc2VsZWN0TW9kZWxzLCBzZWxlY3RQYXJ0cyk7XG4gICAgICAgIHRoaXMuc2VsZWN0TW9kZWxzLnNwbGljZShtb2RlbHNJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnRJbmRleCA9IGluZGV4T2Yoc2VsZWN0UGFydHMsIHBhcnQpO1xuICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKHBhcnRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICB9XG5cbiAgYWRkU2VsZWN0UGFydChzZWxlY3RQYXJ0czogYW55W10sIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcnRNb2RlbCA9IHF1ZXJ5UGFydC5jcmVhdGUoeyB0eXBlOiB0eXBlIH0pO1xuICAgIHBhcnRNb2RlbC5kZWYuYWRkU3RyYXRlZ3koc2VsZWN0UGFydHMsIHBhcnRNb2RlbCwgdGhpcyk7XG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUYWdDb25kaXRpb24odGFnOiBJbmZsdXhRdWVyeVRhZywgaW5kZXg6IG51bWJlciwgaW50ZXJwb2xhdGU/OiBib29sZWFuKSB7XG4gICAgLy8gRklYTUU6IG1lcmdlIHRoaXMgZnVuY3Rpb24gd2l0aCBxdWVyeV9idWlsZGVyL3JlbmRlclRhZ0NvbmRpdGlvblxuICAgIGxldCBzdHIgPSAnJztcbiAgICBsZXQgb3BlcmF0b3IgPSB0YWcub3BlcmF0b3I7XG4gICAgbGV0IHZhbHVlID0gdGFnLnZhbHVlO1xuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIHN0ciA9ICh0YWcuY29uZGl0aW9uIHx8ICdBTkQnKSArICcgJztcbiAgICB9XG5cbiAgICBpZiAoIW9wZXJhdG9yKSB7XG4gICAgICBpZiAoL15cXC8uKlxcLyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIG9wZXJhdG9yID0gJz1+JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZXJhdG9yID0gJz0nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHF1b3RlIHZhbHVlIHVubGVzcyByZWdleFxuICAgIGlmIChvcGVyYXRvciAhPT0gJz1+JyAmJiBvcGVyYXRvciAhPT0gJyF+Jykge1xuICAgICAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHZhbHVlLCB0aGlzLnNjb3BlZFZhcnMpO1xuICAgICAgfVxuICAgICAgaWYgKG9wZXJhdG9yICE9PSAnPicgJiYgb3BlcmF0b3IgIT09ICc8Jykge1xuICAgICAgICB2YWx1ZSA9IFwiJ1wiICsgdmFsdWUucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKS5yZXBsYWNlKC9cXCcvZywgXCJcXFxcJ1wiKSArIFwiJ1wiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgIHZhbHVlID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHZhbHVlLCB0aGlzLnNjb3BlZFZhcnMsICdyZWdleCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIgKyAnXCInICsgdGFnLmtleSArICdcIiAnICsgb3BlcmF0b3IgKyAnICcgKyB2YWx1ZTtcbiAgfVxuXG4gIGdldE1lYXN1cmVtZW50QW5kUG9saWN5KGludGVycG9sYXRlOiBhbnkpIHtcbiAgICBsZXQgcG9saWN5ID0gdGhpcy50YXJnZXQucG9saWN5O1xuICAgIGxldCBtZWFzdXJlbWVudCA9IHRoaXMudGFyZ2V0Lm1lYXN1cmVtZW50IHx8ICdtZWFzdXJlbWVudCc7XG5cbiAgICBpZiAoIW1lYXN1cmVtZW50Lm1hdGNoKCdeLy4qLyQnKSkge1xuICAgICAgbWVhc3VyZW1lbnQgPSAnXCInICsgbWVhc3VyZW1lbnQgKyAnXCInO1xuICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgIG1lYXN1cmVtZW50ID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG1lYXN1cmVtZW50LCB0aGlzLnNjb3BlZFZhcnMsICdyZWdleCcpO1xuICAgIH1cblxuICAgIGlmIChwb2xpY3kgIT09ICdkZWZhdWx0Jykge1xuICAgICAgcG9saWN5ID0gJ1wiJyArIHRoaXMudGFyZ2V0LnBvbGljeSArICdcIi4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb2xpY3kgPSAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gcG9saWN5ICsgbWVhc3VyZW1lbnQ7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVF1ZXJ5U3RyKHZhbHVlOiBhbnlbXSwgdmFyaWFibGU6IHsgbXVsdGk6IGFueTsgaW5jbHVkZUFsbDogYW55IH0sIGRlZmF1bHRGb3JtYXRGbjogYW55KSB7XG4gICAgLy8gaWYgbm8gbXVsdGkgb3IgaW5jbHVkZSBhbGwgZG8gbm90IHJlZ2V4RXNjYXBlXG4gICAgaWYgKCF2YXJpYWJsZS5tdWx0aSAmJiAhdmFyaWFibGUuaW5jbHVkZUFsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ga2JuLnJlZ2V4RXNjYXBlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBlc2NhcGVkVmFsdWVzID0gbWFwKHZhbHVlLCBrYm4ucmVnZXhFc2NhcGUpO1xuICAgIHJldHVybiAnKCcgKyBlc2NhcGVkVmFsdWVzLmpvaW4oJ3wnKSArICcpJztcbiAgfVxuXG4gIHJlbmRlcihpbnRlcnBvbGF0ZT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcblxuICAgIGlmICh0YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHRhcmdldC5xdWVyeSwgdGhpcy5zY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5xdWVyeTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUICc7XG4gICAgbGV0IGksIHk7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2VsZWN0TW9kZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHRoaXMuc2VsZWN0TW9kZWxzW2ldO1xuICAgICAgbGV0IHNlbGVjdFRleHQgPSAnJztcbiAgICAgIGZvciAoeSA9IDA7IHkgPCBwYXJ0cy5sZW5ndGg7IHkrKykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbeV07XG4gICAgICAgIHNlbGVjdFRleHQgPSBwYXJ0LnJlbmRlcihzZWxlY3RUZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIHF1ZXJ5ICs9ICcsICc7XG4gICAgICB9XG4gICAgICBxdWVyeSArPSBzZWxlY3RUZXh0O1xuICAgIH1cblxuICAgIHF1ZXJ5ICs9ICcgRlJPTSAnICsgdGhpcy5nZXRNZWFzdXJlbWVudEFuZFBvbGljeShpbnRlcnBvbGF0ZSkgKyAnIFdIRVJFICc7XG4gICAgY29uc3QgY29uZGl0aW9ucyA9IG1hcCh0YXJnZXQudGFncywgKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhZ0NvbmRpdGlvbih0YWcsIGluZGV4LCBpbnRlcnBvbGF0ZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29uZGl0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBxdWVyeSArPSAnKCcgKyBjb25kaXRpb25zLmpvaW4oJyAnKSArICcpIEFORCAnO1xuICAgIH1cblxuICAgIHF1ZXJ5ICs9ICckdGltZUZpbHRlcic7XG5cbiAgICBsZXQgZ3JvdXBCeVNlY3Rpb24gPSAnJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5ncm91cEJ5UGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdyb3VwQnlQYXJ0c1tpXTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAvLyBmb3Igc29tZSByZWFzb24gZmlsbCBoYXMgbm8gc2VwYXJhdG9yXG4gICAgICAgIGdyb3VwQnlTZWN0aW9uICs9IHBhcnQuZGVmLnR5cGUgPT09ICdmaWxsJyA/ICcgJyA6ICcsICc7XG4gICAgICB9XG4gICAgICBncm91cEJ5U2VjdGlvbiArPSBwYXJ0LnJlbmRlcignJyk7XG4gICAgfVxuXG4gICAgaWYgKGdyb3VwQnlTZWN0aW9uLmxlbmd0aCkge1xuICAgICAgcXVlcnkgKz0gJyBHUk9VUCBCWSAnICsgZ3JvdXBCeVNlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5maWxsKSB7XG4gICAgICBxdWVyeSArPSAnIGZpbGwoJyArIHRhcmdldC5maWxsICsgJyknO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQub3JkZXJCeVRpbWUgPT09ICdERVNDJykge1xuICAgICAgcXVlcnkgKz0gJyBPUkRFUiBCWSB0aW1lIERFU0MnO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQubGltaXQpIHtcbiAgICAgIHF1ZXJ5ICs9ICcgTElNSVQgJyArIHRhcmdldC5saW1pdDtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LnNsaW1pdCkge1xuICAgICAgcXVlcnkgKz0gJyBTTElNSVQgJyArIHRhcmdldC5zbGltaXQ7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC50eikge1xuICAgICAgcXVlcnkgKz0gXCIgdHooJ1wiICsgdGFyZ2V0LnR6ICsgXCInKVwiO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIHJlbmRlckFkaG9jRmlsdGVycyhmaWx0ZXJzOiBhbnlbXSkge1xuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBtYXAoZmlsdGVycywgKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhZ0NvbmRpdGlvbih0YWcsIGluZGV4LCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29uZGl0aW9ucy5qb2luKCcgJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGVhY2gsIG1hcCwgaW5jbHVkZXMsIGZsYXR0ZW4sIGtleXMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRhYmxlTW9kZWwgZnJvbSAnYXBwL2NvcmUvdGFibGVfbW9kZWwnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBRdWVyeVJlc3VsdE1ldGEsIFRpbWVTZXJpZXMsIFRhYmxlRGF0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZsdXhTZXJpZXMge1xuICByZWZJZD86IHN0cmluZztcbiAgc2VyaWVzOiBhbnk7XG4gIGFsaWFzOiBhbnk7XG4gIGFubm90YXRpb246IGFueTtcbiAgbWV0YT86IFF1ZXJ5UmVzdWx0TWV0YTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiB7IHNlcmllczogYW55OyBhbGlhcz86IGFueTsgYW5ub3RhdGlvbj86IGFueTsgbWV0YT86IFF1ZXJ5UmVzdWx0TWV0YTsgcmVmSWQ/OiBzdHJpbmcgfSkge1xuICAgIHRoaXMuc2VyaWVzID0gb3B0aW9ucy5zZXJpZXM7XG4gICAgdGhpcy5hbGlhcyA9IG9wdGlvbnMuYWxpYXM7XG4gICAgdGhpcy5hbm5vdGF0aW9uID0gb3B0aW9ucy5hbm5vdGF0aW9uO1xuICAgIHRoaXMubWV0YSA9IG9wdGlvbnMubWV0YTtcbiAgICB0aGlzLnJlZklkID0gb3B0aW9ucy5yZWZJZDtcbiAgfVxuXG4gIGdldFRpbWVTZXJpZXMoKTogVGltZVNlcmllc1tdIHtcbiAgICBjb25zdCBvdXRwdXQ6IFRpbWVTZXJpZXNbXSA9IFtdO1xuICAgIGxldCBpLCBqO1xuXG4gICAgaWYgKHRoaXMuc2VyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMuc2VyaWVzLCAoc2VyaWVzKSA9PiB7XG4gICAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzLmNvbHVtbnMubGVuZ3RoO1xuICAgICAgY29uc3QgdGFncyA9IG1hcChzZXJpZXMudGFncywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGtleSArICc6ICcgKyB2YWx1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKGogPSAxOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIGxldCBzZXJpZXNOYW1lID0gc2VyaWVzLm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbHVtbk5hbWUgPSBzZXJpZXMuY29sdW1uc1tqXTtcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgIT09ICd2YWx1ZScpIHtcbiAgICAgICAgICBzZXJpZXNOYW1lID0gc2VyaWVzTmFtZSArICcuJyArIGNvbHVtbk5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbGlhcykge1xuICAgICAgICAgIHNlcmllc05hbWUgPSB0aGlzLl9nZXRTZXJpZXNOYW1lKHNlcmllcywgaik7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VyaWVzLnRhZ3MpIHtcbiAgICAgICAgICBzZXJpZXNOYW1lID0gc2VyaWVzTmFtZSArICcgeycgKyB0YWdzLmpvaW4oJywgJykgKyAnfSc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhcG9pbnRzID0gW107XG4gICAgICAgIGlmIChzZXJpZXMudmFsdWVzKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlcmllcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFwb2ludHNbaV0gPSBbc2VyaWVzLnZhbHVlc1tpXVtqXSwgc2VyaWVzLnZhbHVlc1tpXVswXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0LnB1c2goe1xuICAgICAgICAgIHRpdGxlOiBzZXJpZXNOYW1lLFxuICAgICAgICAgIHRhcmdldDogc2VyaWVzTmFtZSxcbiAgICAgICAgICBkYXRhcG9pbnRzOiBkYXRhcG9pbnRzLFxuICAgICAgICAgIHRhZ3M6IHNlcmllcy50YWdzLFxuICAgICAgICAgIG1ldGE6IHRoaXMubWV0YSxcbiAgICAgICAgICByZWZJZDogdGhpcy5yZWZJZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgX2dldFNlcmllc05hbWUoc2VyaWVzOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXCQoXFx3Kyl8XFxbXFxbKFtcXHNcXFNdKz8pXFxdXFxdL2c7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBzZXJpZXMubmFtZS5zcGxpdCgnLicpO1xuXG4gICAgcmV0dXJuIHRoaXMuYWxpYXMucmVwbGFjZShyZWdleCwgKG1hdGNoOiBhbnksIGcxOiBhbnksIGcyOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwID0gZzEgfHwgZzI7XG4gICAgICBjb25zdCBzZWdJbmRleCA9IHBhcnNlSW50KGdyb3VwLCAxMCk7XG5cbiAgICAgIGlmIChncm91cCA9PT0gJ20nIHx8IGdyb3VwID09PSAnbWVhc3VyZW1lbnQnKSB7XG4gICAgICAgIHJldHVybiBzZXJpZXMubmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChncm91cCA9PT0gJ2NvbCcpIHtcbiAgICAgICAgcmV0dXJuIHNlcmllcy5jb2x1bW5zW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNOYU4oc2VnSW5kZXgpKSB7XG4gICAgICAgIHJldHVybiBzZWdtZW50c1tzZWdJbmRleF0gPz8gbWF0Y2g7XG4gICAgICB9XG4gICAgICBpZiAoZ3JvdXAuaW5kZXhPZigndGFnXycpICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGFnID0gZ3JvdXAucmVwbGFjZSgndGFnXycsICcnKTtcbiAgICAgIGlmICghc2VyaWVzLnRhZ3MpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlcmllcy50YWdzW3RhZ107XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbm5vdGF0aW9ucygpIHtcbiAgICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xuXG4gICAgZWFjaCh0aGlzLnNlcmllcywgKHNlcmllcykgPT4ge1xuICAgICAgbGV0IHRpdGxlQ29sOiBhbnkgPSBudWxsO1xuICAgICAgbGV0IHRpbWVDb2w6IGFueSA9IG51bGw7XG4gICAgICBsZXQgdGltZUVuZENvbDogYW55ID0gbnVsbDtcbiAgICAgIGNvbnN0IHRhZ3NDb2w6IGFueSA9IFtdO1xuICAgICAgbGV0IHRleHRDb2w6IGFueSA9IG51bGw7XG5cbiAgICAgIGVhY2goc2VyaWVzLmNvbHVtbnMsIChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4gPT09ICd0aW1lJykge1xuICAgICAgICAgIHRpbWVDb2wgPSBpbmRleDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gJ3NlcXVlbmNlX251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gdGhpcy5hbm5vdGF0aW9uLnRpdGxlQ29sdW1uKSB7XG4gICAgICAgICAgdGl0bGVDb2wgPSBpbmRleDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluY2x1ZGVzKCh0aGlzLmFubm90YXRpb24udGFnc0NvbHVtbiB8fCAnJykucmVwbGFjZSgnICcsICcnKS5zcGxpdCgnLCcpLCBjb2x1bW4pKSB7XG4gICAgICAgICAgdGFnc0NvbC5wdXNoKGluZGV4KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gdGhpcy5hbm5vdGF0aW9uLnRleHRDb2x1bW4pIHtcbiAgICAgICAgICB0ZXh0Q29sID0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT09IHRoaXMuYW5ub3RhdGlvbi50aW1lRW5kQ29sdW1uKSB7XG4gICAgICAgICAgdGltZUVuZENvbCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBsZWdhY3kgY2FzZVxuICAgICAgICBpZiAoIXRpdGxlQ29sICYmIHRleHRDb2wgIT09IGluZGV4KSB7XG4gICAgICAgICAgdGl0bGVDb2wgPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGVhY2goc2VyaWVzLnZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgYW5ub3RhdGlvbjogdGhpcy5hbm5vdGF0aW9uLFxuICAgICAgICAgIHRpbWU6ICtuZXcgRGF0ZSh2YWx1ZVt0aW1lQ29sXSksXG4gICAgICAgICAgdGl0bGU6IHZhbHVlW3RpdGxlQ29sXSxcbiAgICAgICAgICB0aW1lRW5kOiB2YWx1ZVt0aW1lRW5kQ29sXSxcbiAgICAgICAgICAvLyBSZW1vdmUgZW1wdHkgdmFsdWVzLCB0aGVuIHNwbGl0IGluIGRpZmZlcmVudCB0YWdzIGZvciBjb21tYSBzZXBhcmF0ZWQgdmFsdWVzXG4gICAgICAgICAgdGFnczogZmxhdHRlbihcbiAgICAgICAgICAgIHRhZ3NDb2xcbiAgICAgICAgICAgICAgLmZpbHRlcigodDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3RdO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAubWFwKCh0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbdF0uc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRleHQ6IHZhbHVlW3RleHRDb2xdLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxpc3QucHVzaChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBnZXRUYWJsZSgpOiBUYWJsZURhdGEge1xuICAgIGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlTW9kZWwoKTtcbiAgICBsZXQgaSwgajtcblxuICAgIHRhYmxlLnJlZklkID0gdGhpcy5yZWZJZDtcbiAgICB0YWJsZS5tZXRhID0gdGhpcy5tZXRhO1xuXG4gICAgaWYgKHRoaXMuc2VyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRhYmxlO1xuICAgIH1cblxuICAgIC8vIHRoZSBvcmRlciBpczpcbiAgICAvLyAtIGZpcnN0IHRoZSBmaXJzdCBpdGVtIGZyb20gdGhlIHZhbHVlLWFycmF5ICh0aGlzIGlzIG9mdGVuIChhbHdheXM/KSB0aGUgdGltZXN0YW1wKVxuICAgIC8vIC0gdGhlbiBhbGwgdGhlIHRhZy12YWx1ZXNcbiAgICAvLyAtIHRoZW4gdGhlIHJlc3Qgb2YgdGhlIHZhbHVlLWFycmF5XG4gICAgLy9cbiAgICAvLyB3ZSBoYXZlIHRvIGtlZXAgdGhpcyBvcmRlciBib3RoIGluIHRhYmxlLmNvbHVtbnMgYW5kIHRhYmxlLnJvd3NcblxuICAgIGVhY2godGhpcy5zZXJpZXMsIChzZXJpZXM6IGFueSwgc2VyaWVzSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHNlcmllc0luZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29sID0gc2VyaWVzLmNvbHVtbnNbMF07XG4gICAgICAgIC8vIENoZWNrIHRoZSBmaXJzdCBjb2x1bW4ncyBuYW1lLCBpZiBpdCBpcyBgdGltZWAsIHdlXG4gICAgICAgIC8vIG1hcmsgaXQgYXMgaGF2aW5nIHRoZSB0eXBlIHRpbWVcbiAgICAgICAgY29uc3QgZmlyc3RUYWJsZUNvbCA9IGZpcnN0Q29sID09PSAndGltZScgPyB7IHRleHQ6ICdUaW1lJywgdHlwZTogRmllbGRUeXBlLnRpbWUgfSA6IHsgdGV4dDogZmlyc3RDb2wgfTtcbiAgICAgICAgdGFibGUuY29sdW1ucy5wdXNoKGZpcnN0VGFibGVDb2wpO1xuICAgICAgICBlYWNoKGtleXMoc2VyaWVzLnRhZ3MpLCAoa2V5KSA9PiB7XG4gICAgICAgICAgdGFibGUuY29sdW1ucy5wdXNoKHsgdGV4dDoga2V5IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChqID0gMTsgaiA8IHNlcmllcy5jb2x1bW5zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdGFibGUuY29sdW1ucy5wdXNoKHsgdGV4dDogc2VyaWVzLmNvbHVtbnNbal0gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNlcmllcy52YWx1ZXMpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlcmllcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBzZXJpZXMudmFsdWVzW2ldO1xuICAgICAgICAgIGNvbnN0IHJlb3JkZXJlZCA9IFt2YWx1ZXNbMF1dO1xuICAgICAgICAgIGlmIChzZXJpZXMudGFncykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2VyaWVzLnRhZ3MpIHtcbiAgICAgICAgICAgICAgaWYgKHNlcmllcy50YWdzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICByZW9yZGVyZWQucHVzaChzZXJpZXMudGFnc1trZXldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgdmFsdWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICByZW9yZGVyZWQucHVzaCh2YWx1ZXNbal0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWJsZS5yb3dzLnB1c2gocmVvcmRlcmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG59XG4iLCJpbXBvcnQgSW5mbHV4RGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvUXVlcnlFZGl0b3InO1xuaW1wb3J0IEluZmx1eFN0YXJ0UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvSW5mbHV4U3RhcnRQYWdlJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCBDb25maWdFZGl0b3IgZnJvbSAnLi9jb21wb25lbnRzL0NvbmZpZ0VkaXRvcic7XG5pbXBvcnQgVmFyaWFibGVRdWVyeUVkaXRvciBmcm9tICcuL2NvbXBvbmVudHMvVmFyaWFibGVRdWVyeUVkaXRvcic7XG5cbmNsYXNzIEluZmx1eEFubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcbn1cblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luKEluZmx1eERhdGFzb3VyY2UpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKVxuICAuc2V0UXVlcnlFZGl0b3IoUXVlcnlFZGl0b3IpXG4gIC5zZXRBbm5vdGF0aW9uUXVlcnlDdHJsKEluZmx1eEFubm90YXRpb25zUXVlcnlDdHJsKVxuICAuc2V0VmFyaWFibGVRdWVyeUVkaXRvcihWYXJpYWJsZVF1ZXJ5RWRpdG9yKVxuICAuc2V0UXVlcnlFZGl0b3JIZWxwKEluZmx1eFN0YXJ0UGFnZSk7XG4iLCJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEluZmx1eFF1ZXJ5TW9kZWwgZnJvbSAnLi9pbmZsdXhfcXVlcnlfbW9kZWwnO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gRklYTUU6IHRoZXNlIGZ1bmN0aW9ucyBhcmUgYSBiZWdpbm5pbmcgb2YgYSByZWZhY3RvcmluZyBvZiBpbmZsdXhfcXVlcnlfbW9kZWwudHNcbi8vIGludG8gYSBzaW1wbGVyIGFwcHJvYWNoIHdpdGggZnVsbCB0eXBlc2NyaXB0IHR5cGVzLlxuLy8gbGF0ZXIgd2Ugc2hvdWxkIGJlIGFibGUgdG8gbWlncmF0ZSB0aGUgdW5pdC10ZXN0c1xuLy8gdGhhdCByZWxhdGUgdG8gdGhlc2UgZnVuY3Rpb25zIGhlcmUsIGFuZCB0aGVuIHBlcmhhcHMgZXZlbiBtb3ZlIHRoZSBpbXBsZW1lbnRhdGlvblxuLy8gdG8gdGhpcyBwbGFjZVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSYXdRdWVyeShxdWVyeTogSW5mbHV4UXVlcnkpOiBzdHJpbmcge1xuICBjb25zdCBxdWVyeUNvcHkgPSBjbG9uZURlZXAocXVlcnkpOyAvLyB0aGUgcXVlcnktbW9kZWwgbXV0YXRlcyB0aGUgcXVlcnlcbiAgY29uc3QgbW9kZWwgPSBuZXcgSW5mbHV4UXVlcnlNb2RlbChxdWVyeUNvcHkpO1xuICByZXR1cm4gbW9kZWwucmVuZGVyKGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVF1ZXJ5KHF1ZXJ5OiBJbmZsdXhRdWVyeSk6IEluZmx1eFF1ZXJ5IHtcbiAgLy8gd2UgcmV0dXJuIHRoZSBvcmlnaW5hbCBxdWVyeSBpZiB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZSBpdFxuICBpZiAoXG4gICAgcXVlcnkucG9saWN5ICE9PSB1bmRlZmluZWQgJiZcbiAgICBxdWVyeS5yZXN1bHRGb3JtYXQgIT09IHVuZGVmaW5lZCAmJlxuICAgIHF1ZXJ5Lm9yZGVyQnlUaW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICBxdWVyeS50YWdzICE9PSB1bmRlZmluZWQgJiZcbiAgICBxdWVyeS5ncm91cEJ5ICE9PSB1bmRlZmluZWQgJiZcbiAgICBxdWVyeS5zZWxlY3QgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvLyBGSVhNRTogd2Ugc2hvdWxkIG1vdmUgdGhlIHdob2xlIG5vcm1hbGl6ZVF1ZXJ5IGxvZ2ljIGhlcmUsXG4gIC8vIGFuZCB0aGVuIGhhdmUgaW5mbHV4UXVlcnlNb2RlbCBjYWxsIHRoaXMgZnVuY3Rpb24sXG4gIC8vIHRvIGNvbmNlbnRyYXRlIHRoZSB3aG9sZSBsb2dpYyBoZXJlXG5cbiAgY29uc3QgcXVlcnlDb3B5ID0gY2xvbmVEZWVwKHF1ZXJ5KTsgLy8gdGhlIHF1ZXJ5LW1vZGVsIG11dGF0ZXMgdGhlIHF1ZXJ5XG4gIHJldHVybiBuZXcgSW5mbHV4UXVlcnlNb2RlbChxdWVyeUNvcHkpLnRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1NlbGVjdFBhcnQocXVlcnk6IEluZmx1eFF1ZXJ5LCB0eXBlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBJbmZsdXhRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5Q29weSA9IGNsb25lRGVlcChxdWVyeSk7IC8vIHRoZSBxdWVyeS1tb2RlbCBtdXRhdGVzIHRoZSBxdWVyeVxuICBjb25zdCBtb2RlbCA9IG5ldyBJbmZsdXhRdWVyeU1vZGVsKHF1ZXJ5Q29weSk7XG4gIG1vZGVsLmFkZFNlbGVjdFBhcnQobW9kZWwuc2VsZWN0TW9kZWxzW2luZGV4XSwgdHlwZSk7XG4gIHJldHVybiBtb2RlbC50YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTZWxlY3RQYXJ0KHF1ZXJ5OiBJbmZsdXhRdWVyeSwgcGFydEluZGV4OiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBJbmZsdXhRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5Q29weSA9IGNsb25lRGVlcChxdWVyeSk7IC8vIHRoZSBxdWVyeS1tb2RlbCBtdXRhdGVzIHRoZSBxdWVyeVxuICBjb25zdCBtb2RlbCA9IG5ldyBJbmZsdXhRdWVyeU1vZGVsKHF1ZXJ5Q29weSk7XG4gIGNvbnN0IHNlbGVjdE1vZGVsID0gbW9kZWwuc2VsZWN0TW9kZWxzW2luZGV4XTtcbiAgbW9kZWwucmVtb3ZlU2VsZWN0UGFydChzZWxlY3RNb2RlbCwgc2VsZWN0TW9kZWxbcGFydEluZGV4XSk7XG4gIHJldHVybiBtb2RlbC50YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTZWxlY3RQYXJ0KFxuICBxdWVyeTogSW5mbHV4UXVlcnksXG4gIGxpc3RJbmRleDogbnVtYmVyLFxuICBwYXJ0SW5kZXg6IG51bWJlcixcbiAgbmV3UGFyYW1zOiBzdHJpbmdbXVxuKTogSW5mbHV4UXVlcnkge1xuICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc2hhbGxvdyBjb3B5IG9mIGBxdWVyeS5zZWxlY3RgIGRvd24gdG8gYHF1ZXJ5LnNlbGVjdFtsaXN0SW5kZXhdW3BhcnRJbmRleF1gXG4gIGNvbnN0IG5ld1NlbCA9IFsuLi4ocXVlcnkuc2VsZWN0ID8/IFtdKV07XG4gIG5ld1NlbFtsaXN0SW5kZXhdID0gWy4uLm5ld1NlbFtsaXN0SW5kZXhdXTtcbiAgbmV3U2VsW2xpc3RJbmRleF1bcGFydEluZGV4XSA9IHtcbiAgICAuLi5uZXdTZWxbbGlzdEluZGV4XVtwYXJ0SW5kZXhdLFxuICAgIHBhcmFtczogbmV3UGFyYW1zLFxuICB9O1xuICByZXR1cm4geyAuLi5xdWVyeSwgc2VsZWN0OiBuZXdTZWwgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0dyb3VwQnlQYXJ0KHF1ZXJ5OiBJbmZsdXhRdWVyeSwgdHlwZTogc3RyaW5nKTogSW5mbHV4UXVlcnkge1xuICBjb25zdCBxdWVyeUNvcHkgPSBjbG9uZURlZXAocXVlcnkpOyAvLyB0aGUgcXVlcnktbW9kZWwgbXV0YXRlcyB0aGUgcXVlcnlcbiAgY29uc3QgbW9kZWwgPSBuZXcgSW5mbHV4UXVlcnlNb2RlbChxdWVyeUNvcHkpO1xuICBtb2RlbC5hZGRHcm91cEJ5KHR5cGUpO1xuICByZXR1cm4gbW9kZWwudGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlR3JvdXBCeVBhcnQocXVlcnk6IEluZmx1eFF1ZXJ5LCBwYXJ0SW5kZXg6IG51bWJlcik6IEluZmx1eFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnlDb3B5ID0gY2xvbmVEZWVwKHF1ZXJ5KTsgLy8gdGhlIHF1ZXJ5LW1vZGVsIG11dGF0ZXMgdGhlIHF1ZXJ5XG4gIGNvbnN0IG1vZGVsID0gbmV3IEluZmx1eFF1ZXJ5TW9kZWwocXVlcnlDb3B5KTtcbiAgbW9kZWwucmVtb3ZlR3JvdXBCeVBhcnQobW9kZWwuZ3JvdXBCeVBhcnRzW3BhcnRJbmRleF0sIHBhcnRJbmRleCk7XG4gIHJldHVybiBtb2RlbC50YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VHcm91cEJ5UGFydChxdWVyeTogSW5mbHV4UXVlcnksIHBhcnRJbmRleDogbnVtYmVyLCBuZXdQYXJhbXM6IHN0cmluZ1tdKTogSW5mbHV4UXVlcnkge1xuICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc2hhbGxvdyBjb3B5IG9mIGBxdWVyeS5ncm91cEJ5YCBkb3duIHRvIGBxdWVyeS5ncm91cEJ5W3BhcnRJbmRleF1gXG4gIGNvbnN0IG5ld0dyb3VwQnkgPSBbLi4uKHF1ZXJ5Lmdyb3VwQnkgPz8gW10pXTtcbiAgbmV3R3JvdXBCeVtwYXJ0SW5kZXhdID0ge1xuICAgIC4uLm5ld0dyb3VwQnlbcGFydEluZGV4XSxcbiAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgfTtcbiAgcmV0dXJuIHsgLi4ucXVlcnksIGdyb3VwQnk6IG5ld0dyb3VwQnkgfTtcbn1cbiIsImltcG9ydCB7IHJlZHVjZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQga2JuIGZyb20gJ2FwcC9jb3JlL3V0aWxzL2tibic7XG5cbmZ1bmN0aW9uIHJlbmRlclRhZ0NvbmRpdGlvbih0YWc6IHsgb3BlcmF0b3I6IGFueTsgdmFsdWU6IHN0cmluZzsgY29uZGl0aW9uOiBhbnk7IGtleTogc3RyaW5nIH0sIGluZGV4OiBudW1iZXIpIHtcbiAgLy8gRklYTUU6IG1lcmdlIHRoaXMgZnVuY3Rpb24gd2l0aCBpbmZsdXhfcXVlcnlfbW9kZWwvcmVuZGVyVGFnQ29uZGl0aW9uXG4gIGxldCBzdHIgPSAnJztcbiAgbGV0IG9wZXJhdG9yID0gdGFnLm9wZXJhdG9yO1xuICBsZXQgdmFsdWUgPSB0YWcudmFsdWU7XG4gIGlmIChpbmRleCA+IDApIHtcbiAgICBzdHIgPSAodGFnLmNvbmRpdGlvbiB8fCAnQU5EJykgKyAnICc7XG4gIH1cblxuICBpZiAoIW9wZXJhdG9yKSB7XG4gICAgaWYgKC9eXFwvLipcXC8kLy50ZXN0KHRhZy52YWx1ZSkpIHtcbiAgICAgIG9wZXJhdG9yID0gJz1+JztcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlcmF0b3IgPSAnPSc7XG4gICAgfVxuICB9XG5cbiAgLy8gcXVvdGUgdmFsdWUgdW5sZXNzIHJlZ2V4IG9yIG51bWJlciwgb3IgaWYgZW1wdHktc3RyaW5nXG4gIGlmICh2YWx1ZSA9PT0gJycgfHwgKG9wZXJhdG9yICE9PSAnPX4nICYmIG9wZXJhdG9yICE9PSAnIX4nICYmIGlzTmFOKCt2YWx1ZSkpKSB7XG4gICAgdmFsdWUgPSBcIidcIiArIHZhbHVlLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJykucmVwbGFjZSgvXFwnL2csIFwiXFxcXCdcIikgKyBcIidcIjtcbiAgfVxuXG4gIHJldHVybiBzdHIgKyAnXCInICsgdGFnLmtleSArICdcIiAnICsgb3BlcmF0b3IgKyAnICcgKyB2YWx1ZTtcbn1cblxuZXhwb3J0IGNsYXNzIEluZmx1eFF1ZXJ5QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFyZ2V0OiB7IG1lYXN1cmVtZW50OiBhbnk7IHRhZ3M6IGFueTsgcG9saWN5PzogYW55IH0sIHByaXZhdGUgZGF0YWJhc2U/OiBzdHJpbmcpIHt9XG5cbiAgYnVpbGRFeHBsb3JlUXVlcnkodHlwZTogc3RyaW5nLCB3aXRoS2V5Pzogc3RyaW5nLCB3aXRoTWVhc3VyZW1lbnRGaWx0ZXI/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGxldCBtZWFzdXJlbWVudDtcbiAgICBsZXQgcG9saWN5O1xuXG4gICAgaWYgKHR5cGUgPT09ICdUQUdfS0VZUycpIHtcbiAgICAgIHF1ZXJ5ID0gJ1NIT1cgVEFHIEtFWVMnO1xuICAgICAgbWVhc3VyZW1lbnQgPSB0aGlzLnRhcmdldC5tZWFzdXJlbWVudDtcbiAgICAgIHBvbGljeSA9IHRoaXMudGFyZ2V0LnBvbGljeTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdUQUdfVkFMVUVTJykge1xuICAgICAgcXVlcnkgPSAnU0hPVyBUQUcgVkFMVUVTJztcbiAgICAgIG1lYXN1cmVtZW50ID0gdGhpcy50YXJnZXQubWVhc3VyZW1lbnQ7XG4gICAgICBwb2xpY3kgPSB0aGlzLnRhcmdldC5wb2xpY3k7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnTUVBU1VSRU1FTlRTJykge1xuICAgICAgcXVlcnkgPSAnU0hPVyBNRUFTVVJFTUVOVFMnO1xuICAgICAgaWYgKHdpdGhNZWFzdXJlbWVudEZpbHRlcikge1xuICAgICAgICAvLyB3ZSBkbyBhIGNhc2UtaW5zZW5zaXRpdmUgcmVnZXgtYmFzZWQgbG9va3VwXG4gICAgICAgIHF1ZXJ5ICs9ICcgV0lUSCBNRUFTVVJFTUVOVCA9fiAvKD9pKScgKyBrYm4ucmVnZXhFc2NhcGUod2l0aE1lYXN1cmVtZW50RmlsdGVyKSArICcvJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdGSUVMRFMnKSB7XG4gICAgICBtZWFzdXJlbWVudCA9IHRoaXMudGFyZ2V0Lm1lYXN1cmVtZW50O1xuICAgICAgcG9saWN5ID0gdGhpcy50YXJnZXQucG9saWN5O1xuXG4gICAgICBpZiAoIW1lYXN1cmVtZW50Lm1hdGNoKCdeLy4qLycpKSB7XG4gICAgICAgIG1lYXN1cmVtZW50ID0gJ1wiJyArIG1lYXN1cmVtZW50ICsgJ1wiJztcblxuICAgICAgICBpZiAocG9saWN5ICYmIHBvbGljeSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgcG9saWN5ID0gJ1wiJyArIHBvbGljeSArICdcIic7XG4gICAgICAgICAgbWVhc3VyZW1lbnQgPSBwb2xpY3kgKyAnLicgKyBtZWFzdXJlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gJ1NIT1cgRklFTEQgS0VZUyBGUk9NICcgKyBtZWFzdXJlbWVudDtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdSRVRFTlRJT04gUE9MSUNJRVMnKSB7XG4gICAgICBxdWVyeSA9ICdTSE9XIFJFVEVOVElPTiBQT0xJQ0lFUyBvbiBcIicgKyB0aGlzLmRhdGFiYXNlICsgJ1wiJztcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG5cbiAgICBpZiAobWVhc3VyZW1lbnQpIHtcbiAgICAgIGlmICghbWVhc3VyZW1lbnQubWF0Y2goJ14vLiovJykgJiYgIW1lYXN1cmVtZW50Lm1hdGNoKC9ebWVyZ2VcXCguKlxcKS8pKSB7XG4gICAgICAgIG1lYXN1cmVtZW50ID0gJ1wiJyArIG1lYXN1cmVtZW50ICsgJ1wiJztcbiAgICAgIH1cblxuICAgICAgaWYgKHBvbGljeSAmJiBwb2xpY3kgIT09ICdkZWZhdWx0Jykge1xuICAgICAgICBwb2xpY3kgPSAnXCInICsgcG9saWN5ICsgJ1wiJztcbiAgICAgICAgbWVhc3VyZW1lbnQgPSBwb2xpY3kgKyAnLicgKyBtZWFzdXJlbWVudDtcbiAgICAgIH1cblxuICAgICAgcXVlcnkgKz0gJyBGUk9NICcgKyBtZWFzdXJlbWVudDtcbiAgICB9XG5cbiAgICBpZiAod2l0aEtleSkge1xuICAgICAgcXVlcnkgKz0gJyBXSVRIIEtFWSA9IFwiJyArIHdpdGhLZXkgKyAnXCInO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRhcmdldC50YWdzICYmIHRoaXMudGFyZ2V0LnRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgd2hlcmVDb25kaXRpb25zID0gcmVkdWNlKFxuICAgICAgICB0aGlzLnRhcmdldC50YWdzLFxuICAgICAgICAobWVtbywgdGFnKSA9PiB7XG4gICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGNvbmRpdGlvbiBmb3IgdGhlIGtleSB3ZSB3YW50IHRvIGV4cGxvcmUgZm9yXG4gICAgICAgICAgaWYgKHRhZy5rZXkgPT09IHdpdGhLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHZhbHVlIG9wZXJhdG9ycyBub3Qgc3VwcG9ydGVkIGluIHRoZXNlIHR5cGVzIG9mIHF1ZXJpZXNcbiAgICAgICAgICBpZiAodGFnLm9wZXJhdG9yID09PSAnPicgfHwgdGFnLm9wZXJhdG9yID09PSAnPCcpIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lbW8ucHVzaChyZW5kZXJUYWdDb25kaXRpb24odGFnLCBtZW1vLmxlbmd0aCkpO1xuICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICB9LFxuICAgICAgICBbXSBhcyBzdHJpbmdbXVxuICAgICAgKTtcblxuICAgICAgaWYgKHdoZXJlQ29uZGl0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHF1ZXJ5ICs9ICcgV0hFUkUgJyArIHdoZXJlQ29uZGl0aW9ucy5qb2luKCcgJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdNRUFTVVJFTUVOVFMnKSB7XG4gICAgICBxdWVyeSArPSAnIExJTUlUIDEwMCc7XG4gICAgICAvL1NvbHZlIGlzc3VlICMyNTI0IGJ5IGxpbWl0aW5nIHRoZSBudW1iZXIgb2YgbWVhc3VyZW1lbnRzIHJldHVybmVkXG4gICAgICAvL0xJTUlUIG11c3QgYmUgYWZ0ZXIgV0lUSCBNRUFTVVJFTUVOVCBhbmQgV0hFUkUgY2xhdXNlc1xuICAgICAgLy9UaGlzIGFsc28gY291bGQgYmUgdXNlZCBmb3IgVEFHIEtFWVMgYW5kIFRBRyBWQUxVRVMsIGlmIGRlc2lyZWRcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cbiIsImltcG9ydCB7IG1hcCwgY2xvbmUgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUXVlcnlQYXJ0RGVmLCBRdWVyeVBhcnQsIGZ1bmN0aW9uUmVuZGVyZXIsIHN1ZmZpeFJlbmRlcmVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3N0YXRlL3F1ZXJ5X3BhcnQnO1xuXG5jb25zdCBpbmRleDogYW55W10gPSBbXTtcbmNvbnN0IGNhdGVnb3JpZXM6IGFueSA9IHtcbiAgQWdncmVnYXRpb25zOiBbXSxcbiAgU2VsZWN0b3JzOiBbXSxcbiAgVHJhbnNmb3JtYXRpb25zOiBbXSxcbiAgUHJlZGljdG9yczogW10sXG4gIE1hdGg6IFtdLFxuICBBbGlhc2luZzogW10sXG4gIEZpZWxkczogW10sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQYXJ0KHBhcnQ6IGFueSk6IGFueSB7XG4gIGNvbnN0IGRlZiA9IGluZGV4W3BhcnQudHlwZV07XG4gIGlmICghZGVmKSB7XG4gICAgdGhyb3cgeyBtZXNzYWdlOiAnQ291bGQgbm90IGZpbmQgcXVlcnkgcGFydCAnICsgcGFydC50eXBlIH07XG4gIH1cblxuICByZXR1cm4gbmV3IFF1ZXJ5UGFydChwYXJ0LCBkZWYpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlcihvcHRpb25zOiBhbnkpIHtcbiAgaW5kZXhbb3B0aW9ucy50eXBlXSA9IG5ldyBRdWVyeVBhcnREZWYob3B0aW9ucyk7XG4gIG9wdGlvbnMuY2F0ZWdvcnkucHVzaChpbmRleFtvcHRpb25zLnR5cGVdKTtcbn1cblxuY29uc3QgZ3JvdXBCeVRpbWVGdW5jdGlvbnM6IGFueVtdID0gW107XG5cbmZ1bmN0aW9uIGFsaWFzUmVuZGVyZXIocGFydDogeyBwYXJhbXM6IHN0cmluZ1tdIH0sIGlubmVyRXhwcjogc3RyaW5nKSB7XG4gIHJldHVybiBpbm5lckV4cHIgKyAnIEFTICcgKyAnXCInICsgcGFydC5wYXJhbXNbMF0gKyAnXCInO1xufVxuXG5mdW5jdGlvbiBmaWVsZFJlbmRlcmVyKHBhcnQ6IHsgcGFyYW1zOiBzdHJpbmdbXSB9LCBpbm5lckV4cHI6IGFueSkge1xuICBpZiAocGFydC5wYXJhbXNbMF0gPT09ICcqJykge1xuICAgIHJldHVybiAnKic7XG4gIH1cbiAgcmV0dXJuICdcIicgKyBwYXJ0LnBhcmFtc1swXSArICdcIic7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5KHNlbGVjdFBhcnRzOiBhbnlbXSwgcGFydE1vZGVsOiB7IGRlZjogeyB0eXBlOiBzdHJpbmcgfSB9KSB7XG4gIC8vIGxvb2sgZm9yIGV4aXN0aW5nIGFnZ3JlZ2F0aW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0UGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXJ0ID0gc2VsZWN0UGFydHNbaV07XG4gICAgaWYgKHBhcnQuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucykge1xuICAgICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09IHBhcnRNb2RlbC5kZWYudHlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjb3VudCBkaXN0aW5jdCBpcyBhbGxvd2VkXG4gICAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ2NvdW50JyAmJiBwYXJ0TW9kZWwuZGVmLnR5cGUgPT09ICdkaXN0aW5jdCcpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgbmV4dCBhZ2dyZWdhdGlvbiBpZiBkaXN0aW5jdCB3YXMgcmVwbGFjZWRcbiAgICAgIGlmIChwYXJ0LmRlZi50eXBlID09PSAnZGlzdGluY3QnKSB7XG4gICAgICAgIGNvbnN0IG1vcmVQYXJ0c0F2YWlsYWJsZSA9IHNlbGVjdFBhcnRzLmxlbmd0aCA+PSBpICsgMjtcbiAgICAgICAgaWYgKHBhcnRNb2RlbC5kZWYudHlwZSAhPT0gJ2NvdW50JyAmJiBtb3JlUGFydHNBdmFpbGFibGUpIHtcbiAgICAgICAgICBjb25zdCBuZXh0UGFydCA9IHNlbGVjdFBhcnRzW2kgKyAxXTtcbiAgICAgICAgICBpZiAobmV4dFBhcnQuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucykge1xuICAgICAgICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKGkgKyAxLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFydE1vZGVsLmRlZi50eXBlID09PSAnY291bnQnKSB7XG4gICAgICAgICAgaWYgKCFtb3JlUGFydHNBdmFpbGFibGUgfHwgc2VsZWN0UGFydHNbaSArIDFdLmRlZi50eXBlICE9PSAnY291bnQnKSB7XG4gICAgICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoaSArIDEsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZWN0UGFydHNbaV0gPSBwYXJ0TW9kZWw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJ0LmRlZi5jYXRlZ29yeSA9PT0gY2F0ZWdvcmllcy5TZWxlY3RvcnMpIHtcbiAgICAgIHNlbGVjdFBhcnRzW2ldID0gcGFydE1vZGVsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBwYXJ0TW9kZWwpO1xufVxuXG5mdW5jdGlvbiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5KHNlbGVjdFBhcnRzOiBhbnlbXSwgcGFydE1vZGVsOiBhbnkpIHtcbiAgbGV0IGk7XG4gIC8vIGxvb2sgZm9yIGluZGV4IHRvIGFkZCB0cmFuc2Zvcm1hdGlvblxuICBmb3IgKGkgPSAwOyBpIDwgc2VsZWN0UGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXJ0ID0gc2VsZWN0UGFydHNbaV07XG4gICAgaWYgKHBhcnQuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLk1hdGggfHwgcGFydC5kZWYuY2F0ZWdvcnkgPT09IGNhdGVnb3JpZXMuQWxpYXNpbmcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFBhcnRzLnNwbGljZShpLCAwLCBwYXJ0TW9kZWwpO1xufVxuXG5mdW5jdGlvbiBhZGRNYXRoU3RyYXRlZ3koc2VsZWN0UGFydHM6IGFueVtdLCBwYXJ0TW9kZWw6IGFueSkge1xuICBjb25zdCBwYXJ0Q291bnQgPSBzZWxlY3RQYXJ0cy5sZW5ndGg7XG4gIGlmIChwYXJ0Q291bnQgPiAwKSB7XG4gICAgLy8gaWYgbGFzdCBpcyBtYXRoLCByZXBsYWNlIGl0XG4gICAgaWYgKHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDFdLmRlZi50eXBlID09PSAnbWF0aCcpIHtcbiAgICAgIHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDFdID0gcGFydE1vZGVsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBuZXh0IHRvIGxhc3QgaXMgbWF0aCwgcmVwbGFjZSBpdFxuICAgIGlmIChwYXJ0Q291bnQgPiAxICYmIHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDJdLmRlZi50eXBlID09PSAnbWF0aCcpIHtcbiAgICAgIHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDJdID0gcGFydE1vZGVsO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0UGFydHNbcGFydENvdW50IC0gMV0uZGVmLnR5cGUgPT09ICdhbGlhcycpIHtcbiAgICAgIC8vIGlmIGxhc3QgaXMgYWxpYXMgYWRkIGl0IGJlZm9yZVxuICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKHBhcnRDb3VudCAtIDEsIDAsIHBhcnRNb2RlbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHNlbGVjdFBhcnRzLnB1c2gocGFydE1vZGVsKTtcbn1cblxuZnVuY3Rpb24gYWRkQWxpYXNTdHJhdGVneShzZWxlY3RQYXJ0czogYW55W10sIHBhcnRNb2RlbDogYW55KSB7XG4gIGNvbnN0IHBhcnRDb3VudCA9IHNlbGVjdFBhcnRzLmxlbmd0aDtcbiAgaWYgKHBhcnRDb3VudCA+IDApIHtcbiAgICAvLyBpZiBsYXN0IGlzIGFsaWFzLCByZXBsYWNlIGl0XG4gICAgaWYgKHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDFdLmRlZi50eXBlID09PSAnYWxpYXMnKSB7XG4gICAgICBzZWxlY3RQYXJ0c1twYXJ0Q291bnQgLSAxXSA9IHBhcnRNb2RlbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgc2VsZWN0UGFydHMucHVzaChwYXJ0TW9kZWwpO1xufVxuXG5mdW5jdGlvbiBhZGRGaWVsZFN0cmF0ZWd5KHNlbGVjdFBhcnRzOiBhbnksIHBhcnRNb2RlbDogYW55LCBxdWVyeTogeyBzZWxlY3RNb2RlbHM6IGFueVtdW10gfSkge1xuICAvLyBjb3B5IGFsbCBwYXJ0c1xuICBjb25zdCBwYXJ0cyA9IG1hcChzZWxlY3RQYXJ0cywgKHBhcnQ6IGFueSkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVQYXJ0KHsgdHlwZTogcGFydC5kZWYudHlwZSwgcGFyYW1zOiBjbG9uZShwYXJ0LnBhcmFtcykgfSk7XG4gIH0pO1xuXG4gIHF1ZXJ5LnNlbGVjdE1vZGVscy5wdXNoKHBhcnRzKTtcbn1cblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZmllbGQnLFxuICBhZGRTdHJhdGVneTogYWRkRmllbGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuRmllbGRzLFxuICBwYXJhbXM6IFt7IHR5cGU6ICdmaWVsZCcsIGR5bmFtaWNMb29rdXA6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsndmFsdWUnXSxcbiAgcmVuZGVyZXI6IGZpZWxkUmVuZGVyZXIsXG59KTtcblxuLy8gQWdncmVnYXRpb25zXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdjb3VudCcsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuQWdncmVnYXRpb25zLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZGlzdGluY3QnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2ludGVncmFsJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5BZ2dyZWdhdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtZWFuJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5BZ2dyZWdhdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtZWRpYW4nLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ21vZGUnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ3N1bScsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuQWdncmVnYXRpb25zLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxuLy8gdHJhbnNmb3JtYXRpb25zXG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2Rlcml2YXRpdmUnLFxuICBhZGRTdHJhdGVneTogYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuVHJhbnNmb3JtYXRpb25zLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgICAgdHlwZTogJ2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnMXMnLCAnMTBzJywgJzFtJywgJzVtJywgJzEwbScsICcxNW0nLCAnMWgnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzEwcyddLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdzcHJlYWQnLFxuICBhZGRTdHJhdGVneTogYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuVHJhbnNmb3JtYXRpb25zLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbm9uX25lZ2F0aXZlX2Rlcml2YXRpdmUnLFxuICBhZGRTdHJhdGVneTogYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuVHJhbnNmb3JtYXRpb25zLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgICAgdHlwZTogJ2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnMXMnLCAnMTBzJywgJzFtJywgJzVtJywgJzEwbScsICcxNW0nLCAnMWgnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzEwcyddLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdkaWZmZXJlbmNlJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ25vbl9uZWdhdGl2ZV9kaWZmZXJlbmNlJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ21vdmluZ19hdmVyYWdlJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnd2luZG93JywgdHlwZTogJ2ludCcsIG9wdGlvbnM6IFs1LCAxMCwgMjAsIDMwLCA0MF0gfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2N1bXVsYXRpdmVfc3VtJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ3N0ZGRldicsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5UcmFuc2Zvcm1hdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd0aW1lJyxcbiAgY2F0ZWdvcnk6IGdyb3VwQnlUaW1lRnVuY3Rpb25zLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnaW50ZXJ2YWwnLFxuICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgb3B0aW9uczogWyckX19pbnRlcnZhbCcsICcxcycsICcxMHMnLCAnMW0nLCAnNW0nLCAnMTBtJywgJzE1bScsICcxaCddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnJF9faW50ZXJ2YWwnXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZmlsbCcsXG4gIGNhdGVnb3J5OiBncm91cEJ5VGltZUZ1bmN0aW9ucyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2ZpbGwnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ25vbmUnLCAnbnVsbCcsICcwJywgJ3ByZXZpb3VzJywgJ2xpbmVhciddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnbnVsbCddLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdlbGFwc2VkJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgICAgIHR5cGU6ICdpbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzFzJywgJzEwcycsICcxbScsICc1bScsICcxMG0nLCAnMTVtJywgJzFoJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWycxMHMnXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxuLy8gcHJlZGljdGlvbnNcbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2hvbHRfd2ludGVycycsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5QcmVkaWN0b3JzLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdudW1iZXInLCB0eXBlOiAnaW50Jywgb3B0aW9uczogWzUsIDEwLCAyMCwgMzAsIDQwXSB9LFxuICAgIHsgbmFtZTogJ3NlYXNvbicsIHR5cGU6ICdpbnQnLCBvcHRpb25zOiBbMCwgMSwgMiwgNSwgMTBdIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMCwgMl0sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2hvbHRfd2ludGVyc193aXRoX2ZpdCcsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5QcmVkaWN0b3JzLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdudW1iZXInLCB0eXBlOiAnaW50Jywgb3B0aW9uczogWzUsIDEwLCAyMCwgMzAsIDQwXSB9LFxuICAgIHsgbmFtZTogJ3NlYXNvbicsIHR5cGU6ICdpbnQnLCBvcHRpb25zOiBbMCwgMSwgMiwgNSwgMTBdIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMCwgMl0sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbi8vIFNlbGVjdG9yc1xucmVnaXN0ZXIoe1xuICB0eXBlOiAnYm90dG9tJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TZWxlY3RvcnMsXG4gIHBhcmFtczogW3sgbmFtZTogJ2NvdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZmlyc3QnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNlbGVjdG9ycyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2xhc3QnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNlbGVjdG9ycyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ21heCcsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU2VsZWN0b3JzLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbWluJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TZWxlY3RvcnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdwZXJjZW50aWxlJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TZWxlY3RvcnMsXG4gIHBhcmFtczogW3sgbmFtZTogJ250aCcsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbOTVdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd0b3AnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNlbGVjdG9ycyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnY291bnQnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzNdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd0YWcnLFxuICBjYXRlZ29yeTogZ3JvdXBCeVRpbWVGdW5jdGlvbnMsXG4gIHBhcmFtczogW3sgbmFtZTogJ3RhZycsIHR5cGU6ICdzdHJpbmcnLCBkeW5hbWljTG9va3VwOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3RhZyddLFxuICByZW5kZXJlcjogZmllbGRSZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtYXRoJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZE1hdGhTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuTWF0aCxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnZXhwcicsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJyAvIDEwMCddLFxuICByZW5kZXJlcjogc3VmZml4UmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnYWxpYXMnLFxuICBhZGRTdHJhdGVneTogYWRkQWxpYXNTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuQWxpYXNpbmcsXG4gIHBhcmFtczogW3sgbmFtZTogJ25hbWUnLCB0eXBlOiAnc3RyaW5nJywgcXVvdGU6ICdkb3VibGUnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2FsaWFzJ10sXG4gIHJlbmRlck1vZGU6ICdzdWZmaXgnLFxuICByZW5kZXJlcjogYWxpYXNSZW5kZXJlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZTogY3JlYXRlUGFydCxcbiAgZ2V0Q2F0ZWdvcmllczogKCkgPT4ge1xuICAgIHJldHVybiBjYXRlZ29yaWVzO1xuICB9LFxuICByZXBsYWNlQWdncmVnYXRpb25BZGQ6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxufTtcbiIsImltcG9ydCB7IEFubm90YXRpb25FdmVudCwgRGF0YUZyYW1lLCBEYXRhUXVlcnksIEZpZWxkVHlwZSwgUXVlcnlSZXN1bHRNZXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB0b0RhdGFRdWVyeVJlc3BvbnNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgVGFibGVNb2RlbCBmcm9tICdhcHAvY29yZS90YWJsZV9tb2RlbCc7XG5pbXBvcnQgeyBlYWNoLCBmbGF0dGVuLCBncm91cEJ5LCBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEluZmx1eFF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlUGFyc2VyIHtcbiAgcGFyc2UocXVlcnk6IHN0cmluZywgcmVzdWx0czogeyByZXN1bHRzOiBhbnkgfSkge1xuICAgIGlmICghcmVzdWx0cz8ucmVzdWx0cyB8fCByZXN1bHRzLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbHV4UmVzdWx0cyA9IHJlc3VsdHMucmVzdWx0c1swXTtcbiAgICBpZiAoIWluZmx1eFJlc3VsdHMuc2VyaWVzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBpc1ZhbHVlRmlyc3QgPVxuICAgICAgbm9ybWFsaXplZFF1ZXJ5LmluZGV4T2YoJ3Nob3cgZmllbGQga2V5cycpID49IDAgfHwgbm9ybWFsaXplZFF1ZXJ5LmluZGV4T2YoJ3Nob3cgcmV0ZW50aW9uIHBvbGljaWVzJykgPj0gMDtcblxuICAgIGNvbnN0IHJlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGVhY2goaW5mbHV4UmVzdWx0cy5zZXJpZXMsIChzZXJpZSkgPT4ge1xuICAgICAgZWFjaChzZXJpZS52YWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAvLyBJbiBnZW5lcmFsLCB0aGVyZSBhcmUgMiBwb3NzaWJsZSBzaGFwZXMgZm9yIHRoZSByZXR1cm5lZCB2YWx1ZS5cbiAgICAgICAgICAvLyBUaGUgZmlyc3Qgb25lIGlzIGEgdHdvLWVsZW1lbnQgYXJyYXksXG4gICAgICAgICAgLy8gd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgc29tZXdoYXQgYSBtZXRhZGF0YSB2YWx1ZTpcbiAgICAgICAgICAvLyB0aGUgdGFnIG5hbWUgZm9yIFNIT1cgVEFHIFZBTFVFUyBxdWVyaWVzLFxuICAgICAgICAgIC8vIHRoZSB0aW1lIGZpZWxkIGZvciBTRUxFQ1QgcXVlcmllcywgZXRjLlxuICAgICAgICAgIC8vIFRoZSBzZWNvbmQgc2hhcGUgaXMgYW4gb25lLWVsZW1lbnQgYXJyYXksXG4gICAgICAgICAgLy8gdGhhdCBpcyBjb250YWluaW5nIGFuIGltbWVkaWF0ZSB2YWx1ZS5cbiAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgU0hPVyBGSUVMRCBLRVlTIHF1ZXJpZXMgcmV0dXJuIHN1Y2ggc2hhcGUuXG4gICAgICAgICAgLy8gTm90ZSwgcHJlLTAuMTEgdmVyc2lvbnMgcmV0dXJuXG4gICAgICAgICAgLy8gdGhlIHNlY29uZCBzaGFwZSBmb3IgU0hPVyBUQUcgVkFMVUVTIHF1ZXJpZXNcbiAgICAgICAgICAvLyAod2hpbGUgdGhlIG5ld2VyIHZlcnNpb25z4oCUZmlyc3QpLlxuXG4gICAgICAgICAgaWYgKGlzVmFsdWVGaXJzdCkge1xuICAgICAgICAgICAgYWRkVW5pcXVlKHJlcywgdmFsdWVbMF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVbMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWRkVW5pcXVlKHJlcywgdmFsdWVbMV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRVbmlxdWUocmVzLCB2YWx1ZVswXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZFVuaXF1ZShyZXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBOT1RFOiBpdCBpcyBpbXBvcnRhbnQgdG8ga2VlcCB0aGUgb3JkZXIgb2YgaXRlbXMgaW4gdGhlIHBhcnNlZCBvdXRwdXRcbiAgICAvLyB0aGUgc2FtZSBhcyBpdCB3YXMgaW4gdGhlIGluZmx1eGRiLXJlc3BvbnNlLlxuICAgIC8vIHdlIHVzZSBhIGBTZXRgIHRvIGNvbGxlY3QgdGhlIHVuaXF1ZS1yZXN1bHRzLCBhbmQgYFNldGAgaXRlcmF0aW9uXG4gICAgLy8gb3JkZXIgaXMgaW5zZXJ0aW9uLW9yZGVyLCBzbyB0aGlzIHNob3VsZCBiZSBvay5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShyZXMpLm1hcCgodikgPT4gKHsgdGV4dDogdiB9KSk7XG4gIH1cblxuICBnZXRUYWJsZShkZnM6IERhdGFGcmFtZVtdLCB0YXJnZXQ6IEluZmx1eFF1ZXJ5LCBtZXRhOiBRdWVyeVJlc3VsdE1ldGEpOiBUYWJsZU1vZGVsIHtcbiAgICBsZXQgdGFibGUgPSBuZXcgVGFibGVNb2RlbCgpO1xuXG4gICAgaWYgKGRmcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJsZS5tZXRhID0ge1xuICAgICAgICAuLi5tZXRhLFxuICAgICAgICBleGVjdXRlZFF1ZXJ5U3RyaW5nOiBkZnNbMF0ubWV0YT8uZXhlY3V0ZWRRdWVyeVN0cmluZyxcbiAgICAgIH07XG5cbiAgICAgIHRhYmxlLnJlZklkID0gdGFyZ2V0LnJlZklkO1xuICAgICAgdGFibGUgPSBnZXRUYWJsZUNvbHMoZGZzLCB0YWJsZSwgdGFyZ2V0KTtcblxuICAgICAgLy8gaWYgZ3JvdXAgYnkgdGFnKHMpIGFkZGVkXG4gICAgICBpZiAoZGZzWzBdLmZpZWxkc1sxXSAmJiBkZnNbMF0uZmllbGRzWzFdLmxhYmVscykge1xuICAgICAgICBsZXQgZGZzQnlMYWJlbHM6IGFueSA9IGdyb3VwQnkoZGZzLCAoZGY6IERhdGFGcmFtZSkgPT5cbiAgICAgICAgICBkZi5maWVsZHNbMV0ubGFiZWxzID8gT2JqZWN0LnZhbHVlcyhkZi5maWVsZHNbMV0ubGFiZWxzISkgOiBudWxsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGxhYmVscyA9IE9iamVjdC5rZXlzKGRmc0J5TGFiZWxzKTtcbiAgICAgICAgZGZzQnlMYWJlbHMgPSBPYmplY3QudmFsdWVzKGRmc0J5TGFiZWxzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRmc0J5TGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGFibGUgPSBnZXRUYWJsZVJvd3MoZGZzQnlMYWJlbHNbaV0sIHRhYmxlLCBbLi4ubGFiZWxzW2ldLnNwbGl0KCcsJyldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFibGUgPSBnZXRUYWJsZVJvd3MoZGZzLCB0YWJsZSwgW10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIGFzeW5jIHRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZShvcHRpb25zOiBhbnksIGRhdGE6IGFueSwgdGFyZ2V0OiBJbmZsdXhRdWVyeSk6IFByb21pc2U8QW5ub3RhdGlvbkV2ZW50W10+IHtcbiAgICBjb25zdCByc3AgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKGRhdGEsIFt0YXJnZXRdIGFzIERhdGFRdWVyeVtdKTtcblxuICAgIGlmIChyc3ApIHtcbiAgICAgIGNvbnN0IHRhYmxlID0gdGhpcy5nZXRUYWJsZShyc3AuZGF0YSwgdGFyZ2V0LCB7fSk7XG4gICAgICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xuICAgICAgbGV0IHRpdGxlQ29sOiBhbnkgPSBudWxsO1xuICAgICAgbGV0IHRpbWVDb2w6IGFueSA9IG51bGw7XG4gICAgICBsZXQgdGltZUVuZENvbDogYW55ID0gbnVsbDtcbiAgICAgIGNvbnN0IHRhZ3NDb2w6IGFueSA9IFtdO1xuICAgICAgbGV0IHRleHRDb2w6IGFueSA9IG51bGw7XG5cbiAgICAgIGVhY2godGFibGUuY29sdW1ucywgKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi50ZXh0LnRvTG93ZXJDYXNlKCkgPT09ICd0aW1lJykge1xuICAgICAgICAgIHRpbWVDb2wgPSBpbmRleDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbi50ZXh0ID09PSBvcHRpb25zLmFubm90YXRpb24udGl0bGVDb2x1bW4pIHtcbiAgICAgICAgICB0aXRsZUNvbCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sQ29udGFpbnNUYWcoY29sdW1uLnRleHQsIG9wdGlvbnMuYW5ub3RhdGlvbi50YWdzQ29sdW1uKSkge1xuICAgICAgICAgIHRhZ3NDb2wucHVzaChpbmRleCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4udGV4dC5pbmNsdWRlcyhvcHRpb25zLmFubm90YXRpb24udGV4dENvbHVtbikpIHtcbiAgICAgICAgICB0ZXh0Q29sID0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4udGV4dCA9PT0gb3B0aW9ucy5hbm5vdGF0aW9uLnRpbWVFbmRDb2x1bW4pIHtcbiAgICAgICAgICB0aW1lRW5kQ29sID0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxlZ2FjeSBjYXNlXG4gICAgICAgIGlmICghdGl0bGVDb2wgJiYgdGV4dENvbCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICB0aXRsZUNvbCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZWFjaCh0YWJsZS5yb3dzLCAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBhbm5vdGF0aW9uOiBvcHRpb25zLmFubm90YXRpb24sXG4gICAgICAgICAgdGltZTogK25ldyBEYXRlKHZhbHVlW3RpbWVDb2xdKSxcbiAgICAgICAgICB0aXRsZTogdmFsdWVbdGl0bGVDb2xdLFxuICAgICAgICAgIHRpbWVFbmQ6IHZhbHVlW3RpbWVFbmRDb2xdLFxuICAgICAgICAgIC8vIFJlbW92ZSBlbXB0eSB2YWx1ZXMsIHRoZW4gc3BsaXQgaW4gZGlmZmVyZW50IHRhZ3MgZm9yIGNvbW1hIHNlcGFyYXRlZCB2YWx1ZXNcbiAgICAgICAgICB0YWdzOiBmbGF0dGVuKFxuICAgICAgICAgICAgdGFnc0NvbFxuICAgICAgICAgICAgICAuZmlsdGVyKCh0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbdF07XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5tYXAoKHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVt0XS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgdGV4dDogdmFsdWVbdGV4dENvbF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdC5wdXNoKGRhdGEpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gY29sQ29udGFpbnNUYWcoY29sVGV4dDogc3RyaW5nLCB0YWdzQ29sdW1uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdGFncyA9ICh0YWdzQ29sdW1uIHx8ICcnKS5yZXBsYWNlKCcgJywgJycpLnNwbGl0KCcsJyk7XG4gIGZvciAodmFyIHRhZyBvZiB0YWdzKSB7XG4gICAgaWYgKGNvbFRleHQuaW5jbHVkZXModGFnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFibGVDb2xzKGRmczogRGF0YUZyYW1lW10sIHRhYmxlOiBUYWJsZU1vZGVsLCB0YXJnZXQ6IEluZmx1eFF1ZXJ5KTogVGFibGVNb2RlbCB7XG4gIGNvbnN0IHNlbGVjdGVkUGFyYW1zID0gZ2V0U2VsZWN0ZWRQYXJhbXModGFyZ2V0KTtcblxuICBkZnNbMF0uZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgLy8gVGltZSBjb2xcbiAgICBpZiAoZmllbGQubmFtZSA9PT0gJ3RpbWUnKSB7XG4gICAgICB0YWJsZS5jb2x1bW5zLnB1c2goeyB0ZXh0OiAnVGltZScsIHR5cGU6IEZpZWxkVHlwZS50aW1lIH0pO1xuICAgIH1cblxuICAgIC8vIEdyb3VwIGJ5IChsYWJlbCkgY29sdW1uKHMpXG4gICAgZWxzZSBpZiAoZmllbGQubmFtZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgaWYgKGZpZWxkLmxhYmVscykge1xuICAgICAgICBPYmplY3Qua2V5cyhmaWVsZC5sYWJlbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIHRhYmxlLmNvbHVtbnMucHVzaCh7IHRleHQ6IGtleSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBHZXQgY29scyBmb3IgYW5ub3RhdGlvblF1ZXJ5XG4gIGlmIChkZnNbMF0ucmVmSWQgPT09ICdtZXRyaWNGaW5kUXVlcnknKSB7XG4gICAgZGZzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGQubmFtZSkge1xuICAgICAgICB0YWJsZS5jb2x1bW5zLnB1c2goeyB0ZXh0OiBmaWVsZC5uYW1lIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gU2VsZWN0IChtZXRyaWMpIGNvbHVtbihzKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgdGFibGUuY29sdW1ucy5wdXNoKHsgdGV4dDogc2VsZWN0ZWRQYXJhbXNbaV0gfSk7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59XG5cbmZ1bmN0aW9uIGdldFRhYmxlUm93cyhkZnM6IERhdGFGcmFtZVtdLCB0YWJsZTogVGFibGVNb2RlbCwgbGFiZWxzOiBzdHJpbmdbXSk6IFRhYmxlTW9kZWwge1xuICBjb25zdCB2YWx1ZXMgPSBkZnNbMF0uZmllbGRzWzBdLnZhbHVlcy50b0FycmF5KCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0aW1lID0gdmFsdWVzW2ldO1xuICAgIGNvbnN0IG1ldHJpY3MgPSBkZnMubWFwKChkZjogRGF0YUZyYW1lKSA9PiB7XG4gICAgICByZXR1cm4gZGYuZmllbGRzWzFdID8gZGYuZmllbGRzWzFdLnZhbHVlcy50b0FycmF5KClbaV0gOiBudWxsO1xuICAgIH0pO1xuICAgIGlmIChtZXRyaWNzLmluZGV4T2YobnVsbCkgPCAwKSB7XG4gICAgICB0YWJsZS5yb3dzLnB1c2goW3RpbWUsIC4uLmxhYmVscywgLi4ubWV0cmljc10pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZFBhcmFtcyh0YXJnZXQ6IEluZmx1eFF1ZXJ5KTogc3RyaW5nW10ge1xuICBsZXQgYWxsUGFyYW1zOiBzdHJpbmdbXSA9IFtdO1xuICB0YXJnZXQuc2VsZWN0Py5mb3JFYWNoKChzZWxlY3QpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdC5maWx0ZXIoKHgpID0+IHgudHlwZSAhPT0gJ2ZpZWxkJyk7XG4gICAgaWYgKHNlbGVjdG9yLmxlbmd0aCA+IDApIHtcbiAgICAgIGFsbFBhcmFtcy5wdXNoKHNlbGVjdG9yWzBdLnR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2VsZWN0WzBdICYmIHNlbGVjdFswXS5wYXJhbXMgJiYgc2VsZWN0WzBdLnBhcmFtc1swXSkge1xuICAgICAgICBhbGxQYXJhbXMucHVzaChzZWxlY3RbMF0ucGFyYW1zWzBdLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHVuaXF1ZVBhcmFtczogc3RyaW5nW10gPSBbXTtcbiAgYWxsUGFyYW1zLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgdW5pcXVlUGFyYW1zLnB1c2goaW5jcmVtZW50TmFtZShwYXJhbSwgcGFyYW0sIHVuaXF1ZVBhcmFtcywgMCkpO1xuICB9KTtcblxuICByZXR1cm4gdW5pcXVlUGFyYW1zO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnROYW1lKG5hbWU6IHN0cmluZywgbmFtZUluY3JlbWVuZXQ6IHN0cmluZywgcGFyYW1zOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChwYXJhbXMuaW5kZXhPZihuYW1lSW5jcmVtZW5ldCkgPiAtMSkge1xuICAgIGluZGV4Kys7XG4gICAgcmV0dXJuIGluY3JlbWVudE5hbWUobmFtZSwgbmFtZSArICdfJyArIGluZGV4LCBwYXJhbXMsIGluZGV4KTtcbiAgfVxuICByZXR1cm4gbmFtZUluY3JlbWVuZXQ7XG59XG5cbmZ1bmN0aW9uIGFkZFVuaXF1ZShzOiBTZXQ8c3RyaW5nPiwgdmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICBzLmFkZCh2YWx1ZS50b1N0cmluZygpKTtcbn1cbiIsImltcG9ydCB7IERhdGFRdWVyeSwgRGF0YVNvdXJjZUpzb25EYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBlbnVtIEluZmx1eFZlcnNpb24ge1xuICBJbmZsdXhRTCA9ICdJbmZsdXhRTCcsXG4gIEZsdXggPSAnRmx1eCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mbHV4T3B0aW9ucyBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIHZlcnNpb24/OiBJbmZsdXhWZXJzaW9uO1xuXG4gIHRpbWVJbnRlcnZhbD86IHN0cmluZztcbiAgaHR0cE1vZGU/OiBzdHJpbmc7XG5cbiAgLy8gV2l0aCBGbHV4XG4gIG9yZ2FuaXphdGlvbj86IHN0cmluZztcbiAgZGVmYXVsdEJ1Y2tldD86IHN0cmluZztcbiAgbWF4U2VyaWVzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZmx1eFNlY3VyZUpzb25EYXRhIHtcbiAgLy8gRm9yIEZsdXhcbiAgdG9rZW4/OiBzdHJpbmc7XG5cbiAgLy8gSW4gMXggYSBkaWZmZXJlbnQgcGFzc3dvcmQgY2FuIGJlIHNlbnQgdGhhbiB0aGVuIEhUVFAgYXV0aFxuICBwYXNzd29yZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmZsdXhRdWVyeVBhcnQge1xuICB0eXBlOiBzdHJpbmc7XG4gIHBhcmFtcz86IEFycmF5PHN0cmluZyB8IG51bWJlcj47XG4gIC8vIEZJWE1FOiBgaW50ZXJ2YWxgIGRvZXMgbm90IHNlZW0gdG8gYmUgdXNlZC5cbiAgLy8gY2hlY2sgYWxsIHRoZSBpbmZsdXhkYiBwYXJ0cyAocXVlcnktZ2VuZXJhdGlvbiBldGMuKSxcbiAgLy8gaWYgaXQgaXMgcmVhbGx5IHNvLCBhbmQgaWYgeWVzLCByZW1vdmUgaXRcbiAgaW50ZXJ2YWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mbHV4UXVlcnlUYWcge1xuICBrZXk6IHN0cmluZztcbiAgb3BlcmF0b3I/OiBzdHJpbmc7XG4gIGNvbmRpdGlvbj86IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVzdWx0Rm9ybWF0ID0gJ3RpbWVfc2VyaWVzJyB8ICd0YWJsZScgfCAnbG9ncyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mbHV4UXVlcnkgZXh0ZW5kcyBEYXRhUXVlcnkge1xuICBwb2xpY3k/OiBzdHJpbmc7XG4gIG1lYXN1cmVtZW50Pzogc3RyaW5nO1xuICByZXN1bHRGb3JtYXQ/OiBSZXN1bHRGb3JtYXQ7XG4gIG9yZGVyQnlUaW1lPzogc3RyaW5nO1xuICB0YWdzPzogSW5mbHV4UXVlcnlUYWdbXTtcbiAgZ3JvdXBCeT86IEluZmx1eFF1ZXJ5UGFydFtdO1xuICBzZWxlY3Q/OiBJbmZsdXhRdWVyeVBhcnRbXVtdO1xuICBsaW1pdD86IHN0cmluZyB8IG51bWJlcjtcbiAgc2xpbWl0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ej86IHN0cmluZztcbiAgLy8gTk9URTogYGZpbGxgIGlzIG5vdCB1c2VkIGluIHRoZSBxdWVyeS1lZGl0b3IgYW55bW9yZSwgYW5kIGlzIHJlbW92ZWRcbiAgLy8gaWYgYW55IGNoYW5nZSBoYXBwZW5zIGluIHRoZSBxdWVyeS1lZGl0b3IuIHRoZSBxdWVyeS1nZW5lcmF0aW9uIHN0aWxsXG4gIC8vIHN1cHBvcnRzIGl0IGZvciBub3cuXG4gIGZpbGw/OiBzdHJpbmc7XG4gIHJhd1F1ZXJ5PzogYm9vbGVhbjtcbiAgcXVlcnk/OiBzdHJpbmc7XG4gIGFsaWFzPzogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcmV2aW91cyhzdGF0ZSkge1xuICAgIHZhciByZWYgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWYuY3VycmVudCA9IHN0YXRlO1xuICAgIH0pO1xuICAgIHJldHVybiByZWYuY3VycmVudDtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJ1bmlxdWVJZCIsIm9uVXBkYXRlRGF0YXNvdXJjZU9wdGlvbiIsInVwZGF0ZURhdGFzb3VyY2VQbHVnaW5SZXNldE9wdGlvbiIsIm9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uIiwib25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb25TZWxlY3QiLCJvblVwZGF0ZURhdGFzb3VyY2VTZWN1cmVKc29uRGF0YU9wdGlvbiIsInVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbiIsIkFsZXJ0IiwiRGF0YVNvdXJjZUh0dHBTZXR0aW5ncyIsIkluZm9Cb3giLCJJbmxpbmVGaWVsZCIsIklubGluZUZvcm1MYWJlbCIsIkxlZ2FjeUZvcm1zIiwiU2VsZWN0IiwiSW5wdXQiLCJTZWNyZXRGb3JtRmllbGQiLCJJbmZsdXhWZXJzaW9uIiwiaHR0cE1vZGVzIiwibGFiZWwiLCJ2YWx1ZSIsInZlcnNpb25zIiwiSW5mbHV4UUwiLCJkZXNjcmlwdGlvbiIsIkZsdXgiLCJDb25maWdFZGl0b3IiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibWF4U2VyaWVzIiwic2VsZWN0ZWQiLCJvcHRpb25zIiwib25PcHRpb25zQ2hhbmdlIiwiY29weSIsImpzb25EYXRhIiwidmVyc2lvbiIsImFjY2VzcyIsImJhc2ljQXV0aCIsImh0dHBNb2RlIiwidXNlciIsImRhdGFiYXNlIiwic3RhdGUiLCJ0b1N0cmluZyIsImh0bWxQcmVmaXgiLCJyZW5kZXJJbmZsdXgyeCIsInNlY3VyZUpzb25GaWVsZHMiLCJzZWN1cmVKc29uRGF0YSIsIm9yZ2FuaXphdGlvbiIsInRva2VuIiwib25SZXNldFRva2VuIiwiZGVmYXVsdEJ1Y2tldCIsInRpbWVJbnRlcnZhbCIsInJlbmRlckluZmx1eDF4IiwicGFzc3dvcmQiLCJvblJlc2V0UGFzc3dvcmQiLCJmaW5kIiwicmVuZGVyIiwib25WZXJzaW9uQ2hhbmdlZCIsImV2ZW50Iiwic2V0U3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInVuZGVmaW5lZCIsImN4IiwiY3NzIiwiTGlua0J1dHRvbiIsIlNlZ21lbnQiLCJDb2RlRWRpdG9yIiwiQ29kZUVkaXRvclN1Z2dlc3Rpb25JdGVtS2luZCIsImdldFRlbXBsYXRlU3J2Iiwic2FtcGxlcyIsIkZsdXhRdWVyeUVkaXRvciIsInF1ZXJ5Iiwib25DaGFuZ2UiLCJvblJ1blF1ZXJ5IiwiZm9yY2VVcGRhdGUiLCJzdWdzIiwia2luZCIsIlByb3BlcnR5IiwiZGV0YWlsIiwidGVtcGxhdGVTcnYiLCJnZXRWYXJpYWJsZXMiLCJmb3JFYWNoIiwidmFyaWFibGUiLCJuYW1lIiwicmVwbGFjZSIsInB1c2giLCJUZXh0IiwiZWRpdG9yIiwic2V0VGltZW91dCIsImxheW91dCIsImhlbHBUb29sdGlwIiwib25GbHV4UXVlcnlDaGFuZ2UiLCJnZXRTdWdnZXN0aW9ucyIsImVkaXRvckRpZE1vdW50Q2FsbGJhY2tIYWNrIiwib25TYW1wbGVDaGFuZ2UiLCJDSEVBVF9TSEVFVF9JVEVNUyIsInRpdGxlIiwiSW5mbHV4Q2hlYXRTaGVldCIsIm1hcCIsIml0ZW0iLCJJbmZsdXhTdGFydFBhZ2UiLCJvbkNsaWNrRXhhbXBsZSIsIlJhd0luZmx1eFFMRWRpdG9yIiwiRWRpdG9yIiwiVmlzdWFsSW5mbHV4UUxFZGl0b3IiLCJRdWVyeUVkaXRvck1vZGVTd2l0Y2hlciIsImJ1aWxkUmF3UXVlcnkiLCJRdWVyeUVkaXRvciIsImRhdGFzb3VyY2UiLCJyYW5nZSIsImRhdGEiLCJpc0ZsdXgiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJyYXdRdWVyeSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29uZmlybU1vZGFsIiwiaXNSYXciLCJpc01vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsIlRleHRBcmVhIiwiSG9yaXpvbnRhbEdyb3VwIiwidXNlU2hhZG93ZWRTdGF0ZSIsInVzZVVuaXF1ZUlkIiwiUkVTVUxUX0ZPUk1BVFMiLCJERUZBVUxUX1JFU1VMVF9GT1JNQVQiLCJjdXJyZW50UXVlcnkiLCJzZXRDdXJyZW50UXVlcnkiLCJjdXJyZW50QWxpYXMiLCJzZXRDdXJyZW50QWxpYXMiLCJhbGlhcyIsImFsaWFzRWxlbWVudElkIiwic2VsZWN0RWxlbWVudElkIiwicmVzdWx0Rm9ybWF0IiwiYXBwbHlEZWxheWVkQ2hhbmdlc0FuZFJ1blF1ZXJ5IiwiZSIsInYiLCJWYXJpYWJsZVF1ZXJ5RWRpdG9yIiwicmVmSWQiLCJvblJlZnJlc2giLCJTZWciLCJ1bndyYXAiLCJBZGRCdXR0b24iLCJsb2FkT3B0aW9ucyIsImFsbG93Q3VzdG9tVmFsdWUiLCJvbkFkZCIsInVzZU1lbW8iLCJGcm9tU2VjdGlvbiIsIlRhZ3NTZWN0aW9uIiwiUGFydExpc3RTZWN0aW9uIiwiT3JkZXJCeVRpbWVTZWN0aW9uIiwiSW5wdXRTZWN0aW9uIiwiZ2V0QWxsTWVhc3VyZW1lbnRzRm9yVGFncyIsImdldEFsbFBvbGljaWVzIiwiZ2V0RmllbGRLZXlzRm9yTWVhc3VyZW1lbnQiLCJnZXRUYWdLZXlzRm9yTWVhc3VyZW1lbnRBbmRUYWdzIiwiZ2V0VGFnVmFsdWVzIiwibm9ybWFsaXplUXVlcnkiLCJhZGROZXdTZWxlY3RQYXJ0IiwicmVtb3ZlU2VsZWN0UGFydCIsImFkZE5ld0dyb3VwQnlQYXJ0IiwicmVtb3ZlR3JvdXBCeVBhcnQiLCJjaGFuZ2VTZWxlY3RQYXJ0IiwiY2hhbmdlR3JvdXBCeVBhcnQiLCJGb3JtYXRBc1NlY3Rpb24iLCJnZXROZXdTZWxlY3RQYXJ0T3B0aW9ucyIsImdldE5ld0dyb3VwQnlQYXJ0T3B0aW9ucyIsIm1ha2VQYXJ0TGlzdCIsIklubGluZUxhYmVsIiwiU2VnbWVudFNlY3Rpb24iLCJ1c2VTdHlsZXMyIiwiZ2V0VGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMiLCJ3aXRoVGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMiLCJvcHRpb25zUHJvbWlzZSIsInRoZW4iLCJmaWx0ZXJUYWdzIiwicGFydHMiLCJhbGxUYWdLZXlzIiwiZmlsdGVyIiwidCIsImhhcyIsImtleSIsImZvcm1hdEFzSWQiLCJvcmRlckJ5VGltZUlkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwibWVhc3VyZW1lbnQiLCJwb2xpY3kiLCJ0YWdzIiwiU2V0Iiwic2VsZWN0TGlzdHMiLCJkeW5hbWljU2VsZWN0UGFydE9wdGlvbnMiLCJNYXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlbGVjdCIsInNlbCIsImdldFRhZ0tleXMiLCJrZXlzIiwiZ3JvdXBCeUxpc3QiLCJkeW5hbWljR3JvdXBCeVBhcnRPcHRpb25zIiwiZ3JvdXBCeSIsIm9uQXBwbGllZENoYW5nZSIsIm5ld1F1ZXJ5IiwiaGFuZGxlRnJvbVNlY3Rpb25DaGFuZ2UiLCJwIiwibSIsImhhbmRsZVRhZ3NTZWN0aW9uQ2hhbmdlIiwibGVuZ3RoIiwiaW5saW5lTGFiZWwiLCJpbmRleCIsInBhcnRJbmRleCIsIm5ld1BhcmFtcyIsInR5cGUiLCJ0eiIsIm9yZGVyQnlUaW1lIiwibGltaXQiLCJzbGltaXQiLCJmb3JtYXQiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJ0ZXh0IiwicGFkZGluZ1JpZ2h0Q2xhc3MiLCJjbGFzc05hbWUiLCJpbnB1dElkIiwidG9TZWxlY3RhYmxlVmFsdWUiLCJERUZBVUxUX1BPTElDWSIsImdldFBvbGljeU9wdGlvbnMiLCJnZXRNZWFzdXJlbWVudE9wdGlvbnMiLCJoYW5kbGVQb2xpY3lMb2FkT3B0aW9ucyIsImFsbFBvbGljaWVzIiwiYWxsUG9saWNpZXNXaXRoRGVmYXVsdCIsInNvbWUiLCJoYW5kbGVNZWFzdXJlbWVudExvYWRPcHRpb25zIiwiYWxsTWVhc3VyZW1lbnRzIiwiaXNXaWRlIiwicGxhY2Vob2xkZXIiLCJjdXJyZW50VmFsdWUiLCJzZXRDdXJyZW50VmFsdWUiLCJvbkJsdXIiLCJuZXdWYWx1ZSIsIk9QVElPTlMiLCJNZW51SXRlbSIsIldpdGhDb250ZXh0TWVudSIsIk1lbnVHcm91cCIsInVzZVRoZW1lMiIsInJlbmRlclJlbW92YWJsZU5hbWVNZW51SXRlbXMiLCJvbkNsaWNrIiwibm9SaWdodE1hcmdpblBhZGRpbmdDbGFzcyIsInBhZGRpbmdSaWdodCIsIm1hcmdpblJpZ2h0IiwiUmVtb3ZhYmxlTmFtZSIsIm9uUmVtb3ZlIiwib3Blbk1lbnUiLCJub0hvcml6TWFyZ2luUGFkZGluZ0NsYXNzIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5MZWZ0IiwiZ2V0UGFydENsYXNzIiwibGluZUhlaWdodCIsInR5cG9ncmFwaHkiLCJib2R5IiwiZm9udFNpemUiLCJQYXJ0IiwicGFyYW1zIiwicGFydENsYXNzIiwib25QYXJhbUNoYW5nZSIsInBhciIsImkiLCJpc0xhc3QiLCJpdGVtcyIsImdldE5ld1BhcnRPcHRpb25zIiwib25BZGROZXdQYXJ0Iiwib25SZW1vdmVQYXJ0IiwicGFydCIsInBhcnMiLCJkZWJvdW5jZVByb21pc2UiLCJ1c2VBc3luY0ZuIiwiQXN5bmNTZWxlY3QiLCJzZWxlY3RDbGFzcyIsIm1pbldpZHRoIiwiZm9ybWF0Q3JlYXRlTGFiZWwiLCJTZWxSZWxvYWQiLCJvbkNsb3NlIiwiZGVib3VuY2VkTG9hZE9wdGlvbnMiLCJsZWFkaW5nIiwiU2VsU2luZ2xlTG9hZCIsImxvYWRTdGF0ZSIsImRvTG9hZCIsImxvYWRpbmciLCJTZWwiLCJmaWx0ZXJCeUxvYWRPcHRpb25zIiwiSW5wIiwiaW5pdGlhbFZhbHVlIiwiZGVmYXVsdEJ1dHRvbkNsYXNzIiwid2lkdGgiLCJjdXJzb3IiLCJidXR0b25DbGFzc05hbWUiLCJpc09wZW4iLCJzZXRPcGVuIiwiYWRqdXN0T3BlcmF0b3JJZk5lZWRlZCIsImdldENvbmRpdGlvbiIsImdldE9wZXJhdG9yIiwia25vd25PcGVyYXRvcnMiLCJrbm93bkNvbmRpdGlvbnMiLCJvcGVyYXRvck9wdGlvbnMiLCJjb25kaXRpdG9uT3B0aW9ucyIsImxvYWRDb25kaXRpb25PcHRpb25zIiwibG9hZE9wZXJhdG9yT3B0aW9ucyIsIlRhZyIsInRhZyIsImlzRmlyc3QiLCJnZXRUYWdLZXlPcHRpb25zIiwiZ2V0VGFnVmFsdWVPcHRpb25zIiwib3BlcmF0b3IiLCJjb25kaXRpb24iLCJnZXRUYWdLZXlTZWdtZW50T3B0aW9ucyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZ2V0VGFnVmFsdWVTZWdtZW50T3B0aW9ucyIsIm9wIiwib25UYWdDaGFuZ2UiLCJuZXdUYWciLCJuZXdUYWdzIiwib25UYWdSZW1vdmUiLCJhZGROZXdUYWciLCJ0YWdLZXkiLCJtaW5pbWFsVGFnIiwibmV3VCIsIkluZmx1eFF1ZXJ5TW9kZWwiLCJxdWVyeVBhcnQiLCJjYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcmllcyIsIk9iamVjdCIsImNoaWxkcmVuIiwieCIsInRhZ0tleXMiLCJxdWVyeUNvcHkiLCJtb2RlbCIsImhhc0ZpbGwiLCJoYXNHcm91cEJ5VGltZSIsImdldFBhcnRQYXJhbXMiLCJkeW5hbWljUGFyYW1PcHRpb25zIiwiZGVmIiwiY3JlYXRlIiwicGFyYW1WYWx1ZXMiLCJFcnJvciIsImRlZlBhcmFtIiwiZHluYW1pY0xvb2t1cCIsImdldCIsInF1ZXJ5UGFydHMiLCJxcCIsImlzUmVnZXgiLCJ0ZXN0IiwiY3VycmVudE9wZXJhdG9yIiwibmV3VGFnVmFsdWUiLCJpc0N1cnJlbnRPcGVyYXRvclJlZ2V4IiwiaXNOZXdUYWdWYWx1ZVJlZ2V4IiwidXNlUHJldmlvdXMiLCJvdXRzaWRlVmFsIiwiY3VycmVudFZhbCIsInNldEN1cnJlbnRWYWwiLCJwcmV2T3V0c2lkZVZhbCIsImlzT3V0c2lkZVZhbENoYW5nZWQiLCJjbG9uZURlZXAiLCJleHRlbmQiLCJpc1N0cmluZyIsIl9tYXAiLCJvbWl0IiwicGljayIsInJlZHVjZSIsImxhc3RWYWx1ZUZyb20iLCJvZiIsInRocm93RXJyb3IiLCJjYXRjaEVycm9yIiwidjQiLCJ1dWlkdjQiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJmcmFtZVRvTWV0cmljRmluZFZhbHVlIiwiZ2V0QmFja2VuZFNydiIsIkFycmF5VmVjdG9yIiwiZGF0ZU1hdGgiLCJkYXRlVGltZSIsIkZpZWxkVHlwZSIsIkxvYWRpbmdTdGF0ZSIsIlRJTUVfU0VSSUVTX1RJTUVfRklFTERfTkFNRSIsIlRJTUVfU0VSSUVTX1ZBTFVFX0ZJRUxEX05BTUUiLCJJbmZsdXhTZXJpZXMiLCJSZXNwb25zZVBhcnNlciIsIkluZmx1eFF1ZXJ5QnVpbGRlciIsImNvbmZpZyIsImdldEZpZWxkVHlwZSIsInZhbHVlcyIsImZpcnN0Tm90TnVsbCIsIm51bWJlciIsInZhbHVlVHlwZSIsInN0cmluZyIsImJvb2xlYW4iLCJ0aW1lU2VyaWVzVG9EYXRhRnJhbWUiLCJ0aW1lU2VyaWVzIiwidGltZXMiLCJwb2ludHMiLCJkYXRhcG9pbnRzIiwicG9pbnQiLCJ0aW1lRmllbGQiLCJ0aW1lIiwidmFsdWVGaWVsZCIsImRpc3BsYXlOYW1lRnJvbURTIiwibGFiZWxzIiwiZmllbGRzIiwidGFyZ2V0IiwibWV0YSIsIkluZmx1eERhdGFzb3VyY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwidXJscyIsInVybCIsInNwbGl0IiwidHJpbSIsInVzZXJuYW1lIiwid2l0aENyZWRlbnRpYWxzIiwic2V0dGluZ3NEYXRhIiwiaW50ZXJ2YWwiLCJyZXNwb25zZVBhcnNlciIsImFubm90YXRpb25zIiwicmVxdWVzdCIsImZpbHRlcmVkUmVxdWVzdCIsInRhcmdldHMiLCJoaWRlIiwiaXNNaWdyYXRpb25Ub2dnbGVPbkFuZElzQWNjZXNzUHJveHkiLCJwaXBlIiwicmVzIiwibWVzc2FnZSIsInNlcmllc0xpc3QiLCJncm91cGVkRnJhbWVzIiwiZmlsdGVyZWRGcmFtZXMiLCJnZXRUYWJsZSIsInByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlIiwiY2xhc3NpY1F1ZXJ5IiwiZ2V0UXVlcnlEaXNwbGF5VGV4dCIsImZpbHRlclF1ZXJ5IiwiYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyIsInNjb3BlZFZhcnMiLCJyZXN0IiwiZmVhdHVyZVRvZ2dsZXMiLCJpbmZsdXhkYkJhY2tlbmRNaWdyYXRpb24iLCJhcHBseVZhcmlhYmxlcyIsInRpbWVGaWx0ZXIiLCJnZXRUaW1lRmlsdGVyIiwicXVlcnlUYXJnZXRzIiwieSIsImFsbFF1ZXJpZXMiLCJfX2ludGVydmFsIiwiYWNjIiwiY3VycmVudCIsImFkaG9jRmlsdGVycyIsImdldEFkaG9jRmlsdGVycyIsInRtcFF1ZXJ5IiwicmVuZGVyQWRob2NGaWx0ZXJzIiwiX3Nlcmllc1F1ZXJ5IiwicmVzdWx0cyIsInJlc3VsdCIsInNlcmllcyIsImV4ZWN1dGVkUXVlcnlTdHJpbmciLCJpbmZsdXhTZXJpZXMiLCJnZXRUaW1lU2VyaWVzIiwiYW5ub3RhdGlvblF1ZXJ5IiwicmVqZWN0IiwiYW5ub3RhdGlvbiIsImdldFJlZiIsImZldGNoIiwibWV0aG9kIiwiZnJvbSIsInZhbHVlT2YiLCJ0byIsInF1ZXJpZXMiLCJyZXF1ZXN0SWQiLCJ0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2UiLCJyYW5nZVJhdyIsInRpbWV6b25lIiwiZGFzaGJvYXJkIiwiZ2V0QW5ub3RhdGlvbnMiLCJ0YXJnZXRDb250YWluc1RlbXBsYXRlIiwicXVlcnlUZXh0IiwiY29udGFpbnNUZW1wbGF0ZSIsImludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzIiwiZXhwYW5kZWRRdWVyeSIsInBhcmFtIiwic2VsZWN0cyIsIm1ldHJpY0ZpbmRRdWVyeSIsInJzcCIsImludGVycG9sYXRlZCIsInJlc3AiLCJwYXJzZSIsInF1ZXJ5QnVpbGRlciIsImJ1aWxkRXhwbG9yZVF1ZXJ5IiwiX2luZmx1eFJlcXVlc3QiLCJxIiwiZXBvY2giLCJzZXJpYWxpemVQYXJhbXMiLCJtZW1vIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInRlc3REYXRhc291cmNlIiwiaWQiLCJkYXNoYm9hcmRJZCIsInBhbmVsSWQiLCJpbnRlcnZhbE1zIiwibWF4RGF0YVBvaW50cyIsIkRvbmUiLCJzdGF0dXMiLCJmaXJzdCIsImN1cnJlbnRVcmwiLCJzaGlmdCIsInUiLCJkYiIsInJlcSIsInByZWNpc2lvbiIsImluc3BlY3QiLCJwYXJhbVNlcmlhbGl6ZXIiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImVycm9ycyIsImVsZW0iLCJjYW5jZWxsZWQiLCJoYW5kbGVFcnJvcnMiLCJpc0ludGVnZXIiLCJzdGF0dXNUZXh0IiwiZ2V0SW5mbHV4VGltZSIsInVudGlsIiwiZGF0ZSIsInJvdW5kVXAiLCJleGVjIiwiYW1vdW50IiwidW5pdCIsInJ1bkV4cGxvcmVRdWVyeSIsIndpdGhLZXkiLCJ3aXRoTWVhc3VyZW1lbnRGaWx0ZXIiLCJidWlsZGVyIiwibWVhc3VyZW1lbnRGaWx0ZXIiLCJpbmRleE9mIiwia2JuIiwidXBkYXRlUHJvamVjdGlvbiIsInNlbGVjdE1vZGVscyIsImdyb3VwQnlQYXJ0cyIsInVwZGF0ZVBlcnNpc3RlZFBhcnRzIiwic2VsZWN0UGFydHMiLCJnIiwiYWRkR3JvdXBCeSIsInN0cmluZ1BhcnRzIiwibWF0Y2giLCJ0eXBlUGFydCIsImFyZyIsInBhcnRNb2RlbCIsInBhcnRDb3VudCIsInNwbGljZSIsInMiLCJjYXRlZ29yeSIsIkFnZ3JlZ2F0aW9ucyIsIlNlbGVjdG9ycyIsInJlbW92ZVNlbGVjdCIsIm1vZGVsc0luZGV4IiwiYWRkU2VsZWN0UGFydCIsImFkZFN0cmF0ZWd5IiwicmVuZGVyVGFnQ29uZGl0aW9uIiwiaW50ZXJwb2xhdGUiLCJzdHIiLCJnZXRNZWFzdXJlbWVudEFuZFBvbGljeSIsImludGVycG9sYXRlUXVlcnlTdHIiLCJkZWZhdWx0Rm9ybWF0Rm4iLCJtdWx0aSIsImluY2x1ZGVBbGwiLCJyZWdleEVzY2FwZSIsImVzY2FwZWRWYWx1ZXMiLCJzZWxlY3RUZXh0IiwiY29uZGl0aW9ucyIsImdyb3VwQnlTZWN0aW9uIiwiZmlsbCIsImZpbHRlcnMiLCJlYWNoIiwiaW5jbHVkZXMiLCJmbGF0dGVuIiwiVGFibGVNb2RlbCIsIm91dHB1dCIsImoiLCJjb2x1bW5zIiwic2VyaWVzTmFtZSIsImNvbHVtbk5hbWUiLCJfZ2V0U2VyaWVzTmFtZSIsInJlZ2V4Iiwic2VnbWVudHMiLCJnMSIsImcyIiwiZ3JvdXAiLCJzZWdJbmRleCIsImlzTmFOIiwibGlzdCIsInRpdGxlQ29sIiwidGltZUNvbCIsInRpbWVFbmRDb2wiLCJ0YWdzQ29sIiwidGV4dENvbCIsImNvbHVtbiIsInRpdGxlQ29sdW1uIiwidGFnc0NvbHVtbiIsInRleHRDb2x1bW4iLCJ0aW1lRW5kQ29sdW1uIiwiRGF0ZSIsInRpbWVFbmQiLCJ0YWJsZSIsInNlcmllc0luZGV4IiwiZmlyc3RDb2wiLCJmaXJzdFRhYmxlQ29sIiwicmVvcmRlcmVkIiwiaGFzT3duUHJvcGVydHkiLCJyb3dzIiwiRGF0YVNvdXJjZVBsdWdpbiIsIkluZmx1eEFubm90YXRpb25zUXVlcnlDdHJsIiwicGx1Z2luIiwic2V0Q29uZmlnRWRpdG9yIiwic2V0UXVlcnlFZGl0b3IiLCJzZXRBbm5vdGF0aW9uUXVlcnlDdHJsIiwic2V0VmFyaWFibGVRdWVyeUVkaXRvciIsInNldFF1ZXJ5RWRpdG9ySGVscCIsInNlbGVjdE1vZGVsIiwibGlzdEluZGV4IiwibmV3U2VsIiwibmV3R3JvdXBCeSIsIndoZXJlQ29uZGl0aW9ucyIsImNsb25lIiwiUXVlcnlQYXJ0RGVmIiwiUXVlcnlQYXJ0IiwiZnVuY3Rpb25SZW5kZXJlciIsInN1ZmZpeFJlbmRlcmVyIiwiVHJhbnNmb3JtYXRpb25zIiwiUHJlZGljdG9ycyIsIk1hdGgiLCJBbGlhc2luZyIsIkZpZWxkcyIsImNyZWF0ZVBhcnQiLCJyZWdpc3RlciIsImdyb3VwQnlUaW1lRnVuY3Rpb25zIiwiYWxpYXNSZW5kZXJlciIsImlubmVyRXhwciIsImZpZWxkUmVuZGVyZXIiLCJyZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSIsIm1vcmVQYXJ0c0F2YWlsYWJsZSIsIm5leHRQYXJ0IiwiYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSIsImFkZE1hdGhTdHJhdGVneSIsImFkZEFsaWFzU3RyYXRlZ3kiLCJhZGRGaWVsZFN0cmF0ZWd5IiwiZGVmYXVsdFBhcmFtcyIsInJlbmRlcmVyIiwicXVvdGUiLCJyZW5kZXJNb2RlIiwicmVwbGFjZUFnZ3JlZ2F0aW9uQWRkIiwidG9EYXRhUXVlcnlSZXNwb25zZSIsImlzQXJyYXkiLCJpbmZsdXhSZXN1bHRzIiwibm9ybWFsaXplZFF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJpc1ZhbHVlRmlyc3QiLCJzZXJpZSIsImFkZFVuaXF1ZSIsIkFycmF5IiwiZGZzIiwiZ2V0VGFibGVDb2xzIiwiZGZzQnlMYWJlbHMiLCJkZiIsImdldFRhYmxlUm93cyIsImNvbENvbnRhaW5zVGFnIiwiY29sVGV4dCIsInNlbGVjdGVkUGFyYW1zIiwiZ2V0U2VsZWN0ZWRQYXJhbXMiLCJmaWVsZCIsInRvQXJyYXkiLCJtZXRyaWNzIiwiYWxsUGFyYW1zIiwic2VsZWN0b3IiLCJ1bmlxdWVQYXJhbXMiLCJpbmNyZW1lbnROYW1lIiwibmFtZUluY3JlbWVuZXQiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9
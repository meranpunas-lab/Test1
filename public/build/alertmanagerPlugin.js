"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["alertmanagerPlugin"],{

/***/ "./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _InlineFormLabel;







const IMPL_OPTIONS = [{
  value: _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.cortex,
  label: 'Cortex',
  description: `https://cortexmetrics.io/`
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.prometheus,
  label: 'Prometheus',
  description: 'https://prometheus.io/. Does not support editing configuration via API, so contact points and notification policies are read-only.'
}];
const ConfigEditor = ({
  options,
  onOptionsChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      className: "page-heading",
      children: "Alertmanager"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.InlineFormLabel, {
            width: 13,
            children: "Implementation"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
            width: 40,
            options: IMPL_OPTIONS,
            value: options.jsonData.implementation || _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.cortex,
            onChange: value => onOptionsChange(Object.assign({}, options, {
              jsonData: Object.assign({}, options.jsonData, {
                implementation: value.value
              })
            }))
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.DataSourceHttpSettings, {
      defaultUrl: '',
      dataSourceConfig: options,
      showAccessOptions: true,
      onChange: onOptionsChange
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/DataSource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertManagerDatasource": () => (/* binding */ AlertManagerDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");




class AlertManagerDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.instanceSettings = instanceSettings;
  } // `query()` has to be implemented but we actually don't use it, just need this
  // data source to proxy requests.
  // @ts-ignore


  query() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      data: []
    });
  }

  _request(url) {
    const options = {
      headers: {},
      method: 'GET',
      url: this.instanceSettings.url + url
    };

    if (this.instanceSettings.basicAuth || this.instanceSettings.withCredentials) {
      this.instanceSettings.withCredentials = true;
    }

    if (this.instanceSettings.basicAuth) {
      options.headers.Authorization = this.instanceSettings.basicAuth;
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch(options));
  }

  async testDatasource() {
    var _alertmanagerResponse3;

    let alertmanagerResponse;

    if (this.instanceSettings.jsonData.implementation === _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.prometheus) {
      try {
        var _alertmanagerResponse;

        alertmanagerResponse = await this._request('/alertmanager/api/v2/status');

        if (alertmanagerResponse && ((_alertmanagerResponse = alertmanagerResponse) === null || _alertmanagerResponse === void 0 ? void 0 : _alertmanagerResponse.status) === 200) {
          return {
            status: 'error',
            message: 'It looks like you have chosen Prometheus implementation, but detected a Cortex endpoint. Please update implementation selection and try again.'
          };
        }
      } catch (e) {}

      try {
        alertmanagerResponse = await this._request('/api/v2/status');
      } catch (e) {}
    } else {
      try {
        var _alertmanagerResponse2;

        alertmanagerResponse = await this._request('/api/v2/status');

        if (alertmanagerResponse && ((_alertmanagerResponse2 = alertmanagerResponse) === null || _alertmanagerResponse2 === void 0 ? void 0 : _alertmanagerResponse2.status) === 200) {
          return {
            status: 'error',
            message: 'It looks like you have chosen Cortex implementation, but detected a Prometheus endpoint. Please update implementation selection and try again.'
          };
        }
      } catch (e) {}

      try {
        alertmanagerResponse = await this._request('/alertmanager/api/v2/status');
      } catch (e) {}
    }

    return ((_alertmanagerResponse3 = alertmanagerResponse) === null || _alertmanagerResponse3 === void 0 ? void 0 : _alertmanagerResponse3.status) === 200 ? {
      status: 'success',
      message: 'Health check passed.'
    } : {
      status: 'error',
      message: 'Health check failed.'
    };
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx");
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/DataSource.ts");


 // This is not actually a data source but since 7.1,
// it is required to specify query types. Which we don't have.
// @ts-ignore

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_DataSource__WEBPACK_IMPORTED_MODULE_2__.AlertManagerDatasource).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUgsb0JBQW9CLFVBQXBCLHdFQUFzQkMsTUFBdEIsTUFBaUMsR0FBakMsR0FDSDtBQUNFQSxNQUFBQSxNQUFNLEVBQUUsU0FEVjtBQUVFQyxNQUFBQSxPQUFPLEVBQUU7QUFGWCxLQURHLEdBS0g7QUFDRUQsTUFBQUEsTUFBTSxFQUFFLE9BRFY7QUFFRUMsTUFBQUEsT0FBTyxFQUFFO0FBRlgsS0FMSjtBQVNEOztBQTFFMEc7Ozs7Ozs7Ozs7Ozs7O0FDVDdHO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUcsTUFBTSxHQUFHLElBQUlELDJEQUFKLENBQXFCbEIsK0RBQXJCLEVBQTZDb0IsZUFBN0MsQ0FBNkQ3Qix1REFBN0QsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvQ29uZmlnRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL0RhdGFTb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcywgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlSHR0cFNldHRpbmdzLCBJbmxpbmVGb3JtTGFiZWwsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlSnNvbkRhdGEsIEFsZXJ0TWFuYWdlckltcGxlbWVudGF0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxBbGVydE1hbmFnZXJEYXRhU291cmNlSnNvbkRhdGE+O1xuXG5jb25zdCBJTVBMX09QVElPTlM6IFNlbGVjdGFibGVWYWx1ZVtdID0gW1xuICB7XG4gICAgdmFsdWU6IEFsZXJ0TWFuYWdlckltcGxlbWVudGF0aW9uLmNvcnRleCxcbiAgICBsYWJlbDogJ0NvcnRleCcsXG4gICAgZGVzY3JpcHRpb246IGBodHRwczovL2NvcnRleG1ldHJpY3MuaW8vYCxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbi5wcm9tZXRoZXVzLFxuICAgIGxhYmVsOiAnUHJvbWV0aGV1cycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnaHR0cHM6Ly9wcm9tZXRoZXVzLmlvLy4gRG9lcyBub3Qgc3VwcG9ydCBlZGl0aW5nIGNvbmZpZ3VyYXRpb24gdmlhIEFQSSwgc28gY29udGFjdCBwb2ludHMgYW5kIG5vdGlmaWNhdGlvbiBwb2xpY2llcyBhcmUgcmVhZC1vbmx5LicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnRWRpdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+QWxlcnRtYW5hZ2VyPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIHdpZHRoPXsxM30+SW1wbGVtZW50YXRpb248L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgICBvcHRpb25zPXtJTVBMX09QVElPTlN9XG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLmltcGxlbWVudGF0aW9uIHx8IEFsZXJ0TWFuYWdlckltcGxlbWVudGF0aW9uLmNvcnRleH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICBvbk9wdGlvbnNDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIGpzb25EYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGltcGxlbWVudGF0aW9uOiB2YWx1ZS52YWx1ZSBhcyBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEYXRhU291cmNlSHR0cFNldHRpbmdzXG4gICAgICAgIGRlZmF1bHRVcmw9eycnfVxuICAgICAgICBkYXRhU291cmNlQ29uZmlnPXtvcHRpb25zfVxuICAgICAgICBzaG93QWNjZXNzT3B0aW9ucz17dHJ1ZX1cbiAgICAgICAgb25DaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhdGFRdWVyeSwgRGF0YVF1ZXJ5UmVzcG9uc2UsIERhdGFTb3VyY2VBcGksIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kU3J2UmVxdWVzdCwgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZUpzb25EYXRhLCBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBBbGVydE1hbmFnZXJRdWVyeSA9IHtcbiAgcXVlcnk6IHN0cmluZztcbn0gJiBEYXRhUXVlcnk7XG5cbmV4cG9ydCBjbGFzcyBBbGVydE1hbmFnZXJEYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZUFwaTxBbGVydE1hbmFnZXJRdWVyeSwgQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZUpzb25EYXRhPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxBbGVydE1hbmFnZXJEYXRhU291cmNlSnNvbkRhdGE+KSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gIH1cblxuICAvLyBgcXVlcnkoKWAgaGFzIHRvIGJlIGltcGxlbWVudGVkIGJ1dCB3ZSBhY3R1YWxseSBkb24ndCB1c2UgaXQsIGp1c3QgbmVlZCB0aGlzXG4gIC8vIGRhdGEgc291cmNlIHRvIHByb3h5IHJlcXVlc3RzLlxuICAvLyBAdHMtaWdub3JlXG4gIHF1ZXJ5KCk6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gb2Yoe1xuICAgICAgZGF0YTogW10sXG4gICAgfSk7XG4gIH1cblxuICBfcmVxdWVzdCh1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IG9wdGlvbnM6IEJhY2tlbmRTcnZSZXF1ZXN0ID0ge1xuICAgICAgaGVhZGVyczoge30sXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiB0aGlzLmluc3RhbmNlU2V0dGluZ3MudXJsICsgdXJsLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZVNldHRpbmdzLmJhc2ljQXV0aCB8fCB0aGlzLmluc3RhbmNlU2V0dGluZ3Mud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICB0aGlzLmluc3RhbmNlU2V0dGluZ3Mud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZVNldHRpbmdzLmJhc2ljQXV0aCkge1xuICAgICAgb3B0aW9ucy5oZWFkZXJzIS5BdXRob3JpemF0aW9uID0gdGhpcy5pbnN0YW5jZVNldHRpbmdzLmJhc2ljQXV0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8YW55PihvcHRpb25zKSk7XG4gIH1cblxuICBhc3luYyB0ZXN0RGF0YXNvdXJjZSgpIHtcbiAgICBsZXQgYWxlcnRtYW5hZ2VyUmVzcG9uc2U7XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLmltcGxlbWVudGF0aW9uID09PSBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbi5wcm9tZXRoZXVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhbGVydG1hbmFnZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMuX3JlcXVlc3QoJy9hbGVydG1hbmFnZXIvYXBpL3YyL3N0YXR1cycpO1xuICAgICAgICBpZiAoYWxlcnRtYW5hZ2VyUmVzcG9uc2UgJiYgYWxlcnRtYW5hZ2VyUmVzcG9uc2U/LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICdJdCBsb29rcyBsaWtlIHlvdSBoYXZlIGNob3NlbiBQcm9tZXRoZXVzIGltcGxlbWVudGF0aW9uLCBidXQgZGV0ZWN0ZWQgYSBDb3J0ZXggZW5kcG9pbnQuIFBsZWFzZSB1cGRhdGUgaW1wbGVtZW50YXRpb24gc2VsZWN0aW9uIGFuZCB0cnkgYWdhaW4uJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdHJ5IHtcbiAgICAgICAgYWxlcnRtYW5hZ2VyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0KCcvYXBpL3YyL3N0YXR1cycpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWxlcnRtYW5hZ2VyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0KCcvYXBpL3YyL3N0YXR1cycpO1xuICAgICAgICBpZiAoYWxlcnRtYW5hZ2VyUmVzcG9uc2UgJiYgYWxlcnRtYW5hZ2VyUmVzcG9uc2U/LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICdJdCBsb29rcyBsaWtlIHlvdSBoYXZlIGNob3NlbiBDb3J0ZXggaW1wbGVtZW50YXRpb24sIGJ1dCBkZXRlY3RlZCBhIFByb21ldGhldXMgZW5kcG9pbnQuIFBsZWFzZSB1cGRhdGUgaW1wbGVtZW50YXRpb24gc2VsZWN0aW9uIGFuZCB0cnkgYWdhaW4uJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdHJ5IHtcbiAgICAgICAgYWxlcnRtYW5hZ2VyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0KCcvYWxlcnRtYW5hZ2VyL2FwaS92Mi9zdGF0dXMnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsZXJ0bWFuYWdlclJlc3BvbnNlPy5zdGF0dXMgPT09IDIwMFxuICAgICAgPyB7XG4gICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogJ0hlYWx0aCBjaGVjayBwYXNzZWQuJyxcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgIG1lc3NhZ2U6ICdIZWFsdGggY2hlY2sgZmFpbGVkLicsXG4gICAgICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IENvbmZpZ0VkaXRvciB9IGZyb20gJy4vQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckRhdGFzb3VyY2UgfSBmcm9tICcuL0RhdGFTb3VyY2UnO1xuXG4vLyBUaGlzIGlzIG5vdCBhY3R1YWxseSBhIGRhdGEgc291cmNlIGJ1dCBzaW5jZSA3LjEsXG4vLyBpdCBpcyByZXF1aXJlZCB0byBzcGVjaWZ5IHF1ZXJ5IHR5cGVzLiBXaGljaCB3ZSBkb24ndCBoYXZlLlxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luKEFsZXJ0TWFuYWdlckRhdGFzb3VyY2UpLnNldENvbmZpZ0VkaXRvcihDb25maWdFZGl0b3IpO1xuIl0sIm5hbWVzIjpbIkRhdGFTb3VyY2VIdHRwU2V0dGluZ3MiLCJJbmxpbmVGb3JtTGFiZWwiLCJTZWxlY3QiLCJSZWFjdCIsIkFsZXJ0TWFuYWdlckltcGxlbWVudGF0aW9uIiwiSU1QTF9PUFRJT05TIiwidmFsdWUiLCJjb3J0ZXgiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwicHJvbWV0aGV1cyIsIkNvbmZpZ0VkaXRvciIsIm9wdGlvbnMiLCJvbk9wdGlvbnNDaGFuZ2UiLCJqc29uRGF0YSIsImltcGxlbWVudGF0aW9uIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwiRGF0YVNvdXJjZUFwaSIsImdldEJhY2tlbmRTcnYiLCJBbGVydE1hbmFnZXJEYXRhc291cmNlIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZVNldHRpbmdzIiwicXVlcnkiLCJkYXRhIiwiX3JlcXVlc3QiLCJ1cmwiLCJoZWFkZXJzIiwibWV0aG9kIiwiYmFzaWNBdXRoIiwid2l0aENyZWRlbnRpYWxzIiwiQXV0aG9yaXphdGlvbiIsImZldGNoIiwidGVzdERhdGFzb3VyY2UiLCJhbGVydG1hbmFnZXJSZXNwb25zZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlIiwiRGF0YVNvdXJjZVBsdWdpbiIsInBsdWdpbiIsInNldENvbmZpZ0VkaXRvciJdLCJzb3VyY2VSb290IjoiIn0=
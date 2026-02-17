"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["mixedPlugin"],{

/***/ "./public/app/plugins/datasource/mixed/MixedDataSource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MIXED_DATASOURCE_NAME": () => (/* binding */ MIXED_DATASOURCE_NAME),
/* harmony export */   "MixedDatasource": () => (/* binding */ MixedDatasource)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/toArray.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/reduce.js");





const MIXED_DATASOURCE_NAME = '-- Mixed --';
class MixedDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
  }

  query(request) {
    // Remove any invalid queries
    const queries = request.targets.filter(t => {
      var _t$datasource;

      return ((_t$datasource = t.datasource) === null || _t$datasource === void 0 ? void 0 : _t$datasource.uid) !== MIXED_DATASOURCE_NAME;
    });

    if (!queries.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        data: []
      }); // nothing
    } // Build groups of queries to run in parallel


    const sets = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.groupBy)(queries, 'datasource.uid');
    const mixed = [];

    for (const key in sets) {
      const targets = sets[key];
      mixed.push({
        datasource: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().get(targets[0].datasource, request.scopedVars),
        targets
      });
    } // Missing UIDs?


    if (!mixed.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        data: []
      }); // nothing
    }

    return this.batchQueries(mixed, request);
  }

  batchQueries(mixed, request) {
    const runningQueries = mixed.filter(this.isQueryable).map((query, i) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(query.datasource).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(api => {
      const dsRequest = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(request);
      dsRequest.requestId = `mixed-${i}-${dsRequest.requestId || ''}`;
      dsRequest.targets = query.targets;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(api.query(dsRequest)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
        return Object.assign({}, response, {
          data: response.data || [],
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
          key: `mixed-${i}-${response.key || ''}`
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.toArray)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => {
        err = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryError)(err);
        err.message = `${api.name}: ${err.message}`;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
          data: [],
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error,
          error: err,
          key: `mixed-${i}-${dsRequest.requestId || ''}`
        }]);
      }));
    })));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)(runningQueries).pipe(flattenResponses(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(this.finalizeResponses), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeAll)());
  }

  testDatasource() {
    return Promise.resolve({});
  }

  isQueryable(query) {
    return query && Array.isArray(query.targets) && query.targets.length > 0;
  }

  finalizeResponses(responses) {
    const {
      length
    } = responses;

    if (length === 0) {
      return responses;
    }

    const error = responses.find(response => response.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error);

    if (error) {
      responses.push(error); // adds the first found error entry so error shows up in the panel
    } else {
      responses[length - 1].state = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done;
    }

    return responses;
  }

}

function flattenResponses() {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.reduce)((all, current) => {
    return current.reduce((innerAll, innerCurrent) => {
      innerAll.push.apply(innerAll, innerCurrent);
      return innerAll;
    }, all);
  }, []);
}

/***/ }),

/***/ "./public/app/plugins/datasource/mixed/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Datasource": () => (/* reexport safe */ _MixedDataSource__WEBPACK_IMPORTED_MODULE_0__.MixedDatasource),
/* harmony export */   "MixedDatasource": () => (/* reexport safe */ _MixedDataSource__WEBPACK_IMPORTED_MODULE_0__.MixedDatasource)
/* harmony export */ });
/* harmony import */ var _MixedDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/mixed/MixedDataSource.ts");



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQWYsRUFBa0I7QUFDaEIsYUFBTytCLFNBQVA7QUFDRDs7QUFFRCxVQUFNUixLQUFLLEdBQUdRLFNBQVMsQ0FBQ0MsSUFBVixDQUFnQmhCLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxLQUFULEtBQW1CM0MsNkRBQWhELENBQWQ7O0FBQ0EsUUFBSWlELEtBQUosRUFBVztBQUNUUSxNQUFBQSxTQUFTLENBQUMxQixJQUFWLENBQWVrQixLQUFmLEVBRFMsQ0FDYztBQUN4QixLQUZELE1BRU87QUFDTFEsTUFBQUEsU0FBUyxDQUFDL0IsTUFBTSxHQUFHLENBQVYsQ0FBVCxDQUFzQmlCLEtBQXRCLEdBQThCM0MsNERBQTlCO0FBQ0Q7O0FBRUQsV0FBT3lELFNBQVA7QUFDRDs7QUFsRzJEOztBQXFHOUQsU0FBU1AsZ0JBQVQsR0FBMEY7QUFDeEYsU0FBT3RDLHVEQUFNLENBQUMsQ0FBQ2dELEdBQUQsRUFBMkJDLE9BQTNCLEtBQXVDO0FBQ25ELFdBQU9BLE9BQU8sQ0FBQ2pELE1BQVIsQ0FBZSxDQUFDa0QsUUFBRCxFQUFXQyxZQUFYLEtBQTRCO0FBQ2hERCxNQUFBQSxRQUFRLENBQUMvQixJQUFULENBQWNpQyxLQUFkLENBQW9CRixRQUFwQixFQUE4QkMsWUFBOUI7QUFDQSxhQUFPRCxRQUFQO0FBQ0QsS0FITSxFQUdKRixHQUhJLENBQVA7QUFJRCxHQUxZLEVBS1YsRUFMVSxDQUFiO0FBTUQ7Ozs7Ozs7Ozs7Ozs7QUNoSUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbWl4ZWQvTWl4ZWREYXRhU291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9taXhlZC9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5LFxuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIExvYWRpbmdTdGF0ZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlU3J2LCB0b0RhdGFRdWVyeUVycm9yIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBjbG9uZURlZXAsIGdyb3VwQnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZm9ya0pvaW4sIGZyb20sIE9ic2VydmFibGUsIG9mLCBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlQWxsLCBtZXJnZU1hcCwgcmVkdWNlLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgTUlYRURfREFUQVNPVVJDRV9OQU1FID0gJy0tIE1peGVkIC0tJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXRjaGVkUXVlcmllcyB7XG4gIGRhdGFzb3VyY2U6IFByb21pc2U8RGF0YVNvdXJjZUFwaT47XG4gIHRhcmdldHM6IERhdGFRdWVyeVtdO1xufVxuXG5leHBvcnQgY2xhc3MgTWl4ZWREYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZUFwaTxEYXRhUXVlcnk+IHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgfVxuXG4gIHF1ZXJ5KHJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8RGF0YVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICAvLyBSZW1vdmUgYW55IGludmFsaWQgcXVlcmllc1xuICAgIGNvbnN0IHF1ZXJpZXMgPSByZXF1ZXN0LnRhcmdldHMuZmlsdGVyKCh0KSA9PiB7XG4gICAgICByZXR1cm4gdC5kYXRhc291cmNlPy51aWQgIT09IE1JWEVEX0RBVEFTT1VSQ0VfTkFNRTtcbiAgICB9KTtcblxuICAgIGlmICghcXVlcmllcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdIH0gYXMgRGF0YVF1ZXJ5UmVzcG9uc2UpOyAvLyBub3RoaW5nXG4gICAgfVxuXG4gICAgLy8gQnVpbGQgZ3JvdXBzIG9mIHF1ZXJpZXMgdG8gcnVuIGluIHBhcmFsbGVsXG4gICAgY29uc3Qgc2V0czogeyBba2V5OiBzdHJpbmddOiBEYXRhUXVlcnlbXSB9ID0gZ3JvdXBCeShxdWVyaWVzLCAnZGF0YXNvdXJjZS51aWQnKTtcbiAgICBjb25zdCBtaXhlZDogQmF0Y2hlZFF1ZXJpZXNbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2V0cykge1xuICAgICAgY29uc3QgdGFyZ2V0cyA9IHNldHNba2V5XTtcblxuICAgICAgbWl4ZWQucHVzaCh7XG4gICAgICAgIGRhdGFzb3VyY2U6IGdldERhdGFTb3VyY2VTcnYoKS5nZXQodGFyZ2V0c1swXS5kYXRhc291cmNlLCByZXF1ZXN0LnNjb3BlZFZhcnMpLFxuICAgICAgICB0YXJnZXRzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWlzc2luZyBVSURzP1xuICAgIGlmICghbWl4ZWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gb2YoeyBkYXRhOiBbXSB9IGFzIERhdGFRdWVyeVJlc3BvbnNlKTsgLy8gbm90aGluZ1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmJhdGNoUXVlcmllcyhtaXhlZCwgcmVxdWVzdCk7XG4gIH1cblxuICBiYXRjaFF1ZXJpZXMobWl4ZWQ6IEJhdGNoZWRRdWVyaWVzW10sIHJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8RGF0YVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCBydW5uaW5nUXVlcmllcyA9IG1peGVkLmZpbHRlcih0aGlzLmlzUXVlcnlhYmxlKS5tYXAoKHF1ZXJ5LCBpKSA9PlxuICAgICAgZnJvbShxdWVyeS5kYXRhc291cmNlKS5waXBlKFxuICAgICAgICBtZXJnZU1hcCgoYXBpOiBEYXRhU291cmNlQXBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHNSZXF1ZXN0ID0gY2xvbmVEZWVwKHJlcXVlc3QpO1xuICAgICAgICAgIGRzUmVxdWVzdC5yZXF1ZXN0SWQgPSBgbWl4ZWQtJHtpfS0ke2RzUmVxdWVzdC5yZXF1ZXN0SWQgfHwgJyd9YDtcbiAgICAgICAgICBkc1JlcXVlc3QudGFyZ2V0cyA9IHF1ZXJ5LnRhcmdldHM7XG5cbiAgICAgICAgICByZXR1cm4gZnJvbShhcGkucXVlcnkoZHNSZXF1ZXN0KSkucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5yZXNwb25zZSxcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhIHx8IFtdLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyxcbiAgICAgICAgICAgICAgICBrZXk6IGBtaXhlZC0ke2l9LSR7cmVzcG9uc2Uua2V5IHx8ICcnfWAsXG4gICAgICAgICAgICAgIH0gYXMgRGF0YVF1ZXJ5UmVzcG9uc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRvQXJyYXkoKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgICBlcnIgPSB0b0RhdGFRdWVyeUVycm9yKGVycik7XG4gICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gYCR7YXBpLm5hbWV9OiAke2Vyci5tZXNzYWdlfWA7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG9mPERhdGFRdWVyeVJlc3BvbnNlW10+KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRXJyb3IsXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgICAgICAgICAgICAga2V5OiBgbWl4ZWQtJHtpfS0ke2RzUmVxdWVzdC5yZXF1ZXN0SWQgfHwgJyd9YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIGZvcmtKb2luKHJ1bm5pbmdRdWVyaWVzKS5waXBlKGZsYXR0ZW5SZXNwb25zZXMoKSwgbWFwKHRoaXMuZmluYWxpemVSZXNwb25zZXMpLCBtZXJnZUFsbCgpKTtcbiAgfVxuXG4gIHRlc3REYXRhc291cmNlKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe30pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1F1ZXJ5YWJsZShxdWVyeTogQmF0Y2hlZFF1ZXJpZXMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcXVlcnkgJiYgQXJyYXkuaXNBcnJheShxdWVyeS50YXJnZXRzKSAmJiBxdWVyeS50YXJnZXRzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBwcml2YXRlIGZpbmFsaXplUmVzcG9uc2VzKHJlc3BvbnNlczogRGF0YVF1ZXJ5UmVzcG9uc2VbXSk6IERhdGFRdWVyeVJlc3BvbnNlW10ge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSByZXNwb25zZXM7XG5cbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VzO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9yID0gcmVzcG9uc2VzLmZpbmQoKHJlc3BvbnNlKSA9PiByZXNwb25zZS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkVycm9yKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJlc3BvbnNlcy5wdXNoKGVycm9yKTsgLy8gYWRkcyB0aGUgZmlyc3QgZm91bmQgZXJyb3IgZW50cnkgc28gZXJyb3Igc2hvd3MgdXAgaW4gdGhlIHBhbmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlc1tsZW5ndGggLSAxXS5zdGF0ZSA9IExvYWRpbmdTdGF0ZS5Eb25lO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmxhdHRlblJlc3BvbnNlcygpOiBPcGVyYXRvckZ1bmN0aW9uPERhdGFRdWVyeVJlc3BvbnNlW11bXSwgRGF0YVF1ZXJ5UmVzcG9uc2VbXT4ge1xuICByZXR1cm4gcmVkdWNlKChhbGw6IERhdGFRdWVyeVJlc3BvbnNlW10sIGN1cnJlbnQpID0+IHtcbiAgICByZXR1cm4gY3VycmVudC5yZWR1Y2UoKGlubmVyQWxsLCBpbm5lckN1cnJlbnQpID0+IHtcbiAgICAgIGlubmVyQWxsLnB1c2guYXBwbHkoaW5uZXJBbGwsIGlubmVyQ3VycmVudCk7XG4gICAgICByZXR1cm4gaW5uZXJBbGw7XG4gICAgfSwgYWxsKTtcbiAgfSwgW10pO1xufVxuIiwiaW1wb3J0IHsgTWl4ZWREYXRhc291cmNlIH0gZnJvbSAnLi9NaXhlZERhdGFTb3VyY2UnO1xuZXhwb3J0IHsgTWl4ZWREYXRhc291cmNlLCBNaXhlZERhdGFzb3VyY2UgYXMgRGF0YXNvdXJjZSB9O1xuIl0sIm5hbWVzIjpbIkRhdGFTb3VyY2VBcGkiLCJMb2FkaW5nU3RhdGUiLCJnZXREYXRhU291cmNlU3J2IiwidG9EYXRhUXVlcnlFcnJvciIsImNsb25lRGVlcCIsImdyb3VwQnkiLCJmb3JrSm9pbiIsImZyb20iLCJvZiIsImNhdGNoRXJyb3IiLCJtYXAiLCJtZXJnZUFsbCIsIm1lcmdlTWFwIiwicmVkdWNlIiwidG9BcnJheSIsIk1JWEVEX0RBVEFTT1VSQ0VfTkFNRSIsIk1peGVkRGF0YXNvdXJjZSIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2VTZXR0aW5ncyIsInF1ZXJ5IiwicmVxdWVzdCIsInF1ZXJpZXMiLCJ0YXJnZXRzIiwiZmlsdGVyIiwidCIsImRhdGFzb3VyY2UiLCJ1aWQiLCJsZW5ndGgiLCJkYXRhIiwic2V0cyIsIm1peGVkIiwia2V5IiwicHVzaCIsImdldCIsInNjb3BlZFZhcnMiLCJiYXRjaFF1ZXJpZXMiLCJydW5uaW5nUXVlcmllcyIsImlzUXVlcnlhYmxlIiwiaSIsInBpcGUiLCJhcGkiLCJkc1JlcXVlc3QiLCJyZXF1ZXN0SWQiLCJyZXNwb25zZSIsInN0YXRlIiwiTG9hZGluZyIsImVyciIsIm1lc3NhZ2UiLCJuYW1lIiwiRXJyb3IiLCJlcnJvciIsImZsYXR0ZW5SZXNwb25zZXMiLCJmaW5hbGl6ZVJlc3BvbnNlcyIsInRlc3REYXRhc291cmNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJBcnJheSIsImlzQXJyYXkiLCJyZXNwb25zZXMiLCJmaW5kIiwiRG9uZSIsImFsbCIsImN1cnJlbnQiLCJpbm5lckFsbCIsImlubmVyQ3VycmVudCIsImFwcGx5IiwiRGF0YXNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=
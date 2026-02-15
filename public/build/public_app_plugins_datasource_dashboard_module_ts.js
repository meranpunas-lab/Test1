"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_plugins_datasource_dashboard_module_ts"],{

/***/ "./public/app/plugins/datasource/dashboard/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardDatasource": () => (/* binding */ DashboardDatasource)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");


/**
 * This should not really be called
 */
class DashboardDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
  }

  getCollapsedText(query) {
    return `Dashboard Reference: ${query.panelId}`;
  }

  query(options) {
    return Promise.reject('This should not be called directly');
  }

  testDatasource() {
    return Promise.resolve({});
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/dashboard/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/dashboard/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");


const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_0__.DashboardDatasource);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9wbHVnaW5zX2RhdGFzb3VyY2VfZGFzaGJvYXJkX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNPLE1BQU1DLG1CQUFOLFNBQWtDRCx3REFBbEMsQ0FBZ0U7QUFDckVFLEVBQUFBLFdBQVcsQ0FBQ0MsZ0JBQUQsRUFBK0M7QUFDeEQsVUFBTUEsZ0JBQU47QUFDRDs7QUFFREMsRUFBQUEsZ0JBQWdCLENBQUNDLEtBQUQsRUFBd0I7QUFDdEMsV0FBUSx3QkFBdUJBLEtBQUssQ0FBQ0MsT0FBUSxFQUE3QztBQUNEOztBQUVERCxFQUFBQSxLQUFLLENBQUNFLE9BQUQsRUFBd0U7QUFDM0UsV0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWUsb0NBQWYsQ0FBUDtBQUNEOztBQUVEQyxFQUFBQSxjQUFjLEdBQUc7QUFDZixXQUFPRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FBUDtBQUNEOztBQWZvRTs7Ozs7Ozs7Ozs7OztBQ052RTtBQUNBO0FBRU8sTUFBTUUsTUFBTSxHQUFHLElBQUlELDJEQUFKLENBQXFCWCw0REFBckIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9kYXNoYm9hcmQvZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZGFzaGJvYXJkL21vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlQXBpLCBEYXRhUXVlcnlSZXF1ZXN0LCBEYXRhUXVlcnlSZXNwb25zZSwgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhc2hib2FyZFF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogVGhpcyBzaG91bGQgbm90IHJlYWxseSBiZSBjYWxsZWRcbiAqL1xuZXhwb3J0IGNsYXNzIERhc2hib2FyZERhdGFzb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlQXBpPERhc2hib2FyZFF1ZXJ5PiB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gIH1cblxuICBnZXRDb2xsYXBzZWRUZXh0KHF1ZXJ5OiBEYXNoYm9hcmRRdWVyeSkge1xuICAgIHJldHVybiBgRGFzaGJvYXJkIFJlZmVyZW5jZTogJHtxdWVyeS5wYW5lbElkfWA7XG4gIH1cblxuICBxdWVyeShvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PERhc2hib2FyZFF1ZXJ5Pik6IFByb21pc2U8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1RoaXMgc2hvdWxkIG5vdCBiZSBjYWxsZWQgZGlyZWN0bHknKTtcbiAgfVxuXG4gIHRlc3REYXRhc291cmNlKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe30pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXNoYm9hcmREYXRhc291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luKERhc2hib2FyZERhdGFzb3VyY2UpO1xuIl0sIm5hbWVzIjpbIkRhdGFTb3VyY2VBcGkiLCJEYXNoYm9hcmREYXRhc291cmNlIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZVNldHRpbmdzIiwiZ2V0Q29sbGFwc2VkVGV4dCIsInF1ZXJ5IiwicGFuZWxJZCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVqZWN0IiwidGVzdERhdGFzb3VyY2UiLCJyZXNvbHZlIiwiRGF0YVNvdXJjZVBsdWdpbiIsInBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
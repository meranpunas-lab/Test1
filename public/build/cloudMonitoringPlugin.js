(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["cloudMonitoringPlugin"],{

/***/ "./public/app/plugins/datasource/cloud-monitoring/CloudMonitoringMetricFindQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudMonitoringMetricFindQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");




class CloudMonitoringMetricFindQuery {
  constructor(datasource) {
    this.datasource = datasource;
    this.datasource = datasource;
  }

  async execute(query) {
    try {
      if (!query.projectName) {
        query.projectName = this.datasource.getDefaultProject();
      }

      switch (query.selectedQueryType) {
        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.Projects:
          return this.handleProjectsQuery();

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.Services:
          return this.handleServiceQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.MetricTypes:
          return this.handleMetricTypesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.LabelKeys:
          return this.handleLabelKeysQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.LabelValues:
          return this.handleLabelValuesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.ResourceTypes:
          return this.handleResourceTypeQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.Aligners:
          return this.handleAlignersQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.AlignmentPeriods:
          return this.handleAlignmentPeriodQuery();

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.Aggregations:
          return this.handleAggregationQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.SLOServices:
          return this.handleSLOServicesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.SLO:
          return this.handleSLOQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_2__.MetricFindQueryTypes.Selectors:
          return this.handleSelectorQuery();

        default:
          return [];
      }
    } catch (error) {
      console.error(`Could not run CloudMonitoringMetricFindQuery ${query}`, error);
      return [];
    }
  }

  async handleProjectsQuery() {
    const projects = await this.datasource.getProjects();
    return projects.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleServiceQuery({
    projectName
  }) {
    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const services = (0,_functions__WEBPACK_IMPORTED_MODULE_3__.extractServicesFromMetricDescriptors)(metricDescriptors);
    return services.map(s => ({
      text: s.serviceShortName,
      value: s.service,
      expandable: true
    }));
  }

  async handleMetricTypesQuery({
    selectedService,
    projectName
  }) {
    if (!selectedService) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    return (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getMetricTypesByService)(metricDescriptors, this.datasource.templateSrv.replace(selectedService)).map(s => ({
      text: s.displayName,
      value: s.type,
      expandable: true
    }));
  }

  async handleLabelKeysQuery({
    selectedMetricType,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const labelKeys = await (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getLabelKeys)(this.datasource, selectedMetricType, projectName);
    return labelKeys.map(this.toFindQueryResult);
  }

  async handleLabelValuesQuery({
    selectedMetricType,
    labelKey,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const refId = 'handleLabelValuesQuery'; // REDUCE_MEAN is needed so the groupBy is not ignored

    const labels = await this.datasource.getLabels(selectedMetricType, refId, projectName, {
      groupBys: [labelKey],
      crossSeriesReducer: 'REDUCE_MEAN'
    });
    const interpolatedKey = this.datasource.templateSrv.replace(labelKey);
    const values = labels.hasOwnProperty(interpolatedKey) ? labels[interpolatedKey] : [];
    return values.map(this.toFindQueryResult);
  }

  async handleResourceTypeQuery({
    selectedMetricType,
    projectName
  }) {
    var _labels$resourceType, _labels$resourceType2;

    if (!selectedMetricType) {
      return [];
    }

    const refId = 'handleResourceTypeQueryQueryType';
    const labels = await this.datasource.getLabels(selectedMetricType, refId, projectName);
    return (_labels$resourceType = (_labels$resourceType2 = labels['resource.type']) === null || _labels$resourceType2 === void 0 ? void 0 : _labels$resourceType2.map(this.toFindQueryResult)) !== null && _labels$resourceType !== void 0 ? _labels$resourceType : [];
  }

  async handleAlignersQuery({
    selectedMetricType,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const descriptor = metricDescriptors.find(m => m.type === this.datasource.templateSrv.replace(selectedMetricType));

    if (!descriptor) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAlignmentOptionsByMetric)(descriptor.valueType, descriptor.metricKind).map(this.toFindQueryResult);
  }

  async handleAggregationQuery({
    selectedMetricType,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const descriptor = metricDescriptors.find(m => m.type === this.datasource.templateSrv.replace(selectedMetricType));

    if (!descriptor) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAggregationOptionsByMetric)(descriptor.valueType, descriptor.metricKind).map(this.toFindQueryResult);
  }

  async handleSLOServicesQuery({
    projectName
  }) {
    const services = await this.datasource.getSLOServices(projectName);
    return services.map(this.toFindQueryResult);
  }

  async handleSLOQuery({
    selectedSLOService,
    projectName
  }) {
    const slos = await this.datasource.getServiceLevelObjectives(projectName, selectedSLOService);
    return slos.map(this.toFindQueryResult);
  }

  async handleSelectorQuery() {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.SELECTORS.map(this.toFindQueryResult);
  }

  handleAlignmentPeriodQuery() {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.ALIGNMENT_PERIODS.map(this.toFindQueryResult);
  }

  toFindQueryResult(x) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(x) ? {
      text: x,
      expandable: true
    } : Object.assign({}, x, {
      expandable: true
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/annotations_query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudMonitoringAnnotationsQueryCtrl": () => (/* binding */ CloudMonitoringAnnotationsQueryCtrl)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CloudMonitoringAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation || {};
    this.annotation.target = $scope.ctrl.annotation.target || {};
    this.onQueryChange = this.onQueryChange.bind(this);
  }

  onQueryChange(target) {
    Object.assign(this.annotation.target, target);
  }

}
CloudMonitoringAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(CloudMonitoringAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Aggregation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aggregation": () => (/* binding */ Aggregation)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Aggregation = props => {
  const aggOptions = useAggregationOptionsByMetric(props);
  const selected = useSelectedFromOptions(aggOptions, props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorField, {
    labelWidth: 18,
    label: "Group by function",
    "data-testid": "cloud-monitoring-aggregation",
    htmlFor: `${props.refId}-group-by-function`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
      menuShouldPortal: true,
      width: 16,
      onChange: ({
        value
      }) => props.onChange(value),
      value: selected,
      options: [{
        label: 'Template Variables',
        options: props.templateVariableOptions
      }, {
        label: 'Aggregations',
        expanded: true,
        options: aggOptions
      }],
      placeholder: "Select Reducer",
      inputId: `${props.refId}-group-by-function`
    })
  });
};

const useAggregationOptionsByMetric = ({
  metricDescriptor
}) => {
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!valueType || !metricKind) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAggregationOptionsByMetric)(valueType, metricKind).map(a => Object.assign({}, a, {
      label: a.text
    }));
  }, [valueType, metricKind]);
};

const useSelectedFromOptions = (aggOptions, props) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const allOptions = [...aggOptions, ...props.templateVariableOptions];
    return allOptions.find(s => s.value === props.crossSeriesReducer);
  }, [aggOptions, props.crossSeriesReducer, props.templateVariableOptions]);
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AliasBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliasBy": () => (/* binding */ AliasBy)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const AliasBy = ({
  refId,
  value = '',
  onChange
}) => {
  const [alias, setAlias] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(value !== null && value !== void 0 ? value : '');
  const propagateOnChange = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(onChange, 1000);

  onChange = e => {
    setAlias(e.target.value);
    propagateOnChange(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.QueryEditorRow, {
    label: "Alias by",
    htmlFor: `${refId}-alias-by`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Input, {
      id: `${refId}-alias-by`,
      width: _constants__WEBPACK_IMPORTED_MODULE_4__.INPUT_WIDTH,
      value: alias,
      onChange: onChange
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Alignment.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alignment": () => (/* binding */ Alignment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Alignment = ({
  refId,
  templateVariableOptions,
  onChange,
  query,
  customMetaData,
  datasource
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.QueryEditorRow, {
    label: "Alignment function",
    tooltip: "The process of alignment consists of collecting all data points received in a fixed length of time, applying a function to combine those data points, and assigning a timestamp to the result.",
    fillComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.AlignmentPeriodLabel, {
      datasource: datasource,
      customMetaData: customMetaData
    }),
    htmlFor: `${refId}-alignment-function`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.AlignmentFunction, {
      inputId: `${refId}-alignment-function`,
      templateVariableOptions: templateVariableOptions,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.QueryEditorField, {
      label: "Alignment period",
      htmlFor: `${refId}-alignment-period`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.AlignmentPeriod, {
        inputId: `${refId}-alignment-period`,
        selectWidth: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
        templateVariableOptions: templateVariableOptions,
        query: query,
        onChange: onChange
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AlignmentFunction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentFunction": () => (/* binding */ AlignmentFunction)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlignmentFunction = ({
  inputId,
  query,
  templateVariableOptions,
  onChange
}) => {
  const {
    valueType,
    metricKind,
    perSeriesAligner: psa,
    preprocessor
  } = query;
  const {
    perSeriesAligner,
    alignOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAlignmentPickerData)(valueType, metricKind, psa, preprocessor), [valueType, metricKind, psa, preprocessor]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
    menuShouldPortal: true,
    width: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
    onChange: ({
      value
    }) => onChange(Object.assign({}, query, {
      perSeriesAligner: value
    })),
    value: [...alignOptions, ...templateVariableOptions].find(s => s.value === perSeriesAligner),
    options: [{
      label: 'Template Variables',
      options: templateVariableOptions
    }, {
      label: 'Alignment options',
      expanded: true,
      options: alignOptions
    }],
    placeholder: "Select Alignment",
    inputId: inputId
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AlignmentPeriod.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentPeriod": () => (/* binding */ AlignmentPeriod)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function AlignmentPeriod({
  inputId,
  templateVariableOptions,
  onChange,
  query,
  selectWidth
}) {
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENT_PERIODS.map(ap => Object.assign({}, ap, {
    label: ap.text
  })), []);
  const visibleOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => options.filter(ap => !ap.hidden), [options]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
    menuShouldPortal: true,
    width: selectWidth,
    onChange: ({
      value
    }) => onChange(Object.assign({}, query, {
      alignmentPeriod: value
    })),
    value: [...options, ...templateVariableOptions].find(s => s.value === query.alignmentPeriod),
    options: [{
      label: 'Template Variables',
      options: templateVariableOptions
    }, {
      label: 'Aggregations',
      expanded: true,
      options: visibleOptions
    }],
    placeholder: "Select Alignment",
    inputId: inputId
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AlignmentPeriodLabel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentPeriodLabel": () => (/* binding */ AlignmentPeriodLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const AlignmentPeriodLabel = ({
  customMetaData,
  datasource
}) => {
  const {
    perSeriesAligner,
    alignmentPeriod
  } = customMetaData;
  const formatAlignmentText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _alignment$text;

    if (!alignmentPeriod || !perSeriesAligner) {
      return '';
    }

    const alignment = _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENTS.find(ap => ap.value === datasource.templateSrv.replace(perSeriesAligner));
    const seconds = parseInt(alignmentPeriod !== null && alignmentPeriod !== void 0 ? alignmentPeriod : ''.replace(/[^0-9]/g, ''), 10);
    const hms = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.secondsToHms(seconds);
    return `${hms} interval (${(_alignment$text = alignment === null || alignment === void 0 ? void 0 : alignment.text) !== null && _alignment$text !== void 0 ? _alignment$text : ''})`;
  }, [datasource, perSeriesAligner, alignmentPeriod]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
    children: formatAlignmentText
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AnnotationsHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationsHelp": () => (/* binding */ AnnotationsHelp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;




const AnnotationsHelp = () => {
  return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "gf-form grafana-info-box alert-info",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
        children: "Annotation Query Format"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: ["An annotation is an event that is overlaid on top of graphs. Annotation rendering is expensive so it is important to limit the number of rows returned.", ' ']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: "The Title and Text fields support templating and can use data returned from the query. For example, the Title field could have the following text:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("code", {
        children: [`${'{{metric.type}}'}`, " has value: ", `${'{{metric.value}}'}`]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: ["Example Result: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: "monitoring.googleapis.com/uptime_check/http_status has this value: 502"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        children: "Patterns:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.value}}'}`
        }), " = value of the metric/point"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.type}}'}`
        }), " = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.name}}'}`
        }), " = name part of metric e.g. instance/cpu/usage_time"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.service}}'}`
        }), " = service part of metric e.g. compute"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.label.label_name}}'}`
        }), " = Metric label metadata e.g. metric.label.instance_name"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{resource.label.label_name}}'}`
        }), " = Resource label metadata e.g. resource.label.zone"]
      })]
    })
  }));
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/CloudMonitoringCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudMonitoringCheatSheet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _code, _br, _code2, _br2, _br3, _label, _br4, _li, _li2, _li3, _li4, _li5, _li6, _li7, _li8, _li9, _li10, _li11, _li12;





class CloudMonitoringCheatSheet extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        children: "Cloud Monitoring alias patterns"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "Format the legend keys any way you want by using alias patterns. Format the legend keys any way you want by using alias patterns."
        })), "Example:", _code || (_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
          children: `${'{{metric.name}} - {{metric.label.instance_name}}'}`
        })), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), "Result: \xA0\xA0", _code2 || (_code2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
          children: "cpu/usage_time - server1-europe-west-1"
        })), _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), _br3 || (_br3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), _label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          children: "Patterns"
        })), _br4 || (_br4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
              list-style: none;
            `,
          children: [_li || (_li = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.type}}'}`
            }), " = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]
          })), _li2 || (_li2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.name}}'}`
            }), " = name part of metric e.g. instance/cpu/usage_time"]
          })), _li3 || (_li3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.service}}'}`
            }), " = service part of metric e.g. compute"]
          })), _li4 || (_li4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.label.label_name}}'}`
            }), " = Metric label metadata e.g. metric.label.instance_name"]
          })), _li5 || (_li5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{resource.label.label_name}}'}`
            }), " = Resource label metadata e.g. resource.label.zone"]
          })), _li6 || (_li6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metadata.system_labels.name}}'}`
            }), " = Meta data system labels e.g. metadata.system_labels.name. For this to work, the needs to be included in the group by"]
          })), _li7 || (_li7 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metadata.user_labels.name}}'}`
            }), " = Meta data user labels e.g. metadata.user_labels.name. For this to work, the needs to be included in the group by"]
          })), _li8 || (_li8 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{bucket}}'}`
            }), " = bucket boundary for distribution metrics when using a heatmap in Grafana"]
          })), _li9 || (_li9 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{project}}'}`
            }), " = The project name that was specified in the query editor"]
          })), _li10 || (_li10 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{service}}'}`
            }), " = The service id that was specified in the SLO query editor"]
          })), _li11 || (_li11 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{slo}}'}`
            }), " = The SLO id that was specified in the SLO query editor"]
          })), _li12 || (_li12 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{selector}}'}`
            }), " = The Selector function that was specified in the SLO query editor"]
          }))]
        })]
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/ConfigEditor/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_google_sdk__WEBPACK_IMPORTED_MODULE_1__.ConnectionConfig, Object.assign({}, this.props))
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Fields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorField": () => (/* binding */ QueryEditorField),
/* harmony export */   "QueryEditorRow": () => (/* binding */ QueryEditorRow),
/* harmony export */   "VariableQueryField": () => (/* binding */ VariableQueryField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["children", "label", "tooltip", "fillComponent", "noFillEnd", "labelWidth", "htmlFor"],
      _excluded2 = ["children", "label", "tooltip", "labelWidth"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const VariableQueryField = ({
  label,
  onChange,
  value,
  options,
  allowCustomValue = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: label,
    labelWidth: 20,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      menuShouldPortal: true,
      width: 25,
      allowCustomValue: allowCustomValue,
      value: value,
      onChange: ({
        value
      }) => onChange(value),
      options: options
    })
  });
};
const QueryEditorRow = _ref => {
  let {
    children,
    label,
    tooltip,
    fillComponent,
    noFillEnd = false,
    labelWidth = _constants__WEBPACK_IMPORTED_MODULE_3__.LABEL_WIDTH,
    htmlFor
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", Object.assign({
    className: "gf-form"
  }, rest, {
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineLabel, {
      width: labelWidth,
      tooltip: tooltip,
      htmlFor: htmlFor,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
          margin-right: 4px;
        `,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
        spacing: "xs",
        width: "auto",
        children: children
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: 'gf-form--grow',
      children: noFillEnd || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: 'gf-form-label gf-form-label--grow',
        children: fillComponent
      })
    })]
  }));
};
const QueryEditorField = _ref2 => {
  let {
    children,
    label,
    tooltip,
    labelWidth = _constants__WEBPACK_IMPORTED_MODULE_3__.INNER_LABEL_WIDTH
  } = _ref2,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineLabel, Object.assign({
      width: labelWidth,
      tooltip: tooltip
    }, rest, {
      children: label
    })), children]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/GroupBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupBy": () => (/* binding */ GroupBy)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const GroupBy = ({
  refId,
  labels: groupBys = [],
  query,
  onChange,
  variableOptionGroup,
  metricDescriptor
}) => {
  var _query$groupBys, _query$groupBys2;

  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_4__.labelsToGroupedOptions)([...groupBys, ..._constants__WEBPACK_IMPORTED_MODULE_3__.SYSTEM_LABELS])], [groupBys, variableOptionGroup]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Group by",
    tooltip: "You can reduce the amount of data returned for a metric by combining different time series. To combine multiple time series, you can specify a grouping and a function. Grouping is done on the basis of labels. The grouping function is used to combine the time series in the group into a single time series.",
    htmlFor: `${refId}-group-by`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.MultiSelect, {
      menuShouldPortal: true,
      inputId: `${refId}-group-by`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.INPUT_WIDTH,
      placeholder: "Choose label",
      options: options,
      value: (_query$groupBys = query.groupBys) !== null && _query$groupBys !== void 0 ? _query$groupBys : [],
      onChange: options => {
        onChange(Object.assign({}, query, {
          groupBys: options.map(o => o.value)
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Aggregation, {
      metricDescriptor: metricDescriptor,
      templateVariableOptions: variableOptionGroup.options,
      crossSeriesReducer: query.crossSeriesReducer,
      groupBys: (_query$groupBys2 = query.groupBys) !== null && _query$groupBys2 !== void 0 ? _query$groupBys2 : [],
      onChange: crossSeriesReducer => onChange(Object.assign({}, query, {
        crossSeriesReducer
      })),
      refId: refId
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/LabelFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelFilter": () => (/* binding */ LabelFilter)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value", "isOpen", "invalid"],
      _excluded2 = ["value"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const operators = ['=', '!=', '=~', '!=~'];
const FilterButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef((_ref, ref) => {
  let rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({}, rest, {
    ref: ref,
    variant: "secondary",
    icon: "plus",
    "aria-label": "Add filter"
  }));
});
FilterButton.displayName = 'FilterButton';
const OperatorButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef((_ref2, ref) => {
  let {
    value
  } = _ref2,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({}, rest, {
    ref: ref,
    variant: "secondary",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      className: "query-segment-operator",
      children: value === null || value === void 0 ? void 0 : value.label
    })
  }));
});
OperatorButton.displayName = 'OperatorButton';
const LabelFilter = ({
  labels = {},
  filters: filterArray,
  onChange,
  variableOptionGroup
}) => {
  var _AddFilter;

  const filters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (0,_functions__WEBPACK_IMPORTED_MODULE_6__.stringArrayToFilters)(filterArray), [filterArray]);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_6__.labelsToGroupedOptions)(Object.keys(labels))], [labels, variableOptionGroup]);
  const filtersToStringArray = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(filters => {
    const strArr = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.flatten)(filters.map(({
      key,
      operator,
      value,
      condition
    }) => [key, operator, value, condition]));
    return strArr.slice(0, strArr.length - 1);
  }, []);

  const AddFilter = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      menuShouldPortal: true,
      allowCustomValue: true,
      options: [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_6__.labelsToGroupedOptions)(Object.keys(labels))],
      onChange: ({
        value: key = ''
      }) => onChange(filtersToStringArray([...filters, {
        key,
        operator: '=',
        condition: 'AND',
        value: ''
      }])),
      menuPlacement: "bottom",
      renderControl: FilterButton
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow, {
    label: "Filter",
    tooltip: 'To reduce the amount of data charted, apply a filter. A filter has three components: a label, a comparison, and a value. The comparison can be an equality, inequality, or regular expression.',
    noFillEnd: filters.length > 1,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.VerticalGroup, {
      spacing: "xs",
      width: "auto",
      children: [filters.map(({
        key,
        operator,
        value,
        condition
      }, index) => {
        // Add the current key and value as options if they are manually entered
        const keyPresent = options.some(op => {
          if (op.options) {
            return options.some(opp => opp.label === key);
          }

          return op.label === key;
        });

        if (!keyPresent) {
          options.push({
            label: key,
            value: key
          });
        }

        const valueOptions = labels.hasOwnProperty(key) ? [variableOptionGroup, ...labels[key].map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.toOption)] : [variableOptionGroup];
        const valuePresent = valueOptions.some(op => {
          return op.label === value;
        });

        if (!valuePresent) {
          valueOptions.push({
            label: value,
            value
          });
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
          spacing: "xs",
          width: "auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
            menuShouldPortal: true,
            "aria-label": "Filter label key",
            width: _constants__WEBPACK_IMPORTED_MODULE_5__.SELECT_WIDTH,
            allowCustomValue: true,
            formatCreateLabel: v => `Use label key: ${v}`,
            value: key,
            options: options,
            onChange: ({
              value: key = ''
            }) => {
              onChange(filtersToStringArray(filters.map((f, i) => i === index ? {
                key,
                operator,
                condition,
                value: ''
              } : f)));
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
            menuShouldPortal: true,
            value: operator,
            options: operators.map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.toOption),
            onChange: ({
              value: operator = '='
            }) => onChange(filtersToStringArray(filters.map((f, i) => i === index ? Object.assign({}, f, {
              operator
            }) : f))),
            menuPlacement: "bottom",
            renderControl: OperatorButton
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
            menuShouldPortal: true,
            "aria-label": "Filter label value",
            width: _constants__WEBPACK_IMPORTED_MODULE_5__.SELECT_WIDTH,
            formatCreateLabel: v => `Use label value: ${v}`,
            allowCustomValue: true,
            value: value,
            placeholder: "add filter value",
            options: valueOptions,
            onChange: ({
              value = ''
            }) => onChange(filtersToStringArray(filters.map((f, i) => i === index ? Object.assign({}, f, {
              value
            }) : f)))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "secondary",
            size: "md",
            icon: "trash-alt",
            "aria-label": "Remove",
            onClick: () => onChange(filtersToStringArray(filters.filter((_, i) => i !== index)))
          }), index + 1 === filters.length && Object.values(filters).every(({
            value
          }) => value) && (_AddFilter || (_AddFilter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AddFilter, {})))]
        }, index);
      }), !filters.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AddFilter, {})]
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MQLQueryEditor": () => (/* binding */ MQLQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function MQLQueryEditor({
  query,
  onChange,
  onRunQuery
}) {
  const onKeyDown = event => {
    if (event.key === 'Enter' && (event.shiftKey || event.ctrlKey)) {
      event.preventDefault();
      onRunQuery();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
      name: "Query",
      className: "slate-query-field",
      value: query,
      rows: 10,
      placeholder: "Enter a Cloud Monitoring MQL query (Run with Shift+Enter)",
      onBlur: onRunQuery,
      onChange: e => onChange(e.currentTarget.value),
      onKeyDown: onKeyDown
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricQueryEditor": () => (/* binding */ MetricQueryEditor),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery),
/* harmony export */   "defaultState": () => (/* binding */ defaultState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const defaultState = {
  labels: {}
};
const defaultQuery = dataSource => ({
  editorMode: _types__WEBPACK_IMPORTED_MODULE_3__.EditorMode.Visual,
  projectName: dataSource.getDefaultProject(),
  metricType: '',
  metricKind: _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE,
  valueType: '',
  crossSeriesReducer: 'REDUCE_MEAN',
  alignmentPeriod: 'cloud-monitoring-auto',
  perSeriesAligner: _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN,
  groupBys: [],
  filters: [],
  aliasBy: '',
  query: '',
  preprocessor: _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.None
});

function Editor({
  refId,
  query,
  datasource,
  onChange: onQueryChange,
  onRunQuery,
  customMetaData,
  variableOptionGroup
}) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState);
  const {
    projectName,
    metricType,
    groupBys,
    editorMode,
    crossSeriesReducer
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (projectName && metricType) {
      datasource.getLabels(metricType, refId, projectName).then(labels => setState(prevState => Object.assign({}, prevState, {
        labels
      })));
    }
  }, [datasource, groupBys, metricType, projectName, refId, crossSeriesReducer]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(metricQuery => {
    onQueryChange(Object.assign({}, query, metricQuery));
    onRunQuery();
  }, [onQueryChange, onRunQuery, query]);
  const onMetricTypeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    valueType,
    metricKind,
    type
  }) => {
    const preprocessor = metricKind === _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE || valueType === _types__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.DISTRIBUTION ? _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.None : _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.Rate;
    const {
      perSeriesAligner
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAlignmentPickerData)(valueType, metricKind, state.perSeriesAligner, preprocessor);
    onChange(Object.assign({}, query, {
      perSeriesAligner,
      metricType: type,
      valueType,
      metricKind,
      preprocessor
    }));
  }, [onChange, query, state]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Project, {
      refId: refId,
      templateVariableOptions: variableOptionGroup.options,
      projectName: projectName,
      datasource: datasource,
      onChange: projectName => {
        onChange(Object.assign({}, query, {
          projectName
        }));
      }
    }), editorMode === _types__WEBPACK_IMPORTED_MODULE_3__.EditorMode.Visual && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.VisualMetricQueryEditor, {
      refId: refId,
      labels: state.labels,
      variableOptionGroup: variableOptionGroup,
      customMetaData: customMetaData,
      onMetricTypeChange: onMetricTypeChange,
      onChange: onChange,
      datasource: datasource,
      query: query
    }), editorMode === _types__WEBPACK_IMPORTED_MODULE_3__.EditorMode.MQL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MQLQueryEditor__WEBPACK_IMPORTED_MODULE_4__.MQLQueryEditor, {
      onChange: q => onQueryChange(Object.assign({}, query, {
        query: q
      })),
      onRunQuery: onRunQuery,
      query: query.query
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.AliasBy, {
      refId: refId,
      value: query.aliasBy,
      onChange: aliasBy => {
        onChange(Object.assign({}, query, {
          aliasBy
        }));
      }
    })]
  });
}

const MetricQueryEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Editor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Metrics.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Metrics": () => (/* binding */ Metrics)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function Metrics(props) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    metricDescriptors: [],
    metrics: [],
    services: [],
    service: '',
    metric: '',
    projectName: null
  });
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useTheme2)();
  const selectStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.getSelectStyles)(theme);
  const customStyle = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const {
    services,
    service,
    metrics,
    metricDescriptors
  } = state;
  const {
    metricType,
    templateVariableOptions,
    projectName,
    templateSrv,
    datasource,
    onChange,
    children
  } = props;
  const getSelectedMetricDescriptor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((metricDescriptors, metricType) => {
    return metricDescriptors.find(md => md.type === templateSrv.replace(metricType));
  }, [templateSrv]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const getMetricsList = metricDescriptors => {
      const selectedMetricDescriptor = getSelectedMetricDescriptor(metricDescriptors, metricType);

      if (!selectedMetricDescriptor) {
        return [];
      }

      const metricsByService = metricDescriptors.filter(m => m.service === selectedMetricDescriptor.service).map(m => ({
        service: m.service,
        value: m.type,
        label: m.displayName,
        component: function optionComponent() {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: customStyle,
              children: m.type
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: selectStyles.optionDescription,
              children: m.description
            })]
          });
        }
      }));
      return metricsByService;
    };

    const loadMetricDescriptors = async () => {
      if (projectName) {
        const metricDescriptors = await datasource.getMetricTypes(projectName);
        const services = getServicesList(metricDescriptors);
        const metrics = getMetricsList(metricDescriptors);
        const service = metrics.length > 0 ? metrics[0].service : '';
        const metricDescriptor = getSelectedMetricDescriptor(metricDescriptors, metricType);
        setState(prevState => Object.assign({}, prevState, {
          metricDescriptors,
          services,
          metrics,
          service: service,
          metricDescriptor
        }));
      }
    };

    loadMetricDescriptors();
  }, [datasource, getSelectedMetricDescriptor, metricType, projectName, customStyle, selectStyles.optionDescription]);

  const onServiceChange = ({
    value: service
  }) => {
    const metrics = metricDescriptors.filter(m => m.service === templateSrv.replace(service)).map(m => ({
      service: m.service,
      value: m.type,
      label: m.displayName,
      description: m.description
    }));

    if (metrics.length > 0 && !metrics.some(m => m.value === templateSrv.replace(metricType))) {
      onMetricTypeChange(metrics[0], {
        service,
        metrics
      });
    } else {
      setState(Object.assign({}, state, {
        service,
        metrics
      }));
    }
  };

  const onMetricTypeChange = ({
    value
  }, extra = {}) => {
    const metricDescriptor = getSelectedMetricDescriptor(state.metricDescriptors, value);
    setState(Object.assign({}, state, {
      metricDescriptor
    }, extra));
    onChange(Object.assign({}, metricDescriptor, {
      type: value
    }));
  };

  const getServicesList = metricDescriptors => {
    const services = metricDescriptors.map(m => ({
      value: m.service,
      label: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.startCase)(m.serviceShortName)
    }));
    return services.length > 0 ? (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqBy)(services, s => s.value) : [];
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorField, {
        labelWidth: _constants__WEBPACK_IMPORTED_MODULE_5__.LABEL_WIDTH,
        label: "Service",
        htmlFor: `${props.refId}-service`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
          menuShouldPortal: true,
          width: _constants__WEBPACK_IMPORTED_MODULE_5__.SELECT_WIDTH,
          onChange: onServiceChange,
          value: [...services, ...templateVariableOptions].find(s => s.value === service),
          options: [{
            label: 'Template Variables',
            options: templateVariableOptions
          }, ...services],
          placeholder: "Select Services",
          inputId: `${props.refId}-service`
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorField, {
        label: "Metric name",
        labelWidth: _constants__WEBPACK_IMPORTED_MODULE_5__.INNER_LABEL_WIDTH,
        htmlFor: `${props.refId}-select-metric`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
          menuShouldPortal: true,
          width: _constants__WEBPACK_IMPORTED_MODULE_5__.SELECT_WIDTH,
          onChange: onMetricTypeChange,
          value: [...metrics, ...templateVariableOptions].find(s => s.value === metricType),
          options: [{
            label: 'Template Variables',
            options: templateVariableOptions
          }, ...metrics],
          placeholder: "Select Metric",
          inputId: `${props.refId}-select-metric`
        })
      })]
    }), children(state.metricDescriptor)]
  });
}

const getStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  label: grafana-select-option-description;
  font-weight: normal;
  font-style: italic;
  color: ${theme.colors.text.secondary};
`;

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Preprocessor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preprocessor": () => (/* binding */ Preprocessor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const NONE_OPTION = {
  label: 'None',
  value: _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.None
};
const Preprocessor = ({
  query,
  metricDescriptor,
  onChange
}) => {
  var _query$preprocessor;

  const options = useOptions(metricDescriptor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow, {
    label: "Pre-processing",
    tooltip: "Preprocessing options are displayed when the selected metric has a metric kind of delta or cumulative. The specific options available are determined by the metic's value type. If you select 'Rate', data points are aligned and converted to a rate per time series. If you select 'Delta', data points are aligned by their delta (difference) per time series",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
      onChange: value => {
        const {
          valueType,
          metricKind,
          perSeriesAligner: psa
        } = query;
        const {
          perSeriesAligner
        } = (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAlignmentPickerData)(valueType, metricKind, psa, value);
        onChange(Object.assign({}, query, {
          preprocessor: value,
          perSeriesAligner
        }));
      },
      value: (_query$preprocessor = query.preprocessor) !== null && _query$preprocessor !== void 0 ? _query$preprocessor : _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.None,
      options: options
    })
  });
};

const useOptions = metricDescriptor => {
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!metricKind || metricKind === _types__WEBPACK_IMPORTED_MODULE_2__.MetricKind.GAUGE || valueType === _types__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.DISTRIBUTION) {
      return [NONE_OPTION];
    }

    const options = [NONE_OPTION, {
      label: 'Rate',
      value: _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.Rate,
      description: 'Data points are aligned and converted to a rate per time series'
    }];
    return metricKind === _types__WEBPACK_IMPORTED_MODULE_2__.MetricKind.CUMULATIVE ? [...options, {
      label: 'Delta',
      value: _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.Delta,
      description: 'Data points are aligned by their delta (difference) per time series'
    }] : options;
  }, [metricKind, valueType]);
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Project.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function Project({
  refId,
  projectName,
  datasource,
  onChange,
  templateVariableOptions
}) {
  const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    datasource.getProjects().then(projects => setProjects(projects));
  }, [datasource]);
  const projectsWithTemplateVariables = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [projects, {
    label: 'Template Variables',
    options: templateVariableOptions
  }, ...projects], [projects, templateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Project",
    htmlFor: `${refId}-project`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
      menuShouldPortal: true,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      formatCreateLabel: v => `Use project: ${v}`,
      onChange: ({
        value
      }) => onChange(value),
      options: projectsWithTemplateVariables,
      value: {
        value: projectName,
        label: projectName
      },
      placeholder: "Select Project",
      inputId: `${refId}-project`
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx");
/* harmony import */ var _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["hide", "refId", "datasource", "key", "queryType", "maxLines", "metric"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_3__.PureComponent {
  async UNSAFE_componentWillMount() {
    const {
      datasource,
      query
    } = this.props; // Unfortunately, migrations like this need to go UNSAFE_componentWillMount. As soon as there's
    // migration hook for this module.ts, we can do the migrations there instead.

    if (!this.props.query.hasOwnProperty('metricQuery')) {
      const _ref = this.props.query,
            metricQuery = _objectWithoutPropertiesLoose(_ref, _excluded);

      this.props.query.metricQuery = metricQuery;
    }

    if (!this.props.query.hasOwnProperty('queryType')) {
      this.props.query.queryType = _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.METRICS;
    }

    await datasource.ensureGCEDefaultProject();

    if (!query.metricQuery.projectName) {
      this.props.query.metricQuery.projectName = datasource.getDefaultProject();
    }
  }

  onQueryChange(prop, value) {
    this.props.onChange(Object.assign({}, this.props.query, {
      [prop]: value
    }));
    this.props.onRunQuery();
  }

  render() {
    var _this$props$data, _this$props$data2, _meta$custom;

    const {
      datasource,
      query,
      onRunQuery,
      onChange
    } = this.props;
    const metricQuery = Object.assign({}, (0,_MetricQueryEditor__WEBPACK_IMPORTED_MODULE_7__.defaultQuery)(datasource), query.metricQuery);
    const sloQuery = Object.assign({}, (0,_SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_8__.defaultQuery)(datasource), query.sloQuery);
    const queryType = query.queryType || _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.METRICS;
    const meta = (_this$props$data = this.props.data) !== null && _this$props$data !== void 0 && _this$props$data.series.length ? (_this$props$data2 = this.props.data) === null || _this$props$data2 === void 0 ? void 0 : _this$props$data2.series[0].meta : {};
    const customMetaData = (_meta$custom = meta === null || meta === void 0 ? void 0 : meta.custom) !== null && _meta$custom !== void 0 ? _meta$custom : {};
    const variableOptionGroup = {
      label: 'Template Variables',
      expanded: false,
      options: datasource.getVariables().map(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.QueryEditorRow, {
        label: "Query type",
        fillComponent: query.queryType !== _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.SLO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                  margin-left: auto;
                `,
          icon: "edit",
          onClick: () => this.onQueryChange('metricQuery', Object.assign({}, metricQuery, {
            editorMode: metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.MQL ? _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.Visual : _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.MQL
          })),
          children: metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.MQL ? 'Switch to builder' : 'Edit MQL'
        }),
        htmlFor: `${query.refId}-query-type`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
          menuShouldPortal: true,
          width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
          value: queryType,
          options: _constants__WEBPACK_IMPORTED_MODULE_4__.QUERY_TYPES,
          onChange: ({
            value
          }) => {
            onChange(Object.assign({}, query, {
              sloQuery,
              queryType: value
            }));
            onRunQuery();
          },
          inputId: `${query.refId}-query-type`
        })
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.METRICS && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.MetricQueryEditor, {
        refId: query.refId,
        variableOptionGroup: variableOptionGroup,
        customMetaData: customMetaData,
        onChange: metricQuery => {
          this.props.onChange(Object.assign({}, this.props.query, {
            metricQuery
          }));
        },
        onRunQuery: onRunQuery,
        datasource: datasource,
        query: metricQuery
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.SLO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.SLOQueryEditor, {
        refId: query.refId,
        variableOptionGroup: variableOptionGroup,
        customMetaData: customMetaData,
        onChange: query => this.onQueryChange('sloQuery', query),
        onRunQuery: onRunQuery,
        datasource: datasource,
        query: sloQuery
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLO.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLO": () => (/* binding */ SLO)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const SLO = ({
  refId,
  query,
  templateVariableOptions,
  onChange,
  datasource
}) => {
  const [slos, setSLOs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    projectName,
    serviceId
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!projectName || !serviceId) {
      return;
    }

    datasource.getServiceLevelObjectives(projectName, serviceId).then(sloIds => {
      setSLOs([{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ...sloIds]);
    });
  }, [datasource, projectName, serviceId, templateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "SLO",
    htmlFor: `${refId}-slo`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
      menuShouldPortal: true,
      inputId: `${refId}-slo`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      value: (query === null || query === void 0 ? void 0 : query.sloId) && {
        value: query === null || query === void 0 ? void 0 : query.sloId,
        label: (query === null || query === void 0 ? void 0 : query.sloName) || (query === null || query === void 0 ? void 0 : query.sloId)
      },
      placeholder: "Select SLO",
      options: slos,
      onChange: async ({
        value: sloId = '',
        label: sloName = ''
      }) => {
        const slos = await datasource.getServiceLevelObjectives(projectName, serviceId);
        const slo = slos.find(({
          value
        }) => value === datasource.templateSrv.replace(sloId));
        onChange(Object.assign({}, query, {
          sloId,
          sloName,
          goal: slo === null || slo === void 0 ? void 0 : slo.goal
        }));
      }
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLOQueryEditor": () => (/* binding */ SLOQueryEditor),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const defaultQuery = dataSource => ({
  projectName: dataSource.getDefaultProject(),
  alignmentPeriod: 'cloud-monitoring-auto',
  perSeriesAligner: _types__WEBPACK_IMPORTED_MODULE_4__.AlignmentTypes.ALIGN_MEAN,
  aliasBy: '',
  selectorName: 'select_slo_health',
  serviceId: '',
  serviceName: '',
  sloId: '',
  sloName: ''
});
function SLOQueryEditor({
  refId,
  query,
  datasource,
  onChange,
  variableOptionGroup,
  customMetaData
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Project, {
      refId: refId,
      templateVariableOptions: variableOptionGroup.options,
      projectName: query.projectName,
      datasource: datasource,
      onChange: projectName => onChange(Object.assign({}, query, {
        projectName
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Service, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.SLO, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Selector, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
      label: "Alignment period",
      htmlFor: `${refId}-alignment-period`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.AlignmentPeriod, {
        inputId: `${refId}-alignment-period`,
        templateVariableOptions: variableOptionGroup.options,
        query: Object.assign({}, query, {
          perSeriesAligner: query.selectorName === 'select_slo_health' ? 'ALIGN_MEAN' : 'ALIGN_NEXT_OLDER'
        }),
        onChange: onChange,
        selectWidth: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.AlignmentPeriodLabel, {
        datasource: datasource,
        customMetaData: customMetaData
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.AliasBy, {
      refId: refId,
      value: query.aliasBy,
      onChange: aliasBy => onChange(Object.assign({}, query, {
        aliasBy
      }))
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/Selector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selector": () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Selector = ({
  refId,
  query,
  templateVariableOptions,
  onChange,
  datasource
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Selector",
    htmlFor: `${refId}-slo-selector`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
      menuShouldPortal: true,
      inputId: `${refId}-slo-selector`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      value: [..._constants__WEBPACK_IMPORTED_MODULE_3__.SELECTORS, ...templateVariableOptions].find(s => {
        var _ref;

        return (_ref = s.value === (query === null || query === void 0 ? void 0 : query.selectorName)) !== null && _ref !== void 0 ? _ref : '';
      }),
      options: [{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ..._constants__WEBPACK_IMPORTED_MODULE_3__.SELECTORS],
      onChange: ({
        value: selectorName
      }) => onChange(Object.assign({}, query, {
        selectorName: selectorName !== null && selectorName !== void 0 ? selectorName : ''
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/Service.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Service": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Service = ({
  refId,
  query,
  templateVariableOptions,
  onChange,
  datasource
}) => {
  const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    projectName
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!projectName) {
      return;
    }

    datasource.getSLOServices(projectName).then(services => {
      setServices([{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ...services]);
    });
  }, [datasource, projectName, templateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Service",
    htmlFor: `${refId}-slo-service`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
      menuShouldPortal: true,
      inputId: `${refId}-slo-service`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      value: (query === null || query === void 0 ? void 0 : query.serviceId) && {
        value: query === null || query === void 0 ? void 0 : query.serviceId,
        label: (query === null || query === void 0 ? void 0 : query.serviceName) || (query === null || query === void 0 ? void 0 : query.serviceId)
      },
      placeholder: "Select service",
      options: services,
      onChange: ({
        value: serviceId = '',
        label: serviceName = ''
      }) => onChange(Object.assign({}, query, {
        serviceId,
        serviceName,
        sloId: ''
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLO": () => (/* reexport safe */ _SLO__WEBPACK_IMPORTED_MODULE_1__.SLO),
/* harmony export */   "Selector": () => (/* reexport safe */ _Selector__WEBPACK_IMPORTED_MODULE_2__.Selector),
/* harmony export */   "Service": () => (/* reexport safe */ _Service__WEBPACK_IMPORTED_MODULE_0__.Service)
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/Service.tsx");
/* harmony import */ var _SLO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLO.tsx");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/Selector.tsx");




/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudMonitoringVariableQueryEditor": () => (/* binding */ CloudMonitoringVariableQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

const _excluded = ["metricDescriptors", "labels", "metricTypes", "services"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class CloudMonitoringVariableQueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "queryTypes", [{
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.Projects,
      label: 'Projects'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.Services,
      label: 'Services'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.MetricTypes,
      label: 'Metric Types'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.LabelKeys,
      label: 'Label Keys'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.LabelValues,
      label: 'Label Values'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.ResourceTypes,
      label: 'Resource Types'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.Aggregations,
      label: 'Aggregations'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.Aligners,
      label: 'Aligners'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.AlignmentPeriods,
      label: 'Alignment Periods'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.Selectors,
      label: 'Selectors'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.SLOServices,
      label: 'SLO Services'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.SLO,
      label: 'Service Level Objectives (SLO)'
    }]);

    _defineProperty(this, "defaults", {
      selectedQueryType: this.queryTypes[0].value,
      metricDescriptors: [],
      selectedService: '',
      selectedMetricType: '',
      labels: [],
      labelKey: '',
      metricTypes: [],
      services: [],
      sloServices: [],
      selectedSLOService: '',
      projects: [],
      projectName: '',
      loading: true
    });

    _defineProperty(this, "onPropsChange", () => {
      const _this$state = this.state,
            queryModel = _objectWithoutPropertiesLoose(_this$state, _excluded);

      this.props.onChange(Object.assign({}, queryModel, {
        refId: 'CloudMonitoringVariableQueryEditor-VariableQuery'
      }));
    });

    this.state = Object.assign(this.defaults, {
      projectName: this.props.datasource.getDefaultProject()
    }, this.props.query);
  }

  async componentDidMount() {
    const projects = await this.props.datasource.getProjects();
    const metricDescriptors = await this.props.datasource.getMetricTypes(this.props.query.projectName || this.props.datasource.getDefaultProject());
    const services = (0,_functions__WEBPACK_IMPORTED_MODULE_3__.extractServicesFromMetricDescriptors)(metricDescriptors).map(m => ({
      value: m.service,
      label: m.serviceShortName
    }));
    let selectedService = '';

    if (services.some(s => s.value === (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedService))) {
      selectedService = this.state.selectedService;
    } else if (services && services.length > 0) {
      selectedService = services[0].value;
    }

    const {
      metricTypes,
      selectedMetricType
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getMetricTypes)(metricDescriptors, this.state.selectedMetricType, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedMetricType), (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(selectedService));
    const sloServices = await this.props.datasource.getSLOServices(this.state.projectName);
    const state = Object.assign({
      services,
      selectedService,
      metricTypes,
      selectedMetricType,
      metricDescriptors,
      projects
    }, await this.getLabels(selectedMetricType, this.state.projectName), {
      sloServices,
      loading: false
    });
    this.setState(state, () => this.onPropsChange());
  }

  async onQueryTypeChange(queryType) {
    const state = Object.assign({
      selectedQueryType: queryType
    }, await this.getLabels(this.state.selectedMetricType, this.state.projectName, queryType));
    this.setState(state);
  }

  async onProjectChange(projectName) {
    const metricDescriptors = await this.props.datasource.getMetricTypes(projectName);
    const labels = await this.getLabels(this.state.selectedMetricType, projectName);
    const {
      metricTypes,
      selectedMetricType
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getMetricTypes)(metricDescriptors, this.state.selectedMetricType, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedMetricType), (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedService));
    const sloServices = await this.props.datasource.getSLOServices(projectName);
    this.setState(Object.assign({}, labels, {
      metricTypes,
      selectedMetricType,
      metricDescriptors,
      projectName,
      sloServices
    }), () => this.onPropsChange());
  }

  async onServiceChange(service) {
    const {
      metricTypes,
      selectedMetricType
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getMetricTypes)(this.state.metricDescriptors, this.state.selectedMetricType, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedMetricType), (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(service));
    const state = Object.assign({
      selectedService: service,
      metricTypes,
      selectedMetricType
    }, await this.getLabels(selectedMetricType, this.state.projectName));
    this.setState(state, () => this.onPropsChange());
  }

  async onMetricTypeChange(metricType) {
    const state = Object.assign({
      selectedMetricType: metricType
    }, await this.getLabels(metricType, this.state.projectName));
    this.setState(state, () => this.onPropsChange());
  }

  onLabelKeyChange(labelKey) {
    this.setState({
      labelKey
    }, () => this.onPropsChange());
  }

  componentDidUpdate(prevProps, prevState) {
    const selecQueryTypeChanged = prevState.selectedQueryType !== this.state.selectedQueryType;
    const selectSLOServiceChanged = this.state.selectedSLOService !== prevState.selectedSLOService;

    if (selecQueryTypeChanged || selectSLOServiceChanged) {
      this.onPropsChange();
    }
  }

  async getLabels(selectedMetricType, projectName, selectedQueryType = this.state.selectedQueryType) {
    let result = {
      labels: this.state.labels,
      labelKey: this.state.labelKey
    };

    if (selectedMetricType && selectedQueryType === _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.LabelValues) {
      const labels = await (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getLabelKeys)(this.props.datasource, selectedMetricType, projectName);
      const labelKey = labels.some(l => l === (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.labelKey)) ? this.state.labelKey : labels[0];
      result = {
        labels,
        labelKey
      };
    }

    return result;
  }

  renderQueryTypeSwitch(queryType) {
    const variableOptionGroup = {
      label: 'Template Variables',
      expanded: false,
      options: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().getVariables().map(v => ({
        value: `$${v.name}`,
        label: `$${v.name}`
      }))
    };

    switch (queryType) {
      case _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.MetricTypes:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          })]
        });

      case _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.LabelKeys:
      case _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.LabelValues:
      case _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.ResourceTypes:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            value: this.state.selectedMetricType,
            options: [variableOptionGroup, ...this.state.metricTypes.map(({
              value,
              name
            }) => ({
              value,
              label: name
            }))],
            onChange: value => this.onMetricTypeChange(value),
            label: "Metric Type"
          }), queryType === _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.LabelValues && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            value: this.state.labelKey,
            options: [variableOptionGroup, ...this.state.labels.map(l => ({
              value: l,
              label: l
            }))],
            onChange: value => this.onLabelKeyChange(value),
            label: "Label Key"
          })]
        });

      case _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.Aligners:
      case _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.Aggregations:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            value: this.state.selectedMetricType,
            options: [variableOptionGroup, ...this.state.metricTypes.map(({
              value,
              name
            }) => ({
              value,
              label: name
            }))],
            onChange: value => this.onMetricTypeChange(value),
            label: "Metric Type"
          })]
        });

      case _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.SLOServices:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          })
        });

      case _types__WEBPACK_IMPORTED_MODULE_4__.MetricFindQueryTypes.SLO:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
            value: this.state.selectedSLOService,
            options: [variableOptionGroup, ...this.state.sloServices],
            onChange: value => {
              this.setState(Object.assign({}, this.state, {
                selectedSLOService: value
              }));
            },
            label: "SLO Service"
          })]
        });

      default:
        return '';
    }
  }

  render() {
    if (this.state.loading) {
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form max-width-21",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "gf-form-label width-10 query-keyword",
          children: "Query Type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form-select-wrapper max-width-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
            className: "gf-form-input",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
              children: "Loading..."
            })
          })
        })]
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.VariableQueryField, {
        value: this.state.selectedQueryType,
        options: this.queryTypes,
        onChange: value => this.onQueryTypeChange(value),
        label: "Query Type"
      }), this.renderQueryTypeSwitch(this.state.selectedQueryType)]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/VisualMetricQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualMetricQueryEditor": () => (/* binding */ VisualMetricQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function Editor({
  refId,
  query,
  labels,
  datasource,
  onChange,
  onMetricTypeChange,
  customMetaData,
  variableOptionGroup
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Metrics, {
    refId: refId,
    templateSrv: datasource.templateSrv,
    projectName: query.projectName,
    metricType: query.metricType,
    templateVariableOptions: variableOptionGroup.options,
    datasource: datasource,
    onChange: onMetricTypeChange,
    children: metric => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.LabelFilter, {
        labels: labels,
        filters: query.filters,
        onChange: filters => onChange(Object.assign({}, query, {
          filters
        })),
        variableOptionGroup: variableOptionGroup
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Preprocessor, {
        metricDescriptor: metric,
        query: query,
        onChange: onChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.GroupBy, {
        refId: refId,
        labels: Object.keys(labels),
        query: query,
        onChange: onChange,
        variableOptionGroup: variableOptionGroup,
        metricDescriptor: metric
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Alignment, {
        refId: refId,
        datasource: datasource,
        templateVariableOptions: variableOptionGroup.options,
        query: query,
        customMetaData: customMetaData,
        onChange: onChange
      })]
    })
  });
}

const VisualMetricQueryEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Editor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aggregation": () => (/* reexport safe */ _Aggregation__WEBPACK_IMPORTED_MODULE_10__.Aggregation),
/* harmony export */   "AliasBy": () => (/* reexport safe */ _AliasBy__WEBPACK_IMPORTED_MODULE_9__.AliasBy),
/* harmony export */   "Alignment": () => (/* reexport safe */ _Alignment__WEBPACK_IMPORTED_MODULE_3__.Alignment),
/* harmony export */   "AlignmentFunction": () => (/* reexport safe */ _AlignmentFunction__WEBPACK_IMPORTED_MODULE_6__.AlignmentFunction),
/* harmony export */   "AlignmentPeriod": () => (/* reexport safe */ _AlignmentPeriod__WEBPACK_IMPORTED_MODULE_7__.AlignmentPeriod),
/* harmony export */   "AlignmentPeriodLabel": () => (/* reexport safe */ _AlignmentPeriodLabel__WEBPACK_IMPORTED_MODULE_8__.AlignmentPeriodLabel),
/* harmony export */   "AnnotationsHelp": () => (/* reexport safe */ _AnnotationsHelp__WEBPACK_IMPORTED_MODULE_5__.AnnotationsHelp),
/* harmony export */   "GroupBy": () => (/* reexport safe */ _GroupBy__WEBPACK_IMPORTED_MODULE_2__.GroupBy),
/* harmony export */   "LabelFilter": () => (/* reexport safe */ _LabelFilter__WEBPACK_IMPORTED_MODULE_4__.LabelFilter),
/* harmony export */   "MQLQueryEditor": () => (/* reexport safe */ _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_13__.MQLQueryEditor),
/* harmony export */   "MetricQueryEditor": () => (/* reexport safe */ _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_11__.MetricQueryEditor),
/* harmony export */   "Metrics": () => (/* reexport safe */ _Metrics__WEBPACK_IMPORTED_MODULE_1__.Metrics),
/* harmony export */   "Preprocessor": () => (/* reexport safe */ _Preprocessor__WEBPACK_IMPORTED_MODULE_16__.Preprocessor),
/* harmony export */   "Project": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.Project),
/* harmony export */   "QueryEditorField": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_14__.QueryEditorField),
/* harmony export */   "QueryEditorRow": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_14__.QueryEditorRow),
/* harmony export */   "SLOQueryEditor": () => (/* reexport safe */ _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_12__.SLOQueryEditor),
/* harmony export */   "VariableQueryField": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_14__.VariableQueryField),
/* harmony export */   "VisualMetricQueryEditor": () => (/* reexport safe */ _VisualMetricQueryEditor__WEBPACK_IMPORTED_MODULE_15__.VisualMetricQueryEditor)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Project.tsx");
/* harmony import */ var _Metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Metrics.tsx");
/* harmony import */ var _GroupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/GroupBy.tsx");
/* harmony import */ var _Alignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Alignment.tsx");
/* harmony import */ var _LabelFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/LabelFilter.tsx");
/* harmony import */ var _AnnotationsHelp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AnnotationsHelp.tsx");
/* harmony import */ var _AlignmentFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AlignmentFunction.tsx");
/* harmony import */ var _AlignmentPeriod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AlignmentPeriod.tsx");
/* harmony import */ var _AlignmentPeriodLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AlignmentPeriodLabel.tsx");
/* harmony import */ var _AliasBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AliasBy.tsx");
/* harmony import */ var _Aggregation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Aggregation.tsx");
/* harmony import */ var _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx");
/* harmony import */ var _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx");
/* harmony import */ var _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Fields.tsx");
/* harmony import */ var _VisualMetricQueryEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/VisualMetricQueryEditor.tsx");
/* harmony import */ var _Preprocessor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Preprocessor.tsx");


















/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGGREGATIONS": () => (/* binding */ AGGREGATIONS),
/* harmony export */   "ALIGNMENTS": () => (/* binding */ ALIGNMENTS),
/* harmony export */   "ALIGNMENT_PERIODS": () => (/* binding */ ALIGNMENT_PERIODS),
/* harmony export */   "AUTH_TYPES": () => (/* binding */ AUTH_TYPES),
/* harmony export */   "INNER_LABEL_WIDTH": () => (/* binding */ INNER_LABEL_WIDTH),
/* harmony export */   "INPUT_WIDTH": () => (/* binding */ INPUT_WIDTH),
/* harmony export */   "LABEL_WIDTH": () => (/* binding */ LABEL_WIDTH),
/* harmony export */   "QUERY_TYPES": () => (/* binding */ QUERY_TYPES),
/* harmony export */   "SELECTORS": () => (/* binding */ SELECTORS),
/* harmony export */   "SELECT_WIDTH": () => (/* binding */ SELECT_WIDTH),
/* harmony export */   "SYSTEM_LABELS": () => (/* binding */ SYSTEM_LABELS)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");

 // not super excited about using uneven numbers, but this makes it align perfectly with rows that has two fields

const INPUT_WIDTH = 71;
const LABEL_WIDTH = 19;
const INNER_LABEL_WIDTH = 14;
const SELECT_WIDTH = 28;
const AUTH_TYPES = [{
  value: 'Google JWT File',
  key: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthType.JWT
}, {
  value: 'GCE Default Service Account',
  key: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthType.GCE
}];
const ALIGNMENTS = [{
  text: 'delta',
  value: 'ALIGN_DELTA',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'rate',
  value: 'ALIGN_RATE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'interpolate',
  value: 'ALIGN_INTERPOLATE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE]
}, {
  text: 'next older',
  value: 'ALIGN_NEXT_OLDER',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.STRING, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.VALUE_TYPE_UNSPECIFIED, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE]
}, {
  text: 'min',
  value: 'ALIGN_MIN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'max',
  value: 'ALIGN_MAX',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'mean',
  value: 'ALIGN_MEAN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'count',
  value: 'ALIGN_COUNT',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'sum',
  value: 'ALIGN_SUM',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'stddev',
  value: 'ALIGN_STDDEV',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'count true',
  value: 'ALIGN_COUNT_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE]
}, {
  text: 'count false',
  value: 'ALIGN_COUNT_FALSE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE]
}, {
  text: 'fraction true',
  value: 'ALIGN_FRACTION_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE]
}, {
  text: 'percentile 99',
  value: 'ALIGN_PERCENTILE_99',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'percentile 95',
  value: 'ALIGN_PERCENTILE_95',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'percentile 50',
  value: 'ALIGN_PERCENTILE_50',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'percentile 05',
  value: 'ALIGN_PERCENTILE_05',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'percent change',
  value: 'ALIGN_PERCENT_CHANGE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}];
const AGGREGATIONS = [{
  text: 'none',
  value: 'REDUCE_NONE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.BOOL, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.STRING],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'mean',
  value: 'REDUCE_MEAN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE]
}, {
  text: 'min',
  value: 'REDUCE_MIN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'max',
  value: 'REDUCE_MAX',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'sum',
  value: 'REDUCE_SUM',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'std. dev.',
  value: 'REDUCE_STDDEV',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'count',
  value: 'REDUCE_COUNT',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.BOOL, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.STRING],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE]
}, {
  text: 'count true',
  value: 'REDUCE_COUNT_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: 'count false',
  value: 'REDUCE_COUNT_FALSE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA]
}, {
  text: '99th percentile',
  value: 'REDUCE_PERCENTILE_99',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE]
}, {
  text: '95th percentile',
  value: 'REDUCE_PERCENTILE_95',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE]
}, {
  text: '50th percentile',
  value: 'REDUCE_PERCENTILE_50',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE]
}, {
  text: '5th percentile',
  value: 'REDUCE_PERCENTILE_05',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_0__.MetricKind.CUMULATIVE]
}];
const ALIGNMENT_PERIODS = [{
  text: 'grafana auto',
  value: 'grafana-auto'
}, {
  text: 'stackdriver auto',
  value: 'stackdriver-auto',
  hidden: true
}, {
  text: 'cloud monitoring auto',
  value: 'cloud-monitoring-auto'
}, {
  text: '1m',
  value: '+60s'
}, {
  text: '2m',
  value: '+120s'
}, {
  text: '5m',
  value: '+300s'
}, {
  text: '10m',
  value: '+600s'
}, {
  text: '30m',
  value: '+1800s'
}, {
  text: '1h',
  value: '+3600s'
}, {
  text: '3h',
  value: '+7200s'
}, {
  text: '6h',
  value: '+21600s'
}, {
  text: '1d',
  value: '+86400s'
}, {
  text: '3d',
  value: '+259200s'
}, {
  text: '1w',
  value: '+604800s'
}];
const SYSTEM_LABELS = ['metadata.system_labels.cloud_account', 'metadata.system_labels.name', 'metadata.system_labels.region', 'metadata.system_labels.state', 'metadata.system_labels.instance_group', 'metadata.system_labels.node_name', 'metadata.system_labels.service_name', 'metadata.system_labels.top_level_controller_type', 'metadata.system_labels.top_level_controller_name', 'metadata.system_labels.container_image'];
const SELECTORS = [{
  label: 'SLI Value',
  value: 'select_slo_health'
}, {
  label: 'SLO Compliance',
  value: 'select_slo_compliance'
}, {
  label: 'SLO Error Budget Remaining',
  value: 'select_slo_budget_fraction'
}];
const QUERY_TYPES = [{
  label: 'Metrics',
  value: _types__WEBPACK_IMPORTED_MODULE_0__.QueryType.METRICS
}, {
  label: 'Service Level Objectives (SLO)',
  value: _types__WEBPACK_IMPORTED_MODULE_0__.QueryType.SLO
}];

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudMonitoringDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/variables.ts");
const _excluded = ["hide", "refId", "datasource", "key", "queryType", "maxLines", "metric", "intervalMs", "type"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class CloudMonitoringDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)(), timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_3__.getTimeSrv)()) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;

    _defineProperty(this, "authenticationType", void 0);

    _defineProperty(this, "intervalMs", void 0);

    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.authenticationType = instanceSettings.jsonData.authenticationType || 'jwt';
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_5__.CloudMonitoringVariableSupport(this);
    this.intervalMs = 0;
  }

  getVariables() {
    return this.templateSrv.getVariables().map(v => `$${v.name}`);
  }

  query(request) {
    request.targets = request.targets.map(t => Object.assign({}, this.migrateQuery(t), {
      intervalMs: request.intervalMs
    }));
    return super.query(request);
  }

  async annotationQuery(options) {
    await this.ensureGCEDefaultProject();
    const annotation = options.annotation;
    const queries = [{
      refId: 'annotationQuery',
      type: 'annotationQuery',
      datasource: this.getRef(),
      view: 'FULL',
      crossSeriesReducer: 'REDUCE_NONE',
      perSeriesAligner: 'ALIGN_NONE',
      metricType: this.templateSrv.replace(annotation.target.metricType, options.scopedVars || {}),
      title: this.templateSrv.replace(annotation.target.title, options.scopedVars || {}),
      text: this.templateSrv.replace(annotation.target.text, options.scopedVars || {}),
      projectName: this.templateSrv.replace(annotation.target.projectName ? annotation.target.projectName : this.getDefaultProject(), options.scopedVars || {}),
      filters: this.interpolateFilters(annotation.target.filters || [], options.scopedVars)
    }];
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: options.range.from.valueOf().toString(),
        to: options.range.to.valueOf().toString(),
        queries
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      data
    }) => {
      const dataQueryResponse = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryResponse)({
        data: data
      });
      const df = [];

      if (dataQueryResponse.data.length !== 0) {
        for (let i = 0; i < dataQueryResponse.data.length; i++) {
          for (let j = 0; j < dataQueryResponse.data[i].fields[0].values.length; j++) {
            df.push({
              annotation: annotation,
              time: Date.parse(dataQueryResponse.data[i].fields[0].values.get(j)),
              title: dataQueryResponse.data[i].fields[1].values.get(j),
              tags: [],
              text: dataQueryResponse.data[i].fields[3].values.get(j)
            });
          }
        }
      }

      return df;
    })));
  }

  applyTemplateVariables({
    metricQuery,
    refId,
    queryType,
    sloQuery
  }, scopedVars) {
    return {
      datasource: this.getRef(),
      refId,
      intervalMs: this.intervalMs,
      type: 'timeSeriesQuery',
      queryType,
      metricQuery: Object.assign({}, this.interpolateProps(metricQuery, scopedVars), {
        projectName: this.templateSrv.replace(metricQuery.projectName ? metricQuery.projectName : this.getDefaultProject(), scopedVars),
        filters: this.interpolateFilters(metricQuery.filters || [], scopedVars),
        groupBys: this.interpolateGroupBys(metricQuery.groupBys || [], scopedVars),
        view: metricQuery.view || 'FULL',
        editorMode: metricQuery.editorMode
      }),
      sloQuery: sloQuery && this.interpolateProps(sloQuery, scopedVars)
    };
  }

  async getLabels(metricType, refId, projectName, aggregation) {
    var _aggregation$crossSer;

    const options = {
      targets: [{
        refId,
        datasource: this.getRef(),
        queryType: _types__WEBPACK_IMPORTED_MODULE_4__.QueryType.METRICS,
        metricQuery: {
          projectName: this.templateSrv.replace(projectName),
          metricType: this.templateSrv.replace(metricType),
          groupBys: this.interpolateGroupBys((aggregation === null || aggregation === void 0 ? void 0 : aggregation.groupBys) || [], {}),
          crossSeriesReducer: (_aggregation$crossSer = aggregation === null || aggregation === void 0 ? void 0 : aggregation.crossSeriesReducer) !== null && _aggregation$crossSer !== void 0 ? _aggregation$crossSer : 'REDUCE_NONE',
          view: 'HEADERS'
        }
      }],
      range: this.timeSrv.timeRange()
    };
    const queries = options.targets;

    if (!queries.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        results: []
      }));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.ensureGCEDefaultProject()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(() => {
      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
          from: options.range.from.valueOf().toString(),
          to: options.range.to.valueOf().toString(),
          queries
        }
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      data
    }) => {
      const dataQueryResponse = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryResponse)({
        data: data
      });
      const labels = dataQueryResponse === null || dataQueryResponse === void 0 ? void 0 : dataQueryResponse.data.map(f => {
        var _f$meta, _f$meta$custom;

        return (_f$meta = f.meta) === null || _f$meta === void 0 ? void 0 : (_f$meta$custom = _f$meta.custom) === null || _f$meta$custom === void 0 ? void 0 : _f$meta$custom.labels;
      }).filter(p => !!p).reduce((acc, labels) => {
        for (let key in labels) {
          if (!acc[key]) {
            acc[key] = new Set();
          }

          if (labels[key]) {
            acc[key].add(labels[key]);
          }
        }

        return acc;
      }, {});
      return Object.fromEntries(Object.entries(labels).map(l => {
        l[1] = Array.from(l[1]);
        return l;
      }));
    })));
  }

  async getGCEDefaultProject() {
    return this.getResource(`gceDefaultProject`);
  }

  getDefaultProject() {
    const {
      defaultProject,
      authenticationType,
      gceDefaultProject
    } = this.instanceSettings.jsonData;

    if (authenticationType === 'gce') {
      return gceDefaultProject || '';
    }

    return defaultProject || '';
  }

  async ensureGCEDefaultProject() {
    const {
      authenticationType,
      gceDefaultProject
    } = this.instanceSettings.jsonData;

    if (authenticationType === 'gce' && !gceDefaultProject) {
      this.instanceSettings.jsonData.gceDefaultProject = await this.getGCEDefaultProject();
    }
  }

  async getMetricTypes(projectName) {
    if (!projectName) {
      return [];
    }

    return this.getResource(`metricDescriptors/v3/projects/${this.templateSrv.replace(projectName)}/metricDescriptors`);
  }

  async getSLOServices(projectName) {
    return this.getResource(`services/v3/projects/${this.templateSrv.replace(projectName)}/services?pageSize=1000`);
  }

  async getServiceLevelObjectives(projectName, serviceId) {
    if (!serviceId) {
      return Promise.resolve([]);
    }

    let {
      projectName: p,
      serviceId: s
    } = this.interpolateProps({
      projectName,
      serviceId
    });
    return this.getResource(`slo-services/v3/projects/${p}/services/${s}/serviceLevelObjectives`);
  }

  getProjects() {
    return this.getResource(`projects`);
  }

  migrateQuery(query) {
    if (!query.hasOwnProperty('metricQuery')) {
      const _ref = query,
            {
        hide,
        refId,
        intervalMs,
        type
      } = _ref,
            rest = _objectWithoutPropertiesLoose(_ref, _excluded);

      return {
        refId,
        intervalMs,
        type,
        hide,
        queryType: _types__WEBPACK_IMPORTED_MODULE_4__.QueryType.METRICS,
        metricQuery: Object.assign({}, rest, {
          view: rest.view || 'FULL'
        })
      };
    }

    return query;
  }

  interpolateProps(object, scopedVars = {}) {
    return Object.entries(object).reduce((acc, [key, value]) => {
      return Object.assign({}, acc, {
        [key]: value && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(value) ? this.templateSrv.replace(value, scopedVars) : value
      });
    }, {});
  }

  filterQuery(query) {
    if (query.hide) {
      return false;
    }

    if (query.queryType && query.queryType === _types__WEBPACK_IMPORTED_MODULE_4__.QueryType.SLO && query.sloQuery) {
      const {
        selectorName,
        serviceId,
        sloId,
        projectName
      } = query.sloQuery;
      return !!selectorName && !!serviceId && !!sloId && !!projectName;
    }

    if (query.queryType && query.queryType === _types__WEBPACK_IMPORTED_MODULE_4__.QueryType.METRICS && query.metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_4__.EditorMode.MQL) {
      return !!query.metricQuery.projectName && !!query.metricQuery.query;
    }

    const {
      metricType
    } = query.metricQuery;
    return !!metricType;
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    return queries.map(query => this.applyTemplateVariables(this.migrateQuery(query), scopedVars));
  }

  interpolateFilters(filters, scopedVars) {
    const completeFilter = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chunk)(filters, 4).map(([key, operator, value, condition]) => Object.assign({
      key,
      operator,
      value
    }, condition && {
      condition
    })).filter(item => item.value);
    const filterArray = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(completeFilter.map(({
      key,
      operator,
      value,
      condition
    }) => [this.templateSrv.replace(key, scopedVars || {}), operator, this.templateSrv.replace(value, scopedVars || {}, value => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && value.length ? `(${value.join('|')})` : value;
    }), ...(condition ? [condition] : [])]));
    return filterArray || [];
  }

  interpolateGroupBys(groupBys, scopedVars) {
    let interpolatedGroupBys = [];
    (groupBys || []).forEach(gb => {
      const interpolated = this.templateSrv.replace(gb, scopedVars || {}, 'csv').split(',');

      if (Array.isArray(interpolated)) {
        interpolatedGroupBys = interpolatedGroupBys.concat(interpolated);
      } else {
        interpolatedGroupBys.push(interpolated);
      }
    });
    return interpolatedGroupBys;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/functions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractServicesFromMetricDescriptors": () => (/* binding */ extractServicesFromMetricDescriptors),
/* harmony export */   "getAggregationOptionsByMetric": () => (/* binding */ getAggregationOptionsByMetric),
/* harmony export */   "getAlignmentOptionsByMetric": () => (/* binding */ getAlignmentOptionsByMetric),
/* harmony export */   "getAlignmentPickerData": () => (/* binding */ getAlignmentPickerData),
/* harmony export */   "getLabelKeys": () => (/* binding */ getLabelKeys),
/* harmony export */   "getMetricTypes": () => (/* binding */ getMetricTypes),
/* harmony export */   "getMetricTypesByService": () => (/* binding */ getMetricTypesByService),
/* harmony export */   "labelsToGroupedOptions": () => (/* binding */ labelsToGroupedOptions),
/* harmony export */   "stringArrayToFilters": () => (/* binding */ stringArrayToFilters)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");




const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)();
const extractServicesFromMetricDescriptors = metricDescriptors => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqBy)(metricDescriptors, 'service');
const getMetricTypesByService = (metricDescriptors, service) => metricDescriptors.filter(m => m.service === service);
const getMetricTypes = (metricDescriptors, metricType, interpolatedMetricType, selectedService) => {
  const metricTypes = getMetricTypesByService(metricDescriptors, selectedService).map(m => ({
    value: m.type,
    name: m.displayName
  }));
  const metricTypeExistInArray = metricTypes.some(m => m.value === interpolatedMetricType);
  const metricTypeByService = metricTypes.length ? metricTypes[0].value : '';
  const selectedMetricType = metricTypeExistInArray ? metricType : metricTypeByService;
  return {
    metricTypes,
    selectedMetricType
  };
};
const getAlignmentOptionsByMetric = (metricValueType, metricKind, preprocessor) => {
  if (preprocessor && preprocessor === _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.Rate) {
    metricKind = _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE;
  }

  return !metricValueType ? [] : _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENTS.filter(i => {
    return i.valueTypes.indexOf(metricValueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
  });
};
const getAggregationOptionsByMetric = (valueType, metricKind) => {
  return !metricKind ? [] : _constants__WEBPACK_IMPORTED_MODULE_2__.AGGREGATIONS.filter(i => {
    return i.valueTypes.indexOf(valueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
  });
};
const getLabelKeys = async (datasource, selectedMetricType, projectName) => {
  const refId = 'handleLabelKeysQuery';
  const labels = await datasource.getLabels(selectedMetricType, refId, projectName);
  return [...Object.keys(labels), ..._constants__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_LABELS];
};
const getAlignmentPickerData = (valueType = _types__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.DOUBLE, metricKind = _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE, perSeriesAligner = _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN, preprocessor) => {
  const alignOptions = getAlignmentOptionsByMetric(valueType, metricKind, preprocessor).map(option => Object.assign({}, option, {
    label: option.text
  }));

  if (!alignOptions.some(o => o.value === templateSrv.replace(perSeriesAligner))) {
    perSeriesAligner = alignOptions.length > 0 ? alignOptions[0].value : _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN;
  }

  return {
    alignOptions,
    perSeriesAligner
  };
};
const labelsToGroupedOptions = groupBys => {
  const groups = groupBys.reduce((acc, curr) => {
    const arr = curr.split('.').map(lodash__WEBPACK_IMPORTED_MODULE_1__.startCase);
    const group = (arr.length === 2 ? arr : (0,lodash__WEBPACK_IMPORTED_MODULE_1__.initial)(arr)).join(' ');
    const option = {
      value: curr,
      label: curr
    };

    if (acc[group]) {
      acc[group] = [...acc[group], option];
    } else {
      acc[group] = [option];
    }

    return acc;
  }, {});
  return Object.entries(groups).map(([label, options]) => ({
    label,
    options,
    expanded: true
  }), []);
};
const stringArrayToFilters = filterArray => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.chunk)(filterArray, 4).map(([key, operator, value, condition = 'AND']) => ({
  key,
  operator,
  value,
  condition
}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/datasource.ts");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx");
/* harmony import */ var _components_ConfigEditor_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/ConfigEditor/ConfigEditor.tsx");
/* harmony import */ var _components_CloudMonitoringCheatSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/CloudMonitoringCheatSheet.tsx");
/* harmony import */ var _annotations_query_ctrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/annotations_query_ctrl.ts");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx");







const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_1__["default"]).setQueryEditorHelp(_components_CloudMonitoringCheatSheet__WEBPACK_IMPORTED_MODULE_4__["default"]).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_2__.QueryEditor).setConfigEditor(_components_ConfigEditor_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setAnnotationQueryCtrl(_annotations_query_ctrl__WEBPACK_IMPORTED_MODULE_5__.CloudMonitoringAnnotationsQueryCtrl).setVariableQueryEditor(_components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_6__.CloudMonitoringVariableQueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentTypes": () => (/* binding */ AlignmentTypes),
/* harmony export */   "EditorMode": () => (/* binding */ EditorMode),
/* harmony export */   "MetricFindQueryTypes": () => (/* binding */ MetricFindQueryTypes),
/* harmony export */   "MetricKind": () => (/* binding */ MetricKind),
/* harmony export */   "PreprocessorType": () => (/* binding */ PreprocessorType),
/* harmony export */   "QueryType": () => (/* binding */ QueryType),
/* harmony export */   "ValueTypes": () => (/* binding */ ValueTypes),
/* harmony export */   "authTypes": () => (/* binding */ authTypes)
/* harmony export */ });
/* harmony import */ var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");

const authTypes = [{
  label: 'Google JWT File',
  value: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.JWT
}, {
  label: 'GCE Default Service Account',
  value: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.GCE
}];
let MetricFindQueryTypes;

(function (MetricFindQueryTypes) {
  MetricFindQueryTypes["Projects"] = "projects";
  MetricFindQueryTypes["Services"] = "services";
  MetricFindQueryTypes["DefaultProject"] = "defaultProject";
  MetricFindQueryTypes["MetricTypes"] = "metricTypes";
  MetricFindQueryTypes["LabelKeys"] = "labelKeys";
  MetricFindQueryTypes["LabelValues"] = "labelValues";
  MetricFindQueryTypes["ResourceTypes"] = "resourceTypes";
  MetricFindQueryTypes["Aggregations"] = "aggregations";
  MetricFindQueryTypes["Aligners"] = "aligners";
  MetricFindQueryTypes["AlignmentPeriods"] = "alignmentPeriods";
  MetricFindQueryTypes["Selectors"] = "selectors";
  MetricFindQueryTypes["SLOServices"] = "sloServices";
  MetricFindQueryTypes["SLO"] = "slo";
})(MetricFindQueryTypes || (MetricFindQueryTypes = {}));

let QueryType;

(function (QueryType) {
  QueryType["METRICS"] = "metrics";
  QueryType["SLO"] = "slo";
})(QueryType || (QueryType = {}));

let EditorMode;

(function (EditorMode) {
  EditorMode["Visual"] = "visual";
  EditorMode["MQL"] = "mql";
})(EditorMode || (EditorMode = {}));

let PreprocessorType;

(function (PreprocessorType) {
  PreprocessorType["None"] = "none";
  PreprocessorType["Rate"] = "rate";
  PreprocessorType["Delta"] = "delta";
})(PreprocessorType || (PreprocessorType = {}));

let MetricKind;

(function (MetricKind) {
  MetricKind["METRIC_KIND_UNSPECIFIED"] = "METRIC_KIND_UNSPECIFIED";
  MetricKind["GAUGE"] = "GAUGE";
  MetricKind["DELTA"] = "DELTA";
  MetricKind["CUMULATIVE"] = "CUMULATIVE";
})(MetricKind || (MetricKind = {}));

let ValueTypes;

(function (ValueTypes) {
  ValueTypes["VALUE_TYPE_UNSPECIFIED"] = "VALUE_TYPE_UNSPECIFIED";
  ValueTypes["BOOL"] = "BOOL";
  ValueTypes["INT64"] = "INT64";
  ValueTypes["DOUBLE"] = "DOUBLE";
  ValueTypes["STRING"] = "STRING";
  ValueTypes["DISTRIBUTION"] = "DISTRIBUTION";
  ValueTypes["MONEY"] = "MONEY";
})(ValueTypes || (ValueTypes = {}));

let AlignmentTypes;

(function (AlignmentTypes) {
  AlignmentTypes["ALIGN_DELTA"] = "ALIGN_DELTA";
  AlignmentTypes["ALIGN_RATE"] = "ALIGN_RATE";
  AlignmentTypes["ALIGN_INTERPOLATE"] = "ALIGN_INTERPOLATE";
  AlignmentTypes["ALIGN_NEXT_OLDER"] = "ALIGN_NEXT_OLDER";
  AlignmentTypes["ALIGN_MIN"] = "ALIGN_MIN";
  AlignmentTypes["ALIGN_MAX"] = "ALIGN_MAX";
  AlignmentTypes["ALIGN_MEAN"] = "ALIGN_MEAN";
  AlignmentTypes["ALIGN_COUNT"] = "ALIGN_COUNT";
  AlignmentTypes["ALIGN_SUM"] = "ALIGN_SUM";
  AlignmentTypes["ALIGN_STDDEV"] = "ALIGN_STDDEV";
  AlignmentTypes["ALIGN_COUNT_TRUE"] = "ALIGN_COUNT_TRUE";
  AlignmentTypes["ALIGN_COUNT_FALSE"] = "ALIGN_COUNT_FALSE";
  AlignmentTypes["ALIGN_FRACTION_TRUE"] = "ALIGN_FRACTION_TRUE";
  AlignmentTypes["ALIGN_PERCENTILE_99"] = "ALIGN_PERCENTILE_99";
  AlignmentTypes["ALIGN_PERCENTILE_95"] = "ALIGN_PERCENTILE_95";
  AlignmentTypes["ALIGN_PERCENTILE_50"] = "ALIGN_PERCENTILE_50";
  AlignmentTypes["ALIGN_PERCENTILE_05"] = "ALIGN_PERCENTILE_05";
  AlignmentTypes["ALIGN_PERCENT_CHANGE"] = "ALIGN_PERCENT_CHANGE";
})(AlignmentTypes || (AlignmentTypes = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudMonitoringVariableSupport": () => (/* binding */ CloudMonitoringVariableSupport)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _CloudMonitoringMetricFindQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/CloudMonitoringMetricFindQuery.ts");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CloudMonitoringVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.CustomVariableSupport {
  constructor(datasource) {
    super();
    this.datasource = datasource;

    _defineProperty(this, "metricFindQuery", void 0);

    _defineProperty(this, "editor", _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_2__.CloudMonitoringVariableQueryEditor);

    this.datasource = datasource;
    this.metricFindQuery = new _CloudMonitoringMetricFindQuery__WEBPACK_IMPORTED_MODULE_1__["default"](datasource);
    this.query = this.query.bind(this);
  }

  query(request) {
    const executeObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.metricFindQuery.execute(request.targets[0]));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.datasource.ensureGCEDefaultProject()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => executeObservable), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => ({
      data
    })));
  }

}

/***/ }),

/***/ "./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/dist/index.development.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({ value: true }));

var data = __webpack_require__("./packages/grafana-data/src/index.ts");
var ui = __webpack_require__("./packages/grafana-ui/src/index.ts");
var React = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

var TEST_IDS = {
    helpBox: 'Configuration help box',
    dropZone: 'Configuration drop zone',
    pasteArea: 'Configuration text area',
    pasteJwtButton: 'Paste JWT button',
    resetJwtButton: 'Reset JWT button',
    jwtForm: 'JWT form',
    authTypeButtonJWT: 'JWT button',
    authTypeButtonGCE: 'GCE button',
};

var configKeys = ['private_key', 'token_uri', 'client_email', 'project_id'];
var INVALID_JWT_TOKEN_ERROR = 'Invalid JWT token';
var JWTConfigEditor = function (_a) {
    var onChange = _a.onChange;
    var _b = __read(React.useState(), 2), error = _b[0], setError = _b[1];
    var _c = __read(React.useState(null), 2), isPasting = _c[0], setIsPasting = _c[1];
    var theme = ui.useTheme2();
    var onPasteClick = React.useCallback(function (e) {
        setError(null);
        setIsPasting(true);
    }, [setIsPasting]);
    var onUploadClick = React.useCallback(function (e) {
        setIsPasting(null);
        setError(null);
    }, [setIsPasting]);
    var readAndValidateJWT = React.useCallback(function (value) {
        if (value.trim() !== '') {
            var jwt = void 0;
            try {
                jwt = JSON.parse(value);
            }
            catch (e) {
                setError(INVALID_JWT_TOKEN_ERROR);
            }
            var validation = validateJWT(jwt);
            if (validation.isValid) {
                onChange({
                    privateKey: jwt.private_key,
                    tokenUri: jwt.token_uri,
                    clientEmail: jwt.client_email,
                    projectId: jwt.project_id,
                });
            }
            else {
                setError(validation.error);
            }
        }
    }, [setError, onChange]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ui.Field, { label: "JWT token", invalid: Boolean(error), description: isPasting ? 'Paste JWT token below' : 'Upload or paste Google JWT token', error: error },
            React__default["default"].createElement(React__default["default"].Fragment, null,
                isPasting !== true && (React__default["default"].createElement("div", { "data-testid": TEST_IDS.dropZone },
                    React__default["default"].createElement(ui.FileDropzone, { options: { multiple: false, accept: 'application/json' }, readAs: "readAsText", onLoad: function (result) {
                            readAndValidateJWT(result);
                            setIsPasting(false);
                        } },
                        React__default["default"].createElement("p", { style: { margin: 0, fontSize: "" + theme.typography.h4.fontSize, textAlign: 'center' } },
                            "Drop the Google JWT file here",
                            React__default["default"].createElement("br", null),
                            React__default["default"].createElement("br", null),
                            React__default["default"].createElement(ui.LinkButton, { fill: "outline" }, "Click to browse files"))))),
                isPasting && (
                // @ts-ignore
                React__default["default"].createElement(ui.TextArea, { "data-testid": TEST_IDS.pasteArea, autoFocus: true, invalid: Boolean(error), placeholder: "Paste Google JWT token here", onBlur: function (e) { return readAndValidateJWT(e.currentTarget.value); }, rows: 12 })))),
        !isPasting && (React__default["default"].createElement(ui.Field, null,
            React__default["default"].createElement(ui.Button, { "data-testid": TEST_IDS.pasteJwtButton, type: "button", fill: "outline", style: { color: "" + theme.colors.primary.text }, onClick: onPasteClick }, "Paste JWT Token"))),
        isPasting && error && (React__default["default"].createElement(ui.Field, null,
            React__default["default"].createElement(ui.Button, { type: "button", fill: "outline", style: { color: "" + theme.colors.primary.text }, onClick: onUploadClick }, "Upload JWT Token")))));
};
var validateJWT = function (json) {
    if (!lodash.isObject(json)) {
        return { isValid: false, error: 'Invalid JWT token' };
    }
    var missingKeys = configKeys.filter(function (key) { return !json[key]; });
    if (missingKeys.length > 0) {
        return { isValid: false, error: "Missing keys: " + missingKeys.join(', ') };
    }
    return { isValid: true };
};

var JWTForm = function (_a) {
    var options = _a.options, onReset = _a.onReset, onChange = _a.onChange;
    var onResetPress = function () { return onReset(null); };
    return (React__default["default"].createElement("div", { "data-testid": TEST_IDS.jwtForm },
        React__default["default"].createElement(ui.Field, { label: "Project ID" },
            React__default["default"].createElement(ui.Input, { id: "defaultProject", width: 60, value: options.defaultProject || '', onChange: onChange('defaultProject') })),
        React__default["default"].createElement(ui.Field, { label: "Client email" },
            React__default["default"].createElement(ui.Input, { width: 60, id: "clientEmail", value: options.clientEmail || '', onChange: onChange('clientEmail') })),
        React__default["default"].createElement(ui.Field, { label: "Token URI" },
            React__default["default"].createElement(ui.Input, { width: 60, id: "tokenUri", value: options.tokenUri || '', onChange: onChange('tokenUri') })),
        React__default["default"].createElement(ui.Field, { label: "Private key", disabled: true },
            React__default["default"].createElement(ui.Input, { width: 60, id: "privateKey", readOnly: true, placeholder: "Private key configured", addonAfter: React__default["default"].createElement(ui.Tooltip, { content: "Click to clear the uploaded JWT token and upload a new one" },
                    React__default["default"].createElement(ui.Button, { "data-testid": TEST_IDS.resetJwtButton, icon: "sync", size: "xs", onClick: onResetPress, fill: "outline" }, "Reset token")) }))));
};

exports.GoogleAuthType = void 0;
(function (GoogleAuthType) {
    GoogleAuthType["JWT"] = "jwt";
    GoogleAuthType["GCE"] = "gce";
})(exports.GoogleAuthType || (exports.GoogleAuthType = {}));

var GOOGLE_AUTH_TYPE_OPTIONS = [
    { label: 'Google JWT File', value: exports.GoogleAuthType.JWT, ariaLabel: TEST_IDS.authTypeButtonJWT },
    { label: 'GCE Default Service Account', value: exports.GoogleAuthType.GCE, ariaLabel: TEST_IDS.authTypeButtonGCE },
];

var ConnectionConfig = function (props) {
    var options = props.options, onOptionsChange = props.onOptionsChange;
    var jsonData = options.jsonData, secureJsonFields = options.secureJsonFields, secureJsonData = options.secureJsonData;
    if (!jsonData.authenticationType) {
        jsonData.authenticationType = exports.GoogleAuthType.JWT;
    }
    var isJWT = jsonData.authenticationType === exports.GoogleAuthType.JWT || jsonData.authenticationType === undefined;
    var onAuthTypeChange = function (authenticationType) {
        onOptionsChange(__assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { authenticationType: authenticationType }) }));
    };
    var hasJWTConfigured = Boolean(secureJsonFields &&
        secureJsonFields.privateKey &&
        jsonData.clientEmail &&
        jsonData.defaultProject &&
        jsonData.tokenUri);
    var onResetApiKey = function (jsonData) {
        var nextSecureJsonData = __assign({}, secureJsonData);
        var nextJsonData = !jsonData ? __assign({}, options.jsonData) : __assign(__assign({}, options.jsonData), jsonData);
        delete nextJsonData.clientEmail;
        delete nextJsonData.defaultProject;
        delete nextJsonData.tokenUri;
        delete nextSecureJsonData.privateKey;
        onOptionsChange(__assign(__assign({}, options), { secureJsonData: nextSecureJsonData, jsonData: nextJsonData }));
    };
    var onJWTFormChange = function (key) { return data.onUpdateDatasourceJsonDataOption(props, key); };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ui.FieldSet, { label: "Authentication" },
            React__default["default"].createElement(ui.Field, { label: "Authentication type" },
                React__default["default"].createElement(ui.RadioButtonGroup, { options: GOOGLE_AUTH_TYPE_OPTIONS, value: jsonData.authenticationType || exports.GoogleAuthType.JWT, onChange: onAuthTypeChange }))),
        isJWT && (React__default["default"].createElement(ui.FieldSet, { label: "JWT Key Details" },
            hasJWTConfigured ? (React__default["default"].createElement(JWTForm, { options: options.jsonData, onReset: onResetApiKey, onChange: onJWTFormChange })) : (React__default["default"].createElement(JWTConfigEditor, { onChange: function (jwt) {
                    onOptionsChange(__assign(__assign({}, options), { secureJsonFields: __assign(__assign({}, secureJsonFields), { privateKey: true }), secureJsonData: __assign(__assign({}, secureJsonData), { privateKey: jwt.privateKey }), jsonData: __assign(__assign({}, jsonData), { clientEmail: jwt.clientEmail, defaultProject: jwt.projectId, tokenUri: jwt.tokenUri }) }));
                } })),
            ' ')),
        React__default["default"].createElement("div", { className: "grafana-info-box", style: { marginTop: '16px' }, "data-testid": TEST_IDS.helpBox },
            React__default["default"].createElement("p", null,
                "Don\u2019t know how to get a service account key file or create a service account? Read more",
                ' ',
                React__default["default"].createElement("a", { className: "external-link", target: "_blank", rel: "noopener noreferrer", href: "https://grafana.com/docs/grafana/latest/datasources/google-cloud-monitoring/google-authentication/" }, "in the documentation."))),
        !isJWT && (React__default["default"].createElement(ui.Alert, { title: "", severity: "info" }, "Verify GCE default service account by clicking Save & Test"))));
};

exports.ConnectionConfig = ConnectionConfig;
//# sourceMappingURL=index.development.js.map


/***/ }),

/***/ "./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/dist/index.development.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxDQUFDLDZCQUE2QixzQkFBc0IsS0FBSzs7QUFFekQ7QUFDQSxNQUFNLG9HQUFvRztBQUMxRyxNQUFNLGdIQUFnSDtBQUN0SDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWMsOEJBQThCLHVCQUF1Qix3Q0FBd0MsR0FBRztBQUMxSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxrREFBa0QsMENBQTBDO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWMsNERBQTREO0FBQ3RIO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsK0RBQStELHlCQUF5QjtBQUN4RixnRUFBZ0UsOEJBQThCO0FBQzlGLCtFQUErRSxpSUFBaUk7QUFDaE4seUVBQXlFLDBCQUEwQjtBQUNuRyxtRkFBbUYsOEVBQThFLGlFQUFpRTtBQUNsTyx3REFBd0QsY0FBYyxzQ0FBc0MsdUJBQXVCLGtCQUFrQix1Q0FBdUMscUJBQXFCLDRCQUE0QixpQ0FBaUMsZUFBZSxxRkFBcUYsR0FBRztBQUNyWCxtQkFBbUI7QUFDbkI7QUFDQSx5REFBeUQsd0NBQXdDLG1CQUFtQixtQ0FBbUM7QUFDdko7QUFDQTtBQUNBO0FBQ0EsK0RBQStELHNMQUFzTDtBQUNyUCx1RUFBdUUsNkJBQTZCO0FBQ3BHOztBQUVBLHdCQUF3QjtBQUN4Qjs7Ozs7Ozs7O0FDNU1hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSx3S0FBdUQ7QUFDekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9DbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvYW5ub3RhdGlvbnNfcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0FnZ3JlZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0FsaWFzQnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvQWxpZ25tZW50LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0FsaWdubWVudEZ1bmN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0FsaWdubWVudFBlcmlvZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9BbGlnbm1lbnRQZXJpb2RMYWJlbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9Bbm5vdGF0aW9uc0hlbHAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvQ2xvdWRNb25pdG9yaW5nQ2hlYXRTaGVldC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9Db25maWdFZGl0b3IvQ29uZmlnRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0ZpZWxkcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9Hcm91cEJ5LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0xhYmVsRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL01RTFF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL01ldHJpY1F1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL01ldHJpY3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvUHJlcHJvY2Vzc29yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1Byb2plY3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvU0xPL1NMTy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9TTE8vU0xPUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvU0xPL1NlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1NMTy9TZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1NMTy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1ZhcmlhYmxlUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvVmlzdWFsTWV0cmljUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvZnVuY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy90eXBlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy92YXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BncmFmYW5hLWdvb2dsZS1zZGstbnBtLTAuMC4zLWM5MTY2MzQzM2YtOWViNWUwNDNlMC56aXAvbm9kZV9tb2R1bGVzL0BncmFmYW5hL2dvb2dsZS1zZGsvZGlzdC9pbmRleC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQGdyYWZhbmEtZ29vZ2xlLXNkay1ucG0tMC4wLjMtYzkxNjYzNDMzZi05ZWI1ZTA0M2UwLnppcC9ub2RlX21vZHVsZXMvQGdyYWZhbmEvZ29vZ2xlLXNkay9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBBTElHTk1FTlRfUEVSSU9EUywgU0VMRUNUT1JTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnksIE1ldHJpY0Rlc2NyaXB0b3IsIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLCBNZXRyaWNLaW5kLCBWYWx1ZVR5cGVzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIGV4dHJhY3RTZXJ2aWNlc0Zyb21NZXRyaWNEZXNjcmlwdG9ycyxcbiAgZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMsXG4gIGdldEFsaWdubWVudE9wdGlvbnNCeU1ldHJpYyxcbiAgZ2V0TGFiZWxLZXlzLFxuICBnZXRNZXRyaWNUeXBlc0J5U2VydmljZSxcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UpIHt9XG5cbiAgYXN5bmMgZXhlY3V0ZShxdWVyeTogQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXF1ZXJ5LnByb2plY3ROYW1lKSB7XG4gICAgICAgIHF1ZXJ5LnByb2plY3ROYW1lID0gdGhpcy5kYXRhc291cmNlLmdldERlZmF1bHRQcm9qZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAocXVlcnkuc2VsZWN0ZWRRdWVyeVR5cGUpIHtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5Qcm9qZWN0czpcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVQcm9qZWN0c1F1ZXJ5KCk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuU2VydmljZXM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VydmljZVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5NZXRyaWNUeXBlczpcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVNZXRyaWNUeXBlc1F1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbEtleXM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTGFiZWxLZXlzUXVlcnkocXVlcnkpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkxhYmVsVmFsdWVzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUxhYmVsVmFsdWVzUXVlcnkocXVlcnkpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlJlc291cmNlVHlwZXM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzb3VyY2VUeXBlUXVlcnkocXVlcnkpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkFsaWduZXJzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFsaWduZXJzUXVlcnkocXVlcnkpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkFsaWdubWVudFBlcmlvZHM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQWxpZ25tZW50UGVyaW9kUXVlcnkoKTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5BZ2dyZWdhdGlvbnM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQWdncmVnYXRpb25RdWVyeShxdWVyeSk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuU0xPU2VydmljZXM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU0xPU2VydmljZXNRdWVyeShxdWVyeSk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuU0xPOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNMT1F1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5TZWxlY3RvcnM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0b3JRdWVyeSgpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihgQ291bGQgbm90IHJ1biBDbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnkgJHtxdWVyeX1gLCBlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUHJvamVjdHNRdWVyeSgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IHRoaXMuZGF0YXNvdXJjZS5nZXRQcm9qZWN0cygpO1xuICAgIHJldHVybiAocHJvamVjdHMgYXMgU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pLm1hcCgoczogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0pID0+ICh7XG4gICAgICB0ZXh0OiBzLmxhYmVsLFxuICAgICAgdmFsdWU6IHMudmFsdWUsXG4gICAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVNlcnZpY2VRdWVyeSh7IHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBjb25zdCBtZXRyaWNEZXNjcmlwdG9ycyA9IGF3YWl0IHRoaXMuZGF0YXNvdXJjZS5nZXRNZXRyaWNUeXBlcyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc3Qgc2VydmljZXM6IE1ldHJpY0Rlc2NyaXB0b3JbXSA9IGV4dHJhY3RTZXJ2aWNlc0Zyb21NZXRyaWNEZXNjcmlwdG9ycyhtZXRyaWNEZXNjcmlwdG9ycyk7XG4gICAgcmV0dXJuIHNlcnZpY2VzLm1hcCgocykgPT4gKHtcbiAgICAgIHRleHQ6IHMuc2VydmljZVNob3J0TmFtZSxcbiAgICAgIHZhbHVlOiBzLnNlcnZpY2UsXG4gICAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZU1ldHJpY1R5cGVzUXVlcnkoeyBzZWxlY3RlZFNlcnZpY2UsIHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBpZiAoIXNlbGVjdGVkU2VydmljZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBtZXRyaWNEZXNjcmlwdG9ycyA9IGF3YWl0IHRoaXMuZGF0YXNvdXJjZS5nZXRNZXRyaWNUeXBlcyhwcm9qZWN0TmFtZSk7XG4gICAgcmV0dXJuIGdldE1ldHJpY1R5cGVzQnlTZXJ2aWNlKG1ldHJpY0Rlc2NyaXB0b3JzLCB0aGlzLmRhdGFzb3VyY2UudGVtcGxhdGVTcnYucmVwbGFjZShzZWxlY3RlZFNlcnZpY2UpKS5tYXAoXG4gICAgICAocykgPT4gKHtcbiAgICAgICAgdGV4dDogcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgdmFsdWU6IHMudHlwZSxcbiAgICAgICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUxhYmVsS2V5c1F1ZXJ5KHsgc2VsZWN0ZWRNZXRyaWNUeXBlLCBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgaWYgKCFzZWxlY3RlZE1ldHJpY1R5cGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbGFiZWxLZXlzID0gYXdhaXQgZ2V0TGFiZWxLZXlzKHRoaXMuZGF0YXNvdXJjZSwgc2VsZWN0ZWRNZXRyaWNUeXBlLCBwcm9qZWN0TmFtZSk7XG4gICAgcmV0dXJuIGxhYmVsS2V5cy5tYXAodGhpcy50b0ZpbmRRdWVyeVJlc3VsdCk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVMYWJlbFZhbHVlc1F1ZXJ5KHsgc2VsZWN0ZWRNZXRyaWNUeXBlLCBsYWJlbEtleSwgcHJvamVjdE5hbWUgfTogQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSkge1xuICAgIGlmICghc2VsZWN0ZWRNZXRyaWNUeXBlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHJlZklkID0gJ2hhbmRsZUxhYmVsVmFsdWVzUXVlcnknO1xuICAgIC8vIFJFRFVDRV9NRUFOIGlzIG5lZWRlZCBzbyB0aGUgZ3JvdXBCeSBpcyBub3QgaWdub3JlZFxuICAgIGNvbnN0IGxhYmVscyA9IGF3YWl0IHRoaXMuZGF0YXNvdXJjZS5nZXRMYWJlbHMoc2VsZWN0ZWRNZXRyaWNUeXBlLCByZWZJZCwgcHJvamVjdE5hbWUsIHtcbiAgICAgIGdyb3VwQnlzOiBbbGFiZWxLZXldLFxuICAgICAgY3Jvc3NTZXJpZXNSZWR1Y2VyOiAnUkVEVUNFX01FQU4nLFxuICAgIH0pO1xuICAgIGNvbnN0IGludGVycG9sYXRlZEtleSA9IHRoaXMuZGF0YXNvdXJjZS50ZW1wbGF0ZVNydi5yZXBsYWNlKGxhYmVsS2V5KTtcbiAgICBjb25zdCB2YWx1ZXMgPSBsYWJlbHMuaGFzT3duUHJvcGVydHkoaW50ZXJwb2xhdGVkS2V5KSA/IGxhYmVsc1tpbnRlcnBvbGF0ZWRLZXldIDogW107XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAodGhpcy50b0ZpbmRRdWVyeVJlc3VsdCk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVSZXNvdXJjZVR5cGVRdWVyeSh7IHNlbGVjdGVkTWV0cmljVHlwZSwgcHJvamVjdE5hbWUgfTogQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSkge1xuICAgIGlmICghc2VsZWN0ZWRNZXRyaWNUeXBlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHJlZklkID0gJ2hhbmRsZVJlc291cmNlVHlwZVF1ZXJ5UXVlcnlUeXBlJztcbiAgICBjb25zdCBsYWJlbHMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TGFiZWxzKHNlbGVjdGVkTWV0cmljVHlwZSwgcmVmSWQsIHByb2plY3ROYW1lKTtcbiAgICByZXR1cm4gbGFiZWxzWydyZXNvdXJjZS50eXBlJ10/Lm1hcCh0aGlzLnRvRmluZFF1ZXJ5UmVzdWx0KSA/PyBbXTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUFsaWduZXJzUXVlcnkoeyBzZWxlY3RlZE1ldHJpY1R5cGUsIHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBpZiAoIXNlbGVjdGVkTWV0cmljVHlwZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBtZXRyaWNEZXNjcmlwdG9ycyA9IGF3YWl0IHRoaXMuZGF0YXNvdXJjZS5nZXRNZXRyaWNUeXBlcyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgZGVzY3JpcHRvciA9IG1ldHJpY0Rlc2NyaXB0b3JzLmZpbmQoXG4gICAgICAobSkgPT4gbS50eXBlID09PSB0aGlzLmRhdGFzb3VyY2UudGVtcGxhdGVTcnYucmVwbGFjZShzZWxlY3RlZE1ldHJpY1R5cGUpXG4gICAgKTtcblxuICAgIGlmICghZGVzY3JpcHRvcikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRBbGlnbm1lbnRPcHRpb25zQnlNZXRyaWMoZGVzY3JpcHRvci52YWx1ZVR5cGUsIGRlc2NyaXB0b3IubWV0cmljS2luZCkubWFwKHRoaXMudG9GaW5kUXVlcnlSZXN1bHQpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlQWdncmVnYXRpb25RdWVyeSh7IHNlbGVjdGVkTWV0cmljVHlwZSwgcHJvamVjdE5hbWUgfTogQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSkge1xuICAgIGlmICghc2VsZWN0ZWRNZXRyaWNUeXBlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgbWV0cmljRGVzY3JpcHRvcnMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBtZXRyaWNEZXNjcmlwdG9ycy5maW5kKFxuICAgICAgKG0pID0+IG0udHlwZSA9PT0gdGhpcy5kYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2Uoc2VsZWN0ZWRNZXRyaWNUeXBlKVxuICAgICk7XG5cbiAgICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMoZGVzY3JpcHRvci52YWx1ZVR5cGUgYXMgVmFsdWVUeXBlcywgZGVzY3JpcHRvci5tZXRyaWNLaW5kIGFzIE1ldHJpY0tpbmQpLm1hcChcbiAgICAgIHRoaXMudG9GaW5kUXVlcnlSZXN1bHRcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlU0xPU2VydmljZXNRdWVyeSh7IHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IGF3YWl0IHRoaXMuZGF0YXNvdXJjZS5nZXRTTE9TZXJ2aWNlcyhwcm9qZWN0TmFtZSk7XG4gICAgcmV0dXJuIHNlcnZpY2VzLm1hcCh0aGlzLnRvRmluZFF1ZXJ5UmVzdWx0KTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVNMT1F1ZXJ5KHsgc2VsZWN0ZWRTTE9TZXJ2aWNlLCBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgY29uc3Qgc2xvcyA9IGF3YWl0IHRoaXMuZGF0YXNvdXJjZS5nZXRTZXJ2aWNlTGV2ZWxPYmplY3RpdmVzKHByb2plY3ROYW1lLCBzZWxlY3RlZFNMT1NlcnZpY2UpO1xuICAgIHJldHVybiBzbG9zLm1hcCh0aGlzLnRvRmluZFF1ZXJ5UmVzdWx0KTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVNlbGVjdG9yUXVlcnkoKSB7XG4gICAgcmV0dXJuIFNFTEVDVE9SUy5tYXAodGhpcy50b0ZpbmRRdWVyeVJlc3VsdCk7XG4gIH1cblxuICBoYW5kbGVBbGlnbm1lbnRQZXJpb2RRdWVyeSgpIHtcbiAgICByZXR1cm4gQUxJR05NRU5UX1BFUklPRFMubWFwKHRoaXMudG9GaW5kUXVlcnlSZXN1bHQpO1xuICB9XG5cbiAgdG9GaW5kUXVlcnlSZXN1bHQoeDogYW55KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHgpID8geyB0ZXh0OiB4LCBleHBhbmRhYmxlOiB0cnVlIH0gOiB7IC4uLngsIGV4cGFuZGFibGU6IHRydWUgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQW5ub3RhdGlvblRhcmdldCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgQ2xvdWRNb25pdG9yaW5nQW5ub3RhdGlvbnNRdWVyeUN0cmwge1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAncGFydGlhbHMvYW5ub3RhdGlvbnMuZWRpdG9yLmh0bWwnO1xuICBkZWNsYXJlIGFubm90YXRpb246IGFueTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55KSB7XG4gICAgdGhpcy5hbm5vdGF0aW9uID0gJHNjb3BlLmN0cmwuYW5ub3RhdGlvbiB8fCB7fTtcbiAgICB0aGlzLmFubm90YXRpb24udGFyZ2V0ID0gJHNjb3BlLmN0cmwuYW5ub3RhdGlvbi50YXJnZXQgfHwge307XG5cbiAgICB0aGlzLm9uUXVlcnlDaGFuZ2UgPSB0aGlzLm9uUXVlcnlDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uUXVlcnlDaGFuZ2UodGFyZ2V0OiBBbm5vdGF0aW9uVGFyZ2V0KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmFubm90YXRpb24udGFyZ2V0LCB0YXJnZXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JGaWVsZCB9IGZyb20gJy4nO1xuaW1wb3J0IHsgZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljS2luZCwgVmFsdWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAobWV0cmljRGVzY3JpcHRvcjogc3RyaW5nKSA9PiB2b2lkO1xuICBtZXRyaWNEZXNjcmlwdG9yPzogTWV0cmljRGVzY3JpcHRvcjtcbiAgY3Jvc3NTZXJpZXNSZWR1Y2VyOiBzdHJpbmc7XG4gIGdyb3VwQnlzOiBzdHJpbmdbXTtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pjtcbn1cblxuZXhwb3J0IGNvbnN0IEFnZ3JlZ2F0aW9uOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgYWdnT3B0aW9ucyA9IHVzZUFnZ3JlZ2F0aW9uT3B0aW9uc0J5TWV0cmljKHByb3BzKTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSB1c2VTZWxlY3RlZEZyb21PcHRpb25zKGFnZ09wdGlvbnMsIHByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUVkaXRvckZpZWxkXG4gICAgICBsYWJlbFdpZHRoPXsxOH1cbiAgICAgIGxhYmVsPVwiR3JvdXAgYnkgZnVuY3Rpb25cIlxuICAgICAgZGF0YS10ZXN0aWQ9XCJjbG91ZC1tb25pdG9yaW5nLWFnZ3JlZ2F0aW9uXCJcbiAgICAgIGh0bWxGb3I9e2Ake3Byb3BzLnJlZklkfS1ncm91cC1ieS1mdW5jdGlvbmB9XG4gICAgPlxuICAgICAgPFNlbGVjdFxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHByb3BzLm9uQ2hhbmdlKHZhbHVlISl9XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHByb3BzLnRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdBZ2dyZWdhdGlvbnMnLFxuICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgICBvcHRpb25zOiBhZ2dPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFJlZHVjZXJcIlxuICAgICAgICBpbnB1dElkPXtgJHtwcm9wcy5yZWZJZH0tZ3JvdXAtYnktZnVuY3Rpb25gfVxuICAgICAgLz5cbiAgICA8L1F1ZXJ5RWRpdG9yRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCB1c2VBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyA9ICh7IG1ldHJpY0Rlc2NyaXB0b3IgfTogUHJvcHMpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT4ge1xuICBjb25zdCB2YWx1ZVR5cGUgPSBtZXRyaWNEZXNjcmlwdG9yPy52YWx1ZVR5cGU7XG4gIGNvbnN0IG1ldHJpY0tpbmQgPSBtZXRyaWNEZXNjcmlwdG9yPy5tZXRyaWNLaW5kO1xuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXZhbHVlVHlwZSB8fCAhbWV0cmljS2luZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyh2YWx1ZVR5cGUgYXMgVmFsdWVUeXBlcywgbWV0cmljS2luZCBhcyBNZXRyaWNLaW5kKS5tYXAoKGEpID0+ICh7XG4gICAgICAuLi5hLFxuICAgICAgbGFiZWw6IGEudGV4dCxcbiAgICB9KSk7XG4gIH0sIFt2YWx1ZVR5cGUsIG1ldHJpY0tpbmRdKTtcbn07XG5cbmNvbnN0IHVzZVNlbGVjdGVkRnJvbU9wdGlvbnMgPSAoYWdnT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+LCBwcm9wczogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBbLi4uYWdnT3B0aW9ucywgLi4ucHJvcHMudGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdO1xuICAgIHJldHVybiBhbGxPcHRpb25zLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IHByb3BzLmNyb3NzU2VyaWVzUmVkdWNlcik7XG4gIH0sIFthZ2dPcHRpb25zLCBwcm9wcy5jcm9zc1Nlcmllc1JlZHVjZXIsIHByb3BzLnRlbXBsYXRlVmFyaWFibGVPcHRpb25zXSk7XG59O1xuIiwiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgSU5QVVRfV0lEVEggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChhbGlhczogYW55KSA9PiB2b2lkO1xuICB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFsaWFzQnk6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IHJlZklkLCB2YWx1ZSA9ICcnLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFthbGlhcywgc2V0QWxpYXNdID0gdXNlU3RhdGUodmFsdWUgPz8gJycpO1xuXG4gIGNvbnN0IHByb3BhZ2F0ZU9uQ2hhbmdlID0gZGVib3VuY2Uob25DaGFuZ2UsIDEwMDApO1xuXG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldEFsaWFzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBwcm9wYWdhdGVPbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlFZGl0b3JSb3cgbGFiZWw9XCJBbGlhcyBieVwiIGh0bWxGb3I9e2Ake3JlZklkfS1hbGlhcy1ieWB9PlxuICAgICAgPElucHV0IGlkPXtgJHtyZWZJZH0tYWxpYXMtYnlgfSB3aWR0aD17SU5QVVRfV0lEVEh9IHZhbHVlPXthbGlhc30gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsaWdubWVudEZ1bmN0aW9uLCBBbGlnbm1lbnRQZXJpb2QsIEFsaWdubWVudFBlcmlvZExhYmVsLCBRdWVyeUVkaXRvckZpZWxkLCBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ3VzdG9tTWV0YURhdGEsIE1ldHJpY1F1ZXJ5LCBTTE9RdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IE1ldHJpY1F1ZXJ5IHwgU0xPUXVlcnkpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBNZXRyaWNRdWVyeTtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgY3VzdG9tTWV0YURhdGE6IEN1c3RvbU1ldGFEYXRhO1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgQWxpZ25tZW50OiBGQzxQcm9wcz4gPSAoe1xuICByZWZJZCxcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gIG9uQ2hhbmdlLFxuICBxdWVyeSxcbiAgY3VzdG9tTWV0YURhdGEsXG4gIGRhdGFzb3VyY2UsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICBsYWJlbD1cIkFsaWdubWVudCBmdW5jdGlvblwiXG4gICAgICB0b29sdGlwPVwiVGhlIHByb2Nlc3Mgb2YgYWxpZ25tZW50IGNvbnNpc3RzIG9mIGNvbGxlY3RpbmcgYWxsIGRhdGEgcG9pbnRzIHJlY2VpdmVkIGluIGEgZml4ZWQgbGVuZ3RoIG9mIHRpbWUsIGFwcGx5aW5nIGEgZnVuY3Rpb24gdG8gY29tYmluZSB0aG9zZSBkYXRhIHBvaW50cywgYW5kIGFzc2lnbmluZyBhIHRpbWVzdGFtcCB0byB0aGUgcmVzdWx0LlwiXG4gICAgICBmaWxsQ29tcG9uZW50PXs8QWxpZ25tZW50UGVyaW9kTGFiZWwgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX0gY3VzdG9tTWV0YURhdGE9e2N1c3RvbU1ldGFEYXRhfSAvPn1cbiAgICAgIGh0bWxGb3I9e2Ake3JlZklkfS1hbGlnbm1lbnQtZnVuY3Rpb25gfVxuICAgID5cbiAgICAgIDxBbGlnbm1lbnRGdW5jdGlvblxuICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tYWxpZ25tZW50LWZ1bmN0aW9uYH1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3RlbXBsYXRlVmFyaWFibGVPcHRpb25zfVxuICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIC8+XG4gICAgICA8UXVlcnlFZGl0b3JGaWVsZCBsYWJlbD1cIkFsaWdubWVudCBwZXJpb2RcIiBodG1sRm9yPXtgJHtyZWZJZH0tYWxpZ25tZW50LXBlcmlvZGB9PlxuICAgICAgICA8QWxpZ25tZW50UGVyaW9kXG4gICAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LWFsaWdubWVudC1wZXJpb2RgfVxuICAgICAgICAgIHNlbGVjdFdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3RlbXBsYXRlVmFyaWFibGVPcHRpb25zfVxuICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L1F1ZXJ5RWRpdG9yRmllbGQ+XG4gICAgPC9RdWVyeUVkaXRvclJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEFsaWdubWVudFBpY2tlckRhdGEgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTWV0cmljUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBpbnB1dElkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IE1ldHJpY1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogTWV0cmljUXVlcnk7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG59XG5cbmV4cG9ydCBjb25zdCBBbGlnbm1lbnRGdW5jdGlvbjogRkM8UHJvcHM+ID0gKHsgaW5wdXRJZCwgcXVlcnksIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IHsgdmFsdWVUeXBlLCBtZXRyaWNLaW5kLCBwZXJTZXJpZXNBbGlnbmVyOiBwc2EsIHByZXByb2Nlc3NvciB9ID0gcXVlcnk7XG4gIGNvbnN0IHsgcGVyU2VyaWVzQWxpZ25lciwgYWxpZ25PcHRpb25zIH0gPSB1c2VNZW1vKFxuICAgICgpID0+IGdldEFsaWdubWVudFBpY2tlckRhdGEodmFsdWVUeXBlLCBtZXRyaWNLaW5kLCBwc2EsIHByZXByb2Nlc3NvciksXG4gICAgW3ZhbHVlVHlwZSwgbWV0cmljS2luZCwgcHNhLCBwcmVwcm9jZXNzb3JdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0XG4gICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IG9uQ2hhbmdlKHsgLi4ucXVlcnksIHBlclNlcmllc0FsaWduZXI6IHZhbHVlISB9KX1cbiAgICAgIHZhbHVlPXtbLi4uYWxpZ25PcHRpb25zLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gcGVyU2VyaWVzQWxpZ25lcil9XG4gICAgICBvcHRpb25zPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0FsaWdubWVudCBvcHRpb25zJyxcbiAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICBvcHRpb25zOiBhbGlnbk9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQWxpZ25tZW50XCJcbiAgICAgIGlucHV0SWQ9e2lucHV0SWR9XG4gICAgPjwvU2VsZWN0PlxuICApO1xufTtcbiIsImltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFMSUdOTUVOVF9QRVJJT0RTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1ldHJpY1F1ZXJ5LCBTTE9RdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wczxUUXVlcnk+IHtcbiAgaW5wdXRJZDogc3RyaW5nO1xuICBvbkNoYW5nZShxdWVyeTogVFF1ZXJ5KTogdm9pZDtcbiAgcXVlcnk6IFRRdWVyeTtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgc2VsZWN0V2lkdGg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBbGlnbm1lbnRQZXJpb2Q8VFF1ZXJ5IGV4dGVuZHMgTWV0cmljUXVlcnkgfCBTTE9RdWVyeT4oe1xuICBpbnB1dElkLFxuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgb25DaGFuZ2UsXG4gIHF1ZXJ5LFxuICBzZWxlY3RXaWR0aCxcbn06IFByb3BzPFRRdWVyeT4pIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIEFMSUdOTUVOVF9QRVJJT0RTLm1hcCgoYXApID0+ICh7XG4gICAgICAgIC4uLmFwLFxuICAgICAgICBsYWJlbDogYXAudGV4dCxcbiAgICAgIH0pKSxcbiAgICBbXVxuICApO1xuICBjb25zdCB2aXNpYmxlT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gb3B0aW9ucy5maWx0ZXIoKGFwKSA9PiAhYXAuaGlkZGVuKSwgW29wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RcbiAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgIHdpZHRoPXtzZWxlY3RXaWR0aH1cbiAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSB9KSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBhbGlnbm1lbnRQZXJpb2Q6IHZhbHVlISB9KX1cbiAgICAgIHZhbHVlPXtbLi4ub3B0aW9ucywgLi4udGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IHF1ZXJ5LmFsaWdubWVudFBlcmlvZCl9XG4gICAgICBvcHRpb25zPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0FnZ3JlZ2F0aW9ucycsXG4gICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgb3B0aW9uczogdmlzaWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQWxpZ25tZW50XCJcbiAgICAgIGlucHV0SWQ9e2lucHV0SWR9XG4gICAgPjwvU2VsZWN0PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmFuZ2VVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBTElHTk1FTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ3VzdG9tTWV0YURhdGEgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjdXN0b21NZXRhRGF0YTogQ3VzdG9tTWV0YURhdGE7XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBBbGlnbm1lbnRQZXJpb2RMYWJlbDogRkM8UHJvcHM+ID0gKHsgY3VzdG9tTWV0YURhdGEsIGRhdGFzb3VyY2UgfSkgPT4ge1xuICBjb25zdCB7IHBlclNlcmllc0FsaWduZXIsIGFsaWdubWVudFBlcmlvZCB9ID0gY3VzdG9tTWV0YURhdGE7XG4gIGNvbnN0IGZvcm1hdEFsaWdubWVudFRleHQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWFsaWdubWVudFBlcmlvZCB8fCAhcGVyU2VyaWVzQWxpZ25lcikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFsaWdubWVudCA9IEFMSUdOTUVOVFMuZmluZCgoYXApID0+IGFwLnZhbHVlID09PSBkYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2UocGVyU2VyaWVzQWxpZ25lcikpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBwYXJzZUludChhbGlnbm1lbnRQZXJpb2QgPz8gJycucmVwbGFjZSgvW14wLTldL2csICcnKSwgMTApO1xuICAgIGNvbnN0IGhtcyA9IHJhbmdlVXRpbC5zZWNvbmRzVG9IbXMoc2Vjb25kcyk7XG4gICAgcmV0dXJuIGAke2htc30gaW50ZXJ2YWwgKCR7YWxpZ25tZW50Py50ZXh0ID8/ICcnfSlgO1xuICB9LCBbZGF0YXNvdXJjZSwgcGVyU2VyaWVzQWxpZ25lciwgYWxpZ25tZW50UGVyaW9kXSk7XG5cbiAgcmV0dXJuIDxsYWJlbD57Zm9ybWF0QWxpZ25tZW50VGV4dH08L2xhYmVsPjtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBBbm5vdGF0aW9uc0hlbHA6IEZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBncmFmYW5hLWluZm8tYm94IGFsZXJ0LWluZm9cIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoNT5Bbm5vdGF0aW9uIFF1ZXJ5IEZvcm1hdDwvaDU+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFuIGFubm90YXRpb24gaXMgYW4gZXZlbnQgdGhhdCBpcyBvdmVybGFpZCBvbiB0b3Agb2YgZ3JhcGhzLiBBbm5vdGF0aW9uIHJlbmRlcmluZyBpcyBleHBlbnNpdmUgc28gaXQgaXNcbiAgICAgICAgICBpbXBvcnRhbnQgdG8gbGltaXQgdGhlIG51bWJlciBvZiByb3dzIHJldHVybmVkLnsnICd9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIFRpdGxlIGFuZCBUZXh0IGZpZWxkcyBzdXBwb3J0IHRlbXBsYXRpbmcgYW5kIGNhbiB1c2UgZGF0YSByZXR1cm5lZCBmcm9tIHRoZSBxdWVyeS4gRm9yIGV4YW1wbGUsIHRoZSBUaXRsZVxuICAgICAgICAgIGZpZWxkIGNvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyB0ZXh0OlxuICAgICAgICA8L3A+XG4gICAgICAgIDxjb2RlPlxuICAgICAgICAgIHtgJHsne3ttZXRyaWMudHlwZX19J31gfSBoYXMgdmFsdWU6IHtgJHsne3ttZXRyaWMudmFsdWV9fSd9YH1cbiAgICAgICAgPC9jb2RlPlxuICAgICAgICA8cD5cbiAgICAgICAgICBFeGFtcGxlIFJlc3VsdDogPGNvZGU+bW9uaXRvcmluZy5nb29nbGVhcGlzLmNvbS91cHRpbWVfY2hlY2svaHR0cF9zdGF0dXMgaGFzIHRoaXMgdmFsdWU6IDUwMjwvY29kZT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8bGFiZWw+UGF0dGVybnM6PC9sYWJlbD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy52YWx1ZX19J31gfTwvY29kZT4gPSB2YWx1ZSBvZiB0aGUgbWV0cmljL3BvaW50XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy50eXBlfX0nfWB9PC9jb2RlPiA9IG1ldHJpYyB0eXBlIGUuZy4gY29tcHV0ZS5nb29nbGVhcGlzLmNvbS9pbnN0YW5jZS9jcHUvdXNhZ2VfdGltZVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRyaWMubmFtZX19J31gfTwvY29kZT4gPSBuYW1lIHBhcnQgb2YgbWV0cmljIGUuZy4gaW5zdGFuY2UvY3B1L3VzYWdlX3RpbWVcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLnNlcnZpY2V9fSd9YH08L2NvZGU+ID0gc2VydmljZSBwYXJ0IG9mIG1ldHJpYyBlLmcuIGNvbXB1dGVcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLmxhYmVsLmxhYmVsX25hbWV9fSd9YH08L2NvZGU+ID0gTWV0cmljIGxhYmVsIG1ldGFkYXRhIGUuZy4gbWV0cmljLmxhYmVsLmluc3RhbmNlX25hbWVcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8Y29kZT57YCR7J3t7cmVzb3VyY2UubGFiZWwubGFiZWxfbmFtZX19J31gfTwvY29kZT4gPSBSZXNvdXJjZSBsYWJlbCBtZXRhZGF0YSBlLmcuIHJlc291cmNlLmxhYmVsLnpvbmVcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBRdWVyeUVkaXRvckhlbHBQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IENsb3VkTW9uaXRvcmluZ1F1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZE1vbml0b3JpbmdDaGVhdFNoZWV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxcbiAgUXVlcnlFZGl0b3JIZWxwUHJvcHM8Q2xvdWRNb25pdG9yaW5nUXVlcnk+LFxuICB7IHVzZXJFeGFtcGxlczogc3RyaW5nW10gfVxuPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkNsb3VkIE1vbml0b3JpbmcgYWxpYXMgcGF0dGVybnM8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRm9ybWF0IHRoZSBsZWdlbmQga2V5cyBhbnkgd2F5IHlvdSB3YW50IGJ5IHVzaW5nIGFsaWFzIHBhdHRlcm5zLiBGb3JtYXQgdGhlIGxlZ2VuZCBrZXlzIGFueSB3YXkgeW91IHdhbnQgYnlcbiAgICAgICAgICAgIHVzaW5nIGFsaWFzIHBhdHRlcm5zLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICBFeGFtcGxlOlxuICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRyaWMubmFtZX19IC0ge3ttZXRyaWMubGFiZWwuaW5zdGFuY2VfbmFtZX19J31gfTwvY29kZT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBSZXN1bHQ6ICZuYnNwOyZuYnNwOzxjb2RlPmNwdS91c2FnZV90aW1lIC0gc2VydmVyMS1ldXJvcGUtd2VzdC0xPC9jb2RlPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxsYWJlbD5QYXR0ZXJuczwvbGFiZWw+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLnR5cGV9fSd9YH08L2NvZGU+ID0gbWV0cmljIHR5cGUgZS5nLiBjb21wdXRlLmdvb2dsZWFwaXMuY29tL2luc3RhbmNlL2NwdS91c2FnZV90aW1lXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLm5hbWV9fSd9YH08L2NvZGU+ID0gbmFtZSBwYXJ0IG9mIG1ldHJpYyBlLmcuIGluc3RhbmNlL2NwdS91c2FnZV90aW1lXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLnNlcnZpY2V9fSd9YH08L2NvZGU+ID0gc2VydmljZSBwYXJ0IG9mIG1ldHJpYyBlLmcuIGNvbXB1dGVcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRyaWMubGFiZWwubGFiZWxfbmFtZX19J31gfTwvY29kZT4gPSBNZXRyaWMgbGFiZWwgbWV0YWRhdGEgZS5nLiBtZXRyaWMubGFiZWwuaW5zdGFuY2VfbmFtZVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e3Jlc291cmNlLmxhYmVsLmxhYmVsX25hbWV9fSd9YH08L2NvZGU+ID0gUmVzb3VyY2UgbGFiZWwgbWV0YWRhdGEgZS5nLiByZXNvdXJjZS5sYWJlbC56b25lXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0YWRhdGEuc3lzdGVtX2xhYmVscy5uYW1lfX0nfWB9PC9jb2RlPiA9IE1ldGEgZGF0YSBzeXN0ZW0gbGFiZWxzIGUuZy5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuc3lzdGVtX2xhYmVscy5uYW1lLiBGb3IgdGhpcyB0byB3b3JrLCB0aGUgbmVlZHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGdyb3VwIGJ5XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0YWRhdGEudXNlcl9sYWJlbHMubmFtZX19J31gfTwvY29kZT4gPSBNZXRhIGRhdGEgdXNlciBsYWJlbHMgZS5nLlxuICAgICAgICAgICAgICBtZXRhZGF0YS51c2VyX2xhYmVscy5uYW1lLiBGb3IgdGhpcyB0byB3b3JrLCB0aGUgbmVlZHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGdyb3VwIGJ5XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7YnVja2V0fX0nfWB9PC9jb2RlPiA9IGJ1Y2tldCBib3VuZGFyeSBmb3IgZGlzdHJpYnV0aW9uIG1ldHJpY3Mgd2hlbiB1c2luZyBhIGhlYXRtYXAgaW5cbiAgICAgICAgICAgICAgR3JhZmFuYVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e3Byb2plY3R9fSd9YH08L2NvZGU+ID0gVGhlIHByb2plY3QgbmFtZSB0aGF0IHdhcyBzcGVjaWZpZWQgaW4gdGhlIHF1ZXJ5IGVkaXRvclxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e3NlcnZpY2V9fSd9YH08L2NvZGU+ID0gVGhlIHNlcnZpY2UgaWQgdGhhdCB3YXMgc3BlY2lmaWVkIGluIHRoZSBTTE8gcXVlcnkgZWRpdG9yXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7c2xvfX0nfWB9PC9jb2RlPiA9IFRoZSBTTE8gaWQgdGhhdCB3YXMgc3BlY2lmaWVkIGluIHRoZSBTTE8gcXVlcnkgZWRpdG9yXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7c2VsZWN0b3J9fSd9YH08L2NvZGU+ID0gVGhlIFNlbGVjdG9yIGZ1bmN0aW9uIHRoYXQgd2FzIHNwZWNpZmllZCBpbiB0aGUgU0xPIHF1ZXJ5IGVkaXRvclxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nT3B0aW9ucywgQ2xvdWRNb25pdG9yaW5nU2VjdXJlSnNvbkRhdGEgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBDb25uZWN0aW9uQ29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvZ29vZ2xlLXNkayc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxDbG91ZE1vbml0b3JpbmdPcHRpb25zLCBDbG91ZE1vbml0b3JpbmdTZWN1cmVKc29uRGF0YT47XG5cbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPENvbm5lY3Rpb25Db25maWcgey4uLnRoaXMucHJvcHN9PjwvQ29ubmVjdGlvbkNvbmZpZz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgSW5saW5lRmllbGQsIElubGluZUxhYmVsLCBQb3BvdmVyQ29udGVudCwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJTk5FUl9MQUJFTF9XSURUSCwgTEFCRUxfV0lEVEggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbnRlcmZhY2UgVmFyaWFibGVRdWVyeUZpZWxkUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9wdGlvbnM6IFNlbGVjdGFibGVWYWx1ZVtdO1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBhbGxvd0N1c3RvbVZhbHVlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFZhcmlhYmxlUXVlcnlGaWVsZDogRkM8VmFyaWFibGVRdWVyeUZpZWxkUHJvcHM+ID0gKHtcbiAgbGFiZWwsXG4gIG9uQ2hhbmdlLFxuICB2YWx1ZSxcbiAgb3B0aW9ucyxcbiAgYWxsb3dDdXN0b21WYWx1ZSA9IGZhbHNlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxJbmxpbmVGaWVsZCBsYWJlbD17bGFiZWx9IGxhYmVsV2lkdGg9ezIwfT5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e2FsbG93Q3VzdG9tVmFsdWV9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IG9uQ2hhbmdlKHZhbHVlISl9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAvPlxuICAgIDwvSW5saW5lRmllbGQ+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdG9vbHRpcD86IFBvcG92ZXJDb250ZW50O1xuICBsYWJlbD86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBub0ZpbGxFbmQ/OiBib29sZWFuO1xuICBsYWJlbFdpZHRoPzogbnVtYmVyO1xuICBmaWxsQ29tcG9uZW50PzogUmVhY3QuUmVhY3ROb2RlO1xuICBodG1sRm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlFZGl0b3JSb3c6IEZDPFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBsYWJlbCxcbiAgdG9vbHRpcCxcbiAgZmlsbENvbXBvbmVudCxcbiAgbm9GaWxsRW5kID0gZmFsc2UsXG4gIGxhYmVsV2lkdGggPSBMQUJFTF9XSURUSCxcbiAgaHRtbEZvcixcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiIHsuLi5yZXN0fT5cbiAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD17bGFiZWxXaWR0aH0gdG9vbHRpcD17dG9vbHRpcH0gaHRtbEZvcj17aHRtbEZvcn0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxIb3Jpem9udGFsR3JvdXAgc3BhY2luZz1cInhzXCIgd2lkdGg9XCJhdXRvXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydnZi1mb3JtLS1ncm93J30+XG4gICAgICAgIHtub0ZpbGxFbmQgfHwgPGRpdiBjbGFzc05hbWU9eydnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLWdyb3cnfT57ZmlsbENvbXBvbmVudH08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUVkaXRvckZpZWxkOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgbGFiZWwsIHRvb2x0aXAsIGxhYmVsV2lkdGggPSBJTk5FUl9MQUJFTF9XSURUSCwgLi4ucmVzdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD17bGFiZWxXaWR0aH0gdG9vbHRpcD17dG9vbHRpcH0gey4uLnJlc3R9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICAgICl9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBNdWx0aVNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWdncmVnYXRpb24sIFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLic7XG5pbXBvcnQgeyBJTlBVVF9XSURUSCwgU1lTVEVNX0xBQkVMUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBsYWJlbHNUb0dyb3VwZWRPcHRpb25zIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IE1ldHJpY0Rlc2NyaXB0b3IsIE1ldHJpY1F1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgdmFyaWFibGVPcHRpb25Hcm91cDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz47XG4gIGxhYmVsczogc3RyaW5nW107XG4gIG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNRdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IE1ldHJpY1F1ZXJ5O1xufVxuXG5leHBvcnQgY29uc3QgR3JvdXBCeTogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtcbiAgcmVmSWQsXG4gIGxhYmVsczogZ3JvdXBCeXMgPSBbXSxcbiAgcXVlcnksXG4gIG9uQ2hhbmdlLFxuICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxuICBtZXRyaWNEZXNjcmlwdG9yLFxufSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbdmFyaWFibGVPcHRpb25Hcm91cCwgLi4ubGFiZWxzVG9Hcm91cGVkT3B0aW9ucyhbLi4uZ3JvdXBCeXMsIC4uLlNZU1RFTV9MQUJFTFNdKV0sXG4gICAgW2dyb3VwQnlzLCB2YXJpYWJsZU9wdGlvbkdyb3VwXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICBsYWJlbD1cIkdyb3VwIGJ5XCJcbiAgICAgIHRvb2x0aXA9XCJZb3UgY2FuIHJlZHVjZSB0aGUgYW1vdW50IG9mIGRhdGEgcmV0dXJuZWQgZm9yIGEgbWV0cmljIGJ5IGNvbWJpbmluZyBkaWZmZXJlbnQgdGltZSBzZXJpZXMuIFRvIGNvbWJpbmUgbXVsdGlwbGUgdGltZSBzZXJpZXMsIHlvdSBjYW4gc3BlY2lmeSBhIGdyb3VwaW5nIGFuZCBhIGZ1bmN0aW9uLiBHcm91cGluZyBpcyBkb25lIG9uIHRoZSBiYXNpcyBvZiBsYWJlbHMuIFRoZSBncm91cGluZyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNvbWJpbmUgdGhlIHRpbWUgc2VyaWVzIGluIHRoZSBncm91cCBpbnRvIGEgc2luZ2xlIHRpbWUgc2VyaWVzLlwiXG4gICAgICBodG1sRm9yPXtgJHtyZWZJZH0tZ3JvdXAtYnlgfVxuICAgID5cbiAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgIGlucHV0SWQ9e2Ake3JlZklkfS1ncm91cC1ieWB9XG4gICAgICAgIHdpZHRoPXtJTlBVVF9XSURUSH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgbGFiZWxcIlxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICB2YWx1ZT17cXVlcnkuZ3JvdXBCeXMgPz8gW119XG4gICAgICAgIG9uQ2hhbmdlPXsob3B0aW9ucykgPT4ge1xuICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGdyb3VwQnlzOiBvcHRpb25zLm1hcCgobykgPT4gby52YWx1ZSEpIH0pO1xuICAgICAgICB9fVxuICAgICAgPjwvTXVsdGlTZWxlY3Q+XG4gICAgICA8QWdncmVnYXRpb25cbiAgICAgICAgbWV0cmljRGVzY3JpcHRvcj17bWV0cmljRGVzY3JpcHRvcn1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgY3Jvc3NTZXJpZXNSZWR1Y2VyPXtxdWVyeS5jcm9zc1Nlcmllc1JlZHVjZXJ9XG4gICAgICAgIGdyb3VwQnlzPXtxdWVyeS5ncm91cEJ5cyA/PyBbXX1cbiAgICAgICAgb25DaGFuZ2U9eyhjcm9zc1Nlcmllc1JlZHVjZXIpID0+IG9uQ2hhbmdlKHsgLi4ucXVlcnksIGNyb3NzU2VyaWVzUmVkdWNlciB9KX1cbiAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgPjwvQWdncmVnYXRpb24+XG4gICAgPC9RdWVyeUVkaXRvclJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUsIHRvT3B0aW9uIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEhvcml6b250YWxHcm91cCwgU2VsZWN0LCBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ3VzdG9tQ29udHJvbFByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvU2VsZWN0L3R5cGVzJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcbmltcG9ydCB7IFNFTEVDVF9XSURUSCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBsYWJlbHNUb0dyb3VwZWRPcHRpb25zLCBzdHJpbmdBcnJheVRvRmlsdGVycyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBsYWJlbHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfTtcbiAgZmlsdGVyczogc3RyaW5nW107XG4gIG9uQ2hhbmdlOiAoZmlsdGVyczogc3RyaW5nW10pID0+IHZvaWQ7XG4gIHZhcmlhYmxlT3B0aW9uR3JvdXA6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+O1xufVxuXG5jb25zdCBvcGVyYXRvcnMgPSBbJz0nLCAnIT0nLCAnPX4nLCAnIT1+J107XG5cbmNvbnN0IEZpbHRlckJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIEN1c3RvbUNvbnRyb2xQcm9wczxzdHJpbmc+PihcbiAgKHsgdmFsdWUsIGlzT3BlbiwgaW52YWxpZCwgLi4ucmVzdCB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gPEJ1dHRvbiB7Li4ucmVzdH0gcmVmPXtyZWZ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpY29uPVwicGx1c1wiIGFyaWEtbGFiZWw9XCJBZGQgZmlsdGVyXCI+PC9CdXR0b24+O1xuICB9XG4pO1xuRmlsdGVyQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0ZpbHRlckJ1dHRvbic7XG5cbmNvbnN0IE9wZXJhdG9yQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MQnV0dG9uRWxlbWVudCwgQ3VzdG9tQ29udHJvbFByb3BzPHN0cmluZz4+KCh7IHZhbHVlLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gey4uLnJlc3R9IHJlZj17cmVmfSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJxdWVyeS1zZWdtZW50LW9wZXJhdG9yXCI+e3ZhbHVlPy5sYWJlbH08L3NwYW4+XG4gICAgPC9CdXR0b24+XG4gICk7XG59KTtcbk9wZXJhdG9yQnV0dG9uLmRpc3BsYXlOYW1lID0gJ09wZXJhdG9yQnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IExhYmVsRmlsdGVyOiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe1xuICBsYWJlbHMgPSB7fSxcbiAgZmlsdGVyczogZmlsdGVyQXJyYXksXG4gIG9uQ2hhbmdlLFxuICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxufSkgPT4ge1xuICBjb25zdCBmaWx0ZXJzID0gdXNlTWVtbygoKSA9PiBzdHJpbmdBcnJheVRvRmlsdGVycyhmaWx0ZXJBcnJheSksIFtmaWx0ZXJBcnJheV0pO1xuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbdmFyaWFibGVPcHRpb25Hcm91cCwgLi4ubGFiZWxzVG9Hcm91cGVkT3B0aW9ucyhPYmplY3Qua2V5cyhsYWJlbHMpKV0sXG4gICAgW2xhYmVscywgdmFyaWFibGVPcHRpb25Hcm91cF1cbiAgKTtcblxuICBjb25zdCBmaWx0ZXJzVG9TdHJpbmdBcnJheSA9IHVzZUNhbGxiYWNrKChmaWx0ZXJzOiBGaWx0ZXJbXSkgPT4ge1xuICAgIGNvbnN0IHN0ckFyciA9IGZsYXR0ZW4oZmlsdGVycy5tYXAoKHsga2V5LCBvcGVyYXRvciwgdmFsdWUsIGNvbmRpdGlvbiB9KSA9PiBba2V5LCBvcGVyYXRvciwgdmFsdWUsIGNvbmRpdGlvbiFdKSk7XG4gICAgcmV0dXJuIHN0ckFyci5zbGljZSgwLCBzdHJBcnIubGVuZ3RoIC0gMSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBBZGRGaWx0ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi5sYWJlbHNUb0dyb3VwZWRPcHRpb25zKE9iamVjdC5rZXlzKGxhYmVscykpXX1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlOiBrZXkgPSAnJyB9KSA9PlxuICAgICAgICAgIG9uQ2hhbmdlKGZpbHRlcnNUb1N0cmluZ0FycmF5KFsuLi5maWx0ZXJzLCB7IGtleSwgb3BlcmF0b3I6ICc9JywgY29uZGl0aW9uOiAnQU5EJywgdmFsdWU6ICcnIH1dKSlcbiAgICAgICAgfVxuICAgICAgICBtZW51UGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgcmVuZGVyQ29udHJvbD17RmlsdGVyQnV0dG9ufVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICBsYWJlbD1cIkZpbHRlclwiXG4gICAgICB0b29sdGlwPXtcbiAgICAgICAgJ1RvIHJlZHVjZSB0aGUgYW1vdW50IG9mIGRhdGEgY2hhcnRlZCwgYXBwbHkgYSBmaWx0ZXIuIEEgZmlsdGVyIGhhcyB0aHJlZSBjb21wb25lbnRzOiBhIGxhYmVsLCBhIGNvbXBhcmlzb24sIGFuZCBhIHZhbHVlLiBUaGUgY29tcGFyaXNvbiBjYW4gYmUgYW4gZXF1YWxpdHksIGluZXF1YWxpdHksIG9yIHJlZ3VsYXIgZXhwcmVzc2lvbi4nXG4gICAgICB9XG4gICAgICBub0ZpbGxFbmQ9e2ZpbHRlcnMubGVuZ3RoID4gMX1cbiAgICA+XG4gICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwieHNcIiB3aWR0aD1cImF1dG9cIj5cbiAgICAgICAge2ZpbHRlcnMubWFwKCh7IGtleSwgb3BlcmF0b3IsIHZhbHVlLCBjb25kaXRpb24gfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAvLyBBZGQgdGhlIGN1cnJlbnQga2V5IGFuZCB2YWx1ZSBhcyBvcHRpb25zIGlmIHRoZXkgYXJlIG1hbnVhbGx5IGVudGVyZWRcbiAgICAgICAgICBjb25zdCBrZXlQcmVzZW50ID0gb3B0aW9ucy5zb21lKChvcCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuc29tZSgob3BwKSA9PiBvcHAubGFiZWwgPT09IGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3AubGFiZWwgPT09IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIWtleVByZXNlbnQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7IGxhYmVsOiBrZXksIHZhbHVlOiBrZXkgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsdWVPcHRpb25zID0gbGFiZWxzLmhhc093blByb3BlcnR5KGtleSlcbiAgICAgICAgICAgID8gW3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLmxhYmVsc1trZXldLm1hcCh0b09wdGlvbildXG4gICAgICAgICAgICA6IFt2YXJpYWJsZU9wdGlvbkdyb3VwXTtcbiAgICAgICAgICBjb25zdCB2YWx1ZVByZXNlbnQgPSB2YWx1ZU9wdGlvbnMuc29tZSgob3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcC5sYWJlbCA9PT0gdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCF2YWx1ZVByZXNlbnQpIHtcbiAgICAgICAgICAgIHZhbHVlT3B0aW9ucy5wdXNoKHsgbGFiZWw6IHZhbHVlLCB2YWx1ZSB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhvcml6b250YWxHcm91cCBrZXk9e2luZGV4fSBzcGFjaW5nPVwieHNcIiB3aWR0aD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRmlsdGVyIGxhYmVsIGtleVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgICAgICAgICAgZm9ybWF0Q3JlYXRlTGFiZWw9eyh2KSA9PiBgVXNlIGxhYmVsIGtleTogJHt2fWB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZToga2V5ID0gJycgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnNUb1N0cmluZ0FycmF5KFxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gaW5kZXggPyB7IGtleSwgb3BlcmF0b3IsIGNvbmRpdGlvbiwgdmFsdWU6ICcnIH0gOiBmKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcGVyYXRvcn1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtvcGVyYXRvcnMubWFwKHRvT3B0aW9uKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWU6IG9wZXJhdG9yID0gJz0nIH0pID0+XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZShmaWx0ZXJzVG9TdHJpbmdBcnJheShmaWx0ZXJzLm1hcCgoZiwgaSkgPT4gKGkgPT09IGluZGV4ID8geyAuLi5mLCBvcGVyYXRvciB9IDogZikpKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWVudVBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgcmVuZGVyQ29udHJvbD17T3BlcmF0b3JCdXR0b259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkZpbHRlciBsYWJlbCB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbD17KHYpID0+IGBVc2UgbGFiZWwgdmFsdWU6ICR7dn1gfVxuICAgICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGQgZmlsdGVyIHZhbHVlXCJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt2YWx1ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlID0gJycgfSkgPT5cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGZpbHRlcnNUb1N0cmluZ0FycmF5KGZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gaW5kZXggPyB7IC4uLmYsIHZhbHVlIH0gOiBmKSkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoZmlsdGVyc1RvU3RyaW5nQXJyYXkoZmlsdGVycy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KSkpfVxuICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICAgIHtpbmRleCArIDEgPT09IGZpbHRlcnMubGVuZ3RoICYmIE9iamVjdC52YWx1ZXMoZmlsdGVycykuZXZlcnkoKHsgdmFsdWUgfSkgPT4gdmFsdWUpICYmIDxBZGRGaWx0ZXIgLz59XG4gICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgeyFmaWx0ZXJzLmxlbmd0aCAmJiA8QWRkRmlsdGVyIC8+fVxuICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6IChxdWVyeTogc3RyaW5nKSA9PiB2b2lkO1xuICBvblJ1blF1ZXJ5OiAoKSA9PiB2b2lkO1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTVFMUXVlcnlFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UsIG9uUnVuUXVlcnkgfTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSB7XG4gIGNvbnN0IG9uS2V5RG93biA9IChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiAoZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuY3RybEtleSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUZXh0QXJlYVxuICAgICAgICBuYW1lPVwiUXVlcnlcIlxuICAgICAgICBjbGFzc05hbWU9XCJzbGF0ZS1xdWVyeS1maWVsZFwiXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgcm93cz17MTB9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBDbG91ZCBNb25pdG9yaW5nIE1RTCBxdWVyeSAoUnVuIHdpdGggU2hpZnQrRW50ZXIpXCJcbiAgICAgICAgb25CbHVyPXtvblJ1blF1ZXJ5fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGlhc0J5LCBQcm9qZWN0LCBWaXN1YWxNZXRyaWNRdWVyeUVkaXRvciB9IGZyb20gJy4nO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7XG4gIEFsaWdubWVudFR5cGVzLFxuICBDdXN0b21NZXRhRGF0YSxcbiAgRWRpdG9yTW9kZSxcbiAgTWV0cmljRGVzY3JpcHRvcixcbiAgTWV0cmljS2luZCxcbiAgTWV0cmljUXVlcnksXG4gIFByZXByb2Nlc3NvclR5cGUsXG4gIFNMT1F1ZXJ5LFxuICBWYWx1ZVR5cGVzLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBNUUxRdWVyeUVkaXRvciB9IGZyb20gJy4vTVFMUXVlcnlFZGl0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgY3VzdG9tTWV0YURhdGE6IEN1c3RvbU1ldGFEYXRhO1xuICB2YXJpYWJsZU9wdGlvbkdyb3VwOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPjtcbiAgb25DaGFuZ2U6IChxdWVyeTogTWV0cmljUXVlcnkpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcnk6ICgpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBNZXRyaWNRdWVyeTtcbiAgZGF0YXNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgbGFiZWxzOiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZTogU3RhdGUgPSB7XG4gIGxhYmVsczoge30sXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFF1ZXJ5OiAoZGF0YVNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSkgPT4gTWV0cmljUXVlcnkgPSAoZGF0YVNvdXJjZSkgPT4gKHtcbiAgZWRpdG9yTW9kZTogRWRpdG9yTW9kZS5WaXN1YWwsXG4gIHByb2plY3ROYW1lOiBkYXRhU291cmNlLmdldERlZmF1bHRQcm9qZWN0KCksXG4gIG1ldHJpY1R5cGU6ICcnLFxuICBtZXRyaWNLaW5kOiBNZXRyaWNLaW5kLkdBVUdFLFxuICB2YWx1ZVR5cGU6ICcnLFxuICBjcm9zc1Nlcmllc1JlZHVjZXI6ICdSRURVQ0VfTUVBTicsXG4gIGFsaWdubWVudFBlcmlvZDogJ2Nsb3VkLW1vbml0b3JpbmctYXV0bycsXG4gIHBlclNlcmllc0FsaWduZXI6IEFsaWdubWVudFR5cGVzLkFMSUdOX01FQU4sXG4gIGdyb3VwQnlzOiBbXSxcbiAgZmlsdGVyczogW10sXG4gIGFsaWFzQnk6ICcnLFxuICBxdWVyeTogJycsXG4gIHByZXByb2Nlc3NvcjogUHJlcHJvY2Vzc29yVHlwZS5Ob25lLFxufSk7XG5cbmZ1bmN0aW9uIEVkaXRvcih7XG4gIHJlZklkLFxuICBxdWVyeSxcbiAgZGF0YXNvdXJjZSxcbiAgb25DaGFuZ2U6IG9uUXVlcnlDaGFuZ2UsXG4gIG9uUnVuUXVlcnksXG4gIGN1c3RvbU1ldGFEYXRhLFxuICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KGRlZmF1bHRTdGF0ZSk7XG4gIGNvbnN0IHsgcHJvamVjdE5hbWUsIG1ldHJpY1R5cGUsIGdyb3VwQnlzLCBlZGl0b3JNb2RlLCBjcm9zc1Nlcmllc1JlZHVjZXIgfSA9IHF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2plY3ROYW1lICYmIG1ldHJpY1R5cGUpIHtcbiAgICAgIGRhdGFzb3VyY2VcbiAgICAgICAgLmdldExhYmVscyhtZXRyaWNUeXBlLCByZWZJZCwgcHJvamVjdE5hbWUpXG4gICAgICAgIC50aGVuKChsYWJlbHMpID0+IHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgbGFiZWxzIH0pKSk7XG4gICAgfVxuICB9LCBbZGF0YXNvdXJjZSwgZ3JvdXBCeXMsIG1ldHJpY1R5cGUsIHByb2plY3ROYW1lLCByZWZJZCwgY3Jvc3NTZXJpZXNSZWR1Y2VyXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAobWV0cmljUXVlcnk6IE1ldHJpY1F1ZXJ5IHwgU0xPUXVlcnkpID0+IHtcbiAgICAgIG9uUXVlcnlDaGFuZ2UoeyAuLi5xdWVyeSwgLi4ubWV0cmljUXVlcnkgfSk7XG4gICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgfSxcbiAgICBbb25RdWVyeUNoYW5nZSwgb25SdW5RdWVyeSwgcXVlcnldXG4gICk7XG5cbiAgY29uc3Qgb25NZXRyaWNUeXBlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgdmFsdWVUeXBlLCBtZXRyaWNLaW5kLCB0eXBlIH06IE1ldHJpY0Rlc2NyaXB0b3IpID0+IHtcbiAgICAgIGNvbnN0IHByZXByb2Nlc3NvciA9XG4gICAgICAgIG1ldHJpY0tpbmQgPT09IE1ldHJpY0tpbmQuR0FVR0UgfHwgdmFsdWVUeXBlID09PSBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTlxuICAgICAgICAgID8gUHJlcHJvY2Vzc29yVHlwZS5Ob25lXG4gICAgICAgICAgOiBQcmVwcm9jZXNzb3JUeXBlLlJhdGU7XG4gICAgICBjb25zdCB7IHBlclNlcmllc0FsaWduZXIgfSA9IGdldEFsaWdubWVudFBpY2tlckRhdGEodmFsdWVUeXBlLCBtZXRyaWNLaW5kLCBzdGF0ZS5wZXJTZXJpZXNBbGlnbmVyLCBwcmVwcm9jZXNzb3IpO1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgcGVyU2VyaWVzQWxpZ25lcixcbiAgICAgICAgbWV0cmljVHlwZTogdHlwZSxcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBtZXRyaWNLaW5kLFxuICAgICAgICBwcmVwcm9jZXNzb3IsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtvbkNoYW5nZSwgcXVlcnksIHN0YXRlXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQcm9qZWN0XG4gICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgcHJvamVjdE5hbWU9e3Byb2plY3ROYW1lfVxuICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICBvbkNoYW5nZT17KHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcHJvamVjdE5hbWUgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICB7ZWRpdG9yTW9kZSA9PT0gRWRpdG9yTW9kZS5WaXN1YWwgJiYgKFxuICAgICAgICA8VmlzdWFsTWV0cmljUXVlcnlFZGl0b3JcbiAgICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgICAgbGFiZWxzPXtzdGF0ZS5sYWJlbHN9XG4gICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9XG4gICAgICAgICAgb25NZXRyaWNUeXBlQ2hhbmdlPXtvbk1ldHJpY1R5cGVDaGFuZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge2VkaXRvck1vZGUgPT09IEVkaXRvck1vZGUuTVFMICYmIChcbiAgICAgICAgPE1RTFF1ZXJ5RWRpdG9yXG4gICAgICAgICAgb25DaGFuZ2U9eyhxOiBzdHJpbmcpID0+IG9uUXVlcnlDaGFuZ2UoeyAuLi5xdWVyeSwgcXVlcnk6IHEgfSl9XG4gICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICBxdWVyeT17cXVlcnkucXVlcnl9XG4gICAgICAgID48L01RTFF1ZXJ5RWRpdG9yPlxuICAgICAgKX1cblxuICAgICAgPEFsaWFzQnlcbiAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgICB2YWx1ZT17cXVlcnkuYWxpYXNCeX1cbiAgICAgICAgb25DaGFuZ2U9eyhhbGlhc0J5KSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgYWxpYXNCeSB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBNZXRyaWNRdWVyeUVkaXRvciA9IFJlYWN0Lm1lbW8oRWRpdG9yKTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBnZXRTZWxlY3RTdHlsZXMsIFNlbGVjdCwgdXNlU3R5bGVzMiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgc3RhcnRDYXNlLCB1bmlxQnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvckZpZWxkLCBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgSU5ORVJfTEFCRUxfV0lEVEgsIExBQkVMX1dJRFRILCBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBNZXRyaWNEZXNjcmlwdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChtZXRyaWNEZXNjcmlwdG9yOiBNZXRyaWNEZXNjcmlwdG9yKSA9PiB2b2lkO1xuICB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnY7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG4gIHByb2plY3ROYW1lOiBzdHJpbmc7XG4gIG1ldHJpY1R5cGU6IHN0cmluZztcbiAgY2hpbGRyZW46IChtZXRyaWNEZXNjcmlwdG9yPzogTWV0cmljRGVzY3JpcHRvcikgPT4gSlNYLkVsZW1lbnQ7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW107XG4gIG1ldHJpY3M6IGFueVtdO1xuICBzZXJ2aWNlczogYW55W107XG4gIHNlcnZpY2U6IHN0cmluZztcbiAgbWV0cmljOiBzdHJpbmc7XG4gIG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yO1xuICBwcm9qZWN0TmFtZTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1ldHJpY3MocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KHtcbiAgICBtZXRyaWNEZXNjcmlwdG9yczogW10sXG4gICAgbWV0cmljczogW10sXG4gICAgc2VydmljZXM6IFtdLFxuICAgIHNlcnZpY2U6ICcnLFxuICAgIG1ldHJpYzogJycsXG4gICAgcHJvamVjdE5hbWU6IG51bGwsXG4gIH0pO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHNlbGVjdFN0eWxlcyA9IGdldFNlbGVjdFN0eWxlcyh0aGVtZSk7XG5cbiAgY29uc3QgY3VzdG9tU3R5bGUgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgeyBzZXJ2aWNlcywgc2VydmljZSwgbWV0cmljcywgbWV0cmljRGVzY3JpcHRvcnMgfSA9IHN0YXRlO1xuICBjb25zdCB7IG1ldHJpY1R5cGUsIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBwcm9qZWN0TmFtZSwgdGVtcGxhdGVTcnYsIGRhdGFzb3VyY2UsIG9uQ2hhbmdlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2V0U2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yID0gdXNlQ2FsbGJhY2soXG4gICAgKG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10sIG1ldHJpY1R5cGU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIG1ldHJpY0Rlc2NyaXB0b3JzLmZpbmQoKG1kKSA9PiBtZC50eXBlID09PSB0ZW1wbGF0ZVNydi5yZXBsYWNlKG1ldHJpY1R5cGUpKSE7XG4gICAgfSxcbiAgICBbdGVtcGxhdGVTcnZdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRNZXRyaWNzTGlzdCA9IChtZXRyaWNEZXNjcmlwdG9yczogTWV0cmljRGVzY3JpcHRvcltdKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IgPSBnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IobWV0cmljRGVzY3JpcHRvcnMsIG1ldHJpY1R5cGUpO1xuICAgICAgaWYgKCFzZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXRyaWNzQnlTZXJ2aWNlID0gbWV0cmljRGVzY3JpcHRvcnNcbiAgICAgICAgLmZpbHRlcigobSkgPT4gbS5zZXJ2aWNlID09PSBzZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3Iuc2VydmljZSlcbiAgICAgICAgLm1hcCgobSkgPT4gKHtcbiAgICAgICAgICBzZXJ2aWNlOiBtLnNlcnZpY2UsXG4gICAgICAgICAgdmFsdWU6IG0udHlwZSxcbiAgICAgICAgICBsYWJlbDogbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIG9wdGlvbkNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N1c3RvbVN0eWxlfT57bS50eXBlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZWxlY3RTdHlsZXMub3B0aW9uRGVzY3JpcHRpb259PnttLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgICAgcmV0dXJuIG1ldHJpY3NCeVNlcnZpY2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRNZXRyaWNEZXNjcmlwdG9ycyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBtZXRyaWNEZXNjcmlwdG9ycyA9IGF3YWl0IGRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IGdldFNlcnZpY2VzTGlzdChtZXRyaWNEZXNjcmlwdG9ycyk7XG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSBnZXRNZXRyaWNzTGlzdChtZXRyaWNEZXNjcmlwdG9ycyk7XG4gICAgICAgIGNvbnN0IHNlcnZpY2UgPSBtZXRyaWNzLmxlbmd0aCA+IDAgPyBtZXRyaWNzWzBdLnNlcnZpY2UgOiAnJztcbiAgICAgICAgY29uc3QgbWV0cmljRGVzY3JpcHRvciA9IGdldFNlbGVjdGVkTWV0cmljRGVzY3JpcHRvcihtZXRyaWNEZXNjcmlwdG9ycywgbWV0cmljVHlwZSk7XG4gICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIG1ldHJpY0Rlc2NyaXB0b3JzLFxuICAgICAgICAgIHNlcnZpY2VzLFxuICAgICAgICAgIG1ldHJpY3MsXG4gICAgICAgICAgc2VydmljZTogc2VydmljZSxcbiAgICAgICAgICBtZXRyaWNEZXNjcmlwdG9yLFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBsb2FkTWV0cmljRGVzY3JpcHRvcnMoKTtcbiAgfSwgW2RhdGFzb3VyY2UsIGdldFNlbGVjdGVkTWV0cmljRGVzY3JpcHRvciwgbWV0cmljVHlwZSwgcHJvamVjdE5hbWUsIGN1c3RvbVN0eWxlLCBzZWxlY3RTdHlsZXMub3B0aW9uRGVzY3JpcHRpb25dKTtcblxuICBjb25zdCBvblNlcnZpY2VDaGFuZ2UgPSAoeyB2YWx1ZTogc2VydmljZSB9OiBhbnkpID0+IHtcbiAgICBjb25zdCBtZXRyaWNzID0gbWV0cmljRGVzY3JpcHRvcnNcbiAgICAgIC5maWx0ZXIoKG06IE1ldHJpY0Rlc2NyaXB0b3IpID0+IG0uc2VydmljZSA9PT0gdGVtcGxhdGVTcnYucmVwbGFjZShzZXJ2aWNlKSlcbiAgICAgIC5tYXAoKG06IE1ldHJpY0Rlc2NyaXB0b3IpID0+ICh7XG4gICAgICAgIHNlcnZpY2U6IG0uc2VydmljZSxcbiAgICAgICAgdmFsdWU6IG0udHlwZSxcbiAgICAgICAgbGFiZWw6IG0uZGlzcGxheU5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBtLmRlc2NyaXB0aW9uLFxuICAgICAgfSkpO1xuXG4gICAgaWYgKG1ldHJpY3MubGVuZ3RoID4gMCAmJiAhbWV0cmljcy5zb21lKChtKSA9PiBtLnZhbHVlID09PSB0ZW1wbGF0ZVNydi5yZXBsYWNlKG1ldHJpY1R5cGUpKSkge1xuICAgICAgb25NZXRyaWNUeXBlQ2hhbmdlKG1ldHJpY3NbMF0sIHsgc2VydmljZSwgbWV0cmljcyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgc2VydmljZSwgbWV0cmljcyB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25NZXRyaWNUeXBlQ2hhbmdlID0gKHsgdmFsdWUgfTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4sIGV4dHJhOiBhbnkgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3IgPSBnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3Ioc3RhdGUubWV0cmljRGVzY3JpcHRvcnMsIHZhbHVlISk7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbWV0cmljRGVzY3JpcHRvciwgLi4uZXh0cmEgfSk7XG4gICAgb25DaGFuZ2UoeyAuLi5tZXRyaWNEZXNjcmlwdG9yLCB0eXBlOiB2YWx1ZSEgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2VydmljZXNMaXN0ID0gKG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10pID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IG1ldHJpY0Rlc2NyaXB0b3JzLm1hcCgobSkgPT4gKHtcbiAgICAgIHZhbHVlOiBtLnNlcnZpY2UsXG4gICAgICBsYWJlbDogc3RhcnRDYXNlKG0uc2VydmljZVNob3J0TmFtZSksXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHNlcnZpY2VzLmxlbmd0aCA+IDAgPyB1bmlxQnkoc2VydmljZXMsIChzKSA9PiBzLnZhbHVlKSA6IFtdO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxRdWVyeUVkaXRvclJvdz5cbiAgICAgICAgPFF1ZXJ5RWRpdG9yRmllbGQgbGFiZWxXaWR0aD17TEFCRUxfV0lEVEh9IGxhYmVsPVwiU2VydmljZVwiIGh0bWxGb3I9e2Ake3Byb3BzLnJlZklkfS1zZXJ2aWNlYH0+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlcnZpY2VDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17Wy4uLnNlcnZpY2VzLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gc2VydmljZSl9XG4gICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC4uLnNlcnZpY2VzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNlcnZpY2VzXCJcbiAgICAgICAgICAgIGlucHV0SWQ9e2Ake3Byb3BzLnJlZklkfS1zZXJ2aWNlYH1cbiAgICAgICAgICA+PC9TZWxlY3Q+XG4gICAgICAgIDwvUXVlcnlFZGl0b3JGaWVsZD5cbiAgICAgICAgPFF1ZXJ5RWRpdG9yRmllbGQgbGFiZWw9XCJNZXRyaWMgbmFtZVwiIGxhYmVsV2lkdGg9e0lOTkVSX0xBQkVMX1dJRFRIfSBodG1sRm9yPXtgJHtwcm9wcy5yZWZJZH0tc2VsZWN0LW1ldHJpY2B9PlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgIHdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25NZXRyaWNUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e1suLi5tZXRyaWNzLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gbWV0cmljVHlwZSl9XG4gICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC4uLm1ldHJpY3MsXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgTWV0cmljXCJcbiAgICAgICAgICAgIGlucHV0SWQ9e2Ake3Byb3BzLnJlZklkfS1zZWxlY3QtbWV0cmljYH1cbiAgICAgICAgICA+PC9TZWxlY3Q+XG4gICAgICAgIDwvUXVlcnlFZGl0b3JGaWVsZD5cbiAgICAgIDwvUXVlcnlFZGl0b3JSb3c+XG5cbiAgICAgIHtjaGlsZHJlbihzdGF0ZS5tZXRyaWNEZXNjcmlwdG9yKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiBjc3NgXG4gIGxhYmVsOiBncmFmYW5hLXNlbGVjdC1vcHRpb24tZGVzY3JpcHRpb247XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBNZXRyaWNEZXNjcmlwdG9yLCBNZXRyaWNLaW5kLCBNZXRyaWNRdWVyeSwgUHJlcHJvY2Vzc29yVHlwZSwgVmFsdWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGdldEFsaWdubWVudFBpY2tlckRhdGEgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuY29uc3QgTk9ORV9PUFRJT04gPSB7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiBQcmVwcm9jZXNzb3JUeXBlLk5vbmUgfTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNRdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IE1ldHJpY1F1ZXJ5O1xufVxuXG5leHBvcnQgY29uc3QgUHJlcHJvY2Vzc29yOiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyBxdWVyeSwgbWV0cmljRGVzY3JpcHRvciwgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0gdXNlT3B0aW9ucyhtZXRyaWNEZXNjcmlwdG9yKTtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlFZGl0b3JSb3dcbiAgICAgIGxhYmVsPVwiUHJlLXByb2Nlc3NpbmdcIlxuICAgICAgdG9vbHRpcD1cIlByZXByb2Nlc3Npbmcgb3B0aW9ucyBhcmUgZGlzcGxheWVkIHdoZW4gdGhlIHNlbGVjdGVkIG1ldHJpYyBoYXMgYSBtZXRyaWMga2luZCBvZiBkZWx0YSBvciBjdW11bGF0aXZlLiBUaGUgc3BlY2lmaWMgb3B0aW9ucyBhdmFpbGFibGUgYXJlIGRldGVybWluZWQgYnkgdGhlIG1ldGljJ3MgdmFsdWUgdHlwZS4gSWYgeW91IHNlbGVjdCAnUmF0ZScsIGRhdGEgcG9pbnRzIGFyZSBhbGlnbmVkIGFuZCBjb252ZXJ0ZWQgdG8gYSByYXRlIHBlciB0aW1lIHNlcmllcy4gSWYgeW91IHNlbGVjdCAnRGVsdGEnLCBkYXRhIHBvaW50cyBhcmUgYWxpZ25lZCBieSB0aGVpciBkZWx0YSAoZGlmZmVyZW5jZSkgcGVyIHRpbWUgc2VyaWVzXCJcbiAgICA+XG4gICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBQcmVwcm9jZXNzb3JUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZVR5cGUsIG1ldHJpY0tpbmQsIHBlclNlcmllc0FsaWduZXI6IHBzYSB9ID0gcXVlcnk7XG4gICAgICAgICAgY29uc3QgeyBwZXJTZXJpZXNBbGlnbmVyIH0gPSBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhKHZhbHVlVHlwZSwgbWV0cmljS2luZCwgcHNhLCB2YWx1ZSk7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcHJlcHJvY2Vzc29yOiB2YWx1ZSwgcGVyU2VyaWVzQWxpZ25lciB9KTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3F1ZXJ5LnByZXByb2Nlc3NvciA/PyBQcmVwcm9jZXNzb3JUeXBlLk5vbmV9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICA+PC9SYWRpb0J1dHRvbkdyb3VwPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59O1xuXG5jb25zdCB1c2VPcHRpb25zID0gKG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFByZXByb2Nlc3NvclR5cGU+PiA9PiB7XG4gIGNvbnN0IG1ldHJpY0tpbmQgPSBtZXRyaWNEZXNjcmlwdG9yPy5tZXRyaWNLaW5kO1xuICBjb25zdCB2YWx1ZVR5cGUgPSBtZXRyaWNEZXNjcmlwdG9yPy52YWx1ZVR5cGU7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghbWV0cmljS2luZCB8fCBtZXRyaWNLaW5kID09PSBNZXRyaWNLaW5kLkdBVUdFIHx8IHZhbHVlVHlwZSA9PT0gVmFsdWVUeXBlcy5ESVNUUklCVVRJT04pIHtcbiAgICAgIHJldHVybiBbTk9ORV9PUFRJT05dO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICBOT05FX09QVElPTixcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdSYXRlJyxcbiAgICAgICAgdmFsdWU6IFByZXByb2Nlc3NvclR5cGUuUmF0ZSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEYXRhIHBvaW50cyBhcmUgYWxpZ25lZCBhbmQgY29udmVydGVkIHRvIGEgcmF0ZSBwZXIgdGltZSBzZXJpZXMnLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldHJpY0tpbmQgPT09IE1ldHJpY0tpbmQuQ1VNVUxBVElWRVxuICAgICAgPyBbXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0RlbHRhJyxcbiAgICAgICAgICAgIHZhbHVlOiBQcmVwcm9jZXNzb3JUeXBlLkRlbHRhLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEYXRhIHBvaW50cyBhcmUgYWxpZ25lZCBieSB0aGVpciBkZWx0YSAoZGlmZmVyZW5jZSkgcGVyIHRpbWUgc2VyaWVzJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IG9wdGlvbnM7XG4gIH0sIFttZXRyaWNLaW5kLCB2YWx1ZVR5cGVdKTtcbn07XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgZGF0YXNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZTtcbiAgb25DaGFuZ2U6IChwcm9qZWN0TmFtZTogc3RyaW5nKSA9PiB2b2lkO1xuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdCh7IHJlZklkLCBwcm9qZWN0TmFtZSwgZGF0YXNvdXJjZSwgb25DaGFuZ2UsIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zIH06IFByb3BzKSB7XG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGU8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PihbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGF0YXNvdXJjZS5nZXRQcm9qZWN0cygpLnRoZW4oKHByb2plY3RzKSA9PiBzZXRQcm9qZWN0cyhwcm9qZWN0cykpO1xuICB9LCBbZGF0YXNvdXJjZV0pO1xuXG4gIGNvbnN0IHByb2plY3RzV2l0aFRlbXBsYXRlVmFyaWFibGVzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICBwcm9qZWN0cyxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgICBvcHRpb25zOiB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICAuLi5wcm9qZWN0cyxcbiAgICBdLFxuICAgIFtwcm9qZWN0cywgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlFZGl0b3JSb3cgbGFiZWw9XCJQcm9qZWN0XCIgaHRtbEZvcj17YCR7cmVmSWR9LXByb2plY3RgfT5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXsodikgPT4gYFVzZSBwcm9qZWN0OiAke3Z9YH1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IG9uQ2hhbmdlKHZhbHVlISl9XG4gICAgICAgIG9wdGlvbnM9e3Byb2plY3RzV2l0aFRlbXBsYXRlVmFyaWFibGVzfVxuICAgICAgICB2YWx1ZT17eyB2YWx1ZTogcHJvamVjdE5hbWUsIGxhYmVsOiBwcm9qZWN0TmFtZSB9fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBQcm9qZWN0XCJcbiAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LXByb2plY3RgfVxuICAgICAgLz5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUHJvcHMsIHRvT3B0aW9uIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRVUVSWV9UWVBFUywgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nUXVlcnksIEVkaXRvck1vZGUsIE1ldHJpY1F1ZXJ5LCBRdWVyeVR5cGUsIFNMT1F1ZXJ5LCBDbG91ZE1vbml0b3JpbmdPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgTWV0cmljUXVlcnlFZGl0b3IsIFF1ZXJ5RWRpdG9yUm93LCBTTE9RdWVyeUVkaXRvciB9IGZyb20gJy4vJztcbmltcG9ydCB7IGRlZmF1bHRRdWVyeSB9IGZyb20gJy4vTWV0cmljUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgZGVmYXVsdFF1ZXJ5IGFzIGRlZmF1bHRTTE9RdWVyeSB9IGZyb20gJy4vU0xPL1NMT1F1ZXJ5RWRpdG9yJztcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UsIENsb3VkTW9uaXRvcmluZ1F1ZXJ5LCBDbG91ZE1vbml0b3JpbmdPcHRpb25zPjtcblxuZXhwb3J0IGNsYXNzIFF1ZXJ5RWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBhc3luYyBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGF0YXNvdXJjZSwgcXVlcnkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBVbmZvcnR1bmF0ZWx5LCBtaWdyYXRpb25zIGxpa2UgdGhpcyBuZWVkIHRvIGdvIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQuIEFzIHNvb24gYXMgdGhlcmUnc1xuICAgIC8vIG1pZ3JhdGlvbiBob29rIGZvciB0aGlzIG1vZHVsZS50cywgd2UgY2FuIGRvIHRoZSBtaWdyYXRpb25zIHRoZXJlIGluc3RlYWQuXG4gICAgaWYgKCF0aGlzLnByb3BzLnF1ZXJ5Lmhhc093blByb3BlcnR5KCdtZXRyaWNRdWVyeScpKSB7XG4gICAgICBjb25zdCB7IGhpZGUsIHJlZklkLCBkYXRhc291cmNlLCBrZXksIHF1ZXJ5VHlwZSwgbWF4TGluZXMsIG1ldHJpYywgLi4ubWV0cmljUXVlcnkgfSA9IHRoaXMucHJvcHMucXVlcnkgYXMgYW55O1xuICAgICAgdGhpcy5wcm9wcy5xdWVyeS5tZXRyaWNRdWVyeSA9IG1ldHJpY1F1ZXJ5O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5xdWVyeS5oYXNPd25Qcm9wZXJ0eSgncXVlcnlUeXBlJykpIHtcbiAgICAgIHRoaXMucHJvcHMucXVlcnkucXVlcnlUeXBlID0gUXVlcnlUeXBlLk1FVFJJQ1M7XG4gICAgfVxuXG4gICAgYXdhaXQgZGF0YXNvdXJjZS5lbnN1cmVHQ0VEZWZhdWx0UHJvamVjdCgpO1xuICAgIGlmICghcXVlcnkubWV0cmljUXVlcnkucHJvamVjdE5hbWUpIHtcbiAgICAgIHRoaXMucHJvcHMucXVlcnkubWV0cmljUXVlcnkucHJvamVjdE5hbWUgPSBkYXRhc291cmNlLmdldERlZmF1bHRQcm9qZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgb25RdWVyeUNoYW5nZShwcm9wOiBzdHJpbmcsIHZhbHVlOiBNZXRyaWNRdWVyeSB8IFNMT1F1ZXJ5KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IC4uLnRoaXMucHJvcHMucXVlcnksIFtwcm9wXTogdmFsdWUgfSk7XG4gICAgdGhpcy5wcm9wcy5vblJ1blF1ZXJ5KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhc291cmNlLCBxdWVyeSwgb25SdW5RdWVyeSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWV0cmljUXVlcnkgPSB7IC4uLmRlZmF1bHRRdWVyeShkYXRhc291cmNlKSwgLi4ucXVlcnkubWV0cmljUXVlcnkgfTtcbiAgICBjb25zdCBzbG9RdWVyeSA9IHsgLi4uZGVmYXVsdFNMT1F1ZXJ5KGRhdGFzb3VyY2UpLCAuLi5xdWVyeS5zbG9RdWVyeSB9O1xuICAgIGNvbnN0IHF1ZXJ5VHlwZSA9IHF1ZXJ5LnF1ZXJ5VHlwZSB8fCBRdWVyeVR5cGUuTUVUUklDUztcbiAgICBjb25zdCBtZXRhID0gdGhpcy5wcm9wcy5kYXRhPy5zZXJpZXMubGVuZ3RoID8gdGhpcy5wcm9wcy5kYXRhPy5zZXJpZXNbMF0ubWV0YSA6IHt9O1xuICAgIGNvbnN0IGN1c3RvbU1ldGFEYXRhID0gbWV0YT8uY3VzdG9tID8/IHt9O1xuICAgIGNvbnN0IHZhcmlhYmxlT3B0aW9uR3JvdXAgPSB7XG4gICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICBvcHRpb25zOiBkYXRhc291cmNlLmdldFZhcmlhYmxlcygpLm1hcCh0b09wdGlvbiksXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8UXVlcnlFZGl0b3JSb3dcbiAgICAgICAgICBsYWJlbD1cIlF1ZXJ5IHR5cGVcIlxuICAgICAgICAgIGZpbGxDb21wb25lbnQ9e1xuICAgICAgICAgICAgcXVlcnkucXVlcnlUeXBlICE9PSBRdWVyeVR5cGUuU0xPICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzYFxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBpY29uPVwiZWRpdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMub25RdWVyeUNoYW5nZSgnbWV0cmljUXVlcnknLCB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm1ldHJpY1F1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBlZGl0b3JNb2RlOiBtZXRyaWNRdWVyeS5lZGl0b3JNb2RlID09PSBFZGl0b3JNb2RlLk1RTCA/IEVkaXRvck1vZGUuVmlzdWFsIDogRWRpdG9yTW9kZS5NUUwsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttZXRyaWNRdWVyeS5lZGl0b3JNb2RlID09PSBFZGl0b3JNb2RlLk1RTCA/ICdTd2l0Y2ggdG8gYnVpbGRlcicgOiAnRWRpdCBNUUwnfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbEZvcj17YCR7cXVlcnkucmVmSWR9LXF1ZXJ5LXR5cGVgfVxuICAgICAgICA+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeVR5cGV9XG4gICAgICAgICAgICBvcHRpb25zPXtRVUVSWV9UWVBFU31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHNsb1F1ZXJ5LCBxdWVyeVR5cGU6IHZhbHVlISB9KTtcbiAgICAgICAgICAgICAgb25SdW5RdWVyeSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlucHV0SWQ9e2Ake3F1ZXJ5LnJlZklkfS1xdWVyeS10eXBlYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuXG4gICAgICAgIHtxdWVyeVR5cGUgPT09IFF1ZXJ5VHlwZS5NRVRSSUNTICYmIChcbiAgICAgICAgICA8TWV0cmljUXVlcnlFZGl0b3JcbiAgICAgICAgICAgIHJlZklkPXtxdWVyeS5yZWZJZH1cbiAgICAgICAgICAgIHZhcmlhYmxlT3B0aW9uR3JvdXA9e3ZhcmlhYmxlT3B0aW9uR3JvdXB9XG4gICAgICAgICAgICBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KG1ldHJpY1F1ZXJ5OiBNZXRyaWNRdWVyeSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5xdWVyeSwgbWV0cmljUXVlcnkgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgICAgICBxdWVyeT17bWV0cmljUXVlcnl9XG4gICAgICAgICAgPjwvTWV0cmljUXVlcnlFZGl0b3I+XG4gICAgICAgICl9XG5cbiAgICAgICAge3F1ZXJ5VHlwZSA9PT0gUXVlcnlUeXBlLlNMTyAmJiAoXG4gICAgICAgICAgPFNMT1F1ZXJ5RWRpdG9yXG4gICAgICAgICAgICByZWZJZD17cXVlcnkucmVmSWR9XG4gICAgICAgICAgICB2YXJpYWJsZU9wdGlvbkdyb3VwPXt2YXJpYWJsZU9wdGlvbkdyb3VwfVxuICAgICAgICAgICAgY3VzdG9tTWV0YURhdGE9e2N1c3RvbU1ldGFEYXRhfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhxdWVyeTogU0xPUXVlcnkpID0+IHRoaXMub25RdWVyeUNoYW5nZSgnc2xvUXVlcnknLCBxdWVyeSl9XG4gICAgICAgICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgICAgIHF1ZXJ5PXtzbG9RdWVyeX1cbiAgICAgICAgICA+PC9TTE9RdWVyeUVkaXRvcj5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uLy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgU0xPUXVlcnkgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBTTE9RdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IFNMT1F1ZXJ5O1xuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgU0xPOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyByZWZJZCwgcXVlcnksIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBvbkNoYW5nZSwgZGF0YXNvdXJjZSB9KSA9PiB7XG4gIGNvbnN0IFtzbG9zLCBzZXRTTE9zXSA9IHVzZVN0YXRlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4oW10pO1xuICBjb25zdCB7IHByb2plY3ROYW1lLCBzZXJ2aWNlSWQgfSA9IHF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0TmFtZSB8fCAhc2VydmljZUlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YXNvdXJjZS5nZXRTZXJ2aWNlTGV2ZWxPYmplY3RpdmVzKHByb2plY3ROYW1lLCBzZXJ2aWNlSWQpLnRoZW4oKHNsb0lkczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+KSA9PiB7XG4gICAgICBzZXRTTE9zKFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgICBvcHRpb25zOiB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uc2xvSWRzLFxuICAgICAgXSk7XG4gICAgfSk7XG4gIH0sIFtkYXRhc291cmNlLCBwcm9qZWN0TmFtZSwgc2VydmljZUlkLCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93IGxhYmVsPVwiU0xPXCIgaHRtbEZvcj17YCR7cmVmSWR9LXNsb2B9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgIGlucHV0SWQ9e2Ake3JlZklkfS1zbG9gfVxuICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIHZhbHVlPXtxdWVyeT8uc2xvSWQgJiYgeyB2YWx1ZTogcXVlcnk/LnNsb0lkLCBsYWJlbDogcXVlcnk/LnNsb05hbWUgfHwgcXVlcnk/LnNsb0lkIH19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNMT1wiXG4gICAgICAgIG9wdGlvbnM9e3Nsb3N9XG4gICAgICAgIG9uQ2hhbmdlPXthc3luYyAoeyB2YWx1ZTogc2xvSWQgPSAnJywgbGFiZWw6IHNsb05hbWUgPSAnJyB9KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2xvcyA9IGF3YWl0IGRhdGFzb3VyY2UuZ2V0U2VydmljZUxldmVsT2JqZWN0aXZlcyhwcm9qZWN0TmFtZSwgc2VydmljZUlkKTtcbiAgICAgICAgICBjb25zdCBzbG8gPSBzbG9zLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGFzb3VyY2UudGVtcGxhdGVTcnYucmVwbGFjZShzbG9JZCkpO1xuICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHNsb0lkLCBzbG9OYW1lLCBnb2FsOiBzbG8/LmdvYWwgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RvciwgU2VydmljZSwgU0xPIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBBbGlhc0J5LCBBbGlnbm1lbnRQZXJpb2QsIEFsaWdubWVudFBlcmlvZExhYmVsLCBQcm9qZWN0LCBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4uJztcbmltcG9ydCB7IFNFTEVDVF9XSURUSCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7IEFsaWdubWVudFR5cGVzLCBDdXN0b21NZXRhRGF0YSwgU0xPUXVlcnkgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBjdXN0b21NZXRhRGF0YTogQ3VzdG9tTWV0YURhdGE7XG4gIHZhcmlhYmxlT3B0aW9uR3JvdXA6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+O1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBTTE9RdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyeTogKCkgPT4gdm9pZDtcbiAgcXVlcnk6IFNMT1F1ZXJ5O1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFF1ZXJ5OiAoZGF0YVNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSkgPT4gU0xPUXVlcnkgPSAoZGF0YVNvdXJjZSkgPT4gKHtcbiAgcHJvamVjdE5hbWU6IGRhdGFTb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKSxcbiAgYWxpZ25tZW50UGVyaW9kOiAnY2xvdWQtbW9uaXRvcmluZy1hdXRvJyxcbiAgcGVyU2VyaWVzQWxpZ25lcjogQWxpZ25tZW50VHlwZXMuQUxJR05fTUVBTixcbiAgYWxpYXNCeTogJycsXG4gIHNlbGVjdG9yTmFtZTogJ3NlbGVjdF9zbG9faGVhbHRoJyxcbiAgc2VydmljZUlkOiAnJyxcbiAgc2VydmljZU5hbWU6ICcnLFxuICBzbG9JZDogJycsXG4gIHNsb05hbWU6ICcnLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBTTE9RdWVyeUVkaXRvcih7XG4gIHJlZklkLFxuICBxdWVyeSxcbiAgZGF0YXNvdXJjZSxcbiAgb25DaGFuZ2UsXG4gIHZhcmlhYmxlT3B0aW9uR3JvdXAsXG4gIGN1c3RvbU1ldGFEYXRhLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQcm9qZWN0XG4gICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgcHJvamVjdE5hbWU9e3F1ZXJ5LnByb2plY3ROYW1lfVxuICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICBvbkNoYW5nZT17KHByb2plY3ROYW1lKSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBwcm9qZWN0TmFtZSB9KX1cbiAgICAgIC8+XG4gICAgICA8U2VydmljZVxuICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgPjwvU2VydmljZT5cbiAgICAgIDxTTE9cbiAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucz17dmFyaWFibGVPcHRpb25Hcm91cC5vcHRpb25zfVxuICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgID48L1NMTz5cbiAgICAgIDxTZWxlY3RvclxuICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgPjwvU2VsZWN0b3I+XG5cbiAgICAgIDxRdWVyeUVkaXRvclJvdyBsYWJlbD1cIkFsaWdubWVudCBwZXJpb2RcIiBodG1sRm9yPXtgJHtyZWZJZH0tYWxpZ25tZW50LXBlcmlvZGB9PlxuICAgICAgICA8QWxpZ25tZW50UGVyaW9kXG4gICAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LWFsaWdubWVudC1wZXJpb2RgfVxuICAgICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgICAgcXVlcnk9e3tcbiAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgcGVyU2VyaWVzQWxpZ25lcjogcXVlcnkuc2VsZWN0b3JOYW1lID09PSAnc2VsZWN0X3Nsb19oZWFsdGgnID8gJ0FMSUdOX01FQU4nIDogJ0FMSUdOX05FWFRfT0xERVInLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHNlbGVjdFdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgIC8+XG4gICAgICAgIDxBbGlnbm1lbnRQZXJpb2RMYWJlbCBkYXRhc291cmNlPXtkYXRhc291cmNlfSBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9IC8+XG4gICAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuXG4gICAgICA8QWxpYXNCeSByZWZJZD17cmVmSWR9IHZhbHVlPXtxdWVyeS5hbGlhc0J5fSBvbkNoYW5nZT17KGFsaWFzQnkpID0+IG9uQ2hhbmdlKHsgLi4ucXVlcnksIGFsaWFzQnkgfSl9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgU0VMRUNUX1dJRFRILCBTRUxFQ1RPUlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBTTE9RdWVyeSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IFNMT1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogU0xPUXVlcnk7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcmVmSWQsIHF1ZXJ5LCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucywgb25DaGFuZ2UsIGRhdGFzb3VyY2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUVkaXRvclJvdyBsYWJlbD1cIlNlbGVjdG9yXCIgaHRtbEZvcj17YCR7cmVmSWR9LXNsby1zZWxlY3RvcmB9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgIGlucHV0SWQ9e2Ake3JlZklkfS1zbG8tc2VsZWN0b3JgfVxuICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIHZhbHVlPXtbLi4uU0VMRUNUT1JTLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gcXVlcnk/LnNlbGVjdG9yTmFtZSA/PyAnJyl9XG4gICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgICBvcHRpb25zOiB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLlNFTEVDVE9SUyxcbiAgICAgICAgXX1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlOiBzZWxlY3Rvck5hbWUgfSkgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2VsZWN0b3JOYW1lOiBzZWxlY3Rvck5hbWUgPz8gJycgfSl9XG4gICAgICAvPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBTTE9RdWVyeSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IFNMT1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogU0xPUXVlcnk7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyByZWZJZCwgcXVlcnksIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBvbkNoYW5nZSwgZGF0YXNvdXJjZSB9KSA9PiB7XG4gIGNvbnN0IFtzZXJ2aWNlcywgc2V0U2VydmljZXNdID0gdXNlU3RhdGU8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PihbXSk7XG4gIGNvbnN0IHsgcHJvamVjdE5hbWUgfSA9IHF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0TmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGFzb3VyY2UuZ2V0U0xPU2VydmljZXMocHJvamVjdE5hbWUpLnRoZW4oKHNlcnZpY2VzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4pID0+IHtcbiAgICAgIHNldFNlcnZpY2VzKFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgICBvcHRpb25zOiB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uc2VydmljZXMsXG4gICAgICBdKTtcbiAgICB9KTtcbiAgfSwgW2RhdGFzb3VyY2UsIHByb2plY3ROYW1lLCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93IGxhYmVsPVwiU2VydmljZVwiIGh0bWxGb3I9e2Ake3JlZklkfS1zbG8tc2VydmljZWB9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgIGlucHV0SWQ9e2Ake3JlZklkfS1zbG8tc2VydmljZWB9XG4gICAgICAgIHdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgdmFsdWU9e3F1ZXJ5Py5zZXJ2aWNlSWQgJiYgeyB2YWx1ZTogcXVlcnk/LnNlcnZpY2VJZCwgbGFiZWw6IHF1ZXJ5Py5zZXJ2aWNlTmFtZSB8fCBxdWVyeT8uc2VydmljZUlkIH19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IHNlcnZpY2VcIlxuICAgICAgICBvcHRpb25zPXtzZXJ2aWNlc31cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlOiBzZXJ2aWNlSWQgPSAnJywgbGFiZWw6IHNlcnZpY2VOYW1lID0gJycgfSkgPT5cbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBzZXJ2aWNlSWQsIHNlcnZpY2VOYW1lLCBzbG9JZDogJycgfSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImV4cG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2UnO1xuZXhwb3J0IHsgU0xPIH0gZnJvbSAnLi9TTE8nO1xuZXhwb3J0IHsgU2VsZWN0b3IgfSBmcm9tICcuL1NlbGVjdG9yJztcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBWYXJpYWJsZVF1ZXJ5RmllbGQgfSBmcm9tICcuLyc7XG5pbXBvcnQgeyBleHRyYWN0U2VydmljZXNGcm9tTWV0cmljRGVzY3JpcHRvcnMsIGdldExhYmVsS2V5cywgZ2V0TWV0cmljVHlwZXMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ2xvdWRNb25pdG9yaW5nT3B0aW9ucyxcbiAgQ2xvdWRNb25pdG9yaW5nUXVlcnksXG4gIENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnksXG4gIE1ldHJpY0Rlc2NyaXB0b3IsXG4gIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLFxuICBWYXJpYWJsZVF1ZXJ5RGF0YSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gUXVlcnlFZGl0b3JQcm9wczxcbiAgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSxcbiAgQ2xvdWRNb25pdG9yaW5nUXVlcnksXG4gIENsb3VkTW9uaXRvcmluZ09wdGlvbnMsXG4gIENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnlcbj47XG5cbmV4cG9ydCBjbGFzcyBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5RWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgVmFyaWFibGVRdWVyeURhdGE+IHtcbiAgcXVlcnlUeXBlczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+ID0gW1xuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlByb2plY3RzLCBsYWJlbDogJ1Byb2plY3RzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNlcnZpY2VzLCBsYWJlbDogJ1NlcnZpY2VzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLk1ldHJpY1R5cGVzLCBsYWJlbDogJ01ldHJpYyBUeXBlcycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbEtleXMsIGxhYmVsOiAnTGFiZWwgS2V5cycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbFZhbHVlcywgbGFiZWw6ICdMYWJlbCBWYWx1ZXMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuUmVzb3VyY2VUeXBlcywgbGFiZWw6ICdSZXNvdXJjZSBUeXBlcycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5BZ2dyZWdhdGlvbnMsIGxhYmVsOiAnQWdncmVnYXRpb25zJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkFsaWduZXJzLCBsYWJlbDogJ0FsaWduZXJzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkFsaWdubWVudFBlcmlvZHMsIGxhYmVsOiAnQWxpZ25tZW50IFBlcmlvZHMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuU2VsZWN0b3JzLCBsYWJlbDogJ1NlbGVjdG9ycycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5TTE9TZXJ2aWNlcywgbGFiZWw6ICdTTE8gU2VydmljZXMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuU0xPLCBsYWJlbDogJ1NlcnZpY2UgTGV2ZWwgT2JqZWN0aXZlcyAoU0xPKScgfSxcbiAgXTtcblxuICBkZWZhdWx0czogVmFyaWFibGVRdWVyeURhdGEgPSB7XG4gICAgc2VsZWN0ZWRRdWVyeVR5cGU6IHRoaXMucXVlcnlUeXBlc1swXS52YWx1ZSxcbiAgICBtZXRyaWNEZXNjcmlwdG9yczogW10sXG4gICAgc2VsZWN0ZWRTZXJ2aWNlOiAnJyxcbiAgICBzZWxlY3RlZE1ldHJpY1R5cGU6ICcnLFxuICAgIGxhYmVsczogW10sXG4gICAgbGFiZWxLZXk6ICcnLFxuICAgIG1ldHJpY1R5cGVzOiBbXSxcbiAgICBzZXJ2aWNlczogW10sXG4gICAgc2xvU2VydmljZXM6IFtdLFxuICAgIHNlbGVjdGVkU0xPU2VydmljZTogJycsXG4gICAgcHJvamVjdHM6IFtdLFxuICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHRoaXMuZGVmYXVsdHMsXG4gICAgICB7IHByb2plY3ROYW1lOiB0aGlzLnByb3BzLmRhdGFzb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKSB9LFxuICAgICAgdGhpcy5wcm9wcy5xdWVyeVxuICAgICk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IChhd2FpdCB0aGlzLnByb3BzLmRhdGFzb3VyY2UuZ2V0UHJvamVjdHMoKSkgYXMgTWV0cmljRGVzY3JpcHRvcltdO1xuICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3JzID0gYXdhaXQgdGhpcy5wcm9wcy5kYXRhc291cmNlLmdldE1ldHJpY1R5cGVzKFxuICAgICAgdGhpcy5wcm9wcy5xdWVyeS5wcm9qZWN0TmFtZSB8fCB0aGlzLnByb3BzLmRhdGFzb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKVxuICAgICk7XG4gICAgY29uc3Qgc2VydmljZXMgPSBleHRyYWN0U2VydmljZXNGcm9tTWV0cmljRGVzY3JpcHRvcnMobWV0cmljRGVzY3JpcHRvcnMpLm1hcCgobTogYW55KSA9PiAoe1xuICAgICAgdmFsdWU6IG0uc2VydmljZSxcbiAgICAgIGxhYmVsOiBtLnNlcnZpY2VTaG9ydE5hbWUsXG4gICAgfSkpO1xuXG4gICAgbGV0IHNlbGVjdGVkU2VydmljZSA9ICcnO1xuICAgIGlmIChzZXJ2aWNlcy5zb21lKChzKSA9PiBzLnZhbHVlID09PSBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2UodGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2UpKSkge1xuICAgICAgc2VsZWN0ZWRTZXJ2aWNlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2U7XG4gICAgfSBlbHNlIGlmIChzZXJ2aWNlcyAmJiBzZXJ2aWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBzZWxlY3RlZFNlcnZpY2UgPSBzZXJ2aWNlc1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG1ldHJpY1R5cGVzLCBzZWxlY3RlZE1ldHJpY1R5cGUgfSA9IGdldE1ldHJpY1R5cGVzKFxuICAgICAgbWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSksXG4gICAgICBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2Uoc2VsZWN0ZWRTZXJ2aWNlKVxuICAgICk7XG5cbiAgICBjb25zdCBzbG9TZXJ2aWNlcyA9IGF3YWl0IHRoaXMucHJvcHMuZGF0YXNvdXJjZS5nZXRTTE9TZXJ2aWNlcyh0aGlzLnN0YXRlLnByb2plY3ROYW1lKTtcblxuICAgIGNvbnN0IHN0YXRlOiBhbnkgPSB7XG4gICAgICBzZXJ2aWNlcyxcbiAgICAgIHNlbGVjdGVkU2VydmljZSxcbiAgICAgIG1ldHJpY1R5cGVzLFxuICAgICAgc2VsZWN0ZWRNZXRyaWNUeXBlLFxuICAgICAgbWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICBwcm9qZWN0cyxcbiAgICAgIC4uLihhd2FpdCB0aGlzLmdldExhYmVscyhzZWxlY3RlZE1ldHJpY1R5cGUsIHRoaXMuc3RhdGUucHJvamVjdE5hbWUpKSxcbiAgICAgIHNsb1NlcnZpY2VzLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCAoKSA9PiB0aGlzLm9uUHJvcHNDaGFuZ2UoKSk7XG4gIH1cblxuICBvblByb3BzQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWV0cmljRGVzY3JpcHRvcnMsIGxhYmVscywgbWV0cmljVHlwZXMsIHNlcnZpY2VzLCAuLi5xdWVyeU1vZGVsIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyAuLi5xdWVyeU1vZGVsLCByZWZJZDogJ0Nsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnlFZGl0b3ItVmFyaWFibGVRdWVyeScgfSk7XG4gIH07XG5cbiAgYXN5bmMgb25RdWVyeVR5cGVDaGFuZ2UocXVlcnlUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdGF0ZTogYW55ID0ge1xuICAgICAgc2VsZWN0ZWRRdWVyeVR5cGU6IHF1ZXJ5VHlwZSxcbiAgICAgIC4uLihhd2FpdCB0aGlzLmdldExhYmVscyh0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSwgdGhpcy5zdGF0ZS5wcm9qZWN0TmFtZSwgcXVlcnlUeXBlKSksXG4gICAgfTtcblxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgYXN5bmMgb25Qcm9qZWN0Q2hhbmdlKHByb2plY3ROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZXRyaWNEZXNjcmlwdG9ycyA9IGF3YWl0IHRoaXMucHJvcHMuZGF0YXNvdXJjZS5nZXRNZXRyaWNUeXBlcyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgbGFiZWxzID0gYXdhaXQgdGhpcy5nZXRMYWJlbHModGhpcy5zdGF0ZS5zZWxlY3RlZE1ldHJpY1R5cGUsIHByb2plY3ROYW1lKTtcbiAgICBjb25zdCB7IG1ldHJpY1R5cGVzLCBzZWxlY3RlZE1ldHJpY1R5cGUgfSA9IGdldE1ldHJpY1R5cGVzKFxuICAgICAgbWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSksXG4gICAgICBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2UodGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2UpXG4gICAgKTtcblxuICAgIGNvbnN0IHNsb1NlcnZpY2VzID0gYXdhaXQgdGhpcy5wcm9wcy5kYXRhc291cmNlLmdldFNMT1NlcnZpY2VzKHByb2plY3ROYW1lKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIC4uLmxhYmVscyxcbiAgICAgICAgbWV0cmljVHlwZXMsXG4gICAgICAgIHNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgICAgbWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBzbG9TZXJ2aWNlcyxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB0aGlzLm9uUHJvcHNDaGFuZ2UoKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBvblNlcnZpY2VDaGFuZ2Uoc2VydmljZTogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBtZXRyaWNUeXBlcywgc2VsZWN0ZWRNZXRyaWNUeXBlIH0gPSBnZXRNZXRyaWNUeXBlcyhcbiAgICAgIHRoaXMuc3RhdGUubWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSksXG4gICAgICBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2Uoc2VydmljZSlcbiAgICApO1xuICAgIGNvbnN0IHN0YXRlOiBhbnkgPSB7XG4gICAgICBzZWxlY3RlZFNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICBtZXRyaWNUeXBlcyxcbiAgICAgIHNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgIC4uLihhd2FpdCB0aGlzLmdldExhYmVscyhzZWxlY3RlZE1ldHJpY1R5cGUsIHRoaXMuc3RhdGUucHJvamVjdE5hbWUpKSxcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUsICgpID0+IHRoaXMub25Qcm9wc0NoYW5nZSgpKTtcbiAgfVxuXG4gIGFzeW5jIG9uTWV0cmljVHlwZUNoYW5nZShtZXRyaWNUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdGF0ZTogYW55ID0ge1xuICAgICAgc2VsZWN0ZWRNZXRyaWNUeXBlOiBtZXRyaWNUeXBlLFxuICAgICAgLi4uKGF3YWl0IHRoaXMuZ2V0TGFiZWxzKG1ldHJpY1R5cGUsIHRoaXMuc3RhdGUucHJvamVjdE5hbWUpKSxcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUsICgpID0+IHRoaXMub25Qcm9wc0NoYW5nZSgpKTtcbiAgfVxuXG4gIG9uTGFiZWxLZXlDaGFuZ2UobGFiZWxLZXk6IHN0cmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbEtleSB9LCAoKSA9PiB0aGlzLm9uUHJvcHNDaGFuZ2UoKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBSZWFkb25seTxQcm9wcz4sIHByZXZTdGF0ZTogUmVhZG9ubHk8VmFyaWFibGVRdWVyeURhdGE+KSB7XG4gICAgY29uc3Qgc2VsZWNRdWVyeVR5cGVDaGFuZ2VkID0gcHJldlN0YXRlLnNlbGVjdGVkUXVlcnlUeXBlICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkUXVlcnlUeXBlO1xuICAgIGNvbnN0IHNlbGVjdFNMT1NlcnZpY2VDaGFuZ2VkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNMT1NlcnZpY2UgIT09IHByZXZTdGF0ZS5zZWxlY3RlZFNMT1NlcnZpY2U7XG4gICAgaWYgKHNlbGVjUXVlcnlUeXBlQ2hhbmdlZCB8fCBzZWxlY3RTTE9TZXJ2aWNlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5vblByb3BzQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0TGFiZWxzKHNlbGVjdGVkTWV0cmljVHlwZTogc3RyaW5nLCBwcm9qZWN0TmFtZTogc3RyaW5nLCBzZWxlY3RlZFF1ZXJ5VHlwZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRRdWVyeVR5cGUpIHtcbiAgICBsZXQgcmVzdWx0ID0geyBsYWJlbHM6IHRoaXMuc3RhdGUubGFiZWxzLCBsYWJlbEtleTogdGhpcy5zdGF0ZS5sYWJlbEtleSB9O1xuICAgIGlmIChzZWxlY3RlZE1ldHJpY1R5cGUgJiYgc2VsZWN0ZWRRdWVyeVR5cGUgPT09IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkxhYmVsVmFsdWVzKSB7XG4gICAgICBjb25zdCBsYWJlbHMgPSBhd2FpdCBnZXRMYWJlbEtleXModGhpcy5wcm9wcy5kYXRhc291cmNlLCBzZWxlY3RlZE1ldHJpY1R5cGUsIHByb2plY3ROYW1lKTtcbiAgICAgIGNvbnN0IGxhYmVsS2V5ID0gbGFiZWxzLnNvbWUoKGwpID0+IGwgPT09IGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLmxhYmVsS2V5KSlcbiAgICAgICAgPyB0aGlzLnN0YXRlLmxhYmVsS2V5XG4gICAgICAgIDogbGFiZWxzWzBdO1xuICAgICAgcmVzdWx0ID0geyBsYWJlbHMsIGxhYmVsS2V5IH07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZW5kZXJRdWVyeVR5cGVTd2l0Y2gocXVlcnlUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB2YXJpYWJsZU9wdGlvbkdyb3VwID0ge1xuICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgb3B0aW9uczogZ2V0VGVtcGxhdGVTcnYoKVxuICAgICAgICAuZ2V0VmFyaWFibGVzKClcbiAgICAgICAgLm1hcCgodjogYW55KSA9PiAoe1xuICAgICAgICAgIHZhbHVlOiBgJCR7di5uYW1lfWAsXG4gICAgICAgICAgbGFiZWw6IGAkJHt2Lm5hbWV9YCxcbiAgICAgICAgfSkpLFxuICAgIH07XG5cbiAgICBzd2l0Y2ggKHF1ZXJ5VHlwZSkge1xuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5NZXRyaWNUeXBlczpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUucHJvamVjdHNdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uUHJvamVjdENoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnNlcnZpY2VzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblNlcnZpY2VDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlNlcnZpY2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuTGFiZWxLZXlzOlxuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbFZhbHVlczpcbiAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuUmVzb3VyY2VUeXBlczpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUucHJvamVjdHNdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uUHJvamVjdENoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnNlcnZpY2VzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblNlcnZpY2VDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlNlcnZpY2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cCxcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLm1ldHJpY1R5cGVzLm1hcCgoeyB2YWx1ZSwgbmFtZSB9KSA9PiAoeyB2YWx1ZSwgbGFiZWw6IG5hbWUgfSkpLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uTWV0cmljVHlwZUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiTWV0cmljIFR5cGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtxdWVyeVR5cGUgPT09IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkxhYmVsVmFsdWVzICYmIChcbiAgICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhYmVsS2V5fVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLmxhYmVscy5tYXAoKGwpID0+ICh7IHZhbHVlOiBsLCBsYWJlbDogbCB9KSldfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMub25MYWJlbEtleUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYWJlbCBLZXlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuQWxpZ25lcnM6XG4gICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkFnZ3JlZ2F0aW9uczpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnNlcnZpY2VzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblNlcnZpY2VDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlNlcnZpY2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cCxcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLm1ldHJpY1R5cGVzLm1hcCgoeyB2YWx1ZSwgbmFtZSB9KSA9PiAoeyB2YWx1ZSwgbGFiZWw6IG5hbWUgfSkpLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uTWV0cmljVHlwZUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiTWV0cmljIFR5cGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuU0xPU2VydmljZXM6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnByb2plY3RzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblByb2plY3RDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3RcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5TTE86XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnByb2plY3RzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblByb2plY3RDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3RcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTTE9TZXJ2aWNlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbdmFyaWFibGVPcHRpb25Hcm91cCwgLi4udGhpcy5zdGF0ZS5zbG9TZXJ2aWNlc119XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFNMT1NlcnZpY2U6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBsYWJlbD1cIlNMTyBTZXJ2aWNlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBtYXgtd2lkdGgtMjFcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTEwIHF1ZXJ5LWtleXdvcmRcIj5RdWVyeSBUeXBlPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1zZWxlY3Qtd3JhcHBlciBtYXgtd2lkdGgtMTJcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbnB1dFwiPlxuICAgICAgICAgICAgICA8b3B0aW9uPkxvYWRpbmcuLi48L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFF1ZXJ5VHlwZX1cbiAgICAgICAgICBvcHRpb25zPXt0aGlzLnF1ZXJ5VHlwZXN9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblF1ZXJ5VHlwZUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgbGFiZWw9XCJRdWVyeSBUeXBlXCJcbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucmVuZGVyUXVlcnlUeXBlU3dpdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRRdWVyeVR5cGUpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGlnbm1lbnQsIEdyb3VwQnksIExhYmVsRmlsdGVyLCBNZXRyaWNzLCBQcmVwcm9jZXNzb3IgfSBmcm9tICcuJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ3VzdG9tTWV0YURhdGEsIE1ldHJpY0Rlc2NyaXB0b3IsIE1ldHJpY1F1ZXJ5LCBTTE9RdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIGN1c3RvbU1ldGFEYXRhOiBDdXN0b21NZXRhRGF0YTtcbiAgdmFyaWFibGVPcHRpb25Hcm91cDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz47XG4gIG9uTWV0cmljVHlwZUNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNEZXNjcmlwdG9yKSA9PiB2b2lkO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNRdWVyeSB8IFNMT1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogTWV0cmljUXVlcnk7XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG4gIGxhYmVsczogYW55O1xufVxuXG5mdW5jdGlvbiBFZGl0b3Ioe1xuICByZWZJZCxcbiAgcXVlcnksXG4gIGxhYmVscyxcbiAgZGF0YXNvdXJjZSxcbiAgb25DaGFuZ2UsXG4gIG9uTWV0cmljVHlwZUNoYW5nZSxcbiAgY3VzdG9tTWV0YURhdGEsXG4gIHZhcmlhYmxlT3B0aW9uR3JvdXAsXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4pIHtcbiAgcmV0dXJuIChcbiAgICA8TWV0cmljc1xuICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgdGVtcGxhdGVTcnY9e2RhdGFzb3VyY2UudGVtcGxhdGVTcnZ9XG4gICAgICBwcm9qZWN0TmFtZT17cXVlcnkucHJvamVjdE5hbWV9XG4gICAgICBtZXRyaWNUeXBlPXtxdWVyeS5tZXRyaWNUeXBlfVxuICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICBvbkNoYW5nZT17b25NZXRyaWNUeXBlQ2hhbmdlfVxuICAgID5cbiAgICAgIHsobWV0cmljKSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExhYmVsRmlsdGVyXG4gICAgICAgICAgICBsYWJlbHM9e2xhYmVsc31cbiAgICAgICAgICAgIGZpbHRlcnM9e3F1ZXJ5LmZpbHRlcnMhfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWx0ZXJzOiBzdHJpbmdbXSkgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgZmlsdGVycyB9KX1cbiAgICAgICAgICAgIHZhcmlhYmxlT3B0aW9uR3JvdXA9e3ZhcmlhYmxlT3B0aW9uR3JvdXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UHJlcHJvY2Vzc29yIG1ldHJpY0Rlc2NyaXB0b3I9e21ldHJpY30gcXVlcnk9e3F1ZXJ5fSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgPEdyb3VwQnlcbiAgICAgICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgICAgIGxhYmVscz17T2JqZWN0LmtleXMobGFiZWxzKX1cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHZhcmlhYmxlT3B0aW9uR3JvdXA9e3ZhcmlhYmxlT3B0aW9uR3JvdXB9XG4gICAgICAgICAgICBtZXRyaWNEZXNjcmlwdG9yPXttZXRyaWN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWxpZ25tZW50XG4gICAgICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgIGN1c3RvbU1ldGFEYXRhPXtjdXN0b21NZXRhRGF0YX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9NZXRyaWNzPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgVmlzdWFsTWV0cmljUXVlcnlFZGl0b3IgPSBSZWFjdC5tZW1vKEVkaXRvcik7XG4iLCJleHBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0JztcbmV4cG9ydCB7IE1ldHJpY3MgfSBmcm9tICcuL01ldHJpY3MnO1xuZXhwb3J0IHsgR3JvdXBCeSB9IGZyb20gJy4vR3JvdXBCeSc7XG5leHBvcnQgeyBBbGlnbm1lbnQgfSBmcm9tICcuL0FsaWdubWVudCc7XG5leHBvcnQgeyBMYWJlbEZpbHRlciB9IGZyb20gJy4vTGFiZWxGaWx0ZXInO1xuZXhwb3J0IHsgQW5ub3RhdGlvbnNIZWxwIH0gZnJvbSAnLi9Bbm5vdGF0aW9uc0hlbHAnO1xuZXhwb3J0IHsgQWxpZ25tZW50RnVuY3Rpb24gfSBmcm9tICcuL0FsaWdubWVudEZ1bmN0aW9uJztcbmV4cG9ydCB7IEFsaWdubWVudFBlcmlvZCB9IGZyb20gJy4vQWxpZ25tZW50UGVyaW9kJztcbmV4cG9ydCB7IEFsaWdubWVudFBlcmlvZExhYmVsIH0gZnJvbSAnLi9BbGlnbm1lbnRQZXJpb2RMYWJlbCc7XG5leHBvcnQgeyBBbGlhc0J5IH0gZnJvbSAnLi9BbGlhc0J5JztcbmV4cG9ydCB7IEFnZ3JlZ2F0aW9uIH0gZnJvbSAnLi9BZ2dyZWdhdGlvbic7XG5leHBvcnQgeyBNZXRyaWNRdWVyeUVkaXRvciB9IGZyb20gJy4vTWV0cmljUXVlcnlFZGl0b3InO1xuZXhwb3J0IHsgU0xPUXVlcnlFZGl0b3IgfSBmcm9tICcuL1NMTy9TTE9RdWVyeUVkaXRvcic7XG5leHBvcnQgeyBNUUxRdWVyeUVkaXRvciB9IGZyb20gJy4vTVFMUXVlcnlFZGl0b3InO1xuZXhwb3J0IHsgVmFyaWFibGVRdWVyeUZpZWxkLCBRdWVyeUVkaXRvclJvdywgUXVlcnlFZGl0b3JGaWVsZCB9IGZyb20gJy4vRmllbGRzJztcbmV4cG9ydCB7IFZpc3VhbE1ldHJpY1F1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9WaXN1YWxNZXRyaWNRdWVyeUVkaXRvcic7XG5leHBvcnQgeyBQcmVwcm9jZXNzb3IgfSBmcm9tICcuL1ByZXByb2Nlc3Nvcic7XG4iLCJpbXBvcnQgeyBNZXRyaWNLaW5kLCBRdWVyeVR5cGUsIFZhbHVlVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEdvb2dsZUF1dGhUeXBlIH0gZnJvbSAnQGdyYWZhbmEvZ29vZ2xlLXNkayc7XG5cbi8vIG5vdCBzdXBlciBleGNpdGVkIGFib3V0IHVzaW5nIHVuZXZlbiBudW1iZXJzLCBidXQgdGhpcyBtYWtlcyBpdCBhbGlnbiBwZXJmZWN0bHkgd2l0aCByb3dzIHRoYXQgaGFzIHR3byBmaWVsZHNcbmV4cG9ydCBjb25zdCBJTlBVVF9XSURUSCA9IDcxO1xuZXhwb3J0IGNvbnN0IExBQkVMX1dJRFRIID0gMTk7XG5leHBvcnQgY29uc3QgSU5ORVJfTEFCRUxfV0lEVEggPSAxNDtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfV0lEVEggPSAyODtcbmV4cG9ydCBjb25zdCBBVVRIX1RZUEVTID0gW1xuICB7IHZhbHVlOiAnR29vZ2xlIEpXVCBGaWxlJywga2V5OiBHb29nbGVBdXRoVHlwZS5KV1QgfSxcbiAgeyB2YWx1ZTogJ0dDRSBEZWZhdWx0IFNlcnZpY2UgQWNjb3VudCcsIGtleTogR29vZ2xlQXV0aFR5cGUuR0NFIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQUxJR05NRU5UUyA9IFtcbiAge1xuICAgIHRleHQ6ICdkZWx0YScsXG4gICAgdmFsdWU6ICdBTElHTl9ERUxUQScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkNVTVVMQVRJVkUsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3JhdGUnLFxuICAgIHZhbHVlOiAnQUxJR05fUkFURScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuQ1VNVUxBVElWRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnaW50ZXJwb2xhdGUnLFxuICAgIHZhbHVlOiAnQUxJR05fSU5URVJQT0xBVEUnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWV0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICduZXh0IG9sZGVyJyxcbiAgICB2YWx1ZTogJ0FMSUdOX05FWFRfT0xERVInLFxuICAgIHZhbHVlVHlwZXM6IFtcbiAgICAgIFZhbHVlVHlwZXMuSU5UNjQsXG4gICAgICBWYWx1ZVR5cGVzLkRPVUJMRSxcbiAgICAgIFZhbHVlVHlwZXMuTU9ORVksXG4gICAgICBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTixcbiAgICAgIFZhbHVlVHlwZXMuU1RSSU5HLFxuICAgICAgVmFsdWVUeXBlcy5WQUxVRV9UWVBFX1VOU1BFQ0lGSUVELFxuICAgICAgVmFsdWVUeXBlcy5CT09MLFxuICAgIF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdtaW4nLFxuICAgIHZhbHVlOiAnQUxJR05fTUlOJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVldLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnbWF4JyxcbiAgICB2YWx1ZTogJ0FMSUdOX01BWCcsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ21lYW4nLFxuICAgIHZhbHVlOiAnQUxJR05fTUVBTicsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2NvdW50JyxcbiAgICB2YWx1ZTogJ0FMSUdOX0NPVU5UJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuQk9PTF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdzdW0nLFxuICAgIHZhbHVlOiAnQUxJR05fU1VNJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3N0ZGRldicsXG4gICAgdmFsdWU6ICdBTElHTl9TVERERVYnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWV0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdjb3VudCB0cnVlJyxcbiAgICB2YWx1ZTogJ0FMSUdOX0NPVU5UX1RSVUUnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLkJPT0xdLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnY291bnQgZmFsc2UnLFxuICAgIHZhbHVlOiAnQUxJR05fQ09VTlRfRkFMU0UnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLkJPT0xdLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnZnJhY3Rpb24gdHJ1ZScsXG4gICAgdmFsdWU6ICdBTElHTl9GUkFDVElPTl9UUlVFJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5CT09MXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0VdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnRpbGUgOTknLFxuICAgIHZhbHVlOiAnQUxJR05fUEVSQ0VOVElMRV85OScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnRpbGUgOTUnLFxuICAgIHZhbHVlOiAnQUxJR05fUEVSQ0VOVElMRV85NScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnRpbGUgNTAnLFxuICAgIHZhbHVlOiAnQUxJR05fUEVSQ0VOVElMRV81MCcsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnRpbGUgMDUnLFxuICAgIHZhbHVlOiAnQUxJR05fUEVSQ0VOVElMRV8wNScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnQgY2hhbmdlJyxcbiAgICB2YWx1ZTogJ0FMSUdOX1BFUkNFTlRfQ0hBTkdFJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVldLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQUdHUkVHQVRJT05TID0gW1xuICB7XG4gICAgdGV4dDogJ25vbmUnLFxuICAgIHZhbHVlOiAnUkVEVUNFX05PTkUnLFxuICAgIHZhbHVlVHlwZXM6IFtcbiAgICAgIFZhbHVlVHlwZXMuSU5UNjQsXG4gICAgICBWYWx1ZVR5cGVzLkRPVUJMRSxcbiAgICAgIFZhbHVlVHlwZXMuTU9ORVksXG4gICAgICBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTixcbiAgICAgIFZhbHVlVHlwZXMuQk9PTCxcbiAgICAgIFZhbHVlVHlwZXMuU1RSSU5HLFxuICAgIF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkUsIE1ldHJpY0tpbmQuTUVUUklDX0tJTkRfVU5TUEVDSUZJRURdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ21lYW4nLFxuICAgIHZhbHVlOiAnUkVEVUNFX01FQU4nLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWSwgVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQSwgTWV0cmljS2luZC5DVU1VTEFUSVZFXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdtaW4nLFxuICAgIHZhbHVlOiAnUkVEVUNFX01JTicsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRSwgTWV0cmljS2luZC5NRVRSSUNfS0lORF9VTlNQRUNJRklFRF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnbWF4JyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9NQVgnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWV0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkUsIE1ldHJpY0tpbmQuTUVUUklDX0tJTkRfVU5TUEVDSUZJRURdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3N1bScsXG4gICAgdmFsdWU6ICdSRURVQ0VfU1VNJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRSwgTWV0cmljS2luZC5NRVRSSUNfS0lORF9VTlNQRUNJRklFRF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnc3RkLiBkZXYuJyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9TVERERVYnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWSwgVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQSwgTWV0cmljS2luZC5DVU1VTEFUSVZFLCBNZXRyaWNLaW5kLk1FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdjb3VudCcsXG4gICAgdmFsdWU6ICdSRURVQ0VfQ09VTlQnLFxuICAgIHZhbHVlVHlwZXM6IFtcbiAgICAgIFZhbHVlVHlwZXMuSU5UNjQsXG4gICAgICBWYWx1ZVR5cGVzLkRPVUJMRSxcbiAgICAgIFZhbHVlVHlwZXMuTU9ORVksXG4gICAgICBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTixcbiAgICAgIFZhbHVlVHlwZXMuQk9PTCxcbiAgICAgIFZhbHVlVHlwZXMuU1RSSU5HLFxuICAgIF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkVdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2NvdW50IHRydWUnLFxuICAgIHZhbHVlOiAnUkVEVUNFX0NPVU5UX1RSVUUnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLkJPT0xdLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnY291bnQgZmFsc2UnLFxuICAgIHZhbHVlOiAnUkVEVUNFX0NPVU5UX0ZBTFNFJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5CT09MXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJzk5dGggcGVyY2VudGlsZScsXG4gICAgdmFsdWU6ICdSRURVQ0VfUEVSQ0VOVElMRV85OScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkVdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJzk1dGggcGVyY2VudGlsZScsXG4gICAgdmFsdWU6ICdSRURVQ0VfUEVSQ0VOVElMRV85NScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkVdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJzUwdGggcGVyY2VudGlsZScsXG4gICAgdmFsdWU6ICdSRURVQ0VfUEVSQ0VOVElMRV81MCcsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkVdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJzV0aCBwZXJjZW50aWxlJyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9QRVJDRU5USUxFXzA1JyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRV0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQUxJR05NRU5UX1BFUklPRFMgPSBbXG4gIHsgdGV4dDogJ2dyYWZhbmEgYXV0bycsIHZhbHVlOiAnZ3JhZmFuYS1hdXRvJyB9LFxuICB7IHRleHQ6ICdzdGFja2RyaXZlciBhdXRvJywgdmFsdWU6ICdzdGFja2RyaXZlci1hdXRvJywgaGlkZGVuOiB0cnVlIH0sXG4gIHsgdGV4dDogJ2Nsb3VkIG1vbml0b3JpbmcgYXV0bycsIHZhbHVlOiAnY2xvdWQtbW9uaXRvcmluZy1hdXRvJyB9LFxuICB7IHRleHQ6ICcxbScsIHZhbHVlOiAnKzYwcycgfSxcbiAgeyB0ZXh0OiAnMm0nLCB2YWx1ZTogJysxMjBzJyB9LFxuICB7IHRleHQ6ICc1bScsIHZhbHVlOiAnKzMwMHMnIH0sXG4gIHsgdGV4dDogJzEwbScsIHZhbHVlOiAnKzYwMHMnIH0sXG4gIHsgdGV4dDogJzMwbScsIHZhbHVlOiAnKzE4MDBzJyB9LFxuICB7IHRleHQ6ICcxaCcsIHZhbHVlOiAnKzM2MDBzJyB9LFxuICB7IHRleHQ6ICczaCcsIHZhbHVlOiAnKzcyMDBzJyB9LFxuICB7IHRleHQ6ICc2aCcsIHZhbHVlOiAnKzIxNjAwcycgfSxcbiAgeyB0ZXh0OiAnMWQnLCB2YWx1ZTogJys4NjQwMHMnIH0sXG4gIHsgdGV4dDogJzNkJywgdmFsdWU6ICcrMjU5MjAwcycgfSxcbiAgeyB0ZXh0OiAnMXcnLCB2YWx1ZTogJys2MDQ4MDBzJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFNZU1RFTV9MQUJFTFMgPSBbXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLmNsb3VkX2FjY291bnQnLFxuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy5uYW1lJyxcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMucmVnaW9uJyxcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMuc3RhdGUnLFxuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy5pbnN0YW5jZV9ncm91cCcsXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLm5vZGVfbmFtZScsXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLnNlcnZpY2VfbmFtZScsXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLnRvcF9sZXZlbF9jb250cm9sbGVyX3R5cGUnLFxuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy50b3BfbGV2ZWxfY29udHJvbGxlcl9uYW1lJyxcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMuY29udGFpbmVyX2ltYWdlJyxcbl07XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RPUlMgPSBbXG4gIHsgbGFiZWw6ICdTTEkgVmFsdWUnLCB2YWx1ZTogJ3NlbGVjdF9zbG9faGVhbHRoJyB9LFxuICB7IGxhYmVsOiAnU0xPIENvbXBsaWFuY2UnLCB2YWx1ZTogJ3NlbGVjdF9zbG9fY29tcGxpYW5jZScgfSxcbiAgeyBsYWJlbDogJ1NMTyBFcnJvciBCdWRnZXQgUmVtYWluaW5nJywgdmFsdWU6ICdzZWxlY3Rfc2xvX2J1ZGdldF9mcmFjdGlvbicgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9UWVBFUyA9IFtcbiAgeyBsYWJlbDogJ01ldHJpY3MnLCB2YWx1ZTogUXVlcnlUeXBlLk1FVFJJQ1MgfSxcbiAgeyBsYWJlbDogJ1NlcnZpY2UgTGV2ZWwgT2JqZWN0aXZlcyAoU0xPKScsIHZhbHVlOiBRdWVyeVR5cGUuU0xPIH0sXG5dO1xuIiwiaW1wb3J0IHsgY2h1bmssIGZsYXR0ZW4sIGlzU3RyaW5nLCBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGZyb20sIGxhc3RWYWx1ZUZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5UmVxdWVzdCxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBTY29wZWRWYXJzLFxuICBTZWxlY3RhYmxlVmFsdWUsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLCBnZXRCYWNrZW5kU3J2LCB0b0RhdGFRdWVyeVJlc3BvbnNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG5pbXBvcnQgeyBnZXRUaW1lU3J2LCBUaW1lU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9UaW1lU3J2JztcbmltcG9ydCB7XG4gIENsb3VkTW9uaXRvcmluZ09wdGlvbnMsXG4gIENsb3VkTW9uaXRvcmluZ1F1ZXJ5LFxuICBFZGl0b3JNb2RlLFxuICBGaWx0ZXIsXG4gIE1ldHJpY0Rlc2NyaXB0b3IsXG4gIFF1ZXJ5VHlwZSxcbiAgUG9zdFJlc3BvbnNlLFxuICBBZ2dyZWdhdGlvbixcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVN1cHBvcnQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlV2l0aEJhY2tlbmQ8XG4gIENsb3VkTW9uaXRvcmluZ1F1ZXJ5LFxuICBDbG91ZE1vbml0b3JpbmdPcHRpb25zXG4+IHtcbiAgYXV0aGVudGljYXRpb25UeXBlOiBzdHJpbmc7XG4gIGludGVydmFsTXM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzPENsb3VkTW9uaXRvcmluZ09wdGlvbnM+LFxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGltZVNydjogVGltZVNydiA9IGdldFRpbWVTcnYoKVxuICApIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uVHlwZSA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlIHx8ICdqd3QnO1xuICAgIHRoaXMudmFyaWFibGVzID0gbmV3IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlU3VwcG9ydCh0aGlzKTtcbiAgICB0aGlzLmludGVydmFsTXMgPSAwO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LmdldFZhcmlhYmxlcygpLm1hcCgodikgPT4gYCQke3YubmFtZX1gKTtcbiAgfVxuXG4gIHF1ZXJ5KHJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8Q2xvdWRNb25pdG9yaW5nUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIHJlcXVlc3QudGFyZ2V0cyA9IHJlcXVlc3QudGFyZ2V0cy5tYXAoKHQpID0+ICh7XG4gICAgICAuLi50aGlzLm1pZ3JhdGVRdWVyeSh0KSxcbiAgICAgIGludGVydmFsTXM6IHJlcXVlc3QuaW50ZXJ2YWxNcyxcbiAgICB9KSk7XG4gICAgcmV0dXJuIHN1cGVyLnF1ZXJ5KHJlcXVlc3QpO1xuICB9XG5cbiAgYXN5bmMgYW5ub3RhdGlvblF1ZXJ5KG9wdGlvbnM6IGFueSkge1xuICAgIGF3YWl0IHRoaXMuZW5zdXJlR0NFRGVmYXVsdFByb2plY3QoKTtcbiAgICBjb25zdCBhbm5vdGF0aW9uID0gb3B0aW9ucy5hbm5vdGF0aW9uO1xuICAgIGNvbnN0IHF1ZXJpZXMgPSBbXG4gICAgICB7XG4gICAgICAgIHJlZklkOiAnYW5ub3RhdGlvblF1ZXJ5JyxcbiAgICAgICAgdHlwZTogJ2Fubm90YXRpb25RdWVyeScsXG4gICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgIHZpZXc6ICdGVUxMJyxcbiAgICAgICAgY3Jvc3NTZXJpZXNSZWR1Y2VyOiAnUkVEVUNFX05PTkUnLFxuICAgICAgICBwZXJTZXJpZXNBbGlnbmVyOiAnQUxJR05fTk9ORScsXG4gICAgICAgIG1ldHJpY1R5cGU6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShhbm5vdGF0aW9uLnRhcmdldC5tZXRyaWNUeXBlLCBvcHRpb25zLnNjb3BlZFZhcnMgfHwge30pLFxuICAgICAgICB0aXRsZTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKGFubm90YXRpb24udGFyZ2V0LnRpdGxlLCBvcHRpb25zLnNjb3BlZFZhcnMgfHwge30pLFxuICAgICAgICB0ZXh0OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoYW5ub3RhdGlvbi50YXJnZXQudGV4dCwgb3B0aW9ucy5zY29wZWRWYXJzIHx8IHt9KSxcbiAgICAgICAgcHJvamVjdE5hbWU6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgICAgICBhbm5vdGF0aW9uLnRhcmdldC5wcm9qZWN0TmFtZSA/IGFubm90YXRpb24udGFyZ2V0LnByb2plY3ROYW1lIDogdGhpcy5nZXREZWZhdWx0UHJvamVjdCgpLFxuICAgICAgICAgIG9wdGlvbnMuc2NvcGVkVmFycyB8fCB7fVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXJzOiB0aGlzLmludGVycG9sYXRlRmlsdGVycyhhbm5vdGF0aW9uLnRhcmdldC5maWx0ZXJzIHx8IFtdLCBvcHRpb25zLnNjb3BlZFZhcnMpLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoPFBvc3RSZXNwb25zZT4oe1xuICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZyb206IG9wdGlvbnMucmFuZ2UuZnJvbS52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiBvcHRpb25zLnJhbmdlLnRvLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgcXVlcmllcyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhUXVlcnlSZXNwb25zZSA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2Uoe1xuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkZjogYW55ID0gW107XG4gICAgICAgICAgICBpZiAoZGF0YVF1ZXJ5UmVzcG9uc2UuZGF0YS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhUXVlcnlSZXNwb25zZS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhUXVlcnlSZXNwb25zZS5kYXRhW2ldLmZpZWxkc1swXS52YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgIGRmLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uOiBhbm5vdGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBEYXRlLnBhcnNlKGRhdGFRdWVyeVJlc3BvbnNlLmRhdGFbaV0uZmllbGRzWzBdLnZhbHVlcy5nZXQoaikpLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YVF1ZXJ5UmVzcG9uc2UuZGF0YVtpXS5maWVsZHNbMV0udmFsdWVzLmdldChqKSxcbiAgICAgICAgICAgICAgICAgICAgdGFnczogW10sXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGFRdWVyeVJlc3BvbnNlLmRhdGFbaV0uZmllbGRzWzNdLnZhbHVlcy5nZXQoaiksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZjtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGFwcGx5VGVtcGxhdGVWYXJpYWJsZXMoXG4gICAgeyBtZXRyaWNRdWVyeSwgcmVmSWQsIHF1ZXJ5VHlwZSwgc2xvUXVlcnkgfTogQ2xvdWRNb25pdG9yaW5nUXVlcnksXG4gICAgc2NvcGVkVmFyczogU2NvcGVkVmFyc1xuICApOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJlZklkLFxuICAgICAgaW50ZXJ2YWxNczogdGhpcy5pbnRlcnZhbE1zLFxuICAgICAgdHlwZTogJ3RpbWVTZXJpZXNRdWVyeScsXG4gICAgICBxdWVyeVR5cGUsXG4gICAgICBtZXRyaWNRdWVyeToge1xuICAgICAgICAuLi50aGlzLmludGVycG9sYXRlUHJvcHMobWV0cmljUXVlcnksIHNjb3BlZFZhcnMpLFxuICAgICAgICBwcm9qZWN0TmFtZTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKFxuICAgICAgICAgIG1ldHJpY1F1ZXJ5LnByb2plY3ROYW1lID8gbWV0cmljUXVlcnkucHJvamVjdE5hbWUgOiB0aGlzLmdldERlZmF1bHRQcm9qZWN0KCksXG4gICAgICAgICAgc2NvcGVkVmFyc1xuICAgICAgICApLFxuICAgICAgICBmaWx0ZXJzOiB0aGlzLmludGVycG9sYXRlRmlsdGVycyhtZXRyaWNRdWVyeS5maWx0ZXJzIHx8IFtdLCBzY29wZWRWYXJzKSxcbiAgICAgICAgZ3JvdXBCeXM6IHRoaXMuaW50ZXJwb2xhdGVHcm91cEJ5cyhtZXRyaWNRdWVyeS5ncm91cEJ5cyB8fCBbXSwgc2NvcGVkVmFycyksXG4gICAgICAgIHZpZXc6IG1ldHJpY1F1ZXJ5LnZpZXcgfHwgJ0ZVTEwnLFxuICAgICAgICBlZGl0b3JNb2RlOiBtZXRyaWNRdWVyeS5lZGl0b3JNb2RlLFxuICAgICAgfSxcbiAgICAgIHNsb1F1ZXJ5OiBzbG9RdWVyeSAmJiB0aGlzLmludGVycG9sYXRlUHJvcHMoc2xvUXVlcnksIHNjb3BlZFZhcnMpLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBnZXRMYWJlbHMobWV0cmljVHlwZTogc3RyaW5nLCByZWZJZDogc3RyaW5nLCBwcm9qZWN0TmFtZTogc3RyaW5nLCBhZ2dyZWdhdGlvbj86IEFnZ3JlZ2F0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJlZklkLFxuICAgICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgICAgcXVlcnlUeXBlOiBRdWVyeVR5cGUuTUVUUklDUyxcbiAgICAgICAgICBtZXRyaWNRdWVyeToge1xuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShwcm9qZWN0TmFtZSksXG4gICAgICAgICAgICBtZXRyaWNUeXBlOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UobWV0cmljVHlwZSksXG4gICAgICAgICAgICBncm91cEJ5czogdGhpcy5pbnRlcnBvbGF0ZUdyb3VwQnlzKGFnZ3JlZ2F0aW9uPy5ncm91cEJ5cyB8fCBbXSwge30pLFxuICAgICAgICAgICAgY3Jvc3NTZXJpZXNSZWR1Y2VyOiBhZ2dyZWdhdGlvbj8uY3Jvc3NTZXJpZXNSZWR1Y2VyID8/ICdSRURVQ0VfTk9ORScsXG4gICAgICAgICAgICB2aWV3OiAnSEVBREVSUycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICByYW5nZTogdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpLFxuICAgIH0gYXMgRGF0YVF1ZXJ5UmVxdWVzdDxDbG91ZE1vbml0b3JpbmdRdWVyeT47XG5cbiAgICBjb25zdCBxdWVyaWVzID0gb3B0aW9ucy50YXJnZXRzO1xuXG4gICAgaWYgKCFxdWVyaWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20ob2YoeyByZXN1bHRzOiBbXSB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBmcm9tKHRoaXMuZW5zdXJlR0NFRGVmYXVsdFByb2plY3QoKSkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8UG9zdFJlc3BvbnNlPih7XG4gICAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBmcm9tOiBvcHRpb25zLnJhbmdlLmZyb20udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHRvOiBvcHRpb25zLnJhbmdlLnRvLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgICBxdWVyaWVzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhUXVlcnlSZXNwb25zZSA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2Uoe1xuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBsYWJlbHMgPSBkYXRhUXVlcnlSZXNwb25zZT8uZGF0YVxuICAgICAgICAgICAgLm1hcCgoZikgPT4gZi5tZXRhPy5jdXN0b20/LmxhYmVscylcbiAgICAgICAgICAgIC5maWx0ZXIoKHApID0+ICEhcClcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgbGFiZWxzKSA9PiB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBsYWJlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY1trZXldKSB7XG4gICAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGFiZWxzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgIGFjY1trZXldLmFkZChsYWJlbHNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGxhYmVscykubWFwKChsOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgbFsxXSA9IEFycmF5LmZyb20obFsxXSk7XG4gICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBnZXRHQ0VEZWZhdWx0UHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShgZ2NlRGVmYXVsdFByb2plY3RgKTtcbiAgfVxuXG4gIGdldERlZmF1bHRQcm9qZWN0KCk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBkZWZhdWx0UHJvamVjdCwgYXV0aGVudGljYXRpb25UeXBlLCBnY2VEZWZhdWx0UHJvamVjdCB9ID0gdGhpcy5pbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhO1xuICAgIGlmIChhdXRoZW50aWNhdGlvblR5cGUgPT09ICdnY2UnKSB7XG4gICAgICByZXR1cm4gZ2NlRGVmYXVsdFByb2plY3QgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0IHx8ICcnO1xuICB9XG5cbiAgYXN5bmMgZW5zdXJlR0NFRGVmYXVsdFByb2plY3QoKSB7XG4gICAgY29uc3QgeyBhdXRoZW50aWNhdGlvblR5cGUsIGdjZURlZmF1bHRQcm9qZWN0IH0gPSB0aGlzLmluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGE7XG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uVHlwZSA9PT0gJ2djZScgJiYgIWdjZURlZmF1bHRQcm9qZWN0KSB7XG4gICAgICB0aGlzLmluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuZ2NlRGVmYXVsdFByb2plY3QgPSBhd2FpdCB0aGlzLmdldEdDRURlZmF1bHRQcm9qZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWU6IHN0cmluZyk6IFByb21pc2U8TWV0cmljRGVzY3JpcHRvcltdPiB7XG4gICAgaWYgKCFwcm9qZWN0TmFtZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKFxuICAgICAgYG1ldHJpY0Rlc2NyaXB0b3JzL3YzL3Byb2plY3RzLyR7dGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHByb2plY3ROYW1lKX0vbWV0cmljRGVzY3JpcHRvcnNgXG4gICAgKSBhcyBQcm9taXNlPE1ldHJpY0Rlc2NyaXB0b3JbXT47XG4gIH1cblxuICBhc3luYyBnZXRTTE9TZXJ2aWNlcyhwcm9qZWN0TmFtZTogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShgc2VydmljZXMvdjMvcHJvamVjdHMvJHt0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocHJvamVjdE5hbWUpfS9zZXJ2aWNlcz9wYWdlU2l6ZT0xMDAwYCk7XG4gIH1cblxuICBhc3luYyBnZXRTZXJ2aWNlTGV2ZWxPYmplY3RpdmVzKHByb2plY3ROYW1lOiBzdHJpbmcsIHNlcnZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+IHtcbiAgICBpZiAoIXNlcnZpY2VJZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgfVxuICAgIGxldCB7IHByb2plY3ROYW1lOiBwLCBzZXJ2aWNlSWQ6IHMgfSA9IHRoaXMuaW50ZXJwb2xhdGVQcm9wcyh7IHByb2plY3ROYW1lLCBzZXJ2aWNlSWQgfSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2UoYHNsby1zZXJ2aWNlcy92My9wcm9qZWN0cy8ke3B9L3NlcnZpY2VzLyR7c30vc2VydmljZUxldmVsT2JqZWN0aXZlc2ApO1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShgcHJvamVjdHNgKTtcbiAgfVxuXG4gIG1pZ3JhdGVRdWVyeShxdWVyeTogQ2xvdWRNb25pdG9yaW5nUXVlcnkpOiBDbG91ZE1vbml0b3JpbmdRdWVyeSB7XG4gICAgaWYgKCFxdWVyeS5oYXNPd25Qcm9wZXJ0eSgnbWV0cmljUXVlcnknKSkge1xuICAgICAgY29uc3QgeyBoaWRlLCByZWZJZCwgZGF0YXNvdXJjZSwga2V5LCBxdWVyeVR5cGUsIG1heExpbmVzLCBtZXRyaWMsIGludGVydmFsTXMsIHR5cGUsIC4uLnJlc3QgfSA9IHF1ZXJ5IGFzIGFueTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZklkLFxuICAgICAgICBpbnRlcnZhbE1zLFxuICAgICAgICB0eXBlLFxuICAgICAgICBoaWRlLFxuICAgICAgICBxdWVyeVR5cGU6IFF1ZXJ5VHlwZS5NRVRSSUNTLFxuICAgICAgICBtZXRyaWNRdWVyeToge1xuICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgdmlldzogcmVzdC52aWV3IHx8ICdGVUxMJyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGludGVycG9sYXRlUHJvcHM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KG9iamVjdDogVCwgc2NvcGVkVmFyczogU2NvcGVkVmFycyA9IHt9KTogVCB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iamVjdCkucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBba2V5XTogdmFsdWUgJiYgaXNTdHJpbmcodmFsdWUpID8gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHZhbHVlLCBzY29wZWRWYXJzKSA6IHZhbHVlLFxuICAgICAgfTtcbiAgICB9LCB7fSBhcyBUKTtcbiAgfVxuXG4gIGZpbHRlclF1ZXJ5KHF1ZXJ5OiBDbG91ZE1vbml0b3JpbmdRdWVyeSk6IGJvb2xlYW4ge1xuICAgIGlmIChxdWVyeS5oaWRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5LnF1ZXJ5VHlwZSAmJiBxdWVyeS5xdWVyeVR5cGUgPT09IFF1ZXJ5VHlwZS5TTE8gJiYgcXVlcnkuc2xvUXVlcnkpIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0b3JOYW1lLCBzZXJ2aWNlSWQsIHNsb0lkLCBwcm9qZWN0TmFtZSB9ID0gcXVlcnkuc2xvUXVlcnk7XG4gICAgICByZXR1cm4gISFzZWxlY3Rvck5hbWUgJiYgISFzZXJ2aWNlSWQgJiYgISFzbG9JZCAmJiAhIXByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGlmIChxdWVyeS5xdWVyeVR5cGUgJiYgcXVlcnkucXVlcnlUeXBlID09PSBRdWVyeVR5cGUuTUVUUklDUyAmJiBxdWVyeS5tZXRyaWNRdWVyeS5lZGl0b3JNb2RlID09PSBFZGl0b3JNb2RlLk1RTCkge1xuICAgICAgcmV0dXJuICEhcXVlcnkubWV0cmljUXVlcnkucHJvamVjdE5hbWUgJiYgISFxdWVyeS5tZXRyaWNRdWVyeS5xdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG1ldHJpY1R5cGUgfSA9IHF1ZXJ5Lm1ldHJpY1F1ZXJ5O1xuXG4gICAgcmV0dXJuICEhbWV0cmljVHlwZTtcbiAgfVxuXG4gIGludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzKHF1ZXJpZXM6IENsb3VkTW9uaXRvcmluZ1F1ZXJ5W10sIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpOiBDbG91ZE1vbml0b3JpbmdRdWVyeVtdIHtcbiAgICByZXR1cm4gcXVlcmllcy5tYXAoXG4gICAgICAocXVlcnkpID0+IHRoaXMuYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyh0aGlzLm1pZ3JhdGVRdWVyeShxdWVyeSksIHNjb3BlZFZhcnMpIGFzIENsb3VkTW9uaXRvcmluZ1F1ZXJ5XG4gICAgKTtcbiAgfVxuXG4gIGludGVycG9sYXRlRmlsdGVycyhmaWx0ZXJzOiBzdHJpbmdbXSwgc2NvcGVkVmFyczogU2NvcGVkVmFycykge1xuICAgIGNvbnN0IGNvbXBsZXRlRmlsdGVyOiBGaWx0ZXJbXSA9IGNodW5rKGZpbHRlcnMsIDQpXG4gICAgICAubWFwKChba2V5LCBvcGVyYXRvciwgdmFsdWUsIGNvbmRpdGlvbl0pID0+ICh7XG4gICAgICAgIGtleSxcbiAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICAuLi4oY29uZGl0aW9uICYmIHsgY29uZGl0aW9uIH0pLFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcblxuICAgIGNvbnN0IGZpbHRlckFycmF5ID0gZmxhdHRlbihcbiAgICAgIGNvbXBsZXRlRmlsdGVyLm1hcCgoeyBrZXksIG9wZXJhdG9yLCB2YWx1ZSwgY29uZGl0aW9uIH06IEZpbHRlcikgPT4gW1xuICAgICAgICB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uoa2V5LCBzY29wZWRWYXJzIHx8IHt9KSxcbiAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgIHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSh2YWx1ZSwgc2NvcGVkVmFycyB8fCB7fSwgKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPyBgKCR7dmFsdWUuam9pbignfCcpfSlgIDogdmFsdWU7XG4gICAgICAgIH0pLFxuICAgICAgICAuLi4oY29uZGl0aW9uID8gW2NvbmRpdGlvbl0gOiBbXSksXG4gICAgICBdKVxuICAgICk7XG5cbiAgICByZXR1cm4gZmlsdGVyQXJyYXkgfHwgW107XG4gIH1cblxuICBpbnRlcnBvbGF0ZUdyb3VwQnlzKGdyb3VwQnlzOiBzdHJpbmdbXSwgc2NvcGVkVmFyczoge30pOiBzdHJpbmdbXSB7XG4gICAgbGV0IGludGVycG9sYXRlZEdyb3VwQnlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIChncm91cEJ5cyB8fCBbXSkuZm9yRWFjaCgoZ2IpID0+IHtcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShnYiwgc2NvcGVkVmFycyB8fCB7fSwgJ2NzdicpLnNwbGl0KCcsJyk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcnBvbGF0ZWQpKSB7XG4gICAgICAgIGludGVycG9sYXRlZEdyb3VwQnlzID0gaW50ZXJwb2xhdGVkR3JvdXBCeXMuY29uY2F0KGludGVycG9sYXRlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnRlcnBvbGF0ZWRHcm91cEJ5cy5wdXNoKGludGVycG9sYXRlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGludGVycG9sYXRlZEdyb3VwQnlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiwgVGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGNodW5rLCBpbml0aWFsLCBzdGFydENhc2UsIHVuaXFCeSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEFHR1JFR0FUSU9OUywgQUxJR05NRU5UUywgU1lTVEVNX0xBQkVMUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBBbGlnbm1lbnRUeXBlcywgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljS2luZCwgUHJlcHJvY2Vzc29yVHlwZSwgVmFsdWVUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpO1xuXG5leHBvcnQgY29uc3QgZXh0cmFjdFNlcnZpY2VzRnJvbU1ldHJpY0Rlc2NyaXB0b3JzID0gKG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10pID0+XG4gIHVuaXFCeShtZXRyaWNEZXNjcmlwdG9ycywgJ3NlcnZpY2UnKTtcblxuZXhwb3J0IGNvbnN0IGdldE1ldHJpY1R5cGVzQnlTZXJ2aWNlID0gKG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10sIHNlcnZpY2U6IHN0cmluZykgPT5cbiAgbWV0cmljRGVzY3JpcHRvcnMuZmlsdGVyKChtOiBNZXRyaWNEZXNjcmlwdG9yKSA9PiBtLnNlcnZpY2UgPT09IHNlcnZpY2UpO1xuXG5leHBvcnQgY29uc3QgZ2V0TWV0cmljVHlwZXMgPSAoXG4gIG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10sXG4gIG1ldHJpY1R5cGU6IHN0cmluZyxcbiAgaW50ZXJwb2xhdGVkTWV0cmljVHlwZTogc3RyaW5nLFxuICBzZWxlY3RlZFNlcnZpY2U6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IG1ldHJpY1R5cGVzID0gZ2V0TWV0cmljVHlwZXNCeVNlcnZpY2UobWV0cmljRGVzY3JpcHRvcnMsIHNlbGVjdGVkU2VydmljZSkubWFwKChtKSA9PiAoe1xuICAgIHZhbHVlOiBtLnR5cGUsXG4gICAgbmFtZTogbS5kaXNwbGF5TmFtZSxcbiAgfSkpO1xuICBjb25zdCBtZXRyaWNUeXBlRXhpc3RJbkFycmF5ID0gbWV0cmljVHlwZXMuc29tZShcbiAgICAobTogeyB2YWx1ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfSkgPT4gbS52YWx1ZSA9PT0gaW50ZXJwb2xhdGVkTWV0cmljVHlwZVxuICApO1xuICBjb25zdCBtZXRyaWNUeXBlQnlTZXJ2aWNlID0gbWV0cmljVHlwZXMubGVuZ3RoID8gbWV0cmljVHlwZXNbMF0udmFsdWUgOiAnJztcbiAgY29uc3Qgc2VsZWN0ZWRNZXRyaWNUeXBlID0gbWV0cmljVHlwZUV4aXN0SW5BcnJheSA/IG1ldHJpY1R5cGUgOiBtZXRyaWNUeXBlQnlTZXJ2aWNlO1xuICByZXR1cm4ge1xuICAgIG1ldHJpY1R5cGVzLFxuICAgIHNlbGVjdGVkTWV0cmljVHlwZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGlnbm1lbnRPcHRpb25zQnlNZXRyaWMgPSAoXG4gIG1ldHJpY1ZhbHVlVHlwZTogc3RyaW5nLFxuICBtZXRyaWNLaW5kOiBzdHJpbmcsXG4gIHByZXByb2Nlc3Nvcj86IFByZXByb2Nlc3NvclR5cGVcbikgPT4ge1xuICBpZiAocHJlcHJvY2Vzc29yICYmIHByZXByb2Nlc3NvciA9PT0gUHJlcHJvY2Vzc29yVHlwZS5SYXRlKSB7XG4gICAgbWV0cmljS2luZCA9IE1ldHJpY0tpbmQuR0FVR0U7XG4gIH1cblxuICByZXR1cm4gIW1ldHJpY1ZhbHVlVHlwZVxuICAgID8gW11cbiAgICA6IEFMSUdOTUVOVFMuZmlsdGVyKChpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgaS52YWx1ZVR5cGVzLmluZGV4T2YobWV0cmljVmFsdWVUeXBlIGFzIFZhbHVlVHlwZXMpICE9PSAtMSAmJlxuICAgICAgICAgIGkubWV0cmljS2luZHMuaW5kZXhPZihtZXRyaWNLaW5kIGFzIE1ldHJpY0tpbmQpICE9PSAtMVxuICAgICAgICApO1xuICAgICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMgPSAodmFsdWVUeXBlOiBWYWx1ZVR5cGVzLCBtZXRyaWNLaW5kOiBNZXRyaWNLaW5kKSA9PiB7XG4gIHJldHVybiAhbWV0cmljS2luZFxuICAgID8gW11cbiAgICA6IEFHR1JFR0FUSU9OUy5maWx0ZXIoKGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGkudmFsdWVUeXBlcy5pbmRleE9mKHZhbHVlVHlwZSkgIT09IC0xICYmIGkubWV0cmljS2luZHMuaW5kZXhPZihtZXRyaWNLaW5kKSAhPT0gLTE7XG4gICAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMYWJlbEtleXMgPSBhc3luYyAoXG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UsXG4gIHNlbGVjdGVkTWV0cmljVHlwZTogc3RyaW5nLFxuICBwcm9qZWN0TmFtZTogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgcmVmSWQgPSAnaGFuZGxlTGFiZWxLZXlzUXVlcnknO1xuICBjb25zdCBsYWJlbHMgPSBhd2FpdCBkYXRhc291cmNlLmdldExhYmVscyhzZWxlY3RlZE1ldHJpY1R5cGUsIHJlZklkLCBwcm9qZWN0TmFtZSk7XG4gIHJldHVybiBbLi4uT2JqZWN0LmtleXMobGFiZWxzKSwgLi4uU1lTVEVNX0xBQkVMU107XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxpZ25tZW50UGlja2VyRGF0YSA9IChcbiAgdmFsdWVUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBWYWx1ZVR5cGVzLkRPVUJMRSxcbiAgbWV0cmljS2luZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gTWV0cmljS2luZC5HQVVHRSxcbiAgcGVyU2VyaWVzQWxpZ25lcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gQWxpZ25tZW50VHlwZXMuQUxJR05fTUVBTixcbiAgcHJlcHJvY2Vzc29yPzogUHJlcHJvY2Vzc29yVHlwZVxuKSA9PiB7XG4gIGNvbnN0IGFsaWduT3B0aW9ucyA9IGdldEFsaWdubWVudE9wdGlvbnNCeU1ldHJpYyh2YWx1ZVR5cGUhLCBtZXRyaWNLaW5kISwgcHJlcHJvY2Vzc29yISkubWFwKChvcHRpb24pID0+ICh7XG4gICAgLi4ub3B0aW9uLFxuICAgIGxhYmVsOiBvcHRpb24udGV4dCxcbiAgfSkpO1xuICBpZiAoIWFsaWduT3B0aW9ucy5zb21lKChvOiB7IHZhbHVlOiBzdHJpbmcgfSkgPT4gby52YWx1ZSA9PT0gdGVtcGxhdGVTcnYucmVwbGFjZShwZXJTZXJpZXNBbGlnbmVyKSkpIHtcbiAgICBwZXJTZXJpZXNBbGlnbmVyID0gYWxpZ25PcHRpb25zLmxlbmd0aCA+IDAgPyBhbGlnbk9wdGlvbnNbMF0udmFsdWUgOiBBbGlnbm1lbnRUeXBlcy5BTElHTl9NRUFOO1xuICB9XG4gIHJldHVybiB7IGFsaWduT3B0aW9ucywgcGVyU2VyaWVzQWxpZ25lciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsc1RvR3JvdXBlZE9wdGlvbnMgPSAoZ3JvdXBCeXM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IGdyb3VwcyA9IGdyb3VwQnlzLnJlZHVjZSgoYWNjOiBhbnksIGN1cnI6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFyciA9IGN1cnIuc3BsaXQoJy4nKS5tYXAoc3RhcnRDYXNlKTtcbiAgICBjb25zdCBncm91cCA9IChhcnIubGVuZ3RoID09PSAyID8gYXJyIDogaW5pdGlhbChhcnIpKS5qb2luKCcgJyk7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgdmFsdWU6IGN1cnIsXG4gICAgICBsYWJlbDogY3VycixcbiAgICB9O1xuICAgIGlmIChhY2NbZ3JvdXBdKSB7XG4gICAgICBhY2NbZ3JvdXBdID0gWy4uLmFjY1tncm91cF0sIG9wdGlvbl07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1tncm91cF0gPSBbb3B0aW9uXTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZ3JvdXBzKS5tYXAoKFtsYWJlbCwgb3B0aW9uc10pID0+ICh7IGxhYmVsLCBvcHRpb25zLCBleHBhbmRlZDogdHJ1ZSB9KSwgW10pO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ0FycmF5VG9GaWx0ZXJzID0gKGZpbHRlckFycmF5OiBzdHJpbmdbXSkgPT5cbiAgY2h1bmsoZmlsdGVyQXJyYXksIDQpLm1hcCgoW2tleSwgb3BlcmF0b3IsIHZhbHVlLCBjb25kaXRpb24gPSAnQU5EJ10pID0+ICh7XG4gICAga2V5LFxuICAgIG9wZXJhdG9yLFxuICAgIHZhbHVlLFxuICAgIGNvbmRpdGlvbixcbiAgfSkpO1xuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IENvbmZpZ0VkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9Db25maWdFZGl0b3IvQ29uZmlnRWRpdG9yJztcblxuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0NoZWF0U2hlZXQgZnJvbSAnLi9jb21wb25lbnRzL0Nsb3VkTW9uaXRvcmluZ0NoZWF0U2hlZXQnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nQW5ub3RhdGlvbnNRdWVyeUN0cmwgfSBmcm9tICcuL2Fubm90YXRpb25zX3F1ZXJ5X2N0cmwnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9WYXJpYWJsZVF1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IENsb3VkTW9uaXRvcmluZ1F1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbjxDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlLCBDbG91ZE1vbml0b3JpbmdRdWVyeT4oQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5RWRpdG9ySGVscChDbG91ZE1vbml0b3JpbmdDaGVhdFNoZWV0KVxuICAuc2V0UXVlcnlFZGl0b3IoUXVlcnlFZGl0b3IpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKVxuICAuc2V0QW5ub3RhdGlvblF1ZXJ5Q3RybChDbG91ZE1vbml0b3JpbmdBbm5vdGF0aW9uc1F1ZXJ5Q3RybClcbiAgLnNldFZhcmlhYmxlUXVlcnlFZGl0b3IoQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvcik7XG4iLCJpbXBvcnQgeyBEYXRhUXVlcnksIERhdGFTb3VyY2VKc29uRGF0YSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBHb29nbGVBdXRoVHlwZSB9IGZyb20gJ0BncmFmYW5hL2dvb2dsZS1zZGsnO1xuXG5leHBvcnQgY29uc3QgYXV0aFR5cGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBbXG4gIHsgbGFiZWw6ICdHb29nbGUgSldUIEZpbGUnLCB2YWx1ZTogR29vZ2xlQXV0aFR5cGUuSldUIH0sXG4gIHsgbGFiZWw6ICdHQ0UgRGVmYXVsdCBTZXJ2aWNlIEFjY291bnQnLCB2YWx1ZTogR29vZ2xlQXV0aFR5cGUuR0NFIH0sXG5dO1xuXG5leHBvcnQgZW51bSBNZXRyaWNGaW5kUXVlcnlUeXBlcyB7XG4gIFByb2plY3RzID0gJ3Byb2plY3RzJyxcbiAgU2VydmljZXMgPSAnc2VydmljZXMnLFxuICBEZWZhdWx0UHJvamVjdCA9ICdkZWZhdWx0UHJvamVjdCcsXG4gIE1ldHJpY1R5cGVzID0gJ21ldHJpY1R5cGVzJyxcbiAgTGFiZWxLZXlzID0gJ2xhYmVsS2V5cycsXG4gIExhYmVsVmFsdWVzID0gJ2xhYmVsVmFsdWVzJyxcbiAgUmVzb3VyY2VUeXBlcyA9ICdyZXNvdXJjZVR5cGVzJyxcbiAgQWdncmVnYXRpb25zID0gJ2FnZ3JlZ2F0aW9ucycsXG4gIEFsaWduZXJzID0gJ2FsaWduZXJzJyxcbiAgQWxpZ25tZW50UGVyaW9kcyA9ICdhbGlnbm1lbnRQZXJpb2RzJyxcbiAgU2VsZWN0b3JzID0gJ3NlbGVjdG9ycycsXG4gIFNMT1NlcnZpY2VzID0gJ3Nsb1NlcnZpY2VzJyxcbiAgU0xPID0gJ3NsbycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSBleHRlbmRzIERhdGFRdWVyeSB7XG4gIHNlbGVjdGVkUXVlcnlUeXBlOiBzdHJpbmc7XG4gIHNlbGVjdGVkU2VydmljZTogc3RyaW5nO1xuICBzZWxlY3RlZE1ldHJpY1R5cGU6IHN0cmluZztcbiAgc2VsZWN0ZWRTTE9TZXJ2aWNlOiBzdHJpbmc7XG4gIGxhYmVsS2V5OiBzdHJpbmc7XG4gIHByb2plY3RzOiBTZWxlY3RhYmxlVmFsdWVbXTtcbiAgc2xvU2VydmljZXM6IFNlbGVjdGFibGVWYWx1ZVtdO1xuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhYmxlUXVlcnlEYXRhIHtcbiAgc2VsZWN0ZWRRdWVyeVR5cGU6IHN0cmluZztcbiAgbWV0cmljRGVzY3JpcHRvcnM6IE1ldHJpY0Rlc2NyaXB0b3JbXTtcbiAgc2VsZWN0ZWRTZXJ2aWNlOiBzdHJpbmc7XG4gIHNlbGVjdGVkTWV0cmljVHlwZTogc3RyaW5nO1xuICBzZWxlY3RlZFNMT1NlcnZpY2U6IHN0cmluZztcbiAgbGFiZWxzOiBzdHJpbmdbXTtcbiAgbGFiZWxLZXk6IHN0cmluZztcbiAgbWV0cmljVHlwZXM6IEFycmF5PHsgdmFsdWU6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0+O1xuICBzZXJ2aWNlczogU2VsZWN0YWJsZVZhbHVlW107XG4gIHByb2plY3RzOiBTZWxlY3RhYmxlVmFsdWVbXTtcbiAgc2xvU2VydmljZXM6IFNlbGVjdGFibGVWYWx1ZVtdO1xuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0aW9uIHtcbiAgY3Jvc3NTZXJpZXNSZWR1Y2VyPzogc3RyaW5nO1xuICBncm91cEJ5cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZW51bSBRdWVyeVR5cGUge1xuICBNRVRSSUNTID0gJ21ldHJpY3MnLFxuICBTTE8gPSAnc2xvJyxcbn1cblxuZXhwb3J0IGVudW0gRWRpdG9yTW9kZSB7XG4gIFZpc3VhbCA9ICd2aXN1YWwnLFxuICBNUUwgPSAnbXFsJyxcbn1cblxuZXhwb3J0IGVudW0gUHJlcHJvY2Vzc29yVHlwZSB7XG4gIE5vbmUgPSAnbm9uZScsXG4gIFJhdGUgPSAncmF0ZScsXG4gIERlbHRhID0gJ2RlbHRhJyxcbn1cblxuZXhwb3J0IGVudW0gTWV0cmljS2luZCB7XG4gIE1FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEID0gJ01FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEJyxcbiAgR0FVR0UgPSAnR0FVR0UnLFxuICBERUxUQSA9ICdERUxUQScsXG4gIENVTVVMQVRJVkUgPSAnQ1VNVUxBVElWRScsXG59XG5cbmV4cG9ydCBlbnVtIFZhbHVlVHlwZXMge1xuICBWQUxVRV9UWVBFX1VOU1BFQ0lGSUVEID0gJ1ZBTFVFX1RZUEVfVU5TUEVDSUZJRUQnLFxuICBCT09MID0gJ0JPT0wnLFxuICBJTlQ2NCA9ICdJTlQ2NCcsXG4gIERPVUJMRSA9ICdET1VCTEUnLFxuICBTVFJJTkcgPSAnU1RSSU5HJyxcbiAgRElTVFJJQlVUSU9OID0gJ0RJU1RSSUJVVElPTicsXG4gIE1PTkVZID0gJ01PTkVZJyxcbn1cblxuZXhwb3J0IGVudW0gQWxpZ25tZW50VHlwZXMge1xuICBBTElHTl9ERUxUQSA9ICdBTElHTl9ERUxUQScsXG4gIEFMSUdOX1JBVEUgPSAnQUxJR05fUkFURScsXG4gIEFMSUdOX0lOVEVSUE9MQVRFID0gJ0FMSUdOX0lOVEVSUE9MQVRFJyxcbiAgQUxJR05fTkVYVF9PTERFUiA9ICdBTElHTl9ORVhUX09MREVSJyxcbiAgQUxJR05fTUlOID0gJ0FMSUdOX01JTicsXG4gIEFMSUdOX01BWCA9ICdBTElHTl9NQVgnLFxuICBBTElHTl9NRUFOID0gJ0FMSUdOX01FQU4nLFxuICBBTElHTl9DT1VOVCA9ICdBTElHTl9DT1VOVCcsXG4gIEFMSUdOX1NVTSA9ICdBTElHTl9TVU0nLFxuICBBTElHTl9TVERERVYgPSAnQUxJR05fU1REREVWJyxcbiAgQUxJR05fQ09VTlRfVFJVRSA9ICdBTElHTl9DT1VOVF9UUlVFJyxcbiAgQUxJR05fQ09VTlRfRkFMU0UgPSAnQUxJR05fQ09VTlRfRkFMU0UnLFxuICBBTElHTl9GUkFDVElPTl9UUlVFID0gJ0FMSUdOX0ZSQUNUSU9OX1RSVUUnLFxuICBBTElHTl9QRVJDRU5USUxFXzk5ID0gJ0FMSUdOX1BFUkNFTlRJTEVfOTknLFxuICBBTElHTl9QRVJDRU5USUxFXzk1ID0gJ0FMSUdOX1BFUkNFTlRJTEVfOTUnLFxuICBBTElHTl9QRVJDRU5USUxFXzUwID0gJ0FMSUdOX1BFUkNFTlRJTEVfNTAnLFxuICBBTElHTl9QRVJDRU5USUxFXzA1ID0gJ0FMSUdOX1BFUkNFTlRJTEVfMDUnLFxuICBBTElHTl9QRVJDRU5UX0NIQU5HRSA9ICdBTElHTl9QRVJDRU5UX0NIQU5HRScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVF1ZXJ5IHtcbiAgcHJvamVjdE5hbWU6IHN0cmluZztcbiAgcGVyU2VyaWVzQWxpZ25lcj86IHN0cmluZztcbiAgYWxpZ25tZW50UGVyaW9kPzogc3RyaW5nO1xuICBhbGlhc0J5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldHJpY1F1ZXJ5IGV4dGVuZHMgQmFzZVF1ZXJ5IHtcbiAgZWRpdG9yTW9kZTogRWRpdG9yTW9kZTtcbiAgbWV0cmljVHlwZTogc3RyaW5nO1xuICBjcm9zc1Nlcmllc1JlZHVjZXI6IHN0cmluZztcbiAgZ3JvdXBCeXM/OiBzdHJpbmdbXTtcbiAgZmlsdGVycz86IHN0cmluZ1tdO1xuICBtZXRyaWNLaW5kPzogTWV0cmljS2luZDtcbiAgdmFsdWVUeXBlPzogc3RyaW5nO1xuICB2aWV3Pzogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nO1xuICBwcmVwcm9jZXNzb3I/OiBQcmVwcm9jZXNzb3JUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNMT1F1ZXJ5IGV4dGVuZHMgQmFzZVF1ZXJ5IHtcbiAgc2VsZWN0b3JOYW1lOiBzdHJpbmc7XG4gIHNlcnZpY2VJZDogc3RyaW5nO1xuICBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuICBzbG9JZDogc3RyaW5nO1xuICBzbG9OYW1lOiBzdHJpbmc7XG4gIGdvYWw/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRNb25pdG9yaW5nUXVlcnkgZXh0ZW5kcyBEYXRhUXVlcnkge1xuICBkYXRhc291cmNlSWQ/OiBudW1iZXI7IC8vIFNob3VsZCBub3QgYmUgbmVjZXNzYXJ5IGFueW1vcmVcbiAgcXVlcnlUeXBlOiBRdWVyeVR5cGU7XG4gIG1ldHJpY1F1ZXJ5OiBNZXRyaWNRdWVyeTtcbiAgc2xvUXVlcnk/OiBTTE9RdWVyeTtcbiAgaW50ZXJ2YWxNczogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRNb25pdG9yaW5nT3B0aW9ucyBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIGRlZmF1bHRQcm9qZWN0Pzogc3RyaW5nO1xuICBnY2VEZWZhdWx0UHJvamVjdD86IHN0cmluZztcbiAgYXV0aGVudGljYXRpb25UeXBlOiBHb29nbGVBdXRoVHlwZTtcbiAgY2xpZW50RW1haWw/OiBzdHJpbmc7XG4gIHRva2VuVXJpPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkTW9uaXRvcmluZ1NlY3VyZUpzb25EYXRhIHtcbiAgcHJpdmF0ZUtleT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbm5vdGF0aW9uVGFyZ2V0IHtcbiAgcHJvamVjdE5hbWU6IHN0cmluZztcbiAgbWV0cmljVHlwZTogc3RyaW5nO1xuICByZWZJZDogc3RyaW5nO1xuICBmaWx0ZXJzOiBzdHJpbmdbXTtcbiAgbWV0cmljS2luZDogTWV0cmljS2luZDtcbiAgdmFsdWVUeXBlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeU1ldGEge1xuICBhbGlnbm1lbnRQZXJpb2Q6IHN0cmluZztcbiAgcmF3UXVlcnk6IHN0cmluZztcbiAgcmF3UXVlcnlTdHJpbmc6IHN0cmluZztcbiAgbWV0cmljTGFiZWxzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH07XG4gIHJlc291cmNlTGFiZWxzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH07XG4gIHJlc291cmNlVHlwZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldHJpY0Rlc2NyaXB0b3Ige1xuICB2YWx1ZVR5cGU6IHN0cmluZztcbiAgbWV0cmljS2luZDogTWV0cmljS2luZDtcbiAgdHlwZTogc3RyaW5nO1xuICB1bml0OiBzdHJpbmc7XG4gIHNlcnZpY2U6IHN0cmluZztcbiAgc2VydmljZVNob3J0TmFtZTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnQge1xuICB0eXBlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyIHtcbiAga2V5OiBzdHJpbmc7XG4gIG9wZXJhdG9yOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNvbmRpdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21NZXRhRGF0YSB7XG4gIHBlclNlcmllc0FsaWduZXI/OiBzdHJpbmc7XG4gIGFsaWdubWVudFBlcmlvZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3N0UmVzcG9uc2Uge1xuICByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuIiwiaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1c3RvbVZhcmlhYmxlU3VwcG9ydCwgRGF0YVF1ZXJ5UmVxdWVzdCwgRGF0YVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnkgZnJvbSAnLi9DbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnknO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9WYXJpYWJsZVF1ZXJ5RWRpdG9yJztcblxuZXhwb3J0IGNsYXNzIENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlU3VwcG9ydCBleHRlbmRzIEN1c3RvbVZhcmlhYmxlU3VwcG9ydDxcbiAgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSxcbiAgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeVxuPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWV0cmljRmluZFF1ZXJ5OiBDbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1ldHJpY0ZpbmRRdWVyeSA9IG5ldyBDbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnkoZGF0YXNvdXJjZSk7XG4gICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGVkaXRvciA9IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnlFZGl0b3I7XG5cbiAgcXVlcnkocmVxdWVzdDogRGF0YVF1ZXJ5UmVxdWVzdDxDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCBleGVjdXRlT2JzZXJ2YWJsZSA9IGZyb20odGhpcy5tZXRyaWNGaW5kUXVlcnkuZXhlY3V0ZShyZXF1ZXN0LnRhcmdldHNbMF0pKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzLmRhdGFzb3VyY2UuZW5zdXJlR0NFRGVmYXVsdFByb2plY3QoKSkucGlwZShcbiAgICAgIG1lcmdlTWFwKCgpID0+IGV4ZWN1dGVPYnNlcnZhYmxlKSxcbiAgICAgIG1hcCgoZGF0YSkgPT4gKHsgZGF0YSB9KSlcbiAgICApO1xuICB9XG59XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZGF0YSA9IHJlcXVpcmUoJ0BncmFmYW5hL2RhdGEnKTtcbnZhciB1aSA9IHJlcXVpcmUoJ0BncmFmYW5hL3VpJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGxvZGFzaCA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShSZWFjdCk7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxuXG52YXIgVEVTVF9JRFMgPSB7XHJcbiAgICBoZWxwQm94OiAnQ29uZmlndXJhdGlvbiBoZWxwIGJveCcsXHJcbiAgICBkcm9wWm9uZTogJ0NvbmZpZ3VyYXRpb24gZHJvcCB6b25lJyxcclxuICAgIHBhc3RlQXJlYTogJ0NvbmZpZ3VyYXRpb24gdGV4dCBhcmVhJyxcclxuICAgIHBhc3RlSnd0QnV0dG9uOiAnUGFzdGUgSldUIGJ1dHRvbicsXHJcbiAgICByZXNldEp3dEJ1dHRvbjogJ1Jlc2V0IEpXVCBidXR0b24nLFxyXG4gICAgand0Rm9ybTogJ0pXVCBmb3JtJyxcclxuICAgIGF1dGhUeXBlQnV0dG9uSldUOiAnSldUIGJ1dHRvbicsXHJcbiAgICBhdXRoVHlwZUJ1dHRvbkdDRTogJ0dDRSBidXR0b24nLFxyXG59O1xuXG52YXIgY29uZmlnS2V5cyA9IFsncHJpdmF0ZV9rZXknLCAndG9rZW5fdXJpJywgJ2NsaWVudF9lbWFpbCcsICdwcm9qZWN0X2lkJ107XHJcbnZhciBJTlZBTElEX0pXVF9UT0tFTl9FUlJPUiA9ICdJbnZhbGlkIEpXVCB0b2tlbic7XHJcbnZhciBKV1RDb25maWdFZGl0b3IgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBvbkNoYW5nZSA9IF9hLm9uQ2hhbmdlO1xyXG4gICAgdmFyIF9iID0gX19yZWFkKFJlYWN0LnVzZVN0YXRlKCksIDIpLCBlcnJvciA9IF9iWzBdLCBzZXRFcnJvciA9IF9iWzFdO1xyXG4gICAgdmFyIF9jID0gX19yZWFkKFJlYWN0LnVzZVN0YXRlKG51bGwpLCAyKSwgaXNQYXN0aW5nID0gX2NbMF0sIHNldElzUGFzdGluZyA9IF9jWzFdO1xyXG4gICAgdmFyIHRoZW1lID0gdWkudXNlVGhlbWUyKCk7XHJcbiAgICB2YXIgb25QYXN0ZUNsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgICAgICBzZXRJc1Bhc3RpbmcodHJ1ZSk7XHJcbiAgICB9LCBbc2V0SXNQYXN0aW5nXSk7XHJcbiAgICB2YXIgb25VcGxvYWRDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgc2V0SXNQYXN0aW5nKG51bGwpO1xyXG4gICAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgfSwgW3NldElzUGFzdGluZ10pO1xyXG4gICAgdmFyIHJlYWRBbmRWYWxpZGF0ZUpXVCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHZhciBqd3QgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBqd3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoSU5WQUxJRF9KV1RfVE9LRU5fRVJST1IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0gdmFsaWRhdGVKV1Qoand0KTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByaXZhdGVLZXk6IGp3dC5wcml2YXRlX2tleSxcclxuICAgICAgICAgICAgICAgICAgICB0b2tlblVyaTogand0LnRva2VuX3VyaSxcclxuICAgICAgICAgICAgICAgICAgICBjbGllbnRFbWFpbDogand0LmNsaWVudF9lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IGp3dC5wcm9qZWN0X2lkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcih2YWxpZGF0aW9uLmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXRFcnJvciwgb25DaGFuZ2VdKTtcclxuICAgIHJldHVybiAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkLCB7IGxhYmVsOiBcIkpXVCB0b2tlblwiLCBpbnZhbGlkOiBCb29sZWFuKGVycm9yKSwgZGVzY3JpcHRpb246IGlzUGFzdGluZyA/ICdQYXN0ZSBKV1QgdG9rZW4gYmVsb3cnIDogJ1VwbG9hZCBvciBwYXN0ZSBHb29nbGUgSldUIHRva2VuJywgZXJyb3I6IGVycm9yIH0sXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGlzUGFzdGluZyAhPT0gdHJ1ZSAmJiAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBcImRhdGEtdGVzdGlkXCI6IFRFU1RfSURTLmRyb3Bab25lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmlsZURyb3B6b25lLCB7IG9wdGlvbnM6IHsgbXVsdGlwbGU6IGZhbHNlLCBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCByZWFkQXM6IFwicmVhZEFzVGV4dFwiLCBvbkxvYWQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRBbmRWYWxpZGF0ZUpXVChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQYXN0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInBcIiwgeyBzdHlsZTogeyBtYXJnaW46IDAsIGZvbnRTaXplOiBcIlwiICsgdGhlbWUudHlwb2dyYXBoeS5oNC5mb250U2l6ZSwgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRyb3AgdGhlIEdvb2dsZSBKV1QgZmlsZSBoZXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkxpbmtCdXR0b24sIHsgZmlsbDogXCJvdXRsaW5lXCIgfSwgXCJDbGljayB0byBicm93c2UgZmlsZXNcIikpKSkpLFxyXG4gICAgICAgICAgICAgICAgaXNQYXN0aW5nICYmIChcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLlRleHRBcmVhLCB7IFwiZGF0YS10ZXN0aWRcIjogVEVTVF9JRFMucGFzdGVBcmVhLCBhdXRvRm9jdXM6IHRydWUsIGludmFsaWQ6IEJvb2xlYW4oZXJyb3IpLCBwbGFjZWhvbGRlcjogXCJQYXN0ZSBHb29nbGUgSldUIHRva2VuIGhlcmVcIiwgb25CbHVyOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gcmVhZEFuZFZhbGlkYXRlSldUKGUuY3VycmVudFRhcmdldC52YWx1ZSk7IH0sIHJvd3M6IDEyIH0pKSkpLFxyXG4gICAgICAgICFpc1Bhc3RpbmcgJiYgKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkLCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5CdXR0b24sIHsgXCJkYXRhLXRlc3RpZFwiOiBURVNUX0lEUy5wYXN0ZUp3dEJ1dHRvbiwgdHlwZTogXCJidXR0b25cIiwgZmlsbDogXCJvdXRsaW5lXCIsIHN0eWxlOiB7IGNvbG9yOiBcIlwiICsgdGhlbWUuY29sb3JzLnByaW1hcnkudGV4dCB9LCBvbkNsaWNrOiBvblBhc3RlQ2xpY2sgfSwgXCJQYXN0ZSBKV1QgVG9rZW5cIikpKSxcclxuICAgICAgICBpc1Bhc3RpbmcgJiYgZXJyb3IgJiYgKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkLCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5CdXR0b24sIHsgdHlwZTogXCJidXR0b25cIiwgZmlsbDogXCJvdXRsaW5lXCIsIHN0eWxlOiB7IGNvbG9yOiBcIlwiICsgdGhlbWUuY29sb3JzLnByaW1hcnkudGV4dCB9LCBvbkNsaWNrOiBvblVwbG9hZENsaWNrIH0sIFwiVXBsb2FkIEpXVCBUb2tlblwiKSkpKSk7XHJcbn07XHJcbnZhciB2YWxpZGF0ZUpXVCA9IGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICBpZiAoIWxvZGFzaC5pc09iamVjdChqc29uKSkge1xyXG4gICAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgSldUIHRva2VuJyB9O1xyXG4gICAgfVxyXG4gICAgdmFyIG1pc3NpbmdLZXlzID0gY29uZmlnS2V5cy5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gIWpzb25ba2V5XTsgfSk7XHJcbiAgICBpZiAobWlzc2luZ0tleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGZhbHNlLCBlcnJvcjogXCJNaXNzaW5nIGtleXM6IFwiICsgbWlzc2luZ0tleXMuam9pbignLCAnKSB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgaXNWYWxpZDogdHJ1ZSB9O1xyXG59O1xuXG52YXIgSldURm9ybSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBvblJlc2V0ID0gX2Eub25SZXNldCwgb25DaGFuZ2UgPSBfYS5vbkNoYW5nZTtcclxuICAgIHZhciBvblJlc2V0UHJlc3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvblJlc2V0KG51bGwpOyB9O1xyXG4gICAgcmV0dXJuIChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IFwiZGF0YS10ZXN0aWRcIjogVEVTVF9JRFMuand0Rm9ybSB9LFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkLCB7IGxhYmVsOiBcIlByb2plY3QgSURcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5JbnB1dCwgeyBpZDogXCJkZWZhdWx0UHJvamVjdFwiLCB3aWR0aDogNjAsIHZhbHVlOiBvcHRpb25zLmRlZmF1bHRQcm9qZWN0IHx8ICcnLCBvbkNoYW5nZTogb25DaGFuZ2UoJ2RlZmF1bHRQcm9qZWN0JykgfSkpLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkLCB7IGxhYmVsOiBcIkNsaWVudCBlbWFpbFwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLklucHV0LCB7IHdpZHRoOiA2MCwgaWQ6IFwiY2xpZW50RW1haWxcIiwgdmFsdWU6IG9wdGlvbnMuY2xpZW50RW1haWwgfHwgJycsIG9uQ2hhbmdlOiBvbkNoYW5nZSgnY2xpZW50RW1haWwnKSB9KSksXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGQsIHsgbGFiZWw6IFwiVG9rZW4gVVJJXCIgfSxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuSW5wdXQsIHsgd2lkdGg6IDYwLCBpZDogXCJ0b2tlblVyaVwiLCB2YWx1ZTogb3B0aW9ucy50b2tlblVyaSB8fCAnJywgb25DaGFuZ2U6IG9uQ2hhbmdlKCd0b2tlblVyaScpIH0pKSxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZCwgeyBsYWJlbDogXCJQcml2YXRlIGtleVwiLCBkaXNhYmxlZDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5JbnB1dCwgeyB3aWR0aDogNjAsIGlkOiBcInByaXZhdGVLZXlcIiwgcmVhZE9ubHk6IHRydWUsIHBsYWNlaG9sZGVyOiBcIlByaXZhdGUga2V5IGNvbmZpZ3VyZWRcIiwgYWRkb25BZnRlcjogUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuVG9vbHRpcCwgeyBjb250ZW50OiBcIkNsaWNrIHRvIGNsZWFyIHRoZSB1cGxvYWRlZCBKV1QgdG9rZW4gYW5kIHVwbG9hZCBhIG5ldyBvbmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkJ1dHRvbiwgeyBcImRhdGEtdGVzdGlkXCI6IFRFU1RfSURTLnJlc2V0Snd0QnV0dG9uLCBpY29uOiBcInN5bmNcIiwgc2l6ZTogXCJ4c1wiLCBvbkNsaWNrOiBvblJlc2V0UHJlc3MsIGZpbGw6IFwib3V0bGluZVwiIH0sIFwiUmVzZXQgdG9rZW5cIikpIH0pKSkpO1xyXG59O1xuXG5leHBvcnRzLkdvb2dsZUF1dGhUeXBlID0gdm9pZCAwO1xyXG4oZnVuY3Rpb24gKEdvb2dsZUF1dGhUeXBlKSB7XHJcbiAgICBHb29nbGVBdXRoVHlwZVtcIkpXVFwiXSA9IFwiand0XCI7XHJcbiAgICBHb29nbGVBdXRoVHlwZVtcIkdDRVwiXSA9IFwiZ2NlXCI7XHJcbn0pKGV4cG9ydHMuR29vZ2xlQXV0aFR5cGUgfHwgKGV4cG9ydHMuR29vZ2xlQXV0aFR5cGUgPSB7fSkpO1xuXG52YXIgR09PR0xFX0FVVEhfVFlQRV9PUFRJT05TID0gW1xyXG4gICAgeyBsYWJlbDogJ0dvb2dsZSBKV1QgRmlsZScsIHZhbHVlOiBleHBvcnRzLkdvb2dsZUF1dGhUeXBlLkpXVCwgYXJpYUxhYmVsOiBURVNUX0lEUy5hdXRoVHlwZUJ1dHRvbkpXVCB9LFxyXG4gICAgeyBsYWJlbDogJ0dDRSBEZWZhdWx0IFNlcnZpY2UgQWNjb3VudCcsIHZhbHVlOiBleHBvcnRzLkdvb2dsZUF1dGhUeXBlLkdDRSwgYXJpYUxhYmVsOiBURVNUX0lEUy5hdXRoVHlwZUJ1dHRvbkdDRSB9LFxyXG5dO1xuXG52YXIgQ29ubmVjdGlvbkNvbmZpZyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgPSBwcm9wcy5vbk9wdGlvbnNDaGFuZ2U7XHJcbiAgICB2YXIganNvbkRhdGEgPSBvcHRpb25zLmpzb25EYXRhLCBzZWN1cmVKc29uRmllbGRzID0gb3B0aW9ucy5zZWN1cmVKc29uRmllbGRzLCBzZWN1cmVKc29uRGF0YSA9IG9wdGlvbnMuc2VjdXJlSnNvbkRhdGE7XHJcbiAgICBpZiAoIWpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSkge1xyXG4gICAgICAgIGpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSA9IGV4cG9ydHMuR29vZ2xlQXV0aFR5cGUuSldUO1xyXG4gICAgfVxyXG4gICAgdmFyIGlzSldUID0ganNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlID09PSBleHBvcnRzLkdvb2dsZUF1dGhUeXBlLkpXVCB8fCBqc29uRGF0YS5hdXRoZW50aWNhdGlvblR5cGUgPT09IHVuZGVmaW5lZDtcclxuICAgIHZhciBvbkF1dGhUeXBlQ2hhbmdlID0gZnVuY3Rpb24gKGF1dGhlbnRpY2F0aW9uVHlwZSkge1xyXG4gICAgICAgIG9uT3B0aW9uc0NoYW5nZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsganNvbkRhdGE6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLmpzb25EYXRhKSwgeyBhdXRoZW50aWNhdGlvblR5cGU6IGF1dGhlbnRpY2F0aW9uVHlwZSB9KSB9KSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGhhc0pXVENvbmZpZ3VyZWQgPSBCb29sZWFuKHNlY3VyZUpzb25GaWVsZHMgJiZcclxuICAgICAgICBzZWN1cmVKc29uRmllbGRzLnByaXZhdGVLZXkgJiZcclxuICAgICAgICBqc29uRGF0YS5jbGllbnRFbWFpbCAmJlxyXG4gICAgICAgIGpzb25EYXRhLmRlZmF1bHRQcm9qZWN0ICYmXHJcbiAgICAgICAganNvbkRhdGEudG9rZW5VcmkpO1xyXG4gICAgdmFyIG9uUmVzZXRBcGlLZXkgPSBmdW5jdGlvbiAoanNvbkRhdGEpIHtcclxuICAgICAgICB2YXIgbmV4dFNlY3VyZUpzb25EYXRhID0gX19hc3NpZ24oe30sIHNlY3VyZUpzb25EYXRhKTtcclxuICAgICAgICB2YXIgbmV4dEpzb25EYXRhID0gIWpzb25EYXRhID8gX19hc3NpZ24oe30sIG9wdGlvbnMuanNvbkRhdGEpIDogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMuanNvbkRhdGEpLCBqc29uRGF0YSk7XHJcbiAgICAgICAgZGVsZXRlIG5leHRKc29uRGF0YS5jbGllbnRFbWFpbDtcclxuICAgICAgICBkZWxldGUgbmV4dEpzb25EYXRhLmRlZmF1bHRQcm9qZWN0O1xyXG4gICAgICAgIGRlbGV0ZSBuZXh0SnNvbkRhdGEudG9rZW5Vcmk7XHJcbiAgICAgICAgZGVsZXRlIG5leHRTZWN1cmVKc29uRGF0YS5wcml2YXRlS2V5O1xyXG4gICAgICAgIG9uT3B0aW9uc0NoYW5nZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgc2VjdXJlSnNvbkRhdGE6IG5leHRTZWN1cmVKc29uRGF0YSwganNvbkRhdGE6IG5leHRKc29uRGF0YSB9KSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uSldURm9ybUNoYW5nZSA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGRhdGEub25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb24ocHJvcHMsIGtleSk7IH07XHJcbiAgICByZXR1cm4gKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZFNldCwgeyBsYWJlbDogXCJBdXRoZW50aWNhdGlvblwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkLCB7IGxhYmVsOiBcIkF1dGhlbnRpY2F0aW9uIHR5cGVcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuUmFkaW9CdXR0b25Hcm91cCwgeyBvcHRpb25zOiBHT09HTEVfQVVUSF9UWVBFX09QVElPTlMsIHZhbHVlOiBqc29uRGF0YS5hdXRoZW50aWNhdGlvblR5cGUgfHwgZXhwb3J0cy5Hb29nbGVBdXRoVHlwZS5KV1QsIG9uQ2hhbmdlOiBvbkF1dGhUeXBlQ2hhbmdlIH0pKSksXHJcbiAgICAgICAgaXNKV1QgJiYgKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkU2V0LCB7IGxhYmVsOiBcIkpXVCBLZXkgRGV0YWlsc1wiIH0sXHJcbiAgICAgICAgICAgIGhhc0pXVENvbmZpZ3VyZWQgPyAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoSldURm9ybSwgeyBvcHRpb25zOiBvcHRpb25zLmpzb25EYXRhLCBvblJlc2V0OiBvblJlc2V0QXBpS2V5LCBvbkNoYW5nZTogb25KV1RGb3JtQ2hhbmdlIH0pKSA6IChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChKV1RDb25maWdFZGl0b3IsIHsgb25DaGFuZ2U6IGZ1bmN0aW9uIChqd3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbk9wdGlvbnNDaGFuZ2UoX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHNlY3VyZUpzb25GaWVsZHM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBzZWN1cmVKc29uRmllbGRzKSwgeyBwcml2YXRlS2V5OiB0cnVlIH0pLCBzZWN1cmVKc29uRGF0YTogX19hc3NpZ24oX19hc3NpZ24oe30sIHNlY3VyZUpzb25EYXRhKSwgeyBwcml2YXRlS2V5OiBqd3QucHJpdmF0ZUtleSB9KSwganNvbkRhdGE6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBqc29uRGF0YSksIHsgY2xpZW50RW1haWw6IGp3dC5jbGllbnRFbWFpbCwgZGVmYXVsdFByb2plY3Q6IGp3dC5wcm9qZWN0SWQsIHRva2VuVXJpOiBqd3QudG9rZW5VcmkgfSkgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSB9KSksXHJcbiAgICAgICAgICAgICcgJykpLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdyYWZhbmEtaW5mby1ib3hcIiwgc3R5bGU6IHsgbWFyZ2luVG9wOiAnMTZweCcgfSwgXCJkYXRhLXRlc3RpZFwiOiBURVNUX0lEUy5oZWxwQm94IH0sXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCJEb25cXHUyMDE5dCBrbm93IGhvdyB0byBnZXQgYSBzZXJ2aWNlIGFjY291bnQga2V5IGZpbGUgb3IgY3JlYXRlIGEgc2VydmljZSBhY2NvdW50PyBSZWFkIG1vcmVcIixcclxuICAgICAgICAgICAgICAgICcgJyxcclxuICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGNsYXNzTmFtZTogXCJleHRlcm5hbC1saW5rXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiwgaHJlZjogXCJodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9sYXRlc3QvZGF0YXNvdXJjZXMvZ29vZ2xlLWNsb3VkLW1vbml0b3JpbmcvZ29vZ2xlLWF1dGhlbnRpY2F0aW9uL1wiIH0sIFwiaW4gdGhlIGRvY3VtZW50YXRpb24uXCIpKSksXHJcbiAgICAgICAgIWlzSldUICYmIChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5BbGVydCwgeyB0aXRsZTogXCJcIiwgc2V2ZXJpdHk6IFwiaW5mb1wiIH0sIFwiVmVyaWZ5IEdDRSBkZWZhdWx0IHNlcnZpY2UgYWNjb3VudCBieSBjbGlja2luZyBTYXZlICYgVGVzdFwiKSkpKTtcclxufTtcblxuZXhwb3J0cy5Db25uZWN0aW9uQ29uZmlnID0gQ29ubmVjdGlvbkNvbmZpZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmRldmVsb3BtZW50LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9pbmRleC5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9pbmRleC5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbImlzU3RyaW5nIiwiQUxJR05NRU5UX1BFUklPRFMiLCJTRUxFQ1RPUlMiLCJNZXRyaWNGaW5kUXVlcnlUeXBlcyIsImV4dHJhY3RTZXJ2aWNlc0Zyb21NZXRyaWNEZXNjcmlwdG9ycyIsImdldEFnZ3JlZ2F0aW9uT3B0aW9uc0J5TWV0cmljIiwiZ2V0QWxpZ25tZW50T3B0aW9uc0J5TWV0cmljIiwiZ2V0TGFiZWxLZXlzIiwiZ2V0TWV0cmljVHlwZXNCeVNlcnZpY2UiLCJDbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnkiLCJjb25zdHJ1Y3RvciIsImRhdGFzb3VyY2UiLCJleGVjdXRlIiwicXVlcnkiLCJwcm9qZWN0TmFtZSIsImdldERlZmF1bHRQcm9qZWN0Iiwic2VsZWN0ZWRRdWVyeVR5cGUiLCJQcm9qZWN0cyIsImhhbmRsZVByb2plY3RzUXVlcnkiLCJTZXJ2aWNlcyIsImhhbmRsZVNlcnZpY2VRdWVyeSIsIk1ldHJpY1R5cGVzIiwiaGFuZGxlTWV0cmljVHlwZXNRdWVyeSIsIkxhYmVsS2V5cyIsImhhbmRsZUxhYmVsS2V5c1F1ZXJ5IiwiTGFiZWxWYWx1ZXMiLCJoYW5kbGVMYWJlbFZhbHVlc1F1ZXJ5IiwiUmVzb3VyY2VUeXBlcyIsImhhbmRsZVJlc291cmNlVHlwZVF1ZXJ5IiwiQWxpZ25lcnMiLCJoYW5kbGVBbGlnbmVyc1F1ZXJ5IiwiQWxpZ25tZW50UGVyaW9kcyIsImhhbmRsZUFsaWdubWVudFBlcmlvZFF1ZXJ5IiwiQWdncmVnYXRpb25zIiwiaGFuZGxlQWdncmVnYXRpb25RdWVyeSIsIlNMT1NlcnZpY2VzIiwiaGFuZGxlU0xPU2VydmljZXNRdWVyeSIsIlNMTyIsImhhbmRsZVNMT1F1ZXJ5IiwiU2VsZWN0b3JzIiwiaGFuZGxlU2VsZWN0b3JRdWVyeSIsImVycm9yIiwiY29uc29sZSIsInByb2plY3RzIiwiZ2V0UHJvamVjdHMiLCJtYXAiLCJzIiwidGV4dCIsImxhYmVsIiwidmFsdWUiLCJleHBhbmRhYmxlIiwibWV0cmljRGVzY3JpcHRvcnMiLCJnZXRNZXRyaWNUeXBlcyIsInNlcnZpY2VzIiwic2VydmljZVNob3J0TmFtZSIsInNlcnZpY2UiLCJzZWxlY3RlZFNlcnZpY2UiLCJ0ZW1wbGF0ZVNydiIsInJlcGxhY2UiLCJkaXNwbGF5TmFtZSIsInR5cGUiLCJzZWxlY3RlZE1ldHJpY1R5cGUiLCJsYWJlbEtleXMiLCJ0b0ZpbmRRdWVyeVJlc3VsdCIsImxhYmVsS2V5IiwicmVmSWQiLCJsYWJlbHMiLCJnZXRMYWJlbHMiLCJncm91cEJ5cyIsImNyb3NzU2VyaWVzUmVkdWNlciIsImludGVycG9sYXRlZEtleSIsInZhbHVlcyIsImhhc093blByb3BlcnR5IiwiZGVzY3JpcHRvciIsImZpbmQiLCJtIiwidmFsdWVUeXBlIiwibWV0cmljS2luZCIsImdldFNMT1NlcnZpY2VzIiwic2VsZWN0ZWRTTE9TZXJ2aWNlIiwic2xvcyIsImdldFNlcnZpY2VMZXZlbE9iamVjdGl2ZXMiLCJ4IiwiQ2xvdWRNb25pdG9yaW5nQW5ub3RhdGlvbnNRdWVyeUN0cmwiLCIkc2NvcGUiLCJhbm5vdGF0aW9uIiwiY3RybCIsInRhcmdldCIsIm9uUXVlcnlDaGFuZ2UiLCJiaW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiU2VsZWN0IiwiUmVhY3QiLCJ1c2VNZW1vIiwiUXVlcnlFZGl0b3JGaWVsZCIsIkFnZ3JlZ2F0aW9uIiwicHJvcHMiLCJhZ2dPcHRpb25zIiwidXNlQWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMiLCJzZWxlY3RlZCIsInVzZVNlbGVjdGVkRnJvbU9wdGlvbnMiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyIsImV4cGFuZGVkIiwibWV0cmljRGVzY3JpcHRvciIsImEiLCJhbGxPcHRpb25zIiwiSW5wdXQiLCJkZWJvdW5jZSIsInVzZVN0YXRlIiwiUXVlcnlFZGl0b3JSb3ciLCJJTlBVVF9XSURUSCIsIkFsaWFzQnkiLCJhbGlhcyIsInNldEFsaWFzIiwicHJvcGFnYXRlT25DaGFuZ2UiLCJlIiwiQWxpZ25tZW50RnVuY3Rpb24iLCJBbGlnbm1lbnRQZXJpb2QiLCJBbGlnbm1lbnRQZXJpb2RMYWJlbCIsIlNFTEVDVF9XSURUSCIsIkFsaWdubWVudCIsImN1c3RvbU1ldGFEYXRhIiwiZ2V0QWxpZ25tZW50UGlja2VyRGF0YSIsImlucHV0SWQiLCJwZXJTZXJpZXNBbGlnbmVyIiwicHNhIiwicHJlcHJvY2Vzc29yIiwiYWxpZ25PcHRpb25zIiwic2VsZWN0V2lkdGgiLCJhcCIsInZpc2libGVPcHRpb25zIiwiZmlsdGVyIiwiaGlkZGVuIiwiYWxpZ25tZW50UGVyaW9kIiwicmFuZ2VVdGlsIiwiQUxJR05NRU5UUyIsImZvcm1hdEFsaWdubWVudFRleHQiLCJhbGlnbm1lbnQiLCJzZWNvbmRzIiwicGFyc2VJbnQiLCJobXMiLCJzZWNvbmRzVG9IbXMiLCJBbm5vdGF0aW9uc0hlbHAiLCJQdXJlQ29tcG9uZW50IiwiY3NzIiwiQ2xvdWRNb25pdG9yaW5nQ2hlYXRTaGVldCIsInJlbmRlciIsIkNvbm5lY3Rpb25Db25maWciLCJDb25maWdFZGl0b3IiLCJIb3Jpem9udGFsR3JvdXAiLCJJbmxpbmVGaWVsZCIsIklubGluZUxhYmVsIiwiSU5ORVJfTEFCRUxfV0lEVEgiLCJMQUJFTF9XSURUSCIsIlZhcmlhYmxlUXVlcnlGaWVsZCIsImFsbG93Q3VzdG9tVmFsdWUiLCJjaGlsZHJlbiIsInRvb2x0aXAiLCJmaWxsQ29tcG9uZW50Iiwibm9GaWxsRW5kIiwibGFiZWxXaWR0aCIsImh0bWxGb3IiLCJyZXN0IiwiTXVsdGlTZWxlY3QiLCJTWVNURU1fTEFCRUxTIiwibGFiZWxzVG9Hcm91cGVkT3B0aW9ucyIsIkdyb3VwQnkiLCJ2YXJpYWJsZU9wdGlvbkdyb3VwIiwibyIsInRvT3B0aW9uIiwiQnV0dG9uIiwiVmVydGljYWxHcm91cCIsImZsYXR0ZW4iLCJ1c2VDYWxsYmFjayIsInN0cmluZ0FycmF5VG9GaWx0ZXJzIiwib3BlcmF0b3JzIiwiRmlsdGVyQnV0dG9uIiwiZm9yd2FyZFJlZiIsInJlZiIsIk9wZXJhdG9yQnV0dG9uIiwiTGFiZWxGaWx0ZXIiLCJmaWx0ZXJzIiwiZmlsdGVyQXJyYXkiLCJrZXlzIiwiZmlsdGVyc1RvU3RyaW5nQXJyYXkiLCJzdHJBcnIiLCJrZXkiLCJvcGVyYXRvciIsImNvbmRpdGlvbiIsInNsaWNlIiwibGVuZ3RoIiwiQWRkRmlsdGVyIiwiaW5kZXgiLCJrZXlQcmVzZW50Iiwic29tZSIsIm9wIiwib3BwIiwicHVzaCIsInZhbHVlT3B0aW9ucyIsInZhbHVlUHJlc2VudCIsInYiLCJmIiwiaSIsIl8iLCJldmVyeSIsIlRleHRBcmVhIiwiTVFMUXVlcnlFZGl0b3IiLCJvblJ1blF1ZXJ5Iiwib25LZXlEb3duIiwiZXZlbnQiLCJzaGlmdEtleSIsImN0cmxLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJ1c2VFZmZlY3QiLCJQcm9qZWN0IiwiVmlzdWFsTWV0cmljUXVlcnlFZGl0b3IiLCJBbGlnbm1lbnRUeXBlcyIsIkVkaXRvck1vZGUiLCJNZXRyaWNLaW5kIiwiUHJlcHJvY2Vzc29yVHlwZSIsIlZhbHVlVHlwZXMiLCJkZWZhdWx0U3RhdGUiLCJkZWZhdWx0UXVlcnkiLCJkYXRhU291cmNlIiwiZWRpdG9yTW9kZSIsIlZpc3VhbCIsIm1ldHJpY1R5cGUiLCJHQVVHRSIsIkFMSUdOX01FQU4iLCJhbGlhc0J5IiwiTm9uZSIsIkVkaXRvciIsInN0YXRlIiwic2V0U3RhdGUiLCJ0aGVuIiwicHJldlN0YXRlIiwibWV0cmljUXVlcnkiLCJvbk1ldHJpY1R5cGVDaGFuZ2UiLCJESVNUUklCVVRJT04iLCJSYXRlIiwiTVFMIiwicSIsIk1ldHJpY1F1ZXJ5RWRpdG9yIiwibWVtbyIsImdldFNlbGVjdFN0eWxlcyIsInVzZVN0eWxlczIiLCJ1c2VUaGVtZTIiLCJzdGFydENhc2UiLCJ1bmlxQnkiLCJNZXRyaWNzIiwibWV0cmljcyIsIm1ldHJpYyIsInRoZW1lIiwic2VsZWN0U3R5bGVzIiwiY3VzdG9tU3R5bGUiLCJnZXRTdHlsZXMiLCJnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IiLCJtZCIsImdldE1ldHJpY3NMaXN0Iiwic2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yIiwibWV0cmljc0J5U2VydmljZSIsImNvbXBvbmVudCIsIm9wdGlvbkNvbXBvbmVudCIsIm9wdGlvbkRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJsb2FkTWV0cmljRGVzY3JpcHRvcnMiLCJnZXRTZXJ2aWNlc0xpc3QiLCJvblNlcnZpY2VDaGFuZ2UiLCJleHRyYSIsImNvbG9ycyIsInNlY29uZGFyeSIsIlJhZGlvQnV0dG9uR3JvdXAiLCJOT05FX09QVElPTiIsIlByZXByb2Nlc3NvciIsInVzZU9wdGlvbnMiLCJDVU1VTEFUSVZFIiwiRGVsdGEiLCJzZXRQcm9qZWN0cyIsInByb2plY3RzV2l0aFRlbXBsYXRlVmFyaWFibGVzIiwiUVVFUllfVFlQRVMiLCJRdWVyeVR5cGUiLCJTTE9RdWVyeUVkaXRvciIsImRlZmF1bHRTTE9RdWVyeSIsIlF1ZXJ5RWRpdG9yIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCIsInF1ZXJ5VHlwZSIsIk1FVFJJQ1MiLCJlbnN1cmVHQ0VEZWZhdWx0UHJvamVjdCIsInByb3AiLCJzbG9RdWVyeSIsIm1ldGEiLCJkYXRhIiwic2VyaWVzIiwiY3VzdG9tIiwiZ2V0VmFyaWFibGVzIiwic2V0U0xPcyIsInNlcnZpY2VJZCIsInNsb0lkcyIsInNsb0lkIiwic2xvTmFtZSIsInNsbyIsImdvYWwiLCJTZWxlY3RvciIsIlNlcnZpY2UiLCJzZWxlY3Rvck5hbWUiLCJzZXJ2aWNlTmFtZSIsInNldFNlcnZpY2VzIiwiZ2V0VGVtcGxhdGVTcnYiLCJDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5RWRpdG9yIiwicXVlcnlUeXBlcyIsIm1ldHJpY1R5cGVzIiwic2xvU2VydmljZXMiLCJsb2FkaW5nIiwicXVlcnlNb2RlbCIsImRlZmF1bHRzIiwiY29tcG9uZW50RGlkTW91bnQiLCJvblByb3BzQ2hhbmdlIiwib25RdWVyeVR5cGVDaGFuZ2UiLCJvblByb2plY3RDaGFuZ2UiLCJvbkxhYmVsS2V5Q2hhbmdlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwic2VsZWNRdWVyeVR5cGVDaGFuZ2VkIiwic2VsZWN0U0xPU2VydmljZUNoYW5nZWQiLCJyZXN1bHQiLCJsIiwicmVuZGVyUXVlcnlUeXBlU3dpdGNoIiwibmFtZSIsIkdvb2dsZUF1dGhUeXBlIiwiQVVUSF9UWVBFUyIsIkpXVCIsIkdDRSIsInZhbHVlVHlwZXMiLCJJTlQ2NCIsIkRPVUJMRSIsIk1PTkVZIiwibWV0cmljS2luZHMiLCJERUxUQSIsIlNUUklORyIsIlZBTFVFX1RZUEVfVU5TUEVDSUZJRUQiLCJCT09MIiwiQUdHUkVHQVRJT05TIiwiTUVUUklDX0tJTkRfVU5TUEVDSUZJRUQiLCJjaHVuayIsImlzQXJyYXkiLCJmcm9tIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwibWVyZ2VNYXAiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJnZXRCYWNrZW5kU3J2IiwidG9EYXRhUXVlcnlSZXNwb25zZSIsImdldFRpbWVTcnYiLCJDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVN1cHBvcnQiLCJDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInRpbWVTcnYiLCJhdXRoZW50aWNhdGlvblR5cGUiLCJqc29uRGF0YSIsInZhcmlhYmxlcyIsImludGVydmFsTXMiLCJyZXF1ZXN0IiwidGFyZ2V0cyIsInQiLCJtaWdyYXRlUXVlcnkiLCJhbm5vdGF0aW9uUXVlcnkiLCJxdWVyaWVzIiwiZ2V0UmVmIiwidmlldyIsInNjb3BlZFZhcnMiLCJ0aXRsZSIsImludGVycG9sYXRlRmlsdGVycyIsImZldGNoIiwidXJsIiwibWV0aG9kIiwicmFuZ2UiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0byIsInBpcGUiLCJkYXRhUXVlcnlSZXNwb25zZSIsImRmIiwiaiIsImZpZWxkcyIsInRpbWUiLCJEYXRlIiwicGFyc2UiLCJnZXQiLCJ0YWdzIiwiYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyIsImludGVycG9sYXRlUHJvcHMiLCJpbnRlcnBvbGF0ZUdyb3VwQnlzIiwiYWdncmVnYXRpb24iLCJ0aW1lUmFuZ2UiLCJyZXN1bHRzIiwicCIsInJlZHVjZSIsImFjYyIsIlNldCIsImFkZCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkFycmF5IiwiZ2V0R0NFRGVmYXVsdFByb2plY3QiLCJnZXRSZXNvdXJjZSIsImRlZmF1bHRQcm9qZWN0IiwiZ2NlRGVmYXVsdFByb2plY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhpZGUiLCJvYmplY3QiLCJmaWx0ZXJRdWVyeSIsImludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzIiwiY29tcGxldGVGaWx0ZXIiLCJpdGVtIiwiam9pbiIsImludGVycG9sYXRlZEdyb3VwQnlzIiwiZm9yRWFjaCIsImdiIiwiaW50ZXJwb2xhdGVkIiwic3BsaXQiLCJjb25jYXQiLCJpbml0aWFsIiwiaW50ZXJwb2xhdGVkTWV0cmljVHlwZSIsIm1ldHJpY1R5cGVFeGlzdEluQXJyYXkiLCJtZXRyaWNUeXBlQnlTZXJ2aWNlIiwibWV0cmljVmFsdWVUeXBlIiwiaW5kZXhPZiIsIm9wdGlvbiIsImdyb3VwcyIsImN1cnIiLCJhcnIiLCJncm91cCIsIkRhdGFTb3VyY2VQbHVnaW4iLCJwbHVnaW4iLCJzZXRRdWVyeUVkaXRvckhlbHAiLCJzZXRRdWVyeUVkaXRvciIsInNldENvbmZpZ0VkaXRvciIsInNldEFubm90YXRpb25RdWVyeUN0cmwiLCJzZXRWYXJpYWJsZVF1ZXJ5RWRpdG9yIiwiYXV0aFR5cGVzIiwiQ3VzdG9tVmFyaWFibGVTdXBwb3J0IiwibWV0cmljRmluZFF1ZXJ5IiwiZXhlY3V0ZU9ic2VydmFibGUiXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["zipkinPlugin"],{

/***/ "./public/app/core/components/NodeGraphSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeGraphSettings": () => (/* binding */ NodeGraphSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;







function NodeGraphSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$nod;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      className: "page-heading",
      children: "Node Graph"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      className: styles.row,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "Enables the Node Graph visualization in the trace viewer.",
        label: "Enable Node Graph",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
          id: "enableNodeGraph",
          value: (_options$jsonData$nod = options.jsonData.nodeGraph) === null || _options$jsonData$nod === void 0 ? void 0 : _options$jsonData$nod.enabled,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'nodeGraph', Object.assign({}, options.jsonData.nodeGraph, {
            enabled: event.currentTarget.checked
          }))
        })
      })
    })]
  });
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    label: container;
    width: 100%;
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    label: row;
    align-items: baseline;
  `
});

/***/ }),

/***/ "./public/app/core/components/TraceToLogs/KeyValueInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Icon2, _Icon3;






const EQ_WIDTH = 3; // = 24px in inline label

const KeyValueInput = ({
  values,
  onChange,
  id,
  keyPlaceholder = 'Key',
  valuePlaceholder = 'Value (optional)'
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.wrapper,
    children: values.length ? values.map((value, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.pair,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentInput, {
        id: `${id}-key-${idx}`,
        placeholder: keyPlaceholder,
        value: value.key,
        onChange: e => {
          onChange(values.map((v, i) => {
            if (i === idx) {
              v.key = String(e);
            }

            return v;
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineLabel, {
        "aria-label": "equals",
        className: styles.operator,
        width: EQ_WIDTH,
        children: "="
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentInput, {
        id: `${id}-value-${idx}`,
        placeholder: valuePlaceholder,
        value: value.value,
        onChange: e => {
          onChange(values.map((v, i) => {
            if (i === idx) {
              v.value = String(e);
            }

            return v;
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: () => onChange([...values.slice(0, idx), ...values.slice(idx + 1)]),
        className: "gf-form-label query-part",
        "aria-label": "Remove tag",
        children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "times"
        }))
      }), idx === values.length - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: () => onChange([...values, {
          key: '',
          value: ''
        }]),
        className: "gf-form-label query-part",
        "aria-label": "Add tag",
        children: _Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "plus"
        }))
      }) : null]
    }, idx)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      onClick: () => onChange([...values, {
        key: '',
        value: ''
      }]),
      className: "gf-form-label query-part",
      "aria-label": "Add tag",
      children: _Icon3 || (_Icon3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: "plus"
      }))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyValueInput);

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs} 0;
  `,
  pair: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: start;
    align-items: center;
  `,
  operator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.palette.orange};
  `
});

/***/ }),

/***/ "./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceToLogsSettings": () => (/* binding */ TraceToLogsSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _KeyValueInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TraceToLogs/KeyValueInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;









function TraceToLogsSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$tra, _options$jsonData$tra3, _ref, _options$jsonData$tra4, _options$jsonData$tra5, _options$jsonData$tra6, _options$jsonData$tra7, _options$jsonData$tra8, _options$jsonData$tra9, _options$jsonData$tra10, _options$jsonData$tra11, _options$jsonData$tra12, _options$jsonData$tra13, _options$jsonData$tra14;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
      className: "page-heading",
      children: "Trace to logs"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.infoText,
      children: "Trace to logs lets you navigate from a trace span to the selected data source's log."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "The data source the trace is going to navigate to",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, {
          inputId: "trace-to-logs-data-source-picker",
          logs: true,
          current: (_options$jsonData$tra = options.jsonData.tracesToLogs) === null || _options$jsonData$tra === void 0 ? void 0 : _options$jsonData$tra.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => {
            var _options$jsonData$tra2;

            return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
              onOptionsChange,
              options
            }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
              datasourceUid: ds.uid,
              tags: (_options$jsonData$tra2 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra2 === void 0 ? void 0 : _options$jsonData$tra2.tags
            }));
          }
        })
      })
    }), (_options$jsonData$tra3 = options.jsonData.tracesToLogs) !== null && _options$jsonData$tra3 !== void 0 && _options$jsonData$tra3.mapTagNamesEnabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_KeyValueInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          keyPlaceholder: "Tag",
          values: (_ref = (_options$jsonData$tra4 = (_options$jsonData$tra5 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra5 === void 0 ? void 0 : _options$jsonData$tra5.mappedTags) !== null && _options$jsonData$tra4 !== void 0 ? _options$jsonData$tra4 : (_options$jsonData$tra6 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra6 === void 0 ? void 0 : (_options$jsonData$tra7 = _options$jsonData$tra6.tags) === null || _options$jsonData$tra7 === void 0 ? void 0 : _options$jsonData$tra7.map(tag => ({
            key: tag
          }))) !== null && _ref !== void 0 ? _ref : [],
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            mappedTags: v
          }))
        })
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TagsInput, {
          tags: (_options$jsonData$tra8 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra8 === void 0 ? void 0 : _options$jsonData$tra8.tags,
          width: 40,
          onChange: tags => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            tags: tags
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Map tag names",
        labelWidth: 26,
        grow: true,
        tooltip: "Map trace tag names to log label names. Ex: k8s.pod.name -> pod",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
          id: "mapTagNames",
          value: (_options$jsonData$tra9 = (_options$jsonData$tra10 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra10 === void 0 ? void 0 : _options$jsonData$tra10.mapTagNamesEnabled) !== null && _options$jsonData$tra9 !== void 0 ? _options$jsonData$tra9 : false,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            mapTagNamesEnabled: event.currentTarget.checked
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Span start time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the start time of the span. Default 0 (Time units can be used here, for example: 5s, 1m, 3h)",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "text",
          placeholder: "1h",
          width: 40,
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            spanStartTimeShift: v.currentTarget.value
          })),
          value: ((_options$jsonData$tra11 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra11 === void 0 ? void 0 : _options$jsonData$tra11.spanStartTimeShift) || ''
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Span end time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the end time of the span. Default 0 Time units can be used here, for example: 5s, 1m, 3h",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "text",
          placeholder: "1h",
          width: 40,
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            spanEndTimeShift: v.currentTarget.value
          })),
          value: ((_options$jsonData$tra12 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra12 === void 0 ? void 0 : _options$jsonData$tra12.spanEndTimeShift) || ''
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Filter by Trace ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Trace ID. Appends '|=<trace id>' to the query.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
          id: "filterByTraceID",
          value: (_options$jsonData$tra13 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra13 === void 0 ? void 0 : _options$jsonData$tra13.filterByTraceID,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            filterByTraceID: event.currentTarget.checked
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Filter by Span ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Span ID. Appends '|=<span id>' to the query.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
          id: "filterBySpanID",
          value: (_options$jsonData$tra14 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra14 === void 0 ? void 0 : _options$jsonData$tra14.filterBySpanID,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            filterBySpanID: event.currentTarget.checked
          }))
        })
      })
    })]
  });
}

const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `
});

/***/ }),

/***/ "./public/app/core/utils/tracing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNonOverlappingDuration": () => (/* binding */ getNonOverlappingDuration),
/* harmony export */   "getStats": () => (/* binding */ getStats),
/* harmony export */   "makeFrames": () => (/* binding */ makeFrames),
/* harmony export */   "makeSpanMap": () => (/* binding */ makeSpanMap)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/**
 * Get non overlapping duration of the ranges as they can overlap or have gaps.
 */

function getNonOverlappingDuration(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  const mergedRanges = ranges.reduce((acc, range) => {
    if (!acc.length) {
      return [range];
    }

    const tail = acc.slice(-1)[0];
    const [prevStart, prevEnd] = tail;
    const [start, end] = range;

    if (end < prevEnd) {
      // In this case the range is completely inside the prev range so we can just ignore it.
      return acc;
    }

    if (start > prevEnd) {
      // There is no overlap so we can just add it to stack
      return [...acc, range];
    } // We know there is overlap and current range ends later than previous so we can just extend the range


    return [...acc.slice(0, -1), [prevStart, end]];
  }, []);
  return mergedRanges.reduce((acc, range) => {
    return acc + (range[1] - range[0]);
  }, 0);
}
/**
 * Returns a map of the spans with children array for easier processing. It will also contain empty spans in case
 * span is missing but other spans are it's children. This is more generic because it needs to allow iterating over
 * both arrays and dataframe views.
 */

function makeSpanMap(getSpan) {
  const spanMap = {};
  let span;

  for (let index = 0; span = getSpan(index), !!span; index++) {
    if (!spanMap[span.id]) {
      spanMap[span.id] = {
        span: span.span,
        children: []
      };
    } else {
      spanMap[span.id].span = span.span;
    }

    for (const parentId of span.parentIds) {
      if (parentId) {
        if (!spanMap[parentId]) {
          spanMap[parentId] = {
            span: undefined,
            children: [span.id]
          };
        } else {
          spanMap[parentId].children.push(span.id);
        }
      }
    }
  }

  return spanMap;
}
function getStats(duration, traceDuration, selfDuration) {
  return {
    main: `${toFixedNoTrailingZeros(duration)}ms (${toFixedNoTrailingZeros(duration / traceDuration * 100)}%)`,
    secondary: `${toFixedNoTrailingZeros(selfDuration)}ms (${toFixedNoTrailingZeros(selfDuration / duration * 100)}%)`
  };
}

function toFixedNoTrailingZeros(n) {
  return parseFloat(n.toFixed(2));
}
/**
 * Create default frames used when returning data for node graph.
 */


function makeFrames() {
  const nodesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Total time (% of trace)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Self time (% of total)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          mode: 'continuous-GrYlRd'
        },
        displayName: 'Self time / Trace duration'
      }
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  return [nodesFrame, edgesFrame];
}

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_NodeGraphSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/NodeGraphSettings.tsx");
/* harmony import */ var app_core_components_TraceToLogs_TraceToLogsSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const ConfigEditor = ({
  options,
  onOptionsChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.DataSourceHttpSettings, {
      defaultUrl: "http://localhost:9411",
      dataSourceConfig: options,
      showAccessOptions: false,
      onChange: onOptionsChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_TraceToLogs_TraceToLogsSettings__WEBPACK_IMPORTED_MODULE_2__.TraceToLogsSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_NodeGraphSettings__WEBPACK_IMPORTED_MODULE_1__.NodeGraphSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/QueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipkinQueryField": () => (/* binding */ ZipkinQueryField),
/* harmony export */   "useLoadOptions": () => (/* binding */ useLoadOptions),
/* harmony export */   "useServices": () => (/* binding */ useServices)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/zipkin/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













const getStyles = theme => {
  return {
    tracesCascader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'tracesCascader',
      marginRight: theme.spacing(1)
    })
  };
};

const ZipkinQueryField = ({
  query,
  onChange,
  onRunQuery,
  datasource
}) => {
  const serviceOptions = useServices(datasource);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const {
    onLoadOptions,
    allOptions
  } = useLoadOptions(datasource);
  const onSelectTrace = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((values, selectedOptions) => {
    if (selectedOptions.length === 3) {
      const traceID = selectedOptions[2].value;
      onChange(Object.assign({}, query, {
        query: traceID
      }));
      onRunQuery();
    }
  }, [onChange, onRunQuery, query]);

  const onChangeQuery = value => {
    const nextQuery = Object.assign({}, query, {
      query: value
    });
    onChange(nextQuery);
  };

  let cascaderOptions = useMapToCascaderOptions(serviceOptions, allOptions);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Query type",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
          options: [{
            value: 'traceID',
            label: 'TraceID'
          }, {
            value: 'upload',
            label: 'JSON file'
          }],
          value: query.queryType || 'traceID',
          onChange: v => onChange(Object.assign({}, query, {
            queryType: v
          })),
          size: "md"
        })
      })
    }), query.queryType === 'upload' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        padding: theme.spacing(2)
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FileDropzone, {
        options: {
          multiple: false
        },
        onLoad: result => {
          datasource.uploadedJson = result;
          onRunQuery();
        }
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ButtonCascader, {
        options: cascaderOptions,
        onChange: onSelectTrace,
        loadData: onLoadOptions,
        variant: "secondary",
        buttonProps: {
          className: styles.tracesCascader
        },
        children: "Traces"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "gf-form gf-form--grow flex-shrink-1 min-width-15",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.QueryField, {
          query: query.query,
          onChange: onChangeQuery,
          onRunQuery: onRunQuery,
          placeholder: 'Insert Trace ID (run with Shift+Enter)',
          portalOrigin: "zipkin"
        })
      })]
    })]
  });
}; // Exported for tests

function useServices(datasource) {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_7__.apiPrefix}/services`;
  const [servicesOptions, fetch] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async () => {
    try {
      const services = await datasource.metadataRequest(url);

      if (services) {
        return services.sort().map(service => ({
          label: service,
          value: service,
          isLeaf: false
        }));
      }

      return [];
    } catch (error) {
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_4__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)('Failed to load services from Zipkin', error)));
      throw error;
    }
  }, [datasource]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    // We should probably call this periodically to get new services after mount.
    fetch();
  });
  return servicesOptions;
}
// Exported for tests
function useLoadOptions(datasource) {
  const isMounted = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [allOptions, setAllOptions] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({});
  const [, fetchSpans] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async function findSpans(service) {
    const url = `${_constants__WEBPACK_IMPORTED_MODULE_7__.apiPrefix}/spans`;

    try {
      // The response of this should have been full ZipkinSpan objects based on API docs but is just list
      // of span names.
      // TODO: check if this is some issue of version used or something else
      const response = await datasource.metadataRequest(url, {
        serviceName: service
      });

      if (isMounted()) {
        setAllOptions(state => {
          const spanOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.fromPairs)(response.map(span => [span, undefined]));
          return Object.assign({}, state, {
            [service]: spanOptions
          });
        });
      }
    } catch (error) {
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_4__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)('Failed to load spans from Zipkin', error)));
      throw error;
    }
  }, [datasource, allOptions]);
  const [, fetchTraces] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async function findTraces(serviceName, spanName) {
    const url = `${_constants__WEBPACK_IMPORTED_MODULE_7__.apiPrefix}/traces`;
    const search = {
      serviceName,
      spanName // See other params and default here https://zipkin.io/zipkin-api/#/default/get_traces

    };

    try {
      // This should return just root traces as there isn't any nesting
      const traces = await datasource.metadataRequest(url, search);

      if (isMounted()) {
        const newTraces = traces.length ? (0,lodash__WEBPACK_IMPORTED_MODULE_5__.fromPairs)(traces.map(trace => {
          const rootSpan = trace.find(span => !span.parentId);
          return [`${rootSpan.name} [${Math.floor(rootSpan.duration / 1000)} ms]`, rootSpan.traceId];
        })) : noTracesOptions;
        setAllOptions(state => {
          const spans = state[serviceName];
          return Object.assign({}, state, {
            [serviceName]: Object.assign({}, spans, {
              [spanName]: newTraces
            })
          });
        });
      }
    } catch (error) {
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_4__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)('Failed to load spans from Zipkin', error)));
      throw error;
    }
  }, [datasource]);
  const onLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(selectedOptions => {
    const service = selectedOptions[0].value;

    if (selectedOptions.length === 1) {
      fetchSpans(service);
    } else if (selectedOptions.length === 2) {
      const spanName = selectedOptions[1].value;
      fetchTraces(service, spanName);
    }
  }, [fetchSpans, fetchTraces]);
  return {
    onLoadOptions,
    allOptions
  };
}

function useMapToCascaderOptions(services, allOptions) {
  return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    let cascaderOptions = [];

    if (services.value && services.value.length) {
      cascaderOptions = services.value.map(services => {
        return Object.assign({}, services, {
          children: allOptions[services.value] && Object.keys(allOptions[services.value]).map(spanName => {
            return {
              label: spanName,
              value: spanName,
              isLeaf: false,
              children: allOptions[services.value][spanName] && Object.keys(allOptions[services.value][spanName]).map(traceName => {
                return {
                  label: traceName,
                  value: allOptions[services.value][spanName][traceName]
                };
              })
            };
          })
        });
      });
    } else if (services.value && !services.value.length) {
      cascaderOptions = noTracesFoundOptions;
    }

    return cascaderOptions;
  }, [services, allOptions]);
}

const NO_TRACES_KEY = '__NO_TRACES__';
const noTracesFoundOptions = [{
  label: 'No traces found',
  value: 'no_traces',
  isLeaf: true // Cannot be disabled because then cascader shows 'loading' for some reason.
  // disabled: true,

}];
const noTracesOptions = {
  '[No traces in time range]': NO_TRACES_KEY
};

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiPrefix": () => (/* binding */ apiPrefix)
/* harmony export */ });
const apiPrefix = '/api/v2';

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipkinDatasource": () => (/* binding */ ZipkinDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _core_utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/utils/fetch.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/zipkin/constants.ts");
/* harmony import */ var _utils_graphTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/zipkin/utils/graphTransform.ts");
/* harmony import */ var _utils_transforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/zipkin/utils/transforms.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ZipkinDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;

    _defineProperty(this, "uploadedJson", null);

    _defineProperty(this, "nodeGraph", void 0);

    this.instanceSettings = instanceSettings;
    this.nodeGraph = instanceSettings.jsonData.nodeGraph;
  }

  query(options) {
    const target = options.targets[0];

    if (target.queryType === 'upload') {
      if (!this.uploadedJson) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          data: []
        });
      }

      try {
        var _this$nodeGraph;

        const traceData = JSON.parse(this.uploadedJson);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(responseToDataQueryResponse({
          data: traceData
        }, (_this$nodeGraph = this.nodeGraph) === null || _this$nodeGraph === void 0 ? void 0 : _this$nodeGraph.enabled));
      } catch (error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          error: {
            message: 'JSON is not valid Zipkin format'
          },
          data: []
        });
      }
    }

    if (target.query) {
      return this.request(`${_constants__WEBPACK_IMPORTED_MODULE_3__.apiPrefix}/trace/${encodeURIComponent(target.query)}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
        var _this$nodeGraph2;

        return responseToDataQueryResponse(res, (_this$nodeGraph2 = this.nodeGraph) === null || _this$nodeGraph2 === void 0 ? void 0 : _this$nodeGraph2.enabled);
      }));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(emptyDataQueryResponse);
  }

  async metadataRequest(url, params) {
    const res = await (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.lastValueFrom)(this.request(url, params, {
      hideFromInspector: true
    }));
    return res.data;
  }

  async testDatasource() {
    await this.metadataRequest(`${_constants__WEBPACK_IMPORTED_MODULE_3__.apiPrefix}/services`);
    return {
      status: 'success',
      message: 'Data source is working'
    };
  }

  getQueryDisplayText(query) {
    return query.query;
  }

  request(apiUrl, data, options) {
    const params = data ? (0,_core_utils_fetch__WEBPACK_IMPORTED_MODULE_2__.serializeParams)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch(req);
  }

}

function responseToDataQueryResponse(response, nodeGraph = false) {
  let data = response !== null && response !== void 0 && response.data ? [(0,_utils_transforms__WEBPACK_IMPORTED_MODULE_5__.transformResponse)(response === null || response === void 0 ? void 0 : response.data)] : [];

  if (nodeGraph) {
    data.push(...(0,_utils_graphTransform__WEBPACK_IMPORTED_MODULE_4__.createGraphFrames)(response === null || response === void 0 ? void 0 : response.data));
  }

  return {
    data
  };
}

const emptyDataQueryResponse = {
  data: [new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame({
    fields: [{
      name: 'trace',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.trace,
      values: []
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'zipkin'
      }
    }
  })]
};

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/zipkin/datasource.ts");
/* harmony import */ var _QueryField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/zipkin/QueryField.tsx");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/zipkin/ConfigEditor.tsx");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_1__.ZipkinDatasource).setQueryEditor(_QueryField__WEBPACK_IMPORTED_MODULE_2__.ZipkinQueryField).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/utils/graphTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGraphFrames": () => (/* binding */ createGraphFrames)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/tracing.ts");


function createGraphFrames(data) {
  const {
    nodes,
    edges
  } = convertTraceToGraph(data);
  const [nodesFrame, edgesFrame] = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeFrames)();

  for (const node of nodes) {
    nodesFrame.add(node);
  }

  for (const edge of edges) {
    edgesFrame.add(edge);
  }

  return [nodesFrame, edgesFrame];
}

function convertTraceToGraph(spans) {
  const nodes = [];
  const edges = [];
  const traceDuration = findTraceDuration(spans);
  const spanMap = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeSpanMap)(index => {
    if (index >= spans.length) {
      return undefined;
    }

    return {
      span: spans[index],
      id: spans[index].id,
      parentIds: spans[index].parentId ? [spans[index].parentId] : []
    };
  });

  for (const span of spans) {
    var _span$localEndpoint, _span$remoteEndpoint;

    const ranges = spanMap[span.id].children.map(c => {
      const span = spanMap[c].span;
      return [span.timestamp, span.timestamp + span.duration];
    });
    const childrenDuration = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getNonOverlappingDuration)(ranges);
    const selfDuration = span.duration - childrenDuration;
    const stats = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getStats)(span.duration / 1000, traceDuration / 1000, selfDuration / 1000);
    nodes.push({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: span.id,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: ((_span$localEndpoint = span.localEndpoint) === null || _span$localEndpoint === void 0 ? void 0 : _span$localEndpoint.serviceName) || ((_span$remoteEndpoint = span.remoteEndpoint) === null || _span$remoteEndpoint === void 0 ? void 0 : _span$remoteEndpoint.serviceName) || 'unknown',
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: span.name,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    });

    if (span.parentId && spanMap[span.parentId].span) {
      edges.push({
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: span.parentId + '--' + span.id,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: span.id,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: span.parentId
      });
    }
  }

  return {
    nodes,
    edges
  };
}
/**
 * Get the duration of the whole trace as it isn't a part of the response data.
 * Note: Seems like this should be the same as just longest span, but this is probably safer.
 */


function findTraceDuration(spans) {
  let traceEndTime = 0;
  let traceStartTime = Infinity;

  for (const span of spans) {
    if (span.timestamp < traceStartTime) {
      traceStartTime = span.timestamp;
    }

    if (span.timestamp + span.duration > traceEndTime) {
      traceEndTime = span.timestamp + span.duration;
    }
  }

  return traceEndTime - traceStartTime;
}

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/utils/transforms.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformResponse": () => (/* binding */ transformResponse),
/* harmony export */   "transformToZipkin": () => (/* binding */ transformToZipkin)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");


/**
 * Transforms response to Grafana trace data frame.
 */

function transformResponse(zSpans) {
  const spanRows = zSpans.map(transformSpan);
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'zipkin'
      }
    }
  });

  for (const span of spanRows) {
    frame.add(span);
  }

  return frame;
}

function transformSpan(span) {
  var _span$localEndpoint, _span$remoteEndpoint, _span$annotations$map, _span$annotations;

  const row = {
    traceID: span.traceId,
    spanID: span.id,
    parentSpanID: span.parentId,
    operationName: span.name,
    serviceName: ((_span$localEndpoint = span.localEndpoint) === null || _span$localEndpoint === void 0 ? void 0 : _span$localEndpoint.serviceName) || ((_span$remoteEndpoint = span.remoteEndpoint) === null || _span$remoteEndpoint === void 0 ? void 0 : _span$remoteEndpoint.serviceName) || 'unknown',
    serviceTags: serviceTags(span),
    startTime: span.timestamp / 1000,
    duration: span.duration / 1000,
    logs: (_span$annotations$map = (_span$annotations = span.annotations) === null || _span$annotations === void 0 ? void 0 : _span$annotations.map(transformAnnotation)) !== null && _span$annotations$map !== void 0 ? _span$annotations$map : [],
    tags: Object.keys(span.tags || {}).reduce((acc, key) => {
      // If tag is error we remap it to simple boolean so that the trace ui will show an error icon.
      if (key === 'error') {
        acc.push({
          key: 'error',
          value: true
        });
        acc.push({
          key: 'errorValue',
          value: span.tags['error']
        });
        return acc;
      }

      acc.push({
        key,
        value: span.tags[key]
      });
      return acc;
    }, [])
  };

  if (span.kind) {
    var _row$tags;

    row.tags = [{
      key: 'kind',
      value: span.kind
    }, ...((_row$tags = row.tags) !== null && _row$tags !== void 0 ? _row$tags : [])];
  }

  if (span.shared) {
    var _row$tags2;

    row.tags = [{
      key: 'shared',
      value: span.shared
    }, ...((_row$tags2 = row.tags) !== null && _row$tags2 !== void 0 ? _row$tags2 : [])];
  }

  return row;
}
/**
 * Maps annotations as a log as that seems to be the closest thing.
 * See https://zipkin.io/zipkin-api/#/default/get_trace__traceId_
 */


function transformAnnotation(annotation) {
  return {
    timestamp: annotation.timestamp,
    fields: [{
      key: 'annotation',
      value: annotation.value
    }]
  };
}

function serviceTags(span) {
  const endpoint = span.localEndpoint || span.remoteEndpoint;

  if (!endpoint) {
    return [];
  }

  return [valueToTag('ipv4', endpoint.ipv4), valueToTag('ipv6', endpoint.ipv6), valueToTag('port', endpoint.port), valueToTag('endpointType', span.localEndpoint ? 'local' : 'remote')].filter(lodash__WEBPACK_IMPORTED_MODULE_0__.identity);
}

function valueToTag(key, value) {
  if (!value) {
    return undefined;
  }

  return {
    key,
    value
  };
}
/**
 * Transforms data frame to Zipkin response
 */


const transformToZipkin = data => {
  let response = [];

  for (let i = 0; i < data.length; i++) {
    var _span$tags$find, _span$tags$find2;

    const span = data.get(i);
    response.push(Object.assign({
      traceId: span.traceID,
      parentId: span.parentSpanID,
      name: span.operationName,
      id: span.spanID,
      timestamp: span.startTime * 1000,
      duration: span.duration * 1000
    }, getEndpoint(span), {
      annotations: span.logs.length ? span.logs.map(l => ({
        timestamp: l.timestamp,
        value: l.fields[0].value
      })) : undefined,
      tags: span.tags.length ? span.tags.filter(t => t.key !== 'kind' && t.key !== 'endpointType' && t.key !== 'shared').reduce((tags, t) => {
        if (t.key === 'error') {
          return Object.assign({}, tags, {
            [t.key]: span.tags.find(t => t.key === 'errorValue').value || ''
          });
        }

        return Object.assign({}, tags, {
          [t.key]: t.value
        });
      }, {}) : undefined,
      kind: (_span$tags$find = span.tags.find(t => t.key === 'kind')) === null || _span$tags$find === void 0 ? void 0 : _span$tags$find.value,
      shared: (_span$tags$find2 = span.tags.find(t => t.key === 'shared')) === null || _span$tags$find2 === void 0 ? void 0 : _span$tags$find2.value
    }));
  }

  return response;
}; // Returns remote or local endpoint object

const getEndpoint = span => {
  var _span$serviceTags$fin, _span$serviceTags$fin2, _span$serviceTags$fin3, _span$serviceTags$fin4;

  const key = ((_span$serviceTags$fin = span.serviceTags.find(t => t.key === 'endpointType')) === null || _span$serviceTags$fin === void 0 ? void 0 : _span$serviceTags$fin.value) === 'local' ? 'localEndpoint' : 'remoteEndpoint';
  return span.serviceName !== 'unknown' ? {
    [key]: {
      serviceName: span.serviceName,
      ipv4: (_span$serviceTags$fin2 = span.serviceTags.find(t => t.key === 'ipv4')) === null || _span$serviceTags$fin2 === void 0 ? void 0 : _span$serviceTags$fin2.value,
      ipv6: (_span$serviceTags$fin3 = span.serviceTags.find(t => t.key === 'ipv6')) === null || _span$serviceTags$fin3 === void 0 ? void 0 : _span$serviceTags$fin3.value,
      port: (_span$serviceTags$fin4 = span.serviceTags.find(t => t.key === 'port')) === null || _span$serviceTags$fin4 === void 0 ? void 0 : _span$serviceTags$fin4.value
    }
  } : undefined;
};

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFGLEtBQVUsTUFBMUQsQ0FBRiwyREFBRSx1QkFBbUVILEtBRnBFO0FBR0xtUCxNQUFBQSxJQUFJLDRCQUFFM0wsSUFBSSxDQUFDZ0wsV0FBTCxDQUFpQnZFLElBQWpCLENBQXVCeUYsQ0FBRCxJQUEwQkEsQ0FBQyxDQUFDdlAsR0FBRixLQUFVLE1BQTFELENBQUYsMkRBQUUsdUJBQW1FSCxLQUhwRTtBQUlMb1AsTUFBQUEsSUFBSSw0QkFBRTVMLElBQUksQ0FBQ2dMLFdBQUwsQ0FBaUJ2RSxJQUFqQixDQUF1QnlGLENBQUQsSUFBMEJBLENBQUMsQ0FBQ3ZQLEdBQUYsS0FBVSxNQUExRCxDQUFGLDJEQUFFLHVCQUFtRUg7QUFKcEU7QUFEVCxHQURHLEdBU0g2RCxTQVRKO0FBVUQsQ0FmRDs7Ozs7Ozs7Ozs7O0FDMUs0QztBQUM1QztBQUNBLElBQUksMERBQWE7QUFDakI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvTm9kZUdyYXBoU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9UcmFjZVRvTG9ncy9LZXlWYWx1ZUlucHV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb0xvZ3MvVHJhY2VUb0xvZ3NTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS91dGlscy90cmFjaW5nLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vQ29uZmlnRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2Uvemlwa2luL1F1ZXJ5RmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2Uvemlwa2luL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2Uvemlwa2luL3V0aWxzL2dyYXBoVHJhbnNmb3JtLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vdXRpbHMvdHJhbnNmb3Jtcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtMDAzMjZlNzBiYS8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuMy4yLWEwMzJjYmViMDEtNzM3OTQ2MGY1MS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlTW91bnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQge1xuICBEYXRhU291cmNlSnNvbkRhdGEsXG4gIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsXG4gIEdyYWZhbmFUaGVtZSxcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5saW5lU3dpdGNoLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUdyYXBoT3B0aW9ucyB7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVHcmFwaERhdGEgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICBub2RlR3JhcGg/OiBOb2RlR3JhcGhPcHRpb25zO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPE5vZGVHcmFwaERhdGE+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlR3JhcGhTZXR0aW5ncyh7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5Ob2RlIEdyYXBoPC9oMz5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdyBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICB0b29sdGlwPVwiRW5hYmxlcyB0aGUgTm9kZSBHcmFwaCB2aXN1YWxpemF0aW9uIGluIHRoZSB0cmFjZSB2aWV3ZXIuXCJcbiAgICAgICAgICBsYWJlbD1cIkVuYWJsZSBOb2RlIEdyYXBoXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbmxpbmVTd2l0Y2hcbiAgICAgICAgICAgIGlkPVwiZW5hYmxlTm9kZUdyYXBoXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLm5vZGVHcmFwaD8uZW5hYmxlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ25vZGVHcmFwaCcsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLm5vZGVHcmFwaCxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBsYWJlbDogY29udGFpbmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICBgLFxuICByb3c6IGNzc2BcbiAgICBsYWJlbDogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSwgS2V5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlZ21lbnRJbnB1dCwgdXNlU3R5bGVzLCBJbmxpbmVMYWJlbCwgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEVRX1dJRFRIID0gMzsgLy8gPSAyNHB4IGluIGlubGluZSBsYWJlbFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZXM6IEFycmF5PEtleVZhbHVlPHN0cmluZz4+O1xuICBvbkNoYW5nZTogKHZhbHVlczogQXJyYXk8S2V5VmFsdWU8c3RyaW5nPj4pID0+IHZvaWQ7XG4gIGlkPzogc3RyaW5nO1xuICBrZXlQbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdmFsdWVQbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuY29uc3QgS2V5VmFsdWVJbnB1dCA9ICh7XG4gIHZhbHVlcyxcbiAgb25DaGFuZ2UsXG4gIGlkLFxuICBrZXlQbGFjZWhvbGRlciA9ICdLZXknLFxuICB2YWx1ZVBsYWNlaG9sZGVyID0gJ1ZhbHVlIChvcHRpb25hbCknLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAge3ZhbHVlcy5sZW5ndGggPyAoXG4gICAgICAgIHZhbHVlcy5tYXAoKHZhbHVlLCBpZHgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhaXJ9IGtleT17aWR4fT5cbiAgICAgICAgICAgIDxTZWdtZW50SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1rZXktJHtpZHh9YH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2tleVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUua2V5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgIHYua2V5ID0gU3RyaW5nKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbmxpbmVMYWJlbCBhcmlhLWxhYmVsPVwiZXF1YWxzXCIgY2xhc3NOYW1lPXtzdHlsZXMub3BlcmF0b3J9IHdpZHRoPXtFUV9XSURUSH0+XG4gICAgICAgICAgICAgID1cbiAgICAgICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgICA8U2VnbWVudElucHV0XG4gICAgICAgICAgICAgIGlkPXtgJHtpZH0tdmFsdWUtJHtpZHh9YH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3ZhbHVlUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICB2YWx1ZXMubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2LnZhbHVlID0gU3RyaW5nKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoWy4uLnZhbHVlcy5zbGljZSgwLCBpZHgpLCAuLi52YWx1ZXMuc2xpY2UoaWR4ICsgMSldKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1wYXJ0XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZSB0YWdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidGltZXNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7aWR4ID09PSB2YWx1ZXMubGVuZ3RoIC0gMSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi52YWx1ZXMsIHsga2V5OiAnJywgdmFsdWU6ICcnIH1dKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgdGFnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbLi4udmFsdWVzLCB7IGtleTogJycsIHZhbHVlOiAnJyB9XSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1wYXJ0XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRhZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleVZhbHVlSW5wdXQ7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogJHt0aGVtZS5zcGFjaW5nLnhzfSAwO1xuICBgLFxuICBwYWlyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG4gIG9wZXJhdG9yOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUucGFsZXR0ZS5vcmFuZ2V9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyxcbiAgR3JhZmFuYVRoZW1lLFxuICBLZXlWYWx1ZSxcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQsIFRhZ3NJbnB1dCwgdXNlU3R5bGVzLCBJbmxpbmVTd2l0Y2ggfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEtleVZhbHVlSW5wdXQgZnJvbSAnLi9LZXlWYWx1ZUlucHV0JztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTG9nc09wdGlvbnMge1xuICBkYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nW107XG4gIG1hcHBlZFRhZ3M/OiBBcnJheTxLZXlWYWx1ZTxzdHJpbmc+PjtcbiAgbWFwVGFnTmFtZXNFbmFibGVkPzogYm9vbGVhbjtcbiAgc3BhblN0YXJ0VGltZVNoaWZ0Pzogc3RyaW5nO1xuICBzcGFuRW5kVGltZVNoaWZ0Pzogc3RyaW5nO1xuICBmaWx0ZXJCeVRyYWNlSUQ/OiBib29sZWFuO1xuICBmaWx0ZXJCeVNwYW5JRD86IGJvb2xlYW47XG4gIGxva2lTZWFyY2g/OiBib29sZWFuOyAvLyBsZWdhY3lcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTG9nc0RhdGEgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICB0cmFjZXNUb0xvZ3M/OiBUcmFjZVRvTG9nc09wdGlvbnM7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8VHJhY2VUb0xvZ3NEYXRhPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gVHJhY2VUb0xvZ3NTZXR0aW5ncyh7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyB3aWR0aDogJzEwMCUnIH0pfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5UcmFjZSB0byBsb2dzPC9oMz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvVGV4dH0+XG4gICAgICAgIFRyYWNlIHRvIGxvZ3MgbGV0cyB5b3UgbmF2aWdhdGUgZnJvbSBhIHRyYWNlIHNwYW4gdG8gdGhlIHNlbGVjdGVkIGRhdGEgc291cmNlJmFwb3M7cyBsb2cuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgdG9vbHRpcD1cIlRoZSBkYXRhIHNvdXJjZSB0aGUgdHJhY2UgaXMgZ29pbmcgdG8gbmF2aWdhdGUgdG9cIiBsYWJlbD1cIkRhdGEgc291cmNlXCIgbGFiZWxXaWR0aD17MjZ9PlxuICAgICAgICAgIDxEYXRhU291cmNlUGlja2VyXG4gICAgICAgICAgICBpbnB1dElkPVwidHJhY2UtdG8tbG9ncy1kYXRhLXNvdXJjZS1waWNrZXJcIlxuICAgICAgICAgICAgbG9nc1xuICAgICAgICAgICAgY3VycmVudD17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmRhdGFzb3VyY2VVaWR9XG4gICAgICAgICAgICBub0RlZmF1bHQ9e3RydWV9XG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGRzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogZHMudWlkLFxuICAgICAgICAgICAgICAgIHRhZ3M6IG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy50YWdzLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICB7b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/Lm1hcFRhZ05hbWVzRW5hYmxlZCA/IChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgdG9vbHRpcD1cIlRhZ3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIExva2kgcXVlcnkuIERlZmF1bHQgdGFnczogJ2NsdXN0ZXInLCAnaG9zdG5hbWUnLCAnbmFtZXNwYWNlJywgJ3BvZCdcIlxuICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxLZXlWYWx1ZUlucHV0XG4gICAgICAgICAgICAgIGtleVBsYWNlaG9sZGVyPVwiVGFnXCJcbiAgICAgICAgICAgICAgdmFsdWVzPXtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwcGVkVGFncyA/P1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy50YWdzPy5tYXAoKHRhZykgPT4gKHsga2V5OiB0YWcgfSkpID8/XG4gICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICAgIG1hcHBlZFRhZ3M6IHYsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgKSA6IChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgdG9vbHRpcD1cIlRhZ3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIExva2kgcXVlcnkuIERlZmF1bHQgdGFnczogJ2NsdXN0ZXInLCAnaG9zdG5hbWUnLCAnbmFtZXNwYWNlJywgJ3BvZCdcIlxuICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUYWdzSW5wdXRcbiAgICAgICAgICAgICAgdGFncz17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3N9XG4gICAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0YWdzKSA9PlxuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgICB0YWdzOiB0YWdzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICl9XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJNYXAgdGFnIG5hbWVzXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIk1hcCB0cmFjZSB0YWcgbmFtZXMgdG8gbG9nIGxhYmVsIG5hbWVzLiBFeDogazhzLnBvZC5uYW1lIC0+IHBvZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cIm1hcFRhZ05hbWVzXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwVGFnTmFtZXNFbmFibGVkID8/IGZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIG1hcFRhZ05hbWVzRW5hYmxlZDogZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiU3BhbiBzdGFydCB0aW1lIHNoaWZ0XCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIlNoaWZ0cyB0aGUgc3RhcnQgdGltZSBvZiB0aGUgc3Bhbi4gRGVmYXVsdCAwIChUaW1lIHVuaXRzIGNhbiBiZSB1c2VkIGhlcmUsIGZvciBleGFtcGxlOiA1cywgMW0sIDNoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBzcGFuU3RhcnRUaW1lU2hpZnQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uc3BhblN0YXJ0VGltZVNoaWZ0IHx8ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiU3BhbiBlbmQgdGltZSBzaGlmdFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJTaGlmdHMgdGhlIGVuZCB0aW1lIG9mIHRoZSBzcGFuLiBEZWZhdWx0IDAgVGltZSB1bml0cyBjYW4gYmUgdXNlZCBoZXJlLCBmb3IgZXhhbXBsZTogNXMsIDFtLCAzaFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBzcGFuRW5kVGltZVNoaWZ0OiB2LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnNwYW5FbmRUaW1lU2hpZnQgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgYnkgVHJhY2UgSURcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiRmlsdGVycyBsb2dzIGJ5IFRyYWNlIElELiBBcHBlbmRzICd8PTx0cmFjZSBpZD4nIHRvIHRoZSBxdWVyeS5cIlxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJmaWx0ZXJCeVRyYWNlSURcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5maWx0ZXJCeVRyYWNlSUR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZmlsdGVyQnlUcmFjZUlEOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgYnkgU3BhbiBJRFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJGaWx0ZXJzIGxvZ3MgYnkgU3BhbiBJRC4gQXBwZW5kcyAnfD08c3BhbiBpZD4nIHRvIHRoZSBxdWVyeS5cIlxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJmaWx0ZXJCeVNwYW5JRFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmZpbHRlckJ5U3BhbklEfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIGZpbHRlckJ5U3BhbklEOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBpbmZvVGV4dDogY3NzYFxuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2VtaVdlYWt9O1xuICBgLFxufSk7XG4iLCIvKipcbiAqIEdldCBub24gb3ZlcmxhcHBpbmcgZHVyYXRpb24gb2YgdGhlIHJhbmdlcyBhcyB0aGV5IGNhbiBvdmVybGFwIG9yIGhhdmUgZ2Fwcy5cbiAqL1xuaW1wb3J0IHsgRmllbGRUeXBlLCBNdXRhYmxlRGF0YUZyYW1lLCBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIGFzIEZpZWxkcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9uT3ZlcmxhcHBpbmdEdXJhdGlvbihyYW5nZXM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTogbnVtYmVyIHtcbiAgcmFuZ2VzLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKTtcbiAgY29uc3QgbWVyZ2VkUmFuZ2VzID0gcmFuZ2VzLnJlZHVjZSgoYWNjLCByYW5nZSkgPT4ge1xuICAgIGlmICghYWNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtyYW5nZV07XG4gICAgfVxuICAgIGNvbnN0IHRhaWwgPSBhY2Muc2xpY2UoLTEpWzBdO1xuICAgIGNvbnN0IFtwcmV2U3RhcnQsIHByZXZFbmRdID0gdGFpbDtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZTtcbiAgICBpZiAoZW5kIDwgcHJldkVuZCkge1xuICAgICAgLy8gSW4gdGhpcyBjYXNlIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IGluc2lkZSB0aGUgcHJldiByYW5nZSBzbyB3ZSBjYW4ganVzdCBpZ25vcmUgaXQuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IHByZXZFbmQpIHtcbiAgICAgIC8vIFRoZXJlIGlzIG5vIG92ZXJsYXAgc28gd2UgY2FuIGp1c3QgYWRkIGl0IHRvIHN0YWNrXG4gICAgICByZXR1cm4gWy4uLmFjYywgcmFuZ2VdO1xuICAgIH1cblxuICAgIC8vIFdlIGtub3cgdGhlcmUgaXMgb3ZlcmxhcCBhbmQgY3VycmVudCByYW5nZSBlbmRzIGxhdGVyIHRoYW4gcHJldmlvdXMgc28gd2UgY2FuIGp1c3QgZXh0ZW5kIHRoZSByYW5nZVxuICAgIHJldHVybiBbLi4uYWNjLnNsaWNlKDAsIC0xKSwgW3ByZXZTdGFydCwgZW5kXV0gYXMgQXJyYXk8W251bWJlciwgbnVtYmVyXT47XG4gIH0sIFtdIGFzIEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTtcblxuICByZXR1cm4gbWVyZ2VkUmFuZ2VzLnJlZHVjZSgoYWNjLCByYW5nZSkgPT4ge1xuICAgIHJldHVybiBhY2MgKyAocmFuZ2VbMV0gLSByYW5nZVswXSk7XG4gIH0sIDApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBtYXAgb2YgdGhlIHNwYW5zIHdpdGggY2hpbGRyZW4gYXJyYXkgZm9yIGVhc2llciBwcm9jZXNzaW5nLiBJdCB3aWxsIGFsc28gY29udGFpbiBlbXB0eSBzcGFucyBpbiBjYXNlXG4gKiBzcGFuIGlzIG1pc3NpbmcgYnV0IG90aGVyIHNwYW5zIGFyZSBpdCdzIGNoaWxkcmVuLiBUaGlzIGlzIG1vcmUgZ2VuZXJpYyBiZWNhdXNlIGl0IG5lZWRzIHRvIGFsbG93IGl0ZXJhdGluZyBvdmVyXG4gKiBib3RoIGFycmF5cyBhbmQgZGF0YWZyYW1lIHZpZXdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNwYW5NYXA8VD4oZ2V0U3BhbjogKGluZGV4OiBudW1iZXIpID0+IHsgc3BhbjogVDsgaWQ6IHN0cmluZzsgcGFyZW50SWRzOiBzdHJpbmdbXSB9IHwgdW5kZWZpbmVkKToge1xuICBbaWQ6IHN0cmluZ106IHsgc3BhbjogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH07XG59IHtcbiAgY29uc3Qgc3Bhbk1hcDogeyBbaWQ6IHN0cmluZ106IHsgc3Bhbj86IFQ7IGNoaWxkcmVuOiBzdHJpbmdbXSB9IH0gPSB7fTtcblxuICBsZXQgc3BhbjtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyAoc3BhbiA9IGdldFNwYW4oaW5kZXgpKSwgISFzcGFuOyBpbmRleCsrKSB7XG4gICAgaWYgKCFzcGFuTWFwW3NwYW4uaWRdKSB7XG4gICAgICBzcGFuTWFwW3NwYW4uaWRdID0ge1xuICAgICAgICBzcGFuOiBzcGFuLnNwYW4sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW5NYXBbc3Bhbi5pZF0uc3BhbiA9IHNwYW4uc3BhbjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBhcmVudElkIG9mIHNwYW4ucGFyZW50SWRzKSB7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaWYgKCFzcGFuTWFwW3BhcmVudElkXSkge1xuICAgICAgICAgIHNwYW5NYXBbcGFyZW50SWRdID0ge1xuICAgICAgICAgICAgc3BhbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcGFuLmlkXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW5NYXBbcGFyZW50SWRdLmNoaWxkcmVuLnB1c2goc3Bhbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNwYW5NYXAgYXMgeyBbaWQ6IHN0cmluZ106IHsgc3BhbjogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRzKGR1cmF0aW9uOiBudW1iZXIsIHRyYWNlRHVyYXRpb246IG51bWJlciwgc2VsZkR1cmF0aW9uOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBtYWluOiBgJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKGR1cmF0aW9uKX1tcyAoJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKChkdXJhdGlvbiAvIHRyYWNlRHVyYXRpb24pICogMTAwKX0lKWAsXG4gICAgc2Vjb25kYXJ5OiBgJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKHNlbGZEdXJhdGlvbil9bXMgKCR7dG9GaXhlZE5vVHJhaWxpbmdaZXJvcyhcbiAgICAgIChzZWxmRHVyYXRpb24gLyBkdXJhdGlvbikgKiAxMDBcbiAgICApfSUpYCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9GaXhlZE5vVHJhaWxpbmdaZXJvcyhuOiBudW1iZXIpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQobi50b0ZpeGVkKDIpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgZGVmYXVsdCBmcmFtZXMgdXNlZCB3aGVuIHJldHVybmluZyBkYXRhIGZvciBub2RlIGdyYXBoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZyYW1lcygpIHtcbiAgY29uc3Qgbm9kZXNGcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogRmllbGRzLmlkLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy50aXRsZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMuc3ViVGl0bGUsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLm1haW5TdGF0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdUb3RhbCB0aW1lICglIG9mIHRyYWNlKScgfSB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMuc2Vjb25kYXJ5U3RhdCwgdHlwZTogRmllbGRUeXBlLnN0cmluZywgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnU2VsZiB0aW1lICglIG9mIHRvdGFsKScgfSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBGaWVsZHMuY29sb3IsXG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBtb2RlOiAnY29udGludW91cy1HcllsUmQnIH0sIGRpc3BsYXlOYW1lOiAnU2VsZiB0aW1lIC8gVHJhY2UgZHVyYXRpb24nIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGVkZ2VzRnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7IG5hbWU6IEZpZWxkcy5pZCwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMudGFyZ2V0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zb3VyY2UsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICBdLFxuICAgIG1ldGE6IHtcbiAgICAgIHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbm9kZUdyYXBoJyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZUh0dHBTZXR0aW5ncyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE5vZGVHcmFwaFNldHRpbmdzIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Ob2RlR3JhcGhTZXR0aW5ncyc7XG5pbXBvcnQgeyBUcmFjZVRvTG9nc1NldHRpbmdzIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9UcmFjZVRvTG9ncy9UcmFjZVRvTG9nc1NldHRpbmdzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0VkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERhdGFTb3VyY2VIdHRwU2V0dGluZ3NcbiAgICAgICAgZGVmYXVsdFVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6OTQxMVwiXG4gICAgICAgIGRhdGFTb3VyY2VDb25maWc9e29wdGlvbnN9XG4gICAgICAgIHNob3dBY2Nlc3NPcHRpb25zPXtmYWxzZX1cbiAgICAgICAgb25DaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICA8VHJhY2VUb0xvZ3NTZXR0aW5ncyBvcHRpb25zPXtvcHRpb25zfSBvbk9wdGlvbnNDaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPE5vZGVHcmFwaFNldHRpbmdzIG9wdGlvbnM9e29wdGlvbnN9IG9uT3B0aW9uc0NoYW5nZT17b25PcHRpb25zQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFF1ZXJ5RWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIEJ1dHRvbkNhc2NhZGVyLFxuICBDYXNjYWRlck9wdGlvbixcbiAgRmlsZURyb3B6b25lLFxuICBJbmxpbmVGaWVsZCxcbiAgSW5saW5lRmllbGRSb3csXG4gIFJhZGlvQnV0dG9uR3JvdXAsXG4gIHVzZVRoZW1lMixcbiAgUXVlcnlGaWVsZCxcbiAgdXNlU3R5bGVzMixcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnYXBwL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IGZyb21QYWlycyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXN5bmNGbiwgdXNlTW91bnQsIHVzZU1vdW50ZWRTdGF0ZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBBc3luY1N0YXRlIH0gZnJvbSAncmVhY3QtdXNlL2xpYi91c2VBc3luY0ZuJztcbmltcG9ydCB7IGFwaVByZWZpeCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IFppcGtpbkRhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgWmlwa2luUXVlcnksIFppcGtpblF1ZXJ5VHlwZSwgWmlwa2luU3BhbiB9IGZyb20gJy4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0gUXVlcnlFZGl0b3JQcm9wczxaaXBraW5EYXRhc291cmNlLCBaaXBraW5RdWVyeT47XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRyYWNlc0Nhc2NhZGVyOiBjc3Moe1xuICAgICAgbGFiZWw6ICd0cmFjZXNDYXNjYWRlcicsXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9KSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBaaXBraW5RdWVyeUZpZWxkID0gKHsgcXVlcnksIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5LCBkYXRhc291cmNlIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHNlcnZpY2VPcHRpb25zID0gdXNlU2VydmljZXMoZGF0YXNvdXJjZSk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgeyBvbkxvYWRPcHRpb25zLCBhbGxPcHRpb25zIH0gPSB1c2VMb2FkT3B0aW9ucyhkYXRhc291cmNlKTtcblxuICBjb25zdCBvblNlbGVjdFRyYWNlID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlczogc3RyaW5nW10sIHNlbGVjdGVkT3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSkgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgdHJhY2VJRCA9IHNlbGVjdGVkT3B0aW9uc1syXS52YWx1ZTtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcXVlcnk6IHRyYWNlSUQgfSk7XG4gICAgICAgIG9uUnVuUXVlcnkoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkNoYW5nZSwgb25SdW5RdWVyeSwgcXVlcnldXG4gICk7XG5cbiAgY29uc3Qgb25DaGFuZ2VRdWVyeSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV4dFF1ZXJ5ID0geyAuLi5xdWVyeSwgcXVlcnk6IHZhbHVlIH07XG4gICAgb25DaGFuZ2UobmV4dFF1ZXJ5KTtcbiAgfTtcblxuICBsZXQgY2FzY2FkZXJPcHRpb25zID0gdXNlTWFwVG9DYXNjYWRlck9wdGlvbnMoc2VydmljZU9wdGlvbnMsIGFsbE9wdGlvbnMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiUXVlcnkgdHlwZVwiPlxuICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwPFppcGtpblF1ZXJ5VHlwZT5cbiAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ3RyYWNlSUQnLCBsYWJlbDogJ1RyYWNlSUQnIH0sXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICd1cGxvYWQnLCBsYWJlbDogJ0pTT04gZmlsZScgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkucXVlcnlUeXBlIHx8ICd0cmFjZUlEJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogdixcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICB7cXVlcnkucXVlcnlUeXBlID09PSAndXBsb2FkJyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh7IHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMikgfSl9PlxuICAgICAgICAgIDxGaWxlRHJvcHpvbmVcbiAgICAgICAgICAgIG9wdGlvbnM9e3sgbXVsdGlwbGU6IGZhbHNlIH19XG4gICAgICAgICAgICBvbkxvYWQ9eyhyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZS51cGxvYWRlZEpzb24gPSByZXN1bHQ7XG4gICAgICAgICAgICAgIG9uUnVuUXVlcnkoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPEJ1dHRvbkNhc2NhZGVyXG4gICAgICAgICAgICBvcHRpb25zPXtjYXNjYWRlck9wdGlvbnN9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RUcmFjZX1cbiAgICAgICAgICAgIGxvYWREYXRhPXtvbkxvYWRPcHRpb25zfVxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBidXR0b25Qcm9wcz17eyBjbGFzc05hbWU6IHN0eWxlcy50cmFjZXNDYXNjYWRlciB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRyYWNlc1xuICAgICAgICAgIDwvQnV0dG9uQ2FzY2FkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3cgZmxleC1zaHJpbmstMSBtaW4td2lkdGgtMTVcIj5cbiAgICAgICAgICAgIDxRdWVyeUZpZWxkXG4gICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeS5xdWVyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUXVlcnl9XG4gICAgICAgICAgICAgIG9uUnVuUXVlcnk9e29uUnVuUXVlcnl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnSW5zZXJ0IFRyYWNlIElEIChydW4gd2l0aCBTaGlmdCtFbnRlciknfVxuICAgICAgICAgICAgICBwb3J0YWxPcmlnaW49XCJ6aXBraW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBFeHBvcnRlZCBmb3IgdGVzdHNcbmV4cG9ydCBmdW5jdGlvbiB1c2VTZXJ2aWNlcyhkYXRhc291cmNlOiBaaXBraW5EYXRhc291cmNlKTogQXN5bmNTdGF0ZTxDYXNjYWRlck9wdGlvbltdPiB7XG4gIGNvbnN0IHVybCA9IGAke2FwaVByZWZpeH0vc2VydmljZXNgO1xuXG4gIGNvbnN0IFtzZXJ2aWNlc09wdGlvbnMsIGZldGNoXSA9IHVzZUFzeW5jRm4oYXN5bmMgKCk6IFByb21pc2U8Q2FzY2FkZXJPcHRpb25bXT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXJ2aWNlczogc3RyaW5nW10gfCBudWxsID0gYXdhaXQgZGF0YXNvdXJjZS5tZXRhZGF0YVJlcXVlc3QodXJsKTtcbiAgICAgIGlmIChzZXJ2aWNlcykge1xuICAgICAgICByZXR1cm4gc2VydmljZXMuc29ydCgpLm1hcCgoc2VydmljZSkgPT4gKHtcbiAgICAgICAgICBsYWJlbDogc2VydmljZSxcbiAgICAgICAgICB2YWx1ZTogc2VydmljZSxcbiAgICAgICAgICBpc0xlYWY6IGZhbHNlLFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbignRmFpbGVkIHRvIGxvYWQgc2VydmljZXMgZnJvbSBaaXBraW4nLCBlcnJvcikpKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfSwgW2RhdGFzb3VyY2VdKTtcblxuICB1c2VNb3VudCgoKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIHByb2JhYmx5IGNhbGwgdGhpcyBwZXJpb2RpY2FsbHkgdG8gZ2V0IG5ldyBzZXJ2aWNlcyBhZnRlciBtb3VudC5cbiAgICBmZXRjaCgpO1xuICB9KTtcblxuICByZXR1cm4gc2VydmljZXNPcHRpb25zO1xufVxuXG50eXBlIE9wdGlvbnNTdGF0ZSA9IHtcbiAgW3NlcnZpY2VOYW1lOiBzdHJpbmddOiB7XG4gICAgW3NwYW5OYW1lOiBzdHJpbmddOiB7XG4gICAgICBbdHJhY2VJZDogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gIH07XG59O1xuXG4vLyBFeHBvcnRlZCBmb3IgdGVzdHNcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2FkT3B0aW9ucyhkYXRhc291cmNlOiBaaXBraW5EYXRhc291cmNlKSB7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZU1vdW50ZWRTdGF0ZSgpO1xuICBjb25zdCBbYWxsT3B0aW9ucywgc2V0QWxsT3B0aW9uc10gPSB1c2VTdGF0ZSh7fSBhcyBPcHRpb25zU3RhdGUpO1xuXG4gIGNvbnN0IFssIGZldGNoU3BhbnNdID0gdXNlQXN5bmNGbihcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5kU3BhbnMoc2VydmljZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zdCB1cmwgPSBgJHthcGlQcmVmaXh9L3NwYW5zYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoZSByZXNwb25zZSBvZiB0aGlzIHNob3VsZCBoYXZlIGJlZW4gZnVsbCBaaXBraW5TcGFuIG9iamVjdHMgYmFzZWQgb24gQVBJIGRvY3MgYnV0IGlzIGp1c3QgbGlzdFxuICAgICAgICAvLyBvZiBzcGFuIG5hbWVzLlxuICAgICAgICAvLyBUT0RPOiBjaGVjayBpZiB0aGlzIGlzIHNvbWUgaXNzdWUgb2YgdmVyc2lvbiB1c2VkIG9yIHNvbWV0aGluZyBlbHNlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBzdHJpbmdbXSA9IGF3YWl0IGRhdGFzb3VyY2UubWV0YWRhdGFSZXF1ZXN0KHVybCwgeyBzZXJ2aWNlTmFtZTogc2VydmljZSB9KTtcbiAgICAgICAgaWYgKGlzTW91bnRlZCgpKSB7XG4gICAgICAgICAgc2V0QWxsT3B0aW9ucygoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW5PcHRpb25zID0gZnJvbVBhaXJzKHJlc3BvbnNlLm1hcCgoc3Bhbjogc3RyaW5nKSA9PiBbc3BhbiwgdW5kZWZpbmVkXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIFtzZXJ2aWNlXTogc3Bhbk9wdGlvbnMgYXMgYW55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdGYWlsZWQgdG8gbG9hZCBzcGFucyBmcm9tIFppcGtpbicsIGVycm9yKSkpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkYXRhc291cmNlLCBhbGxPcHRpb25zXVxuICApO1xuXG4gIGNvbnN0IFssIGZldGNoVHJhY2VzXSA9IHVzZUFzeW5jRm4oXG4gICAgYXN5bmMgZnVuY3Rpb24gZmluZFRyYWNlcyhzZXJ2aWNlTmFtZTogc3RyaW5nLCBzcGFuTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zdCB1cmwgPSBgJHthcGlQcmVmaXh9L3RyYWNlc2A7XG4gICAgICBjb25zdCBzZWFyY2ggPSB7XG4gICAgICAgIHNlcnZpY2VOYW1lLFxuICAgICAgICBzcGFuTmFtZSxcbiAgICAgICAgLy8gU2VlIG90aGVyIHBhcmFtcyBhbmQgZGVmYXVsdCBoZXJlIGh0dHBzOi8vemlwa2luLmlvL3ppcGtpbi1hcGkvIy9kZWZhdWx0L2dldF90cmFjZXNcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHNob3VsZCByZXR1cm4ganVzdCByb290IHRyYWNlcyBhcyB0aGVyZSBpc24ndCBhbnkgbmVzdGluZ1xuICAgICAgICBjb25zdCB0cmFjZXM6IFppcGtpblNwYW5bXVtdID0gYXdhaXQgZGF0YXNvdXJjZS5tZXRhZGF0YVJlcXVlc3QodXJsLCBzZWFyY2gpO1xuICAgICAgICBpZiAoaXNNb3VudGVkKCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdUcmFjZXMgPSB0cmFjZXMubGVuZ3RoXG4gICAgICAgICAgICA/IGZyb21QYWlycyhcbiAgICAgICAgICAgICAgICB0cmFjZXMubWFwKCh0cmFjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vdFNwYW4gPSB0cmFjZS5maW5kKChzcGFuKSA9PiAhc3Bhbi5wYXJlbnRJZCkhO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gW2Ake3Jvb3RTcGFuLm5hbWV9IFske01hdGguZmxvb3Iocm9vdFNwYW4uZHVyYXRpb24gLyAxMDAwKX0gbXNdYCwgcm9vdFNwYW4udHJhY2VJZF07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBub1RyYWNlc09wdGlvbnM7XG5cbiAgICAgICAgICBzZXRBbGxPcHRpb25zKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSBzdGF0ZVtzZXJ2aWNlTmFtZV07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgW3NlcnZpY2VOYW1lXToge1xuICAgICAgICAgICAgICAgIC4uLnNwYW5zLFxuICAgICAgICAgICAgICAgIFtzcGFuTmFtZV06IG5ld1RyYWNlcyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbignRmFpbGVkIHRvIGxvYWQgc3BhbnMgZnJvbSBaaXBraW4nLCBlcnJvcikpKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBbZGF0YXNvdXJjZV1cbiAgKTtcblxuICBjb25zdCBvbkxvYWRPcHRpb25zID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlbGVjdGVkT3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSkgPT4ge1xuICAgICAgY29uc3Qgc2VydmljZSA9IHNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGZldGNoU3BhbnMoc2VydmljZSk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3Qgc3Bhbk5hbWUgPSBzZWxlY3RlZE9wdGlvbnNbMV0udmFsdWU7XG4gICAgICAgIGZldGNoVHJhY2VzKHNlcnZpY2UsIHNwYW5OYW1lKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtmZXRjaFNwYW5zLCBmZXRjaFRyYWNlc11cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIG9uTG9hZE9wdGlvbnMsXG4gICAgYWxsT3B0aW9ucyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlTWFwVG9DYXNjYWRlck9wdGlvbnMoc2VydmljZXM6IEFzeW5jU3RhdGU8Q2FzY2FkZXJPcHRpb25bXT4sIGFsbE9wdGlvbnM6IE9wdGlvbnNTdGF0ZSkge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IGNhc2NhZGVyT3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuXG4gICAgaWYgKHNlcnZpY2VzLnZhbHVlICYmIHNlcnZpY2VzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgY2FzY2FkZXJPcHRpb25zID0gc2VydmljZXMudmFsdWUubWFwKChzZXJ2aWNlcykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNlcnZpY2VzLFxuICAgICAgICAgIGNoaWxkcmVuOlxuICAgICAgICAgICAgYWxsT3B0aW9uc1tzZXJ2aWNlcy52YWx1ZV0gJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFsbE9wdGlvbnNbc2VydmljZXMudmFsdWVdKS5tYXAoKHNwYW5OYW1lKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHNwYW5OYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzcGFuTmFtZSxcbiAgICAgICAgICAgICAgICBpc0xlYWY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOlxuICAgICAgICAgICAgICAgICAgYWxsT3B0aW9uc1tzZXJ2aWNlcy52YWx1ZV1bc3Bhbk5hbWVdICYmXG4gICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhbGxPcHRpb25zW3NlcnZpY2VzLnZhbHVlXVtzcGFuTmFtZV0pLm1hcCgodHJhY2VOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRyYWNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWxsT3B0aW9uc1tzZXJ2aWNlcy52YWx1ZV1bc3Bhbk5hbWVdW3RyYWNlTmFtZV0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChzZXJ2aWNlcy52YWx1ZSAmJiAhc2VydmljZXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICBjYXNjYWRlck9wdGlvbnMgPSBub1RyYWNlc0ZvdW5kT3B0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gY2FzY2FkZXJPcHRpb25zO1xuICB9LCBbc2VydmljZXMsIGFsbE9wdGlvbnNdKTtcbn1cblxuY29uc3QgTk9fVFJBQ0VTX0tFWSA9ICdfX05PX1RSQUNFU19fJztcbmNvbnN0IG5vVHJhY2VzRm91bmRPcHRpb25zID0gW1xuICB7XG4gICAgbGFiZWw6ICdObyB0cmFjZXMgZm91bmQnLFxuICAgIHZhbHVlOiAnbm9fdHJhY2VzJyxcbiAgICBpc0xlYWY6IHRydWUsXG5cbiAgICAvLyBDYW5ub3QgYmUgZGlzYWJsZWQgYmVjYXVzZSB0aGVuIGNhc2NhZGVyIHNob3dzICdsb2FkaW5nJyBmb3Igc29tZSByZWFzb24uXG4gICAgLy8gZGlzYWJsZWQ6IHRydWUsXG4gIH0sXG5dO1xuXG5jb25zdCBub1RyYWNlc09wdGlvbnMgPSB7XG4gICdbTm8gdHJhY2VzIGluIHRpbWUgcmFuZ2VdJzogTk9fVFJBQ0VTX0tFWSxcbn07XG4iLCJleHBvcnQgY29uc3QgYXBpUHJlZml4ID0gJy9hcGkvdjInO1xuIiwiaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhY2tlbmRTcnZSZXF1ZXN0LCBGZXRjaFJlc3BvbnNlLCBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQge1xuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIERhdGFTb3VyY2VKc29uRGF0YSxcbiAgRmllbGRUeXBlLFxuICBNdXRhYmxlRGF0YUZyYW1lLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgc2VyaWFsaXplUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscy9mZXRjaCc7XG5pbXBvcnQgeyBhcGlQcmVmaXggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBaaXBraW5RdWVyeSwgWmlwa2luU3BhbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlR3JhcGhGcmFtZXMgfSBmcm9tICcuL3V0aWxzL2dyYXBoVHJhbnNmb3JtJztcbmltcG9ydCB7IHRyYW5zZm9ybVJlc3BvbnNlIH0gZnJvbSAnLi91dGlscy90cmFuc2Zvcm1zJztcbmltcG9ydCB7IE5vZGVHcmFwaE9wdGlvbnMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL05vZGVHcmFwaFNldHRpbmdzJztcblxuZXhwb3J0IGludGVyZmFjZSBaaXBraW5Kc29uRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIG5vZGVHcmFwaD86IE5vZGVHcmFwaE9wdGlvbnM7XG59XG5cbmV4cG9ydCBjbGFzcyBaaXBraW5EYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZUFwaTxaaXBraW5RdWVyeSwgWmlwa2luSnNvbkRhdGE+IHtcbiAgdXBsb2FkZWRKc29uOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IG51bGwgPSBudWxsO1xuICBub2RlR3JhcGg/OiBOb2RlR3JhcGhPcHRpb25zO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzPFppcGtpbkpzb25EYXRhPikge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMubm9kZUdyYXBoID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5ub2RlR3JhcGg7XG4gIH1cblxuICBxdWVyeShvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFppcGtpblF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldHNbMF07XG4gICAgaWYgKHRhcmdldC5xdWVyeVR5cGUgPT09ICd1cGxvYWQnKSB7XG4gICAgICBpZiAoIXRoaXMudXBsb2FkZWRKc29uKSB7XG4gICAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdIH0pO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0cmFjZURhdGEgPSBKU09OLnBhcnNlKHRoaXMudXBsb2FkZWRKc29uIGFzIHN0cmluZyk7XG4gICAgICAgIHJldHVybiBvZihyZXNwb25zZVRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiB0cmFjZURhdGEgfSwgdGhpcy5ub2RlR3JhcGg/LmVuYWJsZWQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBvZih7IGVycm9yOiB7IG1lc3NhZ2U6ICdKU09OIGlzIG5vdCB2YWxpZCBaaXBraW4gZm9ybWF0JyB9LCBkYXRhOiBbXSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LnF1ZXJ5KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0PFppcGtpblNwYW5bXT4oYCR7YXBpUHJlZml4fS90cmFjZS8ke2VuY29kZVVSSUNvbXBvbmVudCh0YXJnZXQucXVlcnkpfWApLnBpcGUoXG4gICAgICAgIG1hcCgocmVzKSA9PiByZXNwb25zZVRvRGF0YVF1ZXJ5UmVzcG9uc2UocmVzLCB0aGlzLm5vZGVHcmFwaD8uZW5hYmxlZCkpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb2YoZW1wdHlEYXRhUXVlcnlSZXNwb25zZSk7XG4gIH1cblxuICBhc3luYyBtZXRhZGF0YVJlcXVlc3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy5yZXF1ZXN0KHVybCwgcGFyYW1zLCB7IGhpZGVGcm9tSW5zcGVjdG9yOiB0cnVlIH0pKTtcbiAgICByZXR1cm4gcmVzLmRhdGE7XG4gIH1cblxuICBhc3luYyB0ZXN0RGF0YXNvdXJjZSgpOiBQcm9taXNlPHsgc3RhdHVzOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgYXdhaXQgdGhpcy5tZXRhZGF0YVJlcXVlc3QoYCR7YXBpUHJlZml4fS9zZXJ2aWNlc2ApO1xuICAgIHJldHVybiB7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgaXMgd29ya2luZycgfTtcbiAgfVxuXG4gIGdldFF1ZXJ5RGlzcGxheVRleHQocXVlcnk6IFppcGtpblF1ZXJ5KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcXVlcnkucXVlcnk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVlc3Q8VCA9IGFueT4oXG4gICAgYXBpVXJsOiBzdHJpbmcsXG4gICAgZGF0YT86IGFueSxcbiAgICBvcHRpb25zPzogUGFydGlhbDxCYWNrZW5kU3J2UmVxdWVzdD5cbiAgKTogT2JzZXJ2YWJsZTxGZXRjaFJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3QgcGFyYW1zID0gZGF0YSA/IHNlcmlhbGl6ZVBhcmFtcyhkYXRhKSA6ICcnO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaW5zdGFuY2VTZXR0aW5ncy51cmx9JHthcGlVcmx9JHtwYXJhbXMubGVuZ3RoID8gYD8ke3BhcmFtc31gIDogJyd9YDtcbiAgICBjb25zdCByZXEgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdXJsLFxuICAgIH07XG5cbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpLmZldGNoPFQ+KHJlcSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzcG9uc2VUb0RhdGFRdWVyeVJlc3BvbnNlKHJlc3BvbnNlOiB7IGRhdGE6IFppcGtpblNwYW5bXSB9LCBub2RlR3JhcGggPSBmYWxzZSk6IERhdGFRdWVyeVJlc3BvbnNlIHtcbiAgbGV0IGRhdGEgPSByZXNwb25zZT8uZGF0YSA/IFt0cmFuc2Zvcm1SZXNwb25zZShyZXNwb25zZT8uZGF0YSldIDogW107XG4gIGlmIChub2RlR3JhcGgpIHtcbiAgICBkYXRhLnB1c2goLi4uY3JlYXRlR3JhcGhGcmFtZXMocmVzcG9uc2U/LmRhdGEpKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gIH07XG59XG5cbmNvbnN0IGVtcHR5RGF0YVF1ZXJ5UmVzcG9uc2UgPSB7XG4gIGRhdGE6IFtcbiAgICBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0cmFjZScsXG4gICAgICAgICAgdHlwZTogRmllbGRUeXBlLnRyYWNlLFxuICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbWV0YToge1xuICAgICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgdHJhY2VGb3JtYXQ6ICd6aXBraW4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn07XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBaaXBraW5EYXRhc291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IFppcGtpblF1ZXJ5RmllbGQgfSBmcm9tICcuL1F1ZXJ5RmllbGQnO1xuaW1wb3J0IHsgQ29uZmlnRWRpdG9yIH0gZnJvbSAnLi9Db25maWdFZGl0b3InO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW4oWmlwa2luRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5RWRpdG9yKFppcGtpblF1ZXJ5RmllbGQpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKTtcbiIsImltcG9ydCB7IERhdGFGcmFtZSwgTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcyBhcyBGaWVsZHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFppcGtpblNwYW4gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uLCBnZXRTdGF0cywgbWFrZUZyYW1lcywgbWFrZVNwYW5NYXAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3V0aWxzL3RyYWNpbmcnO1xuXG5pbnRlcmZhY2UgTm9kZSB7XG4gIFtGaWVsZHMuaWRdOiBzdHJpbmc7XG4gIFtGaWVsZHMudGl0bGVdOiBzdHJpbmc7XG4gIFtGaWVsZHMuc3ViVGl0bGVdOiBzdHJpbmc7XG4gIFtGaWVsZHMubWFpblN0YXRdOiBzdHJpbmc7XG4gIFtGaWVsZHMuc2Vjb25kYXJ5U3RhdF06IHN0cmluZztcbiAgW0ZpZWxkcy5jb2xvcl06IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEVkZ2Uge1xuICBbRmllbGRzLmlkXTogc3RyaW5nO1xuICBbRmllbGRzLnRhcmdldF06IHN0cmluZztcbiAgW0ZpZWxkcy5zb3VyY2VdOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHcmFwaEZyYW1lcyhkYXRhOiBaaXBraW5TcGFuW10pOiBEYXRhRnJhbWVbXSB7XG4gIGNvbnN0IHsgbm9kZXMsIGVkZ2VzIH0gPSBjb252ZXJ0VHJhY2VUb0dyYXBoKGRhdGEpO1xuICBjb25zdCBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV0gPSBtYWtlRnJhbWVzKCk7XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZXNGcmFtZS5hZGQobm9kZSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGVkZ2Ugb2YgZWRnZXMpIHtcbiAgICBlZGdlc0ZyYW1lLmFkZChlZGdlKTtcbiAgfVxuXG4gIHJldHVybiBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUcmFjZVRvR3JhcGgoc3BhbnM6IFppcGtpblNwYW5bXSk6IHsgbm9kZXM6IE5vZGVbXTsgZWRnZXM6IEVkZ2VbXSB9IHtcbiAgY29uc3Qgbm9kZXM6IE5vZGVbXSA9IFtdO1xuICBjb25zdCBlZGdlczogRWRnZVtdID0gW107XG5cbiAgY29uc3QgdHJhY2VEdXJhdGlvbiA9IGZpbmRUcmFjZUR1cmF0aW9uKHNwYW5zKTtcbiAgY29uc3Qgc3Bhbk1hcCA9IG1ha2VTcGFuTWFwKChpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA+PSBzcGFucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzcGFuOiBzcGFuc1tpbmRleF0sXG4gICAgICBpZDogc3BhbnNbaW5kZXhdLmlkLFxuICAgICAgcGFyZW50SWRzOiBzcGFuc1tpbmRleF0ucGFyZW50SWQgPyBbc3BhbnNbaW5kZXhdLnBhcmVudElkIV0gOiBbXSxcbiAgICB9O1xuICB9KTtcblxuICBmb3IgKGNvbnN0IHNwYW4gb2Ygc3BhbnMpIHtcbiAgICBjb25zdCByYW5nZXM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+ID0gc3Bhbk1hcFtzcGFuLmlkXS5jaGlsZHJlbi5tYXAoKGMpID0+IHtcbiAgICAgIGNvbnN0IHNwYW4gPSBzcGFuTWFwW2NdLnNwYW47XG4gICAgICByZXR1cm4gW3NwYW4udGltZXN0YW1wLCBzcGFuLnRpbWVzdGFtcCArIHNwYW4uZHVyYXRpb25dO1xuICAgIH0pO1xuICAgIGNvbnN0IGNoaWxkcmVuRHVyYXRpb24gPSBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uKHJhbmdlcyk7XG4gICAgY29uc3Qgc2VsZkR1cmF0aW9uID0gc3Bhbi5kdXJhdGlvbiAtIGNoaWxkcmVuRHVyYXRpb247XG4gICAgY29uc3Qgc3RhdHMgPSBnZXRTdGF0cyhzcGFuLmR1cmF0aW9uIC8gMTAwMCwgdHJhY2VEdXJhdGlvbiAvIDEwMDAsIHNlbGZEdXJhdGlvbiAvIDEwMDApO1xuXG4gICAgbm9kZXMucHVzaCh7XG4gICAgICBbRmllbGRzLmlkXTogc3Bhbi5pZCxcbiAgICAgIFtGaWVsZHMudGl0bGVdOiBzcGFuLmxvY2FsRW5kcG9pbnQ/LnNlcnZpY2VOYW1lIHx8IHNwYW4ucmVtb3RlRW5kcG9pbnQ/LnNlcnZpY2VOYW1lIHx8ICd1bmtub3duJyxcbiAgICAgIFtGaWVsZHMuc3ViVGl0bGVdOiBzcGFuLm5hbWUsXG4gICAgICBbRmllbGRzLm1haW5TdGF0XTogc3RhdHMubWFpbixcbiAgICAgIFtGaWVsZHMuc2Vjb25kYXJ5U3RhdF06IHN0YXRzLnNlY29uZGFyeSxcbiAgICAgIFtGaWVsZHMuY29sb3JdOiBzZWxmRHVyYXRpb24gLyB0cmFjZUR1cmF0aW9uLFxuICAgIH0pO1xuXG4gICAgaWYgKHNwYW4ucGFyZW50SWQgJiYgc3Bhbk1hcFtzcGFuLnBhcmVudElkXS5zcGFuKSB7XG4gICAgICBlZGdlcy5wdXNoKHtcbiAgICAgICAgW0ZpZWxkcy5pZF06IHNwYW4ucGFyZW50SWQgKyAnLS0nICsgc3Bhbi5pZCxcbiAgICAgICAgW0ZpZWxkcy50YXJnZXRdOiBzcGFuLmlkLFxuICAgICAgICBbRmllbGRzLnNvdXJjZV06IHNwYW4ucGFyZW50SWQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBub2RlcywgZWRnZXMgfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGR1cmF0aW9uIG9mIHRoZSB3aG9sZSB0cmFjZSBhcyBpdCBpc24ndCBhIHBhcnQgb2YgdGhlIHJlc3BvbnNlIGRhdGEuXG4gKiBOb3RlOiBTZWVtcyBsaWtlIHRoaXMgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIGp1c3QgbG9uZ2VzdCBzcGFuLCBidXQgdGhpcyBpcyBwcm9iYWJseSBzYWZlci5cbiAqL1xuZnVuY3Rpb24gZmluZFRyYWNlRHVyYXRpb24oc3BhbnM6IFppcGtpblNwYW5bXSk6IG51bWJlciB7XG4gIGxldCB0cmFjZUVuZFRpbWUgPSAwO1xuICBsZXQgdHJhY2VTdGFydFRpbWUgPSBJbmZpbml0eTtcblxuICBmb3IgKGNvbnN0IHNwYW4gb2Ygc3BhbnMpIHtcbiAgICBpZiAoc3Bhbi50aW1lc3RhbXAgPCB0cmFjZVN0YXJ0VGltZSkge1xuICAgICAgdHJhY2VTdGFydFRpbWUgPSBzcGFuLnRpbWVzdGFtcDtcbiAgICB9XG5cbiAgICBpZiAoc3Bhbi50aW1lc3RhbXAgKyBzcGFuLmR1cmF0aW9uID4gdHJhY2VFbmRUaW1lKSB7XG4gICAgICB0cmFjZUVuZFRpbWUgPSBzcGFuLnRpbWVzdGFtcCArIHNwYW4uZHVyYXRpb247XG4gICAgfVxuICB9XG4gIHJldHVybiB0cmFjZUVuZFRpbWUgLSB0cmFjZVN0YXJ0VGltZTtcbn1cbiIsImltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFppcGtpbkFubm90YXRpb24sIFppcGtpbkVuZHBvaW50LCBaaXBraW5TcGFuIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0YUZyYW1lLCBGaWVsZFR5cGUsIE11dGFibGVEYXRhRnJhbWUsIFRyYWNlS2V5VmFsdWVQYWlyLCBUcmFjZUxvZywgVHJhY2VTcGFuUm93IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyByZXNwb25zZSB0byBHcmFmYW5hIHRyYWNlIGRhdGEgZnJhbWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZSh6U3BhbnM6IFppcGtpblNwYW5bXSk6IERhdGFGcmFtZSB7XG4gIGNvbnN0IHNwYW5Sb3dzID0gelNwYW5zLm1hcCh0cmFuc2Zvcm1TcGFuKTtcbiAgY29uc3QgZnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7IG5hbWU6ICd0cmFjZUlEJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc3BhbklEJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAncGFyZW50U3BhbklEJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnb3BlcmF0aW9uTmFtZScsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogJ3NlcnZpY2VOYW1lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc2VydmljZVRhZ3MnLCB0eXBlOiBGaWVsZFR5cGUub3RoZXIgfSxcbiAgICAgIHsgbmFtZTogJ3N0YXJ0VGltZScsIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIgfSxcbiAgICAgIHsgbmFtZTogJ2R1cmF0aW9uJywgdHlwZTogRmllbGRUeXBlLm51bWJlciB9LFxuICAgICAgeyBuYW1lOiAnbG9ncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgICAgeyBuYW1lOiAndGFncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICd0cmFjZScsXG4gICAgICBjdXN0b206IHtcbiAgICAgICAgdHJhY2VGb3JtYXQ6ICd6aXBraW4nLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBmb3IgKGNvbnN0IHNwYW4gb2Ygc3BhblJvd3MpIHtcbiAgICBmcmFtZS5hZGQoc3Bhbik7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNwYW4oc3BhbjogWmlwa2luU3Bhbik6IFRyYWNlU3BhblJvdyB7XG4gIGNvbnN0IHJvdyA9IHtcbiAgICB0cmFjZUlEOiBzcGFuLnRyYWNlSWQsXG4gICAgc3BhbklEOiBzcGFuLmlkLFxuICAgIHBhcmVudFNwYW5JRDogc3Bhbi5wYXJlbnRJZCxcbiAgICBvcGVyYXRpb25OYW1lOiBzcGFuLm5hbWUsXG4gICAgc2VydmljZU5hbWU6IHNwYW4ubG9jYWxFbmRwb2ludD8uc2VydmljZU5hbWUgfHwgc3Bhbi5yZW1vdGVFbmRwb2ludD8uc2VydmljZU5hbWUgfHwgJ3Vua25vd24nLFxuICAgIHNlcnZpY2VUYWdzOiBzZXJ2aWNlVGFncyhzcGFuKSxcbiAgICBzdGFydFRpbWU6IHNwYW4udGltZXN0YW1wIC8gMTAwMCxcbiAgICBkdXJhdGlvbjogc3Bhbi5kdXJhdGlvbiAvIDEwMDAsXG4gICAgbG9nczogc3Bhbi5hbm5vdGF0aW9ucz8ubWFwKHRyYW5zZm9ybUFubm90YXRpb24pID8/IFtdLFxuICAgIHRhZ3M6IE9iamVjdC5rZXlzKHNwYW4udGFncyB8fCB7fSkucmVkdWNlPFRyYWNlS2V5VmFsdWVQYWlyW10+KChhY2MsIGtleSkgPT4ge1xuICAgICAgLy8gSWYgdGFnIGlzIGVycm9yIHdlIHJlbWFwIGl0IHRvIHNpbXBsZSBib29sZWFuIHNvIHRoYXQgdGhlIHRyYWNlIHVpIHdpbGwgc2hvdyBhbiBlcnJvciBpY29uLlxuICAgICAgaWYgKGtleSA9PT0gJ2Vycm9yJykge1xuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAga2V5OiAnZXJyb3InLFxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAga2V5OiAnZXJyb3JWYWx1ZScsXG4gICAgICAgICAgdmFsdWU6IHNwYW4udGFncyFbJ2Vycm9yJ10sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgICAgYWNjLnB1c2goeyBrZXksIHZhbHVlOiBzcGFuLnRhZ3MhW2tleV0gfSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKSxcbiAgfTtcblxuICBpZiAoc3Bhbi5raW5kKSB7XG4gICAgcm93LnRhZ3MgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2tpbmQnLFxuICAgICAgICB2YWx1ZTogc3Bhbi5raW5kLFxuICAgICAgfSxcbiAgICAgIC4uLihyb3cudGFncyA/PyBbXSksXG4gICAgXTtcbiAgfVxuXG4gIGlmIChzcGFuLnNoYXJlZCkge1xuICAgIHJvdy50YWdzID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdzaGFyZWQnLFxuICAgICAgICB2YWx1ZTogc3Bhbi5zaGFyZWQsXG4gICAgICB9LFxuICAgICAgLi4uKHJvdy50YWdzID8/IFtdKSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHJvdztcbn1cblxuLyoqXG4gKiBNYXBzIGFubm90YXRpb25zIGFzIGEgbG9nIGFzIHRoYXQgc2VlbXMgdG8gYmUgdGhlIGNsb3Nlc3QgdGhpbmcuXG4gKiBTZWUgaHR0cHM6Ly96aXBraW4uaW8vemlwa2luLWFwaS8jL2RlZmF1bHQvZ2V0X3RyYWNlX190cmFjZUlkX1xuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1Bbm5vdGF0aW9uKGFubm90YXRpb246IFppcGtpbkFubm90YXRpb24pOiBUcmFjZUxvZyB7XG4gIHJldHVybiB7XG4gICAgdGltZXN0YW1wOiBhbm5vdGF0aW9uLnRpbWVzdGFtcCxcbiAgICBmaWVsZHM6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYW5ub3RhdGlvbicsXG4gICAgICAgIHZhbHVlOiBhbm5vdGF0aW9uLnZhbHVlLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlVGFncyhzcGFuOiBaaXBraW5TcGFuKTogVHJhY2VLZXlWYWx1ZVBhaXJbXSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gc3Bhbi5sb2NhbEVuZHBvaW50IHx8IHNwYW4ucmVtb3RlRW5kcG9pbnQ7XG4gIGlmICghZW5kcG9pbnQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIFtcbiAgICB2YWx1ZVRvVGFnKCdpcHY0JywgZW5kcG9pbnQuaXB2NCksXG4gICAgdmFsdWVUb1RhZygnaXB2NicsIGVuZHBvaW50LmlwdjYpLFxuICAgIHZhbHVlVG9UYWcoJ3BvcnQnLCBlbmRwb2ludC5wb3J0KSxcbiAgICB2YWx1ZVRvVGFnKCdlbmRwb2ludFR5cGUnLCBzcGFuLmxvY2FsRW5kcG9pbnQgPyAnbG9jYWwnIDogJ3JlbW90ZScpLFxuICBdLmZpbHRlcihpZGVudGl0eSkgYXMgVHJhY2VLZXlWYWx1ZVBhaXJbXTtcbn1cblxuZnVuY3Rpb24gdmFsdWVUb1RhZzxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiBUcmFjZUtleVZhbHVlUGFpcjxUPiB8IHVuZGVmaW5lZCB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5LFxuICAgIHZhbHVlLFxuICB9O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgZGF0YSBmcmFtZSB0byBaaXBraW4gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybVRvWmlwa2luID0gKGRhdGE6IE11dGFibGVEYXRhRnJhbWUpOiBaaXBraW5TcGFuW10gPT4ge1xuICBsZXQgcmVzcG9uc2U6IFppcGtpblNwYW5bXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNwYW4gPSBkYXRhLmdldChpKTtcbiAgICByZXNwb25zZS5wdXNoKHtcbiAgICAgIHRyYWNlSWQ6IHNwYW4udHJhY2VJRCxcbiAgICAgIHBhcmVudElkOiBzcGFuLnBhcmVudFNwYW5JRCxcbiAgICAgIG5hbWU6IHNwYW4ub3BlcmF0aW9uTmFtZSxcbiAgICAgIGlkOiBzcGFuLnNwYW5JRCxcbiAgICAgIHRpbWVzdGFtcDogc3Bhbi5zdGFydFRpbWUgKiAxMDAwLFxuICAgICAgZHVyYXRpb246IHNwYW4uZHVyYXRpb24gKiAxMDAwLFxuICAgICAgLi4uZ2V0RW5kcG9pbnQoc3BhbiksXG4gICAgICBhbm5vdGF0aW9uczogc3Bhbi5sb2dzLmxlbmd0aFxuICAgICAgICA/IHNwYW4ubG9ncy5tYXAoKGw6IFRyYWNlTG9nKSA9PiAoeyB0aW1lc3RhbXA6IGwudGltZXN0YW1wLCB2YWx1ZTogbC5maWVsZHNbMF0udmFsdWUgfSkpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdGFnczogc3Bhbi50YWdzLmxlbmd0aFxuICAgICAgICA/IHNwYW4udGFnc1xuICAgICAgICAgICAgLmZpbHRlcigodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ICE9PSAna2luZCcgJiYgdC5rZXkgIT09ICdlbmRwb2ludFR5cGUnICYmIHQua2V5ICE9PSAnc2hhcmVkJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHRhZ3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHQ6IFRyYWNlS2V5VmFsdWVQYWlyKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0LmtleSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi50YWdzLFxuICAgICAgICAgICAgICAgICAgW3Qua2V5XTogc3Bhbi50YWdzLmZpbmQoKHQ6IFRyYWNlS2V5VmFsdWVQYWlyKSA9PiB0LmtleSA9PT0gJ2Vycm9yVmFsdWUnKS52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLnRhZ3MsIFt0LmtleV06IHQudmFsdWUgfTtcbiAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGtpbmQ6IHNwYW4udGFncy5maW5kKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgPT09ICdraW5kJyk/LnZhbHVlLFxuICAgICAgc2hhcmVkOiBzcGFuLnRhZ3MuZmluZCgodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ID09PSAnc2hhcmVkJyk/LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuLy8gUmV0dXJucyByZW1vdGUgb3IgbG9jYWwgZW5kcG9pbnQgb2JqZWN0XG5jb25zdCBnZXRFbmRwb2ludCA9IChzcGFuOiBhbnkpOiB7IFtrZXk6IHN0cmluZ106IFppcGtpbkVuZHBvaW50IH0gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBrZXkgPVxuICAgIHNwYW4uc2VydmljZVRhZ3MuZmluZCgodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ID09PSAnZW5kcG9pbnRUeXBlJyk/LnZhbHVlID09PSAnbG9jYWwnXG4gICAgICA/ICdsb2NhbEVuZHBvaW50J1xuICAgICAgOiAncmVtb3RlRW5kcG9pbnQnO1xuICByZXR1cm4gc3Bhbi5zZXJ2aWNlTmFtZSAhPT0gJ3Vua25vd24nXG4gICAgPyB7XG4gICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgc2VydmljZU5hbWU6IHNwYW4uc2VydmljZU5hbWUsXG4gICAgICAgICAgaXB2NDogc3Bhbi5zZXJ2aWNlVGFncy5maW5kKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgPT09ICdpcHY0Jyk/LnZhbHVlLFxuICAgICAgICAgIGlwdjY6IHNwYW4uc2VydmljZVRhZ3MuZmluZCgodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ID09PSAnaXB2NicpPy52YWx1ZSxcbiAgICAgICAgICBwb3J0OiBzcGFuLnNlcnZpY2VUYWdzLmZpbmQoKHQ6IFRyYWNlS2V5VmFsdWVQYWlyKSA9PiB0LmtleSA9PT0gJ3BvcnQnKT8udmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgOiB1bmRlZmluZWQ7XG59O1xuIiwiaW1wb3J0IHVzZUVmZmVjdE9uY2UgZnJvbSAnLi91c2VFZmZlY3RPbmNlJztcbnZhciB1c2VNb3VudCA9IGZ1bmN0aW9uIChmbikge1xuICAgIHVzZUVmZmVjdE9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBmbigpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZU1vdW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3NzIiwidXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uIiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIklubGluZVN3aXRjaCIsInVzZVN0eWxlcyIsIk5vZGVHcmFwaFNldHRpbmdzIiwib3B0aW9ucyIsIm9uT3B0aW9uc0NoYW5nZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImNvbnRhaW5lciIsInJvdyIsImpzb25EYXRhIiwibm9kZUdyYXBoIiwiZW5hYmxlZCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJ0aGVtZSIsIlNlZ21lbnRJbnB1dCIsIklubGluZUxhYmVsIiwiSWNvbiIsIkVRX1dJRFRIIiwiS2V5VmFsdWVJbnB1dCIsInZhbHVlcyIsIm9uQ2hhbmdlIiwiaWQiLCJrZXlQbGFjZWhvbGRlciIsInZhbHVlUGxhY2Vob2xkZXIiLCJ3cmFwcGVyIiwibGVuZ3RoIiwibWFwIiwidmFsdWUiLCJpZHgiLCJwYWlyIiwia2V5IiwiZSIsInYiLCJpIiwiU3RyaW5nIiwib3BlcmF0b3IiLCJzbGljZSIsInNwYWNpbmciLCJ4cyIsInBhbGV0dGUiLCJvcmFuZ2UiLCJEYXRhU291cmNlUGlja2VyIiwiSW5wdXQiLCJUYWdzSW5wdXQiLCJUcmFjZVRvTG9nc1NldHRpbmdzIiwid2lkdGgiLCJpbmZvVGV4dCIsInRyYWNlc1RvTG9ncyIsImRhdGFzb3VyY2VVaWQiLCJkcyIsInVpZCIsInRhZ3MiLCJtYXBUYWdOYW1lc0VuYWJsZWQiLCJtYXBwZWRUYWdzIiwidGFnIiwic3BhblN0YXJ0VGltZVNoaWZ0Iiwic3BhbkVuZFRpbWVTaGlmdCIsImZpbHRlckJ5VHJhY2VJRCIsImZpbHRlckJ5U3BhbklEIiwibWQiLCJjb2xvcnMiLCJ0ZXh0U2VtaVdlYWsiLCJGaWVsZFR5cGUiLCJNdXRhYmxlRGF0YUZyYW1lIiwiTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcyIsIkZpZWxkcyIsImdldE5vbk92ZXJsYXBwaW5nRHVyYXRpb24iLCJyYW5nZXMiLCJzb3J0IiwiYSIsImIiLCJtZXJnZWRSYW5nZXMiLCJyZWR1Y2UiLCJhY2MiLCJyYW5nZSIsInRhaWwiLCJwcmV2U3RhcnQiLCJwcmV2RW5kIiwic3RhcnQiLCJlbmQiLCJtYWtlU3Bhbk1hcCIsImdldFNwYW4iLCJzcGFuTWFwIiwic3BhbiIsImluZGV4IiwiY2hpbGRyZW4iLCJwYXJlbnRJZCIsInBhcmVudElkcyIsInVuZGVmaW5lZCIsInB1c2giLCJnZXRTdGF0cyIsImR1cmF0aW9uIiwidHJhY2VEdXJhdGlvbiIsInNlbGZEdXJhdGlvbiIsIm1haW4iLCJ0b0ZpeGVkTm9UcmFpbGluZ1plcm9zIiwic2Vjb25kYXJ5IiwibiIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwibWFrZUZyYW1lcyIsIm5vZGVzRnJhbWUiLCJmaWVsZHMiLCJuYW1lIiwidHlwZSIsInN0cmluZyIsInRpdGxlIiwic3ViVGl0bGUiLCJtYWluU3RhdCIsImNvbmZpZyIsImRpc3BsYXlOYW1lIiwic2Vjb25kYXJ5U3RhdCIsImNvbG9yIiwibnVtYmVyIiwibW9kZSIsIm1ldGEiLCJwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSIsImVkZ2VzRnJhbWUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJEYXRhU291cmNlSHR0cFNldHRpbmdzIiwiQ29uZmlnRWRpdG9yIiwiQnV0dG9uQ2FzY2FkZXIiLCJGaWxlRHJvcHpvbmUiLCJSYWRpb0J1dHRvbkdyb3VwIiwidXNlVGhlbWUyIiwiUXVlcnlGaWVsZCIsInVzZVN0eWxlczIiLCJub3RpZnlBcHAiLCJjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiIsImRpc3BhdGNoIiwiZnJvbVBhaXJzIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VBc3luY0ZuIiwidXNlTW91bnQiLCJ1c2VNb3VudGVkU3RhdGUiLCJhcGlQcmVmaXgiLCJ0cmFjZXNDYXNjYWRlciIsImxhYmVsIiwibWFyZ2luUmlnaHQiLCJaaXBraW5RdWVyeUZpZWxkIiwicXVlcnkiLCJvblJ1blF1ZXJ5IiwiZGF0YXNvdXJjZSIsInNlcnZpY2VPcHRpb25zIiwidXNlU2VydmljZXMiLCJvbkxvYWRPcHRpb25zIiwiYWxsT3B0aW9ucyIsInVzZUxvYWRPcHRpb25zIiwib25TZWxlY3RUcmFjZSIsInNlbGVjdGVkT3B0aW9ucyIsInRyYWNlSUQiLCJvbkNoYW5nZVF1ZXJ5IiwibmV4dFF1ZXJ5IiwiY2FzY2FkZXJPcHRpb25zIiwidXNlTWFwVG9DYXNjYWRlck9wdGlvbnMiLCJxdWVyeVR5cGUiLCJwYWRkaW5nIiwibXVsdGlwbGUiLCJyZXN1bHQiLCJ1cGxvYWRlZEpzb24iLCJjbGFzc05hbWUiLCJ1cmwiLCJzZXJ2aWNlc09wdGlvbnMiLCJmZXRjaCIsInNlcnZpY2VzIiwibWV0YWRhdGFSZXF1ZXN0Iiwic2VydmljZSIsImlzTGVhZiIsImVycm9yIiwiaXNNb3VudGVkIiwic2V0QWxsT3B0aW9ucyIsImZldGNoU3BhbnMiLCJmaW5kU3BhbnMiLCJyZXNwb25zZSIsInNlcnZpY2VOYW1lIiwic3RhdGUiLCJzcGFuT3B0aW9ucyIsImZldGNoVHJhY2VzIiwiZmluZFRyYWNlcyIsInNwYW5OYW1lIiwic2VhcmNoIiwidHJhY2VzIiwibmV3VHJhY2VzIiwidHJhY2UiLCJyb290U3BhbiIsImZpbmQiLCJNYXRoIiwiZmxvb3IiLCJ0cmFjZUlkIiwibm9UcmFjZXNPcHRpb25zIiwic3BhbnMiLCJPYmplY3QiLCJrZXlzIiwidHJhY2VOYW1lIiwibm9UcmFjZXNGb3VuZE9wdGlvbnMiLCJOT19UUkFDRVNfS0VZIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwiZ2V0QmFja2VuZFNydiIsIkRhdGFTb3VyY2VBcGkiLCJzZXJpYWxpemVQYXJhbXMiLCJjcmVhdGVHcmFwaEZyYW1lcyIsInRyYW5zZm9ybVJlc3BvbnNlIiwiWmlwa2luRGF0YXNvdXJjZSIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2VTZXR0aW5ncyIsInRhcmdldHMiLCJkYXRhIiwidHJhY2VEYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUb0RhdGFRdWVyeVJlc3BvbnNlIiwibWVzc2FnZSIsInJlcXVlc3QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwaXBlIiwicmVzIiwiZW1wdHlEYXRhUXVlcnlSZXNwb25zZSIsInBhcmFtcyIsImhpZGVGcm9tSW5zcGVjdG9yIiwidGVzdERhdGFzb3VyY2UiLCJzdGF0dXMiLCJnZXRRdWVyeURpc3BsYXlUZXh0IiwiYXBpVXJsIiwicmVxIiwiY3VzdG9tIiwidHJhY2VGb3JtYXQiLCJEYXRhU291cmNlUGx1Z2luIiwicGx1Z2luIiwic2V0UXVlcnlFZGl0b3IiLCJzZXRDb25maWdFZGl0b3IiLCJub2RlcyIsImVkZ2VzIiwiY29udmVydFRyYWNlVG9HcmFwaCIsIm5vZGUiLCJhZGQiLCJlZGdlIiwiZmluZFRyYWNlRHVyYXRpb24iLCJjIiwidGltZXN0YW1wIiwiY2hpbGRyZW5EdXJhdGlvbiIsInN0YXRzIiwibG9jYWxFbmRwb2ludCIsInJlbW90ZUVuZHBvaW50IiwidHJhY2VFbmRUaW1lIiwidHJhY2VTdGFydFRpbWUiLCJJbmZpbml0eSIsImlkZW50aXR5IiwielNwYW5zIiwic3BhblJvd3MiLCJ0cmFuc2Zvcm1TcGFuIiwiZnJhbWUiLCJvdGhlciIsInNwYW5JRCIsInBhcmVudFNwYW5JRCIsIm9wZXJhdGlvbk5hbWUiLCJzZXJ2aWNlVGFncyIsInN0YXJ0VGltZSIsImxvZ3MiLCJhbm5vdGF0aW9ucyIsInRyYW5zZm9ybUFubm90YXRpb24iLCJraW5kIiwic2hhcmVkIiwiYW5ub3RhdGlvbiIsImVuZHBvaW50IiwidmFsdWVUb1RhZyIsImlwdjQiLCJpcHY2IiwicG9ydCIsImZpbHRlciIsInRyYW5zZm9ybVRvWmlwa2luIiwiZ2V0IiwiZ2V0RW5kcG9pbnQiLCJsIiwidCJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["tempoPlugin"],{

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

/***/ "./public/app/plugins/datasource/loki/components/LokiLabelBrowser.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokiLabelBrowser": () => (/* binding */ LokiLabelBrowser),
/* harmony export */   "UnthemedLokiLabelBrowser": () => (/* binding */ UnthemedLokiLabelBrowser),
/* harmony export */   "buildSelector": () => (/* binding */ buildSelector),
/* harmony export */   "facetLabels": () => (/* binding */ facetLabels)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _Label, _Label2, _Label3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Hard limit on labels to render



const MAX_LABEL_COUNT = 1000;
const MAX_VALUE_COUNT = 10000;
const MAX_AUTO_SELECT = 4;
const EMPTY_SELECTOR = '{}';
function buildSelector(labels) {
  const selectedLabels = [];

  for (const label of labels) {
    if (label.selected && label.values && label.values.length > 0) {
      const selectedValues = label.values.filter(value => value.selected).map(value => value.name);

      if (selectedValues.length > 1) {
        selectedLabels.push(`${label.name}=~"${selectedValues.join('|')}"`);
      } else if (selectedValues.length === 1) {
        selectedLabels.push(`${label.name}="${selectedValues[0]}"`);
      }
    }
  }

  return ['{', selectedLabels.join(','), '}'].join('');
}
function facetLabels(labels, possibleLabels, lastFacetted) {
  return labels.map(label => {
    const possibleValues = possibleLabels[label.name];

    if (possibleValues) {
      let existingValues;

      if (label.name === lastFacetted && label.values) {
        // Facetting this label, show all values
        existingValues = label.values;
      } else {
        var _label$values;

        // Keep selection in other facets
        const selectedValues = new Set(((_label$values = label.values) === null || _label$values === void 0 ? void 0 : _label$values.filter(value => value.selected).map(value => value.name)) || []); // Values for this label have not been requested yet, let's use the facetted ones as the initial values

        existingValues = possibleValues.map(value => ({
          name: value,
          selected: selectedValues.has(value)
        }));
      }

      return Object.assign({}, label, {
        loading: false,
        values: existingValues,
        facets: existingValues.length
      });
    } // Label is facetted out, hide all values


    return Object.assign({}, label, {
      loading: false,
      hidden: !possibleValues,
      values: undefined,
      facets: 0
    });
  });
}

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    background-color: ${theme.colors.background.secondary};
    padding: ${theme.spacing(2)};
    width: 100%;
  `,
  list: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-top: ${theme.spacing(1)};
    display: flex;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: auto;
  `,
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    & + & {
      margin: ${theme.spacing(2, 0)};
    }
    position: relative;
  `,
  selector: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    font-family: ${theme.typography.fontFamilyMonospace};
    margin-bottom: ${theme.spacing(1)};
  `,
  status: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    padding: ${theme.spacing(0.5)};
    color: ${theme.colors.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* using absolute positioning because flex interferes with ellipsis */
    position: absolute;
    width: 50%;
    right: 0;
    text-align: right;
    transition: opacity 100ms linear;
    opacity: 0;
  `,
  statusShowing: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    opacity: 1;
  `,
  error: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    color: ${theme.colors.error.main};
  `,
  valueList: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-right: ${theme.spacing(1)};
  `,
  valueListWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    border-left: 1px solid ${theme.colors.border.medium};
    margin: ${theme.spacing(1, 0)};
    padding: ${theme.spacing(1, 0, 1, 1)};
  `,
  valueListArea: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${theme.spacing(1)};
  `,
  valueTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin-left: -${theme.spacing(0.5)};
    margin-bottom: ${theme.spacing(1)};
  `,
  validationStatus: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    padding: ${theme.spacing(0.5)};
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.colors.text.maxContrast};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
});

class UnthemedLokiLabelBrowser extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      labels: [],
      searchTerm: '',
      status: 'Ready',
      error: '',
      validationStatus: ''
    });

    _defineProperty(this, "onChangeSearch", event => {
      this.setState({
        searchTerm: event.target.value
      });
    });

    _defineProperty(this, "onClickRunLogsQuery", () => {
      const selector = buildSelector(this.state.labels);
      this.props.onChange(selector);
    });

    _defineProperty(this, "onClickRunMetricsQuery", () => {
      const selector = buildSelector(this.state.labels);
      const query = `rate(${selector}[$__interval])`;
      this.props.onChange(query);
    });

    _defineProperty(this, "onClickClear", () => {
      this.setState(state => {
        const labels = state.labels.map(label => Object.assign({}, label, {
          values: undefined,
          selected: false,
          loading: false,
          hidden: false,
          facets: undefined
        }));
        return {
          labels,
          searchTerm: '',
          status: '',
          error: '',
          validationStatus: ''
        };
      });
      this.props.deleteLastUsedLabels();
    });

    _defineProperty(this, "onClickLabel", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label) {
        return;
      } // Toggle selected state


      const selected = !label.selected;
      let nextValue = {
        selected
      };

      if (label.values && !selected) {
        // Deselect all values if label was deselected
        const values = label.values.map(value => Object.assign({}, value, {
          selected: false
        }));
        nextValue = Object.assign({}, nextValue, {
          facets: 0,
          values
        });
      } // Resetting search to prevent empty results


      this.setState({
        searchTerm: ''
      });
      this.updateLabelState(name, nextValue, '', () => this.doFacettingForLabel(name));
    });

    _defineProperty(this, "onClickValue", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label || !label.values) {
        return;
      } // Resetting search to prevent empty results


      this.setState({
        searchTerm: ''
      }); // Toggling value for selected label, leaving other values intact

      const values = label.values.map(v => Object.assign({}, v, {
        selected: v.name === value ? !v.selected : v.selected
      }));
      this.updateLabelState(name, {
        values
      }, '', () => this.doFacetting(name));
    });

    _defineProperty(this, "onClickValidate", () => {
      const selector = buildSelector(this.state.labels);
      this.validateSelector(selector);
    });

    _defineProperty(this, "doFacetting", lastFacetted => {
      const selector = buildSelector(this.state.labels);

      if (selector === EMPTY_SELECTOR) {
        // Clear up facetting
        const labels = this.state.labels.map(label => {
          return Object.assign({}, label, {
            facets: 0,
            values: undefined,
            hidden: false
          });
        });
        this.setState({
          labels
        }, () => {
          // Get fresh set of values
          this.state.labels.forEach(label => label.selected && this.fetchValues(label.name, selector));
        });
      } else {
        // Do facetting
        this.fetchSeries(selector, lastFacetted);
      }
    });
  }

  updateLabelState(name, updatedFields, status = '', cb) {
    this.setState(state => {
      const labels = state.labels.map(label => {
        if (label.name === name) {
          return Object.assign({}, label, updatedFields);
        }

        return label;
      }); // New status overrides errors

      const error = status ? '' : state.error;
      return {
        labels,
        status,
        error,
        validationStatus: ''
      };
    }, cb);
  }

  componentDidMount() {
    const {
      languageProvider,
      autoSelect = MAX_AUTO_SELECT,
      lastUsedLabels
    } = this.props;

    if (languageProvider) {
      const selectedLabels = lastUsedLabels;
      languageProvider.start().then(() => {
        let rawLabels = languageProvider.getLabelKeys();

        if (rawLabels.length > MAX_LABEL_COUNT) {
          const error = `Too many labels found (showing only ${MAX_LABEL_COUNT} of ${rawLabels.length})`;
          rawLabels = rawLabels.slice(0, MAX_LABEL_COUNT);
          this.setState({
            error
          });
        } // Auto-select all labels if label list is small enough


        const labels = rawLabels.map((label, i, arr) => ({
          name: label,
          selected: arr.length <= autoSelect && selectedLabels.length === 0 || selectedLabels.includes(label),
          loading: false
        })); // Pre-fetch values for selected labels

        this.setState({
          labels
        }, () => {
          this.state.labels.forEach(label => {
            if (label.selected) {
              this.fetchValues(label.name, EMPTY_SELECTOR);
            }
          });
        });
      });
    }
  }

  doFacettingForLabel(name) {
    const label = this.state.labels.find(l => l.name === name);

    if (!label) {
      return;
    }

    const selectedLabels = this.state.labels.filter(label => label.selected).map(label => label.name);
    this.props.storeLastUsedLabels(selectedLabels);

    if (label.selected) {
      // Refetch values for newly selected label...
      if (!label.values) {
        this.fetchValues(name, buildSelector(this.state.labels));
      }
    } else {
      // Only need to facet when deselecting labels
      this.doFacetting();
    }
  }

  async fetchValues(name, selector) {
    const {
      languageProvider
    } = this.props;
    this.updateLabelState(name, {
      loading: true
    }, `Fetching values for ${name}`);

    try {
      let rawValues = await languageProvider.getLabelValues(name); // If selector changed, clear loading state and discard result by returning early

      if (selector !== buildSelector(this.state.labels)) {
        this.updateLabelState(name, {
          loading: false
        }, '');
        return;
      }

      if (rawValues.length > MAX_VALUE_COUNT) {
        const error = `Too many values for ${name} (showing only ${MAX_VALUE_COUNT} of ${rawValues.length})`;
        rawValues = rawValues.slice(0, MAX_VALUE_COUNT);
        this.setState({
          error
        });
      }

      const values = rawValues.map(value => ({
        name: value
      }));
      this.updateLabelState(name, {
        values,
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  async fetchSeries(selector, lastFacetted) {
    const {
      languageProvider
    } = this.props;

    if (lastFacetted) {
      this.updateLabelState(lastFacetted, {
        loading: true
      }, `Facetting labels for ${selector}`);
    }

    try {
      const possibleLabels = await languageProvider.fetchSeriesLabels(selector, true); // If selector changed, clear loading state and discard result by returning early

      if (selector !== buildSelector(this.state.labels)) {
        if (lastFacetted) {
          this.updateLabelState(lastFacetted, {
            loading: false
          });
        }

        return;
      }

      if (Object.keys(possibleLabels).length === 0) {
        this.setState({
          error: `Empty results, no matching label for ${selector}`
        });
        return;
      }

      const labels = facetLabels(this.state.labels, possibleLabels, lastFacetted);
      this.setState({
        labels,
        error: ''
      });

      if (lastFacetted) {
        this.updateLabelState(lastFacetted, {
          loading: false
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async validateSelector(selector) {
    const {
      languageProvider
    } = this.props;
    this.setState({
      validationStatus: `Validating selector ${selector}`,
      error: ''
    });
    const streams = await languageProvider.fetchSeries(selector);
    this.setState({
      validationStatus: `Selector is valid (${streams.length} streams found)`
    });
  }

  render() {
    const {
      theme
    } = this.props;
    const {
      labels,
      searchTerm,
      status,
      error,
      validationStatus
    } = this.state;

    if (labels.length === 0) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: "Loading labels..."
      }));
    }

    const styles = getStyles(theme);
    const selector = buildSelector(this.state.labels);
    const empty = selector === EMPTY_SELECTOR;
    let selectedLabels = labels.filter(label => label.selected && label.values);

    if (searchTerm) {
      selectedLabels = selectedLabels.map(label => {
        const searchResults = label.values.filter(value => {
          // Always return selected values
          if (value.selected) {
            value.highlightParts = undefined;
            return true;
          }

          const fuzzyMatchResult = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.fuzzyMatch)(value.name.toLowerCase(), searchTerm.toLowerCase());

          if (fuzzyMatchResult.found) {
            value.highlightParts = fuzzyMatchResult.ranges;
            value.order = fuzzyMatchResult.distance;
            return true;
          } else {
            return false;
          }
        });
        return Object.assign({}, label, {
          values: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.sortBy)(searchResults, value => value.selected ? -Infinity : value.order)
        });
      });
    } else {
      // Clear highlight parts when searchTerm is cleared
      selectedLabels = this.state.labels.filter(label => label.selected && label.values).map(label => Object.assign({}, label, {
        values: label !== null && label !== void 0 && label.values ? label.values.map(value => Object.assign({}, value, {
          highlightParts: undefined
        })) : []
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: styles.section,
        children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
          description: "Which labels would you like to consider for your search?",
          children: "1. Select labels to search in"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: styles.list,
          children: labels.map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.BrowserLabel, {
            name: label.name,
            loading: label.loading,
            active: label.selected,
            hidden: label.hidden,
            facets: label.facets,
            onClick: this.onClickLabel
          }, label.name))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: styles.section,
        children: [_Label2 || (_Label2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
          description: "Choose the label values that you would like to use for the query. Use the search field to find values across selected labels.",
          children: "2. Find values for the selected labels"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            onChange: this.onChangeSearch,
            "aria-label": "Filter expression for values",
            value: searchTerm
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: styles.valueListArea,
          children: selectedLabels.map(label => {
            var _label$values2, _label$values3;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              role: "list",
              className: styles.valueListWrapper,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: styles.valueTitle,
                "aria-label": `Values for ${label.name}`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.BrowserLabel, {
                  name: label.name,
                  loading: label.loading,
                  active: label.selected,
                  hidden: label.hidden //If no facets, we want to show number of all label values
                  ,
                  facets: label.facets || ((_label$values2 = label.values) === null || _label$values2 === void 0 ? void 0 : _label$values2.length),
                  onClick: this.onClickLabel
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_5__.FixedSizeList, {
                height: 200,
                itemCount: ((_label$values3 = label.values) === null || _label$values3 === void 0 ? void 0 : _label$values3.length) || 0,
                itemSize: 28,
                itemKey: i => label.values[i].name,
                width: 200,
                className: styles.valueList,
                children: ({
                  index,
                  style
                }) => {
                  var _label$values4;

                  const value = (_label$values4 = label.values) === null || _label$values4 === void 0 ? void 0 : _label$values4[index];

                  if (!value) {
                    return null;
                  }

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    style: style,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.BrowserLabel, {
                      name: label.name,
                      value: value === null || value === void 0 ? void 0 : value.name,
                      active: value === null || value === void 0 ? void 0 : value.selected,
                      highlightParts: value === null || value === void 0 ? void 0 : value.highlightParts,
                      onClick: this.onClickValue,
                      searchTerm: searchTerm
                    })
                  });
                }
              })]
            }, label.name);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: styles.section,
        children: [_Label3 || (_Label3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
          children: "3. Resulting selector"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          "aria-label": "selector",
          className: styles.selector,
          children: selector
        }), validationStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: styles.validationStatus,
          children: validationStatus
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            "aria-label": "Use selector as logs button",
            disabled: empty,
            onClick: this.onClickRunLogsQuery,
            children: "Show logs"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            "aria-label": "Use selector as metrics button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickRunMetricsQuery,
            children: "Show logs rate"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            "aria-label": "Validate submit button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickValidate,
            children: "Validate selector"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            "aria-label": "Selector clear button",
            variant: "secondary",
            onClick: this.onClickClear,
            children: "Clear"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.status, (status || error) && styles.statusShowing),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: error ? styles.error : '',
              children: error || status
            })
          })]
        })]
      })]
    });
  }

}
const LokiLabelBrowser = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.withTheme2)(UnthemedLokiLabelBrowser);

/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokiQueryField": () => (/* binding */ LokiQueryField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _LokiLabelBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiLabelBrowser.tsx");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/language_utils.ts");
/* harmony import */ var app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const LAST_USED_LABELS_KEY = 'grafana.datasources.loki.browser.labels';

function getChooserText(hasSyntax, hasLogLabels) {
  if (!hasSyntax) {
    return 'Loading labels...';
  }

  if (!hasLogLabels) {
    return '(No logs found)';
  }

  return 'Log browser';
}

function willApplySuggestion(suggestion, {
  typeaheadContext,
  typeaheadText
}) {
  // Modify suggestion based on context
  switch (typeaheadContext) {
    case 'context-labels':
      {
        const nextChar = _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.DOMUtil.getNextCharacter();

        if (!nextChar || nextChar === '}' || nextChar === ',') {
          suggestion += '=';
        }

        break;
      }

    case 'context-label-values':
      {
        // Always add quotes and remove existing ones instead
        if (!typeaheadText.match(/^(!?=~?"|")/)) {
          suggestion = `"${suggestion}`;
        }

        if (_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.DOMUtil.getNextCharacter() !== '"') {
          suggestion = `${suggestion}"`;
        }

        break;
      }

    default:
  }

  return suggestion;
}

class LokiQueryField extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "plugins", void 0);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "onChangeLabelBrowser", selector => {
      this.onChangeQuery(selector, true);
      this.setState({
        labelBrowserVisible: false
      });
    });

    _defineProperty(this, "onChangeQuery", (value, override) => {
      // Send text change to parent
      const {
        query,
        onChange,
        onRunQuery
      } = this.props;

      if (onChange) {
        const nextQuery = Object.assign({}, query, {
          expr: value
        });
        onChange(nextQuery);

        if (override && onRunQuery) {
          onRunQuery();
        }
      }
    });

    _defineProperty(this, "onClickChooserButton", () => {
      this.setState(state => ({
        labelBrowserVisible: !state.labelBrowserVisible
      }));
    });

    _defineProperty(this, "onTypeahead", async typeahead => {
      const {
        datasource
      } = this.props;

      if (!datasource.languageProvider) {
        return {
          suggestions: []
        };
      }

      const lokiLanguageProvider = datasource.languageProvider;
      const {
        history
      } = this.props;
      const {
        prefix,
        text,
        value,
        wrapperClasses,
        labelKey
      } = typeahead;
      const result = await lokiLanguageProvider.provideCompletionItems({
        text,
        value,
        prefix,
        wrapperClasses,
        labelKey
      }, {
        history
      });
      return result;
    });

    this.state = {
      labelsLoaded: false,
      labelBrowserVisible: false
    };
    this.plugins = [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.BracesPlugin)(), (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SlatePrism)({
      onlyIn: node => node.object === 'block' && node.type === 'code_block',
      getSyntax: node => 'logql'
    }, Object.assign({}, prismjs__WEBPACK_IMPORTED_MODULE_3__.languages, {
      logql: this.props.datasource.languageProvider.getSyntax()
    }))];
  }

  async componentDidMount() {
    this._isMounted = true;
    await this.props.datasource.languageProvider.start();

    if (this._isMounted) {
      this.setState({
        labelsLoaded: true
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps) {
    const {
      range,
      datasource: {
        languageProvider
      }
    } = this.props;
    const refreshLabels = (0,_language_utils__WEBPACK_IMPORTED_MODULE_4__.shouldRefreshLabels)(range, prevProps.range); // We want to refresh labels when range changes (we round up intervals to a minute)

    if (refreshLabels) {
      languageProvider.fetchLabels();
    }
  }

  render() {
    const {
      ExtraFieldElement,
      query,
      datasource,
      placeholder = 'Enter a Loki query (run with Shift+Enter)'
    } = this.props;
    const {
      labelsLoaded,
      labelBrowserVisible
    } = this.state;
    const lokiLanguageProvider = datasource.languageProvider;
    const cleanText = datasource.languageProvider ? lokiLanguageProvider.cleanText : undefined;
    const hasLogLabels = lokiLanguageProvider.getLabelKeys().length > 0;
    const chooserText = getChooserText(labelsLoaded, hasLogLabels);
    const buttonDisabled = !(labelsLoaded && hasLogLabels);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_5__.LocalStorageValueProvider, {
      storageKey: LAST_USED_LABELS_KEY,
      defaultValue: [],
      children: (lastUsedLabels, onLastUsedLabelsSave, onLastUsedLabelsDelete) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "gf-form-inline gf-form-inline--xs-view-flex-column flex-grow-1",
            "data-testid": this.props['data-testid'],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              className: "gf-form-label query-keyword pointer",
              onClick: this.onClickChooserButton,
              disabled: buttonDisabled,
              children: [chooserText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                name: labelBrowserVisible ? 'angle-down' : 'angle-right'
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "gf-form gf-form--grow flex-shrink-1 min-width-15",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.QueryField, {
                additionalPlugins: this.plugins,
                cleanText: cleanText,
                query: query.expr,
                onTypeahead: this.onTypeahead,
                onWillApplySuggestion: willApplySuggestion,
                onChange: this.onChangeQuery,
                onBlur: this.props.onBlur,
                onRunQuery: this.props.onRunQuery,
                placeholder: placeholder,
                portalOrigin: "loki"
              })
            })]
          }), labelBrowserVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LokiLabelBrowser__WEBPACK_IMPORTED_MODULE_2__.LokiLabelBrowser, {
              languageProvider: lokiLanguageProvider,
              onChange: this.onChangeLabelBrowser,
              lastUsedLabels: lastUsedLabels || [],
              storeLastUsedLabels: onLastUsedLabelsSave,
              deleteLastUsedLabels: onLastUsedLabelsDelete
            })
          }), ExtraFieldElement]
        });
      }
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/loki/language_utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shouldRefreshLabels": () => (/* binding */ shouldRefreshLabels)
/* harmony export */ });
function roundMsToMin(milliseconds) {
  return roundSecToMin(milliseconds / 1000);
}

function roundSecToMin(seconds) {
  return Math.floor(seconds / 60);
}

function shouldRefreshLabels(range, prevRange) {
  if (range && prevRange) {
    const sameMinuteFrom = roundMsToMin(range.from.valueOf()) === roundMsToMin(prevRange.from.valueOf());
    const sameMinuteTo = roundMsToMin(range.to.valueOf()) === roundMsToMin(prevRange.to.valueOf()); // If both are same, don't need to refresh

    return !(sameMinuteFrom && sameMinuteTo);
  }

  return false;
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/CheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheatSheet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;




function CheatSheet() {
  return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
      id: "tempo-cheat-sheet",
      children: "Tempo Cheat Sheet"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      children: "Tempo is a trace id lookup store. Enter a trace id in the above field and hit \u201CRun Query\u201D to retrieve your trace. Tempo is generally paired with other datasources such as Loki or Prometheus to find traces."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["Here are some", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "https://grafana.com/docs/tempo/latest/guides/instrumentation/",
        target: "blank",
        children: "instrumentation examples"
      }), ' ', "to get you started with trace discovery through logs and metrics (exemplars)."]
    })]
  }));
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/QueryEditor/NativeSearch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/tempo/syntax.ts");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _language_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/tempo/language_provider.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");














const PRISM_LANGUAGE = 'tempo';
const durationPlaceholder = 'e.g. 1.2s, 100ms';
const plugins = [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.BracesPlugin)(), (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SlatePrism)({
  onlyIn: node => node.object === 'block' && node.type === 'code_block',
  getSyntax: () => PRISM_LANGUAGE
})];
(prismjs__WEBPACK_IMPORTED_MODULE_3___default().languages)[PRISM_LANGUAGE] = _syntax__WEBPACK_IMPORTED_MODULE_2__.tokenizer;

const NativeSearch = ({
  datasource,
  query,
  onChange,
  onBlur,
  onRunQuery
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const languageProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new _language_provider__WEBPACK_IMPORTED_MODULE_6__["default"](datasource), [datasource]);
  const [hasSyntaxLoaded, setHasSyntaxLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [asyncServiceNameValue, setAsyncServiceNameValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    value: ''
  });
  const [asyncSpanNameValue, setAsyncSpanNameValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    value: ''
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [inputErrors, setInputErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    serviceName: false,
    spanName: false
  });

  async function fetchOptionsCallback(nameType, lp) {
    try {
      const res = await lp.getOptions(nameType === 'serviceName' ? 'service.name' : 'name');
      setIsLoading(prevValue => Object.assign({}, prevValue, {
        [nameType]: false
      }));
      return res;
    } catch (error) {
      if ((error === null || error === void 0 ? void 0 : error.status) === 404) {
        setIsLoading(prevValue => Object.assign({}, prevValue, {
          [nameType]: false
        }));
      } else {
        (0,app_store_store__WEBPACK_IMPORTED_MODULE_8__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_9__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_10__.createErrorNotification)('Error', error)));
        setIsLoading(prevValue => Object.assign({}, prevValue, {
          [nameType]: false
        }));
      }

      setError(error);
      return [];
    }
  }

  const loadOptionsOfType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(nameType => {
    setIsLoading(prevValue => Object.assign({}, prevValue, {
      [nameType]: true
    }));
    return fetchOptionsCallback(nameType, languageProvider);
  }, [languageProvider]);
  const fetchOptionsOfType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(nameType => (0,lodash__WEBPACK_IMPORTED_MODULE_7__.debounce)(() => loadOptionsOfType(nameType), 500, {
    leading: true,
    trailing: true
  }), [loadOptionsOfType]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchOptions = async () => {
      try {
        await languageProvider.start();
        fetchOptionsCallback('serviceName', languageProvider);
        fetchOptionsCallback('spanName', languageProvider);
        setHasSyntaxLoaded(true);
      } catch (error) {
        // Display message if Tempo is connected but search 404's
        if ((error === null || error === void 0 ? void 0 : error.status) === 404) {
          setError(error);
        } else {
          (0,app_store_store__WEBPACK_IMPORTED_MODULE_8__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_9__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_10__.createErrorNotification)('Error', error)));
        }

        setHasSyntaxLoaded(true);
      }
    };

    fetchOptions();
  }, [languageProvider, fetchOptionsOfType]);

  const onTypeahead = async typeahead => {
    return await languageProvider.provideCompletionItems(typeahead);
  };

  const cleanText = text => {
    const splittedText = text.split(/\s+(?=([^"]*"[^"]*")*[^"]*$)/g);

    if (splittedText.length > 1) {
      return splittedText[splittedText.length - 1];
    }

    return text;
  };

  const onKeyDown = keyEvent => {
    if (keyEvent.key === 'Enter' && (keyEvent.shiftKey || keyEvent.ctrlKey)) {
      onRunQuery();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.container,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Service Name",
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.AsyncSelect, {
            inputId: "service",
            menuShouldPortal: true,
            cacheOptions: false,
            loadOptions: fetchOptionsOfType('serviceName'),
            onOpenMenu: fetchOptionsOfType('serviceName'),
            isLoading: isLoading.serviceName,
            value: asyncServiceNameValue.value,
            onChange: v => {
              setAsyncServiceNameValue({
                value: v
              });
              onChange(Object.assign({}, query, {
                serviceName: (v === null || v === void 0 ? void 0 : v.value) || undefined
              }));
            },
            placeholder: "Select a service",
            isClearable: true,
            defaultOptions: true,
            onKeyDown: onKeyDown,
            "aria-label": 'select-service-name'
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Span Name",
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.AsyncSelect, {
            inputId: "spanName",
            menuShouldPortal: true,
            cacheOptions: false,
            loadOptions: fetchOptionsOfType('spanName'),
            onOpenMenu: fetchOptionsOfType('spanName'),
            isLoading: isLoading.spanName,
            value: asyncSpanNameValue.value,
            onChange: v => {
              setAsyncSpanNameValue({
                value: v
              });
              onChange(Object.assign({}, query, {
                spanName: (v === null || v === void 0 ? void 0 : v.value) || undefined
              }));
            },
            placeholder: "Select a span",
            isClearable: true,
            defaultOptions: true,
            onKeyDown: onKeyDown,
            "aria-label": 'select-span-name'
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Tags",
          labelWidth: 14,
          grow: true,
          tooltip: "Values should be in the logfmt format.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.QueryField, {
            additionalPlugins: plugins,
            query: query.search,
            onTypeahead: onTypeahead,
            onBlur: onBlur,
            onChange: value => {
              onChange(Object.assign({}, query, {
                search: value
              }));
            },
            placeholder: "http.status_code=200 error=true",
            cleanText: cleanText,
            onRunQuery: onRunQuery,
            syntaxLoaded: hasSyntaxLoaded,
            portalOrigin: "tempo"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Min Duration",
          invalid: !!inputErrors.minDuration,
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            id: "minDuration",
            value: query.minDuration || '',
            placeholder: durationPlaceholder,
            onBlur: () => {
              if (query.minDuration && !(0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.isValidGoDuration)(query.minDuration)) {
                setInputErrors(Object.assign({}, inputErrors, {
                  minDuration: true
                }));
              } else {
                setInputErrors(Object.assign({}, inputErrors, {
                  minDuration: false
                }));
              }
            },
            onChange: v => onChange(Object.assign({}, query, {
              minDuration: v.currentTarget.value
            })),
            onKeyDown: onKeyDown
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Max Duration",
          invalid: !!inputErrors.maxDuration,
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            id: "maxDuration",
            value: query.maxDuration || '',
            placeholder: durationPlaceholder,
            onBlur: () => {
              if (query.maxDuration && !(0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.isValidGoDuration)(query.maxDuration)) {
                setInputErrors(Object.assign({}, inputErrors, {
                  maxDuration: true
                }));
              } else {
                setInputErrors(Object.assign({}, inputErrors, {
                  maxDuration: false
                }));
              }
            },
            onChange: v => onChange(Object.assign({}, query, {
              maxDuration: v.currentTarget.value
            })),
            onKeyDown: onKeyDown
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: "Limit",
          invalid: !!inputErrors.limit,
          labelWidth: 14,
          grow: true,
          tooltip: "Maximum numbers of returned results",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            id: "limit",
            value: query.limit || '',
            type: "number",
            onChange: v => {
              let limit = v.currentTarget.value ? parseInt(v.currentTarget.value, 10) : undefined;

              if (limit && (!Number.isInteger(limit) || limit <= 0)) {
                setInputErrors(Object.assign({}, inputErrors, {
                  limit: true
                }));
              } else {
                setInputErrors(Object.assign({}, inputErrors, {
                  limit: false
                }));
              }

              onChange(Object.assign({}, query, {
                limit: v.currentTarget.value ? parseInt(v.currentTarget.value, 10) : undefined
              }));
            },
            onKeyDown: onKeyDown
          })
        })
      })]
    }), error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      title: "Unable to connect to Tempo search",
      severity: "info",
      className: styles.alert,
      children: ["Please ensure that Tempo is configured with search enabled. If you would like to hide this tab, you can configure it in the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: `/datasources/edit/${datasource.uid}`,
        children: "datasource settings"
      }), "."]
    }) : null]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NativeSearch);

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
    max-width: 500px;
  `,
  alert: _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
    max-width: 75ch;
    margin-top: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/QueryEditor/QueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempoQueryField": () => (/* binding */ TempoQueryField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _loki_components_LokiQueryField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryField.tsx");
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js");
/* harmony import */ var _NativeSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/NativeSearch.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/utils.ts");
/* harmony import */ var _ServiceGraphSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/ServiceGraphSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge, _div, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const DEFAULT_QUERY_TYPE = 'traceId';

class TempoQueryFieldComponent extends react__WEBPACK_IMPORTED_MODULE_3__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChangeLinkedQuery", value => {
      const {
        query,
        onChange
      } = this.props;
      onChange(Object.assign({}, query, {
        linkedQuery: Object.assign({}, value, {
          refId: 'linked'
        })
      }));
    });

    _defineProperty(this, "onRunLinkedQuery", () => {
      this.props.onRunQuery();
    });

    _defineProperty(this, "onClearResults", () => {
      // Run clear query to clear results
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        queryType: 'clear'
      }));
      onRunQuery();
    });
  }

  async componentDidMount() {
    // Set initial query type to ensure traceID field appears
    if (!this.props.query.queryType) {
      this.props.onChange(Object.assign({}, this.props.query, {
        queryType: DEFAULT_QUERY_TYPE
      }));
    }
  }

  render() {
    var _datasource$serviceMa, _datasource$search;

    const {
      query,
      onChange,
      datasource
    } = this.props;
    const logsDatasourceUid = datasource.getLokiSearchDS();
    const graphDatasourceUid = (_datasource$serviceMa = datasource.serviceMap) === null || _datasource$serviceMa === void 0 ? void 0 : _datasource$serviceMa.datasourceUid;
    const queryTypeOptions = [{
      value: 'traceId',
      label: 'TraceID'
    }, {
      value: 'upload',
      label: 'JSON file'
    }];

    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.tempoServiceGraph) {
      queryTypeOptions.push({
        value: 'serviceMap',
        label: 'Service Graph'
      });
    }

    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.tempoSearch && !(datasource !== null && datasource !== void 0 && (_datasource$search = datasource.search) !== null && _datasource$search !== void 0 && _datasource$search.hide)) {
      queryTypeOptions.unshift({
        value: 'nativeSearch',
        label: 'Search - Beta'
      });
    }

    if (logsDatasourceUid) {
      if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.tempoSearch) {
        // Place at beginning as Search if no native search
        queryTypeOptions.unshift({
          value: 'search',
          label: 'Search'
        });
      } else {
        // Place at end as Loki Search if native search is enabled
        queryTypeOptions.push({
          value: 'search',
          label: 'Loki Search'
        });
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
          label: "Query type",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
            options: queryTypeOptions,
            value: query.queryType,
            onChange: v => {
              this.onClearResults();
              onChange(Object.assign({}, query, {
                queryType: v
              }));
            },
            size: "md"
          })
        })
      }), query.queryType === 'nativeSearch' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        style: {
          maxWidth: '65ch'
        },
        children: [_Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
          icon: "rocket",
          text: "Beta",
          color: "blue"
        })), _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.tempoBackendSearch ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: "\xA0Tempo search is currently in beta."
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: "\xA0Tempo search is currently in beta and is designed to return recent traces only. It ignores the time range picker. We are actively working on full backend search. Look for improvements in the near future!"
        })]
      }), query.queryType === 'search' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SearchSection, {
        logsDatasourceUid: logsDatasourceUid,
        query: query,
        onRunQuery: this.onRunLinkedQuery,
        onChange: this.onChangeLinkedQuery
      }), query.queryType === 'nativeSearch' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_NativeSearch__WEBPACK_IMPORTED_MODULE_5__["default"], {
        datasource: this.props.datasource,
        query: query,
        onChange: onChange,
        onBlur: this.props.onBlur,
        onRunQuery: this.props.onRunQuery
      }), query.queryType === 'upload' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
          padding: this.props.theme.spacing(2)
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FileDropzone, {
          options: {
            multiple: false
          },
          onLoad: result => {
            this.props.datasource.uploadedJson = result;
            this.props.onRunQuery();
          }
        })
      }), query.queryType === 'traceId' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
          label: "Trace ID",
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.QueryField, {
            query: query.query,
            onChange: val => {
              onChange(Object.assign({}, query, {
                query: val,
                queryType: 'traceId',
                linkedQuery: undefined
              }));
            },
            onBlur: this.props.onBlur,
            onRunQuery: this.props.onRunQuery,
            placeholder: 'Enter a Trace ID (run with Shift+Enter)',
            portalOrigin: "tempo"
          })
        })
      }), query.queryType === 'serviceMap' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ServiceGraphSection__WEBPACK_IMPORTED_MODULE_7__.ServiceGraphSection, {
        graphDatasourceUid: graphDatasourceUid,
        query: query,
        onChange: onChange
      })]
    });
  }

}

function SearchSection({
  logsDatasourceUid,
  onChange,
  onRunQuery,
  query
}) {
  const dsState = (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_9__["default"])(() => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDS)(logsDatasourceUid), [logsDatasourceUid]);

  if (dsState.loading) {
    return null;
  }

  const ds = dsState.value;

  if (ds) {
    var _query$linkedQuery;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
        children: ["Tempo uses ", ds.name, " to find traces."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_loki_components_LokiQueryField__WEBPACK_IMPORTED_MODULE_4__.LokiQueryField, {
        datasource: ds,
        onChange: onChange,
        onRunQuery: onRunQuery,
        query: (_query$linkedQuery = query.linkedQuery) !== null && _query$linkedQuery !== void 0 ? _query$linkedQuery : {
          refId: 'linked'
        },
        history: []
      })]
    });
  }

  if (!logsDatasourceUid) {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "text-warning",
      children: "Please set up a Loki search datasource in the datasource settings."
    }));
  }

  if (logsDatasourceUid && !ds) {
    return _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "text-warning",
      children: "Loki search datasource is configured but the data source no longer exists. Please configure existing data source to use the search."
    }));
  }

  return null;
}

const TempoQueryField = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withTheme2)(TempoQueryFieldComponent);

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/QueryEditor/ServiceGraphSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceGraphSection": () => (/* binding */ ServiceGraphSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _features_variables_adhoc_picker_AdHocFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/variables/adhoc/picker/AdHocFilter.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2;







function ServiceGraphSection({
  graphDatasourceUid,
  query,
  onChange
}) {
  const dsState = (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_5__["default"])(() => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDS)(graphDatasourceUid), [graphDatasourceUid]);

  if (dsState.loading) {
    return null;
  }

  const ds = dsState.value;

  if (!graphDatasourceUid) {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "text-warning",
      children: "Please set up a service graph datasource in the datasource settings."
    }));
  }

  if (graphDatasourceUid && !ds) {
    return _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "text-warning",
      children: "Service graph datasource is configured but the data source no longer exists. Please configure existing data source to use the service graph functionality."
    }));
  }

  const filters = queryToFilter(query.serviceMapQuery || '');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Filter",
        labelWidth: 14,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_features_variables_adhoc_picker_AdHocFilter__WEBPACK_IMPORTED_MODULE_3__.AdHocFilter, {
          datasource: {
            uid: graphDatasourceUid
          },
          filters: filters,
          getTagKeysOptions: {
            series: ['traces_service_graph_request_server_seconds_sum', 'traces_service_graph_request_total', 'traces_service_graph_request_failed_total']
          },
          addFilter: filter => {
            onChange(Object.assign({}, query, {
              serviceMapQuery: filtersToQuery([...filters, filter])
            }));
          },
          removeFilter: index => {
            const newFilters = [...filters];
            newFilters.splice(index, 1);
            onChange(Object.assign({}, query, {
              serviceMapQuery: filtersToQuery(newFilters)
            }));
          },
          changeFilter: (index, filter) => {
            const newFilters = [...filters];
            newFilters.splice(index, 1, filter);
            onChange(Object.assign({}, query, {
              serviceMapQuery: filtersToQuery(newFilters)
            }));
          }
        })
      })
    })
  });
}

function queryToFilter(query) {
  let match;
  let filters = [];
  const re = /([\w_]+)(=|!=|<|>|=~|!~)"(.*?)"/g;

  while ((match = re.exec(query)) !== null) {
    filters.push({
      key: match[1],
      operator: match[2],
      value: match[3],
      condition: ''
    });
  }

  return filters;
}

function filtersToQuery(filters) {
  return `{${filters.map(f => `${f.key}${f.operator}"${f.value}"`).join(',')}}`;
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/QueryEditor/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDS": () => (/* binding */ getDS)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

async function getDS(uid) {
  if (!uid) {
    return undefined;
  }

  const dsSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getDataSourceSrv)();

  try {
    return await dsSrv.get(uid);
  } catch (error) {
    console.error('Failed to load data source', error);
    return undefined;
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/configuration/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_TraceToLogs_TraceToLogsSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _ServiceGraphSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/tempo/configuration/ServiceGraphSettings.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _SearchSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/tempo/configuration/SearchSettings.tsx");
/* harmony import */ var app_core_components_NodeGraphSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/NodeGraphSettings.tsx");
/* harmony import */ var _LokiSearchSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/tempo/configuration/LokiSearchSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const ConfigEditor = ({
  options,
  onOptionsChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.DataSourceHttpSettings, {
      defaultUrl: "http://tempo",
      dataSourceConfig: options,
      showAccessOptions: false,
      onChange: onOptionsChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_TraceToLogs_TraceToLogsSettings__WEBPACK_IMPORTED_MODULE_1__.TraceToLogsSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.tempoServiceGraph && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ServiceGraphSettings__WEBPACK_IMPORTED_MODULE_3__.ServiceGraphSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.tempoSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SearchSettings__WEBPACK_IMPORTED_MODULE_5__.SearchSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_NodeGraphSettings__WEBPACK_IMPORTED_MODULE_6__.NodeGraphSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LokiSearchSettings__WEBPACK_IMPORTED_MODULE_7__.LokiSearchSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/configuration/LokiSearchSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokiSearchSettings": () => (/* binding */ LokiSearchSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;








function LokiSearchSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$tra, _options$jsonData$tra2, _options$jsonData$lok, _options$jsonData$lok2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles); // Default to the trace to logs datasource if configured and loki search was enabled
  // but only if jsonData.lokiSearch hasn't been set

  const legacyDatasource = ((_options$jsonData$tra = options.jsonData.tracesToLogs) === null || _options$jsonData$tra === void 0 ? void 0 : _options$jsonData$tra.lokiSearch) !== false ? (_options$jsonData$tra2 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra2 === void 0 ? void 0 : _options$jsonData$tra2.datasourceUid : undefined;

  if (legacyDatasource && options.jsonData.lokiSearch === undefined) {
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
      onOptionsChange,
      options
    }, 'lokiSearch', {
      datasourceUid: legacyDatasource
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "page-heading",
      children: "Loki Search"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.infoText,
      children: "Select a Loki datasource to search for traces. Derived fields must be configured in the Loki data source."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "The Loki data source with the service graph data",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, {
          inputId: "loki-search-data-source-picker",
          pluginId: "loki",
          current: (_options$jsonData$lok = options.jsonData.lokiSearch) === null || _options$jsonData$lok === void 0 ? void 0 : _options$jsonData$lok.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'lokiSearch', {
            datasourceUid: ds.uid
          })
        })
      }), (_options$jsonData$lok2 = options.jsonData.lokiSearch) !== null && _options$jsonData$lok2 !== void 0 && _options$jsonData$lok2.datasourceUid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: 'button',
        variant: 'secondary',
        size: 'sm',
        fill: 'text',
        onClick: () => {
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'lokiSearch', {
            datasourceUid: undefined
          });
        },
        children: "Clear"
      }) : null]
    })]
  });
}

const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: infoText;
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: row;
    align-items: baseline;
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/configuration/SearchSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchSettings": () => (/* binding */ SearchSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;







function SearchSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$sea;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      className: "page-heading",
      children: "Search"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      className: styles.row,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        tooltip: "Removes the Search tab from the Tempo query editor.",
        label: "Hide search",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
          id: "hideSearch",
          value: (_options$jsonData$sea = options.jsonData.search) === null || _options$jsonData$sea === void 0 ? void 0 : _options$jsonData$sea.hide,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'search', Object.assign({}, options.jsonData.search, {
            hide: event.currentTarget.checked
          }))
        })
      })
    })]
  });
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: container;
    width: 100%;
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: row;
    align-items: baseline;
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/configuration/ServiceGraphSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceGraphSettings": () => (/* binding */ ServiceGraphSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;








function ServiceGraphSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$ser;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "page-heading",
      children: "Service Graph"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.infoText,
      children: "To allow querying service graph data you have to select a Prometheus instance where the data is stored."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "The Prometheus data source with the service graph data",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, {
          inputId: "service-graph-data-source-picker",
          pluginId: "prometheus",
          current: (_options$jsonData$ser = options.jsonData.serviceMap) === null || _options$jsonData$ser === void 0 ? void 0 : _options$jsonData$ser.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'serviceMap', {
            datasourceUid: ds.uid
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: 'button',
        variant: 'secondary',
        size: 'sm',
        fill: 'text',
        onClick: () => {
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'serviceMap', {
            datasourceUid: undefined
          });
        },
        children: "Clear"
      })]
    })]
  });
}

const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: infoText;
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: row;
    align-items: baseline;
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_LIMIT": () => (/* binding */ DEFAULT_LIMIT),
/* harmony export */   "TempoDatasource": () => (/* binding */ TempoDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/empty.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/toArray.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/utils/fetch.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphTransform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/tempo/graphTransform.ts");
/* harmony import */ var _resultTransformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/tempo/resultTransformer.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const DEFAULT_LIMIT = 20;
class TempoDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;

    _defineProperty(this, "tracesToLogs", void 0);

    _defineProperty(this, "serviceMap", void 0);

    _defineProperty(this, "search", void 0);

    _defineProperty(this, "nodeGraph", void 0);

    _defineProperty(this, "lokiSearch", void 0);

    _defineProperty(this, "uploadedJson", null);

    _defineProperty(this, "getLokiSearchDS", () => {
      var _this$tracesToLogs, _this$tracesToLogs2, _this$lokiSearch$data, _this$lokiSearch;

      const legacyLogsDatasourceUid = ((_this$tracesToLogs = this.tracesToLogs) === null || _this$tracesToLogs === void 0 ? void 0 : _this$tracesToLogs.lokiSearch) !== false && this.lokiSearch === undefined ? (_this$tracesToLogs2 = this.tracesToLogs) === null || _this$tracesToLogs2 === void 0 ? void 0 : _this$tracesToLogs2.datasourceUid : undefined;
      return (_this$lokiSearch$data = (_this$lokiSearch = this.lokiSearch) === null || _this$lokiSearch === void 0 ? void 0 : _this$lokiSearch.datasourceUid) !== null && _this$lokiSearch$data !== void 0 ? _this$lokiSearch$data : legacyLogsDatasourceUid;
    });

    this.instanceSettings = instanceSettings;
    this.tracesToLogs = instanceSettings.jsonData.tracesToLogs;
    this.serviceMap = instanceSettings.jsonData.serviceMap;
    this.search = instanceSettings.jsonData.search;
    this.nodeGraph = instanceSettings.jsonData.nodeGraph;
    this.lokiSearch = instanceSettings.jsonData.lokiSearch;
  }

  query(options) {
    var _targets$search, _targets$nativeSearch, _targets$upload, _this$serviceMap, _targets$serviceMap, _targets$traceId;

    const subQueries = [];
    const filteredTargets = options.targets.filter(target => !target.hide);
    const targets = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.groupBy)(filteredTargets, t => t.queryType || 'traceId');

    if (targets.clear) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data: [],
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
      });
    }

    const logsDatasourceUid = this.getLokiSearchDS(); // Run search queries on linked datasource

    if (logsDatasourceUid && ((_targets$search = targets.search) === null || _targets$search === void 0 ? void 0 : _targets$search.length) > 0) {
      const dsSrv = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_3__.getDatasourceSrv)();
      subQueries.push((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(dsSrv.get(logsDatasourceUid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(linkedDatasource => {
        var _settings$jsonData$de;

        // Wrap linked query into a data request based on original request
        const linkedRequest = Object.assign({}, options, {
          targets: targets.search.map(t => t.linkedQuery)
        }); // Find trace matchers in derived fields of the linked datasource that's identical to this datasource

        const settings = linkedDatasource.instanceSettings;
        const traceLinkMatcher = ((_settings$jsonData$de = settings.jsonData.derivedFields) === null || _settings$jsonData$de === void 0 ? void 0 : _settings$jsonData$de.filter(field => field.datasourceUid === this.uid && field.matcherRegex).map(field => field.matcherRegex)) || [];

        if (!traceLinkMatcher || traceLinkMatcher.length === 0) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => new Error('No Loki datasource configured for search. Set up Derived Fields for traces in a Loki datasource settings and link it to this Tempo datasource.'));
        } else {
          return linkedDatasource.query(linkedRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => response.error ? response : (0,_resultTransformer__WEBPACK_IMPORTED_MODULE_6__.transformTraceList)(response, this.uid, this.name, traceLinkMatcher)));
        }
      })));
    }

    if ((_targets$nativeSearch = targets.nativeSearch) !== null && _targets$nativeSearch !== void 0 && _targets$nativeSearch.length) {
      try {
        const timeRange = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.tempoBackendSearch ? {
          startTime: options.range.from.unix(),
          endTime: options.range.to.unix()
        } : undefined;
        const searchQuery = this.buildSearchQuery(targets.nativeSearch[0], timeRange);
        subQueries.push(this._request('/api/search', searchQuery).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
          return {
            data: [(0,_resultTransformer__WEBPACK_IMPORTED_MODULE_6__.createTableFrameFromSearch)(response.data.traces, this.instanceSettings)]
          };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
            error: {
              message: error.data.message
            },
            data: []
          });
        })));
      } catch (error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
          error: {
            message: error.message
          },
          data: []
        });
      }
    }

    if ((_targets$upload = targets.upload) !== null && _targets$upload !== void 0 && _targets$upload.length) {
      if (this.uploadedJson) {
        const otelTraceData = JSON.parse(this.uploadedJson);

        if (!otelTraceData.batches) {
          subQueries.push((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
            error: {
              message: 'JSON is not valid OpenTelemetry format'
            },
            data: []
          }));
        } else {
          var _this$nodeGraph;

          subQueries.push((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_resultTransformer__WEBPACK_IMPORTED_MODULE_6__.transformFromOTLP)(otelTraceData.batches, (_this$nodeGraph = this.nodeGraph) === null || _this$nodeGraph === void 0 ? void 0 : _this$nodeGraph.enabled)));
        }
      } else {
        subQueries.push((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
          data: [],
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
        }));
      }
    }

    if ((_this$serviceMap = this.serviceMap) !== null && _this$serviceMap !== void 0 && _this$serviceMap.datasourceUid && ((_targets$serviceMap = targets.serviceMap) === null || _targets$serviceMap === void 0 ? void 0 : _targets$serviceMap.length) > 0) {
      subQueries.push(serviceMapQuery(options, this.serviceMap.datasourceUid));
    }

    if (((_targets$traceId = targets.traceId) === null || _targets$traceId === void 0 ? void 0 : _targets$traceId.length) > 0) {
      subQueries.push(this.handleTraceIdQuery(options, targets.traceId));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(...subQueries);
  }
  /**
   * Handles the simplest of the queries where we have just a trace id and return trace data for it.
   * @param options
   * @param targets
   * @private
   */


  handleTraceIdQuery(options, targets) {
    const validTargets = targets.filter(t => t.query);

    if (!validTargets.length) {
      return rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY;
    }

    const traceRequest = Object.assign({}, options, {
      targets: validTargets
    });
    return super.query(traceRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
      var _this$nodeGraph2;

      if (response.error) {
        return response;
      }

      return (0,_resultTransformer__WEBPACK_IMPORTED_MODULE_6__.transformTrace)(response, (_this$nodeGraph2 = this.nodeGraph) === null || _this$nodeGraph2 === void 0 ? void 0 : _this$nodeGraph2.enabled);
    }));
  }

  async metadataRequest(url, params = {}) {
    return await this._request(url, params, {
      method: 'GET',
      hideFromInspector: true
    }).toPromise();
  }

  _request(apiUrl, data, options) {
    const params = data ? (0,app_core_utils_fetch__WEBPACK_IMPORTED_MODULE_2__.serializeParams)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch(req);
  }

  async testDatasource() {
    const options = {
      headers: {},
      method: 'GET',
      url: `${this.instanceSettings.url}/api/echo`
    };
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch(options).toPromise();

    if (response !== null && response !== void 0 && response.ok) {
      return {
        status: 'success',
        message: 'Data source is working'
      };
    }
  }

  getQueryDisplayText(query) {
    if (query.queryType === 'nativeSearch') {
      let result = [];

      for (const key of ['serviceName', 'spanName', 'search', 'minDuration', 'maxDuration', 'limit']) {
        if (query.hasOwnProperty(key) && query[key]) {
          result.push(`${(0,lodash__WEBPACK_IMPORTED_MODULE_4__.startCase)(key)}: ${query[key]}`);
        }
      }

      return result.join(', ');
    }

    return query.query;
  }

  buildSearchQuery(query, timeRange) {
    var _query$search;

    let tags = (_query$search = query.search) !== null && _query$search !== void 0 ? _query$search : '';
    let tempoQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.pick)(query, ['minDuration', 'maxDuration', 'limit']); // Remove empty properties

    tempoQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.pickBy)(tempoQuery, lodash__WEBPACK_IMPORTED_MODULE_4__.identity);

    if (query.serviceName) {
      tags += ` service.name="${query.serviceName}"`;
    }

    if (query.spanName) {
      tags += ` name="${query.spanName}"`;
    } // Set default limit


    if (!tempoQuery.limit) {
      tempoQuery.limit = DEFAULT_LIMIT;
    } // Validate query inputs and remove spaces if valid


    if (tempoQuery.minDuration) {
      if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isValidGoDuration)(tempoQuery.minDuration)) {
        throw new Error('Please enter a valid min duration.');
      }

      tempoQuery.minDuration = tempoQuery.minDuration.replace(/\s/g, '');
    }

    if (tempoQuery.maxDuration) {
      if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isValidGoDuration)(tempoQuery.maxDuration)) {
        throw new Error('Please enter a valid max duration.');
      }

      tempoQuery.maxDuration = tempoQuery.maxDuration.replace(/\s/g, '');
    }

    if (!Number.isInteger(tempoQuery.limit) || tempoQuery.limit <= 0) {
      throw new Error('Please enter a valid limit.');
    }

    let searchQuery = Object.assign({
      tags
    }, tempoQuery);

    if (timeRange) {
      searchQuery.start = timeRange.startTime;
      searchQuery.end = timeRange.endTime;
    }

    return searchQuery;
  }

  async getServiceGraphLabels() {
    const ds = await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_3__.getDatasourceSrv)().get(this.serviceMap.datasourceUid);
    return ds.getTagKeys();
  }

  async getServiceGraphLabelValues(key) {
    const ds = await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_3__.getDatasourceSrv)().get(this.serviceMap.datasourceUid);
    return ds.getTagValues({
      key
    });
  } // Get linked loki search datasource. Fall back to legacy loki search/trace to logs config


}

function queryServiceMapPrometheus(request, datasourceUid) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)((0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_3__.getDatasourceSrv)().get(datasourceUid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(ds => {
    return ds.query(request);
  }));
}

function serviceMapQuery(request, datasourceUid) {
  return queryServiceMapPrometheus(makePromServiceMapRequest(request), datasourceUid).pipe( // Just collect all the responses first before processing into node graph data
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.toArray)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(responses => {
    const errorRes = responses.find(res => !!res.error);

    if (errorRes) {
      throw new Error(errorRes.error.message);
    }

    const {
      nodes,
      edges
    } = (0,_graphTransform__WEBPACK_IMPORTED_MODULE_5__.mapPromMetricsToServiceMap)(responses, request.range);
    nodes.fields[0].config = {
      links: [makePromLink('Request rate', `rate(${_graphTransform__WEBPACK_IMPORTED_MODULE_5__.totalsMetric}{server="\${__data.fields.id}"}[$__rate_interval])`, datasourceUid), makePromLink('Request histogram', `histogram_quantile(0.9, sum(rate(${_graphTransform__WEBPACK_IMPORTED_MODULE_5__.histogramMetric}{server="\${__data.fields.id}"}[$__rate_interval])) by (le, client, server))`, datasourceUid), makePromLink('Failed request rate', `rate(${_graphTransform__WEBPACK_IMPORTED_MODULE_5__.failedMetric}{server="\${__data.fields.id}"}[$__rate_interval])`, datasourceUid)]
    };
    return {
      data: [nodes, edges],
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
    };
  }));
}

function makePromLink(title, metric, datasourceUid) {
  return {
    url: '',
    title,
    internal: {
      query: {
        expr: metric
      },
      datasourceUid,
      datasourceName: 'Prometheus'
    }
  };
}

function makePromServiceMapRequest(options) {
  return Object.assign({}, options, {
    targets: _graphTransform__WEBPACK_IMPORTED_MODULE_5__.serviceMapMetrics.map(metric => {
      return {
        refId: metric,
        // options.targets[0] is not correct here, but not sure what should happen if you have multiple queries for
        // service map at the same time anyway
        expr: `delta(${metric}${options.targets[0].serviceMapQuery || ''}[$__range])`,
        instant: true
      };
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/graphTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGraphFrames": () => (/* binding */ createGraphFrames),
/* harmony export */   "failedMetric": () => (/* binding */ failedMetric),
/* harmony export */   "histogramMetric": () => (/* binding */ histogramMetric),
/* harmony export */   "mapPromMetricsToServiceMap": () => (/* binding */ mapPromMetricsToServiceMap),
/* harmony export */   "secondsMetric": () => (/* binding */ secondsMetric),
/* harmony export */   "serviceMapMetrics": () => (/* binding */ serviceMapMetrics),
/* harmony export */   "totalsMetric": () => (/* binding */ totalsMetric)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/tracing.ts");


/**
 * Row in a trace dataFrame
 */

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

function convertTraceToGraph(data) {
  const nodes = [];
  const edges = [];
  const view = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(data);
  const traceDuration = findTraceDuration(view);
  const spanMap = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeSpanMap)(index => {
    if (index >= data.length) {
      return undefined;
    }

    const span = view.get(index);
    return {
      span: Object.assign({}, span),
      id: span.spanID,
      parentIds: span.parentSpanID ? [span.parentSpanID] : []
    };
  });

  for (let i = 0; i < view.length; i++) {
    var _row$serviceName;

    const row = view.get(i);
    const ranges = spanMap[row.spanID].children.map(c => {
      const span = spanMap[c].span;
      return [span.startTime, span.startTime + span.duration];
    });
    const childrenDuration = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getNonOverlappingDuration)(ranges);
    const selfDuration = row.duration - childrenDuration;
    const stats = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getStats)(row.duration, traceDuration, selfDuration);
    nodes.push({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: row.spanID,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: (_row$serviceName = row.serviceName) !== null && _row$serviceName !== void 0 ? _row$serviceName : '',
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: row.operationName,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    }); // Sometimes some span can be missing. Don't add edges for those.

    if (row.parentSpanID && spanMap[row.parentSpanID].span) {
      edges.push({
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: row.parentSpanID + '--' + row.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: row.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: row.parentSpanID
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


function findTraceDuration(view) {
  let traceEndTime = 0;
  let traceStartTime = Infinity;

  for (let i = 0; i < view.length; i++) {
    const row = view.get(i);

    if (row.startTime < traceStartTime) {
      traceStartTime = row.startTime;
    }

    if (row.startTime + row.duration > traceEndTime) {
      traceEndTime = row.startTime + row.duration;
    }
  }

  return traceEndTime - traceStartTime;
}

const secondsMetric = 'traces_service_graph_request_server_seconds_sum';
const totalsMetric = 'traces_service_graph_request_total';
const failedMetric = 'traces_service_graph_request_failed_total';
const histogramMetric = 'traces_service_graph_request_server_seconds_bucket';
const serviceMapMetrics = [secondsMetric, totalsMetric, failedMetric, histogramMetric // These are used for debugging the tempo collection so probably not useful for service map right now.
// 'traces_service_graph_unpaired_spans_total',
// 'traces_service_graph_untagged_spans_total',
];
/**
 * Map response from multiple prometheus metrics into a node graph data frames with nodes and edges.
 * @param responses
 * @param range
 */

function mapPromMetricsToServiceMap(responses, range) {
  const frames = getMetricFrames(responses); // First just collect data from the metrics into a map with nodes and edges as keys

  const nodesMap = {};
  const edgesMap = {}; // At this moment we don't have any error/success or other counts so we just use these 2

  collectMetricData(frames[totalsMetric], 'total', totalsMetric, nodesMap, edgesMap);
  collectMetricData(frames[secondsMetric], 'seconds', secondsMetric, nodesMap, edgesMap);
  collectMetricData(frames[failedMetric], 'failed', failedMetric, nodesMap, edgesMap);
  return convertToDataFrames(nodesMap, edgesMap, range);
}

function createServiceMapDataFrames() {
  function createDF(name, fields) {
    return new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
      name,
      fields,
      meta: {
        preferredVisualisationType: 'nodeGraph'
      }
    });
  }

  const nodes = createDF('Nodes', [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
    config: {
      displayName: 'Service name'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    config: {
      unit: 'ms/r',
      displayName: 'Average response time'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    config: {
      unit: 'r/sec',
      displayName: 'Requests per second'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success',
    config: {
      displayName: 'Success',
      color: {
        fixedColor: 'green',
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
      }
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'failed',
    config: {
      displayName: 'Failed',
      color: {
        fixedColor: 'red',
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
      }
    }
  }]);
  const edges = createDF('Edges', [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    config: {
      unit: 'r',
      displayName: 'Requests'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    config: {
      unit: 'ms/r',
      displayName: 'Average response time'
    }
  }]);
  return [nodes, edges];
}
/**
 * Group frames from response based on ref id which is set the same as the metric name so we know which metric is where
 * and also put it into DataFrameView so it's easier to work with.
 * @param responses
 */


function getMetricFrames(responses) {
  return responses[0].data.reduce((acc, frame) => {
    acc[frame.refId] = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(frame);
    return acc;
  }, {});
}

/**
 * Collect data from a metric into a map of nodes and edges. The metric data is modeled as counts of metric per edge
 * which is a pair of client-server nodes. This means we convert each row of the metric 1-1 to edges and than we assign
 * the metric also to server. We count the stats for server only as we show requests/transactions that particular node
 * processed not those which it generated and other stats like average transaction time then stem from that.
 * @param frame
 * @param stat
 * @param metric
 * @param nodesMap
 * @param edgesMap
 */
function collectMetricData(frame, stat, metric, nodesMap, edgesMap) {
  if (!frame) {
    return;
  } // The name of the value column is in this format
  // TODO figure out if it can be changed


  const valueName = `Value #${metric}`;

  for (let i = 0; i < frame.length; i++) {
    const row = frame.get(i);
    const edgeId = `${row.client}_${row.server}`;

    if (!edgesMap[edgeId]) {
      // Create edge as it does not exist yet
      edgesMap[edgeId] = {
        target: row.server,
        source: row.client,
        [stat]: row[valueName]
      };
    } else {
      // Add stat to edge
      // We are adding the values if exists but that should not happen in general as there should be single row for
      // an edge.
      edgesMap[edgeId][stat] = (edgesMap[edgeId][stat] || 0) + row[valueName];
    }

    if (!nodesMap[row.server]) {
      // Create node for server
      nodesMap[row.server] = {
        [stat]: row[valueName]
      };
    } else {
      // Add stat to server node. Sum up values if there are multiple edges targeting this server node.
      nodesMap[row.server][stat] = (nodesMap[row.server][stat] || 0) + row[valueName];
    }

    if (!nodesMap[row.client]) {
      // Create the client node but don't add the stat as edge stats are attributed to the server node. This means for
      // example that the number of requests in a node show how many requests it handled not how many it generated.
      nodesMap[row.client] = {
        [stat]: 0
      };
    }
  }
}

function convertToDataFrames(nodesMap, edgesMap, range) {
  const rangeMs = range.to.valueOf() - range.from.valueOf();
  const [nodes, edges] = createServiceMapDataFrames();

  for (const nodeId of Object.keys(nodesMap)) {
    const node = nodesMap[nodeId];
    nodes.add({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: nodeId,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: nodeId,
      // NaN will not be shown in the node graph. This happens for a root client node which did not process
      // any requests itself.
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: node.total ? node.seconds / node.total * 1000 : Number.NaN,
      // Average response time
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: node.total ? Math.round(node.total / (rangeMs / 1000) * 100) / 100 : Number.NaN,
      // Request per second (to 2 decimals)
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success']: node.total ? (node.total - Math.min(node.failed || 0, node.total)) / node.total : 1,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'failed']: node.total ? Math.min(node.failed || 0, node.total) / node.total : 0
    });
  }

  for (const edgeId of Object.keys(edgesMap)) {
    const edge = edgesMap[edgeId];
    edges.add({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: edgeId,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: edge.source,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: edge.target,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: edge.total,
      // Requests
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: edge.total ? edge.seconds / edge.total * 1000 : Number.NaN // Average response time

    });
  }

  return {
    nodes,
    edges
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/language_provider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TempoLanguageProvider)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class TempoLanguageProvider extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LanguageProvider {
  constructor(datasource, initialValues) {
    super();

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "tags", void 0);

    _defineProperty(this, "request", async (url, params = {}) => {
      const res = await this.datasource.metadataRequest(url, params);
      return res === null || res === void 0 ? void 0 : res.data;
    });

    _defineProperty(this, "start", async () => {
      await this.fetchTags();
      return [];
    });

    _defineProperty(this, "provideCompletionItems", async ({
      prefix,
      text,
      value,
      labelKey,
      wrapperClasses
    }, context = {
      history: []
    }) => {
      const emptyResult = {
        suggestions: []
      };

      if (!value) {
        return emptyResult;
      }

      const query = value.endText.getText();
      const isValue = query[query.indexOf(text) - 1] === '=';

      if (isValue || text === '=') {
        return this.getTagValueCompletionItems(value);
      }

      return this.getTagsCompletionItems();
    });

    _defineProperty(this, "getTagsCompletionItems", () => {
      const {
        tags
      } = this;
      const suggestions = [];

      if (tags !== null && tags !== void 0 && tags.length) {
        suggestions.push({
          label: `Tag`,
          items: tags.map(tag => ({
            label: tag
          }))
        });
      }

      return {
        suggestions
      };
    });

    this.datasource = datasource;
    Object.assign(this, initialValues);
  }

  async fetchTags() {
    const response = await this.request('/api/search/tags', []);
    this.tags = response.tagNames;
  }

  async getTagValueCompletionItems(value) {
    var _tags;

    const tags = value.endText.getText().split(' ');
    let tagName = (_tags = tags[tags.length - 1]) !== null && _tags !== void 0 ? _tags : '';
    tagName = tagName.split('=')[0];
    const response = await this.request(`/api/search/tag/${tagName}/values`, []);
    const suggestions = [];

    if (response && response.tagValues) {
      suggestions.push({
        label: `Tag Values`,
        items: response.tagValues.map(tagValue => ({
          label: tagValue
        }))
      });
    }

    return {
      suggestions
    };
  }

  async getOptions(tag) {
    const response = await this.request(`/api/search/tag/${tag}/values`);
    let options = [];

    if (response && response.tagValues) {
      options = response.tagValues.map(v => ({
        value: v,
        label: v
      }));
    }

    return options;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _CheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/tempo/CheatSheet.tsx");
/* harmony import */ var _configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/tempo/configuration/ConfigEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/tempo/datasource.ts");
/* harmony import */ var _QueryEditor_QueryField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/QueryField.tsx");





const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_3__.TempoDatasource).setQueryEditor(_QueryEditor_QueryField__WEBPACK_IMPORTED_MODULE_4__.TempoQueryField).setConfigEditor(_configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__.ConfigEditor).setQueryEditorHelp(_CheatSheet__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/resultTransformer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTableFrame": () => (/* binding */ createTableFrame),
/* harmony export */   "createTableFrameFromSearch": () => (/* binding */ createTableFrameFromSearch),
/* harmony export */   "transformFromOTLP": () => (/* binding */ transformFromOTLP),
/* harmony export */   "transformToOTLP": () => (/* binding */ transformToOTLP),
/* harmony export */   "transformTrace": () => (/* binding */ transformTrace),
/* harmony export */   "transformTraceList": () => (/* binding */ transformTraceList)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/index.js");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInHours/index.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js");
/* harmony import */ var _graphTransform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/tempo/graphTransform.ts");






function createTableFrame(logsFrame, datasourceUid, datasourceName, traceRegexs) {
  const tableFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'Time',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time,
      config: {
        custom: {
          width: 150
        }
      }
    }, {
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace ID',
        custom: {
          width: 300
        },
        links: [{
          title: 'Click to open trace ${__value.raw}',
          url: '',
          internal: {
            datasourceUid,
            datasourceName,
            query: {
              query: '${__value.raw}'
            }
          }
        }]
      }
    }, {
      name: 'Message',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  });

  if (!logsFrame || traceRegexs.length === 0) {
    return tableFrame;
  }

  const timeField = logsFrame.fields.find(f => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time); // Going through all string fields to look for trace IDs

  for (let field of logsFrame.fields) {
    let hasMatch = false;

    if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string) {
      const values = field.values.toArray();

      for (let i = 0; i < values.length; i++) {
        const line = values[i];

        if (line) {
          for (let traceRegex of traceRegexs) {
            const match = line.match(traceRegex);

            if (match) {
              const traceId = match[1];
              const time = timeField ? timeField.values.get(i) : null;
              tableFrame.fields[0].values.add(time);
              tableFrame.fields[1].values.add(traceId);
              tableFrame.fields[2].values.add(line);
              hasMatch = true;
            }
          }
        }
      }
    }

    if (hasMatch) {
      break;
    }
  }

  return tableFrame;
}
function transformTraceList(response, datasourceId, datasourceName, traceRegexs) {
  response.data.forEach((data, index) => {
    const frame = createTableFrame(data, datasourceId, datasourceName, traceRegexs);
    response.data[index] = frame;
  });
  return response;
} // Don't forget to change the backend code when the id representation changed

function transformBase64IDToHexString(base64) {
  const raw = atob(base64);
  let result = '';

  for (let i = 0; i < raw.length; i++) {
    const hex = raw.charCodeAt(i).toString(16);
    result += hex.length === 2 ? hex : '0' + hex;
  }

  return result.length > 16 ? result.slice(16) : result;
}

function transformHexStringToBase64ID(hex) {
  const hexArray = hex.match(/\w{2}/g) || [];
  return btoa(hexArray.map(function (a) {
    return String.fromCharCode(parseInt(a, 16));
  }).join(''));
}

function getAttributeValue(value) {
  if (value.stringValue) {
    return value.stringValue;
  }

  if (value.boolValue !== undefined) {
    return Boolean(value.boolValue);
  }

  if (value.intValue !== undefined) {
    return Number.parseInt(value.intValue, 10);
  }

  if (value.doubleValue) {
    return Number.parseFloat(value.doubleValue);
  }

  if (value.arrayValue) {
    const arrayValue = [];

    for (const arValue of value.arrayValue.values) {
      arrayValue.push(getAttributeValue(arValue));
    }

    return arrayValue;
  }

  return '';
}

function resourceToProcess(resource) {
  const serviceTags = [];
  let serviceName = 'OTLPResourceNoServiceName';

  if (!resource) {
    return {
      serviceName,
      serviceTags
    };
  }

  for (const attribute of resource.attributes) {
    if (attribute.key === _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__.SemanticResourceAttributes.SERVICE_NAME) {
      serviceName = attribute.value.stringValue || serviceName;
    }

    serviceTags.push({
      key: attribute.key,
      value: getAttributeValue(attribute.value)
    });
  }

  return {
    serviceName,
    serviceTags
  };
}

function getSpanTags(span, instrumentationLibrary) {
  const spanTags = [];

  if (instrumentationLibrary) {
    if (instrumentationLibrary.name) {
      spanTags.push({
        key: 'otel.library.name',
        value: instrumentationLibrary.name
      });
    }

    if (instrumentationLibrary.version) {
      spanTags.push({
        key: 'otel.library.version',
        value: instrumentationLibrary.version
      });
    }
  }

  if (span.attributes) {
    for (const attribute of span.attributes) {
      spanTags.push({
        key: attribute.key,
        value: getAttributeValue(attribute.value)
      });
    }
  }

  if (span.status) {
    if (span.status.code && span.status.code !== _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.SpanStatusCode.UNSET) {
      spanTags.push({
        key: 'otel.status_code',
        value: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.SpanStatusCode[span.status.code]
      });

      if (span.status.message) {
        spanTags.push({
          key: 'otel.status_description',
          value: span.status.message
        });
      }
    }

    if (span.status.code === _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.SpanStatusCode.ERROR) {
      spanTags.push({
        key: 'error',
        value: true
      });
    }
  }

  if (span.kind !== undefined) {
    const split = span.kind.toString().toLowerCase().split('_');
    spanTags.push({
      key: 'span.kind',
      value: split.length ? split[split.length - 1] : span.kind.toString()
    });
  }

  return spanTags;
}

function getReferences(span) {
  const references = [];

  if (span.links) {
    for (const link of span.links) {
      const {
        traceId,
        spanId
      } = link;
      const tags = [];

      if (link.attributes) {
        for (const attribute of link.attributes) {
          tags.push({
            key: attribute.key,
            value: getAttributeValue(attribute.value)
          });
        }
      }

      references.push({
        traceID: traceId,
        spanID: spanId,
        tags
      });
    }
  }

  return references;
}

function getLogs(span) {
  const logs = [];

  if (span.events) {
    for (const event of span.events) {
      const fields = [];

      if (event.attributes) {
        for (const attribute of event.attributes) {
          fields.push({
            key: attribute.key,
            value: getAttributeValue(attribute.value)
          });
        }
      }

      logs.push({
        fields,
        timestamp: event.timeUnixNano / 1000000
      });
    }
  }

  return logs;
}

function transformFromOTLP(traceData, nodeGraph = false) {
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'references',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'otlp'
      }
    }
  });

  try {
    for (const data of traceData) {
      const {
        serviceName,
        serviceTags
      } = resourceToProcess(data.resource);

      for (const librarySpan of data.instrumentationLibrarySpans) {
        for (const span of librarySpan.spans) {
          frame.add({
            traceID: transformBase64IDToHexString(span.traceId),
            spanID: transformBase64IDToHexString(span.spanId),
            parentSpanID: transformBase64IDToHexString(span.parentSpanId || ''),
            operationName: span.name || '',
            serviceName,
            serviceTags,
            startTime: span.startTimeUnixNano / 1000000,
            duration: (span.endTimeUnixNano - span.startTimeUnixNano) / 1000000,
            tags: getSpanTags(span, librarySpan.instrumentationLibrary),
            logs: getLogs(span),
            references: getReferences(span)
          });
        }
      }
    }
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: 'JSON is not valid OpenTelemetry format: ' + error
      },
      data: []
    };
  }

  let data = [frame];

  if (nodeGraph) {
    data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_3__.createGraphFrames)(frame));
  }

  return {
    data
  };
}
/**
 * Transforms trace dataframes to the OpenTelemetry format
 */

function transformToOTLP(data) {
  let result = {
    batches: []
  }; // Lookup object to see which batch contains spans for which services

  let services = {};

  for (let i = 0; i < data.length; i++) {
    const span = data.get(i); // Group spans based on service

    if (!services[span.serviceName]) {
      services[span.serviceName] = result.batches.length;
      result.batches.push({
        resource: {
          attributes: [],
          droppedAttributesCount: 0
        },
        instrumentationLibrarySpans: [{
          spans: []
        }]
      });
    }

    let batchIndex = services[span.serviceName]; // Populate resource attributes from service tags

    if (result.batches[batchIndex].resource.attributes.length === 0) {
      result.batches[batchIndex].resource.attributes = tagsToAttributes(span.serviceTags);
    } // Populate instrumentation library if it exists


    if (!result.batches[batchIndex].instrumentationLibrarySpans[0].instrumentationLibrary) {
      var _span$tags$find;

      let libraryName = (_span$tags$find = span.tags.find(t => t.key === 'otel.library.name')) === null || _span$tags$find === void 0 ? void 0 : _span$tags$find.value;

      if (libraryName) {
        var _span$tags$find2;

        result.batches[batchIndex].instrumentationLibrarySpans[0].instrumentationLibrary = {
          name: libraryName,
          version: (_span$tags$find2 = span.tags.find(t => t.key === 'otel.library.version')) === null || _span$tags$find2 === void 0 ? void 0 : _span$tags$find2.value
        };
      }
    }

    result.batches[batchIndex].instrumentationLibrarySpans[0].spans.push({
      traceId: transformHexStringToBase64ID(span.traceID.padStart(32, '0')),
      spanId: transformHexStringToBase64ID(span.spanID),
      traceState: '',
      parentSpanId: transformHexStringToBase64ID(span.parentSpanID || ''),
      name: span.operationName,
      kind: getOTLPSpanKind(span.tags),
      startTimeUnixNano: span.startTime * 1000000,
      endTimeUnixNano: (span.startTime + span.duration) * 1000000,
      attributes: tagsToAttributes(span.tags),
      droppedAttributesCount: 0,
      droppedEventsCount: 0,
      droppedLinksCount: 0,
      status: getOTLPStatus(span.tags),
      events: getOTLPEvents(span.logs),
      links: getOTLPReferences(span.references)
    });
  }

  return result;
}

function getOTLPSpanKind(tags) {
  var _tags$find;

  let spanKind = undefined;
  const spanKindTagValue = (_tags$find = tags.find(t => t.key === 'span.kind')) === null || _tags$find === void 0 ? void 0 : _tags$find.value;

  switch (spanKindTagValue) {
    case 'server':
      spanKind = 'SPAN_KIND_SERVER';
      break;

    case 'client':
      spanKind = 'SPAN_KIND_CLIENT';
      break;

    case 'producer':
      spanKind = 'SPAN_KIND_PRODUCER';
      break;

    case 'consumer':
      spanKind = 'SPAN_KIND_CONSUMER';
      break;
  }

  return spanKind;
}
/**
 * Converts key-value tags to OTLP attributes and removes tags added by Grafana
 */


function tagsToAttributes(tags) {
  return tags.filter(t => !['span.kind', 'otel.library.name', 'otel.libary.version', 'otel.status_description', 'otel.status_code'].includes(t.key)).reduce((attributes, tag) => [...attributes, {
    key: tag.key,
    value: toAttributeValue(tag)
  }], []);
}
/**
 * Returns the correct OTLP AnyValue based on the value of the tag value
 */


function toAttributeValue(tag) {
  if (typeof tag.value === 'string') {
    return {
      stringValue: tag.value
    };
  } else if (typeof tag.value === 'boolean') {
    return {
      boolValue: tag.value
    };
  } else if (typeof tag.value === 'number') {
    if (tag.value % 1 === 0) {
      return {
        intValue: tag.value
      };
    } else {
      return {
        doubleValue: tag.value
      };
    }
  } else if (typeof tag.value === 'object') {
    if (Array.isArray(tag.value)) {
      const values = [];

      for (const val of tag.value) {
        values.push(toAttributeValue(val));
      }

      return {
        arrayValue: {
          values
        }
      };
    }
  }

  return {
    stringValue: tag.value
  };
}

function getOTLPStatus(tags) {
  let status = undefined;
  const statusCodeTag = tags.find(t => t.key === 'otel.status_code');

  if (statusCodeTag) {
    var _tags$find2;

    status = {
      code: statusCodeTag.value,
      message: (_tags$find2 = tags.find(t => t.key === 'otel_status_description')) === null || _tags$find2 === void 0 ? void 0 : _tags$find2.value
    };
  }

  return status;
}

function getOTLPEvents(logs) {
  if (!logs || !logs.length) {
    return undefined;
  }

  let events = [];

  for (const log of logs) {
    let event = {
      timeUnixNano: log.timestamp * 1000000,
      attributes: [],
      droppedAttributesCount: 0,
      name: ''
    };

    for (const field of log.fields) {
      event.attributes.push({
        key: field.key,
        value: toAttributeValue(field)
      });
    }

    events.push(event);
  }

  return events;
}

function getOTLPReferences(references) {
  if (!references || !references.length) {
    return undefined;
  }

  let links = [];

  for (const ref of references) {
    var _ref$tags;

    let link = {
      traceId: ref.traceID,
      spanId: ref.spanID,
      attributes: [],
      droppedAttributesCount: 0
    };

    if ((_ref$tags = ref.tags) !== null && _ref$tags !== void 0 && _ref$tags.length) {
      for (const tag of ref.tags) {
        var _link$attributes;

        (_link$attributes = link.attributes) === null || _link$attributes === void 0 ? void 0 : _link$attributes.push({
          key: tag.key,
          value: toAttributeValue(tag)
        });
      }
    }

    links.push(link);
  }

  return links;
}

function transformTrace(response, nodeGraph = false) {
  // We need to parse some of the fields which contain stringified json.
  // Seems like we can't just map the values as the frame we got from backend has some default processing
  // and will stringify the json back when we try to set it. So we create a new field and swap it instead.
  const frame = response.data[0];

  if (!frame) {
    return emptyDataQueryResponse;
  }

  try {
    parseJsonFields(frame);
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: 'Unable to parse trace response: ' + error
      },
      data: []
    };
  }

  let data = [...response.data];

  if (nodeGraph) {
    data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_3__.createGraphFrames)(frame));
  }

  return Object.assign({}, response, {
    data
  });
}
/**
 * Change fields which are json string into JS objects. Modifies the frame in place.
 */

function parseJsonFields(frame) {
  for (const fieldName of ['serviceTags', 'logs', 'tags', 'references']) {
    const field = frame.fields.find(f => f.name === fieldName);

    if (field) {
      const fieldIndex = frame.fields.indexOf(field);
      const values = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector();
      const newField = Object.assign({}, field, {
        values,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
      });

      for (let i = 0; i < field.values.length; i++) {
        const value = field.values.get(i);
        values.set(i, value === '' ? undefined : JSON.parse(value));
      }

      frame.fields[fieldIndex] = newField;
    }
  }
}

function createTableFrameFromSearch(data, instanceSettings) {
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace ID',
        links: [{
          title: 'Trace: ${__value.raw}',
          url: '',
          internal: {
            datasourceUid: instanceSettings.uid,
            datasourceName: instanceSettings.name,
            query: {
              query: '${__value.raw}',
              queryType: 'traceId'
            }
          }
        }]
      }
    }, {
      name: 'traceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace name'
      }
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayNameFromDS: 'Start time'
      }
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayNameFromDS: 'Duration',
        unit: 'ms'
      }
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  });

  if (!(data !== null && data !== void 0 && data.length)) {
    return frame;
  } // Show the most recent traces


  const traceData = data.sort((a, b) => parseInt(b === null || b === void 0 ? void 0 : b.startTimeUnixNano, 10) / 1000000 - parseInt(a === null || a === void 0 ? void 0 : a.startTimeUnixNano, 10) / 1000000).map(transformToTraceData);

  for (const trace of traceData) {
    frame.add(trace);
  }

  return frame;
}

function transformToTraceData(data) {
  let traceName = '';

  if (data.rootServiceName) {
    traceName += data.rootServiceName + ' ';
  }

  if (data.rootTraceName) {
    traceName += data.rootTraceName;
  }

  const traceStartTime = parseInt(data.startTimeUnixNano, 10) / 1000000;
  let startTime = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dateTimeFormat)(traceStartTime);

  if (Math.abs((0,date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(traceStartTime), Date.now())) <= 1) {
    startTime = (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(traceStartTime), Date.now(), {
      addSuffix: true,
      includeSeconds: true
    });
  }

  return {
    traceID: data.traceID,
    startTime: startTime,
    duration: data.durationMs,
    traceName
  };
}

const emptyDataQueryResponse = {
  data: [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'trace',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.trace,
      values: []
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'otlp'
      }
    }
  })]
};

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/syntax.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenizer": () => (/* binding */ tokenizer)
/* harmony export */ });
const tokenizer = {
  key: {
    pattern: /[^\s]+(?==)/,
    alias: 'attr-name'
  },
  operator: /[=]/,
  value: [{
    pattern: /"(.+)"/
  }, {
    pattern: /[^\s]+/
  }]
};

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextAPI": () => (/* binding */ ContextAPI)
/* harmony export */ });
/* harmony import */ var _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__.NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */
var ContextAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function ContextAPI() {
    }
    /** Get the singleton instance of the Context API */
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.registerGlobal)(API_NAME, contextManager, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    /**
     * Get the currently active context
     */
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    ContextAPI.prototype.with = function (context, fn, thisArg) {
        var _a;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([context, fn, thisArg], args));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */
    ContextAPI.prototype.bind = function (context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    return ContextAPI;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagAPI": () => (/* binding */ DiagAPI)
/* harmony export */ });
/* harmony import */ var _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js");
/* harmony import */ var _diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js");
/* harmony import */ var _diag_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */
var DiagAPI = /** @class */ (function () {
    /**
     * Private internal constructor
     * @private
     */
    function DiagAPI() {
        function _logProxy(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
                // shortcut if logger not set
                if (!logger)
                    return;
                return logger[funcName].apply(logger, args);
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        self.setLogger = function (logger, logLevel) {
            var _a, _b;
            if (logLevel === void 0) { logLevel = _diag_types__WEBPACK_IMPORTED_MODULE_2__.DiagLogLevel.INFO; }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            var oldLogger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
            var newLogger = (0,_diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__.createLogLevelDiagLogger)(logLevel, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger) {
                var stack = (_b = new Error().stack) !== null && _b !== void 0 ? _b : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.registerGlobal)('diag', newLogger, self, true);
        };
        self.disable = function () {
            (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.unregisterGlobal)(API_NAME, self);
        };
        self.createComponentLogger = function (options) {
            return new _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__.DiagComponentLogger(options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */
    DiagAPI.instance = function () {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}());

//# sourceMappingURL=diag.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/propagation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropagationAPI": () => (/* binding */ PropagationAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js");
/* harmony import */ var _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js");
/* harmony import */ var _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var API_NAME = 'propagation';
var NOOP_TEXT_MAP_PROPAGATOR = new _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__.NoopTextMapPropagator();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */
var PropagationAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function PropagationAPI() {
        this.createBaggage = _baggage_utils__WEBPACK_IMPORTED_MODULE_4__.createBaggage;
        this.getBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.getBaggage;
        this.setBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.setBaggage;
        this.deleteBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.deleteBaggage;
    }
    /** Get the singleton instance of the Propagator API */
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, propagator, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */
    PropagationAPI.prototype.inject = function (context, carrier, setter) {
        if (setter === void 0) { setter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapSetter; }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */
    PropagationAPI.prototype.extract = function (context, carrier, getter) {
        if (getter === void 0) { getter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapGetter; }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */
    PropagationAPI.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */
    PropagationAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}());

//# sourceMappingURL=propagation.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/trace.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceAPI": () => (/* binding */ TraceAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js");
/* harmony import */ var _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */
var TraceAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function TraceAPI() {
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
        this.wrapSpanContext = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.wrapSpanContext;
        this.isSpanContextValid = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.isSpanContextValid;
        this.deleteSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.deleteSpan;
        this.getSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpan;
        this.getSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpanContext;
        this.setSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpan;
        this.setSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpanContext;
    }
    /** Get the singleton instance of the Trace API */
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        var success = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, this._proxyTracerProvider, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    /**
     * Returns the global tracer provider.
     */
    TraceAPI.prototype.getTracerProvider = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */
    TraceAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
    };
    return TraceAPI;
}());

//# sourceMappingURL=trace.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteBaggage": () => (/* binding */ deleteBaggage),
/* harmony export */   "getBaggage": () => (/* binding */ getBaggage),
/* harmony export */   "setBaggage": () => (/* binding */ setBaggage)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Baggage key
 */
var BAGGAGE_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry Baggage Key');
/**
 * Retrieve the current baggage from the given context
 *
 * @param {Context} Context that manage all context values
 * @returns {Baggage} Extracted baggage from the context
 */
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
/**
 * Store a baggage in the given context
 *
 * @param {Context} Context that manage all context values
 * @param {Baggage} baggage that will be set in the actual context
 */
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
/**
 * Delete the baggage stored in the given context
 *
 * @param {Context} Context that manage all context values
 */
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}
//# sourceMappingURL=context-helpers.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaggageImpl": () => (/* binding */ BaggageImpl)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var BaggageImpl = /** @class */ (function () {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function (key) {
        var entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function () {
        return Array.from(this._entries.entries()).map(function (_a) {
            var k = _a[0], v = _a[1];
            return [k, v];
        });
    };
    BaggageImpl.prototype.setEntry = function (key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function (key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl(this._entries);
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            newBaggage._entries.delete(key);
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function () {
        return new BaggageImpl();
    };
    return BaggageImpl;
}());

//# sourceMappingURL=baggage-impl.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baggageEntryMetadataSymbol": () => (/* binding */ baggageEntryMetadataSymbol)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */
var baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');
//# sourceMappingURL=symbol.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baggageEntryMetadataFromString": () => (/* binding */ baggageEntryMetadataFromString),
/* harmony export */   "createBaggage": () => (/* binding */ createBaggage)
/* harmony export */ });
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/* harmony import */ var _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js");
/* harmony import */ var _internal_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var diag = _api_diag__WEBPACK_IMPORTED_MODULE_0__.DiagAPI.instance();
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */
function createBaggage(entries) {
    if (entries === void 0) { entries = {}; }
    return new _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__.BaggageImpl(new Map(Object.entries(entries)));
}
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 */
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = '';
    }
    return {
        __TYPE__: _internal_symbol__WEBPACK_IMPORTED_MODULE_2__.baggageEntryMetadataSymbol,
        toString: function () {
            return str;
        },
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Attributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Attributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Exception.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Exception.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Time.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=Time.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopContextManager": () => (/* binding */ NoopContextManager)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};

var NoopContextManager = /** @class */ (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return _context__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function (_context, fn, thisArg) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([thisArg], args));
    };
    NoopContextManager.prototype.bind = function (_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());

//# sourceMappingURL=NoopContextManager.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROOT_CONTEXT": () => (/* binding */ ROOT_CONTEXT),
/* harmony export */   "createContextKey": () => (/* binding */ createContextKey)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Get a key to uniquely identify a context value */
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = /** @class */ (function () {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function (key) { return self._currentContext.get(key); };
        self.setValue = function (key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function (key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}());
/** The root context is used as the default parent context when there is no active context */
var ROOT_CONTEXT = new BaseContext();
//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagComponentLogger": () => (/* binding */ DiagComponentLogger)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */
var DiagComponentLogger = /** @class */ (function () {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}());

function logProxy(funcName, namespace, args) {
    var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, args);
}
//# sourceMappingURL=ComponentLogger.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* binding */ DiagConsoleLogger)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var consoleMap = [
    { n: 'error', c: 'error' },
    { n: 'warn', c: 'warn' },
    { n: 'info', c: 'info' },
    { n: 'debug', c: 'debug' },
    { n: 'verbose', c: 'trace' },
];
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 */
var DiagConsoleLogger = /** @class */ (function () {
    function DiagConsoleLogger() {
        function _consoleFunc(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (console) {
                    // Some environments only expose the console when the F12 developer console is open
                    // eslint-disable-next-line no-console
                    var theFunc = console[funcName];
                    if (typeof theFunc !== 'function') {
                        // Not all environments support all functions
                        // eslint-disable-next-line no-console
                        theFunc = console.log;
                    }
                    // One last final check
                    if (typeof theFunc === 'function') {
                        return theFunc.apply(console, args);
                    }
                }
            };
        }
        for (var i = 0; i < consoleMap.length; i++) {
            this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
    }
    return DiagConsoleLogger;
}());

//# sourceMappingURL=consoleLogger.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* reexport safe */ _consoleLogger__WEBPACK_IMPORTED_MODULE_0__.DiagConsoleLogger),
/* harmony export */   "DiagLogLevel": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.DiagLogLevel)
/* harmony export */ });
/* harmony import */ var _consoleLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLogLevelDiagLogger": () => (/* binding */ createLogLevelDiagLogger)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE;
    }
    else if (maxLevel > _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function () { };
    }
    return {
        error: _filterFunc('error', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ERROR),
        warn: _filterFunc('warn', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.WARN),
        info: _filterFunc('info', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.INFO),
        debug: _filterFunc('debug', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.DEBUG),
        verbose: _filterFunc('verbose', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.VERBOSE),
    };
}
//# sourceMappingURL=logLevelLogger.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagLogLevel": () => (/* binding */ DiagLogLevel)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */
var DiagLogLevel;
(function (DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */
    DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */
    DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */
    DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */
    DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */
    DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */
    DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */
    DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* reexport safe */ _diag__WEBPACK_IMPORTED_MODULE_5__.DiagConsoleLogger),
/* harmony export */   "DiagLogLevel": () => (/* reexport safe */ _diag__WEBPACK_IMPORTED_MODULE_5__.DiagLogLevel),
/* harmony export */   "INVALID_SPANID": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__.INVALID_SPANID),
/* harmony export */   "INVALID_SPAN_CONTEXT": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__.INVALID_SPAN_CONTEXT),
/* harmony export */   "INVALID_TRACEID": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__.INVALID_TRACEID),
/* harmony export */   "ProxyTracer": () => (/* reexport safe */ _trace_ProxyTracer__WEBPACK_IMPORTED_MODULE_9__.ProxyTracer),
/* harmony export */   "ProxyTracerProvider": () => (/* reexport safe */ _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_10__.ProxyTracerProvider),
/* harmony export */   "ROOT_CONTEXT": () => (/* reexport safe */ _context_context__WEBPACK_IMPORTED_MODULE_26__.ROOT_CONTEXT),
/* harmony export */   "SamplingDecision": () => (/* reexport safe */ _trace_SamplingResult__WEBPACK_IMPORTED_MODULE_12__.SamplingDecision),
/* harmony export */   "SpanKind": () => (/* reexport safe */ _trace_span_kind__WEBPACK_IMPORTED_MODULE_14__.SpanKind),
/* harmony export */   "SpanStatusCode": () => (/* reexport safe */ _trace_status__WEBPACK_IMPORTED_MODULE_17__.SpanStatusCode),
/* harmony export */   "TraceFlags": () => (/* reexport safe */ _trace_trace_flags__WEBPACK_IMPORTED_MODULE_18__.TraceFlags),
/* harmony export */   "baggageEntryMetadataFromString": () => (/* reexport safe */ _baggage_utils__WEBPACK_IMPORTED_MODULE_1__.baggageEntryMetadataFromString),
/* harmony export */   "context": () => (/* binding */ context),
/* harmony export */   "createContextKey": () => (/* reexport safe */ _context_context__WEBPACK_IMPORTED_MODULE_26__.createContextKey),
/* harmony export */   "createTraceState": () => (/* reexport safe */ _trace_internal_utils__WEBPACK_IMPORTED_MODULE_20__.createTraceState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultTextMapGetter": () => (/* reexport safe */ _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_6__.defaultTextMapGetter),
/* harmony export */   "defaultTextMapSetter": () => (/* reexport safe */ _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_6__.defaultTextMapSetter),
/* harmony export */   "diag": () => (/* binding */ diag),
/* harmony export */   "isSpanContextValid": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__.isSpanContextValid),
/* harmony export */   "isValidSpanId": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__.isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__.isValidTraceId),
/* harmony export */   "propagation": () => (/* binding */ propagation),
/* harmony export */   "trace": () => (/* binding */ trace)
/* harmony export */ });
/* harmony import */ var _baggage_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/types.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _common_Exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Exception.js");
/* harmony import */ var _common_Time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Time.js");
/* harmony import */ var _common_Attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Attributes.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/index.js");
/* harmony import */ var _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js");
/* harmony import */ var _trace_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/attributes.js");
/* harmony import */ var _trace_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/link.js");
/* harmony import */ var _trace_ProxyTracer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js");
/* harmony import */ var _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js");
/* harmony import */ var _trace_Sampler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/Sampler.js");
/* harmony import */ var _trace_SamplingResult__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js");
/* harmony import */ var _trace_span_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_context.js");
/* harmony import */ var _trace_span_kind__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js");
/* harmony import */ var _trace_span__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span.js");
/* harmony import */ var _trace_SpanOptions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SpanOptions.js");
/* harmony import */ var _trace_status__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/status.js");
/* harmony import */ var _trace_trace_flags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/* harmony import */ var _trace_trace_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_state.js");
/* harmony import */ var _trace_internal_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js");
/* harmony import */ var _trace_tracer_provider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_provider.js");
/* harmony import */ var _trace_tracer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer.js");
/* harmony import */ var _trace_tracer_options__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_options.js");
/* harmony import */ var _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/types.js");
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _api_trace__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/trace.js");
/* harmony import */ var _api_propagation__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/propagation.js");
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





























/** Entrypoint for context API */
var context = _api_context__WEBPACK_IMPORTED_MODULE_28__.ContextAPI.getInstance();

/** Entrypoint for trace API */
var trace = _api_trace__WEBPACK_IMPORTED_MODULE_29__.TraceAPI.getInstance();

/** Entrypoint for propagation API */
var propagation = _api_propagation__WEBPACK_IMPORTED_MODULE_30__.PropagationAPI.getInstance();

/**
 * Entrypoint for Diag API.
 * Defines Diagnostic handler used for internal diagnostic logging operations.
 * The default provides a Noop DiagLogger implementation which may be changed via the
 * diag.setLogger(logger: DiagLogger) function.
 */
var diag = _api_diag__WEBPACK_IMPORTED_MODULE_31__.DiagAPI.instance();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    trace: trace,
    context: context,
    propagation: propagation,
    diag: diag,
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "registerGlobal": () => (/* binding */ registerGlobal),
/* harmony export */   "unregisterGlobal": () => (/* binding */ unregisterGlobal)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/version.js");
/* harmony import */ var _semver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/semver.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var major = _version__WEBPACK_IMPORTED_MODULE_1__.VERSION.split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _platform__WEBPACK_IMPORTED_MODULE_0__._globalThis;
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) { allowOverride = false; }
    var api = (_global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: _version__WEBPACK_IMPORTED_MODULE_1__.VERSION,
    });
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== _version__WEBPACK_IMPORTED_MODULE_1__.VERSION) {
        // All registered APIs must be of the same version exactly
        var err = new Error('@opentelemetry/api: All API registration versions must match');
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0,_semver__WEBPACK_IMPORTED_MODULE_2__.isCompatible)(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
//# sourceMappingURL=global-utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/semver.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_makeCompatibilityCheck": () => (/* binding */ _makeCompatibilityCheck),
/* harmony export */   "isCompatible": () => (/* binding */ isCompatible)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/version.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
 * Create a function to test an API version to see if it is compatible with the provided ownVersion.
 *
 * The returned function has the following semantics:
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param ownVersion version which should be checked against
 */
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([ownVersion]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function () { return false; };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4],
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4],
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor &&
                ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
/**
 * Test an API version to see if it is compatible with this API.
 *
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param version version of the API requesting an instance of the global API
 */
var isCompatible = _makeCompatibilityCheck(_version__WEBPACK_IMPORTED_MODULE_0__.VERSION);
//# sourceMappingURL=semver.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_globalThis": () => (/* binding */ _globalThis)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Updates to this file should also be replicated to @opentelemetry/api-metrics and
// @opentelemetry/core too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
var _globalThis = typeof globalThis === 'object' ? globalThis :
    typeof self === 'object' ? self :
        typeof window === 'object' ? window :
            typeof __webpack_require__.g === 'object' ? __webpack_require__.g :
                {};
//# sourceMappingURL=globalThis.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_globalThis": () => (/* reexport safe */ _globalThis__WEBPACK_IMPORTED_MODULE_0__._globalThis)
/* harmony export */ });
/* harmony import */ var _globalThis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTextMapPropagator": () => (/* binding */ NoopTextMapPropagator)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * No-op implementations of {@link TextMapPropagator}.
 */
var NoopTextMapPropagator = /** @class */ (function () {
    function NoopTextMapPropagator() {
    }
    /** Noop inject function does nothing */
    NoopTextMapPropagator.prototype.inject = function (_context, _carrier) { };
    /** Noop extract function does nothing and returns the input context */
    NoopTextMapPropagator.prototype.extract = function (context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function () {
        return [];
    };
    return NoopTextMapPropagator;
}());

//# sourceMappingURL=NoopTextMapPropagator.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTextMapGetter": () => (/* binding */ defaultTextMapGetter),
/* harmony export */   "defaultTextMapSetter": () => (/* binding */ defaultTextMapSetter)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var defaultTextMapGetter = {
    get: function (carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys: function (carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    },
};
var defaultTextMapSetter = {
    set: function (carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    },
};
//# sourceMappingURL=TextMapPropagator.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonRecordingSpan": () => (/* binding */ NonRecordingSpan)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */
var NonRecordingSpan = /** @class */ (function () {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPAN_CONTEXT; }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function () {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function (_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function (_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function (_endTime) { };
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function () {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function (_exception, _time) { };
    return NonRecordingSpan;
}());

//# sourceMappingURL=NonRecordingSpan.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTracer": () => (/* binding */ NoopTracer)
/* harmony export */ });
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/* harmony import */ var _spancontext_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var context = _api_context__WEBPACK_IMPORTED_MODULE_0__.ContextAPI.getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */
var NoopTracer = /** @class */ (function () {
    function NoopTracer() {
    }
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function (name, options, context) {
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
        var parentFromContext = context && (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.getSpanContext)(context);
        if (isSpanContext(parentFromContext) &&
            (0,_spancontext_utils__WEBPACK_IMPORTED_MODULE_3__.isSpanContextValid)(parentFromContext)) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan(parentFromContext);
        }
        else {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
    };
    NoopTracer.prototype.startActiveSpan = function (name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.setSpan)(parentContext, span);
        return context.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}());

function isSpanContext(spanContext) {
    return (typeof spanContext === 'object' &&
        typeof spanContext['spanId'] === 'string' &&
        typeof spanContext['traceId'] === 'string' &&
        typeof spanContext['traceFlags'] === 'number');
}
//# sourceMappingURL=NoopTracer.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTracerProvider": () => (/* binding */ NoopTracerProvider)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
var NoopTracerProvider = /** @class */ (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version, _options) {
        return new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
    };
    return NoopTracerProvider;
}());

//# sourceMappingURL=NoopTracerProvider.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyTracer": () => (/* binding */ ProxyTracer)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NOOP_TRACER = new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
/**
 * Proxy tracer provided by the proxy tracer provider
 */
var ProxyTracer = /** @class */ (function () {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function (name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function (_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    ProxyTracer.prototype._getTracer = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}());

//# sourceMappingURL=ProxyTracer.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyTracerProvider": () => (/* binding */ ProxyTracerProvider)
/* harmony export */ });
/* harmony import */ var _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js");
/* harmony import */ var _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var NOOP_TRACER_PROVIDER = new _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__.NoopTracerProvider();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */
var ProxyTracerProvider = /** @class */ (function () {
    function ProxyTracerProvider() {
    }
    /**
     * Get a {@link ProxyTracer}
     */
    ProxyTracerProvider.prototype.getTracer = function (name, version, options) {
        var _a;
        return ((_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__.ProxyTracer(this, name, version, options));
    };
    ProxyTracerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */
    ProxyTracerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function (name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}());

//# sourceMappingURL=ProxyTracerProvider.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/Sampler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Sampler.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplingDecision": () => (/* binding */ SamplingDecision)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
//# sourceMappingURL=SamplingResult.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SpanOptions.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=SpanOptions.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/attributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=attributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteSpan": () => (/* binding */ deleteSpan),
/* harmony export */   "getSpan": () => (/* binding */ getSpan),
/* harmony export */   "getSpanContext": () => (/* binding */ getSpanContext),
/* harmony export */   "setSpan": () => (/* binding */ setSpan),
/* harmony export */   "setSpanContext": () => (/* binding */ setSpanContext)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * span key
 */
var SPAN_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry Context Key SPAN');
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return setSpan(context, new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext));
}
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//# sourceMappingURL=context-utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceStateImpl": () => (/* binding */ TraceStateImpl)
/* harmony export */ });
/* harmony import */ var _tracestate_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ',';
var LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */
var TraceStateImpl = /** @class */ (function () {
    function TraceStateImpl(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState)
            this._parse(rawTraceState);
    }
    TraceStateImpl.prototype.set = function (key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        var traceState = this._clone();
        if (traceState._internalState.has(key)) {
            traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceStateImpl.prototype.unset = function (key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceStateImpl.prototype.get = function (key) {
        return this._internalState.get(key);
    };
    TraceStateImpl.prototype.serialize = function () {
        var _this = this;
        return this._keys()
            .reduce(function (agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, [])
            .join(LIST_MEMBERS_SEPARATOR);
    };
    TraceStateImpl.prototype._parse = function (rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN)
            return;
        this._internalState = rawTraceState
            .split(LIST_MEMBERS_SEPARATOR)
            .reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
            .reduce(function (agg, part) {
            var listMember = part.trim(); // Optional Whitespace (OWS) handling
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if ((0,_tracestate_validators__WEBPACK_IMPORTED_MODULE_0__.validateKey)(key) && (0,_tracestate_validators__WEBPACK_IMPORTED_MODULE_0__.validateValue)(value)) {
                    agg.set(key, value);
                }
                else {
                    // TODO: Consider to add warning log
                }
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries())
                .reverse() // Use reverse same as original tracestate parse chain
                .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    };
    TraceStateImpl.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl.prototype._clone = function () {
        var traceState = new TraceStateImpl();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceStateImpl;
}());

//# sourceMappingURL=tracestate-impl.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateKey": () => (/* binding */ validateKey),
/* harmony export */   "validateValue": () => (/* binding */ validateValue)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
/**
 * Key is opaque string up to 256 characters printable. It MUST begin with a
 * lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
 * underscores _, dashes -, asterisks *, and forward slashes /.
 * For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
 * vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
 * see https://www.w3.org/TR/trace-context/#key
 */
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
/**
 * Value is opaque string up to 256 characters printable ASCII RFC0020
 * characters (i.e., the range 0x20 to 0x7E) except comma , and =.
 */
function validateValue(value) {
    return (VALID_VALUE_BASE_REGEX.test(value) &&
        !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value));
}
//# sourceMappingURL=tracestate-validators.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTraceState": () => (/* binding */ createTraceState)
/* harmony export */ });
/* harmony import */ var _tracestate_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createTraceState(rawTraceState) {
    return new _tracestate_impl__WEBPACK_IMPORTED_MODULE_0__.TraceStateImpl(rawTraceState);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INVALID_SPANID": () => (/* binding */ INVALID_SPANID),
/* harmony export */   "INVALID_SPAN_CONTEXT": () => (/* binding */ INVALID_SPAN_CONTEXT),
/* harmony export */   "INVALID_TRACEID": () => (/* binding */ INVALID_TRACEID)
/* harmony export */ });
/* harmony import */ var _trace_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: _trace_flags__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.NONE,
};
//# sourceMappingURL=invalid-span-constants.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/link.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=span.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=span_context.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanKind": () => (/* binding */ SpanKind)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
//# sourceMappingURL=span_kind.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSpanContextValid": () => (/* binding */ isSpanContextValid),
/* harmony export */   "isValidSpanId": () => (/* binding */ isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* binding */ isValidTraceId),
/* harmony export */   "wrapSpanContext": () => (/* binding */ wrapSpanContext)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_TRACEID;
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPANID;
}
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */
function wrapSpanContext(spanContext) {
    return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext);
}
//# sourceMappingURL=spancontext-utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/status.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanStatusCode": () => (/* binding */ SpanStatusCode)
/* harmony export */ });
/**
 * An enumeration of status codes.
 */
var SpanStatusCode;
(function (SpanStatusCode) {
    /**
     * The default status.
     */
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceFlags": () => (/* binding */ TraceFlags)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TraceFlags;
(function (TraceFlags) {
    /** Represents no flag set. */
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
//# sourceMappingURL=trace_flags.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_state.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=trace_state.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_options.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer_options.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_provider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer_provider.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/version.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this is autogenerated file, see scripts/version-update.js
var VERSION = '1.1.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsEcsLaunchtypeValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.AwsEcsLaunchtypeValues),
/* harmony export */   "CloudPlatformValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.CloudPlatformValues),
/* harmony export */   "CloudProviderValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.CloudProviderValues),
/* harmony export */   "DbCassandraConsistencyLevelValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.DbCassandraConsistencyLevelValues),
/* harmony export */   "DbSystemValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.DbSystemValues),
/* harmony export */   "FaasDocumentOperationValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.FaasDocumentOperationValues),
/* harmony export */   "FaasInvokedProviderValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.FaasInvokedProviderValues),
/* harmony export */   "FaasTriggerValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.FaasTriggerValues),
/* harmony export */   "HostArchValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.HostArchValues),
/* harmony export */   "HttpFlavorValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.HttpFlavorValues),
/* harmony export */   "MessageTypeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.MessageTypeValues),
/* harmony export */   "MessagingDestinationKindValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.MessagingDestinationKindValues),
/* harmony export */   "MessagingOperationValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.MessagingOperationValues),
/* harmony export */   "NetHostConnectionSubtypeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionSubtypeValues),
/* harmony export */   "NetHostConnectionTypeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionTypeValues),
/* harmony export */   "NetTransportValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.NetTransportValues),
/* harmony export */   "OsTypeValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.OsTypeValues),
/* harmony export */   "RpcGrpcStatusCodeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.RpcGrpcStatusCodeValues),
/* harmony export */   "SemanticAttributes": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.SemanticAttributes),
/* harmony export */   "SemanticResourceAttributes": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.SemanticResourceAttributes),
/* harmony export */   "TelemetrySdkLanguageValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.TelemetrySdkLanguageValues)
/* harmony export */ });
/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/index.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/index.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsEcsLaunchtypeValues": () => (/* binding */ AwsEcsLaunchtypeValues),
/* harmony export */   "CloudPlatformValues": () => (/* binding */ CloudPlatformValues),
/* harmony export */   "CloudProviderValues": () => (/* binding */ CloudProviderValues),
/* harmony export */   "HostArchValues": () => (/* binding */ HostArchValues),
/* harmony export */   "OsTypeValues": () => (/* binding */ OsTypeValues),
/* harmony export */   "SemanticResourceAttributes": () => (/* binding */ SemanticResourceAttributes),
/* harmony export */   "TelemetrySdkLanguageValues": () => (/* binding */ TelemetrySdkLanguageValues)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
var SemanticResourceAttributes = {
    /**
    * Name of the cloud provider.
    */
    CLOUD_PROVIDER: 'cloud.provider',
    /**
    * The cloud account ID the resource is assigned to.
    */
    CLOUD_ACCOUNT_ID: 'cloud.account.id',
    /**
    * The geographical region the resource is running. Refer to your provider&#39;s docs to see the available regions, for example [Alibaba Cloud regions](https://www.alibabacloud.com/help/doc-detail/40654.htm), [AWS regions](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/), [Azure regions](https://azure.microsoft.com/en-us/global-infrastructure/geographies/), or [Google Cloud regions](https://cloud.google.com/about/locations).
    */
    CLOUD_REGION: 'cloud.region',
    /**
    * Cloud regions often have multiple, isolated locations known as zones to increase availability. Availability zone represents the zone where the resource is running.
    *
    * Note: Availability zones are called &#34;zones&#34; on Alibaba Cloud and Google Cloud.
    */
    CLOUD_AVAILABILITY_ZONE: 'cloud.availability_zone',
    /**
    * The cloud platform in use.
    *
    * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
    */
    CLOUD_PLATFORM: 'cloud.platform',
    /**
    * The Amazon Resource Name (ARN) of an [ECS container instance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html).
    */
    AWS_ECS_CONTAINER_ARN: 'aws.ecs.container.arn',
    /**
    * The ARN of an [ECS cluster](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html).
    */
    AWS_ECS_CLUSTER_ARN: 'aws.ecs.cluster.arn',
    /**
    * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
    */
    AWS_ECS_LAUNCHTYPE: 'aws.ecs.launchtype',
    /**
    * The ARN of an [ECS task definition](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html).
    */
    AWS_ECS_TASK_ARN: 'aws.ecs.task.arn',
    /**
    * The task definition family this task definition is a member of.
    */
    AWS_ECS_TASK_FAMILY: 'aws.ecs.task.family',
    /**
    * The revision for this task definition.
    */
    AWS_ECS_TASK_REVISION: 'aws.ecs.task.revision',
    /**
    * The ARN of an EKS cluster.
    */
    AWS_EKS_CLUSTER_ARN: 'aws.eks.cluster.arn',
    /**
    * The name(s) of the AWS log group(s) an application is writing to.
    *
    * Note: Multiple log groups must be supported for cases like multi-container applications, where a single application has sidecar containers, and each write to their own log group.
    */
    AWS_LOG_GROUP_NAMES: 'aws.log.group.names',
    /**
    * The Amazon Resource Name(s) (ARN) of the AWS log group(s).
    *
    * Note: See the [log group ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format).
    */
    AWS_LOG_GROUP_ARNS: 'aws.log.group.arns',
    /**
    * The name(s) of the AWS log stream(s) an application is writing to.
    */
    AWS_LOG_STREAM_NAMES: 'aws.log.stream.names',
    /**
    * The ARN(s) of the AWS log stream(s).
    *
    * Note: See the [log stream ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format). One log group can contain several log streams, so these ARNs necessarily identify both a log group and a log stream.
    */
    AWS_LOG_STREAM_ARNS: 'aws.log.stream.arns',
    /**
    * Container name.
    */
    CONTAINER_NAME: 'container.name',
    /**
    * Container ID. Usually a UUID, as for example used to [identify Docker containers](https://docs.docker.com/engine/reference/run/#container-identification). The UUID might be abbreviated.
    */
    CONTAINER_ID: 'container.id',
    /**
    * The container runtime managing this container.
    */
    CONTAINER_RUNTIME: 'container.runtime',
    /**
    * Name of the image the container was built on.
    */
    CONTAINER_IMAGE_NAME: 'container.image.name',
    /**
    * Container image tag.
    */
    CONTAINER_IMAGE_TAG: 'container.image.tag',
    /**
    * Name of the [deployment environment](https://en.wikipedia.org/wiki/Deployment_environment) (aka deployment tier).
    */
    DEPLOYMENT_ENVIRONMENT: 'deployment.environment',
    /**
    * A unique identifier representing the device.
    *
    * Note: The device identifier MUST only be defined using the values outlined below. This value is not an advertising identifier and MUST NOT be used as such. On iOS (Swift or Objective-C), this value MUST be equal to the [vendor identifier](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor). On Android (Java or Kotlin), this value MUST be equal to the Firebase Installation ID or a globally unique UUID which is persisted across sessions in your application. More information can be found [here](https://developer.android.com/training/articles/user-data-ids) on best practices and exact implementation details. Caution should be taken when storing personal data or anything which can identify a user. GDPR and data protection laws may apply, ensure you do your own due diligence.
    */
    DEVICE_ID: 'device.id',
    /**
    * The model identifier for the device.
    *
    * Note: It&#39;s recommended this value represents a machine readable version of the model identifier rather than the market or consumer-friendly name of the device.
    */
    DEVICE_MODEL_IDENTIFIER: 'device.model.identifier',
    /**
    * The marketing name for the device model.
    *
    * Note: It&#39;s recommended this value represents a human readable version of the device model rather than a machine readable alternative.
    */
    DEVICE_MODEL_NAME: 'device.model.name',
    /**
    * The name of the single function that this runtime instance executes.
    *
    * Note: This is the name of the function as configured/deployed on the FaaS platform and is usually different from the name of the callback function (which may be stored in the [`code.namespace`/`code.function`](../../trace/semantic_conventions/span-general.md#source-code-attributes) span attributes).
    */
    FAAS_NAME: 'faas.name',
    /**
    * The unique ID of the single function that this runtime instance executes.
    *
    * Note: Depending on the cloud provider, use:
  
  * **AWS Lambda:** The function [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
  Take care not to use the &#34;invoked ARN&#34; directly but replace any
  [alias suffix](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html) with the resolved function version, as the same runtime instance may be invokable with multiple
  different aliases.
  * **GCP:** The [URI of the resource](https://cloud.google.com/iam/docs/full-resource-names)
  * **Azure:** The [Fully Qualified Resource ID](https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id).
  
  On some providers, it may not be possible to determine the full ID at startup,
  which is why this field cannot be made required. For example, on AWS the account ID
  part of the ARN is not available without calling another AWS API
  which may be deemed too slow for a short-running lambda function.
  As an alternative, consider setting `faas.id` as a span attribute instead.
    */
    FAAS_ID: 'faas.id',
    /**
    * The immutable version of the function being executed.
    *
    * Note: Depending on the cloud provider and platform, use:
  
  * **AWS Lambda:** The [function version](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html)
    (an integer represented as a decimal string).
  * **Google Cloud Run:** The [revision](https://cloud.google.com/run/docs/managing/revisions)
    (i.e., the function name plus the revision suffix).
  * **Google Cloud Functions:** The value of the
    [`K_REVISION` environment variable](https://cloud.google.com/functions/docs/env-var#runtime_environment_variables_set_automatically).
  * **Azure Functions:** Not applicable. Do not set this attribute.
    */
    FAAS_VERSION: 'faas.version',
    /**
    * The execution environment ID as a string, that will be potentially reused for other invocations to the same function/function version.
    *
    * Note: * **AWS Lambda:** Use the (full) log stream name.
    */
    FAAS_INSTANCE: 'faas.instance',
    /**
    * The amount of memory available to the serverless function in MiB.
    *
    * Note: It&#39;s recommended to set this attribute since e.g. too little memory can easily stop a Java AWS Lambda function from working correctly. On AWS Lambda, the environment variable `AWS_LAMBDA_FUNCTION_MEMORY_SIZE` provides this information.
    */
    FAAS_MAX_MEMORY: 'faas.max_memory',
    /**
    * Unique host ID. For Cloud, this must be the instance_id assigned by the cloud provider.
    */
    HOST_ID: 'host.id',
    /**
    * Name of the host. On Unix systems, it may contain what the hostname command returns, or the fully qualified hostname, or another name specified by the user.
    */
    HOST_NAME: 'host.name',
    /**
    * Type of host. For Cloud, this must be the machine type.
    */
    HOST_TYPE: 'host.type',
    /**
    * The CPU architecture the host system is running on.
    */
    HOST_ARCH: 'host.arch',
    /**
    * Name of the VM image or OS install the host was instantiated from.
    */
    HOST_IMAGE_NAME: 'host.image.name',
    /**
    * VM image ID. For Cloud, this value is from the provider.
    */
    HOST_IMAGE_ID: 'host.image.id',
    /**
    * The version string of the VM image as defined in [Version Attributes](README.md#version-attributes).
    */
    HOST_IMAGE_VERSION: 'host.image.version',
    /**
    * The name of the cluster.
    */
    K8S_CLUSTER_NAME: 'k8s.cluster.name',
    /**
    * The name of the Node.
    */
    K8S_NODE_NAME: 'k8s.node.name',
    /**
    * The UID of the Node.
    */
    K8S_NODE_UID: 'k8s.node.uid',
    /**
    * The name of the namespace that the pod is running in.
    */
    K8S_NAMESPACE_NAME: 'k8s.namespace.name',
    /**
    * The UID of the Pod.
    */
    K8S_POD_UID: 'k8s.pod.uid',
    /**
    * The name of the Pod.
    */
    K8S_POD_NAME: 'k8s.pod.name',
    /**
    * The name of the Container in a Pod template.
    */
    K8S_CONTAINER_NAME: 'k8s.container.name',
    /**
    * The UID of the ReplicaSet.
    */
    K8S_REPLICASET_UID: 'k8s.replicaset.uid',
    /**
    * The name of the ReplicaSet.
    */
    K8S_REPLICASET_NAME: 'k8s.replicaset.name',
    /**
    * The UID of the Deployment.
    */
    K8S_DEPLOYMENT_UID: 'k8s.deployment.uid',
    /**
    * The name of the Deployment.
    */
    K8S_DEPLOYMENT_NAME: 'k8s.deployment.name',
    /**
    * The UID of the StatefulSet.
    */
    K8S_STATEFULSET_UID: 'k8s.statefulset.uid',
    /**
    * The name of the StatefulSet.
    */
    K8S_STATEFULSET_NAME: 'k8s.statefulset.name',
    /**
    * The UID of the DaemonSet.
    */
    K8S_DAEMONSET_UID: 'k8s.daemonset.uid',
    /**
    * The name of the DaemonSet.
    */
    K8S_DAEMONSET_NAME: 'k8s.daemonset.name',
    /**
    * The UID of the Job.
    */
    K8S_JOB_UID: 'k8s.job.uid',
    /**
    * The name of the Job.
    */
    K8S_JOB_NAME: 'k8s.job.name',
    /**
    * The UID of the CronJob.
    */
    K8S_CRONJOB_UID: 'k8s.cronjob.uid',
    /**
    * The name of the CronJob.
    */
    K8S_CRONJOB_NAME: 'k8s.cronjob.name',
    /**
    * The operating system type.
    */
    OS_TYPE: 'os.type',
    /**
    * Human readable (not intended to be parsed) OS version information, like e.g. reported by `ver` or `lsb_release -a` commands.
    */
    OS_DESCRIPTION: 'os.description',
    /**
    * Human readable operating system name.
    */
    OS_NAME: 'os.name',
    /**
    * The version string of the operating system as defined in [Version Attributes](../../resource/semantic_conventions/README.md#version-attributes).
    */
    OS_VERSION: 'os.version',
    /**
    * Process identifier (PID).
    */
    PROCESS_PID: 'process.pid',
    /**
    * The name of the process executable. On Linux based systems, can be set to the `Name` in `proc/[pid]/status`. On Windows, can be set to the base name of `GetProcessImageFileNameW`.
    */
    PROCESS_EXECUTABLE_NAME: 'process.executable.name',
    /**
    * The full path to the process executable. On Linux based systems, can be set to the target of `proc/[pid]/exe`. On Windows, can be set to the result of `GetProcessImageFileNameW`.
    */
    PROCESS_EXECUTABLE_PATH: 'process.executable.path',
    /**
    * The command used to launch the process (i.e. the command name). On Linux based systems, can be set to the zeroth string in `proc/[pid]/cmdline`. On Windows, can be set to the first parameter extracted from `GetCommandLineW`.
    */
    PROCESS_COMMAND: 'process.command',
    /**
    * The full command used to launch the process as a single string representing the full command. On Windows, can be set to the result of `GetCommandLineW`. Do not set this if you have to assemble it just for monitoring; use `process.command_args` instead.
    */
    PROCESS_COMMAND_LINE: 'process.command_line',
    /**
    * All the command arguments (including the command/executable itself) as received by the process. On Linux-based systems (and some other Unixoid systems supporting procfs), can be set according to the list of null-delimited strings extracted from `proc/[pid]/cmdline`. For libc-based executables, this would be the full argv vector passed to `main`.
    */
    PROCESS_COMMAND_ARGS: 'process.command_args',
    /**
    * The username of the user that owns the process.
    */
    PROCESS_OWNER: 'process.owner',
    /**
    * The name of the runtime of this process. For compiled native binaries, this SHOULD be the name of the compiler.
    */
    PROCESS_RUNTIME_NAME: 'process.runtime.name',
    /**
    * The version of the runtime of this process, as returned by the runtime without modification.
    */
    PROCESS_RUNTIME_VERSION: 'process.runtime.version',
    /**
    * An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment.
    */
    PROCESS_RUNTIME_DESCRIPTION: 'process.runtime.description',
    /**
    * Logical name of the service.
    *
    * Note: MUST be the same for all instances of horizontally scaled services. If the value was not specified, SDKs MUST fallback to `unknown_service:` concatenated with [`process.executable.name`](process.md#process), e.g. `unknown_service:bash`. If `process.executable.name` is not available, the value MUST be set to `unknown_service`.
    */
    SERVICE_NAME: 'service.name',
    /**
    * A namespace for `service.name`.
    *
    * Note: A string value having a meaning that helps to distinguish a group of services, for example the team name that owns a group of services. `service.name` is expected to be unique within the same namespace. If `service.namespace` is not specified in the Resource then `service.name` is expected to be unique for all services that have no explicit namespace defined (so the empty/unspecified namespace is simply one more valid namespace). Zero-length namespace string is assumed equal to unspecified namespace.
    */
    SERVICE_NAMESPACE: 'service.namespace',
    /**
    * The string ID of the service instance.
    *
    * Note: MUST be unique for each instance of the same `service.namespace,service.name` pair (in other words `service.namespace,service.name,service.instance.id` triplet MUST be globally unique). The ID helps to distinguish instances of the same service that exist at the same time (e.g. instances of a horizontally scaled service). It is preferable for the ID to be persistent and stay the same for the lifetime of the service instance, however it is acceptable that the ID is ephemeral and changes during important lifetime events for the service (e.g. service restarts). If the service has no inherent unique ID that can be used as the value of this attribute it is recommended to generate a random Version 1 or Version 4 RFC 4122 UUID (services aiming for reproducible UUIDs may also use Version 5, see RFC 4122 for more recommendations).
    */
    SERVICE_INSTANCE_ID: 'service.instance.id',
    /**
    * The version string of the service API or implementation.
    */
    SERVICE_VERSION: 'service.version',
    /**
    * The name of the telemetry SDK as defined above.
    */
    TELEMETRY_SDK_NAME: 'telemetry.sdk.name',
    /**
    * The language of the telemetry SDK.
    */
    TELEMETRY_SDK_LANGUAGE: 'telemetry.sdk.language',
    /**
    * The version string of the telemetry SDK.
    */
    TELEMETRY_SDK_VERSION: 'telemetry.sdk.version',
    /**
    * The version string of the auto instrumentation agent, if used.
    */
    TELEMETRY_AUTO_VERSION: 'telemetry.auto.version',
    /**
    * The name of the web engine.
    */
    WEBENGINE_NAME: 'webengine.name',
    /**
    * The version of the web engine.
    */
    WEBENGINE_VERSION: 'webengine.version',
    /**
    * Additional description of the web engine (e.g. detailed version and edition information).
    */
    WEBENGINE_DESCRIPTION: 'webengine.description',
};
var CloudProviderValues = {
    /** Alibaba Cloud. */
    ALIBABA_CLOUD: 'alibaba_cloud',
    /** Amazon Web Services. */
    AWS: 'aws',
    /** Microsoft Azure. */
    AZURE: 'azure',
    /** Google Cloud Platform. */
    GCP: 'gcp',
};
var CloudPlatformValues = {
    /** Alibaba Cloud Elastic Compute Service. */
    ALIBABA_CLOUD_ECS: 'alibaba_cloud_ecs',
    /** Alibaba Cloud Function Compute. */
    ALIBABA_CLOUD_FC: 'alibaba_cloud_fc',
    /** AWS Elastic Compute Cloud. */
    AWS_EC2: 'aws_ec2',
    /** AWS Elastic Container Service. */
    AWS_ECS: 'aws_ecs',
    /** AWS Elastic Kubernetes Service. */
    AWS_EKS: 'aws_eks',
    /** AWS Lambda. */
    AWS_LAMBDA: 'aws_lambda',
    /** AWS Elastic Beanstalk. */
    AWS_ELASTIC_BEANSTALK: 'aws_elastic_beanstalk',
    /** Azure Virtual Machines. */
    AZURE_VM: 'azure_vm',
    /** Azure Container Instances. */
    AZURE_CONTAINER_INSTANCES: 'azure_container_instances',
    /** Azure Kubernetes Service. */
    AZURE_AKS: 'azure_aks',
    /** Azure Functions. */
    AZURE_FUNCTIONS: 'azure_functions',
    /** Azure App Service. */
    AZURE_APP_SERVICE: 'azure_app_service',
    /** Google Cloud Compute Engine (GCE). */
    GCP_COMPUTE_ENGINE: 'gcp_compute_engine',
    /** Google Cloud Run. */
    GCP_CLOUD_RUN: 'gcp_cloud_run',
    /** Google Cloud Kubernetes Engine (GKE). */
    GCP_KUBERNETES_ENGINE: 'gcp_kubernetes_engine',
    /** Google Cloud Functions (GCF). */
    GCP_CLOUD_FUNCTIONS: 'gcp_cloud_functions',
    /** Google Cloud App Engine (GAE). */
    GCP_APP_ENGINE: 'gcp_app_engine',
};
var AwsEcsLaunchtypeValues = {
    /** ec2. */
    EC2: 'ec2',
    /** fargate. */
    FARGATE: 'fargate',
};
var HostArchValues = {
    /** AMD64. */
    AMD64: 'amd64',
    /** ARM32. */
    ARM32: 'arm32',
    /** ARM64. */
    ARM64: 'arm64',
    /** Itanium. */
    IA64: 'ia64',
    /** 32-bit PowerPC. */
    PPC32: 'ppc32',
    /** 64-bit PowerPC. */
    PPC64: 'ppc64',
    /** 32-bit x86. */
    X86: 'x86',
};
var OsTypeValues = {
    /** Microsoft Windows. */
    WINDOWS: 'windows',
    /** Linux. */
    LINUX: 'linux',
    /** Apple Darwin. */
    DARWIN: 'darwin',
    /** FreeBSD. */
    FREEBSD: 'freebsd',
    /** NetBSD. */
    NETBSD: 'netbsd',
    /** OpenBSD. */
    OPENBSD: 'openbsd',
    /** DragonFly BSD. */
    DRAGONFLYBSD: 'dragonflybsd',
    /** HP-UX (Hewlett Packard Unix). */
    HPUX: 'hpux',
    /** AIX (Advanced Interactive eXecutive). */
    AIX: 'aix',
    /** Oracle Solaris. */
    SOLARIS: 'solaris',
    /** IBM z/OS. */
    Z_OS: 'z_os',
};
var TelemetrySdkLanguageValues = {
    /** cpp. */
    CPP: 'cpp',
    /** dotnet. */
    DOTNET: 'dotnet',
    /** erlang. */
    ERLANG: 'erlang',
    /** go. */
    GO: 'go',
    /** java. */
    JAVA: 'java',
    /** nodejs. */
    NODEJS: 'nodejs',
    /** php. */
    PHP: 'php',
    /** python. */
    PYTHON: 'python',
    /** ruby. */
    RUBY: 'ruby',
    /** webjs. */
    WEBJS: 'webjs',
};
//# sourceMappingURL=SemanticResourceAttributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsEcsLaunchtypeValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.AwsEcsLaunchtypeValues),
/* harmony export */   "CloudPlatformValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.CloudPlatformValues),
/* harmony export */   "CloudProviderValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.CloudProviderValues),
/* harmony export */   "HostArchValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.HostArchValues),
/* harmony export */   "OsTypeValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.OsTypeValues),
/* harmony export */   "SemanticResourceAttributes": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.SemanticResourceAttributes),
/* harmony export */   "TelemetrySdkLanguageValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.TelemetrySdkLanguageValues)
/* harmony export */ });
/* harmony import */ var _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbCassandraConsistencyLevelValues": () => (/* binding */ DbCassandraConsistencyLevelValues),
/* harmony export */   "DbSystemValues": () => (/* binding */ DbSystemValues),
/* harmony export */   "FaasDocumentOperationValues": () => (/* binding */ FaasDocumentOperationValues),
/* harmony export */   "FaasInvokedProviderValues": () => (/* binding */ FaasInvokedProviderValues),
/* harmony export */   "FaasTriggerValues": () => (/* binding */ FaasTriggerValues),
/* harmony export */   "HttpFlavorValues": () => (/* binding */ HttpFlavorValues),
/* harmony export */   "MessageTypeValues": () => (/* binding */ MessageTypeValues),
/* harmony export */   "MessagingDestinationKindValues": () => (/* binding */ MessagingDestinationKindValues),
/* harmony export */   "MessagingOperationValues": () => (/* binding */ MessagingOperationValues),
/* harmony export */   "NetHostConnectionSubtypeValues": () => (/* binding */ NetHostConnectionSubtypeValues),
/* harmony export */   "NetHostConnectionTypeValues": () => (/* binding */ NetHostConnectionTypeValues),
/* harmony export */   "NetTransportValues": () => (/* binding */ NetTransportValues),
/* harmony export */   "RpcGrpcStatusCodeValues": () => (/* binding */ RpcGrpcStatusCodeValues),
/* harmony export */   "SemanticAttributes": () => (/* binding */ SemanticAttributes)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
var SemanticAttributes = {
    /**
    * The full invoked ARN as provided on the `Context` passed to the function (`Lambda-Runtime-Invoked-Function-Arn` header on the `/runtime/invocation/next` applicable).
    *
    * Note: This may be different from `faas.id` if an alias is involved.
    */
    AWS_LAMBDA_INVOKED_ARN: 'aws.lambda.invoked_arn',
    /**
    * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
    */
    DB_SYSTEM: 'db.system',
    /**
    * The connection string used to connect to the database. It is recommended to remove embedded credentials.
    */
    DB_CONNECTION_STRING: 'db.connection_string',
    /**
    * Username for accessing the database.
    */
    DB_USER: 'db.user',
    /**
    * The fully-qualified class name of the [Java Database Connectivity (JDBC)](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) driver used to connect.
    */
    DB_JDBC_DRIVER_CLASSNAME: 'db.jdbc.driver_classname',
    /**
    * If no [tech-specific attribute](#call-level-attributes-for-specific-technologies) is defined, this attribute is used to report the name of the database being accessed. For commands that switch the database, this should be set to the target database (even if the command fails).
    *
    * Note: In some SQL databases, the database name to be used is called &#34;schema name&#34;.
    */
    DB_NAME: 'db.name',
    /**
    * The database statement being executed.
    *
    * Note: The value may be sanitized to exclude sensitive information.
    */
    DB_STATEMENT: 'db.statement',
    /**
    * The name of the operation being executed, e.g. the [MongoDB command name](https://docs.mongodb.com/manual/reference/command/#database-operations) such as `findAndModify`, or the SQL keyword.
    *
    * Note: When setting this to an SQL keyword, it is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if the operation name is provided by the library being instrumented. If the SQL statement has an ambiguous operation, or performs more than one operation, this value may be omitted.
    */
    DB_OPERATION: 'db.operation',
    /**
    * The Microsoft SQL Server [instance name](https://docs.microsoft.com/en-us/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver15) connecting to. This name is used to determine the port of a named instance.
    *
    * Note: If setting a `db.mssql.instance_name`, `net.peer.port` is no longer required (but still recommended if non-standard).
    */
    DB_MSSQL_INSTANCE_NAME: 'db.mssql.instance_name',
    /**
    * The name of the keyspace being accessed. To be used instead of the generic `db.name` attribute.
    */
    DB_CASSANDRA_KEYSPACE: 'db.cassandra.keyspace',
    /**
    * The fetch size used for paging, i.e. how many rows will be returned at once.
    */
    DB_CASSANDRA_PAGE_SIZE: 'db.cassandra.page_size',
    /**
    * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
    */
    DB_CASSANDRA_CONSISTENCY_LEVEL: 'db.cassandra.consistency_level',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: This mirrors the db.sql.table attribute but references cassandra rather than sql. It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */
    DB_CASSANDRA_TABLE: 'db.cassandra.table',
    /**
    * Whether or not the query is idempotent.
    */
    DB_CASSANDRA_IDEMPOTENCE: 'db.cassandra.idempotence',
    /**
    * The number of times a query was speculatively executed. Not set or `0` if the query was not executed speculatively.
    */
    DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: 'db.cassandra.speculative_execution_count',
    /**
    * The ID of the coordinating node for a query.
    */
    DB_CASSANDRA_COORDINATOR_ID: 'db.cassandra.coordinator.id',
    /**
    * The data center of the coordinating node for a query.
    */
    DB_CASSANDRA_COORDINATOR_DC: 'db.cassandra.coordinator.dc',
    /**
    * The [HBase namespace](https://hbase.apache.org/book.html#_namespace) being accessed. To be used instead of the generic `db.name` attribute.
    */
    DB_HBASE_NAMESPACE: 'db.hbase.namespace',
    /**
    * The index of the database being accessed as used in the [`SELECT` command](https://redis.io/commands/select), provided as an integer. To be used instead of the generic `db.name` attribute.
    */
    DB_REDIS_DATABASE_INDEX: 'db.redis.database_index',
    /**
    * The collection being accessed within the database stated in `db.name`.
    */
    DB_MONGODB_COLLECTION: 'db.mongodb.collection',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */
    DB_SQL_TABLE: 'db.sql.table',
    /**
    * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
    */
    EXCEPTION_TYPE: 'exception.type',
    /**
    * The exception message.
    */
    EXCEPTION_MESSAGE: 'exception.message',
    /**
    * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
    */
    EXCEPTION_STACKTRACE: 'exception.stacktrace',
    /**
    * SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
    *
    * Note: An exception is considered to have escaped (or left) the scope of a span,
  if that span is ended while the exception is still logically &#34;in flight&#34;.
  This may be actually &#34;in flight&#34; in some languages (e.g. if the exception
  is passed to a Context manager&#39;s `__exit__` method in Python) but will
  usually be caught at the point of recording the exception in most languages.
  
  It is usually not possible to determine at the point where an exception is thrown
  whether it will escape the scope of a span.
  However, it is trivial to know that an exception
  will escape, if one checks for an active exception just before ending the span,
  as done in the [example above](#exception-end-example).
  
  It follows that an exception may still escape the scope of the span
  even if the `exception.escaped` attribute was not set or set to false,
  since the event might have been recorded at a time where it was not
  clear whether the exception will escape.
    */
    EXCEPTION_ESCAPED: 'exception.escaped',
    /**
    * Type of the trigger on which the function is executed.
    */
    FAAS_TRIGGER: 'faas.trigger',
    /**
    * The execution ID of the current function execution.
    */
    FAAS_EXECUTION: 'faas.execution',
    /**
    * The name of the source on which the triggering operation was performed. For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
    */
    FAAS_DOCUMENT_COLLECTION: 'faas.document.collection',
    /**
    * Describes the type of the operation that was performed on the data.
    */
    FAAS_DOCUMENT_OPERATION: 'faas.document.operation',
    /**
    * A string containing the time when the data was accessed in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */
    FAAS_DOCUMENT_TIME: 'faas.document.time',
    /**
    * The document name/table subjected to the operation. For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
    */
    FAAS_DOCUMENT_NAME: 'faas.document.name',
    /**
    * A string containing the function invocation time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */
    FAAS_TIME: 'faas.time',
    /**
    * A string containing the schedule period as [Cron Expression](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm).
    */
    FAAS_CRON: 'faas.cron',
    /**
    * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
    */
    FAAS_COLDSTART: 'faas.coldstart',
    /**
    * The name of the invoked function.
    *
    * Note: SHOULD be equal to the `faas.name` resource attribute of the invoked function.
    */
    FAAS_INVOKED_NAME: 'faas.invoked_name',
    /**
    * The cloud provider of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
    */
    FAAS_INVOKED_PROVIDER: 'faas.invoked_provider',
    /**
    * The cloud region of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.region` resource attribute of the invoked function.
    */
    FAAS_INVOKED_REGION: 'faas.invoked_region',
    /**
    * Transport protocol used. See note below.
    */
    NET_TRANSPORT: 'net.transport',
    /**
    * Remote address of the peer (dotted decimal for IPv4 or [RFC5952](https://tools.ietf.org/html/rfc5952) for IPv6).
    */
    NET_PEER_IP: 'net.peer.ip',
    /**
    * Remote port number.
    */
    NET_PEER_PORT: 'net.peer.port',
    /**
    * Remote hostname or similar, see note below.
    */
    NET_PEER_NAME: 'net.peer.name',
    /**
    * Like `net.peer.ip` but for the host IP. Useful in case of a multi-IP host.
    */
    NET_HOST_IP: 'net.host.ip',
    /**
    * Like `net.peer.port` but for the host port.
    */
    NET_HOST_PORT: 'net.host.port',
    /**
    * Local hostname or similar, see note below.
    */
    NET_HOST_NAME: 'net.host.name',
    /**
    * The internet connection type currently being used by the host.
    */
    NET_HOST_CONNECTION_TYPE: 'net.host.connection.type',
    /**
    * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
    */
    NET_HOST_CONNECTION_SUBTYPE: 'net.host.connection.subtype',
    /**
    * The name of the mobile carrier.
    */
    NET_HOST_CARRIER_NAME: 'net.host.carrier.name',
    /**
    * The mobile carrier country code.
    */
    NET_HOST_CARRIER_MCC: 'net.host.carrier.mcc',
    /**
    * The mobile carrier network code.
    */
    NET_HOST_CARRIER_MNC: 'net.host.carrier.mnc',
    /**
    * The ISO 3166-1 alpha-2 2-character country code associated with the mobile carrier network.
    */
    NET_HOST_CARRIER_ICC: 'net.host.carrier.icc',
    /**
    * The [`service.name`](../../resource/semantic_conventions/README.md#service) of the remote service. SHOULD be equal to the actual `service.name` resource attribute of the remote service if any.
    */
    PEER_SERVICE: 'peer.service',
    /**
    * Username or client_id extracted from the access token or [Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) header in the inbound request from outside the system.
    */
    ENDUSER_ID: 'enduser.id',
    /**
    * Actual/assumed role the client is making the request under extracted from token or application security context.
    */
    ENDUSER_ROLE: 'enduser.role',
    /**
    * Scopes or granted authorities the client currently possesses extracted from token or application security context. The value would come from the scope associated with an [OAuth 2.0 Access Token](https://tools.ietf.org/html/rfc6749#section-3.3) or an attribute value in a [SAML 2.0 Assertion](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).
    */
    ENDUSER_SCOPE: 'enduser.scope',
    /**
    * Current &#34;managed&#34; thread ID (as opposed to OS thread ID).
    */
    THREAD_ID: 'thread.id',
    /**
    * Current thread name.
    */
    THREAD_NAME: 'thread.name',
    /**
    * The method or function name, or equivalent (usually rightmost part of the code unit&#39;s name).
    */
    CODE_FUNCTION: 'code.function',
    /**
    * The &#34;namespace&#34; within which `code.function` is defined. Usually the qualified class or module name, such that `code.namespace` + some separator + `code.function` form a unique identifier for the code unit.
    */
    CODE_NAMESPACE: 'code.namespace',
    /**
    * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
    */
    CODE_FILEPATH: 'code.filepath',
    /**
    * The line number in `code.filepath` best representing the operation. It SHOULD point within the code unit named in `code.function`.
    */
    CODE_LINENO: 'code.lineno',
    /**
    * HTTP request method.
    */
    HTTP_METHOD: 'http.method',
    /**
    * Full HTTP request URL in the form `scheme://host[:port]/path?query[#fragment]`. Usually the fragment is not transmitted over HTTP, but if it is known, it should be included nevertheless.
    *
    * Note: `http.url` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case the attribute&#39;s value should be `https://www.example.com/`.
    */
    HTTP_URL: 'http.url',
    /**
    * The full request target as passed in a HTTP request line or equivalent.
    */
    HTTP_TARGET: 'http.target',
    /**
    * The value of the [HTTP host header](https://tools.ietf.org/html/rfc7230#section-5.4). An empty Host header should also be reported, see note.
    *
    * Note: When the header is present but empty the attribute SHOULD be set to the empty string. Note that this is a valid situation that is expected in certain cases, according the aforementioned [section of RFC 7230](https://tools.ietf.org/html/rfc7230#section-5.4). When the header is not set the attribute MUST NOT be set.
    */
    HTTP_HOST: 'http.host',
    /**
    * The URI scheme identifying the used protocol.
    */
    HTTP_SCHEME: 'http.scheme',
    /**
    * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
    */
    HTTP_STATUS_CODE: 'http.status_code',
    /**
    * Kind of HTTP protocol used.
    *
    * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
    */
    HTTP_FLAVOR: 'http.flavor',
    /**
    * Value of the [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) header sent by the client.
    */
    HTTP_USER_AGENT: 'http.user_agent',
    /**
    * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */
    HTTP_REQUEST_CONTENT_LENGTH: 'http.request_content_length',
    /**
    * The size of the uncompressed request payload body after transport decoding. Not set if transport encoding not used.
    */
    HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: 'http.request_content_length_uncompressed',
    /**
    * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */
    HTTP_RESPONSE_CONTENT_LENGTH: 'http.response_content_length',
    /**
    * The size of the uncompressed response payload body after transport decoding. Not set if transport encoding not used.
    */
    HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: 'http.response_content_length_uncompressed',
    /**
    * The primary server name of the matched virtual host. This should be obtained via configuration. If no such configuration can be obtained, this attribute MUST NOT be set ( `net.host.name` should be used instead).
    *
    * Note: `http.url` is usually not readily available on the server side but would have to be assembled in a cumbersome and sometimes lossy process from other information (see e.g. open-telemetry/opentelemetry-python/pull/148). It is thus preferred to supply the raw data that is available.
    */
    HTTP_SERVER_NAME: 'http.server_name',
    /**
    * The matched route (path template).
    */
    HTTP_ROUTE: 'http.route',
    /**
    * The IP address of the original client behind all proxies, if known (e.g. from [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)).
    *
    * Note: This is not necessarily the same as `net.peer.ip`, which would
  identify the network-level peer, which may be a proxy.
  
  This attribute should be set when a source of information different
  from the one used for `net.peer.ip`, is available even if that other
  source just confirms the same value as `net.peer.ip`.
  Rationale: For `net.peer.ip`, one typically does not know if it
  comes from a proxy, reverse proxy, or the actual client. Setting
  `http.client_ip` when it&#39;s the same as `net.peer.ip` means that
  one is at least somewhat confident that the address is not that of
  the closest proxy.
    */
    HTTP_CLIENT_IP: 'http.client_ip',
    /**
    * The keys in the `RequestItems` object field.
    */
    AWS_DYNAMODB_TABLE_NAMES: 'aws.dynamodb.table_names',
    /**
    * The JSON-serialized value of each item in the `ConsumedCapacity` response field.
    */
    AWS_DYNAMODB_CONSUMED_CAPACITY: 'aws.dynamodb.consumed_capacity',
    /**
    * The JSON-serialized value of the `ItemCollectionMetrics` response field.
    */
    AWS_DYNAMODB_ITEM_COLLECTION_METRICS: 'aws.dynamodb.item_collection_metrics',
    /**
    * The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
    */
    AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: 'aws.dynamodb.provisioned_read_capacity',
    /**
    * The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
    */
    AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: 'aws.dynamodb.provisioned_write_capacity',
    /**
    * The value of the `ConsistentRead` request parameter.
    */
    AWS_DYNAMODB_CONSISTENT_READ: 'aws.dynamodb.consistent_read',
    /**
    * The value of the `ProjectionExpression` request parameter.
    */
    AWS_DYNAMODB_PROJECTION: 'aws.dynamodb.projection',
    /**
    * The value of the `Limit` request parameter.
    */
    AWS_DYNAMODB_LIMIT: 'aws.dynamodb.limit',
    /**
    * The value of the `AttributesToGet` request parameter.
    */
    AWS_DYNAMODB_ATTRIBUTES_TO_GET: 'aws.dynamodb.attributes_to_get',
    /**
    * The value of the `IndexName` request parameter.
    */
    AWS_DYNAMODB_INDEX_NAME: 'aws.dynamodb.index_name',
    /**
    * The value of the `Select` request parameter.
    */
    AWS_DYNAMODB_SELECT: 'aws.dynamodb.select',
    /**
    * The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.
    */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: 'aws.dynamodb.global_secondary_indexes',
    /**
    * The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
    */
    AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: 'aws.dynamodb.local_secondary_indexes',
    /**
    * The value of the `ExclusiveStartTableName` request parameter.
    */
    AWS_DYNAMODB_EXCLUSIVE_START_TABLE: 'aws.dynamodb.exclusive_start_table',
    /**
    * The the number of items in the `TableNames` response parameter.
    */
    AWS_DYNAMODB_TABLE_COUNT: 'aws.dynamodb.table_count',
    /**
    * The value of the `ScanIndexForward` request parameter.
    */
    AWS_DYNAMODB_SCAN_FORWARD: 'aws.dynamodb.scan_forward',
    /**
    * The value of the `Segment` request parameter.
    */
    AWS_DYNAMODB_SEGMENT: 'aws.dynamodb.segment',
    /**
    * The value of the `TotalSegments` request parameter.
    */
    AWS_DYNAMODB_TOTAL_SEGMENTS: 'aws.dynamodb.total_segments',
    /**
    * The value of the `Count` response parameter.
    */
    AWS_DYNAMODB_COUNT: 'aws.dynamodb.count',
    /**
    * The value of the `ScannedCount` response parameter.
    */
    AWS_DYNAMODB_SCANNED_COUNT: 'aws.dynamodb.scanned_count',
    /**
    * The JSON-serialized value of each item in the `AttributeDefinitions` request field.
    */
    AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: 'aws.dynamodb.attribute_definitions',
    /**
    * The JSON-serialized value of each item in the the `GlobalSecondaryIndexUpdates` request field.
    */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: 'aws.dynamodb.global_secondary_index_updates',
    /**
    * A string identifying the messaging system.
    */
    MESSAGING_SYSTEM: 'messaging.system',
    /**
    * The message destination name. This might be equal to the span name but is required nevertheless.
    */
    MESSAGING_DESTINATION: 'messaging.destination',
    /**
    * The kind of message destination.
    */
    MESSAGING_DESTINATION_KIND: 'messaging.destination_kind',
    /**
    * A boolean that is true if the message destination is temporary.
    */
    MESSAGING_TEMP_DESTINATION: 'messaging.temp_destination',
    /**
    * The name of the transport protocol.
    */
    MESSAGING_PROTOCOL: 'messaging.protocol',
    /**
    * The version of the transport protocol.
    */
    MESSAGING_PROTOCOL_VERSION: 'messaging.protocol_version',
    /**
    * Connection string.
    */
    MESSAGING_URL: 'messaging.url',
    /**
    * A value used by the messaging system as an identifier for the message, represented as a string.
    */
    MESSAGING_MESSAGE_ID: 'messaging.message_id',
    /**
    * The [conversation ID](#conversations) identifying the conversation to which the message belongs, represented as a string. Sometimes called &#34;Correlation ID&#34;.
    */
    MESSAGING_CONVERSATION_ID: 'messaging.conversation_id',
    /**
    * The (uncompressed) size of the message payload in bytes. Also use this attribute if it is unknown whether the compressed or uncompressed payload size is reported.
    */
    MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: 'messaging.message_payload_size_bytes',
    /**
    * The compressed size of the message payload in bytes.
    */
    MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: 'messaging.message_payload_compressed_size_bytes',
    /**
    * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
    */
    MESSAGING_OPERATION: 'messaging.operation',
    /**
    * The identifier for the consumer receiving a message. For Kafka, set it to `{messaging.kafka.consumer_group} - {messaging.kafka.client_id}`, if both are present, or only `messaging.kafka.consumer_group`. For brokers, such as RabbitMQ and Artemis, set it to the `client_id` of the client consuming the message.
    */
    MESSAGING_CONSUMER_ID: 'messaging.consumer_id',
    /**
    * RabbitMQ message routing key.
    */
    MESSAGING_RABBITMQ_ROUTING_KEY: 'messaging.rabbitmq.routing_key',
    /**
    * Message keys in Kafka are used for grouping alike messages to ensure they&#39;re processed on the same partition. They differ from `messaging.message_id` in that they&#39;re not unique. If the key is `null`, the attribute MUST NOT be set.
    *
    * Note: If the key type is not string, it&#39;s string representation has to be supplied for the attribute. If the key has no unambiguous, canonical string form, don&#39;t include its value.
    */
    MESSAGING_KAFKA_MESSAGE_KEY: 'messaging.kafka.message_key',
    /**
    * Name of the Kafka Consumer Group that is handling the message. Only applies to consumers, not producers.
    */
    MESSAGING_KAFKA_CONSUMER_GROUP: 'messaging.kafka.consumer_group',
    /**
    * Client Id for the Consumer or Producer that is handling the message.
    */
    MESSAGING_KAFKA_CLIENT_ID: 'messaging.kafka.client_id',
    /**
    * Partition the message is sent to.
    */
    MESSAGING_KAFKA_PARTITION: 'messaging.kafka.partition',
    /**
    * A boolean that is true if the message is a tombstone.
    */
    MESSAGING_KAFKA_TOMBSTONE: 'messaging.kafka.tombstone',
    /**
    * A string identifying the remoting system.
    */
    RPC_SYSTEM: 'rpc.system',
    /**
    * The full (logical) name of the service being called, including its package name, if applicable.
    *
    * Note: This is the logical name of the service from the RPC interface perspective, which can be different from the name of any implementing class. The `code.namespace` attribute may be used to store the latter (despite the attribute name, it may include a class name; e.g., class with method actually executing the call on the server side, RPC client stub class on the client side).
    */
    RPC_SERVICE: 'rpc.service',
    /**
    * The name of the (logical) method being called, must be equal to the $method part in the span name.
    *
    * Note: This is the logical name of the method from the RPC interface perspective, which can be different from the name of any implementing method/function. The `code.function` attribute may be used to store the latter (e.g., method actually executing the call on the server side, RPC client stub method on the client side).
    */
    RPC_METHOD: 'rpc.method',
    /**
    * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
    */
    RPC_GRPC_STATUS_CODE: 'rpc.grpc.status_code',
    /**
    * Protocol version as in `jsonrpc` property of request/response. Since JSON-RPC 1.0 does not specify this, the value can be omitted.
    */
    RPC_JSONRPC_VERSION: 'rpc.jsonrpc.version',
    /**
    * `id` property of request or response. Since protocol allows id to be int, string, `null` or missing (for notifications), value is expected to be cast to string for simplicity. Use empty string in case of `null` value. Omit entirely if this is a notification.
    */
    RPC_JSONRPC_REQUEST_ID: 'rpc.jsonrpc.request_id',
    /**
    * `error.code` property of response if it is an error response.
    */
    RPC_JSONRPC_ERROR_CODE: 'rpc.jsonrpc.error_code',
    /**
    * `error.message` property of response if it is an error response.
    */
    RPC_JSONRPC_ERROR_MESSAGE: 'rpc.jsonrpc.error_message',
    /**
    * Whether this is a received or sent message.
    */
    MESSAGE_TYPE: 'message.type',
    /**
    * MUST be calculated as two different counters starting from `1` one for sent messages and one for received message.
    *
    * Note: This way we guarantee that the values will be consistent between different implementations.
    */
    MESSAGE_ID: 'message.id',
    /**
    * Compressed size of the message in bytes.
    */
    MESSAGE_COMPRESSED_SIZE: 'message.compressed_size',
    /**
    * Uncompressed size of the message in bytes.
    */
    MESSAGE_UNCOMPRESSED_SIZE: 'message.uncompressed_size',
};
var DbSystemValues = {
    /** Some other SQL database. Fallback only. See notes. */
    OTHER_SQL: 'other_sql',
    /** Microsoft SQL Server. */
    MSSQL: 'mssql',
    /** MySQL. */
    MYSQL: 'mysql',
    /** Oracle Database. */
    ORACLE: 'oracle',
    /** IBM Db2. */
    DB2: 'db2',
    /** PostgreSQL. */
    POSTGRESQL: 'postgresql',
    /** Amazon Redshift. */
    REDSHIFT: 'redshift',
    /** Apache Hive. */
    HIVE: 'hive',
    /** Cloudscape. */
    CLOUDSCAPE: 'cloudscape',
    /** HyperSQL DataBase. */
    HSQLDB: 'hsqldb',
    /** Progress Database. */
    PROGRESS: 'progress',
    /** SAP MaxDB. */
    MAXDB: 'maxdb',
    /** SAP HANA. */
    HANADB: 'hanadb',
    /** Ingres. */
    INGRES: 'ingres',
    /** FirstSQL. */
    FIRSTSQL: 'firstsql',
    /** EnterpriseDB. */
    EDB: 'edb',
    /** InterSystems Caché. */
    CACHE: 'cache',
    /** Adabas (Adaptable Database System). */
    ADABAS: 'adabas',
    /** Firebird. */
    FIREBIRD: 'firebird',
    /** Apache Derby. */
    DERBY: 'derby',
    /** FileMaker. */
    FILEMAKER: 'filemaker',
    /** Informix. */
    INFORMIX: 'informix',
    /** InstantDB. */
    INSTANTDB: 'instantdb',
    /** InterBase. */
    INTERBASE: 'interbase',
    /** MariaDB. */
    MARIADB: 'mariadb',
    /** Netezza. */
    NETEZZA: 'netezza',
    /** Pervasive PSQL. */
    PERVASIVE: 'pervasive',
    /** PointBase. */
    POINTBASE: 'pointbase',
    /** SQLite. */
    SQLITE: 'sqlite',
    /** Sybase. */
    SYBASE: 'sybase',
    /** Teradata. */
    TERADATA: 'teradata',
    /** Vertica. */
    VERTICA: 'vertica',
    /** H2. */
    H2: 'h2',
    /** ColdFusion IMQ. */
    COLDFUSION: 'coldfusion',
    /** Apache Cassandra. */
    CASSANDRA: 'cassandra',
    /** Apache HBase. */
    HBASE: 'hbase',
    /** MongoDB. */
    MONGODB: 'mongodb',
    /** Redis. */
    REDIS: 'redis',
    /** Couchbase. */
    COUCHBASE: 'couchbase',
    /** CouchDB. */
    COUCHDB: 'couchdb',
    /** Microsoft Azure Cosmos DB. */
    COSMOSDB: 'cosmosdb',
    /** Amazon DynamoDB. */
    DYNAMODB: 'dynamodb',
    /** Neo4j. */
    NEO4J: 'neo4j',
    /** Apache Geode. */
    GEODE: 'geode',
    /** Elasticsearch. */
    ELASTICSEARCH: 'elasticsearch',
    /** Memcached. */
    MEMCACHED: 'memcached',
    /** CockroachDB. */
    COCKROACHDB: 'cockroachdb',
};
var DbCassandraConsistencyLevelValues = {
    /** all. */
    ALL: 'all',
    /** each_quorum. */
    EACH_QUORUM: 'each_quorum',
    /** quorum. */
    QUORUM: 'quorum',
    /** local_quorum. */
    LOCAL_QUORUM: 'local_quorum',
    /** one. */
    ONE: 'one',
    /** two. */
    TWO: 'two',
    /** three. */
    THREE: 'three',
    /** local_one. */
    LOCAL_ONE: 'local_one',
    /** any. */
    ANY: 'any',
    /** serial. */
    SERIAL: 'serial',
    /** local_serial. */
    LOCAL_SERIAL: 'local_serial',
};
var FaasTriggerValues = {
    /** A response to some data source operation such as a database or filesystem read/write. */
    DATASOURCE: 'datasource',
    /** To provide an answer to an inbound HTTP request. */
    HTTP: 'http',
    /** A function is set to be executed when messages are sent to a messaging system. */
    PUBSUB: 'pubsub',
    /** A function is scheduled to be executed regularly. */
    TIMER: 'timer',
    /** If none of the others apply. */
    OTHER: 'other',
};
var FaasDocumentOperationValues = {
    /** When a new object is created. */
    INSERT: 'insert',
    /** When an object is modified. */
    EDIT: 'edit',
    /** When an object is deleted. */
    DELETE: 'delete',
};
var FaasInvokedProviderValues = {
    /** Alibaba Cloud. */
    ALIBABA_CLOUD: 'alibaba_cloud',
    /** Amazon Web Services. */
    AWS: 'aws',
    /** Microsoft Azure. */
    AZURE: 'azure',
    /** Google Cloud Platform. */
    GCP: 'gcp',
};
var NetTransportValues = {
    /** ip_tcp. */
    IP_TCP: 'ip_tcp',
    /** ip_udp. */
    IP_UDP: 'ip_udp',
    /** Another IP-based protocol. */
    IP: 'ip',
    /** Unix Domain socket. See below. */
    UNIX: 'unix',
    /** Named or anonymous pipe. See note below. */
    PIPE: 'pipe',
    /** In-process communication. */
    INPROC: 'inproc',
    /** Something else (non IP-based). */
    OTHER: 'other',
};
var NetHostConnectionTypeValues = {
    /** wifi. */
    WIFI: 'wifi',
    /** wired. */
    WIRED: 'wired',
    /** cell. */
    CELL: 'cell',
    /** unavailable. */
    UNAVAILABLE: 'unavailable',
    /** unknown. */
    UNKNOWN: 'unknown',
};
var NetHostConnectionSubtypeValues = {
    /** GPRS. */
    GPRS: 'gprs',
    /** EDGE. */
    EDGE: 'edge',
    /** UMTS. */
    UMTS: 'umts',
    /** CDMA. */
    CDMA: 'cdma',
    /** EVDO Rel. 0. */
    EVDO_0: 'evdo_0',
    /** EVDO Rev. A. */
    EVDO_A: 'evdo_a',
    /** CDMA2000 1XRTT. */
    CDMA2000_1XRTT: 'cdma2000_1xrtt',
    /** HSDPA. */
    HSDPA: 'hsdpa',
    /** HSUPA. */
    HSUPA: 'hsupa',
    /** HSPA. */
    HSPA: 'hspa',
    /** IDEN. */
    IDEN: 'iden',
    /** EVDO Rev. B. */
    EVDO_B: 'evdo_b',
    /** LTE. */
    LTE: 'lte',
    /** EHRPD. */
    EHRPD: 'ehrpd',
    /** HSPAP. */
    HSPAP: 'hspap',
    /** GSM. */
    GSM: 'gsm',
    /** TD-SCDMA. */
    TD_SCDMA: 'td_scdma',
    /** IWLAN. */
    IWLAN: 'iwlan',
    /** 5G NR (New Radio). */
    NR: 'nr',
    /** 5G NRNSA (New Radio Non-Standalone). */
    NRNSA: 'nrnsa',
    /** LTE CA. */
    LTE_CA: 'lte_ca',
};
var HttpFlavorValues = {
    /** HTTP 1.0. */
    HTTP_1_0: '1.0',
    /** HTTP 1.1. */
    HTTP_1_1: '1.1',
    /** HTTP 2. */
    HTTP_2_0: '2.0',
    /** SPDY protocol. */
    SPDY: 'SPDY',
    /** QUIC protocol. */
    QUIC: 'QUIC',
};
var MessagingDestinationKindValues = {
    /** A message sent to a queue. */
    QUEUE: 'queue',
    /** A message sent to a topic. */
    TOPIC: 'topic',
};
var MessagingOperationValues = {
    /** receive. */
    RECEIVE: 'receive',
    /** process. */
    PROCESS: 'process',
};
var RpcGrpcStatusCodeValues = {
    /** OK. */
    OK: 0,
    /** CANCELLED. */
    CANCELLED: 1,
    /** UNKNOWN. */
    UNKNOWN: 2,
    /** INVALID_ARGUMENT. */
    INVALID_ARGUMENT: 3,
    /** DEADLINE_EXCEEDED. */
    DEADLINE_EXCEEDED: 4,
    /** NOT_FOUND. */
    NOT_FOUND: 5,
    /** ALREADY_EXISTS. */
    ALREADY_EXISTS: 6,
    /** PERMISSION_DENIED. */
    PERMISSION_DENIED: 7,
    /** RESOURCE_EXHAUSTED. */
    RESOURCE_EXHAUSTED: 8,
    /** FAILED_PRECONDITION. */
    FAILED_PRECONDITION: 9,
    /** ABORTED. */
    ABORTED: 10,
    /** OUT_OF_RANGE. */
    OUT_OF_RANGE: 11,
    /** UNIMPLEMENTED. */
    UNIMPLEMENTED: 12,
    /** INTERNAL. */
    INTERNAL: 13,
    /** UNAVAILABLE. */
    UNAVAILABLE: 14,
    /** DATA_LOSS. */
    DATA_LOSS: 15,
    /** UNAUTHENTICATED. */
    UNAUTHENTICATED: 16,
};
var MessageTypeValues = {
    /** sent. */
    SENT: 'SENT',
    /** received. */
    RECEIVED: 'RECEIVED',
};
//# sourceMappingURL=SemanticAttributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbCassandraConsistencyLevelValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.DbCassandraConsistencyLevelValues),
/* harmony export */   "DbSystemValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.DbSystemValues),
/* harmony export */   "FaasDocumentOperationValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.FaasDocumentOperationValues),
/* harmony export */   "FaasInvokedProviderValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.FaasInvokedProviderValues),
/* harmony export */   "FaasTriggerValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.FaasTriggerValues),
/* harmony export */   "HttpFlavorValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.HttpFlavorValues),
/* harmony export */   "MessageTypeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.MessageTypeValues),
/* harmony export */   "MessagingDestinationKindValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.MessagingDestinationKindValues),
/* harmony export */   "MessagingOperationValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.MessagingOperationValues),
/* harmony export */   "NetHostConnectionSubtypeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionSubtypeValues),
/* harmony export */   "NetHostConnectionTypeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionTypeValues),
/* harmony export */   "NetTransportValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.NetTransportValues),
/* harmony export */   "RpcGrpcStatusCodeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.RpcGrpcStatusCodeValues),
/* harmony export */   "SemanticAttributes": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.SemanticAttributes)
/* harmony export */ });
/* harmony import */ var _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRDtBQUM1QztBQUNQLGVBQWUsNERBQWM7QUFDN0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQSxnQkFBZ0IseURBQWU7QUFDL0I7QUFDQTs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyRTtBQUNyQjtBQUN0RCxzQ0FBc0MsR0FBRztBQUN6QyxvQ0FBb0MsR0FBRztBQUNoQztBQUNQLDREQUE0RCxvRUFBZTtBQUMzRTtBQUNPO0FBQ1AseURBQXlELG1FQUFjO0FBQ3ZFO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDLHlCQUF5QixtQkFBbUI7QUFDNUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUIsd0JBQXdCO0FBQzlEO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWTtBQUM3QztBQUNPO0FBQ1AsZUFBZSwrREFBZ0I7QUFDL0I7QUFDQTs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDekM7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQ2pDOzs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDVTtBQUNWOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDVTtBQUNWOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDVTtBQUNWOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDVTtBQUNWOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7QUFDRztBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFdBQVc7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK05BQStOO0FBQy9OO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7QUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsZ0JBQWdCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGNBQWM7QUFDbEYsNEJBQTRCLGVBQWU7QUFDM0MscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJKQUEySjtBQUMzSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLG1CQUFtQjtBQUN6SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUpBQXlKLFNBQVM7QUFDbEs7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLGdDQUFnQyxHQUFHLDBCQUEwQjtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw2RkFBNkY7QUFDakw7QUFDQSxrREFBa0QsNEhBQTRIO0FBQzlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaVJBQWlSO0FBQ2pSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ24zQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDOzs7Ozs7Ozs7OztBQ2hCZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2R3QztBQUN6QjtBQUNmLFNBQVMsNERBQU0sR0FBRztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hnRDtBQUNnQjtBQUNFO0FBQ2I7QUFDYjtBQUNlO0FBQ3dDO0FBQ3RDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLEVBQUUsc0VBQVk7QUFDZCxpQ0FBaUMsOERBQWE7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0VBQVU7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IscUVBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDREQUFNO0FBQ3JCLGdCQUFnQiw0REFBTTtBQUN0QixJQUFJO0FBQ0osZUFBZSw0REFBTTtBQUNyQixnQkFBZ0IsNERBQU07QUFDdEI7O0FBRUEsZ0JBQWdCLHlFQUFtQjtBQUNuQyx5QkFBeUIseUZBQStCLGNBQWMseUZBQStCO0FBQ3JHO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07O0FBRU4sSUFBSTtBQUNKLHdFQUF3RTtBQUN4RSxJQUFJO0FBQ0oscUVBQXFFO0FBQ3JFLElBQUk7QUFDSjtBQUNBLHlFQUF5RTtBQUN6RSxJQUFJO0FBQ0osK0RBQStEO0FBQy9ELElBQUk7QUFDSjtBQUNBLGtFQUFrRTtBQUNsRSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLFdBQVcsd0VBQWtCLHVCQUF1Qjs7QUFFcEQ7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RSxJQUFJO0FBQ0o7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0EsMkVBQTJFO0FBQzNFLE1BQU07QUFDTiwwRUFBMEU7QUFDMUUsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL05vZGVHcmFwaFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb0xvZ3MvS2V5VmFsdWVJbnB1dC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL1RyYWNlVG9Mb2dzU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvdXRpbHMvdHJhY2luZy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS9jb21wb25lbnRzL0xva2lMYWJlbEJyb3dzZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9sb2tpL2NvbXBvbmVudHMvTG9raVF1ZXJ5RmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9sb2tpL2xhbmd1YWdlX3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9DaGVhdFNoZWV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVtcG8vUXVlcnlFZGl0b3IvTmF0aXZlU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVtcG8vUXVlcnlFZGl0b3IvUXVlcnlGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL1F1ZXJ5RWRpdG9yL1NlcnZpY2VHcmFwaFNlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9RdWVyeUVkaXRvci91dGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVtcG8vY29uZmlndXJhdGlvbi9Db25maWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9jb25maWd1cmF0aW9uL0xva2lTZWFyY2hTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL2NvbmZpZ3VyYXRpb24vU2VhcmNoU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9jb25maWd1cmF0aW9uL1NlcnZpY2VHcmFwaFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVtcG8vZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVtcG8vZ3JhcGhUcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL2xhbmd1YWdlX3Byb3ZpZGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL3Jlc3VsdFRyYW5zZm9ybWVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9zeW50YXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9hcGkvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2FwaS9kaWFnLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vYXBpL3Byb3BhZ2F0aW9uLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vYXBpL3RyYWNlLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vYmFnZ2FnZS9jb250ZXh0LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9iYWdnYWdlL2ludGVybmFsL2JhZ2dhZ2UtaW1wbC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2JhZ2dhZ2UvaW50ZXJuYWwvc3ltYm9sLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vYmFnZ2FnZS90eXBlcy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2JhZ2dhZ2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9jb21tb24vQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2NvbW1vbi9FeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9jb21tb24vVGltZS5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2NvbnRleHQvTm9vcENvbnRleHRNYW5hZ2VyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vY29udGV4dC9jb250ZXh0LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vY29udGV4dC90eXBlcy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2RpYWcvQ29tcG9uZW50TG9nZ2VyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vZGlhZy9jb25zb2xlTG9nZ2VyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vZGlhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2RpYWcvaW50ZXJuYWwvbG9nTGV2ZWxMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9kaWFnL3R5cGVzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9pbnRlcm5hbC9nbG9iYWwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9pbnRlcm5hbC9zZW12ZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9wbGF0Zm9ybS9icm93c2VyL2dsb2JhbFRoaXMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9wbGF0Zm9ybS9icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vcHJvcGFnYXRpb24vTm9vcFRleHRNYXBQcm9wYWdhdG9yLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vcHJvcGFnYXRpb24vVGV4dE1hcFByb3BhZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9Ob25SZWNvcmRpbmdTcGFuLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvTm9vcFRyYWNlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL05vb3BUcmFjZXJQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL1Byb3h5VHJhY2VyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvUHJveHlUcmFjZXJQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL1NhbXBsZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9TYW1wbGluZ1Jlc3VsdC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL1NwYW5PcHRpb25zLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL2NvbnRleHQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9pbnRlcm5hbC90cmFjZXN0YXRlLWltcGwuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9pbnRlcm5hbC90cmFjZXN0YXRlLXZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9pbnRlcm5hbC91dGlscy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL2ludmFsaWQtc3Bhbi1jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9saW5rLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2Uvc3Bhbi5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL3NwYW5fY29udGV4dC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL3NwYW5fa2luZC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL3NwYW5jb250ZXh0LXV0aWxzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2Uvc3RhdHVzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvdHJhY2VfZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS90cmFjZV9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL3RyYWNlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL3RyYWNlcl9vcHRpb25zLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvdHJhY2VyX3Byb3ZpZGVyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktc2VtYW50aWMtY29udmVudGlvbnMtbnBtLTEuMC4xLWRiMzc5NDYxMzEtYzE3ZGQ2NDk0MS56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L3NlbWFudGljLWNvbnZlbnRpb25zL2J1aWxkL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktc2VtYW50aWMtY29udmVudGlvbnMtbnBtLTEuMC4xLWRiMzc5NDYxMzEtYzE3ZGQ2NDk0MS56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L3NlbWFudGljLWNvbnZlbnRpb25zL2J1aWxkL2VzbS9yZXNvdXJjZS9TZW1hbnRpY1Jlc291cmNlQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktc2VtYW50aWMtY29udmVudGlvbnMtbnBtLTEuMC4xLWRiMzc5NDYxMzEtYzE3ZGQ2NDk0MS56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L3NlbWFudGljLWNvbnZlbnRpb25zL2J1aWxkL2VzbS9yZXNvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktc2VtYW50aWMtY29udmVudGlvbnMtbnBtLTEuMC4xLWRiMzc5NDYxMzEtYzE3ZGQ2NDk0MS56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L3NlbWFudGljLWNvbnZlbnRpb25zL2J1aWxkL2VzbS90cmFjZS9TZW1hbnRpY0F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LXNlbWFudGljLWNvbnZlbnRpb25zLW5wbS0xLjAuMS1kYjM3OTQ2MTMxLWMxN2RkNjQ5NDEuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9zZW1hbnRpYy1jb252ZW50aW9ucy9idWlsZC9lc20vdHJhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2RhdGUtZm5zLW5wbS0yLjI4LjAtYzE5YzVhZGQxYi1hMDUxNmIyZTRmLnppcC9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9kYXRlLWZucy1ucG0tMi4yOC4wLWMxOWM1YWRkMWItYTA1MTZiMmU0Zi56aXAvbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9kYXRlLWZucy1ucG0tMi4yOC4wLWMxOWM1YWRkMWItYTA1MTZiMmU0Zi56aXAvbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7XG4gIERhdGFTb3VyY2VKc29uRGF0YSxcbiAgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyxcbiAgR3JhZmFuYVRoZW1lLFxuICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24sXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbmxpbmVTd2l0Y2gsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlR3JhcGhPcHRpb25zIHtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUdyYXBoRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIG5vZGVHcmFwaD86IE5vZGVHcmFwaE9wdGlvbnM7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8Tm9kZUdyYXBoRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIE5vZGVHcmFwaFNldHRpbmdzKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPk5vZGUgR3JhcGg8L2gzPlxuICAgICAgPElubGluZUZpZWxkUm93IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIHRvb2x0aXA9XCJFbmFibGVzIHRoZSBOb2RlIEdyYXBoIHZpc3VhbGl6YXRpb24gaW4gdGhlIHRyYWNlIHZpZXdlci5cIlxuICAgICAgICAgIGxhYmVsPVwiRW5hYmxlIE5vZGUgR3JhcGhcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJlbmFibGVOb2RlR3JhcGhcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEubm9kZUdyYXBoPy5lbmFibGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAnbm9kZUdyYXBoJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEubm9kZUdyYXBoLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIGxhYmVsOiBjb250YWluZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGAsXG4gIHJvdzogY3NzYFxuICAgIGxhYmVsOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lLCBLZXlWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VnbWVudElucHV0LCB1c2VTdHlsZXMsIElubGluZUxhYmVsLCBJY29uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRVFfV0lEVEggPSAzOyAvLyA9IDI0cHggaW4gaW5saW5lIGxhYmVsXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlczogQXJyYXk8S2V5VmFsdWU8c3RyaW5nPj47XG4gIG9uQ2hhbmdlOiAodmFsdWVzOiBBcnJheTxLZXlWYWx1ZTxzdHJpbmc+PikgPT4gdm9pZDtcbiAgaWQ/OiBzdHJpbmc7XG4gIGtleVBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB2YWx1ZVBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5jb25zdCBLZXlWYWx1ZUlucHV0ID0gKHtcbiAgdmFsdWVzLFxuICBvbkNoYW5nZSxcbiAgaWQsXG4gIGtleVBsYWNlaG9sZGVyID0gJ0tleScsXG4gIHZhbHVlUGxhY2Vob2xkZXIgPSAnVmFsdWUgKG9wdGlvbmFsKScsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICB7dmFsdWVzLmxlbmd0aCA/IChcbiAgICAgICAgdmFsdWVzLm1hcCgodmFsdWUsIGlkeCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFpcn0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgPFNlZ21lbnRJbnB1dFxuICAgICAgICAgICAgICBpZD17YCR7aWR9LWtleS0ke2lkeH1gfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17a2V5UGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5rZXl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgdmFsdWVzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdi5rZXkgPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElubGluZUxhYmVsIGFyaWEtbGFiZWw9XCJlcXVhbHNcIiBjbGFzc05hbWU9e3N0eWxlcy5vcGVyYXRvcn0gd2lkdGg9e0VRX1dJRFRIfT5cbiAgICAgICAgICAgICAgPVxuICAgICAgICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICAgICAgICAgIDxTZWdtZW50SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfS12YWx1ZS0ke2lkeH1gfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgIHYudmFsdWUgPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbLi4udmFsdWVzLnNsaWNlKDAsIGlkeCksIC4uLnZhbHVlcy5zbGljZShpZHggKyAxKV0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIHRhZ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ0aW1lc1wiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtpZHggPT09IHZhbHVlcy5sZW5ndGggLSAxID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoWy4uLnZhbHVlcywgeyBrZXk6ICcnLCB2YWx1ZTogJycgfV0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgcXVlcnktcGFydFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZCB0YWdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInBsdXNcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi52YWx1ZXMsIHsga2V5OiAnJywgdmFsdWU6ICcnIH1dKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgdGFnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5VmFsdWVJbnB1dDtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAke3RoZW1lLnNwYWNpbmcueHN9IDA7XG4gIGAsXG4gIHBhaXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYCxcbiAgb3BlcmF0b3I6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5wYWxldHRlLm9yYW5nZX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQge1xuICBEYXRhU291cmNlSnNvbkRhdGEsXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLFxuICBHcmFmYW5hVGhlbWUsXG4gIEtleVZhbHVlLFxuICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24sXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBpY2tlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbnB1dCwgVGFnc0lucHV0LCB1c2VTdHlsZXMsIElubGluZVN3aXRjaCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgS2V5VmFsdWVJbnB1dCBmcm9tICcuL0tleVZhbHVlSW5wdXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNlVG9Mb2dzT3B0aW9ucyB7XG4gIGRhdGFzb3VyY2VVaWQ/OiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmdbXTtcbiAgbWFwcGVkVGFncz86IEFycmF5PEtleVZhbHVlPHN0cmluZz4+O1xuICBtYXBUYWdOYW1lc0VuYWJsZWQ/OiBib29sZWFuO1xuICBzcGFuU3RhcnRUaW1lU2hpZnQ/OiBzdHJpbmc7XG4gIHNwYW5FbmRUaW1lU2hpZnQ/OiBzdHJpbmc7XG4gIGZpbHRlckJ5VHJhY2VJRD86IGJvb2xlYW47XG4gIGZpbHRlckJ5U3BhbklEPzogYm9vbGVhbjtcbiAgbG9raVNlYXJjaD86IGJvb2xlYW47IC8vIGxlZ2FjeVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNlVG9Mb2dzRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIHRyYWNlc1RvTG9ncz86IFRyYWNlVG9Mb2dzT3B0aW9ucztcbn1cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxUcmFjZVRvTG9nc0RhdGE+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFjZVRvTG9nc1NldHRpbmdzKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh7IHdpZHRoOiAnMTAwJScgfSl9PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPlRyYWNlIHRvIGxvZ3M8L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9UZXh0fT5cbiAgICAgICAgVHJhY2UgdG8gbG9ncyBsZXRzIHlvdSBuYXZpZ2F0ZSBmcm9tIGEgdHJhY2Ugc3BhbiB0byB0aGUgc2VsZWN0ZWQgZGF0YSBzb3VyY2UmYXBvcztzIGxvZy5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiVGhlIGRhdGEgc291cmNlIHRoZSB0cmFjZSBpcyBnb2luZyB0byBuYXZpZ2F0ZSB0b1wiIGxhYmVsPVwiRGF0YSBzb3VyY2VcIiBsYWJlbFdpZHRoPXsyNn0+XG4gICAgICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgIGlucHV0SWQ9XCJ0cmFjZS10by1sb2dzLWRhdGEtc291cmNlLXBpY2tlclwiXG4gICAgICAgICAgICBsb2dzXG4gICAgICAgICAgICBjdXJyZW50PXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uZGF0YXNvdXJjZVVpZH1cbiAgICAgICAgICAgIG5vRGVmYXVsdD17dHJ1ZX1cbiAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZHM6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiBkcy51aWQsXG4gICAgICAgICAgICAgICAgdGFnczogb3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3MsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIHtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwVGFnTmFtZXNFbmFibGVkID8gKFxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICB0b29sdGlwPVwiVGFncyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgTG9raSBxdWVyeS4gRGVmYXVsdCB0YWdzOiAnY2x1c3RlcicsICdob3N0bmFtZScsICduYW1lc3BhY2UnLCAncG9kJ1wiXG4gICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxuICAgICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEtleVZhbHVlSW5wdXRcbiAgICAgICAgICAgICAga2V5UGxhY2Vob2xkZXI9XCJUYWdcIlxuICAgICAgICAgICAgICB2YWx1ZXM9e1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5tYXBwZWRUYWdzID8/XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3M/Lm1hcCgodGFnKSA9PiAoeyBrZXk6IHRhZyB9KSkgPz9cbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgICAgbWFwcGVkVGFnczogdixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICApIDogKFxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICB0b29sdGlwPVwiVGFncyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgTG9raSBxdWVyeS4gRGVmYXVsdCB0YWdzOiAnY2x1c3RlcicsICdob3N0bmFtZScsICduYW1lc3BhY2UnLCAncG9kJ1wiXG4gICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxuICAgICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRhZ3NJbnB1dFxuICAgICAgICAgICAgICB0YWdzPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8udGFnc31cbiAgICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHRhZ3MpID0+XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgKX1cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIk1hcCB0YWcgbmFtZXNcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiTWFwIHRyYWNlIHRhZyBuYW1lcyB0byBsb2cgbGFiZWwgbmFtZXMuIEV4OiBrOHMucG9kLm5hbWUgLT4gcG9kXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbmxpbmVTd2l0Y2hcbiAgICAgICAgICAgIGlkPVwibWFwVGFnTmFtZXNcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5tYXBUYWdOYW1lc0VuYWJsZWQgPz8gZmFsc2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgbWFwVGFnTmFtZXNFbmFibGVkOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJTcGFuIHN0YXJ0IHRpbWUgc2hpZnRcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiU2hpZnRzIHRoZSBzdGFydCB0aW1lIG9mIHRoZSBzcGFuLiBEZWZhdWx0IDAgKFRpbWUgdW5pdHMgY2FuIGJlIHVzZWQgaGVyZSwgZm9yIGV4YW1wbGU6IDVzLCAxbSwgM2gpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxaFwiXG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIHNwYW5TdGFydFRpbWVTaGlmdDogdi5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5zcGFuU3RhcnRUaW1lU2hpZnQgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJTcGFuIGVuZCB0aW1lIHNoaWZ0XCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIlNoaWZ0cyB0aGUgZW5kIHRpbWUgb2YgdGhlIHNwYW4uIERlZmF1bHQgMCBUaW1lIHVuaXRzIGNhbiBiZSB1c2VkIGhlcmUsIGZvciBleGFtcGxlOiA1cywgMW0sIDNoXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxaFwiXG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIHNwYW5FbmRUaW1lU2hpZnQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uc3BhbkVuZFRpbWVTaGlmdCB8fCAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlciBieSBUcmFjZSBJRFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJGaWx0ZXJzIGxvZ3MgYnkgVHJhY2UgSUQuIEFwcGVuZHMgJ3w9PHRyYWNlIGlkPicgdG8gdGhlIHF1ZXJ5LlwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImZpbHRlckJ5VHJhY2VJRFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmZpbHRlckJ5VHJhY2VJRH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJCeVRyYWNlSUQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlciBieSBTcGFuIElEXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIkZpbHRlcnMgbG9ncyBieSBTcGFuIElELiBBcHBlbmRzICd8PTxzcGFuIGlkPicgdG8gdGhlIHF1ZXJ5LlwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImZpbHRlckJ5U3BhbklEXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uZmlsdGVyQnlTcGFuSUR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZmlsdGVyQnlTcGFuSUQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGluZm9UZXh0OiBjc3NgXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gIGAsXG59KTtcbiIsIi8qKlxuICogR2V0IG5vbiBvdmVybGFwcGluZyBkdXJhdGlvbiBvZiB0aGUgcmFuZ2VzIGFzIHRoZXkgY2FuIG92ZXJsYXAgb3IgaGF2ZSBnYXBzLlxuICovXG5pbXBvcnQgeyBGaWVsZFR5cGUsIE11dGFibGVEYXRhRnJhbWUsIE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMgYXMgRmllbGRzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uKHJhbmdlczogQXJyYXk8W251bWJlciwgbnVtYmVyXT4pOiBudW1iZXIge1xuICByYW5nZXMuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pO1xuICBjb25zdCBtZXJnZWRSYW5nZXMgPSByYW5nZXMucmVkdWNlKChhY2MsIHJhbmdlKSA9PiB7XG4gICAgaWYgKCFhY2MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW3JhbmdlXTtcbiAgICB9XG4gICAgY29uc3QgdGFpbCA9IGFjYy5zbGljZSgtMSlbMF07XG4gICAgY29uc3QgW3ByZXZTdGFydCwgcHJldkVuZF0gPSB0YWlsO1xuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlO1xuICAgIGlmIChlbmQgPCBwcmV2RW5kKSB7XG4gICAgICAvLyBJbiB0aGlzIGNhc2UgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgaW5zaWRlIHRoZSBwcmV2IHJhbmdlIHNvIHdlIGNhbiBqdXN0IGlnbm9yZSBpdC5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gcHJldkVuZCkge1xuICAgICAgLy8gVGhlcmUgaXMgbm8gb3ZlcmxhcCBzbyB3ZSBjYW4ganVzdCBhZGQgaXQgdG8gc3RhY2tcbiAgICAgIHJldHVybiBbLi4uYWNjLCByYW5nZV07XG4gICAgfVxuXG4gICAgLy8gV2Uga25vdyB0aGVyZSBpcyBvdmVybGFwIGFuZCBjdXJyZW50IHJhbmdlIGVuZHMgbGF0ZXIgdGhhbiBwcmV2aW91cyBzbyB3ZSBjYW4ganVzdCBleHRlbmQgdGhlIHJhbmdlXG4gICAgcmV0dXJuIFsuLi5hY2Muc2xpY2UoMCwgLTEpLCBbcHJldlN0YXJ0LCBlbmRdXSBhcyBBcnJheTxbbnVtYmVyLCBudW1iZXJdPjtcbiAgfSwgW10gYXMgQXJyYXk8W251bWJlciwgbnVtYmVyXT4pO1xuXG4gIHJldHVybiBtZXJnZWRSYW5nZXMucmVkdWNlKChhY2MsIHJhbmdlKSA9PiB7XG4gICAgcmV0dXJuIGFjYyArIChyYW5nZVsxXSAtIHJhbmdlWzBdKTtcbiAgfSwgMCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hcCBvZiB0aGUgc3BhbnMgd2l0aCBjaGlsZHJlbiBhcnJheSBmb3IgZWFzaWVyIHByb2Nlc3NpbmcuIEl0IHdpbGwgYWxzbyBjb250YWluIGVtcHR5IHNwYW5zIGluIGNhc2VcbiAqIHNwYW4gaXMgbWlzc2luZyBidXQgb3RoZXIgc3BhbnMgYXJlIGl0J3MgY2hpbGRyZW4uIFRoaXMgaXMgbW9yZSBnZW5lcmljIGJlY2F1c2UgaXQgbmVlZHMgdG8gYWxsb3cgaXRlcmF0aW5nIG92ZXJcbiAqIGJvdGggYXJyYXlzIGFuZCBkYXRhZnJhbWUgdmlld3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3Bhbk1hcDxUPihnZXRTcGFuOiAoaW5kZXg6IG51bWJlcikgPT4geyBzcGFuOiBUOyBpZDogc3RyaW5nOyBwYXJlbnRJZHM6IHN0cmluZ1tdIH0gfCB1bmRlZmluZWQpOiB7XG4gIFtpZDogc3RyaW5nXTogeyBzcGFuOiBUOyBjaGlsZHJlbjogc3RyaW5nW10gfTtcbn0ge1xuICBjb25zdCBzcGFuTWFwOiB7IFtpZDogc3RyaW5nXTogeyBzcGFuPzogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH0gfSA9IHt9O1xuXG4gIGxldCBzcGFuO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IChzcGFuID0gZ2V0U3BhbihpbmRleCkpLCAhIXNwYW47IGluZGV4KyspIHtcbiAgICBpZiAoIXNwYW5NYXBbc3Bhbi5pZF0pIHtcbiAgICAgIHNwYW5NYXBbc3Bhbi5pZF0gPSB7XG4gICAgICAgIHNwYW46IHNwYW4uc3BhbixcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Bhbk1hcFtzcGFuLmlkXS5zcGFuID0gc3Bhbi5zcGFuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGFyZW50SWQgb2Ygc3Bhbi5wYXJlbnRJZHMpIHtcbiAgICAgIGlmIChwYXJlbnRJZCkge1xuICAgICAgICBpZiAoIXNwYW5NYXBbcGFyZW50SWRdKSB7XG4gICAgICAgICAgc3Bhbk1hcFtwYXJlbnRJZF0gPSB7XG4gICAgICAgICAgICBzcGFuOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NwYW4uaWRdLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbk1hcFtwYXJlbnRJZF0uY2hpbGRyZW4ucHVzaChzcGFuLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3Bhbk1hcCBhcyB7IFtpZDogc3RyaW5nXTogeyBzcGFuOiBUOyBjaGlsZHJlbjogc3RyaW5nW10gfSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHMoZHVyYXRpb246IG51bWJlciwgdHJhY2VEdXJhdGlvbjogbnVtYmVyLCBzZWxmRHVyYXRpb246IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1haW46IGAke3RvRml4ZWROb1RyYWlsaW5nWmVyb3MoZHVyYXRpb24pfW1zICgke3RvRml4ZWROb1RyYWlsaW5nWmVyb3MoKGR1cmF0aW9uIC8gdHJhY2VEdXJhdGlvbikgKiAxMDApfSUpYCxcbiAgICBzZWNvbmRhcnk6IGAke3RvRml4ZWROb1RyYWlsaW5nWmVyb3Moc2VsZkR1cmF0aW9uKX1tcyAoJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKFxuICAgICAgKHNlbGZEdXJhdGlvbiAvIGR1cmF0aW9uKSAqIDEwMFxuICAgICl9JSlgLFxuICB9O1xufVxuXG5mdW5jdGlvbiB0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKG46IG51bWJlcikge1xuICByZXR1cm4gcGFyc2VGbG9hdChuLnRvRml4ZWQoMikpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBkZWZhdWx0IGZyYW1lcyB1c2VkIHdoZW4gcmV0dXJuaW5nIGRhdGEgZm9yIG5vZGUgZ3JhcGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRnJhbWVzKCkge1xuICBjb25zdCBub2Rlc0ZyYW1lID0gbmV3IE11dGFibGVEYXRhRnJhbWUoe1xuICAgIGZpZWxkczogW1xuICAgICAgeyBuYW1lOiBGaWVsZHMuaWQsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLnRpdGxlLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zdWJUaXRsZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMubWFpblN0YXQsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ1RvdGFsIHRpbWUgKCUgb2YgdHJhY2UpJyB9IH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zZWNvbmRhcnlTdGF0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdTZWxmIHRpbWUgKCUgb2YgdG90YWwpJyB9IH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IEZpZWxkcy5jb2xvcixcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgICAgY29uZmlnOiB7IGNvbG9yOiB7IG1vZGU6ICdjb250aW51b3VzLUdyWWxSZCcgfSwgZGlzcGxheU5hbWU6ICdTZWxmIHRpbWUgLyBUcmFjZSBkdXJhdGlvbicgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ25vZGVHcmFwaCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZWRnZXNGcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogRmllbGRzLmlkLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy50YXJnZXQsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLnNvdXJjZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEhpZ2hsaWdodFBhcnQsXG4gIEhvcml6b250YWxHcm91cCxcbiAgSW5wdXQsXG4gIExhYmVsLFxuICBMb2FkaW5nUGxhY2Vob2xkZXIsXG4gIHdpdGhUaGVtZTIsXG4gIEJyb3dzZXJMYWJlbCBhcyBMb2tpTGFiZWwsXG4gIGZ1enp5TWF0Y2gsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBMb2tpTGFuZ3VhZ2VQcm92aWRlciBmcm9tICcuLi9sYW5ndWFnZV9wcm92aWRlcic7XG5pbXBvcnQgUHJvbVFsTGFuZ3VhZ2VQcm92aWRlciBmcm9tICcuLi8uLi9wcm9tZXRoZXVzL2xhbmd1YWdlX3Byb3ZpZGVyJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzb3J0QnkgfSBmcm9tICdsb2Rhc2gnO1xuXG4vLyBIYXJkIGxpbWl0IG9uIGxhYmVscyB0byByZW5kZXJcbmNvbnN0IE1BWF9MQUJFTF9DT1VOVCA9IDEwMDA7XG5jb25zdCBNQVhfVkFMVUVfQ09VTlQgPSAxMDAwMDtcbmNvbnN0IE1BWF9BVVRPX1NFTEVDVCA9IDQ7XG5jb25zdCBFTVBUWV9TRUxFQ1RPUiA9ICd7fSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJvd3NlclByb3BzIHtcbiAgLy8gVE9ETyAjMzM5NzY6IElzIGl0IHBvc3NpYmxlIHRvIHVzZSBhIGNvbW1vbiBpbnRlcmZhY2UgaGVyZT8gRm9yIGV4YW1wbGU6IExhYmVsc0xhbmd1YWdlUHJvdmlkZXJcbiAgbGFuZ3VhZ2VQcm92aWRlcjogTG9raUxhbmd1YWdlUHJvdmlkZXIgfCBQcm9tUWxMYW5ndWFnZVByb3ZpZGVyO1xuICBvbkNoYW5nZTogKHNlbGVjdG9yOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHRoZW1lOiBHcmFmYW5hVGhlbWUyO1xuICBhdXRvU2VsZWN0PzogbnVtYmVyO1xuICBoaWRlPzogKCkgPT4gdm9pZDtcbiAgbGFzdFVzZWRMYWJlbHM6IHN0cmluZ1tdO1xuICBzdG9yZUxhc3RVc2VkTGFiZWxzOiAobGFiZWxzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgZGVsZXRlTGFzdFVzZWRMYWJlbHM6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBCcm93c2VyU3RhdGUge1xuICBsYWJlbHM6IFNlbGVjdGFibGVMYWJlbFtdO1xuICBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICBlcnJvcjogc3RyaW5nO1xuICB2YWxpZGF0aW9uU3RhdHVzOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBGYWNldHRhYmxlVmFsdWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgaGlnaGxpZ2h0UGFydHM/OiBIaWdobGlnaHRQYXJ0W107XG4gIG9yZGVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGFibGVMYWJlbCB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgdmFsdWVzPzogRmFjZXR0YWJsZVZhbHVlW107XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGZhY2V0cz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2VsZWN0b3IobGFiZWxzOiBTZWxlY3RhYmxlTGFiZWxbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHNlbGVjdGVkTGFiZWxzID0gW107XG4gIGZvciAoY29uc3QgbGFiZWwgb2YgbGFiZWxzKSB7XG4gICAgaWYgKGxhYmVsLnNlbGVjdGVkICYmIGxhYmVsLnZhbHVlcyAmJiBsYWJlbC52YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSBsYWJlbC52YWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUuc2VsZWN0ZWQpLm1hcCgodmFsdWUpID0+IHZhbHVlLm5hbWUpO1xuICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgc2VsZWN0ZWRMYWJlbHMucHVzaChgJHtsYWJlbC5uYW1lfT1+XCIke3NlbGVjdGVkVmFsdWVzLmpvaW4oJ3wnKX1cImApO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgc2VsZWN0ZWRMYWJlbHMucHVzaChgJHtsYWJlbC5uYW1lfT1cIiR7c2VsZWN0ZWRWYWx1ZXNbMF19XCJgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFsneycsIHNlbGVjdGVkTGFiZWxzLmpvaW4oJywnKSwgJ30nXS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhY2V0TGFiZWxzKFxuICBsYWJlbHM6IFNlbGVjdGFibGVMYWJlbFtdLFxuICBwb3NzaWJsZUxhYmVsczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+LFxuICBsYXN0RmFjZXR0ZWQ/OiBzdHJpbmdcbik6IFNlbGVjdGFibGVMYWJlbFtdIHtcbiAgcmV0dXJuIGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgcG9zc2libGVWYWx1ZXMgPSBwb3NzaWJsZUxhYmVsc1tsYWJlbC5uYW1lXTtcbiAgICBpZiAocG9zc2libGVWYWx1ZXMpIHtcbiAgICAgIGxldCBleGlzdGluZ1ZhbHVlczogRmFjZXR0YWJsZVZhbHVlW107XG4gICAgICBpZiAobGFiZWwubmFtZSA9PT0gbGFzdEZhY2V0dGVkICYmIGxhYmVsLnZhbHVlcykge1xuICAgICAgICAvLyBGYWNldHRpbmcgdGhpcyBsYWJlbCwgc2hvdyBhbGwgdmFsdWVzXG4gICAgICAgIGV4aXN0aW5nVmFsdWVzID0gbGFiZWwudmFsdWVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gS2VlcCBzZWxlY3Rpb24gaW4gb3RoZXIgZmFjZXRzXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoXG4gICAgICAgICAgbGFiZWwudmFsdWVzPy5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5zZWxlY3RlZCkubWFwKCh2YWx1ZSkgPT4gdmFsdWUubmFtZSkgfHwgW11cbiAgICAgICAgKTtcbiAgICAgICAgLy8gVmFsdWVzIGZvciB0aGlzIGxhYmVsIGhhdmUgbm90IGJlZW4gcmVxdWVzdGVkIHlldCwgbGV0J3MgdXNlIHRoZSBmYWNldHRlZCBvbmVzIGFzIHRoZSBpbml0aWFsIHZhbHVlc1xuICAgICAgICBleGlzdGluZ1ZhbHVlcyA9IHBvc3NpYmxlVmFsdWVzLm1hcCgodmFsdWUpID0+ICh7IG5hbWU6IHZhbHVlLCBzZWxlY3RlZDogc2VsZWN0ZWRWYWx1ZXMuaGFzKHZhbHVlKSB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyAuLi5sYWJlbCwgbG9hZGluZzogZmFsc2UsIHZhbHVlczogZXhpc3RpbmdWYWx1ZXMsIGZhY2V0czogZXhpc3RpbmdWYWx1ZXMubGVuZ3RoIH07XG4gICAgfVxuXG4gICAgLy8gTGFiZWwgaXMgZmFjZXR0ZWQgb3V0LCBoaWRlIGFsbCB2YWx1ZXNcbiAgICByZXR1cm4geyAuLi5sYWJlbCwgbG9hZGluZzogZmFsc2UsIGhpZGRlbjogIXBvc3NpYmxlVmFsdWVzLCB2YWx1ZXM6IHVuZGVmaW5lZCwgZmFjZXRzOiAwIH07XG4gIH0pO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICB3aWR0aDogMTAwJTtcbiAgYCxcbiAgbGlzdDogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIGAsXG4gIHNlY3Rpb246IGNzc2BcbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygyLCAwKX07XG4gICAgfVxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYCxcbiAgc2VsZWN0b3I6IGNzc2BcbiAgICBmb250LWZhbWlseTogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHlNb25vc3BhY2V9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHN0YXR1czogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAvKiB1c2luZyBhYnNvbHV0ZSBwb3NpdGlvbmluZyBiZWNhdXNlIGZsZXggaW50ZXJmZXJlcyB3aXRoIGVsbGlwc2lzICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMDtcbiAgYCxcbiAgc3RhdHVzU2hvd2luZzogY3NzYFxuICAgIG9wYWNpdHk6IDE7XG4gIGAsXG4gIGVycm9yOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmVycm9yLm1haW59O1xuICBgLFxuICB2YWx1ZUxpc3Q6IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHZhbHVlTGlzdFdyYXBwZXI6IGNzc2BcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDApfTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSwgMCwgMSwgMSl9O1xuICBgLFxuICB2YWx1ZUxpc3RBcmVhOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgdmFsdWVUaXRsZTogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAtJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHZhbGlkYXRpb25TdGF0dXM6IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5tYXhDb250cmFzdH07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBgLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBVbnRoZW1lZExva2lMYWJlbEJyb3dzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QnJvd3NlclByb3BzLCBCcm93c2VyU3RhdGU+IHtcbiAgc3RhdGU6IEJyb3dzZXJTdGF0ZSA9IHtcbiAgICBsYWJlbHM6IFtdIGFzIFNlbGVjdGFibGVMYWJlbFtdLFxuICAgIHNlYXJjaFRlcm06ICcnLFxuICAgIHN0YXR1czogJ1JlYWR5JyxcbiAgICBlcnJvcjogJycsXG4gICAgdmFsaWRhdGlvblN0YXR1czogJycsXG4gIH07XG5cbiAgb25DaGFuZ2VTZWFyY2ggPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRlcm06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBvbkNsaWNrUnVuTG9nc1F1ZXJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYnVpbGRTZWxlY3Rvcih0aGlzLnN0YXRlLmxhYmVscyk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzZWxlY3Rvcik7XG4gIH07XG5cbiAgb25DbGlja1J1bk1ldHJpY3NRdWVyeSA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGJ1aWxkU2VsZWN0b3IodGhpcy5zdGF0ZS5sYWJlbHMpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYHJhdGUoJHtzZWxlY3Rvcn1bJF9faW50ZXJ2YWxdKWA7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShxdWVyeSk7XG4gIH07XG5cbiAgb25DbGlja0NsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbHM6IFNlbGVjdGFibGVMYWJlbFtdID0gc3RhdGUubGFiZWxzLm1hcCgobGFiZWwpID0+ICh7XG4gICAgICAgIC4uLmxhYmVsLFxuICAgICAgICB2YWx1ZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgZmFjZXRzOiB1bmRlZmluZWQsXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4geyBsYWJlbHMsIHNlYXJjaFRlcm06ICcnLCBzdGF0dXM6ICcnLCBlcnJvcjogJycsIHZhbGlkYXRpb25TdGF0dXM6ICcnIH07XG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVMYXN0VXNlZExhYmVscygpO1xuICB9O1xuXG4gIG9uQ2xpY2tMYWJlbCA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5zdGF0ZS5sYWJlbHMuZmluZCgobCkgPT4gbC5uYW1lID09PSBuYW1lKTtcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRvZ2dsZSBzZWxlY3RlZCBzdGF0ZVxuICAgIGNvbnN0IHNlbGVjdGVkID0gIWxhYmVsLnNlbGVjdGVkO1xuICAgIGxldCBuZXh0VmFsdWU6IFBhcnRpYWw8U2VsZWN0YWJsZUxhYmVsPiA9IHsgc2VsZWN0ZWQgfTtcbiAgICBpZiAobGFiZWwudmFsdWVzICYmICFzZWxlY3RlZCkge1xuICAgICAgLy8gRGVzZWxlY3QgYWxsIHZhbHVlcyBpZiBsYWJlbCB3YXMgZGVzZWxlY3RlZFxuICAgICAgY29uc3QgdmFsdWVzID0gbGFiZWwudmFsdWVzLm1hcCgodmFsdWUpID0+ICh7IC4uLnZhbHVlLCBzZWxlY3RlZDogZmFsc2UgfSkpO1xuICAgICAgbmV4dFZhbHVlID0geyAuLi5uZXh0VmFsdWUsIGZhY2V0czogMCwgdmFsdWVzIH07XG4gICAgfVxuICAgIC8vIFJlc2V0dGluZyBzZWFyY2ggdG8gcHJldmVudCBlbXB0eSByZXN1bHRzXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRlcm06ICcnIH0pO1xuICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZShuYW1lLCBuZXh0VmFsdWUsICcnLCAoKSA9PiB0aGlzLmRvRmFjZXR0aW5nRm9yTGFiZWwobmFtZSkpO1xuICB9O1xuXG4gIG9uQ2xpY2tWYWx1ZSA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5zdGF0ZS5sYWJlbHMuZmluZCgobCkgPT4gbC5uYW1lID09PSBuYW1lKTtcbiAgICBpZiAoIWxhYmVsIHx8ICFsYWJlbC52YWx1ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmVzZXR0aW5nIHNlYXJjaCB0byBwcmV2ZW50IGVtcHR5IHJlc3VsdHNcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGVybTogJycgfSk7XG4gICAgLy8gVG9nZ2xpbmcgdmFsdWUgZm9yIHNlbGVjdGVkIGxhYmVsLCBsZWF2aW5nIG90aGVyIHZhbHVlcyBpbnRhY3RcbiAgICBjb25zdCB2YWx1ZXMgPSBsYWJlbC52YWx1ZXMubWFwKCh2KSA9PiAoeyAuLi52LCBzZWxlY3RlZDogdi5uYW1lID09PSB2YWx1ZSA/ICF2LnNlbGVjdGVkIDogdi5zZWxlY3RlZCB9KSk7XG4gICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKG5hbWUsIHsgdmFsdWVzIH0sICcnLCAoKSA9PiB0aGlzLmRvRmFjZXR0aW5nKG5hbWUpKTtcbiAgfTtcblxuICBvbkNsaWNrVmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBidWlsZFNlbGVjdG9yKHRoaXMuc3RhdGUubGFiZWxzKTtcbiAgICB0aGlzLnZhbGlkYXRlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9O1xuXG4gIHVwZGF0ZUxhYmVsU3RhdGUobmFtZTogc3RyaW5nLCB1cGRhdGVkRmllbGRzOiBQYXJ0aWFsPFNlbGVjdGFibGVMYWJlbD4sIHN0YXR1cyA9ICcnLCBjYj86ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzOiBTZWxlY3RhYmxlTGFiZWxbXSA9IHN0YXRlLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgIGlmIChsYWJlbC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4ubGFiZWwsIC4uLnVwZGF0ZWRGaWVsZHMgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICB9KTtcbiAgICAgIC8vIE5ldyBzdGF0dXMgb3ZlcnJpZGVzIGVycm9yc1xuICAgICAgY29uc3QgZXJyb3IgPSBzdGF0dXMgPyAnJyA6IHN0YXRlLmVycm9yO1xuICAgICAgcmV0dXJuIHsgbGFiZWxzLCBzdGF0dXMsIGVycm9yLCB2YWxpZGF0aW9uU3RhdHVzOiAnJyB9O1xuICAgIH0sIGNiKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2VQcm92aWRlciwgYXV0b1NlbGVjdCA9IE1BWF9BVVRPX1NFTEVDVCwgbGFzdFVzZWRMYWJlbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxhbmd1YWdlUHJvdmlkZXIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxzOiBzdHJpbmdbXSA9IGxhc3RVc2VkTGFiZWxzO1xuICAgICAgbGFuZ3VhZ2VQcm92aWRlci5zdGFydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBsZXQgcmF3TGFiZWxzOiBzdHJpbmdbXSA9IGxhbmd1YWdlUHJvdmlkZXIuZ2V0TGFiZWxLZXlzKCk7XG4gICAgICAgIGlmIChyYXdMYWJlbHMubGVuZ3RoID4gTUFYX0xBQkVMX0NPVU5UKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSBgVG9vIG1hbnkgbGFiZWxzIGZvdW5kIChzaG93aW5nIG9ubHkgJHtNQVhfTEFCRUxfQ09VTlR9IG9mICR7cmF3TGFiZWxzLmxlbmd0aH0pYDtcbiAgICAgICAgICByYXdMYWJlbHMgPSByYXdMYWJlbHMuc2xpY2UoMCwgTUFYX0xBQkVMX0NPVU5UKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXV0by1zZWxlY3QgYWxsIGxhYmVscyBpZiBsYWJlbCBsaXN0IGlzIHNtYWxsIGVub3VnaFxuICAgICAgICBjb25zdCBsYWJlbHM6IFNlbGVjdGFibGVMYWJlbFtdID0gcmF3TGFiZWxzLm1hcCgobGFiZWwsIGksIGFycikgPT4gKHtcbiAgICAgICAgICBuYW1lOiBsYWJlbCxcbiAgICAgICAgICBzZWxlY3RlZDogKGFyci5sZW5ndGggPD0gYXV0b1NlbGVjdCAmJiBzZWxlY3RlZExhYmVscy5sZW5ndGggPT09IDApIHx8IHNlbGVjdGVkTGFiZWxzLmluY2x1ZGVzKGxhYmVsKSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSkpO1xuICAgICAgICAvLyBQcmUtZmV0Y2ggdmFsdWVzIGZvciBzZWxlY3RlZCBsYWJlbHNcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVscyB9LCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5sYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGlmIChsYWJlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICB0aGlzLmZldGNoVmFsdWVzKGxhYmVsLm5hbWUsIEVNUFRZX1NFTEVDVE9SKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb0ZhY2V0dGluZ0ZvckxhYmVsKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5zdGF0ZS5sYWJlbHMuZmluZCgobCkgPT4gbC5uYW1lID09PSBuYW1lKTtcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxzID0gdGhpcy5zdGF0ZS5sYWJlbHMuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwuc2VsZWN0ZWQpLm1hcCgobGFiZWwpID0+IGxhYmVsLm5hbWUpO1xuICAgIHRoaXMucHJvcHMuc3RvcmVMYXN0VXNlZExhYmVscyhzZWxlY3RlZExhYmVscyk7XG4gICAgaWYgKGxhYmVsLnNlbGVjdGVkKSB7XG4gICAgICAvLyBSZWZldGNoIHZhbHVlcyBmb3IgbmV3bHkgc2VsZWN0ZWQgbGFiZWwuLi5cbiAgICAgIGlmICghbGFiZWwudmFsdWVzKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hWYWx1ZXMobmFtZSwgYnVpbGRTZWxlY3Rvcih0aGlzLnN0YXRlLmxhYmVscykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbmx5IG5lZWQgdG8gZmFjZXQgd2hlbiBkZXNlbGVjdGluZyBsYWJlbHNcbiAgICAgIHRoaXMuZG9GYWNldHRpbmcoKTtcbiAgICB9XG4gIH1cblxuICBkb0ZhY2V0dGluZyA9IChsYXN0RmFjZXR0ZWQ/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGJ1aWxkU2VsZWN0b3IodGhpcy5zdGF0ZS5sYWJlbHMpO1xuICAgIGlmIChzZWxlY3RvciA9PT0gRU1QVFlfU0VMRUNUT1IpIHtcbiAgICAgIC8vIENsZWFyIHVwIGZhY2V0dGluZ1xuICAgICAgY29uc3QgbGFiZWxzOiBTZWxlY3RhYmxlTGFiZWxbXSA9IHRoaXMuc3RhdGUubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4ubGFiZWwsIGZhY2V0czogMCwgdmFsdWVzOiB1bmRlZmluZWQsIGhpZGRlbjogZmFsc2UgfTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVscyB9LCAoKSA9PiB7XG4gICAgICAgIC8vIEdldCBmcmVzaCBzZXQgb2YgdmFsdWVzXG4gICAgICAgIHRoaXMuc3RhdGUubGFiZWxzLmZvckVhY2goKGxhYmVsKSA9PiBsYWJlbC5zZWxlY3RlZCAmJiB0aGlzLmZldGNoVmFsdWVzKGxhYmVsLm5hbWUsIHNlbGVjdG9yKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRG8gZmFjZXR0aW5nXG4gICAgICB0aGlzLmZldGNoU2VyaWVzKHNlbGVjdG9yLCBsYXN0RmFjZXR0ZWQpO1xuICAgIH1cbiAgfTtcblxuICBhc3luYyBmZXRjaFZhbHVlcyhuYW1lOiBzdHJpbmcsIHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlUHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKG5hbWUsIHsgbG9hZGluZzogdHJ1ZSB9LCBgRmV0Y2hpbmcgdmFsdWVzIGZvciAke25hbWV9YCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByYXdWYWx1ZXMgPSBhd2FpdCBsYW5ndWFnZVByb3ZpZGVyLmdldExhYmVsVmFsdWVzKG5hbWUpO1xuICAgICAgLy8gSWYgc2VsZWN0b3IgY2hhbmdlZCwgY2xlYXIgbG9hZGluZyBzdGF0ZSBhbmQgZGlzY2FyZCByZXN1bHQgYnkgcmV0dXJuaW5nIGVhcmx5XG4gICAgICBpZiAoc2VsZWN0b3IgIT09IGJ1aWxkU2VsZWN0b3IodGhpcy5zdGF0ZS5sYWJlbHMpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZShuYW1lLCB7IGxvYWRpbmc6IGZhbHNlIH0sICcnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHJhd1ZhbHVlcy5sZW5ndGggPiBNQVhfVkFMVUVfQ09VTlQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBgVG9vIG1hbnkgdmFsdWVzIGZvciAke25hbWV9IChzaG93aW5nIG9ubHkgJHtNQVhfVkFMVUVfQ09VTlR9IG9mICR7cmF3VmFsdWVzLmxlbmd0aH0pYDtcbiAgICAgICAgcmF3VmFsdWVzID0gcmF3VmFsdWVzLnNsaWNlKDAsIE1BWF9WQUxVRV9DT1VOVCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlczogRmFjZXR0YWJsZVZhbHVlW10gPSByYXdWYWx1ZXMubWFwKCh2YWx1ZSkgPT4gKHsgbmFtZTogdmFsdWUgfSkpO1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKG5hbWUsIHsgdmFsdWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hTZXJpZXMoc2VsZWN0b3I6IHN0cmluZywgbGFzdEZhY2V0dGVkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZVByb3ZpZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsYXN0RmFjZXR0ZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZShsYXN0RmFjZXR0ZWQsIHsgbG9hZGluZzogdHJ1ZSB9LCBgRmFjZXR0aW5nIGxhYmVscyBmb3IgJHtzZWxlY3Rvcn1gKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBvc3NpYmxlTGFiZWxzID0gYXdhaXQgbGFuZ3VhZ2VQcm92aWRlci5mZXRjaFNlcmllc0xhYmVscyhzZWxlY3RvciwgdHJ1ZSk7XG4gICAgICAvLyBJZiBzZWxlY3RvciBjaGFuZ2VkLCBjbGVhciBsb2FkaW5nIHN0YXRlIGFuZCBkaXNjYXJkIHJlc3VsdCBieSByZXR1cm5pbmcgZWFybHlcbiAgICAgIGlmIChzZWxlY3RvciAhPT0gYnVpbGRTZWxlY3Rvcih0aGlzLnN0YXRlLmxhYmVscykpIHtcbiAgICAgICAgaWYgKGxhc3RGYWNldHRlZCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZShsYXN0RmFjZXR0ZWQsIHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHBvc3NpYmxlTGFiZWxzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBgRW1wdHkgcmVzdWx0cywgbm8gbWF0Y2hpbmcgbGFiZWwgZm9yICR7c2VsZWN0b3J9YCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbGFiZWxzOiBTZWxlY3RhYmxlTGFiZWxbXSA9IGZhY2V0TGFiZWxzKHRoaXMuc3RhdGUubGFiZWxzLCBwb3NzaWJsZUxhYmVscywgbGFzdEZhY2V0dGVkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbHMsIGVycm9yOiAnJyB9KTtcbiAgICAgIGlmIChsYXN0RmFjZXR0ZWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKGxhc3RGYWNldHRlZCwgeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGVTZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZVByb3ZpZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uU3RhdHVzOiBgVmFsaWRhdGluZyBzZWxlY3RvciAke3NlbGVjdG9yfWAsIGVycm9yOiAnJyB9KTtcbiAgICBjb25zdCBzdHJlYW1zID0gYXdhaXQgbGFuZ3VhZ2VQcm92aWRlci5mZXRjaFNlcmllcyhzZWxlY3Rvcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25TdGF0dXM6IGBTZWxlY3RvciBpcyB2YWxpZCAoJHtzdHJlYW1zLmxlbmd0aH0gc3RyZWFtcyBmb3VuZClgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsYWJlbHMsIHNlYXJjaFRlcm0sIHN0YXR1cywgZXJyb3IsIHZhbGlkYXRpb25TdGF0dXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGxhYmVscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nIGxhYmVscy4uLlwiIC8+O1xuICAgIH1cbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModGhlbWUpO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYnVpbGRTZWxlY3Rvcih0aGlzLnN0YXRlLmxhYmVscyk7XG4gICAgY29uc3QgZW1wdHkgPSBzZWxlY3RvciA9PT0gRU1QVFlfU0VMRUNUT1I7XG5cbiAgICBsZXQgc2VsZWN0ZWRMYWJlbHMgPSBsYWJlbHMuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwuc2VsZWN0ZWQgJiYgbGFiZWwudmFsdWVzKTtcbiAgICBpZiAoc2VhcmNoVGVybSkge1xuICAgICAgc2VsZWN0ZWRMYWJlbHMgPSBzZWxlY3RlZExhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBsYWJlbC52YWx1ZXMhLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAvLyBBbHdheXMgcmV0dXJuIHNlbGVjdGVkIHZhbHVlc1xuICAgICAgICAgIGlmICh2YWx1ZS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdmFsdWUuaGlnaGxpZ2h0UGFydHMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZnV6enlNYXRjaFJlc3VsdCA9IGZ1enp5TWF0Y2godmFsdWUubmFtZS50b0xvd2VyQ2FzZSgpLCBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGlmIChmdXp6eU1hdGNoUmVzdWx0LmZvdW5kKSB7XG4gICAgICAgICAgICB2YWx1ZS5oaWdobGlnaHRQYXJ0cyA9IGZ1enp5TWF0Y2hSZXN1bHQucmFuZ2VzO1xuICAgICAgICAgICAgdmFsdWUub3JkZXIgPSBmdXp6eU1hdGNoUmVzdWx0LmRpc3RhbmNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmxhYmVsLFxuICAgICAgICAgIHZhbHVlczogc29ydEJ5KHNlYXJjaFJlc3VsdHMsICh2YWx1ZSkgPT4gKHZhbHVlLnNlbGVjdGVkID8gLUluZmluaXR5IDogdmFsdWUub3JkZXIpKSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbGVhciBoaWdobGlnaHQgcGFydHMgd2hlbiBzZWFyY2hUZXJtIGlzIGNsZWFyZWRcbiAgICAgIHNlbGVjdGVkTGFiZWxzID0gdGhpcy5zdGF0ZS5sYWJlbHNcbiAgICAgICAgLmZpbHRlcigobGFiZWwpID0+IGxhYmVsLnNlbGVjdGVkICYmIGxhYmVsLnZhbHVlcylcbiAgICAgICAgLm1hcCgobGFiZWwpID0+ICh7XG4gICAgICAgICAgLi4ubGFiZWwsXG4gICAgICAgICAgdmFsdWVzOiBsYWJlbD8udmFsdWVzID8gbGFiZWwudmFsdWVzLm1hcCgodmFsdWUpID0+ICh7IC4uLnZhbHVlLCBoaWdobGlnaHRQYXJ0czogdW5kZWZpbmVkIH0pKSA6IFtdLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgPExhYmVsIGRlc2NyaXB0aW9uPVwiV2hpY2ggbGFiZWxzIHdvdWxkIHlvdSBsaWtlIHRvIGNvbnNpZGVyIGZvciB5b3VyIHNlYXJjaD9cIj5cbiAgICAgICAgICAgIDEuIFNlbGVjdCBsYWJlbHMgdG8gc2VhcmNoIGluXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsKSA9PiAoXG4gICAgICAgICAgICAgIDxMb2tpTGFiZWxcbiAgICAgICAgICAgICAgICBrZXk9e2xhYmVsLm5hbWV9XG4gICAgICAgICAgICAgICAgbmFtZT17bGFiZWwubmFtZX1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsYWJlbC5sb2FkaW5nfVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17bGFiZWwuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgaGlkZGVuPXtsYWJlbC5oaWRkZW59XG4gICAgICAgICAgICAgICAgZmFjZXRzPXtsYWJlbC5mYWNldHN9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrTGFiZWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgPExhYmVsIGRlc2NyaXB0aW9uPVwiQ2hvb3NlIHRoZSBsYWJlbCB2YWx1ZXMgdGhhdCB5b3Ugd291bGQgbGlrZSB0byB1c2UgZm9yIHRoZSBxdWVyeS4gVXNlIHRoZSBzZWFyY2ggZmllbGQgdG8gZmluZCB2YWx1ZXMgYWNyb3NzIHNlbGVjdGVkIGxhYmVscy5cIj5cbiAgICAgICAgICAgIDIuIEZpbmQgdmFsdWVzIGZvciB0aGUgc2VsZWN0ZWQgbGFiZWxzXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VhcmNofSBhcmlhLWxhYmVsPVwiRmlsdGVyIGV4cHJlc3Npb24gZm9yIHZhbHVlc1wiIHZhbHVlPXtzZWFyY2hUZXJtfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVMaXN0QXJlYX0+XG4gICAgICAgICAgICB7c2VsZWN0ZWRMYWJlbHMubWFwKChsYWJlbCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJsaXN0XCIga2V5PXtsYWJlbC5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUxpc3RXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlVGl0bGV9IGFyaWEtbGFiZWw9e2BWYWx1ZXMgZm9yICR7bGFiZWwubmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxMb2tpTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bGFiZWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bGFiZWwubG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtsYWJlbC5zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtsYWJlbC5oaWRkZW59XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbm8gZmFjZXRzLCB3ZSB3YW50IHRvIHNob3cgbnVtYmVyIG9mIGFsbCBsYWJlbCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRzPXtsYWJlbC5mYWNldHMgfHwgbGFiZWwudmFsdWVzPy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja0xhYmVsfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgICBpdGVtQ291bnQ9e2xhYmVsLnZhbHVlcz8ubGVuZ3RoIHx8IDB9XG4gICAgICAgICAgICAgICAgICBpdGVtU2l6ZT17Mjh9XG4gICAgICAgICAgICAgICAgICBpdGVtS2V5PXsoaSkgPT4gKGxhYmVsLnZhbHVlcyBhcyBGYWNldHRhYmxlVmFsdWVbXSlbaV0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUxpc3R9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGFiZWwudmFsdWVzPy5baW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9raUxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2xhYmVsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt2YWx1ZT8uc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodFBhcnRzPXt2YWx1ZT8uaGlnaGxpZ2h0UGFydHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja1ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICA8TGFiZWw+My4gUmVzdWx0aW5nIHNlbGVjdG9yPC9MYWJlbD5cbiAgICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJzZWxlY3RvclwiIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdG9yfT5cbiAgICAgICAgICAgIHtzZWxlY3Rvcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dmFsaWRhdGlvblN0YXR1cyAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbGlkYXRpb25TdGF0dXN9Pnt2YWxpZGF0aW9uU3RhdHVzfTwvZGl2Pn1cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPEJ1dHRvbiBhcmlhLWxhYmVsPVwiVXNlIHNlbGVjdG9yIGFzIGxvZ3MgYnV0dG9uXCIgZGlzYWJsZWQ9e2VtcHR5fSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSdW5Mb2dzUXVlcnl9PlxuICAgICAgICAgICAgICBTaG93IGxvZ3NcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVXNlIHNlbGVjdG9yIGFzIG1ldHJpY3MgYnV0dG9uXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtlbXB0eX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrUnVuTWV0cmljc1F1ZXJ5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaG93IGxvZ3MgcmF0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJWYWxpZGF0ZSBzdWJtaXQgYnV0dG9uXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtlbXB0eX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrVmFsaWRhdGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZhbGlkYXRlIHNlbGVjdG9yXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gYXJpYS1sYWJlbD1cIlNlbGVjdG9yIGNsZWFyIGJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tDbGVhcn0+XG4gICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuc3RhdHVzLCAoc3RhdHVzIHx8IGVycm9yKSAmJiBzdHlsZXMuc3RhdHVzU2hvd2luZyl9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Vycm9yID8gc3R5bGVzLmVycm9yIDogJyd9PntlcnJvciB8fCBzdGF0dXN9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTG9raUxhYmVsQnJvd3NlciA9IHdpdGhUaGVtZTIoVW50aGVtZWRMb2tpTGFiZWxCcm93c2VyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBTbGF0ZVByaXNtLFxuICBUeXBlYWhlYWRPdXRwdXQsXG4gIFN1Z2dlc3Rpb25zU3RhdGUsXG4gIFF1ZXJ5RmllbGQsXG4gIFR5cGVhaGVhZElucHV0LFxuICBCcmFjZXNQbHVnaW4sXG4gIERPTVV0aWwsXG4gIEljb24sXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFBsdWdpbiwgTm9kZSB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IExva2lMYWJlbEJyb3dzZXIgfSBmcm9tICcuL0xva2lMYWJlbEJyb3dzZXInO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTG9raVF1ZXJ5LCBMb2tpT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IExhbmd1YWdlTWFwLCBsYW5ndWFnZXMgYXMgcHJpc21MYW5ndWFnZXMgfSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBMb2tpTGFuZ3VhZ2VQcm92aWRlciBmcm9tICcuLi9sYW5ndWFnZV9wcm92aWRlcic7XG5pbXBvcnQgeyBzaG91bGRSZWZyZXNoTGFiZWxzIH0gZnJvbSAnLi4vbGFuZ3VhZ2VfdXRpbHMnO1xuaW1wb3J0IHsgTG9raURhdGFzb3VyY2UgfSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0xvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXInO1xuXG5jb25zdCBMQVNUX1VTRURfTEFCRUxTX0tFWSA9ICdncmFmYW5hLmRhdGFzb3VyY2VzLmxva2kuYnJvd3Nlci5sYWJlbHMnO1xuXG5mdW5jdGlvbiBnZXRDaG9vc2VyVGV4dChoYXNTeW50YXg6IGJvb2xlYW4sIGhhc0xvZ0xhYmVsczogYm9vbGVhbikge1xuICBpZiAoIWhhc1N5bnRheCkge1xuICAgIHJldHVybiAnTG9hZGluZyBsYWJlbHMuLi4nO1xuICB9XG4gIGlmICghaGFzTG9nTGFiZWxzKSB7XG4gICAgcmV0dXJuICcoTm8gbG9ncyBmb3VuZCknO1xuICB9XG4gIHJldHVybiAnTG9nIGJyb3dzZXInO1xufVxuXG5mdW5jdGlvbiB3aWxsQXBwbHlTdWdnZXN0aW9uKHN1Z2dlc3Rpb246IHN0cmluZywgeyB0eXBlYWhlYWRDb250ZXh0LCB0eXBlYWhlYWRUZXh0IH06IFN1Z2dlc3Rpb25zU3RhdGUpOiBzdHJpbmcge1xuICAvLyBNb2RpZnkgc3VnZ2VzdGlvbiBiYXNlZCBvbiBjb250ZXh0XG4gIHN3aXRjaCAodHlwZWFoZWFkQ29udGV4dCkge1xuICAgIGNhc2UgJ2NvbnRleHQtbGFiZWxzJzoge1xuICAgICAgY29uc3QgbmV4dENoYXIgPSBET01VdGlsLmdldE5leHRDaGFyYWN0ZXIoKTtcbiAgICAgIGlmICghbmV4dENoYXIgfHwgbmV4dENoYXIgPT09ICd9JyB8fCBuZXh0Q2hhciA9PT0gJywnKSB7XG4gICAgICAgIHN1Z2dlc3Rpb24gKz0gJz0nO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAnY29udGV4dC1sYWJlbC12YWx1ZXMnOiB7XG4gICAgICAvLyBBbHdheXMgYWRkIHF1b3RlcyBhbmQgcmVtb3ZlIGV4aXN0aW5nIG9uZXMgaW5zdGVhZFxuICAgICAgaWYgKCF0eXBlYWhlYWRUZXh0Lm1hdGNoKC9eKCE/PX4/XCJ8XCIpLykpIHtcbiAgICAgICAgc3VnZ2VzdGlvbiA9IGBcIiR7c3VnZ2VzdGlvbn1gO1xuICAgICAgfVxuICAgICAgaWYgKERPTVV0aWwuZ2V0TmV4dENoYXJhY3RlcigpICE9PSAnXCInKSB7XG4gICAgICAgIHN1Z2dlc3Rpb24gPSBgJHtzdWdnZXN0aW9ufVwiYDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gIH1cbiAgcmV0dXJuIHN1Z2dlc3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9raVF1ZXJ5RmllbGRQcm9wcyBleHRlbmRzIFF1ZXJ5RWRpdG9yUHJvcHM8TG9raURhdGFzb3VyY2UsIExva2lRdWVyeSwgTG9raU9wdGlvbnM+IHtcbiAgRXh0cmFGaWVsZEVsZW1lbnQ/OiBSZWFjdE5vZGU7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAnZGF0YS10ZXN0aWQnPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgTG9raVF1ZXJ5RmllbGRTdGF0ZSB7XG4gIGxhYmVsc0xvYWRlZDogYm9vbGVhbjtcbiAgbGFiZWxCcm93c2VyVmlzaWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIExva2lRdWVyeUZpZWxkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxMb2tpUXVlcnlGaWVsZFByb3BzLCBMb2tpUXVlcnlGaWVsZFN0YXRlPiB7XG4gIHBsdWdpbnM6IFBsdWdpbltdO1xuICBfaXNNb3VudGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExva2lRdWVyeUZpZWxkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBsYWJlbHNMb2FkZWQ6IGZhbHNlLCBsYWJlbEJyb3dzZXJWaXNpYmxlOiBmYWxzZSB9O1xuXG4gICAgdGhpcy5wbHVnaW5zID0gW1xuICAgICAgQnJhY2VzUGx1Z2luKCksXG4gICAgICBTbGF0ZVByaXNtKFxuICAgICAgICB7XG4gICAgICAgICAgb25seUluOiAobm9kZTogTm9kZSkgPT4gbm9kZS5vYmplY3QgPT09ICdibG9jaycgJiYgbm9kZS50eXBlID09PSAnY29kZV9ibG9jaycsXG4gICAgICAgICAgZ2V0U3ludGF4OiAobm9kZTogTm9kZSkgPT4gJ2xvZ3FsJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAuLi4ocHJpc21MYW5ndWFnZXMgYXMgTGFuZ3VhZ2VNYXApLCBsb2dxbDogdGhpcy5wcm9wcy5kYXRhc291cmNlLmxhbmd1YWdlUHJvdmlkZXIuZ2V0U3ludGF4KCkgfVxuICAgICAgKSxcbiAgICBdO1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBhd2FpdCB0aGlzLnByb3BzLmRhdGFzb3VyY2UubGFuZ3VhZ2VQcm92aWRlci5zdGFydCgpO1xuICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbHNMb2FkZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBMb2tpUXVlcnlGaWVsZFByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgcmFuZ2UsXG4gICAgICBkYXRhc291cmNlOiB7IGxhbmd1YWdlUHJvdmlkZXIgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByZWZyZXNoTGFiZWxzID0gc2hvdWxkUmVmcmVzaExhYmVscyhyYW5nZSwgcHJldlByb3BzLnJhbmdlKTtcbiAgICAvLyBXZSB3YW50IHRvIHJlZnJlc2ggbGFiZWxzIHdoZW4gcmFuZ2UgY2hhbmdlcyAod2Ugcm91bmQgdXAgaW50ZXJ2YWxzIHRvIGEgbWludXRlKVxuICAgIGlmIChyZWZyZXNoTGFiZWxzKSB7XG4gICAgICBsYW5ndWFnZVByb3ZpZGVyLmZldGNoTGFiZWxzKCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2VMYWJlbEJyb3dzZXIgPSAoc2VsZWN0b3I6IHN0cmluZykgPT4ge1xuICAgIHRoaXMub25DaGFuZ2VRdWVyeShzZWxlY3RvciwgdHJ1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVsQnJvd3NlclZpc2libGU6IGZhbHNlIH0pO1xuICB9O1xuXG4gIG9uQ2hhbmdlUXVlcnkgPSAodmFsdWU6IHN0cmluZywgb3ZlcnJpZGU/OiBib29sZWFuKSA9PiB7XG4gICAgLy8gU2VuZCB0ZXh0IGNoYW5nZSB0byBwYXJlbnRcbiAgICBjb25zdCB7IHF1ZXJ5LCBvbkNoYW5nZSwgb25SdW5RdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IG5leHRRdWVyeSA9IHsgLi4ucXVlcnksIGV4cHI6IHZhbHVlIH07XG4gICAgICBvbkNoYW5nZShuZXh0UXVlcnkpO1xuXG4gICAgICBpZiAob3ZlcnJpZGUgJiYgb25SdW5RdWVyeSkge1xuICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG9uQ2xpY2tDaG9vc2VyQnV0dG9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyBsYWJlbEJyb3dzZXJWaXNpYmxlOiAhc3RhdGUubGFiZWxCcm93c2VyVmlzaWJsZSB9KSk7XG4gIH07XG5cbiAgb25UeXBlYWhlYWQgPSBhc3luYyAodHlwZWFoZWFkOiBUeXBlYWhlYWRJbnB1dCk6IFByb21pc2U8VHlwZWFoZWFkT3V0cHV0PiA9PiB7XG4gICAgY29uc3QgeyBkYXRhc291cmNlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkYXRhc291cmNlLmxhbmd1YWdlUHJvdmlkZXIpIHtcbiAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb25zOiBbXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IGxva2lMYW5ndWFnZVByb3ZpZGVyID0gZGF0YXNvdXJjZS5sYW5ndWFnZVByb3ZpZGVyIGFzIExva2lMYW5ndWFnZVByb3ZpZGVyO1xuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHByZWZpeCwgdGV4dCwgdmFsdWUsIHdyYXBwZXJDbGFzc2VzLCBsYWJlbEtleSB9ID0gdHlwZWFoZWFkO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbG9raUxhbmd1YWdlUHJvdmlkZXIucHJvdmlkZUNvbXBsZXRpb25JdGVtcyhcbiAgICAgIHsgdGV4dCwgdmFsdWUsIHByZWZpeCwgd3JhcHBlckNsYXNzZXMsIGxhYmVsS2V5IH0sXG4gICAgICB7IGhpc3RvcnkgfVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgRXh0cmFGaWVsZEVsZW1lbnQsXG4gICAgICBxdWVyeSxcbiAgICAgIGRhdGFzb3VyY2UsXG4gICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciBhIExva2kgcXVlcnkgKHJ1biB3aXRoIFNoaWZ0K0VudGVyKScsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IGxhYmVsc0xvYWRlZCwgbGFiZWxCcm93c2VyVmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBsb2tpTGFuZ3VhZ2VQcm92aWRlciA9IGRhdGFzb3VyY2UubGFuZ3VhZ2VQcm92aWRlciBhcyBMb2tpTGFuZ3VhZ2VQcm92aWRlcjtcbiAgICBjb25zdCBjbGVhblRleHQgPSBkYXRhc291cmNlLmxhbmd1YWdlUHJvdmlkZXIgPyBsb2tpTGFuZ3VhZ2VQcm92aWRlci5jbGVhblRleHQgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgaGFzTG9nTGFiZWxzID0gbG9raUxhbmd1YWdlUHJvdmlkZXIuZ2V0TGFiZWxLZXlzKCkubGVuZ3RoID4gMDtcbiAgICBjb25zdCBjaG9vc2VyVGV4dCA9IGdldENob29zZXJUZXh0KGxhYmVsc0xvYWRlZCwgaGFzTG9nTGFiZWxzKTtcbiAgICBjb25zdCBidXR0b25EaXNhYmxlZCA9ICEobGFiZWxzTG9hZGVkICYmIGhhc0xvZ0xhYmVscyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXI8c3RyaW5nW10+IHN0b3JhZ2VLZXk9e0xBU1RfVVNFRF9MQUJFTFNfS0VZfSBkZWZhdWx0VmFsdWU9e1tdfT5cbiAgICAgICAgeyhsYXN0VXNlZExhYmVscywgb25MYXN0VXNlZExhYmVsc1NhdmUsIG9uTGFzdFVzZWRMYWJlbHNEZWxldGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lIGdmLWZvcm0taW5saW5lLS14cy12aWV3LWZsZXgtY29sdW1uIGZsZXgtZ3Jvdy0xXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17dGhpcy5wcm9wc1snZGF0YS10ZXN0aWQnXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgcXVlcnkta2V5d29yZCBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja0Nob29zZXJCdXR0b259XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnV0dG9uRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2Nob29zZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17bGFiZWxCcm93c2VyVmlzaWJsZSA/ICdhbmdsZS1kb3duJyA6ICdhbmdsZS1yaWdodCd9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3cgZmxleC1zaHJpbmstMSBtaW4td2lkdGgtMTVcIj5cbiAgICAgICAgICAgICAgICAgIDxRdWVyeUZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxQbHVnaW5zPXt0aGlzLnBsdWdpbnN9XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVGV4dD17Y2xlYW5UZXh0fVxuICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnkuZXhwcn1cbiAgICAgICAgICAgICAgICAgICAgb25UeXBlYWhlYWQ9e3RoaXMub25UeXBlYWhlYWR9XG4gICAgICAgICAgICAgICAgICAgIG9uV2lsbEFwcGx5U3VnZ2VzdGlvbj17d2lsbEFwcGx5U3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnByb3BzLm9uQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgb25SdW5RdWVyeT17dGhpcy5wcm9wcy5vblJ1blF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIHBvcnRhbE9yaWdpbj1cImxva2lcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtsYWJlbEJyb3dzZXJWaXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDxMb2tpTGFiZWxCcm93c2VyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlUHJvdmlkZXI9e2xva2lMYW5ndWFnZVByb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUxhYmVsQnJvd3Nlcn1cbiAgICAgICAgICAgICAgICAgICAgbGFzdFVzZWRMYWJlbHM9e2xhc3RVc2VkTGFiZWxzIHx8IFtdfVxuICAgICAgICAgICAgICAgICAgICBzdG9yZUxhc3RVc2VkTGFiZWxzPXtvbkxhc3RVc2VkTGFiZWxzU2F2ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlTGFzdFVzZWRMYWJlbHM9e29uTGFzdFVzZWRMYWJlbHNEZWxldGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHtFeHRyYUZpZWxkRWxlbWVudH1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0xvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGltZVJhbmdlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmZ1bmN0aW9uIHJvdW5kTXNUb01pbihtaWxsaXNlY29uZHM6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiByb3VuZFNlY1RvTWluKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiByb3VuZFNlY1RvTWluKHNlY29uZHM6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRSZWZyZXNoTGFiZWxzKHJhbmdlPzogVGltZVJhbmdlLCBwcmV2UmFuZ2U/OiBUaW1lUmFuZ2UpOiBib29sZWFuIHtcbiAgaWYgKHJhbmdlICYmIHByZXZSYW5nZSkge1xuICAgIGNvbnN0IHNhbWVNaW51dGVGcm9tID0gcm91bmRNc1RvTWluKHJhbmdlLmZyb20udmFsdWVPZigpKSA9PT0gcm91bmRNc1RvTWluKHByZXZSYW5nZS5mcm9tLnZhbHVlT2YoKSk7XG4gICAgY29uc3Qgc2FtZU1pbnV0ZVRvID0gcm91bmRNc1RvTWluKHJhbmdlLnRvLnZhbHVlT2YoKSkgPT09IHJvdW5kTXNUb01pbihwcmV2UmFuZ2UudG8udmFsdWVPZigpKTtcbiAgICAvLyBJZiBib3RoIGFyZSBzYW1lLCBkb24ndCBuZWVkIHRvIHJlZnJlc2hcbiAgICByZXR1cm4gIShzYW1lTWludXRlRnJvbSAmJiBzYW1lTWludXRlVG8pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWF0U2hlZXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMiBpZD1cInRlbXBvLWNoZWF0LXNoZWV0XCI+VGVtcG8gQ2hlYXQgU2hlZXQ8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRlbXBvIGlzIGEgdHJhY2UgaWQgbG9va3VwIHN0b3JlLiBFbnRlciBhIHRyYWNlIGlkIGluIHRoZSBhYm92ZSBmaWVsZCBhbmQgaGl0IOKAnFJ1biBRdWVyeeKAnSB0byByZXRyaWV2ZSB5b3VyXG4gICAgICAgIHRyYWNlLiBUZW1wbyBpcyBnZW5lcmFsbHkgcGFpcmVkIHdpdGggb3RoZXIgZGF0YXNvdXJjZXMgc3VjaCBhcyBMb2tpIG9yIFByb21ldGhldXMgdG8gZmluZCB0cmFjZXMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSGVyZSBhcmUgc29tZXsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dyYWZhbmEuY29tL2RvY3MvdGVtcG8vbGF0ZXN0L2d1aWRlcy9pbnN0cnVtZW50YXRpb24vXCIgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICBpbnN0cnVtZW50YXRpb24gZXhhbXBsZXNcbiAgICAgICAgPC9hPnsnICd9XG4gICAgICAgIHRvIGdldCB5b3Ugc3RhcnRlZCB3aXRoIHRyYWNlIGRpc2NvdmVyeSB0aHJvdWdoIGxvZ3MgYW5kIG1ldHJpY3MgKGV4ZW1wbGFycykuXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBJbmxpbmVGaWVsZFJvdyxcbiAgSW5saW5lRmllbGQsXG4gIElucHV0LFxuICBRdWVyeUZpZWxkLFxuICBTbGF0ZVByaXNtLFxuICBCcmFjZXNQbHVnaW4sXG4gIFR5cGVhaGVhZElucHV0LFxuICBUeXBlYWhlYWRPdXRwdXQsXG4gIEFzeW5jU2VsZWN0LFxuICBBbGVydCxcbiAgdXNlU3R5bGVzMixcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdG9rZW5pemVyIH0gZnJvbSAnLi4vc3ludGF4JztcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaXNWYWxpZEdvRHVyYXRpb24sIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IFRlbXBvTGFuZ3VhZ2VQcm92aWRlciBmcm9tICcuLi9sYW5ndWFnZV9wcm92aWRlcic7XG5pbXBvcnQgeyBUZW1wb0RhdGFzb3VyY2UsIFRlbXBvUXVlcnkgfSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnYXBwL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGFzb3VyY2U6IFRlbXBvRGF0YXNvdXJjZTtcbiAgcXVlcnk6IFRlbXBvUXVlcnk7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IFRlbXBvUXVlcnkpID0+IHZvaWQ7XG4gIG9uQmx1cj86ICgpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcnk6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFBSSVNNX0xBTkdVQUdFID0gJ3RlbXBvJztcbmNvbnN0IGR1cmF0aW9uUGxhY2Vob2xkZXIgPSAnZS5nLiAxLjJzLCAxMDBtcyc7XG5jb25zdCBwbHVnaW5zID0gW1xuICBCcmFjZXNQbHVnaW4oKSxcbiAgU2xhdGVQcmlzbSh7XG4gICAgb25seUluOiAobm9kZTogTm9kZSkgPT4gbm9kZS5vYmplY3QgPT09ICdibG9jaycgJiYgbm9kZS50eXBlID09PSAnY29kZV9ibG9jaycsXG4gICAgZ2V0U3ludGF4OiAoKSA9PiBQUklTTV9MQU5HVUFHRSxcbiAgfSksXG5dO1xuXG5QcmlzbS5sYW5ndWFnZXNbUFJJU01fTEFOR1VBR0VdID0gdG9rZW5pemVyO1xuXG5jb25zdCBOYXRpdmVTZWFyY2ggPSAoeyBkYXRhc291cmNlLCBxdWVyeSwgb25DaGFuZ2UsIG9uQmx1ciwgb25SdW5RdWVyeSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGxhbmd1YWdlUHJvdmlkZXIgPSB1c2VNZW1vKCgpID0+IG5ldyBUZW1wb0xhbmd1YWdlUHJvdmlkZXIoZGF0YXNvdXJjZSksIFtkYXRhc291cmNlXSk7XG4gIGNvbnN0IFtoYXNTeW50YXhMb2FkZWQsIHNldEhhc1N5bnRheExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthc3luY1NlcnZpY2VOYW1lVmFsdWUsIHNldEFzeW5jU2VydmljZU5hbWVWYWx1ZV0gPSB1c2VTdGF0ZTxTZWxlY3RhYmxlVmFsdWU8YW55Pj4oe1xuICAgIHZhbHVlOiAnJyxcbiAgfSk7XG4gIGNvbnN0IFthc3luY1NwYW5OYW1lVmFsdWUsIHNldEFzeW5jU3Bhbk5hbWVWYWx1ZV0gPSB1c2VTdGF0ZTxTZWxlY3RhYmxlVmFsdWU8YW55Pj4oe1xuICAgIHZhbHVlOiAnJyxcbiAgfSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbnB1dEVycm9ycywgc2V0SW5wdXRFcnJvcnNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0+KHt9KTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPHtcbiAgICBzZXJ2aWNlTmFtZTogYm9vbGVhbjtcbiAgICBzcGFuTmFtZTogYm9vbGVhbjtcbiAgfT4oe1xuICAgIHNlcnZpY2VOYW1lOiBmYWxzZSxcbiAgICBzcGFuTmFtZTogZmFsc2UsXG4gIH0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoT3B0aW9uc0NhbGxiYWNrKG5hbWVUeXBlOiBzdHJpbmcsIGxwOiBUZW1wb0xhbmd1YWdlUHJvdmlkZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgbHAuZ2V0T3B0aW9ucyhuYW1lVHlwZSA9PT0gJ3NlcnZpY2VOYW1lJyA/ICdzZXJ2aWNlLm5hbWUnIDogJ25hbWUnKTtcbiAgICAgIHNldElzTG9hZGluZygocHJldlZhbHVlKSA9PiAoeyAuLi5wcmV2VmFsdWUsIFtuYW1lVHlwZV06IGZhbHNlIH0pKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcj8uc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKChwcmV2VmFsdWUpID0+ICh7IC4uLnByZXZWYWx1ZSwgW25hbWVUeXBlXTogZmFsc2UgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdFcnJvcicsIGVycm9yKSkpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoKHByZXZWYWx1ZSkgPT4gKHsgLi4ucHJldlZhbHVlLCBbbmFtZVR5cGVdOiBmYWxzZSB9KSk7XG4gICAgICB9XG4gICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9hZE9wdGlvbnNPZlR5cGUgPSB1c2VDYWxsYmFjayhcbiAgICAobmFtZVR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKChwcmV2VmFsdWUpID0+ICh7IC4uLnByZXZWYWx1ZSwgW25hbWVUeXBlXTogdHJ1ZSB9KSk7XG4gICAgICByZXR1cm4gZmV0Y2hPcHRpb25zQ2FsbGJhY2sobmFtZVR5cGUsIGxhbmd1YWdlUHJvdmlkZXIpO1xuICAgIH0sXG4gICAgW2xhbmd1YWdlUHJvdmlkZXJdXG4gICk7XG5cbiAgY29uc3QgZmV0Y2hPcHRpb25zT2ZUeXBlID0gdXNlQ2FsbGJhY2soXG4gICAgKG5hbWVUeXBlOiBzdHJpbmcpID0+IGRlYm91bmNlKCgpID0+IGxvYWRPcHRpb25zT2ZUeXBlKG5hbWVUeXBlKSwgNTAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pLFxuICAgIFtsb2FkT3B0aW9uc09mVHlwZV1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoT3B0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGxhbmd1YWdlUHJvdmlkZXIuc3RhcnQoKTtcbiAgICAgICAgZmV0Y2hPcHRpb25zQ2FsbGJhY2soJ3NlcnZpY2VOYW1lJywgbGFuZ3VhZ2VQcm92aWRlcik7XG4gICAgICAgIGZldGNoT3B0aW9uc0NhbGxiYWNrKCdzcGFuTmFtZScsIGxhbmd1YWdlUHJvdmlkZXIpO1xuICAgICAgICBzZXRIYXNTeW50YXhMb2FkZWQodHJ1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBEaXNwbGF5IG1lc3NhZ2UgaWYgVGVtcG8gaXMgY29ubmVjdGVkIGJ1dCBzZWFyY2ggNDA0J3NcbiAgICAgICAgaWYgKGVycm9yPy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oJ0Vycm9yJywgZXJyb3IpKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SGFzU3ludGF4TG9hZGVkKHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hPcHRpb25zKCk7XG4gIH0sIFtsYW5ndWFnZVByb3ZpZGVyLCBmZXRjaE9wdGlvbnNPZlR5cGVdKTtcblxuICBjb25zdCBvblR5cGVhaGVhZCA9IGFzeW5jICh0eXBlYWhlYWQ6IFR5cGVhaGVhZElucHV0KTogUHJvbWlzZTxUeXBlYWhlYWRPdXRwdXQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgbGFuZ3VhZ2VQcm92aWRlci5wcm92aWRlQ29tcGxldGlvbkl0ZW1zKHR5cGVhaGVhZCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYW5UZXh0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHNwbGl0dGVkVGV4dCA9IHRleHQuc3BsaXQoL1xccysoPz0oW15cIl0qXCJbXlwiXSpcIikqW15cIl0qJCkvZyk7XG4gICAgaWYgKHNwbGl0dGVkVGV4dC5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gc3BsaXR0ZWRUZXh0W3NwbGl0dGVkVGV4dC5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgY29uc3Qgb25LZXlEb3duID0gKGtleUV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGtleUV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiAoa2V5RXZlbnQuc2hpZnRLZXkgfHwga2V5RXZlbnQuY3RybEtleSkpIHtcbiAgICAgIG9uUnVuUXVlcnkoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiU2VydmljZSBOYW1lXCIgbGFiZWxXaWR0aD17MTR9IGdyb3c+XG4gICAgICAgICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgICAgICAgaW5wdXRJZD1cInNlcnZpY2VcIlxuICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgIGNhY2hlT3B0aW9ucz17ZmFsc2V9XG4gICAgICAgICAgICAgIGxvYWRPcHRpb25zPXtmZXRjaE9wdGlvbnNPZlR5cGUoJ3NlcnZpY2VOYW1lJyl9XG4gICAgICAgICAgICAgIG9uT3Blbk1lbnU9e2ZldGNoT3B0aW9uc09mVHlwZSgnc2VydmljZU5hbWUnKX1cbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmcuc2VydmljZU5hbWV9XG4gICAgICAgICAgICAgIHZhbHVlPXthc3luY1NlcnZpY2VOYW1lVmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFzeW5jU2VydmljZU5hbWVWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB2Py52YWx1ZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgc2VydmljZVwiXG4gICAgICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXsnc2VsZWN0LXNlcnZpY2UtbmFtZSd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJTcGFuIE5hbWVcIiBsYWJlbFdpZHRoPXsxNH0gZ3Jvdz5cbiAgICAgICAgICAgIDxBc3luY1NlbGVjdFxuICAgICAgICAgICAgICBpbnB1dElkPVwic3Bhbk5hbWVcIlxuICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgIGNhY2hlT3B0aW9ucz17ZmFsc2V9XG4gICAgICAgICAgICAgIGxvYWRPcHRpb25zPXtmZXRjaE9wdGlvbnNPZlR5cGUoJ3NwYW5OYW1lJyl9XG4gICAgICAgICAgICAgIG9uT3Blbk1lbnU9e2ZldGNoT3B0aW9uc09mVHlwZSgnc3Bhbk5hbWUnKX1cbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmcuc3Bhbk5hbWV9XG4gICAgICAgICAgICAgIHZhbHVlPXthc3luY1NwYW5OYW1lVmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFzeW5jU3Bhbk5hbWVWYWx1ZSh7IHZhbHVlOiB2IH0pO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgc3Bhbk5hbWU6IHY/LnZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBzcGFuXCJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnNcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9eydzZWxlY3Qtc3Bhbi1uYW1lJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlRhZ3NcIiBsYWJlbFdpZHRoPXsxNH0gZ3JvdyB0b29sdGlwPVwiVmFsdWVzIHNob3VsZCBiZSBpbiB0aGUgbG9nZm10IGZvcm1hdC5cIj5cbiAgICAgICAgICAgIDxRdWVyeUZpZWxkXG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxQbHVnaW5zPXtwbHVnaW5zfVxuICAgICAgICAgICAgICBxdWVyeT17cXVlcnkuc2VhcmNofVxuICAgICAgICAgICAgICBvblR5cGVhaGVhZD17b25UeXBlYWhlYWR9XG4gICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgICBzZWFyY2g6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHAuc3RhdHVzX2NvZGU9MjAwIGVycm9yPXRydWVcIlxuICAgICAgICAgICAgICBjbGVhblRleHQ9e2NsZWFuVGV4dH1cbiAgICAgICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICAgICAgc3ludGF4TG9hZGVkPXtoYXNTeW50YXhMb2FkZWR9XG4gICAgICAgICAgICAgIHBvcnRhbE9yaWdpbj1cInRlbXBvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIk1pbiBEdXJhdGlvblwiIGludmFsaWQ9eyEhaW5wdXRFcnJvcnMubWluRHVyYXRpb259IGxhYmVsV2lkdGg9ezE0fSBncm93PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwibWluRHVyYXRpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkubWluRHVyYXRpb24gfHwgJyd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkdXJhdGlvblBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnkubWluRHVyYXRpb24gJiYgIWlzVmFsaWRHb0R1cmF0aW9uKHF1ZXJ5Lm1pbkR1cmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgc2V0SW5wdXRFcnJvcnMoeyAuLi5pbnB1dEVycm9ycywgbWluRHVyYXRpb246IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldElucHV0RXJyb3JzKHsgLi4uaW5wdXRFcnJvcnMsIG1pbkR1cmF0aW9uOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgIG1pbkR1cmF0aW9uOiB2LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIk1heCBEdXJhdGlvblwiIGludmFsaWQ9eyEhaW5wdXRFcnJvcnMubWF4RHVyYXRpb259IGxhYmVsV2lkdGg9ezE0fSBncm93PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwibWF4RHVyYXRpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkubWF4RHVyYXRpb24gfHwgJyd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkdXJhdGlvblBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnkubWF4RHVyYXRpb24gJiYgIWlzVmFsaWRHb0R1cmF0aW9uKHF1ZXJ5Lm1heER1cmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgc2V0SW5wdXRFcnJvcnMoeyAuLi5pbnB1dEVycm9ycywgbWF4RHVyYXRpb246IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldElucHV0RXJyb3JzKHsgLi4uaW5wdXRFcnJvcnMsIG1heER1cmF0aW9uOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgIG1heER1cmF0aW9uOiB2LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJMaW1pdFwiXG4gICAgICAgICAgICBpbnZhbGlkPXshIWlucHV0RXJyb3JzLmxpbWl0fVxuICAgICAgICAgICAgbGFiZWxXaWR0aD17MTR9XG4gICAgICAgICAgICBncm93XG4gICAgICAgICAgICB0b29sdGlwPVwiTWF4aW11bSBudW1iZXJzIG9mIHJldHVybmVkIHJlc3VsdHNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cImxpbWl0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LmxpbWl0IHx8ICcnfVxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpbWl0ID0gdi5jdXJyZW50VGFyZ2V0LnZhbHVlID8gcGFyc2VJbnQodi5jdXJyZW50VGFyZ2V0LnZhbHVlLCAxMCkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGxpbWl0ICYmICghTnVtYmVyLmlzSW50ZWdlcihsaW1pdCkgfHwgbGltaXQgPD0gMCkpIHtcbiAgICAgICAgICAgICAgICAgIHNldElucHV0RXJyb3JzKHsgLi4uaW5wdXRFcnJvcnMsIGxpbWl0OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZXRJbnB1dEVycm9ycyh7IC4uLmlucHV0RXJyb3JzLCBsaW1pdDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgICBsaW1pdDogdi5jdXJyZW50VGFyZ2V0LnZhbHVlID8gcGFyc2VJbnQodi5jdXJyZW50VGFyZ2V0LnZhbHVlLCAxMCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZXJyb3IgPyAoXG4gICAgICAgIDxBbGVydCB0aXRsZT1cIlVuYWJsZSB0byBjb25uZWN0IHRvIFRlbXBvIHNlYXJjaFwiIHNldmVyaXR5PVwiaW5mb1wiIGNsYXNzTmFtZT17c3R5bGVzLmFsZXJ0fT5cbiAgICAgICAgICBQbGVhc2UgZW5zdXJlIHRoYXQgVGVtcG8gaXMgY29uZmlndXJlZCB3aXRoIHNlYXJjaCBlbmFibGVkLiBJZiB5b3Ugd291bGQgbGlrZSB0byBoaWRlIHRoaXMgdGFiLCB5b3UgY2FuXG4gICAgICAgICAgY29uZmlndXJlIGl0IGluIHRoZSA8YSBocmVmPXtgL2RhdGFzb3VyY2VzL2VkaXQvJHtkYXRhc291cmNlLnVpZH1gfT5kYXRhc291cmNlIHNldHRpbmdzPC9hPi5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF0aXZlU2VhcmNoO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIGAsXG4gIGFsZXJ0OiBjc3NgXG4gICAgbWF4LXdpZHRoOiA3NWNoO1xuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBRdWVyeUVkaXRvclByb3BzLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHtcbiAgQmFkZ2UsXG4gIEZpbGVEcm9wem9uZSxcbiAgSW5saW5lRmllbGQsXG4gIElubGluZUZpZWxkUm93LFxuICBJbmxpbmVMYWJlbCxcbiAgUXVlcnlGaWVsZCxcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgVGhlbWVhYmxlMixcbiAgd2l0aFRoZW1lMixcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExva2lRdWVyeUZpZWxkIH0gZnJvbSAnLi4vLi4vbG9raS9jb21wb25lbnRzL0xva2lRdWVyeUZpZWxkJztcbmltcG9ydCB7IExva2lRdWVyeSB9IGZyb20gJy4uLy4uL2xva2kvdHlwZXMnO1xuaW1wb3J0IHsgVGVtcG9EYXRhc291cmNlLCBUZW1wb1F1ZXJ5LCBUZW1wb1F1ZXJ5VHlwZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgTG9raURhdGFzb3VyY2UgfSBmcm9tICcuLi8uLi9sb2tpL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHVzZUFzeW5jIGZyb20gJ3JlYWN0LXVzZS9saWIvdXNlQXN5bmMnO1xuaW1wb3J0IE5hdGl2ZVNlYXJjaCBmcm9tICcuL05hdGl2ZVNlYXJjaCc7XG5pbXBvcnQgeyBnZXREUyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU2VydmljZUdyYXBoU2VjdGlvbiB9IGZyb20gJy4vU2VydmljZUdyYXBoU2VjdGlvbic7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFF1ZXJ5RWRpdG9yUHJvcHM8VGVtcG9EYXRhc291cmNlLCBUZW1wb1F1ZXJ5PiwgVGhlbWVhYmxlMiB7fVxuXG5jb25zdCBERUZBVUxUX1FVRVJZX1RZUEU6IFRlbXBvUXVlcnlUeXBlID0gJ3RyYWNlSWQnO1xuXG5jbGFzcyBUZW1wb1F1ZXJ5RmllbGRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFNldCBpbml0aWFsIHF1ZXJ5IHR5cGUgdG8gZW5zdXJlIHRyYWNlSUQgZmllbGQgYXBwZWFyc1xuICAgIGlmICghdGhpcy5wcm9wcy5xdWVyeS5xdWVyeVR5cGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAuLi50aGlzLnByb3BzLnF1ZXJ5LFxuICAgICAgICBxdWVyeVR5cGU6IERFRkFVTFRfUVVFUllfVFlQRSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlTGlua2VkUXVlcnkgPSAodmFsdWU6IExva2lRdWVyeSkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnksIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgbGlua2VkUXVlcnk6IHsgLi4udmFsdWUsIHJlZklkOiAnbGlua2VkJyB9LFxuICAgIH0pO1xuICB9O1xuXG4gIG9uUnVuTGlua2VkUXVlcnkgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblJ1blF1ZXJ5KCk7XG4gIH07XG5cbiAgb25DbGVhclJlc3VsdHMgPSAoKSA9PiB7XG4gICAgLy8gUnVuIGNsZWFyIHF1ZXJ5IHRvIGNsZWFyIHJlc3VsdHNcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBxdWVyeSwgb25SdW5RdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHF1ZXJ5VHlwZTogJ2NsZWFyJyxcbiAgICB9KTtcbiAgICBvblJ1blF1ZXJ5KCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcXVlcnksIG9uQ2hhbmdlLCBkYXRhc291cmNlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgbG9nc0RhdGFzb3VyY2VVaWQgPSBkYXRhc291cmNlLmdldExva2lTZWFyY2hEUygpO1xuXG4gICAgY29uc3QgZ3JhcGhEYXRhc291cmNlVWlkID0gZGF0YXNvdXJjZS5zZXJ2aWNlTWFwPy5kYXRhc291cmNlVWlkO1xuXG4gICAgY29uc3QgcXVlcnlUeXBlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFRlbXBvUXVlcnlUeXBlPj4gPSBbXG4gICAgICB7IHZhbHVlOiAndHJhY2VJZCcsIGxhYmVsOiAnVHJhY2VJRCcgfSxcbiAgICAgIHsgdmFsdWU6ICd1cGxvYWQnLCBsYWJlbDogJ0pTT04gZmlsZScgfSxcbiAgICBdO1xuXG4gICAgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy50ZW1wb1NlcnZpY2VHcmFwaCkge1xuICAgICAgcXVlcnlUeXBlT3B0aW9ucy5wdXNoKHsgdmFsdWU6ICdzZXJ2aWNlTWFwJywgbGFiZWw6ICdTZXJ2aWNlIEdyYXBoJyB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmZlYXR1cmVUb2dnbGVzLnRlbXBvU2VhcmNoICYmICFkYXRhc291cmNlPy5zZWFyY2g/LmhpZGUpIHtcbiAgICAgIHF1ZXJ5VHlwZU9wdGlvbnMudW5zaGlmdCh7IHZhbHVlOiAnbmF0aXZlU2VhcmNoJywgbGFiZWw6ICdTZWFyY2ggLSBCZXRhJyB9KTtcbiAgICB9XG5cbiAgICBpZiAobG9nc0RhdGFzb3VyY2VVaWQpIHtcbiAgICAgIGlmICghY29uZmlnLmZlYXR1cmVUb2dnbGVzLnRlbXBvU2VhcmNoKSB7XG4gICAgICAgIC8vIFBsYWNlIGF0IGJlZ2lubmluZyBhcyBTZWFyY2ggaWYgbm8gbmF0aXZlIHNlYXJjaFxuICAgICAgICBxdWVyeVR5cGVPcHRpb25zLnVuc2hpZnQoeyB2YWx1ZTogJ3NlYXJjaCcsIGxhYmVsOiAnU2VhcmNoJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBsYWNlIGF0IGVuZCBhcyBMb2tpIFNlYXJjaCBpZiBuYXRpdmUgc2VhcmNoIGlzIGVuYWJsZWRcbiAgICAgICAgcXVlcnlUeXBlT3B0aW9ucy5wdXNoKHsgdmFsdWU6ICdzZWFyY2gnLCBsYWJlbDogJ0xva2kgU2VhcmNoJyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlF1ZXJ5IHR5cGVcIj5cbiAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwPFRlbXBvUXVlcnlUeXBlPlxuICAgICAgICAgICAgICBvcHRpb25zPXtxdWVyeVR5cGVPcHRpb25zfVxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkucXVlcnlUeXBlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xlYXJSZXN1bHRzKCk7XG5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogdixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICAge3F1ZXJ5LnF1ZXJ5VHlwZSA9PT0gJ25hdGl2ZVNlYXJjaCcgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6ICc2NWNoJyB9fT5cbiAgICAgICAgICAgIDxCYWRnZSBpY29uPVwicm9ja2V0XCIgdGV4dD1cIkJldGFcIiBjb2xvcj1cImJsdWVcIiAvPlxuICAgICAgICAgICAge2NvbmZpZy5mZWF0dXJlVG9nZ2xlcy50ZW1wb0JhY2tlbmRTZWFyY2ggPyAoXG4gICAgICAgICAgICAgIDw+Jm5ic3A7VGVtcG8gc2VhcmNoIGlzIGN1cnJlbnRseSBpbiBiZXRhLjwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAmbmJzcDtUZW1wbyBzZWFyY2ggaXMgY3VycmVudGx5IGluIGJldGEgYW5kIGlzIGRlc2lnbmVkIHRvIHJldHVybiByZWNlbnQgdHJhY2VzIG9ubHkuIEl0IGlnbm9yZXMgdGhlXG4gICAgICAgICAgICAgICAgdGltZSByYW5nZSBwaWNrZXIuIFdlIGFyZSBhY3RpdmVseSB3b3JraW5nIG9uIGZ1bGwgYmFja2VuZCBzZWFyY2guIExvb2sgZm9yIGltcHJvdmVtZW50cyBpbiB0aGUgbmVhclxuICAgICAgICAgICAgICAgIGZ1dHVyZSFcbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7cXVlcnkucXVlcnlUeXBlID09PSAnc2VhcmNoJyAmJiAoXG4gICAgICAgICAgPFNlYXJjaFNlY3Rpb25cbiAgICAgICAgICAgIGxvZ3NEYXRhc291cmNlVWlkPXtsb2dzRGF0YXNvdXJjZVVpZH1cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgIG9uUnVuUXVlcnk9e3RoaXMub25SdW5MaW5rZWRRdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlTGlua2VkUXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3F1ZXJ5LnF1ZXJ5VHlwZSA9PT0gJ25hdGl2ZVNlYXJjaCcgJiYgKFxuICAgICAgICAgIDxOYXRpdmVTZWFyY2hcbiAgICAgICAgICAgIGRhdGFzb3VyY2U9e3RoaXMucHJvcHMuZGF0YXNvdXJjZX1cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgICAgICBvblJ1blF1ZXJ5PXt0aGlzLnByb3BzLm9uUnVuUXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3F1ZXJ5LnF1ZXJ5VHlwZSA9PT0gJ3VwbG9hZCcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyBwYWRkaW5nOiB0aGlzLnByb3BzLnRoZW1lLnNwYWNpbmcoMikgfSl9PlxuICAgICAgICAgICAgPEZpbGVEcm9wem9uZVxuICAgICAgICAgICAgICBvcHRpb25zPXt7IG11bHRpcGxlOiBmYWxzZSB9fVxuICAgICAgICAgICAgICBvbkxvYWQ9eyhyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGFzb3VyY2UudXBsb2FkZWRKc29uID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25SdW5RdWVyeSgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3F1ZXJ5LnF1ZXJ5VHlwZSA9PT0gJ3RyYWNlSWQnICYmIChcbiAgICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJUcmFjZSBJRFwiIGxhYmVsV2lkdGg9ezE0fSBncm93PlxuICAgICAgICAgICAgICA8UXVlcnlGaWVsZFxuICAgICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeS5xdWVyeX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAndHJhY2VJZCcsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtlZFF1ZXJ5OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgICAgICAgICAgb25SdW5RdWVyeT17dGhpcy5wcm9wcy5vblJ1blF1ZXJ5fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnRW50ZXIgYSBUcmFjZSBJRCAocnVuIHdpdGggU2hpZnQrRW50ZXIpJ31cbiAgICAgICAgICAgICAgICBwb3J0YWxPcmlnaW49XCJ0ZW1wb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgICl9XG4gICAgICAgIHtxdWVyeS5xdWVyeVR5cGUgPT09ICdzZXJ2aWNlTWFwJyAmJiAoXG4gICAgICAgICAgPFNlcnZpY2VHcmFwaFNlY3Rpb24gZ3JhcGhEYXRhc291cmNlVWlkPXtncmFwaERhdGFzb3VyY2VVaWR9IHF1ZXJ5PXtxdWVyeX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgU2VhcmNoU2VjdGlvblByb3BzIHtcbiAgbG9nc0RhdGFzb3VyY2VVaWQ/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IExva2lRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyeTogKCkgPT4gdm9pZDtcbiAgcXVlcnk6IFRlbXBvUXVlcnk7XG59XG5mdW5jdGlvbiBTZWFyY2hTZWN0aW9uKHsgbG9nc0RhdGFzb3VyY2VVaWQsIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5LCBxdWVyeSB9OiBTZWFyY2hTZWN0aW9uUHJvcHMpIHtcbiAgY29uc3QgZHNTdGF0ZSA9IHVzZUFzeW5jKCgpID0+IGdldERTKGxvZ3NEYXRhc291cmNlVWlkKSwgW2xvZ3NEYXRhc291cmNlVWlkXSk7XG4gIGlmIChkc1N0YXRlLmxvYWRpbmcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGRzID0gZHNTdGF0ZS52YWx1ZSBhcyBMb2tpRGF0YXNvdXJjZTtcblxuICBpZiAoZHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPElubGluZUxhYmVsPlRlbXBvIHVzZXMge2RzLm5hbWV9IHRvIGZpbmQgdHJhY2VzLjwvSW5saW5lTGFiZWw+XG4gICAgICAgIDxMb2tpUXVlcnlGaWVsZFxuICAgICAgICAgIGRhdGFzb3VyY2U9e2RzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgICAgIHF1ZXJ5PXtxdWVyeS5saW5rZWRRdWVyeSA/PyAoeyByZWZJZDogJ2xpbmtlZCcgfSBhcyBhbnkpfVxuICAgICAgICAgIGhpc3Rvcnk9e1tdfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghbG9nc0RhdGFzb3VyY2VVaWQpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdhcm5pbmdcIj5QbGVhc2Ugc2V0IHVwIGEgTG9raSBzZWFyY2ggZGF0YXNvdXJjZSBpbiB0aGUgZGF0YXNvdXJjZSBzZXR0aW5ncy48L2Rpdj47XG4gIH1cblxuICBpZiAobG9nc0RhdGFzb3VyY2VVaWQgJiYgIWRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCI+XG4gICAgICAgIExva2kgc2VhcmNoIGRhdGFzb3VyY2UgaXMgY29uZmlndXJlZCBidXQgdGhlIGRhdGEgc291cmNlIG5vIGxvbmdlciBleGlzdHMuIFBsZWFzZSBjb25maWd1cmUgZXhpc3RpbmcgZGF0YSBzb3VyY2VcbiAgICAgICAgdG8gdXNlIHRoZSBzZWFyY2guXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBUZW1wb1F1ZXJ5RmllbGQgPSB3aXRoVGhlbWUyKFRlbXBvUXVlcnlGaWVsZENvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUFzeW5jIGZyb20gJ3JlYWN0LXVzZS9saWIvdXNlQXN5bmMnO1xuaW1wb3J0IHsgZ2V0RFMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFkSG9jVmFyaWFibGVGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlcy92YXJpYWJsZXMvdHlwZXMnO1xuaW1wb3J0IHsgVGVtcG9RdWVyeSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQWRIb2NGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlcy92YXJpYWJsZXMvYWRob2MvcGlja2VyL0FkSG9jRmlsdGVyJztcbmltcG9ydCB7IFByb21ldGhldXNEYXRhc291cmNlIH0gZnJvbSAnLi4vLi4vcHJvbWV0aGV1cy9kYXRhc291cmNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIFNlcnZpY2VHcmFwaFNlY3Rpb24oe1xuICBncmFwaERhdGFzb3VyY2VVaWQsXG4gIHF1ZXJ5LFxuICBvbkNoYW5nZSxcbn06IHtcbiAgZ3JhcGhEYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICBxdWVyeTogVGVtcG9RdWVyeTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogVGVtcG9RdWVyeSkgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3QgZHNTdGF0ZSA9IHVzZUFzeW5jKCgpID0+IGdldERTKGdyYXBoRGF0YXNvdXJjZVVpZCksIFtncmFwaERhdGFzb3VyY2VVaWRdKTtcbiAgaWYgKGRzU3RhdGUubG9hZGluZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZHMgPSBkc1N0YXRlLnZhbHVlIGFzIFByb21ldGhldXNEYXRhc291cmNlO1xuXG4gIGlmICghZ3JhcGhEYXRhc291cmNlVWlkKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCI+UGxlYXNlIHNldCB1cCBhIHNlcnZpY2UgZ3JhcGggZGF0YXNvdXJjZSBpbiB0aGUgZGF0YXNvdXJjZSBzZXR0aW5ncy48L2Rpdj47XG4gIH1cblxuICBpZiAoZ3JhcGhEYXRhc291cmNlVWlkICYmICFkcykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiPlxuICAgICAgICBTZXJ2aWNlIGdyYXBoIGRhdGFzb3VyY2UgaXMgY29uZmlndXJlZCBidXQgdGhlIGRhdGEgc291cmNlIG5vIGxvbmdlciBleGlzdHMuIFBsZWFzZSBjb25maWd1cmUgZXhpc3RpbmcgZGF0YVxuICAgICAgICBzb3VyY2UgdG8gdXNlIHRoZSBzZXJ2aWNlIGdyYXBoIGZ1bmN0aW9uYWxpdHkuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGNvbnN0IGZpbHRlcnMgPSBxdWVyeVRvRmlsdGVyKHF1ZXJ5LnNlcnZpY2VNYXBRdWVyeSB8fCAnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJGaWx0ZXJcIiBsYWJlbFdpZHRoPXsxNH0gZ3Jvdz5cbiAgICAgICAgICA8QWRIb2NGaWx0ZXJcbiAgICAgICAgICAgIGRhdGFzb3VyY2U9e3sgdWlkOiBncmFwaERhdGFzb3VyY2VVaWQgfX1cbiAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICBnZXRUYWdLZXlzT3B0aW9ucz17e1xuICAgICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfcmVxdWVzdF9zZXJ2ZXJfc2Vjb25kc19zdW0nLFxuICAgICAgICAgICAgICAgICd0cmFjZXNfc2VydmljZV9ncmFwaF9yZXF1ZXN0X3RvdGFsJyxcbiAgICAgICAgICAgICAgICAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfcmVxdWVzdF9mYWlsZWRfdG90YWwnLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFkZEZpbHRlcj17KGZpbHRlcjogQWRIb2NWYXJpYWJsZUZpbHRlcikgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgc2VydmljZU1hcFF1ZXJ5OiBmaWx0ZXJzVG9RdWVyeShbLi4uZmlsdGVycywgZmlsdGVyXSksXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHJlbW92ZUZpbHRlcj17KGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3RmlsdGVycyA9IFsuLi5maWx0ZXJzXTtcbiAgICAgICAgICAgICAgbmV3RmlsdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBzZXJ2aWNlTWFwUXVlcnk6IGZpbHRlcnNUb1F1ZXJ5KG5ld0ZpbHRlcnMpIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoYW5nZUZpbHRlcj17KGluZGV4OiBudW1iZXIsIGZpbHRlcjogQWRIb2NWYXJpYWJsZUZpbHRlcikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdGaWx0ZXJzID0gWy4uLmZpbHRlcnNdO1xuICAgICAgICAgICAgICBuZXdGaWx0ZXJzLnNwbGljZShpbmRleCwgMSwgZmlsdGVyKTtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2VydmljZU1hcFF1ZXJ5OiBmaWx0ZXJzVG9RdWVyeShuZXdGaWx0ZXJzKSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5VG9GaWx0ZXIocXVlcnk6IHN0cmluZyk6IEFkSG9jVmFyaWFibGVGaWx0ZXJbXSB7XG4gIGxldCBtYXRjaDtcbiAgbGV0IGZpbHRlcnM6IEFkSG9jVmFyaWFibGVGaWx0ZXJbXSA9IFtdO1xuICBjb25zdCByZSA9IC8oW1xcd19dKykoPXwhPXw8fD58PX58IX4pXCIoLio/KVwiL2c7XG4gIHdoaWxlICgobWF0Y2ggPSByZS5leGVjKHF1ZXJ5KSkgIT09IG51bGwpIHtcbiAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAga2V5OiBtYXRjaFsxXSxcbiAgICAgIG9wZXJhdG9yOiBtYXRjaFsyXSxcbiAgICAgIHZhbHVlOiBtYXRjaFszXSxcbiAgICAgIGNvbmRpdGlvbjogJycsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcnM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcnNUb1F1ZXJ5KGZpbHRlcnM6IEFkSG9jVmFyaWFibGVGaWx0ZXJbXSk6IHN0cmluZyB7XG4gIHJldHVybiBgeyR7ZmlsdGVycy5tYXAoKGYpID0+IGAke2Yua2V5fSR7Zi5vcGVyYXRvcn1cIiR7Zi52YWx1ZX1cImApLmpvaW4oJywnKX19YDtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VBcGkgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERTKHVpZD86IHN0cmluZyk6IFByb21pc2U8RGF0YVNvdXJjZUFwaSB8IHVuZGVmaW5lZD4ge1xuICBpZiAoIXVpZCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBkc1NydiA9IGdldERhdGFTb3VyY2VTcnYoKTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZHNTcnYuZ2V0KHVpZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YSBzb3VyY2UnLCBlcnJvcik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZUh0dHBTZXR0aW5ncyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFRyYWNlVG9Mb2dzU2V0dGluZ3MgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL1RyYWNlVG9Mb2dzU2V0dGluZ3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlcnZpY2VHcmFwaFNldHRpbmdzIH0gZnJvbSAnLi9TZXJ2aWNlR3JhcGhTZXR0aW5ncyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFNlYXJjaFNldHRpbmdzIH0gZnJvbSAnLi9TZWFyY2hTZXR0aW5ncyc7XG5pbXBvcnQgeyBOb2RlR3JhcGhTZXR0aW5ncyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvTm9kZUdyYXBoU2V0dGluZ3MnO1xuaW1wb3J0IHsgTG9raVNlYXJjaFNldHRpbmdzIH0gZnJvbSAnLi9Mb2tpU2VhcmNoU2V0dGluZ3MnO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM7XG5cbmV4cG9ydCBjb25zdCBDb25maWdFZGl0b3I6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEYXRhU291cmNlSHR0cFNldHRpbmdzXG4gICAgICAgIGRlZmF1bHRVcmw9XCJodHRwOi8vdGVtcG9cIlxuICAgICAgICBkYXRhU291cmNlQ29uZmlnPXtvcHRpb25zfVxuICAgICAgICBzaG93QWNjZXNzT3B0aW9ucz17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPFRyYWNlVG9Mb2dzU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjb25maWcuZmVhdHVyZVRvZ2dsZXMudGVtcG9TZXJ2aWNlR3JhcGggJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8U2VydmljZUdyYXBoU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtjb25maWcuZmVhdHVyZVRvZ2dsZXMudGVtcG9TZWFyY2ggJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8U2VhcmNoU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICA8Tm9kZUdyYXBoU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICA8TG9raVNlYXJjaFNldHRpbmdzIG9wdGlvbnM9e29wdGlvbnN9IG9uT3B0aW9uc0NoYW5nZT17b25PcHRpb25zQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsIEdyYWZhbmFUaGVtZSwgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGlja2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRlbXBvSnNvbkRhdGEgfSBmcm9tICcuLi9kYXRhc291cmNlJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxUZW1wb0pzb25EYXRhPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gTG9raVNlYXJjaFNldHRpbmdzKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIC8vIERlZmF1bHQgdG8gdGhlIHRyYWNlIHRvIGxvZ3MgZGF0YXNvdXJjZSBpZiBjb25maWd1cmVkIGFuZCBsb2tpIHNlYXJjaCB3YXMgZW5hYmxlZFxuICAvLyBidXQgb25seSBpZiBqc29uRGF0YS5sb2tpU2VhcmNoIGhhc24ndCBiZWVuIHNldFxuICBjb25zdCBsZWdhY3lEYXRhc291cmNlID1cbiAgICBvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubG9raVNlYXJjaCAhPT0gZmFsc2UgPyBvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uZGF0YXNvdXJjZVVpZCA6IHVuZGVmaW5lZDtcbiAgaWYgKGxlZ2FjeURhdGFzb3VyY2UgJiYgb3B0aW9ucy5qc29uRGF0YS5sb2tpU2VhcmNoID09PSB1bmRlZmluZWQpIHtcbiAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ2xva2lTZWFyY2gnLCB7XG4gICAgICBkYXRhc291cmNlVWlkOiBsZWdhY3lEYXRhc291cmNlLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgd2lkdGg6ICcxMDAlJyB9KX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+TG9raSBTZWFyY2g8L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9UZXh0fT5cbiAgICAgICAgU2VsZWN0IGEgTG9raSBkYXRhc291cmNlIHRvIHNlYXJjaCBmb3IgdHJhY2VzLiBEZXJpdmVkIGZpZWxkcyBtdXN0IGJlIGNvbmZpZ3VyZWQgaW4gdGhlIExva2kgZGF0YSBzb3VyY2UuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPElubGluZUZpZWxkUm93IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiVGhlIExva2kgZGF0YSBzb3VyY2Ugd2l0aCB0aGUgc2VydmljZSBncmFwaCBkYXRhXCIgbGFiZWw9XCJEYXRhIHNvdXJjZVwiIGxhYmVsV2lkdGg9ezI2fT5cbiAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgaW5wdXRJZD1cImxva2ktc2VhcmNoLWRhdGEtc291cmNlLXBpY2tlclwiXG4gICAgICAgICAgICBwbHVnaW5JZD1cImxva2lcIlxuICAgICAgICAgICAgY3VycmVudD17b3B0aW9ucy5qc29uRGF0YS5sb2tpU2VhcmNoPy5kYXRhc291cmNlVWlkfVxuICAgICAgICAgICAgbm9EZWZhdWx0PXt0cnVlfVxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhkcykgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICdsb2tpU2VhcmNoJywge1xuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IGRzLnVpZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICB7b3B0aW9ucy5qc29uRGF0YS5sb2tpU2VhcmNoPy5kYXRhc291cmNlVWlkID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9eydidXR0b24nfVxuICAgICAgICAgICAgdmFyaWFudD17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICBzaXplPXsnc20nfVxuICAgICAgICAgICAgZmlsbD17J3RleHQnfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ2xva2lTZWFyY2gnLCB7XG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgaW5mb1RleHQ6IGNzc2BcbiAgICBsYWJlbDogaW5mb1RleHQ7XG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gIGAsXG5cbiAgcm93OiBjc3NgXG4gICAgbGFiZWw6IHJvdztcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLCBHcmFmYW5hVGhlbWUsIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbmxpbmVTd2l0Y2gsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZW1wb0pzb25EYXRhIH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8VGVtcG9Kc29uRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaFNldHRpbmdzKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPlNlYXJjaDwvaDM+XG4gICAgICA8SW5saW5lRmllbGRSb3cgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgPElubGluZUZpZWxkIHRvb2x0aXA9XCJSZW1vdmVzIHRoZSBTZWFyY2ggdGFiIGZyb20gdGhlIFRlbXBvIHF1ZXJ5IGVkaXRvci5cIiBsYWJlbD1cIkhpZGUgc2VhcmNoXCIgbGFiZWxXaWR0aD17MjZ9PlxuICAgICAgICAgIDxJbmxpbmVTd2l0Y2hcbiAgICAgICAgICAgIGlkPVwiaGlkZVNlYXJjaFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS5zZWFyY2g/LmhpZGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICdzZWFyY2gnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgaGlkZTogZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgbGFiZWw6IGNvbnRhaW5lcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgYCxcbiAgcm93OiBjc3NgXG4gICAgbGFiZWw6IHJvdztcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLCBHcmFmYW5hVGhlbWUsIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBpY2tlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZW1wb0pzb25EYXRhIH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8VGVtcG9Kc29uRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIFNlcnZpY2VHcmFwaFNldHRpbmdzKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh7IHdpZHRoOiAnMTAwJScgfSl9PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPlNlcnZpY2UgR3JhcGg8L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9UZXh0fT5cbiAgICAgICAgVG8gYWxsb3cgcXVlcnlpbmcgc2VydmljZSBncmFwaCBkYXRhIHlvdSBoYXZlIHRvIHNlbGVjdCBhIFByb21ldGhldXMgaW5zdGFuY2Ugd2hlcmUgdGhlIGRhdGEgaXMgc3RvcmVkLlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdyBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICB0b29sdGlwPVwiVGhlIFByb21ldGhldXMgZGF0YSBzb3VyY2Ugd2l0aCB0aGUgc2VydmljZSBncmFwaCBkYXRhXCJcbiAgICAgICAgICBsYWJlbD1cIkRhdGEgc291cmNlXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgPlxuICAgICAgICAgIDxEYXRhU291cmNlUGlja2VyXG4gICAgICAgICAgICBpbnB1dElkPVwic2VydmljZS1ncmFwaC1kYXRhLXNvdXJjZS1waWNrZXJcIlxuICAgICAgICAgICAgcGx1Z2luSWQ9XCJwcm9tZXRoZXVzXCJcbiAgICAgICAgICAgIGN1cnJlbnQ9e29wdGlvbnMuanNvbkRhdGEuc2VydmljZU1hcD8uZGF0YXNvdXJjZVVpZH1cbiAgICAgICAgICAgIG5vRGVmYXVsdD17dHJ1ZX1cbiAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZHMpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAnc2VydmljZU1hcCcsIHtcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiBkcy51aWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9eydidXR0b24nfVxuICAgICAgICAgIHZhcmlhbnQ9eydzZWNvbmRhcnknfVxuICAgICAgICAgIHNpemU9eydzbSd9XG4gICAgICAgICAgZmlsbD17J3RleHQnfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAnc2VydmljZU1hcCcsIHtcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENsZWFyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGluZm9UZXh0OiBjc3NgXG4gICAgbGFiZWw6IGluZm9UZXh0O1xuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2VtaVdlYWt9O1xuICBgLFxuXG4gIHJvdzogY3NzYFxuICAgIGxhYmVsOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBFTVBUWSwgZnJvbSwgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5LFxuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIERhdGFTb3VyY2VKc29uRGF0YSxcbiAgaXNWYWxpZEdvRHVyYXRpb24sXG4gIExvYWRpbmdTdGF0ZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBUcmFjZVRvTG9nc09wdGlvbnMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL1RyYWNlVG9Mb2dzU2V0dGluZ3MnO1xuaW1wb3J0IHsgY29uZmlnLCBCYWNrZW5kU3J2UmVxdWVzdCwgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLCBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBzZXJpYWxpemVQYXJhbXMgfSBmcm9tICdhcHAvY29yZS91dGlscy9mZXRjaCc7XG5pbXBvcnQgeyBnZXREYXRhc291cmNlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvZGF0YXNvdXJjZV9zcnYnO1xuaW1wb3J0IHsgaWRlbnRpdHksIHBpY2ssIHBpY2tCeSwgZ3JvdXBCeSwgc3RhcnRDYXNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IExva2lPcHRpb25zLCBMb2tpUXVlcnkgfSBmcm9tICcuLi9sb2tpL3R5cGVzJztcbmltcG9ydCB7IFByb21ldGhldXNEYXRhc291cmNlIH0gZnJvbSAnLi4vcHJvbWV0aGV1cy9kYXRhc291cmNlJztcbmltcG9ydCB7IFByb21RdWVyeSB9IGZyb20gJy4uL3Byb21ldGhldXMvdHlwZXMnO1xuaW1wb3J0IHtcbiAgZmFpbGVkTWV0cmljLFxuICBoaXN0b2dyYW1NZXRyaWMsXG4gIG1hcFByb21NZXRyaWNzVG9TZXJ2aWNlTWFwLFxuICBzZXJ2aWNlTWFwTWV0cmljcyxcbiAgdG90YWxzTWV0cmljLFxufSBmcm9tICcuL2dyYXBoVHJhbnNmb3JtJztcbmltcG9ydCB7XG4gIHRyYW5zZm9ybVRyYWNlLFxuICB0cmFuc2Zvcm1UcmFjZUxpc3QsXG4gIHRyYW5zZm9ybUZyb21PVExQIGFzIHRyYW5zZm9ybUZyb21PVEVMLFxuICBjcmVhdGVUYWJsZUZyYW1lRnJvbVNlYXJjaCxcbn0gZnJvbSAnLi9yZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBOb2RlR3JhcGhPcHRpb25zIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Ob2RlR3JhcGhTZXR0aW5ncyc7XG5cbi8vIHNlYXJjaCA9IExva2kgc2VhcmNoLCBuYXRpdmVTZWFyY2ggPSBUZW1wbyBzZWFyY2ggZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5leHBvcnQgdHlwZSBUZW1wb1F1ZXJ5VHlwZSA9ICdzZWFyY2gnIHwgJ3RyYWNlSWQnIHwgJ3NlcnZpY2VNYXAnIHwgJ3VwbG9hZCcgfCAnbmF0aXZlU2VhcmNoJyB8ICdjbGVhcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcG9Kc29uRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIHRyYWNlc1RvTG9ncz86IFRyYWNlVG9Mb2dzT3B0aW9ucztcbiAgc2VydmljZU1hcD86IHtcbiAgICBkYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICB9O1xuICBzZWFyY2g/OiB7XG4gICAgaGlkZT86IGJvb2xlYW47XG4gIH07XG4gIG5vZGVHcmFwaD86IE5vZGVHcmFwaE9wdGlvbnM7XG4gIGxva2lTZWFyY2g/OiB7XG4gICAgZGF0YXNvdXJjZVVpZD86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZW1wb1F1ZXJ5IGV4dGVuZHMgRGF0YVF1ZXJ5IHtcbiAgcXVlcnk6IHN0cmluZztcbiAgLy8gUXVlcnkgdG8gZmluZCBsaXN0IG9mIHRyYWNlcywgZS5nLiwgdmlhIExva2lcbiAgbGlua2VkUXVlcnk/OiBMb2tpUXVlcnk7XG4gIHNlYXJjaDogc3RyaW5nO1xuICBxdWVyeVR5cGU6IFRlbXBvUXVlcnlUeXBlO1xuICBzZXJ2aWNlTmFtZT86IHN0cmluZztcbiAgc3Bhbk5hbWU/OiBzdHJpbmc7XG4gIG1pbkR1cmF0aW9uPzogc3RyaW5nO1xuICBtYXhEdXJhdGlvbj86IHN0cmluZztcbiAgbGltaXQ/OiBudW1iZXI7XG4gIHNlcnZpY2VNYXBRdWVyeT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlYXJjaFF1ZXJ5UGFyYW1zIHtcbiAgbWluRHVyYXRpb24/OiBzdHJpbmc7XG4gIG1heER1cmF0aW9uPzogc3RyaW5nO1xuICBsaW1pdD86IG51bWJlcjtcbiAgdGFnczogc3RyaW5nO1xuICBzdGFydD86IG51bWJlcjtcbiAgZW5kPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MSU1JVCA9IDIwO1xuXG5leHBvcnQgY2xhc3MgVGVtcG9EYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPFRlbXBvUXVlcnksIFRlbXBvSnNvbkRhdGE+IHtcbiAgdHJhY2VzVG9Mb2dzPzogVHJhY2VUb0xvZ3NPcHRpb25zO1xuICBzZXJ2aWNlTWFwPzoge1xuICAgIGRhdGFzb3VyY2VVaWQ/OiBzdHJpbmc7XG4gIH07XG4gIHNlYXJjaD86IHtcbiAgICBoaWRlPzogYm9vbGVhbjtcbiAgfTtcbiAgbm9kZUdyYXBoPzogTm9kZUdyYXBoT3B0aW9ucztcbiAgbG9raVNlYXJjaD86IHtcbiAgICBkYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICB9O1xuICB1cGxvYWRlZEpzb24/OiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8VGVtcG9Kc29uRGF0YT4pIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgICB0aGlzLnRyYWNlc1RvTG9ncyA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEudHJhY2VzVG9Mb2dzO1xuICAgIHRoaXMuc2VydmljZU1hcCA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuc2VydmljZU1hcDtcbiAgICB0aGlzLnNlYXJjaCA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuc2VhcmNoO1xuICAgIHRoaXMubm9kZUdyYXBoID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5ub2RlR3JhcGg7XG4gICAgdGhpcy5sb2tpU2VhcmNoID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5sb2tpU2VhcmNoO1xuICB9XG5cbiAgcXVlcnkob3B0aW9uczogRGF0YVF1ZXJ5UmVxdWVzdDxUZW1wb1F1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCBzdWJRdWVyaWVzOiBBcnJheTxPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPj4gPSBbXTtcbiAgICBjb25zdCBmaWx0ZXJlZFRhcmdldHMgPSBvcHRpb25zLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+ICF0YXJnZXQuaGlkZSk7XG4gICAgY29uc3QgdGFyZ2V0czogeyBbdHlwZTogc3RyaW5nXTogVGVtcG9RdWVyeVtdIH0gPSBncm91cEJ5KGZpbHRlcmVkVGFyZ2V0cywgKHQpID0+IHQucXVlcnlUeXBlIHx8ICd0cmFjZUlkJyk7XG5cbiAgICBpZiAodGFyZ2V0cy5jbGVhcikge1xuICAgICAgcmV0dXJuIG9mKHsgZGF0YTogW10sIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2dzRGF0YXNvdXJjZVVpZCA9IHRoaXMuZ2V0TG9raVNlYXJjaERTKCk7XG5cbiAgICAvLyBSdW4gc2VhcmNoIHF1ZXJpZXMgb24gbGlua2VkIGRhdGFzb3VyY2VcbiAgICBpZiAobG9nc0RhdGFzb3VyY2VVaWQgJiYgdGFyZ2V0cy5zZWFyY2g/Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGRzU3J2ID0gZ2V0RGF0YXNvdXJjZVNydigpO1xuICAgICAgc3ViUXVlcmllcy5wdXNoKFxuICAgICAgICBmcm9tKGRzU3J2LmdldChsb2dzRGF0YXNvdXJjZVVpZCkpLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKGxpbmtlZERhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGkpID0+IHtcbiAgICAgICAgICAgIC8vIFdyYXAgbGlua2VkIHF1ZXJ5IGludG8gYSBkYXRhIHJlcXVlc3QgYmFzZWQgb24gb3JpZ2luYWwgcmVxdWVzdFxuICAgICAgICAgICAgY29uc3QgbGlua2VkUmVxdWVzdDogRGF0YVF1ZXJ5UmVxdWVzdCA9IHsgLi4ub3B0aW9ucywgdGFyZ2V0czogdGFyZ2V0cy5zZWFyY2gubWFwKCh0KSA9PiB0LmxpbmtlZFF1ZXJ5ISkgfTtcbiAgICAgICAgICAgIC8vIEZpbmQgdHJhY2UgbWF0Y2hlcnMgaW4gZGVyaXZlZCBmaWVsZHMgb2YgdGhlIGxpbmtlZCBkYXRhc291cmNlIHRoYXQncyBpZGVudGljYWwgdG8gdGhpcyBkYXRhc291cmNlXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8TG9raU9wdGlvbnM+ID0gKGxpbmtlZERhdGFzb3VyY2UgYXMgYW55KS5pbnN0YW5jZVNldHRpbmdzO1xuICAgICAgICAgICAgY29uc3QgdHJhY2VMaW5rTWF0Y2hlcjogc3RyaW5nW10gPVxuICAgICAgICAgICAgICBzZXR0aW5ncy5qc29uRGF0YS5kZXJpdmVkRmllbGRzXG4gICAgICAgICAgICAgICAgPy5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC5kYXRhc291cmNlVWlkID09PSB0aGlzLnVpZCAmJiBmaWVsZC5tYXRjaGVyUmVnZXgpXG4gICAgICAgICAgICAgICAgLm1hcCgoZmllbGQpID0+IGZpZWxkLm1hdGNoZXJSZWdleCkgfHwgW107XG5cbiAgICAgICAgICAgIGlmICghdHJhY2VMaW5rTWF0Y2hlciB8fCB0cmFjZUxpbmtNYXRjaGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcbiAgICAgICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnTm8gTG9raSBkYXRhc291cmNlIGNvbmZpZ3VyZWQgZm9yIHNlYXJjaC4gU2V0IHVwIERlcml2ZWQgRmllbGRzIGZvciB0cmFjZXMgaW4gYSBMb2tpIGRhdGFzb3VyY2Ugc2V0dGluZ3MgYW5kIGxpbmsgaXQgdG8gdGhpcyBUZW1wbyBkYXRhc291cmNlLidcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAobGlua2VkRGF0YXNvdXJjZS5xdWVyeShsaW5rZWRSZXF1ZXN0KSBhcyBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPikucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlKSA9PlxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3IgPyByZXNwb25zZSA6IHRyYW5zZm9ybVRyYWNlTGlzdChyZXNwb25zZSwgdGhpcy51aWQsIHRoaXMubmFtZSwgdHJhY2VMaW5rTWF0Y2hlcilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0cy5uYXRpdmVTZWFyY2g/Lmxlbmd0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGltZVJhbmdlID0gY29uZmlnLmZlYXR1cmVUb2dnbGVzLnRlbXBvQmFja2VuZFNlYXJjaFxuICAgICAgICAgID8geyBzdGFydFRpbWU6IG9wdGlvbnMucmFuZ2UuZnJvbS51bml4KCksIGVuZFRpbWU6IG9wdGlvbnMucmFuZ2UudG8udW5peCgpIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmJ1aWxkU2VhcmNoUXVlcnkodGFyZ2V0cy5uYXRpdmVTZWFyY2hbMF0sIHRpbWVSYW5nZSk7XG4gICAgICAgIHN1YlF1ZXJpZXMucHVzaChcbiAgICAgICAgICB0aGlzLl9yZXF1ZXN0KCcvYXBpL3NlYXJjaCcsIHNlYXJjaFF1ZXJ5KS5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGE6IFtjcmVhdGVUYWJsZUZyYW1lRnJvbVNlYXJjaChyZXNwb25zZS5kYXRhLnRyYWNlcywgdGhpcy5pbnN0YW5jZVNldHRpbmdzKV0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBvZih7IGVycm9yOiB7IG1lc3NhZ2U6IGVycm9yLmRhdGEubWVzc2FnZSB9LCBkYXRhOiBbXSB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG9mKHsgZXJyb3I6IHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9LCBkYXRhOiBbXSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0cy51cGxvYWQ/Lmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMudXBsb2FkZWRKc29uKSB7XG4gICAgICAgIGNvbnN0IG90ZWxUcmFjZURhdGEgPSBKU09OLnBhcnNlKHRoaXMudXBsb2FkZWRKc29uIGFzIHN0cmluZyk7XG4gICAgICAgIGlmICghb3RlbFRyYWNlRGF0YS5iYXRjaGVzKSB7XG4gICAgICAgICAgc3ViUXVlcmllcy5wdXNoKG9mKHsgZXJyb3I6IHsgbWVzc2FnZTogJ0pTT04gaXMgbm90IHZhbGlkIE9wZW5UZWxlbWV0cnkgZm9ybWF0JyB9LCBkYXRhOiBbXSB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3ViUXVlcmllcy5wdXNoKG9mKHRyYW5zZm9ybUZyb21PVEVMKG90ZWxUcmFjZURhdGEuYmF0Y2hlcywgdGhpcy5ub2RlR3JhcGg/LmVuYWJsZWQpKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YlF1ZXJpZXMucHVzaChvZih7IGRhdGE6IFtdLCBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNlcnZpY2VNYXA/LmRhdGFzb3VyY2VVaWQgJiYgdGFyZ2V0cy5zZXJ2aWNlTWFwPy5sZW5ndGggPiAwKSB7XG4gICAgICBzdWJRdWVyaWVzLnB1c2goc2VydmljZU1hcFF1ZXJ5KG9wdGlvbnMsIHRoaXMuc2VydmljZU1hcC5kYXRhc291cmNlVWlkKSk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldHMudHJhY2VJZD8ubGVuZ3RoID4gMCkge1xuICAgICAgc3ViUXVlcmllcy5wdXNoKHRoaXMuaGFuZGxlVHJhY2VJZFF1ZXJ5KG9wdGlvbnMsIHRhcmdldHMudHJhY2VJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZSguLi5zdWJRdWVyaWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBzaW1wbGVzdCBvZiB0aGUgcXVlcmllcyB3aGVyZSB3ZSBoYXZlIGp1c3QgYSB0cmFjZSBpZCBhbmQgcmV0dXJuIHRyYWNlIGRhdGEgZm9yIGl0LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcGFyYW0gdGFyZ2V0c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVUcmFjZUlkUXVlcnkoXG4gICAgb3B0aW9uczogRGF0YVF1ZXJ5UmVxdWVzdDxUZW1wb1F1ZXJ5PixcbiAgICB0YXJnZXRzOiBUZW1wb1F1ZXJ5W11cbiAgKTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGNvbnN0IHZhbGlkVGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0KSA9PiB0LnF1ZXJ5KTtcbiAgICBpZiAoIXZhbGlkVGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFjZVJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8VGVtcG9RdWVyeT4gPSB7IC4uLm9wdGlvbnMsIHRhcmdldHM6IHZhbGlkVGFyZ2V0cyB9O1xuICAgIHJldHVybiBzdXBlci5xdWVyeSh0cmFjZVJlcXVlc3QpLnBpcGUoXG4gICAgICBtYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtVHJhY2UocmVzcG9uc2UsIHRoaXMubm9kZUdyYXBoPy5lbmFibGVkKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIG1ldGFkYXRhUmVxdWVzdCh1cmw6IHN0cmluZywgcGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fcmVxdWVzdCh1cmwsIHBhcmFtcywgeyBtZXRob2Q6ICdHRVQnLCBoaWRlRnJvbUluc3BlY3RvcjogdHJ1ZSB9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcXVlc3QoYXBpVXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIG9wdGlvbnM/OiBQYXJ0aWFsPEJhY2tlbmRTcnZSZXF1ZXN0Pik6IE9ic2VydmFibGU8UmVjb3JkPHN0cmluZywgYW55Pj4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IGRhdGEgPyBzZXJpYWxpemVQYXJhbXMoZGF0YSkgOiAnJztcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmluc3RhbmNlU2V0dGluZ3MudXJsfSR7YXBpVXJsfSR7cGFyYW1zLmxlbmd0aCA/IGA/JHtwYXJhbXN9YCA6ICcnfWA7XG4gICAgY29uc3QgcmVxID0geyAuLi5vcHRpb25zLCB1cmwgfTtcblxuICAgIHJldHVybiBnZXRCYWNrZW5kU3J2KCkuZmV0Y2gocmVxKTtcbiAgfVxuXG4gIGFzeW5jIHRlc3REYXRhc291cmNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3Qgb3B0aW9uczogQmFja2VuZFNydlJlcXVlc3QgPSB7XG4gICAgICBoZWFkZXJzOiB7fSxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6IGAke3RoaXMuaW5zdGFuY2VTZXR0aW5ncy51cmx9L2FwaS9lY2hvYCxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmZldGNoPGFueT4ob3B0aW9ucykudG9Qcm9taXNlKCk7XG5cbiAgICBpZiAocmVzcG9uc2U/Lm9rKSB7XG4gICAgICByZXR1cm4geyBzdGF0dXM6ICdzdWNjZXNzJywgbWVzc2FnZTogJ0RhdGEgc291cmNlIGlzIHdvcmtpbmcnIH07XG4gICAgfVxuICB9XG5cbiAgZ2V0UXVlcnlEaXNwbGF5VGV4dChxdWVyeTogVGVtcG9RdWVyeSkge1xuICAgIGlmIChxdWVyeS5xdWVyeVR5cGUgPT09ICduYXRpdmVTZWFyY2gnKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBbJ3NlcnZpY2VOYW1lJywgJ3NwYW5OYW1lJywgJ3NlYXJjaCcsICdtaW5EdXJhdGlvbicsICdtYXhEdXJhdGlvbicsICdsaW1pdCddKSB7XG4gICAgICAgIGlmIChxdWVyeS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHF1ZXJ5W2tleSBhcyBrZXlvZiBUZW1wb1F1ZXJ5XSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGAke3N0YXJ0Q2FzZShrZXkpfTogJHtxdWVyeVtrZXkgYXMga2V5b2YgVGVtcG9RdWVyeV19YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQuam9pbignLCAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5LnF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRTZWFyY2hRdWVyeShxdWVyeTogVGVtcG9RdWVyeSwgdGltZVJhbmdlPzogeyBzdGFydFRpbWU6IG51bWJlcjsgZW5kVGltZT86IG51bWJlciB9KTogU2VhcmNoUXVlcnlQYXJhbXMge1xuICAgIGxldCB0YWdzID0gcXVlcnkuc2VhcmNoID8/ICcnO1xuXG4gICAgbGV0IHRlbXBvUXVlcnkgPSBwaWNrKHF1ZXJ5LCBbJ21pbkR1cmF0aW9uJywgJ21heER1cmF0aW9uJywgJ2xpbWl0J10pO1xuICAgIC8vIFJlbW92ZSBlbXB0eSBwcm9wZXJ0aWVzXG4gICAgdGVtcG9RdWVyeSA9IHBpY2tCeSh0ZW1wb1F1ZXJ5LCBpZGVudGl0eSk7XG5cbiAgICBpZiAocXVlcnkuc2VydmljZU5hbWUpIHtcbiAgICAgIHRhZ3MgKz0gYCBzZXJ2aWNlLm5hbWU9XCIke3F1ZXJ5LnNlcnZpY2VOYW1lfVwiYDtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5LnNwYW5OYW1lKSB7XG4gICAgICB0YWdzICs9IGAgbmFtZT1cIiR7cXVlcnkuc3Bhbk5hbWV9XCJgO1xuICAgIH1cblxuICAgIC8vIFNldCBkZWZhdWx0IGxpbWl0XG4gICAgaWYgKCF0ZW1wb1F1ZXJ5LmxpbWl0KSB7XG4gICAgICB0ZW1wb1F1ZXJ5LmxpbWl0ID0gREVGQVVMVF9MSU1JVDtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBxdWVyeSBpbnB1dHMgYW5kIHJlbW92ZSBzcGFjZXMgaWYgdmFsaWRcbiAgICBpZiAodGVtcG9RdWVyeS5taW5EdXJhdGlvbikge1xuICAgICAgaWYgKCFpc1ZhbGlkR29EdXJhdGlvbih0ZW1wb1F1ZXJ5Lm1pbkR1cmF0aW9uKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIG1pbiBkdXJhdGlvbi4nKTtcbiAgICAgIH1cbiAgICAgIHRlbXBvUXVlcnkubWluRHVyYXRpb24gPSB0ZW1wb1F1ZXJ5Lm1pbkR1cmF0aW9uLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgfVxuICAgIGlmICh0ZW1wb1F1ZXJ5Lm1heER1cmF0aW9uKSB7XG4gICAgICBpZiAoIWlzVmFsaWRHb0R1cmF0aW9uKHRlbXBvUXVlcnkubWF4RHVyYXRpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIGEgdmFsaWQgbWF4IGR1cmF0aW9uLicpO1xuICAgICAgfVxuICAgICAgdGVtcG9RdWVyeS5tYXhEdXJhdGlvbiA9IHRlbXBvUXVlcnkubWF4RHVyYXRpb24ucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICB9XG5cbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIodGVtcG9RdWVyeS5saW1pdCkgfHwgdGVtcG9RdWVyeS5saW1pdCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGxpbWl0LicpO1xuICAgIH1cblxuICAgIGxldCBzZWFyY2hRdWVyeTogU2VhcmNoUXVlcnlQYXJhbXMgPSB7IHRhZ3MsIC4uLnRlbXBvUXVlcnkgfTtcblxuICAgIGlmICh0aW1lUmFuZ2UpIHtcbiAgICAgIHNlYXJjaFF1ZXJ5LnN0YXJ0ID0gdGltZVJhbmdlLnN0YXJ0VGltZTtcbiAgICAgIHNlYXJjaFF1ZXJ5LmVuZCA9IHRpbWVSYW5nZS5lbmRUaW1lO1xuICAgIH1cblxuICAgIHJldHVybiBzZWFyY2hRdWVyeTtcbiAgfVxuXG4gIGFzeW5jIGdldFNlcnZpY2VHcmFwaExhYmVscygpIHtcbiAgICBjb25zdCBkcyA9IGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5nZXQodGhpcy5zZXJ2aWNlTWFwIS5kYXRhc291cmNlVWlkKTtcbiAgICByZXR1cm4gZHMuZ2V0VGFnS2V5cyEoKTtcbiAgfVxuXG4gIGFzeW5jIGdldFNlcnZpY2VHcmFwaExhYmVsVmFsdWVzKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgZHMgPSBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkuZ2V0KHRoaXMuc2VydmljZU1hcCEuZGF0YXNvdXJjZVVpZCk7XG4gICAgcmV0dXJuIGRzLmdldFRhZ1ZhbHVlcyEoeyBrZXkgfSk7XG4gIH1cblxuICAvLyBHZXQgbGlua2VkIGxva2kgc2VhcmNoIGRhdGFzb3VyY2UuIEZhbGwgYmFjayB0byBsZWdhY3kgbG9raSBzZWFyY2gvdHJhY2UgdG8gbG9ncyBjb25maWdcbiAgZ2V0TG9raVNlYXJjaERTID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3QgbGVnYWN5TG9nc0RhdGFzb3VyY2VVaWQgPVxuICAgICAgdGhpcy50cmFjZXNUb0xvZ3M/Lmxva2lTZWFyY2ggIT09IGZhbHNlICYmIHRoaXMubG9raVNlYXJjaCA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy50cmFjZXNUb0xvZ3M/LmRhdGFzb3VyY2VVaWRcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMubG9raVNlYXJjaD8uZGF0YXNvdXJjZVVpZCA/PyBsZWdhY3lMb2dzRGF0YXNvdXJjZVVpZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcXVlcnlTZXJ2aWNlTWFwUHJvbWV0aGV1cyhyZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PFByb21RdWVyeT4sIGRhdGFzb3VyY2VVaWQ6IHN0cmluZykge1xuICByZXR1cm4gZnJvbShnZXREYXRhc291cmNlU3J2KCkuZ2V0KGRhdGFzb3VyY2VVaWQpKS5waXBlKFxuICAgIG1lcmdlTWFwKChkcykgPT4ge1xuICAgICAgcmV0dXJuIChkcyBhcyBQcm9tZXRoZXVzRGF0YXNvdXJjZSkucXVlcnkocmVxdWVzdCk7XG4gICAgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gc2VydmljZU1hcFF1ZXJ5KHJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8VGVtcG9RdWVyeT4sIGRhdGFzb3VyY2VVaWQ6IHN0cmluZykge1xuICByZXR1cm4gcXVlcnlTZXJ2aWNlTWFwUHJvbWV0aGV1cyhtYWtlUHJvbVNlcnZpY2VNYXBSZXF1ZXN0KHJlcXVlc3QpLCBkYXRhc291cmNlVWlkKS5waXBlKFxuICAgIC8vIEp1c3QgY29sbGVjdCBhbGwgdGhlIHJlc3BvbnNlcyBmaXJzdCBiZWZvcmUgcHJvY2Vzc2luZyBpbnRvIG5vZGUgZ3JhcGggZGF0YVxuICAgIHRvQXJyYXkoKSxcbiAgICBtYXAoKHJlc3BvbnNlczogRGF0YVF1ZXJ5UmVzcG9uc2VbXSkgPT4ge1xuICAgICAgY29uc3QgZXJyb3JSZXMgPSByZXNwb25zZXMuZmluZCgocmVzKSA9PiAhIXJlcy5lcnJvcik7XG4gICAgICBpZiAoZXJyb3JSZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUmVzLmVycm9yIS5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBub2RlcywgZWRnZXMgfSA9IG1hcFByb21NZXRyaWNzVG9TZXJ2aWNlTWFwKHJlc3BvbnNlcywgcmVxdWVzdC5yYW5nZSk7XG4gICAgICBub2Rlcy5maWVsZHNbMF0uY29uZmlnID0ge1xuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIG1ha2VQcm9tTGluayhcbiAgICAgICAgICAgICdSZXF1ZXN0IHJhdGUnLFxuICAgICAgICAgICAgYHJhdGUoJHt0b3RhbHNNZXRyaWN9e3NlcnZlcj1cIlxcJHtfX2RhdGEuZmllbGRzLmlkfVwifVskX19yYXRlX2ludGVydmFsXSlgLFxuICAgICAgICAgICAgZGF0YXNvdXJjZVVpZFxuICAgICAgICAgICksXG4gICAgICAgICAgbWFrZVByb21MaW5rKFxuICAgICAgICAgICAgJ1JlcXVlc3QgaGlzdG9ncmFtJyxcbiAgICAgICAgICAgIGBoaXN0b2dyYW1fcXVhbnRpbGUoMC45LCBzdW0ocmF0ZSgke2hpc3RvZ3JhbU1ldHJpY317c2VydmVyPVwiXFwke19fZGF0YS5maWVsZHMuaWR9XCJ9WyRfX3JhdGVfaW50ZXJ2YWxdKSkgYnkgKGxlLCBjbGllbnQsIHNlcnZlcikpYCxcbiAgICAgICAgICAgIGRhdGFzb3VyY2VVaWRcbiAgICAgICAgICApLFxuICAgICAgICAgIG1ha2VQcm9tTGluayhcbiAgICAgICAgICAgICdGYWlsZWQgcmVxdWVzdCByYXRlJyxcbiAgICAgICAgICAgIGByYXRlKCR7ZmFpbGVkTWV0cmljfXtzZXJ2ZXI9XCJcXCR7X19kYXRhLmZpZWxkcy5pZH1cIn1bJF9fcmF0ZV9pbnRlcnZhbF0pYCxcbiAgICAgICAgICAgIGRhdGFzb3VyY2VVaWRcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogW25vZGVzLCBlZGdlc10sXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgIH07XG4gICAgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb21MaW5rKHRpdGxlOiBzdHJpbmcsIG1ldHJpYzogc3RyaW5nLCBkYXRhc291cmNlVWlkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICB1cmw6ICcnLFxuICAgIHRpdGxlLFxuICAgIGludGVybmFsOiB7XG4gICAgICBxdWVyeToge1xuICAgICAgICBleHByOiBtZXRyaWMsXG4gICAgICB9IGFzIFByb21RdWVyeSxcbiAgICAgIGRhdGFzb3VyY2VVaWQsXG4gICAgICBkYXRhc291cmNlTmFtZTogJ1Byb21ldGhldXMnLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9tU2VydmljZU1hcFJlcXVlc3Qob3B0aW9uczogRGF0YVF1ZXJ5UmVxdWVzdDxUZW1wb1F1ZXJ5Pik6IERhdGFRdWVyeVJlcXVlc3Q8UHJvbVF1ZXJ5PiB7XG4gIHJldHVybiB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICB0YXJnZXRzOiBzZXJ2aWNlTWFwTWV0cmljcy5tYXAoKG1ldHJpYykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVmSWQ6IG1ldHJpYyxcbiAgICAgICAgLy8gb3B0aW9ucy50YXJnZXRzWzBdIGlzIG5vdCBjb3JyZWN0IGhlcmUsIGJ1dCBub3Qgc3VyZSB3aGF0IHNob3VsZCBoYXBwZW4gaWYgeW91IGhhdmUgbXVsdGlwbGUgcXVlcmllcyBmb3JcbiAgICAgICAgLy8gc2VydmljZSBtYXAgYXQgdGhlIHNhbWUgdGltZSBhbnl3YXlcbiAgICAgICAgZXhwcjogYGRlbHRhKCR7bWV0cmljfSR7b3B0aW9ucy50YXJnZXRzWzBdLnNlcnZpY2VNYXBRdWVyeSB8fCAnJ31bJF9fcmFuZ2VdKWAsXG4gICAgICAgIGluc3RhbnQ6IHRydWUsXG4gICAgICB9O1xuICAgIH0pLFxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhRnJhbWVWaWV3LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRmllbGRDb2xvck1vZGVJZCxcbiAgRmllbGREVE8sXG4gIE11dGFibGVEYXRhRnJhbWUsXG4gIE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMgYXMgRmllbGRzLFxuICBUaW1lUmFuZ2UsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0Tm9uT3ZlcmxhcHBpbmdEdXJhdGlvbiwgZ2V0U3RhdHMsIG1ha2VGcmFtZXMsIG1ha2VTcGFuTWFwIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscy90cmFjaW5nJztcblxuLyoqXG4gKiBSb3cgaW4gYSB0cmFjZSBkYXRhRnJhbWVcbiAqL1xuaW50ZXJmYWNlIFJvdyB7XG4gIHRyYWNlSUQ6IHN0cmluZztcbiAgc3BhbklEOiBzdHJpbmc7XG4gIHBhcmVudFNwYW5JRDogc3RyaW5nO1xuICBvcGVyYXRpb25OYW1lOiBzdHJpbmc7XG4gIHNlcnZpY2VOYW1lOiBzdHJpbmc7XG4gIHNlcnZpY2VUYWdzOiBzdHJpbmc7XG4gIHN0YXJ0VGltZTogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBsb2dzOiBzdHJpbmc7XG4gIHRhZ3M6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE5vZGUge1xuICBbRmllbGRzLmlkXTogc3RyaW5nO1xuICBbRmllbGRzLnRpdGxlXTogc3RyaW5nO1xuICBbRmllbGRzLnN1YlRpdGxlXTogc3RyaW5nO1xuICBbRmllbGRzLm1haW5TdGF0XTogc3RyaW5nO1xuICBbRmllbGRzLnNlY29uZGFyeVN0YXRdOiBzdHJpbmc7XG4gIFtGaWVsZHMuY29sb3JdOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBFZGdlIHtcbiAgW0ZpZWxkcy5pZF06IHN0cmluZztcbiAgW0ZpZWxkcy50YXJnZXRdOiBzdHJpbmc7XG4gIFtGaWVsZHMuc291cmNlXTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR3JhcGhGcmFtZXMoZGF0YTogRGF0YUZyYW1lKTogRGF0YUZyYW1lW10ge1xuICBjb25zdCB7IG5vZGVzLCBlZGdlcyB9ID0gY29udmVydFRyYWNlVG9HcmFwaChkYXRhKTtcbiAgY29uc3QgW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdID0gbWFrZUZyYW1lcygpO1xuXG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIG5vZGVzRnJhbWUuYWRkKG5vZGUpO1xuICB9XG4gIGZvciAoY29uc3QgZWRnZSBvZiBlZGdlcykge1xuICAgIGVkZ2VzRnJhbWUuYWRkKGVkZ2UpO1xuICB9XG5cbiAgcmV0dXJuIFtub2Rlc0ZyYW1lLCBlZGdlc0ZyYW1lXTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRyYWNlVG9HcmFwaChkYXRhOiBEYXRhRnJhbWUpOiB7IG5vZGVzOiBOb2RlW107IGVkZ2VzOiBFZGdlW10gfSB7XG4gIGNvbnN0IG5vZGVzOiBOb2RlW10gPSBbXTtcbiAgY29uc3QgZWRnZXM6IEVkZ2VbXSA9IFtdO1xuXG4gIGNvbnN0IHZpZXcgPSBuZXcgRGF0YUZyYW1lVmlldzxSb3c+KGRhdGEpO1xuXG4gIGNvbnN0IHRyYWNlRHVyYXRpb24gPSBmaW5kVHJhY2VEdXJhdGlvbih2aWV3KTtcbiAgY29uc3Qgc3Bhbk1hcCA9IG1ha2VTcGFuTWFwKChpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA+PSBkYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgc3BhbiA9IHZpZXcuZ2V0KGluZGV4KTtcbiAgICByZXR1cm4ge1xuICAgICAgc3BhbjogeyAuLi5zcGFuIH0sXG4gICAgICBpZDogc3Bhbi5zcGFuSUQsXG4gICAgICBwYXJlbnRJZHM6IHNwYW4ucGFyZW50U3BhbklEID8gW3NwYW4ucGFyZW50U3BhbklEXSA6IFtdLFxuICAgIH07XG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IHZpZXcuZ2V0KGkpO1xuXG4gICAgY29uc3QgcmFuZ2VzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPiA9IHNwYW5NYXBbcm93LnNwYW5JRF0uY2hpbGRyZW4ubWFwKChjKSA9PiB7XG4gICAgICBjb25zdCBzcGFuID0gc3Bhbk1hcFtjXS5zcGFuO1xuICAgICAgcmV0dXJuIFtzcGFuLnN0YXJ0VGltZSwgc3Bhbi5zdGFydFRpbWUgKyBzcGFuLmR1cmF0aW9uXTtcbiAgICB9KTtcbiAgICBjb25zdCBjaGlsZHJlbkR1cmF0aW9uID0gZ2V0Tm9uT3ZlcmxhcHBpbmdEdXJhdGlvbihyYW5nZXMpO1xuICAgIGNvbnN0IHNlbGZEdXJhdGlvbiA9IHJvdy5kdXJhdGlvbiAtIGNoaWxkcmVuRHVyYXRpb247XG4gICAgY29uc3Qgc3RhdHMgPSBnZXRTdGF0cyhyb3cuZHVyYXRpb24sIHRyYWNlRHVyYXRpb24sIHNlbGZEdXJhdGlvbik7XG5cbiAgICBub2Rlcy5wdXNoKHtcbiAgICAgIFtGaWVsZHMuaWRdOiByb3cuc3BhbklELFxuICAgICAgW0ZpZWxkcy50aXRsZV06IHJvdy5zZXJ2aWNlTmFtZSA/PyAnJyxcbiAgICAgIFtGaWVsZHMuc3ViVGl0bGVdOiByb3cub3BlcmF0aW9uTmFtZSxcbiAgICAgIFtGaWVsZHMubWFpblN0YXRdOiBzdGF0cy5tYWluLFxuICAgICAgW0ZpZWxkcy5zZWNvbmRhcnlTdGF0XTogc3RhdHMuc2Vjb25kYXJ5LFxuICAgICAgW0ZpZWxkcy5jb2xvcl06IHNlbGZEdXJhdGlvbiAvIHRyYWNlRHVyYXRpb24sXG4gICAgfSk7XG5cbiAgICAvLyBTb21ldGltZXMgc29tZSBzcGFuIGNhbiBiZSBtaXNzaW5nLiBEb24ndCBhZGQgZWRnZXMgZm9yIHRob3NlLlxuICAgIGlmIChyb3cucGFyZW50U3BhbklEICYmIHNwYW5NYXBbcm93LnBhcmVudFNwYW5JRF0uc3Bhbikge1xuICAgICAgZWRnZXMucHVzaCh7XG4gICAgICAgIFtGaWVsZHMuaWRdOiByb3cucGFyZW50U3BhbklEICsgJy0tJyArIHJvdy5zcGFuSUQsXG4gICAgICAgIFtGaWVsZHMudGFyZ2V0XTogcm93LnNwYW5JRCxcbiAgICAgICAgW0ZpZWxkcy5zb3VyY2VdOiByb3cucGFyZW50U3BhbklELFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbm9kZXMsIGVkZ2VzIH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBkdXJhdGlvbiBvZiB0aGUgd2hvbGUgdHJhY2UgYXMgaXQgaXNuJ3QgYSBwYXJ0IG9mIHRoZSByZXNwb25zZSBkYXRhLlxuICogTm90ZTogU2VlbXMgbGlrZSB0aGlzIHNob3VsZCBiZSB0aGUgc2FtZSBhcyBqdXN0IGxvbmdlc3Qgc3BhbiwgYnV0IHRoaXMgaXMgcHJvYmFibHkgc2FmZXIuXG4gKi9cbmZ1bmN0aW9uIGZpbmRUcmFjZUR1cmF0aW9uKHZpZXc6IERhdGFGcmFtZVZpZXc8Um93Pik6IG51bWJlciB7XG4gIGxldCB0cmFjZUVuZFRpbWUgPSAwO1xuICBsZXQgdHJhY2VTdGFydFRpbWUgPSBJbmZpbml0eTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSB2aWV3LmdldChpKTtcblxuICAgIGlmIChyb3cuc3RhcnRUaW1lIDwgdHJhY2VTdGFydFRpbWUpIHtcbiAgICAgIHRyYWNlU3RhcnRUaW1lID0gcm93LnN0YXJ0VGltZTtcbiAgICB9XG5cbiAgICBpZiAocm93LnN0YXJ0VGltZSArIHJvdy5kdXJhdGlvbiA+IHRyYWNlRW5kVGltZSkge1xuICAgICAgdHJhY2VFbmRUaW1lID0gcm93LnN0YXJ0VGltZSArIHJvdy5kdXJhdGlvbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJhY2VFbmRUaW1lIC0gdHJhY2VTdGFydFRpbWU7XG59XG5cbmV4cG9ydCBjb25zdCBzZWNvbmRzTWV0cmljID0gJ3RyYWNlc19zZXJ2aWNlX2dyYXBoX3JlcXVlc3Rfc2VydmVyX3NlY29uZHNfc3VtJztcbmV4cG9ydCBjb25zdCB0b3RhbHNNZXRyaWMgPSAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfcmVxdWVzdF90b3RhbCc7XG5leHBvcnQgY29uc3QgZmFpbGVkTWV0cmljID0gJ3RyYWNlc19zZXJ2aWNlX2dyYXBoX3JlcXVlc3RfZmFpbGVkX3RvdGFsJztcbmV4cG9ydCBjb25zdCBoaXN0b2dyYW1NZXRyaWMgPSAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfcmVxdWVzdF9zZXJ2ZXJfc2Vjb25kc19idWNrZXQnO1xuXG5leHBvcnQgY29uc3Qgc2VydmljZU1hcE1ldHJpY3MgPSBbXG4gIHNlY29uZHNNZXRyaWMsXG4gIHRvdGFsc01ldHJpYyxcbiAgZmFpbGVkTWV0cmljLFxuICBoaXN0b2dyYW1NZXRyaWMsXG4gIC8vIFRoZXNlIGFyZSB1c2VkIGZvciBkZWJ1Z2dpbmcgdGhlIHRlbXBvIGNvbGxlY3Rpb24gc28gcHJvYmFibHkgbm90IHVzZWZ1bCBmb3Igc2VydmljZSBtYXAgcmlnaHQgbm93LlxuICAvLyAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfdW5wYWlyZWRfc3BhbnNfdG90YWwnLFxuICAvLyAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfdW50YWdnZWRfc3BhbnNfdG90YWwnLFxuXTtcblxuLyoqXG4gKiBNYXAgcmVzcG9uc2UgZnJvbSBtdWx0aXBsZSBwcm9tZXRoZXVzIG1ldHJpY3MgaW50byBhIG5vZGUgZ3JhcGggZGF0YSBmcmFtZXMgd2l0aCBub2RlcyBhbmQgZWRnZXMuXG4gKiBAcGFyYW0gcmVzcG9uc2VzXG4gKiBAcGFyYW0gcmFuZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb21NZXRyaWNzVG9TZXJ2aWNlTWFwKFxuICByZXNwb25zZXM6IERhdGFRdWVyeVJlc3BvbnNlW10sXG4gIHJhbmdlOiBUaW1lUmFuZ2Vcbik6IHsgbm9kZXM6IERhdGFGcmFtZTsgZWRnZXM6IERhdGFGcmFtZSB9IHtcbiAgY29uc3QgZnJhbWVzID0gZ2V0TWV0cmljRnJhbWVzKHJlc3BvbnNlcyk7XG5cbiAgLy8gRmlyc3QganVzdCBjb2xsZWN0IGRhdGEgZnJvbSB0aGUgbWV0cmljcyBpbnRvIGEgbWFwIHdpdGggbm9kZXMgYW5kIGVkZ2VzIGFzIGtleXNcbiAgY29uc3Qgbm9kZXNNYXA6IFJlY29yZDxzdHJpbmcsIFNlcnZpY2VNYXBTdGF0aXN0aWNzPiA9IHt9O1xuICBjb25zdCBlZGdlc01hcDogUmVjb3JkPHN0cmluZywgRWRnZU9iamVjdD4gPSB7fTtcbiAgLy8gQXQgdGhpcyBtb21lbnQgd2UgZG9uJ3QgaGF2ZSBhbnkgZXJyb3Ivc3VjY2VzcyBvciBvdGhlciBjb3VudHMgc28gd2UganVzdCB1c2UgdGhlc2UgMlxuICBjb2xsZWN0TWV0cmljRGF0YShmcmFtZXNbdG90YWxzTWV0cmljXSwgJ3RvdGFsJywgdG90YWxzTWV0cmljLCBub2Rlc01hcCwgZWRnZXNNYXApO1xuICBjb2xsZWN0TWV0cmljRGF0YShmcmFtZXNbc2Vjb25kc01ldHJpY10sICdzZWNvbmRzJywgc2Vjb25kc01ldHJpYywgbm9kZXNNYXAsIGVkZ2VzTWFwKTtcbiAgY29sbGVjdE1ldHJpY0RhdGEoZnJhbWVzW2ZhaWxlZE1ldHJpY10sICdmYWlsZWQnLCBmYWlsZWRNZXRyaWMsIG5vZGVzTWFwLCBlZGdlc01hcCk7XG5cbiAgcmV0dXJuIGNvbnZlcnRUb0RhdGFGcmFtZXMobm9kZXNNYXAsIGVkZ2VzTWFwLCByYW5nZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlcnZpY2VNYXBEYXRhRnJhbWVzKCkge1xuICBmdW5jdGlvbiBjcmVhdGVERihuYW1lOiBzdHJpbmcsIGZpZWxkczogRmllbGREVE9bXSkge1xuICAgIHJldHVybiBuZXcgTXV0YWJsZURhdGFGcmFtZSh7IG5hbWUsIGZpZWxkcywgbWV0YTogeyBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ25vZGVHcmFwaCcgfSB9KTtcbiAgfVxuXG4gIGNvbnN0IG5vZGVzID0gY3JlYXRlREYoJ05vZGVzJywgW1xuICAgIHsgbmFtZTogRmllbGRzLmlkIH0sXG4gICAgeyBuYW1lOiBGaWVsZHMudGl0bGUsIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ1NlcnZpY2UgbmFtZScgfSB9LFxuICAgIHsgbmFtZTogRmllbGRzLm1haW5TdGF0LCBjb25maWc6IHsgdW5pdDogJ21zL3InLCBkaXNwbGF5TmFtZTogJ0F2ZXJhZ2UgcmVzcG9uc2UgdGltZScgfSB9LFxuICAgIHtcbiAgICAgIG5hbWU6IEZpZWxkcy5zZWNvbmRhcnlTdGF0LFxuICAgICAgY29uZmlnOiB7IHVuaXQ6ICdyL3NlYycsIGRpc3BsYXlOYW1lOiAnUmVxdWVzdHMgcGVyIHNlY29uZCcgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IEZpZWxkcy5hcmMgKyAnc3VjY2VzcycsXG4gICAgICBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdTdWNjZXNzJywgY29sb3I6IHsgZml4ZWRDb2xvcjogJ2dyZWVuJywgbW9kZTogRmllbGRDb2xvck1vZGVJZC5GaXhlZCB9IH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBGaWVsZHMuYXJjICsgJ2ZhaWxlZCcsXG4gICAgICBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdGYWlsZWQnLCBjb2xvcjogeyBmaXhlZENvbG9yOiAncmVkJywgbW9kZTogRmllbGRDb2xvck1vZGVJZC5GaXhlZCB9IH0sXG4gICAgfSxcbiAgXSk7XG4gIGNvbnN0IGVkZ2VzID0gY3JlYXRlREYoJ0VkZ2VzJywgW1xuICAgIHsgbmFtZTogRmllbGRzLmlkIH0sXG4gICAgeyBuYW1lOiBGaWVsZHMuc291cmNlIH0sXG4gICAgeyBuYW1lOiBGaWVsZHMudGFyZ2V0IH0sXG4gICAgeyBuYW1lOiBGaWVsZHMubWFpblN0YXQsIGNvbmZpZzogeyB1bml0OiAncicsIGRpc3BsYXlOYW1lOiAnUmVxdWVzdHMnIH0gfSxcbiAgICB7IG5hbWU6IEZpZWxkcy5zZWNvbmRhcnlTdGF0LCBjb25maWc6IHsgdW5pdDogJ21zL3InLCBkaXNwbGF5TmFtZTogJ0F2ZXJhZ2UgcmVzcG9uc2UgdGltZScgfSB9LFxuICBdKTtcblxuICByZXR1cm4gW25vZGVzLCBlZGdlc107XG59XG5cbi8qKlxuICogR3JvdXAgZnJhbWVzIGZyb20gcmVzcG9uc2UgYmFzZWQgb24gcmVmIGlkIHdoaWNoIGlzIHNldCB0aGUgc2FtZSBhcyB0aGUgbWV0cmljIG5hbWUgc28gd2Uga25vdyB3aGljaCBtZXRyaWMgaXMgd2hlcmVcbiAqIGFuZCBhbHNvIHB1dCBpdCBpbnRvIERhdGFGcmFtZVZpZXcgc28gaXQncyBlYXNpZXIgdG8gd29yayB3aXRoLlxuICogQHBhcmFtIHJlc3BvbnNlc1xuICovXG5mdW5jdGlvbiBnZXRNZXRyaWNGcmFtZXMocmVzcG9uc2VzOiBEYXRhUXVlcnlSZXNwb25zZVtdKTogUmVjb3JkPHN0cmluZywgRGF0YUZyYW1lVmlldz4ge1xuICByZXR1cm4gcmVzcG9uc2VzWzBdLmRhdGEucmVkdWNlPFJlY29yZDxzdHJpbmcsIERhdGFGcmFtZVZpZXc+PigoYWNjLCBmcmFtZSkgPT4ge1xuICAgIGFjY1tmcmFtZS5yZWZJZF0gPSBuZXcgRGF0YUZyYW1lVmlldyhmcmFtZSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuXG50eXBlIFNlcnZpY2VNYXBTdGF0aXN0aWNzID0ge1xuICB0b3RhbD86IG51bWJlcjtcbiAgc2Vjb25kcz86IG51bWJlcjtcbiAgZmFpbGVkPzogbnVtYmVyO1xufTtcblxudHlwZSBFZGdlT2JqZWN0ID0gU2VydmljZU1hcFN0YXRpc3RpY3MgJiB7XG4gIHNvdXJjZTogc3RyaW5nO1xuICB0YXJnZXQ6IHN0cmluZztcbn07XG5cbi8qKlxuICogQ29sbGVjdCBkYXRhIGZyb20gYSBtZXRyaWMgaW50byBhIG1hcCBvZiBub2RlcyBhbmQgZWRnZXMuIFRoZSBtZXRyaWMgZGF0YSBpcyBtb2RlbGVkIGFzIGNvdW50cyBvZiBtZXRyaWMgcGVyIGVkZ2VcbiAqIHdoaWNoIGlzIGEgcGFpciBvZiBjbGllbnQtc2VydmVyIG5vZGVzLiBUaGlzIG1lYW5zIHdlIGNvbnZlcnQgZWFjaCByb3cgb2YgdGhlIG1ldHJpYyAxLTEgdG8gZWRnZXMgYW5kIHRoYW4gd2UgYXNzaWduXG4gKiB0aGUgbWV0cmljIGFsc28gdG8gc2VydmVyLiBXZSBjb3VudCB0aGUgc3RhdHMgZm9yIHNlcnZlciBvbmx5IGFzIHdlIHNob3cgcmVxdWVzdHMvdHJhbnNhY3Rpb25zIHRoYXQgcGFydGljdWxhciBub2RlXG4gKiBwcm9jZXNzZWQgbm90IHRob3NlIHdoaWNoIGl0IGdlbmVyYXRlZCBhbmQgb3RoZXIgc3RhdHMgbGlrZSBhdmVyYWdlIHRyYW5zYWN0aW9uIHRpbWUgdGhlbiBzdGVtIGZyb20gdGhhdC5cbiAqIEBwYXJhbSBmcmFtZVxuICogQHBhcmFtIHN0YXRcbiAqIEBwYXJhbSBtZXRyaWNcbiAqIEBwYXJhbSBub2Rlc01hcFxuICogQHBhcmFtIGVkZ2VzTWFwXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RNZXRyaWNEYXRhKFxuICBmcmFtZTogRGF0YUZyYW1lVmlldyB8IHVuZGVmaW5lZCxcbiAgc3RhdDoga2V5b2YgU2VydmljZU1hcFN0YXRpc3RpY3MsXG4gIG1ldHJpYzogc3RyaW5nLFxuICBub2Rlc01hcDogUmVjb3JkPHN0cmluZywgU2VydmljZU1hcFN0YXRpc3RpY3M+LFxuICBlZGdlc01hcDogUmVjb3JkPHN0cmluZywgRWRnZU9iamVjdD5cbikge1xuICBpZiAoIWZyYW1lKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gVGhlIG5hbWUgb2YgdGhlIHZhbHVlIGNvbHVtbiBpcyBpbiB0aGlzIGZvcm1hdFxuICAvLyBUT0RPIGZpZ3VyZSBvdXQgaWYgaXQgY2FuIGJlIGNoYW5nZWRcbiAgY29uc3QgdmFsdWVOYW1lID0gYFZhbHVlICMke21ldHJpY31gO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBmcmFtZS5nZXQoaSk7XG4gICAgY29uc3QgZWRnZUlkID0gYCR7cm93LmNsaWVudH1fJHtyb3cuc2VydmVyfWA7XG5cbiAgICBpZiAoIWVkZ2VzTWFwW2VkZ2VJZF0pIHtcbiAgICAgIC8vIENyZWF0ZSBlZGdlIGFzIGl0IGRvZXMgbm90IGV4aXN0IHlldFxuICAgICAgZWRnZXNNYXBbZWRnZUlkXSA9IHtcbiAgICAgICAgdGFyZ2V0OiByb3cuc2VydmVyLFxuICAgICAgICBzb3VyY2U6IHJvdy5jbGllbnQsXG4gICAgICAgIFtzdGF0XTogcm93W3ZhbHVlTmFtZV0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZGQgc3RhdCB0byBlZGdlXG4gICAgICAvLyBXZSBhcmUgYWRkaW5nIHRoZSB2YWx1ZXMgaWYgZXhpc3RzIGJ1dCB0aGF0IHNob3VsZCBub3QgaGFwcGVuIGluIGdlbmVyYWwgYXMgdGhlcmUgc2hvdWxkIGJlIHNpbmdsZSByb3cgZm9yXG4gICAgICAvLyBhbiBlZGdlLlxuICAgICAgZWRnZXNNYXBbZWRnZUlkXVtzdGF0XSA9IChlZGdlc01hcFtlZGdlSWRdW3N0YXRdIHx8IDApICsgcm93W3ZhbHVlTmFtZV07XG4gICAgfVxuXG4gICAgaWYgKCFub2Rlc01hcFtyb3cuc2VydmVyXSkge1xuICAgICAgLy8gQ3JlYXRlIG5vZGUgZm9yIHNlcnZlclxuICAgICAgbm9kZXNNYXBbcm93LnNlcnZlcl0gPSB7XG4gICAgICAgIFtzdGF0XTogcm93W3ZhbHVlTmFtZV0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZGQgc3RhdCB0byBzZXJ2ZXIgbm9kZS4gU3VtIHVwIHZhbHVlcyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgZWRnZXMgdGFyZ2V0aW5nIHRoaXMgc2VydmVyIG5vZGUuXG4gICAgICBub2Rlc01hcFtyb3cuc2VydmVyXVtzdGF0XSA9IChub2Rlc01hcFtyb3cuc2VydmVyXVtzdGF0XSB8fCAwKSArIHJvd1t2YWx1ZU5hbWVdO1xuICAgIH1cblxuICAgIGlmICghbm9kZXNNYXBbcm93LmNsaWVudF0pIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgY2xpZW50IG5vZGUgYnV0IGRvbid0IGFkZCB0aGUgc3RhdCBhcyBlZGdlIHN0YXRzIGFyZSBhdHRyaWJ1dGVkIHRvIHRoZSBzZXJ2ZXIgbm9kZS4gVGhpcyBtZWFucyBmb3JcbiAgICAgIC8vIGV4YW1wbGUgdGhhdCB0aGUgbnVtYmVyIG9mIHJlcXVlc3RzIGluIGEgbm9kZSBzaG93IGhvdyBtYW55IHJlcXVlc3RzIGl0IGhhbmRsZWQgbm90IGhvdyBtYW55IGl0IGdlbmVyYXRlZC5cbiAgICAgIG5vZGVzTWFwW3Jvdy5jbGllbnRdID0ge1xuICAgICAgICBbc3RhdF06IDAsXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9EYXRhRnJhbWVzKFxuICBub2Rlc01hcDogUmVjb3JkPHN0cmluZywgU2VydmljZU1hcFN0YXRpc3RpY3M+LFxuICBlZGdlc01hcDogUmVjb3JkPHN0cmluZywgRWRnZU9iamVjdD4sXG4gIHJhbmdlOiBUaW1lUmFuZ2Vcbik6IHsgbm9kZXM6IERhdGFGcmFtZTsgZWRnZXM6IERhdGFGcmFtZSB9IHtcbiAgY29uc3QgcmFuZ2VNcyA9IHJhbmdlLnRvLnZhbHVlT2YoKSAtIHJhbmdlLmZyb20udmFsdWVPZigpO1xuICBjb25zdCBbbm9kZXMsIGVkZ2VzXSA9IGNyZWF0ZVNlcnZpY2VNYXBEYXRhRnJhbWVzKCk7XG4gIGZvciAoY29uc3Qgbm9kZUlkIG9mIE9iamVjdC5rZXlzKG5vZGVzTWFwKSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlc01hcFtub2RlSWRdO1xuICAgIG5vZGVzLmFkZCh7XG4gICAgICBbRmllbGRzLmlkXTogbm9kZUlkLFxuICAgICAgW0ZpZWxkcy50aXRsZV06IG5vZGVJZCxcbiAgICAgIC8vIE5hTiB3aWxsIG5vdCBiZSBzaG93biBpbiB0aGUgbm9kZSBncmFwaC4gVGhpcyBoYXBwZW5zIGZvciBhIHJvb3QgY2xpZW50IG5vZGUgd2hpY2ggZGlkIG5vdCBwcm9jZXNzXG4gICAgICAvLyBhbnkgcmVxdWVzdHMgaXRzZWxmLlxuICAgICAgW0ZpZWxkcy5tYWluU3RhdF06IG5vZGUudG90YWwgPyAobm9kZS5zZWNvbmRzISAvIG5vZGUudG90YWwpICogMTAwMCA6IE51bWJlci5OYU4sIC8vIEF2ZXJhZ2UgcmVzcG9uc2UgdGltZVxuICAgICAgW0ZpZWxkcy5zZWNvbmRhcnlTdGF0XTogbm9kZS50b3RhbCA/IE1hdGgucm91bmQoKG5vZGUudG90YWwgLyAocmFuZ2VNcyAvIDEwMDApKSAqIDEwMCkgLyAxMDAgOiBOdW1iZXIuTmFOLCAvLyBSZXF1ZXN0IHBlciBzZWNvbmQgKHRvIDIgZGVjaW1hbHMpXG4gICAgICBbRmllbGRzLmFyYyArICdzdWNjZXNzJ106IG5vZGUudG90YWwgPyAobm9kZS50b3RhbCAtIE1hdGgubWluKG5vZGUuZmFpbGVkIHx8IDAsIG5vZGUudG90YWwpKSAvIG5vZGUudG90YWwgOiAxLFxuICAgICAgW0ZpZWxkcy5hcmMgKyAnZmFpbGVkJ106IG5vZGUudG90YWwgPyBNYXRoLm1pbihub2RlLmZhaWxlZCB8fCAwLCBub2RlLnRvdGFsKSAvIG5vZGUudG90YWwgOiAwLFxuICAgIH0pO1xuICB9XG4gIGZvciAoY29uc3QgZWRnZUlkIG9mIE9iamVjdC5rZXlzKGVkZ2VzTWFwKSkge1xuICAgIGNvbnN0IGVkZ2UgPSBlZGdlc01hcFtlZGdlSWRdO1xuICAgIGVkZ2VzLmFkZCh7XG4gICAgICBbRmllbGRzLmlkXTogZWRnZUlkLFxuICAgICAgW0ZpZWxkcy5zb3VyY2VdOiBlZGdlLnNvdXJjZSxcbiAgICAgIFtGaWVsZHMudGFyZ2V0XTogZWRnZS50YXJnZXQsXG4gICAgICBbRmllbGRzLm1haW5TdGF0XTogZWRnZS50b3RhbCwgLy8gUmVxdWVzdHNcbiAgICAgIFtGaWVsZHMuc2Vjb25kYXJ5U3RhdF06IGVkZ2UudG90YWwgPyAoZWRnZS5zZWNvbmRzISAvIGVkZ2UudG90YWwpICogMTAwMCA6IE51bWJlci5OYU4sIC8vIEF2ZXJhZ2UgcmVzcG9uc2UgdGltZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgbm9kZXMsIGVkZ2VzIH07XG59XG4iLCJpbXBvcnQgeyBIaXN0b3J5SXRlbSwgTGFuZ3VhZ2VQcm92aWRlciwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBDb21wbGV0aW9uSXRlbUdyb3VwLCBUeXBlYWhlYWRJbnB1dCwgVHlwZWFoZWFkT3V0cHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgVmFsdWUgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBUZW1wb0RhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wb0xhbmd1YWdlUHJvdmlkZXIgZXh0ZW5kcyBMYW5ndWFnZVByb3ZpZGVyIHtcbiAgZGF0YXNvdXJjZTogVGVtcG9EYXRhc291cmNlO1xuICB0YWdzPzogc3RyaW5nW107XG4gIGNvbnN0cnVjdG9yKGRhdGFzb3VyY2U6IFRlbXBvRGF0YXNvdXJjZSwgaW5pdGlhbFZhbHVlcz86IGFueSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdGlhbFZhbHVlcyk7XG4gIH1cblxuICByZXF1ZXN0ID0gYXN5bmMgKHVybDogc3RyaW5nLCBwYXJhbXMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZGF0YXNvdXJjZS5tZXRhZGF0YVJlcXVlc3QodXJsLCBwYXJhbXMpO1xuICAgIHJldHVybiByZXM/LmRhdGE7XG4gIH07XG5cbiAgc3RhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdGhpcy5mZXRjaFRhZ3MoKTtcbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgYXN5bmMgZmV0Y2hUYWdzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCcvYXBpL3NlYXJjaC90YWdzJywgW10pO1xuICAgIHRoaXMudGFncyA9IHJlc3BvbnNlLnRhZ05hbWVzO1xuICB9XG5cbiAgcHJvdmlkZUNvbXBsZXRpb25JdGVtcyA9IGFzeW5jIChcbiAgICB7IHByZWZpeCwgdGV4dCwgdmFsdWUsIGxhYmVsS2V5LCB3cmFwcGVyQ2xhc3NlcyB9OiBUeXBlYWhlYWRJbnB1dCxcbiAgICBjb250ZXh0OiB7IGhpc3Rvcnk6IEFycmF5PEhpc3RvcnlJdGVtPGFueT4+IH0gPSB7IGhpc3Rvcnk6IFtdIH1cbiAgKTogUHJvbWlzZTxUeXBlYWhlYWRPdXRwdXQ+ID0+IHtcbiAgICBjb25zdCBlbXB0eVJlc3VsdDogVHlwZWFoZWFkT3V0cHV0ID0geyBzdWdnZXN0aW9uczogW10gfTtcblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBlbXB0eVJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHZhbHVlLmVuZFRleHQuZ2V0VGV4dCgpO1xuICAgIGNvbnN0IGlzVmFsdWUgPSBxdWVyeVtxdWVyeS5pbmRleE9mKHRleHQpIC0gMV0gPT09ICc9JztcbiAgICBpZiAoaXNWYWx1ZSB8fCB0ZXh0ID09PSAnPScpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFRhZ1ZhbHVlQ29tcGxldGlvbkl0ZW1zKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGFnc0NvbXBsZXRpb25JdGVtcygpO1xuICB9O1xuXG4gIGdldFRhZ3NDb21wbGV0aW9uSXRlbXMgPSAoKTogVHlwZWFoZWFkT3V0cHV0ID0+IHtcbiAgICBjb25zdCB7IHRhZ3MgfSA9IHRoaXM7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbnM6IENvbXBsZXRpb25JdGVtR3JvdXBbXSA9IFtdO1xuXG4gICAgaWYgKHRhZ3M/Lmxlbmd0aCkge1xuICAgICAgc3VnZ2VzdGlvbnMucHVzaCh7XG4gICAgICAgIGxhYmVsOiBgVGFnYCxcbiAgICAgICAgaXRlbXM6IHRhZ3MubWFwKCh0YWcpID0+ICh7IGxhYmVsOiB0YWcgfSkpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VnZ2VzdGlvbnMgfTtcbiAgfTtcblxuICBhc3luYyBnZXRUYWdWYWx1ZUNvbXBsZXRpb25JdGVtcyh2YWx1ZTogVmFsdWUpIHtcbiAgICBjb25zdCB0YWdzID0gdmFsdWUuZW5kVGV4dC5nZXRUZXh0KCkuc3BsaXQoJyAnKTtcblxuICAgIGxldCB0YWdOYW1lID0gdGFnc1t0YWdzLmxlbmd0aCAtIDFdID8/ICcnO1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNwbGl0KCc9JylbMF07XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdChgL2FwaS9zZWFyY2gvdGFnLyR7dGFnTmFtZX0vdmFsdWVzYCwgW10pO1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zOiBDb21wbGV0aW9uSXRlbUdyb3VwW10gPSBbXTtcblxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS50YWdWYWx1ZXMpIHtcbiAgICAgIHN1Z2dlc3Rpb25zLnB1c2goe1xuICAgICAgICBsYWJlbDogYFRhZyBWYWx1ZXNgLFxuICAgICAgICBpdGVtczogcmVzcG9uc2UudGFnVmFsdWVzLm1hcCgodGFnVmFsdWU6IHN0cmluZykgPT4gKHsgbGFiZWw6IHRhZ1ZhbHVlIH0pKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyBzdWdnZXN0aW9ucyB9O1xuICB9XG5cbiAgYXN5bmMgZ2V0T3B0aW9ucyh0YWc6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3QoYC9hcGkvc2VhcmNoL3RhZy8ke3RhZ30vdmFsdWVzYCk7XG4gICAgbGV0IG9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9IFtdO1xuXG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnRhZ1ZhbHVlcykge1xuICAgICAgb3B0aW9ucyA9IHJlc3BvbnNlLnRhZ1ZhbHVlcy5tYXAoKHY6IHN0cmluZykgPT4gKHtcbiAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgIGxhYmVsOiB2LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgQ2hlYXRTaGVldCBmcm9tICcuL0NoZWF0U2hlZXQnO1xuaW1wb3J0IHsgQ29uZmlnRWRpdG9yIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uL0NvbmZpZ0VkaXRvcic7XG5pbXBvcnQgeyBUZW1wb0RhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgVGVtcG9RdWVyeUZpZWxkIH0gZnJvbSAnLi9RdWVyeUVkaXRvci9RdWVyeUZpZWxkJztcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luKFRlbXBvRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5RWRpdG9yKFRlbXBvUXVlcnlGaWVsZClcbiAgLnNldENvbmZpZ0VkaXRvcihDb25maWdFZGl0b3IpXG4gIC5zZXRRdWVyeUVkaXRvckhlbHAoQ2hlYXRTaGVldCk7XG4iLCJpbXBvcnQge1xuICBBcnJheVZlY3RvcixcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIEZpZWxkLFxuICBGaWVsZFR5cGUsXG4gIE11dGFibGVEYXRhRnJhbWUsXG4gIFRyYWNlS2V5VmFsdWVQYWlyLFxuICBUcmFjZUxvZyxcbiAgVHJhY2VTcGFuUmVmZXJlbmNlLFxuICBUcmFjZVNwYW5Sb3csXG4gIGRhdGVUaW1lRm9ybWF0LFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNwYW5TdGF0dXMsIFNwYW5TdGF0dXNDb2RlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJztcbmltcG9ydCB7IGNvbGxlY3RvclR5cGVzIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItY29sbGVjdG9yJztcbmltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZSc7XG5pbXBvcnQgZGlmZmVyZW5jZUluSG91cnMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluSG91cnMnO1xuaW1wb3J0IHsgU2VtYW50aWNSZXNvdXJjZUF0dHJpYnV0ZXMgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9zZW1hbnRpYy1jb252ZW50aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVHcmFwaEZyYW1lcyB9IGZyb20gJy4vZ3JhcGhUcmFuc2Zvcm0nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVGcmFtZShcbiAgbG9nc0ZyYW1lOiBEYXRhRnJhbWUsXG4gIGRhdGFzb3VyY2VVaWQ6IHN0cmluZyxcbiAgZGF0YXNvdXJjZU5hbWU6IHN0cmluZyxcbiAgdHJhY2VSZWdleHM6IHN0cmluZ1tdXG4pOiBEYXRhRnJhbWUge1xuICBjb25zdCB0YWJsZUZyYW1lID0gbmV3IE11dGFibGVEYXRhRnJhbWUoe1xuICAgIGZpZWxkczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnVGltZScsXG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS50aW1lLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICBjdXN0b206IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0cmFjZUlEJyxcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgZGlzcGxheU5hbWVGcm9tRFM6ICdUcmFjZSBJRCcsXG4gICAgICAgICAgY3VzdG9tOiB7IHdpZHRoOiAzMDAgfSxcbiAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ0NsaWNrIHRvIG9wZW4gdHJhY2UgJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWVzc2FnZScsXG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICd0YWJsZScsXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFsb2dzRnJhbWUgfHwgdHJhY2VSZWdleHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRhYmxlRnJhbWU7XG4gIH1cblxuICBjb25zdCB0aW1lRmllbGQgPSBsb2dzRnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYudHlwZSA9PT0gRmllbGRUeXBlLnRpbWUpO1xuXG4gIC8vIEdvaW5nIHRocm91Z2ggYWxsIHN0cmluZyBmaWVsZHMgdG8gbG9vayBmb3IgdHJhY2UgSURzXG4gIGZvciAobGV0IGZpZWxkIG9mIGxvZ3NGcmFtZS5maWVsZHMpIHtcbiAgICBsZXQgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gRmllbGRUeXBlLnN0cmluZykge1xuICAgICAgY29uc3QgdmFsdWVzID0gZmllbGQudmFsdWVzLnRvQXJyYXkoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSB2YWx1ZXNbaV07XG4gICAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgICAgZm9yIChsZXQgdHJhY2VSZWdleCBvZiB0cmFjZVJlZ2V4cykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAobGluZSBhcyBzdHJpbmcpLm1hdGNoKHRyYWNlUmVnZXgpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRyYWNlSWQgPSBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgY29uc3QgdGltZSA9IHRpbWVGaWVsZCA/IHRpbWVGaWVsZC52YWx1ZXMuZ2V0KGkpIDogbnVsbDtcbiAgICAgICAgICAgICAgdGFibGVGcmFtZS5maWVsZHNbMF0udmFsdWVzLmFkZCh0aW1lKTtcbiAgICAgICAgICAgICAgdGFibGVGcmFtZS5maWVsZHNbMV0udmFsdWVzLmFkZCh0cmFjZUlkKTtcbiAgICAgICAgICAgICAgdGFibGVGcmFtZS5maWVsZHNbMl0udmFsdWVzLmFkZChsaW5lKTtcbiAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWJsZUZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVHJhY2VMaXN0KFxuICByZXNwb25zZTogRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIGRhdGFzb3VyY2VJZDogc3RyaW5nLFxuICBkYXRhc291cmNlTmFtZTogc3RyaW5nLFxuICB0cmFjZVJlZ2V4czogc3RyaW5nW11cbik6IERhdGFRdWVyeVJlc3BvbnNlIHtcbiAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGZyYW1lID0gY3JlYXRlVGFibGVGcmFtZShkYXRhLCBkYXRhc291cmNlSWQsIGRhdGFzb3VyY2VOYW1lLCB0cmFjZVJlZ2V4cyk7XG4gICAgcmVzcG9uc2UuZGF0YVtpbmRleF0gPSBmcmFtZTtcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuLy8gRG9uJ3QgZm9yZ2V0IHRvIGNoYW5nZSB0aGUgYmFja2VuZCBjb2RlIHdoZW4gdGhlIGlkIHJlcHJlc2VudGF0aW9uIGNoYW5nZWRcbmZ1bmN0aW9uIHRyYW5zZm9ybUJhc2U2NElEVG9IZXhTdHJpbmcoYmFzZTY0OiBzdHJpbmcpIHtcbiAgY29uc3QgcmF3ID0gYXRvYihiYXNlNjQpO1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaGV4ID0gcmF3LmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMTYpO1xuICAgIHJlc3VsdCArPSBoZXgubGVuZ3RoID09PSAyID8gaGV4IDogJzAnICsgaGV4O1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAxNiA/IHJlc3VsdC5zbGljZSgxNikgOiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUhleFN0cmluZ1RvQmFzZTY0SUQoaGV4OiBzdHJpbmcpIHtcbiAgY29uc3QgaGV4QXJyYXkgPSBoZXgubWF0Y2goL1xcd3syfS9nKSB8fCBbXTtcbiAgcmV0dXJuIGJ0b2EoXG4gICAgaGV4QXJyYXlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoYSwgMTYpKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJylcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUodmFsdWU6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by5jb21tb24udjEuQW55VmFsdWUpOiBhbnkge1xuICBpZiAodmFsdWUuc3RyaW5nVmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3RyaW5nVmFsdWU7XG4gIH1cblxuICBpZiAodmFsdWUuYm9vbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZS5ib29sVmFsdWUpO1xuICB9XG5cbiAgaWYgKHZhbHVlLmludFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLmludFZhbHVlIGFzIGFueSwgMTApO1xuICB9XG5cbiAgaWYgKHZhbHVlLmRvdWJsZVZhbHVlKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbHVlLmRvdWJsZVZhbHVlIGFzIGFueSk7XG4gIH1cblxuICBpZiAodmFsdWUuYXJyYXlWYWx1ZSkge1xuICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGFyVmFsdWUgb2YgdmFsdWUuYXJyYXlWYWx1ZS52YWx1ZXMpIHtcbiAgICAgIGFycmF5VmFsdWUucHVzaChnZXRBdHRyaWJ1dGVWYWx1ZShhclZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheVZhbHVlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXNvdXJjZVRvUHJvY2VzcyhyZXNvdXJjZTogY29sbGVjdG9yVHlwZXMub3BlbnRlbGVtZXRyeVByb3RvLnJlc291cmNlLnYxLlJlc291cmNlIHwgdW5kZWZpbmVkKSB7XG4gIGNvbnN0IHNlcnZpY2VUYWdzOiBUcmFjZUtleVZhbHVlUGFpcltdID0gW107XG4gIGxldCBzZXJ2aWNlTmFtZSA9ICdPVExQUmVzb3VyY2VOb1NlcnZpY2VOYW1lJztcbiAgaWYgKCFyZXNvdXJjZSkge1xuICAgIHJldHVybiB7IHNlcnZpY2VOYW1lLCBzZXJ2aWNlVGFncyB9O1xuICB9XG5cbiAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgcmVzb3VyY2UuYXR0cmlidXRlcykge1xuICAgIGlmIChhdHRyaWJ1dGUua2V5ID09PSBTZW1hbnRpY1Jlc291cmNlQXR0cmlidXRlcy5TRVJWSUNFX05BTUUpIHtcbiAgICAgIHNlcnZpY2VOYW1lID0gYXR0cmlidXRlLnZhbHVlLnN0cmluZ1ZhbHVlIHx8IHNlcnZpY2VOYW1lO1xuICAgIH1cbiAgICBzZXJ2aWNlVGFncy5wdXNoKHsga2V5OiBhdHRyaWJ1dGUua2V5LCB2YWx1ZTogZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlLnZhbHVlKSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHNlcnZpY2VOYW1lLCBzZXJ2aWNlVGFncyB9O1xufVxuXG5mdW5jdGlvbiBnZXRTcGFuVGFncyhcbiAgc3BhbjogY29sbGVjdG9yVHlwZXMub3BlbnRlbGVtZXRyeVByb3RvLnRyYWNlLnYxLlNwYW4sXG4gIGluc3RydW1lbnRhdGlvbkxpYnJhcnk/OiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLkluc3RydW1lbnRhdGlvbkxpYnJhcnlcbik6IFRyYWNlS2V5VmFsdWVQYWlyW10ge1xuICBjb25zdCBzcGFuVGFnczogVHJhY2VLZXlWYWx1ZVBhaXJbXSA9IFtdO1xuXG4gIGlmIChpbnN0cnVtZW50YXRpb25MaWJyYXJ5KSB7XG4gICAgaWYgKGluc3RydW1lbnRhdGlvbkxpYnJhcnkubmFtZSkge1xuICAgICAgc3BhblRhZ3MucHVzaCh7IGtleTogJ290ZWwubGlicmFyeS5uYW1lJywgdmFsdWU6IGluc3RydW1lbnRhdGlvbkxpYnJhcnkubmFtZSB9KTtcbiAgICB9XG4gICAgaWYgKGluc3RydW1lbnRhdGlvbkxpYnJhcnkudmVyc2lvbikge1xuICAgICAgc3BhblRhZ3MucHVzaCh7IGtleTogJ290ZWwubGlicmFyeS52ZXJzaW9uJywgdmFsdWU6IGluc3RydW1lbnRhdGlvbkxpYnJhcnkudmVyc2lvbiB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3Bhbi5hdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2Ygc3Bhbi5hdHRyaWJ1dGVzKSB7XG4gICAgICBzcGFuVGFncy5wdXNoKHsga2V5OiBhdHRyaWJ1dGUua2V5LCB2YWx1ZTogZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlLnZhbHVlKSB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3Bhbi5zdGF0dXMpIHtcbiAgICBpZiAoc3Bhbi5zdGF0dXMuY29kZSAmJiAoc3Bhbi5zdGF0dXMuY29kZSBhcyBhbnkpICE9PSBTcGFuU3RhdHVzQ29kZS5VTlNFVCkge1xuICAgICAgc3BhblRhZ3MucHVzaCh7XG4gICAgICAgIGtleTogJ290ZWwuc3RhdHVzX2NvZGUnLFxuICAgICAgICB2YWx1ZTogU3BhblN0YXR1c0NvZGVbc3Bhbi5zdGF0dXMuY29kZV0sXG4gICAgICB9KTtcbiAgICAgIGlmIChzcGFuLnN0YXR1cy5tZXNzYWdlKSB7XG4gICAgICAgIHNwYW5UYWdzLnB1c2goeyBrZXk6ICdvdGVsLnN0YXR1c19kZXNjcmlwdGlvbicsIHZhbHVlOiBzcGFuLnN0YXR1cy5tZXNzYWdlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3Bhbi5zdGF0dXMuY29kZSA9PT0gU3BhblN0YXR1c0NvZGUuRVJST1IpIHtcbiAgICAgIHNwYW5UYWdzLnB1c2goeyBrZXk6ICdlcnJvcicsIHZhbHVlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzcGFuLmtpbmQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHNwbGl0ID0gc3Bhbi5raW5kLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5zcGxpdCgnXycpO1xuICAgIHNwYW5UYWdzLnB1c2goe1xuICAgICAga2V5OiAnc3Bhbi5raW5kJyxcbiAgICAgIHZhbHVlOiBzcGxpdC5sZW5ndGggPyBzcGxpdFtzcGxpdC5sZW5ndGggLSAxXSA6IHNwYW4ua2luZC50b1N0cmluZygpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHNwYW5UYWdzO1xufVxuXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2VzKHNwYW46IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5TcGFuKSB7XG4gIGNvbnN0IHJlZmVyZW5jZXM6IFRyYWNlU3BhblJlZmVyZW5jZVtdID0gW107XG4gIGlmIChzcGFuLmxpbmtzKSB7XG4gICAgZm9yIChjb25zdCBsaW5rIG9mIHNwYW4ubGlua3MpIHtcbiAgICAgIGNvbnN0IHsgdHJhY2VJZCwgc3BhbklkIH0gPSBsaW5rO1xuICAgICAgY29uc3QgdGFnczogVHJhY2VLZXlWYWx1ZVBhaXJbXSA9IFtdO1xuICAgICAgaWYgKGxpbmsuYXR0cmlidXRlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBsaW5rLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICB0YWdzLnB1c2goeyBrZXk6IGF0dHJpYnV0ZS5rZXksIHZhbHVlOiBnZXRBdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGUudmFsdWUpIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZWZlcmVuY2VzLnB1c2goeyB0cmFjZUlEOiB0cmFjZUlkLCBzcGFuSUQ6IHNwYW5JZCwgdGFncyB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlcztcbn1cblxuZnVuY3Rpb24gZ2V0TG9ncyhzcGFuOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8udHJhY2UudjEuU3Bhbikge1xuICBjb25zdCBsb2dzOiBUcmFjZUxvZ1tdID0gW107XG4gIGlmIChzcGFuLmV2ZW50cykge1xuICAgIGZvciAoY29uc3QgZXZlbnQgb2Ygc3Bhbi5ldmVudHMpIHtcbiAgICAgIGNvbnN0IGZpZWxkczogVHJhY2VLZXlWYWx1ZVBhaXJbXSA9IFtdO1xuICAgICAgaWYgKGV2ZW50LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgZXZlbnQuYXR0cmlidXRlcykge1xuICAgICAgICAgIGZpZWxkcy5wdXNoKHsga2V5OiBhdHRyaWJ1dGUua2V5LCB2YWx1ZTogZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlLnZhbHVlKSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbG9ncy5wdXNoKHsgZmllbGRzLCB0aW1lc3RhbXA6IGV2ZW50LnRpbWVVbml4TmFubyAvIDEwMDAwMDAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Gcm9tT1RMUChcbiAgdHJhY2VEYXRhOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8udHJhY2UudjEuUmVzb3VyY2VTcGFuc1tdLFxuICBub2RlR3JhcGggPSBmYWxzZVxuKTogRGF0YVF1ZXJ5UmVzcG9uc2Uge1xuICBjb25zdCBmcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogJ3RyYWNlSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdzcGFuSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdwYXJlbnRTcGFuSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdvcGVyYXRpb25OYW1lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc2VydmljZU5hbWUnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdzZXJ2aWNlVGFncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgICAgeyBuYW1lOiAnc3RhcnRUaW1lJywgdHlwZTogRmllbGRUeXBlLm51bWJlciB9LFxuICAgICAgeyBuYW1lOiAnZHVyYXRpb24nLCB0eXBlOiBGaWVsZFR5cGUubnVtYmVyIH0sXG4gICAgICB7IG5hbWU6ICdsb2dzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgICB7IG5hbWU6ICdyZWZlcmVuY2VzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgICB7IG5hbWU6ICd0YWdzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICB0cmFjZUZvcm1hdDogJ290bHAnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgdHJ5IHtcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhY2VEYXRhKSB7XG4gICAgICBjb25zdCB7IHNlcnZpY2VOYW1lLCBzZXJ2aWNlVGFncyB9ID0gcmVzb3VyY2VUb1Byb2Nlc3MoZGF0YS5yZXNvdXJjZSk7XG4gICAgICBmb3IgKGNvbnN0IGxpYnJhcnlTcGFuIG9mIGRhdGEuaW5zdHJ1bWVudGF0aW9uTGlicmFyeVNwYW5zKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3BhbiBvZiBsaWJyYXJ5U3Bhbi5zcGFucykge1xuICAgICAgICAgIGZyYW1lLmFkZCh7XG4gICAgICAgICAgICB0cmFjZUlEOiB0cmFuc2Zvcm1CYXNlNjRJRFRvSGV4U3RyaW5nKHNwYW4udHJhY2VJZCksXG4gICAgICAgICAgICBzcGFuSUQ6IHRyYW5zZm9ybUJhc2U2NElEVG9IZXhTdHJpbmcoc3Bhbi5zcGFuSWQpLFxuICAgICAgICAgICAgcGFyZW50U3BhbklEOiB0cmFuc2Zvcm1CYXNlNjRJRFRvSGV4U3RyaW5nKHNwYW4ucGFyZW50U3BhbklkIHx8ICcnKSxcbiAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IHNwYW4ubmFtZSB8fCAnJyxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgc2VydmljZVRhZ3MsXG4gICAgICAgICAgICBzdGFydFRpbWU6IHNwYW4uc3RhcnRUaW1lVW5peE5hbm8hIC8gMTAwMDAwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAoc3Bhbi5lbmRUaW1lVW5peE5hbm8hIC0gc3Bhbi5zdGFydFRpbWVVbml4TmFubyEpIC8gMTAwMDAwMCxcbiAgICAgICAgICAgIHRhZ3M6IGdldFNwYW5UYWdzKHNwYW4sIGxpYnJhcnlTcGFuLmluc3RydW1lbnRhdGlvbkxpYnJhcnkpLFxuICAgICAgICAgICAgbG9nczogZ2V0TG9ncyhzcGFuKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZXM6IGdldFJlZmVyZW5jZXMoc3BhbiksXG4gICAgICAgICAgfSBhcyBUcmFjZVNwYW5Sb3cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6ICdKU09OIGlzIG5vdCB2YWxpZCBPcGVuVGVsZW1ldHJ5IGZvcm1hdDogJyArIGVycm9yIH0sIGRhdGE6IFtdIH07XG4gIH1cblxuICBsZXQgZGF0YSA9IFtmcmFtZV07XG4gIGlmIChub2RlR3JhcGgpIHtcbiAgICBkYXRhLnB1c2goLi4uKGNyZWF0ZUdyYXBoRnJhbWVzKGZyYW1lKSBhcyBNdXRhYmxlRGF0YUZyYW1lW10pKTtcbiAgfVxuXG4gIHJldHVybiB7IGRhdGEgfTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRyYWNlIGRhdGFmcmFtZXMgdG8gdGhlIE9wZW5UZWxlbWV0cnkgZm9ybWF0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub09UTFAoZGF0YTogTXV0YWJsZURhdGFGcmFtZSk6IHtcbiAgYmF0Y2hlczogY29sbGVjdG9yVHlwZXMub3BlbnRlbGVtZXRyeVByb3RvLnRyYWNlLnYxLlJlc291cmNlU3BhbnNbXTtcbn0ge1xuICBsZXQgcmVzdWx0OiB7IGJhdGNoZXM6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5SZXNvdXJjZVNwYW5zW10gfSA9IHtcbiAgICBiYXRjaGVzOiBbXSxcbiAgfTtcblxuICAvLyBMb29rdXAgb2JqZWN0IHRvIHNlZSB3aGljaCBiYXRjaCBjb250YWlucyBzcGFucyBmb3Igd2hpY2ggc2VydmljZXNcbiAgbGV0IHNlcnZpY2VzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3BhbiA9IGRhdGEuZ2V0KGkpO1xuXG4gICAgLy8gR3JvdXAgc3BhbnMgYmFzZWQgb24gc2VydmljZVxuICAgIGlmICghc2VydmljZXNbc3Bhbi5zZXJ2aWNlTmFtZV0pIHtcbiAgICAgIHNlcnZpY2VzW3NwYW4uc2VydmljZU5hbWVdID0gcmVzdWx0LmJhdGNoZXMubGVuZ3RoO1xuICAgICAgcmVzdWx0LmJhdGNoZXMucHVzaCh7XG4gICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICAgICAgZHJvcHBlZEF0dHJpYnV0ZXNDb3VudDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uTGlicmFyeVNwYW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3BhbnM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgYmF0Y2hJbmRleCA9IHNlcnZpY2VzW3NwYW4uc2VydmljZU5hbWVdO1xuXG4gICAgLy8gUG9wdWxhdGUgcmVzb3VyY2UgYXR0cmlidXRlcyBmcm9tIHNlcnZpY2UgdGFnc1xuICAgIGlmIChyZXN1bHQuYmF0Y2hlc1tiYXRjaEluZGV4XS5yZXNvdXJjZSEuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlc3VsdC5iYXRjaGVzW2JhdGNoSW5kZXhdLnJlc291cmNlIS5hdHRyaWJ1dGVzID0gdGFnc1RvQXR0cmlidXRlcyhzcGFuLnNlcnZpY2VUYWdzKTtcbiAgICB9XG5cbiAgICAvLyBQb3B1bGF0ZSBpbnN0cnVtZW50YXRpb24gbGlicmFyeSBpZiBpdCBleGlzdHNcbiAgICBpZiAoIXJlc3VsdC5iYXRjaGVzW2JhdGNoSW5kZXhdLmluc3RydW1lbnRhdGlvbkxpYnJhcnlTcGFuc1swXS5pbnN0cnVtZW50YXRpb25MaWJyYXJ5KSB7XG4gICAgICBsZXQgbGlicmFyeU5hbWUgPSBzcGFuLnRhZ3MuZmluZCgodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ID09PSAnb3RlbC5saWJyYXJ5Lm5hbWUnKT8udmFsdWU7XG4gICAgICBpZiAobGlicmFyeU5hbWUpIHtcbiAgICAgICAgcmVzdWx0LmJhdGNoZXNbYmF0Y2hJbmRleF0uaW5zdHJ1bWVudGF0aW9uTGlicmFyeVNwYW5zWzBdLmluc3RydW1lbnRhdGlvbkxpYnJhcnkgPSB7XG4gICAgICAgICAgbmFtZTogbGlicmFyeU5hbWUsXG4gICAgICAgICAgdmVyc2lvbjogc3Bhbi50YWdzLmZpbmQoKHQ6IFRyYWNlS2V5VmFsdWVQYWlyKSA9PiB0LmtleSA9PT0gJ290ZWwubGlicmFyeS52ZXJzaW9uJyk/LnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc3VsdC5iYXRjaGVzW2JhdGNoSW5kZXhdLmluc3RydW1lbnRhdGlvbkxpYnJhcnlTcGFuc1swXS5zcGFucy5wdXNoKHtcbiAgICAgIHRyYWNlSWQ6IHRyYW5zZm9ybUhleFN0cmluZ1RvQmFzZTY0SUQoc3Bhbi50cmFjZUlELnBhZFN0YXJ0KDMyLCAnMCcpKSxcbiAgICAgIHNwYW5JZDogdHJhbnNmb3JtSGV4U3RyaW5nVG9CYXNlNjRJRChzcGFuLnNwYW5JRCksXG4gICAgICB0cmFjZVN0YXRlOiAnJyxcbiAgICAgIHBhcmVudFNwYW5JZDogdHJhbnNmb3JtSGV4U3RyaW5nVG9CYXNlNjRJRChzcGFuLnBhcmVudFNwYW5JRCB8fCAnJyksXG4gICAgICBuYW1lOiBzcGFuLm9wZXJhdGlvbk5hbWUsXG4gICAgICBraW5kOiBnZXRPVExQU3BhbktpbmQoc3Bhbi50YWdzKSBhcyBhbnksXG4gICAgICBzdGFydFRpbWVVbml4TmFubzogc3Bhbi5zdGFydFRpbWUgKiAxMDAwMDAwLFxuICAgICAgZW5kVGltZVVuaXhOYW5vOiAoc3Bhbi5zdGFydFRpbWUgKyBzcGFuLmR1cmF0aW9uKSAqIDEwMDAwMDAsXG4gICAgICBhdHRyaWJ1dGVzOiB0YWdzVG9BdHRyaWJ1dGVzKHNwYW4udGFncyksXG4gICAgICBkcm9wcGVkQXR0cmlidXRlc0NvdW50OiAwLFxuICAgICAgZHJvcHBlZEV2ZW50c0NvdW50OiAwLFxuICAgICAgZHJvcHBlZExpbmtzQ291bnQ6IDAsXG4gICAgICBzdGF0dXM6IGdldE9UTFBTdGF0dXMoc3Bhbi50YWdzKSxcbiAgICAgIGV2ZW50czogZ2V0T1RMUEV2ZW50cyhzcGFuLmxvZ3MpLFxuICAgICAgbGlua3M6IGdldE9UTFBSZWZlcmVuY2VzKHNwYW4ucmVmZXJlbmNlcyksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRPVExQU3BhbktpbmQodGFnczogVHJhY2VLZXlWYWx1ZVBhaXJbXSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGxldCBzcGFuS2luZCA9IHVuZGVmaW5lZDtcbiAgY29uc3Qgc3BhbktpbmRUYWdWYWx1ZSA9IHRhZ3MuZmluZCgodCkgPT4gdC5rZXkgPT09ICdzcGFuLmtpbmQnKT8udmFsdWU7XG4gIHN3aXRjaCAoc3BhbktpbmRUYWdWYWx1ZSkge1xuICAgIGNhc2UgJ3NlcnZlcic6XG4gICAgICBzcGFuS2luZCA9ICdTUEFOX0tJTkRfU0VSVkVSJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NsaWVudCc6XG4gICAgICBzcGFuS2luZCA9ICdTUEFOX0tJTkRfQ0xJRU5UJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y2VyJzpcbiAgICAgIHNwYW5LaW5kID0gJ1NQQU5fS0lORF9QUk9EVUNFUic7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb25zdW1lcic6XG4gICAgICBzcGFuS2luZCA9ICdTUEFOX0tJTkRfQ09OU1VNRVInO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3BhbktpbmQ7XG59XG5cbi8qKlxuICogQ29udmVydHMga2V5LXZhbHVlIHRhZ3MgdG8gT1RMUCBhdHRyaWJ1dGVzIGFuZCByZW1vdmVzIHRhZ3MgYWRkZWQgYnkgR3JhZmFuYVxuICovXG5mdW5jdGlvbiB0YWdzVG9BdHRyaWJ1dGVzKHRhZ3M6IFRyYWNlS2V5VmFsdWVQYWlyW10pOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLktleVZhbHVlW10ge1xuICByZXR1cm4gdGFnc1xuICAgIC5maWx0ZXIoXG4gICAgICAodCkgPT5cbiAgICAgICAgIVtcbiAgICAgICAgICAnc3Bhbi5raW5kJyxcbiAgICAgICAgICAnb3RlbC5saWJyYXJ5Lm5hbWUnLFxuICAgICAgICAgICdvdGVsLmxpYmFyeS52ZXJzaW9uJyxcbiAgICAgICAgICAnb3RlbC5zdGF0dXNfZGVzY3JpcHRpb24nLFxuICAgICAgICAgICdvdGVsLnN0YXR1c19jb2RlJyxcbiAgICAgICAgXS5pbmNsdWRlcyh0LmtleSlcbiAgICApXG4gICAgLnJlZHVjZTxjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLktleVZhbHVlW10+KFxuICAgICAgKGF0dHJpYnV0ZXMsIHRhZykgPT4gWy4uLmF0dHJpYnV0ZXMsIHsga2V5OiB0YWcua2V5LCB2YWx1ZTogdG9BdHRyaWJ1dGVWYWx1ZSh0YWcpIH1dLFxuICAgICAgW11cbiAgICApO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvcnJlY3QgT1RMUCBBbnlWYWx1ZSBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIHRhZyB2YWx1ZVxuICovXG5mdW5jdGlvbiB0b0F0dHJpYnV0ZVZhbHVlKHRhZzogVHJhY2VLZXlWYWx1ZVBhaXIpOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLkFueVZhbHVlIHtcbiAgaWYgKHR5cGVvZiB0YWcudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHsgc3RyaW5nVmFsdWU6IHRhZy52YWx1ZSB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0YWcudmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiB7IGJvb2xWYWx1ZTogdGFnLnZhbHVlIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHRhZy52YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodGFnLnZhbHVlICUgMSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHsgaW50VmFsdWU6IHRhZy52YWx1ZSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBkb3VibGVWYWx1ZTogdGFnLnZhbHVlIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB0YWcudmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFnLnZhbHVlKSkge1xuICAgICAgY29uc3QgdmFsdWVzOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLkFueVZhbHVlW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRhZy52YWx1ZSkge1xuICAgICAgICB2YWx1ZXMucHVzaCh0b0F0dHJpYnV0ZVZhbHVlKHZhbCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBhcnJheVZhbHVlOiB7IHZhbHVlcyB9IH07XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHN0cmluZ1ZhbHVlOiB0YWcudmFsdWUgfTtcbn1cblxuZnVuY3Rpb24gZ2V0T1RMUFN0YXR1cyh0YWdzOiBUcmFjZUtleVZhbHVlUGFpcltdKTogU3BhblN0YXR1cyB8IHVuZGVmaW5lZCB7XG4gIGxldCBzdGF0dXMgPSB1bmRlZmluZWQ7XG4gIGNvbnN0IHN0YXR1c0NvZGVUYWcgPSB0YWdzLmZpbmQoKHQpID0+IHQua2V5ID09PSAnb3RlbC5zdGF0dXNfY29kZScpO1xuICBpZiAoc3RhdHVzQ29kZVRhZykge1xuICAgIHN0YXR1cyA9IHtcbiAgICAgIGNvZGU6IHN0YXR1c0NvZGVUYWcudmFsdWUsXG4gICAgICBtZXNzYWdlOiB0YWdzLmZpbmQoKHQpID0+IHQua2V5ID09PSAnb3RlbF9zdGF0dXNfZGVzY3JpcHRpb24nKT8udmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0dXM7XG59XG5cbmZ1bmN0aW9uIGdldE9UTFBFdmVudHMobG9nczogVHJhY2VMb2dbXSk6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5TcGFuLkV2ZW50W10gfCB1bmRlZmluZWQge1xuICBpZiAoIWxvZ3MgfHwgIWxvZ3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxldCBldmVudHM6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5TcGFuLkV2ZW50W10gPSBbXTtcbiAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgIGxldCBldmVudDogY29sbGVjdG9yVHlwZXMub3BlbnRlbGVtZXRyeVByb3RvLnRyYWNlLnYxLlNwYW4uRXZlbnQgPSB7XG4gICAgICB0aW1lVW5peE5hbm86IGxvZy50aW1lc3RhbXAgKiAxMDAwMDAwLFxuICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICBkcm9wcGVkQXR0cmlidXRlc0NvdW50OiAwLFxuICAgICAgbmFtZTogJycsXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGxvZy5maWVsZHMpIHtcbiAgICAgIGV2ZW50LmF0dHJpYnV0ZXMhLnB1c2goe1xuICAgICAgICBrZXk6IGZpZWxkLmtleSxcbiAgICAgICAgdmFsdWU6IHRvQXR0cmlidXRlVmFsdWUoZmllbGQpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgfVxuICByZXR1cm4gZXZlbnRzO1xufVxuXG5mdW5jdGlvbiBnZXRPVExQUmVmZXJlbmNlcyhcbiAgcmVmZXJlbmNlczogVHJhY2VTcGFuUmVmZXJlbmNlW11cbik6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5TcGFuLkxpbmtbXSB8IHVuZGVmaW5lZCB7XG4gIGlmICghcmVmZXJlbmNlcyB8fCAhcmVmZXJlbmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgbGV0IGxpbmtzOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8udHJhY2UudjEuU3Bhbi5MaW5rW10gPSBbXTtcbiAgZm9yIChjb25zdCByZWYgb2YgcmVmZXJlbmNlcykge1xuICAgIGxldCBsaW5rOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8udHJhY2UudjEuU3Bhbi5MaW5rID0ge1xuICAgICAgdHJhY2VJZDogcmVmLnRyYWNlSUQsXG4gICAgICBzcGFuSWQ6IHJlZi5zcGFuSUQsXG4gICAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICAgIGRyb3BwZWRBdHRyaWJ1dGVzQ291bnQ6IDAsXG4gICAgfTtcbiAgICBpZiAocmVmLnRhZ3M/Lmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCB0YWcgb2YgcmVmLnRhZ3MpIHtcbiAgICAgICAgbGluay5hdHRyaWJ1dGVzPy5wdXNoKHtcbiAgICAgICAgICBrZXk6IHRhZy5rZXksXG4gICAgICAgICAgdmFsdWU6IHRvQXR0cmlidXRlVmFsdWUodGFnKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxpbmtzLnB1c2gobGluayk7XG4gIH1cbiAgcmV0dXJuIGxpbmtzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVHJhY2UocmVzcG9uc2U6IERhdGFRdWVyeVJlc3BvbnNlLCBub2RlR3JhcGggPSBmYWxzZSk6IERhdGFRdWVyeVJlc3BvbnNlIHtcbiAgLy8gV2UgbmVlZCB0byBwYXJzZSBzb21lIG9mIHRoZSBmaWVsZHMgd2hpY2ggY29udGFpbiBzdHJpbmdpZmllZCBqc29uLlxuICAvLyBTZWVtcyBsaWtlIHdlIGNhbid0IGp1c3QgbWFwIHRoZSB2YWx1ZXMgYXMgdGhlIGZyYW1lIHdlIGdvdCBmcm9tIGJhY2tlbmQgaGFzIHNvbWUgZGVmYXVsdCBwcm9jZXNzaW5nXG4gIC8vIGFuZCB3aWxsIHN0cmluZ2lmeSB0aGUganNvbiBiYWNrIHdoZW4gd2UgdHJ5IHRvIHNldCBpdC4gU28gd2UgY3JlYXRlIGEgbmV3IGZpZWxkIGFuZCBzd2FwIGl0IGluc3RlYWQuXG4gIGNvbnN0IGZyYW1lOiBEYXRhRnJhbWUgPSByZXNwb25zZS5kYXRhWzBdO1xuXG4gIGlmICghZnJhbWUpIHtcbiAgICByZXR1cm4gZW1wdHlEYXRhUXVlcnlSZXNwb25zZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcGFyc2VKc29uRmllbGRzKGZyYW1lKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogeyBtZXNzYWdlOiAnVW5hYmxlIHRvIHBhcnNlIHRyYWNlIHJlc3BvbnNlOiAnICsgZXJyb3IgfSwgZGF0YTogW10gfTtcbiAgfVxuXG4gIGxldCBkYXRhID0gWy4uLnJlc3BvbnNlLmRhdGFdO1xuICBpZiAobm9kZUdyYXBoKSB7XG4gICAgZGF0YS5wdXNoKC4uLmNyZWF0ZUdyYXBoRnJhbWVzKGZyYW1lKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnJlc3BvbnNlLFxuICAgIGRhdGEsXG4gIH07XG59XG5cbi8qKlxuICogQ2hhbmdlIGZpZWxkcyB3aGljaCBhcmUganNvbiBzdHJpbmcgaW50byBKUyBvYmplY3RzLiBNb2RpZmllcyB0aGUgZnJhbWUgaW4gcGxhY2UuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlSnNvbkZpZWxkcyhmcmFtZTogRGF0YUZyYW1lKSB7XG4gIGZvciAoY29uc3QgZmllbGROYW1lIG9mIFsnc2VydmljZVRhZ3MnLCAnbG9ncycsICd0YWdzJywgJ3JlZmVyZW5jZXMnXSkge1xuICAgIGNvbnN0IGZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gZmllbGROYW1lKTtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGNvbnN0IGZpZWxkSW5kZXggPSBmcmFtZS5maWVsZHMuaW5kZXhPZihmaWVsZCk7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBuZXcgQXJyYXlWZWN0b3IoKTtcbiAgICAgIGNvbnN0IG5ld0ZpZWxkOiBGaWVsZCA9IHtcbiAgICAgICAgLi4uZmllbGQsXG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLm90aGVyLFxuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC52YWx1ZXMuZ2V0KGkpO1xuICAgICAgICB2YWx1ZXMuc2V0KGksIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6IEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIGZyYW1lLmZpZWxkc1tmaWVsZEluZGV4XSA9IG5ld0ZpZWxkO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hSZXNwb25zZSA9IHtcbiAgdHJhY2VJRDogc3RyaW5nO1xuICByb290U2VydmljZU5hbWU6IHN0cmluZztcbiAgcm9vdFRyYWNlTmFtZTogc3RyaW5nO1xuICBzdGFydFRpbWVVbml4TmFubzogc3RyaW5nO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVGcmFtZUZyb21TZWFyY2goZGF0YTogU2VhcmNoUmVzcG9uc2VbXSwgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpIHtcbiAgY29uc3QgZnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0cmFjZUlEJyxcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgZGlzcGxheU5hbWVGcm9tRFM6ICdUcmFjZSBJRCcsXG4gICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdUcmFjZTogJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IGluc3RhbmNlU2V0dGluZ3MudWlkLFxuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiBpbnN0YW5jZVNldHRpbmdzLm5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAndHJhY2VJZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7IG5hbWU6ICd0cmFjZU5hbWUnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWVGcm9tRFM6ICdUcmFjZSBuYW1lJyB9IH0sXG4gICAgICB7IG5hbWU6ICdzdGFydFRpbWUnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWVGcm9tRFM6ICdTdGFydCB0aW1lJyB9IH0sXG4gICAgICB7IG5hbWU6ICdkdXJhdGlvbicsIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsIGNvbmZpZzogeyBkaXNwbGF5TmFtZUZyb21EUzogJ0R1cmF0aW9uJywgdW5pdDogJ21zJyB9IH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RhYmxlJyxcbiAgICB9LFxuICB9KTtcbiAgaWYgKCFkYXRhPy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbiAgLy8gU2hvdyB0aGUgbW9zdCByZWNlbnQgdHJhY2VzXG4gIGNvbnN0IHRyYWNlRGF0YSA9IGRhdGFcbiAgICAuc29ydCgoYSwgYikgPT4gcGFyc2VJbnQoYj8uc3RhcnRUaW1lVW5peE5hbm8hLCAxMCkgLyAxMDAwMDAwIC0gcGFyc2VJbnQoYT8uc3RhcnRUaW1lVW5peE5hbm8hLCAxMCkgLyAxMDAwMDAwKVxuICAgIC5tYXAodHJhbnNmb3JtVG9UcmFjZURhdGEpO1xuXG4gIGZvciAoY29uc3QgdHJhY2Ugb2YgdHJhY2VEYXRhKSB7XG4gICAgZnJhbWUuYWRkKHRyYWNlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVG9UcmFjZURhdGEoZGF0YTogU2VhcmNoUmVzcG9uc2UpIHtcbiAgbGV0IHRyYWNlTmFtZSA9ICcnO1xuICBpZiAoZGF0YS5yb290U2VydmljZU5hbWUpIHtcbiAgICB0cmFjZU5hbWUgKz0gZGF0YS5yb290U2VydmljZU5hbWUgKyAnICc7XG4gIH1cbiAgaWYgKGRhdGEucm9vdFRyYWNlTmFtZSkge1xuICAgIHRyYWNlTmFtZSArPSBkYXRhLnJvb3RUcmFjZU5hbWU7XG4gIH1cblxuICBjb25zdCB0cmFjZVN0YXJ0VGltZSA9IHBhcnNlSW50KGRhdGEuc3RhcnRUaW1lVW5peE5hbm8hLCAxMCkgLyAxMDAwMDAwO1xuXG4gIGxldCBzdGFydFRpbWUgPSBkYXRlVGltZUZvcm1hdCh0cmFjZVN0YXJ0VGltZSk7XG5cbiAgaWYgKE1hdGguYWJzKGRpZmZlcmVuY2VJbkhvdXJzKG5ldyBEYXRlKHRyYWNlU3RhcnRUaW1lKSwgRGF0ZS5ub3coKSkpIDw9IDEpIHtcbiAgICBzdGFydFRpbWUgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSh0cmFjZVN0YXJ0VGltZSksIERhdGUubm93KCksIHtcbiAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcbiAgICAgIGluY2x1ZGVTZWNvbmRzOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0cmFjZUlEOiBkYXRhLnRyYWNlSUQsXG4gICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb25NcyxcbiAgICB0cmFjZU5hbWUsXG4gIH07XG59XG5cbmNvbnN0IGVtcHR5RGF0YVF1ZXJ5UmVzcG9uc2UgPSB7XG4gIGRhdGE6IFtcbiAgICBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0cmFjZScsXG4gICAgICAgICAgdHlwZTogRmllbGRUeXBlLnRyYWNlLFxuICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbWV0YToge1xuICAgICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgdHJhY2VGb3JtYXQ6ICdvdGxwJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59O1xuIiwiaW1wb3J0IHsgR3JhbW1hciB9IGZyb20gJ3ByaXNtanMnO1xuXG5leHBvcnQgY29uc3QgdG9rZW5pemVyOiBHcmFtbWFyID0ge1xuICBrZXk6IHtcbiAgICBwYXR0ZXJuOiAvW15cXHNdKyg/PT0pLyxcbiAgICBhbGlhczogJ2F0dHItbmFtZScsXG4gIH0sXG4gIG9wZXJhdG9yOiAvWz1dLyxcbiAgdmFsdWU6IFtcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvXCIoLispXCIvLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0dGVybjogL1teXFxzXSsvLFxuICAgIH0sXG4gIF0sXG59O1xuIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xuICAgIHJldHVybiB0bztcbn07XG5pbXBvcnQgeyBOb29wQ29udGV4dE1hbmFnZXIgfSBmcm9tICcuLi9jb250ZXh0L05vb3BDb250ZXh0TWFuYWdlcic7XG5pbXBvcnQgeyBnZXRHbG9iYWwsIHJlZ2lzdGVyR2xvYmFsLCB1bnJlZ2lzdGVyR2xvYmFsLCB9IGZyb20gJy4uL2ludGVybmFsL2dsb2JhbC11dGlscyc7XG5pbXBvcnQgeyBEaWFnQVBJIH0gZnJvbSAnLi9kaWFnJztcbnZhciBBUElfTkFNRSA9ICdjb250ZXh0JztcbnZhciBOT09QX0NPTlRFWFRfTUFOQUdFUiA9IG5ldyBOb29wQ29udGV4dE1hbmFnZXIoKTtcbi8qKlxuICogU2luZ2xldG9uIG9iamVjdCB3aGljaCByZXByZXNlbnRzIHRoZSBlbnRyeSBwb2ludCB0byB0aGUgT3BlblRlbGVtZXRyeSBDb250ZXh0IEFQSVxuICovXG52YXIgQ29udGV4dEFQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogRW1wdHkgcHJpdmF0ZSBjb25zdHJ1Y3RvciBwcmV2ZW50cyBlbmQgdXNlcnMgZnJvbSBjb25zdHJ1Y3RpbmcgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEFQSSAqL1xuICAgIGZ1bmN0aW9uIENvbnRleHRBUEkoKSB7XG4gICAgfVxuICAgIC8qKiBHZXQgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgQ29udGV4dCBBUEkgKi9cbiAgICBDb250ZXh0QVBJLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBDb250ZXh0QVBJKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjdXJyZW50IGNvbnRleHQgbWFuYWdlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRleHQgbWFuYWdlciB3YXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQsIGVsc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb250ZXh0QVBJLnByb3RvdHlwZS5zZXRHbG9iYWxDb250ZXh0TWFuYWdlciA9IGZ1bmN0aW9uIChjb250ZXh0TWFuYWdlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJHbG9iYWwoQVBJX05BTUUsIGNvbnRleHRNYW5hZ2VyLCBEaWFnQVBJLmluc3RhbmNlKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIGNvbnRleHRcbiAgICAgKi9cbiAgICBDb250ZXh0QVBJLnByb3RvdHlwZS5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDb250ZXh0TWFuYWdlcigpLmFjdGl2ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZSBhIGZ1bmN0aW9uIHdpdGggYW4gYWN0aXZlIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgdG8gYmUgYWN0aXZlIGR1cmluZyBmdW5jdGlvbiBleGVjdXRpb25cbiAgICAgKiBAcGFyYW0gZm4gZnVuY3Rpb24gdG8gZXhlY3V0ZSBpbiBhIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gdGhpc0FyZyBvcHRpb25hbCByZWNlaXZlciB0byBiZSB1c2VkIGZvciBjYWxsaW5nIGZuXG4gICAgICogQHBhcmFtIGFyZ3Mgb3B0aW9uYWwgYXJndW1lbnRzIGZvcndhcmRlZCB0byBmblxuICAgICAqL1xuICAgIENvbnRleHRBUEkucHJvdG90eXBlLndpdGggPSBmdW5jdGlvbiAoY29udGV4dCwgZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDM7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDNdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZ2V0Q29udGV4dE1hbmFnZXIoKSkud2l0aC5hcHBseShfYSwgX19zcHJlYWRBcnJheShbY29udGV4dCwgZm4sIHRoaXNBcmddLCBhcmdzKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBCaW5kIGEgY29udGV4dCB0byBhIHRhcmdldCBmdW5jdGlvbiBvciBldmVudCBlbWl0dGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dCBjb250ZXh0IHRvIGJpbmQgdG8gdGhlIGV2ZW50IGVtaXR0ZXIgb3IgZnVuY3Rpb24uIERlZmF1bHRzIHRvIHRoZSBjdXJyZW50bHkgYWN0aXZlIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IGZ1bmN0aW9uIG9yIGV2ZW50IGVtaXR0ZXIgdG8gYmluZFxuICAgICAqL1xuICAgIENvbnRleHRBUEkucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGV4dCwgdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDb250ZXh0TWFuYWdlcigpLmJpbmQoY29udGV4dCwgdGFyZ2V0KTtcbiAgICB9O1xuICAgIENvbnRleHRBUEkucHJvdG90eXBlLl9nZXRDb250ZXh0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldEdsb2JhbChBUElfTkFNRSkgfHwgTk9PUF9DT05URVhUX01BTkFHRVI7XG4gICAgfTtcbiAgICAvKiogRGlzYWJsZSBhbmQgcmVtb3ZlIHRoZSBnbG9iYWwgY29udGV4dCBtYW5hZ2VyICovXG4gICAgQ29udGV4dEFQSS5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZ2V0Q29udGV4dE1hbmFnZXIoKS5kaXNhYmxlKCk7XG4gICAgICAgIHVucmVnaXN0ZXJHbG9iYWwoQVBJX05BTUUsIERpYWdBUEkuaW5zdGFuY2UoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGV4dEFQSTtcbn0oKSk7XG5leHBvcnQgeyBDb250ZXh0QVBJIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaWFnQ29tcG9uZW50TG9nZ2VyIH0gZnJvbSAnLi4vZGlhZy9Db21wb25lbnRMb2dnZXInO1xuaW1wb3J0IHsgY3JlYXRlTG9nTGV2ZWxEaWFnTG9nZ2VyIH0gZnJvbSAnLi4vZGlhZy9pbnRlcm5hbC9sb2dMZXZlbExvZ2dlcic7XG5pbXBvcnQgeyBEaWFnTG9nTGV2ZWwsIH0gZnJvbSAnLi4vZGlhZy90eXBlcyc7XG5pbXBvcnQgeyBnZXRHbG9iYWwsIHJlZ2lzdGVyR2xvYmFsLCB1bnJlZ2lzdGVyR2xvYmFsLCB9IGZyb20gJy4uL2ludGVybmFsL2dsb2JhbC11dGlscyc7XG52YXIgQVBJX05BTUUgPSAnZGlhZyc7XG4vKipcbiAqIFNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyB0aGUgZW50cnkgcG9pbnQgdG8gdGhlIE9wZW5UZWxlbWV0cnkgaW50ZXJuYWxcbiAqIGRpYWdub3N0aWMgQVBJXG4gKi9cbnZhciBEaWFnQVBJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFByaXZhdGUgaW50ZXJuYWwgY29uc3RydWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERpYWdBUEkoKSB7XG4gICAgICAgIGZ1bmN0aW9uIF9sb2dQcm94eShmdW5jTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxvZ2dlciA9IGdldEdsb2JhbCgnZGlhZycpO1xuICAgICAgICAgICAgICAgIC8vIHNob3J0Y3V0IGlmIGxvZ2dlciBub3Qgc2V0XG4gICAgICAgICAgICAgICAgaWYgKCFsb2dnZXIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9nZ2VyW2Z1bmNOYW1lXS5hcHBseShsb2dnZXIsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2luZyBzZWxmIGxvY2FsIHZhcmlhYmxlIGZvciBtaW5pZmljYXRpb24gcHVycG9zZXMgYXMgJ3RoaXMnIGNhbm5vdCBiZSBtaW5pZmllZFxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIERpYWdBUEkgc3BlY2lmaWMgZnVuY3Rpb25zXG4gICAgICAgIHNlbGYuc2V0TG9nZ2VyID0gZnVuY3Rpb24gKGxvZ2dlciwgbG9nTGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBpZiAobG9nTGV2ZWwgPT09IHZvaWQgMCkgeyBsb2dMZXZlbCA9IERpYWdMb2dMZXZlbC5JTkZPOyB9XG4gICAgICAgICAgICBpZiAobG9nZ2VyID09PSBzZWxmKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgaXNuJ3QgbXVjaCB3ZSBjYW4gZG8gaGVyZS5cbiAgICAgICAgICAgICAgICAvLyBMb2dnaW5nIHRvIHRoZSBjb25zb2xlIG1pZ2h0IGJyZWFrIHRoZSB1c2VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBsb2cgdG8gc2VsZi4gSWYgYSBsb2dnZXIgd2FzIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCBpdCB3aWxsIHJlY2VpdmUgdGhlIGxvZy5cbiAgICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdDYW5ub3QgdXNlIGRpYWcgYXMgdGhlIGxvZ2dlciBmb3IgaXRzZWxmLiBQbGVhc2UgdXNlIGEgRGlhZ0xvZ2dlciBpbXBsZW1lbnRhdGlvbiBsaWtlIENvbnNvbGVEaWFnTG9nZ2VyIG9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5lcnJvcigoX2EgPSBlcnIuc3RhY2spICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb2xkTG9nZ2VyID0gZ2V0R2xvYmFsKCdkaWFnJyk7XG4gICAgICAgICAgICB2YXIgbmV3TG9nZ2VyID0gY3JlYXRlTG9nTGV2ZWxEaWFnTG9nZ2VyKGxvZ0xldmVsLCBsb2dnZXIpO1xuICAgICAgICAgICAgLy8gVGhlcmUgYWxyZWFkeSBpcyBhbiBsb2dnZXIgcmVnaXN0ZXJlZC4gV2UnbGwgbGV0IGl0IGtub3cgYmVmb3JlIG92ZXJ3cml0aW5nIGl0LlxuICAgICAgICAgICAgaWYgKG9sZExvZ2dlcikge1xuICAgICAgICAgICAgICAgIHZhciBzdGFjayA9IChfYiA9IG5ldyBFcnJvcigpLnN0YWNrKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnPGZhaWxlZCB0byBnZW5lcmF0ZSBzdGFja3RyYWNlPic7XG4gICAgICAgICAgICAgICAgb2xkTG9nZ2VyLndhcm4oXCJDdXJyZW50IGxvZ2dlciB3aWxsIGJlIG92ZXJ3cml0dGVuIGZyb20gXCIgKyBzdGFjayk7XG4gICAgICAgICAgICAgICAgbmV3TG9nZ2VyLndhcm4oXCJDdXJyZW50IGxvZ2dlciB3aWxsIG92ZXJ3cml0ZSBvbmUgYWxyZWFkeSByZWdpc3RlcmVkIGZyb20gXCIgKyBzdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJHbG9iYWwoJ2RpYWcnLCBuZXdMb2dnZXIsIHNlbGYsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bnJlZ2lzdGVyR2xvYmFsKEFQSV9OQU1FLCBzZWxmKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5jcmVhdGVDb21wb25lbnRMb2dnZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEaWFnQ29tcG9uZW50TG9nZ2VyKG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmLnZlcmJvc2UgPSBfbG9nUHJveHkoJ3ZlcmJvc2UnKTtcbiAgICAgICAgc2VsZi5kZWJ1ZyA9IF9sb2dQcm94eSgnZGVidWcnKTtcbiAgICAgICAgc2VsZi5pbmZvID0gX2xvZ1Byb3h5KCdpbmZvJyk7XG4gICAgICAgIHNlbGYud2FybiA9IF9sb2dQcm94eSgnd2FybicpO1xuICAgICAgICBzZWxmLmVycm9yID0gX2xvZ1Byb3h5KCdlcnJvcicpO1xuICAgIH1cbiAgICAvKiogR2V0IHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIERpYWdBUEkgQVBJICovXG4gICAgRGlhZ0FQSS5pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRGlhZ0FQSSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9O1xuICAgIHJldHVybiBEaWFnQVBJO1xufSgpKTtcbmV4cG9ydCB7IERpYWdBUEkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpYWcuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IGdldEdsb2JhbCwgcmVnaXN0ZXJHbG9iYWwsIHVucmVnaXN0ZXJHbG9iYWwsIH0gZnJvbSAnLi4vaW50ZXJuYWwvZ2xvYmFsLXV0aWxzJztcbmltcG9ydCB7IE5vb3BUZXh0TWFwUHJvcGFnYXRvciB9IGZyb20gJy4uL3Byb3BhZ2F0aW9uL05vb3BUZXh0TWFwUHJvcGFnYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0VGV4dE1hcEdldHRlciwgZGVmYXVsdFRleHRNYXBTZXR0ZXIsIH0gZnJvbSAnLi4vcHJvcGFnYXRpb24vVGV4dE1hcFByb3BhZ2F0b3InO1xuaW1wb3J0IHsgZ2V0QmFnZ2FnZSwgc2V0QmFnZ2FnZSwgZGVsZXRlQmFnZ2FnZSwgfSBmcm9tICcuLi9iYWdnYWdlL2NvbnRleHQtaGVscGVycyc7XG5pbXBvcnQgeyBjcmVhdGVCYWdnYWdlIH0gZnJvbSAnLi4vYmFnZ2FnZS91dGlscyc7XG5pbXBvcnQgeyBEaWFnQVBJIH0gZnJvbSAnLi9kaWFnJztcbnZhciBBUElfTkFNRSA9ICdwcm9wYWdhdGlvbic7XG52YXIgTk9PUF9URVhUX01BUF9QUk9QQUdBVE9SID0gbmV3IE5vb3BUZXh0TWFwUHJvcGFnYXRvcigpO1xuLyoqXG4gKiBTaW5nbGV0b24gb2JqZWN0IHdoaWNoIHJlcHJlc2VudHMgdGhlIGVudHJ5IHBvaW50IHRvIHRoZSBPcGVuVGVsZW1ldHJ5IFByb3BhZ2F0aW9uIEFQSVxuICovXG52YXIgUHJvcGFnYXRpb25BUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEVtcHR5IHByaXZhdGUgY29uc3RydWN0b3IgcHJldmVudHMgZW5kIHVzZXJzIGZyb20gY29uc3RydWN0aW5nIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBBUEkgKi9cbiAgICBmdW5jdGlvbiBQcm9wYWdhdGlvbkFQSSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVCYWdnYWdlID0gY3JlYXRlQmFnZ2FnZTtcbiAgICAgICAgdGhpcy5nZXRCYWdnYWdlID0gZ2V0QmFnZ2FnZTtcbiAgICAgICAgdGhpcy5zZXRCYWdnYWdlID0gc2V0QmFnZ2FnZTtcbiAgICAgICAgdGhpcy5kZWxldGVCYWdnYWdlID0gZGVsZXRlQmFnZ2FnZTtcbiAgICB9XG4gICAgLyoqIEdldCB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQcm9wYWdhdG9yIEFQSSAqL1xuICAgIFByb3BhZ2F0aW9uQVBJLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQcm9wYWdhdGlvbkFQSSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3VycmVudCBwcm9wYWdhdG9yLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGFnYXRvciB3YXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQsIGVsc2UgZmFsc2VcbiAgICAgKi9cbiAgICBQcm9wYWdhdGlvbkFQSS5wcm90b3R5cGUuc2V0R2xvYmFsUHJvcGFnYXRvciA9IGZ1bmN0aW9uIChwcm9wYWdhdG9yKSB7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckdsb2JhbChBUElfTkFNRSwgcHJvcGFnYXRvciwgRGlhZ0FQSS5pbnN0YW5jZSgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluamVjdCBjb250ZXh0IGludG8gYSBjYXJyaWVyIHRvIGJlIHByb3BhZ2F0ZWQgaW50ZXItcHJvY2Vzc1xuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHQgQ29udGV4dCBjYXJyeWluZyB0cmFjaW5nIGRhdGEgdG8gaW5qZWN0XG4gICAgICogQHBhcmFtIGNhcnJpZXIgY2FycmllciB0byBpbmplY3QgY29udGV4dCBpbnRvXG4gICAgICogQHBhcmFtIHNldHRlciBGdW5jdGlvbiB1c2VkIHRvIHNldCB2YWx1ZXMgb24gdGhlIGNhcnJpZXJcbiAgICAgKi9cbiAgICBQcm9wYWdhdGlvbkFQSS5wcm90b3R5cGUuaW5qZWN0ID0gZnVuY3Rpb24gKGNvbnRleHQsIGNhcnJpZXIsIHNldHRlcikge1xuICAgICAgICBpZiAoc2V0dGVyID09PSB2b2lkIDApIHsgc2V0dGVyID0gZGVmYXVsdFRleHRNYXBTZXR0ZXI7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEdsb2JhbFByb3BhZ2F0b3IoKS5pbmplY3QoY29udGV4dCwgY2Fycmllciwgc2V0dGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgY29udGV4dCBmcm9tIGEgY2FycmllclxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHQgQ29udGV4dCB3aGljaCB0aGUgbmV3bHkgY3JlYXRlZCBjb250ZXh0IHdpbGwgaW5oZXJpdCBmcm9tXG4gICAgICogQHBhcmFtIGNhcnJpZXIgQ2FycmllciB0byBleHRyYWN0IGNvbnRleHQgZnJvbVxuICAgICAqIEBwYXJhbSBnZXR0ZXIgRnVuY3Rpb24gdXNlZCB0byBleHRyYWN0IGtleXMgZnJvbSBhIGNhcnJpZXJcbiAgICAgKi9cbiAgICBQcm9wYWdhdGlvbkFQSS5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChjb250ZXh0LCBjYXJyaWVyLCBnZXR0ZXIpIHtcbiAgICAgICAgaWYgKGdldHRlciA9PT0gdm9pZCAwKSB7IGdldHRlciA9IGRlZmF1bHRUZXh0TWFwR2V0dGVyOyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRHbG9iYWxQcm9wYWdhdG9yKCkuZXh0cmFjdChjb250ZXh0LCBjYXJyaWVyLCBnZXR0ZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgbGlzdCBvZiBhbGwgZmllbGRzIHdoaWNoIG1heSBiZSB1c2VkIGJ5IHRoZSBwcm9wYWdhdG9yLlxuICAgICAqL1xuICAgIFByb3BhZ2F0aW9uQVBJLnByb3RvdHlwZS5maWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRHbG9iYWxQcm9wYWdhdG9yKCkuZmllbGRzKCk7XG4gICAgfTtcbiAgICAvKiogUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGFnYXRvciAqL1xuICAgIFByb3BhZ2F0aW9uQVBJLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB1bnJlZ2lzdGVyR2xvYmFsKEFQSV9OQU1FLCBEaWFnQVBJLmluc3RhbmNlKCkpO1xuICAgIH07XG4gICAgUHJvcGFnYXRpb25BUEkucHJvdG90eXBlLl9nZXRHbG9iYWxQcm9wYWdhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0R2xvYmFsKEFQSV9OQU1FKSB8fCBOT09QX1RFWFRfTUFQX1BST1BBR0FUT1I7XG4gICAgfTtcbiAgICByZXR1cm4gUHJvcGFnYXRpb25BUEk7XG59KCkpO1xuZXhwb3J0IHsgUHJvcGFnYXRpb25BUEkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3BhZ2F0aW9uLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBnZXRHbG9iYWwsIHJlZ2lzdGVyR2xvYmFsLCB1bnJlZ2lzdGVyR2xvYmFsLCB9IGZyb20gJy4uL2ludGVybmFsL2dsb2JhbC11dGlscyc7XG5pbXBvcnQgeyBQcm94eVRyYWNlclByb3ZpZGVyIH0gZnJvbSAnLi4vdHJhY2UvUHJveHlUcmFjZXJQcm92aWRlcic7XG5pbXBvcnQgeyBpc1NwYW5Db250ZXh0VmFsaWQsIHdyYXBTcGFuQ29udGV4dCwgfSBmcm9tICcuLi90cmFjZS9zcGFuY29udGV4dC11dGlscyc7XG5pbXBvcnQgeyBkZWxldGVTcGFuLCBnZXRTcGFuLCBnZXRTcGFuQ29udGV4dCwgc2V0U3Bhbiwgc2V0U3BhbkNvbnRleHQsIH0gZnJvbSAnLi4vdHJhY2UvY29udGV4dC11dGlscyc7XG5pbXBvcnQgeyBEaWFnQVBJIH0gZnJvbSAnLi9kaWFnJztcbnZhciBBUElfTkFNRSA9ICd0cmFjZSc7XG4vKipcbiAqIFNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyB0aGUgZW50cnkgcG9pbnQgdG8gdGhlIE9wZW5UZWxlbWV0cnkgVHJhY2luZyBBUElcbiAqL1xudmFyIFRyYWNlQVBJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBFbXB0eSBwcml2YXRlIGNvbnN0cnVjdG9yIHByZXZlbnRzIGVuZCB1c2VycyBmcm9tIGNvbnN0cnVjdGluZyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgQVBJICovXG4gICAgZnVuY3Rpb24gVHJhY2VBUEkoKSB7XG4gICAgICAgIHRoaXMuX3Byb3h5VHJhY2VyUHJvdmlkZXIgPSBuZXcgUHJveHlUcmFjZXJQcm92aWRlcigpO1xuICAgICAgICB0aGlzLndyYXBTcGFuQ29udGV4dCA9IHdyYXBTcGFuQ29udGV4dDtcbiAgICAgICAgdGhpcy5pc1NwYW5Db250ZXh0VmFsaWQgPSBpc1NwYW5Db250ZXh0VmFsaWQ7XG4gICAgICAgIHRoaXMuZGVsZXRlU3BhbiA9IGRlbGV0ZVNwYW47XG4gICAgICAgIHRoaXMuZ2V0U3BhbiA9IGdldFNwYW47XG4gICAgICAgIHRoaXMuZ2V0U3BhbkNvbnRleHQgPSBnZXRTcGFuQ29udGV4dDtcbiAgICAgICAgdGhpcy5zZXRTcGFuID0gc2V0U3BhbjtcbiAgICAgICAgdGhpcy5zZXRTcGFuQ29udGV4dCA9IHNldFNwYW5Db250ZXh0O1xuICAgIH1cbiAgICAvKiogR2V0IHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFRyYWNlIEFQSSAqL1xuICAgIFRyYWNlQVBJLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBUcmFjZUFQSSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3VycmVudCBnbG9iYWwgdHJhY2VyLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgdHJhY2VyIHByb3ZpZGVyIHdhcyBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCwgZWxzZSBmYWxzZVxuICAgICAqL1xuICAgIFRyYWNlQVBJLnByb3RvdHlwZS5zZXRHbG9iYWxUcmFjZXJQcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgICB2YXIgc3VjY2VzcyA9IHJlZ2lzdGVyR2xvYmFsKEFQSV9OQU1FLCB0aGlzLl9wcm94eVRyYWNlclByb3ZpZGVyLCBEaWFnQVBJLmluc3RhbmNlKCkpO1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5fcHJveHlUcmFjZXJQcm92aWRlci5zZXREZWxlZ2F0ZShwcm92aWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBnbG9iYWwgdHJhY2VyIHByb3ZpZGVyLlxuICAgICAqL1xuICAgIFRyYWNlQVBJLnByb3RvdHlwZS5nZXRUcmFjZXJQcm92aWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldEdsb2JhbChBUElfTkFNRSkgfHwgdGhpcy5fcHJveHlUcmFjZXJQcm92aWRlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cmFjZXIgZnJvbSB0aGUgZ2xvYmFsIHRyYWNlciBwcm92aWRlci5cbiAgICAgKi9cbiAgICBUcmFjZUFQSS5wcm90b3R5cGUuZ2V0VHJhY2VyID0gZnVuY3Rpb24gKG5hbWUsIHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhY2VyUHJvdmlkZXIoKS5nZXRUcmFjZXIobmFtZSwgdmVyc2lvbik7XG4gICAgfTtcbiAgICAvKiogUmVtb3ZlIHRoZSBnbG9iYWwgdHJhY2VyIHByb3ZpZGVyICovXG4gICAgVHJhY2VBUEkucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVucmVnaXN0ZXJHbG9iYWwoQVBJX05BTUUsIERpYWdBUEkuaW5zdGFuY2UoKSk7XG4gICAgICAgIHRoaXMuX3Byb3h5VHJhY2VyUHJvdmlkZXIgPSBuZXcgUHJveHlUcmFjZXJQcm92aWRlcigpO1xuICAgIH07XG4gICAgcmV0dXJuIFRyYWNlQVBJO1xufSgpKTtcbmV4cG9ydCB7IFRyYWNlQVBJIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFjZS5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dEtleSB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dCc7XG4vKipcbiAqIEJhZ2dhZ2Uga2V5XG4gKi9cbnZhciBCQUdHQUdFX0tFWSA9IGNyZWF0ZUNvbnRleHRLZXkoJ09wZW5UZWxlbWV0cnkgQmFnZ2FnZSBLZXknKTtcbi8qKlxuICogUmV0cmlldmUgdGhlIGN1cnJlbnQgYmFnZ2FnZSBmcm9tIHRoZSBnaXZlbiBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBDb250ZXh0IHRoYXQgbWFuYWdlIGFsbCBjb250ZXh0IHZhbHVlc1xuICogQHJldHVybnMge0JhZ2dhZ2V9IEV4dHJhY3RlZCBiYWdnYWdlIGZyb20gdGhlIGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJhZ2dhZ2UoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0LmdldFZhbHVlKEJBR0dBR0VfS0VZKSB8fCB1bmRlZmluZWQ7XG59XG4vKipcbiAqIFN0b3JlIGEgYmFnZ2FnZSBpbiB0aGUgZ2l2ZW4gY29udGV4dFxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gQ29udGV4dCB0aGF0IG1hbmFnZSBhbGwgY29udGV4dCB2YWx1ZXNcbiAqIEBwYXJhbSB7QmFnZ2FnZX0gYmFnZ2FnZSB0aGF0IHdpbGwgYmUgc2V0IGluIHRoZSBhY3R1YWwgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QmFnZ2FnZShjb250ZXh0LCBiYWdnYWdlKSB7XG4gICAgcmV0dXJuIGNvbnRleHQuc2V0VmFsdWUoQkFHR0FHRV9LRVksIGJhZ2dhZ2UpO1xufVxuLyoqXG4gKiBEZWxldGUgdGhlIGJhZ2dhZ2Ugc3RvcmVkIGluIHRoZSBnaXZlbiBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBDb250ZXh0IHRoYXQgbWFuYWdlIGFsbCBjb250ZXh0IHZhbHVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQmFnZ2FnZShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZGVsZXRlVmFsdWUoQkFHR0FHRV9LRVkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC1oZWxwZXJzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgQmFnZ2FnZUltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFnZ2FnZUltcGwoZW50cmllcykge1xuICAgICAgICB0aGlzLl9lbnRyaWVzID0gZW50cmllcyA/IG5ldyBNYXAoZW50cmllcykgOiBuZXcgTWFwKCk7XG4gICAgfVxuICAgIEJhZ2dhZ2VJbXBsLnByb3RvdHlwZS5nZXRFbnRyeSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fZW50cmllcy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZW50cnkpO1xuICAgIH07XG4gICAgQmFnZ2FnZUltcGwucHJvdG90eXBlLmdldEFsbEVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2VudHJpZXMuZW50cmllcygpKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgayA9IF9hWzBdLCB2ID0gX2FbMV07XG4gICAgICAgICAgICByZXR1cm4gW2ssIHZdO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhZ2dhZ2VJbXBsLnByb3RvdHlwZS5zZXRFbnRyeSA9IGZ1bmN0aW9uIChrZXksIGVudHJ5KSB7XG4gICAgICAgIHZhciBuZXdCYWdnYWdlID0gbmV3IEJhZ2dhZ2VJbXBsKHRoaXMuX2VudHJpZXMpO1xuICAgICAgICBuZXdCYWdnYWdlLl9lbnRyaWVzLnNldChrZXksIGVudHJ5KTtcbiAgICAgICAgcmV0dXJuIG5ld0JhZ2dhZ2U7XG4gICAgfTtcbiAgICBCYWdnYWdlSW1wbC5wcm90b3R5cGUucmVtb3ZlRW50cnkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBuZXdCYWdnYWdlID0gbmV3IEJhZ2dhZ2VJbXBsKHRoaXMuX2VudHJpZXMpO1xuICAgICAgICBuZXdCYWdnYWdlLl9lbnRyaWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gbmV3QmFnZ2FnZTtcbiAgICB9O1xuICAgIEJhZ2dhZ2VJbXBsLnByb3RvdHlwZS5yZW1vdmVFbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAga2V5c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdCYWdnYWdlID0gbmV3IEJhZ2dhZ2VJbXBsKHRoaXMuX2VudHJpZXMpO1xuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGtleXNfMSA9IGtleXM7IF9hIDwga2V5c18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNfMVtfYV07XG4gICAgICAgICAgICBuZXdCYWdnYWdlLl9lbnRyaWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdCYWdnYWdlO1xuICAgIH07XG4gICAgQmFnZ2FnZUltcGwucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEJhZ2dhZ2VJbXBsKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFnZ2FnZUltcGw7XG59KCkpO1xuZXhwb3J0IHsgQmFnZ2FnZUltcGwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhZ2dhZ2UtaW1wbC5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBTeW1ib2wgdXNlZCB0byBtYWtlIEJhZ2dhZ2VFbnRyeU1ldGFkYXRhIGFuIG9wYXF1ZSB0eXBlXG4gKi9cbmV4cG9ydCB2YXIgYmFnZ2FnZUVudHJ5TWV0YWRhdGFTeW1ib2wgPSBTeW1ib2woJ0JhZ2dhZ2VFbnRyeU1ldGFkYXRhJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeW1ib2wuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaWFnQVBJIH0gZnJvbSAnLi4vYXBpL2RpYWcnO1xuaW1wb3J0IHsgQmFnZ2FnZUltcGwgfSBmcm9tICcuL2ludGVybmFsL2JhZ2dhZ2UtaW1wbCc7XG5pbXBvcnQgeyBiYWdnYWdlRW50cnlNZXRhZGF0YVN5bWJvbCB9IGZyb20gJy4vaW50ZXJuYWwvc3ltYm9sJztcbnZhciBkaWFnID0gRGlhZ0FQSS5pbnN0YW5jZSgpO1xuLyoqXG4gKiBDcmVhdGUgYSBuZXcgQmFnZ2FnZSB3aXRoIG9wdGlvbmFsIGVudHJpZXNcbiAqXG4gKiBAcGFyYW0gZW50cmllcyBBbiBhcnJheSBvZiBiYWdnYWdlIGVudHJpZXMgdGhlIG5ldyBiYWdnYWdlIHNob3VsZCBjb250YWluXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYWdnYWdlKGVudHJpZXMpIHtcbiAgICBpZiAoZW50cmllcyA9PT0gdm9pZCAwKSB7IGVudHJpZXMgPSB7fTsgfVxuICAgIHJldHVybiBuZXcgQmFnZ2FnZUltcGwobmV3IE1hcChPYmplY3QuZW50cmllcyhlbnRyaWVzKSkpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBzZXJpYWxpemFibGUgQmFnZ2FnZUVudHJ5TWV0YWRhdGEgb2JqZWN0IGZyb20gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHN0ciBzdHJpbmcgbWV0YWRhdGEuIEZvcm1hdCBpcyBjdXJyZW50bHkgbm90IGRlZmluZWQgYnkgdGhlIHNwZWMgYW5kIGhhcyBubyBzcGVjaWFsIG1lYW5pbmcuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFnZ2FnZUVudHJ5TWV0YWRhdGFGcm9tU3RyaW5nKHN0cikge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICBkaWFnLmVycm9yKFwiQ2Fubm90IGNyZWF0ZSBiYWdnYWdlIG1ldGFkYXRhIGZyb20gdW5rbm93biB0eXBlOiBcIiArIHR5cGVvZiBzdHIpO1xuICAgICAgICBzdHIgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgX19UWVBFX186IGJhZ2dhZ2VFbnRyeU1ldGFkYXRhU3ltYm9sLFxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUF0dHJpYnV0ZXMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV4Y2VwdGlvbi5qcy5tYXAiLCJleHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcbiAgICByZXR1cm4gdG87XG59O1xuaW1wb3J0IHsgUk9PVF9DT05URVhUIH0gZnJvbSAnLi9jb250ZXh0JztcbnZhciBOb29wQ29udGV4dE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9vcENvbnRleHRNYW5hZ2VyKCkge1xuICAgIH1cbiAgICBOb29wQ29udGV4dE1hbmFnZXIucHJvdG90eXBlLmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJPT1RfQ09OVEVYVDtcbiAgICB9O1xuICAgIE5vb3BDb250ZXh0TWFuYWdlci5wcm90b3R5cGUud2l0aCA9IGZ1bmN0aW9uIChfY29udGV4dCwgZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAzOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAzXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLmNhbGwuYXBwbHkoZm4sIF9fc3ByZWFkQXJyYXkoW3RoaXNBcmddLCBhcmdzKSk7XG4gICAgfTtcbiAgICBOb29wQ29udGV4dE1hbmFnZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoX2NvbnRleHQsIHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgTm9vcENvbnRleHRNYW5hZ2VyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgTm9vcENvbnRleHRNYW5hZ2VyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBOb29wQ29udGV4dE1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgTm9vcENvbnRleHRNYW5hZ2VyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob29wQ29udGV4dE1hbmFnZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKiBHZXQgYSBrZXkgdG8gdW5pcXVlbHkgaWRlbnRpZnkgYSBjb250ZXh0IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dEtleShkZXNjcmlwdGlvbikge1xuICAgIC8vIFRoZSBzcGVjaWZpY2F0aW9uIHN0YXRlcyB0aGF0IGZvciB0aGUgc2FtZSBpbnB1dCwgbXVsdGlwbGUgY2FsbHMgc2hvdWxkXG4gICAgLy8gcmV0dXJuIGRpZmZlcmVudCBrZXlzLiBEdWUgdG8gdGhlIG5hdHVyZSBvZiB0aGUgSlMgZGVwZW5kZW5jeSBtYW5hZ2VtZW50XG4gICAgLy8gc3lzdGVtLCB0aGlzIGNyZWF0ZXMgcHJvYmxlbXMgd2hlcmUgbXVsdGlwbGUgdmVyc2lvbnMgb2Ygc29tZSBwYWNrYWdlXG4gICAgLy8gY291bGQgaG9sZCBkaWZmZXJlbnQga2V5cyBmb3IgdGhlIHNhbWUgcHJvcGVydHkuXG4gICAgLy9cbiAgICAvLyBUaGVyZWZvcmUsIHdlIHVzZSBTeW1ib2wuZm9yIHdoaWNoIHJldHVybnMgdGhlIHNhbWUga2V5IGZvciB0aGUgc2FtZSBpbnB1dC5cbiAgICByZXR1cm4gU3ltYm9sLmZvcihkZXNjcmlwdGlvbik7XG59XG52YXIgQmFzZUNvbnRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IGNvbnRleHQgd2hpY2ggaW5oZXJpdHMgdmFsdWVzIGZyb20gYW4gb3B0aW9uYWwgcGFyZW50IGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyZW50Q29udGV4dCBhIGNvbnRleHQgZnJvbSB3aGljaCB0byBpbmhlcml0IHZhbHVlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIEJhc2VDb250ZXh0KHBhcmVudENvbnRleHQpIHtcbiAgICAgICAgLy8gZm9yIG1pbmlmaWNhdGlvblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuX2N1cnJlbnRDb250ZXh0ID0gcGFyZW50Q29udGV4dCA/IG5ldyBNYXAocGFyZW50Q29udGV4dCkgOiBuZXcgTWFwKCk7XG4gICAgICAgIHNlbGYuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBzZWxmLl9jdXJyZW50Q29udGV4dC5nZXQoa2V5KTsgfTtcbiAgICAgICAgc2VsZi5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IG5ldyBCYXNlQ29udGV4dChzZWxmLl9jdXJyZW50Q29udGV4dCk7XG4gICAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50Q29udGV4dC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5kZWxldGVWYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gbmV3IEJhc2VDb250ZXh0KHNlbGYuX2N1cnJlbnRDb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRDb250ZXh0LmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBCYXNlQ29udGV4dDtcbn0oKSk7XG4vKiogVGhlIHJvb3QgY29udGV4dCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IHBhcmVudCBjb250ZXh0IHdoZW4gdGhlcmUgaXMgbm8gYWN0aXZlIGNvbnRleHQgKi9cbmV4cG9ydCB2YXIgUk9PVF9DT05URVhUID0gbmV3IEJhc2VDb250ZXh0KCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgZ2V0R2xvYmFsIH0gZnJvbSAnLi4vaW50ZXJuYWwvZ2xvYmFsLXV0aWxzJztcbi8qKlxuICogQ29tcG9uZW50IExvZ2dlciB3aGljaCBpcyBtZWFudCB0byBiZSB1c2VkIGFzIHBhcnQgb2YgYW55IGNvbXBvbmVudCB3aGljaFxuICogd2lsbCBhZGQgYXV0b21hdGljYWxseSBhZGRpdGlvbmFsIG5hbWVzcGFjZSBpbiBmcm9udCBvZiB0aGUgbG9nIG1lc3NhZ2UuXG4gKiBJdCB3aWxsIHRoZW4gZm9yd2FyZCBhbGwgbWVzc2FnZSB0byBnbG9iYWwgZGlhZyBsb2dnZXJcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBjTG9nZ2VyID0gZGlhZy5jcmVhdGVDb21wb25lbnRMb2dnZXIoeyBuYW1lc3BhY2U6ICdAb3BlbnRlbGVtZXRyeS9pbnN0cnVtZW50YXRpb24taHR0cCcgfSk7XG4gKiBjTG9nZ2VyLmRlYnVnKCd0ZXN0Jyk7XG4gKiAvLyBAb3BlbnRlbGVtZXRyeS9pbnN0cnVtZW50YXRpb24taHR0cCB0ZXN0XG4gKi9cbnZhciBEaWFnQ29tcG9uZW50TG9nZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERpYWdDb21wb25lbnRMb2dnZXIocHJvcHMpIHtcbiAgICAgICAgdGhpcy5fbmFtZXNwYWNlID0gcHJvcHMubmFtZXNwYWNlIHx8ICdEaWFnQ29tcG9uZW50TG9nZ2VyJztcbiAgICB9XG4gICAgRGlhZ0NvbXBvbmVudExvZ2dlci5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ1Byb3h5KCdkZWJ1ZycsIHRoaXMuX25hbWVzcGFjZSwgYXJncyk7XG4gICAgfTtcbiAgICBEaWFnQ29tcG9uZW50TG9nZ2VyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9nUHJveHkoJ2Vycm9yJywgdGhpcy5fbmFtZXNwYWNlLCBhcmdzKTtcbiAgICB9O1xuICAgIERpYWdDb21wb25lbnRMb2dnZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ1Byb3h5KCdpbmZvJywgdGhpcy5fbmFtZXNwYWNlLCBhcmdzKTtcbiAgICB9O1xuICAgIERpYWdDb21wb25lbnRMb2dnZXIucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ1Byb3h5KCd3YXJuJywgdGhpcy5fbmFtZXNwYWNlLCBhcmdzKTtcbiAgICB9O1xuICAgIERpYWdDb21wb25lbnRMb2dnZXIucHJvdG90eXBlLnZlcmJvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ1Byb3h5KCd2ZXJib3NlJywgdGhpcy5fbmFtZXNwYWNlLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBEaWFnQ29tcG9uZW50TG9nZ2VyO1xufSgpKTtcbmV4cG9ydCB7IERpYWdDb21wb25lbnRMb2dnZXIgfTtcbmZ1bmN0aW9uIGxvZ1Byb3h5KGZ1bmNOYW1lLCBuYW1lc3BhY2UsIGFyZ3MpIHtcbiAgICB2YXIgbG9nZ2VyID0gZ2V0R2xvYmFsKCdkaWFnJyk7XG4gICAgLy8gc2hvcnRjdXQgaWYgbG9nZ2VyIG5vdCBzZXRcbiAgICBpZiAoIWxvZ2dlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFyZ3MudW5zaGlmdChuYW1lc3BhY2UpO1xuICAgIHJldHVybiBsb2dnZXJbZnVuY05hbWVdLmFwcGx5KGxvZ2dlciwgYXJncyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21wb25lbnRMb2dnZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbnZhciBjb25zb2xlTWFwID0gW1xuICAgIHsgbjogJ2Vycm9yJywgYzogJ2Vycm9yJyB9LFxuICAgIHsgbjogJ3dhcm4nLCBjOiAnd2FybicgfSxcbiAgICB7IG46ICdpbmZvJywgYzogJ2luZm8nIH0sXG4gICAgeyBuOiAnZGVidWcnLCBjOiAnZGVidWcnIH0sXG4gICAgeyBuOiAndmVyYm9zZScsIGM6ICd0cmFjZScgfSxcbl07XG4vKipcbiAqIEEgc2ltcGxlIEltbXV0YWJsZSBDb25zb2xlIGJhc2VkIGRpYWdub3N0aWMgbG9nZ2VyIHdoaWNoIHdpbGwgb3V0cHV0IGFueSBtZXNzYWdlcyB0byB0aGUgQ29uc29sZS5cbiAqIElmIHlvdSB3YW50IHRvIGxpbWl0IHRoZSBhbW91bnQgb2YgbG9nZ2luZyB0byBhIHNwZWNpZmljIGxldmVsIG9yIGxvd2VyIHVzZSB0aGVcbiAqIHtAbGluayBjcmVhdGVMb2dMZXZlbERpYWdMb2dnZXJ9XG4gKi9cbnZhciBEaWFnQ29uc29sZUxvZ2dlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaWFnQ29uc29sZUxvZ2dlcigpIHtcbiAgICAgICAgZnVuY3Rpb24gX2NvbnNvbGVGdW5jKGZ1bmNOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uc29sZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTb21lIGVudmlyb25tZW50cyBvbmx5IGV4cG9zZSB0aGUgY29uc29sZSB3aGVuIHRoZSBGMTIgZGV2ZWxvcGVyIGNvbnNvbGUgaXMgb3BlblxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhlRnVuYyA9IGNvbnNvbGVbZnVuY05hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoZUZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhbGwgZW52aXJvbm1lbnRzIHN1cHBvcnQgYWxsIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZUZ1bmMgPSBjb25zb2xlLmxvZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBPbmUgbGFzdCBmaW5hbCBjaGVja1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoZUZ1bmMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGVGdW5jLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnNvbGVNYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbY29uc29sZU1hcFtpXS5uXSA9IF9jb25zb2xlRnVuYyhjb25zb2xlTWFwW2ldLmMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBEaWFnQ29uc29sZUxvZ2dlcjtcbn0oKSk7XG5leHBvcnQgeyBEaWFnQ29uc29sZUxvZ2dlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc29sZUxvZ2dlci5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb25zb2xlTG9nZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IERpYWdMb2dMZXZlbCB9IGZyb20gJy4uL3R5cGVzJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2dMZXZlbERpYWdMb2dnZXIobWF4TGV2ZWwsIGxvZ2dlcikge1xuICAgIGlmIChtYXhMZXZlbCA8IERpYWdMb2dMZXZlbC5OT05FKSB7XG4gICAgICAgIG1heExldmVsID0gRGlhZ0xvZ0xldmVsLk5PTkU7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1heExldmVsID4gRGlhZ0xvZ0xldmVsLkFMTCkge1xuICAgICAgICBtYXhMZXZlbCA9IERpYWdMb2dMZXZlbC5BTEw7XG4gICAgfVxuICAgIC8vIEluIGNhc2UgdGhlIGxvZ2dlciBpcyBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGxvZ2dlciA9IGxvZ2dlciB8fCB7fTtcbiAgICBmdW5jdGlvbiBfZmlsdGVyRnVuYyhmdW5jTmFtZSwgdGhlTGV2ZWwpIHtcbiAgICAgICAgdmFyIHRoZUZ1bmMgPSBsb2dnZXJbZnVuY05hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIHRoZUZ1bmMgPT09ICdmdW5jdGlvbicgJiYgbWF4TGV2ZWwgPj0gdGhlTGV2ZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVGdW5jLmJpbmQobG9nZ2VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogX2ZpbHRlckZ1bmMoJ2Vycm9yJywgRGlhZ0xvZ0xldmVsLkVSUk9SKSxcbiAgICAgICAgd2FybjogX2ZpbHRlckZ1bmMoJ3dhcm4nLCBEaWFnTG9nTGV2ZWwuV0FSTiksXG4gICAgICAgIGluZm86IF9maWx0ZXJGdW5jKCdpbmZvJywgRGlhZ0xvZ0xldmVsLklORk8pLFxuICAgICAgICBkZWJ1ZzogX2ZpbHRlckZ1bmMoJ2RlYnVnJywgRGlhZ0xvZ0xldmVsLkRFQlVHKSxcbiAgICAgICAgdmVyYm9zZTogX2ZpbHRlckZ1bmMoJ3ZlcmJvc2UnLCBEaWFnTG9nTGV2ZWwuVkVSQk9TRSksXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZ0xldmVsTG9nZ2VyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIERlZmluZXMgdGhlIGF2YWlsYWJsZSBpbnRlcm5hbCBsb2dnaW5nIGxldmVscyBmb3IgdGhlIGRpYWdub3N0aWMgbG9nZ2VyLCB0aGUgbnVtZXJpYyB2YWx1ZXNcbiAqIG9mIHRoZSBsZXZlbHMgYXJlIGRlZmluZWQgdG8gbWF0Y2ggdGhlIG9yaWdpbmFsIHZhbHVlcyBmcm9tIHRoZSBpbml0aWFsIExvZ0xldmVsIHRvIGF2b2lkXG4gKiBjb21wYXRpYmlsaXR5L21pZ3JhdGlvbiBpc3N1ZXMgZm9yIGFueSBpbXBsZW1lbnRhdGlvbiB0aGF0IGFzc3VtZSB0aGUgbnVtZXJpYyBvcmRlcmluZy5cbiAqL1xuZXhwb3J0IHZhciBEaWFnTG9nTGV2ZWw7XG4oZnVuY3Rpb24gKERpYWdMb2dMZXZlbCkge1xuICAgIC8qKiBEaWFnbm9zdGljIExvZ2dpbmcgbGV2ZWwgc2V0dGluZyB0byBkaXNhYmxlIGFsbCBsb2dnaW5nIChleGNlcHQgYW5kIGZvcmNlZCBsb2dzKSAqL1xuICAgIERpYWdMb2dMZXZlbFtEaWFnTG9nTGV2ZWxbXCJOT05FXCJdID0gMF0gPSBcIk5PTkVcIjtcbiAgICAvKiogSWRlbnRpZmllcyBhbiBlcnJvciBzY2VuYXJpbyAqL1xuICAgIERpYWdMb2dMZXZlbFtEaWFnTG9nTGV2ZWxbXCJFUlJPUlwiXSA9IDMwXSA9IFwiRVJST1JcIjtcbiAgICAvKiogSWRlbnRpZmllcyBhIHdhcm5pbmcgc2NlbmFyaW8gKi9cbiAgICBEaWFnTG9nTGV2ZWxbRGlhZ0xvZ0xldmVsW1wiV0FSTlwiXSA9IDUwXSA9IFwiV0FSTlwiO1xuICAgIC8qKiBHZW5lcmFsIGluZm9ybWF0aW9uYWwgbG9nIG1lc3NhZ2UgKi9cbiAgICBEaWFnTG9nTGV2ZWxbRGlhZ0xvZ0xldmVsW1wiSU5GT1wiXSA9IDYwXSA9IFwiSU5GT1wiO1xuICAgIC8qKiBHZW5lcmFsIGRlYnVnIGxvZyBtZXNzYWdlICovXG4gICAgRGlhZ0xvZ0xldmVsW0RpYWdMb2dMZXZlbFtcIkRFQlVHXCJdID0gNzBdID0gXCJERUJVR1wiO1xuICAgIC8qKlxuICAgICAqIERldGFpbGVkIHRyYWNlIGxldmVsIGxvZ2dpbmcgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgZGV2ZWxvcG1lbnQsIHNob3VsZCBvbmx5IGJlIHNldFxuICAgICAqIGluIGEgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQuXG4gICAgICovXG4gICAgRGlhZ0xvZ0xldmVsW0RpYWdMb2dMZXZlbFtcIlZFUkJPU0VcIl0gPSA4MF0gPSBcIlZFUkJPU0VcIjtcbiAgICAvKiogVXNlZCB0byBzZXQgdGhlIGxvZ2dpbmcgbGV2ZWwgdG8gaW5jbHVkZSBhbGwgbG9nZ2luZyAqL1xuICAgIERpYWdMb2dMZXZlbFtEaWFnTG9nTGV2ZWxbXCJBTExcIl0gPSA5OTk5XSA9IFwiQUxMXCI7XG59KShEaWFnTG9nTGV2ZWwgfHwgKERpYWdMb2dMZXZlbCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9iYWdnYWdlL3R5cGVzJztcbmV4cG9ydCB7IGJhZ2dhZ2VFbnRyeU1ldGFkYXRhRnJvbVN0cmluZyB9IGZyb20gJy4vYmFnZ2FnZS91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbi9FeGNlcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tb24vVGltZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbi9BdHRyaWJ1dGVzJztcbmV4cG9ydCAqIGZyb20gJy4vZGlhZyc7XG5leHBvcnQgKiBmcm9tICcuL3Byb3BhZ2F0aW9uL1RleHRNYXBQcm9wYWdhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvYXR0cmlidXRlcyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYWNlL2xpbmsnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9Qcm94eVRyYWNlcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYWNlL1Byb3h5VHJhY2VyUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9TYW1wbGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvU2FtcGxpbmdSZXN1bHQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9zcGFuX2NvbnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9zcGFuX2tpbmQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9zcGFuJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvU3Bhbk9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9zdGF0dXMnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS90cmFjZV9mbGFncyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYWNlL3RyYWNlX3N0YXRlJztcbmV4cG9ydCB7IGNyZWF0ZVRyYWNlU3RhdGUgfSBmcm9tICcuL3RyYWNlL2ludGVybmFsL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvdHJhY2VyX3Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvdHJhY2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvdHJhY2VyX29wdGlvbnMnO1xuZXhwb3J0IHsgaXNTcGFuQ29udGV4dFZhbGlkLCBpc1ZhbGlkVHJhY2VJZCwgaXNWYWxpZFNwYW5JZCwgfSBmcm9tICcuL3RyYWNlL3NwYW5jb250ZXh0LXV0aWxzJztcbmV4cG9ydCB7IElOVkFMSURfU1BBTklELCBJTlZBTElEX1RSQUNFSUQsIElOVkFMSURfU1BBTl9DT05URVhULCB9IGZyb20gJy4vdHJhY2UvaW52YWxpZC1zcGFuLWNvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRleHQvY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRleHQvdHlwZXMnO1xuaW1wb3J0IHsgQ29udGV4dEFQSSB9IGZyb20gJy4vYXBpL2NvbnRleHQnO1xuLyoqIEVudHJ5cG9pbnQgZm9yIGNvbnRleHQgQVBJICovXG5leHBvcnQgdmFyIGNvbnRleHQgPSBDb250ZXh0QVBJLmdldEluc3RhbmNlKCk7XG5pbXBvcnQgeyBUcmFjZUFQSSB9IGZyb20gJy4vYXBpL3RyYWNlJztcbi8qKiBFbnRyeXBvaW50IGZvciB0cmFjZSBBUEkgKi9cbmV4cG9ydCB2YXIgdHJhY2UgPSBUcmFjZUFQSS5nZXRJbnN0YW5jZSgpO1xuaW1wb3J0IHsgUHJvcGFnYXRpb25BUEkgfSBmcm9tICcuL2FwaS9wcm9wYWdhdGlvbic7XG4vKiogRW50cnlwb2ludCBmb3IgcHJvcGFnYXRpb24gQVBJICovXG5leHBvcnQgdmFyIHByb3BhZ2F0aW9uID0gUHJvcGFnYXRpb25BUEkuZ2V0SW5zdGFuY2UoKTtcbmltcG9ydCB7IERpYWdBUEkgfSBmcm9tICcuL2FwaS9kaWFnJztcbi8qKlxuICogRW50cnlwb2ludCBmb3IgRGlhZyBBUEkuXG4gKiBEZWZpbmVzIERpYWdub3N0aWMgaGFuZGxlciB1c2VkIGZvciBpbnRlcm5hbCBkaWFnbm9zdGljIGxvZ2dpbmcgb3BlcmF0aW9ucy5cbiAqIFRoZSBkZWZhdWx0IHByb3ZpZGVzIGEgTm9vcCBEaWFnTG9nZ2VyIGltcGxlbWVudGF0aW9uIHdoaWNoIG1heSBiZSBjaGFuZ2VkIHZpYSB0aGVcbiAqIGRpYWcuc2V0TG9nZ2VyKGxvZ2dlcjogRGlhZ0xvZ2dlcikgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCB2YXIgZGlhZyA9IERpYWdBUEkuaW5zdGFuY2UoKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0cmFjZTogdHJhY2UsXG4gICAgY29udGV4dDogY29udGV4dCxcbiAgICBwcm9wYWdhdGlvbjogcHJvcGFnYXRpb24sXG4gICAgZGlhZzogZGlhZyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgX2dsb2JhbFRoaXMgfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSAnLi4vdmVyc2lvbic7XG5pbXBvcnQgeyBpc0NvbXBhdGlibGUgfSBmcm9tICcuL3NlbXZlcic7XG52YXIgbWFqb3IgPSBWRVJTSU9OLnNwbGl0KCcuJylbMF07XG52YXIgR0xPQkFMX09QRU5URUxFTUVUUllfQVBJX0tFWSA9IFN5bWJvbC5mb3IoXCJvcGVudGVsZW1ldHJ5LmpzLmFwaS5cIiArIG1ham9yKTtcbnZhciBfZ2xvYmFsID0gX2dsb2JhbFRoaXM7XG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJHbG9iYWwodHlwZSwgaW5zdGFuY2UsIGRpYWcsIGFsbG93T3ZlcnJpZGUpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGFsbG93T3ZlcnJpZGUgPT09IHZvaWQgMCkgeyBhbGxvd092ZXJyaWRlID0gZmFsc2U7IH1cbiAgICB2YXIgYXBpID0gKF9nbG9iYWxbR0xPQkFMX09QRU5URUxFTUVUUllfQVBJX0tFWV0gPSAoX2EgPSBfZ2xvYmFsW0dMT0JBTF9PUEVOVEVMRU1FVFJZX0FQSV9LRVldKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT04sXG4gICAgfSk7XG4gICAgaWYgKCFhbGxvd092ZXJyaWRlICYmIGFwaVt0eXBlXSkge1xuICAgICAgICAvLyBhbHJlYWR5IHJlZ2lzdGVyZWQgYW4gQVBJIG9mIHRoaXMgdHlwZVxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFwiQG9wZW50ZWxlbWV0cnkvYXBpOiBBdHRlbXB0ZWQgZHVwbGljYXRlIHJlZ2lzdHJhdGlvbiBvZiBBUEk6IFwiICsgdHlwZSk7XG4gICAgICAgIGRpYWcuZXJyb3IoZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYXBpLnZlcnNpb24gIT09IFZFUlNJT04pIHtcbiAgICAgICAgLy8gQWxsIHJlZ2lzdGVyZWQgQVBJcyBtdXN0IGJlIG9mIHRoZSBzYW1lIHZlcnNpb24gZXhhY3RseVxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdAb3BlbnRlbGVtZXRyeS9hcGk6IEFsbCBBUEkgcmVnaXN0cmF0aW9uIHZlcnNpb25zIG11c3QgbWF0Y2gnKTtcbiAgICAgICAgZGlhZy5lcnJvcihlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFwaVt0eXBlXSA9IGluc3RhbmNlO1xuICAgIGRpYWcuZGVidWcoXCJAb3BlbnRlbGVtZXRyeS9hcGk6IFJlZ2lzdGVyZWQgYSBnbG9iYWwgZm9yIFwiICsgdHlwZSArIFwiIHZcIiArIFZFUlNJT04gKyBcIi5cIik7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsKHR5cGUpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHZhciBnbG9iYWxWZXJzaW9uID0gKF9hID0gX2dsb2JhbFtHTE9CQUxfT1BFTlRFTEVNRVRSWV9BUElfS0VZXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZlcnNpb247XG4gICAgaWYgKCFnbG9iYWxWZXJzaW9uIHx8ICFpc0NvbXBhdGlibGUoZ2xvYmFsVmVyc2lvbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gKF9iID0gX2dsb2JhbFtHTE9CQUxfT1BFTlRFTEVNRVRSWV9BUElfS0VZXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iW3R5cGVdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJHbG9iYWwodHlwZSwgZGlhZykge1xuICAgIGRpYWcuZGVidWcoXCJAb3BlbnRlbGVtZXRyeS9hcGk6IFVucmVnaXN0ZXJpbmcgYSBnbG9iYWwgZm9yIFwiICsgdHlwZSArIFwiIHZcIiArIFZFUlNJT04gKyBcIi5cIik7XG4gICAgdmFyIGFwaSA9IF9nbG9iYWxbR0xPQkFMX09QRU5URUxFTUVUUllfQVBJX0tFWV07XG4gICAgaWYgKGFwaSkge1xuICAgICAgICBkZWxldGUgYXBpW3R5cGVdO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JhbC11dGlscy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gJy4uL3ZlcnNpb24nO1xudmFyIHJlID0gL14oXFxkKylcXC4oXFxkKylcXC4oXFxkKykoLSguKykpPyQvO1xuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB0byB0ZXN0IGFuIEFQSSB2ZXJzaW9uIHRvIHNlZSBpZiBpdCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIHByb3ZpZGVkIG93blZlcnNpb24uXG4gKlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGhhcyB0aGUgZm9sbG93aW5nIHNlbWFudGljczpcbiAqIC0gRXhhY3QgbWF0Y2ggaXMgYWx3YXlzIGNvbXBhdGlibGVcbiAqIC0gTWFqb3IgdmVyc2lvbnMgbXVzdCBtYXRjaCBleGFjdGx5XG4gKiAgICAtIDEueCBwYWNrYWdlIGNhbm5vdCB1c2UgZ2xvYmFsIDIueCBwYWNrYWdlXG4gKiAgICAtIDIueCBwYWNrYWdlIGNhbm5vdCB1c2UgZ2xvYmFsIDEueCBwYWNrYWdlXG4gKiAtIFRoZSBtaW5vciB2ZXJzaW9uIG9mIHRoZSBBUEkgbW9kdWxlIHJlcXVlc3RpbmcgYWNjZXNzIHRvIHRoZSBnbG9iYWwgQVBJIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBtaW5vciB2ZXJzaW9uIG9mIHRoaXMgQVBJXG4gKiAgICAtIDEuMyBwYWNrYWdlIG1heSB1c2UgMS40IGdsb2JhbCBiZWNhdXNlIHRoZSBsYXRlciBnbG9iYWwgY29udGFpbnMgYWxsIGZ1bmN0aW9ucyAxLjMgZXhwZWN0c1xuICogICAgLSAxLjQgcGFja2FnZSBtYXkgTk9UIHVzZSAxLjMgZ2xvYmFsIGJlY2F1c2UgaXQgbWF5IHRyeSB0byBjYWxsIGZ1bmN0aW9ucyB3aGljaCBkb24ndCBleGlzdCBvbiAxLjNcbiAqIC0gSWYgdGhlIG1ham9yIHZlcnNpb24gaXMgMCwgdGhlIG1pbm9yIHZlcnNpb24gaXMgdHJlYXRlZCBhcyB0aGUgbWFqb3IgYW5kIHRoZSBwYXRjaCBpcyB0cmVhdGVkIGFzIHRoZSBtaW5vclxuICogLSBQYXRjaCBhbmQgYnVpbGQgdGFnIGRpZmZlcmVuY2VzIGFyZSBub3QgY29uc2lkZXJlZCBhdCB0aGlzIHRpbWVcbiAqXG4gKiBAcGFyYW0gb3duVmVyc2lvbiB2ZXJzaW9uIHdoaWNoIHNob3VsZCBiZSBjaGVja2VkIGFnYWluc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9tYWtlQ29tcGF0aWJpbGl0eUNoZWNrKG93blZlcnNpb24pIHtcbiAgICB2YXIgYWNjZXB0ZWRWZXJzaW9ucyA9IG5ldyBTZXQoW293blZlcnNpb25dKTtcbiAgICB2YXIgcmVqZWN0ZWRWZXJzaW9ucyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgbXlWZXJzaW9uTWF0Y2ggPSBvd25WZXJzaW9uLm1hdGNoKHJlKTtcbiAgICBpZiAoIW15VmVyc2lvbk1hdGNoKSB7XG4gICAgICAgIC8vIHdlIGNhbm5vdCBndWFyYW50ZWUgY29tcGF0aWJpbGl0eSBzbyB3ZSBhbHdheXMgcmV0dXJuIG5vb3BcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgIH1cbiAgICB2YXIgb3duVmVyc2lvblBhcnNlZCA9IHtcbiAgICAgICAgbWFqb3I6ICtteVZlcnNpb25NYXRjaFsxXSxcbiAgICAgICAgbWlub3I6ICtteVZlcnNpb25NYXRjaFsyXSxcbiAgICAgICAgcGF0Y2g6ICtteVZlcnNpb25NYXRjaFszXSxcbiAgICAgICAgcHJlcmVsZWFzZTogbXlWZXJzaW9uTWF0Y2hbNF0sXG4gICAgfTtcbiAgICAvLyBpZiBvd25WZXJzaW9uIGhhcyBhIHByZXJlbGVhc2UgdGFnLCB2ZXJzaW9ucyBtdXN0IG1hdGNoIGV4YWN0bHlcbiAgICBpZiAob3duVmVyc2lvblBhcnNlZC5wcmVyZWxlYXNlICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzRXhhY3RtYXRjaChnbG9iYWxWZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsVmVyc2lvbiA9PT0gb3duVmVyc2lvbjtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3JlamVjdCh2KSB7XG4gICAgICAgIHJlamVjdGVkVmVyc2lvbnMuYWRkKHYpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9hY2NlcHQodikge1xuICAgICAgICBhY2NlcHRlZFZlcnNpb25zLmFkZCh2KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBpc0NvbXBhdGlibGUoZ2xvYmFsVmVyc2lvbikge1xuICAgICAgICBpZiAoYWNjZXB0ZWRWZXJzaW9ucy5oYXMoZ2xvYmFsVmVyc2lvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWplY3RlZFZlcnNpb25zLmhhcyhnbG9iYWxWZXJzaW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBnbG9iYWxWZXJzaW9uTWF0Y2ggPSBnbG9iYWxWZXJzaW9uLm1hdGNoKHJlKTtcbiAgICAgICAgaWYgKCFnbG9iYWxWZXJzaW9uTWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIGNhbm5vdCBwYXJzZSBvdGhlciB2ZXJzaW9uXG4gICAgICAgICAgICAvLyB3ZSBjYW5ub3QgZ3VhcmFudGVlIGNvbXBhdGliaWxpdHkgc28gd2UgYWx3YXlzIG5vb3BcbiAgICAgICAgICAgIHJldHVybiBfcmVqZWN0KGdsb2JhbFZlcnNpb24pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBnbG9iYWxWZXJzaW9uUGFyc2VkID0ge1xuICAgICAgICAgICAgbWFqb3I6ICtnbG9iYWxWZXJzaW9uTWF0Y2hbMV0sXG4gICAgICAgICAgICBtaW5vcjogK2dsb2JhbFZlcnNpb25NYXRjaFsyXSxcbiAgICAgICAgICAgIHBhdGNoOiArZ2xvYmFsVmVyc2lvbk1hdGNoWzNdLFxuICAgICAgICAgICAgcHJlcmVsZWFzZTogZ2xvYmFsVmVyc2lvbk1hdGNoWzRdLFxuICAgICAgICB9O1xuICAgICAgICAvLyBpZiBnbG9iYWxWZXJzaW9uIGhhcyBhIHByZXJlbGVhc2UgdGFnLCB2ZXJzaW9ucyBtdXN0IG1hdGNoIGV4YWN0bHlcbiAgICAgICAgaWYgKGdsb2JhbFZlcnNpb25QYXJzZWQucHJlcmVsZWFzZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlamVjdChnbG9iYWxWZXJzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYWpvciB2ZXJzaW9ucyBtdXN0IG1hdGNoXG4gICAgICAgIGlmIChvd25WZXJzaW9uUGFyc2VkLm1ham9yICE9PSBnbG9iYWxWZXJzaW9uUGFyc2VkLm1ham9yKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlamVjdChnbG9iYWxWZXJzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3duVmVyc2lvblBhcnNlZC5tYWpvciA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKG93blZlcnNpb25QYXJzZWQubWlub3IgPT09IGdsb2JhbFZlcnNpb25QYXJzZWQubWlub3IgJiZcbiAgICAgICAgICAgICAgICBvd25WZXJzaW9uUGFyc2VkLnBhdGNoIDw9IGdsb2JhbFZlcnNpb25QYXJzZWQucGF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2FjY2VwdChnbG9iYWxWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfcmVqZWN0KGdsb2JhbFZlcnNpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvd25WZXJzaW9uUGFyc2VkLm1pbm9yIDw9IGdsb2JhbFZlcnNpb25QYXJzZWQubWlub3IpIHtcbiAgICAgICAgICAgIHJldHVybiBfYWNjZXB0KGdsb2JhbFZlcnNpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVqZWN0KGdsb2JhbFZlcnNpb24pO1xuICAgIH07XG59XG4vKipcbiAqIFRlc3QgYW4gQVBJIHZlcnNpb24gdG8gc2VlIGlmIGl0IGlzIGNvbXBhdGlibGUgd2l0aCB0aGlzIEFQSS5cbiAqXG4gKiAtIEV4YWN0IG1hdGNoIGlzIGFsd2F5cyBjb21wYXRpYmxlXG4gKiAtIE1ham9yIHZlcnNpb25zIG11c3QgbWF0Y2ggZXhhY3RseVxuICogICAgLSAxLnggcGFja2FnZSBjYW5ub3QgdXNlIGdsb2JhbCAyLnggcGFja2FnZVxuICogICAgLSAyLnggcGFja2FnZSBjYW5ub3QgdXNlIGdsb2JhbCAxLnggcGFja2FnZVxuICogLSBUaGUgbWlub3IgdmVyc2lvbiBvZiB0aGUgQVBJIG1vZHVsZSByZXF1ZXN0aW5nIGFjY2VzcyB0byB0aGUgZ2xvYmFsIEFQSSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWlub3IgdmVyc2lvbiBvZiB0aGlzIEFQSVxuICogICAgLSAxLjMgcGFja2FnZSBtYXkgdXNlIDEuNCBnbG9iYWwgYmVjYXVzZSB0aGUgbGF0ZXIgZ2xvYmFsIGNvbnRhaW5zIGFsbCBmdW5jdGlvbnMgMS4zIGV4cGVjdHNcbiAqICAgIC0gMS40IHBhY2thZ2UgbWF5IE5PVCB1c2UgMS4zIGdsb2JhbCBiZWNhdXNlIGl0IG1heSB0cnkgdG8gY2FsbCBmdW5jdGlvbnMgd2hpY2ggZG9uJ3QgZXhpc3Qgb24gMS4zXG4gKiAtIElmIHRoZSBtYWpvciB2ZXJzaW9uIGlzIDAsIHRoZSBtaW5vciB2ZXJzaW9uIGlzIHRyZWF0ZWQgYXMgdGhlIG1ham9yIGFuZCB0aGUgcGF0Y2ggaXMgdHJlYXRlZCBhcyB0aGUgbWlub3JcbiAqIC0gUGF0Y2ggYW5kIGJ1aWxkIHRhZyBkaWZmZXJlbmNlcyBhcmUgbm90IGNvbnNpZGVyZWQgYXQgdGhpcyB0aW1lXG4gKlxuICogQHBhcmFtIHZlcnNpb24gdmVyc2lvbiBvZiB0aGUgQVBJIHJlcXVlc3RpbmcgYW4gaW5zdGFuY2Ugb2YgdGhlIGdsb2JhbCBBUElcbiAqL1xuZXhwb3J0IHZhciBpc0NvbXBhdGlibGUgPSBfbWFrZUNvbXBhdGliaWxpdHlDaGVjayhWRVJTSU9OKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlbXZlci5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLy8gVXBkYXRlcyB0byB0aGlzIGZpbGUgc2hvdWxkIGFsc28gYmUgcmVwbGljYXRlZCB0byBAb3BlbnRlbGVtZXRyeS9hcGktbWV0cmljcyBhbmRcbi8vIEBvcGVudGVsZW1ldHJ5L2NvcmUgdG9vLlxuLyoqXG4gKiAtIGdsb2JhbFRoaXMgKE5ldyBzdGFuZGFyZClcbiAqIC0gc2VsZiAoV2lsbCByZXR1cm4gdGhlIGN1cnJlbnQgd2luZG93IGluc3RhbmNlIGZvciBzdXBwb3J0ZWQgYnJvd3NlcnMpXG4gKiAtIHdpbmRvdyAoZmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXIgaW1wbGVtZW50YXRpb25zKVxuICogLSBnbG9iYWwgKE5vZGVKUyBpbXBsZW1lbnRhdGlvbilcbiAqIC0gPG9iamVjdD4gKFdoZW4gYWxsIGVsc2UgZmFpbHMpXG4gKi9cbi8qKiBvbmx5IGdsb2JhbHMgdGhhdCBjb21tb24gdG8gbm9kZSBhbmQgYnJvd3NlcnMgYXJlIGFsbG93ZWQgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL2VzLWJ1aWx0aW5zLCBuby11bmRlZlxuZXhwb3J0IHZhciBfZ2xvYmFsVGhpcyA9IHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JyA/IGdsb2JhbFRoaXMgOlxuICAgIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyA/IHNlbGYgOlxuICAgICAgICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IHdpbmRvdyA6XG4gICAgICAgICAgICB0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyA/IGdsb2JhbCA6XG4gICAgICAgICAgICAgICAge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWxUaGlzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2dsb2JhbFRoaXMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogTm8tb3AgaW1wbGVtZW50YXRpb25zIG9mIHtAbGluayBUZXh0TWFwUHJvcGFnYXRvcn0uXG4gKi9cbnZhciBOb29wVGV4dE1hcFByb3BhZ2F0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9vcFRleHRNYXBQcm9wYWdhdG9yKCkge1xuICAgIH1cbiAgICAvKiogTm9vcCBpbmplY3QgZnVuY3Rpb24gZG9lcyBub3RoaW5nICovXG4gICAgTm9vcFRleHRNYXBQcm9wYWdhdG9yLnByb3RvdHlwZS5pbmplY3QgPSBmdW5jdGlvbiAoX2NvbnRleHQsIF9jYXJyaWVyKSB7IH07XG4gICAgLyoqIE5vb3AgZXh0cmFjdCBmdW5jdGlvbiBkb2VzIG5vdGhpbmcgYW5kIHJldHVybnMgdGhlIGlucHV0IGNvbnRleHQgKi9cbiAgICBOb29wVGV4dE1hcFByb3BhZ2F0b3IucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAoY29udGV4dCwgX2NhcnJpZXIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfTtcbiAgICBOb29wVGV4dE1hcFByb3BhZ2F0b3IucHJvdG90eXBlLmZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH07XG4gICAgcmV0dXJuIE5vb3BUZXh0TWFwUHJvcGFnYXRvcjtcbn0oKSk7XG5leHBvcnQgeyBOb29wVGV4dE1hcFByb3BhZ2F0b3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vb3BUZXh0TWFwUHJvcGFnYXRvci5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHZhciBkZWZhdWx0VGV4dE1hcEdldHRlciA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIChjYXJyaWVyLCBrZXkpIHtcbiAgICAgICAgaWYgKGNhcnJpZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FycmllcltrZXldO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24gKGNhcnJpZXIpIHtcbiAgICAgICAgaWYgKGNhcnJpZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjYXJyaWVyKTtcbiAgICB9LFxufTtcbmV4cG9ydCB2YXIgZGVmYXVsdFRleHRNYXBTZXR0ZXIgPSB7XG4gICAgc2V0OiBmdW5jdGlvbiAoY2Fycmllciwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoY2FycmllciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FycmllcltrZXldID0gdmFsdWU7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UZXh0TWFwUHJvcGFnYXRvci5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSU5WQUxJRF9TUEFOX0NPTlRFWFQgfSBmcm9tICcuL2ludmFsaWQtc3Bhbi1jb25zdGFudHMnO1xuLyoqXG4gKiBUaGUgTm9uUmVjb3JkaW5nU3BhbiBpcyB0aGUgZGVmYXVsdCB7QGxpbmsgU3Bhbn0gdGhhdCBpcyB1c2VkIHdoZW4gbm8gU3BhblxuICogaW1wbGVtZW50YXRpb24gaXMgYXZhaWxhYmxlLiBBbGwgb3BlcmF0aW9ucyBhcmUgbm8tb3AgaW5jbHVkaW5nIGNvbnRleHRcbiAqIHByb3BhZ2F0aW9uLlxuICovXG52YXIgTm9uUmVjb3JkaW5nU3BhbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb25SZWNvcmRpbmdTcGFuKF9zcGFuQ29udGV4dCkge1xuICAgICAgICBpZiAoX3NwYW5Db250ZXh0ID09PSB2b2lkIDApIHsgX3NwYW5Db250ZXh0ID0gSU5WQUxJRF9TUEFOX0NPTlRFWFQ7IH1cbiAgICAgICAgdGhpcy5fc3BhbkNvbnRleHQgPSBfc3BhbkNvbnRleHQ7XG4gICAgfVxuICAgIC8vIFJldHVybnMgYSBTcGFuQ29udGV4dC5cbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5zcGFuQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYW5Db250ZXh0O1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoX2tleSwgX3ZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKF9hdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChfbmFtZSwgX2F0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvLyBCeSBkZWZhdWx0IGRvZXMgbm90aGluZ1xuICAgIE5vblJlY29yZGluZ1NwYW4ucHJvdG90eXBlLnNldFN0YXR1cyA9IGZ1bmN0aW9uIChfc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS51cGRhdGVOYW1lID0gZnVuY3Rpb24gKF9uYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoX2VuZFRpbWUpIHsgfTtcbiAgICAvLyBpc1JlY29yZGluZyBhbHdheXMgcmV0dXJucyBmYWxzZSBmb3IgTm9uUmVjb3JkaW5nU3Bhbi5cbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5pc1JlY29yZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5yZWNvcmRFeGNlcHRpb24gPSBmdW5jdGlvbiAoX2V4Y2VwdGlvbiwgX3RpbWUpIHsgfTtcbiAgICByZXR1cm4gTm9uUmVjb3JkaW5nU3Bhbjtcbn0oKSk7XG5leHBvcnQgeyBOb25SZWNvcmRpbmdTcGFuIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob25SZWNvcmRpbmdTcGFuLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBDb250ZXh0QVBJIH0gZnJvbSAnLi4vYXBpL2NvbnRleHQnO1xuaW1wb3J0IHsgZ2V0U3BhbkNvbnRleHQsIHNldFNwYW4gfSBmcm9tICcuLi90cmFjZS9jb250ZXh0LXV0aWxzJztcbmltcG9ydCB7IE5vblJlY29yZGluZ1NwYW4gfSBmcm9tICcuL05vblJlY29yZGluZ1NwYW4nO1xuaW1wb3J0IHsgaXNTcGFuQ29udGV4dFZhbGlkIH0gZnJvbSAnLi9zcGFuY29udGV4dC11dGlscyc7XG52YXIgY29udGV4dCA9IENvbnRleHRBUEkuZ2V0SW5zdGFuY2UoKTtcbi8qKlxuICogTm8tb3AgaW1wbGVtZW50YXRpb25zIG9mIHtAbGluayBUcmFjZXJ9LlxuICovXG52YXIgTm9vcFRyYWNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb29wVHJhY2VyKCkge1xuICAgIH1cbiAgICAvLyBzdGFydFNwYW4gc3RhcnRzIGEgbm9vcCBzcGFuLlxuICAgIE5vb3BUcmFjZXIucHJvdG90eXBlLnN0YXJ0U3BhbiA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciByb290ID0gQm9vbGVhbihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm9vdCk7XG4gICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vblJlY29yZGluZ1NwYW4oKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFyZW50RnJvbUNvbnRleHQgPSBjb250ZXh0ICYmIGdldFNwYW5Db250ZXh0KGNvbnRleHQpO1xuICAgICAgICBpZiAoaXNTcGFuQ29udGV4dChwYXJlbnRGcm9tQ29udGV4dCkgJiZcbiAgICAgICAgICAgIGlzU3BhbkNvbnRleHRWYWxpZChwYXJlbnRGcm9tQ29udGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9uUmVjb3JkaW5nU3BhbihwYXJlbnRGcm9tQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vblJlY29yZGluZ1NwYW4oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9vcFRyYWNlci5wcm90b3R5cGUuc3RhcnRBY3RpdmVTcGFuID0gZnVuY3Rpb24gKG5hbWUsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICAgICAgdmFyIG9wdHM7XG4gICAgICAgIHZhciBjdHg7XG4gICAgICAgIHZhciBmbjtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgZm4gPSBhcmcyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIG9wdHMgPSBhcmcyO1xuICAgICAgICAgICAgZm4gPSBhcmczO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0cyA9IGFyZzI7XG4gICAgICAgICAgICBjdHggPSBhcmczO1xuICAgICAgICAgICAgZm4gPSBhcmc0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJlbnRDb250ZXh0ID0gY3R4ICE9PSBudWxsICYmIGN0eCAhPT0gdm9pZCAwID8gY3R4IDogY29udGV4dC5hY3RpdmUoKTtcbiAgICAgICAgdmFyIHNwYW4gPSB0aGlzLnN0YXJ0U3BhbihuYW1lLCBvcHRzLCBwYXJlbnRDb250ZXh0KTtcbiAgICAgICAgdmFyIGNvbnRleHRXaXRoU3BhblNldCA9IHNldFNwYW4ocGFyZW50Q29udGV4dCwgc3Bhbik7XG4gICAgICAgIHJldHVybiBjb250ZXh0LndpdGgoY29udGV4dFdpdGhTcGFuU2V0LCBmbiwgdW5kZWZpbmVkLCBzcGFuKTtcbiAgICB9O1xuICAgIHJldHVybiBOb29wVHJhY2VyO1xufSgpKTtcbmV4cG9ydCB7IE5vb3BUcmFjZXIgfTtcbmZ1bmN0aW9uIGlzU3BhbkNvbnRleHQoc3BhbkNvbnRleHQpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBzcGFuQ29udGV4dCA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIHNwYW5Db250ZXh0WydzcGFuSWQnXSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgdHlwZW9mIHNwYW5Db250ZXh0Wyd0cmFjZUlkJ10gPT09ICdzdHJpbmcnICYmXG4gICAgICAgIHR5cGVvZiBzcGFuQ29udGV4dFsndHJhY2VGbGFncyddID09PSAnbnVtYmVyJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob29wVHJhY2VyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBOb29wVHJhY2VyIH0gZnJvbSAnLi9Ob29wVHJhY2VyJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIHtAbGluayBUcmFjZXJQcm92aWRlcn0gd2hpY2ggcmV0dXJucyBhbiBpbXBvdGVudFxuICogVHJhY2VyIGZvciBhbGwgY2FsbHMgdG8gYGdldFRyYWNlcmAuXG4gKlxuICogQWxsIG9wZXJhdGlvbnMgYXJlIG5vLW9wLlxuICovXG52YXIgTm9vcFRyYWNlclByb3ZpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vb3BUcmFjZXJQcm92aWRlcigpIHtcbiAgICB9XG4gICAgTm9vcFRyYWNlclByb3ZpZGVyLnByb3RvdHlwZS5nZXRUcmFjZXIgPSBmdW5jdGlvbiAoX25hbWUsIF92ZXJzaW9uLCBfb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IE5vb3BUcmFjZXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBOb29wVHJhY2VyUHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgTm9vcFRyYWNlclByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob29wVHJhY2VyUHJvdmlkZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IE5vb3BUcmFjZXIgfSBmcm9tICcuL05vb3BUcmFjZXInO1xudmFyIE5PT1BfVFJBQ0VSID0gbmV3IE5vb3BUcmFjZXIoKTtcbi8qKlxuICogUHJveHkgdHJhY2VyIHByb3ZpZGVkIGJ5IHRoZSBwcm94eSB0cmFjZXIgcHJvdmlkZXJcbiAqL1xudmFyIFByb3h5VHJhY2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb3h5VHJhY2VyKF9wcm92aWRlciwgbmFtZSwgdmVyc2lvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9wcm92aWRlciA9IF9wcm92aWRlcjtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgUHJveHlUcmFjZXIucHJvdG90eXBlLnN0YXJ0U3BhbiA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRUcmFjZXIoKS5zdGFydFNwYW4obmFtZSwgb3B0aW9ucywgY29udGV4dCk7XG4gICAgfTtcbiAgICBQcm94eVRyYWNlci5wcm90b3R5cGUuc3RhcnRBY3RpdmVTcGFuID0gZnVuY3Rpb24gKF9uYW1lLCBfb3B0aW9ucywgX2NvbnRleHQsIF9mbikge1xuICAgICAgICB2YXIgdHJhY2VyID0gdGhpcy5fZ2V0VHJhY2VyKCk7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmFwcGx5KHRyYWNlci5zdGFydEFjdGl2ZVNwYW4sIHRyYWNlciwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyeSB0byBnZXQgYSB0cmFjZXIgZnJvbSB0aGUgcHJveHkgdHJhY2VyIHByb3ZpZGVyLlxuICAgICAqIElmIHRoZSBwcm94eSB0cmFjZXIgcHJvdmlkZXIgaGFzIG5vIGRlbGVnYXRlLCByZXR1cm4gYSBub29wIHRyYWNlci5cbiAgICAgKi9cbiAgICBQcm94eVRyYWNlci5wcm90b3R5cGUuX2dldFRyYWNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlbGVnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyYWNlciA9IHRoaXMuX3Byb3ZpZGVyLmdldERlbGVnYXRlVHJhY2VyKHRoaXMubmFtZSwgdGhpcy52ZXJzaW9uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoIXRyYWNlcikge1xuICAgICAgICAgICAgcmV0dXJuIE5PT1BfVFJBQ0VSO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gdHJhY2VyO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGU7XG4gICAgfTtcbiAgICByZXR1cm4gUHJveHlUcmFjZXI7XG59KCkpO1xuZXhwb3J0IHsgUHJveHlUcmFjZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb3h5VHJhY2VyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBQcm94eVRyYWNlciB9IGZyb20gJy4vUHJveHlUcmFjZXInO1xuaW1wb3J0IHsgTm9vcFRyYWNlclByb3ZpZGVyIH0gZnJvbSAnLi9Ob29wVHJhY2VyUHJvdmlkZXInO1xudmFyIE5PT1BfVFJBQ0VSX1BST1ZJREVSID0gbmV3IE5vb3BUcmFjZXJQcm92aWRlcigpO1xuLyoqXG4gKiBUcmFjZXIgcHJvdmlkZXIgd2hpY2ggcHJvdmlkZXMge0BsaW5rIFByb3h5VHJhY2VyfXMuXG4gKlxuICogQmVmb3JlIGEgZGVsZWdhdGUgaXMgc2V0LCB0cmFjZXJzIHByb3ZpZGVkIGFyZSBOb09wLlxuICogICBXaGVuIGEgZGVsZWdhdGUgaXMgc2V0LCB0cmFjZXMgYXJlIHByb3ZpZGVkIGZyb20gdGhlIGRlbGVnYXRlLlxuICogICBXaGVuIGEgZGVsZWdhdGUgaXMgc2V0IGFmdGVyIHRyYWNlcnMgaGF2ZSBhbHJlYWR5IGJlZW4gcHJvdmlkZWQsXG4gKiAgIGFsbCB0cmFjZXJzIGFscmVhZHkgcHJvdmlkZWQgd2lsbCB1c2UgdGhlIHByb3ZpZGVkIGRlbGVnYXRlIGltcGxlbWVudGF0aW9uLlxuICovXG52YXIgUHJveHlUcmFjZXJQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQcm94eVRyYWNlclByb3ZpZGVyKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSB7QGxpbmsgUHJveHlUcmFjZXJ9XG4gICAgICovXG4gICAgUHJveHlUcmFjZXJQcm92aWRlci5wcm90b3R5cGUuZ2V0VHJhY2VyID0gZnVuY3Rpb24gKG5hbWUsIHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKChfYSA9IHRoaXMuZ2V0RGVsZWdhdGVUcmFjZXIobmFtZSwgdmVyc2lvbiwgb3B0aW9ucykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5ldyBQcm94eVRyYWNlcih0aGlzLCBuYW1lLCB2ZXJzaW9uLCBvcHRpb25zKSk7XG4gICAgfTtcbiAgICBQcm94eVRyYWNlclByb3ZpZGVyLnByb3RvdHlwZS5nZXREZWxlZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZGVsZWdhdGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IE5PT1BfVFJBQ0VSX1BST1ZJREVSO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWxlZ2F0ZSB0cmFjZXIgcHJvdmlkZXJcbiAgICAgKi9cbiAgICBQcm94eVRyYWNlclByb3ZpZGVyLnByb3RvdHlwZS5zZXREZWxlZ2F0ZSA9IGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLl9kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgIH07XG4gICAgUHJveHlUcmFjZXJQcm92aWRlci5wcm90b3R5cGUuZ2V0RGVsZWdhdGVUcmFjZXIgPSBmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9kZWxlZ2F0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFRyYWNlcihuYW1lLCB2ZXJzaW9uLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBQcm94eVRyYWNlclByb3ZpZGVyO1xufSgpKTtcbmV4cG9ydCB7IFByb3h5VHJhY2VyUHJvdmlkZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb3h5VHJhY2VyUHJvdmlkZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNhbXBsZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQSBzYW1wbGluZyBkZWNpc2lvbiB0aGF0IGRldGVybWluZXMgaG93IGEge0BsaW5rIFNwYW59IHdpbGwgYmUgcmVjb3JkZWRcbiAqIGFuZCBjb2xsZWN0ZWQuXG4gKi9cbmV4cG9ydCB2YXIgU2FtcGxpbmdEZWNpc2lvbjtcbihmdW5jdGlvbiAoU2FtcGxpbmdEZWNpc2lvbikge1xuICAgIC8qKlxuICAgICAqIGBTcGFuLmlzUmVjb3JkaW5nKCkgPT09IGZhbHNlYCwgc3BhbiB3aWxsIG5vdCBiZSByZWNvcmRlZCBhbmQgYWxsIGV2ZW50c1xuICAgICAqIGFuZCBhdHRyaWJ1dGVzIHdpbGwgYmUgZHJvcHBlZC5cbiAgICAgKi9cbiAgICBTYW1wbGluZ0RlY2lzaW9uW1NhbXBsaW5nRGVjaXNpb25bXCJOT1RfUkVDT1JEXCJdID0gMF0gPSBcIk5PVF9SRUNPUkRcIjtcbiAgICAvKipcbiAgICAgKiBgU3Bhbi5pc1JlY29yZGluZygpID09PSB0cnVlYCwgYnV0IGBTYW1wbGVkYCBmbGFnIGluIHtAbGluayBUcmFjZUZsYWdzfVxuICAgICAqIE1VU1QgTk9UIGJlIHNldC5cbiAgICAgKi9cbiAgICBTYW1wbGluZ0RlY2lzaW9uW1NhbXBsaW5nRGVjaXNpb25bXCJSRUNPUkRcIl0gPSAxXSA9IFwiUkVDT1JEXCI7XG4gICAgLyoqXG4gICAgICogYFNwYW4uaXNSZWNvcmRpbmcoKSA9PT0gdHJ1ZWAgQU5EIGBTYW1wbGVkYCBmbGFnIGluIHtAbGluayBUcmFjZUZsYWdzfVxuICAgICAqIE1VU1QgYmUgc2V0LlxuICAgICAqL1xuICAgIFNhbXBsaW5nRGVjaXNpb25bU2FtcGxpbmdEZWNpc2lvbltcIlJFQ09SRF9BTkRfU0FNUExFRFwiXSA9IDJdID0gXCJSRUNPUkRfQU5EX1NBTVBMRURcIjtcbn0pKFNhbXBsaW5nRGVjaXNpb24gfHwgKFNhbXBsaW5nRGVjaXNpb24gPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2FtcGxpbmdSZXN1bHQuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNwYW5PcHRpb25zLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdHRyaWJ1dGVzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0S2V5IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0JztcbmltcG9ydCB7IE5vblJlY29yZGluZ1NwYW4gfSBmcm9tICcuL05vblJlY29yZGluZ1NwYW4nO1xuLyoqXG4gKiBzcGFuIGtleVxuICovXG52YXIgU1BBTl9LRVkgPSBjcmVhdGVDb250ZXh0S2V5KCdPcGVuVGVsZW1ldHJ5IENvbnRleHQgS2V5IFNQQU4nKTtcbi8qKlxuICogUmV0dXJuIHRoZSBzcGFuIGlmIG9uZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0gY29udGV4dCBjb250ZXh0IHRvIGdldCBzcGFuIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNwYW4oY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0LmdldFZhbHVlKFNQQU5fS0VZKSB8fCB1bmRlZmluZWQ7XG59XG4vKipcbiAqIFNldCB0aGUgc3BhbiBvbiBhIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0gY29udGV4dCBjb250ZXh0IHRvIHVzZSBhcyBwYXJlbnRcbiAqIEBwYXJhbSBzcGFuIHNwYW4gdG8gc2V0IGFjdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0U3Bhbihjb250ZXh0LCBzcGFuKSB7XG4gICAgcmV0dXJuIGNvbnRleHQuc2V0VmFsdWUoU1BBTl9LRVksIHNwYW4pO1xufVxuLyoqXG4gKiBSZW1vdmUgY3VycmVudCBzcGFuIHN0b3JlZCBpbiB0aGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgdG8gZGVsZXRlIHNwYW4gZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU3Bhbihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZGVsZXRlVmFsdWUoU1BBTl9LRVkpO1xufVxuLyoqXG4gKiBXcmFwIHNwYW4gY29udGV4dCBpbiBhIE5vb3BTcGFuIGFuZCBzZXQgYXMgc3BhbiBpbiBhIG5ld1xuICogY29udGV4dFxuICpcbiAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgdG8gc2V0IGFjdGl2ZSBzcGFuIG9uXG4gKiBAcGFyYW0gc3BhbkNvbnRleHQgc3BhbiBjb250ZXh0IHRvIGJlIHdyYXBwZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFNwYW5Db250ZXh0KGNvbnRleHQsIHNwYW5Db250ZXh0KSB7XG4gICAgcmV0dXJuIHNldFNwYW4oY29udGV4dCwgbmV3IE5vblJlY29yZGluZ1NwYW4oc3BhbkNvbnRleHQpKTtcbn1cbi8qKlxuICogR2V0IHRoZSBzcGFuIGNvbnRleHQgb2YgdGhlIHNwYW4gaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgdG8gZ2V0IHZhbHVlcyBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGFuQ29udGV4dChjb250ZXh0KSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBnZXRTcGFuKGNvbnRleHQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BhbkNvbnRleHQoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQtdXRpbHMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IHZhbGlkYXRlS2V5LCB2YWxpZGF0ZVZhbHVlIH0gZnJvbSAnLi90cmFjZXN0YXRlLXZhbGlkYXRvcnMnO1xudmFyIE1BWF9UUkFDRV9TVEFURV9JVEVNUyA9IDMyO1xudmFyIE1BWF9UUkFDRV9TVEFURV9MRU4gPSA1MTI7XG52YXIgTElTVF9NRU1CRVJTX1NFUEFSQVRPUiA9ICcsJztcbnZhciBMSVNUX01FTUJFUl9LRVlfVkFMVUVfU1BMSVRURVIgPSAnPSc7XG4vKipcbiAqIFRyYWNlU3RhdGUgbXVzdCBiZSBhIGNsYXNzIGFuZCBub3QgYSBzaW1wbGUgb2JqZWN0IHR5cGUgYmVjYXVzZSBvZiB0aGUgc3BlY1xuICogcmVxdWlyZW1lbnQgKGh0dHBzOi8vd3d3LnczLm9yZy9UUi90cmFjZS1jb250ZXh0LyN0cmFjZXN0YXRlLWZpZWxkKS5cbiAqXG4gKiBIZXJlIGlzIHRoZSBsaXN0IG9mIGFsbG93ZWQgbXV0YXRpb25zOlxuICogLSBOZXcga2V5LXZhbHVlIHBhaXIgc2hvdWxkIGJlIGFkZGVkIGludG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuICogLSBUaGUgdmFsdWUgb2YgYW55IGtleSBjYW4gYmUgdXBkYXRlZC4gTW9kaWZpZWQga2V5cyBNVVNUIGJlIG1vdmVkIHRvIHRoZVxuICogYmVnaW5uaW5nIG9mIHRoZSBsaXN0LlxuICovXG52YXIgVHJhY2VTdGF0ZUltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhY2VTdGF0ZUltcGwocmF3VHJhY2VTdGF0ZSkge1xuICAgICAgICB0aGlzLl9pbnRlcm5hbFN0YXRlID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAocmF3VHJhY2VTdGF0ZSlcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlKHJhd1RyYWNlU3RhdGUpO1xuICAgIH1cbiAgICBUcmFjZVN0YXRlSW1wbC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgLy8gVE9ETzogQmVuY2htYXJrIHRoZSBkaWZmZXJlbnQgYXBwcm9hY2hlcyhtYXAgdnMgbGlzdCkgYW5kXG4gICAgICAgIC8vIHVzZSB0aGUgZmFzdGVyIG9uZS5cbiAgICAgICAgdmFyIHRyYWNlU3RhdGUgPSB0aGlzLl9jbG9uZSgpO1xuICAgICAgICBpZiAodHJhY2VTdGF0ZS5faW50ZXJuYWxTdGF0ZS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdHJhY2VTdGF0ZS5faW50ZXJuYWxTdGF0ZS5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0cmFjZVN0YXRlLl9pbnRlcm5hbFN0YXRlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRyYWNlU3RhdGU7XG4gICAgfTtcbiAgICBUcmFjZVN0YXRlSW1wbC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0cmFjZVN0YXRlID0gdGhpcy5fY2xvbmUoKTtcbiAgICAgICAgdHJhY2VTdGF0ZS5faW50ZXJuYWxTdGF0ZS5kZWxldGUoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRyYWNlU3RhdGU7XG4gICAgfTtcbiAgICBUcmFjZVN0YXRlSW1wbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJuYWxTdGF0ZS5nZXQoa2V5KTtcbiAgICB9O1xuICAgIFRyYWNlU3RhdGVJbXBsLnByb3RvdHlwZS5zZXJpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzKClcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGFnZywga2V5KSB7XG4gICAgICAgICAgICBhZ2cucHVzaChrZXkgKyBMSVNUX01FTUJFUl9LRVlfVkFMVUVfU1BMSVRURVIgKyBfdGhpcy5nZXQoa2V5KSk7XG4gICAgICAgICAgICByZXR1cm4gYWdnO1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgIC5qb2luKExJU1RfTUVNQkVSU19TRVBBUkFUT1IpO1xuICAgIH07XG4gICAgVHJhY2VTdGF0ZUltcGwucHJvdG90eXBlLl9wYXJzZSA9IGZ1bmN0aW9uIChyYXdUcmFjZVN0YXRlKSB7XG4gICAgICAgIGlmIChyYXdUcmFjZVN0YXRlLmxlbmd0aCA+IE1BWF9UUkFDRV9TVEFURV9MRU4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX2ludGVybmFsU3RhdGUgPSByYXdUcmFjZVN0YXRlXG4gICAgICAgICAgICAuc3BsaXQoTElTVF9NRU1CRVJTX1NFUEFSQVRPUilcbiAgICAgICAgICAgIC5yZXZlcnNlKCkgLy8gU3RvcmUgaW4gcmV2ZXJzZSBzbyBuZXcga2V5cyAoLnNldCguLi4pKSB3aWxsIGJlIHBsYWNlZCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhZ2csIHBhcnQpIHtcbiAgICAgICAgICAgIHZhciBsaXN0TWVtYmVyID0gcGFydC50cmltKCk7IC8vIE9wdGlvbmFsIFdoaXRlc3BhY2UgKE9XUykgaGFuZGxpbmdcbiAgICAgICAgICAgIHZhciBpID0gbGlzdE1lbWJlci5pbmRleE9mKExJU1RfTUVNQkVSX0tFWV9WQUxVRV9TUExJVFRFUik7XG4gICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gbGlzdE1lbWJlci5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBsaXN0TWVtYmVyLnNsaWNlKGkgKyAxLCBwYXJ0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlS2V5KGtleSkgJiYgdmFsaWRhdGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWdnLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IENvbnNpZGVyIHRvIGFkZCB3YXJuaW5nIGxvZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZ2c7XG4gICAgICAgIH0sIG5ldyBNYXAoKSk7XG4gICAgICAgIC8vIEJlY2F1c2Ugb2YgdGhlIHJldmVyc2UoKSByZXF1aXJlbWVudCwgdHJ1bmMgbXVzdCBiZSBkb25lIGFmdGVyIG1hcCBpcyBjcmVhdGVkXG4gICAgICAgIGlmICh0aGlzLl9pbnRlcm5hbFN0YXRlLnNpemUgPiBNQVhfVFJBQ0VfU1RBVEVfSVRFTVMpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFsU3RhdGUgPSBuZXcgTWFwKEFycmF5LmZyb20odGhpcy5faW50ZXJuYWxTdGF0ZS5lbnRyaWVzKCkpXG4gICAgICAgICAgICAgICAgLnJldmVyc2UoKSAvLyBVc2UgcmV2ZXJzZSBzYW1lIGFzIG9yaWdpbmFsIHRyYWNlc3RhdGUgcGFyc2UgY2hhaW5cbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgTUFYX1RSQUNFX1NUQVRFX0lURU1TKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYWNlU3RhdGVJbXBsLnByb3RvdHlwZS5fa2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faW50ZXJuYWxTdGF0ZS5rZXlzKCkpLnJldmVyc2UoKTtcbiAgICB9O1xuICAgIFRyYWNlU3RhdGVJbXBsLnByb3RvdHlwZS5fY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0cmFjZVN0YXRlID0gbmV3IFRyYWNlU3RhdGVJbXBsKCk7XG4gICAgICAgIHRyYWNlU3RhdGUuX2ludGVybmFsU3RhdGUgPSBuZXcgTWFwKHRoaXMuX2ludGVybmFsU3RhdGUpO1xuICAgICAgICByZXR1cm4gdHJhY2VTdGF0ZTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFjZVN0YXRlSW1wbDtcbn0oKSk7XG5leHBvcnQgeyBUcmFjZVN0YXRlSW1wbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhY2VzdGF0ZS1pbXBsLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgVkFMSURfS0VZX0NIQVJfUkFOR0UgPSAnW18wLTlhLXotKi9dJztcbnZhciBWQUxJRF9LRVkgPSBcIlthLXpdXCIgKyBWQUxJRF9LRVlfQ0hBUl9SQU5HRSArIFwiezAsMjU1fVwiO1xudmFyIFZBTElEX1ZFTkRPUl9LRVkgPSBcIlthLXowLTldXCIgKyBWQUxJRF9LRVlfQ0hBUl9SQU5HRSArIFwiezAsMjQwfUBbYS16XVwiICsgVkFMSURfS0VZX0NIQVJfUkFOR0UgKyBcInswLDEzfVwiO1xudmFyIFZBTElEX0tFWV9SRUdFWCA9IG5ldyBSZWdFeHAoXCJeKD86XCIgKyBWQUxJRF9LRVkgKyBcInxcIiArIFZBTElEX1ZFTkRPUl9LRVkgKyBcIikkXCIpO1xudmFyIFZBTElEX1ZBTFVFX0JBU0VfUkVHRVggPSAvXlsgLX5dezAsMjU1fVshLX5dJC87XG52YXIgSU5WQUxJRF9WQUxVRV9DT01NQV9FUVVBTF9SRUdFWCA9IC8sfD0vO1xuLyoqXG4gKiBLZXkgaXMgb3BhcXVlIHN0cmluZyB1cCB0byAyNTYgY2hhcmFjdGVycyBwcmludGFibGUuIEl0IE1VU1QgYmVnaW4gd2l0aCBhXG4gKiBsb3dlcmNhc2UgbGV0dGVyLCBhbmQgY2FuIG9ubHkgY29udGFpbiBsb3dlcmNhc2UgbGV0dGVycyBhLXosIGRpZ2l0cyAwLTksXG4gKiB1bmRlcnNjb3JlcyBfLCBkYXNoZXMgLSwgYXN0ZXJpc2tzICosIGFuZCBmb3J3YXJkIHNsYXNoZXMgLy5cbiAqIEZvciBtdWx0aS10ZW5hbnQgdmVuZG9yIHNjZW5hcmlvcywgYW4gYXQgc2lnbiAoQCkgY2FuIGJlIHVzZWQgdG8gcHJlZml4IHRoZVxuICogdmVuZG9yIG5hbWUuIFZlbmRvcnMgU0hPVUxEIHNldCB0aGUgdGVuYW50IElEIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGtleS5cbiAqIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvdHJhY2UtY29udGV4dC8ja2V5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUtleShrZXkpIHtcbiAgICByZXR1cm4gVkFMSURfS0VZX1JFR0VYLnRlc3Qoa2V5KTtcbn1cbi8qKlxuICogVmFsdWUgaXMgb3BhcXVlIHN0cmluZyB1cCB0byAyNTYgY2hhcmFjdGVycyBwcmludGFibGUgQVNDSUkgUkZDMDAyMFxuICogY2hhcmFjdGVycyAoaS5lLiwgdGhlIHJhbmdlIDB4MjAgdG8gMHg3RSkgZXhjZXB0IGNvbW1hICwgYW5kID0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIChWQUxJRF9WQUxVRV9CQVNFX1JFR0VYLnRlc3QodmFsdWUpICYmXG4gICAgICAgICFJTlZBTElEX1ZBTFVFX0NPTU1BX0VRVUFMX1JFR0VYLnRlc3QodmFsdWUpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYWNlc3RhdGUtdmFsaWRhdG9ycy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgVHJhY2VTdGF0ZUltcGwgfSBmcm9tICcuL3RyYWNlc3RhdGUtaW1wbCc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhY2VTdGF0ZShyYXdUcmFjZVN0YXRlKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFjZVN0YXRlSW1wbChyYXdUcmFjZVN0YXRlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBUcmFjZUZsYWdzIH0gZnJvbSAnLi90cmFjZV9mbGFncyc7XG5leHBvcnQgdmFyIElOVkFMSURfU1BBTklEID0gJzAwMDAwMDAwMDAwMDAwMDAnO1xuZXhwb3J0IHZhciBJTlZBTElEX1RSQUNFSUQgPSAnMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnO1xuZXhwb3J0IHZhciBJTlZBTElEX1NQQU5fQ09OVEVYVCA9IHtcbiAgICB0cmFjZUlkOiBJTlZBTElEX1RSQUNFSUQsXG4gICAgc3BhbklkOiBJTlZBTElEX1NQQU5JRCxcbiAgICB0cmFjZUZsYWdzOiBUcmFjZUZsYWdzLk5PTkUsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW52YWxpZC1zcGFuLWNvbnN0YW50cy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Bhbi5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Bhbl9jb250ZXh0LmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgdmFyIFNwYW5LaW5kO1xuKGZ1bmN0aW9uIChTcGFuS2luZCkge1xuICAgIC8qKiBEZWZhdWx0IHZhbHVlLiBJbmRpY2F0ZXMgdGhhdCB0aGUgc3BhbiBpcyB1c2VkIGludGVybmFsbHkuICovXG4gICAgU3BhbktpbmRbU3BhbktpbmRbXCJJTlRFUk5BTFwiXSA9IDBdID0gXCJJTlRFUk5BTFwiO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBzcGFuIGNvdmVycyBzZXJ2ZXItc2lkZSBoYW5kbGluZyBvZiBhbiBSUEMgb3Igb3RoZXJcbiAgICAgKiByZW1vdGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBTcGFuS2luZFtTcGFuS2luZFtcIlNFUlZFUlwiXSA9IDFdID0gXCJTRVJWRVJcIjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgc3BhbiBjb3ZlcnMgdGhlIGNsaWVudC1zaWRlIHdyYXBwZXIgYXJvdW5kIGFuIFJQQyBvclxuICAgICAqIG90aGVyIHJlbW90ZSByZXF1ZXN0LlxuICAgICAqL1xuICAgIFNwYW5LaW5kW1NwYW5LaW5kW1wiQ0xJRU5UXCJdID0gMl0gPSBcIkNMSUVOVFwiO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBzcGFuIGRlc2NyaWJlcyBwcm9kdWNlciBzZW5kaW5nIGEgbWVzc2FnZSB0byBhXG4gICAgICogYnJva2VyLiBVbmxpa2UgY2xpZW50IGFuZCBzZXJ2ZXIsIHRoZXJlIGlzIG5vIGRpcmVjdCBjcml0aWNhbCBwYXRoIGxhdGVuY3lcbiAgICAgKiByZWxhdGlvbnNoaXAgYmV0d2VlbiBwcm9kdWNlciBhbmQgY29uc3VtZXIgc3BhbnMuXG4gICAgICovXG4gICAgU3BhbktpbmRbU3BhbktpbmRbXCJQUk9EVUNFUlwiXSA9IDNdID0gXCJQUk9EVUNFUlwiO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBzcGFuIGRlc2NyaWJlcyBjb25zdW1lciByZWNlaXZpbmcgYSBtZXNzYWdlIGZyb20gYVxuICAgICAqIGJyb2tlci4gVW5saWtlIGNsaWVudCBhbmQgc2VydmVyLCB0aGVyZSBpcyBubyBkaXJlY3QgY3JpdGljYWwgcGF0aCBsYXRlbmN5XG4gICAgICogcmVsYXRpb25zaGlwIGJldHdlZW4gcHJvZHVjZXIgYW5kIGNvbnN1bWVyIHNwYW5zLlxuICAgICAqL1xuICAgIFNwYW5LaW5kW1NwYW5LaW5kW1wiQ09OU1VNRVJcIl0gPSA0XSA9IFwiQ09OU1VNRVJcIjtcbn0pKFNwYW5LaW5kIHx8IChTcGFuS2luZCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGFuX2tpbmQuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IElOVkFMSURfU1BBTklELCBJTlZBTElEX1RSQUNFSUQgfSBmcm9tICcuL2ludmFsaWQtc3Bhbi1jb25zdGFudHMnO1xuaW1wb3J0IHsgTm9uUmVjb3JkaW5nU3BhbiB9IGZyb20gJy4vTm9uUmVjb3JkaW5nU3Bhbic7XG52YXIgVkFMSURfVFJBQ0VJRF9SRUdFWCA9IC9eKFswLTlhLWZdezMyfSkkL2k7XG52YXIgVkFMSURfU1BBTklEX1JFR0VYID0gL15bMC05YS1mXXsxNn0kL2k7XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFRyYWNlSWQodHJhY2VJZCkge1xuICAgIHJldHVybiBWQUxJRF9UUkFDRUlEX1JFR0VYLnRlc3QodHJhY2VJZCkgJiYgdHJhY2VJZCAhPT0gSU5WQUxJRF9UUkFDRUlEO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRTcGFuSWQoc3BhbklkKSB7XG4gICAgcmV0dXJuIFZBTElEX1NQQU5JRF9SRUdFWC50ZXN0KHNwYW5JZCkgJiYgc3BhbklkICE9PSBJTlZBTElEX1NQQU5JRDtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMge0BsaW5rIFNwYW5Db250ZXh0fSBpcyB2YWxpZC5cbiAqIEByZXR1cm4gdHJ1ZSBpZiB0aGlzIHtAbGluayBTcGFuQ29udGV4dH0gaXMgdmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NwYW5Db250ZXh0VmFsaWQoc3BhbkNvbnRleHQpIHtcbiAgICByZXR1cm4gKGlzVmFsaWRUcmFjZUlkKHNwYW5Db250ZXh0LnRyYWNlSWQpICYmIGlzVmFsaWRTcGFuSWQoc3BhbkNvbnRleHQuc3BhbklkKSk7XG59XG4vKipcbiAqIFdyYXAgdGhlIGdpdmVuIHtAbGluayBTcGFuQ29udGV4dH0gaW4gYSBuZXcgbm9uLXJlY29yZGluZyB7QGxpbmsgU3Bhbn1cbiAqXG4gKiBAcGFyYW0gc3BhbkNvbnRleHQgc3BhbiBjb250ZXh0IHRvIGJlIHdyYXBwZWRcbiAqIEByZXR1cm5zIGEgbmV3IG5vbi1yZWNvcmRpbmcge0BsaW5rIFNwYW59IHdpdGggdGhlIHByb3ZpZGVkIGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBTcGFuQ29udGV4dChzcGFuQ29udGV4dCkge1xuICAgIHJldHVybiBuZXcgTm9uUmVjb3JkaW5nU3BhbihzcGFuQ29udGV4dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGFuY29udGV4dC11dGlscy5qcy5tYXAiLCIvKipcbiAqIEFuIGVudW1lcmF0aW9uIG9mIHN0YXR1cyBjb2Rlcy5cbiAqL1xuZXhwb3J0IHZhciBTcGFuU3RhdHVzQ29kZTtcbihmdW5jdGlvbiAoU3BhblN0YXR1c0NvZGUpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBzdGF0dXMuXG4gICAgICovXG4gICAgU3BhblN0YXR1c0NvZGVbU3BhblN0YXR1c0NvZGVbXCJVTlNFVFwiXSA9IDBdID0gXCJVTlNFVFwiO1xuICAgIC8qKlxuICAgICAqIFRoZSBvcGVyYXRpb24gaGFzIGJlZW4gdmFsaWRhdGVkIGJ5IGFuIEFwcGxpY2F0aW9uIGRldmVsb3BlciBvclxuICAgICAqIE9wZXJhdG9yIHRvIGhhdmUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS5cbiAgICAgKi9cbiAgICBTcGFuU3RhdHVzQ29kZVtTcGFuU3RhdHVzQ29kZVtcIk9LXCJdID0gMV0gPSBcIk9LXCI7XG4gICAgLyoqXG4gICAgICogVGhlIG9wZXJhdGlvbiBjb250YWlucyBhbiBlcnJvci5cbiAgICAgKi9cbiAgICBTcGFuU3RhdHVzQ29kZVtTcGFuU3RhdHVzQ29kZVtcIkVSUk9SXCJdID0gMl0gPSBcIkVSUk9SXCI7XG59KShTcGFuU3RhdHVzQ29kZSB8fCAoU3BhblN0YXR1c0NvZGUgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdHVzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgdmFyIFRyYWNlRmxhZ3M7XG4oZnVuY3Rpb24gKFRyYWNlRmxhZ3MpIHtcbiAgICAvKiogUmVwcmVzZW50cyBubyBmbGFnIHNldC4gKi9cbiAgICBUcmFjZUZsYWdzW1RyYWNlRmxhZ3NbXCJOT05FXCJdID0gMF0gPSBcIk5PTkVcIjtcbiAgICAvKiogQml0IHRvIHJlcHJlc2VudCB3aGV0aGVyIHRyYWNlIGlzIHNhbXBsZWQgaW4gdHJhY2UgZmxhZ3MuICovXG4gICAgVHJhY2VGbGFnc1tUcmFjZUZsYWdzW1wiU0FNUExFRFwiXSA9IDFdID0gXCJTQU1QTEVEXCI7XG59KShUcmFjZUZsYWdzIHx8IChUcmFjZUZsYWdzID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYWNlX2ZsYWdzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFjZV9zdGF0ZS5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhY2VyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFjZXJfb3B0aW9ucy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhY2VyX3Byb3ZpZGVyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyB0aGlzIGlzIGF1dG9nZW5lcmF0ZWQgZmlsZSwgc2VlIHNjcmlwdHMvdmVyc2lvbi11cGRhdGUuanNcbmV4cG9ydCB2YXIgVkVSU0lPTiA9ICcxLjEuMCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZXJzaW9uLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgKiBmcm9tICcuL3RyYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2UnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIERPIE5PVCBFRElULCB0aGlzIGlzIGFuIEF1dG8tZ2VuZXJhdGVkIGZpbGUgZnJvbSBzY3JpcHRzL3NlbWNvbnYvdGVtcGxhdGVzLy90ZW1wbGF0ZXMvU2VtYW50aWNBdHRyaWJ1dGVzLnRzLmoyXG5leHBvcnQgdmFyIFNlbWFudGljUmVzb3VyY2VBdHRyaWJ1dGVzID0ge1xuICAgIC8qKlxuICAgICogTmFtZSBvZiB0aGUgY2xvdWQgcHJvdmlkZXIuXG4gICAgKi9cbiAgICBDTE9VRF9QUk9WSURFUjogJ2Nsb3VkLnByb3ZpZGVyJyxcbiAgICAvKipcbiAgICAqIFRoZSBjbG91ZCBhY2NvdW50IElEIHRoZSByZXNvdXJjZSBpcyBhc3NpZ25lZCB0by5cbiAgICAqL1xuICAgIENMT1VEX0FDQ09VTlRfSUQ6ICdjbG91ZC5hY2NvdW50LmlkJyxcbiAgICAvKipcbiAgICAqIFRoZSBnZW9ncmFwaGljYWwgcmVnaW9uIHRoZSByZXNvdXJjZSBpcyBydW5uaW5nLiBSZWZlciB0byB5b3VyIHByb3ZpZGVyJiMzOTtzIGRvY3MgdG8gc2VlIHRoZSBhdmFpbGFibGUgcmVnaW9ucywgZm9yIGV4YW1wbGUgW0FsaWJhYmEgQ2xvdWQgcmVnaW9uc10oaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL2RvYy1kZXRhaWwvNDA2NTQuaHRtKSwgW0FXUyByZWdpb25zXShodHRwczovL2F3cy5hbWF6b24uY29tL2Fib3V0LWF3cy9nbG9iYWwtaW5mcmFzdHJ1Y3R1cmUvcmVnaW9uc19hei8pLCBbQXp1cmUgcmVnaW9uc10oaHR0cHM6Ly9henVyZS5taWNyb3NvZnQuY29tL2VuLXVzL2dsb2JhbC1pbmZyYXN0cnVjdHVyZS9nZW9ncmFwaGllcy8pLCBvciBbR29vZ2xlIENsb3VkIHJlZ2lvbnNdKGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9hYm91dC9sb2NhdGlvbnMpLlxuICAgICovXG4gICAgQ0xPVURfUkVHSU9OOiAnY2xvdWQucmVnaW9uJyxcbiAgICAvKipcbiAgICAqIENsb3VkIHJlZ2lvbnMgb2Z0ZW4gaGF2ZSBtdWx0aXBsZSwgaXNvbGF0ZWQgbG9jYXRpb25zIGtub3duIGFzIHpvbmVzIHRvIGluY3JlYXNlIGF2YWlsYWJpbGl0eS4gQXZhaWxhYmlsaXR5IHpvbmUgcmVwcmVzZW50cyB0aGUgem9uZSB3aGVyZSB0aGUgcmVzb3VyY2UgaXMgcnVubmluZy5cbiAgICAqXG4gICAgKiBOb3RlOiBBdmFpbGFiaWxpdHkgem9uZXMgYXJlIGNhbGxlZCAmIzM0O3pvbmVzJiMzNDsgb24gQWxpYmFiYSBDbG91ZCBhbmQgR29vZ2xlIENsb3VkLlxuICAgICovXG4gICAgQ0xPVURfQVZBSUxBQklMSVRZX1pPTkU6ICdjbG91ZC5hdmFpbGFiaWxpdHlfem9uZScsXG4gICAgLyoqXG4gICAgKiBUaGUgY2xvdWQgcGxhdGZvcm0gaW4gdXNlLlxuICAgICpcbiAgICAqIE5vdGU6IFRoZSBwcmVmaXggb2YgdGhlIHNlcnZpY2UgU0hPVUxEIG1hdGNoIHRoZSBvbmUgc3BlY2lmaWVkIGluIGBjbG91ZC5wcm92aWRlcmAuXG4gICAgKi9cbiAgICBDTE9VRF9QTEFURk9STTogJ2Nsb3VkLnBsYXRmb3JtJyxcbiAgICAvKipcbiAgICAqIFRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiBhbiBbRUNTIGNvbnRhaW5lciBpbnN0YW5jZV0oaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FtYXpvbkVDUy9sYXRlc3QvZGV2ZWxvcGVyZ3VpZGUvRUNTX2luc3RhbmNlcy5odG1sKS5cbiAgICAqL1xuICAgIEFXU19FQ1NfQ09OVEFJTkVSX0FSTjogJ2F3cy5lY3MuY29udGFpbmVyLmFybicsXG4gICAgLyoqXG4gICAgKiBUaGUgQVJOIG9mIGFuIFtFQ1MgY2x1c3Rlcl0oaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FtYXpvbkVDUy9sYXRlc3QvZGV2ZWxvcGVyZ3VpZGUvY2x1c3RlcnMuaHRtbCkuXG4gICAgKi9cbiAgICBBV1NfRUNTX0NMVVNURVJfQVJOOiAnYXdzLmVjcy5jbHVzdGVyLmFybicsXG4gICAgLyoqXG4gICAgKiBUaGUgW2xhdW5jaCB0eXBlXShodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vQW1hem9uRUNTL2xhdGVzdC9kZXZlbG9wZXJndWlkZS9sYXVuY2hfdHlwZXMuaHRtbCkgZm9yIGFuIEVDUyB0YXNrLlxuICAgICovXG4gICAgQVdTX0VDU19MQVVOQ0hUWVBFOiAnYXdzLmVjcy5sYXVuY2h0eXBlJyxcbiAgICAvKipcbiAgICAqIFRoZSBBUk4gb2YgYW4gW0VDUyB0YXNrIGRlZmluaXRpb25dKGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BbWF6b25FQ1MvbGF0ZXN0L2RldmVsb3Blcmd1aWRlL3Rhc2tfZGVmaW5pdGlvbnMuaHRtbCkuXG4gICAgKi9cbiAgICBBV1NfRUNTX1RBU0tfQVJOOiAnYXdzLmVjcy50YXNrLmFybicsXG4gICAgLyoqXG4gICAgKiBUaGUgdGFzayBkZWZpbml0aW9uIGZhbWlseSB0aGlzIHRhc2sgZGVmaW5pdGlvbiBpcyBhIG1lbWJlciBvZi5cbiAgICAqL1xuICAgIEFXU19FQ1NfVEFTS19GQU1JTFk6ICdhd3MuZWNzLnRhc2suZmFtaWx5JyxcbiAgICAvKipcbiAgICAqIFRoZSByZXZpc2lvbiBmb3IgdGhpcyB0YXNrIGRlZmluaXRpb24uXG4gICAgKi9cbiAgICBBV1NfRUNTX1RBU0tfUkVWSVNJT046ICdhd3MuZWNzLnRhc2sucmV2aXNpb24nLFxuICAgIC8qKlxuICAgICogVGhlIEFSTiBvZiBhbiBFS1MgY2x1c3Rlci5cbiAgICAqL1xuICAgIEFXU19FS1NfQ0xVU1RFUl9BUk46ICdhd3MuZWtzLmNsdXN0ZXIuYXJuJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lKHMpIG9mIHRoZSBBV1MgbG9nIGdyb3VwKHMpIGFuIGFwcGxpY2F0aW9uIGlzIHdyaXRpbmcgdG8uXG4gICAgKlxuICAgICogTm90ZTogTXVsdGlwbGUgbG9nIGdyb3VwcyBtdXN0IGJlIHN1cHBvcnRlZCBmb3IgY2FzZXMgbGlrZSBtdWx0aS1jb250YWluZXIgYXBwbGljYXRpb25zLCB3aGVyZSBhIHNpbmdsZSBhcHBsaWNhdGlvbiBoYXMgc2lkZWNhciBjb250YWluZXJzLCBhbmQgZWFjaCB3cml0ZSB0byB0aGVpciBvd24gbG9nIGdyb3VwLlxuICAgICovXG4gICAgQVdTX0xPR19HUk9VUF9OQU1FUzogJ2F3cy5sb2cuZ3JvdXAubmFtZXMnLFxuICAgIC8qKlxuICAgICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lKHMpIChBUk4pIG9mIHRoZSBBV1MgbG9nIGdyb3VwKHMpLlxuICAgICpcbiAgICAqIE5vdGU6IFNlZSB0aGUgW2xvZyBncm91cCBBUk4gZm9ybWF0IGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BbWF6b25DbG91ZFdhdGNoL2xhdGVzdC9sb2dzL2lhbS1hY2Nlc3MtY29udHJvbC1vdmVydmlldy1jd2wuaHRtbCNDV0xfQVJOX0Zvcm1hdCkuXG4gICAgKi9cbiAgICBBV1NfTE9HX0dST1VQX0FSTlM6ICdhd3MubG9nLmdyb3VwLmFybnMnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUocykgb2YgdGhlIEFXUyBsb2cgc3RyZWFtKHMpIGFuIGFwcGxpY2F0aW9uIGlzIHdyaXRpbmcgdG8uXG4gICAgKi9cbiAgICBBV1NfTE9HX1NUUkVBTV9OQU1FUzogJ2F3cy5sb2cuc3RyZWFtLm5hbWVzJyxcbiAgICAvKipcbiAgICAqIFRoZSBBUk4ocykgb2YgdGhlIEFXUyBsb2cgc3RyZWFtKHMpLlxuICAgICpcbiAgICAqIE5vdGU6IFNlZSB0aGUgW2xvZyBzdHJlYW0gQVJOIGZvcm1hdCBkb2N1bWVudGF0aW9uXShodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vQW1hem9uQ2xvdWRXYXRjaC9sYXRlc3QvbG9ncy9pYW0tYWNjZXNzLWNvbnRyb2wtb3ZlcnZpZXctY3dsLmh0bWwjQ1dMX0FSTl9Gb3JtYXQpLiBPbmUgbG9nIGdyb3VwIGNhbiBjb250YWluIHNldmVyYWwgbG9nIHN0cmVhbXMsIHNvIHRoZXNlIEFSTnMgbmVjZXNzYXJpbHkgaWRlbnRpZnkgYm90aCBhIGxvZyBncm91cCBhbmQgYSBsb2cgc3RyZWFtLlxuICAgICovXG4gICAgQVdTX0xPR19TVFJFQU1fQVJOUzogJ2F3cy5sb2cuc3RyZWFtLmFybnMnLFxuICAgIC8qKlxuICAgICogQ29udGFpbmVyIG5hbWUuXG4gICAgKi9cbiAgICBDT05UQUlORVJfTkFNRTogJ2NvbnRhaW5lci5uYW1lJyxcbiAgICAvKipcbiAgICAqIENvbnRhaW5lciBJRC4gVXN1YWxseSBhIFVVSUQsIGFzIGZvciBleGFtcGxlIHVzZWQgdG8gW2lkZW50aWZ5IERvY2tlciBjb250YWluZXJzXShodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL3J1bi8jY29udGFpbmVyLWlkZW50aWZpY2F0aW9uKS4gVGhlIFVVSUQgbWlnaHQgYmUgYWJicmV2aWF0ZWQuXG4gICAgKi9cbiAgICBDT05UQUlORVJfSUQ6ICdjb250YWluZXIuaWQnLFxuICAgIC8qKlxuICAgICogVGhlIGNvbnRhaW5lciBydW50aW1lIG1hbmFnaW5nIHRoaXMgY29udGFpbmVyLlxuICAgICovXG4gICAgQ09OVEFJTkVSX1JVTlRJTUU6ICdjb250YWluZXIucnVudGltZScsXG4gICAgLyoqXG4gICAgKiBOYW1lIG9mIHRoZSBpbWFnZSB0aGUgY29udGFpbmVyIHdhcyBidWlsdCBvbi5cbiAgICAqL1xuICAgIENPTlRBSU5FUl9JTUFHRV9OQU1FOiAnY29udGFpbmVyLmltYWdlLm5hbWUnLFxuICAgIC8qKlxuICAgICogQ29udGFpbmVyIGltYWdlIHRhZy5cbiAgICAqL1xuICAgIENPTlRBSU5FUl9JTUFHRV9UQUc6ICdjb250YWluZXIuaW1hZ2UudGFnJyxcbiAgICAvKipcbiAgICAqIE5hbWUgb2YgdGhlIFtkZXBsb3ltZW50IGVudmlyb25tZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZXBsb3ltZW50X2Vudmlyb25tZW50KSAoYWthIGRlcGxveW1lbnQgdGllcikuXG4gICAgKi9cbiAgICBERVBMT1lNRU5UX0VOVklST05NRU5UOiAnZGVwbG95bWVudC5lbnZpcm9ubWVudCcsXG4gICAgLyoqXG4gICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIHJlcHJlc2VudGluZyB0aGUgZGV2aWNlLlxuICAgICpcbiAgICAqIE5vdGU6IFRoZSBkZXZpY2UgaWRlbnRpZmllciBNVVNUIG9ubHkgYmUgZGVmaW5lZCB1c2luZyB0aGUgdmFsdWVzIG91dGxpbmVkIGJlbG93LiBUaGlzIHZhbHVlIGlzIG5vdCBhbiBhZHZlcnRpc2luZyBpZGVudGlmaWVyIGFuZCBNVVNUIE5PVCBiZSB1c2VkIGFzIHN1Y2guIE9uIGlPUyAoU3dpZnQgb3IgT2JqZWN0aXZlLUMpLCB0aGlzIHZhbHVlIE1VU1QgYmUgZXF1YWwgdG8gdGhlIFt2ZW5kb3IgaWRlbnRpZmllcl0oaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vdWlraXQvdWlkZXZpY2UvMTYyMDA1OS1pZGVudGlmaWVyZm9ydmVuZG9yKS4gT24gQW5kcm9pZCAoSmF2YSBvciBLb3RsaW4pLCB0aGlzIHZhbHVlIE1VU1QgYmUgZXF1YWwgdG8gdGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbiBJRCBvciBhIGdsb2JhbGx5IHVuaXF1ZSBVVUlEIHdoaWNoIGlzIHBlcnNpc3RlZCBhY3Jvc3Mgc2Vzc2lvbnMgaW4geW91ciBhcHBsaWNhdGlvbi4gTW9yZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3RyYWluaW5nL2FydGljbGVzL3VzZXItZGF0YS1pZHMpIG9uIGJlc3QgcHJhY3RpY2VzIGFuZCBleGFjdCBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLiBDYXV0aW9uIHNob3VsZCBiZSB0YWtlbiB3aGVuIHN0b3JpbmcgcGVyc29uYWwgZGF0YSBvciBhbnl0aGluZyB3aGljaCBjYW4gaWRlbnRpZnkgYSB1c2VyLiBHRFBSIGFuZCBkYXRhIHByb3RlY3Rpb24gbGF3cyBtYXkgYXBwbHksIGVuc3VyZSB5b3UgZG8geW91ciBvd24gZHVlIGRpbGlnZW5jZS5cbiAgICAqL1xuICAgIERFVklDRV9JRDogJ2RldmljZS5pZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbW9kZWwgaWRlbnRpZmllciBmb3IgdGhlIGRldmljZS5cbiAgICAqXG4gICAgKiBOb3RlOiBJdCYjMzk7cyByZWNvbW1lbmRlZCB0aGlzIHZhbHVlIHJlcHJlc2VudHMgYSBtYWNoaW5lIHJlYWRhYmxlIHZlcnNpb24gb2YgdGhlIG1vZGVsIGlkZW50aWZpZXIgcmF0aGVyIHRoYW4gdGhlIG1hcmtldCBvciBjb25zdW1lci1mcmllbmRseSBuYW1lIG9mIHRoZSBkZXZpY2UuXG4gICAgKi9cbiAgICBERVZJQ0VfTU9ERUxfSURFTlRJRklFUjogJ2RldmljZS5tb2RlbC5pZGVudGlmaWVyJyxcbiAgICAvKipcbiAgICAqIFRoZSBtYXJrZXRpbmcgbmFtZSBmb3IgdGhlIGRldmljZSBtb2RlbC5cbiAgICAqXG4gICAgKiBOb3RlOiBJdCYjMzk7cyByZWNvbW1lbmRlZCB0aGlzIHZhbHVlIHJlcHJlc2VudHMgYSBodW1hbiByZWFkYWJsZSB2ZXJzaW9uIG9mIHRoZSBkZXZpY2UgbW9kZWwgcmF0aGVyIHRoYW4gYSBtYWNoaW5lIHJlYWRhYmxlIGFsdGVybmF0aXZlLlxuICAgICovXG4gICAgREVWSUNFX01PREVMX05BTUU6ICdkZXZpY2UubW9kZWwubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgc2luZ2xlIGZ1bmN0aW9uIHRoYXQgdGhpcyBydW50aW1lIGluc3RhbmNlIGV4ZWN1dGVzLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIGFzIGNvbmZpZ3VyZWQvZGVwbG95ZWQgb24gdGhlIEZhYVMgcGxhdGZvcm0gYW5kIGlzIHVzdWFsbHkgZGlmZmVyZW50IGZyb20gdGhlIG5hbWUgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uICh3aGljaCBtYXkgYmUgc3RvcmVkIGluIHRoZSBbYGNvZGUubmFtZXNwYWNlYC9gY29kZS5mdW5jdGlvbmBdKC4uLy4uL3RyYWNlL3NlbWFudGljX2NvbnZlbnRpb25zL3NwYW4tZ2VuZXJhbC5tZCNzb3VyY2UtY29kZS1hdHRyaWJ1dGVzKSBzcGFuIGF0dHJpYnV0ZXMpLlxuICAgICovXG4gICAgRkFBU19OQU1FOiAnZmFhcy5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSB1bmlxdWUgSUQgb2YgdGhlIHNpbmdsZSBmdW5jdGlvbiB0aGF0IHRoaXMgcnVudGltZSBpbnN0YW5jZSBleGVjdXRlcy5cbiAgICAqXG4gICAgKiBOb3RlOiBEZXBlbmRpbmcgb24gdGhlIGNsb3VkIHByb3ZpZGVyLCB1c2U6XG4gIFxuICAqICoqQVdTIExhbWJkYToqKiBUaGUgZnVuY3Rpb24gW0FSTl0oaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2dlbmVyYWwvbGF0ZXN0L2dyL2F3cy1hcm5zLWFuZC1uYW1lc3BhY2VzLmh0bWwpLlxuICBUYWtlIGNhcmUgbm90IHRvIHVzZSB0aGUgJiMzNDtpbnZva2VkIEFSTiYjMzQ7IGRpcmVjdGx5IGJ1dCByZXBsYWNlIGFueVxuICBbYWxpYXMgc3VmZml4XShodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vbGFtYmRhL2xhdGVzdC9kZy9jb25maWd1cmF0aW9uLWFsaWFzZXMuaHRtbCkgd2l0aCB0aGUgcmVzb2x2ZWQgZnVuY3Rpb24gdmVyc2lvbiwgYXMgdGhlIHNhbWUgcnVudGltZSBpbnN0YW5jZSBtYXkgYmUgaW52b2thYmxlIHdpdGggbXVsdGlwbGVcbiAgZGlmZmVyZW50IGFsaWFzZXMuXG4gICogKipHQ1A6KiogVGhlIFtVUkkgb2YgdGhlIHJlc291cmNlXShodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vaWFtL2RvY3MvZnVsbC1yZXNvdXJjZS1uYW1lcylcbiAgKiAqKkF6dXJlOioqIFRoZSBbRnVsbHkgUXVhbGlmaWVkIFJlc291cmNlIElEXShodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9yZXN0L2FwaS9yZXNvdXJjZXMvcmVzb3VyY2VzL2dldC1ieS1pZCkuXG4gIFxuICBPbiBzb21lIHByb3ZpZGVycywgaXQgbWF5IG5vdCBiZSBwb3NzaWJsZSB0byBkZXRlcm1pbmUgdGhlIGZ1bGwgSUQgYXQgc3RhcnR1cCxcbiAgd2hpY2ggaXMgd2h5IHRoaXMgZmllbGQgY2Fubm90IGJlIG1hZGUgcmVxdWlyZWQuIEZvciBleGFtcGxlLCBvbiBBV1MgdGhlIGFjY291bnQgSURcbiAgcGFydCBvZiB0aGUgQVJOIGlzIG5vdCBhdmFpbGFibGUgd2l0aG91dCBjYWxsaW5nIGFub3RoZXIgQVdTIEFQSVxuICB3aGljaCBtYXkgYmUgZGVlbWVkIHRvbyBzbG93IGZvciBhIHNob3J0LXJ1bm5pbmcgbGFtYmRhIGZ1bmN0aW9uLlxuICBBcyBhbiBhbHRlcm5hdGl2ZSwgY29uc2lkZXIgc2V0dGluZyBgZmFhcy5pZGAgYXMgYSBzcGFuIGF0dHJpYnV0ZSBpbnN0ZWFkLlxuICAgICovXG4gICAgRkFBU19JRDogJ2ZhYXMuaWQnLFxuICAgIC8qKlxuICAgICogVGhlIGltbXV0YWJsZSB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvbiBiZWluZyBleGVjdXRlZC5cbiAgICAqXG4gICAgKiBOb3RlOiBEZXBlbmRpbmcgb24gdGhlIGNsb3VkIHByb3ZpZGVyIGFuZCBwbGF0Zm9ybSwgdXNlOlxuICBcbiAgKiAqKkFXUyBMYW1iZGE6KiogVGhlIFtmdW5jdGlvbiB2ZXJzaW9uXShodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vbGFtYmRhL2xhdGVzdC9kZy9jb25maWd1cmF0aW9uLXZlcnNpb25zLmh0bWwpXG4gICAgKGFuIGludGVnZXIgcmVwcmVzZW50ZWQgYXMgYSBkZWNpbWFsIHN0cmluZykuXG4gICogKipHb29nbGUgQ2xvdWQgUnVuOioqIFRoZSBbcmV2aXNpb25dKGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9ydW4vZG9jcy9tYW5hZ2luZy9yZXZpc2lvbnMpXG4gICAgKGkuZS4sIHRoZSBmdW5jdGlvbiBuYW1lIHBsdXMgdGhlIHJldmlzaW9uIHN1ZmZpeCkuXG4gICogKipHb29nbGUgQ2xvdWQgRnVuY3Rpb25zOioqIFRoZSB2YWx1ZSBvZiB0aGVcbiAgICBbYEtfUkVWSVNJT05gIGVudmlyb25tZW50IHZhcmlhYmxlXShodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vZnVuY3Rpb25zL2RvY3MvZW52LXZhciNydW50aW1lX2Vudmlyb25tZW50X3ZhcmlhYmxlc19zZXRfYXV0b21hdGljYWxseSkuXG4gICogKipBenVyZSBGdW5jdGlvbnM6KiogTm90IGFwcGxpY2FibGUuIERvIG5vdCBzZXQgdGhpcyBhdHRyaWJ1dGUuXG4gICAgKi9cbiAgICBGQUFTX1ZFUlNJT046ICdmYWFzLnZlcnNpb24nLFxuICAgIC8qKlxuICAgICogVGhlIGV4ZWN1dGlvbiBlbnZpcm9ubWVudCBJRCBhcyBhIHN0cmluZywgdGhhdCB3aWxsIGJlIHBvdGVudGlhbGx5IHJldXNlZCBmb3Igb3RoZXIgaW52b2NhdGlvbnMgdG8gdGhlIHNhbWUgZnVuY3Rpb24vZnVuY3Rpb24gdmVyc2lvbi5cbiAgICAqXG4gICAgKiBOb3RlOiAqICoqQVdTIExhbWJkYToqKiBVc2UgdGhlIChmdWxsKSBsb2cgc3RyZWFtIG5hbWUuXG4gICAgKi9cbiAgICBGQUFTX0lOU1RBTkNFOiAnZmFhcy5pbnN0YW5jZScsXG4gICAgLyoqXG4gICAgKiBUaGUgYW1vdW50IG9mIG1lbW9yeSBhdmFpbGFibGUgdG8gdGhlIHNlcnZlcmxlc3MgZnVuY3Rpb24gaW4gTWlCLlxuICAgICpcbiAgICAqIE5vdGU6IEl0JiMzOTtzIHJlY29tbWVuZGVkIHRvIHNldCB0aGlzIGF0dHJpYnV0ZSBzaW5jZSBlLmcuIHRvbyBsaXR0bGUgbWVtb3J5IGNhbiBlYXNpbHkgc3RvcCBhIEphdmEgQVdTIExhbWJkYSBmdW5jdGlvbiBmcm9tIHdvcmtpbmcgY29ycmVjdGx5LiBPbiBBV1MgTGFtYmRhLCB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGUgYEFXU19MQU1CREFfRlVOQ1RJT05fTUVNT1JZX1NJWkVgIHByb3ZpZGVzIHRoaXMgaW5mb3JtYXRpb24uXG4gICAgKi9cbiAgICBGQUFTX01BWF9NRU1PUlk6ICdmYWFzLm1heF9tZW1vcnknLFxuICAgIC8qKlxuICAgICogVW5pcXVlIGhvc3QgSUQuIEZvciBDbG91ZCwgdGhpcyBtdXN0IGJlIHRoZSBpbnN0YW5jZV9pZCBhc3NpZ25lZCBieSB0aGUgY2xvdWQgcHJvdmlkZXIuXG4gICAgKi9cbiAgICBIT1NUX0lEOiAnaG9zdC5pZCcsXG4gICAgLyoqXG4gICAgKiBOYW1lIG9mIHRoZSBob3N0LiBPbiBVbml4IHN5c3RlbXMsIGl0IG1heSBjb250YWluIHdoYXQgdGhlIGhvc3RuYW1lIGNvbW1hbmQgcmV0dXJucywgb3IgdGhlIGZ1bGx5IHF1YWxpZmllZCBob3N0bmFtZSwgb3IgYW5vdGhlciBuYW1lIHNwZWNpZmllZCBieSB0aGUgdXNlci5cbiAgICAqL1xuICAgIEhPU1RfTkFNRTogJ2hvc3QubmFtZScsXG4gICAgLyoqXG4gICAgKiBUeXBlIG9mIGhvc3QuIEZvciBDbG91ZCwgdGhpcyBtdXN0IGJlIHRoZSBtYWNoaW5lIHR5cGUuXG4gICAgKi9cbiAgICBIT1NUX1RZUEU6ICdob3N0LnR5cGUnLFxuICAgIC8qKlxuICAgICogVGhlIENQVSBhcmNoaXRlY3R1cmUgdGhlIGhvc3Qgc3lzdGVtIGlzIHJ1bm5pbmcgb24uXG4gICAgKi9cbiAgICBIT1NUX0FSQ0g6ICdob3N0LmFyY2gnLFxuICAgIC8qKlxuICAgICogTmFtZSBvZiB0aGUgVk0gaW1hZ2Ugb3IgT1MgaW5zdGFsbCB0aGUgaG9zdCB3YXMgaW5zdGFudGlhdGVkIGZyb20uXG4gICAgKi9cbiAgICBIT1NUX0lNQUdFX05BTUU6ICdob3N0LmltYWdlLm5hbWUnLFxuICAgIC8qKlxuICAgICogVk0gaW1hZ2UgSUQuIEZvciBDbG91ZCwgdGhpcyB2YWx1ZSBpcyBmcm9tIHRoZSBwcm92aWRlci5cbiAgICAqL1xuICAgIEhPU1RfSU1BR0VfSUQ6ICdob3N0LmltYWdlLmlkJyxcbiAgICAvKipcbiAgICAqIFRoZSB2ZXJzaW9uIHN0cmluZyBvZiB0aGUgVk0gaW1hZ2UgYXMgZGVmaW5lZCBpbiBbVmVyc2lvbiBBdHRyaWJ1dGVzXShSRUFETUUubWQjdmVyc2lvbi1hdHRyaWJ1dGVzKS5cbiAgICAqL1xuICAgIEhPU1RfSU1BR0VfVkVSU0lPTjogJ2hvc3QuaW1hZ2UudmVyc2lvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgY2x1c3Rlci5cbiAgICAqL1xuICAgIEs4U19DTFVTVEVSX05BTUU6ICdrOHMuY2x1c3Rlci5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSBOb2RlLlxuICAgICovXG4gICAgSzhTX05PREVfTkFNRTogJ2s4cy5ub2RlLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIFVJRCBvZiB0aGUgTm9kZS5cbiAgICAqL1xuICAgIEs4U19OT0RFX1VJRDogJ2s4cy5ub2RlLnVpZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgbmFtZXNwYWNlIHRoYXQgdGhlIHBvZCBpcyBydW5uaW5nIGluLlxuICAgICovXG4gICAgSzhTX05BTUVTUEFDRV9OQU1FOiAnazhzLm5hbWVzcGFjZS5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBVSUQgb2YgdGhlIFBvZC5cbiAgICAqL1xuICAgIEs4U19QT0RfVUlEOiAnazhzLnBvZC51aWQnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIFBvZC5cbiAgICAqL1xuICAgIEs4U19QT0RfTkFNRTogJ2s4cy5wb2QubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgQ29udGFpbmVyIGluIGEgUG9kIHRlbXBsYXRlLlxuICAgICovXG4gICAgSzhTX0NPTlRBSU5FUl9OQU1FOiAnazhzLmNvbnRhaW5lci5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBVSUQgb2YgdGhlIFJlcGxpY2FTZXQuXG4gICAgKi9cbiAgICBLOFNfUkVQTElDQVNFVF9VSUQ6ICdrOHMucmVwbGljYXNldC51aWQnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIFJlcGxpY2FTZXQuXG4gICAgKi9cbiAgICBLOFNfUkVQTElDQVNFVF9OQU1FOiAnazhzLnJlcGxpY2FzZXQubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgVUlEIG9mIHRoZSBEZXBsb3ltZW50LlxuICAgICovXG4gICAgSzhTX0RFUExPWU1FTlRfVUlEOiAnazhzLmRlcGxveW1lbnQudWlkJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSBEZXBsb3ltZW50LlxuICAgICovXG4gICAgSzhTX0RFUExPWU1FTlRfTkFNRTogJ2s4cy5kZXBsb3ltZW50Lm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIFVJRCBvZiB0aGUgU3RhdGVmdWxTZXQuXG4gICAgKi9cbiAgICBLOFNfU1RBVEVGVUxTRVRfVUlEOiAnazhzLnN0YXRlZnVsc2V0LnVpZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgU3RhdGVmdWxTZXQuXG4gICAgKi9cbiAgICBLOFNfU1RBVEVGVUxTRVRfTkFNRTogJ2s4cy5zdGF0ZWZ1bHNldC5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBVSUQgb2YgdGhlIERhZW1vblNldC5cbiAgICAqL1xuICAgIEs4U19EQUVNT05TRVRfVUlEOiAnazhzLmRhZW1vbnNldC51aWQnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIERhZW1vblNldC5cbiAgICAqL1xuICAgIEs4U19EQUVNT05TRVRfTkFNRTogJ2s4cy5kYWVtb25zZXQubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgVUlEIG9mIHRoZSBKb2IuXG4gICAgKi9cbiAgICBLOFNfSk9CX1VJRDogJ2s4cy5qb2IudWlkJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSBKb2IuXG4gICAgKi9cbiAgICBLOFNfSk9CX05BTUU6ICdrOHMuam9iLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIFVJRCBvZiB0aGUgQ3JvbkpvYi5cbiAgICAqL1xuICAgIEs4U19DUk9OSk9CX1VJRDogJ2s4cy5jcm9uam9iLnVpZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgQ3JvbkpvYi5cbiAgICAqL1xuICAgIEs4U19DUk9OSk9CX05BTUU6ICdrOHMuY3JvbmpvYi5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBvcGVyYXRpbmcgc3lzdGVtIHR5cGUuXG4gICAgKi9cbiAgICBPU19UWVBFOiAnb3MudHlwZScsXG4gICAgLyoqXG4gICAgKiBIdW1hbiByZWFkYWJsZSAobm90IGludGVuZGVkIHRvIGJlIHBhcnNlZCkgT1MgdmVyc2lvbiBpbmZvcm1hdGlvbiwgbGlrZSBlLmcuIHJlcG9ydGVkIGJ5IGB2ZXJgIG9yIGBsc2JfcmVsZWFzZSAtYWAgY29tbWFuZHMuXG4gICAgKi9cbiAgICBPU19ERVNDUklQVElPTjogJ29zLmRlc2NyaXB0aW9uJyxcbiAgICAvKipcbiAgICAqIEh1bWFuIHJlYWRhYmxlIG9wZXJhdGluZyBzeXN0ZW0gbmFtZS5cbiAgICAqL1xuICAgIE9TX05BTUU6ICdvcy5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSB2ZXJzaW9uIHN0cmluZyBvZiB0aGUgb3BlcmF0aW5nIHN5c3RlbSBhcyBkZWZpbmVkIGluIFtWZXJzaW9uIEF0dHJpYnV0ZXNdKC4uLy4uL3Jlc291cmNlL3NlbWFudGljX2NvbnZlbnRpb25zL1JFQURNRS5tZCN2ZXJzaW9uLWF0dHJpYnV0ZXMpLlxuICAgICovXG4gICAgT1NfVkVSU0lPTjogJ29zLnZlcnNpb24nLFxuICAgIC8qKlxuICAgICogUHJvY2VzcyBpZGVudGlmaWVyIChQSUQpLlxuICAgICovXG4gICAgUFJPQ0VTU19QSUQ6ICdwcm9jZXNzLnBpZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJvY2VzcyBleGVjdXRhYmxlLiBPbiBMaW51eCBiYXNlZCBzeXN0ZW1zLCBjYW4gYmUgc2V0IHRvIHRoZSBgTmFtZWAgaW4gYHByb2MvW3BpZF0vc3RhdHVzYC4gT24gV2luZG93cywgY2FuIGJlIHNldCB0byB0aGUgYmFzZSBuYW1lIG9mIGBHZXRQcm9jZXNzSW1hZ2VGaWxlTmFtZVdgLlxuICAgICovXG4gICAgUFJPQ0VTU19FWEVDVVRBQkxFX05BTUU6ICdwcm9jZXNzLmV4ZWN1dGFibGUubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgZnVsbCBwYXRoIHRvIHRoZSBwcm9jZXNzIGV4ZWN1dGFibGUuIE9uIExpbnV4IGJhc2VkIHN5c3RlbXMsIGNhbiBiZSBzZXQgdG8gdGhlIHRhcmdldCBvZiBgcHJvYy9bcGlkXS9leGVgLiBPbiBXaW5kb3dzLCBjYW4gYmUgc2V0IHRvIHRoZSByZXN1bHQgb2YgYEdldFByb2Nlc3NJbWFnZUZpbGVOYW1lV2AuXG4gICAgKi9cbiAgICBQUk9DRVNTX0VYRUNVVEFCTEVfUEFUSDogJ3Byb2Nlc3MuZXhlY3V0YWJsZS5wYXRoJyxcbiAgICAvKipcbiAgICAqIFRoZSBjb21tYW5kIHVzZWQgdG8gbGF1bmNoIHRoZSBwcm9jZXNzIChpLmUuIHRoZSBjb21tYW5kIG5hbWUpLiBPbiBMaW51eCBiYXNlZCBzeXN0ZW1zLCBjYW4gYmUgc2V0IHRvIHRoZSB6ZXJvdGggc3RyaW5nIGluIGBwcm9jL1twaWRdL2NtZGxpbmVgLiBPbiBXaW5kb3dzLCBjYW4gYmUgc2V0IHRvIHRoZSBmaXJzdCBwYXJhbWV0ZXIgZXh0cmFjdGVkIGZyb20gYEdldENvbW1hbmRMaW5lV2AuXG4gICAgKi9cbiAgICBQUk9DRVNTX0NPTU1BTkQ6ICdwcm9jZXNzLmNvbW1hbmQnLFxuICAgIC8qKlxuICAgICogVGhlIGZ1bGwgY29tbWFuZCB1c2VkIHRvIGxhdW5jaCB0aGUgcHJvY2VzcyBhcyBhIHNpbmdsZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBmdWxsIGNvbW1hbmQuIE9uIFdpbmRvd3MsIGNhbiBiZSBzZXQgdG8gdGhlIHJlc3VsdCBvZiBgR2V0Q29tbWFuZExpbmVXYC4gRG8gbm90IHNldCB0aGlzIGlmIHlvdSBoYXZlIHRvIGFzc2VtYmxlIGl0IGp1c3QgZm9yIG1vbml0b3Jpbmc7IHVzZSBgcHJvY2Vzcy5jb21tYW5kX2FyZ3NgIGluc3RlYWQuXG4gICAgKi9cbiAgICBQUk9DRVNTX0NPTU1BTkRfTElORTogJ3Byb2Nlc3MuY29tbWFuZF9saW5lJyxcbiAgICAvKipcbiAgICAqIEFsbCB0aGUgY29tbWFuZCBhcmd1bWVudHMgKGluY2x1ZGluZyB0aGUgY29tbWFuZC9leGVjdXRhYmxlIGl0c2VsZikgYXMgcmVjZWl2ZWQgYnkgdGhlIHByb2Nlc3MuIE9uIExpbnV4LWJhc2VkIHN5c3RlbXMgKGFuZCBzb21lIG90aGVyIFVuaXhvaWQgc3lzdGVtcyBzdXBwb3J0aW5nIHByb2NmcyksIGNhbiBiZSBzZXQgYWNjb3JkaW5nIHRvIHRoZSBsaXN0IG9mIG51bGwtZGVsaW1pdGVkIHN0cmluZ3MgZXh0cmFjdGVkIGZyb20gYHByb2MvW3BpZF0vY21kbGluZWAuIEZvciBsaWJjLWJhc2VkIGV4ZWN1dGFibGVzLCB0aGlzIHdvdWxkIGJlIHRoZSBmdWxsIGFyZ3YgdmVjdG9yIHBhc3NlZCB0byBgbWFpbmAuXG4gICAgKi9cbiAgICBQUk9DRVNTX0NPTU1BTkRfQVJHUzogJ3Byb2Nlc3MuY29tbWFuZF9hcmdzJyxcbiAgICAvKipcbiAgICAqIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlciB0aGF0IG93bnMgdGhlIHByb2Nlc3MuXG4gICAgKi9cbiAgICBQUk9DRVNTX09XTkVSOiAncHJvY2Vzcy5vd25lcicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgcnVudGltZSBvZiB0aGlzIHByb2Nlc3MuIEZvciBjb21waWxlZCBuYXRpdmUgYmluYXJpZXMsIHRoaXMgU0hPVUxEIGJlIHRoZSBuYW1lIG9mIHRoZSBjb21waWxlci5cbiAgICAqL1xuICAgIFBST0NFU1NfUlVOVElNRV9OQU1FOiAncHJvY2Vzcy5ydW50aW1lLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIHZlcnNpb24gb2YgdGhlIHJ1bnRpbWUgb2YgdGhpcyBwcm9jZXNzLCBhcyByZXR1cm5lZCBieSB0aGUgcnVudGltZSB3aXRob3V0IG1vZGlmaWNhdGlvbi5cbiAgICAqL1xuICAgIFBST0NFU1NfUlVOVElNRV9WRVJTSU9OOiAncHJvY2Vzcy5ydW50aW1lLnZlcnNpb24nLFxuICAgIC8qKlxuICAgICogQW4gYWRkaXRpb25hbCBkZXNjcmlwdGlvbiBhYm91dCB0aGUgcnVudGltZSBvZiB0aGUgcHJvY2VzcywgZm9yIGV4YW1wbGUgYSBzcGVjaWZpYyB2ZW5kb3IgY3VzdG9taXphdGlvbiBvZiB0aGUgcnVudGltZSBlbnZpcm9ubWVudC5cbiAgICAqL1xuICAgIFBST0NFU1NfUlVOVElNRV9ERVNDUklQVElPTjogJ3Byb2Nlc3MucnVudGltZS5kZXNjcmlwdGlvbicsXG4gICAgLyoqXG4gICAgKiBMb2dpY2FsIG5hbWUgb2YgdGhlIHNlcnZpY2UuXG4gICAgKlxuICAgICogTm90ZTogTVVTVCBiZSB0aGUgc2FtZSBmb3IgYWxsIGluc3RhbmNlcyBvZiBob3Jpem9udGFsbHkgc2NhbGVkIHNlcnZpY2VzLiBJZiB0aGUgdmFsdWUgd2FzIG5vdCBzcGVjaWZpZWQsIFNES3MgTVVTVCBmYWxsYmFjayB0byBgdW5rbm93bl9zZXJ2aWNlOmAgY29uY2F0ZW5hdGVkIHdpdGggW2Bwcm9jZXNzLmV4ZWN1dGFibGUubmFtZWBdKHByb2Nlc3MubWQjcHJvY2VzcyksIGUuZy4gYHVua25vd25fc2VydmljZTpiYXNoYC4gSWYgYHByb2Nlc3MuZXhlY3V0YWJsZS5uYW1lYCBpcyBub3QgYXZhaWxhYmxlLCB0aGUgdmFsdWUgTVVTVCBiZSBzZXQgdG8gYHVua25vd25fc2VydmljZWAuXG4gICAgKi9cbiAgICBTRVJWSUNFX05BTUU6ICdzZXJ2aWNlLm5hbWUnLFxuICAgIC8qKlxuICAgICogQSBuYW1lc3BhY2UgZm9yIGBzZXJ2aWNlLm5hbWVgLlxuICAgICpcbiAgICAqIE5vdGU6IEEgc3RyaW5nIHZhbHVlIGhhdmluZyBhIG1lYW5pbmcgdGhhdCBoZWxwcyB0byBkaXN0aW5ndWlzaCBhIGdyb3VwIG9mIHNlcnZpY2VzLCBmb3IgZXhhbXBsZSB0aGUgdGVhbSBuYW1lIHRoYXQgb3ducyBhIGdyb3VwIG9mIHNlcnZpY2VzLiBgc2VydmljZS5uYW1lYCBpcyBleHBlY3RlZCB0byBiZSB1bmlxdWUgd2l0aGluIHRoZSBzYW1lIG5hbWVzcGFjZS4gSWYgYHNlcnZpY2UubmFtZXNwYWNlYCBpcyBub3Qgc3BlY2lmaWVkIGluIHRoZSBSZXNvdXJjZSB0aGVuIGBzZXJ2aWNlLm5hbWVgIGlzIGV4cGVjdGVkIHRvIGJlIHVuaXF1ZSBmb3IgYWxsIHNlcnZpY2VzIHRoYXQgaGF2ZSBubyBleHBsaWNpdCBuYW1lc3BhY2UgZGVmaW5lZCAoc28gdGhlIGVtcHR5L3Vuc3BlY2lmaWVkIG5hbWVzcGFjZSBpcyBzaW1wbHkgb25lIG1vcmUgdmFsaWQgbmFtZXNwYWNlKS4gWmVyby1sZW5ndGggbmFtZXNwYWNlIHN0cmluZyBpcyBhc3N1bWVkIGVxdWFsIHRvIHVuc3BlY2lmaWVkIG5hbWVzcGFjZS5cbiAgICAqL1xuICAgIFNFUlZJQ0VfTkFNRVNQQUNFOiAnc2VydmljZS5uYW1lc3BhY2UnLFxuICAgIC8qKlxuICAgICogVGhlIHN0cmluZyBJRCBvZiB0aGUgc2VydmljZSBpbnN0YW5jZS5cbiAgICAqXG4gICAgKiBOb3RlOiBNVVNUIGJlIHVuaXF1ZSBmb3IgZWFjaCBpbnN0YW5jZSBvZiB0aGUgc2FtZSBgc2VydmljZS5uYW1lc3BhY2Usc2VydmljZS5uYW1lYCBwYWlyIChpbiBvdGhlciB3b3JkcyBgc2VydmljZS5uYW1lc3BhY2Usc2VydmljZS5uYW1lLHNlcnZpY2UuaW5zdGFuY2UuaWRgIHRyaXBsZXQgTVVTVCBiZSBnbG9iYWxseSB1bmlxdWUpLiBUaGUgSUQgaGVscHMgdG8gZGlzdGluZ3Vpc2ggaW5zdGFuY2VzIG9mIHRoZSBzYW1lIHNlcnZpY2UgdGhhdCBleGlzdCBhdCB0aGUgc2FtZSB0aW1lIChlLmcuIGluc3RhbmNlcyBvZiBhIGhvcml6b250YWxseSBzY2FsZWQgc2VydmljZSkuIEl0IGlzIHByZWZlcmFibGUgZm9yIHRoZSBJRCB0byBiZSBwZXJzaXN0ZW50IGFuZCBzdGF5IHRoZSBzYW1lIGZvciB0aGUgbGlmZXRpbWUgb2YgdGhlIHNlcnZpY2UgaW5zdGFuY2UsIGhvd2V2ZXIgaXQgaXMgYWNjZXB0YWJsZSB0aGF0IHRoZSBJRCBpcyBlcGhlbWVyYWwgYW5kIGNoYW5nZXMgZHVyaW5nIGltcG9ydGFudCBsaWZldGltZSBldmVudHMgZm9yIHRoZSBzZXJ2aWNlIChlLmcuIHNlcnZpY2UgcmVzdGFydHMpLiBJZiB0aGUgc2VydmljZSBoYXMgbm8gaW5oZXJlbnQgdW5pcXVlIElEIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIG9mIHRoaXMgYXR0cmlidXRlIGl0IGlzIHJlY29tbWVuZGVkIHRvIGdlbmVyYXRlIGEgcmFuZG9tIFZlcnNpb24gMSBvciBWZXJzaW9uIDQgUkZDIDQxMjIgVVVJRCAoc2VydmljZXMgYWltaW5nIGZvciByZXByb2R1Y2libGUgVVVJRHMgbWF5IGFsc28gdXNlIFZlcnNpb24gNSwgc2VlIFJGQyA0MTIyIGZvciBtb3JlIHJlY29tbWVuZGF0aW9ucykuXG4gICAgKi9cbiAgICBTRVJWSUNFX0lOU1RBTkNFX0lEOiAnc2VydmljZS5pbnN0YW5jZS5pZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgdmVyc2lvbiBzdHJpbmcgb2YgdGhlIHNlcnZpY2UgQVBJIG9yIGltcGxlbWVudGF0aW9uLlxuICAgICovXG4gICAgU0VSVklDRV9WRVJTSU9OOiAnc2VydmljZS52ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSB0ZWxlbWV0cnkgU0RLIGFzIGRlZmluZWQgYWJvdmUuXG4gICAgKi9cbiAgICBURUxFTUVUUllfU0RLX05BTUU6ICd0ZWxlbWV0cnkuc2RrLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIGxhbmd1YWdlIG9mIHRoZSB0ZWxlbWV0cnkgU0RLLlxuICAgICovXG4gICAgVEVMRU1FVFJZX1NES19MQU5HVUFHRTogJ3RlbGVtZXRyeS5zZGsubGFuZ3VhZ2UnLFxuICAgIC8qKlxuICAgICogVGhlIHZlcnNpb24gc3RyaW5nIG9mIHRoZSB0ZWxlbWV0cnkgU0RLLlxuICAgICovXG4gICAgVEVMRU1FVFJZX1NES19WRVJTSU9OOiAndGVsZW1ldHJ5LnNkay52ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIFRoZSB2ZXJzaW9uIHN0cmluZyBvZiB0aGUgYXV0byBpbnN0cnVtZW50YXRpb24gYWdlbnQsIGlmIHVzZWQuXG4gICAgKi9cbiAgICBURUxFTUVUUllfQVVUT19WRVJTSU9OOiAndGVsZW1ldHJ5LmF1dG8udmVyc2lvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgd2ViIGVuZ2luZS5cbiAgICAqL1xuICAgIFdFQkVOR0lORV9OQU1FOiAnd2ViZW5naW5lLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIHZlcnNpb24gb2YgdGhlIHdlYiBlbmdpbmUuXG4gICAgKi9cbiAgICBXRUJFTkdJTkVfVkVSU0lPTjogJ3dlYmVuZ2luZS52ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIEFkZGl0aW9uYWwgZGVzY3JpcHRpb24gb2YgdGhlIHdlYiBlbmdpbmUgKGUuZy4gZGV0YWlsZWQgdmVyc2lvbiBhbmQgZWRpdGlvbiBpbmZvcm1hdGlvbikuXG4gICAgKi9cbiAgICBXRUJFTkdJTkVfREVTQ1JJUFRJT046ICd3ZWJlbmdpbmUuZGVzY3JpcHRpb24nLFxufTtcbmV4cG9ydCB2YXIgQ2xvdWRQcm92aWRlclZhbHVlcyA9IHtcbiAgICAvKiogQWxpYmFiYSBDbG91ZC4gKi9cbiAgICBBTElCQUJBX0NMT1VEOiAnYWxpYmFiYV9jbG91ZCcsXG4gICAgLyoqIEFtYXpvbiBXZWIgU2VydmljZXMuICovXG4gICAgQVdTOiAnYXdzJyxcbiAgICAvKiogTWljcm9zb2Z0IEF6dXJlLiAqL1xuICAgIEFaVVJFOiAnYXp1cmUnLFxuICAgIC8qKiBHb29nbGUgQ2xvdWQgUGxhdGZvcm0uICovXG4gICAgR0NQOiAnZ2NwJyxcbn07XG5leHBvcnQgdmFyIENsb3VkUGxhdGZvcm1WYWx1ZXMgPSB7XG4gICAgLyoqIEFsaWJhYmEgQ2xvdWQgRWxhc3RpYyBDb21wdXRlIFNlcnZpY2UuICovXG4gICAgQUxJQkFCQV9DTE9VRF9FQ1M6ICdhbGliYWJhX2Nsb3VkX2VjcycsXG4gICAgLyoqIEFsaWJhYmEgQ2xvdWQgRnVuY3Rpb24gQ29tcHV0ZS4gKi9cbiAgICBBTElCQUJBX0NMT1VEX0ZDOiAnYWxpYmFiYV9jbG91ZF9mYycsXG4gICAgLyoqIEFXUyBFbGFzdGljIENvbXB1dGUgQ2xvdWQuICovXG4gICAgQVdTX0VDMjogJ2F3c19lYzInLFxuICAgIC8qKiBBV1MgRWxhc3RpYyBDb250YWluZXIgU2VydmljZS4gKi9cbiAgICBBV1NfRUNTOiAnYXdzX2VjcycsXG4gICAgLyoqIEFXUyBFbGFzdGljIEt1YmVybmV0ZXMgU2VydmljZS4gKi9cbiAgICBBV1NfRUtTOiAnYXdzX2VrcycsXG4gICAgLyoqIEFXUyBMYW1iZGEuICovXG4gICAgQVdTX0xBTUJEQTogJ2F3c19sYW1iZGEnLFxuICAgIC8qKiBBV1MgRWxhc3RpYyBCZWFuc3RhbGsuICovXG4gICAgQVdTX0VMQVNUSUNfQkVBTlNUQUxLOiAnYXdzX2VsYXN0aWNfYmVhbnN0YWxrJyxcbiAgICAvKiogQXp1cmUgVmlydHVhbCBNYWNoaW5lcy4gKi9cbiAgICBBWlVSRV9WTTogJ2F6dXJlX3ZtJyxcbiAgICAvKiogQXp1cmUgQ29udGFpbmVyIEluc3RhbmNlcy4gKi9cbiAgICBBWlVSRV9DT05UQUlORVJfSU5TVEFOQ0VTOiAnYXp1cmVfY29udGFpbmVyX2luc3RhbmNlcycsXG4gICAgLyoqIEF6dXJlIEt1YmVybmV0ZXMgU2VydmljZS4gKi9cbiAgICBBWlVSRV9BS1M6ICdhenVyZV9ha3MnLFxuICAgIC8qKiBBenVyZSBGdW5jdGlvbnMuICovXG4gICAgQVpVUkVfRlVOQ1RJT05TOiAnYXp1cmVfZnVuY3Rpb25zJyxcbiAgICAvKiogQXp1cmUgQXBwIFNlcnZpY2UuICovXG4gICAgQVpVUkVfQVBQX1NFUlZJQ0U6ICdhenVyZV9hcHBfc2VydmljZScsXG4gICAgLyoqIEdvb2dsZSBDbG91ZCBDb21wdXRlIEVuZ2luZSAoR0NFKS4gKi9cbiAgICBHQ1BfQ09NUFVURV9FTkdJTkU6ICdnY3BfY29tcHV0ZV9lbmdpbmUnLFxuICAgIC8qKiBHb29nbGUgQ2xvdWQgUnVuLiAqL1xuICAgIEdDUF9DTE9VRF9SVU46ICdnY3BfY2xvdWRfcnVuJyxcbiAgICAvKiogR29vZ2xlIENsb3VkIEt1YmVybmV0ZXMgRW5naW5lIChHS0UpLiAqL1xuICAgIEdDUF9LVUJFUk5FVEVTX0VOR0lORTogJ2djcF9rdWJlcm5ldGVzX2VuZ2luZScsXG4gICAgLyoqIEdvb2dsZSBDbG91ZCBGdW5jdGlvbnMgKEdDRikuICovXG4gICAgR0NQX0NMT1VEX0ZVTkNUSU9OUzogJ2djcF9jbG91ZF9mdW5jdGlvbnMnLFxuICAgIC8qKiBHb29nbGUgQ2xvdWQgQXBwIEVuZ2luZSAoR0FFKS4gKi9cbiAgICBHQ1BfQVBQX0VOR0lORTogJ2djcF9hcHBfZW5naW5lJyxcbn07XG5leHBvcnQgdmFyIEF3c0Vjc0xhdW5jaHR5cGVWYWx1ZXMgPSB7XG4gICAgLyoqIGVjMi4gKi9cbiAgICBFQzI6ICdlYzInLFxuICAgIC8qKiBmYXJnYXRlLiAqL1xuICAgIEZBUkdBVEU6ICdmYXJnYXRlJyxcbn07XG5leHBvcnQgdmFyIEhvc3RBcmNoVmFsdWVzID0ge1xuICAgIC8qKiBBTUQ2NC4gKi9cbiAgICBBTUQ2NDogJ2FtZDY0JyxcbiAgICAvKiogQVJNMzIuICovXG4gICAgQVJNMzI6ICdhcm0zMicsXG4gICAgLyoqIEFSTTY0LiAqL1xuICAgIEFSTTY0OiAnYXJtNjQnLFxuICAgIC8qKiBJdGFuaXVtLiAqL1xuICAgIElBNjQ6ICdpYTY0JyxcbiAgICAvKiogMzItYml0IFBvd2VyUEMuICovXG4gICAgUFBDMzI6ICdwcGMzMicsXG4gICAgLyoqIDY0LWJpdCBQb3dlclBDLiAqL1xuICAgIFBQQzY0OiAncHBjNjQnLFxuICAgIC8qKiAzMi1iaXQgeDg2LiAqL1xuICAgIFg4NjogJ3g4NicsXG59O1xuZXhwb3J0IHZhciBPc1R5cGVWYWx1ZXMgPSB7XG4gICAgLyoqIE1pY3Jvc29mdCBXaW5kb3dzLiAqL1xuICAgIFdJTkRPV1M6ICd3aW5kb3dzJyxcbiAgICAvKiogTGludXguICovXG4gICAgTElOVVg6ICdsaW51eCcsXG4gICAgLyoqIEFwcGxlIERhcndpbi4gKi9cbiAgICBEQVJXSU46ICdkYXJ3aW4nLFxuICAgIC8qKiBGcmVlQlNELiAqL1xuICAgIEZSRUVCU0Q6ICdmcmVlYnNkJyxcbiAgICAvKiogTmV0QlNELiAqL1xuICAgIE5FVEJTRDogJ25ldGJzZCcsXG4gICAgLyoqIE9wZW5CU0QuICovXG4gICAgT1BFTkJTRDogJ29wZW5ic2QnLFxuICAgIC8qKiBEcmFnb25GbHkgQlNELiAqL1xuICAgIERSQUdPTkZMWUJTRDogJ2RyYWdvbmZseWJzZCcsXG4gICAgLyoqIEhQLVVYIChIZXdsZXR0IFBhY2thcmQgVW5peCkuICovXG4gICAgSFBVWDogJ2hwdXgnLFxuICAgIC8qKiBBSVggKEFkdmFuY2VkIEludGVyYWN0aXZlIGVYZWN1dGl2ZSkuICovXG4gICAgQUlYOiAnYWl4JyxcbiAgICAvKiogT3JhY2xlIFNvbGFyaXMuICovXG4gICAgU09MQVJJUzogJ3NvbGFyaXMnLFxuICAgIC8qKiBJQk0gei9PUy4gKi9cbiAgICBaX09TOiAnel9vcycsXG59O1xuZXhwb3J0IHZhciBUZWxlbWV0cnlTZGtMYW5ndWFnZVZhbHVlcyA9IHtcbiAgICAvKiogY3BwLiAqL1xuICAgIENQUDogJ2NwcCcsXG4gICAgLyoqIGRvdG5ldC4gKi9cbiAgICBET1RORVQ6ICdkb3RuZXQnLFxuICAgIC8qKiBlcmxhbmcuICovXG4gICAgRVJMQU5HOiAnZXJsYW5nJyxcbiAgICAvKiogZ28uICovXG4gICAgR086ICdnbycsXG4gICAgLyoqIGphdmEuICovXG4gICAgSkFWQTogJ2phdmEnLFxuICAgIC8qKiBub2RlanMuICovXG4gICAgTk9ERUpTOiAnbm9kZWpzJyxcbiAgICAvKiogcGhwLiAqL1xuICAgIFBIUDogJ3BocCcsXG4gICAgLyoqIHB5dGhvbi4gKi9cbiAgICBQWVRIT046ICdweXRob24nLFxuICAgIC8qKiBydWJ5LiAqL1xuICAgIFJVQlk6ICdydWJ5JyxcbiAgICAvKiogd2VianMuICovXG4gICAgV0VCSlM6ICd3ZWJqcycsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2VtYW50aWNSZXNvdXJjZUF0dHJpYnV0ZXMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vU2VtYW50aWNSZXNvdXJjZUF0dHJpYnV0ZXMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIERPIE5PVCBFRElULCB0aGlzIGlzIGFuIEF1dG8tZ2VuZXJhdGVkIGZpbGUgZnJvbSBzY3JpcHRzL3NlbWNvbnYvdGVtcGxhdGVzLy90ZW1wbGF0ZXMvU2VtYW50aWNBdHRyaWJ1dGVzLnRzLmoyXG5leHBvcnQgdmFyIFNlbWFudGljQXR0cmlidXRlcyA9IHtcbiAgICAvKipcbiAgICAqIFRoZSBmdWxsIGludm9rZWQgQVJOIGFzIHByb3ZpZGVkIG9uIHRoZSBgQ29udGV4dGAgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiAoYExhbWJkYS1SdW50aW1lLUludm9rZWQtRnVuY3Rpb24tQXJuYCBoZWFkZXIgb24gdGhlIGAvcnVudGltZS9pbnZvY2F0aW9uL25leHRgIGFwcGxpY2FibGUpLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgbWF5IGJlIGRpZmZlcmVudCBmcm9tIGBmYWFzLmlkYCBpZiBhbiBhbGlhcyBpcyBpbnZvbHZlZC5cbiAgICAqL1xuICAgIEFXU19MQU1CREFfSU5WT0tFRF9BUk46ICdhd3MubGFtYmRhLmludm9rZWRfYXJuJyxcbiAgICAvKipcbiAgICAqIEFuIGlkZW50aWZpZXIgZm9yIHRoZSBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbSAoREJNUykgcHJvZHVjdCBiZWluZyB1c2VkLiBTZWUgYmVsb3cgZm9yIGEgbGlzdCBvZiB3ZWxsLWtub3duIGlkZW50aWZpZXJzLlxuICAgICovXG4gICAgREJfU1lTVEVNOiAnZGIuc3lzdGVtJyxcbiAgICAvKipcbiAgICAqIFRoZSBjb25uZWN0aW9uIHN0cmluZyB1c2VkIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlLiBJdCBpcyByZWNvbW1lbmRlZCB0byByZW1vdmUgZW1iZWRkZWQgY3JlZGVudGlhbHMuXG4gICAgKi9cbiAgICBEQl9DT05ORUNUSU9OX1NUUklORzogJ2RiLmNvbm5lY3Rpb25fc3RyaW5nJyxcbiAgICAvKipcbiAgICAqIFVzZXJuYW1lIGZvciBhY2Nlc3NpbmcgdGhlIGRhdGFiYXNlLlxuICAgICovXG4gICAgREJfVVNFUjogJ2RiLnVzZXInLFxuICAgIC8qKlxuICAgICogVGhlIGZ1bGx5LXF1YWxpZmllZCBjbGFzcyBuYW1lIG9mIHRoZSBbSmF2YSBEYXRhYmFzZSBDb25uZWN0aXZpdHkgKEpEQkMpXShodHRwczovL2RvY3Mub3JhY2xlLmNvbS9qYXZhc2UvOC9kb2NzL3RlY2hub3Rlcy9ndWlkZXMvamRiYy8pIGRyaXZlciB1c2VkIHRvIGNvbm5lY3QuXG4gICAgKi9cbiAgICBEQl9KREJDX0RSSVZFUl9DTEFTU05BTUU6ICdkYi5qZGJjLmRyaXZlcl9jbGFzc25hbWUnLFxuICAgIC8qKlxuICAgICogSWYgbm8gW3RlY2gtc3BlY2lmaWMgYXR0cmlidXRlXSgjY2FsbC1sZXZlbC1hdHRyaWJ1dGVzLWZvci1zcGVjaWZpYy10ZWNobm9sb2dpZXMpIGlzIGRlZmluZWQsIHRoaXMgYXR0cmlidXRlIGlzIHVzZWQgdG8gcmVwb3J0IHRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZSBiZWluZyBhY2Nlc3NlZC4gRm9yIGNvbW1hbmRzIHRoYXQgc3dpdGNoIHRoZSBkYXRhYmFzZSwgdGhpcyBzaG91bGQgYmUgc2V0IHRvIHRoZSB0YXJnZXQgZGF0YWJhc2UgKGV2ZW4gaWYgdGhlIGNvbW1hbmQgZmFpbHMpLlxuICAgICpcbiAgICAqIE5vdGU6IEluIHNvbWUgU1FMIGRhdGFiYXNlcywgdGhlIGRhdGFiYXNlIG5hbWUgdG8gYmUgdXNlZCBpcyBjYWxsZWQgJiMzNDtzY2hlbWEgbmFtZSYjMzQ7LlxuICAgICovXG4gICAgREJfTkFNRTogJ2RiLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIGRhdGFiYXNlIHN0YXRlbWVudCBiZWluZyBleGVjdXRlZC5cbiAgICAqXG4gICAgKiBOb3RlOiBUaGUgdmFsdWUgbWF5IGJlIHNhbml0aXplZCB0byBleGNsdWRlIHNlbnNpdGl2ZSBpbmZvcm1hdGlvbi5cbiAgICAqL1xuICAgIERCX1NUQVRFTUVOVDogJ2RiLnN0YXRlbWVudCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgb3BlcmF0aW9uIGJlaW5nIGV4ZWN1dGVkLCBlLmcuIHRoZSBbTW9uZ29EQiBjb21tYW5kIG5hbWVdKGh0dHBzOi8vZG9jcy5tb25nb2RiLmNvbS9tYW51YWwvcmVmZXJlbmNlL2NvbW1hbmQvI2RhdGFiYXNlLW9wZXJhdGlvbnMpIHN1Y2ggYXMgYGZpbmRBbmRNb2RpZnlgLCBvciB0aGUgU1FMIGtleXdvcmQuXG4gICAgKlxuICAgICogTm90ZTogV2hlbiBzZXR0aW5nIHRoaXMgdG8gYW4gU1FMIGtleXdvcmQsIGl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBhdHRlbXB0IGFueSBjbGllbnQtc2lkZSBwYXJzaW5nIG9mIGBkYi5zdGF0ZW1lbnRgIGp1c3QgdG8gZ2V0IHRoaXMgcHJvcGVydHksIGJ1dCBpdCBzaG91bGQgYmUgc2V0IGlmIHRoZSBvcGVyYXRpb24gbmFtZSBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBiZWluZyBpbnN0cnVtZW50ZWQuIElmIHRoZSBTUUwgc3RhdGVtZW50IGhhcyBhbiBhbWJpZ3VvdXMgb3BlcmF0aW9uLCBvciBwZXJmb3JtcyBtb3JlIHRoYW4gb25lIG9wZXJhdGlvbiwgdGhpcyB2YWx1ZSBtYXkgYmUgb21pdHRlZC5cbiAgICAqL1xuICAgIERCX09QRVJBVElPTjogJ2RiLm9wZXJhdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgTWljcm9zb2Z0IFNRTCBTZXJ2ZXIgW2luc3RhbmNlIG5hbWVdKGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL3NxbC9jb25uZWN0L2pkYmMvYnVpbGRpbmctdGhlLWNvbm5lY3Rpb24tdXJsP3ZpZXc9c3FsLXNlcnZlci12ZXIxNSkgY29ubmVjdGluZyB0by4gVGhpcyBuYW1lIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBwb3J0IG9mIGEgbmFtZWQgaW5zdGFuY2UuXG4gICAgKlxuICAgICogTm90ZTogSWYgc2V0dGluZyBhIGBkYi5tc3NxbC5pbnN0YW5jZV9uYW1lYCwgYG5ldC5wZWVyLnBvcnRgIGlzIG5vIGxvbmdlciByZXF1aXJlZCAoYnV0IHN0aWxsIHJlY29tbWVuZGVkIGlmIG5vbi1zdGFuZGFyZCkuXG4gICAgKi9cbiAgICBEQl9NU1NRTF9JTlNUQU5DRV9OQU1FOiAnZGIubXNzcWwuaW5zdGFuY2VfbmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUga2V5c3BhY2UgYmVpbmcgYWNjZXNzZWQuIFRvIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZ2VuZXJpYyBgZGIubmFtZWAgYXR0cmlidXRlLlxuICAgICovXG4gICAgREJfQ0FTU0FORFJBX0tFWVNQQUNFOiAnZGIuY2Fzc2FuZHJhLmtleXNwYWNlJyxcbiAgICAvKipcbiAgICAqIFRoZSBmZXRjaCBzaXplIHVzZWQgZm9yIHBhZ2luZywgaS5lLiBob3cgbWFueSByb3dzIHdpbGwgYmUgcmV0dXJuZWQgYXQgb25jZS5cbiAgICAqL1xuICAgIERCX0NBU1NBTkRSQV9QQUdFX1NJWkU6ICdkYi5jYXNzYW5kcmEucGFnZV9zaXplJyxcbiAgICAvKipcbiAgICAqIFRoZSBjb25zaXN0ZW5jeSBsZXZlbCBvZiB0aGUgcXVlcnkuIEJhc2VkIG9uIGNvbnNpc3RlbmN5IHZhbHVlcyBmcm9tIFtDUUxdKGh0dHBzOi8vZG9jcy5kYXRhc3RheC5jb20vZW4vY2Fzc2FuZHJhLW9zcy8zLjAvY2Fzc2FuZHJhL2RtbC9kbWxDb25maWdDb25zaXN0ZW5jeS5odG1sKS5cbiAgICAqL1xuICAgIERCX0NBU1NBTkRSQV9DT05TSVNURU5DWV9MRVZFTDogJ2RiLmNhc3NhbmRyYS5jb25zaXN0ZW5jeV9sZXZlbCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJpbWFyeSB0YWJsZSB0aGF0IHRoZSBvcGVyYXRpb24gaXMgYWN0aW5nIHVwb24sIGluY2x1ZGluZyB0aGUgc2NoZW1hIG5hbWUgKGlmIGFwcGxpY2FibGUpLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgbWlycm9ycyB0aGUgZGIuc3FsLnRhYmxlIGF0dHJpYnV0ZSBidXQgcmVmZXJlbmNlcyBjYXNzYW5kcmEgcmF0aGVyIHRoYW4gc3FsLiBJdCBpcyBub3QgcmVjb21tZW5kZWQgdG8gYXR0ZW1wdCBhbnkgY2xpZW50LXNpZGUgcGFyc2luZyBvZiBgZGIuc3RhdGVtZW50YCBqdXN0IHRvIGdldCB0aGlzIHByb3BlcnR5LCBidXQgaXQgc2hvdWxkIGJlIHNldCBpZiBpdCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBiZWluZyBpbnN0cnVtZW50ZWQuIElmIHRoZSBvcGVyYXRpb24gaXMgYWN0aW5nIHVwb24gYW4gYW5vbnltb3VzIHRhYmxlLCBvciBtb3JlIHRoYW4gb25lIHRhYmxlLCB0aGlzIHZhbHVlIE1VU1QgTk9UIGJlIHNldC5cbiAgICAqL1xuICAgIERCX0NBU1NBTkRSQV9UQUJMRTogJ2RiLmNhc3NhbmRyYS50YWJsZScsXG4gICAgLyoqXG4gICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgcXVlcnkgaXMgaWRlbXBvdGVudC5cbiAgICAqL1xuICAgIERCX0NBU1NBTkRSQV9JREVNUE9URU5DRTogJ2RiLmNhc3NhbmRyYS5pZGVtcG90ZW5jZScsXG4gICAgLyoqXG4gICAgKiBUaGUgbnVtYmVyIG9mIHRpbWVzIGEgcXVlcnkgd2FzIHNwZWN1bGF0aXZlbHkgZXhlY3V0ZWQuIE5vdCBzZXQgb3IgYDBgIGlmIHRoZSBxdWVyeSB3YXMgbm90IGV4ZWN1dGVkIHNwZWN1bGF0aXZlbHkuXG4gICAgKi9cbiAgICBEQl9DQVNTQU5EUkFfU1BFQ1VMQVRJVkVfRVhFQ1VUSU9OX0NPVU5UOiAnZGIuY2Fzc2FuZHJhLnNwZWN1bGF0aXZlX2V4ZWN1dGlvbl9jb3VudCcsXG4gICAgLyoqXG4gICAgKiBUaGUgSUQgb2YgdGhlIGNvb3JkaW5hdGluZyBub2RlIGZvciBhIHF1ZXJ5LlxuICAgICovXG4gICAgREJfQ0FTU0FORFJBX0NPT1JESU5BVE9SX0lEOiAnZGIuY2Fzc2FuZHJhLmNvb3JkaW5hdG9yLmlkJyxcbiAgICAvKipcbiAgICAqIFRoZSBkYXRhIGNlbnRlciBvZiB0aGUgY29vcmRpbmF0aW5nIG5vZGUgZm9yIGEgcXVlcnkuXG4gICAgKi9cbiAgICBEQl9DQVNTQU5EUkFfQ09PUkRJTkFUT1JfREM6ICdkYi5jYXNzYW5kcmEuY29vcmRpbmF0b3IuZGMnLFxuICAgIC8qKlxuICAgICogVGhlIFtIQmFzZSBuYW1lc3BhY2VdKGh0dHBzOi8vaGJhc2UuYXBhY2hlLm9yZy9ib29rLmh0bWwjX25hbWVzcGFjZSkgYmVpbmcgYWNjZXNzZWQuIFRvIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZ2VuZXJpYyBgZGIubmFtZWAgYXR0cmlidXRlLlxuICAgICovXG4gICAgREJfSEJBU0VfTkFNRVNQQUNFOiAnZGIuaGJhc2UubmFtZXNwYWNlJyxcbiAgICAvKipcbiAgICAqIFRoZSBpbmRleCBvZiB0aGUgZGF0YWJhc2UgYmVpbmcgYWNjZXNzZWQgYXMgdXNlZCBpbiB0aGUgW2BTRUxFQ1RgIGNvbW1hbmRdKGh0dHBzOi8vcmVkaXMuaW8vY29tbWFuZHMvc2VsZWN0KSwgcHJvdmlkZWQgYXMgYW4gaW50ZWdlci4gVG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBnZW5lcmljIGBkYi5uYW1lYCBhdHRyaWJ1dGUuXG4gICAgKi9cbiAgICBEQl9SRURJU19EQVRBQkFTRV9JTkRFWDogJ2RiLnJlZGlzLmRhdGFiYXNlX2luZGV4JyxcbiAgICAvKipcbiAgICAqIFRoZSBjb2xsZWN0aW9uIGJlaW5nIGFjY2Vzc2VkIHdpdGhpbiB0aGUgZGF0YWJhc2Ugc3RhdGVkIGluIGBkYi5uYW1lYC5cbiAgICAqL1xuICAgIERCX01PTkdPREJfQ09MTEVDVElPTjogJ2RiLm1vbmdvZGIuY29sbGVjdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJpbWFyeSB0YWJsZSB0aGF0IHRoZSBvcGVyYXRpb24gaXMgYWN0aW5nIHVwb24sIGluY2x1ZGluZyB0aGUgc2NoZW1hIG5hbWUgKGlmIGFwcGxpY2FibGUpLlxuICAgICpcbiAgICAqIE5vdGU6IEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBhdHRlbXB0IGFueSBjbGllbnQtc2lkZSBwYXJzaW5nIG9mIGBkYi5zdGF0ZW1lbnRgIGp1c3QgdG8gZ2V0IHRoaXMgcHJvcGVydHksIGJ1dCBpdCBzaG91bGQgYmUgc2V0IGlmIGl0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGJlaW5nIGluc3RydW1lbnRlZC4gSWYgdGhlIG9wZXJhdGlvbiBpcyBhY3RpbmcgdXBvbiBhbiBhbm9ueW1vdXMgdGFibGUsIG9yIG1vcmUgdGhhbiBvbmUgdGFibGUsIHRoaXMgdmFsdWUgTVVTVCBOT1QgYmUgc2V0LlxuICAgICovXG4gICAgREJfU1FMX1RBQkxFOiAnZGIuc3FsLnRhYmxlJyxcbiAgICAvKipcbiAgICAqIFRoZSB0eXBlIG9mIHRoZSBleGNlcHRpb24gKGl0cyBmdWxseS1xdWFsaWZpZWQgY2xhc3MgbmFtZSwgaWYgYXBwbGljYWJsZSkuIFRoZSBkeW5hbWljIHR5cGUgb2YgdGhlIGV4Y2VwdGlvbiBzaG91bGQgYmUgcHJlZmVycmVkIG92ZXIgdGhlIHN0YXRpYyB0eXBlIGluIGxhbmd1YWdlcyB0aGF0IHN1cHBvcnQgaXQuXG4gICAgKi9cbiAgICBFWENFUFRJT05fVFlQRTogJ2V4Y2VwdGlvbi50eXBlJyxcbiAgICAvKipcbiAgICAqIFRoZSBleGNlcHRpb24gbWVzc2FnZS5cbiAgICAqL1xuICAgIEVYQ0VQVElPTl9NRVNTQUdFOiAnZXhjZXB0aW9uLm1lc3NhZ2UnLFxuICAgIC8qKlxuICAgICogQSBzdGFja3RyYWNlIGFzIGEgc3RyaW5nIGluIHRoZSBuYXR1cmFsIHJlcHJlc2VudGF0aW9uIGZvciB0aGUgbGFuZ3VhZ2UgcnVudGltZS4gVGhlIHJlcHJlc2VudGF0aW9uIGlzIHRvIGJlIGRldGVybWluZWQgYW5kIGRvY3VtZW50ZWQgYnkgZWFjaCBsYW5ndWFnZSBTSUcuXG4gICAgKi9cbiAgICBFWENFUFRJT05fU1RBQ0tUUkFDRTogJ2V4Y2VwdGlvbi5zdGFja3RyYWNlJyxcbiAgICAvKipcbiAgICAqIFNIT1VMRCBiZSBzZXQgdG8gdHJ1ZSBpZiB0aGUgZXhjZXB0aW9uIGV2ZW50IGlzIHJlY29yZGVkIGF0IGEgcG9pbnQgd2hlcmUgaXQgaXMga25vd24gdGhhdCB0aGUgZXhjZXB0aW9uIGlzIGVzY2FwaW5nIHRoZSBzY29wZSBvZiB0aGUgc3Bhbi5cbiAgICAqXG4gICAgKiBOb3RlOiBBbiBleGNlcHRpb24gaXMgY29uc2lkZXJlZCB0byBoYXZlIGVzY2FwZWQgKG9yIGxlZnQpIHRoZSBzY29wZSBvZiBhIHNwYW4sXG4gIGlmIHRoYXQgc3BhbiBpcyBlbmRlZCB3aGlsZSB0aGUgZXhjZXB0aW9uIGlzIHN0aWxsIGxvZ2ljYWxseSAmIzM0O2luIGZsaWdodCYjMzQ7LlxuICBUaGlzIG1heSBiZSBhY3R1YWxseSAmIzM0O2luIGZsaWdodCYjMzQ7IGluIHNvbWUgbGFuZ3VhZ2VzIChlLmcuIGlmIHRoZSBleGNlcHRpb25cbiAgaXMgcGFzc2VkIHRvIGEgQ29udGV4dCBtYW5hZ2VyJiMzOTtzIGBfX2V4aXRfX2AgbWV0aG9kIGluIFB5dGhvbikgYnV0IHdpbGxcbiAgdXN1YWxseSBiZSBjYXVnaHQgYXQgdGhlIHBvaW50IG9mIHJlY29yZGluZyB0aGUgZXhjZXB0aW9uIGluIG1vc3QgbGFuZ3VhZ2VzLlxuICBcbiAgSXQgaXMgdXN1YWxseSBub3QgcG9zc2libGUgdG8gZGV0ZXJtaW5lIGF0IHRoZSBwb2ludCB3aGVyZSBhbiBleGNlcHRpb24gaXMgdGhyb3duXG4gIHdoZXRoZXIgaXQgd2lsbCBlc2NhcGUgdGhlIHNjb3BlIG9mIGEgc3Bhbi5cbiAgSG93ZXZlciwgaXQgaXMgdHJpdmlhbCB0byBrbm93IHRoYXQgYW4gZXhjZXB0aW9uXG4gIHdpbGwgZXNjYXBlLCBpZiBvbmUgY2hlY2tzIGZvciBhbiBhY3RpdmUgZXhjZXB0aW9uIGp1c3QgYmVmb3JlIGVuZGluZyB0aGUgc3BhbixcbiAgYXMgZG9uZSBpbiB0aGUgW2V4YW1wbGUgYWJvdmVdKCNleGNlcHRpb24tZW5kLWV4YW1wbGUpLlxuICBcbiAgSXQgZm9sbG93cyB0aGF0IGFuIGV4Y2VwdGlvbiBtYXkgc3RpbGwgZXNjYXBlIHRoZSBzY29wZSBvZiB0aGUgc3BhblxuICBldmVuIGlmIHRoZSBgZXhjZXB0aW9uLmVzY2FwZWRgIGF0dHJpYnV0ZSB3YXMgbm90IHNldCBvciBzZXQgdG8gZmFsc2UsXG4gIHNpbmNlIHRoZSBldmVudCBtaWdodCBoYXZlIGJlZW4gcmVjb3JkZWQgYXQgYSB0aW1lIHdoZXJlIGl0IHdhcyBub3RcbiAgY2xlYXIgd2hldGhlciB0aGUgZXhjZXB0aW9uIHdpbGwgZXNjYXBlLlxuICAgICovXG4gICAgRVhDRVBUSU9OX0VTQ0FQRUQ6ICdleGNlcHRpb24uZXNjYXBlZCcsXG4gICAgLyoqXG4gICAgKiBUeXBlIG9mIHRoZSB0cmlnZ2VyIG9uIHdoaWNoIHRoZSBmdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAgICAqL1xuICAgIEZBQVNfVFJJR0dFUjogJ2ZhYXMudHJpZ2dlcicsXG4gICAgLyoqXG4gICAgKiBUaGUgZXhlY3V0aW9uIElEIG9mIHRoZSBjdXJyZW50IGZ1bmN0aW9uIGV4ZWN1dGlvbi5cbiAgICAqL1xuICAgIEZBQVNfRVhFQ1VUSU9OOiAnZmFhcy5leGVjdXRpb24nLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIHNvdXJjZSBvbiB3aGljaCB0aGUgdHJpZ2dlcmluZyBvcGVyYXRpb24gd2FzIHBlcmZvcm1lZC4gRm9yIGV4YW1wbGUsIGluIENsb3VkIFN0b3JhZ2Ugb3IgUzMgY29ycmVzcG9uZHMgdG8gdGhlIGJ1Y2tldCBuYW1lLCBhbmQgaW4gQ29zbW9zIERCIHRvIHRoZSBkYXRhYmFzZSBuYW1lLlxuICAgICovXG4gICAgRkFBU19ET0NVTUVOVF9DT0xMRUNUSU9OOiAnZmFhcy5kb2N1bWVudC5jb2xsZWN0aW9uJyxcbiAgICAvKipcbiAgICAqIERlc2NyaWJlcyB0aGUgdHlwZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgd2FzIHBlcmZvcm1lZCBvbiB0aGUgZGF0YS5cbiAgICAqL1xuICAgIEZBQVNfRE9DVU1FTlRfT1BFUkFUSU9OOiAnZmFhcy5kb2N1bWVudC5vcGVyYXRpb24nLFxuICAgIC8qKlxuICAgICogQSBzdHJpbmcgY29udGFpbmluZyB0aGUgdGltZSB3aGVuIHRoZSBkYXRhIHdhcyBhY2Nlc3NlZCBpbiB0aGUgW0lTTyA4NjAxXShodHRwczovL3d3dy5pc28ub3JnL2lzby04NjAxLWRhdGUtYW5kLXRpbWUtZm9ybWF0Lmh0bWwpIGZvcm1hdCBleHByZXNzZWQgaW4gW1VUQ10oaHR0cHM6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWUpLlxuICAgICovXG4gICAgRkFBU19ET0NVTUVOVF9USU1FOiAnZmFhcy5kb2N1bWVudC50aW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBkb2N1bWVudCBuYW1lL3RhYmxlIHN1YmplY3RlZCB0byB0aGUgb3BlcmF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gQ2xvdWQgU3RvcmFnZSBvciBTMyBpcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSwgYW5kIGluIENvc21vcyBEQiB0aGUgdGFibGUgbmFtZS5cbiAgICAqL1xuICAgIEZBQVNfRE9DVU1FTlRfTkFNRTogJ2ZhYXMuZG9jdW1lbnQubmFtZScsXG4gICAgLyoqXG4gICAgKiBBIHN0cmluZyBjb250YWluaW5nIHRoZSBmdW5jdGlvbiBpbnZvY2F0aW9uIHRpbWUgaW4gdGhlIFtJU08gODYwMV0oaHR0cHM6Ly93d3cuaXNvLm9yZy9pc28tODYwMS1kYXRlLWFuZC10aW1lLWZvcm1hdC5odG1sKSBmb3JtYXQgZXhwcmVzc2VkIGluIFtVVENdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lKS5cbiAgICAqL1xuICAgIEZBQVNfVElNRTogJ2ZhYXMudGltZScsXG4gICAgLyoqXG4gICAgKiBBIHN0cmluZyBjb250YWluaW5nIHRoZSBzY2hlZHVsZSBwZXJpb2QgYXMgW0Nyb24gRXhwcmVzc2lvbl0oaHR0cHM6Ly9kb2NzLm9yYWNsZS5jb20vY2QvRTEyMDU4XzAxL2RvYy9kb2MuMTAxNC9lMTIwMzAvY3Jvbl9leHByZXNzaW9ucy5odG0pLlxuICAgICovXG4gICAgRkFBU19DUk9OOiAnZmFhcy5jcm9uJyxcbiAgICAvKipcbiAgICAqIEEgYm9vbGVhbiB0aGF0IGlzIHRydWUgaWYgdGhlIHNlcnZlcmxlc3MgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lIChha2EgY29sZC1zdGFydCkuXG4gICAgKi9cbiAgICBGQUFTX0NPTERTVEFSVDogJ2ZhYXMuY29sZHN0YXJ0JyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSBpbnZva2VkIGZ1bmN0aW9uLlxuICAgICpcbiAgICAqIE5vdGU6IFNIT1VMRCBiZSBlcXVhbCB0byB0aGUgYGZhYXMubmFtZWAgcmVzb3VyY2UgYXR0cmlidXRlIG9mIHRoZSBpbnZva2VkIGZ1bmN0aW9uLlxuICAgICovXG4gICAgRkFBU19JTlZPS0VEX05BTUU6ICdmYWFzLmludm9rZWRfbmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgY2xvdWQgcHJvdmlkZXIgb2YgdGhlIGludm9rZWQgZnVuY3Rpb24uXG4gICAgKlxuICAgICogTm90ZTogU0hPVUxEIGJlIGVxdWFsIHRvIHRoZSBgY2xvdWQucHJvdmlkZXJgIHJlc291cmNlIGF0dHJpYnV0ZSBvZiB0aGUgaW52b2tlZCBmdW5jdGlvbi5cbiAgICAqL1xuICAgIEZBQVNfSU5WT0tFRF9QUk9WSURFUjogJ2ZhYXMuaW52b2tlZF9wcm92aWRlcicsXG4gICAgLyoqXG4gICAgKiBUaGUgY2xvdWQgcmVnaW9uIG9mIHRoZSBpbnZva2VkIGZ1bmN0aW9uLlxuICAgICpcbiAgICAqIE5vdGU6IFNIT1VMRCBiZSBlcXVhbCB0byB0aGUgYGNsb3VkLnJlZ2lvbmAgcmVzb3VyY2UgYXR0cmlidXRlIG9mIHRoZSBpbnZva2VkIGZ1bmN0aW9uLlxuICAgICovXG4gICAgRkFBU19JTlZPS0VEX1JFR0lPTjogJ2ZhYXMuaW52b2tlZF9yZWdpb24nLFxuICAgIC8qKlxuICAgICogVHJhbnNwb3J0IHByb3RvY29sIHVzZWQuIFNlZSBub3RlIGJlbG93LlxuICAgICovXG4gICAgTkVUX1RSQU5TUE9SVDogJ25ldC50cmFuc3BvcnQnLFxuICAgIC8qKlxuICAgICogUmVtb3RlIGFkZHJlc3Mgb2YgdGhlIHBlZXIgKGRvdHRlZCBkZWNpbWFsIGZvciBJUHY0IG9yIFtSRkM1OTUyXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTk1MikgZm9yIElQdjYpLlxuICAgICovXG4gICAgTkVUX1BFRVJfSVA6ICduZXQucGVlci5pcCcsXG4gICAgLyoqXG4gICAgKiBSZW1vdGUgcG9ydCBudW1iZXIuXG4gICAgKi9cbiAgICBORVRfUEVFUl9QT1JUOiAnbmV0LnBlZXIucG9ydCcsXG4gICAgLyoqXG4gICAgKiBSZW1vdGUgaG9zdG5hbWUgb3Igc2ltaWxhciwgc2VlIG5vdGUgYmVsb3cuXG4gICAgKi9cbiAgICBORVRfUEVFUl9OQU1FOiAnbmV0LnBlZXIubmFtZScsXG4gICAgLyoqXG4gICAgKiBMaWtlIGBuZXQucGVlci5pcGAgYnV0IGZvciB0aGUgaG9zdCBJUC4gVXNlZnVsIGluIGNhc2Ugb2YgYSBtdWx0aS1JUCBob3N0LlxuICAgICovXG4gICAgTkVUX0hPU1RfSVA6ICduZXQuaG9zdC5pcCcsXG4gICAgLyoqXG4gICAgKiBMaWtlIGBuZXQucGVlci5wb3J0YCBidXQgZm9yIHRoZSBob3N0IHBvcnQuXG4gICAgKi9cbiAgICBORVRfSE9TVF9QT1JUOiAnbmV0Lmhvc3QucG9ydCcsXG4gICAgLyoqXG4gICAgKiBMb2NhbCBob3N0bmFtZSBvciBzaW1pbGFyLCBzZWUgbm90ZSBiZWxvdy5cbiAgICAqL1xuICAgIE5FVF9IT1NUX05BTUU6ICduZXQuaG9zdC5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBpbnRlcm5ldCBjb25uZWN0aW9uIHR5cGUgY3VycmVudGx5IGJlaW5nIHVzZWQgYnkgdGhlIGhvc3QuXG4gICAgKi9cbiAgICBORVRfSE9TVF9DT05ORUNUSU9OX1RZUEU6ICduZXQuaG9zdC5jb25uZWN0aW9uLnR5cGUnLFxuICAgIC8qKlxuICAgICogVGhpcyBkZXNjcmliZXMgbW9yZSBkZXRhaWxzIHJlZ2FyZGluZyB0aGUgY29ubmVjdGlvbi50eXBlLiBJdCBtYXkgYmUgdGhlIHR5cGUgb2YgY2VsbCB0ZWNobm9sb2d5IGNvbm5lY3Rpb24sIGJ1dCBpdCBjb3VsZCBiZSB1c2VkIGZvciBkZXNjcmliaW5nIGRldGFpbHMgYWJvdXQgYSB3aWZpIGNvbm5lY3Rpb24uXG4gICAgKi9cbiAgICBORVRfSE9TVF9DT05ORUNUSU9OX1NVQlRZUEU6ICduZXQuaG9zdC5jb25uZWN0aW9uLnN1YnR5cGUnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIG1vYmlsZSBjYXJyaWVyLlxuICAgICovXG4gICAgTkVUX0hPU1RfQ0FSUklFUl9OQU1FOiAnbmV0Lmhvc3QuY2Fycmllci5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBtb2JpbGUgY2FycmllciBjb3VudHJ5IGNvZGUuXG4gICAgKi9cbiAgICBORVRfSE9TVF9DQVJSSUVSX01DQzogJ25ldC5ob3N0LmNhcnJpZXIubWNjJyxcbiAgICAvKipcbiAgICAqIFRoZSBtb2JpbGUgY2FycmllciBuZXR3b3JrIGNvZGUuXG4gICAgKi9cbiAgICBORVRfSE9TVF9DQVJSSUVSX01OQzogJ25ldC5ob3N0LmNhcnJpZXIubW5jJyxcbiAgICAvKipcbiAgICAqIFRoZSBJU08gMzE2Ni0xIGFscGhhLTIgMi1jaGFyYWN0ZXIgY291bnRyeSBjb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgbW9iaWxlIGNhcnJpZXIgbmV0d29yay5cbiAgICAqL1xuICAgIE5FVF9IT1NUX0NBUlJJRVJfSUNDOiAnbmV0Lmhvc3QuY2Fycmllci5pY2MnLFxuICAgIC8qKlxuICAgICogVGhlIFtgc2VydmljZS5uYW1lYF0oLi4vLi4vcmVzb3VyY2Uvc2VtYW50aWNfY29udmVudGlvbnMvUkVBRE1FLm1kI3NlcnZpY2UpIG9mIHRoZSByZW1vdGUgc2VydmljZS4gU0hPVUxEIGJlIGVxdWFsIHRvIHRoZSBhY3R1YWwgYHNlcnZpY2UubmFtZWAgcmVzb3VyY2UgYXR0cmlidXRlIG9mIHRoZSByZW1vdGUgc2VydmljZSBpZiBhbnkuXG4gICAgKi9cbiAgICBQRUVSX1NFUlZJQ0U6ICdwZWVyLnNlcnZpY2UnLFxuICAgIC8qKlxuICAgICogVXNlcm5hbWUgb3IgY2xpZW50X2lkIGV4dHJhY3RlZCBmcm9tIHRoZSBhY2Nlc3MgdG9rZW4gb3IgW0F1dGhvcml6YXRpb25dKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM1I3NlY3Rpb24tNC4yKSBoZWFkZXIgaW4gdGhlIGluYm91bmQgcmVxdWVzdCBmcm9tIG91dHNpZGUgdGhlIHN5c3RlbS5cbiAgICAqL1xuICAgIEVORFVTRVJfSUQ6ICdlbmR1c2VyLmlkJyxcbiAgICAvKipcbiAgICAqIEFjdHVhbC9hc3N1bWVkIHJvbGUgdGhlIGNsaWVudCBpcyBtYWtpbmcgdGhlIHJlcXVlc3QgdW5kZXIgZXh0cmFjdGVkIGZyb20gdG9rZW4gb3IgYXBwbGljYXRpb24gc2VjdXJpdHkgY29udGV4dC5cbiAgICAqL1xuICAgIEVORFVTRVJfUk9MRTogJ2VuZHVzZXIucm9sZScsXG4gICAgLyoqXG4gICAgKiBTY29wZXMgb3IgZ3JhbnRlZCBhdXRob3JpdGllcyB0aGUgY2xpZW50IGN1cnJlbnRseSBwb3NzZXNzZXMgZXh0cmFjdGVkIGZyb20gdG9rZW4gb3IgYXBwbGljYXRpb24gc2VjdXJpdHkgY29udGV4dC4gVGhlIHZhbHVlIHdvdWxkIGNvbWUgZnJvbSB0aGUgc2NvcGUgYXNzb2NpYXRlZCB3aXRoIGFuIFtPQXV0aCAyLjAgQWNjZXNzIFRva2VuXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTMuMykgb3IgYW4gYXR0cmlidXRlIHZhbHVlIGluIGEgW1NBTUwgMi4wIEFzc2VydGlvbl0oaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcvc2VjdXJpdHkvc2FtbC9Qb3N0Mi4wL3NzdGMtc2FtbC10ZWNoLW92ZXJ2aWV3LTIuMC5odG1sKS5cbiAgICAqL1xuICAgIEVORFVTRVJfU0NPUEU6ICdlbmR1c2VyLnNjb3BlJyxcbiAgICAvKipcbiAgICAqIEN1cnJlbnQgJiMzNDttYW5hZ2VkJiMzNDsgdGhyZWFkIElEIChhcyBvcHBvc2VkIHRvIE9TIHRocmVhZCBJRCkuXG4gICAgKi9cbiAgICBUSFJFQURfSUQ6ICd0aHJlYWQuaWQnLFxuICAgIC8qKlxuICAgICogQ3VycmVudCB0aHJlYWQgbmFtZS5cbiAgICAqL1xuICAgIFRIUkVBRF9OQU1FOiAndGhyZWFkLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIG1ldGhvZCBvciBmdW5jdGlvbiBuYW1lLCBvciBlcXVpdmFsZW50ICh1c3VhbGx5IHJpZ2h0bW9zdCBwYXJ0IG9mIHRoZSBjb2RlIHVuaXQmIzM5O3MgbmFtZSkuXG4gICAgKi9cbiAgICBDT0RFX0ZVTkNUSU9OOiAnY29kZS5mdW5jdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgJiMzNDtuYW1lc3BhY2UmIzM0OyB3aXRoaW4gd2hpY2ggYGNvZGUuZnVuY3Rpb25gIGlzIGRlZmluZWQuIFVzdWFsbHkgdGhlIHF1YWxpZmllZCBjbGFzcyBvciBtb2R1bGUgbmFtZSwgc3VjaCB0aGF0IGBjb2RlLm5hbWVzcGFjZWAgKyBzb21lIHNlcGFyYXRvciArIGBjb2RlLmZ1bmN0aW9uYCBmb3JtIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjb2RlIHVuaXQuXG4gICAgKi9cbiAgICBDT0RFX05BTUVTUEFDRTogJ2NvZGUubmFtZXNwYWNlJyxcbiAgICAvKipcbiAgICAqIFRoZSBzb3VyY2UgY29kZSBmaWxlIG5hbWUgdGhhdCBpZGVudGlmaWVzIHRoZSBjb2RlIHVuaXQgYXMgdW5pcXVlbHkgYXMgcG9zc2libGUgKHByZWZlcmFibHkgYW4gYWJzb2x1dGUgZmlsZSBwYXRoKS5cbiAgICAqL1xuICAgIENPREVfRklMRVBBVEg6ICdjb2RlLmZpbGVwYXRoJyxcbiAgICAvKipcbiAgICAqIFRoZSBsaW5lIG51bWJlciBpbiBgY29kZS5maWxlcGF0aGAgYmVzdCByZXByZXNlbnRpbmcgdGhlIG9wZXJhdGlvbi4gSXQgU0hPVUxEIHBvaW50IHdpdGhpbiB0aGUgY29kZSB1bml0IG5hbWVkIGluIGBjb2RlLmZ1bmN0aW9uYC5cbiAgICAqL1xuICAgIENPREVfTElORU5POiAnY29kZS5saW5lbm8nLFxuICAgIC8qKlxuICAgICogSFRUUCByZXF1ZXN0IG1ldGhvZC5cbiAgICAqL1xuICAgIEhUVFBfTUVUSE9EOiAnaHR0cC5tZXRob2QnLFxuICAgIC8qKlxuICAgICogRnVsbCBIVFRQIHJlcXVlc3QgVVJMIGluIHRoZSBmb3JtIGBzY2hlbWU6Ly9ob3N0Wzpwb3J0XS9wYXRoP3F1ZXJ5WyNmcmFnbWVudF1gLiBVc3VhbGx5IHRoZSBmcmFnbWVudCBpcyBub3QgdHJhbnNtaXR0ZWQgb3ZlciBIVFRQLCBidXQgaWYgaXQgaXMga25vd24sIGl0IHNob3VsZCBiZSBpbmNsdWRlZCBuZXZlcnRoZWxlc3MuXG4gICAgKlxuICAgICogTm90ZTogYGh0dHAudXJsYCBNVVNUIE5PVCBjb250YWluIGNyZWRlbnRpYWxzIHBhc3NlZCB2aWEgVVJMIGluIGZvcm0gb2YgYGh0dHBzOi8vdXNlcm5hbWU6cGFzc3dvcmRAd3d3LmV4YW1wbGUuY29tL2AuIEluIHN1Y2ggY2FzZSB0aGUgYXR0cmlidXRlJiMzOTtzIHZhbHVlIHNob3VsZCBiZSBgaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vYC5cbiAgICAqL1xuICAgIEhUVFBfVVJMOiAnaHR0cC51cmwnLFxuICAgIC8qKlxuICAgICogVGhlIGZ1bGwgcmVxdWVzdCB0YXJnZXQgYXMgcGFzc2VkIGluIGEgSFRUUCByZXF1ZXN0IGxpbmUgb3IgZXF1aXZhbGVudC5cbiAgICAqL1xuICAgIEhUVFBfVEFSR0VUOiAnaHR0cC50YXJnZXQnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBbSFRUUCBob3N0IGhlYWRlcl0oaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi01LjQpLiBBbiBlbXB0eSBIb3N0IGhlYWRlciBzaG91bGQgYWxzbyBiZSByZXBvcnRlZCwgc2VlIG5vdGUuXG4gICAgKlxuICAgICogTm90ZTogV2hlbiB0aGUgaGVhZGVyIGlzIHByZXNlbnQgYnV0IGVtcHR5IHRoZSBhdHRyaWJ1dGUgU0hPVUxEIGJlIHNldCB0byB0aGUgZW1wdHkgc3RyaW5nLiBOb3RlIHRoYXQgdGhpcyBpcyBhIHZhbGlkIHNpdHVhdGlvbiB0aGF0IGlzIGV4cGVjdGVkIGluIGNlcnRhaW4gY2FzZXMsIGFjY29yZGluZyB0aGUgYWZvcmVtZW50aW9uZWQgW3NlY3Rpb24gb2YgUkZDIDcyMzBdKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tNS40KS4gV2hlbiB0aGUgaGVhZGVyIGlzIG5vdCBzZXQgdGhlIGF0dHJpYnV0ZSBNVVNUIE5PVCBiZSBzZXQuXG4gICAgKi9cbiAgICBIVFRQX0hPU1Q6ICdodHRwLmhvc3QnLFxuICAgIC8qKlxuICAgICogVGhlIFVSSSBzY2hlbWUgaWRlbnRpZnlpbmcgdGhlIHVzZWQgcHJvdG9jb2wuXG4gICAgKi9cbiAgICBIVFRQX1NDSEVNRTogJ2h0dHAuc2NoZW1lJyxcbiAgICAvKipcbiAgICAqIFtIVFRQIHJlc3BvbnNlIHN0YXR1cyBjb2RlXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYpLlxuICAgICovXG4gICAgSFRUUF9TVEFUVVNfQ09ERTogJ2h0dHAuc3RhdHVzX2NvZGUnLFxuICAgIC8qKlxuICAgICogS2luZCBvZiBIVFRQIHByb3RvY29sIHVzZWQuXG4gICAgKlxuICAgICogTm90ZTogSWYgYG5ldC50cmFuc3BvcnRgIGlzIG5vdCBzcGVjaWZpZWQsIGl0IGNhbiBiZSBhc3N1bWVkIHRvIGJlIGBJUC5UQ1BgIGV4Y2VwdCBpZiBgaHR0cC5mbGF2b3JgIGlzIGBRVUlDYCwgaW4gd2hpY2ggY2FzZSBgSVAuVURQYCBpcyBhc3N1bWVkLlxuICAgICovXG4gICAgSFRUUF9GTEFWT1I6ICdodHRwLmZsYXZvcicsXG4gICAgLyoqXG4gICAgKiBWYWx1ZSBvZiB0aGUgW0hUVFAgVXNlci1BZ2VudF0oaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi01LjUuMykgaGVhZGVyIHNlbnQgYnkgdGhlIGNsaWVudC5cbiAgICAqL1xuICAgIEhUVFBfVVNFUl9BR0VOVDogJ2h0dHAudXNlcl9hZ2VudCcsXG4gICAgLyoqXG4gICAgKiBUaGUgc2l6ZSBvZiB0aGUgcmVxdWVzdCBwYXlsb2FkIGJvZHkgaW4gYnl0ZXMuIFRoaXMgaXMgdGhlIG51bWJlciBvZiBieXRlcyB0cmFuc2ZlcnJlZCBleGNsdWRpbmcgaGVhZGVycyBhbmQgaXMgb2Z0ZW4sIGJ1dCBub3QgYWx3YXlzLCBwcmVzZW50IGFzIHRoZSBbQ29udGVudC1MZW5ndGhdKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tMy4zLjIpIGhlYWRlci4gRm9yIHJlcXVlc3RzIHVzaW5nIHRyYW5zcG9ydCBlbmNvZGluZywgdGhpcyBzaG91bGQgYmUgdGhlIGNvbXByZXNzZWQgc2l6ZS5cbiAgICAqL1xuICAgIEhUVFBfUkVRVUVTVF9DT05URU5UX0xFTkdUSDogJ2h0dHAucmVxdWVzdF9jb250ZW50X2xlbmd0aCcsXG4gICAgLyoqXG4gICAgKiBUaGUgc2l6ZSBvZiB0aGUgdW5jb21wcmVzc2VkIHJlcXVlc3QgcGF5bG9hZCBib2R5IGFmdGVyIHRyYW5zcG9ydCBkZWNvZGluZy4gTm90IHNldCBpZiB0cmFuc3BvcnQgZW5jb2Rpbmcgbm90IHVzZWQuXG4gICAgKi9cbiAgICBIVFRQX1JFUVVFU1RfQ09OVEVOVF9MRU5HVEhfVU5DT01QUkVTU0VEOiAnaHR0cC5yZXF1ZXN0X2NvbnRlbnRfbGVuZ3RoX3VuY29tcHJlc3NlZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgc2l6ZSBvZiB0aGUgcmVzcG9uc2UgcGF5bG9hZCBib2R5IGluIGJ5dGVzLiBUaGlzIGlzIHRoZSBudW1iZXIgb2YgYnl0ZXMgdHJhbnNmZXJyZWQgZXhjbHVkaW5nIGhlYWRlcnMgYW5kIGlzIG9mdGVuLCBidXQgbm90IGFsd2F5cywgcHJlc2VudCBhcyB0aGUgW0NvbnRlbnQtTGVuZ3RoXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMy4yKSBoZWFkZXIuIEZvciByZXF1ZXN0cyB1c2luZyB0cmFuc3BvcnQgZW5jb2RpbmcsIHRoaXMgc2hvdWxkIGJlIHRoZSBjb21wcmVzc2VkIHNpemUuXG4gICAgKi9cbiAgICBIVFRQX1JFU1BPTlNFX0NPTlRFTlRfTEVOR1RIOiAnaHR0cC5yZXNwb25zZV9jb250ZW50X2xlbmd0aCcsXG4gICAgLyoqXG4gICAgKiBUaGUgc2l6ZSBvZiB0aGUgdW5jb21wcmVzc2VkIHJlc3BvbnNlIHBheWxvYWQgYm9keSBhZnRlciB0cmFuc3BvcnQgZGVjb2RpbmcuIE5vdCBzZXQgaWYgdHJhbnNwb3J0IGVuY29kaW5nIG5vdCB1c2VkLlxuICAgICovXG4gICAgSFRUUF9SRVNQT05TRV9DT05URU5UX0xFTkdUSF9VTkNPTVBSRVNTRUQ6ICdodHRwLnJlc3BvbnNlX2NvbnRlbnRfbGVuZ3RoX3VuY29tcHJlc3NlZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgcHJpbWFyeSBzZXJ2ZXIgbmFtZSBvZiB0aGUgbWF0Y2hlZCB2aXJ0dWFsIGhvc3QuIFRoaXMgc2hvdWxkIGJlIG9idGFpbmVkIHZpYSBjb25maWd1cmF0aW9uLiBJZiBubyBzdWNoIGNvbmZpZ3VyYXRpb24gY2FuIGJlIG9idGFpbmVkLCB0aGlzIGF0dHJpYnV0ZSBNVVNUIE5PVCBiZSBzZXQgKCBgbmV0Lmhvc3QubmFtZWAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCkuXG4gICAgKlxuICAgICogTm90ZTogYGh0dHAudXJsYCBpcyB1c3VhbGx5IG5vdCByZWFkaWx5IGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyIHNpZGUgYnV0IHdvdWxkIGhhdmUgdG8gYmUgYXNzZW1ibGVkIGluIGEgY3VtYmVyc29tZSBhbmQgc29tZXRpbWVzIGxvc3N5IHByb2Nlc3MgZnJvbSBvdGhlciBpbmZvcm1hdGlvbiAoc2VlIGUuZy4gb3Blbi10ZWxlbWV0cnkvb3BlbnRlbGVtZXRyeS1weXRob24vcHVsbC8xNDgpLiBJdCBpcyB0aHVzIHByZWZlcnJlZCB0byBzdXBwbHkgdGhlIHJhdyBkYXRhIHRoYXQgaXMgYXZhaWxhYmxlLlxuICAgICovXG4gICAgSFRUUF9TRVJWRVJfTkFNRTogJ2h0dHAuc2VydmVyX25hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIG1hdGNoZWQgcm91dGUgKHBhdGggdGVtcGxhdGUpLlxuICAgICovXG4gICAgSFRUUF9ST1VURTogJ2h0dHAucm91dGUnLFxuICAgIC8qKlxuICAgICogVGhlIElQIGFkZHJlc3Mgb2YgdGhlIG9yaWdpbmFsIGNsaWVudCBiZWhpbmQgYWxsIHByb3hpZXMsIGlmIGtub3duIChlLmcuIGZyb20gW1gtRm9yd2FyZGVkLUZvcl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9IZWFkZXJzL1gtRm9yd2FyZGVkLUZvcikpLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgaXMgbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIGFzIGBuZXQucGVlci5pcGAsIHdoaWNoIHdvdWxkXG4gIGlkZW50aWZ5IHRoZSBuZXR3b3JrLWxldmVsIHBlZXIsIHdoaWNoIG1heSBiZSBhIHByb3h5LlxuICBcbiAgVGhpcyBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB3aGVuIGEgc291cmNlIG9mIGluZm9ybWF0aW9uIGRpZmZlcmVudFxuICBmcm9tIHRoZSBvbmUgdXNlZCBmb3IgYG5ldC5wZWVyLmlwYCwgaXMgYXZhaWxhYmxlIGV2ZW4gaWYgdGhhdCBvdGhlclxuICBzb3VyY2UganVzdCBjb25maXJtcyB0aGUgc2FtZSB2YWx1ZSBhcyBgbmV0LnBlZXIuaXBgLlxuICBSYXRpb25hbGU6IEZvciBgbmV0LnBlZXIuaXBgLCBvbmUgdHlwaWNhbGx5IGRvZXMgbm90IGtub3cgaWYgaXRcbiAgY29tZXMgZnJvbSBhIHByb3h5LCByZXZlcnNlIHByb3h5LCBvciB0aGUgYWN0dWFsIGNsaWVudC4gU2V0dGluZ1xuICBgaHR0cC5jbGllbnRfaXBgIHdoZW4gaXQmIzM5O3MgdGhlIHNhbWUgYXMgYG5ldC5wZWVyLmlwYCBtZWFucyB0aGF0XG4gIG9uZSBpcyBhdCBsZWFzdCBzb21ld2hhdCBjb25maWRlbnQgdGhhdCB0aGUgYWRkcmVzcyBpcyBub3QgdGhhdCBvZlxuICB0aGUgY2xvc2VzdCBwcm94eS5cbiAgICAqL1xuICAgIEhUVFBfQ0xJRU5UX0lQOiAnaHR0cC5jbGllbnRfaXAnLFxuICAgIC8qKlxuICAgICogVGhlIGtleXMgaW4gdGhlIGBSZXF1ZXN0SXRlbXNgIG9iamVjdCBmaWVsZC5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9UQUJMRV9OQU1FUzogJ2F3cy5keW5hbW9kYi50YWJsZV9uYW1lcycsXG4gICAgLyoqXG4gICAgKiBUaGUgSlNPTi1zZXJpYWxpemVkIHZhbHVlIG9mIGVhY2ggaXRlbSBpbiB0aGUgYENvbnN1bWVkQ2FwYWNpdHlgIHJlc3BvbnNlIGZpZWxkLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX0NPTlNVTUVEX0NBUEFDSVRZOiAnYXdzLmR5bmFtb2RiLmNvbnN1bWVkX2NhcGFjaXR5JyxcbiAgICAvKipcbiAgICAqIFRoZSBKU09OLXNlcmlhbGl6ZWQgdmFsdWUgb2YgdGhlIGBJdGVtQ29sbGVjdGlvbk1ldHJpY3NgIHJlc3BvbnNlIGZpZWxkLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX0lURU1fQ09MTEVDVElPTl9NRVRSSUNTOiAnYXdzLmR5bmFtb2RiLml0ZW1fY29sbGVjdGlvbl9tZXRyaWNzJyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFByb3Zpc2lvbmVkVGhyb3VnaHB1dC5SZWFkQ2FwYWNpdHlVbml0c2AgcmVxdWVzdCBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfUFJPVklTSU9ORURfUkVBRF9DQVBBQ0lUWTogJ2F3cy5keW5hbW9kYi5wcm92aXNpb25lZF9yZWFkX2NhcGFjaXR5JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFByb3Zpc2lvbmVkVGhyb3VnaHB1dC5Xcml0ZUNhcGFjaXR5VW5pdHNgIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX1BST1ZJU0lPTkVEX1dSSVRFX0NBUEFDSVRZOiAnYXdzLmR5bmFtb2RiLnByb3Zpc2lvbmVkX3dyaXRlX2NhcGFjaXR5JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYENvbnNpc3RlbnRSZWFkYCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9DT05TSVNURU5UX1JFQUQ6ICdhd3MuZHluYW1vZGIuY29uc2lzdGVudF9yZWFkJyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFByb2plY3Rpb25FeHByZXNzaW9uYCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9QUk9KRUNUSU9OOiAnYXdzLmR5bmFtb2RiLnByb2plY3Rpb24nLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgTGltaXRgIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX0xJTUlUOiAnYXdzLmR5bmFtb2RiLmxpbWl0JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYEF0dHJpYnV0ZXNUb0dldGAgcmVxdWVzdCBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfQVRUUklCVVRFU19UT19HRVQ6ICdhd3MuZHluYW1vZGIuYXR0cmlidXRlc190b19nZXQnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgSW5kZXhOYW1lYCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9JTkRFWF9OQU1FOiAnYXdzLmR5bmFtb2RiLmluZGV4X25hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgU2VsZWN0YCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9TRUxFQ1Q6ICdhd3MuZHluYW1vZGIuc2VsZWN0JyxcbiAgICAvKipcbiAgICAqIFRoZSBKU09OLXNlcmlhbGl6ZWQgdmFsdWUgb2YgZWFjaCBpdGVtIG9mIHRoZSBgR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc2AgcmVxdWVzdCBmaWVsZC5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9HTE9CQUxfU0VDT05EQVJZX0lOREVYRVM6ICdhd3MuZHluYW1vZGIuZ2xvYmFsX3NlY29uZGFyeV9pbmRleGVzJyxcbiAgICAvKipcbiAgICAqIFRoZSBKU09OLXNlcmlhbGl6ZWQgdmFsdWUgb2YgZWFjaCBpdGVtIG9mIHRoZSBgTG9jYWxTZWNvbmRhcnlJbmRleGVzYCByZXF1ZXN0IGZpZWxkLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX0xPQ0FMX1NFQ09OREFSWV9JTkRFWEVTOiAnYXdzLmR5bmFtb2RiLmxvY2FsX3NlY29uZGFyeV9pbmRleGVzJyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYEV4Y2x1c2l2ZVN0YXJ0VGFibGVOYW1lYCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9FWENMVVNJVkVfU1RBUlRfVEFCTEU6ICdhd3MuZHluYW1vZGIuZXhjbHVzaXZlX3N0YXJ0X3RhYmxlJyxcbiAgICAvKipcbiAgICAqIFRoZSB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBgVGFibGVOYW1lc2AgcmVzcG9uc2UgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX1RBQkxFX0NPVU5UOiAnYXdzLmR5bmFtb2RiLnRhYmxlX2NvdW50JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFNjYW5JbmRleEZvcndhcmRgIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX1NDQU5fRk9SV0FSRDogJ2F3cy5keW5hbW9kYi5zY2FuX2ZvcndhcmQnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgU2VnbWVudGAgcmVxdWVzdCBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfU0VHTUVOVDogJ2F3cy5keW5hbW9kYi5zZWdtZW50JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFRvdGFsU2VnbWVudHNgIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX1RPVEFMX1NFR01FTlRTOiAnYXdzLmR5bmFtb2RiLnRvdGFsX3NlZ21lbnRzJyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYENvdW50YCByZXNwb25zZSBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfQ09VTlQ6ICdhd3MuZHluYW1vZGIuY291bnQnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgU2Nhbm5lZENvdW50YCByZXNwb25zZSBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfU0NBTk5FRF9DT1VOVDogJ2F3cy5keW5hbW9kYi5zY2FubmVkX2NvdW50JyxcbiAgICAvKipcbiAgICAqIFRoZSBKU09OLXNlcmlhbGl6ZWQgdmFsdWUgb2YgZWFjaCBpdGVtIGluIHRoZSBgQXR0cmlidXRlRGVmaW5pdGlvbnNgIHJlcXVlc3QgZmllbGQuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfQVRUUklCVVRFX0RFRklOSVRJT05TOiAnYXdzLmR5bmFtb2RiLmF0dHJpYnV0ZV9kZWZpbml0aW9ucycsXG4gICAgLyoqXG4gICAgKiBUaGUgSlNPTi1zZXJpYWxpemVkIHZhbHVlIG9mIGVhY2ggaXRlbSBpbiB0aGUgdGhlIGBHbG9iYWxTZWNvbmRhcnlJbmRleFVwZGF0ZXNgIHJlcXVlc3QgZmllbGQuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfR0xPQkFMX1NFQ09OREFSWV9JTkRFWF9VUERBVEVTOiAnYXdzLmR5bmFtb2RiLmdsb2JhbF9zZWNvbmRhcnlfaW5kZXhfdXBkYXRlcycsXG4gICAgLyoqXG4gICAgKiBBIHN0cmluZyBpZGVudGlmeWluZyB0aGUgbWVzc2FnaW5nIHN5c3RlbS5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19TWVNURU06ICdtZXNzYWdpbmcuc3lzdGVtJyxcbiAgICAvKipcbiAgICAqIFRoZSBtZXNzYWdlIGRlc3RpbmF0aW9uIG5hbWUuIFRoaXMgbWlnaHQgYmUgZXF1YWwgdG8gdGhlIHNwYW4gbmFtZSBidXQgaXMgcmVxdWlyZWQgbmV2ZXJ0aGVsZXNzLlxuICAgICovXG4gICAgTUVTU0FHSU5HX0RFU1RJTkFUSU9OOiAnbWVzc2FnaW5nLmRlc3RpbmF0aW9uJyxcbiAgICAvKipcbiAgICAqIFRoZSBraW5kIG9mIG1lc3NhZ2UgZGVzdGluYXRpb24uXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfREVTVElOQVRJT05fS0lORDogJ21lc3NhZ2luZy5kZXN0aW5hdGlvbl9raW5kJyxcbiAgICAvKipcbiAgICAqIEEgYm9vbGVhbiB0aGF0IGlzIHRydWUgaWYgdGhlIG1lc3NhZ2UgZGVzdGluYXRpb24gaXMgdGVtcG9yYXJ5LlxuICAgICovXG4gICAgTUVTU0FHSU5HX1RFTVBfREVTVElOQVRJT046ICdtZXNzYWdpbmcudGVtcF9kZXN0aW5hdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgdHJhbnNwb3J0IHByb3RvY29sLlxuICAgICovXG4gICAgTUVTU0FHSU5HX1BST1RPQ09MOiAnbWVzc2FnaW5nLnByb3RvY29sJyxcbiAgICAvKipcbiAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSB0cmFuc3BvcnQgcHJvdG9jb2wuXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfUFJPVE9DT0xfVkVSU0lPTjogJ21lc3NhZ2luZy5wcm90b2NvbF92ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIENvbm5lY3Rpb24gc3RyaW5nLlxuICAgICovXG4gICAgTUVTU0FHSU5HX1VSTDogJ21lc3NhZ2luZy51cmwnLFxuICAgIC8qKlxuICAgICogQSB2YWx1ZSB1c2VkIGJ5IHRoZSBtZXNzYWdpbmcgc3lzdGVtIGFzIGFuIGlkZW50aWZpZXIgZm9yIHRoZSBtZXNzYWdlLCByZXByZXNlbnRlZCBhcyBhIHN0cmluZy5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19NRVNTQUdFX0lEOiAnbWVzc2FnaW5nLm1lc3NhZ2VfaWQnLFxuICAgIC8qKlxuICAgICogVGhlIFtjb252ZXJzYXRpb24gSURdKCNjb252ZXJzYXRpb25zKSBpZGVudGlmeWluZyB0aGUgY29udmVyc2F0aW9uIHRvIHdoaWNoIHRoZSBtZXNzYWdlIGJlbG9uZ3MsIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nLiBTb21ldGltZXMgY2FsbGVkICYjMzQ7Q29ycmVsYXRpb24gSUQmIzM0Oy5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19DT05WRVJTQVRJT05fSUQ6ICdtZXNzYWdpbmcuY29udmVyc2F0aW9uX2lkJyxcbiAgICAvKipcbiAgICAqIFRoZSAodW5jb21wcmVzc2VkKSBzaXplIG9mIHRoZSBtZXNzYWdlIHBheWxvYWQgaW4gYnl0ZXMuIEFsc28gdXNlIHRoaXMgYXR0cmlidXRlIGlmIGl0IGlzIHVua25vd24gd2hldGhlciB0aGUgY29tcHJlc3NlZCBvciB1bmNvbXByZXNzZWQgcGF5bG9hZCBzaXplIGlzIHJlcG9ydGVkLlxuICAgICovXG4gICAgTUVTU0FHSU5HX01FU1NBR0VfUEFZTE9BRF9TSVpFX0JZVEVTOiAnbWVzc2FnaW5nLm1lc3NhZ2VfcGF5bG9hZF9zaXplX2J5dGVzJyxcbiAgICAvKipcbiAgICAqIFRoZSBjb21wcmVzc2VkIHNpemUgb2YgdGhlIG1lc3NhZ2UgcGF5bG9hZCBpbiBieXRlcy5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19NRVNTQUdFX1BBWUxPQURfQ09NUFJFU1NFRF9TSVpFX0JZVEVTOiAnbWVzc2FnaW5nLm1lc3NhZ2VfcGF5bG9hZF9jb21wcmVzc2VkX3NpemVfYnl0ZXMnLFxuICAgIC8qKlxuICAgICogQSBzdHJpbmcgaWRlbnRpZnlpbmcgdGhlIGtpbmQgb2YgbWVzc2FnZSBjb25zdW1wdGlvbiBhcyBkZWZpbmVkIGluIHRoZSBbT3BlcmF0aW9uIG5hbWVzXSgjb3BlcmF0aW9uLW5hbWVzKSBzZWN0aW9uIGFib3ZlLiBJZiB0aGUgb3BlcmF0aW9uIGlzICYjMzQ7c2VuZCYjMzQ7LCB0aGlzIGF0dHJpYnV0ZSBNVVNUIE5PVCBiZSBzZXQsIHNpbmNlIHRoZSBvcGVyYXRpb24gY2FuIGJlIGluZmVycmVkIGZyb20gdGhlIHNwYW4ga2luZCBpbiB0aGF0IGNhc2UuXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfT1BFUkFUSU9OOiAnbWVzc2FnaW5nLm9wZXJhdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgaWRlbnRpZmllciBmb3IgdGhlIGNvbnN1bWVyIHJlY2VpdmluZyBhIG1lc3NhZ2UuIEZvciBLYWZrYSwgc2V0IGl0IHRvIGB7bWVzc2FnaW5nLmthZmthLmNvbnN1bWVyX2dyb3VwfSAtIHttZXNzYWdpbmcua2Fma2EuY2xpZW50X2lkfWAsIGlmIGJvdGggYXJlIHByZXNlbnQsIG9yIG9ubHkgYG1lc3NhZ2luZy5rYWZrYS5jb25zdW1lcl9ncm91cGAuIEZvciBicm9rZXJzLCBzdWNoIGFzIFJhYmJpdE1RIGFuZCBBcnRlbWlzLCBzZXQgaXQgdG8gdGhlIGBjbGllbnRfaWRgIG9mIHRoZSBjbGllbnQgY29uc3VtaW5nIHRoZSBtZXNzYWdlLlxuICAgICovXG4gICAgTUVTU0FHSU5HX0NPTlNVTUVSX0lEOiAnbWVzc2FnaW5nLmNvbnN1bWVyX2lkJyxcbiAgICAvKipcbiAgICAqIFJhYmJpdE1RIG1lc3NhZ2Ugcm91dGluZyBrZXkuXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfUkFCQklUTVFfUk9VVElOR19LRVk6ICdtZXNzYWdpbmcucmFiYml0bXEucm91dGluZ19rZXknLFxuICAgIC8qKlxuICAgICogTWVzc2FnZSBrZXlzIGluIEthZmthIGFyZSB1c2VkIGZvciBncm91cGluZyBhbGlrZSBtZXNzYWdlcyB0byBlbnN1cmUgdGhleSYjMzk7cmUgcHJvY2Vzc2VkIG9uIHRoZSBzYW1lIHBhcnRpdGlvbi4gVGhleSBkaWZmZXIgZnJvbSBgbWVzc2FnaW5nLm1lc3NhZ2VfaWRgIGluIHRoYXQgdGhleSYjMzk7cmUgbm90IHVuaXF1ZS4gSWYgdGhlIGtleSBpcyBgbnVsbGAsIHRoZSBhdHRyaWJ1dGUgTVVTVCBOT1QgYmUgc2V0LlxuICAgICpcbiAgICAqIE5vdGU6IElmIHRoZSBrZXkgdHlwZSBpcyBub3Qgc3RyaW5nLCBpdCYjMzk7cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gaGFzIHRvIGJlIHN1cHBsaWVkIGZvciB0aGUgYXR0cmlidXRlLiBJZiB0aGUga2V5IGhhcyBubyB1bmFtYmlndW91cywgY2Fub25pY2FsIHN0cmluZyBmb3JtLCBkb24mIzM5O3QgaW5jbHVkZSBpdHMgdmFsdWUuXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfS0FGS0FfTUVTU0FHRV9LRVk6ICdtZXNzYWdpbmcua2Fma2EubWVzc2FnZV9rZXknLFxuICAgIC8qKlxuICAgICogTmFtZSBvZiB0aGUgS2Fma2EgQ29uc3VtZXIgR3JvdXAgdGhhdCBpcyBoYW5kbGluZyB0aGUgbWVzc2FnZS4gT25seSBhcHBsaWVzIHRvIGNvbnN1bWVycywgbm90IHByb2R1Y2Vycy5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19LQUZLQV9DT05TVU1FUl9HUk9VUDogJ21lc3NhZ2luZy5rYWZrYS5jb25zdW1lcl9ncm91cCcsXG4gICAgLyoqXG4gICAgKiBDbGllbnQgSWQgZm9yIHRoZSBDb25zdW1lciBvciBQcm9kdWNlciB0aGF0IGlzIGhhbmRsaW5nIHRoZSBtZXNzYWdlLlxuICAgICovXG4gICAgTUVTU0FHSU5HX0tBRktBX0NMSUVOVF9JRDogJ21lc3NhZ2luZy5rYWZrYS5jbGllbnRfaWQnLFxuICAgIC8qKlxuICAgICogUGFydGl0aW9uIHRoZSBtZXNzYWdlIGlzIHNlbnQgdG8uXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfS0FGS0FfUEFSVElUSU9OOiAnbWVzc2FnaW5nLmthZmthLnBhcnRpdGlvbicsXG4gICAgLyoqXG4gICAgKiBBIGJvb2xlYW4gdGhhdCBpcyB0cnVlIGlmIHRoZSBtZXNzYWdlIGlzIGEgdG9tYnN0b25lLlxuICAgICovXG4gICAgTUVTU0FHSU5HX0tBRktBX1RPTUJTVE9ORTogJ21lc3NhZ2luZy5rYWZrYS50b21ic3RvbmUnLFxuICAgIC8qKlxuICAgICogQSBzdHJpbmcgaWRlbnRpZnlpbmcgdGhlIHJlbW90aW5nIHN5c3RlbS5cbiAgICAqL1xuICAgIFJQQ19TWVNURU06ICdycGMuc3lzdGVtJyxcbiAgICAvKipcbiAgICAqIFRoZSBmdWxsIChsb2dpY2FsKSBuYW1lIG9mIHRoZSBzZXJ2aWNlIGJlaW5nIGNhbGxlZCwgaW5jbHVkaW5nIGl0cyBwYWNrYWdlIG5hbWUsIGlmIGFwcGxpY2FibGUuXG4gICAgKlxuICAgICogTm90ZTogVGhpcyBpcyB0aGUgbG9naWNhbCBuYW1lIG9mIHRoZSBzZXJ2aWNlIGZyb20gdGhlIFJQQyBpbnRlcmZhY2UgcGVyc3BlY3RpdmUsIHdoaWNoIGNhbiBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgbmFtZSBvZiBhbnkgaW1wbGVtZW50aW5nIGNsYXNzLiBUaGUgYGNvZGUubmFtZXNwYWNlYCBhdHRyaWJ1dGUgbWF5IGJlIHVzZWQgdG8gc3RvcmUgdGhlIGxhdHRlciAoZGVzcGl0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGl0IG1heSBpbmNsdWRlIGEgY2xhc3MgbmFtZTsgZS5nLiwgY2xhc3Mgd2l0aCBtZXRob2QgYWN0dWFsbHkgZXhlY3V0aW5nIHRoZSBjYWxsIG9uIHRoZSBzZXJ2ZXIgc2lkZSwgUlBDIGNsaWVudCBzdHViIGNsYXNzIG9uIHRoZSBjbGllbnQgc2lkZSkuXG4gICAgKi9cbiAgICBSUENfU0VSVklDRTogJ3JwYy5zZXJ2aWNlJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSAobG9naWNhbCkgbWV0aG9kIGJlaW5nIGNhbGxlZCwgbXVzdCBiZSBlcXVhbCB0byB0aGUgJG1ldGhvZCBwYXJ0IGluIHRoZSBzcGFuIG5hbWUuXG4gICAgKlxuICAgICogTm90ZTogVGhpcyBpcyB0aGUgbG9naWNhbCBuYW1lIG9mIHRoZSBtZXRob2QgZnJvbSB0aGUgUlBDIGludGVyZmFjZSBwZXJzcGVjdGl2ZSwgd2hpY2ggY2FuIGJlIGRpZmZlcmVudCBmcm9tIHRoZSBuYW1lIG9mIGFueSBpbXBsZW1lbnRpbmcgbWV0aG9kL2Z1bmN0aW9uLiBUaGUgYGNvZGUuZnVuY3Rpb25gIGF0dHJpYnV0ZSBtYXkgYmUgdXNlZCB0byBzdG9yZSB0aGUgbGF0dGVyIChlLmcuLCBtZXRob2QgYWN0dWFsbHkgZXhlY3V0aW5nIHRoZSBjYWxsIG9uIHRoZSBzZXJ2ZXIgc2lkZSwgUlBDIGNsaWVudCBzdHViIG1ldGhvZCBvbiB0aGUgY2xpZW50IHNpZGUpLlxuICAgICovXG4gICAgUlBDX01FVEhPRDogJ3JwYy5tZXRob2QnLFxuICAgIC8qKlxuICAgICogVGhlIFtudW1lcmljIHN0YXR1cyBjb2RlXShodHRwczovL2dpdGh1Yi5jb20vZ3JwYy9ncnBjL2Jsb2IvdjEuMzMuMi9kb2Mvc3RhdHVzY29kZXMubWQpIG9mIHRoZSBnUlBDIHJlcXVlc3QuXG4gICAgKi9cbiAgICBSUENfR1JQQ19TVEFUVVNfQ09ERTogJ3JwYy5ncnBjLnN0YXR1c19jb2RlJyxcbiAgICAvKipcbiAgICAqIFByb3RvY29sIHZlcnNpb24gYXMgaW4gYGpzb25ycGNgIHByb3BlcnR5IG9mIHJlcXVlc3QvcmVzcG9uc2UuIFNpbmNlIEpTT04tUlBDIDEuMCBkb2VzIG5vdCBzcGVjaWZ5IHRoaXMsIHRoZSB2YWx1ZSBjYW4gYmUgb21pdHRlZC5cbiAgICAqL1xuICAgIFJQQ19KU09OUlBDX1ZFUlNJT046ICdycGMuanNvbnJwYy52ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIGBpZGAgcHJvcGVydHkgb2YgcmVxdWVzdCBvciByZXNwb25zZS4gU2luY2UgcHJvdG9jb2wgYWxsb3dzIGlkIHRvIGJlIGludCwgc3RyaW5nLCBgbnVsbGAgb3IgbWlzc2luZyAoZm9yIG5vdGlmaWNhdGlvbnMpLCB2YWx1ZSBpcyBleHBlY3RlZCB0byBiZSBjYXN0IHRvIHN0cmluZyBmb3Igc2ltcGxpY2l0eS4gVXNlIGVtcHR5IHN0cmluZyBpbiBjYXNlIG9mIGBudWxsYCB2YWx1ZS4gT21pdCBlbnRpcmVseSBpZiB0aGlzIGlzIGEgbm90aWZpY2F0aW9uLlxuICAgICovXG4gICAgUlBDX0pTT05SUENfUkVRVUVTVF9JRDogJ3JwYy5qc29ucnBjLnJlcXVlc3RfaWQnLFxuICAgIC8qKlxuICAgICogYGVycm9yLmNvZGVgIHByb3BlcnR5IG9mIHJlc3BvbnNlIGlmIGl0IGlzIGFuIGVycm9yIHJlc3BvbnNlLlxuICAgICovXG4gICAgUlBDX0pTT05SUENfRVJST1JfQ09ERTogJ3JwYy5qc29ucnBjLmVycm9yX2NvZGUnLFxuICAgIC8qKlxuICAgICogYGVycm9yLm1lc3NhZ2VgIHByb3BlcnR5IG9mIHJlc3BvbnNlIGlmIGl0IGlzIGFuIGVycm9yIHJlc3BvbnNlLlxuICAgICovXG4gICAgUlBDX0pTT05SUENfRVJST1JfTUVTU0FHRTogJ3JwYy5qc29ucnBjLmVycm9yX21lc3NhZ2UnLFxuICAgIC8qKlxuICAgICogV2hldGhlciB0aGlzIGlzIGEgcmVjZWl2ZWQgb3Igc2VudCBtZXNzYWdlLlxuICAgICovXG4gICAgTUVTU0FHRV9UWVBFOiAnbWVzc2FnZS50eXBlJyxcbiAgICAvKipcbiAgICAqIE1VU1QgYmUgY2FsY3VsYXRlZCBhcyB0d28gZGlmZmVyZW50IGNvdW50ZXJzIHN0YXJ0aW5nIGZyb20gYDFgIG9uZSBmb3Igc2VudCBtZXNzYWdlcyBhbmQgb25lIGZvciByZWNlaXZlZCBtZXNzYWdlLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgd2F5IHdlIGd1YXJhbnRlZSB0aGF0IHRoZSB2YWx1ZXMgd2lsbCBiZSBjb25zaXN0ZW50IGJldHdlZW4gZGlmZmVyZW50IGltcGxlbWVudGF0aW9ucy5cbiAgICAqL1xuICAgIE1FU1NBR0VfSUQ6ICdtZXNzYWdlLmlkJyxcbiAgICAvKipcbiAgICAqIENvbXByZXNzZWQgc2l6ZSBvZiB0aGUgbWVzc2FnZSBpbiBieXRlcy5cbiAgICAqL1xuICAgIE1FU1NBR0VfQ09NUFJFU1NFRF9TSVpFOiAnbWVzc2FnZS5jb21wcmVzc2VkX3NpemUnLFxuICAgIC8qKlxuICAgICogVW5jb21wcmVzc2VkIHNpemUgb2YgdGhlIG1lc3NhZ2UgaW4gYnl0ZXMuXG4gICAgKi9cbiAgICBNRVNTQUdFX1VOQ09NUFJFU1NFRF9TSVpFOiAnbWVzc2FnZS51bmNvbXByZXNzZWRfc2l6ZScsXG59O1xuZXhwb3J0IHZhciBEYlN5c3RlbVZhbHVlcyA9IHtcbiAgICAvKiogU29tZSBvdGhlciBTUUwgZGF0YWJhc2UuIEZhbGxiYWNrIG9ubHkuIFNlZSBub3Rlcy4gKi9cbiAgICBPVEhFUl9TUUw6ICdvdGhlcl9zcWwnLFxuICAgIC8qKiBNaWNyb3NvZnQgU1FMIFNlcnZlci4gKi9cbiAgICBNU1NRTDogJ21zc3FsJyxcbiAgICAvKiogTXlTUUwuICovXG4gICAgTVlTUUw6ICdteXNxbCcsXG4gICAgLyoqIE9yYWNsZSBEYXRhYmFzZS4gKi9cbiAgICBPUkFDTEU6ICdvcmFjbGUnLFxuICAgIC8qKiBJQk0gRGIyLiAqL1xuICAgIERCMjogJ2RiMicsXG4gICAgLyoqIFBvc3RncmVTUUwuICovXG4gICAgUE9TVEdSRVNRTDogJ3Bvc3RncmVzcWwnLFxuICAgIC8qKiBBbWF6b24gUmVkc2hpZnQuICovXG4gICAgUkVEU0hJRlQ6ICdyZWRzaGlmdCcsXG4gICAgLyoqIEFwYWNoZSBIaXZlLiAqL1xuICAgIEhJVkU6ICdoaXZlJyxcbiAgICAvKiogQ2xvdWRzY2FwZS4gKi9cbiAgICBDTE9VRFNDQVBFOiAnY2xvdWRzY2FwZScsXG4gICAgLyoqIEh5cGVyU1FMIERhdGFCYXNlLiAqL1xuICAgIEhTUUxEQjogJ2hzcWxkYicsXG4gICAgLyoqIFByb2dyZXNzIERhdGFiYXNlLiAqL1xuICAgIFBST0dSRVNTOiAncHJvZ3Jlc3MnLFxuICAgIC8qKiBTQVAgTWF4REIuICovXG4gICAgTUFYREI6ICdtYXhkYicsXG4gICAgLyoqIFNBUCBIQU5BLiAqL1xuICAgIEhBTkFEQjogJ2hhbmFkYicsXG4gICAgLyoqIEluZ3Jlcy4gKi9cbiAgICBJTkdSRVM6ICdpbmdyZXMnLFxuICAgIC8qKiBGaXJzdFNRTC4gKi9cbiAgICBGSVJTVFNRTDogJ2ZpcnN0c3FsJyxcbiAgICAvKiogRW50ZXJwcmlzZURCLiAqL1xuICAgIEVEQjogJ2VkYicsXG4gICAgLyoqIEludGVyU3lzdGVtcyBDYWNow6kuICovXG4gICAgQ0FDSEU6ICdjYWNoZScsXG4gICAgLyoqIEFkYWJhcyAoQWRhcHRhYmxlIERhdGFiYXNlIFN5c3RlbSkuICovXG4gICAgQURBQkFTOiAnYWRhYmFzJyxcbiAgICAvKiogRmlyZWJpcmQuICovXG4gICAgRklSRUJJUkQ6ICdmaXJlYmlyZCcsXG4gICAgLyoqIEFwYWNoZSBEZXJieS4gKi9cbiAgICBERVJCWTogJ2RlcmJ5JyxcbiAgICAvKiogRmlsZU1ha2VyLiAqL1xuICAgIEZJTEVNQUtFUjogJ2ZpbGVtYWtlcicsXG4gICAgLyoqIEluZm9ybWl4LiAqL1xuICAgIElORk9STUlYOiAnaW5mb3JtaXgnLFxuICAgIC8qKiBJbnN0YW50REIuICovXG4gICAgSU5TVEFOVERCOiAnaW5zdGFudGRiJyxcbiAgICAvKiogSW50ZXJCYXNlLiAqL1xuICAgIElOVEVSQkFTRTogJ2ludGVyYmFzZScsXG4gICAgLyoqIE1hcmlhREIuICovXG4gICAgTUFSSUFEQjogJ21hcmlhZGInLFxuICAgIC8qKiBOZXRlenphLiAqL1xuICAgIE5FVEVaWkE6ICduZXRlenphJyxcbiAgICAvKiogUGVydmFzaXZlIFBTUUwuICovXG4gICAgUEVSVkFTSVZFOiAncGVydmFzaXZlJyxcbiAgICAvKiogUG9pbnRCYXNlLiAqL1xuICAgIFBPSU5UQkFTRTogJ3BvaW50YmFzZScsXG4gICAgLyoqIFNRTGl0ZS4gKi9cbiAgICBTUUxJVEU6ICdzcWxpdGUnLFxuICAgIC8qKiBTeWJhc2UuICovXG4gICAgU1lCQVNFOiAnc3liYXNlJyxcbiAgICAvKiogVGVyYWRhdGEuICovXG4gICAgVEVSQURBVEE6ICd0ZXJhZGF0YScsXG4gICAgLyoqIFZlcnRpY2EuICovXG4gICAgVkVSVElDQTogJ3ZlcnRpY2EnLFxuICAgIC8qKiBIMi4gKi9cbiAgICBIMjogJ2gyJyxcbiAgICAvKiogQ29sZEZ1c2lvbiBJTVEuICovXG4gICAgQ09MREZVU0lPTjogJ2NvbGRmdXNpb24nLFxuICAgIC8qKiBBcGFjaGUgQ2Fzc2FuZHJhLiAqL1xuICAgIENBU1NBTkRSQTogJ2Nhc3NhbmRyYScsXG4gICAgLyoqIEFwYWNoZSBIQmFzZS4gKi9cbiAgICBIQkFTRTogJ2hiYXNlJyxcbiAgICAvKiogTW9uZ29EQi4gKi9cbiAgICBNT05HT0RCOiAnbW9uZ29kYicsXG4gICAgLyoqIFJlZGlzLiAqL1xuICAgIFJFRElTOiAncmVkaXMnLFxuICAgIC8qKiBDb3VjaGJhc2UuICovXG4gICAgQ09VQ0hCQVNFOiAnY291Y2hiYXNlJyxcbiAgICAvKiogQ291Y2hEQi4gKi9cbiAgICBDT1VDSERCOiAnY291Y2hkYicsXG4gICAgLyoqIE1pY3Jvc29mdCBBenVyZSBDb3Ntb3MgREIuICovXG4gICAgQ09TTU9TREI6ICdjb3Ntb3NkYicsXG4gICAgLyoqIEFtYXpvbiBEeW5hbW9EQi4gKi9cbiAgICBEWU5BTU9EQjogJ2R5bmFtb2RiJyxcbiAgICAvKiogTmVvNGouICovXG4gICAgTkVPNEo6ICduZW80aicsXG4gICAgLyoqIEFwYWNoZSBHZW9kZS4gKi9cbiAgICBHRU9ERTogJ2dlb2RlJyxcbiAgICAvKiogRWxhc3RpY3NlYXJjaC4gKi9cbiAgICBFTEFTVElDU0VBUkNIOiAnZWxhc3RpY3NlYXJjaCcsXG4gICAgLyoqIE1lbWNhY2hlZC4gKi9cbiAgICBNRU1DQUNIRUQ6ICdtZW1jYWNoZWQnLFxuICAgIC8qKiBDb2Nrcm9hY2hEQi4gKi9cbiAgICBDT0NLUk9BQ0hEQjogJ2NvY2tyb2FjaGRiJyxcbn07XG5leHBvcnQgdmFyIERiQ2Fzc2FuZHJhQ29uc2lzdGVuY3lMZXZlbFZhbHVlcyA9IHtcbiAgICAvKiogYWxsLiAqL1xuICAgIEFMTDogJ2FsbCcsXG4gICAgLyoqIGVhY2hfcXVvcnVtLiAqL1xuICAgIEVBQ0hfUVVPUlVNOiAnZWFjaF9xdW9ydW0nLFxuICAgIC8qKiBxdW9ydW0uICovXG4gICAgUVVPUlVNOiAncXVvcnVtJyxcbiAgICAvKiogbG9jYWxfcXVvcnVtLiAqL1xuICAgIExPQ0FMX1FVT1JVTTogJ2xvY2FsX3F1b3J1bScsXG4gICAgLyoqIG9uZS4gKi9cbiAgICBPTkU6ICdvbmUnLFxuICAgIC8qKiB0d28uICovXG4gICAgVFdPOiAndHdvJyxcbiAgICAvKiogdGhyZWUuICovXG4gICAgVEhSRUU6ICd0aHJlZScsXG4gICAgLyoqIGxvY2FsX29uZS4gKi9cbiAgICBMT0NBTF9PTkU6ICdsb2NhbF9vbmUnLFxuICAgIC8qKiBhbnkuICovXG4gICAgQU5ZOiAnYW55JyxcbiAgICAvKiogc2VyaWFsLiAqL1xuICAgIFNFUklBTDogJ3NlcmlhbCcsXG4gICAgLyoqIGxvY2FsX3NlcmlhbC4gKi9cbiAgICBMT0NBTF9TRVJJQUw6ICdsb2NhbF9zZXJpYWwnLFxufTtcbmV4cG9ydCB2YXIgRmFhc1RyaWdnZXJWYWx1ZXMgPSB7XG4gICAgLyoqIEEgcmVzcG9uc2UgdG8gc29tZSBkYXRhIHNvdXJjZSBvcGVyYXRpb24gc3VjaCBhcyBhIGRhdGFiYXNlIG9yIGZpbGVzeXN0ZW0gcmVhZC93cml0ZS4gKi9cbiAgICBEQVRBU09VUkNFOiAnZGF0YXNvdXJjZScsXG4gICAgLyoqIFRvIHByb3ZpZGUgYW4gYW5zd2VyIHRvIGFuIGluYm91bmQgSFRUUCByZXF1ZXN0LiAqL1xuICAgIEhUVFA6ICdodHRwJyxcbiAgICAvKiogQSBmdW5jdGlvbiBpcyBzZXQgdG8gYmUgZXhlY3V0ZWQgd2hlbiBtZXNzYWdlcyBhcmUgc2VudCB0byBhIG1lc3NhZ2luZyBzeXN0ZW0uICovXG4gICAgUFVCU1VCOiAncHVic3ViJyxcbiAgICAvKiogQSBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgdG8gYmUgZXhlY3V0ZWQgcmVndWxhcmx5LiAqL1xuICAgIFRJTUVSOiAndGltZXInLFxuICAgIC8qKiBJZiBub25lIG9mIHRoZSBvdGhlcnMgYXBwbHkuICovXG4gICAgT1RIRVI6ICdvdGhlcicsXG59O1xuZXhwb3J0IHZhciBGYWFzRG9jdW1lbnRPcGVyYXRpb25WYWx1ZXMgPSB7XG4gICAgLyoqIFdoZW4gYSBuZXcgb2JqZWN0IGlzIGNyZWF0ZWQuICovXG4gICAgSU5TRVJUOiAnaW5zZXJ0JyxcbiAgICAvKiogV2hlbiBhbiBvYmplY3QgaXMgbW9kaWZpZWQuICovXG4gICAgRURJVDogJ2VkaXQnLFxuICAgIC8qKiBXaGVuIGFuIG9iamVjdCBpcyBkZWxldGVkLiAqL1xuICAgIERFTEVURTogJ2RlbGV0ZScsXG59O1xuZXhwb3J0IHZhciBGYWFzSW52b2tlZFByb3ZpZGVyVmFsdWVzID0ge1xuICAgIC8qKiBBbGliYWJhIENsb3VkLiAqL1xuICAgIEFMSUJBQkFfQ0xPVUQ6ICdhbGliYWJhX2Nsb3VkJyxcbiAgICAvKiogQW1hem9uIFdlYiBTZXJ2aWNlcy4gKi9cbiAgICBBV1M6ICdhd3MnLFxuICAgIC8qKiBNaWNyb3NvZnQgQXp1cmUuICovXG4gICAgQVpVUkU6ICdhenVyZScsXG4gICAgLyoqIEdvb2dsZSBDbG91ZCBQbGF0Zm9ybS4gKi9cbiAgICBHQ1A6ICdnY3AnLFxufTtcbmV4cG9ydCB2YXIgTmV0VHJhbnNwb3J0VmFsdWVzID0ge1xuICAgIC8qKiBpcF90Y3AuICovXG4gICAgSVBfVENQOiAnaXBfdGNwJyxcbiAgICAvKiogaXBfdWRwLiAqL1xuICAgIElQX1VEUDogJ2lwX3VkcCcsXG4gICAgLyoqIEFub3RoZXIgSVAtYmFzZWQgcHJvdG9jb2wuICovXG4gICAgSVA6ICdpcCcsXG4gICAgLyoqIFVuaXggRG9tYWluIHNvY2tldC4gU2VlIGJlbG93LiAqL1xuICAgIFVOSVg6ICd1bml4JyxcbiAgICAvKiogTmFtZWQgb3IgYW5vbnltb3VzIHBpcGUuIFNlZSBub3RlIGJlbG93LiAqL1xuICAgIFBJUEU6ICdwaXBlJyxcbiAgICAvKiogSW4tcHJvY2VzcyBjb21tdW5pY2F0aW9uLiAqL1xuICAgIElOUFJPQzogJ2lucHJvYycsXG4gICAgLyoqIFNvbWV0aGluZyBlbHNlIChub24gSVAtYmFzZWQpLiAqL1xuICAgIE9USEVSOiAnb3RoZXInLFxufTtcbmV4cG9ydCB2YXIgTmV0SG9zdENvbm5lY3Rpb25UeXBlVmFsdWVzID0ge1xuICAgIC8qKiB3aWZpLiAqL1xuICAgIFdJRkk6ICd3aWZpJyxcbiAgICAvKiogd2lyZWQuICovXG4gICAgV0lSRUQ6ICd3aXJlZCcsXG4gICAgLyoqIGNlbGwuICovXG4gICAgQ0VMTDogJ2NlbGwnLFxuICAgIC8qKiB1bmF2YWlsYWJsZS4gKi9cbiAgICBVTkFWQUlMQUJMRTogJ3VuYXZhaWxhYmxlJyxcbiAgICAvKiogdW5rbm93bi4gKi9cbiAgICBVTktOT1dOOiAndW5rbm93bicsXG59O1xuZXhwb3J0IHZhciBOZXRIb3N0Q29ubmVjdGlvblN1YnR5cGVWYWx1ZXMgPSB7XG4gICAgLyoqIEdQUlMuICovXG4gICAgR1BSUzogJ2dwcnMnLFxuICAgIC8qKiBFREdFLiAqL1xuICAgIEVER0U6ICdlZGdlJyxcbiAgICAvKiogVU1UUy4gKi9cbiAgICBVTVRTOiAndW10cycsXG4gICAgLyoqIENETUEuICovXG4gICAgQ0RNQTogJ2NkbWEnLFxuICAgIC8qKiBFVkRPIFJlbC4gMC4gKi9cbiAgICBFVkRPXzA6ICdldmRvXzAnLFxuICAgIC8qKiBFVkRPIFJldi4gQS4gKi9cbiAgICBFVkRPX0E6ICdldmRvX2EnLFxuICAgIC8qKiBDRE1BMjAwMCAxWFJUVC4gKi9cbiAgICBDRE1BMjAwMF8xWFJUVDogJ2NkbWEyMDAwXzF4cnR0JyxcbiAgICAvKiogSFNEUEEuICovXG4gICAgSFNEUEE6ICdoc2RwYScsXG4gICAgLyoqIEhTVVBBLiAqL1xuICAgIEhTVVBBOiAnaHN1cGEnLFxuICAgIC8qKiBIU1BBLiAqL1xuICAgIEhTUEE6ICdoc3BhJyxcbiAgICAvKiogSURFTi4gKi9cbiAgICBJREVOOiAnaWRlbicsXG4gICAgLyoqIEVWRE8gUmV2LiBCLiAqL1xuICAgIEVWRE9fQjogJ2V2ZG9fYicsXG4gICAgLyoqIExURS4gKi9cbiAgICBMVEU6ICdsdGUnLFxuICAgIC8qKiBFSFJQRC4gKi9cbiAgICBFSFJQRDogJ2VocnBkJyxcbiAgICAvKiogSFNQQVAuICovXG4gICAgSFNQQVA6ICdoc3BhcCcsXG4gICAgLyoqIEdTTS4gKi9cbiAgICBHU006ICdnc20nLFxuICAgIC8qKiBURC1TQ0RNQS4gKi9cbiAgICBURF9TQ0RNQTogJ3RkX3NjZG1hJyxcbiAgICAvKiogSVdMQU4uICovXG4gICAgSVdMQU46ICdpd2xhbicsXG4gICAgLyoqIDVHIE5SIChOZXcgUmFkaW8pLiAqL1xuICAgIE5SOiAnbnInLFxuICAgIC8qKiA1RyBOUk5TQSAoTmV3IFJhZGlvIE5vbi1TdGFuZGFsb25lKS4gKi9cbiAgICBOUk5TQTogJ25ybnNhJyxcbiAgICAvKiogTFRFIENBLiAqL1xuICAgIExURV9DQTogJ2x0ZV9jYScsXG59O1xuZXhwb3J0IHZhciBIdHRwRmxhdm9yVmFsdWVzID0ge1xuICAgIC8qKiBIVFRQIDEuMC4gKi9cbiAgICBIVFRQXzFfMDogJzEuMCcsXG4gICAgLyoqIEhUVFAgMS4xLiAqL1xuICAgIEhUVFBfMV8xOiAnMS4xJyxcbiAgICAvKiogSFRUUCAyLiAqL1xuICAgIEhUVFBfMl8wOiAnMi4wJyxcbiAgICAvKiogU1BEWSBwcm90b2NvbC4gKi9cbiAgICBTUERZOiAnU1BEWScsXG4gICAgLyoqIFFVSUMgcHJvdG9jb2wuICovXG4gICAgUVVJQzogJ1FVSUMnLFxufTtcbmV4cG9ydCB2YXIgTWVzc2FnaW5nRGVzdGluYXRpb25LaW5kVmFsdWVzID0ge1xuICAgIC8qKiBBIG1lc3NhZ2Ugc2VudCB0byBhIHF1ZXVlLiAqL1xuICAgIFFVRVVFOiAncXVldWUnLFxuICAgIC8qKiBBIG1lc3NhZ2Ugc2VudCB0byBhIHRvcGljLiAqL1xuICAgIFRPUElDOiAndG9waWMnLFxufTtcbmV4cG9ydCB2YXIgTWVzc2FnaW5nT3BlcmF0aW9uVmFsdWVzID0ge1xuICAgIC8qKiByZWNlaXZlLiAqL1xuICAgIFJFQ0VJVkU6ICdyZWNlaXZlJyxcbiAgICAvKiogcHJvY2Vzcy4gKi9cbiAgICBQUk9DRVNTOiAncHJvY2VzcycsXG59O1xuZXhwb3J0IHZhciBScGNHcnBjU3RhdHVzQ29kZVZhbHVlcyA9IHtcbiAgICAvKiogT0suICovXG4gICAgT0s6IDAsXG4gICAgLyoqIENBTkNFTExFRC4gKi9cbiAgICBDQU5DRUxMRUQ6IDEsXG4gICAgLyoqIFVOS05PV04uICovXG4gICAgVU5LTk9XTjogMixcbiAgICAvKiogSU5WQUxJRF9BUkdVTUVOVC4gKi9cbiAgICBJTlZBTElEX0FSR1VNRU5UOiAzLFxuICAgIC8qKiBERUFETElORV9FWENFRURFRC4gKi9cbiAgICBERUFETElORV9FWENFRURFRDogNCxcbiAgICAvKiogTk9UX0ZPVU5ELiAqL1xuICAgIE5PVF9GT1VORDogNSxcbiAgICAvKiogQUxSRUFEWV9FWElTVFMuICovXG4gICAgQUxSRUFEWV9FWElTVFM6IDYsXG4gICAgLyoqIFBFUk1JU1NJT05fREVOSUVELiAqL1xuICAgIFBFUk1JU1NJT05fREVOSUVEOiA3LFxuICAgIC8qKiBSRVNPVVJDRV9FWEhBVVNURUQuICovXG4gICAgUkVTT1VSQ0VfRVhIQVVTVEVEOiA4LFxuICAgIC8qKiBGQUlMRURfUFJFQ09ORElUSU9OLiAqL1xuICAgIEZBSUxFRF9QUkVDT05ESVRJT046IDksXG4gICAgLyoqIEFCT1JURUQuICovXG4gICAgQUJPUlRFRDogMTAsXG4gICAgLyoqIE9VVF9PRl9SQU5HRS4gKi9cbiAgICBPVVRfT0ZfUkFOR0U6IDExLFxuICAgIC8qKiBVTklNUExFTUVOVEVELiAqL1xuICAgIFVOSU1QTEVNRU5URUQ6IDEyLFxuICAgIC8qKiBJTlRFUk5BTC4gKi9cbiAgICBJTlRFUk5BTDogMTMsXG4gICAgLyoqIFVOQVZBSUxBQkxFLiAqL1xuICAgIFVOQVZBSUxBQkxFOiAxNCxcbiAgICAvKiogREFUQV9MT1NTLiAqL1xuICAgIERBVEFfTE9TUzogMTUsXG4gICAgLyoqIFVOQVVUSEVOVElDQVRFRC4gKi9cbiAgICBVTkFVVEhFTlRJQ0FURUQ6IDE2LFxufTtcbmV4cG9ydCB2YXIgTWVzc2FnZVR5cGVWYWx1ZXMgPSB7XG4gICAgLyoqIHNlbnQuICovXG4gICAgU0VOVDogJ1NFTlQnLFxuICAgIC8qKiByZWNlaXZlZC4gKi9cbiAgICBSRUNFSVZFRDogJ1JFQ0VJVkVEJyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZW1hbnRpY0F0dHJpYnV0ZXMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vU2VtYW50aWNBdHRyaWJ1dGVzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGRpcnR5T2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGRpcnR5T2JqZWN0ID0gZGlydHlPYmplY3QgfHwge307XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGlydHlPYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpcnR5T2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KGRpcnR5T2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIGRpcnR5T2JqZWN0KTtcbn0iLCJpbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlOVVRFU19JTl9EQVkgPSAxNDQwO1xudmFyIE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTID0gMjUyMDtcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDA7XG52YXIgTUlOVVRFU19JTl9UV09fTU9OVEhTID0gODY0MDA7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgZGlzdGFuY2VJbldvcmRzIGAgdG8gYGZvcm1hdERpc3RhbmNlYFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAtIFRoZSBvcmRlciBvZiBhcmd1bWVudHMgaXMgc3dhcHBlZCB0byBtYWtlIHRoZSBmdW5jdGlvblxuICogICBjb25zaXN0ZW50IHdpdGggYGRpZmZlcmVuY2VJbi4uLmAgZnVuY3Rpb25zLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHMoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAqICAgKSAvLz0+ICdpbiBhYm91dCAxIGhvdXInXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZShcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBjbG9uZU9iamVjdChvcHRpb25zKTtcbiAgbG9jYWxpemVPcHRpb25zLmFkZFN1ZmZpeCA9IEJvb2xlYW4ob3B0aW9ucy5hZGRTdWZmaXgpO1xuICBsb2NhbGl6ZU9wdGlvbnMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcblxuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuXG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgdmFyIG9mZnNldEluU2Vjb25kcyA9IChnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgLyAxMDAwO1xuICB2YXIgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICB2YXIgbW9udGhzOyAvLyAwIHVwIHRvIDIgbWluc1xuXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zLmluY2x1ZGVTZWNvbmRzKSB7XG4gICAgICBpZiAoc2Vjb25kcyA8IDUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMjAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA0MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdoYWxmQU1pbnV0ZScsIG51bGwsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyAyIG1pbnMgdXAgdG8gMC43NSBocnNcblxuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS41IGhycyB1cCB0byAyNCBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBkYXkgdXAgdG8gMS43NSBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIG1vbnRoIHVwIHRvIDIgbW9udGhzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fVFdPX01PTlRIUykge1xuICAgIG1vbnRocyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTtcbiAgfVxuXG4gIG1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTsgLy8gMiBtb250aHMgdXAgdG8gMTIgbW9udGhzXG5cbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2Uge1xuICAgIHZhciBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgdmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7IC8vIE4geWVhcnMgdXAgdG8gMSB5ZWFycyAzIG1vbnRoc1xuXG4gICAgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCAzKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhbG1vc3RYWWVhcnMnLCB5ZWFycyArIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3NzIiwidXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uIiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIklubGluZVN3aXRjaCIsInVzZVN0eWxlcyIsIk5vZGVHcmFwaFNldHRpbmdzIiwib3B0aW9ucyIsIm9uT3B0aW9uc0NoYW5nZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImNvbnRhaW5lciIsInJvdyIsImpzb25EYXRhIiwibm9kZUdyYXBoIiwiZW5hYmxlZCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJ0aGVtZSIsIlNlZ21lbnRJbnB1dCIsIklubGluZUxhYmVsIiwiSWNvbiIsIkVRX1dJRFRIIiwiS2V5VmFsdWVJbnB1dCIsInZhbHVlcyIsIm9uQ2hhbmdlIiwiaWQiLCJrZXlQbGFjZWhvbGRlciIsInZhbHVlUGxhY2Vob2xkZXIiLCJ3cmFwcGVyIiwibGVuZ3RoIiwibWFwIiwidmFsdWUiLCJpZHgiLCJwYWlyIiwia2V5IiwiZSIsInYiLCJpIiwiU3RyaW5nIiwib3BlcmF0b3IiLCJzbGljZSIsInNwYWNpbmciLCJ4cyIsInBhbGV0dGUiLCJvcmFuZ2UiLCJEYXRhU291cmNlUGlja2VyIiwiSW5wdXQiLCJUYWdzSW5wdXQiLCJUcmFjZVRvTG9nc1NldHRpbmdzIiwid2lkdGgiLCJpbmZvVGV4dCIsInRyYWNlc1RvTG9ncyIsImRhdGFzb3VyY2VVaWQiLCJkcyIsInVpZCIsInRhZ3MiLCJtYXBUYWdOYW1lc0VuYWJsZWQiLCJtYXBwZWRUYWdzIiwidGFnIiwic3BhblN0YXJ0VGltZVNoaWZ0Iiwic3BhbkVuZFRpbWVTaGlmdCIsImZpbHRlckJ5VHJhY2VJRCIsImZpbHRlckJ5U3BhbklEIiwibWQiLCJjb2xvcnMiLCJ0ZXh0U2VtaVdlYWsiLCJGaWVsZFR5cGUiLCJNdXRhYmxlRGF0YUZyYW1lIiwiTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcyIsIkZpZWxkcyIsImdldE5vbk92ZXJsYXBwaW5nRHVyYXRpb24iLCJyYW5nZXMiLCJzb3J0IiwiYSIsImIiLCJtZXJnZWRSYW5nZXMiLCJyZWR1Y2UiLCJhY2MiLCJyYW5nZSIsInRhaWwiLCJwcmV2U3RhcnQiLCJwcmV2RW5kIiwic3RhcnQiLCJlbmQiLCJtYWtlU3Bhbk1hcCIsImdldFNwYW4iLCJzcGFuTWFwIiwic3BhbiIsImluZGV4IiwiY2hpbGRyZW4iLCJwYXJlbnRJZCIsInBhcmVudElkcyIsInVuZGVmaW5lZCIsInB1c2giLCJnZXRTdGF0cyIsImR1cmF0aW9uIiwidHJhY2VEdXJhdGlvbiIsInNlbGZEdXJhdGlvbiIsIm1haW4iLCJ0b0ZpeGVkTm9UcmFpbGluZ1plcm9zIiwic2Vjb25kYXJ5IiwibiIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwibWFrZUZyYW1lcyIsIm5vZGVzRnJhbWUiLCJmaWVsZHMiLCJuYW1lIiwidHlwZSIsInN0cmluZyIsInRpdGxlIiwic3ViVGl0bGUiLCJtYWluU3RhdCIsImNvbmZpZyIsImRpc3BsYXlOYW1lIiwic2Vjb25kYXJ5U3RhdCIsImNvbG9yIiwibnVtYmVyIiwibW9kZSIsIm1ldGEiLCJwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSIsImVkZ2VzRnJhbWUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJCdXR0b24iLCJIb3Jpem9udGFsR3JvdXAiLCJMYWJlbCIsIkxvYWRpbmdQbGFjZWhvbGRlciIsIndpdGhUaGVtZTIiLCJCcm93c2VyTGFiZWwiLCJMb2tpTGFiZWwiLCJmdXp6eU1hdGNoIiwiY3giLCJGaXhlZFNpemVMaXN0Iiwic29ydEJ5IiwiTUFYX0xBQkVMX0NPVU5UIiwiTUFYX1ZBTFVFX0NPVU5UIiwiTUFYX0FVVE9fU0VMRUNUIiwiRU1QVFlfU0VMRUNUT1IiLCJidWlsZFNlbGVjdG9yIiwibGFiZWxzIiwic2VsZWN0ZWRMYWJlbHMiLCJsYWJlbCIsInNlbGVjdGVkIiwic2VsZWN0ZWRWYWx1ZXMiLCJmaWx0ZXIiLCJqb2luIiwiZmFjZXRMYWJlbHMiLCJwb3NzaWJsZUxhYmVscyIsImxhc3RGYWNldHRlZCIsInBvc3NpYmxlVmFsdWVzIiwiZXhpc3RpbmdWYWx1ZXMiLCJTZXQiLCJoYXMiLCJsb2FkaW5nIiwiZmFjZXRzIiwiaGlkZGVuIiwiYmFja2dyb3VuZCIsImxpc3QiLCJzZWN0aW9uIiwic2VsZWN0b3IiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseU1vbm9zcGFjZSIsInN0YXR1cyIsInRleHQiLCJzdGF0dXNTaG93aW5nIiwiZXJyb3IiLCJ2YWx1ZUxpc3QiLCJ2YWx1ZUxpc3RXcmFwcGVyIiwiYm9yZGVyIiwibWVkaXVtIiwidmFsdWVMaXN0QXJlYSIsInZhbHVlVGl0bGUiLCJ2YWxpZGF0aW9uU3RhdHVzIiwibWF4Q29udHJhc3QiLCJVbnRoZW1lZExva2lMYWJlbEJyb3dzZXIiLCJDb21wb25lbnQiLCJzZWFyY2hUZXJtIiwic2V0U3RhdGUiLCJzdGF0ZSIsInByb3BzIiwicXVlcnkiLCJkZWxldGVMYXN0VXNlZExhYmVscyIsImZpbmQiLCJsIiwibmV4dFZhbHVlIiwidXBkYXRlTGFiZWxTdGF0ZSIsImRvRmFjZXR0aW5nRm9yTGFiZWwiLCJkb0ZhY2V0dGluZyIsInZhbGlkYXRlU2VsZWN0b3IiLCJmb3JFYWNoIiwiZmV0Y2hWYWx1ZXMiLCJmZXRjaFNlcmllcyIsInVwZGF0ZWRGaWVsZHMiLCJjYiIsImNvbXBvbmVudERpZE1vdW50IiwibGFuZ3VhZ2VQcm92aWRlciIsImF1dG9TZWxlY3QiLCJsYXN0VXNlZExhYmVscyIsInRoZW4iLCJyYXdMYWJlbHMiLCJnZXRMYWJlbEtleXMiLCJhcnIiLCJpbmNsdWRlcyIsInN0b3JlTGFzdFVzZWRMYWJlbHMiLCJyYXdWYWx1ZXMiLCJnZXRMYWJlbFZhbHVlcyIsImNvbnNvbGUiLCJmZXRjaFNlcmllc0xhYmVscyIsIk9iamVjdCIsImtleXMiLCJzdHJlYW1zIiwicmVuZGVyIiwiZW1wdHkiLCJzZWFyY2hSZXN1bHRzIiwiaGlnaGxpZ2h0UGFydHMiLCJmdXp6eU1hdGNoUmVzdWx0IiwidG9Mb3dlckNhc2UiLCJmb3VuZCIsIm9yZGVyIiwiZGlzdGFuY2UiLCJJbmZpbml0eSIsIm9uQ2xpY2tMYWJlbCIsIm9uQ2hhbmdlU2VhcmNoIiwic3R5bGUiLCJvbkNsaWNrVmFsdWUiLCJvbkNsaWNrUnVuTG9nc1F1ZXJ5Iiwib25DbGlja1J1bk1ldHJpY3NRdWVyeSIsIm9uQ2xpY2tWYWxpZGF0ZSIsIm9uQ2xpY2tDbGVhciIsIkxva2lMYWJlbEJyb3dzZXIiLCJTbGF0ZVByaXNtIiwiUXVlcnlGaWVsZCIsIkJyYWNlc1BsdWdpbiIsIkRPTVV0aWwiLCJsYW5ndWFnZXMiLCJwcmlzbUxhbmd1YWdlcyIsInNob3VsZFJlZnJlc2hMYWJlbHMiLCJMb2NhbFN0b3JhZ2VWYWx1ZVByb3ZpZGVyIiwiTEFTVF9VU0VEX0xBQkVMU19LRVkiLCJnZXRDaG9vc2VyVGV4dCIsImhhc1N5bnRheCIsImhhc0xvZ0xhYmVscyIsIndpbGxBcHBseVN1Z2dlc3Rpb24iLCJzdWdnZXN0aW9uIiwidHlwZWFoZWFkQ29udGV4dCIsInR5cGVhaGVhZFRleHQiLCJuZXh0Q2hhciIsImdldE5leHRDaGFyYWN0ZXIiLCJtYXRjaCIsIkxva2lRdWVyeUZpZWxkIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwib25DaGFuZ2VRdWVyeSIsImxhYmVsQnJvd3NlclZpc2libGUiLCJvdmVycmlkZSIsIm9uUnVuUXVlcnkiLCJuZXh0UXVlcnkiLCJleHByIiwidHlwZWFoZWFkIiwiZGF0YXNvdXJjZSIsInN1Z2dlc3Rpb25zIiwibG9raUxhbmd1YWdlUHJvdmlkZXIiLCJoaXN0b3J5IiwicHJlZml4Iiwid3JhcHBlckNsYXNzZXMiLCJsYWJlbEtleSIsInJlc3VsdCIsInByb3ZpZGVDb21wbGV0aW9uSXRlbXMiLCJsYWJlbHNMb2FkZWQiLCJwbHVnaW5zIiwib25seUluIiwibm9kZSIsIm9iamVjdCIsImdldFN5bnRheCIsImxvZ3FsIiwiX2lzTW91bnRlZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicmVmcmVzaExhYmVscyIsImZldGNoTGFiZWxzIiwiRXh0cmFGaWVsZEVsZW1lbnQiLCJwbGFjZWhvbGRlciIsImNsZWFuVGV4dCIsImNob29zZXJUZXh0IiwiYnV0dG9uRGlzYWJsZWQiLCJvbkxhc3RVc2VkTGFiZWxzU2F2ZSIsIm9uTGFzdFVzZWRMYWJlbHNEZWxldGUiLCJvbkNsaWNrQ2hvb3NlckJ1dHRvbiIsIm9uVHlwZWFoZWFkIiwib25CbHVyIiwib25DaGFuZ2VMYWJlbEJyb3dzZXIiLCJyb3VuZE1zVG9NaW4iLCJtaWxsaXNlY29uZHMiLCJyb3VuZFNlY1RvTWluIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsInByZXZSYW5nZSIsInNhbWVNaW51dGVGcm9tIiwiZnJvbSIsInZhbHVlT2YiLCJzYW1lTWludXRlVG8iLCJ0byIsIkNoZWF0U2hlZXQiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsIkFzeW5jU2VsZWN0IiwiQWxlcnQiLCJ1c2VTdHlsZXMyIiwidG9rZW5pemVyIiwiUHJpc20iLCJpc1ZhbGlkR29EdXJhdGlvbiIsIlRlbXBvTGFuZ3VhZ2VQcm92aWRlciIsImRlYm91bmNlIiwiZGlzcGF0Y2giLCJub3RpZnlBcHAiLCJjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiIsIlBSSVNNX0xBTkdVQUdFIiwiZHVyYXRpb25QbGFjZWhvbGRlciIsIk5hdGl2ZVNlYXJjaCIsImhhc1N5bnRheExvYWRlZCIsInNldEhhc1N5bnRheExvYWRlZCIsImFzeW5jU2VydmljZU5hbWVWYWx1ZSIsInNldEFzeW5jU2VydmljZU5hbWVWYWx1ZSIsImFzeW5jU3Bhbk5hbWVWYWx1ZSIsInNldEFzeW5jU3Bhbk5hbWVWYWx1ZSIsInNldEVycm9yIiwiaW5wdXRFcnJvcnMiLCJzZXRJbnB1dEVycm9ycyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNlcnZpY2VOYW1lIiwic3Bhbk5hbWUiLCJmZXRjaE9wdGlvbnNDYWxsYmFjayIsIm5hbWVUeXBlIiwibHAiLCJyZXMiLCJnZXRPcHRpb25zIiwicHJldlZhbHVlIiwibG9hZE9wdGlvbnNPZlR5cGUiLCJmZXRjaE9wdGlvbnNPZlR5cGUiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJmZXRjaE9wdGlvbnMiLCJzcGxpdHRlZFRleHQiLCJzcGxpdCIsIm9uS2V5RG93biIsImtleUV2ZW50Iiwic2hpZnRLZXkiLCJjdHJsS2V5Iiwic2VhcmNoIiwibWluRHVyYXRpb24iLCJtYXhEdXJhdGlvbiIsImxpbWl0IiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJhbGVydCIsIkJhZGdlIiwiRmlsZURyb3B6b25lIiwiUmFkaW9CdXR0b25Hcm91cCIsInVzZUFzeW5jIiwiZ2V0RFMiLCJTZXJ2aWNlR3JhcGhTZWN0aW9uIiwiREVGQVVMVF9RVUVSWV9UWVBFIiwiVGVtcG9RdWVyeUZpZWxkQ29tcG9uZW50IiwibGlua2VkUXVlcnkiLCJyZWZJZCIsInF1ZXJ5VHlwZSIsImxvZ3NEYXRhc291cmNlVWlkIiwiZ2V0TG9raVNlYXJjaERTIiwiZ3JhcGhEYXRhc291cmNlVWlkIiwic2VydmljZU1hcCIsInF1ZXJ5VHlwZU9wdGlvbnMiLCJmZWF0dXJlVG9nZ2xlcyIsInRlbXBvU2VydmljZUdyYXBoIiwidGVtcG9TZWFyY2giLCJoaWRlIiwidW5zaGlmdCIsIm9uQ2xlYXJSZXN1bHRzIiwibWF4V2lkdGgiLCJ0ZW1wb0JhY2tlbmRTZWFyY2giLCJvblJ1bkxpbmtlZFF1ZXJ5Iiwib25DaGFuZ2VMaW5rZWRRdWVyeSIsInBhZGRpbmciLCJtdWx0aXBsZSIsInVwbG9hZGVkSnNvbiIsInZhbCIsIlNlYXJjaFNlY3Rpb24iLCJkc1N0YXRlIiwiVGVtcG9RdWVyeUZpZWxkIiwiQWRIb2NGaWx0ZXIiLCJmaWx0ZXJzIiwicXVlcnlUb0ZpbHRlciIsInNlcnZpY2VNYXBRdWVyeSIsInNlcmllcyIsImZpbHRlcnNUb1F1ZXJ5IiwibmV3RmlsdGVycyIsInNwbGljZSIsInJlIiwiZXhlYyIsImNvbmRpdGlvbiIsImYiLCJnZXREYXRhU291cmNlU3J2IiwiZHNTcnYiLCJnZXQiLCJEYXRhU291cmNlSHR0cFNldHRpbmdzIiwiU2VydmljZUdyYXBoU2V0dGluZ3MiLCJTZWFyY2hTZXR0aW5ncyIsIkxva2lTZWFyY2hTZXR0aW5ncyIsIkNvbmZpZ0VkaXRvciIsImxlZ2FjeURhdGFzb3VyY2UiLCJsb2tpU2VhcmNoIiwiRU1QVFkiLCJtZXJnZSIsIm9mIiwidGhyb3dFcnJvciIsImNhdGNoRXJyb3IiLCJtZXJnZU1hcCIsInRvQXJyYXkiLCJMb2FkaW5nU3RhdGUiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJnZXRCYWNrZW5kU3J2Iiwic2VyaWFsaXplUGFyYW1zIiwiZ2V0RGF0YXNvdXJjZVNydiIsImlkZW50aXR5IiwicGljayIsInBpY2tCeSIsImdyb3VwQnkiLCJzdGFydENhc2UiLCJmYWlsZWRNZXRyaWMiLCJoaXN0b2dyYW1NZXRyaWMiLCJtYXBQcm9tTWV0cmljc1RvU2VydmljZU1hcCIsInNlcnZpY2VNYXBNZXRyaWNzIiwidG90YWxzTWV0cmljIiwidHJhbnNmb3JtVHJhY2UiLCJ0cmFuc2Zvcm1UcmFjZUxpc3QiLCJ0cmFuc2Zvcm1Gcm9tT1RMUCIsInRyYW5zZm9ybUZyb21PVEVMIiwiY3JlYXRlVGFibGVGcmFtZUZyb21TZWFyY2giLCJERUZBVUxUX0xJTUlUIiwiVGVtcG9EYXRhc291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsImxlZ2FjeUxvZ3NEYXRhc291cmNlVWlkIiwic3ViUXVlcmllcyIsImZpbHRlcmVkVGFyZ2V0cyIsInRhcmdldHMiLCJ0IiwiY2xlYXIiLCJkYXRhIiwiRG9uZSIsInBpcGUiLCJsaW5rZWREYXRhc291cmNlIiwibGlua2VkUmVxdWVzdCIsInNldHRpbmdzIiwidHJhY2VMaW5rTWF0Y2hlciIsImRlcml2ZWRGaWVsZHMiLCJmaWVsZCIsIm1hdGNoZXJSZWdleCIsIkVycm9yIiwicmVzcG9uc2UiLCJuYXRpdmVTZWFyY2giLCJ0aW1lUmFuZ2UiLCJzdGFydFRpbWUiLCJ1bml4IiwiZW5kVGltZSIsInNlYXJjaFF1ZXJ5IiwiYnVpbGRTZWFyY2hRdWVyeSIsIl9yZXF1ZXN0IiwidHJhY2VzIiwibWVzc2FnZSIsInVwbG9hZCIsIm90ZWxUcmFjZURhdGEiLCJKU09OIiwicGFyc2UiLCJiYXRjaGVzIiwidHJhY2VJZCIsImhhbmRsZVRyYWNlSWRRdWVyeSIsInZhbGlkVGFyZ2V0cyIsInRyYWNlUmVxdWVzdCIsIm1ldGFkYXRhUmVxdWVzdCIsInVybCIsInBhcmFtcyIsIm1ldGhvZCIsImhpZGVGcm9tSW5zcGVjdG9yIiwidG9Qcm9taXNlIiwiYXBpVXJsIiwicmVxIiwiZmV0Y2giLCJ0ZXN0RGF0YXNvdXJjZSIsImhlYWRlcnMiLCJvayIsImdldFF1ZXJ5RGlzcGxheVRleHQiLCJoYXNPd25Qcm9wZXJ0eSIsInRlbXBvUXVlcnkiLCJyZXBsYWNlIiwiZ2V0U2VydmljZUdyYXBoTGFiZWxzIiwiZ2V0VGFnS2V5cyIsImdldFNlcnZpY2VHcmFwaExhYmVsVmFsdWVzIiwiZ2V0VGFnVmFsdWVzIiwicXVlcnlTZXJ2aWNlTWFwUHJvbWV0aGV1cyIsInJlcXVlc3QiLCJtYWtlUHJvbVNlcnZpY2VNYXBSZXF1ZXN0IiwicmVzcG9uc2VzIiwiZXJyb3JSZXMiLCJub2RlcyIsImVkZ2VzIiwibGlua3MiLCJtYWtlUHJvbUxpbmsiLCJtZXRyaWMiLCJpbnRlcm5hbCIsImRhdGFzb3VyY2VOYW1lIiwiaW5zdGFudCIsIkRhdGFGcmFtZVZpZXciLCJGaWVsZENvbG9yTW9kZUlkIiwiY3JlYXRlR3JhcGhGcmFtZXMiLCJjb252ZXJ0VHJhY2VUb0dyYXBoIiwiYWRkIiwiZWRnZSIsInZpZXciLCJmaW5kVHJhY2VEdXJhdGlvbiIsInNwYW5JRCIsInBhcmVudFNwYW5JRCIsImMiLCJjaGlsZHJlbkR1cmF0aW9uIiwic3RhdHMiLCJvcGVyYXRpb25OYW1lIiwidHJhY2VFbmRUaW1lIiwidHJhY2VTdGFydFRpbWUiLCJzZWNvbmRzTWV0cmljIiwiZnJhbWVzIiwiZ2V0TWV0cmljRnJhbWVzIiwibm9kZXNNYXAiLCJlZGdlc01hcCIsImNvbGxlY3RNZXRyaWNEYXRhIiwiY29udmVydFRvRGF0YUZyYW1lcyIsImNyZWF0ZVNlcnZpY2VNYXBEYXRhRnJhbWVzIiwiY3JlYXRlREYiLCJ1bml0IiwiYXJjIiwiZml4ZWRDb2xvciIsIkZpeGVkIiwiZnJhbWUiLCJzdGF0IiwidmFsdWVOYW1lIiwiZWRnZUlkIiwiY2xpZW50Iiwic2VydmVyIiwicmFuZ2VNcyIsIm5vZGVJZCIsInRvdGFsIiwiTmFOIiwicm91bmQiLCJtaW4iLCJmYWlsZWQiLCJMYW5ndWFnZVByb3ZpZGVyIiwiaW5pdGlhbFZhbHVlcyIsImZldGNoVGFncyIsImNvbnRleHQiLCJlbXB0eVJlc3VsdCIsImVuZFRleHQiLCJnZXRUZXh0IiwiaXNWYWx1ZSIsImluZGV4T2YiLCJnZXRUYWdWYWx1ZUNvbXBsZXRpb25JdGVtcyIsImdldFRhZ3NDb21wbGV0aW9uSXRlbXMiLCJpdGVtcyIsImFzc2lnbiIsInRhZ05hbWVzIiwidGFnTmFtZSIsInRhZ1ZhbHVlcyIsInRhZ1ZhbHVlIiwiRGF0YVNvdXJjZVBsdWdpbiIsInBsdWdpbiIsInNldFF1ZXJ5RWRpdG9yIiwic2V0Q29uZmlnRWRpdG9yIiwic2V0UXVlcnlFZGl0b3JIZWxwIiwiQXJyYXlWZWN0b3IiLCJkYXRlVGltZUZvcm1hdCIsIlNwYW5TdGF0dXNDb2RlIiwiZm9ybWF0RGlzdGFuY2UiLCJkaWZmZXJlbmNlSW5Ib3VycyIsIlNlbWFudGljUmVzb3VyY2VBdHRyaWJ1dGVzIiwiY3JlYXRlVGFibGVGcmFtZSIsImxvZ3NGcmFtZSIsInRyYWNlUmVnZXhzIiwidGFibGVGcmFtZSIsInRpbWUiLCJjdXN0b20iLCJkaXNwbGF5TmFtZUZyb21EUyIsInRpbWVGaWVsZCIsImhhc01hdGNoIiwibGluZSIsInRyYWNlUmVnZXgiLCJkYXRhc291cmNlSWQiLCJ0cmFuc2Zvcm1CYXNlNjRJRFRvSGV4U3RyaW5nIiwiYmFzZTY0IiwicmF3IiwiYXRvYiIsImhleCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsInRyYW5zZm9ybUhleFN0cmluZ1RvQmFzZTY0SUQiLCJoZXhBcnJheSIsImJ0b2EiLCJmcm9tQ2hhckNvZGUiLCJnZXRBdHRyaWJ1dGVWYWx1ZSIsInN0cmluZ1ZhbHVlIiwiYm9vbFZhbHVlIiwiQm9vbGVhbiIsImludFZhbHVlIiwiZG91YmxlVmFsdWUiLCJhcnJheVZhbHVlIiwiYXJWYWx1ZSIsInJlc291cmNlVG9Qcm9jZXNzIiwicmVzb3VyY2UiLCJzZXJ2aWNlVGFncyIsImF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJTRVJWSUNFX05BTUUiLCJnZXRTcGFuVGFncyIsImluc3RydW1lbnRhdGlvbkxpYnJhcnkiLCJzcGFuVGFncyIsInZlcnNpb24iLCJjb2RlIiwiVU5TRVQiLCJFUlJPUiIsImtpbmQiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImxpbmsiLCJzcGFuSWQiLCJ0cmFjZUlEIiwiZ2V0TG9ncyIsImxvZ3MiLCJldmVudHMiLCJ0aW1lc3RhbXAiLCJ0aW1lVW5peE5hbm8iLCJ0cmFjZURhdGEiLCJvdGhlciIsInRyYWNlRm9ybWF0IiwibGlicmFyeVNwYW4iLCJpbnN0cnVtZW50YXRpb25MaWJyYXJ5U3BhbnMiLCJzcGFucyIsInBhcmVudFNwYW5JZCIsInN0YXJ0VGltZVVuaXhOYW5vIiwiZW5kVGltZVVuaXhOYW5vIiwidHJhbnNmb3JtVG9PVExQIiwic2VydmljZXMiLCJkcm9wcGVkQXR0cmlidXRlc0NvdW50IiwiYmF0Y2hJbmRleCIsInRhZ3NUb0F0dHJpYnV0ZXMiLCJsaWJyYXJ5TmFtZSIsInBhZFN0YXJ0IiwidHJhY2VTdGF0ZSIsImdldE9UTFBTcGFuS2luZCIsImRyb3BwZWRFdmVudHNDb3VudCIsImRyb3BwZWRMaW5rc0NvdW50IiwiZ2V0T1RMUFN0YXR1cyIsImdldE9UTFBFdmVudHMiLCJnZXRPVExQUmVmZXJlbmNlcyIsInNwYW5LaW5kIiwic3BhbktpbmRUYWdWYWx1ZSIsInRvQXR0cmlidXRlVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJzdGF0dXNDb2RlVGFnIiwibG9nIiwicmVmIiwiZW1wdHlEYXRhUXVlcnlSZXNwb25zZSIsInBhcnNlSnNvbkZpZWxkcyIsImZpZWxkTmFtZSIsImZpZWxkSW5kZXgiLCJuZXdGaWVsZCIsInNldCIsInRyYW5zZm9ybVRvVHJhY2VEYXRhIiwidHJhY2UiLCJ0cmFjZU5hbWUiLCJyb290U2VydmljZU5hbWUiLCJyb290VHJhY2VOYW1lIiwiYWJzIiwiRGF0ZSIsIm5vdyIsImFkZFN1ZmZpeCIsImluY2x1ZGVTZWNvbmRzIiwiZHVyYXRpb25NcyIsInBhdHRlcm4iLCJhbGlhcyJdLCJzb3VyY2VSb290IjoiIn0=
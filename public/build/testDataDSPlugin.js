"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["testDataDSPlugin"],{

/***/ "./public/app/plugins/datasource/testdata/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

// Libraries



/**
 * Empty Config Editor -- settings to save
 */
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {}));
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/LogIpsum.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextWord": () => (/* binding */ getNextWord),
/* harmony export */   "getRandomLine": () => (/* binding */ getRandomLine),
/* harmony export */   "getRandomLogLevel": () => (/* binding */ getRandomLogLevel)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

let index = 0;
function getRandomLogLevel() {
  const v = Math.random();

  if (v > 0.9) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.critical;
  }

  if (v > 0.8) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.error;
  }

  if (v > 0.7) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.warning;
  }

  if (v > 0.4) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.info;
  }

  if (v > 0.3) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.debug;
  }

  if (v > 0.1) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.trace;
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.unknown;
}
function getNextWord() {
  index = (index + Math.floor(Math.random() * 5)) % words.length;
  return words[index];
}
function getRandomLine(length = 60) {
  let line = getNextWord();

  while (line.length < length) {
    line += ' ' + getNextWord();
  }

  return line;
}
const words = ['At', 'vero', 'eos', 'et', 'accusamus', 'et', 'iusto', 'odio', 'dignissimos', 'ducimus', 'qui', 'blanditiis', 'praesentium', 'voluptatum', 'deleniti', 'atque', 'corrupti', 'quos', 'dolores', 'et', 'quas', 'molestias', 'excepturi', 'sint', 'occaecati', 'cupiditate', 'non', 'provident', 'similique', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollitia', 'animi', 'id', 'est', 'laborum', 'et', 'dolorum', 'fuga', 'Et', 'harum', 'quidem', 'rerum', 'facilis', 'est', 'et', 'expedita', 'distinctio', 'Nam', 'libero', 'tempore', 'cum', 'soluta', 'nobis', 'est', 'eligendi', 'optio', 'cumque', 'nihil', 'impedit', 'quo', 'minus', 'id', 'quod', 'maxime', 'placeat', 'facere', 'possimus', 'omnis', 'voluptas', 'assumenda', 'est', 'omnis', 'dolor', 'repellendus', 'Temporibus', 'autem', 'quibusdam', 'et', 'aut', 'officiis', 'debitis', 'aut', 'rerum', 'necessitatibus', 'saepe', 'eveniet', 'ut', 'et', 'voluptates', 'repudiandae', 'sint', 'et', 'molestiae', 'non', 'recusandae', 'Itaque', 'earum', 'rerum', 'hic', 'tenetur', 'a', 'sapiente', 'delectus', 'ut', 'aut', 'reiciendis', 'voluptatibus', 'maiores', 'alias', 'consequatur', 'aut', 'perferendis', 'doloribus', 'asperiores', 'repellat'];

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/index.ts");
/* harmony import */ var _components_PredictablePulseEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/PredictablePulseEditor.tsx");
/* harmony import */ var _components_CSVWaveEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/CSVWaveEditor.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/testdata/constants.ts");
/* harmony import */ var _components_GrafanaLiveEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/GrafanaLiveEditor.tsx");
/* harmony import */ var _components_NodeGraphEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/NodeGraphEditor.tsx");
/* harmony import */ var _components_RawFrameEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/RawFrameEditor.tsx");
/* harmony import */ var _runStreams__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/testdata/runStreams.ts");
/* harmony import */ var _components_CSVFileEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/CSVFileEditor.tsx");
/* harmony import */ var _components_CSVContentEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/CSVContentEditor.tsx");
/* harmony import */ var _components_USAQueryEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/USAQueryEditor.tsx");
/* harmony import */ var _components_ErrorEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/ErrorEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _br2, _br3, _br4;

// Libraries

 // Components



 // Types















const showLabelsFor = ['random_walk', 'predictable_pulse'];
const endpoints = [{
  value: 'datasources',
  label: 'Data Sources'
}, {
  value: 'search',
  label: 'Search'
}, {
  value: 'annotations',
  label: 'Annotations'
}];
const selectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.DataSource.TestData.QueryTab;
const QueryEditor = ({
  query,
  datasource,
  onChange,
  onRunQuery
}) => {
  var _query, _query$usa;

  query = Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_6__.defaultQuery, query);
  const {
    loading,
    value: scenarioList
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_16__["default"])(async () => {
    // migrate manual_entry (unusable since 7, removed in 8)
    if (query.scenarioId === 'manual_entry' && query.points) {
      let csvContent = 'Time,Value\n';

      for (const point of query.points) {
        csvContent += `${point[1]},${point[0]}\n`;
      }

      onChange({
        refId: query.refId,
        datasource: query.datasource,
        scenarioId: 'csv_content',
        csvContent
      });
    }

    return datasource.getScenarios();
  }, []);

  const onUpdate = query => {
    onChange(query);
    onRunQuery();
  };

  const currentScenario = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => scenarioList === null || scenarioList === void 0 ? void 0 : scenarioList.find(scenario => scenario.id === query.scenarioId), [scenarioList, query]);
  const scenarioId = currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.id;
  const description = currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.description;

  const onScenarioChange = item => {
    const scenario = scenarioList === null || scenarioList === void 0 ? void 0 : scenarioList.find(sc => sc.id === item.value);

    if (!scenario) {
      return;
    } // Clear model from existing props that belong to other scenarios


    const update = {
      scenarioId: item.value,
      refId: query.refId,
      alias: query.alias,
      datasource: query.datasource
    };

    if (scenario.stringInput) {
      update.stringInput = scenario.stringInput;
    }

    switch (scenario.id) {
      case 'grafana_api':
        update.stringInput = 'datasources';
        break;

      case 'streaming_client':
        update.stream = _runStreams__WEBPACK_IMPORTED_MODULE_10__.defaultStreamQuery;
        break;

      case 'live':
        update.channel = 'random-2s-stream'; // default stream

        break;

      case 'predictable_pulse':
        update.pulseWave = _constants__WEBPACK_IMPORTED_MODULE_6__.defaultPulseQuery;
        break;

      case 'predictable_csv_wave':
        update.csvWave = _constants__WEBPACK_IMPORTED_MODULE_6__.defaultCSVWaveQuery;
        break;

      case 'usa':
        update.usa = {
          mode: _components_USAQueryEditor__WEBPACK_IMPORTED_MODULE_13__.usaQueryModes[0].value
        };
    }

    onUpdate(update);
  };

  const onInputChange = e => {
    const {
      name,
      value,
      type
    } = e.target;
    let newValue = value;

    if (type === 'number') {
      newValue = Number(value);
    }

    if (name === 'levelColumn') {
      newValue = e.target.checked;
    }

    onUpdate(Object.assign({}, query, {
      [name]: newValue
    }));
  };

  const onFieldChange = field => e => {
    const {
      name,
      value,
      type
    } = e.target;
    let newValue = value;

    if (type === 'number') {
      newValue = Number(value);
    }

    onUpdate(Object.assign({}, query, {
      [field]: Object.assign({}, query[field], {
        [name]: newValue
      })
    }));
  };

  const onEndPointChange = ({
    value
  }) => {
    onUpdate(Object.assign({}, query, {
      stringInput: value
    }));
  };

  const onStreamClientChange = onFieldChange('stream');
  const onPulseWaveChange = onFieldChange('pulseWave');

  const onUSAStatsChange = usa => {
    onUpdate(Object.assign({}, query, {
      usa
    }));
  };

  const onCSVWaveChange = csvWave => {
    onUpdate(Object.assign({}, query, {
      csvWave
    }));
  };

  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (scenarioList || []).map(item => ({
    label: item.name,
    value: item.id
  })).sort((a, b) => a.label.localeCompare(b.label)), [scenarioList]);
  const showLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _query$scenarioId;

    return showLabelsFor.includes((_query$scenarioId = query.scenarioId) !== null && _query$scenarioId !== void 0 ? _query$scenarioId : '');
  }, [query]);

  if (loading) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      "aria-label": selectors.scenarioSelectContainer,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        labelWidth: 14,
        label: "Scenario",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
          inputId: `test-data-scenario-select-${query.refId}`,
          menuShouldPortal: true,
          options: options,
          value: options.find(item => item.value === query.scenarioId),
          onChange: onScenarioChange,
          width: 32
        })
      }), (currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.stringInput) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "String Input",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          id: `stringInput-${query.refId}`,
          name: "stringInput",
          placeholder: query.stringInput,
          value: query.stringInput,
          onChange: onInputChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Alias",
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          id: `alias-${query.refId}`,
          type: "text",
          placeholder: "optional",
          pattern: "[^<>&\\\\\"]+",
          name: "alias",
          value: query.alias,
          onChange: onInputChange
        })
      }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Labels",
        labelWidth: 14,
        tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: ["Set labels using a key=value syntax:", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("br", {})), `{ key = "value", key2 = "value" }`, _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("br", {})), "key=\"value\", key2=\"value\"", _br3 || (_br3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("br", {})), "key=value, key2=value", _br4 || (_br4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("br", {}))]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          id: `labels-${query.refId}`,
          name: "labels",
          onChange: onInputChange,
          value: (_query = query) === null || _query === void 0 ? void 0 : _query.labels,
          placeholder: "key=value, key2=value2"
        })
      })]
    }), scenarioId === 'random_walk' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.RandomWalkEditor, {
      onChange: onInputChange,
      query: query
    }), scenarioId === 'streaming_client' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.StreamingClientEditor, {
      onChange: onStreamClientChange,
      query: query
    }), scenarioId === 'live' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_GrafanaLiveEditor__WEBPACK_IMPORTED_MODULE_7__.GrafanaLiveEditor, {
      onChange: onUpdate,
      query: query
    }), scenarioId === 'raw_frame' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_RawFrameEditor__WEBPACK_IMPORTED_MODULE_9__.RawFrameEditor, {
      onChange: onUpdate,
      query: query
    }), scenarioId === 'csv_file' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_CSVFileEditor__WEBPACK_IMPORTED_MODULE_11__.CSVFileEditor, {
      onChange: onUpdate,
      query: query
    }), scenarioId === 'csv_content' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_CSVContentEditor__WEBPACK_IMPORTED_MODULE_12__.CSVContentEditor, {
      onChange: onUpdate,
      query: query
    }), scenarioId === 'logs' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Lines",
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "number",
          name: "lines",
          value: query.lines,
          width: 32,
          onChange: onInputChange,
          placeholder: "10"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Level",
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
          onChange: onInputChange,
          name: "levelColumn",
          value: !!query.levelColumn
        })
      })]
    }), scenarioId === 'usa' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_USAQueryEditor__WEBPACK_IMPORTED_MODULE_13__.USAQueryEditor, {
      onChange: onUSAStatsChange,
      query: (_query$usa = query.usa) !== null && _query$usa !== void 0 ? _query$usa : {}
    }), scenarioId === 'grafana_api' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
      labelWidth: 14,
      label: "Endpoint",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
        menuShouldPortal: true,
        options: endpoints,
        onChange: onEndPointChange,
        width: 32,
        value: endpoints.find(ep => ep.value === query.stringInput)
      })
    }), scenarioId === 'arrow' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
      grow: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TextArea, {
        name: "stringInput",
        value: query.stringInput,
        rows: 10,
        placeholder: "Copy base64 text data from query result",
        onChange: onInputChange
      })
    }), scenarioId === 'predictable_pulse' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PredictablePulseEditor__WEBPACK_IMPORTED_MODULE_4__.PredictablePulseEditor, {
      onChange: onPulseWaveChange,
      query: query
    }), scenarioId === 'predictable_csv_wave' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_CSVWaveEditor__WEBPACK_IMPORTED_MODULE_5__.CSVWavesEditor, {
      onChange: onCSVWaveChange,
      waves: query.csvWave
    }), scenarioId === 'node_graph' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_NodeGraphEditor__WEBPACK_IMPORTED_MODULE_8__.NodeGraphEditor, {
      onChange: val => onChange(Object.assign({}, query, {
        nodes: val
      })),
      query: query
    }), scenarioId === 'server_error_500' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_ErrorEditor__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onChange: onUpdate,
      query: query
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
      children: description
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/TestInfoTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestInfoTab": () => (/* binding */ TestInfoTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

// Libraries

 // Types



class TestInfoTab extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: ["See github for more information about setting up a reproducible test environment.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        variant: "secondary",
        href: "https://github.com/grafana/grafana/tree/main/devenv",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "GitHub"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
    }));
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/CSVContentEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSVContentEditor": () => (/* binding */ CSVContentEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const CSVContentEditor = ({
  onChange,
  query
}) => {
  var _query$csvContent;

  const onSaveCSV = csvContent => {
    onChange(Object.assign({}, query, {
      csvContent
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
    height: 300,
    language: "csv",
    value: (_query$csvContent = query.csvContent) !== null && _query$csvContent !== void 0 ? _query$csvContent : '',
    onBlur: onSaveCSV,
    onSave: onSaveCSV,
    showMiniMap: false,
    showLineNumbers: true
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/CSVFileEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSVFileEditor": () => (/* binding */ CSVFileEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const CSVFileEditor = ({
  onChange,
  query
}) => {
  const onChangeFileName = ({
    value
  }) => {
    onChange(Object.assign({}, query, {
      csvFileName: value
    }));
  };

  const files = ['flight_info_by_state.csv', 'population_by_state.csv', 'gdp_per_capita.csv', 'js_libraries.csv', 'ohlc_dogecoin.csv', 'weight_height.csv', 'browser_marketshare.csv'].map(name => ({
    label: name,
    value: name
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "File",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        menuShouldPortal: true,
        width: 32,
        onChange: onChangeFileName,
        placeholder: "Select csv file",
        options: files,
        value: files.find(f => f.value === query.csvFileName)
      })
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/CSVWaveEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSVWavesEditor": () => (/* binding */ CSVWavesEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/testdata/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CSVWaveEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onFieldChange", field => e => {
      const {
        value
      } = e.target;
      this.props.onChange(this.props.index, Object.assign({}, this.props.wave, {
        [field]: value
      }));
    });

    _defineProperty(this, "onNameChange", this.onFieldChange('name'));

    _defineProperty(this, "onLabelsChange", this.onFieldChange('labels'));

    _defineProperty(this, "onCSVChange", this.onFieldChange('valuesCSV'));

    _defineProperty(this, "onTimeStepChange", e => {
      const timeStep = e.target.valueAsNumber;
      this.props.onChange(this.props.index, Object.assign({}, this.props.wave, {
        timeStep
      }));
    });
  }

  render() {
    const {
      wave,
      last
    } = this.props;
    let action = this.props.onAdd;

    if (!last) {
      action = () => {
        this.props.onChange(this.props.index, undefined); // remove
      };
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Values',
        grow: true,
        tooltip: "Comma separated values. Each value may be an int, float, or null and must not be empty. Whitespace and trailing commas are removed",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.valuesCSV,
          placeholder: 'CSV values',
          onChange: this.onCSVChange,
          autoFocus: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Step',
        tooltip: "The number of seconds between datapoints.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.timeStep,
          type: "number",
          placeholder: '60',
          width: 6,
          onChange: this.onTimeStepChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Labels',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.labels,
          placeholder: 'labels',
          width: 12,
          onChange: this.onLabelsChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Name',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.name,
          placeholder: 'name',
          width: 10,
          onChange: this.onNameChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        icon: last ? 'plus' : 'minus',
        variant: "secondary",
        onClick: action
      })]
    });
  }

}

class CSVWavesEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChange", (index, wave) => {
      var _this$props$waves;

      let waves = [...((_this$props$waves = this.props.waves) !== null && _this$props$waves !== void 0 ? _this$props$waves : _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery)];

      if (wave) {
        waves[index] = Object.assign({}, wave);
      } else {
        // remove the element
        waves.splice(index, 1);
      }

      this.props.onChange(waves);
    });

    _defineProperty(this, "onAdd", () => {
      var _this$props$waves2;

      const waves = [...((_this$props$waves2 = this.props.waves) !== null && _this$props$waves2 !== void 0 ? _this$props$waves2 : _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery)];
      waves.push(Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery[0]));
      this.props.onChange(waves);
    });
  }

  render() {
    var _this$props$waves3;

    let waves = (_this$props$waves3 = this.props.waves) !== null && _this$props$waves3 !== void 0 ? _this$props$waves3 : _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery;

    if (!waves.length) {
      waves = _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: waves.map((wave, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CSVWaveEditor, {
        wave: wave,
        index: index,
        onAdd: this.onAdd,
        onChange: this.onChange,
        last: index === waves.length - 1
      }, `${index}/${wave.valuesCSV}`))
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/ErrorEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const ERROR_OPTIONS = [{
  label: 'Server panic',
  value: 'server_panic'
}, {
  label: 'Frontend exception',
  value: 'frontend_exception'
}, {
  label: 'Frontend observable',
  value: 'frontend_observable'
}];

const FrontendErrorQueryEditor = ({
  query,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.InlineFieldRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.InlineField, {
      labelWidth: 14,
      label: "Error type",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select, {
        options: ERROR_OPTIONS,
        value: query.errorType,
        onChange: v => {
          onChange(Object.assign({}, query, {
            errorType: v.value
          }));
        }
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontendErrorQueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/GrafanaLiveEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaLiveEditor": () => (/* binding */ GrafanaLiveEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const liveTestDataChannels = [{
  label: 'random-2s-stream',
  value: 'random-2s-stream',
  description: 'Random stream with points every 2s'
}, {
  label: 'random-flakey-stream',
  value: 'random-flakey-stream',
  description: 'Stream that returns data in random intervals'
}, {
  label: 'random-labeled-stream',
  value: 'random-labeled-stream',
  description: 'Value with moving labels'
}, {
  label: 'random-20Hz-stream',
  value: 'random-20Hz-stream',
  description: 'Random stream with points in 20Hz'
}];
const GrafanaLiveEditor = ({
  onChange,
  query
}) => {
  const onChannelChange = ({
    value
  }) => {
    onChange(Object.assign({}, query, {
      channel: value
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Channel",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        menuShouldPortal: true,
        width: 32,
        onChange: onChannelChange,
        placeholder: "Select channel",
        options: liveTestDataChannels,
        value: liveTestDataChannels.find(f => f.value === query.channel)
      })
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/NodeGraphEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeGraphEditor": () => (/* binding */ NodeGraphEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function NodeGraphEditor({
  query,
  onChange
}) {
  var _query$nodes, _query$nodes2;

  const type = ((_query$nodes = query.nodes) === null || _query$nodes === void 0 ? void 0 : _query$nodes.type) || 'random';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Data type",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        options: options.map(o => ({
          label: o,
          value: o
        })),
        value: options.find(item => item === type),
        onChange: value => onChange(Object.assign({}, query.nodes, {
          type: value.value
        })),
        width: 32
      })
    }), type === 'random' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Count",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        type: "number",
        name: "count",
        value: (_query$nodes2 = query.nodes) === null || _query$nodes2 === void 0 ? void 0 : _query$nodes2.count,
        width: 32,
        onChange: e => onChange(Object.assign({}, query.nodes, {
          count: e.currentTarget.value ? parseInt(e.currentTarget.value, 10) : 0
        })),
        placeholder: "10"
      })
    })]
  });
}
const options = ['random', 'response'];

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/PredictablePulseEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictablePulseEditor": () => (/* binding */ PredictablePulseEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const fields = [{
  label: 'Step',
  id: 'timeStep',
  placeholder: '60',
  tooltip: 'The number of seconds between datapoints.'
}, {
  label: 'On Count',
  id: 'onCount',
  placeholder: '3',
  tooltip: 'The number of values within a cycle, at the start of the cycle, that should have the onValue.'
}, {
  label: 'Off Count',
  id: 'offCount',
  placeholder: '6',
  tooltip: 'The number of offValues within the cycle.'
}, {
  label: 'On Value',
  id: 'onValue',
  placeholder: '1',
  tooltip: 'The value for "on values", may be an int, float, or null.'
}, {
  label: 'Off Value',
  id: 'offValue',
  placeholder: '1',
  tooltip: 'The value for "off values", may be a int, float, or null.'
}];
const PredictablePulseEditor = ({
  onChange,
  query
}) => {
  // Convert values to numbers before saving
  const onInputChange = e => {
    const {
      name,
      value
    } = e.target;
    onChange({
      target: {
        name,
        value: Number(value)
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: fields.map(({
      label,
      id,
      placeholder,
      tooltip
    }) => {
      var _query$pulseWave;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: label,
        labelWidth: 14,
        tooltip: tooltip,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          width: 32,
          type: "number",
          name: id,
          id: `pulseWave.${id}-${query.refId}`,
          value: (_query$pulseWave = query.pulseWave) === null || _query$pulseWave === void 0 ? void 0 : _query$pulseWave[id],
          placeholder: placeholder,
          onChange: onInputChange
        })
      }, id);
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/RandomWalkEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomWalkEditor": () => (/* binding */ RandomWalkEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const randomWalkFields = [{
  label: 'Series count',
  id: 'seriesCount',
  placeholder: '1',
  min: 1,
  step: 1
}, {
  label: 'Start value',
  id: 'startValue',
  placeholder: 'auto',
  step: 1
}, {
  label: 'Min',
  id: 'min',
  placeholder: 'none',
  step: 0.1
}, {
  label: 'Max',
  id: 'max',
  placeholder: 'none',
  step: 0.1
}, {
  label: 'Spread',
  id: 'spread',
  placeholder: '1',
  min: 0.5,
  step: 0.1
}, {
  label: 'Noise',
  id: 'noise',
  placeholder: '0',
  min: 0,
  step: 0.1
}, {
  label: 'Drop (%)',
  id: 'drop',
  placeholder: '0',
  min: 0,
  max: 100,
  step: 1,
  tooltip: 'Exclude some percent (chance) points'
}];
const testSelectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.DataSource.TestData.QueryTab;
const RandomWalkEditor = ({
  onChange,
  query
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: randomWalkFields.map(({
      label,
      id,
      min,
      step,
      placeholder,
      tooltip
    }) => {
      const selector = testSelectors === null || testSelectors === void 0 ? void 0 : testSelectors[id];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: label,
        labelWidth: 14,
        "aria-label": selector,
        tooltip: tooltip,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          width: 32,
          name: id,
          type: "number",
          id: `randomWalk-${id}-${query.refId}`,
          min: min,
          step: step,
          value: query[id] || placeholder,
          placeholder: placeholder,
          onChange: onChange
        })
      }, id);
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/RawFrameEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawFrameEditor": () => (/* binding */ RawFrameEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const RawFrameEditor = ({
  onChange,
  query
}) => {
  var _query$rawFrameConten;

  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [warning, setWarning] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const onSaveFrames = rawFrameContent => {
    try {
      const json = JSON.parse(rawFrameContent);

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(json)) {
        setError(undefined);
        setWarning(undefined);
        onChange(Object.assign({}, query, {
          rawFrameContent
        }));
        return;
      }

      let data = undefined; // Copy paste from panel json

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(json.series) && json.state) {
        data = json.series.map(v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toDataFrameDTO)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toDataFrame)(v)));
      } else {
        var _v$data;

        // Chek if it is a copy of the raw resuls
        const v = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.toDataQueryResponse)({
          data: json
        });

        if ((_v$data = v.data) !== null && _v$data !== void 0 && _v$data.length && !v.error) {
          data = v.data.map(f => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dataFrameToJSON)(f));
        }
      }

      if (data) {
        console.log('Original', json);
        console.log('Save', data);
        setError(undefined);
        setWarning('Converted to direct frame result');
        onChange(Object.assign({}, query, {
          rawFrameContent: JSON.stringify(data, null, 2)
        }));
        return;
      }

      setError('Unable to read dataframes in text');
    } catch (e) {
      console.log('Error parsing json', e);
      setError('Enter JSON array of data frames (or raw query results body)');
      setWarning(undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      title: error,
      severity: "error"
    }), warning && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      title: warning,
      severity: "warning"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
      height: 300,
      language: "json",
      value: (_query$rawFrameConten = query.rawFrameContent) !== null && _query$rawFrameConten !== void 0 ? _query$rawFrameConten : '[]',
      onBlur: onSaveFrames,
      onSave: onSaveFrames,
      showMiniMap: true,
      showLineNumbers: true
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/StreamingClientEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamingClientEditor": () => (/* binding */ StreamingClientEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const streamingClientFields = [{
  label: 'Speed (ms)',
  id: 'speed',
  placeholder: 'value',
  min: 10,
  step: 10
}, {
  label: 'Spread',
  id: 'spread',
  placeholder: 'value',
  min: 0.5,
  step: 0.1
}, {
  label: 'Noise',
  id: 'noise',
  placeholder: 'value',
  min: 0,
  step: 0.1
}, {
  label: 'Bands',
  id: 'bands',
  placeholder: 'bands',
  min: 0,
  step: 1
}];
const types = [{
  value: 'signal',
  label: 'Signal'
}, {
  value: 'logs',
  label: 'Logs'
}, {
  value: 'fetch',
  label: 'Fetch'
}];
const StreamingClientEditor = ({
  onChange,
  query
}) => {
  var _query$stream, _query$stream3, _query$stream4;

  const onSelectChange = ({
    value
  }) => {
    onChange({
      target: {
        name: 'type',
        value
      }
    });
  }; // Convert values to numbers before saving


  const onInputChange = e => {
    const {
      name,
      value
    } = e.target;
    onChange({
      target: {
        name,
        value: Number(value)
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Type",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        menuShouldPortal: true,
        width: 32,
        onChange: onSelectChange,
        defaultValue: types[0],
        options: types
      })
    }), (query === null || query === void 0 ? void 0 : (_query$stream = query.stream) === null || _query$stream === void 0 ? void 0 : _query$stream.type) === 'signal' && streamingClientFields.map(({
      label,
      id,
      min,
      step,
      placeholder
    }) => {
      var _query$stream2;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: label,
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          width: 32,
          type: "number",
          id: `stream.${id}-${query.refId}`,
          name: id,
          min: min,
          step: step,
          value: (_query$stream2 = query.stream) === null || _query$stream2 === void 0 ? void 0 : _query$stream2[id],
          placeholder: placeholder,
          onChange: onInputChange
        })
      }, id);
    }), (query === null || query === void 0 ? void 0 : (_query$stream3 = query.stream) === null || _query$stream3 === void 0 ? void 0 : _query$stream3.type) === 'fetch' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "URL",
      labelWidth: 14,
      grow: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        type: "text",
        name: "url",
        id: `stream.url-${query.refId}`,
        value: query === null || query === void 0 ? void 0 : (_query$stream4 = query.stream) === null || _query$stream4 === void 0 ? void 0 : _query$stream4.url,
        placeholder: "Fetch URL",
        onChange: onChange
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/USAQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USAQueryEditor": () => (/* binding */ USAQueryEditor),
/* harmony export */   "fieldNames": () => (/* binding */ fieldNames),
/* harmony export */   "stateNames": () => (/* binding */ stateNames),
/* harmony export */   "usaQueryModes": () => (/* binding */ usaQueryModes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function USAQueryEditor({
  query,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Mode",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
          menuShouldPortal: true,
          options: usaQueryModes,
          onChange: v => {
            onChange(Object.assign({}, query, {
              mode: v.value
            }));
          },
          width: 32,
          value: usaQueryModes.find(ep => ep.value === query.mode)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Period",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: query.period,
          placeholder: '30m',
          onChange: v => {
            onChange(Object.assign({}, query, {
              period: v.currentTarget.value
            }));
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Fields",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, {
          menuShouldPortal: true,
          options: fieldNames,
          onChange: vals => {
            onChange(Object.assign({}, query, {
              fields: vals.map(v => v.value)
            }));
          },
          width: 32,
          placeholder: "all",
          value: query.fields
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "States",
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, {
          menuShouldPortal: true,
          options: stateNames,
          onChange: vals => {
            onChange(Object.assign({}, query, {
              states: vals.map(v => v.value)
            }));
          },
          placeholder: "all",
          value: query.states
        })
      })]
    })]
  });
}
const usaQueryModes = ['values-as-rows', 'values-as-fields', 'values-as-labeled-fields', 'timeseries', 'timeseries-wide'].map(f => ({
  label: f,
  value: f
}));
const fieldNames = ['foo', 'bar', 'baz' // all short
].map(f => ({
  label: f,
  value: f
}));
const stateNames = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'].map(f => ({
  label: f,
  value: f
}));

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomWalkEditor": () => (/* reexport safe */ _RandomWalkEditor__WEBPACK_IMPORTED_MODULE_1__.RandomWalkEditor),
/* harmony export */   "StreamingClientEditor": () => (/* reexport safe */ _StreamingClientEditor__WEBPACK_IMPORTED_MODULE_0__.StreamingClientEditor)
/* harmony export */ });
/* harmony import */ var _StreamingClientEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/StreamingClientEditor.tsx");
/* harmony import */ var _RandomWalkEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/RandomWalkEditor.tsx");



/***/ }),

/***/ "./public/app/plugins/datasource/testdata/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultCSVWaveQuery": () => (/* binding */ defaultCSVWaveQuery),
/* harmony export */   "defaultPulseQuery": () => (/* binding */ defaultPulseQuery),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
const defaultPulseQuery = {
  timeStep: 60,
  onCount: 3,
  onValue: 2,
  offCount: 3,
  offValue: 1
};
const defaultCSVWaveQuery = [{
  timeStep: 60,
  valuesCSV: '0,0,2,2,1,1'
}];
const defaultQuery = {
  scenarioId: 'random_walk',
  refId: ''
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDataDataSource": () => (/* binding */ TestDataDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/delay.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _metricTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/testdata/metricTree.ts");
/* harmony import */ var _runStreams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/testdata/runStreams.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/testdata/variables.ts");
/* harmony import */ var _nodeGraphUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/testdata/nodeGraphUtils.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class TestDataDataSource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "scenariosCache", void 0);

    this.templateSrv = templateSrv;
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_5__.TestDataVariableSupport();
  }

  query(options) {
    const backendQueries = [];
    const streams = []; // Start streams and prepare queries

    for (const target of options.targets) {
      if (target.hide) {
        continue;
      }

      this.resolveTemplateVariables(target, options.scopedVars);

      switch (target.scenarioId) {
        case 'live':
          streams.push(runGrafanaLiveQuery(target, options));
          break;

        case 'streaming_client':
          streams.push((0,_runStreams__WEBPACK_IMPORTED_MODULE_3__.runStream)(target, options));
          break;

        case 'grafana_api':
          streams.push(runGrafanaAPI(target, options));
          break;

        case 'annotations':
          streams.push(this.annotationDataTopicTest(target, options));
          break;

        case 'variables-query':
          streams.push(this.variablesQuery(target, options));
          break;

        case 'node_graph':
          streams.push(this.nodesQuery(target, options));
          break;

        case 'raw_frame':
          streams.push(this.rawFrameQuery(target, options));
          break;

        case 'server_error_500':
          // this now has an option where it can return/throw an error from the frontend.
          // if it doesn't, send it to the backend where it might panic there :)
          const query = this.serverErrorQuery(target, options);
          query ? streams.push(query) : backendQueries.push(target);
          break;
        // Unusable since 7, removed in 8

        case 'manual_entry':
          {
            let csvContent = 'Time,Value\n';

            if (target.points) {
              for (const point of target.points) {
                csvContent += `${point[1]},${point[0]}\n`;
              }
            }

            target.scenarioId = 'csv_content';
            target.csvContent = csvContent;
          }

        default:
          backendQueries.push(target);
      }
    }

    if (backendQueries.length) {
      const backendOpts = Object.assign({}, options, {
        targets: backendQueries
      });
      streams.push(super.query(backendOpts));
    }

    if (streams.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data: []
      });
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...streams);
  }

  resolveTemplateVariables(query, scopedVars) {
    if (query.labels) {
      query.labels = this.templateSrv.replace(query.labels, scopedVars);
    }

    if (query.alias) {
      query.alias = this.templateSrv.replace(query.alias, scopedVars);
    }

    if (query.scenarioId) {
      query.scenarioId = this.templateSrv.replace(query.scenarioId, scopedVars);
    }

    if (query.stringInput) {
      query.stringInput = this.templateSrv.replace(query.stringInput, scopedVars);
    }

    if (query.csvContent) {
      query.csvContent = this.templateSrv.replace(query.csvContent, scopedVars);
    }

    if (query.rawFrameContent) {
      query.rawFrameContent = this.templateSrv.replace(query.rawFrameContent, scopedVars);
    }
  }

  annotationDataTopicTest(target, req) {
    const events = this.buildFakeAnnotationEvents(req.range, 50);
    const dataFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(events);
    dataFrame.meta = {
      dataTopic: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataTopic.Annotations
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      key: target.refId,
      data: [dataFrame]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
  }

  buildFakeAnnotationEvents(range, count) {
    let timeWalker = range.from.valueOf();
    const to = range.to.valueOf();
    const events = [];
    const step = (to - timeWalker) / count;

    for (let i = 0; i < count; i++) {
      events.push({
        time: timeWalker,
        text: 'This is the text, <a href="https://grafana.com">Grafana.com</a>',
        tags: ['text', 'server']
      });
      timeWalker += step;
    }

    return events;
  }

  annotationQuery(options) {
    return Promise.resolve(this.buildFakeAnnotationEvents(options.range, 10));
  }

  getQueryDisplayText(query) {
    var _query$scenarioId;

    const scenario = (_query$scenarioId = query.scenarioId) !== null && _query$scenarioId !== void 0 ? _query$scenarioId : 'Default scenario';

    if (query.alias) {
      return scenario + ' as ' + query.alias;
    }

    return scenario;
  }

  testDatasource() {
    return Promise.resolve({
      status: 'success',
      message: 'Data source is working'
    });
  }

  getScenarios() {
    if (!this.scenariosCache) {
      this.scenariosCache = this.getResource('scenarios');
    }

    return this.scenariosCache;
  }

  variablesQuery(target, options) {
    var _target$stringInput;

    const query = (_target$stringInput = target.stringInput) !== null && _target$stringInput !== void 0 ? _target$stringInput : '';
    const interpolatedQuery = this.templateSrv.replace(query, (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_4__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '*',
      options: options.scopedVars
    }));
    const children = (0,_metricTree__WEBPACK_IMPORTED_MODULE_2__.queryMetricTree)(interpolatedQuery);
    const items = children.map(item => ({
      value: item.name,
      text: item.name
    }));
    const dataFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(items);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      data: [dataFrame]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
  }

  nodesQuery(target, options) {
    var _target$nodes, _target$nodes2;

    const type = ((_target$nodes = target.nodes) === null || _target$nodes === void 0 ? void 0 : _target$nodes.type) || 'random';
    let frames;

    switch (type) {
      case 'random':
        frames = (0,_nodeGraphUtils__WEBPACK_IMPORTED_MODULE_6__.generateRandomNodes)((_target$nodes2 = target.nodes) === null || _target$nodes2 === void 0 ? void 0 : _target$nodes2.count);
        break;

      case 'response':
        frames = (0,_nodeGraphUtils__WEBPACK_IMPORTED_MODULE_6__.savedNodesResponse)();
        break;

      default:
        throw new Error(`Unknown node_graph sub type ${type}`);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      data: frames
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
  }

  rawFrameQuery(target, options) {
    try {
      var _target$rawFrameConte;

      const data = JSON.parse((_target$rawFrameConte = target.rawFrameContent) !== null && _target$rawFrameConte !== void 0 ? _target$rawFrameConte : '[]').map(v => {
        const f = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.toDataFrame)(v);
        f.refId = target.refId;
        return f;
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data,
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
    } catch (ex) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data: [],
        error: ex
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
    }
  }

  serverErrorQuery(target, options) {
    var _target$stringInput2;

    const {
      errorType
    } = target;
    console.log("we're here!", target);

    if (errorType === 'server_panic') {
      return null;
    }

    const stringInput = (_target$stringInput2 = target.stringInput) !== null && _target$stringInput2 !== void 0 ? _target$stringInput2 : '';

    if (stringInput === '') {
      if (errorType === 'frontend_exception') {
        throw new Error('Scenario threw an exception in the frontend because the input was empty.');
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => new Error('Scenario returned an error because the input was empty.'));
      }
    }

    return null;
  }

}

function runGrafanaAPI(target, req) {
  const url = `/api/${target.stringInput}`;
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(url).then(res => {
    const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(res);
    return {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
      data: [frame]
    };
  }));
}

let liveQueryCounter = 1000;

function runGrafanaLiveQuery(target, req) {
  if (!target.channel) {
    throw new Error(`Missing channel config`);
  }

  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getGrafanaLiveSrv)().getDataStream({
    addr: {
      scope: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LiveChannelScope.Plugin,
      namespace: 'testdata',
      path: target.channel
    },
    key: `testStream.${liveQueryCounter++}`
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/metricTree.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryMetricTree": () => (/* binding */ queryMetricTree)
/* harmony export */ });
/*
 *  Builds a nested tree like
 *  [
 *    {
 *      name: 'A',
 *      children: [
 *        { name: 'AA', children: [] },
 *        { name: 'AB', children: [] },
 *      ]
 *    }
 *  ]
 */
function buildMetricTree(parent, depth) {
  const chars = ['A', 'B', 'C'];
  const children = [];

  if (depth > 5) {
    return [];
  }

  for (const letter of chars) {
    const nodeName = `${parent}${letter}`;
    children.push({
      name: nodeName,
      children: buildMetricTree(nodeName, depth + 1)
    });
  }

  return children;
}

function queryTree(children, query, queryIndex) {
  if (queryIndex >= query.length) {
    return children;
  }

  if (query[queryIndex] === '*') {
    return children;
  }

  const nodeQuery = query[queryIndex];
  let result = [];
  let namesToMatch = [nodeQuery]; // handle glob queries

  if (nodeQuery.startsWith('{')) {
    namesToMatch = nodeQuery.replace(/\{|\}/g, '').split(',');
  }

  for (const node of children) {
    for (const nameToMatch of namesToMatch) {
      if (nameToMatch.indexOf('*') !== -1) {
        const pattern = nameToMatch.replace('*', '');
        const regex = new RegExp(`^${pattern}.*`, 'gi');

        if (regex.test(node.name)) {
          result = result.concat(queryTree([node], query, queryIndex + 1));
        }
      } else if (node.name === nameToMatch) {
        result = result.concat(queryTree(node.children, query, queryIndex + 1));
      }
    }
  }

  return result;
}

function queryMetricTree(query) {
  if (query.indexOf('value') === 0) {
    return [{
      name: query,
      children: []
    }];
  }

  const children = buildMetricTree('', 0);
  return queryTree(children, query.split('.'), 0);
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/testdata/datasource.ts");
/* harmony import */ var _TestInfoTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/testdata/TestInfoTab.tsx");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/testdata/ConfigEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/QueryEditor.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class TestDataAnnotationsQueryCtrl {
  constructor() {
    _defineProperty(this, "annotation", void 0);
  }

}

_defineProperty(TestDataAnnotationsQueryCtrl, "template", '<h2>Annotation scenario</h2>');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_1__.TestDataDataSource).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_4__.QueryEditor).setAnnotationQueryCtrl(TestDataAnnotationsQueryCtrl).addConfigPage({
  title: 'Setup',
  icon: 'list-ul',
  body: _TestInfoTab__WEBPACK_IMPORTED_MODULE_2__.TestInfoTab,
  id: 'setup'
});

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/nodeGraphUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRandomNodes": () => (/* binding */ generateRandomNodes),
/* harmony export */   "savedNodesResponse": () => (/* binding */ savedNodesResponse)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _testData_serviceMapResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/testdata/testData/serviceMapResponse.ts");


function generateRandomNodes(count = 10) {
  const nodes = [];
  const root = {
    id: '0',
    title: 'root',
    subTitle: 'client',
    success: 1,
    error: 0,
    stat1: Math.random(),
    stat2: Math.random(),
    edges: []
  };
  nodes.push(root);
  const nodesWithoutMaxEdges = [root];
  const maxEdges = 3;

  for (let i = 1; i < count; i++) {
    const node = makeRandomNode(i);
    nodes.push(node);
    const sourceIndex = Math.floor(Math.random() * Math.floor(nodesWithoutMaxEdges.length - 1));
    const source = nodesWithoutMaxEdges[sourceIndex];
    source.edges.push(node.id);

    if (source.edges.length >= maxEdges) {
      nodesWithoutMaxEdges.splice(sourceIndex, 1);
    }

    nodesWithoutMaxEdges.push(node);
  } // Add some random edges to create possible cycle


  const additionalEdges = Math.floor(count / 2);

  for (let i = 0; i <= additionalEdges; i++) {
    const sourceIndex = Math.floor(Math.random() * Math.floor(nodes.length - 1));
    const targetIndex = Math.floor(Math.random() * Math.floor(nodes.length - 1));

    if (sourceIndex === targetIndex || nodes[sourceIndex].id === '0' || nodes[sourceIndex].id === '0') {
      continue;
    }

    nodes[sourceIndex].edges.push(nodes[sourceIndex].id);
  }

  const nodeFields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayName: 'Transactions per second'
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayName: 'Average duration'
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success']: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          fixedColor: 'green',
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
        },
        displayName: 'Success'
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'errors']: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          fixedColor: 'red',
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
        },
        displayName: 'Errors'
      }
    }
  };
  const nodeFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    name: 'nodes',
    fields: Object.keys(nodeFields).map(key => Object.assign({}, nodeFields[key], {
      name: key
    })),
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgeFields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }
  };
  const edgesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    name: 'edges',
    fields: Object.keys(edgeFields).map(key => Object.assign({}, edgeFields[key], {
      name: key
    })),
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgesSet = new Set();

  for (const node of nodes) {
    nodeFields.id.values.add(node.id);
    nodeFields.title.values.add(node.title);
    nodeFields.subTitle.values.add(node.subTitle);
    nodeFields.mainStat.values.add(node.stat1);
    nodeFields.secondaryStat.values.add(node.stat2);
    nodeFields.arc__success.values.add(node.success);
    nodeFields.arc__errors.values.add(node.error);

    for (const edge of node.edges) {
      const id = `${node.id}--${edge}`; // We can have duplicate edges when we added some more by random

      if (edgesSet.has(id)) {
        continue;
      }

      edgesSet.add(id);
      edgeFields.id.values.add(`${node.id}--${edge}`);
      edgeFields.source.values.add(node.id);
      edgeFields.target.values.add(edge);
    }
  }

  return [nodeFrame, edgesFrame];
}

function makeRandomNode(index) {
  const success = Math.random();
  const error = 1 - success;
  return {
    id: index.toString(),
    title: `service:${index}`,
    subTitle: 'service',
    success,
    error,
    stat1: Math.random(),
    stat2: Math.random(),
    edges: []
  };
}

function savedNodesResponse() {
  return [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame(_testData_serviceMapResponse__WEBPACK_IMPORTED_MODULE_1__.nodes), new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame(_testData_serviceMapResponse__WEBPACK_IMPORTED_MODULE_1__.edges)];
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/runStreams.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultStreamQuery": () => (/* binding */ defaultStreamQuery),
/* harmony export */   "runFetchStream": () => (/* binding */ runFetchStream),
/* harmony export */   "runLogsStream": () => (/* binding */ runLogsStream),
/* harmony export */   "runSignalStream": () => (/* binding */ runSignalStream),
/* harmony export */   "runStream": () => (/* binding */ runStream)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _LogIpsum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/testdata/LogIpsum.ts");
/* harmony import */ var app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
/* harmony import */ var app_features_live_data_StreamingDataFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/live/data/StreamingDataFrame.ts");






const defaultStreamQuery = {
  type: 'signal',
  speed: 250,
  // ms
  spread: 3.5,
  noise: 2.2,
  bands: 1
};
function runStream(target, req) {
  const query = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaults)(target.stream, defaultStreamQuery);

  if ('signal' === query.type) {
    return runSignalStream(target, query, req);
  }

  if ('logs' === query.type) {
    return runLogsStream(target, query, req);
  }

  if ('fetch' === query.type) {
    return runFetchStream(target, query, req);
  }

  throw new Error(`Unknown Stream Type: ${query.type}`);
}
function runSignalStream(target, query, req) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    var _target$alias;

    const streamId = `signal-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    const schema = {
      refId: target.refId,
      fields: [{
        name: 'time',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
      }, {
        name: (_target$alias = target.alias) !== null && _target$alias !== void 0 ? _target$alias : 'value',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
      }]
    };
    const {
      spread,
      speed,
      bands = 0,
      noise
    } = query;

    for (let i = 0; i < bands; i++) {
      const suffix = bands > 1 ? ` ${i + 1}` : '';
      schema.fields.push({
        name: 'Min' + suffix,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
      });
      schema.fields.push({
        name: 'Max' + suffix,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
      });
    }

    const frame = app_features_live_data_StreamingDataFrame__WEBPACK_IMPORTED_MODULE_4__.StreamingDataFrame.fromDataFrameJSON({
      schema
    }, {
      maxLength: maxDataPoints
    });
    let value = Math.random() * 100;
    let timeoutId = null;
    let lastSent = -1;

    const addNextRow = time => {
      value += (Math.random() - 0.5) * spread;
      const data = {
        values: [[time], [value]]
      };
      let min = value;
      let max = value;

      for (let i = 0; i < bands; i++) {
        min = min - Math.random() * noise;
        max = max + Math.random() * noise;
        data.values.push([min]);
        data.values.push([max]);
      }

      const event = {
        data
      };
      return frame.push(event);
    }; // Fill the buffer on init


    if (true) {
      let time = Date.now() - maxDataPoints * speed;

      for (let i = 0; i < maxDataPoints; i++) {
        addNextRow(time);
        time += speed;
      }
    }

    const pushNextEvent = () => {
      addNextRow(Date.now());
      const elapsed = app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_3__.liveTimer.lastUpdate - lastSent;

      if (elapsed > 1000 || app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_3__.liveTimer.ok) {
        subscriber.next({
          data: [frame],
          key: streamId,
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Streaming
        });
        lastSent = app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_3__.liveTimer.lastUpdate;
      }

      timeoutId = setTimeout(pushNextEvent, speed);
    }; // Send first event in 5ms


    setTimeout(pushNextEvent, 5);
    return () => {
      console.log('unsubscribing to stream ' + streamId);
      clearTimeout(timeoutId);
    };
  });
}
function runLogsStream(target, query, req) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const streamId = `logs-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    const data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({
      append: 'tail',
      capacity: maxDataPoints
    });
    data.refId = target.refId;
    data.name = target.alias || 'Logs ' + target.refId;
    data.addField({
      name: 'line',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    });
    data.addField({
      name: 'time',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
    });
    data.meta = {
      preferredVisualisationType: 'logs'
    };
    const {
      speed
    } = query;
    let timeoutId = null;

    const pushNextEvent = () => {
      data.fields[0].values.add(Date.now());
      data.fields[1].values.add((0,_LogIpsum__WEBPACK_IMPORTED_MODULE_2__.getRandomLine)());
      subscriber.next({
        data: [data],
        key: streamId
      });
      timeoutId = setTimeout(pushNextEvent, speed);
    }; // Send first event in 5ms


    setTimeout(pushNextEvent, 5);
    return () => {
      console.log('unsubscribing to stream ' + streamId);
      clearTimeout(timeoutId);
    };
  });
}
function runFetchStream(target, query, req) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const streamId = `fetch-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    let data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({
      append: 'tail',
      capacity: maxDataPoints
    });
    data.refId = target.refId;
    data.name = target.alias || 'Fetch ' + target.refId;
    let reader;
    const csv = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CSVReader({
      callback: {
        onHeader: fields => {
          // Clear any existing fields
          if (data.fields.length) {
            data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({
              append: 'tail',
              capacity: maxDataPoints
            });
            data.refId = target.refId;
            data.name = 'Fetch ' + target.refId;
          }

          for (const field of fields) {
            data.addField(field);
          }
        },
        onRow: row => {
          data.add(row);
        }
      }
    });

    const processChunk = value => {
      if (value.value) {
        const text = new TextDecoder().decode(value.value);
        csv.readCSV(text);
      }

      subscriber.next({
        data: [data],
        key: streamId,
        state: value.done ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done : _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Streaming
      });

      if (value.done) {
        console.log('Finished stream');
        subscriber.complete(); // necessary?

        return;
      }

      return reader.read().then(processChunk);
    };

    if (!query.url) {
      throw new Error('query.url is not defined');
    }

    fetch(new Request(query.url)).then(response => {
      if (response.body) {
        reader = response.body.getReader();
        reader.read().then(processChunk);
      }
    });
    return () => {
      // Cancel fetch?
      console.log('unsubscribing to stream ' + streamId);
    };
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/testData/serviceMapResponse.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "edges": () => (/* binding */ edges),
/* harmony export */   "nodes": () => (/* binding */ nodes)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

const nodes = {
  fields: [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      links: [{
        title: 'Traces/All',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}"))'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/OK',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { ok = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Errors',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { error = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Faults',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { fault = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }]
    },
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      displayName: 'Name'
    },
    values: ['auth', 'products', 'customers', 'orders', 'products', 'orders', 'api', 'shipping', 'orders', 'execute-api', 'shipping', 'www', 'api', 'www', 'products']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      displayName: 'Type'
    },
    values: ['Compute', 'SQL', 'SQL', 'SQL', 'remote', 'Function', 'Compute', 'Function', 'Function', 'remote', 'Function', 'Compute', 'client', 'client', 'Compute']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      unit: 'ms/t',
      displayName: 'Average response time'
    },
    values: [3.5394042646735553, 15.906441318223264, 4.913011921591567, 7.4163203042094095, 1092, 22.85961441405067, 56.135855729084696, 4.45946191601527, 12.818300278280843, 4.25, 12.565442646791492, 77.63447512700567, 40.387096774193544, 77.63447512700567, 27.648950187374872]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      unit: 't/min',
      displayName: 'Transactions per minute'
    },
    values: [50.56317154501667, 682.4, 512.8416666666667, 125.64444444444445, 0.005585812037424941, 137.59722222222223, 300.0527777777778, 30.582348853370394, 125.77222222222223, 0.028706417080318163, 30.582348853370394, 165.675, 0.100021510002151, 165.675, 162.33055555555555]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'green'
      },
      displayName: 'Sucesss'
    },
    values: [0.9338865684765882, 1, 1, 1, 0.5, 1, 0.9901128505170387, 0.9069260134520997, 1, 0, 0.9069260134520997, 0.9624432037288534, 0, 0.9624432037288534, 0.9824945669843769]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'faults',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'red'
      },
      displayName: 'Faults'
    },
    values: [0, 0, 0, 0, 0.5, 0, 0.009479813736472288, 0, 0, 0, 0, 0.017168821152524185, 0, 0.017168821152524185, 0.01750543301562313]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'errors',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'semi-dark-yellow'
      },
      displayName: 'Errors'
    },
    values: [0.06611343152341174, 0, 0, 0, 0, 0, 0.0004073357464890436, 0.09307398654790038, 0, 1, 0.09307398654790038, 0.02038797511862247, 1, 0.02038797511862247, 0]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'throttled',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'purple'
      },
      displayName: 'Throttled'
    },
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }],
  meta: {
    preferredVisualisationType: 'nodeGraph'
  },
  name: 'nodes'
};
const edges = {
  fields: [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      links: [{
        title: 'Traces/All',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}")'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/OK',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { ok = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Errors',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { error = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Faults',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { fault = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }]
    },
    values: ['0__2', '5__8', '6__0', '6__5', '6__9', '6__2', '6__14', '6__4', '8__3', '10__7', '11__0', '11__6', '12__6', '13__11', '14__1', '14__2', '14__10']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: [0, 5, 6, 6, 6, 6, 6, 6, 8, 10, 11, 11, 12, 13, 14, 14, 14]
  }, {
    name: 'sourceName',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: ['auth', 'orders', 'api', 'api', 'api', 'api', 'api', 'api', 'orders', 'shipping', 'www', 'www', 'api', 'www', 'products', 'products', 'products']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: [2, 8, 0, 5, 9, 2, 14, 4, 3, 7, 0, 6, 6, 11, 1, 2, 10]
  }, {
    name: 'targetName',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: ['customers', 'orders', 'auth', 'orders', 'execute-api', 'customers', 'products', 'products', 'orders', 'shipping', 'auth', 'api', 'api', 'www', 'products', 'customers', 'shipping']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      displayName: 'Response percentage'
    },
    values: ['Success 100.00%', 'Success 100.00%', 'Success 100.00%', 'Success 100.00%', 'Errors 100.00%', 'Success 100.00%', 'Faults 1.75%', 'Faults 50.00%', 'Success 100.00%', 'Errors 9.31%', 'Errors 6.62%', 'Faults 1.13%', 'Errors 100.00%', 'Faults 1.72%', 'Success 100.00%', 'Success 100.00%', 'Faults 9.30%']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      unit: 't/min',
      displayName: 'Transactions per minute'
    },
    values: [50.56317154501667, 125.77222222222223, 0.03333333333333333, 137.59722222222223, 0.022222222222222223, 299.96666666666664, 162.33055555555555, 0.005555555555555556, 125.64444444444445, 30.582348853370394, 50.51111111111111, 299.9166666666667, 0.100021510002151, 165.675, 682.4, 162.33055555555555, 30.558333333333334]
  }],
  meta: {
    preferredVisualisationType: 'nodeGraph'
  },
  name: 'edges'
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDataVariableSupport": () => (/* binding */ TestDataVariableSupport)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

class TestDataVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.StandardVariableSupport {
  toDataQuery(query) {
    return {
      refId: 'TestDataDataSource-QueryVariable',
      stringInput: query.query,
      scenarioId: 'variables-query',
      csvWave: undefined
    };
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBaUJOLGNBakJNO0FBSlYsR0F4SU0sRUFnS047QUFDRWhQLElBQUFBLElBQUksRUFBRWlPLHFGQURSO0FBRUVoTyxJQUFBQSxJQUFJLEVBQUU4TiwyREFGUjtBQUdFcUIsSUFBQUEsTUFBTSxFQUFFO0FBQUVpRixNQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQmhGLE1BQUFBLFdBQVcsRUFBRTtBQUE5QixLQUhWO0FBSUVMLElBQUFBLE1BQU0sRUFBRSxDQUNOLGlCQURNLEVBQ2Esa0JBRGIsRUFDaUMsbUJBRGpDLEVBQ3NELGtCQUR0RCxFQUMwRSxvQkFEMUUsRUFFTixrQkFGTSxFQUVjLGtCQUZkLEVBRWtDLG9CQUZsQyxFQUV3RCxrQkFGeEQsRUFFNEUsa0JBRjVFLEVBR04saUJBSE0sRUFHYSxpQkFIYixFQUdnQyxpQkFIaEMsRUFHbUQsT0FIbkQsRUFHNEQsS0FINUQsRUFHbUUsa0JBSG5FLEVBR3VGLGtCQUh2RjtBQUpWLEdBaEtNLENBRFc7QUE0S25CMUYsRUFBQUEsSUFBSSxFQUFFO0FBQUV3RyxJQUFBQSwwQkFBMEIsRUFBRTtBQUE5QixHQTVLYTtBQTZLbkI5UCxFQUFBQSxJQUFJLEVBQUU7QUE3S2EsQ0FBZDs7Ozs7Ozs7Ozs7O0FDbktQO0FBS08sTUFBTTJILHVCQUFOLFNBQXNDMk0sa0VBQXRDLENBQWtGO0FBQ3ZGQyxFQUFBQSxXQUFXLENBQUN2VyxLQUFELEVBQThDO0FBQ3ZELFdBQU87QUFDTFUsTUFBQUEsS0FBSyxFQUFFLGtDQURGO0FBRUxhLE1BQUFBLFdBQVcsRUFBRXZCLEtBQUssQ0FBQ0EsS0FGZDtBQUdMTSxNQUFBQSxVQUFVLEVBQUUsaUJBSFA7QUFJTHFCLE1BQUFBLE9BQU8sRUFBRW1EO0FBSkosS0FBUDtBQU1EOztBQVJzRiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9Db25maWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9Mb2dJcHN1bS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9UZXN0SW5mb1RhYi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvQ1NWQ29udGVudEVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvQ1NWRmlsZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvQ1NWV2F2ZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvRXJyb3JFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL0dyYWZhbmFMaXZlRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9Ob2RlR3JhcGhFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1ByZWRpY3RhYmxlUHVsc2VFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1JhbmRvbVdhbGtFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1Jhd0ZyYW1lRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9TdHJlYW1pbmdDbGllbnRFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1VTQVF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9tZXRyaWNUcmVlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9tb2R1bGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9ub2RlR3JhcGhVdGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvcnVuU3RyZWFtcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvdGVzdERhdGEvc2VydmljZU1hcFJlc3BvbnNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS92YXJpYWJsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG50eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxhbnk+O1xuXG4vKipcbiAqIEVtcHR5IENvbmZpZyBFZGl0b3IgLS0gc2V0dGluZ3MgdG8gc2F2ZVxuICovXG5leHBvcnQgY2xhc3MgQ29uZmlnRWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH1cbn1cbiIsImltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmxldCBpbmRleCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21Mb2dMZXZlbCgpOiBMb2dMZXZlbCB7XG4gIGNvbnN0IHYgPSBNYXRoLnJhbmRvbSgpO1xuICBpZiAodiA+IDAuOSkge1xuICAgIHJldHVybiBMb2dMZXZlbC5jcml0aWNhbDtcbiAgfVxuICBpZiAodiA+IDAuOCkge1xuICAgIHJldHVybiBMb2dMZXZlbC5lcnJvcjtcbiAgfVxuICBpZiAodiA+IDAuNykge1xuICAgIHJldHVybiBMb2dMZXZlbC53YXJuaW5nO1xuICB9XG4gIGlmICh2ID4gMC40KSB7XG4gICAgcmV0dXJuIExvZ0xldmVsLmluZm87XG4gIH1cbiAgaWYgKHYgPiAwLjMpIHtcbiAgICByZXR1cm4gTG9nTGV2ZWwuZGVidWc7XG4gIH1cbiAgaWYgKHYgPiAwLjEpIHtcbiAgICByZXR1cm4gTG9nTGV2ZWwudHJhY2U7XG4gIH1cbiAgcmV0dXJuIExvZ0xldmVsLnVua25vd247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0V29yZCgpIHtcbiAgaW5kZXggPSAoaW5kZXggKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSkgJSB3b3Jkcy5sZW5ndGg7XG4gIHJldHVybiB3b3Jkc1tpbmRleF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21MaW5lKGxlbmd0aCA9IDYwKSB7XG4gIGxldCBsaW5lID0gZ2V0TmV4dFdvcmQoKTtcbiAgd2hpbGUgKGxpbmUubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgbGluZSArPSAnICcgKyBnZXROZXh0V29yZCgpO1xuICB9XG4gIHJldHVybiBsaW5lO1xufVxuXG5jb25zdCB3b3JkcyA9IFtcbiAgJ0F0JyxcbiAgJ3Zlcm8nLFxuICAnZW9zJyxcbiAgJ2V0JyxcbiAgJ2FjY3VzYW11cycsXG4gICdldCcsXG4gICdpdXN0bycsXG4gICdvZGlvJyxcbiAgJ2RpZ25pc3NpbW9zJyxcbiAgJ2R1Y2ltdXMnLFxuICAncXVpJyxcbiAgJ2JsYW5kaXRpaXMnLFxuICAncHJhZXNlbnRpdW0nLFxuICAndm9sdXB0YXR1bScsXG4gICdkZWxlbml0aScsXG4gICdhdHF1ZScsXG4gICdjb3JydXB0aScsXG4gICdxdW9zJyxcbiAgJ2RvbG9yZXMnLFxuICAnZXQnLFxuICAncXVhcycsXG4gICdtb2xlc3RpYXMnLFxuICAnZXhjZXB0dXJpJyxcbiAgJ3NpbnQnLFxuICAnb2NjYWVjYXRpJyxcbiAgJ2N1cGlkaXRhdGUnLFxuICAnbm9uJyxcbiAgJ3Byb3ZpZGVudCcsXG4gICdzaW1pbGlxdWUnLFxuICAnc3VudCcsXG4gICdpbicsXG4gICdjdWxwYScsXG4gICdxdWknLFxuICAnb2ZmaWNpYScsXG4gICdkZXNlcnVudCcsXG4gICdtb2xsaXRpYScsXG4gICdhbmltaScsXG4gICdpZCcsXG4gICdlc3QnLFxuICAnbGFib3J1bScsXG4gICdldCcsXG4gICdkb2xvcnVtJyxcbiAgJ2Z1Z2EnLFxuICAnRXQnLFxuICAnaGFydW0nLFxuICAncXVpZGVtJyxcbiAgJ3JlcnVtJyxcbiAgJ2ZhY2lsaXMnLFxuICAnZXN0JyxcbiAgJ2V0JyxcbiAgJ2V4cGVkaXRhJyxcbiAgJ2Rpc3RpbmN0aW8nLFxuICAnTmFtJyxcbiAgJ2xpYmVybycsXG4gICd0ZW1wb3JlJyxcbiAgJ2N1bScsXG4gICdzb2x1dGEnLFxuICAnbm9iaXMnLFxuICAnZXN0JyxcbiAgJ2VsaWdlbmRpJyxcbiAgJ29wdGlvJyxcbiAgJ2N1bXF1ZScsXG4gICduaWhpbCcsXG4gICdpbXBlZGl0JyxcbiAgJ3F1bycsXG4gICdtaW51cycsXG4gICdpZCcsXG4gICdxdW9kJyxcbiAgJ21heGltZScsXG4gICdwbGFjZWF0JyxcbiAgJ2ZhY2VyZScsXG4gICdwb3NzaW11cycsXG4gICdvbW5pcycsXG4gICd2b2x1cHRhcycsXG4gICdhc3N1bWVuZGEnLFxuICAnZXN0JyxcbiAgJ29tbmlzJyxcbiAgJ2RvbG9yJyxcbiAgJ3JlcGVsbGVuZHVzJyxcbiAgJ1RlbXBvcmlidXMnLFxuICAnYXV0ZW0nLFxuICAncXVpYnVzZGFtJyxcbiAgJ2V0JyxcbiAgJ2F1dCcsXG4gICdvZmZpY2lpcycsXG4gICdkZWJpdGlzJyxcbiAgJ2F1dCcsXG4gICdyZXJ1bScsXG4gICduZWNlc3NpdGF0aWJ1cycsXG4gICdzYWVwZScsXG4gICdldmVuaWV0JyxcbiAgJ3V0JyxcbiAgJ2V0JyxcbiAgJ3ZvbHVwdGF0ZXMnLFxuICAncmVwdWRpYW5kYWUnLFxuICAnc2ludCcsXG4gICdldCcsXG4gICdtb2xlc3RpYWUnLFxuICAnbm9uJyxcbiAgJ3JlY3VzYW5kYWUnLFxuICAnSXRhcXVlJyxcbiAgJ2VhcnVtJyxcbiAgJ3JlcnVtJyxcbiAgJ2hpYycsXG4gICd0ZW5ldHVyJyxcbiAgJ2EnLFxuICAnc2FwaWVudGUnLFxuICAnZGVsZWN0dXMnLFxuICAndXQnLFxuICAnYXV0JyxcbiAgJ3JlaWNpZW5kaXMnLFxuICAndm9sdXB0YXRpYnVzJyxcbiAgJ21haW9yZXMnLFxuICAnYWxpYXMnLFxuICAnY29uc2VxdWF0dXInLFxuICAnYXV0JyxcbiAgJ3BlcmZlcmVuZGlzJyxcbiAgJ2RvbG9yaWJ1cycsXG4gICdhc3BlcmlvcmVzJyxcbiAgJ3JlcGVsbGF0Jyxcbl07XG4iLCIvLyBMaWJyYXJpZXNcbmltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBzZWxlY3RvcnMgYXMgZWRpdG9yU2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElubGluZVN3aXRjaCwgSW5wdXQsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBRdWVyeUVkaXRvclByb3BzLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFJhbmRvbVdhbGtFZGl0b3IsIFN0cmVhbWluZ0NsaWVudEVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBUZXN0RGF0YURhdGFTb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ1NWV2F2ZSwgTm9kZXNRdWVyeSwgVGVzdERhdGFRdWVyeSwgVVNBUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFByZWRpY3RhYmxlUHVsc2VFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvUHJlZGljdGFibGVQdWxzZUVkaXRvcic7XG5pbXBvcnQgeyBDU1ZXYXZlc0VkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9DU1ZXYXZlRWRpdG9yJztcbmltcG9ydCB7IGRlZmF1bHRDU1ZXYXZlUXVlcnksIGRlZmF1bHRQdWxzZVF1ZXJ5LCBkZWZhdWx0UXVlcnkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHcmFmYW5hTGl2ZUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9HcmFmYW5hTGl2ZUVkaXRvcic7XG5pbXBvcnQgeyBOb2RlR3JhcGhFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvTm9kZUdyYXBoRWRpdG9yJztcbmltcG9ydCB7IFJhd0ZyYW1lRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL1Jhd0ZyYW1lRWRpdG9yJztcbmltcG9ydCB7IGRlZmF1bHRTdHJlYW1RdWVyeSB9IGZyb20gJy4vcnVuU3RyZWFtcyc7XG5pbXBvcnQgeyBDU1ZGaWxlRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0NTVkZpbGVFZGl0b3InO1xuaW1wb3J0IHsgQ1NWQ29udGVudEVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9DU1ZDb250ZW50RWRpdG9yJztcbmltcG9ydCB7IFVTQVF1ZXJ5RWRpdG9yLCB1c2FRdWVyeU1vZGVzIH0gZnJvbSAnLi9jb21wb25lbnRzL1VTQVF1ZXJ5RWRpdG9yJztcbmltcG9ydCBFcnJvckVkaXRvciBmcm9tICcuL2NvbXBvbmVudHMvRXJyb3JFZGl0b3InO1xuXG5jb25zdCBzaG93TGFiZWxzRm9yID0gWydyYW5kb21fd2FsaycsICdwcmVkaWN0YWJsZV9wdWxzZSddO1xuY29uc3QgZW5kcG9pbnRzID0gW1xuICB7IHZhbHVlOiAnZGF0YXNvdXJjZXMnLCBsYWJlbDogJ0RhdGEgU291cmNlcycgfSxcbiAgeyB2YWx1ZTogJ3NlYXJjaCcsIGxhYmVsOiAnU2VhcmNoJyB9LFxuICB7IHZhbHVlOiAnYW5ub3RhdGlvbnMnLCBsYWJlbDogJ0Fubm90YXRpb25zJyB9LFxuXTtcblxuY29uc3Qgc2VsZWN0b3JzID0gZWRpdG9yU2VsZWN0b3JzLmNvbXBvbmVudHMuRGF0YVNvdXJjZS5UZXN0RGF0YS5RdWVyeVRhYjtcblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3JQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbiAgcXVlcnk6IFRlc3REYXRhUXVlcnk7XG59XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gUXVlcnlFZGl0b3JQcm9wczxUZXN0RGF0YURhdGFTb3VyY2UsIFRlc3REYXRhUXVlcnk+O1xuXG5leHBvcnQgY29uc3QgUXVlcnlFZGl0b3IgPSAoeyBxdWVyeSwgZGF0YXNvdXJjZSwgb25DaGFuZ2UsIG9uUnVuUXVlcnkgfTogUHJvcHMpID0+IHtcbiAgcXVlcnkgPSB7IC4uLmRlZmF1bHRRdWVyeSwgLi4ucXVlcnkgfTtcblxuICBjb25zdCB7IGxvYWRpbmcsIHZhbHVlOiBzY2VuYXJpb0xpc3QgfSA9IHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICAvLyBtaWdyYXRlIG1hbnVhbF9lbnRyeSAodW51c2FibGUgc2luY2UgNywgcmVtb3ZlZCBpbiA4KVxuICAgIGlmIChxdWVyeS5zY2VuYXJpb0lkID09PSAnbWFudWFsX2VudHJ5JyAmJiAocXVlcnkgYXMgYW55KS5wb2ludHMpIHtcbiAgICAgIGxldCBjc3ZDb250ZW50ID0gJ1RpbWUsVmFsdWVcXG4nO1xuICAgICAgZm9yIChjb25zdCBwb2ludCBvZiAocXVlcnkgYXMgYW55KS5wb2ludHMpIHtcbiAgICAgICAgY3N2Q29udGVudCArPSBgJHtwb2ludFsxXX0sJHtwb2ludFswXX1cXG5gO1xuICAgICAgfVxuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICByZWZJZDogcXVlcnkucmVmSWQsXG4gICAgICAgIGRhdGFzb3VyY2U6IHF1ZXJ5LmRhdGFzb3VyY2UsXG4gICAgICAgIHNjZW5hcmlvSWQ6ICdjc3ZfY29udGVudCcsXG4gICAgICAgIGNzdkNvbnRlbnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YXNvdXJjZS5nZXRTY2VuYXJpb3MoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gKHF1ZXJ5OiBUZXN0RGF0YVF1ZXJ5KSA9PiB7XG4gICAgb25DaGFuZ2UocXVlcnkpO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50U2NlbmFyaW8gPSB1c2VNZW1vKFxuICAgICgpID0+IHNjZW5hcmlvTGlzdD8uZmluZCgoc2NlbmFyaW8pID0+IHNjZW5hcmlvLmlkID09PSBxdWVyeS5zY2VuYXJpb0lkKSxcbiAgICBbc2NlbmFyaW9MaXN0LCBxdWVyeV1cbiAgKTtcbiAgY29uc3Qgc2NlbmFyaW9JZCA9IGN1cnJlbnRTY2VuYXJpbz8uaWQ7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3VycmVudFNjZW5hcmlvPy5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBvblNjZW5hcmlvQ2hhbmdlID0gKGl0ZW06IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KSA9PiB7XG4gICAgY29uc3Qgc2NlbmFyaW8gPSBzY2VuYXJpb0xpc3Q/LmZpbmQoKHNjKSA9PiBzYy5pZCA9PT0gaXRlbS52YWx1ZSk7XG5cbiAgICBpZiAoIXNjZW5hcmlvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgbW9kZWwgZnJvbSBleGlzdGluZyBwcm9wcyB0aGF0IGJlbG9uZyB0byBvdGhlciBzY2VuYXJpb3NcbiAgICBjb25zdCB1cGRhdGU6IFRlc3REYXRhUXVlcnkgPSB7XG4gICAgICBzY2VuYXJpb0lkOiBpdGVtLnZhbHVlISxcbiAgICAgIHJlZklkOiBxdWVyeS5yZWZJZCxcbiAgICAgIGFsaWFzOiBxdWVyeS5hbGlhcyxcbiAgICAgIGRhdGFzb3VyY2U6IHF1ZXJ5LmRhdGFzb3VyY2UsXG4gICAgfTtcblxuICAgIGlmIChzY2VuYXJpby5zdHJpbmdJbnB1dCkge1xuICAgICAgdXBkYXRlLnN0cmluZ0lucHV0ID0gc2NlbmFyaW8uc3RyaW5nSW5wdXQ7XG4gICAgfVxuXG4gICAgc3dpdGNoIChzY2VuYXJpby5pZCkge1xuICAgICAgY2FzZSAnZ3JhZmFuYV9hcGknOlxuICAgICAgICB1cGRhdGUuc3RyaW5nSW5wdXQgPSAnZGF0YXNvdXJjZXMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmVhbWluZ19jbGllbnQnOlxuICAgICAgICB1cGRhdGUuc3RyZWFtID0gZGVmYXVsdFN0cmVhbVF1ZXJ5O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xpdmUnOlxuICAgICAgICB1cGRhdGUuY2hhbm5lbCA9ICdyYW5kb20tMnMtc3RyZWFtJzsgLy8gZGVmYXVsdCBzdHJlYW1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcmVkaWN0YWJsZV9wdWxzZSc6XG4gICAgICAgIHVwZGF0ZS5wdWxzZVdhdmUgPSBkZWZhdWx0UHVsc2VRdWVyeTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcmVkaWN0YWJsZV9jc3Zfd2F2ZSc6XG4gICAgICAgIHVwZGF0ZS5jc3ZXYXZlID0gZGVmYXVsdENTVldhdmVRdWVyeTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1c2EnOlxuICAgICAgICB1cGRhdGUudXNhID0ge1xuICAgICAgICAgIG1vZGU6IHVzYVF1ZXJ5TW9kZXNbMF0udmFsdWUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25VcGRhdGUodXBkYXRlKTtcbiAgfTtcblxuICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGU6IEZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCB0eXBlIH0gPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBsZXQgbmV3VmFsdWU6IGFueSA9IHZhbHVlO1xuXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICBuZXdWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09ICdsZXZlbENvbHVtbicpIHtcbiAgICAgIG5ld1ZhbHVlID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgb25VcGRhdGUoeyAuLi5xdWVyeSwgW25hbWVdOiBuZXdWYWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBvbkZpZWxkQ2hhbmdlID0gKGZpZWxkOiBzdHJpbmcpID0+IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIHR5cGUgfSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgbGV0IG5ld1ZhbHVlOiBhbnkgPSB2YWx1ZTtcblxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgbmV3VmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHsgLi4ucXVlcnksIFtmaWVsZF06IHsgLi4uKHF1ZXJ5IGFzIGFueSlbZmllbGRdLCBbbmFtZV06IG5ld1ZhbHVlIH0gfSk7XG4gIH07XG5cbiAgY29uc3Qgb25FbmRQb2ludENoYW5nZSA9ICh7IHZhbHVlIH06IFNlbGVjdGFibGVWYWx1ZSkgPT4ge1xuICAgIG9uVXBkYXRlKHsgLi4ucXVlcnksIHN0cmluZ0lucHV0OiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBvblN0cmVhbUNsaWVudENoYW5nZSA9IG9uRmllbGRDaGFuZ2UoJ3N0cmVhbScpO1xuICBjb25zdCBvblB1bHNlV2F2ZUNoYW5nZSA9IG9uRmllbGRDaGFuZ2UoJ3B1bHNlV2F2ZScpO1xuICBjb25zdCBvblVTQVN0YXRzQ2hhbmdlID0gKHVzYT86IFVTQVF1ZXJ5KSA9PiB7XG4gICAgb25VcGRhdGUoeyAuLi5xdWVyeSwgdXNhIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uQ1NWV2F2ZUNoYW5nZSA9IChjc3ZXYXZlPzogQ1NWV2F2ZVtdKSA9PiB7XG4gICAgb25VcGRhdGUoeyAuLi5xdWVyeSwgY3N2V2F2ZSB9KTtcbiAgfTtcblxuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgKHNjZW5hcmlvTGlzdCB8fCBbXSlcbiAgICAgICAgLm1hcCgoaXRlbSkgPT4gKHsgbGFiZWw6IGl0ZW0ubmFtZSwgdmFsdWU6IGl0ZW0uaWQgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmxhYmVsLmxvY2FsZUNvbXBhcmUoYi5sYWJlbCkpLFxuICAgIFtzY2VuYXJpb0xpc3RdXG4gICk7XG4gIGNvbnN0IHNob3dMYWJlbHMgPSB1c2VNZW1vKCgpID0+IHNob3dMYWJlbHNGb3IuaW5jbHVkZXMocXVlcnkuc2NlbmFyaW9JZCA/PyAnJyksIFtxdWVyeV0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5saW5lRmllbGRSb3cgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnNjZW5hcmlvU2VsZWN0Q29udGFpbmVyfT5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsV2lkdGg9ezE0fSBsYWJlbD1cIlNjZW5hcmlvXCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgaW5wdXRJZD17YHRlc3QtZGF0YS1zY2VuYXJpby1zZWxlY3QtJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFsdWUgPT09IHF1ZXJ5LnNjZW5hcmlvSWQpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2NlbmFyaW9DaGFuZ2V9XG4gICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAge2N1cnJlbnRTY2VuYXJpbz8uc3RyaW5nSW5wdXQgJiYgKFxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlN0cmluZyBJbnB1dFwiPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgICAgaWQ9e2BzdHJpbmdJbnB1dC0ke3F1ZXJ5LnJlZklkfWB9XG4gICAgICAgICAgICAgIG5hbWU9XCJzdHJpbmdJbnB1dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtxdWVyeS5zdHJpbmdJbnB1dH1cbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnN0cmluZ0lucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgKX1cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQWxpYXNcIiBsYWJlbFdpZHRoPXsxNH0+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICBpZD17YGFsaWFzLSR7cXVlcnkucmVmSWR9YH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwib3B0aW9uYWxcIlxuICAgICAgICAgICAgcGF0dGVybj0nW148PiZcXFxcXCJdKydcbiAgICAgICAgICAgIG5hbWU9XCJhbGlhc1wiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkuYWxpYXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICB7c2hvd0xhYmVscyAmJiAoXG4gICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIkxhYmVsc1wiXG4gICAgICAgICAgICBsYWJlbFdpZHRoPXsxNH1cbiAgICAgICAgICAgIHRvb2x0aXA9e1xuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIFNldCBsYWJlbHMgdXNpbmcgYSBrZXk9dmFsdWUgc3ludGF4OlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIHtgeyBrZXkgPSBcInZhbHVlXCIsIGtleTIgPSBcInZhbHVlXCIgfWB9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAga2V5PSZxdW90O3ZhbHVlJnF1b3Q7LCBrZXkyPSZxdW90O3ZhbHVlJnF1b3Q7XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAga2V5PXZhbHVlLCBrZXkyPXZhbHVlXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICAgIGlkPXtgbGFiZWxzLSR7cXVlcnkucmVmSWR9YH1cbiAgICAgICAgICAgICAgbmFtZT1cImxhYmVsc1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnk/LmxhYmVsc31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJrZXk9dmFsdWUsIGtleTI9dmFsdWUyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgKX1cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIHtzY2VuYXJpb0lkID09PSAncmFuZG9tX3dhbGsnICYmIDxSYW5kb21XYWxrRWRpdG9yIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSBxdWVyeT17cXVlcnl9IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdzdHJlYW1pbmdfY2xpZW50JyAmJiA8U3RyZWFtaW5nQ2xpZW50RWRpdG9yIG9uQ2hhbmdlPXtvblN0cmVhbUNsaWVudENoYW5nZX0gcXVlcnk9e3F1ZXJ5fSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnbGl2ZScgJiYgPEdyYWZhbmFMaXZlRWRpdG9yIG9uQ2hhbmdlPXtvblVwZGF0ZX0gcXVlcnk9e3F1ZXJ5fSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAncmF3X2ZyYW1lJyAmJiA8UmF3RnJhbWVFZGl0b3Igb25DaGFuZ2U9e29uVXBkYXRlfSBxdWVyeT17cXVlcnl9IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdjc3ZfZmlsZScgJiYgPENTVkZpbGVFZGl0b3Igb25DaGFuZ2U9e29uVXBkYXRlfSBxdWVyeT17cXVlcnl9IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdjc3ZfY29udGVudCcgJiYgPENTVkNvbnRlbnRFZGl0b3Igb25DaGFuZ2U9e29uVXBkYXRlfSBxdWVyeT17cXVlcnl9IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdsb2dzJyAmJiAoXG4gICAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJMaW5lc1wiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbmFtZT1cImxpbmVzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LmxpbmVzfVxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJMZXZlbFwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgICAgIDxJbmxpbmVTd2l0Y2ggb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IG5hbWU9XCJsZXZlbENvbHVtblwiIHZhbHVlPXshIXF1ZXJ5LmxldmVsQ29sdW1ufSAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICApfVxuXG4gICAgICB7c2NlbmFyaW9JZCA9PT0gJ3VzYScgJiYgPFVTQVF1ZXJ5RWRpdG9yIG9uQ2hhbmdlPXtvblVTQVN0YXRzQ2hhbmdlfSBxdWVyeT17cXVlcnkudXNhID8/IHt9fSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnZ3JhZmFuYV9hcGknICYmIChcbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsV2lkdGg9ezE0fSBsYWJlbD1cIkVuZHBvaW50XCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgICAgb3B0aW9ucz17ZW5kcG9pbnRzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uRW5kUG9pbnRDaGFuZ2V9XG4gICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICB2YWx1ZT17ZW5kcG9pbnRzLmZpbmQoKGVwKSA9PiBlcC52YWx1ZSA9PT0gcXVlcnkuc3RyaW5nSW5wdXQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICApfVxuXG4gICAgICB7c2NlbmFyaW9JZCA9PT0gJ2Fycm93JyAmJiAoXG4gICAgICAgIDxJbmxpbmVGaWVsZCBncm93PlxuICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgbmFtZT1cInN0cmluZ0lucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zdHJpbmdJbnB1dH1cbiAgICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3B5IGJhc2U2NCB0ZXh0IGRhdGEgZnJvbSBxdWVyeSByZXN1bHRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICl9XG5cbiAgICAgIHtzY2VuYXJpb0lkID09PSAncHJlZGljdGFibGVfcHVsc2UnICYmIDxQcmVkaWN0YWJsZVB1bHNlRWRpdG9yIG9uQ2hhbmdlPXtvblB1bHNlV2F2ZUNoYW5nZX0gcXVlcnk9e3F1ZXJ5fSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAncHJlZGljdGFibGVfY3N2X3dhdmUnICYmIDxDU1ZXYXZlc0VkaXRvciBvbkNoYW5nZT17b25DU1ZXYXZlQ2hhbmdlfSB3YXZlcz17cXVlcnkuY3N2V2F2ZX0gLz59XG4gICAgICB7c2NlbmFyaW9JZCA9PT0gJ25vZGVfZ3JhcGgnICYmIChcbiAgICAgICAgPE5vZGVHcmFwaEVkaXRvciBvbkNoYW5nZT17KHZhbDogTm9kZXNRdWVyeSkgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgbm9kZXM6IHZhbCB9KX0gcXVlcnk9e3F1ZXJ5fSAvPlxuICAgICAgKX1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnc2VydmVyX2Vycm9yXzUwMCcgJiYgPEVycm9yRWRpdG9yIG9uQ2hhbmdlPXtvblVwZGF0ZX0gcXVlcnk9e3F1ZXJ5fSAvPn1cblxuICAgICAge2Rlc2NyaXB0aW9uICYmIDxwPntkZXNjcmlwdGlvbn08L3A+fVxuICAgIDwvPlxuICApO1xufTtcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUGx1Z2luQ29uZmlnUGFnZVByb3BzLCBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZUpzb25EYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBsdWdpbkNvbmZpZ1BhZ2VQcm9wczxEYXRhU291cmNlUGx1Z2luTWV0YTxEYXRhU291cmNlSnNvbkRhdGE+PiB7fVxuXG5leHBvcnQgY2xhc3MgVGVzdEluZm9UYWIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgU2VlIGdpdGh1YiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBzZXR0aW5nIHVwIGEgcmVwcm9kdWNpYmxlIHRlc3QgZW52aXJvbm1lbnQuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvZ3JhZmFuYS90cmVlL21haW4vZGV2ZW52XCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgR2l0SHViXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29kZUVkaXRvciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuXG5leHBvcnQgY29uc3QgQ1NWQ29udGVudEVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvblNhdmVDU1YgPSAoY3N2Q29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgY3N2Q29udGVudCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb2RlRWRpdG9yXG4gICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgIGxhbmd1YWdlPVwiY3N2XCJcbiAgICAgIHZhbHVlPXtxdWVyeS5jc3ZDb250ZW50ID8/ICcnfVxuICAgICAgb25CbHVyPXtvblNhdmVDU1Z9XG4gICAgICBvblNhdmU9e29uU2F2ZUNTVn1cbiAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgIHNob3dMaW5lTnVtYmVycz17dHJ1ZX1cbiAgICAvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRWRpdG9yUHJvcHMgfSBmcm9tICcuLi9RdWVyeUVkaXRvcic7XG5cbmV4cG9ydCBjb25zdCBDU1ZGaWxlRWRpdG9yID0gKHsgb25DaGFuZ2UsIHF1ZXJ5IH06IEVkaXRvclByb3BzKSA9PiB7XG4gIGNvbnN0IG9uQ2hhbmdlRmlsZU5hbWUgPSAoeyB2YWx1ZSB9OiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGNzdkZpbGVOYW1lOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBmaWxlcyA9IFtcbiAgICAnZmxpZ2h0X2luZm9fYnlfc3RhdGUuY3N2JyxcbiAgICAncG9wdWxhdGlvbl9ieV9zdGF0ZS5jc3YnLFxuICAgICdnZHBfcGVyX2NhcGl0YS5jc3YnLFxuICAgICdqc19saWJyYXJpZXMuY3N2JyxcbiAgICAnb2hsY19kb2dlY29pbi5jc3YnLFxuICAgICd3ZWlnaHRfaGVpZ2h0LmNzdicsXG4gICAgJ2Jyb3dzZXJfbWFya2V0c2hhcmUuY3N2JyxcbiAgXS5tYXAoKG5hbWUpID0+ICh7IGxhYmVsOiBuYW1lLCB2YWx1ZTogbmFtZSB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJGaWxlXCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbWVudVNob3VsZFBvcnRhbFxuICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaWxlTmFtZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBjc3YgZmlsZVwiXG4gICAgICAgICAgb3B0aW9ucz17ZmlsZXN9XG4gICAgICAgICAgdmFsdWU9e2ZpbGVzLmZpbmQoKGYpID0+IGYudmFsdWUgPT09IHF1ZXJ5LmNzdkZpbGVOYW1lKX1cbiAgICAgICAgLz5cbiAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBDU1ZXYXZlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZGVmYXVsdENTVldhdmVRdWVyeSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmludGVyZmFjZSBXYXZlc1Byb3BzIHtcbiAgd2F2ZXM/OiBDU1ZXYXZlW107XG4gIG9uQ2hhbmdlOiAod2F2ZXM6IENTVldhdmVbXSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFdhdmVQcm9wcyB7XG4gIHdhdmU6IENTVldhdmU7XG4gIGluZGV4OiBudW1iZXI7XG4gIGxhc3Q6IGJvb2xlYW47XG4gIG9uQ2hhbmdlOiAoaW5kZXg6IG51bWJlciwgd2F2ZT86IENTVldhdmUpID0+IHZvaWQ7XG4gIG9uQWRkOiAoKSA9PiB2b2lkO1xufVxuXG5jbGFzcyBDU1ZXYXZlRWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxXYXZlUHJvcHM+IHtcbiAgb25GaWVsZENoYW5nZSA9IChmaWVsZDoga2V5b2YgQ1NWV2F2ZSkgPT4gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy53YXZlLFxuICAgICAgW2ZpZWxkXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgb25OYW1lQ2hhbmdlID0gdGhpcy5vbkZpZWxkQ2hhbmdlKCduYW1lJyk7XG4gIG9uTGFiZWxzQ2hhbmdlID0gdGhpcy5vbkZpZWxkQ2hhbmdlKCdsYWJlbHMnKTtcbiAgb25DU1ZDaGFuZ2UgPSB0aGlzLm9uRmllbGRDaGFuZ2UoJ3ZhbHVlc0NTVicpO1xuICBvblRpbWVTdGVwQ2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGltZVN0ZXAgPSBlLnRhcmdldC52YWx1ZUFzTnVtYmVyO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy53YXZlLFxuICAgICAgdGltZVN0ZXAsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2F2ZSwgbGFzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgYWN0aW9uID0gdGhpcy5wcm9wcy5vbkFkZDtcbiAgICBpZiAoIWxhc3QpIHtcbiAgICAgIGFjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB1bmRlZmluZWQpOyAvLyByZW1vdmVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9eydWYWx1ZXMnfVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiQ29tbWEgc2VwYXJhdGVkIHZhbHVlcy4gRWFjaCB2YWx1ZSBtYXkgYmUgYW4gaW50LCBmbG9hdCwgb3IgbnVsbCBhbmQgbXVzdCBub3QgYmUgZW1wdHkuIFdoaXRlc3BhY2UgYW5kIHRyYWlsaW5nIGNvbW1hcyBhcmUgcmVtb3ZlZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e3dhdmUudmFsdWVzQ1NWfSBwbGFjZWhvbGRlcj17J0NTViB2YWx1ZXMnfSBvbkNoYW5nZT17dGhpcy5vbkNTVkNoYW5nZX0gYXV0b0ZvY3VzPXt0cnVlfSAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9eydTdGVwJ30gdG9vbHRpcD1cIlRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIGRhdGFwb2ludHMuXCI+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt3YXZlLnRpbWVTdGVwfSB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9eyc2MCd9IHdpZHRoPXs2fSBvbkNoYW5nZT17dGhpcy5vblRpbWVTdGVwQ2hhbmdlfSAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9eydMYWJlbHMnfT5cbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e3dhdmUubGFiZWxzfSBwbGFjZWhvbGRlcj17J2xhYmVscyd9IHdpZHRoPXsxMn0gb25DaGFuZ2U9e3RoaXMub25MYWJlbHNDaGFuZ2V9IC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD17J05hbWUnfT5cbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e3dhdmUubmFtZX0gcGxhY2Vob2xkZXI9eyduYW1lJ30gd2lkdGg9ezEwfSBvbkNoYW5nZT17dGhpcy5vbk5hbWVDaGFuZ2V9IC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDxCdXR0b24gaWNvbj17bGFzdCA/ICdwbHVzJyA6ICdtaW51cyd9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXthY3Rpb259IC8+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENTVldhdmVzRWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxXYXZlc1Byb3BzPiB7XG4gIG9uQ2hhbmdlID0gKGluZGV4OiBudW1iZXIsIHdhdmU/OiBDU1ZXYXZlKSA9PiB7XG4gICAgbGV0IHdhdmVzID0gWy4uLih0aGlzLnByb3BzLndhdmVzID8/IGRlZmF1bHRDU1ZXYXZlUXVlcnkpXTtcbiAgICBpZiAod2F2ZSkge1xuICAgICAgd2F2ZXNbaW5kZXhdID0geyAuLi53YXZlIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJlbW92ZSB0aGUgZWxlbWVudFxuICAgICAgd2F2ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh3YXZlcyk7XG4gIH07XG5cbiAgb25BZGQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2F2ZXMgPSBbLi4uKHRoaXMucHJvcHMud2F2ZXMgPz8gZGVmYXVsdENTVldhdmVRdWVyeSldO1xuICAgIHdhdmVzLnB1c2goeyAuLi5kZWZhdWx0Q1NWV2F2ZVF1ZXJ5WzBdIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uod2F2ZXMpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgd2F2ZXMgPSB0aGlzLnByb3BzLndhdmVzID8/IGRlZmF1bHRDU1ZXYXZlUXVlcnk7XG4gICAgaWYgKCF3YXZlcy5sZW5ndGgpIHtcbiAgICAgIHdhdmVzID0gZGVmYXVsdENTVldhdmVRdWVyeTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3dhdmVzLm1hcCgod2F2ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q1NWV2F2ZUVkaXRvclxuICAgICAgICAgICAga2V5PXtgJHtpbmRleH0vJHt3YXZlLnZhbHVlc0NTVn1gfVxuICAgICAgICAgICAgd2F2ZT17d2F2ZX1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIG9uQWRkPXt0aGlzLm9uQWRkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBsYXN0PXtpbmRleCA9PT0gd2F2ZXMubGVuZ3RoIC0gMX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuXG5jb25zdCBFUlJPUl9PUFRJT05TID0gW1xuICB7XG4gICAgbGFiZWw6ICdTZXJ2ZXIgcGFuaWMnLFxuICAgIHZhbHVlOiAnc2VydmVyX3BhbmljJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnRnJvbnRlbmQgZXhjZXB0aW9uJyxcbiAgICB2YWx1ZTogJ2Zyb250ZW5kX2V4Y2VwdGlvbicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0Zyb250ZW5kIG9ic2VydmFibGUnLFxuICAgIHZhbHVlOiAnZnJvbnRlbmRfb2JzZXJ2YWJsZScsXG4gIH0sXG5dO1xuXG5jb25zdCBGcm9udGVuZEVycm9yUXVlcnlFZGl0b3I6IFJlYWN0LkZDPEVkaXRvclByb3BzPiA9ICh7IHF1ZXJ5LCBvbkNoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkIGxhYmVsV2lkdGg9ezE0fSBsYWJlbD1cIkVycm9yIHR5cGVcIj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e0VSUk9SX09QVElPTlN9XG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5LmVycm9yVHlwZX1cbiAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGVycm9yVHlwZTogdi52YWx1ZSB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICA8L0lubGluZUZpZWxkUm93PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRlbmRFcnJvclF1ZXJ5RWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBFZGl0b3JQcm9wcyB9IGZyb20gJy4uL1F1ZXJ5RWRpdG9yJztcblxuY29uc3QgbGl2ZVRlc3REYXRhQ2hhbm5lbHMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ3JhbmRvbS0ycy1zdHJlYW0nLFxuICAgIHZhbHVlOiAncmFuZG9tLTJzLXN0cmVhbScsXG4gICAgZGVzY3JpcHRpb246ICdSYW5kb20gc3RyZWFtIHdpdGggcG9pbnRzIGV2ZXJ5IDJzJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAncmFuZG9tLWZsYWtleS1zdHJlYW0nLFxuICAgIHZhbHVlOiAncmFuZG9tLWZsYWtleS1zdHJlYW0nLFxuICAgIGRlc2NyaXB0aW9uOiAnU3RyZWFtIHRoYXQgcmV0dXJucyBkYXRhIGluIHJhbmRvbSBpbnRlcnZhbHMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdyYW5kb20tbGFiZWxlZC1zdHJlYW0nLFxuICAgIHZhbHVlOiAncmFuZG9tLWxhYmVsZWQtc3RyZWFtJyxcbiAgICBkZXNjcmlwdGlvbjogJ1ZhbHVlIHdpdGggbW92aW5nIGxhYmVscycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3JhbmRvbS0yMEh6LXN0cmVhbScsXG4gICAgdmFsdWU6ICdyYW5kb20tMjBIei1zdHJlYW0nLFxuICAgIGRlc2NyaXB0aW9uOiAnUmFuZG9tIHN0cmVhbSB3aXRoIHBvaW50cyBpbiAyMEh6JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBHcmFmYW5hTGl2ZUVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvbkNoYW5uZWxDaGFuZ2UgPSAoeyB2YWx1ZSB9OiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGNoYW5uZWw6IHZhbHVlIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQ2hhbm5lbFwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbm5lbENoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBjaGFubmVsXCJcbiAgICAgICAgICBvcHRpb25zPXtsaXZlVGVzdERhdGFDaGFubmVsc31cbiAgICAgICAgICB2YWx1ZT17bGl2ZVRlc3REYXRhQ2hhbm5lbHMuZmluZCgoZikgPT4gZi52YWx1ZSA9PT0gcXVlcnkuY2hhbm5lbCl9XG4gICAgICAgIC8+XG4gICAgICA8L0lubGluZUZpZWxkPlxuICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0LCBJbmxpbmVGaWVsZFJvdywgSW5saW5lRmllbGQsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE5vZGVzUXVlcnksIFRlc3REYXRhUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBOb2Rlc1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogVGVzdERhdGFRdWVyeTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBOb2RlR3JhcGhFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgdHlwZSA9IHF1ZXJ5Lm5vZGVzPy50eXBlIHx8ICdyYW5kb20nO1xuICByZXR1cm4gKFxuICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkRhdGEgdHlwZVwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgPFNlbGVjdDxOb2Rlc1F1ZXJ5Wyd0eXBlJ10+XG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5tYXAoKG8pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogbyxcbiAgICAgICAgICAgIHZhbHVlOiBvLFxuICAgICAgICAgIH0pKX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtID09PSB0eXBlKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5Lm5vZGVzLCB0eXBlOiB2YWx1ZS52YWx1ZSEgfSl9XG4gICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIHt0eXBlID09PSAncmFuZG9tJyAmJiAoXG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkNvdW50XCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwiY291bnRcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5Lm5vZGVzPy5jb3VudH1cbiAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeS5ub2RlcywgY291bnQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSA/IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC52YWx1ZSwgMTApIDogMCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICl9XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn1cblxuY29uc3Qgb3B0aW9uczogQXJyYXk8Tm9kZXNRdWVyeVsndHlwZSddPiA9IFsncmFuZG9tJywgJ3Jlc3BvbnNlJ107XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFZGl0b3JQcm9wcyB9IGZyb20gJy4uL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQdWxzZVdhdmVRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZmllbGRzID0gW1xuICB7IGxhYmVsOiAnU3RlcCcsIGlkOiAndGltZVN0ZXAnLCBwbGFjZWhvbGRlcjogJzYwJywgdG9vbHRpcDogJ1RoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIGRhdGFwb2ludHMuJyB9LFxuICB7XG4gICAgbGFiZWw6ICdPbiBDb3VudCcsXG4gICAgaWQ6ICdvbkNvdW50JyxcbiAgICBwbGFjZWhvbGRlcjogJzMnLFxuICAgIHRvb2x0aXA6ICdUaGUgbnVtYmVyIG9mIHZhbHVlcyB3aXRoaW4gYSBjeWNsZSwgYXQgdGhlIHN0YXJ0IG9mIHRoZSBjeWNsZSwgdGhhdCBzaG91bGQgaGF2ZSB0aGUgb25WYWx1ZS4nLFxuICB9LFxuICB7IGxhYmVsOiAnT2ZmIENvdW50JywgaWQ6ICdvZmZDb3VudCcsIHBsYWNlaG9sZGVyOiAnNicsIHRvb2x0aXA6ICdUaGUgbnVtYmVyIG9mIG9mZlZhbHVlcyB3aXRoaW4gdGhlIGN5Y2xlLicgfSxcbiAge1xuICAgIGxhYmVsOiAnT24gVmFsdWUnLFxuICAgIGlkOiAnb25WYWx1ZScsXG4gICAgcGxhY2Vob2xkZXI6ICcxJyxcbiAgICB0b29sdGlwOiAnVGhlIHZhbHVlIGZvciBcIm9uIHZhbHVlc1wiLCBtYXkgYmUgYW4gaW50LCBmbG9hdCwgb3IgbnVsbC4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdPZmYgVmFsdWUnLFxuICAgIGlkOiAnb2ZmVmFsdWUnLFxuICAgIHBsYWNlaG9sZGVyOiAnMScsXG4gICAgdG9vbHRpcDogJ1RoZSB2YWx1ZSBmb3IgXCJvZmYgdmFsdWVzXCIsIG1heSBiZSBhIGludCwgZmxvYXQsIG9yIG51bGwuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQcmVkaWN0YWJsZVB1bHNlRWRpdG9yID0gKHsgb25DaGFuZ2UsIHF1ZXJ5IH06IEVkaXRvclByb3BzKSA9PiB7XG4gIC8vIENvbnZlcnQgdmFsdWVzIHRvIG51bWJlcnMgYmVmb3JlIHNhdmluZ1xuICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICBvbkNoYW5nZSh7IHRhcmdldDogeyBuYW1lLCB2YWx1ZTogTnVtYmVyKHZhbHVlKSB9IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkUm93PlxuICAgICAge2ZpZWxkcy5tYXAoKHsgbGFiZWwsIGlkLCBwbGFjZWhvbGRlciwgdG9vbHRpcCB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXtsYWJlbH0gbGFiZWxXaWR0aD17MTR9IGtleT17aWR9IHRvb2x0aXA9e3Rvb2x0aXB9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG5hbWU9e2lkfVxuICAgICAgICAgICAgICBpZD17YHB1bHNlV2F2ZS4ke2lkfS0ke3F1ZXJ5LnJlZklkfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5wdWxzZVdhdmU/LltpZCBhcyBrZXlvZiBQdWxzZVdhdmVRdWVyeV19XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0lubGluZUZpZWxkUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBFZGl0b3JQcm9wcyB9IGZyb20gJy4uL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IFRlc3REYXRhUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHJhbmRvbVdhbGtGaWVsZHMgPSBbXG4gIHsgbGFiZWw6ICdTZXJpZXMgY291bnQnLCBpZDogJ3Nlcmllc0NvdW50JywgcGxhY2Vob2xkZXI6ICcxJywgbWluOiAxLCBzdGVwOiAxIH0sXG4gIHsgbGFiZWw6ICdTdGFydCB2YWx1ZScsIGlkOiAnc3RhcnRWYWx1ZScsIHBsYWNlaG9sZGVyOiAnYXV0bycsIHN0ZXA6IDEgfSxcbiAgeyBsYWJlbDogJ01pbicsIGlkOiAnbWluJywgcGxhY2Vob2xkZXI6ICdub25lJywgc3RlcDogMC4xIH0sXG4gIHsgbGFiZWw6ICdNYXgnLCBpZDogJ21heCcsIHBsYWNlaG9sZGVyOiAnbm9uZScsIHN0ZXA6IDAuMSB9LFxuICB7IGxhYmVsOiAnU3ByZWFkJywgaWQ6ICdzcHJlYWQnLCBwbGFjZWhvbGRlcjogJzEnLCBtaW46IDAuNSwgc3RlcDogMC4xIH0sXG4gIHsgbGFiZWw6ICdOb2lzZScsIGlkOiAnbm9pc2UnLCBwbGFjZWhvbGRlcjogJzAnLCBtaW46IDAsIHN0ZXA6IDAuMSB9LFxuICB7XG4gICAgbGFiZWw6ICdEcm9wICglKScsXG4gICAgaWQ6ICdkcm9wJyxcbiAgICBwbGFjZWhvbGRlcjogJzAnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICBzdGVwOiAxLFxuICAgIHRvb2x0aXA6ICdFeGNsdWRlIHNvbWUgcGVyY2VudCAoY2hhbmNlKSBwb2ludHMnLFxuICB9LFxuXTtcblxuY29uc3QgdGVzdFNlbGVjdG9ycyA9IHNlbGVjdG9ycy5jb21wb25lbnRzLkRhdGFTb3VyY2UuVGVzdERhdGEuUXVlcnlUYWI7XG50eXBlIFNlbGVjdG9yID0gJ21heCcgfCAnbWluJyB8ICdub2lzZScgfCAnc2VyaWVzQ291bnQnIHwgJ3NwcmVhZCcgfCAnc3RhcnRWYWx1ZScgfCAnZHJvcCc7XG5cbmV4cG9ydCBjb25zdCBSYW5kb21XYWxrRWRpdG9yID0gKHsgb25DaGFuZ2UsIHF1ZXJ5IH06IEVkaXRvclByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkUm93PlxuICAgICAge3JhbmRvbVdhbGtGaWVsZHMubWFwKCh7IGxhYmVsLCBpZCwgbWluLCBzdGVwLCBwbGFjZWhvbGRlciwgdG9vbHRpcCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGVzdFNlbGVjdG9ycz8uW2lkIGFzIFNlbGVjdG9yXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9e2xhYmVsfSBsYWJlbFdpZHRoPXsxNH0ga2V5PXtpZH0gYXJpYS1sYWJlbD17c2VsZWN0b3J9IHRvb2x0aXA9e3Rvb2x0aXB9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgICAgbmFtZT17aWR9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBpZD17YHJhbmRvbVdhbGstJHtpZH0tJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgdmFsdWU9eyhxdWVyeSBhcyBhbnkpW2lkIGFzIGtleW9mIFRlc3REYXRhUXVlcnldIHx8IHBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQsIENvZGVFZGl0b3IgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBFZGl0b3JQcm9wcyB9IGZyb20gJy4uL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgdG9EYXRhUXVlcnlSZXNwb25zZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZGF0YUZyYW1lVG9KU09OLCB0b0RhdGFGcmFtZSwgdG9EYXRhRnJhbWVEVE8gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IFJhd0ZyYW1lRWRpdG9yID0gKHsgb25DaGFuZ2UsIHF1ZXJ5IH06IEVkaXRvclByb3BzKSA9PiB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3Qgb25TYXZlRnJhbWVzID0gKHJhd0ZyYW1lQ29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJhd0ZyYW1lQ29udGVudCk7XG4gICAgICBpZiAoaXNBcnJheShqc29uKSkge1xuICAgICAgICBzZXRFcnJvcih1bmRlZmluZWQpO1xuICAgICAgICBzZXRXYXJuaW5nKHVuZGVmaW5lZCk7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHJhd0ZyYW1lQ29udGVudCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YTogYW55ID0gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBDb3B5IHBhc3RlIGZyb20gcGFuZWwganNvblxuICAgICAgaWYgKGlzQXJyYXkoanNvbi5zZXJpZXMpICYmIGpzb24uc3RhdGUpIHtcbiAgICAgICAgZGF0YSA9IGpzb24uc2VyaWVzLm1hcCgodjogYW55KSA9PiB0b0RhdGFGcmFtZURUTyh0b0RhdGFGcmFtZSh2KSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2hlayBpZiBpdCBpcyBhIGNvcHkgb2YgdGhlIHJhdyByZXN1bHNcbiAgICAgICAgY29uc3QgdiA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiBqc29uIH0pO1xuICAgICAgICBpZiAodi5kYXRhPy5sZW5ndGggJiYgIXYuZXJyb3IpIHtcbiAgICAgICAgICBkYXRhID0gdi5kYXRhLm1hcCgoZikgPT4gZGF0YUZyYW1lVG9KU09OKGYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnT3JpZ2luYWwnLCBqc29uKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmUnLCBkYXRhKTtcbiAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcbiAgICAgICAgc2V0V2FybmluZygnQ29udmVydGVkIHRvIGRpcmVjdCBmcmFtZSByZXN1bHQnKTtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcmF3RnJhbWVDb250ZW50OiBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRFcnJvcignVW5hYmxlIHRvIHJlYWQgZGF0YWZyYW1lcyBpbiB0ZXh0Jyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBhcnNpbmcganNvbicsIGUpO1xuICAgICAgc2V0RXJyb3IoJ0VudGVyIEpTT04gYXJyYXkgb2YgZGF0YSBmcmFtZXMgKG9yIHJhdyBxdWVyeSByZXN1bHRzIGJvZHkpJyk7XG4gICAgICBzZXRXYXJuaW5nKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtlcnJvciAmJiA8QWxlcnQgdGl0bGU9e2Vycm9yfSBzZXZlcml0eT1cImVycm9yXCIgLz59XG4gICAgICB7d2FybmluZyAmJiA8QWxlcnQgdGl0bGU9e3dhcm5pbmd9IHNldmVyaXR5PVwid2FybmluZ1wiIC8+fVxuICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgIGxhbmd1YWdlPVwianNvblwiXG4gICAgICAgIHZhbHVlPXtxdWVyeS5yYXdGcmFtZUNvbnRlbnQgPz8gJ1tdJ31cbiAgICAgICAgb25CbHVyPXtvblNhdmVGcmFtZXN9XG4gICAgICAgIG9uU2F2ZT17b25TYXZlRnJhbWVzfVxuICAgICAgICBzaG93TWluaU1hcD17dHJ1ZX1cbiAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXt0cnVlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElucHV0LCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgU3RyZWFtaW5nUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHN0cmVhbWluZ0NsaWVudEZpZWxkcyA9IFtcbiAgeyBsYWJlbDogJ1NwZWVkIChtcyknLCBpZDogJ3NwZWVkJywgcGxhY2Vob2xkZXI6ICd2YWx1ZScsIG1pbjogMTAsIHN0ZXA6IDEwIH0sXG4gIHsgbGFiZWw6ICdTcHJlYWQnLCBpZDogJ3NwcmVhZCcsIHBsYWNlaG9sZGVyOiAndmFsdWUnLCBtaW46IDAuNSwgc3RlcDogMC4xIH0sXG4gIHsgbGFiZWw6ICdOb2lzZScsIGlkOiAnbm9pc2UnLCBwbGFjZWhvbGRlcjogJ3ZhbHVlJywgbWluOiAwLCBzdGVwOiAwLjEgfSxcbiAgeyBsYWJlbDogJ0JhbmRzJywgaWQ6ICdiYW5kcycsIHBsYWNlaG9sZGVyOiAnYmFuZHMnLCBtaW46IDAsIHN0ZXA6IDEgfSxcbl07XG5cbmNvbnN0IHR5cGVzID0gW1xuICB7IHZhbHVlOiAnc2lnbmFsJywgbGFiZWw6ICdTaWduYWwnIH0sXG4gIHsgdmFsdWU6ICdsb2dzJywgbGFiZWw6ICdMb2dzJyB9LFxuICB7IHZhbHVlOiAnZmV0Y2gnLCBsYWJlbDogJ0ZldGNoJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFN0cmVhbWluZ0NsaWVudEVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvblNlbGVjdENoYW5nZSA9ICh7IHZhbHVlIH06IFNlbGVjdGFibGVWYWx1ZSkgPT4ge1xuICAgIG9uQ2hhbmdlKHsgdGFyZ2V0OiB7IG5hbWU6ICd0eXBlJywgdmFsdWUgfSB9KTtcbiAgfTtcblxuICAvLyBDb252ZXJ0IHZhbHVlcyB0byBudW1iZXJzIGJlZm9yZSBzYXZpbmdcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIG9uQ2hhbmdlKHsgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlOiBOdW1iZXIodmFsdWUpIH0gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJUeXBlXCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICA8U2VsZWN0IG1lbnVTaG91bGRQb3J0YWwgd2lkdGg9ezMyfSBvbkNoYW5nZT17b25TZWxlY3RDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17dHlwZXNbMF19IG9wdGlvbnM9e3R5cGVzfSAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIHtxdWVyeT8uc3RyZWFtPy50eXBlID09PSAnc2lnbmFsJyAmJlxuICAgICAgICBzdHJlYW1pbmdDbGllbnRGaWVsZHMubWFwKCh7IGxhYmVsLCBpZCwgbWluLCBzdGVwLCBwbGFjZWhvbGRlciB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD17bGFiZWx9IGxhYmVsV2lkdGg9ezE0fSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPXtgc3RyZWFtLiR7aWR9LSR7cXVlcnkucmVmSWR9YH1cbiAgICAgICAgICAgICAgICBuYW1lPXtpZH1cbiAgICAgICAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zdHJlYW0/LltpZCBhcyBrZXlvZiBTdHJlYW1pbmdRdWVyeV19XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAge3F1ZXJ5Py5zdHJlYW0/LnR5cGUgPT09ICdmZXRjaCcgJiYgKFxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJVUkxcIiBsYWJlbFdpZHRoPXsxNH0gZ3Jvdz5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgaWQ9e2BzdHJlYW0udXJsLSR7cXVlcnkucmVmSWR9YH1cbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeT8uc3RyZWFtPy51cmx9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZldGNoIFVSTFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICl9XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5saW5lRmllbGRSb3csIElubGluZUZpZWxkLCBTZWxlY3QsIE11bHRpU2VsZWN0LCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgVVNBUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBVU0FRdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IFVTQVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVVNBUXVlcnlFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWxXaWR0aD17MTR9IGxhYmVsPVwiTW9kZVwiPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgIG9wdGlvbnM9e3VzYVF1ZXJ5TW9kZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgbW9kZTogdi52YWx1ZSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICB2YWx1ZT17dXNhUXVlcnlNb2Rlcy5maW5kKChlcCkgPT4gZXAudmFsdWUgPT09IHF1ZXJ5Lm1vZGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlBlcmlvZFwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnBlcmlvZH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnMzBtJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBwZXJpb2Q6IHYuY3VycmVudFRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbFdpZHRoPXsxNH0gbGFiZWw9XCJGaWVsZHNcIj5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgIG9wdGlvbnM9e2ZpZWxkTmFtZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHM6IFNlbGVjdGFibGVWYWx1ZVtdKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGZpZWxkczogdmFscy5tYXAoKHYpID0+IHYudmFsdWUpIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWxsXCJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5maWVsZHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiU3RhdGVzXCIgZ3Jvdz5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgIG9wdGlvbnM9e3N0YXRlTmFtZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHM6IFNlbGVjdGFibGVWYWx1ZVtdKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHN0YXRlczogdmFscy5tYXAoKHYpID0+IHYudmFsdWUpIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWxsXCJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zdGF0ZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2FRdWVyeU1vZGVzID0gW1xuICAndmFsdWVzLWFzLXJvd3MnLFxuICAndmFsdWVzLWFzLWZpZWxkcycsXG4gICd2YWx1ZXMtYXMtbGFiZWxlZC1maWVsZHMnLFxuICAndGltZXNlcmllcycsXG4gICd0aW1lc2VyaWVzLXdpZGUnLFxuXS5tYXAoKGYpID0+ICh7IGxhYmVsOiBmLCB2YWx1ZTogZiB9KSk7XG5cbmV4cG9ydCBjb25zdCBmaWVsZE5hbWVzID0gW1xuICAnZm9vJyxcbiAgJ2JhcicsXG4gICdiYXonLCAvLyBhbGwgc2hvcnRcbl0ubWFwKChmKSA9PiAoeyBsYWJlbDogZiwgdmFsdWU6IGYgfSkpO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVOYW1lcyA9IFtcbiAgJ0FMJyxcbiAgJ0FLJyxcbiAgJ0FaJyxcbiAgJ0FSJyxcbiAgJ0NBJyxcbiAgJ0NPJyxcbiAgJ0NUJyxcbiAgJ0RFJyxcbiAgJ0RDJyxcbiAgJ0ZMJyxcbiAgJ0dBJyxcbiAgJ0hJJyxcbiAgJ0lEJyxcbiAgJ0lMJyxcbiAgJ0lOJyxcbiAgJ0lBJyxcbiAgJ0tTJyxcbiAgJ0tZJyxcbiAgJ0xBJyxcbiAgJ01FJyxcbiAgJ01UJyxcbiAgJ05FJyxcbiAgJ05WJyxcbiAgJ05IJyxcbiAgJ05KJyxcbiAgJ05NJyxcbiAgJ05ZJyxcbiAgJ05DJyxcbiAgJ05EJyxcbiAgJ09IJyxcbiAgJ09LJyxcbiAgJ09SJyxcbiAgJ01EJyxcbiAgJ01BJyxcbiAgJ01JJyxcbiAgJ01OJyxcbiAgJ01TJyxcbiAgJ01PJyxcbiAgJ1BBJyxcbiAgJ1JJJyxcbiAgJ1NDJyxcbiAgJ1NEJyxcbiAgJ1ROJyxcbiAgJ1RYJyxcbiAgJ1VUJyxcbiAgJ1ZUJyxcbiAgJ1ZBJyxcbiAgJ1dBJyxcbiAgJ1dWJyxcbiAgJ1dJJyxcbiAgJ1dZJyxcbl0ubWFwKChmKSA9PiAoeyBsYWJlbDogZiwgdmFsdWU6IGYgfSkpO1xuIiwiZXhwb3J0IHsgU3RyZWFtaW5nQ2xpZW50RWRpdG9yIH0gZnJvbSAnLi9TdHJlYW1pbmdDbGllbnRFZGl0b3InO1xuZXhwb3J0IHsgUmFuZG9tV2Fsa0VkaXRvciB9IGZyb20gJy4vUmFuZG9tV2Fsa0VkaXRvcic7XG4iLCJpbXBvcnQgeyBDU1ZXYXZlLCBUZXN0RGF0YVF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHVsc2VRdWVyeTogYW55ID0ge1xuICB0aW1lU3RlcDogNjAsXG4gIG9uQ291bnQ6IDMsXG4gIG9uVmFsdWU6IDIsXG4gIG9mZkNvdW50OiAzLFxuICBvZmZWYWx1ZTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q1NWV2F2ZVF1ZXJ5OiBDU1ZXYXZlW10gPSBbXG4gIHtcbiAgICB0aW1lU3RlcDogNjAsXG4gICAgdmFsdWVzQ1NWOiAnMCwwLDIsMiwxLDEnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRRdWVyeTogVGVzdERhdGFRdWVyeSA9IHtcbiAgc2NlbmFyaW9JZDogJ3JhbmRvbV93YWxrJyxcbiAgcmVmSWQ6ICcnLFxufTtcbiIsImltcG9ydCB7IGZyb20sIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIEFubm90YXRpb25FdmVudCxcbiAgQXJyYXlEYXRhRnJhbWUsXG4gIERhdGFGcmFtZSxcbiAgRGF0YVF1ZXJ5UmVxdWVzdCxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBEYXRhVG9waWMsXG4gIExpdmVDaGFubmVsU2NvcGUsXG4gIExvYWRpbmdTdGF0ZSxcbiAgVGltZVJhbmdlLFxuICBTY29wZWRWYXJzLFxuICB0b0RhdGFGcmFtZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTY2VuYXJpbywgVGVzdERhdGFRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLCBnZXRCYWNrZW5kU3J2LCBnZXRHcmFmYW5hTGl2ZVNydiwgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBxdWVyeU1ldHJpY1RyZWUgfSBmcm9tICcuL21ldHJpY1RyZWUnO1xuaW1wb3J0IHsgcnVuU3RyZWFtIH0gZnJvbSAnLi9ydW5TdHJlYW1zJztcbmltcG9ydCB7IGdldFNlYXJjaEZpbHRlclNjb3BlZFZhciB9IGZyb20gJ2FwcC9mZWF0dXJlcy92YXJpYWJsZXMvdXRpbHMnO1xuaW1wb3J0IHsgVGVzdERhdGFWYXJpYWJsZVN1cHBvcnQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbU5vZGVzLCBzYXZlZE5vZGVzUmVzcG9uc2UgfSBmcm9tICcuL25vZGVHcmFwaFV0aWxzJztcblxuZXhwb3J0IGNsYXNzIFRlc3REYXRhRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VXaXRoQmFja2VuZDxUZXN0RGF0YVF1ZXJ5PiB7XG4gIHNjZW5hcmlvc0NhY2hlPzogUHJvbWlzZTxTY2VuYXJpb1tdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KClcbiAgKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gICAgdGhpcy52YXJpYWJsZXMgPSBuZXcgVGVzdERhdGFWYXJpYWJsZVN1cHBvcnQoKTtcbiAgfVxuXG4gIHF1ZXJ5KG9wdGlvbnM6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgYmFja2VuZFF1ZXJpZXM6IFRlc3REYXRhUXVlcnlbXSA9IFtdO1xuICAgIGNvbnN0IHN0cmVhbXM6IEFycmF5PE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+PiA9IFtdO1xuXG4gICAgLy8gU3RhcnQgc3RyZWFtcyBhbmQgcHJlcGFyZSBxdWVyaWVzXG4gICAgZm9yIChjb25zdCB0YXJnZXQgb2Ygb3B0aW9ucy50YXJnZXRzKSB7XG4gICAgICBpZiAodGFyZ2V0LmhpZGUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVzb2x2ZVRlbXBsYXRlVmFyaWFibGVzKHRhcmdldCwgb3B0aW9ucy5zY29wZWRWYXJzKTtcblxuICAgICAgc3dpdGNoICh0YXJnZXQuc2NlbmFyaW9JZCkge1xuICAgICAgICBjYXNlICdsaXZlJzpcbiAgICAgICAgICBzdHJlYW1zLnB1c2gocnVuR3JhZmFuYUxpdmVRdWVyeSh0YXJnZXQsIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyZWFtaW5nX2NsaWVudCc6XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKHJ1blN0cmVhbSh0YXJnZXQsIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ3JhZmFuYV9hcGknOlxuICAgICAgICAgIHN0cmVhbXMucHVzaChydW5HcmFmYW5hQVBJKHRhcmdldCwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbm5vdGF0aW9ucyc6XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKHRoaXMuYW5ub3RhdGlvbkRhdGFUb3BpY1Rlc3QodGFyZ2V0LCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3ZhcmlhYmxlcy1xdWVyeSc6XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKHRoaXMudmFyaWFibGVzUXVlcnkodGFyZ2V0LCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25vZGVfZ3JhcGgnOlxuICAgICAgICAgIHN0cmVhbXMucHVzaCh0aGlzLm5vZGVzUXVlcnkodGFyZ2V0LCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Jhd19mcmFtZSc6XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKHRoaXMucmF3RnJhbWVRdWVyeSh0YXJnZXQsIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2VydmVyX2Vycm9yXzUwMCc6XG4gICAgICAgICAgLy8gdGhpcyBub3cgaGFzIGFuIG9wdGlvbiB3aGVyZSBpdCBjYW4gcmV0dXJuL3Rocm93IGFuIGVycm9yIGZyb20gdGhlIGZyb250ZW5kLlxuICAgICAgICAgIC8vIGlmIGl0IGRvZXNuJ3QsIHNlbmQgaXQgdG8gdGhlIGJhY2tlbmQgd2hlcmUgaXQgbWlnaHQgcGFuaWMgdGhlcmUgOilcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuc2VydmVyRXJyb3JRdWVyeSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgICAgIHF1ZXJ5ID8gc3RyZWFtcy5wdXNoKHF1ZXJ5KSA6IGJhY2tlbmRRdWVyaWVzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gVW51c2FibGUgc2luY2UgNywgcmVtb3ZlZCBpbiA4XG4gICAgICAgIGNhc2UgJ21hbnVhbF9lbnRyeSc6IHtcbiAgICAgICAgICBsZXQgY3N2Q29udGVudCA9ICdUaW1lLFZhbHVlXFxuJztcbiAgICAgICAgICBpZiAoKHRhcmdldCBhcyBhbnkpLnBvaW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwb2ludCBvZiAodGFyZ2V0IGFzIGFueSkucG9pbnRzKSB7XG4gICAgICAgICAgICAgIGNzdkNvbnRlbnQgKz0gYCR7cG9pbnRbMV19LCR7cG9pbnRbMF19XFxuYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0LnNjZW5hcmlvSWQgPSAnY3N2X2NvbnRlbnQnO1xuICAgICAgICAgIHRhcmdldC5jc3ZDb250ZW50ID0gY3N2Q29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYmFja2VuZFF1ZXJpZXMucHVzaCh0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChiYWNrZW5kUXVlcmllcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGJhY2tlbmRPcHRzID0ge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB0YXJnZXRzOiBiYWNrZW5kUXVlcmllcyxcbiAgICAgIH07XG4gICAgICBzdHJlYW1zLnB1c2goc3VwZXIucXVlcnkoYmFja2VuZE9wdHMpKTtcbiAgICB9XG5cbiAgICBpZiAoc3RyZWFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZSguLi5zdHJlYW1zKTtcbiAgfVxuXG4gIHJlc29sdmVUZW1wbGF0ZVZhcmlhYmxlcyhxdWVyeTogVGVzdERhdGFRdWVyeSwgc2NvcGVkVmFyczogU2NvcGVkVmFycykge1xuICAgIGlmIChxdWVyeS5sYWJlbHMpIHtcbiAgICAgIHF1ZXJ5LmxhYmVscyA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5sYWJlbHMsIHNjb3BlZFZhcnMpO1xuICAgIH1cbiAgICBpZiAocXVlcnkuYWxpYXMpIHtcbiAgICAgIHF1ZXJ5LmFsaWFzID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LmFsaWFzLCBzY29wZWRWYXJzKTtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5LnNjZW5hcmlvSWQpIHtcbiAgICAgIHF1ZXJ5LnNjZW5hcmlvSWQgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkuc2NlbmFyaW9JZCwgc2NvcGVkVmFycyk7XG4gICAgfVxuICAgIGlmIChxdWVyeS5zdHJpbmdJbnB1dCkge1xuICAgICAgcXVlcnkuc3RyaW5nSW5wdXQgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkuc3RyaW5nSW5wdXQsIHNjb3BlZFZhcnMpO1xuICAgIH1cbiAgICBpZiAocXVlcnkuY3N2Q29udGVudCkge1xuICAgICAgcXVlcnkuY3N2Q29udGVudCA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5jc3ZDb250ZW50LCBzY29wZWRWYXJzKTtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5LnJhd0ZyYW1lQ29udGVudCkge1xuICAgICAgcXVlcnkucmF3RnJhbWVDb250ZW50ID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnJhd0ZyYW1lQ29udGVudCwgc2NvcGVkVmFycyk7XG4gICAgfVxuICB9XG5cbiAgYW5ub3RhdGlvbkRhdGFUb3BpY1Rlc3QodGFyZ2V0OiBUZXN0RGF0YVF1ZXJ5LCByZXE6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5idWlsZEZha2VBbm5vdGF0aW9uRXZlbnRzKHJlcS5yYW5nZSwgNTApO1xuICAgIGNvbnN0IGRhdGFGcmFtZSA9IG5ldyBBcnJheURhdGFGcmFtZShldmVudHMpO1xuICAgIGRhdGFGcmFtZS5tZXRhID0geyBkYXRhVG9waWM6IERhdGFUb3BpYy5Bbm5vdGF0aW9ucyB9O1xuXG4gICAgcmV0dXJuIG9mKHsga2V5OiB0YXJnZXQucmVmSWQsIGRhdGE6IFtkYXRhRnJhbWVdIH0pLnBpcGUoZGVsYXkoMTAwKSk7XG4gIH1cblxuICBidWlsZEZha2VBbm5vdGF0aW9uRXZlbnRzKHJhbmdlOiBUaW1lUmFuZ2UsIGNvdW50OiBudW1iZXIpOiBBbm5vdGF0aW9uRXZlbnRbXSB7XG4gICAgbGV0IHRpbWVXYWxrZXIgPSByYW5nZS5mcm9tLnZhbHVlT2YoKTtcbiAgICBjb25zdCB0byA9IHJhbmdlLnRvLnZhbHVlT2YoKTtcbiAgICBjb25zdCBldmVudHMgPSBbXTtcbiAgICBjb25zdCBzdGVwID0gKHRvIC0gdGltZVdhbGtlcikgLyBjb3VudDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICB0aW1lOiB0aW1lV2Fsa2VyLFxuICAgICAgICB0ZXh0OiAnVGhpcyBpcyB0aGUgdGV4dCwgPGEgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb21cIj5HcmFmYW5hLmNvbTwvYT4nLFxuICAgICAgICB0YWdzOiBbJ3RleHQnLCAnc2VydmVyJ10sXG4gICAgICB9KTtcbiAgICAgIHRpbWVXYWxrZXIgKz0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnRzO1xuICB9XG5cbiAgYW5ub3RhdGlvblF1ZXJ5KG9wdGlvbnM6IGFueSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5idWlsZEZha2VBbm5vdGF0aW9uRXZlbnRzKG9wdGlvbnMucmFuZ2UsIDEwKSk7XG4gIH1cblxuICBnZXRRdWVyeURpc3BsYXlUZXh0KHF1ZXJ5OiBUZXN0RGF0YVF1ZXJ5KSB7XG4gICAgY29uc3Qgc2NlbmFyaW8gPSBxdWVyeS5zY2VuYXJpb0lkID8/ICdEZWZhdWx0IHNjZW5hcmlvJztcblxuICAgIGlmIChxdWVyeS5hbGlhcykge1xuICAgICAgcmV0dXJuIHNjZW5hcmlvICsgJyBhcyAnICsgcXVlcnkuYWxpYXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjZW5hcmlvO1xuICB9XG5cbiAgdGVzdERhdGFzb3VyY2UoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIG1lc3NhZ2U6ICdEYXRhIHNvdXJjZSBpcyB3b3JraW5nJyxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNjZW5hcmlvcygpOiBQcm9taXNlPFNjZW5hcmlvW10+IHtcbiAgICBpZiAoIXRoaXMuc2NlbmFyaW9zQ2FjaGUpIHtcbiAgICAgIHRoaXMuc2NlbmFyaW9zQ2FjaGUgPSB0aGlzLmdldFJlc291cmNlKCdzY2VuYXJpb3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zY2VuYXJpb3NDYWNoZTtcbiAgfVxuXG4gIHZhcmlhYmxlc1F1ZXJ5KHRhcmdldDogVGVzdERhdGFRdWVyeSwgb3B0aW9uczogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCBxdWVyeSA9IHRhcmdldC5zdHJpbmdJbnB1dCA/PyAnJztcbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRRdWVyeSA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgIHF1ZXJ5LFxuICAgICAgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyKHsgcXVlcnksIHdpbGRjYXJkQ2hhcjogJyonLCBvcHRpb25zOiBvcHRpb25zLnNjb3BlZFZhcnMgfSlcbiAgICApO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcXVlcnlNZXRyaWNUcmVlKGludGVycG9sYXRlZFF1ZXJ5KTtcbiAgICBjb25zdCBpdGVtcyA9IGNoaWxkcmVuLm1hcCgoaXRlbSkgPT4gKHsgdmFsdWU6IGl0ZW0ubmFtZSwgdGV4dDogaXRlbS5uYW1lIH0pKTtcbiAgICBjb25zdCBkYXRhRnJhbWUgPSBuZXcgQXJyYXlEYXRhRnJhbWUoaXRlbXMpO1xuXG4gICAgcmV0dXJuIG9mKHsgZGF0YTogW2RhdGFGcmFtZV0gfSkucGlwZShkZWxheSgxMDApKTtcbiAgfVxuXG4gIG5vZGVzUXVlcnkodGFyZ2V0OiBUZXN0RGF0YVF1ZXJ5LCBvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGNvbnN0IHR5cGUgPSB0YXJnZXQubm9kZXM/LnR5cGUgfHwgJ3JhbmRvbSc7XG4gICAgbGV0IGZyYW1lczogRGF0YUZyYW1lW107XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdyYW5kb20nOlxuICAgICAgICBmcmFtZXMgPSBnZW5lcmF0ZVJhbmRvbU5vZGVzKHRhcmdldC5ub2Rlcz8uY291bnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgZnJhbWVzID0gc2F2ZWROb2Rlc1Jlc3BvbnNlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG5vZGVfZ3JhcGggc3ViIHR5cGUgJHt0eXBlfWApO1xuICAgIH1cblxuICAgIHJldHVybiBvZih7IGRhdGE6IGZyYW1lcyB9KS5waXBlKGRlbGF5KDEwMCkpO1xuICB9XG5cbiAgcmF3RnJhbWVRdWVyeSh0YXJnZXQ6IFRlc3REYXRhUXVlcnksIG9wdGlvbnM6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yYXdGcmFtZUNvbnRlbnQgPz8gJ1tdJykubWFwKCh2OiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZiA9IHRvRGF0YUZyYW1lKHYpO1xuICAgICAgICBmLnJlZklkID0gdGFyZ2V0LnJlZklkO1xuICAgICAgICByZXR1cm4gZjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9mKHsgZGF0YSwgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lIH0pLnBpcGUoZGVsYXkoMTAwKSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdLCBlcnJvcjogZXggfSkucGlwZShkZWxheSgxMDApKTtcbiAgICB9XG4gIH1cblxuICBzZXJ2ZXJFcnJvclF1ZXJ5KFxuICAgIHRhcmdldDogVGVzdERhdGFRdWVyeSxcbiAgICBvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+XG4gICk6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHwgbnVsbCB7XG4gICAgY29uc3QgeyBlcnJvclR5cGUgfSA9IHRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhcIndlJ3JlIGhlcmUhXCIsIHRhcmdldCk7XG5cbiAgICBpZiAoZXJyb3JUeXBlID09PSAnc2VydmVyX3BhbmljJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nSW5wdXQgPSB0YXJnZXQuc3RyaW5nSW5wdXQgPz8gJyc7XG4gICAgaWYgKHN0cmluZ0lucHV0ID09PSAnJykge1xuICAgICAgaWYgKGVycm9yVHlwZSA9PT0gJ2Zyb250ZW5kX2V4Y2VwdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2VuYXJpbyB0aHJldyBhbiBleGNlcHRpb24gaW4gdGhlIGZyb250ZW5kIGJlY2F1c2UgdGhlIGlucHV0IHdhcyBlbXB0eS4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IG5ldyBFcnJvcignU2NlbmFyaW8gcmV0dXJuZWQgYW4gZXJyb3IgYmVjYXVzZSB0aGUgaW5wdXQgd2FzIGVtcHR5LicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5HcmFmYW5hQVBJKHRhcmdldDogVGVzdERhdGFRdWVyeSwgcmVxOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICBjb25zdCB1cmwgPSBgL2FwaS8ke3RhcmdldC5zdHJpbmdJbnB1dH1gO1xuICByZXR1cm4gZnJvbShcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IG5ldyBBcnJheURhdGFGcmFtZShyZXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgICAgICBkYXRhOiBbZnJhbWVdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgKTtcbn1cblxubGV0IGxpdmVRdWVyeUNvdW50ZXIgPSAxMDAwO1xuXG5mdW5jdGlvbiBydW5HcmFmYW5hTGl2ZVF1ZXJ5KFxuICB0YXJnZXQ6IFRlc3REYXRhUXVlcnksXG4gIHJlcTogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5PlxuKTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICBpZiAoIXRhcmdldC5jaGFubmVsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGNoYW5uZWwgY29uZmlnYCk7XG4gIH1cbiAgcmV0dXJuIGdldEdyYWZhbmFMaXZlU3J2KCkuZ2V0RGF0YVN0cmVhbSh7XG4gICAgYWRkcjoge1xuICAgICAgc2NvcGU6IExpdmVDaGFubmVsU2NvcGUuUGx1Z2luLFxuICAgICAgbmFtZXNwYWNlOiAndGVzdGRhdGEnLFxuICAgICAgcGF0aDogdGFyZ2V0LmNoYW5uZWwsXG4gICAgfSxcbiAgICBrZXk6IGB0ZXN0U3RyZWFtLiR7bGl2ZVF1ZXJ5Q291bnRlcisrfWAsXG4gIH0pO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBUcmVlTm9kZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hpbGRyZW46IFRyZWVOb2RlW107XG59XG5cbi8qXG4gKiAgQnVpbGRzIGEgbmVzdGVkIHRyZWUgbGlrZVxuICogIFtcbiAqICAgIHtcbiAqICAgICAgbmFtZTogJ0EnLFxuICogICAgICBjaGlsZHJlbjogW1xuICogICAgICAgIHsgbmFtZTogJ0FBJywgY2hpbGRyZW46IFtdIH0sXG4gKiAgICAgICAgeyBuYW1lOiAnQUInLCBjaGlsZHJlbjogW10gfSxcbiAqICAgICAgXVxuICogICAgfVxuICogIF1cbiAqL1xuZnVuY3Rpb24gYnVpbGRNZXRyaWNUcmVlKHBhcmVudDogc3RyaW5nLCBkZXB0aDogbnVtYmVyKTogVHJlZU5vZGVbXSB7XG4gIGNvbnN0IGNoYXJzID0gWydBJywgJ0InLCAnQyddO1xuICBjb25zdCBjaGlsZHJlbjogVHJlZU5vZGVbXSA9IFtdO1xuXG4gIGlmIChkZXB0aCA+IDUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBmb3IgKGNvbnN0IGxldHRlciBvZiBjaGFycykge1xuICAgIGNvbnN0IG5vZGVOYW1lID0gYCR7cGFyZW50fSR7bGV0dGVyfWA7XG4gICAgY2hpbGRyZW4ucHVzaCh7XG4gICAgICBuYW1lOiBub2RlTmFtZSxcbiAgICAgIGNoaWxkcmVuOiBidWlsZE1ldHJpY1RyZWUobm9kZU5hbWUsIGRlcHRoICsgMSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5VHJlZShjaGlsZHJlbjogVHJlZU5vZGVbXSwgcXVlcnk6IHN0cmluZ1tdLCBxdWVyeUluZGV4OiBudW1iZXIpOiBUcmVlTm9kZVtdIHtcbiAgaWYgKHF1ZXJ5SW5kZXggPj0gcXVlcnkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgaWYgKHF1ZXJ5W3F1ZXJ5SW5kZXhdID09PSAnKicpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICBjb25zdCBub2RlUXVlcnkgPSBxdWVyeVtxdWVyeUluZGV4XTtcbiAgbGV0IHJlc3VsdDogVHJlZU5vZGVbXSA9IFtdO1xuICBsZXQgbmFtZXNUb01hdGNoID0gW25vZGVRdWVyeV07XG5cbiAgLy8gaGFuZGxlIGdsb2IgcXVlcmllc1xuICBpZiAobm9kZVF1ZXJ5LnN0YXJ0c1dpdGgoJ3snKSkge1xuICAgIG5hbWVzVG9NYXRjaCA9IG5vZGVRdWVyeS5yZXBsYWNlKC9cXHt8XFx9L2csICcnKS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIGNoaWxkcmVuKSB7XG4gICAgZm9yIChjb25zdCBuYW1lVG9NYXRjaCBvZiBuYW1lc1RvTWF0Y2gpIHtcbiAgICAgIGlmIChuYW1lVG9NYXRjaC5pbmRleE9mKCcqJykgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBuYW1lVG9NYXRjaC5yZXBsYWNlKCcqJywgJycpO1xuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYF4ke3BhdHRlcm59LipgLCAnZ2knKTtcbiAgICAgICAgaWYgKHJlZ2V4LnRlc3Qobm9kZS5uYW1lKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQocXVlcnlUcmVlKFtub2RlXSwgcXVlcnksIHF1ZXJ5SW5kZXggKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5uYW1lID09PSBuYW1lVG9NYXRjaCkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHF1ZXJ5VHJlZShub2RlLmNoaWxkcmVuLCBxdWVyeSwgcXVlcnlJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlNZXRyaWNUcmVlKHF1ZXJ5OiBzdHJpbmcpOiBUcmVlTm9kZVtdIHtcbiAgaWYgKHF1ZXJ5LmluZGV4T2YoJ3ZhbHVlJykgPT09IDApIHtcbiAgICByZXR1cm4gW3sgbmFtZTogcXVlcnksIGNoaWxkcmVuOiBbXSB9XTtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gYnVpbGRNZXRyaWNUcmVlKCcnLCAwKTtcbiAgcmV0dXJuIHF1ZXJ5VHJlZShjaGlsZHJlbiwgcXVlcnkuc3BsaXQoJy4nKSwgMCk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBUZXN0RGF0YURhdGFTb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgVGVzdEluZm9UYWIgfSBmcm9tICcuL1Rlc3RJbmZvVGFiJztcbmltcG9ydCB7IENvbmZpZ0VkaXRvciB9IGZyb20gJy4vQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9RdWVyeUVkaXRvcic7XG5cbmNsYXNzIFRlc3REYXRhQW5ub3RhdGlvbnNRdWVyeUN0cmwge1xuICBhbm5vdGF0aW9uOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIHRlbXBsYXRlID0gJzxoMj5Bbm5vdGF0aW9uIHNjZW5hcmlvPC9oMj4nO1xufVxuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW4oVGVzdERhdGFEYXRhU291cmNlKVxuICAuc2V0Q29uZmlnRWRpdG9yKENvbmZpZ0VkaXRvcilcbiAgLnNldFF1ZXJ5RWRpdG9yKFF1ZXJ5RWRpdG9yKVxuICAuc2V0QW5ub3RhdGlvblF1ZXJ5Q3RybChUZXN0RGF0YUFubm90YXRpb25zUXVlcnlDdHJsKVxuICAuYWRkQ29uZmlnUGFnZSh7XG4gICAgdGl0bGU6ICdTZXR1cCcsXG4gICAgaWNvbjogJ2xpc3QtdWwnLFxuICAgIGJvZHk6IFRlc3RJbmZvVGFiLFxuICAgIGlkOiAnc2V0dXAnLFxuICB9KTtcbiIsImltcG9ydCB7XG4gIEFycmF5VmVjdG9yLFxuICBGaWVsZENvbG9yTW9kZUlkLFxuICBGaWVsZERUTyxcbiAgRmllbGRUeXBlLFxuICBNdXRhYmxlRGF0YUZyYW1lLFxuICBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IG5vZGVzLCBlZGdlcyB9IGZyb20gJy4vdGVzdERhdGEvc2VydmljZU1hcFJlc3BvbnNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTm9kZXMoY291bnQgPSAxMCkge1xuICBjb25zdCBub2RlcyA9IFtdO1xuXG4gIGNvbnN0IHJvb3QgPSB7XG4gICAgaWQ6ICcwJyxcbiAgICB0aXRsZTogJ3Jvb3QnLFxuICAgIHN1YlRpdGxlOiAnY2xpZW50JyxcbiAgICBzdWNjZXNzOiAxLFxuICAgIGVycm9yOiAwLFxuICAgIHN0YXQxOiBNYXRoLnJhbmRvbSgpLFxuICAgIHN0YXQyOiBNYXRoLnJhbmRvbSgpLFxuICAgIGVkZ2VzOiBbXSBhcyBhbnlbXSxcbiAgfTtcbiAgbm9kZXMucHVzaChyb290KTtcbiAgY29uc3Qgbm9kZXNXaXRob3V0TWF4RWRnZXMgPSBbcm9vdF07XG5cbiAgY29uc3QgbWF4RWRnZXMgPSAzO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY291bnQ7IGkrKykge1xuICAgIGNvbnN0IG5vZGUgPSBtYWtlUmFuZG9tTm9kZShpKTtcbiAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgIGNvbnN0IHNvdXJjZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihub2Rlc1dpdGhvdXRNYXhFZGdlcy5sZW5ndGggLSAxKSk7XG4gICAgY29uc3Qgc291cmNlID0gbm9kZXNXaXRob3V0TWF4RWRnZXNbc291cmNlSW5kZXhdO1xuICAgIHNvdXJjZS5lZGdlcy5wdXNoKG5vZGUuaWQpO1xuICAgIGlmIChzb3VyY2UuZWRnZXMubGVuZ3RoID49IG1heEVkZ2VzKSB7XG4gICAgICBub2Rlc1dpdGhvdXRNYXhFZGdlcy5zcGxpY2Uoc291cmNlSW5kZXgsIDEpO1xuICAgIH1cbiAgICBub2Rlc1dpdGhvdXRNYXhFZGdlcy5wdXNoKG5vZGUpO1xuICB9XG5cbiAgLy8gQWRkIHNvbWUgcmFuZG9tIGVkZ2VzIHRvIGNyZWF0ZSBwb3NzaWJsZSBjeWNsZVxuICBjb25zdCBhZGRpdGlvbmFsRWRnZXMgPSBNYXRoLmZsb29yKGNvdW50IC8gMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGFkZGl0aW9uYWxFZGdlczsgaSsrKSB7XG4gICAgY29uc3Qgc291cmNlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG5vZGVzLmxlbmd0aCAtIDEpKTtcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3Iobm9kZXMubGVuZ3RoIC0gMSkpO1xuICAgIGlmIChzb3VyY2VJbmRleCA9PT0gdGFyZ2V0SW5kZXggfHwgbm9kZXNbc291cmNlSW5kZXhdLmlkID09PSAnMCcgfHwgbm9kZXNbc291cmNlSW5kZXhdLmlkID09PSAnMCcpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIG5vZGVzW3NvdXJjZUluZGV4XS5lZGdlcy5wdXNoKG5vZGVzW3NvdXJjZUluZGV4XS5pZCk7XG4gIH1cblxuICBjb25zdCBub2RlRmllbGRzOiBSZWNvcmQ8c3RyaW5nLCBPbWl0PEZpZWxkRFRPLCAnbmFtZSc+ICYgeyB2YWx1ZXM6IEFycmF5VmVjdG9yIH0+ID0ge1xuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmlkXToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgfSxcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy50aXRsZV06IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgIH0sXG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuc3ViVGl0bGVdOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICB9LFxuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLm1haW5TdGF0XToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdUcmFuc2FjdGlvbnMgcGVyIHNlY29uZCcgfSxcbiAgICB9LFxuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnNlY29uZGFyeVN0YXRdOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ0F2ZXJhZ2UgZHVyYXRpb24nIH0sXG4gICAgfSxcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5hcmMgKyAnc3VjY2VzcyddOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBmaXhlZENvbG9yOiAnZ3JlZW4nLCBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLkZpeGVkIH0sIGRpc3BsYXlOYW1lOiAnU3VjY2VzcycgfSxcbiAgICB9LFxuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmFyYyArICdlcnJvcnMnXToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgY29sb3I6IHsgZml4ZWRDb2xvcjogJ3JlZCcsIG1vZGU6IEZpZWxkQ29sb3JNb2RlSWQuRml4ZWQgfSwgZGlzcGxheU5hbWU6ICdFcnJvcnMnIH0sXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBub2RlRnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgbmFtZTogJ25vZGVzJyxcbiAgICBmaWVsZHM6IE9iamVjdC5rZXlzKG5vZGVGaWVsZHMpLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgLi4ubm9kZUZpZWxkc1trZXldLFxuICAgICAgbmFtZToga2V5LFxuICAgIH0pKSxcbiAgICBtZXRhOiB7IHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbm9kZUdyYXBoJyB9LFxuICB9KTtcblxuICBjb25zdCBlZGdlRmllbGRzOiBhbnkgPSB7XG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuaWRdOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICB9LFxuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnNvdXJjZV06IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgIH0sXG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMudGFyZ2V0XToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBlZGdlc0ZyYW1lID0gbmV3IE11dGFibGVEYXRhRnJhbWUoe1xuICAgIG5hbWU6ICdlZGdlcycsXG4gICAgZmllbGRzOiBPYmplY3Qua2V5cyhlZGdlRmllbGRzKS5tYXAoKGtleSkgPT4gKHtcbiAgICAgIC4uLmVkZ2VGaWVsZHNba2V5XSxcbiAgICAgIG5hbWU6IGtleSxcbiAgICB9KSksXG4gICAgbWV0YTogeyBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ25vZGVHcmFwaCcgfSxcbiAgfSk7XG5cbiAgY29uc3QgZWRnZXNTZXQgPSBuZXcgU2V0KCk7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIG5vZGVGaWVsZHMuaWQudmFsdWVzLmFkZChub2RlLmlkKTtcbiAgICBub2RlRmllbGRzLnRpdGxlLnZhbHVlcy5hZGQobm9kZS50aXRsZSk7XG4gICAgbm9kZUZpZWxkcy5zdWJUaXRsZS52YWx1ZXMuYWRkKG5vZGUuc3ViVGl0bGUpO1xuICAgIG5vZGVGaWVsZHMubWFpblN0YXQudmFsdWVzLmFkZChub2RlLnN0YXQxKTtcbiAgICBub2RlRmllbGRzLnNlY29uZGFyeVN0YXQudmFsdWVzLmFkZChub2RlLnN0YXQyKTtcbiAgICBub2RlRmllbGRzLmFyY19fc3VjY2Vzcy52YWx1ZXMuYWRkKG5vZGUuc3VjY2Vzcyk7XG4gICAgbm9kZUZpZWxkcy5hcmNfX2Vycm9ycy52YWx1ZXMuYWRkKG5vZGUuZXJyb3IpO1xuICAgIGZvciAoY29uc3QgZWRnZSBvZiBub2RlLmVkZ2VzKSB7XG4gICAgICBjb25zdCBpZCA9IGAke25vZGUuaWR9LS0ke2VkZ2V9YDtcbiAgICAgIC8vIFdlIGNhbiBoYXZlIGR1cGxpY2F0ZSBlZGdlcyB3aGVuIHdlIGFkZGVkIHNvbWUgbW9yZSBieSByYW5kb21cbiAgICAgIGlmIChlZGdlc1NldC5oYXMoaWQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZWRnZXNTZXQuYWRkKGlkKTtcbiAgICAgIGVkZ2VGaWVsZHMuaWQudmFsdWVzLmFkZChgJHtub2RlLmlkfS0tJHtlZGdlfWApO1xuICAgICAgZWRnZUZpZWxkcy5zb3VyY2UudmFsdWVzLmFkZChub2RlLmlkKTtcbiAgICAgIGVkZ2VGaWVsZHMudGFyZ2V0LnZhbHVlcy5hZGQoZWRnZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtub2RlRnJhbWUsIGVkZ2VzRnJhbWVdO1xufVxuXG5mdW5jdGlvbiBtYWtlUmFuZG9tTm9kZShpbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHN1Y2Nlc3MgPSBNYXRoLnJhbmRvbSgpO1xuICBjb25zdCBlcnJvciA9IDEgLSBzdWNjZXNzO1xuICByZXR1cm4ge1xuICAgIGlkOiBpbmRleC50b1N0cmluZygpLFxuICAgIHRpdGxlOiBgc2VydmljZToke2luZGV4fWAsXG4gICAgc3ViVGl0bGU6ICdzZXJ2aWNlJyxcbiAgICBzdWNjZXNzLFxuICAgIGVycm9yLFxuICAgIHN0YXQxOiBNYXRoLnJhbmRvbSgpLFxuICAgIHN0YXQyOiBNYXRoLnJhbmRvbSgpLFxuICAgIGVkZ2VzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVkTm9kZXNSZXNwb25zZSgpOiBhbnkge1xuICByZXR1cm4gW25ldyBNdXRhYmxlRGF0YUZyYW1lKG5vZGVzKSwgbmV3IE11dGFibGVEYXRhRnJhbWUoZWRnZXMpXTtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5UmVxdWVzdCxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIEZpZWxkVHlwZSxcbiAgQ2lyY3VsYXJEYXRhRnJhbWUsXG4gIENTVlJlYWRlcixcbiAgRmllbGQsXG4gIExvYWRpbmdTdGF0ZSxcbiAgRGF0YUZyYW1lU2NoZW1hLFxuICBEYXRhRnJhbWVEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgVGVzdERhdGFRdWVyeSwgU3RyZWFtaW5nUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFJhbmRvbUxpbmUgfSBmcm9tICcuL0xvZ0lwc3VtJztcbmltcG9ydCB7IGxpdmVUaW1lciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvbGl2ZVRpbWVyJztcbmltcG9ydCB7IFN0cmVhbWluZ0RhdGFGcmFtZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9saXZlL2RhdGEvU3RyZWFtaW5nRGF0YUZyYW1lJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdHJlYW1RdWVyeTogU3RyZWFtaW5nUXVlcnkgPSB7XG4gIHR5cGU6ICdzaWduYWwnLFxuICBzcGVlZDogMjUwLCAvLyBtc1xuICBzcHJlYWQ6IDMuNSxcbiAgbm9pc2U6IDIuMixcbiAgYmFuZHM6IDEsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcnVuU3RyZWFtKHRhcmdldDogVGVzdERhdGFRdWVyeSwgcmVxOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICBjb25zdCBxdWVyeSA9IGRlZmF1bHRzKHRhcmdldC5zdHJlYW0sIGRlZmF1bHRTdHJlYW1RdWVyeSk7XG4gIGlmICgnc2lnbmFsJyA9PT0gcXVlcnkudHlwZSkge1xuICAgIHJldHVybiBydW5TaWduYWxTdHJlYW0odGFyZ2V0LCBxdWVyeSwgcmVxKTtcbiAgfVxuICBpZiAoJ2xvZ3MnID09PSBxdWVyeS50eXBlKSB7XG4gICAgcmV0dXJuIHJ1bkxvZ3NTdHJlYW0odGFyZ2V0LCBxdWVyeSwgcmVxKTtcbiAgfVxuICBpZiAoJ2ZldGNoJyA9PT0gcXVlcnkudHlwZSkge1xuICAgIHJldHVybiBydW5GZXRjaFN0cmVhbSh0YXJnZXQsIHF1ZXJ5LCByZXEpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBTdHJlYW0gVHlwZTogJHtxdWVyeS50eXBlfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuU2lnbmFsU3RyZWFtKFxuICB0YXJnZXQ6IFRlc3REYXRhUXVlcnksXG4gIHF1ZXJ5OiBTdHJlYW1pbmdRdWVyeSxcbiAgcmVxOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+XG4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4oKHN1YnNjcmliZXIpID0+IHtcbiAgICBjb25zdCBzdHJlYW1JZCA9IGBzaWduYWwtJHtyZXEucGFuZWxJZH0tJHt0YXJnZXQucmVmSWR9YDtcbiAgICBjb25zdCBtYXhEYXRhUG9pbnRzID0gcmVxLm1heERhdGFQb2ludHMgfHwgMTAwMDtcblxuICAgIGNvbnN0IHNjaGVtYTogRGF0YUZyYW1lU2NoZW1hID0ge1xuICAgICAgcmVmSWQ6IHRhcmdldC5yZWZJZCxcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7IG5hbWU6ICd0aW1lJywgdHlwZTogRmllbGRUeXBlLnRpbWUgfSxcbiAgICAgICAgeyBuYW1lOiB0YXJnZXQuYWxpYXMgPz8gJ3ZhbHVlJywgdHlwZTogRmllbGRUeXBlLm51bWJlciB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBzcHJlYWQsIHNwZWVkLCBiYW5kcyA9IDAsIG5vaXNlIH0gPSBxdWVyeTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbmRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHN1ZmZpeCA9IGJhbmRzID4gMSA/IGAgJHtpICsgMX1gIDogJyc7XG4gICAgICBzY2hlbWEuZmllbGRzLnB1c2goeyBuYW1lOiAnTWluJyArIHN1ZmZpeCwgdHlwZTogRmllbGRUeXBlLm51bWJlciB9KTtcbiAgICAgIHNjaGVtYS5maWVsZHMucHVzaCh7IG5hbWU6ICdNYXgnICsgc3VmZml4LCB0eXBlOiBGaWVsZFR5cGUubnVtYmVyIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZyYW1lID0gU3RyZWFtaW5nRGF0YUZyYW1lLmZyb21EYXRhRnJhbWVKU09OKHsgc2NoZW1hIH0sIHsgbWF4TGVuZ3RoOiBtYXhEYXRhUG9pbnRzIH0pO1xuXG4gICAgbGV0IHZhbHVlID0gTWF0aC5yYW5kb20oKSAqIDEwMDtcbiAgICBsZXQgdGltZW91dElkOiBhbnkgPSBudWxsO1xuICAgIGxldCBsYXN0U2VudCA9IC0xO1xuXG4gICAgY29uc3QgYWRkTmV4dFJvdyA9ICh0aW1lOiBudW1iZXIpID0+IHtcbiAgICAgIHZhbHVlICs9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHNwcmVhZDtcblxuICAgICAgY29uc3QgZGF0YTogRGF0YUZyYW1lRGF0YSA9IHtcbiAgICAgICAgdmFsdWVzOiBbW3RpbWVdLCBbdmFsdWVdXSxcbiAgICAgIH07XG5cbiAgICAgIGxldCBtaW4gPSB2YWx1ZTtcbiAgICAgIGxldCBtYXggPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5kczsgaSsrKSB7XG4gICAgICAgIG1pbiA9IG1pbiAtIE1hdGgucmFuZG9tKCkgKiBub2lzZTtcbiAgICAgICAgbWF4ID0gbWF4ICsgTWF0aC5yYW5kb20oKSAqIG5vaXNlO1xuXG4gICAgICAgIGRhdGEudmFsdWVzLnB1c2goW21pbl0pO1xuICAgICAgICBkYXRhLnZhbHVlcy5wdXNoKFttYXhdKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXZlbnQgPSB7IGRhdGEgfTtcbiAgICAgIHJldHVybiBmcmFtZS5wdXNoKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgLy8gRmlsbCB0aGUgYnVmZmVyIG9uIGluaXRcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgbGV0IHRpbWUgPSBEYXRlLm5vdygpIC0gbWF4RGF0YVBvaW50cyAqIHNwZWVkO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhEYXRhUG9pbnRzOyBpKyspIHtcbiAgICAgICAgYWRkTmV4dFJvdyh0aW1lKTtcbiAgICAgICAgdGltZSArPSBzcGVlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwdXNoTmV4dEV2ZW50ID0gKCkgPT4ge1xuICAgICAgYWRkTmV4dFJvdyhEYXRlLm5vdygpKTtcblxuICAgICAgY29uc3QgZWxhcHNlZCA9IGxpdmVUaW1lci5sYXN0VXBkYXRlIC0gbGFzdFNlbnQ7XG4gICAgICBpZiAoZWxhcHNlZCA+IDEwMDAgfHwgbGl2ZVRpbWVyLm9rKSB7XG4gICAgICAgIHN1YnNjcmliZXIubmV4dCh7XG4gICAgICAgICAgZGF0YTogW2ZyYW1lXSxcbiAgICAgICAgICBrZXk6IHN0cmVhbUlkLFxuICAgICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuU3RyZWFtaW5nLFxuICAgICAgICB9KTtcbiAgICAgICAgbGFzdFNlbnQgPSBsaXZlVGltZXIubGFzdFVwZGF0ZTtcbiAgICAgIH1cblxuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChwdXNoTmV4dEV2ZW50LCBzcGVlZCk7XG4gICAgfTtcblxuICAgIC8vIFNlbmQgZmlyc3QgZXZlbnQgaW4gNW1zXG4gICAgc2V0VGltZW91dChwdXNoTmV4dEV2ZW50LCA1KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndW5zdWJzY3JpYmluZyB0byBzdHJlYW0gJyArIHN0cmVhbUlkKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuTG9nc1N0cmVhbShcbiAgdGFyZ2V0OiBUZXN0RGF0YVF1ZXJ5LFxuICBxdWVyeTogU3RyZWFtaW5nUXVlcnksXG4gIHJlcTogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5PlxuKTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgY29uc3Qgc3RyZWFtSWQgPSBgbG9ncy0ke3JlcS5wYW5lbElkfS0ke3RhcmdldC5yZWZJZH1gO1xuICAgIGNvbnN0IG1heERhdGFQb2ludHMgPSByZXEubWF4RGF0YVBvaW50cyB8fCAxMDAwO1xuXG4gICAgY29uc3QgZGF0YSA9IG5ldyBDaXJjdWxhckRhdGFGcmFtZSh7XG4gICAgICBhcHBlbmQ6ICd0YWlsJyxcbiAgICAgIGNhcGFjaXR5OiBtYXhEYXRhUG9pbnRzLFxuICAgIH0pO1xuICAgIGRhdGEucmVmSWQgPSB0YXJnZXQucmVmSWQ7XG4gICAgZGF0YS5uYW1lID0gdGFyZ2V0LmFsaWFzIHx8ICdMb2dzICcgKyB0YXJnZXQucmVmSWQ7XG4gICAgZGF0YS5hZGRGaWVsZCh7IG5hbWU6ICdsaW5lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9KTtcbiAgICBkYXRhLmFkZEZpZWxkKHsgbmFtZTogJ3RpbWUnLCB0eXBlOiBGaWVsZFR5cGUudGltZSB9KTtcbiAgICBkYXRhLm1ldGEgPSB7IHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbG9ncycgfTtcblxuICAgIGNvbnN0IHsgc3BlZWQgfSA9IHF1ZXJ5O1xuXG4gICAgbGV0IHRpbWVvdXRJZDogYW55ID0gbnVsbDtcblxuICAgIGNvbnN0IHB1c2hOZXh0RXZlbnQgPSAoKSA9PiB7XG4gICAgICBkYXRhLmZpZWxkc1swXS52YWx1ZXMuYWRkKERhdGUubm93KCkpO1xuICAgICAgZGF0YS5maWVsZHNbMV0udmFsdWVzLmFkZChnZXRSYW5kb21MaW5lKCkpO1xuXG4gICAgICBzdWJzY3JpYmVyLm5leHQoe1xuICAgICAgICBkYXRhOiBbZGF0YV0sXG4gICAgICAgIGtleTogc3RyZWFtSWQsXG4gICAgICB9KTtcblxuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChwdXNoTmV4dEV2ZW50LCBzcGVlZCk7XG4gICAgfTtcblxuICAgIC8vIFNlbmQgZmlyc3QgZXZlbnQgaW4gNW1zXG4gICAgc2V0VGltZW91dChwdXNoTmV4dEV2ZW50LCA1KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndW5zdWJzY3JpYmluZyB0byBzdHJlYW0gJyArIHN0cmVhbUlkKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuRmV0Y2hTdHJlYW0oXG4gIHRhcmdldDogVGVzdERhdGFRdWVyeSxcbiAgcXVlcnk6IFN0cmVhbWluZ1F1ZXJ5LFxuICByZXE6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT5cbik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGNvbnN0IHN0cmVhbUlkID0gYGZldGNoLSR7cmVxLnBhbmVsSWR9LSR7dGFyZ2V0LnJlZklkfWA7XG4gICAgY29uc3QgbWF4RGF0YVBvaW50cyA9IHJlcS5tYXhEYXRhUG9pbnRzIHx8IDEwMDA7XG5cbiAgICBsZXQgZGF0YSA9IG5ldyBDaXJjdWxhckRhdGFGcmFtZSh7XG4gICAgICBhcHBlbmQ6ICd0YWlsJyxcbiAgICAgIGNhcGFjaXR5OiBtYXhEYXRhUG9pbnRzLFxuICAgIH0pO1xuICAgIGRhdGEucmVmSWQgPSB0YXJnZXQucmVmSWQ7XG4gICAgZGF0YS5uYW1lID0gdGFyZ2V0LmFsaWFzIHx8ICdGZXRjaCAnICsgdGFyZ2V0LnJlZklkO1xuXG4gICAgbGV0IHJlYWRlcjogUmVhZGFibGVTdHJlYW1SZWFkZXI8VWludDhBcnJheT47XG4gICAgY29uc3QgY3N2ID0gbmV3IENTVlJlYWRlcih7XG4gICAgICBjYWxsYmFjazoge1xuICAgICAgICBvbkhlYWRlcjogKGZpZWxkczogRmllbGRbXSkgPT4ge1xuICAgICAgICAgIC8vIENsZWFyIGFueSBleGlzdGluZyBmaWVsZHNcbiAgICAgICAgICBpZiAoZGF0YS5maWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IENpcmN1bGFyRGF0YUZyYW1lKHtcbiAgICAgICAgICAgICAgYXBwZW5kOiAndGFpbCcsXG4gICAgICAgICAgICAgIGNhcGFjaXR5OiBtYXhEYXRhUG9pbnRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRhLnJlZklkID0gdGFyZ2V0LnJlZklkO1xuICAgICAgICAgICAgZGF0YS5uYW1lID0gJ0ZldGNoICcgKyB0YXJnZXQucmVmSWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICAgICAgICBkYXRhLmFkZEZpZWxkKGZpZWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uUm93OiAocm93OiBhbnlbXSkgPT4ge1xuICAgICAgICAgIGRhdGEuYWRkKHJvdyk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvY2Vzc0NodW5rID0gKHZhbHVlOiBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkUmVzdWx0PFVpbnQ4QXJyYXk+KTogYW55ID0+IHtcbiAgICAgIGlmICh2YWx1ZS52YWx1ZSkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHZhbHVlLnZhbHVlKTtcbiAgICAgICAgY3N2LnJlYWRDU1YodGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHN1YnNjcmliZXIubmV4dCh7XG4gICAgICAgIGRhdGE6IFtkYXRhXSxcbiAgICAgICAga2V5OiBzdHJlYW1JZCxcbiAgICAgICAgc3RhdGU6IHZhbHVlLmRvbmUgPyBMb2FkaW5nU3RhdGUuRG9uZSA6IExvYWRpbmdTdGF0ZS5TdHJlYW1pbmcsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbHVlLmRvbmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbmlzaGVkIHN0cmVhbScpO1xuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IC8vIG5lY2Vzc2FyeT9cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVhZGVyLnJlYWQoKS50aGVuKHByb2Nlc3NDaHVuayk7XG4gICAgfTtcblxuICAgIGlmICghcXVlcnkudXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3F1ZXJ5LnVybCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGZldGNoKG5ldyBSZXF1ZXN0KHF1ZXJ5LnVybCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UuYm9keSkge1xuICAgICAgICByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZCgpLnRoZW4ocHJvY2Vzc0NodW5rKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBDYW5jZWwgZmV0Y2g/XG4gICAgICBjb25zb2xlLmxvZygndW5zdWJzY3JpYmluZyB0byBzdHJlYW0gJyArIHN0cmVhbUlkKTtcbiAgICB9O1xuICB9KTtcbn1cbiIsImltcG9ydCB7IEZpZWxkQ29sb3JNb2RlSWQsIEZpZWxkVHlwZSwgUHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGUsIE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IG5vZGVzID0ge1xuICBmaWVsZHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmlkLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJhY2VzL0FsbCcsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6ICdnZXRUcmFjZVN1bW1hcmllcycsXG4gICAgICAgICAgICAgICAgcXVlcnk6ICdzZXJ2aWNlKGlkKG5hbWU6IFwiJHtfX2RhdGEuZmllbGRzLm5hbWV9XCIsIHR5cGU6IFwiJHtfX2RhdGEuZmllbGRzLnR5cGV9XCIpKScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6ICdBeDRlcnhIR3onLFxuICAgICAgICAgICAgICBkYXRhc291cmNlTmFtZTogJ1RyYWNlIGRhdGEgc291cmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RyYWNlcy9PSycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6ICdnZXRUcmFjZVN1bW1hcmllcycsXG4gICAgICAgICAgICAgICAgcXVlcnk6ICdzZXJ2aWNlKGlkKG5hbWU6IFwiJHtfX2RhdGEuZmllbGRzLm5hbWV9XCIsIHR5cGU6IFwiJHtfX2RhdGEuZmllbGRzLnR5cGV9XCIpKSB7IG9rID0gdHJ1ZSB9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogJ0F4NGVyeEhHeicsXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiAnVHJhY2UgZGF0YSBzb3VyY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJhY2VzL0Vycm9ycycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6ICdnZXRUcmFjZVN1bW1hcmllcycsXG4gICAgICAgICAgICAgICAgcXVlcnk6ICdzZXJ2aWNlKGlkKG5hbWU6IFwiJHtfX2RhdGEuZmllbGRzLm5hbWV9XCIsIHR5cGU6IFwiJHtfX2RhdGEuZmllbGRzLnR5cGV9XCIpKSB7IGVycm9yID0gdHJ1ZSB9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogJ0F4NGVyeEhHeicsXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiAnVHJhY2UgZGF0YSBzb3VyY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJhY2VzL0ZhdWx0cycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6ICdnZXRUcmFjZVN1bW1hcmllcycsXG4gICAgICAgICAgICAgICAgcXVlcnk6ICdzZXJ2aWNlKGlkKG5hbWU6IFwiJHtfX2RhdGEuZmllbGRzLm5hbWV9XCIsIHR5cGU6IFwiJHtfX2RhdGEuZmllbGRzLnR5cGV9XCIpKSB7IGZhdWx0ID0gdHJ1ZSB9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogJ0F4NGVyeEhHeicsXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiAnVHJhY2UgZGF0YSBzb3VyY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHZhbHVlczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnRpdGxlLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ05hbWUnIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgJ2F1dGgnLFxuICAgICAgICAncHJvZHVjdHMnLFxuICAgICAgICAnY3VzdG9tZXJzJyxcbiAgICAgICAgJ29yZGVycycsXG4gICAgICAgICdwcm9kdWN0cycsXG4gICAgICAgICdvcmRlcnMnLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ3NoaXBwaW5nJyxcbiAgICAgICAgJ29yZGVycycsXG4gICAgICAgICdleGVjdXRlLWFwaScsXG4gICAgICAgICdzaGlwcGluZycsXG4gICAgICAgICd3d3cnLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ3d3dycsXG4gICAgICAgICdwcm9kdWN0cycsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5zdWJUaXRsZSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdUeXBlJyB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgICdDb21wdXRlJyxcbiAgICAgICAgJ1NRTCcsXG4gICAgICAgICdTUUwnLFxuICAgICAgICAnU1FMJyxcbiAgICAgICAgJ3JlbW90ZScsXG4gICAgICAgICdGdW5jdGlvbicsXG4gICAgICAgICdDb21wdXRlJyxcbiAgICAgICAgJ0Z1bmN0aW9uJyxcbiAgICAgICAgJ0Z1bmN0aW9uJyxcbiAgICAgICAgJ3JlbW90ZScsXG4gICAgICAgICdGdW5jdGlvbicsXG4gICAgICAgICdDb21wdXRlJyxcbiAgICAgICAgJ2NsaWVudCcsXG4gICAgICAgICdjbGllbnQnLFxuICAgICAgICAnQ29tcHV0ZScsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5tYWluU3RhdCxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgdW5pdDogJ21zL3QnLCBkaXNwbGF5TmFtZTogJ0F2ZXJhZ2UgcmVzcG9uc2UgdGltZScgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAzLjUzOTQwNDI2NDY3MzU1NTMsIDE1LjkwNjQ0MTMxODIyMzI2NCwgNC45MTMwMTE5MjE1OTE1NjcsIDcuNDE2MzIwMzA0MjA5NDA5NSwgMTA5MiwgMjIuODU5NjE0NDE0MDUwNjcsXG4gICAgICAgIDU2LjEzNTg1NTcyOTA4NDY5NiwgNC40NTk0NjE5MTYwMTUyNywgMTIuODE4MzAwMjc4MjgwODQzLCA0LjI1LCAxMi41NjU0NDI2NDY3OTE0OTIsIDc3LjYzNDQ3NTEyNzAwNTY3LFxuICAgICAgICA0MC4zODcwOTY3NzQxOTM1NDQsIDc3LjYzNDQ3NTEyNzAwNTY3LCAyNy42NDg5NTAxODczNzQ4NzIsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5zZWNvbmRhcnlTdGF0LFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyB1bml0OiAndC9taW4nLCBkaXNwbGF5TmFtZTogJ1RyYW5zYWN0aW9ucyBwZXIgbWludXRlJyB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgIDUwLjU2MzE3MTU0NTAxNjY3LCA2ODIuNCwgNTEyLjg0MTY2NjY2NjY2NjcsIDEyNS42NDQ0NDQ0NDQ0NDQ0NSwgMC4wMDU1ODU4MTIwMzc0MjQ5NDEsIDEzNy41OTcyMjIyMjIyMjIyMyxcbiAgICAgICAgMzAwLjA1Mjc3Nzc3Nzc3NzgsIDMwLjU4MjM0ODg1MzM3MDM5NCwgMTI1Ljc3MjIyMjIyMjIyMjIzLCAwLjAyODcwNjQxNzA4MDMxODE2MywgMzAuNTgyMzQ4ODUzMzcwMzk0LCAxNjUuNjc1LFxuICAgICAgICAwLjEwMDAyMTUxMDAwMjE1MSwgMTY1LjY3NSwgMTYyLjMzMDU1NTU1NTU1NTU1LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuYXJjICsgJ3N1Y2Nlc3MnLFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLkZpeGVkLCBmaXhlZENvbG9yOiAnZ3JlZW4nIH0sIGRpc3BsYXlOYW1lOiAnU3VjZXNzcycgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAwLjkzMzg4NjU2ODQ3NjU4ODIsIDEsIDEsIDEsIDAuNSwgMSwgMC45OTAxMTI4NTA1MTcwMzg3LCAwLjkwNjkyNjAxMzQ1MjA5OTcsIDEsIDAsIDAuOTA2OTI2MDEzNDUyMDk5NyxcbiAgICAgICAgMC45NjI0NDMyMDM3Mjg4NTM0LCAwLCAwLjk2MjQ0MzIwMzcyODg1MzQsIDAuOTgyNDk0NTY2OTg0Mzc2OSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmFyYyArICdmYXVsdHMnLFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLkZpeGVkLCBmaXhlZENvbG9yOiAncmVkJyB9LCBkaXNwbGF5TmFtZTogJ0ZhdWx0cycgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAwLCAwLCAwLCAwLCAwLjUsIDAsIDAuMDA5NDc5ODEzNzM2NDcyMjg4LCAwLCAwLCAwLCAwLCAwLjAxNzE2ODgyMTE1MjUyNDE4NSwgMCwgMC4wMTcxNjg4MjExNTI1MjQxODUsXG4gICAgICAgIDAuMDE3NTA1NDMzMDE1NjIzMTMsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5hcmMgKyAnZXJyb3JzJyxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgY29sb3I6IHsgbW9kZTogRmllbGRDb2xvck1vZGVJZC5GaXhlZCwgZml4ZWRDb2xvcjogJ3NlbWktZGFyay15ZWxsb3cnIH0sIGRpc3BsYXlOYW1lOiAnRXJyb3JzJyB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgIDAuMDY2MTEzNDMxNTIzNDExNzQsIDAsIDAsIDAsIDAsIDAsIDAuMDAwNDA3MzM1NzQ2NDg5MDQzNiwgMC4wOTMwNzM5ODY1NDc5MDAzOCwgMCwgMSwgMC4wOTMwNzM5ODY1NDc5MDAzOCxcbiAgICAgICAgMC4wMjAzODc5NzUxMTg2MjI0NywgMSwgMC4wMjAzODc5NzUxMTg2MjI0NywgMCxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmFyYyArICd0aHJvdHRsZWQnLFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLkZpeGVkLCBmaXhlZENvbG9yOiAncHVycGxlJyB9LCBkaXNwbGF5TmFtZTogJ1Rocm90dGxlZCcgfSxcbiAgICAgIHZhbHVlczogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIH0sXG4gIF0sXG4gIG1ldGE6IHsgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnIGFzIFByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlIH0sXG4gIG5hbWU6ICdub2RlcycsXG59O1xuXG5leHBvcnQgY29uc3QgZWRnZXMgPSB7XG4gIGZpZWxkczogW1xuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuaWQsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUcmFjZXMvQWxsJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogJ2dldFRyYWNlU3VtbWFyaWVzJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogJ2VkZ2UoXCIke19fZGF0YS5maWVsZHMuc291cmNlTmFtZX1cIiwgXCIke19fZGF0YS5maWVsZHMudGFyZ2V0TmFtZX1cIiknLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiAnQXg0ZXJ4SEd6JyxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWU6ICdUcmFjZSBkYXRhIHNvdXJjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUcmFjZXMvT0snLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGludGVybmFsOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAnZ2V0VHJhY2VTdW1tYXJpZXMnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiAnZWRnZShcIiR7X19kYXRhLmZpZWxkcy5zb3VyY2VOYW1lfVwiLCBcIiR7X19kYXRhLmZpZWxkcy50YXJnZXROYW1lfVwiKSB7IG9rID0gdHJ1ZSB9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogJ0F4NGVyeEhHeicsXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiAnVHJhY2UgZGF0YSBzb3VyY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJhY2VzL0Vycm9ycycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6ICdnZXRUcmFjZVN1bW1hcmllcycsXG4gICAgICAgICAgICAgICAgcXVlcnk6ICdlZGdlKFwiJHtfX2RhdGEuZmllbGRzLnNvdXJjZU5hbWV9XCIsIFwiJHtfX2RhdGEuZmllbGRzLnRhcmdldE5hbWV9XCIpIHsgZXJyb3IgPSB0cnVlIH0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiAnQXg0ZXJ4SEd6JyxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWU6ICdUcmFjZSBkYXRhIHNvdXJjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUcmFjZXMvRmF1bHRzJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogJ2dldFRyYWNlU3VtbWFyaWVzJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogJ2VkZ2UoXCIke19fZGF0YS5maWVsZHMuc291cmNlTmFtZX1cIiwgXCIke19fZGF0YS5maWVsZHMudGFyZ2V0TmFtZX1cIikgeyBmYXVsdCA9IHRydWUgfScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6ICdBeDRlcnhIR3onLFxuICAgICAgICAgICAgICBkYXRhc291cmNlTmFtZTogJ1RyYWNlIGRhdGEgc291cmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgJzBfXzInLFxuICAgICAgICAnNV9fOCcsXG4gICAgICAgICc2X18wJyxcbiAgICAgICAgJzZfXzUnLFxuICAgICAgICAnNl9fOScsXG4gICAgICAgICc2X18yJyxcbiAgICAgICAgJzZfXzE0JyxcbiAgICAgICAgJzZfXzQnLFxuICAgICAgICAnOF9fMycsXG4gICAgICAgICcxMF9fNycsXG4gICAgICAgICcxMV9fMCcsXG4gICAgICAgICcxMV9fNicsXG4gICAgICAgICcxMl9fNicsXG4gICAgICAgICcxM19fMTEnLFxuICAgICAgICAnMTRfXzEnLFxuICAgICAgICAnMTRfXzInLFxuICAgICAgICAnMTRfXzEwJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnNvdXJjZSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICBjb25maWc6IHt9LFxuICAgICAgdmFsdWVzOiBbMCwgNSwgNiwgNiwgNiwgNiwgNiwgNiwgOCwgMTAsIDExLCAxMSwgMTIsIDEzLCAxNCwgMTQsIDE0XSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzb3VyY2VOYW1lJyxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICBjb25maWc6IHt9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgICdhdXRoJyxcbiAgICAgICAgJ29yZGVycycsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICdvcmRlcnMnLFxuICAgICAgICAnc2hpcHBpbmcnLFxuICAgICAgICAnd3d3JyxcbiAgICAgICAgJ3d3dycsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnd3d3JyxcbiAgICAgICAgJ3Byb2R1Y3RzJyxcbiAgICAgICAgJ3Byb2R1Y3RzJyxcbiAgICAgICAgJ3Byb2R1Y3RzJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnRhcmdldCxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICBjb25maWc6IHt9LFxuICAgICAgdmFsdWVzOiBbMiwgOCwgMCwgNSwgOSwgMiwgMTQsIDQsIDMsIDcsIDAsIDYsIDYsIDExLCAxLCAyLCAxMF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndGFyZ2V0TmFtZScsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgICAgY29uZmlnOiB7fSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAnY3VzdG9tZXJzJyxcbiAgICAgICAgJ29yZGVycycsXG4gICAgICAgICdhdXRoJyxcbiAgICAgICAgJ29yZGVycycsXG4gICAgICAgICdleGVjdXRlLWFwaScsXG4gICAgICAgICdjdXN0b21lcnMnLFxuICAgICAgICAncHJvZHVjdHMnLFxuICAgICAgICAncHJvZHVjdHMnLFxuICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgJ3NoaXBwaW5nJyxcbiAgICAgICAgJ2F1dGgnLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICd3d3cnLFxuICAgICAgICAncHJvZHVjdHMnLFxuICAgICAgICAnY3VzdG9tZXJzJyxcbiAgICAgICAgJ3NoaXBwaW5nJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLm1haW5TdGF0LFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ1Jlc3BvbnNlIHBlcmNlbnRhZ2UnIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgJ1N1Y2Nlc3MgMTAwLjAwJScsXG4gICAgICAgICdTdWNjZXNzIDEwMC4wMCUnLFxuICAgICAgICAnU3VjY2VzcyAxMDAuMDAlJyxcbiAgICAgICAgJ1N1Y2Nlc3MgMTAwLjAwJScsXG4gICAgICAgICdFcnJvcnMgMTAwLjAwJScsXG4gICAgICAgICdTdWNjZXNzIDEwMC4wMCUnLFxuICAgICAgICAnRmF1bHRzIDEuNzUlJyxcbiAgICAgICAgJ0ZhdWx0cyA1MC4wMCUnLFxuICAgICAgICAnU3VjY2VzcyAxMDAuMDAlJyxcbiAgICAgICAgJ0Vycm9ycyA5LjMxJScsXG4gICAgICAgICdFcnJvcnMgNi42MiUnLFxuICAgICAgICAnRmF1bHRzIDEuMTMlJyxcbiAgICAgICAgJ0Vycm9ycyAxMDAuMDAlJyxcbiAgICAgICAgJ0ZhdWx0cyAxLjcyJScsXG4gICAgICAgICdTdWNjZXNzIDEwMC4wMCUnLFxuICAgICAgICAnU3VjY2VzcyAxMDAuMDAlJyxcbiAgICAgICAgJ0ZhdWx0cyA5LjMwJScsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5zZWNvbmRhcnlTdGF0LFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyB1bml0OiAndC9taW4nLCBkaXNwbGF5TmFtZTogJ1RyYW5zYWN0aW9ucyBwZXIgbWludXRlJyB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgIDUwLjU2MzE3MTU0NTAxNjY3LCAxMjUuNzcyMjIyMjIyMjIyMjMsIDAuMDMzMzMzMzMzMzMzMzMzMzMsIDEzNy41OTcyMjIyMjIyMjIyMywgMC4wMjIyMjIyMjIyMjIyMjIyMjMsXG4gICAgICAgIDI5OS45NjY2NjY2NjY2NjY2NCwgMTYyLjMzMDU1NTU1NTU1NTU1LCAwLjAwNTU1NTU1NTU1NTU1NTU1NiwgMTI1LjY0NDQ0NDQ0NDQ0NDQ1LCAzMC41ODIzNDg4NTMzNzAzOTQsXG4gICAgICAgIDUwLjUxMTExMTExMTExMTExLCAyOTkuOTE2NjY2NjY2NjY2NywgMC4xMDAwMjE1MTAwMDIxNTEsIDE2NS42NzUsIDY4Mi40LCAxNjIuMzMwNTU1NTU1NTU1NTUsIDMwLjU1ODMzMzMzMzMzMzMzNCxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgbWV0YTogeyBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ25vZGVHcmFwaCcgYXMgUHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGUgfSxcbiAgbmFtZTogJ2VkZ2VzJyxcbn07XG4iLCJpbXBvcnQgeyBTdGFuZGFyZFZhcmlhYmxlUXVlcnksIFN0YW5kYXJkVmFyaWFibGVTdXBwb3J0IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IFRlc3REYXRhRGF0YVNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBUZXN0RGF0YVF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0RGF0YVZhcmlhYmxlU3VwcG9ydCBleHRlbmRzIFN0YW5kYXJkVmFyaWFibGVTdXBwb3J0PFRlc3REYXRhRGF0YVNvdXJjZT4ge1xuICB0b0RhdGFRdWVyeShxdWVyeTogU3RhbmRhcmRWYXJpYWJsZVF1ZXJ5KTogVGVzdERhdGFRdWVyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZklkOiAnVGVzdERhdGFEYXRhU291cmNlLVF1ZXJ5VmFyaWFibGUnLFxuICAgICAgc3RyaW5nSW5wdXQ6IHF1ZXJ5LnF1ZXJ5LFxuICAgICAgc2NlbmFyaW9JZDogJ3ZhcmlhYmxlcy1xdWVyeScsXG4gICAgICBjc3ZXYXZlOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkNvbmZpZ0VkaXRvciIsInJlbmRlciIsIkxvZ0xldmVsIiwiaW5kZXgiLCJnZXRSYW5kb21Mb2dMZXZlbCIsInYiLCJNYXRoIiwicmFuZG9tIiwiY3JpdGljYWwiLCJlcnJvciIsIndhcm5pbmciLCJpbmZvIiwiZGVidWciLCJ0cmFjZSIsInVua25vd24iLCJnZXROZXh0V29yZCIsImZsb29yIiwid29yZHMiLCJsZW5ndGgiLCJnZXRSYW5kb21MaW5lIiwibGluZSIsInVzZU1lbW8iLCJ1c2VBc3luYyIsInNlbGVjdG9ycyIsImVkaXRvclNlbGVjdG9ycyIsIklubGluZUZpZWxkIiwiSW5saW5lRmllbGRSb3ciLCJJbmxpbmVTd2l0Y2giLCJJbnB1dCIsIlNlbGVjdCIsIlRleHRBcmVhIiwiUmFuZG9tV2Fsa0VkaXRvciIsIlN0cmVhbWluZ0NsaWVudEVkaXRvciIsIlByZWRpY3RhYmxlUHVsc2VFZGl0b3IiLCJDU1ZXYXZlc0VkaXRvciIsImRlZmF1bHRDU1ZXYXZlUXVlcnkiLCJkZWZhdWx0UHVsc2VRdWVyeSIsImRlZmF1bHRRdWVyeSIsIkdyYWZhbmFMaXZlRWRpdG9yIiwiTm9kZUdyYXBoRWRpdG9yIiwiUmF3RnJhbWVFZGl0b3IiLCJkZWZhdWx0U3RyZWFtUXVlcnkiLCJDU1ZGaWxlRWRpdG9yIiwiQ1NWQ29udGVudEVkaXRvciIsIlVTQVF1ZXJ5RWRpdG9yIiwidXNhUXVlcnlNb2RlcyIsIkVycm9yRWRpdG9yIiwic2hvd0xhYmVsc0ZvciIsImVuZHBvaW50cyIsInZhbHVlIiwibGFiZWwiLCJjb21wb25lbnRzIiwiRGF0YVNvdXJjZSIsIlRlc3REYXRhIiwiUXVlcnlUYWIiLCJRdWVyeUVkaXRvciIsInF1ZXJ5IiwiZGF0YXNvdXJjZSIsIm9uQ2hhbmdlIiwib25SdW5RdWVyeSIsImxvYWRpbmciLCJzY2VuYXJpb0xpc3QiLCJzY2VuYXJpb0lkIiwicG9pbnRzIiwiY3N2Q29udGVudCIsInBvaW50IiwicmVmSWQiLCJnZXRTY2VuYXJpb3MiLCJvblVwZGF0ZSIsImN1cnJlbnRTY2VuYXJpbyIsImZpbmQiLCJzY2VuYXJpbyIsImlkIiwiZGVzY3JpcHRpb24iLCJvblNjZW5hcmlvQ2hhbmdlIiwiaXRlbSIsInNjIiwidXBkYXRlIiwiYWxpYXMiLCJzdHJpbmdJbnB1dCIsInN0cmVhbSIsImNoYW5uZWwiLCJwdWxzZVdhdmUiLCJjc3ZXYXZlIiwidXNhIiwibW9kZSIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInR5cGUiLCJ0YXJnZXQiLCJuZXdWYWx1ZSIsIk51bWJlciIsImNoZWNrZWQiLCJvbkZpZWxkQ2hhbmdlIiwiZmllbGQiLCJvbkVuZFBvaW50Q2hhbmdlIiwib25TdHJlYW1DbGllbnRDaGFuZ2UiLCJvblB1bHNlV2F2ZUNoYW5nZSIsIm9uVVNBU3RhdHNDaGFuZ2UiLCJvbkNTVldhdmVDaGFuZ2UiLCJvcHRpb25zIiwibWFwIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInNob3dMYWJlbHMiLCJpbmNsdWRlcyIsInNjZW5hcmlvU2VsZWN0Q29udGFpbmVyIiwibGFiZWxzIiwibGluZXMiLCJsZXZlbENvbHVtbiIsImVwIiwidmFsIiwibm9kZXMiLCJMaW5rQnV0dG9uIiwiVGVzdEluZm9UYWIiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiQ29kZUVkaXRvciIsIm9uU2F2ZUNTViIsIm9uQ2hhbmdlRmlsZU5hbWUiLCJjc3ZGaWxlTmFtZSIsImZpbGVzIiwiZiIsIkJ1dHRvbiIsIkNTVldhdmVFZGl0b3IiLCJ3YXZlIiwidGltZVN0ZXAiLCJ2YWx1ZUFzTnVtYmVyIiwibGFzdCIsImFjdGlvbiIsIm9uQWRkIiwidW5kZWZpbmVkIiwidmFsdWVzQ1NWIiwib25DU1ZDaGFuZ2UiLCJvblRpbWVTdGVwQ2hhbmdlIiwib25MYWJlbHNDaGFuZ2UiLCJvbk5hbWVDaGFuZ2UiLCJ3YXZlcyIsInNwbGljZSIsInB1c2giLCJFUlJPUl9PUFRJT05TIiwiRnJvbnRlbmRFcnJvclF1ZXJ5RWRpdG9yIiwiZXJyb3JUeXBlIiwibGl2ZVRlc3REYXRhQ2hhbm5lbHMiLCJvbkNoYW5uZWxDaGFuZ2UiLCJvIiwiY291bnQiLCJjdXJyZW50VGFyZ2V0IiwicGFyc2VJbnQiLCJmaWVsZHMiLCJwbGFjZWhvbGRlciIsInRvb2x0aXAiLCJyYW5kb21XYWxrRmllbGRzIiwibWluIiwic3RlcCIsIm1heCIsInRlc3RTZWxlY3RvcnMiLCJzZWxlY3RvciIsInVzZVN0YXRlIiwiQWxlcnQiLCJpc0FycmF5IiwidG9EYXRhUXVlcnlSZXNwb25zZSIsImRhdGFGcmFtZVRvSlNPTiIsInRvRGF0YUZyYW1lIiwidG9EYXRhRnJhbWVEVE8iLCJzZXRFcnJvciIsInNldFdhcm5pbmciLCJvblNhdmVGcmFtZXMiLCJyYXdGcmFtZUNvbnRlbnQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInNlcmllcyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInN0cmluZ2lmeSIsInN0cmVhbWluZ0NsaWVudEZpZWxkcyIsInR5cGVzIiwib25TZWxlY3RDaGFuZ2UiLCJ1cmwiLCJNdWx0aVNlbGVjdCIsInBlcmlvZCIsImZpZWxkTmFtZXMiLCJ2YWxzIiwic3RhdGVOYW1lcyIsInN0YXRlcyIsIm9uQ291bnQiLCJvblZhbHVlIiwib2ZmQ291bnQiLCJvZmZWYWx1ZSIsImZyb20iLCJtZXJnZSIsIm9mIiwidGhyb3dFcnJvciIsImRlbGF5IiwiQXJyYXlEYXRhRnJhbWUiLCJEYXRhVG9waWMiLCJMaXZlQ2hhbm5lbFNjb3BlIiwiTG9hZGluZ1N0YXRlIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwiZ2V0QmFja2VuZFNydiIsImdldEdyYWZhbmFMaXZlU3J2IiwiZ2V0VGVtcGxhdGVTcnYiLCJxdWVyeU1ldHJpY1RyZWUiLCJydW5TdHJlYW0iLCJnZXRTZWFyY2hGaWx0ZXJTY29wZWRWYXIiLCJUZXN0RGF0YVZhcmlhYmxlU3VwcG9ydCIsImdlbmVyYXRlUmFuZG9tTm9kZXMiLCJzYXZlZE5vZGVzUmVzcG9uc2UiLCJUZXN0RGF0YURhdGFTb3VyY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwidGVtcGxhdGVTcnYiLCJ2YXJpYWJsZXMiLCJiYWNrZW5kUXVlcmllcyIsInN0cmVhbXMiLCJ0YXJnZXRzIiwiaGlkZSIsInJlc29sdmVUZW1wbGF0ZVZhcmlhYmxlcyIsInNjb3BlZFZhcnMiLCJydW5HcmFmYW5hTGl2ZVF1ZXJ5IiwicnVuR3JhZmFuYUFQSSIsImFubm90YXRpb25EYXRhVG9waWNUZXN0IiwidmFyaWFibGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicmF3RnJhbWVRdWVyeSIsInNlcnZlckVycm9yUXVlcnkiLCJiYWNrZW5kT3B0cyIsInJlcGxhY2UiLCJyZXEiLCJldmVudHMiLCJidWlsZEZha2VBbm5vdGF0aW9uRXZlbnRzIiwicmFuZ2UiLCJkYXRhRnJhbWUiLCJtZXRhIiwiZGF0YVRvcGljIiwiQW5ub3RhdGlvbnMiLCJrZXkiLCJwaXBlIiwidGltZVdhbGtlciIsInZhbHVlT2YiLCJ0byIsImkiLCJ0aW1lIiwidGV4dCIsInRhZ3MiLCJhbm5vdGF0aW9uUXVlcnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdldFF1ZXJ5RGlzcGxheVRleHQiLCJ0ZXN0RGF0YXNvdXJjZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJzY2VuYXJpb3NDYWNoZSIsImdldFJlc291cmNlIiwiaW50ZXJwb2xhdGVkUXVlcnkiLCJ3aWxkY2FyZENoYXIiLCJjaGlsZHJlbiIsIml0ZW1zIiwiZnJhbWVzIiwiRXJyb3IiLCJEb25lIiwiZXgiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZnJhbWUiLCJsaXZlUXVlcnlDb3VudGVyIiwiZ2V0RGF0YVN0cmVhbSIsImFkZHIiLCJzY29wZSIsIlBsdWdpbiIsIm5hbWVzcGFjZSIsInBhdGgiLCJidWlsZE1ldHJpY1RyZWUiLCJwYXJlbnQiLCJkZXB0aCIsImNoYXJzIiwibGV0dGVyIiwibm9kZU5hbWUiLCJxdWVyeVRyZWUiLCJxdWVyeUluZGV4Iiwibm9kZVF1ZXJ5IiwicmVzdWx0IiwibmFtZXNUb01hdGNoIiwic3RhcnRzV2l0aCIsInNwbGl0Iiwibm9kZSIsIm5hbWVUb01hdGNoIiwiaW5kZXhPZiIsInBhdHRlcm4iLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJjb25jYXQiLCJEYXRhU291cmNlUGx1Z2luIiwiVGVzdERhdGFBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsInBsdWdpbiIsInNldENvbmZpZ0VkaXRvciIsInNldFF1ZXJ5RWRpdG9yIiwic2V0QW5ub3RhdGlvblF1ZXJ5Q3RybCIsImFkZENvbmZpZ1BhZ2UiLCJ0aXRsZSIsImljb24iLCJib2R5IiwiQXJyYXlWZWN0b3IiLCJGaWVsZENvbG9yTW9kZUlkIiwiRmllbGRUeXBlIiwiTXV0YWJsZURhdGFGcmFtZSIsIk5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMiLCJlZGdlcyIsInJvb3QiLCJzdWJUaXRsZSIsInN1Y2Nlc3MiLCJzdGF0MSIsInN0YXQyIiwibm9kZXNXaXRob3V0TWF4RWRnZXMiLCJtYXhFZGdlcyIsIm1ha2VSYW5kb21Ob2RlIiwic291cmNlSW5kZXgiLCJzb3VyY2UiLCJhZGRpdGlvbmFsRWRnZXMiLCJ0YXJnZXRJbmRleCIsIm5vZGVGaWVsZHMiLCJ2YWx1ZXMiLCJzdHJpbmciLCJtYWluU3RhdCIsIm51bWJlciIsImNvbmZpZyIsImRpc3BsYXlOYW1lIiwic2Vjb25kYXJ5U3RhdCIsImFyYyIsImNvbG9yIiwiZml4ZWRDb2xvciIsIkZpeGVkIiwibm9kZUZyYW1lIiwiT2JqZWN0Iiwia2V5cyIsInByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlIiwiZWRnZUZpZWxkcyIsImVkZ2VzRnJhbWUiLCJlZGdlc1NldCIsIlNldCIsImFkZCIsImFyY19fc3VjY2VzcyIsImFyY19fZXJyb3JzIiwiZWRnZSIsImhhcyIsInRvU3RyaW5nIiwiZGVmYXVsdHMiLCJPYnNlcnZhYmxlIiwiQ2lyY3VsYXJEYXRhRnJhbWUiLCJDU1ZSZWFkZXIiLCJsaXZlVGltZXIiLCJTdHJlYW1pbmdEYXRhRnJhbWUiLCJzcGVlZCIsInNwcmVhZCIsIm5vaXNlIiwiYmFuZHMiLCJydW5TaWduYWxTdHJlYW0iLCJydW5Mb2dzU3RyZWFtIiwicnVuRmV0Y2hTdHJlYW0iLCJzdWJzY3JpYmVyIiwic3RyZWFtSWQiLCJwYW5lbElkIiwibWF4RGF0YVBvaW50cyIsInNjaGVtYSIsInN1ZmZpeCIsImZyb21EYXRhRnJhbWVKU09OIiwibWF4TGVuZ3RoIiwidGltZW91dElkIiwibGFzdFNlbnQiLCJhZGROZXh0Um93IiwiZXZlbnQiLCJEYXRlIiwibm93IiwicHVzaE5leHRFdmVudCIsImVsYXBzZWQiLCJsYXN0VXBkYXRlIiwib2siLCJuZXh0IiwiU3RyZWFtaW5nIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImFwcGVuZCIsImNhcGFjaXR5IiwiYWRkRmllbGQiLCJyZWFkZXIiLCJjc3YiLCJjYWxsYmFjayIsIm9uSGVhZGVyIiwib25Sb3ciLCJyb3ciLCJwcm9jZXNzQ2h1bmsiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInJlYWRDU1YiLCJkb25lIiwiY29tcGxldGUiLCJyZWFkIiwiZmV0Y2giLCJSZXF1ZXN0IiwicmVzcG9uc2UiLCJnZXRSZWFkZXIiLCJsaW5rcyIsImludGVybmFsIiwicXVlcnlUeXBlIiwiZGF0YXNvdXJjZVVpZCIsImRhdGFzb3VyY2VOYW1lIiwidW5pdCIsIlN0YW5kYXJkVmFyaWFibGVTdXBwb3J0IiwidG9EYXRhUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9
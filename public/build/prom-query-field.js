"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["prom-query-field"],{

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLatest.js");
/* harmony import */ var monaco_promql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _monaco_completion_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/index.ts");
/* harmony import */ var _getOverrideServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/getOverrideServices.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const options = {
  codeLens: false,
  contextmenu: false,
  // we need `fixedOverflowWidgets` because otherwise in grafana-dashboards
  // the popup is clipped by the panel-visualizations.
  fixedOverflowWidgets: true,
  folding: false,
  fontSize: 14,
  lineDecorationsWidth: 8,
  // used as "padding-left"
  lineNumbers: 'off',
  minimap: {
    enabled: false
  },
  overviewRulerBorder: false,
  overviewRulerLanes: 0,
  padding: {
    // these numbers were picked so that visually this matches the previous version
    // of the query-editor the best
    top: 4,
    bottom: 5
  },
  renderLineHighlight: 'none',
  scrollbar: {
    vertical: 'hidden',
    verticalScrollbarSize: 8,
    // used as "padding-right"
    horizontal: 'hidden',
    horizontalScrollbarSize: 0
  },
  scrollBeyondLastLine: false,
  suggest: (0,_monaco_completion_provider__WEBPACK_IMPORTED_MODULE_5__.getSuggestOptions)(),
  suggestFontSize: 12,
  wordWrap: 'on'
}; // this number was chosen by testing various values. it might be necessary
// because of the width of the border, not sure.
//it needs to do 2 things:
// 1. when the editor is single-line, it should make the editor height be visually correct
// 2. when the editor is multi-line, the editor should not be "scrollable" (meaning,
//    you do a scroll-movement in the editor, and it will scroll the content by a couple pixels
//    up & down. this we want to avoid)

const EDITOR_HEIGHT_OFFSET = 2;
const PROMQL_LANG_ID = monaco_promql__WEBPACK_IMPORTED_MODULE_3__.promLanguageDefinition.id; // we must only run the promql-setup code once

let PROMQL_SETUP_STARTED = false;

function ensurePromQL(monaco) {
  if (PROMQL_SETUP_STARTED === false) {
    PROMQL_SETUP_STARTED = true;
    const {
      aliases,
      extensions,
      mimetypes,
      loader
    } = monaco_promql__WEBPACK_IMPORTED_MODULE_3__.promLanguageDefinition;
    monaco.languages.register({
      id: PROMQL_LANG_ID,
      aliases,
      extensions,
      mimetypes
    });
    loader().then(mod => {
      monaco.languages.setMonarchTokensProvider(PROMQL_LANG_ID, mod.language);
      monaco.languages.setLanguageConfiguration(PROMQL_LANG_ID, mod.languageConfiguration);
    });
  }
}

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      border-radius: ${theme.shape.borderRadius()};
      border: 1px solid ${theme.components.input.borderColor};
    `
  };
};

const MonacoQueryField = props => {
  // we need only one instance of `overrideServices` during the lifetime of the react component
  const overrideServicesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_getOverrideServices__WEBPACK_IMPORTED_MODULE_6__.getOverrideServices)());
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    languageProvider,
    history,
    onBlur,
    onRunQuery,
    initialValue
  } = props;
  const lpRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(languageProvider);
  const historyRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(history);
  const onRunQueryRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(onRunQuery);
  const onBlurRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(onBlur);
  const autocompleteDisposeFun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useTheme2)();
  const styles = getStyles(theme);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // when we unmount, we unregister the autocomplete-function, if it was registered
    return () => {
      var _autocompleteDisposeF;

      (_autocompleteDisposeF = autocompleteDisposeFun.current) === null || _autocompleteDisposeF === void 0 ? void 0 : _autocompleteDisposeF.call(autocompleteDisposeFun);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.QueryField.container,
    className: styles.container // NOTE: we will be setting inline-style-width/height on this element
    ,
    ref: containerRef,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ReactMonacoEditor, {
      overrideServices: overrideServicesRef.current,
      options: options,
      language: "promql",
      value: initialValue,
      beforeMount: monaco => {
        ensurePromQL(monaco);
      },
      onMount: (editor, monaco) => {
        // we setup on-blur
        editor.onDidBlurEditorWidget(() => {
          onBlurRef.current(editor.getValue());
        }); // we construct a DataProvider object

        const getSeries = selector => lpRef.current.getSeries(selector);

        const getHistory = () => Promise.resolve(historyRef.current.map(h => h.query.expr).filter(expr => expr !== undefined));

        const getAllMetricNames = () => {
          const {
            metrics,
            metricsMetadata
          } = lpRef.current;
          const result = metrics.map(m => {
            var _metaItem$help, _metaItem$type;

            const metaItem = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata[m];
            return {
              name: m,
              help: (_metaItem$help = metaItem === null || metaItem === void 0 ? void 0 : metaItem.help) !== null && _metaItem$help !== void 0 ? _metaItem$help : '',
              type: (_metaItem$type = metaItem === null || metaItem === void 0 ? void 0 : metaItem.type) !== null && _metaItem$type !== void 0 ? _metaItem$type : ''
            };
          });
          return Promise.resolve(result);
        };

        const getAllLabelNames = () => Promise.resolve(lpRef.current.getLabelKeys());

        const getLabelValues = labelName => lpRef.current.getLabelValues(labelName);

        const dataProvider = {
          getSeries,
          getHistory,
          getAllMetricNames,
          getAllLabelNames,
          getLabelValues
        };
        const completionProvider = (0,_monaco_completion_provider__WEBPACK_IMPORTED_MODULE_5__.getCompletionProvider)(monaco, dataProvider); // completion-providers in monaco are not registered directly to editor-instances,
        // they are registered to languages. this makes it hard for us to have
        // separate completion-providers for every query-field-instance
        // (but we need that, because they might connect to different datasources).
        // the trick we do is, we wrap the callback in a "proxy",
        // and in the proxy, the first thing is, we check if we are called from
        // "our editor instance", and if not, we just return nothing. if yes,
        // we call the completion-provider.

        const filteringCompletionProvider = Object.assign({}, completionProvider, {
          provideCompletionItems: (model, position, context, token) => {
            var _editor$getModel;

            // if the model-id does not match, then this call is from a different editor-instance,
            // not "our instance", so return nothing
            if (((_editor$getModel = editor.getModel()) === null || _editor$getModel === void 0 ? void 0 : _editor$getModel.id) !== model.id) {
              return {
                suggestions: []
              };
            }

            return completionProvider.provideCompletionItems(model, position, context, token);
          }
        });
        const {
          dispose
        } = monaco.languages.registerCompletionItemProvider(PROMQL_LANG_ID, filteringCompletionProvider);
        autocompleteDisposeFun.current = dispose; // this code makes the editor resize itself so that the content fits
        // (it will grow taller when necessary)
        // FIXME: maybe move this functionality into CodeEditor, like:
        // <CodeEditor resizingMode="single-line"/>

        const updateElementHeight = () => {
          const containerDiv = containerRef.current;

          if (containerDiv !== null) {
            const pixelHeight = editor.getContentHeight();
            containerDiv.style.height = `${pixelHeight + EDITOR_HEIGHT_OFFSET}px`;
            containerDiv.style.width = '100%';
            const pixelWidth = containerDiv.clientWidth;
            editor.layout({
              width: pixelWidth,
              height: pixelHeight
            });
          }
        };

        editor.onDidContentSizeChange(updateElementHeight);
        updateElementHeight(); // handle: shift + enter
        // FIXME: maybe move this functionality into CodeEditor?

        editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
          onRunQueryRef.current(editor.getValue());
        });
      }
    })
  });
}; // we will lazy-load this module using React.lazy,
// and that only supports default-exports,
// so we have to default-export this, even if
// it is against the style-guidelines.


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoQueryField);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/getOverrideServices.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOverrideServices": () => (/* binding */ getOverrideServices)
/* harmony export */ });
// this thing here is a workaround in a way.
// what we want to achieve, is that when the autocomplete-window
// opens, the "second, extra popup" with the extra help,
// also opens automatically.
// but there is no API to achieve it.
// the way to do it is to implement the `storageService`
// interface, and provide our custom implementation,
// which will default to `true` for the correct string-key.
// unfortunately, while the typescript-interface exists,
// it is not exported from monaco-editor,
// so we cannot rely on typescript to make sure
// we do it right. all we can do is to manually
// lookup the interface, and make sure we code our code right.
// our code is a "best effort" approach,
// i am not 100% how the `scope` and `target` things work,
// but so far it seems to work ok.
// i would use an another approach, if there was one available.
function makeStorageService() {
  // we need to return an object that fulfills this interface:
  // https://github.com/microsoft/vscode/blob/ff1e16eebb93af79fd6d7af1356c4003a120c563/src/vs/platform/storage/common/storage.ts#L37
  // unfortunately it is not export from monaco-editor
  const strings = new Map(); // we want this to be true by default

  strings.set('expandSuggestionDocs', true.toString());
  return {
    // we do not implement the on* handlers
    onDidChangeValue: data => undefined,
    onDidChangeTarget: data => undefined,
    onWillSaveState: data => undefined,
    get: (key, scope, fallbackValue) => {
      var _strings$get;

      return (_strings$get = strings.get(key)) !== null && _strings$get !== void 0 ? _strings$get : fallbackValue;
    },
    getBoolean: (key, scope, fallbackValue) => {
      const val = strings.get(key);

      if (val !== undefined) {
        // the interface-docs say the value will be converted
        // to a boolean but do not specify how, so we improvise
        return val === 'true';
      } else {
        return fallbackValue;
      }
    },
    getNumber: (key, scope, fallbackValue) => {
      const val = strings.get(key);

      if (val !== undefined) {
        return parseInt(val, 10);
      } else {
        return fallbackValue;
      }
    },
    store: (key, value, scope, target) => {
      // the interface-docs say if the value is nullish, it should act as delete
      if (value === null || value === undefined) {
        strings.delete(key);
      } else {
        strings.set(key, value.toString());
      }
    },
    remove: (key, scope) => {
      strings.delete(key);
    },
    keys: (scope, target) => {
      return Array.from(strings.keys());
    },
    logStorage: () => {
      console.log('logStorage: not implemented');
    },
    migrate: () => {
      // we do not implement this
      return Promise.resolve(undefined);
    },
    isNew: scope => {
      // we create a new storage for every session, we do not persist it,
      // so we return `true`.
      return true;
    },
    flush: reason => {
      // we do not implement this
      return Promise.resolve(undefined);
    }
  };
}

let overrideServices = null;
function getOverrideServices() {
  // only have one instance of this for every query editor
  if (overrideServices === null) {
    overrideServices = {
      storageService: makeStorageService()
    };
  }

  return overrideServices;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/completions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCompletions": () => (/* binding */ getCompletions)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts");
/* harmony import */ var _promql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
 // FIXME: we should not load this from the "outside", but we cannot do that while we have the "old" query-field too




// we order items like: history, functions, metrics
async function getAllMetricNamesCompletions(dataProvider) {
  const metrics = await dataProvider.getAllMetricNames();
  return metrics.map(metric => ({
    type: 'METRIC_NAME',
    label: metric.name,
    insertText: metric.name,
    detail: `${metric.name} : ${metric.type}`,
    documentation: metric.help
  }));
}

const FUNCTION_COMPLETIONS = _promql__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONS.map(f => {
  var _f$insertText;

  return {
    type: 'FUNCTION',
    label: f.label,
    insertText: (_f$insertText = f.insertText) !== null && _f$insertText !== void 0 ? _f$insertText : '',
    // i don't know what to do when this is nullish. it should not be.
    detail: f.detail,
    documentation: f.documentation
  };
});

async function getAllFunctionsAndMetricNamesCompletions(dataProvider) {
  const metricNames = await getAllMetricNamesCompletions(dataProvider);
  return [...FUNCTION_COMPLETIONS, ...metricNames];
}

const DURATION_COMPLETIONS = ['$__interval', '$__range', '$__rate_interval', '1m', '5m', '10m', '30m', '1h', '1d'].map(text => ({
  type: 'DURATION',
  label: text,
  insertText: text
}));

async function getAllHistoryCompletions(dataProvider) {
  // function getAllHistoryCompletions(queryHistory: PromHistoryItem[]): Completion[] {
  // NOTE: the typescript types are wrong. historyItem.query.expr can be undefined
  const allHistory = await dataProvider.getHistory(); // FIXME: find a better history-limit

  return allHistory.slice(0, 10).map(expr => ({
    type: 'HISTORY',
    label: expr,
    insertText: expr
  }));
}

function makeSelector(metricName, labels) {
  const allLabels = [...labels]; // we transform the metricName to a label, if it exists

  if (metricName !== undefined) {
    allLabels.push({
      name: '__name__',
      value: metricName,
      op: '='
    });
  }

  const allLabelTexts = allLabels.map(label => `${label.name}${label.op}"${(0,_language_utils__WEBPACK_IMPORTED_MODULE_2__.escapeLabelValueInExactSelector)(label.value)}"`);
  return `{${allLabelTexts.join(',')}}`;
}

async function getLabelNames(metric, otherLabels, dataProvider) {
  if (metric === undefined && otherLabels.length === 0) {
    // if there is no filtering, we have to use a special endpoint
    return dataProvider.getAllLabelNames();
  } else {
    const selector = makeSelector(metric, otherLabels);
    const data = await dataProvider.getSeries(selector);
    const possibleLabelNames = Object.keys(data); // all names from prometheus

    const usedLabelNames = new Set(otherLabels.map(l => l.name)); // names used in the query

    return possibleLabelNames.filter(l => !usedLabelNames.has(l));
  }
}

async function getLabelNamesForCompletions(metric, suffix, triggerOnInsert, otherLabels, dataProvider) {
  const labelNames = await getLabelNames(metric, otherLabels, dataProvider);
  return labelNames.map(text => ({
    type: 'LABEL_NAME',
    label: text,
    insertText: `${text}${suffix}`,
    triggerOnInsert
  }));
}

async function getLabelNamesForSelectorCompletions(metric, otherLabels, dataProvider) {
  return getLabelNamesForCompletions(metric, '=', true, otherLabels, dataProvider);
}

async function getLabelNamesForByCompletions(metric, otherLabels, dataProvider) {
  return getLabelNamesForCompletions(metric, '', false, otherLabels, dataProvider);
}

async function getLabelValues(metric, labelName, otherLabels, dataProvider) {
  if (metric === undefined && otherLabels.length === 0) {
    // if there is no filtering, we have to use a special endpoint
    return dataProvider.getLabelValues(labelName);
  } else {
    var _data$labelName;

    const selector = makeSelector(metric, otherLabels);
    const data = await dataProvider.getSeries(selector);
    return (_data$labelName = data[labelName]) !== null && _data$labelName !== void 0 ? _data$labelName : [];
  }
}

async function getLabelValuesForMetricCompletions(metric, labelName, betweenQuotes, otherLabels, dataProvider) {
  const values = await getLabelValues(metric, labelName, otherLabels, dataProvider);
  return values.map(text => ({
    type: 'LABEL_VALUE',
    label: text,
    insertText: betweenQuotes ? text : `"${text}"` // FIXME: escaping strange characters?

  }));
}

async function getCompletions(situation, dataProvider) {
  switch (situation.type) {
    case 'IN_DURATION':
      return DURATION_COMPLETIONS;

    case 'IN_FUNCTION':
      return getAllFunctionsAndMetricNamesCompletions(dataProvider);

    case 'AT_ROOT':
      {
        return getAllFunctionsAndMetricNamesCompletions(dataProvider);
      }

    case 'EMPTY':
      {
        const metricNames = await getAllMetricNamesCompletions(dataProvider);
        const historyCompletions = await getAllHistoryCompletions(dataProvider);
        return [...historyCompletions, ...FUNCTION_COMPLETIONS, ...metricNames];
      }

    case 'IN_LABEL_SELECTOR_NO_LABEL_NAME':
      return getLabelNamesForSelectorCompletions(situation.metricName, situation.otherLabels, dataProvider);

    case 'IN_GROUPING':
      return getLabelNamesForByCompletions(situation.metricName, situation.otherLabels, dataProvider);

    case 'IN_LABEL_SELECTOR_WITH_LABEL_NAME':
      return getLabelValuesForMetricCompletions(situation.metricName, situation.labelName, situation.betweenQuotes, situation.otherLabels, dataProvider);

    default:
      throw new _util__WEBPACK_IMPORTED_MODULE_0__.NeverCaseError(situation);
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCompletionProvider": () => (/* binding */ getCompletionProvider),
/* harmony export */   "getSuggestOptions": () => (/* binding */ getSuggestOptions)
/* harmony export */ });
/* harmony import */ var _situation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/situation.ts");
/* harmony import */ var _completions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/completions.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts");



function getSuggestOptions() {
  return {
    // monaco-editor sometimes provides suggestions automatically, i am not
    // sure based on what, seems to be by analyzing the words already
    // written.
    // to try it out:
    // - enter `go_goroutines{job~`
    // - have the cursor at the end of the string
    // - press ctrl-enter
    // - you will get two suggestions
    // those were not provided by grafana, they are offered automatically.
    // i want to remove those. the only way i found is:
    // - every suggestion-item has a `kind` attribute,
    //   that controls the icon to the left of the suggestion.
    // - items auto-generated by monaco have `kind` set to `text`.
    // - we make sure grafana-provided suggestions do not have `kind` set to `text`.
    // - and then we tell monaco not to show suggestions of kind `text`
    showWords: false
  };
}

function getMonacoCompletionItemKind(type, monaco) {
  switch (type) {
    case 'DURATION':
      return monaco.languages.CompletionItemKind.Unit;

    case 'FUNCTION':
      return monaco.languages.CompletionItemKind.Variable;

    case 'HISTORY':
      return monaco.languages.CompletionItemKind.Snippet;

    case 'LABEL_NAME':
      return monaco.languages.CompletionItemKind.Enum;

    case 'LABEL_VALUE':
      return monaco.languages.CompletionItemKind.EnumMember;

    case 'METRIC_NAME':
      return monaco.languages.CompletionItemKind.Constructor;

    default:
      throw new _util__WEBPACK_IMPORTED_MODULE_2__.NeverCaseError(type);
  }
}

function getCompletionProvider(monaco, dataProvider) {
  const provideCompletionItems = (model, position) => {
    const word = model.getWordAtPosition(position);
    const range = word != null ? monaco.Range.lift({
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn
    }) : monaco.Range.fromPositions(position); // documentation says `position` will be "adjusted" in `getOffsetAt`
    // i don't know what that means, to be sure i clone it

    const positionClone = {
      column: position.column,
      lineNumber: position.lineNumber
    };
    const offset = model.getOffsetAt(positionClone);
    const situation = (0,_situation__WEBPACK_IMPORTED_MODULE_0__.getSituation)(model.getValue(), offset);
    const completionsPromise = situation != null ? (0,_completions__WEBPACK_IMPORTED_MODULE_1__.getCompletions)(situation, dataProvider) : Promise.resolve([]);
    return completionsPromise.then(items => {
      // monaco by-default alphabetically orders the items.
      // to stop it, we use a number-as-string sortkey,
      // so that monaco keeps the order we use
      const maxIndexDigits = items.length.toString().length;
      const suggestions = items.map((item, index) => ({
        kind: getMonacoCompletionItemKind(item.type, monaco),
        label: item.label,
        insertText: item.insertText,
        detail: item.detail,
        documentation: item.documentation,
        sortText: index.toString().padStart(maxIndexDigits, '0'),
        // to force the order we have
        range,
        command: item.triggerOnInsert ? {
          id: 'editor.action.triggerSuggest',
          title: ''
        } : undefined
      }));
      return {
        suggestions
      };
    });
  };

  return {
    triggerCharacters: ['{', ',', '[', '(', '=', '~', ' ', '"'],
    provideCompletionItems
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/situation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSituation": () => (/* binding */ getSituation)
/* harmony export */ });
/* harmony import */ var lezer_promql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts");



function move(node, direction) {
  switch (direction) {
    case 'parent':
      return node.parent;

    case 'firstChild':
      return node.firstChild;

    case 'lastChild':
      return node.lastChild;

    case 'nextSibling':
      return node.nextSibling;

    default:
      throw new _util__WEBPACK_IMPORTED_MODULE_1__.NeverCaseError(direction);
  }
}

function walk(node, path) {
  let current = node;

  for (const [direction, expectedType] of path) {
    current = move(current, direction);

    if (current === null) {
      // we could not move in the direction, we stop
      return null;
    }

    if (current.type.name !== expectedType) {
      // the reached node has wrong type, we stop
      return null;
    }
  }

  return current;
}

function getNodeText(node, text) {
  return text.slice(node.from, node.to);
}

function parsePromQLStringLiteral(text) {
  // if it is a string-literal, it is inside quotes of some kind
  const inside = text.slice(1, text.length - 1); // FIXME: support https://prometheus.io/docs/prometheus/latest/querying/basics/#string-literals
  // FIXME: maybe check other promql code, if all is supported or not
  // for now we do only some very simple un-escaping
  // we start with double-quotes

  if (text.startsWith('"') && text.endsWith('"')) {
    // NOTE: this is not 100% perfect, we only unescape the double-quote,
    // there might be other characters too
    return inside.replace(/\\"/, '"');
  } // then single-quote


  if (text.startsWith("'") && text.endsWith("'")) {
    // NOTE: this is not 100% perfect, we only unescape the single-quote,
    // there might be other characters too
    return inside.replace(/\\'/, "'");
  } // then backticks


  if (text.startsWith('`') && text.endsWith('`')) {
    return inside;
  }

  throw new Error('FIXME: invalid string literal');
}

function isPathMatch(resolverPath, cursorPath) {
  return resolverPath.every((item, index) => item === cursorPath[index]);
}

const ERROR_NODE_NAME = '⚠'; // this is used as error-name

const RESOLVERS = [{
  path: ['LabelMatchers', 'VectorSelector'],
  fun: resolveLabelKeysWithEquals
}, {
  path: ['PromQL'],
  fun: resolveTopLevel
}, {
  path: ['FunctionCallBody'],
  fun: resolveInFunction
}, {
  path: ['StringLiteral', 'LabelMatcher'],
  fun: resolveLabelMatcher
}, {
  path: [ERROR_NODE_NAME, 'LabelMatcher'],
  fun: resolveLabelMatcher
}, {
  path: [ERROR_NODE_NAME, 'MatrixSelector'],
  fun: resolveDurations
}, {
  path: ['GroupingLabels'],
  fun: resolveLabelsForGrouping
}];
const LABEL_OP_MAP = new Map([['EqlSingle', '='], ['EqlRegex', '=~'], ['Neq', '!='], ['NeqRegex', '!~']]);

function getLabelOp(opNode) {
  var _LABEL_OP_MAP$get;

  const opChild = opNode.firstChild;

  if (opChild === null) {
    return null;
  }

  return (_LABEL_OP_MAP$get = LABEL_OP_MAP.get(opChild.name)) !== null && _LABEL_OP_MAP$get !== void 0 ? _LABEL_OP_MAP$get : null;
}

function getLabel(labelMatcherNode, text) {
  if (labelMatcherNode.type.name !== 'LabelMatcher') {
    return null;
  }

  const nameNode = walk(labelMatcherNode, [['firstChild', 'LabelName']]);

  if (nameNode === null) {
    return null;
  }

  const opNode = walk(nameNode, [['nextSibling', 'MatchOp']]);

  if (opNode === null) {
    return null;
  }

  const op = getLabelOp(opNode);

  if (op === null) {
    return null;
  }

  const valueNode = walk(labelMatcherNode, [['lastChild', 'StringLiteral']]);

  if (valueNode === null) {
    return null;
  }

  const name = getNodeText(nameNode, text);
  const value = parsePromQLStringLiteral(getNodeText(valueNode, text));
  return {
    name,
    value,
    op
  };
}

function getLabels(labelMatchersNode, text) {
  if (labelMatchersNode.type.name !== 'LabelMatchers') {
    return [];
  }

  let listNode = walk(labelMatchersNode, [['firstChild', 'LabelMatchList']]);
  const labels = [];

  while (listNode !== null) {
    const matcherNode = walk(listNode, [['lastChild', 'LabelMatcher']]);

    if (matcherNode === null) {
      // unexpected, we stop
      return [];
    }

    const label = getLabel(matcherNode, text);

    if (label !== null) {
      labels.push(label);
    } // there might be more labels


    listNode = walk(listNode, [['firstChild', 'LabelMatchList']]);
  } // our labels-list is last-first, so we reverse it


  labels.reverse();
  return labels;
}

function getNodeChildren(node) {
  let child = node.firstChild;
  const children = [];

  while (child !== null) {
    children.push(child);
    child = child.nextSibling;
  }

  return children;
}

function getNodeInSubtree(node, typeName) {
  // first we try the current node
  if (node.type.name === typeName) {
    return node;
  } // then we try the children


  const children = getNodeChildren(node);

  for (const child of children) {
    const n = getNodeInSubtree(child, typeName);

    if (n !== null) {
      return n;
    }
  }

  return null;
}

function resolveLabelsForGrouping(node, text, pos) {
  const aggrExpNode = walk(node, [['parent', 'AggregateModifier'], ['parent', 'AggregateExpr']]);

  if (aggrExpNode === null) {
    return null;
  }

  const bodyNode = aggrExpNode.getChild('FunctionCallBody');

  if (bodyNode === null) {
    return null;
  }

  const metricIdNode = getNodeInSubtree(bodyNode, 'MetricIdentifier');

  if (metricIdNode === null) {
    return null;
  }

  const idNode = walk(metricIdNode, [['firstChild', 'Identifier']]);

  if (idNode === null) {
    return null;
  }

  const metricName = getNodeText(idNode, text);
  return {
    type: 'IN_GROUPING',
    metricName,
    otherLabels: []
  };
}

function resolveLabelMatcher(node, text, pos) {
  // we can arrive here in two situation. `node` is either:
  // - a StringNode (like in `{job="^"}`)
  // - or an error node (like in `{job=^}`)
  const inStringNode = !node.type.isError;
  const parent = walk(node, [['parent', 'LabelMatcher']]);

  if (parent === null) {
    return null;
  }

  const labelNameNode = walk(parent, [['firstChild', 'LabelName']]);

  if (labelNameNode === null) {
    return null;
  }

  const labelName = getNodeText(labelNameNode, text); // now we need to go up, to the parent of LabelMatcher,
  // there can be one or many `LabelMatchList` parents, we have
  // to go through all of them

  const firstListNode = walk(parent, [['parent', 'LabelMatchList']]);

  if (firstListNode === null) {
    return null;
  }

  let listNode = firstListNode; // we keep going through the parent-nodes
  // as long as they are LabelMatchList.
  // as soon as we reawch LabelMatchers, we stop

  let labelMatchersNode = null;

  while (labelMatchersNode === null) {
    const p = listNode.parent;

    if (p === null) {
      return null;
    }

    const {
      name
    } = p.type;

    switch (name) {
      case 'LabelMatchList':
        //we keep looping
        listNode = p;
        continue;

      case 'LabelMatchers':
        // we reached the end, we can stop the loop
        labelMatchersNode = p;
        continue;

      default:
        // we reached some other node, we stop
        return null;
    }
  } // now we need to find the other names


  const allLabels = getLabels(labelMatchersNode, text); // we need to remove "our" label from all-labels, if it is in there

  const otherLabels = allLabels.filter(label => label.name !== labelName);
  const metricNameNode = walk(labelMatchersNode, [['parent', 'VectorSelector'], ['firstChild', 'MetricIdentifier'], ['firstChild', 'Identifier']]);

  if (metricNameNode === null) {
    // we are probably in a situation without a metric name
    return {
      type: 'IN_LABEL_SELECTOR_WITH_LABEL_NAME',
      labelName,
      betweenQuotes: inStringNode,
      otherLabels
    };
  }

  const metricName = getNodeText(metricNameNode, text);
  return {
    type: 'IN_LABEL_SELECTOR_WITH_LABEL_NAME',
    metricName,
    labelName,
    betweenQuotes: inStringNode,
    otherLabels
  };
}

function resolveTopLevel(node, text, pos) {
  return {
    type: 'AT_ROOT'
  };
}

function resolveInFunction(node, text, pos) {
  return {
    type: 'IN_FUNCTION'
  };
}

function resolveDurations(node, text, pos) {
  return {
    type: 'IN_DURATION'
  };
}

function subTreeHasError(node) {
  return getNodeInSubtree(node, ERROR_NODE_NAME) !== null;
}

function resolveLabelKeysWithEquals(node, text, pos) {
  // for example `something{^}`
  // there are some false positives that can end up in this situation, that we want
  // to eliminate:
  // `something{a~^}` (if this subtree contains any error-node, we stop)
  if (subTreeHasError(node)) {
    return null;
  } // next false positive:
  // `something{a="1"^}`


  const child = walk(node, [['firstChild', 'LabelMatchList']]);

  if (child !== null) {
    // means the label-matching part contains at least one label already.
    //
    // in this case, we will need to have a `,` character at the end,
    // to be able to suggest adding the next label.
    // the area between the end-of-the-child-node and the cursor-pos
    // must contain a `,` in this case.
    const textToCheck = text.slice(child.to, pos);

    if (!textToCheck.includes(',')) {
      return null;
    }
  }

  const metricNameNode = walk(node, [['parent', 'VectorSelector'], ['firstChild', 'MetricIdentifier'], ['firstChild', 'Identifier']]);
  const otherLabels = getLabels(node, text);

  if (metricNameNode === null) {
    // we are probably in a situation without a metric name.
    return {
      type: 'IN_LABEL_SELECTOR_NO_LABEL_NAME',
      otherLabels
    };
  }

  const metricName = getNodeText(metricNameNode, text);
  return {
    type: 'IN_LABEL_SELECTOR_NO_LABEL_NAME',
    metricName,
    otherLabels
  };
} // we find the first error-node in the tree that is at the cursor-position.
// NOTE: this might be too slow, might need to optimize it
// (ideas: we do not need to go into every subtree, based on from/to)
// also, only go to places that are in the sub-tree of the node found
// by default by lezer. problem is, `next()` will go upward too,
// and we do not want to go higher than our node


function getErrorNode(tree, pos) {
  const cur = tree.cursor(pos);

  while (true) {
    if (cur.from === pos && cur.to === pos) {
      const {
        node
      } = cur;

      if (node.type.isError) {
        return node;
      }
    }

    if (!cur.next()) {
      break;
    }
  }

  return null;
}

function getSituation(text, pos) {
  // there is a special-case when we are at the start of writing text,
  // so we handle that case first
  if (text === '') {
    return {
      type: 'EMPTY'
    };
  }
  /*
  PromQL
  Expr
  VectorSelector
  LabelMatchers
  */


  const tree = lezer_promql__WEBPACK_IMPORTED_MODULE_0__.parser.parse(text); // if the tree contains error, it is very probable that
  // our node is one of those error-nodes.
  // also, if there are errors, the node lezer finds us,
  // might not be the best node.
  // so first we check if there is an error-node at the cursor-position

  const maybeErrorNode = getErrorNode(tree, pos);
  const cur = maybeErrorNode != null ? maybeErrorNode.cursor : tree.cursor(pos);
  const currentNode = cur.node;
  const names = [cur.name];

  while (cur.parent()) {
    names.push(cur.name);
  }

  for (let resolver of RESOLVERS) {
    // i do not use a foreach because i want to stop as soon
    // as i find something
    if (isPathMatch(resolver.path, names)) {
      return resolver.fun(currentNode, text, pos);
    }
  }

  return null;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeverCaseError": () => (/* binding */ NeverCaseError)
/* harmony export */ });
// this helper class is used to make typescript warn you when you forget
// a case-block in a switch statement.
// example code that triggers the typescript-error:
//
// const x:'A'|'B'|'C' = 'A';
//
// switch(x) {
//   case 'A':
//     // something
//   case 'B':
//     // something
//   default:
//     throw new NeverCaseError(x);
// }
//
//
// typescript will show an error in this case,
// when you add the missing `case 'C'` code,
// the problem will be fixed.
class NeverCaseError extends Error {
  constructor(value) {
    super('should never happen');
  }

}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLatest.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

var useLatest = function (value) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
    ref.current = value;
    return ref;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatest);


/***/ }),

/***/ "./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promLanguageDefinition": () => (/* reexport safe */ _promql_promql_contribution__WEBPACK_IMPORTED_MODULE_0__.promLanguageDefinition)
/* harmony export */ });
/* harmony import */ var _promql_promql_contribution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.contribution.js");
// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.




/***/ }),

/***/ "./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.contribution.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promLanguageDefinition": () => (/* binding */ promLanguageDefinition)
/* harmony export */ });
// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// noinspection JSUnusedGlobalSymbols
var promLanguageDefinition = {
    id: 'promql',
    extensions: ['.promql'],
    aliases: ['Prometheus', 'prometheus', 'prom', 'Prom', 'promql', 'Promql', 'promQL', 'PromQL'],
    mimetypes: [],
    loader: function () { return __webpack_require__.e(/* import() */ "_yarn_cache_monaco-promql-npm-1_7_2-7f61733ebe-54061d5c1c_zip_node_modules_monaco-promql_prom-c4d0dc").then(__webpack_require__.bind(__webpack_require__, "./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.js")); } // eslint-disable-line @typescript-eslint/explicit-function-return-type
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNdEksY0FBTixTQUE2QnFHLEtBQTdCLENBQW1DO0FBQ3hDMEQsRUFBQUEsV0FBVyxDQUFDL0ssS0FBRCxFQUFlO0FBQ3hCLFVBQU0scUJBQU47QUFDRDs7QUFIdUM7Ozs7Ozs7Ozs7OztBQ3BCWDtBQUMvQjtBQUNBLGNBQWMsNkNBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDTnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2dDOzs7Ozs7Ozs7Ozs7QUN0QjdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sK1NBQWtCLElBQUk7QUFDdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9jb21wb25lbnRzL21vbmFjby1xdWVyeS1maWVsZC9Nb25hY29RdWVyeUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9jb21wb25lbnRzL21vbmFjby1xdWVyeS1maWVsZC9nZXRPdmVycmlkZVNlcnZpY2VzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL2NvbXBvbmVudHMvbW9uYWNvLXF1ZXJ5LWZpZWxkL21vbmFjby1jb21wbGV0aW9uLXByb3ZpZGVyL2NvbXBsZXRpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL2NvbXBvbmVudHMvbW9uYWNvLXF1ZXJ5LWZpZWxkL21vbmFjby1jb21wbGV0aW9uLXByb3ZpZGVyL2luZGV4LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL2NvbXBvbmVudHMvbW9uYWNvLXF1ZXJ5LWZpZWxkL21vbmFjby1jb21wbGV0aW9uLXByb3ZpZGVyL3NpdHVhdGlvbi50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9jb21wb25lbnRzL21vbmFjby1xdWVyeS1maWVsZC9tb25hY28tY29tcGxldGlvbi1wcm92aWRlci91dGlsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC0wMDMyNmU3MGJhLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy4zLjItYTAzMmNiZWIwMS03Mzc5NDYwZjUxLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL21vbmFjby1wcm9tcWwtbnBtLTEuNy4yLTdmNjE3MzNlYmUtNTQwNjFkNWMxYy56aXAvbm9kZV9tb2R1bGVzL21vbmFjby1wcm9tcWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL21vbmFjby1wcm9tcWwtbnBtLTEuNy4yLTdmNjE3MzNlYmUtNTQwNjFkNWMxYy56aXAvbm9kZV9tb2R1bGVzL21vbmFjby1wcm9tcWwvcHJvbXFsL3Byb21xbC5jb250cmlidXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGhlbWUyLCBSZWFjdE1vbmFjb0VkaXRvciwgTW9uYWNvLCBtb25hY29UeXBlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB1c2VMYXRlc3QgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgcHJvbUxhbmd1YWdlRGVmaW5pdGlvbiB9IGZyb20gJ21vbmFjby1wcm9tcWwnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRDb21wbGV0aW9uUHJvdmlkZXIsIGdldFN1Z2dlc3RPcHRpb25zIH0gZnJvbSAnLi9tb25hY28tY29tcGxldGlvbi1wcm92aWRlcic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vTW9uYWNvUXVlcnlGaWVsZFByb3BzJztcbmltcG9ydCB7IGdldE92ZXJyaWRlU2VydmljZXMgfSBmcm9tICcuL2dldE92ZXJyaWRlU2VydmljZXMnO1xuXG5jb25zdCBvcHRpb25zOiBtb25hY29UeXBlcy5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zID0ge1xuICBjb2RlTGVuczogZmFsc2UsXG4gIGNvbnRleHRtZW51OiBmYWxzZSxcbiAgLy8gd2UgbmVlZCBgZml4ZWRPdmVyZmxvd1dpZGdldHNgIGJlY2F1c2Ugb3RoZXJ3aXNlIGluIGdyYWZhbmEtZGFzaGJvYXJkc1xuICAvLyB0aGUgcG9wdXAgaXMgY2xpcHBlZCBieSB0aGUgcGFuZWwtdmlzdWFsaXphdGlvbnMuXG4gIGZpeGVkT3ZlcmZsb3dXaWRnZXRzOiB0cnVlLFxuICBmb2xkaW5nOiBmYWxzZSxcbiAgZm9udFNpemU6IDE0LFxuICBsaW5lRGVjb3JhdGlvbnNXaWR0aDogOCwgLy8gdXNlZCBhcyBcInBhZGRpbmctbGVmdFwiXG4gIGxpbmVOdW1iZXJzOiAnb2ZmJyxcbiAgbWluaW1hcDogeyBlbmFibGVkOiBmYWxzZSB9LFxuICBvdmVydmlld1J1bGVyQm9yZGVyOiBmYWxzZSxcbiAgb3ZlcnZpZXdSdWxlckxhbmVzOiAwLFxuICBwYWRkaW5nOiB7XG4gICAgLy8gdGhlc2UgbnVtYmVycyB3ZXJlIHBpY2tlZCBzbyB0aGF0IHZpc3VhbGx5IHRoaXMgbWF0Y2hlcyB0aGUgcHJldmlvdXMgdmVyc2lvblxuICAgIC8vIG9mIHRoZSBxdWVyeS1lZGl0b3IgdGhlIGJlc3RcbiAgICB0b3A6IDQsXG4gICAgYm90dG9tOiA1LFxuICB9LFxuICByZW5kZXJMaW5lSGlnaGxpZ2h0OiAnbm9uZScsXG4gIHNjcm9sbGJhcjoge1xuICAgIHZlcnRpY2FsOiAnaGlkZGVuJyxcbiAgICB2ZXJ0aWNhbFNjcm9sbGJhclNpemU6IDgsIC8vIHVzZWQgYXMgXCJwYWRkaW5nLXJpZ2h0XCJcbiAgICBob3Jpem9udGFsOiAnaGlkZGVuJyxcbiAgICBob3Jpem9udGFsU2Nyb2xsYmFyU2l6ZTogMCxcbiAgfSxcbiAgc2Nyb2xsQmV5b25kTGFzdExpbmU6IGZhbHNlLFxuICBzdWdnZXN0OiBnZXRTdWdnZXN0T3B0aW9ucygpLFxuICBzdWdnZXN0Rm9udFNpemU6IDEyLFxuICB3b3JkV3JhcDogJ29uJyxcbn07XG5cbi8vIHRoaXMgbnVtYmVyIHdhcyBjaG9zZW4gYnkgdGVzdGluZyB2YXJpb3VzIHZhbHVlcy4gaXQgbWlnaHQgYmUgbmVjZXNzYXJ5XG4vLyBiZWNhdXNlIG9mIHRoZSB3aWR0aCBvZiB0aGUgYm9yZGVyLCBub3Qgc3VyZS5cbi8vaXQgbmVlZHMgdG8gZG8gMiB0aGluZ3M6XG4vLyAxLiB3aGVuIHRoZSBlZGl0b3IgaXMgc2luZ2xlLWxpbmUsIGl0IHNob3VsZCBtYWtlIHRoZSBlZGl0b3IgaGVpZ2h0IGJlIHZpc3VhbGx5IGNvcnJlY3Rcbi8vIDIuIHdoZW4gdGhlIGVkaXRvciBpcyBtdWx0aS1saW5lLCB0aGUgZWRpdG9yIHNob3VsZCBub3QgYmUgXCJzY3JvbGxhYmxlXCIgKG1lYW5pbmcsXG4vLyAgICB5b3UgZG8gYSBzY3JvbGwtbW92ZW1lbnQgaW4gdGhlIGVkaXRvciwgYW5kIGl0IHdpbGwgc2Nyb2xsIHRoZSBjb250ZW50IGJ5IGEgY291cGxlIHBpeGVsc1xuLy8gICAgdXAgJiBkb3duLiB0aGlzIHdlIHdhbnQgdG8gYXZvaWQpXG5jb25zdCBFRElUT1JfSEVJR0hUX09GRlNFVCA9IDI7XG5cbmNvbnN0IFBST01RTF9MQU5HX0lEID0gcHJvbUxhbmd1YWdlRGVmaW5pdGlvbi5pZDtcblxuLy8gd2UgbXVzdCBvbmx5IHJ1biB0aGUgcHJvbXFsLXNldHVwIGNvZGUgb25jZVxubGV0IFBST01RTF9TRVRVUF9TVEFSVEVEID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGVuc3VyZVByb21RTChtb25hY286IE1vbmFjbykge1xuICBpZiAoUFJPTVFMX1NFVFVQX1NUQVJURUQgPT09IGZhbHNlKSB7XG4gICAgUFJPTVFMX1NFVFVQX1NUQVJURUQgPSB0cnVlO1xuICAgIGNvbnN0IHsgYWxpYXNlcywgZXh0ZW5zaW9ucywgbWltZXR5cGVzLCBsb2FkZXIgfSA9IHByb21MYW5ndWFnZURlZmluaXRpb247XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3Rlcih7IGlkOiBQUk9NUUxfTEFOR19JRCwgYWxpYXNlcywgZXh0ZW5zaW9ucywgbWltZXR5cGVzIH0pO1xuXG4gICAgbG9hZGVyKCkudGhlbigobW9kKSA9PiB7XG4gICAgICBtb25hY28ubGFuZ3VhZ2VzLnNldE1vbmFyY2hUb2tlbnNQcm92aWRlcihQUk9NUUxfTEFOR19JRCwgbW9kLmxhbmd1YWdlKTtcbiAgICAgIG1vbmFjby5sYW5ndWFnZXMuc2V0TGFuZ3VhZ2VDb25maWd1cmF0aW9uKFBST01RTF9MQU5HX0lELCBtb2QubGFuZ3VhZ2VDb25maWd1cmF0aW9uKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb21wb25lbnRzLmlucHV0LmJvcmRlckNvbG9yfTtcbiAgICBgLFxuICB9O1xufTtcblxuY29uc3QgTW9uYWNvUXVlcnlGaWVsZCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgLy8gd2UgbmVlZCBvbmx5IG9uZSBpbnN0YW5jZSBvZiBgb3ZlcnJpZGVTZXJ2aWNlc2AgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgcmVhY3QgY29tcG9uZW50XG4gIGNvbnN0IG92ZXJyaWRlU2VydmljZXNSZWYgPSB1c2VSZWYoZ2V0T3ZlcnJpZGVTZXJ2aWNlcygpKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgeyBsYW5ndWFnZVByb3ZpZGVyLCBoaXN0b3J5LCBvbkJsdXIsIG9uUnVuUXVlcnksIGluaXRpYWxWYWx1ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbHBSZWYgPSB1c2VMYXRlc3QobGFuZ3VhZ2VQcm92aWRlcik7XG4gIGNvbnN0IGhpc3RvcnlSZWYgPSB1c2VMYXRlc3QoaGlzdG9yeSk7XG4gIGNvbnN0IG9uUnVuUXVlcnlSZWYgPSB1c2VMYXRlc3Qob25SdW5RdWVyeSk7XG4gIGNvbnN0IG9uQmx1clJlZiA9IHVzZUxhdGVzdChvbkJsdXIpO1xuXG4gIGNvbnN0IGF1dG9jb21wbGV0ZURpc3Bvc2VGdW4gPSB1c2VSZWY8KCgpID0+IHZvaWQpIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZTIoKTtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHRoZW1lKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHdoZW4gd2UgdW5tb3VudCwgd2UgdW5yZWdpc3RlciB0aGUgYXV0b2NvbXBsZXRlLWZ1bmN0aW9uLCBpZiBpdCB3YXMgcmVnaXN0ZXJlZFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhdXRvY29tcGxldGVEaXNwb3NlRnVuLmN1cnJlbnQ/LigpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5jb21wb25lbnRzLlF1ZXJ5RmllbGQuY29udGFpbmVyfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgLy8gTk9URTogd2Ugd2lsbCBiZSBzZXR0aW5nIGlubGluZS1zdHlsZS13aWR0aC9oZWlnaHQgb24gdGhpcyBlbGVtZW50XG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICA+XG4gICAgICA8UmVhY3RNb25hY29FZGl0b3JcbiAgICAgICAgb3ZlcnJpZGVTZXJ2aWNlcz17b3ZlcnJpZGVTZXJ2aWNlc1JlZi5jdXJyZW50fVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBsYW5ndWFnZT1cInByb21xbFwiXG4gICAgICAgIHZhbHVlPXtpbml0aWFsVmFsdWV9XG4gICAgICAgIGJlZm9yZU1vdW50PXsobW9uYWNvKSA9PiB7XG4gICAgICAgICAgZW5zdXJlUHJvbVFMKG1vbmFjbyk7XG4gICAgICAgIH19XG4gICAgICAgIG9uTW91bnQ9eyhlZGl0b3IsIG1vbmFjbykgPT4ge1xuICAgICAgICAgIC8vIHdlIHNldHVwIG9uLWJsdXJcbiAgICAgICAgICBlZGl0b3Iub25EaWRCbHVyRWRpdG9yV2lkZ2V0KCgpID0+IHtcbiAgICAgICAgICAgIG9uQmx1clJlZi5jdXJyZW50KGVkaXRvci5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHdlIGNvbnN0cnVjdCBhIERhdGFQcm92aWRlciBvYmplY3RcbiAgICAgICAgICBjb25zdCBnZXRTZXJpZXMgPSAoc2VsZWN0b3I6IHN0cmluZykgPT4gbHBSZWYuY3VycmVudC5nZXRTZXJpZXMoc2VsZWN0b3IpO1xuXG4gICAgICAgICAgY29uc3QgZ2V0SGlzdG9yeSA9ICgpID0+XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoaGlzdG9yeVJlZi5jdXJyZW50Lm1hcCgoaCkgPT4gaC5xdWVyeS5leHByKS5maWx0ZXIoKGV4cHIpID0+IGV4cHIgIT09IHVuZGVmaW5lZCkpO1xuXG4gICAgICAgICAgY29uc3QgZ2V0QWxsTWV0cmljTmFtZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG1ldHJpY3MsIG1ldHJpY3NNZXRhZGF0YSB9ID0gbHBSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG1ldHJpY3MubWFwKChtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFJdGVtID0gbWV0cmljc01ldGFkYXRhPy5bbV07XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbSxcbiAgICAgICAgICAgICAgICBoZWxwOiBtZXRhSXRlbT8uaGVscCA/PyAnJyxcbiAgICAgICAgICAgICAgICB0eXBlOiBtZXRhSXRlbT8udHlwZSA/PyAnJyxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IGdldEFsbExhYmVsTmFtZXMgPSAoKSA9PiBQcm9taXNlLnJlc29sdmUobHBSZWYuY3VycmVudC5nZXRMYWJlbEtleXMoKSk7XG5cbiAgICAgICAgICBjb25zdCBnZXRMYWJlbFZhbHVlcyA9IChsYWJlbE5hbWU6IHN0cmluZykgPT4gbHBSZWYuY3VycmVudC5nZXRMYWJlbFZhbHVlcyhsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgY29uc3QgZGF0YVByb3ZpZGVyID0geyBnZXRTZXJpZXMsIGdldEhpc3RvcnksIGdldEFsbE1ldHJpY05hbWVzLCBnZXRBbGxMYWJlbE5hbWVzLCBnZXRMYWJlbFZhbHVlcyB9O1xuICAgICAgICAgIGNvbnN0IGNvbXBsZXRpb25Qcm92aWRlciA9IGdldENvbXBsZXRpb25Qcm92aWRlcihtb25hY28sIGRhdGFQcm92aWRlcik7XG5cbiAgICAgICAgICAvLyBjb21wbGV0aW9uLXByb3ZpZGVycyBpbiBtb25hY28gYXJlIG5vdCByZWdpc3RlcmVkIGRpcmVjdGx5IHRvIGVkaXRvci1pbnN0YW5jZXMsXG4gICAgICAgICAgLy8gdGhleSBhcmUgcmVnaXN0ZXJlZCB0byBsYW5ndWFnZXMuIHRoaXMgbWFrZXMgaXQgaGFyZCBmb3IgdXMgdG8gaGF2ZVxuICAgICAgICAgIC8vIHNlcGFyYXRlIGNvbXBsZXRpb24tcHJvdmlkZXJzIGZvciBldmVyeSBxdWVyeS1maWVsZC1pbnN0YW5jZVxuICAgICAgICAgIC8vIChidXQgd2UgbmVlZCB0aGF0LCBiZWNhdXNlIHRoZXkgbWlnaHQgY29ubmVjdCB0byBkaWZmZXJlbnQgZGF0YXNvdXJjZXMpLlxuICAgICAgICAgIC8vIHRoZSB0cmljayB3ZSBkbyBpcywgd2Ugd3JhcCB0aGUgY2FsbGJhY2sgaW4gYSBcInByb3h5XCIsXG4gICAgICAgICAgLy8gYW5kIGluIHRoZSBwcm94eSwgdGhlIGZpcnN0IHRoaW5nIGlzLCB3ZSBjaGVjayBpZiB3ZSBhcmUgY2FsbGVkIGZyb21cbiAgICAgICAgICAvLyBcIm91ciBlZGl0b3IgaW5zdGFuY2VcIiwgYW5kIGlmIG5vdCwgd2UganVzdCByZXR1cm4gbm90aGluZy4gaWYgeWVzLFxuICAgICAgICAgIC8vIHdlIGNhbGwgdGhlIGNvbXBsZXRpb24tcHJvdmlkZXIuXG4gICAgICAgICAgY29uc3QgZmlsdGVyaW5nQ29tcGxldGlvblByb3ZpZGVyOiBtb25hY29UeXBlcy5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1Qcm92aWRlciA9IHtcbiAgICAgICAgICAgIC4uLmNvbXBsZXRpb25Qcm92aWRlcixcbiAgICAgICAgICAgIHByb3ZpZGVDb21wbGV0aW9uSXRlbXM6IChtb2RlbCwgcG9zaXRpb24sIGNvbnRleHQsIHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBtb2RlbC1pZCBkb2VzIG5vdCBtYXRjaCwgdGhlbiB0aGlzIGNhbGwgaXMgZnJvbSBhIGRpZmZlcmVudCBlZGl0b3ItaW5zdGFuY2UsXG4gICAgICAgICAgICAgIC8vIG5vdCBcIm91ciBpbnN0YW5jZVwiLCBzbyByZXR1cm4gbm90aGluZ1xuICAgICAgICAgICAgICBpZiAoZWRpdG9yLmdldE1vZGVsKCk/LmlkICE9PSBtb2RlbC5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb25zOiBbXSB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjb21wbGV0aW9uUHJvdmlkZXIucHJvdmlkZUNvbXBsZXRpb25JdGVtcyhtb2RlbCwgcG9zaXRpb24sIGNvbnRleHQsIHRva2VuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IHsgZGlzcG9zZSB9ID0gbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIoXG4gICAgICAgICAgICBQUk9NUUxfTEFOR19JRCxcbiAgICAgICAgICAgIGZpbHRlcmluZ0NvbXBsZXRpb25Qcm92aWRlclxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBhdXRvY29tcGxldGVEaXNwb3NlRnVuLmN1cnJlbnQgPSBkaXNwb3NlO1xuICAgICAgICAgIC8vIHRoaXMgY29kZSBtYWtlcyB0aGUgZWRpdG9yIHJlc2l6ZSBpdHNlbGYgc28gdGhhdCB0aGUgY29udGVudCBmaXRzXG4gICAgICAgICAgLy8gKGl0IHdpbGwgZ3JvdyB0YWxsZXIgd2hlbiBuZWNlc3NhcnkpXG4gICAgICAgICAgLy8gRklYTUU6IG1heWJlIG1vdmUgdGhpcyBmdW5jdGlvbmFsaXR5IGludG8gQ29kZUVkaXRvciwgbGlrZTpcbiAgICAgICAgICAvLyA8Q29kZUVkaXRvciByZXNpemluZ01vZGU9XCJzaW5nbGUtbGluZVwiLz5cbiAgICAgICAgICBjb25zdCB1cGRhdGVFbGVtZW50SGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gY29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyRGl2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBpeGVsSGVpZ2h0ID0gZWRpdG9yLmdldENvbnRlbnRIZWlnaHQoKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmhlaWdodCA9IGAke3BpeGVsSGVpZ2h0ICsgRURJVE9SX0hFSUdIVF9PRkZTRVR9cHhgO1xuICAgICAgICAgICAgICBjb250YWluZXJEaXYuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICAgIGNvbnN0IHBpeGVsV2lkdGggPSBjb250YWluZXJEaXYuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoeyB3aWR0aDogcGl4ZWxXaWR0aCwgaGVpZ2h0OiBwaXhlbEhlaWdodCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZWRpdG9yLm9uRGlkQ29udGVudFNpemVDaGFuZ2UodXBkYXRlRWxlbWVudEhlaWdodCk7XG4gICAgICAgICAgdXBkYXRlRWxlbWVudEhlaWdodCgpO1xuXG4gICAgICAgICAgLy8gaGFuZGxlOiBzaGlmdCArIGVudGVyXG4gICAgICAgICAgLy8gRklYTUU6IG1heWJlIG1vdmUgdGhpcyBmdW5jdGlvbmFsaXR5IGludG8gQ29kZUVkaXRvcj9cbiAgICAgICAgICBlZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLlNoaWZ0IHwgbW9uYWNvLktleUNvZGUuRW50ZXIsICgpID0+IHtcbiAgICAgICAgICAgIG9uUnVuUXVlcnlSZWYuY3VycmVudChlZGl0b3IuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gd2Ugd2lsbCBsYXp5LWxvYWQgdGhpcyBtb2R1bGUgdXNpbmcgUmVhY3QubGF6eSxcbi8vIGFuZCB0aGF0IG9ubHkgc3VwcG9ydHMgZGVmYXVsdC1leHBvcnRzLFxuLy8gc28gd2UgaGF2ZSB0byBkZWZhdWx0LWV4cG9ydCB0aGlzLCBldmVuIGlmXG4vLyBpdCBpcyBhZ2FpbnN0IHRoZSBzdHlsZS1ndWlkZWxpbmVzLlxuXG5leHBvcnQgZGVmYXVsdCBNb25hY29RdWVyeUZpZWxkO1xuIiwiaW1wb3J0IHsgbW9uYWNvVHlwZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbi8vIHRoaXMgdGhpbmcgaGVyZSBpcyBhIHdvcmthcm91bmQgaW4gYSB3YXkuXG4vLyB3aGF0IHdlIHdhbnQgdG8gYWNoaWV2ZSwgaXMgdGhhdCB3aGVuIHRoZSBhdXRvY29tcGxldGUtd2luZG93XG4vLyBvcGVucywgdGhlIFwic2Vjb25kLCBleHRyYSBwb3B1cFwiIHdpdGggdGhlIGV4dHJhIGhlbHAsXG4vLyBhbHNvIG9wZW5zIGF1dG9tYXRpY2FsbHkuXG4vLyBidXQgdGhlcmUgaXMgbm8gQVBJIHRvIGFjaGlldmUgaXQuXG4vLyB0aGUgd2F5IHRvIGRvIGl0IGlzIHRvIGltcGxlbWVudCB0aGUgYHN0b3JhZ2VTZXJ2aWNlYFxuLy8gaW50ZXJmYWNlLCBhbmQgcHJvdmlkZSBvdXIgY3VzdG9tIGltcGxlbWVudGF0aW9uLFxuLy8gd2hpY2ggd2lsbCBkZWZhdWx0IHRvIGB0cnVlYCBmb3IgdGhlIGNvcnJlY3Qgc3RyaW5nLWtleS5cbi8vIHVuZm9ydHVuYXRlbHksIHdoaWxlIHRoZSB0eXBlc2NyaXB0LWludGVyZmFjZSBleGlzdHMsXG4vLyBpdCBpcyBub3QgZXhwb3J0ZWQgZnJvbSBtb25hY28tZWRpdG9yLFxuLy8gc28gd2UgY2Fubm90IHJlbHkgb24gdHlwZXNjcmlwdCB0byBtYWtlIHN1cmVcbi8vIHdlIGRvIGl0IHJpZ2h0LiBhbGwgd2UgY2FuIGRvIGlzIHRvIG1hbnVhbGx5XG4vLyBsb29rdXAgdGhlIGludGVyZmFjZSwgYW5kIG1ha2Ugc3VyZSB3ZSBjb2RlIG91ciBjb2RlIHJpZ2h0LlxuLy8gb3VyIGNvZGUgaXMgYSBcImJlc3QgZWZmb3J0XCIgYXBwcm9hY2gsXG4vLyBpIGFtIG5vdCAxMDAlIGhvdyB0aGUgYHNjb3BlYCBhbmQgYHRhcmdldGAgdGhpbmdzIHdvcmssXG4vLyBidXQgc28gZmFyIGl0IHNlZW1zIHRvIHdvcmsgb2suXG4vLyBpIHdvdWxkIHVzZSBhbiBhbm90aGVyIGFwcHJvYWNoLCBpZiB0aGVyZSB3YXMgb25lIGF2YWlsYWJsZS5cblxuZnVuY3Rpb24gbWFrZVN0b3JhZ2VTZXJ2aWNlKCkge1xuICAvLyB3ZSBuZWVkIHRvIHJldHVybiBhbiBvYmplY3QgdGhhdCBmdWxmaWxscyB0aGlzIGludGVyZmFjZTpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC92c2NvZGUvYmxvYi9mZjFlMTZlZWJiOTNhZjc5ZmQ2ZDdhZjEzNTZjNDAwM2ExMjBjNTYzL3NyYy92cy9wbGF0Zm9ybS9zdG9yYWdlL2NvbW1vbi9zdG9yYWdlLnRzI0wzN1xuICAvLyB1bmZvcnR1bmF0ZWx5IGl0IGlzIG5vdCBleHBvcnQgZnJvbSBtb25hY28tZWRpdG9yXG5cbiAgY29uc3Qgc3RyaW5ncyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgLy8gd2Ugd2FudCB0aGlzIHRvIGJlIHRydWUgYnkgZGVmYXVsdFxuICBzdHJpbmdzLnNldCgnZXhwYW5kU3VnZ2VzdGlvbkRvY3MnLCB0cnVlLnRvU3RyaW5nKCkpO1xuXG4gIHJldHVybiB7XG4gICAgLy8gd2UgZG8gbm90IGltcGxlbWVudCB0aGUgb24qIGhhbmRsZXJzXG4gICAgb25EaWRDaGFuZ2VWYWx1ZTogKGRhdGE6IHVua25vd24pOiB2b2lkID0+IHVuZGVmaW5lZCxcbiAgICBvbkRpZENoYW5nZVRhcmdldDogKGRhdGE6IHVua25vd24pOiB2b2lkID0+IHVuZGVmaW5lZCxcbiAgICBvbldpbGxTYXZlU3RhdGU6IChkYXRhOiB1bmtub3duKTogdm9pZCA9PiB1bmRlZmluZWQsXG5cbiAgICBnZXQ6IChrZXk6IHN0cmluZywgc2NvcGU6IHVua25vd24sIGZhbGxiYWNrVmFsdWU/OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgICAgcmV0dXJuIHN0cmluZ3MuZ2V0KGtleSkgPz8gZmFsbGJhY2tWYWx1ZTtcbiAgICB9LFxuXG4gICAgZ2V0Qm9vbGVhbjogKGtleTogc3RyaW5nLCBzY29wZTogdW5rbm93biwgZmFsbGJhY2tWYWx1ZT86IGJvb2xlYW4pOiBib29sZWFuIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHN0cmluZ3MuZ2V0KGtleSk7XG4gICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gdGhlIGludGVyZmFjZS1kb2NzIHNheSB0aGUgdmFsdWUgd2lsbCBiZSBjb252ZXJ0ZWRcbiAgICAgICAgLy8gdG8gYSBib29sZWFuIGJ1dCBkbyBub3Qgc3BlY2lmeSBob3csIHNvIHdlIGltcHJvdmlzZVxuICAgICAgICByZXR1cm4gdmFsID09PSAndHJ1ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0TnVtYmVyOiAoa2V5OiBzdHJpbmcsIHNjb3BlOiB1bmtub3duLCBmYWxsYmFja1ZhbHVlPzogbnVtYmVyKTogbnVtYmVyIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHN0cmluZ3MuZ2V0KGtleSk7XG4gICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrVmFsdWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3JlOiAoXG4gICAgICBrZXk6IHN0cmluZyxcbiAgICAgIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbCxcbiAgICAgIHNjb3BlOiB1bmtub3duLFxuICAgICAgdGFyZ2V0OiB1bmtub3duXG4gICAgKTogdm9pZCA9PiB7XG4gICAgICAvLyB0aGUgaW50ZXJmYWNlLWRvY3Mgc2F5IGlmIHRoZSB2YWx1ZSBpcyBudWxsaXNoLCBpdCBzaG91bGQgYWN0IGFzIGRlbGV0ZVxuICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RyaW5ncy5kZWxldGUoa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cmluZ3Muc2V0KGtleSwgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbW92ZTogKGtleTogc3RyaW5nLCBzY29wZTogdW5rbm93bik6IHZvaWQgPT4ge1xuICAgICAgc3RyaW5ncy5kZWxldGUoa2V5KTtcbiAgICB9LFxuXG4gICAga2V5czogKHNjb3BlOiB1bmtub3duLCB0YXJnZXQ6IHVua25vd24pOiBzdHJpbmdbXSA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShzdHJpbmdzLmtleXMoKSk7XG4gICAgfSxcblxuICAgIGxvZ1N0b3JhZ2U6ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2dTdG9yYWdlOiBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9LFxuXG4gICAgbWlncmF0ZTogKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgLy8gd2UgZG8gbm90IGltcGxlbWVudCB0aGlzXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfSxcblxuICAgIGlzTmV3OiAoc2NvcGU6IHVua25vd24pOiBib29sZWFuID0+IHtcbiAgICAgIC8vIHdlIGNyZWF0ZSBhIG5ldyBzdG9yYWdlIGZvciBldmVyeSBzZXNzaW9uLCB3ZSBkbyBub3QgcGVyc2lzdCBpdCxcbiAgICAgIC8vIHNvIHdlIHJldHVybiBgdHJ1ZWAuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZmx1c2g6IChyZWFzb24/OiB1bmtub3duKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAvLyB3ZSBkbyBub3QgaW1wbGVtZW50IHRoaXNcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9LFxuICB9O1xufVxuXG5sZXQgb3ZlcnJpZGVTZXJ2aWNlczogbW9uYWNvVHlwZXMuZWRpdG9yLklFZGl0b3JPdmVycmlkZVNlcnZpY2VzIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPdmVycmlkZVNlcnZpY2VzKCk6IG1vbmFjb1R5cGVzLmVkaXRvci5JRWRpdG9yT3ZlcnJpZGVTZXJ2aWNlcyB7XG4gIC8vIG9ubHkgaGF2ZSBvbmUgaW5zdGFuY2Ugb2YgdGhpcyBmb3IgZXZlcnkgcXVlcnkgZWRpdG9yXG4gIGlmIChvdmVycmlkZVNlcnZpY2VzID09PSBudWxsKSB7XG4gICAgb3ZlcnJpZGVTZXJ2aWNlcyA9IHtcbiAgICAgIHN0b3JhZ2VTZXJ2aWNlOiBtYWtlU3RvcmFnZVNlcnZpY2UoKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG92ZXJyaWRlU2VydmljZXM7XG59XG4iLCJpbXBvcnQgdHlwZSB7IFNpdHVhdGlvbiwgTGFiZWwgfSBmcm9tICcuL3NpdHVhdGlvbic7XG5pbXBvcnQgeyBOZXZlckNhc2VFcnJvciB9IGZyb20gJy4vdXRpbCc7XG4vLyBGSVhNRTogd2Ugc2hvdWxkIG5vdCBsb2FkIHRoaXMgZnJvbSB0aGUgXCJvdXRzaWRlXCIsIGJ1dCB3ZSBjYW5ub3QgZG8gdGhhdCB3aGlsZSB3ZSBoYXZlIHRoZSBcIm9sZFwiIHF1ZXJ5LWZpZWxkIHRvb1xuaW1wb3J0IHsgRlVOQ1RJT05TIH0gZnJvbSAnLi4vLi4vLi4vcHJvbXFsJztcbmltcG9ydCB7IGVzY2FwZUxhYmVsVmFsdWVJbkV4YWN0U2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9sYW5ndWFnZV91dGlscyc7XG5cbmV4cG9ydCB0eXBlIENvbXBsZXRpb25UeXBlID0gJ0hJU1RPUlknIHwgJ0ZVTkNUSU9OJyB8ICdNRVRSSUNfTkFNRScgfCAnRFVSQVRJT04nIHwgJ0xBQkVMX05BTUUnIHwgJ0xBQkVMX1ZBTFVFJztcblxudHlwZSBDb21wbGV0aW9uID0ge1xuICB0eXBlOiBDb21wbGV0aW9uVHlwZTtcbiAgbGFiZWw6IHN0cmluZztcbiAgaW5zZXJ0VGV4dDogc3RyaW5nO1xuICBkZXRhaWw/OiBzdHJpbmc7XG4gIGRvY3VtZW50YXRpb24/OiBzdHJpbmc7XG4gIHRyaWdnZXJPbkluc2VydD86IGJvb2xlYW47XG59O1xuXG50eXBlIE1ldHJpYyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBoZWxwOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIERhdGFQcm92aWRlciA9IHtcbiAgZ2V0SGlzdG9yeTogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG4gIGdldEFsbE1ldHJpY05hbWVzOiAoKSA9PiBQcm9taXNlPE1ldHJpY1tdPjtcbiAgZ2V0QWxsTGFiZWxOYW1lczogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG4gIGdldExhYmVsVmFsdWVzOiAobGFiZWxOYW1lOiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nW10+O1xuICBnZXRTZXJpZXM6IChzZWxlY3Rvcjogc3RyaW5nKSA9PiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj47XG59O1xuXG4vLyB3ZSBvcmRlciBpdGVtcyBsaWtlOiBoaXN0b3J5LCBmdW5jdGlvbnMsIG1ldHJpY3NcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsTWV0cmljTmFtZXNDb21wbGV0aW9ucyhkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlcik6IFByb21pc2U8Q29tcGxldGlvbltdPiB7XG4gIGNvbnN0IG1ldHJpY3MgPSBhd2FpdCBkYXRhUHJvdmlkZXIuZ2V0QWxsTWV0cmljTmFtZXMoKTtcbiAgcmV0dXJuIG1ldHJpY3MubWFwKChtZXRyaWMpID0+ICh7XG4gICAgdHlwZTogJ01FVFJJQ19OQU1FJyxcbiAgICBsYWJlbDogbWV0cmljLm5hbWUsXG4gICAgaW5zZXJ0VGV4dDogbWV0cmljLm5hbWUsXG4gICAgZGV0YWlsOiBgJHttZXRyaWMubmFtZX0gOiAke21ldHJpYy50eXBlfWAsXG4gICAgZG9jdW1lbnRhdGlvbjogbWV0cmljLmhlbHAsXG4gIH0pKTtcbn1cblxuY29uc3QgRlVOQ1RJT05fQ09NUExFVElPTlM6IENvbXBsZXRpb25bXSA9IEZVTkNUSU9OUy5tYXAoKGYpID0+ICh7XG4gIHR5cGU6ICdGVU5DVElPTicsXG4gIGxhYmVsOiBmLmxhYmVsLFxuICBpbnNlcnRUZXh0OiBmLmluc2VydFRleHQgPz8gJycsIC8vIGkgZG9uJ3Qga25vdyB3aGF0IHRvIGRvIHdoZW4gdGhpcyBpcyBudWxsaXNoLiBpdCBzaG91bGQgbm90IGJlLlxuICBkZXRhaWw6IGYuZGV0YWlsLFxuICBkb2N1bWVudGF0aW9uOiBmLmRvY3VtZW50YXRpb24sXG59KSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbEZ1bmN0aW9uc0FuZE1ldHJpY05hbWVzQ29tcGxldGlvbnMoZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIpOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICBjb25zdCBtZXRyaWNOYW1lcyA9IGF3YWl0IGdldEFsbE1ldHJpY05hbWVzQ29tcGxldGlvbnMoZGF0YVByb3ZpZGVyKTtcbiAgcmV0dXJuIFsuLi5GVU5DVElPTl9DT01QTEVUSU9OUywgLi4ubWV0cmljTmFtZXNdO1xufVxuXG5jb25zdCBEVVJBVElPTl9DT01QTEVUSU9OUzogQ29tcGxldGlvbltdID0gW1xuICAnJF9faW50ZXJ2YWwnLFxuICAnJF9fcmFuZ2UnLFxuICAnJF9fcmF0ZV9pbnRlcnZhbCcsXG4gICcxbScsXG4gICc1bScsXG4gICcxMG0nLFxuICAnMzBtJyxcbiAgJzFoJyxcbiAgJzFkJyxcbl0ubWFwKCh0ZXh0KSA9PiAoe1xuICB0eXBlOiAnRFVSQVRJT04nLFxuICBsYWJlbDogdGV4dCxcbiAgaW5zZXJ0VGV4dDogdGV4dCxcbn0pKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUNvbXBsZXRpb25zKGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyKTogUHJvbWlzZTxDb21wbGV0aW9uW10+IHtcbiAgLy8gZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUNvbXBsZXRpb25zKHF1ZXJ5SGlzdG9yeTogUHJvbUhpc3RvcnlJdGVtW10pOiBDb21wbGV0aW9uW10ge1xuICAvLyBOT1RFOiB0aGUgdHlwZXNjcmlwdCB0eXBlcyBhcmUgd3JvbmcuIGhpc3RvcnlJdGVtLnF1ZXJ5LmV4cHIgY2FuIGJlIHVuZGVmaW5lZFxuICBjb25zdCBhbGxIaXN0b3J5ID0gYXdhaXQgZGF0YVByb3ZpZGVyLmdldEhpc3RvcnkoKTtcbiAgLy8gRklYTUU6IGZpbmQgYSBiZXR0ZXIgaGlzdG9yeS1saW1pdFxuICByZXR1cm4gYWxsSGlzdG9yeS5zbGljZSgwLCAxMCkubWFwKChleHByKSA9PiAoe1xuICAgIHR5cGU6ICdISVNUT1JZJyxcbiAgICBsYWJlbDogZXhwcixcbiAgICBpbnNlcnRUZXh0OiBleHByLFxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VTZWxlY3RvcihtZXRyaWNOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsIGxhYmVsczogTGFiZWxbXSk6IHN0cmluZyB7XG4gIGNvbnN0IGFsbExhYmVscyA9IFsuLi5sYWJlbHNdO1xuXG4gIC8vIHdlIHRyYW5zZm9ybSB0aGUgbWV0cmljTmFtZSB0byBhIGxhYmVsLCBpZiBpdCBleGlzdHNcbiAgaWYgKG1ldHJpY05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGFsbExhYmVscy5wdXNoKHsgbmFtZTogJ19fbmFtZV9fJywgdmFsdWU6IG1ldHJpY05hbWUsIG9wOiAnPScgfSk7XG4gIH1cblxuICBjb25zdCBhbGxMYWJlbFRleHRzID0gYWxsTGFiZWxzLm1hcChcbiAgICAobGFiZWwpID0+IGAke2xhYmVsLm5hbWV9JHtsYWJlbC5vcH1cIiR7ZXNjYXBlTGFiZWxWYWx1ZUluRXhhY3RTZWxlY3RvcihsYWJlbC52YWx1ZSl9XCJgXG4gICk7XG5cbiAgcmV0dXJuIGB7JHthbGxMYWJlbFRleHRzLmpvaW4oJywnKX19YDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFiZWxOYW1lcyhcbiAgbWV0cmljOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIG90aGVyTGFiZWxzOiBMYWJlbFtdLFxuICBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlclxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBpZiAobWV0cmljID09PSB1bmRlZmluZWQgJiYgb3RoZXJMYWJlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gZmlsdGVyaW5nLCB3ZSBoYXZlIHRvIHVzZSBhIHNwZWNpYWwgZW5kcG9pbnRcbiAgICByZXR1cm4gZGF0YVByb3ZpZGVyLmdldEFsbExhYmVsTmFtZXMoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IG1ha2VTZWxlY3RvcihtZXRyaWMsIG90aGVyTGFiZWxzKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGF0YVByb3ZpZGVyLmdldFNlcmllcyhzZWxlY3Rvcik7XG4gICAgY29uc3QgcG9zc2libGVMYWJlbE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YSk7IC8vIGFsbCBuYW1lcyBmcm9tIHByb21ldGhldXNcbiAgICBjb25zdCB1c2VkTGFiZWxOYW1lcyA9IG5ldyBTZXQob3RoZXJMYWJlbHMubWFwKChsKSA9PiBsLm5hbWUpKTsgLy8gbmFtZXMgdXNlZCBpbiB0aGUgcXVlcnlcbiAgICByZXR1cm4gcG9zc2libGVMYWJlbE5hbWVzLmZpbHRlcigobCkgPT4gIXVzZWRMYWJlbE5hbWVzLmhhcyhsKSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFiZWxOYW1lc0ZvckNvbXBsZXRpb25zKFxuICBtZXRyaWM6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgc3VmZml4OiBzdHJpbmcsXG4gIHRyaWdnZXJPbkluc2VydDogYm9vbGVhbixcbiAgb3RoZXJMYWJlbHM6IExhYmVsW10sXG4gIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyXG4pOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICBjb25zdCBsYWJlbE5hbWVzID0gYXdhaXQgZ2V0TGFiZWxOYW1lcyhtZXRyaWMsIG90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xuICByZXR1cm4gbGFiZWxOYW1lcy5tYXAoKHRleHQpID0+ICh7XG4gICAgdHlwZTogJ0xBQkVMX05BTUUnLFxuICAgIGxhYmVsOiB0ZXh0LFxuICAgIGluc2VydFRleHQ6IGAke3RleHR9JHtzdWZmaXh9YCxcbiAgICB0cmlnZ2VyT25JbnNlcnQsXG4gIH0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFiZWxOYW1lc0ZvclNlbGVjdG9yQ29tcGxldGlvbnMoXG4gIG1ldHJpYzogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBvdGhlckxhYmVsczogTGFiZWxbXSxcbiAgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXJcbik6IFByb21pc2U8Q29tcGxldGlvbltdPiB7XG4gIHJldHVybiBnZXRMYWJlbE5hbWVzRm9yQ29tcGxldGlvbnMobWV0cmljLCAnPScsIHRydWUsIG90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFiZWxOYW1lc0ZvckJ5Q29tcGxldGlvbnMoXG4gIG1ldHJpYzogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBvdGhlckxhYmVsczogTGFiZWxbXSxcbiAgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXJcbik6IFByb21pc2U8Q29tcGxldGlvbltdPiB7XG4gIHJldHVybiBnZXRMYWJlbE5hbWVzRm9yQ29tcGxldGlvbnMobWV0cmljLCAnJywgZmFsc2UsIG90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRMYWJlbFZhbHVlcyhcbiAgbWV0cmljOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGxhYmVsTmFtZTogc3RyaW5nLFxuICBvdGhlckxhYmVsczogTGFiZWxbXSxcbiAgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXJcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgaWYgKG1ldHJpYyA9PT0gdW5kZWZpbmVkICYmIG90aGVyTGFiZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGZpbHRlcmluZywgd2UgaGF2ZSB0byB1c2UgYSBzcGVjaWFsIGVuZHBvaW50XG4gICAgcmV0dXJuIGRhdGFQcm92aWRlci5nZXRMYWJlbFZhbHVlcyhsYWJlbE5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gbWFrZVNlbGVjdG9yKG1ldHJpYywgb3RoZXJMYWJlbHMpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYXRhUHJvdmlkZXIuZ2V0U2VyaWVzKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZGF0YVtsYWJlbE5hbWVdID8/IFtdO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExhYmVsVmFsdWVzRm9yTWV0cmljQ29tcGxldGlvbnMoXG4gIG1ldHJpYzogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBsYWJlbE5hbWU6IHN0cmluZyxcbiAgYmV0d2VlblF1b3RlczogYm9vbGVhbixcbiAgb3RoZXJMYWJlbHM6IExhYmVsW10sXG4gIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyXG4pOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBnZXRMYWJlbFZhbHVlcyhtZXRyaWMsIGxhYmVsTmFtZSwgb3RoZXJMYWJlbHMsIGRhdGFQcm92aWRlcik7XG4gIHJldHVybiB2YWx1ZXMubWFwKCh0ZXh0KSA9PiAoe1xuICAgIHR5cGU6ICdMQUJFTF9WQUxVRScsXG4gICAgbGFiZWw6IHRleHQsXG4gICAgaW5zZXJ0VGV4dDogYmV0d2VlblF1b3RlcyA/IHRleHQgOiBgXCIke3RleHR9XCJgLCAvLyBGSVhNRTogZXNjYXBpbmcgc3RyYW5nZSBjaGFyYWN0ZXJzP1xuICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb21wbGV0aW9ucyhzaXR1YXRpb246IFNpdHVhdGlvbiwgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIpOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICBzd2l0Y2ggKHNpdHVhdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnSU5fRFVSQVRJT04nOlxuICAgICAgcmV0dXJuIERVUkFUSU9OX0NPTVBMRVRJT05TO1xuICAgIGNhc2UgJ0lOX0ZVTkNUSU9OJzpcbiAgICAgIHJldHVybiBnZXRBbGxGdW5jdGlvbnNBbmRNZXRyaWNOYW1lc0NvbXBsZXRpb25zKGRhdGFQcm92aWRlcik7XG4gICAgY2FzZSAnQVRfUk9PVCc6IHtcbiAgICAgIHJldHVybiBnZXRBbGxGdW5jdGlvbnNBbmRNZXRyaWNOYW1lc0NvbXBsZXRpb25zKGRhdGFQcm92aWRlcik7XG4gICAgfVxuICAgIGNhc2UgJ0VNUFRZJzoge1xuICAgICAgY29uc3QgbWV0cmljTmFtZXMgPSBhd2FpdCBnZXRBbGxNZXRyaWNOYW1lc0NvbXBsZXRpb25zKGRhdGFQcm92aWRlcik7XG4gICAgICBjb25zdCBoaXN0b3J5Q29tcGxldGlvbnMgPSBhd2FpdCBnZXRBbGxIaXN0b3J5Q29tcGxldGlvbnMoZGF0YVByb3ZpZGVyKTtcbiAgICAgIHJldHVybiBbLi4uaGlzdG9yeUNvbXBsZXRpb25zLCAuLi5GVU5DVElPTl9DT01QTEVUSU9OUywgLi4ubWV0cmljTmFtZXNdO1xuICAgIH1cbiAgICBjYXNlICdJTl9MQUJFTF9TRUxFQ1RPUl9OT19MQUJFTF9OQU1FJzpcbiAgICAgIHJldHVybiBnZXRMYWJlbE5hbWVzRm9yU2VsZWN0b3JDb21wbGV0aW9ucyhzaXR1YXRpb24ubWV0cmljTmFtZSwgc2l0dWF0aW9uLm90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xuICAgIGNhc2UgJ0lOX0dST1VQSU5HJzpcbiAgICAgIHJldHVybiBnZXRMYWJlbE5hbWVzRm9yQnlDb21wbGV0aW9ucyhzaXR1YXRpb24ubWV0cmljTmFtZSwgc2l0dWF0aW9uLm90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xuICAgIGNhc2UgJ0lOX0xBQkVMX1NFTEVDVE9SX1dJVEhfTEFCRUxfTkFNRSc6XG4gICAgICByZXR1cm4gZ2V0TGFiZWxWYWx1ZXNGb3JNZXRyaWNDb21wbGV0aW9ucyhcbiAgICAgICAgc2l0dWF0aW9uLm1ldHJpY05hbWUsXG4gICAgICAgIHNpdHVhdGlvbi5sYWJlbE5hbWUsXG4gICAgICAgIHNpdHVhdGlvbi5iZXR3ZWVuUXVvdGVzLFxuICAgICAgICBzaXR1YXRpb24ub3RoZXJMYWJlbHMsXG4gICAgICAgIGRhdGFQcm92aWRlclxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IE5ldmVyQ2FzZUVycm9yKHNpdHVhdGlvbik7XG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTW9uYWNvLCBtb25hY29UeXBlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZ2V0U2l0dWF0aW9uIH0gZnJvbSAnLi9zaXR1YXRpb24nO1xuaW1wb3J0IHsgZ2V0Q29tcGxldGlvbnMsIERhdGFQcm92aWRlciwgQ29tcGxldGlvblR5cGUgfSBmcm9tICcuL2NvbXBsZXRpb25zJztcbmltcG9ydCB7IE5ldmVyQ2FzZUVycm9yIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1Z2dlc3RPcHRpb25zKCk6IG1vbmFjb1R5cGVzLmVkaXRvci5JU3VnZ2VzdE9wdGlvbnMge1xuICByZXR1cm4ge1xuICAgIC8vIG1vbmFjby1lZGl0b3Igc29tZXRpbWVzIHByb3ZpZGVzIHN1Z2dlc3Rpb25zIGF1dG9tYXRpY2FsbHksIGkgYW0gbm90XG4gICAgLy8gc3VyZSBiYXNlZCBvbiB3aGF0LCBzZWVtcyB0byBiZSBieSBhbmFseXppbmcgdGhlIHdvcmRzIGFscmVhZHlcbiAgICAvLyB3cml0dGVuLlxuICAgIC8vIHRvIHRyeSBpdCBvdXQ6XG4gICAgLy8gLSBlbnRlciBgZ29fZ29yb3V0aW5lc3tqb2J+YFxuICAgIC8vIC0gaGF2ZSB0aGUgY3Vyc29yIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZ1xuICAgIC8vIC0gcHJlc3MgY3RybC1lbnRlclxuICAgIC8vIC0geW91IHdpbGwgZ2V0IHR3byBzdWdnZXN0aW9uc1xuICAgIC8vIHRob3NlIHdlcmUgbm90IHByb3ZpZGVkIGJ5IGdyYWZhbmEsIHRoZXkgYXJlIG9mZmVyZWQgYXV0b21hdGljYWxseS5cbiAgICAvLyBpIHdhbnQgdG8gcmVtb3ZlIHRob3NlLiB0aGUgb25seSB3YXkgaSBmb3VuZCBpczpcbiAgICAvLyAtIGV2ZXJ5IHN1Z2dlc3Rpb24taXRlbSBoYXMgYSBga2luZGAgYXR0cmlidXRlLFxuICAgIC8vICAgdGhhdCBjb250cm9scyB0aGUgaWNvbiB0byB0aGUgbGVmdCBvZiB0aGUgc3VnZ2VzdGlvbi5cbiAgICAvLyAtIGl0ZW1zIGF1dG8tZ2VuZXJhdGVkIGJ5IG1vbmFjbyBoYXZlIGBraW5kYCBzZXQgdG8gYHRleHRgLlxuICAgIC8vIC0gd2UgbWFrZSBzdXJlIGdyYWZhbmEtcHJvdmlkZWQgc3VnZ2VzdGlvbnMgZG8gbm90IGhhdmUgYGtpbmRgIHNldCB0byBgdGV4dGAuXG4gICAgLy8gLSBhbmQgdGhlbiB3ZSB0ZWxsIG1vbmFjbyBub3QgdG8gc2hvdyBzdWdnZXN0aW9ucyBvZiBraW5kIGB0ZXh0YFxuICAgIHNob3dXb3JkczogZmFsc2UsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldE1vbmFjb0NvbXBsZXRpb25JdGVtS2luZCh0eXBlOiBDb21wbGV0aW9uVHlwZSwgbW9uYWNvOiBNb25hY28pOiBtb25hY29UeXBlcy5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnRFVSQVRJT04nOlxuICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlVuaXQ7XG4gICAgY2FzZSAnRlVOQ1RJT04nOlxuICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlZhcmlhYmxlO1xuICAgIGNhc2UgJ0hJU1RPUlknOlxuICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlNuaXBwZXQ7XG4gICAgY2FzZSAnTEFCRUxfTkFNRSc6XG4gICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRW51bTtcbiAgICBjYXNlICdMQUJFTF9WQUxVRSc6XG4gICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRW51bU1lbWJlcjtcbiAgICBjYXNlICdNRVRSSUNfTkFNRSc6XG4gICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuQ29uc3RydWN0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBOZXZlckNhc2VFcnJvcih0eXBlKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBsZXRpb25Qcm92aWRlcihcbiAgbW9uYWNvOiBNb25hY28sXG4gIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyXG4pOiBtb25hY29UeXBlcy5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1Qcm92aWRlciB7XG4gIGNvbnN0IHByb3ZpZGVDb21wbGV0aW9uSXRlbXMgPSAoXG4gICAgbW9kZWw6IG1vbmFjb1R5cGVzLmVkaXRvci5JVGV4dE1vZGVsLFxuICAgIHBvc2l0aW9uOiBtb25hY29UeXBlcy5Qb3NpdGlvblxuICApOiBtb25hY29UeXBlcy5sYW5ndWFnZXMuUHJvdmlkZXJSZXN1bHQ8bW9uYWNvVHlwZXMubGFuZ3VhZ2VzLkNvbXBsZXRpb25MaXN0PiA9PiB7XG4gICAgY29uc3Qgd29yZCA9IG1vZGVsLmdldFdvcmRBdFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICBjb25zdCByYW5nZSA9XG4gICAgICB3b3JkICE9IG51bGxcbiAgICAgICAgPyBtb25hY28uUmFuZ2UubGlmdCh7XG4gICAgICAgICAgICBzdGFydExpbmVOdW1iZXI6IHBvc2l0aW9uLmxpbmVOdW1iZXIsXG4gICAgICAgICAgICBlbmRMaW5lTnVtYmVyOiBwb3NpdGlvbi5saW5lTnVtYmVyLFxuICAgICAgICAgICAgc3RhcnRDb2x1bW46IHdvcmQuc3RhcnRDb2x1bW4sXG4gICAgICAgICAgICBlbmRDb2x1bW46IHdvcmQuZW5kQ29sdW1uLFxuICAgICAgICAgIH0pXG4gICAgICAgIDogbW9uYWNvLlJhbmdlLmZyb21Qb3NpdGlvbnMocG9zaXRpb24pO1xuICAgIC8vIGRvY3VtZW50YXRpb24gc2F5cyBgcG9zaXRpb25gIHdpbGwgYmUgXCJhZGp1c3RlZFwiIGluIGBnZXRPZmZzZXRBdGBcbiAgICAvLyBpIGRvbid0IGtub3cgd2hhdCB0aGF0IG1lYW5zLCB0byBiZSBzdXJlIGkgY2xvbmUgaXRcbiAgICBjb25zdCBwb3NpdGlvbkNsb25lID0ge1xuICAgICAgY29sdW1uOiBwb3NpdGlvbi5jb2x1bW4sXG4gICAgICBsaW5lTnVtYmVyOiBwb3NpdGlvbi5saW5lTnVtYmVyLFxuICAgIH07XG4gICAgY29uc3Qgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb25DbG9uZSk7XG4gICAgY29uc3Qgc2l0dWF0aW9uID0gZ2V0U2l0dWF0aW9uKG1vZGVsLmdldFZhbHVlKCksIG9mZnNldCk7XG4gICAgY29uc3QgY29tcGxldGlvbnNQcm9taXNlID0gc2l0dWF0aW9uICE9IG51bGwgPyBnZXRDb21wbGV0aW9ucyhzaXR1YXRpb24sIGRhdGFQcm92aWRlcikgOiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIHJldHVybiBjb21wbGV0aW9uc1Byb21pc2UudGhlbigoaXRlbXMpID0+IHtcbiAgICAgIC8vIG1vbmFjbyBieS1kZWZhdWx0IGFscGhhYmV0aWNhbGx5IG9yZGVycyB0aGUgaXRlbXMuXG4gICAgICAvLyB0byBzdG9wIGl0LCB3ZSB1c2UgYSBudW1iZXItYXMtc3RyaW5nIHNvcnRrZXksXG4gICAgICAvLyBzbyB0aGF0IG1vbmFjbyBrZWVwcyB0aGUgb3JkZXIgd2UgdXNlXG4gICAgICBjb25zdCBtYXhJbmRleERpZ2l0cyA9IGl0ZW1zLmxlbmd0aC50b1N0cmluZygpLmxlbmd0aDtcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zOiBtb25hY29UeXBlcy5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1bXSA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gICAgICAgIGtpbmQ6IGdldE1vbmFjb0NvbXBsZXRpb25JdGVtS2luZChpdGVtLnR5cGUsIG1vbmFjbyksXG4gICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICBpbnNlcnRUZXh0OiBpdGVtLmluc2VydFRleHQsXG4gICAgICAgIGRldGFpbDogaXRlbS5kZXRhaWwsXG4gICAgICAgIGRvY3VtZW50YXRpb246IGl0ZW0uZG9jdW1lbnRhdGlvbixcbiAgICAgICAgc29ydFRleHQ6IGluZGV4LnRvU3RyaW5nKCkucGFkU3RhcnQobWF4SW5kZXhEaWdpdHMsICcwJyksIC8vIHRvIGZvcmNlIHRoZSBvcmRlciB3ZSBoYXZlXG4gICAgICAgIHJhbmdlLFxuICAgICAgICBjb21tYW5kOiBpdGVtLnRyaWdnZXJPbkluc2VydFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBpZDogJ2VkaXRvci5hY3Rpb24udHJpZ2dlclN1Z2dlc3QnLFxuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9ucyB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdHJpZ2dlckNoYXJhY3RlcnM6IFsneycsICcsJywgJ1snLCAnKCcsICc9JywgJ34nLCAnICcsICdcIiddLFxuICAgIHByb3ZpZGVDb21wbGV0aW9uSXRlbXMsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBwYXJzZXIgfSBmcm9tICdsZXplci1wcm9tcWwnO1xuaW1wb3J0IHR5cGUgeyBUcmVlLCBTeW50YXhOb2RlIH0gZnJvbSAnQGxlemVyL2NvbW1vbic7XG5pbXBvcnQgeyBOZXZlckNhc2VFcnJvciB9IGZyb20gJy4vdXRpbCc7XG5cbnR5cGUgRGlyZWN0aW9uID0gJ3BhcmVudCcgfCAnZmlyc3RDaGlsZCcgfCAnbGFzdENoaWxkJyB8ICduZXh0U2libGluZyc7XG50eXBlIE5vZGVUeXBlTmFtZSA9XG4gIHwgJ+KaoCcgLy8gdGhpcyBpcyB1c2VkIGFzIGVycm9yLW5hbWVcbiAgfCAnQWdncmVnYXRlRXhwcidcbiAgfCAnQWdncmVnYXRlTW9kaWZpZXInXG4gIHwgJ0Z1bmN0aW9uQ2FsbEJvZHknXG4gIHwgJ0dyb3VwaW5nTGFiZWxzJ1xuICB8ICdJZGVudGlmaWVyJ1xuICB8ICdMYWJlbE1hdGNoZXInXG4gIHwgJ0xhYmVsTWF0Y2hlcnMnXG4gIHwgJ0xhYmVsTWF0Y2hMaXN0J1xuICB8ICdMYWJlbE5hbWUnXG4gIHwgJ01ldHJpY0lkZW50aWZpZXInXG4gIHwgJ1Byb21RTCdcbiAgfCAnU3RyaW5nTGl0ZXJhbCdcbiAgfCAnVmVjdG9yU2VsZWN0b3InXG4gIHwgJ01hdHJpeFNlbGVjdG9yJ1xuICB8ICdNYXRjaE9wJ1xuICB8ICdFcWxTaW5nbGUnXG4gIHwgJ05lcSdcbiAgfCAnRXFsUmVnZXgnXG4gIHwgJ05lcVJlZ2V4JztcblxudHlwZSBQYXRoID0gQXJyYXk8W0RpcmVjdGlvbiwgTm9kZVR5cGVOYW1lXT47XG5cbmZ1bmN0aW9uIG1vdmUobm9kZTogU3ludGF4Tm9kZSwgZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiBTeW50YXhOb2RlIHwgbnVsbCB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSAncGFyZW50JzpcbiAgICAgIHJldHVybiBub2RlLnBhcmVudDtcbiAgICBjYXNlICdmaXJzdENoaWxkJzpcbiAgICAgIHJldHVybiBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgY2FzZSAnbGFzdENoaWxkJzpcbiAgICAgIHJldHVybiBub2RlLmxhc3RDaGlsZDtcbiAgICBjYXNlICduZXh0U2libGluZyc6XG4gICAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IE5ldmVyQ2FzZUVycm9yKGRpcmVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2Fsayhub2RlOiBTeW50YXhOb2RlLCBwYXRoOiBQYXRoKTogU3ludGF4Tm9kZSB8IG51bGwge1xuICBsZXQgY3VycmVudDogU3ludGF4Tm9kZSB8IG51bGwgPSBub2RlO1xuICBmb3IgKGNvbnN0IFtkaXJlY3Rpb24sIGV4cGVjdGVkVHlwZV0gb2YgcGF0aCkge1xuICAgIGN1cnJlbnQgPSBtb3ZlKGN1cnJlbnQsIGRpcmVjdGlvbik7XG4gICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGNvdWxkIG5vdCBtb3ZlIGluIHRoZSBkaXJlY3Rpb24sIHdlIHN0b3BcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoY3VycmVudC50eXBlLm5hbWUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgLy8gdGhlIHJlYWNoZWQgbm9kZSBoYXMgd3JvbmcgdHlwZSwgd2Ugc3RvcFxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiBjdXJyZW50O1xufVxuXG5mdW5jdGlvbiBnZXROb2RlVGV4dChub2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdGV4dC5zbGljZShub2RlLmZyb20sIG5vZGUudG8pO1xufVxuXG5mdW5jdGlvbiBwYXJzZVByb21RTFN0cmluZ0xpdGVyYWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gaWYgaXQgaXMgYSBzdHJpbmctbGl0ZXJhbCwgaXQgaXMgaW5zaWRlIHF1b3RlcyBvZiBzb21lIGtpbmRcbiAgY29uc3QgaW5zaWRlID0gdGV4dC5zbGljZSgxLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuXG4gIC8vIEZJWE1FOiBzdXBwb3J0IGh0dHBzOi8vcHJvbWV0aGV1cy5pby9kb2NzL3Byb21ldGhldXMvbGF0ZXN0L3F1ZXJ5aW5nL2Jhc2ljcy8jc3RyaW5nLWxpdGVyYWxzXG4gIC8vIEZJWE1FOiBtYXliZSBjaGVjayBvdGhlciBwcm9tcWwgY29kZSwgaWYgYWxsIGlzIHN1cHBvcnRlZCBvciBub3RcblxuICAvLyBmb3Igbm93IHdlIGRvIG9ubHkgc29tZSB2ZXJ5IHNpbXBsZSB1bi1lc2NhcGluZ1xuXG4gIC8vIHdlIHN0YXJ0IHdpdGggZG91YmxlLXF1b3Rlc1xuICBpZiAodGV4dC5zdGFydHNXaXRoKCdcIicpICYmIHRleHQuZW5kc1dpdGgoJ1wiJykpIHtcbiAgICAvLyBOT1RFOiB0aGlzIGlzIG5vdCAxMDAlIHBlcmZlY3QsIHdlIG9ubHkgdW5lc2NhcGUgdGhlIGRvdWJsZS1xdW90ZSxcbiAgICAvLyB0aGVyZSBtaWdodCBiZSBvdGhlciBjaGFyYWN0ZXJzIHRvb1xuICAgIHJldHVybiBpbnNpZGUucmVwbGFjZSgvXFxcXFwiLywgJ1wiJyk7XG4gIH1cblxuICAvLyB0aGVuIHNpbmdsZS1xdW90ZVxuICBpZiAodGV4dC5zdGFydHNXaXRoKFwiJ1wiKSAmJiB0ZXh0LmVuZHNXaXRoKFwiJ1wiKSkge1xuICAgIC8vIE5PVEU6IHRoaXMgaXMgbm90IDEwMCUgcGVyZmVjdCwgd2Ugb25seSB1bmVzY2FwZSB0aGUgc2luZ2xlLXF1b3RlLFxuICAgIC8vIHRoZXJlIG1pZ2h0IGJlIG90aGVyIGNoYXJhY3RlcnMgdG9vXG4gICAgcmV0dXJuIGluc2lkZS5yZXBsYWNlKC9cXFxcJy8sIFwiJ1wiKTtcbiAgfVxuXG4gIC8vIHRoZW4gYmFja3RpY2tzXG4gIGlmICh0ZXh0LnN0YXJ0c1dpdGgoJ2AnKSAmJiB0ZXh0LmVuZHNXaXRoKCdgJykpIHtcbiAgICByZXR1cm4gaW5zaWRlO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdGSVhNRTogaW52YWxpZCBzdHJpbmcgbGl0ZXJhbCcpO1xufVxuXG50eXBlIExhYmVsT3BlcmF0b3IgPSAnPScgfCAnIT0nIHwgJz1+JyB8ICchfic7XG5cbmV4cG9ydCB0eXBlIExhYmVsID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9wOiBMYWJlbE9wZXJhdG9yO1xufTtcblxuZXhwb3J0IHR5cGUgU2l0dWF0aW9uID1cbiAgfCB7XG4gICAgICB0eXBlOiAnSU5fRlVOQ1RJT04nO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiAnQVRfUk9PVCc7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdFTVBUWSc7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdJTl9EVVJBVElPTic7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdJTl9MQUJFTF9TRUxFQ1RPUl9OT19MQUJFTF9OQU1FJztcbiAgICAgIG1ldHJpY05hbWU/OiBzdHJpbmc7XG4gICAgICBvdGhlckxhYmVsczogTGFiZWxbXTtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ0lOX0dST1VQSU5HJztcbiAgICAgIG1ldHJpY05hbWU6IHN0cmluZztcbiAgICAgIG90aGVyTGFiZWxzOiBMYWJlbFtdO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiAnSU5fTEFCRUxfU0VMRUNUT1JfV0lUSF9MQUJFTF9OQU1FJztcbiAgICAgIG1ldHJpY05hbWU/OiBzdHJpbmc7XG4gICAgICBsYWJlbE5hbWU6IHN0cmluZztcbiAgICAgIGJldHdlZW5RdW90ZXM6IGJvb2xlYW47XG4gICAgICBvdGhlckxhYmVsczogTGFiZWxbXTtcbiAgICB9O1xuXG50eXBlIFJlc29sdmVyID0ge1xuICBwYXRoOiBOb2RlVHlwZU5hbWVbXTtcbiAgZnVuOiAobm9kZTogU3ludGF4Tm9kZSwgdGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcikgPT4gU2l0dWF0aW9uIHwgbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGlzUGF0aE1hdGNoKHJlc29sdmVyUGF0aDogc3RyaW5nW10sIGN1cnNvclBhdGg6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gIHJldHVybiByZXNvbHZlclBhdGguZXZlcnkoKGl0ZW0sIGluZGV4KSA9PiBpdGVtID09PSBjdXJzb3JQYXRoW2luZGV4XSk7XG59XG5cbmNvbnN0IEVSUk9SX05PREVfTkFNRTogTm9kZVR5cGVOYW1lID0gJ+KaoCc7IC8vIHRoaXMgaXMgdXNlZCBhcyBlcnJvci1uYW1lXG5cbmNvbnN0IFJFU09MVkVSUzogUmVzb2x2ZXJbXSA9IFtcbiAge1xuICAgIHBhdGg6IFsnTGFiZWxNYXRjaGVycycsICdWZWN0b3JTZWxlY3RvciddLFxuICAgIGZ1bjogcmVzb2x2ZUxhYmVsS2V5c1dpdGhFcXVhbHMsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBbJ1Byb21RTCddLFxuICAgIGZ1bjogcmVzb2x2ZVRvcExldmVsLFxuICB9LFxuICB7XG4gICAgcGF0aDogWydGdW5jdGlvbkNhbGxCb2R5J10sXG4gICAgZnVuOiByZXNvbHZlSW5GdW5jdGlvbixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFsnU3RyaW5nTGl0ZXJhbCcsICdMYWJlbE1hdGNoZXInXSxcbiAgICBmdW46IHJlc29sdmVMYWJlbE1hdGNoZXIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBbRVJST1JfTk9ERV9OQU1FLCAnTGFiZWxNYXRjaGVyJ10sXG4gICAgZnVuOiByZXNvbHZlTGFiZWxNYXRjaGVyLFxuICB9LFxuICB7XG4gICAgcGF0aDogW0VSUk9SX05PREVfTkFNRSwgJ01hdHJpeFNlbGVjdG9yJ10sXG4gICAgZnVuOiByZXNvbHZlRHVyYXRpb25zLFxuICB9LFxuICB7XG4gICAgcGF0aDogWydHcm91cGluZ0xhYmVscyddLFxuICAgIGZ1bjogcmVzb2x2ZUxhYmVsc0Zvckdyb3VwaW5nLFxuICB9LFxuXTtcblxuY29uc3QgTEFCRUxfT1BfTUFQID0gbmV3IE1hcDxzdHJpbmcsIExhYmVsT3BlcmF0b3I+KFtcbiAgWydFcWxTaW5nbGUnLCAnPSddLFxuICBbJ0VxbFJlZ2V4JywgJz1+J10sXG4gIFsnTmVxJywgJyE9J10sXG4gIFsnTmVxUmVnZXgnLCAnIX4nXSxcbl0pO1xuXG5mdW5jdGlvbiBnZXRMYWJlbE9wKG9wTm9kZTogU3ludGF4Tm9kZSk6IExhYmVsT3BlcmF0b3IgfCBudWxsIHtcbiAgY29uc3Qgb3BDaGlsZCA9IG9wTm9kZS5maXJzdENoaWxkO1xuICBpZiAob3BDaGlsZCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIExBQkVMX09QX01BUC5nZXQob3BDaGlsZC5uYW1lKSA/PyBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRMYWJlbChsYWJlbE1hdGNoZXJOb2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcpOiBMYWJlbCB8IG51bGwge1xuICBpZiAobGFiZWxNYXRjaGVyTm9kZS50eXBlLm5hbWUgIT09ICdMYWJlbE1hdGNoZXInKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBuYW1lTm9kZSA9IHdhbGsobGFiZWxNYXRjaGVyTm9kZSwgW1snZmlyc3RDaGlsZCcsICdMYWJlbE5hbWUnXV0pO1xuXG4gIGlmIChuYW1lTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgb3BOb2RlID0gd2FsayhuYW1lTm9kZSwgW1snbmV4dFNpYmxpbmcnLCAnTWF0Y2hPcCddXSk7XG4gIGlmIChvcE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG9wID0gZ2V0TGFiZWxPcChvcE5vZGUpO1xuICBpZiAob3AgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlTm9kZSA9IHdhbGsobGFiZWxNYXRjaGVyTm9kZSwgW1snbGFzdENoaWxkJywgJ1N0cmluZ0xpdGVyYWwnXV0pO1xuXG4gIGlmICh2YWx1ZU5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBnZXROb2RlVGV4dChuYW1lTm9kZSwgdGV4dCk7XG4gIGNvbnN0IHZhbHVlID0gcGFyc2VQcm9tUUxTdHJpbmdMaXRlcmFsKGdldE5vZGVUZXh0KHZhbHVlTm9kZSwgdGV4dCkpO1xuXG4gIHJldHVybiB7IG5hbWUsIHZhbHVlLCBvcCB9O1xufVxuZnVuY3Rpb24gZ2V0TGFiZWxzKGxhYmVsTWF0Y2hlcnNOb2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcpOiBMYWJlbFtdIHtcbiAgaWYgKGxhYmVsTWF0Y2hlcnNOb2RlLnR5cGUubmFtZSAhPT0gJ0xhYmVsTWF0Y2hlcnMnKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgbGV0IGxpc3ROb2RlOiBTeW50YXhOb2RlIHwgbnVsbCA9IHdhbGsobGFiZWxNYXRjaGVyc05vZGUsIFtbJ2ZpcnN0Q2hpbGQnLCAnTGFiZWxNYXRjaExpc3QnXV0pO1xuXG4gIGNvbnN0IGxhYmVsczogTGFiZWxbXSA9IFtdO1xuXG4gIHdoaWxlIChsaXN0Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1hdGNoZXJOb2RlID0gd2FsayhsaXN0Tm9kZSwgW1snbGFzdENoaWxkJywgJ0xhYmVsTWF0Y2hlciddXSk7XG4gICAgaWYgKG1hdGNoZXJOb2RlID09PSBudWxsKSB7XG4gICAgICAvLyB1bmV4cGVjdGVkLCB3ZSBzdG9wXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgbGFiZWwgPSBnZXRMYWJlbChtYXRjaGVyTm9kZSwgdGV4dCk7XG4gICAgaWYgKGxhYmVsICE9PSBudWxsKSB7XG4gICAgICBsYWJlbHMucHVzaChsYWJlbCk7XG4gICAgfVxuXG4gICAgLy8gdGhlcmUgbWlnaHQgYmUgbW9yZSBsYWJlbHNcbiAgICBsaXN0Tm9kZSA9IHdhbGsobGlzdE5vZGUsIFtbJ2ZpcnN0Q2hpbGQnLCAnTGFiZWxNYXRjaExpc3QnXV0pO1xuICB9XG5cbiAgLy8gb3VyIGxhYmVscy1saXN0IGlzIGxhc3QtZmlyc3QsIHNvIHdlIHJldmVyc2UgaXRcbiAgbGFiZWxzLnJldmVyc2UoKTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5mdW5jdGlvbiBnZXROb2RlQ2hpbGRyZW4obm9kZTogU3ludGF4Tm9kZSk6IFN5bnRheE5vZGVbXSB7XG4gIGxldCBjaGlsZDogU3ludGF4Tm9kZSB8IG51bGwgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gIGNvbnN0IGNoaWxkcmVuOiBTeW50YXhOb2RlW10gPSBbXTtcbiAgd2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XG4gICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgfVxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVJblN1YnRyZWUobm9kZTogU3ludGF4Tm9kZSwgdHlwZU5hbWU6IE5vZGVUeXBlTmFtZSk6IFN5bnRheE5vZGUgfCBudWxsIHtcbiAgLy8gZmlyc3Qgd2UgdHJ5IHRoZSBjdXJyZW50IG5vZGVcbiAgaWYgKG5vZGUudHlwZS5uYW1lID09PSB0eXBlTmFtZSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gdGhlbiB3ZSB0cnkgdGhlIGNoaWxkcmVuXG4gIGNvbnN0IGNoaWxkcmVuID0gZ2V0Tm9kZUNoaWxkcmVuKG5vZGUpO1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgY29uc3QgbiA9IGdldE5vZGVJblN1YnRyZWUoY2hpbGQsIHR5cGVOYW1lKTtcbiAgICBpZiAobiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMYWJlbHNGb3JHcm91cGluZyhub2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcsIHBvczogbnVtYmVyKTogU2l0dWF0aW9uIHwgbnVsbCB7XG4gIGNvbnN0IGFnZ3JFeHBOb2RlID0gd2Fsayhub2RlLCBbXG4gICAgWydwYXJlbnQnLCAnQWdncmVnYXRlTW9kaWZpZXInXSxcbiAgICBbJ3BhcmVudCcsICdBZ2dyZWdhdGVFeHByJ10sXG4gIF0pO1xuICBpZiAoYWdnckV4cE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBib2R5Tm9kZSA9IGFnZ3JFeHBOb2RlLmdldENoaWxkKCdGdW5jdGlvbkNhbGxCb2R5Jyk7XG4gIGlmIChib2R5Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbWV0cmljSWROb2RlID0gZ2V0Tm9kZUluU3VidHJlZShib2R5Tm9kZSwgJ01ldHJpY0lkZW50aWZpZXInKTtcbiAgaWYgKG1ldHJpY0lkTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaWROb2RlID0gd2FsayhtZXRyaWNJZE5vZGUsIFtbJ2ZpcnN0Q2hpbGQnLCAnSWRlbnRpZmllciddXSk7XG4gIGlmIChpZE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1ldHJpY05hbWUgPSBnZXROb2RlVGV4dChpZE5vZGUsIHRleHQpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdJTl9HUk9VUElORycsXG4gICAgbWV0cmljTmFtZSxcbiAgICBvdGhlckxhYmVsczogW10sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMYWJlbE1hdGNoZXIobm9kZTogU3ludGF4Tm9kZSwgdGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcik6IFNpdHVhdGlvbiB8IG51bGwge1xuICAvLyB3ZSBjYW4gYXJyaXZlIGhlcmUgaW4gdHdvIHNpdHVhdGlvbi4gYG5vZGVgIGlzIGVpdGhlcjpcbiAgLy8gLSBhIFN0cmluZ05vZGUgKGxpa2UgaW4gYHtqb2I9XCJeXCJ9YClcbiAgLy8gLSBvciBhbiBlcnJvciBub2RlIChsaWtlIGluIGB7am9iPV59YClcbiAgY29uc3QgaW5TdHJpbmdOb2RlID0gIW5vZGUudHlwZS5pc0Vycm9yO1xuXG4gIGNvbnN0IHBhcmVudCA9IHdhbGsobm9kZSwgW1sncGFyZW50JywgJ0xhYmVsTWF0Y2hlciddXSk7XG4gIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGxhYmVsTmFtZU5vZGUgPSB3YWxrKHBhcmVudCwgW1snZmlyc3RDaGlsZCcsICdMYWJlbE5hbWUnXV0pO1xuICBpZiAobGFiZWxOYW1lTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gZ2V0Tm9kZVRleHQobGFiZWxOYW1lTm9kZSwgdGV4dCk7XG5cbiAgLy8gbm93IHdlIG5lZWQgdG8gZ28gdXAsIHRvIHRoZSBwYXJlbnQgb2YgTGFiZWxNYXRjaGVyLFxuICAvLyB0aGVyZSBjYW4gYmUgb25lIG9yIG1hbnkgYExhYmVsTWF0Y2hMaXN0YCBwYXJlbnRzLCB3ZSBoYXZlXG4gIC8vIHRvIGdvIHRocm91Z2ggYWxsIG9mIHRoZW1cblxuICBjb25zdCBmaXJzdExpc3ROb2RlID0gd2FsayhwYXJlbnQsIFtbJ3BhcmVudCcsICdMYWJlbE1hdGNoTGlzdCddXSk7XG4gIGlmIChmaXJzdExpc3ROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgbGlzdE5vZGUgPSBmaXJzdExpc3ROb2RlO1xuXG4gIC8vIHdlIGtlZXAgZ29pbmcgdGhyb3VnaCB0aGUgcGFyZW50LW5vZGVzXG4gIC8vIGFzIGxvbmcgYXMgdGhleSBhcmUgTGFiZWxNYXRjaExpc3QuXG4gIC8vIGFzIHNvb24gYXMgd2UgcmVhd2NoIExhYmVsTWF0Y2hlcnMsIHdlIHN0b3BcbiAgbGV0IGxhYmVsTWF0Y2hlcnNOb2RlOiBTeW50YXhOb2RlIHwgbnVsbCA9IG51bGw7XG4gIHdoaWxlIChsYWJlbE1hdGNoZXJzTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHAgPSBsaXN0Tm9kZS5wYXJlbnQ7XG4gICAgaWYgKHAgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcC50eXBlO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdMYWJlbE1hdGNoTGlzdCc6XG4gICAgICAgIC8vd2Uga2VlcCBsb29waW5nXG4gICAgICAgIGxpc3ROb2RlID0gcDtcbiAgICAgICAgY29udGludWU7XG4gICAgICBjYXNlICdMYWJlbE1hdGNoZXJzJzpcbiAgICAgICAgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLCB3ZSBjYW4gc3RvcCB0aGUgbG9vcFxuICAgICAgICBsYWJlbE1hdGNoZXJzTm9kZSA9IHA7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gd2UgcmVhY2hlZCBzb21lIG90aGVyIG5vZGUsIHdlIHN0b3BcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gbm93IHdlIG5lZWQgdG8gZmluZCB0aGUgb3RoZXIgbmFtZXNcbiAgY29uc3QgYWxsTGFiZWxzID0gZ2V0TGFiZWxzKGxhYmVsTWF0Y2hlcnNOb2RlLCB0ZXh0KTtcblxuICAvLyB3ZSBuZWVkIHRvIHJlbW92ZSBcIm91clwiIGxhYmVsIGZyb20gYWxsLWxhYmVscywgaWYgaXQgaXMgaW4gdGhlcmVcbiAgY29uc3Qgb3RoZXJMYWJlbHMgPSBhbGxMYWJlbHMuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwubmFtZSAhPT0gbGFiZWxOYW1lKTtcblxuICBjb25zdCBtZXRyaWNOYW1lTm9kZSA9IHdhbGsobGFiZWxNYXRjaGVyc05vZGUsIFtcbiAgICBbJ3BhcmVudCcsICdWZWN0b3JTZWxlY3RvciddLFxuICAgIFsnZmlyc3RDaGlsZCcsICdNZXRyaWNJZGVudGlmaWVyJ10sXG4gICAgWydmaXJzdENoaWxkJywgJ0lkZW50aWZpZXInXSxcbiAgXSk7XG5cbiAgaWYgKG1ldHJpY05hbWVOb2RlID09PSBudWxsKSB7XG4gICAgLy8gd2UgYXJlIHByb2JhYmx5IGluIGEgc2l0dWF0aW9uIHdpdGhvdXQgYSBtZXRyaWMgbmFtZVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnSU5fTEFCRUxfU0VMRUNUT1JfV0lUSF9MQUJFTF9OQU1FJyxcbiAgICAgIGxhYmVsTmFtZSxcbiAgICAgIGJldHdlZW5RdW90ZXM6IGluU3RyaW5nTm9kZSxcbiAgICAgIG90aGVyTGFiZWxzLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBtZXRyaWNOYW1lID0gZ2V0Tm9kZVRleHQobWV0cmljTmFtZU5vZGUsIHRleHQpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0lOX0xBQkVMX1NFTEVDVE9SX1dJVEhfTEFCRUxfTkFNRScsXG4gICAgbWV0cmljTmFtZSxcbiAgICBsYWJlbE5hbWUsXG4gICAgYmV0d2VlblF1b3RlczogaW5TdHJpbmdOb2RlLFxuICAgIG90aGVyTGFiZWxzLFxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVG9wTGV2ZWwobm9kZTogU3ludGF4Tm9kZSwgdGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcik6IFNpdHVhdGlvbiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0FUX1JPT1QnLFxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlSW5GdW5jdGlvbihub2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcsIHBvczogbnVtYmVyKTogU2l0dWF0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnSU5fRlVOQ1RJT04nLFxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRHVyYXRpb25zKG5vZGU6IFN5bnRheE5vZGUsIHRleHQ6IHN0cmluZywgcG9zOiBudW1iZXIpOiBTaXR1YXRpb24ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdJTl9EVVJBVElPTicsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN1YlRyZWVIYXNFcnJvcihub2RlOiBTeW50YXhOb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiBnZXROb2RlSW5TdWJ0cmVlKG5vZGUsIEVSUk9SX05PREVfTkFNRSkgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMYWJlbEtleXNXaXRoRXF1YWxzKG5vZGU6IFN5bnRheE5vZGUsIHRleHQ6IHN0cmluZywgcG9zOiBudW1iZXIpOiBTaXR1YXRpb24gfCBudWxsIHtcbiAgLy8gZm9yIGV4YW1wbGUgYHNvbWV0aGluZ3tefWBcblxuICAvLyB0aGVyZSBhcmUgc29tZSBmYWxzZSBwb3NpdGl2ZXMgdGhhdCBjYW4gZW5kIHVwIGluIHRoaXMgc2l0dWF0aW9uLCB0aGF0IHdlIHdhbnRcbiAgLy8gdG8gZWxpbWluYXRlOlxuICAvLyBgc29tZXRoaW5ne2F+Xn1gIChpZiB0aGlzIHN1YnRyZWUgY29udGFpbnMgYW55IGVycm9yLW5vZGUsIHdlIHN0b3ApXG4gIGlmIChzdWJUcmVlSGFzRXJyb3Iobm9kZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIG5leHQgZmFsc2UgcG9zaXRpdmU6XG4gIC8vIGBzb21ldGhpbmd7YT1cIjFcIl59YFxuICBjb25zdCBjaGlsZCA9IHdhbGsobm9kZSwgW1snZmlyc3RDaGlsZCcsICdMYWJlbE1hdGNoTGlzdCddXSk7XG4gIGlmIChjaGlsZCAhPT0gbnVsbCkge1xuICAgIC8vIG1lYW5zIHRoZSBsYWJlbC1tYXRjaGluZyBwYXJ0IGNvbnRhaW5zIGF0IGxlYXN0IG9uZSBsYWJlbCBhbHJlYWR5LlxuICAgIC8vXG4gICAgLy8gaW4gdGhpcyBjYXNlLCB3ZSB3aWxsIG5lZWQgdG8gaGF2ZSBhIGAsYCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCxcbiAgICAvLyB0byBiZSBhYmxlIHRvIHN1Z2dlc3QgYWRkaW5nIHRoZSBuZXh0IGxhYmVsLlxuICAgIC8vIHRoZSBhcmVhIGJldHdlZW4gdGhlIGVuZC1vZi10aGUtY2hpbGQtbm9kZSBhbmQgdGhlIGN1cnNvci1wb3NcbiAgICAvLyBtdXN0IGNvbnRhaW4gYSBgLGAgaW4gdGhpcyBjYXNlLlxuICAgIGNvbnN0IHRleHRUb0NoZWNrID0gdGV4dC5zbGljZShjaGlsZC50bywgcG9zKTtcblxuICAgIGlmICghdGV4dFRvQ2hlY2suaW5jbHVkZXMoJywnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWV0cmljTmFtZU5vZGUgPSB3YWxrKG5vZGUsIFtcbiAgICBbJ3BhcmVudCcsICdWZWN0b3JTZWxlY3RvciddLFxuICAgIFsnZmlyc3RDaGlsZCcsICdNZXRyaWNJZGVudGlmaWVyJ10sXG4gICAgWydmaXJzdENoaWxkJywgJ0lkZW50aWZpZXInXSxcbiAgXSk7XG5cbiAgY29uc3Qgb3RoZXJMYWJlbHMgPSBnZXRMYWJlbHMobm9kZSwgdGV4dCk7XG5cbiAgaWYgKG1ldHJpY05hbWVOb2RlID09PSBudWxsKSB7XG4gICAgLy8gd2UgYXJlIHByb2JhYmx5IGluIGEgc2l0dWF0aW9uIHdpdGhvdXQgYSBtZXRyaWMgbmFtZS5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ0lOX0xBQkVMX1NFTEVDVE9SX05PX0xBQkVMX05BTUUnLFxuICAgICAgb3RoZXJMYWJlbHMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG1ldHJpY05hbWUgPSBnZXROb2RlVGV4dChtZXRyaWNOYW1lTm9kZSwgdGV4dCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnSU5fTEFCRUxfU0VMRUNUT1JfTk9fTEFCRUxfTkFNRScsXG4gICAgbWV0cmljTmFtZSxcbiAgICBvdGhlckxhYmVscyxcbiAgfTtcbn1cblxuLy8gd2UgZmluZCB0aGUgZmlyc3QgZXJyb3Itbm9kZSBpbiB0aGUgdHJlZSB0aGF0IGlzIGF0IHRoZSBjdXJzb3ItcG9zaXRpb24uXG4vLyBOT1RFOiB0aGlzIG1pZ2h0IGJlIHRvbyBzbG93LCBtaWdodCBuZWVkIHRvIG9wdGltaXplIGl0XG4vLyAoaWRlYXM6IHdlIGRvIG5vdCBuZWVkIHRvIGdvIGludG8gZXZlcnkgc3VidHJlZSwgYmFzZWQgb24gZnJvbS90bylcbi8vIGFsc28sIG9ubHkgZ28gdG8gcGxhY2VzIHRoYXQgYXJlIGluIHRoZSBzdWItdHJlZSBvZiB0aGUgbm9kZSBmb3VuZFxuLy8gYnkgZGVmYXVsdCBieSBsZXplci4gcHJvYmxlbSBpcywgYG5leHQoKWAgd2lsbCBnbyB1cHdhcmQgdG9vLFxuLy8gYW5kIHdlIGRvIG5vdCB3YW50IHRvIGdvIGhpZ2hlciB0aGFuIG91ciBub2RlXG5mdW5jdGlvbiBnZXRFcnJvck5vZGUodHJlZTogVHJlZSwgcG9zOiBudW1iZXIpOiBTeW50YXhOb2RlIHwgbnVsbCB7XG4gIGNvbnN0IGN1ciA9IHRyZWUuY3Vyc29yKHBvcyk7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKGN1ci5mcm9tID09PSBwb3MgJiYgY3VyLnRvID09PSBwb3MpIHtcbiAgICAgIGNvbnN0IHsgbm9kZSB9ID0gY3VyO1xuICAgICAgaWYgKG5vZGUudHlwZS5pc0Vycm9yKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY3VyLm5leHQoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l0dWF0aW9uKHRleHQ6IHN0cmluZywgcG9zOiBudW1iZXIpOiBTaXR1YXRpb24gfCBudWxsIHtcbiAgLy8gdGhlcmUgaXMgYSBzcGVjaWFsLWNhc2Ugd2hlbiB3ZSBhcmUgYXQgdGhlIHN0YXJ0IG9mIHdyaXRpbmcgdGV4dCxcbiAgLy8gc28gd2UgaGFuZGxlIHRoYXQgY2FzZSBmaXJzdFxuXG4gIGlmICh0ZXh0ID09PSAnJykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnRU1QVFknLFxuICAgIH07XG4gIH1cblxuICAvKlxuXHRQcm9tUUxcbkV4cHJcblZlY3RvclNlbGVjdG9yXG5MYWJlbE1hdGNoZXJzXG4qL1xuICBjb25zdCB0cmVlID0gcGFyc2VyLnBhcnNlKHRleHQpO1xuXG4gIC8vIGlmIHRoZSB0cmVlIGNvbnRhaW5zIGVycm9yLCBpdCBpcyB2ZXJ5IHByb2JhYmxlIHRoYXRcbiAgLy8gb3VyIG5vZGUgaXMgb25lIG9mIHRob3NlIGVycm9yLW5vZGVzLlxuICAvLyBhbHNvLCBpZiB0aGVyZSBhcmUgZXJyb3JzLCB0aGUgbm9kZSBsZXplciBmaW5kcyB1cyxcbiAgLy8gbWlnaHQgbm90IGJlIHRoZSBiZXN0IG5vZGUuXG4gIC8vIHNvIGZpcnN0IHdlIGNoZWNrIGlmIHRoZXJlIGlzIGFuIGVycm9yLW5vZGUgYXQgdGhlIGN1cnNvci1wb3NpdGlvblxuICBjb25zdCBtYXliZUVycm9yTm9kZSA9IGdldEVycm9yTm9kZSh0cmVlLCBwb3MpO1xuXG4gIGNvbnN0IGN1ciA9IG1heWJlRXJyb3JOb2RlICE9IG51bGwgPyBtYXliZUVycm9yTm9kZS5jdXJzb3IgOiB0cmVlLmN1cnNvcihwb3MpO1xuICBjb25zdCBjdXJyZW50Tm9kZSA9IGN1ci5ub2RlO1xuXG4gIGNvbnN0IG5hbWVzID0gW2N1ci5uYW1lXTtcbiAgd2hpbGUgKGN1ci5wYXJlbnQoKSkge1xuICAgIG5hbWVzLnB1c2goY3VyLm5hbWUpO1xuICB9XG5cbiAgZm9yIChsZXQgcmVzb2x2ZXIgb2YgUkVTT0xWRVJTKSB7XG4gICAgLy8gaSBkbyBub3QgdXNlIGEgZm9yZWFjaCBiZWNhdXNlIGkgd2FudCB0byBzdG9wIGFzIHNvb25cbiAgICAvLyBhcyBpIGZpbmQgc29tZXRoaW5nXG4gICAgaWYgKGlzUGF0aE1hdGNoKHJlc29sdmVyLnBhdGgsIG5hbWVzKSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVyLmZ1bihjdXJyZW50Tm9kZSwgdGV4dCwgcG9zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsIi8vIHRoaXMgaGVscGVyIGNsYXNzIGlzIHVzZWQgdG8gbWFrZSB0eXBlc2NyaXB0IHdhcm4geW91IHdoZW4geW91IGZvcmdldFxuLy8gYSBjYXNlLWJsb2NrIGluIGEgc3dpdGNoIHN0YXRlbWVudC5cbi8vIGV4YW1wbGUgY29kZSB0aGF0IHRyaWdnZXJzIHRoZSB0eXBlc2NyaXB0LWVycm9yOlxuLy9cbi8vIGNvbnN0IHg6J0EnfCdCJ3wnQycgPSAnQSc7XG4vL1xuLy8gc3dpdGNoKHgpIHtcbi8vICAgY2FzZSAnQSc6XG4vLyAgICAgLy8gc29tZXRoaW5nXG4vLyAgIGNhc2UgJ0InOlxuLy8gICAgIC8vIHNvbWV0aGluZ1xuLy8gICBkZWZhdWx0OlxuLy8gICAgIHRocm93IG5ldyBOZXZlckNhc2VFcnJvcih4KTtcbi8vIH1cbi8vXG4vL1xuLy8gdHlwZXNjcmlwdCB3aWxsIHNob3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlLFxuLy8gd2hlbiB5b3UgYWRkIHRoZSBtaXNzaW5nIGBjYXNlICdDJ2AgY29kZSxcbi8vIHRoZSBwcm9ibGVtIHdpbGwgYmUgZml4ZWQuXG5cbmV4cG9ydCBjbGFzcyBOZXZlckNhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IG5ldmVyKSB7XG4gICAgc3VwZXIoJ3Nob3VsZCBuZXZlciBoYXBwZW4nKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZUxhdGVzdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciByZWYgPSB1c2VSZWYodmFsdWUpO1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgcmV0dXJuIHJlZjtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VMYXRlc3Q7XG4iLCIvLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIENlbGlhbiBHYXJjaWEgYW5kIEF1Z3VzdGluIEh1c3NvbiBAIEFtYWRldXMgSVQgR3JvdXBcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9tcWwvcHJvbXFsLmNvbnRyaWJ1dGlvbic7XG4iLCIvLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIENlbGlhbiBHYXJjaWEgYW5kIEF1Z3VzdGluIEh1c3NvbiBAIEFtYWRldXMgSVQgR3JvdXBcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuJ3VzZSBzdHJpY3QnO1xuLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuZXhwb3J0IHZhciBwcm9tTGFuZ3VhZ2VEZWZpbml0aW9uID0ge1xuICAgIGlkOiAncHJvbXFsJyxcbiAgICBleHRlbnNpb25zOiBbJy5wcm9tcWwnXSxcbiAgICBhbGlhc2VzOiBbJ1Byb21ldGhldXMnLCAncHJvbWV0aGV1cycsICdwcm9tJywgJ1Byb20nLCAncHJvbXFsJywgJ1Byb21xbCcsICdwcm9tUUwnLCAnUHJvbVFMJ10sXG4gICAgbWltZXR5cGVzOiBbXSxcbiAgICBsb2FkZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGltcG9ydCgnLi9wcm9tcWwnKTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZVxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVRoZW1lMiIsIlJlYWN0TW9uYWNvRWRpdG9yIiwiY3NzIiwidXNlTGF0ZXN0IiwicHJvbUxhbmd1YWdlRGVmaW5pdGlvbiIsInNlbGVjdG9ycyIsImdldENvbXBsZXRpb25Qcm92aWRlciIsImdldFN1Z2dlc3RPcHRpb25zIiwiZ2V0T3ZlcnJpZGVTZXJ2aWNlcyIsIm9wdGlvbnMiLCJjb2RlTGVucyIsImNvbnRleHRtZW51IiwiZml4ZWRPdmVyZmxvd1dpZGdldHMiLCJmb2xkaW5nIiwiZm9udFNpemUiLCJsaW5lRGVjb3JhdGlvbnNXaWR0aCIsImxpbmVOdW1iZXJzIiwibWluaW1hcCIsImVuYWJsZWQiLCJvdmVydmlld1J1bGVyQm9yZGVyIiwib3ZlcnZpZXdSdWxlckxhbmVzIiwicGFkZGluZyIsInRvcCIsImJvdHRvbSIsInJlbmRlckxpbmVIaWdobGlnaHQiLCJzY3JvbGxiYXIiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU2Nyb2xsYmFyU2l6ZSIsImhvcml6b250YWwiLCJob3Jpem9udGFsU2Nyb2xsYmFyU2l6ZSIsInNjcm9sbEJleW9uZExhc3RMaW5lIiwic3VnZ2VzdCIsInN1Z2dlc3RGb250U2l6ZSIsIndvcmRXcmFwIiwiRURJVE9SX0hFSUdIVF9PRkZTRVQiLCJQUk9NUUxfTEFOR19JRCIsImlkIiwiUFJPTVFMX1NFVFVQX1NUQVJURUQiLCJlbnN1cmVQcm9tUUwiLCJtb25hY28iLCJhbGlhc2VzIiwiZXh0ZW5zaW9ucyIsIm1pbWV0eXBlcyIsImxvYWRlciIsImxhbmd1YWdlcyIsInJlZ2lzdGVyIiwidGhlbiIsIm1vZCIsInNldE1vbmFyY2hUb2tlbnNQcm92aWRlciIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2VDb25maWd1cmF0aW9uIiwibGFuZ3VhZ2VDb25maWd1cmF0aW9uIiwiZ2V0U3R5bGVzIiwidGhlbWUiLCJjb250YWluZXIiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsImNvbXBvbmVudHMiLCJpbnB1dCIsImJvcmRlckNvbG9yIiwiTW9uYWNvUXVlcnlGaWVsZCIsInByb3BzIiwib3ZlcnJpZGVTZXJ2aWNlc1JlZiIsImNvbnRhaW5lclJlZiIsImxhbmd1YWdlUHJvdmlkZXIiLCJoaXN0b3J5Iiwib25CbHVyIiwib25SdW5RdWVyeSIsImluaXRpYWxWYWx1ZSIsImxwUmVmIiwiaGlzdG9yeVJlZiIsIm9uUnVuUXVlcnlSZWYiLCJvbkJsdXJSZWYiLCJhdXRvY29tcGxldGVEaXNwb3NlRnVuIiwic3R5bGVzIiwiY3VycmVudCIsIlF1ZXJ5RmllbGQiLCJlZGl0b3IiLCJvbkRpZEJsdXJFZGl0b3JXaWRnZXQiLCJnZXRWYWx1ZSIsImdldFNlcmllcyIsInNlbGVjdG9yIiwiZ2V0SGlzdG9yeSIsIlByb21pc2UiLCJyZXNvbHZlIiwibWFwIiwiaCIsInF1ZXJ5IiwiZXhwciIsImZpbHRlciIsInVuZGVmaW5lZCIsImdldEFsbE1ldHJpY05hbWVzIiwibWV0cmljcyIsIm1ldHJpY3NNZXRhZGF0YSIsInJlc3VsdCIsIm0iLCJtZXRhSXRlbSIsIm5hbWUiLCJoZWxwIiwidHlwZSIsImdldEFsbExhYmVsTmFtZXMiLCJnZXRMYWJlbEtleXMiLCJnZXRMYWJlbFZhbHVlcyIsImxhYmVsTmFtZSIsImRhdGFQcm92aWRlciIsImNvbXBsZXRpb25Qcm92aWRlciIsImZpbHRlcmluZ0NvbXBsZXRpb25Qcm92aWRlciIsInByb3ZpZGVDb21wbGV0aW9uSXRlbXMiLCJtb2RlbCIsInBvc2l0aW9uIiwiY29udGV4dCIsInRva2VuIiwiZ2V0TW9kZWwiLCJzdWdnZXN0aW9ucyIsImRpc3Bvc2UiLCJyZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIiLCJ1cGRhdGVFbGVtZW50SGVpZ2h0IiwiY29udGFpbmVyRGl2IiwicGl4ZWxIZWlnaHQiLCJnZXRDb250ZW50SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInBpeGVsV2lkdGgiLCJjbGllbnRXaWR0aCIsImxheW91dCIsIm9uRGlkQ29udGVudFNpemVDaGFuZ2UiLCJhZGRDb21tYW5kIiwiS2V5TW9kIiwiU2hpZnQiLCJLZXlDb2RlIiwiRW50ZXIiLCJtYWtlU3RvcmFnZVNlcnZpY2UiLCJzdHJpbmdzIiwiTWFwIiwic2V0IiwidG9TdHJpbmciLCJvbkRpZENoYW5nZVZhbHVlIiwiZGF0YSIsIm9uRGlkQ2hhbmdlVGFyZ2V0Iiwib25XaWxsU2F2ZVN0YXRlIiwiZ2V0Iiwia2V5Iiwic2NvcGUiLCJmYWxsYmFja1ZhbHVlIiwiZ2V0Qm9vbGVhbiIsInZhbCIsImdldE51bWJlciIsInBhcnNlSW50Iiwic3RvcmUiLCJ2YWx1ZSIsInRhcmdldCIsImRlbGV0ZSIsInJlbW92ZSIsImtleXMiLCJBcnJheSIsImZyb20iLCJsb2dTdG9yYWdlIiwiY29uc29sZSIsImxvZyIsIm1pZ3JhdGUiLCJpc05ldyIsImZsdXNoIiwicmVhc29uIiwib3ZlcnJpZGVTZXJ2aWNlcyIsInN0b3JhZ2VTZXJ2aWNlIiwiTmV2ZXJDYXNlRXJyb3IiLCJGVU5DVElPTlMiLCJlc2NhcGVMYWJlbFZhbHVlSW5FeGFjdFNlbGVjdG9yIiwiZ2V0QWxsTWV0cmljTmFtZXNDb21wbGV0aW9ucyIsIm1ldHJpYyIsImxhYmVsIiwiaW5zZXJ0VGV4dCIsImRldGFpbCIsImRvY3VtZW50YXRpb24iLCJGVU5DVElPTl9DT01QTEVUSU9OUyIsImYiLCJnZXRBbGxGdW5jdGlvbnNBbmRNZXRyaWNOYW1lc0NvbXBsZXRpb25zIiwibWV0cmljTmFtZXMiLCJEVVJBVElPTl9DT01QTEVUSU9OUyIsInRleHQiLCJnZXRBbGxIaXN0b3J5Q29tcGxldGlvbnMiLCJhbGxIaXN0b3J5Iiwic2xpY2UiLCJtYWtlU2VsZWN0b3IiLCJtZXRyaWNOYW1lIiwibGFiZWxzIiwiYWxsTGFiZWxzIiwicHVzaCIsIm9wIiwiYWxsTGFiZWxUZXh0cyIsImpvaW4iLCJnZXRMYWJlbE5hbWVzIiwib3RoZXJMYWJlbHMiLCJsZW5ndGgiLCJwb3NzaWJsZUxhYmVsTmFtZXMiLCJPYmplY3QiLCJ1c2VkTGFiZWxOYW1lcyIsIlNldCIsImwiLCJoYXMiLCJnZXRMYWJlbE5hbWVzRm9yQ29tcGxldGlvbnMiLCJzdWZmaXgiLCJ0cmlnZ2VyT25JbnNlcnQiLCJsYWJlbE5hbWVzIiwiZ2V0TGFiZWxOYW1lc0ZvclNlbGVjdG9yQ29tcGxldGlvbnMiLCJnZXRMYWJlbE5hbWVzRm9yQnlDb21wbGV0aW9ucyIsImdldExhYmVsVmFsdWVzRm9yTWV0cmljQ29tcGxldGlvbnMiLCJiZXR3ZWVuUXVvdGVzIiwidmFsdWVzIiwiZ2V0Q29tcGxldGlvbnMiLCJzaXR1YXRpb24iLCJoaXN0b3J5Q29tcGxldGlvbnMiLCJnZXRTaXR1YXRpb24iLCJzaG93V29yZHMiLCJnZXRNb25hY29Db21wbGV0aW9uSXRlbUtpbmQiLCJDb21wbGV0aW9uSXRlbUtpbmQiLCJVbml0IiwiVmFyaWFibGUiLCJTbmlwcGV0IiwiRW51bSIsIkVudW1NZW1iZXIiLCJDb25zdHJ1Y3RvciIsIndvcmQiLCJnZXRXb3JkQXRQb3NpdGlvbiIsInJhbmdlIiwiUmFuZ2UiLCJsaWZ0Iiwic3RhcnRMaW5lTnVtYmVyIiwibGluZU51bWJlciIsImVuZExpbmVOdW1iZXIiLCJzdGFydENvbHVtbiIsImVuZENvbHVtbiIsImZyb21Qb3NpdGlvbnMiLCJwb3NpdGlvbkNsb25lIiwiY29sdW1uIiwib2Zmc2V0IiwiZ2V0T2Zmc2V0QXQiLCJjb21wbGV0aW9uc1Byb21pc2UiLCJpdGVtcyIsIm1heEluZGV4RGlnaXRzIiwiaXRlbSIsImluZGV4Iiwia2luZCIsInNvcnRUZXh0IiwicGFkU3RhcnQiLCJjb21tYW5kIiwidGl0bGUiLCJ0cmlnZ2VyQ2hhcmFjdGVycyIsInBhcnNlciIsIm1vdmUiLCJub2RlIiwiZGlyZWN0aW9uIiwicGFyZW50IiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwid2FsayIsInBhdGgiLCJleHBlY3RlZFR5cGUiLCJnZXROb2RlVGV4dCIsInRvIiwicGFyc2VQcm9tUUxTdHJpbmdMaXRlcmFsIiwiaW5zaWRlIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwicmVwbGFjZSIsIkVycm9yIiwiaXNQYXRoTWF0Y2giLCJyZXNvbHZlclBhdGgiLCJjdXJzb3JQYXRoIiwiZXZlcnkiLCJFUlJPUl9OT0RFX05BTUUiLCJSRVNPTFZFUlMiLCJmdW4iLCJyZXNvbHZlTGFiZWxLZXlzV2l0aEVxdWFscyIsInJlc29sdmVUb3BMZXZlbCIsInJlc29sdmVJbkZ1bmN0aW9uIiwicmVzb2x2ZUxhYmVsTWF0Y2hlciIsInJlc29sdmVEdXJhdGlvbnMiLCJyZXNvbHZlTGFiZWxzRm9yR3JvdXBpbmciLCJMQUJFTF9PUF9NQVAiLCJnZXRMYWJlbE9wIiwib3BOb2RlIiwib3BDaGlsZCIsImdldExhYmVsIiwibGFiZWxNYXRjaGVyTm9kZSIsIm5hbWVOb2RlIiwidmFsdWVOb2RlIiwiZ2V0TGFiZWxzIiwibGFiZWxNYXRjaGVyc05vZGUiLCJsaXN0Tm9kZSIsIm1hdGNoZXJOb2RlIiwicmV2ZXJzZSIsImdldE5vZGVDaGlsZHJlbiIsImNoaWxkIiwiY2hpbGRyZW4iLCJnZXROb2RlSW5TdWJ0cmVlIiwidHlwZU5hbWUiLCJuIiwicG9zIiwiYWdnckV4cE5vZGUiLCJib2R5Tm9kZSIsImdldENoaWxkIiwibWV0cmljSWROb2RlIiwiaWROb2RlIiwiaW5TdHJpbmdOb2RlIiwiaXNFcnJvciIsImxhYmVsTmFtZU5vZGUiLCJmaXJzdExpc3ROb2RlIiwicCIsIm1ldHJpY05hbWVOb2RlIiwic3ViVHJlZUhhc0Vycm9yIiwidGV4dFRvQ2hlY2siLCJpbmNsdWRlcyIsImdldEVycm9yTm9kZSIsInRyZWUiLCJjdXIiLCJjdXJzb3IiLCJuZXh0IiwicGFyc2UiLCJtYXliZUVycm9yTm9kZSIsImN1cnJlbnROb2RlIiwibmFtZXMiLCJyZXNvbHZlciIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
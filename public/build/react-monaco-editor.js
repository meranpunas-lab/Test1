"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["react-monaco-editor"],{

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayLikeToArray": () => (/* binding */ _arrayLikeToArray),
/* harmony export */   "arrayWithHoles": () => (/* binding */ _arrayWithHoles),
/* harmony export */   "defineProperty": () => (/* binding */ _defineProperty),
/* harmony export */   "iterableToArrayLimit": () => (/* binding */ _iterableToArrayLimit),
/* harmony export */   "nonIterableRest": () => (/* binding */ _nonIterableRest),
/* harmony export */   "objectSpread2": () => (/* binding */ _objectSpread2),
/* harmony export */   "slicedToArray": () => (/* binding */ _slicedToArray),
/* harmony export */   "unsupportedIterableToArray": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/config/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs'
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _loader_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _loader_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/loader/index.js");




/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/loader/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var state_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/state-local-npm-1.0.7-9005e49ea6-d1afcf1429.zip/node_modules/state-local/lib/es/state-local.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/config/index.js");
/* harmony import */ var _validators_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/validators/index.js");
/* harmony import */ var _utils_compose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/compose.js");
/* harmony import */ var _utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js");
/* harmony import */ var _utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js");








/** the local state of the module */

var _state$create = state_local__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  config: _config_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.slicedToArray)(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function config(config) {
  setState(function (state) {
    return {
      config: (0,_utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.config, _validators_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].config(config))
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized: isInitialized
    };
  });

  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Promise.resolve(window.monaco));
    }

    (0,_utils_compose_js__WEBPACK_IMPORTED_MODULE_4__["default"])(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }

  return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/compose.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/curry.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curry);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");


function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)({}, target), source);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CANCELATION_MESSAGE": () => (/* binding */ CANCELATION_MESSAGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCancelable);



/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/validators/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler),
/* harmony export */   "errorMessages": () => (/* binding */ errorMessages)
/* harmony export */ });
/* harmony import */ var _utils_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/curry.js");
/* harmony import */ var _utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js");



/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler('configIsRequired');
  if (!(0,_utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config)) errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = (0,_utils_curry_js__WEBPACK_IMPORTED_MODULE_0__["default"])(throwError)(errorMessages);
var validators = {
  config: validateConfig
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validators);



/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js");
/* harmony import */ var _hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");
/* harmony import */ var _hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/utils/index.js");








function DiffEditor({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,

  /* === */
  originalModelPath,
  modifiedModelPath,
  keepCurrentOriginalModel,
  keepCurrentModifiedModel,
  theme,
  loading,
  options,

  /* === */
  height,
  width,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount
}) {
  const [isEditorReady, setIsEditorReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const monacoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onMount);
  const beforeMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(beforeMount);
  (0,_hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    const cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const modifiedEditor = editorRef.current.getModifiedEditor();

    if (modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      modifiedEditor.setValue(modified);
    } else {
      if (modified !== modifiedEditor.getValue()) {
        modifiedEditor.executeEdits('', [{
          range: modifiedEditor.getModel().getFullModelRange(),
          text: modified,
          forceMoveMarkers: true
        }]);
        modifiedEditor.pushUndoStop();
      }
    }
  }, [modified], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const {
      original,
      modified
    } = editorRef.current.getModel();
    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  const setModels = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    beforeMountRef.current(monacoRef.current);
    const originalModel = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, original, originalLanguage || language, originalModelPath);
    const modifiedModel = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, modified, modifiedLanguage || language, modifiedModelPath);
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);
  const createEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options
    });
    setModels();
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [options, theme, setModels]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  function disposeEditor() {
    const models = editorRef.current.getModel();

    if (!keepCurrentOriginalModel) {
      var _models$original;

      (_models$original = models.original) === null || _models$original === void 0 ? void 0 : _models$original.dispose();
    }

    if (!keepCurrentModifiedModel) {
      var _models$modified;

      (_models$modified = models.modified) === null || _models$modified === void 0 ? void 0 : _models$modified.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

DiffEditor.propTypes = {
  original: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  modified: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  language: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  originalLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  modifiedLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /* === */
  originalModelPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  modifiedModelPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  keepCurrentOriginalModel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  keepCurrentModifiedModel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /* === */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  wrapperProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /* === */
  beforeMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
DiffEditor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  keepCurrentOriginalModel: false,
  keepCurrentModifiedModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop,
  onMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiffEditor);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _DiffEditor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js");



var index = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_DiffEditor_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Editor/Editor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js");
/* harmony import */ var _hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");
/* harmony import */ var _hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/utils/index.js");
/* harmony import */ var _hooks_usePrevious_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js");









const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,

  /* === */
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,

  /* === */
  width,
  height,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const monacoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onMount);
  const beforeMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(beforeMount);
  const subscriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value);
  const previousPath = (0,_hooks_usePrevious_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(path);
  (0,_hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    const cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const model = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
    if (!(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    beforeMountRef.current(monacoRef.current);
    const autoCreatedModelPath = path || defaultPath;
    const defaultModel = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      model: defaultModel,
      automaticLayout: true,
      ...options
    }, overrideServices);
    saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription

  valueRef.current = value;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;

      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
        const editorValue = editorRef.current.getValue();

        if (valueRef.current !== editorValue) {
          onChange(editorValue, event);
        }
      });
    }
  }, [isEditorReady, onChange]); // onValidate

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers(uris => {
        var _editorRef$current$ge;

        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;

        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find(uri => uri.path === editorUri.path);

          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    var _subscriptionRef$curr2;

    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;

      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

Editor.propTypes = {
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  defaultPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  defaultLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  language: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  path: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /* === */
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  line: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  overrideServices: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  saveViewState: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  keepCurrentModel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /* === */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  wrapperProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /* === */
  beforeMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onValidate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
Editor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop,
  onMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop,
  onValidate: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Editor/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Editor/Editor.js");



var index = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Editor_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Loading/Loading.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading({
  content
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: loadingStyles
  }, content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var _Loading_Loading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Loading/Loading.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js");






// one of the reasons why we use a separate prop for passing ref instead of using forwardref

function MonacoContainer({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_2__["extends"])({
    style: { ..._styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].wrapper,
      width,
      height
    }
  }, wrapperProps), !isEditorReady && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading_Loading_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: _ref,
    style: { ..._styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].fullWidth,
      ...(!isEditorReady && _styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].hide)
    },
    className: className
  }));
}

MonacoContainer.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired,
  isEditorReady: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  wrapperProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoContainer);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _MonacoContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js");



var MonacoContainer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_MonacoContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoContainer);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/_virtual/_rollupPluginBabelHelpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extends": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}




/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useMount_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");




function useMonaco() {
  const [monaco, setMonaco] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].__getMonacoInstance());
  (0,_useMount_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    let cancelable;

    if (!monaco) {
      cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();
      cancelable.then(monaco => {
        setMonaco(monaco);
      });
    }

    return () => {
      var _cancelable;

      return (_cancelable = cancelable) === null || _cancelable === void 0 ? void 0 : _cancelable.cancel();
    };
  });
  return monaco;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMonaco);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


function useMount(effect) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, []);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePrevious);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdate);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiffEditor": () => (/* reexport safe */ _DiffEditor_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _Editor_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "loader": () => (/* reexport safe */ _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useMonaco": () => (/* reexport safe */ _hooks_useMonaco_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var _DiffEditor_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js");
/* harmony import */ var _hooks_useMonaco_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js");
/* harmony import */ var _Editor_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Editor/index.js");






/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateModel": () => (/* binding */ getOrCreateModel),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco.editor.getModel(createModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && createModelUri(monaco, path));
}

function createModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}




/***/ }),

/***/ "./packages/grafana-ui/src/components/Monaco/ReactMonacoEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactMonacoEditor": () => (/* binding */ ReactMonacoEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/theme.ts");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





let initalized = false;

function initMonaco() {
  var _window$__grafana_pub;

  if (initalized) {
    return;
  }

  _monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__.loader.config({
    paths: {
      vs: ((_window$__grafana_pub = window.__grafana_public_path__) !== null && _window$__grafana_pub !== void 0 ? _window$__grafana_pub : 'public/') + 'lib/monaco/min/vs'
    }
  });
  initalized = true;
  _monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__.loader.init().then(monaco => {
    // this call makes sure the themes exist.
    // they will not have the correct colors,
    // but we need them to exist since the beginning,
    // because if we start a monaco instance with
    // a theme that does not exist, it will not work well.
    (0,_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(monaco);
  });
}

const ReactMonacoEditor = props => {
  const theme = (0,_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const monaco = (0,_monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__.useMonaco)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // monaco can be null at the beginning, because it is loaded in asynchronously
    if (monaco !== null) {
      (0,_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(monaco, theme);
    }
  }, [monaco, theme]);
  initMonaco();
  const monacoTheme = theme.isDark ? 'grafana-dark' : 'grafana-light';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
    theme: monacoTheme
  }, props));
};

/***/ }),

/***/ "./packages/grafana-ui/src/components/Monaco/theme.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defineThemes)
/* harmony export */ });
function getColors(theme) {
  if (theme === undefined) {
    return {};
  } else {
    return {
      'editor.background': theme.components.input.background,
      'minimap.background': theme.colors.background.secondary
    };
  }
} // we support calling this without a theme, it will make sure the themes
// are registered in monaco, even if the colors are not perfect.


function defineThemes(monaco, theme) {
  // color tokens are defined here https://github.com/microsoft/vscode/blob/main/src/vs/platform/theme/common/colorRegistry.ts#L174
  const colors = getColors(theme);
  monaco.editor.defineTheme('grafana-dark', {
    base: 'vs-dark',
    inherit: true,
    colors: colors,
    // fallback syntax highlighting for languages that microsoft doesn't handle (ex cloudwatch's metric math)
    rules: [{
      token: 'predefined',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('purple')
    }, {
      token: 'operator',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('orange')
    }, {
      token: 'tag',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('green')
    }]
  });
  monaco.editor.defineTheme('grafana-light', {
    base: 'vs',
    inherit: true,
    colors: colors,
    // fallback syntax highlighting for languages that microsoft doesn't handle (ex cloudwatch's metric math)
    rules: [{
      token: 'predefined',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('purple')
    }, {
      token: 'operator',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('orange')
    }, {
      token: 'tag',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('green')
    }]
  });
}

/***/ }),

/***/ "./.yarn/cache/state-local-npm-1.0.7-9005e49ea6-d1afcf1429.zip/node_modules/state-local/lib/es/state-local.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItbG9hZGVyLXZpcnR1YWwtM2VhNDdkMzFmOC8wL2NhY2hlL0Btb25hY28tZWRpdG9yLWxvYWRlci1ucG0tMS4yLjAtZGZhNDhlZWY2NC1iNDgzZDhkNzQ4LnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1sb2FkZXItdmlydHVhbC0zZWE0N2QzMWY4LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItbG9hZGVyLW5wbS0xLjIuMC1kZmE0OGVlZjY0LWI0ODNkOGQ3NDguemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9sb2FkZXIvbGliL2VzL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItbG9hZGVyLXZpcnR1YWwtM2VhNDdkMzFmOC8wL2NhY2hlL0Btb25hY28tZWRpdG9yLWxvYWRlci1ucG0tMS4yLjAtZGZhNDhlZWY2NC1iNDgzZDhkNzQ4LnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItbG9hZGVyLXZpcnR1YWwtM2VhNDdkMzFmOC8wL2NhY2hlL0Btb25hY28tZWRpdG9yLWxvYWRlci1ucG0tMS4yLjAtZGZhNDhlZWY2NC1iNDgzZDhkNzQ4LnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy9sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLWxvYWRlci12aXJ0dWFsLTNlYTQ3ZDMxZjgvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1sb2FkZXItbnBtLTEuMi4wLWRmYTQ4ZWVmNjQtYjQ4M2Q4ZDc0OC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvZXMvdXRpbHMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItbG9hZGVyLXZpcnR1YWwtM2VhNDdkMzFmOC8wL2NhY2hlL0Btb25hY28tZWRpdG9yLWxvYWRlci1ucG0tMS4yLjAtZGZhNDhlZWY2NC1iNDgzZDhkNzQ4LnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy91dGlscy9jdXJyeS5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItbG9hZGVyLXZpcnR1YWwtM2VhNDdkMzFmOC8wL2NhY2hlL0Btb25hY28tZWRpdG9yLWxvYWRlci1ucG0tMS4yLjAtZGZhNDhlZWY2NC1iNDgzZDhkNzQ4LnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy91dGlscy9kZWVwTWVyZ2UuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLWxvYWRlci12aXJ0dWFsLTNlYTQ3ZDMxZjgvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1sb2FkZXItbnBtLTEuMi4wLWRmYTQ4ZWVmNjQtYjQ4M2Q4ZDc0OC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvZXMvdXRpbHMvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLWxvYWRlci12aXJ0dWFsLTNlYTQ3ZDMxZjgvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1sb2FkZXItbnBtLTEuMi4wLWRmYTQ4ZWVmNjQtYjQ4M2Q4ZDc0OC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvZXMvdXRpbHMvbWFrZUNhbmNlbGFibGUuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLWxvYWRlci12aXJ0dWFsLTNlYTQ3ZDMxZjgvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1sb2FkZXItbnBtLTEuMi4wLWRmYTQ4ZWVmNjQtYjQ4M2Q4ZDc0OC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvZXMvdmFsaWRhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9EaWZmRWRpdG9yL0RpZmZFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLXJlYWN0LXZpcnR1YWwtOTdiNDlkZDBjNi8wL2NhY2hlL0Btb25hY28tZWRpdG9yLXJlYWN0LW5wbS00LjMuMS1jMTI4YzYyZDMxLTQ3NzM0OWU2NDAuemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9yZWFjdC9saWIvZXMvRGlmZkVkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9FZGl0b3IvRWRpdG9yLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL0VkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9Mb2FkaW5nL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLXJlYWN0LXZpcnR1YWwtOTdiNDlkZDBjNi8wL2NhY2hlL0Btb25hY28tZWRpdG9yLXJlYWN0LW5wbS00LjMuMS1jMTI4YzYyZDMxLTQ3NzM0OWU2NDAuemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9yZWFjdC9saWIvZXMvTW9uYWNvQ29udGFpbmVyL01vbmFjb0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9Nb25hY29Db250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLXJlYWN0LXZpcnR1YWwtOTdiNDlkZDBjNi8wL2NhY2hlL0Btb25hY28tZWRpdG9yLXJlYWN0LW5wbS00LjMuMS1jMTI4YzYyZDMxLTQ3NzM0OWU2NDAuemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9yZWFjdC9saWIvZXMvTW9uYWNvQ29udGFpbmVyL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL2hvb2tzL3VzZU1vbmFjby9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9ob29rcy91c2VNb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9ob29rcy91c2VQcmV2aW91cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9ob29rcy91c2VVcGRhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLXJlYWN0LXZpcnR1YWwtOTdiNDlkZDBjNi8wL2NhY2hlL0Btb25hY28tZWRpdG9yLXJlYWN0LW5wbS00LjMuMS1jMTI4YzYyZDMxLTQ3NzM0OWU2NDAuemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9yZWFjdC9saWIvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLXJlYWN0LXZpcnR1YWwtOTdiNDlkZDBjNi8wL2NhY2hlL0Btb25hY28tZWRpdG9yLXJlYWN0LW5wbS00LjMuMS1jMTI4YzYyZDMxLTQ3NzM0OWU2NDAuemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9yZWFjdC9saWIvZXMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3BhY2thZ2VzL2dyYWZhbmEtdWkvc3JjL2NvbXBvbmVudHMvTW9uYWNvL1JlYWN0TW9uYWNvRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcGFja2FnZXMvZ3JhZmFuYS11aS9zcmMvY29tcG9uZW50cy9Nb25hY28vdGhlbWUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL3N0YXRlLWxvY2FsLW5wbS0xLjAuNy05MDA1ZTQ5ZWE2LWQxYWZjZjE0MjkuemlwL25vZGVfbW9kdWxlcy9zdGF0ZS1sb2NhbC9saWIvZXMvc3RhdGUtbG9jYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmV4cG9ydCB7IF9hcnJheUxpa2VUb0FycmF5IGFzIGFycmF5TGlrZVRvQXJyYXksIF9hcnJheVdpdGhIb2xlcyBhcyBhcnJheVdpdGhIb2xlcywgX2RlZmluZVByb3BlcnR5IGFzIGRlZmluZVByb3BlcnR5LCBfaXRlcmFibGVUb0FycmF5TGltaXQgYXMgaXRlcmFibGVUb0FycmF5TGltaXQsIF9ub25JdGVyYWJsZVJlc3QgYXMgbm9uSXRlcmFibGVSZXN0LCBfb2JqZWN0U3ByZWFkMiBhcyBvYmplY3RTcHJlYWQyLCBfc2xpY2VkVG9BcnJheSBhcyBzbGljZWRUb0FycmF5LCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgYXMgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgfTtcbiIsInZhciBjb25maWcgPSB7XG4gIHBhdGhzOiB7XG4gICAgdnM6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC4yOC4xL21pbi92cydcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiaW1wb3J0IGxvYWRlciBmcm9tICcuL2xvYWRlci9pbmRleC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9sb2FkZXIvaW5kZXguanMnO1xuIiwiaW1wb3J0IHsgc2xpY2VkVG9BcnJheSBhcyBfc2xpY2VkVG9BcnJheSB9IGZyb20gJy4uL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuaW1wb3J0IHN0YXRlIGZyb20gJ3N0YXRlLWxvY2FsJztcbmltcG9ydCBjb25maWckMSBmcm9tICcuLi9jb25maWcvaW5kZXguanMnO1xuaW1wb3J0IHZhbGlkYXRvcnMgZnJvbSAnLi4vdmFsaWRhdG9ycy9pbmRleC5qcyc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuLi91dGlscy9jb21wb3NlLmpzJztcbmltcG9ydCBtZXJnZSBmcm9tICcuLi91dGlscy9kZWVwTWVyZ2UuanMnO1xuaW1wb3J0IG1ha2VDYW5jZWxhYmxlIGZyb20gJy4uL3V0aWxzL21ha2VDYW5jZWxhYmxlLmpzJztcblxuLyoqIHRoZSBsb2NhbCBzdGF0ZSBvZiB0aGUgbW9kdWxlICovXG5cbnZhciBfc3RhdGUkY3JlYXRlID0gc3RhdGUuY3JlYXRlKHtcbiAgY29uZmlnOiBjb25maWckMSxcbiAgaXNJbml0aWFsaXplZDogZmFsc2UsXG4gIHJlc29sdmU6IG51bGwsXG4gIHJlamVjdDogbnVsbCxcbiAgbW9uYWNvOiBudWxsXG59KSxcbiAgICBfc3RhdGUkY3JlYXRlMiA9IF9zbGljZWRUb0FycmF5KF9zdGF0ZSRjcmVhdGUsIDIpLFxuICAgIGdldFN0YXRlID0gX3N0YXRlJGNyZWF0ZTJbMF0sXG4gICAgc2V0U3RhdGUgPSBfc3RhdGUkY3JlYXRlMlsxXTtcbi8qKlxuICogc2V0IHRoZSBsb2FkZXIgY29uZmlndXJhdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICovXG5cblxuZnVuY3Rpb24gY29uZmlnKGNvbmZpZykge1xuICBzZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiBtZXJnZShzdGF0ZS5jb25maWcsIHZhbGlkYXRvcnMuY29uZmlnKGNvbmZpZykpXG4gICAgfTtcbiAgfSk7XG59XG4vKipcbiAqIGhhbmRsZXMgdGhlIGluaXRpYWxpemF0aW9uIG9mIHRoZSBtb25hY28tZWRpdG9yXG4gKiBAcmV0dXJuIHtQcm9taXNlfSAtIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgbW9uYWNvICh3aXRoIGEgY2FuY2VsYWJsZSBwcm9taXNlKVxuICovXG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgaXNJbml0aWFsaXplZCA9IF9yZWYuaXNJbml0aWFsaXplZDtcbiAgICByZXR1cm4ge1xuICAgICAgaXNJbml0aWFsaXplZDogaXNJbml0aWFsaXplZFxuICAgIH07XG4gIH0pO1xuXG4gIGlmICghc3RhdGUuaXNJbml0aWFsaXplZCkge1xuICAgIGlmICh3aW5kb3cubW9uYWNvICYmIHdpbmRvdy5tb25hY28uZWRpdG9yKSB7XG4gICAgICBzdG9yZU1vbmFjb0luc3RhbmNlKHdpbmRvdy5tb25hY28pO1xuICAgICAgcmV0dXJuIG1ha2VDYW5jZWxhYmxlKFByb21pc2UucmVzb2x2ZSh3aW5kb3cubW9uYWNvKSk7XG4gICAgfVxuXG4gICAgY29tcG9zZShpbmplY3RTY3JpcHRzLCBnZXRNb25hY29Mb2FkZXJTY3JpcHQpKGNvbmZpZ3VyZUxvYWRlcik7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgaXNJbml0aWFsaXplZDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VDYW5jZWxhYmxlKHdyYXBwZXJQcm9taXNlKTtcbn1cbi8qKlxuICogaW5qZWN0cyBwcm92aWRlZCBzY3JpcHRzIGludG8gdGhlIGRvY3VtZW50LmJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY3JpcHQgLSBhbiBIVE1MIHNjcmlwdCBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdGhlIGluamVjdGVkIEhUTUwgc2NyaXB0IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGluamVjdFNjcmlwdHMoc2NyaXB0KSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG4vKipcbiAqIGNyZWF0ZXMgYW4gSFRNTCBzY3JpcHQgZWxlbWVudCB3aXRoL3dpdGhvdXQgcHJvdmlkZWQgc3JjXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NyY10gLSB0aGUgc291cmNlIHBhdGggb2YgdGhlIHNjcmlwdFxuICogQHJldHVybiB7T2JqZWN0fSAtIHRoZSBjcmVhdGVkIEhUTUwgc2NyaXB0IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdChzcmMpIHtcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICByZXR1cm4gc3JjICYmIChzY3JpcHQuc3JjID0gc3JjKSwgc2NyaXB0O1xufVxuLyoqXG4gKiBjcmVhdGVzIGFuIEhUTUwgc2NyaXB0IGVsZW1lbnQgd2l0aCB0aGUgbW9uYWNvIGxvYWRlciBzcmNcbiAqIEByZXR1cm4ge09iamVjdH0gLSB0aGUgY3JlYXRlZCBIVE1MIHNjcmlwdCBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRNb25hY29Mb2FkZXJTY3JpcHQoY29uZmlndXJlTG9hZGVyKSB7XG4gIHZhciBzdGF0ZSA9IGdldFN0YXRlKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBjb25maWcgPSBfcmVmMi5jb25maWcsXG4gICAgICAgIHJlamVjdCA9IF9yZWYyLnJlamVjdDtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICByZWplY3Q6IHJlamVjdFxuICAgIH07XG4gIH0pO1xuICB2YXIgbG9hZGVyU2NyaXB0ID0gY3JlYXRlU2NyaXB0KFwiXCIuY29uY2F0KHN0YXRlLmNvbmZpZy5wYXRocy52cywgXCIvbG9hZGVyLmpzXCIpKTtcblxuICBsb2FkZXJTY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb25maWd1cmVMb2FkZXIoKTtcbiAgfTtcblxuICBsb2FkZXJTY3JpcHQub25lcnJvciA9IHN0YXRlLnJlamVjdDtcbiAgcmV0dXJuIGxvYWRlclNjcmlwdDtcbn1cbi8qKlxuICogY29uZmlndXJlcyB0aGUgbW9uYWNvIGxvYWRlclxuICovXG5cblxuZnVuY3Rpb24gY29uZmlndXJlTG9hZGVyKCkge1xuICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICB2YXIgY29uZmlnID0gX3JlZjMuY29uZmlnLFxuICAgICAgICByZXNvbHZlID0gX3JlZjMucmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0ID0gX3JlZjMucmVqZWN0O1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICByZWplY3Q6IHJlamVjdFxuICAgIH07XG4gIH0pO1xuICB2YXIgcmVxdWlyZSA9IHdpbmRvdy5yZXF1aXJlO1xuXG4gIHJlcXVpcmUuY29uZmlnKHN0YXRlLmNvbmZpZyk7XG5cbiAgcmVxdWlyZShbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLCBmdW5jdGlvbiAobW9uYWNvKSB7XG4gICAgc3RvcmVNb25hY29JbnN0YW5jZShtb25hY28pO1xuICAgIHN0YXRlLnJlc29sdmUobW9uYWNvKTtcbiAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgc3RhdGUucmVqZWN0KGVycm9yKTtcbiAgfSk7XG59XG4vKipcbiAqIHN0b3JlIG1vbmFjbyBpbnN0YW5jZSBpbiBsb2NhbCBzdGF0ZVxuICovXG5cblxuZnVuY3Rpb24gc3RvcmVNb25hY29JbnN0YW5jZShtb25hY28pIHtcbiAgaWYgKCFnZXRTdGF0ZSgpLm1vbmFjbykge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIG1vbmFjbzogbW9uYWNvXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogaW50ZXJuYWwgaGVscGVyIGZ1bmN0aW9uXG4gKiBleHRyYWN0cyBzdG9yZWQgbW9uYWNvIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtPYmplY3R8bnVsbH0gLSB0aGUgbW9uYWNvIGluc3RhbmNlXG4gKi9cblxuXG5mdW5jdGlvbiBfX2dldE1vbmFjb0luc3RhbmNlKCkge1xuICByZXR1cm4gZ2V0U3RhdGUoZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgdmFyIG1vbmFjbyA9IF9yZWY0Lm1vbmFjbztcbiAgICByZXR1cm4gbW9uYWNvO1xuICB9KTtcbn1cblxudmFyIHdyYXBwZXJQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICByZXR1cm4gc2V0U3RhdGUoe1xuICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgcmVqZWN0OiByZWplY3RcbiAgfSk7XG59KTtcbnZhciBsb2FkZXIgPSB7XG4gIGNvbmZpZzogY29uZmlnLFxuICBpbml0OiBpbml0LFxuICBfX2dldE1vbmFjb0luc3RhbmNlOiBfX2dldE1vbmFjb0luc3RhbmNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkZXI7XG4iLCJ2YXIgY29tcG9zZSA9IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZm5zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGZucy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoeSwgZikge1xuICAgICAgcmV0dXJuIGYoeSk7XG4gICAgfSwgeCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlO1xuIiwiZnVuY3Rpb24gY3VycnkoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJncy5sZW5ndGggPj0gZm4ubGVuZ3RoID8gZm4uYXBwbHkodGhpcywgYXJncykgOiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG5leHRBcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIG5leHRBcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyaWVkLmFwcGx5KF90aGlzLCBbXS5jb25jYXQoYXJncywgbmV4dEFyZ3MpKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTtcbiIsImltcG9ydCB7IG9iamVjdFNwcmVhZDIgYXMgX29iamVjdFNwcmVhZDIgfSBmcm9tICcuLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcblxuZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoc291cmNlW2tleV0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIGlmICh0YXJnZXRba2V5XSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHNvdXJjZVtrZXldLCBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHRhcmdldCksIHNvdXJjZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpLmluY2x1ZGVzKCdPYmplY3QnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3Q7XG4iLCIvLyBUaGUgc291cmNlIChoYXMgYmVlbiBjaGFuZ2VkKSBpcyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzU0NjUjaXNzdWVjb21tZW50LTE1Nzg4ODMyNVxudmFyIENBTkNFTEFUSU9OX01FU1NBR0UgPSB7XG4gIHR5cGU6ICdjYW5jZWxhdGlvbicsXG4gIG1zZzogJ29wZXJhdGlvbiBpcyBtYW51YWxseSBjYW5jZWxlZCdcbn07XG5cbmZ1bmN0aW9uIG1ha2VDYW5jZWxhYmxlKHByb21pc2UpIHtcbiAgdmFyIGhhc0NhbmNlbGVkXyA9IGZhbHNlO1xuICB2YXIgd3JhcHBlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiBoYXNDYW5jZWxlZF8gPyByZWplY3QoQ0FOQ0VMQVRJT05fTUVTU0FHRSkgOiByZXNvbHZlKHZhbCk7XG4gICAgfSk7XG4gICAgcHJvbWlzZVtcImNhdGNoXCJdKHJlamVjdCk7XG4gIH0pO1xuICByZXR1cm4gd3JhcHBlZFByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoYXNDYW5jZWxlZF8gPSB0cnVlO1xuICB9LCB3cmFwcGVkUHJvbWlzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNhbmNlbGFibGU7XG5leHBvcnQgeyBDQU5DRUxBVElPTl9NRVNTQUdFIH07XG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbHMvY3VycnkuanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL3V0aWxzL2lzT2JqZWN0LmpzJztcblxuLyoqXG4gKiB2YWxpZGF0ZXMgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGFuZCBpbmZvcm1zIGFib3V0IGRlcHJlY2F0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IFxuICogQHJldHVybiB7T2JqZWN0fSBjb25maWcgLSB0aGUgdmFsaWRhdGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKi9cblxuZnVuY3Rpb24gdmFsaWRhdGVDb25maWcoY29uZmlnKSB7XG4gIGlmICghY29uZmlnKSBlcnJvckhhbmRsZXIoJ2NvbmZpZ0lzUmVxdWlyZWQnKTtcbiAgaWYgKCFpc09iamVjdChjb25maWcpKSBlcnJvckhhbmRsZXIoJ2NvbmZpZ1R5cGUnKTtcblxuICBpZiAoY29uZmlnLnVybHMpIHtcbiAgICBpbmZvcm1BYm91dERlcHJlY2F0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhzOiB7XG4gICAgICAgIHZzOiBjb25maWcudXJscy5tb25hY29CYXNlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4vKipcbiAqIGxvZ3MgZGVwcmVjYXRpb24gbWVzc2FnZVxuICovXG5cblxuZnVuY3Rpb24gaW5mb3JtQWJvdXREZXByZWNhdGlvbigpIHtcbiAgY29uc29sZS53YXJuKGVycm9yTWVzc2FnZXMuZGVwcmVjYXRpb24pO1xufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yTWVzc2FnZXMsIHR5cGUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZXNbdHlwZV0gfHwgZXJyb3JNZXNzYWdlc1tcImRlZmF1bHRcIl0pO1xufVxuXG52YXIgZXJyb3JNZXNzYWdlcyA9IHtcbiAgY29uZmlnSXNSZXF1aXJlZDogJ3RoZSBjb25maWd1cmF0aW9uIG9iamVjdCBpcyByZXF1aXJlZCcsXG4gIGNvbmZpZ1R5cGU6ICd0aGUgY29uZmlndXJhdGlvbiBvYmplY3Qgc2hvdWxkIGJlIGFuIG9iamVjdCcsXG4gIFwiZGVmYXVsdFwiOiAnYW4gdW5rbm93biBlcnJvciBhY2N1cmVkIGluIGBAbW9uYWNvLWVkaXRvci9sb2FkZXJgIHBhY2thZ2UnLFxuICBkZXByZWNhdGlvbjogXCJEZXByZWNhdGlvbiB3YXJuaW5nIVxcbiAgICBZb3UgYXJlIHVzaW5nIGRlcHJlY2F0ZWQgd2F5IG9mIGNvbmZpZ3VyYXRpb24uXFxuXFxuICAgIEluc3RlYWQgb2YgdXNpbmdcXG4gICAgICBtb25hY28uY29uZmlnKHsgdXJsczogeyBtb25hY29CYXNlOiAnLi4uJyB9IH0pXFxuICAgIHVzZVxcbiAgICAgIG1vbmFjby5jb25maWcoeyBwYXRoczogeyB2czogJy4uLicgfSB9KVxcblxcbiAgICBGb3IgbW9yZSBwbGVhc2UgY2hlY2sgdGhlIGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3N1cmVuLWF0b3lhbi9tb25hY28tbG9hZGVyI2NvbmZpZ1xcbiAgXCJcbn07XG52YXIgZXJyb3JIYW5kbGVyID0gY3VycnkodGhyb3dFcnJvcikoZXJyb3JNZXNzYWdlcyk7XG52YXIgdmFsaWRhdG9ycyA9IHtcbiAgY29uZmlnOiB2YWxpZGF0ZUNvbmZpZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdG9ycztcbmV4cG9ydCB7IGVycm9ySGFuZGxlciwgZXJyb3JNZXNzYWdlcyB9O1xuIiwiaW1wb3J0IGxvYWRlciBmcm9tICdAbW9uYWNvLWVkaXRvci9sb2FkZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE1vbmFjb0NvbnRhaW5lciBmcm9tICcuLi9Nb25hY29Db250YWluZXIvaW5kZXguanMnO1xuaW1wb3J0IHVzZU1vdW50IGZyb20gJy4uL2hvb2tzL3VzZU1vdW50L2luZGV4LmpzJztcbmltcG9ydCB1c2VVcGRhdGUgZnJvbSAnLi4vaG9va3MvdXNlVXBkYXRlL2luZGV4LmpzJztcbmltcG9ydCB7IGdldE9yQ3JlYXRlTW9kZWwsIG5vb3AgfSBmcm9tICcuLi91dGlscy9pbmRleC5qcyc7XG5cbmZ1bmN0aW9uIERpZmZFZGl0b3Ioe1xuICBvcmlnaW5hbCxcbiAgbW9kaWZpZWQsXG4gIGxhbmd1YWdlLFxuICBvcmlnaW5hbExhbmd1YWdlLFxuICBtb2RpZmllZExhbmd1YWdlLFxuXG4gIC8qID09PSAqL1xuICBvcmlnaW5hbE1vZGVsUGF0aCxcbiAgbW9kaWZpZWRNb2RlbFBhdGgsXG4gIGtlZXBDdXJyZW50T3JpZ2luYWxNb2RlbCxcbiAga2VlcEN1cnJlbnRNb2RpZmllZE1vZGVsLFxuICB0aGVtZSxcbiAgbG9hZGluZyxcbiAgb3B0aW9ucyxcblxuICAvKiA9PT0gKi9cbiAgaGVpZ2h0LFxuICB3aWR0aCxcbiAgY2xhc3NOYW1lLFxuICB3cmFwcGVyUHJvcHMsXG5cbiAgLyogPT09ICovXG4gIGJlZm9yZU1vdW50LFxuICBvbk1vdW50XG59KSB7XG4gIGNvbnN0IFtpc0VkaXRvclJlYWR5LCBzZXRJc0VkaXRvclJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTW9uYWNvTW91bnRpbmcsIHNldElzTW9uYWNvTW91bnRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbW9uYWNvUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG9uTW91bnRSZWYgPSB1c2VSZWYob25Nb3VudCk7XG4gIGNvbnN0IGJlZm9yZU1vdW50UmVmID0gdXNlUmVmKGJlZm9yZU1vdW50KTtcbiAgdXNlTW91bnQoKCkgPT4ge1xuICAgIGNvbnN0IGNhbmNlbGFibGUgPSBsb2FkZXIuaW5pdCgpO1xuICAgIGNhbmNlbGFibGUudGhlbihtb25hY28gPT4gKG1vbmFjb1JlZi5jdXJyZW50ID0gbW9uYWNvKSAmJiBzZXRJc01vbmFjb01vdW50aW5nKGZhbHNlKSkuY2F0Y2goZXJyb3IgPT4gKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci50eXBlKSAhPT0gJ2NhbmNlbGF0aW9uJyAmJiBjb25zb2xlLmVycm9yKCdNb25hY28gaW5pdGlhbGl6YXRpb246IGVycm9yOicsIGVycm9yKSk7XG4gICAgcmV0dXJuICgpID0+IGVkaXRvclJlZi5jdXJyZW50ID8gZGlzcG9zZUVkaXRvcigpIDogY2FuY2VsYWJsZS5jYW5jZWwoKTtcbiAgfSk7XG4gIHVzZVVwZGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgbW9kaWZpZWRFZGl0b3IgPSBlZGl0b3JSZWYuY3VycmVudC5nZXRNb2RpZmllZEVkaXRvcigpO1xuXG4gICAgaWYgKG1vZGlmaWVkRWRpdG9yLmdldE9wdGlvbihtb25hY29SZWYuY3VycmVudC5lZGl0b3IuRWRpdG9yT3B0aW9uLnJlYWRPbmx5KSkge1xuICAgICAgbW9kaWZpZWRFZGl0b3Iuc2V0VmFsdWUobW9kaWZpZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobW9kaWZpZWQgIT09IG1vZGlmaWVkRWRpdG9yLmdldFZhbHVlKCkpIHtcbiAgICAgICAgbW9kaWZpZWRFZGl0b3IuZXhlY3V0ZUVkaXRzKCcnLCBbe1xuICAgICAgICAgIHJhbmdlOiBtb2RpZmllZEVkaXRvci5nZXRNb2RlbCgpLmdldEZ1bGxNb2RlbFJhbmdlKCksXG4gICAgICAgICAgdGV4dDogbW9kaWZpZWQsXG4gICAgICAgICAgZm9yY2VNb3ZlTWFya2VyczogdHJ1ZVxuICAgICAgICB9XSk7XG4gICAgICAgIG1vZGlmaWVkRWRpdG9yLnB1c2hVbmRvU3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW21vZGlmaWVkXSwgaXNFZGl0b3JSZWFkeSk7XG4gIHVzZVVwZGF0ZSgoKSA9PiB7XG4gICAgZWRpdG9yUmVmLmN1cnJlbnQuZ2V0TW9kZWwoKS5vcmlnaW5hbC5zZXRWYWx1ZShvcmlnaW5hbCk7XG4gIH0sIFtvcmlnaW5hbF0sIGlzRWRpdG9yUmVhZHkpO1xuICB1c2VVcGRhdGUoKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9yaWdpbmFsLFxuICAgICAgbW9kaWZpZWRcbiAgICB9ID0gZWRpdG9yUmVmLmN1cnJlbnQuZ2V0TW9kZWwoKTtcbiAgICBtb25hY29SZWYuY3VycmVudC5lZGl0b3Iuc2V0TW9kZWxMYW5ndWFnZShvcmlnaW5hbCwgb3JpZ2luYWxMYW5ndWFnZSB8fCBsYW5ndWFnZSk7XG4gICAgbW9uYWNvUmVmLmN1cnJlbnQuZWRpdG9yLnNldE1vZGVsTGFuZ3VhZ2UobW9kaWZpZWQsIG1vZGlmaWVkTGFuZ3VhZ2UgfHwgbGFuZ3VhZ2UpO1xuICB9LCBbbGFuZ3VhZ2UsIG9yaWdpbmFsTGFuZ3VhZ2UsIG1vZGlmaWVkTGFuZ3VhZ2VdLCBpc0VkaXRvclJlYWR5KTtcbiAgdXNlVXBkYXRlKCgpID0+IHtcbiAgICBtb25hY29SZWYuY3VycmVudC5lZGl0b3Iuc2V0VGhlbWUodGhlbWUpO1xuICB9LCBbdGhlbWVdLCBpc0VkaXRvclJlYWR5KTtcbiAgdXNlVXBkYXRlKCgpID0+IHtcbiAgICBlZGl0b3JSZWYuY3VycmVudC51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xuICB9LCBbb3B0aW9uc10sIGlzRWRpdG9yUmVhZHkpO1xuICBjb25zdCBzZXRNb2RlbHMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYmVmb3JlTW91bnRSZWYuY3VycmVudChtb25hY29SZWYuY3VycmVudCk7XG4gICAgY29uc3Qgb3JpZ2luYWxNb2RlbCA9IGdldE9yQ3JlYXRlTW9kZWwobW9uYWNvUmVmLmN1cnJlbnQsIG9yaWdpbmFsLCBvcmlnaW5hbExhbmd1YWdlIHx8IGxhbmd1YWdlLCBvcmlnaW5hbE1vZGVsUGF0aCk7XG4gICAgY29uc3QgbW9kaWZpZWRNb2RlbCA9IGdldE9yQ3JlYXRlTW9kZWwobW9uYWNvUmVmLmN1cnJlbnQsIG1vZGlmaWVkLCBtb2RpZmllZExhbmd1YWdlIHx8IGxhbmd1YWdlLCBtb2RpZmllZE1vZGVsUGF0aCk7XG4gICAgZWRpdG9yUmVmLmN1cnJlbnQuc2V0TW9kZWwoe1xuICAgICAgb3JpZ2luYWw6IG9yaWdpbmFsTW9kZWwsXG4gICAgICBtb2RpZmllZDogbW9kaWZpZWRNb2RlbFxuICAgIH0pO1xuICB9LCBbbGFuZ3VhZ2UsIG1vZGlmaWVkLCBtb2RpZmllZExhbmd1YWdlLCBvcmlnaW5hbCwgb3JpZ2luYWxMYW5ndWFnZSwgb3JpZ2luYWxNb2RlbFBhdGgsIG1vZGlmaWVkTW9kZWxQYXRoXSk7XG4gIGNvbnN0IGNyZWF0ZUVkaXRvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBlZGl0b3JSZWYuY3VycmVudCA9IG1vbmFjb1JlZi5jdXJyZW50LmVkaXRvci5jcmVhdGVEaWZmRWRpdG9yKGNvbnRhaW5lclJlZi5jdXJyZW50LCB7XG4gICAgICBhdXRvbWF0aWNMYXlvdXQ6IHRydWUsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfSk7XG4gICAgc2V0TW9kZWxzKCk7XG4gICAgbW9uYWNvUmVmLmN1cnJlbnQuZWRpdG9yLnNldFRoZW1lKHRoZW1lKTtcbiAgICBzZXRJc0VkaXRvclJlYWR5KHRydWUpO1xuICB9LCBbb3B0aW9ucywgdGhlbWUsIHNldE1vZGVsc10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0VkaXRvclJlYWR5KSB7XG4gICAgICBvbk1vdW50UmVmLmN1cnJlbnQoZWRpdG9yUmVmLmN1cnJlbnQsIG1vbmFjb1JlZi5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtpc0VkaXRvclJlYWR5XSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIWlzTW9uYWNvTW91bnRpbmcgJiYgIWlzRWRpdG9yUmVhZHkgJiYgY3JlYXRlRWRpdG9yKCk7XG4gIH0sIFtpc01vbmFjb01vdW50aW5nLCBpc0VkaXRvclJlYWR5LCBjcmVhdGVFZGl0b3JdKTtcblxuICBmdW5jdGlvbiBkaXNwb3NlRWRpdG9yKCkge1xuICAgIGNvbnN0IG1vZGVscyA9IGVkaXRvclJlZi5jdXJyZW50LmdldE1vZGVsKCk7XG5cbiAgICBpZiAoIWtlZXBDdXJyZW50T3JpZ2luYWxNb2RlbCkge1xuICAgICAgdmFyIF9tb2RlbHMkb3JpZ2luYWw7XG5cbiAgICAgIChfbW9kZWxzJG9yaWdpbmFsID0gbW9kZWxzLm9yaWdpbmFsKSA9PT0gbnVsbCB8fCBfbW9kZWxzJG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbW9kZWxzJG9yaWdpbmFsLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoIWtlZXBDdXJyZW50TW9kaWZpZWRNb2RlbCkge1xuICAgICAgdmFyIF9tb2RlbHMkbW9kaWZpZWQ7XG5cbiAgICAgIChfbW9kZWxzJG1vZGlmaWVkID0gbW9kZWxzLm1vZGlmaWVkKSA9PT0gbnVsbCB8fCBfbW9kZWxzJG1vZGlmaWVkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbW9kZWxzJG1vZGlmaWVkLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBlZGl0b3JSZWYuY3VycmVudC5kaXNwb3NlKCk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9uYWNvQ29udGFpbmVyLCB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGlzRWRpdG9yUmVhZHk6IGlzRWRpdG9yUmVhZHksXG4gICAgbG9hZGluZzogbG9hZGluZyxcbiAgICBfcmVmOiBjb250YWluZXJSZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgd3JhcHBlclByb3BzOiB3cmFwcGVyUHJvcHNcbiAgfSk7XG59XG5cbkRpZmZFZGl0b3IucHJvcFR5cGVzID0ge1xuICBvcmlnaW5hbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbW9kaWZpZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcmlnaW5hbExhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtb2RpZmllZExhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qID09PSAqL1xuICBvcmlnaW5hbE1vZGVsUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbW9kaWZpZWRNb2RlbFBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGtlZXBDdXJyZW50T3JpZ2luYWxNb2RlbDogUHJvcFR5cGVzLmJvb2wsXG4gIGtlZXBDdXJyZW50TW9kaWZpZWRNb2RlbDogUHJvcFR5cGVzLmJvb2wsXG4gIHRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qID09PSAqL1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyogPT09ICovXG4gIGJlZm9yZU1vdW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5EaWZmRWRpdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGhlbWU6ICdsaWdodCcsXG4gIGxvYWRpbmc6ICdMb2FkaW5nLi4uJyxcbiAgb3B0aW9uczoge30sXG4gIGtlZXBDdXJyZW50T3JpZ2luYWxNb2RlbDogZmFsc2UsXG4gIGtlZXBDdXJyZW50TW9kaWZpZWRNb2RlbDogZmFsc2UsXG5cbiAgLyogPT09ICovXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3cmFwcGVyUHJvcHM6IHt9LFxuXG4gIC8qID09PSAqL1xuICBiZWZvcmVNb3VudDogbm9vcCxcbiAgb25Nb3VudDogbm9vcFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlmZkVkaXRvcjtcbiIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlmZkVkaXRvciBmcm9tICcuL0RpZmZFZGl0b3IuanMnO1xuXG52YXIgaW5kZXggPSAvKiNfX1BVUkVfXyovbWVtbyhEaWZmRWRpdG9yKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJpbXBvcnQgbG9hZGVyIGZyb20gJ0Btb25hY28tZWRpdG9yL2xvYWRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTW9uYWNvQ29udGFpbmVyIGZyb20gJy4uL01vbmFjb0NvbnRhaW5lci9pbmRleC5qcyc7XG5pbXBvcnQgdXNlTW91bnQgZnJvbSAnLi4vaG9va3MvdXNlTW91bnQvaW5kZXguanMnO1xuaW1wb3J0IHVzZVVwZGF0ZSBmcm9tICcuLi9ob29rcy91c2VVcGRhdGUvaW5kZXguanMnO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVNb2RlbCwgbm9vcCwgaXNVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgdXNlUHJldmlvdXMgZnJvbSAnLi4vaG9va3MvdXNlUHJldmlvdXMvaW5kZXguanMnO1xuXG5jb25zdCB2aWV3U3RhdGVzID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBFZGl0b3Ioe1xuICBkZWZhdWx0VmFsdWUsXG4gIGRlZmF1bHRMYW5ndWFnZSxcbiAgZGVmYXVsdFBhdGgsXG4gIHZhbHVlLFxuICBsYW5ndWFnZSxcbiAgcGF0aCxcblxuICAvKiA9PT0gKi9cbiAgdGhlbWUsXG4gIGxpbmUsXG4gIGxvYWRpbmcsXG4gIG9wdGlvbnMsXG4gIG92ZXJyaWRlU2VydmljZXMsXG4gIHNhdmVWaWV3U3RhdGUsXG4gIGtlZXBDdXJyZW50TW9kZWwsXG5cbiAgLyogPT09ICovXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIGNsYXNzTmFtZSxcbiAgd3JhcHBlclByb3BzLFxuXG4gIC8qID09PSAqL1xuICBiZWZvcmVNb3VudCxcbiAgb25Nb3VudCxcbiAgb25DaGFuZ2UsXG4gIG9uVmFsaWRhdGVcbn0pIHtcbiAgY29uc3QgW2lzRWRpdG9yUmVhZHksIHNldElzRWRpdG9yUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNNb25hY29Nb3VudGluZywgc2V0SXNNb25hY29Nb3VudGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgbW9uYWNvUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgb25Nb3VudFJlZiA9IHVzZVJlZihvbk1vdW50KTtcbiAgY29uc3QgYmVmb3JlTW91bnRSZWYgPSB1c2VSZWYoYmVmb3JlTW91bnQpO1xuICBjb25zdCBzdWJzY3JpcHRpb25SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKHZhbHVlKTtcbiAgY29uc3QgcHJldmlvdXNQYXRoID0gdXNlUHJldmlvdXMocGF0aCk7XG4gIHVzZU1vdW50KCgpID0+IHtcbiAgICBjb25zdCBjYW5jZWxhYmxlID0gbG9hZGVyLmluaXQoKTtcbiAgICBjYW5jZWxhYmxlLnRoZW4obW9uYWNvID0+IChtb25hY29SZWYuY3VycmVudCA9IG1vbmFjbykgJiYgc2V0SXNNb25hY29Nb3VudGluZyhmYWxzZSkpLmNhdGNoKGVycm9yID0+IChlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IudHlwZSkgIT09ICdjYW5jZWxhdGlvbicgJiYgY29uc29sZS5lcnJvcignTW9uYWNvIGluaXRpYWxpemF0aW9uOiBlcnJvcjonLCBlcnJvcikpO1xuICAgIHJldHVybiAoKSA9PiBlZGl0b3JSZWYuY3VycmVudCA/IGRpc3Bvc2VFZGl0b3IoKSA6IGNhbmNlbGFibGUuY2FuY2VsKCk7XG4gIH0pO1xuICB1c2VVcGRhdGUoKCkgPT4ge1xuICAgIGNvbnN0IG1vZGVsID0gZ2V0T3JDcmVhdGVNb2RlbChtb25hY29SZWYuY3VycmVudCwgZGVmYXVsdFZhbHVlIHx8IHZhbHVlLCBkZWZhdWx0TGFuZ3VhZ2UgfHwgbGFuZ3VhZ2UsIHBhdGgpO1xuXG4gICAgaWYgKG1vZGVsICE9PSBlZGl0b3JSZWYuY3VycmVudC5nZXRNb2RlbCgpKSB7XG4gICAgICBzYXZlVmlld1N0YXRlICYmIHZpZXdTdGF0ZXMuc2V0KHByZXZpb3VzUGF0aCwgZWRpdG9yUmVmLmN1cnJlbnQuc2F2ZVZpZXdTdGF0ZSgpKTtcbiAgICAgIGVkaXRvclJlZi5jdXJyZW50LnNldE1vZGVsKG1vZGVsKTtcbiAgICAgIHNhdmVWaWV3U3RhdGUgJiYgZWRpdG9yUmVmLmN1cnJlbnQucmVzdG9yZVZpZXdTdGF0ZSh2aWV3U3RhdGVzLmdldChwYXRoKSk7XG4gICAgfVxuICB9LCBbcGF0aF0sIGlzRWRpdG9yUmVhZHkpO1xuICB1c2VVcGRhdGUoKCkgPT4ge1xuICAgIGVkaXRvclJlZi5jdXJyZW50LnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gIH0sIFtvcHRpb25zXSwgaXNFZGl0b3JSZWFkeSk7XG4gIHVzZVVwZGF0ZSgoKSA9PiB7XG4gICAgaWYgKGVkaXRvclJlZi5jdXJyZW50LmdldE9wdGlvbihtb25hY29SZWYuY3VycmVudC5lZGl0b3IuRWRpdG9yT3B0aW9uLnJlYWRPbmx5KSkge1xuICAgICAgZWRpdG9yUmVmLmN1cnJlbnQuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgIT09IGVkaXRvclJlZi5jdXJyZW50LmdldFZhbHVlKCkpIHtcbiAgICAgICAgZWRpdG9yUmVmLmN1cnJlbnQuZXhlY3V0ZUVkaXRzKCcnLCBbe1xuICAgICAgICAgIHJhbmdlOiBlZGl0b3JSZWYuY3VycmVudC5nZXRNb2RlbCgpLmdldEZ1bGxNb2RlbFJhbmdlKCksXG4gICAgICAgICAgdGV4dDogdmFsdWUsXG4gICAgICAgICAgZm9yY2VNb3ZlTWFya2VyczogdHJ1ZVxuICAgICAgICB9XSk7XG4gICAgICAgIGVkaXRvclJlZi5jdXJyZW50LnB1c2hVbmRvU3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3ZhbHVlXSwgaXNFZGl0b3JSZWFkeSk7XG4gIHVzZVVwZGF0ZSgoKSA9PiB7XG4gICAgbW9uYWNvUmVmLmN1cnJlbnQuZWRpdG9yLnNldE1vZGVsTGFuZ3VhZ2UoZWRpdG9yUmVmLmN1cnJlbnQuZ2V0TW9kZWwoKSwgbGFuZ3VhZ2UpO1xuICB9LCBbbGFuZ3VhZ2VdLCBpc0VkaXRvclJlYWR5KTtcbiAgdXNlVXBkYXRlKCgpID0+IHtcbiAgICAvLyByZWFzb24gZm9yIHVuZGVmaW5lZCBjaGVjazogaHR0cHM6Ly9naXRodWIuY29tL3N1cmVuLWF0b3lhbi9tb25hY28tcmVhY3QvcHVsbC8xODhcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGxpbmUpKSB7XG4gICAgICBlZGl0b3JSZWYuY3VycmVudC5yZXZlYWxMaW5lKGxpbmUpO1xuICAgIH1cbiAgfSwgW2xpbmVdLCBpc0VkaXRvclJlYWR5KTtcbiAgdXNlVXBkYXRlKCgpID0+IHtcbiAgICBtb25hY29SZWYuY3VycmVudC5lZGl0b3Iuc2V0VGhlbWUodGhlbWUpO1xuICB9LCBbdGhlbWVdLCBpc0VkaXRvclJlYWR5KTtcbiAgY29uc3QgY3JlYXRlRWRpdG9yID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGJlZm9yZU1vdW50UmVmLmN1cnJlbnQobW9uYWNvUmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IGF1dG9DcmVhdGVkTW9kZWxQYXRoID0gcGF0aCB8fCBkZWZhdWx0UGF0aDtcbiAgICBjb25zdCBkZWZhdWx0TW9kZWwgPSBnZXRPckNyZWF0ZU1vZGVsKG1vbmFjb1JlZi5jdXJyZW50LCB2YWx1ZSB8fCBkZWZhdWx0VmFsdWUsIGRlZmF1bHRMYW5ndWFnZSB8fCBsYW5ndWFnZSwgYXV0b0NyZWF0ZWRNb2RlbFBhdGgpO1xuICAgIGVkaXRvclJlZi5jdXJyZW50ID0gbW9uYWNvUmVmLmN1cnJlbnQuZWRpdG9yLmNyZWF0ZShjb250YWluZXJSZWYuY3VycmVudCwge1xuICAgICAgbW9kZWw6IGRlZmF1bHRNb2RlbCxcbiAgICAgIGF1dG9tYXRpY0xheW91dDogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9LCBvdmVycmlkZVNlcnZpY2VzKTtcbiAgICBzYXZlVmlld1N0YXRlICYmIGVkaXRvclJlZi5jdXJyZW50LnJlc3RvcmVWaWV3U3RhdGUodmlld1N0YXRlcy5nZXQoYXV0b0NyZWF0ZWRNb2RlbFBhdGgpKTtcbiAgICBtb25hY29SZWYuY3VycmVudC5lZGl0b3Iuc2V0VGhlbWUodGhlbWUpO1xuICAgIHNldElzRWRpdG9yUmVhZHkodHJ1ZSk7XG4gIH0sIFtkZWZhdWx0VmFsdWUsIGRlZmF1bHRMYW5ndWFnZSwgZGVmYXVsdFBhdGgsIHZhbHVlLCBsYW5ndWFnZSwgcGF0aCwgb3B0aW9ucywgb3ZlcnJpZGVTZXJ2aWNlcywgc2F2ZVZpZXdTdGF0ZSwgdGhlbWVdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNFZGl0b3JSZWFkeSkge1xuICAgICAgb25Nb3VudFJlZi5jdXJyZW50KGVkaXRvclJlZi5jdXJyZW50LCBtb25hY29SZWYuY3VycmVudCk7XG4gICAgfVxuICB9LCBbaXNFZGl0b3JSZWFkeV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICFpc01vbmFjb01vdW50aW5nICYmICFpc0VkaXRvclJlYWR5ICYmIGNyZWF0ZUVkaXRvcigpO1xuICB9LCBbaXNNb25hY29Nb3VudGluZywgaXNFZGl0b3JSZWFkeSwgY3JlYXRlRWRpdG9yXSk7IC8vIHN1YnNjcmlwdGlvblxuICAvLyB0byBhdm9pZCB1bm5lY2Vzc2FyeSB1cGRhdGVzIChhdHRhY2ggLSBkaXNwb3NlIGxpc3RlbmVyKSBpbiBzdWJzY3JpcHRpb25cblxuICB2YWx1ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRWRpdG9yUmVhZHkgJiYgb25DaGFuZ2UpIHtcbiAgICAgIHZhciBfc3Vic2NyaXB0aW9uUmVmJGN1cnIsIF9lZGl0b3JSZWYkY3VycmVudDtcblxuICAgICAgKF9zdWJzY3JpcHRpb25SZWYkY3VyciA9IHN1YnNjcmlwdGlvblJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfc3Vic2NyaXB0aW9uUmVmJGN1cnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdWJzY3JpcHRpb25SZWYkY3Vyci5kaXNwb3NlKCk7XG4gICAgICBzdWJzY3JpcHRpb25SZWYuY3VycmVudCA9IChfZWRpdG9yUmVmJGN1cnJlbnQgPSBlZGl0b3JSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2VkaXRvclJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZWRpdG9yUmVmJGN1cnJlbnQub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBlZGl0b3JWYWx1ZSA9IGVkaXRvclJlZi5jdXJyZW50LmdldFZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgIT09IGVkaXRvclZhbHVlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZWRpdG9yVmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbaXNFZGl0b3JSZWFkeSwgb25DaGFuZ2VdKTsgLy8gb25WYWxpZGF0ZVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRWRpdG9yUmVhZHkpIHtcbiAgICAgIGNvbnN0IGNoYW5nZU1hcmtlcnNMaXN0ZW5lciA9IG1vbmFjb1JlZi5jdXJyZW50LmVkaXRvci5vbkRpZENoYW5nZU1hcmtlcnModXJpcyA9PiB7XG4gICAgICAgIHZhciBfZWRpdG9yUmVmJGN1cnJlbnQkZ2U7XG5cbiAgICAgICAgY29uc3QgZWRpdG9yVXJpID0gKF9lZGl0b3JSZWYkY3VycmVudCRnZSA9IGVkaXRvclJlZi5jdXJyZW50LmdldE1vZGVsKCkpID09PSBudWxsIHx8IF9lZGl0b3JSZWYkY3VycmVudCRnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VkaXRvclJlZiRjdXJyZW50JGdlLnVyaTtcblxuICAgICAgICBpZiAoZWRpdG9yVXJpKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudEVkaXRvckhhc01hcmtlckNoYW5nZXMgPSB1cmlzLmZpbmQodXJpID0+IHVyaS5wYXRoID09PSBlZGl0b3JVcmkucGF0aCk7XG5cbiAgICAgICAgICBpZiAoY3VycmVudEVkaXRvckhhc01hcmtlckNoYW5nZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlcnMgPSBtb25hY29SZWYuY3VycmVudC5lZGl0b3IuZ2V0TW9kZWxNYXJrZXJzKHtcbiAgICAgICAgICAgICAgcmVzb3VyY2U6IGVkaXRvclVyaVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvblZhbGlkYXRlID09PSBudWxsIHx8IG9uVmFsaWRhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uVmFsaWRhdGUobWFya2Vycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNoYW5nZU1hcmtlcnNMaXN0ZW5lciA9PT0gbnVsbCB8fCBjaGFuZ2VNYXJrZXJzTGlzdGVuZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoYW5nZU1hcmtlcnNMaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2lzRWRpdG9yUmVhZHksIG9uVmFsaWRhdGVdKTtcblxuICBmdW5jdGlvbiBkaXNwb3NlRWRpdG9yKCkge1xuICAgIHZhciBfc3Vic2NyaXB0aW9uUmVmJGN1cnIyO1xuXG4gICAgKF9zdWJzY3JpcHRpb25SZWYkY3VycjIgPSBzdWJzY3JpcHRpb25SZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3N1YnNjcmlwdGlvblJlZiRjdXJyMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N1YnNjcmlwdGlvblJlZiRjdXJyMi5kaXNwb3NlKCk7XG5cbiAgICBpZiAoa2VlcEN1cnJlbnRNb2RlbCkge1xuICAgICAgc2F2ZVZpZXdTdGF0ZSAmJiB2aWV3U3RhdGVzLnNldChwYXRoLCBlZGl0b3JSZWYuY3VycmVudC5zYXZlVmlld1N0YXRlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2VkaXRvclJlZiRjdXJyZW50JGdlMjtcblxuICAgICAgKF9lZGl0b3JSZWYkY3VycmVudCRnZTIgPSBlZGl0b3JSZWYuY3VycmVudC5nZXRNb2RlbCgpKSA9PT0gbnVsbCB8fCBfZWRpdG9yUmVmJGN1cnJlbnQkZ2UyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZWRpdG9yUmVmJGN1cnJlbnQkZ2UyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBlZGl0b3JSZWYuY3VycmVudC5kaXNwb3NlKCk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9uYWNvQ29udGFpbmVyLCB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGlzRWRpdG9yUmVhZHk6IGlzRWRpdG9yUmVhZHksXG4gICAgbG9hZGluZzogbG9hZGluZyxcbiAgICBfcmVmOiBjb250YWluZXJSZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgd3JhcHBlclByb3BzOiB3cmFwcGVyUHJvcHNcbiAgfSk7XG59XG5cbkVkaXRvci5wcm9wVHlwZXMgPSB7XG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRMYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qID09PSAqL1xuICB0aGVtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGluZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9hZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3ZlcnJpZGVTZXJ2aWNlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2F2ZVZpZXdTdGF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGtlZXBDdXJyZW50TW9kZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qID09PSAqL1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyogPT09ICovXG4gIGJlZm9yZU1vdW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VudDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWxpZGF0ZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5FZGl0b3IuZGVmYXVsdFByb3BzID0ge1xuICB0aGVtZTogJ2xpZ2h0JyxcbiAgbG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuICBvcHRpb25zOiB7fSxcbiAgb3ZlcnJpZGVTZXJ2aWNlczoge30sXG4gIHNhdmVWaWV3U3RhdGU6IHRydWUsXG4gIGtlZXBDdXJyZW50TW9kZWw6IGZhbHNlLFxuXG4gIC8qID09PSAqL1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd3JhcHBlclByb3BzOiB7fSxcblxuICAvKiA9PT0gKi9cbiAgYmVmb3JlTW91bnQ6IG5vb3AsXG4gIG9uTW91bnQ6IG5vb3AsXG4gIG9uVmFsaWRhdGU6IG5vb3Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcbiIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yLmpzJztcblxudmFyIGluZGV4ID0gLyojX19QVVJFX18qL21lbW8oRWRpdG9yKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBsb2FkaW5nU3R5bGVzID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59O1xuXG5mdW5jdGlvbiBMb2FkaW5nKHtcbiAgY29udGVudFxufSkge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiBsb2FkaW5nU3R5bGVzXG4gIH0sIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBleHRlbmRzIGFzIF9leHRlbmRzIH0gZnJvbSAnLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nL0xvYWRpbmcuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5qcyc7XG5cbi8vIG9uZSBvZiB0aGUgcmVhc29ucyB3aHkgd2UgdXNlIGEgc2VwYXJhdGUgcHJvcCBmb3IgcGFzc2luZyByZWYgaW5zdGVhZCBvZiB1c2luZyBmb3J3YXJkcmVmXG5cbmZ1bmN0aW9uIE1vbmFjb0NvbnRhaW5lcih7XG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIGlzRWRpdG9yUmVhZHksXG4gIGxvYWRpbmcsXG4gIF9yZWYsXG4gIGNsYXNzTmFtZSxcbiAgd3JhcHBlclByb3BzXG59KSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgX2V4dGVuZHMoe1xuICAgIHN0eWxlOiB7IC4uLnN0eWxlcy53cmFwcGVyLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICB9XG4gIH0sIHdyYXBwZXJQcm9wcyksICFpc0VkaXRvclJlYWR5ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICBjb250ZW50OiBsb2FkaW5nXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiBfcmVmLFxuICAgIHN0eWxlOiB7IC4uLnN0eWxlcy5mdWxsV2lkdGgsXG4gICAgICAuLi4oIWlzRWRpdG9yUmVhZHkgJiYgc3R5bGVzLmhpZGUpXG4gICAgfSxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICB9KSk7XG59XG5cbk1vbmFjb0NvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICBpc0VkaXRvclJlYWR5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9uYWNvQ29udGFpbmVyO1xuIiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb25hY29Db250YWluZXIkMSBmcm9tICcuL01vbmFjb0NvbnRhaW5lci5qcyc7XG5cbnZhciBNb25hY29Db250YWluZXIgPSAvKiNfX1BVUkVfXyovbWVtbyhNb25hY29Db250YWluZXIkMSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vbmFjb0NvbnRhaW5lcjtcbiIsImNvbnN0IHN0eWxlcyA9IHtcbiAgd3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0QWxpZ246ICdpbml0aWFsJ1xuICB9LFxuICBmdWxsV2lkdGg6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIGhpZGU6IHtcbiAgICBkaXNwbGF5OiAnbm9uZSdcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IHsgX2V4dGVuZHMgYXMgZXh0ZW5kcyB9O1xuIiwiaW1wb3J0IGxvYWRlciBmcm9tICdAbW9uYWNvLWVkaXRvci9sb2FkZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTW91bnQgZnJvbSAnLi4vdXNlTW91bnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiB1c2VNb25hY28oKSB7XG4gIGNvbnN0IFttb25hY28sIHNldE1vbmFjb10gPSB1c2VTdGF0ZShsb2FkZXIuX19nZXRNb25hY29JbnN0YW5jZSgpKTtcbiAgdXNlTW91bnQoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxhYmxlO1xuXG4gICAgaWYgKCFtb25hY28pIHtcbiAgICAgIGNhbmNlbGFibGUgPSBsb2FkZXIuaW5pdCgpO1xuICAgICAgY2FuY2VsYWJsZS50aGVuKG1vbmFjbyA9PiB7XG4gICAgICAgIHNldE1vbmFjbyhtb25hY28pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHZhciBfY2FuY2VsYWJsZTtcblxuICAgICAgcmV0dXJuIChfY2FuY2VsYWJsZSA9IGNhbmNlbGFibGUpID09PSBudWxsIHx8IF9jYW5jZWxhYmxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY2FuY2VsYWJsZS5jYW5jZWwoKTtcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIG1vbmFjbztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9uYWNvO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VNb3VudChlZmZlY3QpIHtcbiAgdXNlRWZmZWN0KGVmZmVjdCwgW10pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNb3VudDtcbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQcmV2aW91cztcbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VVcGRhdGUoZWZmZWN0LCBkZXBzLCBhcHBseUNoYW5nZXMgPSB0cnVlKSB7XG4gIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xuICB1c2VFZmZlY3QoaXNJbml0aWFsTW91bnQuY3VycmVudCB8fCAhYXBwbHlDaGFuZ2VzID8gKCkgPT4ge1xuICAgIGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcbiAgfSA6IGVmZmVjdCwgZGVwcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVwZGF0ZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgbG9hZGVyIH0gZnJvbSAnQG1vbmFjby1lZGl0b3IvbG9hZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlmZkVkaXRvciB9IGZyb20gJy4vRGlmZkVkaXRvci9pbmRleC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZU1vbmFjbyB9IGZyb20gJy4vaG9va3MvdXNlTW9uYWNvL2luZGV4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0VkaXRvci9pbmRleC5qcyc7XG4iLCJmdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVNb2RlbChtb25hY28sIHZhbHVlLCBsYW5ndWFnZSwgcGF0aCkge1xuICByZXR1cm4gZ2V0TW9kZWwobW9uYWNvLCBwYXRoKSB8fCBjcmVhdGVNb2RlbChtb25hY28sIHZhbHVlLCBsYW5ndWFnZSwgcGF0aCk7XG59XG5cbmZ1bmN0aW9uIGdldE1vZGVsKG1vbmFjbywgcGF0aCkge1xuICByZXR1cm4gbW9uYWNvLmVkaXRvci5nZXRNb2RlbChjcmVhdGVNb2RlbFVyaShtb25hY28sIHBhdGgpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kZWwobW9uYWNvLCB2YWx1ZSwgbGFuZ3VhZ2UsIHBhdGgpIHtcbiAgcmV0dXJuIG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodmFsdWUsIGxhbmd1YWdlLCBwYXRoICYmIGNyZWF0ZU1vZGVsVXJpKG1vbmFjbywgcGF0aCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RlbFVyaShtb25hY28sIHBhdGgpIHtcbiAgcmV0dXJuIG1vbmFjby5VcmkucGFyc2UocGF0aCk7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dCA9PT0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgeyBnZXRPckNyZWF0ZU1vZGVsLCBpc1VuZGVmaW5lZCwgbm9vcCB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb25hY29FZGl0b3IsIHsgbG9hZGVyIGFzIG1vbmFjb0VkaXRvckxvYWRlciwgdXNlTW9uYWNvIH0gZnJvbSAnQG1vbmFjby1lZGl0b3IvcmVhY3QnO1xuaW1wb3J0IGRlZmluZVRoZW1lcyBmcm9tICcuL3RoZW1lJztcbmltcG9ydCB7IHVzZVRoZW1lMiB9IGZyb20gJy4uLy4uL3RoZW1lcyc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0TW9uYWNvRWRpdG9yUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxubGV0IGluaXRhbGl6ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGluaXRNb25hY28oKSB7XG4gIGlmIChpbml0YWxpemVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbW9uYWNvRWRpdG9yTG9hZGVyLmNvbmZpZyh7XG4gICAgcGF0aHM6IHtcbiAgICAgIHZzOiAod2luZG93Ll9fZ3JhZmFuYV9wdWJsaWNfcGF0aF9fID8/ICdwdWJsaWMvJykgKyAnbGliL21vbmFjby9taW4vdnMnLFxuICAgIH0sXG4gIH0pO1xuICBpbml0YWxpemVkID0gdHJ1ZTtcbiAgbW9uYWNvRWRpdG9yTG9hZGVyLmluaXQoKS50aGVuKChtb25hY28pID0+IHtcbiAgICAvLyB0aGlzIGNhbGwgbWFrZXMgc3VyZSB0aGUgdGhlbWVzIGV4aXN0LlxuICAgIC8vIHRoZXkgd2lsbCBub3QgaGF2ZSB0aGUgY29ycmVjdCBjb2xvcnMsXG4gICAgLy8gYnV0IHdlIG5lZWQgdGhlbSB0byBleGlzdCBzaW5jZSB0aGUgYmVnaW5uaW5nLFxuICAgIC8vIGJlY2F1c2UgaWYgd2Ugc3RhcnQgYSBtb25hY28gaW5zdGFuY2Ugd2l0aFxuICAgIC8vIGEgdGhlbWUgdGhhdCBkb2VzIG5vdCBleGlzdCwgaXQgd2lsbCBub3Qgd29yayB3ZWxsLlxuICAgIGRlZmluZVRoZW1lcyhtb25hY28pO1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IFJlYWN0TW9uYWNvRWRpdG9yID0gKHByb3BzOiBSZWFjdE1vbmFjb0VkaXRvclByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IG1vbmFjbyA9IHVzZU1vbmFjbygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbW9uYWNvIGNhbiBiZSBudWxsIGF0IHRoZSBiZWdpbm5pbmcsIGJlY2F1c2UgaXQgaXMgbG9hZGVkIGluIGFzeW5jaHJvbm91c2x5XG4gICAgaWYgKG1vbmFjbyAhPT0gbnVsbCkge1xuICAgICAgZGVmaW5lVGhlbWVzKG1vbmFjbywgdGhlbWUpO1xuICAgIH1cbiAgfSwgW21vbmFjbywgdGhlbWVdKTtcblxuICBpbml0TW9uYWNvKCk7XG5cbiAgY29uc3QgbW9uYWNvVGhlbWUgPSB0aGVtZS5pc0RhcmsgPyAnZ3JhZmFuYS1kYXJrJyA6ICdncmFmYW5hLWxpZ2h0JztcblxuICByZXR1cm4gPE1vbmFjb0VkaXRvciB0aGVtZT17bW9uYWNvVGhlbWV9IHsuLi5wcm9wc30gLz47XG59O1xuIiwiaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTW9uYWNvLCBtb25hY29UeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBnZXRDb2xvcnModGhlbWU/OiBHcmFmYW5hVGhlbWUyKTogbW9uYWNvVHlwZXMuZWRpdG9yLklDb2xvcnMge1xuICBpZiAodGhlbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7fTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2VkaXRvci5iYWNrZ3JvdW5kJzogdGhlbWUuY29tcG9uZW50cy5pbnB1dC5iYWNrZ3JvdW5kLFxuICAgICAgJ21pbmltYXAuYmFja2dyb3VuZCc6IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeSxcbiAgICB9O1xuICB9XG59XG5cbi8vIHdlIHN1cHBvcnQgY2FsbGluZyB0aGlzIHdpdGhvdXQgYSB0aGVtZSwgaXQgd2lsbCBtYWtlIHN1cmUgdGhlIHRoZW1lc1xuLy8gYXJlIHJlZ2lzdGVyZWQgaW4gbW9uYWNvLCBldmVuIGlmIHRoZSBjb2xvcnMgYXJlIG5vdCBwZXJmZWN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5lVGhlbWVzKG1vbmFjbzogTW9uYWNvLCB0aGVtZT86IEdyYWZhbmFUaGVtZTIpIHtcbiAgLy8gY29sb3IgdG9rZW5zIGFyZSBkZWZpbmVkIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC92c2NvZGUvYmxvYi9tYWluL3NyYy92cy9wbGF0Zm9ybS90aGVtZS9jb21tb24vY29sb3JSZWdpc3RyeS50cyNMMTc0XG4gIGNvbnN0IGNvbG9ycyA9IGdldENvbG9ycyh0aGVtZSk7XG4gIG1vbmFjby5lZGl0b3IuZGVmaW5lVGhlbWUoJ2dyYWZhbmEtZGFyaycsIHtcbiAgICBiYXNlOiAndnMtZGFyaycsXG4gICAgaW5oZXJpdDogdHJ1ZSxcbiAgICBjb2xvcnM6IGNvbG9ycyxcbiAgICAvLyBmYWxsYmFjayBzeW50YXggaGlnaGxpZ2h0aW5nIGZvciBsYW5ndWFnZXMgdGhhdCBtaWNyb3NvZnQgZG9lc24ndCBoYW5kbGUgKGV4IGNsb3Vkd2F0Y2gncyBtZXRyaWMgbWF0aClcbiAgICBydWxlczogW1xuICAgICAgeyB0b2tlbjogJ3ByZWRlZmluZWQnLCBmb3JlZ3JvdW5kOiB0aGVtZT8udmlzdWFsaXphdGlvbi5nZXRDb2xvckJ5TmFtZSgncHVycGxlJykgfSxcbiAgICAgIHsgdG9rZW46ICdvcGVyYXRvcicsIGZvcmVncm91bmQ6IHRoZW1lPy52aXN1YWxpemF0aW9uLmdldENvbG9yQnlOYW1lKCdvcmFuZ2UnKSB9LFxuICAgICAgeyB0b2tlbjogJ3RhZycsIGZvcmVncm91bmQ6IHRoZW1lPy52aXN1YWxpemF0aW9uLmdldENvbG9yQnlOYW1lKCdncmVlbicpIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgbW9uYWNvLmVkaXRvci5kZWZpbmVUaGVtZSgnZ3JhZmFuYS1saWdodCcsIHtcbiAgICBiYXNlOiAndnMnLFxuICAgIGluaGVyaXQ6IHRydWUsXG4gICAgY29sb3JzOiBjb2xvcnMsXG4gICAgLy8gZmFsbGJhY2sgc3ludGF4IGhpZ2hsaWdodGluZyBmb3IgbGFuZ3VhZ2VzIHRoYXQgbWljcm9zb2Z0IGRvZXNuJ3QgaGFuZGxlIChleCBjbG91ZHdhdGNoJ3MgbWV0cmljIG1hdGgpXG4gICAgcnVsZXM6IFtcbiAgICAgIHsgdG9rZW46ICdwcmVkZWZpbmVkJywgZm9yZWdyb3VuZDogdGhlbWU/LnZpc3VhbGl6YXRpb24uZ2V0Q29sb3JCeU5hbWUoJ3B1cnBsZScpIH0sXG4gICAgICB7IHRva2VuOiAnb3BlcmF0b3InLCBmb3JlZ3JvdW5kOiB0aGVtZT8udmlzdWFsaXphdGlvbi5nZXRDb2xvckJ5TmFtZSgnb3JhbmdlJykgfSxcbiAgICAgIHsgdG9rZW46ICd0YWcnLCBmb3JlZ3JvdW5kOiB0aGVtZT8udmlzdWFsaXphdGlvbi5nZXRDb2xvckJ5TmFtZSgnZ3JlZW4nKSB9LFxuICAgIF0sXG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZm5zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGZucy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoeSwgZikge1xuICAgICAgcmV0dXJuIGYoeSk7XG4gICAgfSwgeCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGN1cnJ5KGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJncy5sZW5ndGggPj0gZm4ubGVuZ3RoID8gZm4uYXBwbHkodGhpcywgYXJncykgOiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIG5leHRBcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIG5leHRBcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyaWVkLmFwcGx5KF90aGlzLCBbXS5jb25jYXQoYXJncywgbmV4dEFyZ3MpKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkuaW5jbHVkZXMoJ09iamVjdCcpO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGFuZ2VzKGluaXRpYWwsIGNoYW5nZXMpIHtcbiAgaWYgKCFpc09iamVjdChjaGFuZ2VzKSkgZXJyb3JIYW5kbGVyKCdjaGFuZ2VUeXBlJyk7XG4gIGlmIChPYmplY3Qua2V5cyhjaGFuZ2VzKS5zb21lKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIHJldHVybiAhaGFzT3duUHJvcGVydHkoaW5pdGlhbCwgZmllbGQpO1xuICB9KSkgZXJyb3JIYW5kbGVyKCdjaGFuZ2VGaWVsZCcpO1xuICByZXR1cm4gY2hhbmdlcztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTZWxlY3RvcihzZWxlY3Rvcikge1xuICBpZiAoIWlzRnVuY3Rpb24oc2VsZWN0b3IpKSBlcnJvckhhbmRsZXIoJ3NlbGVjdG9yVHlwZScpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUhhbmRsZXIoaGFuZGxlcikge1xuICBpZiAoIShpc0Z1bmN0aW9uKGhhbmRsZXIpIHx8IGlzT2JqZWN0KGhhbmRsZXIpKSkgZXJyb3JIYW5kbGVyKCdoYW5kbGVyVHlwZScpO1xuICBpZiAoaXNPYmplY3QoaGFuZGxlcikgJiYgT2JqZWN0LnZhbHVlcyhoYW5kbGVyKS5zb21lKGZ1bmN0aW9uIChfaGFuZGxlcikge1xuICAgIHJldHVybiAhaXNGdW5jdGlvbihfaGFuZGxlcik7XG4gIH0pKSBlcnJvckhhbmRsZXIoJ2hhbmRsZXJzVHlwZScpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUluaXRpYWwoaW5pdGlhbCkge1xuICBpZiAoIWluaXRpYWwpIGVycm9ySGFuZGxlcignaW5pdGlhbElzUmVxdWlyZWQnKTtcbiAgaWYgKCFpc09iamVjdChpbml0aWFsKSkgZXJyb3JIYW5kbGVyKCdpbml0aWFsVHlwZScpO1xuICBpZiAoaXNFbXB0eShpbml0aWFsKSkgZXJyb3JIYW5kbGVyKCdpbml0aWFsQ29udGVudCcpO1xufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yTWVzc2FnZXMsIHR5cGUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZXNbdHlwZV0gfHwgZXJyb3JNZXNzYWdlc1tcImRlZmF1bHRcIl0pO1xufVxuXG52YXIgZXJyb3JNZXNzYWdlcyA9IHtcbiAgaW5pdGlhbElzUmVxdWlyZWQ6ICdpbml0aWFsIHN0YXRlIGlzIHJlcXVpcmVkJyxcbiAgaW5pdGlhbFR5cGU6ICdpbml0aWFsIHN0YXRlIHNob3VsZCBiZSBhbiBvYmplY3QnLFxuICBpbml0aWFsQ29udGVudDogJ2luaXRpYWwgc3RhdGUgc2hvdWxkblxcJ3QgYmUgYW4gZW1wdHkgb2JqZWN0JyxcbiAgaGFuZGxlclR5cGU6ICdoYW5kbGVyIHNob3VsZCBiZSBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbicsXG4gIGhhbmRsZXJzVHlwZTogJ2FsbCBoYW5kbGVycyBzaG91bGQgYmUgYSBmdW5jdGlvbnMnLFxuICBzZWxlY3RvclR5cGU6ICdzZWxlY3RvciBzaG91bGQgYmUgYSBmdW5jdGlvbicsXG4gIGNoYW5nZVR5cGU6ICdwcm92aWRlZCB2YWx1ZSBvZiBjaGFuZ2VzIHNob3VsZCBiZSBhbiBvYmplY3QnLFxuICBjaGFuZ2VGaWVsZDogJ2l0IHNlYW1zIHlvdSB3YW50IHRvIGNoYW5nZSBhIGZpZWxkIGluIHRoZSBzdGF0ZSB3aGljaCBpcyBub3Qgc3BlY2lmaWVkIGluIHRoZSBcImluaXRpYWxcIiBzdGF0ZScsXG4gIFwiZGVmYXVsdFwiOiAnYW4gdW5rbm93biBlcnJvciBhY2N1cmVkIGluIGBzdGF0ZS1sb2NhbGAgcGFja2FnZSdcbn07XG52YXIgZXJyb3JIYW5kbGVyID0gY3VycnkodGhyb3dFcnJvcikoZXJyb3JNZXNzYWdlcyk7XG52YXIgdmFsaWRhdG9ycyA9IHtcbiAgY2hhbmdlczogdmFsaWRhdGVDaGFuZ2VzLFxuICBzZWxlY3RvcjogdmFsaWRhdGVTZWxlY3RvcixcbiAgaGFuZGxlcjogdmFsaWRhdGVIYW5kbGVyLFxuICBpbml0aWFsOiB2YWxpZGF0ZUluaXRpYWxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZShpbml0aWFsKSB7XG4gIHZhciBoYW5kbGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFsaWRhdG9ycy5pbml0aWFsKGluaXRpYWwpO1xuICB2YWxpZGF0b3JzLmhhbmRsZXIoaGFuZGxlcik7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICBjdXJyZW50OiBpbml0aWFsXG4gIH07XG4gIHZhciBkaWRVcGRhdGUgPSBjdXJyeShkaWRTdGF0ZVVwZGF0ZSkoc3RhdGUsIGhhbmRsZXIpO1xuICB2YXIgdXBkYXRlID0gY3VycnkodXBkYXRlU3RhdGUpKHN0YXRlKTtcbiAgdmFyIHZhbGlkYXRlID0gY3VycnkodmFsaWRhdG9ycy5jaGFuZ2VzKShpbml0aWFsKTtcbiAgdmFyIGdldENoYW5nZXMgPSBjdXJyeShleHRyYWN0Q2hhbmdlcykoc3RhdGUpO1xuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHZhciBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbiAgICB2YWxpZGF0b3JzLnNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gc2VsZWN0b3Ioc3RhdGUuY3VycmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTdGF0ZShjYXVzZWRDaGFuZ2VzKSB7XG4gICAgY29tcG9zZShkaWRVcGRhdGUsIHVwZGF0ZSwgdmFsaWRhdGUsIGdldENoYW5nZXMpKGNhdXNlZENoYW5nZXMpO1xuICB9XG5cbiAgcmV0dXJuIFtnZXRTdGF0ZSwgc2V0U3RhdGVdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Q2hhbmdlcyhzdGF0ZSwgY2F1c2VkQ2hhbmdlcykge1xuICByZXR1cm4gaXNGdW5jdGlvbihjYXVzZWRDaGFuZ2VzKSA/IGNhdXNlZENoYW5nZXMoc3RhdGUuY3VycmVudCkgOiBjYXVzZWRDaGFuZ2VzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZShzdGF0ZSwgY2hhbmdlcykge1xuICBzdGF0ZS5jdXJyZW50ID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHN0YXRlLmN1cnJlbnQpLCBjaGFuZ2VzKTtcbiAgcmV0dXJuIGNoYW5nZXM7XG59XG5cbmZ1bmN0aW9uIGRpZFN0YXRlVXBkYXRlKHN0YXRlLCBoYW5kbGVyLCBjaGFuZ2VzKSB7XG4gIGlzRnVuY3Rpb24oaGFuZGxlcikgPyBoYW5kbGVyKHN0YXRlLmN1cnJlbnQpIDogT2JqZWN0LmtleXMoY2hhbmdlcykuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICB2YXIgX2hhbmRsZXIkZmllbGQ7XG5cbiAgICByZXR1cm4gKF9oYW5kbGVyJGZpZWxkID0gaGFuZGxlcltmaWVsZF0pID09PSBudWxsIHx8IF9oYW5kbGVyJGZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaGFuZGxlciRmaWVsZC5jYWxsKGhhbmRsZXIsIHN0YXRlLmN1cnJlbnRbZmllbGRdKTtcbiAgfSk7XG4gIHJldHVybiBjaGFuZ2VzO1xufVxuXG52YXIgaW5kZXggPSB7XG4gIGNyZWF0ZTogY3JlYXRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIk1vbmFjb0VkaXRvciIsImxvYWRlciIsIm1vbmFjb0VkaXRvckxvYWRlciIsInVzZU1vbmFjbyIsImRlZmluZVRoZW1lcyIsInVzZVRoZW1lMiIsImluaXRhbGl6ZWQiLCJpbml0TW9uYWNvIiwiY29uZmlnIiwicGF0aHMiLCJ2cyIsIndpbmRvdyIsIl9fZ3JhZmFuYV9wdWJsaWNfcGF0aF9fIiwiaW5pdCIsInRoZW4iLCJtb25hY28iLCJSZWFjdE1vbmFjb0VkaXRvciIsInByb3BzIiwidGhlbWUiLCJtb25hY29UaGVtZSIsImlzRGFyayIsImdldENvbG9ycyIsInVuZGVmaW5lZCIsImNvbXBvbmVudHMiLCJpbnB1dCIsImJhY2tncm91bmQiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJlZGl0b3IiLCJkZWZpbmVUaGVtZSIsImJhc2UiLCJpbmhlcml0IiwicnVsZXMiLCJ0b2tlbiIsImZvcmVncm91bmQiLCJ2aXN1YWxpemF0aW9uIiwiZ2V0Q29sb3JCeU5hbWUiXSwic291cmNlUm9vdCI6IiJ9
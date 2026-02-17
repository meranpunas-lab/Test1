"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["graphitePlugin"],{

/***/ "./public/app/core/utils/version.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SemVersion": () => (/* binding */ SemVersion),
/* harmony export */   "isVersionGtOrEq": () => (/* binding */ isVersionGtOrEq)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const versionPattern = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z\.]+))?/;
class SemVersion {
  constructor(version) {
    _defineProperty(this, "major", void 0);

    _defineProperty(this, "minor", void 0);

    _defineProperty(this, "patch", void 0);

    _defineProperty(this, "meta", void 0);

    this.major = 0;
    this.minor = 0;
    this.patch = 0;
    this.meta = '';
    const match = versionPattern.exec(version);

    if (match) {
      this.major = Number(match[1]);
      this.minor = Number(match[2] || 0);
      this.patch = Number(match[3] || 0);
      this.meta = match[4];
    }
  }

  isGtOrEq(version) {
    const compared = new SemVersion(version);

    for (let i = 0; i < this.comparable.length; ++i) {
      if (this.comparable[i] > compared.comparable[i]) {
        return true;
      }

      if (this.comparable[i] < compared.comparable[i]) {
        return false;
      }
    }

    return true;
  }

  isValid() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(this.major);
  }

  get comparable() {
    return [this.major, this.minor, this.patch];
  }

}
function isVersionGtOrEq(a, b) {
  const aSemver = new SemVersion(a);
  return aSemver.isGtOrEq(b);
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/AddGraphiteFunction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGraphiteFunction": () => (/* binding */ AddGraphiteFunction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function AddGraphiteFunction({
  funcDefs
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.mapFuncDefsToSelectables)(funcDefs), [funcDefs]); // Note: actions.addFunction will add a component that will have a dropdown or input in auto-focus
  // (the first param of the function). This auto-focus will cause onBlur() on AddGraphiteFunction's
  // Segment component and trigger onChange once again. (why? we call onChange if the user dismissed
  // the dropdown, see: SegmentSelect.onCloseMenu for more details). To avoid it we need to wait for
  // the Segment to disappear first (hence useEffect) and then dispatch the action that will add new
  // components.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((value === null || value === void 0 ? void 0 : value.value) !== undefined) {
      dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.addFunction({
        name: value.value
      }));
      setValue(undefined);
    }
  }, [value, dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    Component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      icon: "plus",
      variant: "secondary",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.cx)(styles.button),
      "aria-label": "Add new function"
    }),
    options: options,
    onChange: setValue,
    inputMinWidth: 150
  });
}

function getStyles(theme) {
  return {
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-right: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionEditor": () => (/* binding */ FunctionEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _FunctionEditorControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionEditorControls.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _TooltipContent, _span;

const _excluded = ["onMoveLeft", "onMoveRight", "func"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const getStyles = theme => {
  return {
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
      margin-right: ${theme.spacing(0.5)};
    `,
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_3__.css)({
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.bodySmall.fontSize,
      // to match .gf-form-label
      cursor: 'pointer',
      display: 'inline-block'
    })
  };
};

const FunctionEditor = _ref => {
  let {
    onMoveLeft,
    onMoveRight,
    func
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);

  const renderContent = ({
    updatePopperPosition
  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FunctionEditorControls__WEBPACK_IMPORTED_MODULE_2__.FunctionEditorControls, Object.assign({}, props, {
    func: func,
    onMoveLeft: () => {
      onMoveLeft(func);
      updatePopperPosition();
    },
    onMoveRight: () => {
      onMoveRight(func);
      updatePopperPosition();
    }
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [func.def.unknown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      content: _TooltipContent || (_TooltipContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TooltipContent, {})),
      placement: "bottom",
      interactive: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        "data-testid": "warning-icon",
        name: "exclamation-triangle",
        size: "xs",
        className: styles.icon
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      content: renderContent,
      placement: "top",
      interactive: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: styles.label,
        children: func.def.name
      })
    })]
  });
};

const TooltipContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(() => {
  return _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
    children: ["This function is not supported. Check your function for typos and", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      target: "_blank",
      className: "external-link",
      rel: "noreferrer noopener",
      href: "https://graphite.readthedocs.io/en/latest/functions.html",
      children: "read the docs"
    }), ' ', "to see whether you need to upgrade your data source\u2019s version to make this function available."]
  }));
});
TooltipContent.displayName = 'FunctionEditorTooltipContent';


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionEditorControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionEditorControls": () => (/* binding */ FunctionEditorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;





const FunctionDescription = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(async () => {
  // @ts-ignore
  const {
    default: rst2html
  } = await __webpack_require__.e(/* import() | rst2html */ "rst2html").then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/rst2html-https-e87da7ea2f-63d5ff3068.zip/node_modules/rst2html/dist/rst2html.min.js", 23));
  return {
    default(props) {
      var _props$description;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: rst2html((_props$description = props.description) !== null && _props$description !== void 0 ? _props$description : '')
        }
      });
    }

  };
});

const FunctionHelpButton = props => {
  if (props.description) {
    let tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: "Loading description..."
      })),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FunctionDescription, {
        description: props.description
      })
    });

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      content: tooltip,
      placement: 'bottom-end',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        className: props.description ? undefined : 'pointer',
        name: "question-circle"
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    className: "pointer",
    name: "question-circle",
    onClick: () => {
      window.open('http://graphite.readthedocs.org/en/latest/functions.html#graphite.render.functions.' + props.name, '_blank');
    }
  });
};

const FunctionEditorControls = props => {
  const {
    func,
    onMoveLeft,
    onMoveRight,
    onRemove
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      display: 'flex',
      width: '60px',
      justifyContent: 'space-between'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "arrow-left",
      onClick: () => onMoveLeft(func)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FunctionHelpButton, {
      name: func.def.name,
      description: func.def.description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "times",
      onClick: () => onRemove(func)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "arrow-right",
      onClick: () => onMoveRight(func)
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionParamEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionParamEditor": () => (/* binding */ FunctionParamEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





/**
 * Render a function parameter with a segment dropdown for multiple options or simple input.
 */
function FunctionParamEditor({
  editableParam,
  onChange,
  onExpandedChange,
  autofocus
}) {
  var _editableParam$option;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);

  if (((_editableParam$option = editableParam.options) === null || _editableParam$option === void 0 ? void 0 : _editableParam$option.length) > 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Segment, {
      autofocus: autofocus,
      value: editableParam.value,
      inputPlaceholder: editableParam.name,
      className: styles.segment,
      options: editableParam.options,
      placeholder: ' +' + editableParam.name,
      onChange: value => {
        onChange(value.value || '');
      },
      onExpandedChange: onExpandedChange,
      inputMinWidth: 150,
      allowCustomValue: true,
      allowEmptyValue: true
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentInput, {
      autofocus: autofocus,
      className: styles.input,
      value: editableParam.value || '',
      placeholder: ' +' + editableParam.name,
      inputPlaceholder: editableParam.name,
      onChange: value => {
        onChange(value.toString());
      },
      onExpandedChange: onExpandedChange // input style
      ,
      style: {
        height: '25px',
        paddingTop: '2px',
        marginTop: '2px',
        paddingLeft: '4px',
        minWidth: '100px'
      }
    });
  }
}

const getStyles = theme => ({
  segment: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)({
    margin: 0,
    padding: 0
  }),
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    margin: 0;
    padding: 0;
    input {
      height: 25px;
    },
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionsSection": () => (/* binding */ FunctionsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _GraphiteFunctionEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteFunctionEditor.tsx");
/* harmony import */ var _AddGraphiteFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/AddGraphiteFunction.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function FunctionsSection({
  functions = [],
  funcDefs
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
    label: "Functions",
    fill: true,
    children: [functions.map((func, index) => {
      return !func.hidden && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GraphiteFunctionEditor__WEBPACK_IMPORTED_MODULE_1__.GraphiteFunctionEditor, {
        func: func
      }, index);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AddGraphiteFunction__WEBPACK_IMPORTED_MODULE_2__.AddGraphiteFunction, {
      funcDefs: funcDefs
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteFunctionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteFunctionEditor": () => (/* binding */ GraphiteFunctionEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _FunctionParamEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionParamEditor.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _FunctionEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionEditor.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











/**
 * Allows editing function params and removing/moving a function (note: editing function name is not supported)
 */
function GraphiteFunctionEditor({
  func
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles); // keep track of mouse over and isExpanded state to display buttons for adding optional/multiple params
  // only when the user mouse over over the function editor OR any param editor is expanded.

  const [mouseOver, setIsMouseOver] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [expanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let params = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.mapFuncInstanceToParams)(func);
  params = params.filter((p, index) => {
    // func.added is set for newly added functions - see autofocus below
    return index < func.def.params.length && !p.optional || func.added || p.value || expanded || mouseOver;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.cx)(styles.container, {
      [styles.error]: func.def.unknown
    }),
    onMouseOver: () => setIsMouseOver(true),
    onMouseLeave: () => setIsMouseOver(false),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      spacing: "none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FunctionEditor__WEBPACK_IMPORTED_MODULE_5__.FunctionEditor, {
        func: func,
        onMoveLeft: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__.actions.moveFunction({
            func,
            offset: -1
          }));
        },
        onMoveRight: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__.actions.moveFunction({
            func,
            offset: 1
          }));
        },
        onRemove: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__.actions.removeFunction({
            func
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineLabel, {
        className: styles.label,
        children: "("
      }), params.map((editableParam, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FunctionParamEditor__WEBPACK_IMPORTED_MODULE_3__.FunctionParamEditor, {
            autofocus: index === 0 && func.added,
            editableParam: editableParam,
            onChange: value => {
              if (value !== '' || editableParam.optional) {
                dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__.actions.updateFunctionParam({
                  func,
                  index,
                  value
                }));
              }

              setIsExpanded(false);
              setIsMouseOver(false);
            },
            onExpandedChange: setIsExpanded
          }), index !== params.length - 1 ? ',' : '']
        }, index);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineLabel, {
        className: styles.label,
        children: ")"
      })]
    })
  });
}

const getStyles = theme => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)({
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.shape.borderRadius(),
    marginRight: theme.spacing(0.5),
    padding: `0 ${theme.spacing(1)}`,
    height: `${theme.v1.spacing.formInputHeight}px`
  }),
  error: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    border: 1px solid ${theme.colors.error.main};
  `,
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)({
    padding: 0,
    margin: 0
  }),
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_2__.css)({
    padding: theme.spacing(0.5)
  })
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteQueryEditor": () => (/* binding */ GraphiteQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _GraphiteTextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteTextEditor.tsx");
/* harmony import */ var _SeriesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/SeriesSection.tsx");
/* harmony import */ var _FunctionsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionsSection.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _GraphiteQueryEditorC;












function GraphiteQueryEditor({
  datasource,
  onRunQuery,
  onChange,
  query,
  range,
  queries
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_state_context__WEBPACK_IMPORTED_MODULE_3__.GraphiteQueryEditorContext, {
    datasource: datasource,
    onRunQuery: onRunQuery,
    onChange: onChange,
    query: query,
    queries: queries,
    range: range,
    children: _GraphiteQueryEditorC || (_GraphiteQueryEditorC = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(GraphiteQueryEditorContent, {}))
  });
}

function GraphiteQueryEditorContent() {
  var _state$target, _state$target2, _state$queryModel;

  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const state = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useGraphiteState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: styles.visualEditor,
      children: [((_state$target = state.target) === null || _state$target === void 0 ? void 0 : _state$target.textEditor) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_GraphiteTextEditor__WEBPACK_IMPORTED_MODULE_4__.GraphiteTextEditor, {
        rawQuery: state.target.target
      }), !((_state$target2 = state.target) !== null && _state$target2 !== void 0 && _state$target2.textEditor) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SeriesSection__WEBPACK_IMPORTED_MODULE_5__.SeriesSection, {
          state: state
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FunctionsSection__WEBPACK_IMPORTED_MODULE_6__.FunctionsSection, {
          functions: (_state$queryModel = state.queryModel) === null || _state$queryModel === void 0 ? void 0 : _state$queryModel.functions,
          funcDefs: state.funcDefs
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: styles.toggleButton,
      icon: "pen",
      variant: "secondary",
      "aria-label": "Toggle editor mode",
      onClick: () => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_1__.actions.toggleEditorMode());
      }
    })]
  });
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_7__.css`
      display: flex;
    `,
    visualEditor: _emotion_css__WEBPACK_IMPORTED_MODULE_7__.css`
      flex-grow: 1;
    `,
    toggleButton: _emotion_css__WEBPACK_IMPORTED_MODULE_7__.css`
      margin-left: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteTextEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteTextEditor": () => (/* binding */ GraphiteTextEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function GraphiteTextEditor({
  rawQuery
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const updateQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(query => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.updateQuery({
      query
    }));
  }, [dispatch]);
  const runQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.runQuery());
  }, [dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.QueryField, {
    query: rawQuery,
    onChange: updateQuery,
    onBlur: runQuery,
    onRunQuery: runQuery,
    placeholder: 'Enter a Graphite query (run with Shift+Enter)',
    portalOrigin: "graphite"
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricSegment.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricSegment": () => (/* binding */ MetricSegment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








/**
 * Represents a single metric node in the metric path at the given index. Allows to change the metric name to one of the
 * provided options or a custom value.
 *
 * Options for tag names and metric names are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 *
 * getAltSegmentsSelectables() also returns list of tags for segment with index=0. Once a tag is selected the editor
 * enters tag-adding mode (see SeriesSection and GraphiteQueryModel.seriesByTagUsed).
 */
function MetricSegment({
  metricIndex,
  segment,
  state
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_3__.getAltSegmentsSelectables)(state, metricIndex, value || '');
  }, [state, metricIndex]);
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_4__.debounce)(loadOptions, 200, {
    leading: true
  }), [loadOptions]);
  const onSegmentChanged = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(selectableValue => {
    // selectableValue.value is always defined because emptyValues are not allowed in SegmentAsync by default
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.segmentValueChanged({
      segment: selectableValue.value,
      index: metricIndex
    }));
  }, [dispatch, metricIndex]); // segmentValueChanged action will destroy SegmentAsync immediately if a tag is selected. To give time
  // for the clean up the action is debounced.

  const onSegmentChangedDebounced = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_4__.debounce)(onSegmentChanged, 100), [onSegmentChanged]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentAsync, {
    value: segment.value,
    inputMinWidth: 150,
    allowCustomValue: true,
    loadOptions: debouncedLoadOptions,
    reloadOptionsOnChange: true,
    onChange: onSegmentChangedDebounced
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricTankMetaInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricTankMetaInspector": () => (/* binding */ MetricTankMetaInspector)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/meta.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2, _p3, _div, _h;









class MetricTankMetaInspector extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  renderMeta(meta, key) {
    var _meta$consolidatorNo;

    const styles = getStyles();
    const buckets = (0,_meta__WEBPACK_IMPORTED_MODULE_3__.parseSchemaRetentions)(meta['schema-retentions']);
    const rollupNotice = (0,_meta__WEBPACK_IMPORTED_MODULE_3__.getRollupNotice)([meta]);
    const runtimeNotice = (0,_meta__WEBPACK_IMPORTED_MODULE_3__.getRuntimeConsolidationNotice)([meta]);
    const normFunc = ((_meta$consolidatorNo = meta['consolidator-normfetch']) !== null && _meta$consolidatorNo !== void 0 ? _meta$consolidatorNo : '').replace('Consolidator', '');
    const totalSeconds = buckets.reduce((acc, bucket) => acc + (bucket.retention ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(bucket.retention) : 0), 0);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.metaItem,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.metaItemHeader,
        children: ["Schema: ", meta['schema-name'], /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "small muted",
          children: ["Series count: ", meta.count]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.metaItemBody,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 1: Fetch"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepDescription,
            children: "First data is fetched, either from raw data archive or a rollup archive"
          }), rollupNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: rollupNotice.text
          }), !rollupNotice && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: "No rollup archive was used"
          }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            children: buckets.map((bucket, index) => {
              const bucketLength = bucket.retention ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(bucket.retention) : 0;
              const lengthPercent = bucketLength / totalSeconds * 100;
              const isActive = index === meta['archive-read'];
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: styles.bucket,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: styles.bucketInterval,
                  children: bucket.interval
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bucketRetention, {
                    [styles.bucketRetentionActive]: isActive
                  }),
                  style: {
                    flexGrow: lengthPercent
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  style: {
                    flexGrow: 100 - lengthPercent
                  },
                  children: bucket.retention
                })]
              }, bucket.retention);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 2: Normalization"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepDescription,
            children: "Normalization happens when series with different intervals between points are combined."
          }), meta['aggnum-norm'] > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            children: ["Normalization did occur using ", normFunc]
          }), meta['aggnum-norm'] === 1 && (_p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: "No normalization was needed"
          })))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 3: Runtime consolidation"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepDescription,
            children: "If there are too many data points at this point Metrictank will consolidate them down to below max data points (set in queries tab)."
          }), runtimeNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: runtimeNotice.text
          }), !runtimeNotice && (_p3 || (_p3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: "No runtime consolidation"
          })))]
        })]
      })]
    }, key);
  }

  render() {
    const {
      data
    } = this.props; // away to dedupe them

    const seriesMetas = {};

    for (const series of data) {
      if (series.meta && series.meta.custom) {
        for (const metaItem of series.meta.custom.seriesMetaList) {
          // key is to dedupe as many series will have identitical meta
          const key = `${JSON.stringify(metaItem)}`;

          if (seriesMetas[key]) {
            seriesMetas[key].count += metaItem.count;
          } else {
            seriesMetas[key] = metaItem;
          }
        }
      }
    }

    if (Object.keys(seriesMetas).length === 0) {
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "No response meta data"
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        className: "page-heading",
        children: "Metrictank Lineage"
      })), Object.keys(seriesMetas).map(key => this.renderMeta(seriesMetas[key], key))]
    });
  }

}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.stylesFactory)(() => {
  const {
    theme
  } = app_core_config__WEBPACK_IMPORTED_MODULE_5__.config;
  const borderColor = theme.isDark ? theme.palette.gray25 : theme.palette.gray85;
  const background = theme.isDark ? theme.palette.dark1 : theme.palette.white;
  const headerBg = theme.isDark ? theme.palette.gray15 : theme.palette.gray85;
  return {
    metaItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${background};
      border: 1px solid ${borderColor};
      margin-bottom: ${theme.spacing.md};
    `,
    metaItemHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${headerBg};
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: ${theme.typography.size.md};
      display: flex;
      justify-content: space-between;
    `,
    metaItemBody: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing.md};
    `,
    stepHeading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.md};
    `,
    stepDescription: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.textWeak};
      margin-bottom: ${theme.spacing.sm};
    `,
    step: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.lg};

      &:last-child {
        margin-bottom: 0;
      }
    `,
    bucket: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin-bottom: ${theme.spacing.sm};
      border-radius: ${theme.border.radius.md};
    `,
    bucketInterval: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 0;
      width: 60px;
    `,
    bucketRetention: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: linear-gradient(0deg, ${theme.palette.blue85}, ${theme.palette.blue95});
      text-align: center;
      color: ${theme.palette.white};
      margin-right: ${theme.spacing.md};
      border-radius: ${theme.border.radius.md};
    `,
    bucketRetentionActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: linear-gradient(0deg, ${theme.palette.greenBase}, ${theme.palette.greenShade});
    `
  };
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsSection": () => (/* binding */ MetricsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _MetricSegment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricSegment.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function MetricsSection({
  segments = [],
  state
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: segments.map((segment, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MetricSegment__WEBPACK_IMPORTED_MODULE_1__.MetricSegment, {
        segment: segment,
        metricIndex: index,
        state: state
      }, index);
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/PlayButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayButton": () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PlayButton() {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.unpause());
  }, [dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "play",
    onClick: onClick,
    type: "button",
    variant: "secondary",
    "aria-label": "Unpause query"
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/SeriesSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesSection": () => (/* binding */ SeriesSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _TagsSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/TagsSection.tsx");
/* harmony import */ var _MetricsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricsSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function SeriesSection({
  state
}) {
  var _state$queryModel, _state$queryModel2;

  const sectionContent = (_state$queryModel = state.queryModel) !== null && _state$queryModel !== void 0 && _state$queryModel.seriesByTagUsed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TagsSection__WEBPACK_IMPORTED_MODULE_1__.TagsSection, {
    tags: (_state$queryModel2 = state.queryModel) === null || _state$queryModel2 === void 0 ? void 0 : _state$queryModel2.tags,
    state: state
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MetricsSection__WEBPACK_IMPORTED_MODULE_2__.MetricsSection, {
    segments: state.segments,
    state: state
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
    label: "Series",
    fill: true,
    children: sectionContent
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/TagEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagEditor": () => (/* binding */ TagEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










/**
 * Editor for a tag at given index. Allows changing the name of the tag, operator or value. Tag names are provided with
 * getTagsSelectables and contain only valid tags (it may depend on currently used tags). The dropdown for tag names is
 * also used for removing tag (with a special "--remove tag--" option provided by getTagsSelectables).
 *
 * Options for tag names and values are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 */
function TagEditor({
  tag,
  tagIndex,
  state
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const getTagsOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(inputValue => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_3__.getTagsSelectables)(state, tagIndex, inputValue || '');
  }, [state, tagIndex]);
  const debouncedGetTagsOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_4__.debounce)(getTagsOptions, 200, {
    leading: true
  }), [getTagsOptions]);
  const getTagValueOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(inputValue => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_3__.getTagValuesSelectables)(state, tag, tagIndex, inputValue || '');
  }, [state, tagIndex, tag]);
  const debouncedGetTagValueOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_4__.debounce)(getTagValueOptions, 200, {
    leading: true
  }), [getTagValueOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentAsync, {
      inputMinWidth: 150,
      value: tag.key,
      loadOptions: debouncedGetTagsOptions,
      reloadOptionsOnChange: true,
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.tagChanged({
          tag: Object.assign({}, tag, {
            key: value.value
          }),
          index: tagIndex
        }));
      },
      allowCustomValue: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Segment, {
      inputMinWidth: 50,
      value: tag.operator,
      options: (0,_state_providers__WEBPACK_IMPORTED_MODULE_3__.getTagOperatorsSelectables)(),
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.tagChanged({
          tag: Object.assign({}, tag, {
            operator: value.value
          }),
          index: tagIndex
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentAsync, {
      inputMinWidth: 150,
      value: tag.value,
      loadOptions: debouncedGetTagValueOptions,
      reloadOptionsOnChange: true,
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.tagChanged({
          tag: Object.assign({}, tag, {
            value: value.value
          }),
          index: tagIndex
        }));
      },
      allowCustomValue: true
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/TagsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsSection": () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _TagEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/TagEditor.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _PlayButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/PlayButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _PlayButton;














/**
 * Renders all tags and a button allowing to add more tags.
 *
 * Options for tag names are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 */
function TagsSection({
  tags,
  state
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles); // Options are reloaded while user is typing with backend taking care of auto-complete (auto-complete cannot be
  // implemented in front-end because backend returns only limited number of entries)

  const getTagsAsSegmentsOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(inputValue => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_1__.getTagsAsSegmentsSelectables)(state, inputValue || '');
  }, [state]);
  const debouncedGetTagsAsSegments = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_6__.debounce)(getTagsAsSegmentsOptions, 200, {
    leading: true
  }), [getTagsAsSegmentsOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [tags.map((tag, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TagEditor__WEBPACK_IMPORTED_MODULE_5__.TagEditor, {
        tagIndex: index,
        tag: tag,
        state: state
      }, index);
    }), tags.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentAsync, {
      inputMinWidth: 150,
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.addNewTag({
          segment: value.value
        }));
      },
      loadOptions: debouncedGetTagsAsSegments,
      reloadOptionsOnChange: true,
      Component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "plus",
        variant: "secondary",
        className: styles.button,
        "aria-label": "Add new tag"
      })
    }), state.paused && (_PlayButton || (_PlayButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PlayButton__WEBPACK_IMPORTED_MODULE_8__.PlayButton, {})))]
  });
}

function getStyles(theme) {
  return {
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_4__.css`
      margin-right: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapFuncDefsToSelectables": () => (/* binding */ mapFuncDefsToSelectables),
/* harmony export */   "mapFuncInstanceToParams": () => (/* binding */ mapFuncInstanceToParams),
/* harmony export */   "mapSegmentsToSelectables": () => (/* binding */ mapSegmentsToSelectables),
/* harmony export */   "mapStringsToSelectables": () => (/* binding */ mapStringsToSelectables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function mapStringsToSelectables(values) {
  return values.map(value => ({
    value,
    label: value
  }));
}
function mapSegmentsToSelectables(segments) {
  return segments.map(segment => ({
    label: segment.value,
    value: segment
  }));
}
function mapFuncDefsToSelectables(funcDefs) {
  const categories = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(funcDefs, funcDef => {
    if (!funcDef.category) {
      return;
    }

    if (!categories[funcDef.category]) {
      categories[funcDef.category] = {
        label: funcDef.category,
        value: funcDef.category,
        options: []
      };
    }

    categories[funcDef.category].options.push({
      label: funcDef.name,
      value: funcDef.name
    });
  });
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(categories, 'label');
}

function createEditableParam(paramDef, additional, value) {
  var _paramDef$options$map, _paramDef$options;

  return {
    name: paramDef.name,
    value: (value === null || value === void 0 ? void 0 : value.toString()) || '',
    optional: !!paramDef.optional || additional,
    // only first param is required when multiple are allowed
    multiple: !!paramDef.multiple,
    options: (_paramDef$options$map = (_paramDef$options = paramDef.options) === null || _paramDef$options === void 0 ? void 0 : _paramDef$options.map(option => ({
      value: option.toString(),
      label: option.toString()
    }))) !== null && _paramDef$options$map !== void 0 ? _paramDef$options$map : []
  };
}
/**
 * Create a list of params that can be edited in the function editor.
 */


function mapFuncInstanceToParams(func) {
  var _params;

  // list of required parameters (from func.def)
  const params = func.def.params.map((paramDef, index) => createEditableParam(paramDef, false, func.params[index])); // list of additional (multiple or optional) params entered by the user

  while (params.length < func.params.length) {
    const paramDef = func.def.params[func.def.params.length - 1];
    const value = func.params[params.length];
    params.push(createEditableParam(paramDef, true, value));
  } // extra "fake" param to allow adding more multiple values at the end


  if (params.length && params[params.length - 1].value && (_params = params[params.length - 1]) !== null && _params !== void 0 && _params.multiple) {
    const paramDef = func.def.params[func.def.params.length - 1];
    params.push(createEditableParam(paramDef, true, ''));
  }

  return params;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor),
/* harmony export */   "SHOW_MAPPINGS_HELP_KEY": () => (/* binding */ SHOW_MAPPINGS_HELP_KEY)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/versions.ts");
/* harmony import */ var _MappingsConfiguration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/MappingsConfiguration.tsx");
/* harmony import */ var _parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/parseLokiLabelMappings.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _Alert, _h, _InlineFormLabel;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Select,
  Switch
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LegacyForms;









const SHOW_MAPPINGS_HELP_KEY = 'grafana.datasources.graphite.config.showMappingsHelp';
const graphiteVersions = _versions__WEBPACK_IMPORTED_MODULE_4__.GRAPHITE_VERSIONS.map(version => ({
  label: `${version}.x`,
  value: version
}));
const graphiteTypes = Object.entries(_types__WEBPACK_IMPORTED_MODULE_3__.GraphiteType).map(([label, value]) => ({
  label,
  value
}));
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderTypeHelp", () => {
      return _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
        children: ["There are different types of Graphite compatible backends. Here you can specify the type you are using. If you are using", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
          href: "https://github.com/grafana/metrictank",
          className: "pointer",
          target: "_blank",
          rel: "noreferrer",
          children: "Metrictank"
        }), ' ', "then select that here. This will enable Metrictank specific features like query processing meta data. Metrictank is a multi-tenant timeseries engine for Graphite and friends."]
      }));
    });

    this.state = {
      showMappingsHelp: app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].getObject(SHOW_MAPPINGS_HELP_KEY, true)
    };
  }

  componentDidMount() {
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)(this.props, 'graphiteVersion', this.currentGraphiteVersion);
  }

  render() {
    var _options$jsonData$imp, _options$jsonData$imp2;

    const {
      options,
      onOptionsChange
    } = this.props;
    const currentVersion = graphiteVersions.find(item => item.value === this.currentGraphiteVersion);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [options.access === 'direct' && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
        title: "Deprecation Notice",
        severity: "warning",
        children: "This data source uses browser access mode. This mode is deprecated and will be removed in the future. Please use server access mode instead."
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.DataSourceHttpSettings, {
        defaultUrl: "http://localhost:8080",
        dataSourceConfig: options,
        onChange: onOptionsChange
      }), _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
        className: "page-heading",
        children: "Graphite details"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "gf-form-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "gf-form",
            children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
              tooltip: "This option controls what functions are available in the Graphite query editor.",
              children: "Version"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Select, {
              "aria-label": "Graphite version",
              menuShouldPortal: true,
              value: currentVersion,
              options: graphiteVersions,
              width: 8,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'graphiteVersion')
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "gf-form",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
              tooltip: this.renderTypeHelp,
              children: "Type"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Select, {
              "aria-label": "Graphite backend type",
              menuShouldPortal: true,
              options: graphiteTypes,
              value: graphiteTypes.find(type => type.value === options.jsonData.graphiteType),
              width: 8,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'graphiteType')
            })]
          })
        }), options.jsonData.graphiteType === _types__WEBPACK_IMPORTED_MODULE_3__.GraphiteType.Metrictank && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Switch, {
              label: "Rollup indicator",
              labelClass: 'width-10',
              tooltip: "Shows up as an info icon in panel headers when data is aggregated",
              checked: !!options.jsonData.rollupIndicatorEnabled,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOptionChecked)(this.props, 'rollupIndicatorEnabled')
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MappingsConfiguration__WEBPACK_IMPORTED_MODULE_5__.MappingsConfiguration, {
        mappings: (((_options$jsonData$imp = options.jsonData.importConfiguration) === null || _options$jsonData$imp === void 0 ? void 0 : (_options$jsonData$imp2 = _options$jsonData$imp.loki) === null || _options$jsonData$imp2 === void 0 ? void 0 : _options$jsonData$imp2.mappings) || []).map(_parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_6__.toString),
        showHelp: this.state.showMappingsHelp,
        onDismiss: () => {
          this.setState({
            showMappingsHelp: false
          });
          app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].setObject(SHOW_MAPPINGS_HELP_KEY, false);
        },
        onRestoreHelp: () => {
          this.setState({
            showMappingsHelp: true
          });
          app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].setObject(SHOW_MAPPINGS_HELP_KEY, true);
        },
        onChange: mappings => {
          onOptionsChange(Object.assign({}, options, {
            jsonData: Object.assign({}, options.jsonData, {
              importConfiguration: Object.assign({}, options.jsonData.importConfiguration, {
                loki: {
                  mappings: mappings.map(_parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_6__.fromString)
                }
              })
            })
          }));
        }
      })]
    });
  }

  get currentGraphiteVersion() {
    return this.props.options.jsonData.graphiteVersion || _versions__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GRAPHITE_VERSION;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/MappingsConfiguration.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MappingsConfiguration": () => (/* binding */ MappingsConfiguration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _MappingsHelp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/MappingsHelp.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Icon;






const MappingsConfiguration = props => {
  const [mappings, setMappings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.mappings || []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      className: "page-heading",
      children: "Label mappings"
    })), !props.showHelp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "link",
        onClick: props.onRestoreHelp,
        children: "Learn how label mappings work"
      })
    }), props.showHelp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_MappingsHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onDismiss: props.onDismiss
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gf-form-group",
      children: [mappings.map((mapping, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: `Mapping (${i + 1})`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            width: 50,
            onChange: changeEvent => {
              let newMappings = mappings.concat();
              newMappings[i] = changeEvent.target.value;
              setMappings(newMappings);
            },
            onBlur: () => {
              props.onChange(mappings);
            },
            placeholder: "e.g. test.metric.(labelName).*",
            value: mapping
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "button",
          "aria-label": "Remove header",
          variant: "secondary",
          size: "xs",
          onClick: _ => {
            let newMappings = mappings.concat();
            newMappings.splice(i, 1);
            setMappings(newMappings);
            props.onChange(newMappings);
          },
          children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            name: "trash-alt"
          }))
        })]
      }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "secondary",
        icon: "plus",
        type: "button",
        onClick: () => {
          setMappings([...mappings, '']);
        },
        children: "Add label mapping"
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/MappingsHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MappingsHelp)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2, _p3, _p4, _table;





function MappingsHelp(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Alert, {
    severity: "info",
    title: "How to map Graphite metrics to labels?",
    onRemove: props.onDismiss,
    children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "Mappings are currently supported only between Graphite and Loki queries."
    })), _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "When you switch your data source from Graphite to Loki, your queries are mapped according to the mappings defined in the example below. To define a mapping, write the full path of the metric and replace nodes you want to map to label with the label name in parentheses. The value of the label is extracted from your Graphite query when you switch data sources."
    })), _p3 || (_p3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "All tags are automatically mapped to labels regardless of the mapping configuration. Graphite matching patterns (using {}) are converted to Loki's regular expressions matching patterns. When you use functions in your queries, the metrics, and tags are extracted to match them with defined mappings."
    })), _p4 || (_p4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: ["Example: for a mapping = ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
        children: "servers.(cluster).(server).*"
      }), ":"]
    })), _table || (_table = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Graphite query"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Mapped to Loki query"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["alias(servers.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "west"
              }), ".", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "001"
              }), ".cpu,1,2)"]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["{cluster=\"", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "west"
              }), "\", server=\"", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "001"
              }), "\"}"]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["alias(servers.*.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "{001,002}"
              }), ".*,1,2)"]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["{server=~\"", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "(001|002)"
              }), "\"}"]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "interpolate(seriesByTag('foo=bar', 'server=002'), inf))"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "{foo=\"bar\", server=\"002\"}"
            })
          })]
        })]
      })]
    }))]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/parseLokiLabelMappings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
/**
 * Converts a simple string used in LokiLogsMappings component (e.g. "servers.(name).*")
 * to data model saved in data source configuration.
 */
function fromString(text) {
  return {
    matchers: text.split('.').map(metricNode => {
      if (metricNode.startsWith('(') && metricNode.endsWith(')')) {
        return {
          value: '*',
          labelName: metricNode.slice(1, -1)
        };
      } else {
        return {
          value: metricNode
        };
      }
    })
  };
}
/**
 * Coverts configuration stored in data source configuration into a string displayed in LokiLogsMappings component.
 */

function toString(mapping) {
  return mapping.matchers.map(matcher => {
    return matcher.labelName ? `(${matcher.labelName})` : `${matcher.value}`;
  }).join('.');
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteDatasource": () => (/* binding */ GraphiteDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/version.ts");
/* harmony import */ var _gfunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/gfunc.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");
/* harmony import */ var app_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/meta.ts");
/* harmony import */ var _features_variables_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/graphite/versions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/graphite/utils.ts");
/* harmony import */ var _graphite_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/graphite/graphite_query.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Types







const GRAPHITE_TAG_COMPARATORS = {
  '=': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.Equal,
  '!=': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.NotEqual,
  '=~': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.EqualRegEx,
  '!=~': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.NotEqualRegEx
};
/**
 * Converts Graphite glob-like pattern to a regular expression
 */

function convertGlobToRegEx(text) {
  if (text.includes('*') || text.includes('{')) {
    return '^' + text.replace(/\*/g, '.*').replace(/\{/g, '(').replace(/}/g, ')').replace(/,/g, '|');
  } else {
    return text;
  }
}

class GraphiteDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataSourceApi {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_5__.getTemplateSrv)()) {
    var _instanceSettings$jso, _instanceSettings$jso2;

    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "basicAuth", void 0);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "graphiteVersion", void 0);

    _defineProperty(this, "supportsTags", void 0);

    _defineProperty(this, "isMetricTank", void 0);

    _defineProperty(this, "rollupIndicatorEnabled", void 0);

    _defineProperty(this, "cacheTimeout", void 0);

    _defineProperty(this, "withCredentials", void 0);

    _defineProperty(this, "funcDefs", null);

    _defineProperty(this, "funcDefsPromise", null);

    _defineProperty(this, "_seriesRefLetters", void 0);

    _defineProperty(this, "metricMappings", void 0);

    _defineProperty(this, "convertResponseToDataFrames", result => {
      const data = [];

      if (!result || !result.data) {
        return {
          data
        };
      } // Series are either at the root or under a node called 'series'


      const series = result.data.series || result.data;

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(series)) {
        throw {
          message: 'Missing series in result',
          data: result
        };
      }

      for (let i = 0; i < series.length; i++) {
        const s = series[i]; // Disables Grafana own series naming

        s.title = s.target;

        for (let y = 0; y < s.datapoints.length; y++) {
          s.datapoints[y][1] *= 1000;
        }

        const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toDataFrame)(s); // Metrictank metadata

        if (s.meta) {
          frame.meta = {
            custom: {
              requestMetaList: result.data.meta,
              // info for the whole request
              seriesMetaList: s.meta // Array of metadata

            }
          };

          if (this.rollupIndicatorEnabled) {
            const rollupNotice = (0,app_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_7__.getRollupNotice)(s.meta);
            const runtimeNotice = (0,app_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_7__.getRuntimeConsolidationNotice)(s.meta);

            if (rollupNotice) {
              frame.meta.notices = [rollupNotice];
            } else if (runtimeNotice) {
              frame.meta.notices = [runtimeNotice];
            }
          } // only add the request stats to the first frame


          if (i === 0 && result.data.meta.stats) {
            frame.meta.stats = this.getRequestStats(result.data.meta);
          }
        }

        data.push(frame);
      }

      return {
        data
      };
    });

    this.templateSrv = templateSrv;
    this.basicAuth = instanceSettings.basicAuth;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name; // graphiteVersion is set when a datasource is created but it hadn't been set in the past so we're
    // still falling back to the default behavior here for backwards compatibility (see also #17429)

    this.graphiteVersion = instanceSettings.jsonData.graphiteVersion || _versions__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_GRAPHITE_VERSION;
    this.metricMappings = ((_instanceSettings$jso = instanceSettings.jsonData.importConfiguration) === null || _instanceSettings$jso === void 0 ? void 0 : (_instanceSettings$jso2 = _instanceSettings$jso.loki) === null || _instanceSettings$jso2 === void 0 ? void 0 : _instanceSettings$jso2.mappings) || [];
    this.isMetricTank = instanceSettings.jsonData.graphiteType === _types__WEBPACK_IMPORTED_MODULE_6__.GraphiteType.Metrictank;
    this.supportsTags = supportsTags(this.graphiteVersion);
    this.cacheTimeout = instanceSettings.cacheTimeout;
    this.rollupIndicatorEnabled = instanceSettings.jsonData.rollupIndicatorEnabled;
    this.withCredentials = instanceSettings.withCredentials;
    this.funcDefs = null;
    this.funcDefsPromise = null;
    this._seriesRefLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  getQueryOptionsInfo() {
    return {
      maxDataPoints: true,
      cacheTimeout: true,
      links: [{
        text: 'Help',
        url: 'http://docs.grafana.org/features/datasources/graphite/#using-graphite-in-grafana'
      }]
    };
  }

  getImportQueryConfiguration() {
    return {
      loki: {
        mappings: this.metricMappings
      }
    };
  }

  async exportToAbstractQueries(queries) {
    return queries.map(query => this.exportToAbstractQuery(query));
  }

  exportToAbstractQuery(query) {
    const graphiteQuery = new _graphite_query__WEBPACK_IMPORTED_MODULE_11__["default"](this, Object.assign({}, query, {
      target: query.target || '',
      textEditor: false
    }), (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_5__.getTemplateSrv)());
    graphiteQuery.parseTarget();
    let labels = [];
    const config = this.getImportQueryConfiguration().loki;

    if (graphiteQuery.seriesByTagUsed) {
      graphiteQuery.tags.forEach(tag => {
        labels.push({
          name: tag.key,
          operator: GRAPHITE_TAG_COMPARATORS[tag.operator],
          value: tag.value
        });
      });
    } else {
      const targetNodes = graphiteQuery.segments.map(segment => segment.value);
      let mappings = config.mappings.filter(mapping => mapping.matchers.length <= targetNodes.length);

      for (let mapping of mappings) {
        const matchers = mapping.matchers.concat();
        matchers.every((matcher, index) => {
          if (matcher.labelName) {
            let value = targetNodes[index];

            if (value === '*') {
              return true;
            }

            const converted = convertGlobToRegEx(value);
            labels.push({
              name: matcher.labelName,
              operator: converted !== value ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.EqualRegEx : _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.Equal,
              value: converted
            });
            return true;
          }

          return targetNodes[index] === matcher.value || matcher.value === '*';
        });
      }
    }

    return {
      refId: query.refId,
      labelMatchers: labels
    };
  }

  query(options) {
    const graphOptions = {
      from: this.translateTime(options.range.raw.from, false, options.timezone),
      until: this.translateTime(options.range.raw.to, true, options.timezone),
      targets: options.targets,
      format: options.format,
      cacheTimeout: options.cacheTimeout || this.cacheTimeout,
      maxDataPoints: options.maxDataPoints
    };
    const params = this.buildGraphiteParams(graphOptions, options.scopedVars);

    if (params.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)({
        data: []
      });
    }

    if (this.isMetricTank) {
      params.push('meta=true');
    }

    const httpOptions = {
      method: 'POST',
      url: '/render',
      data: params.join('&'),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    this.addTracingHeaders(httpOptions, options);

    if (options.panelId) {
      httpOptions.requestId = this.name + '.panelId.' + options.panelId;
    }

    return this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(this.convertResponseToDataFrames));
  }

  addTracingHeaders(httpOptions, options) {
    const proxyMode = !this.url.match(/^http/);

    if (proxyMode) {
      if (options.dashboardId) {
        httpOptions.headers['X-Dashboard-Id'] = options.dashboardId;
      }

      if (options.panelId) {
        httpOptions.headers['X-Panel-Id'] = options.panelId;
      }
    }
  }

  getRequestStats(meta) {
    const stats = [];

    for (const key in meta.stats) {
      let unit = undefined;

      if (key.endsWith('.ms')) {
        unit = 'ms';
      }

      stats.push({
        displayName: key,
        value: meta.stats[key],
        unit
      });
    }

    return stats;
  }

  parseTags(tagString) {
    let tags = [];
    tags = tagString.split(',');

    if (tags.length === 1) {
      tags = tagString.split(' ');

      if (tags[0] === '') {
        tags = [];
      }
    }

    return tags;
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;

    if (queries && queries.length > 0) {
      expandedQueries = queries.map(query => {
        var _query$target;

        const expandedQuery = Object.assign({}, query, {
          datasource: this.getRef(),
          target: this.templateSrv.replace((_query$target = query.target) !== null && _query$target !== void 0 ? _query$target : '', scopedVars)
        });
        return expandedQuery;
      });
    }

    return expandedQueries;
  }

  annotationQuery(options) {
    // Graphite metric as annotation
    if (options.annotation.target) {
      const target = this.templateSrv.replace(options.annotation.target, {}, 'glob');
      const graphiteQuery = {
        range: options.range,
        targets: [{
          target: target
        }],
        format: 'json',
        maxDataPoints: 100
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.query(graphiteQuery).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(result => {
        const list = [];

        for (let i = 0; i < result.data.length; i++) {
          const target = result.data[i];

          for (let y = 0; y < target.length; y++) {
            const time = target.fields[0].values.get(y);
            const value = target.fields[1].values.get(y);

            if (!value) {
              continue;
            }

            list.push({
              annotation: options.annotation,
              time,
              title: target.name
            });
          }
        }

        return list;
      })));
    } else {
      // Graphite event as annotation
      const tags = this.templateSrv.replace(options.annotation.tags);
      return this.events({
        range: options.range,
        tags: tags
      }).then(results => {
        const list = [];

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(results.data)) {
          console.error(`Unable to get annotations from ${results.url}.`);
          return [];
        }

        for (let i = 0; i < results.data.length; i++) {
          const e = results.data[i];
          let tags = e.tags;

          if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(e.tags)) {
            tags = this.parseTags(e.tags);
          }

          list.push({
            annotation: options.annotation,
            time: e.when * 1000,
            title: e.what,
            tags: tags,
            text: e.data
          });
        }

        return list;
      });
    }
  }

  events(options) {
    try {
      let tags = '';

      if (options.tags) {
        tags = '&tags=' + options.tags;
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest({
        method: 'GET',
        url: '/events/get_data?from=' + this.translateTime(options.range.raw.from, false, options.timezone) + '&until=' + this.translateTime(options.range.raw.to, true, options.timezone) + tags
      }));
    } catch (err) {
      return Promise.reject(err);
    }
  }

  targetContainsTemplate(target) {
    var _target$target;

    return this.templateSrv.containsTemplate((_target$target = target.target) !== null && _target$target !== void 0 ? _target$target : '');
  }

  translateTime(date, roundUp, timezone) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(date)) {
      if (date === 'now') {
        return 'now';
      } else if (date.indexOf('now-') >= 0 && date.indexOf('/') === -1) {
        date = date.substring(3);
        date = date.replace('m', 'min');
        date = date.replace('M', 'mon');
        return date;
      }

      date = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateMath.parse(date, roundUp, timezone);
    } // graphite' s from filter is exclusive
    // here we step back one minute in order
    // to guarantee that we get all the data that
    // exists for the specified range


    if (roundUp) {
      if (date.get('s')) {
        date.add(1, 's');
      }
    } else if (roundUp === false) {
      if (date.get('s')) {
        date.subtract(1, 's');
      }
    }

    return date.unix();
  }

  metricFindQuery(query, optionalOptions) {
    const options = optionalOptions || {}; // First attempt to check for tag-related functions (using empty wildcard for interpolation)

    let interpolatedQuery = this.templateSrv.replace(query, (0,_features_variables_utils__WEBPACK_IMPORTED_MODULE_8__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '',
      options: optionalOptions
    })); // special handling for tag_values(<tag>[,<expression>]*), this is used for template variables

    let allParams = interpolatedQuery.match(/^tag_values\((.*)\)$/);
    let expressions = allParams ? allParams[1].split(',').filter(p => !!p) : undefined;

    if (expressions) {
      options.limit = 10000;
      return this.getTagValuesAutoComplete(expressions.slice(1), expressions[0], undefined, options);
    } // special handling for tags(<expression>[,<expression>]*), this is used for template variables


    allParams = interpolatedQuery.match(/^tags\((.*)\)$/);
    expressions = allParams ? allParams[1].split(',').filter(p => !!p) : undefined;

    if (expressions) {
      options.limit = 10000;
      return this.getTagsAutoComplete(expressions, undefined, options);
    } // If no tag-related query was found, perform metric-based search (using * as the wildcard for interpolation)


    let useExpand = query.match(/^expand\((.*)\)$/);
    query = useExpand ? useExpand[1] : query;
    interpolatedQuery = this.templateSrv.replace(query, (0,_features_variables_utils__WEBPACK_IMPORTED_MODULE_8__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '*',
      options: optionalOptions
    }));
    let range;

    if (options.range) {
      range = {
        from: this.translateTime(options.range.from, false, options.timezone),
        until: this.translateTime(options.range.to, true, options.timezone)
      };
    }

    if (useExpand) {
      return this.requestMetricExpand(interpolatedQuery, options.requestId, range);
    } else {
      return this.requestMetricFind(interpolatedQuery, options.requestId, range);
    }
  }
  /**
   * Search for metrics matching giving pattern using /metrics/find endpoint. It will
   * return all possible values at the last level of the query, for example:
   *
   * metrics: prod.servers.001.cpu, prod.servers.002.cpu
   * query: *.servers.*
   * result: 001, 002
   *
   * For more complex searches use requestMetricExpand
   */


  requestMetricFind(query, requestId, range) {
    const httpOptions = {
      method: 'POST',
      url: '/metrics/find',
      params: {},
      data: `query=${query}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // for cancellations
      requestId: requestId
    };

    if (range) {
      httpOptions.params.from = range.from;
      httpOptions.params.until = range.until;
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, metric => {
        return {
          text: metric.text,
          expandable: metric.expandable ? true : false
        };
      });
    })));
  }
  /**
   * Search for metrics matching giving pattern using /metrics/expand endpoint.
   * The result will contain all metrics (with full name) matching provided query.
   * It's a more flexible version of /metrics/find endpoint (@see requestMetricFind)
   */


  requestMetricExpand(query, requestId, range) {
    const httpOptions = {
      method: 'GET',
      url: '/metrics/expand',
      params: {
        query
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // for cancellations
      requestId
    };

    if (range) {
      httpOptions.params.from = range.from;
      httpOptions.params.until = range.until;
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data.results, metric => {
        return {
          text: metric,
          expandable: false
        };
      });
    })));
  }

  getTags(optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags',
      // for cancellations
      requestId: options.requestId
    };

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, tag => {
        return {
          text: tag.tag,
          id: tag.id
        };
      });
    })));
  }

  getTagValues(options = {}) {
    const httpOptions = {
      method: 'GET',
      url: '/tags/' + this.templateSrv.replace(options.key),
      // for cancellations
      requestId: options.requestId
    };

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      if (results.data && results.data.values) {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data.values, value => {
          return {
            text: value.value,
            id: value.id
          };
        });
      } else {
        return [];
      }
    })));
  }

  getTagsAutoComplete(expressions, tagPrefix, optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags/autoComplete/tags',
      params: {
        expr: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(expressions, expression => this.templateSrv.replace((expression || '').trim()))
      },
      // for cancellations
      requestId: options.requestId
    };

    if (tagPrefix) {
      httpOptions.params.tagPrefix = tagPrefix;
    }

    if (options.limit) {
      httpOptions.params.limit = options.limit;
    }

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }

  getTagValuesAutoComplete(expressions, tag, valuePrefix, optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags/autoComplete/values',
      params: {
        expr: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(expressions, expression => this.templateSrv.replace((expression || '').trim())),
        tag: this.templateSrv.replace((tag || '').trim())
      },
      // for cancellations
      requestId: options.requestId
    };

    if (valuePrefix) {
      httpOptions.params.valuePrefix = valuePrefix;
    }

    if (options.limit) {
      httpOptions.params.limit = options.limit;
    }

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }

  getVersion(optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/version',
      requestId: options.requestId
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      if (results.data) {
        const semver = new app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__.SemVersion(results.data);
        return semver.isValid() ? results.data : '';
      }

      return '';
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)('');
    })));
  }

  createFuncInstance(funcDef, options) {
    return _gfunc__WEBPACK_IMPORTED_MODULE_4__["default"].createFuncInstance(funcDef, options, this.funcDefs);
  }

  getFuncDef(name) {
    return _gfunc__WEBPACK_IMPORTED_MODULE_4__["default"].getFuncDef(name, this.funcDefs);
  }

  waitForFuncDefsLoaded() {
    return this.getFuncDefs();
  }

  getFuncDefs() {
    if (this.funcDefsPromise !== null) {
      return this.funcDefsPromise;
    }

    if (!supportsFunctionIndex(this.graphiteVersion)) {
      this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_4__["default"].getFuncDefs(this.graphiteVersion);
      this.funcDefsPromise = Promise.resolve(this.funcDefs);
      return this.funcDefsPromise;
    }

    const httpOptions = {
      method: 'GET',
      url: '/functions'
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      if (results.status !== 200 || typeof results.data !== 'object') {
        if (typeof results.data === 'string') {
          // Fix for a Graphite bug: https://github.com/graphite-project/graphite-web/issues/2609
          // There is a fix for it https://github.com/graphite-project/graphite-web/pull/2612 but
          // it was merged to master in July 2020 but it has never been released (the last Graphite
          // release was 1.1.7 - March 2020). The bug was introduced in Graphite 1.1.7, in versions
          // 1.1.0 - 1.1.6 /functions endpoint returns a valid JSON
          const fixedData = JSON.parse(results.data.replace(/"default": ?Infinity/g, '"default": 1e9999'));
          this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_4__["default"].parseFuncDefs(fixedData);
        } else {
          this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_4__["default"].getFuncDefs(this.graphiteVersion);
        }
      } else {
        this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_4__["default"].parseFuncDefs(results.data);
      } // When /functions endpoint returns application/json response but containing invalid JSON the fix above
      // wont' be triggered due to the changes in https://github.com/grafana/grafana/pull/45598 (parsing happens
      // in fetch and Graphite receives an empty object and no error). In such cases, when the provided JSON
      // seems empty we fallback to the hardcoded list of functions.
      // See also: https://github.com/grafana/grafana/issues/45948


      if (Object.keys(this.funcDefs).length === 0) {
        this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_4__["default"].getFuncDefs(this.graphiteVersion);
      }

      return this.funcDefs;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(error => {
      console.error('Fetching graphite functions error', error);
      this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_4__["default"].getFuncDefs(this.graphiteVersion);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(this.funcDefs);
    })));
  }

  testDatasource() {
    const query = {
      panelId: 3,
      rangeRaw: {
        from: 'now-1h',
        to: 'now'
      },
      range: {
        raw: {
          from: 'now-1h',
          to: 'now'
        }
      },
      targets: [{
        target: 'constantLine(100)'
      }],
      maxDataPoints: 300
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.query(query)).then(() => ({
      status: 'success',
      message: 'Data source is working'
    }));
  }

  doGraphiteRequest(options) {
    if (this.basicAuth || this.withCredentials) {
      options.withCredentials = true;
    }

    if (this.basicAuth) {
      options.headers = options.headers || {};
      options.headers.Authorization = this.basicAuth;
    }

    options.url = this.url + options.url;
    options.inspect = {
      type: 'graphite'
    };
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.throwError)((0,_utils__WEBPACK_IMPORTED_MODULE_10__.reduceError)(err));
    }));
  }

  buildGraphiteParams(options, scopedVars) {
    const graphiteOptions = ['from', 'until', 'rawData', 'format', 'maxDataPoints', 'cacheTimeout'];
    const cleanOptions = [],
          targets = {};
    let target, targetValue, i;
    const regex = /\#([A-Z])/g;
    const intervalFormatFixRegex = /'(\d+)m'/gi;
    let hasTargets = false;
    options['format'] = 'json';

    function fixIntervalFormat(match) {
      return match.replace('m', 'min').replace('M', 'mon');
    }

    for (i = 0; i < options.targets.length; i++) {
      target = options.targets[i];

      if (!target.target) {
        continue;
      }

      if (!target.refId) {
        target.refId = this._seriesRefLetters[i];
      }

      targetValue = this.templateSrv.replace(target.target, scopedVars);
      targetValue = targetValue.replace(intervalFormatFixRegex, fixIntervalFormat);
      targets[target.refId] = targetValue;
    }

    function nestedSeriesRegexReplacer(match, g1) {
      return targets[g1] || match;
    }

    for (i = 0; i < options.targets.length; i++) {
      target = options.targets[i];

      if (!target.target) {
        continue;
      }

      targetValue = targets[target.refId];
      targetValue = targetValue.replace(regex, nestedSeriesRegexReplacer);
      targets[target.refId] = targetValue;

      if (!target.hide) {
        hasTargets = true;
        cleanOptions.push('target=' + encodeURIComponent(targetValue));
      }
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(options, (value, key) => {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(graphiteOptions, key) === -1) {
        return;
      }

      if (value) {
        cleanOptions.push(key + '=' + encodeURIComponent(value));
      }
    });

    if (!hasTargets) {
      return [];
    }

    return cleanOptions;
  }

}

function supportsTags(version) {
  return (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__.isVersionGtOrEq)(version, '1.1');
}

function supportsFunctionIndex(version) {
  return (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__.isVersionGtOrEq)(version, '1.1');
}

function mapToTags() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
    if (results.data) {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, value => {
        return {
          text: value
        };
      });
    } else {
      return [];
    }
  }));
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/gfunc.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuncInstance": () => (/* binding */ FuncInstance),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/version.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const index = {};

function addFuncDef(funcDef) {
  funcDef.params = funcDef.params || [];
  funcDef.defaultParams = funcDef.defaultParams || [];
  index[funcDef.name] = funcDef;

  if (funcDef.shortName) {
    index[funcDef.shortName] = funcDef;
  }
}

const optionalSeriesRefArgs = [{
  name: 'other',
  type: 'value_or_series',
  optional: true,
  multiple: true
}];
addFuncDef({
  name: 'scaleToSeconds',
  category: 'Transform',
  params: [{
    name: 'seconds',
    type: 'int'
  }],
  defaultParams: [1]
});
addFuncDef({
  name: 'perSecond',
  category: 'Transform',
  params: [{
    name: 'max value',
    type: 'int',
    optional: true
  }],
  defaultParams: []
});
addFuncDef({
  name: 'holtWintersForecast',
  category: 'Calculate'
});
addFuncDef({
  name: 'holtWintersConfidenceBands',
  category: 'Calculate',
  params: [{
    name: 'delta',
    type: 'int'
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'holtWintersAberration',
  category: 'Calculate',
  params: [{
    name: 'delta',
    type: 'int'
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'nPercentile',
  category: 'Calculate',
  params: [{
    name: 'Nth percentile',
    type: 'int'
  }],
  defaultParams: [95]
});
addFuncDef({
  name: 'diffSeries',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'stddevSeries',
  params: optionalSeriesRefArgs,
  defaultParams: [''],
  category: 'Combine'
});
addFuncDef({
  name: 'divideSeries',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'multiplySeries',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'asPercent',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'group',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A', '#B'],
  category: 'Combine'
});
addFuncDef({
  name: 'sumSeries',
  shortName: 'sum',
  category: 'Combine',
  params: optionalSeriesRefArgs,
  defaultParams: ['']
});
addFuncDef({
  name: 'averageSeries',
  shortName: 'avg',
  category: 'Combine',
  params: optionalSeriesRefArgs,
  defaultParams: ['']
});
addFuncDef({
  name: 'rangeOfSeries',
  category: 'Combine'
});
addFuncDef({
  name: 'percentileOfSeries',
  category: 'Combine',
  params: [{
    name: 'n',
    type: 'int'
  }, {
    name: 'interpolate',
    type: 'boolean',
    options: ['true', 'false']
  }],
  defaultParams: [95, 'false']
});
addFuncDef({
  name: 'sumSeriesWithWildcards',
  category: 'Combine',
  params: [{
    name: 'node',
    type: 'int',
    multiple: true
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'maxSeries',
  shortName: 'max',
  category: 'Combine'
});
addFuncDef({
  name: 'minSeries',
  shortName: 'min',
  category: 'Combine'
});
addFuncDef({
  name: 'averageSeriesWithWildcards',
  category: 'Combine',
  params: [{
    name: 'node',
    type: 'int',
    multiple: true
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'alias',
  category: 'Alias',
  params: [{
    name: 'alias',
    type: 'string'
  }],
  defaultParams: ['alias']
});
addFuncDef({
  name: 'aliasSub',
  category: 'Alias',
  params: [{
    name: 'search',
    type: 'string'
  }, {
    name: 'replace',
    type: 'string'
  }],
  defaultParams: ['', '\\1']
});
addFuncDef({
  name: 'consolidateBy',
  category: 'Special',
  params: [{
    name: 'function',
    type: 'string',
    options: ['sum', 'average', 'min', 'max']
  }],
  defaultParams: ['max']
});
addFuncDef({
  name: 'cumulative',
  category: 'Special',
  params: [],
  defaultParams: []
});
addFuncDef({
  name: 'groupByNode',
  category: 'Combine',
  params: [{
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }, {
    name: 'function',
    type: 'string',
    options: ['sum', 'avg', 'maxSeries']
  }],
  defaultParams: [3, 'sum']
});
addFuncDef({
  name: 'aliasByNode',
  category: 'Alias',
  params: [{
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    multiple: true
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'substr',
  category: 'Special',
  params: [{
    name: 'start',
    type: 'int',
    options: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }, {
    name: 'stop',
    type: 'int',
    options: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }],
  defaultParams: [0, 0]
});
addFuncDef({
  name: 'sortByName',
  category: 'Sorting',
  params: [{
    name: 'natural',
    type: 'boolean',
    options: ['true', 'false'],
    optional: true
  }],
  defaultParams: ['false']
});
addFuncDef({
  name: 'sortByMaxima',
  category: 'Sorting'
});
addFuncDef({
  name: 'sortByMinima',
  category: 'Sorting'
});
addFuncDef({
  name: 'sortByTotal',
  category: 'Sorting'
});
addFuncDef({
  name: 'aliasByMetric',
  category: 'Alias'
});
addFuncDef({
  name: 'randomWalk',
  fake: true,
  category: 'Special',
  params: [{
    name: 'name',
    type: 'string'
  }],
  defaultParams: ['randomWalk']
});
addFuncDef({
  name: 'countSeries',
  category: 'Combine'
});
addFuncDef({
  name: 'constantLine',
  category: 'Special',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'cactiStyle',
  category: 'Special'
});
addFuncDef({
  name: 'keepLastValue',
  category: 'Transform',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [100]
});
addFuncDef({
  name: 'changed',
  category: 'Special',
  params: [],
  defaultParams: []
});
addFuncDef({
  name: 'scale',
  category: 'Transform',
  params: [{
    name: 'factor',
    type: 'int'
  }],
  defaultParams: [1]
});
addFuncDef({
  name: 'offset',
  category: 'Transform',
  params: [{
    name: 'amount',
    type: 'int'
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'transformNull',
  category: 'Transform',
  params: [{
    name: 'amount',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'integral',
  category: 'Transform'
});
addFuncDef({
  name: 'derivative',
  category: 'Transform'
});
addFuncDef({
  name: 'nonNegativeDerivative',
  category: 'Transform',
  params: [{
    name: 'max value or 0',
    type: 'int',
    optional: true
  }],
  defaultParams: ['']
});
addFuncDef({
  name: 'timeShift',
  category: 'Transform',
  params: [{
    name: 'amount',
    type: 'select',
    options: ['1h', '6h', '12h', '1d', '2d', '7d', '14d', '30d']
  }],
  defaultParams: ['1d']
});
addFuncDef({
  name: 'timeStack',
  category: 'Transform',
  params: [{
    name: 'timeShiftUnit',
    type: 'select',
    options: ['1h', '6h', '12h', '1d', '2d', '7d', '14d', '30d']
  }, {
    name: 'timeShiftStart',
    type: 'int'
  }, {
    name: 'timeShiftEnd',
    type: 'int'
  }],
  defaultParams: ['1d', 0, 7]
});
addFuncDef({
  name: 'summarize',
  category: 'Transform',
  params: [{
    name: 'interval',
    type: 'string'
  }, {
    name: 'func',
    type: 'select',
    options: ['sum', 'avg', 'min', 'max', 'last']
  }, {
    name: 'alignToFrom',
    type: 'boolean',
    optional: true,
    options: ['false', 'true']
  }],
  defaultParams: ['1h', 'sum', 'false']
});
addFuncDef({
  name: 'smartSummarize',
  category: 'Transform',
  params: [{
    name: 'interval',
    type: 'string'
  }, {
    name: 'func',
    type: 'select',
    options: ['sum', 'avg', 'min', 'max', 'last']
  }],
  defaultParams: ['1h', 'sum']
});
addFuncDef({
  name: 'absolute',
  category: 'Transform'
});
addFuncDef({
  name: 'hitcount',
  category: 'Transform',
  params: [{
    name: 'interval',
    type: 'string'
  }],
  defaultParams: ['10s']
});
addFuncDef({
  name: 'log',
  category: 'Transform',
  params: [{
    name: 'base',
    type: 'int'
  }],
  defaultParams: ['10']
});
addFuncDef({
  name: 'averageAbove',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'averageBelow',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'currentAbove',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'currentBelow',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'maximumAbove',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'maximumBelow',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'minimumAbove',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'minimumBelow',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'limit',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'mostDeviant',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'exclude',
  category: 'Filter Series',
  params: [{
    name: 'exclude',
    type: 'string'
  }],
  defaultParams: ['exclude']
});
addFuncDef({
  name: 'highestCurrent',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'highestMax',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'lowestCurrent',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'movingAverage',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'movingMedian',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: ['5']
});
addFuncDef({
  name: 'stdev',
  category: 'Calculate',
  params: [{
    name: 'n',
    type: 'int'
  }, {
    name: 'tolerance',
    type: 'int'
  }],
  defaultParams: [5, 0.1]
});
addFuncDef({
  name: 'highestAverage',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'lowestAverage',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeAbovePercentile',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeAboveValue',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeBelowPercentile',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeBelowValue',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'useSeriesAbove',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }, {
    name: 'search',
    type: 'string'
  }, {
    name: 'replace',
    type: 'string'
  }],
  defaultParams: [0, 'search', 'replace']
}); ////////////////////
// Graphite 1.0.x //
////////////////////

addFuncDef({
  name: 'aggregateLine',
  category: 'Calculate',
  params: [{
    name: 'func',
    type: 'select',
    options: ['sum', 'avg', 'min', 'max', 'last']
  }],
  defaultParams: ['avg'],
  version: '1.0'
});
addFuncDef({
  name: 'averageOutsidePercentile',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [95],
  version: '1.0'
});
addFuncDef({
  name: 'delay',
  category: 'Transform',
  params: [{
    name: 'steps',
    type: 'int'
  }],
  defaultParams: [1],
  version: '1.0'
});
addFuncDef({
  name: 'exponentialMovingAverage',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'fallbackSeries',
  category: 'Special',
  params: [{
    name: 'fallback',
    type: 'string'
  }],
  defaultParams: ['constantLine(0)'],
  version: '1.0'
});
addFuncDef({
  name: 'grep',
  category: 'Filter Series',
  params: [{
    name: 'grep',
    type: 'string'
  }],
  defaultParams: ['grep'],
  version: '1.0'
});
addFuncDef({
  name: 'groupByNodes',
  category: 'Combine',
  params: [{
    name: 'function',
    type: 'string',
    options: ['sum', 'avg', 'maxSeries']
  }, {
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    multiple: true
  }],
  defaultParams: ['sum', 3],
  version: '1.0'
});
addFuncDef({
  name: 'integralByInterval',
  category: 'Transform',
  params: [{
    name: 'intervalUnit',
    type: 'select',
    options: ['1h', '6h', '12h', '1d', '2d', '7d', '14d', '30d']
  }],
  defaultParams: ['1d'],
  version: '1.0'
});
addFuncDef({
  name: 'interpolate',
  category: 'Transform',
  params: [{
    name: 'limit',
    type: 'int',
    optional: true
  }],
  defaultParams: [],
  version: '1.0'
});
addFuncDef({
  name: 'invert',
  category: 'Transform',
  version: '1.0'
});
addFuncDef({
  name: 'isNonNull',
  category: 'Combine',
  version: '1.0'
});
addFuncDef({
  name: 'linearRegression',
  category: 'Calculate',
  params: [{
    name: 'startSourceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d'],
    optional: true
  }, {
    name: 'endSourceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d'],
    optional: true
  }],
  defaultParams: [],
  version: '1.0'
});
addFuncDef({
  name: 'mapSeries',
  shortName: 'map',
  params: [{
    name: 'node',
    type: 'int'
  }],
  defaultParams: [3],
  category: 'Combine',
  version: '1.0'
});
addFuncDef({
  name: 'movingMin',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'movingMax',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'movingSum',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'multiplySeriesWithWildcards',
  category: 'Combine',
  params: [{
    name: 'position',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    multiple: true
  }],
  defaultParams: [2],
  version: '1.0'
});
addFuncDef({
  name: 'offsetToZero',
  category: 'Transform',
  version: '1.0'
});
addFuncDef({
  name: 'pow',
  category: 'Transform',
  params: [{
    name: 'factor',
    type: 'int'
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'powSeries',
  category: 'Transform',
  params: optionalSeriesRefArgs,
  defaultParams: [''],
  version: '1.0'
});
addFuncDef({
  name: 'reduceSeries',
  shortName: 'reduce',
  params: [{
    name: 'function',
    type: 'string',
    options: ['asPercent', 'diffSeries', 'divideSeries']
  }, {
    name: 'reduceNode',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  }, {
    name: 'reduceMatchers',
    type: 'string',
    multiple: true
  }],
  defaultParams: ['asPercent', 2, 'used_bytes'],
  category: 'Combine',
  version: '1.0'
});
addFuncDef({
  name: 'removeBetweenPercentile',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [95],
  version: '1.0'
});
addFuncDef({
  name: 'removeEmptySeries',
  category: 'Filter Series',
  version: '1.0'
});
addFuncDef({
  name: 'squareRoot',
  category: 'Transform',
  version: '1.0'
});
addFuncDef({
  name: 'timeSlice',
  category: 'Transform',
  params: [{
    name: 'startSliceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d']
  }, {
    name: 'endSliceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d'],
    optional: true
  }],
  defaultParams: ['-1h'],
  version: '1.0'
});
addFuncDef({
  name: 'weightedAverage',
  category: 'Combine',
  params: [{
    name: 'other',
    type: 'value_or_series',
    optional: true
  }, {
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }],
  defaultParams: ['#A', 4],
  version: '1.0'
});
addFuncDef({
  name: 'seriesByTag',
  category: 'Special',
  params: [{
    name: 'tagExpression',
    type: 'string',
    multiple: true
  }],
  version: '1.1'
});
addFuncDef({
  name: 'groupByTags',
  category: 'Combine',
  params: [{
    name: 'function',
    type: 'string',
    options: ['sum', 'avg', 'maxSeries']
  }, {
    name: 'tag',
    type: 'string',
    multiple: true
  }],
  defaultParams: ['sum', 'tag'],
  version: '1.1'
});
addFuncDef({
  name: 'aliasByTags',
  category: 'Alias',
  params: [{
    name: 'tag',
    type: 'string',
    multiple: true
  }],
  defaultParams: ['tag'],
  version: '1.1'
});

function isVersionRelatedFunction(obj, graphiteVersion) {
  return !obj.version || (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_1__.isVersionGtOrEq)(graphiteVersion, obj.version);
}

class FuncInstance {
  /**
   * Hidden functions are not displayed in UI but available in text editor
   * This is used for seriesByTagUsed function which when used switches
   * the editor to tag-only mode. Defined tags are provided to seriesByTagUsed
   * as parameters.
   */
  constructor(funcDef, options) {
    _defineProperty(this, "def", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "text", void 0);

    _defineProperty(this, "hidden", void 0);

    this.def = funcDef;
    this.params = [];

    if (options && options.withDefaultParams && funcDef.defaultParams) {
      this.params = funcDef.defaultParams.slice(0);
    }

    this.updateText();
  }

  render(metricExp, replaceVariables) {
    const str = this.def.name + '(';
    const parameters = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.params, (value, index) => {
      let paramType;

      if (index < this.def.params.length) {
        paramType = this.def.params[index].type;
      } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), 'multiple')) {
        paramType = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), 'type');
      } // param types that should never be quoted


      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(['value_or_series', 'boolean', 'int', 'float', 'node', 'int_or_infinity'], paramType)) {
        return value;
      }

      const valueInterpolated = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(value) ? replaceVariables(value) : value; // param types that might be quoted
      // To quote variables correctly we need to interpolate it to check if it contains a numeric or string value

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(['int_or_interval', 'node_or_tag'], paramType) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isFinite)(+valueInterpolated)) {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(value);
      }

      return "'" + value + "'";
    }); // don't send any blank parameters to graphite

    while (parameters[parameters.length - 1] === '') {
      parameters.pop();
    }

    if (metricExp) {
      parameters.unshift(metricExp);
    }

    return str + parameters.join(', ') + ')';
  }

  _hasMultipleParamsInString(strValue, index) {
    if (strValue.indexOf(',') === -1) {
      return false;
    }

    if (this.def.params[index + 1] && this.def.params[index + 1].optional) {
      return true;
    }

    if (index + 1 >= this.def.params.length && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), 'multiple')) {
      return true;
    }

    return false;
  }

  updateParam(strValue, index) {
    // handle optional parameters
    // if string contains ',' and next param is optional, split and update both
    if (this._hasMultipleParamsInString(strValue, index)) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(strValue.split(','), (partVal, idx) => {
        this.updateParam(partVal.trim(), index + idx);
      });
      return;
    }

    if (strValue === '' && (index >= this.def.params.length || this.def.params[index].optional)) {
      this.params.splice(index, 1);
    } else {
      this.params[index] = strValue;
    }

    this.updateText();
  }

  updateText() {
    if (this.params.length === 0) {
      this.text = this.def.name + '()';
      return;
    }

    let text = this.def.name + '(';
    text += this.params.join(', ');
    text += ')';
    this.text = text;
  }

}

function createFuncInstance(funcDef, options, idx) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(funcDef)) {
    funcDef = getFuncDef(funcDef, idx);
  }

  return new FuncInstance(funcDef, options);
}

function getFuncDef(name, idx) {
  if (!(idx || index)[name]) {
    return {
      name: name,
      params: [{
        name: '',
        type: '',
        multiple: true
      }],
      defaultParams: [''],
      unknown: true
    };
  }

  return (idx || index)[name];
}

function getFuncDefs(graphiteVersion, idx) {
  const funcs = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(idx || index, funcDef => {
    if (isVersionRelatedFunction(funcDef, graphiteVersion)) {
      funcs[funcDef.name] = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.assign)({}, funcDef, {
        params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(funcDef.params, param => {
          return isVersionRelatedFunction(param, graphiteVersion);
        })
      });
    }
  });
  return funcs;
} // parse response from graphite /functions endpoint into internal format


function parseFuncDefs(rawDefs) {
  const funcDefs = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(rawDefs || {}, (funcDef, funcName) => {
    // skip graphite graph functions
    if (funcDef.group === 'Graph') {
      return;
    }

    let description = funcDef.description;

    if (description) {
      // tidy up some pydoc syntax that rst2html can't handle
      description = description.replace(/:py:func:`(.+)( <[^>]*>)?`/g, '``$1``').replace(/.. seealso:: /g, 'See also: ').replace(/.. code-block *:: *none/g, '.. code-block::');
    }

    const func = {
      name: funcDef.name,
      description,
      category: funcDef.group,
      params: [],
      defaultParams: [],
      fake: false
    }; // get rid of the first "seriesList" param

    if (/^seriesLists?$/.test((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(funcDef, 'params[0].type', ''))) {
      // handle functions that accept multiple seriesLists
      // we leave the param in place but mark it optional, so users can add more series if they wish
      if (funcDef.params[0].multiple) {
        funcDef.params[0].required = false; // otherwise chop off the first param, it'll be handled separately
      } else {
        funcDef.params.shift();
      } // tag function as fake

    } else {
      func.fake = true;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(funcDef.params, rawParam => {
      const param = {
        name: rawParam.name,
        type: 'string',
        optional: !rawParam.required,
        multiple: !!rawParam.multiple,
        options: undefined
      };

      if (rawParam.default !== undefined) {
        if (rawParam.default === Infinity) {
          func.defaultParams.push('inf');
        } else {
          func.defaultParams.push((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(rawParam.default));
        }
      } else if (rawParam.suggestions) {
        func.defaultParams.push((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(rawParam.suggestions[0]));
      } else {
        func.defaultParams.push('');
      }

      if (rawParam.type === 'boolean') {
        param.type = 'boolean';
        param.options = ['true', 'false'];
      } else if (rawParam.type === 'integer') {
        param.type = 'int';
      } else if (rawParam.type === 'float') {
        param.type = 'float';
      } else if (rawParam.type === 'node') {
        param.type = 'node';
        param.options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      } else if (rawParam.type === 'nodeOrTag') {
        param.type = 'node_or_tag';
        param.options = ['name', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      } else if (rawParam.type === 'intOrInterval') {
        param.type = 'int_or_interval';
      } else if (rawParam.type === 'seriesList') {
        param.type = 'value_or_series';
      } else if (rawParam.type === 'intOrInf') {
        param.type = 'int_or_infinity';
      }

      if (rawParam.options) {
        param.options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(rawParam.options, lodash__WEBPACK_IMPORTED_MODULE_0__.toString);
      } else if (rawParam.suggestions) {
        param.options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(rawParam.suggestions, lodash__WEBPACK_IMPORTED_MODULE_0__.toString);
      }

      func.params.push(param);
    });
    funcDefs[funcName] = func;
  });
  return funcDefs;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createFuncInstance: createFuncInstance,
  getFuncDef: getFuncDef,
  getFuncDefs: getFuncDefs,
  parseFuncDefs: parseFuncDefs
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/graphite_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphiteQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_arrayMove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/arrayMove.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class GraphiteQuery {
  /** @ngInject */
  constructor(datasource, target, templateSrv, scopedVars) {
    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "functions", []);

    _defineProperty(this, "segments", []);

    _defineProperty(this, "tags", []);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "seriesByTagUsed", false);

    _defineProperty(this, "checkOtherSegmentsIndex", 0);

    _defineProperty(this, "removeTagValue", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "scopedVars", void 0);

    this.datasource = datasource;
    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    this.parseTarget();
    this.removeTagValue = '-- remove tag --';
  }

  parseTarget() {
    this.functions = [];
    this.segments = [];
    this.tags = [];
    this.seriesByTagUsed = false;
    this.error = null;

    if (this.target.textEditor) {
      return;
    }

    const parser = new _parser__WEBPACK_IMPORTED_MODULE_2__.Parser(this.target.target);
    const astNode = parser.getAst();

    if (astNode === null) {
      this.checkOtherSegmentsIndex = 0;
      return;
    }

    if (astNode.type === 'error') {
      this.error = astNode.message + ' at position: ' + astNode.pos;
      this.target.textEditor = true;
      return;
    }

    try {
      this.parseTargetRecursive(astNode, null);
    } catch (err) {
      console.error('error parsing target:', err.message);
      this.error = err.message;
      this.target.textEditor = true;
    }

    this.checkOtherSegmentsIndex = this.segments.length - 1;
  }

  getSegmentPathUpTo(index) {
    const arr = this.segments.slice(0, index);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(arr, (result, segment) => {
      return result ? result + '.' + segment.value : segment.value;
    }, '');
  }

  parseTargetRecursive(astNode, func) {
    if (astNode === null) {
      return null;
    }

    switch (astNode.type) {
      case 'function':
        const innerFunc = this.datasource.createFuncInstance(astNode.name, {
          withDefaultParams: false
        });
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(astNode.params, param => {
          this.parseTargetRecursive(param, innerFunc);
        });
        innerFunc.updateText();
        this.functions.push(innerFunc); // extract tags from seriesByTag function and hide function

        if (innerFunc.def.name === 'seriesByTag' && !this.seriesByTagUsed) {
          this.seriesByTagUsed = true;
          innerFunc.hidden = true;
          this.tags = this.splitSeriesByTagParams(innerFunc);
        }

        break;

      case 'series-ref':
        if (this.segments.length > 0 || this.getSeriesByTagFuncIndex() >= 0) {
          this.addFunctionParameter(func, astNode.value);
        } else {
          this.segments.push(astNode);
        }

        break;

      case 'bool':
      case 'string':
      case 'number':
        this.addFunctionParameter(func, astNode.value);
        break;

      case 'metric':
        if (this.segments.length || this.tags.length) {
          this.addFunctionParameter(func, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.join)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(astNode.segments, 'value'), '.'));
        } else {
          this.segments = astNode.segments;
        }

        break;
    }
  }

  updateSegmentValue(segment, index) {
    this.segments[index].value = segment.value;
  }

  addSelectMetricSegment() {
    this.segments.push({
      value: 'select metric'
    });
  }

  addFunction(newFunc) {
    this.functions.push(newFunc);
  }

  addFunctionParameter(func, value) {
    if (func.params.length >= func.def.params.length && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(func.def.params), 'multiple', false)) {
      throw {
        message: 'too many parameters for function ' + func.def.name
      };
    }

    func.params.push(value);
  }

  removeFunction(func) {
    this.functions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.functions, func);
  }

  moveFunction(func, offset) {
    const index = this.functions.indexOf(func);
    (0,app_core_utils_arrayMove__WEBPACK_IMPORTED_MODULE_1__.arrayMove)(this.functions, index, index + offset);
  }

  updateModelTarget(targets) {
    const wrapFunction = (target, func) => {
      return func.render(target, value => {
        return this.templateSrv.replace(value, this.scopedVars);
      });
    };

    if (!this.target.textEditor) {
      const metricPath = this.getSegmentPathUpTo(this.segments.length).replace(/\.?select metric$/, '');
      this.target.target = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(this.functions, wrapFunction, metricPath);
    }

    this.updateRenderedTarget(this.target, targets); // loop through other queries and update targetFull as needed

    for (const target of targets || []) {
      if (target.refId !== this.target.refId) {
        this.updateRenderedTarget(target, targets);
      }
    } // clean-up added param


    this.functions.forEach(func => func.added = false);
  }

  updateRenderedTarget(target, targets) {
    // render nested query
    const targetsByRefId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(targets, 'refId'); // no references to self

    delete targetsByRefId[target.refId];
    const nestedSeriesRefRegex = /\#([A-Z])/g;
    let targetWithNestedQueries = target.target; // Use ref count to track circular references

    function countTargetRefs(targetsByRefId, refId) {
      let refCount = 0;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(targetsByRefId, (t, id) => {
        if (id !== refId) {
          const match = nestedSeriesRefRegex.exec(t.target);
          const count = match && match.length ? match.length - 1 : 0;
          refCount += count;
        }
      });
      targetsByRefId[refId].refCount = refCount;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(targetsByRefId, (t, id) => {
      countTargetRefs(targetsByRefId, id);
    }); // Keep interpolating until there are no query references
    // The reason for the loop is that the referenced query might contain another reference to another query

    while (targetWithNestedQueries.match(nestedSeriesRefRegex)) {
      const updated = targetWithNestedQueries.replace(nestedSeriesRefRegex, (match, g1) => {
        const t = targetsByRefId[g1];

        if (!t) {
          return match;
        } // no circular references


        if (t.refCount === 0) {
          delete targetsByRefId[g1];
        }

        t.refCount--;
        return t.target;
      });

      if (updated === targetWithNestedQueries) {
        break;
      }

      targetWithNestedQueries = updated;
    }

    delete target.targetFull;

    if (target.target !== targetWithNestedQueries) {
      target.targetFull = targetWithNestedQueries;
    }
  }

  splitSeriesByTagParams(func) {
    const tagPattern = /([^\!=~]+)(\!?=~?)(.*)/;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(func.params, param => {
      const matches = tagPattern.exec(param);

      if (matches) {
        const tag = matches.slice(1);

        if (tag.length === 3) {
          return {
            key: tag[0],
            operator: tag[1],
            value: tag[2]
          };
        }
      }

      return [];
    }));
  }

  getSeriesByTagFuncIndex() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(this.functions, func => func.def.name === 'seriesByTag');
  }

  getSeriesByTagFunc() {
    const seriesByTagFuncIndex = this.getSeriesByTagFuncIndex();

    if (seriesByTagFuncIndex >= 0) {
      return this.functions[seriesByTagFuncIndex];
    } else {
      return undefined;
    }
  }

  addTag(tag) {
    const newTagParam = renderTagString(tag);
    this.getSeriesByTagFunc().params.push(newTagParam);
    this.tags.push(tag);
  }

  removeTag(index) {
    this.getSeriesByTagFunc().params.splice(index, 1);
    this.tags.splice(index, 1);
  }

  updateTag(tag, tagIndex) {
    this.error = null;

    if (tag.key === this.removeTagValue) {
      this.removeTag(tagIndex);

      if (this.tags.length === 0) {
        this.removeFunction(this.getSeriesByTagFunc());
        this.checkOtherSegmentsIndex = 0;
        this.seriesByTagUsed = false;
      }

      return;
    }

    this.getSeriesByTagFunc().params[tagIndex] = renderTagString(tag);
    this.tags[tagIndex] = tag;
  }

  renderTagExpressions(excludeIndex = -1) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.tags, (tagExpr, index) => {
      // Don't render tag that we want to lookup
      if (index !== excludeIndex) {
        return tagExpr.key + tagExpr.operator + tagExpr.value;
      } else {
        return undefined;
      }
    }));
  }

}
GraphiteQuery.$inject = ["datasource", "target", "templateSrv", "scopedVars"];

function renderTagString(tag) {
  return tag.key + tag.operator + tag.value;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/lexer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": () => (/* binding */ Lexer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // This is auto generated from the unicode tables.
// The tables are at:
// http://www.fileformat.info/info/unicode/category/Lu/list.htm
// http://www.fileformat.info/info/unicode/category/Ll/list.htm
// http://www.fileformat.info/info/unicode/category/Lt/list.htm
// http://www.fileformat.info/info/unicode/category/Lm/list.htm
// http://www.fileformat.info/info/unicode/category/Lo/list.htm
// http://www.fileformat.info/info/unicode/category/Nl/list.htm

const unicodeLetterTable = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774, 1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969, 1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088, 2088, 2112, 2136, 2308, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2417, 2423, 2425, 2431, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3133, 3160, 3161, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3261, 3261, 3294, 3294, 3296, 3297, 3313, 3314, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3424, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3805, 3840, 3840, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186, 4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293, 4304, 4346, 4348, 4348, 4352, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6000, 6016, 6067, 6103, 6103, 6108, 6108, 6176, 6263, 6272, 6312, 6314, 6314, 6320, 6389, 6400, 6428, 6480, 6509, 6512, 6516, 6528, 6571, 6593, 6599, 6656, 6678, 6688, 6740, 6823, 6823, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7104, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7401, 7404, 7406, 7409, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11520, 11557, 11568, 11621, 11631, 11631, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11823, 11823, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 13312, 19893, 19893, 19968, 19968, 40907, 40907, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42647, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42897, 42912, 42921, 43002, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43648, 43695, 43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739, 43741, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44002, 44032, 44032, 55203, 55203, 55216, 55238, 55243, 55291, 63744, 64045, 64048, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65536, 65547, 65549, 65574, 65576, 65594, 65596, 65597, 65599, 65613, 65616, 65629, 65664, 65786, 65856, 65908, 66176, 66204, 66208, 66256, 66304, 66334, 66352, 66378, 66432, 66461, 66464, 66499, 66504, 66511, 66513, 66517, 66560, 66717, 67584, 67589, 67592, 67592, 67594, 67637, 67639, 67640, 67644, 67644, 67647, 67669, 67840, 67861, 67872, 67897, 68096, 68096, 68112, 68115, 68117, 68119, 68121, 68147, 68192, 68220, 68352, 68405, 68416, 68437, 68448, 68466, 68608, 68680, 69635, 69687, 69763, 69807, 73728, 74606, 74752, 74850, 77824, 78894, 92160, 92728, 110592, 110593, 119808, 119892, 119894, 119964, 119966, 119967, 119970, 119970, 119973, 119974, 119977, 119980, 119982, 119993, 119995, 119995, 119997, 120003, 120005, 120069, 120071, 120074, 120077, 120084, 120086, 120092, 120094, 120121, 120123, 120126, 120128, 120132, 120134, 120134, 120138, 120144, 120146, 120485, 120488, 120512, 120514, 120538, 120540, 120570, 120572, 120596, 120598, 120628, 120630, 120654, 120656, 120686, 120688, 120712, 120714, 120744, 120746, 120770, 120772, 120779, 131072, 131072, 173782, 173782, 173824, 173824, 177972, 177972, 177984, 177984, 178205, 178205, 194560, 195101];
const identifierStartTable = [];

for (let i = 0; i < 128; i++) {
  identifierStartTable[i] = i >= 48 && i <= 57 || // 0-9
  i === 36 || // $
  i === 126 || // ~
  i === 124 || // |
  i >= 65 && i <= 90 || // A-Z
  i === 95 || // _
  i === 45 || // -
  i === 42 || // *
  i === 58 || // :
  i === 91 || // templateStart [
  i === 93 || // templateEnd ]
  i === 63 || // ?
  i === 37 || // %
  i === 35 || // #
  i === 61 || // =
  i >= 97 && i <= 122; // a-z
}

const identifierPartTable = identifierStartTable;
class Lexer {
  constructor(expression) {
    _defineProperty(this, "input", void 0);

    _defineProperty(this, "char", void 0);

    _defineProperty(this, "from", void 0);

    this.input = expression;
    this.char = 1;
    this.from = 1;
  }

  peek(i) {
    return this.input.charAt(i || 0);
  }

  skip(i) {
    i = i || 1;
    this.char += i;
    this.input = this.input.slice(i);
  }

  tokenize() {
    const list = [];
    let token = this.next();

    while (token) {
      list.push(token);
      token = this.next();
    }

    return list;
  }

  next() {
    this.from = this.char; // Move to the next non-space character.

    if (/\s/.test(this.peek())) {
      while (/\s/.test(this.peek())) {
        this.from += 1;
        this.skip();
      }

      if (this.peek() === '') {
        // EOL
        return null;
      }
    }

    let match = this.scanStringLiteral();

    if (match) {
      return match;
    }

    match = this.scanPunctuator() || this.scanNumericLiteral() || this.scanIdentifier() || this.scanTemplateSequence();

    if (match) {
      this.skip(match.value.length);
      return match;
    } // No token could be matched, give up.


    return null;
  }

  scanTemplateSequence() {
    if (this.peek() === '[' && this.peek(1) === '[') {
      return {
        type: 'templateStart',
        value: '[[',
        pos: this.char
      };
    }

    if (this.peek() === ']' && this.peek(1) === ']') {
      return {
        type: 'templateEnd',
        value: '[[',
        pos: this.char
      };
    }

    return null;
  }
  /*
   * Extract a JavaScript identifier out of the next sequence of
   * characters or return 'null' if its not possible. In addition,
   * to Identifier this method can also produce BooleanLiteral
   * (true/false) and NullLiteral (null).
   */


  scanIdentifier() {
    let id = '';
    let index = 0;
    let type, char; // Detects any character in the Unicode categories "Uppercase
    // letter (Lu)", "Lowercase letter (Ll)", "Titlecase letter
    // (Lt)", "Modifier letter (Lm)", "Other letter (Lo)", or
    // "Letter number (Nl)".
    //
    // Both approach and unicodeLetterTable were borrowed from
    // Google's Traceur.

    function isUnicodeLetter(code) {
      for (let i = 0; i < unicodeLetterTable.length;) {
        if (code < unicodeLetterTable[i++]) {
          return false;
        }

        if (code <= unicodeLetterTable[i++]) {
          return true;
        }
      }

      return false;
    }

    function isHexDigit(str) {
      return /^[0-9a-fA-F]$/.test(str);
    }

    const readUnicodeEscapeSequence = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function () {
      index += 1;

      if (this.peek(index) !== 'u') {
        return null;
      }

      const ch1 = this.peek(index + 1);
      const ch2 = this.peek(index + 2);
      const ch3 = this.peek(index + 3);
      const ch4 = this.peek(index + 4);
      let code;

      if (isHexDigit(ch1) && isHexDigit(ch2) && isHexDigit(ch3) && isHexDigit(ch4)) {
        code = parseInt(ch1 + ch2 + ch3 + ch4, 16);

        if (isUnicodeLetter(code)) {
          index += 5;
          return '\\u' + ch1 + ch2 + ch3 + ch4;
        }

        return null;
      }

      return null;
    }, this);
    const getIdentifierStart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function () {
      const chr = this.peek(index);
      const code = chr.charCodeAt(0);

      if (chr === '*') {
        index += 1;
        return chr;
      }

      if (code === 92) {
        return readUnicodeEscapeSequence();
      }

      if (code < 128) {
        if (identifierStartTable[code]) {
          index += 1;
          return chr;
        }

        return null;
      }

      if (isUnicodeLetter(code)) {
        index += 1;
        return chr;
      }

      return null;
    }, this);
    const getIdentifierPart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function () {
      const chr = this.peek(index);
      const code = chr.charCodeAt(0);

      if (code === 92) {
        return readUnicodeEscapeSequence();
      }

      if (code < 128) {
        if (identifierPartTable[code]) {
          index += 1;
          return chr;
        }

        return null;
      }

      if (isUnicodeLetter(code)) {
        index += 1;
        return chr;
      }

      return null;
    }, this);
    char = getIdentifierStart();

    if (char === null) {
      return null;
    }

    id = char;

    for (;;) {
      char = getIdentifierPart();

      if (char === null) {
        break;
      }

      id += char;
    }

    switch (id) {
      case 'true':
        {
          type = 'bool';
          break;
        }

      case 'false':
        {
          type = 'bool';
          break;
        }

      default:
        type = 'identifier';
    }

    return {
      type: type,
      value: id,
      pos: this.char
    };
  }
  /*
   * Extract a numeric literal out of the next sequence of
   * characters or return 'null' if its not possible. This method
   * supports all numeric literals described in section 7.8.3
   * of the EcmaScript 5 specification.
   *
   * This method's implementation was heavily influenced by the
   * scanNumericLiteral function in the Esprima parser's source code.
   */


  scanNumericLiteral() {
    let index = 0;
    let value = '';
    const length = this.input.length;
    let char = this.peek(index);
    let bad;

    function isDecimalDigit(str) {
      return /^[0-9]$/.test(str);
    }

    function isOctalDigit(str) {
      return /^[0-7]$/.test(str);
    }

    function isHexDigit(str) {
      return /^[0-9a-fA-F]$/.test(str);
    }

    function isIdentifierStart(ch) {
      return ch === '$' || ch === '_' || ch === '\\' || ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z';
    } // handle negative num literals


    if (char === '-') {
      value += char;
      index += 1;
      char = this.peek(index);
    } // Numbers must start either with a decimal digit or a point.


    if (char !== '.' && !isDecimalDigit(char)) {
      return null;
    }

    if (char !== '.') {
      value += this.peek(index);
      index += 1;
      char = this.peek(index);

      if (value === '0') {
        // Base-16 numbers.
        if (char === 'x' || char === 'X') {
          index += 1;
          value += char;

          while (index < length) {
            char = this.peek(index);

            if (!isHexDigit(char)) {
              break;
            }

            value += char;
            index += 1;
          }

          if (value.length <= 2) {
            // 0x
            return {
              type: 'number',
              value: value,
              isMalformed: true,
              pos: this.char
            };
          }

          if (index < length) {
            char = this.peek(index);

            if (isIdentifierStart(char)) {
              return null;
            }
          }

          return {
            type: 'number',
            value: value,
            base: 16,
            isMalformed: false,
            pos: this.char
          };
        } // Base-8 numbers.


        if (isOctalDigit(char)) {
          index += 1;
          value += char;
          bad = false;

          while (index < length) {
            char = this.peek(index); // Numbers like '019' (note the 9) are not valid octals
            // but we still parse them and mark as malformed.

            if (isDecimalDigit(char)) {
              bad = true;
            }

            if (!isOctalDigit(char)) {
              // if the char is a non punctuator then its not a valid number
              if (!this.isPunctuator(char)) {
                return null;
              }

              break;
            }

            value += char;
            index += 1;
          }

          if (index < length) {
            char = this.peek(index);

            if (isIdentifierStart(char)) {
              return null;
            }
          }

          return {
            type: 'number',
            value: value,
            base: 8,
            isMalformed: bad
          };
        } // Decimal numbers that start with '0' such as '09' are illegal
        // but we still parse them and return as malformed.


        if (isDecimalDigit(char)) {
          index += 1;
          value += char;
        }
      }

      while (index < length) {
        char = this.peek(index);

        if (!isDecimalDigit(char)) {
          break;
        }

        value += char;
        index += 1;
      }
    } // Decimal digits.


    if (char === '.') {
      value += char;
      index += 1;

      while (index < length) {
        char = this.peek(index);

        if (!isDecimalDigit(char)) {
          break;
        }

        value += char;
        index += 1;
      }
    } // Exponent part.


    if (char === 'e' || char === 'E') {
      value += char;
      index += 1;
      char = this.peek(index);

      if (char === '+' || char === '-') {
        value += this.peek(index);
        index += 1;
      }

      char = this.peek(index);

      if (isDecimalDigit(char)) {
        value += char;
        index += 1;

        while (index < length) {
          char = this.peek(index);

          if (!isDecimalDigit(char)) {
            break;
          }

          value += char;
          index += 1;
        }
      } else {
        return null;
      }
    }

    if (index < length) {
      char = this.peek(index);

      if (!this.isPunctuator(char)) {
        return null;
      }
    }

    return {
      type: 'number',
      value: value,
      base: 10,
      pos: this.char,
      isMalformed: !isFinite(+value)
    };
  }

  isPunctuator(ch1) {
    switch (ch1) {
      case '.':
      case '(':
      case ')':
      case ',':
      case '{':
      case '}':
        return true;
    }

    return false;
  }

  scanPunctuator() {
    const ch1 = this.peek();

    if (this.isPunctuator(ch1)) {
      return {
        type: ch1,
        value: ch1,
        pos: this.char
      };
    }

    return null;
  }
  /*
   * Extract a string out of the next sequence of characters and/or
   * lines or return 'null' if its not possible. Since strings can
   * span across multiple lines this method has to move the char
   * pointer.
   *
   * This method recognizes pseudo-multiline JavaScript strings:
   *
   *   var str = "hello\
   *   world";
   */


  scanStringLiteral() {
    const quote = this.peek(); // String must start with a quote.

    if (quote !== '"' && quote !== "'") {
      return null;
    }

    let value = '';
    this.skip();

    while (this.peek() !== quote) {
      if (this.peek() === '') {
        // End Of Line
        return {
          type: 'string',
          value: value,
          isUnclosed: true,
          quote: quote,
          pos: this.char
        };
      }

      const char = this.peek();
      const jump = 1; // A length of a jump, after we're done
      // parsing this character.

      value += char;
      this.skip(jump);
    }

    this.skip();
    return {
      type: 'string',
      value: value,
      isUnclosed: false,
      quote: quote,
      pos: this.char
    };
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/meta.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRollupNotice": () => (/* binding */ getRollupNotice),
/* harmony export */   "getRuntimeConsolidationNotice": () => (/* binding */ getRuntimeConsolidationNotice),
/* harmony export */   "parseSchemaRetentions": () => (/* binding */ parseSchemaRetentions)
/* harmony export */ });
// https://github.com/grafana/metrictank/blob/master/scripts/config/storage-schemas.conf#L15-L46
function toInteger(val) {
  if (val) {
    return parseInt(val, 10);
  }

  return undefined;
}

function toBooleanOrTimestamp(val) {
  if (val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    return parseInt(val, 10);
  }

  return undefined;
}

function getRollupNotice(metaList) {
  for (const meta of metaList) {
    const archiveIndex = meta['archive-read'];

    if (archiveIndex > 0) {
      var _meta$consolidatorNo;

      const schema = parseSchemaRetentions(meta['schema-retentions']);
      const intervalString = schema[archiveIndex].interval;
      const func = ((_meta$consolidatorNo = meta['consolidator-normfetch']) !== null && _meta$consolidatorNo !== void 0 ? _meta$consolidatorNo : '').replace('Consolidator', '');
      return {
        text: `Data is rolled up, aggregated over ${intervalString} using ${func} function`,
        severity: 'info',
        inspect: 'meta'
      };
    }
  }

  return null;
}
function getRuntimeConsolidationNotice(metaList) {
  for (const meta of metaList) {
    const runtimeNr = meta['aggnum-rc'];

    if (runtimeNr > 0) {
      var _meta$consolidatorRc;

      const func = ((_meta$consolidatorRc = meta['consolidator-rc']) !== null && _meta$consolidatorRc !== void 0 ? _meta$consolidatorRc : '').replace('Consolidator', '');
      return {
        text: `Data is runtime consolidated, ${runtimeNr} datapoints combined using ${func} function`,
        severity: 'info',
        inspect: 'meta'
      };
    }
  }

  return null;
}
function parseSchemaRetentions(spec) {
  if (!spec) {
    return [];
  }

  return spec.split(',').map(str => {
    const vals = str.split(':');
    return {
      interval: vals[0],
      retention: vals[1],
      chunkspan: vals[2],
      numchunks: toInteger(vals[3]),
      ready: toBooleanOrTimestamp(vals[4])
    };
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/graphite/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/ConfigEditor.tsx");
/* harmony import */ var _components_MetricTankMetaInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricTankMetaInspector.tsx");
/* harmony import */ var _components_GraphiteQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteQueryEditor.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AnnotationsQueryCtrl {}

_defineProperty(AnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_0__.GraphiteDatasource).setQueryEditor(_components_GraphiteQueryEditor__WEBPACK_IMPORTED_MODULE_4__.GraphiteQueryEditor).setConfigEditor(_configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__.ConfigEditor).setMetadataInspector(_components_MetricTankMetaInspector__WEBPACK_IMPORTED_MODULE_3__.MetricTankMetaInspector).setAnnotationQueryCtrl(AnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parser": () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/graphite/lexer.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Parser {
  constructor(expression) {
    _defineProperty(this, "expression", void 0);

    _defineProperty(this, "lexer", void 0);

    _defineProperty(this, "tokens", void 0);

    _defineProperty(this, "index", void 0);

    this.expression = expression;
    this.lexer = new _lexer__WEBPACK_IMPORTED_MODULE_0__.Lexer(expression);
    this.tokens = this.lexer.tokenize();
    this.index = 0;
  }

  getAst() {
    return this.start();
  }

  start() {
    try {
      return this.functionCall() || this.metricExpression();
    } catch (e) {
      return {
        type: 'error',
        message: e.message,
        pos: e.pos
      };
    }
  }

  curlyBraceSegment() {
    if (this.match('identifier', '{') || this.match('{')) {
      let curlySegment = '';

      while (!this.match('') && !this.match('}')) {
        curlySegment += this.consumeToken().value;
      }

      if (!this.match('}')) {
        this.errorMark("Expected closing '}'");
      }

      curlySegment += this.consumeToken().value; // if curly segment is directly followed by identifier
      // include it in the segment

      if (this.match('identifier')) {
        curlySegment += this.consumeToken().value;
      }

      return {
        type: 'segment',
        value: curlySegment
      };
    } else {
      return null;
    }
  }

  metricSegment() {
    const curly = this.curlyBraceSegment();

    if (curly) {
      return curly;
    }

    if (this.match('identifier') || this.match('number')) {
      // hack to handle float numbers in metric segments
      const parts = this.consumeToken().value.split('.');

      if (parts.length === 2) {
        this.tokens.splice(this.index, 0, {
          type: '.'
        });
        this.tokens.splice(this.index + 1, 0, {
          type: 'number',
          value: parts[1]
        });
      }

      return {
        type: 'segment',
        value: parts[0]
      };
    }

    if (!this.match('templateStart')) {
      this.errorMark('Expected metric identifier');
    }

    this.consumeToken();

    if (!this.match('identifier')) {
      this.errorMark('Expected identifier after templateStart');
    }

    const node = {
      type: 'template',
      value: this.consumeToken().value
    };

    if (!this.match('templateEnd')) {
      this.errorMark('Expected templateEnd');
    }

    this.consumeToken();
    return node;
  }

  metricExpression() {
    if (!this.match('templateStart') && !this.match('identifier') && !this.match('number') && !this.match('{')) {
      return null;
    }

    const node = {
      type: 'metric',
      segments: []
    };
    node.segments.push(this.metricSegment());

    while (this.match('.')) {
      this.consumeToken();
      const segment = this.metricSegment();

      if (!segment) {
        this.errorMark('Expected metric identifier');
      }

      node.segments.push(segment);
    }

    return node;
  }

  functionCall() {
    if (!this.match('identifier', '(')) {
      return null;
    }

    const node = {
      type: 'function',
      name: this.consumeToken().value
    }; // consume left parenthesis

    this.consumeToken();
    node.params = this.functionParameters();

    if (!this.match(')')) {
      this.errorMark('Expected closing parenthesis');
    }

    this.consumeToken();
    return node;
  }

  boolExpression() {
    if (!this.match('bool')) {
      return null;
    }

    return {
      type: 'bool',
      value: this.consumeToken().value === 'true'
    };
  }

  functionParameters() {
    if (this.match(')') || this.match('')) {
      return [];
    }

    const param = this.functionCall() || this.numericLiteral() || this.seriesRefExpression() || this.boolExpression() || this.metricExpression() || this.stringLiteral();

    if (!this.match(',')) {
      return [param];
    }

    this.consumeToken();
    return [param].concat(this.functionParameters());
  }

  seriesRefExpression() {
    if (!this.match('identifier')) {
      return null;
    }

    const value = this.tokens[this.index].value;

    if (!value.match(/\#[A-Z]/)) {
      return null;
    }

    const token = this.consumeToken();
    return {
      type: 'series-ref',
      value: token.value
    };
  }

  numericLiteral() {
    if (!this.match('number')) {
      return null;
    }

    return {
      type: 'number',
      value: parseFloat(this.consumeToken().value)
    };
  }

  stringLiteral() {
    if (!this.match('string')) {
      return null;
    }

    const token = this.consumeToken();

    if (token.isUnclosed) {
      throw {
        message: 'Unclosed string parameter',
        pos: token.pos
      };
    }

    return {
      type: 'string',
      value: token.value
    };
  }

  errorMark(text) {
    const currentToken = this.tokens[this.index];
    const type = currentToken ? currentToken.type : 'end of string';
    throw {
      message: text + ' instead found ' + type,
      pos: currentToken ? currentToken.pos : this.lexer.char
    };
  } // returns token value and incre


  consumeToken() {
    this.index++;
    return this.tokens[this.index - 1];
  }

  matchToken(type, index) {
    const token = this.tokens[this.index + index];
    return token === undefined && type === '' || token && token.type === type;
  }

  match(token1, token2) {
    return this.matchToken(token1, 0) && (!token2 || this.matchToken(token2, 1));
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-7692db070f/0/cache/@reduxjs-toolkit-npm-1.7.2-7ced4ba4dc-41c17c660f.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


/**
 * List of possible actions changing the state of QueryEditor
 */
const init = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('init');
/**
 * Synchronise editor dependencies with internal state.
 */

const timeRangeChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('time-range-changed');
const queriesChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('queries-changed');
const queryChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('query-changed'); // Metrics & Tags

const segmentValueChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('segment-value-changed'); // Tags

const addNewTag = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('add-new-tag');
const tagChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('tag-changed');
const unpause = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('unpause'); // Functions

const addFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('add-function');
const removeFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('remove-function');
const moveFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('move-function');
const updateFunctionParam = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('change-function-param'); // Text editor

const updateQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('update-query');
const runQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('run-current-query');
const toggleEditorMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('toggle-editor');
const actions = {
  init,
  timeRangeChanged,
  queriesChanged,
  queryChanged,
  segmentValueChanged,
  tagChanged,
  addNewTag,
  unpause,
  addFunction,
  removeFunction,
  moveFunction,
  updateFunctionParam,
  updateQuery,
  runQuery,
  toggleEditorMode
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/context.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteQueryEditorContext": () => (/* binding */ GraphiteQueryEditorContext),
/* harmony export */   "useDispatch": () => (/* binding */ useDispatch),
/* harmony export */   "useGraphiteState": () => (/* binding */ useGraphiteState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/store.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const DispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const GraphiteStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useDispatch = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DispatchContext);
};
const useGraphiteState = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GraphiteStateContext);
};
const GraphiteQueryEditorContext = ({
  datasource,
  onRunQuery,
  onChange,
  query,
  queries,
  range,
  children
}) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [needsRefresh, setNeedsRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_store__WEBPACK_IMPORTED_MODULE_1__.createStore)(state => {
      setState(state);
    });
  }, []); // synchronise changes provided in props with editor's state

  const previousRange = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(range);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((previousRange === null || previousRange === void 0 ? void 0 : previousRange.raw) !== (range === null || range === void 0 ? void 0 : range.raw)) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_3__.actions.timeRangeChanged(range));
    }
  }, [dispatch, range, previousRange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_3__.actions.queriesChanged(queries));
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, queries]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _state$target;

    if (state && ((_state$target = state.target) === null || _state$target === void 0 ? void 0 : _state$target.target) !== query.target) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_3__.actions.queryChanged(query));
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (needsRefresh && state) {
      setNeedsRefresh(false);
      onChange(Object.assign({}, query, {
        target: state.target.target
      }));
      onRunQuery();
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [needsRefresh, onChange, onRunQuery, query]);

  if (!state) {
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_3__.actions.init({
      target: query,
      datasource: datasource,
      range: range,
      templateSrv: (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)(),
      // list of queries is passed only when the editor is in Dashboards. This is to allow interpolation
      // of sub-queries which are stored in "targetFull" property used by alerting in the backend.
      queries: queries || [],
      refresh: () => {
        // do not run onChange/onRunQuery straight away to ensure the internal state gets updated first
        // to avoid race conditions (onChange could update props before the reducer action finishes)
        setNeedsRefresh(true);
      }
    }));
    return null;
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GraphiteStateContext.Provider, {
      value: state,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DispatchContext.Provider, {
        value: dispatch,
        children: children
      })
    });
  }
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRAPHITE_TAG_OPERATORS": () => (/* binding */ GRAPHITE_TAG_OPERATORS),
/* harmony export */   "TAG_PREFIX": () => (/* binding */ TAG_PREFIX),
/* harmony export */   "addSelectMetricSegment": () => (/* binding */ addSelectMetricSegment),
/* harmony export */   "addSeriesByTagFunc": () => (/* binding */ addSeriesByTagFunc),
/* harmony export */   "buildSegments": () => (/* binding */ buildSegments),
/* harmony export */   "checkOtherSegments": () => (/* binding */ checkOtherSegments),
/* harmony export */   "emptySegments": () => (/* binding */ emptySegments),
/* harmony export */   "handleMetricsAutoCompleteError": () => (/* binding */ handleMetricsAutoCompleteError),
/* harmony export */   "handleTagsAutoCompleteError": () => (/* binding */ handleTagsAutoCompleteError),
/* harmony export */   "handleTargetChanged": () => (/* binding */ handleTargetChanged),
/* harmony export */   "parseTarget": () => (/* binding */ parseTarget),
/* harmony export */   "pause": () => (/* binding */ pause),
/* harmony export */   "removeTagPrefix": () => (/* binding */ removeTagPrefix),
/* harmony export */   "smartlyHandleNewAliasByNode": () => (/* binding */ smartlyHandleNewAliasByNode),
/* harmony export */   "spliceSegments": () => (/* binding */ spliceSegments)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");





/**
 * Helpers used by reducers and providers. They modify state object directly so should operate on a copy of the state.
 */
const GRAPHITE_TAG_OPERATORS = ['=', '!=', '=~', '!=~'];
/**
 * Tag names and metric names are displayed in a single dropdown. This prefix is used to
 * distinguish both in the UI.
 */

const TAG_PREFIX = 'tag: ';
/**
 * Create new AST based on new query.
 * Build segments from parsed metric name and functions.
 */

async function parseTarget(state) {
  state.queryModel.parseTarget();
  await buildSegments(state);
}
/**
 * Create segments out of the current metric path + add "select metrics" if it's possible to add more to the path
 */

async function buildSegments(state, modifyLastSegment = true) {
  // Start with a shallow copy from the model, then check if "select metric" segment should be added at the end
  state.segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(state.queryModel.segments);
  const checkOtherSegmentsIndex = state.queryModel.checkOtherSegmentsIndex || 0;
  await checkOtherSegments(state, checkOtherSegmentsIndex, modifyLastSegment);
}
/**
 * Add "select metric" segment at the end
 */

function addSelectMetricSegment(state) {
  state.queryModel.addSelectMetricSegment();
  state.segments.push({
    value: 'select metric',
    fake: true
  });
}
/**
 * Validates the state after adding or changing a segment:
 * - adds "select metric" only when more segments can be added to the metric name
 * - check if subsequent segments are still valid if in-between segment changes and
 *   removes invalid segments.
 */

async function checkOtherSegments(state, fromIndex, modifyLastSegment = true) {
  if (state.queryModel.segments.length === 1 && state.queryModel.segments[0].type === 'series-ref') {
    return;
  }

  if (fromIndex === 0) {
    addSelectMetricSegment(state);
    return;
  }

  const path = state.queryModel.getSegmentPathUpTo(fromIndex + 1);

  if (path === '') {
    return;
  }

  try {
    const segments = await state.datasource.metricFindQuery(path);

    if (segments.length === 0) {
      if (path !== '' && modifyLastSegment) {
        state.queryModel.segments = state.queryModel.segments.splice(0, fromIndex);
        state.segments = state.segments.splice(0, fromIndex);
        addSelectMetricSegment(state);
      }
    } else if (segments[0].expandable) {
      if (state.segments.length === fromIndex) {
        addSelectMetricSegment(state);
      } else {
        await checkOtherSegments(state, fromIndex + 1);
      }
    }
  } catch (err) {
    handleMetricsAutoCompleteError(state, err);
  }
}
function spliceSegments(state, index) {
  state.segments = state.segments.splice(0, index);
  state.queryModel.segments = state.queryModel.segments.splice(0, index);
}
function emptySegments(state) {
  state.queryModel.segments = [];
  state.segments = [];
}
/**
 * When seriesByTag function is added the UI changes it's state and only tags can be added from now.
 */

async function addSeriesByTagFunc(state, tag) {
  const newFunc = state.datasource.createFuncInstance('seriesByTag', {
    withDefaultParams: false
  });
  const tagParam = `${tag}=`;
  newFunc.params = [tagParam];
  state.queryModel.addFunction(newFunc);
  newFunc.added = true;
  emptySegments(state);
  handleTargetChanged(state);
  await parseTarget(state);
}
function smartlyHandleNewAliasByNode(state, func) {
  if (func.def.name !== 'aliasByNode') {
    return;
  }

  for (let i = 0; i < state.segments.length; i++) {
    if (state.segments[i].value.indexOf('*') >= 0) {
      func.params[0] = i;
      func.added = false;
      handleTargetChanged(state);
      return;
    }
  }
}
/**
 * Pauses running the query to allow selecting tag value. This is to prevent getting errors if the query is run
 * for a tag with no selected value.
 */

function pause(state) {
  state.paused = true;
}
function removeTagPrefix(value) {
  return value.replace(TAG_PREFIX, '');
}
function handleTargetChanged(state) {
  if (state.queryModel.error) {
    return;
  }

  const oldTarget = state.queryModel.target.target; // Interpolate from other queries:
  // Because of mixed data sources the list may contain queries for non-Graphite data sources. To ensure a valid query
  // is used for interpolation we should check required properties are passed though in theory it allows to interpolate
  // with queries that contain "target" property as well.

  state.queryModel.updateModelTarget((state.queries || []).filter(query => 'target' in query && typeof query.target === 'string'));

  if (state.queryModel.target.target !== oldTarget && !state.paused) {
    state.refresh();
  }
}
/**
 * When metrics autocomplete fails - the error is shown, but only once per page view
 */

function handleMetricsAutoCompleteError(state, error) {
  if (!state.metricAutoCompleteErrorShown) {
    state.metricAutoCompleteErrorShown = true;
    (0,_store_store__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)(`Fetching metrics failed: ${error.message}.`)));
  }

  return state;
}
/**
 * When tags autocomplete fails - the error is shown, but only once per page view
 */

function handleTagsAutoCompleteError(state, error) {
  if (!state.tagsAutoCompleteErrorShown) {
    state.tagsAutoCompleteErrorShown = true;
    (0,_store_store__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)(`Fetching tags failed: ${error.message}.`)));
  }

  return state;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/providers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAltSegmentsSelectables": () => (/* binding */ getAltSegmentsSelectables),
/* harmony export */   "getTagOperatorsSelectables": () => (/* binding */ getTagOperatorsSelectables),
/* harmony export */   "getTagValuesSelectables": () => (/* binding */ getTagValuesSelectables),
/* harmony export */   "getTagsAsSegmentsSelectables": () => (/* binding */ getTagsAsSegmentsSelectables),
/* harmony export */   "getTagsSelectables": () => (/* binding */ getTagsSelectables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/helpers.ts");
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");




/**
 * All auto-complete lists are updated while typing. To avoid performance issues we do not render more
 * than MAX_SUGGESTIONS limits in a single dropdown.
 *
 * MAX_SUGGESTIONS is per metrics and tags separately. On the very first dropdown where metrics and tags are
 * combined together meaning it may end up with max of 2 * MAX_SUGGESTIONS items in total.
 */
const MAX_SUGGESTIONS = 5000;
/**
 * Providers are hooks for views to provide temporal data for autocomplete. They don't modify the state.
 */

/**
 * Return list of available options for a segment with given index
 *
 * It may be:
 * - mixed list of metrics and tags (only when nothing was selected)
 * - list of metric names (if a metric name was selected for this segment)
 */

async function getAltSegments(state, index, prefix) {
  let query = prefix.length > 0 ? '*' + prefix + '*' : '*';

  if (index > 0) {
    query = state.queryModel.getSegmentPathUpTo(index) + '.' + query;
  }

  const options = {
    range: state.range,
    requestId: 'get-alt-segments'
  };

  try {
    const segments = await state.datasource.metricFindQuery(query, options);
    const altSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(segments, segment => {
      return {
        value: segment.text,
        expandable: segment.expandable
      };
    });

    if (index > 0 && altSegments.length === 0) {
      return altSegments;
    } // add query references


    if (index === 0) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.queries, target => {
        if (target.refId === state.queryModel.target.refId) {
          return;
        }

        altSegments.unshift({
          type: 'series-ref',
          value: '#' + target.refId,
          expandable: false
        });
      });
    } // add template variables


    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.templateSrv.getVariables(), variable => {
      altSegments.unshift({
        type: 'template',
        value: '$' + variable.name,
        expandable: true
      });
    }); // add wildcard option and limit number of suggestions (API doesn't support limiting
    // hence we are doing it here)

    altSegments.unshift({
      value: '*',
      expandable: true
    });
    altSegments.splice(MAX_SUGGESTIONS);

    if (state.supportsTags && index === 0) {
      removeTaggedEntry(altSegments);
      return await addAltTagSegments(state, prefix, altSegments);
    } else {
      return altSegments;
    }
  } catch (err) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.handleMetricsAutoCompleteError)(state, err);
  }

  return [];
}
/**
 * Get the list of segments with tags and metrics. Suggestions are reduced in getAltSegments and addAltTagSegments so in case
 * we hit MAX_SUGGESTIONS limit there are always some tags and metrics shown.
 */


async function getAltSegmentsSelectables(state, index, prefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_2__.mapSegmentsToSelectables)(await getAltSegments(state, index, prefix));
}
function getTagOperatorsSelectables() {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_2__.mapStringsToSelectables)(_helpers__WEBPACK_IMPORTED_MODULE_1__.GRAPHITE_TAG_OPERATORS);
}
/**
 * Returns tags as dropdown options
 */

async function getTags(state, index, tagPrefix) {
  try {
    const tagExpressions = state.queryModel.renderTagExpressions(index);
    const values = await state.datasource.getTagsAutoComplete(tagExpressions, tagPrefix, {
      range: state.range,
      limit: MAX_SUGGESTIONS
    });
    const altTags = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, 'text');
    altTags.splice(0, 0, state.removeTagValue);
    return altTags;
  } catch (err) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.handleTagsAutoCompleteError)(state, err);
  }

  return [];
}

async function getTagsSelectables(state, index, tagPrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_2__.mapStringsToSelectables)(await getTags(state, index, tagPrefix));
}
/**
 * List of tags when a tag is added. getTags is used for editing.
 * When adding - segment is used. When editing - dropdown is used.
 */

async function getTagsAsSegments(state, tagPrefix) {
  let tagsAsSegments;

  try {
    const tagExpressions = state.queryModel.renderTagExpressions();
    const values = await state.datasource.getTagsAutoComplete(tagExpressions, tagPrefix, {
      range: state.range,
      limit: MAX_SUGGESTIONS
    });
    tagsAsSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, val => {
      return {
        value: val.text,
        type: 'tag',
        expandable: false
      };
    });
  } catch (err) {
    tagsAsSegments = [];
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.handleTagsAutoCompleteError)(state, err);
  }

  return tagsAsSegments;
}
/**
 * Get list of tags, used when adding additional tags (first tag is selected from a joined list of metrics and tags)
 */


async function getTagsAsSegmentsSelectables(state, tagPrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_2__.mapSegmentsToSelectables)(await getTagsAsSegments(state, tagPrefix));
}

async function getTagValues(state, tag, index, valuePrefix) {
  const tagExpressions = state.queryModel.renderTagExpressions(index);
  const tagKey = tag.key;
  const values = await state.datasource.getTagValuesAutoComplete(tagExpressions, tagKey, valuePrefix, {
    limit: MAX_SUGGESTIONS
  });
  const altValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, 'text'); // Add template variables as additional values

  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.templateSrv.getVariables(), variable => {
    altValues.push('${' + variable.name + ':regex}');
  });
  return altValues;
}

async function getTagValuesSelectables(state, tag, index, valuePrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_2__.mapStringsToSelectables)(await getTagValues(state, tag, index, valuePrefix));
}
/**
 * Add segments with tags prefixed with "tag: " to include them in the same list as metrics
 */

async function addAltTagSegments(state, prefix, altSegments) {
  let tagSegments = await getTagsAsSegments(state, prefix);
  tagSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(tagSegments, segment => {
    segment.value = _helpers__WEBPACK_IMPORTED_MODULE_1__.TAG_PREFIX + segment.value;
    return segment;
  });
  return altSegments.concat(...tagSegments);
}

function removeTaggedEntry(altSegments) {
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(altSegments, s => s.value === '_tagged');
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/store.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _graphite_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/graphite/graphite_query.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/helpers.ts");





const reducer = async (action, state) => {
  state = Object.assign({}, state);

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.init.match(action)) {
    const deps = action.payload;
    deps.target.target = deps.target.target || '';
    await deps.datasource.waitForFuncDefsLoaded();
    state = Object.assign({}, state, deps, {
      queryModel: new _graphite_query__WEBPACK_IMPORTED_MODULE_0__["default"](deps.datasource, deps.target, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)()),
      supportsTags: deps.datasource.supportsTags,
      paused: false,
      removeTagValue: '-- remove tag --',
      funcDefs: deps.datasource.funcDefs,
      queries: deps.queries
    });
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.buildSegments)(state, false);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.timeRangeChanged.match(action)) {
    state.range = action.payload;
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.queriesChanged.match(action)) {
    state.queries = action.payload;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.queryChanged.match(action)) {
    state.target.target = action.payload.target || '';
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseTarget)(state);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.segmentValueChanged.match(action)) {
    const {
      segment: segmentOrString,
      index: segmentIndex
    } = action.payload;
    let segment; // is segment was changed to a string - create a new segment

    if (typeof segmentOrString === 'string') {
      segment = {
        value: segmentOrString,
        expandable: true,
        fake: false
      };
    } else {
      segment = segmentOrString;
    }

    state.error = null;
    state.segments[segmentIndex] = segment;
    state.queryModel.updateSegmentValue(segment, segmentIndex);

    if (state.queryModel.functions.length > 0 && state.queryModel.functions[0].def.fake) {
      state.queryModel.functions = [];
    }

    if (segment.type === 'tag') {
      const tag = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.removeTagPrefix)(segment.value);
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.pause)(state);
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.addSeriesByTagFunc)(state, tag);
      return state;
    } // if newly selected segment can be expanded -> check if the path is correct


    if (segment.expandable) {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.checkOtherSegments)(state, segmentIndex + 1);
    } else {
      // if not expandable -> remove all other segments
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.spliceSegments)(state, segmentIndex + 1);
    }

    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.tagChanged.match(action)) {
    const {
      tag,
      index: tagIndex
    } = action.payload;
    state.queryModel.updateTag(tag, tagIndex);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);

    if (state.queryModel.tags.length === 0) {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.checkOtherSegments)(state, 0);
      state.paused = false;
    }
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.addNewTag.match(action)) {
    const segment = action.payload.segment;
    const newTagKey = segment.value;
    const newTag = {
      key: newTagKey,
      operator: '=',
      value: ''
    };
    state.queryModel.addTag(newTag);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.unpause.match(action)) {
    state.paused = false;
    state.refresh();
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.addFunction.match(action)) {
    const newFunc = state.datasource.createFuncInstance(action.payload.name, {
      withDefaultParams: true
    });
    newFunc.added = true;
    state.queryModel.addFunction(newFunc);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.smartlyHandleNewAliasByNode)(state, newFunc);

    if (state.segments.length === 1 && state.segments[0].fake) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.emptySegments)(state);
    }

    if (!newFunc.params.length && newFunc.added) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
    }

    if (newFunc.def.name === 'seriesByTag') {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseTarget)(state);
    }
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.removeFunction.match(action)) {
    state.queryModel.removeFunction(action.payload.func);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.moveFunction.match(action)) {
    const {
      func,
      offset
    } = action.payload;
    state.queryModel.moveFunction(func, offset);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.updateFunctionParam.match(action)) {
    const {
      func,
      index,
      value
    } = action.payload;
    func.updateParam(value, index);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.updateQuery.match(action)) {
    state.target.target = action.payload.query;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.runQuery.match(action)) {
    state.refresh();
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_1__.actions.toggleEditorMode.match(action)) {
    state.target.textEditor = !state.target.textEditor;
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseTarget)(state);
  }

  return Object.assign({}, state);
};

const createStore = onChange => {
  let state = {};

  const dispatch = async action => {
    state = await reducer(action, state);
    onChange(state);
  };

  return dispatch;
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteType": () => (/* binding */ GraphiteType)
/* harmony export */ });
let GraphiteType;

(function (GraphiteType) {
  GraphiteType["Default"] = "default";
  GraphiteType["Metrictank"] = "metrictank";
})(GraphiteType || (GraphiteType = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduceError": () => (/* binding */ reduceError)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Graphite-web before v1.6 returns HTTP 500 with full stack traces in an HTML page
 * when a query fails. It results in massive error alerts with HTML tags in the UI.
 * This function removes all HTML tags and keeps only the last line from the stack
 * trace which should be the most meaningful.
 */

function reduceError(error) {
  var _error$data, _error$data$message;

  if (error && error.status === 500 && (_error$data = error.data) !== null && _error$data !== void 0 && (_error$data$message = _error$data.message) !== null && _error$data$message !== void 0 && _error$data$message.startsWith('<body')) {
    // Remove all HTML tags and take the last line from the stack trace
    const newMessage = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(error.data.message.replace(/(<([^>]+)>)/gi, '').trim().split(/\n/)).replace(/u?&#[^;]+;/g, '');
    error.data.message = `Graphite encountered an unexpected error while handling your request. ${newMessage}`;
  }

  return error;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/versions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_GRAPHITE_VERSION": () => (/* binding */ DEFAULT_GRAPHITE_VERSION),
/* harmony export */   "GRAPHITE_VERSIONS": () => (/* binding */ GRAPHITE_VERSIONS)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const GRAPHITE_VERSIONS = ['0.9', '1.0', '1.1'];
const DEFAULT_GRAPHITE_VERSION = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(GRAPHITE_VERSIONS);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUMsRUFBRDtBQUpOLENBQUQsQ0FBVjtBQU9BRCxVQUFVLENBQUM7QUFDVHZkLEVBQUFBLElBQUksRUFBRSxjQURHO0FBRVRzTyxFQUFBQSxRQUFRLEVBQUUsZUFGRDtBQUdUOUosRUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRXhFLElBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCMlEsSUFBQUEsSUFBSSxFQUFFO0FBQXZCLEdBQUQsQ0FIQztBQUlUNk0sRUFBQUEsYUFBYSxFQUFFLENBQUMsQ0FBRDtBQUpOLENBQUQsQ0FBVjtBQU9BRCxVQUFVLENBQUM7QUFDVHZkLEVBQUFBLElBQUksRUFBRSxjQURHO0FBRVRzTyxFQUFBQSxRQUFRLEVBQUUsZUFGRDtBQUdUOUosRUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRXhFLElBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCMlEsSUFBQUEsSUFBSSxFQUFFO0FBQXZCLEdBQUQsQ0FIQztBQUlUNk0sRUFBQUEsYUFBYSxFQUFFLENBQUMsQ0FBRDtBQUpOLENBQUQsQ0FBVjtBQU9BRCxVQUFVLENBQUM7QUFDVHZkLEVBQUFBLElBQUksRUFBRSxjQURHO0FBRVRzTyxFQUFBQSxRQUFRLEVBQUUsZUFGRDtBQUdUOUosRUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRXhFLElBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCMlEsSUFBQUEsSUFBSSxFQUFFO0FBQXZCLEdBQUQsQ0FIQztBQUlUNk0sRUFBQUEsYUFBYSxFQUFFLENBQUMsQ0FBRDtBQUpOLENBQUQsQ0FBVjtBQU9BRCxVQUFVLENBQUM7QUFDVHZkLEVBQUFBLElBQUksRUFBRSxjQURHO0FBRVRzTyxFQUFBQSxRQUFRLEVBQUUsZUFGRDtBQUdUOUosRUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRXhFLElBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCMlEsSUFBQUEsSUFBSSxFQUFFO0FBQXZCLEdBQUQsQ0FIQztBQUlUNk0sRUFBQUEsYUFBYSxFQUFFLENBQUMsQ0FBRDtBQUpOLENBQUQsQ0FBVjtBQU9BRCxV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O0FBRVRzTyxFQUFBQSxRQUFRLEVBQUUsYUFGRDtBQUdUOUosRUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRXhFLElBQUFBLElBQUksRUFBRSxHQUFSO0FBQWEyUSxJQUFBQSxJQUFJLEVBQUU7QUFBbkIsR0FBRCxDQUhDO0FBSVQ2TSxFQUFBQSxhQUFhLEVBQUUsQ0FBQyxDQUFEO0FBSk4sQ0FBRCxDQUFWO0FBT0FELFVBQVUsQ0FBQztBQUNUdmQsRUFBQUEsSUFBSSxFQUFFLGtCQURHO0FBRVRzTyxFQUFBQSxRQUFRLEVBQUUsYUFGRDtBQUdUOUosRUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRXhFLElBQUFBLElBQUksRUFBRSxHQUFSO0FBQWEyUSxJQUFBQSxJQUFJLEVBQUU7QUFBbkIsR0FBRCxDQUhDO0FBSVQ2TSxFQUFBQSxhQUFhLEVBQUUsQ0FBQyxDQUFEO0FBSk4sQ0FBRCxDQUFWO0FBT0FELFVBQVUsQ0FBQztBQUNUdmQsRUFBQUEsSUFBSSxFQUFFLHVCQURHO0FBRVRzTyxFQUFBQSxRQUFRLEVBQUUsYUFGRDtBQUdUOUosRUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRXhFLElBQUFBLElBQUksRUFBRSxHQUFSO0FBQWEyUSxJQUFBQSxJQUFJLEVBQUU7QUFBbkIsR0FBRCxDQUhDO0FBSVQ2TSxFQUFBQSxhQUFhLEVBQUUsQ0FBQyxDQUFEO0FBSk4sQ0FBRCxDQUFWO0FBT0FELFVBQVUsQ0FBQztBQUNUdmQsRUFBQUEsSUFBSSxFQUFFLGtCQURHO0FBRVRzTyxFQUFBQSxRQUFRLEVBQUUsYUFGRDtBQUdUOUosRUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRXhFLElBQUFBLElBQUksRUFBRSxHQUFSO0FBQWEyUSxJQUFBQSxJQUFJLEVBQUU7QUFBbkIsR0FBRCxDQUhDO0FBSVQ2TSxFQUFBQSxhQUFhLEVBQUUsQ0FBQyxDQUFEO0FBSk4sQ0FBRCxDQUFWO0FBT0FELFVBQVUsQ0FBQztBQUNUdmQsRUFBQUEsSUFBSSxFQUFFLGdCQURHO0FBRVRzTyxFQUFBQSxRQUFRLEVBQUUsZUFGRDtBQUdUOUos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O0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL3V0aWxzL3ZlcnNpb24udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvQWRkR3JhcGhpdGVGdW5jdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvRnVuY3Rpb25FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0Z1bmN0aW9uRWRpdG9yQ29udHJvbHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0Z1bmN0aW9uUGFyYW1FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0Z1bmN0aW9uc1NlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0dyYXBoaXRlRnVuY3Rpb25FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0dyYXBoaXRlUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0dyYXBoaXRlVGV4dEVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvTWV0cmljU2VnbWVudC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvTWV0cmljVGFua01ldGFJbnNwZWN0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL01ldHJpY3NTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9QbGF5QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9TZXJpZXNTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9UYWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL1RhZ3NTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9oZWxwZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb25maWd1cmF0aW9uL0NvbmZpZ0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbmZpZ3VyYXRpb24vTWFwcGluZ3NDb25maWd1cmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29uZmlndXJhdGlvbi9NYXBwaW5nc0hlbHAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb25maWd1cmF0aW9uL3BhcnNlTG9raUxhYmVsTWFwcGluZ3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2dmdW5jLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9ncmFwaGl0ZV9xdWVyeS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvbGV4ZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL21ldGEudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvcGFyc2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9zdGF0ZS9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvc3RhdGUvaGVscGVycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvc3RhdGUvcHJvdmlkZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9zdGF0ZS9zdG9yZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS92ZXJzaW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtMDAzMjZlNzBiYS8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuMy4yLWEwMzJjYmViMDEtNzM3OTQ2MGY1MS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlUHJldmlvdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2ZXJzaW9uUGF0dGVybiA9IC9eKFxcZCspKD86XFwuKFxcZCspKT8oPzpcXC4oXFxkKykpPyg/Oi0oWzAtOUEtWmEtelxcLl0rKSk/LztcblxuZXhwb3J0IGNsYXNzIFNlbVZlcnNpb24ge1xuICBtYWpvcjogbnVtYmVyO1xuICBtaW5vcjogbnVtYmVyO1xuICBwYXRjaDogbnVtYmVyO1xuICBtZXRhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodmVyc2lvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5tYWpvciA9IDA7XG4gICAgdGhpcy5taW5vciA9IDA7XG4gICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgdGhpcy5tZXRhID0gJyc7XG4gICAgY29uc3QgbWF0Y2ggPSB2ZXJzaW9uUGF0dGVybi5leGVjKHZlcnNpb24pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdGhpcy5tYWpvciA9IE51bWJlcihtYXRjaFsxXSk7XG4gICAgICB0aGlzLm1pbm9yID0gTnVtYmVyKG1hdGNoWzJdIHx8IDApO1xuICAgICAgdGhpcy5wYXRjaCA9IE51bWJlcihtYXRjaFszXSB8fCAwKTtcbiAgICAgIHRoaXMubWV0YSA9IG1hdGNoWzRdO1xuICAgIH1cbiAgfVxuXG4gIGlzR3RPckVxKHZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbXBhcmVkID0gbmV3IFNlbVZlcnNpb24odmVyc2lvbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tcGFyYWJsZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRoaXMuY29tcGFyYWJsZVtpXSA+IGNvbXBhcmVkLmNvbXBhcmFibGVbaV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb21wYXJhYmxlW2ldIDwgY29tcGFyZWQuY29tcGFyYWJsZVtpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5tYWpvcik7XG4gIH1cblxuICBnZXQgY29tcGFyYWJsZSgpIHtcbiAgICByZXR1cm4gW3RoaXMubWFqb3IsIHRoaXMubWlub3IsIHRoaXMucGF0Y2hdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZlcnNpb25HdE9yRXEoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgYVNlbXZlciA9IG5ldyBTZW1WZXJzaW9uKGEpO1xuICByZXR1cm4gYVNlbXZlci5pc0d0T3JFcShiKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBTZWdtZW50LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRnVuY0RlZnMgfSBmcm9tICcuLi9nZnVuYyc7XG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgbWFwRnVuY0RlZnNUb1NlbGVjdGFibGVzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vc3RhdGUvY29udGV4dCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZ1bmNEZWZzOiBGdW5jRGVmcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGRHcmFwaGl0ZUZ1bmN0aW9uKHsgZnVuY0RlZnMgfTogUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gbWFwRnVuY0RlZnNUb1NlbGVjdGFibGVzKGZ1bmNEZWZzKSwgW2Z1bmNEZWZzXSk7XG5cbiAgLy8gTm90ZTogYWN0aW9ucy5hZGRGdW5jdGlvbiB3aWxsIGFkZCBhIGNvbXBvbmVudCB0aGF0IHdpbGwgaGF2ZSBhIGRyb3Bkb3duIG9yIGlucHV0IGluIGF1dG8tZm9jdXNcbiAgLy8gKHRoZSBmaXJzdCBwYXJhbSBvZiB0aGUgZnVuY3Rpb24pLiBUaGlzIGF1dG8tZm9jdXMgd2lsbCBjYXVzZSBvbkJsdXIoKSBvbiBBZGRHcmFwaGl0ZUZ1bmN0aW9uJ3NcbiAgLy8gU2VnbWVudCBjb21wb25lbnQgYW5kIHRyaWdnZXIgb25DaGFuZ2Ugb25jZSBhZ2Fpbi4gKHdoeT8gd2UgY2FsbCBvbkNoYW5nZSBpZiB0aGUgdXNlciBkaXNtaXNzZWRcbiAgLy8gdGhlIGRyb3Bkb3duLCBzZWU6IFNlZ21lbnRTZWxlY3Qub25DbG9zZU1lbnUgZm9yIG1vcmUgZGV0YWlscykuIFRvIGF2b2lkIGl0IHdlIG5lZWQgdG8gd2FpdCBmb3JcbiAgLy8gdGhlIFNlZ21lbnQgdG8gZGlzYXBwZWFyIGZpcnN0IChoZW5jZSB1c2VFZmZlY3QpIGFuZCB0aGVuIGRpc3BhdGNoIHRoZSBhY3Rpb24gdGhhdCB3aWxsIGFkZCBuZXdcbiAgLy8gY29tcG9uZW50cy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWU/LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuYWRkRnVuY3Rpb24oeyBuYW1lOiB2YWx1ZS52YWx1ZSB9KSk7XG4gICAgICBzZXRWYWx1ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwgW3ZhbHVlLCBkaXNwYXRjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlZ21lbnRcbiAgICAgIENvbXBvbmVudD17PEJ1dHRvbiBpY29uPVwicGx1c1wiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2N4KHN0eWxlcy5idXR0b24pfSBhcmlhLWxhYmVsPVwiQWRkIG5ldyBmdW5jdGlvblwiIC8+fVxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgIGlucHV0TWluV2lkdGg9ezE1MH1cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBidXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbiwgVG9vbHRpcCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEZ1bmN0aW9uRWRpdG9yQ29udHJvbHMsIEZ1bmN0aW9uRWRpdG9yQ29udHJvbHNQcm9wcyB9IGZyb20gJy4vRnVuY3Rpb25FZGl0b3JDb250cm9scyc7XG5pbXBvcnQgeyBGdW5jSW5zdGFuY2UgfSBmcm9tICcuLi9nZnVuYyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbnRlcmZhY2UgRnVuY3Rpb25FZGl0b3JQcm9wcyBleHRlbmRzIEZ1bmN0aW9uRWRpdG9yQ29udHJvbHNQcm9wcyB7XG4gIGZ1bmM6IEZ1bmNJbnN0YW5jZTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWNvbjogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgYCxcbiAgICBsYWJlbDogY3NzKHtcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZSwgLy8gdG8gbWF0Y2ggLmdmLWZvcm0tbGFiZWxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgfSksXG4gIH07XG59O1xuXG5jb25zdCBGdW5jdGlvbkVkaXRvcjogUmVhY3QuRkM8RnVuY3Rpb25FZGl0b3JQcm9wcz4gPSAoeyBvbk1vdmVMZWZ0LCBvbk1vdmVSaWdodCwgZnVuYywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICh7IHVwZGF0ZVBvcHBlclBvc2l0aW9uIH06IGFueSkgPT4gKFxuICAgIDxGdW5jdGlvbkVkaXRvckNvbnRyb2xzXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBmdW5jPXtmdW5jfVxuICAgICAgb25Nb3ZlTGVmdD17KCkgPT4ge1xuICAgICAgICBvbk1vdmVMZWZ0KGZ1bmMpO1xuICAgICAgICB1cGRhdGVQb3BwZXJQb3NpdGlvbigpO1xuICAgICAgfX1cbiAgICAgIG9uTW92ZVJpZ2h0PXsoKSA9PiB7XG4gICAgICAgIG9uTW92ZVJpZ2h0KGZ1bmMpO1xuICAgICAgICB1cGRhdGVQb3BwZXJQb3NpdGlvbigpO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtmdW5jLmRlZi51bmtub3duICYmIChcbiAgICAgICAgPFRvb2x0aXAgY29udGVudD17PFRvb2x0aXBDb250ZW50IC8+fSBwbGFjZW1lbnQ9XCJib3R0b21cIiBpbnRlcmFjdGl2ZT5cbiAgICAgICAgICA8SWNvbiBkYXRhLXRlc3RpZD1cIndhcm5pbmctaWNvblwiIG5hbWU9XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIHNpemU9XCJ4c1wiIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICl9XG4gICAgICA8VG9vbHRpcCBjb250ZW50PXtyZW5kZXJDb250ZW50fSBwbGFjZW1lbnQ9XCJ0b3BcIiBpbnRlcmFjdGl2ZT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PntmdW5jLmRlZi5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFRvb2x0aXBDb250ZW50ID0gUmVhY3QubWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4+XG4gICAgICBUaGlzIGZ1bmN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuIENoZWNrIHlvdXIgZnVuY3Rpb24gZm9yIHR5cG9zIGFuZHsnICd9XG4gICAgICA8YVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dyYXBoaXRlLnJlYWR0aGVkb2NzLmlvL2VuL2xhdGVzdC9mdW5jdGlvbnMuaHRtbFwiXG4gICAgICA+XG4gICAgICAgIHJlYWQgdGhlIGRvY3NcbiAgICAgIDwvYT57JyAnfVxuICAgICAgdG8gc2VlIHdoZXRoZXIgeW91IG5lZWQgdG8gdXBncmFkZSB5b3VyIGRhdGEgc291cmNl4oCZcyB2ZXJzaW9uIHRvIG1ha2UgdGhpcyBmdW5jdGlvbiBhdmFpbGFibGUuXG4gICAgPC9zcGFuPlxuICApO1xufSk7XG5Ub29sdGlwQ29udGVudC5kaXNwbGF5TmFtZSA9ICdGdW5jdGlvbkVkaXRvclRvb2x0aXBDb250ZW50JztcblxuZXhwb3J0IHsgRnVuY3Rpb25FZGl0b3IgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb24sIFRvb2x0aXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBGdW5jSW5zdGFuY2UgfSBmcm9tICcuLi9nZnVuYyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3Rpb25FZGl0b3JDb250cm9sc1Byb3BzIHtcbiAgb25Nb3ZlTGVmdDogKGZ1bmM6IEZ1bmNJbnN0YW5jZSkgPT4gdm9pZDtcbiAgb25Nb3ZlUmlnaHQ6IChmdW5jOiBGdW5jSW5zdGFuY2UpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlOiAoZnVuYzogRnVuY0luc3RhbmNlKSA9PiB2b2lkO1xufVxuXG5jb25zdCBGdW5jdGlvbkRlc2NyaXB0aW9uID0gUmVhY3QubGF6eShhc3luYyAoKSA9PiB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgeyBkZWZhdWx0OiByc3QyaHRtbCB9ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicnN0Mmh0bWxcIiAqLyAncnN0Mmh0bWwnKTtcbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0KHByb3BzOiB7IGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcbiAgICAgIHJldHVybiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcnN0Mmh0bWwocHJvcHMuZGVzY3JpcHRpb24gPz8gJycpIH19IC8+O1xuICAgIH0sXG4gIH07XG59KTtcblxuY29uc3QgRnVuY3Rpb25IZWxwQnV0dG9uID0gKHByb3BzOiB7IGRlc2NyaXB0aW9uPzogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfSkgPT4ge1xuICBpZiAocHJvcHMuZGVzY3JpcHRpb24pIHtcbiAgICBsZXQgdG9vbHRpcCA9IChcbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PHNwYW4+TG9hZGluZyBkZXNjcmlwdGlvbi4uLjwvc3Bhbj59PlxuICAgICAgICA8RnVuY3Rpb25EZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17cHJvcHMuZGVzY3JpcHRpb259IC8+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwIGNvbnRlbnQ9e3Rvb2x0aXB9IHBsYWNlbWVudD17J2JvdHRvbS1lbmQnfT5cbiAgICAgICAgPEljb24gY2xhc3NOYW1lPXtwcm9wcy5kZXNjcmlwdGlvbiA/IHVuZGVmaW5lZCA6ICdwb2ludGVyJ30gbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiIC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEljb25cbiAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXJcIlxuICAgICAgbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICAgICdodHRwOi8vZ3JhcGhpdGUucmVhZHRoZWRvY3Mub3JnL2VuL2xhdGVzdC9mdW5jdGlvbnMuaHRtbCNncmFwaGl0ZS5yZW5kZXIuZnVuY3Rpb25zLicgKyBwcm9wcy5uYW1lLFxuICAgICAgICAgICdfYmxhbmsnXG4gICAgICAgICk7XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRnVuY3Rpb25FZGl0b3JDb250cm9scyA9IChcbiAgcHJvcHM6IEZ1bmN0aW9uRWRpdG9yQ29udHJvbHNQcm9wcyAmIHtcbiAgICBmdW5jOiBGdW5jSW5zdGFuY2U7XG4gIH1cbikgPT4ge1xuICBjb25zdCB7IGZ1bmMsIG9uTW92ZUxlZnQsIG9uTW92ZVJpZ2h0LCBvblJlbW92ZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB3aWR0aDogJzYwcHgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SWNvbiBuYW1lPVwiYXJyb3ctbGVmdFwiIG9uQ2xpY2s9eygpID0+IG9uTW92ZUxlZnQoZnVuYyl9IC8+XG4gICAgICA8RnVuY3Rpb25IZWxwQnV0dG9uIG5hbWU9e2Z1bmMuZGVmLm5hbWV9IGRlc2NyaXB0aW9uPXtmdW5jLmRlZi5kZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxJY29uIG5hbWU9XCJ0aW1lc1wiIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlKGZ1bmMpfSAvPlxuICAgICAgPEljb24gbmFtZT1cImFycm93LXJpZ2h0XCIgb25DbGljaz17KCkgPT4gb25Nb3ZlUmlnaHQoZnVuYyl9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlZ21lbnQsIFNlZ21lbnRJbnB1dCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuZXhwb3J0IHR5cGUgRWRpdGFibGVQYXJhbSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBvcHRpb25hbDogYm9vbGVhbjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIG9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pjtcbn07XG5cbnR5cGUgRmllbGRFZGl0b3JQcm9wcyA9IHtcbiAgZWRpdGFibGVQYXJhbTogRWRpdGFibGVQYXJhbTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkV4cGFuZGVkQ2hhbmdlOiAoZXhwYW5kZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGF1dG9mb2N1czogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogUmVuZGVyIGEgZnVuY3Rpb24gcGFyYW1ldGVyIHdpdGggYSBzZWdtZW50IGRyb3Bkb3duIGZvciBtdWx0aXBsZSBvcHRpb25zIG9yIHNpbXBsZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEZ1bmN0aW9uUGFyYW1FZGl0b3IoeyBlZGl0YWJsZVBhcmFtLCBvbkNoYW5nZSwgb25FeHBhbmRlZENoYW5nZSwgYXV0b2ZvY3VzIH06IEZpZWxkRWRpdG9yUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmIChlZGl0YWJsZVBhcmFtLm9wdGlvbnM/Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlZ21lbnRcbiAgICAgICAgYXV0b2ZvY3VzPXthdXRvZm9jdXN9XG4gICAgICAgIHZhbHVlPXtlZGl0YWJsZVBhcmFtLnZhbHVlfVxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPXtlZGl0YWJsZVBhcmFtLm5hbWV9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlZ21lbnR9XG4gICAgICAgIG9wdGlvbnM9e2VkaXRhYmxlUGFyYW0ub3B0aW9uc31cbiAgICAgICAgcGxhY2Vob2xkZXI9eycgKycgKyBlZGl0YWJsZVBhcmFtLm5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS52YWx1ZSB8fCAnJyk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRXhwYW5kZWRDaGFuZ2U9e29uRXhwYW5kZWRDaGFuZ2V9XG4gICAgICAgIGlucHV0TWluV2lkdGg9ezE1MH1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgYWxsb3dFbXB0eVZhbHVlPXt0cnVlfVxuICAgICAgPjwvU2VnbWVudD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VnbWVudElucHV0XG4gICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgdmFsdWU9e2VkaXRhYmxlUGFyYW0udmFsdWUgfHwgJyd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXsnICsnICsgZWRpdGFibGVQYXJhbS5uYW1lfVxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPXtlZGl0YWJsZVBhcmFtLm5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25FeHBhbmRlZENoYW5nZT17b25FeHBhbmRlZENoYW5nZX1cbiAgICAgICAgLy8gaW5wdXQgc3R5bGVcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMjVweCcsIHBhZGRpbmdUb3A6ICcycHgnLCBtYXJnaW5Ub3A6ICcycHgnLCBwYWRkaW5nTGVmdDogJzRweCcsIG1pbldpZHRoOiAnMTAwcHgnIH19XG4gICAgICA+PC9TZWdtZW50SW5wdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHNlZ21lbnQ6IGNzcyh7XG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0pLFxuICBpbnB1dDogY3NzYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGlucHV0IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9LFxuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRnVuY0RlZnMsIEZ1bmNJbnN0YW5jZSB9IGZyb20gJy4uL2dmdW5jJztcbmltcG9ydCB7IEdyYXBoaXRlRnVuY3Rpb25FZGl0b3IgfSBmcm9tICcuL0dyYXBoaXRlRnVuY3Rpb25FZGl0b3InO1xuaW1wb3J0IHsgQWRkR3JhcGhpdGVGdW5jdGlvbiB9IGZyb20gJy4vQWRkR3JhcGhpdGVGdW5jdGlvbic7XG5pbXBvcnQgeyBTZWdtZW50U2VjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZnVuY3Rpb25zOiBGdW5jSW5zdGFuY2VbXTtcbiAgZnVuY0RlZnM6IEZ1bmNEZWZzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEZ1bmN0aW9uc1NlY3Rpb24oeyBmdW5jdGlvbnMgPSBbXSwgZnVuY0RlZnMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2VnbWVudFNlY3Rpb24gbGFiZWw9XCJGdW5jdGlvbnNcIiBmaWxsPXt0cnVlfT5cbiAgICAgIHtmdW5jdGlvbnMubWFwKChmdW5jOiBGdW5jSW5zdGFuY2UsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuICFmdW5jLmhpZGRlbiAmJiA8R3JhcGhpdGVGdW5jdGlvbkVkaXRvciBrZXk9e2luZGV4fSBmdW5jPXtmdW5jfSAvPjtcbiAgICAgIH0pfVxuICAgICAgPEFkZEdyYXBoaXRlRnVuY3Rpb24gZnVuY0RlZnM9e2Z1bmNEZWZzfSAvPlxuICAgIDwvU2VnbWVudFNlY3Rpb24+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIElubGluZUxhYmVsLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBGdW5jSW5zdGFuY2UgfSBmcm9tICcuLi9nZnVuYyc7XG5pbXBvcnQgeyBFZGl0YWJsZVBhcmFtLCBGdW5jdGlvblBhcmFtRWRpdG9yIH0gZnJvbSAnLi9GdW5jdGlvblBhcmFtRWRpdG9yJztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEZ1bmN0aW9uRWRpdG9yIH0gZnJvbSAnLi9GdW5jdGlvbkVkaXRvcic7XG5pbXBvcnQgeyBtYXBGdW5jSW5zdGFuY2VUb1BhcmFtcyB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJy4uL3N0YXRlL2NvbnRleHQnO1xuXG5leHBvcnQgdHlwZSBGdW5jdGlvbkVkaXRvclByb3BzID0ge1xuICBmdW5jOiBGdW5jSW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIEFsbG93cyBlZGl0aW5nIGZ1bmN0aW9uIHBhcmFtcyBhbmQgcmVtb3ZpbmcvbW92aW5nIGEgZnVuY3Rpb24gKG5vdGU6IGVkaXRpbmcgZnVuY3Rpb24gbmFtZSBpcyBub3Qgc3VwcG9ydGVkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gR3JhcGhpdGVGdW5jdGlvbkVkaXRvcih7IGZ1bmMgfTogRnVuY3Rpb25FZGl0b3JQcm9wcykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICAvLyBrZWVwIHRyYWNrIG9mIG1vdXNlIG92ZXIgYW5kIGlzRXhwYW5kZWQgc3RhdGUgdG8gZGlzcGxheSBidXR0b25zIGZvciBhZGRpbmcgb3B0aW9uYWwvbXVsdGlwbGUgcGFyYW1zXG4gIC8vIG9ubHkgd2hlbiB0aGUgdXNlciBtb3VzZSBvdmVyIG92ZXIgdGhlIGZ1bmN0aW9uIGVkaXRvciBPUiBhbnkgcGFyYW0gZWRpdG9yIGlzIGV4cGFuZGVkLlxuICBjb25zdCBbbW91c2VPdmVyLCBzZXRJc01vdXNlT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IHBhcmFtcyA9IG1hcEZ1bmNJbnN0YW5jZVRvUGFyYW1zKGZ1bmMpO1xuICBwYXJhbXMgPSBwYXJhbXMuZmlsdGVyKChwOiBFZGl0YWJsZVBhcmFtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgLy8gZnVuYy5hZGRlZCBpcyBzZXQgZm9yIG5ld2x5IGFkZGVkIGZ1bmN0aW9ucyAtIHNlZSBhdXRvZm9jdXMgYmVsb3dcbiAgICByZXR1cm4gKGluZGV4IDwgZnVuYy5kZWYucGFyYW1zLmxlbmd0aCAmJiAhcC5vcHRpb25hbCkgfHwgZnVuYy5hZGRlZCB8fCBwLnZhbHVlIHx8IGV4cGFuZGVkIHx8IG1vdXNlT3ZlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250YWluZXIsIHsgW3N0eWxlcy5lcnJvcl06IGZ1bmMuZGVmLnVua25vd24gfSl9XG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SXNNb3VzZU92ZXIodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzTW91c2VPdmVyKGZhbHNlKX1cbiAgICA+XG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIHNwYWNpbmc9XCJub25lXCI+XG4gICAgICAgIDxGdW5jdGlvbkVkaXRvclxuICAgICAgICAgIGZ1bmM9e2Z1bmN9XG4gICAgICAgICAgb25Nb3ZlTGVmdD17KCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5tb3ZlRnVuY3Rpb24oeyBmdW5jLCBvZmZzZXQ6IC0xIH0pKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW92ZVJpZ2h0PXsoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm1vdmVGdW5jdGlvbih7IGZ1bmMsIG9mZnNldDogMSB9KSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5yZW1vdmVGdW5jdGlvbih7IGZ1bmMgfSkpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxJbmxpbmVMYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+KDwvSW5saW5lTGFiZWw+XG4gICAgICAgIHtwYXJhbXMubWFwKChlZGl0YWJsZVBhcmFtOiBFZGl0YWJsZVBhcmFtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPEZ1bmN0aW9uUGFyYW1FZGl0b3JcbiAgICAgICAgICAgICAgICBhdXRvZm9jdXM9e2luZGV4ID09PSAwICYmIGZ1bmMuYWRkZWR9XG4gICAgICAgICAgICAgICAgZWRpdGFibGVQYXJhbT17ZWRpdGFibGVQYXJhbX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09ICcnIHx8IGVkaXRhYmxlUGFyYW0ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVGdW5jdGlvblBhcmFtKHsgZnVuYywgaW5kZXgsIHZhbHVlIH0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgc2V0SXNNb3VzZU92ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZT17c2V0SXNFeHBhbmRlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2luZGV4ICE9PSBwYXJhbXMubGVuZ3RoIC0gMSA/ICcsJyA6ICcnfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPElubGluZUxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT4pPC9JbmxpbmVMYWJlbD5cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgcGFkZGluZzogYDAgJHt0aGVtZS5zcGFjaW5nKDEpfWAsXG4gICAgaGVpZ2h0OiBgJHt0aGVtZS52MS5zcGFjaW5nLmZvcm1JbnB1dEhlaWdodH1weGAsXG4gIH0pLFxuICBlcnJvcjogY3NzYFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmVycm9yLm1haW59O1xuICBgLFxuICBsYWJlbDogY3NzKHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgfSksXG4gIGJ1dHRvbjogY3NzKHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhcGhpdGVRdWVyeUVkaXRvckNvbnRleHQsIEdyYXBoaXRlUXVlcnlFZGl0b3JQcm9wcywgdXNlRGlzcGF0Y2gsIHVzZUdyYXBoaXRlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9jb250ZXh0JztcbmltcG9ydCB7IEdyYXBoaXRlVGV4dEVkaXRvciB9IGZyb20gJy4vR3JhcGhpdGVUZXh0RWRpdG9yJztcbmltcG9ydCB7IFNlcmllc1NlY3Rpb24gfSBmcm9tICcuL1Nlcmllc1NlY3Rpb24nO1xuaW1wb3J0IHsgRnVuY3Rpb25zU2VjdGlvbiB9IGZyb20gJy4vRnVuY3Rpb25zU2VjdGlvbic7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gR3JhcGhpdGVRdWVyeUVkaXRvcih7XG4gIGRhdGFzb3VyY2UsXG4gIG9uUnVuUXVlcnksXG4gIG9uQ2hhbmdlLFxuICBxdWVyeSxcbiAgcmFuZ2UsXG4gIHF1ZXJpZXMsXG59OiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JhcGhpdGVRdWVyeUVkaXRvckNvbnRleHRcbiAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgcXVlcmllcz17cXVlcmllc31cbiAgICAgIHJhbmdlPXtyYW5nZX1cbiAgICA+XG4gICAgICA8R3JhcGhpdGVRdWVyeUVkaXRvckNvbnRlbnQgLz5cbiAgICA8L0dyYXBoaXRlUXVlcnlFZGl0b3JDb250ZXh0PlxuICApO1xufVxuXG5mdW5jdGlvbiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yQ29udGVudCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzdGF0ZSA9IHVzZUdyYXBoaXRlU3RhdGUoKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aXN1YWxFZGl0b3J9PlxuICAgICAgICB7c3RhdGUudGFyZ2V0Py50ZXh0RWRpdG9yICYmIDxHcmFwaGl0ZVRleHRFZGl0b3IgcmF3UXVlcnk9e3N0YXRlLnRhcmdldC50YXJnZXR9IC8+fVxuICAgICAgICB7IXN0YXRlLnRhcmdldD8udGV4dEVkaXRvciAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZXJpZXNTZWN0aW9uIHN0YXRlPXtzdGF0ZX0gLz5cbiAgICAgICAgICAgIDxGdW5jdGlvbnNTZWN0aW9uIGZ1bmN0aW9ucz17c3RhdGUucXVlcnlNb2RlbD8uZnVuY3Rpb25zfSBmdW5jRGVmcz17c3RhdGUuZnVuY0RlZnMhfSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZUJ1dHRvbn1cbiAgICAgICAgaWNvbj1cInBlblwiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIGVkaXRvciBtb2RlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMudG9nZ2xlRWRpdG9yTW9kZSgpKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBgLFxuICAgIHZpc3VhbEVkaXRvcjogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgIGAsXG4gICAgdG9nZ2xlQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBRdWVyeUZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi9zdGF0ZS9jb250ZXh0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgcmF3UXVlcnk6IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBHcmFwaGl0ZVRleHRFZGl0b3IoeyByYXdRdWVyeSB9OiBQcm9wcykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgdXBkYXRlUXVlcnkgPSB1c2VDYWxsYmFjayhcbiAgICAocXVlcnk6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVRdWVyeSh7IHF1ZXJ5IH0pKTtcbiAgICB9LFxuICAgIFtkaXNwYXRjaF1cbiAgKTtcblxuICBjb25zdCBydW5RdWVyeSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChhY3Rpb25zLnJ1blF1ZXJ5KCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUZpZWxkXG4gICAgICBxdWVyeT17cmF3UXVlcnl9XG4gICAgICBvbkNoYW5nZT17dXBkYXRlUXVlcnl9XG4gICAgICBvbkJsdXI9e3J1blF1ZXJ5fVxuICAgICAgb25SdW5RdWVyeT17cnVuUXVlcnl9XG4gICAgICBwbGFjZWhvbGRlcj17J0VudGVyIGEgR3JhcGhpdGUgcXVlcnkgKHJ1biB3aXRoIFNoaWZ0K0VudGVyKSd9XG4gICAgICBwb3J0YWxPcmlnaW49XCJncmFwaGl0ZVwiXG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlZ21lbnRBc3luYyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEdyYXBoaXRlU2VnbWVudCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QWx0U2VnbWVudHNTZWxlY3RhYmxlcyB9IGZyb20gJy4uL3N0YXRlL3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJy4uL3N0YXRlL2NvbnRleHQnO1xuXG50eXBlIFByb3BzID0ge1xuICBzZWdtZW50OiBHcmFwaGl0ZVNlZ21lbnQ7XG4gIG1ldHJpY0luZGV4OiBudW1iZXI7XG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGU7XG59O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgbWV0cmljIG5vZGUgaW4gdGhlIG1ldHJpYyBwYXRoIGF0IHRoZSBnaXZlbiBpbmRleC4gQWxsb3dzIHRvIGNoYW5nZSB0aGUgbWV0cmljIG5hbWUgdG8gb25lIG9mIHRoZVxuICogcHJvdmlkZWQgb3B0aW9ucyBvciBhIGN1c3RvbSB2YWx1ZS5cbiAqXG4gKiBPcHRpb25zIGZvciB0YWcgbmFtZXMgYW5kIG1ldHJpYyBuYW1lcyBhcmUgcmVsb2FkZWQgd2hpbGUgdXNlciBpcyB0eXBpbmcgd2l0aCBiYWNrZW5kIHRha2luZyBjYXJlIG9mIGF1dG8tY29tcGxldGVcbiAqIChhdXRvLWNvbXBsZXRlIGNhbm5vdCBiZSBpbXBsZW1lbnRlZCBpbiBmcm9udC1lbmQgYmVjYXVzZSBiYWNrZW5kIHJldHVybnMgb25seSBsaW1pdGVkIG51bWJlciBvZiBlbnRyaWVzKVxuICpcbiAqIGdldEFsdFNlZ21lbnRzU2VsZWN0YWJsZXMoKSBhbHNvIHJldHVybnMgbGlzdCBvZiB0YWdzIGZvciBzZWdtZW50IHdpdGggaW5kZXg9MC4gT25jZSBhIHRhZyBpcyBzZWxlY3RlZCB0aGUgZWRpdG9yXG4gKiBlbnRlcnMgdGFnLWFkZGluZyBtb2RlIChzZWUgU2VyaWVzU2VjdGlvbiBhbmQgR3JhcGhpdGVRdWVyeU1vZGVsLnNlcmllc0J5VGFnVXNlZCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNZXRyaWNTZWdtZW50KHsgbWV0cmljSW5kZXgsIHNlZ21lbnQsIHN0YXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbG9hZE9wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgcmV0dXJuIGdldEFsdFNlZ21lbnRzU2VsZWN0YWJsZXMoc3RhdGUsIG1ldHJpY0luZGV4LCB2YWx1ZSB8fCAnJyk7XG4gICAgfSxcbiAgICBbc3RhdGUsIG1ldHJpY0luZGV4XVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRMb2FkT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2UobG9hZE9wdGlvbnMsIDIwMCwgeyBsZWFkaW5nOiB0cnVlIH0pLCBbbG9hZE9wdGlvbnNdKTtcblxuICBjb25zdCBvblNlZ21lbnRDaGFuZ2VkID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlbGVjdGFibGVWYWx1ZTogU2VsZWN0YWJsZVZhbHVlPEdyYXBoaXRlU2VnbWVudCB8IHN0cmluZz4pID0+IHtcbiAgICAgIC8vIHNlbGVjdGFibGVWYWx1ZS52YWx1ZSBpcyBhbHdheXMgZGVmaW5lZCBiZWNhdXNlIGVtcHR5VmFsdWVzIGFyZSBub3QgYWxsb3dlZCBpbiBTZWdtZW50QXN5bmMgYnkgZGVmYXVsdFxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5zZWdtZW50VmFsdWVDaGFuZ2VkKHsgc2VnbWVudDogc2VsZWN0YWJsZVZhbHVlLnZhbHVlISwgaW5kZXg6IG1ldHJpY0luZGV4IH0pKTtcbiAgICB9LFxuICAgIFtkaXNwYXRjaCwgbWV0cmljSW5kZXhdXG4gICk7XG5cbiAgLy8gc2VnbWVudFZhbHVlQ2hhbmdlZCBhY3Rpb24gd2lsbCBkZXN0cm95IFNlZ21lbnRBc3luYyBpbW1lZGlhdGVseSBpZiBhIHRhZyBpcyBzZWxlY3RlZC4gVG8gZ2l2ZSB0aW1lXG4gIC8vIGZvciB0aGUgY2xlYW4gdXAgdGhlIGFjdGlvbiBpcyBkZWJvdW5jZWQuXG4gIGNvbnN0IG9uU2VnbWVudENoYW5nZWREZWJvdW5jZWQgPSB1c2VNZW1vKCgpID0+IGRlYm91bmNlKG9uU2VnbWVudENoYW5nZWQsIDEwMCksIFtvblNlZ21lbnRDaGFuZ2VkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VnbWVudEFzeW5jPEdyYXBoaXRlU2VnbWVudCB8IHN0cmluZz5cbiAgICAgIHZhbHVlPXtzZWdtZW50LnZhbHVlfVxuICAgICAgaW5wdXRNaW5XaWR0aD17MTUwfVxuICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRMb2FkT3B0aW9uc31cbiAgICAgIHJlbG9hZE9wdGlvbnNPbkNoYW5nZT17dHJ1ZX1cbiAgICAgIG9uQ2hhbmdlPXtvblNlZ21lbnRDaGFuZ2VkRGVib3VuY2VkfVxuICAgIC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWV0YWRhdGFJbnNwZWN0b3JQcm9wcywgcmFuZ2VVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBHcmFwaGl0ZURhdGFzb3VyY2UgfSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IEdyYXBoaXRlUXVlcnksIEdyYXBoaXRlT3B0aW9ucywgTWV0cmljVGFua1Nlcmllc01ldGEgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBwYXJzZVNjaGVtYVJldGVudGlvbnMsIGdldFJvbGx1cE5vdGljZSwgZ2V0UnVudGltZUNvbnNvbGlkYXRpb25Ob3RpY2UgfSBmcm9tICcuLi9tZXRhJztcbmltcG9ydCB7IHN0eWxlc0ZhY3RvcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE1ldGFkYXRhSW5zcGVjdG9yUHJvcHM8R3JhcGhpdGVEYXRhc291cmNlLCBHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZU9wdGlvbnM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE1ldHJpY1RhbmtNZXRhSW5zcGVjdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgcmVuZGVyTWV0YShtZXRhOiBNZXRyaWNUYW5rU2VyaWVzTWV0YSwga2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoKTtcbiAgICBjb25zdCBidWNrZXRzID0gcGFyc2VTY2hlbWFSZXRlbnRpb25zKG1ldGFbJ3NjaGVtYS1yZXRlbnRpb25zJ10pO1xuICAgIGNvbnN0IHJvbGx1cE5vdGljZSA9IGdldFJvbGx1cE5vdGljZShbbWV0YV0pO1xuICAgIGNvbnN0IHJ1bnRpbWVOb3RpY2UgPSBnZXRSdW50aW1lQ29uc29saWRhdGlvbk5vdGljZShbbWV0YV0pO1xuICAgIGNvbnN0IG5vcm1GdW5jID0gKG1ldGFbJ2NvbnNvbGlkYXRvci1ub3JtZmV0Y2gnXSA/PyAnJykucmVwbGFjZSgnQ29uc29saWRhdG9yJywgJycpO1xuXG4gICAgY29uc3QgdG90YWxTZWNvbmRzID0gYnVja2V0cy5yZWR1Y2UoXG4gICAgICAoYWNjLCBidWNrZXQpID0+IGFjYyArIChidWNrZXQucmV0ZW50aW9uID8gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKGJ1Y2tldC5yZXRlbnRpb24pIDogMCksXG4gICAgICAwXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1ldGFJdGVtfSBrZXk9e2tleX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWV0YUl0ZW1IZWFkZXJ9PlxuICAgICAgICAgIFNjaGVtYToge21ldGFbJ3NjaGVtYS1uYW1lJ119XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBtdXRlZFwiPlNlcmllcyBjb3VudDoge21ldGEuY291bnR9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1ldGFJdGVtQm9keX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGVwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcEhlYWRpbmd9PlN0ZXAgMTogRmV0Y2g8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcERlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgRmlyc3QgZGF0YSBpcyBmZXRjaGVkLCBlaXRoZXIgZnJvbSByYXcgZGF0YSBhcmNoaXZlIG9yIGEgcm9sbHVwIGFyY2hpdmVcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7cm9sbHVwTm90aWNlICYmIDxwPntyb2xsdXBOb3RpY2UudGV4dH08L3A+fVxuICAgICAgICAgICAgeyFyb2xsdXBOb3RpY2UgJiYgPHA+Tm8gcm9sbHVwIGFyY2hpdmUgd2FzIHVzZWQ8L3A+fVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7YnVja2V0cy5tYXAoKGJ1Y2tldCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBidWNrZXRMZW5ndGggPSBidWNrZXQucmV0ZW50aW9uID8gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKGJ1Y2tldC5yZXRlbnRpb24pIDogMDtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGhQZXJjZW50ID0gKGJ1Y2tldExlbmd0aCAvIHRvdGFsU2Vjb25kcykgKiAxMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpbmRleCA9PT0gbWV0YVsnYXJjaGl2ZS1yZWFkJ107XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2J1Y2tldC5yZXRlbnRpb259IGNsYXNzTmFtZT17c3R5bGVzLmJ1Y2tldH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVja2V0SW50ZXJ2YWx9PntidWNrZXQuaW50ZXJ2YWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5idWNrZXRSZXRlbnRpb24sIHsgW3N0eWxlcy5idWNrZXRSZXRlbnRpb25BY3RpdmVdOiBpc0FjdGl2ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogbGVuZ3RoUGVyY2VudCB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhHcm93OiAxMDAgLSBsZW5ndGhQZXJjZW50IH19PntidWNrZXQucmV0ZW50aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0ZXBIZWFkaW5nfT5TdGVwIDI6IE5vcm1hbGl6YXRpb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcERlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgTm9ybWFsaXphdGlvbiBoYXBwZW5zIHdoZW4gc2VyaWVzIHdpdGggZGlmZmVyZW50IGludGVydmFscyBiZXR3ZWVuIHBvaW50cyBhcmUgY29tYmluZWQuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge21ldGFbJ2FnZ251bS1ub3JtJ10gPiAxICYmIDxwPk5vcm1hbGl6YXRpb24gZGlkIG9jY3VyIHVzaW5nIHtub3JtRnVuY308L3A+fVxuICAgICAgICAgICAge21ldGFbJ2FnZ251bS1ub3JtJ10gPT09IDEgJiYgPHA+Tm8gbm9ybWFsaXphdGlvbiB3YXMgbmVlZGVkPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0ZXBIZWFkaW5nfT5TdGVwIDM6IFJ1bnRpbWUgY29uc29saWRhdGlvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGVwRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICBJZiB0aGVyZSBhcmUgdG9vIG1hbnkgZGF0YSBwb2ludHMgYXQgdGhpcyBwb2ludCBNZXRyaWN0YW5rIHdpbGwgY29uc29saWRhdGUgdGhlbSBkb3duIHRvIGJlbG93IG1heCBkYXRhXG4gICAgICAgICAgICAgIHBvaW50cyAoc2V0IGluIHF1ZXJpZXMgdGFiKS5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7cnVudGltZU5vdGljZSAmJiA8cD57cnVudGltZU5vdGljZS50ZXh0fTwvcD59XG4gICAgICAgICAgICB7IXJ1bnRpbWVOb3RpY2UgJiYgPHA+Tm8gcnVudGltZSBjb25zb2xpZGF0aW9uPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIGF3YXkgdG8gZGVkdXBlIHRoZW1cbiAgICBjb25zdCBzZXJpZXNNZXRhczogUmVjb3JkPHN0cmluZywgTWV0cmljVGFua1Nlcmllc01ldGE+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHNlcmllcyBvZiBkYXRhKSB7XG4gICAgICBpZiAoc2VyaWVzLm1ldGEgJiYgc2VyaWVzLm1ldGEuY3VzdG9tKSB7XG4gICAgICAgIGZvciAoY29uc3QgbWV0YUl0ZW0gb2Ygc2VyaWVzLm1ldGEuY3VzdG9tLnNlcmllc01ldGFMaXN0IGFzIE1ldHJpY1RhbmtTZXJpZXNNZXRhW10pIHtcbiAgICAgICAgICAvLyBrZXkgaXMgdG8gZGVkdXBlIGFzIG1hbnkgc2VyaWVzIHdpbGwgaGF2ZSBpZGVudGl0aWNhbCBtZXRhXG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7SlNPTi5zdHJpbmdpZnkobWV0YUl0ZW0pfWA7XG5cbiAgICAgICAgICBpZiAoc2VyaWVzTWV0YXNba2V5XSkge1xuICAgICAgICAgICAgc2VyaWVzTWV0YXNba2V5XS5jb3VudCArPSBtZXRhSXRlbS5jb3VudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VyaWVzTWV0YXNba2V5XSA9IG1ldGFJdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhzZXJpZXNNZXRhcykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gPGRpdj5ObyByZXNwb25zZSBtZXRhIGRhdGE8L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5NZXRyaWN0YW5rIExpbmVhZ2U8L2gyPlxuICAgICAgICB7T2JqZWN0LmtleXMoc2VyaWVzTWV0YXMpLm1hcCgoa2V5KSA9PiB0aGlzLnJlbmRlck1ldGEoc2VyaWVzTWV0YXNba2V5XSwga2V5KSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKCkgPT4ge1xuICBjb25zdCB7IHRoZW1lIH0gPSBjb25maWc7XG4gIGNvbnN0IGJvcmRlckNvbG9yID0gdGhlbWUuaXNEYXJrID8gdGhlbWUucGFsZXR0ZS5ncmF5MjUgOiB0aGVtZS5wYWxldHRlLmdyYXk4NTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IHRoZW1lLmlzRGFyayA/IHRoZW1lLnBhbGV0dGUuZGFyazEgOiB0aGVtZS5wYWxldHRlLndoaXRlO1xuICBjb25zdCBoZWFkZXJCZyA9IHRoZW1lLmlzRGFyayA/IHRoZW1lLnBhbGV0dGUuZ3JheTE1IDogdGhlbWUucGFsZXR0ZS5ncmF5ODU7XG5cbiAgcmV0dXJuIHtcbiAgICBtZXRhSXRlbTogY3NzYFxuICAgICAgYmFja2dyb3VuZDogJHtiYWNrZ3JvdW5kfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIG1ldGFJdGVtSGVhZGVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiAke2hlYWRlckJnfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZy54c30gJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUubWR9O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBgLFxuICAgIG1ldGFJdGVtQm9keTogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIHN0ZXBIZWFkaW5nOiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLm1kfTtcbiAgICBgLFxuICAgIHN0ZXBEZXNjcmlwdGlvbjogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFdlYWt9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIHN0ZXA6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5sZ307XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgYCxcbiAgICBidWNrZXQ6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXIucmFkaXVzLm1kfTtcbiAgICBgLFxuICAgIGJ1Y2tldEludGVydmFsOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICBgLFxuICAgIGJ1Y2tldFJldGVudGlvbjogY3NzYFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICR7dGhlbWUucGFsZXR0ZS5ibHVlODV9LCAke3RoZW1lLnBhbGV0dGUuYmx1ZTk1fSk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHt0aGVtZS5wYWxldHRlLndoaXRlfTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyLnJhZGl1cy5tZH07XG4gICAgYCxcbiAgICBidWNrZXRSZXRlbnRpb25BY3RpdmU6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAke3RoZW1lLnBhbGV0dGUuZ3JlZW5CYXNlfSwgJHt0aGVtZS5wYWxldHRlLmdyZWVuU2hhZGV9KTtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JhcGhpdGVTZWdtZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RvcmUnO1xuaW1wb3J0IHsgTWV0cmljU2VnbWVudCB9IGZyb20gJy4vTWV0cmljU2VnbWVudCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXTtcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBNZXRyaWNzU2VjdGlvbih7IHNlZ21lbnRzID0gW10sIHN0YXRlIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzZWdtZW50cy5tYXAoKHNlZ21lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8TWV0cmljU2VnbWVudCBzZWdtZW50PXtzZWdtZW50fSBtZXRyaWNJbmRleD17aW5kZXh9IGtleT17aW5kZXh9IHN0YXRlPXtzdGF0ZX0gLz47XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vc3RhdGUvY29udGV4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5QnV0dG9uKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWN0aW9ucy51bnBhdXNlKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgcmV0dXJuIDxCdXR0b24gaWNvbj1cInBsYXlcIiBvbkNsaWNrPXtvbkNsaWNrfSB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGFyaWEtbGFiZWw9XCJVbnBhdXNlIHF1ZXJ5XCIgLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RvcmUnO1xuaW1wb3J0IHsgVGFnc1NlY3Rpb24gfSBmcm9tICcuL1RhZ3NTZWN0aW9uJztcbmltcG9ydCB7IE1ldHJpY3NTZWN0aW9uIH0gZnJvbSAnLi9NZXRyaWNzU2VjdGlvbic7XG5pbXBvcnQgeyBTZWdtZW50U2VjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxudHlwZSBQcm9wcyA9IHtcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXJpZXNTZWN0aW9uKHsgc3RhdGUgfTogUHJvcHMpIHtcbiAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBzdGF0ZS5xdWVyeU1vZGVsPy5zZXJpZXNCeVRhZ1VzZWQgPyAoXG4gICAgPFRhZ3NTZWN0aW9uIHRhZ3M9e3N0YXRlLnF1ZXJ5TW9kZWw/LnRhZ3N9IHN0YXRlPXtzdGF0ZX0gLz5cbiAgKSA6IChcbiAgICA8TWV0cmljc1NlY3Rpb24gc2VnbWVudHM9e3N0YXRlLnNlZ21lbnRzfSBzdGF0ZT17c3RhdGV9IC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VnbWVudFNlY3Rpb24gbGFiZWw9XCJTZXJpZXNcIiBmaWxsPXt0cnVlfT5cbiAgICAgIHtzZWN0aW9uQ29udGVudH1cbiAgICA8L1NlZ21lbnRTZWN0aW9uPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VnbWVudCwgU2VnbWVudEFzeW5jIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgR3JhcGhpdGVUYWcsIEdyYXBoaXRlVGFnT3BlcmF0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUYWdPcGVyYXRvcnNTZWxlY3RhYmxlcywgZ2V0VGFnc1NlbGVjdGFibGVzLCBnZXRUYWdWYWx1ZXNTZWxlY3RhYmxlcyB9IGZyb20gJy4uL3N0YXRlL3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJy4uL3N0YXRlL2NvbnRleHQnO1xuXG50eXBlIFByb3BzID0ge1xuICB0YWc6IEdyYXBoaXRlVGFnO1xuICB0YWdJbmRleDogbnVtYmVyO1xuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlO1xufTtcblxuLyoqXG4gKiBFZGl0b3IgZm9yIGEgdGFnIGF0IGdpdmVuIGluZGV4LiBBbGxvd3MgY2hhbmdpbmcgdGhlIG5hbWUgb2YgdGhlIHRhZywgb3BlcmF0b3Igb3IgdmFsdWUuIFRhZyBuYW1lcyBhcmUgcHJvdmlkZWQgd2l0aFxuICogZ2V0VGFnc1NlbGVjdGFibGVzIGFuZCBjb250YWluIG9ubHkgdmFsaWQgdGFncyAoaXQgbWF5IGRlcGVuZCBvbiBjdXJyZW50bHkgdXNlZCB0YWdzKS4gVGhlIGRyb3Bkb3duIGZvciB0YWcgbmFtZXMgaXNcbiAqIGFsc28gdXNlZCBmb3IgcmVtb3ZpbmcgdGFnICh3aXRoIGEgc3BlY2lhbCBcIi0tcmVtb3ZlIHRhZy0tXCIgb3B0aW9uIHByb3ZpZGVkIGJ5IGdldFRhZ3NTZWxlY3RhYmxlcykuXG4gKlxuICogT3B0aW9ucyBmb3IgdGFnIG5hbWVzIGFuZCB2YWx1ZXMgYXJlIHJlbG9hZGVkIHdoaWxlIHVzZXIgaXMgdHlwaW5nIHdpdGggYmFja2VuZCB0YWtpbmcgY2FyZSBvZiBhdXRvLWNvbXBsZXRlXG4gKiAoYXV0by1jb21wbGV0ZSBjYW5ub3QgYmUgaW1wbGVtZW50ZWQgaW4gZnJvbnQtZW5kIGJlY2F1c2UgYmFja2VuZCByZXR1cm5zIG9ubHkgbGltaXRlZCBudW1iZXIgb2YgZW50cmllcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRhZ0VkaXRvcih7IHRhZywgdGFnSW5kZXgsIHN0YXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZ2V0VGFnc09wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5wdXRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0VGFnc1NlbGVjdGFibGVzKHN0YXRlLCB0YWdJbmRleCwgaW5wdXRWYWx1ZSB8fCAnJyk7XG4gICAgfSxcbiAgICBbc3RhdGUsIHRhZ0luZGV4XVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRHZXRUYWdzT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2UoZ2V0VGFnc09wdGlvbnMsIDIwMCwgeyBsZWFkaW5nOiB0cnVlIH0pLCBbZ2V0VGFnc09wdGlvbnNdKTtcblxuICBjb25zdCBnZXRUYWdWYWx1ZU9wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5wdXRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0VGFnVmFsdWVzU2VsZWN0YWJsZXMoc3RhdGUsIHRhZywgdGFnSW5kZXgsIGlucHV0VmFsdWUgfHwgJycpO1xuICAgIH0sXG4gICAgW3N0YXRlLCB0YWdJbmRleCwgdGFnXVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRHZXRUYWdWYWx1ZU9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IGRlYm91bmNlKGdldFRhZ1ZhbHVlT3B0aW9ucywgMjAwLCB7IGxlYWRpbmc6IHRydWUgfSksXG4gICAgW2dldFRhZ1ZhbHVlT3B0aW9uc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VnbWVudEFzeW5jXG4gICAgICAgIGlucHV0TWluV2lkdGg9ezE1MH1cbiAgICAgICAgdmFsdWU9e3RhZy5rZXl9XG4gICAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRHZXRUYWdzT3B0aW9uc31cbiAgICAgICAgcmVsb2FkT3B0aW9uc09uQ2hhbmdlPXt0cnVlfVxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBhY3Rpb25zLnRhZ0NoYW5nZWQoe1xuICAgICAgICAgICAgICB0YWc6IHsgLi4udGFnLCBrZXk6IHZhbHVlLnZhbHVlISB9LFxuICAgICAgICAgICAgICBpbmRleDogdGFnSW5kZXgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAvPlxuICAgICAgPFNlZ21lbnQ8R3JhcGhpdGVUYWdPcGVyYXRvcj5cbiAgICAgICAgaW5wdXRNaW5XaWR0aD17NTB9XG4gICAgICAgIHZhbHVlPXt0YWcub3BlcmF0b3J9XG4gICAgICAgIG9wdGlvbnM9e2dldFRhZ09wZXJhdG9yc1NlbGVjdGFibGVzKCl9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIGFjdGlvbnMudGFnQ2hhbmdlZCh7XG4gICAgICAgICAgICAgIHRhZzogeyAuLi50YWcsIG9wZXJhdG9yOiB2YWx1ZS52YWx1ZSEgfSxcbiAgICAgICAgICAgICAgaW5kZXg6IHRhZ0luZGV4LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxTZWdtZW50QXN5bmNcbiAgICAgICAgaW5wdXRNaW5XaWR0aD17MTUwfVxuICAgICAgICB2YWx1ZT17dGFnLnZhbHVlfVxuICAgICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkR2V0VGFnVmFsdWVPcHRpb25zfVxuICAgICAgICByZWxvYWRPcHRpb25zT25DaGFuZ2U9e3RydWV9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIGFjdGlvbnMudGFnQ2hhbmdlZCh7XG4gICAgICAgICAgICAgIHRhZzogeyAuLi50YWcsIHZhbHVlOiB2YWx1ZS52YWx1ZSEgfSxcbiAgICAgICAgICAgICAgaW5kZXg6IHRhZ0luZGV4LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyYXBoaXRlU2VnbWVudCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEdyYXBoaXRlVGFnIH0gZnJvbSAnLi4vZ3JhcGhpdGVfcXVlcnknO1xuaW1wb3J0IHsgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RvcmUnO1xuaW1wb3J0IHsgZ2V0VGFnc0FzU2VnbWVudHNTZWxlY3RhYmxlcyB9IGZyb20gJy4uL3N0YXRlL3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnRBc3luYywgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBUYWdFZGl0b3IgfSBmcm9tICcuL1RhZ0VkaXRvcic7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJy4uL3N0YXRlL2NvbnRleHQnO1xuaW1wb3J0IHsgUGxheUJ1dHRvbiB9IGZyb20gJy4vUGxheUJ1dHRvbic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRhZ3M6IEdyYXBoaXRlVGFnW107XG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYWxsIHRhZ3MgYW5kIGEgYnV0dG9uIGFsbG93aW5nIHRvIGFkZCBtb3JlIHRhZ3MuXG4gKlxuICogT3B0aW9ucyBmb3IgdGFnIG5hbWVzIGFyZSByZWxvYWRlZCB3aGlsZSB1c2VyIGlzIHR5cGluZyB3aXRoIGJhY2tlbmQgdGFraW5nIGNhcmUgb2YgYXV0by1jb21wbGV0ZVxuICogKGF1dG8tY29tcGxldGUgY2Fubm90IGJlIGltcGxlbWVudGVkIGluIGZyb250LWVuZCBiZWNhdXNlIGJhY2tlbmQgcmV0dXJucyBvbmx5IGxpbWl0ZWQgbnVtYmVyIG9mIGVudHJpZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUYWdzU2VjdGlvbih7IHRhZ3MsIHN0YXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIC8vIE9wdGlvbnMgYXJlIHJlbG9hZGVkIHdoaWxlIHVzZXIgaXMgdHlwaW5nIHdpdGggYmFja2VuZCB0YWtpbmcgY2FyZSBvZiBhdXRvLWNvbXBsZXRlIChhdXRvLWNvbXBsZXRlIGNhbm5vdCBiZVxuICAvLyBpbXBsZW1lbnRlZCBpbiBmcm9udC1lbmQgYmVjYXVzZSBiYWNrZW5kIHJldHVybnMgb25seSBsaW1pdGVkIG51bWJlciBvZiBlbnRyaWVzKVxuICBjb25zdCBnZXRUYWdzQXNTZWdtZW50c09wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5wdXRWYWx1ZT86IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGdldFRhZ3NBc1NlZ21lbnRzU2VsZWN0YWJsZXMoc3RhdGUsIGlucHV0VmFsdWUgfHwgJycpO1xuICAgIH0sXG4gICAgW3N0YXRlXVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRHZXRUYWdzQXNTZWdtZW50cyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gZGVib3VuY2UoZ2V0VGFnc0FzU2VnbWVudHNPcHRpb25zLCAyMDAsIHsgbGVhZGluZzogdHJ1ZSB9KSxcbiAgICBbZ2V0VGFnc0FzU2VnbWVudHNPcHRpb25zXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt0YWdzLm1hcCgodGFnLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPFRhZ0VkaXRvciBrZXk9e2luZGV4fSB0YWdJbmRleD17aW5kZXh9IHRhZz17dGFnfSBzdGF0ZT17c3RhdGV9IC8+O1xuICAgICAgfSl9XG4gICAgICB7dGFncy5sZW5ndGggJiYgKFxuICAgICAgICA8U2VnbWVudEFzeW5jPEdyYXBoaXRlU2VnbWVudD5cbiAgICAgICAgICBpbnB1dE1pbldpZHRoPXsxNTB9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5hZGROZXdUYWcoeyBzZWdtZW50OiB2YWx1ZS52YWx1ZSEgfSkpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZEdldFRhZ3NBc1NlZ21lbnRzfVxuICAgICAgICAgIHJlbG9hZE9wdGlvbnNPbkNoYW5nZT17dHJ1ZX1cbiAgICAgICAgICBDb21wb25lbnQ9ezxCdXR0b24gaWNvbj1cInBsdXNcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBhcmlhLWxhYmVsPVwiQWRkIG5ldyB0YWdcIiAvPn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7c3RhdGUucGF1c2VkICYmIDxQbGF5QnV0dG9uIC8+fVxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBidXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBGdW5jRGVmcywgRnVuY0luc3RhbmNlLCBQYXJhbURlZiB9IGZyb20gJy4uL2dmdW5jJztcbmltcG9ydCB7IGZvckVhY2gsIHNvcnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEVkaXRhYmxlUGFyYW0gfSBmcm9tICcuL0Z1bmN0aW9uUGFyYW1FZGl0b3InO1xuaW1wb3J0IHsgR3JhcGhpdGVTZWdtZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFwU3RyaW5nc1RvU2VsZWN0YWJsZXM8VCBleHRlbmRzIHN0cmluZz4odmFsdWVzOiBUW10pOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8VD4+IHtcbiAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiAoe1xuICAgIHZhbHVlLFxuICAgIGxhYmVsOiB2YWx1ZSxcbiAgfSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwU2VnbWVudHNUb1NlbGVjdGFibGVzKHNlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXSk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxHcmFwaGl0ZVNlZ21lbnQ+PiB7XG4gIHJldHVybiBzZWdtZW50cy5tYXAoKHNlZ21lbnQpID0+ICh7XG4gICAgbGFiZWw6IHNlZ21lbnQudmFsdWUsXG4gICAgdmFsdWU6IHNlZ21lbnQsXG4gIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEZ1bmNEZWZzVG9TZWxlY3RhYmxlcyhmdW5jRGVmczogRnVuY0RlZnMpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBhbnkgPSB7fTtcblxuICBmb3JFYWNoKGZ1bmNEZWZzLCAoZnVuY0RlZikgPT4ge1xuICAgIGlmICghZnVuY0RlZi5jYXRlZ29yeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWNhdGVnb3JpZXNbZnVuY0RlZi5jYXRlZ29yeV0pIHtcbiAgICAgIGNhdGVnb3JpZXNbZnVuY0RlZi5jYXRlZ29yeV0gPSB7IGxhYmVsOiBmdW5jRGVmLmNhdGVnb3J5LCB2YWx1ZTogZnVuY0RlZi5jYXRlZ29yeSwgb3B0aW9uczogW10gfTtcbiAgICB9XG4gICAgY2F0ZWdvcmllc1tmdW5jRGVmLmNhdGVnb3J5XS5vcHRpb25zLnB1c2goe1xuICAgICAgbGFiZWw6IGZ1bmNEZWYubmFtZSxcbiAgICAgIHZhbHVlOiBmdW5jRGVmLm5hbWUsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzb3J0QnkoY2F0ZWdvcmllcywgJ2xhYmVsJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRhYmxlUGFyYW0ocGFyYW1EZWY6IFBhcmFtRGVmLCBhZGRpdGlvbmFsOiBib29sZWFuLCB2YWx1ZT86IHN0cmluZyB8IG51bWJlcik6IEVkaXRhYmxlUGFyYW0ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHBhcmFtRGVmLm5hbWUsXG4gICAgdmFsdWU6IHZhbHVlPy50b1N0cmluZygpIHx8ICcnLFxuICAgIG9wdGlvbmFsOiAhIXBhcmFtRGVmLm9wdGlvbmFsIHx8IGFkZGl0aW9uYWwsIC8vIG9ubHkgZmlyc3QgcGFyYW0gaXMgcmVxdWlyZWQgd2hlbiBtdWx0aXBsZSBhcmUgYWxsb3dlZFxuICAgIG11bHRpcGxlOiAhIXBhcmFtRGVmLm11bHRpcGxlLFxuICAgIG9wdGlvbnM6XG4gICAgICBwYXJhbURlZi5vcHRpb25zPy5tYXAoKG9wdGlvbjogc3RyaW5nIHwgbnVtYmVyKSA9PiAoe1xuICAgICAgICB2YWx1ZTogb3B0aW9uLnRvU3RyaW5nKCksXG4gICAgICAgIGxhYmVsOiBvcHRpb24udG9TdHJpbmcoKSxcbiAgICAgIH0pKSA/PyBbXSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBsaXN0IG9mIHBhcmFtcyB0aGF0IGNhbiBiZSBlZGl0ZWQgaW4gdGhlIGZ1bmN0aW9uIGVkaXRvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcEZ1bmNJbnN0YW5jZVRvUGFyYW1zKGZ1bmM6IEZ1bmNJbnN0YW5jZSk6IEVkaXRhYmxlUGFyYW1bXSB7XG4gIC8vIGxpc3Qgb2YgcmVxdWlyZWQgcGFyYW1ldGVycyAoZnJvbSBmdW5jLmRlZilcbiAgY29uc3QgcGFyYW1zOiBFZGl0YWJsZVBhcmFtW10gPSBmdW5jLmRlZi5wYXJhbXMubWFwKChwYXJhbURlZjogUGFyYW1EZWYsIGluZGV4OiBudW1iZXIpID0+XG4gICAgY3JlYXRlRWRpdGFibGVQYXJhbShwYXJhbURlZiwgZmFsc2UsIGZ1bmMucGFyYW1zW2luZGV4XSlcbiAgKTtcblxuICAvLyBsaXN0IG9mIGFkZGl0aW9uYWwgKG11bHRpcGxlIG9yIG9wdGlvbmFsKSBwYXJhbXMgZW50ZXJlZCBieSB0aGUgdXNlclxuICB3aGlsZSAocGFyYW1zLmxlbmd0aCA8IGZ1bmMucGFyYW1zLmxlbmd0aCkge1xuICAgIGNvbnN0IHBhcmFtRGVmID0gZnVuYy5kZWYucGFyYW1zW2Z1bmMuZGVmLnBhcmFtcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCB2YWx1ZSA9IGZ1bmMucGFyYW1zW3BhcmFtcy5sZW5ndGhdO1xuICAgIHBhcmFtcy5wdXNoKGNyZWF0ZUVkaXRhYmxlUGFyYW0ocGFyYW1EZWYsIHRydWUsIHZhbHVlKSk7XG4gIH1cblxuICAvLyBleHRyYSBcImZha2VcIiBwYXJhbSB0byBhbGxvdyBhZGRpbmcgbW9yZSBtdWx0aXBsZSB2YWx1ZXMgYXQgdGhlIGVuZFxuICBpZiAocGFyYW1zLmxlbmd0aCAmJiBwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdLnZhbHVlICYmIHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0/Lm11bHRpcGxlKSB7XG4gICAgY29uc3QgcGFyYW1EZWYgPSBmdW5jLmRlZi5wYXJhbXNbZnVuYy5kZWYucGFyYW1zLmxlbmd0aCAtIDFdO1xuICAgIHBhcmFtcy5wdXNoKGNyZWF0ZUVkaXRhYmxlUGFyYW0ocGFyYW1EZWYsIHRydWUsICcnKSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbGVydCwgRGF0YVNvdXJjZUh0dHBTZXR0aW5ncywgSW5saW5lRm9ybUxhYmVsLCBMZWdhY3lGb3JtcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmNvbnN0IHsgU2VsZWN0LCBTd2l0Y2ggfSA9IExlZ2FjeUZvcm1zO1xuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyxcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxuICBvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvblNlbGVjdCxcbiAgb25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb25DaGVja2VkLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEdyYXBoaXRlT3B0aW9ucywgR3JhcGhpdGVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgREVGQVVMVF9HUkFQSElURV9WRVJTSU9OLCBHUkFQSElURV9WRVJTSU9OUyB9IGZyb20gJy4uL3ZlcnNpb25zJztcbmltcG9ydCB7IE1hcHBpbmdzQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vTWFwcGluZ3NDb25maWd1cmF0aW9uJztcbmltcG9ydCB7IGZyb21TdHJpbmcsIHRvU3RyaW5nIH0gZnJvbSAnLi9wYXJzZUxva2lMYWJlbE1hcHBpbmdzJztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBTSE9XX01BUFBJTkdTX0hFTFBfS0VZID0gJ2dyYWZhbmEuZGF0YXNvdXJjZXMuZ3JhcGhpdGUuY29uZmlnLnNob3dNYXBwaW5nc0hlbHAnO1xuXG5jb25zdCBncmFwaGl0ZVZlcnNpb25zID0gR1JBUEhJVEVfVkVSU0lPTlMubWFwKCh2ZXJzaW9uKSA9PiAoeyBsYWJlbDogYCR7dmVyc2lvbn0ueGAsIHZhbHVlOiB2ZXJzaW9uIH0pKTtcblxuY29uc3QgZ3JhcGhpdGVUeXBlcyA9IE9iamVjdC5lbnRyaWVzKEdyYXBoaXRlVHlwZSkubWFwKChbbGFiZWwsIHZhbHVlXSkgPT4gKHtcbiAgbGFiZWwsXG4gIHZhbHVlLFxufSkpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8R3JhcGhpdGVPcHRpb25zPjtcblxudHlwZSBTdGF0ZSA9IHtcbiAgc2hvd01hcHBpbmdzSGVscDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dNYXBwaW5nc0hlbHA6IHN0b3JlLmdldE9iamVjdChTSE9XX01BUFBJTkdTX0hFTFBfS0VZLCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyVHlwZUhlbHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwPlxuICAgICAgICBUaGVyZSBhcmUgZGlmZmVyZW50IHR5cGVzIG9mIEdyYXBoaXRlIGNvbXBhdGlibGUgYmFja2VuZHMuIEhlcmUgeW91IGNhbiBzcGVjaWZ5IHRoZSB0eXBlIHlvdSBhcmUgdXNpbmcuIElmIHlvdVxuICAgICAgICBhcmUgdXNpbmd7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvbWV0cmljdGFua1wiIGNsYXNzTmFtZT1cInBvaW50ZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgTWV0cmljdGFua1xuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgdGhlbiBzZWxlY3QgdGhhdCBoZXJlLiBUaGlzIHdpbGwgZW5hYmxlIE1ldHJpY3Rhbmsgc3BlY2lmaWMgZmVhdHVyZXMgbGlrZSBxdWVyeSBwcm9jZXNzaW5nIG1ldGEgZGF0YS4gTWV0cmljdGFua1xuICAgICAgICBpcyBhIG11bHRpLXRlbmFudCB0aW1lc2VyaWVzIGVuZ2luZSBmb3IgR3JhcGhpdGUgYW5kIGZyaWVuZHMuXG4gICAgICA8L3A+XG4gICAgKTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ2dyYXBoaXRlVmVyc2lvbicsIHRoaXMuY3VycmVudEdyYXBoaXRlVmVyc2lvbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IGdyYXBoaXRlVmVyc2lvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS52YWx1ZSA9PT0gdGhpcy5jdXJyZW50R3JhcGhpdGVWZXJzaW9uKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7b3B0aW9ucy5hY2Nlc3MgPT09ICdkaXJlY3QnICYmIChcbiAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJEZXByZWNhdGlvbiBOb3RpY2VcIiBzZXZlcml0eT1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIFRoaXMgZGF0YSBzb3VyY2UgdXNlcyBicm93c2VyIGFjY2VzcyBtb2RlLiBUaGlzIG1vZGUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuIFBsZWFzZVxuICAgICAgICAgICAgdXNlIHNlcnZlciBhY2Nlc3MgbW9kZSBpbnN0ZWFkLlxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICl9XG4gICAgICAgIDxEYXRhU291cmNlSHR0cFNldHRpbmdzXG4gICAgICAgICAgZGVmYXVsdFVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiXG4gICAgICAgICAgZGF0YVNvdXJjZUNvbmZpZz17b3B0aW9uc31cbiAgICAgICAgICBvbkNoYW5nZT17b25PcHRpb25zQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+R3JhcGhpdGUgZGV0YWlsczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIHRvb2x0aXA9XCJUaGlzIG9wdGlvbiBjb250cm9scyB3aGF0IGZ1bmN0aW9ucyBhcmUgYXZhaWxhYmxlIGluIHRoZSBHcmFwaGl0ZSBxdWVyeSBlZGl0b3IuXCI+XG4gICAgICAgICAgICAgICAgVmVyc2lvblxuICAgICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHcmFwaGl0ZSB2ZXJzaW9uXCJcbiAgICAgICAgICAgICAgICBtZW51U2hvdWxkUG9ydGFsXG4gICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRWZXJzaW9ufVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dyYXBoaXRlVmVyc2lvbnN9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezh9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0KHRoaXMucHJvcHMsICdncmFwaGl0ZVZlcnNpb24nKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIHRvb2x0aXA9e3RoaXMucmVuZGVyVHlwZUhlbHB9PlR5cGU8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHcmFwaGl0ZSBiYWNrZW5kIHR5cGVcIlxuICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtncmFwaGl0ZVR5cGVzfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtncmFwaGl0ZVR5cGVzLmZpbmQoKHR5cGUpID0+IHR5cGUudmFsdWUgPT09IG9wdGlvbnMuanNvbkRhdGEuZ3JhcGhpdGVUeXBlKX1cbiAgICAgICAgICAgICAgICB3aWR0aD17OH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb25TZWxlY3QodGhpcy5wcm9wcywgJ2dyYXBoaXRlVHlwZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge29wdGlvbnMuanNvbkRhdGEuZ3JhcGhpdGVUeXBlID09PSBHcmFwaGl0ZVR5cGUuTWV0cmljdGFuayAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUm9sbHVwIGluZGljYXRvclwiXG4gICAgICAgICAgICAgICAgICBsYWJlbENsYXNzPXsnd2lkdGgtMTAnfVxuICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIlNob3dzIHVwIGFzIGFuIGluZm8gaWNvbiBpbiBwYW5lbCBoZWFkZXJzIHdoZW4gZGF0YSBpcyBhZ2dyZWdhdGVkXCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyEhb3B0aW9ucy5qc29uRGF0YS5yb2xsdXBJbmRpY2F0b3JFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uQ2hlY2tlZCh0aGlzLnByb3BzLCAncm9sbHVwSW5kaWNhdG9yRW5hYmxlZCcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNYXBwaW5nc0NvbmZpZ3VyYXRpb25cbiAgICAgICAgICBtYXBwaW5ncz17KG9wdGlvbnMuanNvbkRhdGEuaW1wb3J0Q29uZmlndXJhdGlvbj8ubG9raT8ubWFwcGluZ3MgfHwgW10pLm1hcCh0b1N0cmluZyl9XG4gICAgICAgICAgc2hvd0hlbHA9e3RoaXMuc3RhdGUuc2hvd01hcHBpbmdzSGVscH1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TWFwcGluZ3NIZWxwOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHN0b3JlLnNldE9iamVjdChTSE9XX01BUFBJTkdTX0hFTFBfS0VZLCBmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlc3RvcmVIZWxwPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01hcHBpbmdzSGVscDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHN0b3JlLnNldE9iamVjdChTSE9XX01BUFBJTkdTX0hFTFBfS0VZLCB0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXsobWFwcGluZ3MpID0+IHtcbiAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZSh7XG4gICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgIGpzb25EYXRhOiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YSxcbiAgICAgICAgICAgICAgICBpbXBvcnRDb25maWd1cmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLmltcG9ydENvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICBsb2tpOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzOiBtYXBwaW5ncy5tYXAoZnJvbVN0cmluZyksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGN1cnJlbnRHcmFwaGl0ZVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9ucy5qc29uRGF0YS5ncmFwaGl0ZVZlcnNpb24gfHwgREVGQVVMVF9HUkFQSElURV9WRVJTSU9OO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IE1hcHBpbmdzSGVscCBmcm9tICcuL01hcHBpbmdzSGVscCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1hcHBpbmdzOiBzdHJpbmdbXTtcbiAgb25DaGFuZ2U6IChtYXBwaW5nczogc3RyaW5nW10pID0+IHZvaWQ7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgb25SZXN0b3JlSGVscDogKCkgPT4gdm9pZDtcbiAgc2hvd0hlbHA6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgTWFwcGluZ3NDb25maWd1cmF0aW9uID0gKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW21hcHBpbmdzLCBzZXRNYXBwaW5nc10gPSB1c2VTdGF0ZShwcm9wcy5tYXBwaW5ncyB8fCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPkxhYmVsIG1hcHBpbmdzPC9oMz5cbiAgICAgIHshcHJvcHMuc2hvd0hlbHAgJiYgKFxuICAgICAgICA8cD5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJsaW5rXCIgb25DbGljaz17cHJvcHMub25SZXN0b3JlSGVscH0+XG4gICAgICAgICAgICBMZWFybiBob3cgbGFiZWwgbWFwcGluZ3Mgd29ya1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgICAge3Byb3BzLnNob3dIZWxwICYmIDxNYXBwaW5nc0hlbHAgb25EaXNtaXNzPXtwcm9wcy5vbkRpc21pc3N9IC8+fVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAge21hcHBpbmdzLm1hcCgobWFwcGluZywgaSkgPT4gKFxuICAgICAgICAgIDxJbmxpbmVGaWVsZFJvdyBrZXk9e2l9PlxuICAgICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXtgTWFwcGluZyAoJHtpICsgMX0pYH0+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNoYW5nZUV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IG5ld01hcHBpbmdzID0gbWFwcGluZ3MuY29uY2F0KCk7XG4gICAgICAgICAgICAgICAgICBuZXdNYXBwaW5nc1tpXSA9IGNoYW5nZUV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIHNldE1hcHBpbmdzKG5ld01hcHBpbmdzKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UobWFwcGluZ3MpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIHRlc3QubWV0cmljLihsYWJlbE5hbWUpLipcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXttYXBwaW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZW1vdmUgaGVhZGVyXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhfKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld01hcHBpbmdzID0gbWFwcGluZ3MuY29uY2F0KCk7XG4gICAgICAgICAgICAgICAgbmV3TWFwcGluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHNldE1hcHBpbmdzKG5ld01hcHBpbmdzKTtcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShuZXdNYXBwaW5ncyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ0cmFzaC1hbHRcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0TWFwcGluZ3MoWy4uLm1hcHBpbmdzLCAnJ10pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgbGFiZWwgbWFwcGluZ1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwcGluZ3NIZWxwKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8QWxlcnQgc2V2ZXJpdHk9XCJpbmZvXCIgdGl0bGU9XCJIb3cgdG8gbWFwIEdyYXBoaXRlIG1ldHJpY3MgdG8gbGFiZWxzP1wiIG9uUmVtb3ZlPXtwcm9wcy5vbkRpc21pc3N9PlxuICAgICAgPHA+TWFwcGluZ3MgYXJlIGN1cnJlbnRseSBzdXBwb3J0ZWQgb25seSBiZXR3ZWVuIEdyYXBoaXRlIGFuZCBMb2tpIHF1ZXJpZXMuPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdoZW4geW91IHN3aXRjaCB5b3VyIGRhdGEgc291cmNlIGZyb20gR3JhcGhpdGUgdG8gTG9raSwgeW91ciBxdWVyaWVzIGFyZSBtYXBwZWQgYWNjb3JkaW5nIHRvIHRoZSBtYXBwaW5nc1xuICAgICAgICBkZWZpbmVkIGluIHRoZSBleGFtcGxlIGJlbG93LiBUbyBkZWZpbmUgYSBtYXBwaW5nLCB3cml0ZSB0aGUgZnVsbCBwYXRoIG9mIHRoZSBtZXRyaWMgYW5kIHJlcGxhY2Ugbm9kZXMgeW91IHdhbnRcbiAgICAgICAgdG8gbWFwIHRvIGxhYmVsIHdpdGggdGhlIGxhYmVsIG5hbWUgaW4gcGFyZW50aGVzZXMuIFRoZSB2YWx1ZSBvZiB0aGUgbGFiZWwgaXMgZXh0cmFjdGVkIGZyb20geW91ciBHcmFwaGl0ZSBxdWVyeVxuICAgICAgICB3aGVuIHlvdSBzd2l0Y2ggZGF0YSBzb3VyY2VzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEFsbCB0YWdzIGFyZSBhdXRvbWF0aWNhbGx5IG1hcHBlZCB0byBsYWJlbHMgcmVnYXJkbGVzcyBvZiB0aGUgbWFwcGluZyBjb25maWd1cmF0aW9uLiBHcmFwaGl0ZSBtYXRjaGluZyBwYXR0ZXJuc1xuICAgICAgICAodXNpbmcgJiMxMjM7JiMxMjU7KSBhcmUgY29udmVydGVkIHRvIExva2kmYXBvcztzIHJlZ3VsYXIgZXhwcmVzc2lvbnMgbWF0Y2hpbmcgcGF0dGVybnMuIFdoZW4geW91IHVzZSBmdW5jdGlvbnNcbiAgICAgICAgaW4geW91ciBxdWVyaWVzLCB0aGUgbWV0cmljcywgYW5kIHRhZ3MgYXJlIGV4dHJhY3RlZCB0byBtYXRjaCB0aGVtIHdpdGggZGVmaW5lZCBtYXBwaW5ncy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBFeGFtcGxlOiBmb3IgYSBtYXBwaW5nID0gPGNvZGU+c2VydmVycy4oY2x1c3RlcikuKHNlcnZlcikuKjwvY29kZT46XG4gICAgICA8L3A+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+R3JhcGhpdGUgcXVlcnk8L3RoPlxuICAgICAgICAgICAgPHRoPk1hcHBlZCB0byBMb2tpIHF1ZXJ5PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgICAgICBhbGlhcyhzZXJ2ZXJzLjx1Pndlc3Q8L3U+Ljx1PjAwMTwvdT4uY3B1LDEsMilcbiAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgICAgJiMxMjM7Y2x1c3Rlcj0mcXVvdDs8dT53ZXN0PC91PiZxdW90Oywgc2VydmVyPSZxdW90Ozx1PjAwMTwvdT4mcXVvdDsmIzEyNTtcbiAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgICAgYWxpYXMoc2VydmVycy4qLjx1PiYjMTIzOzAwMSwwMDImIzEyNTs8L3U+LiosMSwyKVxuICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgICAgICAmIzEyMztzZXJ2ZXI9fiZxdW90Ozx1PigwMDF8MDAyKTwvdT4mcXVvdDsmIzEyNTtcbiAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+aW50ZXJwb2xhdGUoc2VyaWVzQnlUYWcoJmFwb3M7Zm9vPWJhciZhcG9zOywgJmFwb3M7c2VydmVyPTAwMiZhcG9zOyksIGluZikpPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+JiMxMjM7Zm9vPSZxdW90O2JhciZxdW90Oywgc2VydmVyPSZxdW90OzAwMiZxdW90OyYjMTI1OzwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9BbGVydD5cbiAgKTtcbn1cbiIsImltcG9ydCB7IEdyYXBoaXRlTG9raU1hcHBpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQ29udmVydHMgYSBzaW1wbGUgc3RyaW5nIHVzZWQgaW4gTG9raUxvZ3NNYXBwaW5ncyBjb21wb25lbnQgKGUuZy4gXCJzZXJ2ZXJzLihuYW1lKS4qXCIpXG4gKiB0byBkYXRhIG1vZGVsIHNhdmVkIGluIGRhdGEgc291cmNlIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU3RyaW5nKHRleHQ6IHN0cmluZyk6IEdyYXBoaXRlTG9raU1hcHBpbmcge1xuICByZXR1cm4ge1xuICAgIG1hdGNoZXJzOiB0ZXh0LnNwbGl0KCcuJykubWFwKChtZXRyaWNOb2RlKSA9PiB7XG4gICAgICBpZiAobWV0cmljTm9kZS5zdGFydHNXaXRoKCcoJykgJiYgbWV0cmljTm9kZS5lbmRzV2l0aCgnKScpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6ICcqJyxcbiAgICAgICAgICBsYWJlbE5hbWU6IG1ldHJpY05vZGUuc2xpY2UoMSwgLTEpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG1ldHJpY05vZGUgfTtcbiAgICAgIH1cbiAgICB9KSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDb3ZlcnRzIGNvbmZpZ3VyYXRpb24gc3RvcmVkIGluIGRhdGEgc291cmNlIGNvbmZpZ3VyYXRpb24gaW50byBhIHN0cmluZyBkaXNwbGF5ZWQgaW4gTG9raUxvZ3NNYXBwaW5ncyBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyhtYXBwaW5nOiBHcmFwaGl0ZUxva2lNYXBwaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1hcHBpbmcubWF0Y2hlcnNcbiAgICAubWFwKChtYXRjaGVyKSA9PiB7XG4gICAgICByZXR1cm4gbWF0Y2hlci5sYWJlbE5hbWUgPyBgKCR7bWF0Y2hlci5sYWJlbE5hbWV9KWAgOiBgJHttYXRjaGVyLnZhbHVlfWA7XG4gICAgfSlcbiAgICAuam9pbignLicpO1xufVxuIiwiaW1wb3J0IHsgZWFjaCwgaW5kZXhPZiwgaXNBcnJheSwgaXNTdHJpbmcsIG1hcCBhcyBfbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20sIE9ic2VydmFibGUsIG9mLCBPcGVyYXRvckZ1bmN0aW9uLCBwaXBlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQge1xuICBEYXRhRnJhbWUsXG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlQXBpLFxuICBEYXRhU291cmNlV2l0aFF1ZXJ5RXhwb3J0U3VwcG9ydCxcbiAgZGF0ZU1hdGgsXG4gIEFic3RyYWN0UXVlcnksXG4gIEFic3RyYWN0TGFiZWxPcGVyYXRvcixcbiAgQWJzdHJhY3RMYWJlbE1hdGNoZXIsXG4gIE1ldHJpY0ZpbmRWYWx1ZSxcbiAgUXVlcnlSZXN1bHRNZXRhU3RhdCxcbiAgU2NvcGVkVmFycyxcbiAgVGltZVJhbmdlLFxuICB0b0RhdGFGcmFtZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IGlzVmVyc2lvbkd0T3JFcSwgU2VtVmVyc2lvbiB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL3ZlcnNpb24nO1xuaW1wb3J0IGdmdW5jLCB7IEZ1bmNEZWZzLCBGdW5jSW5zdGFuY2UgfSBmcm9tICcuL2dmdW5jJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG4vLyBUeXBlc1xuaW1wb3J0IHtcbiAgR3JhcGhpdGVMb2tpTWFwcGluZyxcbiAgR3JhcGhpdGVNZXRyaWNMb2tpTWF0Y2hlcixcbiAgR3JhcGhpdGVPcHRpb25zLFxuICBHcmFwaGl0ZVF1ZXJ5LFxuICBHcmFwaGl0ZVF1ZXJ5SW1wb3J0Q29uZmlndXJhdGlvbixcbiAgR3JhcGhpdGVUeXBlLFxuICBNZXRyaWNUYW5rUmVxdWVzdE1ldGEsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Um9sbHVwTm90aWNlLCBnZXRSdW50aW1lQ29uc29saWRhdGlvbk5vdGljZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvbWV0YSc7XG5pbXBvcnQgeyBnZXRTZWFyY2hGaWx0ZXJTY29wZWRWYXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy92YXJpYWJsZXMvdXRpbHMnO1xuaW1wb3J0IHsgREVGQVVMVF9HUkFQSElURV9WRVJTSU9OIH0gZnJvbSAnLi92ZXJzaW9ucyc7XG5pbXBvcnQgeyByZWR1Y2VFcnJvciB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBHcmFwaGl0ZVF1ZXJ5TW9kZWwgfSBmcm9tICcuL2dyYXBoaXRlX3F1ZXJ5JztcblxuY29uc3QgR1JBUEhJVEVfVEFHX0NPTVBBUkFUT1JTID0ge1xuICAnPSc6IEFic3RyYWN0TGFiZWxPcGVyYXRvci5FcXVhbCxcbiAgJyE9JzogQWJzdHJhY3RMYWJlbE9wZXJhdG9yLk5vdEVxdWFsLFxuICAnPX4nOiBBYnN0cmFjdExhYmVsT3BlcmF0b3IuRXF1YWxSZWdFeCxcbiAgJyE9fic6IEFic3RyYWN0TGFiZWxPcGVyYXRvci5Ob3RFcXVhbFJlZ0V4LFxufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBHcmFwaGl0ZSBnbG9iLWxpa2UgcGF0dGVybiB0byBhIHJlZ3VsYXIgZXhwcmVzc2lvblxuICovXG5mdW5jdGlvbiBjb252ZXJ0R2xvYlRvUmVnRXgodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHRleHQuaW5jbHVkZXMoJyonKSB8fCB0ZXh0LmluY2x1ZGVzKCd7JykpIHtcbiAgICByZXR1cm4gJ14nICsgdGV4dC5yZXBsYWNlKC9cXCovZywgJy4qJykucmVwbGFjZSgvXFx7L2csICcoJykucmVwbGFjZSgvfS9nLCAnKScpLnJlcGxhY2UoLywvZywgJ3wnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR3JhcGhpdGVEYXRhc291cmNlXG4gIGV4dGVuZHMgRGF0YVNvdXJjZUFwaTxHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZU9wdGlvbnMsIEdyYXBoaXRlUXVlcnlJbXBvcnRDb25maWd1cmF0aW9uPlxuICBpbXBsZW1lbnRzIERhdGFTb3VyY2VXaXRoUXVlcnlFeHBvcnRTdXBwb3J0PEdyYXBoaXRlUXVlcnk+XG57XG4gIGJhc2ljQXV0aDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBncmFwaGl0ZVZlcnNpb246IGFueTtcbiAgc3VwcG9ydHNUYWdzOiBib29sZWFuO1xuICBpc01ldHJpY1Rhbms6IGJvb2xlYW47XG4gIHJvbGx1cEluZGljYXRvckVuYWJsZWQ6IGJvb2xlYW47XG4gIGNhY2hlVGltZW91dDogYW55O1xuICB3aXRoQ3JlZGVudGlhbHM6IGJvb2xlYW47XG4gIGZ1bmNEZWZzOiBGdW5jRGVmcyB8IG51bGwgPSBudWxsO1xuICBmdW5jRGVmc1Byb21pc2U6IFByb21pc2U8YW55PiB8IG51bGwgPSBudWxsO1xuICBfc2VyaWVzUmVmTGV0dGVyczogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IG1ldHJpY01hcHBpbmdzOiBHcmFwaGl0ZUxva2lNYXBwaW5nW107XG5cbiAgY29uc3RydWN0b3IoaW5zdGFuY2VTZXR0aW5nczogYW55LCBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCkpIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgICB0aGlzLmJhc2ljQXV0aCA9IGluc3RhbmNlU2V0dGluZ3MuYmFzaWNBdXRoO1xuICAgIHRoaXMudXJsID0gaW5zdGFuY2VTZXR0aW5ncy51cmw7XG4gICAgdGhpcy5uYW1lID0gaW5zdGFuY2VTZXR0aW5ncy5uYW1lO1xuICAgIC8vIGdyYXBoaXRlVmVyc2lvbiBpcyBzZXQgd2hlbiBhIGRhdGFzb3VyY2UgaXMgY3JlYXRlZCBidXQgaXQgaGFkbid0IGJlZW4gc2V0IGluIHRoZSBwYXN0IHNvIHdlJ3JlXG4gICAgLy8gc3RpbGwgZmFsbGluZyBiYWNrIHRvIHRoZSBkZWZhdWx0IGJlaGF2aW9yIGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChzZWUgYWxzbyAjMTc0MjkpXG4gICAgdGhpcy5ncmFwaGl0ZVZlcnNpb24gPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLmdyYXBoaXRlVmVyc2lvbiB8fCBERUZBVUxUX0dSQVBISVRFX1ZFUlNJT047XG4gICAgdGhpcy5tZXRyaWNNYXBwaW5ncyA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuaW1wb3J0Q29uZmlndXJhdGlvbj8ubG9raT8ubWFwcGluZ3MgfHwgW107XG4gICAgdGhpcy5pc01ldHJpY1RhbmsgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLmdyYXBoaXRlVHlwZSA9PT0gR3JhcGhpdGVUeXBlLk1ldHJpY3Rhbms7XG4gICAgdGhpcy5zdXBwb3J0c1RhZ3MgPSBzdXBwb3J0c1RhZ3ModGhpcy5ncmFwaGl0ZVZlcnNpb24pO1xuICAgIHRoaXMuY2FjaGVUaW1lb3V0ID0gaW5zdGFuY2VTZXR0aW5ncy5jYWNoZVRpbWVvdXQ7XG4gICAgdGhpcy5yb2xsdXBJbmRpY2F0b3JFbmFibGVkID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5yb2xsdXBJbmRpY2F0b3JFbmFibGVkO1xuICAgIHRoaXMud2l0aENyZWRlbnRpYWxzID0gaW5zdGFuY2VTZXR0aW5ncy53aXRoQ3JlZGVudGlhbHM7XG4gICAgdGhpcy5mdW5jRGVmcyA9IG51bGw7XG4gICAgdGhpcy5mdW5jRGVmc1Byb21pc2UgPSBudWxsO1xuICAgIHRoaXMuX3Nlcmllc1JlZkxldHRlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICB9XG5cbiAgZ2V0UXVlcnlPcHRpb25zSW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWF4RGF0YVBvaW50czogdHJ1ZSxcbiAgICAgIGNhY2hlVGltZW91dDogdHJ1ZSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSGVscCcsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2RvY3MuZ3JhZmFuYS5vcmcvZmVhdHVyZXMvZGF0YXNvdXJjZXMvZ3JhcGhpdGUvI3VzaW5nLWdyYXBoaXRlLWluLWdyYWZhbmEnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0SW1wb3J0UXVlcnlDb25maWd1cmF0aW9uKCk6IEdyYXBoaXRlUXVlcnlJbXBvcnRDb25maWd1cmF0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9raToge1xuICAgICAgICBtYXBwaW5nczogdGhpcy5tZXRyaWNNYXBwaW5ncyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGV4cG9ydFRvQWJzdHJhY3RRdWVyaWVzKHF1ZXJpZXM6IEdyYXBoaXRlUXVlcnlbXSk6IFByb21pc2U8QWJzdHJhY3RRdWVyeVtdPiB7XG4gICAgcmV0dXJuIHF1ZXJpZXMubWFwKChxdWVyeSkgPT4gdGhpcy5leHBvcnRUb0Fic3RyYWN0UXVlcnkocXVlcnkpKTtcbiAgfVxuXG4gIGV4cG9ydFRvQWJzdHJhY3RRdWVyeShxdWVyeTogR3JhcGhpdGVRdWVyeSk6IEFic3RyYWN0UXVlcnkge1xuICAgIGNvbnN0IGdyYXBoaXRlUXVlcnk6IEdyYXBoaXRlUXVlcnlNb2RlbCA9IG5ldyBHcmFwaGl0ZVF1ZXJ5TW9kZWwoXG4gICAgICB0aGlzLFxuICAgICAge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgdGFyZ2V0OiBxdWVyeS50YXJnZXQgfHwgJycsXG4gICAgICAgIHRleHRFZGl0b3I6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KClcbiAgICApO1xuICAgIGdyYXBoaXRlUXVlcnkucGFyc2VUYXJnZXQoKTtcblxuICAgIGxldCBsYWJlbHM6IEFic3RyYWN0TGFiZWxNYXRjaGVyW10gPSBbXTtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldEltcG9ydFF1ZXJ5Q29uZmlndXJhdGlvbigpLmxva2k7XG5cbiAgICBpZiAoZ3JhcGhpdGVRdWVyeS5zZXJpZXNCeVRhZ1VzZWQpIHtcbiAgICAgIGdyYXBoaXRlUXVlcnkudGFncy5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgICAgbGFiZWxzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IHRhZy5rZXksXG4gICAgICAgICAgb3BlcmF0b3I6IEdSQVBISVRFX1RBR19DT01QQVJBVE9SU1t0YWcub3BlcmF0b3JdLFxuICAgICAgICAgIHZhbHVlOiB0YWcudmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGVzID0gZ3JhcGhpdGVRdWVyeS5zZWdtZW50cy5tYXAoKHNlZ21lbnQpID0+IHNlZ21lbnQudmFsdWUpO1xuICAgICAgbGV0IG1hcHBpbmdzID0gY29uZmlnLm1hcHBpbmdzLmZpbHRlcigobWFwcGluZykgPT4gbWFwcGluZy5tYXRjaGVycy5sZW5ndGggPD0gdGFyZ2V0Tm9kZXMubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgbWFwcGluZyBvZiBtYXBwaW5ncykge1xuICAgICAgICBjb25zdCBtYXRjaGVycyA9IG1hcHBpbmcubWF0Y2hlcnMuY29uY2F0KCk7XG5cbiAgICAgICAgbWF0Y2hlcnMuZXZlcnkoKG1hdGNoZXI6IEdyYXBoaXRlTWV0cmljTG9raU1hdGNoZXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAobWF0Y2hlci5sYWJlbE5hbWUpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICh0YXJnZXROb2Rlc1tpbmRleF0gYXMgc3RyaW5nKSE7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSBjb252ZXJ0R2xvYlRvUmVnRXgodmFsdWUpO1xuICAgICAgICAgICAgbGFiZWxzLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBtYXRjaGVyLmxhYmVsTmFtZSxcbiAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvbnZlcnRlZCAhPT0gdmFsdWUgPyBBYnN0cmFjdExhYmVsT3BlcmF0b3IuRXF1YWxSZWdFeCA6IEFic3RyYWN0TGFiZWxPcGVyYXRvci5FcXVhbCxcbiAgICAgICAgICAgICAgdmFsdWU6IGNvbnZlcnRlZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0YXJnZXROb2Rlc1tpbmRleF0gPT09IG1hdGNoZXIudmFsdWUgfHwgbWF0Y2hlci52YWx1ZSA9PT0gJyonO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVmSWQ6IHF1ZXJ5LnJlZklkLFxuICAgICAgbGFiZWxNYXRjaGVyczogbGFiZWxzLFxuICAgIH07XG4gIH1cblxuICBxdWVyeShvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PEdyYXBoaXRlUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGNvbnN0IGdyYXBoT3B0aW9ucyA9IHtcbiAgICAgIGZyb206IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLnJhdy5mcm9tLCBmYWxzZSwgb3B0aW9ucy50aW1lem9uZSksXG4gICAgICB1bnRpbDogdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UucmF3LnRvLCB0cnVlLCBvcHRpb25zLnRpbWV6b25lKSxcbiAgICAgIHRhcmdldHM6IG9wdGlvbnMudGFyZ2V0cyxcbiAgICAgIGZvcm1hdDogKG9wdGlvbnMgYXMgYW55KS5mb3JtYXQsXG4gICAgICBjYWNoZVRpbWVvdXQ6IG9wdGlvbnMuY2FjaGVUaW1lb3V0IHx8IHRoaXMuY2FjaGVUaW1lb3V0LFxuICAgICAgbWF4RGF0YVBvaW50czogb3B0aW9ucy5tYXhEYXRhUG9pbnRzLFxuICAgIH07XG5cbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmJ1aWxkR3JhcGhpdGVQYXJhbXMoZ3JhcGhPcHRpb25zLCBvcHRpb25zLnNjb3BlZFZhcnMpO1xuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gb2YoeyBkYXRhOiBbXSB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc01ldHJpY1RhbmspIHtcbiAgICAgIHBhcmFtcy5wdXNoKCdtZXRhPXRydWUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvcmVuZGVyJyxcbiAgICAgIGRhdGE6IHBhcmFtcy5qb2luKCcmJyksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuYWRkVHJhY2luZ0hlYWRlcnMoaHR0cE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMucGFuZWxJZCkge1xuICAgICAgaHR0cE9wdGlvbnMucmVxdWVzdElkID0gdGhpcy5uYW1lICsgJy5wYW5lbElkLicgKyBvcHRpb25zLnBhbmVsSWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZG9HcmFwaGl0ZVJlcXVlc3QoaHR0cE9wdGlvbnMpLnBpcGUobWFwKHRoaXMuY29udmVydFJlc3BvbnNlVG9EYXRhRnJhbWVzKSk7XG4gIH1cblxuICBhZGRUcmFjaW5nSGVhZGVycyhodHRwT3B0aW9uczogeyBoZWFkZXJzOiBhbnkgfSwgb3B0aW9uczogeyBkYXNoYm9hcmRJZD86IG51bWJlcjsgcGFuZWxJZD86IG51bWJlciB9KSB7XG4gICAgY29uc3QgcHJveHlNb2RlID0gIXRoaXMudXJsLm1hdGNoKC9eaHR0cC8pO1xuICAgIGlmIChwcm94eU1vZGUpIHtcbiAgICAgIGlmIChvcHRpb25zLmRhc2hib2FyZElkKSB7XG4gICAgICAgIGh0dHBPcHRpb25zLmhlYWRlcnNbJ1gtRGFzaGJvYXJkLUlkJ10gPSBvcHRpb25zLmRhc2hib2FyZElkO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMucGFuZWxJZCkge1xuICAgICAgICBodHRwT3B0aW9ucy5oZWFkZXJzWydYLVBhbmVsLUlkJ10gPSBvcHRpb25zLnBhbmVsSWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29udmVydFJlc3BvbnNlVG9EYXRhRnJhbWVzID0gKHJlc3VsdDogYW55KTogRGF0YVF1ZXJ5UmVzcG9uc2UgPT4ge1xuICAgIGNvbnN0IGRhdGE6IERhdGFGcmFtZVtdID0gW107XG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5kYXRhKSB7XG4gICAgICByZXR1cm4geyBkYXRhIH07XG4gICAgfVxuXG4gICAgLy8gU2VyaWVzIGFyZSBlaXRoZXIgYXQgdGhlIHJvb3Qgb3IgdW5kZXIgYSBub2RlIGNhbGxlZCAnc2VyaWVzJ1xuICAgIGNvbnN0IHNlcmllcyA9IHJlc3VsdC5kYXRhLnNlcmllcyB8fCByZXN1bHQuZGF0YTtcblxuICAgIGlmICghaXNBcnJheShzZXJpZXMpKSB7XG4gICAgICB0aHJvdyB7IG1lc3NhZ2U6ICdNaXNzaW5nIHNlcmllcyBpbiByZXN1bHQnLCBkYXRhOiByZXN1bHQgfTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcyA9IHNlcmllc1tpXTtcblxuICAgICAgLy8gRGlzYWJsZXMgR3JhZmFuYSBvd24gc2VyaWVzIG5hbWluZ1xuICAgICAgcy50aXRsZSA9IHMudGFyZ2V0O1xuXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHMuZGF0YXBvaW50cy5sZW5ndGg7IHkrKykge1xuICAgICAgICBzLmRhdGFwb2ludHNbeV1bMV0gKj0gMTAwMDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZnJhbWUgPSB0b0RhdGFGcmFtZShzKTtcblxuICAgICAgLy8gTWV0cmljdGFuayBtZXRhZGF0YVxuICAgICAgaWYgKHMubWV0YSkge1xuICAgICAgICBmcmFtZS5tZXRhID0ge1xuICAgICAgICAgIGN1c3RvbToge1xuICAgICAgICAgICAgcmVxdWVzdE1ldGFMaXN0OiByZXN1bHQuZGF0YS5tZXRhLCAvLyBpbmZvIGZvciB0aGUgd2hvbGUgcmVxdWVzdFxuICAgICAgICAgICAgc2VyaWVzTWV0YUxpc3Q6IHMubWV0YSwgLy8gQXJyYXkgb2YgbWV0YWRhdGFcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnJvbGx1cEluZGljYXRvckVuYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCByb2xsdXBOb3RpY2UgPSBnZXRSb2xsdXBOb3RpY2Uocy5tZXRhKTtcbiAgICAgICAgICBjb25zdCBydW50aW1lTm90aWNlID0gZ2V0UnVudGltZUNvbnNvbGlkYXRpb25Ob3RpY2Uocy5tZXRhKTtcblxuICAgICAgICAgIGlmIChyb2xsdXBOb3RpY2UpIHtcbiAgICAgICAgICAgIGZyYW1lLm1ldGEubm90aWNlcyA9IFtyb2xsdXBOb3RpY2VdO1xuICAgICAgICAgIH0gZWxzZSBpZiAocnVudGltZU5vdGljZSkge1xuICAgICAgICAgICAgZnJhbWUubWV0YS5ub3RpY2VzID0gW3J1bnRpbWVOb3RpY2VdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgYWRkIHRoZSByZXF1ZXN0IHN0YXRzIHRvIHRoZSBmaXJzdCBmcmFtZVxuICAgICAgICBpZiAoaSA9PT0gMCAmJiByZXN1bHQuZGF0YS5tZXRhLnN0YXRzKSB7XG4gICAgICAgICAgZnJhbWUubWV0YS5zdGF0cyA9IHRoaXMuZ2V0UmVxdWVzdFN0YXRzKHJlc3VsdC5kYXRhLm1ldGEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRhdGEucHVzaChmcmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGF0YSB9O1xuICB9O1xuXG4gIGdldFJlcXVlc3RTdGF0cyhtZXRhOiBNZXRyaWNUYW5rUmVxdWVzdE1ldGEpOiBRdWVyeVJlc3VsdE1ldGFTdGF0W10ge1xuICAgIGNvbnN0IHN0YXRzOiBRdWVyeVJlc3VsdE1ldGFTdGF0W10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIG1ldGEuc3RhdHMpIHtcbiAgICAgIGxldCB1bml0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChrZXkuZW5kc1dpdGgoJy5tcycpKSB7XG4gICAgICAgIHVuaXQgPSAnbXMnO1xuICAgICAgfVxuXG4gICAgICBzdGF0cy5wdXNoKHsgZGlzcGxheU5hbWU6IGtleSwgdmFsdWU6IG1ldGEuc3RhdHNba2V5XSwgdW5pdCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdHM7XG4gIH1cblxuICBwYXJzZVRhZ3ModGFnU3RyaW5nOiBzdHJpbmcpIHtcbiAgICBsZXQgdGFnczogc3RyaW5nW10gPSBbXTtcbiAgICB0YWdzID0gdGFnU3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgaWYgKHRhZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICB0YWdzID0gdGFnU3RyaW5nLnNwbGl0KCcgJyk7XG4gICAgICBpZiAodGFnc1swXSA9PT0gJycpIHtcbiAgICAgICAgdGFncyA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFncztcbiAgfVxuXG4gIGludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzKHF1ZXJpZXM6IEdyYXBoaXRlUXVlcnlbXSwgc2NvcGVkVmFyczogU2NvcGVkVmFycyk6IEdyYXBoaXRlUXVlcnlbXSB7XG4gICAgbGV0IGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgaWYgKHF1ZXJpZXMgJiYgcXVlcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBleHBhbmRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRRdWVyeSA9IHtcbiAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgIHRhcmdldDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnRhcmdldCA/PyAnJywgc2NvcGVkVmFycyksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBleHBhbmRlZFF1ZXJ5O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBleHBhbmRlZFF1ZXJpZXM7XG4gIH1cblxuICBhbm5vdGF0aW9uUXVlcnkob3B0aW9uczogYW55KSB7XG4gICAgLy8gR3JhcGhpdGUgbWV0cmljIGFzIGFubm90YXRpb25cbiAgICBpZiAob3B0aW9ucy5hbm5vdGF0aW9uLnRhcmdldCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMuYW5ub3RhdGlvbi50YXJnZXQsIHt9LCAnZ2xvYicpO1xuICAgICAgY29uc3QgZ3JhcGhpdGVRdWVyeSA9IHtcbiAgICAgICAgcmFuZ2U6IG9wdGlvbnMucmFuZ2UsXG4gICAgICAgIHRhcmdldHM6IFt7IHRhcmdldDogdGFyZ2V0IH1dLFxuICAgICAgICBmb3JtYXQ6ICdqc29uJyxcbiAgICAgICAgbWF4RGF0YVBvaW50czogMTAwLFxuICAgICAgfSBhcyB1bmtub3duIGFzIERhdGFRdWVyeVJlcXVlc3Q8R3JhcGhpdGVRdWVyeT47XG5cbiAgICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnF1ZXJ5KGdyYXBoaXRlUXVlcnkpLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHJlc3VsdC5kYXRhW2ldO1xuXG4gICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGFyZ2V0Lmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IHRhcmdldC5maWVsZHNbMF0udmFsdWVzLmdldCh5KTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC5maWVsZHNbMV0udmFsdWVzLmdldCh5KTtcblxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uOiBvcHRpb25zLmFubm90YXRpb24sXG4gICAgICAgICAgICAgICAgICB0aW1lLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRhcmdldC5uYW1lLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEdyYXBoaXRlIGV2ZW50IGFzIGFubm90YXRpb25cbiAgICAgIGNvbnN0IHRhZ3MgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucy5hbm5vdGF0aW9uLnRhZ3MpO1xuICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzKHsgcmFuZ2U6IG9wdGlvbnMucmFuZ2UsIHRhZ3M6IHRhZ3MgfSkudGhlbigocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgICAgaWYgKCFpc0FycmF5KHJlc3VsdHMuZGF0YSkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gZ2V0IGFubm90YXRpb25zIGZyb20gJHtyZXN1bHRzLnVybH0uYCk7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZSA9IHJlc3VsdHMuZGF0YVtpXTtcblxuICAgICAgICAgIGxldCB0YWdzID0gZS50YWdzO1xuICAgICAgICAgIGlmIChpc1N0cmluZyhlLnRhZ3MpKSB7XG4gICAgICAgICAgICB0YWdzID0gdGhpcy5wYXJzZVRhZ3MoZS50YWdzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0LnB1c2goe1xuICAgICAgICAgICAgYW5ub3RhdGlvbjogb3B0aW9ucy5hbm5vdGF0aW9uLFxuICAgICAgICAgICAgdGltZTogZS53aGVuICogMTAwMCxcbiAgICAgICAgICAgIHRpdGxlOiBlLndoYXQsXG4gICAgICAgICAgICB0YWdzOiB0YWdzLFxuICAgICAgICAgICAgdGV4dDogZS5kYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBldmVudHMob3B0aW9uczogeyByYW5nZTogVGltZVJhbmdlOyB0YWdzOiBhbnk7IHRpbWV6b25lPzogYW55IH0pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHRhZ3MgPSAnJztcbiAgICAgIGlmIChvcHRpb25zLnRhZ3MpIHtcbiAgICAgICAgdGFncyA9ICcmdGFncz0nICsgb3B0aW9ucy50YWdzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMuZG9HcmFwaGl0ZVJlcXVlc3Qoe1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgdXJsOlxuICAgICAgICAgICAgJy9ldmVudHMvZ2V0X2RhdGE/ZnJvbT0nICtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLnJhdy5mcm9tLCBmYWxzZSwgb3B0aW9ucy50aW1lem9uZSkgK1xuICAgICAgICAgICAgJyZ1bnRpbD0nICtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLnJhdy50bywgdHJ1ZSwgb3B0aW9ucy50aW1lem9uZSkgK1xuICAgICAgICAgICAgdGFncyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG4gIH1cblxuICB0YXJnZXRDb250YWluc1RlbXBsYXRlKHRhcmdldDogR3JhcGhpdGVRdWVyeSkge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LmNvbnRhaW5zVGVtcGxhdGUodGFyZ2V0LnRhcmdldCA/PyAnJyk7XG4gIH1cblxuICB0cmFuc2xhdGVUaW1lKGRhdGU6IGFueSwgcm91bmRVcDogYW55LCB0aW1lem9uZTogYW55KSB7XG4gICAgaWYgKGlzU3RyaW5nKGRhdGUpKSB7XG4gICAgICBpZiAoZGF0ZSA9PT0gJ25vdycpIHtcbiAgICAgICAgcmV0dXJuICdub3cnO1xuICAgICAgfSBlbHNlIGlmIChkYXRlLmluZGV4T2YoJ25vdy0nKSA+PSAwICYmIGRhdGUuaW5kZXhPZignLycpID09PSAtMSkge1xuICAgICAgICBkYXRlID0gZGF0ZS5zdWJzdHJpbmcoMyk7XG4gICAgICAgIGRhdGUgPSBkYXRlLnJlcGxhY2UoJ20nLCAnbWluJyk7XG4gICAgICAgIGRhdGUgPSBkYXRlLnJlcGxhY2UoJ00nLCAnbW9uJyk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgfVxuICAgICAgZGF0ZSA9IGRhdGVNYXRoLnBhcnNlKGRhdGUsIHJvdW5kVXAsIHRpbWV6b25lKTtcbiAgICB9XG5cbiAgICAvLyBncmFwaGl0ZScgcyBmcm9tIGZpbHRlciBpcyBleGNsdXNpdmVcbiAgICAvLyBoZXJlIHdlIHN0ZXAgYmFjayBvbmUgbWludXRlIGluIG9yZGVyXG4gICAgLy8gdG8gZ3VhcmFudGVlIHRoYXQgd2UgZ2V0IGFsbCB0aGUgZGF0YSB0aGF0XG4gICAgLy8gZXhpc3RzIGZvciB0aGUgc3BlY2lmaWVkIHJhbmdlXG4gICAgaWYgKHJvdW5kVXApIHtcbiAgICAgIGlmIChkYXRlLmdldCgncycpKSB7XG4gICAgICAgIGRhdGUuYWRkKDEsICdzJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyb3VuZFVwID09PSBmYWxzZSkge1xuICAgICAgaWYgKGRhdGUuZ2V0KCdzJykpIHtcbiAgICAgICAgZGF0ZS5zdWJ0cmFjdCgxLCAncycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRlLnVuaXgoKTtcbiAgfVxuXG4gIG1ldHJpY0ZpbmRRdWVyeShxdWVyeTogc3RyaW5nLCBvcHRpb25hbE9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPE1ldHJpY0ZpbmRWYWx1ZVtdPiB7XG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0gb3B0aW9uYWxPcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gRmlyc3QgYXR0ZW1wdCB0byBjaGVjayBmb3IgdGFnLXJlbGF0ZWQgZnVuY3Rpb25zICh1c2luZyBlbXB0eSB3aWxkY2FyZCBmb3IgaW50ZXJwb2xhdGlvbilcbiAgICBsZXQgaW50ZXJwb2xhdGVkUXVlcnkgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoXG4gICAgICBxdWVyeSxcbiAgICAgIGdldFNlYXJjaEZpbHRlclNjb3BlZFZhcih7IHF1ZXJ5LCB3aWxkY2FyZENoYXI6ICcnLCBvcHRpb25zOiBvcHRpb25hbE9wdGlvbnMgfSlcbiAgICApO1xuXG4gICAgLy8gc3BlY2lhbCBoYW5kbGluZyBmb3IgdGFnX3ZhbHVlcyg8dGFnPlssPGV4cHJlc3Npb24+XSopLCB0aGlzIGlzIHVzZWQgZm9yIHRlbXBsYXRlIHZhcmlhYmxlc1xuICAgIGxldCBhbGxQYXJhbXMgPSBpbnRlcnBvbGF0ZWRRdWVyeS5tYXRjaCgvXnRhZ192YWx1ZXNcXCgoLiopXFwpJC8pO1xuICAgIGxldCBleHByZXNzaW9ucyA9IGFsbFBhcmFtcyA/IGFsbFBhcmFtc1sxXS5zcGxpdCgnLCcpLmZpbHRlcigocCkgPT4gISFwKSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoZXhwcmVzc2lvbnMpIHtcbiAgICAgIG9wdGlvbnMubGltaXQgPSAxMDAwMDtcbiAgICAgIHJldHVybiB0aGlzLmdldFRhZ1ZhbHVlc0F1dG9Db21wbGV0ZShleHByZXNzaW9ucy5zbGljZSgxKSwgZXhwcmVzc2lvbnNbMF0sIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gc3BlY2lhbCBoYW5kbGluZyBmb3IgdGFncyg8ZXhwcmVzc2lvbj5bLDxleHByZXNzaW9uPl0qKSwgdGhpcyBpcyB1c2VkIGZvciB0ZW1wbGF0ZSB2YXJpYWJsZXNcbiAgICBhbGxQYXJhbXMgPSBpbnRlcnBvbGF0ZWRRdWVyeS5tYXRjaCgvXnRhZ3NcXCgoLiopXFwpJC8pO1xuICAgIGV4cHJlc3Npb25zID0gYWxsUGFyYW1zID8gYWxsUGFyYW1zWzFdLnNwbGl0KCcsJykuZmlsdGVyKChwKSA9PiAhIXApIDogdW5kZWZpbmVkO1xuICAgIGlmIChleHByZXNzaW9ucykge1xuICAgICAgb3B0aW9ucy5saW1pdCA9IDEwMDAwO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFnc0F1dG9Db21wbGV0ZShleHByZXNzaW9ucywgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBJZiBubyB0YWctcmVsYXRlZCBxdWVyeSB3YXMgZm91bmQsIHBlcmZvcm0gbWV0cmljLWJhc2VkIHNlYXJjaCAodXNpbmcgKiBhcyB0aGUgd2lsZGNhcmQgZm9yIGludGVycG9sYXRpb24pXG4gICAgbGV0IHVzZUV4cGFuZCA9IHF1ZXJ5Lm1hdGNoKC9eZXhwYW5kXFwoKC4qKVxcKSQvKTtcbiAgICBxdWVyeSA9IHVzZUV4cGFuZCA/IHVzZUV4cGFuZFsxXSA6IHF1ZXJ5O1xuXG4gICAgaW50ZXJwb2xhdGVkUXVlcnkgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoXG4gICAgICBxdWVyeSxcbiAgICAgIGdldFNlYXJjaEZpbHRlclNjb3BlZFZhcih7IHF1ZXJ5LCB3aWxkY2FyZENoYXI6ICcqJywgb3B0aW9uczogb3B0aW9uYWxPcHRpb25zIH0pXG4gICAgKTtcblxuICAgIGxldCByYW5nZTtcbiAgICBpZiAob3B0aW9ucy5yYW5nZSkge1xuICAgICAgcmFuZ2UgPSB7XG4gICAgICAgIGZyb206IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKSxcbiAgICAgICAgdW50aWw6IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLnRvLCB0cnVlLCBvcHRpb25zLnRpbWV6b25lKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHVzZUV4cGFuZCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdE1ldHJpY0V4cGFuZChpbnRlcnBvbGF0ZWRRdWVyeSwgb3B0aW9ucy5yZXF1ZXN0SWQsIHJhbmdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdE1ldHJpY0ZpbmQoaW50ZXJwb2xhdGVkUXVlcnksIG9wdGlvbnMucmVxdWVzdElkLCByYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgbWV0cmljcyBtYXRjaGluZyBnaXZpbmcgcGF0dGVybiB1c2luZyAvbWV0cmljcy9maW5kIGVuZHBvaW50LiBJdCB3aWxsXG4gICAqIHJldHVybiBhbGwgcG9zc2libGUgdmFsdWVzIGF0IHRoZSBsYXN0IGxldmVsIG9mIHRoZSBxdWVyeSwgZm9yIGV4YW1wbGU6XG4gICAqXG4gICAqIG1ldHJpY3M6IHByb2Quc2VydmVycy4wMDEuY3B1LCBwcm9kLnNlcnZlcnMuMDAyLmNwdVxuICAgKiBxdWVyeTogKi5zZXJ2ZXJzLipcbiAgICogcmVzdWx0OiAwMDEsIDAwMlxuICAgKlxuICAgKiBGb3IgbW9yZSBjb21wbGV4IHNlYXJjaGVzIHVzZSByZXF1ZXN0TWV0cmljRXhwYW5kXG4gICAqL1xuICBwcml2YXRlIHJlcXVlc3RNZXRyaWNGaW5kKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgcmVxdWVzdElkOiBzdHJpbmcsXG4gICAgcmFuZ2U/OiB7IGZyb206IGFueTsgdW50aWw6IGFueSB9XG4gICk6IFByb21pc2U8TWV0cmljRmluZFZhbHVlW10+IHtcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvbWV0cmljcy9maW5kJyxcbiAgICAgIHBhcmFtczoge30sXG4gICAgICBkYXRhOiBgcXVlcnk9JHtxdWVyeX1gLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgICAgLy8gZm9yIGNhbmNlbGxhdGlvbnNcbiAgICAgIHJlcXVlc3RJZDogcmVxdWVzdElkLFxuICAgIH07XG5cbiAgICBpZiAocmFuZ2UpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy5mcm9tID0gcmFuZ2UuZnJvbTtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy51bnRpbCA9IHJhbmdlLnVudGlsO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gX21hcChyZXN1bHRzLmRhdGEsIChtZXRyaWMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRleHQ6IG1ldHJpYy50ZXh0LFxuICAgICAgICAgICAgICBleHBhbmRhYmxlOiBtZXRyaWMuZXhwYW5kYWJsZSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggZm9yIG1ldHJpY3MgbWF0Y2hpbmcgZ2l2aW5nIHBhdHRlcm4gdXNpbmcgL21ldHJpY3MvZXhwYW5kIGVuZHBvaW50LlxuICAgKiBUaGUgcmVzdWx0IHdpbGwgY29udGFpbiBhbGwgbWV0cmljcyAod2l0aCBmdWxsIG5hbWUpIG1hdGNoaW5nIHByb3ZpZGVkIHF1ZXJ5LlxuICAgKiBJdCdzIGEgbW9yZSBmbGV4aWJsZSB2ZXJzaW9uIG9mIC9tZXRyaWNzL2ZpbmQgZW5kcG9pbnQgKEBzZWUgcmVxdWVzdE1ldHJpY0ZpbmQpXG4gICAqL1xuICBwcml2YXRlIHJlcXVlc3RNZXRyaWNFeHBhbmQoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgICByYW5nZT86IHsgZnJvbTogYW55OyB1bnRpbDogYW55IH1cbiAgKTogUHJvbWlzZTxNZXRyaWNGaW5kVmFsdWVbXT4ge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL21ldHJpY3MvZXhwYW5kJyxcbiAgICAgIHBhcmFtczogeyBxdWVyeSB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgICAgLy8gZm9yIGNhbmNlbGxhdGlvbnNcbiAgICAgIHJlcXVlc3RJZCxcbiAgICB9O1xuXG4gICAgaWYgKHJhbmdlKSB7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMuZnJvbSA9IHJhbmdlLmZyb207XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMudW50aWwgPSByYW5nZS51bnRpbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIHRoaXMuZG9HcmFwaGl0ZVJlcXVlc3QoaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIF9tYXAocmVzdWx0cy5kYXRhLnJlc3VsdHMsIChtZXRyaWMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRleHQ6IG1ldHJpYyxcbiAgICAgICAgICAgICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRUYWdzKG9wdGlvbmFsT3B0aW9uczogYW55KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG9wdGlvbmFsT3B0aW9ucyB8fCB7fTtcblxuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL3RhZ3MnLFxuICAgICAgLy8gZm9yIGNhbmNlbGxhdGlvbnNcbiAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5yZXF1ZXN0SWQsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLnJhbmdlKSB7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMuZnJvbSA9IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKTtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy51bnRpbCA9IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLnRvLCB0cnVlLCBvcHRpb25zLnRpbWV6b25lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIHRoaXMuZG9HcmFwaGl0ZVJlcXVlc3QoaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIF9tYXAocmVzdWx0cy5kYXRhLCAodGFnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0ZXh0OiB0YWcudGFnLFxuICAgICAgICAgICAgICBpZDogdGFnLmlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0VGFnVmFsdWVzKG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvdGFncy8nICsgdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMua2V5KSxcbiAgICAgIC8vIGZvciBjYW5jZWxsYXRpb25zXG4gICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMucmVxdWVzdElkLFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5yYW5nZSkge1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLmZyb20gPSB0aGlzLnRyYW5zbGF0ZVRpbWUob3B0aW9ucy5yYW5nZS5mcm9tLCBmYWxzZSwgb3B0aW9ucy50aW1lem9uZSk7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMudW50aWwgPSB0aGlzLnRyYW5zbGF0ZVRpbWUob3B0aW9ucy5yYW5nZS50bywgdHJ1ZSwgb3B0aW9ucy50aW1lem9uZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLmRvR3JhcGhpdGVSZXF1ZXN0KGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRzLmRhdGEgJiYgcmVzdWx0cy5kYXRhLnZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIF9tYXAocmVzdWx0cy5kYXRhLnZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdmFsdWUudmFsdWUsXG4gICAgICAgICAgICAgICAgaWQ6IHZhbHVlLmlkLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFRhZ3NBdXRvQ29tcGxldGUoZXhwcmVzc2lvbnM6IGFueVtdLCB0YWdQcmVmaXg6IGFueSwgb3B0aW9uYWxPcHRpb25zPzogYW55KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG9wdGlvbmFsT3B0aW9ucyB8fCB7fTtcblxuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL3RhZ3MvYXV0b0NvbXBsZXRlL3RhZ3MnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGV4cHI6IF9tYXAoZXhwcmVzc2lvbnMsIChleHByZXNzaW9uKSA9PiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoKGV4cHJlc3Npb24gfHwgJycpLnRyaW0oKSkpLFxuICAgICAgfSxcbiAgICAgIC8vIGZvciBjYW5jZWxsYXRpb25zXG4gICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMucmVxdWVzdElkLFxuICAgIH07XG5cbiAgICBpZiAodGFnUHJlZml4KSB7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMudGFnUHJlZml4ID0gdGFnUHJlZml4O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5saW1pdCkge1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLmxpbWl0ID0gb3B0aW9ucy5saW1pdDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucmFuZ2UpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy5mcm9tID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UuZnJvbSwgZmFsc2UsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLnVudGlsID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgIH1cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLmRvR3JhcGhpdGVSZXF1ZXN0KGh0dHBPcHRpb25zKS5waXBlKG1hcFRvVGFncygpKSk7XG4gIH1cblxuICBnZXRUYWdWYWx1ZXNBdXRvQ29tcGxldGUoZXhwcmVzc2lvbnM6IGFueVtdLCB0YWc6IGFueSwgdmFsdWVQcmVmaXg6IGFueSwgb3B0aW9uYWxPcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBvcHRpb25zID0gb3B0aW9uYWxPcHRpb25zIHx8IHt9O1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvdGFncy9hdXRvQ29tcGxldGUvdmFsdWVzJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBleHByOiBfbWFwKGV4cHJlc3Npb25zLCAoZXhwcmVzc2lvbikgPT4gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKChleHByZXNzaW9uIHx8ICcnKS50cmltKCkpKSxcbiAgICAgICAgdGFnOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoKHRhZyB8fCAnJykudHJpbSgpKSxcbiAgICAgIH0sXG4gICAgICAvLyBmb3IgY2FuY2VsbGF0aW9uc1xuICAgICAgcmVxdWVzdElkOiBvcHRpb25zLnJlcXVlc3RJZCxcbiAgICB9O1xuXG4gICAgaWYgKHZhbHVlUHJlZml4KSB7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMudmFsdWVQcmVmaXggPSB2YWx1ZVByZWZpeDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubGltaXQpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy5saW1pdCA9IG9wdGlvbnMubGltaXQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJhbmdlKSB7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMuZnJvbSA9IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKTtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy51bnRpbCA9IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLnRvLCB0cnVlLCBvcHRpb25zLnRpbWV6b25lKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20odGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShtYXBUb1RhZ3MoKSkpO1xuICB9XG5cbiAgZ2V0VmVyc2lvbihvcHRpb25hbE9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBvcHRpb25hbE9wdGlvbnMgfHwge307XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvdmVyc2lvbicsXG4gICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMucmVxdWVzdElkLFxuICAgIH07XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIHRoaXMuZG9HcmFwaGl0ZVJlcXVlc3QoaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMuZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgc2VtdmVyID0gbmV3IFNlbVZlcnNpb24ocmVzdWx0cy5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBzZW12ZXIuaXNWYWxpZCgpID8gcmVzdWx0cy5kYXRhIDogJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvZignJyk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZUZ1bmNJbnN0YW5jZShmdW5jRGVmOiBhbnksIG9wdGlvbnM/OiBhbnkpOiBGdW5jSW5zdGFuY2Uge1xuICAgIHJldHVybiBnZnVuYy5jcmVhdGVGdW5jSW5zdGFuY2UoZnVuY0RlZiwgb3B0aW9ucywgdGhpcy5mdW5jRGVmcyk7XG4gIH1cblxuICBnZXRGdW5jRGVmKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBnZnVuYy5nZXRGdW5jRGVmKG5hbWUsIHRoaXMuZnVuY0RlZnMpO1xuICB9XG5cbiAgd2FpdEZvckZ1bmNEZWZzTG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEZ1bmNEZWZzKCk7XG4gIH1cblxuICBnZXRGdW5jRGVmcygpIHtcbiAgICBpZiAodGhpcy5mdW5jRGVmc1Byb21pc2UgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmZ1bmNEZWZzUHJvbWlzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25JbmRleCh0aGlzLmdyYXBoaXRlVmVyc2lvbikpIHtcbiAgICAgIHRoaXMuZnVuY0RlZnMgPSBnZnVuYy5nZXRGdW5jRGVmcyh0aGlzLmdyYXBoaXRlVmVyc2lvbik7XG4gICAgICB0aGlzLmZ1bmNEZWZzUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLmZ1bmNEZWZzKTtcbiAgICAgIHJldHVybiB0aGlzLmZ1bmNEZWZzUHJvbWlzZTtcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvZnVuY3Rpb25zJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLmRvR3JhcGhpdGVSZXF1ZXN0KGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRzLnN0YXR1cyAhPT0gMjAwIHx8IHR5cGVvZiByZXN1bHRzLmRhdGEgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdHMuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgLy8gRml4IGZvciBhIEdyYXBoaXRlIGJ1ZzogaHR0cHM6Ly9naXRodWIuY29tL2dyYXBoaXRlLXByb2plY3QvZ3JhcGhpdGUtd2ViL2lzc3Vlcy8yNjA5XG4gICAgICAgICAgICAgIC8vIFRoZXJlIGlzIGEgZml4IGZvciBpdCBodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhpdGUtcHJvamVjdC9ncmFwaGl0ZS13ZWIvcHVsbC8yNjEyIGJ1dFxuICAgICAgICAgICAgICAvLyBpdCB3YXMgbWVyZ2VkIHRvIG1hc3RlciBpbiBKdWx5IDIwMjAgYnV0IGl0IGhhcyBuZXZlciBiZWVuIHJlbGVhc2VkICh0aGUgbGFzdCBHcmFwaGl0ZVxuICAgICAgICAgICAgICAvLyByZWxlYXNlIHdhcyAxLjEuNyAtIE1hcmNoIDIwMjApLiBUaGUgYnVnIHdhcyBpbnRyb2R1Y2VkIGluIEdyYXBoaXRlIDEuMS43LCBpbiB2ZXJzaW9uc1xuICAgICAgICAgICAgICAvLyAxLjEuMCAtIDEuMS42IC9mdW5jdGlvbnMgZW5kcG9pbnQgcmV0dXJucyBhIHZhbGlkIEpTT05cbiAgICAgICAgICAgICAgY29uc3QgZml4ZWREYXRhID0gSlNPTi5wYXJzZShyZXN1bHRzLmRhdGEucmVwbGFjZSgvXCJkZWZhdWx0XCI6ID9JbmZpbml0eS9nLCAnXCJkZWZhdWx0XCI6IDFlOTk5OScpKTtcbiAgICAgICAgICAgICAgdGhpcy5mdW5jRGVmcyA9IGdmdW5jLnBhcnNlRnVuY0RlZnMoZml4ZWREYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZnVuY0RlZnMgPSBnZnVuYy5nZXRGdW5jRGVmcyh0aGlzLmdyYXBoaXRlVmVyc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY0RlZnMgPSBnZnVuYy5wYXJzZUZ1bmNEZWZzKHJlc3VsdHMuZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiAvZnVuY3Rpb25zIGVuZHBvaW50IHJldHVybnMgYXBwbGljYXRpb24vanNvbiByZXNwb25zZSBidXQgY29udGFpbmluZyBpbnZhbGlkIEpTT04gdGhlIGZpeCBhYm92ZVxuICAgICAgICAgIC8vIHdvbnQnIGJlIHRyaWdnZXJlZCBkdWUgdG8gdGhlIGNoYW5nZXMgaW4gaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvZ3JhZmFuYS9wdWxsLzQ1NTk4IChwYXJzaW5nIGhhcHBlbnNcbiAgICAgICAgICAvLyBpbiBmZXRjaCBhbmQgR3JhcGhpdGUgcmVjZWl2ZXMgYW4gZW1wdHkgb2JqZWN0IGFuZCBubyBlcnJvcikuIEluIHN1Y2ggY2FzZXMsIHdoZW4gdGhlIHByb3ZpZGVkIEpTT05cbiAgICAgICAgICAvLyBzZWVtcyBlbXB0eSB3ZSBmYWxsYmFjayB0byB0aGUgaGFyZGNvZGVkIGxpc3Qgb2YgZnVuY3Rpb25zLlxuICAgICAgICAgIC8vIFNlZSBhbHNvOiBodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9ncmFmYW5hL2lzc3Vlcy80NTk0OFxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZ1bmNEZWZzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY0RlZnMgPSBnZnVuYy5nZXRGdW5jRGVmcyh0aGlzLmdyYXBoaXRlVmVyc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmNEZWZzO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoaW5nIGdyYXBoaXRlIGZ1bmN0aW9ucyBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICB0aGlzLmZ1bmNEZWZzID0gZ2Z1bmMuZ2V0RnVuY0RlZnModGhpcy5ncmFwaGl0ZVZlcnNpb24pO1xuICAgICAgICAgIHJldHVybiBvZih0aGlzLmZ1bmNEZWZzKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdGVzdERhdGFzb3VyY2UoKSB7XG4gICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICBwYW5lbElkOiAzLFxuICAgICAgcmFuZ2VSYXc6IHsgZnJvbTogJ25vdy0xaCcsIHRvOiAnbm93JyB9LFxuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgcmF3OiB7IGZyb206ICdub3ctMWgnLCB0bzogJ25vdycgfSxcbiAgICAgIH0sXG4gICAgICB0YXJnZXRzOiBbeyB0YXJnZXQ6ICdjb25zdGFudExpbmUoMTAwKScgfV0sXG4gICAgICBtYXhEYXRhUG9pbnRzOiAzMDAsXG4gICAgfSBhcyB1bmtub3duIGFzIERhdGFRdWVyeVJlcXVlc3Q8R3JhcGhpdGVRdWVyeT47XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLnF1ZXJ5KHF1ZXJ5KSkudGhlbigoKSA9PiAoeyBzdGF0dXM6ICdzdWNjZXNzJywgbWVzc2FnZTogJ0RhdGEgc291cmNlIGlzIHdvcmtpbmcnIH0pKTtcbiAgfVxuXG4gIGRvR3JhcGhpdGVSZXF1ZXN0KG9wdGlvbnM6IHtcbiAgICBtZXRob2Q/OiBzdHJpbmc7XG4gICAgdXJsOiBhbnk7XG4gICAgcmVxdWVzdElkPzogYW55O1xuICAgIHdpdGhDcmVkZW50aWFscz86IGFueTtcbiAgICBoZWFkZXJzPzogYW55O1xuICAgIGluc3BlY3Q/OiBhbnk7XG4gIH0pIHtcbiAgICBpZiAodGhpcy5iYXNpY0F1dGggfHwgdGhpcy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmFzaWNBdXRoKSB7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuYmFzaWNBdXRoO1xuICAgIH1cblxuICAgIG9wdGlvbnMudXJsID0gdGhpcy51cmwgKyBvcHRpb25zLnVybDtcbiAgICBvcHRpb25zLmluc3BlY3QgPSB7IHR5cGU6ICdncmFwaGl0ZScgfTtcblxuICAgIHJldHVybiBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5mZXRjaChvcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVkdWNlRXJyb3IoZXJyKSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgYnVpbGRHcmFwaGl0ZVBhcmFtcyhvcHRpb25zOiBhbnksIHNjb3BlZFZhcnM/OiBTY29wZWRWYXJzKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGdyYXBoaXRlT3B0aW9ucyA9IFsnZnJvbScsICd1bnRpbCcsICdyYXdEYXRhJywgJ2Zvcm1hdCcsICdtYXhEYXRhUG9pbnRzJywgJ2NhY2hlVGltZW91dCddO1xuICAgIGNvbnN0IGNsZWFuT3B0aW9ucyA9IFtdLFxuICAgICAgdGFyZ2V0czogYW55ID0ge307XG4gICAgbGV0IHRhcmdldCwgdGFyZ2V0VmFsdWUsIGk7XG4gICAgY29uc3QgcmVnZXggPSAvXFwjKFtBLVpdKS9nO1xuICAgIGNvbnN0IGludGVydmFsRm9ybWF0Rml4UmVnZXggPSAvJyhcXGQrKW0nL2dpO1xuICAgIGxldCBoYXNUYXJnZXRzID0gZmFsc2U7XG5cbiAgICBvcHRpb25zWydmb3JtYXQnXSA9ICdqc29uJztcblxuICAgIGZ1bmN0aW9uIGZpeEludGVydmFsRm9ybWF0KG1hdGNoOiBhbnkpIHtcbiAgICAgIHJldHVybiBtYXRjaC5yZXBsYWNlKCdtJywgJ21pbicpLnJlcGxhY2UoJ00nLCAnbW9uJyk7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG9wdGlvbnMudGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXRzW2ldO1xuICAgICAgaWYgKCF0YXJnZXQudGFyZ2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRhcmdldC5yZWZJZCkge1xuICAgICAgICB0YXJnZXQucmVmSWQgPSB0aGlzLl9zZXJpZXNSZWZMZXR0ZXJzW2ldO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXRWYWx1ZSA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSh0YXJnZXQudGFyZ2V0LCBzY29wZWRWYXJzKTtcbiAgICAgIHRhcmdldFZhbHVlID0gdGFyZ2V0VmFsdWUucmVwbGFjZShpbnRlcnZhbEZvcm1hdEZpeFJlZ2V4LCBmaXhJbnRlcnZhbEZvcm1hdCk7XG4gICAgICB0YXJnZXRzW3RhcmdldC5yZWZJZF0gPSB0YXJnZXRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXN0ZWRTZXJpZXNSZWdleFJlcGxhY2VyKG1hdGNoOiBhbnksIGcxOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgIHJldHVybiB0YXJnZXRzW2cxXSB8fCBtYXRjaDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy50YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXQgPSBvcHRpb25zLnRhcmdldHNbaV07XG4gICAgICBpZiAoIXRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldFZhbHVlID0gdGFyZ2V0c1t0YXJnZXQucmVmSWRdO1xuICAgICAgdGFyZ2V0VmFsdWUgPSB0YXJnZXRWYWx1ZS5yZXBsYWNlKHJlZ2V4LCBuZXN0ZWRTZXJpZXNSZWdleFJlcGxhY2VyKTtcbiAgICAgIHRhcmdldHNbdGFyZ2V0LnJlZklkXSA9IHRhcmdldFZhbHVlO1xuXG4gICAgICBpZiAoIXRhcmdldC5oaWRlKSB7XG4gICAgICAgIGhhc1RhcmdldHMgPSB0cnVlO1xuICAgICAgICBjbGVhbk9wdGlvbnMucHVzaCgndGFyZ2V0PScgKyBlbmNvZGVVUklDb21wb25lbnQodGFyZ2V0VmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlYWNoKG9wdGlvbnMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBpZiAoaW5kZXhPZihncmFwaGl0ZU9wdGlvbnMsIGtleSkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjbGVhbk9wdGlvbnMucHVzaChrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaGFzVGFyZ2V0cykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBjbGVhbk9wdGlvbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNUYWdzKHZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNWZXJzaW9uR3RPckVxKHZlcnNpb24sICcxLjEnKTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNGdW5jdGlvbkluZGV4KHZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNWZXJzaW9uR3RPckVxKHZlcnNpb24sICcxLjEnKTtcbn1cblxuZnVuY3Rpb24gbWFwVG9UYWdzKCk6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBBcnJheTx7IHRleHQ6IHN0cmluZyB9Pj4ge1xuICByZXR1cm4gcGlwZShcbiAgICBtYXAoKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdHMuZGF0YSkge1xuICAgICAgICByZXR1cm4gX21hcChyZXN1bHRzLmRhdGEsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IHRleHQ6IHZhbHVlIH07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG59XG4iLCJpbXBvcnQgeyBhc3NpZ24sIGVhY2gsIGZpbHRlciwgZm9yRWFjaCwgZ2V0LCBpbmNsdWRlcywgaXNTdHJpbmcsIGxhc3QsIG1hcCwgdG9TdHJpbmcsIGlzRmluaXRlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzVmVyc2lvbkd0T3JFcSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL3ZlcnNpb24nO1xuaW1wb3J0IHsgSW50ZXJwb2xhdGVGdW5jdGlvbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgdHlwZSBQYXJhbURlZiA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIG9wdGlvbnM/OiBBcnJheTxzdHJpbmcgfCBudW1iZXI+O1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIG9wdGlvbmFsPzogYm9vbGVhbjtcbiAgdmVyc2lvbj86IHN0cmluZztcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY0RlZiB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFyYW1zOiBQYXJhbURlZltdO1xuICBkZWZhdWx0UGFyYW1zOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+O1xuICBjYXRlZ29yeT86IHN0cmluZztcbiAgc2hvcnROYW1lPzogYW55O1xuICBmYWtlPzogYm9vbGVhbjtcbiAgdmVyc2lvbj86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBmdW5jdGlvbiB3YXMgbm90IGZvdW5kIG9uIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBmdW5jdGlvbiBkZXNjcmlwdGlvbnMuXG4gICAqL1xuICB1bmtub3duPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgRnVuY0RlZnMgPSB7XG4gIFtmdW5jdGlvbk5hbWUgaW4gc3RyaW5nXTogRnVuY0RlZjtcbn07XG5cbmNvbnN0IGluZGV4OiBGdW5jRGVmcyA9IHt9O1xuXG5mdW5jdGlvbiBhZGRGdW5jRGVmKGZ1bmNEZWY6IFBhcnRpYWw8RnVuY0RlZj4gJiB7IG5hbWU6IHN0cmluZzsgY2F0ZWdvcnk6IHN0cmluZyB9KSB7XG4gIGZ1bmNEZWYucGFyYW1zID0gZnVuY0RlZi5wYXJhbXMgfHwgW107XG4gIGZ1bmNEZWYuZGVmYXVsdFBhcmFtcyA9IGZ1bmNEZWYuZGVmYXVsdFBhcmFtcyB8fCBbXTtcblxuICBpbmRleFtmdW5jRGVmLm5hbWVdID0gZnVuY0RlZiBhcyBGdW5jRGVmO1xuICBpZiAoZnVuY0RlZi5zaG9ydE5hbWUpIHtcbiAgICBpbmRleFtmdW5jRGVmLnNob3J0TmFtZV0gPSBmdW5jRGVmIGFzIEZ1bmNEZWY7XG4gIH1cbn1cblxuY29uc3Qgb3B0aW9uYWxTZXJpZXNSZWZBcmdzID0gW3sgbmFtZTogJ290aGVyJywgdHlwZTogJ3ZhbHVlX29yX3NlcmllcycsIG9wdGlvbmFsOiB0cnVlLCBtdWx0aXBsZTogdHJ1ZSB9XTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzY2FsZVRvU2Vjb25kcycsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnc2Vjb25kcycsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdwZXJTZWNvbmQnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ21heCB2YWx1ZScsIHR5cGU6ICdpbnQnLCBvcHRpb25hbDogdHJ1ZSB9XSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdob2x0V2ludGVyc0ZvcmVjYXN0JyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaG9sdFdpbnRlcnNDb25maWRlbmNlQmFuZHMnLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2RlbHRhJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2hvbHRXaW50ZXJzQWJlcnJhdGlvbicsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnZGVsdGEnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzNdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnblBlcmNlbnRpbGUnLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW3sgbmFtZTogJ050aCBwZXJjZW50aWxlJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs5NV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdkaWZmU2VyaWVzJyxcbiAgcGFyYW1zOiBvcHRpb25hbFNlcmllc1JlZkFyZ3MsXG4gIGRlZmF1bHRQYXJhbXM6IFsnI0EnXSxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3N0ZGRldlNlcmllcycsXG4gIHBhcmFtczogb3B0aW9uYWxTZXJpZXNSZWZBcmdzLFxuICBkZWZhdWx0UGFyYW1zOiBbJyddLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZGl2aWRlU2VyaWVzJyxcbiAgcGFyYW1zOiBvcHRpb25hbFNlcmllc1JlZkFyZ3MsXG4gIGRlZmF1bHRQYXJhbXM6IFsnI0EnXSxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ211bHRpcGx5U2VyaWVzJyxcbiAgcGFyYW1zOiBvcHRpb25hbFNlcmllc1JlZkFyZ3MsXG4gIGRlZmF1bHRQYXJhbXM6IFsnI0EnXSxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2FzUGVyY2VudCcsXG4gIHBhcmFtczogb3B0aW9uYWxTZXJpZXNSZWZBcmdzLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJ10sXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdncm91cCcsXG4gIHBhcmFtczogb3B0aW9uYWxTZXJpZXNSZWZBcmdzLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJywgJyNCJ10sXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzdW1TZXJpZXMnLFxuICBzaG9ydE5hbWU6ICdzdW0nLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxuICBwYXJhbXM6IG9wdGlvbmFsU2VyaWVzUmVmQXJncyxcbiAgZGVmYXVsdFBhcmFtczogWycnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2F2ZXJhZ2VTZXJpZXMnLFxuICBzaG9ydE5hbWU6ICdhdmcnLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxuICBwYXJhbXM6IG9wdGlvbmFsU2VyaWVzUmVmQXJncyxcbiAgZGVmYXVsdFBhcmFtczogWycnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3JhbmdlT2ZTZXJpZXMnLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncGVyY2VudGlsZU9mU2VyaWVzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH0sXG4gICAgeyBuYW1lOiAnaW50ZXJwb2xhdGUnLCB0eXBlOiAnYm9vbGVhbicsIG9wdGlvbnM6IFsndHJ1ZScsICdmYWxzZSddIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFs5NSwgJ2ZhbHNlJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzdW1TZXJpZXNXaXRoV2lsZGNhcmRzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbm9kZScsIHR5cGU6ICdpbnQnLCBtdWx0aXBsZTogdHJ1ZSB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzNdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWF4U2VyaWVzJyxcbiAgc2hvcnROYW1lOiAnbWF4JyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21pblNlcmllcycsXG4gIHNob3J0TmFtZTogJ21pbicsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhdmVyYWdlU2VyaWVzV2l0aFdpbGRjYXJkcycsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW3sgbmFtZTogJ25vZGUnLCB0eXBlOiAnaW50JywgbXVsdGlwbGU6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2FsaWFzJyxcbiAgY2F0ZWdvcnk6ICdBbGlhcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2FsaWFzJywgdHlwZTogJ3N0cmluZycgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnYWxpYXMnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2FsaWFzU3ViJyxcbiAgY2F0ZWdvcnk6ICdBbGlhcycsXG4gIHBhcmFtczogW1xuICAgIHsgbmFtZTogJ3NlYXJjaCcsIHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgeyBuYW1lOiAncmVwbGFjZScsIHR5cGU6ICdzdHJpbmcnIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnJywgJ1xcXFwxJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdjb25zb2xpZGF0ZUJ5JyxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydzdW0nLCAnYXZlcmFnZScsICdtaW4nLCAnbWF4J10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydtYXgnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2N1bXVsYXRpdmUnLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2dyb3VwQnlOb2RlJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ25vZGUnLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICBvcHRpb25zOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDEyXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdmdW5jdGlvbicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnc3VtJywgJ2F2ZycsICdtYXhTZXJpZXMnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbMywgJ3N1bSddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYWxpYXNCeU5vZGUnLFxuICBjYXRlZ29yeTogJ0FsaWFzJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ25vZGUnLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICBvcHRpb25zOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDEyXSxcbiAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3N1YnN0cicsXG4gIGNhdGVnb3J5OiAnU3BlY2lhbCcsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdzdGFydCcsXG4gICAgICB0eXBlOiAnaW50JyxcbiAgICAgIG9wdGlvbnM6IFstNiwgLTUsIC00LCAtMywgLTIsIC0xLCAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTJdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3N0b3AnLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICBvcHRpb25zOiBbLTYsIC01LCAtNCwgLTMsIC0yLCAtMSwgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDEyXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbMCwgMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzb3J0QnlOYW1lJyxcbiAgY2F0ZWdvcnk6ICdTb3J0aW5nJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ25hdHVyYWwnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgb3B0aW9uczogWyd0cnVlJywgJ2ZhbHNlJ10sXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2ZhbHNlJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzb3J0QnlNYXhpbWEnLFxuICBjYXRlZ29yeTogJ1NvcnRpbmcnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc29ydEJ5TWluaW1hJyxcbiAgY2F0ZWdvcnk6ICdTb3J0aW5nJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3NvcnRCeVRvdGFsJyxcbiAgY2F0ZWdvcnk6ICdTb3J0aW5nJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2FsaWFzQnlNZXRyaWMnLFxuICBjYXRlZ29yeTogJ0FsaWFzJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3JhbmRvbVdhbGsnLFxuICBmYWtlOiB0cnVlLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduYW1lJywgdHlwZTogJ3N0cmluZycgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsncmFuZG9tV2FsayddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnY291bnRTZXJpZXMnLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnY29uc3RhbnRMaW5lJyxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzEwXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2NhY3RpU3R5bGUnLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAna2VlcExhc3RWYWx1ZScsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMTAwXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2NoYW5nZWQnLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3NjYWxlJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdmYWN0b3InLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzFdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdhbW91bnQnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzEwXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3RyYW5zZm9ybU51bGwnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2Ftb3VudCcsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdpbnRlZ3JhbCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2Rlcml2YXRpdmUnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdub25OZWdhdGl2ZURlcml2YXRpdmUnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ21heCB2YWx1ZSBvciAwJywgdHlwZTogJ2ludCcsIG9wdGlvbmFsOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJyddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAndGltZVNoaWZ0JyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnYW1vdW50JyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWycxaCcsICc2aCcsICcxMmgnLCAnMWQnLCAnMmQnLCAnN2QnLCAnMTRkJywgJzMwZCddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnMWQnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3RpbWVTdGFjaycsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3RpbWVTaGlmdFVuaXQnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJzFoJywgJzZoJywgJzEyaCcsICcxZCcsICcyZCcsICc3ZCcsICcxNGQnLCAnMzBkJ10sXG4gICAgfSxcbiAgICB7IG5hbWU6ICd0aW1lU2hpZnRTdGFydCcsIHR5cGU6ICdpbnQnIH0sXG4gICAgeyBuYW1lOiAndGltZVNoaWZ0RW5kJywgdHlwZTogJ2ludCcgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWycxZCcsIDAsIDddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc3VtbWFyaXplJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdpbnRlcnZhbCcsIHR5cGU6ICdzdHJpbmcnIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmMnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJ3N1bScsICdhdmcnLCAnbWluJywgJ21heCcsICdsYXN0J10sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYWxpZ25Ub0Zyb20nLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICBvcHRpb25zOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzFoJywgJ3N1bScsICdmYWxzZSddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc21hcnRTdW1tYXJpemUnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW1xuICAgIHsgbmFtZTogJ2ludGVydmFsJywgdHlwZTogJ3N0cmluZycgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZnVuYycsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnc3VtJywgJ2F2ZycsICdtaW4nLCAnbWF4JywgJ2xhc3QnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzFoJywgJ3N1bSddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYWJzb2x1dGUnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdoaXRjb3VudCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnaW50ZXJ2YWwnLCB0eXBlOiAnc3RyaW5nJyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWycxMHMnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2xvZycsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnYmFzZScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJzEwJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhdmVyYWdlQWJvdmUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsyNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhdmVyYWdlQmVsb3cnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsyNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdjdXJyZW50QWJvdmUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsyNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdjdXJyZW50QmVsb3cnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsyNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtYXhpbXVtQWJvdmUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICd2YWx1ZScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtYXhpbXVtQmVsb3cnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICd2YWx1ZScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtaW5pbXVtQWJvdmUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICd2YWx1ZScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtaW5pbXVtQmVsb3cnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICd2YWx1ZScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdsaW1pdCcsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbW9zdERldmlhbnQnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdleGNsdWRlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnZXhjbHVkZScsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2V4Y2x1ZGUnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2hpZ2hlc3RDdXJyZW50JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnY291bnQnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaGlnaGVzdE1heCcsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2NvdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2xvd2VzdEN1cnJlbnQnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdjb3VudCcsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtb3ZpbmdBdmVyYWdlJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnd2luZG93U2l6ZScsXG4gICAgICB0eXBlOiAnaW50X29yX2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnNScsICc3JywgJzEwJywgJzVtaW4nLCAnMTBtaW4nLCAnMzBtaW4nLCAnMWhvdXInXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbMTBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbW92aW5nTWVkaWFuJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnd2luZG93U2l6ZScsXG4gICAgICB0eXBlOiAnaW50X29yX2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnNScsICc3JywgJzEwJywgJzVtaW4nLCAnMTBtaW4nLCAnMzBtaW4nLCAnMWhvdXInXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzUnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3N0ZGV2JyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfSxcbiAgICB7IG5hbWU6ICd0b2xlcmFuY2UnLCB0eXBlOiAnaW50JyB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbNSwgMC4xXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2hpZ2hlc3RBdmVyYWdlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnY291bnQnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbG93ZXN0QXZlcmFnZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2NvdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3JlbW92ZUFib3ZlUGVyY2VudGlsZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIERhdGEnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3JlbW92ZUFib3ZlVmFsdWUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBEYXRhJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVCZWxvd1BlcmNlbnRpbGUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBEYXRhJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVCZWxvd1ZhbHVlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgRGF0YScsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAndXNlU2VyaWVzQWJvdmUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICd2YWx1ZScsIHR5cGU6ICdpbnQnIH0sXG4gICAgeyBuYW1lOiAnc2VhcmNoJywgdHlwZTogJ3N0cmluZycgfSxcbiAgICB7IG5hbWU6ICdyZXBsYWNlJywgdHlwZTogJ3N0cmluZycgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzAsICdzZWFyY2gnLCAncmVwbGFjZSddLFxufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBHcmFwaGl0ZSAxLjAueCAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhZ2dyZWdhdGVMaW5lJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZnVuYycsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnc3VtJywgJ2F2ZycsICdtaW4nLCAnbWF4JywgJ2xhc3QnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2F2ZyddLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2F2ZXJhZ2VPdXRzaWRlUGVyY2VudGlsZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzk1XSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdkZWxheScsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnc3RlcHMnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzFdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2V4cG9uZW50aWFsTW92aW5nQXZlcmFnZScsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3dpbmRvd1NpemUnLFxuICAgICAgdHlwZTogJ2ludF9vcl9pbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzUnLCAnNycsICcxMCcsICc1bWluJywgJzEwbWluJywgJzMwbWluJywgJzFob3VyJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzEwXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdmYWxsYmFja1NlcmllcycsXG4gIGNhdGVnb3J5OiAnU3BlY2lhbCcsXG4gIHBhcmFtczogW3sgbmFtZTogJ2ZhbGxiYWNrJywgdHlwZTogJ3N0cmluZycgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnY29uc3RhbnRMaW5lKDApJ10sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZ3JlcCcsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2dyZXAnLCB0eXBlOiAnc3RyaW5nJyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWydncmVwJ10sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZ3JvdXBCeU5vZGVzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydzdW0nLCAnYXZnJywgJ21heFNlcmllcyddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ25vZGUnLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICBvcHRpb25zOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDEyXSxcbiAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnc3VtJywgM10sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaW50ZWdyYWxCeUludGVydmFsJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnaW50ZXJ2YWxVbml0JyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWycxaCcsICc2aCcsICcxMmgnLCAnMWQnLCAnMmQnLCAnN2QnLCAnMTRkJywgJzMwZCddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnMWQnXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdpbnRlcnBvbGF0ZScsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbGltaXQnLCB0eXBlOiAnaW50Jywgb3B0aW9uYWw6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2ludmVydCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdpc05vbk51bGwnLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2xpbmVhclJlZ3Jlc3Npb24nLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdzdGFydFNvdXJjZUF0JyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWyctMWgnLCAnLTZoJywgJy0xMmgnLCAnLTFkJywgJy0yZCcsICctN2QnLCAnLTE0ZCcsICctMzBkJ10sXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdlbmRTb3VyY2VBdCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnLTFoJywgJy02aCcsICctMTJoJywgJy0xZCcsICctMmQnLCAnLTdkJywgJy0xNGQnLCAnLTMwZCddLFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWFwU2VyaWVzJyxcbiAgc2hvcnROYW1lOiAnbWFwJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbm9kZScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbM10sXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbW92aW5nTWluJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnd2luZG93U2l6ZScsXG4gICAgICB0eXBlOiAnaW50X29yX2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnNScsICc3JywgJzEwJywgJzVtaW4nLCAnMTBtaW4nLCAnMzBtaW4nLCAnMWhvdXInXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbMTBdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21vdmluZ01heCcsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3dpbmRvd1NpemUnLFxuICAgICAgdHlwZTogJ2ludF9vcl9pbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzUnLCAnNycsICcxMCcsICc1bWluJywgJzEwbWluJywgJzMwbWluJywgJzFob3VyJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzEwXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtb3ZpbmdTdW0nLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd3aW5kb3dTaXplJyxcbiAgICAgIHR5cGU6ICdpbnRfb3JfaW50ZXJ2YWwnLFxuICAgICAgb3B0aW9uczogWyc1JywgJzcnLCAnMTAnLCAnNW1pbicsICcxMG1pbicsICczMG1pbicsICcxaG91ciddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbXVsdGlwbHlTZXJpZXNXaXRoV2lsZGNhcmRzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl0sXG4gICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbMl0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnb2Zmc2V0VG9aZXJvJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3BvdycsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnZmFjdG9yJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncG93U2VyaWVzJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IG9wdGlvbmFsU2VyaWVzUmVmQXJncyxcbiAgZGVmYXVsdFBhcmFtczogWycnXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZWR1Y2VTZXJpZXMnLFxuICBzaG9ydE5hbWU6ICdyZWR1Y2UnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ2FzUGVyY2VudCcsICdkaWZmU2VyaWVzJywgJ2RpdmlkZVNlcmllcyddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3JlZHVjZU5vZGUnLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICBvcHRpb25zOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTNdLFxuICAgIH0sXG4gICAgeyBuYW1lOiAncmVkdWNlTWF0Y2hlcnMnLCB0eXBlOiAnc3RyaW5nJywgbXVsdGlwbGU6IHRydWUgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydhc1BlcmNlbnQnLCAyLCAndXNlZF9ieXRlcyddLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3JlbW92ZUJldHdlZW5QZXJjZW50aWxlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbOTVdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3JlbW92ZUVtcHR5U2VyaWVzJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzcXVhcmVSb290JyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3RpbWVTbGljZScsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3N0YXJ0U2xpY2VBdCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnLTFoJywgJy02aCcsICctMTJoJywgJy0xZCcsICctMmQnLCAnLTdkJywgJy0xNGQnLCAnLTMwZCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2VuZFNsaWNlQXQnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJy0xaCcsICctNmgnLCAnLTEyaCcsICctMWQnLCAnLTJkJywgJy03ZCcsICctMTRkJywgJy0zMGQnXSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnLTFoJ10sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnd2VpZ2h0ZWRBdmVyYWdlJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAnb3RoZXInLCB0eXBlOiAndmFsdWVfb3Jfc2VyaWVzJywgb3B0aW9uYWw6IHRydWUgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbm9kZScsXG4gICAgICB0eXBlOiAnaW50JyxcbiAgICAgIG9wdGlvbnM6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTJdLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnI0EnLCA0XSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzZXJpZXNCeVRhZycsXG4gIGNhdGVnb3J5OiAnU3BlY2lhbCcsXG4gIHBhcmFtczogW3sgbmFtZTogJ3RhZ0V4cHJlc3Npb24nLCB0eXBlOiAnc3RyaW5nJywgbXVsdGlwbGU6IHRydWUgfV0sXG4gIHZlcnNpb246ICcxLjEnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZ3JvdXBCeVRhZ3MnLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ3N1bScsICdhdmcnLCAnbWF4U2VyaWVzJ10sXG4gICAgfSxcbiAgICB7IG5hbWU6ICd0YWcnLCB0eXBlOiAnc3RyaW5nJywgbXVsdGlwbGU6IHRydWUgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydzdW0nLCAndGFnJ10sXG4gIHZlcnNpb246ICcxLjEnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYWxpYXNCeVRhZ3MnLFxuICBjYXRlZ29yeTogJ0FsaWFzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndGFnJywgdHlwZTogJ3N0cmluZycsIG11bHRpcGxlOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3RhZyddLFxuICB2ZXJzaW9uOiAnMS4xJyxcbn0pO1xuXG5mdW5jdGlvbiBpc1ZlcnNpb25SZWxhdGVkRnVuY3Rpb24ob2JqOiB7IHZlcnNpb24/OiBzdHJpbmcgfSwgZ3JhcGhpdGVWZXJzaW9uOiBzdHJpbmcpIHtcbiAgcmV0dXJuICFvYmoudmVyc2lvbiB8fCBpc1ZlcnNpb25HdE9yRXEoZ3JhcGhpdGVWZXJzaW9uLCBvYmoudmVyc2lvbik7XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jSW5zdGFuY2Uge1xuICBkZWY6IEZ1bmNEZWY7XG4gIHBhcmFtczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcbiAgdGV4dDogYW55O1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGlzIGZ1bmN0aW9uIHdhcyBqdXN0IGFkZGVkIGFuZCBub3QgZWRpdGVkIHlldC4gSXQncyB1c2VkIHRvIGZvY3VzIG9uIGZpcnN0XG4gICAqIGZ1bmN0aW9uIHBhcmFtIHRvIGVkaXQgaXQgc3RyYWlnaHQgYXdheSBhZnRlciBhZGRpbmcgYSBmdW5jdGlvbi5cbiAgICovXG4gIGRlY2xhcmUgYWRkZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBIaWRkZW4gZnVuY3Rpb25zIGFyZSBub3QgZGlzcGxheWVkIGluIFVJIGJ1dCBhdmFpbGFibGUgaW4gdGV4dCBlZGl0b3JcbiAgICogVGhpcyBpcyB1c2VkIGZvciBzZXJpZXNCeVRhZ1VzZWQgZnVuY3Rpb24gd2hpY2ggd2hlbiB1c2VkIHN3aXRjaGVzXG4gICAqIHRoZSBlZGl0b3IgdG8gdGFnLW9ubHkgbW9kZS4gRGVmaW5lZCB0YWdzIGFyZSBwcm92aWRlZCB0byBzZXJpZXNCeVRhZ1VzZWRcbiAgICogYXMgcGFyYW1ldGVycy5cbiAgICovXG4gIGhpZGRlbj86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZnVuY0RlZjogRnVuY0RlZiwgb3B0aW9ucz86IHsgd2l0aERlZmF1bHRQYXJhbXM6IGFueSB9KSB7XG4gICAgdGhpcy5kZWYgPSBmdW5jRGVmO1xuICAgIHRoaXMucGFyYW1zID0gW107XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLndpdGhEZWZhdWx0UGFyYW1zICYmIGZ1bmNEZWYuZGVmYXVsdFBhcmFtcykge1xuICAgICAgdGhpcy5wYXJhbXMgPSBmdW5jRGVmLmRlZmF1bHRQYXJhbXMuc2xpY2UoMCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVUZXh0KCk7XG4gIH1cblxuICByZW5kZXIobWV0cmljRXhwOiBzdHJpbmcsIHJlcGxhY2VWYXJpYWJsZXM6IEludGVycG9sYXRlRnVuY3Rpb24pOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ciA9IHRoaXMuZGVmLm5hbWUgKyAnKCc7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gbWFwKHRoaXMucGFyYW1zLCAodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgcGFyYW1UeXBlO1xuXG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmRlZi5wYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgIHBhcmFtVHlwZSA9IHRoaXMuZGVmLnBhcmFtc1tpbmRleF0udHlwZTtcbiAgICAgIH0gZWxzZSBpZiAoZ2V0KGxhc3QodGhpcy5kZWYucGFyYW1zKSwgJ211bHRpcGxlJykpIHtcbiAgICAgICAgcGFyYW1UeXBlID0gZ2V0KGxhc3QodGhpcy5kZWYucGFyYW1zKSwgJ3R5cGUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gcGFyYW0gdHlwZXMgdGhhdCBzaG91bGQgbmV2ZXIgYmUgcXVvdGVkXG4gICAgICBpZiAoaW5jbHVkZXMoWyd2YWx1ZV9vcl9zZXJpZXMnLCAnYm9vbGVhbicsICdpbnQnLCAnZmxvYXQnLCAnbm9kZScsICdpbnRfb3JfaW5maW5pdHknXSwgcGFyYW1UeXBlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbHVlSW50ZXJwb2xhdGVkID0gaXNTdHJpbmcodmFsdWUpID8gcmVwbGFjZVZhcmlhYmxlcyh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgICAgLy8gcGFyYW0gdHlwZXMgdGhhdCBtaWdodCBiZSBxdW90ZWRcbiAgICAgIC8vIFRvIHF1b3RlIHZhcmlhYmxlcyBjb3JyZWN0bHkgd2UgbmVlZCB0byBpbnRlcnBvbGF0ZSBpdCB0byBjaGVjayBpZiBpdCBjb250YWlucyBhIG51bWVyaWMgb3Igc3RyaW5nIHZhbHVlXG4gICAgICBpZiAoaW5jbHVkZXMoWydpbnRfb3JfaW50ZXJ2YWwnLCAnbm9kZV9vcl90YWcnXSwgcGFyYW1UeXBlKSAmJiBpc0Zpbml0ZSgrdmFsdWVJbnRlcnBvbGF0ZWQpKSB7XG4gICAgICAgIHJldHVybiB0b1N0cmluZyh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIidcIiArIHZhbHVlICsgXCInXCI7XG4gICAgfSk7XG5cbiAgICAvLyBkb24ndCBzZW5kIGFueSBibGFuayBwYXJhbWV0ZXJzIHRvIGdyYXBoaXRlXG4gICAgd2hpbGUgKHBhcmFtZXRlcnNbcGFyYW1ldGVycy5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAgIHBhcmFtZXRlcnMucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKG1ldHJpY0V4cCkge1xuICAgICAgcGFyYW1ldGVycy51bnNoaWZ0KG1ldHJpY0V4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ciArIHBhcmFtZXRlcnMuam9pbignLCAnKSArICcpJztcbiAgfVxuXG4gIF9oYXNNdWx0aXBsZVBhcmFtc0luU3RyaW5nKHN0clZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoc3RyVmFsdWUuaW5kZXhPZignLCcpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRlZi5wYXJhbXNbaW5kZXggKyAxXSAmJiB0aGlzLmRlZi5wYXJhbXNbaW5kZXggKyAxXS5vcHRpb25hbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ICsgMSA+PSB0aGlzLmRlZi5wYXJhbXMubGVuZ3RoICYmIGdldChsYXN0KHRoaXMuZGVmLnBhcmFtcyksICdtdWx0aXBsZScpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB1cGRhdGVQYXJhbShzdHJWYWx1ZTogYW55LCBpbmRleDogYW55KSB7XG4gICAgLy8gaGFuZGxlIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAvLyBpZiBzdHJpbmcgY29udGFpbnMgJywnIGFuZCBuZXh0IHBhcmFtIGlzIG9wdGlvbmFsLCBzcGxpdCBhbmQgdXBkYXRlIGJvdGhcbiAgICBpZiAodGhpcy5faGFzTXVsdGlwbGVQYXJhbXNJblN0cmluZyhzdHJWYWx1ZSwgaW5kZXgpKSB7XG4gICAgICBlYWNoKHN0clZhbHVlLnNwbGl0KCcsJyksIChwYXJ0VmFsLCBpZHgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbShwYXJ0VmFsLnRyaW0oKSwgaW5kZXggKyBpZHgpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0clZhbHVlID09PSAnJyAmJiAoaW5kZXggPj0gdGhpcy5kZWYucGFyYW1zLmxlbmd0aCB8fCB0aGlzLmRlZi5wYXJhbXNbaW5kZXhdLm9wdGlvbmFsKSkge1xuICAgICAgdGhpcy5wYXJhbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXJhbXNbaW5kZXhdID0gc3RyVmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVUZXh0KCk7XG4gIH1cblxuICB1cGRhdGVUZXh0KCkge1xuICAgIGlmICh0aGlzLnBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudGV4dCA9IHRoaXMuZGVmLm5hbWUgKyAnKCknO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0ZXh0ID0gdGhpcy5kZWYubmFtZSArICcoJztcbiAgICB0ZXh0ICs9IHRoaXMucGFyYW1zLmpvaW4oJywgJyk7XG4gICAgdGV4dCArPSAnKSc7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGdW5jSW5zdGFuY2UoZnVuY0RlZjogYW55LCBvcHRpb25zPzogeyB3aXRoRGVmYXVsdFBhcmFtczogYW55IH0sIGlkeD86IGFueSk6IEZ1bmNJbnN0YW5jZSB7XG4gIGlmIChpc1N0cmluZyhmdW5jRGVmKSkge1xuICAgIGZ1bmNEZWYgPSBnZXRGdW5jRGVmKGZ1bmNEZWYsIGlkeCk7XG4gIH1cbiAgcmV0dXJuIG5ldyBGdW5jSW5zdGFuY2UoZnVuY0RlZiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGdldEZ1bmNEZWYobmFtZTogc3RyaW5nLCBpZHg/OiBhbnkpOiBGdW5jRGVmIHtcbiAgaWYgKCEoaWR4IHx8IGluZGV4KVtuYW1lXSkge1xuICAgIHJldHVybiB7IG5hbWU6IG5hbWUsIHBhcmFtczogW3sgbmFtZTogJycsIHR5cGU6ICcnLCBtdWx0aXBsZTogdHJ1ZSB9XSwgZGVmYXVsdFBhcmFtczogWycnXSwgdW5rbm93bjogdHJ1ZSB9O1xuICB9XG4gIHJldHVybiAoaWR4IHx8IGluZGV4KVtuYW1lXTtcbn1cblxuZnVuY3Rpb24gZ2V0RnVuY0RlZnMoZ3JhcGhpdGVWZXJzaW9uOiBzdHJpbmcsIGlkeD86IGFueSk6IEZ1bmNEZWZzIHtcbiAgY29uc3QgZnVuY3M6IEZ1bmNEZWZzID0ge307XG4gIGZvckVhY2goaWR4IHx8IGluZGV4LCAoZnVuY0RlZjogRnVuY0RlZikgPT4ge1xuICAgIGlmIChpc1ZlcnNpb25SZWxhdGVkRnVuY3Rpb24oZnVuY0RlZiwgZ3JhcGhpdGVWZXJzaW9uKSkge1xuICAgICAgZnVuY3NbZnVuY0RlZi5uYW1lXSA9IGFzc2lnbih7fSwgZnVuY0RlZiwge1xuICAgICAgICBwYXJhbXM6IGZpbHRlcihmdW5jRGVmLnBhcmFtcywgKHBhcmFtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGlzVmVyc2lvblJlbGF0ZWRGdW5jdGlvbihwYXJhbSwgZ3JhcGhpdGVWZXJzaW9uKTtcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZnVuY3M7XG59XG5cbi8vIHBhcnNlIHJlc3BvbnNlIGZyb20gZ3JhcGhpdGUgL2Z1bmN0aW9ucyBlbmRwb2ludCBpbnRvIGludGVybmFsIGZvcm1hdFxuZnVuY3Rpb24gcGFyc2VGdW5jRGVmcyhyYXdEZWZzOiBhbnkpOiBGdW5jRGVmcyB7XG4gIGNvbnN0IGZ1bmNEZWZzOiBGdW5jRGVmcyA9IHt9O1xuXG4gIGZvckVhY2gocmF3RGVmcyB8fCB7fSwgKGZ1bmNEZWYsIGZ1bmNOYW1lKSA9PiB7XG4gICAgLy8gc2tpcCBncmFwaGl0ZSBncmFwaCBmdW5jdGlvbnNcbiAgICBpZiAoZnVuY0RlZi5ncm91cCA9PT0gJ0dyYXBoJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGZ1bmNEZWYuZGVzY3JpcHRpb247XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAvLyB0aWR5IHVwIHNvbWUgcHlkb2Mgc3ludGF4IHRoYXQgcnN0Mmh0bWwgY2FuJ3QgaGFuZGxlXG4gICAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIC5yZXBsYWNlKC86cHk6ZnVuYzpgKC4rKSggPFtePl0qPik/YC9nLCAnYGAkMWBgJylcbiAgICAgICAgLnJlcGxhY2UoLy4uIHNlZWFsc286OiAvZywgJ1NlZSBhbHNvOiAnKVxuICAgICAgICAucmVwbGFjZSgvLi4gY29kZS1ibG9jayAqOjogKm5vbmUvZywgJy4uIGNvZGUtYmxvY2s6OicpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bmM6IEZ1bmNEZWYgPSB7XG4gICAgICBuYW1lOiBmdW5jRGVmLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBmdW5jRGVmLmdyb3VwLFxuICAgICAgcGFyYW1zOiBbXSxcbiAgICAgIGRlZmF1bHRQYXJhbXM6IFtdLFxuICAgICAgZmFrZTogZmFsc2UsXG4gICAgfTtcblxuICAgIC8vIGdldCByaWQgb2YgdGhlIGZpcnN0IFwic2VyaWVzTGlzdFwiIHBhcmFtXG4gICAgaWYgKC9ec2VyaWVzTGlzdHM/JC8udGVzdChnZXQoZnVuY0RlZiwgJ3BhcmFtc1swXS50eXBlJywgJycpKSkge1xuICAgICAgLy8gaGFuZGxlIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBtdWx0aXBsZSBzZXJpZXNMaXN0c1xuICAgICAgLy8gd2UgbGVhdmUgdGhlIHBhcmFtIGluIHBsYWNlIGJ1dCBtYXJrIGl0IG9wdGlvbmFsLCBzbyB1c2VycyBjYW4gYWRkIG1vcmUgc2VyaWVzIGlmIHRoZXkgd2lzaFxuICAgICAgaWYgKGZ1bmNEZWYucGFyYW1zWzBdLm11bHRpcGxlKSB7XG4gICAgICAgIGZ1bmNEZWYucGFyYW1zWzBdLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgICAgIC8vIG90aGVyd2lzZSBjaG9wIG9mZiB0aGUgZmlyc3QgcGFyYW0sIGl0J2xsIGJlIGhhbmRsZWQgc2VwYXJhdGVseVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuY0RlZi5wYXJhbXMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICAgIC8vIHRhZyBmdW5jdGlvbiBhcyBmYWtlXG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmMuZmFrZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yRWFjaChmdW5jRGVmLnBhcmFtcywgKHJhd1BhcmFtKSA9PiB7XG4gICAgICBjb25zdCBwYXJhbTogYW55ID0ge1xuICAgICAgICBuYW1lOiByYXdQYXJhbS5uYW1lLFxuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgb3B0aW9uYWw6ICFyYXdQYXJhbS5yZXF1aXJlZCxcbiAgICAgICAgbXVsdGlwbGU6ICEhcmF3UGFyYW0ubXVsdGlwbGUsXG4gICAgICAgIG9wdGlvbnM6IHVuZGVmaW5lZCxcbiAgICAgIH07XG5cbiAgICAgIGlmIChyYXdQYXJhbS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHJhd1BhcmFtLmRlZmF1bHQgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgZnVuYy5kZWZhdWx0UGFyYW1zLnB1c2goJ2luZicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZ1bmMuZGVmYXVsdFBhcmFtcy5wdXNoKHRvU3RyaW5nKHJhd1BhcmFtLmRlZmF1bHQpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyYXdQYXJhbS5zdWdnZXN0aW9ucykge1xuICAgICAgICBmdW5jLmRlZmF1bHRQYXJhbXMucHVzaCh0b1N0cmluZyhyYXdQYXJhbS5zdWdnZXN0aW9uc1swXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuYy5kZWZhdWx0UGFyYW1zLnB1c2goJycpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAnYm9vbGVhbic7XG4gICAgICAgIHBhcmFtLm9wdGlvbnMgPSBbJ3RydWUnLCAnZmFsc2UnXTtcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAnaW50JztcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ2Zsb2F0Jykge1xuICAgICAgICBwYXJhbS50eXBlID0gJ2Zsb2F0JztcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAnbm9kZSc7XG4gICAgICAgIHBhcmFtLm9wdGlvbnMgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXTtcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ25vZGVPclRhZycpIHtcbiAgICAgICAgcGFyYW0udHlwZSA9ICdub2RlX29yX3RhZyc7XG4gICAgICAgIHBhcmFtLm9wdGlvbnMgPSBbJ25hbWUnLCAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddO1xuICAgICAgfSBlbHNlIGlmIChyYXdQYXJhbS50eXBlID09PSAnaW50T3JJbnRlcnZhbCcpIHtcbiAgICAgICAgcGFyYW0udHlwZSA9ICdpbnRfb3JfaW50ZXJ2YWwnO1xuICAgICAgfSBlbHNlIGlmIChyYXdQYXJhbS50eXBlID09PSAnc2VyaWVzTGlzdCcpIHtcbiAgICAgICAgcGFyYW0udHlwZSA9ICd2YWx1ZV9vcl9zZXJpZXMnO1xuICAgICAgfSBlbHNlIGlmIChyYXdQYXJhbS50eXBlID09PSAnaW50T3JJbmYnKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAnaW50X29yX2luZmluaXR5JztcbiAgICAgIH1cblxuICAgICAgaWYgKHJhd1BhcmFtLm9wdGlvbnMpIHtcbiAgICAgICAgcGFyYW0ub3B0aW9ucyA9IG1hcChyYXdQYXJhbS5vcHRpb25zLCB0b1N0cmluZyk7XG4gICAgICB9IGVsc2UgaWYgKHJhd1BhcmFtLnN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIHBhcmFtLm9wdGlvbnMgPSBtYXAocmF3UGFyYW0uc3VnZ2VzdGlvbnMsIHRvU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgZnVuYy5wYXJhbXMucHVzaChwYXJhbSk7XG4gICAgfSk7XG5cbiAgICBmdW5jRGVmc1tmdW5jTmFtZV0gPSBmdW5jO1xuICB9KTtcblxuICByZXR1cm4gZnVuY0RlZnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlRnVuY0luc3RhbmNlOiBjcmVhdGVGdW5jSW5zdGFuY2UsXG4gIGdldEZ1bmNEZWY6IGdldEZ1bmNEZWYsXG4gIGdldEZ1bmNEZWZzOiBnZXRGdW5jRGVmcyxcbiAgcGFyc2VGdW5jRGVmczogcGFyc2VGdW5jRGVmcyxcbn07XG4iLCJpbXBvcnQgeyBjb21wYWN0LCBlYWNoLCBmaW5kSW5kZXgsIGZsYXR0ZW4sIGdldCwgam9pbiwga2V5QnksIGxhc3QsIG1hcCwgcmVkdWNlLCB3aXRob3V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGFycmF5TW92ZSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FycmF5TW92ZSc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgU2NvcGVkVmFycyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi9nZnVuYyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEdyYXBoaXRlRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlVGFnT3BlcmF0b3IgPSAnPScgfCAnPX4nIHwgJyE9JyB8ICchPX4nO1xuXG5leHBvcnQgdHlwZSBHcmFwaGl0ZVRhZyA9IHtcbiAga2V5OiBzdHJpbmc7XG4gIG9wZXJhdG9yOiBHcmFwaGl0ZVRhZ09wZXJhdG9yO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVUYXJnZXQgPSB7XG4gIHJlZklkOiBzdHJpbmcgfCBudW1iZXI7XG4gIHRhcmdldDogc3RyaW5nO1xuICAvKipcbiAgICogQ29udGFpbnMgZnVsbCBxdWVyeSBhZnRlciBpbnRlcnBvbGF0aW5nIHN1Yi1xdWVyaWVzIChlLmcuIFwiZnVuY3Rpb24oI0EpXCIgcmVmZXJlbmNpbmcgcXVlcnkgd2l0aCByZWZJZD1BKVxuICAgKi9cbiAgdGFyZ2V0RnVsbDogc3RyaW5nO1xuICB0ZXh0RWRpdG9yOiBib29sZWFuO1xuICBwYXVzZWQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGl0ZVF1ZXJ5IHtcbiAgZGF0YXNvdXJjZTogR3JhcGhpdGVEYXRhc291cmNlO1xuICB0YXJnZXQ6IEdyYXBoaXRlVGFyZ2V0O1xuICBmdW5jdGlvbnM6IEZ1bmNJbnN0YW5jZVtdID0gW107XG4gIHNlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXSA9IFtdO1xuICB0YWdzOiBHcmFwaGl0ZVRhZ1tdID0gW107XG4gIGVycm9yOiBhbnk7XG4gIHNlcmllc0J5VGFnVXNlZCA9IGZhbHNlO1xuICBjaGVja090aGVyU2VnbWVudHNJbmRleCA9IDA7XG4gIHJlbW92ZVRhZ1ZhbHVlOiBzdHJpbmc7XG4gIHRlbXBsYXRlU3J2OiBhbnk7XG4gIHNjb3BlZFZhcnM6IGFueTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKGRhdGFzb3VyY2U6IGFueSwgdGFyZ2V0OiBhbnksIHRlbXBsYXRlU3J2PzogVGVtcGxhdGVTcnYsIHNjb3BlZFZhcnM/OiBTY29wZWRWYXJzKSB7XG4gICAgdGhpcy5kYXRhc291cmNlID0gZGF0YXNvdXJjZTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnRlbXBsYXRlU3J2ID0gdGVtcGxhdGVTcnY7XG4gICAgdGhpcy5zY29wZWRWYXJzID0gc2NvcGVkVmFycztcbiAgICB0aGlzLnBhcnNlVGFyZ2V0KCk7XG5cbiAgICB0aGlzLnJlbW92ZVRhZ1ZhbHVlID0gJy0tIHJlbW92ZSB0YWcgLS0nO1xuICB9XG5cbiAgcGFyc2VUYXJnZXQoKSB7XG4gICAgdGhpcy5mdW5jdGlvbnMgPSBbXTtcbiAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5zZXJpZXNCeVRhZ1VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9yID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnRhcmdldC50ZXh0RWRpdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcih0aGlzLnRhcmdldC50YXJnZXQpO1xuICAgIGNvbnN0IGFzdE5vZGUgPSBwYXJzZXIuZ2V0QXN0KCk7XG4gICAgaWYgKGFzdE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2hlY2tPdGhlclNlZ21lbnRzSW5kZXggPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhc3ROb2RlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBhc3ROb2RlLm1lc3NhZ2UgKyAnIGF0IHBvc2l0aW9uOiAnICsgYXN0Tm9kZS5wb3M7XG4gICAgICB0aGlzLnRhcmdldC50ZXh0RWRpdG9yID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5wYXJzZVRhcmdldFJlY3Vyc2l2ZShhc3ROb2RlLCBudWxsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIHBhcnNpbmcgdGFyZ2V0OicsIGVyci5tZXNzYWdlKTtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZTtcbiAgICAgIHRoaXMudGFyZ2V0LnRleHRFZGl0b3IgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tPdGhlclNlZ21lbnRzSW5kZXggPSB0aGlzLnNlZ21lbnRzLmxlbmd0aCAtIDE7XG4gIH1cblxuICBnZXRTZWdtZW50UGF0aFVwVG8oaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGFyciA9IHRoaXMuc2VnbWVudHMuc2xpY2UoMCwgaW5kZXgpO1xuXG4gICAgcmV0dXJuIHJlZHVjZShcbiAgICAgIGFycixcbiAgICAgIChyZXN1bHQsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdCArICcuJyArIHNlZ21lbnQudmFsdWUgOiBzZWdtZW50LnZhbHVlO1xuICAgICAgfSxcbiAgICAgICcnXG4gICAgKTtcbiAgfVxuXG4gIHBhcnNlVGFyZ2V0UmVjdXJzaXZlKGFzdE5vZGU6IGFueSwgZnVuYzogYW55KTogYW55IHtcbiAgICBpZiAoYXN0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3dpdGNoIChhc3ROb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgY29uc3QgaW5uZXJGdW5jID0gdGhpcy5kYXRhc291cmNlLmNyZWF0ZUZ1bmNJbnN0YW5jZShhc3ROb2RlLm5hbWUsIHtcbiAgICAgICAgICB3aXRoRGVmYXVsdFBhcmFtczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoKGFzdE5vZGUucGFyYW1zLCAocGFyYW0pID0+IHtcbiAgICAgICAgICB0aGlzLnBhcnNlVGFyZ2V0UmVjdXJzaXZlKHBhcmFtLCBpbm5lckZ1bmMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpbm5lckZ1bmMudXBkYXRlVGV4dCgpO1xuICAgICAgICB0aGlzLmZ1bmN0aW9ucy5wdXNoKGlubmVyRnVuYyk7XG5cbiAgICAgICAgLy8gZXh0cmFjdCB0YWdzIGZyb20gc2VyaWVzQnlUYWcgZnVuY3Rpb24gYW5kIGhpZGUgZnVuY3Rpb25cbiAgICAgICAgaWYgKGlubmVyRnVuYy5kZWYubmFtZSA9PT0gJ3Nlcmllc0J5VGFnJyAmJiAhdGhpcy5zZXJpZXNCeVRhZ1VzZWQpIHtcbiAgICAgICAgICB0aGlzLnNlcmllc0J5VGFnVXNlZCA9IHRydWU7XG4gICAgICAgICAgaW5uZXJGdW5jLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy50YWdzID0gdGhpcy5zcGxpdFNlcmllc0J5VGFnUGFyYW1zKGlubmVyRnVuYyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Nlcmllcy1yZWYnOlxuICAgICAgICBpZiAodGhpcy5zZWdtZW50cy5sZW5ndGggPiAwIHx8IHRoaXMuZ2V0U2VyaWVzQnlUYWdGdW5jSW5kZXgoKSA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5hZGRGdW5jdGlvblBhcmFtZXRlcihmdW5jLCBhc3ROb2RlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goYXN0Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib29sJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICB0aGlzLmFkZEZ1bmN0aW9uUGFyYW1ldGVyKGZ1bmMsIGFzdE5vZGUudmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21ldHJpYyc6XG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCB8fCB0aGlzLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5hZGRGdW5jdGlvblBhcmFtZXRlcihmdW5jLCBqb2luKG1hcChhc3ROb2RlLnNlZ21lbnRzLCAndmFsdWUnKSwgJy4nKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWdtZW50cyA9IGFzdE5vZGUuc2VnbWVudHM7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2VnbWVudFZhbHVlKHNlZ21lbnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VnbWVudHNbaW5kZXhdLnZhbHVlID0gc2VnbWVudC52YWx1ZTtcbiAgfVxuXG4gIGFkZFNlbGVjdE1ldHJpY1NlZ21lbnQoKSB7XG4gICAgdGhpcy5zZWdtZW50cy5wdXNoKHsgdmFsdWU6ICdzZWxlY3QgbWV0cmljJyB9KTtcbiAgfVxuXG4gIGFkZEZ1bmN0aW9uKG5ld0Z1bmM6IGFueSkge1xuICAgIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3RnVuYyk7XG4gIH1cblxuICBhZGRGdW5jdGlvblBhcmFtZXRlcihmdW5jOiBhbnksIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoZnVuYy5wYXJhbXMubGVuZ3RoID49IGZ1bmMuZGVmLnBhcmFtcy5sZW5ndGggJiYgIWdldChsYXN0KGZ1bmMuZGVmLnBhcmFtcyksICdtdWx0aXBsZScsIGZhbHNlKSkge1xuICAgICAgdGhyb3cgeyBtZXNzYWdlOiAndG9vIG1hbnkgcGFyYW1ldGVycyBmb3IgZnVuY3Rpb24gJyArIGZ1bmMuZGVmLm5hbWUgfTtcbiAgICB9XG4gICAgZnVuYy5wYXJhbXMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVGdW5jdGlvbihmdW5jOiBhbnkpIHtcbiAgICB0aGlzLmZ1bmN0aW9ucyA9IHdpdGhvdXQodGhpcy5mdW5jdGlvbnMsIGZ1bmMpO1xuICB9XG5cbiAgbW92ZUZ1bmN0aW9uKGZ1bmM6IGFueSwgb2Zmc2V0OiBudW1iZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3Rpb25zLmluZGV4T2YoZnVuYyk7XG4gICAgYXJyYXlNb3ZlKHRoaXMuZnVuY3Rpb25zLCBpbmRleCwgaW5kZXggKyBvZmZzZXQpO1xuICB9XG5cbiAgdXBkYXRlTW9kZWxUYXJnZXQodGFyZ2V0czogYW55KSB7XG4gICAgY29uc3Qgd3JhcEZ1bmN0aW9uID0gKHRhcmdldDogc3RyaW5nLCBmdW5jOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBmdW5jLnJlbmRlcih0YXJnZXQsICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodmFsdWUsIHRoaXMuc2NvcGVkVmFycyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKCF0aGlzLnRhcmdldC50ZXh0RWRpdG9yKSB7XG4gICAgICBjb25zdCBtZXRyaWNQYXRoID0gdGhpcy5nZXRTZWdtZW50UGF0aFVwVG8odGhpcy5zZWdtZW50cy5sZW5ndGgpLnJlcGxhY2UoL1xcLj9zZWxlY3QgbWV0cmljJC8sICcnKTtcbiAgICAgIHRoaXMudGFyZ2V0LnRhcmdldCA9IHJlZHVjZSh0aGlzLmZ1bmN0aW9ucywgd3JhcEZ1bmN0aW9uLCBtZXRyaWNQYXRoKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVJlbmRlcmVkVGFyZ2V0KHRoaXMudGFyZ2V0LCB0YXJnZXRzKTtcblxuICAgIC8vIGxvb3AgdGhyb3VnaCBvdGhlciBxdWVyaWVzIGFuZCB1cGRhdGUgdGFyZ2V0RnVsbCBhcyBuZWVkZWRcbiAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRzIHx8IFtdKSB7XG4gICAgICBpZiAodGFyZ2V0LnJlZklkICE9PSB0aGlzLnRhcmdldC5yZWZJZCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVkVGFyZ2V0KHRhcmdldCwgdGFyZ2V0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2xlYW4tdXAgYWRkZWQgcGFyYW1cbiAgICB0aGlzLmZ1bmN0aW9ucy5mb3JFYWNoKChmdW5jKSA9PiAoZnVuYy5hZGRlZCA9IGZhbHNlKSk7XG4gIH1cblxuICB1cGRhdGVSZW5kZXJlZFRhcmdldCh0YXJnZXQ6IHsgcmVmSWQ6IHN0cmluZyB8IG51bWJlcjsgdGFyZ2V0OiBhbnk7IHRhcmdldEZ1bGw6IGFueSB9LCB0YXJnZXRzOiBhbnkpIHtcbiAgICAvLyByZW5kZXIgbmVzdGVkIHF1ZXJ5XG4gICAgY29uc3QgdGFyZ2V0c0J5UmVmSWQgPSBrZXlCeSh0YXJnZXRzLCAncmVmSWQnKTtcblxuICAgIC8vIG5vIHJlZmVyZW5jZXMgdG8gc2VsZlxuICAgIGRlbGV0ZSB0YXJnZXRzQnlSZWZJZFt0YXJnZXQucmVmSWRdO1xuXG4gICAgY29uc3QgbmVzdGVkU2VyaWVzUmVmUmVnZXggPSAvXFwjKFtBLVpdKS9nO1xuICAgIGxldCB0YXJnZXRXaXRoTmVzdGVkUXVlcmllcyA9IHRhcmdldC50YXJnZXQ7XG5cbiAgICAvLyBVc2UgcmVmIGNvdW50IHRvIHRyYWNrIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAgICBmdW5jdGlvbiBjb3VudFRhcmdldFJlZnModGFyZ2V0c0J5UmVmSWQ6IGFueSwgcmVmSWQ6IHN0cmluZykge1xuICAgICAgbGV0IHJlZkNvdW50ID0gMDtcbiAgICAgIGVhY2godGFyZ2V0c0J5UmVmSWQsICh0LCBpZCkgPT4ge1xuICAgICAgICBpZiAoaWQgIT09IHJlZklkKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2ggPSBuZXN0ZWRTZXJpZXNSZWZSZWdleC5leGVjKHQudGFyZ2V0KTtcbiAgICAgICAgICBjb25zdCBjb3VudCA9IG1hdGNoICYmIG1hdGNoLmxlbmd0aCA/IG1hdGNoLmxlbmd0aCAtIDEgOiAwO1xuICAgICAgICAgIHJlZkNvdW50ICs9IGNvdW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRhcmdldHNCeVJlZklkW3JlZklkXS5yZWZDb3VudCA9IHJlZkNvdW50O1xuICAgIH1cbiAgICBlYWNoKHRhcmdldHNCeVJlZklkLCAodCwgaWQpID0+IHtcbiAgICAgIGNvdW50VGFyZ2V0UmVmcyh0YXJnZXRzQnlSZWZJZCwgaWQpO1xuICAgIH0pO1xuXG4gICAgLy8gS2VlcCBpbnRlcnBvbGF0aW5nIHVudGlsIHRoZXJlIGFyZSBubyBxdWVyeSByZWZlcmVuY2VzXG4gICAgLy8gVGhlIHJlYXNvbiBmb3IgdGhlIGxvb3AgaXMgdGhhdCB0aGUgcmVmZXJlbmNlZCBxdWVyeSBtaWdodCBjb250YWluIGFub3RoZXIgcmVmZXJlbmNlIHRvIGFub3RoZXIgcXVlcnlcbiAgICB3aGlsZSAodGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXMubWF0Y2gobmVzdGVkU2VyaWVzUmVmUmVnZXgpKSB7XG4gICAgICBjb25zdCB1cGRhdGVkID0gdGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXMucmVwbGFjZShuZXN0ZWRTZXJpZXNSZWZSZWdleCwgKG1hdGNoOiBzdHJpbmcsIGcxOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdCA9IHRhcmdldHNCeVJlZklkW2cxXTtcbiAgICAgICAgaWYgKCF0KSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm8gY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgICAgICBpZiAodC5yZWZDb3VudCA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRzQnlSZWZJZFtnMV07XG4gICAgICAgIH1cbiAgICAgICAgdC5yZWZDb3VudC0tO1xuXG4gICAgICAgIHJldHVybiB0LnRhcmdldDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodXBkYXRlZCA9PT0gdGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXMpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldFdpdGhOZXN0ZWRRdWVyaWVzID0gdXBkYXRlZDtcbiAgICB9XG5cbiAgICBkZWxldGUgdGFyZ2V0LnRhcmdldEZ1bGw7XG4gICAgaWYgKHRhcmdldC50YXJnZXQgIT09IHRhcmdldFdpdGhOZXN0ZWRRdWVyaWVzKSB7XG4gICAgICB0YXJnZXQudGFyZ2V0RnVsbCA9IHRhcmdldFdpdGhOZXN0ZWRRdWVyaWVzO1xuICAgIH1cbiAgfVxuXG4gIHNwbGl0U2VyaWVzQnlUYWdQYXJhbXMoZnVuYzogeyBwYXJhbXM6IGFueSB9KSB7XG4gICAgY29uc3QgdGFnUGF0dGVybiA9IC8oW15cXCE9fl0rKShcXCE/PX4/KSguKikvO1xuICAgIHJldHVybiBmbGF0dGVuKFxuICAgICAgbWFwKGZ1bmMucGFyYW1zLCAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGFnUGF0dGVybi5leGVjKHBhcmFtKTtcbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCB0YWcgPSBtYXRjaGVzLnNsaWNlKDEpO1xuICAgICAgICAgIGlmICh0YWcubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBrZXk6IHRhZ1swXSxcbiAgICAgICAgICAgICAgb3BlcmF0b3I6IHRhZ1sxXSBhcyBHcmFwaGl0ZVRhZ09wZXJhdG9yLFxuICAgICAgICAgICAgICB2YWx1ZTogdGFnWzJdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2VyaWVzQnlUYWdGdW5jSW5kZXgoKSB7XG4gICAgcmV0dXJuIGZpbmRJbmRleCh0aGlzLmZ1bmN0aW9ucywgKGZ1bmMpID0+IGZ1bmMuZGVmLm5hbWUgPT09ICdzZXJpZXNCeVRhZycpO1xuICB9XG5cbiAgZ2V0U2VyaWVzQnlUYWdGdW5jKCkge1xuICAgIGNvbnN0IHNlcmllc0J5VGFnRnVuY0luZGV4ID0gdGhpcy5nZXRTZXJpZXNCeVRhZ0Z1bmNJbmRleCgpO1xuICAgIGlmIChzZXJpZXNCeVRhZ0Z1bmNJbmRleCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5mdW5jdGlvbnNbc2VyaWVzQnlUYWdGdW5jSW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRhZyh0YWc6IHsga2V5OiBhbnk7IG9wZXJhdG9yOiBHcmFwaGl0ZVRhZ09wZXJhdG9yOyB2YWx1ZTogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBuZXdUYWdQYXJhbSA9IHJlbmRlclRhZ1N0cmluZyh0YWcpO1xuICAgIHRoaXMuZ2V0U2VyaWVzQnlUYWdGdW5jKCkhLnBhcmFtcy5wdXNoKG5ld1RhZ1BhcmFtKTtcbiAgICB0aGlzLnRhZ3MucHVzaCh0YWcpO1xuICB9XG5cbiAgcmVtb3ZlVGFnKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmdldFNlcmllc0J5VGFnRnVuYygpIS5wYXJhbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnRhZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHVwZGF0ZVRhZyh0YWc6IHsga2V5OiBzdHJpbmc7IG9wZXJhdG9yOiBHcmFwaGl0ZVRhZ09wZXJhdG9yOyB2YWx1ZTogc3RyaW5nIH0sIHRhZ0luZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmVycm9yID0gbnVsbDtcblxuICAgIGlmICh0YWcua2V5ID09PSB0aGlzLnJlbW92ZVRhZ1ZhbHVlKSB7XG4gICAgICB0aGlzLnJlbW92ZVRhZyh0YWdJbmRleCk7XG4gICAgICBpZiAodGhpcy50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnJlbW92ZUZ1bmN0aW9uKHRoaXMuZ2V0U2VyaWVzQnlUYWdGdW5jKCkpO1xuICAgICAgICB0aGlzLmNoZWNrT3RoZXJTZWdtZW50c0luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zZXJpZXNCeVRhZ1VzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdldFNlcmllc0J5VGFnRnVuYygpIS5wYXJhbXNbdGFnSW5kZXhdID0gcmVuZGVyVGFnU3RyaW5nKHRhZyk7XG4gICAgdGhpcy50YWdzW3RhZ0luZGV4XSA9IHRhZztcbiAgfVxuXG4gIHJlbmRlclRhZ0V4cHJlc3Npb25zKGV4Y2x1ZGVJbmRleCA9IC0xKSB7XG4gICAgcmV0dXJuIGNvbXBhY3QoXG4gICAgICBtYXAodGhpcy50YWdzLCAodGFnRXhwciwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIHRhZyB0aGF0IHdlIHdhbnQgdG8gbG9va3VwXG4gICAgICAgIGlmIChpbmRleCAhPT0gZXhjbHVkZUluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ0V4cHIua2V5ICsgdGFnRXhwci5vcGVyYXRvciArIHRhZ0V4cHIudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhZ1N0cmluZyh0YWc6IHsga2V5OiBhbnk7IG9wZXJhdG9yPzogYW55OyB2YWx1ZT86IGFueSB9KSB7XG4gIHJldHVybiB0YWcua2V5ICsgdGFnLm9wZXJhdG9yICsgdGFnLnZhbHVlO1xufVxuIiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJ2xvZGFzaCc7XG5cbi8vIFRoaXMgaXMgYXV0byBnZW5lcmF0ZWQgZnJvbSB0aGUgdW5pY29kZSB0YWJsZXMuXG4vLyBUaGUgdGFibGVzIGFyZSBhdDpcbi8vIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9MdS9saXN0Lmh0bVxuLy8gaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L0xsL2xpc3QuaHRtXG4vLyBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvTHQvbGlzdC5odG1cbi8vIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9MbS9saXN0Lmh0bVxuLy8gaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L0xvL2xpc3QuaHRtXG4vLyBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvTmwvbGlzdC5odG1cblxuY29uc3QgdW5pY29kZUxldHRlclRhYmxlID0gW1xuICAxNzAsIDE3MCwgMTgxLCAxODEsIDE4NiwgMTg2LCAxOTIsIDIxNCwgMjE2LCAyNDYsIDI0OCwgNzA1LCA3MTAsIDcyMSwgNzM2LCA3NDAsIDc0OCwgNzQ4LCA3NTAsIDc1MCwgODgwLCA4ODQsIDg4NixcbiAgODg3LCA4OTAsIDg5MywgOTAyLCA5MDIsIDkwNCwgOTA2LCA5MDgsIDkwOCwgOTEwLCA5MjksIDkzMSwgMTAxMywgMTAxNSwgMTE1MywgMTE2MiwgMTMxOSwgMTMyOSwgMTM2NiwgMTM2OSwgMTM2OSxcbiAgMTM3NywgMTQxNSwgMTQ4OCwgMTUxNCwgMTUyMCwgMTUyMiwgMTU2OCwgMTYxMCwgMTY0NiwgMTY0NywgMTY0OSwgMTc0NywgMTc0OSwgMTc0OSwgMTc2NSwgMTc2NiwgMTc3NCwgMTc3NSwgMTc4NixcbiAgMTc4OCwgMTc5MSwgMTc5MSwgMTgwOCwgMTgwOCwgMTgxMCwgMTgzOSwgMTg2OSwgMTk1NywgMTk2OSwgMTk2OSwgMTk5NCwgMjAyNiwgMjAzNiwgMjAzNywgMjA0MiwgMjA0MiwgMjA0OCwgMjA2OSxcbiAgMjA3NCwgMjA3NCwgMjA4NCwgMjA4NCwgMjA4OCwgMjA4OCwgMjExMiwgMjEzNiwgMjMwOCwgMjM2MSwgMjM2NSwgMjM2NSwgMjM4NCwgMjM4NCwgMjM5MiwgMjQwMSwgMjQxNywgMjQyMywgMjQyNSxcbiAgMjQzMSwgMjQzNywgMjQ0NCwgMjQ0NywgMjQ0OCwgMjQ1MSwgMjQ3MiwgMjQ3NCwgMjQ4MCwgMjQ4MiwgMjQ4MiwgMjQ4NiwgMjQ4OSwgMjQ5MywgMjQ5MywgMjUxMCwgMjUxMCwgMjUyNCwgMjUyNSxcbiAgMjUyNywgMjUyOSwgMjU0NCwgMjU0NSwgMjU2NSwgMjU3MCwgMjU3NSwgMjU3NiwgMjU3OSwgMjYwMCwgMjYwMiwgMjYwOCwgMjYxMCwgMjYxMSwgMjYxMywgMjYxNCwgMjYxNiwgMjYxNywgMjY0OSxcbiAgMjY1MiwgMjY1NCwgMjY1NCwgMjY3NCwgMjY3NiwgMjY5MywgMjcwMSwgMjcwMywgMjcwNSwgMjcwNywgMjcyOCwgMjczMCwgMjczNiwgMjczOCwgMjczOSwgMjc0MSwgMjc0NSwgMjc0OSwgMjc0OSxcbiAgMjc2OCwgMjc2OCwgMjc4NCwgMjc4NSwgMjgyMSwgMjgyOCwgMjgzMSwgMjgzMiwgMjgzNSwgMjg1NiwgMjg1OCwgMjg2NCwgMjg2NiwgMjg2NywgMjg2OSwgMjg3MywgMjg3NywgMjg3NywgMjkwOCxcbiAgMjkwOSwgMjkxMSwgMjkxMywgMjkyOSwgMjkyOSwgMjk0NywgMjk0NywgMjk0OSwgMjk1NCwgMjk1OCwgMjk2MCwgMjk2MiwgMjk2NSwgMjk2OSwgMjk3MCwgMjk3MiwgMjk3MiwgMjk3NCwgMjk3NSxcbiAgMjk3OSwgMjk4MCwgMjk4NCwgMjk4NiwgMjk5MCwgMzAwMSwgMzAyNCwgMzAyNCwgMzA3NywgMzA4NCwgMzA4NiwgMzA4OCwgMzA5MCwgMzExMiwgMzExNCwgMzEyMywgMzEyNSwgMzEyOSwgMzEzMyxcbiAgMzEzMywgMzE2MCwgMzE2MSwgMzE2OCwgMzE2OSwgMzIwNSwgMzIxMiwgMzIxNCwgMzIxNiwgMzIxOCwgMzI0MCwgMzI0MiwgMzI1MSwgMzI1MywgMzI1NywgMzI2MSwgMzI2MSwgMzI5NCwgMzI5NCxcbiAgMzI5NiwgMzI5NywgMzMxMywgMzMxNCwgMzMzMywgMzM0MCwgMzM0MiwgMzM0NCwgMzM0NiwgMzM4NiwgMzM4OSwgMzM4OSwgMzQwNiwgMzQwNiwgMzQyNCwgMzQyNSwgMzQ1MCwgMzQ1NSwgMzQ2MSxcbiAgMzQ3OCwgMzQ4MiwgMzUwNSwgMzUwNywgMzUxNSwgMzUxNywgMzUxNywgMzUyMCwgMzUyNiwgMzU4NSwgMzYzMiwgMzYzNCwgMzYzNSwgMzY0OCwgMzY1NCwgMzcxMywgMzcxNCwgMzcxNiwgMzcxNixcbiAgMzcxOSwgMzcyMCwgMzcyMiwgMzcyMiwgMzcyNSwgMzcyNSwgMzczMiwgMzczNSwgMzczNywgMzc0MywgMzc0NSwgMzc0NywgMzc0OSwgMzc0OSwgMzc1MSwgMzc1MSwgMzc1NCwgMzc1NSwgMzc1NyxcbiAgMzc2MCwgMzc2MiwgMzc2MywgMzc3MywgMzc3MywgMzc3NiwgMzc4MCwgMzc4MiwgMzc4MiwgMzgwNCwgMzgwNSwgMzg0MCwgMzg0MCwgMzkwNCwgMzkxMSwgMzkxMywgMzk0OCwgMzk3NiwgMzk4MCxcbiAgNDA5NiwgNDEzOCwgNDE1OSwgNDE1OSwgNDE3NiwgNDE4MSwgNDE4NiwgNDE4OSwgNDE5MywgNDE5MywgNDE5NywgNDE5OCwgNDIwNiwgNDIwOCwgNDIxMywgNDIyNSwgNDIzOCwgNDIzOCwgNDI1NixcbiAgNDI5MywgNDMwNCwgNDM0NiwgNDM0OCwgNDM0OCwgNDM1MiwgNDY4MCwgNDY4MiwgNDY4NSwgNDY4OCwgNDY5NCwgNDY5NiwgNDY5NiwgNDY5OCwgNDcwMSwgNDcwNCwgNDc0NCwgNDc0NiwgNDc0OSxcbiAgNDc1MiwgNDc4NCwgNDc4NiwgNDc4OSwgNDc5MiwgNDc5OCwgNDgwMCwgNDgwMCwgNDgwMiwgNDgwNSwgNDgwOCwgNDgyMiwgNDgyNCwgNDg4MCwgNDg4MiwgNDg4NSwgNDg4OCwgNDk1NCwgNDk5MixcbiAgNTAwNywgNTAyNCwgNTEwOCwgNTEyMSwgNTc0MCwgNTc0MywgNTc1OSwgNTc2MSwgNTc4NiwgNTc5MiwgNTg2NiwgNTg3MCwgNTg3MiwgNTg4OCwgNTkwMCwgNTkwMiwgNTkwNSwgNTkyMCwgNTkzNyxcbiAgNTk1MiwgNTk2OSwgNTk4NCwgNTk5NiwgNTk5OCwgNjAwMCwgNjAxNiwgNjA2NywgNjEwMywgNjEwMywgNjEwOCwgNjEwOCwgNjE3NiwgNjI2MywgNjI3MiwgNjMxMiwgNjMxNCwgNjMxNCwgNjMyMCxcbiAgNjM4OSwgNjQwMCwgNjQyOCwgNjQ4MCwgNjUwOSwgNjUxMiwgNjUxNiwgNjUyOCwgNjU3MSwgNjU5MywgNjU5OSwgNjY1NiwgNjY3OCwgNjY4OCwgNjc0MCwgNjgyMywgNjgyMywgNjkxNywgNjk2MyxcbiAgNjk4MSwgNjk4NywgNzA0MywgNzA3MiwgNzA4NiwgNzA4NywgNzEwNCwgNzE0MSwgNzE2OCwgNzIwMywgNzI0NSwgNzI0NywgNzI1OCwgNzI5MywgNzQwMSwgNzQwNCwgNzQwNiwgNzQwOSwgNzQyNCxcbiAgNzYxNSwgNzY4MCwgNzk1NywgNzk2MCwgNzk2NSwgNzk2OCwgODAwNSwgODAwOCwgODAxMywgODAxNiwgODAyMywgODAyNSwgODAyNSwgODAyNywgODAyNywgODAyOSwgODAyOSwgODAzMSwgODA2MSxcbiAgODA2NCwgODExNiwgODExOCwgODEyNCwgODEyNiwgODEyNiwgODEzMCwgODEzMiwgODEzNCwgODE0MCwgODE0NCwgODE0NywgODE1MCwgODE1NSwgODE2MCwgODE3MiwgODE3OCwgODE4MCwgODE4MixcbiAgODE4OCwgODMwNSwgODMwNSwgODMxOSwgODMxOSwgODMzNiwgODM0OCwgODQ1MCwgODQ1MCwgODQ1NSwgODQ1NSwgODQ1OCwgODQ2NywgODQ2OSwgODQ2OSwgODQ3MywgODQ3NywgODQ4NCwgODQ4NCxcbiAgODQ4NiwgODQ4NiwgODQ4OCwgODQ4OCwgODQ5MCwgODQ5MywgODQ5NSwgODUwNSwgODUwOCwgODUxMSwgODUxNywgODUyMSwgODUyNiwgODUyNiwgODU0NCwgODU4NCwgMTEyNjQsIDExMzEwLCAxMTMxMixcbiAgMTEzNTgsIDExMzYwLCAxMTQ5MiwgMTE0OTksIDExNTAyLCAxMTUyMCwgMTE1NTcsIDExNTY4LCAxMTYyMSwgMTE2MzEsIDExNjMxLCAxMTY0OCwgMTE2NzAsIDExNjgwLCAxMTY4NiwgMTE2ODgsIDExNjk0LFxuICAxMTY5NiwgMTE3MDIsIDExNzA0LCAxMTcxMCwgMTE3MTIsIDExNzE4LCAxMTcyMCwgMTE3MjYsIDExNzI4LCAxMTczNCwgMTE3MzYsIDExNzQyLCAxMTgyMywgMTE4MjMsIDEyMjkzLCAxMjI5NSwgMTIzMjEsXG4gIDEyMzI5LCAxMjMzNywgMTIzNDEsIDEyMzQ0LCAxMjM0OCwgMTIzNTMsIDEyNDM4LCAxMjQ0NSwgMTI0NDcsIDEyNDQ5LCAxMjUzOCwgMTI1NDAsIDEyNTQzLCAxMjU0OSwgMTI1ODksIDEyNTkzLCAxMjY4NixcbiAgMTI3MDQsIDEyNzMwLCAxMjc4NCwgMTI3OTksIDEzMzEyLCAxMzMxMiwgMTk4OTMsIDE5ODkzLCAxOTk2OCwgMTk5NjgsIDQwOTA3LCA0MDkwNywgNDA5NjAsIDQyMTI0LCA0MjE5MiwgNDIyMzcsIDQyMjQwLFxuICA0MjUwOCwgNDI1MTIsIDQyNTI3LCA0MjUzOCwgNDI1MzksIDQyNTYwLCA0MjYwNiwgNDI2MjMsIDQyNjQ3LCA0MjY1NiwgNDI3MzUsIDQyNzc1LCA0Mjc4MywgNDI3ODYsIDQyODg4LCA0Mjg5MSwgNDI4OTQsXG4gIDQyODk2LCA0Mjg5NywgNDI5MTIsIDQyOTIxLCA0MzAwMiwgNDMwMDksIDQzMDExLCA0MzAxMywgNDMwMTUsIDQzMDE4LCA0MzAyMCwgNDMwNDIsIDQzMDcyLCA0MzEyMywgNDMxMzgsIDQzMTg3LCA0MzI1MCxcbiAgNDMyNTUsIDQzMjU5LCA0MzI1OSwgNDMyNzQsIDQzMzAxLCA0MzMxMiwgNDMzMzQsIDQzMzYwLCA0MzM4OCwgNDMzOTYsIDQzNDQyLCA0MzQ3MSwgNDM0NzEsIDQzNTIwLCA0MzU2MCwgNDM1ODQsIDQzNTg2LFxuICA0MzU4OCwgNDM1OTUsIDQzNjE2LCA0MzYzOCwgNDM2NDIsIDQzNjQyLCA0MzY0OCwgNDM2OTUsIDQzNjk3LCA0MzY5NywgNDM3MDEsIDQzNzAyLCA0MzcwNSwgNDM3MDksIDQzNzEyLCA0MzcxMiwgNDM3MTQsXG4gIDQzNzE0LCA0MzczOSwgNDM3NDEsIDQzNzc3LCA0Mzc4MiwgNDM3ODUsIDQzNzkwLCA0Mzc5MywgNDM3OTgsIDQzODA4LCA0MzgxNCwgNDM4MTYsIDQzODIyLCA0Mzk2OCwgNDQwMDIsIDQ0MDMyLCA0NDAzMixcbiAgNTUyMDMsIDU1MjAzLCA1NTIxNiwgNTUyMzgsIDU1MjQzLCA1NTI5MSwgNjM3NDQsIDY0MDQ1LCA2NDA0OCwgNjQxMDksIDY0MTEyLCA2NDIxNywgNjQyNTYsIDY0MjYyLCA2NDI3NSwgNjQyNzksIDY0Mjg1LFxuICA2NDI4NSwgNjQyODcsIDY0Mjk2LCA2NDI5OCwgNjQzMTAsIDY0MzEyLCA2NDMxNiwgNjQzMTgsIDY0MzE4LCA2NDMyMCwgNjQzMjEsIDY0MzIzLCA2NDMyNCwgNjQzMjYsIDY0NDMzLCA2NDQ2NywgNjQ4MjksXG4gIDY0ODQ4LCA2NDkxMSwgNjQ5MTQsIDY0OTY3LCA2NTAwOCwgNjUwMTksIDY1MTM2LCA2NTE0MCwgNjUxNDIsIDY1Mjc2LCA2NTMxMywgNjUzMzgsIDY1MzQ1LCA2NTM3MCwgNjUzODIsIDY1NDcwLCA2NTQ3NCxcbiAgNjU0NzksIDY1NDgyLCA2NTQ4NywgNjU0OTAsIDY1NDk1LCA2NTQ5OCwgNjU1MDAsIDY1NTM2LCA2NTU0NywgNjU1NDksIDY1NTc0LCA2NTU3NiwgNjU1OTQsIDY1NTk2LCA2NTU5NywgNjU1OTksIDY1NjEzLFxuICA2NTYxNiwgNjU2MjksIDY1NjY0LCA2NTc4NiwgNjU4NTYsIDY1OTA4LCA2NjE3NiwgNjYyMDQsIDY2MjA4LCA2NjI1NiwgNjYzMDQsIDY2MzM0LCA2NjM1MiwgNjYzNzgsIDY2NDMyLCA2NjQ2MSwgNjY0NjQsXG4gIDY2NDk5LCA2NjUwNCwgNjY1MTEsIDY2NTEzLCA2NjUxNywgNjY1NjAsIDY2NzE3LCA2NzU4NCwgNjc1ODksIDY3NTkyLCA2NzU5MiwgNjc1OTQsIDY3NjM3LCA2NzYzOSwgNjc2NDAsIDY3NjQ0LCA2NzY0NCxcbiAgNjc2NDcsIDY3NjY5LCA2Nzg0MCwgNjc4NjEsIDY3ODcyLCA2Nzg5NywgNjgwOTYsIDY4MDk2LCA2ODExMiwgNjgxMTUsIDY4MTE3LCA2ODExOSwgNjgxMjEsIDY4MTQ3LCA2ODE5MiwgNjgyMjAsIDY4MzUyLFxuICA2ODQwNSwgNjg0MTYsIDY4NDM3LCA2ODQ0OCwgNjg0NjYsIDY4NjA4LCA2ODY4MCwgNjk2MzUsIDY5Njg3LCA2OTc2MywgNjk4MDcsIDczNzI4LCA3NDYwNiwgNzQ3NTIsIDc0ODUwLCA3NzgyNCwgNzg4OTQsXG4gIDkyMTYwLCA5MjcyOCwgMTEwNTkyLCAxMTA1OTMsIDExOTgwOCwgMTE5ODkyLCAxMTk4OTQsIDExOTk2NCwgMTE5OTY2LCAxMTk5NjcsIDExOTk3MCwgMTE5OTcwLCAxMTk5NzMsIDExOTk3NCwgMTE5OTc3LFxuICAxMTk5ODAsIDExOTk4MiwgMTE5OTkzLCAxMTk5OTUsIDExOTk5NSwgMTE5OTk3LCAxMjAwMDMsIDEyMDAwNSwgMTIwMDY5LCAxMjAwNzEsIDEyMDA3NCwgMTIwMDc3LCAxMjAwODQsIDEyMDA4NixcbiAgMTIwMDkyLCAxMjAwOTQsIDEyMDEyMSwgMTIwMTIzLCAxMjAxMjYsIDEyMDEyOCwgMTIwMTMyLCAxMjAxMzQsIDEyMDEzNCwgMTIwMTM4LCAxMjAxNDQsIDEyMDE0NiwgMTIwNDg1LCAxMjA0ODgsXG4gIDEyMDUxMiwgMTIwNTE0LCAxMjA1MzgsIDEyMDU0MCwgMTIwNTcwLCAxMjA1NzIsIDEyMDU5NiwgMTIwNTk4LCAxMjA2MjgsIDEyMDYzMCwgMTIwNjU0LCAxMjA2NTYsIDEyMDY4NiwgMTIwNjg4LFxuICAxMjA3MTIsIDEyMDcxNCwgMTIwNzQ0LCAxMjA3NDYsIDEyMDc3MCwgMTIwNzcyLCAxMjA3NzksIDEzMTA3MiwgMTMxMDcyLCAxNzM3ODIsIDE3Mzc4MiwgMTczODI0LCAxNzM4MjQsIDE3Nzk3MixcbiAgMTc3OTcyLCAxNzc5ODQsIDE3Nzk4NCwgMTc4MjA1LCAxNzgyMDUsIDE5NDU2MCwgMTk1MTAxLFxuXTtcblxuY29uc3QgaWRlbnRpZmllclN0YXJ0VGFibGU6IGFueVtdID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgaWRlbnRpZmllclN0YXJ0VGFibGVbaV0gPVxuICAgIChpID49IDQ4ICYmIGkgPD0gNTcpIHx8IC8vIDAtOVxuICAgIGkgPT09IDM2IHx8IC8vICRcbiAgICBpID09PSAxMjYgfHwgLy8gflxuICAgIGkgPT09IDEyNCB8fCAvLyB8XG4gICAgKGkgPj0gNjUgJiYgaSA8PSA5MCkgfHwgLy8gQS1aXG4gICAgaSA9PT0gOTUgfHwgLy8gX1xuICAgIGkgPT09IDQ1IHx8IC8vIC1cbiAgICBpID09PSA0MiB8fCAvLyAqXG4gICAgaSA9PT0gNTggfHwgLy8gOlxuICAgIGkgPT09IDkxIHx8IC8vIHRlbXBsYXRlU3RhcnQgW1xuICAgIGkgPT09IDkzIHx8IC8vIHRlbXBsYXRlRW5kIF1cbiAgICBpID09PSA2MyB8fCAvLyA/XG4gICAgaSA9PT0gMzcgfHwgLy8gJVxuICAgIGkgPT09IDM1IHx8IC8vICNcbiAgICBpID09PSA2MSB8fCAvLyA9XG4gICAgKGkgPj0gOTcgJiYgaSA8PSAxMjIpOyAvLyBhLXpcbn1cblxuY29uc3QgaWRlbnRpZmllclBhcnRUYWJsZSA9IGlkZW50aWZpZXJTdGFydFRhYmxlO1xuXG5leHBvcnQgY2xhc3MgTGV4ZXIge1xuICBpbnB1dDogYW55O1xuICBjaGFyOiBudW1iZXI7XG4gIGZyb206IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBhbnkpIHtcbiAgICB0aGlzLmlucHV0ID0gZXhwcmVzc2lvbjtcbiAgICB0aGlzLmNoYXIgPSAxO1xuICAgIHRoaXMuZnJvbSA9IDE7XG4gIH1cblxuICBwZWVrKGk/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC5jaGFyQXQoaSB8fCAwKTtcbiAgfVxuXG4gIHNraXAoaT86IG51bWJlcikge1xuICAgIGkgPSBpIHx8IDE7XG4gICAgdGhpcy5jaGFyICs9IGk7XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuaW5wdXQuc2xpY2UoaSk7XG4gIH1cblxuICB0b2tlbml6ZSgpIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG4gICAgbGV0IHRva2VuID0gdGhpcy5uZXh0KCk7XG4gICAgd2hpbGUgKHRva2VuKSB7XG4gICAgICBsaXN0LnB1c2godG9rZW4pO1xuICAgICAgdG9rZW4gPSB0aGlzLm5leHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIHRoaXMuZnJvbSA9IHRoaXMuY2hhcjtcblxuICAgIC8vIE1vdmUgdG8gdGhlIG5leHQgbm9uLXNwYWNlIGNoYXJhY3Rlci5cbiAgICBpZiAoL1xccy8udGVzdCh0aGlzLnBlZWsoKSkpIHtcbiAgICAgIHdoaWxlICgvXFxzLy50ZXN0KHRoaXMucGVlaygpKSkge1xuICAgICAgICB0aGlzLmZyb20gKz0gMTtcbiAgICAgICAgdGhpcy5za2lwKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJycpIHtcbiAgICAgICAgLy8gRU9MXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBtYXRjaCA9IHRoaXMuc2NhblN0cmluZ0xpdGVyYWwoKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG5cbiAgICBtYXRjaCA9IHRoaXMuc2NhblB1bmN0dWF0b3IoKSB8fCB0aGlzLnNjYW5OdW1lcmljTGl0ZXJhbCgpIHx8IHRoaXMuc2NhbklkZW50aWZpZXIoKSB8fCB0aGlzLnNjYW5UZW1wbGF0ZVNlcXVlbmNlKCk7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHRoaXMuc2tpcChtYXRjaC52YWx1ZS5sZW5ndGgpO1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cblxuICAgIC8vIE5vIHRva2VuIGNvdWxkIGJlIG1hdGNoZWQsIGdpdmUgdXAuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzY2FuVGVtcGxhdGVTZXF1ZW5jZSgpIHtcbiAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdbJyAmJiB0aGlzLnBlZWsoMSkgPT09ICdbJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3RlbXBsYXRlU3RhcnQnLFxuICAgICAgICB2YWx1ZTogJ1tbJyxcbiAgICAgICAgcG9zOiB0aGlzLmNoYXIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJ10nICYmIHRoaXMucGVlaygxKSA9PT0gJ10nKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAndGVtcGxhdGVFbmQnLFxuICAgICAgICB2YWx1ZTogJ1tbJyxcbiAgICAgICAgcG9zOiB0aGlzLmNoYXIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLypcbiAgICogRXh0cmFjdCBhIEphdmFTY3JpcHQgaWRlbnRpZmllciBvdXQgb2YgdGhlIG5leHQgc2VxdWVuY2Ugb2ZcbiAgICogY2hhcmFjdGVycyBvciByZXR1cm4gJ251bGwnIGlmIGl0cyBub3QgcG9zc2libGUuIEluIGFkZGl0aW9uLFxuICAgKiB0byBJZGVudGlmaWVyIHRoaXMgbWV0aG9kIGNhbiBhbHNvIHByb2R1Y2UgQm9vbGVhbkxpdGVyYWxcbiAgICogKHRydWUvZmFsc2UpIGFuZCBOdWxsTGl0ZXJhbCAobnVsbCkuXG4gICAqL1xuICBzY2FuSWRlbnRpZmllcigpIHtcbiAgICBsZXQgaWQgPSAnJztcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCB0eXBlLCBjaGFyO1xuXG4gICAgLy8gRGV0ZWN0cyBhbnkgY2hhcmFjdGVyIGluIHRoZSBVbmljb2RlIGNhdGVnb3JpZXMgXCJVcHBlcmNhc2VcbiAgICAvLyBsZXR0ZXIgKEx1KVwiLCBcIkxvd2VyY2FzZSBsZXR0ZXIgKExsKVwiLCBcIlRpdGxlY2FzZSBsZXR0ZXJcbiAgICAvLyAoTHQpXCIsIFwiTW9kaWZpZXIgbGV0dGVyIChMbSlcIiwgXCJPdGhlciBsZXR0ZXIgKExvKVwiLCBvclxuICAgIC8vIFwiTGV0dGVyIG51bWJlciAoTmwpXCIuXG4gICAgLy9cbiAgICAvLyBCb3RoIGFwcHJvYWNoIGFuZCB1bmljb2RlTGV0dGVyVGFibGUgd2VyZSBib3Jyb3dlZCBmcm9tXG4gICAgLy8gR29vZ2xlJ3MgVHJhY2V1ci5cblxuICAgIGZ1bmN0aW9uIGlzVW5pY29kZUxldHRlcihjb2RlOiBudW1iZXIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pY29kZUxldHRlclRhYmxlLmxlbmd0aDsgKSB7XG4gICAgICAgIGlmIChjb2RlIDwgdW5pY29kZUxldHRlclRhYmxlW2krK10pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA8PSB1bmljb2RlTGV0dGVyVGFibGVbaSsrXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0hleERpZ2l0KHN0cjogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gL15bMC05YS1mQS1GXSQvLnRlc3Qoc3RyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWFkVW5pY29kZUVzY2FwZVNlcXVlbmNlID0gYmluZChmdW5jdGlvbiAodGhpczogYW55KSB7XG4gICAgICBpbmRleCArPSAxO1xuXG4gICAgICBpZiAodGhpcy5wZWVrKGluZGV4KSAhPT0gJ3UnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaDEgPSB0aGlzLnBlZWsoaW5kZXggKyAxKTtcbiAgICAgIGNvbnN0IGNoMiA9IHRoaXMucGVlayhpbmRleCArIDIpO1xuICAgICAgY29uc3QgY2gzID0gdGhpcy5wZWVrKGluZGV4ICsgMyk7XG4gICAgICBjb25zdCBjaDQgPSB0aGlzLnBlZWsoaW5kZXggKyA0KTtcbiAgICAgIGxldCBjb2RlO1xuXG4gICAgICBpZiAoaXNIZXhEaWdpdChjaDEpICYmIGlzSGV4RGlnaXQoY2gyKSAmJiBpc0hleERpZ2l0KGNoMykgJiYgaXNIZXhEaWdpdChjaDQpKSB7XG4gICAgICAgIGNvZGUgPSBwYXJzZUludChjaDEgKyBjaDIgKyBjaDMgKyBjaDQsIDE2KTtcblxuICAgICAgICBpZiAoaXNVbmljb2RlTGV0dGVyKGNvZGUpKSB7XG4gICAgICAgICAgaW5kZXggKz0gNTtcbiAgICAgICAgICByZXR1cm4gJ1xcXFx1JyArIGNoMSArIGNoMiArIGNoMyArIGNoNDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCB0aGlzKTtcblxuICAgIGNvbnN0IGdldElkZW50aWZpZXJTdGFydCA9IGJpbmQoZnVuY3Rpb24gKHRoaXM6IGFueSkge1xuICAgICAgY29uc3QgY2hyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICAgIGNvbnN0IGNvZGUgPSBjaHIuY2hhckNvZGVBdCgwKTtcblxuICAgICAgaWYgKGNociA9PT0gJyonKSB7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHJldHVybiBjaHI7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2RlID09PSA5Mikge1xuICAgICAgICByZXR1cm4gcmVhZFVuaWNvZGVFc2NhcGVTZXF1ZW5jZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgICBpZiAoaWRlbnRpZmllclN0YXJ0VGFibGVbY29kZV0pIHtcbiAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIHJldHVybiBjaHI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzVW5pY29kZUxldHRlcihjb2RlKSkge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICByZXR1cm4gY2hyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCB0aGlzKTtcblxuICAgIGNvbnN0IGdldElkZW50aWZpZXJQYXJ0ID0gYmluZChmdW5jdGlvbiAodGhpczogYW55KSB7XG4gICAgICBjb25zdCBjaHIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgY29uc3QgY29kZSA9IGNoci5jaGFyQ29kZUF0KDApO1xuXG4gICAgICBpZiAoY29kZSA9PT0gOTIpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRVbmljb2RlRXNjYXBlU2VxdWVuY2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvZGUgPCAxMjgpIHtcbiAgICAgICAgaWYgKGlkZW50aWZpZXJQYXJ0VGFibGVbY29kZV0pIHtcbiAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIHJldHVybiBjaHI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzVW5pY29kZUxldHRlcihjb2RlKSkge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICByZXR1cm4gY2hyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCB0aGlzKTtcblxuICAgIGNoYXIgPSBnZXRJZGVudGlmaWVyU3RhcnQoKTtcbiAgICBpZiAoY2hhciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWQgPSBjaGFyO1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNoYXIgPSBnZXRJZGVudGlmaWVyUGFydCgpO1xuXG4gICAgICBpZiAoY2hhciA9PT0gbnVsbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWQgKz0gY2hhcjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICBjYXNlICd0cnVlJzoge1xuICAgICAgICB0eXBlID0gJ2Jvb2wnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2ZhbHNlJzoge1xuICAgICAgICB0eXBlID0gJ2Jvb2wnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHR5cGUgPSAnaWRlbnRpZmllcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICB2YWx1ZTogaWQsXG4gICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICB9O1xuICB9XG5cbiAgLypcbiAgICogRXh0cmFjdCBhIG51bWVyaWMgbGl0ZXJhbCBvdXQgb2YgdGhlIG5leHQgc2VxdWVuY2Ugb2ZcbiAgICogY2hhcmFjdGVycyBvciByZXR1cm4gJ251bGwnIGlmIGl0cyBub3QgcG9zc2libGUuIFRoaXMgbWV0aG9kXG4gICAqIHN1cHBvcnRzIGFsbCBudW1lcmljIGxpdGVyYWxzIGRlc2NyaWJlZCBpbiBzZWN0aW9uIDcuOC4zXG4gICAqIG9mIHRoZSBFY21hU2NyaXB0IDUgc3BlY2lmaWNhdGlvbi5cbiAgICpcbiAgICogVGhpcyBtZXRob2QncyBpbXBsZW1lbnRhdGlvbiB3YXMgaGVhdmlseSBpbmZsdWVuY2VkIGJ5IHRoZVxuICAgKiBzY2FuTnVtZXJpY0xpdGVyYWwgZnVuY3Rpb24gaW4gdGhlIEVzcHJpbWEgcGFyc2VyJ3Mgc291cmNlIGNvZGUuXG4gICAqL1xuICBzY2FuTnVtZXJpY0xpdGVyYWwoKTogYW55IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuaW5wdXQubGVuZ3RoO1xuICAgIGxldCBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICBsZXQgYmFkO1xuXG4gICAgZnVuY3Rpb24gaXNEZWNpbWFsRGlnaXQoc3RyOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiAvXlswLTldJC8udGVzdChzdHIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzT2N0YWxEaWdpdChzdHI6IHN0cmluZykge1xuICAgICAgcmV0dXJuIC9eWzAtN10kLy50ZXN0KHN0cik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNIZXhEaWdpdChzdHI6IHN0cmluZykge1xuICAgICAgcmV0dXJuIC9eWzAtOWEtZkEtRl0kLy50ZXN0KHN0cik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNJZGVudGlmaWVyU3RhcnQoY2g6IHN0cmluZykge1xuICAgICAgcmV0dXJuIGNoID09PSAnJCcgfHwgY2ggPT09ICdfJyB8fCBjaCA9PT0gJ1xcXFwnIHx8IChjaCA+PSAnYScgJiYgY2ggPD0gJ3onKSB8fCAoY2ggPj0gJ0EnICYmIGNoIDw9ICdaJyk7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIG5lZ2F0aXZlIG51bSBsaXRlcmFsc1xuICAgIGlmIChjaGFyID09PSAnLScpIHtcbiAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICBpbmRleCArPSAxO1xuICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgfVxuXG4gICAgLy8gTnVtYmVycyBtdXN0IHN0YXJ0IGVpdGhlciB3aXRoIGEgZGVjaW1hbCBkaWdpdCBvciBhIHBvaW50LlxuICAgIGlmIChjaGFyICE9PSAnLicgJiYgIWlzRGVjaW1hbERpZ2l0KGNoYXIpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY2hhciAhPT0gJy4nKSB7XG4gICAgICB2YWx1ZSArPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuXG4gICAgICBpZiAodmFsdWUgPT09ICcwJykge1xuICAgICAgICAvLyBCYXNlLTE2IG51bWJlcnMuXG4gICAgICAgIGlmIChjaGFyID09PSAneCcgfHwgY2hhciA9PT0gJ1gnKSB7XG4gICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICB2YWx1ZSArPSBjaGFyO1xuXG4gICAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICAgICAgICAgIGlmICghaXNIZXhEaWdpdChjaGFyKSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgLy8gMHhcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIGlzTWFsZm9ybWVkOiB0cnVlLFxuICAgICAgICAgICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICAgICAgICAgIGlmIChpc0lkZW50aWZpZXJTdGFydChjaGFyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBiYXNlOiAxNixcbiAgICAgICAgICAgIGlzTWFsZm9ybWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYXNlLTggbnVtYmVycy5cbiAgICAgICAgaWYgKGlzT2N0YWxEaWdpdChjaGFyKSkge1xuICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICBiYWQgPSBmYWxzZTtcblxuICAgICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG5cbiAgICAgICAgICAgIC8vIE51bWJlcnMgbGlrZSAnMDE5JyAobm90ZSB0aGUgOSkgYXJlIG5vdCB2YWxpZCBvY3RhbHNcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBzdGlsbCBwYXJzZSB0aGVtIGFuZCBtYXJrIGFzIG1hbGZvcm1lZC5cblxuICAgICAgICAgICAgaWYgKGlzRGVjaW1hbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgICAgIGJhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzT2N0YWxEaWdpdChjaGFyKSkge1xuICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hhciBpcyBhIG5vbiBwdW5jdHVhdG9yIHRoZW4gaXRzIG5vdCBhIHZhbGlkIG51bWJlclxuICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNQdW5jdHVhdG9yKGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KGNoYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGJhc2U6IDgsXG4gICAgICAgICAgICBpc01hbGZvcm1lZDogYmFkLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWNpbWFsIG51bWJlcnMgdGhhdCBzdGFydCB3aXRoICcwJyBzdWNoIGFzICcwOScgYXJlIGlsbGVnYWxcbiAgICAgICAgLy8gYnV0IHdlIHN0aWxsIHBhcnNlIHRoZW0gYW5kIHJldHVybiBhcyBtYWxmb3JtZWQuXG5cbiAgICAgICAgaWYgKGlzRGVjaW1hbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICAgICAgaWYgKCFpc0RlY2ltYWxEaWdpdChjaGFyKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVjaW1hbCBkaWdpdHMuXG5cbiAgICBpZiAoY2hhciA9PT0gJy4nKSB7XG4gICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgaW5kZXggKz0gMTtcblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgICBpZiAoIWlzRGVjaW1hbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvbmVudCBwYXJ0LlxuXG4gICAgaWYgKGNoYXIgPT09ICdlJyB8fCBjaGFyID09PSAnRScpIHtcbiAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICBpbmRleCArPSAxO1xuICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyID09PSAnKycgfHwgY2hhciA9PT0gJy0nKSB7XG4gICAgICAgIHZhbHVlICs9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgaWYgKGlzRGVjaW1hbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICAgIGluZGV4ICs9IDE7XG5cbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICAgICAgaWYgKCFpc0RlY2ltYWxEaWdpdChjaGFyKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICAgIGlmICghdGhpcy5pc1B1bmN0dWF0b3IoY2hhcikpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgYmFzZTogMTAsXG4gICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICAgIGlzTWFsZm9ybWVkOiAhaXNGaW5pdGUoK3ZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgaXNQdW5jdHVhdG9yKGNoMTogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChjaDEpIHtcbiAgICAgIGNhc2UgJy4nOlxuICAgICAgY2FzZSAnKCc6XG4gICAgICBjYXNlICcpJzpcbiAgICAgIGNhc2UgJywnOlxuICAgICAgY2FzZSAneyc6XG4gICAgICBjYXNlICd9JzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2NhblB1bmN0dWF0b3IoKSB7XG4gICAgY29uc3QgY2gxID0gdGhpcy5wZWVrKCk7XG5cbiAgICBpZiAodGhpcy5pc1B1bmN0dWF0b3IoY2gxKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogY2gxLFxuICAgICAgICB2YWx1ZTogY2gxLFxuICAgICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0IGEgc3RyaW5nIG91dCBvZiB0aGUgbmV4dCBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGFuZC9vclxuICAgKiBsaW5lcyBvciByZXR1cm4gJ251bGwnIGlmIGl0cyBub3QgcG9zc2libGUuIFNpbmNlIHN0cmluZ3MgY2FuXG4gICAqIHNwYW4gYWNyb3NzIG11bHRpcGxlIGxpbmVzIHRoaXMgbWV0aG9kIGhhcyB0byBtb3ZlIHRoZSBjaGFyXG4gICAqIHBvaW50ZXIuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHJlY29nbml6ZXMgcHNldWRvLW11bHRpbGluZSBKYXZhU2NyaXB0IHN0cmluZ3M6XG4gICAqXG4gICAqICAgdmFyIHN0ciA9IFwiaGVsbG9cXFxuICAgKiAgIHdvcmxkXCI7XG4gICAqL1xuICBzY2FuU3RyaW5nTGl0ZXJhbCgpIHtcbiAgICBjb25zdCBxdW90ZSA9IHRoaXMucGVlaygpO1xuXG4gICAgLy8gU3RyaW5nIG11c3Qgc3RhcnQgd2l0aCBhIHF1b3RlLlxuICAgIGlmIChxdW90ZSAhPT0gJ1wiJyAmJiBxdW90ZSAhPT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCB2YWx1ZSA9ICcnO1xuXG4gICAgdGhpcy5za2lwKCk7XG5cbiAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09IHF1b3RlKSB7XG4gICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICcnKSB7XG4gICAgICAgIC8vIEVuZCBPZiBMaW5lXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGlzVW5jbG9zZWQ6IHRydWUsXG4gICAgICAgICAgcXVvdGU6IHF1b3RlLFxuICAgICAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGFyID0gdGhpcy5wZWVrKCk7XG4gICAgICBjb25zdCBqdW1wID0gMTsgLy8gQSBsZW5ndGggb2YgYSBqdW1wLCBhZnRlciB3ZSdyZSBkb25lXG4gICAgICAvLyBwYXJzaW5nIHRoaXMgY2hhcmFjdGVyLlxuXG4gICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgdGhpcy5za2lwKGp1bXApO1xuICAgIH1cblxuICAgIHRoaXMuc2tpcCgpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGlzVW5jbG9zZWQ6IGZhbHNlLFxuICAgICAgcXVvdGU6IHF1b3RlLFxuICAgICAgcG9zOiB0aGlzLmNoYXIsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWV0cmljVGFua1Nlcmllc01ldGEgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFF1ZXJ5UmVzdWx0TWV0YU5vdGljZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9tZXRyaWN0YW5rL2Jsb2IvbWFzdGVyL3NjcmlwdHMvY29uZmlnL3N0b3JhZ2Utc2NoZW1hcy5jb25mI0wxNS1MNDZcblxuZXhwb3J0IGludGVyZmFjZSBSZXRlbnRpb25JbmZvIHtcbiAgaW50ZXJ2YWw6IHN0cmluZztcbiAgcmV0ZW50aW9uPzogc3RyaW5nO1xuICBjaHVua3NwYW4/OiBzdHJpbmc7XG4gIG51bWNodW5rcz86IG51bWJlcjtcbiAgcmVhZHk/OiBib29sZWFuIHwgbnVtYmVyOyAvLyB3aGV0aGVyLCBvciBhcyBvZiB3aGF0IGRhdGEgdGltZXN0YW1wLCB0aGUgYXJjaGl2ZSBpcyByZWFkeSBmb3IgcXVlcnlpbmcuXG59XG5cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWw/OiBzdHJpbmcpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHRvQm9vbGVhbk9yVGltZXN0YW1wKHZhbD86IHN0cmluZyk6IG51bWJlciB8IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICBpZiAodmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvbGx1cE5vdGljZShtZXRhTGlzdDogTWV0cmljVGFua1Nlcmllc01ldGFbXSk6IFF1ZXJ5UmVzdWx0TWV0YU5vdGljZSB8IG51bGwge1xuICBmb3IgKGNvbnN0IG1ldGEgb2YgbWV0YUxpc3QpIHtcbiAgICBjb25zdCBhcmNoaXZlSW5kZXggPSBtZXRhWydhcmNoaXZlLXJlYWQnXTtcblxuICAgIGlmIChhcmNoaXZlSW5kZXggPiAwKSB7XG4gICAgICBjb25zdCBzY2hlbWEgPSBwYXJzZVNjaGVtYVJldGVudGlvbnMobWV0YVsnc2NoZW1hLXJldGVudGlvbnMnXSk7XG4gICAgICBjb25zdCBpbnRlcnZhbFN0cmluZyA9IHNjaGVtYVthcmNoaXZlSW5kZXhdLmludGVydmFsO1xuICAgICAgY29uc3QgZnVuYyA9IChtZXRhWydjb25zb2xpZGF0b3Itbm9ybWZldGNoJ10gPz8gJycpLnJlcGxhY2UoJ0NvbnNvbGlkYXRvcicsICcnKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogYERhdGEgaXMgcm9sbGVkIHVwLCBhZ2dyZWdhdGVkIG92ZXIgJHtpbnRlcnZhbFN0cmluZ30gdXNpbmcgJHtmdW5jfSBmdW5jdGlvbmAsXG4gICAgICAgIHNldmVyaXR5OiAnaW5mbycsXG4gICAgICAgIGluc3BlY3Q6ICdtZXRhJyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSdW50aW1lQ29uc29saWRhdGlvbk5vdGljZShtZXRhTGlzdDogTWV0cmljVGFua1Nlcmllc01ldGFbXSk6IFF1ZXJ5UmVzdWx0TWV0YU5vdGljZSB8IG51bGwge1xuICBmb3IgKGNvbnN0IG1ldGEgb2YgbWV0YUxpc3QpIHtcbiAgICBjb25zdCBydW50aW1lTnIgPSBtZXRhWydhZ2dudW0tcmMnXTtcblxuICAgIGlmIChydW50aW1lTnIgPiAwKSB7XG4gICAgICBjb25zdCBmdW5jID0gKG1ldGFbJ2NvbnNvbGlkYXRvci1yYyddID8/ICcnKS5yZXBsYWNlKCdDb25zb2xpZGF0b3InLCAnJyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IGBEYXRhIGlzIHJ1bnRpbWUgY29uc29saWRhdGVkLCAke3J1bnRpbWVOcn0gZGF0YXBvaW50cyBjb21iaW5lZCB1c2luZyAke2Z1bmN9IGZ1bmN0aW9uYCxcbiAgICAgICAgc2V2ZXJpdHk6ICdpbmZvJyxcbiAgICAgICAgaW5zcGVjdDogJ21ldGEnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2NoZW1hUmV0ZW50aW9ucyhzcGVjOiBzdHJpbmcpOiBSZXRlbnRpb25JbmZvW10ge1xuICBpZiAoIXNwZWMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIHNwZWMuc3BsaXQoJywnKS5tYXAoKHN0cikgPT4ge1xuICAgIGNvbnN0IHZhbHMgPSBzdHIuc3BsaXQoJzonKTtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZXJ2YWw6IHZhbHNbMF0sXG4gICAgICByZXRlbnRpb246IHZhbHNbMV0sXG4gICAgICBjaHVua3NwYW46IHZhbHNbMl0sXG4gICAgICBudW1jaHVua3M6IHRvSW50ZWdlcih2YWxzWzNdKSxcbiAgICAgIHJlYWR5OiB0b0Jvb2xlYW5PclRpbWVzdGFtcCh2YWxzWzRdKSxcbiAgICB9O1xuICB9KTtcbn1cbiIsImltcG9ydCB7IEdyYXBoaXRlRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBDb25maWdFZGl0b3IgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IE1ldHJpY1RhbmtNZXRhSW5zcGVjdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL01ldHJpY1RhbmtNZXRhSW5zcGVjdG9yJztcbmltcG9ydCB7IEdyYXBoaXRlUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvR3JhcGhpdGVRdWVyeUVkaXRvcic7XG5cbmNsYXNzIEFubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcbn1cblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luKEdyYXBoaXRlRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5RWRpdG9yKEdyYXBoaXRlUXVlcnlFZGl0b3IpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKVxuICAuc2V0TWV0YWRhdGFJbnNwZWN0b3IoTWV0cmljVGFua01ldGFJbnNwZWN0b3IpXG4gIC5zZXRBbm5vdGF0aW9uUXVlcnlDdHJsKEFubm90YXRpb25zUXVlcnlDdHJsKTtcbiIsImltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBleHByZXNzaW9uOiBhbnk7XG4gIGxleGVyOiBMZXhlcjtcbiAgdG9rZW5zOiBhbnk7XG4gIGluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogYW55KSB7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB0aGlzLmxleGVyID0gbmV3IExleGVyKGV4cHJlc3Npb24pO1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci50b2tlbml6ZSgpO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgZ2V0QXN0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25DYWxsKCkgfHwgdGhpcy5tZXRyaWNFeHByZXNzaW9uKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgICBwb3M6IGUucG9zLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBjdXJseUJyYWNlU2VnbWVudCgpIHtcbiAgICBpZiAodGhpcy5tYXRjaCgnaWRlbnRpZmllcicsICd7JykgfHwgdGhpcy5tYXRjaCgneycpKSB7XG4gICAgICBsZXQgY3VybHlTZWdtZW50ID0gJyc7XG5cbiAgICAgIHdoaWxlICghdGhpcy5tYXRjaCgnJykgJiYgIXRoaXMubWF0Y2goJ30nKSkge1xuICAgICAgICBjdXJseVNlZ21lbnQgKz0gdGhpcy5jb25zdW1lVG9rZW4oKS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm1hdGNoKCd9JykpIHtcbiAgICAgICAgdGhpcy5lcnJvck1hcmsoXCJFeHBlY3RlZCBjbG9zaW5nICd9J1wiKTtcbiAgICAgIH1cblxuICAgICAgY3VybHlTZWdtZW50ICs9IHRoaXMuY29uc3VtZVRva2VuKCkudmFsdWU7XG5cbiAgICAgIC8vIGlmIGN1cmx5IHNlZ21lbnQgaXMgZGlyZWN0bHkgZm9sbG93ZWQgYnkgaWRlbnRpZmllclxuICAgICAgLy8gaW5jbHVkZSBpdCBpbiB0aGUgc2VnbWVudFxuICAgICAgaWYgKHRoaXMubWF0Y2goJ2lkZW50aWZpZXInKSkge1xuICAgICAgICBjdXJseVNlZ21lbnQgKz0gdGhpcy5jb25zdW1lVG9rZW4oKS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NlZ21lbnQnLFxuICAgICAgICB2YWx1ZTogY3VybHlTZWdtZW50LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbWV0cmljU2VnbWVudCgpIHtcbiAgICBjb25zdCBjdXJseSA9IHRoaXMuY3VybHlCcmFjZVNlZ21lbnQoKTtcbiAgICBpZiAoY3VybHkpIHtcbiAgICAgIHJldHVybiBjdXJseTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXRjaCgnaWRlbnRpZmllcicpIHx8IHRoaXMubWF0Y2goJ251bWJlcicpKSB7XG4gICAgICAvLyBoYWNrIHRvIGhhbmRsZSBmbG9hdCBudW1iZXJzIGluIG1ldHJpYyBzZWdtZW50c1xuICAgICAgY29uc3QgcGFydHMgPSB0aGlzLmNvbnN1bWVUb2tlbigpLnZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBpZiAocGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNwbGljZSh0aGlzLmluZGV4LCAwLCB7IHR5cGU6ICcuJyB9KTtcbiAgICAgICAgdGhpcy50b2tlbnMuc3BsaWNlKHRoaXMuaW5kZXggKyAxLCAwLCB7XG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgdmFsdWU6IHBhcnRzWzFdLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NlZ21lbnQnLFxuICAgICAgICB2YWx1ZTogcGFydHNbMF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tYXRjaCgndGVtcGxhdGVTdGFydCcpKSB7XG4gICAgICB0aGlzLmVycm9yTWFyaygnRXhwZWN0ZWQgbWV0cmljIGlkZW50aWZpZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVUb2tlbigpO1xuXG4gICAgaWYgKCF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJykpIHtcbiAgICAgIHRoaXMuZXJyb3JNYXJrKCdFeHBlY3RlZCBpZGVudGlmaWVyIGFmdGVyIHRlbXBsYXRlU3RhcnQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0ge1xuICAgICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICAgIHZhbHVlOiB0aGlzLmNvbnN1bWVUb2tlbigpLnZhbHVlLFxuICAgIH07XG5cbiAgICBpZiAoIXRoaXMubWF0Y2goJ3RlbXBsYXRlRW5kJykpIHtcbiAgICAgIHRoaXMuZXJyb3JNYXJrKCdFeHBlY3RlZCB0ZW1wbGF0ZUVuZCcpO1xuICAgIH1cblxuICAgIHRoaXMuY29uc3VtZVRva2VuKCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBtZXRyaWNFeHByZXNzaW9uKCkge1xuICAgIGlmICghdGhpcy5tYXRjaCgndGVtcGxhdGVTdGFydCcpICYmICF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJykgJiYgIXRoaXMubWF0Y2goJ251bWJlcicpICYmICF0aGlzLm1hdGNoKCd7JykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGU6IGFueSA9IHtcbiAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgc2VnbWVudHM6IFtdLFxuICAgIH07XG5cbiAgICBub2RlLnNlZ21lbnRzLnB1c2godGhpcy5tZXRyaWNTZWdtZW50KCkpO1xuXG4gICAgd2hpbGUgKHRoaXMubWF0Y2goJy4nKSkge1xuICAgICAgdGhpcy5jb25zdW1lVG9rZW4oKTtcblxuICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMubWV0cmljU2VnbWVudCgpO1xuICAgICAgaWYgKCFzZWdtZW50KSB7XG4gICAgICAgIHRoaXMuZXJyb3JNYXJrKCdFeHBlY3RlZCBtZXRyaWMgaWRlbnRpZmllcicpO1xuICAgICAgfVxuXG4gICAgICBub2RlLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbkNhbGwoKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJywgJygnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZTogYW55ID0ge1xuICAgICAgdHlwZTogJ2Z1bmN0aW9uJyxcbiAgICAgIG5hbWU6IHRoaXMuY29uc3VtZVRva2VuKCkudmFsdWUsXG4gICAgfTtcblxuICAgIC8vIGNvbnN1bWUgbGVmdCBwYXJlbnRoZXNpc1xuICAgIHRoaXMuY29uc3VtZVRva2VuKCk7XG5cbiAgICBub2RlLnBhcmFtcyA9IHRoaXMuZnVuY3Rpb25QYXJhbWV0ZXJzKCk7XG5cbiAgICBpZiAoIXRoaXMubWF0Y2goJyknKSkge1xuICAgICAgdGhpcy5lcnJvck1hcmsoJ0V4cGVjdGVkIGNsb3NpbmcgcGFyZW50aGVzaXMnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVUb2tlbigpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBib29sRXhwcmVzc2lvbigpIHtcbiAgICBpZiAoIXRoaXMubWF0Y2goJ2Jvb2wnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdib29sJyxcbiAgICAgIHZhbHVlOiB0aGlzLmNvbnN1bWVUb2tlbigpLnZhbHVlID09PSAndHJ1ZScsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uUGFyYW1ldGVycygpOiBhbnkge1xuICAgIGlmICh0aGlzLm1hdGNoKCcpJykgfHwgdGhpcy5tYXRjaCgnJykpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbSA9XG4gICAgICB0aGlzLmZ1bmN0aW9uQ2FsbCgpIHx8XG4gICAgICB0aGlzLm51bWVyaWNMaXRlcmFsKCkgfHxcbiAgICAgIHRoaXMuc2VyaWVzUmVmRXhwcmVzc2lvbigpIHx8XG4gICAgICB0aGlzLmJvb2xFeHByZXNzaW9uKCkgfHxcbiAgICAgIHRoaXMubWV0cmljRXhwcmVzc2lvbigpIHx8XG4gICAgICB0aGlzLnN0cmluZ0xpdGVyYWwoKTtcblxuICAgIGlmICghdGhpcy5tYXRjaCgnLCcpKSB7XG4gICAgICByZXR1cm4gW3BhcmFtXTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVUb2tlbigpO1xuICAgIHJldHVybiBbcGFyYW1dLmNvbmNhdCh0aGlzLmZ1bmN0aW9uUGFyYW1ldGVycygpKTtcbiAgfVxuXG4gIHNlcmllc1JlZkV4cHJlc3Npb24oKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF0udmFsdWU7XG4gICAgaWYgKCF2YWx1ZS5tYXRjaCgvXFwjW0EtWl0vKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWVUb2tlbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzZXJpZXMtcmVmJyxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgbnVtZXJpY0xpdGVyYWwoKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdudW1iZXInKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQodGhpcy5jb25zdW1lVG9rZW4oKS52YWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHN0cmluZ0xpdGVyYWwoKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdzdHJpbmcnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWVUb2tlbigpO1xuICAgIGlmICh0b2tlbi5pc1VuY2xvc2VkKSB7XG4gICAgICB0aHJvdyB7IG1lc3NhZ2U6ICdVbmNsb3NlZCBzdHJpbmcgcGFyYW1ldGVyJywgcG9zOiB0b2tlbi5wb3MgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIGVycm9yTWFyayh0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjdXJyZW50VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICBjb25zdCB0eXBlID0gY3VycmVudFRva2VuID8gY3VycmVudFRva2VuLnR5cGUgOiAnZW5kIG9mIHN0cmluZyc7XG4gICAgdGhyb3cge1xuICAgICAgbWVzc2FnZTogdGV4dCArICcgaW5zdGVhZCBmb3VuZCAnICsgdHlwZSxcbiAgICAgIHBvczogY3VycmVudFRva2VuID8gY3VycmVudFRva2VuLnBvcyA6IHRoaXMubGV4ZXIuY2hhcixcbiAgICB9O1xuICB9XG5cbiAgLy8gcmV0dXJucyB0b2tlbiB2YWx1ZSBhbmQgaW5jcmVcbiAgY29uc3VtZVRva2VuKCkge1xuICAgIHRoaXMuaW5kZXgrKztcbiAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleCAtIDFdO1xuICB9XG5cbiAgbWF0Y2hUb2tlbih0eXBlOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXggKyBpbmRleF07XG4gICAgcmV0dXJuICh0b2tlbiA9PT0gdW5kZWZpbmVkICYmIHR5cGUgPT09ICcnKSB8fCAodG9rZW4gJiYgdG9rZW4udHlwZSA9PT0gdHlwZSk7XG4gIH1cblxuICBtYXRjaCh0b2tlbjE6IGFueSwgdG9rZW4yPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hUb2tlbih0b2tlbjEsIDApICYmICghdG9rZW4yIHx8IHRoaXMubWF0Y2hUb2tlbih0b2tlbjIsIDEpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR3JhcGhpdGVRdWVyeSwgR3JhcGhpdGVRdWVyeUVkaXRvckRlcGVuZGVuY2llcywgR3JhcGhpdGVTZWdtZW50LCBHcmFwaGl0ZVRhZyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi4vZ2Z1bmMnO1xuaW1wb3J0IHsgVGltZVJhbmdlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbi8qKlxuICogTGlzdCBvZiBwb3NzaWJsZSBhY3Rpb25zIGNoYW5naW5nIHRoZSBzdGF0ZSBvZiBRdWVyeUVkaXRvclxuICovXG5cbmNvbnN0IGluaXQgPSBjcmVhdGVBY3Rpb248R3JhcGhpdGVRdWVyeUVkaXRvckRlcGVuZGVuY2llcz4oJ2luaXQnKTtcblxuLyoqXG4gKiBTeW5jaHJvbmlzZSBlZGl0b3IgZGVwZW5kZW5jaWVzIHdpdGggaW50ZXJuYWwgc3RhdGUuXG4gKi9cbmNvbnN0IHRpbWVSYW5nZUNoYW5nZWQgPSBjcmVhdGVBY3Rpb248VGltZVJhbmdlIHwgdW5kZWZpbmVkPigndGltZS1yYW5nZS1jaGFuZ2VkJyk7XG5jb25zdCBxdWVyaWVzQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxHcmFwaGl0ZVF1ZXJ5W10gfCB1bmRlZmluZWQ+KCdxdWVyaWVzLWNoYW5nZWQnKTtcbmNvbnN0IHF1ZXJ5Q2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxHcmFwaGl0ZVF1ZXJ5PigncXVlcnktY2hhbmdlZCcpO1xuXG4vLyBNZXRyaWNzICYgVGFnc1xuY29uc3Qgc2VnbWVudFZhbHVlQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjx7IHNlZ21lbnQ6IEdyYXBoaXRlU2VnbWVudCB8IHN0cmluZzsgaW5kZXg6IG51bWJlciB9Pignc2VnbWVudC12YWx1ZS1jaGFuZ2VkJyk7XG5cbi8vIFRhZ3NcbmNvbnN0IGFkZE5ld1RhZyA9IGNyZWF0ZUFjdGlvbjx7IHNlZ21lbnQ6IEdyYXBoaXRlU2VnbWVudCB9PignYWRkLW5ldy10YWcnKTtcbmNvbnN0IHRhZ0NoYW5nZWQgPSBjcmVhdGVBY3Rpb248eyB0YWc6IEdyYXBoaXRlVGFnOyBpbmRleDogbnVtYmVyIH0+KCd0YWctY2hhbmdlZCcpO1xuY29uc3QgdW5wYXVzZSA9IGNyZWF0ZUFjdGlvbigndW5wYXVzZScpO1xuXG4vLyBGdW5jdGlvbnNcbmNvbnN0IGFkZEZ1bmN0aW9uID0gY3JlYXRlQWN0aW9uPHsgbmFtZTogc3RyaW5nIH0+KCdhZGQtZnVuY3Rpb24nKTtcbmNvbnN0IHJlbW92ZUZ1bmN0aW9uID0gY3JlYXRlQWN0aW9uPHsgZnVuYzogRnVuY0luc3RhbmNlIH0+KCdyZW1vdmUtZnVuY3Rpb24nKTtcbmNvbnN0IG1vdmVGdW5jdGlvbiA9IGNyZWF0ZUFjdGlvbjx7IGZ1bmM6IEZ1bmNJbnN0YW5jZTsgb2Zmc2V0OiBudW1iZXIgfT4oJ21vdmUtZnVuY3Rpb24nKTtcbmNvbnN0IHVwZGF0ZUZ1bmN0aW9uUGFyYW0gPSBjcmVhdGVBY3Rpb248eyBmdW5jOiBGdW5jSW5zdGFuY2U7IGluZGV4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfT4oJ2NoYW5nZS1mdW5jdGlvbi1wYXJhbScpO1xuXG4vLyBUZXh0IGVkaXRvclxuY29uc3QgdXBkYXRlUXVlcnkgPSBjcmVhdGVBY3Rpb248eyBxdWVyeTogc3RyaW5nIH0+KCd1cGRhdGUtcXVlcnknKTtcbmNvbnN0IHJ1blF1ZXJ5ID0gY3JlYXRlQWN0aW9uKCdydW4tY3VycmVudC1xdWVyeScpO1xuY29uc3QgdG9nZ2xlRWRpdG9yTW9kZSA9IGNyZWF0ZUFjdGlvbigndG9nZ2xlLWVkaXRvcicpO1xuXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcbiAgaW5pdCxcbiAgdGltZVJhbmdlQ2hhbmdlZCxcbiAgcXVlcmllc0NoYW5nZWQsXG4gIHF1ZXJ5Q2hhbmdlZCxcbiAgc2VnbWVudFZhbHVlQ2hhbmdlZCxcbiAgdGFnQ2hhbmdlZCxcbiAgYWRkTmV3VGFnLFxuICB1bnBhdXNlLFxuICBhZGRGdW5jdGlvbixcbiAgcmVtb3ZlRnVuY3Rpb24sXG4gIG1vdmVGdW5jdGlvbixcbiAgdXBkYXRlRnVuY3Rpb25QYXJhbSxcbiAgdXBkYXRlUXVlcnksXG4gIHJ1blF1ZXJ5LFxuICB0b2dnbGVFZGl0b3JNb2RlLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEdyYXBoaXRlRGF0YXNvdXJjZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgR3JhcGhpdGVPcHRpb25zLCBHcmFwaGl0ZVF1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvdGVtcGxhdGluZy90ZW1wbGF0ZV9zcnYnO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RGlzcGF0Y2g8QW55QWN0aW9uPj4oe30gYXMgRGlzcGF0Y2g8QW55QWN0aW9uPik7XG5jb25zdCBHcmFwaGl0ZVN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8R3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlPih7fSBhcyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUpO1xuXG5leHBvcnQgY29uc3QgdXNlRGlzcGF0Y2ggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR3JhcGhpdGVTdGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoR3JhcGhpdGVTdGF0ZUNvbnRleHQpO1xufTtcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVRdWVyeUVkaXRvclByb3BzID0gUXVlcnlFZGl0b3JQcm9wczxHcmFwaGl0ZURhdGFzb3VyY2UsIEdyYXBoaXRlUXVlcnksIEdyYXBoaXRlT3B0aW9ucz47XG5cbmV4cG9ydCBjb25zdCBHcmFwaGl0ZVF1ZXJ5RWRpdG9yQ29udGV4dCA9ICh7XG4gIGRhdGFzb3VyY2UsXG4gIG9uUnVuUXVlcnksXG4gIG9uQ2hhbmdlLFxuICBxdWVyeSxcbiAgcXVlcmllcyxcbiAgcmFuZ2UsXG4gIGNoaWxkcmVuLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48R3JhcGhpdGVRdWVyeUVkaXRvclByb3BzPikgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZT4oKTtcbiAgY29uc3QgW25lZWRzUmVmcmVzaCwgc2V0TmVlZHNSZWZyZXNoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVTdG9yZSgoc3RhdGUpID0+IHtcbiAgICAgIHNldFN0YXRlKHN0YXRlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIHN5bmNocm9uaXNlIGNoYW5nZXMgcHJvdmlkZWQgaW4gcHJvcHMgd2l0aCBlZGl0b3IncyBzdGF0ZVxuICBjb25zdCBwcmV2aW91c1JhbmdlID0gdXNlUHJldmlvdXMocmFuZ2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcmV2aW91c1JhbmdlPy5yYXcgIT09IHJhbmdlPy5yYXcpIHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMudGltZVJhbmdlQ2hhbmdlZChyYW5nZSkpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCByYW5nZSwgcHJldmlvdXNSYW5nZV0pO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5xdWVyaWVzQ2hhbmdlZChxdWVyaWVzKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBhZGRpbmcgc3RhdGUgdG8gZGVwZW5kZW5jaWVzIGNhdXNlcyBpbmZpbml0ZSBsb29wc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbZGlzcGF0Y2gsIHF1ZXJpZXNdXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50YXJnZXQ/LnRhcmdldCAhPT0gcXVlcnkudGFyZ2V0KSB7XG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMucXVlcnlDaGFuZ2VkKHF1ZXJ5KSk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBhZGRpbmcgc3RhdGUgdG8gZGVwZW5kZW5jaWVzIGNhdXNlcyBpbmZpbml0ZSBsb29wc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbZGlzcGF0Y2gsIHF1ZXJ5XVxuICApO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAobmVlZHNSZWZyZXNoICYmIHN0YXRlKSB7XG4gICAgICAgIHNldE5lZWRzUmVmcmVzaChmYWxzZSk7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHRhcmdldDogc3RhdGUudGFyZ2V0LnRhcmdldCB9KTtcbiAgICAgICAgb25SdW5RdWVyeSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gYWRkaW5nIHN0YXRlIHRvIGRlcGVuZGVuY2llcyBjYXVzZXMgaW5maW5pdGUgbG9vcHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW25lZWRzUmVmcmVzaCwgb25DaGFuZ2UsIG9uUnVuUXVlcnksIHF1ZXJ5XVxuICApO1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGFjdGlvbnMuaW5pdCh7XG4gICAgICAgIHRhcmdldDogcXVlcnksXG4gICAgICAgIGRhdGFzb3VyY2U6IGRhdGFzb3VyY2UsXG4gICAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgICAgdGVtcGxhdGVTcnY6IGdldFRlbXBsYXRlU3J2KCksXG4gICAgICAgIC8vIGxpc3Qgb2YgcXVlcmllcyBpcyBwYXNzZWQgb25seSB3aGVuIHRoZSBlZGl0b3IgaXMgaW4gRGFzaGJvYXJkcy4gVGhpcyBpcyB0byBhbGxvdyBpbnRlcnBvbGF0aW9uXG4gICAgICAgIC8vIG9mIHN1Yi1xdWVyaWVzIHdoaWNoIGFyZSBzdG9yZWQgaW4gXCJ0YXJnZXRGdWxsXCIgcHJvcGVydHkgdXNlZCBieSBhbGVydGluZyBpbiB0aGUgYmFja2VuZC5cbiAgICAgICAgcXVlcmllczogcXVlcmllcyB8fCBbXSxcbiAgICAgICAgcmVmcmVzaDogKCkgPT4ge1xuICAgICAgICAgIC8vIGRvIG5vdCBydW4gb25DaGFuZ2Uvb25SdW5RdWVyeSBzdHJhaWdodCBhd2F5IHRvIGVuc3VyZSB0aGUgaW50ZXJuYWwgc3RhdGUgZ2V0cyB1cGRhdGVkIGZpcnN0XG4gICAgICAgICAgLy8gdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIChvbkNoYW5nZSBjb3VsZCB1cGRhdGUgcHJvcHMgYmVmb3JlIHRoZSByZWR1Y2VyIGFjdGlvbiBmaW5pc2hlcylcbiAgICAgICAgICBzZXROZWVkc1JlZnJlc2godHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmFwaGl0ZVN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+e2NoaWxkcmVufTwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9HcmFwaGl0ZVN0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBjbG9uZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvcmVkdWNlcnMvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBGdW5jSW5zdGFuY2UgfSBmcm9tICcuLi9nZnVuYyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZVRhZ09wZXJhdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIEhlbHBlcnMgdXNlZCBieSByZWR1Y2VycyBhbmQgcHJvdmlkZXJzLiBUaGV5IG1vZGlmeSBzdGF0ZSBvYmplY3QgZGlyZWN0bHkgc28gc2hvdWxkIG9wZXJhdGUgb24gYSBjb3B5IG9mIHRoZSBzdGF0ZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgR1JBUEhJVEVfVEFHX09QRVJBVE9SUzogR3JhcGhpdGVUYWdPcGVyYXRvcltdID0gWyc9JywgJyE9JywgJz1+JywgJyE9fiddO1xuXG4vKipcbiAqIFRhZyBuYW1lcyBhbmQgbWV0cmljIG5hbWVzIGFyZSBkaXNwbGF5ZWQgaW4gYSBzaW5nbGUgZHJvcGRvd24uIFRoaXMgcHJlZml4IGlzIHVzZWQgdG9cbiAqIGRpc3Rpbmd1aXNoIGJvdGggaW4gdGhlIFVJLlxuICovXG5leHBvcnQgY29uc3QgVEFHX1BSRUZJWCA9ICd0YWc6ICc7XG5cbi8qKlxuICogQ3JlYXRlIG5ldyBBU1QgYmFzZWQgb24gbmV3IHF1ZXJ5LlxuICogQnVpbGQgc2VnbWVudHMgZnJvbSBwYXJzZWQgbWV0cmljIG5hbWUgYW5kIGZ1bmN0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlVGFyZ2V0KHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgc3RhdGUucXVlcnlNb2RlbC5wYXJzZVRhcmdldCgpO1xuICBhd2FpdCBidWlsZFNlZ21lbnRzKHN0YXRlKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgc2VnbWVudHMgb3V0IG9mIHRoZSBjdXJyZW50IG1ldHJpYyBwYXRoICsgYWRkIFwic2VsZWN0IG1ldHJpY3NcIiBpZiBpdCdzIHBvc3NpYmxlIHRvIGFkZCBtb3JlIHRvIHRoZSBwYXRoXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZFNlZ21lbnRzKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsIG1vZGlmeUxhc3RTZWdtZW50ID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBTdGFydCB3aXRoIGEgc2hhbGxvdyBjb3B5IGZyb20gdGhlIG1vZGVsLCB0aGVuIGNoZWNrIGlmIFwic2VsZWN0IG1ldHJpY1wiIHNlZ21lbnQgc2hvdWxkIGJlIGFkZGVkIGF0IHRoZSBlbmRcbiAgc3RhdGUuc2VnbWVudHMgPSBjbG9uZShzdGF0ZS5xdWVyeU1vZGVsLnNlZ21lbnRzKTtcblxuICBjb25zdCBjaGVja090aGVyU2VnbWVudHNJbmRleCA9IHN0YXRlLnF1ZXJ5TW9kZWwuY2hlY2tPdGhlclNlZ21lbnRzSW5kZXggfHwgMDtcblxuICBhd2FpdCBjaGVja090aGVyU2VnbWVudHMoc3RhdGUsIGNoZWNrT3RoZXJTZWdtZW50c0luZGV4LCBtb2RpZnlMYXN0U2VnbWVudCk7XG59XG5cbi8qKlxuICogQWRkIFwic2VsZWN0IG1ldHJpY1wiIHNlZ21lbnQgYXQgdGhlIGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkU2VsZWN0TWV0cmljU2VnbWVudChzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlKTogdm9pZCB7XG4gIHN0YXRlLnF1ZXJ5TW9kZWwuYWRkU2VsZWN0TWV0cmljU2VnbWVudCgpO1xuICBzdGF0ZS5zZWdtZW50cy5wdXNoKHsgdmFsdWU6ICdzZWxlY3QgbWV0cmljJywgZmFrZTogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhlIHN0YXRlIGFmdGVyIGFkZGluZyBvciBjaGFuZ2luZyBhIHNlZ21lbnQ6XG4gKiAtIGFkZHMgXCJzZWxlY3QgbWV0cmljXCIgb25seSB3aGVuIG1vcmUgc2VnbWVudHMgY2FuIGJlIGFkZGVkIHRvIHRoZSBtZXRyaWMgbmFtZVxuICogLSBjaGVjayBpZiBzdWJzZXF1ZW50IHNlZ21lbnRzIGFyZSBzdGlsbCB2YWxpZCBpZiBpbi1iZXR3ZWVuIHNlZ21lbnQgY2hhbmdlcyBhbmRcbiAqICAgcmVtb3ZlcyBpbnZhbGlkIHNlZ21lbnRzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tPdGhlclNlZ21lbnRzKFxuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLFxuICBmcm9tSW5kZXg6IG51bWJlcixcbiAgbW9kaWZ5TGFzdFNlZ21lbnQgPSB0cnVlXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHN0YXRlLnF1ZXJ5TW9kZWwuc2VnbWVudHMubGVuZ3RoID09PSAxICYmIHN0YXRlLnF1ZXJ5TW9kZWwuc2VnbWVudHNbMF0udHlwZSA9PT0gJ3Nlcmllcy1yZWYnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGZyb21JbmRleCA9PT0gMCkge1xuICAgIGFkZFNlbGVjdE1ldHJpY1NlZ21lbnQoc3RhdGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBhdGggPSBzdGF0ZS5xdWVyeU1vZGVsLmdldFNlZ21lbnRQYXRoVXBUbyhmcm9tSW5kZXggKyAxKTtcbiAgaWYgKHBhdGggPT09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzZWdtZW50cyA9IGF3YWl0IHN0YXRlLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHBhdGgpO1xuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChwYXRoICE9PSAnJyAmJiBtb2RpZnlMYXN0U2VnbWVudCkge1xuICAgICAgICBzdGF0ZS5xdWVyeU1vZGVsLnNlZ21lbnRzID0gc3RhdGUucXVlcnlNb2RlbC5zZWdtZW50cy5zcGxpY2UoMCwgZnJvbUluZGV4KTtcbiAgICAgICAgc3RhdGUuc2VnbWVudHMgPSBzdGF0ZS5zZWdtZW50cy5zcGxpY2UoMCwgZnJvbUluZGV4KTtcbiAgICAgICAgYWRkU2VsZWN0TWV0cmljU2VnbWVudChzdGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZWdtZW50c1swXS5leHBhbmRhYmxlKSB7XG4gICAgICBpZiAoc3RhdGUuc2VnbWVudHMubGVuZ3RoID09PSBmcm9tSW5kZXgpIHtcbiAgICAgICAgYWRkU2VsZWN0TWV0cmljU2VnbWVudChzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBjaGVja090aGVyU2VnbWVudHMoc3RhdGUsIGZyb21JbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaGFuZGxlTWV0cmljc0F1dG9Db21wbGV0ZUVycm9yKHN0YXRlLCBlcnIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2VTZWdtZW50cyhzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIHN0YXRlLnNlZ21lbnRzID0gc3RhdGUuc2VnbWVudHMuc3BsaWNlKDAsIGluZGV4KTtcbiAgc3RhdGUucXVlcnlNb2RlbC5zZWdtZW50cyA9IHN0YXRlLnF1ZXJ5TW9kZWwuc2VnbWVudHMuc3BsaWNlKDAsIGluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5U2VnbWVudHMoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSk6IHZvaWQge1xuICBzdGF0ZS5xdWVyeU1vZGVsLnNlZ21lbnRzID0gW107XG4gIHN0YXRlLnNlZ21lbnRzID0gW107XG59XG5cbi8qKlxuICogV2hlbiBzZXJpZXNCeVRhZyBmdW5jdGlvbiBpcyBhZGRlZCB0aGUgVUkgY2hhbmdlcyBpdCdzIHN0YXRlIGFuZCBvbmx5IHRhZ3MgY2FuIGJlIGFkZGVkIGZyb20gbm93LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkU2VyaWVzQnlUYWdGdW5jKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsIHRhZzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IG5ld0Z1bmMgPSBzdGF0ZS5kYXRhc291cmNlLmNyZWF0ZUZ1bmNJbnN0YW5jZSgnc2VyaWVzQnlUYWcnLCB7XG4gICAgd2l0aERlZmF1bHRQYXJhbXM6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgdGFnUGFyYW0gPSBgJHt0YWd9PWA7XG4gIG5ld0Z1bmMucGFyYW1zID0gW3RhZ1BhcmFtXTtcbiAgc3RhdGUucXVlcnlNb2RlbC5hZGRGdW5jdGlvbihuZXdGdW5jKTtcbiAgbmV3RnVuYy5hZGRlZCA9IHRydWU7XG5cbiAgZW1wdHlTZWdtZW50cyhzdGF0ZSk7XG4gIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICBhd2FpdCBwYXJzZVRhcmdldChzdGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbWFydGx5SGFuZGxlTmV3QWxpYXNCeU5vZGUoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSwgZnVuYzogRnVuY0luc3RhbmNlKTogdm9pZCB7XG4gIGlmIChmdW5jLmRlZi5uYW1lICE9PSAnYWxpYXNCeU5vZGUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5zZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdGF0ZS5zZWdtZW50c1tpXS52YWx1ZS5pbmRleE9mKCcqJykgPj0gMCkge1xuICAgICAgZnVuYy5wYXJhbXNbMF0gPSBpO1xuICAgICAgZnVuYy5hZGRlZCA9IGZhbHNlO1xuICAgICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUGF1c2VzIHJ1bm5pbmcgdGhlIHF1ZXJ5IHRvIGFsbG93IHNlbGVjdGluZyB0YWcgdmFsdWUuIFRoaXMgaXMgdG8gcHJldmVudCBnZXR0aW5nIGVycm9ycyBpZiB0aGUgcXVlcnkgaXMgcnVuXG4gKiBmb3IgYSB0YWcgd2l0aCBubyBzZWxlY3RlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUpOiB2b2lkIHtcbiAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhZ1ByZWZpeCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoVEFHX1BSRUZJWCwgJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlKTogdm9pZCB7XG4gIGlmIChzdGF0ZS5xdWVyeU1vZGVsLmVycm9yKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgb2xkVGFyZ2V0ID0gc3RhdGUucXVlcnlNb2RlbC50YXJnZXQudGFyZ2V0O1xuICAvLyBJbnRlcnBvbGF0ZSBmcm9tIG90aGVyIHF1ZXJpZXM6XG4gIC8vIEJlY2F1c2Ugb2YgbWl4ZWQgZGF0YSBzb3VyY2VzIHRoZSBsaXN0IG1heSBjb250YWluIHF1ZXJpZXMgZm9yIG5vbi1HcmFwaGl0ZSBkYXRhIHNvdXJjZXMuIFRvIGVuc3VyZSBhIHZhbGlkIHF1ZXJ5XG4gIC8vIGlzIHVzZWQgZm9yIGludGVycG9sYXRpb24gd2Ugc2hvdWxkIGNoZWNrIHJlcXVpcmVkIHByb3BlcnRpZXMgYXJlIHBhc3NlZCB0aG91Z2ggaW4gdGhlb3J5IGl0IGFsbG93cyB0byBpbnRlcnBvbGF0ZVxuICAvLyB3aXRoIHF1ZXJpZXMgdGhhdCBjb250YWluIFwidGFyZ2V0XCIgcHJvcGVydHkgYXMgd2VsbC5cbiAgc3RhdGUucXVlcnlNb2RlbC51cGRhdGVNb2RlbFRhcmdldChcbiAgICAoc3RhdGUucXVlcmllcyB8fCBbXSkuZmlsdGVyKChxdWVyeSkgPT4gJ3RhcmdldCcgaW4gcXVlcnkgJiYgdHlwZW9mIChxdWVyeSBhcyBHcmFwaGl0ZVF1ZXJ5KS50YXJnZXQgPT09ICdzdHJpbmcnKVxuICApO1xuXG4gIGlmIChzdGF0ZS5xdWVyeU1vZGVsLnRhcmdldC50YXJnZXQgIT09IG9sZFRhcmdldCAmJiAhc3RhdGUucGF1c2VkKSB7XG4gICAgc3RhdGUucmVmcmVzaCgpO1xuICB9XG59XG5cbi8qKlxuICogV2hlbiBtZXRyaWNzIGF1dG9jb21wbGV0ZSBmYWlscyAtIHRoZSBlcnJvciBpcyBzaG93biwgYnV0IG9ubHkgb25jZSBwZXIgcGFnZSB2aWV3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZXRyaWNzQXV0b0NvbXBsZXRlRXJyb3IoXG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsXG4gIGVycm9yOiBFcnJvclxuKTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlIHtcbiAgaWYgKCFzdGF0ZS5tZXRyaWNBdXRvQ29tcGxldGVFcnJvclNob3duKSB7XG4gICAgc3RhdGUubWV0cmljQXV0b0NvbXBsZXRlRXJyb3JTaG93biA9IHRydWU7XG4gICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKGBGZXRjaGluZyBtZXRyaWNzIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfS5gKSkpO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBXaGVuIHRhZ3MgYXV0b2NvbXBsZXRlIGZhaWxzIC0gdGhlIGVycm9yIGlzIHNob3duLCBidXQgb25seSBvbmNlIHBlciBwYWdlIHZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRhZ3NBdXRvQ29tcGxldGVFcnJvcihzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLCBlcnJvcjogRXJyb3IpOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUge1xuICBpZiAoIXN0YXRlLnRhZ3NBdXRvQ29tcGxldGVFcnJvclNob3duKSB7XG4gICAgc3RhdGUudGFnc0F1dG9Db21wbGV0ZUVycm9yU2hvd24gPSB0cnVlO1xuICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihgRmV0Y2hpbmcgdGFncyBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX0uYCkpKTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IGVhY2hSaWdodCwgbWFwLCByZW1vdmUgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtcbiAgVEFHX1BSRUZJWCxcbiAgR1JBUEhJVEVfVEFHX09QRVJBVE9SUyxcbiAgaGFuZGxlTWV0cmljc0F1dG9Db21wbGV0ZUVycm9yLFxuICBoYW5kbGVUYWdzQXV0b0NvbXBsZXRlRXJyb3IsXG59IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQsIEdyYXBoaXRlVGFnLCBHcmFwaGl0ZVRhZ09wZXJhdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgbWFwU2VnbWVudHNUb1NlbGVjdGFibGVzLCBtYXBTdHJpbmdzVG9TZWxlY3RhYmxlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVscGVycyc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuLyoqXG4gKiBBbGwgYXV0by1jb21wbGV0ZSBsaXN0cyBhcmUgdXBkYXRlZCB3aGlsZSB0eXBpbmcuIFRvIGF2b2lkIHBlcmZvcm1hbmNlIGlzc3VlcyB3ZSBkbyBub3QgcmVuZGVyIG1vcmVcbiAqIHRoYW4gTUFYX1NVR0dFU1RJT05TIGxpbWl0cyBpbiBhIHNpbmdsZSBkcm9wZG93bi5cbiAqXG4gKiBNQVhfU1VHR0VTVElPTlMgaXMgcGVyIG1ldHJpY3MgYW5kIHRhZ3Mgc2VwYXJhdGVseS4gT24gdGhlIHZlcnkgZmlyc3QgZHJvcGRvd24gd2hlcmUgbWV0cmljcyBhbmQgdGFncyBhcmVcbiAqIGNvbWJpbmVkIHRvZ2V0aGVyIG1lYW5pbmcgaXQgbWF5IGVuZCB1cCB3aXRoIG1heCBvZiAyICogTUFYX1NVR0dFU1RJT05TIGl0ZW1zIGluIHRvdGFsLlxuICovXG5jb25zdCBNQVhfU1VHR0VTVElPTlMgPSA1MDAwO1xuXG4vKipcbiAqIFByb3ZpZGVycyBhcmUgaG9va3MgZm9yIHZpZXdzIHRvIHByb3ZpZGUgdGVtcG9yYWwgZGF0YSBmb3IgYXV0b2NvbXBsZXRlLiBUaGV5IGRvbid0IG1vZGlmeSB0aGUgc3RhdGUuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gbGlzdCBvZiBhdmFpbGFibGUgb3B0aW9ucyBmb3IgYSBzZWdtZW50IHdpdGggZ2l2ZW4gaW5kZXhcbiAqXG4gKiBJdCBtYXkgYmU6XG4gKiAtIG1peGVkIGxpc3Qgb2YgbWV0cmljcyBhbmQgdGFncyAob25seSB3aGVuIG5vdGhpbmcgd2FzIHNlbGVjdGVkKVxuICogLSBsaXN0IG9mIG1ldHJpYyBuYW1lcyAoaWYgYSBtZXRyaWMgbmFtZSB3YXMgc2VsZWN0ZWQgZm9yIHRoaXMgc2VnbWVudClcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0QWx0U2VnbWVudHMoXG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsXG4gIGluZGV4OiBudW1iZXIsXG4gIHByZWZpeDogc3RyaW5nXG4pOiBQcm9taXNlPEdyYXBoaXRlU2VnbWVudFtdPiB7XG4gIGxldCBxdWVyeSA9IHByZWZpeC5sZW5ndGggPiAwID8gJyonICsgcHJlZml4ICsgJyonIDogJyonO1xuICBpZiAoaW5kZXggPiAwKSB7XG4gICAgcXVlcnkgPSBzdGF0ZS5xdWVyeU1vZGVsLmdldFNlZ21lbnRQYXRoVXBUbyhpbmRleCkgKyAnLicgKyBxdWVyeTtcbiAgfVxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJhbmdlOiBzdGF0ZS5yYW5nZSxcbiAgICByZXF1ZXN0SWQ6ICdnZXQtYWx0LXNlZ21lbnRzJyxcbiAgfTtcblxuICB0cnkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gYXdhaXQgc3RhdGUuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkocXVlcnksIG9wdGlvbnMpO1xuICAgIGNvbnN0IGFsdFNlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXSA9IG1hcChzZWdtZW50cywgKHNlZ21lbnQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBzZWdtZW50LnRleHQsXG4gICAgICAgIGV4cGFuZGFibGU6IHNlZ21lbnQuZXhwYW5kYWJsZSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPiAwICYmIGFsdFNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGFsdFNlZ21lbnRzO1xuICAgIH1cblxuICAgIC8vIGFkZCBxdWVyeSByZWZlcmVuY2VzXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICBlYWNoUmlnaHQoc3RhdGUucXVlcmllcywgKHRhcmdldCkgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0LnJlZklkID09PSBzdGF0ZS5xdWVyeU1vZGVsLnRhcmdldC5yZWZJZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsdFNlZ21lbnRzLnVuc2hpZnQoe1xuICAgICAgICAgIHR5cGU6ICdzZXJpZXMtcmVmJyxcbiAgICAgICAgICB2YWx1ZTogJyMnICsgdGFyZ2V0LnJlZklkLFxuICAgICAgICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFkZCB0ZW1wbGF0ZSB2YXJpYWJsZXNcbiAgICBlYWNoUmlnaHQoc3RhdGUudGVtcGxhdGVTcnYuZ2V0VmFyaWFibGVzKCksICh2YXJpYWJsZSkgPT4ge1xuICAgICAgYWx0U2VnbWVudHMudW5zaGlmdCh7XG4gICAgICAgIHR5cGU6ICd0ZW1wbGF0ZScsXG4gICAgICAgIHZhbHVlOiAnJCcgKyB2YXJpYWJsZS5uYW1lLFxuICAgICAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgd2lsZGNhcmQgb3B0aW9uIGFuZCBsaW1pdCBudW1iZXIgb2Ygc3VnZ2VzdGlvbnMgKEFQSSBkb2Vzbid0IHN1cHBvcnQgbGltaXRpbmdcbiAgICAvLyBoZW5jZSB3ZSBhcmUgZG9pbmcgaXQgaGVyZSlcbiAgICBhbHRTZWdtZW50cy51bnNoaWZ0KHsgdmFsdWU6ICcqJywgZXhwYW5kYWJsZTogdHJ1ZSB9KTtcbiAgICBhbHRTZWdtZW50cy5zcGxpY2UoTUFYX1NVR0dFU1RJT05TKTtcblxuICAgIGlmIChzdGF0ZS5zdXBwb3J0c1RhZ3MgJiYgaW5kZXggPT09IDApIHtcbiAgICAgIHJlbW92ZVRhZ2dlZEVudHJ5KGFsdFNlZ21lbnRzKTtcbiAgICAgIHJldHVybiBhd2FpdCBhZGRBbHRUYWdTZWdtZW50cyhzdGF0ZSwgcHJlZml4LCBhbHRTZWdtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhbHRTZWdtZW50cztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGhhbmRsZU1ldHJpY3NBdXRvQ29tcGxldGVFcnJvcihzdGF0ZSwgZXJyKTtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxpc3Qgb2Ygc2VnbWVudHMgd2l0aCB0YWdzIGFuZCBtZXRyaWNzLiBTdWdnZXN0aW9ucyBhcmUgcmVkdWNlZCBpbiBnZXRBbHRTZWdtZW50cyBhbmQgYWRkQWx0VGFnU2VnbWVudHMgc28gaW4gY2FzZVxuICogd2UgaGl0IE1BWF9TVUdHRVNUSU9OUyBsaW1pdCB0aGVyZSBhcmUgYWx3YXlzIHNvbWUgdGFncyBhbmQgbWV0cmljcyBzaG93bi5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsdFNlZ21lbnRzU2VsZWN0YWJsZXMoXG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsXG4gIGluZGV4OiBudW1iZXIsXG4gIHByZWZpeDogc3RyaW5nXG4pOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxHcmFwaGl0ZVNlZ21lbnQ+Pj4ge1xuICByZXR1cm4gbWFwU2VnbWVudHNUb1NlbGVjdGFibGVzKGF3YWl0IGdldEFsdFNlZ21lbnRzKHN0YXRlLCBpbmRleCwgcHJlZml4KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWdPcGVyYXRvcnNTZWxlY3RhYmxlcygpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8R3JhcGhpdGVUYWdPcGVyYXRvcj4+IHtcbiAgcmV0dXJuIG1hcFN0cmluZ3NUb1NlbGVjdGFibGVzKEdSQVBISVRFX1RBR19PUEVSQVRPUlMpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGFncyBhcyBkcm9wZG93biBvcHRpb25zXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFRhZ3Moc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSwgaW5kZXg6IG51bWJlciwgdGFnUHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFnRXhwcmVzc2lvbnMgPSBzdGF0ZS5xdWVyeU1vZGVsLnJlbmRlclRhZ0V4cHJlc3Npb25zKGluZGV4KTtcbiAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBzdGF0ZS5kYXRhc291cmNlLmdldFRhZ3NBdXRvQ29tcGxldGUodGFnRXhwcmVzc2lvbnMsIHRhZ1ByZWZpeCwge1xuICAgICAgcmFuZ2U6IHN0YXRlLnJhbmdlLFxuICAgICAgbGltaXQ6IE1BWF9TVUdHRVNUSU9OUyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsdFRhZ3MgPSBtYXAodmFsdWVzLCAndGV4dCcpO1xuICAgIGFsdFRhZ3Muc3BsaWNlKDAsIDAsIHN0YXRlLnJlbW92ZVRhZ1ZhbHVlKTtcbiAgICByZXR1cm4gYWx0VGFncztcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaGFuZGxlVGFnc0F1dG9Db21wbGV0ZUVycm9yKHN0YXRlLCBlcnIpO1xuICB9XG5cbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFnc1NlbGVjdGFibGVzKFxuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLFxuICBpbmRleDogbnVtYmVyLFxuICB0YWdQcmVmaXg6IHN0cmluZ1xuKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+IHtcbiAgcmV0dXJuIG1hcFN0cmluZ3NUb1NlbGVjdGFibGVzKGF3YWl0IGdldFRhZ3Moc3RhdGUsIGluZGV4LCB0YWdQcmVmaXgpKTtcbn1cblxuLyoqXG4gKiBMaXN0IG9mIHRhZ3Mgd2hlbiBhIHRhZyBpcyBhZGRlZC4gZ2V0VGFncyBpcyB1c2VkIGZvciBlZGl0aW5nLlxuICogV2hlbiBhZGRpbmcgLSBzZWdtZW50IGlzIHVzZWQuIFdoZW4gZWRpdGluZyAtIGRyb3Bkb3duIGlzIHVzZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFRhZ3NBc1NlZ21lbnRzKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsIHRhZ1ByZWZpeDogc3RyaW5nKTogUHJvbWlzZTxHcmFwaGl0ZVNlZ21lbnRbXT4ge1xuICBsZXQgdGFnc0FzU2VnbWVudHM6IEdyYXBoaXRlU2VnbWVudFtdO1xuICB0cnkge1xuICAgIGNvbnN0IHRhZ0V4cHJlc3Npb25zID0gc3RhdGUucXVlcnlNb2RlbC5yZW5kZXJUYWdFeHByZXNzaW9ucygpO1xuICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHN0YXRlLmRhdGFzb3VyY2UuZ2V0VGFnc0F1dG9Db21wbGV0ZSh0YWdFeHByZXNzaW9ucywgdGFnUHJlZml4LCB7XG4gICAgICByYW5nZTogc3RhdGUucmFuZ2UsXG4gICAgICBsaW1pdDogTUFYX1NVR0dFU1RJT05TLFxuICAgIH0pO1xuICAgIHRhZ3NBc1NlZ21lbnRzID0gbWFwKHZhbHVlcywgKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbC50ZXh0LFxuICAgICAgICB0eXBlOiAndGFnJyxcbiAgICAgICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgICB9O1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0YWdzQXNTZWdtZW50cyA9IFtdO1xuICAgIGhhbmRsZVRhZ3NBdXRvQ29tcGxldGVFcnJvcihzdGF0ZSwgZXJyKTtcbiAgfVxuXG4gIHJldHVybiB0YWdzQXNTZWdtZW50cztcbn1cblxuLyoqXG4gKiBHZXQgbGlzdCBvZiB0YWdzLCB1c2VkIHdoZW4gYWRkaW5nIGFkZGl0aW9uYWwgdGFncyAoZmlyc3QgdGFnIGlzIHNlbGVjdGVkIGZyb20gYSBqb2luZWQgbGlzdCBvZiBtZXRyaWNzIGFuZCB0YWdzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFnc0FzU2VnbWVudHNTZWxlY3RhYmxlcyhcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSxcbiAgdGFnUHJlZml4OiBzdHJpbmdcbik6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPEdyYXBoaXRlU2VnbWVudD4+PiB7XG4gIHJldHVybiBtYXBTZWdtZW50c1RvU2VsZWN0YWJsZXMoYXdhaXQgZ2V0VGFnc0FzU2VnbWVudHMoc3RhdGUsIHRhZ1ByZWZpeCkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUYWdWYWx1ZXMoXG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsXG4gIHRhZzogR3JhcGhpdGVUYWcsXG4gIGluZGV4OiBudW1iZXIsXG4gIHZhbHVlUHJlZml4OiBzdHJpbmdcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgdGFnRXhwcmVzc2lvbnMgPSBzdGF0ZS5xdWVyeU1vZGVsLnJlbmRlclRhZ0V4cHJlc3Npb25zKGluZGV4KTtcbiAgY29uc3QgdGFnS2V5ID0gdGFnLmtleTtcbiAgY29uc3QgdmFsdWVzID0gYXdhaXQgc3RhdGUuZGF0YXNvdXJjZS5nZXRUYWdWYWx1ZXNBdXRvQ29tcGxldGUodGFnRXhwcmVzc2lvbnMsIHRhZ0tleSwgdmFsdWVQcmVmaXgsIHtcbiAgICBsaW1pdDogTUFYX1NVR0dFU1RJT05TLFxuICB9KTtcbiAgY29uc3QgYWx0VmFsdWVzID0gbWFwKHZhbHVlcywgJ3RleHQnKTtcbiAgLy8gQWRkIHRlbXBsYXRlIHZhcmlhYmxlcyBhcyBhZGRpdGlvbmFsIHZhbHVlc1xuICBlYWNoUmlnaHQoc3RhdGUudGVtcGxhdGVTcnYuZ2V0VmFyaWFibGVzKCksICh2YXJpYWJsZSkgPT4ge1xuICAgIGFsdFZhbHVlcy5wdXNoKCckeycgKyB2YXJpYWJsZS5uYW1lICsgJzpyZWdleH0nKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFsdFZhbHVlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRhZ1ZhbHVlc1NlbGVjdGFibGVzKFxuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLFxuICB0YWc6IEdyYXBoaXRlVGFnLFxuICBpbmRleDogbnVtYmVyLFxuICB2YWx1ZVByZWZpeDogc3RyaW5nXG4pOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4ge1xuICByZXR1cm4gbWFwU3RyaW5nc1RvU2VsZWN0YWJsZXMoYXdhaXQgZ2V0VGFnVmFsdWVzKHN0YXRlLCB0YWcsIGluZGV4LCB2YWx1ZVByZWZpeCkpO1xufVxuXG4vKipcbiAqIEFkZCBzZWdtZW50cyB3aXRoIHRhZ3MgcHJlZml4ZWQgd2l0aCBcInRhZzogXCIgdG8gaW5jbHVkZSB0aGVtIGluIHRoZSBzYW1lIGxpc3QgYXMgbWV0cmljc1xuICovXG5hc3luYyBmdW5jdGlvbiBhZGRBbHRUYWdTZWdtZW50cyhcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSxcbiAgcHJlZml4OiBzdHJpbmcsXG4gIGFsdFNlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXVxuKTogUHJvbWlzZTxHcmFwaGl0ZVNlZ21lbnRbXT4ge1xuICBsZXQgdGFnU2VnbWVudHMgPSBhd2FpdCBnZXRUYWdzQXNTZWdtZW50cyhzdGF0ZSwgcHJlZml4KTtcblxuICB0YWdTZWdtZW50cyA9IG1hcCh0YWdTZWdtZW50cywgKHNlZ21lbnQpID0+IHtcbiAgICBzZWdtZW50LnZhbHVlID0gVEFHX1BSRUZJWCArIHNlZ21lbnQudmFsdWU7XG4gICAgcmV0dXJuIHNlZ21lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBhbHRTZWdtZW50cy5jb25jYXQoLi4udGFnU2VnbWVudHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYWdnZWRFbnRyeShhbHRTZWdtZW50czogR3JhcGhpdGVTZWdtZW50W10pIHtcbiAgcmVtb3ZlKGFsdFNlZ21lbnRzLCAocykgPT4gcy52YWx1ZSA9PT0gJ190YWdnZWQnKTtcbn1cbiIsImltcG9ydCBHcmFwaGl0ZVF1ZXJ5LCB7IEdyYXBoaXRlVGFyZ2V0IH0gZnJvbSAnLi4vZ3JhcGhpdGVfcXVlcnknO1xuaW1wb3J0IHsgR3JhcGhpdGVTZWdtZW50LCBHcmFwaGl0ZVRhZ09wZXJhdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgR3JhcGhpdGVEYXRhc291cmNlIH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNydiB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7XG4gIGFkZFNlcmllc0J5VGFnRnVuYyxcbiAgYnVpbGRTZWdtZW50cyxcbiAgY2hlY2tPdGhlclNlZ21lbnRzLFxuICBlbXB0eVNlZ21lbnRzLFxuICBoYW5kbGVUYXJnZXRDaGFuZ2VkLFxuICBwYXJzZVRhcmdldCxcbiAgcGF1c2UsXG4gIHJlbW92ZVRhZ1ByZWZpeCxcbiAgc21hcnRseUhhbmRsZU5ld0FsaWFzQnlOb2RlLFxuICBzcGxpY2VTZWdtZW50cyxcbn0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IEFjdGlvbiwgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBGdW5jRGVmcyB9IGZyb20gJy4uL2dmdW5jJztcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgRGF0YVF1ZXJ5LCBUaW1lUmFuZ2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlID0ge1xuICAvLyBleHRlcm5hbCBkZXBlbmRlbmNpZXNcbiAgZGF0YXNvdXJjZTogR3JhcGhpdGVEYXRhc291cmNlO1xuICB0YXJnZXQ6IEdyYXBoaXRlVGFyZ2V0O1xuICByZWZyZXNoOiAoKSA9PiB2b2lkO1xuICBxdWVyaWVzPzogRGF0YVF1ZXJ5W107XG4gIHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydjtcbiAgcmFuZ2U/OiBUaW1lUmFuZ2U7XG5cbiAgLy8gaW50ZXJuYWxcbiAgc3VwcG9ydHNUYWdzOiBib29sZWFuO1xuICBwYXVzZWQ6IGJvb2xlYW47XG4gIHJlbW92ZVRhZ1ZhbHVlOiBzdHJpbmc7XG4gIGZ1bmNEZWZzOiBGdW5jRGVmcyB8IG51bGw7XG4gIHNlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXTtcbiAgcXVlcnlNb2RlbDogR3JhcGhpdGVRdWVyeTtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbiAgdGFnc0F1dG9Db21wbGV0ZUVycm9yU2hvd246IGJvb2xlYW47XG4gIG1ldHJpY0F1dG9Db21wbGV0ZUVycm9yU2hvd246IGJvb2xlYW47XG59O1xuXG5jb25zdCByZWR1Y2VyID0gYXN5bmMgKGFjdGlvbjogQWN0aW9uLCBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlKTogUHJvbWlzZTxHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGU+ID0+IHtcbiAgc3RhdGUgPSB7IC4uLnN0YXRlIH07XG5cbiAgaWYgKGFjdGlvbnMuaW5pdC5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgZGVwcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIGRlcHMudGFyZ2V0LnRhcmdldCA9IGRlcHMudGFyZ2V0LnRhcmdldCB8fCAnJztcblxuICAgIGF3YWl0IGRlcHMuZGF0YXNvdXJjZS53YWl0Rm9yRnVuY0RlZnNMb2FkZWQoKTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi5kZXBzLFxuICAgICAgcXVlcnlNb2RlbDogbmV3IEdyYXBoaXRlUXVlcnkoZGVwcy5kYXRhc291cmNlLCBkZXBzLnRhcmdldCwgZ2V0VGVtcGxhdGVTcnYoKSksXG4gICAgICBzdXBwb3J0c1RhZ3M6IGRlcHMuZGF0YXNvdXJjZS5zdXBwb3J0c1RhZ3MsXG4gICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgcmVtb3ZlVGFnVmFsdWU6ICctLSByZW1vdmUgdGFnIC0tJyxcbiAgICAgIGZ1bmNEZWZzOiBkZXBzLmRhdGFzb3VyY2UuZnVuY0RlZnMsXG4gICAgICBxdWVyaWVzOiBkZXBzLnF1ZXJpZXMsXG4gICAgfTtcblxuICAgIGF3YWl0IGJ1aWxkU2VnbWVudHMoc3RhdGUsIGZhbHNlKTtcbiAgfVxuICBpZiAoYWN0aW9ucy50aW1lUmFuZ2VDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICBzdGF0ZS5yYW5nZSA9IGFjdGlvbi5wYXlsb2FkO1xuICB9XG4gIGlmIChhY3Rpb25zLnF1ZXJpZXNDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICBzdGF0ZS5xdWVyaWVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gIH1cbiAgaWYgKGFjdGlvbnMucXVlcnlDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICBzdGF0ZS50YXJnZXQudGFyZ2V0ID0gYWN0aW9uLnBheWxvYWQudGFyZ2V0IHx8ICcnO1xuICAgIGF3YWl0IHBhcnNlVGFyZ2V0KHN0YXRlKTtcbiAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgfVxuICBpZiAoYWN0aW9ucy5zZWdtZW50VmFsdWVDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICBjb25zdCB7IHNlZ21lbnQ6IHNlZ21lbnRPclN0cmluZywgaW5kZXg6IHNlZ21lbnRJbmRleCB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICBsZXQgc2VnbWVudDtcbiAgICAvLyBpcyBzZWdtZW50IHdhcyBjaGFuZ2VkIHRvIGEgc3RyaW5nIC0gY3JlYXRlIGEgbmV3IHNlZ21lbnRcbiAgICBpZiAodHlwZW9mIHNlZ21lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlZ21lbnQgPSB7XG4gICAgICAgIHZhbHVlOiBzZWdtZW50T3JTdHJpbmcsXG4gICAgICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgICAgIGZha2U6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VnbWVudCA9IHNlZ21lbnRPclN0cmluZyBhcyBHcmFwaGl0ZVNlZ21lbnQ7XG4gICAgfVxuXG4gICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgIHN0YXRlLnNlZ21lbnRzW3NlZ21lbnRJbmRleF0gPSBzZWdtZW50O1xuICAgIHN0YXRlLnF1ZXJ5TW9kZWwudXBkYXRlU2VnbWVudFZhbHVlKHNlZ21lbnQsIHNlZ21lbnRJbmRleCk7XG5cbiAgICBpZiAoc3RhdGUucXVlcnlNb2RlbC5mdW5jdGlvbnMubGVuZ3RoID4gMCAmJiBzdGF0ZS5xdWVyeU1vZGVsLmZ1bmN0aW9uc1swXS5kZWYuZmFrZSkge1xuICAgICAgc3RhdGUucXVlcnlNb2RlbC5mdW5jdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAoc2VnbWVudC50eXBlID09PSAndGFnJykge1xuICAgICAgY29uc3QgdGFnID0gcmVtb3ZlVGFnUHJlZml4KHNlZ21lbnQudmFsdWUpO1xuICAgICAgcGF1c2Uoc3RhdGUpO1xuICAgICAgYXdhaXQgYWRkU2VyaWVzQnlUYWdGdW5jKHN0YXRlLCB0YWcpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIC8vIGlmIG5ld2x5IHNlbGVjdGVkIHNlZ21lbnQgY2FuIGJlIGV4cGFuZGVkIC0+IGNoZWNrIGlmIHRoZSBwYXRoIGlzIGNvcnJlY3RcbiAgICBpZiAoc2VnbWVudC5leHBhbmRhYmxlKSB7XG4gICAgICBhd2FpdCBjaGVja090aGVyU2VnbWVudHMoc3RhdGUsIHNlZ21lbnRJbmRleCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBub3QgZXhwYW5kYWJsZSAtPiByZW1vdmUgYWxsIG90aGVyIHNlZ21lbnRzXG4gICAgICBzcGxpY2VTZWdtZW50cyhzdGF0ZSwgc2VnbWVudEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gIH1cbiAgaWYgKGFjdGlvbnMudGFnQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgeyB0YWcsIGluZGV4OiB0YWdJbmRleCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgc3RhdGUucXVlcnlNb2RlbC51cGRhdGVUYWcodGFnLCB0YWdJbmRleCk7XG4gICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gICAgaWYgKHN0YXRlLnF1ZXJ5TW9kZWwudGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IGNoZWNrT3RoZXJTZWdtZW50cyhzdGF0ZSwgMCk7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGFjdGlvbnMuYWRkTmV3VGFnLm1hdGNoKGFjdGlvbikpIHtcbiAgICBjb25zdCBzZWdtZW50ID0gYWN0aW9uLnBheWxvYWQuc2VnbWVudDtcbiAgICBjb25zdCBuZXdUYWdLZXkgPSBzZWdtZW50LnZhbHVlO1xuICAgIGNvbnN0IG5ld1RhZyA9IHsga2V5OiBuZXdUYWdLZXksIG9wZXJhdG9yOiAnPScgYXMgR3JhcGhpdGVUYWdPcGVyYXRvciwgdmFsdWU6ICcnIH07XG4gICAgc3RhdGUucXVlcnlNb2RlbC5hZGRUYWcobmV3VGFnKTtcbiAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgfVxuICBpZiAoYWN0aW9ucy51bnBhdXNlLm1hdGNoKGFjdGlvbikpIHtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBzdGF0ZS5yZWZyZXNoKCk7XG4gIH1cbiAgaWYgKGFjdGlvbnMuYWRkRnVuY3Rpb24ubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IG5ld0Z1bmMgPSBzdGF0ZS5kYXRhc291cmNlLmNyZWF0ZUZ1bmNJbnN0YW5jZShhY3Rpb24ucGF5bG9hZC5uYW1lLCB7XG4gICAgICB3aXRoRGVmYXVsdFBhcmFtczogdHJ1ZSxcbiAgICB9KTtcbiAgICBuZXdGdW5jLmFkZGVkID0gdHJ1ZTtcbiAgICBzdGF0ZS5xdWVyeU1vZGVsLmFkZEZ1bmN0aW9uKG5ld0Z1bmMpO1xuICAgIHNtYXJ0bHlIYW5kbGVOZXdBbGlhc0J5Tm9kZShzdGF0ZSwgbmV3RnVuYyk7XG5cbiAgICBpZiAoc3RhdGUuc2VnbWVudHMubGVuZ3RoID09PSAxICYmIHN0YXRlLnNlZ21lbnRzWzBdLmZha2UpIHtcbiAgICAgIGVtcHR5U2VnbWVudHMoc3RhdGUpO1xuICAgIH1cblxuICAgIGlmICghbmV3RnVuYy5wYXJhbXMubGVuZ3RoICYmIG5ld0Z1bmMuYWRkZWQpIHtcbiAgICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChuZXdGdW5jLmRlZi5uYW1lID09PSAnc2VyaWVzQnlUYWcnKSB7XG4gICAgICBhd2FpdCBwYXJzZVRhcmdldChzdGF0ZSk7XG4gICAgfVxuICB9XG4gIGlmIChhY3Rpb25zLnJlbW92ZUZ1bmN0aW9uLm1hdGNoKGFjdGlvbikpIHtcbiAgICBzdGF0ZS5xdWVyeU1vZGVsLnJlbW92ZUZ1bmN0aW9uKGFjdGlvbi5wYXlsb2FkLmZ1bmMpO1xuICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICB9XG4gIGlmIChhY3Rpb25zLm1vdmVGdW5jdGlvbi5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgeyBmdW5jLCBvZmZzZXQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIHN0YXRlLnF1ZXJ5TW9kZWwubW92ZUZ1bmN0aW9uKGZ1bmMsIG9mZnNldCk7XG4gICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gIH1cbiAgaWYgKGFjdGlvbnMudXBkYXRlRnVuY3Rpb25QYXJhbS5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgeyBmdW5jLCBpbmRleCwgdmFsdWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIGZ1bmMudXBkYXRlUGFyYW0odmFsdWUsIGluZGV4KTtcbiAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgfVxuICBpZiAoYWN0aW9ucy51cGRhdGVRdWVyeS5tYXRjaChhY3Rpb24pKSB7XG4gICAgc3RhdGUudGFyZ2V0LnRhcmdldCA9IGFjdGlvbi5wYXlsb2FkLnF1ZXJ5O1xuICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICB9XG4gIGlmIChhY3Rpb25zLnJ1blF1ZXJ5Lm1hdGNoKGFjdGlvbikpIHtcbiAgICBzdGF0ZS5yZWZyZXNoKCk7XG4gIH1cbiAgaWYgKGFjdGlvbnMudG9nZ2xlRWRpdG9yTW9kZS5tYXRjaChhY3Rpb24pKSB7XG4gICAgc3RhdGUudGFyZ2V0LnRleHRFZGl0b3IgPSAhc3RhdGUudGFyZ2V0LnRleHRFZGl0b3I7XG4gICAgYXdhaXQgcGFyc2VUYXJnZXQoc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdG9yZSA9IChvbkNoYW5nZTogKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUpID0+IHZvaWQpOiBEaXNwYXRjaDxBbnlBY3Rpb24+ID0+IHtcbiAgbGV0IHN0YXRlID0ge30gYXMgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gYXN5bmMgKGFjdGlvbjogQW55QWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSBhd2FpdCByZWR1Y2VyKGFjdGlvbiwgc3RhdGUpO1xuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gZGlzcGF0Y2ggYXMgRGlzcGF0Y2g8QW55QWN0aW9uPjtcbn07XG4iLCJpbXBvcnQgeyBEYXRhUXVlcnksIERhdGFTb3VyY2VKc29uRGF0YSwgVGltZVJhbmdlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBHcmFwaGl0ZURhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgVGVtcGxhdGVTcnYgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhcGhpdGVRdWVyeSBleHRlbmRzIERhdGFRdWVyeSB7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmFwaGl0ZU9wdGlvbnMgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICBncmFwaGl0ZVZlcnNpb246IHN0cmluZztcbiAgZ3JhcGhpdGVUeXBlOiBHcmFwaGl0ZVR5cGU7XG4gIHJvbGx1cEluZGljYXRvckVuYWJsZWQ/OiBib29sZWFuO1xuICBpbXBvcnRDb25maWd1cmF0aW9uOiBHcmFwaGl0ZVF1ZXJ5SW1wb3J0Q29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGVudW0gR3JhcGhpdGVUeXBlIHtcbiAgRGVmYXVsdCA9ICdkZWZhdWx0JyxcbiAgTWV0cmljdGFuayA9ICdtZXRyaWN0YW5rJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRyaWNUYW5rUmVxdWVzdE1ldGEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0cmljVGFua1Nlcmllc01ldGEge1xuICAnc2NoZW1hLW5hbWUnOiBzdHJpbmc7XG4gICdzY2hlbWEtcmV0ZW50aW9ucyc6IHN0cmluZzsgLy9cIjFzOjM1ZDoyMG1pbjo1OjE1NDIyNzQwODUsMW1pbjozOGQ6Mmg6MTp0cnVlLDEwbWluOjEyMGQ6Nmg6MTp0cnVlLDJoOjJ5OjZoOjJcIixcbiAgJ2FyY2hpdmUtcmVhZCc6IG51bWJlcjtcbiAgJ2FyY2hpdmUtaW50ZXJ2YWwnOiBudW1iZXI7XG4gICdhZ2dudW0tbm9ybSc6IG51bWJlcjtcbiAgJ2NvbnNvbGlkYXRvci1ub3JtZmV0Y2gnOiBzdHJpbmc7IC8vXCJNYXhpbXVtQ29uc29saWRhdG9yXCIsXG4gICdhZ2dudW0tcmMnOiBudW1iZXI7XG4gICdjb25zb2xpZGF0b3ItcmMnOiBzdHJpbmc7IC8vXCJNYXhpbXVtQ29uc29saWRhdG9yXCIsXG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0cmljVGFua01ldGEge1xuICByZXF1ZXN0OiBNZXRyaWNUYW5rUmVxdWVzdE1ldGE7XG4gIGluZm86IE1ldHJpY1RhbmtTZXJpZXNNZXRhW107XG59XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlUXVlcnlJbXBvcnRDb25maWd1cmF0aW9uID0ge1xuICBsb2tpOiBHcmFwaGl0ZVRvTG9raVF1ZXJ5SW1wb3J0Q29uZmlndXJhdGlvbjtcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlVG9Mb2tpUXVlcnlJbXBvcnRDb25maWd1cmF0aW9uID0ge1xuICBtYXBwaW5nczogR3JhcGhpdGVMb2tpTWFwcGluZ1tdO1xufTtcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVMb2tpTWFwcGluZyA9IHtcbiAgbWF0Y2hlcnM6IEdyYXBoaXRlTWV0cmljTG9raU1hdGNoZXJbXTtcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlTWV0cmljTG9raU1hdGNoZXIgPSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsTmFtZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlU2VnbWVudCA9IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdHlwZT86ICd0YWcnIHwgJ21ldHJpYycgfCAnc2VyaWVzLXJlZicgfCAndGVtcGxhdGUnO1xuICBleHBhbmRhYmxlPzogYm9vbGVhbjtcbiAgZmFrZT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBHcmFwaGl0ZVRhZ09wZXJhdG9yID0gJz0nIHwgJyE9JyB8ICc9ficgfCAnIT1+JztcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVUYWcgPSB7XG4gIGtleTogc3RyaW5nO1xuICBvcGVyYXRvcjogR3JhcGhpdGVUYWdPcGVyYXRvcjtcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlUXVlcnlFZGl0b3JEZXBlbmRlbmNpZXMgPSB7XG4gIHRhcmdldDogYW55O1xuICBkYXRhc291cmNlOiBHcmFwaGl0ZURhdGFzb3VyY2U7XG4gIHJhbmdlPzogVGltZVJhbmdlO1xuICB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnY7XG4gIHF1ZXJpZXM6IERhdGFRdWVyeVtdO1xuICAvLyBzY2hlZHVsZSBvbkNoYW5nZS9vblJ1blF1ZXJ5IGFmdGVyIHRoZSByZWR1Y2VyIGFjdGlvbnMgZmluaXNoZXNcbiAgcmVmcmVzaDogKCkgPT4gdm9pZDtcbn07XG4iLCJpbXBvcnQgeyBsYXN0IH0gZnJvbSAnbG9kYXNoJztcblxuLyoqXG4gKiBHcmFwaGl0ZS13ZWIgYmVmb3JlIHYxLjYgcmV0dXJucyBIVFRQIDUwMCB3aXRoIGZ1bGwgc3RhY2sgdHJhY2VzIGluIGFuIEhUTUwgcGFnZVxuICogd2hlbiBhIHF1ZXJ5IGZhaWxzLiBJdCByZXN1bHRzIGluIG1hc3NpdmUgZXJyb3IgYWxlcnRzIHdpdGggSFRNTCB0YWdzIGluIHRoZSBVSS5cbiAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbGwgSFRNTCB0YWdzIGFuZCBrZWVwcyBvbmx5IHRoZSBsYXN0IGxpbmUgZnJvbSB0aGUgc3RhY2tcbiAqIHRyYWNlIHdoaWNoIHNob3VsZCBiZSB0aGUgbW9zdCBtZWFuaW5nZnVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRXJyb3IoZXJyb3I6IGFueSk6IGFueSB7XG4gIGlmIChlcnJvciAmJiBlcnJvci5zdGF0dXMgPT09IDUwMCAmJiBlcnJvci5kYXRhPy5tZXNzYWdlPy5zdGFydHNXaXRoKCc8Ym9keScpKSB7XG4gICAgLy8gUmVtb3ZlIGFsbCBIVE1MIHRhZ3MgYW5kIHRha2UgdGhlIGxhc3QgbGluZSBmcm9tIHRoZSBzdGFjayB0cmFjZVxuICAgIGNvbnN0IG5ld01lc3NhZ2UgPSBsYXN0PHN0cmluZz4oXG4gICAgICBlcnJvci5kYXRhLm1lc3NhZ2VcbiAgICAgICAgLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJylcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoL1xcbi8pXG4gICAgKSEucmVwbGFjZSgvdT8mI1teO10rOy9nLCAnJyk7XG4gICAgZXJyb3IuZGF0YS5tZXNzYWdlID0gYEdyYXBoaXRlIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgZXJyb3Igd2hpbGUgaGFuZGxpbmcgeW91ciByZXF1ZXN0LiAke25ld01lc3NhZ2V9YDtcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG4iLCJpbXBvcnQgeyBsYXN0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IEdSQVBISVRFX1ZFUlNJT05TID0gWycwLjknLCAnMS4wJywgJzEuMSddO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9HUkFQSElURV9WRVJTSU9OID0gbGFzdChHUkFQSElURV9WRVJTSU9OUykhO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcmV2aW91cyhzdGF0ZSkge1xuICAgIHZhciByZWYgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWYuY3VycmVudCA9IHN0YXRlO1xuICAgIH0pO1xuICAgIHJldHVybiByZWYuY3VycmVudDtcbn1cbiJdLCJuYW1lcyI6WyJpc051bWJlciIsInZlcnNpb25QYXR0ZXJuIiwiU2VtVmVyc2lvbiIsImNvbnN0cnVjdG9yIiwidmVyc2lvbiIsIm1ham9yIiwibWlub3IiLCJwYXRjaCIsIm1ldGEiLCJtYXRjaCIsImV4ZWMiLCJOdW1iZXIiLCJpc0d0T3JFcSIsImNvbXBhcmVkIiwiaSIsImNvbXBhcmFibGUiLCJsZW5ndGgiLCJpc1ZhbGlkIiwiaXNWZXJzaW9uR3RPckVxIiwiYSIsImIiLCJhU2VtdmVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJCdXR0b24iLCJTZWdtZW50IiwidXNlU3R5bGVzMiIsImFjdGlvbnMiLCJjc3MiLCJjeCIsIm1hcEZ1bmNEZWZzVG9TZWxlY3RhYmxlcyIsInVzZURpc3BhdGNoIiwiQWRkR3JhcGhpdGVGdW5jdGlvbiIsImZ1bmNEZWZzIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsInNldFZhbHVlIiwidW5kZWZpbmVkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwib3B0aW9ucyIsImFkZEZ1bmN0aW9uIiwibmFtZSIsImJ1dHRvbiIsInRoZW1lIiwic3BhY2luZyIsIkljb24iLCJUb29sdGlwIiwiRnVuY3Rpb25FZGl0b3JDb250cm9scyIsImljb24iLCJsYWJlbCIsImZvbnRXZWlnaHQiLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodE1lZGl1bSIsImZvbnRTaXplIiwiYm9keVNtYWxsIiwiY3Vyc29yIiwiZGlzcGxheSIsIkZ1bmN0aW9uRWRpdG9yIiwib25Nb3ZlTGVmdCIsIm9uTW92ZVJpZ2h0IiwiZnVuYyIsInByb3BzIiwicmVuZGVyQ29udGVudCIsInVwZGF0ZVBvcHBlclBvc2l0aW9uIiwiZGVmIiwidW5rbm93biIsIlRvb2x0aXBDb250ZW50IiwibWVtbyIsImRpc3BsYXlOYW1lIiwiU3VzcGVuc2UiLCJGdW5jdGlvbkRlc2NyaXB0aW9uIiwibGF6eSIsImRlZmF1bHQiLCJyc3QyaHRtbCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiRnVuY3Rpb25IZWxwQnV0dG9uIiwidG9vbHRpcCIsIndpbmRvdyIsIm9wZW4iLCJvblJlbW92ZSIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJTZWdtZW50SW5wdXQiLCJGdW5jdGlvblBhcmFtRWRpdG9yIiwiZWRpdGFibGVQYXJhbSIsIm9uQ2hhbmdlIiwib25FeHBhbmRlZENoYW5nZSIsImF1dG9mb2N1cyIsInNlZ21lbnQiLCJpbnB1dCIsInRvU3RyaW5nIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0IiwibWluV2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiR3JhcGhpdGVGdW5jdGlvbkVkaXRvciIsIlNlZ21lbnRTZWN0aW9uIiwiRnVuY3Rpb25zU2VjdGlvbiIsImZ1bmN0aW9ucyIsIm1hcCIsImluZGV4IiwiaGlkZGVuIiwiSG9yaXpvbnRhbEdyb3VwIiwiSW5saW5lTGFiZWwiLCJtYXBGdW5jSW5zdGFuY2VUb1BhcmFtcyIsIm1vdXNlT3ZlciIsInNldElzTW91c2VPdmVyIiwiZXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwicGFyYW1zIiwiZmlsdGVyIiwicCIsIm9wdGlvbmFsIiwiYWRkZWQiLCJjb250YWluZXIiLCJlcnJvciIsIm1vdmVGdW5jdGlvbiIsIm9mZnNldCIsInJlbW92ZUZ1bmN0aW9uIiwidXBkYXRlRnVuY3Rpb25QYXJhbSIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsIm1hcmdpblJpZ2h0IiwidjEiLCJmb3JtSW5wdXRIZWlnaHQiLCJtYWluIiwiR3JhcGhpdGVRdWVyeUVkaXRvckNvbnRleHQiLCJ1c2VHcmFwaGl0ZVN0YXRlIiwiR3JhcGhpdGVUZXh0RWRpdG9yIiwiU2VyaWVzU2VjdGlvbiIsIkdyYXBoaXRlUXVlcnlFZGl0b3IiLCJkYXRhc291cmNlIiwib25SdW5RdWVyeSIsInF1ZXJ5IiwicmFuZ2UiLCJxdWVyaWVzIiwiR3JhcGhpdGVRdWVyeUVkaXRvckNvbnRlbnQiLCJzdGF0ZSIsInZpc3VhbEVkaXRvciIsInRhcmdldCIsInRleHRFZGl0b3IiLCJxdWVyeU1vZGVsIiwidG9nZ2xlQnV0dG9uIiwidG9nZ2xlRWRpdG9yTW9kZSIsInVzZUNhbGxiYWNrIiwiUXVlcnlGaWVsZCIsInJhd1F1ZXJ5IiwidXBkYXRlUXVlcnkiLCJydW5RdWVyeSIsIlNlZ21lbnRBc3luYyIsImdldEFsdFNlZ21lbnRzU2VsZWN0YWJsZXMiLCJkZWJvdW5jZSIsIk1ldHJpY1NlZ21lbnQiLCJtZXRyaWNJbmRleCIsImxvYWRPcHRpb25zIiwiZGVib3VuY2VkTG9hZE9wdGlvbnMiLCJsZWFkaW5nIiwib25TZWdtZW50Q2hhbmdlZCIsInNlbGVjdGFibGVWYWx1ZSIsInNlZ21lbnRWYWx1ZUNoYW5nZWQiLCJvblNlZ21lbnRDaGFuZ2VkRGVib3VuY2VkIiwiUHVyZUNvbXBvbmVudCIsInJhbmdlVXRpbCIsInBhcnNlU2NoZW1hUmV0ZW50aW9ucyIsImdldFJvbGx1cE5vdGljZSIsImdldFJ1bnRpbWVDb25zb2xpZGF0aW9uTm90aWNlIiwic3R5bGVzRmFjdG9yeSIsImNvbmZpZyIsIk1ldHJpY1RhbmtNZXRhSW5zcGVjdG9yIiwicmVuZGVyTWV0YSIsImtleSIsImJ1Y2tldHMiLCJyb2xsdXBOb3RpY2UiLCJydW50aW1lTm90aWNlIiwibm9ybUZ1bmMiLCJyZXBsYWNlIiwidG90YWxTZWNvbmRzIiwicmVkdWNlIiwiYWNjIiwiYnVja2V0IiwicmV0ZW50aW9uIiwiaW50ZXJ2YWxUb1NlY29uZHMiLCJtZXRhSXRlbSIsIm1ldGFJdGVtSGVhZGVyIiwiY291bnQiLCJtZXRhSXRlbUJvZHkiLCJzdGVwIiwic3RlcEhlYWRpbmciLCJzdGVwRGVzY3JpcHRpb24iLCJ0ZXh0IiwiYnVja2V0TGVuZ3RoIiwibGVuZ3RoUGVyY2VudCIsImlzQWN0aXZlIiwiYnVja2V0SW50ZXJ2YWwiLCJpbnRlcnZhbCIsImJ1Y2tldFJldGVudGlvbiIsImJ1Y2tldFJldGVudGlvbkFjdGl2ZSIsImZsZXhHcm93IiwicmVuZGVyIiwiZGF0YSIsInNlcmllc01ldGFzIiwic2VyaWVzIiwiY3VzdG9tIiwic2VyaWVzTWV0YUxpc3QiLCJKU09OIiwic3RyaW5naWZ5IiwiT2JqZWN0Iiwia2V5cyIsImJvcmRlckNvbG9yIiwiaXNEYXJrIiwicGFsZXR0ZSIsImdyYXkyNSIsImdyYXk4NSIsImRhcmsxIiwid2hpdGUiLCJoZWFkZXJCZyIsImdyYXkxNSIsIm1kIiwieHMiLCJzaXplIiwic20iLCJ0ZXh0V2VhayIsImxnIiwiYm9yZGVyIiwicmFkaXVzIiwiYmx1ZTg1IiwiYmx1ZTk1IiwiZ3JlZW5CYXNlIiwiZ3JlZW5TaGFkZSIsIk1ldHJpY3NTZWN0aW9uIiwic2VnbWVudHMiLCJQbGF5QnV0dG9uIiwib25DbGljayIsInVucGF1c2UiLCJUYWdzU2VjdGlvbiIsInNlY3Rpb25Db250ZW50Iiwic2VyaWVzQnlUYWdVc2VkIiwidGFncyIsImdldFRhZ09wZXJhdG9yc1NlbGVjdGFibGVzIiwiZ2V0VGFnc1NlbGVjdGFibGVzIiwiZ2V0VGFnVmFsdWVzU2VsZWN0YWJsZXMiLCJUYWdFZGl0b3IiLCJ0YWciLCJ0YWdJbmRleCIsImdldFRhZ3NPcHRpb25zIiwiaW5wdXRWYWx1ZSIsImRlYm91bmNlZEdldFRhZ3NPcHRpb25zIiwiZ2V0VGFnVmFsdWVPcHRpb25zIiwiZGVib3VuY2VkR2V0VGFnVmFsdWVPcHRpb25zIiwidGFnQ2hhbmdlZCIsIm9wZXJhdG9yIiwiZ2V0VGFnc0FzU2VnbWVudHNTZWxlY3RhYmxlcyIsImdldFRhZ3NBc1NlZ21lbnRzT3B0aW9ucyIsImRlYm91bmNlZEdldFRhZ3NBc1NlZ21lbnRzIiwiYWRkTmV3VGFnIiwicGF1c2VkIiwiZm9yRWFjaCIsInNvcnRCeSIsIm1hcFN0cmluZ3NUb1NlbGVjdGFibGVzIiwidmFsdWVzIiwibWFwU2VnbWVudHNUb1NlbGVjdGFibGVzIiwiY2F0ZWdvcmllcyIsImZ1bmNEZWYiLCJjYXRlZ29yeSIsInB1c2giLCJjcmVhdGVFZGl0YWJsZVBhcmFtIiwicGFyYW1EZWYiLCJhZGRpdGlvbmFsIiwibXVsdGlwbGUiLCJvcHRpb24iLCJBbGVydCIsIkRhdGFTb3VyY2VIdHRwU2V0dGluZ3MiLCJJbmxpbmVGb3JtTGFiZWwiLCJMZWdhY3lGb3JtcyIsIlNlbGVjdCIsIlN3aXRjaCIsInVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbiIsIm9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0Iiwib25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb25DaGVja2VkIiwiR3JhcGhpdGVUeXBlIiwiREVGQVVMVF9HUkFQSElURV9WRVJTSU9OIiwiR1JBUEhJVEVfVkVSU0lPTlMiLCJNYXBwaW5nc0NvbmZpZ3VyYXRpb24iLCJmcm9tU3RyaW5nIiwic3RvcmUiLCJTSE9XX01BUFBJTkdTX0hFTFBfS0VZIiwiZ3JhcGhpdGVWZXJzaW9ucyIsImdyYXBoaXRlVHlwZXMiLCJlbnRyaWVzIiwiQ29uZmlnRWRpdG9yIiwic2hvd01hcHBpbmdzSGVscCIsImdldE9iamVjdCIsImNvbXBvbmVudERpZE1vdW50IiwiY3VycmVudEdyYXBoaXRlVmVyc2lvbiIsIm9uT3B0aW9uc0NoYW5nZSIsImN1cnJlbnRWZXJzaW9uIiwiZmluZCIsIml0ZW0iLCJhY2Nlc3MiLCJyZW5kZXJUeXBlSGVscCIsInR5cGUiLCJqc29uRGF0YSIsImdyYXBoaXRlVHlwZSIsIk1ldHJpY3RhbmsiLCJyb2xsdXBJbmRpY2F0b3JFbmFibGVkIiwiaW1wb3J0Q29uZmlndXJhdGlvbiIsImxva2kiLCJtYXBwaW5ncyIsInNldFN0YXRlIiwic2V0T2JqZWN0IiwiZ3JhcGhpdGVWZXJzaW9uIiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIklucHV0IiwiTWFwcGluZ3NIZWxwIiwic2V0TWFwcGluZ3MiLCJzaG93SGVscCIsIm9uUmVzdG9yZUhlbHAiLCJvbkRpc21pc3MiLCJtYXBwaW5nIiwiY2hhbmdlRXZlbnQiLCJuZXdNYXBwaW5ncyIsImNvbmNhdCIsIl8iLCJzcGxpY2UiLCJtYXRjaGVycyIsInNwbGl0IiwibWV0cmljTm9kZSIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImxhYmVsTmFtZSIsInNsaWNlIiwibWF0Y2hlciIsImpvaW4iLCJlYWNoIiwiaW5kZXhPZiIsImlzQXJyYXkiLCJpc1N0cmluZyIsIl9tYXAiLCJsYXN0VmFsdWVGcm9tIiwib2YiLCJwaXBlIiwidGhyb3dFcnJvciIsImNhdGNoRXJyb3IiLCJnZXRCYWNrZW5kU3J2IiwiRGF0YVNvdXJjZUFwaSIsImRhdGVNYXRoIiwiQWJzdHJhY3RMYWJlbE9wZXJhdG9yIiwidG9EYXRhRnJhbWUiLCJnZnVuYyIsImdldFRlbXBsYXRlU3J2IiwiZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIiwicmVkdWNlRXJyb3IiLCJHcmFwaGl0ZVF1ZXJ5TW9kZWwiLCJHUkFQSElURV9UQUdfQ09NUEFSQVRPUlMiLCJFcXVhbCIsIk5vdEVxdWFsIiwiRXF1YWxSZWdFeCIsIk5vdEVxdWFsUmVnRXgiLCJjb252ZXJ0R2xvYlRvUmVnRXgiLCJpbmNsdWRlcyIsIkdyYXBoaXRlRGF0YXNvdXJjZSIsImluc3RhbmNlU2V0dGluZ3MiLCJ0ZW1wbGF0ZVNydiIsInJlc3VsdCIsIm1lc3NhZ2UiLCJzIiwidGl0bGUiLCJ5IiwiZGF0YXBvaW50cyIsImZyYW1lIiwicmVxdWVzdE1ldGFMaXN0Iiwibm90aWNlcyIsInN0YXRzIiwiZ2V0UmVxdWVzdFN0YXRzIiwiYmFzaWNBdXRoIiwidXJsIiwibWV0cmljTWFwcGluZ3MiLCJpc01ldHJpY1RhbmsiLCJzdXBwb3J0c1RhZ3MiLCJjYWNoZVRpbWVvdXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJmdW5jRGVmc1Byb21pc2UiLCJfc2VyaWVzUmVmTGV0dGVycyIsImdldFF1ZXJ5T3B0aW9uc0luZm8iLCJtYXhEYXRhUG9pbnRzIiwibGlua3MiLCJnZXRJbXBvcnRRdWVyeUNvbmZpZ3VyYXRpb24iLCJleHBvcnRUb0Fic3RyYWN0UXVlcmllcyIsImV4cG9ydFRvQWJzdHJhY3RRdWVyeSIsImdyYXBoaXRlUXVlcnkiLCJwYXJzZVRhcmdldCIsImxhYmVscyIsInRhcmdldE5vZGVzIiwiZXZlcnkiLCJjb252ZXJ0ZWQiLCJyZWZJZCIsImxhYmVsTWF0Y2hlcnMiLCJncmFwaE9wdGlvbnMiLCJmcm9tIiwidHJhbnNsYXRlVGltZSIsInJhdyIsInRpbWV6b25lIiwidW50aWwiLCJ0byIsInRhcmdldHMiLCJmb3JtYXQiLCJidWlsZEdyYXBoaXRlUGFyYW1zIiwic2NvcGVkVmFycyIsImh0dHBPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImFkZFRyYWNpbmdIZWFkZXJzIiwicGFuZWxJZCIsInJlcXVlc3RJZCIsImRvR3JhcGhpdGVSZXF1ZXN0IiwiY29udmVydFJlc3BvbnNlVG9EYXRhRnJhbWVzIiwicHJveHlNb2RlIiwiZGFzaGJvYXJkSWQiLCJ1bml0IiwicGFyc2VUYWdzIiwidGFnU3RyaW5nIiwiaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMiLCJleHBhbmRlZFF1ZXJpZXMiLCJleHBhbmRlZFF1ZXJ5IiwiZ2V0UmVmIiwiYW5ub3RhdGlvblF1ZXJ5IiwiYW5ub3RhdGlvbiIsImxpc3QiLCJ0aW1lIiwiZmllbGRzIiwiZ2V0IiwiZXZlbnRzIiwidGhlbiIsInJlc3VsdHMiLCJjb25zb2xlIiwiZSIsIndoZW4iLCJ3aGF0IiwiZXJyIiwiUHJvbWlzZSIsInJlamVjdCIsInRhcmdldENvbnRhaW5zVGVtcGxhdGUiLCJjb250YWluc1RlbXBsYXRlIiwiZGF0ZSIsInJvdW5kVXAiLCJzdWJzdHJpbmciLCJwYXJzZSIsImFkZCIsInN1YnRyYWN0IiwidW5peCIsIm1ldHJpY0ZpbmRRdWVyeSIsIm9wdGlvbmFsT3B0aW9ucyIsImludGVycG9sYXRlZFF1ZXJ5Iiwid2lsZGNhcmRDaGFyIiwiYWxsUGFyYW1zIiwiZXhwcmVzc2lvbnMiLCJsaW1pdCIsImdldFRhZ1ZhbHVlc0F1dG9Db21wbGV0ZSIsImdldFRhZ3NBdXRvQ29tcGxldGUiLCJ1c2VFeHBhbmQiLCJyZXF1ZXN0TWV0cmljRXhwYW5kIiwicmVxdWVzdE1ldHJpY0ZpbmQiLCJtZXRyaWMiLCJleHBhbmRhYmxlIiwiZ2V0VGFncyIsImlkIiwiZ2V0VGFnVmFsdWVzIiwidGFnUHJlZml4IiwiZXhwciIsImV4cHJlc3Npb24iLCJ0cmltIiwibWFwVG9UYWdzIiwidmFsdWVQcmVmaXgiLCJnZXRWZXJzaW9uIiwic2VtdmVyIiwiY3JlYXRlRnVuY0luc3RhbmNlIiwiZ2V0RnVuY0RlZiIsIndhaXRGb3JGdW5jRGVmc0xvYWRlZCIsImdldEZ1bmNEZWZzIiwic3VwcG9ydHNGdW5jdGlvbkluZGV4IiwicmVzb2x2ZSIsInN0YXR1cyIsImZpeGVkRGF0YSIsInBhcnNlRnVuY0RlZnMiLCJ0ZXN0RGF0YXNvdXJjZSIsInJhbmdlUmF3IiwiQXV0aG9yaXphdGlvbiIsImluc3BlY3QiLCJmZXRjaCIsImdyYXBoaXRlT3B0aW9ucyIsImNsZWFuT3B0aW9ucyIsInRhcmdldFZhbHVlIiwicmVnZXgiLCJpbnRlcnZhbEZvcm1hdEZpeFJlZ2V4IiwiaGFzVGFyZ2V0cyIsImZpeEludGVydmFsRm9ybWF0IiwibmVzdGVkU2VyaWVzUmVnZXhSZXBsYWNlciIsImcxIiwiaGlkZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImFzc2lnbiIsImxhc3QiLCJpc0Zpbml0ZSIsImFkZEZ1bmNEZWYiLCJkZWZhdWx0UGFyYW1zIiwic2hvcnROYW1lIiwib3B0aW9uYWxTZXJpZXNSZWZBcmdzIiwiZmFrZSIsImlzVmVyc2lvblJlbGF0ZWRGdW5jdGlvbiIsIm9iaiIsIkZ1bmNJbnN0YW5jZSIsIndpdGhEZWZhdWx0UGFyYW1zIiwidXBkYXRlVGV4dCIsIm1ldHJpY0V4cCIsInJlcGxhY2VWYXJpYWJsZXMiLCJzdHIiLCJwYXJhbWV0ZXJzIiwicGFyYW1UeXBlIiwidmFsdWVJbnRlcnBvbGF0ZWQiLCJwb3AiLCJ1bnNoaWZ0IiwiX2hhc011bHRpcGxlUGFyYW1zSW5TdHJpbmciLCJzdHJWYWx1ZSIsInVwZGF0ZVBhcmFtIiwicGFydFZhbCIsImlkeCIsImZ1bmNzIiwicGFyYW0iLCJyYXdEZWZzIiwiZnVuY05hbWUiLCJncm91cCIsInRlc3QiLCJyZXF1aXJlZCIsInNoaWZ0IiwicmF3UGFyYW0iLCJJbmZpbml0eSIsInN1Z2dlc3Rpb25zIiwiY29tcGFjdCIsImZpbmRJbmRleCIsImZsYXR0ZW4iLCJrZXlCeSIsIndpdGhvdXQiLCJhcnJheU1vdmUiLCJQYXJzZXIiLCJHcmFwaGl0ZVF1ZXJ5IiwicmVtb3ZlVGFnVmFsdWUiLCJwYXJzZXIiLCJhc3ROb2RlIiwiZ2V0QXN0IiwiY2hlY2tPdGhlclNlZ21lbnRzSW5kZXgiLCJwb3MiLCJwYXJzZVRhcmdldFJlY3Vyc2l2ZSIsImdldFNlZ21lbnRQYXRoVXBUbyIsImFyciIsImlubmVyRnVuYyIsInNwbGl0U2VyaWVzQnlUYWdQYXJhbXMiLCJnZXRTZXJpZXNCeVRhZ0Z1bmNJbmRleCIsImFkZEZ1bmN0aW9uUGFyYW1ldGVyIiwidXBkYXRlU2VnbWVudFZhbHVlIiwiYWRkU2VsZWN0TWV0cmljU2VnbWVudCIsIm5ld0Z1bmMiLCJ1cGRhdGVNb2RlbFRhcmdldCIsIndyYXBGdW5jdGlvbiIsIm1ldHJpY1BhdGgiLCJ1cGRhdGVSZW5kZXJlZFRhcmdldCIsInRhcmdldHNCeVJlZklkIiwibmVzdGVkU2VyaWVzUmVmUmVnZXgiLCJ0YXJnZXRXaXRoTmVzdGVkUXVlcmllcyIsImNvdW50VGFyZ2V0UmVmcyIsInJlZkNvdW50IiwidCIsInVwZGF0ZWQiLCJ0YXJnZXRGdWxsIiwidGFnUGF0dGVybiIsIm1hdGNoZXMiLCJnZXRTZXJpZXNCeVRhZ0Z1bmMiLCJzZXJpZXNCeVRhZ0Z1bmNJbmRleCIsImFkZFRhZyIsIm5ld1RhZ1BhcmFtIiwicmVuZGVyVGFnU3RyaW5nIiwicmVtb3ZlVGFnIiwidXBkYXRlVGFnIiwicmVuZGVyVGFnRXhwcmVzc2lvbnMiLCJleGNsdWRlSW5kZXgiLCJ0YWdFeHByIiwiYmluZCIsInVuaWNvZGVMZXR0ZXJUYWJsZSIsImlkZW50aWZpZXJTdGFydFRhYmxlIiwiaWRlbnRpZmllclBhcnRUYWJsZSIsIkxleGVyIiwiY2hhciIsInBlZWsiLCJjaGFyQXQiLCJza2lwIiwidG9rZW5pemUiLCJ0b2tlbiIsIm5leHQiLCJzY2FuU3RyaW5nTGl0ZXJhbCIsInNjYW5QdW5jdHVhdG9yIiwic2Nhbk51bWVyaWNMaXRlcmFsIiwic2NhbklkZW50aWZpZXIiLCJzY2FuVGVtcGxhdGVTZXF1ZW5jZSIsImlzVW5pY29kZUxldHRlciIsImNvZGUiLCJpc0hleERpZ2l0IiwicmVhZFVuaWNvZGVFc2NhcGVTZXF1ZW5jZSIsImNoMSIsImNoMiIsImNoMyIsImNoNCIsInBhcnNlSW50IiwiZ2V0SWRlbnRpZmllclN0YXJ0IiwiY2hyIiwiY2hhckNvZGVBdCIsImdldElkZW50aWZpZXJQYXJ0IiwiYmFkIiwiaXNEZWNpbWFsRGlnaXQiLCJpc09jdGFsRGlnaXQiLCJpc0lkZW50aWZpZXJTdGFydCIsImNoIiwiaXNNYWxmb3JtZWQiLCJiYXNlIiwiaXNQdW5jdHVhdG9yIiwicXVvdGUiLCJpc1VuY2xvc2VkIiwianVtcCIsInRvSW50ZWdlciIsInZhbCIsInRvQm9vbGVhbk9yVGltZXN0YW1wIiwibWV0YUxpc3QiLCJhcmNoaXZlSW5kZXgiLCJzY2hlbWEiLCJpbnRlcnZhbFN0cmluZyIsInNldmVyaXR5IiwicnVudGltZU5yIiwic3BlYyIsInZhbHMiLCJjaHVua3NwYW4iLCJudW1jaHVua3MiLCJyZWFkeSIsIkRhdGFTb3VyY2VQbHVnaW4iLCJBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsInBsdWdpbiIsInNldFF1ZXJ5RWRpdG9yIiwic2V0Q29uZmlnRWRpdG9yIiwic2V0TWV0YWRhdGFJbnNwZWN0b3IiLCJzZXRBbm5vdGF0aW9uUXVlcnlDdHJsIiwibGV4ZXIiLCJ0b2tlbnMiLCJzdGFydCIsImZ1bmN0aW9uQ2FsbCIsIm1ldHJpY0V4cHJlc3Npb24iLCJjdXJseUJyYWNlU2VnbWVudCIsImN1cmx5U2VnbWVudCIsImNvbnN1bWVUb2tlbiIsImVycm9yTWFyayIsIm1ldHJpY1NlZ21lbnQiLCJjdXJseSIsInBhcnRzIiwibm9kZSIsImZ1bmN0aW9uUGFyYW1ldGVycyIsImJvb2xFeHByZXNzaW9uIiwibnVtZXJpY0xpdGVyYWwiLCJzZXJpZXNSZWZFeHByZXNzaW9uIiwic3RyaW5nTGl0ZXJhbCIsInBhcnNlRmxvYXQiLCJjdXJyZW50VG9rZW4iLCJtYXRjaFRva2VuIiwidG9rZW4xIiwidG9rZW4yIiwiY3JlYXRlQWN0aW9uIiwiaW5pdCIsInRpbWVSYW5nZUNoYW5nZWQiLCJxdWVyaWVzQ2hhbmdlZCIsInF1ZXJ5Q2hhbmdlZCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlYXRlU3RvcmUiLCJ1c2VQcmV2aW91cyIsIkRpc3BhdGNoQ29udGV4dCIsIkdyYXBoaXRlU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJuZWVkc1JlZnJlc2giLCJzZXROZWVkc1JlZnJlc2giLCJwcmV2aW91c1JhbmdlIiwicmVmcmVzaCIsImNsb25lIiwibm90aWZ5QXBwIiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJHUkFQSElURV9UQUdfT1BFUkFUT1JTIiwiVEFHX1BSRUZJWCIsImJ1aWxkU2VnbWVudHMiLCJtb2RpZnlMYXN0U2VnbWVudCIsImNoZWNrT3RoZXJTZWdtZW50cyIsImZyb21JbmRleCIsInBhdGgiLCJoYW5kbGVNZXRyaWNzQXV0b0NvbXBsZXRlRXJyb3IiLCJzcGxpY2VTZWdtZW50cyIsImVtcHR5U2VnbWVudHMiLCJhZGRTZXJpZXNCeVRhZ0Z1bmMiLCJ0YWdQYXJhbSIsImhhbmRsZVRhcmdldENoYW5nZWQiLCJzbWFydGx5SGFuZGxlTmV3QWxpYXNCeU5vZGUiLCJwYXVzZSIsInJlbW92ZVRhZ1ByZWZpeCIsIm9sZFRhcmdldCIsIm1ldHJpY0F1dG9Db21wbGV0ZUVycm9yU2hvd24iLCJoYW5kbGVUYWdzQXV0b0NvbXBsZXRlRXJyb3IiLCJ0YWdzQXV0b0NvbXBsZXRlRXJyb3JTaG93biIsImVhY2hSaWdodCIsInJlbW92ZSIsIk1BWF9TVUdHRVNUSU9OUyIsImdldEFsdFNlZ21lbnRzIiwicHJlZml4IiwiYWx0U2VnbWVudHMiLCJnZXRWYXJpYWJsZXMiLCJ2YXJpYWJsZSIsInJlbW92ZVRhZ2dlZEVudHJ5IiwiYWRkQWx0VGFnU2VnbWVudHMiLCJ0YWdFeHByZXNzaW9ucyIsImFsdFRhZ3MiLCJnZXRUYWdzQXNTZWdtZW50cyIsInRhZ3NBc1NlZ21lbnRzIiwidGFnS2V5IiwiYWx0VmFsdWVzIiwidGFnU2VnbWVudHMiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZGVwcyIsInBheWxvYWQiLCJzZWdtZW50T3JTdHJpbmciLCJzZWdtZW50SW5kZXgiLCJuZXdUYWdLZXkiLCJuZXdUYWciLCJuZXdNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==
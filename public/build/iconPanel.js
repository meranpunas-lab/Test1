"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["iconPanel"],{

/***/ "./public/app/features/canvas/element.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/app/features/canvas/elements/button.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonItem": () => (/* binding */ buttonItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dimensions/editors/TextDimensionEditor.tsx");
/* harmony import */ var app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/APIEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






class ButtonDisplay extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      data
    } = this.props;

    const onClick = () => {
      if (data !== null && data !== void 0 && data.api) {
        (0,app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_3__.callApi)(data.api);
      }
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: onClick,
      children: data === null || data === void 0 ? void 0 : data.text
    });
  }

}

const buttonItem = {
  id: 'button',
  name: 'Button',
  description: 'Button',
  display: ButtonDisplay,
  defaultSize: {
    width: 200,
    height: 50
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    var _cfg$api;

    const data = {
      text: cfg !== null && cfg !== void 0 && cfg.text ? ctx.getText(cfg.text).value() : '',
      api: (_cfg$api = cfg === null || cfg === void 0 ? void 0 : cfg.api) !== null && _cfg$api !== void 0 ? _cfg$api : undefined
    };
    return data;
  },
  // Heatmap overlay options
  registerOptionsUI: builder => {
    const category = ['Button'];
    builder.addCustomEditor({
      category,
      id: 'textSelector',
      path: 'config.text',
      name: 'Text',
      editor: app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_2__.TextDimensionEditor
    }).addCustomEditor({
      category,
      id: 'apiSelector',
      path: 'config.api',
      name: 'API',
      editor: app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_3__.APIEditor
    });
  }
};

/***/ }),

/***/ "./public/app/features/canvas/elements/droneFront.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "droneFrontItem": () => (/* binding */ droneFrontItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _g, _g2, _g3, _g4;








const DroneFrontDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const droneFrontTransformStyle = `rotate(${data !== null && data !== void 0 && data.rollAngle ? data.rollAngle : 0}deg)`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    className: styles.droneFront,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1300 290",
    style: {
      transform: droneFrontTransformStyle
    },
    children: [_g || (_g = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "arms",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "100",
        y2: "150"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "100",
        y2: "150"
      })]
    })), _g2 || (_g2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "body",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "none",
        d: " M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
        cx: "650",
        cy: "160",
        r: "40",
        fill: "none"
      })]
    })), _g3 || (_g3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "motors",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "
      })]
    })), _g4 || (_g4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "propellers",
      fill: "black",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 1000 60 L 1030 60 L 1030 20 Q 1041 30 1060 30 Q 1079 30 1300 10 L 1030 10 Q 1030 0 1020 0 C 1016 0 1014 0 1010 0 Q 1000 0 1000 10 L 730 10 Q 950 30 970 30 Q 990 30 1000 20 L 1000 60 Z "
      })]
    }))]
  });
};

const droneFrontItem = {
  id: 'droneFront',
  name: 'Drone Front',
  description: 'Drone front',
  display: DroneFrontDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    const data = {
      rollAngle: cfg !== null && cfg !== void 0 && cfg.rollAngle ? ctx.getScalar(cfg.rollAngle).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Drone Front'];
    builder.addCustomEditor({
      category,
      id: 'rollAngle',
      path: 'config.rollAngle',
      name: 'Roll Angle',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  droneFront: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    transition: transform 0.4s;
  `
});

/***/ }),

/***/ "./public/app/features/canvas/elements/droneSide.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "droneSideItem": () => (/* binding */ droneSideItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _g, _g2, _g3, _g4;








const DroneSideDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const droneSidePitchTransformStyle = `rotate(${data !== null && data !== void 0 && data.pitchAngle ? data.pitchAngle : 0}deg)`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    className: styles.droneSide,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1300 290",
    style: {
      transform: droneSidePitchTransformStyle
    },
    children: [_g || (_g = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "arms",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "100",
        y2: "150"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "100",
        y2: "150"
      })]
    })), _g2 || (_g2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("g", {
      className: "body",
      stroke: "black",
      strokeWidth: "28px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "none",
        d: " M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "
      })
    })), _g3 || (_g3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "motors",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "
      })]
    })), _g4 || (_g4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "propellers",
      fill: "black",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 1000 60 L 1030 60 L 1030 20 Q 1041 30 1060 30 Q 1079 30 1300 10 L 1030 10 Q 1030 0 1020 0 C 1016 0 1014 0 1010 0 Q 1000 0 1000 10 L 730 10 Q 950 30 970 30 Q 990 30 1000 20 L 1000 60 Z "
      })]
    }))]
  });
};

const droneSideItem = {
  id: 'droneSide',
  name: 'Drone Side',
  description: 'Drone Side',
  display: DroneSideDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    const data = {
      pitchAngle: cfg !== null && cfg !== void 0 && cfg.pitchAngle ? ctx.getScalar(cfg.pitchAngle).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Drone Side'];
    builder.addCustomEditor({
      category,
      id: 'pitchAngle',
      path: 'config.pitchAngle',
      name: 'Pitch Angle',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  droneSide: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    transition: transform 0.4s;
  `
});

/***/ }),

/***/ "./public/app/features/canvas/elements/droneTop.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "droneTopItem": () => (/* binding */ droneTopItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _path, _path2;








const DroneTopDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const fRightRotorAnimation = `spin ${data !== null && data !== void 0 && data.fRightRotorRPM ? 60 / Math.abs(data.fRightRotorRPM) : 0}s linear infinite`;
  const fLeftRotorAnimation = `spin ${data !== null && data !== void 0 && data.fLeftRotorRPM ? 60 / Math.abs(data.fLeftRotorRPM) : 0}s linear infinite`;
  const bRightRotorAnimation = `spin ${data !== null && data !== void 0 && data.bRightRotorRPM ? 60 / Math.abs(data.bRightRotorRPM) : 0}s linear infinite`;
  const bLeftRotorAnimation = `spin ${data !== null && data !== void 0 && data.bLeftRotorRPM ? 60 / Math.abs(data.bLeftRotorRPM) : 0}s linear infinite`;
  const droneTopTransformStyle = `rotate(${data !== null && data !== void 0 && data.yawAngle ? data.yawAngle : 0}deg)`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "-43 -43 640 640",
    xmlSpace: "preserve",
    style: {
      transform: droneTopTransformStyle
    },
    children: [_path || (_path = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      fillRule: "evenodd",
      d: " M 137.95 127.967 C 137.14 127.157 136.189 126.58 135.178 126.218 C 138.173 121.545 139.967 116.036 140.125 110.123 L 217.64 151.862 C 214.049 157.411 211.8 163.922 211.386 170.95 L 209.694 199.712 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 Z  M 134.268 426.981 C 130.211 421.314 124.328 417.045 117.482 415.041 L 201.999 330.523 L 201.385 340.955 C 200.67 353.107 202.829 364.914 207.563 375.673 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 Z  M 324.765 373.673 L 228.527 373.673 Q 215.374 358.611 216.361 341.835 L 226.361 171.832 C 226.825 163.94 231.012 157.096 237.146 152.957 L 316.146 152.957 C 322.28 157.096 326.466 163.94 326.931 171.832 L 336.931 341.835 Q 337.918 358.611 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 Z  M 435.81 415.041 C 428.964 417.045 423.081 421.314 419.024 426.981 L 345.727 375.673 C 350.461 364.914 352.62 353.107 351.905 340.955 L 351.291 330.523 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 Z  M 343.596 199.713 L 341.904 170.951 C 341.49 163.923 339.242 157.411 335.651 151.863 L 413.167 110.124 C 413.325 116.037 415.119 121.546 418.114 126.219 C 417.103 126.581 416.152 127.158 415.342 127.968 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 Z  M 444.646 92.771 C 453.744 92.771 461.146 100.172 461.146 109.271 C 461.146 118.369 453.744 125.771 444.646 125.771 C 435.548 125.771 428.146 118.369 428.146 109.271 C 428.146 100.172 435.548 92.771 444.646 92.771 L 444.646 92.771 L 444.646 92.771 L 444.646 92.771 Z  M 108.647 92.771 C 117.745 92.771 125.147 100.172 125.147 109.271 C 125.147 118.369 117.745 125.771 108.647 125.771 C 99.549 125.771 92.147 118.369 92.147 109.271 C 92.147 100.172 99.549 92.771 108.647 92.771 L 108.647 92.771 L 108.647 92.771 Z  M 108.647 461.771 C 99.549 461.771 92.147 454.369 92.147 445.271 C 92.147 436.172 99.549 428.771 108.647 428.771 C 117.745 428.771 125.147 436.172 125.147 445.271 C 125.147 454.369 117.745 461.771 108.647 461.771 L 108.647 461.771 Z  M 92.322 136.202 C 97.086 139.1 102.675 140.771 108.647 140.771 C 114.883 140.771 120.697 138.941 125.594 135.802 C 125.956 136.813 126.534 137.764 127.343 138.573 L 207.342 218.573 C 207.711 218.942 208.109 219.264 208.528 219.54 L 203.212 309.908 C 201.794 310.182 200.44 310.869 199.342 311.967 L 95.343 415.967 C 94.954 416.356 94.62 416.779 94.335 417.224 C 93.651 417.575 92.976 417.942 92.322 418.34 Q 84.615 424.182 81.716 428.946 C 78.817 433.71 77.147 439.299 77.147 445.271 C 77.147 462.64 91.278 476.771 108.647 476.771 C 114.619 476.771 120.208 475.1 124.972 472.202 C 129.736 469.304 132.678 466.36 135.577 461.596 C 138.476 456.832 140.147 451.243 140.147 445.271 C 140.147 443.943 140.055 442.637 139.895 441.352 L 214.997 388.78 C 217.05 391.677 336.242 391.678 338.295 388.78 L 413.398 441.352 C 413.238 442.637 413.146 443.943 413.146 445.271 C 413.146 451.243 414.817 456.832 417.715 461.596 C 420.613 466.36 423.557 469.304 428.321 472.202 C 433.085 475.1 438.674 476.771 444.646 476.771 C 462.015 476.771 476.146 462.64 476.146 445.271 C 476.146 439.299 474.475 433.71 471.577 428.946 C 468.679 424.182 459.642 417.575 458.958 417.224 C 458.672 416.779 458.339 416.356 457.95 415.967 L 353.95 311.967 C 352.852 310.869 351.498 310.182 350.08 309.908 L 344.764 219.54 C 345.183 219.264 345.581 218.942 345.95 218.573 L 425.95 138.573 C 426.76 137.763 427.337 136.812 427.699 135.802 C 432.596 138.941 438.409 140.771 444.646 140.771 C 450.618 140.771 456.207 139.1 460.971 136.202 C 465.735 133.304 468.679 130.36 471.577 125.596 C 474.475 120.832 476.146 115.243 476.146 109.271 C 476.146 91.903 462.015 77.772 444.646 77.772 C 438.674 77.772 433.085 79.442 428.321 82.34 L 416.215 91.446 L 324.765 140.688 C 318.402 136.324 310.718 133.771 302.473 133.771 L 250.819 133.771 C 242.574 133.771 234.89 136.324 228.527 140.688 L 137.078 91.446 L 124.972 82.34 C 120.208 79.442 114.619 77.772 108.647 77.772 C 91.278 77.772 77.147 91.903 77.147 109.271 C 77.147 115.243 78.818 120.832 81.716 125.595 C 84.614 130.358 87.558 133.304 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 Z  M 444.646 461.771 C 435.548 461.771 428.146 454.369 428.146 445.271 C 428.146 436.172 435.548 428.771 444.646 428.771 C 453.744 428.771 461.146 436.172 461.146 445.271 C 461.146 454.369 453.744 461.771 444.646 461.771 Z "
    })), _path2 || (_path2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      fillRule: "evenodd",
      d: " M 259.458 334.235 L 259.458 337.211 L 254.514 337.211 L 254.514 350.795 L 250.842 350.795 L 250.842 337.211 L 245.898 337.211 L 245.898 334.235 L 259.458 334.235 Z  M 266.226 347.939 L 272.586 347.939 L 272.754 350.627 L 272.754 350.627 Q 270.498 350.867 265.074 350.867 L 265.074 350.867 L 265.074 350.867 Q 263.418 350.867 262.434 349.967 L 262.434 349.967 L 262.434 349.967 Q 261.45 349.067 261.426 347.531 L 261.426 347.531 L 261.426 337.499 L 261.426 337.499 Q 261.45 335.963 262.434 335.063 L 262.434 335.063 L 262.434 335.063 Q 263.418 334.163 265.074 334.163 L 265.074 334.163 L 265.074 334.163 Q 270.498 334.163 272.754 334.403 L 272.754 334.403 L 272.586 337.115 L 266.226 337.115 L 266.226 337.115 Q 265.626 337.115 265.362 337.403 L 265.362 337.403 L 265.362 337.403 Q 265.098 337.691 265.098 338.339 L 265.098 338.339 L 265.098 340.859 L 271.698 340.859 L 271.698 343.499 L 265.098 343.499 L 265.098 346.691 L 265.098 346.691 Q 265.098 347.363 265.362 347.651 L 265.362 347.651 L 265.362 347.651 Q 265.626 347.939 266.226 347.939 L 266.226 347.939 Z  M 275.202 333.995 L 278.73 333.995 L 278.73 346.931 L 278.73 346.931 Q 278.73 348.131 280.074 348.131 L 280.074 348.131 L 281.034 348.131 L 281.442 350.603 L 281.442 350.603 Q 280.53 351.083 278.61 351.083 L 278.61 351.083 L 278.61 351.083 Q 277.026 351.083 276.114 350.231 L 276.114 350.231 L 276.114 350.231 Q 275.202 349.379 275.202 347.819 L 275.202 347.819 L 275.202 333.995 Z  M 283.05 333.995 L 286.578 333.995 L 286.578 346.931 L 286.578 346.931 Q 286.578 348.131 287.922 348.131 L 287.922 348.131 L 288.882 348.131 L 289.29 350.603 L 289.29 350.603 Q 288.378 351.083 286.458 351.083 L 286.458 351.083 L 286.458 351.083 Q 284.874 351.083 283.962 350.231 L 283.962 350.231 L 283.962 350.231 Q 283.05 349.379 283.05 347.819 L 283.05 347.819 L 283.05 333.995 Z  M 292.086 335.759 L 292.086 335.759 L 292.086 335.759 Q 293.634 333.923 297.618 333.923 L 297.618 333.923 L 297.618 333.923 Q 301.602 333.923 303.162 335.759 L 303.162 335.759 L 303.162 335.759 Q 304.722 337.595 304.722 342.515 L 304.722 342.515 L 304.722 342.515 Q 304.722 347.435 303.162 349.271 L 303.162 349.271 L 303.162 349.271 Q 301.602 351.107 297.618 351.107 L 297.618 351.107 L 297.618 351.107 Q 293.634 351.107 292.086 349.271 L 292.086 349.271 L 292.086 349.271 Q 290.538 347.435 290.538 342.515 L 290.538 342.515 L 290.538 342.515 Q 290.538 337.595 292.086 335.759 Z  M 300.174 338.051 L 300.174 338.051 L 300.174 338.051 Q 299.49 336.875 297.618 336.875 L 297.618 336.875 L 297.618 336.875 Q 295.746 336.875 295.062 338.051 L 295.062 338.051 L 295.062 338.051 Q 294.378 339.227 294.378 342.515 L 294.378 342.515 L 294.378 342.515 Q 294.378 345.803 295.062 346.979 L 295.062 346.979 L 295.062 346.979 Q 295.746 348.155 297.618 348.155 L 297.618 348.155 L 297.618 348.155 Q 299.49 348.155 300.174 346.979 L 300.174 346.979 L 300.174 346.979 Q 300.858 345.803 300.858 342.515 L 300.858 342.515 L 300.858 342.515 Q 300.858 339.227 300.174 338.051 Z "
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "propeller-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCW}`,
        style: {
          animation: bRightRotorAnimation
        },
        d: " M 461.563 418.77 L 463.992 416.34 Q 465.495 407.116 466.461 400.395 C 467.426 393.675 469.363 388.087 474.731 383.284 Q 533.862 341.514 538.196 338.859 C 542.529 336.203 548.345 334.299 551.492 338.29 C 554.639 342.282 553.481 346.02 549.419 350.082 L 471.147 428.354 L 461.563 418.77 Z  M 427.729 471.772 L 425.299 474.202 Q 423.797 483.426 422.831 490.146 C 421.866 496.867 419.929 502.454 414.561 507.257 Q 355.43 549.028 351.096 551.683 C 346.763 554.338 340.947 556.243 337.8 552.251 C 334.653 548.26 335.811 544.522 339.873 540.46 L 418.145 462.187 L 427.729 471.772 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCCW}`,
        style: {
          animation: fRightRotorAnimation
        },
        d: " M 461.563 135.773 L 463.992 138.203 Q 465.495 147.426 466.461 154.147 C 467.426 160.868 469.363 166.455 474.731 171.258 Q 533.862 213.028 538.196 215.684 C 542.529 218.339 548.345 220.244 551.492 216.252 C 554.639 212.26 553.481 208.523 549.419 204.46 L 471.147 126.188 L 461.563 135.773 Z  M 427.729 82.77 L 425.299 80.34 Q 423.797 71.117 422.831 64.396 C 421.866 57.675 419.929 52.088 414.561 47.285 Q 355.43 5.515 351.096 2.859 C 346.763 0.204 340.947 -1.701 337.8 2.291 C 334.653 6.282 335.811 10.02 339.873 14.082 L 418.145 92.355 L 427.729 82.77 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCCW}`,
        style: {
          animation: bLeftRotorAnimation
        },
        d: " M 125.563 471.772 L 127.993 474.202 Q 129.496 483.426 130.461 490.146 C 131.427 496.867 133.363 502.454 138.731 507.257 Q 197.863 549.028 202.196 551.683 C 206.53 554.338 212.345 556.243 215.492 552.251 C 218.639 548.26 217.482 544.522 213.419 540.46 L 135.148 462.187 L 125.563 471.772 Z  M 91.73 418.77 L 89.3 416.34 Q 87.797 407.116 86.832 400.395 C 85.866 393.675 83.93 388.087 78.562 383.284 Q 19.431 341.514 15.097 338.859 C 10.763 336.203 4.948 334.299 1.801 338.29 C -1.346 342.282 -0.189 346.02 3.874 350.082 L 82.146 428.354 L 91.73 418.77 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCW}`,
        style: {
          animation: fLeftRotorAnimation
        },
        d: " M 125.563 82.77 L 127.993 80.34 Q 129.496 71.117 130.461 64.396 C 131.427 57.675 133.363 52.088 138.731 47.285 Q 197.863 5.515 202.196 2.859 C 206.53 0.204 212.345 -1.701 215.492 2.291 C 218.639 6.282 217.482 10.02 213.419 14.083 L 135.147 92.355 L 125.563 82.77 Z  M 91.73 135.773 L 89.3 138.203 Q 87.797 147.426 86.832 154.147 C 85.866 160.868 83.93 166.455 78.562 171.258 Q 19.431 213.028 15.097 215.684 C 10.763 218.339 4.948 220.243 1.801 216.252 C -1.346 212.26 -0.189 208.523 3.874 204.46 L 82.146 126.188 L 91.73 135.773 Z "
      })]
    })]
  });
};

const droneTopItem = {
  id: 'droneTop',
  name: 'Drone Top',
  description: 'Drone top',
  display: DroneTopDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    const data = {
      bRightRotorRPM: cfg !== null && cfg !== void 0 && cfg.bRightRotorRPM ? ctx.getScalar(cfg.bRightRotorRPM).value() : 0,
      bLeftRotorRPM: cfg !== null && cfg !== void 0 && cfg.bLeftRotorRPM ? ctx.getScalar(cfg.bLeftRotorRPM).value() : 0,
      fRightRotorRPM: cfg !== null && cfg !== void 0 && cfg.fRightRotorRPM ? ctx.getScalar(cfg.fRightRotorRPM).value() : 0,
      fLeftRotorRPM: cfg !== null && cfg !== void 0 && cfg.fLeftRotorRPM ? ctx.getScalar(cfg.fLeftRotorRPM).value() : 0,
      yawAngle: cfg !== null && cfg !== void 0 && cfg.yawAngle ? ctx.getScalar(cfg.yawAngle).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Drone Top'];
    builder.addCustomEditor({
      category,
      id: 'yawAngle',
      path: 'config.yawAngle',
      name: 'Yaw Angle',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'fRightRotorRPM',
      path: 'config.fRightRotorRPM',
      name: 'Front Right Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'fLeftRotorRPM',
      path: 'config.fLeftRotorRPM',
      name: 'Front Left Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'bRightRotorRPM',
      path: 'config.bRightRotorRPM',
      name: 'Back Right Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'bLeftRotorRPM',
      path: 'config.bLeftRotorRPM',
      name: 'Back Left Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  propeller: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    transform-origin: 50% 50%;
    transform-box: fill-box;
    display: block;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,
  propellerCW: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    animation-direction: normal;
  `,
  propellerCCW: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    animation-direction: reverse;
  `
});

/***/ }),

/***/ "./public/app/features/canvas/elements/icon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconDisplay": () => (/* binding */ IconDisplay),
/* harmony export */   "iconItem": () => (/* binding */ iconItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_features_dimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/0/cache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/APIEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








// When a stoke is defined, we want the path to be in page units
const svgStrokePathClass = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  path {
    vector-effect: non-scaling-stroke;
  }
`;
function IconDisplay(props) {
  const {
    width,
    height,
    data
  } = props;

  if (!(data !== null && data !== void 0 && data.path)) {
    return null;
  }

  const onClick = () => {
    if (data !== null && data !== void 0 && data.api) {
      (0,app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__.callApi)(data.api);
    }
  };

  const svgStyle = {
    fill: data === null || data === void 0 ? void 0 : data.fill,
    stroke: data === null || data === void 0 ? void 0 : data.strokeColor,
    strokeWidth: data === null || data === void 0 ? void 0 : data.stroke
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onClick,
    src: data.path,
    width: width,
    height: height,
    style: svgStyle,
    className: svgStyle.strokeWidth ? svgStrokePathClass : undefined
  });
}
const iconItem = {
  id: 'icon',
  name: 'Icon',
  description: 'SVG Icon display',
  display: IconDisplay,
  getNewOptions: options => Object.assign({
    placement: {
      width: 50,
      height: 50
    }
  }, options, {
    config: {
      path: {
        mode: app_features_dimensions__WEBPACK_IMPORTED_MODULE_1__.ResourceDimensionMode.Fixed,
        fixed: 'img/icons/unicons/question-circle.svg'
      },
      fill: {
        fixed: '#FFF899'
      }
    }
  }),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    var _cfg$api, _cfg$stroke;

    let path = undefined;

    if (cfg.path) {
      path = ctx.getResource(cfg.path).value();
    }

    if (!path || !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isString)(path)) {
      path = (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_1__.getPublicOrAbsoluteUrl)('img/icons/unicons/question-circle.svg');
    }

    const data = {
      path,
      fill: cfg.fill ? ctx.getColor(cfg.fill).value() : '#CCC',
      api: (_cfg$api = cfg === null || cfg === void 0 ? void 0 : cfg.api) !== null && _cfg$api !== void 0 ? _cfg$api : undefined
    };

    if ((_cfg$stroke = cfg.stroke) !== null && _cfg$stroke !== void 0 && _cfg$stroke.width && cfg.stroke.color) {
      if (cfg.stroke.width > 0) {
        var _cfg$stroke2;

        data.stroke = (_cfg$stroke2 = cfg.stroke) === null || _cfg$stroke2 === void 0 ? void 0 : _cfg$stroke2.width;
        data.strokeColor = ctx.getColor(cfg.stroke.color).value();
      }
    }

    return data;
  },
  // Heatmap overlay options
  registerOptionsUI: builder => {
    const category = ['Icon'];
    builder.addCustomEditor({
      category,
      id: 'iconSelector',
      path: 'config.path',
      name: 'SVG Path',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_2__.ResourceDimensionEditor,
      settings: {
        resourceType: 'icon'
      }
    }).addCustomEditor({
      category,
      id: 'config.fill',
      path: 'config.fill',
      name: 'Fill color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_2__.ColorDimensionEditor,
      settings: {},
      defaultValue: {
        // Configured values
        fixed: 'grey'
      }
    }).addSliderInput({
      category,
      path: 'config.stroke.width',
      name: 'Stroke',
      defaultValue: 0,
      settings: {
        min: 0,
        max: 10
      }
    }).addCustomEditor({
      category,
      id: 'config.stroke.color',
      path: 'config.stroke.color',
      name: 'Stroke color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_2__.ColorDimensionEditor,
      settings: {},
      defaultValue: {
        // Configured values
        fixed: 'grey'
      },
      showIf: cfg => {
        var _cfg$config, _cfg$config$stroke;

        return Boolean(cfg === null || cfg === void 0 ? void 0 : (_cfg$config = cfg.config) === null || _cfg$config === void 0 ? void 0 : (_cfg$config$stroke = _cfg$config.stroke) === null || _cfg$config$stroke === void 0 ? void 0 : _cfg$config$stroke.width);
      }
    }).addCustomEditor({
      category,
      id: 'apiSelector',
      path: 'config.api',
      name: 'API',
      editor: app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__.APIEditor
    });
  }
};

/***/ }),

/***/ "./public/app/features/canvas/elements/notFound.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notFoundItem": () => (/* binding */ notFoundItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;





class NotFoundDisplay extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      config
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        children: "NOT FOUND:"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre", {
        children: JSON.stringify(config, null, 2)
      })]
    });
  }

}

const notFoundItem = {
  id: 'not-found',
  name: 'Not found',
  description: 'Display when element type is not found in the registry',
  display: NotFoundDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: () => ({
    config: {}
  })
};

/***/ }),

/***/ "./public/app/features/canvas/elements/textBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Align": () => (/* binding */ Align),
/* harmony export */   "VAlign": () => (/* binding */ VAlign),
/* harmony export */   "textBoxItem": () => (/* binding */ textBoxItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_features_dimensions_editors_ColorDimensionEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/editors/ColorDimensionEditor.tsx");
/* harmony import */ var app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dimensions/editors/TextDimensionEditor.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







let Align;

(function (Align) {
  Align["Left"] = "left";
  Align["Center"] = "center";
  Align["Right"] = "right";
})(Align || (Align = {}));

let VAlign;

(function (VAlign) {
  VAlign["Top"] = "top";
  VAlign["Middle"] = "middle";
  VAlign["Bottom"] = "bottom";
})(VAlign || (VAlign = {}));

class TextBoxDisplay extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      data
    } = this.props;
    const styles = getStyles(app_core_config__WEBPACK_IMPORTED_MODULE_5__.config.theme2, data);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: styles.span,
        children: data === null || data === void 0 ? void 0 : data.text
      })
    });
  }

}

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.stylesFactory)((theme, data) => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    position: absolute;
    height: 100%;
    width: 100%;
    display: table;
  `,
  span: _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
    display: table-cell;
    vertical-align: ${data.valign};
    text-align: ${data.align};
    font-size: ${data === null || data === void 0 ? void 0 : data.size}px;
    color: ${data === null || data === void 0 ? void 0 : data.color};
  `
}));
const textBoxItem = {
  id: 'text-box',
  name: 'Text',
  description: 'Text box',
  display: TextBoxDisplay,
  defaultSize: {
    width: 240,
    height: 160
  },
  getNewOptions: options => Object.assign({
    background: {
      color: {
        fixed: 'grey'
      }
    }
  }, options, {
    config: {
      align: Align.Left,
      valign: VAlign.Middle
    }
  }),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    var _cfg$align, _cfg$valign;

    const data = {
      text: cfg.text ? ctx.getText(cfg.text).value() : '',
      align: (_cfg$align = cfg.align) !== null && _cfg$align !== void 0 ? _cfg$align : Align.Center,
      valign: (_cfg$valign = cfg.valign) !== null && _cfg$valign !== void 0 ? _cfg$valign : VAlign.Middle,
      size: cfg.size
    };

    if (cfg.color) {
      data.color = ctx.getColor(cfg.color).value();
    }

    return data;
  },
  // Heatmap overlay options
  registerOptionsUI: builder => {
    const category = ['Text box'];
    builder.addCustomEditor({
      category,
      id: 'textSelector',
      path: 'config.text',
      name: 'Text',
      editor: app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_2__.TextDimensionEditor
    }).addCustomEditor({
      category,
      id: 'config.color',
      path: 'config.color',
      name: 'Text color',
      editor: app_features_dimensions_editors_ColorDimensionEditor__WEBPACK_IMPORTED_MODULE_1__.ColorDimensionEditor,
      settings: {},
      defaultValue: {}
    }).addRadio({
      category,
      path: 'config.align',
      name: 'Align text',
      settings: {
        options: [{
          value: Align.Left,
          label: 'Left'
        }, {
          value: Align.Center,
          label: 'Center'
        }, {
          value: Align.Right,
          label: 'Right'
        }]
      },
      defaultValue: Align.Left
    }).addRadio({
      category,
      path: 'config.valign',
      name: 'Vertical align',
      settings: {
        options: [{
          value: VAlign.Top,
          label: 'Top'
        }, {
          value: VAlign.Middle,
          label: 'Middle'
        }, {
          value: VAlign.Bottom,
          label: 'Bottom'
        }]
      },
      defaultValue: VAlign.Middle
    }).addNumberInput({
      category,
      path: 'config.size',
      name: 'Text size',
      settings: {
        placeholder: 'Auto'
      }
    });
  }
};

/***/ }),

/***/ "./public/app/features/canvas/elements/windTurbine.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "windTurbineItem": () => (/* binding */ windTurbineItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _symbol, _g, _use, _use2, _use3;








const WindTurbineDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const windTurbineAnimation = `spin ${data !== null && data !== void 0 && data.rpm ? 60 / Math.abs(data.rpm) : 0}s linear infinite`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    viewBox: "0 0 189.326 283.989",
    preserveAspectRatio: "xMidYMid meet",
    children: [_symbol || (_symbol = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("symbol", {
      id: "blade",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "#e6e6e6",
        id: "blade-front",
        d: "M14.6491879,1.85011601 C14.2684455,-0.0535962877 10.7150812,-0.815081206 9.06473318,3.37308585 L0.434338747,70.7658933 L8.93805104,91.9607889 L15.4106729,90.437819 L17.5684455,78.3807425 L14.5218097,1.97679814 L14.6491879,1.85011601 Z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "#d0d6d7",
        id: "blade-side",
        d: "M11.0951276,0.581206497 C10.3336427,0.961948956 9.57215777,1.85011601 8.93735499,3.24640371 L0.306960557,70.6392111 L8.81067285,91.8341067 L3.35359629,70.0044084 L11.0951276,0.581206497 Z"
      })]
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      children: [_g || (_g = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
        id: "structure",
        transform: "translate(58.123, 82.664)",
        fillRule: "nonzero",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polygon", {
          id: "tower",
          fill: "#e6e6e6",
          points: "33.111,10.984 39.965,10.984 44.28,196.176 28.796,196.176"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          id: "yaw",
          fill: "rgba(0,0,0,0.25)",
          d: "M40.3454756,23.2948956 L40.7262181,34.8445476 C38.8225058,35.0986079 35.7765661,35.0986079 32.349884,34.337123 L32.7306265,23.2955916 L40.3454756,23.2955916 L40.3454756,23.2948956 Z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          id: "base",
          fill: "#d0d6d7",
          transform: "translate(0 42)",
          d: "M26.3846868,150.591647 L46.5640371,150.591647 C48.8484919,150.591647 50.7522042,152.49536 50.7522042,154.779814 L50.7522042,158.967981 L22.0691415,158.967981 L22.0691415,154.779814 C22.0691415,152.49536 23.9728538,150.591647 26.2573086,150.591647 L26.3846868,150.591647 Z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
          id: "nacelle",
          fill: "#e6e6e6",
          cx: "36.54",
          cy: "12",
          r: "11.93"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
          id: "gearbox",
          fill: "none",
          stroke: "#d0d6d7",
          strokeWidth: "2.75",
          cx: "36.538",
          cy: "11.999",
          r: "5.8"
        })]
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
        className: styles.blade,
        style: {
          animation: windTurbineAnimation
        },
        children: [_use || (_use = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("use", {
          id: "blade1",
          href: "#blade",
          x: "83.24",
          y: "0"
        })), _use2 || (_use2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("use", {
          id: "blade2",
          href: "#blade",
          x: "83.24",
          y: "0",
          transform: "rotate(120 94.663 94.663)"
        })), _use3 || (_use3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("use", {
          id: "blade3",
          href: "#blade",
          x: "83.24",
          y: "0",
          transform: "rotate(-120 94.663 94.663)"
        }))]
      })]
    })]
  });
};

const windTurbineItem = {
  id: 'windTurbine',
  name: 'Wind Turbine',
  description: 'Spinny spinny',
  display: WindTurbineDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    const data = {
      rpm: cfg !== null && cfg !== void 0 && cfg.rpm ? ctx.getScalar(cfg.rpm).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Wind Turbine'];
    builder.addCustomEditor({
      category,
      id: 'rpm',
      path: 'config.rpm',
      name: 'RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  blade: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    transform-origin: 94.663px 94.663px;
    transform: rotate(15deg);
  `
});

/***/ }),

/***/ "./public/app/features/canvas/group.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/app/features/canvas/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundImageSize": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize),
/* harmony export */   "CanvasGroupOptions": () => (/* reexport safe */ _group__WEBPACK_IMPORTED_MODULE_2__.CanvasGroupOptions),
/* harmony export */   "DEFAULT_CANVAS_ELEMENT_CONFIG": () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CANVAS_ELEMENT_CONFIG),
/* harmony export */   "canvasElementRegistry": () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_3__.canvasElementRegistry)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/canvas/types.ts");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/element.ts");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/group.ts");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/registry.ts");





/***/ }),

/***/ "./public/app/features/canvas/registry.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CANVAS_ELEMENT_CONFIG": () => (/* binding */ DEFAULT_CANVAS_ELEMENT_CONFIG),
/* harmony export */   "canvasElementRegistry": () => (/* binding */ canvasElementRegistry)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _elements_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/elements/button.tsx");
/* harmony import */ var _elements_droneFront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/droneFront.tsx");
/* harmony import */ var _elements_droneSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/elements/droneSide.tsx");
/* harmony import */ var _elements_droneTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/canvas/elements/droneTop.tsx");
/* harmony import */ var _elements_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
/* harmony import */ var _elements_textBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/canvas/elements/textBox.tsx");
/* harmony import */ var _elements_windTurbine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/canvas/elements/windTurbine.tsx");








const DEFAULT_CANVAS_ELEMENT_CONFIG = Object.assign({}, _elements_icon__WEBPACK_IMPORTED_MODULE_5__.iconItem.getNewOptions(), {
  type: _elements_icon__WEBPACK_IMPORTED_MODULE_5__.iconItem.id,
  name: `Element 1`
});
const canvasElementRegistry = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.Registry(() => [_elements_icon__WEBPACK_IMPORTED_MODULE_5__.iconItem, // default for now
_elements_textBox__WEBPACK_IMPORTED_MODULE_6__.textBoxItem, _elements_button__WEBPACK_IMPORTED_MODULE_1__.buttonItem, _elements_droneTop__WEBPACK_IMPORTED_MODULE_4__.droneTopItem, _elements_droneFront__WEBPACK_IMPORTED_MODULE_2__.droneFrontItem, _elements_droneSide__WEBPACK_IMPORTED_MODULE_3__.droneSideItem, _elements_windTurbine__WEBPACK_IMPORTED_MODULE_7__.windTurbineItem]);

/***/ }),

/***/ "./public/app/features/canvas/runtime/element.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementState": () => (/* binding */ ElementState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/index.ts");
/* harmony import */ var app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/notFound.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let counter = 0;
class ElementState {
  // UID necessary for moveable to work (for now)
  // Filled in by ref
  // Calculated
  // depends on the type
  // From options, but always set and always valid
  constructor(item, options, parent) {
    var _options$anchor, _options$placement;

    this.item = item;
    this.options = options;
    this.parent = parent;

    _defineProperty(this, "UID", counter++);

    _defineProperty(this, "revId", 0);

    _defineProperty(this, "sizeStyle", {});

    _defineProperty(this, "dataStyle", {});

    _defineProperty(this, "div", void 0);

    _defineProperty(this, "width", 100);

    _defineProperty(this, "height", 100);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "anchor", void 0);

    _defineProperty(this, "placement", void 0);

    _defineProperty(this, "initElement", target => {
      this.div = target;
    });

    _defineProperty(this, "applyDrag", event => {
      const {
        placement,
        anchor
      } = this;
      const deltaX = event.delta[0];
      const deltaY = event.delta[1];
      const style = event.target.style;

      if (anchor.top) {
        placement.top += deltaY;
        style.top = `${placement.top}px`;
      }

      if (anchor.bottom) {
        placement.bottom -= deltaY;
        style.bottom = `${placement.bottom}px`;
      }

      if (anchor.left) {
        placement.left += deltaX;
        style.left = `${placement.left}px`;
      }

      if (anchor.right) {
        placement.right -= deltaX;
        style.right = `${placement.right}px`;
      }
    });

    _defineProperty(this, "applyResize", event => {
      const {
        placement,
        anchor
      } = this;
      const style = event.target.style;
      const deltaX = event.delta[0];
      const deltaY = event.delta[1];
      const dirLR = event.direction[0];
      const dirTB = event.direction[1];

      if (dirLR === 1) {
        // RIGHT
        if (anchor.right) {
          placement.right -= deltaX;
          style.right = `${placement.right}px`;

          if (!anchor.left) {
            placement.width = event.width;
            style.width = `${placement.width}px`;
          }
        } else {
          placement.width = event.width;
          style.width = `${placement.width}px`;
        }
      } else if (dirLR === -1) {
        // LEFT
        if (anchor.left) {
          placement.left -= deltaX;
          placement.width = event.width;
          style.left = `${placement.left}px`;
          style.width = `${placement.width}px`;
        } else {
          placement.width += deltaX;
          style.width = `${placement.width}px`;
        }
      }

      if (dirTB === -1) {
        // TOP
        if (anchor.top) {
          placement.top -= deltaY;
          placement.height = event.height;
          style.top = `${placement.top}px`;
          style.height = `${placement.height}px`;
        } else {
          placement.height = event.height;
          style.height = `${placement.height}px`;
        }
      } else if (dirTB === 1) {
        // BOTTOM
        if (anchor.bottom) {
          placement.bottom -= deltaY;
          placement.height = event.height;
          style.bottom = `${placement.bottom}px`;
          style.height = `${placement.height}px`;
        } else {
          placement.height = event.height;
          style.height = `${placement.height}px`;
        }
      }

      this.width = event.width;
      this.height = event.height;
    });

    this.item = item;
    this.options = options;
    this.parent = parent;
    const fallbackName = `Element ${Date.now()}`;

    if (!options) {
      this.options = {
        type: item.id,
        name: fallbackName
      };
    }

    this.anchor = (_options$anchor = options.anchor) !== null && _options$anchor !== void 0 ? _options$anchor : {};
    this.placement = (_options$placement = options.placement) !== null && _options$placement !== void 0 ? _options$placement : {};
    options.anchor = this.anchor;
    options.placement = this.placement;
    const scene = this.getScene();

    if (!options.name) {
      const newName = scene === null || scene === void 0 ? void 0 : scene.getNextElementName();
      options.name = newName !== null && newName !== void 0 ? newName : fallbackName;
    }

    scene === null || scene === void 0 ? void 0 : scene.byName.set(options.name, this);
  }

  getScene() {
    let trav = this.parent;

    while (trav) {
      if (trav.isRoot()) {
        return trav.scene;
        break;
      }

      trav = trav.parent;
    }

    return undefined;
  }

  getName() {
    return this.options.name;
  }

  validatePlacement() {
    var _placement$width, _placement$height;

    const {
      anchor,
      placement
    } = this;

    if (!(anchor.left || anchor.right)) {
      anchor.left = true;
    }

    if (!(anchor.top || anchor.bottom)) {
      anchor.top = true;
    }

    const w = (_placement$width = placement.width) !== null && _placement$width !== void 0 ? _placement$width : 100; // this.div ? this.div.clientWidth : this.width;

    const h = (_placement$height = placement.height) !== null && _placement$height !== void 0 ? _placement$height : 100; // this.div ? this.div.clientHeight : this.height;

    if (anchor.top) {
      if (!placement.top) {
        placement.top = 0;
      }

      if (anchor.bottom) {
        delete placement.height;
      } else {
        placement.height = h;
        delete placement.bottom;
      }
    } else if (anchor.bottom) {
      if (!placement.bottom) {
        placement.bottom = 0;
      }

      placement.height = h;
      delete placement.top;
    }

    if (anchor.left) {
      if (!placement.left) {
        placement.left = 0;
      }

      if (anchor.right) {
        delete placement.width;
      } else {
        placement.width = w;
        delete placement.right;
      }
    } else if (anchor.right) {
      if (!placement.right) {
        placement.right = 0;
      }

      placement.width = w;
      delete placement.left;
    }

    this.width = w;
    this.height = h;
    this.options.anchor = this.anchor;
    this.options.placement = this.placement;
  } // The parent size, need to set our own size based on offsets


  updateSize(width, height) {
    this.width = width;
    this.height = height;
    this.validatePlacement(); // Update the CSS position

    this.sizeStyle = Object.assign({}, this.options.placement, {
      position: 'absolute'
    });
  }

  updateData(ctx) {
    var _background$size;

    if (this.item.prepareData) {
      this.data = this.item.prepareData(ctx, this.options.config);
      this.revId++; // rerender
    }

    const {
      background,
      border
    } = this.options;
    const css = {};

    if (background) {
      if (background.color) {
        const color = ctx.getColor(background.color);
        css.backgroundColor = color.value();
      }

      if (background.image) {
        const image = ctx.getResource(background.image);

        if (image) {
          const v = image.value();

          if (v) {
            css.backgroundImage = `url("${v}")`;

            switch ((_background$size = background.size) !== null && _background$size !== void 0 ? _background$size : app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Contain) {
              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Contain:
                css.backgroundSize = 'contain';
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Cover:
                css.backgroundSize = 'cover';
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Original:
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Tile:
                css.backgroundRepeat = 'repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Fill:
                css.backgroundSize = '100% 100%';
                break;
            }
          }
        }
      }
    }

    if (border && border.color && border.width) {
      const color = ctx.getColor(border.color);
      css.borderWidth = border.width;
      css.borderStyle = 'solid';
      css.borderColor = color.value(); // Move the image to inside the border

      if (css.backgroundImage) {
        css.backgroundOrigin = 'padding-box';
      }
    }

    this.dataStyle = css;
  }
  /** Recursively visit all nodes */


  visit(visitor) {
    visitor(this);
  }

  onChange(options) {
    if (this.item.id !== options.type) {
      var _canvasElementRegistr;

      this.item = (_canvasElementRegistr = app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.canvasElementRegistry.getIfExists(options.type)) !== null && _canvasElementRegistr !== void 0 ? _canvasElementRegistr : app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_2__.notFoundItem;
    } // rename handling


    const oldName = this.options.name;
    const newName = options.name;
    this.revId++;
    this.options = Object.assign({}, options);
    let trav = this.parent;

    while (trav) {
      if (trav.isRoot()) {
        trav.scene.save();
        break;
      }

      trav.revId++;
      trav = trav.parent;
    }

    const scene = this.getScene();

    if (oldName !== newName && scene) {
      scene.byName.delete(oldName);
      scene.byName.set(newName, this);
    }
  }

  getSaveModel() {
    return Object.assign({}, this.options);
  }

  render() {
    const {
      item
    } = this;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: Object.assign({}, this.sizeStyle, this.dataStyle),
      ref: this.initElement,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(item.display, {
        config: this.options.config,
        width: this.width,
        height: this.height,
        data: this.data
      }, `${this.UID}/${this.revId}`)
    }, `${this.UID}`);
  }

}

/***/ }),

/***/ "./public/app/features/canvas/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundImageSize": () => (/* binding */ BackgroundImageSize)
/* harmony export */ });
let BackgroundImageSize;

(function (BackgroundImageSize) {
  BackgroundImageSize["Original"] = "original";
  BackgroundImageSize["Contain"] = "contain";
  BackgroundImageSize["Cover"] = "cover";
  BackgroundImageSize["Fill"] = "fill";
  BackgroundImageSize["Tile"] = "tile";
})(BackgroundImageSize || (BackgroundImageSize = {}));

/***/ }),

/***/ "./public/app/plugins/panel/canvas/editor/APIEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIEditor": () => (/* binding */ APIEditor),
/* harmony export */   "callApi": () => (/* binding */ callApi)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _JSONFormatter, _br;









const dummyStringSettings = {
  settings: {}
};
const callApi = (api, isTest = false) => {
  if (api) {
    var _api$data;

    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch({
      url: api.endpoint,
      method: 'POST',
      data: (_api$data = api.data) !== null && _api$data !== void 0 ? _api$data : {}
    }).subscribe({
      error: error => {
        if (isTest) {
          app_core_core__WEBPACK_IMPORTED_MODULE_4__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertError, ['Error has occurred: ', JSON.stringify(error)]);
          console.error(error);
        }
      },
      complete: () => {
        if (isTest) {
          app_core_core__WEBPACK_IMPORTED_MODULE_4__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertSuccess, ['Test successful']);
        }
      }
    });
  }
};
const APIEditor = props => {
  var _value$data, _value$data2;

  const {
    value,
    context,
    onChange
  } = props;
  const labelWidth = 9;
  const onEndpointChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(endpoint => {
    onChange(Object.assign({}, value, {
      endpoint
    }));
  }, [onChange, value]);
  const onDataChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {
    onChange(Object.assign({}, value, {
      data
    }));
  }, [onChange, value]);

  const renderJSON = data => {
    try {
      const json = JSON.parse(data);
      return _JSONFormatter || (_JSONFormatter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.JSONFormatter, {
        json: json
      }));
    } catch (error) {
      return `Invalid JSON provided: ${error.message}`;
    }
  };

  const renderTestAPIButton = api => {
    if (api && api.endpoint) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: () => callApi(api, true),
        title: 'Test API',
        children: "Test API"
      });
    }

    return;
  };

  return _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.disableSanitizeHtml ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Endpoint',
        labelWidth: labelWidth,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.StringValueEditor, {
          context: context,
          value: value === null || value === void 0 ? void 0 : value.endpoint,
          onChange: onEndpointChange,
          item: dummyStringSettings
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Data',
        labelWidth: labelWidth,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.StringValueEditor, {
          context: context,
          value: (_value$data = value === null || value === void 0 ? void 0 : value.data) !== null && _value$data !== void 0 ? _value$data : '{}',
          onChange: onDataChange,
          item: dummyStringSettings
        })
      })
    }), renderTestAPIButton(value), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {})), renderJSON((_value$data2 = value === null || value === void 0 ? void 0 : value.data) !== null && _value$data2 !== void 0 ? _value$data2 : '{}')]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: "Must enable disableSanitizeHtml feature flag to access"
  });
};

/***/ }),

/***/ "./public/app/plugins/panel/canvas/editor/options.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionBuilder": () => (/* binding */ optionBuilder)
/* harmony export */ });
/* harmony import */ var app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/canvas/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");


const optionBuilder = {
  addBackground: (builder, context) => {
    const category = ['Background'];
    builder.addCustomEditor({
      category,
      id: 'background.color',
      path: 'background.color',
      name: 'Color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ColorDimensionEditor,
      settings: {},
      defaultValue: {
        // Configured values
        fixed: ''
      }
    }).addCustomEditor({
      category,
      id: 'background.image',
      path: 'background.image',
      name: 'Image',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ResourceDimensionEditor,
      settings: {
        resourceType: 'image'
      }
    }).addRadio({
      category,
      path: 'background.size',
      name: 'Image size',
      settings: {
        options: [{
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Original,
          label: 'Original'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Contain,
          label: 'Contain'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Cover,
          label: 'Cover'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Fill,
          label: 'Fill'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Tile,
          label: 'Tile'
        }]
      },
      defaultValue: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Cover
    });
  },
  addBorder: (builder, context) => {
    var _context$options, _context$options$bord;

    const category = ['Border'];
    builder.addSliderInput({
      category,
      path: 'border.width',
      name: 'Width',
      defaultValue: 2,
      settings: {
        min: 0,
        max: 20
      }
    });

    if ((_context$options = context.options) !== null && _context$options !== void 0 && (_context$options$bord = _context$options.border) !== null && _context$options$bord !== void 0 && _context$options$bord.width) {
      builder.addCustomEditor({
        category,
        id: 'border.color',
        path: 'border.color',
        name: 'Color',
        editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ColorDimensionEditor,
        settings: {},
        defaultValue: {
          // Configured values
          fixed: ''
        }
      });
    }
  }
};

/***/ }),

/***/ "./public/app/plugins/panel/icon/IconPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconPanel": () => (/* binding */ IconPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_features_canvas_runtime_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/runtime/element.tsx");
/* harmony import */ var app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
/* harmony import */ var app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class IconPanel extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "initElement", props => {
      this.element = new app_features_canvas_runtime_element__WEBPACK_IMPORTED_MODULE_1__.ElementState(app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_2__.iconItem, props.options.root);
      this.updateSize(props);
      this.element.updateData(this.dims);
      return this.element;
    });

    _defineProperty(this, "updateSize", props => {
      const {
        width,
        height
      } = props;
      this.element.anchor = {
        top: true,
        left: true
      };
      this.element.placement = {
        left: 0,
        top: 0,
        width,
        height
      };
      this.element.updateSize(width, height);
    });

    _defineProperty(this, "dims", {
      getColor: color => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__.getColorDimensionFromData)(this.props.data, color),
      getScale: scale => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__.getScaleDimensionFromData)(this.props.data, scale),
      getScalar: scalar => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__.getScalarDimensionFromData)(this.props.data, scalar),
      getText: text => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__.getTextDimensionFromData)(this.props.data, text),
      getResource: res => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__.getResourceDimensionFromData)(this.props.data, res)
    });

    this.element = this.initElement(_props);
  }

  shouldComponentUpdate(nextProps) {
    var _this$props$options, _nextProps$options;

    const {
      width,
      height,
      data
    } = this.props;
    let changed = false;

    if (width !== nextProps.width || height !== nextProps.height) {
      this.updateSize(nextProps);
      changed = true;
    }

    if (data !== nextProps.data) {
      this.element.updateData(this.dims);
      changed = true;
    } // Reload the element when options change


    if (((_this$props$options = this.props.options) === null || _this$props$options === void 0 ? void 0 : _this$props$options.root) !== ((_nextProps$options = nextProps.options) === null || _nextProps$options === void 0 ? void 0 : _nextProps$options.root)) {
      this.initElement(nextProps);
      changed = true;
    }

    return changed;
  }

  render() {
    const {
      width,
      height
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: {
        width,
        height,
        overflow: 'hidden',
        position: 'relative'
      },
      children: this.element.render()
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/panel/icon/models.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultPanelOptions": () => (/* binding */ defaultPanelOptions)
/* harmony export */ });
/* harmony import */ var app_features_dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/dimensions/index.ts");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NOTE: This file will be auto generated from models.cue
// It is currenty hand written but will serve as the target for cuetsy
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const defaultPanelOptions = {
  root: {
    config: {
      path: {
        mode: app_features_dimensions__WEBPACK_IMPORTED_MODULE_0__.ResourceDimensionMode.Fixed,
        fixed: 'img/icons/unicons/analysis.svg'
      },
      fill: {
        fixed: 'green'
      }
    }
  }
};

/***/ }),

/***/ "./public/app/plugins/panel/icon/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _IconPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/icon/IconPanel.tsx");
/* harmony import */ var _models_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/icon/models.gen.ts");
/* harmony import */ var app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
/* harmony import */ var _canvas_editor_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/options.ts");





const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_IconPanel__WEBPACK_IMPORTED_MODULE_1__.IconPanel).setNoPadding() // extend to panel edges
.useFieldConfig({
  standardOptions: {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldConfigProperty.Mappings]: {
      settings: {
        icon: true
      }
    }
  }
}).setPanelOptions(builder => {
  builder.addNestedOptions({
    category: ['Icon'],
    path: 'root',
    // Dynamically fill the selected element
    build: (builder, ctx) => {
      app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_3__.iconItem.registerOptionsUI(builder, ctx);
      _canvas_editor_options__WEBPACK_IMPORTED_MODULE_4__.optionBuilder.addBackground(builder, ctx);
      _canvas_editor_options__WEBPACK_IMPORTED_MODULE_4__.optionBuilder.addBorder(builder, ctx);
    },
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_2__.defaultPanelOptions.root
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkMsY0FGbUIsQ0FFSjtBQUNkQyxFQUFBQSxlQUFlLEVBQUU7QUFDZixLQUFDTCx1RUFBRCxHQUFnQztBQUM5QnJLLE1BQUFBLFFBQVEsRUFBRTtBQUNSNEssUUFBQUEsSUFBSSxFQUFFO0FBREU7QUFEb0I7QUFEakI7QUFESCxDQUZJLEVBV25CQyxlQVhtQixDQVdGNU8sT0FBRCxJQUFhO0FBQzVCQSxFQUFBQSxPQUFPLENBQUM2TyxnQkFBUixDQUEyRDtBQUN6RDVPLElBQUFBLFFBQVEsRUFBRSxDQUFDLE1BQUQsQ0FEK0M7QUFFekRFLElBQUFBLElBQUksRUFBRSxNQUZtRDtBQUl6RDtBQUNBMk8sSUFBQUEsS0FBSyxFQUFFLENBQUM5TyxPQUFELEVBQVVOLEdBQVYsS0FBa0I7QUFDdkI0RCxNQUFBQSx5RkFBQSxDQUE0QnRELE9BQTVCLEVBQXFDTixHQUFyQztBQUVBb04sTUFBQUEsK0VBQUEsQ0FBNEI5TSxPQUE1QixFQUFxQ04sR0FBckM7QUFDQW9OLE1BQUFBLDJFQUFBLENBQXdCOU0sT0FBeEIsRUFBaUNOLEdBQWpDO0FBQ0QsS0FWd0Q7QUFZekR1RSxJQUFBQSxZQUFZLEVBQUVrSyxpRUFBd0JWO0FBWm1CLEdBQTNEO0FBY0QsQ0ExQm1CLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvZHJvbmVGcm9udC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2Ryb25lU2lkZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2Ryb25lVG9wLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvaWNvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL25vdEZvdW5kLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvdGV4dEJveC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL3dpbmRUdXJiaW5lLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL3JlZ2lzdHJ5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2NhbnZhcy9ydW50aW1lL2VsZW1lbnQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2NhbnZhcy90eXBlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2NhbnZhcy9lZGl0b3IvQVBJRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2NhbnZhcy9lZGl0b3Ivb3B0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2ljb24vSWNvblBhbmVsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2ljb24vbW9kZWxzLmdlbi50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2ljb24vbW9kdWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRGltZW5zaW9uQ29udGV4dCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2NvbnRleHQnO1xuaW1wb3J0IHsgVGV4dERpbWVuc2lvbkVkaXRvciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2VkaXRvcnMvVGV4dERpbWVuc2lvbkVkaXRvcic7XG5pbXBvcnQgeyBUZXh0RGltZW5zaW9uQ29uZmlnIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvdHlwZXMnO1xuaW1wb3J0IHsgQ2FudmFzRWxlbWVudEl0ZW0sIENhbnZhc0VsZW1lbnRQcm9wcyB9IGZyb20gJy4uL2VsZW1lbnQnO1xuaW1wb3J0IHsgQVBJRWRpdG9yLCBBUElFZGl0b3JDb25maWcsIGNhbGxBcGkgfSBmcm9tICdhcHAvcGx1Z2lucy9wYW5lbC9jYW52YXMvZWRpdG9yL0FQSUVkaXRvcic7XG5cbmludGVyZmFjZSBCdXR0b25EYXRhIHtcbiAgdGV4dD86IHN0cmluZztcbiAgYXBpPzogQVBJRWRpdG9yQ29uZmlnO1xufVxuXG5pbnRlcmZhY2UgQnV0dG9uQ29uZmlnIHtcbiAgdGV4dD86IFRleHREaW1lbnNpb25Db25maWc7XG4gIGFwaT86IEFQSUVkaXRvckNvbmZpZztcbn1cblxuY2xhc3MgQnV0dG9uRGlzcGxheSBleHRlbmRzIFB1cmVDb21wb25lbnQ8Q2FudmFzRWxlbWVudFByb3BzPEJ1dHRvbkNvbmZpZywgQnV0dG9uRGF0YT4+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGRhdGE/LmFwaSkge1xuICAgICAgICBjYWxsQXBpKGRhdGEuYXBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIDxCdXR0b24gb25DbGljaz17b25DbGlja30+e2RhdGE/LnRleHR9PC9CdXR0b24+O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25JdGVtOiBDYW52YXNFbGVtZW50SXRlbTxCdXR0b25Db25maWcsIEJ1dHRvbkRhdGE+ID0ge1xuICBpZDogJ2J1dHRvbicsXG4gIG5hbWU6ICdCdXR0b24nLFxuICBkZXNjcmlwdGlvbjogJ0J1dHRvbicsXG5cbiAgZGlzcGxheTogQnV0dG9uRGlzcGxheSxcblxuICBkZWZhdWx0U2l6ZToge1xuICAgIHdpZHRoOiAyMDAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgfSxcblxuICBnZXROZXdPcHRpb25zOiAob3B0aW9ucykgPT4gKHtcbiAgICAuLi5vcHRpb25zLFxuICB9KSxcblxuICAvLyBDYWxsZWQgd2hlbiBkYXRhIGNoYW5nZXNcbiAgcHJlcGFyZURhdGE6IChjdHg6IERpbWVuc2lvbkNvbnRleHQsIGNmZzogQnV0dG9uQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgZGF0YTogQnV0dG9uRGF0YSA9IHtcbiAgICAgIHRleHQ6IGNmZz8udGV4dCA/IGN0eC5nZXRUZXh0KGNmZy50ZXh0KS52YWx1ZSgpIDogJycsXG4gICAgICBhcGk6IGNmZz8uYXBpID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG5cbiAgLy8gSGVhdG1hcCBvdmVybGF5IG9wdGlvbnNcbiAgcmVnaXN0ZXJPcHRpb25zVUk6IChidWlsZGVyKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBbJ0J1dHRvbiddO1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICd0ZXh0U2VsZWN0b3InLFxuICAgICAgICBwYXRoOiAnY29uZmlnLnRleHQnLFxuICAgICAgICBuYW1lOiAnVGV4dCcsXG4gICAgICAgIGVkaXRvcjogVGV4dERpbWVuc2lvbkVkaXRvcixcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnYXBpU2VsZWN0b3InLFxuICAgICAgICBwYXRoOiAnY29uZmlnLmFwaScsXG4gICAgICAgIG5hbWU6ICdBUEknLFxuICAgICAgICBlZGl0b3I6IEFQSUVkaXRvcixcbiAgICAgIH0pO1xuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBTY2FsYXJEaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzJztcbmltcG9ydCB7IENhbnZhc0VsZW1lbnRJdGVtLCBDYW52YXNFbGVtZW50UHJvcHMgfSBmcm9tICcuLi9lbGVtZW50JztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQsIFNjYWxhckRpbWVuc2lvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcblxuaW50ZXJmYWNlIERyb25lRnJvbnREYXRhIHtcbiAgcm9sbEFuZ2xlPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRHJvbmVGcm9udENvbmZpZyB7XG4gIHJvbGxBbmdsZT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbn1cblxuY29uc3QgRHJvbmVGcm9udERpc3BsYXk6IEZDPENhbnZhc0VsZW1lbnRQcm9wczxEcm9uZUZyb250Q29uZmlnLCBEcm9uZUZyb250RGF0YT4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGRyb25lRnJvbnRUcmFuc2Zvcm1TdHlsZSA9IGByb3RhdGUoJHtkYXRhPy5yb2xsQW5nbGUgPyBkYXRhLnJvbGxBbmdsZSA6IDB9ZGVnKWA7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9uZUZyb250fVxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDEzMDAgMjkwXCJcbiAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogZHJvbmVGcm9udFRyYW5zZm9ybVN0eWxlIH19XG4gICAgPlxuICAgICAgPGcgY2xhc3NOYW1lPVwiYXJtc1wiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlV2lkdGg9XCIyOHB4XCI+XG4gICAgICAgIDxsaW5lIHgxPVwiNTEwXCIgeDI9XCIzMjBcIiB5MT1cIjEwMFwiIHkyPVwiMTUwXCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI1MTBcIiB4Mj1cIjMyMFwiIHkxPVwiMTkwXCIgeTI9XCIyMTBcIiAvPlxuICAgICAgICA8bGluZSB4MT1cIjc5MFwiIHgyPVwiOTgwXCIgeTE9XCIxOTBcIiB5Mj1cIjIxMFwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiNzkwXCIgeDI9XCI5ODBcIiB5MT1cIjEwMFwiIHkyPVwiMTUwXCIgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGNsYXNzTmFtZT1cImJvZHlcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiMjhweFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBkPVwiIE0gNTEwIDEzMCBDIDUxMCAxMjQgNTEwIDExMCA1MTAgMTAwIEMgNTEwIDkwIDUzMCA3MSA1NDAgNzAgQyA2NDAgNjEgNjcwIDYwIDc2MCA3MCBDIDc3MCA3MSA3OTAgOTAgNzkwIDEwMCBRIDc5MCAxMjAgNzkwIDEzMCBMIDc5MCAxMzAgUSA3OTAgMTc3IDc5MCAxOTYgQyA3OTAgMjA3IDc3MCAyMjUgNzYwIDIyNiBDIDY3MCAyMzYgNjQwIDIzNiA1NDAgMjI2IEMgNTMwIDIyNiA1MTAgMjA2IDUxMCAxOTYgUSA1MTAgMTc3IDUxMCAxMzAgUSA1MTAgMTMzIDUxMCAxMzAgWiBcIlxuICAgICAgICAvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiNjUwXCIgY3k9XCIxNjBcIiByPVwiNDBcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJtb3RvcnNcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiMjhweFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG9yXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgZD1cIiBNIDMyMCA2MCBMIDI1MCA2MCBMIDI1MCAyMzAgTCAyNjAgMjkwIEwgMzEwIDI5MCBMIDMyMCAyMzAgTCAzMjAgNjAgWiBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG9yXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgZD1cIiBNIDEwNTAgNjAgTCA5ODAgNjAgTCA5ODAgMjMwIEwgOTkwIDI5MCBMIDEwNDAgMjkwIEwgMTA1MCAyMzAgTCAxMDUwIDYwIFogXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGNsYXNzTmFtZT1cInByb3BlbGxlcnNcIiBmaWxsPVwiYmxhY2tcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9wXCJcbiAgICAgICAgICBkPVwiIE0gMjcwIDYwIEwgMzAwIDYwIEwgMzAwIDIwIFEgMzExIDMwIDMzMCAzMCBRIDM0OSAzMCA1NzAgMTAgTCAzMDAgMTAgUSAzMDAgMCAyOTAgMCBDIDI4NiAwIDI4NCAwIDI4MCAwIFEgMjcwIDAgMjcwIDEwIEwgMCAxMCBRIDIyMCAzMCAyNDAgMzAgUSAyNjAgMzAgMjcwIDIwIEwgMjcwIDYwIFogXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9wXCJcbiAgICAgICAgICBkPVwiIE0gMTAwMCA2MCBMIDEwMzAgNjAgTCAxMDMwIDIwIFEgMTA0MSAzMCAxMDYwIDMwIFEgMTA3OSAzMCAxMzAwIDEwIEwgMTAzMCAxMCBRIDEwMzAgMCAxMDIwIDAgQyAxMDE2IDAgMTAxNCAwIDEwMTAgMCBRIDEwMDAgMCAxMDAwIDEwIEwgNzMwIDEwIFEgOTUwIDMwIDk3MCAzMCBRIDk5MCAzMCAxMDAwIDIwIEwgMTAwMCA2MCBaIFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZHJvbmVGcm9udEl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPGFueSwgYW55PiA9IHtcbiAgaWQ6ICdkcm9uZUZyb250JyxcbiAgbmFtZTogJ0Ryb25lIEZyb250JyxcbiAgZGVzY3JpcHRpb246ICdEcm9uZSBmcm9udCcsXG5cbiAgZGlzcGxheTogRHJvbmVGcm9udERpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6IChvcHRpb25zKSA9PiAoe1xuICAgIC4uLm9wdGlvbnMsXG4gIH0pLFxuXG4gIC8vIENhbGxlZCB3aGVuIGRhdGEgY2hhbmdlc1xuICBwcmVwYXJlRGF0YTogKGN0eDogRGltZW5zaW9uQ29udGV4dCwgY2ZnOiBEcm9uZUZyb250Q29uZmlnKSA9PiB7XG4gICAgY29uc3QgZGF0YTogRHJvbmVGcm9udERhdGEgPSB7XG4gICAgICByb2xsQW5nbGU6IGNmZz8ucm9sbEFuZ2xlID8gY3R4LmdldFNjYWxhcihjZmcucm9sbEFuZ2xlKS52YWx1ZSgpIDogMCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG5cbiAgcmVnaXN0ZXJPcHRpb25zVUk6IChidWlsZGVyKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBbJ0Ryb25lIEZyb250J107XG4gICAgYnVpbGRlci5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgY2F0ZWdvcnksXG4gICAgICBpZDogJ3JvbGxBbmdsZScsXG4gICAgICBwYXRoOiAnY29uZmlnLnJvbGxBbmdsZScsXG4gICAgICBuYW1lOiAnUm9sbCBBbmdsZScsXG4gICAgICBlZGl0b3I6IFNjYWxhckRpbWVuc2lvbkVkaXRvcixcbiAgICB9KTtcbiAgfSxcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZHJvbmVGcm9udDogY3NzYFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU2NhbGFyRGltZW5zaW9uRWRpdG9yIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvZWRpdG9ycyc7XG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5pbXBvcnQgeyBEaW1lbnNpb25Db250ZXh0LCBTY2FsYXJEaW1lbnNpb25Db25maWcgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucyc7XG5cbmludGVyZmFjZSBEcm9uZVNpZGVEYXRhIHtcbiAgcGl0Y2hBbmdsZT86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIERyb25lU2lkZUNvbmZpZyB7XG4gIHBpdGNoQW5nbGU/OiBTY2FsYXJEaW1lbnNpb25Db25maWc7XG59XG5cbmNvbnN0IERyb25lU2lkZURpc3BsYXk6IEZDPENhbnZhc0VsZW1lbnRQcm9wczxEcm9uZVNpZGVDb25maWcsIERyb25lU2lkZURhdGE+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcblxuICBjb25zdCBkcm9uZVNpZGVQaXRjaFRyYW5zZm9ybVN0eWxlID0gYHJvdGF0ZSgke2RhdGE/LnBpdGNoQW5nbGUgPyBkYXRhLnBpdGNoQW5nbGUgOiAwfWRlZylgO1xuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvbmVTaWRlfVxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDEzMDAgMjkwXCJcbiAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogZHJvbmVTaWRlUGl0Y2hUcmFuc2Zvcm1TdHlsZSB9fVxuICAgID5cbiAgICAgIDxnIGNsYXNzTmFtZT1cImFybXNcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiMjhweFwiPlxuICAgICAgICA8bGluZSB4MT1cIjUxMFwiIHgyPVwiMzIwXCIgeTE9XCIxMDBcIiB5Mj1cIjE1MFwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiNTEwXCIgeDI9XCIzMjBcIiB5MT1cIjE5MFwiIHkyPVwiMjEwXCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI3OTBcIiB4Mj1cIjk4MFwiIHkxPVwiMTkwXCIgeTI9XCIyMTBcIiAvPlxuICAgICAgICA8bGluZSB4MT1cIjc5MFwiIHgyPVwiOTgwXCIgeTE9XCIxMDBcIiB5Mj1cIjE1MFwiIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJib2R5XCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VXaWR0aD1cIjI4cHhcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgZD1cIiBNIDUxMCAxMzAgQyA1MTAgMTI0IDUxMCAxMTAgNTEwIDEwMCBDIDUxMCA5MCA1MzAgNzEgNTQwIDcwIEMgNjQwIDYxIDY3MCA2MCA3NjAgNzAgQyA3NzAgNzEgNzkwIDkwIDc5MCAxMDAgUSA3OTAgMTIwIDc5MCAxMzAgTCA3OTAgMTMwIFEgNzkwIDE3NyA3OTAgMTk2IEMgNzkwIDIwNyA3NzAgMjI1IDc2MCAyMjYgQyA2NzAgMjM2IDY0MCAyMzYgNTQwIDIyNiBDIDUzMCAyMjYgNTEwIDIwNiA1MTAgMTk2IFEgNTEwIDE3NyA1MTAgMTMwIFEgNTEwIDEzMyA1MTAgMTMwIFogXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGNsYXNzTmFtZT1cIm1vdG9yc1wiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlV2lkdGg9XCIyOHB4XCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW90b3JcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBkPVwiIE0gMzIwIDYwIEwgMjUwIDYwIEwgMjUwIDIzMCBMIDI2MCAyOTAgTCAzMTAgMjkwIEwgMzIwIDIzMCBMIDMyMCA2MCBaIFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW90b3JcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBkPVwiIE0gMTA1MCA2MCBMIDk4MCA2MCBMIDk4MCAyMzAgTCA5OTAgMjkwIEwgMTA0MCAyOTAgTCAxMDUwIDIzMCBMIDEwNTAgNjAgWiBcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGcgY2xhc3NOYW1lPVwicHJvcGVsbGVyc1wiIGZpbGw9XCJibGFja1wiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb3BcIlxuICAgICAgICAgIGQ9XCIgTSAyNzAgNjAgTCAzMDAgNjAgTCAzMDAgMjAgUSAzMTEgMzAgMzMwIDMwIFEgMzQ5IDMwIDU3MCAxMCBMIDMwMCAxMCBRIDMwMCAwIDI5MCAwIEMgMjg2IDAgMjg0IDAgMjgwIDAgUSAyNzAgMCAyNzAgMTAgTCAwIDEwIFEgMjIwIDMwIDI0MCAzMCBRIDI2MCAzMCAyNzAgMjAgTCAyNzAgNjAgWiBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb3BcIlxuICAgICAgICAgIGQ9XCIgTSAxMDAwIDYwIEwgMTAzMCA2MCBMIDEwMzAgMjAgUSAxMDQxIDMwIDEwNjAgMzAgUSAxMDc5IDMwIDEzMDAgMTAgTCAxMDMwIDEwIFEgMTAzMCAwIDEwMjAgMCBDIDEwMTYgMCAxMDE0IDAgMTAxMCAwIFEgMTAwMCAwIDEwMDAgMTAgTCA3MzAgMTAgUSA5NTAgMzAgOTcwIDMwIFEgOTkwIDMwIDEwMDAgMjAgTCAxMDAwIDYwIFogXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcm9uZVNpZGVJdGVtOiBDYW52YXNFbGVtZW50SXRlbTxhbnksIGFueT4gPSB7XG4gIGlkOiAnZHJvbmVTaWRlJyxcbiAgbmFtZTogJ0Ryb25lIFNpZGUnLFxuICBkZXNjcmlwdGlvbjogJ0Ryb25lIFNpZGUnLFxuXG4gIGRpc3BsYXk6IERyb25lU2lkZURpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6IChvcHRpb25zKSA9PiAoe1xuICAgIC4uLm9wdGlvbnMsXG4gIH0pLFxuXG4gIC8vIENhbGxlZCB3aGVuIGRhdGEgY2hhbmdlc1xuICBwcmVwYXJlRGF0YTogKGN0eDogRGltZW5zaW9uQ29udGV4dCwgY2ZnOiBEcm9uZVNpZGVDb25maWcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBEcm9uZVNpZGVEYXRhID0ge1xuICAgICAgcGl0Y2hBbmdsZTogY2ZnPy5waXRjaEFuZ2xlID8gY3R4LmdldFNjYWxhcihjZmcucGl0Y2hBbmdsZSkudmFsdWUoKSA6IDAsXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIHJlZ2lzdGVyT3B0aW9uc1VJOiAoYnVpbGRlcikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydEcm9uZSBTaWRlJ107XG4gICAgYnVpbGRlci5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgY2F0ZWdvcnksXG4gICAgICBpZDogJ3BpdGNoQW5nbGUnLFxuICAgICAgcGF0aDogJ2NvbmZpZy5waXRjaEFuZ2xlJyxcbiAgICAgIG5hbWU6ICdQaXRjaCBBbmdsZScsXG4gICAgICBlZGl0b3I6IFNjYWxhckRpbWVuc2lvbkVkaXRvcixcbiAgICB9KTtcbiAgfSxcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZHJvbmVTaWRlOiBjc3NgXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBTY2FsYXJEaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzJztcbmltcG9ydCB7IENhbnZhc0VsZW1lbnRJdGVtLCBDYW52YXNFbGVtZW50UHJvcHMgfSBmcm9tICcuLi9lbGVtZW50JztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQsIFNjYWxhckRpbWVuc2lvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcblxuaW50ZXJmYWNlIERyb25lVG9wRGF0YSB7XG4gIGJSaWdodFJvdG9yUlBNPzogbnVtYmVyO1xuICBiTGVmdFJvdG9yUlBNPzogbnVtYmVyO1xuICBmUmlnaHRSb3RvclJQTT86IG51bWJlcjtcbiAgZkxlZnRSb3RvclJQTT86IG51bWJlcjtcbiAgeWF3QW5nbGU/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBEcm9uZVRvcENvbmZpZyB7XG4gIGJSaWdodFJvdG9yUlBNPzogU2NhbGFyRGltZW5zaW9uQ29uZmlnO1xuICBiTGVmdFJvdG9yUlBNPzogU2NhbGFyRGltZW5zaW9uQ29uZmlnO1xuICBmUmlnaHRSb3RvclJQTT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbiAgZkxlZnRSb3RvclJQTT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbiAgeWF3QW5nbGU/OiBTY2FsYXJEaW1lbnNpb25Db25maWc7XG59XG5cbmNvbnN0IERyb25lVG9wRGlzcGxheTogRkM8Q2FudmFzRWxlbWVudFByb3BzPERyb25lVG9wQ29uZmlnLCBEcm9uZVRvcERhdGE+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcblxuICBjb25zdCBmUmlnaHRSb3RvckFuaW1hdGlvbiA9IGBzcGluICR7ZGF0YT8uZlJpZ2h0Um90b3JSUE0gPyA2MCAvIE1hdGguYWJzKGRhdGEuZlJpZ2h0Um90b3JSUE0pIDogMH1zIGxpbmVhciBpbmZpbml0ZWA7XG5cbiAgY29uc3QgZkxlZnRSb3RvckFuaW1hdGlvbiA9IGBzcGluICR7ZGF0YT8uZkxlZnRSb3RvclJQTSA/IDYwIC8gTWF0aC5hYnMoZGF0YS5mTGVmdFJvdG9yUlBNKSA6IDB9cyBsaW5lYXIgaW5maW5pdGVgO1xuXG4gIGNvbnN0IGJSaWdodFJvdG9yQW5pbWF0aW9uID0gYHNwaW4gJHtkYXRhPy5iUmlnaHRSb3RvclJQTSA/IDYwIC8gTWF0aC5hYnMoZGF0YS5iUmlnaHRSb3RvclJQTSkgOiAwfXMgbGluZWFyIGluZmluaXRlYDtcblxuICBjb25zdCBiTGVmdFJvdG9yQW5pbWF0aW9uID0gYHNwaW4gJHtkYXRhPy5iTGVmdFJvdG9yUlBNID8gNjAgLyBNYXRoLmFicyhkYXRhLmJMZWZ0Um90b3JSUE0pIDogMH1zIGxpbmVhciBpbmZpbml0ZWA7XG5cbiAgY29uc3QgZHJvbmVUb3BUcmFuc2Zvcm1TdHlsZSA9IGByb3RhdGUoJHtkYXRhPy55YXdBbmdsZSA/IGRhdGEueWF3QW5nbGUgOiAwfWRlZylgO1xuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB2aWV3Qm94PVwiLTQzIC00MyA2NDAgNjQwXCJcbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBkcm9uZVRvcFRyYW5zZm9ybVN0eWxlIH19XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIiBNIDEzNy45NSAxMjcuOTY3IEMgMTM3LjE0IDEyNy4xNTcgMTM2LjE4OSAxMjYuNTggMTM1LjE3OCAxMjYuMjE4IEMgMTM4LjE3MyAxMjEuNTQ1IDEzOS45NjcgMTE2LjAzNiAxNDAuMTI1IDExMC4xMjMgTCAyMTcuNjQgMTUxLjg2MiBDIDIxNC4wNDkgMTU3LjQxMSAyMTEuOCAxNjMuOTIyIDIxMS4zODYgMTcwLjk1IEwgMjA5LjY5NCAxOTkuNzEyIEwgMTM3Ljk1IDEyNy45NjcgTCAxMzcuOTUgMTI3Ljk2NyBMIDEzNy45NSAxMjcuOTY3IEwgMTM3Ljk1IDEyNy45NjcgTCAxMzcuOTUgMTI3Ljk2NyBMIDEzNy45NSAxMjcuOTY3IEwgMTM3Ljk1IDEyNy45NjcgTCAxMzcuOTUgMTI3Ljk2NyBMIDEzNy45NSAxMjcuOTY3IFogIE0gMTM0LjI2OCA0MjYuOTgxIEMgMTMwLjIxMSA0MjEuMzE0IDEyNC4zMjggNDE3LjA0NSAxMTcuNDgyIDQxNS4wNDEgTCAyMDEuOTk5IDMzMC41MjMgTCAyMDEuMzg1IDM0MC45NTUgQyAyMDAuNjcgMzUzLjEwNyAyMDIuODI5IDM2NC45MTQgMjA3LjU2MyAzNzUuNjczIEwgMTM0LjI2OCA0MjYuOTgxIEwgMTM0LjI2OCA0MjYuOTgxIEwgMTM0LjI2OCA0MjYuOTgxIEwgMTM0LjI2OCA0MjYuOTgxIEwgMTM0LjI2OCA0MjYuOTgxIEwgMTM0LjI2OCA0MjYuOTgxIEwgMTM0LjI2OCA0MjYuOTgxIEwgMTM0LjI2OCA0MjYuOTgxIFogIE0gMzI0Ljc2NSAzNzMuNjczIEwgMjI4LjUyNyAzNzMuNjczIFEgMjE1LjM3NCAzNTguNjExIDIxNi4zNjEgMzQxLjgzNSBMIDIyNi4zNjEgMTcxLjgzMiBDIDIyNi44MjUgMTYzLjk0IDIzMS4wMTIgMTU3LjA5NiAyMzcuMTQ2IDE1Mi45NTcgTCAzMTYuMTQ2IDE1Mi45NTcgQyAzMjIuMjggMTU3LjA5NiAzMjYuNDY2IDE2My45NCAzMjYuOTMxIDE3MS44MzIgTCAzMzYuOTMxIDM0MS44MzUgUSAzMzcuOTE4IDM1OC42MTEgMzI0Ljc2NSAzNzMuNjczIEwgMzI0Ljc2NSAzNzMuNjczIEwgMzI0Ljc2NSAzNzMuNjczIEwgMzI0Ljc2NSAzNzMuNjczIEwgMzI0Ljc2NSAzNzMuNjczIEwgMzI0Ljc2NSAzNzMuNjczIEwgMzI0Ljc2NSAzNzMuNjczIFogIE0gNDM1LjgxIDQxNS4wNDEgQyA0MjguOTY0IDQxNy4wNDUgNDIzLjA4MSA0MjEuMzE0IDQxOS4wMjQgNDI2Ljk4MSBMIDM0NS43MjcgMzc1LjY3MyBDIDM1MC40NjEgMzY0LjkxNCAzNTIuNjIgMzUzLjEwNyAzNTEuOTA1IDM0MC45NTUgTCAzNTEuMjkxIDMzMC41MjMgTCA0MzUuODEgNDE1LjA0MSBMIDQzNS44MSA0MTUuMDQxIEwgNDM1LjgxIDQxNS4wNDEgTCA0MzUuODEgNDE1LjA0MSBMIDQzNS44MSA0MTUuMDQxIEwgNDM1LjgxIDQxNS4wNDEgWiAgTSAzNDMuNTk2IDE5OS43MTMgTCAzNDEuOTA0IDE3MC45NTEgQyAzNDEuNDkgMTYzLjkyMyAzMzkuMjQyIDE1Ny40MTEgMzM1LjY1MSAxNTEuODYzIEwgNDEzLjE2NyAxMTAuMTI0IEMgNDEzLjMyNSAxMTYuMDM3IDQxNS4xMTkgMTIxLjU0NiA0MTguMTE0IDEyNi4yMTkgQyA0MTcuMTAzIDEyNi41ODEgNDE2LjE1MiAxMjcuMTU4IDQxNS4zNDIgMTI3Ljk2OCBMIDM0My41OTYgMTk5LjcxMyBMIDM0My41OTYgMTk5LjcxMyBMIDM0My41OTYgMTk5LjcxMyBMIDM0My41OTYgMTk5LjcxMyBMIDM0My41OTYgMTk5LjcxMyBaICBNIDQ0NC42NDYgOTIuNzcxIEMgNDUzLjc0NCA5Mi43NzEgNDYxLjE0NiAxMDAuMTcyIDQ2MS4xNDYgMTA5LjI3MSBDIDQ2MS4xNDYgMTE4LjM2OSA0NTMuNzQ0IDEyNS43NzEgNDQ0LjY0NiAxMjUuNzcxIEMgNDM1LjU0OCAxMjUuNzcxIDQyOC4xNDYgMTE4LjM2OSA0MjguMTQ2IDEwOS4yNzEgQyA0MjguMTQ2IDEwMC4xNzIgNDM1LjU0OCA5Mi43NzEgNDQ0LjY0NiA5Mi43NzEgTCA0NDQuNjQ2IDkyLjc3MSBMIDQ0NC42NDYgOTIuNzcxIEwgNDQ0LjY0NiA5Mi43NzEgWiAgTSAxMDguNjQ3IDkyLjc3MSBDIDExNy43NDUgOTIuNzcxIDEyNS4xNDcgMTAwLjE3MiAxMjUuMTQ3IDEwOS4yNzEgQyAxMjUuMTQ3IDExOC4zNjkgMTE3Ljc0NSAxMjUuNzcxIDEwOC42NDcgMTI1Ljc3MSBDIDk5LjU0OSAxMjUuNzcxIDkyLjE0NyAxMTguMzY5IDkyLjE0NyAxMDkuMjcxIEMgOTIuMTQ3IDEwMC4xNzIgOTkuNTQ5IDkyLjc3MSAxMDguNjQ3IDkyLjc3MSBMIDEwOC42NDcgOTIuNzcxIEwgMTA4LjY0NyA5Mi43NzEgWiAgTSAxMDguNjQ3IDQ2MS43NzEgQyA5OS41NDkgNDYxLjc3MSA5Mi4xNDcgNDU0LjM2OSA5Mi4xNDcgNDQ1LjI3MSBDIDkyLjE0NyA0MzYuMTcyIDk5LjU0OSA0MjguNzcxIDEwOC42NDcgNDI4Ljc3MSBDIDExNy43NDUgNDI4Ljc3MSAxMjUuMTQ3IDQzNi4xNzIgMTI1LjE0NyA0NDUuMjcxIEMgMTI1LjE0NyA0NTQuMzY5IDExNy43NDUgNDYxLjc3MSAxMDguNjQ3IDQ2MS43NzEgTCAxMDguNjQ3IDQ2MS43NzEgWiAgTSA5Mi4zMjIgMTM2LjIwMiBDIDk3LjA4NiAxMzkuMSAxMDIuNjc1IDE0MC43NzEgMTA4LjY0NyAxNDAuNzcxIEMgMTE0Ljg4MyAxNDAuNzcxIDEyMC42OTcgMTM4Ljk0MSAxMjUuNTk0IDEzNS44MDIgQyAxMjUuOTU2IDEzNi44MTMgMTI2LjUzNCAxMzcuNzY0IDEyNy4zNDMgMTM4LjU3MyBMIDIwNy4zNDIgMjE4LjU3MyBDIDIwNy43MTEgMjE4Ljk0MiAyMDguMTA5IDIxOS4yNjQgMjA4LjUyOCAyMTkuNTQgTCAyMDMuMjEyIDMwOS45MDggQyAyMDEuNzk0IDMxMC4xODIgMjAwLjQ0IDMxMC44NjkgMTk5LjM0MiAzMTEuOTY3IEwgOTUuMzQzIDQxNS45NjcgQyA5NC45NTQgNDE2LjM1NiA5NC42MiA0MTYuNzc5IDk0LjMzNSA0MTcuMjI0IEMgOTMuNjUxIDQxNy41NzUgOTIuOTc2IDQxNy45NDIgOTIuMzIyIDQxOC4zNCBRIDg0LjYxNSA0MjQuMTgyIDgxLjcxNiA0MjguOTQ2IEMgNzguODE3IDQzMy43MSA3Ny4xNDcgNDM5LjI5OSA3Ny4xNDcgNDQ1LjI3MSBDIDc3LjE0NyA0NjIuNjQgOTEuMjc4IDQ3Ni43NzEgMTA4LjY0NyA0NzYuNzcxIEMgMTE0LjYxOSA0NzYuNzcxIDEyMC4yMDggNDc1LjEgMTI0Ljk3MiA0NzIuMjAyIEMgMTI5LjczNiA0NjkuMzA0IDEzMi42NzggNDY2LjM2IDEzNS41NzcgNDYxLjU5NiBDIDEzOC40NzYgNDU2LjgzMiAxNDAuMTQ3IDQ1MS4yNDMgMTQwLjE0NyA0NDUuMjcxIEMgMTQwLjE0NyA0NDMuOTQzIDE0MC4wNTUgNDQyLjYzNyAxMzkuODk1IDQ0MS4zNTIgTCAyMTQuOTk3IDM4OC43OCBDIDIxNy4wNSAzOTEuNjc3IDMzNi4yNDIgMzkxLjY3OCAzMzguMjk1IDM4OC43OCBMIDQxMy4zOTggNDQxLjM1MiBDIDQxMy4yMzggNDQyLjYzNyA0MTMuMTQ2IDQ0My45NDMgNDEzLjE0NiA0NDUuMjcxIEMgNDEzLjE0NiA0NTEuMjQzIDQxNC44MTcgNDU2LjgzMiA0MTcuNzE1IDQ2MS41OTYgQyA0MjAuNjEzIDQ2Ni4zNiA0MjMuNTU3IDQ2OS4zMDQgNDI4LjMyMSA0NzIuMjAyIEMgNDMzLjA4NSA0NzUuMSA0MzguNjc0IDQ3Ni43NzEgNDQ0LjY0NiA0NzYuNzcxIEMgNDYyLjAxNSA0NzYuNzcxIDQ3Ni4xNDYgNDYyLjY0IDQ3Ni4xNDYgNDQ1LjI3MSBDIDQ3Ni4xNDYgNDM5LjI5OSA0NzQuNDc1IDQzMy43MSA0NzEuNTc3IDQyOC45NDYgQyA0NjguNjc5IDQyNC4xODIgNDU5LjY0MiA0MTcuNTc1IDQ1OC45NTggNDE3LjIyNCBDIDQ1OC42NzIgNDE2Ljc3OSA0NTguMzM5IDQxNi4zNTYgNDU3Ljk1IDQxNS45NjcgTCAzNTMuOTUgMzExLjk2NyBDIDM1Mi44NTIgMzEwLjg2OSAzNTEuNDk4IDMxMC4xODIgMzUwLjA4IDMwOS45MDggTCAzNDQuNzY0IDIxOS41NCBDIDM0NS4xODMgMjE5LjI2NCAzNDUuNTgxIDIxOC45NDIgMzQ1Ljk1IDIxOC41NzMgTCA0MjUuOTUgMTM4LjU3MyBDIDQyNi43NiAxMzcuNzYzIDQyNy4zMzcgMTM2LjgxMiA0MjcuNjk5IDEzNS44MDIgQyA0MzIuNTk2IDEzOC45NDEgNDM4LjQwOSAxNDAuNzcxIDQ0NC42NDYgMTQwLjc3MSBDIDQ1MC42MTggMTQwLjc3MSA0NTYuMjA3IDEzOS4xIDQ2MC45NzEgMTM2LjIwMiBDIDQ2NS43MzUgMTMzLjMwNCA0NjguNjc5IDEzMC4zNiA0NzEuNTc3IDEyNS41OTYgQyA0NzQuNDc1IDEyMC44MzIgNDc2LjE0NiAxMTUuMjQzIDQ3Ni4xNDYgMTA5LjI3MSBDIDQ3Ni4xNDYgOTEuOTAzIDQ2Mi4wMTUgNzcuNzcyIDQ0NC42NDYgNzcuNzcyIEMgNDM4LjY3NCA3Ny43NzIgNDMzLjA4NSA3OS40NDIgNDI4LjMyMSA4Mi4zNCBMIDQxNi4yMTUgOTEuNDQ2IEwgMzI0Ljc2NSAxNDAuNjg4IEMgMzE4LjQwMiAxMzYuMzI0IDMxMC43MTggMTMzLjc3MSAzMDIuNDczIDEzMy43NzEgTCAyNTAuODE5IDEzMy43NzEgQyAyNDIuNTc0IDEzMy43NzEgMjM0Ljg5IDEzNi4zMjQgMjI4LjUyNyAxNDAuNjg4IEwgMTM3LjA3OCA5MS40NDYgTCAxMjQuOTcyIDgyLjM0IEMgMTIwLjIwOCA3OS40NDIgMTE0LjYxOSA3Ny43NzIgMTA4LjY0NyA3Ny43NzIgQyA5MS4yNzggNzcuNzcyIDc3LjE0NyA5MS45MDMgNzcuMTQ3IDEwOS4yNzEgQyA3Ny4xNDcgMTE1LjI0MyA3OC44MTggMTIwLjgzMiA4MS43MTYgMTI1LjU5NSBDIDg0LjYxNCAxMzAuMzU4IDg3LjU1OCAxMzMuMzA0IDkyLjMyMiAxMzYuMjAyIEwgOTIuMzIyIDEzNi4yMDIgTCA5Mi4zMjIgMTM2LjIwMiBMIDkyLjMyMiAxMzYuMjAyIEwgOTIuMzIyIDEzNi4yMDIgTCA5Mi4zMjIgMTM2LjIwMiBMIDkyLjMyMiAxMzYuMjAyIEwgOTIuMzIyIDEzNi4yMDIgTCA5Mi4zMjIgMTM2LjIwMiBaICBNIDQ0NC42NDYgNDYxLjc3MSBDIDQzNS41NDggNDYxLjc3MSA0MjguMTQ2IDQ1NC4zNjkgNDI4LjE0NiA0NDUuMjcxIEMgNDI4LjE0NiA0MzYuMTcyIDQzNS41NDggNDI4Ljc3MSA0NDQuNjQ2IDQyOC43NzEgQyA0NTMuNzQ0IDQyOC43NzEgNDYxLjE0NiA0MzYuMTcyIDQ2MS4xNDYgNDQ1LjI3MSBDIDQ2MS4xNDYgNDU0LjM2OSA0NTMuNzQ0IDQ2MS43NzEgNDQ0LjY0NiA0NjEuNzcxIFogXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiIE0gMjU5LjQ1OCAzMzQuMjM1IEwgMjU5LjQ1OCAzMzcuMjExIEwgMjU0LjUxNCAzMzcuMjExIEwgMjU0LjUxNCAzNTAuNzk1IEwgMjUwLjg0MiAzNTAuNzk1IEwgMjUwLjg0MiAzMzcuMjExIEwgMjQ1Ljg5OCAzMzcuMjExIEwgMjQ1Ljg5OCAzMzQuMjM1IEwgMjU5LjQ1OCAzMzQuMjM1IFogIE0gMjY2LjIyNiAzNDcuOTM5IEwgMjcyLjU4NiAzNDcuOTM5IEwgMjcyLjc1NCAzNTAuNjI3IEwgMjcyLjc1NCAzNTAuNjI3IFEgMjcwLjQ5OCAzNTAuODY3IDI2NS4wNzQgMzUwLjg2NyBMIDI2NS4wNzQgMzUwLjg2NyBMIDI2NS4wNzQgMzUwLjg2NyBRIDI2My40MTggMzUwLjg2NyAyNjIuNDM0IDM0OS45NjcgTCAyNjIuNDM0IDM0OS45NjcgTCAyNjIuNDM0IDM0OS45NjcgUSAyNjEuNDUgMzQ5LjA2NyAyNjEuNDI2IDM0Ny41MzEgTCAyNjEuNDI2IDM0Ny41MzEgTCAyNjEuNDI2IDMzNy40OTkgTCAyNjEuNDI2IDMzNy40OTkgUSAyNjEuNDUgMzM1Ljk2MyAyNjIuNDM0IDMzNS4wNjMgTCAyNjIuNDM0IDMzNS4wNjMgTCAyNjIuNDM0IDMzNS4wNjMgUSAyNjMuNDE4IDMzNC4xNjMgMjY1LjA3NCAzMzQuMTYzIEwgMjY1LjA3NCAzMzQuMTYzIEwgMjY1LjA3NCAzMzQuMTYzIFEgMjcwLjQ5OCAzMzQuMTYzIDI3Mi43NTQgMzM0LjQwMyBMIDI3Mi43NTQgMzM0LjQwMyBMIDI3Mi41ODYgMzM3LjExNSBMIDI2Ni4yMjYgMzM3LjExNSBMIDI2Ni4yMjYgMzM3LjExNSBRIDI2NS42MjYgMzM3LjExNSAyNjUuMzYyIDMzNy40MDMgTCAyNjUuMzYyIDMzNy40MDMgTCAyNjUuMzYyIDMzNy40MDMgUSAyNjUuMDk4IDMzNy42OTEgMjY1LjA5OCAzMzguMzM5IEwgMjY1LjA5OCAzMzguMzM5IEwgMjY1LjA5OCAzNDAuODU5IEwgMjcxLjY5OCAzNDAuODU5IEwgMjcxLjY5OCAzNDMuNDk5IEwgMjY1LjA5OCAzNDMuNDk5IEwgMjY1LjA5OCAzNDYuNjkxIEwgMjY1LjA5OCAzNDYuNjkxIFEgMjY1LjA5OCAzNDcuMzYzIDI2NS4zNjIgMzQ3LjY1MSBMIDI2NS4zNjIgMzQ3LjY1MSBMIDI2NS4zNjIgMzQ3LjY1MSBRIDI2NS42MjYgMzQ3LjkzOSAyNjYuMjI2IDM0Ny45MzkgTCAyNjYuMjI2IDM0Ny45MzkgWiAgTSAyNzUuMjAyIDMzMy45OTUgTCAyNzguNzMgMzMzLjk5NSBMIDI3OC43MyAzNDYuOTMxIEwgMjc4LjczIDM0Ni45MzEgUSAyNzguNzMgMzQ4LjEzMSAyODAuMDc0IDM0OC4xMzEgTCAyODAuMDc0IDM0OC4xMzEgTCAyODEuMDM0IDM0OC4xMzEgTCAyODEuNDQyIDM1MC42MDMgTCAyODEuNDQyIDM1MC42MDMgUSAyODAuNTMgMzUxLjA4MyAyNzguNjEgMzUxLjA4MyBMIDI3OC42MSAzNTEuMDgzIEwgMjc4LjYxIDM1MS4wODMgUSAyNzcuMDI2IDM1MS4wODMgMjc2LjExNCAzNTAuMjMxIEwgMjc2LjExNCAzNTAuMjMxIEwgMjc2LjExNCAzNTAuMjMxIFEgMjc1LjIwMiAzNDkuMzc5IDI3NS4yMDIgMzQ3LjgxOSBMIDI3NS4yMDIgMzQ3LjgxOSBMIDI3NS4yMDIgMzMzLjk5NSBaICBNIDI4My4wNSAzMzMuOTk1IEwgMjg2LjU3OCAzMzMuOTk1IEwgMjg2LjU3OCAzNDYuOTMxIEwgMjg2LjU3OCAzNDYuOTMxIFEgMjg2LjU3OCAzNDguMTMxIDI4Ny45MjIgMzQ4LjEzMSBMIDI4Ny45MjIgMzQ4LjEzMSBMIDI4OC44ODIgMzQ4LjEzMSBMIDI4OS4yOSAzNTAuNjAzIEwgMjg5LjI5IDM1MC42MDMgUSAyODguMzc4IDM1MS4wODMgMjg2LjQ1OCAzNTEuMDgzIEwgMjg2LjQ1OCAzNTEuMDgzIEwgMjg2LjQ1OCAzNTEuMDgzIFEgMjg0Ljg3NCAzNTEuMDgzIDI4My45NjIgMzUwLjIzMSBMIDI4My45NjIgMzUwLjIzMSBMIDI4My45NjIgMzUwLjIzMSBRIDI4My4wNSAzNDkuMzc5IDI4My4wNSAzNDcuODE5IEwgMjgzLjA1IDM0Ny44MTkgTCAyODMuMDUgMzMzLjk5NSBaICBNIDI5Mi4wODYgMzM1Ljc1OSBMIDI5Mi4wODYgMzM1Ljc1OSBMIDI5Mi4wODYgMzM1Ljc1OSBRIDI5My42MzQgMzMzLjkyMyAyOTcuNjE4IDMzMy45MjMgTCAyOTcuNjE4IDMzMy45MjMgTCAyOTcuNjE4IDMzMy45MjMgUSAzMDEuNjAyIDMzMy45MjMgMzAzLjE2MiAzMzUuNzU5IEwgMzAzLjE2MiAzMzUuNzU5IEwgMzAzLjE2MiAzMzUuNzU5IFEgMzA0LjcyMiAzMzcuNTk1IDMwNC43MjIgMzQyLjUxNSBMIDMwNC43MjIgMzQyLjUxNSBMIDMwNC43MjIgMzQyLjUxNSBRIDMwNC43MjIgMzQ3LjQzNSAzMDMuMTYyIDM0OS4yNzEgTCAzMDMuMTYyIDM0OS4yNzEgTCAzMDMuMTYyIDM0OS4yNzEgUSAzMDEuNjAyIDM1MS4xMDcgMjk3LjYxOCAzNTEuMTA3IEwgMjk3LjYxOCAzNTEuMTA3IEwgMjk3LjYxOCAzNTEuMTA3IFEgMjkzLjYzNCAzNTEuMTA3IDI5Mi4wODYgMzQ5LjI3MSBMIDI5Mi4wODYgMzQ5LjI3MSBMIDI5Mi4wODYgMzQ5LjI3MSBRIDI5MC41MzggMzQ3LjQzNSAyOTAuNTM4IDM0Mi41MTUgTCAyOTAuNTM4IDM0Mi41MTUgTCAyOTAuNTM4IDM0Mi41MTUgUSAyOTAuNTM4IDMzNy41OTUgMjkyLjA4NiAzMzUuNzU5IFogIE0gMzAwLjE3NCAzMzguMDUxIEwgMzAwLjE3NCAzMzguMDUxIEwgMzAwLjE3NCAzMzguMDUxIFEgMjk5LjQ5IDMzNi44NzUgMjk3LjYxOCAzMzYuODc1IEwgMjk3LjYxOCAzMzYuODc1IEwgMjk3LjYxOCAzMzYuODc1IFEgMjk1Ljc0NiAzMzYuODc1IDI5NS4wNjIgMzM4LjA1MSBMIDI5NS4wNjIgMzM4LjA1MSBMIDI5NS4wNjIgMzM4LjA1MSBRIDI5NC4zNzggMzM5LjIyNyAyOTQuMzc4IDM0Mi41MTUgTCAyOTQuMzc4IDM0Mi41MTUgTCAyOTQuMzc4IDM0Mi41MTUgUSAyOTQuMzc4IDM0NS44MDMgMjk1LjA2MiAzNDYuOTc5IEwgMjk1LjA2MiAzNDYuOTc5IEwgMjk1LjA2MiAzNDYuOTc5IFEgMjk1Ljc0NiAzNDguMTU1IDI5Ny42MTggMzQ4LjE1NSBMIDI5Ny42MTggMzQ4LjE1NSBMIDI5Ny42MTggMzQ4LjE1NSBRIDI5OS40OSAzNDguMTU1IDMwMC4xNzQgMzQ2Ljk3OSBMIDMwMC4xNzQgMzQ2Ljk3OSBMIDMwMC4xNzQgMzQ2Ljk3OSBRIDMwMC44NTggMzQ1LjgwMyAzMDAuODU4IDM0Mi41MTUgTCAzMDAuODU4IDM0Mi41MTUgTCAzMDAuODU4IDM0Mi41MTUgUSAzMDAuODU4IDMzOS4yMjcgMzAwLjE3NCAzMzguMDUxIFogXCJcbiAgICAgIC8+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJwcm9wZWxsZXItZ3JvdXBcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5wcm9wZWxsZXJ9ICR7c3R5bGVzLnByb3BlbGxlckNXfWB9XG4gICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uOiBiUmlnaHRSb3RvckFuaW1hdGlvbiB9fVxuICAgICAgICAgIGQ9XCIgTSA0NjEuNTYzIDQxOC43NyBMIDQ2My45OTIgNDE2LjM0IFEgNDY1LjQ5NSA0MDcuMTE2IDQ2Ni40NjEgNDAwLjM5NSBDIDQ2Ny40MjYgMzkzLjY3NSA0NjkuMzYzIDM4OC4wODcgNDc0LjczMSAzODMuMjg0IFEgNTMzLjg2MiAzNDEuNTE0IDUzOC4xOTYgMzM4Ljg1OSBDIDU0Mi41MjkgMzM2LjIwMyA1NDguMzQ1IDMzNC4yOTkgNTUxLjQ5MiAzMzguMjkgQyA1NTQuNjM5IDM0Mi4yODIgNTUzLjQ4MSAzNDYuMDIgNTQ5LjQxOSAzNTAuMDgyIEwgNDcxLjE0NyA0MjguMzU0IEwgNDYxLjU2MyA0MTguNzcgWiAgTSA0MjcuNzI5IDQ3MS43NzIgTCA0MjUuMjk5IDQ3NC4yMDIgUSA0MjMuNzk3IDQ4My40MjYgNDIyLjgzMSA0OTAuMTQ2IEMgNDIxLjg2NiA0OTYuODY3IDQxOS45MjkgNTAyLjQ1NCA0MTQuNTYxIDUwNy4yNTcgUSAzNTUuNDMgNTQ5LjAyOCAzNTEuMDk2IDU1MS42ODMgQyAzNDYuNzYzIDU1NC4zMzggMzQwLjk0NyA1NTYuMjQzIDMzNy44IDU1Mi4yNTEgQyAzMzQuNjUzIDU0OC4yNiAzMzUuODExIDU0NC41MjIgMzM5Ljg3MyA1NDAuNDYgTCA0MTguMTQ1IDQ2Mi4xODcgTCA0MjcuNzI5IDQ3MS43NzIgWiBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnByb3BlbGxlcn0gJHtzdHlsZXMucHJvcGVsbGVyQ0NXfWB9XG4gICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uOiBmUmlnaHRSb3RvckFuaW1hdGlvbiB9fVxuICAgICAgICAgIGQ9XCIgTSA0NjEuNTYzIDEzNS43NzMgTCA0NjMuOTkyIDEzOC4yMDMgUSA0NjUuNDk1IDE0Ny40MjYgNDY2LjQ2MSAxNTQuMTQ3IEMgNDY3LjQyNiAxNjAuODY4IDQ2OS4zNjMgMTY2LjQ1NSA0NzQuNzMxIDE3MS4yNTggUSA1MzMuODYyIDIxMy4wMjggNTM4LjE5NiAyMTUuNjg0IEMgNTQyLjUyOSAyMTguMzM5IDU0OC4zNDUgMjIwLjI0NCA1NTEuNDkyIDIxNi4yNTIgQyA1NTQuNjM5IDIxMi4yNiA1NTMuNDgxIDIwOC41MjMgNTQ5LjQxOSAyMDQuNDYgTCA0NzEuMTQ3IDEyNi4xODggTCA0NjEuNTYzIDEzNS43NzMgWiAgTSA0MjcuNzI5IDgyLjc3IEwgNDI1LjI5OSA4MC4zNCBRIDQyMy43OTcgNzEuMTE3IDQyMi44MzEgNjQuMzk2IEMgNDIxLjg2NiA1Ny42NzUgNDE5LjkyOSA1Mi4wODggNDE0LjU2MSA0Ny4yODUgUSAzNTUuNDMgNS41MTUgMzUxLjA5NiAyLjg1OSBDIDM0Ni43NjMgMC4yMDQgMzQwLjk0NyAtMS43MDEgMzM3LjggMi4yOTEgQyAzMzQuNjUzIDYuMjgyIDMzNS44MTEgMTAuMDIgMzM5Ljg3MyAxNC4wODIgTCA0MTguMTQ1IDkyLjM1NSBMIDQyNy43MjkgODIuNzcgWiBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnByb3BlbGxlcn0gJHtzdHlsZXMucHJvcGVsbGVyQ0NXfWB9XG4gICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uOiBiTGVmdFJvdG9yQW5pbWF0aW9uIH19XG4gICAgICAgICAgZD1cIiBNIDEyNS41NjMgNDcxLjc3MiBMIDEyNy45OTMgNDc0LjIwMiBRIDEyOS40OTYgNDgzLjQyNiAxMzAuNDYxIDQ5MC4xNDYgQyAxMzEuNDI3IDQ5Ni44NjcgMTMzLjM2MyA1MDIuNDU0IDEzOC43MzEgNTA3LjI1NyBRIDE5Ny44NjMgNTQ5LjAyOCAyMDIuMTk2IDU1MS42ODMgQyAyMDYuNTMgNTU0LjMzOCAyMTIuMzQ1IDU1Ni4yNDMgMjE1LjQ5MiA1NTIuMjUxIEMgMjE4LjYzOSA1NDguMjYgMjE3LjQ4MiA1NDQuNTIyIDIxMy40MTkgNTQwLjQ2IEwgMTM1LjE0OCA0NjIuMTg3IEwgMTI1LjU2MyA0NzEuNzcyIFogIE0gOTEuNzMgNDE4Ljc3IEwgODkuMyA0MTYuMzQgUSA4Ny43OTcgNDA3LjExNiA4Ni44MzIgNDAwLjM5NSBDIDg1Ljg2NiAzOTMuNjc1IDgzLjkzIDM4OC4wODcgNzguNTYyIDM4My4yODQgUSAxOS40MzEgMzQxLjUxNCAxNS4wOTcgMzM4Ljg1OSBDIDEwLjc2MyAzMzYuMjAzIDQuOTQ4IDMzNC4yOTkgMS44MDEgMzM4LjI5IEMgLTEuMzQ2IDM0Mi4yODIgLTAuMTg5IDM0Ni4wMiAzLjg3NCAzNTAuMDgyIEwgODIuMTQ2IDQyOC4zNTQgTCA5MS43MyA0MTguNzcgWiBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnByb3BlbGxlcn0gJHtzdHlsZXMucHJvcGVsbGVyQ1d9YH1cbiAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb246IGZMZWZ0Um90b3JBbmltYXRpb24gfX1cbiAgICAgICAgICBkPVwiIE0gMTI1LjU2MyA4Mi43NyBMIDEyNy45OTMgODAuMzQgUSAxMjkuNDk2IDcxLjExNyAxMzAuNDYxIDY0LjM5NiBDIDEzMS40MjcgNTcuNjc1IDEzMy4zNjMgNTIuMDg4IDEzOC43MzEgNDcuMjg1IFEgMTk3Ljg2MyA1LjUxNSAyMDIuMTk2IDIuODU5IEMgMjA2LjUzIDAuMjA0IDIxMi4zNDUgLTEuNzAxIDIxNS40OTIgMi4yOTEgQyAyMTguNjM5IDYuMjgyIDIxNy40ODIgMTAuMDIgMjEzLjQxOSAxNC4wODMgTCAxMzUuMTQ3IDkyLjM1NSBMIDEyNS41NjMgODIuNzcgWiAgTSA5MS43MyAxMzUuNzczIEwgODkuMyAxMzguMjAzIFEgODcuNzk3IDE0Ny40MjYgODYuODMyIDE1NC4xNDcgQyA4NS44NjYgMTYwLjg2OCA4My45MyAxNjYuNDU1IDc4LjU2MiAxNzEuMjU4IFEgMTkuNDMxIDIxMy4wMjggMTUuMDk3IDIxNS42ODQgQyAxMC43NjMgMjE4LjMzOSA0Ljk0OCAyMjAuMjQzIDEuODAxIDIxNi4yNTIgQyAtMS4zNDYgMjEyLjI2IC0wLjE4OSAyMDguNTIzIDMuODc0IDIwNC40NiBMIDgyLjE0NiAxMjYuMTg4IEwgOTEuNzMgMTM1Ljc3MyBaIFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZHJvbmVUb3BJdGVtOiBDYW52YXNFbGVtZW50SXRlbTxhbnksIGFueT4gPSB7XG4gIGlkOiAnZHJvbmVUb3AnLFxuICBuYW1lOiAnRHJvbmUgVG9wJyxcbiAgZGVzY3JpcHRpb246ICdEcm9uZSB0b3AnLFxuXG4gIGRpc3BsYXk6IERyb25lVG9wRGlzcGxheSxcblxuICBkZWZhdWx0U2l6ZToge1xuICAgIHdpZHRoOiAxMDAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gIH0sXG5cbiAgZ2V0TmV3T3B0aW9uczogKG9wdGlvbnMpID0+ICh7XG4gICAgLi4ub3B0aW9ucyxcbiAgfSksXG5cbiAgLy8gQ2FsbGVkIHdoZW4gZGF0YSBjaGFuZ2VzXG4gIHByZXBhcmVEYXRhOiAoY3R4OiBEaW1lbnNpb25Db250ZXh0LCBjZmc6IERyb25lVG9wQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgZGF0YTogRHJvbmVUb3BEYXRhID0ge1xuICAgICAgYlJpZ2h0Um90b3JSUE06IGNmZz8uYlJpZ2h0Um90b3JSUE0gPyBjdHguZ2V0U2NhbGFyKGNmZy5iUmlnaHRSb3RvclJQTSkudmFsdWUoKSA6IDAsXG4gICAgICBiTGVmdFJvdG9yUlBNOiBjZmc/LmJMZWZ0Um90b3JSUE0gPyBjdHguZ2V0U2NhbGFyKGNmZy5iTGVmdFJvdG9yUlBNKS52YWx1ZSgpIDogMCxcbiAgICAgIGZSaWdodFJvdG9yUlBNOiBjZmc/LmZSaWdodFJvdG9yUlBNID8gY3R4LmdldFNjYWxhcihjZmcuZlJpZ2h0Um90b3JSUE0pLnZhbHVlKCkgOiAwLFxuICAgICAgZkxlZnRSb3RvclJQTTogY2ZnPy5mTGVmdFJvdG9yUlBNID8gY3R4LmdldFNjYWxhcihjZmcuZkxlZnRSb3RvclJQTSkudmFsdWUoKSA6IDAsXG4gICAgICB5YXdBbmdsZTogY2ZnPy55YXdBbmdsZSA/IGN0eC5nZXRTY2FsYXIoY2ZnLnlhd0FuZ2xlKS52YWx1ZSgpIDogMCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG5cbiAgcmVnaXN0ZXJPcHRpb25zVUk6IChidWlsZGVyKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBbJ0Ryb25lIFRvcCddO1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICd5YXdBbmdsZScsXG4gICAgICAgIHBhdGg6ICdjb25maWcueWF3QW5nbGUnLFxuICAgICAgICBuYW1lOiAnWWF3IEFuZ2xlJyxcbiAgICAgICAgZWRpdG9yOiBTY2FsYXJEaW1lbnNpb25FZGl0b3IsXG4gICAgICB9KVxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2ZSaWdodFJvdG9yUlBNJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5mUmlnaHRSb3RvclJQTScsXG4gICAgICAgIG5hbWU6ICdGcm9udCBSaWdodCBSb3RvciBSUE0nLFxuICAgICAgICBlZGl0b3I6IFNjYWxhckRpbWVuc2lvbkVkaXRvcixcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnZkxlZnRSb3RvclJQTScsXG4gICAgICAgIHBhdGg6ICdjb25maWcuZkxlZnRSb3RvclJQTScsXG4gICAgICAgIG5hbWU6ICdGcm9udCBMZWZ0IFJvdG9yIFJQTScsXG4gICAgICAgIGVkaXRvcjogU2NhbGFyRGltZW5zaW9uRWRpdG9yLFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdiUmlnaHRSb3RvclJQTScsXG4gICAgICAgIHBhdGg6ICdjb25maWcuYlJpZ2h0Um90b3JSUE0nLFxuICAgICAgICBuYW1lOiAnQmFjayBSaWdodCBSb3RvciBSUE0nLFxuICAgICAgICBlZGl0b3I6IFNjYWxhckRpbWVuc2lvbkVkaXRvcixcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnYkxlZnRSb3RvclJQTScsXG4gICAgICAgIHBhdGg6ICdjb25maWcuYkxlZnRSb3RvclJQTScsXG4gICAgICAgIG5hbWU6ICdCYWNrIExlZnQgUm90b3IgUlBNJyxcbiAgICAgICAgZWRpdG9yOiBTY2FsYXJEaW1lbnNpb25FZGl0b3IsXG4gICAgICB9KTtcbiAgfSxcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgcHJvcGVsbGVyOiBjc3NgXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgcHJvcGVsbGVyQ1c6IGNzc2BcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gIGAsXG4gIHByb3BlbGxlckNDVzogY3NzYFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5pbXBvcnQge1xuICBDb2xvckRpbWVuc2lvbkNvbmZpZyxcbiAgUmVzb3VyY2VEaW1lbnNpb25Db25maWcsXG4gIFJlc291cmNlRGltZW5zaW9uTW9kZSxcbiAgZ2V0UHVibGljT3JBYnNvbHV0ZVVybCxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgQ29sb3JEaW1lbnNpb25FZGl0b3IsIFJlc291cmNlRGltZW5zaW9uRWRpdG9yIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvZWRpdG9ycyc7XG5pbXBvcnQgU1ZHIGZyb20gJ3JlYWN0LWlubGluZXN2Zyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTGluZUNvbmZpZyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9jb250ZXh0JztcbmltcG9ydCB7IEFQSUVkaXRvciwgQVBJRWRpdG9yQ29uZmlnLCBjYWxsQXBpIH0gZnJvbSAnYXBwL3BsdWdpbnMvcGFuZWwvY2FudmFzL2VkaXRvci9BUElFZGl0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Db25maWcge1xuICBwYXRoPzogUmVzb3VyY2VEaW1lbnNpb25Db25maWc7XG4gIGZpbGw/OiBDb2xvckRpbWVuc2lvbkNvbmZpZztcbiAgc3Ryb2tlPzogTGluZUNvbmZpZztcbiAgYXBpPzogQVBJRWRpdG9yQ29uZmlnO1xufVxuXG5pbnRlcmZhY2UgSWNvbkRhdGEge1xuICBwYXRoOiBzdHJpbmc7XG4gIGZpbGw6IHN0cmluZztcbiAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG4gIHN0cm9rZT86IG51bWJlcjtcbiAgYXBpPzogQVBJRWRpdG9yQ29uZmlnO1xufVxuXG4vLyBXaGVuIGEgc3Rva2UgaXMgZGVmaW5lZCwgd2Ugd2FudCB0aGUgcGF0aCB0byBiZSBpbiBwYWdlIHVuaXRzXG5jb25zdCBzdmdTdHJva2VQYXRoQ2xhc3MgPSBjc3NgXG4gIHBhdGgge1xuICAgIHZlY3Rvci1lZmZlY3Q6IG5vbi1zY2FsaW5nLXN0cm9rZTtcbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIEljb25EaXNwbGF5KHByb3BzOiBDYW52YXNFbGVtZW50UHJvcHMpIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkYXRhIH0gPSBwcm9wcztcbiAgaWYgKCFkYXRhPy5wYXRoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChkYXRhPy5hcGkpIHtcbiAgICAgIGNhbGxBcGkoZGF0YS5hcGkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdmdTdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcbiAgICBmaWxsOiBkYXRhPy5maWxsLFxuICAgIHN0cm9rZTogZGF0YT8uc3Ryb2tlQ29sb3IsXG4gICAgc3Ryb2tlV2lkdGg6IGRhdGE/LnN0cm9rZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTVkdcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzcmM9e2RhdGEucGF0aH1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgc3R5bGU9e3N2Z1N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtzdmdTdHlsZS5zdHJva2VXaWR0aCA/IHN2Z1N0cm9rZVBhdGhDbGFzcyA6IHVuZGVmaW5lZH1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgaWNvbkl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPEljb25Db25maWcsIEljb25EYXRhPiA9IHtcbiAgaWQ6ICdpY29uJyxcbiAgbmFtZTogJ0ljb24nLFxuICBkZXNjcmlwdGlvbjogJ1NWRyBJY29uIGRpc3BsYXknLFxuXG4gIGRpc3BsYXk6IEljb25EaXNwbGF5LFxuXG4gIGdldE5ld09wdGlvbnM6IChvcHRpb25zKSA9PiAoe1xuICAgIHBsYWNlbWVudDoge1xuICAgICAgd2lkdGg6IDUwLFxuICAgICAgaGVpZ2h0OiA1MCxcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gICAgY29uZmlnOiB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIG1vZGU6IFJlc291cmNlRGltZW5zaW9uTW9kZS5GaXhlZCxcbiAgICAgICAgZml4ZWQ6ICdpbWcvaWNvbnMvdW5pY29ucy9xdWVzdGlvbi1jaXJjbGUuc3ZnJyxcbiAgICAgIH0sXG4gICAgICBmaWxsOiB7IGZpeGVkOiAnI0ZGRjg5OScgfSxcbiAgICB9LFxuICB9KSxcblxuICAvLyBDYWxsZWQgd2hlbiBkYXRhIGNoYW5nZXNcbiAgcHJlcGFyZURhdGE6IChjdHg6IERpbWVuc2lvbkNvbnRleHQsIGNmZzogSWNvbkNvbmZpZykgPT4ge1xuICAgIGxldCBwYXRoOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGNmZy5wYXRoKSB7XG4gICAgICBwYXRoID0gY3R4LmdldFJlc291cmNlKGNmZy5wYXRoKS52YWx1ZSgpO1xuICAgIH1cbiAgICBpZiAoIXBhdGggfHwgIWlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICBwYXRoID0gZ2V0UHVibGljT3JBYnNvbHV0ZVVybCgnaW1nL2ljb25zL3VuaWNvbnMvcXVlc3Rpb24tY2lyY2xlLnN2ZycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGE6IEljb25EYXRhID0ge1xuICAgICAgcGF0aCxcbiAgICAgIGZpbGw6IGNmZy5maWxsID8gY3R4LmdldENvbG9yKGNmZy5maWxsKS52YWx1ZSgpIDogJyNDQ0MnLFxuICAgICAgYXBpOiBjZmc/LmFwaSA/PyB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIGlmIChjZmcuc3Ryb2tlPy53aWR0aCAmJiBjZmcuc3Ryb2tlLmNvbG9yKSB7XG4gICAgICBpZiAoY2ZnLnN0cm9rZS53aWR0aCA+IDApIHtcbiAgICAgICAgZGF0YS5zdHJva2UgPSBjZmcuc3Ryb2tlPy53aWR0aDtcbiAgICAgICAgZGF0YS5zdHJva2VDb2xvciA9IGN0eC5nZXRDb2xvcihjZmcuc3Ryb2tlLmNvbG9yKS52YWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcblxuICAvLyBIZWF0bWFwIG92ZXJsYXkgb3B0aW9uc1xuICByZWdpc3Rlck9wdGlvbnNVSTogKGJ1aWxkZXIpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IFsnSWNvbiddO1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdpY29uU2VsZWN0b3InLFxuICAgICAgICBwYXRoOiAnY29uZmlnLnBhdGgnLFxuICAgICAgICBuYW1lOiAnU1ZHIFBhdGgnLFxuICAgICAgICBlZGl0b3I6IFJlc291cmNlRGltZW5zaW9uRWRpdG9yLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHJlc291cmNlVHlwZTogJ2ljb24nLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdjb25maWcuZmlsbCcsXG4gICAgICAgIHBhdGg6ICdjb25maWcuZmlsbCcsXG4gICAgICAgIG5hbWU6ICdGaWxsIGNvbG9yJyxcbiAgICAgICAgZWRpdG9yOiBDb2xvckRpbWVuc2lvbkVkaXRvcixcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgICAgICAvLyBDb25maWd1cmVkIHZhbHVlc1xuICAgICAgICAgIGZpeGVkOiAnZ3JleScsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLmFkZFNsaWRlcklucHV0KHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHBhdGg6ICdjb25maWcuc3Ryb2tlLndpZHRoJyxcbiAgICAgICAgbmFtZTogJ1N0cm9rZScsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnY29uZmlnLnN0cm9rZS5jb2xvcicsXG4gICAgICAgIHBhdGg6ICdjb25maWcuc3Ryb2tlLmNvbG9yJyxcbiAgICAgICAgbmFtZTogJ1N0cm9rZSBjb2xvcicsXG4gICAgICAgIGVkaXRvcjogQ29sb3JEaW1lbnNpb25FZGl0b3IsXG4gICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICAgICAgLy8gQ29uZmlndXJlZCB2YWx1ZXNcbiAgICAgICAgICBmaXhlZDogJ2dyZXknLFxuICAgICAgICB9LFxuICAgICAgICBzaG93SWY6IChjZmcpID0+IEJvb2xlYW4oY2ZnPy5jb25maWc/LnN0cm9rZT8ud2lkdGgpLFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdhcGlTZWxlY3RvcicsXG4gICAgICAgIHBhdGg6ICdjb25maWcuYXBpJyxcbiAgICAgICAgbmFtZTogJ0FQSScsXG4gICAgICAgIGVkaXRvcjogQVBJRWRpdG9yLFxuICAgICAgfSk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhbnZhc0VsZW1lbnRJdGVtLCBDYW52YXNFbGVtZW50UHJvcHMgfSBmcm9tICcuLi9lbGVtZW50JztcblxuaW50ZXJmYWNlIE5vdEZvdW5kQ29uZmlnIHtcbiAgb3JpZz86IGFueTtcbn1cblxuY2xhc3MgTm90Rm91bmREaXNwbGF5IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxDYW52YXNFbGVtZW50UHJvcHM8Tm90Rm91bmRDb25maWc+PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPk5PVCBGT1VORDo8L2gzPlxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90Rm91bmRJdGVtOiBDYW52YXNFbGVtZW50SXRlbTxOb3RGb3VuZENvbmZpZz4gPSB7XG4gIGlkOiAnbm90LWZvdW5kJyxcbiAgbmFtZTogJ05vdCBmb3VuZCcsXG4gIGRlc2NyaXB0aW9uOiAnRGlzcGxheSB3aGVuIGVsZW1lbnQgdHlwZSBpcyBub3QgZm91bmQgaW4gdGhlIHJlZ2lzdHJ5JyxcblxuICBkaXNwbGF5OiBOb3RGb3VuZERpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6ICgpID0+ICh7XG4gICAgY29uZmlnOiB7fSxcbiAgfSksXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2xvckRpbWVuc2lvbkVkaXRvciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2VkaXRvcnMvQ29sb3JEaW1lbnNpb25FZGl0b3InO1xuaW1wb3J0IHsgVGV4dERpbWVuc2lvbkVkaXRvciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2VkaXRvcnMvVGV4dERpbWVuc2lvbkVkaXRvcic7XG5pbXBvcnQgeyBDb2xvckRpbWVuc2lvbkNvbmZpZywgVGV4dERpbWVuc2lvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL3R5cGVzJztcblxuaW1wb3J0IHsgQ2FudmFzRWxlbWVudEl0ZW0sIENhbnZhc0VsZW1lbnRQcm9wcyB9IGZyb20gJy4uL2VsZW1lbnQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHN0eWxlc0ZhY3RvcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgRGltZW5zaW9uQ29udGV4dCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2NvbnRleHQnO1xuXG5leHBvcnQgZW51bSBBbGlnbiB7XG4gIExlZnQgPSAnbGVmdCcsXG4gIENlbnRlciA9ICdjZW50ZXInLFxuICBSaWdodCA9ICdyaWdodCcsXG59XG5cbmV4cG9ydCBlbnVtIFZBbGlnbiB7XG4gIFRvcCA9ICd0b3AnLFxuICBNaWRkbGUgPSAnbWlkZGxlJyxcbiAgQm90dG9tID0gJ2JvdHRvbScsXG59XG5cbmludGVyZmFjZSBUZXh0Qm94RGF0YSB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBzaXplPzogbnVtYmVyOyAvLyAwIG9yIG1pc3Npbmcgd2lsbCBcImF1dG8gc2l6ZVwiXG4gIGFsaWduOiBBbGlnbjtcbiAgdmFsaWduOiBWQWxpZ247XG59XG5cbmludGVyZmFjZSBUZXh0Qm94Q29uZmlnIHtcbiAgdGV4dD86IFRleHREaW1lbnNpb25Db25maWc7XG4gIGNvbG9yPzogQ29sb3JEaW1lbnNpb25Db25maWc7XG4gIHNpemU/OiBudW1iZXI7IC8vIDAgb3IgbWlzc2luZyB3aWxsIFwiYXV0byBzaXplXCJcbiAgYWxpZ246IEFsaWduO1xuICB2YWxpZ246IFZBbGlnbjtcbn1cblxuY2xhc3MgVGV4dEJveERpc3BsYXkgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PENhbnZhc0VsZW1lbnRQcm9wczxUZXh0Qm94Q29uZmlnLCBUZXh0Qm94RGF0YT4+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoY29uZmlnLnRoZW1lMiwgZGF0YSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+e2RhdGE/LnRleHR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgodGhlbWU6IEdyYWZhbmFUaGVtZTIsIGRhdGEpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIGAsXG4gIHNwYW46IGNzc2BcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiAke2RhdGEudmFsaWdufTtcbiAgICB0ZXh0LWFsaWduOiAke2RhdGEuYWxpZ259O1xuICAgIGZvbnQtc2l6ZTogJHtkYXRhPy5zaXplfXB4O1xuICAgIGNvbG9yOiAke2RhdGE/LmNvbG9yfTtcbiAgYCxcbn0pKTtcbmV4cG9ydCBjb25zdCB0ZXh0Qm94SXRlbTogQ2FudmFzRWxlbWVudEl0ZW08VGV4dEJveENvbmZpZywgVGV4dEJveERhdGE+ID0ge1xuICBpZDogJ3RleHQtYm94JyxcbiAgbmFtZTogJ1RleHQnLFxuICBkZXNjcmlwdGlvbjogJ1RleHQgYm94JyxcblxuICBkaXNwbGF5OiBUZXh0Qm94RGlzcGxheSxcblxuICBkZWZhdWx0U2l6ZToge1xuICAgIHdpZHRoOiAyNDAsXG4gICAgaGVpZ2h0OiAxNjAsXG4gIH0sXG5cbiAgZ2V0TmV3T3B0aW9uczogKG9wdGlvbnMpID0+ICh7XG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgY29sb3I6IHtcbiAgICAgICAgZml4ZWQ6ICdncmV5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAuLi5vcHRpb25zLFxuICAgIGNvbmZpZzoge1xuICAgICAgYWxpZ246IEFsaWduLkxlZnQsXG4gICAgICB2YWxpZ246IFZBbGlnbi5NaWRkbGUsXG4gICAgfSxcbiAgfSksXG5cbiAgLy8gQ2FsbGVkIHdoZW4gZGF0YSBjaGFuZ2VzXG4gIHByZXBhcmVEYXRhOiAoY3R4OiBEaW1lbnNpb25Db250ZXh0LCBjZmc6IFRleHRCb3hDb25maWcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBUZXh0Qm94RGF0YSA9IHtcbiAgICAgIHRleHQ6IGNmZy50ZXh0ID8gY3R4LmdldFRleHQoY2ZnLnRleHQpLnZhbHVlKCkgOiAnJyxcbiAgICAgIGFsaWduOiBjZmcuYWxpZ24gPz8gQWxpZ24uQ2VudGVyLFxuICAgICAgdmFsaWduOiBjZmcudmFsaWduID8/IFZBbGlnbi5NaWRkbGUsXG4gICAgICBzaXplOiBjZmcuc2l6ZSxcbiAgICB9O1xuXG4gICAgaWYgKGNmZy5jb2xvcikge1xuICAgICAgZGF0YS5jb2xvciA9IGN0eC5nZXRDb2xvcihjZmcuY29sb3IpLnZhbHVlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG5cbiAgLy8gSGVhdG1hcCBvdmVybGF5IG9wdGlvbnNcbiAgcmVnaXN0ZXJPcHRpb25zVUk6IChidWlsZGVyKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBbJ1RleHQgYm94J107XG4gICAgYnVpbGRlclxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ3RleHRTZWxlY3RvcicsXG4gICAgICAgIHBhdGg6ICdjb25maWcudGV4dCcsXG4gICAgICAgIG5hbWU6ICdUZXh0JyxcbiAgICAgICAgZWRpdG9yOiBUZXh0RGltZW5zaW9uRWRpdG9yLFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdjb25maWcuY29sb3InLFxuICAgICAgICBwYXRoOiAnY29uZmlnLmNvbG9yJyxcbiAgICAgICAgbmFtZTogJ1RleHQgY29sb3InLFxuICAgICAgICBlZGl0b3I6IENvbG9yRGltZW5zaW9uRWRpdG9yLFxuICAgICAgICBzZXR0aW5nczoge30sXG4gICAgICAgIGRlZmF1bHRWYWx1ZToge30sXG4gICAgICB9KVxuICAgICAgLmFkZFJhZGlvKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHBhdGg6ICdjb25maWcuYWxpZ24nLFxuICAgICAgICBuYW1lOiAnQWxpZ24gdGV4dCcsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogQWxpZ24uTGVmdCwgbGFiZWw6ICdMZWZ0JyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogQWxpZ24uQ2VudGVyLCBsYWJlbDogJ0NlbnRlcicgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IEFsaWduLlJpZ2h0LCBsYWJlbDogJ1JpZ2h0JyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogQWxpZ24uTGVmdCxcbiAgICAgIH0pXG4gICAgICAuYWRkUmFkaW8oe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy52YWxpZ24nLFxuICAgICAgICBuYW1lOiAnVmVydGljYWwgYWxpZ24nLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IFZBbGlnbi5Ub3AsIGxhYmVsOiAnVG9wJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogVkFsaWduLk1pZGRsZSwgbGFiZWw6ICdNaWRkbGUnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBWQWxpZ24uQm90dG9tLCBsYWJlbDogJ0JvdHRvbScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFZBbGlnbi5NaWRkbGUsXG4gICAgICB9KVxuICAgICAgLmFkZE51bWJlcklucHV0KHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHBhdGg6ICdjb25maWcuc2l6ZScsXG4gICAgICAgIG5hbWU6ICdUZXh0IHNpemUnLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQXV0bycsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU2NhbGFyRGltZW5zaW9uRWRpdG9yIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvZWRpdG9ycyc7XG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5pbXBvcnQgeyBEaW1lbnNpb25Db250ZXh0LCBTY2FsYXJEaW1lbnNpb25Db25maWcgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucyc7XG5cbmludGVyZmFjZSBXaW5kVHVyYmluZURhdGEge1xuICBycG0/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBXaW5kVHVyYmluZUNvbmZpZyB7XG4gIHJwbT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbn1cblxuY29uc3QgV2luZFR1cmJpbmVEaXNwbGF5OiBGQzxDYW52YXNFbGVtZW50UHJvcHM8V2luZFR1cmJpbmVDb25maWcsIFdpbmRUdXJiaW5lRGF0YT4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHdpbmRUdXJiaW5lQW5pbWF0aW9uID0gYHNwaW4gJHtkYXRhPy5ycG0gPyA2MCAvIE1hdGguYWJzKGRhdGEucnBtKSA6IDB9cyBsaW5lYXIgaW5maW5pdGVgO1xuXG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE4OS4zMjYgMjgzLjk4OVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICA8c3ltYm9sIGlkPVwiYmxhZGVcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwiI2U2ZTZlNlwiXG4gICAgICAgICAgaWQ9XCJibGFkZS1mcm9udFwiXG4gICAgICAgICAgZD1cIk0xNC42NDkxODc5LDEuODUwMTE2MDEgQzE0LjI2ODQ0NTUsLTAuMDUzNTk2Mjg3NyAxMC43MTUwODEyLC0wLjgxNTA4MTIwNiA5LjA2NDczMzE4LDMuMzczMDg1ODUgTDAuNDM0MzM4NzQ3LDcwLjc2NTg5MzMgTDguOTM4MDUxMDQsOTEuOTYwNzg4OSBMMTUuNDEwNjcyOSw5MC40Mzc4MTkgTDE3LjU2ODQ0NTUsNzguMzgwNzQyNSBMMTQuNTIxODA5NywxLjk3Njc5ODE0IEwxNC42NDkxODc5LDEuODUwMTE2MDEgWlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cIiNkMGQ2ZDdcIlxuICAgICAgICAgIGlkPVwiYmxhZGUtc2lkZVwiXG4gICAgICAgICAgZD1cIk0xMS4wOTUxMjc2LDAuNTgxMjA2NDk3IEMxMC4zMzM2NDI3LDAuOTYxOTQ4OTU2IDkuNTcyMTU3NzcsMS44NTAxMTYwMSA4LjkzNzM1NDk5LDMuMjQ2NDAzNzEgTDAuMzA2OTYwNTU3LDcwLjYzOTIxMTEgTDguODEwNjcyODUsOTEuODM0MTA2NyBMMy4zNTM1OTYyOSw3MC4wMDQ0MDg0IEwxMS4wOTUxMjc2LDAuNTgxMjA2NDk3IFpcIlxuICAgICAgICAvPlxuICAgICAgPC9zeW1ib2w+XG5cbiAgICAgIDxnPlxuICAgICAgICA8ZyBpZD1cInN0cnVjdHVyZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1OC4xMjMsIDgyLjY2NClcIiBmaWxsUnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cInRvd2VyXCIgZmlsbD1cIiNlNmU2ZTZcIiBwb2ludHM9XCIzMy4xMTEsMTAuOTg0IDM5Ljk2NSwxMC45ODQgNDQuMjgsMTk2LjE3NiAyOC43OTYsMTk2LjE3NlwiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGlkPVwieWF3XCJcbiAgICAgICAgICAgIGZpbGw9XCJyZ2JhKDAsMCwwLDAuMjUpXCJcbiAgICAgICAgICAgIGQ9XCJNNDAuMzQ1NDc1NiwyMy4yOTQ4OTU2IEw0MC43MjYyMTgxLDM0Ljg0NDU0NzYgQzM4LjgyMjUwNTgsMzUuMDk4NjA3OSAzNS43NzY1NjYxLDM1LjA5ODYwNzkgMzIuMzQ5ODg0LDM0LjMzNzEyMyBMMzIuNzMwNjI2NSwyMy4yOTU1OTE2IEw0MC4zNDU0NzU2LDIzLjI5NTU5MTYgTDQwLjM0NTQ3NTYsMjMuMjk0ODk1NiBaXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cImJhc2VcIlxuICAgICAgICAgICAgZmlsbD1cIiNkMGQ2ZDdcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgNDIpXCJcbiAgICAgICAgICAgIGQ9XCJNMjYuMzg0Njg2OCwxNTAuNTkxNjQ3IEw0Ni41NjQwMzcxLDE1MC41OTE2NDcgQzQ4Ljg0ODQ5MTksMTUwLjU5MTY0NyA1MC43NTIyMDQyLDE1Mi40OTUzNiA1MC43NTIyMDQyLDE1NC43Nzk4MTQgTDUwLjc1MjIwNDIsMTU4Ljk2Nzk4MSBMMjIuMDY5MTQxNSwxNTguOTY3OTgxIEwyMi4wNjkxNDE1LDE1NC43Nzk4MTQgQzIyLjA2OTE0MTUsMTUyLjQ5NTM2IDIzLjk3Mjg1MzgsMTUwLjU5MTY0NyAyNi4yNTczMDg2LDE1MC41OTE2NDcgTDI2LjM4NDY4NjgsMTUwLjU5MTY0NyBaXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxjaXJjbGUgaWQ9XCJuYWNlbGxlXCIgZmlsbD1cIiNlNmU2ZTZcIiBjeD1cIjM2LjU0XCIgY3k9XCIxMlwiIHI9XCIxMS45M1wiIC8+XG4gICAgICAgICAgPGNpcmNsZSBpZD1cImdlYXJib3hcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNkMGQ2ZDdcIiBzdHJva2VXaWR0aD1cIjIuNzVcIiBjeD1cIjM2LjUzOFwiIGN5PVwiMTEuOTk5XCIgcj1cIjUuOFwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgY2xhc3NOYW1lPXtzdHlsZXMuYmxhZGV9IHN0eWxlPXt7IGFuaW1hdGlvbjogd2luZFR1cmJpbmVBbmltYXRpb24gfX0+XG4gICAgICAgICAgPHVzZSBpZD1cImJsYWRlMVwiIGhyZWY9XCIjYmxhZGVcIiB4PVwiODMuMjRcIiB5PVwiMFwiIC8+XG4gICAgICAgICAgPHVzZSBpZD1cImJsYWRlMlwiIGhyZWY9XCIjYmxhZGVcIiB4PVwiODMuMjRcIiB5PVwiMFwiIHRyYW5zZm9ybT1cInJvdGF0ZSgxMjAgOTQuNjYzIDk0LjY2MylcIiAvPlxuICAgICAgICAgIDx1c2UgaWQ9XCJibGFkZTNcIiBocmVmPVwiI2JsYWRlXCIgeD1cIjgzLjI0XCIgeT1cIjBcIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTEyMCA5NC42NjMgOTQuNjYzKVwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3aW5kVHVyYmluZUl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPGFueSwgYW55PiA9IHtcbiAgaWQ6ICd3aW5kVHVyYmluZScsXG4gIG5hbWU6ICdXaW5kIFR1cmJpbmUnLFxuICBkZXNjcmlwdGlvbjogJ1NwaW5ueSBzcGlubnknLFxuXG4gIGRpc3BsYXk6IFdpbmRUdXJiaW5lRGlzcGxheSxcblxuICBkZWZhdWx0U2l6ZToge1xuICAgIHdpZHRoOiAxMDAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gIH0sXG5cbiAgZ2V0TmV3T3B0aW9uczogKG9wdGlvbnMpID0+ICh7XG4gICAgLi4ub3B0aW9ucyxcbiAgfSksXG5cbiAgLy8gQ2FsbGVkIHdoZW4gZGF0YSBjaGFuZ2VzXG4gIHByZXBhcmVEYXRhOiAoY3R4OiBEaW1lbnNpb25Db250ZXh0LCBjZmc6IFdpbmRUdXJiaW5lQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgZGF0YTogV2luZFR1cmJpbmVEYXRhID0ge1xuICAgICAgcnBtOiBjZmc/LnJwbSA/IGN0eC5nZXRTY2FsYXIoY2ZnLnJwbSkudmFsdWUoKSA6IDAsXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIHJlZ2lzdGVyT3B0aW9uc1VJOiAoYnVpbGRlcikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydXaW5kIFR1cmJpbmUnXTtcbiAgICBidWlsZGVyLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGlkOiAncnBtJyxcbiAgICAgIHBhdGg6ICdjb25maWcucnBtJyxcbiAgICAgIG5hbWU6ICdSUE0nLFxuICAgICAgZWRpdG9yOiBTY2FsYXJEaW1lbnNpb25FZGl0b3IsXG4gICAgfSk7XG4gIH0sXG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGJsYWRlOiBjc3NgXG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA5NC42NjNweCA5NC42NjNweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIGAsXG59KTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50JztcbmV4cG9ydCB7IENhbnZhc0dyb3VwT3B0aW9ucyB9IGZyb20gJy4vZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3RyeSc7XG4iLCJpbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2FudmFzRWxlbWVudEl0ZW0sIENhbnZhc0VsZW1lbnRPcHRpb25zIH0gZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCB7IGJ1dHRvbkl0ZW0gfSBmcm9tICcuL2VsZW1lbnRzL2J1dHRvbic7XG5pbXBvcnQgeyBkcm9uZUZyb250SXRlbSB9IGZyb20gJy4vZWxlbWVudHMvZHJvbmVGcm9udCc7XG5pbXBvcnQgeyBkcm9uZVNpZGVJdGVtIH0gZnJvbSAnLi9lbGVtZW50cy9kcm9uZVNpZGUnO1xuaW1wb3J0IHsgZHJvbmVUb3BJdGVtIH0gZnJvbSAnLi9lbGVtZW50cy9kcm9uZVRvcCc7XG5pbXBvcnQgeyBpY29uSXRlbSB9IGZyb20gJy4vZWxlbWVudHMvaWNvbic7XG5pbXBvcnQgeyB0ZXh0Qm94SXRlbSB9IGZyb20gJy4vZWxlbWVudHMvdGV4dEJveCc7XG5pbXBvcnQgeyB3aW5kVHVyYmluZUl0ZW0gfSBmcm9tICcuL2VsZW1lbnRzL3dpbmRUdXJiaW5lJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FOVkFTX0VMRU1FTlRfQ09ORklHOiBDYW52YXNFbGVtZW50T3B0aW9ucyA9IHtcbiAgLi4uaWNvbkl0ZW0uZ2V0TmV3T3B0aW9ucygpLFxuICB0eXBlOiBpY29uSXRlbS5pZCxcbiAgbmFtZTogYEVsZW1lbnQgMWAsXG59O1xuXG5leHBvcnQgY29uc3QgY2FudmFzRWxlbWVudFJlZ2lzdHJ5ID0gbmV3IFJlZ2lzdHJ5PENhbnZhc0VsZW1lbnRJdGVtPigoKSA9PiBbXG4gIGljb25JdGVtLCAvLyBkZWZhdWx0IGZvciBub3dcbiAgdGV4dEJveEl0ZW0sXG4gIGJ1dHRvbkl0ZW0sXG4gIGRyb25lVG9wSXRlbSxcbiAgZHJvbmVGcm9udEl0ZW0sXG4gIGRyb25lU2lkZUl0ZW0sXG4gIHdpbmRUdXJiaW5lSXRlbSxcbl0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPbkRyYWcsIE9uUmVzaXplIH0gZnJvbSAncmVhY3QtbW92ZWFibGUvZGVjbGFyYXRpb24vdHlwZXMnO1xuXG5pbXBvcnQge1xuICBCYWNrZ3JvdW5kSW1hZ2VTaXplLFxuICBDYW52YXNFbGVtZW50SXRlbSxcbiAgQ2FudmFzRWxlbWVudE9wdGlvbnMsXG4gIGNhbnZhc0VsZW1lbnRSZWdpc3RyeSxcbiAgUGxhY2VtZW50LFxuICBBbmNob3IsXG59IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMnO1xuaW1wb3J0IHsgRGltZW5zaW9uQ29udGV4dCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcbmltcG9ydCB7IG5vdEZvdW5kSXRlbSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvbm90Rm91bmQnO1xuaW1wb3J0IHsgR3JvdXBTdGF0ZSB9IGZyb20gJy4vZ3JvdXAnO1xuaW1wb3J0IHsgTGF5ZXJFbGVtZW50IH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9MYXllcnMvdHlwZXMnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcblxubGV0IGNvdW50ZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudFN0YXRlIGltcGxlbWVudHMgTGF5ZXJFbGVtZW50IHtcbiAgLy8gVUlEIG5lY2Vzc2FyeSBmb3IgbW92ZWFibGUgdG8gd29yayAoZm9yIG5vdylcbiAgcmVhZG9ubHkgVUlEID0gY291bnRlcisrO1xuICByZXZJZCA9IDA7XG4gIHNpemVTdHlsZTogQ1NTUHJvcGVydGllcyA9IHt9O1xuICBkYXRhU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7fTtcblxuICAvLyBGaWxsZWQgaW4gYnkgcmVmXG4gIGRpdj86IEhUTUxEaXZFbGVtZW50O1xuXG4gIC8vIENhbGN1bGF0ZWRcbiAgd2lkdGggPSAxMDA7XG4gIGhlaWdodCA9IDEwMDtcbiAgZGF0YT86IGFueTsgLy8gZGVwZW5kcyBvbiB0aGUgdHlwZVxuXG4gIC8vIEZyb20gb3B0aW9ucywgYnV0IGFsd2F5cyBzZXQgYW5kIGFsd2F5cyB2YWxpZFxuICBhbmNob3I6IEFuY2hvcjtcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IENhbnZhc0VsZW1lbnRJdGVtLCBwdWJsaWMgb3B0aW9uczogQ2FudmFzRWxlbWVudE9wdGlvbnMsIHB1YmxpYyBwYXJlbnQ/OiBHcm91cFN0YXRlKSB7XG4gICAgY29uc3QgZmFsbGJhY2tOYW1lID0gYEVsZW1lbnQgJHtEYXRlLm5vdygpfWA7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7IHR5cGU6IGl0ZW0uaWQsIG5hbWU6IGZhbGxiYWNrTmFtZSB9O1xuICAgIH1cbiAgICB0aGlzLmFuY2hvciA9IG9wdGlvbnMuYW5jaG9yID8/IHt9O1xuICAgIHRoaXMucGxhY2VtZW50ID0gb3B0aW9ucy5wbGFjZW1lbnQgPz8ge307XG4gICAgb3B0aW9ucy5hbmNob3IgPSB0aGlzLmFuY2hvcjtcbiAgICBvcHRpb25zLnBsYWNlbWVudCA9IHRoaXMucGxhY2VtZW50O1xuXG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLmdldFNjZW5lKCk7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgIGNvbnN0IG5ld05hbWUgPSBzY2VuZT8uZ2V0TmV4dEVsZW1lbnROYW1lKCk7XG4gICAgICBvcHRpb25zLm5hbWUgPSBuZXdOYW1lID8/IGZhbGxiYWNrTmFtZTtcbiAgICB9XG4gICAgc2NlbmU/LmJ5TmFtZS5zZXQob3B0aW9ucy5uYW1lLCB0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2NlbmUoKTogU2NlbmUgfCB1bmRlZmluZWQge1xuICAgIGxldCB0cmF2ID0gdGhpcy5wYXJlbnQ7XG4gICAgd2hpbGUgKHRyYXYpIHtcbiAgICAgIGlmICh0cmF2LmlzUm9vdCgpKSB7XG4gICAgICAgIHJldHVybiB0cmF2LnNjZW5lO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRyYXYgPSB0cmF2LnBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZVBsYWNlbWVudCgpIHtcbiAgICBjb25zdCB7IGFuY2hvciwgcGxhY2VtZW50IH0gPSB0aGlzO1xuICAgIGlmICghKGFuY2hvci5sZWZ0IHx8IGFuY2hvci5yaWdodCkpIHtcbiAgICAgIGFuY2hvci5sZWZ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCEoYW5jaG9yLnRvcCB8fCBhbmNob3IuYm90dG9tKSkge1xuICAgICAgYW5jaG9yLnRvcCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdyA9IHBsYWNlbWVudC53aWR0aCA/PyAxMDA7IC8vIHRoaXMuZGl2ID8gdGhpcy5kaXYuY2xpZW50V2lkdGggOiB0aGlzLndpZHRoO1xuICAgIGNvbnN0IGggPSBwbGFjZW1lbnQuaGVpZ2h0ID8/IDEwMDsgLy8gdGhpcy5kaXYgPyB0aGlzLmRpdi5jbGllbnRIZWlnaHQgOiB0aGlzLmhlaWdodDtcblxuICAgIGlmIChhbmNob3IudG9wKSB7XG4gICAgICBpZiAoIXBsYWNlbWVudC50b3ApIHtcbiAgICAgICAgcGxhY2VtZW50LnRvcCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAoYW5jaG9yLmJvdHRvbSkge1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LmhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlbWVudC5oZWlnaHQgPSBoO1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LmJvdHRvbTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFuY2hvci5ib3R0b20pIHtcbiAgICAgIGlmICghcGxhY2VtZW50LmJvdHRvbSkge1xuICAgICAgICBwbGFjZW1lbnQuYm90dG9tID0gMDtcbiAgICAgIH1cbiAgICAgIHBsYWNlbWVudC5oZWlnaHQgPSBoO1xuICAgICAgZGVsZXRlIHBsYWNlbWVudC50b3A7XG4gICAgfVxuXG4gICAgaWYgKGFuY2hvci5sZWZ0KSB7XG4gICAgICBpZiAoIXBsYWNlbWVudC5sZWZ0KSB7XG4gICAgICAgIHBsYWNlbWVudC5sZWZ0ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChhbmNob3IucmlnaHQpIHtcbiAgICAgICAgZGVsZXRlIHBsYWNlbWVudC53aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlbWVudC53aWR0aCA9IHc7XG4gICAgICAgIGRlbGV0ZSBwbGFjZW1lbnQucmlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhbmNob3IucmlnaHQpIHtcbiAgICAgIGlmICghcGxhY2VtZW50LnJpZ2h0KSB7XG4gICAgICAgIHBsYWNlbWVudC5yaWdodCA9IDA7XG4gICAgICB9XG4gICAgICBwbGFjZW1lbnQud2lkdGggPSB3O1xuICAgICAgZGVsZXRlIHBsYWNlbWVudC5sZWZ0O1xuICAgIH1cblxuICAgIHRoaXMud2lkdGggPSB3O1xuICAgIHRoaXMuaGVpZ2h0ID0gaDtcblxuICAgIHRoaXMub3B0aW9ucy5hbmNob3IgPSB0aGlzLmFuY2hvcjtcbiAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ID0gdGhpcy5wbGFjZW1lbnQ7XG4gIH1cblxuICAvLyBUaGUgcGFyZW50IHNpemUsIG5lZWQgdG8gc2V0IG91ciBvd24gc2l6ZSBiYXNlZCBvbiBvZmZzZXRzXG4gIHVwZGF0ZVNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy52YWxpZGF0ZVBsYWNlbWVudCgpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBDU1MgcG9zaXRpb25cbiAgICB0aGlzLnNpemVTdHlsZSA9IHtcbiAgICAgIC4uLnRoaXMub3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlRGF0YShjdHg6IERpbWVuc2lvbkNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5pdGVtLnByZXBhcmVEYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLml0ZW0ucHJlcGFyZURhdGEoY3R4LCB0aGlzLm9wdGlvbnMuY29uZmlnKTtcbiAgICAgIHRoaXMucmV2SWQrKzsgLy8gcmVyZW5kZXJcbiAgICB9XG5cbiAgICBjb25zdCB7IGJhY2tncm91bmQsIGJvcmRlciB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGNzczogQ1NTUHJvcGVydGllcyA9IHt9O1xuICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICBpZiAoYmFja2dyb3VuZC5jb2xvcikge1xuICAgICAgICBjb25zdCBjb2xvciA9IGN0eC5nZXRDb2xvcihiYWNrZ3JvdW5kLmNvbG9yKTtcbiAgICAgICAgY3NzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLnZhbHVlKCk7XG4gICAgICB9XG4gICAgICBpZiAoYmFja2dyb3VuZC5pbWFnZSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGN0eC5nZXRSZXNvdXJjZShiYWNrZ3JvdW5kLmltYWdlKTtcbiAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgY29uc3QgdiA9IGltYWdlLnZhbHVlKCk7XG4gICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgIGNzcy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt2fVwiKWA7XG4gICAgICAgICAgICBzd2l0Y2ggKGJhY2tncm91bmQuc2l6ZSA/PyBCYWNrZ3JvdW5kSW1hZ2VTaXplLkNvbnRhaW4pIHtcbiAgICAgICAgICAgICAgY2FzZSBCYWNrZ3JvdW5kSW1hZ2VTaXplLkNvbnRhaW46XG4gICAgICAgICAgICAgICAgY3NzLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICAgICAgICAgICAgICAgIGNzcy5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgQmFja2dyb3VuZEltYWdlU2l6ZS5Db3ZlcjpcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICAgICAgICAgIGNzcy5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgQmFja2dyb3VuZEltYWdlU2l6ZS5PcmlnaW5hbDpcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEJhY2tncm91bmRJbWFnZVNpemUuVGlsZTpcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFJlcGVhdCA9ICdyZXBlYXQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEJhY2tncm91bmRJbWFnZVNpemUuRmlsbDpcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFNpemUgPSAnMTAwJSAxMDAlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYm9yZGVyICYmIGJvcmRlci5jb2xvciAmJiBib3JkZXIud2lkdGgpIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gY3R4LmdldENvbG9yKGJvcmRlci5jb2xvcik7XG4gICAgICBjc3MuYm9yZGVyV2lkdGggPSBib3JkZXIud2lkdGg7XG4gICAgICBjc3MuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICAgICAgY3NzLmJvcmRlckNvbG9yID0gY29sb3IudmFsdWUoKTtcblxuICAgICAgLy8gTW92ZSB0aGUgaW1hZ2UgdG8gaW5zaWRlIHRoZSBib3JkZXJcbiAgICAgIGlmIChjc3MuYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgIGNzcy5iYWNrZ3JvdW5kT3JpZ2luID0gJ3BhZGRpbmctYm94JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTdHlsZSA9IGNzcztcbiAgfVxuXG4gIC8qKiBSZWN1cnNpdmVseSB2aXNpdCBhbGwgbm9kZXMgKi9cbiAgdmlzaXQodmlzaXRvcjogKHY6IEVsZW1lbnRTdGF0ZSkgPT4gdm9pZCkge1xuICAgIHZpc2l0b3IodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZShvcHRpb25zOiBDYW52YXNFbGVtZW50T3B0aW9ucykge1xuICAgIGlmICh0aGlzLml0ZW0uaWQgIT09IG9wdGlvbnMudHlwZSkge1xuICAgICAgdGhpcy5pdGVtID0gY2FudmFzRWxlbWVudFJlZ2lzdHJ5LmdldElmRXhpc3RzKG9wdGlvbnMudHlwZSkgPz8gbm90Rm91bmRJdGVtO1xuICAgIH1cblxuICAgIC8vIHJlbmFtZSBoYW5kbGluZ1xuICAgIGNvbnN0IG9sZE5hbWUgPSB0aGlzLm9wdGlvbnMubmFtZTtcbiAgICBjb25zdCBuZXdOYW1lID0gb3B0aW9ucy5uYW1lO1xuXG4gICAgdGhpcy5yZXZJZCsrO1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICAgIGxldCB0cmF2ID0gdGhpcy5wYXJlbnQ7XG4gICAgd2hpbGUgKHRyYXYpIHtcbiAgICAgIGlmICh0cmF2LmlzUm9vdCgpKSB7XG4gICAgICAgIHRyYXYuc2NlbmUuc2F2ZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRyYXYucmV2SWQrKztcbiAgICAgIHRyYXYgPSB0cmF2LnBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBzY2VuZSA9IHRoaXMuZ2V0U2NlbmUoKTtcbiAgICBpZiAob2xkTmFtZSAhPT0gbmV3TmFtZSAmJiBzY2VuZSkge1xuICAgICAgc2NlbmUuYnlOYW1lLmRlbGV0ZShvbGROYW1lKTtcbiAgICAgIHNjZW5lLmJ5TmFtZS5zZXQobmV3TmFtZSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2F2ZU1vZGVsKCkge1xuICAgIHJldHVybiB7IC4uLnRoaXMub3B0aW9ucyB9O1xuICB9XG5cbiAgaW5pdEVsZW1lbnQgPSAodGFyZ2V0OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMuZGl2ID0gdGFyZ2V0O1xuICB9O1xuXG4gIGFwcGx5RHJhZyA9IChldmVudDogT25EcmFnKSA9PiB7XG4gICAgY29uc3QgeyBwbGFjZW1lbnQsIGFuY2hvciB9ID0gdGhpcztcblxuICAgIGNvbnN0IGRlbHRhWCA9IGV2ZW50LmRlbHRhWzBdO1xuICAgIGNvbnN0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWzFdO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBldmVudC50YXJnZXQuc3R5bGU7XG4gICAgaWYgKGFuY2hvci50b3ApIHtcbiAgICAgIHBsYWNlbWVudC50b3AhICs9IGRlbHRhWTtcbiAgICAgIHN0eWxlLnRvcCA9IGAke3BsYWNlbWVudC50b3B9cHhgO1xuICAgIH1cbiAgICBpZiAoYW5jaG9yLmJvdHRvbSkge1xuICAgICAgcGxhY2VtZW50LmJvdHRvbSEgLT0gZGVsdGFZO1xuICAgICAgc3R5bGUuYm90dG9tID0gYCR7cGxhY2VtZW50LmJvdHRvbX1weGA7XG4gICAgfVxuICAgIGlmIChhbmNob3IubGVmdCkge1xuICAgICAgcGxhY2VtZW50LmxlZnQhICs9IGRlbHRhWDtcbiAgICAgIHN0eWxlLmxlZnQgPSBgJHtwbGFjZW1lbnQubGVmdH1weGA7XG4gICAgfVxuICAgIGlmIChhbmNob3IucmlnaHQpIHtcbiAgICAgIHBsYWNlbWVudC5yaWdodCEgLT0gZGVsdGFYO1xuICAgICAgc3R5bGUucmlnaHQgPSBgJHtwbGFjZW1lbnQucmlnaHR9cHhgO1xuICAgIH1cbiAgfTtcblxuICAvLyBraW5kYSBsaWtlOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9ncmFmYW5hLWVkZ2UtYXBwL2Jsb2IvbWFpbi9zcmMvcGFuZWxzL2RyYXcvV3JhcEl0ZW0udHN4I0w0NFxuICBhcHBseVJlc2l6ZSA9IChldmVudDogT25SZXNpemUpID0+IHtcbiAgICBjb25zdCB7IHBsYWNlbWVudCwgYW5jaG9yIH0gPSB0aGlzO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBldmVudC50YXJnZXQuc3R5bGU7XG4gICAgY29uc3QgZGVsdGFYID0gZXZlbnQuZGVsdGFbMF07XG4gICAgY29uc3QgZGVsdGFZID0gZXZlbnQuZGVsdGFbMV07XG4gICAgY29uc3QgZGlyTFIgPSBldmVudC5kaXJlY3Rpb25bMF07XG4gICAgY29uc3QgZGlyVEIgPSBldmVudC5kaXJlY3Rpb25bMV07XG4gICAgaWYgKGRpckxSID09PSAxKSB7XG4gICAgICAvLyBSSUdIVFxuICAgICAgaWYgKGFuY2hvci5yaWdodCkge1xuICAgICAgICBwbGFjZW1lbnQucmlnaHQhIC09IGRlbHRhWDtcbiAgICAgICAgc3R5bGUucmlnaHQgPSBgJHtwbGFjZW1lbnQucmlnaHR9cHhgO1xuICAgICAgICBpZiAoIWFuY2hvci5sZWZ0KSB7XG4gICAgICAgICAgcGxhY2VtZW50LndpZHRoID0gZXZlbnQud2lkdGg7XG4gICAgICAgICAgc3R5bGUud2lkdGggPSBgJHtwbGFjZW1lbnQud2lkdGh9cHhgO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZW1lbnQud2lkdGghID0gZXZlbnQud2lkdGg7XG4gICAgICAgIHN0eWxlLndpZHRoID0gYCR7cGxhY2VtZW50LndpZHRofXB4YDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpckxSID09PSAtMSkge1xuICAgICAgLy8gTEVGVFxuICAgICAgaWYgKGFuY2hvci5sZWZ0KSB7XG4gICAgICAgIHBsYWNlbWVudC5sZWZ0ISAtPSBkZWx0YVg7XG4gICAgICAgIHBsYWNlbWVudC53aWR0aCEgPSBldmVudC53aWR0aDtcbiAgICAgICAgc3R5bGUubGVmdCA9IGAke3BsYWNlbWVudC5sZWZ0fXB4YDtcbiAgICAgICAgc3R5bGUud2lkdGggPSBgJHtwbGFjZW1lbnQud2lkdGh9cHhgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2VtZW50LndpZHRoISArPSBkZWx0YVg7XG4gICAgICAgIHN0eWxlLndpZHRoID0gYCR7cGxhY2VtZW50LndpZHRofXB4YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyVEIgPT09IC0xKSB7XG4gICAgICAvLyBUT1BcbiAgICAgIGlmIChhbmNob3IudG9wKSB7XG4gICAgICAgIHBsYWNlbWVudC50b3AhIC09IGRlbHRhWTtcbiAgICAgICAgcGxhY2VtZW50LmhlaWdodCA9IGV2ZW50LmhlaWdodDtcbiAgICAgICAgc3R5bGUudG9wID0gYCR7cGxhY2VtZW50LnRvcH1weGA7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke3BsYWNlbWVudC5oZWlnaHR9cHhgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2VtZW50LmhlaWdodCA9IGV2ZW50LmhlaWdodDtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7cGxhY2VtZW50LmhlaWdodH1weGA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJUQiA9PT0gMSkge1xuICAgICAgLy8gQk9UVE9NXG4gICAgICBpZiAoYW5jaG9yLmJvdHRvbSkge1xuICAgICAgICBwbGFjZW1lbnQuYm90dG9tISAtPSBkZWx0YVk7XG4gICAgICAgIHBsYWNlbWVudC5oZWlnaHQhID0gZXZlbnQuaGVpZ2h0O1xuICAgICAgICBzdHlsZS5ib3R0b20gPSBgJHtwbGFjZW1lbnQuYm90dG9tfXB4YDtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7cGxhY2VtZW50LmhlaWdodH1weGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZW1lbnQuaGVpZ2h0ISA9IGV2ZW50LmhlaWdodDtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7cGxhY2VtZW50LmhlaWdodH1weGA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy53aWR0aCA9IGV2ZW50LndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZXZlbnQuaGVpZ2h0O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW0gfSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtgJHt0aGlzLlVJRH1gfSBzdHlsZT17eyAuLi50aGlzLnNpemVTdHlsZSwgLi4udGhpcy5kYXRhU3R5bGUgfX0gcmVmPXt0aGlzLmluaXRFbGVtZW50fT5cbiAgICAgICAgPGl0ZW0uZGlzcGxheVxuICAgICAgICAgIGtleT17YCR7dGhpcy5VSUR9LyR7dGhpcy5yZXZJZH1gfVxuICAgICAgICAgIGNvbmZpZz17dGhpcy5vcHRpb25zLmNvbmZpZ31cbiAgICAgICAgICB3aWR0aD17dGhpcy53aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e3RoaXMuaGVpZ2h0fVxuICAgICAgICAgIGRhdGE9e3RoaXMuZGF0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbG9yRGltZW5zaW9uQ29uZmlnLCBSZXNvdXJjZURpbWVuc2lvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQbGFjZW1lbnQge1xuICB0b3A/OiBudW1iZXI7XG4gIGxlZnQ/OiBudW1iZXI7XG4gIHJpZ2h0PzogbnVtYmVyO1xuICBib3R0b20/OiBudW1iZXI7XG5cbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbmNob3Ige1xuICB0b3A/OiBib29sZWFuO1xuICBsZWZ0PzogYm9vbGVhbjtcbiAgcmlnaHQ/OiBib29sZWFuO1xuICBib3R0b20/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZW51bSBCYWNrZ3JvdW5kSW1hZ2VTaXplIHtcbiAgT3JpZ2luYWwgPSAnb3JpZ2luYWwnLFxuICBDb250YWluID0gJ2NvbnRhaW4nLFxuICBDb3ZlciA9ICdjb3ZlcicsXG4gIEZpbGwgPSAnZmlsbCcsXG4gIFRpbGUgPSAndGlsZScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZENvbmZpZyB7XG4gIGNvbG9yPzogQ29sb3JEaW1lbnNpb25Db25maWc7XG4gIGltYWdlPzogUmVzb3VyY2VEaW1lbnNpb25Db25maWc7XG4gIHNpemU/OiBCYWNrZ3JvdW5kSW1hZ2VTaXplO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDb25maWcge1xuICBjb2xvcj86IENvbG9yRGltZW5zaW9uQ29uZmlnO1xuICB3aWR0aD86IG51bWJlcjtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSlNPTkZvcm1hdHRlciwgU3RyaW5nVmFsdWVFZGl0b3IgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBcHBFdmVudHMsIFN0YW5kYXJkRWRpdG9yUHJvcHMsIFN0YW5kYXJkRWRpdG9yc1JlZ2lzdHJ5SXRlbSwgU3RyaW5nRmllbGRDb25maWdTZXR0aW5ncyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBhcHBFdmVudHMgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBUElFZGl0b3JDb25maWcge1xuICBlbmRwb2ludDogc3RyaW5nO1xuICBkYXRhPzogc3RyaW5nO1xufVxuXG5jb25zdCBkdW1teVN0cmluZ1NldHRpbmdzOiBTdGFuZGFyZEVkaXRvcnNSZWdpc3RyeUl0ZW08c3RyaW5nLCBTdHJpbmdGaWVsZENvbmZpZ1NldHRpbmdzPiA9IHtcbiAgc2V0dGluZ3M6IHt9LFxufSBhcyBhbnk7XG5cbmV4cG9ydCBjb25zdCBjYWxsQXBpID0gKGFwaTogQVBJRWRpdG9yQ29uZmlnLCBpc1Rlc3QgPSBmYWxzZSkgPT4ge1xuICBpZiAoYXBpKSB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZmV0Y2goe1xuICAgICAgICB1cmw6IGFwaS5lbmRwb2ludCEsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiBhcGkuZGF0YSA/PyB7fSxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgZXJyb3I6IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGlzVGVzdCkge1xuICAgICAgICAgICAgYXBwRXZlbnRzLmVtaXQoQXBwRXZlbnRzLmFsZXJ0RXJyb3IsIFsnRXJyb3IgaGFzIG9jY3VycmVkOiAnLCBKU09OLnN0cmluZ2lmeShlcnJvcildKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICBpZiAoaXNUZXN0KSB7XG4gICAgICAgICAgICBhcHBFdmVudHMuZW1pdChBcHBFdmVudHMuYWxlcnRTdWNjZXNzLCBbJ1Rlc3Qgc3VjY2Vzc2Z1bCddKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEFQSUVkaXRvcjogRkM8U3RhbmRhcmRFZGl0b3JQcm9wczxBUElFZGl0b3JDb25maWcsIGFueSwgYW55Pj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB2YWx1ZSwgY29udGV4dCwgb25DaGFuZ2UgfSA9IHByb3BzO1xuICBjb25zdCBsYWJlbFdpZHRoID0gOTtcblxuICBjb25zdCBvbkVuZHBvaW50Q2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGVuZHBvaW50KSA9PiB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLnZhbHVlLFxuICAgICAgICBlbmRwb2ludCxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW29uQ2hhbmdlLCB2YWx1ZV1cbiAgKTtcblxuICBjb25zdCBvbkRhdGFDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZGF0YSkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgZGF0YSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW29uQ2hhbmdlLCB2YWx1ZV1cbiAgKTtcblxuICBjb25zdCByZW5kZXJKU09OID0gKGRhdGE6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIHJldHVybiA8SlNPTkZvcm1hdHRlciBqc29uPXtqc29ufSAvPjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGBJbnZhbGlkIEpTT04gcHJvdmlkZWQ6ICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJUZXN0QVBJQnV0dG9uID0gKGFwaTogQVBJRWRpdG9yQ29uZmlnKSA9PiB7XG4gICAgaWYgKGFwaSAmJiBhcGkuZW5kcG9pbnQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2FsbEFwaShhcGksIHRydWUpfSB0aXRsZT17J1Rlc3QgQVBJJ30+XG4gICAgICAgICAgVGVzdCBBUElcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICByZXR1cm4gY29uZmlnLmRpc2FibGVTYW5pdGl6ZUh0bWwgPyAoXG4gICAgPD5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXsnRW5kcG9pbnQnfSBsYWJlbFdpZHRoPXtsYWJlbFdpZHRofSBncm93PXt0cnVlfT5cbiAgICAgICAgICA8U3RyaW5nVmFsdWVFZGl0b3JcbiAgICAgICAgICAgIGNvbnRleHQ9e2NvbnRleHR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWU/LmVuZHBvaW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uRW5kcG9pbnRDaGFuZ2V9XG4gICAgICAgICAgICBpdGVtPXtkdW1teVN0cmluZ1NldHRpbmdzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9eydEYXRhJ30gbGFiZWxXaWR0aD17bGFiZWxXaWR0aH0gZ3Jvdz17dHJ1ZX0+XG4gICAgICAgICAgPFN0cmluZ1ZhbHVlRWRpdG9yXG4gICAgICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPy5kYXRhID8/ICd7fSd9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25EYXRhQ2hhbmdlfVxuICAgICAgICAgICAgaXRlbT17ZHVtbXlTdHJpbmdTZXR0aW5nc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgIHtyZW5kZXJUZXN0QVBJQnV0dG9uKHZhbHVlKX1cbiAgICAgIDxiciAvPlxuICAgICAge3JlbmRlckpTT04odmFsdWU/LmRhdGEgPz8gJ3t9Jyl9XG4gICAgPC8+XG4gICkgOiAoXG4gICAgPD5NdXN0IGVuYWJsZSBkaXNhYmxlU2FuaXRpemVIdG1sIGZlYXR1cmUgZmxhZyB0byBhY2Nlc3M8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBQYW5lbE9wdGlvbnNTdXBwbGllciB9IGZyb20gJ0BncmFmYW5hL2RhdGEvc3JjL3BhbmVsL1BhbmVsUGx1Z2luJztcbmltcG9ydCB7IEJhY2tncm91bmRJbWFnZVNpemUsIENhbnZhc0VsZW1lbnRPcHRpb25zIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2NhbnZhcyc7XG5pbXBvcnQgeyBDb2xvckRpbWVuc2lvbkVkaXRvciwgUmVzb3VyY2VEaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzJztcblxuaW50ZXJmYWNlIE9wdGlvblN1cHBsaWVycyB7XG4gIGFkZEJhY2tncm91bmQ6IFBhbmVsT3B0aW9uc1N1cHBsaWVyPENhbnZhc0VsZW1lbnRPcHRpb25zPjtcbiAgYWRkQm9yZGVyOiBQYW5lbE9wdGlvbnNTdXBwbGllcjxDYW52YXNFbGVtZW50T3B0aW9ucz47XG59XG5cbmV4cG9ydCBjb25zdCBvcHRpb25CdWlsZGVyOiBPcHRpb25TdXBwbGllcnMgPSB7XG4gIGFkZEJhY2tncm91bmQ6IChidWlsZGVyLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBbJ0JhY2tncm91bmQnXTtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnYmFja2dyb3VuZC5jb2xvcicsXG4gICAgICAgIHBhdGg6ICdiYWNrZ3JvdW5kLmNvbG9yJyxcbiAgICAgICAgbmFtZTogJ0NvbG9yJyxcbiAgICAgICAgZWRpdG9yOiBDb2xvckRpbWVuc2lvbkVkaXRvcixcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgICAgICAvLyBDb25maWd1cmVkIHZhbHVlc1xuICAgICAgICAgIGZpeGVkOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnYmFja2dyb3VuZC5pbWFnZScsXG4gICAgICAgIHBhdGg6ICdiYWNrZ3JvdW5kLmltYWdlJyxcbiAgICAgICAgbmFtZTogJ0ltYWdlJyxcbiAgICAgICAgZWRpdG9yOiBSZXNvdXJjZURpbWVuc2lvbkVkaXRvcixcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICByZXNvdXJjZVR5cGU6ICdpbWFnZScsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLmFkZFJhZGlvKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHBhdGg6ICdiYWNrZ3JvdW5kLnNpemUnLFxuICAgICAgICBuYW1lOiAnSW1hZ2Ugc2l6ZScsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogQmFja2dyb3VuZEltYWdlU2l6ZS5PcmlnaW5hbCwgbGFiZWw6ICdPcmlnaW5hbCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IEJhY2tncm91bmRJbWFnZVNpemUuQ29udGFpbiwgbGFiZWw6ICdDb250YWluJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogQmFja2dyb3VuZEltYWdlU2l6ZS5Db3ZlciwgbGFiZWw6ICdDb3ZlcicgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IEJhY2tncm91bmRJbWFnZVNpemUuRmlsbCwgbGFiZWw6ICdGaWxsJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogQmFja2dyb3VuZEltYWdlU2l6ZS5UaWxlLCBsYWJlbDogJ1RpbGUnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBCYWNrZ3JvdW5kSW1hZ2VTaXplLkNvdmVyLFxuICAgICAgfSk7XG4gIH0sXG5cbiAgYWRkQm9yZGVyOiAoYnVpbGRlciwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydCb3JkZXInXTtcbiAgICBidWlsZGVyLmFkZFNsaWRlcklucHV0KHtcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgcGF0aDogJ2JvcmRlci53aWR0aCcsXG4gICAgICBuYW1lOiAnV2lkdGgnLFxuICAgICAgZGVmYXVsdFZhbHVlOiAyLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDIwLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChjb250ZXh0Lm9wdGlvbnM/LmJvcmRlcj8ud2lkdGgpIHtcbiAgICAgIGJ1aWxkZXIuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnYm9yZGVyLmNvbG9yJyxcbiAgICAgICAgcGF0aDogJ2JvcmRlci5jb2xvcicsXG4gICAgICAgIG5hbWU6ICdDb2xvcicsXG4gICAgICAgIGVkaXRvcjogQ29sb3JEaW1lbnNpb25FZGl0b3IsXG4gICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICAgICAgLy8gQ29uZmlndXJlZCB2YWx1ZXNcbiAgICAgICAgICBmaXhlZDogJycsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhbmVsUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFBhbmVsT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzLmdlbic7XG5pbXBvcnQgeyBFbGVtZW50U3RhdGUgfSBmcm9tICdhcHAvZmVhdHVyZXMvY2FudmFzL3J1bnRpbWUvZWxlbWVudCc7XG5pbXBvcnQgeyBpY29uSXRlbSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvaWNvbic7XG5pbXBvcnQge1xuICBDb2xvckRpbWVuc2lvbkNvbmZpZyxcbiAgRGltZW5zaW9uQ29udGV4dCxcbiAgZ2V0Q29sb3JEaW1lbnNpb25Gcm9tRGF0YSxcbiAgZ2V0UmVzb3VyY2VEaW1lbnNpb25Gcm9tRGF0YSxcbiAgZ2V0U2NhbGFyRGltZW5zaW9uRnJvbURhdGEsXG4gIGdldFNjYWxlRGltZW5zaW9uRnJvbURhdGEsXG4gIGdldFRleHREaW1lbnNpb25Gcm9tRGF0YSxcbiAgUmVzb3VyY2VEaW1lbnNpb25Db25maWcsXG4gIFNjYWxhckRpbWVuc2lvbkNvbmZpZyxcbiAgU2NhbGVEaW1lbnNpb25Db25maWcsXG4gIFRleHREaW1lbnNpb25Db25maWcsXG59IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUGFuZWxQcm9wczxQYW5lbE9wdGlvbnM+IHt9XG5cbmV4cG9ydCBjbGFzcyBJY29uUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50U3RhdGU7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuaW5pdEVsZW1lbnQocHJvcHMpO1xuICB9XG5cbiAgaW5pdEVsZW1lbnQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgdGhpcy5lbGVtZW50ID0gbmV3IEVsZW1lbnRTdGF0ZShpY29uSXRlbSwgcHJvcHMub3B0aW9ucy5yb290IGFzIGFueSk7XG4gICAgdGhpcy51cGRhdGVTaXplKHByb3BzKTtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlRGF0YSh0aGlzLmRpbXMpO1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH07XG5cbiAgdXBkYXRlU2l6ZSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHByb3BzO1xuICAgIHRoaXMuZWxlbWVudC5hbmNob3IgPSB7XG4gICAgICB0b3A6IHRydWUsXG4gICAgICBsZWZ0OiB0cnVlLFxuICAgIH07XG4gICAgdGhpcy5lbGVtZW50LnBsYWNlbWVudCA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICB9O1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGVTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9O1xuXG4gIGRpbXM6IERpbWVuc2lvbkNvbnRleHQgPSB7XG4gICAgZ2V0Q29sb3I6IChjb2xvcjogQ29sb3JEaW1lbnNpb25Db25maWcpID0+IGdldENvbG9yRGltZW5zaW9uRnJvbURhdGEodGhpcy5wcm9wcy5kYXRhLCBjb2xvciksXG4gICAgZ2V0U2NhbGU6IChzY2FsZTogU2NhbGVEaW1lbnNpb25Db25maWcpID0+IGdldFNjYWxlRGltZW5zaW9uRnJvbURhdGEodGhpcy5wcm9wcy5kYXRhLCBzY2FsZSksXG4gICAgZ2V0U2NhbGFyOiAoc2NhbGFyOiBTY2FsYXJEaW1lbnNpb25Db25maWcpID0+IGdldFNjYWxhckRpbWVuc2lvbkZyb21EYXRhKHRoaXMucHJvcHMuZGF0YSwgc2NhbGFyKSxcbiAgICBnZXRUZXh0OiAodGV4dDogVGV4dERpbWVuc2lvbkNvbmZpZykgPT4gZ2V0VGV4dERpbWVuc2lvbkZyb21EYXRhKHRoaXMucHJvcHMuZGF0YSwgdGV4dCksXG4gICAgZ2V0UmVzb3VyY2U6IChyZXM6IFJlc291cmNlRGltZW5zaW9uQ29uZmlnKSA9PiBnZXRSZXNvdXJjZURpbWVuc2lvbkZyb21EYXRhKHRoaXMucHJvcHMuZGF0YSwgcmVzKSxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHdpZHRoICE9PSBuZXh0UHJvcHMud2lkdGggfHwgaGVpZ2h0ICE9PSBuZXh0UHJvcHMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnVwZGF0ZVNpemUobmV4dFByb3BzKTtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpIHtcbiAgICAgIHRoaXMuZWxlbWVudC51cGRhdGVEYXRhKHRoaXMuZGltcyk7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBSZWxvYWQgdGhlIGVsZW1lbnQgd2hlbiBvcHRpb25zIGNoYW5nZVxuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnM/LnJvb3QgIT09IG5leHRQcm9wcy5vcHRpb25zPy5yb290KSB7XG4gICAgICB0aGlzLmluaXRFbGVtZW50KG5leHRQcm9wcyk7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQsIG92ZXJmbG93OiAnaGlkZGVuJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+e3RoaXMuZWxlbWVudC5yZW5kZXIoKX08L2Rpdj47XG4gIH1cbn1cbiIsIi8vfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIE5PVEU6IFRoaXMgZmlsZSB3aWxsIGJlIGF1dG8gZ2VuZXJhdGVkIGZyb20gbW9kZWxzLmN1ZVxuLy8gSXQgaXMgY3VycmVudHkgaGFuZCB3cml0dGVuIGJ1dCB3aWxsIHNlcnZlIGFzIHRoZSB0YXJnZXQgZm9yIGN1ZXRzeVxuLy9+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50T3B0aW9ucyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMnO1xuaW1wb3J0IHsgSWNvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvaWNvbic7XG5pbXBvcnQgeyBSZXNvdXJjZURpbWVuc2lvbk1vZGUgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxPcHRpb25zIHtcbiAgcm9vdDogT21pdDxDYW52YXNFbGVtZW50T3B0aW9uczxJY29uQ29uZmlnPiwgJ3R5cGUnIHwgJ25hbWUnPjsgLy8gdHlwZSBpcyBmb3JjZWRcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYW5lbE9wdGlvbnM6IFBhbmVsT3B0aW9ucyA9IHtcbiAgcm9vdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgcGF0aDoge1xuICAgICAgICBtb2RlOiBSZXNvdXJjZURpbWVuc2lvbk1vZGUuRml4ZWQsXG4gICAgICAgIGZpeGVkOiAnaW1nL2ljb25zL3VuaWNvbnMvYW5hbHlzaXMuc3ZnJyxcbiAgICAgIH0sXG4gICAgICBmaWxsOiB7XG4gICAgICAgIGZpeGVkOiAnZ3JlZW4nXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBGaWVsZENvbmZpZ1Byb3BlcnR5LCBQYW5lbFBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBJY29uUGFuZWwgfSBmcm9tICcuL0ljb25QYW5lbCc7XG5pbXBvcnQgeyBkZWZhdWx0UGFuZWxPcHRpb25zLCBQYW5lbE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy5nZW4nO1xuaW1wb3J0IHsgSWNvbkNvbmZpZywgaWNvbkl0ZW0gfSBmcm9tICdhcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2ljb24nO1xuaW1wb3J0IHsgb3B0aW9uQnVpbGRlciB9IGZyb20gJy4uL2NhbnZhcy9lZGl0b3Ivb3B0aW9ucyc7XG5pbXBvcnQgeyBDYW52YXNFbGVtZW50T3B0aW9ucyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMnO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IFBhbmVsUGx1Z2luPFBhbmVsT3B0aW9ucz4oSWNvblBhbmVsKVxuICAuc2V0Tm9QYWRkaW5nKCkgLy8gZXh0ZW5kIHRvIHBhbmVsIGVkZ2VzXG4gIC51c2VGaWVsZENvbmZpZyh7XG4gICAgc3RhbmRhcmRPcHRpb25zOiB7XG4gICAgICBbRmllbGRDb25maWdQcm9wZXJ0eS5NYXBwaW5nc106IHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBpY29uOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICAuc2V0UGFuZWxPcHRpb25zKChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGROZXN0ZWRPcHRpb25zPENhbnZhc0VsZW1lbnRPcHRpb25zPEljb25Db25maWc+Pih7XG4gICAgICBjYXRlZ29yeTogWydJY29uJ10sXG4gICAgICBwYXRoOiAncm9vdCcsXG5cbiAgICAgIC8vIER5bmFtaWNhbGx5IGZpbGwgdGhlIHNlbGVjdGVkIGVsZW1lbnRcbiAgICAgIGJ1aWxkOiAoYnVpbGRlciwgY3R4KSA9PiB7XG4gICAgICAgIGljb25JdGVtLnJlZ2lzdGVyT3B0aW9uc1VJIShidWlsZGVyLCBjdHgpO1xuXG4gICAgICAgIG9wdGlvbkJ1aWxkZXIuYWRkQmFja2dyb3VuZChidWlsZGVyLCBjdHgpO1xuICAgICAgICBvcHRpb25CdWlsZGVyLmFkZEJvcmRlcihidWlsZGVyLCBjdHgpO1xuICAgICAgfSxcblxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0UGFuZWxPcHRpb25zLnJvb3QgYXMgYW55LFxuICAgIH0pO1xuICB9KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCdXR0b24iLCJUZXh0RGltZW5zaW9uRWRpdG9yIiwiQVBJRWRpdG9yIiwiY2FsbEFwaSIsIkJ1dHRvbkRpc3BsYXkiLCJyZW5kZXIiLCJkYXRhIiwicHJvcHMiLCJvbkNsaWNrIiwiYXBpIiwidGV4dCIsImJ1dHRvbkl0ZW0iLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXkiLCJkZWZhdWx0U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0TmV3T3B0aW9ucyIsIm9wdGlvbnMiLCJwcmVwYXJlRGF0YSIsImN0eCIsImNmZyIsImdldFRleHQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInJlZ2lzdGVyT3B0aW9uc1VJIiwiYnVpbGRlciIsImNhdGVnb3J5IiwiYWRkQ3VzdG9tRWRpdG9yIiwicGF0aCIsImVkaXRvciIsImNzcyIsInVzZVN0eWxlczIiLCJTY2FsYXJEaW1lbnNpb25FZGl0b3IiLCJEcm9uZUZyb250RGlzcGxheSIsInN0eWxlcyIsImdldFN0eWxlcyIsImRyb25lRnJvbnRUcmFuc2Zvcm1TdHlsZSIsInJvbGxBbmdsZSIsImRyb25lRnJvbnQiLCJ0cmFuc2Zvcm0iLCJkcm9uZUZyb250SXRlbSIsImdldFNjYWxhciIsInRoZW1lIiwiRHJvbmVTaWRlRGlzcGxheSIsImRyb25lU2lkZVBpdGNoVHJhbnNmb3JtU3R5bGUiLCJwaXRjaEFuZ2xlIiwiZHJvbmVTaWRlIiwiZHJvbmVTaWRlSXRlbSIsIkRyb25lVG9wRGlzcGxheSIsImZSaWdodFJvdG9yQW5pbWF0aW9uIiwiZlJpZ2h0Um90b3JSUE0iLCJNYXRoIiwiYWJzIiwiZkxlZnRSb3RvckFuaW1hdGlvbiIsImZMZWZ0Um90b3JSUE0iLCJiUmlnaHRSb3RvckFuaW1hdGlvbiIsImJSaWdodFJvdG9yUlBNIiwiYkxlZnRSb3RvckFuaW1hdGlvbiIsImJMZWZ0Um90b3JSUE0iLCJkcm9uZVRvcFRyYW5zZm9ybVN0eWxlIiwieWF3QW5nbGUiLCJwcm9wZWxsZXIiLCJwcm9wZWxsZXJDVyIsImFuaW1hdGlvbiIsInByb3BlbGxlckNDVyIsImRyb25lVG9wSXRlbSIsIlJlc291cmNlRGltZW5zaW9uTW9kZSIsImdldFB1YmxpY09yQWJzb2x1dGVVcmwiLCJDb2xvckRpbWVuc2lvbkVkaXRvciIsIlJlc291cmNlRGltZW5zaW9uRWRpdG9yIiwiU1ZHIiwiaXNTdHJpbmciLCJzdmdTdHJva2VQYXRoQ2xhc3MiLCJJY29uRGlzcGxheSIsInN2Z1N0eWxlIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlV2lkdGgiLCJpY29uSXRlbSIsInBsYWNlbWVudCIsImNvbmZpZyIsIm1vZGUiLCJGaXhlZCIsImZpeGVkIiwiZ2V0UmVzb3VyY2UiLCJnZXRDb2xvciIsImNvbG9yIiwic2V0dGluZ3MiLCJyZXNvdXJjZVR5cGUiLCJkZWZhdWx0VmFsdWUiLCJhZGRTbGlkZXJJbnB1dCIsIm1pbiIsIm1heCIsInNob3dJZiIsIkJvb2xlYW4iLCJOb3RGb3VuZERpc3BsYXkiLCJKU09OIiwic3RyaW5naWZ5Iiwibm90Rm91bmRJdGVtIiwic3R5bGVzRmFjdG9yeSIsIkFsaWduIiwiVkFsaWduIiwiVGV4dEJveERpc3BsYXkiLCJ0aGVtZTIiLCJjb250YWluZXIiLCJzcGFuIiwidmFsaWduIiwiYWxpZ24iLCJzaXplIiwidGV4dEJveEl0ZW0iLCJiYWNrZ3JvdW5kIiwiTGVmdCIsIk1pZGRsZSIsIkNlbnRlciIsImFkZFJhZGlvIiwibGFiZWwiLCJSaWdodCIsIlRvcCIsIkJvdHRvbSIsImFkZE51bWJlcklucHV0IiwicGxhY2Vob2xkZXIiLCJXaW5kVHVyYmluZURpc3BsYXkiLCJ3aW5kVHVyYmluZUFuaW1hdGlvbiIsInJwbSIsImJsYWRlIiwid2luZFR1cmJpbmVJdGVtIiwiQ2FudmFzR3JvdXBPcHRpb25zIiwiUmVnaXN0cnkiLCJERUZBVUxUX0NBTlZBU19FTEVNRU5UX0NPTkZJRyIsInR5cGUiLCJjYW52YXNFbGVtZW50UmVnaXN0cnkiLCJCYWNrZ3JvdW5kSW1hZ2VTaXplIiwiY291bnRlciIsIkVsZW1lbnRTdGF0ZSIsImNvbnN0cnVjdG9yIiwiaXRlbSIsInBhcmVudCIsInRhcmdldCIsImRpdiIsImV2ZW50IiwiYW5jaG9yIiwiZGVsdGFYIiwiZGVsdGEiLCJkZWx0YVkiLCJzdHlsZSIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImRpckxSIiwiZGlyZWN0aW9uIiwiZGlyVEIiLCJmYWxsYmFja05hbWUiLCJEYXRlIiwibm93Iiwic2NlbmUiLCJnZXRTY2VuZSIsIm5ld05hbWUiLCJnZXROZXh0RWxlbWVudE5hbWUiLCJieU5hbWUiLCJzZXQiLCJ0cmF2IiwiaXNSb290IiwiZ2V0TmFtZSIsInZhbGlkYXRlUGxhY2VtZW50IiwidyIsImgiLCJ1cGRhdGVTaXplIiwic2l6ZVN0eWxlIiwicG9zaXRpb24iLCJ1cGRhdGVEYXRhIiwicmV2SWQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWFnZSIsInYiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJDb250YWluIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiQ292ZXIiLCJPcmlnaW5hbCIsIlRpbGUiLCJGaWxsIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZE9yaWdpbiIsImRhdGFTdHlsZSIsInZpc2l0IiwidmlzaXRvciIsIm9uQ2hhbmdlIiwiZ2V0SWZFeGlzdHMiLCJvbGROYW1lIiwic2F2ZSIsImRlbGV0ZSIsImdldFNhdmVNb2RlbCIsImluaXRFbGVtZW50IiwiVUlEIiwidXNlQ2FsbGJhY2siLCJJbmxpbmVGaWVsZCIsIklubGluZUZpZWxkUm93IiwiSlNPTkZvcm1hdHRlciIsIlN0cmluZ1ZhbHVlRWRpdG9yIiwiQXBwRXZlbnRzIiwiZ2V0QmFja2VuZFNydiIsImFwcEV2ZW50cyIsImR1bW15U3RyaW5nU2V0dGluZ3MiLCJpc1Rlc3QiLCJmZXRjaCIsInVybCIsImVuZHBvaW50IiwibWV0aG9kIiwic3Vic2NyaWJlIiwiZXJyb3IiLCJlbWl0IiwiYWxlcnRFcnJvciIsImNvbnNvbGUiLCJjb21wbGV0ZSIsImFsZXJ0U3VjY2VzcyIsImNvbnRleHQiLCJsYWJlbFdpZHRoIiwib25FbmRwb2ludENoYW5nZSIsIm9uRGF0YUNoYW5nZSIsInJlbmRlckpTT04iLCJqc29uIiwicGFyc2UiLCJtZXNzYWdlIiwicmVuZGVyVGVzdEFQSUJ1dHRvbiIsImRpc2FibGVTYW5pdGl6ZUh0bWwiLCJvcHRpb25CdWlsZGVyIiwiYWRkQmFja2dyb3VuZCIsImFkZEJvcmRlciIsIkNvbXBvbmVudCIsImdldENvbG9yRGltZW5zaW9uRnJvbURhdGEiLCJnZXRSZXNvdXJjZURpbWVuc2lvbkZyb21EYXRhIiwiZ2V0U2NhbGFyRGltZW5zaW9uRnJvbURhdGEiLCJnZXRTY2FsZURpbWVuc2lvbkZyb21EYXRhIiwiZ2V0VGV4dERpbWVuc2lvbkZyb21EYXRhIiwiSWNvblBhbmVsIiwiZWxlbWVudCIsInJvb3QiLCJkaW1zIiwiZ2V0U2NhbGUiLCJzY2FsZSIsInNjYWxhciIsInJlcyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsImNoYW5nZWQiLCJvdmVyZmxvdyIsImRlZmF1bHRQYW5lbE9wdGlvbnMiLCJGaWVsZENvbmZpZ1Byb3BlcnR5IiwiUGFuZWxQbHVnaW4iLCJwbHVnaW4iLCJzZXROb1BhZGRpbmciLCJ1c2VGaWVsZENvbmZpZyIsInN0YW5kYXJkT3B0aW9ucyIsIk1hcHBpbmdzIiwiaWNvbiIsInNldFBhbmVsT3B0aW9ucyIsImFkZE5lc3RlZE9wdGlvbnMiLCJidWlsZCJdLCJzb3VyY2VSb290IjoiIn0=
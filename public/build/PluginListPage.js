"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PluginListPage"],{

/***/ "./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* binding */ PluginDisabledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginDisabledBadge({
  error
}) {
  const tooltip = errorCodeToTooltip(error);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
    icon: "exclamation-triangle",
    text: "Disabled",
    color: "red",
    tooltip: tooltip
  });
}

function errorCodeToTooltip(error) {
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return 'Plugin disabled due to modified content';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
      return 'Plugin disabled due to invalid plugin signature';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
      return 'Plugin disabled due to missing plugin signature';

    default:
      return `Plugin disabled due to unkown error: ${error}`;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginEnterpriseBadge": () => (/* binding */ PluginEnterpriseBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge;







function PluginEnterpriseBadge({
  plugin
}) {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_2__.getBadgeColor);

  const onClick = ev => {
    ev.preventDefault();
    window.open(`https://grafana.com/grafana/plugins/${plugin.id}?utm_source=grafana_catalog_learn_more`, '_blank', 'noopener,noreferrer');
  };

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.featureEnabled)('enterprise.plugins')) {
    return _Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
      text: "Enterprise",
      color: "blue"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.PluginSignatureBadge, {
      status: plugin.signature
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
      icon: "lock",
      "aria-label": "lock icon",
      text: "Enterprise",
      color: "blue",
      className: customBadgeStyles
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      size: "sm",
      fill: "text",
      icon: "external-link-alt",
      onClick: onClick,
      children: "Learn more"
    })]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginInstalledBadge": () => (/* binding */ PluginInstalledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginInstalledBadge() {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_2__.getBadgeColor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
    text: "Installed",
    color: "orange",
    className: customBadgeStyles
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* binding */ PluginUpdateAvailableBadge),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PluginUpdateAvailableBadge({
  plugin
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles); // Currently renderer plugins are not supported by the catalog due to complications related to installation / update / uninstall.

  if (plugin.hasUpdate && !plugin.isCore && plugin.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginType.renderer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: styles.hasUpdate,
      children: "Update available!"
    });
  }

  return null;
}
const getStyles = theme => {
  return {
    hasUpdate: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* reexport safe */ _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__.PluginDisabledBadge),
/* harmony export */   "PluginEnterpriseBadge": () => (/* reexport safe */ _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__.PluginEnterpriseBadge),
/* harmony export */   "PluginInstalledBadge": () => (/* reexport safe */ _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__.PluginInstalledBadge),
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* reexport safe */ _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__.PluginUpdateAvailableBadge)
/* harmony export */ });
/* harmony import */ var _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx");
/* harmony import */ var _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx");
/* harmony import */ var _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx");
/* harmony import */ var _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx");





/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/sharedStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBadgeColor": () => (/* binding */ getBadgeColor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getBadgeColor = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  background: ${theme.colors.background.primary};
  border-color: ${theme.colors.border.strong};
  color: ${theme.colors.text.secondary};
`;

/***/ }),

/***/ "./public/app/features/plugins/admin/components/HorizontalGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalGroup": () => (/* binding */ HorizontalGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const HorizontalGroup = ({
  children,
  wrap,
  className
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = getStyles(theme, wrap);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, className),
    children: children
  });
};

const getStyles = (theme, wrap) => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};
    & > * {
      margin-bottom: ${theme.spacing()};
      margin-right: ${theme.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Page.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Page = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "page-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles,
      children: children
    })
  });
};

const getStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-bottom: ${theme.spacing(3)};
  `;

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginList": () => (/* binding */ PluginList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _PluginListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginListItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const PluginList = ({
  plugins,
  displayMode
}) => {
  const isList = displayMode === _types__WEBPACK_IMPORTED_MODULE_3__.PluginListDisplayMode.List;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, {
      [styles.list]: isList
    }),
    "data-testid": "plugin-list",
    children: plugins.map(plugin => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PluginListItem__WEBPACK_IMPORTED_MODULE_4__.PluginListItem, {
      plugin: plugin,
      pathName: location.pathname,
      displayMode: displayMode
    }, plugin.id))
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${theme.spacing(3)};
    `,
    list: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      grid-template-columns: 1fr;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGO_SIZE": () => (/* binding */ LOGO_SIZE),
/* harmony export */   "PluginListItem": () => (/* binding */ PluginListItem),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _PluginListItemBadges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginListItemBadges.tsx");
/* harmony import */ var _PluginLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginLogo.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const LOGO_SIZE = '48px';
function PluginListItem({
  plugin,
  pathName,
  displayMode = _types__WEBPACK_IMPORTED_MODULE_2__.PluginListDisplayMode.Grid
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const isList = displayMode === _types__WEBPACK_IMPORTED_MODULE_2__.PluginListDisplayMode.List;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
    href: `${pathName}/${plugin.id}`,
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, {
      [styles.list]: isList
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PluginLogo__WEBPACK_IMPORTED_MODULE_4__.PluginLogo, {
      src: plugin.info.logos.small,
      className: styles.pluginLogo,
      height: LOGO_SIZE,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.name, 'plugin-name'),
      children: plugin.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.content, 'plugin-content'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        children: ["By ", plugin.orgName]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PluginListItemBadges__WEBPACK_IMPORTED_MODULE_3__.PluginListItemBadges, {
        plugin: plugin
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.pluginType,
      children: plugin.type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
        name: _types__WEBPACK_IMPORTED_MODULE_2__.PluginIconName[plugin.type],
        title: `${plugin.type} plugin`
      })
    })]
  });
} // Styles shared between the different type of list items

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: grid;
      grid-template-columns: ${LOGO_SIZE} 1fr ${theme.spacing(3)};
      grid-template-rows: auto;
      gap: ${theme.spacing(2)};
      grid-auto-flow: row;
      background: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
      padding: ${theme.spacing(3)};
      transition: ${theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
      duration: theme.transitions.duration.short
    })};

      &:hover {
        background: ${theme.colors.emphasize(theme.colors.background.secondary, 0.03)};
      }
    `,
    list: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${theme.spacing(0, 0, 0.5, 0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,
    pluginType: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${theme.colors.text.secondary};
    `,
    pluginLogo: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${theme.colors.text.secondary};
    `,
    name: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${theme.typography.h4.fontSize};
      color: ${theme.colors.text.primary};
      margin: 0;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginListItemBadges.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginListItemBadges": () => (/* binding */ PluginListItemBadges)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _Badges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _PluginInstalledBadge;






function PluginListItemBadges({
  plugin
}) {
  var _PluginEnterpriseBadg, _PluginUpdateAvailabl;

  if (plugin.isEnterprise) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      height: "auto",
      wrap: true,
      children: [_PluginEnterpriseBadg || (_PluginEnterpriseBadg = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginEnterpriseBadge, {
        plugin: plugin
      })), plugin.isDisabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginDisabledBadge, {
        error: plugin.error
      }), _PluginUpdateAvailabl || (_PluginUpdateAvailabl = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginUpdateAvailableBadge, {
        plugin: plugin
      }))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
    height: "auto",
    wrap: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.PluginSignatureBadge, {
      status: plugin.signature
    }), plugin.isDisabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginDisabledBadge, {
      error: plugin.error
    }), plugin.isInstalled && (_PluginInstalledBadge || (_PluginInstalledBadge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginInstalledBadge, {}))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginUpdateAvailableBadge, {
      plugin: plugin
    })]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginLogo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginLogo": () => (/* binding */ PluginLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


function PluginLogo({
  alt,
  className,
  src,
  height
}) {
  // @ts-ignore - react doesn't know about loading attr.
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    src: src,
    className: className,
    alt: alt,
    loading: "lazy",
    height: height
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/SearchField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchField": () => (/* binding */ SearchField)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





// useDebounce has a bug which causes it to fire on first render. This wrapper prevents that.
// https://github.com/streamich/react-use/issues/759
const useDebounceWithoutFirstRender = (callBack, delay = 0, deps = []) => {
  const isFirstRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  const debounceDeps = [...deps, isFirstRender];
  return (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return callBack();
  }, delay, debounceDeps);
};

const SearchField = ({
  value,
  onSearch
}) => {
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  useDebounceWithoutFirstRender(() => onSearch(query !== null && query !== void 0 ? query : ''), 500, [query]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.FilterInput, {
    value: query,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        onSearch(e.currentTarget.value);
      }
    },
    placeholder: "Search Grafana plugins",
    onChange: value => {
      setQuery(value);
    },
    width: 46
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/hooks/useHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHistory": () => (/* binding */ useHistory)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

const useHistory = () => {
  return {
    push: ({
      query
    }) => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial(query);
    }
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/pages/Browse.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Browse)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _components_PluginList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginList.tsx");
/* harmony import */ var _components_SearchField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/components/SearchField.tsx");
/* harmony import */ var _hooks_useHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/hooks/useHistory.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/Page.tsx");
/* harmony import */ var _components_HorizontalGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/components/HorizontalGroup.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


















function Browse({
  route
}) {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useLocation)();
  const locationSearch = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationSearchToObject)(location.search);
  const navModelId = getNavModelId(route.routeName);
  const navModel = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(state => (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_12__.getNavModel)(state.navIndex, navModelId));
  const {
    displayMode,
    setDisplayMode
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_13__.useDisplayMode)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const history = (0,_hooks_useHistory__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  const remotePluginsAvailable = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_13__.useIsRemotePluginsAvailable)();
  const query = locationSearch.q || '';
  const filterBy = locationSearch.filterBy || 'installed';
  const filterByType = locationSearch.filterByType || 'all';
  const sortBy = locationSearch.sortBy || _helpers__WEBPACK_IMPORTED_MODULE_14__.Sorters.nameAsc;
  const {
    isLoading,
    error,
    plugins
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_13__.useGetAllWithFilters)({
    query,
    filterBy,
    filterByType,
    sortBy
  });
  const filterByOptions = [{
    value: 'all',
    label: 'All'
  }, {
    value: 'installed',
    label: 'Installed'
  }];

  const onSortByChange = value => {
    history.push({
      query: {
        sortBy: value.value
      }
    });
  };

  const onFilterByChange = value => {
    history.push({
      query: {
        filterBy: value
      }
    });
  };

  const onFilterByTypeChange = value => {
    history.push({
      query: {
        filterByType: value
      }
    });
  };

  const onSearch = q => {
    history.push({
      query: {
        filterBy: 'all',
        filterByType: 'all',
        q
      }
    });
  }; // How should we handle errors?


  if (error) {
    console.error(error.message);
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__.Page, {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__.Page.Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_8__.Page, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_HorizontalGroup__WEBPACK_IMPORTED_MODULE_9__.HorizontalGroup, {
          wrap: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_SearchField__WEBPACK_IMPORTED_MODULE_5__.SearchField, {
            value: query,
            onSearch: onSearch
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_HorizontalGroup__WEBPACK_IMPORTED_MODULE_9__.HorizontalGroup, {
            wrap: true,
            className: styles.actionBar,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
                value: filterByType,
                onChange: onFilterByTypeChange,
                options: [{
                  value: 'all',
                  label: 'All'
                }, {
                  value: 'datasource',
                  label: 'Data sources'
                }, {
                  value: 'panel',
                  label: 'Panels'
                }, {
                  value: 'app',
                  label: 'Applications'
                }]
              })
            }), remotePluginsAvailable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
                value: filterBy,
                onChange: onFilterByChange,
                options: filterByOptions
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
              content: "This filter has been disabled because the Grafana server cannot access grafana.com",
              placement: "top",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
                  disabled: true,
                  value: filterBy,
                  onChange: onFilterByChange,
                  options: filterByOptions
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
                menuShouldPortal: true,
                "aria-label": "Sort Plugins List",
                width: 24,
                value: sortBy,
                onChange: onSortByChange,
                options: [{
                  value: 'nameAsc',
                  label: 'Sort by name (A-Z)'
                }, {
                  value: 'nameDesc',
                  label: 'Sort by name (Z-A)'
                }, {
                  value: 'updated',
                  label: 'Sort by updated date'
                }, {
                  value: 'published',
                  label: 'Sort by published date'
                }, {
                  value: 'downloads',
                  label: 'Sort by downloads'
                }]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
                className: styles.displayAs,
                value: displayMode,
                onChange: setDisplayMode,
                options: [{
                  value: _types__WEBPACK_IMPORTED_MODULE_7__.PluginListDisplayMode.Grid,
                  icon: 'table',
                  description: 'Display plugins in a grid layout'
                }, {
                  value: _types__WEBPACK_IMPORTED_MODULE_7__.PluginListDisplayMode.List,
                  icon: 'list-ul',
                  description: 'Display plugins in list'
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          className: styles.listWrap,
          children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
            className: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
                  margin-bottom: 0;
                `,
            text: "Loading results"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PluginList__WEBPACK_IMPORTED_MODULE_4__.PluginList, {
            plugins: plugins,
            displayMode: displayMode
          })
        })]
      })
    })
  });
}

const getStyles = theme => ({
  actionBar: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    ${theme.breakpoints.up('xl')} {
      margin-left: auto;
    }
  `,
  listWrap: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-top: ${theme.spacing(2)};
  `,
  displayAs: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    svg {
      margin-right: 0;
    }
  `
}); // Because the component is used under multiple paths (/plugins and /admin/plugins) we need to get
// the correct navModel from the store


const getNavModelId = routeName => {
  if (routeName === _types__WEBPACK_IMPORTED_MODULE_7__.PluginAdminRoutes.HomeAdmin || routeName === _types__WEBPACK_IMPORTED_MODULE_7__.PluginAdminRoutes.BrowseAdmin) {
    return 'admin-plugins';
  }

  return 'plugins';
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisplayMode": () => (/* binding */ useDisplayMode),
/* harmony export */   "useFetchAll": () => (/* binding */ useFetchAll),
/* harmony export */   "useFetchDetails": () => (/* binding */ useFetchDetails),
/* harmony export */   "useFetchDetailsStatus": () => (/* binding */ useFetchDetailsStatus),
/* harmony export */   "useFetchStatus": () => (/* binding */ useFetchStatus),
/* harmony export */   "useGetAll": () => (/* binding */ useGetAll),
/* harmony export */   "useGetAllWithFilters": () => (/* binding */ useGetAllWithFilters),
/* harmony export */   "useGetErrors": () => (/* binding */ useGetErrors),
/* harmony export */   "useGetSingle": () => (/* binding */ useGetSingle),
/* harmony export */   "useInstall": () => (/* binding */ useInstall),
/* harmony export */   "useInstallStatus": () => (/* binding */ useInstallStatus),
/* harmony export */   "useIsRemotePluginsAvailable": () => (/* binding */ useIsRemotePluginsAvailable),
/* harmony export */   "useUninstall": () => (/* binding */ useUninstall),
/* harmony export */   "useUninstallStatus": () => (/* binding */ useUninstallStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/state/selectors.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");






const useGetAllWithFilters = ({
  query = '',
  filterBy = 'installed',
  filterByType = 'all',
  sortBy = _helpers__WEBPACK_IMPORTED_MODULE_5__.Sorters.nameAsc
}) => {
  useFetchAll();
  const filtered = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.find)(query, filterBy, filterByType));
  const {
    isLoading,
    error
  } = useFetchStatus();
  const sortedAndFiltered = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.sortPlugins)(filtered, sortBy);
  return {
    isLoading,
    error,
    plugins: sortedAndFiltered
  };
};
const useGetAll = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAll);
};
const useGetSingle = id => {
  useFetchAll();
  useFetchDetails(id);
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectById)(state, id));
};
const useGetErrors = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPluginErrors);
};
const useInstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (id, version, isUpdating) => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.install)({
    id,
    version,
    isUpdating
  }));
};
const useUninstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return id => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall)(id));
};
const useIsRemotePluginsAvailable = () => {
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchRemotePlugins.typePrefix));
  return error === null;
};
const useFetchStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  return {
    isLoading,
    error
  };
};
const useFetchDetailsStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  return {
    isLoading,
    error
  };
};
const useInstallStatus = () => {
  const isInstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  return {
    isInstalling,
    error
  };
};
const useUninstallStatus = () => {
  const isUninstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  return {
    isUninstalling,
    error
  };
}; // Only fetches in case they were not fetched yet

const useFetchAll = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isNotFetched = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestNotFetched)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isNotFetched && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll)());
  }, []); // eslint-disable-line
};
const useFetchDetails = id => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const plugin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectById)(state, id));
  const isNotFetching = !(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const shouldFetch = isNotFetching && plugin && !plugin.details;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    shouldFetch && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails)(id));
  }, [plugin]); // eslint-disable-line
};
const useDisplayMode = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const displayMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_4__.selectDisplayMode);
  return {
    displayMode,
    setDisplayMode: v => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_2__.setDisplayMode)(v))
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectById": () => (/* binding */ selectById),
/* harmony export */   "selectDisplayMode": () => (/* binding */ selectDisplayMode),
/* harmony export */   "selectIsRequestNotFetched": () => (/* binding */ selectIsRequestNotFetched),
/* harmony export */   "selectIsRequestPending": () => (/* binding */ selectIsRequestPending),
/* harmony export */   "selectItems": () => (/* binding */ selectItems),
/* harmony export */   "selectPluginErrors": () => (/* binding */ selectPluginErrors),
/* harmony export */   "selectRequest": () => (/* binding */ selectRequest),
/* harmony export */   "selectRequestError": () => (/* binding */ selectRequestError),
/* harmony export */   "selectRoot": () => (/* binding */ selectRoot)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");



const selectRoot = state => state.plugins;
const selectItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  items
}) => items);
const selectDisplayMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  settings
}) => settings.displayMode);
const {
  selectAll,
  selectById
} = _reducer__WEBPACK_IMPORTED_MODULE_1__.pluginsAdapter.getSelectors(selectItems);

const selectInstalled = filterBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins.filter(plugin => filterBy === 'installed' ? plugin.isInstalled : !plugin.isCore));

const findByInstallAndType = (filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectInstalled(filterBy), plugins => plugins.filter(plugin => filterByType === 'all' || plugin.type === filterByType));

const findByKeyword = searchBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => {
  if (searchBy === '') {
    return [];
  }

  return plugins.filter(plugin => {
    const fields = [];

    if (plugin.name) {
      fields.push(plugin.name.toLowerCase());
    }

    if (plugin.orgName) {
      fields.push(plugin.orgName.toLowerCase());
    }

    return fields.some(f => f.includes(searchBy.toLowerCase()));
  });
});

const find = (searchBy, filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(findByInstallAndType(filterBy, filterByType), findByKeyword(searchBy), (filteredPlugins, searchedPlugins) => {
  return searchBy === '' ? filteredPlugins : searchedPlugins;
});
const selectPluginErrors = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins ? plugins.filter(p => Boolean(p.error)).map(p => ({
  pluginId: p.id,
  errorCode: p.error
})) : []); // The following selectors are used to get information about the outstanding or completed plugins-related network requests.

const selectRequest = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  requests = {}
}) => requests[actionType]);
const selectIsRequestPending = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Pending);
const selectRequestError = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Rejected ? request === null || request === void 0 ? void 0 : request.error : null);
const selectIsRequestNotFetched = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => request === undefined);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvUGx1Z2luRGlzYWJsZWRCYWRnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0JhZGdlcy9QbHVnaW5FbnRlcnByaXNlQmFkZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvUGx1Z2luSW5zdGFsbEJhZGdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL1BsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL2luZGV4LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvc2hhcmVkU3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9Ib3Jpem9udGFsR3JvdXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BsdWdpbkxpc3RJdGVtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luTGlzdEl0ZW1CYWRnZXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5Mb2dvLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvU2VhcmNoRmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vaG9va3MvdXNlSGlzdG9yeS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9wYWdlcy9Ccm93c2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vc3RhdGUvaG9va3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9zdGF0ZS9zZWxlY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBsdWdpbkVycm9yQ29kZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbnR5cGUgUHJvcHMgPSB7IGVycm9yPzogUGx1Z2luRXJyb3JDb2RlIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5EaXNhYmxlZEJhZGdlKHsgZXJyb3IgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB0b29sdGlwID0gZXJyb3JDb2RlVG9Ub29sdGlwKGVycm9yKTtcbiAgcmV0dXJuIDxCYWRnZSBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiB0ZXh0PVwiRGlzYWJsZWRcIiBjb2xvcj1cInJlZFwiIHRvb2x0aXA9e3Rvb2x0aXB9IC8+O1xufVxuXG5mdW5jdGlvbiBlcnJvckNvZGVUb1Rvb2x0aXAoZXJyb3I/OiBQbHVnaW5FcnJvckNvZGUpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubW9kaWZpZWRTaWduYXR1cmU6XG4gICAgICByZXR1cm4gJ1BsdWdpbiBkaXNhYmxlZCBkdWUgdG8gbW9kaWZpZWQgY29udGVudCc7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUuaW52YWxpZFNpZ25hdHVyZTpcbiAgICAgIHJldHVybiAnUGx1Z2luIGRpc2FibGVkIGR1ZSB0byBpbnZhbGlkIHBsdWdpbiBzaWduYXR1cmUnO1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1pc3NpbmdTaWduYXR1cmU6XG4gICAgICByZXR1cm4gJ1BsdWdpbiBkaXNhYmxlZCBkdWUgdG8gbWlzc2luZyBwbHVnaW4gc2lnbmF0dXJlJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGBQbHVnaW4gZGlzYWJsZWQgZHVlIHRvIHVua293biBlcnJvcjogJHtlcnJvcn1gO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFkZ2UsIEJ1dHRvbiwgSG9yaXpvbnRhbEdyb3VwLCBQbHVnaW5TaWduYXR1cmVCYWRnZSwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRCYWRnZUNvbG9yIH0gZnJvbSAnLi9zaGFyZWRTdHlsZXMnO1xuaW1wb3J0IHsgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxudHlwZSBQcm9wcyA9IHsgcGx1Z2luOiBDYXRhbG9nUGx1Z2luIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5FbnRlcnByaXNlQmFkZ2UoeyBwbHVnaW4gfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjdXN0b21CYWRnZVN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0QmFkZ2VDb2xvcik7XG4gIGNvbnN0IG9uQ2xpY2sgPSAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB3aW5kb3cub3BlbihcbiAgICAgIGBodHRwczovL2dyYWZhbmEuY29tL2dyYWZhbmEvcGx1Z2lucy8ke3BsdWdpbi5pZH0/dXRtX3NvdXJjZT1ncmFmYW5hX2NhdGFsb2dfbGVhcm5fbW9yZWAsXG4gICAgICAnX2JsYW5rJyxcbiAgICAgICdub29wZW5lcixub3JlZmVycmVyJ1xuICAgICk7XG4gIH07XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdlbnRlcnByaXNlLnBsdWdpbnMnKSkge1xuICAgIHJldHVybiA8QmFkZ2UgdGV4dD1cIkVudGVycHJpc2VcIiBjb2xvcj1cImJsdWVcIiAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgIDxQbHVnaW5TaWduYXR1cmVCYWRnZSBzdGF0dXM9e3BsdWdpbi5zaWduYXR1cmV9IC8+XG4gICAgICA8QmFkZ2UgaWNvbj1cImxvY2tcIiBhcmlhLWxhYmVsPVwibG9jayBpY29uXCIgdGV4dD1cIkVudGVycHJpc2VcIiBjb2xvcj1cImJsdWVcIiBjbGFzc05hbWU9e2N1c3RvbUJhZGdlU3R5bGVzfSAvPlxuICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBmaWxsPVwidGV4dFwiIGljb249XCJleHRlcm5hbC1saW5rLWFsdFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICBMZWFybiBtb3JlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0hvcml6b250YWxHcm91cD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYWRnZSwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldEJhZGdlQ29sb3IgfSBmcm9tICcuL3NoYXJlZFN0eWxlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5JbnN0YWxsZWRCYWRnZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjdXN0b21CYWRnZVN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0QmFkZ2VDb2xvcik7XG4gIHJldHVybiA8QmFkZ2UgdGV4dD1cIkluc3RhbGxlZFwiIGNvbG9yPVwib3JhbmdlXCIgY2xhc3NOYW1lPXtjdXN0b21CYWRnZVN0eWxlc30gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luVXBkYXRlQXZhaWxhYmxlQmFkZ2UoeyBwbHVnaW4gfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIC8vIEN1cnJlbnRseSByZW5kZXJlciBwbHVnaW5zIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBjYXRhbG9nIGR1ZSB0byBjb21wbGljYXRpb25zIHJlbGF0ZWQgdG8gaW5zdGFsbGF0aW9uIC8gdXBkYXRlIC8gdW5pbnN0YWxsLlxuICBpZiAocGx1Z2luLmhhc1VwZGF0ZSAmJiAhcGx1Z2luLmlzQ29yZSAmJiBwbHVnaW4udHlwZSAhPT0gUGx1Z2luVHlwZS5yZW5kZXJlcikge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9e3N0eWxlcy5oYXNVcGRhdGV9PlVwZGF0ZSBhdmFpbGFibGUhPC9wPjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaGFzVXBkYXRlOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJleHBvcnQgeyBQbHVnaW5EaXNhYmxlZEJhZGdlIH0gZnJvbSAnLi9QbHVnaW5EaXNhYmxlZEJhZGdlJztcbmV4cG9ydCB7IFBsdWdpbkluc3RhbGxlZEJhZGdlIH0gZnJvbSAnLi9QbHVnaW5JbnN0YWxsQmFkZ2UnO1xuZXhwb3J0IHsgUGx1Z2luRW50ZXJwcmlzZUJhZGdlIH0gZnJvbSAnLi9QbHVnaW5FbnRlcnByaXNlQmFkZ2UnO1xuZXhwb3J0IHsgUGx1Z2luVXBkYXRlQXZhaWxhYmxlQmFkZ2UgfSBmcm9tICcuL1BsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlJztcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBnZXRCYWRnZUNvbG9yID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiBjc3NgXG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYm9yZGVyLnN0cm9uZ307XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmludGVyZmFjZSBIb3Jpem9udGFsR3JvdXBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHdyYXA/OiBib29sZWFuO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBIb3Jpem9udGFsR3JvdXAgPSAoeyBjaGlsZHJlbiwgd3JhcCwgY2xhc3NOYW1lIH06IEhvcml6b250YWxHcm91cFByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh0aGVtZSwgd3JhcCk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGFpbmVyLCBjbGFzc05hbWUpfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyLCB3cmFwPzogYm9vbGVhbikgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogJHt3cmFwID8gJ3dyYXAnIDogJ25vLXdyYXAnfTtcbiAgICAmID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoKX07XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygpfTtcbiAgICB9XG4gICAgJiA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT5cbiAgY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygzKX07XG4gIGA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4sIFBsdWdpbkxpc3REaXNwbGF5TW9kZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFBsdWdpbkxpc3RJdGVtIH0gZnJvbSAnLi9QbHVnaW5MaXN0SXRlbSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBsdWdpbnM6IENhdGFsb2dQbHVnaW5bXTtcbiAgZGlzcGxheU1vZGU6IFBsdWdpbkxpc3REaXNwbGF5TW9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IFBsdWdpbkxpc3QgPSAoeyBwbHVnaW5zLCBkaXNwbGF5TW9kZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBpc0xpc3QgPSBkaXNwbGF5TW9kZSA9PT0gUGx1Z2luTGlzdERpc3BsYXlNb2RlLkxpc3Q7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250YWluZXIsIHsgW3N0eWxlcy5saXN0XTogaXNMaXN0IH0pfSBkYXRhLXRlc3RpZD1cInBsdWdpbi1saXN0XCI+XG4gICAgICB7cGx1Z2lucy5tYXAoKHBsdWdpbikgPT4gKFxuICAgICAgICA8UGx1Z2luTGlzdEl0ZW0ga2V5PXtwbHVnaW4uaWR9IHBsdWdpbj17cGx1Z2lufSBwYXRoTmFtZT17bG9jYXRpb24ucGF0aG5hbWV9IGRpc3BsYXlNb2RlPXtkaXNwbGF5TW9kZX0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjg4cHgsIDFmcikpO1xuICAgICAgZ2FwOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgIGAsXG4gICAgbGlzdDogY3NzYFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luLCBQbHVnaW5JY29uTmFtZSwgUGx1Z2luTGlzdERpc3BsYXlNb2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGx1Z2luTGlzdEl0ZW1CYWRnZXMgfSBmcm9tICcuL1BsdWdpbkxpc3RJdGVtQmFkZ2VzJztcbmltcG9ydCB7IFBsdWdpbkxvZ28gfSBmcm9tICcuL1BsdWdpbkxvZ28nO1xuaW1wb3J0IHsgSWNvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGNvbnN0IExPR09fU0laRSA9ICc0OHB4JztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xuICBwYXRoTmFtZTogc3RyaW5nO1xuICBkaXNwbGF5TW9kZT86IFBsdWdpbkxpc3REaXNwbGF5TW9kZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5MaXN0SXRlbSh7IHBsdWdpbiwgcGF0aE5hbWUsIGRpc3BsYXlNb2RlID0gUGx1Z2luTGlzdERpc3BsYXlNb2RlLkdyaWQgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBpc0xpc3QgPSBkaXNwbGF5TW9kZSA9PT0gUGx1Z2luTGlzdERpc3BsYXlNb2RlLkxpc3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtgJHtwYXRoTmFtZX0vJHtwbHVnaW4uaWR9YH0gY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGFpbmVyLCB7IFtzdHlsZXMubGlzdF06IGlzTGlzdCB9KX0+XG4gICAgICA8UGx1Z2luTG9nbyBzcmM9e3BsdWdpbi5pbmZvLmxvZ29zLnNtYWxsfSBjbGFzc05hbWU9e3N0eWxlcy5wbHVnaW5Mb2dvfSBoZWlnaHQ9e0xPR09fU0laRX0gYWx0PVwiXCIgLz5cbiAgICAgIDxoMiBjbGFzc05hbWU9e2N4KHN0eWxlcy5uYW1lLCAncGx1Z2luLW5hbWUnKX0+e3BsdWdpbi5uYW1lfTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRlbnQsICdwbHVnaW4tY29udGVudCcpfT5cbiAgICAgICAgPHA+Qnkge3BsdWdpbi5vcmdOYW1lfTwvcD5cbiAgICAgICAgPFBsdWdpbkxpc3RJdGVtQmFkZ2VzIHBsdWdpbj17cGx1Z2lufSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsdWdpblR5cGV9PlxuICAgICAgICB7cGx1Z2luLnR5cGUgJiYgPEljb24gbmFtZT17UGx1Z2luSWNvbk5hbWVbcGx1Z2luLnR5cGVdfSB0aXRsZT17YCR7cGx1Z2luLnR5cGV9IHBsdWdpbmB9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICApO1xufVxuXG4vLyBTdHlsZXMgc2hhcmVkIGJldHdlZW4gdGhlIGRpZmZlcmVudCB0eXBlIG9mIGxpc3QgaXRlbXNcbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7TE9HT19TSVpFfSAxZnIgJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgIGdhcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2JhY2tncm91bmQtY29sb3InLCAnYm94LXNoYWRvdycsICdib3JkZXItY29sb3InLCAnY29sb3InXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnQsXG4gICAgICB9KX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5lbXBoYXNpemUodGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5LCAwLjAzKX07XG4gICAgICB9XG4gICAgYCxcbiAgICBsaXN0OiBjc3NgXG4gICAgICByb3ctZ2FwOiAwcHg7XG5cbiAgICAgID4gaW1nIHtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgID4gLnBsdWdpbi1jb250ZW50IHtcbiAgICAgICAgbWluLWhlaWdodDogMHB4O1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gNCAvIDM7XG5cbiAgICAgICAgPiBwIHtcbiAgICAgICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygwLCAwLCAwLjUsIDApfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA+IC5wbHVnaW4tbmFtZSB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICAgICAgfVxuICAgIGAsXG4gICAgcGx1Z2luVHlwZTogY3NzYFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBgLFxuICAgIHBsdWdpbkxvZ286IGNzc2BcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYCxcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIGAsXG4gICAgbmFtZTogY3NzYFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDQuZm9udFNpemV9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gICAgICBtYXJnaW46IDA7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBQbHVnaW5TaWduYXR1cmVCYWRnZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnRlcnByaXNlQmFkZ2UsIFBsdWdpbkRpc2FibGVkQmFkZ2UsIFBsdWdpbkluc3RhbGxlZEJhZGdlLCBQbHVnaW5VcGRhdGVBdmFpbGFibGVCYWRnZSB9IGZyb20gJy4vQmFkZ2VzJztcblxudHlwZSBQbHVnaW5CYWRnZVR5cGUgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5MaXN0SXRlbUJhZGdlcyh7IHBsdWdpbiB9OiBQbHVnaW5CYWRnZVR5cGUpIHtcbiAgaWYgKHBsdWdpbi5pc0VudGVycHJpc2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBoZWlnaHQ9XCJhdXRvXCIgd3JhcD5cbiAgICAgICAgPFBsdWdpbkVudGVycHJpc2VCYWRnZSBwbHVnaW49e3BsdWdpbn0gLz5cbiAgICAgICAge3BsdWdpbi5pc0Rpc2FibGVkICYmIDxQbHVnaW5EaXNhYmxlZEJhZGdlIGVycm9yPXtwbHVnaW4uZXJyb3J9IC8+fVxuICAgICAgICA8UGx1Z2luVXBkYXRlQXZhaWxhYmxlQmFkZ2UgcGx1Z2luPXtwbHVnaW59IC8+XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SG9yaXpvbnRhbEdyb3VwIGhlaWdodD1cImF1dG9cIiB3cmFwPlxuICAgICAgPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz5cbiAgICAgIHtwbHVnaW4uaXNEaXNhYmxlZCAmJiA8UGx1Z2luRGlzYWJsZWRCYWRnZSBlcnJvcj17cGx1Z2luLmVycm9yfSAvPn1cbiAgICAgIHtwbHVnaW4uaXNJbnN0YWxsZWQgJiYgPFBsdWdpbkluc3RhbGxlZEJhZGdlIC8+fVxuICAgICAgPFBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlIHBsdWdpbj17cGx1Z2lufSAvPlxuICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQbHVnaW5Mb2dvUHJvcHMgPSB7XG4gIGFsdDogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHNyYzogc3RyaW5nO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luTG9nbyh7IGFsdCwgY2xhc3NOYW1lLCBzcmMsIGhlaWdodCB9OiBQbHVnaW5Mb2dvUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAvLyBAdHMtaWdub3JlIC0gcmVhY3QgZG9lc24ndCBrbm93IGFib3V0IGxvYWRpbmcgYXR0ci5cbiAgcmV0dXJuIDxpbWcgc3JjPXtzcmN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhbHQ9e2FsdH0gbG9hZGluZz1cImxhenlcIiBoZWlnaHQ9e2hlaWdodH0gLz47XG59XG4iLCJpbXBvcnQgeyBGaWx0ZXJJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZT86IHN0cmluZztcbiAgb25TZWFyY2g6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG4vLyB1c2VEZWJvdW5jZSBoYXMgYSBidWcgd2hpY2ggY2F1c2VzIGl0IHRvIGZpcmUgb24gZmlyc3QgcmVuZGVyLiBUaGlzIHdyYXBwZXIgcHJldmVudHMgdGhhdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHJlYW1pY2gvcmVhY3QtdXNlL2lzc3Vlcy83NTlcbmNvbnN0IHVzZURlYm91bmNlV2l0aG91dEZpcnN0UmVuZGVyID0gKGNhbGxCYWNrOiAoKSA9PiBhbnksIGRlbGF5ID0gMCwgZGVwczogUmVhY3QuRGVwZW5kZW5jeUxpc3QgPSBbXSkgPT4ge1xuICBjb25zdCBpc0ZpcnN0UmVuZGVyID0gdXNlUmVmKHRydWUpO1xuICBjb25zdCBkZWJvdW5jZURlcHMgPSBbLi4uZGVwcywgaXNGaXJzdFJlbmRlcl07XG5cbiAgcmV0dXJuIHVzZURlYm91bmNlKFxuICAgICgpID0+IHtcbiAgICAgIGlmIChpc0ZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcbiAgICAgICAgaXNGaXJzdFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYWxsQmFjaygpO1xuICAgIH0sXG4gICAgZGVsYXksXG4gICAgZGVib3VuY2VEZXBzXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgU2VhcmNoRmllbGQgPSAoeyB2YWx1ZSwgb25TZWFyY2ggfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG5cbiAgdXNlRGVib3VuY2VXaXRob3V0Rmlyc3RSZW5kZXIoKCkgPT4gb25TZWFyY2gocXVlcnkgPz8gJycpLCA1MDAsIFtxdWVyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZpbHRlcklucHV0XG4gICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgb25TZWFyY2goZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEdyYWZhbmEgcGx1Z2luc1wiXG4gICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgIHNldFF1ZXJ5KHZhbHVlKTtcbiAgICAgIH19XG4gICAgICB3aWR0aD17NDZ9XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGNvbnN0IHVzZUhpc3RvcnkgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHVzaDogKHsgcXVlcnkgfTogYW55KSA9PiB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbChxdWVyeSk7XG4gICAgfSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSwgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTG9hZGluZ1BsYWNlaG9sZGVyLCBTZWxlY3QsIFJhZGlvQnV0dG9uR3JvdXAsIHVzZVN0eWxlczIsIFRvb2x0aXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgbG9jYXRpb25TZWFyY2hUb09iamVjdCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IFBsdWdpbkxpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL1BsdWdpbkxpc3QnO1xuaW1wb3J0IHsgU2VhcmNoRmllbGQgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEZpZWxkJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICcuLi9ob29rcy91c2VIaXN0b3J5JztcbmltcG9ydCB7IFBsdWdpbkFkbWluUm91dGVzLCBQbHVnaW5MaXN0RGlzcGxheU1vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBQYWdlIGFzIFBsdWdpblBhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib3Jpem9udGFsR3JvdXAnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyB1c2VHZXRBbGxXaXRoRmlsdGVycywgdXNlSXNSZW1vdGVQbHVnaW5zQXZhaWxhYmxlLCB1c2VEaXNwbGF5TW9kZSB9IGZyb20gJy4uL3N0YXRlL2hvb2tzJztcbmltcG9ydCB7IFNvcnRlcnMgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJvd3NlKHsgcm91dGUgfTogR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBsb2NhdGlvblNlYXJjaCA9IGxvY2F0aW9uU2VhcmNoVG9PYmplY3QobG9jYXRpb24uc2VhcmNoKTtcbiAgY29uc3QgbmF2TW9kZWxJZCA9IGdldE5hdk1vZGVsSWQocm91dGUucm91dGVOYW1lKTtcbiAgY29uc3QgbmF2TW9kZWwgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCBuYXZNb2RlbElkKSk7XG4gIGNvbnN0IHsgZGlzcGxheU1vZGUsIHNldERpc3BsYXlNb2RlIH0gPSB1c2VEaXNwbGF5TW9kZSgpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHJlbW90ZVBsdWdpbnNBdmFpbGFibGUgPSB1c2VJc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUoKTtcbiAgY29uc3QgcXVlcnkgPSAobG9jYXRpb25TZWFyY2gucSBhcyBzdHJpbmcpIHx8ICcnO1xuICBjb25zdCBmaWx0ZXJCeSA9IChsb2NhdGlvblNlYXJjaC5maWx0ZXJCeSBhcyBzdHJpbmcpIHx8ICdpbnN0YWxsZWQnO1xuICBjb25zdCBmaWx0ZXJCeVR5cGUgPSAobG9jYXRpb25TZWFyY2guZmlsdGVyQnlUeXBlIGFzIHN0cmluZykgfHwgJ2FsbCc7XG4gIGNvbnN0IHNvcnRCeSA9IChsb2NhdGlvblNlYXJjaC5zb3J0QnkgYXMgU29ydGVycykgfHwgU29ydGVycy5uYW1lQXNjO1xuICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IsIHBsdWdpbnMgfSA9IHVzZUdldEFsbFdpdGhGaWx0ZXJzKHtcbiAgICBxdWVyeSxcbiAgICBmaWx0ZXJCeSxcbiAgICBmaWx0ZXJCeVR5cGUsXG4gICAgc29ydEJ5LFxuICB9KTtcbiAgY29uc3QgZmlsdGVyQnlPcHRpb25zID0gW1xuICAgIHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ0FsbCcgfSxcbiAgICB7IHZhbHVlOiAnaW5zdGFsbGVkJywgbGFiZWw6ICdJbnN0YWxsZWQnIH0sXG4gIF07XG5cbiAgY29uc3Qgb25Tb3J0QnlDaGFuZ2UgPSAodmFsdWU6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKHsgcXVlcnk6IHsgc29ydEJ5OiB2YWx1ZS52YWx1ZSB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uRmlsdGVyQnlDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGhpc3RvcnkucHVzaCh7IHF1ZXJ5OiB7IGZpbHRlckJ5OiB2YWx1ZSB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uRmlsdGVyQnlUeXBlQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goeyBxdWVyeTogeyBmaWx0ZXJCeVR5cGU6IHZhbHVlIH0gfSk7XG4gIH07XG5cbiAgY29uc3Qgb25TZWFyY2ggPSAocTogYW55KSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKHsgcXVlcnk6IHsgZmlsdGVyQnk6ICdhbGwnLCBmaWx0ZXJCeVR5cGU6ICdhbGwnLCBxIH0gfSk7XG4gIH07XG5cbiAgLy8gSG93IHNob3VsZCB3ZSBoYW5kbGUgZXJyb3JzP1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxQbHVnaW5QYWdlPlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgd3JhcD5cbiAgICAgICAgICAgIDxTZWFyY2hGaWVsZCB2YWx1ZT17cXVlcnl9IG9uU2VhcmNoPXtvblNlYXJjaH0gLz5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgd3JhcCBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25CYXJ9PlxuICAgICAgICAgICAgICB7LyogRmlsdGVyIGJ5IHR5cGUgKi99XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXJCeVR5cGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25GaWx0ZXJCeVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdhbGwnLCBsYWJlbDogJ0FsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2RhdGFzb3VyY2UnLCBsYWJlbDogJ0RhdGEgc291cmNlcycgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ3BhbmVsJywgbGFiZWw6ICdQYW5lbHMnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdhcHAnLCBsYWJlbDogJ0FwcGxpY2F0aW9ucycgfSxcbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIEZpbHRlciBieSBpbnN0YWxsZWQgLyBhbGwgKi99XG4gICAgICAgICAgICAgIHtyZW1vdGVQbHVnaW5zQXZhaWxhYmxlID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCB2YWx1ZT17ZmlsdGVyQnl9IG9uQ2hhbmdlPXtvbkZpbHRlckJ5Q2hhbmdlfSBvcHRpb25zPXtmaWx0ZXJCeU9wdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJUaGlzIGZpbHRlciBoYXMgYmVlbiBkaXNhYmxlZCBiZWNhdXNlIHRoZSBHcmFmYW5hIHNlcnZlciBjYW5ub3QgYWNjZXNzIGdyYWZhbmEuY29tXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyQnl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsdGVyQnlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVyQnlPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHsvKiBTb3J0aW5nICovfVxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG1lbnVTaG91bGRQb3J0YWxcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTb3J0IFBsdWdpbnMgTGlzdFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c29ydEJ5fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU29ydEJ5Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnbmFtZUFzYycsIGxhYmVsOiAnU29ydCBieSBuYW1lIChBLVopJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnbmFtZURlc2MnLCBsYWJlbDogJ1NvcnQgYnkgbmFtZSAoWi1BKScgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ3VwZGF0ZWQnLCBsYWJlbDogJ1NvcnQgYnkgdXBkYXRlZCBkYXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAncHVibGlzaGVkJywgbGFiZWw6ICdTb3J0IGJ5IHB1Ymxpc2hlZCBkYXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnZG93bmxvYWRzJywgbGFiZWw6ICdTb3J0IGJ5IGRvd25sb2FkcycgfSxcbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIERpc3BsYXkgbW9kZSAqL31cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cDxQbHVnaW5MaXN0RGlzcGxheU1vZGU+XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5QXN9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzcGxheU1vZGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RGlzcGxheU1vZGV9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogUGx1Z2luTGlzdERpc3BsYXlNb2RlLkdyaWQsXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXkgcGx1Z2lucyBpbiBhIGdyaWQgbGF5b3V0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogUGx1Z2luTGlzdERpc3BsYXlNb2RlLkxpc3QsIGljb246ICdsaXN0LXVsJywgZGVzY3JpcHRpb246ICdEaXNwbGF5IHBsdWdpbnMgaW4gbGlzdCcgfSxcbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RXcmFwfT5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgIDxMb2FkaW5nUGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICB0ZXh0PVwiTG9hZGluZyByZXN1bHRzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxQbHVnaW5MaXN0IHBsdWdpbnM9e3BsdWdpbnN9IGRpc3BsYXlNb2RlPXtkaXNwbGF5TW9kZX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGx1Z2luUGFnZT5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgYWN0aW9uQmFyOiBjc3NgXG4gICAgJHt0aGVtZS5icmVha3BvaW50cy51cCgneGwnKX0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuICBgLFxuICBsaXN0V3JhcDogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG4gIGRpc3BsYXlBczogY3NzYFxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICBgLFxufSk7XG5cbi8vIEJlY2F1c2UgdGhlIGNvbXBvbmVudCBpcyB1c2VkIHVuZGVyIG11bHRpcGxlIHBhdGhzICgvcGx1Z2lucyBhbmQgL2FkbWluL3BsdWdpbnMpIHdlIG5lZWQgdG8gZ2V0XG4vLyB0aGUgY29ycmVjdCBuYXZNb2RlbCBmcm9tIHRoZSBzdG9yZVxuY29uc3QgZ2V0TmF2TW9kZWxJZCA9IChyb3V0ZU5hbWU/OiBzdHJpbmcpID0+IHtcbiAgaWYgKHJvdXRlTmFtZSA9PT0gUGx1Z2luQWRtaW5Sb3V0ZXMuSG9tZUFkbWluIHx8IHJvdXRlTmFtZSA9PT0gUGx1Z2luQWRtaW5Sb3V0ZXMuQnJvd3NlQWRtaW4pIHtcbiAgICByZXR1cm4gJ2FkbWluLXBsdWdpbnMnO1xuICB9XG5cbiAgcmV0dXJuICdwbHVnaW5zJztcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBQbHVnaW5FcnJvciB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2V0RGlzcGxheU1vZGUgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgZmV0Y2hBbGwsIGZldGNoRGV0YWlscywgZmV0Y2hSZW1vdGVQbHVnaW5zLCBpbnN0YWxsLCB1bmluc3RhbGwgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUsIFBsdWdpbkxpc3REaXNwbGF5TW9kZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIGZpbmQsXG4gIHNlbGVjdEFsbCxcbiAgc2VsZWN0QnlJZCxcbiAgc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyxcbiAgc2VsZWN0UmVxdWVzdEVycm9yLFxuICBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkLFxuICBzZWxlY3REaXNwbGF5TW9kZSxcbiAgc2VsZWN0UGx1Z2luRXJyb3JzLFxufSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzb3J0UGx1Z2lucywgU29ydGVycyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG50eXBlIEZpbHRlcnMgPSB7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xuICBmaWx0ZXJCeT86IHN0cmluZztcbiAgZmlsdGVyQnlUeXBlPzogc3RyaW5nO1xuICBzb3J0Qnk/OiBTb3J0ZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbFdpdGhGaWx0ZXJzID0gKHtcbiAgcXVlcnkgPSAnJyxcbiAgZmlsdGVyQnkgPSAnaW5zdGFsbGVkJyxcbiAgZmlsdGVyQnlUeXBlID0gJ2FsbCcsXG4gIHNvcnRCeSA9IFNvcnRlcnMubmFtZUFzYyxcbn06IEZpbHRlcnMpID0+IHtcbiAgdXNlRmV0Y2hBbGwoKTtcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZVNlbGVjdG9yKGZpbmQocXVlcnksIGZpbHRlckJ5LCBmaWx0ZXJCeVR5cGUpKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaFN0YXR1cygpO1xuICBjb25zdCBzb3J0ZWRBbmRGaWx0ZXJlZCA9IHNvcnRQbHVnaW5zKGZpbHRlcmVkLCBzb3J0QnkpO1xuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIHBsdWdpbnM6IHNvcnRlZEFuZEZpbHRlcmVkLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbCA9ICgpOiBDYXRhbG9nUGx1Z2luW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RBbGwpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldFNpbmdsZSA9IChpZDogc3RyaW5nKTogQ2F0YWxvZ1BsdWdpbiB8IHVuZGVmaW5lZCA9PiB7XG4gIHVzZUZldGNoQWxsKCk7XG4gIHVzZUZldGNoRGV0YWlscyhpZCk7XG5cbiAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUpID0+IHNlbGVjdEJ5SWQoc3RhdGUsIGlkKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0RXJyb3JzID0gKCk6IFBsdWdpbkVycm9yW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RQbHVnaW5FcnJvcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuIChpZDogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nLCBpc1VwZGF0aW5nPzogYm9vbGVhbikgPT4gZGlzcGF0Y2goaW5zdGFsbCh7IGlkLCB2ZXJzaW9uLCBpc1VwZGF0aW5nIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVbmluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICByZXR1cm4gKGlkOiBzdHJpbmcpID0+IGRpc3BhdGNoKHVuaW5zdGFsbChpZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hSZW1vdGVQbHVnaW5zLnR5cGVQcmVmaXgpKTtcbiAgcmV0dXJuIGVycm9yID09PSBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoQWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hBbGwudHlwZVByZWZpeCkpO1xuXG4gIHJldHVybiB7IGlzTG9hZGluZywgZXJyb3IgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VGZXRjaERldGFpbHNTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcblxuICByZXR1cm4geyBpc0xvYWRpbmcsIGVycm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNJbnN0YWxsaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyhpbnN0YWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNJbnN0YWxsaW5nLCBlcnJvciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVVuaW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNVbmluc3RhbGxpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNVbmluc3RhbGxpbmcsIGVycm9yIH07XG59O1xuXG4vLyBPbmx5IGZldGNoZXMgaW4gY2FzZSB0aGV5IHdlcmUgbm90IGZldGNoZWQgeWV0XG5leHBvcnQgY29uc3QgdXNlRmV0Y2hBbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNOb3RGZXRjaGVkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZChmZXRjaEFsbC50eXBlUHJlZml4KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc05vdEZldGNoZWQgJiYgZGlzcGF0Y2goZmV0Y2hBbGwoKSk7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoRGV0YWlscyA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcGx1Z2luID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc2VsZWN0QnlJZChzdGF0ZSwgaWQpKTtcbiAgY29uc3QgaXNOb3RGZXRjaGluZyA9ICF1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoRGV0YWlscy50eXBlUHJlZml4KSk7XG4gIGNvbnN0IHNob3VsZEZldGNoID0gaXNOb3RGZXRjaGluZyAmJiBwbHVnaW4gJiYgIXBsdWdpbi5kZXRhaWxzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvdWxkRmV0Y2ggJiYgZGlzcGF0Y2goZmV0Y2hEZXRhaWxzKGlkKSk7XG4gIH0sIFtwbHVnaW5dKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZURpc3BsYXlNb2RlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGRpc3BsYXlNb2RlID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGlzcGxheU1vZGUpO1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheU1vZGUsXG4gICAgc2V0RGlzcGxheU1vZGU6ICh2OiBQbHVnaW5MaXN0RGlzcGxheU1vZGUpID0+IGRpc3BhdGNoKHNldERpc3BsYXlNb2RlKHYpKSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgUGx1Z2luRXJyb3IsIFBsdWdpbkVycm9yQ29kZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUmVxdWVzdFN0YXR1cywgUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBwbHVnaW5zQWRhcHRlciB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSb290ID0gKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc3RhdGUucGx1Z2lucztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Um9vdCwgKHsgaXRlbXMgfSkgPT4gaXRlbXMpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlzcGxheU1vZGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyBzZXR0aW5ncyB9KSA9PiBzZXR0aW5ncy5kaXNwbGF5TW9kZSk7XG5cbmV4cG9ydCBjb25zdCB7IHNlbGVjdEFsbCwgc2VsZWN0QnlJZCB9ID0gcGx1Z2luc0FkYXB0ZXIuZ2V0U2VsZWN0b3JzKHNlbGVjdEl0ZW1zKTtcblxuY29uc3Qgc2VsZWN0SW5zdGFsbGVkID0gKGZpbHRlckJ5OiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEFsbCwgKHBsdWdpbnMpID0+XG4gICAgcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gKGZpbHRlckJ5ID09PSAnaW5zdGFsbGVkJyA/IHBsdWdpbi5pc0luc3RhbGxlZCA6ICFwbHVnaW4uaXNDb3JlKSlcbiAgKTtcblxuY29uc3QgZmluZEJ5SW5zdGFsbEFuZFR5cGUgPSAoZmlsdGVyQnk6IHN0cmluZywgZmlsdGVyQnlUeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEluc3RhbGxlZChmaWx0ZXJCeSksIChwbHVnaW5zKSA9PlxuICAgIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IGZpbHRlckJ5VHlwZSA9PT0gJ2FsbCcgfHwgcGx1Z2luLnR5cGUgPT09IGZpbHRlckJ5VHlwZSlcbiAgKTtcblxuY29uc3QgZmluZEJ5S2V5d29yZCA9IChzZWFyY2hCeTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RBbGwsIChwbHVnaW5zKSA9PiB7XG4gICAgaWYgKHNlYXJjaEJ5ID09PSAnJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IFN0cmluZ1tdID0gW107XG4gICAgICBpZiAocGx1Z2luLm5hbWUpIHtcbiAgICAgICAgZmllbGRzLnB1c2gocGx1Z2luLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbHVnaW4ub3JnTmFtZSkge1xuICAgICAgICBmaWVsZHMucHVzaChwbHVnaW4ub3JnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkcy5zb21lKChmKSA9PiBmLmluY2x1ZGVzKHNlYXJjaEJ5LnRvTG93ZXJDYXNlKCkpKTtcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gKHNlYXJjaEJ5OiBzdHJpbmcsIGZpbHRlckJ5OiBzdHJpbmcsIGZpbHRlckJ5VHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBmaW5kQnlJbnN0YWxsQW5kVHlwZShmaWx0ZXJCeSwgZmlsdGVyQnlUeXBlKSxcbiAgICBmaW5kQnlLZXl3b3JkKHNlYXJjaEJ5KSxcbiAgICAoZmlsdGVyZWRQbHVnaW5zLCBzZWFyY2hlZFBsdWdpbnMpID0+IHtcbiAgICAgIHJldHVybiBzZWFyY2hCeSA9PT0gJycgPyBmaWx0ZXJlZFBsdWdpbnMgOiBzZWFyY2hlZFBsdWdpbnM7XG4gICAgfVxuICApO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UGx1Z2luRXJyb3JzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QWxsLCAocGx1Z2lucykgPT5cbiAgcGx1Z2luc1xuICAgID8gcGx1Z2luc1xuICAgICAgICAuZmlsdGVyKChwKSA9PiBCb29sZWFuKHAuZXJyb3IpKVxuICAgICAgICAubWFwKFxuICAgICAgICAgIChwKTogUGx1Z2luRXJyb3IgPT4gKHtcbiAgICAgICAgICAgIHBsdWdpbklkOiBwLmlkLFxuICAgICAgICAgICAgZXJyb3JDb2RlOiBwIS5lcnJvciBhcyBQbHVnaW5FcnJvckNvZGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIDogW11cbik7XG5cbi8vIFRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIGFyZSB1c2VkIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgb3V0c3RhbmRpbmcgb3IgY29tcGxldGVkIHBsdWdpbnMtcmVsYXRlZCBuZXR3b3JrIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlcXVlc3QgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyByZXF1ZXN0cyA9IHt9IH0pID0+IHJlcXVlc3RzW2FjdGlvblR5cGVdKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzUmVxdWVzdFBlbmRpbmcgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSZXF1ZXN0KGFjdGlvblR5cGUpLCAocmVxdWVzdCkgPT4gcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlBlbmRpbmcpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVxdWVzdEVycm9yID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+XG4gICAgcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlJlamVjdGVkID8gcmVxdWVzdD8uZXJyb3IgOiBudWxsXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+IHJlcXVlc3QgPT09IHVuZGVmaW5lZCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQbHVnaW5FcnJvckNvZGUiLCJCYWRnZSIsIlBsdWdpbkRpc2FibGVkQmFkZ2UiLCJlcnJvciIsInRvb2x0aXAiLCJlcnJvckNvZGVUb1Rvb2x0aXAiLCJtb2RpZmllZFNpZ25hdHVyZSIsImludmFsaWRTaWduYXR1cmUiLCJtaXNzaW5nU2lnbmF0dXJlIiwiQnV0dG9uIiwiSG9yaXpvbnRhbEdyb3VwIiwiUGx1Z2luU2lnbmF0dXJlQmFkZ2UiLCJ1c2VTdHlsZXMyIiwiZ2V0QmFkZ2VDb2xvciIsImZlYXR1cmVFbmFibGVkIiwiUGx1Z2luRW50ZXJwcmlzZUJhZGdlIiwicGx1Z2luIiwiY3VzdG9tQmFkZ2VTdHlsZXMiLCJvbkNsaWNrIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsIm9wZW4iLCJpZCIsInNpZ25hdHVyZSIsIlBsdWdpbkluc3RhbGxlZEJhZGdlIiwiY3NzIiwiUGx1Z2luVHlwZSIsIlBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaGFzVXBkYXRlIiwiaXNDb3JlIiwidHlwZSIsInJlbmRlcmVyIiwidGhlbWUiLCJjb2xvcnMiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImJvZHlTbWFsbCIsImZvbnRTaXplIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJib3JkZXIiLCJzdHJvbmciLCJjeCIsInVzZVRoZW1lMiIsImNoaWxkcmVuIiwid3JhcCIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInNwYWNpbmciLCJQYWdlIiwidXNlTG9jYXRpb24iLCJQbHVnaW5MaXN0RGlzcGxheU1vZGUiLCJQbHVnaW5MaXN0SXRlbSIsIlBsdWdpbkxpc3QiLCJwbHVnaW5zIiwiZGlzcGxheU1vZGUiLCJpc0xpc3QiLCJMaXN0IiwibG9jYXRpb24iLCJsaXN0IiwibWFwIiwicGF0aG5hbWUiLCJQbHVnaW5JY29uTmFtZSIsIlBsdWdpbkxpc3RJdGVtQmFkZ2VzIiwiUGx1Z2luTG9nbyIsIkljb24iLCJMT0dPX1NJWkUiLCJwYXRoTmFtZSIsIkdyaWQiLCJpbmZvIiwibG9nb3MiLCJzbWFsbCIsInBsdWdpbkxvZ28iLCJuYW1lIiwiY29udGVudCIsIm9yZ05hbWUiLCJwbHVnaW5UeXBlIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImR1cmF0aW9uIiwic2hvcnQiLCJlbXBoYXNpemUiLCJoNCIsImlzRW50ZXJwcmlzZSIsImlzRGlzYWJsZWQiLCJpc0luc3RhbGxlZCIsImFsdCIsInNyYyIsImhlaWdodCIsIkZpbHRlcklucHV0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VEZWJvdW5jZSIsInVzZURlYm91bmNlV2l0aG91dEZpcnN0UmVuZGVyIiwiY2FsbEJhY2siLCJkZWxheSIsImRlcHMiLCJpc0ZpcnN0UmVuZGVyIiwiZGVib3VuY2VEZXBzIiwiY3VycmVudCIsIlNlYXJjaEZpZWxkIiwidmFsdWUiLCJvblNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJlIiwia2V5Iiwia2V5Q29kZSIsImN1cnJlbnRUYXJnZXQiLCJsb2NhdGlvblNlcnZpY2UiLCJ1c2VIaXN0b3J5IiwicHVzaCIsInBhcnRpYWwiLCJMb2FkaW5nUGxhY2Vob2xkZXIiLCJTZWxlY3QiLCJSYWRpb0J1dHRvbkdyb3VwIiwiVG9vbHRpcCIsImxvY2F0aW9uU2VhcmNoVG9PYmplY3QiLCJQbHVnaW5BZG1pblJvdXRlcyIsIlBsdWdpblBhZ2UiLCJ1c2VTZWxlY3RvciIsImdldE5hdk1vZGVsIiwidXNlR2V0QWxsV2l0aEZpbHRlcnMiLCJ1c2VJc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUiLCJ1c2VEaXNwbGF5TW9kZSIsIlNvcnRlcnMiLCJCcm93c2UiLCJyb3V0ZSIsImxvY2F0aW9uU2VhcmNoIiwic2VhcmNoIiwibmF2TW9kZWxJZCIsImdldE5hdk1vZGVsSWQiLCJyb3V0ZU5hbWUiLCJuYXZNb2RlbCIsInN0YXRlIiwibmF2SW5kZXgiLCJzZXREaXNwbGF5TW9kZSIsImhpc3RvcnkiLCJyZW1vdGVQbHVnaW5zQXZhaWxhYmxlIiwicSIsImZpbHRlckJ5IiwiZmlsdGVyQnlUeXBlIiwic29ydEJ5IiwibmFtZUFzYyIsImlzTG9hZGluZyIsImZpbHRlckJ5T3B0aW9ucyIsImxhYmVsIiwib25Tb3J0QnlDaGFuZ2UiLCJvbkZpbHRlckJ5Q2hhbmdlIiwib25GaWx0ZXJCeVR5cGVDaGFuZ2UiLCJjb25zb2xlIiwibWVzc2FnZSIsImFjdGlvbkJhciIsImRpc3BsYXlBcyIsImljb24iLCJkZXNjcmlwdGlvbiIsImxpc3RXcmFwIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkhvbWVBZG1pbiIsIkJyb3dzZUFkbWluIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJmZXRjaEFsbCIsImZldGNoRGV0YWlscyIsImZldGNoUmVtb3RlUGx1Z2lucyIsImluc3RhbGwiLCJ1bmluc3RhbGwiLCJmaW5kIiwic2VsZWN0QWxsIiwic2VsZWN0QnlJZCIsInNlbGVjdElzUmVxdWVzdFBlbmRpbmciLCJzZWxlY3RSZXF1ZXN0RXJyb3IiLCJzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkIiwic2VsZWN0RGlzcGxheU1vZGUiLCJzZWxlY3RQbHVnaW5FcnJvcnMiLCJzb3J0UGx1Z2lucyIsInVzZUZldGNoQWxsIiwiZmlsdGVyZWQiLCJ1c2VGZXRjaFN0YXR1cyIsInNvcnRlZEFuZEZpbHRlcmVkIiwidXNlR2V0QWxsIiwidXNlR2V0U2luZ2xlIiwidXNlRmV0Y2hEZXRhaWxzIiwidXNlR2V0RXJyb3JzIiwidXNlSW5zdGFsbCIsImRpc3BhdGNoIiwidmVyc2lvbiIsImlzVXBkYXRpbmciLCJ1c2VVbmluc3RhbGwiLCJ0eXBlUHJlZml4IiwidXNlRmV0Y2hEZXRhaWxzU3RhdHVzIiwidXNlSW5zdGFsbFN0YXR1cyIsImlzSW5zdGFsbGluZyIsInVzZVVuaW5zdGFsbFN0YXR1cyIsImlzVW5pbnN0YWxsaW5nIiwiaXNOb3RGZXRjaGVkIiwiaXNOb3RGZXRjaGluZyIsInNob3VsZEZldGNoIiwiZGV0YWlscyIsInYiLCJjcmVhdGVTZWxlY3RvciIsIlJlcXVlc3RTdGF0dXMiLCJwbHVnaW5zQWRhcHRlciIsInNlbGVjdFJvb3QiLCJzZWxlY3RJdGVtcyIsIml0ZW1zIiwic2V0dGluZ3MiLCJnZXRTZWxlY3RvcnMiLCJzZWxlY3RJbnN0YWxsZWQiLCJmaWx0ZXIiLCJmaW5kQnlJbnN0YWxsQW5kVHlwZSIsImZpbmRCeUtleXdvcmQiLCJzZWFyY2hCeSIsImZpZWxkcyIsInRvTG93ZXJDYXNlIiwic29tZSIsImYiLCJpbmNsdWRlcyIsImZpbHRlcmVkUGx1Z2lucyIsInNlYXJjaGVkUGx1Z2lucyIsInAiLCJCb29sZWFuIiwicGx1Z2luSWQiLCJlcnJvckNvZGUiLCJzZWxlY3RSZXF1ZXN0IiwiYWN0aW9uVHlwZSIsInJlcXVlc3RzIiwicmVxdWVzdCIsInN0YXR1cyIsIlBlbmRpbmciLCJSZWplY3RlZCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=
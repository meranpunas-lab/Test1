"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_admin_UpgradePage_tsx"],{

/***/ "./public/app/features/admin/CrawlerStartButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrawlerStartButton": () => (/* binding */ CrawlerStartButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const CrawlerStartButton = () => {
  var _JSON$stringify;

  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)());
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    mode: 'thumbs',
    theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.theme2.isLight ? 'light' : 'dark'
  });

  const onDismiss = () => setOpen(false);

  const doStart = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/admin/crawler/start', body).then(v => {
      console.log('GOT', v);
      onDismiss();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      title: 'Start crawler',
      isOpen: open,
      onDismiss: onDismiss,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.wrap,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor, {
          height: 200,
          value: (_JSON$stringify = JSON.stringify(body, null, 2)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '',
          showLineNumbers: false,
          readOnly: false,
          language: "json",
          showMiniMap: false,
          onBlur: text => {
            setBody(JSON.parse(text)); // force JSON?
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: doStart,
          children: "Start"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => setOpen(true),
      variant: "primary",
      children: "Start"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      border: 2px solid #111;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/CrawlerStatus.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrawlerStatus": () => (/* binding */ CrawlerStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/CrawlerStartButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _CrawlerStartButton, _CrawlerStartButton2;









const CrawlerStatus = () => {
  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)());
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const subscription = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getGrafanaLiveSrv)().getStream({
      scope: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LiveChannelScope.Grafana,
      namespace: 'broadcast',
      path: 'crawler'
    }).subscribe({
      next: evt => {
        if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.isLiveChannelMessageEvent)(evt)) {
          setStatus(evt.message);
        } else if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.isLiveChannelStatusEvent)(evt)) {
          setStatus(evt.message);
        }
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!status) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.wrap,
      children: ["No status (never run)", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), _CrawlerStartButton || (_CrawlerStartButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__.CrawlerStartButton, {}))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
      children: JSON.stringify(status, null, 2)
    }), status.state !== 'running' && (_CrawlerStartButton2 || (_CrawlerStartButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__.CrawlerStartButton, {}))), status.state !== 'stopped' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      onClick: () => {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().post('/api/admin/crawler/stop');
      },
      children: "Stop"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      border: 4px solid red;
    `,
    running: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      border: 4px solid green;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/LicenseChrome.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "LicenseChrome": () => (/* binding */ LicenseChrome)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const title = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.stylesFactory)(theme => {
  const backgroundUrl = theme.isDark ? 'public/img/licensing/header_dark.svg' : 'public/img/licensing/header_light.svg';
  const footerBg = theme.isDark ? theme.palette.dark9 : theme.palette.gray6;
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      padding: 36px 79px;
      background: ${theme.colors.panelBg};
    `,
    footer: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      text-align: center;
      padding: 16px;
      background: ${footerBg};
    `,
    header: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${backgroundUrl}') right;
    `
  };
});
function LicenseChrome({
  header,
  editionNotice,
  subheader,
  children
}) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const styles = getStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: title,
        children: header
      }), subheader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        children: subheader
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Circle, {
        size: "128px",
        style: {
          boxShadow: '0px 0px 24px rgba(24, 58, 110, 0.45)',
          background: '#0A1C36',
          position: 'absolute',
          top: '19px',
          left: '71%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: "public/img/grafana_icon.svg",
          alt: "Grafana",
          width: "80px",
          style: {
            position: 'absolute',
            left: '23px',
            top: '20px'
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.container,
      children: children
    }), editionNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.footer,
      children: editionNotice
    })]
  });
}
const Circle = ({
  size,
  style,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    style: Object.assign({
      width: size,
      height: size,
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderRadius: '50%'
    }, style),
    children: children
  });
};

/***/ }),

/***/ "./public/app/features/admin/ServerStats.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStats": () => (/* binding */ ServerStats)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/admin/state/apis.tsx");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _CrawlerStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/admin/CrawlerStatus.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Loader, _LinkButton, _LinkButton2, _LinkButton3, _LinkButton4, _CrawlerStatus;













const ServerStats = () => {
  const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const hasAccessToDataSources = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.DataSourcesRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin);
  const hasAccessToAdminUsers = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.UsersRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.ActionServerStatsRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin)) {
      setIsLoading(true);
      (0,_state_apis__WEBPACK_IMPORTED_MODULE_4__.getServerStats)().then(stats => {
        setStats(stats);
        setIsLoading(false);
      });
    }
  }, []);

  if (!_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.ActionServerStatsRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
      className: styles.title,
      children: "Instance statistics"
    }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.loader,
      children: _Loader || (_Loader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_6__.Loader, {
        text: 'Loading instance stats...'
      }))
    }) : stats ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StatCard, {
        content: [{
          name: 'Dashboards (starred)',
          value: `${stats.dashboards} (${stats.stars})`
        }, {
          name: 'Tags',
          value: stats.tags
        }, {
          name: 'Playlists',
          value: stats.playlists
        }, {
          name: 'Snapshots',
          value: stats.snapshots
        }],
        footer: _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: '/dashboards',
          variant: 'secondary',
          children: "Manage dashboards"
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: styles.doubleRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StatCard, {
          content: [{
            name: 'Data sources',
            value: stats.datasources
          }],
          footer: hasAccessToDataSources && (_LinkButton2 || (_LinkButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
            href: '/datasources',
            variant: 'secondary',
            children: "Manage data sources"
          })))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StatCard, {
          content: [{
            name: 'Alerts',
            value: stats.alerts
          }],
          footer: _LinkButton3 || (_LinkButton3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
            href: '/alerting/list',
            variant: 'secondary',
            children: "Alerts"
          }))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StatCard, {
        content: [{
          name: 'Organisations',
          value: stats.orgs
        }, {
          name: 'Users total',
          value: stats.users
        }, {
          name: 'Active users in last 30 days',
          value: stats.activeUsers
        }, {
          name: 'Active sessions',
          value: stats.activeSessions
        }],
        footer: hasAccessToAdminUsers && (_LinkButton4 || (_LinkButton4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: '/admin/users',
          variant: 'secondary',
          children: "Manage users"
        })))
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
      className: styles.notFound,
      children: "No stats found."
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.dashboardPreviews && _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.dashboardPreviewsAdmin && (_CrawlerStatus || (_CrawlerStatus = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_CrawlerStatus__WEBPACK_IMPORTED_MODULE_8__.CrawlerStatus, {})))]
  });
};

const getStyles = theme => {
  return {
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-bottom: ${theme.spacing(4)};
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${theme.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,
    doubleRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${theme.spacing(2)};
      }
    `,
    loader: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      height: 290px;
    `,
    notFound: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-size: ${theme.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `
  };
};

const StatCard = ({
  content,
  footer
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getCardStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CardContainer, {
    className: styles.container,
    disableHover: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: styles.inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: styles.content,
        children: content.map(item => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: styles.row,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: item.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: item.value
            })]
          }, item.name);
        })
      }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        children: footer
      })]
    })
  });
};

const getCardStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      padding: ${theme.spacing(2)};
    `,
    inner: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      flex: 1 0 auto;
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${theme.spacing(2)};
      align-items: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/UpgradePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradeInfo": () => (/* binding */ UpgradeInfo),
/* harmony export */   "UpgradePage": () => (/* binding */ UpgradePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _LicenseChrome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/LicenseChrome.tsx");
/* harmony import */ var _ServerStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/admin/ServerStats.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _FeatureInfo, _ServiceInfo, _h, _CallToAction, _LinkButton, _h2, _List, _strong, _br, _GetEnterprise, _h3, _FeatureListing, _List2;












function UpgradePage({
  navModel
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ServerStats__WEBPACK_IMPORTED_MODULE_7__.ServerStats, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(UpgradeInfo, {
        editionNotice: "You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."
      })]
    }))
  });
}
const titleStyles = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
const UpgradeInfo = ({
  editionNotice
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
      className: styles.title,
      children: "Enterprise license"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LicenseChrome__WEBPACK_IMPORTED_MODULE_6__.LicenseChrome, {
      header: "Grafana Enterprise",
      subheader: "Get your free trial",
      editionNotice: editionNotice,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: styles.column,
        children: [_FeatureInfo || (_FeatureInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FeatureInfo, {})), _ServiceInfo || (_ServiceInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ServiceInfo, {}))]
      })
    })]
  });
};

const getStyles = theme => {
  return {
    column: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin: ${theme.spacing(4)} 0;
    `
  };
};

const GetEnterprise = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    style: {
      marginTop: '40px',
      marginBottom: '30px'
    },
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
      style: titleStyles,
      children: "Get Grafana Enterprise"
    })), _CallToAction || (_CallToAction = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CallToAction, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      style: {
        paddingTop: '12px'
      },
      children: "You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends."
    })]
  });
};

const CallToAction = () => {
  return _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
    variant: "primary",
    size: "lg",
    href: "https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",
    children: "Contact us and get a free trial"
  }));
};

const ServiceInfo = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [_h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
      children: "At your service"
    })), _List || (_List = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
        title: "Enterprise Plugins",
        image: "public/img/licensing/plugin_enterprise.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
        title: "Critical SLA: 2 hours",
        image: "public/img/licensing/sla.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Item, {
        title: "Unlimited Expert Support",
        image: "public/img/licensing/customer_support.svg",
        children: ["24 x 7 x 365 support via", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
          nested: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
            title: "Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
            title: "Private Slack channel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
            title: "Phone"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
        title: "Hand-in-hand support",
        image: "public/img/licensing/handinhand_support.svg",
        children: "in the upgrade process"
      })]
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      style: {
        marginTop: '20px'
      },
      children: [_strong || (_strong = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
        children: "Also included:"
      })), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {})), "Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."]
    }), _GetEnterprise || (_GetEnterprise = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(GetEnterprise, {}))]
  });
};

const FeatureInfo = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    style: {
      paddingRight: '11px'
    },
    children: [_h3 || (_h3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
      children: "Enhanced functionality"
    })), _FeatureListing || (_FeatureListing = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FeatureListing, {}))]
  });
};

const FeatureListing = () => {
  return _List2 || (_List2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Data source permissions"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Reporting"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "SAML authentication"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Enhanced LDAP integration"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Team Sync",
      children: "LDAP, GitHub OAuth, Auth Proxy, Okta"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "White labeling"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Auditing"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Settings updates at runtime"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Grafana usage insights",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
        nested: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Sort dashboards by popularity in search"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Find unused dashboards"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Dashboard usage stats drawer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Dashboard presence indicators"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Enterprise plugins",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
        nested: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Oracle"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Splunk"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Service Now"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Dynatrace"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "New Relic"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "DataDog"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "AppDynamics"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "SAP HANA\xAE"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Gitlab"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Honeycomb"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Jira"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "MongoDB"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Salesforce"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Snowflake"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Wavefront"
        })]
      })
    })]
  }));
};

const List = ({
  children,
  nested
}) => {
  const listStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${nested ? 0 : 8}px;
    }
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: listStyle,
    children: children
  });
};

const Item = ({
  children,
  title,
  image
}) => {
  const imageUrl = image ? image : 'public/img/licensing/checkmark.svg';
  const itemStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `;
  const titleStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    font-weight: 500;
    line-height: 1.7;
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: itemStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: imageUrl,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: titleStyle,
        children: title
      }), children]
    })]
  });
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'upgrading')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(UpgradePage));

/***/ }),

/***/ "./public/app/features/admin/state/apis.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerStats": () => (/* binding */ getServerStats)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

const getServerStats = async () => {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('api/admin/stats').catch(err => {
    console.error(err);
    return null;
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Loader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Page.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Loader = ({
  text = 'Loading...'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Page__WEBPACK_IMPORTED_MODULE_2__.Page, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "page-loader-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: text
      })
    })
  });
};

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19hZG1pbl9VcGdyYWRlUGFnZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFTyxNQUFNUyxrQkFBa0IsR0FBRyxNQUFNO0FBQUE7O0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0MsU0FBUyxDQUFDTCxzREFBUyxFQUFWLENBQXhCO0FBQ0EsUUFBTSxDQUFDTSxJQUFELEVBQU9DLE9BQVAsSUFBa0JaLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU0sQ0FBQ2EsSUFBRCxFQUFPQyxPQUFQLElBQWtCZCwrQ0FBUSxDQUFDO0FBQy9CZSxJQUFBQSxJQUFJLEVBQUUsUUFEeUI7QUFFL0JDLElBQUFBLEtBQUssRUFBRVQsbUVBQUEsR0FBd0IsT0FBeEIsR0FBa0M7QUFGVixHQUFELENBQWhDOztBQUlBLFFBQU1ZLFNBQVMsR0FBRyxNQUFNUCxPQUFPLENBQUMsS0FBRCxDQUEvQjs7QUFDQSxRQUFNUSxPQUFPLEdBQUcsTUFBTTtBQUNwQmQsSUFBQUEsK0RBQWEsR0FDVmUsSUFESCxDQUNRLDBCQURSLEVBQ29DUixJQURwQyxFQUVHUyxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixDQUFuQjtBQUNBSixNQUFBQSxTQUFTO0FBQ1YsS0FMSDtBQU1ELEdBUEQ7O0FBU0Esc0JBQ0U7QUFBQSw0QkFDRSx3REFBQyw4Q0FBRDtBQUFPLFdBQUssRUFBRSxlQUFkO0FBQStCLFlBQU0sRUFBRVIsSUFBdkM7QUFBNkMsZUFBUyxFQUFFUSxTQUF4RDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRVYsTUFBTSxDQUFDaUIsSUFBdkI7QUFBQSwrQkFDRSx1REFBQyxtREFBRDtBQUNFLGdCQUFNLEVBQUUsR0FEVjtBQUVFLGVBQUsscUJBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixJQUFmLEVBQXFCLElBQXJCLEVB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T0E7QUFzQk8sTUFBTS9DLGNBQWMsR0FBRyxZQUF3QztBQUNwRSxTQUFPcEYsK0RBQWEsR0FDakIySixHQURJLENBQ0EsaUJBREEsRUFFSkMsS0FGSSxDQUVHQyxHQUFELElBQVM7QUFDZDNJLElBQUFBLE9BQU8sQ0FBQzRJLEtBQVIsQ0FBY0QsR0FBZDtBQUNBLFdBQU8sSUFBUDtBQUNELEdBTEksQ0FBUDtBQU1ELENBUE07Ozs7Ozs7Ozs7Ozs7OztBQ3RCUDtBQUNBO0FBQ0E7O0FBTU8sTUFBTXZFLE1BQU0sR0FBRyxDQUFDO0FBQUUvRCxFQUFBQSxJQUFJLEdBQUc7QUFBVCxDQUFELEtBQW9DO0FBQ3hELHNCQUNFLHVEQUFDLHVDQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw2QkFDRSx1REFBQywyREFBRDtBQUFvQixZQUFJLEVBQUVBO0FBQTFCO0FBREY7QUFERixJQURGO0FBT0QsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7QUFDQTtBQUNBOztBQUdPLE1BQU0wRyxJQUFjLEdBQUcsQ0FBQztBQUFFL0QsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQzlDLFFBQU0vRCxNQUFNLEdBQUcrRSx1REFBVSxDQUFDOUUsU0FBRCxDQUF6QjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELE1BQWhCO0FBQUEsZ0JBQXlCK0Q7QUFBekI7QUFERixJQURGO0FBS0QsQ0FQTTs7QUFTUCxNQUFNOUQsU0FBUyxHQUFJTSxLQUFELElBQ2hCZiw2Q0FBSTtBQUNOLHFCQUFxQmUsS0FBSyxDQUFDNkcsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdEMsR0FIQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0NyYXdsZXJTdGFydEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vQ3Jhd2xlclN0YXR1cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vTGljZW5zZUNocm9tZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vU2VydmVyU3RhdHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL1VwZ3JhZGVQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9zdGF0ZS9hcGlzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29kZUVkaXRvciwgTW9kYWwsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgY29uc3QgQ3Jhd2xlclN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModXNlVGhlbWUyKCkpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKHtcbiAgICBtb2RlOiAndGh1bWJzJyxcbiAgICB0aGVtZTogY29uZmlnLnRoZW1lMi5pc0xpZ2h0ID8gJ2xpZ2h0JyA6ICdkYXJrJyxcbiAgfSk7XG4gIGNvbnN0IG9uRGlzbWlzcyA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuICBjb25zdCBkb1N0YXJ0ID0gKCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoJy9hcGkvYWRtaW4vY3Jhd2xlci9zdGFydCcsIGJvZHkpXG4gICAgICAudGhlbigodikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR09UJywgdik7XG4gICAgICAgIG9uRGlzbWlzcygpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIHRpdGxlPXsnU3RhcnQgY3Jhd2xlcid9IGlzT3Blbj17b3Blbn0gb25EaXNtaXNzPXtvbkRpc21pc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICAgIDxDb2RlRWRpdG9yXG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKSA/PyAnJ31cbiAgICAgICAgICAgIHNob3dMaW5lTnVtYmVycz17ZmFsc2V9XG4gICAgICAgICAgICByZWFkT25seT17ZmFsc2V9XG4gICAgICAgICAgICBsYW5ndWFnZT1cImpzb25cIlxuICAgICAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICAgICAgb25CbHVyPXsodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHNldEJvZHkoSlNPTi5wYXJzZSh0ZXh0KSk7IC8vIGZvcmNlIEpTT04/XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZG9TdGFydH0+U3RhcnQ8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgICAgPC9Nb2RhbD5cblxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICBTdGFydFxuICAgICAgPC9CdXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBjc3NgXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50LCBpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQsIExpdmVDaGFubmVsU2NvcGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGdldEdyYWZhbmFMaXZlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBDcmF3bGVyU3RhcnRCdXR0b24gfSBmcm9tICcuL0NyYXdsZXJTdGFydEJ1dHRvbic7XG5cbmludGVyZmFjZSBDcmF3bGVyU3RhdHVzTWVzc2FnZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIHN0YXJ0ZWQ6IHN0cmluZztcbiAgZmluaXNoZWQ6IHN0cmluZztcbiAgY29tcGxldGU6IG51bWJlcjtcbiAgcXVldWU6IG51bWJlcjtcbiAgbGFzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ3Jhd2xlclN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lMigpKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPENyYXdsZXJTdGF0dXNNZXNzYWdlPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gZ2V0R3JhZmFuYUxpdmVTcnYoKVxuICAgICAgLmdldFN0cmVhbTxDcmF3bGVyU3RhdHVzTWVzc2FnZT4oe1xuICAgICAgICBzY29wZTogTGl2ZUNoYW5uZWxTY29wZS5HcmFmYW5hLFxuICAgICAgICBuYW1lc3BhY2U6ICdicm9hZGNhc3QnLFxuICAgICAgICBwYXRoOiAnY3Jhd2xlcicsXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChldnQpID0+IHtcbiAgICAgICAgICBpZiAoaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudChldnQpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZXZ0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50KGV2dCkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhldnQubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBpZiAoIXN0YXR1cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICBObyBzdGF0dXMgKG5ldmVyIHJ1bilcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxDcmF3bGVyU3RhcnRCdXR0b24gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShzdGF0dXMsIG51bGwsIDIpfTwvcHJlPlxuICAgICAge3N0YXR1cy5zdGF0ZSAhPT0gJ3J1bm5pbmcnICYmIDxDcmF3bGVyU3RhcnRCdXR0b24gLz59XG4gICAgICB7c3RhdHVzLnN0YXRlICE9PSAnc3RvcHBlZCcgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvYWRtaW4vY3Jhd2xlci9zdG9wJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN0b3BcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xuICAgIGAsXG4gICAgcnVubmluZzogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3R5bGVzRmFjdG9yeSwgdXNlVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmNvbnN0IHRpdGxlID0geyBmb250V2VpZ2h0OiA1MDAsIGZvbnRTaXplOiAnMjZweCcsIGxpbmVIZWlnaHQ6ICcxMjMlJyB9O1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIGNvbnN0IGJhY2tncm91bmRVcmwgPSB0aGVtZS5pc0RhcmsgPyAncHVibGljL2ltZy9saWNlbnNpbmcvaGVhZGVyX2Rhcmsuc3ZnJyA6ICdwdWJsaWMvaW1nL2xpY2Vuc2luZy9oZWFkZXJfbGlnaHQuc3ZnJztcbiAgY29uc3QgZm9vdGVyQmcgPSB0aGVtZS5pc0RhcmsgPyB0aGVtZS5wYWxldHRlLmRhcms5IDogdGhlbWUucGFsZXR0ZS5ncmF5NjtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgcGFkZGluZzogMzZweCA3OXB4O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucGFuZWxCZ307XG4gICAgYCxcbiAgICBmb290ZXI6IGNzc2BcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke2Zvb3RlckJnfTtcbiAgICBgLFxuICAgIGhlYWRlcjogY3NzYFxuICAgICAgaGVpZ2h0OiAxMzdweDtcbiAgICAgIHBhZGRpbmc6IDQwcHggMCAwIDc5cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJyR7YmFja2dyb3VuZFVybH0nKSByaWdodDtcbiAgICBgLFxuICB9O1xufSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGhlYWRlcjogc3RyaW5nO1xuICBzdWJoZWFkZXI/OiBzdHJpbmc7XG4gIGVkaXRpb25Ob3RpY2U/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGljZW5zZUNocm9tZSh7IGhlYWRlciwgZWRpdGlvbk5vdGljZSwgc3ViaGVhZGVyLCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh0aGVtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8aDIgc3R5bGU9e3RpdGxlfT57aGVhZGVyfTwvaDI+XG4gICAgICAgIHtzdWJoZWFkZXIgJiYgPGgzPntzdWJoZWFkZXJ9PC9oMz59XG5cbiAgICAgICAgPENpcmNsZVxuICAgICAgICAgIHNpemU9XCIxMjhweFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggMjRweCByZ2JhKDI0LCA1OCwgMTEwLCAwLjQ1KScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBBMUMzNicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogJzE5cHgnLFxuICAgICAgICAgICAgbGVmdDogJzcxJScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cInB1YmxpYy9pbWcvZ3JhZmFuYV9pY29uLnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJHcmFmYW5hXCJcbiAgICAgICAgICAgIHdpZHRoPVwiODBweFwiXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzIzcHgnLCB0b3A6ICcyMHB4JyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2lyY2xlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT57Y2hpbGRyZW59PC9kaXY+XG5cbiAgICAgIHtlZGl0aW9uTm90aWNlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT57ZWRpdGlvbk5vdGljZX08L2Rpdj59XG4gICAgPC8+XG4gICk7XG59XG5cbmludGVyZmFjZSBDaXJjbGVQcm9wcyB7XG4gIHNpemU6IHN0cmluZztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgY29uc3QgQ2lyY2xlOiBSZWFjdC5GQzxDaXJjbGVQcm9wcz4gPSAoeyBzaXplLCBzdHlsZSwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IENhcmRDb250YWluZXIsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGdldFNlcnZlclN0YXRzLCBTZXJ2ZXJTdGF0IH0gZnJvbSAnLi9zdGF0ZS9hcGlzJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9Mb2FkZXInO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBDcmF3bGVyU3RhdHVzIH0gZnJvbSAnLi9DcmF3bGVyU3RhdHVzJztcblxuZXhwb3J0IGNvbnN0IFNlcnZlclN0YXRzID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPFNlcnZlclN0YXQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGhhc0FjY2Vzc1RvRGF0YVNvdXJjZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbik7XG4gIGNvbnN0IGhhc0FjY2Vzc1RvQWRtaW5Vc2VycyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uVXNlcnNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblNlcnZlclN0YXRzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbikpIHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIGdldFNlcnZlclN0YXRzKCkudGhlbigoc3RhdHMpID0+IHtcbiAgICAgICAgc2V0U3RhdHMoc3RhdHMpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKCFjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblNlcnZlclN0YXRzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SW5zdGFuY2Ugc3RhdGlzdGljczwvaDI+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgICAgPExvYWRlciB0ZXh0PXsnTG9hZGluZyBpbnN0YW5jZSBzdGF0cy4uLid9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHN0YXRzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICBjb250ZW50PXtbXG4gICAgICAgICAgICAgIHsgbmFtZTogJ0Rhc2hib2FyZHMgKHN0YXJyZWQpJywgdmFsdWU6IGAke3N0YXRzLmRhc2hib2FyZHN9ICgke3N0YXRzLnN0YXJzfSlgIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1RhZ3MnLCB2YWx1ZTogc3RhdHMudGFncyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdQbGF5bGlzdHMnLCB2YWx1ZTogc3RhdHMucGxheWxpc3RzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1NuYXBzaG90cycsIHZhbHVlOiBzdGF0cy5zbmFwc2hvdHMgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2Rhc2hib2FyZHMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgTWFuYWdlIGRhc2hib2FyZHNcbiAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvdWJsZVJvd30+XG4gICAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgICAgY29udGVudD17W3sgbmFtZTogJ0RhdGEgc291cmNlcycsIHZhbHVlOiBzdGF0cy5kYXRhc291cmNlcyB9XX1cbiAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICBoYXNBY2Nlc3NUb0RhdGFTb3VyY2VzICYmIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvZGF0YXNvdXJjZXMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICAgIE1hbmFnZSBkYXRhIHNvdXJjZXNcbiAgICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgICAgY29udGVudD17W3sgbmFtZTogJ0FsZXJ0cycsIHZhbHVlOiBzdGF0cy5hbGVydHMgfV19XG4gICAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9hbGVydGluZy9saXN0J30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgICAgQWxlcnRzXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgY29udGVudD17W1xuICAgICAgICAgICAgICB7IG5hbWU6ICdPcmdhbmlzYXRpb25zJywgdmFsdWU6IHN0YXRzLm9yZ3MgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnVXNlcnMgdG90YWwnLCB2YWx1ZTogc3RhdHMudXNlcnMgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnQWN0aXZlIHVzZXJzIGluIGxhc3QgMzAgZGF5cycsIHZhbHVlOiBzdGF0cy5hY3RpdmVVc2VycyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdBY3RpdmUgc2Vzc2lvbnMnLCB2YWx1ZTogc3RhdHMuYWN0aXZlU2Vzc2lvbnMgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICBoYXNBY2Nlc3NUb0FkbWluVXNlcnMgJiYgKFxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvYWRtaW4vdXNlcnMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICBNYW5hZ2UgdXNlcnNcbiAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5ObyBzdGF0cyBmb3VuZC48L3A+XG4gICAgICApfVxuXG4gICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLmRhc2hib2FyZFByZXZpZXdzICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5kYXNoYm9hcmRQcmV2aWV3c0FkbWluICYmIDxDcmF3bGVyU3RhdHVzIC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgJiA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICB9XG5cbiAgICAgICYgPiBkaXYge1xuICAgICAgICB3aWR0aDogMzMuMyU7XG4gICAgICB9XG4gICAgYCxcbiAgICBkb3VibGVSb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgfVxuICAgIGAsXG5cbiAgICBsb2FkZXI6IGNzc2BcbiAgICAgIGhlaWdodDogMjkwcHg7XG4gICAgYCxcblxuICAgIG5vdEZvdW5kOiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5oNi5mb250U2l6ZX07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGAsXG4gIH07XG59O1xuXG50eXBlIFN0YXRDYXJkUHJvcHMgPSB7XG4gIGNvbnRlbnQ6IEFycmF5PFJlY29yZDxzdHJpbmcsIG51bWJlciB8IHN0cmluZz4+O1xuICBmb290ZXI/OiBKU1guRWxlbWVudCB8IGJvb2xlYW47XG59O1xuXG5jb25zdCBTdGF0Q2FyZCA9ICh7IGNvbnRlbnQsIGZvb3RlciB9OiBTdGF0Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0Q2FyZFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPENhcmRDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBkaXNhYmxlSG92ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Zm9vdGVyICYmIDxkaXY+e2Zvb3Rlcn08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhcmRDb250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZXRDYXJkU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gICAgaW5uZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICBgLFxuICAgIHJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBMaWNlbnNlQ2hyb21lIH0gZnJvbSAnLi9MaWNlbnNlQ2hyb21lJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBTZXJ2ZXJTdGF0cyB9IGZyb20gJy4vU2VydmVyU3RhdHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVcGdyYWRlUGFnZSh7IG5hdk1vZGVsIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8U2VydmVyU3RhdHMgLz5cbiAgICAgICAgPFVwZ3JhZGVJbmZvXG4gICAgICAgICAgZWRpdGlvbk5vdGljZT1cIllvdSBhcmUgcnVubmluZyB0aGUgb3Blbi1zb3VyY2UgdmVyc2lvbiBvZiBHcmFmYW5hLlxuICAgICAgICBZb3UgaGF2ZSB0byBpbnN0YWxsIHRoZSBFbnRlcnByaXNlIGVkaXRpb24gaW4gb3JkZXIgZW5hYmxlIEVudGVycHJpc2UgZmVhdHVyZXMuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmNvbnN0IHRpdGxlU3R5bGVzID0geyBmb250V2VpZ2h0OiA1MDAsIGZvbnRTaXplOiAnMjZweCcsIGxpbmVIZWlnaHQ6ICcxMjMlJyB9O1xuXG5pbnRlcmZhY2UgVXBncmFkZUluZm9Qcm9wcyB7XG4gIGVkaXRpb25Ob3RpY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBVcGdyYWRlSW5mbzogUmVhY3QuRkM8VXBncmFkZUluZm9Qcm9wcz4gPSAoeyBlZGl0aW9uTm90aWNlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RW50ZXJwcmlzZSBsaWNlbnNlPC9oMj5cbiAgICAgIDxMaWNlbnNlQ2hyb21lIGhlYWRlcj1cIkdyYWZhbmEgRW50ZXJwcmlzZVwiIHN1YmhlYWRlcj1cIkdldCB5b3VyIGZyZWUgdHJpYWxcIiBlZGl0aW9uTm90aWNlPXtlZGl0aW9uTm90aWNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgIDxGZWF0dXJlSW5mbyAvPlxuICAgICAgICAgIDxTZXJ2aWNlSW5mbyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGljZW5zZUNocm9tZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbHVtbjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XG4gICAgICByb3ctZ2FwOiA0MHB4O1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0KX0gMDtcbiAgICBgLFxuICB9O1xufTtcblxuY29uc3QgR2V0RW50ZXJwcmlzZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0MHB4JywgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0+XG4gICAgICA8aDIgc3R5bGU9e3RpdGxlU3R5bGVzfT5HZXQgR3JhZmFuYSBFbnRlcnByaXNlPC9oMj5cbiAgICAgIDxDYWxsVG9BY3Rpb24gLz5cbiAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcxMnB4JyB9fT5cbiAgICAgICAgWW91IGNhbiB1c2UgdGhlIHRyaWFsIHZlcnNpb24gZm9yIGZyZWUgZm9yIDMwIGRheXMuIFdlIHdpbGwgcmVtaW5kIHlvdSBhYm91dCBpdCBmaXZlIGRheXMgYmVmb3JlIHRoZSB0cmlhbFxuICAgICAgICBwZXJpb2QgZW5kcy5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENhbGxUb0FjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmtCdXR0b25cbiAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgIHNpemU9XCJsZ1wiXG4gICAgICBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9jb250YWN0P2Fib3V0PWdyYWZhbmEtZW50ZXJwcmlzZSZ1dG1fc291cmNlPWdyYWZhbmEtdXBncmFkZS1wYWdlXCJcbiAgICA+XG4gICAgICBDb250YWN0IHVzIGFuZCBnZXQgYSBmcmVlIHRyaWFsXG4gICAgPC9MaW5rQnV0dG9uPlxuICApO1xufTtcblxuY29uc3QgU2VydmljZUluZm86IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDQ+QXQgeW91ciBzZXJ2aWNlPC9oND5cblxuICAgICAgPExpc3Q+XG4gICAgICAgIDxJdGVtIHRpdGxlPVwiRW50ZXJwcmlzZSBQbHVnaW5zXCIgaW1hZ2U9XCJwdWJsaWMvaW1nL2xpY2Vuc2luZy9wbHVnaW5fZW50ZXJwcmlzZS5zdmdcIiAvPlxuICAgICAgICA8SXRlbSB0aXRsZT1cIkNyaXRpY2FsIFNMQTogMiBob3Vyc1wiIGltYWdlPVwicHVibGljL2ltZy9saWNlbnNpbmcvc2xhLnN2Z1wiIC8+XG4gICAgICAgIDxJdGVtIHRpdGxlPVwiVW5saW1pdGVkIEV4cGVydCBTdXBwb3J0XCIgaW1hZ2U9XCJwdWJsaWMvaW1nL2xpY2Vuc2luZy9jdXN0b21lcl9zdXBwb3J0LnN2Z1wiPlxuICAgICAgICAgIDI0IHggNyB4IDM2NSBzdXBwb3J0IHZpYVxuICAgICAgICAgIDxMaXN0IG5lc3RlZD17dHJ1ZX0+XG4gICAgICAgICAgICA8SXRlbSB0aXRsZT1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxJdGVtIHRpdGxlPVwiUHJpdmF0ZSBTbGFjayBjaGFubmVsXCIgLz5cbiAgICAgICAgICAgIDxJdGVtIHRpdGxlPVwiUGhvbmVcIiAvPlxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbSB0aXRsZT1cIkhhbmQtaW4taGFuZCBzdXBwb3J0XCIgaW1hZ2U9XCJwdWJsaWMvaW1nL2xpY2Vuc2luZy9oYW5kaW5oYW5kX3N1cHBvcnQuc3ZnXCI+XG4gICAgICAgICAgaW4gdGhlIHVwZ3JhZGUgcHJvY2Vzc1xuICAgICAgICA8L0l0ZW0+XG4gICAgICA8L0xpc3Q+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcgfX0+XG4gICAgICAgIDxzdHJvbmc+QWxzbyBpbmNsdWRlZDo8L3N0cm9uZz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEluZGVtbmlmaWNhdGlvbiwgd29ya2luZyB3aXRoIEdyYWZhbmEgTGFicyBvbiBmdXR1cmUgcHJpb3JpdGl6YXRpb24sIGFuZCB0cmFpbmluZyBmcm9tIHRoZSBjb3JlIEdyYWZhbmEgdGVhbS5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8R2V0RW50ZXJwcmlzZSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgRmVhdHVyZUluZm86IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMTFweCcgfX0+XG4gICAgICA8aDQ+RW5oYW5jZWQgZnVuY3Rpb25hbGl0eTwvaDQ+XG4gICAgICA8RmVhdHVyZUxpc3RpbmcgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEZlYXR1cmVMaXN0aW5nOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlzdD5cbiAgICAgIDxJdGVtIHRpdGxlPVwiRGF0YSBzb3VyY2UgcGVybWlzc2lvbnNcIiAvPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJSZXBvcnRpbmdcIiAvPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJTQU1MIGF1dGhlbnRpY2F0aW9uXCIgLz5cbiAgICAgIDxJdGVtIHRpdGxlPVwiRW5oYW5jZWQgTERBUCBpbnRlZ3JhdGlvblwiIC8+XG4gICAgICA8SXRlbSB0aXRsZT1cIlRlYW0gU3luY1wiPkxEQVAsIEdpdEh1YiBPQXV0aCwgQXV0aCBQcm94eSwgT2t0YTwvSXRlbT5cbiAgICAgIDxJdGVtIHRpdGxlPVwiV2hpdGUgbGFiZWxpbmdcIiAvPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJBdWRpdGluZ1wiIC8+XG4gICAgICA8SXRlbSB0aXRsZT1cIlNldHRpbmdzIHVwZGF0ZXMgYXQgcnVudGltZVwiIC8+XG4gICAgICA8SXRlbSB0aXRsZT1cIkdyYWZhbmEgdXNhZ2UgaW5zaWdodHNcIj5cbiAgICAgICAgPExpc3QgbmVzdGVkPXt0cnVlfT5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIlNvcnQgZGFzaGJvYXJkcyBieSBwb3B1bGFyaXR5IGluIHNlYXJjaFwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJGaW5kIHVudXNlZCBkYXNoYm9hcmRzXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIkRhc2hib2FyZCB1c2FnZSBzdGF0cyBkcmF3ZXJcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiRGFzaGJvYXJkIHByZXNlbmNlIGluZGljYXRvcnNcIiAvPlxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbSB0aXRsZT1cIkVudGVycHJpc2UgcGx1Z2luc1wiPlxuICAgICAgICA8TGlzdCBuZXN0ZWQ9e3RydWV9PlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiT3JhY2xlXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIlNwbHVua1wiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJTZXJ2aWNlIE5vd1wiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJEeW5hdHJhY2VcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiTmV3IFJlbGljXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIkRhdGFEb2dcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiQXBwRHluYW1pY3NcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiU0FQIEhBTkHCrlwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJHaXRsYWJcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiSG9uZXljb21iXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIkppcmFcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiTW9uZ29EQlwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJTYWxlc2ZvcmNlXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIlNub3dmbGFrZVwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJXYXZlZnJvbnRcIiAvPlxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L0l0ZW0+XG4gICAgPC9MaXN0PlxuICApO1xufTtcblxuaW50ZXJmYWNlIExpc3RQcm9wcyB7XG4gIG5lc3RlZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IExpc3Q6IFJlYWN0LkZDPExpc3RQcm9wcz4gPSAoeyBjaGlsZHJlbiwgbmVzdGVkIH0pID0+IHtcbiAgY29uc3QgbGlzdFN0eWxlID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgPiBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHtuZXN0ZWQgPyAwIDogOH1weDtcbiAgICB9XG4gIGA7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtsaXN0U3R5bGV9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEl0ZW06IFJlYWN0LkZDPEl0ZW1Qcm9wcz4gPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGltYWdlIH0pID0+IHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBpbWFnZSA/IGltYWdlIDogJ3B1YmxpYy9pbWcvbGljZW5zaW5nL2NoZWNrbWFyay5zdmcnO1xuICBjb25zdCBpdGVtU3R5bGUgPSBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgID4gaW1nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICB9XG4gIGA7XG4gIGNvbnN0IHRpdGxlU3R5bGUgPSBjc3NgXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICBgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2l0ZW1TdHlsZX0+XG4gICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIlwiIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGl0bGVTdHlsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAndXBncmFkaW5nJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFVwZ3JhZGVQYWdlKTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTdGF0IHtcbiAgYWN0aXZlQWRtaW5zOiBudW1iZXI7XG4gIGFjdGl2ZUVkaXRvcnM6IG51bWJlcjtcbiAgYWN0aXZlU2Vzc2lvbnM6IG51bWJlcjtcbiAgYWN0aXZlVXNlcnM6IG51bWJlcjtcbiAgYWN0aXZlVmlld2VyczogbnVtYmVyO1xuICBhZG1pbnM6IG51bWJlcjtcbiAgYWxlcnRzOiBudW1iZXI7XG4gIGRhc2hib2FyZHM6IG51bWJlcjtcbiAgZGF0YXNvdXJjZXM6IG51bWJlcjtcbiAgZWRpdG9yczogbnVtYmVyO1xuICBvcmdzOiBudW1iZXI7XG4gIHBsYXlsaXN0czogbnVtYmVyO1xuICBzbmFwc2hvdHM6IG51bWJlcjtcbiAgc3RhcnM6IG51bWJlcjtcbiAgdGFnczogbnVtYmVyO1xuICB1c2VyczogbnVtYmVyO1xuICB2aWV3ZXJzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTdGF0cyA9IGFzeW5jICgpOiBQcm9taXNlPFNlcnZlclN0YXQgfCBudWxsPiA9PiB7XG4gIHJldHVybiBnZXRCYWNrZW5kU3J2KClcbiAgICAuZ2V0KCdhcGkvYWRtaW4vc3RhdHMnKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9hZGluZ1BsYWNlaG9sZGVyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vUGFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKHsgdGV4dCA9ICdMb2FkaW5nLi4uJyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxvYWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD17dGV4dH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT5cbiAgY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygzKX07XG4gIGA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNzcyIsIkJ1dHRvbiIsIkNvZGVFZGl0b3IiLCJNb2RhbCIsInVzZVRoZW1lMiIsImdldEJhY2tlbmRTcnYiLCJjb25maWciLCJDcmF3bGVyU3RhcnRCdXR0b24iLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJvcGVuIiwic2V0T3BlbiIsImJvZHkiLCJzZXRCb2R5IiwibW9kZSIsInRoZW1lIiwidGhlbWUyIiwiaXNMaWdodCIsIm9uRGlzbWlzcyIsImRvU3RhcnQiLCJwb3N0IiwidGhlbiIsInYiLCJjb25zb2xlIiwibG9nIiwid3JhcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0IiwicGFyc2UiLCJ1c2VFZmZlY3QiLCJpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50IiwiaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50IiwiTGl2ZUNoYW5uZWxTY29wZSIsImdldEdyYWZhbmFMaXZlU3J2IiwiQ3Jhd2xlclN0YXR1cyIsInN0YXR1cyIsInNldFN0YXR1cyIsInN1YnNjcmlwdGlvbiIsImdldFN0cmVhbSIsInNjb3BlIiwiR3JhZmFuYSIsIm5hbWVzcGFjZSIsInBhdGgiLCJzdWJzY3JpYmUiLCJuZXh0IiwiZXZ0IiwibWVzc2FnZSIsInVuc3Vic2NyaWJlIiwic3RhdGUiLCJydW5uaW5nIiwic3R5bGVzRmFjdG9yeSIsInVzZVRoZW1lIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZFVybCIsImlzRGFyayIsImZvb3RlckJnIiwicGFsZXR0ZSIsImRhcms5IiwiZ3JheTYiLCJjb250YWluZXIiLCJjb2xvcnMiLCJwYW5lbEJnIiwiZm9vdGVyIiwiaGVhZGVyIiwiTGljZW5zZUNocm9tZSIsImVkaXRpb25Ob3RpY2UiLCJzdWJoZWFkZXIiLCJjaGlsZHJlbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJDaXJjbGUiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvdHRvbSIsInJpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiQ2FyZENvbnRhaW5lciIsIkxpbmtCdXR0b24iLCJ1c2VTdHlsZXMyIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImdldFNlcnZlclN0YXRzIiwiY29udGV4dFNydiIsIkxvYWRlciIsIlNlcnZlclN0YXRzIiwic3RhdHMiLCJzZXRTdGF0cyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhc0FjY2Vzc1RvRGF0YVNvdXJjZXMiLCJoYXNBY2Nlc3MiLCJEYXRhU291cmNlc1JlYWQiLCJpc0dyYWZhbmFBZG1pbiIsImhhc0FjY2Vzc1RvQWRtaW5Vc2VycyIsIlVzZXJzUmVhZCIsIkFjdGlvblNlcnZlclN0YXRzUmVhZCIsImxvYWRlciIsInJvdyIsIm5hbWUiLCJ2YWx1ZSIsImRhc2hib2FyZHMiLCJzdGFycyIsInRhZ3MiLCJwbGF5bGlzdHMiLCJzbmFwc2hvdHMiLCJkb3VibGVSb3ciLCJkYXRhc291cmNlcyIsImFsZXJ0cyIsIm9yZ3MiLCJ1c2VycyIsImFjdGl2ZVVzZXJzIiwiYWN0aXZlU2Vzc2lvbnMiLCJub3RGb3VuZCIsImZlYXR1cmVUb2dnbGVzIiwiZGFzaGJvYXJkUHJldmlld3MiLCJkYXNoYm9hcmRQcmV2aWV3c0FkbWluIiwic3BhY2luZyIsInR5cG9ncmFwaHkiLCJoNiIsIlN0YXRDYXJkIiwiY29udGVudCIsImdldENhcmRTdHlsZXMiLCJpbm5lciIsIm1hcCIsIml0ZW0iLCJjb25uZWN0IiwiUGFnZSIsImdldE5hdk1vZGVsIiwiVXBncmFkZVBhZ2UiLCJuYXZNb2RlbCIsInRpdGxlU3R5bGVzIiwiVXBncmFkZUluZm8iLCJjb2x1bW4iLCJHZXRFbnRlcnByaXNlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsIkNhbGxUb0FjdGlvbiIsIlNlcnZpY2VJbmZvIiwiRmVhdHVyZUluZm8iLCJwYWRkaW5nUmlnaHQiLCJGZWF0dXJlTGlzdGluZyIsIkxpc3QiLCJuZXN0ZWQiLCJsaXN0U3R5bGUiLCJJdGVtIiwiaW1hZ2UiLCJpbWFnZVVybCIsIml0ZW1TdHlsZSIsInRpdGxlU3R5bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZJbmRleCIsImdldCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJMb2FkaW5nUGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9
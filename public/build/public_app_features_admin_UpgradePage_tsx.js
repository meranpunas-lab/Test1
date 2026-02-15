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
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _LicenseChrome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/admin/LicenseChrome.tsx");
/* harmony import */ var _ServerStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/ServerStats.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;










function UpgradePage({
  navModel
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ServerStats__WEBPACK_IMPORTED_MODULE_5__.ServerStats, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(UpgradeInfo, {})]
    }))
  });
}
const UpgradeInfo = ({
  editionNotice
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LicenseChrome__WEBPACK_IMPORTED_MODULE_4__.LicenseChrome, {
      header: "AKMind Solutions",
      editionNotice: editionNotice
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, 'upgrading')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19hZG1pbl9VcGdyYWRlUGFnZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFTyxNQUFNUyxrQkFBa0IsR0FBRyxNQUFNO0FBQUE7O0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0MsU0FBUyxDQUFDTCxzREFBUyxFQUFWLENBQXhCO0FBQ0EsUUFBTSxDQUFDTSxJQUFELEVBQU9DLE9BQVAsSUFBa0JaLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU0sQ0FBQ2EsSUFBRCxFQUFPQyxPQUFQLElBQWtCZCwrQ0FBUSxDQUFDO0FBQy9CZSxJQUFBQSxJQUFJLEVBQUUsUUFEeUI7QUFFL0JDLElBQUFBLEtBQUssRUFBRVQsbUVBQUEsR0FBd0IsT0FBeEIsR0FBa0M7QUFGVixHQUFELENBQWhDOztBQUlBLFFBQU1ZLFNBQVMsR0FBRyxNQUFNUCxPQUFPLENBQUMsS0FBRCxDQUEvQjs7QUFDQSxRQUFNUSxPQUFPLEdBQUcsTUFBTTtBQUNwQmQsSUFBQUEsK0RBQWEsR0FDVmUsSUFESCxDQUNRLDBCQURSLEVBQ29DUixJQURwQyxFQUVHUyxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixDQUFuQjtBQUNBSixNQUFBQSxTQUFTO0FBQ1YsS0FMSDtBQU1ELEdBUEQ7O0FBU0Esc0JBQ0U7QUFBQSw0QkFDRSx3REFBQyw4Q0FBRDtBQUFPLFdBQUssRUFBRSxlQUFkO0FBQStCLFlBQU0sRUFBRVIsSUFBdkM7QUFBNkMsZUFBUyxFQUFFUSxTQUF4RDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRVYsTUFBTSxDQUFDaUIsSUFBdkI7QUFBQSwrQkFDRSx1REFBQyxtREFBRDtBQUNFLGdCQUFNLEVBQUUsR0FEVjtBQUVFLGVBQUsscUJBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixJQUFmLEVBQXFCLElBQXJCLEVB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QTtBQUNBOztBQUdPLE1BQU0wRyxJQUFjLEdBQUcsQ0FBQztBQUFFL0QsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQzlDLFFBQU0vRCxNQUFNLEdBQUcrRSx1REFBVSxDQUFDOUUsU0FBRCxDQUF6QjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELE1BQWhCO0FBQUEsZ0JBQXlCK0Q7QUFBekI7QUFERixJQURGO0FBS0QsQ0FQTTs7QUFTUCxNQUFNOUQsU0FBUyxHQUFJTSxLQUFELElBQ2hCZiw2Q0FBSTtBQUNOLHFCQUFxQmUsS0FBSyxDQUFDNkcsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdEMsR0FIQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0NyYXdsZXJTdGFydEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vQ3Jhd2xlclN0YXR1cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vTGljZW5zZUNocm9tZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vU2VydmVyU3RhdHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL1VwZ3JhZGVQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9zdGF0ZS9hcGlzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29kZUVkaXRvciwgTW9kYWwsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgY29uc3QgQ3Jhd2xlclN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModXNlVGhlbWUyKCkpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKHtcbiAgICBtb2RlOiAndGh1bWJzJyxcbiAgICB0aGVtZTogY29uZmlnLnRoZW1lMi5pc0xpZ2h0ID8gJ2xpZ2h0JyA6ICdkYXJrJyxcbiAgfSk7XG4gIGNvbnN0IG9uRGlzbWlzcyA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuICBjb25zdCBkb1N0YXJ0ID0gKCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoJy9hcGkvYWRtaW4vY3Jhd2xlci9zdGFydCcsIGJvZHkpXG4gICAgICAudGhlbigodikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR09UJywgdik7XG4gICAgICAgIG9uRGlzbWlzcygpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIHRpdGxlPXsnU3RhcnQgY3Jhd2xlcid9IGlzT3Blbj17b3Blbn0gb25EaXNtaXNzPXtvbkRpc21pc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICAgIDxDb2RlRWRpdG9yXG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKSA/PyAnJ31cbiAgICAgICAgICAgIHNob3dMaW5lTnVtYmVycz17ZmFsc2V9XG4gICAgICAgICAgICByZWFkT25seT17ZmFsc2V9XG4gICAgICAgICAgICBsYW5ndWFnZT1cImpzb25cIlxuICAgICAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICAgICAgb25CbHVyPXsodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHNldEJvZHkoSlNPTi5wYXJzZSh0ZXh0KSk7IC8vIGZvcmNlIEpTT04/XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZG9TdGFydH0+U3RhcnQ8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgICAgPC9Nb2RhbD5cblxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICBTdGFydFxuICAgICAgPC9CdXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBjc3NgXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50LCBpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQsIExpdmVDaGFubmVsU2NvcGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGdldEdyYWZhbmFMaXZlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBDcmF3bGVyU3RhcnRCdXR0b24gfSBmcm9tICcuL0NyYXdsZXJTdGFydEJ1dHRvbic7XG5cbmludGVyZmFjZSBDcmF3bGVyU3RhdHVzTWVzc2FnZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIHN0YXJ0ZWQ6IHN0cmluZztcbiAgZmluaXNoZWQ6IHN0cmluZztcbiAgY29tcGxldGU6IG51bWJlcjtcbiAgcXVldWU6IG51bWJlcjtcbiAgbGFzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ3Jhd2xlclN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lMigpKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPENyYXdsZXJTdGF0dXNNZXNzYWdlPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gZ2V0R3JhZmFuYUxpdmVTcnYoKVxuICAgICAgLmdldFN0cmVhbTxDcmF3bGVyU3RhdHVzTWVzc2FnZT4oe1xuICAgICAgICBzY29wZTogTGl2ZUNoYW5uZWxTY29wZS5HcmFmYW5hLFxuICAgICAgICBuYW1lc3BhY2U6ICdicm9hZGNhc3QnLFxuICAgICAgICBwYXRoOiAnY3Jhd2xlcicsXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChldnQpID0+IHtcbiAgICAgICAgICBpZiAoaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudChldnQpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZXZ0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50KGV2dCkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhldnQubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBpZiAoIXN0YXR1cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICBObyBzdGF0dXMgKG5ldmVyIHJ1bilcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxDcmF3bGVyU3RhcnRCdXR0b24gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShzdGF0dXMsIG51bGwsIDIpfTwvcHJlPlxuICAgICAge3N0YXR1cy5zdGF0ZSAhPT0gJ3J1bm5pbmcnICYmIDxDcmF3bGVyU3RhcnRCdXR0b24gLz59XG4gICAgICB7c3RhdHVzLnN0YXRlICE9PSAnc3RvcHBlZCcgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvYWRtaW4vY3Jhd2xlci9zdG9wJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN0b3BcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xuICAgIGAsXG4gICAgcnVubmluZzogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3R5bGVzRmFjdG9yeSwgdXNlVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmNvbnN0IHRpdGxlID0geyBmb250V2VpZ2h0OiA1MDAsIGZvbnRTaXplOiAnMjZweCcsIGxpbmVIZWlnaHQ6ICcxMjMlJyB9O1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIGNvbnN0IGJhY2tncm91bmRVcmwgPSB0aGVtZS5pc0RhcmsgPyAncHVibGljL2ltZy9saWNlbnNpbmcvaGVhZGVyX2Rhcmsuc3ZnJyA6ICdwdWJsaWMvaW1nL2xpY2Vuc2luZy9oZWFkZXJfbGlnaHQuc3ZnJztcbiAgY29uc3QgZm9vdGVyQmcgPSB0aGVtZS5pc0RhcmsgPyB0aGVtZS5wYWxldHRlLmRhcms5IDogdGhlbWUucGFsZXR0ZS5ncmF5NjtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgcGFkZGluZzogMzZweCA3OXB4O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucGFuZWxCZ307XG4gICAgYCxcbiAgICBmb290ZXI6IGNzc2BcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke2Zvb3RlckJnfTtcbiAgICBgLFxuICAgIGhlYWRlcjogY3NzYFxuICAgICAgaGVpZ2h0OiAxMzdweDtcbiAgICAgIHBhZGRpbmc6IDQwcHggMCAwIDc5cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJyR7YmFja2dyb3VuZFVybH0nKSByaWdodDtcbiAgICBgLFxuICB9O1xufSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGhlYWRlcjogc3RyaW5nO1xuICBzdWJoZWFkZXI/OiBzdHJpbmc7XG4gIGVkaXRpb25Ob3RpY2U/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGljZW5zZUNocm9tZSh7IGhlYWRlciwgZWRpdGlvbk5vdGljZSwgc3ViaGVhZGVyLCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh0aGVtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8aDIgc3R5bGU9e3RpdGxlfT57aGVhZGVyfTwvaDI+XG4gICAgICAgIHtzdWJoZWFkZXIgJiYgPGgzPntzdWJoZWFkZXJ9PC9oMz59XG5cbiAgICAgICAgPENpcmNsZVxuICAgICAgICAgIHNpemU9XCIxMjhweFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggMjRweCByZ2JhKDI0LCA1OCwgMTEwLCAwLjQ1KScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBBMUMzNicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogJzE5cHgnLFxuICAgICAgICAgICAgbGVmdDogJzcxJScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cInB1YmxpYy9pbWcvZ3JhZmFuYV9pY29uLnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJHcmFmYW5hXCJcbiAgICAgICAgICAgIHdpZHRoPVwiODBweFwiXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzIzcHgnLCB0b3A6ICcyMHB4JyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2lyY2xlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT57Y2hpbGRyZW59PC9kaXY+XG5cbiAgICAgIHtlZGl0aW9uTm90aWNlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT57ZWRpdGlvbk5vdGljZX08L2Rpdj59XG4gICAgPC8+XG4gICk7XG59XG5cbmludGVyZmFjZSBDaXJjbGVQcm9wcyB7XG4gIHNpemU6IHN0cmluZztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgY29uc3QgQ2lyY2xlOiBSZWFjdC5GQzxDaXJjbGVQcm9wcz4gPSAoeyBzaXplLCBzdHlsZSwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IENhcmRDb250YWluZXIsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IGdldFNlcnZlclN0YXRzLCBTZXJ2ZXJTdGF0IH0gZnJvbSAnLi9zdGF0ZS9hcGlzJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9Mb2FkZXInO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBDcmF3bGVyU3RhdHVzIH0gZnJvbSAnLi9DcmF3bGVyU3RhdHVzJztcblxuZXhwb3J0IGNvbnN0IFNlcnZlclN0YXRzID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPFNlcnZlclN0YXQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGhhc0FjY2Vzc1RvRGF0YVNvdXJjZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbik7XG4gIGNvbnN0IGhhc0FjY2Vzc1RvQWRtaW5Vc2VycyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uVXNlcnNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblNlcnZlclN0YXRzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbikpIHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIGdldFNlcnZlclN0YXRzKCkudGhlbigoc3RhdHMpID0+IHtcbiAgICAgICAgc2V0U3RhdHMoc3RhdHMpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKCFjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblNlcnZlclN0YXRzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SW5zdGFuY2Ugc3RhdGlzdGljczwvaDI+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgICAgPExvYWRlciB0ZXh0PXsnTG9hZGluZyBpbnN0YW5jZSBzdGF0cy4uLid9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHN0YXRzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICBjb250ZW50PXtbXG4gICAgICAgICAgICAgIHsgbmFtZTogJ0Rhc2hib2FyZHMgKHN0YXJyZWQpJywgdmFsdWU6IGAke3N0YXRzLmRhc2hib2FyZHN9ICgke3N0YXRzLnN0YXJzfSlgIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1RhZ3MnLCB2YWx1ZTogc3RhdHMudGFncyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdQbGF5bGlzdHMnLCB2YWx1ZTogc3RhdHMucGxheWxpc3RzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1NuYXBzaG90cycsIHZhbHVlOiBzdGF0cy5zbmFwc2hvdHMgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2Rhc2hib2FyZHMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgTWFuYWdlIGRhc2hib2FyZHNcbiAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvdWJsZVJvd30+XG4gICAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgICAgY29udGVudD17W3sgbmFtZTogJ0RhdGEgc291cmNlcycsIHZhbHVlOiBzdGF0cy5kYXRhc291cmNlcyB9XX1cbiAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICBoYXNBY2Nlc3NUb0RhdGFTb3VyY2VzICYmIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvZGF0YXNvdXJjZXMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICAgIE1hbmFnZSBkYXRhIHNvdXJjZXNcbiAgICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgICAgY29udGVudD17W3sgbmFtZTogJ0FsZXJ0cycsIHZhbHVlOiBzdGF0cy5hbGVydHMgfV19XG4gICAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9hbGVydGluZy9saXN0J30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgICAgQWxlcnRzXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgY29udGVudD17W1xuICAgICAgICAgICAgICB7IG5hbWU6ICdPcmdhbmlzYXRpb25zJywgdmFsdWU6IHN0YXRzLm9yZ3MgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnVXNlcnMgdG90YWwnLCB2YWx1ZTogc3RhdHMudXNlcnMgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnQWN0aXZlIHVzZXJzIGluIGxhc3QgMzAgZGF5cycsIHZhbHVlOiBzdGF0cy5hY3RpdmVVc2VycyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdBY3RpdmUgc2Vzc2lvbnMnLCB2YWx1ZTogc3RhdHMuYWN0aXZlU2Vzc2lvbnMgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICBoYXNBY2Nlc3NUb0FkbWluVXNlcnMgJiYgKFxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvYWRtaW4vdXNlcnMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICBNYW5hZ2UgdXNlcnNcbiAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5ObyBzdGF0cyBmb3VuZC48L3A+XG4gICAgICApfVxuXG4gICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLmRhc2hib2FyZFByZXZpZXdzICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5kYXNoYm9hcmRQcmV2aWV3c0FkbWluICYmIDxDcmF3bGVyU3RhdHVzIC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgJiA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICB9XG5cbiAgICAgICYgPiBkaXYge1xuICAgICAgICB3aWR0aDogMzMuMyU7XG4gICAgICB9XG4gICAgYCxcbiAgICBkb3VibGVSb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgfVxuICAgIGAsXG5cbiAgICBsb2FkZXI6IGNzc2BcbiAgICAgIGhlaWdodDogMjkwcHg7XG4gICAgYCxcblxuICAgIG5vdEZvdW5kOiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5oNi5mb250U2l6ZX07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGAsXG4gIH07XG59O1xuXG50eXBlIFN0YXRDYXJkUHJvcHMgPSB7XG4gIGNvbnRlbnQ6IEFycmF5PFJlY29yZDxzdHJpbmcsIG51bWJlciB8IHN0cmluZz4+O1xuICBmb290ZXI/OiBKU1guRWxlbWVudCB8IGJvb2xlYW47XG59O1xuXG5jb25zdCBTdGF0Q2FyZCA9ICh7IGNvbnRlbnQsIGZvb3RlciB9OiBTdGF0Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0Q2FyZFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPENhcmRDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBkaXNhYmxlSG92ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Zm9vdGVyICYmIDxkaXY+e2Zvb3Rlcn08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhcmRDb250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZXRDYXJkU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gICAgaW5uZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICBgLFxuICAgIHJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgTGljZW5zZUNocm9tZSB9IGZyb20gJy4vTGljZW5zZUNocm9tZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU2VydmVyU3RhdHMgfSBmcm9tICcuL1NlcnZlclN0YXRzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXBncmFkZVBhZ2UoeyBuYXZNb2RlbCB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPFNlcnZlclN0YXRzIC8+XG4gICAgICAgIDxVcGdyYWRlSW5mbyAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuaW50ZXJmYWNlIFVwZ3JhZGVJbmZvUHJvcHMge1xuICBlZGl0aW9uTm90aWNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVXBncmFkZUluZm86IFJlYWN0LkZDPFVwZ3JhZGVJbmZvUHJvcHM+ID0gKHsgZWRpdGlvbk5vdGljZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaWNlbnNlQ2hyb21lIGhlYWRlcj1cIkFLTWluZCBTb2x1dGlvbnNcIiBlZGl0aW9uTm90aWNlPXtlZGl0aW9uTm90aWNlfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICd1cGdyYWRpbmcnKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVXBncmFkZVBhZ2UpO1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlclN0YXQge1xuICBhY3RpdmVBZG1pbnM6IG51bWJlcjtcbiAgYWN0aXZlRWRpdG9yczogbnVtYmVyO1xuICBhY3RpdmVTZXNzaW9uczogbnVtYmVyO1xuICBhY3RpdmVVc2VyczogbnVtYmVyO1xuICBhY3RpdmVWaWV3ZXJzOiBudW1iZXI7XG4gIGFkbWluczogbnVtYmVyO1xuICBhbGVydHM6IG51bWJlcjtcbiAgZGFzaGJvYXJkczogbnVtYmVyO1xuICBkYXRhc291cmNlczogbnVtYmVyO1xuICBlZGl0b3JzOiBudW1iZXI7XG4gIG9yZ3M6IG51bWJlcjtcbiAgcGxheWxpc3RzOiBudW1iZXI7XG4gIHNuYXBzaG90czogbnVtYmVyO1xuICBzdGFyczogbnVtYmVyO1xuICB0YWdzOiBudW1iZXI7XG4gIHVzZXJzOiBudW1iZXI7XG4gIHZpZXdlcnM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclN0YXRzID0gYXN5bmMgKCk6IFByb21pc2U8U2VydmVyU3RhdCB8IG51bGw+ID0+IHtcbiAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKVxuICAgIC5nZXQoJ2FwaS9hZG1pbi9zdGF0cycpXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9QYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAoeyB0ZXh0ID0gJ0xvYWRpbmcuLi4nIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbG9hZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PXt0ZXh0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc30+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PlxuICBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgYDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3NzIiwiQnV0dG9uIiwiQ29kZUVkaXRvciIsIk1vZGFsIiwidXNlVGhlbWUyIiwiZ2V0QmFja2VuZFNydiIsImNvbmZpZyIsIkNyYXdsZXJTdGFydEJ1dHRvbiIsInN0eWxlcyIsImdldFN0eWxlcyIsIm9wZW4iLCJzZXRPcGVuIiwiYm9keSIsInNldEJvZHkiLCJtb2RlIiwidGhlbWUiLCJ0aGVtZTIiLCJpc0xpZ2h0Iiwib25EaXNtaXNzIiwiZG9TdGFydCIsInBvc3QiLCJ0aGVuIiwidiIsImNvbnNvbGUiLCJsb2ciLCJ3cmFwIiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHQiLCJwYXJzZSIsInVzZUVmZmVjdCIsImlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQiLCJpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQiLCJMaXZlQ2hhbm5lbFNjb3BlIiwiZ2V0R3JhZmFuYUxpdmVTcnYiLCJDcmF3bGVyU3RhdHVzIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3Vic2NyaXB0aW9uIiwiZ2V0U3RyZWFtIiwic2NvcGUiLCJHcmFmYW5hIiwibmFtZXNwYWNlIiwicGF0aCIsInN1YnNjcmliZSIsIm5leHQiLCJldnQiLCJtZXNzYWdlIiwidW5zdWJzY3JpYmUiLCJzdGF0ZSIsInJ1bm5pbmciLCJzdHlsZXNGYWN0b3J5IiwidXNlVGhlbWUiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kVXJsIiwiaXNEYXJrIiwiZm9vdGVyQmciLCJwYWxldHRlIiwiZGFyazkiLCJncmF5NiIsImNvbnRhaW5lciIsImNvbG9ycyIsInBhbmVsQmciLCJmb290ZXIiLCJoZWFkZXIiLCJMaWNlbnNlQ2hyb21lIiwiZWRpdGlvbk5vdGljZSIsInN1YmhlYWRlciIsImNoaWxkcmVuIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIkNpcmNsZSIsInNpemUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3JkZXJSYWRpdXMiLCJDYXJkQ29udGFpbmVyIiwiTGlua0J1dHRvbiIsInVzZVN0eWxlczIiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiZ2V0U2VydmVyU3RhdHMiLCJjb250ZXh0U3J2IiwiTG9hZGVyIiwiU2VydmVyU3RhdHMiLCJzdGF0cyIsInNldFN0YXRzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFzQWNjZXNzVG9EYXRhU291cmNlcyIsImhhc0FjY2VzcyIsIkRhdGFTb3VyY2VzUmVhZCIsImlzR3JhZmFuYUFkbWluIiwiaGFzQWNjZXNzVG9BZG1pblVzZXJzIiwiVXNlcnNSZWFkIiwiQWN0aW9uU2VydmVyU3RhdHNSZWFkIiwibG9hZGVyIiwicm93IiwibmFtZSIsInZhbHVlIiwiZGFzaGJvYXJkcyIsInN0YXJzIiwidGFncyIsInBsYXlsaXN0cyIsInNuYXBzaG90cyIsImRvdWJsZVJvdyIsImRhdGFzb3VyY2VzIiwiYWxlcnRzIiwib3JncyIsInVzZXJzIiwiYWN0aXZlVXNlcnMiLCJhY3RpdmVTZXNzaW9ucyIsIm5vdEZvdW5kIiwiZmVhdHVyZVRvZ2dsZXMiLCJkYXNoYm9hcmRQcmV2aWV3cyIsImRhc2hib2FyZFByZXZpZXdzQWRtaW4iLCJzcGFjaW5nIiwidHlwb2dyYXBoeSIsImg2IiwiU3RhdENhcmQiLCJjb250ZW50IiwiZ2V0Q2FyZFN0eWxlcyIsImlubmVyIiwibWFwIiwiaXRlbSIsImNvbm5lY3QiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJVcGdyYWRlUGFnZSIsIm5hdk1vZGVsIiwiVXBncmFkZUluZm8iLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZJbmRleCIsImdldCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJMb2FkaW5nUGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9
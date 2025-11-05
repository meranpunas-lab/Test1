"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServerStats"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RCUDtBQUNBO0FBQ0E7O0FBTU8sTUFBTWhELE1BQU0sR0FBRyxDQUFDO0FBQUU3QixFQUFBQSxJQUFJLEdBQUc7QUFBVCxDQUFELEtBQW9DO0FBQ3hELHNCQUNFLHVEQUFDLHVDQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw2QkFDRSx1REFBQywyREFBRDtBQUFvQixZQUFJLEVBQUVBO0FBQTFCO0FBREY7QUFERixJQURGO0FBT0QsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7QUFDQTtBQUNBOztBQUdPLE1BQU1nRixJQUFjLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFDOUMsUUFBTXJHLE1BQU0sR0FBRzZDLHVEQUFVLENBQUM1QyxTQUFELENBQXpCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUQsTUFBaEI7QUFBQSxnQkFBeUJxRztBQUF6QjtBQURGLElBREY7QUFLRCxDQVBNOztBQVNQLE1BQU1wRyxTQUFTLEdBQUlNLEtBQUQsSUFDaEJmLDZDQUFJO0FBQ04scUJBQXFCZSxLQUFLLENBQUM0RSxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN0QyxHQUhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vQ3Jhd2xlclN0YXJ0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9DcmF3bGVyU3RhdHVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9TZXJ2ZXJTdGF0cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vc3RhdGUvYXBpcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBCdXR0b24sIENvZGVFZGl0b3IsIE1vZGFsLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGNvbnN0IENyYXdsZXJTdGFydEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lMigpKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSh7XG4gICAgbW9kZTogJ3RodW1icycsXG4gICAgdGhlbWU6IGNvbmZpZy50aGVtZTIuaXNMaWdodCA/ICdsaWdodCcgOiAnZGFyaycsXG4gIH0pO1xuICBjb25zdCBvbkRpc21pc3MgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcbiAgY29uc3QgZG9TdGFydCA9ICgpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5wb3N0KCcvYXBpL2FkbWluL2NyYXdsZXIvc3RhcnQnLCBib2R5KVxuICAgICAgLnRoZW4oKHYpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dPVCcsIHYpO1xuICAgICAgICBvbkRpc21pc3MoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCB0aXRsZT17J1N0YXJ0IGNyYXdsZXInfSBpc09wZW49e29wZW59IG9uRGlzbWlzcz17b25EaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMikgPz8gJyd9XG4gICAgICAgICAgICBzaG93TGluZU51bWJlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICAgICAgbGFuZ3VhZ2U9XCJqc29uXCJcbiAgICAgICAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQmx1cj17KHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZXRCb2R5KEpTT04ucGFyc2UodGV4dCkpOyAvLyBmb3JjZSBKU09OP1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2RvU3RhcnR9PlN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgU3RhcnRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzExMTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudCwgaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50LCBMaXZlQ2hhbm5lbFNjb3BlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBnZXRHcmFmYW5hTGl2ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQ3Jhd2xlclN0YXJ0QnV0dG9uIH0gZnJvbSAnLi9DcmF3bGVyU3RhcnRCdXR0b24nO1xuXG5pbnRlcmZhY2UgQ3Jhd2xlclN0YXR1c01lc3NhZ2Uge1xuICBzdGF0ZTogc3RyaW5nO1xuICBzdGFydGVkOiBzdHJpbmc7XG4gIGZpbmlzaGVkOiBzdHJpbmc7XG4gIGNvbXBsZXRlOiBudW1iZXI7XG4gIHF1ZXVlOiBudW1iZXI7XG4gIGxhc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENyYXdsZXJTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZTIoKSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxDcmF3bGVyU3RhdHVzTWVzc2FnZT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGdldEdyYWZhbmFMaXZlU3J2KClcbiAgICAgIC5nZXRTdHJlYW08Q3Jhd2xlclN0YXR1c01lc3NhZ2U+KHtcbiAgICAgICAgc2NvcGU6IExpdmVDaGFubmVsU2NvcGUuR3JhZmFuYSxcbiAgICAgICAgbmFtZXNwYWNlOiAnYnJvYWRjYXN0JyxcbiAgICAgICAgcGF0aDogJ2NyYXdsZXInLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoZXZ0KSA9PiB7XG4gICAgICAgICAgaWYgKGlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQoZXZ0KSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKGV2dC5tZXNzYWdlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTGl2ZUNoYW5uZWxTdGF0dXNFdmVudChldnQpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZXZ0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgaWYgKCFzdGF0dXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgTm8gc3RhdHVzIChuZXZlciBydW4pXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8Q3Jhd2xlclN0YXJ0QnV0dG9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoc3RhdHVzLCBudWxsLCAyKX08L3ByZT5cbiAgICAgIHtzdGF0dXMuc3RhdGUgIT09ICdydW5uaW5nJyAmJiA8Q3Jhd2xlclN0YXJ0QnV0dG9uIC8+fVxuICAgICAge3N0YXR1cy5zdGF0ZSAhPT0gJ3N0b3BwZWQnICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FkbWluL2NyYXdsZXIvc3RvcCcpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTdG9wXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXA6IGNzc2BcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJlZDtcbiAgICBgLFxuICAgIHJ1bm5pbmc6IGNzc2BcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgQ2FyZENvbnRhaW5lciwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U2VydmVyU3RhdHMsIFNlcnZlclN0YXQgfSBmcm9tICcuL3N0YXRlL2FwaXMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0xvYWRlcic7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IENyYXdsZXJTdGF0dXMgfSBmcm9tICcuL0NyYXdsZXJTdGF0dXMnO1xuXG5leHBvcnQgY29uc3QgU2VydmVyU3RhdHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0cywgc2V0U3RhdHNdID0gdXNlU3RhdGU8U2VydmVyU3RhdCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgaGFzQWNjZXNzVG9EYXRhU291cmNlcyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKTtcbiAgY29uc3QgaGFzQWNjZXNzVG9BZG1pblVzZXJzID0gY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5Vc2Vyc1JlYWQsIGNvbnRleHRTcnYuaXNHcmFmYW5hQWRtaW4pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uU2VydmVyU3RhdHNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKSkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgZ2V0U2VydmVyU3RhdHMoKS50aGVuKChzdGF0cykgPT4ge1xuICAgICAgICBzZXRTdGF0cyhzdGF0cyk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBpZiAoIWNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uU2VydmVyU3RhdHNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5JbnN0YW5jZSBzdGF0aXN0aWNzPC9oMj5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cbiAgICAgICAgICA8TG9hZGVyIHRleHQ9eydMb2FkaW5nIGluc3RhbmNlIHN0YXRzLi4uJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogc3RhdHMgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgIGNvbnRlbnQ9e1tcbiAgICAgICAgICAgICAgeyBuYW1lOiAnRGFzaGJvYXJkcyAoc3RhcnJlZCknLCB2YWx1ZTogYCR7c3RhdHMuZGFzaGJvYXJkc30gKCR7c3RhdHMuc3RhcnN9KWAgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnVGFncycsIHZhbHVlOiBzdGF0cy50YWdzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1BsYXlsaXN0cycsIHZhbHVlOiBzdGF0cy5wbGF5bGlzdHMgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnU25hcHNob3RzJywgdmFsdWU6IHN0YXRzLnNuYXBzaG90cyB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvZGFzaGJvYXJkcyd9IHZhcmlhbnQ9eydzZWNvbmRhcnknfT5cbiAgICAgICAgICAgICAgICBNYW5hZ2UgZGFzaGJvYXJkc1xuICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG91YmxlUm93fT5cbiAgICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgICBjb250ZW50PXtbeyBuYW1lOiAnRGF0YSBzb3VyY2VzJywgdmFsdWU6IHN0YXRzLmRhdGFzb3VyY2VzIH1dfVxuICAgICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICAgIGhhc0FjY2Vzc1RvRGF0YVNvdXJjZXMgJiYgKFxuICAgICAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9kYXRhc291cmNlcyd9IHZhcmlhbnQ9eydzZWNvbmRhcnknfT5cbiAgICAgICAgICAgICAgICAgICAgTWFuYWdlIGRhdGEgc291cmNlc1xuICAgICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgICBjb250ZW50PXtbeyBuYW1lOiAnQWxlcnRzJywgdmFsdWU6IHN0YXRzLmFsZXJ0cyB9XX1cbiAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2FsZXJ0aW5nL2xpc3QnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICBBbGVydHNcbiAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICBjb250ZW50PXtbXG4gICAgICAgICAgICAgIHsgbmFtZTogJ09yZ2FuaXNhdGlvbnMnLCB2YWx1ZTogc3RhdHMub3JncyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdVc2VycyB0b3RhbCcsIHZhbHVlOiBzdGF0cy51c2VycyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdBY3RpdmUgdXNlcnMgaW4gbGFzdCAzMCBkYXlzJywgdmFsdWU6IHN0YXRzLmFjdGl2ZVVzZXJzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ0FjdGl2ZSBzZXNzaW9ucycsIHZhbHVlOiBzdGF0cy5hY3RpdmVTZXNzaW9ucyB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgIGhhc0FjY2Vzc1RvQWRtaW5Vc2VycyAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9hZG1pbi91c2Vycyd9IHZhcmlhbnQ9eydzZWNvbmRhcnknfT5cbiAgICAgICAgICAgICAgICAgIE1hbmFnZSB1c2Vyc1xuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmR9Pk5vIHN0YXRzIGZvdW5kLjwvcD5cbiAgICAgICl9XG5cbiAgICAgIHtjb25maWcuZmVhdHVyZVRvZ2dsZXMuZGFzaGJvYXJkUHJldmlld3MgJiYgY29uZmlnLmZlYXR1cmVUb2dnbGVzLmRhc2hib2FyZFByZXZpZXdzQWRtaW4gJiYgPENyYXdsZXJTdGF0dXMgLz59XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgICBgLFxuICAgIHJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAmID4gZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIH1cblxuICAgICAgJiA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAzMy4zJTtcbiAgICAgIH1cbiAgICBgLFxuICAgIGRvdWJsZVJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICB9XG4gICAgYCxcblxuICAgIGxvYWRlcjogY3NzYFxuICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICBgLFxuXG4gICAgbm90Rm91bmQ6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5Lmg2LmZvbnRTaXplfTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMjkwcHg7XG4gICAgYCxcbiAgfTtcbn07XG5cbnR5cGUgU3RhdENhcmRQcm9wcyA9IHtcbiAgY29udGVudDogQXJyYXk8UmVjb3JkPHN0cmluZywgbnVtYmVyIHwgc3RyaW5nPj47XG4gIGZvb3Rlcj86IEpTWC5FbGVtZW50IHwgYm9vbGVhbjtcbn07XG5cbmNvbnN0IFN0YXRDYXJkID0gKHsgY29udGVudCwgZm9vdGVyIH06IFN0YXRDYXJkUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRDYXJkU3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGRpc2FibGVIb3Zlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtmb290ZXIgJiYgPGRpdj57Zm9vdGVyfTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldENhcmRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICBpbm5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBgLFxuICAgIGNvbnRlbnQ6IGNzc2BcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIGAsXG4gICAgcm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTdGF0IHtcbiAgYWN0aXZlQWRtaW5zOiBudW1iZXI7XG4gIGFjdGl2ZUVkaXRvcnM6IG51bWJlcjtcbiAgYWN0aXZlU2Vzc2lvbnM6IG51bWJlcjtcbiAgYWN0aXZlVXNlcnM6IG51bWJlcjtcbiAgYWN0aXZlVmlld2VyczogbnVtYmVyO1xuICBhZG1pbnM6IG51bWJlcjtcbiAgYWxlcnRzOiBudW1iZXI7XG4gIGRhc2hib2FyZHM6IG51bWJlcjtcbiAgZGF0YXNvdXJjZXM6IG51bWJlcjtcbiAgZWRpdG9yczogbnVtYmVyO1xuICBvcmdzOiBudW1iZXI7XG4gIHBsYXlsaXN0czogbnVtYmVyO1xuICBzbmFwc2hvdHM6IG51bWJlcjtcbiAgc3RhcnM6IG51bWJlcjtcbiAgdGFnczogbnVtYmVyO1xuICB1c2VyczogbnVtYmVyO1xuICB2aWV3ZXJzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTdGF0cyA9IGFzeW5jICgpOiBQcm9taXNlPFNlcnZlclN0YXQgfCBudWxsPiA9PiB7XG4gIHJldHVybiBnZXRCYWNrZW5kU3J2KClcbiAgICAuZ2V0KCdhcGkvYWRtaW4vc3RhdHMnKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9hZGluZ1BsYWNlaG9sZGVyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vUGFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKHsgdGV4dCA9ICdMb2FkaW5nLi4uJyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxvYWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD17dGV4dH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT5cbiAgY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygzKX07XG4gIGA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNzcyIsIkJ1dHRvbiIsIkNvZGVFZGl0b3IiLCJNb2RhbCIsInVzZVRoZW1lMiIsImdldEJhY2tlbmRTcnYiLCJjb25maWciLCJDcmF3bGVyU3RhcnRCdXR0b24iLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJvcGVuIiwic2V0T3BlbiIsImJvZHkiLCJzZXRCb2R5IiwibW9kZSIsInRoZW1lIiwidGhlbWUyIiwiaXNMaWdodCIsIm9uRGlzbWlzcyIsImRvU3RhcnQiLCJwb3N0IiwidGhlbiIsInYiLCJjb25zb2xlIiwibG9nIiwid3JhcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0IiwicGFyc2UiLCJ1c2VFZmZlY3QiLCJpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50IiwiaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50IiwiTGl2ZUNoYW5uZWxTY29wZSIsImdldEdyYWZhbmFMaXZlU3J2IiwiQ3Jhd2xlclN0YXR1cyIsInN0YXR1cyIsInNldFN0YXR1cyIsInN1YnNjcmlwdGlvbiIsImdldFN0cmVhbSIsInNjb3BlIiwiR3JhZmFuYSIsIm5hbWVzcGFjZSIsInBhdGgiLCJzdWJzY3JpYmUiLCJuZXh0IiwiZXZ0IiwibWVzc2FnZSIsInVuc3Vic2NyaWJlIiwic3RhdGUiLCJydW5uaW5nIiwiQ2FyZENvbnRhaW5lciIsIkxpbmtCdXR0b24iLCJ1c2VTdHlsZXMyIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImdldFNlcnZlclN0YXRzIiwiY29udGV4dFNydiIsIkxvYWRlciIsIlNlcnZlclN0YXRzIiwic3RhdHMiLCJzZXRTdGF0cyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhc0FjY2Vzc1RvRGF0YVNvdXJjZXMiLCJoYXNBY2Nlc3MiLCJEYXRhU291cmNlc1JlYWQiLCJpc0dyYWZhbmFBZG1pbiIsImhhc0FjY2Vzc1RvQWRtaW5Vc2VycyIsIlVzZXJzUmVhZCIsIkFjdGlvblNlcnZlclN0YXRzUmVhZCIsInRpdGxlIiwibG9hZGVyIiwicm93IiwibmFtZSIsInZhbHVlIiwiZGFzaGJvYXJkcyIsInN0YXJzIiwidGFncyIsInBsYXlsaXN0cyIsInNuYXBzaG90cyIsImRvdWJsZVJvdyIsImRhdGFzb3VyY2VzIiwiYWxlcnRzIiwib3JncyIsInVzZXJzIiwiYWN0aXZlVXNlcnMiLCJhY3RpdmVTZXNzaW9ucyIsIm5vdEZvdW5kIiwiZmVhdHVyZVRvZ2dsZXMiLCJkYXNoYm9hcmRQcmV2aWV3cyIsImRhc2hib2FyZFByZXZpZXdzQWRtaW4iLCJzcGFjaW5nIiwidHlwb2dyYXBoeSIsImg2IiwiZm9udFNpemUiLCJTdGF0Q2FyZCIsImNvbnRlbnQiLCJmb290ZXIiLCJnZXRDYXJkU3R5bGVzIiwiY29udGFpbmVyIiwiaW5uZXIiLCJtYXAiLCJpdGVtIiwiZ2V0IiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIkxvYWRpbmdQbGFjZWhvbGRlciIsIlBhZ2UiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=